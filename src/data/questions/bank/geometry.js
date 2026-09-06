export const geometryBank = [
  // ── EASY (18 questions) ────────────────────────────────────────────

  {
    id: "bank-geo-001",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In triangle $DEF$ shown, the measure of angle $D$ is $52°$ and the measure of angle $E$ is $61°$. What is the measure, in degrees, of angle $F$?",
    diagram: { type: "triangleWithAngles", params: { vertexLabels: ["D", "E", "F"], angleLabels: ["52°", "61°", ""], figureNote: true } },
    choices: [
      { id: "A", text: "$67$" },
      // distractor: adds the two given angles
      { id: "B", text: "$113$" },
      // distractor: subtracts only angle E from 180
      { id: "C", text: "$119$" },
      // distractor: subtracts only angle D from 180
      { id: "D", text: "$128$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The interior angles of a triangle sum to $180°$, so $m\\angle F = 180 - 52 - 61 = 67$.\n\n**The Full Solution:**\nStep 1: For any triangle, $m\\angle D + m\\angle E + m\\angle F = 180°$.\nStep 2: Substitute the given measures: $52 + 61 + m\\angle F = 180$, so $113 + m\\angle F = 180$.\nStep 3: Subtract $113$ from both sides: $m\\angle F = 67$.\n\nVerification: $52 + 61 + 67 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($113$): adds the two given measures instead of subtracting their sum from $180$.\n* Choice C ($119$): subtracts only angle $E$ from $180$, ignoring angle $D$.\n* Choice D ($128$): subtracts only angle $D$ from $180$, ignoring angle $E$.\n\n**Test Day Takeaway:** Two known angles in a triangle determine the third. Add the two you have, then subtract that sum from $180$ in one step.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-computation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-002",
    domain: "geometry",
    skills: ["circle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A circular sensor plate has a radius of $9$ centimeters. What is the area, in square centimeters, of the sensor plate?",
    choices: [
      // distractor: multiplies the radius by pi instead of squaring it
      { id: "A", text: "$9\\pi$" },
      // distractor: uses the circumference formula 2*pi*r
      { id: "B", text: "$18\\pi$" },
      { id: "C", text: "$81\\pi$" },
      // distractor: squares the diameter instead of the radius
      { id: "D", text: "$324\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle Area from Radius**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $A = \\pi r^2 = \\pi(9)^2 = 81\\pi$ square centimeters.\n\n**The Full Solution:**\nStep 1: The area of a circle with radius $r$ is $A = \\pi r^2$.\nStep 2: The radius is $9$, so $A = \\pi(9)^2$.\nStep 3: $9^2 = 81$, so $A = 81\\pi$ square centimeters.\n\nVerification: a radius of $9$ gives a circle that fits inside a $18$-by-$18$ square of area $324$, and $81\\pi \\approx 254$ is less than $324$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9\\pi$): multiplies the radius by $\\pi$ without squaring it.\n* Choice B ($18\\pi$): uses the circumference formula $2\\pi r$, which measures length, not area.\n* Choice D ($324\\pi$): squares the diameter $18$ instead of the radius $9$.\n\n**Test Day Takeaway:** Area squares the radius; circumference doubles it. Check which quantity the units call for: square centimeters means area.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-003",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the right triangle shown, the two legs have lengths $20$ and $21$. What is the length of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["20", "21", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the legs
      { id: "A", text: "$1$" },
      { id: "B", text: "$29$" },
      // distractor: adds the legs
      { id: "C", text: "$41$" },
      // distractor: reports c squared instead of c
      { id: "D", text: "$841$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $c^2 = 20^2 + 21^2 = 400 + 441 = 841$, and $\\sqrt{841} = 29$.\n\n**The Full Solution:**\nStep 1: In a right triangle with legs $a$ and $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$.\nStep 2: Substitute the legs: $20^2 + 21^2 = c^2$, so $400 + 441 = c^2$ and $c^2 = 841$.\nStep 3: Take the positive square root: $c = 29$.\n\nVerification: $29^2 = 841 = 400 + 441$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): subtracts the legs, $21 - 20$, instead of combining their squares.\n* Choice C ($41$): adds the legs, $20 + 21$; the hypotenuse is always shorter than the sum of the legs.\n* Choice D ($841$): stops at $c^2$ and never takes the square root.\n\n**Test Day Takeaway:** The hypotenuse must be longer than either leg but shorter than their sum. That bracket, $21 < c < 41$, eliminates two choices before any arithmetic.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-computation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-004",
    domain: "geometry",
    skills: ["circumference"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A circular clock face has a diameter of $22$ inches. What is the circumference, in inches, of the clock face?",
    choices: [
      // distractor: uses the radius in place of the diameter
      { id: "A", text: "$11\\pi$" },
      { id: "B", text: "$22\\pi$" },
      // distractor: treats the diameter as the radius in 2*pi*r
      { id: "C", text: "$44\\pi$" },
      // distractor: computes the area instead of the circumference
      { id: "D", text: "$121\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circumference from Diameter**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $C = \\pi d = \\pi(22) = 22\\pi$ inches.\n\n**The Full Solution:**\nStep 1: The circumference of a circle is $C = \\pi d$, where $d$ is the diameter.\nStep 2: The diameter is given directly as $22$ inches, so no conversion to a radius is needed.\nStep 3: $C = 22\\pi$ inches.\n\nVerification: the radius is $11$, and $C = 2\\pi r = 2\\pi(11) = 22\\pi$, the same value. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($11\\pi$): uses the radius $11$ in the formula $C = \\pi d$, halving the circumference.\n* Choice C ($44\\pi$): substitutes the diameter into $C = 2\\pi r$, doubling the circumference.\n* Choice D ($121\\pi$): computes the area $\\pi r^2 = \\pi(11)^2$, which is a square-unit quantity.\n\n**Test Day Takeaway:** $C = \\pi d$ and $C = 2\\pi r$ are the same formula. Read whether the problem hands you a diameter or a radius before substituting.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-005",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A rectangular shipping crate has a length of $14$ inches, a width of $9$ inches, and a height of $6$ inches. What is the volume, in cubic inches, of the crate?",
    choices: [
      // distractor: adds the three dimensions
      { id: "A", text: "$29$" },
      // distractor: multiplies only length and width
      { id: "B", text: "$126$" },
      // distractor: computes the surface area
      { id: "C", text: "$528$" },
      { id: "D", text: "$756$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rectangular Prism Volume**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $V = \\ell w h = 14 \\cdot 9 \\cdot 6 = 756$ cubic inches.\n\n**The Full Solution:**\nStep 1: The volume of a rectangular prism is $V = \\ell w h$.\nStep 2: Multiply the length and width first: $14 \\cdot 9 = 126$, the area of the base.\nStep 3: Multiply by the height: $126 \\cdot 6 = 756$ cubic inches.\n\nVerification: $756 \\div 6 = 126$ and $126 \\div 9 = 14$, returning the original dimensions. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($29$): adds $14 + 9 + 6$ instead of multiplying.\n* Choice B ($126$): stops at the area of the base and never multiplies by the height.\n* Choice C ($528$): computes the surface area $2(14 \\cdot 9 + 14 \\cdot 6 + 9 \\cdot 6)$, a square-unit quantity.\n\n**Test Day Takeaway:** Cubic units signal a product of three lengths. Square units would signal an area formula instead.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-006",
    domain: "geometry",
    skills: ["degrees-to-radians"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "An angle has a measure of $216°$. What is the measure of this angle, in radians?",
    choices: [
      // distractor: divides by 360 instead of 180
      { id: "A", text: "$\\frac{3\\pi}{5}$" },
      // distractor: inverts the reduced fraction
      { id: "B", text: "$\\frac{5\\pi}{6}$" },
      { id: "C", text: "$\\frac{6\\pi}{5}$" },
      // distractor: multiplies by pi/90 instead of pi/180
      { id: "D", text: "$\\frac{12\\pi}{5}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Degrees to Radians**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Multiply by $\\frac{\\pi}{180}$: $216 \\cdot \\frac{\\pi}{180} = \\frac{216\\pi}{180} = \\frac{6\\pi}{5}$.\n\n**The Full Solution:**\nStep 1: Since $180° = \\pi$ radians, converting from degrees to radians means multiplying by $\\frac{\\pi}{180}$.\nStep 2: $216 \\cdot \\frac{\\pi}{180} = \\frac{216\\pi}{180}$.\nStep 3: Divide numerator and denominator by $36$: $\\frac{216}{180} = \\frac{6}{5}$, so the measure is $\\frac{6\\pi}{5}$ radians.\n\nVerification: $216°$ is more than a straight angle, so the answer must exceed $\\pi$ radians, and $\\frac{6}{5} > 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3\\pi}{5}$): divides by $360$ instead of $180$, giving half the correct measure.\n* Choice B ($\\frac{5\\pi}{6}$): inverts the reduced fraction $\\frac{6}{5}$; this is $150°$, not $216°$.\n* Choice D ($\\frac{12\\pi}{5}$): multiplies by $\\frac{\\pi}{90}$, doubling the correct measure past a full rotation.\n\n**Test Day Takeaway:** Degrees to radians divides by $180$; radians to degrees multiplies by $180$. Sanity-check against $\\pi \\approx 180°$ before choosing.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-007",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "fill-in",
    question: "In a triangle, the length of the base is $26$ centimeters and the length of the corresponding height is $9$ centimeters. What is the area, in square centimeters, of the triangle?",
    correctAnswer: "117",
    explanation: "**SAT Pattern: Triangle Area**\n\n**The correct answer is $117$.**\n\n**The Fast Way (~15s):** $A = \\frac{1}{2}bh = \\frac{1}{2}(26)(9) = 13 \\cdot 9 = 117$.\n\n**The Full Solution:**\nStep 1: The area of a triangle is $A = \\frac{1}{2}bh$, where $b$ is a base and $h$ is the height drawn to that base.\nStep 2: Halve the base first to keep the arithmetic clean: $\\frac{1}{2}(26) = 13$.\nStep 3: Multiply by the height: $13 \\cdot 9 = 117$ square centimeters.\n\nVerification: a rectangle $26$ by $9$ has area $234$, and the triangle is exactly half of it: $\\frac{234}{2} = 117$. $\\checkmark$\n\n**Common Mistakes:** Omitting the factor $\\frac{1}{2}$ gives $26 \\cdot 9 = 234$, the area of the surrounding rectangle. Adding the two measurements gives $26 + 9 = 35$, which is a length, not an area.\n\n**Test Day Takeaway:** A triangle is half of the rectangle built on the same base and height. Halve the even factor first and the multiplication stays mental.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-008",
    domain: "geometry",
    skills: ["radians-to-degrees"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "An angle has a measure of $\\frac{7\\pi}{12}$ radians. What is the measure of this angle, in degrees?",
    choices: [
      // distractor: divides 180 by 12 but never multiplies by 7
      { id: "A", text: "$15$" },
      // distractor: uses 90 degrees per pi radians
      { id: "B", text: "$52.5$" },
      { id: "C", text: "$105$" },
      // distractor: uses 360 degrees per pi radians
      { id: "D", text: "$210$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Radians to Degrees**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Multiply by $\\frac{180}{\\pi}$: $\\frac{7\\pi}{12} \\cdot \\frac{180}{\\pi} = \\frac{7 \\cdot 180}{12} = 105$.\n\n**The Full Solution:**\nStep 1: Since $\\pi$ radians $= 180°$, converting from radians to degrees means multiplying by $\\frac{180}{\\pi}$.\nStep 2: The factors of $\\pi$ cancel: $\\frac{7\\pi}{12} \\cdot \\frac{180}{\\pi} = \\frac{7 \\cdot 180}{12}$.\nStep 3: $\\frac{180}{12} = 15$, so the measure is $7 \\cdot 15 = 105$ degrees.\n\nVerification: $\\frac{7}{12}$ of a straight angle is $\\frac{7}{12}(180) = 105$, and $105°$ lies between $90°$ and $180°$ as an obtuse angle should. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): computes $\\frac{180}{12}$ and stops, never multiplying by the numerator $7$.\n* Choice B ($52.5$): uses $90°$ per $\\pi$ radians, halving the correct measure.\n* Choice D ($210$): uses $360°$ per $\\pi$ radians; $360°$ corresponds to $2\\pi$, not $\\pi$.\n\n**Test Day Takeaway:** Read $\\frac{a\\pi}{b}$ radians as the fraction $\\frac{a}{b}$ of a straight angle, then take that fraction of $180$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "unit-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-009",
    domain: "geometry",
    skills: ["triangle-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The side lengths of a triangle are $6$, $11$, and $11$. Which of the following best classifies this triangle?",
    choices: [
      // distractor: equilateral requires all three sides equal
      { id: "A", text: "Equilateral" },
      { id: "B", text: "Isosceles" },
      // distractor: scalene requires all three sides different
      { id: "C", text: "Scalene" },
      // distractor: the Pythagorean relationship does not hold
      { id: "D", text: "Right" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Classification by Sides**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Exactly two of the three sides are equal ($11$ and $11$), which is the definition of an isosceles triangle.\n\n**The Full Solution:**\nStep 1: Classification by sides depends only on how many side lengths are equal: three equal is equilateral, exactly two equal is isosceles, none equal is scalene.\nStep 2: Sort the lengths: $6$, $11$, $11$. Two of them match and the third does not.\nStep 3: The triangle is isosceles.\n\nVerification: $6 + 11 > 11$, so these lengths do form a triangle, and the two $11$s force the two base angles to be equal. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Equilateral): requires all three sides equal, but $6 \\ne 11$.\n* Choice C (Scalene): requires all three sides different, but two sides measure $11$.\n* Choice D (Right): would require $6^2 + 11^2 = 11^2$, that is $157 = 121$, which is false.\n\n**Test Day Takeaway:** Count equal sides first. Right, acute, and obtuse are angle classifications and need a Pythagorean comparison, not a side count.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "classification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-010",
    domain: "geometry",
    skills: ["special-right-triangles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the right triangle shown, the two acute angles each measure $45°$ and each leg has length $9$. What is the length of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { labels: ["45°", "", "45°"], sideLabels: ["9", "9", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: copies a leg as the hypotenuse
      { id: "A", text: "$9$" },
      { id: "B", text: "$9\\sqrt{2}$" },
      // distractor: uses the 30-60-90 long-leg ratio
      { id: "C", text: "$9\\sqrt{3}$" },
      // distractor: doubles the leg before applying the ratio
      { id: "D", text: "$18\\sqrt{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** In a $45°$-$45°$-$90°$ triangle the hypotenuse is $\\sqrt{2}$ times a leg, so it is $9\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The two legs are equal because the two acute angles are equal, so both legs measure $9$.\nStep 2: Apply the Pythagorean theorem: $c^2 = 9^2 + 9^2 = 81 + 81 = 162$.\nStep 3: $c = \\sqrt{162} = \\sqrt{81 \\cdot 2} = 9\\sqrt{2}$.\n\nVerification: $(9\\sqrt{2})^2 = 81 \\cdot 2 = 162 = 81 + 81$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): copies a leg; the hypotenuse is the longest side and must exceed $9$.\n* Choice C ($9\\sqrt{3}$): uses the $\\sqrt{3}$ ratio from a $30°$-$60°$-$90°$ triangle.\n* Choice D ($18\\sqrt{2}$): doubles the leg before applying the $\\sqrt{2}$ ratio, scaling the triangle by $2$.\n\n**Test Day Takeaway:** Memorize the two ratios: $45$-$45$-$90$ is $x : x : x\\sqrt{2}$ and $30$-$60$-$90$ is $x : x\\sqrt{3} : 2x$. Matching the given side to its position in the ratio is the whole problem.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "special-triangle-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-011",
    domain: "geometry",
    skills: ["circle-parts"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A segment has one endpoint at the center of a circle and its other endpoint on the circle. Which term describes this segment?",
    choices: [
      // distractor: a chord has both endpoints on the circle
      { id: "A", text: "A chord" },
      // distractor: a diameter passes through the center with both endpoints on the circle
      { id: "B", text: "A diameter" },
      { id: "C", text: "A radius" },
      // distractor: a tangent touches the circle at one point and is a line, not a segment to the center
      { id: "D", text: "A tangent" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle Vocabulary**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** A segment from the center to a point on the circle is a radius, by definition.\n\n**The Full Solution:**\nStep 1: Every point of a circle is the same distance from the center, and that distance is the radius.\nStep 2: The described segment joins the center to one point of the circle, so its length is exactly that fixed distance.\nStep 3: The segment is therefore a radius.\n\nVerification: two radii drawn in opposite directions from the center form a diameter, which is twice as long, so the described segment cannot be the diameter. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (A chord): a chord has both endpoints on the circle, not one at the center.\n* Choice B (A diameter): a diameter is a chord through the center; it has length $2r$, twice the described segment.\n* Choice D (A tangent): a tangent is a line that meets the circle at exactly one point and does not pass through the center.\n\n**Test Day Takeaway:** Sort circle terms by where the endpoints sit: center to circle is a radius, circle to circle is a chord, and a chord through the center is a diameter.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "definition-recall",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-012",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the right triangle shown, the side opposite the acute angle $\\theta$ has length $8$ and the hypotenuse has length $17$. What is the value of $\\sin(\\theta)$?",
    diagram: { type: "rightTriangle", params: { labels: ["θ", "", ""], sideLabels: ["", "8", "17"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\frac{8}{17}$" },
      // distractor: subtracts 8 from 17 for the numerator
      { id: "B", text: "$\\frac{9}{17}$" },
      // distractor: uses the adjacent leg, which gives cosine
      { id: "C", text: "$\\frac{15}{17}$" },
      // distractor: inverts the ratio
      { id: "D", text: "$\\frac{17}{8}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: SOH-CAH-TOA**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{8}{17}$.\n\n**The Full Solution:**\nStep 1: SOH means sine equals the opposite side over the hypotenuse.\nStep 2: The side opposite $\\theta$ is $8$ and the hypotenuse is $17$.\nStep 3: $\\sin(\\theta) = \\frac{8}{17}$, which is already in lowest terms.\n\nVerification: the sine of an acute angle is always between $0$ and $1$, and $\\frac{8}{17} \\approx 0.47$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{9}{17}$): subtracts $17 - 8$ to build the numerator instead of reading the opposite side directly.\n* Choice C ($\\frac{15}{17}$): uses the adjacent leg $\\sqrt{17^2 - 8^2} = 15$, which gives $\\cos(\\theta)$, not $\\sin(\\theta)$.\n* Choice D ($\\frac{17}{8}$): inverts the ratio, putting the hypotenuse on top; that value exceeds $1$ and cannot be a sine.\n\n**Test Day Takeaway:** Sine and cosine of an acute angle are always less than $1$ because the hypotenuse is the longest side. Any choice above $1$ is out immediately.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-trig-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-013",
    domain: "geometry",
    skills: ["triangle-inequality"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which of the following sets of three lengths could be the side lengths of a triangle?",
    choices: [
      // distractor: 2 + 5 = 7 is less than 9
      { id: "A", text: "$2$, $5$, and $9$" },
      // distractor: 3 + 8 = 11 is less than 12
      { id: "B", text: "$3$, $8$, and $12$" },
      // distractor: 4 + 6 = 10 is less than 11
      { id: "C", text: "$4$, $6$, and $11$" },
      { id: "D", text: "$7$, $9$, and $13$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Triangle Inequality**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Only in choice D do the two shorter lengths beat the longest: $7 + 9 = 16 > 13$.\n\n**The Full Solution:**\nStep 1: Three lengths form a triangle exactly when the sum of the two shorter ones is greater than the longest one.\nStep 2: Test each set: $2 + 5 = 7 < 9$; $3 + 8 = 11 < 12$; $4 + 6 = 10 < 11$; $7 + 9 = 16 > 13$.\nStep 3: Only $7$, $9$, and $13$ satisfy the inequality, so that set can form a triangle.\n\nVerification: with sides $7$ and $9$, the third side must satisfy $2 < x < 16$, and $13$ lies in that interval. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$, $5$, and $9$): the two shorter sides total $7$, which falls short of $9$, so they cannot meet.\n* Choice B ($3$, $8$, and $12$): the two shorter sides total $11 < 12$.\n* Choice C ($4$, $6$, and $11$): the two shorter sides total $10 < 11$; being close is not enough, the inequality must be strict.\n\n**Test Day Takeaway:** Only one comparison matters: add the two smallest and compare with the largest. Equality is a degenerate flat figure, not a triangle.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "constraint-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-014",
    domain: "geometry",
    skills: ["volume-sphere"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A sphere has a radius of $6$ inches. What is the volume, in cubic inches, of the sphere?",
    choices: [
      // distractor: squares the radius instead of cubing it
      { id: "A", text: "$48\\pi$" },
      // distractor: computes the surface area 4*pi*r^2
      { id: "B", text: "$144\\pi$" },
      { id: "C", text: "$288\\pi$" },
      // distractor: omits the factor 4/3 and uses 4*pi*r^3
      { id: "D", text: "$864\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Sphere Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(216) = 288\\pi$ cubic inches.\n\n**The Full Solution:**\nStep 1: The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.\nStep 2: Cube the radius: $6^3 = 216$.\nStep 3: $\\frac{4}{3}(216) = 4(72) = 288$, so $V = 288\\pi$ cubic inches.\n\nVerification: $288\\pi \\approx 905$, which is smaller than the $12$-by-$12$-by-$12$ cube of volume $1{,}728$ that contains the sphere. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($48\\pi$): squares the radius, computing $\\frac{4}{3}\\pi(36)$; a volume needs the third power.\n* Choice B ($144\\pi$): computes the surface area $4\\pi r^2$, a square-unit quantity.\n* Choice D ($864\\pi$): drops the $\\frac{1}{3}$ and uses $4\\pi r^3$, tripling the correct volume.\n\n**Test Day Takeaway:** Cubic units mean the radius appears to the third power. Divide the cube by $3$ before multiplying by $4$ and the arithmetic stays clean.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-015",
    domain: "geometry",
    skills: ["radian-measure-understanding"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A turntable completes $4$ full rotations. Through how many radians does the turntable rotate?",
    choices: [
      // distractor: reports one rotation and ignores the 4
      { id: "A", text: "$2\\pi$" },
      // distractor: uses pi radians per rotation
      { id: "B", text: "$4\\pi$" },
      { id: "C", text: "$8\\pi$" },
      // distractor: uses 4*pi radians per rotation
      { id: "D", text: "$16\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Radian Measure of a Full Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** One rotation is $2\\pi$ radians, so $4$ rotations are $4(2\\pi) = 8\\pi$ radians.\n\n**The Full Solution:**\nStep 1: A full rotation corresponds to a central angle of $360°$, which equals $2\\pi$ radians.\nStep 2: Four rotations multiply that measure by $4$: $4 \\cdot 2\\pi$.\nStep 3: The total is $8\\pi$ radians.\n\nVerification: $4$ rotations equal $4(360) = 1{,}440$ degrees, and $1{,}440 \\cdot \\frac{\\pi}{180} = 8\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2\\pi$): gives the measure of a single rotation and never uses the $4$.\n* Choice B ($4\\pi$): uses $\\pi$ radians per rotation; $\\pi$ radians is a half rotation.\n* Choice D ($16\\pi$): uses $4\\pi$ radians per rotation, doubling the correct total.\n\n**Test Day Takeaway:** Anchor on $2\\pi$ radians per revolution and $\\pi$ radians per half revolution. Every rotation question scales from those two facts.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "definition-recall",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-016",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, a circle has its center at $(-4, 7)$ and a radius of $6$. Which equation represents this circle?",
    choices: [
      // distractor: copies the signs of the center instead of subtracting them
      { id: "A", text: "$(x - 4)^2 + (y + 7)^2 = 36$" },
      // distractor: uses r instead of r squared
      { id: "B", text: "$(x + 4)^2 + (y - 7)^2 = 6$" },
      // distractor: doubles the radius instead of squaring it
      { id: "C", text: "$(x + 4)^2 + (y - 7)^2 = 12$" },
      { id: "D", text: "$(x + 4)^2 + (y - 7)^2 = 36$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Circle Equation Standard Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Standard form is $(x - h)^2 + (y - k)^2 = r^2$, so $h = -4$, $k = 7$, and $r^2 = 36$ give $(x + 4)^2 + (y - 7)^2 = 36$.\n\n**The Full Solution:**\nStep 1: A circle with center $(h, k)$ and radius $r$ has equation $(x - h)^2 + (y - k)^2 = r^2$.\nStep 2: Substitute $h = -4$: $x - (-4) = x + 4$. Substitute $k = 7$: $y - 7$.\nStep 3: Square the radius: $6^2 = 36$. The equation is $(x + 4)^2 + (y - 7)^2 = 36$.\n\nVerification: the point $(2, 7)$ is $6$ units right of the center, and $(2 + 4)^2 + (7 - 7)^2 = 36 + 0 = 36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x - 4)^2 + (y + 7)^2 = 36$): copies the coordinates with their given signs; standard form subtracts them, so a center of $-4$ produces $x + 4$. This equation has center $(4, -7)$.\n* Choice B ($(x + 4)^2 + (y - 7)^2 = 6$): places the radius itself on the right side, describing a circle of radius $\\sqrt{6}$.\n* Choice C ($(x + 4)^2 + (y - 7)^2 = 12$): doubles the radius instead of squaring it.\n\n**Test Day Takeaway:** The signs inside the parentheses are the opposites of the center coordinates, and the number on the right is always $r^2$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "standard-form-identification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-017",
    domain: "geometry",
    skills: ["tangent-lines"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Line $\\ell$ is tangent to circle $O$ at point $P$, and $\\overline{OP}$ is a radius of the circle. Which of the following must be true about $\\overline{OP}$ and line $\\ell$?",
    choices: [
      // distractor: a radius drawn to the point of tangency meets the line, so they cannot be parallel
      { id: "A", text: "They are parallel." },
      { id: "B", text: "They are perpendicular." },
      // distractor: a tangent meets the circle at exactly one point
      { id: "C", text: "They intersect at exactly two points." },
      // distractor: 45 degrees has no basis; the angle is always a right angle
      { id: "D", text: "They meet at an angle of $45°$." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent-Radius Perpendicularity**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A radius drawn to the point of tangency is always perpendicular to the tangent line.\n\n**The Full Solution:**\nStep 1: A tangent line meets a circle at exactly one point, here $P$.\nStep 2: Among all segments from the center $O$ to line $\\ell$, the shortest is the one perpendicular to $\\ell$, and the shortest distance from $O$ to $\\ell$ is exactly the radius, since every other point of $\\ell$ lies outside the circle.\nStep 3: Therefore $\\overline{OP}$ is that perpendicular segment, so $\\overline{OP} \\perp \\ell$.\n\nVerification: if the angle were not $90°$, a point of $\\ell$ would lie closer to $O$ than $P$ does, putting that point inside the circle and giving a second intersection. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (They are parallel.): $\\overline{OP}$ ends on line $\\ell$ at $P$, so the two figures intersect and cannot be parallel.\n* Choice C (They intersect at exactly two points.): a tangent meets the circle once; $\\overline{OP}$ and $\\ell$ meet only at $P$.\n* Choice D (They meet at an angle of $45°$.): no configuration forces $45°$; the tangent-radius angle is always a right angle.\n\n**Test Day Takeaway:** Whenever a tangent appears, draw the radius to the point of tangency. That right angle turns most tangent problems into the Pythagorean theorem.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "definition-recall",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-018",
    domain: "geometry",
    skills: ["volume-pyramid-cone"],
    difficulty: "easy",
    type: "fill-in",
    question: "A right circular cone has a radius of $5$ centimeters and a height of $12$ centimeters. The volume of the cone is $k\\pi$ cubic centimeters. What is the value of $k$?",
    correctAnswer: "100",
    explanation: "**SAT Pattern: Cone Volume**\n\n**The correct answer is $100$.**\n\n**The Fast Way (~20s):** $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(25)(12) = 100\\pi$, so $k = 100$.\n\n**The Full Solution:**\nStep 1: The volume of a cone is $V = \\frac{1}{3}\\pi r^2 h$.\nStep 2: Square the radius: $5^2 = 25$. Then $\\frac{1}{3}(12) = 4$.\nStep 3: Multiply: $25 \\cdot 4 = 100$, so $V = 100\\pi$ and $k = 100$.\n\nVerification: a cylinder with the same base and height has volume $\\pi(25)(12) = 300\\pi$, and the cone is exactly one third of it: $\\frac{300}{3} = 100$. $\\checkmark$\n\n**Common Mistakes:** Omitting the factor $\\frac{1}{3}$ gives $300$, the cylinder's volume. Squaring the height instead of the radius gives $\\frac{1}{3}(144)(5) = 240$. Using the slant height $13$ in place of the height $12$ gives $\\frac{1}{3}(25)(13) = \\frac{325}{3} \\approx 108.3$, which is not even an integer.\n\n**Test Day Takeaway:** A cone is one third of the cylinder on the same base and height. Divide by $3$ first, whichever factor divides most cleanly, and the rest is mental arithmetic.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── MEDIUM (27 questions) ──────────────────────────────────────────

  {
    id: "bank-geo-019",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A straight support cable runs from the top of a vertical antenna to a point on level ground $20$ feet from the base of the antenna. The cable is $29$ feet long. What is the height, in feet, of the antenna?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["20", "", "29"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts 20 from 29
      { id: "A", text: "$9$" },
      // distractor: halves the cable length as if the triangle were 30-60-90
      { id: "B", text: "$14.5$" },
      { id: "C", text: "$21$" },
      // distractor: adds the two given lengths
      { id: "D", text: "$49$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Ladder Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The antenna is a leg: $h = \\sqrt{29^2 - 20^2} = \\sqrt{841 - 400} = \\sqrt{441} = 21$ feet.\n\n**The Full Solution:**\nStep 1: The antenna, the ground, and the cable form a right triangle with the right angle at the base of the antenna. The cable is the hypotenuse.\nStep 2: Apply $a^2 + b^2 = c^2$ with $a = 20$ and $c = 29$: $400 + h^2 = 841$.\nStep 3: $h^2 = 441$, so $h = 21$ feet.\n\nVerification: $20^2 + 21^2 = 400 + 441 = 841 = 29^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): subtracts the lengths, $29 - 20$, instead of subtracting their squares.\n* Choice B ($14.5$): halves the cable length, which would require a $30°$ angle that the problem never gives.\n* Choice D ($49$): adds the two given lengths; a leg must be shorter than the hypotenuse.\n\n**Test Day Takeaway:** Identify the hypotenuse before substituting. Solving for a leg subtracts squares, solving for the hypotenuse adds them.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "real-world-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-020",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Triangles $RST$ and $UVW$ are similar, where $R$, $S$, and $T$ correspond to $U$, $V$, and $W$, respectively. In triangle $RST$, $RS = 8$ and $ST = 14$. If $UV = 20$, what is the length of $\\overline{VW}$?",
    diagram: { type: "similarTriangles", params: { triangle1: { labels: ["R", "S", "T"], sideLabels: ["8", "14", ""] }, triangle2: { labels: ["U", "V", "W"], sideLabels: ["20", "", ""] }, figureNote: true } },
    choices: [
      // distractor: inverts the scale factor
      { id: "A", text: "$5.6$" },
      // distractor: adds the difference of the corresponding sides instead of multiplying
      { id: "B", text: "$26$" },
      { id: "C", text: "$35$" },
      // distractor: scales UV instead of ST
      { id: "D", text: "$50$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The scale factor from $RST$ to $UVW$ is $\\frac{20}{8} = 2.5$, so $VW = 14(2.5) = 35$.\n\n**The Full Solution:**\nStep 1: Corresponding sides of similar triangles are proportional: $\\frac{UV}{RS} = \\frac{VW}{ST}$.\nStep 2: Substitute the known lengths: $\\frac{20}{8} = \\frac{VW}{14}$.\nStep 3: Cross multiply: $8 \\cdot VW = 280$, so $VW = 35$.\n\nVerification: $\\frac{35}{14} = 2.5$ and $\\frac{20}{8} = 2.5$, so both pairs share the same ratio. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5.6$): inverts the scale factor, computing $14 \\cdot \\frac{8}{20}$; that shrinks the side when the second triangle is larger.\n* Choice B ($26$): adds the difference $20 - 8 = 12$ to $14$; similarity multiplies lengths, it does not add a constant.\n* Choice D ($50$): scales $UV$ by $2.5$ instead of scaling $ST$, answering for the wrong side.\n\n**Test Day Takeaway:** Write the proportion with both numerators from the same triangle. The correspondence in the naming, $R \\to U$ and $S \\to V$, tells you which sides pair up.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "proportion-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-021",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "From a point at the top of a vertical cliff $85$ meters above sea level, the angle of depression to a buoy floating on the water is $28°$. What is the horizontal distance $d$, in meters, from the base of the cliff to the buoy? (Round to the nearest tenth.)",
    diagram: { type: "rightTriangle", params: { sideLabels: ["d", "85", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: multiplies by tangent instead of dividing
      { id: "A", text: "$45.2$" },
      // distractor: multiplies by cosine
      { id: "B", text: "$75.1$" },
      { id: "C", text: "$159.9$" },
      // distractor: divides by sine, which gives the line-of-sight distance
      { id: "D", text: "$181.1$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Angle of Depression**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The height is opposite the $28°$ angle at the buoy and the horizontal distance is adjacent, so $d = \\frac{85}{\\tan(28°)} \\approx 159.9$ meters.\n\n**The Full Solution:**\nStep 1: The angle of depression from the top of the cliff equals the angle of elevation from the buoy, so the angle at the buoy in the right triangle measures $28°$.\nStep 2: Relative to that angle, the cliff height $85$ is the opposite side and the horizontal distance $d$ is the adjacent side, so $\\tan(28°) = \\frac{85}{d}$.\nStep 3: Solve: $d = \\frac{85}{\\tan(28°)} = \\frac{85}{0.5317} \\approx 159.9$ meters.\n\nVerification: $159.9 \\cdot \\tan(28°) \\approx 85.0$, returning the cliff height. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($45.2$): computes $85 \\cdot \\tan(28°)$; multiplying finds the side opposite a known adjacent side, the reverse of this setup.\n* Choice B ($75.1$): computes $85 \\cdot \\cos(28°)$, mixing the cosine ratio into a problem with no hypotenuse given.\n* Choice D ($181.1$): computes $\\frac{85}{\\sin(28°)}$, which is the slanted line-of-sight distance to the buoy, not the horizontal distance.\n\n**Test Day Takeaway:** The angle of depression from above equals the angle of elevation from below. Label opposite and adjacent relative to the angle you actually use, then pick the ratio that contains both known and unknown.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "angle-of-elevation-depression",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-022",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In a circle with a radius of $18$ centimeters, a central angle measures $40°$. What is the length, in centimeters, of the arc intercepted by this central angle?",
    diagram: { type: "circleWithSector", params: { centralAngle: 40, angleLabel: "40°", radius: 18, labelCenter: "O", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: uses pi*r instead of 2*pi*r
      { id: "A", text: "$2\\pi$" },
      { id: "B", text: "$4\\pi$" },
      // distractor: divides the angle by 180 instead of 360
      { id: "C", text: "$8\\pi$" },
      // distractor: uses the area formula in place of the circumference
      { id: "D", text: "$36\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The arc is $\\frac{40}{360} = \\frac{1}{9}$ of the circumference $2\\pi(18) = 36\\pi$, so its length is $4\\pi$ centimeters.\n\n**The Full Solution:**\nStep 1: An arc length is the same fraction of the circumference that its central angle is of $360°$.\nStep 2: The fraction is $\\frac{40}{360} = \\frac{1}{9}$, and the circumference is $2\\pi(18) = 36\\pi$.\nStep 3: The arc length is $\\frac{1}{9}(36\\pi) = 4\\pi$ centimeters.\n\nVerification: nine such arcs would total $9(4\\pi) = 36\\pi$, exactly the full circumference. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2\\pi$): uses $\\pi r$ instead of $2\\pi r$ for the circumference, halving the arc.\n* Choice C ($8\\pi$): divides the central angle by $180$ instead of $360$, doubling the fraction of the circle.\n* Choice D ($36\\pi$): applies the fraction to the area $\\pi r^2 = 324\\pi$; that is a square-unit quantity, not a length.\n\n**Test Day Takeaway:** Arc length is a fraction of the circumference and sector area is the same fraction of the area. Choose the formula that matches the units in the question.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "arc-sector-computation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-023",
    domain: "geometry",
    skills: ["sector-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A circular garden bed with a radius of $12$ feet is divided into $6$ congruent sectors by paths that meet at the center. What is the area, in square feet, of one sector?",
    choices: [
      // distractor: divides the circumference by 6, which gives an arc length
      { id: "A", text: "$4\\pi$" },
      { id: "B", text: "$24\\pi$" },
      // distractor: uses the diameter as the radius
      { id: "C", text: "$96\\pi$" },
      // distractor: reports the area of the entire circle
      { id: "D", text: "$144\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sector Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The whole bed has area $\\pi(12)^2 = 144\\pi$, and one of six congruent sectors is $\\frac{144\\pi}{6} = 24\\pi$ square feet.\n\n**The Full Solution:**\nStep 1: The area of the full circle is $A = \\pi r^2 = \\pi(12)^2 = 144\\pi$ square feet.\nStep 2: Six congruent sectors each take an equal share, so each covers $\\frac{1}{6}$ of the circle. (Each central angle measures $\\frac{360}{6} = 60°$.)\nStep 3: One sector has area $\\frac{1}{6}(144\\pi) = 24\\pi$ square feet.\n\nVerification: $6(24\\pi) = 144\\pi$, the full area. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4\\pi$): divides the circumference $24\\pi$ by $6$, which gives the curved edge of a sector, not its area.\n* Choice C ($96\\pi$): uses the diameter $24$ as the radius, computing $\\frac{576\\pi}{6}$.\n* Choice D ($144\\pi$): reports the area of the entire bed and never divides by $6$.\n\n**Test Day Takeaway:** Congruent sectors split both the area and the $360°$ of central angle equally. Find the whole first, then take your share.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "real-world-sector",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-024",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "The equation $(x - 9)^2 + (y + 4)^2 = 121$ defines a circle in the $xy$-plane. What is the radius of this circle?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Read Radius from Circle Equation**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~10s):** In standard form the right side is $r^2$, so $r = \\sqrt{121} = 11$.\n\n**The Full Solution:**\nStep 1: A circle written as $(x - h)^2 + (y - k)^2 = r^2$ has center $(h, k)$ and radius $r$.\nStep 2: Matching the given equation, $r^2 = 121$.\nStep 3: The radius is a length, so take the positive root: $r = 11$.\n\nVerification: the center is $(9, -4)$, and the point $(20, -4)$, which is $11$ units to the right, satisfies $(20 - 9)^2 + (-4 + 4)^2 = 121$. $\\checkmark$\n\n**Common Mistakes:** Reporting $121$ treats $r^2$ as the radius. Reporting $22$ gives the diameter rather than the radius. Reading the center as $(-9, 4)$ instead of $(9, -4)$ does not change the radius but costs points on any follow-up question.\n\n**Test Day Takeaway:** The number on the right of standard form is always $r^2$. Take a square root before answering any radius question.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "extract-from-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-025",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The base of a right prism is a right triangle with legs of length $6$ centimeters and $14$ centimeters. The height of the prism is $25$ centimeters. What is the volume, in cubic centimeters, of the prism?",
    choices: [
      // distractor: reports the base area only
      { id: "A", text: "$42$" },
      // distractor: uses the pyramid formula with a factor of 1/3
      { id: "B", text: "$350$" },
      { id: "C", text: "$1{,}050$" },
      // distractor: omits the factor 1/2 in the triangle area
      { id: "D", text: "$2{,}100$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Triangular Prism Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The base area is $\\frac{1}{2}(6)(14) = 42$, so $V = 42(25) = 1{,}050$ cubic centimeters.\n\n**The Full Solution:**\nStep 1: The volume of any prism is $V = Bh$, where $B$ is the area of the base and $h$ is the prism's height.\nStep 2: The base is a right triangle, so its legs are its base and height: $B = \\frac{1}{2}(6)(14) = 42$ square centimeters.\nStep 3: Multiply by the prism height: $V = 42(25) = 1{,}050$ cubic centimeters.\n\nVerification: $1{,}050 \\div 25 = 42$, which is the base area. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($42$): stops at the area of the triangular base without multiplying by the prism's height.\n* Choice B ($350$): uses $\\frac{1}{3}Bh$, the pyramid formula; a prism has no factor of $\\frac{1}{3}$.\n* Choice D ($2{,}100$): omits the $\\frac{1}{2}$, treating the base as a $6$-by-$14$ rectangle.\n\n**Test Day Takeaway:** Every prism is base area times height. Compute the base area completely, including any $\\frac{1}{2}$, before the final multiplication.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "composite-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-026",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In triangle $QRS$, the measure of angle $R$ is twice the measure of angle $Q$, and the measure of angle $S$ is $20°$ more than the measure of angle $R$. What is the measure, in degrees, of angle $S$?",
    choices: [
      // distractor: reports angle Q
      { id: "A", text: "$32$" },
      // distractor: reports angle R
      { id: "B", text: "$64$" },
      { id: "C", text: "$84$" },
      // distractor: drops the constant 20 from the equation before solving
      { id: "D", text: "$92$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Translate to Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** With $m\\angle Q = x$, the angles are $x$, $2x$, and $2x + 20$. Then $5x + 20 = 180$, so $x = 32$ and $m\\angle S = 2(32) + 20 = 84$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the measure of angle $Q$. Then $m\\angle R = 2x$ and $m\\angle S = 2x + 20$.\nStep 2: The interior angles sum to $180°$: $x + 2x + (2x + 20) = 180$, which simplifies to $5x + 20 = 180$.\nStep 3: $5x = 160$, so $x = 32$. The question asks for angle $S$: $m\\angle S = 2(32) + 20 = 84$.\n\nVerification: the three measures are $32$, $64$, and $84$, and $32 + 64 + 84 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): reports $x$, the measure of angle $Q$, instead of angle $S$.\n* Choice B ($64$): reports angle $R$, stopping one substitution early.\n* Choice D ($92$): drops the constant, solving $5x = 180$ to get $x = 36$ and then $2(36) + 20 = 92$; those three angles total $200$, not $180$.\n\n**Test Day Takeaway:** Define one variable, express every angle in terms of it, and circle the angle actually requested before you solve.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "equation-from-geometry",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-027",
    domain: "geometry",
    skills: ["completing-square-circles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $x^2 + y^2 - 12x + 2y - 27 = 0$ is a circle. What are the coordinates of the center and the length of the radius of that circle?",
    choices: [
      { id: "A", text: "center $(6, -1)$, radius $8$" },
      // distractor: never adds the completing constants back to the right side
      { id: "B", text: "center $(6, -1)$, radius $\\sqrt{27}$" },
      // distractor: reports r squared as the radius
      { id: "C", text: "center $(6, -1)$, radius $64$" },
      // distractor: copies the signs from inside the parentheses
      { id: "D", text: "center $(-6, 1)$, radius $8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Complete the Square for Circle**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Completing both squares gives $(x - 6)^2 + (y + 1)^2 = 27 + 36 + 1 = 64$, so the center is $(6, -1)$ and the radius is $8$.\n\n**The Full Solution:**\nStep 1: Group the like variables and move the constant across: $(x^2 - 12x) + (y^2 + 2y) = 27$.\nStep 2: Complete each square. Half of $-12$ is $-6$, so add $36$; half of $2$ is $1$, so add $1$. Both additions go on the right side as well: $(x - 6)^2 + (y + 1)^2 = 27 + 36 + 1 = 64$.\nStep 3: Read off standard form: the center is $(6, -1)$ and $r = \\sqrt{64} = 8$.\n\nVerification: expanding $(x - 6)^2 + (y + 1)^2 = 64$ gives $x^2 - 12x + 36 + y^2 + 2y + 1 = 64$, which rearranges to the original equation. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (center $(6, -1)$, radius $\\sqrt{27}$): completes the squares on the left but leaves the right side at $27$, forgetting to add $36$ and $1$ there too.\n* Choice C (center $(6, -1)$, radius $64$): reports $r^2$ instead of $r$.\n* Choice D (center $(-6, 1)$, radius $8$): reads the center straight off the signs inside the parentheses; $(x - 6)^2$ means $h = 6$, not $-6$.\n\n**Test Day Takeaway:** Whatever you add to complete a square must be added to the other side too. Then flip the signs inside the parentheses to read the center.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "complete-the-square",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-028",
    domain: "geometry",
    skills: ["special-right-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the right triangle shown, one acute angle measures $60°$ and the side opposite that angle has length $12$. What is the length of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { labels: ["60°", "", "30°"], sideLabels: ["", "12", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: reports the short leg instead of the hypotenuse
      { id: "A", text: "$4\\sqrt{3}$" },
      { id: "B", text: "$8\\sqrt{3}$" },
      // distractor: applies the 45-45-90 ratio
      { id: "C", text: "$12\\sqrt{2}$" },
      // distractor: treats the given side as the short leg and multiplies by root 3
      { id: "D", text: "$12\\sqrt{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** In a $30$-$60$-$90$ triangle the sides are $x : x\\sqrt{3} : 2x$. Here $x\\sqrt{3} = 12$, so $x = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$ and the hypotenuse is $2x = 8\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The side opposite $60°$ is the long leg, which equals $x\\sqrt{3}$ where $x$ is the short leg.\nStep 2: Solve $x\\sqrt{3} = 12$: $x = \\frac{12}{\\sqrt{3}} = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}$.\nStep 3: The hypotenuse is twice the short leg: $2(4\\sqrt{3}) = 8\\sqrt{3}$.\n\nVerification: $(4\\sqrt{3})^2 + 12^2 = 48 + 144 = 192$, and $(8\\sqrt{3})^2 = 64 \\cdot 3 = 192$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4\\sqrt{3}$): reports the short leg, the value of $x$, instead of the hypotenuse $2x$.\n* Choice C ($12\\sqrt{2}$): applies the $45$-$45$-$90$ ratio $\\sqrt{2}$ to the given side.\n* Choice D ($12\\sqrt{3}$): treats $12$ as the short leg and multiplies by $\\sqrt{3}$, which produces the long leg of a larger triangle.\n\n**Test Day Takeaway:** Place the given side in the ratio $x : x\\sqrt{3} : 2x$ before doing anything else. Being handed the long leg means dividing by $\\sqrt{3}$, not multiplying.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "special-triangle-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-029",
    domain: "geometry",
    skills: ["pythagorean-theorem", "triangle-area"],
    difficulty: "medium",
    type: "fill-in",
    question: "An isosceles triangle has two sides of length $17$ centimeters and a base of length $16$ centimeters. What is the area, in square centimeters, of the triangle?",
    correctAnswer: "120",
    explanation: "**SAT Pattern: Isosceles Triangle Area**\n\n**The correct answer is $120$.**\n\n**The Fast Way (~35s):** The altitude to the base splits it into two $8$-$15$-$17$ right triangles, so the height is $15$ and the area is $\\frac{1}{2}(16)(15) = 120$.\n\n**The Full Solution:**\nStep 1: In an isosceles triangle the altitude to the base bisects that base, creating two congruent right triangles with legs $8$ and $h$ and hypotenuse $17$.\nStep 2: Solve for the height: $h^2 = 17^2 - 8^2 = 289 - 64 = 225$, so $h = 15$.\nStep 3: Area $= \\frac{1}{2}bh = \\frac{1}{2}(16)(15) = 120$ square centimeters.\n\nVerification: the two right triangles each have area $\\frac{1}{2}(8)(15) = 60$, and $60 + 60 = 120$. $\\checkmark$\n\n**Common Mistakes:** Using a slant side of $17$ as the height gives $\\frac{1}{2}(16)(17) = 136$, which is too large because the height must be shorter than the slant side. Subtracting the full base instead of half of it gives $\\sqrt{17^2 - 16^2} = \\sqrt{33} \\approx 5.7$ and an area of about $46$.\n\n**Test Day Takeaway:** Drop the altitude to the unequal side. Half of that side plus the equal side form a right triangle, and the height falls out of the Pythagorean theorem.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-geometry",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-030",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In right triangle $DEF$, the right angle is at $E$. The length of $\\overline{DE}$ is $9$ and the length of $\\overline{DF}$ is $41$. What is the value of $\\cos(D)$?",
    diagram: { type: "rightTriangle", params: { labels: ["D", "E", "F"], sideLabels: ["9", "", "41"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\frac{9}{41}$" },
      // distractor: uses the other leg 40 in place of the hypotenuse
      { id: "B", text: "$\\frac{9}{40}$" },
      // distractor: gives the sine of D
      { id: "C", text: "$\\frac{40}{41}$" },
      // distractor: inverts the ratio
      { id: "D", text: "$\\frac{41}{9}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Cosine in a Right Triangle**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Angle $D$ has adjacent leg $\\overline{DE} = 9$ and hypotenuse $\\overline{DF} = 41$, so $\\cos(D) = \\frac{9}{41}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $E$, so the hypotenuse is the side opposite $E$, namely $\\overline{DF} = 41$.\nStep 2: CAH means cosine equals the adjacent side over the hypotenuse. The leg adjacent to angle $D$ is $\\overline{DE} = 9$.\nStep 3: $\\cos(D) = \\frac{9}{41}$, already in lowest terms.\n\nVerification: the third side is $\\sqrt{41^2 - 9^2} = \\sqrt{1600} = 40$, and $\\left(\\frac{9}{41}\\right)^2 + \\left(\\frac{40}{41}\\right)^2 = \\frac{81 + 1600}{1681} = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{9}{40}$): divides the adjacent leg by the other leg $40$ instead of by the hypotenuse; that ratio is $\\frac{1}{\\tan(D)}$, not a cosine.\n* Choice C ($\\frac{40}{41}$): uses the opposite leg over the hypotenuse, which is $\\sin(D)$.\n* Choice D ($\\frac{41}{9}$): inverts the ratio; a cosine of an acute angle can never exceed $1$.\n\n**Test Day Takeaway:** Find the hypotenuse first by locating the right angle, then label the remaining legs as opposite or adjacent to the angle named in the question.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-trig-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-031",
    domain: "geometry",
    skills: ["volume-scaling"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A scale model of a monument is built so that each length on the model is $\\frac{1}{12}$ of the corresponding length on the monument. The volume of the model is $30$ cubic inches. What is the volume, in cubic inches, of the monument?",
    choices: [
      // distractor: multiplies by the linear factor 12
      { id: "A", text: "$360$" },
      // distractor: multiplies the linear factor by 3 instead of cubing it
      { id: "B", text: "$1{,}080$" },
      // distractor: squares the linear factor, which scales areas
      { id: "C", text: "$4{,}320$" },
      { id: "D", text: "$51{,}840$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Volume Scaling by Cube of Linear Factor**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Volume scales by the cube of the linear factor: $30 \\cdot 12^3 = 30 \\cdot 1{,}728 = 51{,}840$ cubic inches.\n\n**The Full Solution:**\nStep 1: For similar solids with linear ratio $k$, lengths scale by $k$, areas by $k^2$, and volumes by $k^3$.\nStep 2: Each length on the monument is $12$ times the model's, so $k = 12$ and $k^3 = 1{,}728$.\nStep 3: The monument's volume is $30(1{,}728) = 51{,}840$ cubic inches.\n\nVerification: $\\frac{51{,}840}{30} = 1{,}728 = 12^3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($360$): multiplies by the linear factor $12$; that scales a single length, not a volume.\n* Choice B ($1{,}080$): multiplies $12$ by $3$ to get $36$; cubing means $12 \\cdot 12 \\cdot 12$, not $12 \\cdot 3$.\n* Choice C ($4{,}320$): uses $12^2 = 144$, the factor that scales surface areas.\n\n**Test Day Takeaway:** Match the exponent to the dimension: lengths take $k$, areas take $k^2$, volumes take $k^3$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scaling-factor",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-032",
    domain: "geometry",
    skills: ["circle-area", "sector-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A rotating security camera monitors a sector of a circle with a radius of $24$ meters and a central angle of $45°$. What is the area, in square meters, of the region the camera monitors?",
    choices: [
      // distractor: computes the arc length instead of the area
      { id: "A", text: "$6\\pi$" },
      { id: "B", text: "$72\\pi$" },
      // distractor: divides the central angle by 180 instead of 360
      { id: "C", text: "$144\\pi$" },
      // distractor: reports the area of the full circle
      { id: "D", text: "$576\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sector Area from Central Angle**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The sector is $\\frac{45}{360} = \\frac{1}{8}$ of a circle of area $\\pi(24)^2 = 576\\pi$, so it covers $72\\pi$ square meters.\n\n**The Full Solution:**\nStep 1: A sector's area is the same fraction of the circle's area that its central angle is of $360°$.\nStep 2: The fraction is $\\frac{45}{360} = \\frac{1}{8}$, and the full circle has area $\\pi r^2 = \\pi(24)^2 = 576\\pi$ square meters.\nStep 3: The sector covers $\\frac{1}{8}(576\\pi) = 72\\pi$ square meters.\n\nVerification: eight such sectors would tile the circle: $8(72\\pi) = 576\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6\\pi$): takes $\\frac{1}{8}$ of the circumference $48\\pi$, giving the curved edge rather than the area.\n* Choice C ($144\\pi$): divides the angle by $180$ instead of $360$, doubling the fraction of the circle.\n* Choice D ($576\\pi$): reports the area of the whole circle and never applies the fraction.\n\n**Test Day Takeaway:** Sector area is $\\frac{\\theta}{360} \\cdot \\pi r^2$. Reducing $\\frac{\\theta}{360}$ to a simple fraction first keeps the arithmetic light.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "real-world-sector",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-033",
    domain: "geometry",
    skills: ["degrees-to-radians"],
    difficulty: "medium",
    type: "fill-in",
    question: "An angle has a measure of $240°$. The measure of this angle in radians is $k\\pi$. What is the value of $k$?",
    correctAnswer: "4/3",
    explanation: "**SAT Pattern: Degrees to Radians with Reduction**\n\n**The correct answer is $\\frac{4}{3}$.**\n\n**The Fast Way (~20s):** $240 \\cdot \\frac{\\pi}{180} = \\frac{240}{180}\\pi = \\frac{4}{3}\\pi$, so $k = \\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: Because $180° = \\pi$ radians, a degree measure converts to radians by multiplying by $\\frac{\\pi}{180}$.\nStep 2: $240 \\cdot \\frac{\\pi}{180} = \\frac{240\\pi}{180}$.\nStep 3: Divide numerator and denominator by $60$: $\\frac{240}{180} = \\frac{4}{3}$, so $k = \\frac{4}{3}$.\n\nVerification: $\\frac{4}{3}\\pi$ radians converts back as $\\frac{4}{3}\\pi \\cdot \\frac{180}{\\pi} = \\frac{720}{3} = 240$ degrees. $\\checkmark$\n\n**Common Mistakes:** Dividing by $360$ instead of $180$ gives $k = \\frac{2}{3}$, half the correct value. Multiplying by $\\frac{\\pi}{90}$ gives $k = \\frac{8}{3}$. Leaving the fraction unreduced as $\\frac{240}{180}$ is the right value but will not fit the answer grid, so reduce before entering.\n\n**Test Day Takeaway:** $240°$ is $\\frac{4}{3}$ of a straight angle, and a straight angle is $\\pi$. Reading the degree measure as a fraction of $180$ skips the arithmetic entirely.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "unit-conversion-variant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-034",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "At a certain time of day, a street sign $4$ meters tall casts a shadow $3$ meters long, and a nearby transmission tower casts a shadow $42$ meters long. What is the height, in meters, of the tower?",
    choices: [
      // distractor: inverts the proportion
      { id: "A", text: "$31.5$" },
      // distractor: adds the one-meter difference to the tower shadow
      { id: "B", text: "$43$" },
      { id: "C", text: "$56$" },
      // distractor: multiplies without dividing by the sign shadow
      { id: "D", text: "$168$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Shadow Similar Triangles**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The sign is $\\frac{4}{3}$ as tall as its shadow, and the same ratio holds for the tower: $h = \\frac{4}{3}(42) = 56$ meters.\n\n**The Full Solution:**\nStep 1: The sun's rays strike both objects at the same angle, so the two object-and-shadow right triangles are similar.\nStep 2: Corresponding sides are proportional: $\\frac{4}{3} = \\frac{h}{42}$.\nStep 3: Cross multiply: $3h = 168$, so $h = 56$ meters.\n\nVerification: $\\frac{56}{42} = \\frac{4}{3}$, the same height-to-shadow ratio as the sign. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($31.5$): inverts the proportion, computing $\\frac{3}{4}(42)$; that would make the tower shorter than its shadow while the sign is taller than its own.\n* Choice B ($43$): adds the $1$-meter gap between the sign's height and shadow to $42$; similar triangles scale by multiplication, not by a constant difference.\n* Choice D ($168$): multiplies $4 \\cdot 42$ and never divides by $3$.\n\n**Test Day Takeaway:** Set the proportion up as height over shadow for both objects. Check the direction with a quick sanity test: if one object is taller than its shadow, so is the other.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "real-world-similar-triangles",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-035",
    domain: "geometry",
    skills: ["volume-pyramid-cone"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A right pyramid has a square base with a side length of $9$ inches and a height of $14$ inches. What is the volume, in cubic inches, of the pyramid?",
    choices: [
      // distractor: uses the side length instead of the base area
      { id: "A", text: "$42$" },
      { id: "B", text: "$378$" },
      // distractor: uses a factor of 1/2 instead of 1/3
      { id: "C", text: "$567$" },
      // distractor: omits the factor 1/3
      { id: "D", text: "$1{,}134$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Square Pyramid Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $V = \\frac{1}{3}Bh = \\frac{1}{3}(81)(14) = 27 \\cdot 14 = 378$ cubic inches.\n\n**The Full Solution:**\nStep 1: The volume of a pyramid is $V = \\frac{1}{3}Bh$, where $B$ is the area of the base.\nStep 2: The base is a square of side $9$, so $B = 9^2 = 81$ square inches.\nStep 3: $V = \\frac{1}{3}(81)(14) = 27(14) = 378$ cubic inches.\n\nVerification: a prism with the same base and height holds $81(14) = 1{,}134$, and $\\frac{1{,}134}{3} = 378$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($42$): uses the side length $9$ in place of the base area, computing $\\frac{1}{3}(9)(14)$.\n* Choice C ($567$): uses $\\frac{1}{2}$ instead of $\\frac{1}{3}$; the $\\frac{1}{2}$ belongs to triangle area, not pyramid volume.\n* Choice D ($1{,}134$): omits the $\\frac{1}{3}$ entirely, giving the volume of the surrounding prism.\n\n**Test Day Takeaway:** Pyramids and cones both carry a factor of $\\frac{1}{3}$ against the prism or cylinder on the same base. Square the base side before applying it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-036",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the endpoints of a diameter of a circle are $(-2, 5)$ and $(6, 11)$. Which equation represents this circle?",
    choices: [
      // distractor: uses an endpoint as the center
      { id: "A", text: "$(x + 2)^2 + (y - 5)^2 = 25$" },
      { id: "B", text: "$(x - 2)^2 + (y - 8)^2 = 25$" },
      // distractor: uses the diameter as the radius
      { id: "C", text: "$(x - 2)^2 + (y - 8)^2 = 100$" },
      // distractor: copies the center signs incorrectly
      { id: "D", text: "$(x + 2)^2 + (y + 8)^2 = 25$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle from Diameter Endpoints**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** The center is the midpoint $(2, 8)$, the diameter is $\\sqrt{8^2 + 6^2} = 10$, so $r = 5$ and the equation is $(x - 2)^2 + (y - 8)^2 = 25$.\n\n**The Full Solution:**\nStep 1: The center of a circle is the midpoint of any diameter: $\\left(\\frac{-2 + 6}{2}, \\frac{5 + 11}{2}\\right) = (2, 8)$.\nStep 2: The diameter's length is the distance between the endpoints: $\\sqrt{(6 - (-2))^2 + (11 - 5)^2} = \\sqrt{64 + 36} = 10$, so the radius is $5$ and $r^2 = 25$.\nStep 3: Substitute into $(x - h)^2 + (y - k)^2 = r^2$: $(x - 2)^2 + (y - 8)^2 = 25$.\n\nVerification: the endpoint $(6, 11)$ satisfies the equation: $(6 - 2)^2 + (11 - 8)^2 = 16 + 9 = 25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x + 2)^2 + (y - 5)^2 = 25$): uses the endpoint $(-2, 5)$ as the center instead of the midpoint.\n* Choice C ($(x - 2)^2 + (y - 8)^2 = 100$): squares the diameter $10$ rather than the radius $5$.\n* Choice D ($(x + 2)^2 + (y + 8)^2 = 25$): mishandles the signs, describing a circle centered at $(-2, -8)$.\n\n**Test Day Takeaway:** Diameter endpoints give the center by midpoint and the radius by half the distance. Halve before squaring, never after.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-037",
    domain: "geometry",
    skills: ["tangent-lines"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Circle $C$ has center $Q$ and a radius of $15$. Point $R$ lies outside the circle so that $QR = 39$, and $\\overline{RT}$ is tangent to circle $C$ at point $T$. What is the length of $\\overline{RT}$?",
    choices: [
      // distractor: subtracts the radius from QR
      { id: "A", text: "$24$" },
      { id: "B", text: "$36$" },
      // distractor: adds the radius to QR
      { id: "C", text: "$54$" },
      // distractor: reports RT squared
      { id: "D", text: "$1296$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent from External Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The radius meets the tangent at a right angle, so $RT = \\sqrt{39^2 - 15^2} = \\sqrt{1521 - 225} = \\sqrt{1296} = 36$.\n\n**The Full Solution:**\nStep 1: A radius drawn to the point of tangency is perpendicular to the tangent line, so triangle $QTR$ has a right angle at $T$.\nStep 2: $\\overline{QR}$ is the hypotenuse and $\\overline{QT} = 15$ is a leg, so $15^2 + RT^2 = 39^2$, giving $RT^2 = 1521 - 225 = 1296$.\nStep 3: $RT = \\sqrt{1296} = 36$.\n\nVerification: $15$, $36$, $39$ is the $5$-$12$-$13$ triple tripled, and $225 + 1296 = 1521 = 39^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): subtracts $39 - 15$, treating the three lengths as collinear rather than as a right triangle.\n* Choice C ($54$): adds $39 + 15$; the tangent segment is a leg and must be shorter than the hypotenuse $39$.\n* Choice D ($1296$): stops at $RT^2$ without taking the square root.\n\n**Test Day Takeaway:** Tangent plus radius always means a right angle at the point of tangency. Draw that radius and the problem becomes the Pythagorean theorem.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "tangent-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-038",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "medium",
    type: "fill-in",
    question: "A circular saw blade has a radius of $20$ centimeters. A point on the edge of the blade sweeps through a central angle of $\\frac{3\\pi}{8}$ radians. The distance that point travels is $k\\pi$ centimeters. What is the value of $k$?",
    correctAnswer: "7.5",
    explanation: "**SAT Pattern: Arc Length in Radians**\n\n**The correct answer is $7.5$.**\n\n**The Fast Way (~20s):** $s = r\\theta = 20 \\cdot \\frac{3\\pi}{8} = \\frac{60\\pi}{8} = 7.5\\pi$, so $k = 7.5$.\n\n**The Full Solution:**\nStep 1: When the central angle is measured in radians, arc length is $s = r\\theta$. No degree conversion is needed.\nStep 2: Substitute $r = 20$ and $\\theta = \\frac{3\\pi}{8}$: $s = 20 \\cdot \\frac{3\\pi}{8} = \\frac{60\\pi}{8}$.\nStep 3: $\\frac{60}{8} = 7.5$, so $s = 7.5\\pi$ centimeters and $k = 7.5$.\n\nVerification: the full circumference is $2\\pi(20) = 40\\pi$, and $\\frac{3\\pi/8}{2\\pi} = \\frac{3}{16}$ of it is $\\frac{3}{16}(40\\pi) = 7.5\\pi$. $\\checkmark$\n\n**Common Mistakes:** Using the sector-area formula $\\frac{1}{2}r^2\\theta$ gives $\\frac{1}{2}(400)\\left(\\frac{3}{8}\\right) = 75$, ten times too large and in square centimeters. Converting the angle to $67.5$ degrees first and then multiplying by the radius gives $1{,}350$, because the degree measure is not a valid multiplier in $s = r\\theta$.\n\n**Test Day Takeaway:** $s = r\\theta$ works only in radians, and it is the reason radian measure exists. If the angle arrives in degrees, convert before multiplying.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "radian-arc-length",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-039",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A rectangular tabletop measures $56$ centimeters by $90$ centimeters. What is the length, in centimeters, of a diagonal of the tabletop?",
    choices: [
      // distractor: subtracts the side lengths
      { id: "A", text: "$34$" },
      // distractor: averages the side lengths
      { id: "B", text: "$73$" },
      { id: "C", text: "$106$" },
      // distractor: adds the side lengths
      { id: "D", text: "$146$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rectangle Diagonal**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The diagonal is the hypotenuse: $\\sqrt{56^2 + 90^2} = \\sqrt{3136 + 8100} = \\sqrt{11236} = 106$ centimeters.\n\n**The Full Solution:**\nStep 1: A diagonal splits the rectangle into two right triangles whose legs are the two side lengths.\nStep 2: Apply the Pythagorean theorem: $d^2 = 56^2 + 90^2 = 3{,}136 + 8{,}100 = 11{,}236$.\nStep 3: $d = \\sqrt{11{,}236} = 106$ centimeters.\n\nVerification: $56$, $90$, $106$ is twice the $28$-$45$-$53$ triple, and $106^2 = 11{,}236$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($34$): subtracts $90 - 56$; the diagonal must be longer than either side.\n* Choice B ($73$): averages the two sides, which lands between them instead of beyond the longer one.\n* Choice D ($146$): adds $56 + 90$, the distance along two edges rather than the straight-line diagonal.\n\n**Test Day Takeaway:** A diagonal is always longer than the longest side and shorter than the sum of the two sides. That bracket kills most distractors on sight.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "real-world-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-040",
    domain: "geometry",
    skills: ["volume-sphere"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A spherical steel bearing has a diameter of $2.4$ centimeters. Which of the following is closest to the volume, in cubic centimeters, of the bearing?",
    choices: [
      // distractor: squares the radius instead of cubing it
      { id: "A", text: "$6.0$" },
      { id: "B", text: "$7.2$" },
      // distractor: computes the surface area
      { id: "C", text: "$18.1$" },
      // distractor: uses the diameter as the radius
      { id: "D", text: "$57.9$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sphere Volume Approximation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The radius is $1.2$, so $V = \\frac{4}{3}\\pi(1.2)^3 = \\frac{4}{3}\\pi(1.728) \\approx 7.2$ cubic centimeters.\n\n**The Full Solution:**\nStep 1: Convert the diameter to a radius: $r = \\frac{2.4}{2} = 1.2$ centimeters.\nStep 2: Cube the radius: $1.2^3 = 1.728$.\nStep 3: $V = \\frac{4}{3}\\pi(1.728) = 2.304\\pi \\approx 7.24$, so about $7.2$ cubic centimeters.\n\nVerification: the bearing sits inside a cube of edge $2.4$, whose volume is $13.824$; a sphere fills about $52\\%$ of its bounding cube, and $\\frac{7.24}{13.824} \\approx 0.52$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.0$): squares the radius instead of cubing it, computing $\\frac{4}{3}\\pi(1.44)$.\n* Choice C ($18.1$): computes the surface area $4\\pi r^2 = 4\\pi(1.44)$, a square-unit quantity.\n* Choice D ($57.9$): uses the diameter $2.4$ as the radius, inflating the volume by a factor of $8$.\n\n**Test Day Takeaway:** Halve the diameter before any sphere calculation. Because the radius is cubed, forgetting to halve multiplies the answer by $8$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "real-world-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-041",
    domain: "geometry",
    skills: ["triangle-types", "pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A triangle has side lengths of $11$, $24$, and $26$, as shown. Which of the following best describes this triangle?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [26, 0], [4.25, 10.15]], sideLabels: ["26", "24", "11"], showRightAngle: false, figureNote: true } },
    choices: [
      { id: "A", text: "Acute" },
      // distractor: trusts the near-square corner in the figure instead of comparing the squares
      { id: "B", text: "Right" },
      // distractor: reverses the inequality; obtuse needs the leg squares to fall short
      { id: "C", text: "Obtuse" },
      // distractor: isosceles would require two equal sides
      { id: "D", text: "Isosceles" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Classify Triangle by Pythagorean Test**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $11^2 + 24^2 = 121 + 576 = 697$ and $26^2 = 676$. The leg squares total more than the longest side squared, so the triangle is acute.\n\n**The Full Solution:**\nStep 1: Identify the longest side, $26$, and compare $a^2 + b^2$ with $c^2$, where $a$ and $b$ are the other two sides.\nStep 2: $a^2 + b^2 = 11^2 + 24^2 = 121 + 576 = 697$ and $c^2 = 26^2 = 676$.\nStep 3: Since $697 > 676$, the angle opposite the longest side measures less than $90°$, and the other two angles are smaller still, so every angle is acute.\n\nVerification: $\\sqrt{697} \\approx 26.4$, so a longest side of about $26.4$ would make this triangle exactly right; at $26$ the longest side falls short of that, and the angle across from it falls short of $90°$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (Right): the corner in the figure looks square and $11$-$24$-$26$ sits close to a right triple, but $697 \\ne 676$, so the angle is about $88°$, not $90°$.\n* Choice C (Obtuse): would require $a^2 + b^2 < c^2$; here the leg squares total more than $c^2$, not less.\n* Choice D (Isosceles): would require two equal side lengths, but $11$, $24$, and $26$ are all different.\n\n**Test Day Takeaway:** Compare $a^2 + b^2$ to $c^2$ with the longest side as $c$: larger is acute, equal is right, smaller is obtuse. A corner that looks square proves nothing — run the two squares.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "classification-via-computation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-042",
    domain: "geometry",
    skills: ["radian-measure-understanding"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "An angle has a measure of $x$ radians. Which of the following expressions gives the measure of this angle in degrees?",
    choices: [
      // distractor: converts degrees to radians instead
      { id: "A", text: "$\\frac{\\pi x}{180}$" },
      { id: "B", text: "$\\frac{180x}{\\pi}$" },
      // distractor: divides by 180*pi
      { id: "C", text: "$\\frac{x}{180\\pi}$" },
      // distractor: multiplies by 180*pi
      { id: "D", text: "$180\\pi x$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Radian-Degree Conversion Factor**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Since $\\pi$ radians $= 180°$, one radian is $\\frac{180}{\\pi}$ degrees, so $x$ radians is $\\frac{180x}{\\pi}$ degrees.\n\n**The Full Solution:**\nStep 1: The single conversion fact is $\\pi \\text{ radians} = 180°$.\nStep 2: Divide both sides by $\\pi$ to get the degree measure of one radian: $1 \\text{ radian} = \\frac{180}{\\pi}$ degrees.\nStep 3: Multiply by $x$: the angle measures $\\frac{180x}{\\pi}$ degrees.\n\nVerification: substituting $x = \\pi$ gives $\\frac{180\\pi}{\\pi} = 180$, and $\\pi$ radians is indeed $180°$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{\\pi x}{180}$): this is the degrees-to-radians conversion run backwards; substituting $x = \\pi$ gives about $0.055$, not $180$.\n* Choice C ($\\frac{x}{180\\pi}$): divides by both factors instead of forming the ratio $\\frac{180}{\\pi}$.\n* Choice D ($180\\pi x$): multiplies by both factors, producing a value roughly $32{,}000$ times too large.\n\n**Test Day Takeaway:** Test a candidate expression with $x = \\pi$. The one that returns $180$ is the radians-to-degrees converter.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conceptual-understanding",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-043",
    domain: "geometry",
    skills: ["circle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A circular fountain with a radius of $8$ feet is surrounded by a tiled ring that is $4$ feet wide. What is the area, in square feet, of the tiled ring alone?",
    choices: [
      // distractor: treats the width as a radius
      { id: "A", text: "$16\\pi$" },
      { id: "B", text: "$80\\pi$" },
      // distractor: reports the outer circle area without subtracting
      { id: "C", text: "$144\\pi$" },
      // distractor: adds the two circle areas instead of subtracting
      { id: "D", text: "$208\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Annulus (Ring) Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The outer radius is $8 + 4 = 12$, so the ring is $\\pi(12)^2 - \\pi(8)^2 = 144\\pi - 64\\pi = 80\\pi$ square feet.\n\n**The Full Solution:**\nStep 1: The ring is the region between two concentric circles, so its area is the outer area minus the inner area.\nStep 2: The inner radius is $8$ and the outer radius is $8 + 4 = 12$, because the path adds its width to the radius.\nStep 3: Area $= \\pi(144) - \\pi(64) = 80\\pi$ square feet.\n\nVerification: factoring gives $\\pi(12 - 8)(12 + 8) = \\pi(4)(20) = 80\\pi$, the same value. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16\\pi$): computes $\\pi(4)^2$, treating the ring's width as the radius of a circle.\n* Choice C ($144\\pi$): reports the area of the whole region out to radius $12$, fountain included.\n* Choice D ($208\\pi$): adds the two circle areas instead of subtracting them.\n\n**Test Day Takeaway:** A path or border adds its width to the radius, not to the diameter. Subtract areas, and use the difference of squares to keep the arithmetic quick.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "annulus-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-044",
    domain: "geometry",
    skills: ["triangle-inequality"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Two sides of a triangle have lengths $9$ and $16$. Which of the following could NOT be the length of the third side?",
    choices: [
      // distractor: 8 lies inside the interval from 7 to 25
      { id: "A", text: "$8$" },
      // distractor: 12 lies inside the interval
      { id: "B", text: "$12$" },
      // distractor: 20 lies inside the interval
      { id: "C", text: "$20$" },
      { id: "D", text: "$25$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Triangle Inequality Range**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The third side must satisfy $16 - 9 < x < 16 + 9$, that is $7 < x < 25$. Only $25$ falls outside.\n\n**The Full Solution:**\nStep 1: For any triangle, each side must be less than the sum of the other two and greater than their positive difference.\nStep 2: With sides $9$ and $16$, the third side $x$ must satisfy $7 < x < 25$.\nStep 3: Test the choices: $8$, $12$, and $20$ all lie strictly inside that interval; $25$ does not, since $9 + 16 = 25$ is not greater than $25$.\n\nVerification: with $x = 25$ the sides $9$ and $16$ would lie flat along the third side, forming a segment rather than a triangle. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): just above the lower bound of $7$, so it works; the inequality is strict but $8 > 7$.\n* Choice B ($12$): sits comfortably inside the interval.\n* Choice C ($20$): below the upper bound of $25$, so the three lengths do close into a triangle.\n\n**Test Day Takeaway:** The third side lives strictly between the difference and the sum of the other two. Endpoints are excluded because equality collapses the triangle.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "constraint-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-045",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "medium",
    type: "fill-in",
    question: "A cylindrical water tank has a base with a diameter of $14$ meters and a height of $6$ meters. The volume of the tank is $k\\pi$ cubic meters. What is the value of $k$?",
    correctAnswer: "294",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $294$.**\n\n**The Fast Way (~25s):** The radius is $7$, so $V = \\pi r^2 h = \\pi(49)(6) = 294\\pi$ and $k = 294$.\n\n**The Full Solution:**\nStep 1: The volume of a cylinder is $V = \\pi r^2 h$, which needs a radius, not a diameter.\nStep 2: Halve the diameter: $r = \\frac{14}{2} = 7$ meters, so $r^2 = 49$.\nStep 3: $V = \\pi(49)(6) = 294\\pi$ cubic meters, so $k = 294$.\n\nVerification: the base area is $49\\pi$ square meters, and stacking that base through $6$ meters of height gives $6(49\\pi) = 294\\pi$. $\\checkmark$\n\n**Common Mistakes:** Using the diameter $14$ as the radius gives $\\pi(196)(6) = 1{,}176\\pi$, four times too large. Computing the lateral surface area $2\\pi rh = 2\\pi(7)(6)$ gives $84$, a square-meter quantity rather than a volume.\n\n**Test Day Takeaway:** Whenever a problem hands you a diameter, halve it before it enters a squared term. Squaring doubles the damage of that slip.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // ── HARD (15 questions) ────────────────────────────────────────────

  {
    id: "bank-geo-046",
    domain: "geometry",
    skills: ["completing-square-circles"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A circle in the $xy$-plane is defined by $x^2 + y^2 - 14x + 6y + 33 = 0$. What is the area of the region enclosed by this circle?",
    choices: [
      // distractor: multiplies the radius by pi without squaring
      { id: "A", text: "$5\\pi$" },
      // distractor: reports the circumference
      { id: "B", text: "$10\\pi$" },
      { id: "C", text: "$25\\pi$" },
      // distractor: squares r squared, using 25 as the radius
      { id: "D", text: "$625\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle Equation to Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Completing both squares gives $(x - 7)^2 + (y + 3)^2 = 25$, so $r = 5$ and the area is $\\pi(5)^2 = 25\\pi$.\n\n**The Full Solution:**\nStep 1: Group and move the constant: $(x^2 - 14x) + (y^2 + 6y) = -33$.\nStep 2: Complete each square. Half of $-14$ is $-7$, so add $49$; half of $6$ is $3$, so add $9$. Adding both to the right side gives $(x - 7)^2 + (y + 3)^2 = -33 + 49 + 9 = 25$.\nStep 3: So $r^2 = 25$ and $r = 5$. The area is $\\pi r^2 = 25\\pi$.\n\nVerification: the right side of standard form already is $r^2$, so the area $\\pi r^2$ is just $\\pi$ times that number: $25\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\pi$): multiplies the radius by $\\pi$ without squaring it.\n* Choice B ($10\\pi$): computes the circumference $2\\pi r$, a length rather than an area.\n* Choice D ($625\\pi$): treats $25$ as the radius and squares it again; $25$ is already $r^2$.\n\n**Test Day Takeaway:** Once the equation is in standard form, the number on the right is $r^2$, so the area is that number times $\\pi$. Do not square it a second time.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "complete-square-then-compute",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-047",
    domain: "geometry",
    skills: ["soh-cah-toa", "pythagorean-theorem"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A loading ramp makes an angle $\\theta$ with the level ground, where $\\sin(\\theta) = \\dfrac{3}{5}$. The ramp covers a horizontal distance of $36$ feet. What is the vertical rise, in feet, of the ramp?",
    diagram: { type: "rightTriangle", params: { labels: ["θ", "", ""], sideLabels: ["36", "", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: multiplies the horizontal distance by sine
      { id: "A", text: "$21.6$" },
      { id: "B", text: "$27$" },
      // distractor: multiplies the horizontal distance by cosine
      { id: "C", text: "$28.8$" },
      // distractor: computes the ramp length instead of the rise
      { id: "D", text: "$45$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Recover Tangent from Sine (3-4-5 Triple)**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $\\sin(\\theta) = \\frac{3}{5}$ is the $3$-$4$-$5$ triangle, so $\\tan(\\theta) = \\frac{3}{4}$ and the rise is $36 \\cdot \\frac{3}{4} = 27$ feet.\n\n**The Full Solution:**\nStep 1: $\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{3}{5}$. The missing leg satisfies $a^2 + 3^2 = 5^2$, so $a = 4$: the $3$-$4$-$5$ triangle.\nStep 2: The horizontal distance is the adjacent leg, so the ratio that connects it to the rise is $\\tan(\\theta) = \\frac{3}{4}$.\nStep 3: rise $= 36 \\cdot \\tan(\\theta) = 36 \\cdot \\frac{3}{4} = 27$ feet.\n\nVerification: with legs $36$ and $27$, the ramp itself is $\\sqrt{36^2 + 27^2} = \\sqrt{1296 + 729} = \\sqrt{2025} = 45$, and $\\frac{27}{45} = \\frac{3}{5} = \\sin(\\theta)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($21.6$): multiplies the horizontal distance by $\\sin(\\theta) = \\frac{3}{5}$; sine pairs the rise with the ramp length, not with the horizontal run.\n* Choice C ($28.8$): multiplies by $\\cos(\\theta) = \\frac{4}{5}$, which relates the run to the ramp length.\n* Choice D ($45$): gives the length of the ramp itself, $36 \\cdot \\frac{5}{4}$, rather than its vertical rise.\n\n**Test Day Takeaway:** When a problem gives one ratio and asks about the other two sides, rebuild the whole triangle from the triple first. Horizontal run plus vertical rise always means tangent.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "double-angle-elevation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-048",
    domain: "geometry",
    skills: ["similar-triangles", "triangle-area"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Triangle $ABC$ is similar to triangle $DEF$, where $AB$ corresponds to $DE$. The length of $\\overline{AB}$ is $15$ and the length of $\\overline{DE}$ is $6$. If the area of triangle $ABC$ is $75$ square units, what is the area, in square units, of triangle $DEF$?",
    diagram: { type: "similarTriangles", params: { triangle1: { labels: ["A", "B", "C"], sideLabels: ["15", "", ""] }, triangle2: { labels: ["D", "E", "F"], sideLabels: ["6", "", ""] }, figureNote: true } },
    choices: [
      // distractor: cubes the ratio, which scales volumes
      { id: "A", text: "$4.8$" },
      { id: "B", text: "$12$" },
      // distractor: uses the linear ratio instead of its square
      { id: "C", text: "$30$" },
      // distractor: inverts the ratio and scales upward
      { id: "D", text: "$187.5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area Scaling by Square of Linear Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** The linear ratio is $\\frac{6}{15} = \\frac{2}{5}$, so areas scale by $\\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$: $75 \\cdot \\frac{4}{25} = 12$ square units.\n\n**The Full Solution:**\nStep 1: For similar figures with linear scale factor $k$, corresponding areas are in the ratio $k^2$.\nStep 2: Going from $ABC$ to $DEF$, $k = \\frac{DE}{AB} = \\frac{6}{15} = \\frac{2}{5}$, so $k^2 = \\frac{4}{25}$.\nStep 3: Area of $DEF = 75 \\cdot \\frac{4}{25} = 3 \\cdot 4 = 12$ square units.\n\nVerification: $\\frac{12}{75} = \\frac{4}{25} = \\left(\\frac{2}{5}\\right)^2$, matching the square of the linear ratio. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.8$): cubes the ratio, $75 \\cdot \\frac{8}{125}$; the cube scales volumes, not areas.\n* Choice C ($30$): applies the linear ratio $\\frac{2}{5}$ directly to the area, forgetting to square it.\n* Choice D ($187.5$): inverts the ratio and scales up by $\\frac{5}{2}$, even though $DEF$ is the smaller triangle.\n\n**Test Day Takeaway:** Decide the direction of the ratio first by asking which figure is smaller, then raise it to the power that matches the dimension: $1$ for length, $2$ for area, $3$ for volume.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-scaling",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-049",
    domain: "geometry",
    skills: ["volume-scaling"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Two similar right circular cones have base radii in the ratio $3$ to $5$. The volume of the smaller cone is $54$ cubic centimeters. What is the volume, in cubic centimeters, of the larger cone?",
    choices: [
      // distractor: scales by the linear ratio
      { id: "A", text: "$90$" },
      // distractor: scales by the square of the ratio
      { id: "B", text: "$150$" },
      { id: "C", text: "$250$" },
      // distractor: multiplies by 5 and ignores the 3
      { id: "D", text: "$270$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Volume Scaling by Cube of Linear Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Volumes scale by the cube of the linear ratio: $54 \\cdot \\left(\\frac{5}{3}\\right)^3 = 54 \\cdot \\frac{125}{27} = 250$ cubic centimeters.\n\n**The Full Solution:**\nStep 1: The cones are similar, so every corresponding length is in the ratio $\\frac{5}{3}$ from smaller to larger.\nStep 2: Volume is a three-dimensional measure, so the volume ratio is $\\left(\\frac{5}{3}\\right)^3 = \\frac{125}{27}$.\nStep 3: $54 \\cdot \\frac{125}{27} = 2 \\cdot 125 = 250$ cubic centimeters.\n\nVerification: $\\frac{250}{54} = \\frac{125}{27}$, which is exactly $\\left(\\frac{5}{3}\\right)^3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($90$): scales by $\\frac{5}{3}$ once, the factor for a single length.\n* Choice B ($150$): scales by $\\frac{25}{9}$, the factor that governs surface areas.\n* Choice D ($270$): multiplies by $5$ and never divides by $3$, misreading the ratio as a whole-number factor.\n\n**Test Day Takeaway:** A ratio of any corresponding lengths, radii, heights, or slant heights, is the same $k$. Cube it for volume and square it for surface area.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "volume-scaling-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-050",
    domain: "geometry",
    skills: ["circle-equation", "tangent-lines"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, a circle is given by $(x - 3)^2 + (y + 2)^2 = 100$, and a line is tangent to the circle at the point $(9, 6)$. What is the slope of the tangent line?",
    correctAnswer: "-3/4",
    explanation: "**SAT Pattern: Tangent Slope from Perpendicular Radius**\n\n**The correct answer is $-\\frac{3}{4}$.**\n\n**The Fast Way (~40s):** The radius to $(9, 6)$ has slope $\\frac{6 - (-2)}{9 - 3} = \\frac{8}{6} = \\frac{4}{3}$, and the tangent is perpendicular, so its slope is $-\\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: The circle has center $(3, -2)$, and the radius drawn to a point of tangency is perpendicular to the tangent line there.\nStep 2: Slope of the radius: $\\frac{6 - (-2)}{9 - 3} = \\frac{8}{6} = \\frac{4}{3}$.\nStep 3: Perpendicular slopes are opposite reciprocals, so the tangent slope is $-\\frac{3}{4}$.\n\nVerification: the point lies on the circle since $(9 - 3)^2 + (6 + 2)^2 = 36 + 64 = 100$, and $\\frac{4}{3} \\cdot \\left(-\\frac{3}{4}\\right) = -1$, confirming perpendicularity. $\\checkmark$\n\n**Common Mistakes:** Reporting $\\frac{4}{3}$ gives the radius's slope rather than the tangent's. Negating without inverting gives $-\\frac{4}{3}$, and inverting without negating gives $\\frac{3}{4}$; the perpendicular slope needs both moves. Reading the center as $(-3, 2)$ instead of $(3, -2)$ produces a radius slope of $\\frac{1}{3}$ and a wrong tangent slope of $-3$.\n\n**Test Day Takeaway:** Tangent line means perpendicular radius. Find the radius slope from the center and the point of tangency, then take the opposite reciprocal, flipping and negating in the same step.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "tangent-slope-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-051",
    domain: "geometry",
    skills: ["special-right-triangles", "soh-cah-toa"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A regular hexagon has a side length of $10$ centimeters. What is the area, in square centimeters, of the hexagon?",
    choices: [
      // distractor: reports the area of a single equilateral triangle
      { id: "A", text: "$25\\sqrt{3}$" },
      // distractor: counts only three of the six triangles
      { id: "B", text: "$75\\sqrt{3}$" },
      { id: "C", text: "$150\\sqrt{3}$" },
      // distractor: doubles the correct area
      { id: "D", text: "$300\\sqrt{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Regular Hexagon Area via Equilateral Triangles**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Six equilateral triangles of side $10$ tile the hexagon, and each has area $\\frac{\\sqrt{3}}{4}(10)^2 = 25\\sqrt{3}$, so the total is $6(25\\sqrt{3}) = 150\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Segments from the center to the six vertices cut a regular hexagon into six congruent equilateral triangles, each with side equal to the hexagon's side, $10$.\nStep 2: An equilateral triangle of side $s$ has height $\\frac{s\\sqrt{3}}{2}$, so its area is $\\frac{1}{2}(s)\\left(\\frac{s\\sqrt{3}}{2}\\right) = \\frac{s^2\\sqrt{3}}{4}$. With $s = 10$, that is $\\frac{100\\sqrt{3}}{4} = 25\\sqrt{3}$.\nStep 3: Multiply by six: $6(25\\sqrt{3}) = 150\\sqrt{3}$ square centimeters.\n\nVerification: $150\\sqrt{3} \\approx 259.8$, which sits between the inscribed circle area $\\pi(5\\sqrt{3})^2 \\approx 235.6$ and the circumscribed circle area $\\pi(10)^2 \\approx 314.2$, exactly where a hexagon belongs. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($25\\sqrt{3}$): reports the area of one of the six triangles.\n* Choice B ($75\\sqrt{3}$): counts three triangles, as if the center segments split the hexagon into halves rather than sixths.\n* Choice D ($300\\sqrt{3}$): uses $3\\sqrt{3}s^2$ in place of $\\frac{3\\sqrt{3}}{2}s^2$, doubling the area.\n\n**Test Day Takeaway:** A regular hexagon is six equilateral triangles on its own side length. Memorize $\\frac{s^2\\sqrt{3}}{4}$ for one triangle and multiply.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "composite-geometry",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-052",
    domain: "geometry",
    skills: ["sector-area", "arc-length"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A sector of a circle has a radius of $6$ centimeters and an arc length of $4\\pi$ centimeters. What is the area, in square centimeters, of the sector?",
    choices: [
      // distractor: takes the fraction of the circumference, returning the arc length again
      { id: "A", text: "$4\\pi$" },
      { id: "B", text: "$12\\pi$" },
      // distractor: omits the factor of one half
      { id: "C", text: "$24\\pi$" },
      // distractor: reports the area of the entire circle
      { id: "D", text: "$36\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sector Area from Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** A sector's area is $\\frac{1}{2}(\\text{arc})(\\text{radius}) = \\frac{1}{2}(4\\pi)(6) = 12\\pi$ square centimeters.\n\n**The Full Solution:**\nStep 1: Find the central angle in radians from $s = r\\theta$: $\\theta = \\frac{4\\pi}{6} = \\frac{2\\pi}{3}$.\nStep 2: Sector area in radians is $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(36)\\left(\\frac{2\\pi}{3}\\right)$.\nStep 3: $\\frac{1}{2}(36) = 18$ and $18 \\cdot \\frac{2\\pi}{3} = 12\\pi$ square centimeters.\n\nVerification: the arc is $\\frac{4\\pi}{12\\pi} = \\frac{1}{3}$ of the circumference, and $\\frac{1}{3}$ of the circle's area $36\\pi$ is $12\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4\\pi$): takes $\\frac{1}{3}$ of the circumference $12\\pi$, which simply returns the given arc length instead of an area.\n* Choice C ($24\\pi$): multiplies the arc by the radius but drops the factor $\\frac{1}{2}$.\n* Choice D ($36\\pi$): reports the area of the entire circle rather than the sector.\n\n**Test Day Takeaway:** Given an arc and a radius, $A = \\frac{1}{2}sr$ reaches the sector area in one step, the same shortcut as $\\frac{1}{2}bh$ for a triangle.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-sector",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-053",
    domain: "geometry",
    skills: ["volume-pyramid-cone", "volume-prism"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A solid consists of a right circular cylinder with a radius of $3$ meters and a height of $10$ meters, capped at one end by a hemisphere of the same radius. What is the total volume, in cubic meters, of the solid?",
    choices: [
      // distractor: omits the hemisphere entirely
      { id: "A", text: "$90\\pi$" },
      // distractor: uses a cone of height 3 in place of the hemisphere
      { id: "B", text: "$99\\pi$" },
      { id: "C", text: "$108\\pi$" },
      // distractor: adds a full sphere instead of a hemisphere
      { id: "D", text: "$126\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Composite Solid Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Cylinder: $\\pi(9)(10) = 90\\pi$. Hemisphere: $\\frac{1}{2} \\cdot \\frac{4}{3}\\pi(27) = 18\\pi$. Total $= 108\\pi$ cubic meters.\n\n**The Full Solution:**\nStep 1: The cylinder contributes $V = \\pi r^2 h = \\pi(3)^2(10) = 90\\pi$ cubic meters.\nStep 2: A hemisphere is half a sphere: $\\frac{1}{2}\\left(\\frac{4}{3}\\pi r^3\\right) = \\frac{2}{3}\\pi(27) = 18\\pi$ cubic meters.\nStep 3: The pieces share a face and do not overlap, so add them: $90\\pi + 18\\pi = 108\\pi$ cubic meters.\n\nVerification: the hemisphere accounts for $\\frac{18\\pi}{108\\pi} = \\frac{1}{6}$ of the solid, plausible for a $3$-meter cap on a $10$-meter body. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($90\\pi$): reports the cylinder alone and drops the cap.\n* Choice B ($99\\pi$): replaces the hemisphere with a cone of height $3$, contributing $\\frac{1}{3}\\pi(9)(3) = 9\\pi$.\n* Choice D ($126\\pi$): adds a whole sphere, $36\\pi$, instead of half of one.\n\n**Test Day Takeaway:** Break a composite solid into named pieces, compute each separately, and check whether the problem describes a full sphere or half of one before adding.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "composite-solid",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-054",
    domain: "geometry",
    skills: ["pythagorean-theorem", "volume-pyramid-cone"],
    difficulty: "hard",
    type: "fill-in",
    question: "A right circular cone has a base radius of $8$ centimeters and a slant height of $17$ centimeters. The volume of the cone is $k\\pi$ cubic centimeters. What is the value of $k$?",
    correctAnswer: "320",
    explanation: "**SAT Pattern: Cone Volume from Slant Height**\n\n**The correct answer is $320$.**\n\n**The Fast Way (~40s):** The height is $\\sqrt{17^2 - 8^2} = 15$, so $V = \\frac{1}{3}\\pi(64)(15) = 320\\pi$ and $k = 320$.\n\n**The Full Solution:**\nStep 1: The radius, the height, and the slant height form a right triangle with the slant height as the hypotenuse.\nStep 2: $h^2 = 17^2 - 8^2 = 289 - 64 = 225$, so $h = 15$ centimeters.\nStep 3: $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(64)(15) = 64(5)\\pi = 320\\pi$, so $k = 320$.\n\nVerification: $8$, $15$, $17$ is a Pythagorean triple, and $64 + 225 = 289$. $\\checkmark$\n\n**Common Mistakes:** Substituting the slant height for the height gives $\\frac{1}{3}(64)(17) = \\frac{1088}{3} \\approx 362.7$, which is not even an integer, a signal that the wrong length was used. Omitting the factor $\\frac{1}{3}$ gives $960$, the volume of the surrounding cylinder.\n\n**Test Day Takeaway:** Slant height is a hypotenuse, never a height. Convert it with the Pythagorean theorem before any volume formula.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-solid",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-055",
    domain: "geometry",
    skills: ["completing-square-circles", "circle-area"],
    difficulty: "hard",
    type: "fill-in",
    question: "The graph of $3x^2 + 3y^2 + 12x - 30y - 21 = 0$ in the $xy$-plane is a circle. What is the radius of this circle?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Normalize Circle Equation Before Completing**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~45s):** Divide through by $3$ to get $x^2 + y^2 + 4x - 10y - 7 = 0$, then complete the squares: $(x + 2)^2 + (y - 5)^2 = 7 + 4 + 25 = 36$, so $r = 6$.\n\n**The Full Solution:**\nStep 1: Standard form requires the squared terms to have a coefficient of $1$, so divide every term by $3$: $x^2 + y^2 + 4x - 10y - 7 = 0$.\nStep 2: Group and move the constant: $(x^2 + 4x) + (y^2 - 10y) = 7$. Half of $4$ is $2$, so add $4$; half of $-10$ is $-5$, so add $25$. Add both to the right side as well.\nStep 3: $(x + 2)^2 + (y - 5)^2 = 7 + 4 + 25 = 36$, so $r = \\sqrt{36} = 6$.\n\nVerification: expanding and multiplying back by $3$ gives $3x^2 + 12x + 12 + 3y^2 - 30y + 75 = 108$, which rearranges to $3x^2 + 3y^2 + 12x - 30y - 21 = 0$. $\\checkmark$\n\n**Common Mistakes:** Completing the square without dividing by $3$ first treats the equation as $x^2 + y^2 + 12x - 30y - 21 = 0$ and yields $(x + 6)^2 + (y - 15)^2 = 21 + 36 + 225 = 282$, giving $r = \\sqrt{282} \\approx 16.8$. Reporting $36$ hands back $r^2$ instead of $r$.\n\n**Test Day Takeaway:** Before completing any square, force the coefficient of $x^2$ and $y^2$ to $1$. A shared factor in front of both squared terms is the whole trap.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "non-standard-circle-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-056",
    domain: "geometry",
    skills: ["triangle-angle-sum", "soh-cah-toa"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In right triangle $PQR$, angle $R$ is a right angle and $\\tan(P) = \\frac{20}{21}$. What is the value of $\\cos(Q)$?",
    diagram: { type: "rightTriangle", params: { labels: ["P", "R", "Q"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\frac{20}{29}$" },
      // distractor: gives cosine of P instead of cosine of Q
      { id: "B", text: "$\\frac{21}{29}$" },
      // distractor: copies the given tangent
      { id: "C", text: "$\\frac{20}{21}$" },
      // distractor: inverts the ratio
      { id: "D", text: "$\\frac{29}{20}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Cofunction Identity**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Angles $P$ and $Q$ are complementary, so $\\cos(Q) = \\sin(P)$. From $\\tan(P) = \\frac{20}{21}$ the legs are $20$ and $21$ with hypotenuse $29$, so $\\sin(P) = \\frac{20}{29}$.\n\n**The Full Solution:**\nStep 1: With the right angle at $R$, angles $P$ and $Q$ sum to $90°$, so $\\cos(Q) = \\cos(90° - P) = \\sin(P)$.\nStep 2: $\\tan(P) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{20}{21}$, so the legs are $QR = 20$ and $PR = 21$. The hypotenuse is $\\sqrt{20^2 + 21^2} = \\sqrt{400 + 441} = \\sqrt{841} = 29$.\nStep 3: $\\sin(P) = \\frac{20}{29}$, so $\\cos(Q) = \\frac{20}{29}$.\n\nVerification: read $\\cos(Q)$ directly. The leg adjacent to $Q$ is $QR = 20$ and the hypotenuse is $29$, giving $\\frac{20}{29}$ again. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{21}{29}$): computes $\\cos(P)$, which equals $\\sin(Q)$, not $\\cos(Q)$.\n* Choice C ($\\frac{20}{21}$): copies the given tangent; a cosine cannot use two legs.\n* Choice D ($\\frac{29}{20}$): inverts the ratio, producing a value greater than $1$, which no cosine of an acute angle can be.\n\n**Test Day Takeaway:** In a right triangle the two acute angles are complementary, so $\\sin(P) = \\cos(Q)$ and $\\cos(P) = \\sin(Q)$. Recover the third side from the given ratio, then read the one you need straight off the figure.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "complementary-angle-identity",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-057",
    domain: "geometry",
    skills: ["volume-sphere", "volume-scaling"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A right circular cylinder has a radius of $r$ and a height of $h$. A second right circular cylinder has a radius of $3r$ and a height of $3h$. The volume of the second cylinder is how many times the volume of the first cylinder?",
    choices: [
      // distractor: reports the linear factor only
      { id: "A", text: "$3$" },
      // distractor: multiplies the two factors of 3 without squaring the radius
      { id: "B", text: "$9$" },
      { id: "C", text: "$27$" },
      // distractor: squares the height factor as well as the radius factor
      { id: "D", text: "$81$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Pure Volume Scaling**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** $V = \\pi r^2 h$, so tripling both $r$ and $h$ multiplies the volume by $3^2 \\cdot 3 = 27$.\n\n**The Full Solution:**\nStep 1: The first cylinder has volume $V_1 = \\pi r^2 h$.\nStep 2: The second has volume $V_2 = \\pi(3r)^2(3h) = \\pi(9r^2)(3h) = 27\\pi r^2 h$.\nStep 3: Divide: $\\frac{V_2}{V_1} = \\frac{27\\pi r^2 h}{\\pi r^2 h} = 27$.\n\nVerification: the two cylinders are similar with linear factor $3$, and volumes of similar solids scale by $3^3 = 27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the linear factor, which scales a single length, not a volume.\n* Choice B ($9$): multiplies $3 \\cdot 3$ for the two changed dimensions but never squares the radius.\n* Choice D ($81$): squares the height factor along with the radius factor, using $3^2 \\cdot 3^2$.\n\n**Test Day Takeaway:** Substitute the scaled quantities into the formula and simplify. The exponent on each variable tells you how its factor compounds.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scaling-conceptual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-058",
    domain: "geometry",
    skills: ["radians-to-degrees", "sector-area"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In a circle with a radius of $10$, a sector has a central angle of $\\frac{7\\pi}{10}$ radians. What is the area of the region that lies inside the circle but outside this sector?",
    diagram: { type: "circleWithSector", params: { centralAngle: 126, angleLabel: "7π/10", radius: 10, labelCenter: "O", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: applies one half r theta to the leftover angle and never squares the radius
      { id: "A", text: "$6.5\\pi$" },
      // distractor: reports the given sector instead of the region outside it
      { id: "B", text: "$35\\pi$" },
      { id: "C", text: "$65\\pi$" },
      // distractor: omits the factor of one half
      { id: "D", text: "$130\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Sector Area in Radians**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The circle covers $\\pi(10)^2 = 100\\pi$ and the given sector covers $\\frac{1}{2}(100)\\left(\\frac{7\\pi}{10}\\right) = 35\\pi$, so the region outside it covers $100\\pi - 35\\pi = 65\\pi$.\n\n**The Full Solution:**\nStep 1: With the central angle in radians, a sector's area is $A = \\frac{1}{2}r^2\\theta$. Here $\\frac{1}{2}r^2 = \\frac{1}{2}(100) = 50$.\nStep 2: The given sector has area $50 \\cdot \\frac{7\\pi}{10} = \\frac{350\\pi}{10} = 35\\pi$, and the whole circle has area $\\pi(10)^2 = 100\\pi$.\nStep 3: The region asked for is everything else inside the circle: $100\\pi - 35\\pi = 65\\pi$.\n\nVerification: that region is itself a sector, on the leftover angle $2\\pi - \\frac{7\\pi}{10} = \\frac{13\\pi}{10}$, and $50 \\cdot \\frac{13\\pi}{10} = 65\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.5\\pi$): uses $\\frac{1}{2}r\\theta$ on the leftover angle $\\frac{13\\pi}{10}$, never squaring the radius.\n* Choice B ($35\\pi$): stops at the sector the figure marks instead of the region outside it.\n* Choice D ($130\\pi$): uses $r^2\\theta$ on the leftover angle and drops the factor $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Read which region the question wants before reaching for $A = \\frac{1}{2}r^2\\theta$. The complement of a sector is either the circle minus the sector or the sector on the angle $2\\pi - \\theta$; the two must agree.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "radian-sector-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-059",
    domain: "geometry",
    skills: ["similar-triangles", "pythagorean-theorem"],
    difficulty: "hard",
    type: "fill-in",
    question: "Triangle $KLM$ has a right angle at vertex $L$, with $KL = 9$ and $LM = 12$. An altitude of length $h$ is drawn from $L$ to the hypotenuse $\\overline{KM}$. What is the value of $h$?",
    diagram: { type: "rightTriangleWithAltitude", params: { vertexLabels: ["K", "L", "M", "N"], sideLengths: { LM: "9", MN: "12", PM: "h" }, figureNote: true } },
    correctAnswer: "7.2",
    explanation: "**SAT Pattern: Altitude to Hypotenuse**\n\n**The correct answer is $7.2$.**\n\n**The Fast Way (~40s):** The hypotenuse is $15$, and computing the area two ways gives $\\frac{1}{2}(9)(12) = \\frac{1}{2}(15)h$, so $h = \\frac{108}{15} = 7.2$.\n\n**The Full Solution:**\nStep 1: Find the hypotenuse: $KM = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$.\nStep 2: Using the two legs as base and height, the area is $\\frac{1}{2}(9)(12) = 54$.\nStep 3: Using the hypotenuse as the base and $h$ as the height, that same area is $\\frac{1}{2}(15)h = 54$, so $h = \\frac{108}{15} = 7.2$.\n\nVerification: an altitude to the hypotenuse must be shorter than either leg, and $7.2 < 9 < 12$. $\\checkmark$\n\n**Common Mistakes:** Reporting $7.5$ takes half the hypotenuse, which is the median from $L$, not the altitude. Averaging the legs gives $10.5$, longer than one of the legs and therefore impossible. Taking the geometric mean of the legs gives $\\sqrt{108} \\approx 10.4$, another value that exceeds a leg.\n\n**Test Day Takeaway:** Compute the area of a right triangle twice: legs as base and height, then hypotenuse as base. Setting the two expressions equal isolates the altitude in one line.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "altitude-to-hypotenuse",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-060",
    domain: "geometry",
    skills: ["circle-parts", "arc-length", "sector-area"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A circular running track has a circumference of $360$ meters and center $O$. A runner starts at point $A$ on the track and runs along the track to point $B$, covering an arc of $135$ meters. What is the area, in square meters, of sector $AOB$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 135, showAngleLabel: false, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
    choices: [
      // distractor: divides the circle area by 8 but drops the factor 3
      { id: "A", text: "$\\frac{4{,}050}{\\pi}$" },
      { id: "B", text: "$\\frac{12{,}150}{\\pi}$" },
      // distractor: reports the area of the whole circle
      { id: "C", text: "$\\frac{32{,}400}{\\pi}$" },
      // distractor: uses C over pi as the radius instead of C over 2 pi
      { id: "D", text: "$\\frac{48{,}600}{\\pi}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circumference → Radius → Sector**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** The arc is $\\frac{135}{360} = \\frac{3}{8}$ of the track. With $r = \\frac{360}{2\\pi} = \\frac{180}{\\pi}$, the circle's area is $\\frac{32{,}400}{\\pi}$, so the sector is $\\frac{3}{8} \\cdot \\frac{32{,}400}{\\pi} = \\frac{12{,}150}{\\pi}$ square meters.\n\n**The Full Solution:**\nStep 1: From $C = 2\\pi r$, the radius is $r = \\frac{360}{2\\pi} = \\frac{180}{\\pi}$ meters.\nStep 2: The circle's area is $\\pi r^2 = \\pi \\cdot \\frac{32{,}400}{\\pi^2} = \\frac{32{,}400}{\\pi}$ square meters.\nStep 3: The sector is the same fraction of the area that the arc is of the circumference, namely $\\frac{135}{360} = \\frac{3}{8}$, so its area is $\\frac{3}{8} \\cdot \\frac{32{,}400}{\\pi} = \\frac{12{,}150}{\\pi}$ square meters.\n\nVerification: the shortcut $A = \\frac{1}{2}sr$ gives $\\frac{1}{2}(135)\\left(\\frac{180}{\\pi}\\right) = \\frac{12{,}150}{\\pi}$, the same value. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{4{,}050}{\\pi}$): divides the circle's area by $8$ but never multiplies by the $3$ in $\\frac{3}{8}$.\n* Choice C ($\\frac{32{,}400}{\\pi}$): reports the area enclosed by the entire track.\n* Choice D ($\\frac{48{,}600}{\\pi}$): uses $r = \\frac{C}{\\pi}$ instead of $r = \\frac{C}{2\\pi}$, doubling the radius and quadrupling every area.\n\n**Test Day Takeaway:** Circumference gives the radius through $r = \\frac{C}{2\\pi}$, and the arc-to-circumference ratio equals the sector-to-circle ratio. Keeping $\\pi$ symbolic avoids rounding on the way through.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-track-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === RIGHT-TRIANGLE TRIG RATIOS (8 questions) — Phase 2 priority pattern ===
  // 17x in 12 tests = 3.2% of test items. Covers: SOHCAHTOA from given sides,
  // side-from-ratio scaling, identity-based ratio composition, real-world angle.
  // Pythagorean triples used: 5-12-13, 8-15-17, 7-24-25, 3-4-5.
  {
    id: "bank-geo-061",
    domain: "geometry",
    skills: ["soh-cah-toa", "pythagorean-theorem"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Right triangle $WXY$ has its right angle at vertex $X$. If $WY = 29$ and $XY = 20$, what is the value of $\\sin W$?",
    diagram: { type: "rightTriangle", params: { labels: ["W", "X", "Y"], sideLabels: ["", "20", "29"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\dfrac{20}{29}$" },
      { id: "B", text: "$\\dfrac{21}{29}$" },
      { id: "C", text: "$\\dfrac{20}{21}$" },
      { id: "D", text: "$\\dfrac{29}{20}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The hypotenuse faces the right angle, so $WY = 29$ is the hypotenuse and $XY = 20$ is the leg opposite angle $W$. By SOH, $\\sin W = \\frac{20}{29}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $X$, so the side across from it, $\\overline{WY}$, is the hypotenuse: $WY = 29$.\nStep 2: The leg opposite angle $W$ is $\\overline{XY}$, with $XY = 20$.\nStep 3: $\\sin W = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{20}{29}$.\n\nCheck: the remaining leg is $WX = \\sqrt{29^2 - 20^2} = \\sqrt{441} = 21$, so the sides $20$, $21$, $29$ do form a right triangle.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{21}{29}$): uses the adjacent leg $WX = 21$ over the hypotenuse, which is $\\cos W$, not $\\sin W$.\n* Choice C ($\\frac{20}{21}$): uses opposite over adjacent, which is $\\tan W$.\n* Choice D ($\\frac{29}{20}$): flips the correct ratio, giving $\\csc W$ instead of $\\sin W$.\n\n**Test Day Takeaway:** Label the hypotenuse first (it is always opposite the right angle), then read $\\sin$ as opposite over that hypotenuse.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-trig-ratios",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-062",
    domain: "geometry",
    skills: ["soh-cah-toa", "pythagorean-theorem"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In right triangle $DEF$, angle $E$ is a right angle. The length of $\\overline{DF}$ is $37$ and the length of $\\overline{DE}$ is $12$. What is the value of $\\cos D$?",
    diagram: { type: "rightTriangle", params: { labels: ["D", "E", "F"], sideLabels: ["12", "", "37"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\dfrac{12}{37}$" },
      { id: "B", text: "$\\dfrac{12}{35}$" },
      { id: "C", text: "$\\dfrac{35}{37}$" },
      { id: "D", text: "$\\dfrac{37}{12}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** With the right angle at $E$, the hypotenuse is $DF = 37$ and the leg touching angle $D$ is $DE = 12$. By CAH, $\\cos D = \\frac{12}{37}$.\n\n**The Full Solution:**\nStep 1: The right angle sits at $E$, so $\\overline{DF}$ is the hypotenuse: $DF = 37$.\nStep 2: The leg adjacent to angle $D$ is the leg that touches $D$ but is not the hypotenuse, namely $\\overline{DE}$, with $DE = 12$.\nStep 3: $\\cos D = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{12}{37}$.\n\nCheck: $EF = \\sqrt{37^2 - 12^2} = \\sqrt{1225} = 35$, so the triangle has sides $12$, $35$, $37$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{12}{35}$): divides one leg by the other in the wrong order; that ratio is $\\cot D$.\n* Choice C ($\\frac{35}{37}$): uses the opposite leg $EF = 35$ over the hypotenuse, which is $\\sin D$.\n* Choice D ($\\frac{37}{12}$): flips the correct ratio, giving $\\sec D$.\n\n**Test Day Takeaway:** For $\\cos$, take the leg that touches the named angle and divide by the hypotenuse; the other leg belongs to $\\sin$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-trig-ratios",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-063",
    domain: "geometry",
    skills: ["soh-cah-toa", "pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In right triangle $GHJ$, angle $H$ is a right angle. The length of $\\overline{GH}$ is $45$ and the length of $\\overline{HJ}$ is $28$. What is the value of $\\tan G$?",
    diagram: { type: "rightTriangle", params: { labels: ["G", "H", "J"], sideLabels: ["45", "28", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\dfrac{28}{53}$" },
      { id: "B", text: "$\\dfrac{28}{45}$" },
      { id: "C", text: "$\\dfrac{45}{53}$" },
      { id: "D", text: "$\\dfrac{45}{28}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Tangent uses only the two legs. From angle $G$, the opposite leg is $HJ = 28$ and the adjacent leg is $GH = 45$, so $\\tan G = \\frac{28}{45}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $H$, so $\\overline{GH}$ and $\\overline{HJ}$ are the legs and $\\overline{GJ}$ is the hypotenuse.\nStep 2: Relative to angle $G$, the opposite leg is $\\overline{HJ}$ ($28$) and the adjacent leg is $\\overline{GH}$ ($45$).\nStep 3: By TOA, $\\tan G = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{28}{45}$.\n\nCheck: $GJ = \\sqrt{45^2 + 28^2} = \\sqrt{2809} = 53$, so the hypotenuse is $53$ and every ratio below is built from $28$, $45$, and $53$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{28}{53}$): puts the hypotenuse $53$ in the denominator, which produces $\\sin G$.\n* Choice C ($\\frac{45}{53}$): adjacent over hypotenuse, which is $\\cos G$.\n* Choice D ($\\frac{45}{28}$): swaps opposite and adjacent, giving $\\cot G$.\n\n**Test Day Takeaway:** When a question asks for $\\tan$, the hypotenuse is a decoy — work with the two legs only.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-trig-ratios",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-064",
    domain: "geometry",
    skills: ["soh-cah-toa", "special-right-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In right triangle $ABC$, angle $A$ is a right angle. If $\\tan B = \\dfrac{15}{8}$ and $AB = 24$, what is the length of $\\overline{BC}$?",
    diagram: { type: "rightTriangle", params: { labels: ["B", "A", "C"], sideLabels: ["24", "", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$17$" },
      { id: "B", text: "$24$" },
      { id: "C", text: "$45$" },
      { id: "D", text: "$51$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $\\tan B = \\frac{AC}{AB} = \\frac{15}{8}$, and $AB = 24 = 8 \\cdot 3$, so the triangle is the $8$-$15$-$17$ triple scaled by $3$. The hypotenuse is $BC = 17 \\cdot 3 = 51$.\n\n**The Full Solution:**\nStep 1: The right angle is at $A$, so relative to angle $B$ the opposite leg is $\\overline{AC}$ and the adjacent leg is $\\overline{AB}$. Then $\\tan B = \\frac{AC}{AB} = \\frac{15}{8}$.\nStep 2: Substituting $AB = 24$ gives $\\frac{AC}{24} = \\frac{15}{8}$, so $AC = 24 \\cdot \\frac{15}{8} = 45$.\nStep 3: $\\overline{BC}$ is the hypotenuse, so $BC = \\sqrt{24^2 + 45^2} = \\sqrt{576 + 2025} = \\sqrt{2601} = 51$.\n\nCheck: $\\frac{45}{24} = \\frac{15}{8}$, and $24$, $45$, $51$ is $3$ times $8$, $15$, $17$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): reads $15$ and $8$ as the actual leg lengths and reports the hypotenuse of that unscaled triangle, ignoring $AB = 24$.\n* Choice B ($24$): repeats the given leg $AB$ instead of finding the hypotenuse.\n* Choice C ($45$): stops at the second leg $AC$, which is opposite angle $B$, not the hypotenuse $\\overline{BC}$.\n\n**Test Day Takeaway:** A trig ratio names the shape of the triangle; one real side length sets the scale factor, and every other side follows from it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-trig-ratios",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-065",
    domain: "geometry",
    skills: ["soh-cah-toa", "special-right-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In right triangle $MNP$, angle $P$ is a right angle. If $\\sin M = \\dfrac{11}{61}$, what is the value of $\\cos M$?",
    choices: [
      { id: "A", text: "$\\dfrac{11}{60}$" },
      { id: "B", text: "$\\dfrac{60}{61}$" },
      { id: "C", text: "$\\dfrac{61}{60}$" },
      { id: "D", text: "$\\dfrac{60}{11}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $\\sin M = \\frac{11}{61}$ makes the opposite leg $11$ and the hypotenuse $61$; the missing leg is $60$ because $11$, $60$, $61$ is a Pythagorean triple. So $\\cos M = \\frac{60}{61}$.\n\n**The Full Solution:**\nStep 1: With the right angle at $P$, $\\overline{MN}$ is the hypotenuse. Take $NP = 11$ (opposite angle $M$) and $MN = 61$.\nStep 2: The adjacent leg is $MP = \\sqrt{61^2 - 11^2} = \\sqrt{3721 - 121} = \\sqrt{3600} = 60$.\nStep 3: $\\cos M = \\frac{MP}{MN} = \\frac{60}{61}$.\n\nCheck: $\\left(\\frac{11}{61}\\right)^2 + \\left(\\frac{60}{61}\\right)^2 = \\frac{121 + 3600}{3721} = 1$, as the Pythagorean identity requires.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{11}{60}$): divides the two legs, which gives $\\tan M$ rather than $\\cos M$.\n* Choice C ($\\frac{61}{60}$): inverts the correct ratio, giving $\\sec M$; a cosine of an acute angle is always less than $1$.\n* Choice D ($\\frac{60}{11}$): inverts the tangent, giving $\\cot M$.\n\n**Test Day Takeaway:** Read a given sine as two side lengths, recover the third side with the Pythagorean theorem, and every other ratio is then a division.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-trig-ratios",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-066",
    domain: "geometry",
    skills: ["soh-cah-toa", "triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A guy wire $175$ feet long runs from the top of a vertical antenna to an anchor point on level ground, making an angle of $\\theta$ with the ground, where $\\sin\\theta = 0.28$. What is the area, in square feet, of the right triangle formed by the wire, the antenna, and the ground?",
    diagram: { type: "rightTriangle", params: { labels: ["θ", "", ""], sideLabels: ["", "", "175"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$49$" },
      { id: "B", text: "$168$" },
      { id: "C", text: "$4{,}116$" },
      { id: "D", text: "$8{,}232$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The antenna is $175(0.28) = 49$ feet and the ground leg is $175(0.96) = 168$ feet, so the area is $\\frac{1}{2}(49)(168) = 4{,}116$ square feet.\n\n**The Full Solution:**\nStep 1: The wire is the hypotenuse. The antenna is the leg opposite $\\theta$, so $\\sin\\theta = \\frac{\\text{antenna}}{175} = 0.28$ gives an antenna height of $175(0.28) = 49$ feet.\nStep 2: $\\cos\\theta = \\sqrt{1 - 0.28^2} = \\sqrt{0.9216} = 0.96$, so the ground leg is $175(0.96) = 168$ feet.\nStep 3: The legs of a right triangle are its base and height, so the area is $\\frac{1}{2}(49)(168) = 4{,}116$ square feet.\n\nCheck: $49^2 + 168^2 = 2{,}401 + 28{,}224 = 30{,}625 = 175^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($49$): stops at the height of the antenna instead of computing an area.\n* Choice B ($168$): stops at the distance along the ground.\n* Choice D ($8{,}232$): multiplies the two legs but forgets the factor of $\\frac{1}{2}$ in the triangle-area formula.\n\n**Test Day Takeaway:** In a right triangle the two legs are already a base and a height — find both legs, then halve their product.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-trig-ratios",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-067",
    domain: "geometry",
    skills: ["soh-cah-toa", "pythagorean-theorem", "special-right-triangles"],
    difficulty: "hard",
    type: "fill-in",
    question: "In right triangle $RST$, angle $S$ is a right angle and $\\tan R = \\dfrac{12}{5}$. The perimeter of triangle $RST$ is $210$. What is the length of $\\overline{RS}$?",
    diagram: { type: "rightTriangle", params: { labels: ["R", "S", "T"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "35",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~45s):** $\\tan R = \\frac{12}{5}$ makes the sides $12k$, $5k$, $13k$, whose perimeter is $30k$. From $30k = 210$, $k = 7$, so $RS = 5(7) = 35$.\n\n**The Full Solution:**\nStep 1: With the right angle at $S$, $\\tan R = \\frac{ST}{RS} = \\frac{12}{5}$, so write $ST = 12k$ and $RS = 5k$ for some positive $k$.\nStep 2: The hypotenuse is $RT = \\sqrt{(12k)^2 + (5k)^2} = \\sqrt{169k^2} = 13k$, the $5$-$12$-$13$ triple scaled by $k$.\nStep 3: The perimeter is $5k + 12k + 13k = 30k = 210$, so $k = 7$ and $RS = 5(7) = 35$.\n\nCheck: the three sides are $35$, $84$, and $91$, and $35 + 84 + 91 = 210$, with $35^2 + 84^2 = 8{,}281 = 91^2$.\n\n**Common Mistakes:**\n* Reading $12$ and $5$ as the actual side lengths and answering $5$; the perimeter would then be $30$, not $210$.\n* Answering $84$, which is $\\overline{ST}$, the leg opposite angle $R$, instead of $\\overline{RS}$.\n* Answering $91$, the hypotenuse $\\overline{RT}$.\n* Dividing the perimeter into three equal parts and answering $70$, which ignores the $5:12:13$ ratio.\n\n**Test Day Takeaway:** Turn a tangent value into $12k$ and $5k$, let the Pythagorean theorem supply $13k$, and use the perimeter to solve for the single unknown $k$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-trig-ratios",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-068",
    domain: "geometry",
    skills: ["soh-cah-toa", "pythagorean-theorem"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Triangle $PQR$ has a right angle at vertex $Q$. If $\\cos P = \\dfrac{9}{41}$, what is the value of $\\dfrac{\\sin R}{\\cos R}$?",
    choices: [
      { id: "A", text: "$\\dfrac{9}{41}$" },
      { id: "B", text: "$\\dfrac{9}{40}$" },
      { id: "C", text: "$\\dfrac{40}{41}$" },
      { id: "D", text: "$\\dfrac{40}{9}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** Angles $P$ and $R$ are complementary, so $\\sin R = \\cos P = \\frac{9}{41}$ and $\\cos R = \\sin P = \\frac{40}{41}$. The quotient is $\\frac{9}{41} \\div \\frac{40}{41} = \\frac{9}{40}$.\n\n**The Full Solution:**\nStep 1: $\\cos P = \\frac{9}{41}$ means the leg adjacent to $P$ is $PQ = 9k$ and the hypotenuse is $PR = 41k$; the third side is $QR = \\sqrt{41^2 - 9^2}\\,k = \\sqrt{1600}\\,k = 40k$.\nStep 2: Angle $R$ is the other acute angle, so $\\overline{PQ}$ is opposite $R$ and $\\overline{QR}$ is adjacent to $R$. Then $\\sin R = \\frac{9k}{41k} = \\frac{9}{41}$ and $\\cos R = \\frac{40k}{41k} = \\frac{40}{41}$.\nStep 3: $\\frac{\\sin R}{\\cos R} = \\frac{9/41}{40/41} = \\frac{9}{40}$.\n\nCheck: $\\frac{\\sin R}{\\cos R}$ is $\\tan R$, and reading the legs directly gives $\\tan R = \\frac{9k}{40k} = \\frac{9}{40}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{41}$): reports $\\sin R$ alone and never divides by $\\cos R$.\n* Choice C ($\\frac{40}{41}$): reports $\\cos R$ alone, the denominator of the requested quotient.\n* Choice D ($\\frac{40}{9}$): uses angle $P$ instead of angle $R$, giving $\\tan P = \\frac{40}{9}$.\n\n**Test Day Takeaway:** $\\frac{\\sin}{\\cos}$ of the same angle is always its tangent, and the two acute angles of a right triangle swap the roles of sine and cosine.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-trig-ratios",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === CIRCLE IN GENERAL FORM (8 questions) — Phase 2 batch 4 priority pattern ===
  // 8x in 12 tests. Covers: center, radius, h+k+r, area, max-x, find missing
  // parameter, r². Requires completing the square on both x and y groupings.
  // SAT Pattern kebab matches: 'circle-in-general-form'.
  {
    id: "bank-geo-069",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $x^2 + y^2 + 10x - 14y + 25 = 0$ is a circle. What are the coordinates of the center of this circle?",
    choices: [
      { id: "A", text: "$(-10, 14)$" },
      { id: "B", text: "$(-5, 7)$" },
      { id: "C", text: "$(5, -7)$" },
      { id: "D", text: "$(10, -14)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** For $x^2 + y^2 + Dx + Ey + F = 0$ the center is $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$. Here $D = 10$ and $E = -14$, so the center is $(-5, 7)$.\n\n**The Full Solution:**\nStep 1: Group the variables: $(x^2 + 10x) + (y^2 - 14y) = -25$.\nStep 2: Complete each square. Half of $10$ is $5$ and $5^2 = 25$; half of $-14$ is $-7$ and $(-7)^2 = 49$. Adding both to each side gives $(x + 5)^2 + (y - 7)^2 = -25 + 25 + 49 = 49$.\nStep 3: In the form $(x - h)^2 + (y - k)^2 = r^2$, $h = -5$ and $k = 7$, so the center is $(-5, 7)$.\n\nCheck: the radius is $\\sqrt{49} = 7$, and substituting the center's $y$-value with $x = 2$ gives $49 + 0 = 49$, a point on the circle.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-10, 14)$): negates the linear coefficients but forgets to halve them.\n* Choice C ($(5, -7)$): halves the coefficients but keeps their signs instead of negating them.\n* Choice D ($(10, -14)$): reads the linear coefficients straight off the equation with no halving and no sign change.\n\n**Test Day Takeaway:** Completing the square puts a minus sign in the binomial, so the center's coordinates are the negatives of half the linear coefficients.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-070",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "easy",
    type: "fill-in",
    question: "In the $xy$-plane, the graph of $x^2 + y^2 - 2x + 10y = 55$ is a circle. What is the radius of the circle?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~30s):** Completing both squares adds $1$ and $25$ to the right side: $55 + 1 + 25 = 81$, so $r^2 = 81$ and $r = 9$.\n\n**The Full Solution:**\nStep 1: Group by variable: $(x^2 - 2x) + (y^2 + 10y) = 55$.\nStep 2: Half of $-2$ is $-1$ with square $1$; half of $10$ is $5$ with square $25$. Add both to each side: $(x - 1)^2 + (y + 5)^2 = 55 + 1 + 25 = 81$.\nStep 3: Since $r^2 = 81$, the radius is $r = \\sqrt{81} = 9$.\n\nCheck: the center is $(1, -5)$, and the point $(10, -5)$ satisfies the equation because $81 + 0 = 81$; its distance from the center is $9$.\n\n**Common Mistakes:**\n* Answering $81$, which is $r^2$ rather than $r$.\n* Forgetting to add the completing-square constants to the right side, which leaves $r^2 = 55$ and a radius of about $7.42$.\n* Subtracting the constants instead of adding them, which gives $55 - 26 = 29$ and a radius of about $5.39$.\n\n**Test Day Takeaway:** Whatever you add inside a completed square must also be added to the other side; the radius is the square root of what lands there.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-071",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $2x^2 + 2y^2 - 16x + 20y - 26 = 0$ is a circle. What are the coordinates of the center of this circle?",
    choices: [
      { id: "A", text: "$(-8, 10)$" },
      { id: "B", text: "$(-4, 5)$" },
      { id: "C", text: "$(4, -5)$" },
      { id: "D", text: "$(8, -10)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Divide every term by $2$ to reach $x^2 + y^2 - 8x + 10y - 13 = 0$. The center is then $\\left(-\\frac{-8}{2}, -\\frac{10}{2}\\right) = (4, -5)$.\n\n**The Full Solution:**\nStep 1: The center formula requires the coefficients of $x^2$ and $y^2$ to be $1$, so divide the whole equation by $2$: $x^2 + y^2 - 8x + 10y - 13 = 0$.\nStep 2: Group and complete the squares: $(x^2 - 8x + 16) + (y^2 + 10y + 25) = 13 + 16 + 25$, which is $(x - 4)^2 + (y + 5)^2 = 54$.\nStep 3: Matching $(x - h)^2 + (y - k)^2 = r^2$ gives $h = 4$ and $k = -5$, so the center is $(4, -5)$.\n\nCheck: $r^2 = 54 > 0$, so the equation really does describe a circle.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-8, 10)$): divides by $2$ correctly but then reads the linear coefficients $-8$ and $10$ straight off the equation, skipping both the halving and the sign change.\n* Choice B ($(-4, 5)$): does the arithmetic correctly but reverses both signs at the end.\n* Choice D ($(8, -10)$): halves and negates without first dividing the equation by $2$, doubling both coordinates.\n\n**Test Day Takeaway:** Normalize to a leading coefficient of $1$ on both squared terms before you touch the linear coefficients.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-072",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the graph of $x^2 + y^2 + 8x - 2y = 32$ is a circle whose center is the point $(a, b)$. If the radius of the circle is $r$, what is the value of $a + b + r$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~40s):** Completing the squares gives $(x + 4)^2 + (y - 1)^2 = 49$, so $h = -4$, $k = 1$, and $r = 7$, and $-4 + 1 + 7 = 4$.\n\n**The Full Solution:**\nStep 1: Group by variable: $(x^2 + 8x) + (y^2 - 2y) = 32$.\nStep 2: Half of $8$ is $4$ with square $16$; half of $-2$ is $-1$ with square $1$. Add both to each side: $(x + 4)^2 + (y - 1)^2 = 32 + 16 + 1 = 49$.\nStep 3: So $h = -4$, $k = 1$, and $r = \\sqrt{49} = 7$. Then $h + k + r = -4 + 1 + 7 = 4$.\n\nCheck: the point $(3, 1)$ is $7$ units right of the center, and $9 + 1 + 24 - 2 = 32$, so it lies on the circle.\n\n**Common Mistakes:**\n* Using $r^2 = 49$ in place of $r$, which gives $-4 + 1 + 49 = 46$.\n* Keeping the signs of the linear coefficients, so $h = 4$ and $k = -1$, which gives $4 - 1 + 7 = 10$.\n* Forgetting to add $16$ and $1$ to the right side, leaving $r^2 = 32$ and a non-integer radius near $5.66$.\n\n**Test Day Takeaway:** Finish the completed square, read $h$, $k$, and $r$ off the standard form, and only then combine them as the question asks.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-073",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles", "circle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A circle in the $xy$-plane is defined by the equation $x^2 + y^2 - 6x + 10y + 9 = 0$. What is the area of this circle, in square units, in terms of $\\pi$?",
    choices: [
      { id: "A", text: "$5\\pi$" },
      { id: "B", text: "$10\\pi$" },
      { id: "C", text: "$25\\pi$" },
      { id: "D", text: "$100\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Completing the squares gives $r^2 = 25$, and the area of a circle is $\\pi r^2$, so the area is $25\\pi$ square units.\n\n**The Full Solution:**\nStep 1: Group by variable: $(x^2 - 6x) + (y^2 + 10y) = -9$.\nStep 2: Half of $-6$ is $-3$ with square $9$; half of $10$ is $5$ with square $25$. Adding both gives $(x - 3)^2 + (y + 5)^2 = -9 + 9 + 25 = 25$.\nStep 3: Since $r^2 = 25$, the area is $\\pi r^2 = 25\\pi$ square units.\n\nCheck: $r = 5$, and $\\pi(5)^2 = 25\\pi$ agrees.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\pi$): uses $\\pi r$ instead of $\\pi r^2$, forgetting to square the radius.\n* Choice B ($10\\pi$): computes the circumference $2\\pi r$ rather than the area.\n* Choice D ($100\\pi$): squares the diameter $10$ instead of the radius.\n\n**Test Day Takeaway:** The completed square hands you $r^2$ directly, which is exactly what the area formula needs — no square root required.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-074",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "medium",
    type: "fill-in",
    question: "A circle in the $xy$-plane has the equation $x^2 + y^2 + 2x - 8y - 32 = 0$. What is the least possible $y$-coordinate of a point on this circle?",
    correctAnswer: "-3",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~40s):** The circle is $(x + 1)^2 + (y - 4)^2 = 49$, so its center is $(-1, 4)$ with radius $7$. The lowest point sits $7$ below the center, at $y = 4 - 7 = -3$.\n\n**The Full Solution:**\nStep 1: Group by variable: $(x^2 + 2x) + (y^2 - 8y) = 32$.\nStep 2: Half of $2$ is $1$ with square $1$; half of $-8$ is $-4$ with square $16$. Adding both gives $(x + 1)^2 + (y - 4)^2 = 32 + 1 + 16 = 49$, a circle centered at $(-1, 4)$ with $r = 7$.\nStep 3: The $y$-coordinates on the circle run from $k - r$ to $k + r$, that is from $4 - 7 = -3$ to $4 + 7 = 11$. The least is $-3$.\n\nCheck: the point $(-1, -3)$ gives $1 - 2 + 9 + 24 - 32 = 0$, so it lies on the circle.\n\n**Common Mistakes:**\n* Answering $11$, the greatest $y$-coordinate, by adding the radius instead of subtracting it.\n* Using $r^2 = 49$ in place of $r = 7$, which gives $4 - 49 = -45$.\n* Reporting $-1$, the $x$-coordinate of the center, after solving for the wrong variable.\n\n**Test Day Takeaway:** Extreme coordinates on a circle are always the center's coordinate plus or minus the radius — vertical extremes move $k$, horizontal extremes move $h$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-075",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, the graph of $x^2 + y^2 - 10x + by - 119 = 0$ is a circle with radius $13$, where $b$ is a positive constant. What is the value of $b$?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~50s):** Completing both squares gives $r^2 = 119 + 25 + \\frac{b^2}{4} = 169$, so $\\frac{b^2}{4} = 25$ and $b = 10$ for a positive $b$.\n\n**The Full Solution:**\nStep 1: Group by variable: $(x^2 - 10x) + (y^2 + by) = 119$.\nStep 2: Half of $-10$ is $-5$ with square $25$; half of $b$ is $\\frac{b}{2}$ with square $\\frac{b^2}{4}$. Adding both gives $(x - 5)^2 + \\left(y + \\frac{b}{2}\\right)^2 = 119 + 25 + \\frac{b^2}{4}$.\nStep 3: A radius of $13$ means $r^2 = 169$, so $144 + \\frac{b^2}{4} = 169$, giving $\\frac{b^2}{4} = 25$, $b^2 = 100$, and $b = 10$ since $b > 0$.\n\nCheck: with $b = 10$ the equation becomes $(x - 5)^2 + (y + 5)^2 = 169$, a circle of radius $13$ centered at $(5, -5)$.\n\n**Common Mistakes:**\n* Setting $144 + \\frac{b^2}{4} = 13$ by using the radius instead of its square, which has no real solution.\n* Forgetting to divide $b$ by $2$ before squaring, which gives $b^2 = 25$ and the answer $5$.\n* Taking the negative root and answering $-10$, which the condition $b > 0$ rules out.\n\n**Test Day Takeaway:** With an unknown linear coefficient, complete the square symbolically — $\\frac{b^2}{4}$ is the only new term, and the given radius pins it down.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-076",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A circle in the $xy$-plane is defined by $x^2 + y^2 + 12x - 16y + 36 = 0$. Point $P$ lies on this circle. What is the greatest possible distance from $P$ to the origin?",
    choices: [
      { id: "A", text: "$2$" },
      { id: "B", text: "$8$" },
      { id: "C", text: "$10$" },
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~60s):** The circle is centered at $(-6, 8)$ with radius $8$. The origin is $10$ units from that center, so the farthest point of the circle is $10 + 8 = 18$ units away.\n\n**The Full Solution:**\nStep 1: Complete the squares: $(x^2 + 12x + 36) + (y^2 - 16y + 64) = -36 + 36 + 64$, so $(x + 6)^2 + (y - 8)^2 = 64$. The center is $(-6, 8)$ and the radius is $8$.\nStep 2: The distance from the origin to the center is $\\sqrt{(-6)^2 + 8^2} = \\sqrt{100} = 10$.\nStep 3: Distances from the origin to points of the circle range from $10 - 8 = 2$ to $10 + 8 = 18$, so the greatest is $18$.\n\nCheck: the origin is outside the circle because $10 > 8$, so both endpoints of that range are positive, as they must be.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracts the radius instead of adding it, which gives the least distance, not the greatest.\n* Choice B ($8$): reports the radius of the circle.\n* Choice C ($10$): stops at the distance from the origin to the center and never accounts for the radius.\n\n**Test Day Takeaway:** For distances from an outside point to a circle, the extremes lie on the line through that point and the center: center distance minus radius, and center distance plus radius.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 5/3: right-triangle-pythagorean (8 items) =====
  // Test bundles use this 7x across PT3, PT7, PT9. The title in test explanations is
  // 'Right Triangle — Pythagorean' with em-dash (U+2014); kebab slug is
  // 'right-triangle-pythagorean'. Items lean on the canonical Pythagorean triples
  // (3-4-5, 5-12-13, 7-24-25, 8-15-17, 9-40-41) and their multiples.
  {
    id: "bank-geo-077",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The legs of the right triangle shown measure $12$ units and $16$ units. What is the length, in units, of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["12", "16", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$4$" },
      { id: "B", text: "$14$" },
      { id: "C", text: "$20$" },
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $12^2 + 16^2 = 144 + 256 = 400$, and $\\sqrt{400} = 20$.\n\n**The Full Solution:**\nStep 1: In a right triangle with legs $a$ and $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$.\nStep 2: Substitute the two legs: $12^2 + 16^2 = c^2$, so $400 = c^2$.\nStep 3: Take the positive square root: $c = 20$.\n\nCheck: $12$, $16$, $20$ is the $3$-$4$-$5$ triple scaled by $4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): subtracts the legs, $16 - 12$, instead of combining their squares.\n* Choice B ($14$): averages the two legs.\n* Choice D ($28$): adds the legs, $12 + 16$; the hypotenuse is always shorter than that sum.\n\n**Test Day Takeaway:** Square, add, then take the root — and sanity-check that the hypotenuse lands between the longer leg and the sum of the legs.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-078",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "easy",
    type: "fill-in",
    question: "In the right triangle shown, one leg measures $16$ centimeters and the other leg measures $30$ centimeters. What is the length, in centimeters, of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["16", "30", ""], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "34",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $34$.**\n\n**The Fast Way (~20s):** $16^2 + 30^2 = 256 + 900 = 1{,}156$, and $\\sqrt{1{,}156} = 34$.\n\n**The Full Solution:**\nStep 1: The two given sides meet at the right angle, so they are the legs and the unknown side is the hypotenuse $c$.\nStep 2: $16^2 + 30^2 = c^2$ gives $256 + 900 = 1{,}156 = c^2$.\nStep 3: $c = \\sqrt{1{,}156} = 34$ centimeters.\n\nCheck: $16$, $30$, $34$ is the $8$-$15$-$17$ triple scaled by $2$.\n\n**Common Mistakes:**\n* Answering $1{,}156$, which is $c^2$, by stopping before the square root.\n* Answering $46$ by adding the two legs instead of adding their squares.\n* Squaring the sum instead of summing the squares: $(16 + 30)^2 = 2{,}116$ leads to $46$, not $34$.\n\n**Test Day Takeaway:** $(a + b)^2$ is not $a^2 + b^2$; square each leg separately before you add.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-079",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the right triangle shown, the hypotenuse has length $61$ and one leg has length $11$. What is the length of the other leg?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["11", "", "61"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$50$" },
      { id: "B", text: "$60$" },
      { id: "C", text: "$72$" },
      { id: "D", text: "$3{,}600$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $61^2 - 11^2 = 3{,}721 - 121 = 3{,}600$, and $\\sqrt{3{,}600} = 60$.\n\n**The Full Solution:**\nStep 1: With legs $a$ and $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$. Here $c = 61$ and one leg is $11$.\nStep 2: Solve for the missing leg: $b^2 = c^2 - a^2 = 61^2 - 11^2 = 3{,}721 - 121 = 3{,}600$.\nStep 3: $b = \\sqrt{3{,}600} = 60$.\n\nCheck: $11^2 + 60^2 = 121 + 3{,}600 = 3{,}721 = 61^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($50$): subtracts the side lengths, $61 - 11$, instead of subtracting their squares.\n* Choice C ($72$): adds the side lengths, $61 + 11$; a leg must be shorter than the hypotenuse.\n* Choice D ($3{,}600$): stops at $b^2$ without taking the square root.\n\n**Test Day Takeaway:** When the hypotenuse is known, subtract the squares — subtracting the lengths themselves is the most common slip on this item type.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-080",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "fill-in",
    question: "A rectangular garden plot measures $24$ meters by $45$ meters. A straight gravel path is laid from one corner of the plot to the opposite corner. What is the length, in meters, of the path?",
    correctAnswer: "51",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $51$.**\n\n**The Fast Way (~30s):** The path is the diagonal of the rectangle, so its length is $\\sqrt{24^2 + 45^2} = \\sqrt{2{,}601} = 51$ meters.\n\n**The Full Solution:**\nStep 1: The two sides of the plot and the path form a right triangle, because the corners of a rectangle are right angles.\nStep 2: The sides $24$ and $45$ are the legs, so the path length $d$ satisfies $24^2 + 45^2 = d^2$, that is $576 + 2{,}025 = 2{,}601$.\nStep 3: $d = \\sqrt{2{,}601} = 51$ meters.\n\n```seva-figure\n{\"type\": \"rightTriangle\", \"params\": {\"vertices\": [[0, 0], [45, 0], [45, 24]], \"sideLabels\": [\"45\", \"24\", \"51\"], \"rightAngleVertex\": 1}, \"caption\": \"The path closes a 24-45-51 right triangle inside the plot.\"}\n```\n\nCheck: $24$, $45$, $51$ is the $8$-$15$-$17$ triple scaled by $3$.\n\n**Common Mistakes:**\n* Adding the sides and answering $69$, which is the distance along two edges rather than across.\n* Answering $21$ by subtracting $24$ from $45$.\n* Answering $1{,}080$, the area of the plot, instead of a length.\n\n**Test Day Takeaway:** Any rectangle diagonal is the hypotenuse of a right triangle whose legs are the two side lengths.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-081",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The two legs of the right triangle shown measure $18$ and $24$. What is the perimeter of the triangle?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["18", "24", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$30$" },
      { id: "B", text: "$42$" },
      { id: "C", text: "$72$" },
      { id: "D", text: "$216$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The hypotenuse is $\\sqrt{18^2 + 24^2} = \\sqrt{900} = 30$, so the perimeter is $18 + 24 + 30 = 72$.\n\n**The Full Solution:**\nStep 1: A perimeter needs all three sides, so first find the hypotenuse $c$.\nStep 2: $18^2 + 24^2 = 324 + 576 = 900$, so $c = \\sqrt{900} = 30$.\nStep 3: Add the three sides: $18 + 24 + 30 = 72$.\n\nCheck: $18$, $24$, $30$ is the $3$-$4$-$5$ triple scaled by $6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): reports the hypotenuse alone and never adds the three sides.\n* Choice B ($42$): adds only the two given legs and omits the hypotenuse.\n* Choice D ($216$): computes the area, $\\frac{1}{2}(18)(24)$, instead of the perimeter.\n\n**Test Day Takeaway:** A perimeter question on a right triangle is really two steps: find the missing side first, then add all three.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-082",
    domain: "geometry",
    skills: ["pythagorean-theorem", "triangle-area"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the right triangle shown, the hypotenuse measures $41$ and one leg measures $9$. What is the area of the triangle?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["9", "", "41"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "180",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $180$.**\n\n**The Fast Way (~35s):** The other leg is $\\sqrt{41^2 - 9^2} = \\sqrt{1{,}600} = 40$, so the area is $\\frac{1}{2}(9)(40) = 180$.\n\n**The Full Solution:**\nStep 1: The area of a right triangle is half the product of its legs, so the missing leg is needed first.\nStep 2: $b^2 = 41^2 - 9^2 = 1{,}681 - 81 = 1{,}600$, so $b = 40$.\nStep 3: Area $= \\frac{1}{2}(9)(40) = 180$ square units.\n\nCheck: $9^2 + 40^2 = 81 + 1{,}600 = 1{,}681 = 41^2$.\n\n**Common Mistakes:**\n* Multiplying the legs without halving, which gives $360$.\n* Using the hypotenuse as a leg: $\\frac{1}{2}(9)(41) = 184.5$.\n* Answering $40$, the missing leg, instead of the area.\n\n**Test Day Takeaway:** In a right triangle the legs are the base and the height, so the hypotenuse never belongs in the area formula.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-083",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the right triangle shown, the two legs have lengths $a$ and $a + 17$ and the hypotenuse has length $25$, where $a$ is a positive constant. What is the value of $a$?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["a", "a + 17", "25"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$4$" },
      { id: "B", text: "$7$" },
      { id: "C", text: "$13$" },
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** $a^2 + (a + 17)^2 = 625$ simplifies to $a^2 + 17a - 168 = 0$, which factors as $(a - 7)(a + 24) = 0$, so $a = 7$.\n\n**The Full Solution:**\nStep 1: Apply the Pythagorean theorem: $a^2 + (a + 17)^2 = 25^2$.\nStep 2: Expand and collect: $a^2 + a^2 + 34a + 289 = 625$, so $2a^2 + 34a - 336 = 0$, and dividing by $2$ gives $a^2 + 17a - 168 = 0$.\nStep 3: Factor: $(a - 7)(a + 24) = 0$, so $a = 7$ or $a = -24$. A length must be positive, so $a = 7$.\n\nCheck: the legs are $7$ and $24$, and $7^2 + 24^2 = 49 + 576 = 625 = 25^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): solves $a + (a + 17) = 25$, adding the legs to the hypotenuse instead of using the Pythagorean theorem.\n* Choice C ($13$): expands $(a + 17)^2$ as $a^2 + 289$, dropping the $34a$ term; that leaves $2a^2 = 336$ and $a \\approx 12.96$.\n* Choice D ($24$): solves correctly but reports the longer leg $a + 17$ rather than $a$.\n\n**Test Day Takeaway:** When a leg is written as an expression, expect a quadratic — expand the binomial fully, then reject the negative root.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-084",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "hard",
    type: "fill-in",
    question: "The figure shows a right triangle whose hypotenuse measures $a + 1$ and whose legs measure $a$ and $17$. What is the value of $a$?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["a", "17", "a + 1"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "144",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $144$.**\n\n**The Fast Way (~50s):** $a^2 + 289 = (a + 1)^2 = a^2 + 2a + 1$, so $289 = 2a + 1$ and $a = 144$.\n\n**The Full Solution:**\nStep 1: The hypotenuse is $a + 1$, so $a^2 + 17^2 = (a + 1)^2$.\nStep 2: Expand the right side: $a^2 + 289 = a^2 + 2a + 1$. The $a^2$ terms cancel, leaving $289 = 2a + 1$.\nStep 3: $2a = 288$, so $a = 144$.\n\nCheck: $144^2 + 17^2 = 20{,}736 + 289 = 21{,}025 = 145^2$, and $145 = a + 1$.\n\n**Common Mistakes:**\n* Answering $145$, which is the hypotenuse $a + 1$ rather than $a$.\n* Expanding $(a + 1)^2$ as $a^2 + 1$, which leaves $289 = 1$ and no solution at all.\n* Dropping the constant and solving $289 = 2a$, which gives the non-integer $144.5$.\n* Treating $17$ as the hypotenuse, which gives $2a^2 + 2a - 288 = 0$ and no integer solution.\n\n**Test Day Takeaway:** When the hypotenuse and a leg differ by a constant, the $a^2$ terms cancel and the quadratic collapses to a linear equation.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 6/3: cylinder-volume (7 items) =====
  // Bank already has bank-geo-035 (or thereabouts) for this pattern (1 item).
  // Adding 7 more for total of 8 (Tier 1 threshold).
  // Pattern: apply $V = \\pi r^2 h$ in forward, reverse, ratio, and rate
  // scenarios. 9 test occurrences across PT3, PT5, PT8, PT12 and friends.
  // SAT Pattern title (verbatim): 'Cylinder Volume' → 'cylinder-volume'.
  {
    id: "bank-geo-085",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A cylindrical candle has a radius of $3$ inches and a height of $7$ inches. What is the volume, in cubic inches, of the candle?",
    choices: [
      { id: "A", text: "$21\\pi$" },
      { id: "B", text: "$42\\pi$" },
      { id: "C", text: "$63\\pi$" },
      { id: "D", text: "$252\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $V = \\pi r^2 h = \\pi(3)^2(7) = 63\\pi$ cubic inches.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^2 h$.\nStep 2: Substitute $r = 3$ and $h = 7$: $V = \\pi(9)(7)$.\nStep 3: $V = 63\\pi$ cubic inches.\n\nCheck: the base area is $9\\pi$ square inches, and stacking that base through $7$ inches of height gives $63\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($21\\pi$): uses $\\pi r h$, forgetting to square the radius.\n* Choice B ($42\\pi$): computes the lateral surface area $2\\pi r h$ instead of the volume.\n* Choice D ($252\\pi$): uses the diameter $6$ in place of the radius.\n\n**Test Day Takeaway:** Volume of a cylinder is base area times height, and the base area is $\\pi r^2$ — the radius, never the diameter.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-086",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "easy",
    type: "fill-in",
    question: "A can of tomato paste is a right circular cylinder with a radius of $4$ centimeters and a height of $6$ centimeters. The volume of the can is $k\\pi$ cubic centimeters. What is the value of $k$?",
    correctAnswer: "96",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $96$.**\n\n**The Fast Way (~20s):** $V = \\pi(4)^2(6) = 96\\pi$, so $k = 96$.\n\n**The Full Solution:**\nStep 1: Use $V = \\pi r^2 h$ with $r = 4$ and $h = 6$.\nStep 2: $V = \\pi(16)(6) = 96\\pi$ cubic centimeters.\nStep 3: Comparing with $k\\pi$ gives $k = 96$.\n\nCheck: the base area is $16\\pi$ square centimeters, and $16\\pi \\cdot 6 = 96\\pi$.\n\n**Common Mistakes:**\n* Answering $24$ by using $\\pi r h$ and never squaring the radius.\n* Answering $384$ by using the diameter $8$ as the radius.\n* Multiplying $96$ by $\\pi$ again and answering a decimal near $301.6$; the question asks only for $k$.\n\n**Test Day Takeaway:** When an answer is written as $k\\pi$, compute the volume symbolically and read off the coefficient — no decimal approximation belongs in the grid.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-087",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A right circular cylinder has a volume of $180\\pi$ cubic centimeters and a radius of $6$ centimeters. What is the height, in centimeters, of the cylinder?",
    choices: [
      { id: "A", text: "$1.25$" },
      { id: "B", text: "$5$" },
      { id: "C", text: "$15$" },
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $180\\pi = \\pi(6)^2 h = 36\\pi h$, so $h = \\frac{180}{36} = 5$ centimeters.\n\n**The Full Solution:**\nStep 1: Start from $V = \\pi r^2 h$ and substitute the given values: $180\\pi = \\pi(6)^2 h$.\nStep 2: Divide both sides by $\\pi$: $180 = 36h$.\nStep 3: $h = \\frac{180}{36} = 5$ centimeters.\n\nCheck: $\\pi(36)(5) = 180\\pi$, matching the given volume.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.25$): divides by the square of the diameter, $144$, instead of the square of the radius.\n* Choice C ($15$): divides by the diameter $12$ rather than by $r^2$.\n* Choice D ($30$): divides by the radius $6$ instead of by $r^2 = 36$.\n\n**Test Day Takeaway:** Solving $V = \\pi r^2 h$ for $h$ means dividing by $r^2$, not by $r$ — the squared radius is the base area.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-088",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "medium",
    type: "fill-in",
    question: "A cylindrical grain bin has a volume of $320\\pi$ cubic feet and a height of $5$ feet. What is the radius, in feet, of the bin?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~25s):** $320\\pi = \\pi r^2(5)$ gives $r^2 = 64$, so $r = 8$ feet.\n\n**The Full Solution:**\nStep 1: Substitute into $V = \\pi r^2 h$: $320\\pi = \\pi r^2 (5)$.\nStep 2: Divide both sides by $5\\pi$: $r^2 = \\frac{320}{5} = 64$.\nStep 3: $r = \\sqrt{64} = 8$ feet.\n\nCheck: $\\pi(8)^2(5) = 320\\pi$ cubic feet.\n\n**Common Mistakes:**\n* Answering $64$, which is $r^2$, by skipping the square root.\n* Answering $16$ by reporting the diameter instead of the radius.\n* Dividing $320$ by $5$ and then by $2$ to get $32$, treating $r^2$ as $2r$.\n\n**Test Day Takeaway:** Isolate $r^2$ first; only after the height and $\\pi$ are gone should you take the square root.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-089",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Right circular cylinders $A$ and $B$ have equal volumes. The radius of cylinder $A$ is $5$ inches and its height is $12$ inches. If the radius of cylinder $B$ is $10$ inches, what is its height, in inches?",
    choices: [
      { id: "A", text: "$3$" },
      { id: "B", text: "$6$" },
      { id: "C", text: "$24$" },
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Cylinder $A$ holds $\\pi(5)^2(12) = 300\\pi$ cubic inches, so cylinder $B$ must satisfy $\\pi(10)^2 h = 300\\pi$, giving $h = 3$ inches.\n\n**The Full Solution:**\nStep 1: The volume of cylinder $A$ is $V = \\pi r^2 h = \\pi(5)^2(12) = 300\\pi$ cubic inches.\nStep 2: Cylinder $B$ has the same volume, so $\\pi(10)^2 h = 300\\pi$, which reduces to $100h = 300$.\nStep 3: $h = \\frac{300}{100} = 3$ inches.\n\nCheck: $\\pi(10)^2(3) = 300\\pi$ cubic inches, the same volume as cylinder $A$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): halves the height because the radius doubled, treating the volume as proportional to $r$ instead of to $r^2$.\n* Choice C ($24$): doubles the height along with the radius, scaling in the wrong direction.\n* Choice D ($48$): multiplies the height by $2^2 = 4$, applying the squared factor in the wrong direction.\n\n**Test Day Takeaway:** The radius enters a cylinder's volume squared, so doubling it forces the height down by a factor of $4$ — not $2$ — to keep the volume unchanged.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-090",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Cylinder $P$ and cylinder $Q$ are right circular cylinders. The radius of cylinder $P$ is $\\dfrac{2}{3}$ times the radius of cylinder $Q$, and the height of cylinder $P$ is $3$ times the height of cylinder $Q$. What is the ratio of the volume of cylinder $P$ to the volume of cylinder $Q$?",
    choices: [
      { id: "A", text: "$4$ to $9$" },
      { id: "B", text: "$4$ to $3$" },
      { id: "C", text: "$2$ to $1$" },
      { id: "D", text: "$4$ to $1$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The radius factor enters squared and the height factor enters once: $\\left(\\frac{2}{3}\\right)^2 \\cdot 3 = \\frac{4}{9} \\cdot 3 = \\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: Let cylinder $Q$ have radius $r$ and height $h$, so $V_Q = \\pi r^2 h$.\nStep 2: Cylinder $P$ has radius $\\frac{2}{3}r$ and height $3h$, so $V_P = \\pi\\left(\\frac{2}{3}r\\right)^2(3h) = \\pi \\cdot \\frac{4}{9}r^2 \\cdot 3h = \\frac{4}{3}\\pi r^2 h$.\nStep 3: $\\frac{V_P}{V_Q} = \\frac{4}{3}$, a ratio of $4$ to $3$.\n\nCheck: with $r = 3$ and $h = 1$, $V_Q = 9\\pi$ and $V_P = \\pi(2)^2(3) = 12\\pi$, and $\\frac{12}{9} = \\frac{4}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$ to $9$): squares the radius factor but ignores the tripled height.\n* Choice C ($2$ to $1$): multiplies $\\frac{2}{3}$ by $3$ without squaring the radius factor.\n* Choice D ($4$ to $1$): squares both the radius factor and the height factor, applying the exponent to the wrong dimension.\n\n**Test Day Takeaway:** Scale factors in a volume formula follow the exponents: squared for the radius, first power for the height.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-091",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "hard",
    type: "fill-in",
    question: "An empty cylindrical tank has a radius of $4$ feet and a height of $9$ feet. Water is pumped into the tank at a constant rate of $12\\pi$ cubic feet per minute. How many minutes does it take for the water in the tank to reach a depth of $6$ feet?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~45s):** Water $6$ feet deep occupies $\\pi(4)^2(6) = 96\\pi$ cubic feet, and $\\frac{96\\pi}{12\\pi} = 8$ minutes.\n\n**The Full Solution:**\nStep 1: The water forms a cylinder with the same radius as the tank but with height equal to its depth, $6$ feet.\nStep 2: That volume is $V = \\pi(4)^2(6) = 96\\pi$ cubic feet.\nStep 3: Time is volume divided by rate: $\\frac{96\\pi}{12\\pi} = 8$ minutes.\n\nCheck: in $8$ minutes the pump delivers $8(12\\pi) = 96\\pi$ cubic feet, which is exactly $6$ feet of depth in this tank.\n\n**Common Mistakes:**\n* Using the full height $9$ instead of the depth $6$, which gives $\\frac{144\\pi}{12\\pi} = 12$ minutes.\n* Using the diameter $8$ as the radius, which gives $\\frac{384\\pi}{12\\pi} = 32$ minutes.\n* Forgetting to square the radius, which gives $\\frac{24\\pi}{12\\pi} = 2$ minutes.\n\n**Test Day Takeaway:** Partly filled upright cylinders keep the same radius; only the height changes, so substitute the depth for $h$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 9/1: triangle-angle-sum (7 items) =====
  // Bank already has 2 items (bank-geo-001 easy, bank-geo-026 medium).
  // Adding 7 reaches 9 — clear of TIER1_PATTERN_THRESHOLD = 8.
  // 5 test occurrences across M2Easy variants.
  {
    id: "bank-geo-092",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In triangle $RST$ shown, the measure of angle $R$ is $38°$ and the measure of angle $S$ is $96°$. What is the measure of angle $T$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["38°", "96°", ""], vertexLabels: ["R", "S", "T"], figureNote: true } },
    choices: [
      { id: "A", text: "$46°$" },
      { id: "B", text: "$84°$" },
      { id: "C", text: "$134°$" },
      { id: "D", text: "$142°$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The three angles of a triangle sum to $180°$, so angle $T$ measures $180 - 38 - 96 = 46$ degrees.\n\n**The Full Solution:**\nStep 1: In any triangle, the measures of the three interior angles add to $180°$.\nStep 2: $38 + 96 = 134$, the combined measure of angles $R$ and $S$.\nStep 3: The remaining angle measures $180 - 134 = 46$ degrees.\n\nCheck: $38 + 96 + 46 = 180$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($84°$): subtracts only the larger given angle, $180 - 96$, and forgets angle $R$.\n* Choice C ($134°$): reports the sum of the two given angles rather than what is left over.\n* Choice D ($142°$): subtracts only the smaller given angle, $180 - 38$.\n\n**Test Day Takeaway:** Add the two known angles first, then subtract that single number from $180°$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-angle-sum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-093",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "easy",
    type: "fill-in",
    question: "Two of the interior angles of the triangle shown measure $27°$ and $118°$. What is the measure, in degrees, of the third interior angle?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["27°", "118°", ""], figureNote: true } },
    correctAnswer: "35",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~15s):** $180 - 27 - 118 = 35$ degrees.\n\n**The Full Solution:**\nStep 1: The interior angles of a triangle always total $180°$.\nStep 2: The two known angles account for $27 + 118 = 145$ degrees.\nStep 3: The third angle measures $180 - 145 = 35$ degrees.\n\nCheck: $27 + 118 + 35 = 180$.\n\n**Common Mistakes:**\n* Answering $145$, the sum of the two given angles, instead of the remainder.\n* Answering $62$ by subtracting only the obtuse angle, $180 - 118$.\n* Using $360$ in place of $180$, which gives $215$; that total belongs to a quadrilateral.\n\n**Test Day Takeaway:** An obtuse angle in the list is a signal to subtract carefully — the other two angles must together measure less than $90°$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-angle-sum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-094",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The measures of the three interior angles of the triangle shown are $2x°$, $3x°$, and $7x°$. What is the value of $x$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["2x°", "3x°", "7x°"], figureNote: true } },
    choices: [
      { id: "A", text: "$15$" },
      { id: "B", text: "$20$" },
      { id: "C", text: "$30$" },
      { id: "D", text: "$105$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $2x + 3x + 7x = 12x = 180$, so $x = 15$.\n\n**The Full Solution:**\nStep 1: The three interior angle measures sum to $180$, so $2x + 3x + 7x = 180$.\nStep 2: Combine like terms: $12x = 180$.\nStep 3: $x = \\frac{180}{12} = 15$.\n\nCheck: the angles measure $30°$, $45°$, and $105°$, and $30 + 45 + 105 = 180$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($20$): drops the $3x$ term when combining, solving $9x = 180$.\n* Choice C ($30$): finds $x = 15$ correctly but reports the smallest angle, $2x$.\n* Choice D ($105$): reports the largest angle, $7x$, instead of $x$ itself.\n\n**Test Day Takeaway:** After solving for the variable, reread the question — items like this often want $x$, not one of the angles it produces.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-angle-sum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-095",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "medium",
    type: "fill-in",
    question: "In right triangle $DEF$ shown, angle $E$ is the right angle and the measure of angle $D$ is $4$ times the measure of angle $F$. What is the measure, in degrees, of angle $F$?",
    diagram: { type: "rightTriangle", params: { labels: ["D", "E", "F"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "18",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~30s):** The two acute angles sum to $90°$, so $4f + f = 90$ gives $f = 18$ degrees.\n\n**The Full Solution:**\nStep 1: Angle $E$ measures $90°$, so angles $D$ and $F$ together measure $180 - 90 = 90$ degrees.\nStep 2: Let angle $F$ measure $f$ degrees; then angle $D$ measures $4f$ degrees, and $4f + f = 90$.\nStep 3: $5f = 90$, so $f = 18$ degrees.\n\nCheck: angle $D$ measures $72°$, and $90 + 72 + 18 = 180$.\n\n**Common Mistakes:**\n* Using $180$ instead of $90$ for the two acute angles, which gives $5f = 180$ and $f = 36$.\n* Answering $72$, the measure of angle $D$, instead of angle $F$.\n* Splitting the $90°$ evenly and answering $45$, which ignores the $4$-to-$1$ relationship.\n\n**Test Day Takeaway:** In a right triangle the two acute angles are complementary, so set their expressions equal to $90°$, not $180°$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-angle-sum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-096",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In triangle $ABC$, the measure of angle $B$ is $24°$ greater than the measure of angle $A$, and angle $C$ measures $96°$. What is the measure of angle $A$?",
    choices: [
      { id: "A", text: "$30°$" },
      { id: "B", text: "$42°$" },
      { id: "C", text: "$54°$" },
      { id: "D", text: "$84°$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Angles $A$ and $B$ share $180 - 96 = 84$ degrees, and they differ by $24$, so $a + (a + 24) = 84$ gives $a = 30$.\n\n**The Full Solution:**\nStep 1: Let angle $A$ measure $a$ degrees. Then angle $B$ measures $a + 24$ degrees.\nStep 2: The three angles sum to $180$: $a + (a + 24) + 96 = 180$.\nStep 3: Simplify to $2a + 120 = 180$, so $2a = 60$ and $a = 30$.\n\nCheck: the angles measure $30°$, $54°$, and $96°$, which sum to $180°$, and $54 - 30 = 24$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($42°$): splits the remaining $84°$ evenly between angles $A$ and $B$, ignoring the $24°$ difference.\n* Choice C ($54°$): reports angle $B$, which is $24°$ larger than the requested angle.\n* Choice D ($84°$): reports the combined measure of angles $A$ and $B$ rather than angle $A$ alone.\n\n**Test Day Takeaway:** Name one angle with a variable, write every other angle in terms of it, and let the $180°$ sum finish the work.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "triangle-angle-sum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-097",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In triangle $ABC$ shown, angle $A$ measures $(4x - 5)°$, angle $B$ measures $(2x + 15)°$, and angle $C$ measures $(3x + 8)°$. What is the measure of the largest angle of the triangle?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["(4x - 5)°", "(2x + 15)°", "(3x + 8)°"], vertexLabels: ["A", "B", "C"], figureNote: true } },
    choices: [
      { id: "A", text: "$18°$" },
      { id: "B", text: "$51°$" },
      { id: "C", text: "$62°$" },
      { id: "D", text: "$67°$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice D is correct.**\n\n**The Fast Way (~50s):** $(4x - 5) + (2x + 15) + (3x + 8) = 9x + 18 = 180$, so $x = 18$ and the angles are $67°$, $51°$, and $62°$; the largest is $67°$.\n\n**The Full Solution:**\nStep 1: Set the sum of the three expressions equal to $180$: $(4x - 5) + (2x + 15) + (3x + 8) = 180$.\nStep 2: Combine like terms: $9x + 18 = 180$, so $9x = 162$ and $x = 18$.\nStep 3: Substitute back: angle $A = 4(18) - 5 = 67$, angle $B = 2(18) + 15 = 51$, and angle $C = 3(18) + 8 = 62$. The largest measure is $67°$.\n\nCheck: $67 + 51 + 62 = 180$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($18°$): reports the value of $x$ instead of an angle measure.\n* Choice B ($51°$): reports angle $B$, which is the smallest of the three, not the largest.\n* Choice C ($62°$): reports angle $C$, the middle measure; the largest coefficient of $x$ belongs to angle $A$.\n\n**Test Day Takeaway:** Solving for $x$ is only half the job — substitute back into every expression before deciding which angle the question wants.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-angle-sum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-098",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "hard",
    type: "fill-in",
    question: "In isosceles triangle $JKL$, side $\\overline{JK}$ is congruent to side $\\overline{JL}$, and the measure of angle $K$ is twice the measure of angle $J$. What is the measure, in degrees, of angle $J$?",
    correctAnswer: "36",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~50s):** Because $\\overline{JK} \\cong \\overline{JL}$, angles $K$ and $L$ are the congruent base angles, each twice angle $J$. Then $j + 2j + 2j = 180$, so $j = 36$ degrees.\n\n**The Full Solution:**\nStep 1: In a triangle, congruent sides are opposite congruent angles. Sides $\\overline{JK}$ and $\\overline{JL}$ are opposite angles $L$ and $K$, so angle $K$ and angle $L$ have equal measure.\nStep 2: Let angle $J$ measure $j$ degrees. Angle $K$ measures $2j$, and angle $L$ also measures $2j$.\nStep 3: $j + 2j + 2j = 5j = 180$, so $j = 36$ degrees.\n\n```seva-figure\n{\"type\": \"triangleWithAngles\", \"params\": {\"vertexLabels\": [\"J\", \"K\", \"L\"], \"angleLabels\": [\"36°\", \"72°\", \"72°\"], \"figureNote\": true}, \"caption\": \"Angle J is 36 degrees and each base angle is 72 degrees.\"}\n```\n\nCheck: $36 + 72 + 72 = 180$, and the two base angles are equal as required.\n\n**Common Mistakes:**\n* Treating angle $K$ as the vertex angle and angles $J$ and $L$ as the base pair, which gives $j + j + 2j = 180$ and the answer $45$.\n* Answering $72$, the measure of a base angle, instead of angle $J$.\n* Dividing $180$ by $3$ and answering $60$, which would require an equilateral triangle.\n\n**Test Day Takeaway:** In an isosceles triangle, find the congruent angles from the congruent SIDES first — they sit opposite those sides, not next to them.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-angle-sum",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 10/6: circle-in-standard-form (8 items) =====
  // 5 test occurrences. Title verbatim: 'Circle in Standard Form'.
  {
    id: "bank-geo-099",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A circle in the $xy$-plane has the equation $(x + 7)^2 + (y - 1)^2 = 144$. What is the length of a radius of this circle?",
    choices: [
      { id: "A", text: "$12$" },
      { id: "B", text: "$24$" },
      { id: "C", text: "$72$" },
      { id: "D", text: "$144$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** In $(x - h)^2 + (y - k)^2 = r^2$, the number on the right is $r^2$. Here $r^2 = 144$, so $r = 12$.\n\n**The Full Solution:**\nStep 1: The equation is already in standard form, so the right side equals the square of the radius.\nStep 2: $r^2 = 144$.\nStep 3: $r = \\sqrt{144} = 12$.\n\nCheck: the center is $(-7, 1)$, and the point $(5, 1)$ satisfies $12^2 + 0 = 144$, so it sits $12$ units from the center.\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): reports the diameter, which is twice the radius.\n* Choice C ($72$): halves $144$ instead of taking its square root.\n* Choice D ($144$): reports $r^2$ straight off the right side without taking the square root.\n\n**Test Day Takeaway:** The constant in standard form is always $r^2$, never $r$ — take the square root before answering.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-100",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "fill-in",
    question: "A circle in the $xy$-plane has the equation $(x - 8)^2 + (y + 5)^2 = 49$. What is the $y$-coordinate of the center of this circle?",
    correctAnswer: "-5",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (~15s):** Standard form is $(x - h)^2 + (y - k)^2 = r^2$. Since $(y + 5)^2 = (y - (-5))^2$, the value of $k$ is $-5$.\n\n**The Full Solution:**\nStep 1: Match the equation to $(x - h)^2 + (y - k)^2 = r^2$.\nStep 2: Rewrite the second binomial as a subtraction: $(y + 5)^2 = (y - (-5))^2$, so $k = -5$.\nStep 3: The center is $(8, -5)$, and its $y$-coordinate is $-5$.\n\nCheck: substituting $x = 8$ and $y = -5$ makes the left side $0$, which is the smallest it can be — exactly what happens at the center.\n\n**Common Mistakes:**\n* Answering $5$ by copying the number inside the parentheses without flipping its sign.\n* Answering $8$, the $x$-coordinate of the center, after solving for the wrong variable.\n* Answering $7$, the radius, instead of a coordinate.\n\n**Test Day Takeaway:** Standard form subtracts the center's coordinates, so a plus sign inside the parentheses means a negative coordinate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-101",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the endpoints of a diameter of a circle are $(-11, 1)$ and $(5, 13)$. Which of the following equations represents this circle?",
    choices: [
      { id: "A", text: "$(x + 3)^2 + (y - 7)^2 = 10$" },
      { id: "B", text: "$(x - 3)^2 + (y + 7)^2 = 100$" },
      { id: "C", text: "$(x + 3)^2 + (y - 7)^2 = 100$" },
      { id: "D", text: "$(x + 3)^2 + (y - 7)^2 = 400$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** The center is the midpoint of the diameter, $(-3, 7)$, and the radius is half the diameter's length, $\\frac{20}{2} = 10$, so the circle is $(x + 3)^2 + (y - 7)^2 = 100$.\n\n**The Full Solution:**\nStep 1: The center is the midpoint of the two endpoints: $\\left(\\frac{-11 + 5}{2}, \\frac{1 + 13}{2}\\right) = (-3, 7)$.\nStep 2: The diameter has length $\\sqrt{(5 - (-11))^2 + (13 - 1)^2} = \\sqrt{256 + 144} = \\sqrt{400} = 20$, so the radius is $10$ and $r^2 = 100$.\nStep 3: Substituting $h = -3$, $k = 7$, and $r^2 = 100$ into $(x - h)^2 + (y - k)^2 = r^2$ gives $(x + 3)^2 + (y - 7)^2 = 100$.\n\nCheck: the endpoint $(5, 13)$ satisfies the equation, since $(5 + 3)^2 + (13 - 7)^2 = 64 + 36 = 100$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x + 3)^2 + (y - 7)^2 = 10$): puts the radius $10$ on the right side without squaring it, describing a circle of radius $\\sqrt{10}$.\n* Choice B ($(x - 3)^2 + (y + 7)^2 = 100$): copies the center's coordinates with the signs they already have; standard form subtracts them, so this equation is centered at $(3, -7)$.\n* Choice D ($(x + 3)^2 + (y - 7)^2 = 400$): squares the full diameter $20$ instead of the radius $10$.\n\n**Test Day Takeaway:** Two endpoints of a diameter hand you the center as a midpoint and the radius as half a distance — compute both before writing a single parenthesis.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-102",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "A circle in the $xy$-plane has the equation $(x + 3)^2 + (y - 10)^2 = 121$. What is the difference when the radius of the circle is subtracted from the $y$-coordinate of its center?",
    correctAnswer: "-1",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $-1$.**\n\n**The Fast Way (~30s):** The center is $(-3, 10)$ and the radius is $\\sqrt{121} = 11$, so the requested difference is $10 - 11 = -1$.\n\n**The Full Solution:**\nStep 1: Match the equation to $(x - h)^2 + (y - k)^2 = r^2$. From $(y - 10)^2$, the center's $y$-coordinate is $k = 10$.\nStep 2: The right side gives $r^2 = 121$, so $r = 11$.\nStep 3: Subtract the radius from $k$: $10 - 11 = -1$.\n\nCheck: the lowest point of this circle is at $y = 10 - 11 = -1$, which is exactly the value computed.\n\n**Common Mistakes:**\n* Using $r^2 = 121$ instead of $r = 11$, which gives $10 - 121 = -111$.\n* Subtracting in the other order and answering $1$.\n* Using the $x$-coordinate $-3$ of the center, which gives $-3 - 11 = -14$.\n\n**Test Day Takeaway:** Extract $h$, $k$, and $r$ separately before combining them, and take the square root of the right side exactly once.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-103",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $(x - 6)^2 + y^2 = 81$ is a circle. What is the area of the region enclosed by this circle, in terms of $\\pi$?",
    choices: [
      { id: "A", text: "$9\\pi$" },
      { id: "B", text: "$18\\pi$" },
      { id: "C", text: "$81\\pi$" },
      { id: "D", text: "$324\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The right side is $r^2 = 81$, and the area of a circle is $\\pi r^2$, so the area is $81\\pi$.\n\n**The Full Solution:**\nStep 1: The equation is in standard form, so $r^2 = 81$ and $r = 9$.\nStep 2: The area of a circle is $A = \\pi r^2$.\nStep 3: $A = \\pi(81) = 81\\pi$ square units.\n\nCheck: the missing $(y - k)^2$ term just means $k = 0$; the center is $(6, 0)$, which does not affect the area.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9\\pi$): uses $\\pi r$ with $r = 9$, forgetting the square in the area formula.\n* Choice B ($18\\pi$): computes the circumference $2\\pi r$ instead of the area.\n* Choice D ($324\\pi$): squares the diameter $18$ rather than the radius.\n\n**Test Day Takeaway:** Standard form already hands you $r^2$, so the area is the right-hand constant times $\\pi$ — no square root needed.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-104",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, a circle is centered at $(-2, 6)$, and the point $(10, 11)$ lies on the circle. What is the radius of the circle?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~30s):** The radius is the distance from the center to any point on the circle: $\\sqrt{12^2 + 5^2} = \\sqrt{169} = 13$.\n\n**The Full Solution:**\nStep 1: The horizontal change from $(-2, 6)$ to $(10, 11)$ is $10 - (-2) = 12$, and the vertical change is $11 - 6 = 5$.\nStep 2: By the distance formula, $r = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169}$.\nStep 3: $r = 13$.\n\nCheck: $5$, $12$, $13$ is a Pythagorean triple, and the circle's equation is $(x + 2)^2 + (y - 6)^2 = 169$.\n\n**Common Mistakes:**\n* Answering $169$, which is $r^2$, without taking the square root.\n* Answering $17$ by adding the horizontal and vertical changes instead of using their squares.\n* Subtracting the coordinates in mismatched pairs, such as $10 - 6$ and $11 - (-2)$, which gives $\\sqrt{16 + 169} \\approx 13.6$.\n\n**Test Day Takeaway:** A radius is just a distance, so the distance formula — the Pythagorean theorem in disguise — finishes these in one step.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-105",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, a circle has center $(5, -2)$ and passes through the point $(-1, 6)$. Which of the following is an equation of the circle?",
    choices: [
      { id: "A", text: "$(x - 5)^2 + (y + 2)^2 = 10$" },
      { id: "B", text: "$(x - 5)^2 + (y + 2)^2 = 100$" },
      { id: "C", text: "$(x + 5)^2 + (y - 2)^2 = 10$" },
      { id: "D", text: "$(x + 5)^2 + (y - 2)^2 = 100$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** The radius squared is $(-1 - 5)^2 + (6 + 2)^2 = 36 + 64 = 100$, so the circle is $(x - 5)^2 + (y + 2)^2 = 100$.\n\n**The Full Solution:**\nStep 1: With center $(5, -2)$, the left side must be $(x - 5)^2 + (y + 2)^2$, because $y - (-2) = y + 2$.\nStep 2: The right side is $r^2$, and $r^2$ is the squared distance from the center to the given point: $(-1 - 5)^2 + (6 - (-2))^2 = (-6)^2 + 8^2 = 36 + 64 = 100$.\nStep 3: The equation is $(x - 5)^2 + (y + 2)^2 = 100$.\n\nCheck: substituting $(-1, 6)$ gives $36 + 64 = 100$, so the point does lie on this circle.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x - 5)^2 + (y + 2)^2 = 10$): uses the radius $10$ on the right side instead of $r^2 = 100$.\n* Choice C ($(x + 5)^2 + (y - 2)^2 = 10$): reverses the center's signs and leaves the radius unsquared.\n* Choice D ($(x + 5)^2 + (y - 2)^2 = 100$): squares the radius correctly but describes a circle centered at $(-5, 2)$.\n\n**Test Day Takeaway:** When only a point on the circle is given, the squared distance to the center IS the right-hand constant — there is no need to take a square root at all.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-106",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "hard",
    type: "fill-in",
    question: "A circle in the $xy$-plane has the equation $(x - 1)^2 + (y + 2)^2 = 169$. The point $(b, 10)$ lies on this circle, where $b < 0$. What is the value of $b$?",
    correctAnswer: "-4",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~45s):** Substituting $y = 10$ gives $(b - 1)^2 + 144 = 169$, so $(b - 1)^2 = 25$ and $b = 6$ or $b = -4$; the condition $b < 0$ selects $-4$.\n\n**The Full Solution:**\nStep 1: A point on the circle satisfies the equation, so substitute $x = b$ and $y = 10$: $(b - 1)^2 + (10 + 2)^2 = 169$.\nStep 2: $(10 + 2)^2 = 144$, so $(b - 1)^2 = 169 - 144 = 25$.\nStep 3: Then $b - 1 = 5$ or $b - 1 = -5$, giving $b = 6$ or $b = -4$. Since $b < 0$, the answer is $b = -4$.\n\nCheck: $(-4 - 1)^2 + (10 + 2)^2 = 25 + 144 = 169$.\n\n**Common Mistakes:**\n* Answering $6$, the positive root, which the condition $b < 0$ rules out.\n* Taking only the positive square root of $25$ and never noticing there are two intersection points at $y = 10$.\n* Using $\\sqrt{169} - \\sqrt{144} = 1$ instead of subtracting before taking a root, which gives $b = 2$.\n\n**Test Day Takeaway:** A squared binomial equal to a positive number has two solutions; the inequality in the stem is there to tell you which one to grid.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 13/1: soh-cah-toa-in-a-3-4-5-triangle (8 items) =====
  {
    id: "bank-geo-107",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The legs of the right triangle shown measure $21$ and $28$, and the hypotenuse measures $35$. What is the cosine of the angle opposite the leg of length $21$?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["28", "21", "35"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\dfrac{3}{5}$" },
      { id: "B", text: "$\\dfrac{3}{4}$" },
      { id: "C", text: "$\\dfrac{4}{5}$" },
      { id: "D", text: "$\\dfrac{4}{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** For that angle the adjacent leg is $28$ and the hypotenuse is $35$, so the cosine is $\\frac{28}{35} = \\frac{4}{5}$.\n\n**The Full Solution:**\nStep 1: Call the angle $\\theta$. The leg of length $21$ is opposite $\\theta$, so the other leg, $28$, is adjacent to $\\theta$.\nStep 2: By CAH, $\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{28}{35}$.\nStep 3: Reduce: $\\frac{28}{35} = \\frac{4}{5}$.\n\nCheck: $21$, $28$, $35$ is the $3$-$4$-$5$ triple scaled by $7$, so every ratio reduces to a $3$-$4$-$5$ ratio.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{5}$): uses the opposite leg over the hypotenuse, $\\frac{21}{35}$, which is $\\sin\\theta$.\n* Choice B ($\\frac{3}{4}$): uses opposite over adjacent, $\\frac{21}{28}$, which is $\\tan\\theta$.\n* Choice D ($\\frac{4}{3}$): inverts the tangent, giving adjacent over opposite.\n\n**Test Day Takeaway:** Mark which leg is opposite the named angle first; the remaining leg is the adjacent one, and the hypotenuse never changes roles.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "soh-cah-toa-in-a-3-4-5-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-108",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "easy",
    type: "fill-in",
    question: "The side lengths of the right triangle shown are $6$, $8$, and $10$. What is the cosine of the larger acute angle? Express your answer as a fraction.",
    diagram: { type: "rightTriangle", params: { sideLabels: ["6", "8", "10"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "3/5",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**The correct answer is $\\frac{3}{5}$.**\n\n**The Fast Way (~25s):** The larger acute angle faces the longer leg, $8$, so its adjacent leg is $6$ and its cosine is $\\frac{6}{10} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: The hypotenuse is the longest side, $10$, so the legs are $6$ and $8$.\nStep 2: In a triangle, a larger angle is opposite a longer side, so the larger acute angle is opposite the leg of length $8$; the leg adjacent to it is $6$.\nStep 3: $\\cos = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{6}{10} = \\frac{3}{5}$.\n\nCheck: $6$, $8$, $10$ is the $3$-$4$-$5$ triple doubled, and $\\left(\\frac{3}{5}\\right)^2 + \\left(\\frac{4}{5}\\right)^2 = 1$.\n\n**Common Mistakes:**\n* Answering $\\frac{4}{5}$ by taking the cosine of the smaller acute angle instead.\n* Answering $\\frac{3}{4}$ by dividing the two legs, which produces a tangent, not a cosine.\n* Answering $\\frac{6}{10}$ unreduced; the grid accepts $3/5$, so reduce before entering.\n\n**Test Day Takeaway:** Bigger side, bigger opposite angle — that single fact tells you which acute angle a question means by larger or smaller.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "soh-cah-toa-in-a-3-4-5-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-109",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In right triangle $ABC$ shown, angle $C$ is the right angle, $AC = 24$, and $BC = 18$. What is the value of $\\sin B$?",
    diagram: { type: "rightTriangle", params: { labels: ["A", "C", "B"], sideLabels: ["24", "18", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\dfrac{3}{5}$" },
      { id: "B", text: "$\\dfrac{4}{5}$" },
      { id: "C", text: "$\\dfrac{5}{4}$" },
      { id: "D", text: "$\\dfrac{4}{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The hypotenuse is $AB = \\sqrt{24^2 + 18^2} = 30$, and the leg opposite $B$ is $AC = 24$, so $\\sin B = \\frac{24}{30} = \\frac{4}{5}$.\n\n**The Full Solution:**\nStep 1: With the right angle at $C$, the legs are $\\overline{AC}$ and $\\overline{BC}$ and the hypotenuse is $\\overline{AB}$.\nStep 2: $AB = \\sqrt{24^2 + 18^2} = \\sqrt{576 + 324} = \\sqrt{900} = 30$.\nStep 3: The leg opposite angle $B$ is $\\overline{AC}$, so $\\sin B = \\frac{24}{30} = \\frac{4}{5}$.\n\nCheck: $18$, $24$, $30$ is the $3$-$4$-$5$ triple scaled by $6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{5}$): uses $\\frac{18}{30}$, the leg adjacent to $B$ over the hypotenuse, which is $\\cos B$.\n* Choice C ($\\frac{5}{4}$): inverts the correct ratio; a sine of an acute angle is always less than $1$.\n* Choice D ($\\frac{4}{3}$): divides the two legs, $\\frac{24}{18}$, which gives $\\tan B$.\n\n**Test Day Takeaway:** Find the hypotenuse before writing any sine or cosine — with a $3$-$4$-$5$ family it is one quick multiplication.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "soh-cah-toa-in-a-3-4-5-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-110",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "fill-in",
    question: "In right triangle $PQR$ shown, angle $Q$ is the right angle, $PQ = 45$, and $QR = 60$. What is the value of $\\tan P$? Express your answer as a fraction.",
    diagram: { type: "rightTriangle", params: { labels: ["P", "Q", "R"], sideLabels: ["45", "60", ""], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "4/3",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**The correct answer is $\\frac{4}{3}$.**\n\n**The Fast Way (~25s):** Tangent uses only the legs: opposite angle $P$ is $QR = 60$ and adjacent is $PQ = 45$, so $\\tan P = \\frac{60}{45} = \\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $Q$, so $\\overline{PQ}$ and $\\overline{QR}$ are the legs.\nStep 2: Relative to angle $P$, the opposite leg is $\\overline{QR} = 60$ and the adjacent leg is $\\overline{PQ} = 45$.\nStep 3: $\\tan P = \\frac{60}{45} = \\frac{4}{3}$.\n\nCheck: the hypotenuse is $\\sqrt{45^2 + 60^2} = \\sqrt{5{,}625} = 75$, so the sides are the $3$-$4$-$5$ triple scaled by $15$.\n\n**Common Mistakes:**\n* Answering $\\frac{3}{4}$ by dividing adjacent by opposite, which gives the tangent of the other acute angle.\n* Answering $\\frac{4}{5}$ by computing $\\frac{60}{75}$, the sine of angle $P$.\n* Computing the hypotenuse and using it in the tangent, which the tangent ratio never involves.\n\n**Test Day Takeaway:** If a right-triangle question asks only for a tangent, you never need the hypotenuse — stop after the two legs.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "soh-cah-toa-in-a-3-4-5-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-111",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In a right triangle, one of the acute angles is $\\theta$, and $\\cos\\theta = \\dfrac{4}{5}$. What is the value of $\\tan\\theta$?",
    choices: [
      { id: "A", text: "$\\dfrac{3}{5}$" },
      { id: "B", text: "$\\dfrac{3}{4}$" },
      { id: "C", text: "$\\dfrac{5}{4}$" },
      { id: "D", text: "$\\dfrac{4}{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $\\cos\\theta = \\frac{4}{5}$ makes the adjacent leg $4$ and the hypotenuse $5$, so the opposite leg is $3$ and $\\tan\\theta = \\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: Read the cosine as side lengths: adjacent $= 4$ and hypotenuse $= 5$.\nStep 2: The opposite leg is $\\sqrt{5^2 - 4^2} = \\sqrt{9} = 3$, so the triangle is a $3$-$4$-$5$ right triangle.\nStep 3: $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{3}{4}$.\n\n```seva-figure\n{\"type\": \"rightTriangle\", \"params\": {\"vertices\": [[0, 0], [4, 0], [4, 3]], \"sideLabels\": [\"4\", \"3\", \"5\"], \"rightAngleVertex\": 1}, \"caption\": \"Reading cos = 4/5 as sides gives the 3-4-5 right triangle.\"}\n```\n\nCheck: $\\sin\\theta = \\frac{3}{5}$, and $\\frac{\\sin\\theta}{\\cos\\theta} = \\frac{3/5}{4/5} = \\frac{3}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{5}$): stops at $\\sin\\theta$, the opposite leg over the hypotenuse.\n* Choice C ($\\frac{5}{4}$): inverts the given cosine, giving $\\sec\\theta$.\n* Choice D ($\\frac{4}{3}$): inverts the tangent, giving adjacent over opposite.\n\n**Test Day Takeaway:** Turn a given ratio into two side lengths, recover the third with the Pythagorean theorem, and read off whichever ratio is asked.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "soh-cah-toa-in-a-3-4-5-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-112",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "fill-in",
    question: "A right triangle has side lengths $15$, $20$, and $25$, as shown. What is the cosine of the angle opposite the side of length $15$? Express your answer as a fraction.",
    diagram: { type: "rightTriangle", params: { sideLabels: ["20", "15", "25"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "4/5",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**The correct answer is $\\frac{4}{5}$.**\n\n**The Fast Way (~25s):** The hypotenuse is $25$, so the angle opposite $15$ has adjacent leg $20$, and its cosine is $\\frac{20}{25} = \\frac{4}{5}$.\n\n**The Full Solution:**\nStep 1: The longest side, $25$, is the hypotenuse, and $15$ and $20$ are the legs.\nStep 2: The angle opposite the leg of length $15$ has the other leg, $20$, adjacent to it.\nStep 3: $\\cos = \\frac{20}{25} = \\frac{4}{5}$.\n\nCheck: $15^2 + 20^2 = 225 + 400 = 625 = 25^2$, and $15$, $20$, $25$ is the $3$-$4$-$5$ triple scaled by $5$.\n\n**Common Mistakes:**\n* Answering $\\frac{3}{5}$ by using $\\frac{15}{25}$, which is the sine of that angle.\n* Answering $\\frac{3}{4}$ by dividing the legs, which produces a tangent.\n* Treating $20$ as the hypotenuse and answering $\\frac{15}{20}$; the hypotenuse is always the longest side.\n\n**Test Day Takeaway:** Identify the hypotenuse before choosing a ratio; in a scaled $3$-$4$-$5$ triangle every answer reduces to fifths or fourths.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "soh-cah-toa-in-a-3-4-5-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-113",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In right triangle $XYZ$, angle $Y$ is a right angle. If $\\tan X = \\dfrac{4}{3}$, what is the value of $(\\sin X)(\\cos X)$?",
    choices: [
      { id: "A", text: "$\\dfrac{12}{25}$" },
      { id: "B", text: "$1$" },
      { id: "C", text: "$\\dfrac{7}{5}$" },
      { id: "D", text: "$\\dfrac{12}{5}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** $\\tan X = \\frac{4}{3}$ gives a $3$-$4$-$5$ triangle, so $\\sin X = \\frac{4}{5}$, $\\cos X = \\frac{3}{5}$, and their product is $\\frac{12}{25}$.\n\n**The Full Solution:**\nStep 1: $\\tan X = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{4}{3}$, so take the opposite leg as $4k$ and the adjacent leg as $3k$.\nStep 2: The hypotenuse is $\\sqrt{(4k)^2 + (3k)^2} = 5k$, so $\\sin X = \\frac{4k}{5k} = \\frac{4}{5}$ and $\\cos X = \\frac{3k}{5k} = \\frac{3}{5}$.\nStep 3: $(\\sin X)(\\cos X) = \\frac{4}{5} \\cdot \\frac{3}{5} = \\frac{12}{25}$.\n\nCheck: $\\frac{\\sin X}{\\cos X} = \\frac{4/5}{3/5} = \\frac{4}{3}$, which matches the given tangent.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): applies $\\sin^2 X + \\cos^2 X = 1$, an identity about squares and a sum, not about a product.\n* Choice C ($\\frac{7}{5}$): adds the two ratios, $\\frac{4}{5} + \\frac{3}{5}$, instead of multiplying them.\n* Choice D ($\\frac{12}{5}$): multiplies the numerators but keeps a single denominator of $5$.\n\n**Test Day Takeaway:** Convert a tangent into all three side lengths first; then every requested combination of ratios is ordinary fraction arithmetic.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "soh-cah-toa-in-a-3-4-5-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-114",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "hard",
    type: "fill-in",
    question: "A right triangle has an acute angle $\\alpha$ with $\\cos\\alpha = \\dfrac{3}{5}$. What is the value of $\\tan(90° - \\alpha)$? Express your answer as a fraction.",
    correctAnswer: "3/4",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**The correct answer is $\\frac{3}{4}$.**\n\n**The Fast Way (~45s):** $90° - \\alpha$ is the other acute angle, which swaps opposite and adjacent, so $\\tan(90° - \\alpha) = \\frac{1}{\\tan\\alpha} = \\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: $\\cos\\alpha = \\frac{3}{5}$ makes the leg adjacent to $\\alpha$ equal to $3$ and the hypotenuse equal to $5$; the remaining leg is $\\sqrt{25 - 9} = 4$.\nStep 2: The two acute angles of a right triangle sum to $90°$, so the other acute angle measures $90° - \\alpha$. The leg adjacent to $\\alpha$ is opposite $90° - \\alpha$, and the leg opposite $\\alpha$ is adjacent to it.\nStep 3: For $90° - \\alpha$ the opposite leg is $3$ and the adjacent leg is $4$, so $\\tan(90° - \\alpha) = \\frac{3}{4}$.\n\nCheck: $\\tan\\alpha = \\frac{4}{3}$, and $\\frac{3}{4}$ is its reciprocal, as complementary tangents must be.\n\n**Common Mistakes:**\n* Answering $\\frac{4}{3}$, which is $\\tan\\alpha$ itself rather than the tangent of its complement.\n* Answering $\\frac{4}{5}$, which is $\\sin\\alpha$ (equivalently $\\cos(90° - \\alpha)$), not a tangent.\n* Subtracting the ratio from $90$ instead of the angle, which is not a legal operation on trigonometric values.\n\n**Test Day Takeaway:** Complementary angles trade sine for cosine and turn a tangent into its reciprocal — no calculator needed.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "soh-cah-toa-in-a-3-4-5-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 13/2: rectangle-area (8 items) =====
  {
    id: "bank-geo-115",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A rectangular tabletop is $14$ inches wide and $22$ inches long. What is the area, in square inches, of the tabletop?",
    choices: [
      { id: "A", text: "$36$" },
      { id: "B", text: "$72$" },
      { id: "C", text: "$308$" },
      { id: "D", text: "$616$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The area of a rectangle is length times width: $22 \\cdot 14 = 308$ square inches.\n\n**The Full Solution:**\nStep 1: For a rectangle, $A = \\ell w$.\nStep 2: Substitute $\\ell = 22$ and $w = 14$: $A = 22 \\cdot 14$.\nStep 3: $22 \\cdot 14 = 308$ square inches.\n\nCheck: $22 \\cdot 14 = 22 \\cdot 10 + 22 \\cdot 4 = 220 + 88 = 308$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): adds the two dimensions instead of multiplying them.\n* Choice B ($72$): computes the perimeter, $2(22 + 14)$.\n* Choice D ($616$): doubles the area, as if the formula were $2\\ell w$.\n\n**Test Day Takeaway:** Area multiplies and comes out in square units; perimeter adds and comes out in linear units — the unit in the question tells you which.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-116",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "fill-in",
    question: "A rectangular shipping label has an area of $91$ square centimeters and a width of $7$ centimeters. What is the length, in centimeters, of the label?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~10s):** $\\ell = \\frac{A}{w} = \\frac{91}{7} = 13$ centimeters.\n\n**The Full Solution:**\nStep 1: Start from $A = \\ell w$ with $A = 91$ and $w = 7$.\nStep 2: Divide both sides by the width: $\\ell = \\frac{91}{7}$.\nStep 3: $\\ell = 13$ centimeters.\n\nCheck: $13 \\cdot 7 = 91$ square centimeters.\n\n**Common Mistakes:**\n* Answering $84$ by subtracting the width from the area, which mixes square units with linear units.\n* Answering $637$ by multiplying $91$ by $7$ instead of dividing.\n* Answering $38.5$ by treating $91$ as a perimeter, using $\\frac{91}{2} - 7$.\n\n**Test Day Takeaway:** An area divided by one side always returns the other side, and the units confirm it: square centimeters over centimeters is centimeters.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-117",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A rectangular photograph has a perimeter of $54$ inches and a length of $17$ inches. What is the area, in square inches, of the photograph?",
    choices: [
      { id: "A", text: "$170$" },
      { id: "B", text: "$340$" },
      { id: "C", text: "$459$" },
      { id: "D", text: "$629$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Half the perimeter is $27$, so the width is $27 - 17 = 10$ and the area is $17 \\cdot 10 = 170$ square inches.\n\n**The Full Solution:**\nStep 1: The perimeter of a rectangle is $P = 2(\\ell + w)$, so $54 = 2(17 + w)$.\nStep 2: Divide by $2$: $27 = 17 + w$, so $w = 10$ inches.\nStep 3: The area is $A = \\ell w = 17 \\cdot 10 = 170$ square inches.\n\nCheck: $2(17 + 10) = 54$ inches, matching the given perimeter.\n\n**Why the wrong answers are tempting:**\n* Choice B ($340$): uses $w = 54 - 2(17) = 20$, forgetting to divide the leftover perimeter by $2$.\n* Choice C ($459$): uses half the perimeter, $27$, as the width instead of subtracting the length from it.\n* Choice D ($629$): uses $54 - 17 = 37$ as the width, subtracting the length from the whole perimeter.\n\n**Test Day Takeaway:** Halve the perimeter first — that single number is $\\ell + w$, and the missing side is one subtraction away.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-118",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "fill-in",
    question: "The length of a rectangle is $4$ times its width, and the area of the rectangle is $324$ square units. What is the width of the rectangle?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~30s):** With width $w$ and length $4w$, the area is $4w^2 = 324$, so $w^2 = 81$ and $w = 9$.\n\n**The Full Solution:**\nStep 1: Let the width be $w$; then the length is $4w$.\nStep 2: The area is $A = (4w)(w) = 4w^2$, so $4w^2 = 324$.\nStep 3: $w^2 = 81$, and since a width is positive, $w = 9$.\n\nCheck: the length is $36$, and $36 \\cdot 9 = 324$ square units.\n\n**Common Mistakes:**\n* Answering $36$, the length, instead of the width.\n* Answering $81$ by stopping at $w^2$ without taking the square root.\n* Dividing $324$ by $4$ and then by $2$ to get $40.5$, treating $w^2$ as $2w$.\n\n**Test Day Takeaway:** Name the smaller quantity with the variable; the area then becomes a single-variable equation instead of a system.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-119",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A rectangular rug has an area of $126$ square feet and a width of $9$ feet. What is the perimeter, in feet, of the rug?",
    choices: [
      { id: "A", text: "$23$" },
      { id: "B", text: "$46$" },
      { id: "C", text: "$92$" },
      { id: "D", text: "$252$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The length is $\\frac{126}{9} = 14$ feet, so the perimeter is $2(14 + 9) = 46$ feet.\n\n**The Full Solution:**\nStep 1: From $A = \\ell w$, the length is $\\ell = \\frac{126}{9} = 14$ feet.\nStep 2: The perimeter of a rectangle is $P = 2(\\ell + w)$.\nStep 3: $P = 2(14 + 9) = 2(23) = 46$ feet.\n\nCheck: $14 \\cdot 9 = 126$ square feet, matching the given area.\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): stops at $\\ell + w$ and forgets that a rectangle has two of each side.\n* Choice C ($92$): doubles the perimeter a second time, using $4(\\ell + w)$.\n* Choice D ($252$): uses $126 - 9 = 117$ as the length instead of dividing, then doubles the sum.\n\n**Test Day Takeaway:** Recover the missing side by dividing the area, then apply the perimeter formula once — exactly one factor of $2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-120",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "fill-in",
    question: "The length of a rectangular patio is $6$ meters less than twice its width. If the area of the patio is $80$ square meters, what is the width, in meters, of the patio?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~45s):** With width $w$ and length $2w - 6$, the area gives $2w^2 - 6w - 80 = 0$, or $w^2 - 3w - 40 = 0$, which factors to $(w - 8)(w + 5) = 0$, so $w = 8$ meters.\n\n**The Full Solution:**\nStep 1: Let the width be $w$ meters; then the length is $2w - 6$ meters.\nStep 2: The area gives $w(2w - 6) = 80$, so $2w^2 - 6w - 80 = 0$, and dividing by $2$ gives $w^2 - 3w - 40 = 0$.\nStep 3: Factor: $(w - 8)(w + 5) = 0$, so $w = 8$ or $w = -5$. A width is positive, so $w = 8$ meters.\n\nCheck: the length is $2(8) - 6 = 10$ meters, and $8 \\cdot 10 = 80$ square meters.\n\n**Common Mistakes:**\n* Answering $10$, the length, instead of the width.\n* Answering $5$ by taking the rejected root without the negative sign.\n* Setting up a perimeter equation, $w + (2w - 6) = 80$, which gives the non-integer width $\\frac{86}{3} \\approx 28.7$.\n\n**Test Day Takeaway:** Less than reverses the order of subtraction: twice the width less $6$ is $2w - 6$, never $6 - 2w$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-121",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The length of a rectangle is increased by $30\\%$, and the width of the rectangle is decreased by $p\\%$. The area of the resulting rectangle is $4\\%$ greater than the area of the original rectangle. What is the value of $p$?",
    choices: [
      // distractor: reports the percent change in area as the percent change in width
      { id: "A", text: "$4$" },
      { id: "B", text: "$20$" },
      // distractor: subtracts the percents, 30 - 4, instead of dividing the multipliers
      { id: "C", text: "$26$" },
      // distractor: reports the surviving multiplier 0.80 as a percent decrease
      { id: "D", text: "$80$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Area scales by the product of the two multipliers: $1.30 \\times m = 1.04$, so $m = 0.80$ and the width drops by $20\\%$.\n\n**The Full Solution:**\nStep 1: Let the original length be $L$ and the original width be $W$, so the original area is $LW$. The new length is $1.30L$ and the new width is $mW$, where $m$ is the width multiplier.\nStep 2: The new area is $(1.30L)(mW) = 1.30m \\cdot LW$, and this equals $1.04LW$, so $1.30m = 1.04$ and $m = \\frac{1.04}{1.30} = 0.80$.\nStep 3: A multiplier of $0.80$ is a decrease of $1 - 0.80 = 0.20$, or $20\\%$, so $p = 20$. Check: $1.30 \\times 0.80 = 1.04$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): copies the $4\\%$ change in area into the answer, but the area change is the result of the two side changes, not the width change itself.\n* Choice C ($26$): subtracts the percents, $30 - 4 = 26$, treating percent changes as additive when area multiplies them.\n* Choice D ($80$): reports the multiplier $0.80$ as if it were the percent decrease; $0.80$ means $80\\%$ of the original, a $20\\%$ decrease.\n\n**Test Day Takeaway:** Percent changes on a product multiply. Convert each change to a multiplier, set the product equal to the target multiplier, and solve.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-122",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, triangle $ABC$ has vertices $A(0, 0)$ and $B(0, 10)$. Vertex $C$ lies in the first quadrant on the line $y = 2x + 5$. If the area of triangle $ABC$ is $20$ square units, what is the $y$-coordinate of $C$?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: Triangle Area with a Line Constraint**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~30s):** Side $AB$ lies on the $y$-axis with length $10$, so the height is the $x$-coordinate of $C$: $\\frac{1}{2}(10)x = 20$ gives $x = 4$, and $y = 2(4) + 5 = 13$.\n\n**The Full Solution:**\nStep 1: $A(0, 0)$ and $B(0, 10)$ both lie on the $y$-axis, so segment $AB$ is vertical with length $10$. Take $AB$ as the base.\nStep 2: The height is the perpendicular distance from $C$ to the $y$-axis, which is the $x$-coordinate of $C$. So $\\frac{1}{2}(10)(x) = 20$, giving $5x = 20$ and $x = 4$.\nStep 3: Because $C$ lies on $y = 2x + 5$, its $y$-coordinate is $2(4) + 5 = 13$. Check: $C(4, 13)$ is in the first quadrant and the area is $\\frac{1}{2}(10)(4) = 20$. $\\checkmark$\n\n**Common Mistakes:**\n* Using the $y$-coordinate of $C$ as the height. That gives $\\frac{1}{2}(10)y = 20$, so $y = 4$ - but $4$ is a horizontal distance here, not a vertical one.\n* Forgetting the factor $\\frac{1}{2}$: $10x = 20$ gives $x = 2$ and the answer $2(2) + 5 = 9$.\n* Stopping at $x = 4$ and gridding the $x$-coordinate instead of the requested $y$-coordinate.\n\n**Test Day Takeaway:** When a triangle has a side on an axis, that side is the base and the other vertex's opposite coordinate is the height. Solve for the coordinate first, then answer the question actually asked.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-123",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The figure shows right triangle $DEF$, in which angle $E$ is a right angle, $DE = 16$, and $EF = 12$. What is the length of $DF$?",
    diagram: { type: "rightTriangle", params: { labels: ["D", "E", "F"], sideLabels: ["16", "12", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: averages the two legs instead of using the Pythagorean theorem
      { id: "A", text: "$14$" },
      { id: "B", text: "$20$" },
      // distractor: adds the legs, treating the hypotenuse as the sum of the other sides
      { id: "C", text: "$28$" },
      // distractor: stops at the square of the hypotenuse
      { id: "D", text: "$400$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $12$ and $16$ are $4$ times $3$ and $4$, so $DF = 4 \\times 5 = 20$.\n\n**The Full Solution:**\nStep 1: Angle $E$ is the right angle, so $DE$ and $EF$ are the legs and $DF$ is the hypotenuse: $DE^2 + EF^2 = DF^2$.\nStep 2: $16^2 + 12^2 = 256 + 144 = 400$, so $DF^2 = 400$.\nStep 3: $DF = \\sqrt{400} = 20$. Check: $12$-$16$-$20$ is the $3$-$4$-$5$ triple scaled by $4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): averages the two legs, $\\frac{12 + 16}{2}$, which ignores the theorem and lands below the longer leg.\n* Choice C ($28$): adds the legs, $12 + 16$; the hypotenuse is always shorter than the sum of the legs.\n* Choice D ($400$): stops at $DF^2$ without taking the square root.\n\n**Test Day Takeaway:** The side opposite the right angle is the hypotenuse, whatever the vertices are called. Legs in the ratio $3 : 4$ make the hypotenuse $5$ parts long.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-theorem-3-4-5-family",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-124",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "easy",
    type: "fill-in",
    question: "A guy wire runs from the top of a vertical utility pole to a point on level ground $18$ feet from the base of the pole. The pole is $24$ feet tall. What is the length, in feet, of the guy wire?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["18", "24", ""], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "30",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~10s):** The legs $18$ and $24$ are $6$ times $3$ and $4$, so the wire is $6 \\times 5 = 30$ feet.\n\n**The Full Solution:**\nStep 1: The pole, the ground, and the wire form a right triangle with the right angle at the base of the pole. The wire is the hypotenuse.\nStep 2: $18^2 + 24^2 = 324 + 576 = 900$.\nStep 3: The wire has length $\\sqrt{900} = 30$ feet. Check: $18$-$24$-$30$ is $3$-$4$-$5$ scaled by $6$. $\\checkmark$\n\n**Common Mistakes:**\n* Subtracting instead of squaring: $24 - 18 = 6$, which is far shorter than either leg and cannot be a hypotenuse.\n* Adding the legs: $18 + 24 = 42$, which overshoots because the hypotenuse is always less than the sum of the legs.\n* Stopping at $900$, the value of the square of the wire's length, without taking the square root.\n\n**Test Day Takeaway:** A vertical object and its distance along the ground are the two legs; the slanted wire or ladder is always the hypotenuse.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-theorem-3-4-5-family",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-125",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the right triangle shown, the hypotenuse has a length of $50$ centimeters and one leg has a length of $40$ centimeters. What is the length, in centimeters, of the other leg?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["40", "", "50"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the side lengths instead of the squares
      { id: "A", text: "$10$" },
      { id: "B", text: "$30$" },
      // distractor: averages the hypotenuse and the known leg
      { id: "C", text: "$45$" },
      // distractor: stops at the square of the missing leg
      { id: "D", text: "$900$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $40$ and $50$ are $10$ times $4$ and $5$, so the missing leg is $10 \\times 3 = 30$ centimeters.\n\n**The Full Solution:**\nStep 1: With legs $a$ and $40$ and hypotenuse $50$, the Pythagorean theorem gives $a^2 + 40^2 = 50^2$.\nStep 2: $a^2 = 2{,}500 - 1{,}600 = 900$.\nStep 3: $a = \\sqrt{900} = 30$ centimeters. Check: $30^2 + 40^2 = 900 + 1{,}600 = 2{,}500 = 50^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): subtracts the sides directly, $50 - 40$, instead of subtracting their squares.\n* Choice C ($45$): averages $40$ and $50$, a guess that ignores the theorem.\n* Choice D ($900$): reports $a^2$ rather than $a$.\n\n**Test Day Takeaway:** When the hypotenuse is known, subtract the squares. Squaring first and subtracting last is what separates $30$ from the tempting $10$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-theorem-3-4-5-family",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-126",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "fill-in",
    question: "A rectangular photograph measures $9$ centimeters by $12$ centimeters. What is the length, in centimeters, of a diagonal of this photograph?",
    correctAnswer: "15",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~10s):** A diagonal splits the rectangle into right triangles with legs $9$ and $12$, a $3$-$4$-$5$ triple scaled by $3$, so the diagonal is $15$.\n\n**The Full Solution:**\nStep 1: A diagonal of a rectangle is the hypotenuse of a right triangle whose legs are the length and the width.\nStep 2: $9^2 + 12^2 = 81 + 144 = 225$.\nStep 3: The diagonal is $\\sqrt{225} = 15$ centimeters. Check: $15$ is longer than either side but shorter than $9 + 12 = 21$. $\\checkmark$\n\n**Common Mistakes:**\n* Adding the sides: $9 + 12 = 21$, which is the path along two edges, not the straight diagonal.\n* Computing the area, $9 \\times 12 = 108$, instead of a length.\n* Stopping at $225$ without taking the square root.\n\n**Test Day Takeaway:** Every rectangle hides two right triangles. The diagonal is always the hypotenuse of the length-width pair.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-theorem-3-4-5-family",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-127",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The side lengths of a right triangle are in the ratio $3 : 4 : 5$, and the perimeter of the triangle is $84$. What is the length of the longest side of the triangle?",
    choices: [
      // distractor: reports the scale factor instead of a side length
      { id: "A", text: "$7$" },
      // distractor: gives the shortest side rather than the longest
      { id: "B", text: "$21$" },
      // distractor: gives the middle side rather than the longest
      { id: "C", text: "$28$" },
      { id: "D", text: "$35$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The ratio parts total $12$, so each part is $\\frac{84}{12} = 7$ and the longest side is $5(7) = 35$.\n\n**The Full Solution:**\nStep 1: Write the sides as $3k$, $4k$, and $5k$ for some positive constant $k$.\nStep 2: The perimeter gives $3k + 4k + 5k = 12k = 84$, so $k = 7$.\nStep 3: The longest side is $5k = 5(7) = 35$. Check: the sides are $21$, $28$, and $35$, and $21 + 28 + 35 = 84$, with $21^2 + 28^2 = 1{,}225 = 35^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): reports $k$, the value of one ratio part, instead of $5k$.\n* Choice B ($21$): gives $3k$, the shortest side.\n* Choice C ($28$): gives $4k$, the middle side.\n\n**Test Day Takeaway:** Turn a ratio into $3k$, $4k$, $5k$, solve for $k$ from the given total, then read off the side the question actually asks for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-theorem-3-4-5-family",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-128",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "fill-in",
    question: "In a right triangle, the lengths of the two legs are in the ratio $3$ to $4$, and the hypotenuse has a length of $45$. What is the length of the longer leg?",
    correctAnswer: "36",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~15s):** Legs in the ratio $3 : 4$ force a $3$-$4$-$5$ triangle, so $5k = 45$ gives $k = 9$ and the longer leg is $4(9) = 36$.\n\n**The Full Solution:**\nStep 1: Write the legs as $3k$ and $4k$. Then $(3k)^2 + (4k)^2 = 9k^2 + 16k^2 = 25k^2$, so the hypotenuse is $5k$.\nStep 2: $5k = 45$, so $k = 9$.\nStep 3: The longer leg is $4k = 36$. Check: $27^2 + 36^2 = 729 + 1{,}296 = 2{,}025 = 45^2$. $\\checkmark$\n\n**Common Mistakes:**\n* Reading the ratio as $3 : 4$ for a leg and the hypotenuse, giving $4k = 45$ and a non-integer $k = 11.25$.\n* Reporting the shorter leg $3k = 27$ instead of the longer one.\n* Splitting the hypotenuse in the ratio $3 : 4$, giving $\\frac{4}{7}(45) \\approx 25.7$, which ignores the Pythagorean relationship.\n\n**Test Day Takeaway:** Legs in the ratio $3 : 4$ always make the hypotenuse $5$ parts. Solve for one part, then scale to the side requested.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-theorem-3-4-5-family",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-129",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the right triangle shown, the legs have lengths $x$ and $x + 3$, and the hypotenuse has length $x + 6$, where $x > 0$. What is the value of $x$?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["x + 3", "x", "x + 6"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: sets the sum of the legs equal to the hypotenuse instead of squaring
      { id: "A", text: "$3$" },
      { id: "B", text: "$9$" },
      // distractor: reports the longer leg x + 3 instead of x
      { id: "C", text: "$12$" },
      // distractor: reports the hypotenuse x + 6 instead of x
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $x^2 + (x + 3)^2 = (x + 6)^2$ collapses to $x^2 - 6x - 27 = 0$, so $(x - 9)(x + 3) = 0$ and $x = 9$.\n\n**The Full Solution:**\nStep 1: Apply the Pythagorean theorem to the two legs and the hypotenuse: $x^2 + (x + 3)^2 = (x + 6)^2$.\nStep 2: Expand both sides: $x^2 + x^2 + 6x + 9 = x^2 + 12x + 36$, which simplifies to $x^2 - 6x - 27 = 0$.\nStep 3: Factor: $(x - 9)(x + 3) = 0$, so $x = 9$ or $x = -3$. A length must be positive, so $x = 9$. Check: the sides are $9$, $12$, $15$, and $81 + 144 = 225$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): comes from $x + (x + 3) = x + 6$, adding the legs instead of adding their squares.\n* Choice C ($12$): this is $x + 3$, the longer leg, not the value of $x$.\n* Choice D ($15$): this is $x + 6$, the hypotenuse, not the value of $x$.\n\n**Test Day Takeaway:** When all three sides are expressions in one variable, square them; the $x^2$ terms cancel and a linear or simple quadratic equation is left.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-theorem-3-4-5-family",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-130",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "hard",
    type: "fill-in",
    question: "The two legs of a right triangle have lengths in the ratio $5$ to $12$, and the area of the triangle is $750$ square inches. What is the length, in inches, of the hypotenuse?",
    correctAnswer: "65",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is $65$.**\n\n**The Fast Way (~30s):** With legs $5k$ and $12k$, the area is $30k^2 = 750$, so $k = 5$ and the hypotenuse is $13(5) = 65$.\n\n**The Full Solution:**\nStep 1: Write the legs as $5k$ and $12k$. The area of a right triangle is half the product of its legs: $\\frac{1}{2}(5k)(12k) = 30k^2$.\nStep 2: $30k^2 = 750$ gives $k^2 = 25$ and $k = 5$, so the legs are $25$ and $60$.\nStep 3: Legs in the ratio $5 : 12$ give a hypotenuse of $13k = 65$. Check: $25^2 + 60^2 = 625 + 3{,}600 = 4{,}225 = 65^2$. $\\checkmark$\n\n**Common Mistakes:**\n* Forgetting the factor $\\frac{1}{2}$: $60k^2 = 750$ gives $k \\approx 3.54$, a non-integer that signals the halving was skipped.\n* Adding the legs, $25 + 60 = 85$, instead of using the Pythagorean theorem.\n* Gridding a leg ($60$) or the scale factor ($5$) instead of the hypotenuse.\n\n**Test Day Takeaway:** Ratio plus area is a two-step: build the sides as multiples of $k$, use the area to pin $k$, then apply the triple.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-theorem-3-4-5-family",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 13/4: distance-from-center-as-radius (8 items) =====
  {
    id: "bank-geo-131",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the point $(-20, 21)$ lies on a circle whose center is the origin. What is the length of a radius of this circle?",
    choices: [
      // distractor: subtracts the coordinates instead of combining their squares
      { id: "A", text: "$1$" },
      // distractor: averages the two coordinates
      { id: "B", text: "$20.5$" },
      { id: "C", text: "$29$" },
      // distractor: adds the coordinates, measuring the path along the axes
      { id: "D", text: "$41$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** A radius reaches from the origin to the point, so its length is $\\sqrt{400 + 441} = \\sqrt{841} = 29$.\n\n**The Full Solution:**\nStep 1: Every radius runs from the center to a point on the circle, so its length is the distance from $(0, 0)$ to $(-20, 21)$.\nStep 2: $(-20)^2 + 21^2 = 400 + 441 = 841$.\nStep 3: The radius is $\\sqrt{841} = 29$. Check: $20$-$21$-$29$ satisfies $400 + 441 = 841$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): subtracts $21 - 20$, as though the two displacements lay along the same line.\n* Choice B ($20.5$): averages $20$ and $21$, which has no geometric meaning for a distance.\n* Choice D ($41$): adds $20 + 21$, the distance walked along the two axes rather than the straight-line distance.\n\n**Test Day Takeaway:** A radius is a distance. Square each displacement, add, then take the square root - never add or subtract the displacements themselves.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-132",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "fill-in",
    question: "In the $xy$-plane, a circle has its center at $(5, -4)$ and passes through the point $(5, 3)$. What is the radius of the circle?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** Both points share the $x$-coordinate $5$, so the radius is just the vertical gap: $3 - (-4) = 7$.\n\n**The Full Solution:**\nStep 1: The radius is the distance from the center to a point on the circle: $r = \\sqrt{(5 - 5)^2 + (3 - (-4))^2}$.\nStep 2: The horizontal difference is $0$ and the vertical difference is $3 - (-4) = 7$, so $r = \\sqrt{0 + 49}$.\nStep 3: $r = \\sqrt{49} = 7$. Check: moving $7$ units up from $(5, -4)$ lands exactly on $(5, 3)$. $\\checkmark$\n\n**Common Mistakes:**\n* Subtracting the coordinates as $3 - 4 = -1$, dropping the negative sign on the $y$-coordinate of the center.\n* Adding the $y$-coordinates, $3 + 4 = 7$ by luck here but wrong in general - the radius is a difference, not a sum.\n* Reporting the diameter, $14$, instead of the radius.\n\n**Test Day Takeaway:** When two points share a coordinate, the distance is a single subtraction. Watch the sign: subtracting a negative adds.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-133",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, a circle has its center at $(1, -3)$, and the point $(9, 3)$ lies on the circle. What is the circumference of the circle, in terms of $\\pi$?",
    choices: [
      // distractor: multiplies pi by the radius instead of by the diameter
      { id: "A", text: "$10\\pi$" },
      { id: "B", text: "$20\\pi$" },
      // distractor: computes the area instead of the circumference
      { id: "C", text: "$100\\pi$" },
      // distractor: doubles the area instead of doubling the radius
      { id: "D", text: "$200\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The displacements $8$ and $6$ give $r = 10$, so the circumference is $2\\pi(10) = 20\\pi$.\n\n**The Full Solution:**\nStep 1: The radius is the distance from the center to the given point: $r = \\sqrt{(9 - 1)^2 + (3 - (-3))^2}$.\nStep 2: $8^2 + 6^2 = 64 + 36 = 100$, so $r = 10$.\nStep 3: The circumference is $2\\pi r = 2\\pi(10) = 20\\pi$. Check: $6$-$8$-$10$ is the $3$-$4$-$5$ triple doubled. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10\\pi$): multiplies $\\pi$ by the radius; the circumference is $\\pi$ times the diameter.\n* Choice C ($100\\pi$): computes $\\pi r^2$, the area, which is measured in square units.\n* Choice D ($200\\pi$): doubles the area rather than using $2\\pi r$.\n\n**Test Day Takeaway:** Get $r$ from the distance formula, then apply the right formula: $2\\pi r$ measures around the circle, $\\pi r^2$ measures inside it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-134",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, a circle has its center at $(-1, 3)$ and passes through the point $(4, 15)$. The equation of this circle can be written in the form $(x + 1)^2 + (y - 3)^2 = r^2$. What is the value of $r^2$?",
    correctAnswer: "169",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is $169$.**\n\n**The Fast Way (~15s):** $r^2$ is the sum of the squared gaps: $5^2 + 12^2 = 169$, with no square root needed.\n\n**The Full Solution:**\nStep 1: For a circle centered at $(h, k)$, the equation is $(x - h)^2 + (y - k)^2 = r^2$, where $r$ is the distance from the center to any point on the circle.\nStep 2: The horizontal gap is $4 - (-1) = 5$ and the vertical gap is $15 - 3 = 12$.\nStep 3: $r^2 = 5^2 + 12^2 = 25 + 144 = 169$. Check: $r = 13$, and $5$-$12$-$13$ is a Pythagorean triple. $\\checkmark$\n\n**Common Mistakes:**\n* Gridding $13$, the radius, when the question asks for $r^2$.\n* Using $4 - 1 = 3$ for the horizontal gap by ignoring the negative sign on the center's $x$-coordinate; that gives $9 + 144 = 153$.\n* Adding the gaps before squaring: $(5 + 12)^2 = 289$.\n\n**Test Day Takeaway:** The right side of a circle equation is $r^2$, not $r$. When a question asks for $r^2$, stop before the square root.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-135",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the circle with equation $(x + 5)^2 + (y - 12)^2 = r^2$ passes through the origin. What is the value of $r$?",
    choices: [
      // distractor: subtracts the coordinates of the center
      { id: "A", text: "$7$" },
      { id: "B", text: "$13$" },
      // distractor: adds the coordinates of the center instead of combining their squares
      { id: "C", text: "$17$" },
      // distractor: reports r squared instead of r
      { id: "D", text: "$169$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The center is $(-5, 12)$, so its distance to the origin is $\\sqrt{25 + 144} = 13$.\n\n**The Full Solution:**\nStep 1: In $(x - h)^2 + (y - k)^2 = r^2$, the center is $(h, k)$. Here $(x + 5)^2 = (x - (-5))^2$, so the center is $(-5, 12)$.\nStep 2: The circle passes through $(0, 0)$, so $r$ is the distance from $(-5, 12)$ to the origin: $r^2 = (-5)^2 + 12^2 = 25 + 144 = 169$.\nStep 3: $r = \\sqrt{169} = 13$. Check: substituting $(0, 0)$ gives $(0 + 5)^2 + (0 - 12)^2 = 25 + 144 = 169 = 13^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): subtracts $12 - 5$, treating the two gaps as collinear.\n* Choice C ($17$): adds $5 + 12$, the total travel along the axes rather than the direct distance.\n* Choice D ($169$): reports $r^2$; the equation's right side is the square of the radius.\n\n**Test Day Takeaway:** Read the center by flipping the signs inside the parentheses, then treat the given point as one end of a radius.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-136",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, a circle has its center at $(-6, 2)$ and passes through the point $(0, 10)$. The equation of the circle can be written as $(x + 6)^2 + (y - 2)^2 = k$, where $k$ is a constant. What is the value of $k$?",
    correctAnswer: "100",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is $100$.**\n\n**The Fast Way (~15s):** $k = r^2$, and the gaps are $6$ and $8$, so $k = 36 + 64 = 100$.\n\n**The Full Solution:**\nStep 1: In the form $(x - h)^2 + (y - k)^2 = r^2$, the constant on the right is the square of the radius, so $k = r^2$ here.\nStep 2: The horizontal gap from $(-6, 2)$ to $(0, 10)$ is $0 - (-6) = 6$ and the vertical gap is $10 - 2 = 8$.\nStep 3: $k = 6^2 + 8^2 = 36 + 64 = 100$. Check: substituting $(0, 10)$ gives $(0 + 6)^2 + (10 - 2)^2 = 36 + 64 = 100$. $\\checkmark$\n\n**Common Mistakes:**\n* Gridding $10$, the radius, when the constant on the right side is $r^2$.\n* Using $0 - 6 = -6$ and $10 - 2 = 8$ but then adding rather than squaring, giving $2$.\n* Reading the center as $(6, 2)$ from $(x + 6)^2$; the sign inside the parentheses is opposite the coordinate.\n\n**Test Day Takeaway:** Substituting the given point directly into the equation is the fastest check - both sides must agree.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-137",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, a circle has its center at $(6, -2)$, and the point $(2, 1)$ lies on the circle. What is the length of the longest chord of this circle?",
    choices: [
      // distractor: reports the radius instead of the longest chord
      { id: "A", text: "$5$" },
      { id: "B", text: "$10$" },
      // distractor: reports r squared instead of a length
      { id: "C", text: "$25$" },
      // distractor: doubles r squared instead of doubling the radius
      { id: "D", text: "$50$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The longest chord is a diameter. The radius is $\\sqrt{16 + 9} = 5$, so the diameter is $10$.\n\n**The Full Solution:**\nStep 1: The longest chord of any circle is a diameter, so the answer is $2r$.\nStep 2: The radius is the distance from $(6, -2)$ to $(2, 1)$: $r = \\sqrt{(2 - 6)^2 + (1 - (-2))^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.\nStep 3: The diameter is $2(5) = 10$. Check: $3$-$4$-$5$ confirms $r = 5$, and no chord can exceed the width of the circle. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): stops at the radius; a radius is only half of the longest chord.\n* Choice C ($25$): reports $r^2$, the value under the square root, as a length.\n* Choice D ($50$): doubles $r^2$ instead of doubling $r$.\n\n**Test Day Takeaway:** The longest chord of a circle is always the diameter. Find $r$ from the distance formula, then double it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-geo-138",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, a circle passes through the points $(-4, 10)$ and $(-4, 2)$, and the center of the circle lies on the $y$-axis. If the equation of the circle is written in the form $(x - h)^2 + (y - k)^2 = r^2$, what is the value of $r^2$?",
    correctAnswer: "32",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~40s):** A center on the $y$-axis is equidistant from the two points, so its $y$-coordinate is the average, $\\frac{10 + 2}{2} = 6$. Then $r^2 = 16 + 16 = 32$.\n\n**The Full Solution:**\nStep 1: The center lies on the $y$-axis, so it has the form $(0, k)$.\nStep 2: Both points are on the circle, so their distances to $(0, k)$ are equal: $16 + (10 - k)^2 = 16 + (2 - k)^2$. Expanding gives $100 - 20k = 4 - 4k$, so $96 = 16k$ and $k = 6$.\nStep 3: $r^2 = (-4 - 0)^2 + (10 - 6)^2 = 16 + 16 = 32$. Check: the other point gives $16 + (2 - 6)^2 = 16 + 16 = 32$. $\\checkmark$\n\n**Common Mistakes:**\n* Assuming the two given points are ends of a diameter. They are not: the midpoint $(-4, 6)$ is not on the $y$-axis.\n* Reporting $r = \\sqrt{32} \\approx 5.66$ when the question asks for $r^2$.\n* Using $k = 0$ (a center at the origin), which gives two different distances, $\\sqrt{116}$ and $\\sqrt{20}$, and so cannot be a circle through both points.\n\n**Test Day Takeaway:** Two points on a circle plus a constraint on the center is a system. Set the two radius expressions equal - the squared terms collapse into a linear equation.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 16: volume-of-a-rectangular-prism (8 items) =====
  // Now serves 5 test items after alias map collapsed three variant titles.
  {
    id: "bank-geo-139",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A storage bin in the shape of a rectangular prism has a length of $8$ inches, a width of $6$ inches, and a height of $5$ inches. What is the volume, in cubic inches, of the bin?",
    choices: [
      // distractor: adds the three dimensions instead of multiplying them
      { id: "A", text: "$19$" },
      // distractor: gives the area of the base only
      { id: "B", text: "$48$" },
      // distractor: computes the surface area instead of the volume
      { id: "C", text: "$236$" },
      { id: "D", text: "$240$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $V = \\ell wh = 8 \\times 6 \\times 5 = 240$ cubic inches.\n\n**The Full Solution:**\nStep 1: The volume of a rectangular prism is $V = \\ell wh$.\nStep 2: Substitute: $V = (8)(6)(5)$.\nStep 3: $(8)(6) = 48$ and $(48)(5) = 240$ cubic inches. Check: the base holds $48$ square inches, and stacking $5$ one-inch layers gives $240$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($19$): adds $8 + 6 + 5$, which is a length, not a volume.\n* Choice B ($48$): stops at the base area $8 \\times 6$ without multiplying by the height.\n* Choice C ($236$): computes the surface area, $2(48 + 40 + 30)$, which is measured in square inches, not cubic inches.\n\n**Test Day Takeaway:** Match the units to the formula. Cubic units mean three lengths multiplied; square units mean a surface area.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "volume-of-a-rectangular-prism",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-140",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "easy",
    type: "fill-in",
    question: "A planter box in the shape of a rectangular prism has a base that measures $7$ inches by $4$ inches and a height of $9$ inches. What is the volume, in cubic inches, of the planter box?",
    correctAnswer: "252",
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**The correct answer is $252$.**\n\n**The Fast Way (~10s):** $V = 7 \\times 4 \\times 9 = 252$ cubic inches.\n\n**The Full Solution:**\nStep 1: The volume of a rectangular prism is the area of the base times the height.\nStep 2: The base area is $7 \\times 4 = 28$ square inches.\nStep 3: $V = 28 \\times 9 = 252$ cubic inches. Check: $250$ is close to $28 \\times 9$, so the size is reasonable. $\\checkmark$\n\n**Common Mistakes:**\n* Adding the dimensions: $7 + 4 + 9 = 20$, which is a length rather than a volume.\n* Stopping at the base area, $28$.\n* Computing the surface area, $2(28 + 63 + 36) = 254$, which is measured in square inches.\n\n**Test Day Takeaway:** Base area times height gives the volume of every prism, whatever the shape of the base.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "volume-of-a-rectangular-prism",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-141",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A rectangular prism has a volume of $360$ cubic centimeters. The length of the prism is $10$ centimeters and the width is $6$ centimeters. What is the surface area, in square centimeters, of the prism?",
    choices: [
      // distractor: adds the three distinct face areas but forgets to double them
      { id: "A", text: "$156$" },
      // distractor: counts only the four lateral faces and omits the top and bottom
      { id: "B", text: "$192$" },
      { id: "C", text: "$312$" },
      // distractor: divides the volume by the length alone, giving a height of 36
      { id: "D", text: "$1{,}272$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Volume → Missing Dimension → Surface Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The height is $\\frac{360}{10 \\times 6} = 6$, so the surface area is $2(60 + 60 + 36) = 312$ square centimeters.\n\n**The Full Solution:**\nStep 1: $V = \\ell wh$, so $360 = (10)(6)h$ and $h = \\frac{360}{60} = 6$ centimeters.\nStep 2: The surface area of a rectangular prism is $2(\\ell w + \\ell h + wh) = 2\\big((10)(6) + (10)(6) + (6)(6)\\big) = 2(60 + 60 + 36)$.\nStep 3: $2(156) = 312$ square centimeters. Check: the prism is $10 \\times 6 \\times 6$, and $(10)(6)(6) = 360$ matches the given volume. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($156$): adds the three distinct face areas but never doubles them; every face has a matching opposite face.\n* Choice B ($192$): counts only the four side faces, $2(60) + 2(36)$, and leaves out the top and the bottom.\n* Choice D ($1{,}272$): divides the volume by the length alone, $h = 36$, then computes $2(60 + 360 + 216)$.\n\n**Test Day Takeaway:** Surface area needs all three dimensions, so recover the missing one from the volume first, then double the sum of the three distinct face areas.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "volume-of-a-rectangular-prism",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-142",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "medium",
    type: "fill-in",
    question: "A cube has a surface area of $294$ square centimeters. What is the volume, in cubic centimeters, of the cube?",
    correctAnswer: "343",
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**The correct answer is $343$.**\n\n**The Fast Way (~25s):** $6s^2 = 294$ gives $s^2 = 49$ and $s = 7$, so $V = 7^3 = 343$.\n\n**The Full Solution:**\nStep 1: A cube has $6$ congruent square faces, so its surface area is $6s^2$, where $s$ is the edge length.\nStep 2: $6s^2 = 294$ gives $s^2 = 49$, so $s = 7$ centimeters.\nStep 3: $V = s^3 = 7^3 = 343$ cubic centimeters. Check: $6(49) = 294$ matches the given surface area. $\\checkmark$\n\n**Common Mistakes:**\n* Treating $294$ as the area of one face: $s = \\sqrt{294} \\approx 17.15$, which is not a whole number and signals the missing $6$.\n* Stopping at the edge length $7$ instead of cubing it.\n* Cubing the face area, $49^3$, rather than the edge.\n\n**Test Day Takeaway:** For a cube, every question routes through the edge. Solve for $s$ first, then apply $s^2$ or $s^3$ as needed.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "volume-of-a-rectangular-prism",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-143",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A rectangular prism has a square base with a side length of $6$ inches and a height of $11$ inches. What is the volume, in cubic inches, of the prism?",
    choices: [
      // distractor: multiplies one base edge by the height instead of the base area
      { id: "A", text: "$66$" },
      // distractor: doubles the base edge instead of squaring it
      { id: "B", text: "$132$" },
      // distractor: multiplies the perimeter of the base by the height, giving the lateral area
      { id: "C", text: "$264$" },
      { id: "D", text: "$396$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The base area is $6^2 = 36$, so $V = 36 \\times 11 = 396$ cubic inches.\n\n**The Full Solution:**\nStep 1: The volume of a prism is the area of the base times the height.\nStep 2: The base is a square with side $6$, so its area is $6^2 = 36$ square inches.\nStep 3: $V = 36 \\times 11 = 396$ cubic inches. Check: $36 \\times 10 = 360$, and one more layer of $36$ gives $396$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($66$): multiplies a single base edge by the height, $6 \\times 11$, using a length where an area belongs.\n* Choice B ($132$): doubles the base edge instead of squaring it, $2(6)(11)$.\n* Choice C ($264$): multiplies the base perimeter $24$ by the height, which is the lateral surface area, not the volume.\n\n**Test Day Takeaway:** A square base contributes $s^2$, not $s$ and not $2s$. Square the edge before multiplying by the height.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "volume-of-a-rectangular-prism",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-144",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "medium",
    type: "fill-in",
    question: "An aquarium in the shape of a rectangular prism has a volume of $2{,}700$ cubic inches. The base of the aquarium measures $20$ inches by $15$ inches. What is the height, in inches, of the aquarium?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~15s):** The base area is $300$, so $h = \\frac{2{,}700}{300} = 9$ inches.\n\n**The Full Solution:**\nStep 1: $V = \\ell wh$, so $2{,}700 = (20)(15)h$.\nStep 2: $(20)(15) = 300$, so $300h = 2{,}700$.\nStep 3: $h = \\frac{2{,}700}{300} = 9$ inches. Check: $(20)(15)(9) = 2{,}700$. $\\checkmark$\n\n**Common Mistakes:**\n* Dividing by only one base dimension: $\\frac{2{,}700}{20} = 135$ or $\\frac{2{,}700}{15} = 180$.\n* Subtracting the base dimensions from the volume, which mixes cubic and square units.\n* Dividing by the base perimeter $70$ instead of the base area, giving about $38.6$.\n\n**Test Day Takeaway:** To recover a missing dimension, divide the volume by the product of the other two - the base area, not the base perimeter.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "volume-of-a-rectangular-prism",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-145",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The length of a rectangular prism is multiplied by $1.5$, its width is multiplied by $0.8$, and its height is multiplied by a constant $k$. The volume of the resulting prism is $60\\%$ of the volume of the original prism. What is the value of $k$?",
    choices: [
      // distractor: divides by the length factor only
      { id: "A", text: "$0.4$" },
      { id: "B", text: "$0.5$" },
      // distractor: multiplies by the combined factor instead of dividing by it
      { id: "C", text: "$0.72$" },
      // distractor: divides by the width factor only
      { id: "D", text: "$0.75$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Inverse Multi-Percent Change (Volume)**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The volume multiplier is the product of the three factors: $1.5(0.8)k = 0.6$, so $1.2k = 0.6$ and $k = 0.5$.\n\n**The Full Solution:**\nStep 1: If the original prism has volume $\\ell wh$, the new prism has volume $(1.5\\ell)(0.8w)(kh) = 1.5(0.8)k \\cdot \\ell wh$.\nStep 2: The new volume is $60\\%$ of the original, so $1.5(0.8)k = 0.6$, which is $1.2k = 0.6$.\nStep 3: $k = \\frac{0.6}{1.2} = 0.5$. Check: $1.5 \\times 0.8 \\times 0.5 = 0.6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.4$): divides by the length factor only, $\\frac{0.6}{1.5}$, ignoring the width change.\n* Choice C ($0.72$): multiplies, $0.6 \\times 1.2$, instead of dividing by the combined factor.\n* Choice D ($0.75$): divides by the width factor only, $\\frac{0.6}{0.8}$, ignoring the length change.\n\n**Test Day Takeaway:** Volume scales by the product of the three dimension multipliers. Multiply the known factors first, then divide the target multiplier by that product.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "volume-of-a-rectangular-prism",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-146",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "hard",
    type: "fill-in",
    question: "A cube has the same volume as a rectangular prism whose dimensions are $8$ centimeters, $12$ centimeters, and $18$ centimeters. What is the surface area, in square centimeters, of the cube?",
    correctAnswer: "864",
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**The correct answer is $864$.**\n\n**The Fast Way (~40s):** The prism's volume is $1{,}728$, so the cube's edge is $\\sqrt[3]{1{,}728} = 12$ and its surface area is $6(12^2) = 864$.\n\n**The Full Solution:**\nStep 1: The volume of the prism is $(8)(12)(18) = 1{,}728$ cubic centimeters, so the cube also has volume $1{,}728$.\nStep 2: For a cube, $s^3 = 1{,}728$, so $s = 12$ centimeters.\nStep 3: The surface area is $6s^2 = 6(144) = 864$ square centimeters. Check: $12^3 = 1{,}728$ matches the prism's volume. $\\checkmark$\n\n**Common Mistakes:**\n* Computing the prism's surface area, $2(96 + 144 + 216) = 912$; the two solids share a volume, not a surface area.\n* Gridding the edge length $12$ or the volume $1{,}728$ instead of the surface area.\n* Using $6s$ rather than $6s^2$, giving $72$.\n\n**Test Day Takeaway:** Equal-volume problems route through the shared volume: compute it once, solve for the new solid's dimension, then answer in the requested units.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "volume-of-a-rectangular-prism",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  // ===== Phase 2 batch 17/1: area-of-a-circle (8 items) =====
  {
    id: "bank-geo-147",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A circle in the $xy$-plane has a radius of $8$. What is the area of this circle, in terms of $\\pi$?",
    choices: [
      // distractor: multiplies pi by the radius without squaring
      { id: "A", text: "$8\\pi$" },
      // distractor: computes the circumference instead of the area
      { id: "B", text: "$16\\pi$" },
      { id: "C", text: "$64\\pi$" },
      // distractor: squares the diameter instead of the radius
      { id: "D", text: "$256\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $A = \\pi r^2 = \\pi(8)^2 = 64\\pi$.\n\n**The Full Solution:**\nStep 1: The area of a circle is $A = \\pi r^2$.\nStep 2: Substitute $r = 8$: $A = \\pi(8)^2$.\nStep 3: $A = 64\\pi$. Check: doubling the radius of a unit circle to $8$ multiplies the area by $64$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8\\pi$): multiplies $\\pi$ by the radius without squaring it.\n* Choice B ($16\\pi$): computes the circumference $2\\pi r$, which is a length, not an area.\n* Choice D ($256\\pi$): squares the diameter $16$ instead of the radius.\n\n**Test Day Takeaway:** Area uses $r^2$; circumference uses $2r$. Confirm you have the radius, not the diameter, before squaring.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-148",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "fill-in",
    question: "A circle has a radius of $11$. The area of the circle can be written as $k\\pi$, where $k$ is a constant. What is the value of $k$?",
    correctAnswer: "121",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**The correct answer is $121$.**\n\n**The Fast Way (~10s):** $A = \\pi r^2 = 121\\pi$, so $k = 121$.\n\n**The Full Solution:**\nStep 1: The area of a circle is $A = \\pi r^2$.\nStep 2: With $r = 11$, $A = \\pi(11)^2 = 121\\pi$.\nStep 3: Matching $121\\pi$ to $k\\pi$ gives $k = 121$. Check: $11^2 = 121$. $\\checkmark$\n\n**Common Mistakes:**\n* Gridding $22$, which comes from the circumference $2\\pi r = 22\\pi$.\n* Using the diameter $22$ as the radius, giving $k = 484$.\n* Multiplying $121$ by $3.14$ and gridding a decimal; the answer is the coefficient of $\\pi$, not the numerical area.\n\n**Test Day Takeaway:** When an answer is written as $k\\pi$, $k$ is whatever multiplies $\\pi$ - leave $\\pi$ symbolic and grid the coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-149",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A circle in the $xy$-plane has an area of $81\\pi$ square units. What is the diameter of this circle?",
    choices: [
      // distractor: reports the radius instead of the diameter
      { id: "A", text: "$9$" },
      { id: "B", text: "$18$" },
      // distractor: reports r squared instead of a length
      { id: "C", text: "$81$" },
      // distractor: doubles r squared instead of doubling the radius
      { id: "D", text: "$162$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of a Circle (Reverse from Given Area)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\pi r^2 = 81\\pi$ gives $r = 9$, so the diameter is $18$.\n\n**The Full Solution:**\nStep 1: Set the area formula equal to the given area: $\\pi r^2 = 81\\pi$.\nStep 2: Divide both sides by $\\pi$: $r^2 = 81$, so $r = 9$.\nStep 3: The diameter is $2r = 18$. Check: a circle of radius $9$ has area $\\pi(81) = 81\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): stops at the radius when the question asks for the diameter.\n* Choice C ($81$): reports $r^2$, which is an area coefficient, not a length.\n* Choice D ($162$): doubles $r^2$ instead of doubling $r$.\n\n**Test Day Takeaway:** Working backward from an area, divide out $\\pi$ first, then take the square root - and check whether the question wants $r$ or $2r$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "area-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-150",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "The diameter of a circle is $26$ inches. The area of this circle can be written as $k\\pi$ square inches, where $k$ is a constant. What is the value of $k$?",
    correctAnswer: "169",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**The correct answer is $169$.**\n\n**The Fast Way (~15s):** Halve the diameter to get $r = 13$, so the area is $169\\pi$ and $k = 169$.\n\n**The Full Solution:**\nStep 1: The radius is half the diameter: $r = \\frac{26}{2} = 13$ inches.\nStep 2: The area is $A = \\pi r^2 = \\pi(13)^2 = 169\\pi$ square inches.\nStep 3: Matching $169\\pi$ to $k\\pi$ gives $k = 169$. Check: $13^2 = 169$. $\\checkmark$\n\n**Common Mistakes:**\n* Squaring the diameter instead of the radius, giving $k = 676$.\n* Using the circumference $\\pi d = 26\\pi$, so $k = 26$.\n* Halving the finished area instead of halving the diameter first, giving $338$.\n\n**Test Day Takeaway:** Halve the diameter before any area work. Squaring $d$ instead of $r$ inflates the answer by a factor of $4$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-151",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The radius of circle $B$ is $3$ times the radius of circle $A$. The area of circle $B$ is $k$ times the area of circle $A$. What is the value of $k$?",
    choices: [
      // distractor: reports the linear scale factor as the area factor
      { id: "A", text: "$3$" },
      // distractor: doubles the scale factor instead of squaring it
      { id: "B", text: "$6$" },
      { id: "C", text: "$9$" },
      // distractor: cubes the scale factor, as if scaling a volume
      { id: "D", text: "$27$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Area depends on $r^2$, so tripling the radius multiplies the area by $3^2 = 9$.\n\n**The Full Solution:**\nStep 1: Let circle $A$ have radius $a$, so its area is $\\pi a^2$. Circle $B$ then has radius $3a$.\nStep 2: The area of circle $B$ is $\\pi(3a)^2 = 9\\pi a^2$.\nStep 3: $9\\pi a^2 = 9(\\pi a^2)$, so $k = 9$. Check: with $a = 1$ the areas are $\\pi$ and $9\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the radius factor; lengths scale by $3$ but areas do not.\n* Choice B ($6$): doubles the factor instead of squaring it, confusing $2 \\cdot 3$ with $3^2$.\n* Choice D ($27$): cubes the factor, which is how volume scales, not area.\n\n**Test Day Takeaway:** Scale a length by $n$ and area scales by $n^2$, volume by $n^3$. The exponent matches the number of dimensions.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-152",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "A circle has an area of $225\\pi$ square inches. The circumference of this circle can be written as $k\\pi$ inches, where $k$ is a constant. What is the value of $k$?",
    correctAnswer: "30",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~20s):** $r^2 = 225$ gives $r = 15$, so the circumference is $2\\pi(15) = 30\\pi$ and $k = 30$.\n\n**The Full Solution:**\nStep 1: Set the area formula equal to the given area: $\\pi r^2 = 225\\pi$, so $r^2 = 225$.\nStep 2: $r = \\sqrt{225} = 15$ inches.\nStep 3: The circumference is $2\\pi r = 30\\pi$, so $k = 30$. Check: a radius of $15$ gives area $\\pi(225) = 225\\pi$. $\\checkmark$\n\n**Common Mistakes:**\n* Gridding $15$, the radius, instead of the circumference coefficient $2r$.\n* Skipping the square root and using $r = 225$, which gives $k = 450$.\n* Using $\\pi r$ instead of $2\\pi r$, which gives $k = 15$.\n\n**Test Day Takeaway:** Area to circumference is a two-step trip: divide out $\\pi$ and take a square root to reach $r$, then double it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-153",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $x^2 + y^2 - 10x + 24y = 0$ is a circle. The area of this circle can be written as $k\\pi$, where $k$ is a constant. What is the value of $k$?",
    choices: [
      // distractor: reports the radius instead of the coefficient of pi in the area
      { id: "A", text: "$13$" },
      // distractor: reports the diameter instead of r squared
      { id: "B", text: "$26$" },
      { id: "C", text: "$169$" },
      // distractor: doubles r squared, as if the area were 2 pi r squared
      { id: "D", text: "$338$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Completing both squares gives $(x - 5)^2 + (y + 12)^2 = 169$, so $r^2 = 169$ and the area is $169\\pi$.\n\n**The Full Solution:**\nStep 1: Group the variables: $(x^2 - 10x) + (y^2 + 24y) = 0$.\nStep 2: Complete each square. Half of $-10$ is $-5$, and half of $24$ is $12$, so add $25$ and $144$ to both sides: $(x - 5)^2 + (y + 12)^2 = 169$.\nStep 3: The right side is $r^2 = 169$, so the area is $\\pi r^2 = 169\\pi$ and $k = 169$. Check: $r = 13$, and the origin satisfies the original equation, so it lies on the circle - its distance from $(5, -12)$ is indeed $13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): reports the radius rather than the coefficient of $\\pi$ in the area.\n* Choice B ($26$): reports the diameter, which would be the circumference coefficient, not the area coefficient.\n* Choice D ($338$): doubles $r^2$, as though the area were $2\\pi r^2$.\n\n**Test Day Takeaway:** A circle equation with $x$ and $y$ terms is not ready to read. Complete both squares first; whatever lands on the right side is $r^2$, which is exactly the coefficient the area needs.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-154",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "hard",
    type: "fill-in",
    question: "A square with a side length of $10$ is inscribed in a circle. The area of the circle can be written as $k\\pi$, where $k$ is a constant. What is the value of $k$?",
    correctAnswer: "50",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**The correct answer is $50$.**\n\n**The Fast Way (~40s):** The square's diagonal is a diameter: $d = 10\\sqrt{2}$, so $r^2 = \\left(5\\sqrt{2}\\right)^2 = 50$.\n\n**The Full Solution:**\nStep 1: All four vertices of the square lie on the circle, so a diagonal of the square passes through the center and is a diameter.\nStep 2: A square with side $10$ has diagonal $10\\sqrt{2}$, so the radius is $\\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$.\nStep 3: $r^2 = (5\\sqrt{2})^2 = 25(2) = 50$, so the area is $50\\pi$ and $k = 50$. Check: $50\\pi \\approx 157$, larger than the square's area of $100$, as it must be. $\\checkmark$\n\n**Common Mistakes:**\n* Treating the side as the diameter, which gives $r = 5$ and $k = 25$ - too small to contain the square.\n* Treating the side as the radius, which gives $k = 100$.\n* Using the whole diagonal as the radius, which gives $r^2 = 200$ and $k = 200$.\n\n**Test Day Takeaway:** Square inscribed in a circle means diagonal equals diameter. Circle inscribed in a square means side equals diameter. Decide which shape is inside before writing anything.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  // ===== Phase 2 batch 17/2: square-perimeter (8 items) =====
  {
    id: "bank-geo-155",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A square has a side length of $13$ centimeters. What is the perimeter, in centimeters, of the square?",
    choices: [
      // distractor: adds only two of the four sides
      { id: "A", text: "$26$" },
      // distractor: adds only three of the four sides
      { id: "B", text: "$39$" },
      { id: "C", text: "$52$" },
      // distractor: computes the area instead of the perimeter
      { id: "D", text: "$169$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $P = 4s = 4(13) = 52$ centimeters.\n\n**The Full Solution:**\nStep 1: A square has four sides of equal length, so its perimeter is $P = 4s$.\nStep 2: Substitute $s = 13$: $P = 4(13)$.\nStep 3: $P = 52$ centimeters. Check: $13 + 13 + 13 + 13 = 52$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($26$): adds only two sides, $13 + 13$.\n* Choice B ($39$): adds only three sides, $3(13)$.\n* Choice D ($169$): computes the area $s^2$, which is in square centimeters rather than centimeters.\n\n**Test Day Takeaway:** Perimeter multiplies the side by $4$; area squares it. The units in the question tell you which one is wanted.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "square-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-156",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "fill-in",
    question: "A square has an area of $121$ square inches. What is the perimeter, in inches, of the square?",
    correctAnswer: "44",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is $44$.**\n\n**The Fast Way (~15s):** $s = \\sqrt{121} = 11$, so $P = 4(11) = 44$ inches.\n\n**The Full Solution:**\nStep 1: The area of a square is $s^2$, so $s^2 = 121$.\nStep 2: $s = \\sqrt{121} = 11$ inches.\nStep 3: $P = 4s = 4(11) = 44$ inches. Check: a square of side $11$ has area $121$. $\\checkmark$\n\n**Common Mistakes:**\n* Multiplying the area by $4$, giving $484$, instead of taking the square root first.\n* Gridding the side length $11$ rather than the perimeter.\n* Halving the area, giving $60.5$, which corresponds to no side of this square.\n\n**Test Day Takeaway:** Area to perimeter always passes through the side: square root first, multiply by $4$ second.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "square-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-157",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A square has a perimeter of $60$ meters. What is the area, in square meters, of the square?",
    choices: [
      // distractor: reports the side length instead of the area
      { id: "A", text: "$15$" },
      { id: "B", text: "$225$" },
      // distractor: divides the perimeter by 2 instead of 4 before squaring
      { id: "C", text: "$900$" },
      // distractor: squares the perimeter instead of the side length
      { id: "D", text: "$3{,}600$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $s = \\frac{60}{4} = 15$, so the area is $15^2 = 225$ square meters.\n\n**The Full Solution:**\nStep 1: For a square, $P = 4s$, so $60 = 4s$.\nStep 2: $s = \\frac{60}{4} = 15$ meters.\nStep 3: The area is $s^2 = 15^2 = 225$ square meters. Check: a side of $15$ gives a perimeter of $4(15) = 60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): stops at the side length, which is a length rather than an area.\n* Choice C ($900$): divides the perimeter by $2$ instead of $4$, using $s = 30$.\n* Choice D ($3{,}600$): squares the perimeter itself instead of the side length.\n\n**Test Day Takeaway:** Perimeter to area also passes through the side: divide by $4$ first, then square.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "square-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-158",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "fill-in",
    question: "A square has a diagonal of length $12\\sqrt{2}$ centimeters. What is the perimeter, in centimeters, of the square?",
    correctAnswer: "48",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is $48$.**\n\n**The Fast Way (~20s):** A square's diagonal is $s\\sqrt{2}$, so $s = 12$ and $P = 4(12) = 48$ centimeters.\n\n**The Full Solution:**\nStep 1: A diagonal splits the square into two right triangles with legs $s$ and $s$, so the diagonal is $\\sqrt{s^2 + s^2} = s\\sqrt{2}$.\nStep 2: $s\\sqrt{2} = 12\\sqrt{2}$, so $s = 12$ centimeters.\nStep 3: $P = 4s = 48$ centimeters. Check: $12^2 + 12^2 = 288$ and $\\sqrt{288} = 12\\sqrt{2}$. $\\checkmark$\n\n**Common Mistakes:**\n* Treating the diagonal as a side, which gives $P = 48\\sqrt{2} \\approx 67.9$.\n* Multiplying by $\\sqrt{2}$ instead of dividing, giving $s = 24$ and $P = 96$.\n* Gridding the side length $12$ instead of the perimeter.\n\n**Test Day Takeaway:** In every square, diagonal $= s\\sqrt{2}$. A diagonal already written with a $\\sqrt{2}$ hands you the side directly.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "square-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-159",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The perimeter of a square is increased by $50\\%$ to produce a new square. The area of the new square is what percent greater than the area of the original square?",
    choices: [
      // distractor: reports the percent increase in perimeter as the percent increase in area
      { id: "A", text: "$50\\%$" },
      // distractor: doubles the linear percent increase instead of squaring the multiplier
      { id: "B", text: "$100\\%$" },
      { id: "C", text: "$125\\%$" },
      // distractor: gives the new area as a percent of the original rather than the percent increase
      { id: "D", text: "$225\\%$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Square Perimeter and Area Scaling**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Perimeter and side scale together by $1.5$, so area scales by $1.5^2 = 2.25$, an increase of $125\\%$.\n\n**The Full Solution:**\nStep 1: For a square, $P = 4s$, so multiplying the perimeter by $1.5$ multiplies the side by $1.5$ as well.\nStep 2: The new area is $(1.5s)^2 = 2.25s^2$, so the area is $2.25$ times the original.\nStep 3: An area of $2.25$ times the original is an increase of $2.25 - 1 = 1.25$, or $125\\%$. Check: a side of $4$ gives area $16$; a side of $6$ gives area $36$, and $\\frac{36 - 16}{16} = 1.25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($50\\%$): reuses the perimeter increase; lengths grow by $50\\%$ but areas grow faster.\n* Choice B ($100\\%$): doubles the $50\\%$ increase, treating area as if it scaled linearly.\n* Choice D ($225\\%$): gives the new area as a percent of the original instead of the percent increase, which is $225\\% - 100\\%$.\n\n**Test Day Takeaway:** Convert to a multiplier, square it for area, then subtract $1$ before reporting a percent increase.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "square-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-160",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "fill-in",
    question: "A square has a side length of $2y$ centimeters. If the perimeter of the square is $48$ centimeters, what is the value of $y$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** $4(2y) = 8y = 48$, so $y = 6$.\n\n**The Full Solution:**\nStep 1: The perimeter of a square is $4$ times the side length, so $P = 4(2y) = 8y$.\nStep 2: Set the perimeter equal to $48$: $8y = 48$.\nStep 3: $y = \\frac{48}{8} = 6$. Check: the side is $2(6) = 12$ centimeters, and $4(12) = 48$. $\\checkmark$\n\n**Common Mistakes:**\n* Solving $4y = 48$ and gridding $12$, which is the side length, not $y$.\n* Dividing the perimeter by $2$ instead of by $8$, giving $24$.\n* Treating $48$ as the area, which gives $4y^2 = 48$ and $y = 2\\sqrt{3} \\approx 3.46$.\n\n**Test Day Takeaway:** Substitute the whole expression for the side into $P = 4s$, then solve for the variable the question names - not for the side.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "square-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-161",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A square has a side length of $3x - 7$, and a second square has a side length of $2x + 1$. The perimeter of the first square is $8$ greater than the perimeter of the second square. What is the value of $x$?",
    choices: [
      // distractor: adds the 8 to the first perimeter instead of the second
      { id: "A", text: "$6$" },
      // distractor: drops the 8 and sets the two perimeters equal
      { id: "B", text: "$8$" },
      { id: "C", text: "$10$" },
      // distractor: compares the side lengths instead of the perimeters
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The perimeters are $12x - 28$ and $8x + 4$, so $12x - 28 = (8x + 4) + 8$ gives $4x = 40$ and $x = 10$.\n\n**The Full Solution:**\nStep 1: Each perimeter is four times its side length: the first square has perimeter $4(3x - 7) = 12x - 28$, and the second has perimeter $4(2x + 1) = 8x + 4$.\nStep 2: The comparison is between the two perimeters, so the larger one is the second plus $8$: $12x - 28 = (8x + 4) + 8$, which is $12x - 28 = 8x + 12$.\nStep 3: Subtract $8x$ and add $28$: $4x = 40$, so $x = 10$. Check: the sides are $23$ and $21$, the perimeters are $92$ and $84$, and $92 - 84 = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): attaches the $8$ to the first square, solving $(12x - 28) + 8 = 8x + 4$; the first perimeter is the larger one, so the $8$ belongs on the other side.\n* Choice B ($8$): drops the $8$ and sets the perimeters equal, $12x - 28 = 8x + 4$.\n* Choice D ($16$): compares the side lengths instead of the perimeters, solving $3x - 7 = (2x + 1) + 8$.\n\n**Test Day Takeaway:** A comparison sentence applies to the quantity it names. Write both perimeters in full, then add the difference to the smaller side of the equation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "square-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-162",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "hard",
    type: "fill-in",
    question: "A rectangle has a length that is $3$ times its width and an area of $108$ square centimeters. A square has the same perimeter as this rectangle. What is the area, in square centimeters, of the square?",
    correctAnswer: "144",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is $144$.**\n\n**The Fast Way (~50s):** $3w^2 = 108$ gives $w = 6$ and $\\ell = 18$, so the shared perimeter is $48$, the square's side is $12$, and its area is $144$.\n\n**The Full Solution:**\nStep 1: Let the width be $w$, so the length is $3w$ and the area is $3w^2 = 108$. Then $w^2 = 36$ and $w = 6$ centimeters, so the length is $18$ centimeters.\nStep 2: The rectangle's perimeter is $2(6 + 18) = 48$ centimeters, and the square has the same perimeter, so its side is $\\frac{48}{4} = 12$ centimeters.\nStep 3: The square's area is $12^2 = 144$ square centimeters. Check: the square and the rectangle both have perimeter $48$, and the square encloses more area, as it must. $\\checkmark$\n\n**Common Mistakes:**\n* Matching the areas instead of the perimeters, which would give $108$.\n* Gridding the shared perimeter $48$ or the square's side $12$ instead of the area.\n* Solving $3w = 108$ for the width, giving $w = 36$, which treats the area as a length.\n\n**Test Day Takeaway:** Two-figure problems hinge on the shared quantity. Find it explicitly, carry it to the second figure, then answer in the requested units.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "square-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  // ===== Phase 2 batch 17/3: angles-with-parallel-lines-and-transversals (8 items) =====
  {
    id: "bank-geo-163",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, lines $\\ell$ and $m$ are parallel and are cut by a transversal $t$. One of the angles formed at line $\\ell$ has a measure of $37°$. What is the measure of the angle at line $m$ that corresponds to it?",
    choices: [
      { id: "A", text: "$37°$" },
      // distractor: takes the complement of the given angle
      { id: "B", text: "$53°$" },
      // distractor: doubles the given angle
      { id: "C", text: "$74°$" },
      // distractor: takes the supplement, which applies to same-side interior angles, not corresponding ones
      { id: "D", text: "$143°$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Corresponding angles at parallel lines are congruent, so the measure is $37°$.\n\n**The Full Solution:**\nStep 1: When a transversal cuts two parallel lines, corresponding angles occupy matching positions at the two intersections.\nStep 2: Corresponding angles formed by parallel lines are congruent.\nStep 3: The corresponding angle therefore measures $37°$. Check: its linear-pair partner measures $143°$, and $37 + 143 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($53°$): takes the complement, $90 - 37$; complements belong to right triangles, not parallel lines.\n* Choice C ($74°$): doubles the angle, a relationship that appears in circles, not in transversal geometry.\n* Choice D ($143°$): takes the supplement, which is correct for same-side interior angles but not for corresponding ones.\n\n**Test Day Takeaway:** With parallel lines, every angle is either congruent to the given one or supplementary to it. Name the pair first, then decide which of those two applies.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "angles-with-parallel-lines-and-transversals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-164",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "easy",
    type: "fill-in",
    question: "Two parallel lines are cut by a transversal, forming a pair of alternate interior angles with measures $(4x - 9)°$ and $(2x + 27)°$. What is the value of $x$?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~20s):** Alternate interior angles are congruent, so $4x - 9 = 2x + 27$ gives $x = 18$.\n\n**The Full Solution:**\nStep 1: When a transversal cuts parallel lines, alternate interior angles are congruent, so set the two measures equal: $4x - 9 = 2x + 27$.\nStep 2: Subtract $2x$ from both sides and add $9$: $2x = 36$.\nStep 3: $x = 18$. Check: $4(18) - 9 = 63$ and $2(18) + 27 = 63$, so both angles measure $63°$. $\\checkmark$\n\n**Common Mistakes:**\n* Setting the sum equal to $180$, the rule for same-side interior angles: $6x + 18 = 180$ gives $x = 27$.\n* Gridding the angle measure $63$ instead of the value of $x$.\n* Setting the sum equal to $90$, which gives $x = 12$ and applies to complementary angles, not this pair.\n\n**Test Day Takeaway:** Alternate interior and corresponding angles are equal; same-side interior angles add to $180°$. Identify the pair before writing the equation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "angles-with-parallel-lines-and-transversals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-165",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the figure, lines $\\ell$ and $m$ are parallel and are cut by transversal $t$. What is the value of $x$?",
    diagram: { type: "parallelLines", params: { angles: { top: ["54°", ""], bottom: ["", "x°"] }, lineLabels: ["ℓ", "m", "t"], figureNote: true } },
    choices: [
      // distractor: takes the complement of the marked angle
      { id: "A", text: "$36°$" },
      // distractor: treats the two marked angles as a congruent pair
      { id: "B", text: "$54°$" },
      { id: "C", text: "$126°$" },
      // distractor: adds 90 to the marked angle
      { id: "D", text: "$144°$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The $54°$ angle corresponds to the angle on the far side of the $x°$ angle at line $m$, and those two form a linear pair, so $x = 180 - 54 = 126$.\n\n**The Full Solution:**\nStep 1: At line $m$, the angle that corresponds to the $54°$ angle sits in the matching position, on the same side of the transversal, so it also measures $54°$.\nStep 2: That $54°$ angle and the angle marked $x°$ lie on opposite sides of the transversal along line $m$, so they form a linear pair and their measures sum to $180$.\nStep 3: $x = 180 - 54 = 126$. Check: $126 + 54 = 180$, and the obtuse marked angle is on the opposite side of the transversal from the acute $54°$ angle, as the figure shows. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($36°$): takes the complement, $90 - 54$, a relationship that does not apply to a linear pair.\n* Choice B ($54°$): assumes the two marked angles are a congruent pair, but they sit on opposite sides of the transversal at different lines.\n* Choice D ($144°$): adds $90$ to $54$, as if the transversal met the parallel lines at a right angle.\n\n**Test Day Takeaway:** Slide the known angle down to the second parallel line first (corresponding angles are equal), and only then use the linear pair at that intersection.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "angles-with-parallel-lines-and-transversals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-166",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "medium",
    type: "fill-in",
    question: "Parallel lines $p$ and $q$ are crossed by transversal $r$, forming the two marked angles shown in the figure. What is the value of $x$?",
    diagram: { type: "parallelLines", params: { angles: { top: ["(5x - 4)°", ""], bottom: ["", "(3x + 24)°"] }, lineLabels: ["p", "q", "r"], figureNote: true } },
    correctAnswer: "20",
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~30s):** The two marked angles are supplementary, so $(5x - 4) + (3x + 24) = 180$, giving $x = 20$.\n\n**The Full Solution:**\nStep 1: The angle marked $(5x - 4)°$ at line $p$ corresponds to the angle in the matching position at line $q$, so that angle also measures $(5x - 4)°$.\nStep 2: That angle and the angle marked $(3x + 24)°$ form a linear pair at line $q$, so $(5x - 4) + (3x + 24) = 180$, which is $8x + 20 = 180$.\nStep 3: $8x = 160$, so $x = 20$. Check: the angles measure $5(20) - 4 = 96$ and $3(20) + 24 = 84$ degrees, and $96 + 84 = 180$. $\\checkmark$\n\n**Common Mistakes:**\n* Setting the two expressions equal, which gives $2x = 28$ and $x = 14$; that rule fits corresponding or alternate angles, not this pair.\n* Gridding an angle measure ($96$ or $84$) instead of the value of $x$.\n* Setting the sum to $90$, which gives $8x + 20 = 90$ and the non-integer $x = 8.75$.\n\n**Test Day Takeaway:** Two marked angles at parallel lines are either equal or supplementary. Check whether they sit on the same side of the transversal before choosing the equation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "angles-with-parallel-lines-and-transversals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-167",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the figure, two lines intersect, forming angles with measures $(3x - 5)°$ and $(5x + 25)°$. What is the measure, in degrees, of the angle marked $(3x - 5)°$?",
    diagram: { type: "intersectingLines", params: { angles: ["(3x - 5)°", "(5x + 25)°", "", ""], figureNote: true } },
    choices: [
      // distractor: reports the value of x rather than the angle measure
      { id: "A", text: "$20$" },
      { id: "B", text: "$55$" },
      // distractor: assumes a linear pair splits evenly into two right angles
      { id: "C", text: "$90$" },
      // distractor: gives the other marked angle
      { id: "D", text: "$125$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical and Linear-Pair Angles**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The two marked angles form a linear pair, so $(3x - 5) + (5x + 25) = 180$ gives $x = 20$ and $3(20) - 5 = 55$.\n\n**The Full Solution:**\nStep 1: The two marked angles sit side by side along one of the lines, so together they form a straight angle and their measures sum to $180$.\nStep 2: $(3x - 5) + (5x + 25) = 180$ simplifies to $8x + 20 = 180$, so $8x = 160$ and $x = 20$.\nStep 3: The requested measure is $3(20) - 5 = 55$ degrees. Check: the other angle is $5(20) + 25 = 125$, and $55 + 125 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): reports $x$ instead of substituting it back into $3x - 5$.\n* Choice C ($90$): assumes the straight angle splits evenly, which happens only when the lines are perpendicular.\n* Choice D ($125$): gives the measure of the other marked angle, $5x + 25$.\n\n**Test Day Takeaway:** Solving for $x$ is the middle of the problem, not the end. Substitute back into the expression the question names.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "angles-with-parallel-lines-and-transversals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-168",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the figure, transversal $n$ intersects parallel lines $j$ and $k$. What is the measure, in degrees, of the angle marked $(6y - 15)°$?",
    diagram: { type: "parallelLines", params: { angles: { top: ["(6y - 15)°", ""], bottom: ["(4y + 9)°", ""] }, lineLabels: ["j", "k", "n"], figureNote: true } },
    correctAnswer: "57",
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**The correct answer is $57$.**\n\n**The Fast Way (~25s):** The marked angles correspond, so $6y - 15 = 4y + 9$ gives $y = 12$ and $6(12) - 15 = 57$.\n\n**The Full Solution:**\nStep 1: The two marked angles occupy matching positions at the two parallel lines, so they are corresponding angles and are congruent: $6y - 15 = 4y + 9$.\nStep 2: Subtract $4y$ and add $15$: $2y = 24$, so $y = 12$.\nStep 3: The requested measure is $6(12) - 15 = 57$ degrees. Check: $4(12) + 9 = 57$ as well, so the two corresponding angles agree. $\\checkmark$\n\n**Common Mistakes:**\n* Gridding $y = 12$ instead of the angle measure the question asks for.\n* Setting the sum equal to $180$: $10y - 6 = 180$ gives $y = 18.6$, a non-integer that signals the wrong angle relationship.\n* Reporting the supplement, $180 - 57 = 123$, which is the adjacent angle rather than the marked one.\n\n**Test Day Takeaway:** Corresponding angles are equal, so set the expressions equal - then finish the job by substituting back for the measure.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "angles-with-parallel-lines-and-transversals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-169",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Transversal $e$ crosses parallel lines $c$ and $d$ in the figure, forming the three marked angles. What is the value of $a$?",
    diagram: { type: "parallelLines", params: { angles: { top: ["(a + 5b)°", "(3a + b)°"], bottom: ["(2a + 2b)°", ""] }, lineLabels: ["c", "d", "e"], figureNote: true } },
    choices: [
      // distractor: reports the value of b instead of a
      { id: "A", text: "$10$" },
      { id: "B", text: "$30$" },
      // distractor: reports the sum a + b
      { id: "C", text: "$40$" },
      // distractor: reports the measure of an angle instead of the value of a
      { id: "D", text: "$80$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Angles with Parallel Lines (System of Two Conditions)**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** The linear pair gives $2a + 3b = 90$ and the corresponding pair gives $a = 3b$, so $9b = 90$, $b = 10$, and $a = 30$.\n\n**The Full Solution:**\nStep 1: At line $c$ the angles $(3a + b)°$ and $(a + 5b)°$ form a linear pair, so $(3a + b) + (a + 5b) = 180$, which simplifies to $4a + 6b = 180$, or $2a + 3b = 90$.\nStep 2: The angle $(2a + 2b)°$ at line $d$ occupies the position corresponding to $(a + 5b)°$ at line $c$, so $2a + 2b = a + 5b$, which gives $a = 3b$.\nStep 3: Substitute $a = 3b$ into $2a + 3b = 90$: $6b + 3b = 90$, so $b = 10$ and $a = 30$. Check: the angles are $3(30) + 10 = 100$, $30 + 5(10) = 80$, and $2(30) + 2(10) = 80$, with $100 + 80 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): reports $b$, the other unknown in the system.\n* Choice C ($40$): reports $a + b$, which no marked angle or question calls for.\n* Choice D ($80$): reports the measure of the corresponding angles rather than the value of $a$.\n\n**Test Day Takeaway:** Two unknowns need two independent angle facts. Take one equation from a linear pair and one from a corresponding pair, then solve the system.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "angles-with-parallel-lines-and-transversals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-170",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "hard",
    type: "fill-in",
    question: "Two parallel lines are cut by a transversal. A pair of same-side interior angles have measures $(7x + 4)°$ and $(3x - 14)°$. What is the measure, in degrees, of the larger of these two angles?",
    correctAnswer: "137",
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**The correct answer is $137$.**\n\n**The Fast Way (~30s):** Same-side interior angles are supplementary: $10x - 10 = 180$ gives $x = 19$, and the larger angle is $7(19) + 4 = 137$.\n\n**The Full Solution:**\nStep 1: Same-side interior angles formed by a transversal cutting parallel lines are supplementary, so $(7x + 4) + (3x - 14) = 180$.\nStep 2: Combine like terms: $10x - 10 = 180$, so $10x = 190$ and $x = 19$.\nStep 3: The two measures are $7(19) + 4 = 137$ and $3(19) - 14 = 43$, so the larger is $137$ degrees. Check: $137 + 43 = 180$. $\\checkmark$\n\n**Common Mistakes:**\n* Setting the expressions equal, which gives $4x = -18$ and the negative value $x = -4.5$ - a signal that the wrong relationship was used.\n* Gridding $x = 19$ instead of an angle measure.\n* Reporting the smaller angle, $43$, when the question asks for the larger.\n\n**Test Day Takeaway:** Same-side interior angles sum to $180°$. After solving for $x$, evaluate both expressions so you can pick the one the question names.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "angles-with-parallel-lines-and-transversals",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  // ─── TRIG RATIO FROM PERIMETER (bank-geo-171..178) ───────────────────────
  // Granularity principle: when only the perimeter is given (one constraint),
  // student must first solve for the sides before taking the trig ratio.
  // Different setup from "given sides, find ratio" (right-triangle-trig-ratios).
  {
    id: "bank-geo-171",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the right triangle shown, the legs have lengths $b$ and $b + 7$, and the hypotenuse has length $17$. If the perimeter of the triangle is $40$, what is the value of $\\sin\\theta$?",
    diagram: { type: "rightTriangle", params: { labels: ["θ", "", ""], sideLabels: ["b + 7", "b", "17"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\frac{8}{17}$" },
      // distractor: gives tan of theta, opposite over adjacent
      { id: "B", text: "$\\frac{8}{15}$" },
      // distractor: gives cos of theta, adjacent over hypotenuse
      { id: "C", text: "$\\frac{15}{17}$" },
      // distractor: inverts the sine ratio, hypotenuse over opposite
      { id: "D", text: "$\\frac{17}{8}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The perimeter gives $2b + 24 = 40$, so $b = 8$ and the sides are $8$, $15$, $17$. Then $\\sin\\theta = \\frac{8}{17}$.\n\n**The Full Solution:**\nStep 1: The perimeter is the sum of the three sides: $b + (b + 7) + 17 = 40$.\nStep 2: $2b + 24 = 40$, so $2b = 16$ and $b = 8$. The legs are $8$ and $15$, and the hypotenuse is $17$.\nStep 3: In the figure, $\\theta$ is opposite the leg of length $b = 8$, so $\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{8}{17}$. Check: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{8}{15}$): this is $\\tan\\theta$, opposite over adjacent, not opposite over hypotenuse.\n* Choice C ($\\frac{15}{17}$): this is $\\cos\\theta$, the adjacent leg over the hypotenuse.\n* Choice D ($\\frac{17}{8}$): inverts the sine ratio. Sine of an acute angle is always less than $1$, so any value above $1$ is automatically wrong.\n\n**Test Day Takeaway:** Use the perimeter to turn algebraic side lengths into numbers first; only then read the ratio off the figure.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-trigonometry-with-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-172",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "fill-in",
    question: "A right triangle has a perimeter of $56$ and one leg of length $7$. What is the value of $\\cos\\theta$, where $\\theta$ is the larger acute angle of the triangle? Express your answer as a fraction.",
    correctAnswer: "7/25",
    explanation: "**SAT Pattern: Right Triangle Trig — Perimeter Constraint to Sides**\n\n**The correct answer is $\\frac{7}{25}$.**\n\n**The Fast Way (~50s):** With $b + c = 49$ and $c^2 - b^2 = 49$, the difference $c - b$ is $1$, so $c = 25$ and $b = 24$. The larger acute angle sits opposite the $24$ leg, so $\\cos\\theta = \\frac{7}{25}$.\n\n**The Full Solution:**\nStep 1: Let the other leg be $b$ and the hypotenuse be $c$. The perimeter gives $7 + b + c = 56$, so $b + c = 49$.\nStep 2: The Pythagorean theorem gives $c^2 - b^2 = 49$, and factoring the left side gives $(c - b)(c + b) = 49$. Since $c + b = 49$, it follows that $c - b = 1$. Solving $c + b = 49$ and $c - b = 1$ gives $c = 25$ and $b = 24$.\nStep 3: The larger acute angle is opposite the longer leg, $24$, so its adjacent leg is $7$ and $\\cos\\theta = \\frac{7}{25}$. Check: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $\\frac{24}{25}$, which is $\\sin\\theta$ for the larger acute angle rather than $\\cos\\theta$.\n* Attaching $\\theta$ to the smaller acute angle, which gives $\\cos\\theta = \\frac{24}{25}$ instead.\n* Assuming the remaining $49$ units split evenly, $b = c = 24.5$, which cannot satisfy $b^2 + 49 = c^2$.\n\n**Test Day Takeaway:** A perimeter plus one leg pins the whole triangle: the difference of squares $(c - b)(c + b) = a^2$ turns two unknowns into a two-line linear system.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-trigonometry-with-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-geo-173",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In a right triangle, the ratio of the longer leg to the hypotenuse is $4 : 5$, and the perimeter of the triangle is $96$. What is the value of $\\cos\\theta$, where $\\theta$ is the larger acute angle of the triangle?",
    choices: [
      { id: "A", text: "$\\frac{3}{5}$" },
      // distractor: gives tan of the smaller acute angle
      { id: "B", text: "$\\frac{3}{4}$" },
      // distractor: gives sin of theta rather than cos
      { id: "C", text: "$\\frac{4}{5}$" },
      // distractor: gives tan of theta rather than cos
      { id: "D", text: "$\\frac{4}{3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** A $4 : 5$ leg-to-hypotenuse ratio completes to the $3$-$4$-$5$ family, so $12k = 96$ gives sides $24$, $32$, $40$, and $\\cos\\theta = \\frac{24}{40} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: Let the longer leg be $4k$ and the hypotenuse be $5k$. The other leg is $\\sqrt{(5k)^2 - (4k)^2} = \\sqrt{9k^2} = 3k$, so the three sides are $3k$, $4k$, and $5k$.\nStep 2: The perimeter gives $3k + 4k + 5k = 12k = 96$, so $k = 8$ and the sides are $24$, $32$, and $40$.\nStep 3: The larger acute angle lies opposite the longer leg, so $\\theta$ is opposite $32$; its adjacent leg is $24$ and the hypotenuse is $40$. Then $\\cos\\theta = \\frac{24}{40} = \\frac{3}{5}$. Check: $24^2 + 32^2 = 576 + 1{,}024 = 1{,}600 = 40^2$, and $24 + 32 + 40 = 96$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3}{4}$): this is $\\frac{24}{32}$, the tangent of the smaller acute angle.\n* Choice C ($\\frac{4}{5}$): this is $\\frac{32}{40}$, which is $\\sin\\theta$ - it is the ratio handed to you in the question, not the one asked for.\n* Choice D ($\\frac{4}{3}$): this is $\\frac{32}{24}$, which is $\\tan\\theta$.\n\n**Test Day Takeaway:** One side ratio fixes the whole triangle, and the perimeter only fixes the scale. Complete the triple first, then decide which angle is larger before choosing numerator and denominator.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-trigonometry-with-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-174",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the right triangle shown, the legs have lengths $a$ and $a + 1$, and the hypotenuse has length $29$. If the perimeter of the triangle is $70$, what is the value of $\\cos\\theta$? Express your answer as a fraction.",
    diagram: { type: "rightTriangle", params: { labels: ["", "", "θ"], sideLabels: ["a + 1", "a", "29"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "20/29",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is $\\frac{20}{29}$.**\n\n**The Fast Way (~30s):** The perimeter gives $2a + 30 = 70$, so $a = 20$ and the legs are $20$ and $21$. Since $\\theta$ is opposite the $21$ leg, $\\cos\\theta = \\frac{20}{29}$.\n\n**The Full Solution:**\nStep 1: The perimeter is the sum of the three sides: $a + (a + 1) + 29 = 70$.\nStep 2: $2a + 30 = 70$, so $2a = 40$ and $a = 20$. The legs are $20$ and $21$.\nStep 3: In the figure, $\\theta$ is opposite the leg of length $a + 1 = 21$, so the adjacent leg is $20$ and $\\cos\\theta = \\frac{20}{29}$. Check: $20^2 + 21^2 = 400 + 441 = 841 = 29^2$. $\\checkmark$\n\n**Common Mistakes:**\n* Reporting $\\frac{21}{29}$, which is $\\sin\\theta$ - the leg opposite $\\theta$ over the hypotenuse.\n* Reporting $\\frac{21}{20}$, which is $\\tan\\theta$ and, being greater than $1$, cannot be a cosine.\n* Stopping at $a = 20$ and gridding a side length instead of a ratio.\n\n**Test Day Takeaway:** Solve the perimeter equation for the variable, label both legs, and only then decide which leg is adjacent to the marked angle.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-trigonometry-with-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-175",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In right triangle $ABC$, angle $C$ is a right angle and the perimeter of the triangle is $90$. If $\\tan A = \\frac{5}{12}$, what is the length of side $BC$?",
    choices: [
      // distractor: reports the scale factor k instead of a side length
      { id: "A", text: "$3$" },
      { id: "B", text: "$15$" },
      // distractor: gives AC, the leg adjacent to angle A
      { id: "C", text: "$36$" },
      // distractor: gives AB, the hypotenuse
      { id: "D", text: "$39$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $\\tan A = \\frac{5}{12}$ makes the sides $5k$, $12k$, $13k$. The perimeter gives $30k = 90$, so $k = 3$ and $BC = 5(3) = 15$.\n\n**The Full Solution:**\nStep 1: Angle $C$ is the right angle, so $BC$ is opposite angle $A$ and $AC$ is adjacent to it. Then $\\tan A = \\frac{BC}{AC} = \\frac{5}{12}$, so $BC = 5k$ and $AC = 12k$.\nStep 2: The hypotenuse is $AB = \\sqrt{(5k)^2 + (12k)^2} = 13k$, so the perimeter is $5k + 12k + 13k = 30k = 90$ and $k = 3$.\nStep 3: $BC = 5k = 15$. Check: the sides are $15$, $36$, and $39$, which sum to $90$, and $15^2 + 36^2 = 225 + 1{,}296 = 1{,}521 = 39^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the scale factor $k$ rather than the side $5k$.\n* Choice C ($36$): gives $AC = 12k$, the leg adjacent to angle $A$.\n* Choice D ($39$): gives $AB = 13k$, the hypotenuse.\n\n**Test Day Takeaway:** A tangent value hands you the two legs as multiples of $k$; the hypotenuse follows, and the perimeter fixes $k$. Then read off the side actually named.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-trigonometry-with-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-176",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "hard",
    type: "fill-in",
    question: "A right triangle has a perimeter of $30$ and an area of $30$. What is the value of $\\sin\\theta$, where $\\theta$ is the smallest angle of the triangle? Express your answer as a fraction.",
    correctAnswer: "5/13",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is $\\frac{5}{13}$.**\n\n**The Fast Way (~60s):** From $a + b = 30 - c$ and $ab = 60$, squaring gives $(30 - c)^2 = c^2 + 120$, so $c = 13$ and the legs are $5$ and $12$. Then $\\sin\\theta = \\frac{5}{13}$.\n\n**The Full Solution:**\nStep 1: Let the legs be $a$ and $b$ and the hypotenuse be $c$. The area gives $\\frac{1}{2}ab = 30$, so $ab = 60$, and the perimeter gives $a + b = 30 - c$.\nStep 2: Square the perimeter relation: $(a + b)^2 = a^2 + b^2 + 2ab = c^2 + 120$. So $(30 - c)^2 = c^2 + 120$, which expands to $900 - 60c = 120$, giving $c = 13$.\nStep 3: Then $a + b = 17$ and $ab = 60$, so the legs solve $t^2 - 17t + 60 = 0$, giving $t = 5$ and $t = 12$. The smallest angle is opposite the shortest side, so $\\sin\\theta = \\frac{5}{13}$. Check: $5 + 12 + 13 = 30$ and $\\frac{1}{2}(5)(12) = 30$. $\\checkmark$\n\n**Common Mistakes:**\n* Pairing $\\theta$ with the longer leg, which gives $\\frac{12}{13}$ - but the smallest angle always faces the shortest side.\n* Using $ab = 30$ instead of $ab = 60$ by forgetting the factor $\\frac{1}{2}$ in the area formula.\n* Gridding the side length $5$ or the hypotenuse $13$ instead of the ratio.\n\n**Test Day Takeaway:** Perimeter and area together determine a right triangle. Square the sum of the legs so that $a^2 + b^2$ becomes $c^2$, and the hypotenuse falls out in one line.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-trigonometry-with-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-177",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the right triangle shown, the hypotenuse has a length of $37$ and one leg has a length of $35$. If the perimeter of the triangle is $84$, which of the following is closest to the value of $\\tan\\theta$?",
    diagram: { type: "rightTriangle", params: { labels: ["θ", "", ""], sideLabels: ["35", "", "37"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: gives sin of theta instead of tan
      { id: "A", text: "$0.32$" },
      { id: "B", text: "$0.34$" },
      // distractor: gives cos of theta instead of tan
      { id: "C", text: "$0.95$" },
      // distractor: inverts the tangent ratio, adjacent over opposite
      { id: "D", text: "$2.92$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The missing leg is $84 - 37 - 35 = 12$, and $\\theta$ is opposite it, so $\\tan\\theta = \\frac{12}{35} \\approx 0.34$.\n\n**The Full Solution:**\nStep 1: The three sides sum to the perimeter, so the unlabeled leg is $84 - 35 - 37 = 12$.\nStep 2: In the figure, $\\theta$ is opposite the leg of length $12$ and adjacent to the leg of length $35$.\nStep 3: $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{12}{35} \\approx 0.343$, which is closest to $0.34$. Check: $12^2 + 35^2 = 144 + 1{,}225 = 1{,}369 = 37^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.32$): this is $\\frac{12}{37} \\approx 0.324$, which is $\\sin\\theta$, using the hypotenuse instead of the adjacent leg.\n* Choice C ($0.95$): this is $\\frac{35}{37} \\approx 0.946$, which is $\\cos\\theta$.\n* Choice D ($2.92$): this is $\\frac{35}{12} \\approx 2.917$, the tangent of the other acute angle.\n\n**Test Day Takeaway:** When the perimeter and two sides are given, subtract to get the third side before touching any ratio. Then let SOH-CAH-TOA pick the two sides the ratio needs.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-trigonometry-with-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-178",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "hard",
    type: "fill-in",
    question: "In a right triangle, one acute angle $\\theta$ satisfies $\\tan\\theta = \\frac{40}{9}$, and the perimeter of the triangle is $180$. What is the area of the triangle?",
    correctAnswer: "720",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is $720$.**\n\n**The Fast Way (~50s):** The sides are $9k$, $40k$, $41k$, so $90k = 180$ and $k = 2$. The legs are $18$ and $80$, giving an area of $\\frac{1}{2}(18)(80) = 720$.\n\n**The Full Solution:**\nStep 1: $\\tan\\theta = \\frac{40}{9}$ means the leg opposite $\\theta$ is $40k$ and the leg adjacent is $9k$ for some positive $k$.\nStep 2: The hypotenuse is $\\sqrt{(9k)^2 + (40k)^2} = \\sqrt{1{,}681k^2} = 41k$, so the perimeter is $9k + 40k + 41k = 90k = 180$ and $k = 2$.\nStep 3: The legs are $18$ and $80$, so the area is $\\frac{1}{2}(18)(80) = 720$. Check: $18 + 80 + 82 = 180$ and $18^2 + 80^2 = 324 + 6{,}400 = 6{,}724 = 82^2$. $\\checkmark$\n\n**Common Mistakes:**\n* Using the unscaled legs $9$ and $40$, which gives an area of $180$ - the value of the perimeter, not the area.\n* Forgetting the factor $\\frac{1}{2}$, which gives $1{,}440$.\n* Using the hypotenuse as a leg: $\\frac{1}{2}(80)(82) = 3{,}280$.\n\n**Test Day Takeaway:** A tangent value fixes the shape, and the perimeter fixes the size. Scale both legs before computing any area.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "right-triangle-trigonometry-with-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  // ─── LINE TANGENT TO CIRCLE (bank-geo-179..186) ──────────────────────────
  // Granularity principle: line tangent to circle uses distance-from-center =
  // radius OR substitute-into-circle-equation paths. Distinct from line
  // tangent to parabola (which sets discriminant = 0 on a single quadratic
  // in x). Different geometric setup.
  {
    id: "bank-geo-179",
    domain: "geometry",
    skills: ["tangent-lines"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, a line passes through the origin and is tangent to the circle with equation $(x - 5)^2 + y^2 = 9$. What is one possible slope of this line?",
    choices: [
      // distractor: uses the radius over the center distance instead of the tangent-length ratio
      { id: "A", text: "$\\frac{3}{5}$" },
      { id: "B", text: "$\\frac{3}{4}$" },
      // distractor: inverts the correct ratio, using the tangent length over the radius
      { id: "C", text: "$\\frac{4}{3}$" },
      // distractor: uses the center distance over the radius
      { id: "D", text: "$\\frac{5}{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** Tangency means the distance from $(5, 0)$ to $y = mx$ equals $3$: $\\frac{|5m|}{\\sqrt{m^2 + 1}} = 3$ gives $16m^2 = 9$, so $m = \\frac{3}{4}$ is one possible slope.\n\n**The Full Solution:**\nStep 1: The circle has center $(5, 0)$ and radius $3$. A line through the origin has the form $y = mx$, or $mx - y = 0$.\nStep 2: A line is tangent to a circle exactly when its distance from the center equals the radius: $\\frac{|5m - 0|}{\\sqrt{m^2 + 1}} = 3$. Squaring gives $25m^2 = 9m^2 + 9$.\nStep 3: $16m^2 = 9$, so $m^2 = \\frac{9}{16}$ and $m = \\pm\\frac{3}{4}$. One possible slope is $\\frac{3}{4}$. Check: substituting $y = \\frac{3}{4}x$ into the circle equation gives $\\frac{25}{16}x^2 - 10x + 16 = 0$, whose discriminant is $100 - 100 = 0$, so the line meets the circle exactly once. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{5}$): uses radius over center distance, $\\frac{3}{5}$, which is the sine of the angle between the $x$-axis and the tangent line, not its slope.\n* Choice C ($\\frac{4}{3}$): inverts the correct ratio, using the tangent length $4$ over the radius $3$ in the wrong order.\n* Choice D ($\\frac{5}{3}$): uses the distance to the center over the radius.\n\n**Test Day Takeaway:** Tangency has two equivalent tests: distance from center equals radius, or the substituted quadratic has discriminant $0$. The distance test is usually the faster line of algebra.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-to-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-180",
    domain: "geometry",
    skills: ["tangent-lines"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the line $x = c$ is tangent to the circle with equation $(x + 3)^2 + (y - 7)^2 = 36$, and $c > 0$. What is the value of $c$?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~25s):** The center is $(-3, 7)$ with radius $6$, so the vertical tangents are $x = -3 \\pm 6$. The positive one is $x = 3$.\n\n**The Full Solution:**\nStep 1: Write the equation as $(x - (-3))^2 + (y - 7)^2 = 6^2$, so the center is $(-3, 7)$ and the radius is $6$.\nStep 2: A vertical line is tangent to a circle exactly when its distance from the center equals the radius, so $|c - (-3)| = 6$ and $c = -3 + 6$ or $c = -3 - 6$.\nStep 3: The two vertical tangents are $x = 3$ and $x = -9$. Since $c > 0$, $c = 3$. Check: substituting $x = 3$ gives $36 + (y - 7)^2 = 36$, so $y = 7$ is the only solution - exactly one point of contact. $\\checkmark$\n\n**Common Mistakes:**\n* Reading the center as $(3, 7)$ from $(x + 3)^2$; the sign inside the parentheses is the opposite of the coordinate, which would give $c = 9$.\n* Using $36$ as the radius instead of $r^2$, giving $c = 33$.\n* Using the $y$-coordinate of the center, $7$, which locates the horizontal tangents $y = 1$ and $y = 13$, not the vertical ones.\n\n**Test Day Takeaway:** Vertical tangents sit one radius left and right of the center; horizontal tangents sit one radius above and below. Read the center's signs carefully and take the square root of the right side.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-to-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-181",
    domain: "geometry",
    skills: ["tangent-lines"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the line $3x + 4y = 20$ is tangent to a circle whose center is the origin. What is the radius of the circle?",
    choices: [
      { id: "A", text: "$4$" },
      // distractor: reports the denominator sqrt(9+16)=5
      { id: "B", text: "$5$" },
      // distractor: inverts the quotient, 25/4
      { id: "C", text: "$6.25$" },
      // distractor: reads the constant 20 as the distance
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** A tangent line sits exactly one radius from the center, so $r$ is the distance from $(0, 0)$ to $3x + 4y - 20 = 0$: $r = \\frac{|-20|}{\\sqrt{3^2 + 4^2}} = \\frac{20}{5} = 4$.\n\n**The Full Solution:**\nStep 1: The distance from a point $(x_0, y_0)$ to the line $Ax + By + C = 0$ is $\\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$. Tangency means that distance equals the radius.\nStep 2: With $A = 3$, $B = 4$, $C = -20$ and the center $(0, 0)$, the numerator is $|3(0) + 4(0) - 20| = 20$ and the denominator is $\\sqrt{9 + 16} = 5$.\nStep 3: $r = \\frac{20}{5} = 4$.\n\nVerification: substituting $y = \\frac{20 - 3x}{4}$ into $x^2 + y^2 = 16$ gives $25x^2 - 120x + 144 = 0$, whose discriminant is $120^2 - 4(25)(144) = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): reports $\\sqrt{3^2 + 4^2} = 5$, the denominator of the distance formula, instead of finishing the division.\n* Choice C ($6.25$): inverts the quotient and computes $\\frac{25}{20}\\cdot 5 = \\frac{25}{4}$ rather than $\\frac{20}{5}$.\n* Choice D ($20$): treats the constant term $20$ as the distance, forgetting to divide by $\\sqrt{A^2 + B^2}$.\n\n**Test Day Takeaway:** Tangent to a circle means distance from center to line $=$ radius. The point-to-line distance formula turns that sentence into one computation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-to-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-182",
    domain: "geometry",
    skills: ["tangent-lines"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, the line $y = mx$ is tangent to the circle $x^2 + (y - 5)^2 = 9$, where $m > 0$. What is the value of $m^2$?",
    correctAnswer: "16/9",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**The correct answer is $\\frac{16}{9}$.**\n\n**The Fast Way (~35s):** The center is $(0, 5)$ and the radius is $3$, so $\\frac{|{-5}|}{\\sqrt{m^2 + 1}} = 3$. Then $\\sqrt{m^2 + 1} = \\frac{5}{3}$, so $m^2 + 1 = \\frac{25}{9}$ and $m^2 = \\frac{16}{9}$.\n\n**The Full Solution:**\nStep 1: Write the line as $mx - y = 0$. The circle $x^2 + (y - 5)^2 = 9$ has center $(0, 5)$ and radius $3$.\nStep 2: Tangency means the distance from the center to the line equals the radius: $\\frac{|m(0) - 5|}{\\sqrt{m^2 + 1}} = 3$, so $\\frac{5}{\\sqrt{m^2 + 1}} = 3$.\nStep 3: Cross-multiply and square: $\\sqrt{m^2 + 1} = \\frac{5}{3}$, so $m^2 + 1 = \\frac{25}{9}$ and $m^2 = \\frac{25}{9} - 1 = \\frac{16}{9}$.\n\nVerification: with $m = \\frac{4}{3}$, substituting $y = \\frac{4}{3}x$ into the circle gives $\\frac{25}{9}x^2 - \\frac{40}{3}x + 16 = 0$, and the discriminant is $\\left(\\frac{40}{3}\\right)^2 - 4\\left(\\frac{25}{9}\\right)(16) = \\frac{1600}{9} - \\frac{1600}{9} = 0$. $\\checkmark$\n\n**Common Mistakes:** Solving all the way to $m = \\frac{4}{3}$ and gridding that instead of $m^2$. Reading the radius off the equation as $9$ instead of $3$, which forces $m^2 + 1 = \\frac{25}{81}$ and leaves $m^2 = -\\frac{56}{81}$, a value no real slope can produce. Forgetting the $\\sqrt{m^2 + 1}$ denominator entirely and writing $5 = 3m$.\n\n**Test Day Takeaway:** For a line through the origin tangent to a circle, the distance formula collapses to $\\frac{|c|}{\\sqrt{m^2+1}} = r$, where $c$ comes from the center. Square once and the algebra is linear in $m^2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-to-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-183",
    domain: "geometry",
    skills: ["tangent-lines"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $(x + 4)^2 + (y - 7)^2 = 25$ is a circle. The horizontal line $y = k$ is tangent to this circle at its lowest point. What is the value of $k$?",
    choices: [
      // distractor: subtracts 25 instead of the radius 5
      { id: "A", text: "$-18$" },
      { id: "B", text: "$2$" },
      // distractor: gives the y-coordinate of the center
      { id: "C", text: "$7$" },
      // distractor: adds the radius, giving the highest point
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Center $(-4, 7)$, radius $\\sqrt{25} = 5$. The lowest point sits $5$ units below the center, so $k = 7 - 5 = 2$.\n\n**The Full Solution:**\nStep 1: In $(x - h)^2 + (y - k)^2 = r^2$, the center is $(h, k)$ and the radius is $r$. Here the center is $(-4, 7)$ and $r = \\sqrt{25} = 5$.\nStep 2: A horizontal tangent touches the circle at the point directly above or directly below the center, one radius away.\nStep 3: The lowest point is $(-4, 7 - 5) = (-4, 2)$, so the tangent line is $y = 2$ and $k = 2$.\n\nVerification: substituting $y = 2$ into the circle gives $(x + 4)^2 + 25 = 25$, so $(x+4)^2 = 0$ — a single point of contact. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-18$): subtracts $25$, the right side of the equation, instead of the radius $5$.\n* Choice C ($7$): reports the $y$-coordinate of the center; that horizontal line cuts the circle in two points rather than touching it.\n* Choice D ($12$): adds the radius, which locates the tangent at the highest point, not the lowest.\n\n**Test Day Takeaway:** The right side of a circle equation is $r^2$, not $r$. Take the square root before you step off a radius from the center.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-to-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-184",
    domain: "geometry",
    skills: ["tangent-lines"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, a line passes through the point $(0, 13)$ and is tangent to the circle $x^2 + y^2 = 25$. What is one possible slope of this line?",
    choices: [
      // distractor: radius over distance to center
      { id: "A", text: "$\\frac{5}{13}$" },
      // distractor: inverts: radius over tangent length
      { id: "B", text: "$\\frac{5}{12}$" },
      // distractor: tangent length over distance to center
      { id: "C", text: "$\\frac{12}{13}$" },
      { id: "D", text: "$\\frac{12}{5}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The line is $y = mx + 13$, so $\\frac{13}{\\sqrt{m^2 + 1}} = 5$. Then $m^2 + 1 = \\frac{169}{25}$, so $m^2 = \\frac{144}{25}$ and $m = \\frac{12}{5}$.\n\n**The Full Solution:**\nStep 1: Any non-vertical line through $(0, 13)$ has the form $y = mx + 13$, or $mx - y + 13 = 0$. The circle has center $(0, 0)$ and radius $5$.\nStep 2: Tangency forces the distance from the origin to the line to equal $5$: $\\frac{|13|}{\\sqrt{m^2 + 1}} = 5$.\nStep 3: So $\\sqrt{m^2 + 1} = \\frac{13}{5}$, giving $m^2 + 1 = \\frac{169}{25}$ and $m^2 = \\frac{144}{25}$. The two tangent lines have slopes $\\pm\\frac{12}{5}$, and $\\frac{12}{5}$ is listed.\n\nVerification: the radius, the tangent segment, and the segment from the center to $(0,13)$ form a right triangle with legs $5$ and $12$ and hypotenuse $13$; the slope magnitude is $\\frac{12}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{13}$): divides the radius by the distance from the center to the external point, a ratio that gives $\\sin$ of the half-angle, not the slope.\n* Choice B ($\\frac{5}{12}$): inverts the legs — uses radius over tangent length instead of tangent length over radius.\n* Choice C ($\\frac{12}{13}$): pairs the tangent length with the hypotenuse $13$ instead of with the radius $5$.\n\n**Test Day Takeaway:** Drop the perpendicular from the center to the tangent line: the radius, the tangent length, and the center-to-point distance form a right triangle. Here it is the $5$-$12$-$13$ triple.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-to-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-185",
    domain: "geometry",
    skills: ["tangent-lines"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, the line $5x - 12y = c$ is tangent to the circle $x^2 + y^2 = 9$, where $c > 0$. What is the value of $c$?",
    correctAnswer: "39",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**The correct answer is $39$.**\n\n**The Fast Way (~25s):** The distance from $(0, 0)$ to $5x - 12y - c = 0$ must equal the radius $3$: $\\frac{|c|}{\\sqrt{25 + 144}} = 3$, so $\\frac{c}{13} = 3$ and $c = 39$.\n\n**The Full Solution:**\nStep 1: The circle $x^2 + y^2 = 9$ has center $(0, 0)$ and radius $\\sqrt{9} = 3$.\nStep 2: The distance from the origin to $5x - 12y - c = 0$ is $\\frac{|5(0) - 12(0) - c|}{\\sqrt{5^2 + (-12)^2}} = \\frac{|c|}{13}$.\nStep 3: Set that equal to the radius: $\\frac{|c|}{13} = 3$, so $|c| = 39$. Since $c > 0$, $c = 39$.\n\nVerification: substituting $x = \\frac{39 + 12y}{5}$ into $x^2 + y^2 = 9$ gives $169y^2 + 936y + 1296 = 0$, and $936^2 - 4(169)(1296) = 876096 - 876096 = 0$. $\\checkmark$\n\n**Common Mistakes:** Forgetting the square root in the denominator and computing $c = 3 \\cdot 169 = 507$. Reading the radius as $9$ instead of $3$ and getting $c = 9 \\cdot 13 = 117$. Dropping the condition $c > 0$ and gridding $-39$, which the grid would mark wrong.\n\n**Test Day Takeaway:** With $5$ and $12$ as the coefficients, $\\sqrt{5^2 + 12^2} = 13$ falls out instantly. Recognizing Pythagorean triples inside the distance formula saves the whole computation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-to-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-186",
    domain: "geometry",
    skills: ["tangent-lines"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, a circle with center $(0, k)$ is tangent to both the line $y = \\frac{3}{4}x$ and the line $y = -\\frac{3}{4}x$. If the radius of the circle is $6$, what is the value of $|k|$?",
    choices: [
      // distractor: multiplies 6 by 3/4 instead of 5/4
      { id: "A", text: "$4.5$" },
      // distractor: reports the radius itself
      { id: "B", text: "$6$" },
      { id: "C", text: "$7.5$" },
      // distractor: divides by 3 instead of by 4
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Write $y = \\frac{3}{4}x$ as $3x - 4y = 0$. The distance from $(0, k)$ to it is $\\frac{|-4k|}{5} = \\frac{4|k|}{5}$. Setting $\\frac{4|k|}{5} = 6$ gives $|k| = 7.5$.\n\n**The Full Solution:**\nStep 1: Clear the fraction: $y = \\frac{3}{4}x$ becomes $3x - 4y = 0$, and $y = -\\frac{3}{4}x$ becomes $3x + 4y = 0$. Both have $\\sqrt{3^2 + 4^2} = 5$ in the denominator.\nStep 2: The distance from $(0, k)$ to $3x - 4y = 0$ is $\\frac{|3(0) - 4k|}{5} = \\frac{4|k|}{5}$. By symmetry the distance to the other line is the same, so one equation handles both tangencies.\nStep 3: Tangency means that distance equals the radius: $\\frac{4|k|}{5} = 6$, so $|k| = \\frac{30}{4} = 7.5$.\n\nVerification: with $k = 7.5$, the distance is $\\frac{4(7.5)}{5} = 6$, exactly the radius. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.5$): scales the radius by $\\frac{3}{4}$, using the slope instead of the $\\frac{5}{4}$ that the distance formula produces.\n* Choice B ($6$): reports the radius, as if the center were one radius from the origin rather than from each line.\n* Choice D ($10$): divides by the coefficient $3$ instead of $4$, computing $6 \\cdot \\frac{5}{3}$.\n\n**Test Day Takeaway:** Convert a slope-intercept line to $Ax + By = 0$ before using the distance formula. With a center on an axis, one of the two terms in the numerator vanishes and the algebra is one step.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-to-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  // ─── SYMBOLIC AREA OR VOLUME (bank-geo-187..194) ──────────────────────────
  // Area/volume/surface area expressed in terms of a variable (in terms of t,
  // x, etc.) — mixes Equivalent-Expressions skill into Geometry stems. CB
  // precedent: PT11-M1-Q26. See audit §B6.
  {
    id: "bank-geo-187",
    domain: "geometry",
    skills: ["volume-prism", "algebraic-expressions"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A right rectangular prism has a square base with side length $3n$ centimeters and a height of $7n$ centimeters. Which expression gives the volume, in cubic centimeters, of the prism?",
    choices: [
      // distractor: uses only two of the three dimensions
      { id: "A", text: "$21n^2$" },
      // distractor: squares the variable but not the coefficient
      { id: "B", text: "$21n^3$" },
      // distractor: adds the exponents incorrectly
      { id: "C", text: "$63n^2$" },
      { id: "D", text: "$63n^3$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Volume $=$ (base area)(height) $= (3n)^2(7n) = 9n^2 \\cdot 7n = 63n^3$.\n\n**The Full Solution:**\nStep 1: The base is a square with side $3n$, so its area is $(3n)^2 = 9n^2$ square centimeters.\nStep 2: Multiply by the height: $V = 9n^2 \\cdot 7n$.\nStep 3: Multiply coefficients and add exponents: $9 \\cdot 7 = 63$ and $n^2 \\cdot n = n^3$, so $V = 63n^3$.\n\nVerification: at $n = 1$ the prism is $3$ by $3$ by $7$, with volume $63$, and $63(1)^3 = 63$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($21n^2$): multiplies only two of the three dimensions, $(3n)(7n)$; that is the area of a side face, not a volume.\n* Choice B ($21n^3$): squares the variable but not the coefficient, using $3n^2$ in place of $(3n)^2 = 9n^2$.\n* Choice C ($63n^2$): gets the coefficient right but keeps the exponent at $2$, as if $n^2 \\cdot n = n^2$.\n\n**Test Day Takeaway:** When a dimension is $3n$, squaring it squares the $3$ as well. A quick $n = 1$ substitution catches every coefficient slip in these symbolic volume choices.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "symbolic-area-or-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-188",
    domain: "geometry",
    skills: ["triangle-area", "algebraic-expressions"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A rectangular plot of land is $(x + 7)$ meters long and $(x + 2)$ meters wide. Which expression gives the area, in square meters, of the plot?",
    choices: [
      // distractor: multiplies first and last terms only
      { id: "A", text: "$x^2 + 14$" },
      // distractor: adds 7 and 2 for the constant term
      { id: "B", text: "$x^2 + 9x + 9$" },
      { id: "C", text: "$x^2 + 9x + 14$" },
      // distractor: multiplies 7 and 2 for the middle coefficient
      { id: "D", text: "$x^2 + 14x + 14$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Area $= (x + 7)(x + 2) = x^2 + (7 + 2)x + (7)(2) = x^2 + 9x + 14$.\n\n**The Full Solution:**\nStep 1: The area of a rectangle is length times width, so the area is $(x + 7)(x + 2)$.\nStep 2: Expand: $x \\cdot x + x \\cdot 2 + 7 \\cdot x + 7 \\cdot 2 = x^2 + 2x + 7x + 14$.\nStep 3: Combine like terms: $x^2 + 9x + 14$.\n\nVerification: at $x = 3$ the plot is $10$ by $5$, area $50$, and $3^2 + 9(3) + 14 = 9 + 27 + 14 = 50$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2 + 14$): multiplies only the first terms and only the last terms, skipping the two cross products.\n* Choice B ($x^2 + 9x + 9$): adds $7 + 2$ for the constant term instead of multiplying them.\n* Choice D ($x^2 + 14x + 14$): multiplies $7 \\cdot 2$ for the coefficient of $x$ instead of adding them.\n\n**Test Day Takeaway:** In $(x + a)(x + b)$ the middle coefficient is $a + b$ and the constant is $ab$. Testing one convenient value of $x$ eliminates the swapped versions in seconds.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "symbolic-area-or-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-189",
    domain: "geometry",
    skills: ["volume-prism", "algebraic-expressions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A right circular cylinder has a radius of $2k$ inches and a height of $5k$ inches. Which expression gives the volume, in cubic inches, of the cylinder?",
    choices: [
      // distractor: never squares the radius
      { id: "A", text: "$10\\pi k^2$" },
      // distractor: squares the variable but not the coefficient
      { id: "B", text: "$10\\pi k^3$" },
      // distractor: adds the exponents incorrectly
      { id: "C", text: "$20\\pi k^2$" },
      { id: "D", text: "$20\\pi k^3$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $V = \\pi r^2 h = \\pi(2k)^2(5k) = \\pi(4k^2)(5k) = 20\\pi k^3$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^2 h$.\nStep 2: Substitute $r = 2k$ and $h = 5k$: $V = \\pi(2k)^2(5k)$.\nStep 3: Square the radius first, $(2k)^2 = 4k^2$, then multiply: $\\pi \\cdot 4k^2 \\cdot 5k = 20\\pi k^3$.\n\nVerification: at $k = 1$ the cylinder has radius $2$ and height $5$, so $V = \\pi(4)(5) = 20\\pi$, matching $20\\pi(1)^3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10\\pi k^2$): multiplies $r$ by $h$ without squaring the radius, computing $\\pi(2k)(5k)$.\n* Choice B ($10\\pi k^3$): squares only the variable, using $2k^2$ in place of $(2k)^2 = 4k^2$.\n* Choice C ($20\\pi k^2$): finds the right coefficient but treats $k^2 \\cdot k$ as $k^2$.\n\n**Test Day Takeaway:** Square the entire radius, coefficient included, before multiplying by the height. Doubling the radius quadruples the volume, which is why $2k$ contributes a factor of $4$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "symbolic-area-or-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-190",
    domain: "geometry",
    skills: ["triangle-area", "algebraic-expressions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The two legs of a right triangle have lengths $3w$ and $8w$. Which expression gives the area of the triangle?",
    choices: [
      // distractor: halves both legs before multiplying
      { id: "A", text: "$6w^2$" },
      { id: "B", text: "$12w^2$" },
      // distractor: omits the one-half factor
      { id: "C", text: "$24w^2$" },
      // distractor: doubles instead of halving
      { id: "D", text: "$48w^2$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In a right triangle the legs are the base and height, so the area is $\\frac{1}{2}(3w)(8w) = 12w^2$.\n\n**The Full Solution:**\nStep 1: The area of a triangle is $\\frac{1}{2}bh$, and in a right triangle the two legs meet at a right angle, so they serve as $b$ and $h$.\nStep 2: Substitute: area $= \\frac{1}{2}(3w)(8w)$.\nStep 3: Multiply: $3 \\cdot 8 = 24$, and half of $24w^2$ is $12w^2$.\n\nVerification: at $w = 2$ the legs are $6$ and $16$, giving area $\\frac{1}{2}(6)(16) = 48$, and $12(2)^2 = 48$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6w^2$): halves each leg before multiplying, computing $(1.5w)(4w)$ — the $\\frac{1}{2}$ applies once to the product, not to both factors.\n* Choice C ($24w^2$): multiplies the legs but never applies the $\\frac{1}{2}$; that is the area of the rectangle the triangle fills half of.\n* Choice D ($48w^2$): doubles the leg product instead of halving it.\n\n**Test Day Takeaway:** Apply the $\\frac{1}{2}$ once, to the finished product. Sanity check: a right triangle is exactly half of the rectangle built on its legs.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "symbolic-area-or-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-191",
    domain: "geometry",
    skills: ["volume-prism", "algebraic-expressions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A shipping crate in the shape of a right rectangular prism has edge lengths $m$, $m + 3$, and $m + 4$ feet. Which expression gives the volume, in cubic feet, of the crate?",
    choices: [
      // distractor: raises only the leading term when multiplying by m
      { id: "A", text: "$m^3 + 7m + 12$" },
      // distractor: fails to distribute m to the constant term
      { id: "B", text: "$m^3 + 7m^2 + 12$" },
      { id: "C", text: "$m^3 + 7m^2 + 12m$" },
      // distractor: swaps the sum and product of 3 and 4
      { id: "D", text: "$m^3 + 12m^2 + 7m$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $(m + 3)(m + 4) = m^2 + 7m + 12$, and multiplying by $m$ gives $m^3 + 7m^2 + 12m$.\n\n**The Full Solution:**\nStep 1: The volume of a right rectangular prism is the product of its three edge lengths: $V = m(m + 3)(m + 4)$.\nStep 2: Expand the two binomials first: $(m + 3)(m + 4) = m^2 + (3 + 4)m + 12 = m^2 + 7m + 12$.\nStep 3: Distribute the remaining factor of $m$ to every term: $m(m^2 + 7m + 12) = m^3 + 7m^2 + 12m$.\n\nVerification: at $m = 2$ the edges are $2$, $5$, $6$, so $V = 60$, and $2^3 + 7(2)^2 + 12(2) = 8 + 28 + 24 = 60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($m^3 + 7m + 12$): raises only the leading term to the third power and leaves the other two terms untouched by the factor of $m$.\n* Choice B ($m^3 + 7m^2 + 12$): distributes $m$ to the first two terms but forgets the constant, which must become $12m$.\n* Choice D ($m^3 + 12m^2 + 7m$): swaps $3 + 4 = 7$ and $3 \\cdot 4 = 12$, putting the product in the $m^2$ slot.\n\n**Test Day Takeaway:** Expand two factors, then distribute the third across every term. Every term of a volume expression must carry the right total degree — here, degree $3$, $2$, and $1$ in order.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "symbolic-area-or-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-192",
    domain: "geometry",
    skills: ["volume-prism", "algebraic-expressions"],
    difficulty: "medium",
    type: "fill-in",
    question: "A right rectangular prism has length $5p$, width $2p$, and height $3p$. The surface area of the prism is $Kp^2$ square units. What is the value of $K$?",
    correctAnswer: "62",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**The correct answer is $62$.**\n\n**The Fast Way (~25s):** $SA = 2(lw + lh + wh) = 2(10 + 15 + 6)p^2 = 62p^2$, so $K = 62$.\n\n**The Full Solution:**\nStep 1: A rectangular prism has three pairs of congruent faces, so $SA = 2(lw + lh + wh)$.\nStep 2: With $l = 5p$, $w = 2p$, $h = 3p$: $lw = 10p^2$, $lh = 15p^2$, and $wh = 6p^2$.\nStep 3: Add and double: $2(10p^2 + 15p^2 + 6p^2) = 2(31p^2) = 62p^2$, so $K = 62$.\n\nVerification: at $p = 1$ the prism is $5$ by $2$ by $3$; its six faces measure $10, 10, 15, 15, 6, 6$, which sum to $62$. $\\checkmark$\n\n**Common Mistakes:** Adding the three distinct face areas and stopping at $31$, forgetting that each face appears twice. Computing the volume $5 \\cdot 2 \\cdot 3 = 30$ instead of the surface area. Doubling the sum of the edge lengths, $2(5 + 2 + 3) = 20$, which mixes a perimeter idea into an area formula.\n\n**Test Day Takeaway:** Surface area counts six faces in three matching pairs. Write the three distinct products first, then double the total once.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "symbolic-area-or-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-193",
    domain: "geometry",
    skills: ["volume-prism", "algebraic-expressions"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The radius of a right circular cylinder is multiplied by $3$, and its height is multiplied by $\\frac{1}{2}$. The volume of the new cylinder is how many times the volume of the original cylinder?",
    choices: [
      // distractor: scales linearly without squaring the radius factor
      { id: "A", text: "$1.5$" },
      { id: "B", text: "$4.5$" },
      // distractor: ignores the change in height
      { id: "C", text: "$9$" },
      // distractor: cubes the radius factor
      { id: "D", text: "$13.5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $V = \\pi r^2 h$, so the factor is $3^2 \\cdot \\frac{1}{2} = 9 \\cdot \\frac{1}{2} = 4.5$.\n\n**The Full Solution:**\nStep 1: The original volume is $V = \\pi r^2 h$. The new cylinder has radius $3r$ and height $\\frac{h}{2}$.\nStep 2: New volume $= \\pi(3r)^2\\left(\\frac{h}{2}\\right) = \\pi(9r^2)\\left(\\frac{h}{2}\\right) = \\frac{9}{2}\\pi r^2 h$.\nStep 3: Compare: $\\frac{9}{2}\\pi r^2 h = 4.5V$, so the new volume is $4.5$ times the original.\n\nVerification: with $r = 2$ and $h = 4$, $V = 16\\pi$; the new cylinder has $r = 6$, $h = 2$, and $V = 72\\pi$, and $\\frac{72}{16} = 4.5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.5$): multiplies the two scale factors as $3 \\cdot \\frac{1}{2}$, treating the radius as if it were not squared.\n* Choice C ($9$): squares the radius factor correctly but ignores the halved height.\n* Choice D ($13.5$): cubes the radius factor, $27 \\cdot \\frac{1}{2}$; the radius appears to the second power in a cylinder, not the third.\n\n**Test Day Takeaway:** In $V = \\pi r^2 h$, a radius factor enters squared and a height factor enters to the first power. Multiply the adjusted factors — never the raw ones.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "symbolic-area-or-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-194",
    domain: "geometry",
    skills: ["volume-prism", "algebraic-expressions"],
    difficulty: "hard",
    type: "fill-in",
    question: "Two right rectangular prisms are similar. Each edge of the second prism is $\\frac{3}{2}$ times the length of the corresponding edge of the first prism. The volume of the second prism is $540$ cubic centimeters. What is the volume, in cubic centimeters, of the first prism?",
    correctAnswer: "160",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**The correct answer is $160$.**\n\n**The Fast Way (~30s):** Volumes scale by the cube of the linear factor: $\\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$. So the first volume is $540 \\div \\frac{27}{8} = 540 \\cdot \\frac{8}{27} = 160$.\n\n**The Full Solution:**\nStep 1: If every edge is multiplied by $k$, each of the three dimensions in the volume product is multiplied by $k$, so the volume is multiplied by $k^3$.\nStep 2: Here $k = \\frac{3}{2}$, so $k^3 = \\frac{27}{8}$ and $V_2 = \\frac{27}{8}V_1$.\nStep 3: Solve for $V_1$: $540 = \\frac{27}{8}V_1$, so $V_1 = 540 \\cdot \\frac{8}{27} = 20 \\cdot 8 = 160$.\n\nVerification: $160 \\cdot \\frac{27}{8} = 20 \\cdot 27 = 540$. $\\checkmark$\n\n**Common Mistakes:** Dividing by the linear factor only, $540 \\div \\frac{3}{2} = 360$. Using the area factor $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$ and getting $540 \\div \\frac{9}{4} = 240$. Multiplying instead of dividing, $540 \\cdot \\frac{27}{8} = 1822.5$, which makes the smaller prism larger than the bigger one.\n\n**Test Day Takeaway:** Lengths scale by $k$, areas by $k^2$, volumes by $k^3$. When the known quantity belongs to the larger figure, divide by the factor rather than multiplying.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "symbolic-area-or-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── SIMILAR FIGURES AREA RATIO (bank-geo-195..202) ──────────────────────
  // When linear dimensions scale by factor k, area scales by k^2, volume by k^3.
  // Distinct from generic Pythagorean / area formulas — focuses on the scaling rule.
  {
    id: "bank-geo-195",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Two regular hexagons are similar. The ratio of the side length of the smaller hexagon to the side length of the larger hexagon is $3:4$. What is the ratio of the area of the smaller hexagon to the area of the larger hexagon?",
    choices: [
      // distractor: reports the linear ratio unsquared
      { id: "A", text: "$3:4$" },
      { id: "B", text: "$9:16$" },
      // distractor: squares but reverses the order
      { id: "C", text: "$16:9$" },
      // distractor: cubes the ratio, which is the volume ratio
      { id: "D", text: "$27:64$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Areas of similar figures scale by the square of the linear ratio: $\\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$.\n\n**The Full Solution:**\nStep 1: A regular hexagon of side $s$ has area $\\frac{3\\sqrt{3}}{2}s^2$, so area is proportional to $s^2$.\nStep 2: If the sides are in the ratio $3:4$, write them as $3t$ and $4t$. The areas are proportional to $(3t)^2 = 9t^2$ and $(4t)^2 = 16t^2$.\nStep 3: The area ratio is $9t^2 : 16t^2 = 9:16$.\n\nVerification: sides $3$ and $4$ give areas $\\frac{3\\sqrt{3}}{2}(9)$ and $\\frac{3\\sqrt{3}}{2}(16)$, a ratio of $9:16$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3:4$): reports the side ratio itself; that is the ratio of lengths, not of areas.\n* Choice C ($16:9$): squares correctly but reverses the order, giving larger to smaller.\n* Choice D ($27:64$): cubes the ratio; $k^3$ is the volume ratio for similar solids, not the area ratio for plane figures.\n\n**Test Day Takeaway:** Lengths scale by $k$, areas by $k^2$, volumes by $k^3$. Read which quantity the question asks for before choosing the power.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-figures-area-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-196",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Two circles are similar. The ratio of the circumference of the first circle to the circumference of the second circle is $5:2$. What is the ratio of the area of the first circle to the area of the second circle?",
    choices: [
      // distractor: squares but inverts the order
      { id: "A", text: "$4:25$" },
      // distractor: reports the linear ratio unsquared
      { id: "B", text: "$5:2$" },
      { id: "C", text: "$25:4$" },
      // distractor: cubes the ratio
      { id: "D", text: "$125:8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Circumference is proportional to radius, so the radii are also in the ratio $5:2$, and the areas are in the ratio $5^2 : 2^2 = 25:4$.\n\n**The Full Solution:**\nStep 1: $C = 2\\pi r$ is linear in $r$, so a circumference ratio of $5:2$ is also a radius ratio of $5:2$.\nStep 2: Write the radii as $5t$ and $2t$. Then the areas are $\\pi(5t)^2 = 25\\pi t^2$ and $\\pi(2t)^2 = 4\\pi t^2$.\nStep 3: The ratio of the areas is $25\\pi t^2 : 4\\pi t^2 = 25:4$.\n\nVerification: radii $5$ and $2$ give circumferences $10\\pi$ and $4\\pi$ (ratio $5:2$) and areas $25\\pi$ and $4\\pi$ (ratio $25:4$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4:25$): squares correctly but reports second circle to first, reversing the order the question asks for.\n* Choice B ($5:2$): reuses the circumference ratio; circumference is a length, area is not.\n* Choice D ($125:8$): cubes the ratio, which would apply to the volumes of similar solids.\n\n**Test Day Takeaway:** Circumference, diameter, and radius all scale together at $k$; area scales at $k^2$. Any linear measurement can serve as the starting ratio.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-figures-area-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-197",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Two similar pentagons have perimeters of $30$ centimeters and $42$ centimeters. What is the ratio of the area of the smaller pentagon to the area of the larger pentagon?",
    choices: [
      // distractor: reports the perimeter ratio unsquared
      { id: "A", text: "$5:7$" },
      { id: "B", text: "$25:49$" },
      // distractor: squares but reverses the order
      { id: "C", text: "$49:25$" },
      // distractor: cubes the linear ratio
      { id: "D", text: "$125:343$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Perimeter is a length, so the linear ratio is $\\frac{30}{42} = \\frac{5}{7}$. Areas scale by the square: $\\frac{25}{49}$.\n\n**The Full Solution:**\nStep 1: For similar figures, corresponding sides and perimeters share the same ratio, so $k = \\frac{30}{42}$.\nStep 2: Reduce: $\\frac{30}{42} = \\frac{5}{7}$.\nStep 3: Square it for the area ratio: $\\left(\\frac{5}{7}\\right)^2 = \\frac{25}{49}$, or $25:49$.\n\nVerification: if a side of the smaller pentagon is $5u$, the corresponding side of the larger is $7u$, and the areas are proportional to $25u^2$ and $49u^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5:7$): stops at the reduced perimeter ratio instead of squaring it.\n* Choice C ($49:25$): squares correctly but reports larger to smaller.\n* Choice D ($125:343$): cubes the ratio, the scaling law for volume rather than area.\n\n**Test Day Takeaway:** Reduce the linear ratio before squaring — $\\frac{30}{42}$ squared is awkward, but $\\frac{5}{7}$ squared is immediate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-figures-area-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-198",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "medium",
    type: "fill-in",
    question: "Two similar parallelograms have areas of $36$ square centimeters and $225$ square centimeters. The perimeter of the smaller parallelogram is $24$ centimeters. What is the perimeter, in centimeters, of the larger parallelogram?",
    correctAnswer: "60",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~25s):** The linear ratio is $\\sqrt{\\frac{36}{225}} = \\frac{6}{15} = \\frac{2}{5}$, so the larger perimeter is $24 \\cdot \\frac{5}{2} = 60$.\n\n**The Full Solution:**\nStep 1: For similar figures the area ratio is the square of the linear ratio, so the linear ratio is the square root of the area ratio.\nStep 2: $\\sqrt{\\frac{36}{225}} = \\frac{6}{15} = \\frac{2}{5}$, so every length in the smaller figure is $\\frac{2}{5}$ of the corresponding length in the larger one.\nStep 3: Perimeter is a length, so $\\frac{24}{P} = \\frac{2}{5}$, giving $P = 24 \\cdot \\frac{5}{2} = 60$ centimeters.\n\nVerification: $\\left(\\frac{24}{60}\\right)^2 = \\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25} = \\frac{36}{225}$. $\\checkmark$\n\n**Common Mistakes:** Scaling the perimeter by the area ratio, $24 \\cdot \\frac{225}{36} = 150$. Applying the linear ratio in the wrong direction, $24 \\cdot \\frac{2}{5} = 9.6$, which shrinks the larger figure. Taking the square root of only one of the two numbers.\n\n**Test Day Takeaway:** Go down a power to move from areas to lengths: take the square root of the area ratio first, then apply it to the perimeter.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-figures-area-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-199",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A blueprint of a rectangular courtyard is redrawn so that every length in the drawing is multiplied by $1.5$. The area of the redrawn courtyard is how many times the area of the original drawing?",
    choices: [
      // distractor: reports the linear factor
      { id: "A", text: "$1.5$" },
      { id: "B", text: "$2.25$" },
      // distractor: doubles the linear factor instead of squaring it
      { id: "C", text: "$3$" },
      // distractor: cubes the linear factor
      { id: "D", text: "$3.375$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Area scales by the square of the linear factor: $1.5^2 = 2.25$.\n\n**The Full Solution:**\nStep 1: Let the original rectangle have length $L$ and width $W$, so its area is $LW$.\nStep 2: The redrawn rectangle has length $1.5L$ and width $1.5W$, so its area is $(1.5L)(1.5W) = 2.25LW$.\nStep 3: The area is therefore $2.25$ times the original.\n\nVerification: a $4$ by $6$ rectangle has area $24$; scaled to $6$ by $9$ it has area $54$, and $\\frac{54}{24} = 2.25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.5$): reports the scale factor itself, which applies to lengths, not areas.\n* Choice C ($3$): doubles $1.5$ instead of squaring it, confusing \"two dimensions\" with \"times two.\"\n* Choice D ($3.375$): cubes the factor; that is how volume would scale, not area.\n\n**Test Day Takeaway:** Both dimensions grow, so the factor appears twice: $k \\cdot k = k^2$. That is why $1.5$ becomes $2.25$, not $3$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-figures-area-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-200",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Two similar triangles have areas of $32$ square inches and $50$ square inches. What is the ratio of a side of the smaller triangle to the corresponding side of the larger triangle?",
    choices: [
      { id: "A", text: "$4:5$" },
      // distractor: inverts the order
      { id: "B", text: "$5:4$" },
      // distractor: reports the area ratio instead of its square root
      { id: "C", text: "$16:25$" },
      // distractor: uses the cube of the linear ratio
      { id: "D", text: "$64:125$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\frac{32}{50} = \\frac{16}{25}$, and $\\sqrt{\\frac{16}{25}} = \\frac{4}{5}$.\n\n**The Full Solution:**\nStep 1: For similar figures, $\\frac{\\text{area}_1}{\\text{area}_2} = k^2$, where $k$ is the ratio of corresponding sides.\nStep 2: Reduce the area ratio: $\\frac{32}{50} = \\frac{16}{25}$.\nStep 3: Take the square root: $k = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}$, so the sides are in the ratio $4:5$.\n\nVerification: $\\left(\\frac{4}{5}\\right)^2 = \\frac{16}{25} = \\frac{32}{50}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5:4$): takes the square root correctly but reports larger to smaller.\n* Choice C ($16:25$): gives the reduced area ratio without taking the square root.\n* Choice D ($64:125$): cubes the linear ratio, the relationship that governs volumes of similar solids.\n\n**Test Day Takeaway:** Reduce first, then take the square root — $\\frac{32}{50}$ is not a perfect-square fraction, but $\\frac{16}{25}$ is.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-figures-area-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-201",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Triangle $R$ and triangle $S$ are similar. The perimeter of triangle $R$ is $30$ centimeters and the perimeter of triangle $S$ is $75$ centimeters. If the area of triangle $R$ is $36$ square centimeters, what is the area, in square centimeters, of triangle $S$?",
    choices: [
      // distractor: scales by the linear ratio instead of its square
      { id: "A", text: "$90$" },
      // distractor: multiplies by 4 instead of by 25/4
      { id: "B", text: "$144$" },
      { id: "C", text: "$225$" },
      // distractor: cubes the linear ratio
      { id: "D", text: "$562.5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The linear ratio is $\\frac{75}{30} = \\frac{5}{2}$, so the area ratio is $\\frac{25}{4}$ and the area of triangle $S$ is $36 \\cdot \\frac{25}{4} = 225$.\n\n**The Full Solution:**\nStep 1: Perimeters of similar triangles are in the same ratio as corresponding sides, so $k = \\frac{75}{30} = \\frac{5}{2}$.\nStep 2: Areas scale by $k^2 = \\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$.\nStep 3: Area of $S$ $= 36 \\cdot \\frac{25}{4} = 9 \\cdot 25 = 225$ square centimeters.\n\nVerification: $\\frac{225}{36} = 6.25 = \\left(\\frac{5}{2}\\right)^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($90$): multiplies the area by the linear ratio $\\frac{5}{2}$, skipping the square.\n* Choice B ($144$): multiplies by $4$, the square of the smaller term of the ratio, instead of by $\\frac{25}{4}$.\n* Choice D ($562.5$): cubes the ratio, $36 \\cdot \\frac{125}{8}$, applying a volume rule to a plane figure.\n\n**Test Day Takeaway:** Convert any given linear ratio — sides, perimeters, heights — into $k$, then square it once for area. Ratios greater than $1$ must make the area grow.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "similar-figures-area-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-202",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "hard",
    type: "fill-in",
    question: "Two similar triangles have areas of $28$ square centimeters and $175$ square centimeters. The longest side of the smaller triangle is $12$ centimeters. What is the length, in centimeters, of the longest side of the larger triangle?",
    correctAnswer: "30",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~30s):** $\\frac{28}{175} = \\frac{4}{25}$, so the linear ratio is $\\frac{2}{5}$ and the longest side of the larger triangle is $12 \\cdot \\frac{5}{2} = 30$.\n\n**The Full Solution:**\nStep 1: For similar figures, the ratio of areas is the square of the ratio of corresponding lengths.\nStep 2: Reduce the area ratio by $7$: $\\frac{28}{175} = \\frac{4}{25}$. Taking the square root gives a linear ratio of $\\frac{2}{5}$.\nStep 3: The longest sides correspond, so $\\frac{12}{L} = \\frac{2}{5}$ and $L = \\frac{12 \\cdot 5}{2} = 30$ centimeters.\n\nVerification: $\\left(\\frac{12}{30}\\right)^2 = \\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25} = \\frac{28}{175}$. $\\checkmark$\n\n**Common Mistakes:** Scaling the side by the area ratio, $12 \\cdot \\frac{175}{28} = 75$. Applying the ratio the wrong way, $12 \\cdot \\frac{2}{5} = 4.8$, which shrinks the side of the larger triangle. Failing to reduce $\\frac{28}{175}$ first and abandoning the square root because $28$ and $175$ are not perfect squares.\n\n**Test Day Takeaway:** When an area ratio does not look like a perfect-square fraction, reduce it. Dividing by the common factor $7$ turns $\\frac{28}{175}$ into $\\frac{4}{25}$, whose square root is immediate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-figures-area-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── AREA OF TRIANGLE FROM COORDINATES (bank-geo-203..210) ────────────────
  // Two methods: (1) base-height when sides align with axes; (2) shoelace
  // formula for arbitrary triangles. SAT staple.
  {
    id: "bank-geo-203",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, a triangle has vertices at $(0, 0)$, $(0, 9)$, and $(14, 0)$. What is the area, in square units, of the triangle?",
    choices: [
      // distractor: adds the two legs
      { id: "A", text: "$23$" },
      { id: "B", text: "$63$" },
      // distractor: omits the one-half factor
      { id: "C", text: "$126$" },
      // distractor: doubles instead of halving
      { id: "D", text: "$252$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The legs lie on the axes, so the base is $14$ and the height is $9$: area $= \\frac{1}{2}(14)(9) = 63$.\n\n**The Full Solution:**\nStep 1: Two of the vertices share the $x$-axis and two share the $y$-axis, so the triangle has a right angle at the origin.\nStep 2: The horizontal leg runs from $(0, 0)$ to $(14, 0)$, length $14$; the vertical leg runs from $(0, 0)$ to $(0, 9)$, length $9$.\nStep 3: Area $= \\frac{1}{2}bh = \\frac{1}{2}(14)(9) = 63$ square units.\n\nVerification: the triangle is exactly half of the $14$ by $9$ rectangle, whose area is $126$; half of $126$ is $63$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): adds the leg lengths, $14 + 9$, instead of multiplying them.\n* Choice C ($126$): multiplies the legs but never halves; that is the area of the surrounding rectangle.\n* Choice D ($252$): doubles the leg product instead of halving it.\n\n**Test Day Takeaway:** When two vertices sit on the axes and one is the origin, the legs are read straight off the coordinates. No distance formula is needed.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-triangle-from-coordinates",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-204",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, a triangle has vertices at $(0, 0)$, $(11, 0)$, and $(4, 6)$. What is the area, in square units, of the triangle?",
    choices: [
      // distractor: uses the apex x-coordinate as the height
      { id: "A", text: "$22$" },
      { id: "B", text: "$33$" },
      // distractor: omits the one-half factor
      { id: "C", text: "$66$" },
      // distractor: doubles instead of halving
      { id: "D", text: "$132$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The side from $(0, 0)$ to $(11, 0)$ lies on the $x$-axis, so the base is $11$ and the height is the third vertex's $y$-coordinate, $6$: area $= \\frac{1}{2}(11)(6) = 33$.\n\n**The Full Solution:**\nStep 1: Choose the horizontal side as the base. From $(0, 0)$ to $(11, 0)$ the length is $11 - 0 = 11$.\nStep 2: The height is the perpendicular distance from $(4, 6)$ to the line $y = 0$, which is $6$. The $x$-coordinate $4$ is irrelevant — sliding the apex horizontally does not change the area.\nStep 3: Area $= \\frac{1}{2}(11)(6) = 33$ square units.\n\nVerification: the shoelace formula gives $\\frac{1}{2}|0(0 - 6) + 11(6 - 0) + 4(0 - 0)| = \\frac{1}{2}(66) = 33$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($22$): uses the apex's $x$-coordinate, $4$, as the height, computing $\\frac{1}{2}(11)(4)$.\n* Choice C ($66$): multiplies base by height without the $\\frac{1}{2}$.\n* Choice D ($132$): doubles the base-height product instead of halving it.\n\n**Test Day Takeaway:** With a horizontal base, the height is the vertical gap only. The apex's $x$-coordinate never enters the area.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-triangle-from-coordinates",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-205",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, triangle $ABC$ has vertices $A(-3, 2)$, $B(7, 2)$, and $C(1, 11)$. What is the area, in square units, of triangle $ABC$?",
    choices: [
      // distractor: adds the x-coordinates instead of subtracting
      { id: "A", text: "$18$" },
      { id: "B", text: "$45$" },
      // distractor: uses the apex y-coordinate as the height
      { id: "C", text: "$55$" },
      // distractor: omits the one-half factor
      { id: "D", text: "$90$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $A$ and $B$ share $y = 2$, so $AB = 7 - (-3) = 10$ is the base and the height is $11 - 2 = 9$: area $= \\frac{1}{2}(10)(9) = 45$.\n\n**The Full Solution:**\nStep 1: $A(-3, 2)$ and $B(7, 2)$ have the same $y$-coordinate, so $\\overline{AB}$ is horizontal and its length is $|7 - (-3)| = 10$.\nStep 2: The height is the vertical distance from $C(1, 11)$ to the line $y = 2$, which is $|11 - 2| = 9$.\nStep 3: Area $= \\frac{1}{2}(10)(9) = 45$ square units.\n\nVerification: the shoelace formula gives $\\frac{1}{2}|-3(2 - 11) + 7(11 - 2) + 1(2 - 2)| = \\frac{1}{2}|27 + 63| = 45$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): adds the $x$-coordinates, $7 + (-3) = 4$, for the base instead of subtracting, giving $\\frac{1}{2}(4)(9)$.\n* Choice C ($55$): uses $C$'s $y$-coordinate $11$ as the height without subtracting the base's height of $2$.\n* Choice D ($90$): multiplies base by height but skips the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** When the base is not on an axis, the height is the difference of $y$-values, not the apex's $y$-value alone.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-triangle-from-coordinates",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-206",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, a triangle has vertices at $(-4, 1)$, $(6, 1)$, and $(2, 8)$. What is the area, in square units, of the triangle?",
    correctAnswer: "35",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~20s):** The base runs from $(-4, 1)$ to $(6, 1)$, so $b = 10$; the height is $8 - 1 = 7$. Area $= \\frac{1}{2}(10)(7) = 35$.\n\n**The Full Solution:**\nStep 1: The first two vertices share $y = 1$, so that side is horizontal with length $|6 - (-4)| = 10$.\nStep 2: The height is the perpendicular distance from $(2, 8)$ to the line $y = 1$: $|8 - 1| = 7$.\nStep 3: Area $= \\frac{1}{2}(10)(7) = 35$ square units.\n\nVerification: the shoelace formula gives $\\frac{1}{2}|-4(1 - 8) + 6(8 - 1) + 2(1 - 1)| = \\frac{1}{2}|28 + 42| = 35$. $\\checkmark$\n\n**Common Mistakes:** Using the apex's $y$-coordinate $8$ as the height, which yields $\\frac{1}{2}(10)(8) = 40$. Adding the base endpoints' $x$-coordinates, $-4 + 6 = 2$, instead of subtracting, which yields $\\frac{1}{2}(2)(7) = 7$. Forgetting the $\\frac{1}{2}$ and gridding $70$.\n\n**Test Day Takeaway:** Find the pair of vertices with a shared coordinate first — that side becomes the base, and the remaining vertex supplies the height as a difference.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-triangle-from-coordinates",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-207",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, triangle $PQR$ has vertices $P(2, -3)$, $Q(2, 5)$, and $R(9, 1)$. What is the area, in square units, of triangle $PQR$?",
    choices: [
      // distractor: uses the y-coordinate of R as the height
      { id: "A", text: "$4$" },
      { id: "B", text: "$28$" },
      // distractor: uses the x-coordinate of R as the height
      { id: "C", text: "$36$" },
      // distractor: omits the one-half factor
      { id: "D", text: "$56$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $P$ and $Q$ share $x = 2$, so $PQ = 5 - (-3) = 8$ is a vertical base and the height is $9 - 2 = 7$. Area $= \\frac{1}{2}(8)(7) = 28$.\n\n**The Full Solution:**\nStep 1: $P(2, -3)$ and $Q(2, 5)$ have the same $x$-coordinate, so $\\overline{PQ}$ is vertical with length $|5 - (-3)| = 8$.\nStep 2: With a vertical base, the height is the horizontal distance from $R(9, 1)$ to the line $x = 2$: $|9 - 2| = 7$.\nStep 3: Area $= \\frac{1}{2}(8)(7) = 28$ square units.\n\nVerification: the shoelace formula gives $\\frac{1}{2}|2(5 - 1) + 2(1 - (-3)) + 9(-3 - 5)| = \\frac{1}{2}|8 + 8 - 72| = 28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): uses $R$'s $y$-coordinate, $1$, as the height, which pairs the wrong axis with a vertical base.\n* Choice C ($36$): uses $R$'s $x$-coordinate, $9$, as the height instead of the distance $9 - 2 = 7$.\n* Choice D ($56$): finds the correct base and height but never applies the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** A vertical base takes a horizontal height. Match the axis of the base to the perpendicular direction before subtracting.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-triangle-from-coordinates",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-208",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, a triangle has vertices at $(0, 0)$, $(12, 0)$, and $(5, -4)$. What is the area, in square units, of the triangle?",
    choices: [
      { id: "A", text: "$24$" },
      // distractor: uses the apex x-coordinate as the height
      { id: "B", text: "$30$" },
      // distractor: omits the one-half factor
      { id: "C", text: "$48$" },
      // distractor: uses the x-coordinate as the height and omits the one-half
      { id: "D", text: "$60$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The base on the $x$-axis has length $12$, and the third vertex is $|-4| = 4$ units from that axis: area $= \\frac{1}{2}(12)(4) = 24$.\n\n**The Full Solution:**\nStep 1: Two vertices, $(0, 0)$ and $(12, 0)$, lie on the $x$-axis, so that side is the base with length $12$.\nStep 2: The height is the perpendicular distance from $(5, -4)$ to the $x$-axis. Distance is never negative, so the height is $|-4| = 4$.\nStep 3: Area $= \\frac{1}{2}(12)(4) = 24$ square units.\n\nVerification: the shoelace formula gives $\\frac{1}{2}|0(0 - (-4)) + 12(-4 - 0) + 5(0 - 0)| = \\frac{1}{2}|-48| = 24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): uses the apex's $x$-coordinate, $5$, as the height, computing $\\frac{1}{2}(12)(5)$.\n* Choice C ($48$): multiplies base by height without the $\\frac{1}{2}$.\n* Choice D ($60$): combines both errors, computing $12 \\cdot 5$.\n\n**Test Day Takeaway:** A negative coordinate still gives a positive height. Take the absolute value of the vertical gap and keep going.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-triangle-from-coordinates",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-209",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, triangle $ABC$ has vertices $A(-2, 1)$, $B(4, 5)$, and $C(6, -3)$. What is the area, in square units, of triangle $ABC$?",
    choices: [
      // distractor: sign slip on the first shoelace term
      { id: "A", text: "$12$" },
      { id: "B", text: "$28$" },
      // distractor: uses the bounding rectangle dimensions as base and height
      { id: "C", text: "$32$" },
      // distractor: omits the one-half factor
      { id: "D", text: "$56$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** No side is horizontal or vertical, so use the shoelace formula: $\\frac{1}{2}|-2(5 - (-3)) + 4(-3 - 1) + 6(1 - 5)| = \\frac{1}{2}|-16 - 16 - 24| = 28$.\n\n**The Full Solution:**\nStep 1: For vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$, the area is $\\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$.\nStep 2: Substitute $A(-2, 1)$, $B(4, 5)$, $C(6, -3)$: the three terms are $-2(8) = -16$, $4(-4) = -16$, and $6(-4) = -24$.\nStep 3: Sum and take half the absolute value: $\\frac{1}{2}|-56| = 28$ square units.\n\nVerification: $\\overline{AB}$ has length $\\sqrt{6^2 + 4^2} = \\sqrt{52}$, and the distance from $C(6,-3)$ to the line through $A$ and $B$ (which is $2x - 3y + 7 = 0$) is $\\frac{|12 + 9 + 7|}{\\sqrt{13}} = \\frac{28}{\\sqrt{13}}$; the area is $\\frac{1}{2}\\sqrt{52}\\cdot\\frac{28}{\\sqrt{13}} = 28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): a sign slip on the first term, using $+16$ instead of $-16$, gives $\\frac{1}{2}|16 - 16 - 24| = 12$.\n* Choice C ($32$): uses the bounding rectangle, $8$ wide by $8$ tall, as if its dimensions were the base and height: $\\frac{1}{2}(8)(8)$.\n* Choice D ($56$): computes the shoelace sum but forgets to halve it.\n\n**Test Day Takeaway:** When no side is parallel to an axis, the shoelace formula is faster than hunting for a base and an altitude. Take the absolute value only at the end.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "area-of-triangle-from-coordinates",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-210",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, a triangle has vertices at $(1, 4)$, $(9, 4)$, and $(5, k)$, where $k > 4$. The area of the triangle is $52$ square units. What is the value of $k$?",
    correctAnswer: "17",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~35s):** The base is $9 - 1 = 8$ and the height is $k - 4$, so $\\frac{1}{2}(8)(k - 4) = 52$, giving $k - 4 = 13$ and $k = 17$.\n\n**The Full Solution:**\nStep 1: The first two vertices share $y = 4$, so the base is horizontal with length $|9 - 1| = 8$.\nStep 2: The height is the vertical distance from $(5, k)$ to the line $y = 4$. Since $k > 4$, that distance is $k - 4$.\nStep 3: Set up and solve: $\\frac{1}{2}(8)(k - 4) = 52$, so $4(k - 4) = 52$, $k - 4 = 13$, and $k = 17$.\n\nVerification: with $k = 17$ the height is $13$ and the area is $\\frac{1}{2}(8)(13) = 52$. $\\checkmark$\n\n**Common Mistakes:** Solving for the height and gridding $13$ instead of adding the base's $y$-value back to get $k$. Dropping the $\\frac{1}{2}$ and solving $8(k - 4) = 52$, which gives $k = 10.5$. Using $5$, the apex's $x$-coordinate, somewhere in the area computation.\n\n**Test Day Takeaway:** The height is $k - 4$, not $k$. After you solve for the height, translate back to the coordinate the question actually asks for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-triangle-from-coordinates",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── S.B. EXTERIOR ANGLE THEOREM (bank-geo-211..218) ─────────────────────
  // Exterior angle of a triangle = sum of the two non-adjacent interior angles.
  {
    id: "bank-geo-211",
    domain: "geometry",
    skills: ["triangles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The interior angles of a triangle measure $28°$, $57°$, and $x°$. What is the measure of an exterior angle at the vertex whose interior angle measures $x°$?",
    choices: [
      { id: "A", text: "$85°$" },
      // distractor: reports the third interior angle
      { id: "B", text: "$95°$" },
      // distractor: takes the supplement of one given angle
      { id: "C", text: "$152°$" },
      // distractor: subtracts from 360 instead of 180
      { id: "D", text: "$275°$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** An exterior angle equals the sum of the two remote interior angles: $28 + 57 = 85$, so the exterior angle measures $85°$.\n\n**The Full Solution:**\nStep 1: The exterior angle theorem states that an exterior angle of a triangle equals the sum of the two non-adjacent (remote) interior angles.\nStep 2: The two angles that are not at the $x°$ vertex measure $28°$ and $57°$.\nStep 3: The exterior angle at that vertex measures $28 + 57 = 85$ degrees.\n\nVerification: $x = 180 - 28 - 57 = 95$, and the exterior angle is its supplement, $180 - 95 = 85$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($95°$): reports $x$ itself, the interior angle, rather than the exterior angle beside it.\n* Choice C ($152°$): computes $180 - 28$, the supplement of one of the given angles instead of the supplement of $x°$.\n* Choice D ($275°$): subtracts $85$ from $360$; exterior angles of a triangle are supplements of interior angles, so $180$ is the right total.\n\n**Test Day Takeaway:** An exterior angle equals the sum of the two remote interior angles. That one line replaces two subtraction steps.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exterior-angle-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-212",
    domain: "geometry",
    skills: ["triangles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In triangle $DEF$, the measure of angle $D$ is $46°$ and the measure of angle $E$ is $61°$. What is the measure of the exterior angle at vertex $F$?",
    choices: [
      // distractor: reports interior angle F
      { id: "A", text: "$73°$" },
      { id: "B", text: "$107°$" },
      // distractor: gives the supplement of angle E
      { id: "C", text: "$119°$" },
      // distractor: gives the supplement of angle D
      { id: "D", text: "$134°$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The remote interior angles for vertex $F$ are $D$ and $E$, so the exterior angle is $46 + 61 = 107$ degrees.\n\n**The Full Solution:**\nStep 1: An exterior angle at a vertex is formed by extending one side; its measure equals the sum of the two interior angles at the other two vertices.\nStep 2: For vertex $F$ the remote interior angles are $D = 46°$ and $E = 61°$.\nStep 3: The exterior angle at $F$ measures $46 + 61 = 107$ degrees.\n\nVerification: angle $F = 180 - 46 - 61 = 73$, and $180 - 73 = 107$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($73°$): reports the interior angle at $F$ instead of the exterior one.\n* Choice C ($119°$): computes $180 - 61$, the supplement of angle $E$ rather than of angle $F$.\n* Choice D ($134°$): computes $180 - 46$, the supplement of angle $D$.\n\n**Test Day Takeaway:** Name the two remote vertices first. The exterior angle belongs to the third vertex and equals the sum of the other two interior angles.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exterior-angle-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-213",
    domain: "geometry",
    skills: ["triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "An exterior angle of a triangle measures $128°$. One of the two remote interior angles measures $53°$. What is the measure of the other remote interior angle?",
    choices: [
      // distractor: gives the interior angle adjacent to the exterior angle
      { id: "A", text: "$52°$" },
      { id: "B", text: "$75°$" },
      // distractor: adds the adjacent interior angle to the given remote angle
      { id: "C", text: "$105°$" },
      // distractor: takes the supplement of the given remote angle
      { id: "D", text: "$127°$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The exterior angle is the sum of the two remote interior angles, so the missing one is $128 - 53 = 75$ degrees.\n\n**The Full Solution:**\nStep 1: Let the two remote interior angles be $53°$ and $y°$. The exterior angle theorem gives $53 + y = 128$.\nStep 2: Solve: $y = 128 - 53 = 75$.\nStep 3: The other remote interior angle measures $75°$.\n\nVerification: the interior angle adjacent to the exterior angle is $180 - 128 = 52°$, and $52 + 53 + 75 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($52°$): gives $180 - 128$, the interior angle at the same vertex as the exterior angle — the one angle that is not remote.\n* Choice C ($105°$): adds the adjacent interior angle to the given remote angle, $52 + 53$, mixing the two roles.\n* Choice D ($127°$): computes $180 - 53$, treating the remote angle as if it were the one supplementary to the exterior angle.\n\n**Test Day Takeaway:** Subtract, do not supplement. The exterior angle already equals the sum of the two remote angles, so the missing one is a single subtraction.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exterior-angle-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-214",
    domain: "geometry",
    skills: ["triangles"],
    difficulty: "medium",
    type: "fill-in",
    question: "In a triangle, an exterior angle measures $154°$. The two remote interior angles have measures in the ratio $4:3$. What is the measure, in degrees, of the smaller of those two remote interior angles?",
    correctAnswer: "66",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**The correct answer is $66$.**\n\n**The Fast Way (~30s):** The two remote angles sum to $154$, and $4x + 3x = 154$ gives $x = 22$. The smaller angle is $3(22) = 66$ degrees.\n\n**The Full Solution:**\nStep 1: By the exterior angle theorem the two remote interior angles sum to the exterior angle: their total is $154°$.\nStep 2: Write them as $4x$ and $3x$. Then $4x + 3x = 7x = 154$, so $x = 22$.\nStep 3: The smaller angle is $3x = 3(22) = 66$ degrees.\n\nVerification: $4(22) = 88$ and $88 + 66 = 154$; the third interior angle is $180 - 154 = 26$, and $88 + 66 + 26 = 180$. $\\checkmark$\n\n**Common Mistakes:** Gridding the larger angle, $88$. Splitting $180$ instead of $154$, which gives $x = \\frac{180}{7}$ and a smaller angle of about $77.1$ — not a whole number, a signal that the wrong total was used. Gridding the ratio unit $x = 22$ instead of an angle measure.\n\n**Test Day Takeaway:** A ratio problem needs the correct total. Here the exterior angle, not $180°$, is the sum the two remote angles must share.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exterior-angle-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-215",
    domain: "geometry",
    skills: ["triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The three interior angles of a triangle measure $(2x)°$, $(3x)°$, and $(4x)°$. What is the measure of the exterior angle adjacent to the angle measuring $(4x)°$?",
    choices: [
      // distractor: reports the (3x) angle
      { id: "A", text: "$60°$" },
      // distractor: reports the interior angle rather than the exterior one
      { id: "B", text: "$80°$" },
      { id: "C", text: "$100°$" },
      // distractor: gives the exterior angle at the (2x) vertex
      { id: "D", text: "$140°$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $2x + 3x + 4x = 180$ gives $x = 20$. The exterior angle at the $(4x)°$ vertex equals the sum of the remote angles: $2x + 3x = 5(20) = 100$ degrees.\n\n**The Full Solution:**\nStep 1: The interior angles of a triangle sum to $180°$, so $9x = 180$ and $x = 20$.\nStep 2: The three angles measure $40°$, $60°$, and $80°$.\nStep 3: The exterior angle adjacent to the $80°$ angle is the sum of the two remote interior angles: $40 + 60 = 100$ degrees.\n\nVerification: $180 - 80 = 100$, matching the supplement of the interior angle. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($60°$): reports $3x$, one of the remote interior angles, rather than their sum.\n* Choice B ($80°$): reports the interior angle $4x$ itself instead of the exterior angle beside it.\n* Choice D ($140°$): computes $180 - 40$, the exterior angle at the $(2x)°$ vertex instead of the $(4x)°$ vertex.\n\n**Test Day Takeaway:** Solve for $x$ first, then decide which vertex the exterior angle belongs to. The remote pair is always the two angles you are not standing on.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exterior-angle-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-216",
    domain: "geometry",
    skills: ["triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In triangle $JKL$, the exterior angle at vertex $J$ measures $133°$ and the measure of angle $K$ is $58°$. What is the measure of angle $L$?",
    choices: [
      // distractor: reports interior angle J
      { id: "A", text: "$47°$" },
      { id: "B", text: "$75°$" },
      // distractor: gives the supplement of angle K
      { id: "C", text: "$122°$" },
      // distractor: copies the exterior angle
      { id: "D", text: "$133°$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The remote interior angles for vertex $J$ are $K$ and $L$, so $58 + L = 133$ and $L = 75$ degrees.\n\n**The Full Solution:**\nStep 1: The exterior angle at $J$ equals the sum of the two interior angles at the other vertices: angle $K$ plus angle $L$.\nStep 2: Substitute the known values: $58 + L = 133$.\nStep 3: Solve: $L = 133 - 58 = 75$ degrees.\n\nVerification: angle $J = 180 - 133 = 47$, and $47 + 58 + 75 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($47°$): reports the interior angle at $J$, the supplement of the exterior angle, rather than angle $L$.\n* Choice C ($122°$): computes $180 - 58$, supplementing angle $K$ instead of subtracting it from the exterior angle.\n* Choice D ($133°$): copies the exterior angle measure straight into the answer.\n\n**Test Day Takeaway:** The exterior angle at a vertex never involves the interior angle at that same vertex. Use only the other two.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exterior-angle-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-217",
    domain: "geometry",
    skills: ["triangles"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In triangle $ABC$, the exterior angle at vertex $C$ measures $(3y + 10)°$, and the two remote interior angles measure $(y + 25)°$ and $(y + 5)°$. What is the measure of the interior angle at vertex $C$?",
    diagram: { type: "triangleWithAngles", params: { vertexLabels: ["A", "B", "C"], angleLabels: ["(y + 25)°", "(y + 5)°", ""], figureNote: true } },
    choices: [
      // distractor: reports y instead of an angle measure
      { id: "A", text: "$20°$" },
      // distractor: reports the larger remote interior angle
      { id: "B", text: "$45°$" },
      // distractor: reports the exterior angle instead of the interior one
      { id: "C", text: "$70°$" },
      { id: "D", text: "$110°$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** $3y + 10 = (y + 25) + (y + 5)$ gives $y = 20$, so the exterior angle is $70°$ and the interior angle at $C$ is $180 - 70 = 110$ degrees.\n\n**The Full Solution:**\nStep 1: The exterior angle at $C$ equals the sum of the remote interior angles at $A$ and $B$: $3y + 10 = (y + 25) + (y + 5)$.\nStep 2: Simplify the right side to $2y + 30$ and solve: $3y + 10 = 2y + 30$, so $y = 20$.\nStep 3: The exterior angle is $3(20) + 10 = 70°$. The interior angle at $C$ is its supplement: $180 - 70 = 110$ degrees.\n\nVerification: the remote angles are $45°$ and $25°$, and $45 + 25 + 110 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20°$): reports $y$, the parameter, instead of an angle measure.\n* Choice B ($45°$): reports the larger remote interior angle, $(y + 25)°$.\n* Choice C ($70°$): reports the exterior angle; the question asks for the interior angle at the same vertex, which is its supplement.\n\n**Test Day Takeaway:** Solving for the parameter is the middle of the problem, not the end. Track whether the question wants $y$, the exterior angle, or its supplement.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exterior-angle-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-218",
    domain: "geometry",
    skills: ["triangles"],
    difficulty: "hard",
    type: "fill-in",
    question: "In a triangle, the three exterior angles, one at each vertex, have measures in the ratio $5:6:7$. What is the measure, in degrees, of the largest interior angle of the triangle?",
    correctAnswer: "80",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**The correct answer is $80$.**\n\n**The Fast Way (~40s):** The three exterior angles sum to $360°$, so $18x = 360$ and $x = 20$: the exterior angles are $100°$, $120°$, and $140°$. The largest interior angle sits opposite the smallest exterior angle: $180 - 100 = 80$ degrees.\n\n**The Full Solution:**\nStep 1: Each interior angle and its exterior angle are supplementary, and the three exterior angles of any triangle sum to $360°$.\nStep 2: Write them as $5x$, $6x$, $7x$. Then $18x = 360$, so $x = 20$ and the exterior angles are $100°$, $120°$, and $140°$.\nStep 3: The interior angles are $180 - 100 = 80$, $180 - 120 = 60$, and $180 - 140 = 40$. The largest is $80°$.\n\nVerification: $80 + 60 + 40 = 180$. $\\checkmark$\n\n**Common Mistakes:** Pairing the largest exterior angle with the largest interior angle and gridding $40$; supplements run in the opposite order. Using $180$ as the exterior-angle total, which gives exterior angles $50°$, $60°$, $70°$ and a largest interior angle of $130$. Gridding the smallest exterior angle, $100$, instead of the interior angle it pairs with.\n\n**Test Day Takeaway:** Exterior angles of any polygon sum to $360°$. Because interior and exterior angles are supplementary, the biggest interior angle always pairs with the smallest exterior angle.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "exterior-angle-theorem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── S.B. SIMILAR TRIANGLES PROPORTION (bank-geo-219..226) ───────────────
  // Corresponding sides of similar triangles are proportional. Set up a proportion.
  {
    id: "bank-geo-219",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Triangle $GHJ$ is similar to triangle $KLM$, where $G$, $H$, and $J$ correspond to $K$, $L$, and $M$, respectively. If $GH = 5$, $KL = 15$, and $HJ = 7$, what is the length of $LM$?",
    diagram: { type: "similarTriangles", params: { triangle1: { labels: ["G", "H", "J"], sideLabels: ["5", "7", ""] }, triangle2: { labels: ["K", "L", "M"], sideLabels: ["15", "", ""] }, figureNote: true } },
    choices: [
      // distractor: copies HJ without scaling
      { id: "A", text: "$7$" },
      // distractor: copies KL
      { id: "B", text: "$15$" },
      { id: "C", text: "$21$" },
      // distractor: multiplies 5 by 7 instead of using the proportion
      { id: "D", text: "$35$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The scale factor from $GHJ$ to $KLM$ is $\\frac{15}{5} = 3$, so $LM = 3 \\cdot 7 = 21$.\n\n**The Full Solution:**\nStep 1: Corresponding sides of similar triangles are proportional, and the naming order tells you which sides correspond: $GH$ with $KL$, and $HJ$ with $LM$.\nStep 2: Set up the proportion $\\frac{GH}{KL} = \\frac{HJ}{LM}$, that is $\\frac{5}{15} = \\frac{7}{LM}$.\nStep 3: Cross-multiply: $5 \\cdot LM = 15 \\cdot 7 = 105$, so $LM = 21$.\n\nVerification: $\\frac{5}{15} = \\frac{1}{3}$ and $\\frac{7}{21} = \\frac{1}{3}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): copies $HJ$ without applying the scale factor.\n* Choice B ($15$): copies $KL$, the side already given in the larger triangle.\n* Choice D ($35$): multiplies $5 \\cdot 7$ instead of setting up a proportion.\n\n**Test Day Takeaway:** Read the correspondence out of the vertex order. $GH \\leftrightarrow KL$ and $HJ \\leftrightarrow LM$ because $G, H, J$ map to $K, L, M$ in that order.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-triangles-proportion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-220",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Two similar triangles have corresponding side lengths in the ratio $3:7$. The perimeter of the smaller triangle is $18$ centimeters. What is the perimeter, in centimeters, of the larger triangle?",
    choices: [
      // distractor: adds 3 to the perimeter
      { id: "A", text: "$21$" },
      // distractor: adds 7 to the perimeter
      { id: "B", text: "$25$" },
      { id: "C", text: "$42$" },
      // distractor: multiplies by 7 instead of by 7/3
      { id: "D", text: "$126$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Perimeters share the side ratio, so $\\frac{18}{P} = \\frac{3}{7}$ and $P = 18 \\cdot \\frac{7}{3} = 42$ centimeters.\n\n**The Full Solution:**\nStep 1: In similar figures every corresponding length — sides, perimeters, medians, altitudes — is in the same ratio.\nStep 2: So $\\frac{\\text{smaller perimeter}}{\\text{larger perimeter}} = \\frac{3}{7}$, giving $\\frac{18}{P} = \\frac{3}{7}$.\nStep 3: Cross-multiply: $3P = 126$, so $P = 42$ centimeters.\n\nVerification: $\\frac{18}{42} = \\frac{3}{7}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): adds $3$ to the given perimeter, treating the ratio as a difference.\n* Choice B ($25$): adds $7$ to the given perimeter for the same reason.\n* Choice D ($126$): multiplies by $7$ rather than by $\\frac{7}{3}$, using only the larger term of the ratio as the scale factor.\n\n**Test Day Takeaway:** A ratio of $3:7$ means multiply by $\\frac{7}{3}$ to go up, not by $7$. Check the result: $42$ should be a little more than double $18$, and it is.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-triangles-proportion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-221",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the figure, triangle $ABC$ is similar to triangle $DEF$, with $A$, $B$, and $C$ corresponding to $D$, $E$, and $F$, respectively. The ratio of the perimeter of triangle $ABC$ to the perimeter of triangle $DEF$ is $2:5$. If $BC = 6$, what is the length of $EF$?",
    diagram: { type: "similarTriangles", params: { triangle1: { labels: ["A", "B", "C"], sideLabels: ["", "BC = 6", ""] }, triangle2: { labels: ["D", "E", "F"], sideLabels: ["", "EF = ?", ""] }, figureNote: true } },
    choices: [
      // distractor: inverts the ratio
      { id: "A", text: "$2.4$" },
      // distractor: adds the difference of the ratio terms
      { id: "B", text: "$9$" },
      { id: "C", text: "$15$" },
      // distractor: multiplies by 5 instead of by 5/2
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The perimeter ratio equals the side ratio, so $EF = 6 \\cdot \\frac{5}{2} = 15$.\n\n**The Full Solution:**\nStep 1: In similar triangles, the ratio of perimeters equals the ratio of any pair of corresponding sides. Here that common ratio is $\\frac{2}{5}$.\nStep 2: $\\overline{BC}$ corresponds to $\\overline{EF}$, so $\\frac{BC}{EF} = \\frac{2}{5}$, that is $\\frac{6}{EF} = \\frac{2}{5}$.\nStep 3: Cross-multiply: $2 \\cdot EF = 30$, so $EF = 15$.\n\nVerification: $\\frac{6}{15} = \\frac{2}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.4$): applies the ratio backwards, $6 \\cdot \\frac{2}{5}$, shrinking a side of the larger triangle.\n* Choice B ($9$): adds the difference of the ratio terms, $6 + (5 - 2)$, treating the ratio as an additive gap.\n* Choice D ($30$): multiplies by $5$ instead of by $\\frac{5}{2}$.\n\n**Test Day Takeaway:** Perimeter ratio, side ratio, and altitude ratio are all the same number in similar figures. Only areas change the exponent.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-triangles-proportion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-222",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "medium",
    type: "fill-in",
    question: "Triangles $WXY$ and $RST$ are similar, where $W$, $X$, and $Y$ correspond to $R$, $S$, and $T$, respectively. If $WX = 10$, $RS = 25$, and $XY = 6$, what is the length of $ST$?",
    diagram: { type: "similarTriangles", params: { triangle1: { labels: ["W", "X", "Y"], sideLabels: ["10", "6", ""] }, triangle2: { labels: ["R", "S", "T"], sideLabels: ["25", "", ""] }, figureNote: true } },
    correctAnswer: "15",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~15s):** The scale factor is $\\frac{25}{10} = \\frac{5}{2}$, so $ST = 6 \\cdot \\frac{5}{2} = 15$.\n\n**The Full Solution:**\nStep 1: The naming order gives the correspondence: $WX$ pairs with $RS$, and $XY$ pairs with $ST$.\nStep 2: Set up the proportion $\\frac{WX}{RS} = \\frac{XY}{ST}$, that is $\\frac{10}{25} = \\frac{6}{ST}$.\nStep 3: Cross-multiply: $10 \\cdot ST = 150$, so $ST = 15$.\n\nVerification: $\\frac{10}{25} = \\frac{2}{5}$ and $\\frac{6}{15} = \\frac{2}{5}$. $\\checkmark$\n\n**Common Mistakes:** Inverting the ratio and computing $6 \\cdot \\frac{10}{25} = 2.4$, which makes a side of the larger triangle shorter. Copying $XY = 6$ without scaling. Adding the difference $25 - 10 = 15$ to $6$ to get $21$, treating a multiplicative relationship as additive.\n\n**Test Day Takeaway:** Write the proportion with both smaller-triangle sides on top. Then a cross-multiplication cannot come out inverted.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-triangles-proportion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-223",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the figure, $\\overline{MN}$ is parallel to $\\overline{QR}$ in triangle $PQR$, with $M$ on $\\overline{PQ}$ and $N$ on $\\overline{PR}$. If $PM = 8$, $MQ = 4$, and $QR = 21$, what is the length of $MN$?",
    diagram: { type: "similarTriangles", params: { triangle1: { vertices: [[0, 0], [105, 0], [52, 140]], labels: ["Q", "R", "P"], sideLabels: ["QR = 21", "", ""] }, triangle2: { vertices: [[0, 0], [70, 0], [35, 93]], labels: ["M", "N", "P"], sideLabels: ["MN = ?", "", ""] }, figureNote: true } },
    choices: [
      // distractor: uses MQ over PQ instead of PM over PQ
      { id: "A", text: "$7$" },
      { id: "B", text: "$14$" },
      // distractor: copies QR
      { id: "C", text: "$21$" },
      // distractor: uses PM over MQ as the scale factor
      { id: "D", text: "$42$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $PQ = 8 + 4 = 12$, so triangle $PMN$ is triangle $PQR$ scaled by $\\frac{8}{12} = \\frac{2}{3}$. Then $MN = 21 \\cdot \\frac{2}{3} = 14$.\n\n**The Full Solution:**\nStep 1: A segment parallel to one side of a triangle cuts off a smaller triangle similar to the whole: $PMN \\sim PQR$, with $P$ the shared vertex.\nStep 2: The scale factor is the ratio of the sides along the same ray from $P$: $\\frac{PM}{PQ} = \\frac{8}{8 + 4} = \\frac{8}{12} = \\frac{2}{3}$.\nStep 3: $\\overline{MN}$ corresponds to $\\overline{QR}$, so $MN = 21 \\cdot \\frac{2}{3} = 14$.\n\nVerification: $\\frac{MN}{QR} = \\frac{14}{21} = \\frac{2}{3} = \\frac{PM}{PQ}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): uses $\\frac{MQ}{PQ} = \\frac{4}{12}$, the leftover piece instead of the piece attached to $P$.\n* Choice C ($21$): copies $QR$, as if the parallel segment were congruent to the base.\n* Choice D ($42$): uses $\\frac{PM}{MQ} = \\frac{8}{4} = 2$ as the scale factor; the denominator must be the whole side $PQ$, not the remaining piece.\n\n**Test Day Takeaway:** The denominator of the scale factor is the full side from the shared vertex, so add the two pieces before dividing.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-triangles-proportion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-224",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A vertical pole $4$ feet tall casts a shadow $3$ feet long on level ground. At the same moment, a nearby transmission tower casts a shadow $87$ feet long. What is the height, in feet, of the tower?",
    choices: [
      // distractor: inverts the ratio
      { id: "A", text: "$65.25$" },
      // distractor: adds the difference of pole height and shadow
      { id: "B", text: "$88$" },
      { id: "C", text: "$116$" },
      // distractor: multiplies by 3 instead of by 4/3
      { id: "D", text: "$261$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The sun makes similar right triangles, so $\\frac{\\text{height}}{\\text{shadow}}$ is constant: $\\frac{4}{3} = \\frac{h}{87}$, giving $h = \\frac{4 \\cdot 87}{3} = 116$ feet.\n\n**The Full Solution:**\nStep 1: The pole with its shadow and the tower with its shadow form two right triangles with the same sun angle, so the triangles are similar by AA.\nStep 2: Corresponding sides are proportional: $\\frac{4}{3} = \\frac{h}{87}$.\nStep 3: Cross-multiply: $3h = 348$, so $h = 116$ feet.\n\nVerification: $\\frac{116}{87} = \\frac{4}{3}$, the same height-to-shadow ratio as the pole. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($65.25$): inverts the ratio, computing $87 \\cdot \\frac{3}{4}$, which makes the tower shorter than its shadow even though the pole is taller than its own shadow.\n* Choice B ($88$): adds the difference $4 - 3 = 1$ to $87$, treating a proportional relationship as additive.\n* Choice D ($261$): multiplies by $3$, the shadow length of the pole, instead of by $\\frac{4}{3}$.\n\n**Test Day Takeaway:** Set the ratio up in words first — height over shadow — and keep both triangles in the same order. The pole is taller than its shadow, so the tower must be too.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-triangles-proportion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-225",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the figure, triangle $ABC$ is similar to triangle $DEF$, where $A$, $B$, and $C$ correspond to $D$, $E$, and $F$, respectively. If $AB = x$, $BC = x + 9$, $DE = 8$, and $EF = 20$, what is the value of $x$?",
    diagram: { type: "similarTriangles", params: { triangle1: { labels: ["A", "B", "C"], sideLabels: ["x", "x + 9", ""] }, triangle2: { labels: ["D", "E", "F"], sideLabels: ["8", "20", ""] }, figureNote: true } },
    choices: [
      // distractor: fails to distribute across x + 9
      { id: "A", text: "$3$" },
      { id: "B", text: "$6$" },
      // distractor: reports BC instead of x
      { id: "C", text: "$15$" },
      // distractor: copies EF
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $\\frac{x}{x + 9} = \\frac{8}{20} = \\frac{2}{5}$, so $5x = 2(x + 9) = 2x + 18$, giving $3x = 18$ and $x = 6$.\n\n**The Full Solution:**\nStep 1: Corresponding sides are proportional: $\\frac{AB}{DE} = \\frac{BC}{EF}$, which rearranges to $\\frac{AB}{BC} = \\frac{DE}{EF}$.\nStep 2: Substitute and reduce: $\\frac{x}{x + 9} = \\frac{8}{20} = \\frac{2}{5}$.\nStep 3: Cross-multiply and distribute carefully: $5x = 2(x + 9) = 2x + 18$, so $3x = 18$ and $x = 6$.\n\nVerification: $AB = 6$ and $BC = 15$, and $\\frac{6}{15} = \\frac{2}{5} = \\frac{8}{20}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): drops the distribution, solving $5x = 2x + 9$ instead of $5x = 2x + 18$.\n* Choice C ($15$): solves correctly but reports $BC = x + 9$ rather than $x$ itself.\n* Choice D ($20$): copies $EF$, the corresponding side in the larger triangle.\n\n**Test Day Takeaway:** When one side is an expression, distribute across the whole binomial after cross-multiplying, then check that both reported lengths still satisfy the original ratio.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-triangles-proportion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-226",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "hard",
    type: "fill-in",
    question: "Triangle $X$ has side lengths $8$, $15$, and $17$. Triangle $Y$ is similar to triangle $X$ and has a perimeter of $100$. What is the length of the longest side of triangle $Y$?",
    correctAnswer: "42.5",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**The correct answer is $42.5$.**\n\n**The Fast Way (~30s):** The perimeter of triangle $X$ is $8 + 15 + 17 = 40$, so the scale factor is $\\frac{100}{40} = 2.5$. The longest side of $Y$ is $17 \\cdot 2.5 = 42.5$.\n\n**The Full Solution:**\nStep 1: Perimeters of similar triangles are in the same ratio as corresponding sides, so find the perimeter of $X$: $8 + 15 + 17 = 40$.\nStep 2: The scale factor from $X$ to $Y$ is $k = \\frac{100}{40} = \\frac{5}{2} = 2.5$.\nStep 3: The longest side of $X$ is $17$, so the longest side of $Y$ is $17 \\cdot 2.5 = 42.5$.\n\nVerification: the scaled sides are $20$, $37.5$, and $42.5$, and $20 + 37.5 + 42.5 = 100$. $\\checkmark$\n\n**Common Mistakes:** Scaling the shortest side and gridding $20$, or the middle side and gridding $37.5$. Dividing instead of multiplying, $17 \\div 2.5 = 6.8$, which shrinks the larger triangle. Using $\\frac{100}{17}$ as the scale factor by pairing the new perimeter with a single old side.\n\n**Test Day Takeaway:** The scale factor compares like with like — perimeter to perimeter. Once you have $k$, apply it to whichever side the question names.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-triangles-proportion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── S.D. ARC LENGTH (bank-geo-227..230) ──────────────────────────────────
  // Arc length = (central angle / 360) × circumference, or = r·θ (radians).
  {
    id: "bank-geo-227",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the circle shown, the central angle measures $120°$ and the radius is $9$. What is the length of the arc intercepted by that central angle?",
    diagram: { type: "circleWithSector", params: { centralAngle: 120, angleLabel: "120°", radius: 9, labelCenter: "O", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: uses pi r instead of 2 pi r
      { id: "A", text: "$3\\pi$" },
      { id: "B", text: "$6\\pi$" },
      // distractor: uses the diameter as the radius
      { id: "C", text: "$12\\pi$" },
      // distractor: gives the full circumference
      { id: "D", text: "$18\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $120°$ is $\\frac{1}{3}$ of the circle, so the arc is $\\frac{1}{3}$ of the circumference: $\\frac{1}{3} \\cdot 2\\pi(9) = 6\\pi$.\n\n**The Full Solution:**\nStep 1: Arc length $= \\frac{\\theta}{360°} \\cdot 2\\pi r$.\nStep 2: Substitute $\\theta = 120$ and $r = 9$: $\\frac{120}{360} \\cdot 2\\pi(9) = \\frac{1}{3} \\cdot 18\\pi$.\nStep 3: Simplify: $\\frac{18\\pi}{3} = 6\\pi$.\n\nVerification: three such arcs would tile the circle, and $3(6\\pi) = 18\\pi = 2\\pi(9)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3\\pi$): uses $\\pi r$ instead of $2\\pi r$ for the circumference, halving the answer.\n* Choice C ($12\\pi$): uses the diameter $18$ in place of the radius, computing $\\frac{1}{3} \\cdot 2\\pi(18)$.\n* Choice D ($18\\pi$): reports the full circumference and never applies the $\\frac{120}{360}$ fraction.\n\n**Test Day Takeaway:** Turn the central angle into a fraction of $360°$ first. A third of the circle means a third of the circumference, nothing more.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "arc-length",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-228",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The circle shown has a radius of $15$ centimeters. An arc of this circle is intercepted by a central angle measuring $24°$. What is the length, in centimeters, of that arc?",
    diagram: { type: "circleWithSector", params: { centralAngle: 24, angleLabel: "24°", radius: 15, labelCenter: "O", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: uses pi r instead of 2 pi r
      { id: "A", text: "$\\pi$" },
      { id: "B", text: "$2\\pi$" },
      // distractor: uses the diameter as the radius
      { id: "C", text: "$4\\pi$" },
      // distractor: gives the full circumference
      { id: "D", text: "$30\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $\\frac{24}{360} = \\frac{1}{15}$, and the circumference is $2\\pi(15) = 30\\pi$, so the arc is $\\frac{30\\pi}{15} = 2\\pi$ centimeters.\n\n**The Full Solution:**\nStep 1: Arc length $= \\frac{\\theta}{360°} \\cdot 2\\pi r$.\nStep 2: Reduce the fraction of the circle: $\\frac{24}{360} = \\frac{1}{15}$.\nStep 3: Multiply by the circumference $2\\pi(15) = 30\\pi$: arc $= \\frac{1}{15}(30\\pi) = 2\\pi$ centimeters.\n\nVerification: fifteen $24°$ angles make $360°$, and $15(2\\pi) = 30\\pi$, the full circumference. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\pi$): uses $\\pi r$ rather than $2\\pi r$, halving the circumference.\n* Choice C ($4\\pi$): substitutes the diameter $30$ for the radius, computing $\\frac{1}{15} \\cdot 2\\pi(30)$.\n* Choice D ($30\\pi$): gives the whole circumference, ignoring the central angle.\n\n**Test Day Takeaway:** Reduce $\\frac{\\theta}{360}$ before multiplying. Here $\\frac{1}{15}$ makes the arithmetic a single division.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "arc-length",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-229",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "medium",
    type: "fill-in",
    question: "A circle has a radius of $10$. An arc of this circle has length $15\\pi$. What is the measure, in degrees, of the central angle that intercepts this arc?",
    correctAnswer: "270",
    explanation: "**SAT Pattern: Arc Length**\n\n**The correct answer is $270$.**\n\n**The Fast Way (~25s):** The circumference is $2\\pi(10) = 20\\pi$, so the arc is $\\frac{15\\pi}{20\\pi} = \\frac{3}{4}$ of the circle: $\\frac{3}{4}(360) = 270$ degrees.\n\n**The Full Solution:**\nStep 1: Arc length $= \\frac{\\theta}{360°} \\cdot 2\\pi r$, so $\\frac{\\theta}{360} = \\frac{\\text{arc}}{\\text{circumference}}$.\nStep 2: The circumference is $2\\pi(10) = 20\\pi$, so $\\frac{\\theta}{360} = \\frac{15\\pi}{20\\pi} = \\frac{3}{4}$.\nStep 3: Solve: $\\theta = \\frac{3}{4}(360) = 270$ degrees.\n\nVerification: $\\frac{270}{360} \\cdot 20\\pi = \\frac{3}{4}(20\\pi) = 15\\pi$. $\\checkmark$\n\n**Common Mistakes:** Dividing the arc by $\\pi r = 10\\pi$ instead of by $2\\pi r$, which gives $\\frac{3}{2}$ of the circle and an impossible $540°$. Using the diameter $20$ as the radius, so the circumference becomes $40\\pi$ and the angle comes out as $135°$. Reporting $\\frac{3}{4}$ instead of converting the fraction to degrees.\n\n**Test Day Takeaway:** An arc longer than half the circumference must correspond to an angle larger than $180°$. That check catches the $135°$ trap immediately.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "arc-length",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-geo-230",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The circle shown has a circumference of $30\\pi$. An arc of this circle is intercepted by a central angle of $\\frac{2\\pi}{5}$ radians. What is the length of that arc?",
    diagram: { type: "circleWithSector", params: { centralAngle: 72, angleLabel: "2π/5", labelCenter: "O", figureNote: true } },
    choices: [
      // distractor: halves the central angle
      { id: "A", text: "$3\\pi$" },
      { id: "B", text: "$6\\pi$" },
      // distractor: reads the circumference coefficient as the radius
      { id: "C", text: "$12\\pi$" },
      // distractor: gives the full circumference
      { id: "D", text: "$30\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** From $2\\pi r = 30\\pi$, the radius is $15$. In radians the arc length is $r\\theta = 15 \\cdot \\frac{2\\pi}{5} = 6\\pi$.\n\n**The Full Solution:**\nStep 1: Back out the radius from the circumference: $2\\pi r = 30\\pi$, so $r = 15$.\nStep 2: When the central angle is measured in radians, arc length is simply $s = r\\theta$; no $\\frac{\\theta}{360}$ factor is needed.\nStep 3: Substitute: $s = 15 \\cdot \\frac{2\\pi}{5} = \\frac{30\\pi}{5} = 6\\pi$.\n\nVerification: $\\frac{2\\pi}{5}$ radians is $72°$, and $\\frac{72}{360}(30\\pi) = \\frac{1}{5}(30\\pi) = 6\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3\\pi$): halves the central angle, computing $15 \\cdot \\frac{\\pi}{5}$.\n* Choice C ($12\\pi$): reads the coefficient $30$ in $30\\pi$ as the radius, computing $30 \\cdot \\frac{2}{5}\\pi$; that number is the circumference, not the radius.\n* Choice D ($30\\pi$): reports the full circumference and never uses the angle.\n\n**Test Day Takeaway:** Radian angles use $s = r\\theta$ directly. Reserve the $\\frac{\\theta}{360}$ fraction for degrees, and always convert a given circumference to a radius first.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "arc-length",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── S.A. TRIANGLE AREA (bank-geo-231..235) — top-up to ≥8 ────────────────
  // Existing items (Triangle Area, Isosceles Triangle Area, Triangle Area with
  // Line Constraint, Right Triangle Area, Right Triangle Area with Surds)
  // alias-route here. Adding 5 more.
  {
    id: "bank-geo-231",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A triangle has a base of length $18$ centimeters and a corresponding height of $5$ centimeters. What is the area, in square centimeters, of the triangle?",
    choices: [
      // distractor: adds base and height
      { id: "A", text: "$23$" },
      { id: "B", text: "$45$" },
      // distractor: omits the one-half factor
      { id: "C", text: "$90$" },
      // distractor: doubles instead of halving
      { id: "D", text: "$180$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Area $= \\frac{1}{2}bh = \\frac{1}{2}(18)(5) = 45$ square centimeters.\n\n**The Full Solution:**\nStep 1: The area of any triangle is $\\frac{1}{2}bh$, where $h$ is the height measured perpendicular to the base $b$.\nStep 2: Substitute $b = 18$ and $h = 5$: area $= \\frac{1}{2}(18)(5)$.\nStep 3: Multiply: $18 \\cdot 5 = 90$, and half of $90$ is $45$ square centimeters.\n\nVerification: the triangle is half of an $18$ by $5$ rectangle of area $90$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): adds $18 + 5$ instead of multiplying, a perimeter-style move applied to an area question.\n* Choice C ($90$): multiplies base by height without halving; that is the rectangle, not the triangle.\n* Choice D ($180$): doubles the product instead of halving it.\n\n**Test Day Takeaway:** A triangle is always half its bounding rectangle. If your answer is not smaller than $bh$, you skipped the $\\frac{1}{2}$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-232",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "fill-in",
    question: "The right triangle shown has legs of length $7$ and $10$. What is the area of the triangle?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["7", "10", ""], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "35",
    explanation: "**SAT Pattern: Triangle Area**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~10s):** In a right triangle the legs are perpendicular, so area $= \\frac{1}{2}(7)(10) = 35$.\n\n**The Full Solution:**\nStep 1: The two legs of a right triangle meet at $90°$, so one leg is the base and the other is the height.\nStep 2: Substitute into $\\frac{1}{2}bh$: area $= \\frac{1}{2}(7)(10)$.\nStep 3: Multiply: $7 \\cdot 10 = 70$, and half of $70$ is $35$.\n\nVerification: two copies of this triangle form a $7$ by $10$ rectangle of area $70$, and $\\frac{70}{2} = 35$. $\\checkmark$\n\n**Common Mistakes:** Gridding $70$ by omitting the $\\frac{1}{2}$. Computing the hypotenuse $\\sqrt{149}$ first and trying to use it as a side of the area formula; the hypotenuse is not perpendicular to either leg. Adding the legs to get $17$.\n\n**Test Day Takeaway:** In a right triangle the legs are the base and height already. No altitude needs to be constructed.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-233",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The area of a triangle is $54$ square inches, and the height drawn to one of its sides is $12$ inches. What is the length, in inches, of that side?",
    choices: [
      // distractor: divides the area by the height without doubling
      { id: "A", text: "$4.5$" },
      { id: "B", text: "$9$" },
      // distractor: subtracts the height from the area
      { id: "C", text: "$42$" },
      // distractor: doubles the area but never divides
      { id: "D", text: "$108$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** From $\\frac{1}{2}bh = 54$ with $h = 12$: $b = \\frac{2(54)}{12} = \\frac{108}{12} = 9$ inches.\n\n**The Full Solution:**\nStep 1: Start from the area formula $A = \\frac{1}{2}bh$ and substitute what is known: $54 = \\frac{1}{2}b(12) = 6b$.\nStep 2: Solve for $b$: $b = \\frac{54}{6} = 9$.\nStep 3: The side that the height is drawn to measures $9$ inches.\n\nVerification: $\\frac{1}{2}(9)(12) = 54$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.5$): divides $54$ by $12$ without first doubling the area, effectively solving $bh = 54$.\n* Choice C ($42$): subtracts $54 - 12$, treating the relationship as additive.\n* Choice D ($108$): doubles the area to $108$ but never divides by the height.\n\n**Test Day Takeaway:** Clear the fraction first: $bh = 2A$. Working with $108 = 12b$ is cleaner than juggling a $\\frac{1}{2}$ mid-solve.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-234",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "An equilateral triangle has a side length of $8$ centimeters. What is the area, in square centimeters, of the triangle?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["60°", "60°", "60°"], figureNote: true } },
    choices: [
      // distractor: uses half the correct altitude
      { id: "A", text: "$8\\sqrt{3}$" },
      { id: "B", text: "$16\\sqrt{3}$" },
      // distractor: omits the one-half factor
      { id: "C", text: "$32\\sqrt{3}$" },
      // distractor: drops the one-fourth from the standard formula
      { id: "D", text: "$64\\sqrt{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The altitude of an equilateral triangle with side $s$ is $\\frac{s\\sqrt{3}}{2} = 4\\sqrt{3}$, so the area is $\\frac{1}{2}(8)(4\\sqrt{3}) = 16\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Drop an altitude from one vertex. It bisects the opposite side, creating a $30$-$60$-$90$ triangle with short leg $4$ and hypotenuse $8$.\nStep 2: In a $30$-$60$-$90$ triangle the long leg is $\\sqrt{3}$ times the short leg, so the altitude is $4\\sqrt{3}$ centimeters.\nStep 3: Area $= \\frac{1}{2}bh = \\frac{1}{2}(8)(4\\sqrt{3}) = 16\\sqrt{3}$ square centimeters.\n\nVerification: the standard formula $\\frac{s^2\\sqrt{3}}{4}$ gives $\\frac{64\\sqrt{3}}{4} = 16\\sqrt{3}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8\\sqrt{3}$): uses $\\frac{s\\sqrt{3}}{4} = 2\\sqrt{3}$ as the altitude instead of $\\frac{s\\sqrt{3}}{2} = 4\\sqrt{3}$, halving the area.\n* Choice C ($32\\sqrt{3}$): multiplies base by altitude, $8 \\cdot 4\\sqrt{3}$, without the $\\frac{1}{2}$.\n* Choice D ($64\\sqrt{3}$): uses $s^2\\sqrt{3}$, dropping the $\\frac{1}{4}$ from the equilateral-area formula.\n\n**Test Day Takeaway:** An equilateral triangle splits into two $30$-$60$-$90$ triangles. The altitude is $\\frac{s\\sqrt{3}}{2}$, which is always less than the side itself.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-235",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In triangle $PQR$, the measure of angle $P$ is $30°$, $PQ = 16$, and the area of the triangle is $60$ square units. What is the length of $PR$?",
    diagram: { type: "triangleWithAngles", params: { vertexLabels: ["P", "Q", "R"], angleLabels: ["30°", "", ""], figureNote: true } },
    choices: [
      // distractor: drops both the one-half and the sine factor
      { id: "A", text: "$3.75$" },
      // distractor: drops the sine factor
      { id: "B", text: "$7.5$" },
      { id: "C", text: "$15$" },
      // distractor: multiplies by the area instead of dividing
      { id: "D", text: "$240$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** With two sides and the included angle, area $= \\frac{1}{2}(PQ)(PR)\\sin P$. So $60 = \\frac{1}{2}(16)(PR)\\left(\\frac{1}{2}\\right) = 4 \\cdot PR$, giving $PR = 15$.\n\n**The Full Solution:**\nStep 1: The height from $R$ to line $PQ$ is $PR \\sin 30° = \\frac{PR}{2}$, so the area is $\\frac{1}{2}(PQ)\\left(\\frac{PR}{2}\\right)$.\nStep 2: Substitute the known values: $60 = \\frac{1}{2}(16)\\left(\\frac{PR}{2}\\right) = 4 \\cdot PR$.\nStep 3: Solve: $PR = \\frac{60}{4} = 15$.\n\nVerification: with $PR = 15$ the height is $15 \\sin 30° = 7.5$, and $\\frac{1}{2}(16)(7.5) = 60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.75$): drops both the $\\frac{1}{2}$ and the $\\sin 30°$, solving $16 \\cdot PR = 60$.\n* Choice B ($7.5$): drops only the $\\sin 30°$ factor, solving $\\frac{1}{2}(16)(PR) = 60$; $7.5$ is the height, not the side.\n* Choice D ($240$): multiplies by the area instead of dividing, computing $\\frac{1}{2}(16)(60)\\sin 30°$.\n\n**Test Day Takeaway:** With two sides and the angle between them, area $= \\frac{1}{2}ab\\sin C$. Collapse the constants into one coefficient before dividing, and check whether the answer is the side or the altitude.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── S.A. CIRCUMFERENCE OF A CIRCLE (bank-geo-236..242) — top-up to ≥8 ────
  {
    id: "bank-geo-236",
    domain: "geometry",
    skills: ["circle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A circle has a radius of $11$ inches. What is the circumference, in inches, of the circle?",
    choices: [
      // distractor: uses pi r instead of 2 pi r
      { id: "A", text: "$11\\pi$" },
      { id: "B", text: "$22\\pi$" },
      // distractor: applies 2 pi d to the diameter 22, doubling twice
      { id: "C", text: "$44\\pi$" },
      // distractor: computes the area
      { id: "D", text: "$121\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $C = 2\\pi r = 2\\pi(11) = 22\\pi$ inches.\n\n**The Full Solution:**\nStep 1: The circumference of a circle is $C = 2\\pi r$, where $r$ is the radius.\nStep 2: Substitute $r = 11$: $C = 2\\pi(11)$.\nStep 3: $C = 22\\pi$ inches.\n\nVerification: the diameter is $22$, and $C = \\pi d = 22\\pi$ agrees. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($11\\pi$): uses $\\pi r$, which is half the circumference.\n* Choice C ($44\\pi$): doubles the radius to get the diameter $22$ and then applies $2\\pi d$ instead of $\\pi d$, doubling one time too many.\n* Choice D ($121\\pi$): computes $\\pi r^2$, the area, rather than the circumference.\n\n**Test Day Takeaway:** $C = 2\\pi r = \\pi d$. If the exponent on $r$ shows up, you have written the area formula by mistake.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circumference-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-237",
    domain: "geometry",
    skills: ["circle-area"],
    difficulty: "easy",
    type: "fill-in",
    question: "The circumference of a circle is $34\\pi$ inches. What is the diameter, in inches, of the circle?",
    correctAnswer: "34",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**The correct answer is $34$.**\n\n**The Fast Way (~10s):** $C = \\pi d$, so $34\\pi = \\pi d$ and $d = 34$ inches.\n\n**The Full Solution:**\nStep 1: Circumference relates to the diameter by $C = \\pi d$.\nStep 2: Substitute: $34\\pi = \\pi d$.\nStep 3: Divide both sides by $\\pi$: $d = 34$ inches.\n\nVerification: a diameter of $34$ gives a radius of $17$, and $2\\pi(17) = 34\\pi$. $\\checkmark$\n\n**Common Mistakes:** Gridding the radius $17$ after dividing by $2\\pi$ instead of by $\\pi$. Dividing by $2$ a second time and gridding $8.5$. Leaving $\\pi$ in the answer, which the grid cannot accept.\n\n**Test Day Takeaway:** When a circumference is written as a multiple of $\\pi$, the coefficient is the diameter. That single observation skips the algebra.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circumference-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-238",
    domain: "geometry",
    skills: ["circle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A circle has a circumference of $48\\pi$ meters. What is the radius, in meters, of the circle?",
    choices: [
      // distractor: divides by 4 pi
      { id: "A", text: "$12$" },
      { id: "B", text: "$24$" },
      // distractor: reports the diameter
      { id: "C", text: "$48$" },
      // distractor: multiplies by 2 instead of dividing
      { id: "D", text: "$96$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $2\\pi r = 48\\pi$, so $r = \\frac{48\\pi}{2\\pi} = 24$ meters.\n\n**The Full Solution:**\nStep 1: Write the circumference formula: $C = 2\\pi r$.\nStep 2: Substitute the given circumference: $48\\pi = 2\\pi r$.\nStep 3: Divide both sides by $2\\pi$: $r = 24$ meters.\n\nVerification: $2\\pi(24) = 48\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): divides by $4\\pi$, as if the formula were $C = 4\\pi r$.\n* Choice C ($48$): reports the diameter — the coefficient of $\\pi$ — instead of the radius.\n* Choice D ($96$): multiplies by $2$ rather than dividing by $2$.\n\n**Test Day Takeaway:** In $C = 2\\pi r$, the coefficient of $\\pi$ is the diameter. Halve it to get the radius, and the arithmetic is one step.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circumference-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-239",
    domain: "geometry",
    skills: ["circle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A circular garden bed has a diameter of $16$ feet. A wooden border is installed around the entire edge of the bed. To the nearest foot, what is the length of the border? (Use $\\pi \\approx 3.14$.)",
    choices: [
      // distractor: uses pi r instead of pi d
      { id: "A", text: "$25$" },
      { id: "B", text: "$50$" },
      // distractor: doubles the diameter before multiplying
      { id: "C", text: "$100$" },
      // distractor: computes the area
      { id: "D", text: "$201$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The border runs along the circumference: $C = \\pi d \\approx 3.14(16) = 50.24$, which rounds to $50$ feet.\n\n**The Full Solution:**\nStep 1: A border around the edge of a circular bed has the length of the circle's circumference.\nStep 2: With the diameter given, use $C = \\pi d = 3.14(16)$.\nStep 3: $3.14(16) = 50.24$, which to the nearest foot is $50$ feet.\n\nVerification: the radius is $8$, and $2(3.14)(8) = 50.24$ as well. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): uses $\\pi r = 3.14(8) = 25.12$, half the circumference.\n* Choice C ($100$): doubles the diameter first, computing $3.14(32) = 100.48$ — a second doubling that the formula $\\pi d$ has already accounted for.\n* Choice D ($201$): computes the area $\\pi r^2 = 3.14(64) = 200.96$; area is measured in square feet, not feet.\n\n**Test Day Takeaway:** Check the units the question asks for. A border is a length, so the circumference — not the area — is the quantity to compute.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circumference-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-240",
    domain: "geometry",
    skills: ["circle-area"],
    difficulty: "medium",
    type: "fill-in",
    question: "A circular running track has a radius of $40$ meters. What is the circumference of the track, in meters? (Use $\\pi \\approx 3.14$.)",
    correctAnswer: "251.2",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**The correct answer is $251.2$.**\n\n**The Fast Way (~15s):** $C = 2\\pi r \\approx 2(3.14)(40) = 251.2$ meters.\n\n**The Full Solution:**\nStep 1: Use $C = 2\\pi r$ with $r = 40$.\nStep 2: Substitute the approximation: $C \\approx 2(3.14)(40)$.\nStep 3: Multiply: $2(3.14) = 6.28$, and $6.28(40) = 251.2$ meters.\n\nVerification: the diameter is $80$, and $3.14(80) = 251.2$ as well. $\\checkmark$\n\n**Common Mistakes:** Computing $\\pi r = 3.14(40) = 125.6$ and forgetting to double. Computing the area $\\pi r^2 = 3.14(1600) = 5024$, which measures square meters rather than meters. Using the diameter in place of the radius, giving $2(3.14)(80) = 502.4$.\n\n**Test Day Takeaway:** Multiply $2\\pi$ into a single number first — $6.28$ — then scale by the radius. One multiplication instead of two removes the chance of dropping the factor of $2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circumference-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-241",
    domain: "geometry",
    skills: ["circle-area"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Circle $A$ has a circumference of $26\\pi$ centimeters. The radius of circle $B$ is $5$ centimeters greater than the radius of circle $A$. What is the area, in square centimeters, of circle $B$?",
    choices: [
      // distractor: reports the circumference of circle B
      { id: "A", text: "$36\\pi$" },
      // distractor: reports the area of circle A
      { id: "B", text: "$169\\pi$" },
      { id: "C", text: "$324\\pi$" },
      // distractor: treats 26 as the radius of circle A
      { id: "D", text: "$961\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $C = 2\\pi r$, so $26\\pi = 2\\pi r$ gives $r_A = 13$. Then $r_B = 18$ and the area is $\\pi(18)^2 = 324\\pi$.\n\n**The Full Solution:**\nStep 1: Use the circumference formula to recover the radius of circle $A$: $2\\pi r_A = 26\\pi$, so $r_A = 13$ centimeters.\nStep 2: The radius of circle $B$ is $5$ centimeters larger: $r_B = 13 + 5 = 18$ centimeters.\nStep 3: Apply the area formula: $A = \\pi r_B^2 = \\pi(18)^2 = 324\\pi$. Check: circle $B$'s circumference would be $2\\pi(18) = 36\\pi$, which is larger than $26\\pi$, as expected.\n\n**Why the wrong answers are tempting:**\n* Choice A ($36\\pi$): this is the circumference of circle $B$, not its area.\n* Choice B ($169\\pi$): the area of circle $A$ — the $5$-centimeter increase was never applied.\n* Choice D ($961\\pi$): treats $26$ as the radius of circle $A$, giving $r_B = 31$ and $\\pi(31)^2 = 961\\pi$.\n\n**Test Day Takeaway:** When a circle is described by its circumference, divide by $2\\pi$ first. The coefficient of $\\pi$ in a circumference is the diameter, never the radius.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "circumference-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-242",
    domain: "geometry",
    skills: ["circle-area"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The area of a circle is $4$ times the circle's circumference. What is the area of the circle, in terms of $\\pi$?",
    choices: [
      // distractor: reports the circumference instead of the area
      { id: "A", text: "$16\\pi$" },
      { id: "B", text: "$64\\pi$" },
      // distractor: uses 2 pi r squared for the area
      { id: "C", text: "$128\\pi$" },
      // distractor: squares the diameter instead of the radius
      { id: "D", text: "$256\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $\\pi r^2 = 4(2\\pi r)$ cancels to $r = 8$, so the area is $\\pi(8)^2 = 64\\pi$.\n\n**The Full Solution:**\nStep 1: Write both quantities in terms of the radius: the area is $\\pi r^2$ and the circumference is $2\\pi r$. The given relationship is $\\pi r^2 = 4(2\\pi r) = 8\\pi r$.\nStep 2: Since $r > 0$, divide both sides by $\\pi r$ to get $r = 8$. That is the radius, not yet the answer.\nStep 3: The question asks for the area: $A = \\pi(8)^2 = 64\\pi$. Check: the circumference is $2\\pi(8) = 16\\pi$, and $4(16\\pi) = 64\\pi$, which is the area.\n\n**Why the wrong answers are tempting:**\n* Choice A ($16\\pi$): stops at the circumference $2\\pi(8)$ rather than the area.\n* Choice C ($128\\pi$): uses $2\\pi r^2$ for the area, carrying the $2$ over from the circumference formula.\n* Choice D ($256\\pi$): finds $r = 8$ but squares the diameter, computing $\\pi(16)^2$.\n\n**Test Day Takeaway:** When area and circumference are set proportional to each other, one factor of $r$ cancels and the radius falls out in a single step. Then reread which quantity the question actually wants.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circumference-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── S.D. SECTOR AREA (bank-geo-243..245) — top-up to ≥8 ──────────────────
  {
    id: "bank-geo-243",
    domain: "geometry",
    skills: ["sector-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The circle shown has center $O$ and radius $8$. What is the area of the sector with central angle $45°$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 45, angleLabel: "45°", radius: 8, labelCenter: "O", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: arc length instead of area
      { id: "A", text: "$2\\pi$" },
      { id: "B", text: "$8\\pi$" },
      // distractor: uses one quarter of the circle
      { id: "C", text: "$16\\pi$" },
      // distractor: area of the whole circle
      { id: "D", text: "$64\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sector Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $45^\\circ$ is $\\frac{1}{8}$ of a full turn, and the circle's area is $64\\pi$, so the sector is $\\frac{1}{8}(64\\pi) = 8\\pi$.\n\n**The Full Solution:**\nStep 1: The full circle has area $\\pi r^2 = \\pi(8)^2 = 64\\pi$.\nStep 2: The sector covers $\\frac{45}{360} = \\frac{1}{8}$ of the circle.\nStep 3: Sector area $= \\frac{1}{8}(64\\pi) = 8\\pi$. Check: eight such sectors would total $8 \\cdot 8\\pi = 64\\pi$, the whole circle.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2\\pi$): this is the arc length $\\frac{1}{8}(2\\pi \\cdot 8)$, a length rather than an area.\n* Choice C ($16\\pi$): uses $\\frac{1}{4}$ of the circle, the fraction that belongs to a $90^\\circ$ angle.\n* Choice D ($64\\pi$): the area of the entire circle, ignoring the $45^\\circ$ restriction.\n\n**Test Day Takeaway:** Sector area $= \\frac{\\theta}{360^\\circ} \\cdot \\pi r^2$. Convert the angle to a fraction of the circle before touching the radius.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sector-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-244",
    domain: "geometry",
    skills: ["sector-area"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the circle shown, the radius is $6$ and the sector has a central angle of $120°$. The area of the sector is $k\\pi$. What is the value of $k$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 120, angleLabel: "120°", radius: 6, labelCenter: "O", showRadiusLabel: true, figureNote: true } },
    correctAnswer: "12",
    explanation: "**SAT Pattern: Sector Area**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~15s):** $120^\\circ$ is $\\frac{1}{3}$ of the circle, and the circle's area is $36\\pi$, so the sector is $12\\pi$ and $k = 12$.\n\n**The Full Solution:**\nStep 1: The circle's area is $\\pi r^2 = \\pi(6)^2 = 36\\pi$.\nStep 2: The sector covers $\\frac{120}{360} = \\frac{1}{3}$ of the circle.\nStep 3: Sector area $= \\frac{1}{3}(36\\pi) = 12\\pi$, so $k = 12$. Check: three $120^\\circ$ sectors tile the circle, and $3(12\\pi) = 36\\pi$.\n\n**Common Mistakes:** Reporting $36$, the coefficient for the whole circle, instead of taking the $\\frac{1}{3}$ share; reporting $4$, which is the coefficient of the arc length $\\frac{1}{3}(2\\pi \\cdot 6) = 4\\pi$ rather than an area; or using $\\frac{1}{2}$ instead of $\\frac{1}{3}$ and reporting $18$.\n\n**Test Day Takeaway:** When an answer is written as $k\\pi$, compute the sector area in terms of $\\pi$ and grid only the coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sector-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-245",
    domain: "geometry",
    skills: ["sector-area"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the circle with center $O$ shown, the area of the entire circle is $80\\pi$ and the area of sector $AOB$ is $30\\pi$. What is the value of $\\theta$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 135, angleLabel: "θ°", labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
    choices: [
      // distractor: scales 180 degrees instead of 360 degrees
      { id: "A", text: "$67.5°$" },
      // distractor: mis-reduces 30/80 to 3/10
      { id: "B", text: "$108°$" },
      { id: "C", text: "$135°$" },
      // distractor: uses the region outside the sector
      { id: "D", text: "$225°$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Sector Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The sector is $\\frac{30\\pi}{80\\pi} = \\frac{3}{8}$ of the circle, so $\\theta = \\frac{3}{8}(360^\\circ) = 135^\\circ$.\n\n**The Full Solution:**\nStep 1: The share of the circle a sector occupies equals its area divided by the circle's area: $\\frac{30\\pi}{80\\pi} = \\frac{3}{8}$.\nStep 2: A central angle takes the same share of the full $360^\\circ$ turn: $\\theta = \\frac{3}{8}(360^\\circ)$.\nStep 3: $\\frac{3}{8}(360) = 135$, so $\\theta = 135^\\circ$. Check: the remaining region has area $50\\pi$ and central angle $225^\\circ$, and $135 + 225 = 360$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($67.5^\\circ$): applies the correct fraction to $180^\\circ$ instead of to a full $360^\\circ$ turn.\n* Choice B ($108^\\circ$): mis-reduces $\\frac{30}{80}$ to $\\frac{3}{10}$ and computes $\\frac{3}{10}(360^\\circ)$.\n* Choice D ($225^\\circ$): finds the central angle of the region outside sector $AOB$, using $\\frac{50\\pi}{80\\pi}$.\n\n**Test Day Takeaway:** The radius never has to be found here. Area ratio, arc ratio, and angle ratio are all the same fraction of the circle.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sector-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── S.C. RADIANS ↔ DEGREES (bank-geo-246..248) — top-up to ≥8 ────────────
  {
    id: "bank-geo-246",
    domain: "geometry",
    skills: ["trigonometry"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "An angle in standard position measures $210°$. What is the measure of the angle, in radians?",
    choices: [
      // distractor: multiplies by pi/360
      { id: "A", text: "$7\\pi/12$" },
      // distractor: converts 150 degrees instead
      { id: "B", text: "$5\\pi/6$" },
      { id: "C", text: "$7\\pi/6$" },
      // distractor: multiplies by pi/90
      { id: "D", text: "$7\\pi/3$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Radians ↔ Degrees Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Multiply by $\\frac{\\pi}{180}$: $210 \\cdot \\frac{\\pi}{180} = \\frac{7\\pi}{6}$.\n\n**The Full Solution:**\nStep 1: Degrees convert to radians through the factor $\\frac{\\pi}{180}$, since $180^\\circ = \\pi$ radians.\nStep 2: $210 \\cdot \\frac{\\pi}{180} = \\frac{210\\pi}{180}$.\nStep 3: Divide numerator and denominator by $30$: $\\frac{7\\pi}{6}$. Check: $\\frac{7\\pi}{6}$ is slightly more than $\\pi$, and $210^\\circ$ is slightly more than $180^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7\\pi}{12}$): multiplies by $\\frac{\\pi}{360}$, using a full turn instead of a half turn.\n* Choice B ($\\frac{5\\pi}{6}$): converts $150^\\circ$, the supplement of $210^\\circ$, rather than $210^\\circ$ itself.\n* Choice D ($\\frac{7\\pi}{3}$): multiplies by $\\frac{\\pi}{90}$, which would make a full turn $4\\pi$.\n\n**Test Day Takeaway:** Sanity-check the size: an angle between $180^\\circ$ and $360^\\circ$ must land between $\\pi$ and $2\\pi$ radians.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "radians-degrees-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-247",
    domain: "geometry",
    skills: ["trigonometry"],
    difficulty: "medium",
    type: "fill-in",
    question: "A central angle in a circle measures $\\dfrac{11\\pi}{12}$ radians. What is the measure of this angle, in degrees?",
    correctAnswer: "165",
    explanation: "**SAT Pattern: Radians ↔ Degrees Conversion**\n\n**The correct answer is $165$.**\n\n**The Fast Way (~10s):** Multiply by $\\frac{180}{\\pi}$; the $\\pi$ cancels: $\\frac{11 \\cdot 180}{12} = 165$.\n\n**The Full Solution:**\nStep 1: Radians convert to degrees through the factor $\\frac{180}{\\pi}$.\nStep 2: $\\frac{11\\pi}{12} \\cdot \\frac{180}{\\pi} = \\frac{11 \\cdot 180}{12}$.\nStep 3: $\\frac{1980}{12} = 165$ degrees. Check: $\\frac{11\\pi}{12}$ is just under $\\pi$, and $165^\\circ$ is just under $180^\\circ$.\n\n**Common Mistakes:** Reporting $15$, which is $\\frac{180}{12}$ with the factor of $11$ forgotten; or multiplying by $\\frac{\\pi}{180}$ (the degrees-to-radians direction), which leaves $\\pi$ in the answer and cannot be gridded.\n\n**Test Day Takeaway:** Going from radians to degrees, the $\\pi$ must cancel. If $\\pi$ survives, the conversion factor was used upside down.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "radians-degrees-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-248",
    domain: "geometry",
    skills: ["trigonometry"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The measure of angle $A$ is $\\frac{7\\pi}{10}$ radians. The measure of angle $B$ is $18°$ less than the measure of angle $A$. What is the measure, in degrees, of angle $B$?",
    choices: [
      { id: "A", text: "$108$" },
      // distractor: reports angle A instead of angle B
      { id: "B", text: "$126$" },
      // distractor: adds 18 instead of subtracting
      { id: "C", text: "$144$" },
      // distractor: converts with 360 over pi, doubling the degree measure
      { id: "D", text: "$234$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Radians ↔ Degrees Conversion**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $\\frac{7\\pi}{10} \\cdot \\frac{180}{\\pi} = 126$ degrees, and $126 - 18 = 108$.\n\n**The Full Solution:**\nStep 1: Convert angle $A$ to degrees by multiplying by $\\frac{180}{\\pi}$, so that the $\\pi$ cancels: $\\frac{7\\pi}{10} \\cdot \\frac{180}{\\pi} = \\frac{7 \\cdot 180}{10}$.\nStep 2: $\\frac{1260}{10} = 126$, so angle $A$ measures $126^\\circ$.\nStep 3: Angle $B$ is $18^\\circ$ smaller: $126 - 18 = 108$ degrees. Check: $108^\\circ$ converts back to $\\frac{108\\pi}{180} = \\frac{3\\pi}{5}$ radians, which is less than $\\frac{7\\pi}{10}$, as it must be.\n\n**Why the wrong answers are tempting:**\n* Choice B ($126$): converts angle $A$ correctly but reports that angle instead of angle $B$.\n* Choice C ($144$): adds $18^\\circ$ to angle $A$, reading \"less than\" backwards.\n* Choice D ($234$): converts with $\\frac{360}{\\pi}$, turning $\\frac{7\\pi}{10}$ into $252^\\circ$, then subtracts $18$.\n\n**Test Day Takeaway:** Convert first, then apply the relationship. Radians become degrees through $\\frac{180}{\\pi}$ — a half turn, never a full one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "radians-degrees-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── S.C. 30-60-90 TRIANGLE (bank-geo-249..255) — top-up to ≥8 ────────────
  {
    id: "bank-geo-249",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the right triangle shown, the side opposite the $30°$ angle has length $6$. What is the length of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { labels: ["30°", "", "60°"], sideLabels: ["", "6", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: treats 6 as the hypotenuse and halves it
      { id: "A", text: "$3$" },
      // distractor: copies the given side
      { id: "B", text: "$6$" },
      { id: "C", text: "$12$" },
      // distractor: uses a 1:2:3 ratio
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** In a $30$-$60$-$90$ triangle the hypotenuse is twice the side opposite $30^\\circ$: $2(6) = 12$.\n\n**The Full Solution:**\nStep 1: The sides of a $30$-$60$-$90$ triangle are in the ratio $1 : \\sqrt{3} : 2$, matched to the $30^\\circ$, $60^\\circ$, and $90^\\circ$ angles.\nStep 2: The side opposite $30^\\circ$ corresponds to the $1$, so the scale factor is $6$.\nStep 3: The hypotenuse corresponds to the $2$, so it measures $2(6) = 12$. Check: the third side is $6\\sqrt{3} \\approx 10.4$, which lies between $6$ and $12$ as a middle side must.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): treats the given $6$ as the hypotenuse and halves it, reversing the relationship.\n* Choice B ($6$): copies the given side instead of scaling to the hypotenuse.\n* Choice D ($18$): uses an invented $1 : 2 : 3$ side ratio.\n\n**Test Day Takeaway:** The hypotenuse of a $30$-$60$-$90$ triangle is always exactly twice the shortest side, the one facing the $30^\\circ$ angle.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "30-60-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-250",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "easy",
    type: "fill-in",
    question: "A wheelchair ramp rises at a $30°$ angle. The sloped surface of the ramp is the hypotenuse of the right triangle shown and is $16$ feet long. What is the vertical rise, in feet, of the ramp?",
    diagram: { type: "rightTriangle", params: { labels: ["30°", "", "60°"], sideLabels: ["", "", "16"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "8",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** The vertical rise faces the $30^\\circ$ angle, so it is half the hypotenuse: $\\frac{16}{2} = 8$ feet.\n\n**The Full Solution:**\nStep 1: The ramp, its shadow on the ground, and the vertical rise form a $30$-$60$-$90$ triangle with sides in the ratio $1 : \\sqrt{3} : 2$.\nStep 2: The hypotenuse corresponds to the $2$, so the scale factor is $\\frac{16}{2} = 8$.\nStep 3: The vertical rise is opposite the $30^\\circ$ angle, so it corresponds to the $1$ and measures $8$ feet. Check: the horizontal run is $8\\sqrt{3} \\approx 13.9$ feet, and $8^2 + (8\\sqrt{3})^2 = 64 + 192 = 256 = 16^2$.\n\n**Common Mistakes:** Reporting $32$ by doubling the hypotenuse instead of halving it; or reporting the horizontal run $8\\sqrt{3}$, the side opposite the $60^\\circ$ angle, which is not what the question asks for.\n\n**Test Day Takeaway:** Identify which angle a side faces before scaling. The side opposite $30^\\circ$ is always half the hypotenuse.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "30-60-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-251",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In triangle $PQR$ shown, $\\angle P$ measures $30°$, $\\angle Q$ measures $90°$, and $PQ = 15\\sqrt{3}$. What is the length of $PR$?",
    diagram: { type: "rightTriangle", params: { labels: ["P", "Q", "R"], sideLabels: ["15√3", "", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: stops at the short leg
      { id: "A", text: "$15$" },
      { id: "B", text: "$30$" },
      // distractor: uses a 1:2:3 ratio
      { id: "C", text: "$45$" },
      // distractor: doubles the long leg
      { id: "D", text: "$30\\sqrt{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $PQ$ faces the $60^\\circ$ angle, so $PQ = s\\sqrt{3}$ gives $s = 15$; the hypotenuse $PR$ is $2s = 30$.\n\n**The Full Solution:**\nStep 1: Since $\\angle P = 30^\\circ$ and $\\angle Q = 90^\\circ$, the remaining angle $\\angle R = 60^\\circ$, and $PQ$ is the side opposite $\\angle R$.\nStep 2: In the ratio $1 : \\sqrt{3} : 2$, the side opposite $60^\\circ$ is $s\\sqrt{3}$. So $s\\sqrt{3} = 15\\sqrt{3}$ and $s = 15$.\nStep 3: $PR$ is the hypotenuse, opposite the right angle, so $PR = 2s = 30$. Check: $15^2 + (15\\sqrt{3})^2 = 225 + 675 = 900 = 30^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): stops at the short leg $QR$ instead of continuing to the hypotenuse.\n* Choice C ($45$): triples the short leg, using an invented $1 : 2 : 3$ ratio.\n* Choice D ($30\\sqrt{3}$): doubles the given side $15\\sqrt{3}$, treating the long leg as if it were the short leg.\n\n**Test Day Takeaway:** Strip the $\\sqrt{3}$ off the long leg to recover the short leg, then double it. Never double the long leg directly.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "30-60-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-252",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "An equilateral triangle has a perimeter of $36$ centimeters. What is the length, in centimeters, of an altitude of the triangle?",
    choices: [
      // distractor: omits the square-root-3 factor
      { id: "A", text: "$6$" },
      // distractor: uses the 45-45-90 ratio
      { id: "B", text: "$6\\sqrt{2}$" },
      { id: "C", text: "$6\\sqrt{3}$" },
      // distractor: uses the full side as the short leg
      { id: "D", text: "$12\\sqrt{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Each side is $12$. The altitude splits the triangle into $30$-$60$-$90$ halves with short leg $6$, so the altitude is $6\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: An equilateral triangle has three equal sides, so each side is $\\frac{36}{3} = 12$ centimeters.\nStep 2: An altitude bisects the base and creates two $30$-$60$-$90$ triangles whose short leg is $\\frac{12}{2} = 6$ and whose hypotenuse is $12$.\nStep 3: The altitude is the long leg, $6\\sqrt{3}$ centimeters. Check: $6^2 + (6\\sqrt{3})^2 = 36 + 108 = 144 = 12^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports half the side, the short leg, without the $\\sqrt{3}$ factor.\n* Choice B ($6\\sqrt{2}$): borrows the $45$-$45$-$90$ ratio, which does not apply to an equilateral triangle.\n* Choice D ($12\\sqrt{3}$): uses the full side length as the short leg instead of half of it.\n\n**Test Day Takeaway:** An altitude of an equilateral triangle of side $s$ is $\\frac{s\\sqrt{3}}{2}$ — the long leg of the $30$-$60$-$90$ triangle it creates.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "30-60-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-253",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "medium",
    type: "fill-in",
    question: "In right triangle $ABC$ shown, $\\angle B$ measures $90°$, $\\angle C$ measures $60°$, and $BC = 11$. What is the length of $AC$?",
    diagram: { type: "rightTriangle", params: { labels: ["A", "B", "C"], sideLabels: ["", "11", ""], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "22",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~15s):** $BC$ faces the $30^\\circ$ angle at $A$, so it is the short leg; the hypotenuse $AC$ is twice it: $2(11) = 22$.\n\n**The Full Solution:**\nStep 1: The angles sum to $180^\\circ$, so $\\angle A = 180 - 90 - 60 = 30^\\circ$.\nStep 2: Side $BC$ is opposite $\\angle A$, so it is the shortest side, the $1$ in the ratio $1 : \\sqrt{3} : 2$. The scale factor is $11$.\nStep 3: Side $AC$ is opposite the right angle, so $AC = 2(11) = 22$. Check: $AB = 11\\sqrt{3} \\approx 19.1$, and $11^2 + (11\\sqrt{3})^2 = 121 + 363 = 484 = 22^2$.\n\n**Common Mistakes:** Reporting $5.5$ by halving the given side instead of doubling it; or matching $BC$ to the $60^\\circ$ angle and reporting the length of $AB$, which is $11\\sqrt{3}$ and not a gridable value here.\n\n**Test Day Takeaway:** In a lettered triangle, find the missing angle first. The side opposite the smallest angle is the shortest side.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "30-60-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-254",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The right triangle shown has an acute angle of $30°$ and an area of $50\\sqrt{3}$ square units. What is the length of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { labels: ["30°", "", "60°"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: stops at the short leg
      { id: "A", text: "$10$" },
      { id: "B", text: "$20$" },
      // distractor: uses a 1:2:3 ratio
      { id: "C", text: "$30$" },
      // distractor: reports the square of the short leg
      { id: "D", text: "$100$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** With legs $s$ and $s\\sqrt{3}$, the area is $\\frac{s^2\\sqrt{3}}{2} = 50\\sqrt{3}$, so $s^2 = 100$, $s = 10$, and the hypotenuse is $20$.\n\n**The Full Solution:**\nStep 1: Call the short leg $s$. In a $30$-$60$-$90$ triangle the other leg is $s\\sqrt{3}$, and the legs are perpendicular, so they serve as base and height.\nStep 2: Area $= \\frac{1}{2}(s)(s\\sqrt{3}) = \\frac{s^2\\sqrt{3}}{2}$. Setting this equal to $50\\sqrt{3}$ and dividing both sides by $\\sqrt{3}$ gives $\\frac{s^2}{2} = 50$, so $s^2 = 100$ and $s = 10$.\nStep 3: The hypotenuse is $2s = 20$. Check: the legs are $10$ and $10\\sqrt{3}$, and $\\frac{1}{2}(10)(10\\sqrt{3}) = 50\\sqrt{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): finds the short leg and stops one step early.\n* Choice C ($30$): triples the short leg, using an invented $1 : 2 : 3$ ratio instead of $1 : \\sqrt{3} : 2$.\n* Choice D ($100$): reports $s^2$ without taking the square root.\n\n**Test Day Takeaway:** When only an area is given, name the short leg $s$, write both legs in terms of $s$, and let the $\\sqrt{3}$ cancel.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "30-60-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-255",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In triangle $ABC$ shown, $\\angle C$ is a right angle and $AB = 12$. What is the area of triangle $ABC$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["30°", "60°", "90°"], vertexLabels: ["A", "B", "C"], figureNote: true } },
    choices: [
      // distractor: applies the one-half a second time
      { id: "A", text: "$9\\sqrt{3}$" },
      { id: "B", text: "$18\\sqrt{3}$" },
      // distractor: omits the one-half
      { id: "C", text: "$36\\sqrt{3}$" },
      // distractor: uses the hypotenuse as the short leg
      { id: "D", text: "$72\\sqrt{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The hypotenuse $12$ gives legs $6$ and $6\\sqrt{3}$, so the area is $\\frac{1}{2}(6)(6\\sqrt{3}) = 18\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The angles are $30^\\circ$ at $A$, $60^\\circ$ at $B$, and $90^\\circ$ at $C$, so the sides are in the ratio $1 : \\sqrt{3} : 2$ and $AB = 12$ is the hypotenuse.\nStep 2: The scale factor is $\\frac{12}{2} = 6$, so $BC = 6$ (opposite $30^\\circ$) and $AC = 6\\sqrt{3}$ (opposite $60^\\circ$).\nStep 3: The legs meet at the right angle, so area $= \\frac{1}{2}(6)(6\\sqrt{3}) = 18\\sqrt{3}$. Check: $6^2 + (6\\sqrt{3})^2 = 36 + 108 = 144 = 12^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9\\sqrt{3}$): applies the factor $\\frac{1}{2}$ a second time after the area is already computed.\n* Choice C ($36\\sqrt{3}$): multiplies the two legs but omits the $\\frac{1}{2}$.\n* Choice D ($72\\sqrt{3}$): treats $12$ as the short leg, giving legs $12$ and $12\\sqrt{3}$.\n\n**Test Day Takeaway:** In a right triangle the two legs are the base and height. Scale down from the hypotenuse before multiplying.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "30-60-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── S.C. 45-45-90 TRIANGLE (bank-geo-256..262) — top-up to ≥8 ────────────
  {
    id: "bank-geo-256",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the right triangle shown, both legs have length $10$. What is the length of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { labels: ["45°", "", "45°"], sideLabels: ["10", "10", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: divides by root 2 instead of multiplying
      { id: "A", text: "$5\\sqrt{2}$" },
      { id: "B", text: "$10\\sqrt{2}$" },
      // distractor: doubles the leg first
      { id: "C", text: "$20\\sqrt{2}$" },
      // distractor: squares the leg first
      { id: "D", text: "$100\\sqrt{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** In a $45$-$45$-$90$ triangle the hypotenuse is a leg times $\\sqrt{2}$: $10\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: Two equal legs and a right angle force both acute angles to be $45^\\circ$, so the sides are in the ratio $1 : 1 : \\sqrt{2}$.\nStep 2: The scale factor is the leg length, $10$.\nStep 3: The hypotenuse is $10\\sqrt{2}$. Check with the Pythagorean theorem: $10^2 + 10^2 = 200$, and $(10\\sqrt{2})^2 = 200$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\sqrt{2}$): divides the leg by $\\sqrt{2}$ instead of multiplying, reversing the leg-to-hypotenuse direction.\n* Choice C ($20\\sqrt{2}$): doubles the leg first, borrowing the $30$-$60$-$90$ rule that the hypotenuse is twice a side.\n* Choice D ($100\\sqrt{2}$): multiplies $\\sqrt{2}$ by the square of the leg instead of by the leg.\n\n**Test Day Takeaway:** Legs to hypotenuse, multiply by $\\sqrt{2}$; hypotenuse to legs, divide by $\\sqrt{2}$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "45-45-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-257",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "easy",
    type: "fill-in",
    question: "A square window pane has a diagonal of length $13\\sqrt{2}$ inches. What is the length, in inches, of each side of the pane?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~10s):** A square's diagonal is a side times $\\sqrt{2}$, so the side is $\\frac{13\\sqrt{2}}{\\sqrt{2}} = 13$ inches.\n\n**The Full Solution:**\nStep 1: A diagonal cuts the square into two $45$-$45$-$90$ triangles whose legs are sides of the square and whose hypotenuse is the diagonal.\nStep 2: For that triangle, hypotenuse $= $ leg $\\cdot \\sqrt{2}$, so $13\\sqrt{2} = s\\sqrt{2}$.\nStep 3: Dividing both sides by $\\sqrt{2}$ gives $s = 13$ inches. Check: $13^2 + 13^2 = 338$, and $(13\\sqrt{2})^2 = 169 \\cdot 2 = 338$.\n\n**Common Mistakes:** Reporting $6.5$ by dividing the diagonal by $2$ instead of by $\\sqrt{2}$; or reporting $26$ by multiplying by $\\sqrt{2}$ again, since $13\\sqrt{2} \\cdot \\sqrt{2} = 26$.\n\n**Test Day Takeaway:** A diagonal written as $k\\sqrt{2}$ is a gift: the side of the square is simply $k$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "45-45-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-258",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The isosceles right triangle shown has a hypotenuse of length $16$. What is the area of the triangle?",
    diagram: { type: "rightTriangle", params: { labels: ["45°", "", "45°"], sideLabels: ["", "", "16"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: uses legs of 8
      { id: "A", text: "$32$" },
      { id: "B", text: "$64$" },
      // distractor: omits the one-half
      { id: "C", text: "$128$" },
      // distractor: squares the hypotenuse
      { id: "D", text: "$256$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Each leg is $\\frac{16}{\\sqrt{2}} = 8\\sqrt{2}$, so the area is $\\frac{1}{2}(8\\sqrt{2})^2 = \\frac{1}{2}(128) = 64$.\n\n**The Full Solution:**\nStep 1: In a $45$-$45$-$90$ triangle the hypotenuse is a leg times $\\sqrt{2}$, so $s\\sqrt{2} = 16$ and $s = \\frac{16}{\\sqrt{2}} = 8\\sqrt{2}$.\nStep 2: The two legs are perpendicular, so they are the base and the height: area $= \\frac{1}{2}(8\\sqrt{2})(8\\sqrt{2})$.\nStep 3: $(8\\sqrt{2})^2 = 64 \\cdot 2 = 128$, so the area is $\\frac{1}{2}(128) = 64$. Check: $128 + 128 = 256 = 16^2$, confirming the leg length.\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): halves the hypotenuse to get legs of $8$, then computes $\\frac{1}{2}(8)(8)$.\n* Choice C ($128$): multiplies the two legs but omits the factor $\\frac{1}{2}$.\n* Choice D ($256$): squares the hypotenuse, which gives the sum of the squares of the legs, not an area.\n\n**Test Day Takeaway:** Divide the hypotenuse by $\\sqrt{2}$, never by $2$. The leg of a $45$-$45$-$90$ triangle is about $71\\%$ of the hypotenuse, not half.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "45-45-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-259",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "medium",
    type: "fill-in",
    question: "The diagonal of a square measures $6$ centimeters. What is the area, in square centimeters, of the square?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~20s):** The side is $\\frac{6}{\\sqrt{2}} = 3\\sqrt{2}$, so the area is $(3\\sqrt{2})^2 = 18$ square centimeters.\n\n**The Full Solution:**\nStep 1: The diagonal of a square is a side times $\\sqrt{2}$, so $s\\sqrt{2} = 6$.\nStep 2: Solve for the side: $s = \\frac{6}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$ centimeters.\nStep 3: Area $= s^2 = (3\\sqrt{2})^2 = 9 \\cdot 2 = 18$ square centimeters. Check: $18 + 18 = 36 = 6^2$, matching the Pythagorean theorem for the two halves.\n\n**Common Mistakes:** Reporting $36$ by squaring the diagonal as though it were a side; or reporting $9$ by halving the diagonal to get a side of $3$ and squaring that.\n\n**Test Day Takeaway:** A square with diagonal $d$ has area $\\frac{d^2}{2}$ — half the square of the diagonal, because two of the squares stack to $d^2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "45-45-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-260",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Triangle $DEF$ shown is an isosceles right triangle with a right angle at $F$ and an area of $50$ square units. What is the length of $DE$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["45°", "45°", "90°"], vertexLabels: ["D", "E", "F"], figureNote: true } },
    choices: [
      // distractor: drops the one-half and reports the leg
      { id: "A", text: "$5\\sqrt{2}$" },
      { id: "B", text: "$10\\sqrt{2}$" },
      // distractor: uses the area as a leg
      { id: "C", text: "$50\\sqrt{2}$" },
      // distractor: uses the square of the leg as a leg
      { id: "D", text: "$100\\sqrt{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $\\frac{1}{2}s^2 = 50$ gives $s = 10$, and $DE$ is the hypotenuse, so $DE = 10\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $F$, so $DF$ and $EF$ are the legs; being isosceles, they are equal. Call each one $s$.\nStep 2: Area $= \\frac{1}{2}s \\cdot s = \\frac{s^2}{2} = 50$, so $s^2 = 100$ and $s = 10$.\nStep 3: $DE$ is opposite the right angle, so $DE = s\\sqrt{2} = 10\\sqrt{2}$. Check: $10^2 + 10^2 = 200 = (10\\sqrt{2})^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\sqrt{2}$): solves $s^2 = 50$ by dropping the $\\frac{1}{2}$, getting $s = 5\\sqrt{2}$, and reports that leg as the hypotenuse.\n* Choice C ($50\\sqrt{2}$): treats the area $50$ itself as a leg length.\n* Choice D ($100\\sqrt{2}$): uses $s^2 = 100$ as the leg length without taking the square root.\n\n**Test Day Takeaway:** For an isosceles right triangle, area $= \\frac{s^2}{2}$. Solve for the leg, then attach $\\sqrt{2}$ only at the end.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "45-45-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-261",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the isosceles right triangle shown, each leg has length $s$ and the hypotenuse is $6$ units longer than a leg. What is the value of $s$?",
    diagram: { type: "rightTriangle", params: { labels: ["45°", "", "45°"], sideLabels: ["s", "s", "s + 6"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: multiplies by root 2 minus 1 instead of dividing
      { id: "A", text: "$6\\sqrt{2} - 6$" },
      // distractor: uses a denominator of 2 when rationalizing
      { id: "B", text: "$3 + 3\\sqrt{2}$" },
      { id: "C", text: "$6 + 6\\sqrt{2}$" },
      // distractor: reports the hypotenuse
      { id: "D", text: "$12 + 6\\sqrt{2}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** $s\\sqrt{2} = s + 6$ gives $s(\\sqrt{2} - 1) = 6$, so $s = \\frac{6}{\\sqrt{2} - 1} = 6(\\sqrt{2} + 1) = 6 + 6\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: In a $45$-$45$-$90$ triangle the hypotenuse is $s\\sqrt{2}$. The condition in the figure says $s\\sqrt{2} = s + 6$.\nStep 2: Collect the $s$ terms: $s\\sqrt{2} - s = 6$, so $s(\\sqrt{2} - 1) = 6$ and $s = \\frac{6}{\\sqrt{2} - 1}$.\nStep 3: Rationalize by multiplying numerator and denominator by $\\sqrt{2} + 1$. The denominator becomes $(\\sqrt{2})^2 - 1^2 = 1$, so $s = 6(\\sqrt{2} + 1) = 6 + 6\\sqrt{2}$. Check: $s \\approx 14.49$ and $s\\sqrt{2} \\approx 20.49$, a difference of $6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6\\sqrt{2} - 6$): multiplies by $\\sqrt{2} - 1$ instead of dividing by it.\n* Choice B ($3 + 3\\sqrt{2}$): rationalizes but records the denominator $(\\sqrt{2} - 1)(\\sqrt{2} + 1)$ as $2$ rather than $1$.\n* Choice D ($12 + 6\\sqrt{2}$): solves for $s$ correctly but reports the hypotenuse $s + 6$.\n\n**Test Day Takeaway:** When a side is described relative to another side, set up one equation in one variable and rationalize carefully: $(\\sqrt{2} - 1)(\\sqrt{2} + 1) = 1$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "45-45-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-262",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In triangle $JKL$ shown, angle $K$ measures $90°$ and side $JK$ has length $12$. What is the area of triangle $JKL$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["45°", "90°", "45°"], vertexLabels: ["J", "K", "L"], figureNote: true } },
    choices: [
      // distractor: adds the legs
      { id: "A", text: "$24$" },
      { id: "B", text: "$72$" },
      // distractor: omits the one-half
      { id: "C", text: "$144$" },
      // distractor: doubles instead of halving
      { id: "D", text: "$288$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Both acute angles are $45^\\circ$, so $KL = JK = 12$ and the area is $\\frac{1}{2}(12)(12) = 72$.\n\n**The Full Solution:**\nStep 1: Angles $J$ and $L$ both measure $45^\\circ$, so triangle $JKL$ is isosceles with the two legs meeting at the right angle at $K$.\nStep 2: Sides opposite equal angles are equal, so $KL = JK = 12$.\nStep 3: The legs are the base and the height: area $= \\frac{1}{2}(12)(12) = 72$. Check: the hypotenuse $JL = 12\\sqrt{2} \\approx 17.0$, longer than either leg, as required.\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): adds the two legs instead of applying the area formula.\n* Choice C ($144$): multiplies the legs but omits the factor $\\frac{1}{2}$.\n* Choice D ($288$): multiplies the product of the legs by $2$ instead of by $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Equal base angles mean equal opposite sides. In a right triangle, the two legs are already the base and the height.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "45-45-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // ─── S.B. VERTICAL ANGLES (bank-geo-263..270) — new canonical ─────────────
  {
    id: "bank-geo-263",
    domain: "geometry",
    skills: ["angles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the figure shown, lines $\\ell$ and $m$ intersect, forming four angles. What is the value of $x$?",
    diagram: { type: "intersectingLines", params: { angles: ["62°", "", "x°", ""], lineLabels: ["ℓ", "m"], figureNote: true } },
    choices: [
      // distractor: takes the complement
      { id: "A", text: "$28$" },
      // distractor: halves the given angle
      { id: "B", text: "$31$" },
      { id: "C", text: "$62$" },
      // distractor: takes the supplement
      { id: "D", text: "$118$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** The angle marked $x^\\circ$ is directly across the intersection from the $62^\\circ$ angle, so $x = 62$.\n\n**The Full Solution:**\nStep 1: Two lines crossing at a point create two pairs of vertical angles — the angles that sit opposite each other, sharing only the vertex.\nStep 2: The $62^\\circ$ angle and the angle marked $x^\\circ$ are such a pair.\nStep 3: Vertical angles are congruent, so $x = 62$. Check: each of the two angles adjacent to them measures $180 - 62 = 118^\\circ$, and $62 + 118 = 180$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): computes $90 - 62$, treating the pair as complementary.\n* Choice B ($31$): halves the given measure.\n* Choice D ($118$): computes $180 - 62$, which is an angle adjacent to the given one, not the one across from it.\n\n**Test Day Takeaway:** Across the intersection means equal; next to it means the two add to $180^\\circ$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-angles",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-264",
    domain: "geometry",
    skills: ["angles"],
    difficulty: "easy",
    type: "fill-in",
    question: "The figure shows two intersecting lines. The angles marked $124°$ and $y°$ are adjacent, and together they form a straight line. What is the value of $y$?",
    diagram: { type: "intersectingLines", params: { angles: ["", "124°", "y°", ""], figureNote: true } },
    correctAnswer: "56",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**The correct answer is $56$.**\n\n**The Fast Way (~5s):** Adjacent angles on a line are supplementary: $y = 180 - 124 = 56$.\n\n**The Full Solution:**\nStep 1: The two marked angles share a ray and their outer rays form a straight line, so they are a linear pair.\nStep 2: A linear pair sums to $180^\\circ$: $124 + y = 180$.\nStep 3: $y = 56$. Check: the angle vertical to the $124^\\circ$ angle also measures $124^\\circ$, and the four angles total $124 + 56 + 124 + 56 = 360$.\n\n**Common Mistakes:** Reporting $124$ by treating the marked angles as a vertical pair rather than an adjacent pair; or reporting $236$ by subtracting from $360$ instead of $180$.\n\n**Test Day Takeaway:** At a crossing, only two numbers exist. Find the pair that lies on a straight line and subtract from $180^\\circ$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-angles",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-265",
    domain: "geometry",
    skills: ["angles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the figure shown, two lines intersect and the two marked angles are a pair of vertical angles. What is the value of $x$?",
    diagram: { type: "intersectingLines", params: { angles: ["(3x + 8)°", "", "(5x - 12)°", ""], figureNote: true } },
    choices: [
      // distractor: subtracts 8 from 12 instead of adding
      { id: "A", text: "$2$" },
      { id: "B", text: "$10$" },
      // distractor: treats the angles as supplementary
      { id: "C", text: "$23$" },
      // distractor: reports the angle measure
      { id: "D", text: "$38$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Vertical angles are equal: $3x + 8 = 5x - 12 \\Rightarrow 20 = 2x \\Rightarrow x = 10$.\n\n**The Full Solution:**\nStep 1: The two marked angles sit opposite each other at the intersection, so their measures are equal: $3x + 8 = 5x - 12$.\nStep 2: Subtract $3x$ from both sides: $8 = 2x - 12$. Add $12$: $20 = 2x$.\nStep 3: $x = 10$. Check: $3(10) + 8 = 38$ and $5(10) - 12 = 38$, so both marked angles measure $38^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): moves the constants as $12 - 8 = 4$ instead of $12 + 8 = 20$, giving $2x = 4$.\n* Choice C ($23$): sets the two expressions supplementary, solving $8x - 4 = 180$.\n* Choice D ($38$): finds $x = 10$ correctly but reports the angle measure instead of $x$.\n\n**Test Day Takeaway:** Set vertical angle expressions equal, not supplementary — and reread whether the question wants $x$ or the angle.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-angles",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-266",
    domain: "geometry",
    skills: ["angles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the figure shown, two lines intersect, forming the four angles labeled $\\angle 1$, $\\angle 2$, $\\angle 3$, and $\\angle 4$. If the measure of $\\angle 2$ is $68°$, what is the measure of $\\angle 4$?",
    diagram: { type: "intersectingLines", params: { angles: ["4", "1", "2", "3"], figureNote: true } },
    choices: [
      // distractor: takes the complement
      { id: "A", text: "$22°$" },
      { id: "B", text: "$68°$" },
      // distractor: takes the supplement
      { id: "C", text: "$112°$" },
      // distractor: doubles the given angle
      { id: "D", text: "$136°$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In the figure, $\\angle 2$ and $\\angle 4$ sit opposite each other at the intersection, so they are vertical angles and $\\angle 4 = 68^\\circ$.\n\n**The Full Solution:**\nStep 1: Reading around the intersection, $\\angle 1$ and $\\angle 3$ are one opposite pair and $\\angle 2$ and $\\angle 4$ are the other.\nStep 2: Vertical angles formed by two intersecting lines are congruent.\nStep 3: Therefore $\\angle 4$ measures $68^\\circ$. Check: $\\angle 1$ and $\\angle 3$ each measure $180 - 68 = 112^\\circ$, and the four angles sum to $360^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($22^\\circ$): computes $90 - 68$, as if the two angles were complementary.\n* Choice C ($112^\\circ$): gives $180 - 68$, the measure of $\\angle 1$ or $\\angle 3$, which are adjacent to $\\angle 2$.\n* Choice D ($136^\\circ$): doubles the given measure.\n\n**Test Day Takeaway:** With numbered angles, count positions around the vertex: angles two apart in the cycle are vertical, angles one apart are supplementary.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-angles",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-267",
    domain: "geometry",
    skills: ["angles"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the figure shown, the angles marked $(5x - 4)°$ and $(3x + 26)°$ are vertical angles. What is the measure, in degrees, of each of these two angles?",
    diagram: { type: "intersectingLines", params: { angles: ["(5x - 4)°", "", "(3x + 26)°", ""], figureNote: true } },
    correctAnswer: "71",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**The correct answer is $71$.**\n\n**The Fast Way (~25s):** $5x - 4 = 3x + 26$ gives $x = 15$, and $5(15) - 4 = 71$.\n\n**The Full Solution:**\nStep 1: Vertical angles are congruent, so $5x - 4 = 3x + 26$.\nStep 2: Subtract $3x$ and add $4$: $2x = 30$, so $x = 15$.\nStep 3: Substitute back: $5(15) - 4 = 71$. Check: $3(15) + 26 = 71$ as well, so both expressions agree.\n\n**Common Mistakes:** Gridding $15$, the value of $x$, when the question asks for the angle measure; or gridding $109$, which is $180 - 71$, the measure of an adjacent angle rather than a marked one.\n\n**Test Day Takeaway:** Solving for $x$ is the middle of the problem, not the end. Substitute back whenever the question asks for a measure.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-angles",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-268",
    domain: "geometry",
    skills: ["angles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the figure shown, two lines intersect, forming four angles with measures $a°$, $b°$, $c°$, and $d°$ in order around the point of intersection. If $b = 4a$, what is the value of $a$?",
    diagram: { type: "intersectingLines", params: { angles: ["a°", "b°", "c°", "d°"], figureNote: true } },
    choices: [
      { id: "A", text: "$36$" },
      // distractor: divides 180 by 4
      { id: "B", text: "$45$" },
      // distractor: uses 360 instead of 180
      { id: "C", text: "$72$" },
      // distractor: reports b instead of a
      { id: "D", text: "$144$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $a$ and $b$ are adjacent, so $a + b = 180$. Substituting $b = 4a$ gives $5a = 180$ and $a = 36$.\n\n**The Full Solution:**\nStep 1: Angles listed consecutively around the intersection are adjacent, so $a^\\circ$ and $b^\\circ$ form a linear pair: $a + b = 180$.\nStep 2: Replace $b$ with $4a$: $a + 4a = 180$, so $5a = 180$.\nStep 3: $a = 36$. Check: $b = 144$, and the four angles are $36$, $144$, $36$, $144$, which sum to $360$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($45$): divides $180$ by $4$, using the multiplier as the number of parts.\n* Choice C ($72$): divides $360$ by $5$, applying the linear-pair split to a full turn.\n* Choice D ($144$): solves correctly but reports $b$ rather than $a$.\n\n**Test Day Takeaway:** Consecutive angles at a crossing are supplementary. Turn the given relationship into a single equation in one variable.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-angles",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-269",
    domain: "geometry",
    skills: ["angles"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the figure shown, lines $\\ell$ and $m$ intersect, and the two marked angles are adjacent. What is the measure, in degrees, of the angle vertical to the smaller of the two marked angles?",
    diagram: { type: "intersectingLines", params: { angles: ["(3x + 22)°", "(7x - 12)°", "", ""], lineLabels: ["ℓ", "m"], figureNote: true } },
    choices: [
      // distractor: reports x
      { id: "A", text: "$17$" },
      { id: "B", text: "$73$" },
      // distractor: reports the larger marked angle
      { id: "C", text: "$107$" },
      // distractor: subtracts from 360
      { id: "D", text: "$287$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $(7x - 12) + (3x + 22) = 180$ gives $x = 17$, so the angles are $107^\\circ$ and $73^\\circ$. The angle vertical to the smaller one also measures $73^\\circ$.\n\n**The Full Solution:**\nStep 1: The two marked angles are adjacent at the intersection, so they form a linear pair: $(7x - 12) + (3x + 22) = 180$.\nStep 2: Combine like terms: $10x + 10 = 180$, so $10x = 170$ and $x = 17$.\nStep 3: The angles measure $7(17) - 12 = 107$ and $3(17) + 22 = 73$ degrees. The smaller is $73^\\circ$, and its vertical angle is congruent to it, so the answer is $73$. Check: $107 + 73 = 180$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): reports $x$ instead of an angle measure.\n* Choice C ($107$): reports the larger marked angle, which is adjacent to the smaller one rather than vertical to it.\n* Choice D ($287$): subtracts $73$ from $360$, as if the vertical angle completed a full turn.\n\n**Test Day Takeaway:** Vertical means congruent, so the extra step costs nothing — but you still have to identify which of the two computed angles the question named.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-angles",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-270",
    domain: "geometry",
    skills: ["angles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the figure shown, lines $p$ and $q$ intersect, forming four angles. The angle marked $x°$ is adjacent to the angle that measures $53°$. What is the value of $x$?",
    diagram: { type: "intersectingLines", params: { angles: ["53°", "x°", "", ""], lineLabels: ["p", "q"], figureNote: true } },
    choices: [
      // distractor: takes the complement instead of the supplement
      { id: "A", text: "$37$" },
      // distractor: treats the marked angles as vertical angles
      { id: "B", text: "$53$" },
      { id: "C", text: "$127$" },
      // distractor: adds 90 to the given angle
      { id: "D", text: "$143$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Adjacent angles at a crossing form a straight angle, so $x = 180 - 53 = 127$.\n\n**The Full Solution:**\nStep 1: The angle marked $x^\\circ$ and the $53^\\circ$ angle share a side, and their remaining sides are opposite rays of line $p$. The two angles therefore form a linear pair.\nStep 2: A linear pair is supplementary, so $x + 53 = 180$.\nStep 3: $x = 127$. Check: the angle vertical to each of these has the same measure, so the four angles are $53$, $127$, $53$, and $127$, which total $360$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($37$): computes $90 - 53$, treating adjacent angles as complementary rather than supplementary.\n* Choice B ($53$): treats the two marked angles as vertical angles and copies the given measure; only the angle straight across from the $53^\\circ$ angle measures $53^\\circ$.\n* Choice D ($143$): adds $90$ to the given measure instead of subtracting it from $180$.\n\n**Test Day Takeaway:** At a crossing, angles that share a side add to $180^\\circ$ and angles straight across from each other are equal. Decide which pair the figure marks before doing any arithmetic.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertical-angles",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  // === TIER 0 BANK GROWTH (2026-05-21): 2 geometry patterns @ 3 items → @ 5 items ===

  {
    id: "bank-geo-271",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A circle in the $xy$-plane has a diameter of $18$ units. What is the area, in square units, of the circle?",
    choices: [
      // distractor: computes the circumference
      { id: "A", text: "$18\\pi$" },
      { id: "B", text: "$81\\pi$" },
      // distractor: uses 2 pi r squared
      { id: "C", text: "$162\\pi$" },
      // distractor: uses the diameter as the radius
      { id: "D", text: "$324\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Halve the diameter to get $r = 9$, then $A = \\pi(9)^2 = 81\\pi$.\n\n**The Full Solution:**\nStep 1: The radius is half the diameter: $r = \\frac{18}{2} = 9$ units.\nStep 2: The area of a circle is $A = \\pi r^2$.\nStep 3: $A = \\pi(9)^2 = 81\\pi$ square units. Check: the circumference would be $2\\pi(9) = 18\\pi$, numerically equal to the diameter times $\\pi$, as expected.\n\n**Why the wrong answers are tempting:**\n* Choice A ($18\\pi$): this is the circumference $2\\pi r$, a length rather than an area.\n* Choice C ($162\\pi$): uses $2\\pi r^2$, mixing the $2$ from the circumference formula into the area formula.\n* Choice D ($324\\pi$): squares the diameter, treating $18$ as the radius.\n\n**Test Day Takeaway:** The first move on any circle problem stated with a diameter is to halve it. Everything else is the formula.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-272",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A circular mirror has a circumference of $22\\pi$ inches. What is the area, in square inches, of the mirror?",
    choices: [
      // distractor: uses pi times r as the area
      { id: "A", text: "$11\\pi$" },
      { id: "B", text: "$121\\pi$" },
      // distractor: uses 2 pi r squared
      { id: "C", text: "$242\\pi$" },
      // distractor: treats 22 as the radius
      { id: "D", text: "$484\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $2\\pi r = 22\\pi$ gives $r = 11$, so $A = \\pi(11)^2 = 121\\pi$.\n\n**The Full Solution:**\nStep 1: Use the circumference formula: $C = 2\\pi r$, so $2\\pi r = 22\\pi$.\nStep 2: Divide both sides by $2\\pi$: $r = 11$ inches.\nStep 3: Apply the area formula: $A = \\pi(11)^2 = 121\\pi$ square inches. Check: the diameter is $22$ inches, which matches the coefficient of $\\pi$ in the circumference.\n\n**Why the wrong answers are tempting:**\n* Choice A ($11\\pi$): uses $A = \\pi r$, dropping the square.\n* Choice C ($242\\pi$): uses $A = 2\\pi r^2$, carrying the $2$ over from the circumference formula.\n* Choice D ($484\\pi$): treats $22$ as the radius instead of the diameter.\n\n**Test Day Takeaway:** The coefficient of $\\pi$ in a circumference is the diameter. Halve it before squaring.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "area-of-a-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-273",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A square tile has a perimeter of $52$ centimeters. What is the length, in centimeters, of one side of the tile?",
    choices: [
      { id: "A", text: "$13$" },
      // distractor: divides by 2 instead of 4
      { id: "B", text: "$26$" },
      // distractor: computes the area
      { id: "C", text: "$169$" },
      // distractor: multiplies by 4 instead of dividing
      { id: "D", text: "$208$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** A square has four equal sides, so each side is $\\frac{52}{4} = 13$ centimeters.\n\n**The Full Solution:**\nStep 1: For a square with side $s$, the perimeter is $P = 4s$.\nStep 2: Substitute the given perimeter: $4s = 52$.\nStep 3: $s = 13$ centimeters. Check: $4(13) = 52$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($26$): divides by $2$ instead of $4$, as if the square had only two sides.\n* Choice C ($169$): reports the area $13^2$ rather than a side length.\n* Choice D ($208$): multiplies the perimeter by $4$ instead of dividing by it.\n\n**Test Day Takeaway:** Read the direction of the formula. Perimeter to side divides by $4$; side to perimeter multiplies by $4$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "square-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-274",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Square $A$ has a perimeter of $60$ centimeters. Square $B$ has an area equal to $\\frac{1}{4}$ of the area of square $A$. What is the perimeter, in centimeters, of square $B$?",
    choices: [
      // distractor: applies the area ratio to the perimeter
      { id: "A", text: "$15$" },
      { id: "B", text: "$30$" },
      // distractor: reports the area of square B
      { id: "C", text: "$56.25$" },
      // distractor: doubles instead of halving
      { id: "D", text: "$120$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Areas in the ratio $1 : 4$ mean sides in the ratio $1 : 2$, so square $B$'s perimeter is half of $60$, or $30$ centimeters.\n\n**The Full Solution:**\nStep 1: Square $A$ has side $\\frac{60}{4} = 15$ centimeters and area $15^2 = 225$ square centimeters.\nStep 2: Square $B$ has area $\\frac{225}{4} = 56.25$, so its side is $\\sqrt{56.25} = 7.5$ centimeters.\nStep 3: Its perimeter is $4(7.5) = 30$ centimeters. Check: halving every side halves the perimeter and quarters the area, exactly as described.\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): divides the perimeter by $4$, applying the area ratio directly to the perimeter.\n* Choice C ($56.25$): reports the area of square $B$ instead of its perimeter.\n* Choice D ($120$): doubles the perimeter instead of halving it.\n\n**Test Day Takeaway:** Lengths scale by $k$ and areas scale by $k^2$. A quarter of the area means half the side and half the perimeter.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "square-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // === TIER 1 BANK GROWTH (2026-05-21): geometry patterns @ 4 items → @ 10 items ===

  // --- arc-length (4 → 10) ---
  {
    id: "bank-geo-275",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A circular running track has a radius of $15$ meters. A runner travels along the track through a central angle of $72°$, as shown. How many meters does the runner travel?",
    diagram: { type: "circleWithSector", params: { centralAngle: 72, angleLabel: "72°", radius: 15, labelCenter: "O", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: uses pi r for the circumference
      { id: "A", text: "$3\\pi$" },
      { id: "B", text: "$6\\pi$" },
      // distractor: gives the full circumference
      { id: "C", text: "$30\\pi$" },
      // distractor: gives the sector area
      { id: "D", text: "$45\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $72^\\circ$ is $\\frac{1}{5}$ of a turn, and the full circumference is $30\\pi$, so the arc is $\\frac{1}{5}(30\\pi) = 6\\pi$ meters.\n\n**The Full Solution:**\nStep 1: The circumference of the track is $C = 2\\pi r = 2\\pi(15) = 30\\pi$ meters.\nStep 2: The runner covers $\\frac{72}{360} = \\frac{1}{5}$ of the circle.\nStep 3: Arc length $= \\frac{1}{5}(30\\pi) = 6\\pi$ meters. Check: five such runs would complete one lap, and $5(6\\pi) = 30\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3\\pi$): uses $C = \\pi r$ instead of $2\\pi r$, halving the answer.\n* Choice C ($30\\pi$): reports the whole circumference, ignoring the $72^\\circ$ restriction.\n* Choice D ($45\\pi$): computes the sector's area $\\frac{1}{5}\\pi(15)^2$, which is an area, not a distance.\n\n**Test Day Takeaway:** Arc length uses the circumference $2\\pi r$; sector area uses $\\pi r^2$. The same fraction multiplies both.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "arc-length",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-276",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the figure, $O$ is the center of a circle of radius $9$, and $\\angle AOB$ measures $\\dfrac{\\pi}{4}$ radians. What is the length of minor arc $AB$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 45, angleLabel: "π/4", radius: 9, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: halves the central angle
      { id: "A", text: "$9\\pi/8$" },
      { id: "B", text: "$9\\pi/4$" },
      // distractor: uses 2 r theta
      { id: "C", text: "$9\\pi/2$" },
      // distractor: uses r squared times theta
      { id: "D", text: "$81\\pi/4$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** With the angle already in radians, arc length is $r\\theta = 9 \\cdot \\frac{\\pi}{4} = \\frac{9\\pi}{4}$.\n\n**The Full Solution:**\nStep 1: When a central angle is measured in radians, the arc it cuts has length $s = r\\theta$.\nStep 2: Substitute $r = 9$ and $\\theta = \\frac{\\pi}{4}$: $s = 9 \\cdot \\frac{\\pi}{4}$.\nStep 3: $s = \\frac{9\\pi}{4}$. Check: $\\frac{\\pi}{4}$ is one eighth of $2\\pi$, and one eighth of the circumference $18\\pi$ is indeed $\\frac{9\\pi}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9\\pi}{8}$): halves the central angle, using $\\frac{\\pi}{8}$.\n* Choice C ($\\frac{9\\pi}{2}$): uses $2r\\theta$, importing the $2$ from the circumference formula even though $r\\theta$ already accounts for it.\n* Choice D ($\\frac{81\\pi}{4}$): uses $r^2\\theta$, the shape of the sector-area formula, which produces an area rather than a length.\n\n**Test Day Takeaway:** Radians make arc length a one-line multiplication: $s = r\\theta$. No $360$, no $2\\pi$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "arc-length",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-277",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The figure shows a circle of radius $20$ with a sector whose central angle measures $135°$. What is the length of the arc that bounds this sector?",
    diagram: { type: "circleWithSector", params: { centralAngle: 135, angleLabel: "135°", radius: 20, labelCenter: "O", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: uses pi r for the circumference
      { id: "A", text: "$7.5\\pi$" },
      { id: "B", text: "$15\\pi$" },
      // distractor: gives the full circumference
      { id: "C", text: "$40\\pi$" },
      // distractor: gives the sector area
      { id: "D", text: "$150\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\frac{135}{360} = \\frac{3}{8}$, and the circumference is $40\\pi$, so the arc is $\\frac{3}{8}(40\\pi) = 15\\pi$.\n\n**The Full Solution:**\nStep 1: The circumference is $C = 2\\pi(20) = 40\\pi$.\nStep 2: The sector spans $\\frac{135}{360}$ of the circle; dividing both parts by $45$ gives $\\frac{3}{8}$.\nStep 3: Arc length $= \\frac{3}{8}(40\\pi) = 15\\pi$. Check: $135^\\circ$ is more than a quarter turn, and $15\\pi$ is more than a quarter of $40\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7.5\\pi$): uses $C = \\pi r$ instead of $2\\pi r$.\n* Choice C ($40\\pi$): reports the entire circumference rather than the portion cut by the sector.\n* Choice D ($150\\pi$): computes $\\frac{3}{8}\\pi(20)^2$, the sector's area.\n\n**Test Day Takeaway:** Reduce the degree fraction before multiplying; $\\frac{135}{360}$ collapses to $\\frac{3}{8}$ and the arithmetic stays exact.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "arc-length",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-278",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A sector of the circle shown has an arc length of $14\\pi$ centimeters and a central angle of $105°$. What is the radius, in centimeters, of the circle?",
    diagram: { type: "circleWithSector", params: { centralAngle: 105, angleLabel: "105°", labelCenter: "O", figureNote: true } },
    choices: [
      // distractor: treats the arc length as the full circumference
      { id: "A", text: "$7$" },
      // distractor: divides the angle by 180 instead of 360
      { id: "B", text: "$12$" },
      { id: "C", text: "$24$" },
      // distractor: uses pi r for the circumference, which returns the diameter
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** $\\frac{105}{360} = \\frac{7}{24}$, so $\\frac{7}{24}(2\\pi r) = 14\\pi$ gives $2r = 48$ and $r = 24$.\n\n**The Full Solution:**\nStep 1: Arc length is the fraction $\\frac{\\theta}{360^\\circ}$ of the circumference: $\\frac{105}{360}(2\\pi r) = 14\\pi$.\nStep 2: Reduce $\\frac{105}{360}$ by dividing both parts by $15$: $\\frac{7}{24}$. The equation becomes $\\frac{7}{24}(2\\pi r) = 14\\pi$.\nStep 3: Divide both sides by $\\pi$ and multiply by $\\frac{24}{7}$: $2r = 48$, so $r = 24$ centimeters. Check: the circumference is $48\\pi$, and $\\frac{7}{24}(48\\pi) = 14\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): treats the given arc as the entire circumference, solving $2\\pi r = 14\\pi$.\n* Choice B ($12$): divides the angle by $180$ instead of $360$, doubling the fraction of the circle.\n* Choice D ($48$): uses $C = \\pi r$ instead of $2\\pi r$, which returns the diameter rather than the radius.\n\n**Test Day Takeaway:** Running arc length backwards is one equation. Reduce the angle fraction first so the arithmetic stays in whole numbers.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "arc-length",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-279",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A sector cut from a circular sheet has a radius of $8$ centimeters and a central angle of $\\dfrac{3\\pi}{4}$ radians, as shown. What is the length, in centimeters, of the curved edge of the sector?",
    diagram: { type: "circleWithSector", params: { centralAngle: 135, angleLabel: "3π/4", radius: 8, labelCenter: "O", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: uses half r theta
      { id: "A", text: "$3\\pi$" },
      { id: "B", text: "$6\\pi$" },
      // distractor: gives the full circumference
      { id: "C", text: "$16\\pi$" },
      // distractor: uses r squared times theta
      { id: "D", text: "$48\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $s = r\\theta = 8 \\cdot \\frac{3\\pi}{4} = 6\\pi$ centimeters.\n\n**The Full Solution:**\nStep 1: The curved edge of the sector is the arc, and for a radian angle the arc length is $s = r\\theta$.\nStep 2: Substitute: $s = 8 \\cdot \\frac{3\\pi}{4} = \\frac{24\\pi}{4}$.\nStep 3: $s = 6\\pi$ centimeters. Check: $\\frac{3\\pi}{4}$ is $\\frac{3}{8}$ of a full turn, and $\\frac{3}{8}$ of the circumference $16\\pi$ is $6\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3\\pi$): uses $\\frac{1}{2}r\\theta$, borrowing the coefficient from the sector-area formula.\n* Choice C ($16\\pi$): reports the full circumference $2\\pi(8)$.\n* Choice D ($48\\pi$): uses $r^2\\theta$, which has the units of an area.\n\n**Test Day Takeaway:** Curved edge, arc, and arc length are the same thing. With radians it is always $r\\theta$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "arc-length",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-280",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the circle with center $O$ shown, sector $AOB$ has a central angle of $\\dfrac{5\\pi}{6}$ radians and an arc length of $35\\pi$ centimeters. What is the area, in square centimeters, of sector $AOB$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 150, angleLabel: "5π/6", labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
    choices: [
      // distractor: uses half r theta as the area
      { id: "A", text: "$17.5\\pi$" },
      { id: "B", text: "$735\\pi$" },
      // distractor: omits the one-half
      { id: "C", text: "$1470\\pi$" },
      // distractor: gives the whole circle's area
      { id: "D", text: "$1764\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** $r = \\frac{s}{\\theta} = \\frac{35\\pi}{5\\pi/6} = 42$, and sector area $= \\frac{1}{2}rs = \\frac{1}{2}(42)(35\\pi) = 735\\pi$.\n\n**The Full Solution:**\nStep 1: For a radian angle, $s = r\\theta$. Solve for the radius: $r = \\frac{35\\pi}{\\frac{5\\pi}{6}} = 35\\pi \\cdot \\frac{6}{5\\pi} = 42$ centimeters.\nStep 2: The area of a sector with a radian angle is $A = \\frac{1}{2}r^2\\theta$, which is the same as $\\frac{1}{2}rs$.\nStep 3: $A = \\frac{1}{2}(42)^2\\left(\\frac{5\\pi}{6}\\right) = \\frac{1}{2}(1764)\\left(\\frac{5\\pi}{6}\\right) = 735\\pi$ square centimeters. Check: $\\frac{5\\pi}{6}$ is $\\frac{5}{12}$ of a full turn, and $\\frac{5}{12}$ of the circle's area $1764\\pi$ is $735\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($17.5\\pi$): computes $\\frac{1}{2}r\\theta$, using the angle where the arc length belongs.\n* Choice C ($1470\\pi$): uses $r^2\\theta$ without the factor $\\frac{1}{2}$.\n* Choice D ($1764\\pi$): reports $\\pi r^2$, the area of the entire circle rather than the sector.\n\n**Test Day Takeaway:** Arc length recovers the radius; the radius unlocks the area. Keep the two radian formulas paired: $s = r\\theta$ and $A = \\frac{1}{2}r^2\\theta$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "arc-length",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- circle-in-general-form (4 → 10) ---
  {
    id: "bank-geo-281",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $x^2 + y^2 + 12x - 2y - 8 = 0$ represents a circle in the $xy$-plane. What are the coordinates of the center of the circle?",
    choices: [
      // distractor: negates the coefficients without halving
      { id: "A", text: "$(-12, 2)$" },
      { id: "B", text: "$(-6, 1)$" },
      // distractor: halves but keeps the original signs
      { id: "C", text: "$(6, -1)$" },
      // distractor: copies the coefficients directly
      { id: "D", text: "$(12, -2)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Halve each linear coefficient and flip its sign: $x$-coefficient $12 \\to -6$, $y$-coefficient $-2 \\to 1$. The center is $(-6, 1)$.\n\n**The Full Solution:**\nStep 1: Group and complete the square: $(x^2 + 12x) + (y^2 - 2y) = 8$.\nStep 2: Add $\\left(\\frac{12}{2}\\right)^2 = 36$ and $\\left(\\frac{-2}{2}\\right)^2 = 1$ to both sides: $(x + 6)^2 + (y - 1)^2 = 8 + 36 + 1 = 45$.\nStep 3: In the form $(x - h)^2 + (y - k)^2 = r^2$, the center is $(h, k) = (-6, 1)$. Check: substituting $(-6, 1)$ into the original expression gives $36 + 1 - 72 - 2 - 8 = -45$, exactly $-r^2$, as it must at the center.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-12, 2)$): negates the linear coefficients but forgets to halve them.\n* Choice C ($(6, -1)$): halves the coefficients but keeps their original signs.\n* Choice D ($(12, -2)$): reads the linear coefficients off as the center directly.\n\n**Test Day Takeaway:** For $x^2 + y^2 + Dx + Ey + F = 0$ the center is $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$: halve, then flip.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-282",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A circle in the $xy$-plane is represented by $x^2 + y^2 - 6y - 16 = 0$. What is the radius of the circle?",
    choices: [
      // distractor: reports the y-coordinate of the center
      { id: "A", text: "$3$" },
      // distractor: uses only the constant 16
      { id: "B", text: "$4$" },
      { id: "C", text: "$5$" },
      // distractor: reports r squared
      { id: "D", text: "$25$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Completing the square in $y$ gives $x^2 + (y - 3)^2 = 16 + 9 = 25$, so $r = 5$.\n\n**The Full Solution:**\nStep 1: There is no $x$ term, so the $x$ group is already complete: $x^2 + (y^2 - 6y) = 16$.\nStep 2: Complete the square in $y$ by adding $\\left(\\frac{-6}{2}\\right)^2 = 9$ to both sides: $x^2 + (y - 3)^2 = 25$.\nStep 3: Since $r^2 = 25$, the radius is $r = 5$. Check: the center is $(0, 3)$, and the point $(0, 8)$ satisfies the original equation, sitting $5$ units above the center.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the $y$-coordinate of the center instead of the radius.\n* Choice B ($4$): takes $\\sqrt{16}$ from the constant alone, skipping the $+9$ that completing the square contributes.\n* Choice D ($25$): stops at $r^2$ without taking the square root.\n\n**Test Day Takeaway:** Whatever you add to complete a square on the left must be added on the right too — that addition is what makes $r^2$ correct.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-283",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A circle is defined by $x^2 + y^2 - 10x + 14y + 25 = 0$. Which point is the center of this circle?",
    choices: [
      // distractor: flips both signs the wrong way
      { id: "A", text: "$(-5, 7)$" },
      { id: "B", text: "$(5, -7)$" },
      // distractor: forgets to halve the coefficients
      { id: "C", text: "$(10, -14)$" },
      // distractor: uses the completed-square constants
      { id: "D", text: "$(25, -49)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Halve and negate: $-10 \\to 5$ and $14 \\to -7$, so the center is $(5, -7)$.\n\n**The Full Solution:**\nStep 1: Group the variables: $(x^2 - 10x) + (y^2 + 14y) = -25$.\nStep 2: Add $\\left(\\frac{-10}{2}\\right)^2 = 25$ and $\\left(\\frac{14}{2}\\right)^2 = 49$ to both sides: $(x - 5)^2 + (y + 7)^2 = -25 + 25 + 49 = 49$.\nStep 3: Reading the standard form, the center is $(5, -7)$ and the radius is $7$. Check: the point $(12, -7)$ lies $7$ units to the right of the center and satisfies $144 + 49 - 120 - 98 + 25 = 0$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-5, 7)$): halves correctly but negates in the wrong direction, giving the reflection of the center through the origin.\n* Choice C ($(10, -14)$): negates the coefficients without halving them.\n* Choice D ($(25, -49)$): uses the numbers added while completing the square as coordinates.\n\n**Test Day Takeaway:** The sign inside the binomial is the opposite of the sign of the center coordinate: $(x - 5)^2$ means the center's $x$ is $+5$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-284",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of $x^2 + y^2 - 6x + 8y - 24 = 0$ in the $xy$-plane is a circle. What is the radius of the circle?",
    choices: [
      // distractor: leaves the constant on the left
      { id: "A", text: "$5$" },
      { id: "B", text: "$7$" },
      // distractor: reports 9 plus 16 without the constant
      { id: "C", text: "$25$" },
      // distractor: reports r squared
      { id: "D", text: "$49$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $(x - 3)^2 + (y + 4)^2 = 24 + 9 + 16 = 49$, so $r = 7$.\n\n**The Full Solution:**\nStep 1: Move the constant and group: $(x^2 - 6x) + (y^2 + 8y) = 24$.\nStep 2: Complete both squares by adding $\\left(\\frac{-6}{2}\\right)^2 = 9$ and $\\left(\\frac{8}{2}\\right)^2 = 16$ to both sides: $(x - 3)^2 + (y + 4)^2 = 24 + 9 + 16 = 49$.\nStep 3: $r^2 = 49$, so $r = 7$. Check: the center is $(3, -4)$, and the point $(10, -4)$ satisfies $100 + 16 - 60 - 32 - 24 = 0$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): forgets to move the $-24$ across, computing $\\sqrt{9 + 16}$.\n* Choice C ($25$): squares the same oversight, reporting $9 + 16$ as $r^2$.\n* Choice D ($49$): reports $r^2$ rather than $r$.\n\n**Test Day Takeaway:** Three numbers land on the right side: the original constant plus both completing-the-square terms. Drop one and the radius is wrong.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-285",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The equation $x^2 + y^2 - 8x = 9$ defines a circle in the $xy$-plane. What is the center of this circle?",
    choices: [
      // distractor: negates without halving
      { id: "A", text: "$(-8, 0)$" },
      // distractor: halves but keeps the wrong sign
      { id: "B", text: "$(-4, 0)$" },
      { id: "C", text: "$(4, 0)$" },
      // distractor: copies the coefficient directly
      { id: "D", text: "$(8, 0)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Only $x$ needs completing: $(x - 4)^2 + y^2 = 25$, so the center is $(4, 0)$.\n\n**The Full Solution:**\nStep 1: The $y$ terms are already a complete square, $y^2$, so the center's $y$-coordinate is $0$.\nStep 2: Complete the square in $x$ by adding $\\left(\\frac{-8}{2}\\right)^2 = 16$ to both sides: $(x - 4)^2 + y^2 = 9 + 16 = 25$.\nStep 3: The center is $(4, 0)$ and the radius is $5$. Check: the point $(9, 0)$ satisfies $81 - 72 = 9$ and lies $5$ units from $(4, 0)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-8, 0)$): negates the coefficient of $x$ without halving it.\n* Choice B ($(-4, 0)$): halves the coefficient but keeps the negative sign.\n* Choice D ($(8, 0)$): reads $8$ straight off the equation as the center.\n\n**Test Day Takeaway:** A missing linear term means that coordinate of the center is $0$ — one less square to complete.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-286",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the circle given by $x^2 + y^2 + Dx + Ey + F = 0$ has center $(-2, 5)$ and radius $6$, where $D$, $E$, and $F$ are constants. What is the value of $D + E + F$?",
    choices: [
      { id: "A", text: "$-13$" },
      // distractor: reverses the signs of D and E
      { id: "B", text: "$-1$" },
      // distractor: reverses the sign of F
      { id: "C", text: "$1$" },
      // distractor: sets F equal to r squared
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** $D = -2(-2) = 4$, $E = -2(5) = -10$, and $F = h^2 + k^2 - r^2 = 4 + 25 - 36 = -7$, so the sum is $-13$.\n\n**The Full Solution:**\nStep 1: Expand the standard form for center $(-2, 5)$ and radius $6$: $(x + 2)^2 + (y - 5)^2 = 36$ becomes $x^2 + 4x + 4 + y^2 - 10y + 25 = 36$.\nStep 2: Move everything to one side: $x^2 + y^2 + 4x - 10y + 29 - 36 = 0$, that is, $x^2 + y^2 + 4x - 10y - 7 = 0$.\nStep 3: Matching coefficients gives $D = 4$, $E = -10$, $F = -7$, so $D + E + F = -13$. Check: $\\left(-\\frac{4}{2}, -\\frac{-10}{2}\\right) = (-2, 5)$ and $(-2)^2 + 5^2 - (-7) = 36 = 6^2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): uses $D = -4$ and $E = 10$, reversing the sign relationship between the center and the linear coefficients.\n* Choice C ($1$): keeps $D$ and $E$ correct but takes $F = 7$, dropping the negative.\n* Choice D ($30$): sets $F = 36$, mistaking the constant term for $r^2$.\n\n**Test Day Takeaway:** Expanding the standard form is faster and safer than memorizing $F$. Every coefficient falls out of one expansion.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- circle-in-standard-form (4 → 10) ---
  {
    id: "bank-geo-287",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which equation represents the circle in the $xy$-plane with center $(-4, 7)$ and radius $3$?",
    choices: [
      // distractor: reverses both center signs
      { id: "A", text: "$(x - 4)^2 + (y + 7)^2 = 9$" },
      // distractor: uses r instead of r squared
      { id: "B", text: "$(x + 4)^2 + (y - 7)^2 = 3$" },
      { id: "C", text: "$(x + 4)^2 + (y - 7)^2 = 9$" },
      // distractor: gets the sign of k wrong
      { id: "D", text: "$(x + 4)^2 + (y + 7)^2 = 9$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Subtract each center coordinate inside the squares and square the radius: $(x + 4)^2 + (y - 7)^2 = 9$.\n\n**The Full Solution:**\nStep 1: The standard form is $(x - h)^2 + (y - k)^2 = r^2$ with center $(h, k)$.\nStep 2: With $h = -4$, the first factor is $(x - (-4))^2 = (x + 4)^2$; with $k = 7$, the second is $(y - 7)^2$.\nStep 3: The right side is $r^2 = 3^2 = 9$. Check: the point $(-1, 7)$ is $3$ units right of the center and satisfies $9 + 0 = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x - 4)^2 + (y + 7)^2 = 9$): reverses both center signs, describing the circle centered at $(4, -7)$.\n* Choice B ($(x + 4)^2 + (y - 7)^2 = 3$): places the radius on the right side instead of the radius squared.\n* Choice D ($(x + 4)^2 + (y + 7)^2 = 9$): uses $(y + 7)^2$, which corresponds to a $y$-coordinate of $-7$.\n\n**Test Day Takeaway:** The binomial signs are always the opposite of the center coordinates, and the right side is $r^2$, never $r$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-288",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A circle in the $xy$-plane has the equation $(x - 6)^2 + (y + 2)^2 = 49$. What is the center of the circle?",
    choices: [
      // distractor: reverses both signs
      { id: "A", text: "$(-6, 2)$" },
      // distractor: reverses the x sign only
      { id: "B", text: "$(-6, -2)$" },
      { id: "C", text: "$(6, -2)$" },
      // distractor: reverses the y sign only
      { id: "D", text: "$(6, 2)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Read the opposite of each number inside the parentheses: $(x - 6)$ gives $6$ and $(y + 2)$ gives $-2$, so the center is $(6, -2)$.\n\n**The Full Solution:**\nStep 1: Compare with $(x - h)^2 + (y - k)^2 = r^2$.\nStep 2: $(x - 6)^2$ matches $h = 6$, and $(y + 2)^2 = (y - (-2))^2$ matches $k = -2$.\nStep 3: The center is $(6, -2)$, with radius $\\sqrt{49} = 7$. Check: the point $(13, -2)$ lies $7$ units to the right and satisfies $49 + 0 = 49$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-6, 2)$): reverses both coordinates, reading the signs as they appear.\n* Choice B ($(-6, -2)$): reverses only the $x$-coordinate.\n* Choice D ($(6, 2)$): reverses only the $y$-coordinate, reading $(y + 2)$ as $k = 2$.\n\n**Test Day Takeaway:** Rewrite any plus sign as a minus of a negative: $(y + 2)^2 = (y - (-2))^2$. Then the center reads straight off.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-289",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The equation $(x + 3)^2 + (y - 8)^2 = 121$ represents a circle in the $xy$-plane. What is the radius of the circle?",
    choices: [
      { id: "A", text: "$11$" },
      // distractor: halves r squared
      { id: "B", text: "$60.5$" },
      // distractor: reports r squared
      { id: "C", text: "$121$" },
      // distractor: doubles r squared
      { id: "D", text: "$242$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The right side is $r^2$, so $r = \\sqrt{121} = 11$.\n\n**The Full Solution:**\nStep 1: In $(x - h)^2 + (y - k)^2 = r^2$, the constant on the right is the square of the radius.\nStep 2: Here that constant is $121$, so $r^2 = 121$.\nStep 3: $r = 11$. Check: the center is $(-3, 8)$, and $(8, 8)$ lies $11$ units to its right, satisfying $121 + 0 = 121$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($60.5$): halves the right side, treating $r^2$ as a diameter-style quantity.\n* Choice C ($121$): reports $r^2$ without taking the square root.\n* Choice D ($242$): doubles $r^2$, as if the constant were a radius needing conversion to a diameter.\n\n**Test Day Takeaway:** The number on the right of a circle equation is never the radius. Take its square root first.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-290",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, a circle has center $(2, -5)$ and passes through the point $(2, 7)$. Which equation represents the circle?",
    choices: [
      // distractor: uses r instead of r squared
      { id: "A", text: "$(x - 2)^2 + (y + 5)^2 = 12$" },
      { id: "B", text: "$(x - 2)^2 + (y + 5)^2 = 144$" },
      // distractor: reverses the center signs
      { id: "C", text: "$(x + 2)^2 + (y - 5)^2 = 144$" },
      // distractor: uses the given point as the center
      { id: "D", text: "$(x - 2)^2 + (y - 7)^2 = 144$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The two points share an $x$-value, so $r = |7 - (-5)| = 12$ and $r^2 = 144$, giving $(x - 2)^2 + (y + 5)^2 = 144$.\n\n**The Full Solution:**\nStep 1: The radius is the distance from the center to any point on the circle. Both points have $x = 2$, so the distance is purely vertical.\nStep 2: $r = |7 - (-5)| = 12$, so $r^2 = 144$.\nStep 3: With center $(2, -5)$, the equation is $(x - 2)^2 + (y + 5)^2 = 144$. Check: substituting $(2, 7)$ gives $0 + 144 = 144$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x - 2)^2 + (y + 5)^2 = 12$): puts the radius on the right side instead of the radius squared.\n* Choice C ($(x + 2)^2 + (y - 5)^2 = 144$): reverses the signs of the center coordinates.\n* Choice D ($(x - 2)^2 + (y - 7)^2 = 144$): builds the equation around the point on the circle rather than the center.\n\n**Test Day Takeaway:** Find $r^2$ directly — you never need $r$ itself. Then confirm by substituting the given point.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-291",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $2(x - 7)^2 + 2(y + 1)^2 = 72$ represents a circle in the $xy$-plane. What is the radius of the circle?",
    choices: [
      { id: "A", text: "$6$" },
      // distractor: reports the diameter
      { id: "B", text: "$12$" },
      // distractor: reports r squared
      { id: "C", text: "$36$" },
      // distractor: reports the right-side constant directly
      { id: "D", text: "$72$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Divide the whole equation by $2$: $(x - 7)^2 + (y + 1)^2 = 36$, so $r = 6$.\n\n**The Full Solution:**\nStep 1: Standard form requires coefficients of $1$ on both squared terms, so divide every term by $2$.\nStep 2: The equation becomes $(x - 7)^2 + (y + 1)^2 = 36$.\nStep 3: $r^2 = 36$, so $r = 6$. Check: the center is $(7, -1)$, and $(13, -1)$ satisfies $2(36) + 2(0) = 72$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): finds $r = 6$ but reports the diameter.\n* Choice C ($36$): stops at $r^2$ after dividing correctly.\n* Choice D ($72$): reports the constant on the right side directly, skipping both the division by $2$ and the square root.\n\n**Test Day Takeaway:** A circle equation is only in standard form when both squared terms have coefficient $1$. Normalize before reading anything off.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-292",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, a circle has a diameter with endpoints $(-3, 4)$ and $(5, -2)$. Which equation represents this circle?",
    choices: [
      { id: "A", text: "$(x - 1)^2 + (y - 1)^2 = 25$" },
      // distractor: uses the diameter as the radius
      { id: "B", text: "$(x - 1)^2 + (y - 1)^2 = 100$" },
      // distractor: reverses the center signs
      { id: "C", text: "$(x + 1)^2 + (y + 1)^2 = 25$" },
      // distractor: uses an endpoint as the center
      { id: "D", text: "$(x + 3)^2 + (y - 4)^2 = 25$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** The midpoint $(1, 1)$ is the center; the diameter is $\\sqrt{8^2 + 6^2} = 10$, so $r^2 = 25$.\n\n**The Full Solution:**\nStep 1: The center of a circle is the midpoint of any diameter: $\\left(\\frac{-3 + 5}{2}, \\frac{4 + (-2)}{2}\\right) = (1, 1)$.\nStep 2: The diameter's length is $\\sqrt{(5 - (-3))^2 + (-2 - 4)^2} = \\sqrt{64 + 36} = 10$, so the radius is $5$ and $r^2 = 25$.\nStep 3: The equation is $(x - 1)^2 + (y - 1)^2 = 25$. Check: substituting $(-3, 4)$ gives $16 + 9 = 25$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(x - 1)^2 + (y - 1)^2 = 100$): squares the diameter instead of the radius.\n* Choice C ($(x + 1)^2 + (y + 1)^2 = 25$): reverses the signs of the center coordinates.\n* Choice D ($(x + 3)^2 + (y - 4)^2 = 25$): uses the endpoint $(-3, 4)$ as the center rather than the midpoint.\n\n**Test Day Takeaway:** Diameter endpoints give the center by midpoint and the radius by halving the distance. Halve before squaring, never after.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- cylinder-volume (4 → 10) ---
  {
    id: "bank-geo-293",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A right circular cylinder has a radius of $4$ centimeters and a height of $7$ centimeters. What is the volume, in cubic centimeters, of the cylinder?",
    choices: [
      // distractor: multiplies r by h without squaring
      { id: "A", text: "$28\\pi$" },
      // distractor: uses 2 r h
      { id: "B", text: "$56\\pi$" },
      { id: "C", text: "$112\\pi$" },
      // distractor: squares the product of r and h
      { id: "D", text: "$784\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi(16)(7) = 112\\pi$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^2 h$, the area of the circular base times the height.\nStep 2: The base area is $\\pi(4)^2 = 16\\pi$ square centimeters.\nStep 3: Multiply by the height: $V = 16\\pi(7) = 112\\pi$ cubic centimeters. Check: $112\\pi \\approx 352$, which is a sensible size for a base of about $50$ square centimeters stacked $7$ centimeters high.\n\n**Why the wrong answers are tempting:**\n* Choice A ($28\\pi$): multiplies $r$ by $h$ without squaring the radius.\n* Choice B ($56\\pi$): uses $2rh$, the shape of the lateral-surface formula, not the volume.\n* Choice D ($784\\pi$): squares the product $rh = 28$ instead of squaring only the radius.\n\n**Test Day Takeaway:** Only the radius gets squared in $V = \\pi r^2 h$. Compute the base area first, then stack it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-294",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A cylindrical storage tank has a diameter of $10$ feet and a height of $6$ feet. What is the volume, in cubic feet, of the tank?",
    choices: [
      // distractor: multiplies r by h without squaring
      { id: "A", text: "$30\\pi$" },
      // distractor: uses the lateral surface area
      { id: "B", text: "$60\\pi$" },
      { id: "C", text: "$150\\pi$" },
      // distractor: uses the diameter as the radius
      { id: "D", text: "$600\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The radius is $5$, so $V = \\pi(5)^2(6) = 150\\pi$ cubic feet.\n\n**The Full Solution:**\nStep 1: Convert the diameter to a radius: $r = \\frac{10}{2} = 5$ feet.\nStep 2: The base area is $\\pi(5)^2 = 25\\pi$ square feet.\nStep 3: $V = 25\\pi(6) = 150\\pi$ cubic feet. Check: doubling the height would double the volume to $300\\pi$, confirming the linear role of $h$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($30\\pi$): uses $rh$ instead of $r^2h$.\n* Choice B ($60\\pi$): computes the lateral surface area $2\\pi rh$ rather than the volume.\n* Choice D ($600\\pi$): uses the diameter $10$ in place of the radius, multiplying the volume by four.\n\n**Test Day Takeaway:** A diameter in a volume problem is a trap unless you halve it first — the error is magnified by the square.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-295",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A right circular cylinder has a volume of $126\\pi$ cubic inches and a height of $14$ inches. What is the radius, in inches, of the cylinder?",
    choices: [
      { id: "A", text: "$3$" },
      // distractor: reports the diameter
      { id: "B", text: "$6$" },
      // distractor: reports r squared
      { id: "C", text: "$9$" },
      // distractor: subtracts instead of dividing
      { id: "D", text: "$112$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\pi r^2(14) = 126\\pi$ gives $r^2 = 9$, so $r = 3$ inches.\n\n**The Full Solution:**\nStep 1: Start from $V = \\pi r^2 h$: $\\pi r^2 (14) = 126\\pi$.\nStep 2: Divide both sides by $\\pi$ and then by $14$: $r^2 = \\frac{126}{14} = 9$.\nStep 3: $r = 3$ inches. Check: $\\pi(3)^2(14) = 126\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): solves correctly but reports the diameter.\n* Choice C ($9$): stops at $r^2$ without taking the square root.\n* Choice D ($112$): subtracts the height from the volume coefficient instead of dividing.\n\n**Test Day Takeaway:** Divide out $\\pi$ and $h$ first; what remains is $r^2$, and the square root is the last step, not the first.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-296",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The volume of a right circular cylinder is $175\\pi$ cubic meters and its radius is $5$ meters. What is the height, in meters, of the cylinder?",
    choices: [
      { id: "A", text: "$7$" },
      // distractor: divides by r instead of r squared
      { id: "B", text: "$35$" },
      // distractor: subtracts instead of dividing
      { id: "C", text: "$170$" },
      // distractor: multiplies by r squared
      { id: "D", text: "$4{,}375$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $\\pi(25)h = 175\\pi$ gives $h = \\frac{175}{25} = 7$ meters.\n\n**The Full Solution:**\nStep 1: The base area is $\\pi r^2 = \\pi(5)^2 = 25\\pi$ square meters.\nStep 2: Volume is base area times height: $25\\pi h = 175\\pi$.\nStep 3: $h = \\frac{175}{25} = 7$ meters. Check: $\\pi(25)(7) = 175\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($35$): divides by the radius instead of by the base area $r^2$.\n* Choice C ($170$): subtracts the radius from the volume coefficient.\n* Choice D ($4{,}375$): multiplies by $r^2$ instead of dividing by it.\n\n**Test Day Takeaway:** Height is volume divided by base area. Compute the base area as one number before dividing.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-297",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Two right circular cylinders have the same volume. The first has a radius of $6$ and a height of $8$. The second has a radius of $4$. What is the height of the second cylinder?",
    choices: [
      // distractor: scales the height by the ratio of radii
      { id: "A", text: "$12$" },
      { id: "B", text: "$18$" },
      // distractor: divides the volume by r instead of r squared
      { id: "C", text: "$72$" },
      // distractor: reports the volume coefficient
      { id: "D", text: "$288$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The shared volume is $\\pi(36)(8) = 288\\pi$, so $\\pi(16)h = 288\\pi$ and $h = 18$.\n\n**The Full Solution:**\nStep 1: Compute the first volume: $V = \\pi(6)^2(8) = 288\\pi$.\nStep 2: The second cylinder has base area $\\pi(4)^2 = 16\\pi$, and its volume must also be $288\\pi$: $16\\pi h = 288\\pi$.\nStep 3: $h = \\frac{288}{16} = 18$. Check: the base area shrank by a factor of $\\frac{16}{36} = \\frac{4}{9}$, so the height must grow by $\\frac{9}{4}$, and $8 \\cdot \\frac{9}{4} = 18$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): scales the height by $\\frac{6}{4}$, using the ratio of the radii rather than the ratio of their squares.\n* Choice C ($72$): divides $288$ by the radius $4$ instead of by $r^2 = 16$.\n* Choice D ($288$): reports the volume coefficient rather than the height.\n\n**Test Day Takeaway:** Equal volumes mean base area and height trade off inversely — and base area moves with the square of the radius.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-298",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A right circular cylinder has radius $r$ and height $h$. A second right circular cylinder has radius $\\dfrac{r}{2}$ and height $3h$. What is the ratio of the volume of the second cylinder to the volume of the first cylinder?",
    choices: [
      // distractor: ignores the tripled height
      { id: "A", text: "$\\dfrac{1}{4}$" },
      { id: "B", text: "$\\dfrac{3}{4}$" },
      // distractor: scales the radius linearly
      { id: "C", text: "$\\dfrac{3}{2}$" },
      // distractor: ignores the halved radius
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Halving the radius scales the volume by $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$; tripling the height scales it by $3$. Together: $\\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: The first volume is $V_1 = \\pi r^2 h$.\nStep 2: The second is $V_2 = \\pi\\left(\\frac{r}{2}\\right)^2(3h) = \\pi \\cdot \\frac{r^2}{4} \\cdot 3h = \\frac{3\\pi r^2 h}{4}$.\nStep 3: The ratio is $\\frac{V_2}{V_1} = \\frac{3\\pi r^2 h / 4}{\\pi r^2 h} = \\frac{3}{4}$. Check with $r = 2$ and $h = 1$: $V_1 = 4\\pi$ and $V_2 = \\pi(1)^2(3) = 3\\pi$, a ratio of $\\frac{3}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{4}$): applies the radius scaling but ignores the tripled height.\n* Choice C ($\\frac{3}{2}$): scales the radius linearly by $\\frac{1}{2}$ instead of squaring it.\n* Choice D ($3$): applies only the height change, leaving the radius untouched.\n\n**Test Day Takeaway:** In $V = \\pi r^2 h$, a radius change is squared and a height change is not. Track the two factors separately, then multiply.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "cylinder-volume",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- distance-from-center-as-radius (4 → 10) ---
  {
    id: "bank-geo-299",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A circle in the $xy$-plane has its center at $(1, -3)$, and the point $(6, 9)$ lies on the circle. What is the radius of the circle?",
    choices: [
      // distractor: uses only the horizontal difference
      { id: "A", text: "$5$" },
      // distractor: uses only the vertical difference
      { id: "B", text: "$12$" },
      { id: "C", text: "$13$" },
      // distractor: adds the two differences
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The horizontal and vertical gaps are $5$ and $12$, a Pythagorean triple, so the radius is $13$.\n\n**The Full Solution:**\nStep 1: The radius is the distance from the center to any point on the circle.\nStep 2: The differences are $6 - 1 = 5$ and $9 - (-3) = 12$.\nStep 3: $r = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. Check: $5$-$12$-$13$ is a right-triangle triple, and $13$ is longer than either leg.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reports only the horizontal difference.\n* Choice B ($12$): reports only the vertical difference.\n* Choice D ($17$): adds the two differences instead of using the Pythagorean theorem.\n\n**Test Day Takeaway:** A radius given by two points is a distance. Square the differences, add, then take the square root — never add the differences directly.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-300",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The endpoints of a radius of a circle in the $xy$-plane are $(-4, 2)$ and $(4, -13)$. What is the length of the radius?",
    choices: [
      // distractor: uses only the horizontal difference
      { id: "A", text: "$8$" },
      // distractor: uses only the vertical difference
      { id: "B", text: "$15$" },
      { id: "C", text: "$17$" },
      // distractor: adds the two differences
      { id: "D", text: "$23$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The legs are $8$ and $15$, so the distance is $\\sqrt{64 + 225} = 17$.\n\n**The Full Solution:**\nStep 1: A radius runs from the center to a point on the circle, so its length is the distance between the two given endpoints.\nStep 2: The differences are $4 - (-4) = 8$ and $-13 - 2 = -15$, whose squares are $64$ and $225$.\nStep 3: $r = \\sqrt{64 + 225} = \\sqrt{289} = 17$. Check: $8$-$15$-$17$ is a Pythagorean triple, so the arithmetic is exact.\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): reports only the horizontal difference.\n* Choice B ($15$): reports only the vertical difference.\n* Choice D ($23$): adds $8$ and $15$ rather than combining them with the distance formula.\n\n**Test Day Takeaway:** Squaring erases the sign, so a negative difference is harmless. Recognize $8$-$15$-$17$ and skip the arithmetic.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-301",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A circle in the $xy$-plane has its center at $(6,\\,-2)$, and the point $(-2,\\,4)$ lies on the circle. What is the radius of the circle?",
    choices: [
      // distractor: subtracts the coordinate differences
      { id: "A", text: "$2$" },
      { id: "B", text: "$10$" },
      // distractor: adds the coordinate differences
      { id: "C", text: "$14$" },
      // distractor: reports r squared
      { id: "D", text: "$100$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The radius is the distance from the center to any point on the circle. The point sits $8$ units horizontally and $6$ units vertically from the center, and $6$, $8$, $10$ is a Pythagorean triple, so $r=10$.\n\n**The Full Solution:**\nStep 1: The radius equals the distance between the center $(6,\\,-2)$ and the point $(-2,\\,4)$.\nStep 2: The horizontal change is $-2-6=-8$ and the vertical change is $4-(-2)=6$, so $r=\\sqrt{(-8)^2+6^2}=\\sqrt{64+36}=\\sqrt{100}$.\nStep 3: $r=\\sqrt{100}=10$.\n\nCheck: $8^2+6^2=64+36=100=10^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracted the two coordinate differences, $8-6$, instead of combining them with the distance formula.\n* Choice C ($14$): added the coordinate differences, $8+6$, instead of taking the square root of the sum of their squares.\n* Choice D ($100$): stopped at $r^2$, the number that would sit on the right side of the circle's equation, instead of reporting $r$.\n\n**Test Day Takeaway:** A radius is a distance. Turn the two coordinate differences into the legs of a right triangle and finish with the Pythagorean theorem.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-302",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Segment $\\overline{CD}$ is a radius of a circle in the $xy$-plane. The center of the circle is $C(-8,\\,1)$, and the other endpoint of the radius is $D(-4,\\,-2)$. What is the length of $\\overline{CD}$?",
    choices: [
      // distractor: uses only the vertical change
      { id: "A", text: "$3$" },
      { id: "B", text: "$5$" },
      // distractor: adds the two coordinate changes
      { id: "C", text: "$7$" },
      // distractor: reports the diameter
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** From $C$ to $D$ the coordinates change by $4$ and $3$, and $3$, $4$, $5$ is a Pythagorean triple, so $CD=5$.\n\n**The Full Solution:**\nStep 1: A radius runs from the center to a point on the circle, so its length is the distance between $C(-8,\\,1)$ and $D(-4,\\,-2)$.\nStep 2: The horizontal change is $-4-(-8)=4$ and the vertical change is $-2-1=-3$, so $CD=\\sqrt{4^2+(-3)^2}=\\sqrt{16+9}=\\sqrt{25}$.\nStep 3: $CD=\\sqrt{25}=5$.\n\nCheck: $3^2+4^2=9+16=25=5^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): used only the vertical change, $|1-(-2)|=3$, as though $\\overline{CD}$ were a vertical segment. That single subtraction works only when the two endpoints share an $x$-coordinate, and here they do not.\n* Choice C ($7$): added the horizontal and vertical changes, $4+3$, instead of combining them with the distance formula.\n* Choice D ($10$): found the radius correctly and then doubled it, reporting the diameter of the circle.\n\n**Test Day Takeaway:** Check whether the two endpoints share a coordinate before reaching for a single subtraction. When both coordinates change, only the distance formula gives the length.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-303",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, a circle is centered at the origin and passes through the point $(-20,\\,21)$. What is the radius of the circle?",
    choices: [
      // distractor: averages the coordinates
      { id: "A", text: "$20.5$" },
      { id: "B", text: "$29$" },
      // distractor: adds the coordinates
      { id: "C", text: "$41$" },
      // distractor: reports the diameter
      { id: "D", text: "$58$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** From the origin, $r=\\sqrt{(-20)^2+21^2}=\\sqrt{400+441}=\\sqrt{841}=29$.\n\n**The Full Solution:**\nStep 1: A circle centered at the origin has radius equal to the distance from $(0,\\,0)$ to any point on it.\nStep 2: $r=\\sqrt{(-20-0)^2+(21-0)^2}=\\sqrt{400+441}=\\sqrt{841}$.\nStep 3: $\\sqrt{841}=29$, since $29^2=841$.\n\nCheck: $20$, $21$, $29$ is a Pythagorean triple. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20.5$): averaged the two coordinate magnitudes, $\\frac{20+21}{2}$, instead of using the distance formula.\n* Choice C ($41$): added the coordinate magnitudes, $20+21$, which overshoots because the legs of a right triangle are always longer together than the hypotenuse.\n* Choice D ($58$): found the radius correctly but then doubled it, reporting the diameter.\n\n**Test Day Takeaway:** For a circle centered at the origin, the radius to $(x,\\,y)$ is $\\sqrt{x^2+y^2}$. Memorizing $20$, $21$, $29$ turns this into a one-step read.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-304",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A circle in the $xy$-plane has center $(-6,\\,2)$ and passes through the point $(-6+8c,\\,2-15c)$, where $c$ is a positive constant. Which equation represents this circle?",
    choices: [
      // distractor: flips the signs of the center coordinates
      { id: "A", text: "$(x-6)^2+(y+2)^2=289c^2$" },
      // distractor: uses r instead of r squared
      { id: "B", text: "$(x+6)^2+(y-2)^2=17c$" },
      // distractor: squares 17 but not c
      { id: "C", text: "$(x+6)^2+(y-2)^2=289c$" },
      { id: "D", text: "$(x+6)^2+(y-2)^2=289c^2$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The point is $8c$ right and $15c$ down from the center, so $r=17c$ by the $8$, $15$, $17$ triple, and $r^2=289c^2$. With center $(-6,\\,2)$ the equation is $(x+6)^2+(y-2)^2=289c^2$.\n\n**The Full Solution:**\nStep 1: A circle with center $(h,\\,k)$ and radius $r$ has equation $(x-h)^2+(y-k)^2=r^2$. Here $h=-6$ and $k=2$, so the left side is $(x+6)^2+(y-2)^2$.\nStep 2: The horizontal change from the center to the given point is $(-6+8c)-(-6)=8c$ and the vertical change is $(2-15c)-2=-15c$, so $r=\\sqrt{(8c)^2+(-15c)^2}=\\sqrt{64c^2+225c^2}=\\sqrt{289c^2}=17c$ (positive because $c>0$).\nStep 3: Square the radius: $r^2=(17c)^2=289c^2$.\n\nCheck: substituting $x=-6+8c$ and $y=2-15c$ gives $(8c)^2+(-15c)^2=289c^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x-6)^2+(y+2)^2=289c^2$): flipped the signs inside the parentheses, placing the center at $(6,\\,-2)$ instead of $(-6,\\,2)$.\n* Choice B ($(x+6)^2+(y-2)^2=17c$): put the radius $17c$ on the right side instead of the radius squared.\n* Choice C ($(x+6)^2+(y-2)^2=289c$): squared the $17$ but forgot to square the $c$ as well.\n\n**Test Day Takeaway:** In $(x-h)^2+(y-k)^2=r^2$, the center's coordinates change sign inside the parentheses and the whole radius, constant factor included, gets squared on the right.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-from-center-as-radius",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- pythagorean-triple-recognition (4 → 10) ---
  {
    id: "bank-geo-305",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the right triangle shown, the two legs have lengths $8$ and $15$. What is the length of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15, 0], [15, 8]], sideLabels: ["15", "8", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the legs
      { id: "A", text: "$7$" },
      { id: "B", text: "$17$" },
      // distractor: adds the legs
      { id: "C", text: "$23$" },
      // distractor: omits the square root
      { id: "D", text: "$289$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pythagorean Triple Recognition**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $8$, $15$, $17$ is one of the standard Pythagorean triples, so the hypotenuse is $17$.\n\n**The Full Solution:**\nStep 1: For legs $a$ and $b$ and hypotenuse $c$, $a^2+b^2=c^2$.\nStep 2: $8^2+15^2=64+225=289$, so $c^2=289$.\nStep 3: $c=\\sqrt{289}=17$.\n\nCheck: $17^2=289$ and $289=64+225$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): subtracted the legs, $15-8$, which is the rule for finding a missing leg, not a hypotenuse.\n* Choice C ($23$): added the legs, $8+15$; the hypotenuse is always shorter than the sum of the two legs.\n* Choice D ($289$): stopped at $c^2$ without taking the square root.\n\n**Test Day Takeaway:** Learn the triples $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, and $7$-$24$-$25$. Spotting one turns a Pythagorean computation into instant recall.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-triple-recognition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-306",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In triangle $PQR$, angle $Q$ is a right angle, $PQ=7$, and $QR=24$. What is the length of $\\overline{PR}$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 7]], labels: ["R", "Q", "P"], sideLabels: ["24", "7", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: doubles the shorter leg as in a 30-60-90 triangle
      { id: "A", text: "$14$" },
      // distractor: subtracts the legs
      { id: "B", text: "$17$" },
      { id: "C", text: "$25$" },
      // distractor: adds the legs
      { id: "D", text: "$31$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Pythagorean Triple Recognition**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** The right angle at $Q$ makes $\\overline{PR}$ the hypotenuse, and $7$, $24$, $25$ is a Pythagorean triple, so $PR=25$.\n\n**The Full Solution:**\nStep 1: The side opposite the right angle is the hypotenuse, so $PQ$ and $QR$ are the legs and $PR$ is the hypotenuse.\nStep 2: $PR^2=7^2+24^2=49+576=625$.\nStep 3: $PR=\\sqrt{625}=25$.\n\nCheck: $25^2=625=49+576$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): doubled the shorter leg, applying the $30$-$60$-$90$ rule that the hypotenuse is twice the short leg. That rule needs a $30^\\circ$ angle, which is not given here.\n* Choice B ($17$): subtracted the legs, $24-7$, instead of combining their squares.\n* Choice D ($31$): added the legs, $7+24$.\n\n**Test Day Takeaway:** Identify the hypotenuse first: it is always the side opposite the right angle, never one of the two sides that form it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-triple-recognition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-307",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Triangle $GHJ$ has a right angle at $H$. If $GJ=15$ and $GH=9$, what is the length of $\\overline{HJ}$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [9, 0], [9, 12]], labels: ["G", "H", "J"], sideLabels: ["9", "", "15"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the given lengths
      { id: "A", text: "$6$" },
      { id: "B", text: "$12$" },
      // distractor: adds the given lengths
      { id: "C", text: "$24$" },
      // distractor: omits the square root
      { id: "D", text: "$144$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pythagorean Triple Recognition**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\overline{GJ}$ is the hypotenuse, so $HJ=\\sqrt{15^2-9^2}$. Since $9$, $12$, $15$ is $3$-$4$-$5$ tripled, $HJ=12$.\n\n**The Full Solution:**\nStep 1: The right angle is at $H$, so the hypotenuse is $\\overline{GJ}=15$ and the legs are $\\overline{GH}=9$ and $\\overline{HJ}$.\nStep 2: $9^2+HJ^2=15^2$, so $HJ^2=225-81=144$.\nStep 3: $HJ=\\sqrt{144}=12$.\n\nCheck: $9^2+12^2=81+144=225=15^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): subtracted the two given lengths, $15-9$, instead of subtracting their squares before taking a root.\n* Choice C ($24$): added the two given lengths; a leg must be shorter than the hypotenuse, so $24$ is impossible.\n* Choice D ($144$): stopped at $HJ^2$ without taking the square root.\n\n**Test Day Takeaway:** To find a leg, subtract squares; to find a hypotenuse, add them. Check the answer against the hypotenuse: every leg must come out smaller.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-triple-recognition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-308",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The legs of a right triangle measure $18$ centimeters and $24$ centimeters. What is the length, in centimeters, of the hypotenuse of this triangle?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 18]], sideLabels: ["24", "18", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the legs
      { id: "A", text: "$6$" },
      { id: "B", text: "$30$" },
      // distractor: adds the legs
      { id: "C", text: "$42$" },
      // distractor: omits the square root
      { id: "D", text: "$900$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pythagorean Triple Recognition**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $18$ and $24$ are $6$ times $3$ and $4$, so the hypotenuse is $6$ times $5$, or $30$ centimeters.\n\n**The Full Solution:**\nStep 1: With legs $a=18$ and $b=24$, the hypotenuse satisfies $c^2=a^2+b^2$.\nStep 2: $c^2=18^2+24^2=324+576=900$.\nStep 3: $c=\\sqrt{900}=30$ centimeters.\n\nCheck: $30^2=900=324+576$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): subtracted the legs, $24-18$, which is the scale factor of the triple rather than a side length.\n* Choice C ($42$): added the legs, $18+24$, instead of adding their squares.\n* Choice D ($900$): reported $c^2$ without taking the square root.\n\n**Test Day Takeaway:** Multiples of a known triple stay triples. Factor out the common divisor, use the small triple, then scale the answer back up.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-triple-recognition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-309",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A right triangle has a hypotenuse of length $26$ and one leg of length $10$. What is the length of the other leg?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [10, 0], [10, 24]], sideLabels: ["10", "", "26"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the given lengths
      { id: "A", text: "$16$" },
      { id: "B", text: "$24$" },
      // distractor: adds the given lengths
      { id: "C", text: "$36$" },
      // distractor: omits the square root
      { id: "D", text: "$576$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pythagorean Triple Recognition**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $10$ and $26$ are $2$ times $5$ and $13$, so the missing leg is $2$ times $12$, or $24$.\n\n**The Full Solution:**\nStep 1: Call the missing leg $b$. Then $10^2+b^2=26^2$.\nStep 2: $b^2=676-100=576$.\nStep 3: $b=\\sqrt{576}=24$.\n\nCheck: $10^2+24^2=100+576=676=26^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): subtracted the given lengths, $26-10$, instead of subtracting their squares first.\n* Choice C ($36$): added the given lengths, $26+10$, which is larger than the hypotenuse and so cannot be a leg.\n* Choice D ($576$): stopped at $b^2$ and never took the square root.\n\n**Test Day Takeaway:** A $5$-$12$-$13$ triangle scaled by $2$ gives $10$-$24$-$26$. Dividing the two known sides by their common factor is the fastest way to spot a scaled triple.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-triple-recognition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-310",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In right triangle $JKL$, angle $K$ is a right angle, $JK=12$, and $JL=37$. What is the perimeter of triangle $JKL$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [12, 0], [12, 35]], labels: ["J", "K", "L"], sideLabels: ["12", "", "37"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: adds only the two given sides
      { id: "A", text: "$49$" },
      // distractor: uses 12 for the missing leg
      { id: "B", text: "$61$" },
      { id: "C", text: "$84$" },
      // distractor: reports the area instead of the perimeter
      { id: "D", text: "$210$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Pythagorean Triple Recognition**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\overline{JL}$ is the hypotenuse, and $12$, $35$, $37$ is a Pythagorean triple, so $KL=35$ and the perimeter is $12+35+37=84$.\n\n**The Full Solution:**\nStep 1: The right angle sits at $K$, so $\\overline{JL}=37$ is the hypotenuse and $\\overline{JK}=12$ and $\\overline{KL}$ are the legs.\nStep 2: $KL^2=37^2-12^2=1369-144=1225$, so $KL=\\sqrt{1225}=35$.\nStep 3: The perimeter is the sum of all three sides: $12+35+37=84$.\n\nCheck: $12^2+35^2=144+1225=1369=37^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($49$): added only the two sides named in the question, $12+37$, and never found the third side.\n* Choice B ($61$): assumed the triangle was isosceles and reused $12$ for the missing leg, giving $12+12+37$.\n* Choice D ($210$): computed the area, $\\frac{1}{2}(12)(35)$, instead of the perimeter.\n\n**Test Day Takeaway:** When a question asks for a perimeter, the Pythagorean step is only the setup. Find the missing side, then answer the question that was actually asked.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "pythagorean-triple-recognition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- rectangle-area (4 → 10) ---
  {
    id: "bank-geo-311",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A rectangle has a length of $14$ inches and a width of $9$ inches. What is the area, in square inches, of the rectangle?",
    choices: [
      // distractor: adds length and width
      { id: "A", text: "$23$" },
      // distractor: gives the perimeter
      { id: "B", text: "$46$" },
      { id: "C", text: "$126$" },
      // distractor: doubles the area
      { id: "D", text: "$252$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Area is length times width: $14\\cdot 9=126$ square inches.\n\n**The Full Solution:**\nStep 1: The area of a rectangle is $A=\\ell w$, where $\\ell$ is the length and $w$ is the width.\nStep 2: Substitute $\\ell=14$ and $w=9$: $A=(14)(9)$.\nStep 3: $A=126$ square inches.\n\nCheck: $126\\div 9=14$, the given length. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): added the length and the width, $14+9$, instead of multiplying them.\n* Choice B ($46$): computed the perimeter, $2(14+9)$, which answers a different question.\n* Choice D ($252$): multiplied correctly and then doubled, importing the factor of $2$ from the perimeter formula.\n\n**Test Day Takeaway:** Area multiplies the two dimensions and carries square units; perimeter adds them and carries linear units. Let the units in the question tell you which one is wanted.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-312",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The perimeter of a rectangle is $44$ and its width is $7$. What is the area of the rectangle?",
    choices: [
      // distractor: reports the length instead of the area
      { id: "A", text: "$15$" },
      { id: "B", text: "$105$" },
      // distractor: uses half the perimeter as the length
      { id: "C", text: "$154$" },
      // distractor: subtracts the width from the full perimeter
      { id: "D", text: "$259$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Half the perimeter is $22$, which is one length plus one width, so the length is $22-7=15$ and the area is $15\\cdot 7=105$.\n\n**The Full Solution:**\nStep 1: The perimeter of a rectangle is $P=2\\ell+2w$, so $2\\ell+2(7)=44$.\nStep 2: $2\\ell=44-14=30$, so $\\ell=15$.\nStep 3: The area is $A=\\ell w=(15)(7)=105$.\n\nCheck: $2(15)+2(7)=30+14=44$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): stopped at the length and never multiplied by the width.\n* Choice C ($154$): used $22$, half the perimeter, as the length and multiplied $22\\cdot 7$; half the perimeter is a length plus a width, not a length alone.\n* Choice D ($259$): subtracted the width from the whole perimeter, $44-7=37$, and multiplied $37\\cdot 7$.\n\n**Test Day Takeaway:** Halve the perimeter first. That single number equals one length plus one width, which turns most perimeter-to-area problems into one subtraction.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-313",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A rectangular parking space has an area of $96$ square feet and a width of $8$ feet. What is the length, in feet, of the parking space?",
    choices: [
      { id: "A", text: "$12$" },
      // distractor: gives the perimeter
      { id: "B", text: "$40$" },
      // distractor: subtracts the width from the area
      { id: "C", text: "$88$" },
      // distractor: multiplies instead of dividing
      { id: "D", text: "$768$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Divide the area by the width: $96\\div 8=12$ feet.\n\n**The Full Solution:**\nStep 1: For a rectangle, $A=\\ell w$, so $96=\\ell(8)$.\nStep 2: Divide both sides by $8$: $\\ell=\\frac{96}{8}$.\nStep 3: $\\ell=12$ feet.\n\nCheck: $(12)(8)=96$ square feet. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($40$): found the length correctly but then reported the perimeter, $2(12+8)$.\n* Choice C ($88$): subtracted the width from the area, $96-8$, treating an area relationship as an additive one.\n* Choice D ($768$): multiplied the area by the width instead of dividing.\n\n**Test Day Takeaway:** Area divided by one dimension returns the other dimension. Confirm by multiplying back: the product has to reproduce the given area.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-314",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The length of a rectangle is $3$ times its width, and the area of the rectangle is $108$ square centimeters. What is the width, in centimeters, of the rectangle?",
    choices: [
      { id: "A", text: "$6$" },
      // distractor: reports the length instead of the width
      { id: "B", text: "$18$" },
      // distractor: stops at w squared
      { id: "C", text: "$36$" },
      // distractor: halves the area
      { id: "D", text: "$54$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** With $\\ell=3w$, the area is $3w^2=108$, so $w^2=36$ and $w=6$ centimeters.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width. The length is $3w$, so the area is $A=(3w)(w)=3w^2$.\nStep 2: $3w^2=108$, so $w^2=36$.\nStep 3: $w=6$ centimeters, taking the positive root because a width must be positive.\n\nCheck: width $6$ and length $18$ give $(6)(18)=108$ square centimeters. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($18$): solved correctly but reported the length $3w$ instead of the width.\n* Choice C ($36$): stopped at $w^2=36$ without taking the square root.\n* Choice D ($54$): halved the area, as though the rectangle were made of two equal squares.\n\n**Test Day Takeaway:** Name the smaller dimension as the variable, write the other in terms of it, and check at the end which of the two the question asked for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-315",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Each diagonal of a square measures $14$ units. What is the area, in square units, of the square?",
    choices: [
      // distractor: uses half the diagonal as the side
      { id: "A", text: "$49$" },
      { id: "B", text: "$98$" },
      // distractor: squares the diagonal without halving
      { id: "C", text: "$196$" },
      // distractor: doubles d squared instead of halving it
      { id: "D", text: "$392$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** For a square, the area is $\\frac{d^2}{2}$, so $\\frac{14^2}{2}=\\frac{196}{2}=98$ square units.\n\n**The Full Solution:**\nStep 1: A diagonal splits the square into two right triangles whose legs are sides of the square, so $s^2+s^2=14^2$.\nStep 2: $2s^2=196$, so $s^2=98$.\nStep 3: The area of a square is $s^2$, which is exactly $98$ square units.\n\nCheck: $s=\\sqrt{98}=7\\sqrt{2}$, and $(7\\sqrt{2})^2+(7\\sqrt{2})^2=98+98=196=14^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($49$): treated half the diagonal, $7$, as the side length and squared it.\n* Choice C ($196$): squared the diagonal and forgot the factor $\\frac{1}{2}$.\n* Choice D ($392$): doubled $d^2$ instead of halving it, inverting the relationship.\n\n**Test Day Takeaway:** In a square, the area is half the square of a diagonal. That shortcut skips finding the irrational side length entirely.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-316",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The length of a rectangular garden plot is $5$ feet more than its width, and the plot has an area of $84$ square feet. What is the perimeter, in feet, of the plot?",
    choices: [
      // distractor: adds length and width without doubling
      { id: "A", text: "$19$" },
      { id: "B", text: "$38$" },
      // distractor: uses the magnitude of the rejected root
      { id: "C", text: "$58$" },
      // distractor: applies the factor of 2 twice
      { id: "D", text: "$76$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Two numbers $5$ apart with product $84$ are $7$ and $12$, so the perimeter is $2(7+12)=38$ feet.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width. Then the length is $w+5$ and $w(w+5)=84$.\nStep 2: $w^2+5w-84=0$ factors as $(w+12)(w-7)=0$, so $w=-12$ or $w=7$. A width must be positive, so $w=7$ and the length is $12$.\nStep 3: The perimeter is $2(7+12)=2(19)=38$ feet.\n\nCheck: $(7)(12)=84$ square feet, and $12$ is indeed $5$ more than $7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($19$): added the length and width and stopped, skipping the factor of $2$ in the perimeter.\n* Choice C ($58$): used $12$ as the width by taking the magnitude of the rejected root $-12$, which makes the length $17$ and the perimeter $2(12+17)$.\n* Choice D ($76$): doubled $2(\\ell+w)$ a second time, applying the factor of $2$ twice.\n\n**Test Day Takeaway:** A quadratic from an area setup usually has one negative root that the geometry rejects. Discard it, then reread the question to see which quantity is wanted.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "rectangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- right-triangle-pythagorean (4 → 10) ---
  {
    id: "bank-geo-317",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the right triangle shown, one leg has length $16$ and the other leg has length $30$. What is the length of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [30, 0], [30, 16]], sideLabels: ["30", "16", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the legs
      { id: "A", text: "$14$" },
      { id: "B", text: "$34$" },
      // distractor: adds the legs
      { id: "C", text: "$46$" },
      // distractor: omits the square root
      { id: "D", text: "$1{,}156$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Divide by $2$: the legs are $8$ and $15$, a triple whose hypotenuse is $17$. Scale back up to get $34$.\n\n**The Full Solution:**\nStep 1: The hypotenuse $c$ satisfies $c^2=16^2+30^2$.\nStep 2: $c^2=256+900=1{,}156$.\nStep 3: $c=\\sqrt{1{,}156}=34$.\n\nCheck: $16^2+30^2=256+900=1{,}156=34^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): subtracted the legs, $30-16$; a hypotenuse must be longer than either leg.\n* Choice C ($46$): added the legs, $16+30$, instead of adding their squares.\n* Choice D ($1{,}156$): reported $c^2$ instead of $c$.\n\n**Test Day Takeaway:** Before squaring large numbers, check for a common factor. Dividing both legs by it usually reveals a triple you already know.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-318",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Right triangle $DEF$ has a right angle at $E$. If $DE=5$ and $DF=13$, what is the length of $\\overline{EF}$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [5, 0], [5, 12]], labels: ["D", "E", "F"], sideLabels: ["5", "", "13"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the given lengths
      { id: "A", text: "$8$" },
      { id: "B", text: "$12$" },
      // distractor: adds the given lengths
      { id: "C", text: "$18$" },
      // distractor: omits the square root
      { id: "D", text: "$144$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The right angle at $E$ makes $\\overline{DF}=13$ the hypotenuse, and $5$, $12$, $13$ is a triple, so $EF=12$.\n\n**The Full Solution:**\nStep 1: The hypotenuse lies opposite the right angle, so $\\overline{DF}$ is the hypotenuse and $\\overline{DE}$ and $\\overline{EF}$ are the legs.\nStep 2: $5^2+EF^2=13^2$, so $EF^2=169-25=144$.\nStep 3: $EF=\\sqrt{144}=12$.\n\nCheck: $5^2+12^2=25+144=169=13^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): subtracted the given lengths, $13-5$, rather than subtracting their squares.\n* Choice C ($18$): added the given lengths; a leg cannot exceed the hypotenuse.\n* Choice D ($144$): stopped at $EF^2$ without taking the square root.\n\n**Test Day Takeaway:** Locate the right angle first. The side that does not touch it is the hypotenuse, and only the hypotenuse sits alone on one side of $a^2+b^2=c^2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-319",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A right triangle has one leg of length $6$ units and a second leg of length $10$ units. What is the length, in units, of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [10, 0], [10, 6]], sideLabels: ["10", "6", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the leg lengths
      { id: "A", text: "$4$" },
      // distractor: subtracts the squares
      { id: "B", text: "$8$" },
      { id: "C", text: "$2\\sqrt{34}$" },
      // distractor: adds the leg lengths
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $c=\\sqrt{6^2+10^2}=\\sqrt{136}$, and $136=4\\cdot 34$, so $c=2\\sqrt{34}$.\n\n**The Full Solution:**\nStep 1: Both given sides are legs, so $c^2=6^2+10^2$.\nStep 2: $c^2=36+100=136$, so $c=\\sqrt{136}$.\nStep 3: Factor out the largest perfect square: $\\sqrt{136}=\\sqrt{4\\cdot 34}=2\\sqrt{34}$.\n\nCheck: $(2\\sqrt{34})^2=4\\cdot 34=136$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): subtracted the leg lengths, $10-6$.\n* Choice B ($8$): subtracted the squares, $\\sqrt{100-36}$, which is the procedure for a missing leg, not a hypotenuse.\n* Choice D ($16$): added the leg lengths instead of their squares.\n\n**Test Day Takeaway:** When the sum of the squares is not a perfect square, simplify the radical by pulling out the largest perfect-square factor rather than reaching for a decimal.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-320",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The legs of a right triangle have lengths $2$ and $2\\sqrt{6}$. What is the length of the hypotenuse of the triangle?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [49, 0], [49, 20]], sideLabels: ["2√6", "2", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the squares
      { id: "A", text: "$2\\sqrt{5}$" },
      { id: "B", text: "$2\\sqrt{7}$" },
      // distractor: adds the side lengths
      { id: "C", text: "$2\\sqrt{6}+2$" },
      // distractor: doubles the correct hypotenuse
      { id: "D", text: "$4\\sqrt{7}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $c^2=2^2+(2\\sqrt{6})^2=4+24=28$, so $c=\\sqrt{28}=2\\sqrt{7}$.\n\n**The Full Solution:**\nStep 1: Square each leg. $2^2=4$, and $(2\\sqrt{6})^2=2^2\\cdot(\\sqrt{6})^2=4\\cdot 6=24$.\nStep 2: Add: $c^2=4+24=28$.\nStep 3: $c=\\sqrt{28}=\\sqrt{4\\cdot 7}=2\\sqrt{7}$.\n\nCheck: $(2\\sqrt{7})^2=4\\cdot 7=28=4+24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2\\sqrt{5}$): subtracted the squares, $24-4=20$, instead of adding them.\n* Choice C ($2\\sqrt{6}+2$): added the two side lengths rather than their squares.\n* Choice D ($4\\sqrt{7}$): squared the coefficient but then failed to take the square root of $4$, doubling the correct hypotenuse.\n\n**Test Day Takeaway:** Squaring a term like $2\\sqrt{6}$ squares both parts: the coefficient and the radicand. Forgetting the coefficient is the most common slip in radical Pythagorean problems.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-321",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A right triangle has legs that measure $5$ and $11$. Which of the following is closest to the length of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [11, 0], [11, 5]], sideLabels: ["11", "5", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the legs
      { id: "A", text: "$6$" },
      // distractor: subtracts the squares
      { id: "B", text: "$9.8$" },
      { id: "C", text: "$12.1$" },
      // distractor: adds the legs
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $c=\\sqrt{5^2+11^2}=\\sqrt{146}$. Since $12^2=144$, $\\sqrt{146}$ sits just above $12$, so $12.1$ is closest.\n\n**The Full Solution:**\nStep 1: Both given sides are legs, so $c^2=5^2+11^2$.\nStep 2: $c^2=25+121=146$.\nStep 3: $146$ lies between $144=12^2$ and $169=13^2$, and it is only $2$ above $144$, so $c$ is a little more than $12$. Of the options, $12.1$ is closest.\n\nCheck: $12.1^2=146.41$, within $0.41$ of $146$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): subtracted the legs, $11-5$; the hypotenuse must exceed both legs.\n* Choice B ($9.8$): subtracted the squares, $\\sqrt{121-25}=\\sqrt{96}$, which is the rule for finding a missing leg.\n* Choice D ($16$): added the legs, $5+11$; the hypotenuse is always less than that sum.\n\n**Test Day Takeaway:** To estimate a square root without a calculator, trap it between the two perfect squares on either side and judge how close it sits to each.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-322",
    domain: "geometry",
    skills: ["pythagorean-theorem"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In rectangle $KLMN$, side $\\overline{KL}$ has length $20$ and diagonal $\\overline{KM}$ has length $29$. What is the area of rectangle $KLMN$?",
    choices: [
      // distractor: gives the area of one of the two triangles
      { id: "A", text: "$210$" },
      { id: "B", text: "$420$" },
      // distractor: multiplies the given side by the diagonal
      { id: "C", text: "$580$" },
      // distractor: multiplies the missing side by the diagonal
      { id: "D", text: "$609$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The diagonal is the hypotenuse of a right triangle with legs $20$ and $LM$. Since $20$, $21$, $29$ is a triple, $LM=21$ and the area is $20\\cdot 21=420$.\n\n**The Full Solution:**\nStep 1: In a rectangle the sides meet at right angles, so triangle $KLM$ is a right triangle with legs $\\overline{KL}$ and $\\overline{LM}$ and hypotenuse $\\overline{KM}$.\nStep 2: $20^2+LM^2=29^2$, so $LM^2=841-400=441$ and $LM=21$.\nStep 3: The area of the rectangle is $(KL)(LM)=(20)(21)=420$.\n\nCheck: $20^2+21^2=400+441=841=29^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($210$): computed $\\frac{1}{2}(20)(21)$, the area of triangle $KLM$, which is only half the rectangle.\n* Choice C ($580$): multiplied the given side by the diagonal, $20\\cdot 29$, treating the diagonal as the second side.\n* Choice D ($609$): found $LM=21$ but then multiplied it by the diagonal, $21\\cdot 29$, instead of by $KL$.\n\n**Test Day Takeaway:** A diagonal is never a side. Use it only as the hypotenuse to recover the missing side, then multiply the two actual sides.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "right-triangle-pythagorean",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- triangle-area (4 → 10) ---
  {
    id: "bank-geo-323",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A triangle has a base of $18$ centimeters and a height of $7$ centimeters. What is the area, in square centimeters, of the triangle?",
    choices: [
      // distractor: adds base and height
      { id: "A", text: "$25$" },
      // distractor: halves twice
      { id: "B", text: "$31.5$" },
      { id: "C", text: "$63$" },
      // distractor: omits the factor one half
      { id: "D", text: "$126$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $A=\\frac{1}{2}bh=\\frac{1}{2}(18)(7)=63$ square centimeters.\n\n**The Full Solution:**\nStep 1: The area of a triangle is $A=\\frac{1}{2}bh$.\nStep 2: Substitute $b=18$ and $h=7$: $A=\\frac{1}{2}(18)(7)$.\nStep 3: $\\frac{1}{2}(18)=9$, and $9\\cdot 7=63$ square centimeters.\n\nCheck: doubling the area gives $126=18\\cdot 7$, the full rectangle the triangle fills half of. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): added the base and the height, $18+7$, instead of multiplying them.\n* Choice B ($31.5$): applied the factor $\\frac{1}{2}$ twice, computing $\\frac{1}{4}(18)(7)$.\n* Choice D ($126$): multiplied base by height but left off the factor $\\frac{1}{2}$; that product is the area of the surrounding rectangle.\n\n**Test Day Takeaway:** A triangle fills exactly half of the rectangle built on its base and height. If an answer equals $bh$, the factor $\\frac{1}{2}$ was dropped.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-324",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The area of a triangle is $54$ square units and the length of its base is $12$ units. What is the height, in units, of the triangle?",
    choices: [
      // distractor: divides area by base without doubling
      { id: "A", text: "$4.5$" },
      { id: "B", text: "$9$" },
      // distractor: subtracts base from area
      { id: "C", text: "$42$" },
      // distractor: multiplies instead of dividing
      { id: "D", text: "$648$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Double the area, then divide by the base: $h=\\frac{2(54)}{12}=\\frac{108}{12}=9$ units.\n\n**The Full Solution:**\nStep 1: Start from $A=\\frac{1}{2}bh$, so $54=\\frac{1}{2}(12)h$.\nStep 2: $\\frac{1}{2}(12)=6$, so $54=6h$.\nStep 3: $h=\\frac{54}{6}=9$ units.\n\nCheck: $\\frac{1}{2}(12)(9)=54$ square units. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.5$): divided the area by the base, $\\frac{54}{12}$, forgetting that the area already carries a factor of $\\frac{1}{2}$.\n* Choice C ($42$): subtracted the base from the area, $54-12$, treating a product relationship as a sum.\n* Choice D ($648$): multiplied the area by the base instead of dividing.\n\n**Test Day Takeaway:** Solving $A=\\frac{1}{2}bh$ for a missing dimension means doubling the area first. Substituting back into the formula catches the missing factor of $2$ immediately.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-325",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In triangle $RST$, the area is $72$ square centimeters and the height drawn to side $\\overline{RS}$ measures $9$ centimeters. What is the length, in centimeters, of $\\overline{RS}$?",
    choices: [
      // distractor: omits the factor of 2
      { id: "A", text: "$8$" },
      { id: "B", text: "$16$" },
      // distractor: doubles twice
      { id: "C", text: "$32$" },
      // distractor: subtracts the height from the area
      { id: "D", text: "$63$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $b=\\frac{2A}{h}=\\frac{2(72)}{9}=\\frac{144}{9}=16$ centimeters.\n\n**The Full Solution:**\nStep 1: The height drawn to $\\overline{RS}$ means $\\overline{RS}$ is the base, so $72=\\frac{1}{2}(RS)(9)$.\nStep 2: $\\frac{1}{2}(9)=4.5$, so $72=4.5(RS)$.\nStep 3: $RS=\\frac{72}{4.5}=16$ centimeters.\n\nCheck: $\\frac{1}{2}(16)(9)=72$ square centimeters. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): divided the area by the height, $\\frac{72}{9}$, without first doubling the area.\n* Choice C ($32$): doubled the area twice before dividing, computing $\\frac{4(72)}{9}$.\n* Choice D ($63$): subtracted the height from the area, $72-9$.\n\n**Test Day Takeaway:** Whichever side the height is drawn to is the base that pairs with it. Match the base and height as a pair before substituting.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-326",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the right triangle shown, the legs have lengths $14$ and $48$. What is the area of the triangle?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [48, 0], [48, 14]], sideLabels: ["48", "14", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: gives the hypotenuse
      { id: "A", text: "$50$" },
      // distractor: gives the perimeter
      { id: "B", text: "$112$" },
      { id: "C", text: "$336$" },
      // distractor: omits the factor one half
      { id: "D", text: "$672$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In a right triangle the legs are a base and height pair, so $A=\\frac{1}{2}(14)(48)=336$.\n\n**The Full Solution:**\nStep 1: The two legs meet at the right angle, so each is perpendicular to the other and they serve as base and height.\nStep 2: $A=\\frac{1}{2}bh=\\frac{1}{2}(14)(48)$.\nStep 3: $\\frac{1}{2}(48)=24$, and $14\\cdot 24=336$.\n\nCheck: $2(336)=672=14\\cdot 48$, the rectangle the triangle halves. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($50$): computed the hypotenuse, $\\sqrt{14^2+48^2}=50$, instead of the area.\n* Choice B ($112$): added all three sides, $14+48+50$, giving the perimeter.\n* Choice D ($672$): multiplied the legs without the factor $\\frac{1}{2}$.\n\n**Test Day Takeaway:** In a right triangle no extra work is needed to find a height: the two legs are already perpendicular, so they are the base and height.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-327",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "An equilateral triangle has sides of length $10$. What is the area of the triangle?",
    choices: [
      { id: "A", text: "$25\\sqrt{3}$" },
      // distractor: uses the side as the height
      { id: "B", text: "$50$" },
      // distractor: omits the factor one half
      { id: "C", text: "$50\\sqrt{3}$" },
      // distractor: squares the side
      { id: "D", text: "$100$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The altitude of an equilateral triangle of side $10$ is $5\\sqrt{3}$, so $A=\\frac{1}{2}(10)(5\\sqrt{3})=25\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The altitude to one side bisects that side, creating a right triangle with hypotenuse $10$ and shorter leg $5$.\nStep 2: The altitude is $h=\\sqrt{10^2-5^2}=\\sqrt{75}=5\\sqrt{3}$.\nStep 3: $A=\\frac{1}{2}bh=\\frac{1}{2}(10)(5\\sqrt{3})=25\\sqrt{3}$.\n\nCheck: $25\\sqrt{3}\\approx 43.3$, comfortably less than the $100$ that a $10$ by $10$ square would cover. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($50$): used the side length $10$ as the height, computing $\\frac{1}{2}(10)(10)$. The slanted side is not perpendicular to the base.\n* Choice C ($50\\sqrt{3}$): found the altitude $5\\sqrt{3}$ but multiplied by the full base without the factor $\\frac{1}{2}$.\n* Choice D ($100$): squared the side length, which is the area of a square, not of a triangle.\n\n**Test Day Takeaway:** The altitude of an equilateral triangle is $\\frac{\\sqrt{3}}{2}$ times a side, never a side itself. Drop the altitude and use the $30$-$60$-$90$ halves.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-328",
    domain: "geometry",
    skills: ["triangle-area"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, triangle $ABC$ has vertices $A(-4,\\,1)$, $B(10,\\,1)$, and $C(c,\\,8)$, where $c$ is a constant and $-4<c<10$. What is the area of triangle $ABC$?",
    choices: [
      // distractor: halves twice
      { id: "A", text: "$24.5$" },
      { id: "B", text: "$49$" },
      // distractor: uses 8 as the height instead of the vertical distance
      { id: "C", text: "$56$" },
      // distractor: omits the factor one half
      { id: "D", text: "$98$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $\\overline{AB}$ is horizontal with length $14$, and $C$ sits $7$ units above that line, so $A=\\frac{1}{2}(14)(7)=49$ no matter what $c$ is.\n\n**The Full Solution:**\nStep 1: $A$ and $B$ share the $y$-coordinate $1$, so $\\overline{AB}$ is horizontal and its length is $10-(-4)=14$. Use it as the base.\nStep 2: The height is the perpendicular distance from $C$ to the line $y=1$, which is $8-1=7$. The value of $c$ only slides $C$ sideways along the line $y=8$, so it never changes that distance.\nStep 3: $A=\\frac{1}{2}(14)(7)=49$.\n\nCheck: with $c=0$ the vertices are $(-4,\\,1)$, $(10,\\,1)$, $(0,\\,8)$, and the same base and height give $49$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($24.5$): applied the factor $\\frac{1}{2}$ a second time, computing $\\frac{1}{4}(14)(7)$.\n* Choice C ($56$): used the $y$-coordinate $8$ as the height instead of the vertical distance $8-1=7$.\n* Choice D ($98$): multiplied base by height and skipped the factor $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Sliding a vertex parallel to the opposite side leaves the height, and therefore the area, unchanged. A free parameter along that direction is a signal that the answer does not depend on it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "triangle-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- trig-ratio-from-perimeter (4 → 10) ---
  {
    id: "bank-geo-329",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A right triangle has a perimeter of $56$ and a hypotenuse of length $25$. If $\\theta$ is the acute angle opposite the shorter leg, what is the value of $\\sin\\theta$?",
    diagram: { type: "rightTriangle", params: { labels: ["θ", "", ""], sideLabels: ["", "", "25"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\frac{7}{25}$" },
      // distractor: uses the other leg as the denominator
      { id: "B", text: "$\\frac{7}{24}$" },
      // distractor: uses the longer leg as the opposite side
      { id: "C", text: "$\\frac{24}{25}$" },
      // distractor: inverts the ratio
      { id: "D", text: "$\\frac{25}{7}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Trig Ratio from Perimeter**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The legs sum to $56-25=31$ and satisfy $a^2+b^2=625$, which is the $7$, $24$, $25$ triple. The shorter leg is $7$, so $\\sin\\theta=\\frac{7}{25}$.\n\n**The Full Solution:**\nStep 1: Subtract the hypotenuse from the perimeter: the two legs together measure $56-25=31$.\nStep 2: The legs also satisfy $a^2+b^2=25^2=625$. The pair summing to $31$ with squares summing to $625$ is $7$ and $24$, since $7+24=31$ and $49+576=625$.\nStep 3: $\\theta$ faces the shorter leg, $7$, and the hypotenuse is $25$, so $\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}=\\frac{7}{25}$.\n\nCheck: $7+24+25=56$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{7}{24}$): divided by the other leg instead of the hypotenuse, which gives $\\tan\\theta$.\n* Choice C ($\\frac{24}{25}$): used the longer leg as the opposite side, which is the sine of the other acute angle.\n* Choice D ($\\frac{25}{7}$): inverted the ratio, putting the hypotenuse on top.\n\n**Test Day Takeaway:** Perimeter minus hypotenuse gives the sum of the legs. Pair that sum with $a^2+b^2=c^2$ and the familiar triples fall out without algebra.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "trig-ratio-from-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-330",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In triangle $ABC$, the angle at $C$ measures $90^\\circ$, the perimeter of the triangle is $30$, and $AB=13$. Given that $BC<AC$, what is the value of $\\tan A$?",
    diagram: { type: "rightTriangle", params: { labels: ["A", "C", "B"], sideLabels: ["", "", "13"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: uses the hypotenuse in the denominator
      { id: "A", text: "$\\frac{5}{13}$" },
      { id: "B", text: "$\\frac{5}{12}$" },
      // distractor: gives cosine instead of tangent
      { id: "C", text: "$\\frac{12}{13}$" },
      // distractor: swaps opposite and adjacent
      { id: "D", text: "$\\frac{12}{5}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Trig Ratio from Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The legs sum to $30-13=17$ with squares summing to $169$, so they are $5$ and $12$. With $BC<AC$, $BC=5$ and $AC=12$, giving $\\tan A=\\frac{5}{12}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $C$, so $\\overline{AB}=13$ is the hypotenuse and $\\overline{BC}$ and $\\overline{AC}$ are the legs.\nStep 2: The legs sum to $30-13=17$ and satisfy $BC^2+AC^2=169$. The pair is $5$ and $12$, since $5+12=17$ and $25+144=169$. The condition $BC<AC$ makes $BC=5$ and $AC=12$.\nStep 3: For angle $A$, the opposite leg is $\\overline{BC}=5$ and the adjacent leg is $\\overline{AC}=12$, so $\\tan A=\\frac{5}{12}$.\n\nCheck: $5+12+13=30$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{13}$): divided by the hypotenuse, which produces $\\sin A$, not $\\tan A$.\n* Choice C ($\\frac{12}{13}$): used adjacent over hypotenuse, which is $\\cos A$.\n* Choice D ($\\frac{12}{5}$): swapped opposite and adjacent, giving the tangent of the other acute angle.\n\n**Test Day Takeaway:** Tangent uses only the two legs. Once the legs are known, the inequality in the problem tells you which leg faces the named angle.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "trig-ratio-from-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-331",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The perimeter of a right triangle is $40$ units and its hypotenuse measures $17$ units. Angle $\\theta$ lies opposite the longer leg. What is the value of $\\sin\\theta$?",
    diagram: { type: "rightTriangle", params: { labels: ["", "", "θ"], sideLabels: ["", "", "17"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: uses the shorter leg as the opposite side
      { id: "A", text: "$\\frac{8}{17}$" },
      // distractor: divides by the other leg
      { id: "B", text: "$\\frac{8}{15}$" },
      { id: "C", text: "$\\frac{15}{17}$" },
      // distractor: gives tangent instead of sine
      { id: "D", text: "$\\frac{15}{8}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Trig Ratio from Perimeter**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The legs sum to $40-17=23$ with squares summing to $289$, so they are $8$ and $15$. The longer leg is $15$, so $\\sin\\theta=\\frac{15}{17}$.\n\n**The Full Solution:**\nStep 1: The legs together measure $40-17=23$ units.\nStep 2: They also satisfy $a^2+b^2=17^2=289$. The pair summing to $23$ with squares summing to $289$ is $8$ and $15$, since $64+225=289$.\nStep 3: $\\theta$ faces the longer leg, $15$, so $\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}=\\frac{15}{17}$.\n\nCheck: $8+15+17=40$ units. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{17}$): used the shorter leg as the side opposite $\\theta$, which is the sine of the other acute angle.\n* Choice B ($\\frac{8}{15}$): divided one leg by the other, giving a tangent rather than a sine.\n* Choice D ($\\frac{15}{8}$): used opposite over adjacent, which is $\\tan\\theta$.\n\n**Test Day Takeaway:** A sine is never greater than $1$, because the opposite leg is always shorter than the hypotenuse. Any choice above $1$ can be eliminated on sight.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "trig-ratio-from-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-332",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The perimeter of a right triangle is $72$ and the hypotenuse measures $30$. If $\\theta$ is the acute angle whose opposite leg is the shorter of the two legs, what is $\\cos\\theta$?",
    diagram: { type: "rightTriangle", params: { labels: ["θ", "", ""], sideLabels: ["", "", "30"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: gives sine instead of cosine
      { id: "A", text: "$\\frac{3}{5}$" },
      // distractor: divides one leg by the other
      { id: "B", text: "$\\frac{3}{4}$" },
      { id: "C", text: "$\\frac{4}{5}$" },
      // distractor: inverts the ratio
      { id: "D", text: "$\\frac{5}{4}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Trig Ratio from Perimeter**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The legs sum to $72-30=42$ with squares summing to $900$, so they are $18$ and $24$. The side adjacent to $\\theta$ is the longer leg $24$, giving $\\cos\\theta=\\frac{24}{30}=\\frac{4}{5}$.\n\n**The Full Solution:**\nStep 1: Subtracting the hypotenuse from the perimeter gives $a+b=72-30=42$, and the Pythagorean theorem gives $a^2+b^2=30^2=900$.\nStep 2: The pair is $18$ and $24$, since $18+24=42$ and $324+576=900$. This is the $3$, $4$, $5$ triple scaled by $6$.\nStep 3: $\\theta$ faces the shorter leg $18$, so the leg adjacent to $\\theta$ is $24$ and $\\cos\\theta=\\frac{24}{30}=\\frac{4}{5}$.\n\nCheck: $18^2+24^2=900=30^2$, and $18+24+30=72$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{5}$): used the opposite leg, $\\frac{18}{30}$, which is $\\sin\\theta$.\n* Choice B ($\\frac{3}{4}$): divided one leg by the other, $\\frac{18}{24}$, which is $\\tan\\theta$.\n* Choice D ($\\frac{5}{4}$): inverted the correct ratio, putting the hypotenuse on top.\n\n**Test Day Takeaway:** Label opposite, adjacent, and hypotenuse relative to the named angle before writing any ratio. Cosine always pairs the adjacent leg with the hypotenuse.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "trig-ratio-from-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-333",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In triangle $XYZ$, the angle at $Y$ measures $90^\\circ$, the perimeter of the triangle is $90$, and $XZ=41$. Given that $XY<YZ$, what is the value of $\\sin Z$?",
    diagram: { type: "rightTriangle", params: { labels: ["Z", "Y", "X"], sideLabels: ["", "", "41"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\frac{9}{41}$" },
      // distractor: divides by the other leg
      { id: "B", text: "$\\frac{9}{40}$" },
      // distractor: gives cosine instead of sine
      { id: "C", text: "$\\frac{40}{41}$" },
      // distractor: inverts the ratio
      { id: "D", text: "$\\frac{41}{9}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Trig Ratio from Perimeter**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The legs sum to $90-41=49$ with squares summing to $1{,}681$, so they are $9$ and $40$. Angle $Z$ faces $\\overline{XY}=9$, so $\\sin Z=\\frac{9}{41}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $Y$, so $\\overline{XZ}=41$ is the hypotenuse and $\\overline{XY}$ and $\\overline{YZ}$ are the legs.\nStep 2: The legs sum to $90-41=49$ and satisfy $XY^2+YZ^2=1{,}681$. The pair is $9$ and $40$, since $9+40=49$ and $81+1{,}600=1{,}681$. Because $XY<YZ$, $XY=9$ and $YZ=40$.\nStep 3: The side opposite angle $Z$ is $\\overline{XY}=9$, so $\\sin Z=\\frac{9}{41}$.\n\nCheck: $9+40+41=90$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{9}{40}$): divided by the other leg instead of the hypotenuse, giving $\\tan Z$.\n* Choice C ($\\frac{40}{41}$): used $\\overline{YZ}$ as the opposite side; that leg is adjacent to $Z$, so this ratio is $\\cos Z$.\n* Choice D ($\\frac{41}{9}$): inverted the correct ratio.\n\n**Test Day Takeaway:** The side opposite an angle is the one that does not touch it. Trace the two sides that meet at the vertex and take the third.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "trig-ratio-from-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-334",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The three side lengths of a right triangle add to $132$, and the hypotenuse has length $61$. If $\\theta$ is the acute angle opposite the shorter leg, what is the value of $\\tan\\theta$?",
    diagram: { type: "rightTriangle", params: { labels: ["θ", "", ""], sideLabels: ["", "", "61"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: gives sine instead of tangent
      { id: "A", text: "$\\frac{11}{61}$" },
      { id: "B", text: "$\\frac{11}{60}$" },
      // distractor: gives cosine instead of tangent
      { id: "C", text: "$\\frac{60}{61}$" },
      // distractor: swaps opposite and adjacent
      { id: "D", text: "$\\frac{60}{11}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Trig Ratio from Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** The legs sum to $132-61=71$ with squares summing to $3{,}721$, so they are $11$ and $60$. Then $\\tan\\theta=\\frac{11}{60}$.\n\n**The Full Solution:**\nStep 1: The two legs together measure $132-61=71$.\nStep 2: They also satisfy $a^2+b^2=61^2=3{,}721$. The pair summing to $71$ with squares summing to $3{,}721$ is $11$ and $60$, since $121+3{,}600=3{,}721$.\nStep 3: $\\theta$ faces the shorter leg $11$, and the leg adjacent to $\\theta$ is $60$, so $\\tan\\theta=\\frac{11}{60}$.\n\nCheck: $11+60+61=132$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{11}{61}$): divided by the hypotenuse, which gives $\\sin\\theta$.\n* Choice C ($\\frac{60}{61}$): used adjacent over hypotenuse, which is $\\cos\\theta$.\n* Choice D ($\\frac{60}{11}$): swapped opposite and adjacent, giving the tangent of the other acute angle.\n\n**Test Day Takeaway:** Recover the legs from the perimeter first, then read the ratio. Tangent never involves the hypotenuse, so any choice with $61$ in it can be ruled out.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "trig-ratio-from-perimeter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- trig-ratio-with-known-triple (4 → 10) ---
  {
    id: "bank-geo-335",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In a right triangle, the side lengths are $20$, $21$, and $29$. If $\\theta$ is the acute angle opposite the side of length $20$, what is the value of $\\sin\\theta$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [21, 0], [21, 20]], labels: ["θ", "", ""], sideLabels: ["21", "20", "29"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\frac{20}{29}$" },
      // distractor: uses the other leg as the opposite side
      { id: "B", text: "$\\frac{21}{29}$" },
      // distractor: divides by the other leg
      { id: "C", text: "$\\frac{20}{21}$" },
      // distractor: inverts the ratio
      { id: "D", text: "$\\frac{29}{20}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The hypotenuse is the longest side, $29$, and the side opposite $\\theta$ is $20$, so $\\sin\\theta=\\frac{20}{29}$.\n\n**The Full Solution:**\nStep 1: In a right triangle the hypotenuse is the longest side, so here it is $29$ and the legs are $20$ and $21$.\nStep 2: Sine is opposite over hypotenuse. The side opposite $\\theta$ is given as $20$.\nStep 3: $\\sin\\theta=\\frac{20}{29}$.\n\nCheck: $20^2+21^2=400+441=841=29^2$, confirming the triangle. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{21}{29}$): used the other leg as the opposite side, which is the sine of the other acute angle.\n* Choice C ($\\frac{20}{21}$): divided by the other leg instead of the hypotenuse, giving $\\tan\\theta$.\n* Choice D ($\\frac{29}{20}$): inverted the ratio; a sine can never exceed $1$.\n\n**Test Day Takeaway:** Identify the hypotenuse as the longest side before writing any ratio. Sine and cosine both put the hypotenuse in the denominator.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "trig-ratio-with-known-triple",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-336",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A right triangle has side lengths $12$, $35$, and $37$. Angle $\\theta$ is opposite the side of length $12$. What is the value of $\\cos\\theta$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [35, 0], [35, 12]], labels: ["θ", "", ""], sideLabels: ["35", "12", "37"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: gives sine instead of cosine
      { id: "A", text: "$\\frac{12}{37}$" },
      // distractor: gives tangent instead of cosine
      { id: "B", text: "$\\frac{12}{35}$" },
      { id: "C", text: "$\\frac{35}{37}$" },
      // distractor: inverts the ratio
      { id: "D", text: "$\\frac{37}{35}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The hypotenuse is $37$. Since $12$ is opposite $\\theta$, the adjacent leg is $35$, so $\\cos\\theta=\\frac{35}{37}$.\n\n**The Full Solution:**\nStep 1: The longest side, $37$, is the hypotenuse, so $12$ and $35$ are the legs.\nStep 2: The leg opposite $\\theta$ is $12$, so the leg adjacent to $\\theta$ must be the other one, $35$.\nStep 3: Cosine is adjacent over hypotenuse: $\\cos\\theta=\\frac{35}{37}$.\n\nCheck: $12^2+35^2=144+1{,}225=1{,}369=37^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{12}{37}$): used the opposite leg over the hypotenuse, which is $\\sin\\theta$.\n* Choice B ($\\frac{12}{35}$): used opposite over adjacent, which is $\\tan\\theta$.\n* Choice D ($\\frac{37}{35}$): inverted the correct ratio, putting the hypotenuse on top.\n\n**Test Day Takeaway:** In a right triangle the two legs are opposite and adjacent to each other's angles. Once one leg is named as opposite, the other is automatically the adjacent one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "trig-ratio-with-known-triple",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-337",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Triangle $RST$ has a right angle at $T$, with $RT=4$ and $ST=3$. What is the value of $\\tan R$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [4, 0], [4, 3]], labels: ["R", "T", "S"], sideLabels: ["4", "3", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: gives sine instead of tangent
      { id: "A", text: "$\\frac{3}{5}$" },
      { id: "B", text: "$\\frac{3}{4}$" },
      // distractor: gives cosine instead of tangent
      { id: "C", text: "$\\frac{4}{5}$" },
      // distractor: swaps opposite and adjacent
      { id: "D", text: "$\\frac{4}{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** For angle $R$, the opposite leg is $\\overline{ST}=3$ and the adjacent leg is $\\overline{RT}=4$, so $\\tan R=\\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: The right angle sits at $T$, so $\\overline{RT}$ and $\\overline{ST}$ are the legs and $\\overline{RS}$ is the hypotenuse.\nStep 2: Angle $R$ touches $\\overline{RT}$ and $\\overline{RS}$, so the leg opposite it is $\\overline{ST}=3$ and the leg adjacent to it is $\\overline{RT}=4$.\nStep 3: Tangent is opposite over adjacent: $\\tan R=\\frac{3}{4}$.\n\nCheck: the hypotenuse is $\\sqrt{3^2+4^2}=5$, the familiar $3$, $4$, $5$ triple. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{5}$): divided the opposite leg by the hypotenuse, which is $\\sin R$.\n* Choice C ($\\frac{4}{5}$): divided the adjacent leg by the hypotenuse, which is $\\cos R$.\n* Choice D ($\\frac{4}{3}$): swapped opposite and adjacent, giving $\\tan S$ instead.\n\n**Test Day Takeaway:** Tangent needs no hypotenuse. When both legs are given and a tangent is asked for, there is nothing left to compute.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "trig-ratio-with-known-triple",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-338",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The side lengths of a right triangle are $28$, $45$, and $53$. If $\\theta$ is the acute angle opposite the side that measures $45$, what is the value of $\\sin\\theta$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [28, 0], [28, 45]], labels: ["θ", "", ""], sideLabels: ["28", "45", "53"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: uses the other leg as the opposite side
      { id: "A", text: "$\\frac{28}{53}$" },
      // distractor: divides one leg by the other
      { id: "B", text: "$\\frac{28}{45}$" },
      { id: "C", text: "$\\frac{45}{53}$" },
      // distractor: inverts the ratio
      { id: "D", text: "$\\frac{53}{45}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The hypotenuse is the largest side, $53$, and the side opposite $\\theta$ is $45$, so $\\sin\\theta=\\frac{45}{53}$.\n\n**The Full Solution:**\nStep 1: The hypotenuse is the longest of the three sides, so it is $53$ and the legs are $28$ and $45$.\nStep 2: Sine is opposite over hypotenuse, and the side opposite $\\theta$ is $45$.\nStep 3: $\\sin\\theta=\\frac{45}{53}$.\n\nCheck: $28^2+45^2=784+2{,}025=2{,}809=53^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{28}{53}$): used the wrong leg as the opposite side; that ratio is the sine of the other acute angle.\n* Choice B ($\\frac{28}{45}$): divided one leg by the other, which is a tangent, not a sine.\n* Choice D ($\\frac{53}{45}$): inverted the correct ratio, producing a value greater than $1$, which no sine can equal.\n\n**Test Day Takeaway:** Unfamiliar triples such as $28$, $45$, $53$ behave exactly like the memorized ones. Sort the sides by size to find the hypotenuse and the ratio follows.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "trig-ratio-with-known-triple",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-339",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In a right triangle, the legs measure $33$ and $56$ and the hypotenuse measures $65$. Angle $\\theta$ is opposite the leg of length $56$. What is the value of $\\tan\\theta$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [33, 0], [33, 56]], labels: ["θ", "", ""], sideLabels: ["33", "56", "65"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: gives cosine instead of tangent
      { id: "A", text: "$\\frac{33}{65}$" },
      // distractor: swaps opposite and adjacent
      { id: "B", text: "$\\frac{33}{56}$" },
      // distractor: gives sine instead of tangent
      { id: "C", text: "$\\frac{56}{65}$" },
      { id: "D", text: "$\\frac{56}{33}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Tangent uses only the legs: opposite $56$ over adjacent $33$, so $\\tan\\theta=\\frac{56}{33}$.\n\n**The Full Solution:**\nStep 1: The legs are $33$ and $56$; the hypotenuse $65$ plays no role in a tangent.\nStep 2: The leg opposite $\\theta$ is $56$, so the leg adjacent to $\\theta$ is $33$.\nStep 3: $\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}=\\frac{56}{33}$.\n\nCheck: $33^2+56^2=1{,}089+3{,}136=4{,}225=65^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{33}{65}$): used adjacent over hypotenuse, which is $\\cos\\theta$.\n* Choice B ($\\frac{33}{56}$): swapped opposite and adjacent, giving the tangent of the other acute angle.\n* Choice C ($\\frac{56}{65}$): used opposite over hypotenuse, which is $\\sin\\theta$.\n\n**Test Day Takeaway:** A supplied hypotenuse is often a distractor. If the question asks for a tangent, cover the hypotenuse and work with the two legs only.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "trig-ratio-with-known-triple",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-340",
    domain: "geometry",
    skills: ["soh-cah-toa"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Triangle $ABC$ has a right angle at $B$, with $AB=45$ and $BC=24$. What is the value of $\\cos C$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [45, 0], [45, 24]], labels: ["A", "B", "C"], sideLabels: ["45", "24", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\frac{8}{17}$" },
      // distractor: divides one leg by the other
      { id: "B", text: "$\\frac{8}{15}$" },
      // distractor: gives sine instead of cosine
      { id: "C", text: "$\\frac{15}{17}$" },
      // distractor: gives tangent instead of cosine
      { id: "D", text: "$\\frac{15}{8}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Dividing the legs by $3$ gives $15$ and $8$, so the hypotenuse is $3(17)=51$. For angle $C$ the adjacent leg is $24$, so $\\cos C=\\frac{24}{51}=\\frac{8}{17}$.\n\n**The Full Solution:**\nStep 1: The hypotenuse is not given, so find it: $AC=\\sqrt{45^2+24^2}=\\sqrt{2{,}025+576}=\\sqrt{2{,}601}=51$.\nStep 2: Angle $C$ touches $\\overline{BC}$ and $\\overline{AC}$, so the leg adjacent to $C$ is $\\overline{BC}=24$ and the hypotenuse is $\\overline{AC}=51$.\nStep 3: $\\cos C=\\frac{24}{51}$. Dividing numerator and denominator by $3$ gives $\\frac{8}{17}$.\n\nCheck: $24$, $45$, $51$ is the $8$, $15$, $17$ triple scaled by $3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{8}{15}$): divided the adjacent leg by the opposite leg, $\\frac{24}{45}$, instead of by the hypotenuse.\n* Choice C ($\\frac{15}{17}$): used $\\frac{45}{51}$, the opposite leg over the hypotenuse, which is $\\sin C$.\n* Choice D ($\\frac{15}{8}$): used $\\frac{45}{24}$, opposite over adjacent, which is $\\tan C$.\n\n**Test Day Takeaway:** When a cosine is asked for and the hypotenuse is missing, compute it first. Factoring out a common divisor from the legs turns the Pythagorean step into recall.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "trig-ratio-with-known-triple",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // === DIFFICULT-QUESTIONS PDF BATCH (2026-05-22) — 14 geometry items reskinned ===

  {
    id: "bank-geo-341",
    domain: "geometry",
    skills: ["circle-area", "volume-scaling"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Circle $J$ has a radius of $5p$ and circle $K$ has a radius of $65p$, where $p$ is a positive constant. The area of circle $K$ is how many times the area of circle $J$?",
    choices: [
      // distractor: gives the ratio of the radii
      { id: "A", text: "$13$" },
      // distractor: doubles the radius ratio
      { id: "B", text: "$26$" },
      { id: "C", text: "$169$" },
      // distractor: cubes the ratio
      { id: "D", text: "$2{,}197$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar-Figures Area Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The radii are in the ratio $\\frac{65p}{5p}=13$, and areas scale by the square of a length ratio, so the factor is $13^2=169$.\n\n**The Full Solution:**\nStep 1: The area of a circle is $\\pi r^2$, so circle $J$ has area $\\pi(5p)^2=25\\pi p^2$ and circle $K$ has area $\\pi(65p)^2=4{,}225\\pi p^2$.\nStep 2: Divide: $\\frac{4{,}225\\pi p^2}{25\\pi p^2}=169$. The constant $p$ cancels, so the answer does not depend on it.\nStep 3: The area of circle $K$ is $169$ times the area of circle $J$.\n\nCheck: $\\left(\\frac{65}{5}\\right)^2=13^2=169$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): gave the ratio of the radii, which is how lengths scale, not areas.\n* Choice B ($26$): doubled the radius ratio instead of squaring it, confusing $2r$ with $r^2$.\n* Choice D ($2{,}197$): cubed the ratio, $13^3$, which is the rule for volumes of similar solids.\n\n**Test Day Takeaway:** For similar figures, lengths scale by $k$, areas by $k^2$, and volumes by $k^3$. Find $k$ from a pair of matching lengths and apply the right power.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-figures-area-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-342",
    domain: "geometry",
    skills: ["radians-to-degrees", "radian-measure-understanding"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The measure of angle $R$ is $\\dfrac{5\\pi}{6}$ radians. The measure of angle $S$ is $\\dfrac{4\\pi}{9}$ radians greater than the measure of angle $R$. What is the measure of angle $S$, in degrees?",
    choices: [
      // distractor: adds numerators and denominators
      { id: "A", text: "$108$" },
      // distractor: rescales the denominator without the numerator
      { id: "B", text: "$130$" },
      // distractor: gives angle R instead of angle S
      { id: "C", text: "$150$" },
      { id: "D", text: "$230$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Radian Sum to Degrees**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Convert first: $\\frac{5\\pi}{6}=150^\\circ$ and $\\frac{4\\pi}{9}=80^\\circ$, so angle $S$ measures $150+80=230$ degrees.\n\n**The Full Solution:**\nStep 1: Multiply each radian measure by $\\frac{180^\\circ}{\\pi}$. For angle $R$: $\\frac{5\\pi}{6}\\cdot\\frac{180}{\\pi}=5\\cdot 30=150^\\circ$.\nStep 2: For the increase: $\\frac{4\\pi}{9}\\cdot\\frac{180}{\\pi}=4\\cdot 20=80^\\circ$.\nStep 3: Angle $S$ is $80^\\circ$ greater than angle $R$, so its measure is $150+80=230$ degrees.\n\nCheck: in radians, $\\frac{5\\pi}{6}+\\frac{4\\pi}{9}=\\frac{15\\pi}{18}+\\frac{8\\pi}{18}=\\frac{23\\pi}{18}$, and $\\frac{23}{18}\\cdot 180=230$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($108$): added the fractions by adding numerators and denominators, getting $\\frac{9\\pi}{15}=\\frac{3\\pi}{5}$, which converts to $108^\\circ$.\n* Choice B ($130$): rewrote $\\frac{5\\pi}{6}$ as $\\frac{5\\pi}{18}$ when finding a common denominator, scaling the denominator but not the numerator; $\\frac{5\\pi}{18}+\\frac{8\\pi}{18}=\\frac{13\\pi}{18}$ converts to $130^\\circ$.\n* Choice C ($150$): converted angle $R$ correctly and stopped, never adding the increase.\n\n**Test Day Takeaway:** Converting each radian measure to degrees before adding avoids the common-denominator step entirely, and $\\pi$ radians is always $180^\\circ$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "radians-degrees-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-343",
    domain: "geometry",
    skills: ["volume-sphere", "volume-prism"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A cube has an edge length of $30$ centimeters. A solid sphere with a radius of $15$ centimeters sits inside the cube, touching the center of each face. To the nearest cubic centimeter, what is the volume of the space inside the cube but outside the sphere?",
    choices: [
      { id: "A", text: "$12{,}863$" },
      // distractor: gives the sphere volume
      { id: "B", text: "$14{,}137$" },
      // distractor: drops the factor four thirds
      { id: "C", text: "$16{,}397$" },
      // distractor: gives the cube volume
      { id: "D", text: "$27{,}000$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Composite Solid — Cube Minus Inscribed Sphere**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Cube minus sphere: $30^3-\\frac{4}{3}\\pi(15)^3=27{,}000-4{,}500\\pi\\approx 12{,}862.83$, which rounds to $12{,}863$.\n\n**The Full Solution:**\nStep 1: The cube's volume is $s^3=30^3=27{,}000$ cubic centimeters.\nStep 2: The sphere's volume is $\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi(15)^3=\\frac{4}{3}\\pi(3{,}375)=4{,}500\\pi\\approx 14{,}137.17$ cubic centimeters.\nStep 3: Subtract: $27{,}000-14{,}137.17=12{,}862.83$, so to the nearest cubic centimeter the space is $12{,}863$ cubic centimeters.\n\nCheck: the sphere occupies about $52\\%$ of the cube, leaving a bit under half, which matches $12{,}863$ out of $27{,}000$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($14{,}137$): reported the sphere's volume instead of the space around it.\n* Choice C ($16{,}397$): used $\\pi r^3$ for the sphere, dropping the factor $\\frac{4}{3}$; that gives $10{,}602.88$ and a difference of $16{,}397$.\n* Choice D ($27{,}000$): reported the cube's volume, forgetting to remove the sphere at all.\n\n**Test Day Takeaway:** A sphere inscribed in a cube has a diameter equal to the cube's edge, so its radius is half the edge. Subtract the inner solid last, and only after both volumes are computed.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "composite-solid",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-344",
    domain: "geometry",
    skills: ["function-transformations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A rational function $p$ is defined by $p(x)=\\dfrac{c}{x-3}$ for some constant $c$. Its graph in the $xy$-plane contains the point $(7,\\,15)$. If the graph of $y=q(x)$ is the image of the graph of $y=p(x)$ under a translation $11$ units to the left, which equation defines $q$?",
    choices: [
      // distractor: translates right instead of left
      { id: "A", text: "$q(x)=\\dfrac{60}{x-14}$" },
      { id: "B", text: "$q(x)=\\dfrac{60}{x+8}$" },
      // distractor: replaces the original constant with the shift
      { id: "C", text: "$q(x)=\\dfrac{60}{x+11}$" },
      // distractor: adds the shift to the numerator
      { id: "D", text: "$q(x)=\\dfrac{71}{x-3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Horizontal Shift of a Rational Function**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** From $\\frac{c}{7-3}=15$, $c=60$. Translating left $11$ replaces $x$ with $x+11$, so the denominator becomes $(x+11)-3=x+8$ and $q(x)=\\frac{60}{x+8}$.\n\n**The Full Solution:**\nStep 1: The point $(7,\\,15)$ is on the graph of $p$, so $p(7)=15$. Substituting gives $\\frac{c}{7-3}=15$, that is $\\frac{c}{4}=15$, so $c=60$ and $p(x)=\\frac{60}{x-3}$.\nStep 2: A translation of $11$ units to the left sends the graph of $y=p(x)$ to the graph of $y=p(x+11)$.\nStep 3: $q(x)=p(x+11)=\\frac{60}{(x+11)-3}=\\frac{60}{x+8}$.\n\nCheck: the point $(7,\\,15)$ moves to $(-4,\\,15)$, and $q(-4)=\\frac{60}{-4+8}=\\frac{60}{4}=15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($q(x)=\\frac{60}{x-14}$): replaced $x$ with $x-11$, which translates the graph $11$ units to the right instead of left.\n* Choice C ($q(x)=\\frac{60}{x+11}$): dropped the original $-3$ and used the shift alone as the constant in the denominator.\n* Choice D ($q(x)=\\frac{71}{x-3}$): added $11$ to the numerator, which stretches the graph vertically rather than sliding it sideways.\n\n**Test Day Takeaway:** A horizontal shift acts on the input, so substitute $x+11$ for every $x$ and then simplify. The constants combine; the earlier one does not disappear.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-from-shifted-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-345",
    domain: "geometry",
    skills: ["special-right-triangles", "pythagorean-theorem"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In triangle $FGH$, angle $G$ is a right angle and $FG=GH$. The perimeter of the triangle is $56+28\\sqrt{2}$ centimeters. What is the length, in centimeters, of $\\overline{FG}$?",
    choices: [
      // distractor: halves the leg length again
      { id: "A", text: "$14$" },
      { id: "B", text: "$28$" },
      // distractor: gives the hypotenuse
      { id: "C", text: "$28\\sqrt{2}$" },
      // distractor: reads the constant term as the leg
      { id: "D", text: "$56$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 45-45-90 Triangle — Perimeter to Leg**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** With leg $\\ell$, the perimeter is $\\ell(2+\\sqrt{2})$. Factor the given perimeter: $56+28\\sqrt{2}=28(2+\\sqrt{2})$, so $\\ell=28$ centimeters.\n\n**The Full Solution:**\nStep 1: The right angle is at $G$ and the two legs are equal, so this is a $45$-$45$-$90$ triangle and the hypotenuse is $\\ell\\sqrt{2}$ when each leg is $\\ell$.\nStep 2: The perimeter is $\\ell+\\ell+\\ell\\sqrt{2}=\\ell(2+\\sqrt{2})$, so $\\ell(2+\\sqrt{2})=56+28\\sqrt{2}$.\nStep 3: Factor $28$ from the right side: $56+28\\sqrt{2}=28(2+\\sqrt{2})$. Dividing both sides by $2+\\sqrt{2}$ gives $\\ell=28$ centimeters.\n\nCheck: legs $28$ and $28$ with hypotenuse $28\\sqrt{2}$ add to $56+28\\sqrt{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): treated $28$ as the combined length of the two legs and halved it.\n* Choice C ($28\\sqrt{2}$): reported the hypotenuse rather than a leg.\n* Choice D ($56$): read the constant term of the perimeter as the leg length, ignoring that the constant covers both legs.\n\n**Test Day Takeaway:** Write the perimeter of a $45$-$45$-$90$ triangle as $\\ell(2+\\sqrt{2})$, then factor the given expression into the same shape. The matching factor is the leg.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "45-45-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-346",
    domain: "geometry",
    skills: ["volume-prism"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Two identical rectangular prisms each have a height of $60$ inches and a square base, and the surface area of each prism is $S$ square inches. The two prisms are glued together along a square base to form a single rectangular prism whose surface area is $\\dfrac{17}{9}S$ square inches. What is the side length, in inches, of each square base?",
    choices: [
      // distractor: reads the denominator of the ratio as a length
      { id: "A", text: "$9$" },
      { id: "B", text: "$15$" },
      // distractor: reads the numerator of the ratio as a length
      { id: "C", text: "$17$" },
      // distractor: reports the height instead of the base side
      { id: "D", text: "$60$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Surface Area of Glued Prisms**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** Gluing hides two square faces, so the new surface area is $2S-2s^2$. Setting $2S-2s^2=\\frac{17}{9}S$ gives $s^2=\\frac{S}{18}$, and with $S=2s^2+240s$ this reduces to $s=15$ inches.\n\n**The Full Solution:**\nStep 1: Let $s$ be the side of the square base. Each prism has two square faces of area $s^2$ and four rectangular faces of area $60s$, so $S=2s^2+240s$.\nStep 2: Joining the prisms along a square base removes one square face from each, so the combined surface area is $2S-2s^2$. Set this equal to the given value: $2S-2s^2=\\frac{17}{9}S$, so $2s^2=2S-\\frac{17}{9}S=\\frac{1}{9}S$ and $S=18s^2$.\nStep 3: Substitute $S=2s^2+240s$: $18s^2=2s^2+240s$, so $16s^2=240s$ and $s=\\frac{240}{16}=15$ inches.\n\nCheck: with $s=15$, $S=2(225)+240(15)=4{,}050$, and the glued prism has surface area $2(225)+4(120)(15)=7{,}650=\\frac{17}{9}(4{,}050)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): lifted the denominator of $\\frac{17}{9}$ straight out of the ratio and reported it as a length.\n* Choice C ($17$): lifted the numerator of $\\frac{17}{9}$ and reported it as a length.\n* Choice D ($60$): reported the height of the prism instead of the side of the square base.\n\n**Test Day Takeaway:** Gluing two solids removes the two faces that meet, not one. Write the new surface area as twice the old minus twice the hidden face, then let the algebra find the dimension.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "composite-solid",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-347",
    domain: "geometry",
    skills: ["radian-measure-understanding", "soh-cah-toa"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Angle $\\theta$ has a measure of $\\dfrac{119\\pi}{6}$ radians. What is the value of $\\tan\\theta$?",
    choices: [
      // distractor: uses pi/3 as the reference angle
      { id: "A", text: "$-\\sqrt{3}$" },
      { id: "B", text: "$-\\dfrac{\\sqrt{3}}{3}$" },
      // distractor: drops the negative sign
      { id: "C", text: "$\\dfrac{\\sqrt{3}}{3}$" },
      // distractor: wrong reference angle and wrong sign
      { id: "D", text: "$\\sqrt{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Coterminal-Angle Reduction for Tangent**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Subtract full turns: $\\frac{119\\pi}{6}-18\\pi=\\frac{11\\pi}{6}$. That angle is $\\frac{\\pi}{6}$ short of a full turn, so $\\tan\\theta=-\\tan\\frac{\\pi}{6}=-\\frac{\\sqrt{3}}{3}$.\n\n**The Full Solution:**\nStep 1: Adding or subtracting $2\\pi$ does not change an angle's terminal ray. Write $\\frac{119\\pi}{6}$ as a multiple of $2\\pi$ plus a remainder: $119=6(18)+11$, so $\\frac{119\\pi}{6}=\\frac{108\\pi}{6}+\\frac{11\\pi}{6}=18\\pi+\\frac{11\\pi}{6}$, and $18\\pi$ is $9$ full turns.\nStep 2: So $\\tan\\theta=\\tan\\frac{11\\pi}{6}$. The angle $\\frac{11\\pi}{6}$ lies in the fourth quadrant, $\\frac{\\pi}{6}$ below the positive $x$-axis, so its reference angle is $\\frac{\\pi}{6}$ and tangent is negative there.\nStep 3: $\\tan\\frac{\\pi}{6}=\\frac{1}{\\sqrt{3}}=\\frac{\\sqrt{3}}{3}$, so $\\tan\\theta=-\\frac{\\sqrt{3}}{3}$.\n\nCheck: $\\frac{11\\pi}{6}$ corresponds to $330^\\circ$, and $\\tan 330^\\circ=-\\tan 30^\\circ$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\sqrt{3}$): used $\\frac{\\pi}{3}$ as the reference angle instead of $\\frac{\\pi}{6}$, swapping the two special-angle tangents.\n* Choice C ($\\frac{\\sqrt{3}}{3}$): reduced the angle correctly but kept the value positive; tangent is negative in the fourth quadrant.\n* Choice D ($\\sqrt{3}$): made both slips at once, using the wrong reference angle and the wrong sign.\n\n**Test Day Takeaway:** Reduce a large radian measure by subtracting whole multiples of $2\\pi$ first, then read the quadrant to fix the sign before evaluating the reference angle.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "radians-degrees-conversion",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-348",
    domain: "geometry",
    skills: ["soh-cah-toa", "triangle-types"],
    difficulty: "hard",
    type: "fill-in",
    question: "In right triangle $LMN$, the right angle is at $N$, $LM=40$, and $MN=24$. What is the value of $\\tan L$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [32, 0], [32, 24]], labels: ["L", "N", "M"], sideLabels: ["", "24", "40"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "3/4",
    explanation: "**SAT Pattern: Direct Trig Ratio**\n\n**The correct answer is $\\frac{3}{4}$.**\n\n**The Fast Way (~30s):** $\\overline{LM}=40$ is the hypotenuse, so $LN=\\sqrt{40^2-24^2}=32$. For angle $L$, opposite is $24$ and adjacent is $32$, giving $\\tan L=\\frac{24}{32}=\\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $N$, so $\\overline{LM}$ is the hypotenuse and $\\overline{MN}$ and $\\overline{LN}$ are the legs.\nStep 2: Tangent needs both legs, and only one is given, so find the other: $LN^2=40^2-24^2=1{,}600-576=1{,}024$, so $LN=32$.\nStep 3: Angle $L$ touches $\\overline{LN}$ and $\\overline{LM}$, so the leg opposite $L$ is $\\overline{MN}=24$ and the leg adjacent to $L$ is $\\overline{LN}=32$. Then $\\tan L=\\frac{24}{32}=\\frac{3}{4}$.\n\nCheck: $24$, $32$, $40$ is the $3$, $4$, $5$ triple scaled by $8$. $\\checkmark$\n\n**Common Mistakes:** Reporting $\\frac{3}{5}$ by dividing the opposite leg by the hypotenuse, $\\frac{24}{40}$, which is $\\sin L$ rather than $\\tan L$; reporting $\\frac{4}{3}$ by inverting the ratio, $\\frac{32}{24}$, which is the tangent of angle $M$; reporting $\\frac{4}{5}$ by using $\\frac{32}{40}$, which is $\\cos L$.\n\n**Test Day Takeaway:** Tangent needs the two legs, so when a hypotenuse is given instead, spend one Pythagorean step to recover the missing leg before writing the ratio.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "direct-trig-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-349",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the circle with equation $(x+7)^2+(y-6)^2=169$ passes through the point $(m,\\,n)$. Which of the following could be the value of $m$?",
    choices: [
      // distractor: uses the diameter as the reach from the center
      { id: "A", text: "$-28$" },
      { id: "B", text: "$-15$" },
      // distractor: applies the radius to the y-coordinate
      { id: "C", text: "$12$" },
      // distractor: flips the sign of the center's x-coordinate
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in Standard Form — $x$-range**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The center is $(-7,\\,6)$ and the radius is $\\sqrt{169}=13$, so $m$ must satisfy $-20\\le m\\le 6$. Only $-15$ does.\n\n**The Full Solution:**\nStep 1: Compare with $(x-h)^2+(y-k)^2=r^2$. Since $x+7=x-(-7)$ and $y-6=y-6$, the center is $(-7,\\,6)$, and $r^2=169$ gives $r=13$.\nStep 2: Every point of the circle lies within $13$ units of the center in any direction, so its $x$-coordinates run from $-7-13=-20$ to $-7+13=6$.\nStep 3: Among the options, $-28$, $12$, and $18$ all fall outside $[-20,\\,6]$, while $-15$ falls inside. So $m$ could be $-15$.\n\nCheck: with $m=-15$, $(-15+7)^2=64$, leaving $(n-6)^2=105$, which has real solutions. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-28$): used the diameter $26$ as the reach from the center, which would widen the range to $[-33,\\,19]$.\n* Choice C ($12$): applied the radius to the center's $y$-coordinate instead of its $x$-coordinate, producing the interval $[-7,\\,19]$.\n* Choice D ($18$): read the center as $(7,\\,6)$ by ignoring the sign change inside the parentheses, which would give the range $[-6,\\,20]$.\n\n**Test Day Takeaway:** The right side of a circle's equation is $r^2$, so take its square root first. The $x$-coordinates on the circle then span exactly $h-r$ to $h+r$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-350",
    domain: "geometry",
    skills: ["function-evaluation", "roots-from-factors"],
    difficulty: "hard",
    type: "fill-in",
    question: "The function $h$ is defined by $h(x)=(x-8)(k+x)$, where $k$ is a constant. One of the zeros of $h$ is $-15$. What is the value of $h(0)$?",
    correctAnswer: "-120",
    explanation: "**SAT Pattern: Recover Parameter from Known Root, then Evaluate**\n\n**The correct answer is $-120$.**\n\n**The Fast Way (~25s):** The factor $x-8$ is not zero at $x=-15$, so $k+(-15)=0$ and $k=15$. Then $h(0)=(0-8)(15+0)=-120$.\n\n**The Full Solution:**\nStep 1: A zero of $h$ makes the product zero, so at $x=-15$ one of the two factors must vanish.\nStep 2: The first factor gives $-15-8=-23$, which is not zero, so the second factor must be: $k+(-15)=0$, hence $k=15$ and $h(x)=(x-8)(15+x)$.\nStep 3: Evaluate at $x=0$: $h(0)=(0-8)(15+0)=(-8)(15)=-120$.\n\nCheck: $h(-15)=(-23)(0)=0$, confirming $-15$ is a zero. $\\checkmark$\n\n**Common Mistakes:** Reporting $120$ by setting $k=-15$, that is, copying the zero straight into the parameter slot instead of solving $k+x=0$; reporting $-8$ by evaluating only the first factor at $x=0$ and forgetting to multiply; reporting $0$ by evaluating $h$ at the zero $-15$ instead of at $0$.\n\n**Test Day Takeaway:** A zero tells you which factor vanishes, not what the parameter equals. Set that factor to zero, solve for the constant, and only then evaluate at the requested input.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-from-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-351",
    domain: "geometry",
    skills: ["special-right-triangles", "circle-area", "rectangle-area"],
    difficulty: "hard",
    type: "fill-in",
    question: "A rectangle is inscribed in a circle so that all four of its vertices lie on the circle. The diagonal of the rectangle is twice the length of the shorter side. The circumference of the circle is $12\\pi$ centimeters, and the area of the rectangle is $w\\sqrt{3}$ square centimeters. What is the value of $w$?",
    correctAnswer: "36",
    explanation: "**SAT Pattern: 30-60-90 from Diagonal-to-Side Ratio**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~45s):** $C=12\\pi$ gives $r=6$, so the diagonal is $12$ and the shorter side is $6$. The longer side is $6\\sqrt{3}$, so the area is $36\\sqrt{3}$ and $w=36$.\n\n**The Full Solution:**\nStep 1: A rectangle inscribed in a circle has its diagonal through the center, so the diagonal is a diameter. From $C=2\\pi r=12\\pi$, $r=6$ and the diagonal is $12$ centimeters.\nStep 2: The diagonal is twice the shorter side, so the shorter side is $6$. The diagonal, the shorter side, and the longer side form a right triangle with hypotenuse twice one leg, which is the $30$-$60$-$90$ pattern: the longer side is $6\\sqrt{3}$.\nStep 3: The area is $(6)(6\\sqrt{3})=36\\sqrt{3}$ square centimeters, so $w=36$.\n\nCheck: $6^2+(6\\sqrt{3})^2=36+108=144=12^2$. $\\checkmark$\n\n**Common Mistakes:** Reporting $144$ by using the diameter $12$ as the shorter side, which makes the longer side $12\\sqrt{3}$ and the area $144\\sqrt{3}$; reporting $6$ by stopping at the radius; reporting $72$ by treating the rectangle as a square with diagonal $12$, whose area is $72$ and which does not even fit the form $w\\sqrt{3}$.\n\n**Test Day Takeaway:** In an inscribed rectangle the diagonal is the diameter. A hypotenuse exactly twice one leg always signals a $30$-$60$-$90$ triangle, so the third side is that leg times $\\sqrt{3}$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "30-60-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-352",
    domain: "geometry",
    skills: ["tangent-lines", "circle-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, a circle has center $(5,\\,-1)$, and line $t$ is tangent to the circle at $(9,\\,2)$. Which of the following points lies on line $t$?",
    choices: [
      // distractor: inverts the radius slope without negating it
      { id: "A", text: "$(12,\\,6)$" },
      // distractor: negates the radius slope without inverting it
      { id: "B", text: "$(13,\\,-1)$" },
      { id: "C", text: "$(12,\\,-2)$" },
      // distractor: uses the radius slope itself
      { id: "D", text: "$(13,\\,5)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Tangent Line to a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The radius to $(9,\\,2)$ has slope $\\frac{2-(-1)}{9-5}=\\frac{3}{4}$, so the tangent has slope $-\\frac{4}{3}$. From $(9,\\,2)$, moving $3$ right and $4$ down lands on $(12,\\,-2)$.\n\n**The Full Solution:**\nStep 1: A tangent line is perpendicular to the radius drawn to the point of tangency. The radius runs from $(5,\\,-1)$ to $(9,\\,2)$, so its slope is $\\frac{2-(-1)}{9-5}=\\frac{3}{4}$.\nStep 2: Perpendicular slopes are negative reciprocals, so line $t$ has slope $-\\frac{4}{3}$ and its equation is $y-2=-\\frac{4}{3}(x-9)$.\nStep 3: Test $(12,\\,-2)$: $-2-2=-4$ and $-\\frac{4}{3}(12-9)=-\\frac{4}{3}(3)=-4$. The point satisfies the equation.\n\nCheck: none of the other three points satisfies $y=2-\\frac{4}{3}(x-9)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(12,\\,6)$): used slope $\\frac{4}{3}$, inverting the radius slope but forgetting to negate it.\n* Choice B ($(13,\\,-1)$): used slope $-\\frac{3}{4}$, negating the radius slope without inverting it.\n* Choice D ($(13,\\,5)$): used the radius slope $\\frac{3}{4}$ itself, giving a line through the center rather than the tangent.\n\n**Test Day Takeaway:** Tangency is a perpendicularity condition. Compute the radius slope, take the negative reciprocal, and step off from the point of tangency using the run and rise of that slope.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-to-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-353",
    domain: "geometry",
    skills: ["special-right-triangles", "circle-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, circle $O$ has center $(h,\\,k)$. Points $P$ and $Q$ lie on the circle, point $P$ has coordinates $(h+3,\\,k+\\sqrt{55})$, and $\\angle POQ$ is a right angle. What is the length of $\\overline{PQ}$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 90, angleLabel: "90°", labelCenter: "O", labelPoint1: "P", labelPoint2: "Q", figureNote: true } },
    choices: [
      // distractor: gives the radius
      { id: "A", text: "$8$" },
      { id: "B", text: "$8\\sqrt{2}$" },
      // distractor: gives the diameter
      { id: "C", text: "$16$" },
      // distractor: uses the diameter in place of the radius
      { id: "D", text: "$16\\sqrt{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle at Center — Chord Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $P$ sits $3$ across and $\\sqrt{55}$ up from the center, so $r^2=9+55=64$ and $r=8$. Triangle $POQ$ is an isosceles right triangle with legs $8$, so $PQ=8\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The radius is the distance from $O$ to $P$: $r=\\sqrt{3^2+(\\sqrt{55})^2}=\\sqrt{9+55}=\\sqrt{64}=8$.\nStep 2: $\\overline{OP}$ and $\\overline{OQ}$ are both radii, so both measure $8$, and $\\angle POQ$ is the right angle between them. Triangle $POQ$ is therefore an isosceles right triangle with legs $8$ and hypotenuse $\\overline{PQ}$.\nStep 3: In a $45$-$45$-$90$ triangle the hypotenuse is $\\sqrt{2}$ times a leg, so $PQ=8\\sqrt{2}$.\n\nCheck: $8^2+8^2=128=(8\\sqrt{2})^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): reported the radius instead of the chord joining $P$ and $Q$.\n* Choice C ($16$): treated $\\overline{PQ}$ as a diameter, which would require $\\angle POQ$ to measure $180^\\circ$, not $90^\\circ$.\n* Choice D ($16\\sqrt{2}$): used the diameter $16$ in place of the radius when applying the $\\sqrt{2}$ factor.\n\n**Test Day Takeaway:** Two radii and the chord between them always form an isosceles triangle. When the central angle is $90^\\circ$, that triangle is $45$-$45$-$90$ and the chord is $r\\sqrt{2}$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "45-45-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-354",
    domain: "geometry",
    skills: ["special-right-triangles", "circle-equation"],
    difficulty: "hard",
    type: "fill-in",
    question: "The perimeter of an equilateral triangle is $306$ centimeters. All three of its vertices lie on a circle whose radius is $w\\sqrt{3}$ centimeters. What is the value of $w$?",
    correctAnswer: "34",
    explanation: "**SAT Pattern: Equilateral Triangle — Circumradius**\n\n**The correct answer is $34$.**\n\n**The Fast Way (~40s):** Each side is $\\frac{306}{3}=102$. For an equilateral triangle the circumradius is $\\frac{s}{\\sqrt{3}}$, so $R=\\frac{102}{\\sqrt{3}}=34\\sqrt{3}$ and $w=34$.\n\n**The Full Solution:**\nStep 1: All three sides are equal, so each measures $\\frac{306}{3}=102$ centimeters.\nStep 2: Draw radii from the center to two vertices and drop the perpendicular from the center to the side between them. That perpendicular bisects the side, creating a $30$-$60$-$90$ triangle whose hypotenuse is the circumradius $R$ and whose side opposite the $60^\\circ$ angle is half a side, $51$. In such a triangle the side opposite $60^\\circ$ equals the hypotenuse times $\\frac{\\sqrt{3}}{2}$, so $R\\cdot\\frac{\\sqrt{3}}{2}=51$.\nStep 3: $R=\\frac{102}{\\sqrt{3}}=\\frac{102\\sqrt{3}}{3}=34\\sqrt{3}$ centimeters, so $w=34$.\n\nCheck: $34\\sqrt{3}\\approx 58.9$, and $58.9\\cdot\\frac{\\sqrt{3}}{2}\\approx 51$, half of a side. $\\checkmark$\n\n**Common Mistakes:** Reporting $17$ by using the inradius $\\frac{s}{2\\sqrt{3}}=17\\sqrt{3}$, the distance to a side rather than to a vertex; reporting $102$ by treating a side length as the radius and forgetting to divide by $\\sqrt{3}$; reporting $51$ by stopping at half a side.\n\n**Test Day Takeaway:** In an equilateral triangle the center sits twice as far from each vertex as from each side, so the circumradius is $\\frac{s}{\\sqrt{3}}$ and the inradius is half of that.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "30-60-90-triangle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-geo-355",
    domain: "geometry",
    skills: ["similar-triangles"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Triangle $DEF$ is similar to triangle $GHJ$, where $D$ corresponds to $G$, $E$ corresponds to $H$, and $F$ corresponds to $J$. The area of triangle $DEF$ is $18$ and the area of triangle $GHJ$ is $50$. If $HJ=15$, what is the length of $\\overline{EF}$?",
    diagram: { type: "similarTriangles", params: { triangle1: { labels: ["D", "E", "F"], sideLabels: ["", "EF = ?", ""] }, triangle2: { labels: ["G", "H", "J"], sideLabels: ["", "HJ = 15", ""] }, figureNote: true } },
    choices: [
      // distractor: applies the area ratio directly to the length
      { id: "A", text: "$5.4$" },
      { id: "B", text: "$9$" },
      // distractor: copies the corresponding side
      { id: "C", text: "$15$" },
      // distractor: uses the ratio upside down
      { id: "D", text: "$25$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** The area ratio is $\\frac{18}{50}=\\frac{9}{25}$, so the length ratio is $\\sqrt{\\frac{9}{25}}=\\frac{3}{5}$. Then $EF=15\\cdot\\frac{3}{5}=9$.\n\n**The Full Solution:**\nStep 1: For similar figures with length ratio $k$, the areas are in ratio $k^2$.\nStep 2: $\\frac{[DEF]}{[GHJ]}=\\frac{18}{50}=\\frac{9}{25}$, so $k^2=\\frac{9}{25}$ and $k=\\frac{3}{5}$.\nStep 3: $\\overline{EF}$ corresponds to $\\overline{HJ}$, so $EF=k\\cdot HJ=\\frac{3}{5}(15)=9$.\n\nCheck: a triangle scaled from $GHJ$ by $\\frac{3}{5}$ has area $50\\cdot\\frac{9}{25}=18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5.4$): applied the area ratio $\\frac{9}{25}$ straight to the side length, $15\\cdot\\frac{9}{25}$, without taking the square root first.\n* Choice C ($15$): copied $HJ$, as if corresponding sides of similar triangles were equal; that is true only for congruent triangles.\n* Choice D ($25$): used the ratio upside down, scaling $15$ up by $\\frac{5}{3}$ even though $DEF$ is the smaller triangle.\n\n**Test Day Takeaway:** Areas carry the square of the length ratio. Take the square root of the area ratio before touching any side length, and check that the smaller triangle gets the smaller side.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-area-ratio-chain",
    sourceRef: "pilot-m2-similar-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-08-13"
  }
];
