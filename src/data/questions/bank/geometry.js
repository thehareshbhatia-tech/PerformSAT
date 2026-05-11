export const geometryBank = [
  // ── EASY (18 questions) ────────────────────────────────────────────

  {
    id: 'bank-geo-001',
    domain: 'geometry',
    skills: ['triangle-angle-sum'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'In triangle $PQR$, the measure of angle $P$ is $47°$ and the measure of angle $Q$ is $68°$. What is the measure, in degrees, of angle $R$?',
    choices: [
      // distractor: subtracts only one of the given angles from 180
      { id: 'A', text: '$55°$' },
      { id: 'B', text: '$65°$' },
      // distractor: averages the two given angles
      { id: 'C', text: '$75°$' },
      // distractor: gives the supplement of the correct answer (180 - 65)
      { id: 'D', text: '$115°$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Subtract both known angles from $180°$: $180 - 47 - 68 = 65$.\n\n**The Full Solution:**\nThe three interior angles of any triangle sum to $180°$. With angle $P = 47°$ and angle $Q = 68°$:\n$\\text{angle } R = 180° - 47° - 68° = 65°$.\n\nVerification: $47 + 68 + 65 = 180$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — subtracts only $68$ from $180$ minus a guess, never finishing the sum.\n* Choice C: "wrong base" — averages $47$ and $68$ instead of using the angle-sum identity.\n* Choice D: "applies the inverse operation" — gives $180 - 65 = 115$, the supplement of the correct angle.\n\n**Test Day Takeaway:** When a triangle problem gives two angles, the third is always $180$ minus their sum. The right answer almost never appears as a supplement in the choices.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-computation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-002',
    domain: 'geometry',
    skills: ['circle-area'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A circular garden has a radius of $6$ feet. What is the area, in square feet, of the garden?',
    choices: [
      // distractor: uses circumference formula 2*pi*r instead of area
      { id: 'A', text: '$12\\pi$' },
      { id: 'B', text: '$36\\pi$' },
      // distractor: doubles the area (uses 2*pi*r^2)
      { id: 'C', text: '$72\\pi$' },
      // distractor: uses r as the area directly
      { id: 'D', text: '$6\\pi$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Circle Area from Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $A = \\pi r^2 = \\pi(6)^2 = 36\\pi$.\n\n**The Full Solution:**\nThe area of a circle is $A = \\pi r^2$ (Reference Sheet formula). With $r = 6$ feet:\n$A = \\pi(6)^2 = 36\\pi$ square feet.\n\nVerification: a $6$-foot-radius circle has diameter $12$ feet, so it sits inside a $12 \\times 12$ square of area $144$. $36\\pi \\approx 113$, which is comfortably less than $144$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — uses circumference $C = 2\\pi r = 12\\pi$ instead of area.\n* Choice C: "off-by-one" — doubles the area (uses $2\\pi r^2$).\n* Choice D: "wrong base" — treats $r$ itself as the area times $\\pi$.\n\n**Test Day Takeaway:** Area is $\\pi r^2$; circumference is $2\\pi r$. Both formulas live on the Reference Sheet, but the SAT loves the swap. Always square the radius for area.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-formula',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-003',
    domain: 'geometry',
    skills: ['pythagorean-theorem'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A right triangle has legs of length $9$ and $12$. What is the length of the hypotenuse?',
    diagram: {
      type: 'rightTriangle',
      params: {
        sideLabels: ['9', '', '12'],
        rightAngleVertex: 1,
      },
    },
    choices: [
      { id: 'A', text: '$15$' },
      // distractor: adds the legs, ignoring the Pythagorean theorem
      { id: 'B', text: '$21$' },
      // distractor: subtracts the squares instead of adding
      { id: 'C', text: '$\\sqrt{63}$' },
      // distractor: averages the two legs
      { id: 'D', text: '$10.5$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Pythagorean Theorem**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Recognize $9$-$12$-$15$ as a $3$-$4$-$5$ triple scaled by $3$.\n\n**The Full Solution:**\nFor a right triangle with legs $a$ and $b$ and hypotenuse $c$: $c^2 = a^2 + b^2$.\n$c^2 = 9^2 + 12^2 = 81 + 144 = 225$, so $c = \\sqrt{225} = 15$.\n\nVerification: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — adds the legs $9 + 12 = 21$ instead of using the theorem.\n* Choice C: "sign error" — subtracts the squares: $\\sqrt{144 - 81} = \\sqrt{63}$.\n* Choice D: "wrong base" — averages the two legs.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$, and their multiples. The SAT uses them constantly to save time.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-computation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-004',
    domain: 'geometry',
    skills: ['circumference'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A bicycle wheel has a diameter of $26$ inches. What is the circumference, in inches, of the wheel?',
    choices: [
      // distractor: uses radius instead of diameter (26/2 = 13)
      { id: 'A', text: '$13\\pi$' },
      { id: 'B', text: '$26\\pi$' },
      // distractor: uses area formula pi*r^2 with d as r
      { id: 'C', text: '$169\\pi$' },
      // distractor: doubles the diameter
      { id: 'D', text: '$52\\pi$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Circumference from Diameter**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $C = \\pi d = \\pi(26) = 26\\pi$.\n\n**The Full Solution:**\nThe circumference of a circle is $C = \\pi d$ where $d$ is the diameter (equivalently, $C = 2\\pi r$). With $d = 26$ inches:\n$C = \\pi(26) = 26\\pi$ inches.\n\nVerification: $26\\pi \\approx 81.7$ inches, which is reasonable for a bike wheel \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — divides the diameter by $2$ to get a radius, then multiplies by $\\pi$ instead of $2\\pi$.\n* Choice C: "wrong formula" — uses $\\pi r^2$ (area) with $d$ as $r$.\n* Choice D: "applies the inverse operation" — doubles the diameter.\n\n**Test Day Takeaway:** Read carefully — diameter and radius look similar but produce different formulas. $C = \\pi d$ is faster than $C = 2\\pi r$ when the diameter is given directly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-formula',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-005',
    domain: 'geometry',
    skills: ['volume-prism'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A rectangular storage container has a length of $8$ cm, a width of $5$ cm, and a height of $3$ cm. What is the volume, in cubic centimeters, of the container?',
    choices: [
      { id: 'A', text: '$120$' },
      // distractor: computes surface area (2lw + 2lh + 2wh)
      { id: 'B', text: '$158$' },
      // distractor: multiplies just length and width
      { id: 'C', text: '$40$' },
      // distractor: multiplies width and height only
      { id: 'D', text: '$16$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Rectangular Prism Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $V = l \\cdot w \\cdot h = 8 \\cdot 5 \\cdot 3 = 120$.\n\n**The Full Solution:**\nThe volume of a rectangular prism is $V = lwh$ (Reference Sheet formula). With $l = 8$, $w = 5$, $h = 3$:\n$V = (8)(5)(3) = 120$ cubic centimeters.\n\nVerification: a $2 \\times 2 \\times 2$ box has volume $8$; a $4 \\times 5 \\times 6$ box has volume $120$. Our box fits comfortably in that range \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — computes surface area $2(lw + lh + wh) = 2(40 + 24 + 15) = 158$.\n* Choice C: "stops one step early" — multiplies length and width only, forgetting height.\n* Choice D: "wrong base" — multiplies width and height only.\n\n**Test Day Takeaway:** Volume always has three dimensions multiplied together (units like cm³). If you forget a dimension, the units give it away.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-formula',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-006',
    domain: 'geometry',
    skills: ['degrees-to-radians'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What is $90°$ expressed in radians?',
    choices: [
      // distractor: 30° in radians
      { id: 'A', text: '$\\frac{\\pi}{6}$' },
      // distractor: 45° in radians
      { id: 'B', text: '$\\frac{\\pi}{4}$' },
      { id: 'C', text: '$\\frac{\\pi}{2}$' },
      // distractor: 180° in radians
      { id: 'D', text: '$\\pi$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Degrees to Radians**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $90°$ is a quarter turn; a full turn is $2\\pi$ radians. So $90°$ is $\\frac{2\\pi}{4} = \\frac{\\pi}{2}$.\n\n**The Full Solution:**\nThe conversion factor is $\\frac{\\pi \\text{ radians}}{180°}$. Multiply:\n$90° \\times \\frac{\\pi}{180°} = \\frac{90\\pi}{180} = \\frac{\\pi}{2}$ radians.\n\nVerification: $\\frac{\\pi}{2} \\times \\frac{180°}{\\pi} = 90°$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — gives $30°$ in radians ($\\frac{\\pi}{6}$).\n* Choice B: "wrong base" — gives $45°$ in radians ($\\frac{\\pi}{4}$).\n* Choice D: "off-by-one" — gives $180°$ in radians ($\\pi$), twice the correct value.\n\n**Test Day Takeaway:** Memorize the unit-circle landmarks: $0$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$, $\\frac{\\pi}{2}$, $\\pi$, $\\frac{3\\pi}{2}$, $2\\pi$ map to $0°$, $30°$, $45°$, $60°$, $90°$, $180°$, $270°$, $360°$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'unit-conversion',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-007',
    domain: 'geometry',
    skills: ['triangle-area'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A triangle has a base of $14$ meters and a height of $9$ meters. What is the area, in square meters, of the triangle?',
    correctAnswer: '63',
    explanation: '**SAT Pattern: Triangle Area**\n\n**The correct answer is $63$.**\n\n**The Fast Way (~5s):** $A = \\frac{1}{2}bh = \\frac{1}{2}(14)(9) = 63$.\n\n**The Full Solution:**\nThe area of a triangle is $A = \\frac{1}{2}bh$ (Reference Sheet formula). With $b = 14$ m and $h = 9$ m:\n$A = \\frac{1}{2}(14)(9) = \\frac{126}{2} = 63$ square meters.\n\nVerification: a parallelogram with the same base and height would have area $bh = 126$, exactly twice the triangle area \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the $\\frac{1}{2}$ factor — gives $126$, twice the correct answer.\n* Computing $b + h$ instead of $b \\cdot h$.\n* Squaring the result by accident.\n\n**Test Day Takeaway:** Triangle area = $\\frac{1}{2}$ × base × height. The height must be perpendicular to the base, not a slant side.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-formula',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-008',
    domain: 'geometry',
    skills: ['radians-to-degrees'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'An angle has a measure of $\\frac{\\pi}{3}$ radians. What is the measure of this angle in degrees?',
    choices: [
      // distractor: gives π/6 in degrees
      { id: 'A', text: '$30°$' },
      // distractor: gives π/4 in degrees
      { id: 'B', text: '$45°$' },
      { id: 'C', text: '$60°$' },
      // distractor: doubles the correct answer (2π/3 in degrees)
      { id: 'D', text: '$120°$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Radians to Degrees**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Recognize $\\frac{\\pi}{3}$ as a unit-circle landmark: $\\frac{\\pi}{3}$ radians $= 60°$.\n\n**The Full Solution:**\nMultiply by the conversion factor $\\frac{180°}{\\pi \\text{ radians}}$:\n$\\frac{\\pi}{3} \\times \\frac{180°}{\\pi} = \\frac{180°}{3} = 60°$.\n\nVerification: $60° \\times \\frac{\\pi}{180°} = \\frac{\\pi}{3}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — confuses $\\frac{\\pi}{3}$ with $\\frac{\\pi}{6}$ ($30°$).\n* Choice B: "wrong base" — confuses $\\frac{\\pi}{3}$ with $\\frac{\\pi}{4}$ ($45°$).\n* Choice D: "off-by-one" — doubles the correct answer (would be $\\frac{2\\pi}{3}$).\n\n**Test Day Takeaway:** $\\frac{\\pi}{n}$ radians has a degree measure of $\\frac{180}{n}$. So $\\frac{\\pi}{2} = 90°$, $\\frac{\\pi}{3} = 60°$, $\\frac{\\pi}{4} = 45°$, $\\frac{\\pi}{6} = 30°$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'unit-conversion',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-009',
    domain: 'geometry',
    skills: ['triangle-types'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A triangle has side lengths $7$, $7$, and $10$. Which of the following best classifies this triangle?',
    choices: [
      // distractor: requires all three sides equal
      { id: 'A', text: 'Equilateral' },
      { id: 'B', text: 'Isosceles' },
      // distractor: requires all three sides different
      { id: 'C', text: 'Scalene' },
      // distractor: would require 7² + 7² = 10² (49+49=98≠100)
      { id: 'D', text: 'Right' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Triangle Classification by Sides**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Two sides equal ($7$ and $7$), the third different ($10$) — that\'s isosceles by definition.\n\n**The Full Solution:**\nA triangle is **equilateral** if all three sides are equal, **isosceles** if exactly two sides are equal, and **scalene** if all three sides are different. With sides $7$, $7$, $10$, exactly two sides match, so the triangle is isosceles.\n\nVerification: a triangle would be right only if $7^2 + 7^2 = 10^2$, i.e., $98 = 100$. That fails, so it is not right \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — equilateral needs all three sides equal, not just two.\n* Choice C: "applies the inverse operation" — scalene needs all three sides different.\n* Choice D: "wrong formula" — would require $7^2 + 7^2 = 10^2$, but $98 \\neq 100$.\n\n**Test Day Takeaway:** Equilateral implies isosceles, but isosceles does not imply equilateral. When sides match the isosceles pattern, choose isosceles unless all three are equal.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'classification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-010',
    domain: 'geometry',
    skills: ['special-right-triangles'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'In a $45°$-$45°$-$90°$ triangle, each leg has length $5$. What is the length of the hypotenuse?',
    diagram: {
      type: 'rightTriangle',
      params: {
        labels: ['45°', '', '45°'],
        sideLabels: ['5', '', '5'],
        rightAngleVertex: 1,
      },
    },
    choices: [
      // distractor: gives the leg length instead of the hypotenuse
      { id: 'A', text: '$5$' },
      { id: 'B', text: '$5\\sqrt{2}$' },
      // distractor: applies the 30-60-90 long-leg ratio
      { id: 'C', text: '$5\\sqrt{3}$' },
      // distractor: doubles the leg
      { id: 'D', text: '$10$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: 45-45-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** In a $45$-$45$-$90$ triangle the hypotenuse is the leg times $\\sqrt{2}$: $5\\sqrt{2}$.\n\n**The Full Solution:**\nA $45$-$45$-$90$ triangle has leg ratios $1 : 1 : \\sqrt{2}$ where the hypotenuse corresponds to $\\sqrt{2}$. Multiply each ratio by $5$ (the leg length):\nhypotenuse $= 5\\sqrt{2}$.\n\nVerification: $5^2 + 5^2 = 25 + 25 = 50 = (5\\sqrt{2})^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — reports the leg as the hypotenuse.\n* Choice C: "wrong formula" — uses the $30$-$60$-$90$ long-leg ratio ($\\sqrt{3}$) instead of the $45$-$45$-$90$ hypotenuse ratio ($\\sqrt{2}$).\n* Choice D: "off-by-one" — doubles the leg, which would only be correct for a $30$-$60$-$90$ hypotenuse with the leg as the short side.\n\n**Test Day Takeaway:** $45$-$45$-$90$: legs equal, hypotenuse $= $ leg $\\times \\sqrt{2}$. $30$-$60$-$90$: short leg, long leg $= $ short $\\times \\sqrt{3}$, hypotenuse $= $ short $\\times 2$. Both are on the Reference Sheet.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'special-triangle-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-011',
    domain: 'geometry',
    skills: ['circle-parts'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A chord of a circle passes through the center of the circle. What is the special name for this chord?',
    choices: [
      // distractor: radius is half the diameter, not a chord through the center
      { id: 'A', text: 'Radius' },
      { id: 'B', text: 'Diameter' },
      // distractor: secant is any line crossing the circle, not specifically through center
      { id: 'C', text: 'Secant' },
      // distractor: tangent touches the circle at one point, doesn't pass through
      { id: 'D', text: 'Tangent' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Circle Vocabulary**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** A chord that passes through the center is, by definition, the diameter.\n\n**The Full Solution:**\nA **chord** is any line segment whose endpoints lie on the circle. The **diameter** is the longest chord, and it passes through the center. The **radius** is half the diameter and connects the center to the circle. A **tangent** touches the circle at exactly one point.\n\nVerification: a diameter splits the circle into two semicircles and has length $2r$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — radius connects the center to the circle, not two points on the circle.\n* Choice C: "wrong formula" — secant is the full line that contains a chord, not the chord itself.\n* Choice D: "applies the inverse operation" — tangent never enters the interior.\n\n**Test Day Takeaway:** Diameter $=$ longest chord $= 2 \\times $ radius. Every diameter is a chord, but not every chord is a diameter.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'definition-recall',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-012',
    domain: 'geometry',
    skills: ['soh-cah-toa'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'In a right triangle, the side opposite angle $\\theta$ has length $4$ and the hypotenuse has length $10$. What is $\\sin(\\theta)$?',
    diagram: {
      type: 'rightTriangle',
      params: {
        labels: ['θ', '', ''],
        sideLabels: ['', '10', '4'],
        rightAngleVertex: 1,
      },
    },
    choices: [
      { id: 'A', text: '$\\frac{2}{5}$' },
      // distractor: inverts the ratio (hypotenuse over opposite)
      { id: 'B', text: '$\\frac{5}{2}$' },
      // distractor: gives cos(θ) = adjacent/hypotenuse with adjacent = √84
      { id: 'C', text: '$\\frac{\\sqrt{84}}{10}$' },
      // distractor: gives tan(θ) = opposite/adjacent
      { id: 'D', text: '$\\frac{4}{\\sqrt{84}}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: SOH-CAH-TOA**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Sine is opposite over hypotenuse: $\\frac{4}{10} = \\frac{2}{5}$.\n\n**The Full Solution:**\nThe sine of an angle in a right triangle is\n$\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{4}{10} = \\frac{2}{5}$.\n\nVerification: $\\sin(\\theta) \\leq 1$ always, and $\\frac{2}{5} = 0.4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — flips the ratio (hypotenuse $/$ opposite $= \\csc \\theta$), giving a value $> 1$ which sine can never produce.\n* Choice C: "wrong formula" — gives $\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$ with adjacent $= \\sqrt{100 - 16} = \\sqrt{84}$.\n* Choice D: "wrong formula" — gives $\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}}$.\n\n**Test Day Takeaway:** Sine of any angle in a right triangle is at most $1$. Any answer greater than $1$ for $\\sin$ or $\\cos$ is automatically wrong.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-trig-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-013',
    domain: 'geometry',
    skills: ['triangle-inequality'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Which of the following sets of three lengths could form a triangle?',
    choices: [
      // distractor: 2 + 3 = 5 < 8, fails triangle inequality
      { id: 'A', text: '$2, 3, 8$' },
      // distractor: 4 + 4 = 8 < 9, fails triangle inequality
      { id: 'B', text: '$4, 4, 9$' },
      { id: 'C', text: '$5, 7, 11$' },
      // distractor: 1 + 2 = 3, degenerate (line segment, not a triangle)
      { id: 'D', text: '$1, 2, 3$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Triangle Inequality**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** For each set, check whether the two shorter sides sum to MORE than the longest side.\n\n**The Full Solution:**\nThe Triangle Inequality says that for any triangle with sides $a$, $b$, $c$, the sum of any two sides must exceed the third:\n$a + b > c$, $a + c > b$, $b + c > a$.\n\nFor choice C ($5, 7, 11$): $5 + 7 = 12 > 11$ \\checkmark, $5 + 11 > 7$ \\checkmark, $7 + 11 > 5$ \\checkmark. All three pass.\n\n**Why the wrong answers are tempting:**\n* Choice A: "fails inequality" — $2 + 3 = 5 < 8$.\n* Choice B: "fails inequality" — $4 + 4 = 8 < 9$.\n* Choice D: "degenerate" — $1 + 2 = 3$ exactly, which collapses the triangle into a straight line.\n\n**Test Day Takeaway:** You only need to check the smallest two sides against the largest. If their sum is greater than the largest, the triangle exists. Equality gives a degenerate (flat) triangle.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'constraint-check',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-014',
    domain: 'geometry',
    skills: ['volume-sphere'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A sphere has a radius of $3$ inches. What is its volume?',
    choices: [
      { id: 'A', text: '$36\\pi$ cubic inches' },
      // distractor: cubes the radius without the (4/3) factor
      { id: 'B', text: '$27\\pi$ cubic inches' },
      // distractor: writes 36 as (108/3) — same value but unsimplified
      { id: 'C', text: '$\\frac{108\\pi}{3}$ cubic inches' },
      // distractor: omits the (1/3) from (4/3) and uses 4πr³ instead
      { id: 'D', text: '$108\\pi$ cubic inches' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Sphere Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(27) = 36\\pi$.\n\n**The Full Solution:**\nThe volume of a sphere is $V = \\frac{4}{3}\\pi r^3$ (Reference Sheet formula). With $r = 3$ in:\n$V = \\frac{4}{3}\\pi(3)^3 = \\frac{4}{3}\\pi(27) = \\frac{108\\pi}{3} = 36\\pi$ cubic inches.\n\nVerification: $36\\pi \\approx 113$ cubic inches, which is reasonable for a sphere of radius $3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — uses $\\pi r^3$ without the $\\frac{4}{3}$ factor.\n* Choice C: "unsimplified" — numerically correct but the SAT expects simplified form.\n* Choice D: "off-by-one" — uses $4\\pi r^3$, forgetting the divide-by-$3$.\n\n**Test Day Takeaway:** Sphere volume formula is $\\frac{4}{3}\\pi r^3$. The $\\frac{4}{3}$ factor is easy to drop or invert under time pressure. Always simplify; the SAT lists only simplified forms as the correct answer when both forms are present.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-formula',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-015',
    domain: 'geometry',
    skills: ['radian-measure-understanding'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'How many radians are in a full rotation around a circle?',
    choices: [
      // distractor: gives half a rotation
      { id: 'A', text: '$\\pi$' },
      { id: 'B', text: '$2\\pi$' },
      // distractor: gives the degree measure of a full rotation
      { id: 'C', text: '$360$' },
      // distractor: gives a quarter rotation
      { id: 'D', text: '$\\frac{\\pi}{2}$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Radian Measure of a Full Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** A full rotation is $360°$, which equals $2\\pi$ radians by definition.\n\n**The Full Solution:**\nOne complete rotation around a circle equals $360°$. Converting:\n$360° \\times \\frac{\\pi}{180°} = 2\\pi$ radians.\n\nThis is also the definition of radian measure: the angle of a full circle is the circumference divided by the radius, which is $\\frac{2\\pi r}{r} = 2\\pi$.\n\nVerification: $2\\pi$ radians $\\times \\frac{180°}{\\pi} = 360°$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "off-by-one" — gives half a rotation ($180°$).\n* Choice C: "wrong units" — confuses degree measure with radian measure.\n* Choice D: "wrong base" — gives a quarter rotation ($90°$).\n\n**Test Day Takeaway:** $2\\pi$ radians $= 360°$. Memorize this and you can convert any radian-degree pair on the fly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'definition-recall',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-016',
    domain: 'geometry',
    skills: ['circle-equation'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Which equation represents a circle with center $(2, -3)$ and radius $4$?',
    choices: [
      { id: 'A', text: '$(x - 2)^2 + (y + 3)^2 = 16$' },
      // distractor: flips both signs for the center
      { id: 'B', text: '$(x + 2)^2 + (y - 3)^2 = 16$' },
      // distractor: uses r instead of r² on the right side
      { id: 'C', text: '$(x - 2)^2 + (y + 3)^2 = 4$' },
      // distractor: uses (y - 3) instead of (y - (-3)) = (y + 3)
      { id: 'D', text: '$(x - 2)^2 + (y - 3)^2 = 16$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Circle Equation Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Standard form is $(x - h)^2 + (y - k)^2 = r^2$. Plug in $h = 2$, $k = -3$, $r = 4$: $(x - 2)^2 + (y - (-3))^2 = 16$, i.e., $(x - 2)^2 + (y + 3)^2 = 16$.\n\n**The Full Solution:**\nA circle with center $(h, k)$ and radius $r$ has equation $(x - h)^2 + (y - k)^2 = r^2$. With center $(2, -3)$:\n$(x - 2)^2 + (y - (-3))^2 = 4^2$\n$(x - 2)^2 + (y + 3)^2 = 16$.\n\nVerification: at the center $(2, -3)$: $(2-2)^2 + (-3+3)^2 = 0$, which is the squared distance from the center to itself \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — flips both signs, giving center $(-2, 3)$.\n* Choice C: "stops one step early" — leaves $r = 4$ instead of $r^2 = 16$ on the right side.\n* Choice D: "sign error" — writes $(y - 3)$ instead of $(y - (-3)) = (y + 3)$.\n\n**Test Day Takeaway:** The signs in the equation are OPPOSITE to the center coordinates. Center $(h, k) = (2, -3)$ produces $(x - 2)^2 + (y - (-3))^2 = (x - 2)^2 + (y + 3)^2$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'standard-form-identification',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-017',
    domain: 'geometry',
    skills: ['tangent-lines'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A line is tangent to a circle at point $T$. If a radius is drawn to point $T$, what is the measure of the angle formed between the radius and the tangent line?',
    choices: [
      // distractor: 45° is a common geometric angle but not the tangent-radius relation
      { id: 'A', text: '$45°$' },
      // distractor: 60° is another common angle but not this one
      { id: 'B', text: '$60°$' },
      { id: 'C', text: '$90°$' },
      // distractor: 180° would mean the tangent contains the radius
      { id: 'D', text: '$180°$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Tangent-Radius Perpendicularity**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** A tangent is always perpendicular to the radius at the point of tangency, so the angle is $90°$.\n\n**The Full Solution:**\nThe defining geometric property of a tangent line is that it touches the circle at exactly one point and is perpendicular to the radius drawn to that point. So the angle between the tangent and the radius at the point of tangency is $90°$.\n\nVerification: if the tangent were not perpendicular, it would either cross the circle (becoming a secant) or miss the circle entirely \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — $45°$ is a common geometric angle but unrelated to tangent-radius geometry.\n* Choice B: "wrong base" — $60°$ similarly.\n* Choice D: "applies the inverse operation" — would mean the tangent and radius are collinear (the tangent contains the radius), which is impossible.\n\n**Test Day Takeaway:** Tangent perpendicular to radius is the most-tested circle theorem on the SAT. Whenever a tangent and a radius meet at the same point, mark a right angle there.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'definition-recall',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-018',
    domain: 'geometry',
    skills: ['volume-pyramid-cone'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A cone has a radius of $3$ cm and a height of $7$ cm. What is the volume, in cubic centimeters, of the cone? (Give your answer in terms of $\\pi$ as a single number times $\\pi$; enter just the number.)',
    correctAnswer: '21',
    explanation: '**SAT Pattern: Cone Volume**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~10s):** $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(9)(7) = 21\\pi$. The coefficient of $\\pi$ is $21$.\n\n**The Full Solution:**\nThe volume of a cone is $V = \\frac{1}{3}\\pi r^2 h$ (Reference Sheet formula). With $r = 3$ cm and $h = 7$ cm:\n$V = \\frac{1}{3}\\pi(3)^2(7) = \\frac{1}{3}\\pi(9)(7) = \\frac{63\\pi}{3} = 21\\pi$ cubic centimeters.\n\nThe question asks for the coefficient of $\\pi$, which is $21$.\n\nVerification: a cylinder with the same radius and height would have volume $\\pi r^2 h = 63\\pi$. A cone is one-third of that: $21\\pi$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the $\\frac{1}{3}$ factor — gives $63$, the cylinder volume.\n* Forgetting to square the radius — gives $7$.\n* Reporting $21\\pi$ as the answer instead of just $21$ (the question asks for the coefficient).\n\n**Test Day Takeaway:** Cone volume = $\\frac{1}{3}$ × cylinder volume with the same base and height. The $\\frac{1}{3}$ appears for cones AND pyramids; it is the most-forgotten factor in geometry on the SAT.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-formula',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── MEDIUM (27 questions) ──────────────────────────────────────────

  {
    id: 'bank-geo-019',
    domain: 'geometry',
    skills: ['pythagorean-theorem'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A 17-foot ladder leans against a wall. The base of the ladder is $8$ feet from the wall. How high up the wall, in feet, does the ladder reach?',
    diagram: {
      type: 'rightTriangle',
      params: {
        sideLabels: ['', '17', '8'],
        rightAngleVertex: 1,
      },
    },
    choices: [
      // distractor: subtracts 8 from 17 directly without using Pythagoras
      { id: 'A', text: '$9$' },
      { id: 'B', text: '$15$' },
      // distractor: adds the squares instead of subtracting
      { id: 'C', text: '$\\sqrt{353}$' },
      // distractor: estimates by halving the ladder length
      { id: 'D', text: '$12$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Ladder Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Recognize $8$-$15$-$17$ as a standard Pythagorean triple. The wall height is $15$.\n\n**The Full Solution:**\nThe ladder, wall, and ground form a right triangle with the ladder as the hypotenuse ($17$) and the ground distance as one leg ($8$). The wall height $h$ is the other leg:\n$h^2 + 8^2 = 17^2$\n$h^2 = 289 - 64 = 225$\n$h = 15$ feet.\n\nVerification: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — subtracts the values directly: $17 - 8 = 9$, ignoring the squares.\n* Choice C: "sign error" — adds the squares: $\\sqrt{17^2 + 8^2} = \\sqrt{353}$.\n* Choice D: "wrong base" — estimates half the ladder length without computing.\n\n**Test Day Takeaway:** Ladder problems are always Pythagorean. The ladder is the hypotenuse; the ground distance and wall height are the legs. Memorize $8$-$15$-$17$ — it shows up constantly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'real-world-pythagorean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-020',
    domain: 'geometry',
    skills: ['similar-triangles'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Triangles $ABC$ and $DEF$ are similar, with $A$, $B$, $C$ corresponding to $D$, $E$, $F$ respectively. In triangle $ABC$, $AB = 6$, $BC = 9$, and $AC = 12$. If $DE = 10$, what is the length of $EF$?',
    choices: [
      // distractor: adds the scale-factor difference instead of multiplying
      { id: 'A', text: '$13$' },
      { id: 'B', text: '$15$' },
      // distractor: applies the scale factor to AC instead of BC
      { id: 'C', text: '$18$' },
      // distractor: confuses which side of triangle ABC corresponds to EF
      { id: 'D', text: '$20$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Similar Triangles Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Scale factor from $ABC$ to $DEF$ is $\\frac{DE}{AB} = \\frac{10}{6} = \\frac{5}{3}$. Apply it to $BC$: $EF = 9 \\cdot \\frac{5}{3} = 15$.\n\n**The Full Solution:**\nSimilar triangles have proportional sides. Since $A \\leftrightarrow D$, $B \\leftrightarrow E$, $C \\leftrightarrow F$, the correspondence is $AB \\leftrightarrow DE$ and $BC \\leftrightarrow EF$. Set up the proportion:\n$\\frac{DE}{AB} = \\frac{EF}{BC}$\n$\\frac{10}{6} = \\frac{EF}{9}$\n$EF = 9 \\cdot \\frac{10}{6} = 15$.\n\nVerification: the scale factor $\\frac{5}{3}$ applied to $AC = 12$ would give $DF = 20$. The triangle $DEF$ has sides $10, 15, 20$, which is $5, 7.5, 10$ doubled — confirming similarity \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — adds $10 - 6 = 4$ to $BC = 9$ instead of multiplying by the scale factor.\n* Choice C: "wrong base" — applies the scale factor to $AC = 12$, giving the $DF$ length not $EF$.\n* Choice D: "applies the inverse operation" — confuses which side maps to $EF$.\n\n**Test Day Takeaway:** In similar triangles, ALWAYS find the scale factor first (ratio of corresponding sides), then multiply EACH side. Identify corresponding sides by vertex order.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'proportion-setup',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-021',
    domain: 'geometry',
    skills: ['soh-cah-toa'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'From the top of a $40$-meter observation tower, the angle of depression to a parked car is $35°$. What is the horizontal distance, in meters, from the base of the tower to the car? (Round to the nearest tenth.)',
    diagram: {
      type: 'rightTriangle',
      params: {
        labels: ['35°', '', ''],
        sideLabels: ['', '', '40'],
        rightAngleVertex: 1,
      },
    },
    choices: [
      // distractor: multiplies 40 by tan(35°) instead of dividing
      { id: 'A', text: '$28.0$' },
      // distractor: uses sin instead of tan
      { id: 'B', text: '$49.0$' },
      { id: 'C', text: '$57.1$' },
      // distractor: uses 40/cos(35°) instead of 40/tan(35°)
      { id: 'D', text: '$69.7$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Angle of Depression**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $\\tan(35°) = \\frac{\\text{tower height}}{\\text{ground distance}} = \\frac{40}{d}$, so $d = \\frac{40}{\\tan(35°)} \\approx 57.1$.\n\n**The Full Solution:**\nThe angle of depression from the tower equals the angle of elevation from the car (alternate interior angles between parallel horizontal lines). The tower height $40$ m is opposite the $35°$ angle (from the car\'s perspective), and the ground distance $d$ is adjacent. So:\n$\\tan(35°) = \\frac{40}{d}$\n$d = \\frac{40}{\\tan(35°)} = \\frac{40}{0.7002} \\approx 57.1$ meters.\n\nVerification: a $35°$ angle is just under $45°$, so the adjacent side should be slightly larger than the opposite ($40$). $57.1$ is consistent \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "applies the inverse operation" — multiplies $40 \\times \\tan(35°) \\approx 28$ instead of dividing.\n* Choice B: "wrong formula" — uses $\\frac{40}{\\sin(35°)}$ (the hypotenuse, not the adjacent side).\n* Choice D: "wrong base" — uses $\\frac{40}{\\cos(35°)}$.\n\n**Test Day Takeaway:** Angle of depression $=$ angle of elevation from the other side. Tower problems: tower is opposite the angle, ground distance is adjacent — use $\\tan$. Hypotenuse problems would use $\\sin$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'angle-of-elevation-depression',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-022',
    domain: 'geometry',
    skills: ['arc-length'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A circle has a radius of $10$ cm. What is the length, in cm, of an arc that subtends a central angle of $72°$?',
    choices: [
      // distractor: 1/10 of circumference instead of 1/5
      { id: 'A', text: '$2\\pi$' },
      { id: 'B', text: '$4\\pi$' },
      // distractor: 72/100 of the radius times pi (wrong proportion structure)
      { id: 'C', text: '$7.2\\pi$' },
      // distractor: gives the full circumference
      { id: 'D', text: '$20\\pi$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $72° = \\frac{72}{360} = \\frac{1}{5}$ of the circle. Full circumference is $2\\pi(10) = 20\\pi$. One-fifth of that is $4\\pi$.\n\n**The Full Solution:**\nArc length is the fraction of the circumference corresponding to the central angle:\n$\\text{arc} = \\frac{\\theta}{360°} \\times 2\\pi r = \\frac{72}{360} \\times 2\\pi(10) = \\frac{1}{5} \\times 20\\pi = 4\\pi$ cm.\n\nVerification: $\\theta = 72°$ is one-fifth of a circle, and $4\\pi$ is one-fifth of $20\\pi$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses $\\frac{1}{10}$ instead of $\\frac{1}{5}$ of the circumference.\n* Choice C: "wrong formula" — multiplies $\\frac{72}{100} \\times 10 \\times \\pi$ instead of using $\\frac{72}{360}$.\n* Choice D: "stops one step early" — gives the full circumference without scaling by $\\frac{\\theta}{360}$.\n\n**Test Day Takeaway:** Arc length $= \\frac{\\theta}{360} \\times 2\\pi r$ in degrees, or $r\\theta$ in radians. Always identify what fraction of the full circle the angle represents.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'arc-sector-computation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-023',
    domain: 'geometry',
    skills: ['sector-area'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A pizza with a diameter of $16$ inches is cut into $8$ equal slices. What is the area, in square inches, of one slice?',
    choices: [
      // distractor: uses radius 4 (half of 8, doubly divided)
      { id: 'A', text: '$4\\pi$' },
      { id: 'B', text: '$8\\pi$' },
      // distractor: uses diameter as radius
      { id: 'C', text: '$16\\pi$' },
      // distractor: gives half the full pizza area
      { id: 'D', text: '$32\\pi$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Sector Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Pizza radius is $8$. Total area $= \\pi(8)^2 = 64\\pi$. One slice is $\\frac{1}{8}$ of that: $8\\pi$.\n\n**The Full Solution:**\nThe pizza has diameter $16$ inches, so the radius is $r = 8$ inches. The total area is:\n$A_{\\text{total}} = \\pi r^2 = \\pi(8)^2 = 64\\pi$ square inches.\n\nEach of the $8$ equal slices has area:\n$A_{\\text{slice}} = \\frac{64\\pi}{8} = 8\\pi$ square inches.\n\nVerification: $8$ slices $\\times 8\\pi = 64\\pi$, the full pizza area \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses radius $4$ (half-radius), giving $\\pi(4)^2 / 4 = 4\\pi$.\n* Choice C: "wrong base" — uses diameter $16$ as the radius.\n* Choice D: "off-by-one" — divides the full area by $2$ instead of $8$.\n\n**Test Day Takeaway:** When a problem gives diameter, immediately compute the radius (divide by $2$) before any area or volume formula. The radius is what the formulas use.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'real-world-sector',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-024',
    domain: 'geometry',
    skills: ['circle-equation'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A circle has the equation $(x + 5)^2 + (y - 1)^2 = 49$. What is the radius of the circle?',
    correctAnswer: '7',
    explanation: '**SAT Pattern: Read Radius from Circle Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~5s):** $r^2 = 49$, so $r = 7$.\n\n**The Full Solution:**\nThe standard form of a circle equation is $(x - h)^2 + (y - k)^2 = r^2$, where $(h, k)$ is the center and $r$ is the radius. Here:\n$(x + 5)^2 + (y - 1)^2 = 49$\nThe right side equals $r^2$, so $r^2 = 49$ and $r = \\sqrt{49} = 7$.\n\nVerification: $7^2 = 49$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $49$ as the radius (that\'s $r^2$).\n* Reporting $\\sqrt{49}$ unsimplified.\n* Confusing the center coordinates (here, $(-5, 1)$) with the radius.\n\n**Test Day Takeaway:** The right side of the circle equation is $r^2$, not $r$. Always take the square root to find the actual radius.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'extract-from-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-025',
    domain: 'geometry',
    skills: ['volume-prism'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A triangular prism has a base that is a right triangle with legs $5$ cm and $12$ cm. The prism is $20$ cm long. What is the volume, in cubic centimeters?',
    choices: [
      { id: 'A', text: '$600$' },
      // distractor: omits the (1/2) in the triangle base area
      { id: 'B', text: '$1200$' },
      // distractor: uses hypotenuse (13) instead of one leg
      { id: 'C', text: '$1560$' },
      // distractor: divides the correct answer by 2 again
      { id: 'D', text: '$300$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Triangular Prism Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Base area $= \\frac{1}{2}(5)(12) = 30$. Volume $= 30 \\times 20 = 600$.\n\n**The Full Solution:**\nFor any prism, volume = (base area) × (length). The base is a right triangle with legs $5$ and $12$:\n$\\text{base area} = \\frac{1}{2}(5)(12) = 30$ cm².\n$\\text{volume} = 30 \\times 20 = 600$ cm³.\n\nVerification: a rectangular prism with the same dimensions would have base $5 \\times 12 = 60$ and volume $60 \\times 20 = 1200$, exactly twice the triangular prism volume \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — omits the $\\frac{1}{2}$ in the triangle base area.\n* Choice C: "wrong base" — uses the hypotenuse ($13$) instead of a leg.\n* Choice D: "off-by-one" — divides by $2$ twice.\n\n**Test Day Takeaway:** Prism volume = (base area) × (length). Identify the base shape first, compute its area, then multiply. For triangles, never forget the $\\frac{1}{2}$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'composite-formula',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-026',
    domain: 'geometry',
    skills: ['triangle-angle-sum'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In triangle $JKL$, the measure of angle $J$ is three times the measure of angle $K$, and the measure of angle $L$ is $20°$ more than the measure of angle $K$. What is the measure, in degrees, of angle $J$?',
    choices: [
      // distractor: gives angle K instead of angle J
      { id: 'A', text: '$32$' },
      // distractor: gives angle L instead of angle J
      { id: 'B', text: '$52$' },
      { id: 'C', text: '$96$' },
      // distractor: solves the equation incorrectly with x = 36
      { id: 'D', text: '$108$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Translate to Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Let $K = x$. Then $J + K + L = 180$ becomes $3x + x + (x + 20) = 180$, so $5x = 160$ and $x = 32$. Then $J = 3 \\cdot 32 = 96$.\n\n**The Full Solution:**\nLet $K = x$. Then $J = 3x$ and $L = x + 20$. Sum to $180°$:\n$3x + x + (x + 20) = 180$\n$5x + 20 = 180$\n$5x = 160$\n$x = 32$.\nSo angle $J = 3x = 3(32) = 96°$.\n\nVerification: $J + K + L = 96 + 32 + 52 = 180$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — gives angle $K = 32$ instead of angle $J = 3K$.\n* Choice B: "wrong base" — gives angle $L = K + 20 = 52$ instead of angle $J$.\n* Choice D: "sign error" — sets $5x = 180$ ignoring the $+20$, then $x = 36$ and $3x = 108$.\n\n**Test Day Takeaway:** When a triangle problem gives relationships between angles, set ONE angle as the variable, express the others in terms of it, and sum to $180$. Always check which angle the question asks for.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'equation-from-geometry',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-027',
    domain: 'geometry',
    skills: ['completing-square-circles'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What are the center and radius of the circle given by $x^2 + y^2 - 6x + 4y - 12 = 0$?',
    choices: [
      { id: 'A', text: 'Center $(3, -2)$, radius $5$' },
      // distractor: flips both signs of the center
      { id: 'B', text: 'Center $(-3, 2)$, radius $5$' },
      // distractor: reports r² as the radius
      { id: 'C', text: 'Center $(3, -2)$, radius $25$' },
      // distractor: uses coefficients directly without completing the square
      { id: 'D', text: 'Center $(6, -4)$, radius $\\sqrt{12}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Complete the Square for Circle**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Group: $(x^2 - 6x) + (y^2 + 4y) = 12$. Complete: $(x - 3)^2 - 9 + (y + 2)^2 - 4 = 12$, so $(x - 3)^2 + (y + 2)^2 = 25$. Center $(3, -2)$, $r = 5$.\n\n**The Full Solution:**\nStart from $x^2 + y^2 - 6x + 4y - 12 = 0$. Group $x$ and $y$ terms:\n$(x^2 - 6x) + (y^2 + 4y) = 12$.\nComplete the square: $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$, giving:\n$(x - 3)^2 + (y + 2)^2 = 25$.\nThis is standard form, so center is $(3, -2)$ and radius is $\\sqrt{25} = 5$.\n\nVerification: plugging the center back: $(3 - 3)^2 + (-2 + 2)^2 = 0$, the squared distance from the center to itself \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — flips the center signs.\n* Choice C: "stops one step early" — reports $r^2 = 25$ as the radius instead of $r = 5$.\n* Choice D: "wrong formula" — uses the $-6$ and $4$ coefficients directly as the center without completing the square.\n\n**Test Day Takeaway:** To complete the square on $x^2 + bx$, add $\\left(\\frac{b}{2}\\right)^2$. To balance the equation, add the same amount on the other side. Always finish by taking $\\sqrt{}$ of the right side for the radius.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'complete-the-square',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-028',
    domain: 'geometry',
    skills: ['special-right-triangles'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In a $30°$-$60°$-$90°$ triangle, the side opposite the $30°$ angle has length $7$. What is the length of the hypotenuse?',
    choices: [
      // distractor: uses 45-45-90 hypotenuse ratio
      { id: 'A', text: '$7\\sqrt{2}$' },
      // distractor: gives the long leg instead of the hypotenuse
      { id: 'B', text: '$7\\sqrt{3}$' },
      { id: 'C', text: '$14$' },
      // distractor: divides instead of multiplying
      { id: 'D', text: '$\\frac{7\\sqrt{3}}{3}$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: 30-60-90 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** In a $30$-$60$-$90$ triangle the hypotenuse is twice the short leg (opposite $30°$): $2 \\times 7 = 14$.\n\n**The Full Solution:**\nThe $30$-$60$-$90$ triangle has side ratios $1 : \\sqrt{3} : 2$, where the sides are opposite $30°$, $60°$, and $90°$ respectively. The side opposite $30°$ is the short leg ($= 7$), so the hypotenuse (opposite $90°$) is twice that:\nhypotenuse $= 2 \\times 7 = 14$.\n\nVerification: short leg $= 7$, long leg $= 7\\sqrt{3} \\approx 12.12$, hypotenuse $= 14$. Check: $7^2 + (7\\sqrt{3})^2 = 49 + 147 = 196 = 14^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — uses the $45$-$45$-$90$ hypotenuse ratio ($\\sqrt{2}$).\n* Choice B: "stops one step early" — gives the long leg ($7\\sqrt{3}$) instead of the hypotenuse.\n* Choice D: "applies the inverse operation" — divides instead of multiplying.\n\n**Test Day Takeaway:** $30$-$60$-$90$ ratios: $1 : \\sqrt{3} : 2$ correspond to angles $30° : 60° : 90°$. The hypotenuse is ALWAYS twice the short leg. The long leg is the short leg times $\\sqrt{3}$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'special-triangle-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-029',
    domain: 'geometry',
    skills: ['pythagorean-theorem', 'triangle-area'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'An isosceles triangle has two equal sides of length $13$ and a base of $10$. What is the area of the triangle?',
    correctAnswer: '60',
    explanation: '**SAT Pattern: Isosceles Triangle Area**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~20s):** Drop an altitude from the apex; it bisects the base. Half-base $= 5$, slant $= 13$, so altitude $= \\sqrt{169 - 25} = 12$. Area $= \\frac{1}{2}(10)(12) = 60$.\n\n**The Full Solution:**\nAn isosceles triangle\'s altitude from the apex bisects the base, creating two congruent right triangles with hypotenuse $13$ (slant side) and one leg $5$ (half the base). The other leg (the altitude $h$):\n$h = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.\nArea = $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(10)(12) = 60$.\n\nVerification: the two right triangles have sides $5$-$12$-$13$, a standard Pythagorean triple \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $13$ as the height directly — the slant side is not perpendicular to the base.\n* Forgetting the $\\frac{1}{2}$ in the triangle area formula.\n* Halving the wrong side: the altitude bisects the base, not a slant side.\n\n**Test Day Takeaway:** For isosceles triangles, the altitude from the apex is perpendicular to the base AND bisects it. This creates two congruent right triangles you can solve with Pythagoras. $5$-$12$-$13$ is the most common triple in these problems.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-geometry',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-030',
    domain: 'geometry',
    skills: ['soh-cah-toa'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In right triangle $MNP$, the right angle is at $N$. If $MN = 7$ and $MP = 25$, what is $\\cos(M)$?',
    diagram: {
      type: 'rightTriangle',
      params: {
        labels: ['M', 'N', 'P'],
        sideLabels: ['7', '25', ''],
        rightAngleVertex: 1,
      },
    },
    choices: [
      { id: 'A', text: '$\\frac{7}{25}$' },
      // distractor: gives sin(M) instead (NP/MP = 24/25)
      { id: 'B', text: '$\\frac{24}{25}$' },
      // distractor: gives tan(M) = NP/MN = 24/7
      { id: 'C', text: '$\\frac{7}{24}$' },
      // distractor: inverts the ratio (sec M instead of cos M)
      { id: 'D', text: '$\\frac{25}{7}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Cosine in a Right Triangle**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Cosine = adjacent/hypotenuse. From $M$, the adjacent side is $MN = 7$ and the hypotenuse is $MP = 25$. So $\\cos(M) = \\frac{7}{25}$.\n\n**The Full Solution:**\nThe right angle is at $N$, so $MP$ is the hypotenuse. From angle $M$:\n* Adjacent side (between $M$ and the right angle): $MN = 7$.\n* Opposite side (across from $M$): $NP$, which we can find using Pythagoras if needed: $NP = \\sqrt{25^2 - 7^2} = \\sqrt{576} = 24$.\n* Hypotenuse: $MP = 25$.\n\n$\\cos(M) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{7}{25}$.\n\nVerification: $\\sin^2 + \\cos^2 = \\left(\\frac{24}{25}\\right)^2 + \\left(\\frac{7}{25}\\right)^2 = \\frac{576 + 49}{625} = 1$ \\checkmark. Also, $7$-$24$-$25$ is a standard Pythagorean triple.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — gives $\\sin(M) = \\frac{NP}{MP} = \\frac{24}{25}$.\n* Choice C: "wrong formula" — gives $\\tan(M) = \\frac{NP}{MN} = \\frac{24}{7}$... well, this is $\\frac{7}{24}$, the reciprocal of tan.\n* Choice D: "applies the inverse operation" — flips the ratio (this is $\\sec M$, not $\\cos M$).\n\n**Test Day Takeaway:** SOH-CAH-TOA. Cosine is adjacent over hypotenuse. The adjacent side is the leg TOUCHING the angle (not across from it). For complementary angles, $\\cos(M) = \\sin(P)$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-trig-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-031',
    domain: 'geometry',
    skills: ['volume-scaling'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A model building is constructed at a scale of $1:50$. If the volume of the model is $24$ cubic inches, what is the volume, in cubic inches, of the actual building?',
    choices: [
      // distractor: applies the linear scale factor instead of cubed
      { id: 'A', text: '$1{,}200$' },
      // distractor: applies the square of the scale factor (area scaling)
      { id: 'B', text: '$60{,}000$' },
      { id: 'C', text: '$3{,}000{,}000$' },
      // distractor: applies an extra power of 50
      { id: 'D', text: '$150{,}000{,}000$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Volume Scaling by Cube of Linear Factor**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Volume scales as $(\\text{linear factor})^3$. With factor $50$: $50^3 = 125{,}000$. Then $24 \\times 125{,}000 = 3{,}000{,}000$.\n\n**The Full Solution:**\nIf two solids are similar with linear scale factor $k$ (ratio of corresponding lengths), then:\n* Lengths scale by $k$.\n* Areas scale by $k^2$.\n* Volumes scale by $k^3$.\n\nHere $k = 50$ (the building is $50$ times larger in each linear dimension). Volume scale factor $= 50^3 = 125{,}000$:\nactual volume $= 24 \\times 125{,}000 = 3{,}000{,}000$ cubic inches.\n\nVerification: $24 \\times 125{,}000 = 24 \\times 100{,}000 + 24 \\times 25{,}000 = 2{,}400{,}000 + 600{,}000 = 3{,}000{,}000$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — applies the linear factor $50$ to volume (off by two factors of $50$).\n* Choice B: "wrong formula" — applies $50^2 = 2500$ (area scaling), off by one factor of $50$.\n* Choice D: "off-by-one" — applies $50^4$ accidentally.\n\n**Test Day Takeaway:** Length scales $k$, area scales $k^2$, volume scales $k^3$. The $1:50$ scale means each LINEAR dimension scales by $50$, so volumes scale by $50^3$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'scaling-factor',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-032',
    domain: 'geometry',
    skills: ['circle-area', 'sector-area'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A sprinkler waters a circular sector with radius $15$ feet and a central angle of $120°$. What area, in square feet, does the sprinkler water?',
    choices: [
      // distractor: uses radius 5 (one-third of 15) somewhere
      { id: 'A', text: '$25\\pi$' },
      { id: 'B', text: '$75\\pi$' },
      // distractor: uses half the area instead of one-third
      { id: 'C', text: '$150\\pi$' },
      // distractor: gives the full circle area, no sector fraction
      { id: 'D', text: '$225\\pi$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Sector Area from Central Angle**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $120°$ is $\\frac{1}{3}$ of the circle. Full area $= \\pi(15)^2 = 225\\pi$. One-third of that: $75\\pi$.\n\n**The Full Solution:**\nSector area is the fraction of the full circle area corresponding to the central angle:\n$A_{\\text{sector}} = \\frac{\\theta}{360°} \\times \\pi r^2 = \\frac{120}{360} \\times \\pi(15)^2 = \\frac{1}{3} \\times 225\\pi = 75\\pi$ sq ft.\n\nVerification: $\\frac{120°}{360°} = \\frac{1}{3}$, and $\\frac{1}{3}$ of $225\\pi$ is $75\\pi$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses radius $5$ instead of $15$ somewhere ($\\frac{225\\pi}{9}$).\n* Choice C: "off-by-one" — uses $\\frac{1}{2}$ (half) instead of $\\frac{1}{3}$.\n* Choice D: "stops one step early" — gives the full circle area without applying the sector fraction.\n\n**Test Day Takeaway:** Sector area $= \\frac{\\theta}{360} \\times \\pi r^2$ in degrees, or $\\frac{1}{2}r^2\\theta$ in radians. Always check what fraction of the circle the sector represents.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'real-world-sector',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-033',
    domain: 'geometry',
    skills: ['degrees-to-radians'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'Convert $150°$ to radians. Express your answer as a fraction of $\\pi$ in the form $\\frac{a}{b}$. What is the value of $a + b$ if the fraction is in lowest terms?',
    correctAnswer: '11',
    explanation: '**SAT Pattern: Degrees to Radians with Reduction**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~20s):** $150° \\times \\frac{\\pi}{180°} = \\frac{150\\pi}{180} = \\frac{5\\pi}{6}$. So $\\frac{a}{b} = \\frac{5}{6}$, giving $a + b = 11$.\n\n**The Full Solution:**\nApply the conversion factor $\\frac{\\pi}{180°}$:\n$150° \\times \\frac{\\pi}{180°} = \\frac{150}{180}\\pi$.\n\nReduce $\\frac{150}{180}$: $\\gcd(150, 180) = 30$, so $\\frac{150}{180} = \\frac{5}{6}$.\n\nThe radian measure is $\\frac{5\\pi}{6}$, meaning the fraction of $\\pi$ is $\\frac{5}{6}$. So $a = 5$, $b = 6$, and $a + b = 11$.\n\nVerification: $\\frac{5\\pi}{6} \\times \\frac{180°}{\\pi} = \\frac{900°}{6} = 150°$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $\\frac{15}{18}$ or $\\frac{150}{180}$ without simplifying.\n* Returning $\\frac{5}{6}$ itself instead of $a + b = 11$.\n* Forgetting to multiply by $\\pi$ in the original conversion.\n\n**Test Day Takeaway:** Always simplify fractions in radian answers. $\\frac{150}{180}$ reduces to $\\frac{5}{6}$ via GCD $30$. Read the question carefully — sometimes the answer asks for a derived value like $a + b$, not the fraction itself.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'unit-conversion-variant',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-034',
    domain: 'geometry',
    skills: ['similar-triangles'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A $6$-foot-tall person casts a $4$-foot shadow at the same time a flagpole casts a $20$-foot shadow. How tall, in feet, is the flagpole?',
    choices: [
      // distractor: multiplies 6 × 4 instead of using proportion
      { id: 'A', text: '$24$' },
      { id: 'B', text: '$30$' },
      // distractor: adds the differences instead of setting up proportion
      { id: 'C', text: '$18$' },
      // distractor: inverts the ratio (4/6 × 20)
      { id: 'D', text: '$13.3$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Shadow Similar Triangles**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Same sun angle creates similar triangles: $\\frac{\\text{height}}{\\text{shadow}}$ is constant. $\\frac{6}{4} = \\frac{h}{20}$, so $h = 30$.\n\n**The Full Solution:**\nAt the same moment, the angle of the sun creates two similar right triangles: one with the person ($6$ ft tall, $4$-ft shadow) and one with the flagpole ($h$ ft tall, $20$-ft shadow). Similar triangles have proportional sides:\n$\\frac{\\text{height}}{\\text{shadow}} = \\frac{6}{4} = \\frac{h}{20}$.\nCross-multiply: $4h = 120$, so $h = 30$ ft.\n\nVerification: ratio $\\frac{30}{20} = \\frac{3}{2}$ matches $\\frac{6}{4} = \\frac{3}{2}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — multiplies $6 \\times 4 = 24$ without involving the $20$-ft shadow.\n* Choice C: "wrong base" — adds shadows incorrectly: $6 + (20 - 4) \\cdot \\frac{1}{2}$.\n* Choice D: "applies the inverse operation" — flips the ratio: $\\frac{4}{6} \\times 20 \\approx 13.3$.\n\n**Test Day Takeaway:** Shadow problems are always similar triangles. Set up "tall thing : its shadow" equal on both sides, then cross-multiply.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'real-world-similar-triangles',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-035',
    domain: 'geometry',
    skills: ['volume-pyramid-cone'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A square pyramid has a base side length of $6$ m and a height of $10$ m. What is the volume, in cubic meters?',
    choices: [
      { id: 'A', text: '$120$' },
      // distractor: multiplies (1/2)(36)(10) using triangle area instead of square
      { id: 'B', text: '$180$' },
      // distractor: omits the (1/3) factor
      { id: 'C', text: '$360$' },
      // distractor: uses side 6 as edge length instead of base side
      { id: 'D', text: '$60$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Square Pyramid Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $V = \\frac{1}{3} \\cdot s^2 \\cdot h = \\frac{1}{3} \\cdot 36 \\cdot 10 = 120$.\n\n**The Full Solution:**\nThe volume of any pyramid is $V = \\frac{1}{3} \\times (\\text{base area}) \\times (\\text{height})$. For a square pyramid with base side $s$:\n$V = \\frac{1}{3} \\cdot s^2 \\cdot h = \\frac{1}{3} \\cdot 6^2 \\cdot 10 = \\frac{1}{3} \\cdot 36 \\cdot 10 = \\frac{360}{3} = 120$ m³.\n\nVerification: a $6 \\times 6 \\times 10$ rectangular prism has volume $360$. A pyramid with the same base and height is one-third: $120$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — uses $\\frac{1}{2}$ instead of $\\frac{1}{3}$ (mixing up triangle vs pyramid formulas).\n* Choice C: "stops one step early" — computes $s^2 h = 360$ without the $\\frac{1}{3}$.\n* Choice D: "wrong base" — uses side $6$ as the height, not the base.\n\n**Test Day Takeaway:** Pyramid volume = $\\frac{1}{3}$ × (base area) × (height). The $\\frac{1}{3}$ is the same for pyramids AND cones — it always applies to tapered solids.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-formula',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-036',
    domain: 'geometry',
    skills: ['circle-equation'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The endpoints of a diameter of a circle are $(1, 3)$ and $(7, -1)$. Which equation represents this circle?',
    choices: [
      { id: 'A', text: '$(x - 4)^2 + (y - 1)^2 = 13$' },
      // distractor: uses diameter² instead of radius²
      { id: 'B', text: '$(x - 4)^2 + (y - 1)^2 = 52$' },
      // distractor: gets the center wrong (uses one endpoint)
      { id: 'C', text: '$(x - 3)^2 + (y + 2)^2 = 13$' },
      // distractor: leaves the right side as the diameter (unsquared)
      { id: 'D', text: '$(x - 4)^2 + (y - 1)^2 = \\sqrt{52}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Circle from Diameter Endpoints**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Center = midpoint of diameter $= \\left(\\frac{1+7}{2}, \\frac{3-1}{2}\\right) = (4, 1)$. Diameter length $= \\sqrt{(7-1)^2 + (-1-3)^2} = \\sqrt{36 + 16} = \\sqrt{52}$. Radius $= \\sqrt{52}/2$, so $r^2 = \\frac{52}{4} = 13$.\n\n**The Full Solution:**\nThe center of a circle is the midpoint of any diameter:\n$\\text{center} = \\left(\\frac{1+7}{2}, \\frac{3+(-1)}{2}\\right) = (4, 1)$.\n\nThe diameter length, by the distance formula:\n$d = \\sqrt{(7-1)^2 + (-1-3)^2} = \\sqrt{36 + 16} = \\sqrt{52}$.\nSo radius $r = \\frac{\\sqrt{52}}{2}$, and $r^2 = \\frac{52}{4} = 13$.\n\nEquation: $(x - 4)^2 + (y - 1)^2 = 13$.\n\nVerification: plug in $(1, 3)$: $(1-4)^2 + (3-1)^2 = 9 + 4 = 13$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — uses the diameter squared ($52$) as $r^2$.\n* Choice C: "wrong base" — uses an endpoint as the center.\n* Choice D: "stops one step early" — leaves the right side as $\\sqrt{52}$ (the diameter unsimplified) without squaring.\n\n**Test Day Takeaway:** Diameter endpoints → midpoint formula gives the center, distance formula gives the diameter. Always halve to get the radius before squaring.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-circle',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-037',
    domain: 'geometry',
    skills: ['tangent-lines'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A circle has its center at $O$ and radius $5$. A tangent from external point $P$ touches the circle at $T$. If $OP = 13$, what is the length of $PT$?',
    choices: [
      // distractor: subtracts radius from OP linearly
      { id: 'A', text: '$8$' },
      { id: 'B', text: '$12$' },
      // distractor: adds the squares instead of subtracting
      { id: 'C', text: '$\\sqrt{194}$' },
      // distractor: adds radius to OP linearly
      { id: 'D', text: '$18$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Tangent from External Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $5$-$12$-$13$ triple. Radius $OT = 5$, hypotenuse $OP = 13$, so $PT = 12$.\n\n**The Full Solution:**\nThe radius $OT$ is perpendicular to the tangent $PT$ at the point of tangency. So triangle $OTP$ is a right triangle with:\n* Leg $OT = 5$ (radius)\n* Leg $PT = ?$ (tangent segment)\n* Hypotenuse $OP = 13$ (line from external point to center)\n\nBy Pythagoras: $PT^2 = OP^2 - OT^2 = 169 - 25 = 144$, so $PT = 12$.\n\nVerification: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — computes $13 - 5 = 8$ linearly instead of using Pythagoras.\n* Choice C: "sign error" — adds the squares: $\\sqrt{169 + 25} = \\sqrt{194}$.\n* Choice D: "applies the inverse operation" — adds: $13 + 5 = 18$.\n\n**Test Day Takeaway:** Tangent from external point: draw the radius to the tangent point — it forms a right angle. The line from the external point to the center is the hypotenuse. $5$-$12$-$13$ and $3$-$4$-$5$ show up constantly.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'tangent-pythagorean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-038',
    domain: 'geometry',
    skills: ['arc-length'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A pendulum swings through an arc of $\\frac{\\pi}{4}$ radians. If the pendulum is $2$ meters long, what is the length, in meters, of the arc traced by the tip? Express your answer as a fraction in simplest form $\\frac{a}{b}$. What is $a + b$?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: Arc Length in Radians**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** Arc $= r\\theta = 2 \\cdot \\frac{\\pi}{4} = \\frac{\\pi}{2}$. The coefficient of $\\pi$ is $\\frac{1}{2}$, so $a + b = 1 + 2 = 3$.\n\n**The Full Solution:**\nWhen the central angle is in RADIANS, arc length is simply $s = r\\theta$:\n$s = 2 \\cdot \\frac{\\pi}{4} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$ meters.\n\nWritten as a fraction of $\\pi$: $\\frac{1}{2}\\pi$. So $a = 1$, $b = 2$, and $a + b = 3$.\n\nVerification: $\\frac{\\pi}{4}$ radians is $45°$. A circle of radius $2$ has circumference $4\\pi$, so $\\frac{45}{360} \\times 4\\pi = \\frac{1}{8} \\times 4\\pi = \\frac{\\pi}{2}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using the degree formula $\\frac{\\theta}{360} \\times 2\\pi r$ when $\\theta$ is in radians.\n* Reporting $\\frac{\\pi}{2}$ itself instead of $a + b = 3$.\n* Forgetting to simplify $\\frac{2\\pi}{4} \\to \\frac{\\pi}{2}$.\n\n**Test Day Takeaway:** With radians, arc length is just $r\\theta$. With degrees, it\'s $\\frac{\\theta}{360} \\times 2\\pi r$. Check what units the angle is in BEFORE picking the formula.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'radian-arc-length',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-039',
    domain: 'geometry',
    skills: ['pythagorean-theorem'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A rectangular park measures $48$ meters by $36$ meters. A jogger runs diagonally from one corner to the opposite corner. How far, in meters, does the jogger run?',
    choices: [
      { id: 'A', text: '$60$' },
      // distractor: averages the two sides
      { id: 'B', text: '$84$' },
      // distractor: gives the correct value unsimplified
      { id: 'C', text: '$\\sqrt{3600}$' },
      // distractor: subtracts the sides
      { id: 'D', text: '$42$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Rectangle Diagonal**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $48 = 12 \\times 4$, $36 = 12 \\times 3$ — this is a $3$-$4$-$5$ triple scaled by $12$, so the diagonal is $12 \\times 5 = 60$.\n\n**The Full Solution:**\nThe diagonal of a rectangle, by Pythagoras with the two side lengths as legs:\n$d = \\sqrt{48^2 + 36^2} = \\sqrt{2304 + 1296} = \\sqrt{3600} = 60$ meters.\n\nVerification: $36^2 + 48^2 = 1296 + 2304 = 3600 = 60^2$ \\checkmark. Also confirms the $3$-$4$-$5$ scaling.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — adds the sides linearly ($48 + 36 = 84$) instead of using Pythagoras.\n* Choice C: "unsimplified" — numerically correct ($\\sqrt{3600} = 60$) but the SAT lists the simplified form.\n* Choice D: "applies the inverse operation" — averages: $\\frac{48 + 36}{2} = 42$.\n\n**Test Day Takeaway:** Rectangle diagonals are always Pythagorean. Look for triple multiples: $48$-$36$-$60$ is $12 \\cdot (4$-$3$-$5)$. When choices include both simplified ($60$) and unsimplified ($\\sqrt{3600}$) forms, pick the simplified one.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'real-world-pythagorean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-040',
    domain: 'geometry',
    skills: ['volume-sphere'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A tennis ball has a diameter of $6.8$ cm. What is the approximate volume, in cubic centimeters, of the tennis ball?',
    choices: [
      // distractor: omits the (4/3) factor and squares the radius
      { id: 'A', text: '$41.6$' },
      { id: 'B', text: '$164.6$' },
      // distractor: cubes the radius without (4/3)
      { id: 'C', text: '$131.1$' },
      // distractor: uses the diameter as the radius
      { id: 'D', text: '$523.6$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Sphere Volume Approximation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Radius $r = \\frac{6.8}{2} = 3.4$ cm. $V = \\frac{4}{3}\\pi(3.4)^3 = \\frac{4}{3}\\pi(39.304) \\approx 164.6$ cm³.\n\n**The Full Solution:**\nThe diameter is $6.8$ cm, so radius $r = 3.4$ cm.\n$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(3.4)^3$.\nCompute $3.4^3 = 39.304$.\n$V = \\frac{4}{3} \\cdot 39.304 \\cdot \\pi = 52.405 \\cdot \\pi \\approx 164.6$ cm³.\n\nVerification: a $10$-cm-diameter sphere has volume $\\frac{4}{3}\\pi(5^3) \\approx 523.6$, and our sphere is smaller, so $164.6$ is consistent \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — uses $\\pi r^2$ (circle area) instead.\n* Choice C: "stops one step early" — computes $\\pi r^3$ without the $\\frac{4}{3}$.\n* Choice D: "wrong base" — uses diameter $6.8$ as the radius.\n\n**Test Day Takeaway:** Sphere volume = $\\frac{4}{3}\\pi r^3$. Always divide diameter by $2$ to get radius FIRST. Sanity-check the order of magnitude: tennis balls aren\'t $500$ cm³.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'real-world-volume',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-041',
    domain: 'geometry',
    skills: ['triangle-types', 'pythagorean-theorem'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A triangle has sides of length $8$, $15$, and $17$. What type of triangle is it?',
    diagram: {
      type: 'rightTriangle',
      params: {
        sideLabels: ['8', '17', '15'],
        rightAngleVertex: 1,
      },
    },
    choices: [
      // distractor: a² + b² > c² would be acute; here a² + b² = c²
      { id: 'A', text: 'Acute' },
      { id: 'B', text: 'Right' },
      // distractor: a² + b² < c² would be obtuse
      { id: 'C', text: 'Obtuse' },
      // distractor: requires all three sides equal
      { id: 'D', text: 'Equilateral' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Classify Triangle by Pythagorean Test**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $8$-$15$-$17$ is a standard Pythagorean triple, so the triangle is a right triangle.\n\n**The Full Solution:**\nTo classify a triangle by its sides, compare the sum of the squares of the two shorter sides to the square of the longest side:\n* If $a^2 + b^2 = c^2$ → right triangle\n* If $a^2 + b^2 > c^2$ → acute triangle\n* If $a^2 + b^2 < c^2$ → obtuse triangle\n\nHere: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$. So the triangle is a right triangle.\n\nVerification: $\\sqrt{8^2 + 15^2} = \\sqrt{289} = 17$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong test" — would require $a^2 + b^2 > c^2$.\n* Choice C: "wrong test" — would require $a^2 + b^2 < c^2$.\n* Choice D: "wrong base" — equilateral requires all three sides equal.\n\n**Test Day Takeaway:** Common Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$, $9$-$40$-$41$, $20$-$21$-$29$. Memorize them. A triple in the choices is almost always a right triangle.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'classification-via-computation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-042',
    domain: 'geometry',
    skills: ['radian-measure-understanding'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'An angle of $1$ radian is approximately equal to how many degrees?',
    choices: [
      // distractor: π/4 in degrees
      { id: 'A', text: '$45°$' },
      { id: 'B', text: '$57.3°$' },
      // distractor: π/2 in degrees
      { id: 'C', text: '$90°$' },
      // distractor: doubles the correct answer (2 radians)
      { id: 'D', text: '$114.6°$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Radian-Degree Conversion Factor**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $1$ radian $= \\frac{180°}{\\pi} \\approx \\frac{180}{3.14} \\approx 57.3°$.\n\n**The Full Solution:**\nThe conversion factor from radians to degrees is $\\frac{180°}{\\pi}$. So:\n$1 \\text{ radian} = 1 \\times \\frac{180°}{\\pi} = \\frac{180}{\\pi} \\approx 57.3°$.\n\nVerification: a full rotation is $2\\pi \\approx 6.28$ radians $= 360°$. So $1$ radian is roughly $\\frac{360}{6.28} \\approx 57.3°$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — gives $\\frac{\\pi}{4} \\approx 0.785$ radians (not $1$ radian).\n* Choice C: "wrong base" — gives $\\frac{\\pi}{2} \\approx 1.57$ radians.\n* Choice D: "off-by-one" — gives $2$ radians.\n\n**Test Day Takeaway:** $1$ radian $\\approx 57.3°$. This is the conceptual definition: a radian is the angle whose arc length equals the radius. Useful for sanity-checking conversions.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'conceptual-understanding',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-043',
    domain: 'geometry',
    skills: ['circle-area'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A circular pond is surrounded by a $3$-foot-wide walking path. If the radius of the pond is $10$ feet, what is the area, in square feet, of the path alone?',
    choices: [
      // distractor: gives the area of a 3-ft-radius circle
      { id: 'A', text: '$9\\pi$' },
      { id: 'B', text: '$69\\pi$' },
      // distractor: subtracts radii squared linearly (13 - 10)² = 9
      { id: 'C', text: '$39\\pi$' },
      // distractor: gives the area of the outer circle (no subtraction)
      { id: 'D', text: '$169\\pi$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Annulus (Ring) Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Outer radius $= 10 + 3 = 13$. Path area $= \\pi(13^2 - 10^2) = \\pi(169 - 100) = 69\\pi$.\n\n**The Full Solution:**\nThe path is the annulus (ring) between the pond (inner circle, radius $10$) and the outer edge of the path (radius $10 + 3 = 13$). Annulus area:\n$A_{\\text{path}} = \\pi R^2 - \\pi r^2 = \\pi(13^2 - 10^2) = \\pi(169 - 100) = 69\\pi$ sq ft.\n\nVerification: outer area is $169\\pi$, inner area is $100\\pi$, difference is $69\\pi$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — gives the area of a $3$-ft-radius circle as if the path were a tiny disc.\n* Choice C: "wrong formula" — subtracts radii first, then squares: $(13 - 10)^2 \\cdot \\pi + 30\\pi = 39\\pi$ (mangled).\n* Choice D: "stops one step early" — gives the outer circle area without subtracting the pond.\n\n**Test Day Takeaway:** Annulus (ring) area $= \\pi R^2 - \\pi r^2$, NOT $\\pi(R - r)^2$. The two are different — order of operations matters.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'annulus-area',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-044',
    domain: 'geometry',
    skills: ['triangle-inequality'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Two sides of a triangle have lengths $7$ and $11$. Which of the following could NOT be the length of the third side?',
    choices: [
      // distractor: 5 satisfies 11 - 7 = 4 < 5 < 18
      { id: 'A', text: '$5$' },
      // distractor: 10 satisfies all inequalities
      { id: 'B', text: '$10$' },
      // distractor: 15 satisfies all inequalities
      { id: 'C', text: '$15$' },
      { id: 'D', text: '$19$' },
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Triangle Inequality Range**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Third side $s$ must satisfy $|11 - 7| < s < 11 + 7$, i.e., $4 < s < 18$. Only $19$ fails.\n\n**The Full Solution:**\nThe triangle inequality requires each side to be less than the sum AND greater than the absolute difference of the other two:\n$|a - b| < s < a + b$\n$|11 - 7| < s < 11 + 7$\n$4 < s < 18$.\n\nCheck choices:\n* $5$: $4 < 5 < 18$ ✓\n* $10$: ✓\n* $15$: ✓\n* $19$: $19 > 18$ ✗\n\nSo $19$ cannot be the third side.\n\nVerification: if the third side were $19$, then $7 + 11 = 18 < 19$, violating the triangle inequality \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — $5$ is JUST inside the lower bound but still valid.\n* Choice B: "wrong base" — $10$ is in the safe middle range.\n* Choice C: "wrong base" — $15$ is just under the upper bound, still valid.\n\n**Test Day Takeaway:** Triangle third side range: $|a - b| < s < a + b$. The "could NOT" wording flips the question — check which value is OUTSIDE the range.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'constraint-check',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-045',
    domain: 'geometry',
    skills: ['volume-prism'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A cylindrical water tank has a radius of $4$ feet and a height of $9$ feet. What is the volume of the tank, in cubic feet? (Give your answer as a number times $\\pi$; enter just the number.)',
    correctAnswer: '144',
    explanation: '**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $144$.**\n\n**The Fast Way (~5s):** $V = \\pi r^2 h = \\pi(16)(9) = 144\\pi$. The coefficient is $144$.\n\n**The Full Solution:**\nA cylinder is a prism with a circular base. Volume = (base area) × (height) = $\\pi r^2 \\cdot h$.\nWith $r = 4$ and $h = 9$:\n$V = \\pi(4)^2(9) = 16 \\cdot 9 \\cdot \\pi = 144\\pi$ cubic feet.\n\nThe coefficient of $\\pi$ is $144$.\n\nVerification: $\\pi r^2$ for $r = 4$ is $16\\pi$, times $9$ gives $144\\pi$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $144\\pi$ instead of just $144$ (the question asks for the coefficient).\n* Forgetting to square the radius — gives $36$.\n* Using the cone formula $\\frac{1}{3}\\pi r^2 h$ — gives $48$.\n\n**Test Day Takeaway:** Cylinder volume = $\\pi r^2 h$. Cone volume = $\\frac{1}{3}\\pi r^2 h$. Same base and height, cone is one-third of cylinder.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'direct-formula',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // ── HARD (15 questions) ────────────────────────────────────────────

  {
    id: 'bank-geo-046',
    domain: 'geometry',
    skills: ['completing-square-circles'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The equation $x^2 + y^2 + 8x - 10y + 5 = 0$ represents a circle. What is the area of this circle?',
    choices: [
      { id: 'A', text: '$36\\pi$' },
      // distractor: gives r instead of r² inside the area formula
      { id: 'B', text: '$\\sqrt{36}\\pi$' },
      // distractor: leaves the +5 unmoved when completing the square
      { id: 'C', text: '$5\\pi$' },
      // distractor: uses only the x-completion (16) as r²
      { id: 'D', text: '$16\\pi$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Circle Equation to Area**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Complete the square: $(x + 4)^2 + (y - 5)^2 = 16 + 25 - 5 = 36$, so $r^2 = 36$. Area $= \\pi r^2 = 36\\pi$.\n\n**The Full Solution:**\nGroup and complete the square:\n$(x^2 + 8x) + (y^2 - 10y) = -5$\n$(x^2 + 8x + 16) + (y^2 - 10y + 25) = -5 + 16 + 25$\n$(x + 4)^2 + (y - 5)^2 = 36$.\nSo $r^2 = 36$ and $r = 6$. Area $= \\pi r^2 = 36\\pi$.\n\nVerification: center $(-4, 5)$, radius $6$. Plug a sample point like $(2, 5)$: $(2+4)^2 + (5-5)^2 = 36$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — confuses $\\pi r^2$ with $\\pi \\sqrt{r^2}$.\n* Choice C: "wrong base" — uses the constant $+5$ (moved to the right side) as $r^2$.\n* Choice D: "stops one step early" — uses only the $x$-completion ($16$) as $r^2$.\n\n**Test Day Takeaway:** When completing the square for circles, the right side ends up as $r^2$. Move the constant to the right side and ADD what you added to complete on the left. Don\'t forget to take $\\sqrt{}$ for $r$, then square again for area.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'complete-square-then-compute',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-047',
    domain: 'geometry',
    skills: ['soh-cah-toa', 'pythagorean-theorem'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A surveyor stands $200$ meters from the base of a cliff. The angle of elevation to the top of the cliff is $28°$, and the angle of elevation to the top of a radio tower on top of the cliff is $32°$. What is the approximate height, in meters, of the radio tower alone?',
    choices: [
      { id: 'A', text: '$18.8$' },
      // distractor: subtracts the angles directly and uses tan
      { id: 'B', text: '$25.0$' },
      // distractor: gives just the cliff height
      { id: 'C', text: '$106.3$' },
      // distractor: gives the total height (cliff + tower)
      { id: 'D', text: '$131.3$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Difference of Heights via Tangent**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Total height to top of tower: $200\\tan(32°) \\approx 125.0$. Cliff height: $200\\tan(28°) \\approx 106.3$. Tower alone: $125.0 - 106.3 = 18.7 \\approx 18.8$.\n\n**The Full Solution:**\nFrom the surveyor at $200$ m horizontal distance:\n* Cliff height = $200 \\cdot \\tan(28°) \\approx 200 \\cdot 0.5317 \\approx 106.3$ m\n* Total height to top of tower = $200 \\cdot \\tan(32°) \\approx 200 \\cdot 0.6249 \\approx 125.0$ m\n\nTower height alone = total − cliff = $125.0 - 106.3 \\approx 18.7 \\approx 18.8$ m.\n\nVerification: a $4°$ increase in angle of elevation over $200$ m horizontal distance produces a height increase of about $200 \\cdot 0.1 \\approx 20$ m — consistent \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — uses $200 \\cdot \\tan(32° - 28°) = 200 \\cdot \\tan(4°) \\approx 14$, which is also wrong; or $200 \\cdot (0.6249 - 0.5317) / 1$ rounded poorly.\n* Choice C: "stops one step early" — gives the cliff height only.\n* Choice D: "stops one step early" — gives the total (cliff + tower) height.\n\n**Test Day Takeaway:** For "object on top of object" problems, compute the total height and the base height separately using tangent, then subtract. The tangents of the two elevations are not the same as the tangent of their difference.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'double-angle-elevation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-048',
    domain: 'geometry',
    skills: ['similar-triangles', 'triangle-area'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Triangle $RST$ is similar to triangle $UVW$ with a scale factor of $3:5$ (from $RST$ to $UVW$). If the area of triangle $RST$ is $27$ square units, what is the area of triangle $UVW$?',
    choices: [
      // distractor: applies the linear ratio instead of squared
      { id: 'A', text: '$45$' },
      { id: 'B', text: '$75$' },
      // distractor: applies the linear ratio twice (overcorrect)
      { id: 'C', text: '$135$' },
      // distractor: applies the cubed ratio (volume scaling)
      { id: 'D', text: '$225$' },
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Area Scaling by Square of Linear Factor**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Area scales as the square of the linear ratio: $27 \\cdot \\left(\\frac{5}{3}\\right)^2 = 27 \\cdot \\frac{25}{9} = 75$.\n\n**The Full Solution:**\nFor similar figures with linear scale factor $k$:\n* Lengths scale by $k$.\n* Areas scale by $k^2$.\n* Volumes scale by $k^3$.\n\nFrom $RST$ to $UVW$, the linear ratio is $\\frac{5}{3}$, so the area ratio is $\\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$.\n\n$\\text{area}(UVW) = 27 \\cdot \\frac{25}{9} = 3 \\cdot 25 = 75$ square units.\n\nVerification: $\\frac{75}{27} = \\frac{25}{9} = \\left(\\frac{5}{3}\\right)^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — uses the linear ratio $\\frac{5}{3}$: $27 \\cdot \\frac{5}{3} = 45$.\n* Choice C: "off-by-one" — uses $\\frac{5}{3}$ then multiplies by another fraction.\n* Choice D: "wrong formula" — uses $\\left(\\frac{5}{3}\\right)^3$ (volume scaling) by mistake.\n\n**Test Day Takeaway:** Areas of similar figures scale as the SQUARE of the linear ratio. If a problem gives a length ratio and asks about area, always square it.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'area-scaling',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-049',
    domain: 'geometry',
    skills: ['volume-scaling'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Two similar cylindrical tanks have heights in the ratio $2:3$. If the smaller tank holds $80$ gallons, how many gallons does the larger tank hold?',
    choices: [
      // distractor: uses the linear ratio
      { id: 'A', text: '$120$' },
      // distractor: uses the square of the ratio
      { id: 'B', text: '$180$' },
      { id: 'C', text: '$270$' },
      // distractor: scales by 3:1 directly
      { id: 'D', text: '$240$' },
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Volume Scaling by Cube of Linear Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Volume scales as $(\\text{linear ratio})^3$. $\\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$. $80 \\cdot \\frac{27}{8} = 10 \\cdot 27 = 270$.\n\n**The Full Solution:**\nFor similar solids with linear ratio $k$, volumes scale by $k^3$. Height ratio is $\\frac{3}{2}$ (since the tanks are similar, all linear dimensions scale by this factor), so volume ratio is:\n$\\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$.\n\nLarger volume $= 80 \\cdot \\frac{27}{8} = 270$ gallons.\n\nVerification: $\\frac{270}{80} = \\frac{27}{8} = \\left(\\frac{3}{2}\\right)^3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — uses the linear ratio: $80 \\cdot \\frac{3}{2} = 120$.\n* Choice B: "wrong formula" — uses the squared ratio: $80 \\cdot \\frac{9}{4} = 180$ (area scaling).\n* Choice D: "wrong base" — uses ratio $3:1$ instead of $3:2$.\n\n**Test Day Takeaway:** "Similar" solids means ALL linear dimensions scale together. Volume scales as the CUBE of any linear ratio.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'volume-scaling-ratio',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-050',
    domain: 'geometry',
    skills: ['circle-equation', 'tangent-lines'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'The circle $(x - 2)^2 + (y + 1)^2 = 25$ has a tangent line at the point $(5, 3)$. What is the slope of this tangent line? Express your answer as a fraction $-\\frac{a}{b}$ in lowest terms and enter $a + b$.',
    correctAnswer: '7',
    explanation: '**SAT Pattern: Tangent Slope from Perpendicular Radius**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~30s):** Center $(2, -1)$. Radius to $(5, 3)$ has slope $\\frac{3 - (-1)}{5 - 2} = \\frac{4}{3}$. Tangent is perpendicular, so its slope is $-\\frac{3}{4}$. Thus $a + b = 3 + 4 = 7$.\n\n**The Full Solution:**\nThe tangent to a circle at a point is perpendicular to the radius at that point.\n\nCenter from the equation: $(h, k) = (2, -1)$.\n\nSlope of radius from $(2, -1)$ to $(5, 3)$:\n$m_{\\text{radius}} = \\frac{3 - (-1)}{5 - 2} = \\frac{4}{3}$.\n\nSlope of tangent = negative reciprocal:\n$m_{\\text{tangent}} = -\\frac{3}{4}$.\n\nIn the form $-\\frac{a}{b}$: $a = 3$, $b = 4$, so $a + b = 7$.\n\nVerification: $\\frac{4}{3} \\cdot \\left(-\\frac{3}{4}\\right) = -1$ \\checkmark (perpendicular slopes multiply to $-1$).\n\n**Common Mistakes to Avoid:**\n* Forgetting the negative sign on the tangent slope.\n* Computing the radius slope FROM the point TO the center (gives the same line but flips signs if not careful).\n* Reporting $\\frac{3}{4}$ or $-\\frac{3}{4}$ instead of $a + b = 7$.\n\n**Test Day Takeaway:** Tangent perpendicular to radius is THE key circle theorem. Find the slope of the radius (center → point), take the negative reciprocal, and you have the tangent slope.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'tangent-slope-circle',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-051',
    domain: 'geometry',
    skills: ['special-right-triangles', 'soh-cah-toa'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A regular hexagon has a side length of $8$. What is the area of the hexagon?',
    choices: [
      { id: 'A', text: '$96\\sqrt{3}$' },
      // distractor: uses 6 × s² without the equilateral-triangle factor
      { id: 'B', text: '$192$' },
      // distractor: gives half the correct area
      { id: 'C', text: '$48\\sqrt{3}$' },
      // distractor: 6 × s² with s = 8 gives 384
      { id: 'D', text: '$384$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Regular Hexagon Area via Equilateral Triangles**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** A regular hexagon $=$ $6$ equilateral triangles with the same side length. Each triangle has area $\\frac{s^2 \\sqrt{3}}{4} = \\frac{64\\sqrt{3}}{4} = 16\\sqrt{3}$. Total $= 6 \\cdot 16\\sqrt{3} = 96\\sqrt{3}$.\n\n**The Full Solution:**\nDrawing all three long diagonals through the center of a regular hexagon divides it into $6$ congruent equilateral triangles, each with side $s = 8$. The area of one equilateral triangle with side $s$:\n$A_{\\Delta} = \\frac{s^2 \\sqrt{3}}{4} = \\frac{64\\sqrt{3}}{4} = 16\\sqrt{3}$.\n\nTotal hexagon area:\n$A_{\\text{hex}} = 6 \\cdot 16\\sqrt{3} = 96\\sqrt{3}$ square units.\n\nVerification: $96\\sqrt{3} \\approx 166.3$. The hexagon fits inside a circle of radius $8$ (area $64\\pi \\approx 201$), so $166.3$ is consistent \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — uses $6s^2$ as if the triangles were squares.\n* Choice C: "off-by-one" — uses $3$ triangles instead of $6$ (just half the hexagon).\n* Choice D: "wrong formula" — uses $6s^2$ with $s^2 = 64$.\n\n**Test Day Takeaway:** A regular hexagon decomposes into $6$ equilateral triangles. Equilateral triangle area formula: $\\frac{s^2\\sqrt{3}}{4}$. Memorize it — the SAT loves hexagons.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'composite-geometry',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-052',
    domain: 'geometry',
    skills: ['sector-area', 'arc-length'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A sector of a circle has an arc length of $3\\pi$ cm and a radius of $9$ cm. What is the area, in square centimeters, of the sector?',
    choices: [
      { id: 'A', text: '$\\frac{27\\pi}{2}$' },
      // distractor: omits the (1/2) in sector area formula
      { id: 'B', text: '$27\\pi$' },
      // distractor: uses (1/2)(9)(π/3) instead of (1/2)r²θ
      { id: 'C', text: '$\\frac{9\\pi}{2}$' },
      // distractor: gives the full-circle area
      { id: 'D', text: '$81\\pi$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Sector Area from Arc Length**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Arc $= r\\theta$ gives $\\theta = \\frac{3\\pi}{9} = \\frac{\\pi}{3}$ radians. Sector area $= \\frac{1}{2}r^2\\theta = \\frac{1}{2}(81)\\left(\\frac{\\pi}{3}\\right) = \\frac{27\\pi}{2}$.\n\n**The Full Solution:**\nFirst find the central angle from the arc length: $s = r\\theta$ (radians), so:\n$\\theta = \\frac{s}{r} = \\frac{3\\pi}{9} = \\frac{\\pi}{3}$ radians.\n\nThen the sector area:\n$A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(9)^2 \\cdot \\frac{\\pi}{3} = \\frac{81}{2} \\cdot \\frac{\\pi}{3} = \\frac{81\\pi}{6} = \\frac{27\\pi}{2}$ cm².\n\nVerification: $\\frac{\\pi}{3}$ radians is $\\frac{1}{6}$ of a full circle ($2\\pi$). Full circle area is $81\\pi$, so sector is $\\frac{81\\pi}{6} = \\frac{27\\pi}{2}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — uses $r^2\\theta$ without the $\\frac{1}{2}$.\n* Choice C: "wrong base" — uses $\\frac{1}{2}(9)\\theta$ instead of $\\frac{1}{2}r^2\\theta$.\n* Choice D: "stops one step early" — gives the full circle area without scaling.\n\n**Test Day Takeaway:** Sector area = $\\frac{1}{2}r^2\\theta$ (radians). The $\\frac{1}{2}$ comes from integration; the SAT does not derive it, so just memorize the formula.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-sector',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-053',
    domain: 'geometry',
    skills: ['volume-pyramid-cone', 'volume-prism'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A silo consists of a cylinder with radius $5$ m and height $12$ m, topped by a cone with the same radius and a height of $4$ m. What is the total volume of the silo, in terms of $\\pi$?',
    choices: [
      { id: 'A', text: '$\\frac{1000\\pi}{3}$' },
      // distractor: omits the cone (1/3) factor in the partial sum
      { id: 'B', text: '$\\frac{800\\pi}{3}$' },
      // distractor: treats the cone as a cylinder
      { id: 'C', text: '$400\\pi$' },
      // distractor: arithmetic slip yielding 980/3
      { id: 'D', text: '$\\frac{980\\pi}{3}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Composite Solid Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Cylinder: $\\pi(25)(12) = 300\\pi$. Cone: $\\frac{1}{3}\\pi(25)(4) = \\frac{100\\pi}{3}$. Total: $300\\pi + \\frac{100\\pi}{3} = \\frac{900 + 100}{3}\\pi = \\frac{1000\\pi}{3}$.\n\n**The Full Solution:**\nThe silo decomposes into a cylinder + a cone with the same radius.\n\nCylinder volume: $V_{\\text{cyl}} = \\pi r^2 h = \\pi(5)^2(12) = 300\\pi$.\n\nCone volume: $V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(5)^2(4) = \\frac{100\\pi}{3}$.\n\nTotal: $300\\pi + \\frac{100\\pi}{3} = \\frac{900\\pi + 100\\pi}{3} = \\frac{1000\\pi}{3}$ m³.\n\nVerification: $\\frac{1000\\pi}{3} \\approx 1047$. A solid cylinder of height $16$ would have volume $\\pi(25)(16) = 400\\pi \\approx 1257$. Our silo is slightly less because the cone narrows — consistent \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "off-by-one" — uses $\\frac{800\\pi}{3}$, arithmetic slip on the sum.\n* Choice C: "wrong formula" — treats the cone as a cylinder ($100\\pi$ instead of $\\frac{100\\pi}{3}$), giving total $400\\pi$.\n* Choice D: "off-by-one" — arithmetic mistake yielding $\\frac{980}{3}$.\n\n**Test Day Takeaway:** Composite solid problems: identify each shape, compute each volume separately, then add. Don\'t skip the $\\frac{1}{3}$ for cones/pyramids.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'composite-solid',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-054',
    domain: 'geometry',
    skills: ['pythagorean-theorem', 'volume-pyramid-cone'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A cone has a slant height of $15$ cm and a radius of $9$ cm. What is the volume of the cone, in cubic centimeters? (Give your answer as a number times $\\pi$; enter just the number.)',
    correctAnswer: '324',
    explanation: '**SAT Pattern: Cone Volume from Slant Height**\n\n**The correct answer is $324$.**\n\n**The Fast Way (~25s):** Height from Pythagoras: $h = \\sqrt{15^2 - 9^2} = \\sqrt{144} = 12$. Volume: $\\frac{1}{3}\\pi(81)(12) = 324\\pi$.\n\n**The Full Solution:**\nThe slant height, radius, and (vertical) height of a cone form a right triangle, with the slant as the hypotenuse:\n$h^2 + r^2 = (\\text{slant})^2$\n$h^2 = 15^2 - 9^2 = 225 - 81 = 144$\n$h = 12$ cm.\n\nVolume: $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(81)(12) = \\frac{972\\pi}{3} = 324\\pi$ cm³.\n\nCoefficient of $\\pi$ is $324$.\n\nVerification: $9$-$12$-$15$ is a $3$-$4$-$5$ Pythagorean triple scaled by $3$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using slant height as $h$ in the volume formula — gives $\\frac{1}{3}\\pi(81)(15) = 405\\pi$.\n* Forgetting Pythagoras altogether and using $r + h$ accidentally.\n* Reporting $324\\pi$ instead of just $324$.\n\n**Test Day Takeaway:** Cone slant height $\\ell$, radius $r$, height $h$: $\\ell^2 = r^2 + h^2$. Always solve for $h$ before using the volume formula, since the formula needs the vertical height, not slant.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-solid',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-055',
    domain: 'geometry',
    skills: ['completing-square-circles', 'circle-area'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'The equation $2x^2 + 2y^2 - 12x + 8y - 24 = 0$ describes a circle. What is the radius of this circle?',
    correctAnswer: '5',
    explanation: '**SAT Pattern: Normalize Circle Equation Before Completing**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~45s):** Divide by $2$ first: $x^2 + y^2 - 6x + 4y - 12 = 0$. Complete: $(x - 3)^2 + (y + 2)^2 = 9 + 4 + 12 = 25$. So $r = 5$.\n\n**The Full Solution:**\nDivide everything by $2$ so the $x^2$ and $y^2$ coefficients are $1$:\n$x^2 + y^2 - 6x + 4y - 12 = 0$.\n\nGroup and complete the square:\n$(x^2 - 6x) + (y^2 + 4y) = 12$\n$(x - 3)^2 + (y + 2)^2 = 12 + 9 + 4 = 25$.\n\nSo $r^2 = 25$ and $r = 5$.\n\nVerification: center $(3, -2)$, radius $5$. Test point $(8, -2)$: $(8-3)^2 + (-2+2)^2 = 25$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to divide by $2$ first — gives wrong completed-square values.\n* Reporting $r^2 = 25$ instead of $r = 5$.\n* Sign errors when moving constants across the equation.\n\n**Test Day Takeaway:** If the coefficients on $x^2$ and $y^2$ are not $1$, DIVIDE everything by that coefficient before completing the square. Otherwise the standard form is broken.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'non-standard-circle-equation',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-056',
    domain: 'geometry',
    skills: ['triangle-angle-sum', 'soh-cah-toa'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'In right triangle $ABC$ with the right angle at $C$, $\\sin(A) = \\frac{5}{13}$. What is $\\cos(B)$?',
    diagram: {
      type: 'rightTriangle',
      params: {
        labels: ['A', 'C', 'B'],
        sideLabels: ['', '13', '5'],
        rightAngleVertex: 1,
      },
    },
    choices: [
      { id: 'A', text: '$\\frac{5}{13}$' },
      // distractor: gives cos(A) instead of cos(B)
      { id: 'B', text: '$\\frac{12}{13}$' },
      // distractor: gives tan(A)
      { id: 'C', text: '$\\frac{5}{12}$' },
      // distractor: inverts sin(A) (csc A)
      { id: 'D', text: '$\\frac{13}{5}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Cofunction Identity**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In a right triangle, the two acute angles are complementary ($A + B = 90°$), so $\\cos(B) = \\sin(A) = \\frac{5}{13}$.\n\n**The Full Solution:**\nIn a right triangle, the two non-right angles sum to $90°$ (since all three angles sum to $180°$ and one is $90°$). The cofunction identity says:\n$\\cos(90° - \\theta) = \\sin(\\theta)$.\nApplied here: $\\cos(B) = \\cos(90° - A) = \\sin(A) = \\frac{5}{13}$.\n\nVerification: with $\\sin(A) = \\frac{5}{13}$, the side opposite $A$ is $5$ and the hypotenuse is $13$. The side opposite $A$ is adjacent to $B$, so $\\cos(B) = \\frac{\\text{adjacent to } B}{\\text{hypotenuse}} = \\frac{5}{13}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — gives $\\cos(A) = \\frac{12}{13}$ (using the $5$-$12$-$13$ triple).\n* Choice C: "wrong formula" — gives $\\tan(A) = \\frac{5}{12}$.\n* Choice D: "applies the inverse operation" — flips $\\sin(A)$ to get $\\csc(A)$, which can never be valid for cosine.\n\n**Test Day Takeaway:** Cofunction identity for complementary angles: $\\sin(A) = \\cos(90° - A)$. In a right triangle the two acute angles are complementary, so swapping sine and cosine between them is always valid.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'complementary-angle-identity',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-057',
    domain: 'geometry',
    skills: ['volume-sphere', 'volume-scaling'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Sphere $A$ has a radius of $r$ and sphere $B$ has a radius of $2r$. The volume of sphere $B$ is how many times the volume of sphere $A$?',
    choices: [
      // distractor: uses the linear ratio
      { id: 'A', text: '$2$' },
      // distractor: uses the squared ratio
      { id: 'B', text: '$4$' },
      // distractor: averages the linear and cubed ratios
      { id: 'C', text: '$6$' },
      { id: 'D', text: '$8$' },
    ],
    correctAnswer: 'D',
    explanation: '**SAT Pattern: Pure Volume Scaling**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Linear ratio $2$, cubed for volume: $2^3 = 8$.\n\n**The Full Solution:**\nFor similar solids, volume scales as the cube of the linear ratio. Sphere $B$\'s radius is $2$ times sphere $A$\'s, so:\n$\\frac{V_B}{V_A} = (2)^3 = 8$.\n\nDirectly: $V_A = \\frac{4}{3}\\pi r^3$ and $V_B = \\frac{4}{3}\\pi(2r)^3 = \\frac{4}{3}\\pi \\cdot 8r^3$, so $\\frac{V_B}{V_A} = 8$.\n\nVerification: $\\frac{V_B}{V_A} = \\frac{\\frac{4}{3}\\pi(2r)^3}{\\frac{4}{3}\\pi r^3} = \\frac{8r^3}{r^3} = 8$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong formula" — uses the linear ratio directly.\n* Choice B: "wrong formula" — uses the squared ratio (area scaling).\n* Choice C: "wrong base" — averages or otherwise mangles the calculation.\n\n**Test Day Takeaway:** Doubling the radius multiplies the volume by $8$. Tripling multiplies by $27$. Halving divides by $8$. Power-of-three behavior — the most-tested scaling fact on the SAT.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'scaling-conceptual',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-058',
    domain: 'geometry',
    skills: ['radians-to-degrees', 'sector-area'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A sector of a circle with radius $12$ has a central angle of $\\frac{5\\pi}{6}$ radians. What is the area of the sector?',
    choices: [
      { id: 'A', text: '$60\\pi$' },
      // distractor: gives half the correct value
      { id: 'B', text: '$30\\pi$' },
      // distractor: doubles the correct value
      { id: 'C', text: '$120\\pi$' },
      // distractor: drops the r² factor
      { id: 'D', text: '$10\\pi$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Sector Area in Radians**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(144)\\left(\\frac{5\\pi}{6}\\right) = 72 \\cdot \\frac{5\\pi}{6} = 12 \\cdot 5\\pi = 60\\pi$.\n\n**The Full Solution:**\nSector area in radians: $A = \\frac{1}{2}r^2\\theta$. With $r = 12$ and $\\theta = \\frac{5\\pi}{6}$:\n$A = \\frac{1}{2}(12)^2 \\cdot \\frac{5\\pi}{6} = \\frac{1}{2}(144) \\cdot \\frac{5\\pi}{6} = 72 \\cdot \\frac{5\\pi}{6} = 60\\pi$ sq units.\n\nVerification: $\\frac{5\\pi}{6}$ radians is $\\frac{5}{12}$ of a full circle ($2\\pi$). Full area $= \\pi(144) = 144\\pi$. Sector $= \\frac{5}{12} \\cdot 144\\pi = 60\\pi$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "off-by-one" — divides correct answer by $2$.\n* Choice C: "wrong formula" — omits the $\\frac{1}{2}$, giving $r^2\\theta = 120\\pi$.\n* Choice D: "wrong base" — uses $r$ instead of $r^2$.\n\n**Test Day Takeaway:** Sector area formulas: $\\frac{1}{2}r^2\\theta$ (radians) or $\\frac{\\theta}{360}\\pi r^2$ (degrees). Same answer, different formulas. Pick the one that matches the units.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'radian-sector-area',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-059',
    domain: 'geometry',
    skills: ['similar-triangles', 'pythagorean-theorem'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'In right triangle $XYZ$ with hypotenuse $XZ = 20$, the altitude from $Y$ to $XZ$ has length $h$. If $XY = 12$, what is the value of $h$?',
    diagram: {
      type: 'rightTriangle',
      params: {
        labels: ['X', 'Y', 'Z'],
        sideLabels: ['12', '20', ''],
        rightAngleVertex: 1,
      },
    },
    correctAnswer: '9.6',
    explanation: '**SAT Pattern: Altitude to Hypotenuse**\n\n**The correct answer is $9.6$.**\n\n**The Fast Way (~30s):** Find $YZ = 16$ (since $12$-$16$-$20$ is $3$-$4$-$5$ scaled by $4$). Area $= \\frac{1}{2}(12)(16) = 96 = \\frac{1}{2}(20)h$, so $h = \\frac{192}{20} = 9.6$.\n\n**The Full Solution:**\nFirst find leg $YZ$ using Pythagoras:\n$YZ = \\sqrt{XZ^2 - XY^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$.\n\nThe area of the right triangle can be computed two ways:\n* Using legs: $A = \\frac{1}{2}(XY)(YZ) = \\frac{1}{2}(12)(16) = 96$.\n* Using hypotenuse and altitude: $A = \\frac{1}{2}(XZ)(h) = \\frac{1}{2}(20)(h) = 10h$.\n\nSet them equal: $10h = 96 \\Rightarrow h = 9.6$.\n\nVerification: $12$-$16$-$20$ is a $3$-$4$-$5$ Pythagorean triple scaled by $4$ \\checkmark. The altitude formula $h = \\frac{\\text{leg}_1 \\cdot \\text{leg}_2}{\\text{hypotenuse}} = \\frac{12 \\cdot 16}{20} = 9.6$ checks out.\n\n**Common Mistakes to Avoid:**\n* Using $XY$ as the altitude — confuses the perpendicular legs with the altitude to the hypotenuse.\n* Forgetting that $YZ$ must be found first.\n* Reporting $96$ (the area) instead of $h$.\n\n**Test Day Takeaway:** In a right triangle, the altitude to the hypotenuse $= \\frac{\\text{leg}_1 \\cdot \\text{leg}_2}{\\text{hypotenuse}}$. This is the "two-areas trick" — equate the two area expressions to solve for the altitude.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'altitude-to-hypotenuse',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },
  {
    id: 'bank-geo-060',
    domain: 'geometry',
    skills: ['circle-parts', 'arc-length', 'sector-area'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'A circular track has a circumference of $400$ meters. A runner starts at point $A$ and runs along the track to point $B$, covering an arc of $150$ meters. What is the area, in square meters, of the sector $AOB$ where $O$ is the center of the track?',
    choices: [
      { id: 'A', text: '$\\frac{15000}{\\pi}$' },
      // distractor: doubles the correct value
      { id: 'B', text: '$\\frac{30000}{\\pi}$' },
      // distractor: uses circumference in place of radius squared
      { id: 'C', text: '$6000\\pi$' },
      // distractor: forgets to halve correctly
      { id: 'D', text: '$\\frac{60000}{\\pi}$' },
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Circumference → Radius → Sector**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** $r = \\frac{400}{2\\pi} = \\frac{200}{\\pi}$. $\\theta = \\frac{150}{r} = \\frac{150\\pi}{200} = \\frac{3\\pi}{4}$. Sector area $= \\frac{1}{2}r^2\\theta = \\frac{1}{2} \\cdot \\frac{40000}{\\pi^2} \\cdot \\frac{3\\pi}{4} = \\frac{15000}{\\pi}$.\n\n**The Full Solution:**\nStep 1: Find the radius from circumference.\n$C = 2\\pi r \\Rightarrow r = \\frac{400}{2\\pi} = \\frac{200}{\\pi}$.\n\nStep 2: Find the central angle in radians from the arc length.\n$\\theta = \\frac{\\text{arc}}{r} = \\frac{150}{200/\\pi} = \\frac{150\\pi}{200} = \\frac{3\\pi}{4}$.\n\nStep 3: Compute the sector area.\n$A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}\\left(\\frac{200}{\\pi}\\right)^2 \\cdot \\frac{3\\pi}{4} = \\frac{1}{2} \\cdot \\frac{40000}{\\pi^2} \\cdot \\frac{3\\pi}{4} = \\frac{40000 \\cdot 3}{8\\pi} = \\frac{15000}{\\pi}$ sq m.\n\nVerification: alternatively, sector area $= \\frac{\\text{arc}}{\\text{circumference}} \\cdot \\pi r^2 = \\frac{150}{400} \\cdot \\pi \\cdot \\frac{40000}{\\pi^2} = \\frac{3}{8} \\cdot \\frac{40000}{\\pi} = \\frac{15000}{\\pi}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "off-by-one" — doubles the correct value.\n* Choice C: "wrong formula" — uses $C^2$ or $C \\cdot r$ somewhere instead of $r^2$.\n* Choice D: "wrong base" — uses $r$ unsquared or doubles incorrectly.\n\n**Test Day Takeaway:** Multi-step track problems: extract $r$ from circumference, $\\theta$ from arc length (in radians, $\\theta = \\text{arc}/r$), then apply sector area $\\frac{1}{2}r^2\\theta$. Alternative: use the fraction $\\frac{\\text{arc}}{\\text{circumference}}$ of the full circle area.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'multi-step-track-problem',
    authoredBy: 'performsat-engine',
    createdAt: '2026-02-28',
  },

  // === RIGHT-TRIANGLE TRIG RATIOS (8 questions) — Phase 2 priority pattern ===
  // 17x in 12 tests = 3.2% of test items. Covers: SOHCAHTOA from given sides,
  // side-from-ratio scaling, identity-based ratio composition, real-world angle.
  // Pythagorean triples used: 5-12-13, 8-15-17, 7-24-25, 3-4-5.
  {
    id: 'bank-geo-061',
    domain: 'geometry',
    skills: ['soh-cah-toa', 'pythagorean-theorem'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'In right triangle $ABC$, the right angle is at vertex $C$. If $AB = 13$ and $BC = 5$, what is the value of $\\sin A$?',
    choices: [
      { id: 'A', text: '$\\dfrac{5}{13}$' },
      // distractor: cos(A) instead of sin(A)
      { id: 'B', text: '$\\dfrac{12}{13}$' },
      // distractor: tan(A)
      { id: 'C', text: '$\\dfrac{5}{12}$' },
      // distractor: inverts the ratio (csc instead of sin)
      { id: 'D', text: '$\\dfrac{13}{5}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $AB$ is the hypotenuse (opposite the right angle at $C$). Side $BC$ is opposite angle $A$. $\\sin A = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{5}{13}$.\n\n**The Full Solution:**\nThe right angle is at $C$, so the hypotenuse is the side opposite $C$, which is $AB = 13$.\nThe side opposite angle $A$ is $BC = 5$.\n\nBy SOH: $\\sin A = \\dfrac{\\text{opposite to } A}{\\text{hypotenuse}} = \\dfrac{BC}{AB} = \\dfrac{5}{13}$.\n\nVerification: $AC = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$. Recognize the $5$-$12$-$13$ triple. $\\sin A = 5/13$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses $AC = 12$ (adjacent to $A$); this is $\\cos A$, not $\\sin A$.\n* Choice C: "applies the inverse operation" — gives $\\dfrac{BC}{AC} = \\dfrac{5}{12}$, which is $\\tan A$.\n* Choice D: "applies the inverse operation" — inverts $\\sin A$ to get $\\csc A$.\n\n**Test Day Takeaway:** Step 1: identify the hypotenuse (opposite the right angle). Step 2: for the angle in question, identify opposite and adjacent. Step 3: apply SOH-CAH-TOA.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'right-triangle-trig-ratios',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-062',
    domain: 'geometry',
    skills: ['soh-cah-toa', 'pythagorean-theorem'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'In right triangle $PQR$, the right angle is at vertex $R$. If $PQ = 17$ and $PR = 8$, what is the value of $\\cos P$?',
    choices: [
      { id: 'A', text: '$\\dfrac{8}{17}$' },
      // distractor: sin P instead of cos P
      { id: 'B', text: '$\\dfrac{15}{17}$' },
      // distractor: tan P
      { id: 'C', text: '$\\dfrac{15}{8}$' },
      // distractor: inverts to sec P
      { id: 'D', text: '$\\dfrac{17}{8}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $PQ$ is the hypotenuse. $PR$ is adjacent to angle $P$. $\\cos P = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{8}{17}$.\n\n**The Full Solution:**\nThe right angle is at $R$, so $PQ = 17$ is the hypotenuse.\nThe side adjacent to angle $P$ (touching $P$ but not the hypotenuse) is $PR = 8$.\n\nBy CAH: $\\cos P = \\dfrac{PR}{PQ} = \\dfrac{8}{17}$.\n\nVerification: $QR = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$. Recognize the $8$-$15$-$17$ triple. $\\cos P = 8/17$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — uses $QR = 15$ (opposite to $P$); this is $\\sin P$, not $\\cos P$.\n* Choice C: "applies the inverse operation" — gives $\\dfrac{QR}{PR} = \\dfrac{15}{8}$, which is $\\tan P$.\n* Choice D: "applies the inverse operation" — inverts $\\cos P$ to get $\\sec P$.\n\n**Test Day Takeaway:** For $\\cos$ of an angle, identify the side ADJACENT to that angle (touching it but not the hypotenuse), then divide by the hypotenuse.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'right-triangle-trig-ratios',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-063',
    domain: 'geometry',
    skills: ['soh-cah-toa', 'pythagorean-theorem'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In right triangle $JKL$, the right angle is at vertex $K$. If $JK = 7$ and $KL = 24$, what is the value of $\\tan L$?',
    choices: [
      // distractor: sin(L)
      { id: 'A', text: '$\\dfrac{7}{25}$' },
      { id: 'B', text: '$\\dfrac{7}{24}$' },
      // distractor: cos(L)
      { id: 'C', text: '$\\dfrac{24}{25}$' },
      // distractor: inverse (cot L)
      { id: 'D', text: '$\\dfrac{24}{7}$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** With right angle at $K$, for angle $L$: opposite $= JK = 7$, adjacent $= KL = 24$. $\\tan L = \\dfrac{7}{24}$.\n\n**The Full Solution:**\nThe right angle is at $K$, so $JL$ is the hypotenuse.\nFor angle $L$:\n* The side OPPOSITE $L$ is $JK = 7$.\n* The side ADJACENT to $L$ (and not the hypotenuse) is $KL = 24$.\n\nBy TOA: $\\tan L = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{JK}{KL} = \\dfrac{7}{24}$.\n\nVerification: $JL = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$. This is the $7$-$24$-$25$ Pythagorean triple. $\\tan L = 7/24$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses hypotenuse ($25$) as the denominator; this gives $\\sin L = 7/25$.\n* Choice C: "wrong base" — gives $\\dfrac{KL}{JL} = \\dfrac{24}{25}$, which is $\\cos L$.\n* Choice D: "applies the inverse operation" — swaps opposite and adjacent (gives $\\cot L$).\n\n**Test Day Takeaway:** For $\\tan$, you do NOT need the hypotenuse — just opposite over adjacent. The hypotenuse value $25$ is a distractor in this problem.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'right-triangle-trig-ratios',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-064',
    domain: 'geometry',
    skills: ['soh-cah-toa', 'special-right-triangles'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In right triangle $ABC$, the right angle is at vertex $A$. If $\\cos B = \\dfrac{3}{5}$ and $AB = 18$, what is the length of $BC$?',
    choices: [
      // distractor: uses raw 3-5 ratio without scaling: thinks AB = 3 → BC = 5
      { id: 'A', text: '$5$' },
      // distractor: uses AC = 24 instead of BC
      { id: 'B', text: '$24$' },
      { id: 'C', text: '$30$' },
      // distractor: applies inverse — divides 18 by 3/5 wrong
      { id: 'D', text: '$10.8$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\cos B = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{AB}{BC} = \\dfrac{3}{5}$. So $\\dfrac{18}{BC} = \\dfrac{3}{5} \\Rightarrow BC = \\dfrac{18 \\cdot 5}{3} = 30$.\n\n**The Full Solution:**\nThe right angle is at $A$, so $BC$ is the hypotenuse.\nFor angle $B$: adjacent $= AB$, opposite $= AC$.\n$\\cos B = \\dfrac{AB}{BC} = \\dfrac{3}{5}$.\n\nSet up the proportion: $\\dfrac{18}{BC} = \\dfrac{3}{5}$.\nCross-multiply: $3 \\cdot BC = 18 \\cdot 5 = 90 \\Rightarrow BC = 30$.\n\nVerification: $AC = \\sqrt{30^2 - 18^2} = \\sqrt{900 - 324} = \\sqrt{576} = 24$. This is the $3$-$4$-$5$ triple scaled by $6$: sides $18$-$24$-$30$. $\\cos B = 18/30 = 3/5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "stops one step early" — reports the raw ratio numerator $5$ without scaling to match $AB = 18$.\n* Choice B: "wrong base" — gives $AC = 24$ (the third side) instead of $BC$ (the hypotenuse, which is what was asked).\n* Choice D: "applies the inverse operation" — computes $18 \\cdot (3/5) = 10.8$ instead of $18 \\cdot (5/3)$.\n\n**Test Day Takeaway:** When given a trig ratio and one side, set up a proportion: $\\dfrac{\\text{given side}}{\\text{unknown}} = \\dfrac{\\text{matching ratio piece}}{\\text{ratio piece for unknown}}$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'right-triangle-trig-ratios',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-065',
    domain: 'geometry',
    skills: ['soh-cah-toa', 'special-right-triangles'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In right triangle $MNP$, the right angle is at vertex $P$. If $\\sin M = \\dfrac{24}{25}$, what is the value of $\\cos M$?',
    choices: [
      { id: 'A', text: '$\\dfrac{7}{25}$' },
      // distractor: tan M instead of cos M
      { id: 'B', text: '$\\dfrac{24}{7}$' },
      // distractor: subtracts naively: 1 - 24/25 = 1/25
      { id: 'C', text: '$\\dfrac{1}{25}$' },
      // distractor: cot M
      { id: 'D', text: '$\\dfrac{7}{24}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $\\sin M = \\dfrac{24}{25}$ means opposite $= 24$, hypotenuse $= 25$. This is the $7$-$24$-$25$ triple, so adjacent $= 7$. Therefore $\\cos M = \\dfrac{7}{25}$.\n\n**The Full Solution:**\nGiven $\\sin M = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{24}{25}$, scale so that opposite $= 24$ and hypotenuse $= 25$.\n\nUse Pythagoras to find the adjacent side: adjacent $= \\sqrt{25^2 - 24^2} = \\sqrt{625 - 576} = \\sqrt{49} = 7$.\n\nSo $\\cos M = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{7}{25}$.\n\nAlternatively, use the Pythagorean identity: $\\sin^2 M + \\cos^2 M = 1 \\Rightarrow \\cos^2 M = 1 - \\dfrac{576}{625} = \\dfrac{49}{625} \\Rightarrow \\cos M = \\dfrac{7}{25}$.\n\nVerification: in a $7$-$24$-$25$ triangle, $\\sin M = 24/25$ and $\\cos M = 7/25$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — gives $\\dfrac{\\text{opp}}{\\text{adj}} = \\dfrac{24}{7}$, which is $\\tan M$.\n* Choice C: "wrong formula" — subtracts naively: $1 - \\dfrac{24}{25} = \\dfrac{1}{25}$. The Pythagorean identity uses SQUARES, not the raw values.\n* Choice D: "applies the inverse operation" — gives $\\dfrac{\\text{adj}}{\\text{opp}} = \\dfrac{7}{24}$, which is $\\cot M$.\n\n**Test Day Takeaway:** When given one trig ratio, recognize the Pythagorean triple to find the third side instantly, or use the identity $\\sin^2 + \\cos^2 = 1$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'right-triangle-trig-ratios',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-066',
    domain: 'geometry',
    skills: ['soh-cah-toa', 'triangle-area'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A $30$-foot ladder leans against a vertical wall, making an angle of $\\theta$ with the ground, where $\\cos \\theta = 0.8$. How many feet high up the wall does the ladder reach?',
    choices: [
      { id: 'A', text: '$18$' },
      // distractor: uses cos as wall height (it's the ground distance)
      { id: 'B', text: '$24$' },
      // distractor: gives the hypotenuse (ladder length)
      { id: 'C', text: '$30$' },
      // distractor: uses 1 - 0.8 = 0.2 instead of sin
      { id: 'D', text: '$6$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $\\cos \\theta = 0.8 = 4/5$ means this is the $3$-$4$-$5$ triple, so $\\sin \\theta = 0.6$. Wall height $= 30 \\cdot \\sin \\theta = 30 \\cdot 0.6 = 18$ ft.\n\n**The Full Solution:**\nDraw the right triangle: ladder is the hypotenuse, wall is the side opposite $\\theta$, ground is adjacent.\n* Hypotenuse $= 30$ ft.\n* Adjacent (ground distance) $= 30 \\cdot \\cos \\theta = 30 \\cdot 0.8 = 24$ ft.\n* Opposite (wall height) $= 30 \\cdot \\sin \\theta$.\n\nFind $\\sin \\theta$ via the Pythagorean identity: $\\sin^2 \\theta = 1 - \\cos^2 \\theta = 1 - 0.64 = 0.36 \\Rightarrow \\sin \\theta = 0.6$.\nWall height $= 30 \\cdot 0.6 = 18$ ft.\n\nVerification: ground $= 24$, wall $= 18$, ladder $= 30$. Check: $24^2 + 18^2 = 576 + 324 = 900 = 30^2$ \\checkmark. This is the $3$-$4$-$5$ triple scaled by $6$ (sides $18$-$24$-$30$).\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong base" — gives $30 \\cdot \\cos \\theta = 24$, which is the GROUND DISTANCE, not the wall height.\n* Choice C: "stops one step early" — reports the hypotenuse (ladder length) without computing the opposite side.\n* Choice D: "wrong formula" — uses $1 - \\cos \\theta = 0.2$ instead of $\\sin \\theta$. The complement of cosine is NOT $1 - \\cos$; use the Pythagorean identity.\n\n**Test Day Takeaway:** Draw the triangle and label every side: ladder = hypotenuse, wall = opposite, ground = adjacent. $\\cos \\theta$ gives the ADJACENT ratio; use $\\sin \\theta$ for the OPPOSITE (wall) side.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'right-triangle-trig-ratios',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-067',
    domain: 'geometry',
    skills: ['soh-cah-toa', 'pythagorean-theorem', 'special-right-triangles'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'In right triangle $UVW$, the right angle is at vertex $V$. If $\\tan U = \\dfrac{5}{12}$ and $UV = 36$, what is the perimeter of triangle $UVW$?',
    correctAnswer: '90',
    explanation: '**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~30s):** $\\tan U = \\dfrac{VW}{UV} = \\dfrac{5}{12}$. Scale: $UV = 36 = 12 \\cdot 3$, so the triangle is the $5$-$12$-$13$ triple scaled by $3$: sides $15$-$36$-$39$. Perimeter $= 15 + 36 + 39 = 90$.\n\n**The Full Solution:**\nRight angle at $V$, so $UW$ is the hypotenuse. For angle $U$: opposite $= VW$, adjacent $= UV$.\n$\\tan U = \\dfrac{VW}{UV} = \\dfrac{5}{12}$.\n\nGiven $UV = 36$: $\\dfrac{VW}{36} = \\dfrac{5}{12} \\Rightarrow VW = \\dfrac{36 \\cdot 5}{12} = 15$.\n\nFind the hypotenuse: $UW = \\sqrt{36^2 + 15^2} = \\sqrt{1296 + 225} = \\sqrt{1521} = 39$.\n\nPerimeter $= UV + VW + UW = 36 + 15 + 39 = 90$.\n\nVerification: the sides $15$-$36$-$39$ are the $5$-$12$-$13$ triple scaled by $3$. $5^2 + 12^2 = 169 = 13^2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting only the legs ($36 + 15 = 51$) and forgetting the hypotenuse.\n* Mixing scaled and unscaled values (e.g., $15 + 36 + 13 = 64$).\n* Using $\\dfrac{5}{12}$ as the literal lengths instead of as a ratio.\n\n**Test Day Takeaway:** $\\tan U = \\dfrac{\\text{opposite}}{\\text{adjacent}}$ — recognize $\\dfrac{5}{12}$ as the $5$-$12$-$13$ triple, then scale all three sides by the multiplier ($36/12 = 3$ here).',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'right-triangle-trig-ratios',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-068',
    domain: 'geometry',
    skills: ['soh-cah-toa', 'pythagorean-theorem'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'In right triangle $XYZ$, the right angle is at vertex $Y$. If $\\sin X = \\dfrac{3}{5}$, what is the value of $\\cos X \\cdot \\tan X$?',
    choices: [
      { id: 'A', text: '$\\dfrac{3}{5}$' },
      // distractor: gives cos X alone
      { id: 'B', text: '$\\dfrac{4}{5}$' },
      // distractor: gives tan X alone
      { id: 'C', text: '$\\dfrac{3}{4}$' },
      // distractor: multiplies numerators and denominators wrong (3/5 × 4/5)
      { id: 'D', text: '$\\dfrac{12}{25}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Identity: $\\cos X \\cdot \\tan X = \\cos X \\cdot \\dfrac{\\sin X}{\\cos X} = \\sin X = \\dfrac{3}{5}$.\n\n**The Full Solution:**\nGiven $\\sin X = \\dfrac{3}{5}$, recognize the $3$-$4$-$5$ triple: opposite $= 3$, hypotenuse $= 5$, adjacent $= 4$.\n* $\\cos X = \\dfrac{4}{5}$\n* $\\tan X = \\dfrac{3}{4}$\n\nMultiply: $\\cos X \\cdot \\tan X = \\dfrac{4}{5} \\cdot \\dfrac{3}{4} = \\dfrac{12}{20} = \\dfrac{3}{5}$.\n\nIdentity check: by definition, $\\tan X = \\dfrac{\\sin X}{\\cos X}$, so $\\cos X \\cdot \\tan X = \\sin X$ for any angle. The product simplifies to $\\sin X$.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — reports $\\cos X = \\dfrac{4}{5}$ without multiplying by $\\tan X$.\n* Choice C: "stops one step early" — reports $\\tan X = \\dfrac{3}{4}$ without multiplying by $\\cos X$.\n* Choice D: "wrong formula" — multiplies the wrong fractions ($\\dfrac{3}{5} \\cdot \\dfrac{4}{5} = \\dfrac{12}{25}$) instead of $\\cos \\cdot \\tan$.\n\n**Test Day Takeaway:** The identity $\\cos X \\cdot \\tan X = \\sin X$ collapses the calculation. Recognize it when you see $\\cos$ times $\\tan$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'right-triangle-trig-ratios',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },

  // === CIRCLE IN GENERAL FORM (8 questions) — Phase 2 batch 4 priority pattern ===
  // 8x in 12 tests. Covers: center, radius, h+k+r, area, max-x, find missing
  // parameter, r². Requires completing the square on both x and y groupings.
  // SAT Pattern kebab matches: 'circle-in-general-form'.
  {
    id: 'bank-geo-069',
    domain: 'geometry',
    skills: ['circle-equation', 'completing-square-circles'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A circle in the $xy$-plane has equation $x^2 + y^2 - 4x - 6y - 12 = 0$. What are the coordinates of the center of the circle?',
    choices: [
      { id: 'A', text: '$(2, 3)$' },
      // distractor: sign-flipped both
      { id: 'B', text: '$(-2, -3)$' },
      // distractor: uses raw -B, -C
      { id: 'C', text: '$(4, 6)$' },
      // distractor: sign-flipped one
      { id: 'D', text: '$(2, -3)$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Complete the square: $(x^2 - 4x) + (y^2 - 6y) = 12 \\Rightarrow (x - 2)^2 + (y - 3)^2 = 12 + 4 + 9 = 25$. Center is $(2, 3)$.\n\n**The Full Solution:**\nGroup $x$ and $y$ terms:\n$(x^2 - 4x) + (y^2 - 6y) = 12$.\n\nComplete the square for each:\n* $x^2 - 4x$: add $(-4/2)^2 = 4$. Becomes $(x - 2)^2 - 4$.\n* $y^2 - 6y$: add $(-6/2)^2 = 9$. Becomes $(y - 3)^2 - 9$.\n\nRewrite (adding $4$ and $9$ to both sides):\n$(x - 2)^2 + (y - 3)^2 = 12 + 4 + 9 = 25$.\n\nStandard form: $(x - h)^2 + (y - k)^2 = r^2$ with center $(h, k) = (2, 3)$ and $r = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B: "sign error" — picks $(-h, -k)$ instead of $(h, k)$.\n* Choice C: "wrong formula" — reports $(-B, -C) = (4, 6)$ as if center were the linear coefficients directly.\n* Choice D: "sign error" — flips one of the two signs.\n\n**Test Day Takeaway:** Standard form $(x - h)^2 + (y - k)^2 = r^2$ has center $(h, k)$ with the SIGNS from the form. From general form $x^2 + y^2 + Bx + Cy + D = 0$, center is $(-B/2, -C/2)$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'circle-in-general-form',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-070',
    domain: 'geometry',
    skills: ['circle-equation', 'completing-square-circles'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A circle in the $xy$-plane has equation $x^2 + y^2 + 6x + 8y = 11$. What is the radius of the circle?',
    correctAnswer: '6',
    explanation: '**SAT Pattern: Circle in General Form**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~20s):** Complete the square: $(x + 3)^2 + (y + 4)^2 = 11 + 9 + 16 = 36 = 6^2$. Radius is $6$.\n\n**The Full Solution:**\nGroup and complete the square:\n$(x^2 + 6x) + (y^2 + 8y) = 11$\n$(x^2 + 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16$\n$(x + 3)^2 + (y + 4)^2 = 36$.\n\nSo $r^2 = 36 \\Rightarrow r = 6$.\n\nVerification: half of $6$ is $3$ and $3^2 = 9$; half of $8$ is $4$ and $4^2 = 16$. Sum on the right: $11 + 9 + 16 = 36$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $r^2 = 36$ instead of $r = 6$.\n* Forgetting to add the completing-square constants to BOTH sides.\n\n**Test Day Takeaway:** For $x^2 + Bx$, the completing-square constant is $(B/2)^2$. Add it to both sides, then take a square root to get $r$ from $r^2$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'circle-in-general-form',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-071',
    domain: 'geometry',
    skills: ['circle-equation', 'completing-square-circles'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A circle in the $xy$-plane has equation $x^2 + y^2 + 4x - 10y - 7 = 0$. What are the coordinates of the center?',
    choices: [
      // distractor: sign-flipped both
      { id: 'A', text: '$(2, -5)$' },
      { id: 'B', text: '$(-2, 5)$' },
      // distractor: one sign flipped
      { id: 'C', text: '$(-2, -5)$' },
      // distractor: uses raw -B, -C as coords
      { id: 'D', text: '$(-4, 10)$' }
    ],
    correctAnswer: 'B',
    explanation: '**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $(x + 2)^2 + (y - 5)^2 = 7 + 4 + 25 = 36$. Center $(-2, 5)$.\n\n**The Full Solution:**\nMove constant to right: $x^2 + y^2 + 4x - 10y = 7$.\nGroup and complete the square:\n* $x^2 + 4x \\to (x + 2)^2 - 4$.\n* $y^2 - 10y \\to (y - 5)^2 - 25$.\n\nRewrite:\n$(x + 2)^2 + (y - 5)^2 = 7 + 4 + 25 = 36$.\n\nStandard form gives center $(-2, 5)$, radius $6$.\n\n**Why the wrong answers are tempting:**\n* Choice A: "sign error" — flips both signs.\n* Choice C: "sign error" — flips only the $k$ sign.\n* Choice D: "wrong formula" — reports $-B$ and $-C$ from the linear coefficients without dividing by $2$.\n\n**Test Day Takeaway:** Center coordinates have OPPOSITE signs from what appears in $(x - h)^2$. With $+4x$ in general form, $h = -2$. With $-10y$, $k = +5$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'circle-in-general-form',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-072',
    domain: 'geometry',
    skills: ['circle-equation', 'completing-square-circles'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'In the $xy$-plane, the circle $x^2 + y^2 - 6x + 4y = 12$ has center $(h, k)$ and radius $r$. What is the value of $h + k + r$?',
    correctAnswer: '6',
    explanation: '**SAT Pattern: Circle in General Form**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** $(x - 3)^2 + (y + 2)^2 = 12 + 9 + 4 = 25$. So $h = 3$, $k = -2$, $r = 5$. $h + k + r = 6$.\n\n**The Full Solution:**\nGroup terms and complete the square:\n$(x^2 - 6x) + (y^2 + 4y) = 12$\n$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$\n$(x - 3)^2 + (y + 2)^2 = 25$.\n\nSo $h = 3$, $k = -2$, $r = \\sqrt{25} = 5$.\n\n$h + k + r = 3 + (-2) + 5 = 6$.\n\n**Common Mistakes to Avoid:**\n* Sign errors on $k$: writing $k = 2$ instead of $-2$.\n* Reporting $r^2 = 25$ as $r$.\n* Missing one of $h$, $k$, or $r$ in the sum.\n\n**Test Day Takeaway:** Read off all three values from standard form. Don\'t confuse $r^2$ with $r$ — take the square root at the end.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'circle-in-general-form',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-073',
    domain: 'geometry',
    skills: ['circle-equation', 'completing-square-circles', 'circle-area'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A circle in the $xy$-plane has equation $x^2 + y^2 - 8x + 2y + 1 = 0$. What is the area of the circle, in square units, in terms of $\\pi$?',
    choices: [
      // distractor: uses r = 2
      { id: 'A', text: '$4\\pi$' },
      // distractor: uses diameter as r
      { id: 'B', text: '$8\\pi$' },
      { id: 'C', text: '$16\\pi$' },
      // distractor: doubles correct
      { id: 'D', text: '$32\\pi$' }
    ],
    correctAnswer: 'C',
    explanation: '**SAT Pattern: Circle in General Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $(x - 4)^2 + (y + 1)^2 = -1 + 16 + 1 = 16 \\Rightarrow r^2 = 16$. Area $= \\pi r^2 = 16\\pi$.\n\n**The Full Solution:**\nComplete the square. Move constant to right: $x^2 + y^2 - 8x + 2y = -1$.\n* $x^2 - 8x \\to (x - 4)^2 - 16$.\n* $y^2 + 2y \\to (y + 1)^2 - 1$.\n\nRewrite:\n$(x - 4)^2 + (y + 1)^2 = -1 + 16 + 1 = 16$.\n\nSo $r^2 = 16$, giving area $= \\pi r^2 = 16\\pi$.\n\nVerification: $r = 4$, so $A = \\pi \\cdot 16 = 16\\pi$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: "wrong base" — uses $r = 2$ giving $4\\pi$.\n* Choice B: "wrong formula" — uses $\\pi d$ (circumference-style) instead of $\\pi r^2$.\n* Choice D: "off-by-one" — doubles the correct value.\n\n**Test Day Takeaway:** Area of a circle is $\\pi r^2$ — read $r^2$ DIRECTLY from the right side of standard form, no need to compute $r$ separately.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'circle-in-general-form',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-074',
    domain: 'geometry',
    skills: ['circle-equation', 'completing-square-circles'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A circle in the $xy$-plane has equation $x^2 + y^2 - 6x - 4y - 12 = 0$. What is the largest $x$-value on the circle?',
    correctAnswer: '8',
    explanation: '**SAT Pattern: Circle in General Form**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~25s):** Center $= (3, 2)$, $r = 5$. Largest $x$ on the circle is $h + r = 3 + 5 = 8$.\n\n**The Full Solution:**\nComplete the square:\n$(x - 3)^2 + (y - 2)^2 = 12 + 9 + 4 = 25$.\n\nCenter $(3, 2)$, radius $r = 5$.\n\nThe extreme $x$-values on a circle occur directly right and left of the center, at the points $(h + r, k)$ and $(h - r, k)$:\n* Largest $x$: $h + r = 3 + 5 = 8$.\n* Smallest $x$: $h - r = 3 - 5 = -2$.\n\nVerification: at $(8, 2)$, $(8 - 3)^2 + (2 - 2)^2 = 25 + 0 = 25$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $h - r$ (smallest) instead of $h + r$ (largest).\n* Adding $r^2 = 25$ instead of $r = 5$: $3 + 25 = 28$.\n* Adding $r$ to $k$ instead of $h$.\n\n**Test Day Takeaway:** On a circle with center $(h, k)$ and radius $r$, largest $x$ is $h + r$ (rightmost), smallest is $h - r$. Same idea for $y$ via $k \\pm r$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'circle-in-general-form',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-075',
    domain: 'geometry',
    skills: ['circle-equation'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'In the $xy$-plane, a circle has the equation $x^2 + y^2 + ax + 4y = -4$, where $a$ is a constant. If the circle passes through the point $(1, -2)$, what is the value of $a$?',
    correctAnswer: '-1',
    explanation: '**SAT Pattern: Circle in General Form**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~15s):** Substitute $(1, -2)$: $1 + 4 + a - 8 = -4 \\Rightarrow a - 3 = -4 \\Rightarrow a = -1$.\n\n**The Full Solution:**\nSince $(1, -2)$ lies on the circle, it must satisfy the equation. Substitute $x = 1$, $y = -2$:\n$(1)^2 + (-2)^2 + a(1) + 4(-2) = -4$\n$1 + 4 + a - 8 = -4$\n$a - 3 = -4$\n$a = -1$.\n\nVerification: equation becomes $x^2 + y^2 - x + 4y = -4$. At $(1, -2)$: $1 + 4 - 1 - 8 = -4$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square $-2$ (gives $-2$ instead of $4$).\n* Sign error on $4 \\cdot (-2) = -8$ (writing $+8$).\n* Solving the wrong equation entirely (e.g., setting equal to $0$).\n\n**Test Day Takeaway:** "Passes through" means the point satisfies the equation. Substitute and solve for the unknown parameter — no need to complete the square.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'circle-in-general-form',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-076',
    domain: 'geometry',
    skills: ['circle-equation', 'completing-square-circles'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'The equation $x^2 + y^2 - 2x + 6y + 6 = 0$ represents a circle in the $xy$-plane. What is the value of $r^2$, where $r$ is the radius of the circle?',
    choices: [
      { id: 'A', text: '$4$' },
      // distractor: gives r instead of r²
      { id: 'B', text: '$2$' },
      // distractor: squares correct r²
      { id: 'C', text: '$16$' },
      // distractor: uses original constant
      { id: 'D', text: '$6$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Move constant: $x^2 + y^2 - 2x + 6y = -6$. Complete: $(x - 1)^2 + (y + 3)^2 = -6 + 1 + 9 = 4$. So $r^2 = 4$.\n\n**The Full Solution:**\nMove the constant: $x^2 + y^2 - 2x + 6y = -6$.\n\nComplete the square:\n* $x^2 - 2x$: half of $-2$ is $-1$, $(-1)^2 = 1$. Becomes $(x - 1)^2 - 1$.\n* $y^2 + 6y$: half of $6$ is $3$, $3^2 = 9$. Becomes $(y + 3)^2 - 9$.\n\nAdd $1 + 9 = 10$ to both sides:\n$(x - 1)^2 + (y + 3)^2 = -6 + 1 + 9 = 4$.\n\nSo $r^2 = 4$ (and $r = 2$).\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — reports $r = 2$ instead of $r^2 = 4$.\n* Choice C: "wrong base" — squares $r^2 = 4$ to get $16$, applying an extra operation.\n* Choice D: "wrong base" — reports the original constant $6$ as if it were $r^2$.\n\n**Test Day Takeaway:** $r^2$ is the RIGHT side of standard form $(x - h)^2 + (y - k)^2 = r^2$. Read it directly — no extra square root if the question asks for $r^2$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'circle-in-general-form',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 5/3: right-triangle-pythagorean (8 items) =====
  // Test bundles use this 7x across PT3, PT7, PT9. The title in test explanations is
  // 'Right Triangle — Pythagorean' with em-dash (U+2014); kebab slug is
  // 'right-triangle-pythagorean'. Items lean on the canonical Pythagorean triples
  // (3-4-5, 5-12-13, 7-24-25, 8-15-17, 9-40-41) and their multiples.
  {
    id: 'bank-geo-077',
    domain: 'geometry',
    skills: ['pythagorean-theorem'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A right triangle has legs of length $6$ and $8$. What is the length of the hypotenuse?',
    choices: [
      { id: 'A', text: '$10$' },
      // distractor: adds the legs
      { id: 'B', text: '$14$' },
      // distractor: forgets to take square root
      { id: 'C', text: '$\\sqrt{14}$' },
      // distractor: subtracts the squares instead
      { id: 'D', text: '$\\sqrt{28}$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Recognize the $6$-$8$-$10$ Pythagorean triple ($2 \\times$ the $3$-$4$-$5$). Hypotenuse $= 10$.\n\n**The Full Solution:**\nApply the Pythagorean theorem: $c^2 = a^2 + b^2$.\n$c^2 = 6^2 + 8^2 = 36 + 64 = 100$\n$c = \\sqrt{100} = 10$.\n\nVerification: $6 = 2 \\cdot 3$ and $8 = 2 \\cdot 4$, so the triangle is the $3$-$4$-$5$ scaled by $2$, giving hypotenuse $2 \\cdot 5 = 10$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — adds the legs directly ($6 + 8 = 14$). Triangle inequality says the hypotenuse must be LESS than this.\n* Choice C: "stops one step early" — forgets to square the legs and just takes $\\sqrt{6 + 8}$.\n* Choice D: "wrong sign" — subtracts: $\\sqrt{64 - 36} = \\sqrt{28}$.\n\n**Test Day Takeaway:** Memorize the $3$-$4$-$5$ triple and its multiples ($6$-$8$-$10$, $9$-$12$-$15$, etc.). The hypotenuse is ALWAYS the largest side.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'right-triangle-pythagorean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-078',
    domain: 'geometry',
    skills: ['pythagorean-theorem'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A right triangle has legs of length $8$ and $15$. What is the length of the hypotenuse?',
    correctAnswer: '17',
    explanation: '**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~10s):** Recognize the $8$-$15$-$17$ Pythagorean triple. Hypotenuse $= 17$.\n\n**The Full Solution:**\nApply the Pythagorean theorem:\n$c^2 = 8^2 + 15^2 = 64 + 225 = 289$\n$c = \\sqrt{289} = 17$.\n\nVerification: $17^2 = 289$ and $8^2 + 15^2 = 64 + 225 = 289$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding the legs: $8 + 15 = 23$ (violates the triangle inequality for any triangle, but is also just wrong).\n* Computing $\\sqrt{8 + 15} = \\sqrt{23}$ (skipping the squaring step).\n* Subtracting: $\\sqrt{225 - 64} = \\sqrt{161}$ — applies to finding a LEG, not a hypotenuse.\n\n**Test Day Takeaway:** The four canonical SAT Pythagorean triples are $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, and $7$-$24$-$25$. Memorize them — they appear on every Math test.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'right-triangle-pythagorean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-079',
    domain: 'geometry',
    skills: ['pythagorean-theorem'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'In a right triangle, the hypotenuse has length $26$ and one leg has length $10$. What is the length of the other leg?',
    choices: [
      { id: 'A', text: '$24$' },
      // distractor: subtracts the lengths directly
      { id: 'B', text: '$16$' },
      // distractor: adds instead of subtracts
      { id: 'C', text: '$36$' },
      // distractor: forgets to take square root
      { id: 'D', text: '$576$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $26 = 2 \\times 13$ and $10 = 2 \\times 5$, so the triangle is the $5$-$12$-$13$ scaled by $2$: legs $10$ and $24$, hypotenuse $26$.\n\n**The Full Solution:**\nApply $a^2 + b^2 = c^2$ with $c = 26$, $a = 10$:\n$10^2 + b^2 = 26^2$\n$100 + b^2 = 676$\n$b^2 = 576$\n$b = \\sqrt{576} = 24$.\n\nVerification: $10^2 + 24^2 = 100 + 576 = 676 = 26^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong sign" — subtracts the lengths directly ($26 - 10 = 16$) instead of using the theorem.\n* Choice C: "wrong base" — adds them ($26 + 10 = 36$) instead of using the theorem.\n* Choice D: "stops one step early" — reports $b^2 = 576$ instead of $b = 24$.\n\n**Test Day Takeaway:** Finding a LEG given the hypotenuse: $b^2 = c^2 - a^2$ (subtract!). Finding a HYPOTENUSE given two legs: $c^2 = a^2 + b^2$ (add!). Direction matters.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'right-triangle-pythagorean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-080',
    domain: 'geometry',
    skills: ['pythagorean-theorem'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A rectangle has a length of $9$ and a diagonal of length $15$. What is the width of the rectangle?',
    correctAnswer: '12',
    explanation: '**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~15s):** The diagonal of a rectangle splits it into two right triangles with legs $L$ and $W$ and hypotenuse equal to the diagonal. $9$ and $15$ are $3 \\times (3, 5)$, so it\'s a $9$-$12$-$15$ triple. $W = 12$.\n\n**The Full Solution:**\nThe diagonal of a rectangle and its two sides form a right triangle. By the Pythagorean theorem:\n$L^2 + W^2 = d^2$\n$9^2 + W^2 = 15^2$\n$81 + W^2 = 225$\n$W^2 = 144$\n$W = \\sqrt{144} = 12$.\n\nVerification: $9$-$12$-$15$ is the $3$-$4$-$5$ triple scaled by $3$: $9 = 3 \\cdot 3$, $12 = 3 \\cdot 4$, $15 = 3 \\cdot 5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Treating the diagonal as one of the legs ($9^2 + 15^2 = 306$, $\\sqrt{306} \\approx 17.5$).\n* Subtracting lengths directly: $15 - 9 = 6$.\n* Stopping at $W^2 = 144$.\n\n**Test Day Takeaway:** A rectangle\'s diagonal is the HYPOTENUSE of a right triangle whose legs are the length and width. Always identify which side is the hypotenuse first.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'right-triangle-pythagorean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-081',
    domain: 'geometry',
    skills: ['pythagorean-theorem'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A right triangle has legs of length $9$ and $40$. What is the perimeter of the triangle?',
    choices: [
      { id: 'A', text: '$90$' },
      // distractor: forgets to add the hypotenuse
      { id: 'B', text: '$49$' },
      // distractor: uses wrong hypotenuse
      { id: 'C', text: '$89$' },
      // distractor: uses sum of squares
      { id: 'D', text: '$1681$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Recognize the $9$-$40$-$41$ Pythagorean triple. Perimeter $= 9 + 40 + 41 = 90$.\n\n**The Full Solution:**\nApply the Pythagorean theorem to find the hypotenuse:\n$c^2 = 9^2 + 40^2 = 81 + 1600 = 1681$\n$c = \\sqrt{1681} = 41$.\n\nPerimeter $= 9 + 40 + 41 = 90$.\n\nVerification: $41^2 = 1681$ \\checkmark. The triple $9$-$40$-$41$ is a primitive Pythagorean triple.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — adds only the two legs: $9 + 40 = 49$.\n* Choice C: "off-by-one" — uses hypotenuse $40$ (wrong) and sums $9 + 40 + 40 = 89$.\n* Choice D: "wrong base" — reports $c^2 = 1681$ as if it were the perimeter.\n\n**Test Day Takeaway:** "Perimeter" = sum of ALL THREE sides. Find the missing side first, then add all three. The $9$-$40$-$41$ triple is rare but shows up.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'right-triangle-pythagorean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-082',
    domain: 'geometry',
    skills: ['pythagorean-theorem', 'triangle-area'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'A right triangle has a hypotenuse of length $25$ and one leg of length $15$. What is the area of the triangle?',
    correctAnswer: '150',
    explanation: '**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~20s):** Recognize $15$-$20$-$25$ ($5 \\times 3$-$4$-$5$). Missing leg $= 20$. Area $= \\dfrac{1}{2}(15)(20) = 150$.\n\n**The Full Solution:**\nStep 1 — find the missing leg using $a^2 + b^2 = c^2$:\n$15^2 + b^2 = 25^2$\n$225 + b^2 = 625$\n$b^2 = 400$\n$b = 20$.\n\nStep 2 — compute the area. The two legs are perpendicular, so they form the base and height:\nArea $= \\dfrac{1}{2} \\cdot 15 \\cdot 20 = \\dfrac{1}{2} \\cdot 300 = 150$.\n\nVerification: $15$-$20$-$25 = 5 \\cdot (3, 4, 5)$, so this is a $3$-$4$-$5$ scaled by $5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $\\dfrac{1}{2}(15)(25) = 187.5$ — the hypotenuse is NOT a height of the triangle.\n* Forgetting the $\\dfrac{1}{2}$ factor: $15 \\times 20 = 300$.\n* Confusing area with perimeter: $15 + 20 + 25 = 60$.\n\n**Test Day Takeaway:** In a right triangle, the two legs are the base and height. Area $= \\dfrac{1}{2} \\cdot \\text{leg}_1 \\cdot \\text{leg}_2$. Use the hypotenuse only to find a missing leg.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'right-triangle-pythagorean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-083',
    domain: 'geometry',
    skills: ['pythagorean-theorem'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'In a right triangle, the two legs have lengths $a$ and $a + 7$, and the hypotenuse has length $13$. What is the value of $a$?',
    choices: [
      { id: 'A', text: '$5$' },
      // distractor: solves for the other variable
      { id: 'B', text: '$12$' },
      // distractor: picks the negative root
      { id: 'C', text: '$-12$' },
      // distractor: forgets to take square root
      { id: 'D', text: '$60$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Hypotenuse $13$ + integer legs $\\Rightarrow$ $5$-$12$-$13$ triple. Legs differ by $7$. So $a = 5$ and $a + 7 = 12$.\n\n**The Full Solution:**\nApply $a^2 + (a + 7)^2 = 13^2$:\n$a^2 + a^2 + 14a + 49 = 169$\n$2a^2 + 14a - 120 = 0$\n$a^2 + 7a - 60 = 0$\n$(a + 12)(a - 5) = 0$\n\nSo $a = 5$ or $a = -12$. Lengths must be positive, so $a = 5$.\n\nVerification: legs $5$ and $12$, hypotenuse $13$: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "applies the inverse operation" — gives $a + 7 = 12$ (the OTHER leg) instead of $a$.\n* Choice C: "wrong sign" — picks the negative root (rejected because lengths must be positive).\n* Choice D: "stops one step early" — reports the constant from $a^2 + 7a - 60 = 0$ as the answer.\n\n**Test Day Takeaway:** When legs are given as variable expressions, plug into $a^2 + b^2 = c^2$ and solve the quadratic. ALWAYS check the question to see which expression is the answer.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'right-triangle-pythagorean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-084',
    domain: 'geometry',
    skills: ['pythagorean-theorem'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'In a right triangle, the hypotenuse has length $a + 1$ and the two legs have lengths $a$ and $9$. What is the value of $a$?',
    correctAnswer: '40',
    explanation: '**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~30s):** Hypotenuse and one leg differ by $1$ $\\Rightarrow$ legs $9$ and $40$, hypotenuse $41$ ($9$-$40$-$41$ triple).\n\n**The Full Solution:**\nApply $a^2 + 9^2 = (a + 1)^2$:\n$a^2 + 81 = a^2 + 2a + 1$\n$81 = 2a + 1$\n$2a = 80$\n$a = 40$.\n\nVerification: legs $40$ and $9$, hypotenuse $41$: $40^2 + 9^2 = 1600 + 81 = 1681 = 41^2$ \\checkmark. This is the $9$-$40$-$41$ Pythagorean triple.\n\n**Common Mistakes to Avoid:**\n* Expanding $(a + 1)^2$ incorrectly: $(a + 1)^2 \\neq a^2 + 1$.\n* Forgetting that the $a^2$ terms cancel — the equation is LINEAR in $a$, not quadratic.\n* Off-by-one: solving $2a = 81 \\Rightarrow a = 40.5$.\n\n**Test Day Takeaway:** When the hypotenuse is "one more than a leg", the $a^2$ terms cancel and you get a clean linear equation. The result is usually a known Pythagorean triple like $5$-$12$-$13$ or $9$-$40$-$41$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'right-triangle-pythagorean',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  // ===== Phase 2 batch 6/3: cylinder-volume (7 items) =====
  // Bank already has bank-geo-035 (or thereabouts) for this pattern (1 item).
  // Adding 7 more for total of 8 (Tier 1 threshold).
  // Pattern: apply $V = \\pi r^2 h$ in forward, reverse, ratio, and rate
  // scenarios. 9 test occurrences across PT3, PT5, PT8, PT12 and friends.
  // SAT Pattern title (verbatim): 'Cylinder Volume' → 'cylinder-volume'.
  {
    id: 'bank-geo-085',
    domain: 'geometry',
    skills: ['volume-prism'],
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'A right circular cylinder has a radius of $2$ inches and a height of $10$ inches. What is the volume, in cubic inches, of the cylinder?',
    choices: [
      { id: 'A', text: '$40\\pi$' },
      // distractor: forgets to square the radius
      { id: 'B', text: '$20\\pi$' },
      // distractor: uses cone formula
      { id: 'C', text: '$\\dfrac{40\\pi}{3}$' },
      // distractor: swaps radius and height roles
      { id: 'D', text: '$200\\pi$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Cylinder Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (2)^2 (10) = 40\\pi$.\n\n**The Full Solution:**\nThe volume of a right circular cylinder: $V = \\pi r^2 h$.\nWith $r = 2$ and $h = 10$:\n$V = \\pi (2)^2 (10) = \\pi (4)(10) = 40\\pi$ cubic inches.\n\nVerification: $\\pi r^2 = 4\\pi$ (base area), times $h = 10$ gives $40\\pi$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — uses $\\pi r h = 20\\pi$ instead of $\\pi r^2 h$.\n* Choice C: "wrong formula" — uses cone formula $\\dfrac{1}{3}\\pi r^2 h$.\n* Choice D: "wrong base" — squares the height instead: $\\pi r h^2 = 200\\pi$.\n\n**Test Day Takeaway:** $V_{\\text{cyl}} = \\pi r^2 h$ is on the Reference Sheet. The radius is squared, the height is not.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'cylinder-volume',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-086',
    domain: 'geometry',
    skills: ['volume-prism'],
    difficulty: 'easy',
    type: 'fill-in',
    question: 'A right circular cylinder has a radius of $5$ centimeters and a height of $3$ centimeters. The volume of the cylinder is $k\\pi$ cubic centimeters. What is the value of $k$?',
    correctAnswer: '75',
    explanation: '**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $75$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (5)^2 (3) = 75\\pi$. So $k = 75$.\n\n**The Full Solution:**\n$V = \\pi r^2 h = \\pi (5)^2 (3) = \\pi (25)(3) = 75\\pi$ cubic cm.\n\nThe coefficient of $\\pi$ is $k = 75$.\n\n**Common Mistakes to Avoid:**\n* Reporting $75\\pi$ when the question asks for $k$ (just the coefficient).\n* Forgetting to square the radius: $5 \\cdot 3 = 15$.\n* Using cone formula: $\\dfrac{1}{3}(75) = 25$.\n\n**Test Day Takeaway:** "$V = k\\pi$" wording is a hint: factor $\\pi$ out and report the numeric coefficient.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'cylinder-volume',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-087',
    domain: 'geometry',
    skills: ['volume-prism'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'The volume of a right circular cylinder is $125\\pi$ cubic centimeters. If the radius is $5$ centimeters, what is the height, in centimeters, of the cylinder?',
    choices: [
      { id: 'A', text: '$5$' },
      // distractor: divides by radius (not squared)
      { id: 'B', text: '$25$' },
      // distractor: ignores the radius
      { id: 'C', text: '$125$' },
      // distractor: divides by 2 (off-by-one slip)
      { id: 'D', text: '$10$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Cylinder Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $V = \\pi r^2 h \\Rightarrow 125\\pi = \\pi(25) h \\Rightarrow h = 5$.\n\n**The Full Solution:**\nStart from $V = \\pi r^2 h$:\n$125\\pi = \\pi (5)^2 h$\n$125\\pi = 25\\pi h$\n$h = \\dfrac{125\\pi}{25\\pi} = 5$.\n\nVerification: $V = \\pi(5)^2(5) = 25 \\cdot 5 \\pi = 125\\pi$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "wrong formula" — divides $V$ by $r$ instead of $r^2$: $125/5 = 25$.\n* Choice C: "stops one step early" — reports $V/\\pi = 125$ without dividing by $r^2$.\n* Choice D: "wrong base" — half of $25 \\pi$ via wrong unit slip.\n\n**Test Day Takeaway:** Reverse the formula: $h = V / (\\pi r^2)$. SQUARE the radius before dividing.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'cylinder-volume',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-088',
    domain: 'geometry',
    skills: ['volume-prism'],
    difficulty: 'medium',
    type: 'fill-in',
    question: 'The volume of a right circular cylinder is $48\\pi$ cubic inches and its height is $3$ inches. What is the radius, in inches, of the cylinder?',
    correctAnswer: '4',
    explanation: '**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** $V = \\pi r^2 h \\Rightarrow 48\\pi = \\pi r^2 (3) \\Rightarrow r^2 = 16 \\Rightarrow r = 4$.\n\n**The Full Solution:**\nFrom $V = \\pi r^2 h$:\n$48\\pi = \\pi r^2 (3)$\n$48 = 3 r^2$\n$r^2 = 16$\n$r = 4$ (radius must be positive).\n\nVerification: $V = \\pi (4)^2 (3) = \\pi (16)(3) = 48\\pi$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Stopping at $r^2 = 16$ and reporting $16$ instead of $r = 4$.\n* Dividing by $h$ first then taking the square root of the wrong number: $V/h = 16\\pi$, $\\sqrt{16} = 4$ \\checkmark — same answer, but the path matters.\n* Computing $\\sqrt{48/3} = \\sqrt{16} = 4$ but reporting the intermediate $48/3 = 16$.\n\n**Test Day Takeaway:** Solving for the radius needs a square root at the end. $r^2 = V / (\\pi h)$, then $r = \\sqrt{\\text{that}}$.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'cylinder-volume',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-089',
    domain: 'geometry',
    skills: ['volume-prism'],
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'A right circular cylinder has radius $r$ and height $h$. If the radius is doubled and the height stays the same, by what factor is the volume multiplied?',
    choices: [
      { id: 'A', text: '$4$' },
      // distractor: doubles the volume (assumes linear in r)
      { id: 'B', text: '$2$' },
      // distractor: squared but forgets the cube root step
      { id: 'C', text: '$8$' },
      // distractor: leaves it unchanged
      { id: 'D', text: '$1$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Cylinder Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $V = \\pi r^2 h$. Doubling $r$ gives $\\pi (2r)^2 h = 4\\pi r^2 h$ — volume multiplies by $4$.\n\n**The Full Solution:**\nOriginal volume: $V_1 = \\pi r^2 h$.\nNew volume with $r \\to 2r$:\n$V_2 = \\pi (2r)^2 h = \\pi (4r^2) h = 4 \\pi r^2 h = 4 V_1$.\n\nSo the volume multiplies by $4$.\n\nVerification: at $r = 1$, $h = 1$: $V_1 = \\pi$. New $r = 2$: $V_2 = \\pi (4)(1) = 4\\pi$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — doubles, but doesn\'t apply the SQUARE on the radius.\n* Choice C: "wrong formula" — uses a cube factor (would apply if BOTH r and h doubled, getting $8$).\n* Choice D: "wrong base" — assumes the scaling cancels somehow.\n\n**Test Day Takeaway:** When a LENGTH dimension scales by $k$, AREA scales by $k^2$ and VOLUME scales by $k^3$. Here only the radius (not height) scales, so the base AREA changes by $k^2 = 4$ but the volume only inherits that factor: $V \\to 4V$.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'cylinder-volume',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-090',
    domain: 'geometry',
    skills: ['volume-prism'],
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Cylinder $A$ and cylinder $B$ are right circular cylinders. They have the same height, but cylinder $A$\'s radius is half that of cylinder $B$. What is the ratio of the volume of cylinder $A$ to the volume of cylinder $B$?',
    choices: [
      { id: 'A', text: '$1 : 4$' },
      // distractor: assumes linear scaling
      { id: 'B', text: '$1 : 2$' },
      // distractor: cubes instead of squares
      { id: 'C', text: '$1 : 8$' },
      // distractor: inverts the ratio direction
      { id: 'D', text: '$2 : 1$' }
    ],
    correctAnswer: 'A',
    explanation: '**SAT Pattern: Cylinder Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Same $h$, $r_A = r_B / 2$. So $V_A / V_B = (r_A / r_B)^2 = (1/2)^2 = 1/4$. Ratio $1 : 4$.\n\n**The Full Solution:**\nLet $r_B = r$ (so $r_A = r/2$) and $h_A = h_B = h$.\n\n$V_A = \\pi (r/2)^2 h = \\pi \\cdot \\dfrac{r^2}{4} \\cdot h = \\dfrac{\\pi r^2 h}{4}$.\n$V_B = \\pi r^2 h$.\n\n$\\dfrac{V_A}{V_B} = \\dfrac{\\pi r^2 h / 4}{\\pi r^2 h} = \\dfrac{1}{4}$.\n\nSo $V_A : V_B = 1 : 4$.\n\nNumerical check: at $r = 2$, $h = 1$: $V_B = \\pi(4)(1) = 4\\pi$, $V_A = \\pi(1)(1) = \\pi$. Ratio $\\pi : 4\\pi = 1 : 4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: "stops one step early" — uses the radius ratio directly instead of squaring.\n* Choice C: "wrong formula" — cubes (would apply if BOTH dimensions halved).\n* Choice D: "wrong sign" — inverts the ratio direction (gives $B:A$ instead of $A:B$).\n\n**Test Day Takeaway:** Volume ratio scales as the SQUARE of the radius ratio (with same height). Halving radius $\\Rightarrow$ volume goes to $\\dfrac{1}{4}$.',
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: 'cylinder-volume',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  },
  {
    id: 'bank-geo-091',
    domain: 'geometry',
    skills: ['volume-prism'],
    difficulty: 'hard',
    type: 'fill-in',
    question: 'A cylindrical tank with a radius of $3$ feet and a height of $10$ feet is filled with water at a rate of $30\\pi$ cubic feet per minute. How many minutes does it take to fill the tank completely?',
    correctAnswer: '3',
    explanation: '**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** $V = \\pi(3)^2(10) = 90\\pi$ ft³. Time $= V / \\text{rate} = 90\\pi / 30\\pi = 3$ min.\n\n**The Full Solution:**\nStep 1 — find the volume:\n$V = \\pi r^2 h = \\pi (3)^2 (10) = 90\\pi$ cubic feet.\n\nStep 2 — divide by the fill rate:\n$\\text{time} = \\dfrac{V}{\\text{rate}} = \\dfrac{90\\pi}{30\\pi} = 3$ minutes.\n\nVerification: in $3$ minutes at $30\\pi$ ft³/min, water added $= 90\\pi$ ft³, exactly filling the tank \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $90\\pi$ (the volume, not the time).\n* Multiplying instead of dividing: $90\\pi \\cdot 30\\pi = 2700\\pi^2$.\n* Forgetting to square the radius — would give $30\\pi / 30\\pi = 1$ minute.\n\n**Test Day Takeaway:** Two-step word problem: VOLUME first, then RATE = VOLUME / TIME, so TIME = VOLUME / RATE. The $\\pi$ cancels — by design.',
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: 'cylinder-volume',
    authoredBy: 'performsat-engine',
    createdAt: '2026-05-11'
  }
];
