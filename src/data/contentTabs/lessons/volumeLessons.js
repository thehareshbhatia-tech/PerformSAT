export const volumeLessonTabs = {

  // ─── FUNDAMENTALS ───────────────────────────────────────────────────

  1: {
    moduleId: 'volume',
    title: 'Volume Fundamentals',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Volume measures the three-dimensional space inside a solid, always expressed in cubic units.',
        blocks: [
          {
            type: 'text',
            content: '**Volume** answers the question: *How much space does this solid occupy?* While area covers a flat region in square units, volume fills a three-dimensional region and is measured in **cubic units** such as $\\text{in}^3$, $\\text{cm}^3$, or $\\text{ft}^3$.',
          },
          {
            type: 'keyInsight',
            content: 'Every volume formula on the SAT is built from the same core idea: **base area $\\times$ height**. A rectangular prism uses $l \\times w \\times h$. A cylinder uses $\\pi r^2 \\times h$. A cone and pyramid each take $\\frac{1}{3}$ of their corresponding prism or cylinder.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Rectangular Prism', formula: '$V = lwh$', note: 'Base area $= lw$' },
              { label: 'Cube', formula: '$V = s^3$', note: 'Special case: $l = w = h = s$' },
              { label: 'Cylinder', formula: '$V = \\pi r^2 h$', note: 'Base area $= \\pi r^2$' },
              { label: 'Sphere', formula: '$V = \\frac{4}{3}\\pi r^3$', note: 'No height — radius only' },
              { label: 'Cone', formula: '$V = \\frac{1}{3}\\pi r^2 h$', note: '$\\frac{1}{3}$ of the cylinder' },
              { label: 'Triangular Prism', formula: '$V = \\frac{1}{2}bh \\cdot l$', note: 'Base area $= \\frac{1}{2}bh$' },
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'SAT Reference Sheet',
            content: 'The digital SAT provides every volume formula on the reference sheet. Memorization is not required, but identifying which formula fits which shape and substituting values correctly is the tested skill.',
          },
          {
            type: 'table',
            title: 'Dimension vs. Unit Type',
            headers: ['Dimension', 'Measures', 'Unit Type', 'Example'],
            rows: [
              ['1D', 'Length / Distance', 'Linear units', 'cm, in, ft'],
              ['2D', 'Area', 'Square units', '$\\text{cm}^2$, $\\text{in}^2$'],
              ['3D', 'Volume', 'Cubic units', '$\\text{cm}^3$, $\\text{in}^3$'],
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
            title: 'Shape Identification Is Step One',
            content: 'Recognition cue: a word problem describing a real-world 3D object. Silo or can $=$ cylinder. Ball $=$ sphere. Ice-cream cone $=$ cone. Box, crate, or room $=$ rectangular prism. Wedge, tent, or ramp $=$ triangular prism. Identify the shape, select the formula from the reference sheet, then substitute.',
          },
          {
            type: 'trapCard',
            title: 'Diameter Given, Radius Expected',
            wrong: '"A cylindrical tank has a diameter of $8$ feet." Student plugs $8$ into $\\pi r^2 h$.',
            correction: 'Every volume formula uses radius, not diameter. If diameter $= 8$, then $r = 4$. Halve first, then substitute.',
          },
          {
            type: 'trapCard',
            title: 'Mixing Up Units',
            wrong: 'One dimension is given in feet and another in inches. Student multiplies them directly.',
            correction: 'All dimensions must be in the same unit before any multiplication. Convert first, compute second.',
          },
          {
            type: 'tip',
            content: '**Decision rule:** All dimensions given $\\to$ plug and compute. Volume given with one dimension missing $\\to$ reverse-solve (isolate the unknown). Two shapes compared $\\to$ set up a ratio and cancel common factors (often $\\pi$ cancels).',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'General Volume Problem Strategy',
            items: [
              'Read the problem and identify the 3D shape (map real-world objects to geometric names).',
              'Select the matching formula from the reference sheet.',
              'Extract dimensions from the problem. Convert diameter to radius if needed. Convert all units to match.',
              'Substitute and simplify. Leave $\\pi$ symbolic if answer choices contain $\\pi$; otherwise compute a decimal.',
              'Check the answer: does the unit label say cubic? Does the magnitude make sense?',
            ],
          },
          {
            type: 'steps',
            title: 'Reverse-Solving for a Missing Dimension',
            items: [
              'Write the formula with the known volume on one side.',
              'Substitute all known dimensions.',
              'Isolate the unknown variable algebraically.',
              'Solve and include the correct unit.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Using Area Formulas Instead of Volume',
            wrong: 'Student computes $\\pi r^2$ and reports that as the answer when volume is asked.',
            correction: '$\\pi r^2$ is the area of a circle (the base). For a cylinder, multiply by height: $V = \\pi r^2 h$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the $\\frac{1}{3}$ Factor',
            wrong: 'Cone volume computed as $\\pi r^2 h$ instead of $\\frac{1}{3}\\pi r^2 h$.',
            correction: 'A cone is exactly $\\frac{1}{3}$ of the cylinder with the same base and height. The $\\frac{1}{3}$ must appear in the formula.',
          },
          {
            type: 'trapCard',
            title: 'Reporting the Wrong Units',
            wrong: 'Student writes $\\text{cm}^2$ for a volume answer.',
            correction: 'Volume is always in cubic units ($\\text{cm}^3$, $\\text{in}^3$, $\\text{ft}^3$). Square units indicate area, not volume.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A cylindrical storage tank has a diameter of $10$ feet and a height of $8$ feet. What is the volume, in cubic feet, in terms of $\\pi$?',
            steps: [
              { label: 'Identify shape', content: 'Cylindrical tank $\\to$ cylinder formula: $V = \\pi r^2 h$' },
              { label: 'Convert diameter to radius', content: '$d = 10 \\Rightarrow r = 5$ ft' },
              { label: 'Substitute', content: '$V = \\pi(5)^2(8) = \\pi \\cdot 25 \\cdot 8$' },
              { label: 'Simplify', content: '$V = 200\\pi \\text{ ft}^3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A cone and a cylinder share the same circular base with radius $6$ and the same height $h$. The cylinder\'s volume is $360\\pi$. What is the cone\'s volume?',
            steps: [
              { label: 'Find height from cylinder', content: '$\\pi(6)^2 h = 360\\pi \\Rightarrow 36h = 360 \\Rightarrow h = 10$' },
              { label: 'Apply cone relationship', content: '$V_{\\text{cone}} = \\frac{1}{3} V_{\\text{cylinder}} = \\frac{360\\pi}{3}$' },
              { label: 'Result', content: '$V_{\\text{cone}} = 120\\pi$' },
            ],
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'volume',
    title: 'Volume on the SAT',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'SAT volume problems test formula selection, unit handling, and reverse-solving rather than memorization.',
        blocks: [
          {
            type: 'text',
            content: 'The SAT reference sheet provides all volume formulas. The tested skill is matching a described object to the correct formula, substituting accurately, and handling variations such as missing dimensions, unit conversions, and scaling comparisons.',
          },
          {
            type: 'table',
            title: 'Common SAT Volume Question Types',
            headers: ['Question Type', 'What You Do'],
            rows: [
              ['Compute volume', 'Identify shape, select formula, plug in, simplify'],
              ['Reverse-solve', 'Volume given, isolate the missing dimension'],
              ['Scaling / comparison', 'Use ratio rules: $V \\propto r^3$ for spheres, $V \\propto r^2 h$ for cylinders'],
              ['Unit conversion', 'Convert all dimensions to the same unit before computing'],
            ],
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Scaling Quick Rules',
            content: 'If every linear dimension is multiplied by $k$: new volume $= k^3 \\times$ old volume. If only the radius doubles (height unchanged): new volume $= 4 \\times$ old volume for a cylinder.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"In Terms of $\\pi$" vs. Decimal Approximation',
            content: 'Recognition cue: answer choices containing $\\pi$ (like $64\\pi$ or $100\\pi$). When you see this, leave $\\pi$ as a symbol throughout the calculation. When answer choices are decimals, multiply by $\\pi \\approx 3.14159$ at the end.',
          },
          {
            type: 'trapCard',
            title: 'Premature Decimal Conversion',
            wrong: 'Student converts $\\pi \\approx 3.14$ early in the calculation and accumulates rounding error.',
            correction: 'Keep $\\pi$ symbolic until the final step. Simplify the numeric coefficient first, then multiply by $\\pi$ only if a decimal answer is required.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'SAT Volume Problem Workflow',
            items: [
              'Read the problem and identify the 3D shape from context clues (tank, ball, box, cone, etc.).',
              'Pull the correct formula from the reference sheet.',
              'Extract all given dimensions. Convert diameter to radius. Ensure consistent units.',
              'Substitute values and simplify. If answer choices contain $\\pi$, keep $\\pi$ symbolic.',
              'If a dimension is missing, isolate it algebraically.',
              'Verify the answer has cubic units and a reasonable magnitude.',
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
            problem: 'A spherical balloon has a radius of $3$ inches. If the radius is tripled, by what factor does the volume increase?',
            steps: [
              { label: 'Original volume', content: '$V_1 = \\frac{4}{3}\\pi(3)^3 = 36\\pi$' },
              { label: 'New volume', content: '$V_2 = \\frac{4}{3}\\pi(9)^3 = 972\\pi$' },
              { label: 'Factor', content: '$\\frac{V_2}{V_1} = \\frac{972\\pi}{36\\pi} = 27$' },
              { label: 'Shortcut', content: 'Radius tripled $\\Rightarrow$ volume $\\times 3^3 = 27$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A cylinder has a radius of $4$ and a height of $10$. A cone has the same radius and height. What is the combined volume of both shapes in terms of $\\pi$?',
            answer: 'Cylinder: $V = \\pi(4)^2(10) = 160\\pi$. Cone: $V = \\frac{1}{3}(160\\pi) = \\frac{160\\pi}{3}$. Combined: $160\\pi + \\frac{160\\pi}{3} = \\frac{480\\pi + 160\\pi}{3} = \\frac{640\\pi}{3}$.',
          },
        ],
      },
    },
  },

  // ─── RECTANGULAR PRISM ──────────────────────────────────────────────

  3: {
    moduleId: 'volume',
    title: 'Rectangular Prism',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A rectangular prism (box) is the simplest 3D shape on the SAT. Multiply length by width by height.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'Volume', formula: '$V = lwh$', note: 'length $\\times$ width $\\times$ height' },
              { label: 'Surface Area', formula: '$SA = 2(lw + lh + wh)$', note: 'Sum of all six faces' },
            ],
          },
          {
            type: 'text',
            content: 'Think of stacking layers: the bottom layer has area $l \\times w$, and you stack $h$ identical layers on top. The total volume is the area of one layer times the number of layers.',
          },
          {
            type: 'keyInsight',
            content: 'Multiplication is commutative, so it does not matter which dimension is called length, width, or height. The SAT may label them as depth, thickness, or other terms, but $V = lwh$ applies regardless.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Rectangular Prism vs. Box',
            content: 'A rectangular prism, a rectangular box, and a cuboid are all the same shape: six rectangular faces meeting at right angles. On the SAT, the word "box" or "crate" signals this formula.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Reverse-Solve for a Missing Dimension',
            content: 'Recognition cue: volume given along with two of three dimensions; the question asks for the third. Rearrange: $h = \\frac{V}{lw}$, $w = \\frac{V}{lh}$, or $l = \\frac{V}{wh}$.',
          },
          {
            type: 'trapCard',
            title: 'Unit Mismatch',
            wrong: 'A box is $2$ ft $\\times$ $6$ in $\\times$ $3$ in. Student multiplies $2 \\times 6 \\times 3 = 36$.',
            correction: 'All dimensions must share the same unit. Convert $2$ ft $= 24$ in. Then $V = 24 \\times 6 \\times 3 = 432$ in$^3$.',
          },
          {
            type: 'trapCard',
            title: 'Surface Area vs. Volume Confusion',
            wrong: 'Problem asks for volume; student computes $2(lw + lh + wh)$ instead.',
            correction: 'Volume $= lwh$ (one product). Surface area $= 2(lw + lh + wh)$ (three pair-products summed and doubled). Read the question carefully.',
          },
          {
            type: 'tip',
            content: '**Decision rule:** All dimensions given $\\to$ multiply directly. One dimension missing $\\to$ divide the volume by the product of the other two. Two shapes compared $\\to$ form a ratio.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing Rectangular Prism Volume',
            items: [
              'Identify the three dimensions: length, width, height (or equivalent labels).',
              'Ensure all dimensions are in the same unit.',
              'Multiply: $V = l \\times w \\times h$.',
              'Include cubic units in the answer.',
            ],
          },
          {
            type: 'steps',
            title: 'Reverse-Solving for a Missing Dimension',
            items: [
              'Write $V = lwh$ with the known volume on the left.',
              'Substitute the two known dimensions.',
              'Isolate the unknown: e.g., $h = \\frac{V}{lw}$.',
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
            wrong: 'Mixing inches and feet in the same formula: $V = 2 \\text{ ft} \\times 6 \\text{ in} \\times 3 \\text{ in}$.',
            correction: 'Convert all dimensions to the **same unit** before multiplying. $2 \\text{ ft} = 24 \\text{ in}$, so $V = 24 \\times 6 \\times 3 = 432 \\text{ in}^3$.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Volume and Surface Area',
            wrong: 'Computing $2(lw + lh + wh)$ when the problem asks for volume.',
            correction: 'Volume is a single product $lwh$. Surface area sums the areas of all six faces. Check what the question actually asks.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A shipping box is $18$ inches long, $12$ inches wide, and $8$ inches tall. What is its volume in cubic inches?',
            steps: [
              { label: 'Identify values', content: '$l = 18$, $w = 12$, $h = 8$' },
              { label: 'Apply formula', content: '$V = 18 \\times 12 \\times 8$' },
              { label: 'Compute', content: '$V = 1{,}728 \\text{ in}^3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A rectangular aquarium holds exactly $7{,}500$ cubic centimeters of water. Its base is $25$ cm by $20$ cm. What is the height of the water?',
            steps: [
              { label: 'Set up', content: '$7{,}500 = 25 \\times 20 \\times h$' },
              { label: 'Simplify base area', content: '$7{,}500 = 500h$' },
              { label: 'Solve for $h$', content: '$h = \\frac{7{,}500}{500} = 15$ cm' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A rectangular box has dimensions $x$, $2x$, and $3x$. If the volume is $162$, what is $x$?',
            steps: [
              { label: 'Set up', content: '$V = x \\cdot 2x \\cdot 3x = 6x^3$' },
              { label: 'Solve', content: '$6x^3 = 162 \\Rightarrow x^3 = 27$' },
              { label: 'Cube root', content: '$x = \\sqrt[3]{27} = 3$' },
            ],
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'volume',
    title: 'Simple Rectangular Prism Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Direct application of $V = lwh$ with straightforward numeric dimensions.',
        blocks: [
          {
            type: 'formula',
            label: 'Rectangular Prism Volume',
            content: '$$V = lwh$$',
            note: '$l$ = length, $w$ = width, $h$ = height',
          },
          {
            type: 'text',
            content: 'For basic rectangular prism problems, all three dimensions are explicitly given. The task is to identify the correct values, ensure consistent units, and multiply.',
          },
          {
            type: 'keyInsight',
            content: 'When a problem states dimensions like "$5$ by $8$ by $3$," these map directly to $l$, $w$, and $h$ in any order. The product is the same regardless of assignment.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Straightforward Plug-In',
            content: 'Recognition cue: all three dimensions given explicitly (no algebra required). Multiply the three numbers and match the answer choice.',
          },
          {
            type: 'trapCard',
            title: 'Reading the Wrong Dimension',
            wrong: 'Problem says "a container $4$ ft long, $3$ ft wide, and $2$ ft deep." Student uses depth as a separate concept instead of recognizing it as height.',
            correction: '"Depth," "height," "thickness," and "tall" all refer to the third dimension. Use all three given measurements in $V = lwh$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Direct Computation',
            items: [
              'Extract the three dimensions from the problem statement.',
              'Verify all dimensions use the same unit.',
              'Compute $V = l \\times w \\times h$.',
              'Report the answer in cubic units.',
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
            problem: 'A storage bin is $2.5$ feet long, $1.5$ feet wide, and $2$ feet deep. How many cubic feet of material can it hold?',
            steps: [
              { label: 'Identify values', content: '$l = 2.5$, $w = 1.5$, $h = 2$' },
              { label: 'Multiply', content: '$V = 2.5 \\times 1.5 \\times 2 = 7.5 \\text{ ft}^3$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A box has dimensions $9$ in $\\times$ $4$ in $\\times$ $6$ in. What is its volume?',
            answer: '$V = 9 \\times 4 \\times 6 = 216 \\text{ in}^3$.',
          },
        ],
      },
    },
  },

  // ─── CUBE ───────────────────────────────────────────────────────────

  5: {
    moduleId: 'volume',
    title: 'Cube',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A cube is a rectangular prism where all edges are equal. Volume is a single edge length cubed.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'Volume', formula: '$V = s^3$', note: '$s$ = side length' },
              { label: 'Surface Area', formula: '$SA = 6s^2$', note: '6 identical square faces' },
            ],
          },
          {
            type: 'text',
            content: 'Since $l = w = h = s$, the rectangular prism formula $V = lwh$ simplifies to $V = s \\cdot s \\cdot s = s^3$. This is the origin of the term "cubing" a number.',
          },
          {
            type: 'comparison',
            title: 'Cube vs. Rectangular Prism',
            items: [
              { label: 'Cube', content: '**Edges:** All 12 edges equal\n**Faces:** 6 identical squares\n**Formula:** $V = s^3$' },
              { label: 'Rectangular Prism', content: '**Edges:** Three distinct edge lengths\n**Faces:** 3 pairs of rectangles\n**Formula:** $V = lwh$' },
            ],
          },
          {
            type: 'table',
            title: 'Perfect Cubes to Recognize',
            headers: ['$s$', '$s^3$'],
            rows: [
              ['$1$', '$1$'],
              ['$2$', '$8$'],
              ['$3$', '$27$'],
              ['$4$', '$64$'],
              ['$5$', '$125$'],
              ['$6$', '$216$'],
              ['$10$', '$1{,}000$'],
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
            title: 'Volume $\\leftrightarrow$ Surface Area Bridge',
            content: 'Recognition cue: cube volume given, surface area asked (or vice versa). Find the side length first. From volume: $s = \\sqrt[3]{V}$. From surface area: $s = \\sqrt{\\frac{SA}{6}}$. Then compute the requested quantity.',
          },
          {
            type: 'trapCard',
            title: 'Square Root Instead of Cube Root',
            wrong: 'Volume $= 64$. Student writes $s = \\sqrt{64} = 8$.',
            correction: 'Volume uses $s^3$, not $s^2$. Take the **cube root**: $s = \\sqrt[3]{64} = 4$.',
          },
          {
            type: 'trapCard',
            title: 'Scaling Confusion',
            wrong: '"Side length doubles, so volume doubles."',
            correction: 'Volume depends on $s^3$. Doubling $s$ gives $(2s)^3 = 8s^3$. The volume increases by a factor of $8$.',
          },
          {
            type: 'tip',
            content: 'Memorize the perfect cubes through $10^3 = 1{,}000$. Recognizing $\\sqrt[3]{125} = 5$ or $\\sqrt[3]{216} = 6$ instantly saves significant time.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding Volume from Side Length',
            items: [
              'Identify the side length $s$ (all edges of a cube are equal).',
              'Compute $V = s^3$.',
            ],
          },
          {
            type: 'steps',
            title: 'Working Backwards: Volume $\\to$ Side Length',
            items: [
              'Given $V = s^3$, take the cube root: $s = \\sqrt[3]{V}$.',
              'Use the side length to find surface area, diagonal, or other quantities as needed.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Confusing $s^2$ and $s^3$',
            wrong: '$s = 5$. Student computes volume as $5^2 = 25$.',
            correction: 'Volume $= s^3 = 5^3 = 125$. The expression $s^2$ gives the area of one face, not the volume.',
          },
          {
            type: 'trapCard',
            title: 'Dividing Surface Area by 6 to Get Volume',
            wrong: '$SA = 150$. Student writes $V = \\frac{150}{6} = 25$.',
            correction: '$\\frac{SA}{6} = s^2$, not $s^3$. First find $s^2 = 25 \\Rightarrow s = 5$, then $V = 5^3 = 125$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
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
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The surface area of a cube is $384 \\text{ in}^2$. What is the volume of the cube?',
            steps: [
              { label: 'Find $s^2$', content: '$s^2 = \\frac{384}{6} = 64$' },
              { label: 'Find $s$', content: '$s = \\sqrt{64} = 8$ in' },
              { label: 'Find volume', content: '$V = 8^3 = 512 \\text{ in}^3$' },
            ],
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'volume',
    title: 'Simple Cube Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A basic cube problem provides the side length or volume and asks for a related quantity.',
        blocks: [
          {
            type: 'formula',
            label: 'Cube Volume',
            content: '$$V = s^3$$',
            note: '$s$ = edge length; reverse: $s = \\sqrt[3]{V}$',
          },
          {
            type: 'text',
            content: 'On easier cube problems, the side length is given directly or the volume is a recognizable perfect cube. The key step is selecting $V = s^3$ and executing the arithmetic correctly.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Perfect Cube Recognition',
            content: 'Recognition cue: volume is $8$, $27$, $64$, $125$, $216$, or $1{,}000$. These are perfect cubes with integer side lengths, allowing instant reverse-solving.',
          },
          {
            type: 'trapCard',
            title: 'Using Square Root Instead of Cube Root',
            wrong: '$V = 27$. Student writes $s = \\sqrt{27} \\approx 5.2$.',
            correction: '$V = s^3$, so $s = \\sqrt[3]{27} = 3$. Volume requires the **cube** root.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Cube Volume Computation',
            items: [
              'Confirm the shape is a cube (all edges equal).',
              'If $s$ is given: compute $V = s^3$.',
              'If $V$ is given: compute $s = \\sqrt[3]{V}$, then find any requested quantity.',
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
            problem: 'A cube has a side length of $6$ cm. What is the volume of the cube, and what is the area of one face?',
            steps: [
              { label: 'Volume', content: '$V = 6^3 = 216 \\text{ cm}^3$' },
              { label: 'Face area', content: '$A_{\\text{face}} = 6^2 = 36 \\text{ cm}^2$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A cube has a volume of $512 \\text{ in}^3$. What is the side length of the cube?',
            answer: '$s = \\sqrt[3]{512} = 8$ inches.',
          },
        ],
      },
    },
  },

  // ─── CYLINDER ───────────────────────────────────────────────────────

  7: {
    moduleId: 'volume',
    title: 'Cylinder',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A cylinder is a circle extruded upward. Multiply the circular base area by the height.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'Volume', formula: '$V = \\pi r^2 h$', note: 'Base area ($\\pi r^2$) $\\times$ height' },
              { label: 'Lateral Surface Area', formula: '$SA_{\\text{lateral}} = 2\\pi r h$', note: 'The curved side "unrolled"' },
              { label: 'Total Surface Area', formula: '$SA = 2\\pi r h + 2\\pi r^2$', note: 'Lateral + two circular caps' },
            ],
          },
          {
            type: 'text',
            content: 'Think of a cylinder as a **stack of circles**. Each circle has area $\\pi r^2$, and you stack them $h$ units tall. The same "base area $\\times$ height" pattern from rectangular prisms applies.',
          },
          {
            type: 'keyInsight',
            content: 'When a problem says "in terms of $\\pi$," leave $\\pi$ as a symbol in the answer (e.g., $90\\pi$). When it says "to the nearest integer" or gives decimal answer choices, multiply through by $\\pi \\approx 3.14159$ and round.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Diameter vs. Radius',
            content: 'The SAT frequently gives the diameter of a cylinder (e.g., "a pipe with diameter $10$ cm"). Every formula uses radius. Halve the diameter before substituting: $r = \\frac{d}{2}$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Cylinder Word Problems',
            content: 'Recognition cue: a cylindrical tank, pipe, can, silo, or column. Identify the radius (or halve the diameter) and the height. Apply $V = \\pi r^2 h$.',
          },
          {
            type: 'trapCard',
            title: 'Diameter Given as Radius',
            wrong: '"A cylindrical can has diameter $8$ cm." Student uses $V = \\pi(8)^2 h = 64\\pi h$.',
            correction: 'Radius $= \\frac{8}{2} = 4$. Volume $= \\pi(4)^2 h = 16\\pi h$. Using diameter as radius produces an answer $4\\times$ too large.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Height and Radius',
            wrong: 'A cylinder has height $10$ and radius $3$. Student writes $V = \\pi(10)^2(3)$.',
            correction: 'The radius is squared, not the height. $V = \\pi(3)^2(10) = 90\\pi$.',
          },
          {
            type: 'tip',
            content: 'Scaling rule for cylinders: if $r$ is multiplied by $k$ (height unchanged), volume is multiplied by $k^2$. If both $r$ and $h$ are multiplied by $k$, volume is multiplied by $k^3$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing Cylinder Volume',
            items: [
              'Identify radius $r$ (or convert: $r = \\frac{d}{2}$) and height $h$.',
              'Substitute into $V = \\pi r^2 h$.',
              'Simplify the numeric coefficient. Leave $\\pi$ symbolic if the problem or answer choices require it.',
            ],
          },
          {
            type: 'steps',
            title: 'Reverse-Solving for a Missing Dimension',
            items: [
              'If height is missing: $h = \\frac{V}{\\pi r^2}$.',
              'If radius is missing: $r^2 = \\frac{V}{\\pi h}$, then $r = \\sqrt{\\frac{V}{\\pi h}}$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Diameter vs. Radius (Repeated Because Critical)',
            wrong: 'Using diameter $= 6$ directly: $V = \\pi(6)^2 \\cdot 10 = 360\\pi$.',
            correction: 'Always halve the diameter first. $r = 3$: $V = \\pi(3)^2 \\cdot 10 = 90\\pi$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Square the Radius',
            wrong: '$r = 5$, $h = 8$. Student writes $V = \\pi(5)(8) = 40\\pi$.',
            correction: '$V = \\pi r^{\\mathbf{2}} h = \\pi(25)(8) = 200\\pi$. The radius must be squared.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A cylindrical water tank has a diameter of $6$ feet and a height of $10$ feet. What is the volume in terms of $\\pi$?',
            steps: [
              { label: 'Find radius', content: 'Diameter $= 6 \\Rightarrow r = 3$ ft' },
              { label: 'Apply formula', content: '$V = \\pi(3)^2(10) = \\pi \\cdot 9 \\cdot 10$' },
              { label: 'Simplify', content: '$V = 90\\pi \\text{ ft}^3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A candle maker pours wax into cylindrical molds with radius $2$ inches. She has $200\\pi$ cubic inches of wax and fills each mold to a height of $5$ inches. How many complete candles can she make?',
            steps: [
              { label: 'Volume per candle', content: '$V_1 = \\pi(2)^2(5) = 20\\pi \\text{ in}^3$' },
              { label: 'Number of candles', content: '$n = \\frac{200\\pi}{20\\pi} = 10$' },
              { label: 'Answer', content: 'She can make $10$ complete candles.' },
            ],
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'volume',
    title: 'Simple Cylinder Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Direct application of $V = \\pi r^2 h$ with given radius and height.',
        blocks: [
          {
            type: 'formula',
            label: 'Cylinder Volume',
            content: '$$V = \\pi r^2 h$$',
            note: '$r$ = radius of circular base, $h$ = height',
          },
          {
            type: 'text',
            content: 'A basic cylinder problem provides the radius (or diameter) and height. Substitute into the formula and simplify. If the answer is requested "in terms of $\\pi$," do not convert to a decimal.',
          },
          {
            type: 'keyInsight',
            content: 'When answer choices contain $\\pi$ (e.g., $48\\pi$, $75\\pi$), the correct approach is to compute only the numeric coefficient and attach $\\pi$ at the end. Converting to decimals introduces rounding errors.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Plug-and-Compute Cylinder',
            content: 'Recognition cue: radius and height given explicitly, answer requested in terms of $\\pi$. Compute $r^2$, multiply by $h$, and attach $\\pi$.',
          },
          {
            type: 'trapCard',
            title: 'Squaring the Height Instead of the Radius',
            wrong: '$r = 3$, $h = 10$. Student writes $V = \\pi(3)(10)^2 = 300\\pi$.',
            correction: 'The formula squares the **radius**, not the height: $V = \\pi(3)^2(10) = 90\\pi$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Simple Cylinder Computation',
            items: [
              'Identify $r$ and $h$ from the problem. Convert diameter to radius if needed.',
              'Compute $r^2$.',
              'Multiply $r^2 \\times h$.',
              'Attach $\\pi$ to the result (or multiply by $\\approx 3.14$ if a decimal is needed).',
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
            problem: 'A cylindrical jar has a radius of $4$ cm and a height of $15$ cm. What is the volume in terms of $\\pi$?',
            steps: [
              { label: 'Square the radius', content: '$r^2 = 4^2 = 16$' },
              { label: 'Multiply by height', content: '$16 \\times 15 = 240$' },
              { label: 'Attach $\\pi$', content: '$V = 240\\pi \\text{ cm}^3$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A cylinder has a diameter of $10$ inches and a height of $7$ inches. What is its volume in terms of $\\pi$?',
            answer: '$r = \\frac{10}{2} = 5$. $V = \\pi(5)^2(7) = \\pi \\cdot 25 \\cdot 7 = 175\\pi \\text{ in}^3$.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'volume',
    title: 'Complex Cylinder Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Multi-step cylinder problems involve reverse-solving, comparing cylinders, or combining volume with rates and unit conversions.',
        blocks: [
          {
            type: 'formula',
            label: 'Cylinder Volume',
            content: '$$V = \\pi r^2 h$$',
            note: 'Rearranged: $h = \\frac{V}{\\pi r^2}$ or $r = \\sqrt{\\frac{V}{\\pi h}}$',
          },
          {
            type: 'text',
            content: 'Complex cylinder problems add layers: fill rates (volume per minute), comparing two cylinders, or embedding the cylinder inside a word problem with unit conversions. The formula stays the same; the challenge is setting up the algebra correctly.',
          },
          {
            type: 'keyInsight',
            content: 'When comparing two cylinders, form the ratio $\\frac{V_2}{V_1} = \\frac{r_2^2 h_2}{r_1^2 h_1}$. If the heights are the same, the ratio simplifies to $\\left(\\frac{r_2}{r_1}\\right)^2$. If the radii are the same, the ratio simplifies to $\\frac{h_2}{h_1}$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Fill-Rate Problems',
            content: 'Recognition cue: "water flows at $x$ cubic units per minute into a cylindrical tank." Set up: total volume $= \\pi r^2 h$, then time $= \\frac{V}{\\text{rate}}$. Compute the volume first, then divide by the flow rate.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Convert Units in Rate Problems',
            wrong: 'Tank volume is in cubic feet; fill rate is in gallons per minute. Student divides directly.',
            correction: 'Convert to consistent units before dividing. $1 \\text{ ft}^3 \\approx 7.48$ gallons, or convert the rate to cubic feet per minute.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving a Cylinder Comparison Problem',
            items: [
              'Write the volume formula for each cylinder: $V_1 = \\pi r_1^2 h_1$ and $V_2 = \\pi r_2^2 h_2$.',
              'Form the ratio $\\frac{V_2}{V_1}$ and cancel $\\pi$.',
              'Substitute known relationships (e.g., "radius doubles" means $r_2 = 2r_1$).',
              'Simplify to find how the volumes relate.',
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
            problem: 'Cylinder A has radius $3$ and height $10$. Cylinder B has twice the radius and half the height of Cylinder A. What is the ratio $\\frac{V_B}{V_A}$?',
            steps: [
              { label: 'Cylinder A', content: '$V_A = \\pi(3)^2(10) = 90\\pi$' },
              { label: 'Cylinder B dimensions', content: '$r_B = 6$, $h_B = 5$' },
              { label: 'Cylinder B volume', content: '$V_B = \\pi(6)^2(5) = 180\\pi$' },
              { label: 'Ratio', content: '$\\frac{V_B}{V_A} = \\frac{180\\pi}{90\\pi} = 2$' },
              { label: 'Insight', content: 'Doubling $r$ quadruples $r^2$; halving $h$ halves that factor. Net effect: $4 \\times \\frac{1}{2} = 2$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A cylindrical tank with radius $5$ ft and height $12$ ft is being filled at a rate of $10\\pi$ cubic feet per minute. How many minutes will it take to fill the tank completely?',
            answer: '$V = \\pi(5)^2(12) = 300\\pi \\text{ ft}^3$. Time $= \\frac{300\\pi}{10\\pi} = 30$ minutes.',
          },
        ],
      },
    },
  },

  // ─── SPHERE ─────────────────────────────────────────────────────────

  10: {
    moduleId: 'volume',
    title: 'Sphere',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A sphere\'s volume depends only on its radius. The formula involves $r^3$, which makes scaling questions especially important.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'Volume', formula: '$V = \\frac{4}{3}\\pi r^3$', note: 'Only one dimension: radius' },
              { label: 'Surface Area', formula: '$SA = 4\\pi r^2$', note: 'Four times the area of a great circle' },
            ],
          },
          {
            type: 'text',
            content: 'A sphere is perfectly symmetric: every point on its surface is exactly distance $r$ from the center. The $\\frac{4}{3}$ coefficient comes from calculus, but on the SAT you simply select it from the reference sheet.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Radius Is Cubed',
            content: 'Because volume uses $r^3$, small changes in $r$ cause large changes in volume. Doubling $r$ multiplies volume by $2^3 = 8$. Tripling $r$ multiplies volume by $3^3 = 27$.',
          },
          {
            type: 'keyInsight',
            content: 'When comparing two spheres, the constants $\\frac{4}{3}\\pi$ cancel completely in the ratio: $\\frac{V_2}{V_1} = \\left(\\frac{r_2}{r_1}\\right)^3$. No need to compute actual volumes.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Scaling: Radius $\\times k \\Rightarrow$ Volume $\\times k^3$',
            content: 'Recognition cue: "if the radius doubles/triples, what happens to the volume?" Apply the scaling rule directly: multiply the radius factor by $k$ and cube it.',
          },
          {
            type: 'trapCard',
            title: 'Scaling Linearly Instead of Cubically',
            wrong: '"Radius doubles, so volume doubles too."',
            correction: 'Volume depends on $r^3$. Doubling $r$: $(2r)^3 = 8r^3$. The volume becomes $8$ times as large.',
          },
          {
            type: 'trapCard',
            title: 'Using Diameter Directly',
            wrong: '"A ball has a diameter of $12$." Student plugs $12$ into $\\frac{4}{3}\\pi r^3$.',
            correction: '$r = \\frac{12}{2} = 6$. Then $V = \\frac{4}{3}\\pi(6)^3 = 288\\pi$.',
          },
          {
            type: 'tip',
            content: 'When comparing two spheres, set up $\\frac{V_2}{V_1} = \\left(\\frac{r_2}{r_1}\\right)^3$. The $\\frac{4}{3}\\pi$ cancels, leaving pure arithmetic.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing Sphere Volume',
            items: [
              'Identify $r$ (or convert diameter: $r = \\frac{d}{2}$).',
              'Cube the radius: compute $r^3$.',
              'Multiply: $V = \\frac{4}{3}\\pi r^3$.',
              'Simplify. If $r^3$ is divisible by $3$, the fraction reduces cleanly.',
            ],
          },
          {
            type: 'steps',
            title: 'Reverse-Solving: Volume $\\to$ Radius',
            items: [
              'Start with $V = \\frac{4}{3}\\pi r^3$.',
              'Isolate $r^3$: $r^3 = \\frac{3V}{4\\pi}$.',
              'Take the cube root: $r = \\sqrt[3]{\\frac{3V}{4\\pi}}$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Forgetting $\\frac{4}{3}$',
            wrong: 'Student writes $V = \\pi r^3$, omitting the $\\frac{4}{3}$ coefficient.',
            correction: 'The sphere formula is $V = \\frac{4}{3}\\pi r^3$. Without the $\\frac{4}{3}$, the answer is $\\frac{3}{4}$ of the correct value.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Sphere and Hemisphere',
            wrong: 'Problem says "hemisphere." Student computes the full sphere volume.',
            correction: 'A hemisphere is half a sphere: $V_{\\text{hemi}} = \\frac{1}{2} \\cdot \\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi r^3$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A basketball has a diameter of $9.4$ inches. What is its volume to the nearest cubic inch?',
            steps: [
              { label: 'Find radius', content: '$r = \\frac{9.4}{2} = 4.7$ in' },
              { label: 'Apply formula', content: '$V = \\frac{4}{3}\\pi(4.7)^3$' },
              { label: 'Compute $r^3$', content: '$4.7^3 = 103.823$' },
              { label: 'Multiply', content: '$V = \\frac{4}{3}\\pi(103.823) \\approx 434.9$' },
              { label: 'Round', content: '$V \\approx 435 \\text{ in}^3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Sphere A has radius $r$ and Sphere B has radius $3r$. Express $V_B$ as a multiple of $V_A$.',
            steps: [
              { label: 'Set up ratio', content: '$\\frac{V_B}{V_A} = \\frac{\\frac{4}{3}\\pi(3r)^3}{\\frac{4}{3}\\pi r^3}$' },
              { label: 'Cancel constants', content: '$= \\frac{(3r)^3}{r^3} = \\frac{27r^3}{r^3}$' },
              { label: 'Result', content: '$V_B = 27 V_A$' },
            ],
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'volume',
    title: 'Simple Sphere Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Direct application of $V = \\frac{4}{3}\\pi r^3$ with a given radius or diameter.',
        blocks: [
          {
            type: 'formula',
            label: 'Sphere Volume',
            content: '$$V = \\frac{4}{3}\\pi r^3$$',
            note: '$r$ = radius; if diameter is given, $r = \\frac{d}{2}$',
          },
          {
            type: 'text',
            content: 'A basic sphere problem gives the radius (or diameter) and asks for the volume. Cube the radius, multiply by $\\frac{4}{3}\\pi$, and simplify. When $r^3$ is divisible by $3$, the fraction reduces to a whole number times $\\pi$.',
          },
          {
            type: 'keyInsight',
            content: 'Common clean results: $r = 3 \\Rightarrow V = 36\\pi$. $r = 6 \\Rightarrow V = 288\\pi$. $r = 9 \\Rightarrow V = 972\\pi$. These appear frequently as answer choices.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Plug-and-Compute Sphere',
            content: 'Recognition cue: a ball, globe, or spherical object with its radius or diameter stated. Compute $r^3$, multiply by $\\frac{4}{3}\\pi$, and match an answer choice.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Cube the Radius',
            wrong: '$r = 6$. Student writes $V = \\frac{4}{3}\\pi(6)^2 = 48\\pi$.',
            correction: 'The sphere formula uses $r^3$, not $r^2$: $V = \\frac{4}{3}\\pi(6)^3 = \\frac{4}{3}\\pi(216) = 288\\pi$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Simple Sphere Computation',
            items: [
              'Identify $r$ (convert diameter if needed: $r = \\frac{d}{2}$).',
              'Compute $r^3$.',
              'Multiply: $\\frac{4}{3} \\times r^3$ (simplify the fraction if $r^3$ is divisible by $3$).',
              'Attach $\\pi$ for the final answer.',
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
            problem: 'A spherical ornament has a diameter of $6$ cm. What is its volume in terms of $\\pi$?',
            steps: [
              { label: 'Find radius', content: '$r = \\frac{6}{2} = 3$ cm' },
              { label: 'Cube the radius', content: '$3^3 = 27$' },
              { label: 'Apply formula', content: '$V = \\frac{4}{3}\\pi(27) = \\frac{108\\pi}{3} = 36\\pi \\text{ cm}^3$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A sphere has a radius of $9$ inches. What is its volume in terms of $\\pi$?',
            answer: '$V = \\frac{4}{3}\\pi(9)^3 = \\frac{4}{3}\\pi(729) = \\frac{2{,}916\\pi}{3} = 972\\pi \\text{ in}^3$.',
          },
        ],
      },
    },
  },

  // ─── CONE ───────────────────────────────────────────────────────────

  12: {
    moduleId: 'volume',
    title: 'Cone',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A cone is one-third of a cylinder with the same base and height. The $\\frac{1}{3}$ factor is the defining feature.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'Cylinder', formula: '$V = \\pi r^2 h$', note: 'Full "stack of circles"' },
              { label: 'Cone', formula: '$V = \\frac{1}{3}\\pi r^2 h$', note: 'One-third of the cylinder' },
            ],
          },
          {
            type: 'text',
            content: 'If you filled a cone with water and poured it into a cylinder of the same radius and height, you would need to fill the cone **three times** to fill the cylinder. This is the geometric meaning of the $\\frac{1}{3}$ factor.',
          },
          {
            type: 'keyInsight',
            content: 'The relationship $V_{\\text{cone}} = \\frac{1}{3} V_{\\text{cylinder}}$ is tested directly. If the SAT provides a cylinder\'s volume and asks for the cone with the same base and height, divide by $3$.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Slant Height $\\neq$ Height',
            content: 'If the problem provides the slant height $\\ell$ instead of the perpendicular height $h$, use the Pythagorean theorem: $h = \\sqrt{\\ell^2 - r^2}$. Volume uses the perpendicular height from base to apex.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Cone = One-Third of the Cylinder',
            content: 'Recognition cue: an ice cream cone, funnel, or conical tank. Apply $V = \\frac{1}{3}\\pi r^2 h$. The same as the cylinder formula but with the $\\frac{1}{3}$ multiplier.',
          },
          {
            type: 'trapCard',
            title: 'Using Slant Height as Actual Height',
            wrong: 'Cone with slant height $\\ell = 13$ and radius $5$. Student uses $V = \\frac{1}{3}\\pi(5)^2(13)$.',
            correction: 'Find perpendicular height: $h = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = 12$. Then $V = \\frac{1}{3}\\pi(25)(12) = 100\\pi$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the $\\frac{1}{3}$',
            wrong: 'Student computes $V = \\pi r^2 h$ for a cone, which is the cylinder formula.',
            correction: 'A cone is $\\frac{1}{3}$ of a cylinder. The formula is $V = \\frac{1}{3}\\pi r^2 h$.',
          },
          {
            type: 'tip',
            content: '**Decision rule:** "Height" stated directly $\\to$ use it in the formula. "Slant height" stated $\\to$ apply $h = \\sqrt{\\ell^2 - r^2}$ before substituting.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing Cone Volume',
            items: [
              'Identify $r$ (halve the diameter if given) and $h$ (use perpendicular height, not slant).',
              'If slant height $\\ell$ is given, compute $h = \\sqrt{\\ell^2 - r^2}$.',
              'Substitute into $V = \\frac{1}{3}\\pi r^2 h$.',
              'Simplify. Often $r^2 h$ is divisible by $3$, giving a clean integer coefficient.',
            ],
          },
          {
            type: 'steps',
            title: 'Cone-Cylinder Comparison',
            items: [
              'If a cone and cylinder share the same $r$ and $h$: $V_{\\text{cone}} = \\frac{1}{3} V_{\\text{cylinder}}$.',
              'If they have the same volume and same $r$: $h_{\\text{cone}} = 3 h_{\\text{cylinder}}$.',
              'If they have the same volume and same $h$: $r_{\\text{cone}} = r_{\\text{cylinder}} \\cdot \\sqrt{3}$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Forgetting the $\\frac{1}{3}$',
            wrong: 'Using $V = \\pi r^2 h$ for a cone (that is the cylinder formula).',
            correction: 'A cone is always $\\frac{1}{3}$ of the corresponding cylinder: $V = \\frac{1}{3}\\pi r^2 h$.',
          },
          {
            type: 'trapCard',
            title: 'Slant Height vs. Actual Height',
            wrong: 'Using slant height $\\ell$ as $h$ in the volume formula.',
            correction: 'Volume uses the **perpendicular height** from base to apex. If given $\\ell$ and $r$, use $h = \\sqrt{\\ell^2 - r^2}$.',
          },
          {
            type: 'trapCard',
            title: 'Diameter as Radius',
            wrong: '"A cone with diameter $10$..." Student plugs $10$ into $V = \\frac{1}{3}\\pi r^2 h$.',
            correction: '$r = \\frac{10}{2} = 5$. Then $V = \\frac{1}{3}\\pi(5)^2 h = \\frac{25\\pi h}{3}$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'An ice cream cone has a diameter of $8$ cm and a height of $12$ cm. What is the volume in terms of $\\pi$?',
            steps: [
              { label: 'Find radius', content: '$r = \\frac{8}{2} = 4$ cm' },
              { label: 'Apply formula', content: '$V = \\frac{1}{3}\\pi(4)^2(12) = \\frac{1}{3}\\pi \\cdot 16 \\cdot 12$' },
              { label: 'Simplify', content: '$V = \\frac{192\\pi}{3} = 64\\pi \\text{ cm}^3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A cone and a cylinder have the same radius and the same volume. The cylinder\'s height is $5$ inches. What is the cone\'s height?',
            steps: [
              { label: 'Set volumes equal', content: '$\\frac{1}{3}\\pi r^2 h_c = \\pi r^2(5)$' },
              { label: 'Cancel $\\pi r^2$', content: '$\\frac{1}{3} h_c = 5$' },
              { label: 'Solve', content: '$h_c = 15$ inches' },
            ],
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'volume',
    title: 'Simple Cone Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Direct application of $V = \\frac{1}{3}\\pi r^2 h$ with given radius (or diameter) and height.',
        blocks: [
          {
            type: 'formula',
            label: 'Cone Volume',
            content: '$$V = \\frac{1}{3}\\pi r^2 h$$',
            note: '$r$ = base radius, $h$ = perpendicular height',
          },
          {
            type: 'text',
            content: 'A basic cone problem provides the radius and height directly. Substitute into $V = \\frac{1}{3}\\pi r^2 h$ and simplify. The $\\frac{1}{3}$ factor is the most common source of error.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Plug-and-Compute Cone',
            content: 'Recognition cue: cone dimensions given directly. Compute $r^2$, multiply by $h$, divide by $3$, attach $\\pi$.',
          },
          {
            type: 'trapCard',
            title: 'Omitting the $\\frac{1}{3}$',
            wrong: '$r = 3$, $h = 12$. Student writes $V = \\pi(9)(12) = 108\\pi$.',
            correction: '$V = \\frac{1}{3}\\pi(9)(12) = \\frac{108\\pi}{3} = 36\\pi$. The $\\frac{1}{3}$ is essential for a cone.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Simple Cone Computation',
            items: [
              'Identify $r$ (convert diameter if needed) and $h$ (perpendicular height).',
              'Compute $r^2 \\times h$.',
              'Divide by $3$.',
              'Attach $\\pi$ for the final answer.',
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
            problem: 'A cone has a radius of $6$ cm and a height of $10$ cm. What is the volume in terms of $\\pi$?',
            steps: [
              { label: 'Compute $r^2 h$', content: '$6^2 \\times 10 = 36 \\times 10 = 360$' },
              { label: 'Divide by 3', content: '$\\frac{360}{3} = 120$' },
              { label: 'Final answer', content: '$V = 120\\pi \\text{ cm}^3$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A cone has a diameter of $12$ inches and a height of $9$ inches. What is its volume in terms of $\\pi$?',
            answer: '$r = \\frac{12}{2} = 6$. $V = \\frac{1}{3}\\pi(6)^2(9) = \\frac{1}{3}\\pi(36)(9) = \\frac{324\\pi}{3} = 108\\pi \\text{ in}^3$.',
          },
        ],
      },
    },
  },

  // ─── TRIANGULAR PRISM ──────────────────────────────────────────────

  14: {
    moduleId: 'volume',
    title: 'Triangular Prism',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A triangular prism has two triangular faces connected by rectangles. Volume is the triangle\'s area times the prism\'s length.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'Triangle Area', formula: '$A = \\frac{1}{2}bh$', note: '$b$ = base, $h$ = height of triangle' },
              { label: 'Prism Volume', formula: '$V = \\frac{1}{2}bh \\cdot l$', note: 'Triangle area $\\times$ length (depth) of prism' },
            ],
          },
          {
            type: 'text',
            content: 'The "base area $\\times$ depth" pattern holds for every prism. For a triangular prism, the cross-section is a triangle with area $\\frac{1}{2}bh$, and the prism extends that triangle through a length $l$.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Three Distinct Measurements',
            content: 'A triangular prism has three key measurements: the triangle\'s base ($b$), the triangle\'s height ($h$), and the prism\'s length ($l$). Confusing $h$ with $l$ is a common error. The triangle\'s $b$ and $h$ define the cross-section; $l$ is the depth.',
          },
          {
            type: 'keyInsight',
            content: 'Split the calculation into two steps: (1) compute the triangle area $\\frac{1}{2}bh$, then (2) multiply by the prism length $l$. This prevents the common mistake of multiplying all three numbers without the $\\frac{1}{2}$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Cross-Section $\\times$ Depth',
            content: 'Recognition cue: a tent, wedge, ramp, or "triangular prism" in the problem. Compute the triangular cross-section area first, then multiply by the prism\'s length.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the $\\frac{1}{2}$',
            wrong: 'Triangle base $= 8$, height $= 6$, prism length $= 10$. Student writes $V = 8 \\times 6 \\times 10 = 480$.',
            correction: 'The cross-section is a triangle: area $= \\frac{1}{2}(8)(6) = 24$. Then $V = 24 \\times 10 = 240$. Missing the $\\frac{1}{2}$ doubles the answer.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Triangle Height with Prism Length',
            wrong: 'Student uses the prism length as the triangle\'s height or vice versa.',
            correction: 'The triangle\'s height is the perpendicular distance within the triangular face. The prism\'s length is the distance between the two parallel triangular faces.',
          },
          {
            type: 'tip',
            content: 'This two-step pattern (cross-section area $\\times$ depth) works for **any** prism, not just triangular ones. If the SAT presents an unusual prism shape, compute the cross-section area first.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing Triangular Prism Volume',
            items: [
              'Identify the **triangular face**: note its base $b$ and height $h$.',
              'Compute the triangle area: $A = \\frac{1}{2}bh$.',
              'Identify the prism\'s **length** $l$ (the distance between the two triangular faces).',
              'Multiply: $V = A \\times l = \\frac{1}{2}bh \\cdot l$.',
            ],
          },
          {
            type: 'steps',
            title: 'Reverse-Solving for a Missing Measurement',
            items: [
              'If prism length is missing: $l = \\frac{V}{\\frac{1}{2}bh} = \\frac{2V}{bh}$.',
              'If triangle height is missing: $h = \\frac{2V}{b \\cdot l}$.',
              'If triangle base is missing: $b = \\frac{2V}{h \\cdot l}$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Omitting the $\\frac{1}{2}$',
            wrong: '$b = 10$, $h = 4$, $l = 7$. Student writes $V = 10 \\times 4 \\times 7 = 280$.',
            correction: 'Triangle area $= \\frac{1}{2}(10)(4) = 20$. Volume $= 20 \\times 7 = 140$.',
          },
          {
            type: 'trapCard',
            title: 'Confusing the Two Heights',
            wrong: 'Using the prism\'s length in place of the triangle\'s height in $\\frac{1}{2}bh$.',
            correction: 'The $h$ in $\\frac{1}{2}bh$ is the **triangle\'s** perpendicular height, not the prism\'s depth.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A tent has a triangular cross-section with a base of $8$ feet and a height of $6$ feet. The tent is $10$ feet long. What is the volume?',
            steps: [
              { label: 'Triangle area', content: '$A = \\frac{1}{2}(8)(6) = 24 \\text{ ft}^2$' },
              { label: 'Multiply by length', content: '$V = 24 \\times 10 = 240 \\text{ ft}^3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A triangular prism has a volume of $180$ cubic inches. Its triangular face has a base of $12$ inches and a height of $5$ inches. What is the length of the prism?',
            steps: [
              { label: 'Triangle area', content: '$A = \\frac{1}{2}(12)(5) = 30 \\text{ in}^2$' },
              { label: 'Set up equation', content: '$180 = 30 \\times l$' },
              { label: 'Solve', content: '$l = \\frac{180}{30} = 6$ inches' },
            ],
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'volume',
    title: 'Simple Triangular Prism Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Direct application of $V = \\frac{1}{2}bh \\cdot l$ with given triangle dimensions and prism length.',
        blocks: [
          {
            type: 'formula',
            label: 'Triangular Prism Volume',
            content: '$$V = \\frac{1}{2}bh \\cdot l$$',
            note: '$b$ = triangle base, $h$ = triangle height, $l$ = prism length',
          },
          {
            type: 'text',
            content: 'A basic triangular prism problem gives the triangle\'s base, the triangle\'s height, and the prism\'s length. Compute the triangle area first, then multiply by the length.',
          },
          {
            type: 'keyInsight',
            content: 'Always split the calculation into two steps: (1) triangle area $= \\frac{1}{2}bh$, (2) volume $=$ area $\\times l$. This two-step approach prevents the $\\frac{1}{2}$ from being lost in a single long multiplication.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Two-Step Plug-In',
            content: 'Recognition cue: three dimensions given (triangle base, triangle height, prism length). Compute the triangle area separately, then multiply by length.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying All Three Without the $\\frac{1}{2}$',
            wrong: '$b = 6$, $h = 4$, $l = 5$. Student writes $V = 6 \\times 4 \\times 5 = 120$.',
            correction: 'Triangle area $= \\frac{1}{2}(6)(4) = 12$. Volume $= 12 \\times 5 = 60$. The answer is half of the incorrect calculation.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Simple Triangular Prism Computation',
            items: [
              'Identify the triangle\'s base $b$ and height $h$ from the problem.',
              'Compute triangle area: $A = \\frac{1}{2}bh$.',
              'Identify the prism length $l$.',
              'Compute volume: $V = A \\times l$.',
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
            problem: 'A wedge-shaped doorstop has a triangular cross-section with base $5$ cm and height $3$ cm. The doorstop is $12$ cm long. What is its volume?',
            steps: [
              { label: 'Triangle area', content: '$A = \\frac{1}{2}(5)(3) = 7.5 \\text{ cm}^2$' },
              { label: 'Volume', content: '$V = 7.5 \\times 12 = 90 \\text{ cm}^3$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A triangular prism has a triangle base of $10$ inches, a triangle height of $8$ inches, and a prism length of $15$ inches. What is the volume?',
            answer: 'Triangle area $= \\frac{1}{2}(10)(8) = 40 \\text{ in}^2$. Volume $= 40 \\times 15 = 600 \\text{ in}^3$.',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'volume',
    title: 'Complex Triangular Prism Question',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Multi-step triangular prism problems involve reverse-solving, non-right triangles requiring additional computation, or composite shapes.',
        blocks: [
          {
            type: 'formula',
            label: 'Triangular Prism Volume',
            content: '$$V = \\frac{1}{2}bh \\cdot l$$',
            note: 'Rearranged: $l = \\frac{2V}{bh}$, $b = \\frac{2V}{hl}$, $h = \\frac{2V}{bl}$',
          },
          {
            type: 'text',
            content: 'Complex problems add algebra: the volume is given and you solve for a missing dimension, or the triangular face is defined by side lengths requiring the Pythagorean theorem or Heron\'s formula to find the area. Some problems compare a triangular prism with another shape.',
          },
          {
            type: 'keyInsight',
            content: 'When a triangular face is defined by three side lengths (not base and height), find the area using $A = \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height}$ where the height is computed via the Pythagorean theorem, or use Heron\'s formula: $A = \\sqrt{s(s-a)(s-b)(s-c)}$ with $s = \\frac{a+b+c}{2}$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Reverse-Solve with a Triangular Prism',
            content: 'Recognition cue: volume given, one measurement missing. Rearrange $V = \\frac{1}{2}bh \\cdot l$ to isolate the unknown. The algebra involves multiplying both sides by $2$ to clear the fraction.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Multiply by 2 When Reverse-Solving',
            wrong: 'Volume $= 120$, $b = 6$, $h = 4$. Student writes $l = \\frac{120}{6 \\times 4} = 5$.',
            correction: '$V = \\frac{1}{2}bh \\cdot l \\Rightarrow l = \\frac{2V}{bh} = \\frac{2(120)}{6 \\times 4} = \\frac{240}{24} = 10$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Reverse-Solving for a Missing Dimension',
            items: [
              'Write the formula: $V = \\frac{1}{2}bh \\cdot l$.',
              'Multiply both sides by $2$: $2V = bh \\cdot l$.',
              'Isolate the unknown variable: e.g., $l = \\frac{2V}{bh}$.',
              'Substitute known values and compute.',
            ],
          },
          {
            type: 'steps',
            title: 'When the Triangle\'s Height Is Not Given Directly',
            items: [
              'If the triangular face is a right triangle, the two legs serve as base and height.',
              'If the triangular face is isosceles or equilateral, drop an altitude to create two right triangles and use the Pythagorean theorem.',
              'Compute the triangle area, then multiply by the prism length for volume.',
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
            problem: 'A triangular prism has a volume of $300$ cubic cm. The triangular face is a right triangle with legs $10$ cm and $12$ cm. What is the length of the prism?',
            steps: [
              { label: 'Triangle area', content: '$A = \\frac{1}{2}(10)(12) = 60 \\text{ cm}^2$' },
              { label: 'Set up equation', content: '$300 = 60 \\times l$' },
              { label: 'Solve', content: '$l = \\frac{300}{60} = 5$ cm' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A ramp is shaped like a triangular prism. The triangular cross-section has a base of $9$ ft and a height of $4$ ft. The ramp\'s volume is $126$ cubic feet. What is the length of the ramp?',
            answer: 'Triangle area $= \\frac{1}{2}(9)(4) = 18 \\text{ ft}^2$. Length $= \\frac{126}{18} = 7$ ft.',
          },
        ],
      },
    },
  },

};
