export const circlesLessonTabs = {

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
            title: 'Vocabulary Trap',
            content: 'The SAT sometimes gives the diameter and labels it without emphasis. Always check: is the given value $r$ or $d$? Using $d$ where $r$ belongs (or vice versa) is the most common circle mistake.',
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
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A circular garden has a radius of $6$ meters. What is its area?',
            steps: [
              { label: 'Apply formula', content: '$A = \\pi(6)^2 = 36\\pi$ m²' },
              { label: 'Approximate', content: '$36\\pi \\approx 113.1$ m² (if a decimal is needed)' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Circle A has radius $3$ and Circle B has radius $9$. How many times greater is the area of Circle B?',
            steps: [
              { label: 'Areas', content: '$A_A = 9\\pi$, $A_B = 81\\pi$' },
              { label: 'Ratio', content: '$\\frac{81\\pi}{9\\pi} = 9$ times greater' },
              { label: 'Shortcut', content: 'Radius tripled ($\\times 3$), so area increases by $3^2 = 9$.' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Forgetting to Square',
            wrong: 'Student writes $A = \\pi(6) = 6\\pi$ instead of $\\pi(6)^2 = 36\\pi$.',
            correction: 'Area requires $r^{\\mathbf{2}}$. Always square the radius before multiplying by $\\pi$.',
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
            content: 'Unlike area, circumference scales **linearly** with the radius. Double the radius → double the circumference.',
          },
          {
            type: 'keyInsight',
            content: 'The number $\\pi$ is literally defined as the ratio $\\frac{C}{d}$ — circumference divided by diameter. That\'s why $C = \\pi d$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A circular track has a diameter of $50$ meters. What is the distance around the track?',
            steps: [
              { label: 'Apply formula', content: '$C = \\pi d = 50\\pi \\approx 157.1$ meters' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A wheel has a circumference of $24\\pi$ inches. What is the radius?',
            steps: [
              { label: 'Set up', content: '$24\\pi = 2\\pi r$' },
              { label: 'Solve', content: '$r = \\frac{24\\pi}{2\\pi} = 12$ inches' },
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Connections',
        blocks: [
          {
            type: 'tip',
            content: 'The SAT loves "how far does a wheel travel" problems. One full rotation $=$ one circumference. If a wheel of radius $r$ makes $n$ rotations, total distance $= n \\times 2\\pi r$.',
          },
        ],
      },
    },
  },

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
            content: 'An arc is a piece of the circle\'s edge. Its length is proportional to the central angle $\\theta$ that "opens up" to it. A $90°$ arc is $\\frac{1}{4}$ of the circumference. A $180°$ arc (semicircle) is half.',
          },
          {
            type: 'keyInsight',
            content: 'The fraction $\\frac{\\theta}{360}$ appears in both arc length and sector area. Master this fraction and you unlock both formulas instantly.',
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
              'Identify the central angle $\\theta$ (in degrees)',
              'Find the radius $r$ (convert from diameter if needed)',
              'Compute: $\\ell = \\frac{\\theta}{360} \\times 2\\pi r$',
              'Simplify — leave in terms of $\\pi$ unless told otherwise',
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
            problem: 'A circle has radius $10$. What is the length of an arc intercepted by a $72°$ central angle?',
            steps: [
              { label: 'Fraction', content: '$\\frac{72}{360} = \\frac{1}{5}$' },
              { label: 'Circumference', content: '$2\\pi(10) = 20\\pi$' },
              { label: 'Arc length', content: '$\\frac{1}{5} \\times 20\\pi = 4\\pi$' },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A $120°$ arc on a circle with radius $9$ has what length?',
            answer: '$\\frac{120}{360} \\times 2\\pi(9) = \\frac{1}{3} \\times 18\\pi = 6\\pi$',
          },
        ],
      },
    },
  },

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
            content: 'The formula follows the same logic as arc length: take the full quantity (here, total area $\\pi r^2$) and multiply by the fraction $\\frac{\\theta}{360}$.',
          },
          {
            type: 'comparison',
            title: 'Arc Length vs. Sector Area',
            items: [
              { label: 'Arc Length', content: '$\\frac{\\theta}{360} \\times 2\\pi r$\n\nFraction of **circumference**' },
              { label: 'Sector Area', content: '$\\frac{\\theta}{360} \\times \\pi r^2$\n\nFraction of **area**' },
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
              { label: 'Sector area', content: '$\\frac{5}{12} \\times 400\\pi = \\frac{500\\pi}{3} \\approx 523.6$ ft²' },
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
            correction: 'Arc length uses $2\\pi r$ (circumference). Sector **area** uses $\\pi r^2$ (full area). Check what the question asks: length or area.',
          },
        ],
      },
    },
  },

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
            content: 'The center is $(h, k)$ and the radius is $r$. Notice the **subtraction** signs in the formula — this means the signs in the equation are **opposite** the coordinates of the center.',
          },
          {
            type: 'table',
            title: 'Reading Center and Radius',
            headers: ['Equation', 'Center', 'Radius'],
            rows: [
              ['$(x - 3)^2 + (y - 5)^2 = 16$', '$(3, 5)$', '$r = \\sqrt{16} = 4$'],
              ['$(x + 2)^2 + (y - 1)^2 = 9$', '$(-2, 1)$', '$r = \\sqrt{9} = 3$'],
              ['$x^2 + y^2 = 25$', '$(0, 0)$', '$r = \\sqrt{25} = 5$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'The right side of the equation is $r^{\\mathbf{2}}$, not $r$. If the equation says $= 49$, the radius is $7$, not $49$. Always take the square root.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Sign Error on the Center',
            wrong: '$(x + 4)^2 + (y - 3)^2 = 25$ → center is $(4, 3)$.',
            correction: 'The form is $(x - h)^2$, so $(x + 4)^2 = (x - (-4))^2$ means $h = -4$. Center $= (-4, 3)$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Square Root',
            wrong: '$(x - 1)^2 + (y + 2)^2 = 36$ → radius $= 36$.',
            correction: 'The equation gives $r^2 = 36$, so $r = \\sqrt{36} = 6$.',
          },
        ],
      },
    },
  },

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
        ],
      },
      workedExamples: {
        title: 'Worked Example',
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
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Common SAT Setup',
            content: '"A circle is shifted $3$ units to the left and $4$ units down. Which equation represents the new circle?" — Subtract $3$ from $h$, subtract $4$ from $k$, keep $r^2$ the same.',
          },
          {
            type: 'tip',
            content: 'Translations **never change** the radius. If the question only shifts the circle, the right side of the equation stays the same.',
          },
        ],
      },
    },
  },

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
        ],
      },
      workedExamples: {
        title: 'Worked Example',
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
          {
            type: 'checkpointQuestion',
            question: 'What is the domain of $x^2 + y^2 = 100$?',
            answer: 'Center is $(0, 0)$, radius $= 10$. Domain $= [0 - 10, 0 + 10] = [-10, 10]$.',
          },
        ],
      },
    },
  },

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
        ],
      },
      methods: {
        title: 'Step-by-Step Method',
        blocks: [
          {
            type: 'steps',
            title: 'General Form → Standard Form',
            items: [
              'Group $x$-terms together and $y$-terms together; move the constant to the right side',
              'For the $x$-group: take half the coefficient of $x$, square it, add to **both** sides',
              'For the $y$-group: take half the coefficient of $y$, square it, add to **both** sides',
              'Factor each group as a perfect square; simplify the right side',
              'Read off center $(h, k)$ and $r = \\sqrt{\\text{right side}}$',
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
            wrong: 'After completing the square, the right side is negative, e.g. $(x-1)^2 + (y+2)^2 = -3$.',
            correction: 'If $r^2$ is negative, **no circle exists** — check your arithmetic. $r^2$ must be positive.',
          },
        ],
      },
    },
  },

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
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Tangent Line Problems',
            items: [
              'Draw the radius to the point of tangency — mark it perpendicular ($90°$)',
              'Identify the right triangle formed (radius, tangent segment, and line to external point)',
              'Use the **Pythagorean theorem** to find missing lengths',
              'If asked for the tangent line equation, use the slope relationship: tangent slope $= -\\frac{1}{\\text{radius slope}}$',
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
            problem: 'A circle has center $O$ and radius $5$. Point $P$ is $13$ units from $O$. A tangent from $P$ touches the circle at point $T$. Find $PT$.',
            steps: [
              { label: 'Set up', content: '$OT \\perp PT$ (radius $\\perp$ tangent), so $\\triangle OTP$ is a right triangle.' },
              { label: 'Known sides', content: '$OT = 5$ (radius), $OP = 13$ (given)' },
              { label: 'Pythagorean theorem', content: '$PT^2 + OT^2 = OP^2$\n$PT^2 + 25 = 169$\n$PT^2 = 144$' },
              { label: 'Answer', content: '$PT = 12$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Find the equation of the tangent line to the circle $x^2 + y^2 = 25$ at the point $(3, 4)$.',
            steps: [
              { label: 'Radius slope', content: 'Radius from $(0,0)$ to $(3,4)$: slope $= \\frac{4}{3}$' },
              { label: 'Tangent slope', content: 'Perpendicular: $m = -\\frac{3}{4}$' },
              { label: 'Point-slope form', content: '$y - 4 = -\\frac{3}{4}(x - 3)$' },
              { label: 'Simplify', content: '$y = -\\frac{3}{4}x + \\frac{9}{4} + 4 = -\\frac{3}{4}x + \\frac{25}{4}$' },
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
        ],
      },
    },
  },

};
