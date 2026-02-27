export const radiansDegreesContent = {
  moduleId: 'radians-degrees',
  title: 'Radians & Degrees',
  description: 'Master radian-degree conversions, arc length, sector area, and the unit circle for the Digital SAT.',
  sections: {
    coreConcepts: {
      title: 'Core Concepts',
      summary: 'Radians measure angles by arc-to-radius ratio; π rad = 180° bridges both systems; arc length s = rθ and sector area A = ½r²θ require radians.',
      blocks: [
        {
          type: 'text',
          content: 'A **radian** is the angle whose arc length equals the radius. One full revolution = **2π radians = 360°**. The single bridge between systems: **π radians = 180°**.',
        },
        {
          type: 'formulaGrid',
          items: [
            { label: 'Degrees → Radians', formula: 'degrees $\\times$ (π / 180)', note: 'Multiply by π/180' },
            { label: 'Radians → Degrees', formula: 'radians $\\times$ (180 / π)', note: 'Multiply by 180/π' },
            { label: 'Arc Length', formula: '$s = r\\theta$', note: 'θ must be in radians' },
            { label: 'Sector Area', formula: '$A = ½r^2\\theta$', note: 'θ must be in radians' },
          ],
        },
        {
          type: 'table',
          title: 'Must-Know Angle Conversions',
          headers: ['Degrees', 'Radians', 'Fraction of Circle'],
          rows: [
            ['30°', 'π/6', '1/12'],
            ['45°', 'π/4', '1/8'],
            ['60°', 'π/3', '1/6'],
            ['90°', 'π/2', '1/4'],
            ['120°', '2π/3', '1/3'],
            ['180°', 'π', '1/2'],
            ['270°', '3π/2', '3/4'],
            ['360°', '2π', '1'],
          ],
        },
        {
          type: 'keyInsight',
          content: 'The formulas **s = rθ** and **A = ½r²θ** only work when θ is in radians. If the problem gives degrees, either convert first or use the proportion method: (θ/360) $\\times$ 2πr for arc length, (θ/360) $\\times$ πr² for sector area.',
        },
      ],
    },

    satPatterns: {
      title: 'SAT Patterns',
      summary: 'Five archetypes: direct conversion, arc/sector, unit circle coordinates, trig with radian input, and angular speed.',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Radian/Degree Archetypes',
          content: '**Direct conversion**: Angle given in one unit, asked in the other — multiply by π/180 or 180/π. **Arc/sector**: Real-world (wiper, pizza slice) — s = rθ or A = ½r²θ; θ must be radians. **Unit circle**: (a,b) on circle → a = cos θ, b = sin θ. **Trig input**: sin(π/3) — convert to 60° or use radian directly. **Angular speed**: rad/s $\\times$ time → s = rθ.',
        },
        {
          type: 'iconRow',
          items: [
            { icon: '🔄', label: 'Direct Conversion', description: '5π/6 rad → degrees' },
            { icon: '📐', label: 'Arc / Sector', description: 'Pizza slice, wiper blade' },
            { icon: '⭕', label: 'Unit Circle', description: '(a,b) → cos θ, sin θ' },
            { icon: '📊', label: 'Trig Radian Input', description: 'sin(π/3) = ?' },
            { icon: '⚙️', label: 'Angular Speed', description: 'rad/s, linear speed' },
          ],
        },
        {
          type: 'trapCard',
          title: 'Degrees in Arc Length Formula',
          wrong: 'Plugs θ = 60 into s = rθ → s = 5 $\\times$ 60 = 300. Answer is wildly too large.',
          correction: 'Convert first: 60° = π/3. Then s = 5 $\\times$ π/3 = **5π/3 ≈ 5.24**. The formulas s = rθ and A = ½r²θ require radians. Use (θ/360)$\\times$2πr if you prefer to keep degrees.',
        },
        {
          type: 'tip',
          content: '**Proportion method**: (θ/360)$\\times$2πr for arc, (θ/360)$\\times$πr² for sector — use when the angle is in degrees and conversion feels slow. **Radian formula**: s = rθ, A = ½r²θ — faster when θ is already in radians or you convert first.',
        },
      ],
    },

    methods: {
      title: 'Methods',
      summary: 'Four workflows: multiply-and-simplify conversion, two-path arc length (radian vs proportion), two-path sector area, and unit-circle coordinate lookup via reference angles.',
      blocks: [
        {
          type: 'steps',
          title: 'Method 1: Degree ↔ Radian Conversion',
          items: [
            'Multiply the angle by **π/180** (deg→rad) or **180/π** (rad→deg).',
            'Simplify the fraction. Example: 150° $\\times$ π/180 = 150π/180 = **5π/6**.',
          ],
        },
        {
          type: 'comparison',
          items: [
            { label: 'Arc Length — Radians (Faster)', content: '**s = rθ**\nDirect multiplication. Use when θ is in radians.', variant: 'correct' },
            { label: 'Arc Length — Degrees', content: '**s = (θ/360) $\\times$ 2πr**\nUse when the angle is in degrees and conversion feels slow.', variant: 'correct' },
          ],
        },
        {
          type: 'comparison',
          items: [
            { label: 'Sector Area — Radians (Faster)', content: '**A = ½r²θ**\nClean and fast when θ is in radians.', variant: 'correct' },
            { label: 'Sector Area — Degrees', content: '**A = (θ/360) $\\times$ πr²**\nUse when the angle is in degrees.', variant: 'correct' },
          ],
        },
        {
          type: 'steps',
          title: 'Method 4: Unit Circle Coordinate Lookup',
          items: [
            'Convert the radian measure to degrees if needed.',
            'Find the **reference angle** (acute angle to the x-axis).',
            'Use known sin/cos values for 30°, 45°, or 60°.',
            'Apply the correct **sign** using ASTC (All Students Take Calculus): Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-).',
          ],
        },
      ],
    },

    commonTraps: {
      title: 'Common Traps',
      summary: 'The top errors: plugging degrees into radian formulas, flipping the conversion factor, forgetting to simplify, and confusing arc length with sector area.',
      blocks: [
        {
          type: 'trapCard',
          title: 'Degrees in a Radian Formula',
          wrong: 'Plugs θ = 60 into s = rθ → s = 5 $\\times$ 60 = 300. Answer is wildly too large.',
          correction: 'Convert first: 60° = π/3. Then s = 5 $\\times$ π/3 = **5π/3 ≈ 5.24**. The formulas s = rθ and A = ½r²θ require radians.',
        },
        {
          type: 'trapCard',
          title: 'Flipped Conversion Factor',
          wrong: 'Converts 45° to radians by multiplying 45 $\\times$ 180/π ≈ 2578. The number gets bigger — wrong direction.',
          correction: 'Degrees → radians always makes the number **smaller**. Multiply by **π/180**: 45 $\\times$ π/180 = **π/4**.',
        },
        {
          type: 'trapCard',
          title: 'Unsimplified Fraction',
          wrong: 'Writes 120° = 120π/180 and selects it. SAT answer choices use simplified fractions.',
          correction: 'Always reduce: 120π/180 = **2π/3**. Find the GCD and divide.',
        },
        {
          type: 'trapCard',
          title: 'Arc Length vs Sector Area Mix-Up',
          wrong: 'Problem asks for **area**, but uses s = rθ and gives a linear answer.',
          correction: 'Arc length = **s = rθ** (linear units). Sector area = **A = ½r²θ** (square units). Read the question: "length" vs "area."',
        },
      ],
    },

    workedExamples: {
      title: 'Worked Examples',
      summary: 'A medium conversion/arc-length problem and a hard real-world sector-area problem showing full solution paths.',
      blocks: [
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'A circle has radius 10 cm. A central angle of **2π/5 radians** intercepts an arc. What is the arc length?',
          steps: [
            { label: 'Identify', content: 'r = 10 cm, θ = 2π/5 rad. Need arc length s.' },
            { label: 'Apply', content: '**s = rθ** = 10 $\\times$ (2π/5) = 20π/5 = **4π cm**' },
            { label: 'Answer', content: '**4π cm** ≈ 12.57 cm. SAT prefers the exact form with π.' },
          ],
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'A windshield wiper is 18 inches long and sweeps through 150°. What is the area of the cleaned region, to the nearest square inch?',
          steps: [
            { label: 'Convert', content: '150° $\\times$ π/180 = **5π/6 radians**' },
            { label: 'Formula', content: 'Sector area: **A = ½r²θ** = ½ $\\times$ 18² $\\times$ 5π/6' },
            { label: 'Compute', content: '½ $\\times$ 324 $\\times$ 5π/6 = 162 $\\times$ 5π/6 = **135π**' },
            { label: 'Answer', content: '135π ≈ **424 square inches**' },
          ],
        },
      ],
    },

    visualModels: {
      title: 'Visual Models',
      summary: 'Mental pictures: the unit circle with coordinates, side-by-side arc-vs-sector diagram, and a conversion-direction dial.',
      blocks: [
        {
          type: 'diagramRef',
          description: 'Unit circle showing key angles (0, π/6, π/4, π/3, π/2, … 2π) with (cos θ, sin θ) coordinates at each position. Quadrant signs labeled: Q1(+,+), Q2(-,+), Q3(-,-), Q4(+,-).',
        },
        {
          type: 'diagramRef',
          description: 'Two side-by-side diagrams: (1) Arc length highlighted as the curved edge, labeled s = rθ. (2) Sector area shaded as the pie-slice region, labeled A = ½r²θ.',
        },
        {
          type: 'comparison',
          items: [
            { label: 'Arc Length (1D)', content: 'The **curved edge** of the sector. Linear units (cm, in). Formula: **s = rθ**', variant: 'correct' },
            { label: 'Sector Area (2D)', content: 'The **shaded region** inside the sector. Square units (cm², in²). Formula: **A = ½r²θ**', variant: 'correct' },
          ],
        },
        {
          type: 'iconRow',
          items: [
            { icon: '⬇️', label: 'Degrees → Radians', description: 'Number gets smaller ($\\times$ π/180)' },
            { icon: '⬆️', label: 'Radians → Degrees', description: 'Number gets larger ($\\times$ 180/π)' },
          ],
        },
      ],
    },

    speedStrategy: {
      title: 'Speed & Strategy',
      summary: 'Use Desmos for verification, cancel π mentally in conversions, estimate with 1 rad ≈ 57°, and memorize the common-angle table to skip computation entirely.',
      blocks: [
        {
          type: 'strategyCard',
          title: 'Cancel-π Mental Shortcut',
          icon: '⚡',
          timing: '~10s',
          content: 'For radians → degrees, multiply the coefficient of π by 180. Example: **7π/4** → 7 $\\times$ 180/4 = 7 $\\times$ 45 = **315°**. The π cancels — no decimals needed.',
        },
        {
          type: 'strategyCard',
          title: 'Benchmark Sanity Check',
          icon: '✅',
          timing: '~5s',
          content: '1 radian ≈ 57.3°. If converting 2 radians and your answer is 360°, the conversion factor is flipped. Quick sanity checks catch the most common error.',
        },
        {
          type: 'strategyCard',
          title: 'Desmos Verification',
          icon: '🖩',
          timing: '~10s',
          content: 'Type **sin(pi/6)** in Desmos — if it returns 0.5, you\'re in radian mode and the conversion is correct. For arc/sector, type the formula directly: **0.5 * 10^2 * (2*pi/5)**.',
        },
        {
          type: 'keyInsight',
          content: 'The fastest students don\'t calculate conversions — they **recognize** them. Seeing 5π/6 and instantly knowing 150° saves 30+ seconds per question. Invest 10 minutes memorizing the table.',
        },
      ],
    },

    checkpoint: {
      title: 'Checkpoint',
      summary: 'Two retrieval-practice questions covering degree-to-radian conversion and sector area calculation.',
      blocks: [
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Convert **300°** to radians.',
          answer: '300° $\\times$ π/180 = 300π/180 = **5π/3 radians**. Simplify by dividing numerator and denominator by 60.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'A sector has radius 8 and central angle **3π/4 radians**. What is its area?',
          answer: '**A = ½r²θ** = ½ $\\times$ 64 $\\times$ 3π/4 = 32 $\\times$ 3π/4 = **24π** ≈ 75.4 square units.',
        },
      ],
    },
  },
};
