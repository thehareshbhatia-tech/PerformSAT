export const volumeLessonTabs = {

  1: {
    moduleId: 'volume',
    title: 'What Is Volume?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Volume measures the amount of 3D space inside a solid — always in cubic units.',
        blocks: [
          {
            type: 'text',
            content: '**Volume** answers the question: *How much space does this solid fill?* While area covers a flat region (square units), volume fills a three-dimensional region and is measured in **cubic units** — $\\text{in}^3$, $\\text{cm}^3$, $\\text{ft}^3$, etc.',
          },
          {
            type: 'iconRow',
            items: [
              { icon: '📏', label: '1D — Length', description: 'Units (cm, in)' },
              { icon: '⬜', label: '2D — Area', description: 'Square units (cm², in²)' },
              { icon: '📦', label: '3D — Volume', description: 'Cubic units (cm³, in³)' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Every volume formula is built on the same idea: **base area × height**. A rectangular prism is $l \\times w \\times h$. A cylinder is $\\pi r^2 \\times h$. A cone and a pyramid each take $\\frac{1}{3}$ of their corresponding prism/cylinder.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'SAT Reference Sheet',
            content: 'The digital SAT provides volume formulas on the reference sheet. You don\'t need to memorize them — but you **do** need to know which formula fits which shape and how to plug in the right values.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Shape Identification Is Step One',
            content: 'Recognition cue: a word problem describing a real-world 3D object. First move: identify the geometric shape — silo = cylinder, ball = sphere, ice cream cone = cone, box/crate = rectangular prism. Then pick the formula from the reference sheet and plug in.',
          },
          {
            type: 'trapCard',
            title: 'Diameter Given, Radius Expected',
            wrong: '"A cylindrical tank has a diameter of $8$ feet." Student plugs $8$ into $\\pi r^2 h$.',
            correction: 'If diameter $= 8$, then $r = 4$. Every volume formula uses radius, not diameter. Halve first, then substitute.',
          },
          {
            type: 'tip',
            content: 'Decision rule: all dimensions given → plug and compute. Volume given, one dimension missing → reverse-solve (isolate the unknown). Two shapes compared → set up a ratio and cancel common terms (often $\\pi$ cancels).',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'volume',
    title: 'Volume of a Rectangular Prism',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A rectangular prism (box) is the simplest 3D shape — multiply length × width × height.',
        blocks: [
          {
            type: 'formula',
            label: 'Rectangular Prism',
            content: '$$V = lwh$$',
            note: '$l$ = length, $w$ = width, $h$ = height',
          },
          {
            type: 'text',
            content: 'Think of stacking layers: the bottom layer has area $l \\times w$, and you stack $h$ identical layers on top. The total volume is the area of one layer times the number of layers.',
          },
          {
            type: 'keyInsight',
            content: 'It doesn\'t matter which dimension you call length, width, or height — multiplication is commutative. The SAT may label them differently (depth, thickness, etc.), but $V = lwh$ always works.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A shipping box is 18 inches long, 12 inches wide, and 8 inches tall. What is its volume in cubic inches?',
            steps: [
              { label: 'Identify values', content: '$l = 18$, $w = 12$, $h = 8$' },
              { label: 'Apply formula', content: '$V = 18 \\times 12 \\times 8$' },
              { label: 'Compute', content: '$V = 1{,}728 \\text{ in}^3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A rectangular aquarium holds exactly 7,500 cubic centimeters of water. Its base is 25 cm by 20 cm. What is the height of the water in centimeters?',
            steps: [
              { label: 'Set up', content: '$7{,}500 = 25 \\times 20 \\times h$' },
              { label: 'Simplify base area', content: '$7{,}500 = 500h$' },
              { label: 'Solve for h', content: '$h = \\frac{7{,}500}{500} = 15$ cm' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Unit Mismatch',
            wrong: 'Mixing inches and feet in the same formula (e.g., $V = 2 \\text{ ft} \\times 6 \\text{ in} \\times 3 \\text{ in}$).',
            correction: 'Convert all dimensions to the **same unit** before multiplying. $2 \\text{ ft} = 24 \\text{ in}$, so $V = 24 \\times 6 \\times 3 = 432 \\text{ in}^3$.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'volume',
    title: 'Volume of a Cube',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A cube is a rectangular prism where all edges are equal — volume is one edge cubed.',
        blocks: [
          {
            type: 'formula',
            label: 'Cube',
            content: '$$V = s^3$$',
            note: '$s$ = side length (all edges equal)',
          },
          {
            type: 'text',
            content: 'Since $l = w = h = s$, the rectangular prism formula $V = lwh$ simplifies to $V = s \\cdot s \\cdot s = s^3$. This is why raising a number to the third power is called **cubing** it.',
          },
          {
            type: 'comparison',
            title: 'Cube vs. Rectangular Prism',
            items: [
              { label: 'Cube', content: '**Edges:** All 12 edges equal\n**Faces:** 6 identical squares\n**Formula:** $V = s^3$' },
              { label: 'Rectangular Prism', content: '**Edges:** Three distinct edge lengths\n**Faces:** 3 pairs of rectangles\n**Formula:** $V = lwh$' },
            ],
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Working Backwards: Volume → Side Length',
            items: [
              'Given $V = s^3$, take the cube root of both sides',
              '$s = \\sqrt[3]{V}$',
              'Example: If $V = 64$, then $s = \\sqrt[3]{64} = 4$',
            ],
          },
          {
            type: 'tip',
            content: 'Know these perfect cubes for SAT speed: $1^3 = 1$, $2^3 = 8$, $3^3 = 27$, $4^3 = 64$, $5^3 = 125$, $6^3 = 216$, $10^3 = 1{,}000$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A cube has a volume of $343 \\text{ cm}^3$. What is the total surface area of the cube?',
            steps: [
              { label: 'Find side length', content: '$s = \\sqrt[3]{343} = 7$ cm' },
              { label: 'Surface area formula', content: '$SA = 6s^2 = 6(7)^2$' },
              { label: 'Compute', content: '$SA = 6 \\times 49 = 294 \\text{ cm}^2$' },
            ],
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'volume',
    title: 'Volume of a Cylinder',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A cylinder is a circle extruded upward — multiply the circular base area by the height.',
        blocks: [
          {
            type: 'formula',
            label: 'Cylinder',
            content: '$$V = \\pi r^2 h$$',
            note: '$r$ = radius of circular base, $h$ = height',
          },
          {
            type: 'text',
            content: 'Think of a cylinder as a **stack of circles**. Each circle has area $\\pi r^2$, and you stack them $h$ units tall. The same "base area × height" pattern from rectangular prisms applies here.',
          },
          {
            type: 'keyInsight',
            content: 'When the SAT says "in terms of $\\pi$," leave $\\pi$ in your answer (e.g., $80\\pi$). When it says "to the nearest integer," multiply by $3.14159\\ldots$ and round.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A cylindrical water tank has a diameter of 6 feet and a height of 10 feet. What is the volume, in cubic feet, in terms of $\\pi$?',
            steps: [
              { label: 'Find radius', content: 'Diameter $= 6$, so $r = 3$ ft' },
              { label: 'Apply formula', content: '$V = \\pi(3)^2(10) = \\pi \\cdot 9 \\cdot 10$' },
              { label: 'Simplify', content: '$V = 90\\pi \\text{ ft}^3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A candle maker pours wax into cylindrical molds. Each mold has a radius of 2 inches. If she has $200\\pi$ cubic inches of wax and fills each mold to a height of 5 inches, how many complete candles can she make?',
            steps: [
              { label: 'Volume per candle', content: '$V_1 = \\pi(2)^2(5) = 20\\pi \\text{ in}^3$' },
              { label: 'Number of candles', content: '$n = \\frac{200\\pi}{20\\pi} = 10$' },
              { label: 'Answer', content: 'She can make **10** complete candles.' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Diameter vs. Radius',
            wrong: 'Using the diameter directly: $V = \\pi(6)^2 \\cdot 10 = 360\\pi$.',
            correction: 'Always halve the diameter first. If diameter $= 6$, then $r = 3$: $V = \\pi(3)^2 \\cdot 10 = 90\\pi$.',
          },
        ],
      },
      speedStrategy: {
        title: 'Speed & Strategy',
        blocks: [
          {
            type: 'strategyCard',
            title: 'Leave π Alone',
            icon: '⚡',
            timing: '~15s saved',
            content: 'When answer choices contain $\\pi$, never compute a decimal. Keep $\\pi$ symbolic: $\\pi r^2 h$ → simplify the numbers → match an answer. This eliminates rounding errors and saves time.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'volume',
    title: 'Volume of a Sphere',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A sphere\'s volume depends only on its radius — use $\\frac{4}{3}\\pi r^3$.',
        blocks: [
          {
            type: 'formula',
            label: 'Sphere',
            content: '$$V = \\frac{4}{3}\\pi r^3$$',
            note: '$r$ = radius',
          },
          {
            type: 'text',
            content: 'A sphere is perfectly symmetric — every point on its surface is the same distance $r$ from the center. The $\\frac{4}{3}$ factor comes from calculus, but on the SAT you just need the formula from the reference sheet.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Radius Is Cubed',
            content: 'Because volume uses $r^3$, doubling the radius multiplies the volume by $2^3 = 8$. This is a favorite SAT scaling question: "If the radius doubles, the volume becomes **8 times** as large."',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A basketball has a diameter of 9.4 inches. What is its volume to the nearest cubic inch?',
            steps: [
              { label: 'Find radius', content: '$r = \\frac{9.4}{2} = 4.7$ in' },
              { label: 'Apply formula', content: '$V = \\frac{4}{3}\\pi(4.7)^3$' },
              { label: 'Compute $r^3$', content: '$4.7^3 = 103.823$' },
              { label: 'Multiply', content: '$V = \\frac{4}{3}\\pi(103.823) \\approx 434.9$ cubic inches' },
              { label: 'Round', content: '$V \\approx 435 \\text{ in}^3$' },
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
            title: 'Scaling Questions: Radius × $k$ → Volume × $k^3$',
            content: 'Recognition cue: "if the radius doubles/triples, what happens to the volume?" First move: don\'t recalculate — apply the scaling rule. Multiply the radius by $k$ → volume multiplies by $k^3$. Double the radius → $8\\times$ the volume.',
          },
          {
            type: 'trapCard',
            title: 'Scaling Linearly Instead of Cubically',
            wrong: '"Radius doubles, so volume doubles too."',
            correction: 'Volume depends on $r^3$, not $r$. Doubling $r$ means $(2r)^3 = 8r^3$. The volume becomes $8$ times as large, not $2$ times.',
          },
          {
            type: 'tip',
            content: 'When comparing two spheres, set up the ratio $\\frac{V_2}{V_1} = \\left(\\frac{r_2}{r_1}\\right)^3$. The constants $\\frac{4}{3}\\pi$ cancel completely. You never need to compute actual volumes.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'volume',
    title: 'Volume of a Cone',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A cone is one-third of a cylinder with the same base and height.',
        blocks: [
          {
            type: 'formula',
            label: 'Cone',
            content: '$$V = \\frac{1}{3}\\pi r^2 h$$',
            note: '$r$ = radius of circular base, $h$ = height',
          },
          {
            type: 'text',
            content: 'If you filled a cone with water and poured it into a cylinder of the same radius and height, you\'d need to fill the cone **three times** to fill the cylinder. That\'s where the $\\frac{1}{3}$ comes from.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Cylinder', formula: '$V = \\pi r^2 h$', note: 'Full "stack of circles"' },
              { label: 'Cone', formula: '$V = \\frac{1}{3}\\pi r^2 h$', note: 'One-third of the cylinder' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The relationship $V_{\\text{cone}} = \\frac{1}{3} V_{\\text{cylinder}}$ is tested directly. If the SAT gives you a cylinder\'s volume and asks for the cone, just divide by 3.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'An ice cream cone has a diameter of 8 cm and a height of 12 cm. What is the volume, in terms of $\\pi$?',
            steps: [
              { label: 'Find radius', content: '$r = \\frac{8}{2} = 4$ cm' },
              { label: 'Apply formula', content: '$V = \\frac{1}{3}\\pi(4)^2(12) = \\frac{1}{3}\\pi \\cdot 16 \\cdot 12$' },
              { label: 'Simplify', content: '$V = \\frac{192\\pi}{3} = 64\\pi \\text{ cm}^3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A cone and a cylinder have the same radius and the same volume. If the cylinder\'s height is 5 inches, what is the cone\'s height?',
            steps: [
              { label: 'Set volumes equal', content: '$\\frac{1}{3}\\pi r^2 h_c = \\pi r^2 (5)$' },
              { label: 'Cancel $\\pi r^2$', content: '$\\frac{1}{3}h_c = 5$' },
              { label: 'Solve', content: '$h_c = 15$ inches' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Forgetting the ⅓',
            wrong: 'Using $V = \\pi r^2 h$ for a cone (that\'s the cylinder formula).',
            correction: 'A cone is always $\\frac{1}{3}$ of the corresponding cylinder: $V = \\frac{1}{3}\\pi r^2 h$.',
          },
          {
            type: 'trapCard',
            title: 'Slant Height vs. Actual Height',
            wrong: 'Using the slant height $\\ell$ as $h$ in the volume formula.',
            correction: 'Volume uses the **perpendicular height** from base to apex, not the slant. If given $\\ell$ and $r$, use $h = \\sqrt{\\ell^2 - r^2}$.',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'volume',
    title: 'Volume of a Triangular Prism',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A triangular prism has two triangular faces connected by rectangles — volume is the triangle area times the prism\'s length.',
        blocks: [
          {
            type: 'formula',
            label: 'Triangular Prism',
            content: '$$V = \\frac{1}{2}bh \\times l$$',
            note: '$b$ = base of triangle, $h$ = height of triangle, $l$ = length (depth) of prism',
          },
          {
            type: 'text',
            content: 'The pattern holds: **base area × depth**. For a triangular prism the base is a triangle with area $\\frac{1}{2}bh$, and the prism extends that triangle through a length $l$.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Three Different Measurements',
            content: 'Don\'t confuse the triangle\'s height $h$ with the prism\'s length $l$. The triangle\'s base and height define the cross-section; the prism\'s length tells you how deep that cross-section extends.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving a Triangular Prism Problem',
            items: [
              'Identify the **triangular face** and note its base $b$ and height $h$',
              'Compute the triangle area: $A = \\frac{1}{2}bh$',
              'Identify the prism\'s **length** $l$ (the distance between the two triangular faces)',
              'Multiply: $V = A \\times l = \\frac{1}{2}bh \\times l$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A tent has a triangular cross-section with a base of 8 feet and a height of 6 feet. The tent is 10 feet long. What is the volume of the tent in cubic feet?',
            steps: [
              { label: 'Triangle area', content: '$A = \\frac{1}{2}(8)(6) = 24 \\text{ ft}^2$' },
              { label: 'Multiply by length', content: '$V = 24 \\times 10 = 240 \\text{ ft}^3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A triangular prism has a volume of 180 cubic inches. Its triangular face has a base of 12 inches and a height of 5 inches. What is the length of the prism?',
            steps: [
              { label: 'Triangle area', content: '$A = \\frac{1}{2}(12)(5) = 30 \\text{ in}^2$' },
              { label: 'Set up equation', content: '$180 = 30 \\times l$' },
              { label: 'Solve', content: '$l = \\frac{180}{30} = 6$ inches' },
            ],
          },
        ],
      },
      speedStrategy: {
        title: 'Speed & Strategy',
        blocks: [
          {
            type: 'strategyCard',
            title: 'Two-Step Volume',
            icon: '⚡',
            timing: '~20s',
            content: 'Always break it into two steps: (1) compute the triangle area, (2) multiply by the length. This prevents the common mistake of multiplying all three numbers without the $\\frac{1}{2}$.',
          },
        ],
      },
    },
  },

};
