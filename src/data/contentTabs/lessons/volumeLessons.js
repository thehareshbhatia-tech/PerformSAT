export const volumeLessonTabs = {
  1: {
    moduleId: 'volume',
    title: 'What is Volume?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Volume measures the three-dimensional space inside a solid, always expressed in cubic units.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Rectangular Prism',
                formula: '$V = lwh$',
                note: 'Base area $= lw$',
              },
              {
                label: 'Cylinder',
                formula: '$V = \\pi r^2 h$',
                note: 'Base area $= \\pi r^2$',
              },
              {
                label: 'Sphere',
                formula: '$V = \\frac{4}{3}\\pi r^3$',
                note: 'Radius only — no height',
              },
              {
                label: 'Cone',
                formula: '$V = \\frac{1}{3}\\pi r^2 h$',
                note: '$\\frac{1}{3}$ of the cylinder',
              },
              {
                label: 'Triangular Prism',
                formula: '$V = \\frac{1}{2}bh \\cdot l$',
                note: 'Triangle area $\\times$ length',
              },
            ],
          },
          {
            type: 'text',
            content: '**Volume** quantifies how much space a three-dimensional solid occupies. While area covers a flat region in square units, volume fills a 3D region and is measured in **cubic units** — $\\text{in}^3$, $\\text{cm}^3$, $\\text{ft}^3$, etc.',
          },
          {
            type: 'keyInsight',
            content: 'Every volume formula on the Digital SAT reference sheet follows one principle: **base area $\\times$ height**. A rectangular prism uses $lw \\times h$, a cylinder uses $\\pi r^2 \\times h$, and shapes like cones and pyramids scale by $\\frac{1}{3}$.',
          },
          {
            type: 'trapCard',
            title: 'Diameter Given, Radius Needed',
            wrong: '"A cylindrical tank has diameter $8$ ft." Student plugs $8$ into $\\pi r^2 h$, producing an answer $4\\times$ too large.',
            correction: 'Every SAT volume formula uses radius, not diameter. If diameter $= 8$, then $r = 4$. Halve the diameter before substituting.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'General Volume Problem Strategy',
            items: [
              'Read the problem and identify the 3D shape — map real-world objects to geometric names.',
              'Select the matching formula from the reference sheet.',
              'Extract dimensions. Convert diameter to radius if needed. Ensure all units match.',
              'Substitute and simplify. Leave $\\pi$ symbolic if answer choices contain $\\pi$; compute a decimal otherwise.',
              'Verify the answer has cubic units and a reasonable magnitude.',
            ],
          },
          {
            type: 'steps',
            title: 'General Volume Problem Strategy',
            items: [
              'Read the problem and identify the 3D shape — map real-world objects to geometric names.',
              'Select the matching formula from the reference sheet.',
              'Extract dimensions. Convert diameter to radius if needed. Ensure all units match.',
              'Substitute and simplify. Leave $\\pi$ symbolic if answer choices contain $\\pi$; compute a decimal otherwise.',
              'Verify the answer has cubic units and a reasonable magnitude.',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A cylinder has radius $3$ and height $8$. A cone has the same base and height. What is the combined volume of both shapes in terms of $\\pi$?',
            answer: 'Cylinder: $V = \\pi(3)^2(8) = 72\\pi$. Cone: $V = \\frac{1}{3}(72\\pi) = 24\\pi$. Combined: $72\\pi + 24\\pi = 96\\pi$.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'volume',
    title: 'Volume of a Rectangular Prism',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A rectangular prism (box) has the simplest volume formula: multiply length by width by height.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Volume',
                formula: '$V = lwh$',
                note: 'length $\\times$ width $\\times$ height',
              },
              {
                label: 'Surface Area',
                formula: '$SA = 2(lw + lh + wh)$',
                note: 'Sum of all six rectangular faces',
              },
            ],
          },
          {
            type: 'text',
            content: `A rectangular prism has six rectangular faces meeting at right angles. Its volume equals the bottom layer's area ($l \times w$) stacked $h$ layers tall. The SAT may call this shape a box, crate, or cuboid — all use the same formula.`,
          },
          {
            type: 'keyInsight',
            content: 'Multiplication is commutative, so labeling which dimension is "length," "width," or "height" does not affect the product. The SAT may call the third dimension "depth," "thickness," or "tall" — all feed into $V = lwh$.',
          },
          {
            type: 'trapCard',
            title: 'Mixing Feet and Inches',
            wrong: 'A box is $2$ ft $\\times$ $6$ in $\\times$ $3$ in. Student multiplies $2 \\times 6 \\times 3 = 36$ without converting.',
            correction: 'All dimensions must share the same unit. Convert $2$ ft $= 24$ in first, then $V = 24 \\times 6 \\times 3 = 432$ in$^3$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A shipping box is $18$ inches long, $12$ inches wide, and $8$ inches tall. What is its volume?',
            steps: [
              {
                label: 'Identify values',
                content: '$l = 18$, $w = 12$, $h = 8$',
              },
              {
                label: 'Apply formula',
                content: '$V = 18 \\times 12 \\times 8$',
              },
              {
                label: 'Compute',
                content: '$V = 1{,}728 \\text{ in}^3$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A rectangular pool is $15$ m long and $8$ m wide. It holds $600 \\text{ m}^3$ of water. What is the depth of the pool?',
            answer: '$600 = 15 \\times 8 \\times d = 120d$. So $d = \\frac{600}{120} = 5$ m.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'volume',
    title: 'Simple Volume of Rectangular Prism',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Direct application of $V = lwh$ when all three dimensions are given explicitly.',
        blocks: [
          {
            type: 'formula',
            label: 'Rectangular Prism Volume',
            content: '$$V = lwh$$',
            note: '$l$ = length, $w$ = width, $h$ = height',
          },
          {
            type: 'keyInsight',
            content: 'When a problem states dimensions like "$5$ by $8$ by $3$," these map directly to $l$, $w$, and $h$ in any order. The product is identical regardless of assignment.',
          },
          {
            type: 'trapCard',
            title: 'Misreading a Dimension Label',
            wrong: '"A container $4$ ft long, $3$ ft wide, $2$ ft deep." Student treats depth as a separate concept and omits it from the product.',
            correction: '"Depth," "height," "tall," and "thickness" all refer to the third dimension. All three measurements feed into $V = lwh$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A storage bin is $2.5$ feet long, $1.5$ feet wide, and $2$ feet deep. How many cubic feet can it hold?',
            steps: [
              {
                label: 'Identify values',
                content: '$l = 2.5$, $w = 1.5$, $h = 2$',
              },
              {
                label: 'Multiply',
                content: '$V = 2.5 \\times 1.5 \\times 2 = 7.5 \\text{ ft}^3$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A storage bin is $2.5$ feet long, $1.5$ feet wide, and $2$ feet deep. How many cubic feet can it hold?',
            answer: '$V = 2.5 \\times 1.5 \\times 2 = 7.5 \\text{ ft}^3$',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'volume',
    title: 'Complex Volume of Rectangular Prism',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Multi-step rectangular prism problems combine $V = lwh$ with algebra, unit conversions, or shape comparisons.',
        blocks: [
          {
            type: 'formula',
            label: 'Rectangular Prism Volume',
            content: '$$V = lwh$$',
            note: 'Rearranged: $l = \\frac{V}{wh}$, $w = \\frac{V}{lh}$, $h = \\frac{V}{lw}$',
          },
          {
            type: 'keyInsight',
            content: 'When dimensions are given as algebraic expressions (e.g., $x$, $x + 2$, $3x$), substituting into $V = lwh$ produces a polynomial equation. Solve for the variable first, then compute the numeric volume.',
          },
          {
            type: 'trapCard',
            title: 'Computing Surface Area Instead of Volume',
            wrong: 'Problem asks for volume. Student computes $2(lw + lh + wh)$ and selects $348$, which is the surface area.',
            correction: 'Volume $= lwh$ (one triple product). Surface area $= 2(lw + lh + wh)$ (three pair-products, summed and doubled). Read the question stem carefully.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A crate is $3$ ft long, $18$ in wide, and $2$ ft tall. What is its volume in cubic inches?',
            steps: [
              {
                label: 'Convert to inches',
                content: '$l = 3 \\times 12 = 36$ in, $w = 18$ in, $h = 2 \\times 12 = 24$ in',
              },
              {
                label: 'Compute',
                content: '$V = 36 \\times 18 \\times 24 = 15{,}552 \\text{ in}^3$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A crate is $3$ ft long, $18$ in wide, and $2$ ft tall. What is its volume in cubic inches?',
            answer: '$V = 36 \\times 18 \\times 24 = 15{,}552 \\text{ in}^3$',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'volume',
    title: 'Volume of a Cube',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A cube is a rectangular prism with all edges equal. Volume reduces to a single edge length cubed.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Volume',
                formula: '$V = s^3$',
                note: '$s$ = side length (all 12 edges equal)',
              },
              {
                label: 'Surface Area',
                formula: '$SA = 6s^2$',
                note: '6 identical square faces',
              },
              {
                label: 'Space Diagonal',
                formula: '$d = s\\sqrt{3}$',
                note: 'Corner to opposite corner through the interior',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Volume uses $s^3$ (cubing) while surface area uses $s^2$ (squaring). Confusing the exponent is a frequent error. A cube with $s = 5$ has volume $125$ but face area $25$ — the operations are fundamentally different.',
          },
          {
            type: 'table',
            title: 'Perfect Cubes Worth Recognizing',
            headers: [
              '$s$',
              '$s^3$',
            ],
            rows: [
              [
                '$1$',
                '$1$',
              ],
              [
                '$2$',
                '$8$',
              ],
              [
                '$3$',
                '$27$',
              ],
              [
                '$4$',
                '$64$',
              ],
              [
                '$5$',
                '$125$',
              ],
              [
                '$6$',
                '$216$',
              ],
              [
                '$10$',
                '$1{,}000$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Square Root Instead of Cube Root',
            wrong: 'Volume $= 64$. Student writes $s = \\sqrt{64} = 8$ and reports $SA = 6(8)^2 = 384$.',
            correction: 'Volume uses $s^3$, so reverse with the **cube root**: $s = \\sqrt[3]{64} = 4$. Then $SA = 6(4)^2 = 96$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A cube has a volume of $343 \\text{ cm}^3$. What is the total surface area?',
            steps: [
              {
                label: 'Find side',
                content: '$s = \\sqrt[3]{343} = 7$ cm',
              },
              {
                label: 'Surface area',
                content: '$SA = 6(7)^2 = 6 \\times 49 = 294 \\text{ cm}^2$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The side length of Cube B is twice the side length of Cube A. If Cube A has volume $27$, what is the volume of Cube B?',
            answer: '$s_A = \\sqrt[3]{27} = 3$. $s_B = 2(3) = 6$. $V_B = 6^3 = 216$. Shortcut: doubling every linear dimension multiplies volume by $2^3 = 8$, so $V_B = 8 \\times 27 = 216$.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'volume',
    title: 'Simple Volume of Cube Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Direct computation of cube volume from a given side length, or side length from a given volume.',
        blocks: [
          {
            type: 'formula',
            label: 'Cube Volume',
            content: '$$V = s^3$$',
            note: '$s$ = edge length; reverse: $s = \\sqrt[3]{V}$',
          },
          {
            type: 'keyInsight',
            content: 'On straightforward cube problems, the side length is given directly or the volume is a recognizable perfect cube. Selecting $V = s^3$ and cubing (or cube-rooting) correctly is the entire task.',
          },
          {
            type: 'trapCard',
            title: 'Squaring Instead of Cubing',
            wrong: `$s = 5$. Student writes $V = 5^2 = 25$ for the cube's volume.`,
            correction: '$V = s^3 = 5^3 = 125$. The exponent $2$ gives the area of one face, not the volume. Volume requires cubing.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A cube has an edge length of $6$ cm. What is the volume, and what is the area of one face?',
            steps: [
              {
                label: 'Volume',
                content: '$V = 6^3 = 216 \\text{ cm}^3$',
              },
              {
                label: 'Face area',
                content: '$A = 6^2 = 36 \\text{ cm}^2$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A cube has an edge length of $6$ cm. What is the volume, and what is the area of one face?',
            answer: '$A = 6^2 = 36 \\text{ cm}^2$',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'volume',
    title: 'Volume of a Cylinder',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A cylinder is a circle extruded upward. Multiply the circular base area by the height.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Volume',
                formula: '$V = \\pi r^2 h$',
                note: 'Base area ($\\pi r^2$) $\\times$ height',
              },
              {
                label: 'Lateral Surface Area',
                formula: '$SA_{\\text{lat}} = 2\\pi r h$',
                note: 'Curved side "unrolled" into a rectangle',
              },
              {
                label: 'Total Surface Area',
                formula: '$SA = 2\\pi r h + 2\\pi r^2$',
                note: 'Lateral surface + two circular caps',
              },
            ],
          },
          {
            type: 'text',
            content: 'A cylinder is a **stack of circles**: each circle has area $\\pi r^2$, stacked $h$ units tall. The same "base area $\\times$ height" principle from rectangular prisms applies here.',
          },
          {
            type: 'keyInsight',
            content: 'When a problem says "in terms of $\\pi$," leave $\\pi$ as a symbol (e.g., $90\\pi$). When answer choices are decimals, multiply through by $\\pi \\approx 3.14159$ only at the final step.',
          },
          {
            type: 'trapCard',
            title: 'Plugging Diameter Where Radius Belongs',
            wrong: '"A can has diameter $8$ cm and height $12$ cm." Student computes $V = \\pi(8)^2(12) = 768\\pi$.',
            correction: 'Radius $= \\frac{8}{2} = 4$. Correct volume: $V = \\pi(4)^2(12) = 192\\pi$. Using diameter as radius inflates the answer by a factor of $4$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Computing Cylinder Volume',
            items: [
              'Identify $r$ (or convert: $r = \\frac{d}{2}$) and $h$.',
              'Substitute into $V = \\pi r^2 h$.',
              'Simplify the numeric coefficient. Leave $\\pi$ symbolic if the problem requires "in terms of $\\pi$."',
            ],
          },
          {
            type: 'steps',
            title: 'Computing Cylinder Volume',
            items: [
              'Identify $r$ (or convert: $r = \\frac{d}{2}$) and $h$.',
              'Substitute into $V = \\pi r^2 h$.',
              'Simplify the numeric coefficient. Leave $\\pi$ symbolic if the problem requires "in terms of $\\pi$."',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A cylindrical tank with radius $5$ ft and height $12$ ft is filled at a rate of $10\\pi$ cubic feet per minute. How many minutes to fill the tank completely?',
            answer: '$V = \\pi(5)^2(12) = 300\\pi \\text{ ft}^3$. Time $= \\frac{300\\pi}{10\\pi} = 30$ minutes.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'volume',
    title: 'Simple Volume of Cylinder Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Direct application of $V = \\pi r^2 h$ when radius and height are given explicitly.',
        blocks: [
          {
            type: 'formula',
            label: 'Cylinder Volume',
            content: '$$V = \\pi r^2 h$$',
            note: '$r$ = radius of circular base, $h$ = height',
          },
          {
            type: 'keyInsight',
            content: 'When answer choices contain $\\pi$ (e.g., $48\\pi$, $75\\pi$), compute only the numeric coefficient ($r^2 \\times h$) and attach $\\pi$ at the end. Converting to decimals early introduces rounding errors.',
          },
          {
            type: 'trapCard',
            title: 'Squaring the Height Instead of the Radius',
            wrong: '$r = 3$, $h = 10$. Student writes $V = \\pi(3)(10)^2 = 300\\pi$ by squaring $h$.',
            correction: 'The formula squares the **radius**, not the height: $V = \\pi(3)^2(10) = 90\\pi$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A cylindrical jar has a radius of $4$ cm and a height of $15$ cm. What is the volume in terms of $\\pi$?',
            steps: [
              {
                label: 'Square the radius',
                content: '$r^2 = 4^2 = 16$',
              },
              {
                label: 'Multiply by height',
                content: '$16 \\times 15 = 240$',
              },
              {
                label: 'Attach $\\pi$',
                content: '$V = 240\\pi \\text{ cm}^3$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A cylindrical jar has a radius of $4$ cm and a height of $15$ cm. What is the volume in terms of $\\pi$?',
            answer: '$V = 240\\pi \\text{ cm}^3$',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'volume',
    title: 'Complex Volume of Cylinder Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Multi-step cylinder problems involve reverse-solving, comparing cylinders, or combining volume with fill rates.',
        blocks: [
          {
            type: 'formula',
            label: 'Cylinder Volume',
            content: '$$V = \\pi r^2 h$$',
            note: 'Ratio of two cylinders: $\\frac{V_2}{V_1} = \\frac{r_2^{\\,2}\\, h_2}{r_1^{\\,2}\\, h_1}$',
          },
          {
            type: 'keyInsight',
            content: 'When comparing two cylinders, $\\pi$ cancels in the ratio. If the heights match, the ratio reduces to $\\left(\\frac{r_2}{r_1}\\right)^2$. If the radii match, the ratio reduces to $\\frac{h_2}{h_1}$.',
          },
          {
            type: 'trapCard',
            title: 'Ignoring Unit Mismatch in Rate Problems',
            wrong: 'Tank volume in $\\text{ft}^3$, fill rate in gallons per minute. Student divides volume by rate directly without converting.',
            correction: 'Convert to consistent units before dividing. Either convert volume to gallons ($1 \\text{ ft}^3 \\approx 7.48$ gal) or convert the rate to $\\text{ft}^3$/min.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Cylinder A has radius $3$ and height $10$. Cylinder B has twice the radius and half the height. What is $\\frac{V_B}{V_A}$?',
            steps: [
              {
                label: 'Cylinder A',
                content: '$V_A = \\pi(3)^2(10) = 90\\pi$',
              },
              {
                label: 'Cylinder B',
                content: '$r_B = 6$, $h_B = 5$. $V_B = \\pi(6)^2(5) = 180\\pi$',
              },
              {
                label: 'Ratio',
                content: '$\\frac{180\\pi}{90\\pi} = 2$',
              },
              {
                label: 'Shortcut',
                content: 'Factor analysis: $\\left(\\frac{6}{3}\\right)^2 \\times \\frac{5}{10} = 4 \\times \\frac{1}{2} = 2$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Cylinder A has radius $3$ and height $10$. Cylinder B has twice the radius and half the height. What is $\\frac{V_B}{V_A}$?',
            answer: 'Factor analysis: $\\left(\\frac{6}{3}\\right)^2 \\times \\frac{5}{10} = 4 \\times \\frac{1}{2} = 2$',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'volume',
    title: 'Volume of a Sphere',
    sections: {
      learn: {
        title: 'Learn',
        summary: `A sphere's volume depends solely on its radius. The $r^3$ dependence makes scaling questions especially prominent.`,
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Volume',
                formula: '$V = \\frac{4}{3}\\pi r^3$',
                note: 'Single dimension: radius',
              },
              {
                label: 'Surface Area',
                formula: '$SA = 4\\pi r^2$',
                note: 'Four great-circle areas',
              },
            ],
          },
          {
            type: 'text',
            content: 'A sphere is perfectly symmetric — every surface point is exactly distance $r$ from the center. The $\\frac{4}{3}$ coefficient appears on the reference sheet; the tested skill is substituting $r$ correctly and handling the arithmetic with fractions and $\\pi$.',
          },
          {
            type: 'keyInsight',
            content: 'Because volume depends on $r^3$, small changes in radius produce large changes in volume. Doubling $r$ multiplies volume by $2^3 = 8$. Tripling $r$ multiplies volume by $3^3 = 27$. When comparing two spheres, $\\frac{V_2}{V_1} = \\left(\\frac{r_2}{r_1}\\right)^3$ — the $\\frac{4}{3}\\pi$ cancels entirely.',
          },
          {
            type: 'trapCard',
            title: 'Scaling Volume Linearly',
            wrong: '"Radius doubles." Student concludes the volume also doubles, selecting factor $= 2$.',
            correction: 'Volume depends on $r^3$. Doubling $r$: $(2r)^3 = 8r^3$. The volume increases by a factor of $8$, not $2$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Computing Sphere Volume',
            items: [
              'Identify $r$ (or convert diameter: $r = \\frac{d}{2}$).',
              'Cube the radius: compute $r^3$.',
              'Multiply: $V = \\frac{4}{3}\\pi r^3$. If $r^3$ is divisible by $3$, the fraction reduces to a whole-number coefficient.',
            ],
          },
          {
            type: 'steps',
            title: 'Computing Sphere Volume',
            items: [
              'Identify $r$ (or convert diameter: $r = \\frac{d}{2}$).',
              'Cube the radius: compute $r^3$.',
              'Multiply: $V = \\frac{4}{3}\\pi r^3$. If $r^3$ is divisible by $3$, the fraction reduces to a whole-number coefficient.',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A sphere has a volume of $288\\pi$. What is its radius?',
            answer: '$\\frac{4}{3}\\pi r^3 = 288\\pi \\Rightarrow r^3 = 288 \\times \\frac{3}{4} = 216 \\Rightarrow r = \\sqrt[3]{216} = 6$.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'volume',
    title: 'Simple Volume of Sphere Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Direct application of $V = \\frac{4}{3}\\pi r^3$ with a given radius or diameter.',
        blocks: [
          {
            type: 'formula',
            label: 'Sphere Volume',
            content: '$$V = \\frac{4}{3}\\pi r^3$$',
            note: '$r$ = radius; if diameter is given, $r = \\frac{d}{2}$',
          },
          {
            type: 'keyInsight',
            content: 'Common clean results: $r = 3 \\Rightarrow V = 36\\pi$, $r = 6 \\Rightarrow V = 288\\pi$, $r = 9 \\Rightarrow V = 972\\pi$. These appear frequently as SAT answer choices because $r^3$ is divisible by $3$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Cube the Radius',
            wrong: '$r = 6$. Student writes $V = \\frac{4}{3}\\pi(6)^2 = 48\\pi$, using $r^2$ instead of $r^3$.',
            correction: 'The sphere formula uses $r^3$, not $r^2$: $V = \\frac{4}{3}\\pi(6)^3 = \\frac{4}{3}\\pi(216) = 288\\pi$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A spherical ornament has a diameter of $6$ cm. What is its volume in terms of $\\pi$?',
            steps: [
              {
                label: 'Find radius',
                content: '$r = \\frac{6}{2} = 3$ cm',
              },
              {
                label: 'Cube the radius',
                content: '$3^3 = 27$',
              },
              {
                label: 'Apply formula',
                content: '$V = \\frac{4}{3}\\pi(27) = \\frac{108\\pi}{3} = 36\\pi \\text{ cm}^3$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A spherical ornament has a diameter of $6$ cm. What is its volume in terms of $\\pi$?',
            answer: '$V = \\frac{4}{3}\\pi(27) = \\frac{108\\pi}{3} = 36\\pi \\text{ cm}^3$',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'volume',
    title: 'Complex Volume of Sphere Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Advanced sphere problems involve hemispheres, reverse-solving for radius, or comparing two spheres.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Sphere',
                formula: '$V = \\frac{4}{3}\\pi r^3$',
                note: 'Full sphere',
              },
              {
                label: 'Hemisphere',
                formula: '$V = \\frac{2}{3}\\pi r^3$',
                note: 'Half of the sphere',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'A hemisphere is exactly half a sphere: $V_{\\text{hemi}} = \\frac{1}{2} \\cdot \\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi r^3$. The SAT may describe a dome, bowl, or half-ball — all are hemispheres.',
          },
          {
            type: 'trapCard',
            title: 'Using Full Sphere Volume for a Hemisphere',
            wrong: '"A hemispherical bowl has radius $6$." Student computes $V = \\frac{4}{3}\\pi(6)^3 = 288\\pi$ without halving.',
            correction: 'A hemisphere is **half** the sphere: $V = \\frac{1}{2}(288\\pi) = 144\\pi$. Equivalently, $V = \\frac{2}{3}\\pi(6)^3 = 144\\pi$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Sphere A has radius $r$ and Sphere B has radius $3r$. Express $V_B$ as a multiple of $V_A$.',
            steps: [
              {
                label: 'Ratio',
                content: '$\\frac{V_B}{V_A} = \\frac{\\frac{4}{3}\\pi(3r)^3}{\\frac{4}{3}\\pi r^3} = \\frac{(3r)^3}{r^3} = \\frac{27r^3}{r^3} = 27$',
              },
              {
                label: 'Result',
                content: '$V_B = 27\\, V_A$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Sphere A has radius $r$ and Sphere B has radius $3r$. Express $V_B$ as a multiple of $V_A$.',
            answer: '$V_B = 27\\, V_A$',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'volume',
    title: 'Volume of a Cone',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A cone is one-third of a cylinder with the same base and height. The $\\frac{1}{3}$ factor is the defining feature.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Cylinder',
                formula: '$V = \\pi r^2 h$',
                note: 'Full stack of circles',
              },
              {
                label: 'Cone',
                formula: '$V = \\frac{1}{3}\\pi r^2 h$',
                note: '$\\frac{1}{3}$ of the cylinder',
              },
            ],
          },
          {
            type: 'text',
            content: 'Filling a cone with water and pouring into a cylinder of the same radius and height requires exactly **three cone-fills** to fill the cylinder. This geometric relationship is the origin of the $\\frac{1}{3}$ factor.',
          },
          {
            type: 'keyInsight',
            content: 'Volume uses the **perpendicular height** $h$ — the vertical distance from base to apex. If the problem provides the **slant height** $\\ell$ instead, first compute $h = \\sqrt{\\ell^2 - r^2}$ via the Pythagorean theorem, then substitute.',
          },
          {
            type: 'trapCard',
            title: 'Using Slant Height as Perpendicular Height',
            wrong: 'Cone with slant height $\\ell = 13$ and radius $5$. Student uses $V = \\frac{1}{3}\\pi(5)^2(13) = \\frac{325\\pi}{3}$.',
            correction: 'Perpendicular height: $h = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$. Correct volume: $V = \\frac{1}{3}\\pi(25)(12) = 100\\pi$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'An ice cream cone has diameter $8$ cm and height $12$ cm. What is the volume in terms of $\\pi$?',
            steps: [
              {
                label: 'Find radius',
                content: '$r = \\frac{8}{2} = 4$ cm',
              },
              {
                label: 'Apply formula',
                content: '$V = \\frac{1}{3}\\pi(4)^2(12) = \\frac{1}{3}\\pi(16)(12) = \\frac{192\\pi}{3}$',
              },
              {
                label: 'Simplify',
                content: '$V = 64\\pi \\text{ cm}^3$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: `A cone and a cylinder share the same circular base (radius $6$) and the same height. The cylinder's volume is $360\pi$. What is the cone's volume?`,
            answer: '$V_{\\text{cone}} = \\frac{1}{3} V_{\\text{cylinder}} = \\frac{360\\pi}{3} = 120\\pi$.',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'volume',
    title: 'Simple Volume of Cone Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Direct application of $V = \\frac{1}{3}\\pi r^2 h$ with given radius (or diameter) and height.',
        blocks: [
          {
            type: 'formula',
            label: 'Cone Volume',
            content: '$$V = \\frac{1}{3}\\pi r^2 h$$',
            note: '$r$ = base radius, $h$ = perpendicular height',
          },
          {
            type: 'keyInsight',
            content: 'The $\\frac{1}{3}$ factor is the single most common source of error on cone problems. Compute $r^2 \\times h$ first, then divide by $3$, then attach $\\pi$. This sequence prevents omitting the fraction.',
          },
          {
            type: 'trapCard',
            title: 'Omitting the One-Third Factor',
            wrong: `$r = 3$, $h = 12$. Student writes $V = \pi(9)(12) = 108\pi$, which is the cylinder's volume.`,
            correction: `$V = \frac{1}{3}\pi(9)(12) = \frac{108\pi}{3} = 36\pi$. Without $\frac{1}{3}$, the answer is the cylinder's volume, not the cone's.`,
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A cone has a radius of $6$ cm and a height of $10$ cm. What is the volume in terms of $\\pi$?',
            steps: [
              {
                label: 'Compute $r^2 \\cdot h$',
                content: '$6^2 \\times 10 = 360$',
              },
              {
                label: 'Divide by $3$',
                content: '$\\frac{360}{3} = 120$',
              },
              {
                label: 'Final answer',
                content: '$V = 120\\pi \\text{ cm}^3$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A cone has a radius of $6$ cm and a height of $10$ cm. What is the volume in terms of $\\pi$?',
            answer: '$V = 120\\pi \\text{ cm}^3$',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'volume',
    title: 'Volume of a Triangular Prism',
    sections: {
      learn: {
        title: 'Learn',
        summary: `A triangular prism has two triangular faces connected by rectangles. Volume equals the triangle's area times the prism's length.`,
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Triangle Area',
                formula: '$A = \\frac{1}{2}bh$',
                note: '$b$ = base, $h$ = height of triangle',
              },
              {
                label: 'Prism Volume',
                formula: '$V = \\frac{1}{2}bh \\cdot l$',
                note: 'Triangle area $\\times$ prism length',
              },
            ],
          },
          {
            type: 'text',
            content: 'The "base area $\\times$ depth" pattern applies to all prisms. For a triangular prism, the cross-section is a triangle with area $\\frac{1}{2}bh$, extruded through length $l$.',
          },
          {
            type: 'keyInsight',
            content: `Three distinct measurements matter: the triangle's base ($b$), the triangle's height ($h$), and the prism's length ($l$). Splitting the work into two steps — (1) compute triangle area, (2) multiply by length — prevents the $\frac{1}{2}$ from being dropped.`,
          },
          {
            type: 'trapCard',
            title: 'Omitting the One-Half Factor',
            wrong: 'Triangle base $= 8$, height $= 6$, prism length $= 10$. Student writes $V = 8 \\times 6 \\times 10 = 480$.',
            correction: 'The cross-section is a triangle: area $= \\frac{1}{2}(8)(6) = 24$. Then $V = 24 \\times 10 = 240$. Omitting $\\frac{1}{2}$ doubles the answer.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Computing Triangular Prism Volume',
            items: [
              'Identify the triangular face: note its base $b$ and perpendicular height $h$.',
              'Compute triangle area: $A = \\frac{1}{2}bh$.',
              'Identify the prism length $l$ (the distance between the two parallel triangular faces).',
              'Multiply: $V = A \\times l = \\frac{1}{2}bh \\cdot l$.',
            ],
          },
          {
            type: 'steps',
            title: 'Computing Triangular Prism Volume',
            items: [
              'Identify the triangular face: note its base $b$ and perpendicular height $h$.',
              'Compute triangle area: $A = \\frac{1}{2}bh$.',
              'Identify the prism length $l$ (the distance between the two parallel triangular faces).',
              'Multiply: $V = A \\times l = \\frac{1}{2}bh \\cdot l$.',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: `A triangular prism has a volume of $180 \text{ in}^3$. Its triangular face has base $12$ in and height $5$ in. What is the prism's length?`,
            answer: 'Triangle area $= \\frac{1}{2}(12)(5) = 30 \\text{ in}^2$. Length $= \\frac{180}{30} = 6$ in.',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'volume',
    title: 'Simple Volume of Triangular Prism Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Direct application of $V = \\frac{1}{2}bh \\cdot l$ with given triangle dimensions and prism length.',
        blocks: [
          {
            type: 'formula',
            label: 'Triangular Prism Volume',
            content: '$$V = \\frac{1}{2}bh \\cdot l$$',
            note: '$b$ = triangle base, $h$ = triangle height, $l$ = prism length',
          },
          {
            type: 'keyInsight',
            content: 'The two-step approach — (1) compute $\\frac{1}{2}bh$, (2) multiply by $l$ — ensures the $\\frac{1}{2}$ is not lost inside a single long multiplication chain.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying Three Dimensions Without the Half',
            wrong: '$b = 6$, $h = 4$, $l = 5$. Student writes $V = 6 \\times 4 \\times 5 = 120$ without including $\\frac{1}{2}$.',
            correction: 'Triangle area $= \\frac{1}{2}(6)(4) = 12$. Volume $= 12 \\times 5 = 60$. The correct answer is exactly half the incorrect one.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A wedge-shaped doorstop has a triangular cross-section with base $5$ cm and height $3$ cm. The doorstop is $12$ cm long. What is its volume?',
            steps: [
              {
                label: 'Triangle area',
                content: '$A = \\frac{1}{2}(5)(3) = 7.5 \\text{ cm}^2$',
              },
              {
                label: 'Volume',
                content: '$V = 7.5 \\times 12 = 90 \\text{ cm}^3$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A wedge-shaped doorstop has a triangular cross-section with base $5$ cm and height $3$ cm. The doorstop is $12$ cm long. What is its volume?',
            answer: '$V = 7.5 \\times 12 = 90 \\text{ cm}^3$',
          },
        ],
      },
    },
  },
};
