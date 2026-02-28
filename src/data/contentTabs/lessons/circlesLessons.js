export const circlesLessonTabs = {

  // ─── CIRCLE FUNDAMENTALS ──────────────────────────────────────────

  1: {
    moduleId: 'circles',
    title: 'Parts of a Circle',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A circle is defined by its center and radius. Every other part — diameter, chord, arc, sector, tangent — builds on these two ideas.',
        blocks: [
          {
            type: 'text',
            content: 'A **circle** is the set of all points in a plane that are exactly the same distance from a fixed point called the **center**. That distance is the **radius** ($r$).',
          },
          {
            type: 'table',
            title: 'Essential Circle Vocabulary',
            headers: ['Term', 'Definition', 'Key Fact'],
            rows: [
              ['**Radius**', 'Segment from center to any point on the circle', 'All radii of a circle are equal'],
              ['**Diameter**', 'Segment through the center connecting two points on the circle', '$d = 2r$'],
              ['**Chord**', 'Segment connecting any two points on the circle', 'The diameter is the longest possible chord'],
              ['**Arc**', 'A portion of the circle\'s circumference', 'Measured in degrees or length'],
              ['**Sector**', 'The "pie-slice" region between two radii and an arc', 'Measured as a fraction of total area'],
              ['**Tangent**', 'A line touching the circle at exactly one point', 'Perpendicular to the radius at the point of tangency'],
              ['**Central Angle**', 'Angle formed at the center by two radii', 'Equal in degrees to its intercepted arc'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'Almost every circle formula on the SAT involves the radius $r$. If a problem gives you the diameter, **divide by 2 first**. If it gives circumference or area, **solve for $r$ first**, then answer the actual question.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'First Move: Confirm $r$ vs. $d$',
            content: 'Recognition cue: any circle problem where a measurement is given. Before plugging into any formula, ask: "Is this the radius or the diameter?" The SAT buries the word "diameter" in the middle of a sentence.',
          },
          {
            type: 'trapCard',
            title: 'Using Diameter as Radius',
            wrong: '"A circle has a diameter of $10$." Student plugs $10$ into $A = \\pi r^2$ and gets $100\\pi$.',
            correction: 'The radius is $\\frac{10}{2} = 5$. The area is $\\pi(5)^2 = 25\\pi$. Using $d$ as $r$ gives an answer exactly $4\\times$ too large.',
          },
          {
            type: 'tip',
            content: 'Every circle formula on the SAT reference sheet uses $r$. For area, sector area, and arc length — always convert to $r$ first. The only formula using $d$ directly is $C = \\pi d$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Reading a Circle Problem',
            items: [
              'Identify what measurement is given: radius, diameter, circumference, or area.',
              'If given diameter, divide by $2$ to get radius. If given circumference, solve $C = 2\\pi r$ for $r$. If given area, solve $A = \\pi r^2$ for $r$.',
              'Identify what the question asks: length (circumference, arc length), area (full circle, sector), or a coordinate geometry property (center, equation).',
              'Apply the correct formula using $r$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Confusing Arc and Chord',
            wrong: 'Student treats a chord length as if it were an arc length.',
            correction: 'A **chord** is a straight-line segment inside the circle. An **arc** is the curved portion of the circumference between two points. Arc length $>$ chord length for the same two endpoints (except for a diameter/semicircle where the chord passes through the center).',
          },
          {
            type: 'trapCard',
            title: 'Forgetting $d = 2r$',
            wrong: '"The radius is $8$." Student writes diameter $= 8$ in their solution.',
            correction: 'Diameter is always $2 \\times$ radius. If $r = 8$, then $d = 16$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A circle has a diameter of $14$. A central angle of $90°$ intercepts an arc. Find the arc length and the area of the corresponding sector.',
            steps: [
              { label: 'Find radius', content: '$r = \\frac{14}{2} = 7$' },
              { label: 'Fraction of circle', content: '$\\frac{90}{360} = \\frac{1}{4}$' },
              { label: 'Arc length', content: '$\\frac{1}{4} \\times 2\\pi(7) = \\frac{14\\pi}{4} = \\frac{7\\pi}{2}$' },
              { label: 'Sector area', content: '$\\frac{1}{4} \\times \\pi(7)^2 = \\frac{49\\pi}{4}$' },
            ],
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'circles',
    title: 'Area of a Circle',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The area of a circle depends only on its radius — square the radius, multiply by $\\pi$.',
        blocks: [
          {
            type: 'formula',
            label: 'Circle Area',
            content: '$$A = \\pi r^2$$',
          },
          {
            type: 'text',
            content: 'The area measures the space **inside** the circle. Since $r$ is squared, doubling the radius **quadruples** the area. This scaling property is a frequent SAT test point.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Diameter Given?',
            content: 'If the problem gives diameter $d$, convert first: $r = \\frac{d}{2}$. Then $A = \\pi \\left(\\frac{d}{2}\\right)^2 = \\frac{\\pi d^2}{4}$.',
          },
          {
            type: 'keyInsight',
            content: 'Scaling rule: if the radius is multiplied by $k$, the area is multiplied by $k^2$. Double the radius ($k = 2$) and the area quadruples ($2^2 = 4$). Triple the radius ($k = 3$) and the area increases $9$ times.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Scaling: Radius $\\times k$ implies Area $\\times k^2$',
            content: 'Recognition cue: "the radius is doubled/tripled" or "compare areas of two circles." First move: don\'t recalculate both areas — use the scaling rule directly.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Square the Radius',
            wrong: '$r = 6$. Student writes $A = \\pi(6) = 6\\pi$.',
            correction: 'Area requires $r^{\\mathbf{2}}$: $A = \\pi(6)^2 = 36\\pi$. Always square the radius before multiplying by $\\pi$.',
          },
          {
            type: 'tip',
            content: '**Decision rule:** Area given, radius asked: $r = \\sqrt{\\frac{A}{\\pi}}$. Radius given, area asked: $A = \\pi r^2$. Diameter given: halve first, then square. Circumference given: find $r = \\frac{C}{2\\pi}$, then compute area.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing Circle Area',
            items: [
              'Identify whether the given value is $r$, $d$, or $C$.',
              'Convert to $r$ if needed: $r = \\frac{d}{2}$ or $r = \\frac{C}{2\\pi}$.',
              'Square the radius: $r^2$.',
              'Multiply by $\\pi$: $A = \\pi r^2$.',
              'Leave in terms of $\\pi$ unless the question requests a decimal.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Using Diameter in $\\pi r^2$',
            wrong: 'Diameter $= 10$. Student computes $A = \\pi(10)^2 = 100\\pi$.',
            correction: 'Radius is $5$, not $10$. Correct area: $A = \\pi(5)^2 = 25\\pi$. Using $d$ instead of $r$ inflates the answer by a factor of $4$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Square',
            wrong: 'Student writes $A = \\pi(6) = 6\\pi$ instead of $\\pi(6)^2 = 36\\pi$.',
            correction: 'The formula is $\\pi r^2$, not $\\pi r$. The exponent $2$ is essential.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Circle A has radius $3$ and Circle B has radius $9$. How many times greater is the area of Circle B?',
            steps: [
              { label: 'Areas', content: '$A_A = \\pi(3)^2 = 9\\pi$, $A_B = \\pi(9)^2 = 81\\pi$' },
              { label: 'Ratio', content: '$\\frac{81\\pi}{9\\pi} = 9$ times greater' },
              { label: 'Shortcut', content: 'Radius tripled ($\\times 3$), so area increases by $3^2 = 9$.' },
            ],
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'circles',
    title: 'Circumference of a Circle',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Circumference is the distance around a circle — think of it as the circle\'s perimeter.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'Using radius', formula: '$C = 2\\pi r$', note: 'Multiply radius by $2\\pi$' },
              { label: 'Using diameter', formula: '$C = \\pi d$', note: 'Multiply diameter by $\\pi$' },
            ],
          },
          {
            type: 'text',
            content: 'Unlike area, circumference scales **linearly** with the radius. Double the radius and the circumference doubles.',
          },
          {
            type: 'keyInsight',
            content: 'The number $\\pi$ is literally defined as the ratio $\\frac{C}{d}$ — circumference divided by diameter. That\'s why $C = \\pi d$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Wheel/Rotation Problems',
            content: 'Recognition cue: "how far does a wheel travel" or "how many rotations." One full rotation $=$ one circumference $= 2\\pi r$. Total distance $= n \\times 2\\pi r$. Number of rotations $= \\frac{\\text{distance}}{2\\pi r}$.',
          },
          {
            type: 'trapCard',
            title: 'Circumference-to-Area Pipeline Error',
            wrong: '"Circumference is $20\\pi$." Student writes $A = \\pi(20)^2 = 400\\pi$.',
            correction: 'If $C = 20\\pi$, then $2\\pi r = 20\\pi$, so $r = 10$. Area $= \\pi(10)^2 = 100\\pi$. Solve for $r$ first, then use $r$ in the area formula.',
          },
          {
            type: 'tip',
            content: 'Circumference scales linearly ($\\times k$ radius produces $\\times k$ circumference). Area scales quadratically ($\\times k$ radius produces $\\times k^2$ area). If the radius triples, circumference triples but area increases $9\\times$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding Circumference or Solving for Radius',
            items: [
              'Determine whether the given value is $r$, $d$, or $A$.',
              'If $d$ is given: $C = \\pi d$. If $r$ is given: $C = 2\\pi r$.',
              'If area is given and circumference is asked: solve $A = \\pi r^2$ for $r = \\sqrt{\\frac{A}{\\pi}}$, then compute $C = 2\\pi r$.',
              'If circumference is given and radius is asked: $r = \\frac{C}{2\\pi}$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Mixing Up $2\\pi r$ and $\\pi r^2$',
            wrong: 'Student writes circumference $= \\pi r^2$ (the area formula).',
            correction: 'Circumference $= 2\\pi r$ (linear in $r$). Area $= \\pi r^2$ (quadratic in $r$). Circumference is a length; area is in square units.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A wheel has a circumference of $24\\pi$ inches. What is the area of the circle?',
            steps: [
              { label: 'Solve for $r$', content: '$24\\pi = 2\\pi r \\Rightarrow r = 12$' },
              { label: 'Compute area', content: '$A = \\pi(12)^2 = 144\\pi$ square inches' },
            ],
          },
        ],
      },
    },
  },

  // ─── AREA PROBLEMS (VIDEOS) ───────────────────────────────────────

  4: {
    moduleId: 'circles',
    title: 'Simple Circle Area Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A straightforward circle area problem: given a measurement, find the area using $A = \\pi r^2$.',
        blocks: [
          {
            type: 'formula',
            label: 'Circle Area',
            content: '$$A = \\pi r^2$$',
          },
          {
            type: 'text',
            content: 'Simple area problems give you the radius (or diameter) directly and ask for the area. The key step is ensuring you use the radius, not the diameter, in the formula.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Direct Application',
            content: 'Recognition cue: a circle with a stated radius or diameter and the question asks for "the area." First move: confirm the value is $r$, plug into $A = \\pi r^2$.',
          },
          {
            type: 'trapCard',
            title: 'Diameter vs. Radius',
            wrong: '"The diameter of a circular patio is $12$ feet." Student computes $A = \\pi(12)^2 = 144\\pi$.',
            correction: '$r = \\frac{12}{2} = 6$. Correct area: $A = \\pi(6)^2 = 36\\pi$ square feet.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving a Simple Area Problem',
            items: [
              'Read whether the given value is a radius or diameter.',
              'Convert to radius if necessary: $r = \\frac{d}{2}$.',
              'Plug into $A = \\pi r^2$ and simplify.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A circular garden has a diameter of $20$ feet. What is the area of the garden?',
            steps: [
              { label: 'Find radius', content: '$r = \\frac{20}{2} = 10$ feet' },
              { label: 'Apply formula', content: '$A = \\pi(10)^2 = 100\\pi \\approx 314.16$ square feet' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A circular pool has a radius of $7$ meters. What is its area?',
            answer: '$A = \\pi(7)^2 = 49\\pi \\approx 153.94$ square meters.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'circles',
    title: 'Complex Circle Area Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Multi-step area problems require you to extract the radius from another quantity (circumference, another area, or a geometric relationship) before computing area.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'Area', formula: '$A = \\pi r^2$', note: 'Target formula' },
              { label: 'Radius from circumference', formula: '$r = \\frac{C}{2\\pi}$', note: 'Solve $C = 2\\pi r$' },
              { label: 'Radius from area', formula: '$r = \\sqrt{\\frac{A}{\\pi}}$', note: 'Reverse the area formula' },
            ],
          },
          {
            type: 'text',
            content: 'Complex area problems on the SAT rarely give you the radius directly. You may need to derive it from the circumference, from a relationship between two circles, or from a geometric figure that contains the circle.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Multi-Step Area',
            content: 'Recognition cue: area is asked but only circumference, diameter, or a geometric relationship is given. First move: solve for $r$, then plug into $A = \\pi r^2$.',
          },
          {
            type: 'trapCard',
            title: 'Skipping the Radius Step',
            wrong: '"The circumference is $16\\pi$." Student writes $A = \\pi(16)^2 = 256\\pi$.',
            correction: '$C = 16\\pi \\Rightarrow 2\\pi r = 16\\pi \\Rightarrow r = 8$. Correct area: $A = \\pi(8)^2 = 64\\pi$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Multi-Step Circle Area',
            items: [
              'Identify what is given (circumference, diameter, another circle\'s area, etc.).',
              'Solve for the radius $r$ from that given value.',
              'Compute $A = \\pi r^2$.',
              'Check the answer choices — if they are in terms of $\\pi$, leave your answer that way.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Circle A has an area of $25\\pi$. Circle B has a radius that is $3$ times the radius of Circle A. What is the area of Circle B?',
            steps: [
              { label: 'Find $r_A$', content: '$\\pi r_A^2 = 25\\pi \\Rightarrow r_A = 5$' },
              { label: 'Find $r_B$', content: '$r_B = 3 \\times 5 = 15$' },
              { label: 'Area of B', content: '$A_B = \\pi(15)^2 = 225\\pi$' },
              { label: 'Shortcut check', content: 'Radius tripled, so area scales by $3^2 = 9$: $25\\pi \\times 9 = 225\\pi$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A circle has a circumference of $10\\pi$. What is its area?',
            answer: '$2\\pi r = 10\\pi \\Rightarrow r = 5$. Area $= \\pi(5)^2 = 25\\pi$.',
          },
        ],
      },
    },
  },

  // ─── CIRCUMFERENCE & ARC LENGTH ───────────────────────────────────

  6: {
    moduleId: 'circles',
    title: 'Arc Length',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Arc length is a fraction of the full circumference, determined by the central angle.',
        blocks: [
          {
            type: 'formula',
            label: 'Arc Length',
            content: '$$\\ell = \\frac{\\theta}{360} \\times 2\\pi r$$',
          },
          {
            type: 'text',
            content: 'An arc is a piece of the circle\'s edge. Its length is proportional to the central angle $\\theta$ that "opens up" to it. A $90°$ arc is $\\frac{1}{4}$ of the circumference; a $180°$ arc (semicircle) is half.',
          },
          {
            type: 'keyInsight',
            content: 'The fraction $\\frac{\\theta}{360}$ appears in both arc length and sector area. Master this fraction and you unlock both formulas instantly.',
          },
          {
            type: 'comparison',
            title: 'Arc Length vs. Sector Area',
            items: [
              { label: 'Arc Length', content: '$\\frac{\\theta}{360} \\times 2\\pi r$\n\nFraction of **circumference** (a length)' },
              { label: 'Sector Area', content: '$\\frac{\\theta}{360} \\times \\pi r^2$\n\nFraction of **area** (square units)' },
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
            title: 'The Fraction $\\frac{\\theta}{360}$ Drives Everything',
            content: 'Recognition cue: a central angle and a circle measurement. First move: compute $\\frac{\\theta}{360}$ — this fraction of the full circumference gives arc length, and the same fraction of the full area gives sector area.',
          },
          {
            type: 'trapCard',
            title: 'Using Area Formula for Length',
            wrong: 'Asked for arc length. Student computes $\\frac{\\theta}{360} \\times \\pi r^2$ (sector area formula).',
            correction: 'Arc **length** uses circumference ($2\\pi r$): $\\ell = \\frac{\\theta}{360} \\times 2\\pi r$. Sector **area** uses $\\pi r^2$. Check whether the question asks for a length or an area.',
          },
          {
            type: 'tip',
            content: 'Quick fraction shortcut: $90° = \\frac{1}{4}$, $60° = \\frac{1}{6}$, $120° = \\frac{1}{3}$, $45° = \\frac{1}{8}$. If $\\theta$ divides evenly into $360$, the fraction simplifies instantly.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding Arc Length',
            items: [
              'Identify the central angle $\\theta$ (in degrees).',
              'Find the radius $r$ (convert from diameter if needed).',
              'Compute: $\\ell = \\frac{\\theta}{360} \\times 2\\pi r$.',
              'Simplify — leave in terms of $\\pi$ unless told otherwise.',
            ],
          },
          {
            type: 'steps',
            title: 'Finding the Angle from Arc Length',
            items: [
              'Set up: $\\ell = \\frac{\\theta}{360} \\times 2\\pi r$.',
              'Solve for $\\theta$: $\\theta = \\frac{\\ell}{2\\pi r} \\times 360$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Confusing Arc Length and Sector Area',
            wrong: 'Student computes $\\frac{60}{360} \\times \\pi(10)^2 = \\frac{100\\pi}{6}$ when asked for arc length.',
            correction: 'Arc length: $\\frac{60}{360} \\times 2\\pi(10) = \\frac{20\\pi}{6} = \\frac{10\\pi}{3}$. The student used the area formula ($\\pi r^2$) instead of circumference ($2\\pi r$).',
          },
          {
            type: 'trapCard',
            title: 'Using Diameter for $r$',
            wrong: '"Diameter is $12$." Student writes $\\ell = \\frac{90}{360} \\times 2\\pi(12) = 6\\pi$.',
            correction: '$r = 6$. Arc length: $\\frac{1}{4} \\times 2\\pi(6) = 3\\pi$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A circle has radius $10$. What is the length of an arc intercepted by a $72°$ central angle?',
            steps: [
              { label: 'Fraction', content: '$\\frac{72}{360} = \\frac{1}{5}$' },
              { label: 'Circumference', content: '$2\\pi(10) = 20\\pi$' },
              { label: 'Arc length', content: '$\\frac{1}{5} \\times 20\\pi = 4\\pi$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'An arc of a circle with radius $15$ has length $5\\pi$. What is the central angle?',
            steps: [
              { label: 'Set up', content: '$5\\pi = \\frac{\\theta}{360} \\times 2\\pi(15) = \\frac{\\theta}{360} \\times 30\\pi$' },
              { label: 'Solve', content: '$\\frac{5\\pi}{30\\pi} = \\frac{\\theta}{360} \\Rightarrow \\frac{1}{6} = \\frac{\\theta}{360} \\Rightarrow \\theta = 60°$' },
            ],
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'circles',
    title: 'Simple Circumference Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A direct circumference problem: given radius or diameter, compute the distance around the circle.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'From radius', formula: '$C = 2\\pi r$', note: 'Most common on SAT' },
              { label: 'From diameter', formula: '$C = \\pi d$', note: 'Shortcut when $d$ is given' },
            ],
          },
          {
            type: 'text',
            content: 'Simple circumference problems test whether you can identify the correct input ($r$ vs. $d$) and apply the right formula. The SAT often phrases these as real-world perimeter questions (fencing, track distance, wire length).',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Perimeter Language',
            content: 'Recognition cue: "distance around," "how far around," "length of fencing needed." These all mean circumference.',
          },
          {
            type: 'trapCard',
            title: 'Using Area Formula Instead',
            wrong: '"Find the distance around a circular track with radius $50$ m." Student writes $\\pi(50)^2 = 2500\\pi$.',
            correction: '"Distance around" is circumference: $C = 2\\pi(50) = 100\\pi \\approx 314.16$ m.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing Circumference',
            items: [
              'Identify whether radius or diameter is given.',
              'Apply $C = 2\\pi r$ or $C = \\pi d$.',
              'Simplify; approximate if the answer choices are decimals.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A circular track has a diameter of $50$ meters. What is the distance around the track?',
            steps: [
              { label: 'Apply formula', content: '$C = \\pi d = 50\\pi \\approx 157.1$ meters' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A circular fountain has a radius of $8$ feet. How much decorative edging is needed to go around it once?',
            answer: '$C = 2\\pi(8) = 16\\pi \\approx 50.27$ feet.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'circles',
    title: 'Conceptual Arc Length Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Conceptual arc length problems test your understanding of the proportional relationship between arc length and central angle without heavy computation.',
        blocks: [
          {
            type: 'text',
            content: 'Arc length is directly proportional to the central angle. If you double the angle, you double the arc length. This proportional reasoning lets you solve many SAT problems without plugging into the formula at all.',
          },
          {
            type: 'keyInsight',
            content: 'Any arc is just a **fraction** of the full circumference. That fraction equals $\\frac{\\theta}{360}$. If you know one arc length and angle, you can find any other arc on the same circle by scaling.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Proportional Reasoning',
            content: 'Recognition cue: two arcs on the same circle are compared, or "what fraction of the circumference" is asked. First move: set up the ratio $\\frac{\\theta_1}{\\theta_2} = \\frac{\\ell_1}{\\ell_2}$.',
          },
          {
            type: 'trapCard',
            title: 'Treating Arc Length as the Angle',
            wrong: 'Student says "the arc is $60$" and uses $60$ as a length rather than recognizing it as a $60°$ angle.',
            correction: 'Angles are in degrees; arc length is a distance. A $60°$ arc on a circle with $r = 12$ has length $\\frac{60}{360} \\times 2\\pi(12) = 4\\pi$, not $60$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Proportional Arc Length',
            items: [
              'Find the fraction of the full circle: $\\frac{\\theta}{360}$.',
              'Multiply by the circumference: $\\ell = \\frac{\\theta}{360} \\times 2\\pi r$.',
              'Or use the ratio: if arc $\\ell_1$ corresponds to $\\theta_1$, and you need $\\ell_2$ for $\\theta_2$ on the same circle, then $\\ell_2 = \\ell_1 \\times \\frac{\\theta_2}{\\theta_1}$.',
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
            problem: 'On a circle, a $40°$ arc has length $6$. What is the length of a $100°$ arc on the same circle?',
            steps: [
              { label: 'Set up ratio', content: '$\\frac{\\ell_2}{6} = \\frac{100}{40}$' },
              { label: 'Solve', content: '$\\ell_2 = 6 \\times \\frac{100}{40} = 6 \\times 2.5 = 15$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A $90°$ arc on a circle has length $7\\pi$. What is the full circumference?',
            answer: '$90°$ is $\\frac{1}{4}$ of $360°$, so the full circumference is $4 \\times 7\\pi = 28\\pi$.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'circles',
    title: 'Calculating Arc Length Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A computational arc length problem requiring the full formula: find the fraction of the circumference using the central angle and radius.',
        blocks: [
          {
            type: 'formula',
            label: 'Arc Length',
            content: '$$\\ell = \\frac{\\theta}{360} \\times 2\\pi r$$',
          },
          {
            type: 'text',
            content: 'Calculation-based arc length problems give you specific numerical values for the angle and radius (or diameter) and require you to compute a precise answer. Keep results in terms of $\\pi$ unless a decimal is requested.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Exact vs. Approximate',
            content: 'Recognition cue: answer choices in terms of $\\pi$ (like $4\\pi$, $\\frac{10\\pi}{3}$) vs. decimals. If choices contain $\\pi$, leave your answer in $\\pi$-form. If decimals, multiply by $3.14$ or use $\\pi \\approx 3.14159$.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Formula Branch',
            wrong: 'Student computes $\\frac{\\theta}{360} \\times \\pi r^2$ (sector area) when asked for arc length.',
            correction: 'Arc **length** $= \\frac{\\theta}{360} \\times 2\\pi r$. Sector **area** $= \\frac{\\theta}{360} \\times \\pi r^2$. Length uses $2\\pi r$, area uses $\\pi r^2$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing Arc Length',
            items: [
              'Identify $\\theta$ (central angle in degrees) and $r$ (radius).',
              'If diameter is given, convert: $r = \\frac{d}{2}$.',
              'Plug into $\\ell = \\frac{\\theta}{360} \\times 2\\pi r$.',
              'Simplify the fraction $\\frac{\\theta}{360}$ first for cleaner arithmetic.',
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
            problem: 'A circle has a diameter of $18$. Find the length of an arc intercepted by a $120°$ central angle.',
            steps: [
              { label: 'Find radius', content: '$r = \\frac{18}{2} = 9$' },
              { label: 'Simplify fraction', content: '$\\frac{120}{360} = \\frac{1}{3}$' },
              { label: 'Circumference', content: '$2\\pi(9) = 18\\pi$' },
              { label: 'Arc length', content: '$\\frac{1}{3} \\times 18\\pi = 6\\pi$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A circle has radius $15$. What is the arc length for a $72°$ central angle?',
            answer: '$\\frac{72}{360} = \\frac{1}{5}$. Circumference $= 2\\pi(15) = 30\\pi$. Arc length $= \\frac{1}{5} \\times 30\\pi = 6\\pi$.',
          },
        ],
      },
    },
  },

  // ─── SECTOR AREA ──────────────────────────────────────────────────

  10: {
    moduleId: 'circles',
    title: 'Sector Area',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A sector is a "pizza slice" of the circle. Its area is the same fraction of the full area as the central angle is of $360°$.',
        blocks: [
          {
            type: 'formula',
            label: 'Sector Area',
            content: '$$A_{\\text{sector}} = \\frac{\\theta}{360} \\times \\pi r^2$$',
          },
          {
            type: 'text',
            content: 'The formula follows the same logic as arc length: take the full quantity (total area $\\pi r^2$) and multiply by the fraction $\\frac{\\theta}{360}$.',
          },
          {
            type: 'comparison',
            title: 'Arc Length vs. Sector Area',
            items: [
              { label: 'Arc Length', content: '$\\frac{\\theta}{360} \\times 2\\pi r$\n\nFraction of **circumference** (linear units)' },
              { label: 'Sector Area', content: '$\\frac{\\theta}{360} \\times \\pi r^2$\n\nFraction of **area** (square units)' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Both arc length and sector area use the same fraction $\\frac{\\theta}{360}$. The only difference is what you multiply it by: circumference ($2\\pi r$) for length, full area ($\\pi r^2$) for area.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Find the Area of the Shaded Region"',
            content: 'Recognition cue: a circle with a shaded sector or the unshaded complement. If the sector is shaded, use $A = \\frac{\\theta}{360} \\times \\pi r^2$. If the complement is shaded, compute $\\pi r^2 - \\frac{\\theta}{360} \\times \\pi r^2$.',
          },
          {
            type: 'trapCard',
            title: 'Using Circumference Instead of Area',
            wrong: 'Asked for sector area. Student writes $\\frac{60}{360} \\times 2\\pi(6) = 2\\pi$.',
            correction: 'That computes arc **length** ($2\\pi r$), not area ($\\pi r^2$). Sector area: $\\frac{60}{360} \\times \\pi(6)^2 = \\frac{1}{6} \\times 36\\pi = 6\\pi$.',
          },
          {
            type: 'tip',
            content: '**Arc length** has linear units (cm, in). **Sector area** has square units (cm$^2$, in$^2$). If the answer choices have square units, you need area. If they have linear units, you need arc length.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Computing Sector Area',
            items: [
              'Identify the central angle $\\theta$ in degrees.',
              'Identify the radius $r$ (convert from diameter if needed).',
              'Compute $\\frac{\\theta}{360}$ and simplify.',
              'Multiply by the full area: $\\frac{\\theta}{360} \\times \\pi r^2$.',
              'Simplify — leave in terms of $\\pi$ unless told otherwise.',
            ],
          },
          {
            type: 'steps',
            title: 'Finding Angle from Sector Area',
            items: [
              'Set up: $A_{\\text{sector}} = \\frac{\\theta}{360} \\times \\pi r^2$.',
              'Solve for $\\theta$: $\\theta = \\frac{A_{\\text{sector}}}{\\pi r^2} \\times 360$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Using Arc Length Formula for Area',
            wrong: 'Student computes $\\frac{\\theta}{360} \\times 2\\pi r$ when asked for area.',
            correction: 'Arc length uses $2\\pi r$ (circumference). Sector **area** uses $\\pi r^2$ (full area). Check what the question asks.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the Complement',
            wrong: 'Shaded region is everything **except** a $60°$ sector. Student computes $\\frac{60}{360} \\times \\pi r^2$.',
            correction: 'The shaded region is the complement: $\\pi r^2 - \\frac{60}{360} \\times \\pi r^2 = \\frac{300}{360} \\times \\pi r^2 = \\frac{5}{6} \\pi r^2$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the area of a sector with central angle $60°$ and radius $6$.',
            steps: [
              { label: 'Fraction', content: '$\\frac{60}{360} = \\frac{1}{6}$' },
              { label: 'Full area', content: '$\\pi(6)^2 = 36\\pi$' },
              { label: 'Sector area', content: '$\\frac{1}{6} \\times 36\\pi = 6\\pi$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A sprinkler waters a circular region of radius $20$ ft, but only covers a $150°$ sector. What area does it water?',
            steps: [
              { label: 'Fraction', content: '$\\frac{150}{360} = \\frac{5}{12}$' },
              { label: 'Full area', content: '$\\pi(20)^2 = 400\\pi$' },
              { label: 'Sector area', content: '$\\frac{5}{12} \\times 400\\pi = \\frac{500\\pi}{3} \\approx 523.6$ ft$^2$' },
            ],
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'circles',
    title: 'Simple Sector Area Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A straightforward sector area problem: given the central angle and radius, compute the sector\'s area directly.',
        blocks: [
          {
            type: 'formula',
            label: 'Sector Area',
            content: '$$A_{\\text{sector}} = \\frac{\\theta}{360} \\times \\pi r^2$$',
          },
          {
            type: 'text',
            content: 'Simple sector problems give you the angle and radius explicitly. The work is purely computational: simplify $\\frac{\\theta}{360}$, compute $\\pi r^2$, and multiply.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Direct Sector Area',
            content: 'Recognition cue: a sector with given angle and radius, asking for area. First move: simplify $\\frac{\\theta}{360}$, then multiply by $\\pi r^2$.',
          },
          {
            type: 'trapCard',
            title: 'Swapping Length and Area Formulas',
            wrong: 'Student computes $\\frac{90}{360} \\times 2\\pi(8) = 4\\pi$ when asked for the area of a sector.',
            correction: 'That is the arc **length**. Sector area: $\\frac{90}{360} \\times \\pi(8)^2 = \\frac{1}{4} \\times 64\\pi = 16\\pi$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Direct Sector Area Calculation',
            items: [
              'Simplify $\\frac{\\theta}{360}$ to a clean fraction.',
              'Compute $\\pi r^2$.',
              'Multiply: $A = \\frac{\\theta}{360} \\times \\pi r^2$.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A sector has a central angle of $90°$ and a radius of $8$. What is the sector\'s area?',
            steps: [
              { label: 'Fraction', content: '$\\frac{90}{360} = \\frac{1}{4}$' },
              { label: 'Full area', content: '$\\pi(8)^2 = 64\\pi$' },
              { label: 'Sector area', content: '$\\frac{1}{4} \\times 64\\pi = 16\\pi$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Find the area of a sector with central angle $120°$ and radius $9$.',
            answer: '$\\frac{120}{360} = \\frac{1}{3}$. Full area $= \\pi(9)^2 = 81\\pi$. Sector area $= \\frac{1}{3} \\times 81\\pi = 27\\pi$.',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'circles',
    title: 'Complex Sector Area Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Multi-step sector area problems where the radius or angle must be derived before applying $A = \\frac{\\theta}{360} \\times \\pi r^2$.',
        blocks: [
          {
            type: 'formula',
            label: 'Sector Area',
            content: '$$A_{\\text{sector}} = \\frac{\\theta}{360} \\times \\pi r^2$$',
          },
          {
            type: 'text',
            content: 'Complex sector problems add an extra layer: you may need to find the radius from circumference or area first, compute the angle from supplementary/complementary relationships, or find the area of a shaded region that is the **complement** of a sector.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Shaded Complement Regions',
            content: 'Recognition cue: "find the area of the shaded region" where the shaded part is the circle minus a sector. First move: compute the sector area, then subtract from the full area $\\pi r^2$.',
          },
          {
            type: 'trapCard',
            title: 'Computing the Sector Instead of Its Complement',
            wrong: '"The unshaded sector is $60°$. Find the shaded area." Student computes $\\frac{60}{360} \\times \\pi r^2$.',
            correction: 'The shaded area is the complement: $\\frac{300}{360} \\times \\pi r^2 = \\frac{5}{6}\\pi r^2$. Or compute full area minus sector: $\\pi r^2 - \\frac{1}{6}\\pi r^2$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Multi-Step Sector Area',
            items: [
              'Derive the radius if not given directly (from circumference, area, or geometry).',
              'Determine the central angle (it may be a complement, supplement, or derived from other angles).',
              'Apply $A = \\frac{\\theta}{360} \\times \\pi r^2$.',
              'If the question asks for a complement region, subtract from $\\pi r^2$.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A circle has circumference $24\\pi$. A sector of this circle has an arc length of $4\\pi$. What is the area of this sector?',
            steps: [
              { label: 'Find radius', content: '$C = 24\\pi \\Rightarrow 2\\pi r = 24\\pi \\Rightarrow r = 12$' },
              { label: 'Find angle', content: '$\\frac{\\theta}{360} \\times 24\\pi = 4\\pi \\Rightarrow \\frac{\\theta}{360} = \\frac{1}{6} \\Rightarrow \\theta = 60°$' },
              { label: 'Sector area', content: '$\\frac{60}{360} \\times \\pi(12)^2 = \\frac{1}{6} \\times 144\\pi = 24\\pi$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A circle has area $100\\pi$. What is the area of the region outside a $90°$ sector (i.e., the shaded complement)?',
            answer: 'The $90°$ sector has area $\\frac{1}{4} \\times 100\\pi = 25\\pi$. The complement: $100\\pi - 25\\pi = 75\\pi$.',
          },
        ],
      },
    },
  },

  // ─── EQUATION OF A CIRCLE ─────────────────────────────────────────

  13: {
    moduleId: 'circles',
    title: 'Standard Form of a Circle Equation',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
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
            type: 'table',
            title: 'Reading Center and Radius',
            headers: ['Equation', 'Center', 'Radius'],
            rows: [
              ['$(x - 3)^2 + (y - 5)^2 = 16$', '$(3, 5)$', '$r = \\sqrt{16} = 4$'],
              ['$(x + 2)^2 + (y - 1)^2 = 9$', '$(-2, 1)$', '$r = \\sqrt{9} = 3$'],
              ['$x^2 + y^2 = 25$', '$(0, 0)$', '$r = \\sqrt{25} = 5$'],
              ['$(x + 4)^2 + (y + 7)^2 = 1$', '$(-4, -7)$', '$r = \\sqrt{1} = 1$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'The right side of the equation is $r^{\\mathbf{2}}$, not $r$. If the equation says $= 49$, the radius is $7$, not $49$. Always take the square root.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Reading Center and Radius',
            content: 'Recognition cue: $(x - h)^2 + (y - k)^2 = r^2$ with a question about center, radius, or a specific point. First move: center $= (h, k)$ (reverse the signs inside), radius $= \\sqrt{\\text{right side}}$.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error on Center',
            wrong: '$(x + 3)^2 + (y - 5)^2 = 49$ — center is $(3, 5)$.',
            correction: '$(x + 3)^2 = (x - (-3))^2$, so $h = -3$. Center $= (-3, 5)$, radius $= \\sqrt{49} = 7$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Square Root $r^2$',
            wrong: '$(x - 1)^2 + (y + 2)^2 = 36$ — radius $= 36$.',
            correction: 'The equation gives $r^2 = 36$, so $r = \\sqrt{36} = 6$.',
          },
          {
            type: 'tip',
            content: 'When $+$ appears inside the parentheses (like $(x + 4)^2$), the coordinate is **negative** ($h = -4$). When $-$ appears (like $(x - 3)^2$), the coordinate is **positive** ($h = 3$). The sign flips.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Extracting Center and Radius',
            items: [
              'Confirm the equation is in standard form: $(x - h)^2 + (y - k)^2 = r^2$.',
              'Read $h$: the value subtracted from $x$. If you see $(x + a)$, then $h = -a$.',
              'Read $k$: the value subtracted from $y$. If you see $(y + b)$, then $k = -b$.',
              'Read $r$: take $\\sqrt{\\text{right side}}$.',
              'State center $(h, k)$ and radius $r$.',
            ],
          },
          {
            type: 'steps',
            title: 'Writing an Equation from Center and Radius',
            items: [
              'Given center $(h, k)$ and radius $r$.',
              'Write $(x - h)^2 + (y - k)^2 = r^2$.',
              'If $h$ is negative (say $h = -3$), the equation becomes $(x - (-3))^2 = (x + 3)^2$.',
              'Square $r$ for the right side.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Sign Error on the Center',
            wrong: '$(x + 4)^2 + (y - 3)^2 = 25$ — center is $(4, 3)$.',
            correction: 'The form is $(x - h)^2$, so $(x + 4)^2 = (x - (-4))^2$ means $h = -4$. Center $= (-4, 3)$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Square Root',
            wrong: '$(x - 1)^2 + (y + 2)^2 = 36$ — radius $= 36$.',
            correction: 'The equation gives $r^2 = 36$, so $r = \\sqrt{36} = 6$.',
          },
          {
            type: 'trapCard',
            title: 'Right Side Not Squared',
            wrong: 'Student writes $(x - 3)^2 + (y - 2)^2 = 5$ and says radius $= 5$.',
            correction: 'If the right side is $5$, then $r = \\sqrt{5}$, not $5$. Only if the right side were $25$ would $r = 5$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'What are the center and radius of the circle $(x + 5)^2 + (y - 2)^2 = 81$?',
            steps: [
              { label: 'Identify $h$', content: '$(x + 5)^2 = (x - (-5))^2$, so $h = -5$' },
              { label: 'Identify $k$', content: '$(y - 2)^2$ gives $k = 2$' },
              { label: 'Find $r$', content: '$r^2 = 81 \\Rightarrow r = 9$' },
              { label: 'Answer', content: 'Center $= (-5, 2)$, radius $= 9$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Write the equation of a circle with center $(-2, 7)$ and radius $6$.',
            steps: [
              { label: 'Substitute', content: '$(x - (-2))^2 + (y - 7)^2 = 6^2$' },
              { label: 'Simplify', content: '$(x + 2)^2 + (y - 7)^2 = 36$' },
            ],
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'circles',
    title: 'Simple Extracting Center & Radius from Standard Form',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Given a circle equation in standard form, read off the center and radius directly by reversing the signs and square-rooting.',
        blocks: [
          {
            type: 'formula',
            label: 'Standard Form',
            content: '$$(x - h)^2 + (y - k)^2 = r^2$$',
          },
          {
            type: 'text',
            content: 'This video walks through the most common SAT circle question: the equation is already in standard form, and you need to identify the center $(h, k)$ and radius $r$. The two pitfalls are sign errors on the center and forgetting to square-root the right side.',
          },
          {
            type: 'keyInsight',
            content: 'Think of the parentheses as "distance from $h$" and "distance from $k$." The signs **inside** the parentheses are opposite the actual coordinates.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Direct Read-Off',
            content: 'Recognition cue: an equation like $(x - a)^2 + (y + b)^2 = c$ and the question asks for center or radius. First move: center $= (a, -b)$, radius $= \\sqrt{c}$.',
          },
          {
            type: 'trapCard',
            title: 'Plus Sign Means Negative Coordinate',
            wrong: '$(x + 6)^2 + (y + 1)^2 = 100$ — center $(6, 1)$.',
            correction: '$(x + 6)^2 = (x - (-6))^2$. Center $= (-6, -1)$, radius $= 10$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Extract Center and Radius',
            items: [
              'Look at the $x$-parenthesis: if $(x - a)^2$, then $h = a$; if $(x + a)^2$, then $h = -a$.',
              'Look at the $y$-parenthesis: same rule for $k$.',
              'Take $\\sqrt{\\text{right side}}$ to get $r$.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Find the center and radius: $(x - 4)^2 + (y + 3)^2 = 64$.',
            steps: [
              { label: 'Center', content: '$h = 4$, $k = -3$ (reverse the $+3$). Center $= (4, -3)$.' },
              { label: 'Radius', content: '$r = \\sqrt{64} = 8$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'What is the center and radius of $(x + 7)^2 + (y - 5)^2 = 144$?',
            answer: 'Center $= (-7, 5)$, radius $= \\sqrt{144} = 12$.',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'circles',
    title: 'Simple Extracting Diameter from Standard Form',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When a question asks for the diameter, find the radius first from the standard form equation, then double it.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'From standard form', formula: '$r = \\sqrt{\\text{right side}}$', note: 'Get radius first' },
              { label: 'Then diameter', formula: '$d = 2r$', note: 'Double the radius' },
            ],
          },
          {
            type: 'text',
            content: 'The SAT sometimes asks for the diameter instead of the radius. This is a simple extra step, but students often give $r$ when $d$ is asked, or give $r^2$ when $r$ is asked. Read the question carefully.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Diameter from Standard Form',
            content: 'Recognition cue: standard form equation with the question asking "what is the diameter." First move: $r = \\sqrt{\\text{right side}}$, then $d = 2r$.',
          },
          {
            type: 'trapCard',
            title: 'Giving Radius Instead of Diameter',
            wrong: '$(x - 3)^2 + (y + 1)^2 = 49$ — "the diameter is $7$."',
            correction: '$r = \\sqrt{49} = 7$, but $d = 2(7) = 14$. The question asks for diameter, not radius.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding Diameter from Standard Form',
            items: [
              'Identify $r^2$ from the right side of the equation.',
              'Compute $r = \\sqrt{r^2}$.',
              'Double it: $d = 2r$.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'What is the diameter of the circle $(x + 2)^2 + (y - 8)^2 = 25$?',
            steps: [
              { label: 'Find $r$', content: '$r = \\sqrt{25} = 5$' },
              { label: 'Find $d$', content: '$d = 2(5) = 10$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Find the diameter: $(x - 1)^2 + (y + 4)^2 = 196$.',
            answer: '$r = \\sqrt{196} = 14$. Diameter $= 2(14) = 28$.',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'circles',
    title: 'Complex Extracting Diameter (Conceptual Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A harder diameter problem where you use conceptual reasoning — the diameter is the distance between two opposite points on the circle, passing through the center.',
        blocks: [
          {
            type: 'text',
            content: 'Some SAT problems define the diameter indirectly. For example, two endpoints of a diameter are given, or the circle passes through a point and you must determine how the diameter relates to other geometric features.',
          },
          {
            type: 'keyInsight',
            content: 'The diameter is the longest chord of a circle. If two points on the circle are endpoints of a diameter, the center is the **midpoint** of the segment connecting them, and $d$ is the **distance** between them.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Midpoint', formula: '$M = \\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2}\\right)$', note: 'Gives the center' },
              { label: 'Distance', formula: '$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$', note: 'Gives the diameter' },
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
            title: 'Endpoints of a Diameter',
            content: 'Recognition cue: two points are described as endpoints of a diameter. First move: use the distance formula to find $d$, and midpoint formula to find the center.',
          },
          {
            type: 'trapCard',
            title: 'Using Endpoints as Center Coordinates',
            wrong: 'Endpoints of a diameter are $(2, 3)$ and $(8, 7)$. Student says center is $(2, 3)$.',
            correction: 'The center is the **midpoint**: $\\left(\\frac{2+8}{2}, \\frac{3+7}{2}\\right) = (5, 5)$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Diameter from Two Endpoints',
            items: [
              'Identify the two endpoints of the diameter: $(x_1, y_1)$ and $(x_2, y_2)$.',
              'Use the distance formula: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
              'The radius is $r = \\frac{d}{2}$.',
              'The center is the midpoint: $\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The endpoints of a diameter of a circle are $(-1, 2)$ and $(7, 8)$. Find the center, radius, and equation of the circle.',
            steps: [
              { label: 'Center (midpoint)', content: '$\\left(\\frac{-1+7}{2}, \\frac{2+8}{2}\\right) = (3, 5)$' },
              { label: 'Diameter (distance)', content: '$d = \\sqrt{(7-(-1))^2 + (8-2)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$' },
              { label: 'Radius', content: '$r = \\frac{10}{2} = 5$' },
              { label: 'Equation', content: '$(x - 3)^2 + (y - 5)^2 = 25$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The endpoints of a diameter are $(0, 0)$ and $(6, 8)$. What is the diameter?',
            answer: '$d = \\sqrt{(6-0)^2 + (8-0)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'circles',
    title: 'Complex Extracting Diameter (Plug-In Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Use the plug-in method to find the diameter: substitute known points into the circle equation to solve for $r$ (and thus $d = 2r$).',
        blocks: [
          {
            type: 'text',
            content: 'When a circle equation is given and a specific point on the circle is provided, you can plug the point into the equation to verify or solve for an unknown. This approach is especially useful when the equation contains a parameter.',
          },
          {
            type: 'keyInsight',
            content: 'Any point $(x, y)$ on the circle satisfies the equation $(x - h)^2 + (y - k)^2 = r^2$. Plugging in a known point and solving is often faster than geometric reasoning when the problem involves an unknown constant.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Plug-In Verification',
            content: 'Recognition cue: an equation with a parameter or multiple-choice circle equations, plus a point that lies on the circle. First move: plug the point into each candidate equation; the correct one yields a true statement.',
          },
          {
            type: 'trapCard',
            title: 'Arithmetic Slip with Negative Coordinates',
            wrong: 'Point $(-3, 4)$ on $(x - 1)^2 + (y + 2)^2 = r^2$. Student writes $(-3 - 1)^2 = (-2)^2 = 4$.',
            correction: '$(-3 - 1)^2 = (-4)^2 = 16$, not $4$. And $(4 + 2)^2 = 36$. So $r^2 = 16 + 36 = 52$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Plug-In Method for Finding $r$ or $d$',
            items: [
              'Write the standard-form equation with the known center.',
              'Substitute the given point\'s coordinates for $x$ and $y$.',
              'Simplify to find $r^2$.',
              'Take $\\sqrt{r^2}$ for the radius; double for the diameter.',
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
            problem: 'A circle with center $(2, -1)$ passes through the point $(5, 3)$. What is the diameter?',
            steps: [
              { label: 'Plug in', content: '$(5 - 2)^2 + (3 - (-1))^2 = r^2$' },
              { label: 'Simplify', content: '$9 + 16 = r^2 \\Rightarrow r^2 = 25$' },
              { label: 'Radius', content: '$r = 5$' },
              { label: 'Diameter', content: '$d = 2(5) = 10$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A circle centered at $(0, 0)$ passes through $(3, 4)$. What is the diameter?',
            answer: '$r^2 = 3^2 + 4^2 = 9 + 16 = 25$. $r = 5$, so $d = 10$.',
          },
        ],
      },
    },
  },

  // ─── CIRCLE TRANSFORMATIONS ───────────────────────────────────────

  18: {
    moduleId: 'circles',
    title: 'Transformations of Circles',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Transforming a circle means moving its center or changing its radius — both are visible in the standard-form equation.',
        blocks: [
          {
            type: 'text',
            content: 'Starting from $(x - h)^2 + (y - k)^2 = r^2$, every transformation maps directly to a change in $h$, $k$, or $r$.',
          },
          {
            type: 'table',
            title: 'How Transformations Affect the Equation',
            headers: ['Transformation', 'Effect on Equation', 'Example'],
            rows: [
              ['Shift **right** by $a$', '$h$ increases by $a$', '$(x-2)^2 \\to (x-5)^2$ shifts right $3$'],
              ['Shift **left** by $a$', '$h$ decreases by $a$', '$(x-2)^2 \\to (x+1)^2$ shifts left $3$'],
              ['Shift **up** by $b$', '$k$ increases by $b$', '$(y-1)^2 \\to (y-4)^2$ shifts up $3$'],
              ['Shift **down** by $b$', '$k$ decreases by $b$', '$(y-1)^2 \\to (y+2)^2$ shifts down $3$'],
              ['Scale radius by factor $s$', '$r^2$ becomes $(sr)^2$', '$r^2 = 9 \\to r^2 = 36$ doubles radius'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'Translations change the center but not the radius. Scaling changes the radius but not the center (unless combined with a translation). Handle each transformation separately.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Which Equation Represents the Shifted Circle?"',
            content: 'Recognition cue: a circle equation plus a translation described in words. First move: adjust $h$ and $k$ according to the shift directions. Left/right changes $h$; up/down changes $k$. The $r^2$ stays the same for pure translations.',
          },
          {
            type: 'trapCard',
            title: 'Shift Direction vs. Sign in Equation',
            wrong: '"Shifted $3$ left" — student writes $(x - 3)^2$, moving the circle right.',
            correction: 'Shifting left by $3$ subtracts $3$ from $h$. If old center was $(h, k)$, new center is $(h-3, k)$. The sign inside the parentheses is opposite the direction.',
          },
          {
            type: 'trapCard',
            title: 'Changing $r^2$ During a Translation',
            wrong: 'Student shifts the circle and also modifies $r^2$.',
            correction: 'Pure translations never change $r^2$. Only scaling changes the radius.',
          },
          {
            type: 'tip',
            content: 'If the problem shifts AND scales, handle them separately: translations change the center coordinates; scaling changes $r$ (and therefore $r^2$).',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Applying a Transformation',
            items: [
              'Read the original equation to identify center $(h, k)$ and radius $r$.',
              'For translations: right $\\Rightarrow h + a$, left $\\Rightarrow h - a$, up $\\Rightarrow k + b$, down $\\Rightarrow k - b$.',
              'For scaling: multiply $r$ by the scale factor; square to get new $r^2$.',
              'Write the new equation: $(x - h_{\\text{new}})^2 + (y - k_{\\text{new}})^2 = r_{\\text{new}}^2$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Direction Confusion',
            wrong: '"Shift right $4$" — student subtracts $4$ from $h$.',
            correction: 'Right means $h$ **increases**. New $h = h_{\\text{old}} + 4$.',
          },
          {
            type: 'trapCard',
            title: 'Scaling $r^2$ Instead of $r$',
            wrong: '"Double the radius." Student doubles $r^2$: if $r^2 = 9$, writes $r^2 = 18$.',
            correction: 'If $r^2 = 9$, then $r = 3$. Doubled: $r = 6$, so $r^2 = 36$. You must double $r$, then re-square.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Circle $C_1$: $(x - 1)^2 + (y + 3)^2 = 4$. Write the equation of $C_2$, which is $C_1$ shifted $5$ units right and $2$ units up with the radius doubled.',
            steps: [
              { label: 'Original', content: 'Center $(1, -3)$, radius $= 2$' },
              { label: 'Shift center', content: '$(1 + 5,\\; -3 + 2) = (6, -1)$' },
              { label: 'Scale radius', content: '$2 \\times 2 = 4$, so $r^2 = 16$' },
              { label: 'New equation', content: '$(x - 6)^2 + (y + 1)^2 = 16$' },
            ],
          },
        ],
      },
    },
  },

  19: {
    moduleId: 'circles',
    title: 'Simple Circle Transformations Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A single-step translation: shift a circle left, right, up, or down and write the new equation.',
        blocks: [
          {
            type: 'text',
            content: 'A pure translation moves the center without changing the radius. The new equation has the same $r^2$ on the right side; only $h$ and/or $k$ change.',
          },
          {
            type: 'keyInsight',
            content: 'Right/left shifts change $h$. Up/down shifts change $k$. The radius stays the same. The sign inside the parenthesis is always **opposite** the direction of movement.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Simple Translation',
            content: 'Recognition cue: "the circle is shifted $n$ units [direction]" and answer choices show four equations with the same $r^2$. First move: adjust only $h$ or $k$ and match.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Direction',
            wrong: '"Shift $4$ units left." Student writes $(x - 4)^2$ thinking left corresponds to a minus sign.',
            correction: 'Left subtracts from $h$, but $(x - (h - 4))^2$ may produce a $+$ inside the parenthesis. Work with the center coordinates first, then build the equation.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Single Translation',
            items: [
              'Identify the original center and radius.',
              'Adjust the center coordinate(s) according to the shift direction.',
              'Write the new equation with the same $r^2$.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'The circle $(x - 2)^2 + (y + 5)^2 = 16$ is shifted $3$ units to the right. What is the new equation?',
            steps: [
              { label: 'Original center', content: '$(2, -5)$' },
              { label: 'New center', content: '$(2 + 3, -5) = (5, -5)$' },
              { label: 'New equation', content: '$(x - 5)^2 + (y + 5)^2 = 16$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The circle $(x + 1)^2 + (y - 3)^2 = 9$ is shifted $4$ units down. What is the new equation?',
            answer: 'Original center $(-1, 3)$. Shift down: $(-1, 3 - 4) = (-1, -1)$. New equation: $(x + 1)^2 + (y + 1)^2 = 9$.',
          },
        ],
      },
    },
  },

  20: {
    moduleId: 'circles',
    title: 'Complex Circle Transformations Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Multi-step transformations combining translation and scaling: shift the center AND change the radius.',
        blocks: [
          {
            type: 'text',
            content: 'Complex transformation problems require you to modify both the center and the radius. Handle each transformation independently: translations change $(h, k)$, scaling changes $r$.',
          },
          {
            type: 'keyInsight',
            content: 'When scaling the radius, remember to square the new radius for the equation. If the radius triples, $r^2$ becomes $9$ times larger (not $3$ times).',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Combined Transformation',
            content: 'Recognition cue: "shifted and enlarged/reduced." First move: update the center first, then update the radius separately.',
          },
          {
            type: 'trapCard',
            title: 'Scaling $r^2$ Directly',
            wrong: '"Radius is tripled." Student triples $r^2$ from $4$ to $12$.',
            correction: 'If $r^2 = 4$, then $r = 2$. Tripled: $r = 6$, so $r^2 = 36$. Triple $r$, then re-square.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Combined Shift and Scale',
            items: [
              'Extract the original center $(h, k)$ and radius $r$ from the equation.',
              'Apply the translation to get the new center.',
              'Apply the scaling to get the new radius.',
              'Write the new equation: $(x - h_{\\text{new}})^2 + (y - k_{\\text{new}})^2 = r_{\\text{new}}^2$.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Circle: $(x + 3)^2 + (y - 4)^2 = 9$. It is shifted $6$ units right, $4$ units down, and the radius is tripled. Write the new equation.',
            steps: [
              { label: 'Original', content: 'Center $(-3, 4)$, $r = 3$' },
              { label: 'Shift center', content: '$(-3 + 6, 4 - 4) = (3, 0)$' },
              { label: 'Scale radius', content: '$3 \\times 3 = 9$, so $r^2 = 81$' },
              { label: 'New equation', content: '$(x - 3)^2 + y^2 = 81$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Circle: $(x - 1)^2 + (y + 2)^2 = 4$. Shift $3$ left and double the radius. New equation?',
            answer: 'Center $(1, -2) \\to (1-3, -2) = (-2, -2)$. Radius $2 \\to 4$, so $r^2 = 16$. New equation: $(x + 2)^2 + (y + 2)^2 = 16$.',
          },
        ],
      },
    },
  },

  // ─── DOMAIN, RANGE & INTERSECTIONS ────────────────────────────────

  21: {
    moduleId: 'circles',
    title: 'Domain & Range of a Circle',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A circle\'s domain and range are closed intervals determined by the center and radius.',
        blocks: [
          {
            type: 'text',
            content: 'A circle with center $(h, k)$ and radius $r$ extends $r$ units in every direction from the center. This gives rectangular bounds on the $x$- and $y$-values.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Domain', formula: '$[h - r,\\; h + r]$', note: 'All $x$-values on the circle' },
              { label: 'Range', formula: '$[k - r,\\; k + r]$', note: 'All $y$-values on the circle' },
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Circles Are NOT Functions',
            content: 'A circle fails the vertical line test — most $x$-values correspond to **two** $y$-values. The SAT won\'t call a circle a function, but it will ask about domain and range as sets of valid coordinates.',
          },
          {
            type: 'keyInsight',
            content: 'Domain uses $h$ and $r$; range uses $k$ and $r$. Both intervals are **closed** (brackets, not parentheses) because the circle includes the extreme points.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Domain/Range Questions',
            content: 'Recognition cue: "what is the smallest/largest $x$-value" or "what are all possible $y$-values." First move: find center and radius, then compute $[h \\pm r]$ or $[k \\pm r]$.',
          },
          {
            type: 'trapCard',
            title: 'Using $r^2$ Instead of $r$',
            wrong: '$(x - 3)^2 + (y + 1)^2 = 25$. Student says domain is $[3 - 25, 3 + 25]$.',
            correction: '$r = \\sqrt{25} = 5$, not $25$. Domain $= [3 - 5, 3 + 5] = [-2, 8]$.',
          },
          {
            type: 'tip',
            content: 'The extreme $x$-values occur at the leftmost and rightmost points of the circle (where $y = k$). The extreme $y$-values occur at the topmost and bottommost points (where $x = h$).',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding Domain and Range',
            items: [
              'Extract center $(h, k)$ and radius $r$ from the equation.',
              'Domain: $[h - r,\\; h + r]$.',
              'Range: $[k - r,\\; k + r]$.',
              'Use closed brackets $[\\;]$ because the endpoints are on the circle.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Using $r^2$ as $r$',
            wrong: 'Right side is $49$. Student computes domain as $[h - 49, h + 49]$.',
            correction: '$r = \\sqrt{49} = 7$. Domain is $[h - 7, h + 7]$.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error on Center',
            wrong: '$(x + 2)^2 + (y - 3)^2 = 16$. Student says center is $(2, 3)$.',
            correction: 'Center is $(-2, 3)$. Domain: $[-2 - 4, -2 + 4] = [-6, 2]$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Find the domain and range of the circle $(x + 2)^2 + (y - 5)^2 = 49$.',
            steps: [
              { label: 'Identify', content: 'Center $= (-2, 5)$, radius $= \\sqrt{49} = 7$' },
              { label: 'Domain', content: '$[-2 - 7,\\; -2 + 7] = [-9, 5]$' },
              { label: 'Range', content: '$[5 - 7,\\; 5 + 7] = [-2, 12]$' },
            ],
          },
        ],
      },
    },
  },

  22: {
    moduleId: 'circles',
    title: 'Determining Domain & Range Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Practice extracting domain and range from various circle equations by identifying the center and radius first.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              { label: 'Domain', formula: '$[h - r,\\; h + r]$', note: 'Horizontal span' },
              { label: 'Range', formula: '$[k - r,\\; k + r]$', note: 'Vertical span' },
            ],
          },
          {
            type: 'text',
            content: 'For domain and range problems, the most common mistake is misreading the center coordinates (sign errors) or using $r^2$ instead of $r$. Always extract center and radius carefully before computing the intervals.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Interval Endpoints',
            content: 'Recognition cue: questions asking for the minimum or maximum $x$- or $y$-coordinate. These are the endpoints of the domain or range interval.',
          },
          {
            type: 'trapCard',
            title: 'Open vs. Closed Intervals',
            wrong: 'Student writes domain as $(h - r, h + r)$ with parentheses.',
            correction: 'The extreme points are **on** the circle, so use closed brackets: $[h - r, h + r]$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Domain and Range from Standard Form',
            items: [
              'Read center $(h, k)$ — flip the signs inside the parentheses.',
              'Compute $r = \\sqrt{\\text{right side}}$.',
              'Domain: $[h - r, h + r]$. Range: $[k - r, k + r]$.',
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
            problem: 'Find the domain and range: $(x - 4)^2 + (y + 6)^2 = 100$.',
            steps: [
              { label: 'Center', content: '$(4, -6)$' },
              { label: 'Radius', content: '$r = \\sqrt{100} = 10$' },
              { label: 'Domain', content: '$[4 - 10, 4 + 10] = [-6, 14]$' },
              { label: 'Range', content: '$[-6 - 10, -6 + 10] = [-16, 4]$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'What is the domain and range of $x^2 + y^2 = 36$?',
            answer: 'Center $(0, 0)$, $r = 6$. Domain $= [-6, 6]$. Range $= [-6, 6]$.',
          },
        ],
      },
    },
  },

  23: {
    moduleId: 'circles',
    title: 'Intersecting Y-Axis at Exactly One Point Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A circle intersects the $y$-axis at exactly one point when the $y$-axis is tangent to the circle — meaning the distance from the center to the $y$-axis equals the radius.',
        blocks: [
          {
            type: 'text',
            content: 'The $y$-axis is the line $x = 0$. The distance from any point $(h, k)$ to the $y$-axis is $|h|$. A circle centered at $(h, k)$ with radius $r$ touches the $y$-axis at exactly one point when $|h| = r$.',
          },
          {
            type: 'keyInsight',
            content: 'If $|h| = r$, the circle is tangent to the $y$-axis. If $|h| < r$, the circle crosses the $y$-axis at two points. If $|h| > r$, the circle does not reach the $y$-axis.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Tangent to $y$-axis', formula: '$|h| = r$', note: 'Exactly one intersection' },
              { label: 'Two intersections', formula: '$|h| < r$', note: 'Circle crosses $y$-axis' },
              { label: 'No intersection', formula: '$|h| > r$', note: 'Circle doesn\'t reach $y$-axis' },
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
            title: 'Tangency to an Axis',
            content: 'Recognition cue: "the circle intersects the $y$-axis at exactly one point" or "the circle is tangent to the $y$-axis." First move: set $|h| = r$ and solve.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting Absolute Value',
            wrong: 'Center is $(-5, 3)$. Student says the distance to the $y$-axis is $-5$.',
            correction: 'Distance is always positive: $|{-5}| = 5$. So $r = 5$ for tangency to the $y$-axis.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Determining $y$-Axis Intersections',
            items: [
              'Extract center $(h, k)$ and radius $r$.',
              'Compute the distance from center to $y$-axis: $|h|$.',
              'Compare: $|h| = r$ means exactly one point (tangent). $|h| < r$ means two points. $|h| > r$ means none.',
              'If asked to find the intersection point(s), set $x = 0$ in the circle equation and solve for $y$.',
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
            problem: 'For what value of $r$ does the circle $(x - 4)^2 + (y + 1)^2 = r^2$ intersect the $y$-axis at exactly one point?',
            steps: [
              { label: 'Center', content: '$(4, -1)$' },
              { label: 'Distance to $y$-axis', content: '$|4| = 4$' },
              { label: 'Tangency condition', content: '$r = 4$' },
              { label: 'Verify', content: 'Set $x = 0$: $(0-4)^2 + (y+1)^2 = 16 \\Rightarrow 16 + (y+1)^2 = 16 \\Rightarrow (y+1)^2 = 0 \\Rightarrow y = -1$. One point: $(0, -1)$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The circle $(x + 3)^2 + (y - 2)^2 = 9$ intersects the $y$-axis at how many points?',
            answer: 'Center $(-3, 2)$, $r = 3$. Distance to $y$-axis $= |{-3}| = 3 = r$. Exactly **one** point (tangent to $y$-axis).',
          },
        ],
      },
    },
  },

  24: {
    moduleId: 'circles',
    title: 'Intersecting Y-Axis at One Point (DESMOS Method)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Use DESMOS to visually verify when a circle is tangent to the $y$-axis — graph the equation and observe the intersection.',
        blocks: [
          {
            type: 'text',
            content: 'DESMOS can graph circle equations directly. Type the equation (e.g., $(x - 4)^2 + (y + 1)^2 = 16$) and observe where the circle meets the $y$-axis. If it touches at exactly one point, the circle is tangent to the $y$-axis.',
          },
          {
            type: 'keyInsight',
            content: 'On the SAT, DESMOS is available on the digital test. Graphing the circle and visually checking axis intersections is a fast verification strategy when the algebra feels uncertain.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'DESMOS Verification',
            content: 'Recognition cue: any axis-intersection question where you want to confirm your algebraic answer. First move: type the circle equation into DESMOS and zoom to see the intersection clearly.',
          },
          {
            type: 'trapCard',
            title: 'Misreading the Graph Scale',
            wrong: 'Student sees the circle appear to touch the axis but the zoom level is too coarse — it actually crosses at two close points.',
            correction: 'Zoom in near the intersection. If the circle truly touches at one point, zooming in will show tangency. If two points, zooming reveals the gap.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS Axis-Intersection Check',
            items: [
              'Enter the circle equation into DESMOS.',
              'Look at where the graph meets the $y$-axis (or $x$-axis).',
              'Count intersection points: $0$, $1$, or $2$.',
              'If needed, click on the intersection point to read its coordinates.',
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
            problem: 'Use DESMOS to determine whether $(x - 5)^2 + (y - 3)^2 = 25$ intersects the $y$-axis at one point.',
            steps: [
              { label: 'Graph it', content: 'Enter $(x - 5)^2 + (y - 3)^2 = 25$ into DESMOS.' },
              { label: 'Observe', content: 'The circle touches the $y$-axis at exactly one point: $(0, 3)$.' },
              { label: 'Verify algebraically', content: 'Center $(5, 3)$, $r = 5$. Distance to $y$-axis $= |5| = 5 = r$. Confirmed: tangent.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Without graphing, predict: does $(x + 7)^2 + (y - 1)^2 = 49$ touch the $y$-axis at one point?',
            answer: 'Center $(-7, 1)$, $r = 7$. $|{-7}| = 7 = r$. Yes, exactly one intersection point.',
          },
        ],
      },
    },
  },

  // ─── CONVERTING TO STANDARD FORM ──────────────────────────────────

  25: {
    moduleId: 'circles',
    title: 'Completing the Square for Circles',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When a circle equation is given in expanded (general) form, completing the square converts it to standard form so you can read the center and radius.',
        blocks: [
          {
            type: 'text',
            content: 'The **general form** of a circle is $x^2 + y^2 + Dx + Ey + F = 0$. It hides the center and radius. **Completing the square** on both $x$ and $y$ terms converts it to $(x - h)^2 + (y - k)^2 = r^2$.',
          },
          {
            type: 'keyInsight',
            content: 'Completing the square for a circle is the same algebraic technique you use for quadratics — you just do it **twice** (once for $x$, once for $y$).',
          },
          {
            type: 'formula',
            label: 'The Key Move',
            content: '$$x^2 + Bx \\;\\longrightarrow\\; \\left(x + \\frac{B}{2}\\right)^2 - \\left(\\frac{B}{2}\\right)^2$$',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Balance Both Sides',
            content: 'Whatever you add to one side of the equation to complete the square, you **must** add the same amount to the other side.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"What Is the Radius of the Circle?"',
            content: 'Recognition cue: a circle equation in general form ($x^2 + y^2 + Dx + Ey + F = 0$). First move: complete the square on both $x$ and $y$ to convert to standard form.',
          },
          {
            type: 'trapCard',
            title: 'Adding to One Side Only',
            wrong: 'Student adds $9$ to the left to complete $x^2 - 6x + 9$ but forgets to add $9$ to the right.',
            correction: 'Whatever you add to the left, you **must** add to the right. Both sides change by the same amount.',
          },
          {
            type: 'trapCard',
            title: 'Coefficient on $x^2$ or $y^2$',
            wrong: 'Equation is $2x^2 + 2y^2 + 8x - 12y + 6 = 0$. Student completes the square without dividing by $2$ first.',
            correction: 'Divide the entire equation by the leading coefficient first: $x^2 + y^2 + 4x - 6y + 3 = 0$. Then complete the square.',
          },
          {
            type: 'tip',
            content: 'After completing the square, if the right side is negative, no circle exists — check your arithmetic. If it is zero, the "circle" is a single point.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'General Form to Standard Form',
            items: [
              'If the coefficients of $x^2$ and $y^2$ are not $1$, divide the entire equation by that coefficient.',
              'Group $x$-terms together and $y$-terms together; move the constant to the right side.',
              'For the $x$-group: take half the coefficient of $x$, square it, add to **both** sides.',
              'For the $y$-group: take half the coefficient of $y$, square it, add to **both** sides.',
              'Factor each group as a perfect square; simplify the right side.',
              'Read off center $(h, k)$ and $r = \\sqrt{\\text{right side}}$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Adding to One Side Only',
            wrong: 'Student adds $9$ to the left side to complete the $x$-square but forgets to add $9$ to the right side.',
            correction: 'Whatever you add to the left, you **must** add to the right to keep the equation balanced.',
          },
          {
            type: 'trapCard',
            title: 'Negative Right Side',
            wrong: 'After completing the square, the right side is negative: $(x-1)^2 + (y+2)^2 = -3$.',
            correction: 'If $r^2$ is negative, **no circle exists** — check your arithmetic. $r^2$ must be positive.',
          },
          {
            type: 'trapCard',
            title: 'Half-Coefficient Error',
            wrong: '$x^2 + 10x$: student squares $10$ to get $100$ instead of $\\left(\\frac{10}{2}\\right)^2 = 25$.',
            correction: 'Take **half** of the coefficient first ($\\frac{10}{2} = 5$), then square ($5^2 = 25$).',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Write $x^2 + y^2 - 6x + 10y + 18 = 0$ in standard form. Find the center and radius.',
            steps: [
              { label: 'Group & move constant', content: '$(x^2 - 6x) + (y^2 + 10y) = -18$' },
              { label: 'Complete square for $x$', content: 'Half of $-6$ is $-3$; $(-3)^2 = 9$. Add $9$ to both sides:\n$(x^2 - 6x + 9) + (y^2 + 10y) = -18 + 9$' },
              { label: 'Complete square for $y$', content: 'Half of $10$ is $5$; $5^2 = 25$. Add $25$ to both sides:\n$(x^2 - 6x + 9) + (y^2 + 10y + 25) = -18 + 9 + 25$' },
              { label: 'Factor', content: '$(x - 3)^2 + (y + 5)^2 = 16$' },
              { label: 'Read off', content: 'Center $= (3, -5)$, radius $= \\sqrt{16} = 4$' },
            ],
          },
        ],
      },
    },
  },

  26: {
    moduleId: 'circles',
    title: 'Deriving Standard Form to Determine Radius #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complete the square on a general-form circle equation to convert it to standard form and extract the radius.',
        blocks: [
          {
            type: 'text',
            content: 'This video walks through a complete example of converting from general form to standard form, focusing on correctly completing the square for both $x$ and $y$ and reading off the radius.',
          },
          {
            type: 'formula',
            label: 'General to Standard',
            content: '$$x^2 + y^2 + Dx + Ey + F = 0 \\;\\longrightarrow\\; (x - h)^2 + (y - k)^2 = r^2$$',
          },
          {
            type: 'keyInsight',
            content: 'The radius is $r = \\sqrt{\\left(\\frac{D}{2}\\right)^2 + \\left(\\frac{E}{2}\\right)^2 - F}$. This shortcut works when the coefficients of $x^2$ and $y^2$ are both $1$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'General Form Radius',
            content: 'Recognition cue: expanded equation with $x^2$, $y^2$, and linear terms. First move: complete the square or use the shortcut formula.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Add to Both Sides',
            wrong: 'Student completes the square on the left but does not add the same values to the right side.',
            correction: 'Track every addition: if you add $a$ for $x$ and $b$ for $y$, the right side becomes $-F + a + b$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Complete the Square (Detailed)',
            items: [
              'Move the constant to the right: $(x^2 + Dx) + (y^2 + Ey) = -F$.',
              'For $x$: add $\\left(\\frac{D}{2}\\right)^2$ to both sides.',
              'For $y$: add $\\left(\\frac{E}{2}\\right)^2$ to both sides.',
              'Factor: $(x + \\frac{D}{2})^2 + (y + \\frac{E}{2})^2 = -F + \\left(\\frac{D}{2}\\right)^2 + \\left(\\frac{E}{2}\\right)^2$.',
              'Read center and radius from the result.',
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
            problem: 'Find the radius of the circle $x^2 + y^2 + 8x - 2y - 8 = 0$.',
            steps: [
              { label: 'Group', content: '$(x^2 + 8x) + (y^2 - 2y) = 8$' },
              { label: 'Complete $x$', content: '$\\left(\\frac{8}{2}\\right)^2 = 16$. Add to both sides: $(x^2 + 8x + 16) + (y^2 - 2y) = 24$' },
              { label: 'Complete $y$', content: '$\\left(\\frac{-2}{2}\\right)^2 = 1$. Add to both sides: $(x^2 + 8x + 16) + (y^2 - 2y + 1) = 25$' },
              { label: 'Factor', content: '$(x + 4)^2 + (y - 1)^2 = 25$' },
              { label: 'Radius', content: '$r = \\sqrt{25} = 5$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Find the radius: $x^2 + y^2 - 4x + 6y - 12 = 0$.',
            answer: '$(x^2 - 4x + 4) + (y^2 + 6y + 9) = 12 + 4 + 9 = 25$. $(x - 2)^2 + (y + 3)^2 = 25$. Radius $= 5$.',
          },
        ],
      },
    },
  },

  27: {
    moduleId: 'circles',
    title: 'Deriving Standard Form — Radius #1 (DESMOS)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Use DESMOS to verify your algebraic conversion from general form to standard form and confirm the radius visually.',
        blocks: [
          {
            type: 'text',
            content: 'After completing the square algebraically, you can enter both the original general-form equation and your standard-form result into DESMOS. If they produce the same graph, your conversion is correct.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS can graph implicit equations like $x^2 + y^2 + 8x - 2y - 8 = 0$ directly. You can also graph the standard form to verify they overlap perfectly.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'DESMOS as a Check',
            content: 'Recognition cue: you have completed the square and want to verify. Type the original equation into one line and your standard form into another. They should produce identical circles.',
          },
          {
            type: 'trapCard',
            title: 'Typo in DESMOS Entry',
            wrong: 'Student types $x^2 + y^2 + 8x - 2y - 8$ without $= 0$ and gets an error.',
            correction: 'DESMOS needs an equation: type $x^2 + y^2 + 8x - 2y - 8 = 0$ or move terms so one side equals a number.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS Verification of Completing the Square',
            items: [
              'Enter the original general-form equation in DESMOS.',
              'In a second line, enter your derived standard-form equation.',
              'Verify both circles overlap exactly.',
              'Click on the circle to check center and note the visible radius.',
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
            problem: 'Verify that $x^2 + y^2 + 8x - 2y - 8 = 0$ converts to $(x + 4)^2 + (y - 1)^2 = 25$ using DESMOS.',
            steps: [
              { label: 'Line 1', content: 'Type: $x^2 + y^2 + 8x - 2y - 8 = 0$' },
              { label: 'Line 2', content: 'Type: $(x + 4)^2 + (y - 1)^2 = 25$' },
              { label: 'Observe', content: 'Both produce the same circle centered at $(-4, 1)$ with radius $5$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'If you graph $x^2 + y^2 - 10x + 4y + 4 = 0$ in DESMOS, what center and radius should you see?',
            answer: 'Complete the square: $(x - 5)^2 + (y + 2)^2 = 25$. Center $(5, -2)$, radius $5$.',
          },
        ],
      },
    },
  },

  28: {
    moduleId: 'circles',
    title: 'Deriving Standard Form — Center #1 (DESMOS)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Use DESMOS to identify the center of a circle given in general form — complete the square algebraically, then verify by graphing.',
        blocks: [
          {
            type: 'text',
            content: 'The center of a circle in general form $x^2 + y^2 + Dx + Ey + F = 0$ is $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$. After completing the square, verify with DESMOS by observing the center of the plotted circle.',
          },
          {
            type: 'keyInsight',
            content: 'The center coordinates are always $-\\frac{1}{2}$ of the linear coefficients. For $x^2 + 8x$: $h = -\\frac{8}{2} = -4$. For $y^2 - 2y$: $k = -\\frac{-2}{2} = 1$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Quick Center Extraction',
            content: 'Recognition cue: general form equation and the question asks only for the center. You can use the shortcut $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$ without fully completing the square.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the Negative Sign',
            wrong: '$x^2 + y^2 + 6x - 4y + 4 = 0$. Student says center is $(3, -2)$.',
            correction: 'Center $= \\left(-\\frac{6}{2}, -\\frac{-4}{2}\\right) = (-3, 2)$. The center uses $-\\frac{D}{2}$, not $\\frac{D}{2}$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding Center from General Form',
            items: [
              'Identify coefficients $D$ (of $x$) and $E$ (of $y$) in $x^2 + y^2 + Dx + Ey + F = 0$.',
              'Center $= \\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$.',
              'Verify in DESMOS by graphing the equation and observing the center.',
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
            problem: 'Find the center of $x^2 + y^2 - 10x + 4y + 13 = 0$.',
            steps: [
              { label: 'Identify coefficients', content: '$D = -10$, $E = 4$' },
              { label: 'Center shortcut', content: '$\\left(-\\frac{-10}{2}, -\\frac{4}{2}\\right) = (5, -2)$' },
              { label: 'Verify (optional)', content: 'Graph in DESMOS: the circle is centered at $(5, -2)$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'What is the center of $x^2 + y^2 + 12x - 8y + 3 = 0$?',
            answer: '$D = 12$, $E = -8$. Center $= \\left(-\\frac{12}{2}, -\\frac{-8}{2}\\right) = (-6, 4)$.',
          },
        ],
      },
    },
  },

  29: {
    moduleId: 'circles',
    title: 'Deriving Standard Form to Determine Radius #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A second completing-the-square example with different coefficients to reinforce the technique and build fluency.',
        blocks: [
          {
            type: 'text',
            content: 'This example features coefficients that produce non-perfect-square radii (like $\\sqrt{20}$), reinforcing that $r^2$ does not always simplify to a perfect square.',
          },
          {
            type: 'keyInsight',
            content: 'If $r^2$ is not a perfect square, leave the radius as $\\sqrt{r^2}$ in exact form. The SAT may offer answer choices like $\\sqrt{20}$ or $2\\sqrt{5}$ — these are equivalent.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Simplified Radical Answers',
            content: 'Recognition cue: answer choices include simplified radicals like $2\\sqrt{5}$, $3\\sqrt{2}$. First move: complete the square, get $r^2$, then simplify $\\sqrt{r^2}$.',
          },
          {
            type: 'trapCard',
            title: 'Not Simplifying the Radical',
            wrong: 'Student writes $r = \\sqrt{20}$ but the answer choice is $2\\sqrt{5}$.',
            correction: '$\\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}$. Always simplify radicals to match answer choices.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Completing the Square with Non-Perfect Results',
            items: [
              'Complete the square as usual for both $x$ and $y$.',
              'Compute $r^2$ on the right side.',
              'If $r^2$ is not a perfect square, find $r = \\sqrt{r^2}$ and simplify the radical.',
              'Check: $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$. Pull out perfect square factors.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Find the radius of $x^2 + y^2 - 2x + 6y - 10 = 0$.',
            steps: [
              { label: 'Group', content: '$(x^2 - 2x) + (y^2 + 6y) = 10$' },
              { label: 'Complete $x$', content: '$\\left(\\frac{-2}{2}\\right)^2 = 1$. Add to both sides: $(x^2 - 2x + 1) + (y^2 + 6y) = 11$' },
              { label: 'Complete $y$', content: '$\\left(\\frac{6}{2}\\right)^2 = 9$. Add to both sides: $(x - 1)^2 + (y^2 + 6y + 9) = 20$' },
              { label: 'Factor', content: '$(x - 1)^2 + (y + 3)^2 = 20$' },
              { label: 'Radius', content: '$r = \\sqrt{20} = 2\\sqrt{5}$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Find the radius of $x^2 + y^2 + 4x - 10y + 20 = 0$.',
            answer: '$(x^2 + 4x + 4) + (y^2 - 10y + 25) = -20 + 4 + 25 = 9$. $(x + 2)^2 + (y - 5)^2 = 9$. Radius $= 3$.',
          },
        ],
      },
    },
  },

  30: {
    moduleId: 'circles',
    title: 'Deriving Standard Form — Radius #2 (DESMOS)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Verify the radius found by completing the square using DESMOS — especially useful when the radius involves a radical.',
        blocks: [
          {
            type: 'text',
            content: 'When completing the square yields a non-integer radius (like $r = 2\\sqrt{5} \\approx 4.47$), DESMOS provides visual confirmation. The plotted circle should have a diameter matching $2r$.',
          },
          {
            type: 'keyInsight',
            content: 'In DESMOS, you can measure the diameter by noting the leftmost and rightmost points of the circle. The distance between them is $2r$, which you can compare to your algebraic answer.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Radius Verification with DESMOS',
            content: 'After completing the square, graph the equation and hover over extreme points to verify the radius. If the leftmost point is at $x = h - r$ and rightmost at $x = h + r$, the radius checks out.',
          },
          {
            type: 'trapCard',
            title: 'Rounding Errors',
            wrong: 'DESMOS shows the radius as approximately $4.47$. Student rounds to $4.5$ and selects $r = \\frac{9}{2}$.',
            correction: '$2\\sqrt{5} \\approx 4.472$, not $4.5$. Match the exact form: $r = 2\\sqrt{5}$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS Radius Check',
            items: [
              'Graph the general-form equation in DESMOS.',
              'Identify the center visually or by completing the square.',
              'Note the leftmost $x$-value of the circle: this is $h - r$.',
              'Compute $r$ from the visual or compare to your algebraic result.',
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
            problem: 'Verify that the radius of $x^2 + y^2 - 2x + 6y - 10 = 0$ is $2\\sqrt{5}$ using DESMOS.',
            steps: [
              { label: 'Graph', content: 'Enter $x^2 + y^2 - 2x + 6y - 10 = 0$ in DESMOS.' },
              { label: 'Center', content: 'The circle is centered at approximately $(1, -3)$.' },
              { label: 'Check radius', content: 'The rightmost point is at about $x \\approx 5.47$. So $r \\approx 5.47 - 1 = 4.47 \\approx 2\\sqrt{5}$. Confirmed.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You complete the square and get $(x + 3)^2 + (y - 1)^2 = 18$. What is the radius in simplified form?',
            answer: '$r = \\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}$.',
          },
        ],
      },
    },
  },

  31: {
    moduleId: 'circles',
    title: 'Deriving Standard Form — Center #2 (DESMOS)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Another DESMOS-assisted example: convert a general form equation, find the center, and verify graphically.',
        blocks: [
          {
            type: 'text',
            content: 'This video reinforces the center-finding technique with a second example. The algebraic shortcut $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$ gives the center instantly; DESMOS confirms it visually.',
          },
          {
            type: 'keyInsight',
            content: 'For $x^2 + y^2 + Dx + Ey + F = 0$: center $= \\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$ and $r = \\sqrt{\\left(\\frac{D}{2}\\right)^2 + \\left(\\frac{E}{2}\\right)^2 - F}$. These shortcut formulas save time on timed tests.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Shortcut Center Formula',
            content: 'Recognition cue: general form equation with a center-only question. Use $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$ without fully completing the square.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error in Shortcut',
            wrong: '$x^2 + y^2 - 14x + 8y + 1 = 0$. Student says center $= (-7, 4)$.',
            correction: '$D = -14$, $E = 8$. Center $= \\left(-\\frac{-14}{2}, -\\frac{8}{2}\\right) = (7, -4)$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Center via Shortcut + DESMOS',
            items: [
              'Read $D$ and $E$ from the general form.',
              'Center $= \\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$.',
              'Graph the equation in DESMOS to verify.',
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
            problem: 'Find the center of $x^2 + y^2 - 14x + 8y + 1 = 0$ and verify with DESMOS.',
            steps: [
              { label: 'Shortcut', content: '$D = -14$, $E = 8$. Center $= \\left(-\\frac{-14}{2}, -\\frac{8}{2}\\right) = (7, -4)$' },
              { label: 'Full verification', content: '$(x^2 - 14x + 49) + (y^2 + 8y + 16) = -1 + 49 + 16 = 64$. $(x - 7)^2 + (y + 4)^2 = 64$. Center $(7, -4)$.' },
              { label: 'DESMOS', content: 'Graph confirms center at $(7, -4)$, radius $= 8$.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Find the center of $x^2 + y^2 + 16x - 6y + 48 = 0$ using the shortcut.',
            answer: '$D = 16$, $E = -6$. Center $= \\left(-\\frac{16}{2}, -\\frac{-6}{2}\\right) = (-8, 3)$.',
          },
        ],
      },
    },
  },

  // ─── TANGENT LINES ────────────────────────────────────────────────

  32: {
    moduleId: 'circles',
    title: 'Tangent Lines to a Circle',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A tangent line touches a circle at exactly one point and is always perpendicular to the radius at that point.',
        blocks: [
          {
            type: 'text',
            content: 'A **tangent line** to a circle intersects the circle at exactly **one point**, called the **point of tangency**. The radius drawn to the point of tangency is **perpendicular** to the tangent line.',
          },
          {
            type: 'formula',
            label: 'Key Property',
            content: '$$\\text{radius} \\perp \\text{tangent at point of tangency}$$',
          },
          {
            type: 'keyInsight',
            content: 'This perpendicularity creates a **right angle**, which means a **right triangle** often appears. When you see a tangent on the SAT, look for the right triangle formed by the radius, the tangent segment, and the line from the center to an external point.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Tangent Line Slope',
            content: 'If the radius from center to tangent point has slope $m_r$, the tangent line has slope $m_t = -\\frac{1}{m_r}$ (negative reciprocal, since they are perpendicular).',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Tangent = Right Angle at Point of Tangency',
            content: 'Recognition cue: a tangent line touching a circle, often with an external point. First move: draw the radius to the tangent point and mark the $90°$ angle. This creates a right triangle — use the Pythagorean theorem.',
          },
          {
            type: 'trapCard',
            title: 'Right Angle at Wrong Point',
            wrong: 'Student assumes the right angle is at the external point, not at the tangent point.',
            correction: 'The $90°$ angle is always at the **point of tangency** (where radius meets tangent). The external point is a vertex of the triangle but not the right angle.',
          },
          {
            type: 'trapCard',
            title: 'Using Parallel Instead of Perpendicular',
            wrong: 'Student says the tangent has the same slope as the radius.',
            correction: 'The tangent is **perpendicular** to the radius: $m_{\\text{tangent}} = -\\frac{1}{m_{\\text{radius}}}$.',
          },
          {
            type: 'tip',
            content: 'For tangent-line equation questions: compute radius slope from center to tangent point, take the negative reciprocal for the tangent slope, then use point-slope form with the tangent point.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding a Tangent Line Equation',
            items: [
              'Identify the center $(h, k)$ and the point of tangency $(x_0, y_0)$.',
              'Compute the radius slope: $m_r = \\frac{y_0 - k}{x_0 - h}$.',
              'Tangent slope: $m_t = -\\frac{1}{m_r}$.',
              'Write the tangent line: $y - y_0 = m_t(x - x_0)$.',
            ],
          },
          {
            type: 'steps',
            title: 'Tangent Segment Length (External Point)',
            items: [
              'Draw the radius to the tangent point — mark $90°$.',
              'Identify the right triangle: legs are the radius ($r$) and the tangent segment ($t$); hypotenuse is the distance from center to external point ($d$).',
              'Apply Pythagorean theorem: $t^2 + r^2 = d^2$, so $t = \\sqrt{d^2 - r^2}$.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Using the Wrong Right Angle',
            wrong: 'Student assumes the right angle is at the external point $P$ instead of at the tangent point $T$.',
            correction: 'The $90°$ angle is **always at the point of tangency** (where the radius meets the tangent). $OT$ is a leg, not the hypotenuse.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting Negative Reciprocal',
            wrong: 'Radius slope $= \\frac{3}{4}$. Student writes tangent slope $= \\frac{4}{3}$.',
            correction: 'Perpendicular slopes are **negative** reciprocals: $m_t = -\\frac{4}{3}$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A circle has center $O$ and radius $5$. Point $P$ is $13$ units from $O$. A tangent from $P$ touches the circle at point $T$. Find $PT$.',
            steps: [
              { label: 'Set up', content: '$OT \\perp PT$ (radius $\\perp$ tangent), so $\\triangle OTP$ is a right triangle.' },
              { label: 'Known sides', content: '$OT = 5$ (radius), $OP = 13$ (given)' },
              { label: 'Pythagorean theorem', content: '$PT^2 + OT^2 = OP^2 \\Rightarrow PT^2 + 25 = 169 \\Rightarrow PT^2 = 144$' },
              { label: 'Answer', content: '$PT = 12$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Find the equation of the tangent line to the circle $x^2 + y^2 = 25$ at the point $(3, 4)$.',
            steps: [
              { label: 'Radius slope', content: 'From $(0,0)$ to $(3,4)$: $m_r = \\frac{4}{3}$' },
              { label: 'Tangent slope', content: '$m_t = -\\frac{3}{4}$' },
              { label: 'Point-slope form', content: '$y - 4 = -\\frac{3}{4}(x - 3)$' },
              { label: 'Simplify', content: '$y = -\\frac{3}{4}x + \\frac{9}{4} + 4 = -\\frac{3}{4}x + \\frac{25}{4}$' },
            ],
          },
        ],
      },
    },
  },

  33: {
    moduleId: 'circles',
    title: 'Tangent Line to a Circle Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A full tangent-line example: find the equation of a tangent to a circle at a given point by using the perpendicularity of the radius and tangent.',
        blocks: [
          {
            type: 'text',
            content: 'To write the equation of a tangent line, you need two things: the **point of tangency** (given) and the **slope** (derived from the radius slope via negative reciprocal).',
          },
          {
            type: 'keyInsight',
            content: 'The tangent line is perpendicular to the radius at the point of tangency. This gives you the slope. Combined with the tangent point, you can write the line equation using point-slope form.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Tangent Line Equation',
            content: 'Recognition cue: a circle equation and a point on the circle, with the question asking for the tangent line at that point. First move: find the radius slope (center to point), take the negative reciprocal, write point-slope form.',
          },
          {
            type: 'trapCard',
            title: 'Using Radius Slope as Tangent Slope',
            wrong: 'Radius slope $= 2$. Student writes tangent line with slope $2$.',
            correction: 'The tangent is perpendicular to the radius. Tangent slope $= -\\frac{1}{2}$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Tangent Line at a Given Point',
            items: [
              'Identify center $(h, k)$ from the circle equation.',
              'Compute radius slope: $m_r = \\frac{y_0 - k}{x_0 - h}$.',
              'Tangent slope: $m_t = -\\frac{1}{m_r}$.',
              'Write the equation: $y - y_0 = m_t(x - x_0)$.',
              'Convert to slope-intercept form if required.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Find the equation of the tangent line to $(x - 2)^2 + (y + 1)^2 = 50$ at the point $(7, 4)$.',
            steps: [
              { label: 'Center', content: '$(2, -1)$' },
              { label: 'Radius slope', content: '$m_r = \\frac{4 - (-1)}{7 - 2} = \\frac{5}{5} = 1$' },
              { label: 'Tangent slope', content: '$m_t = -\\frac{1}{1} = -1$' },
              { label: 'Point-slope form', content: '$y - 4 = -1(x - 7)$' },
              { label: 'Simplify', content: '$y = -x + 11$' },
              { label: 'Verify point on circle', content: '$(7-2)^2 + (4+1)^2 = 25 + 25 = 50$. Confirmed.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Find the tangent line to $x^2 + y^2 = 100$ at the point $(6, 8)$.',
            answer: 'Center $(0,0)$. Radius slope $= \\frac{8}{6} = \\frac{4}{3}$. Tangent slope $= -\\frac{3}{4}$. Equation: $y - 8 = -\\frac{3}{4}(x - 6)$, which simplifies to $y = -\\frac{3}{4}x + \\frac{25}{2}$.',
          },
        ],
      },
    },
  },

};
