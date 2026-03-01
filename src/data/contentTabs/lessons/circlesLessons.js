export const circlesLessonTabs = {
  1: {
    moduleId: 'circles',
    title: 'Parts of a Circle',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A circle is defined by its center and radius. Every other part — diameter, chord, arc, sector, tangent — builds on these two ideas.',
        blocks: [
          {
            type: 'text',
            content: 'A **circle** is the set of all points in a plane that are exactly the same distance from a fixed point called the **center**. That distance is the **radius** ($r$).',
          },
          {
            type: 'keyInsight',
            content: 'Almost every circle formula on the Digital SAT involves the radius $r$. If a problem gives the diameter, **divide by 2 first**. If it gives circumference or area, **solve for $r$ first**, then answer the actual question.',
          },
          {
            type: 'table',
            headers: [
              'Term',
              'Definition',
              'Key Fact',
            ],
            rows: [
              [
                '**Radius**',
                'Segment from center to any point on the circle',
                'All radii of a circle are equal',
              ],
              [
                '**Diameter**',
                'Segment through the center connecting two points on the circle',
                '$d = 2r$',
              ],
              [
                '**Chord**',
                'Segment connecting any two points on the circle',
                'The diameter is the longest possible chord',
              ],
              [
                '**Arc**',
                `A portion of the circle's circumference`,
                'Measured in degrees or length',
              ],
              [
                '**Sector**',
                'The region between two radii and an arc',
                'Measured as a fraction of total area',
              ],
              [
                '**Tangent**',
                'A line touching the circle at exactly one point',
                'Perpendicular to the radius at the point of tangency',
              ],
              [
                '**Central Angle**',
                'Angle formed at the center by two radii',
                'Equal in degrees to its intercepted arc',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Using Diameter as Radius',
            wrong: '"A circle has a diameter of $10$." Student plugs $10$ into $A = \\pi r^2$ and gets $100\\pi$.',
            correction: 'The radius is $\\frac{10}{2} = 5$. The area is $\\pi(5)^2 = 25\\pi$. Using $d$ as $r$ produces an answer exactly $4\\times$ too large.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A circle has a diameter of $14$. A central angle of $90°$ intercepts an arc. Find the arc length and the area of the corresponding sector.',
            steps: [
              {
                label: 'Find radius',
                content: '$r = \\frac{14}{2} = 7$',
              },
              {
                label: 'Fraction of circle',
                content: '$\\frac{90}{360} = \\frac{1}{4}$',
              },
              {
                label: 'Arc length',
                content: '$\\frac{1}{4} \\times 2\\pi(7) = \\frac{14\\pi}{4} = \\frac{7\\pi}{2}$',
              },
              {
                label: 'Sector area',
                content: '$\\frac{1}{4} \\times \\pi(7)^2 = \\frac{49\\pi}{4}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A circle has radius $5$. What is its diameter, circumference, and area?',
            answer: 'Diameter $= 2(5) = 10$. Circumference $= 2\\pi(5) = 10\\pi$. Area $= \\pi(5)^2 = 25\\pi$.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'circles',
    title: 'Area of a Circle',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The area of a circle depends only on its radius — square the radius, multiply by $\\pi$.',
        blocks: [
          {
            type: 'formula',
            label: 'Circle Area',
            content: '$$A = \\pi r^2$$',
          },
          {
            type: 'text',
            content: 'The area measures the space **inside** the circle. Since $r$ is squared, doubling the radius **quadruples** the area — not doubles it. If the problem gives diameter $d$, convert first: $r = \\frac{d}{2}$, so $A = \\pi\\!\\left(\\frac{d}{2}\\right)^{\\!2} = \\frac{\\pi d^2}{4}$.',
          },
          {
            type: 'keyInsight',
            content: 'Scaling rule: if the radius is multiplied by $k$, the area is multiplied by $k^2$. Double the radius ($k = 2$) → area quadruples ($2^2 = 4$). Triple the radius ($k = 3$) → area increases $9\\times$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Square the Radius',
            wrong: '$r = 6$. Student writes $A = \\pi(6) = 6\\pi$ instead of $\\pi(6)^2 = 36\\pi$.',
            correction: 'Area requires $r^{\\mathbf{2}}$: $A = \\pi(6)^2 = 36\\pi$. The exponent $2$ is essential — $\\pi r$ gives circumference divided by $2$, not area.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Circle A has radius $3$ and Circle B has radius $9$. How many times greater is the area of Circle B?',
            steps: [
              {
                label: 'Areas',
                content: '$A_A = \\pi(3)^2 = 9\\pi$, $A_B = \\pi(9)^2 = 81\\pi$',
              },
              {
                label: 'Ratio',
                content: '$\\frac{81\\pi}{9\\pi} = 9$ times greater',
              },
              {
                label: 'Shortcut',
                content: 'Radius tripled ($\\times 3$), so area increases by $3^2 = 9$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A circle has a diameter of $20$. What is its area?',
            answer: '$r = \\frac{20}{2} = 10$. Area $= \\pi(10)^2 = 100\\pi$.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'circles',
    title: 'Circumference of a Circle',
    sections: {
      learn: {
        title: 'Learn',
        summary: `Circumference is the distance around a circle — think of it as the circle's perimeter.`,
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Using radius',
                formula: '$C = 2\\pi r$',
                note: 'Multiply radius by $2\\pi$',
              },
              {
                label: 'Using diameter',
                formula: '$C = \\pi d$',
                note: 'Multiply diameter by $\\pi$',
              },
            ],
          },
          {
            type: 'text',
            content: 'Unlike area, circumference scales **linearly** with the radius. Double the radius and the circumference doubles. The number $\\pi$ is literally defined as $\\frac{C}{d}$ — circumference divided by diameter.',
          },
          {
            type: 'keyInsight',
            content: 'Circumference scales linearly ($\\times k$ radius produces $\\times k$ circumference). Area scales quadratically ($\\times k$ radius produces $\\times k^2$ area). If the radius triples, circumference triples but area increases $9\\times$.',
          },
          {
            type: 'trapCard',
            title: 'Circumference-to-Area Pipeline Error',
            wrong: '"Circumference is $20\\pi$." Student writes $A = \\pi(20)^2 = 400\\pi$ instead of solving for $r$ first.',
            correction: 'If $C = 20\\pi$, then $2\\pi r = 20\\pi$, so $r = 10$. Area $= \\pi(10)^2 = 100\\pi$. Solve for $r$ before using the area formula.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A wheel has a circumference of $24\\pi$ inches. What is the area of the circle?',
            steps: [
              {
                label: 'Solve for $r$',
                content: '$24\\pi = 2\\pi r \\Rightarrow r = 12$',
              },
              {
                label: 'Compute area',
                content: '$A = \\pi(12)^2 = 144\\pi$ square inches',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A circular fountain has a radius of $8$ feet. How much decorative edging is needed to go around it once?',
            answer: '$C = 2\\pi(8) = 16\\pi \\approx 50.27$ feet.',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'circles',
    title: 'Simple Circle Area Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A straightforward circle area problem: given a measurement, find the area using $A = \\pi r^2$.',
        blocks: [
          {
            type: 'formula',
            label: 'Circle Area',
            content: '$$A = \\pi r^2$$',
          },
          {
            type: 'keyInsight',
            content: 'Simple area problems test whether you can identify the correct input ($r$ vs. $d$) and apply the formula. The SAT often phrases these as real-world problems (garden area, pool cover, patio surface).',
          },
          {
            type: 'trapCard',
            title: 'Diameter vs. Radius',
            wrong: '"The diameter of a circular patio is $12$ feet." Student computes $A = \\pi(12)^2 = 144\\pi$.',
            correction: '$r = \\frac{12}{2} = 6$. Correct area: $A = \\pi(6)^2 = 36\\pi$ square feet.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A circular garden has a diameter of $20$ feet. What is the area of the garden?',
            steps: [
              {
                label: 'Find radius',
                content: '$r = \\frac{20}{2} = 10$ feet',
              },
              {
                label: 'Apply formula',
                content: '$A = \\pi(10)^2 = 100\\pi \\approx 314.16$ square feet',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A circular garden has a diameter of $20$ feet. What is the area of the garden?',
            answer: '$A = \\pi(10)^2 = 100\\pi \\approx 314.16$ square feet',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'circles',
    title: 'Complex Circle Area Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Multi-step area problems require extracting the radius from another quantity before computing area.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Area',
                formula: '$A = \\pi r^2$',
                note: 'Target formula',
              },
              {
                label: 'Radius from circumference',
                formula: '$r = \\frac{C}{2\\pi}$',
                note: 'Solve $C = 2\\pi r$',
              },
              {
                label: 'Radius from area',
                formula: '$r = \\sqrt{\\frac{A}{\\pi}}$',
                note: 'Reverse the area formula',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Complex area problems rarely give $r$ directly. The radius may need to be derived from circumference, from a relationship between two circles, or from a geometric figure containing the circle.',
          },
          {
            type: 'trapCard',
            title: 'Skipping the Radius Step',
            wrong: '"The circumference is $16\\pi$." Student writes $A = \\pi(16)^2 = 256\\pi$ without finding $r$ first.',
            correction: '$C = 16\\pi \\Rightarrow 2\\pi r = 16\\pi \\Rightarrow r = 8$. Correct area: $A = \\pi(8)^2 = 64\\pi$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Circle A has an area of $25\\pi$. Circle B has a radius that is $3$ times the radius of Circle A. What is the area of Circle B?',
            steps: [
              {
                label: 'Find $r_A$',
                content: '$\\pi r_A^2 = 25\\pi \\Rightarrow r_A = 5$',
              },
              {
                label: 'Find $r_B$',
                content: '$r_B = 3 \\times 5 = 15$',
              },
              {
                label: 'Area of B',
                content: '$A_B = \\pi(15)^2 = 225\\pi$',
              },
              {
                label: 'Shortcut check',
                content: 'Radius tripled, so area scales by $3^2 = 9$: $25\\pi \\times 9 = 225\\pi$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Circle A has an area of $25\\pi$. Circle B has a radius that is $3$ times the radius of Circle A. What is the area of Circle B?',
            answer: 'Radius tripled, so area scales by $3^2 = 9$: $25\\pi \\times 9 = 225\\pi$.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'circles',
    title: 'Arc Length',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Arc length is a fraction of the full circumference, determined by the central angle.',
        blocks: [
          {
            type: 'formula',
            label: 'Arc Length',
            content: '$$\\ell = \\frac{\\theta}{360} \\times 2\\pi r$$',
          },
          {
            type: 'text',
            content: `An arc is a piece of the circle's edge. Its length is proportional to the central angle $\theta$ that subtends it. A $90°$ arc is $\frac{1}{4}$ of the circumference; a $180°$ arc (semicircle) is half.`,
          },
          {
            type: 'keyInsight',
            content: 'The fraction $\\frac{\\theta}{360}$ appears in both arc length and sector area. Master this fraction and both formulas follow: multiply it by circumference for length, by area for sector area.',
          },
          {
            type: 'table',
            headers: [
              'Quantity',
              'Formula',
              'What It Measures',
            ],
            rows: [
              [
                'Arc Length',
                '$\\frac{\\theta}{360} \\times 2\\pi r$',
                'Fraction of **circumference** (linear units)',
              ],
              [
                'Sector Area',
                '$\\frac{\\theta}{360} \\times \\pi r^2$',
                'Fraction of **area** (square units)',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Using Area Formula for Length',
            wrong: 'Asked for arc length with $r = 10$, $\\theta = 60°$. Student computes $\\frac{60}{360} \\times \\pi(10)^2 = \\frac{100\\pi}{6}$.',
            correction: 'That is sector **area**, not arc length. Arc length: $\\frac{60}{360} \\times 2\\pi(10) = \\frac{20\\pi}{6} = \\frac{10\\pi}{3}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A circle has radius $10$. What is the length of an arc intercepted by a $72°$ central angle?',
            steps: [
              {
                label: 'Fraction',
                content: '$\\frac{72}{360} = \\frac{1}{5}$',
              },
              {
                label: 'Circumference',
                content: '$2\\pi(10) = 20\\pi$',
              },
              {
                label: 'Arc length',
                content: '$\\frac{1}{5} \\times 20\\pi = 4\\pi$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A circle has diameter $18$. Find the arc length intercepted by a $120°$ central angle.',
            answer: '$r = 9$. $\\frac{120}{360} = \\frac{1}{3}$. Circumference $= 2\\pi(9) = 18\\pi$. Arc length $= \\frac{1}{3} \\times 18\\pi = 6\\pi$.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'circles',
    title: 'Simple Circumference Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A direct circumference problem: given radius or diameter, compute the distance around the circle.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'From radius',
                formula: '$C = 2\\pi r$',
                note: 'Most common on the SAT',
              },
              {
                label: 'From diameter',
                formula: '$C = \\pi d$',
                note: 'Shortcut when $d$ is given',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Simple circumference problems test whether you can identify the correct input ($r$ vs. $d$) and apply the matching formula. The SAT often phrases these as real-world perimeter questions (fencing, track distance, wire length).',
          },
          {
            type: 'trapCard',
            title: 'Using Area Formula Instead',
            wrong: '"Find the distance around a circular track with radius $50$ m." Student writes $\\pi(50)^2 = 2500\\pi$.',
            correction: '"Distance around" means circumference: $C = 2\\pi(50) = 100\\pi \\approx 314.16$ m. The area formula gives square units, not a distance.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A circular track has a diameter of $50$ meters. What is the distance around the track?',
            steps: [
              {
                label: 'Apply formula',
                content: '$C = \\pi d = 50\\pi \\approx 157.1$ meters',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A circular track has a diameter of $50$ meters. What is the distance around the track?',
            answer: '$C = \\pi d = 50\\pi \\approx 157.1$ meters',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'circles',
    title: 'Conceptual Arc Length Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Conceptual arc length problems test proportional reasoning: if one arc and its angle are known, any other arc on the same circle can be found by scaling.',
        blocks: [
          {
            type: 'formula',
            label: 'Arc Proportion',
            content: '$$\\frac{\\ell_1}{\\ell_2} = \\frac{\\theta_1}{\\theta_2}$$',
          },
          {
            type: 'text',
            content: 'Arc length is directly proportional to the central angle. Doubling the angle doubles the arc length. This proportional reasoning solves many SAT problems without plugging into the formula at all.',
          },
          {
            type: 'keyInsight',
            content: 'Any arc is a **fraction** of the full circumference. That fraction equals $\\frac{\\theta}{360}$. If one arc length and its angle are known, any other arc on the same circle can be found via $\\frac{\\ell_2}{\\ell_1} = \\frac{\\theta_2}{\\theta_1}$.',
          },
          {
            type: 'trapCard',
            title: 'Treating Arc Length as the Angle',
            wrong: 'Student reads "a $60°$ arc" and uses $60$ as a length, computing area $= 60^2\\pi$ instead of finding the actual arc length.',
            correction: 'Angles are in degrees; arc length is a distance. A $60°$ arc on a circle with $r = 12$ has length $\\frac{60}{360} \\times 2\\pi(12) = 4\\pi$, not $60$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'On a circle, a $40°$ arc has length $6$. What is the length of a $100°$ arc on the same circle?',
            steps: [
              {
                label: 'Set up ratio',
                content: '$\\frac{\\ell_2}{6} = \\frac{100}{40}$',
              },
              {
                label: 'Solve',
                content: '$\\ell_2 = 6 \\times \\frac{100}{40} = 6 \\times 2.5 = 15$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'On a circle, a $40°$ arc has length $6$. What is the length of a $100°$ arc on the same circle?',
            answer: '$\\ell_2 = 6 \\times \\frac{100}{40} = 6 \\times 2.5 = 15$',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'circles',
    title: 'Calculating Arc Length Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A computational arc length problem requiring the full formula: combine the central angle fraction with the circumference.',
        blocks: [
          {
            type: 'formula',
            label: 'Arc Length',
            content: '$$\\ell = \\frac{\\theta}{360} \\times 2\\pi r$$',
          },
          {
            type: 'keyInsight',
            content: 'Calculation-based arc length problems give specific numerical values for the angle and radius (or diameter) and require a precise answer. Simplify $\\frac{\\theta}{360}$ first for cleaner arithmetic.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Formula Branch',
            wrong: 'Student computes $\\frac{90}{360} \\times \\pi(8)^2 = 16\\pi$ when asked for arc length, not sector area.',
            correction: 'Arc **length** $= \\frac{\\theta}{360} \\times 2\\pi r$. Sector **area** $= \\frac{\\theta}{360} \\times \\pi r^2$. Length uses $2\\pi r$, area uses $\\pi r^2$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A circle has a diameter of $18$. Find the length of an arc intercepted by a $120°$ central angle.',
            steps: [
              {
                label: 'Find radius',
                content: '$r = \\frac{18}{2} = 9$',
              },
              {
                label: 'Simplify fraction',
                content: '$\\frac{120}{360} = \\frac{1}{3}$',
              },
              {
                label: 'Circumference',
                content: '$2\\pi(9) = 18\\pi$',
              },
              {
                label: 'Arc length',
                content: '$\\frac{1}{3} \\times 18\\pi = 6\\pi$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A circle has a diameter of $18$. Find the length of an arc intercepted by a $120°$ central angle.',
            answer: '$\\frac{1}{3} \\times 18\\pi = 6\\pi$',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'circles',
    title: 'Sector Area',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A sector is a "pizza slice" of the circle. Its area is the same fraction of the full area as the central angle is of $360°$.',
        blocks: [
          {
            type: 'formula',
            label: 'Sector Area',
            content: '$$A_{\\text{sector}} = \\frac{\\theta}{360} \\times \\pi r^2$$',
          },
          {
            type: 'text',
            content: 'The formula follows the same logic as arc length: take the full quantity (total area $\\pi r^2$) and multiply by the fraction $\\frac{\\theta}{360}$. The only difference from arc length is what you multiply the fraction by.',
          },
          {
            type: 'keyInsight',
            content: 'Both arc length and sector area use the same fraction $\\frac{\\theta}{360}$. The only difference is what you multiply by: circumference ($2\\pi r$) for length, full area ($\\pi r^2$) for area.',
          },
          {
            type: 'table',
            headers: [
              'Quantity',
              'Formula',
              'Units',
            ],
            rows: [
              [
                'Arc Length',
                '$\\frac{\\theta}{360} \\times 2\\pi r$',
                'Linear (cm, in)',
              ],
              [
                'Sector Area',
                '$\\frac{\\theta}{360} \\times \\pi r^2$',
                'Square (cm$^2$, in$^2$)',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Using Circumference Instead of Area',
            wrong: 'Asked for sector area with $\\theta = 60°$, $r = 6$. Student writes $\\frac{60}{360} \\times 2\\pi(6) = 2\\pi$.',
            correction: 'That computes arc **length** ($2\\pi r$), not area ($\\pi r^2$). Sector area: $\\frac{60}{360} \\times \\pi(6)^2 = \\frac{1}{6} \\times 36\\pi = 6\\pi$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the area of a sector with central angle $60°$ and radius $6$.',
            steps: [
              {
                label: 'Fraction',
                content: '$\\frac{60}{360} = \\frac{1}{6}$',
              },
              {
                label: 'Full area',
                content: '$\\pi(6)^2 = 36\\pi$',
              },
              {
                label: 'Sector area',
                content: '$\\frac{1}{6} \\times 36\\pi = 6\\pi$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A circle has area $100\\pi$. What is the area of the region outside a $90°$ sector (the shaded complement)?',
            answer: 'The $90°$ sector has area $\\frac{1}{4} \\times 100\\pi = 25\\pi$. The complement: $100\\pi - 25\\pi = 75\\pi$.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'circles',
    title: 'Simple Sector Area Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: `A straightforward sector area problem: given the central angle and radius, compute the sector's area directly.`,
        blocks: [
          {
            type: 'formula',
            label: 'Sector Area',
            content: '$$A_{\\text{sector}} = \\frac{\\theta}{360} \\times \\pi r^2$$',
          },
          {
            type: 'keyInsight',
            content: 'Simple sector problems give the angle and radius explicitly. The work is purely computational: simplify $\\frac{\\theta}{360}$, compute $\\pi r^2$, and multiply.',
          },
          {
            type: 'trapCard',
            title: 'Swapping Length and Area Formulas',
            wrong: 'Student computes $\\frac{90}{360} \\times 2\\pi(8) = 4\\pi$ when asked for the area of a $90°$ sector with $r = 8$.',
            correction: 'That is the arc **length**. Sector area: $\\frac{90}{360} \\times \\pi(8)^2 = \\frac{1}{4} \\times 64\\pi = 16\\pi$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: `A sector has a central angle of $90°$ and a radius of $8$. What is the sector's area?`,
            steps: [
              {
                label: 'Fraction',
                content: '$\\frac{90}{360} = \\frac{1}{4}$',
              },
              {
                label: 'Full area',
                content: '$\\pi(8)^2 = 64\\pi$',
              },
              {
                label: 'Sector area',
                content: '$\\frac{1}{4} \\times 64\\pi = 16\\pi$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: `A sector has a central angle of $90°$ and a radius of $8$. What is the sector's area?`,
            answer: '$\\frac{1}{4} \\times 64\\pi = 16\\pi$',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'circles',
    title: 'Complex Sector Area Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Multi-step sector area problems where the radius or angle must be derived before applying $A = \\frac{\\theta}{360} \\times \\pi r^2$.',
        blocks: [
          {
            type: 'formula',
            label: 'Sector Area',
            content: '$$A_{\\text{sector}} = \\frac{\\theta}{360} \\times \\pi r^2$$',
          },
          {
            type: 'keyInsight',
            content: 'Complex sector problems add an extra layer: you may need to find the radius from circumference or area first, compute the angle from arc length, or find the area of a shaded complement.',
          },
          {
            type: 'trapCard',
            title: 'Computing the Sector Instead of Its Complement',
            wrong: '"The unshaded sector is $60°$. Find the shaded area." Student computes $\\frac{60}{360} \\times \\pi(10)^2 = \\frac{100\\pi}{6}$.',
            correction: 'The shaded area is the complement: $\\frac{300}{360} \\times \\pi(10)^2 = \\frac{5}{6} \\times 100\\pi = \\frac{500\\pi}{6}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A circle has circumference $24\\pi$. A sector of this circle has an arc length of $4\\pi$. What is the area of this sector?',
            steps: [
              {
                label: 'Find radius',
                content: '$C = 24\\pi \\Rightarrow 2\\pi r = 24\\pi \\Rightarrow r = 12$',
              },
              {
                label: 'Find angle',
                content: '$\\frac{\\theta}{360} \\times 24\\pi = 4\\pi \\Rightarrow \\frac{\\theta}{360} = \\frac{1}{6} \\Rightarrow \\theta = 60°$',
              },
              {
                label: 'Sector area',
                content: '$\\frac{60}{360} \\times \\pi(12)^2 = \\frac{1}{6} \\times 144\\pi = 24\\pi$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A circle has circumference $24\\pi$. A sector of this circle has an arc length of $4\\pi$. What is the area of this sector?',
            answer: '$\\frac{60}{360} \\times \\pi(12)^2 = \\frac{1}{6} \\times 144\\pi = 24\\pi$',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'circles',
    title: 'Standard Form of a Circle Equation',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The standard form of a circle equation gives you the center and radius at a glance.',
        blocks: [
          {
            type: 'formula',
            label: 'Standard Form',
            content: '$$(x - h)^2 + (y - k)^2 = r^2$$',
          },
          {
            type: 'text',
            content: 'The center is $(h, k)$ and the radius is $r$. The **subtraction** signs in the formula mean the signs in the equation are **opposite** the coordinates of the center.',
          },
          {
            type: 'keyInsight',
            content: 'The right side of the equation is $r^{\\mathbf{2}}$, not $r$. If the equation says $= 49$, the radius is $\\sqrt{49} = 7$, not $49$. Always take the square root.',
          },
          {
            type: 'table',
            headers: [
              'Equation',
              'Center',
              'Radius',
            ],
            rows: [
              [
                '$(x - 3)^2 + (y - 5)^2 = 16$',
                '$(3, 5)$',
                '$r = \\sqrt{16} = 4$',
              ],
              [
                '$(x + 2)^2 + (y - 1)^2 = 9$',
                '$(-2, 1)$',
                '$r = \\sqrt{9} = 3$',
              ],
              [
                '$x^2 + y^2 = 25$',
                '$(0, 0)$',
                '$r = \\sqrt{25} = 5$',
              ],
              [
                '$(x + 4)^2 + (y + 7)^2 = 1$',
                '$(-4, -7)$',
                '$r = \\sqrt{1} = 1$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Sign Error on Center',
            wrong: '$(x + 3)^2 + (y - 5)^2 = 49$. Student reads center as $(3, 5)$ instead of $(-3, 5)$.',
            correction: '$(x + 3)^2 = (x - (-3))^2$, so $h = -3$. Center $= (-3, 5)$, radius $= \\sqrt{49} = 7$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'What are the center and radius of $(x + 5)^2 + (y - 2)^2 = 81$?',
            steps: [
              {
                label: 'Identify $h$',
                content: '$(x + 5)^2 = (x - (-5))^2$, so $h = -5$',
              },
              {
                label: 'Identify $k$',
                content: '$(y - 2)^2$ gives $k = 2$',
              },
              {
                label: 'Find $r$',
                content: '$r^2 = 81 \\Rightarrow r = 9$',
              },
              {
                label: 'Answer',
                content: 'Center $= (-5, 2)$, radius $= 9$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the center and radius of $(x + 7)^2 + (y - 5)^2 = 144$.',
            answer: 'Center $= (-7, 5)$, radius $= \\sqrt{144} = 12$.',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'circles',
    title: 'Simple Extracting Center & Radius from Standard Form',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Given a circle equation in standard form, read off the center and radius by reversing the signs and square-rooting.',
        blocks: [
          {
            type: 'formula',
            label: 'Standard Form',
            content: '$$(x - h)^2 + (y - k)^2 = r^2$$',
          },
          {
            type: 'keyInsight',
            content: 'Think of the parentheses as "distance from $h$" and "distance from $k$." The signs **inside** the parentheses are opposite the actual coordinates. The right side is $r^2$ — always take the square root.',
          },
          {
            type: 'trapCard',
            title: 'Plus Sign Means Negative Coordinate',
            wrong: '$(x + 6)^2 + (y + 1)^2 = 100$. Student writes center as $(6, 1)$ instead of $(-6, -1)$.',
            correction: '$(x + 6)^2 = (x - (-6))^2$. Center $= (-6, -1)$, radius $= \\sqrt{100} = 10$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the center and radius: $(x - 4)^2 + (y + 3)^2 = 64$.',
            steps: [
              {
                label: 'Center',
                content: '$h = 4$, $k = -3$ (reverse the $+3$). Center $= (4, -3)$.',
              },
              {
                label: 'Radius',
                content: '$r = \\sqrt{64} = 8$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the center and radius: $(x - 4)^2 + (y + 3)^2 = 64$.',
            answer: '$r = \\sqrt{64} = 8$',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'circles',
    title: 'Simple Extracting Diameter from Standard Form',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When a question asks for the diameter, find the radius first from the standard form equation, then double it.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'From standard form',
                formula: '$r = \\sqrt{\\text{right side}}$',
                note: 'Extract radius first',
              },
              {
                label: 'Then diameter',
                formula: '$d = 2r$',
                note: 'Double the radius',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The SAT sometimes asks for the diameter instead of the radius. This is a simple extra step, but a common error is giving $r$ when $d$ is asked, or giving $r^2$ when $r$ is asked. Read the question carefully.',
          },
          {
            type: 'trapCard',
            title: 'Giving Radius Instead of Diameter',
            wrong: '$(x - 3)^2 + (y + 1)^2 = 49$. Student answers "the diameter is $7$" but $7$ is the radius.',
            correction: '$r = \\sqrt{49} = 7$, but $d = 2(7) = 14$. The question asks for diameter, not radius.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'What is the diameter of the circle $(x + 2)^2 + (y - 8)^2 = 25$?',
            steps: [
              {
                label: 'Find $r$',
                content: '$r = \\sqrt{25} = 5$',
              },
              {
                label: 'Find $d$',
                content: '$d = 2(5) = 10$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'What is the diameter of the circle $(x + 2)^2 + (y - 8)^2 = 25$?',
            answer: '$d = 2(5) = 10$',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'circles',
    title: 'Complex Extracting Diameter (Conceptual Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When two endpoints of a diameter are given, the center is the midpoint and the diameter is the distance between them.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Midpoint (center)',
                formula: '$M = \\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2}\\right)$',
                note: 'Average the coordinates',
              },
              {
                label: 'Distance (diameter)',
                formula: '$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$',
                note: 'Pythagorean theorem',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The diameter is the longest chord of a circle. If two points on the circle are endpoints of a diameter, the center is their **midpoint** and $d$ is the **distance** between them.',
          },
          {
            type: 'trapCard',
            title: 'Using Endpoints as Center Coordinates',
            wrong: 'Endpoints of a diameter are $(2, 3)$ and $(8, 7)$. Student says center is $(2, 3)$ instead of the midpoint.',
            correction: 'The center is the **midpoint**: $\\left(\\frac{2+8}{2}, \\frac{3+7}{2}\\right) = (5, 5)$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The endpoints of a diameter of a circle are $(-1, 2)$ and $(7, 8)$. Find the center, radius, and equation.',
            steps: [
              {
                label: 'Center (midpoint)',
                content: '$\\left(\\frac{-1+7}{2}, \\frac{2+8}{2}\\right) = (3, 5)$',
              },
              {
                label: 'Diameter (distance)',
                content: '$d = \\sqrt{(7-(-1))^2 + (8-2)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$',
              },
              {
                label: 'Radius',
                content: '$r = \\frac{10}{2} = 5$',
              },
              {
                label: 'Equation',
                content: '$(x - 3)^2 + (y - 5)^2 = 25$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The endpoints of a diameter of a circle are $(-1, 2)$ and $(7, 8)$. Find the center, radius, and equation.',
            answer: '$(x - 3)^2 + (y - 5)^2 = 25$',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'circles',
    title: 'Complex Extracting Diameter (Plug-In Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Substitute a known point on the circle into the equation to solve for the radius, then double for the diameter.',
        blocks: [
          {
            type: 'formula',
            label: 'Point-on-Circle Substitution',
            content: '$$(x_0 - h)^2 + (y_0 - k)^2 = r^2$$',
            note: 'Substitute the known point $(x_0, y_0)$ and solve for $r^2$.',
          },
          {
            type: 'text',
            content: 'Any point $(x, y)$ on the circle satisfies $(x - h)^2 + (y - k)^2 = r^2$. Plugging in a known point and solving for $r^2$ is often faster than geometric reasoning, especially when the equation contains a parameter.',
          },
          {
            type: 'keyInsight',
            content: 'The plug-in method works because every point on a circle is exactly $r$ units from the center. Substituting coordinates and simplifying yields $r^2$ directly.',
          },
          {
            type: 'trapCard',
            title: 'Arithmetic Slip with Negative Coordinates',
            wrong: 'Point $(-3, 4)$ on $(x - 1)^2 + (y + 2)^2 = r^2$. Student writes $(-3 - 1)^2 = (-2)^2 = 4$ instead of $(-4)^2 = 16$.',
            correction: '$(-3 - 1)^2 = (-4)^2 = 16$, and $(4 + 2)^2 = 36$. So $r^2 = 16 + 36 = 52$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A circle with center $(2, -1)$ passes through the point $(5, 3)$. What is the diameter?',
            steps: [
              {
                label: 'Plug in',
                content: '$(5 - 2)^2 + (3 - (-1))^2 = r^2$',
              },
              {
                label: 'Simplify',
                content: '$9 + 16 = r^2 \\Rightarrow r^2 = 25$',
              },
              {
                label: 'Radius',
                content: '$r = 5$',
              },
              {
                label: 'Diameter',
                content: '$d = 2(5) = 10$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A circle with center $(2, -1)$ passes through the point $(5, 3)$. What is the diameter?',
            answer: '$d = 2(5) = 10$',
          },
        ],
      },
    },
  },

  18: {
    moduleId: 'circles',
    title: 'Transformations of Circles',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Transforming a circle means moving its center or changing its radius — both are visible in the standard-form equation.',
        blocks: [
          {
            type: 'text',
            content: 'Starting from $(x - h)^2 + (y - k)^2 = r^2$, every transformation maps directly to a change in $h$, $k$, or $r$.',
          },
          {
            type: 'keyInsight',
            content: 'Translations change the center but not the radius. Scaling changes the radius but not the center. Handle each transformation separately, then combine.',
          },
          {
            type: 'table',
            headers: [
              'Transformation',
              'Effect on Equation',
              'Example',
            ],
            rows: [
              [
                'Shift **right** by $a$',
                '$h$ increases by $a$',
                '$(x-2)^2 \\to (x-5)^2$ shifts right $3$',
              ],
              [
                'Shift **left** by $a$',
                '$h$ decreases by $a$',
                '$(x-2)^2 \\to (x+1)^2$ shifts left $3$',
              ],
              [
                'Shift **up** by $b$',
                '$k$ increases by $b$',
                '$(y-1)^2 \\to (y-4)^2$ shifts up $3$',
              ],
              [
                'Shift **down** by $b$',
                '$k$ decreases by $b$',
                '$(y-1)^2 \\to (y+2)^2$ shifts down $3$',
              ],
              [
                'Scale radius by factor $s$',
                '$r^2$ becomes $(sr)^2$',
                '$r^2 = 9 \\to r^2 = 36$ doubles radius',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Shift Direction vs. Sign in Equation',
            wrong: '"Shifted $3$ left." Student writes $(x - 3)^2$ in the new equation, moving the circle right instead of left.',
            correction: 'Shifting left by $3$ subtracts from $h$. If old center was $(h, k)$, new center is $(h - 3, k)$. Work with center coordinates first, then build the equation.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Circle $C_1$: $(x - 1)^2 + (y + 3)^2 = 4$. Write the equation of $C_2$, which is $C_1$ shifted $5$ units right and $2$ units up with the radius doubled.',
            steps: [
              {
                label: 'Original',
                content: 'Center $(1, -3)$, radius $= 2$',
              },
              {
                label: 'Shift center',
                content: '$(1 + 5,\\; -3 + 2) = (6, -1)$',
              },
              {
                label: 'Scale radius',
                content: '$2 \\times 2 = 4$, so $r^2 = 16$',
              },
              {
                label: 'New equation',
                content: '$(x - 6)^2 + (y + 1)^2 = 16$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Circle: $(x - 1)^2 + (y + 2)^2 = 4$. Shift $3$ left and double the radius. New equation?',
            answer: 'Center $(1, -2) \\to (1-3, -2) = (-2, -2)$. Radius $2 \\to 4$, so $r^2 = 16$. New equation: $(x + 2)^2 + (y + 2)^2 = 16$.',
          },
        ],
      },
    },
  },

  19: {
    moduleId: 'circles',
    title: 'Simple Circle Transformations Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A single-step translation: shift a circle left, right, up, or down and write the new equation.',
        blocks: [
          {
            type: 'formula',
            label: 'Translation Rule',
            content: '$$(x - h)^2 + (y - k)^2 = r^2 \\;\\xrightarrow{\\text{shift } (a,\\,b)}\\; (x - (h+a))^2 + (y - (k+b))^2 = r^2$$',
          },
          {
            type: 'text',
            content: 'A pure translation moves the center without changing the radius. The new equation has the same $r^2$ on the right side; only $h$ and/or $k$ change.',
          },
          {
            type: 'keyInsight',
            content: 'Right/left shifts change $h$. Up/down shifts change $k$. The radius stays the same. The sign inside the parenthesis is always **opposite** the coordinate value.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Direction',
            wrong: '"Shift $4$ units left." Student writes $(x - 4)^2$, which actually shifts the center right by $4$.',
            correction: 'Left subtracts from $h$. Work with center coordinates first: if $h = 2$, new $h = 2 - 4 = -2$, giving $(x + 2)^2$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'The circle $(x - 2)^2 + (y + 5)^2 = 16$ is shifted $3$ units to the right. What is the new equation?',
            steps: [
              {
                label: 'Original center',
                content: '$(2, -5)$',
              },
              {
                label: 'New center',
                content: '$(2 + 3, -5) = (5, -5)$',
              },
              {
                label: 'New equation',
                content: '$(x - 5)^2 + (y + 5)^2 = 16$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The circle $(x - 2)^2 + (y + 5)^2 = 16$ is shifted $3$ units to the right. What is the new equation?',
            answer: '$(x - 5)^2 + (y + 5)^2 = 16$',
          },
        ],
      },
    },
  },

  20: {
    moduleId: 'circles',
    title: 'Complex Circle Transformations Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Multi-step transformations combining translation and scaling: shift the center AND change the radius.',
        blocks: [
          {
            type: 'formula',
            label: 'Combined Transformation',
            content: '$$\\text{New center} = (h + a,\\, k + b), \\quad \\text{New } r^2 = (s \\cdot r)^2$$',
            note: 'Translation shifts $(h, k)$ by $(a, b)$; scaling multiplies $r$ by $s$.',
          },
          {
            type: 'text',
            content: 'Complex transformation problems require modifying both the center and the radius. Handle each transformation independently: translations change $(h, k)$, scaling changes $r$.',
          },
          {
            type: 'keyInsight',
            content: 'When scaling the radius, square the new radius for the equation. If the radius triples, $r^2$ becomes $9$ times larger (not $3$ times).',
          },
          {
            type: 'trapCard',
            title: 'Scaling $r^2$ Directly',
            wrong: '"Radius is tripled." Student triples $r^2$ from $4$ to $12$ instead of computing $(3 \\times 2)^2 = 36$.',
            correction: 'If $r^2 = 4$, then $r = 2$. Tripled: $r = 6$, so $r^2 = 36$. Triple $r$ first, then re-square.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Circle: $(x + 3)^2 + (y - 4)^2 = 9$. It is shifted $6$ units right, $4$ units down, and the radius is tripled. Write the new equation.',
            steps: [
              {
                label: 'Original',
                content: 'Center $(-3, 4)$, $r = 3$',
              },
              {
                label: 'Shift center',
                content: '$(-3 + 6, 4 - 4) = (3, 0)$',
              },
              {
                label: 'Scale radius',
                content: '$3 \\times 3 = 9$, so $r^2 = 81$',
              },
              {
                label: 'New equation',
                content: '$(x - 3)^2 + y^2 = 81$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Circle: $(x + 3)^2 + (y - 4)^2 = 9$. It is shifted $6$ units right, $4$ units down, and the radius is tripled. Write the new equation.',
            answer: '$(x - 3)^2 + y^2 = 81$',
          },
        ],
      },
    },
  },

  21: {
    moduleId: 'circles',
    title: 'Domain & Range of a Circle',
    sections: {
      learn: {
        title: 'Learn',
        summary: `A circle's domain and range are closed intervals determined by the center and radius.`,
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Domain',
                formula: '$[h - r,\\; h + r]$',
                note: 'All $x$-values on the circle',
              },
              {
                label: 'Range',
                formula: '$[k - r,\\; k + r]$',
                note: 'All $y$-values on the circle',
              },
            ],
          },
          {
            type: 'text',
            content: 'A circle with center $(h, k)$ and radius $r$ extends $r$ units in every direction from the center. This produces rectangular bounds on the $x$- and $y$-values.',
          },
          {
            type: 'keyInsight',
            content: 'Domain uses $h$ and $r$; range uses $k$ and $r$. Both intervals are **closed** (brackets, not parentheses) because the extreme points lie on the circle.',
          },
          {
            type: 'trapCard',
            title: 'Using $r^2$ Instead of $r$',
            wrong: '$(x - 3)^2 + (y + 1)^2 = 25$. Student writes domain as $[3 - 25, 3 + 25] = [-22, 28]$.',
            correction: '$r = \\sqrt{25} = 5$, not $25$. Domain $= [3 - 5, 3 + 5] = [-2, 8]$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the domain and range of the circle $(x + 2)^2 + (y - 5)^2 = 49$.',
            steps: [
              {
                label: 'Identify',
                content: 'Center $= (-2, 5)$, radius $= \\sqrt{49} = 7$',
              },
              {
                label: 'Domain',
                content: '$[-2 - 7,\\; -2 + 7] = [-9, 5]$',
              },
              {
                label: 'Range',
                content: '$[5 - 7,\\; 5 + 7] = [-2, 12]$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'What is the domain and range of $x^2 + y^2 = 36$?',
            answer: 'Center $(0, 0)$, $r = 6$. Domain $= [-6, 6]$. Range $= [-6, 6]$.',
          },
        ],
      },
    },
  },

  22: {
    moduleId: 'circles',
    title: 'Determining Domain & Range Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Practice extracting domain and range from various circle equations by identifying the center and radius first.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Domain',
                formula: '$[h - r,\\; h + r]$',
                note: 'Horizontal span',
              },
              {
                label: 'Range',
                formula: '$[k - r,\\; k + r]$',
                note: 'Vertical span',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The most common errors in domain/range problems are misreading the center (sign errors) or using $r^2$ instead of $r$. Extract center and radius carefully before computing the intervals.',
          },
          {
            type: 'trapCard',
            title: 'Open vs. Closed Intervals',
            wrong: 'Student writes domain as $(h - r, h + r)$ with parentheses instead of $[h - r, h + r]$ with brackets.',
            correction: 'The extreme points are **on** the circle, so the intervals are closed: $[h - r, h + r]$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the domain and range: $(x - 4)^2 + (y + 6)^2 = 100$.',
            steps: [
              {
                label: 'Center',
                content: '$(4, -6)$',
              },
              {
                label: 'Radius',
                content: '$r = \\sqrt{100} = 10$',
              },
              {
                label: 'Domain',
                content: '$[4 - 10, 4 + 10] = [-6, 14]$',
              },
              {
                label: 'Range',
                content: '$[-6 - 10, -6 + 10] = [-16, 4]$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the domain and range: $(x - 4)^2 + (y + 6)^2 = 100$.',
            answer: '$[-6 - 10, -6 + 10] = [-16, 4]$',
          },
        ],
      },
    },
  },

  23: {
    moduleId: 'circles',
    title: 'Intersecting Y-Axis at Exactly One Point Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A circle intersects the $y$-axis at exactly one point when the distance from the center to the $y$-axis equals the radius.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Tangent to $y$-axis',
                formula: '$|h| = r$',
                note: 'Exactly one intersection',
              },
              {
                label: 'Two intersections',
                formula: '$|h| < r$',
                note: 'Circle crosses $y$-axis',
              },
              {
                label: 'No intersection',
                formula: '$|h| > r$',
                note: `Circle doesn't reach $y$-axis`,
              },
            ],
          },
          {
            type: 'text',
            content: 'The $y$-axis is the line $x = 0$. The distance from any point $(h, k)$ to the $y$-axis is $|h|$. A circle centered at $(h, k)$ with radius $r$ touches the $y$-axis at exactly one point when $|h| = r$.',
          },
          {
            type: 'keyInsight',
            content: 'The same logic applies to the $x$-axis: the distance from center $(h, k)$ to the $x$-axis is $|k|$. Tangent to the $x$-axis when $|k| = r$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting Absolute Value',
            wrong: 'Center is $(-5, 3)$. Student says distance to the $y$-axis is $-5$ and concludes no tangency is possible.',
            correction: 'Distance is always positive: $|{-5}| = 5$. So $r = 5$ for tangency to the $y$-axis.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'For what value of $r$ does $(x - 4)^2 + (y + 1)^2 = r^2$ intersect the $y$-axis at exactly one point?',
            steps: [
              {
                label: 'Center',
                content: '$(4, -1)$',
              },
              {
                label: 'Distance to $y$-axis',
                content: '$|4| = 4$',
              },
              {
                label: 'Tangency condition',
                content: '$r = 4$',
              },
              {
                label: 'Verify',
                content: 'Set $x = 0$: $(0-4)^2 + (y+1)^2 = 16 \\Rightarrow 16 + (y+1)^2 = 16 \\Rightarrow y = -1$. One point: $(0, -1)$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'For what value of $r$ does $(x - 4)^2 + (y + 1)^2 = r^2$ intersect the $y$-axis at exactly one point?',
            answer: 'Set $x = 0$: $(0-4)^2 + (y+1)^2 = 16 \\Rightarrow 16 + (y+1)^2 = 16 \\Rightarrow y = -1$. One point: $(0, -1)$.',
          },
        ],
      },
    },
  },

  24: {
    moduleId: 'circles',
    title: 'Intersecting Y-Axis at One Point (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Use DESMOS to visually verify axis tangency — graph the circle equation and observe the intersection.',
        blocks: [
          {
            type: 'formula',
            label: 'Tangency Condition',
            content: '$$|h| = r \\;\\Longleftrightarrow\\; \\text{circle tangent to } y\\text{-axis}$$',
          },
          {
            type: 'text',
            content: 'DESMOS can graph circle equations directly. Type the equation (e.g., $(x - 4)^2 + (y + 1)^2 = 16$) and observe where the circle meets the $y$-axis. If it touches at exactly one point, the circle is tangent.',
          },
          {
            type: 'keyInsight',
            content: 'On the Digital SAT, DESMOS is built into the testing platform. Graphing the circle and visually checking axis intersections is a fast verification strategy when the algebra feels uncertain.',
          },
          {
            type: 'trapCard',
            title: 'Misreading the Graph Scale',
            wrong: 'Student sees the circle appear to touch the $y$-axis but the zoom is too coarse — it actually crosses at two nearby points.',
            correction: 'Zoom in near the intersection. True tangency shows the circle touching the axis and immediately curving away. Two intersections reveal a visible gap when zoomed in.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Use DESMOS to verify whether $(x - 5)^2 + (y - 3)^2 = 25$ is tangent to the $y$-axis.',
            steps: [
              {
                label: 'Graph it',
                content: 'Enter $(x - 5)^2 + (y - 3)^2 = 25$ into DESMOS.',
              },
              {
                label: 'Observe',
                content: 'The circle touches the $y$-axis at exactly one point: $(0, 3)$.',
              },
              {
                label: 'Verify algebraically',
                content: 'Center $(5, 3)$, $r = 5$. Distance to $y$-axis $= |5| = 5 = r$. Tangent confirmed.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Use DESMOS to verify whether $(x - 5)^2 + (y - 3)^2 = 25$ is tangent to the $y$-axis.',
            answer: 'Center $(5, 3)$, $r = 5$. Distance to $y$-axis $= |5| = 5 = r$. Tangent confirmed.',
          },
        ],
      },
    },
  },

  25: {
    moduleId: 'circles',
    title: 'Completing the Square for Circles',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When a circle equation is given in expanded (general) form, completing the square converts it to standard form so you can read the center and radius.',
        blocks: [
          {
            type: 'formula',
            label: 'The Key Move',
            content: '$$x^2 + Bx \\;\\longrightarrow\\; \\left(x + \\frac{B}{2}\\right)^2 - \\left(\\frac{B}{2}\\right)^2$$',
          },
          {
            type: 'text',
            content: 'The **general form** of a circle is $x^2 + y^2 + Dx + Ey + F = 0$. It hides the center and radius. **Completing the square** on both $x$ and $y$ terms converts it to $(x - h)^2 + (y - k)^2 = r^2$.',
          },
          {
            type: 'keyInsight',
            content: 'Completing the square for a circle uses the same technique as for quadratics — but applied **twice** (once for $x$, once for $y$). Whatever value you add to one side, you **must** add to the other.',
          },
          {
            type: 'trapCard',
            title: 'Adding to One Side Only',
            wrong: 'Student adds $9$ to the left to complete $x^2 - 6x + 9$ but forgets to add $9$ to the right side.',
            correction: 'Both sides must change by the same amount. If you add $9$ for the $x$-group and $25$ for the $y$-group, the right side increases by $9 + 25 = 34$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Write $x^2 + y^2 - 6x + 10y + 18 = 0$ in standard form. Find the center and radius.',
            steps: [
              {
                label: 'Group & move constant',
                content: '$(x^2 - 6x) + (y^2 + 10y) = -18$',
              },
              {
                label: 'Complete square for $x$',
                content: 'Half of $-6$ is $-3$; $(-3)^2 = 9$. Add $9$ to both sides:\n$(x^2 - 6x + 9) + (y^2 + 10y) = -18 + 9$',
              },
              {
                label: 'Complete square for $y$',
                content: 'Half of $10$ is $5$; $5^2 = 25$. Add $25$ to both sides:\n$(x^2 - 6x + 9) + (y^2 + 10y + 25) = -18 + 9 + 25$',
              },
              {
                label: 'Factor',
                content: '$(x - 3)^2 + (y + 5)^2 = 16$',
              },
              {
                label: 'Read off',
                content: 'Center $= (3, -5)$, radius $= \\sqrt{16} = 4$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Convert $x^2 + y^2 + 8x - 2y - 8 = 0$ to standard form and find the radius.',
            answer: '$(x^2 + 8x + 16) + (y^2 - 2y + 1) = 8 + 16 + 1 = 25$. $(x + 4)^2 + (y - 1)^2 = 25$. Radius $= 5$.',
          },
        ],
      },
    },
  },

  26: {
    moduleId: 'circles',
    title: 'Deriving Standard Form to Determine Radius #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Complete the square on a general-form circle equation to convert it to standard form and extract the radius.',
        blocks: [
          {
            type: 'formula',
            label: 'General to Standard',
            content: '$$x^2 + y^2 + Dx + Ey + F = 0 \\;\\longrightarrow\\; (x - h)^2 + (y - k)^2 = r^2$$',
          },
          {
            type: 'keyInsight',
            content: 'When the coefficients of $x^2$ and $y^2$ are both $1$, the radius shortcut is $r = \\sqrt{\\left(\\frac{D}{2}\\right)^2 + \\left(\\frac{E}{2}\\right)^2 - F}$. This bypasses the full completing-the-square process.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Add to Both Sides',
            wrong: 'Student adds $16$ for the $x$-group and $1$ for the $y$-group on the left, but right side stays at $8$ instead of $8 + 16 + 1 = 25$.',
            correction: 'Track every addition: if you add $a$ for $x$ and $b$ for $y$, the right side becomes $-F + a + b$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the radius of the circle $x^2 + y^2 + 8x - 2y - 8 = 0$.',
            steps: [
              {
                label: 'Group',
                content: '$(x^2 + 8x) + (y^2 - 2y) = 8$',
              },
              {
                label: 'Complete $x$',
                content: '$\\left(\\frac{8}{2}\\right)^2 = 16$. Add to both sides: $(x^2 + 8x + 16) + (y^2 - 2y) = 24$',
              },
              {
                label: 'Complete $y$',
                content: '$\\left(\\frac{-2}{2}\\right)^2 = 1$. Add to both sides: $(x + 4)^2 + (y^2 - 2y + 1) = 25$',
              },
              {
                label: 'Factor',
                content: '$(x + 4)^2 + (y - 1)^2 = 25$',
              },
              {
                label: 'Radius',
                content: '$r = \\sqrt{25} = 5$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the radius of the circle $x^2 + y^2 + 8x - 2y - 8 = 0$.',
            answer: '$r = \\sqrt{25} = 5$',
          },
        ],
      },
    },
  },

  27: {
    moduleId: 'circles',
    title: 'Deriving Standard Form — Radius #1 (DESMOS)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Use DESMOS to verify your algebraic conversion from general form to standard form and confirm the radius visually.',
        blocks: [
          {
            type: 'formula',
            label: 'General Form',
            content: '$$x^2 + y^2 + Dx + Ey + F = 0$$',
            note: 'Graph this directly in DESMOS to see the circle without completing the square.',
          },
          {
            type: 'text',
            content: 'After completing the square algebraically, enter both the original general-form equation and the standard-form result into DESMOS. If they produce the same graph, the conversion is correct.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS can graph implicit equations like $x^2 + y^2 + 8x - 2y - 8 = 0$ directly. Graphing the standard form alongside it confirms they overlap perfectly.',
          },
          {
            type: 'trapCard',
            title: 'Typo in DESMOS Entry',
            wrong: 'Student types $x^2 + y^2 + 8x - 2y - 8$ without "$= 0$" and DESMOS returns an error or blank graph.',
            correction: 'DESMOS needs a full equation: type $x^2 + y^2 + 8x - 2y - 8 = 0$ or move terms so one side equals a number.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Verify that $x^2 + y^2 + 8x - 2y - 8 = 0$ converts to $(x + 4)^2 + (y - 1)^2 = 25$ using DESMOS.',
            steps: [
              {
                label: 'Line 1',
                content: 'Type: $x^2 + y^2 + 8x - 2y - 8 = 0$',
              },
              {
                label: 'Line 2',
                content: 'Type: $(x + 4)^2 + (y - 1)^2 = 25$',
              },
              {
                label: 'Observe',
                content: 'Both produce the same circle centered at $(-4, 1)$ with radius $5$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Verify that $x^2 + y^2 + 8x - 2y - 8 = 0$ converts to $(x + 4)^2 + (y - 1)^2 = 25$ using DESMOS.',
            answer: 'Both produce the same circle centered at $(-4, 1)$ with radius $5$.',
          },
        ],
      },
    },
  },

  28: {
    moduleId: 'circles',
    title: 'Deriving Standard Form — Center #1 (DESMOS)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Find the center of a circle in general form using the shortcut $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$, then verify with DESMOS.',
        blocks: [
          {
            type: 'formula',
            label: 'Center Shortcut',
            content: '$$\\text{Center} = \\left(-\\frac{D}{2},\\; -\\frac{E}{2}\\right)$$',
          },
          {
            type: 'text',
            content: 'For $x^2 + y^2 + Dx + Ey + F = 0$, the center is $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$. This shortcut extracts the center without fully completing the square.',
          },
          {
            type: 'keyInsight',
            content: 'The center coordinates are always $-\\frac{1}{2}$ of the linear coefficients. For $x^2 + 8x$: $h = -\\frac{8}{2} = -4$. For $y^2 - 2y$: $k = -\\frac{-2}{2} = 1$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the Negative Sign',
            wrong: '$x^2 + y^2 + 6x - 4y + 4 = 0$. Student says center is $(3, -2)$ instead of $(-3, 2)$.',
            correction: 'Center $= \\left(-\\frac{6}{2}, -\\frac{-4}{2}\\right) = (-3, 2)$. The formula uses $-\\frac{D}{2}$, not $\\frac{D}{2}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the center of $x^2 + y^2 - 10x + 4y + 13 = 0$.',
            steps: [
              {
                label: 'Identify coefficients',
                content: '$D = -10$, $E = 4$',
              },
              {
                label: 'Center shortcut',
                content: '$\\left(-\\frac{-10}{2}, -\\frac{4}{2}\\right) = (5, -2)$',
              },
              {
                label: 'Verify (optional)',
                content: 'Graph in DESMOS: the circle is centered at $(5, -2)$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the center of $x^2 + y^2 - 10x + 4y + 13 = 0$.',
            answer: 'Graph in DESMOS: the circle is centered at $(5, -2)$.',
          },
        ],
      },
    },
  },

  29: {
    moduleId: 'circles',
    title: 'Deriving Standard Form to Determine Radius #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A second completing-the-square example with coefficients that produce non-perfect-square radii.',
        blocks: [
          {
            type: 'formula',
            label: 'Radical Simplification',
            content: '$$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$$',
            note: 'Pull out perfect-square factors: $\\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}$.',
          },
          {
            type: 'text',
            content: 'Sometimes completing the square yields $r^2$ that is not a perfect square. The radius is then an irrational number like $\\sqrt{20} = 2\\sqrt{5}$.',
          },
          {
            type: 'keyInsight',
            content: 'If $r^2$ is not a perfect square, simplify the radical: $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$. Pull out perfect-square factors. The SAT may offer $\\sqrt{20}$ and $2\\sqrt{5}$ as different answer choices — they are equivalent.',
          },
          {
            type: 'trapCard',
            title: 'Not Simplifying the Radical',
            wrong: 'Student writes $r = \\sqrt{20}$ but the answer choice is $2\\sqrt{5}$, so the student marks "none of the above."',
            correction: '$\\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}$. Always simplify radicals to match answer choices.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Find the radius of $x^2 + y^2 - 2x + 6y - 10 = 0$.',
            steps: [
              {
                label: 'Group',
                content: '$(x^2 - 2x) + (y^2 + 6y) = 10$',
              },
              {
                label: 'Complete $x$',
                content: '$\\left(\\frac{-2}{2}\\right)^2 = 1$. Add to both sides: $(x^2 - 2x + 1) + (y^2 + 6y) = 11$',
              },
              {
                label: 'Complete $y$',
                content: '$\\left(\\frac{6}{2}\\right)^2 = 9$. Add to both sides: $(x - 1)^2 + (y + 3)^2 = 20$',
              },
              {
                label: 'Radius',
                content: '$r = \\sqrt{20} = 2\\sqrt{5}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the radius of $x^2 + y^2 - 2x + 6y - 10 = 0$.',
            answer: '$r = \\sqrt{20} = 2\\sqrt{5}$',
          },
        ],
      },
    },
  },

  30: {
    moduleId: 'circles',
    title: 'Deriving Standard Form — Radius #2 (DESMOS)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Verify the radius found by completing the square using DESMOS — especially useful when the radius involves a radical.',
        blocks: [
          {
            type: 'formula',
            label: 'Radius from General Form',
            content: '$$r = \\sqrt{\\left(\\frac{D}{2}\\right)^2 + \\left(\\frac{E}{2}\\right)^2 - F}$$',
          },
          {
            type: 'text',
            content: 'When completing the square yields a non-integer radius (like $r = 2\\sqrt{5} \\approx 4.47$), DESMOS provides visual confirmation. The plotted circle should have a diameter matching $2r$.',
          },
          {
            type: 'keyInsight',
            content: 'In DESMOS, measure the diameter by noting the leftmost and rightmost points of the circle. The distance between them is $2r$, which can be compared to the algebraic answer.',
          },
          {
            type: 'trapCard',
            title: 'Rounding Errors',
            wrong: 'DESMOS shows radius $\\approx 4.47$. Student rounds to $4.5$ and selects $r = \\frac{9}{2}$ instead of $r = 2\\sqrt{5}$.',
            correction: '$2\\sqrt{5} \\approx 4.472$, not $4.5$. Match the exact form: $r = 2\\sqrt{5}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Verify that the radius of $x^2 + y^2 - 2x + 6y - 10 = 0$ is $2\\sqrt{5}$ using DESMOS.',
            steps: [
              {
                label: 'Graph',
                content: 'Enter $x^2 + y^2 - 2x + 6y - 10 = 0$ in DESMOS.',
              },
              {
                label: 'Center',
                content: 'The circle is centered at approximately $(1, -3)$.',
              },
              {
                label: 'Check radius',
                content: 'Rightmost point at $x \\approx 5.47$. So $r \\approx 5.47 - 1 = 4.47 \\approx 2\\sqrt{5}$. Confirmed.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Verify that the radius of $x^2 + y^2 - 2x + 6y - 10 = 0$ is $2\\sqrt{5}$ using DESMOS.',
            answer: 'Rightmost point at $x \\approx 5.47$. So $r \\approx 5.47 - 1 = 4.47 \\approx 2\\sqrt{5}$. Confirmed.',
          },
        ],
      },
    },
  },

  31: {
    moduleId: 'circles',
    title: 'Deriving Standard Form — Center #2 (DESMOS)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A second DESMOS-assisted example: convert a general form equation, find the center, and verify graphically.',
        blocks: [
          {
            type: 'formula',
            label: 'General-Form Shortcuts',
            content: '$$\\text{Center} = \\left(-\\frac{D}{2},\\; -\\frac{E}{2}\\right), \\quad r = \\sqrt{\\left(\\frac{D}{2}\\right)^2 + \\left(\\frac{E}{2}\\right)^2 - F}$$',
          },
          {
            type: 'text',
            content: 'For $x^2 + y^2 + Dx + Ey + F = 0$: center $= \\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$ and $r = \\sqrt{\\left(\\frac{D}{2}\\right)^2 + \\left(\\frac{E}{2}\\right)^2 - F}$. These shortcut formulas save significant time on the Digital SAT.',
          },
          {
            type: 'keyInsight',
            content: 'The shortcut gives both center and radius from the general form coefficients. DESMOS confirms the result visually, catching any sign or arithmetic errors.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error in Shortcut',
            wrong: '$x^2 + y^2 - 14x + 8y + 1 = 0$. Student says center $= (-7, 4)$ instead of $(7, -4)$.',
            correction: '$D = -14$, $E = 8$. Center $= \\left(-\\frac{-14}{2}, -\\frac{8}{2}\\right) = (7, -4)$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the center of $x^2 + y^2 - 14x + 8y + 1 = 0$ and verify with DESMOS.',
            steps: [
              {
                label: 'Shortcut',
                content: '$D = -14$, $E = 8$. Center $= \\left(-\\frac{-14}{2}, -\\frac{8}{2}\\right) = (7, -4)$',
              },
              {
                label: 'Full verification',
                content: '$(x^2 - 14x + 49) + (y^2 + 8y + 16) = -1 + 49 + 16 = 64$. $(x - 7)^2 + (y + 4)^2 = 64$. Center $(7, -4)$.',
              },
              {
                label: 'DESMOS',
                content: 'Graph confirms center at $(7, -4)$, radius $= 8$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the center of $x^2 + y^2 - 14x + 8y + 1 = 0$ and verify with DESMOS.',
            answer: 'Graph confirms center at $(7, -4)$, radius $= 8$.',
          },
        ],
      },
    },
  },

  32: {
    moduleId: 'circles',
    title: 'Tangent Lines to a Circle',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A tangent line touches a circle at exactly one point and is always perpendicular to the radius at that point.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Perpendicularity',
                formula: '$\\text{radius} \\perp \\text{tangent}$',
                note: 'Right angle at tangent point',
              },
              {
                label: 'Tangent slope',
                formula: '$m_t = -\\frac{1}{m_r}$',
                note: 'Negative reciprocal of radius slope',
              },
              {
                label: 'Tangent segment',
                formula: '$t = \\sqrt{d^2 - r^2}$',
                note: 'From external point to tangent point',
              },
            ],
          },
          {
            type: 'text',
            content: 'A **tangent line** to a circle intersects the circle at exactly **one point**, called the **point of tangency**. The radius drawn to the point of tangency is **perpendicular** to the tangent line, creating a $90°$ angle.',
          },
          {
            type: 'keyInsight',
            content: 'The perpendicularity of radius and tangent creates a **right triangle** (radius, tangent segment, line from center to external point). The Pythagorean theorem connects all three: $t^2 + r^2 = d^2$.',
          },
          {
            type: 'trapCard',
            title: 'Right Angle at Wrong Point',
            wrong: 'Student assumes the right angle is at the external point $P$, writing $OP^2 + PT^2 = OT^2$ with hypotenuse $OT$.',
            correction: 'The $90°$ angle is at the **point of tangency** $T$. The hypotenuse is $OP$ (center to external point): $OT^2 + PT^2 = OP^2$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A circle has center $O$ and radius $5$. Point $P$ is $13$ units from $O$. A tangent from $P$ touches the circle at $T$. Find $PT$.',
            steps: [
              {
                label: 'Set up',
                content: '$OT \\perp PT$ (radius $\\perp$ tangent), so $\\triangle OTP$ is a right triangle.',
              },
              {
                label: 'Known sides',
                content: '$OT = 5$ (radius), $OP = 13$ (given)',
              },
              {
                label: 'Pythagorean theorem',
                content: '$PT^2 + 25 = 169 \\Rightarrow PT^2 = 144$',
              },
              {
                label: 'Answer',
                content: '$PT = 12$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the tangent line to $x^2 + y^2 = 100$ at the point $(6, 8)$.',
            answer: 'Center $(0,0)$. Radius slope $= \\frac{8}{6} = \\frac{4}{3}$. Tangent slope $= -\\frac{3}{4}$. Equation: $y - 8 = -\\frac{3}{4}(x - 6)$, simplifying to $y = -\\frac{3}{4}x + \\frac{25}{2}$.',
          },
        ],
      },
    },
  },

  33: {
    moduleId: 'circles',
    title: 'Tangent Line to a Circle Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A full tangent-line example: find the equation of a tangent to a circle at a given point using the perpendicularity property.',
        blocks: [
          {
            type: 'formula',
            label: 'Tangent Line via Point-Slope',
            content: '$$y - y_0 = m_t(x - x_0), \\quad m_t = -\\frac{1}{m_r}$$',
            note: '$m_r$ = radius slope from center to tangent point; $(x_0, y_0)$ = point of tangency.',
          },
          {
            type: 'text',
            content: 'To write the equation of a tangent line, two things are needed: the **point of tangency** (given) and the **slope** (derived from the radius slope via negative reciprocal).',
          },
          {
            type: 'keyInsight',
            content: 'The tangent line is perpendicular to the radius at the point of tangency. This gives the slope. Combined with the tangent point, point-slope form $y - y_0 = m_t(x - x_0)$ completes the equation.',
          },
          {
            type: 'trapCard',
            title: 'Using Radius Slope as Tangent Slope',
            wrong: 'Radius slope from center $(2, -1)$ to point $(7, 4)$ is $1$. Student writes tangent $y - 4 = 1(x - 7)$.',
            correction: 'The tangent is perpendicular to the radius. Tangent slope $= -\\frac{1}{1} = -1$. Correct: $y - 4 = -1(x - 7)$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Find the equation of the tangent line to $(x - 2)^2 + (y + 1)^2 = 50$ at the point $(7, 4)$.',
            steps: [
              {
                label: 'Center',
                content: '$(2, -1)$',
              },
              {
                label: 'Radius slope',
                content: '$m_r = \\frac{4 - (-1)}{7 - 2} = \\frac{5}{5} = 1$',
              },
              {
                label: 'Tangent slope',
                content: '$m_t = -\\frac{1}{1} = -1$',
              },
              {
                label: 'Point-slope form',
                content: '$y - 4 = -1(x - 7)$',
              },
              {
                label: 'Simplify',
                content: '$y = -x + 11$',
              },
              {
                label: 'Verify point on circle',
                content: '$(7-2)^2 + (4+1)^2 = 25 + 25 = 50$ ✓',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the equation of the tangent line to $(x - 2)^2 + (y + 1)^2 = 50$ at the point $(7, 4)$.',
            answer: '$(7-2)^2 + (4+1)^2 = 25 + 25 = 50$ ✓',
          },
        ],
      },
    },
  },
};
