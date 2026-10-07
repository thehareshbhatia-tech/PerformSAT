export const geometryBank = [
  // ── EASY (18 questions) ────────────────────────────────────────────

  {
    id: "bank-geo-001",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the triangle shown, what is the value of $x$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["52°", "61°", "x°"], figureNote: true } },
    choices: [
      { id: "A", text: "$67$" },
      // distractor: adds the two known angles, 52 + 61 = 113, instead of subtracting their sum from 180
      { id: "B", text: "$113$" },
      // distractor: subtracts only 61 from 180
      { id: "C", text: "$119$" },
      // distractor: subtracts only 52 from 180
      { id: "D", text: "$128$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $180 - 52 - 61 = 67$, so $x = 67$.\n\n**The Full Solution:**\nStep 1: The three angle measures of a triangle add to $180°$, so $52 + 61 + x = 180$.\nStep 2: Combine the known angles: $52 + 61 = 113$.\nStep 3: Subtract: $x = 180 - 113 = 67$. Check: $52 + 61 + 67 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($113$): adds the two given angles, which is the amount to remove from $180$, not the missing angle.\n* Choice C ($119$): subtracts only $61$ from $180$ and forgets the $52°$ angle.\n* Choice D ($128$): subtracts only $52$ from $180$ and forgets the $61°$ angle.\n\n**Test Day Takeaway:** Add the known angles first, then subtract once from $180$; doing two separate subtractions is where the slip happens.",
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
    question: "A circle has a radius of $8$ centimeters. What is the area, in square centimeters, of the circle?",
    choices: [
      // distractor: multiplies the radius 8 by pi without squaring it
      { id: "A", text: "$8\\pi$" },
      // distractor: computes the circumference 2 pi (8) = 16 pi instead of the area
      { id: "B", text: "$16\\pi$" },
      { id: "C", text: "$64\\pi$" },
      // distractor: squares the diameter 16 instead of the radius, pi (16^2) = 256 pi
      { id: "D", text: "$256\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle Area from Radius**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $A = \\pi r^{2} = \\pi(8)^{2} = 64\\pi$.\n\n**The Full Solution:**\nStep 1: The area of a circle with radius $r$ is $\\pi r^{2}$.\nStep 2: The radius is $8$ centimeters, so $r^{2} = 8^{2} = 64$.\nStep 3: The area is $\\pi(64) = 64\\pi$ square centimeters. Check: $64\\pi \\approx 201$, and a circle of radius $8$ fits inside a $16$ by $16$ square of area $256$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8\\pi$): multiplies the radius by $\\pi$ but never squares it.\n* Choice B ($16\\pi$): computes the circumference $2\\pi(8)$, the distance around the circle, not the area.\n* Choice D ($256\\pi$): squares the diameter $16$ instead of the radius $8$.\n\n**Test Day Takeaway:** Area is $\\pi r^{2}$ and circumference is $2\\pi r$; square the radius, never the diameter.",
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
    question: "In the right triangle shown, what is the value of $x$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 7]], sideLabels: ["x", "7", "25"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the side lengths, 25 - 7 = 18, instead of their squares
      { id: "A", text: "$18$" },
      { id: "B", text: "$24$" },
      // distractor: adds the side lengths, 25 + 7 = 32
      { id: "C", text: "$32$" },
      // distractor: finds x^2 = 625 - 49 = 576 and stops before taking the square root
      { id: "D", text: "$576$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $x = \\sqrt{25^{2} - 7^{2}} = \\sqrt{576} = 24$.\n\n**The Full Solution:**\nStep 1: The side of length $25$ is opposite the right angle, so it is the hypotenuse, and $x$ and $7$ are the legs.\nStep 2: By the Pythagorean theorem, $x^{2} + 7^{2} = 25^{2}$, so $x^{2} = 625 - 49 = 576$.\nStep 3: Take the positive square root: $x = 24$. Check: $24^{2} + 7^{2} = 576 + 49 = 625 = 25^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): subtracts the lengths, $25 - 7$, instead of their squares.\n* Choice C ($32$): adds the lengths, $25 + 7$, which would make the leg longer than the hypotenuse.\n* Choice D ($576$): finds $x^{2}$ correctly but stops before taking the square root.\n\n**Test Day Takeaway:** Identify the hypotenuse first (the side opposite the right angle); a leg is found by subtracting squares, then taking a square root.",
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
    question: "A circle has a diameter of $26$ inches. What is the circumference, in inches, of the circle?",
    choices: [
      // distractor: halves the diameter to the radius 13 and multiplies by pi, using pi r
      { id: "A", text: "$13\\pi$" },
      { id: "B", text: "$26\\pi$" },
      // distractor: treats 26 as the radius and computes 2 pi (26) = 52 pi
      { id: "C", text: "$52\\pi$" },
      // distractor: computes the area pi r^2 = pi (13^2) = 169 pi
      { id: "D", text: "$169\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circumference from Diameter**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Circumference is $\\pi d = \\pi(26) = 26\\pi$ inches.\n\n**The Full Solution:**\nStep 1: The circumference of a circle is $C = \\pi d$, or equivalently $C = 2\\pi r$.\nStep 2: The diameter is $26$ inches, so $C = \\pi(26) = 26\\pi$.\nStep 3: So the circumference is $26\\pi$ inches. Check: the radius is $13$, and $2\\pi(13) = 26\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13\\pi$): uses the radius in $\\pi r$, which is only half the circumference.\n* Choice C ($52\\pi$): uses the diameter in $2\\pi r$, doubling the circumference.\n* Choice D ($169\\pi$): computes the area $\\pi(13)^{2}$ instead of the distance around the circle.\n\n**Test Day Takeaway:** Match the formula to the measurement given: $\\pi d$ for a diameter, $2\\pi r$ for a radius.",
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
    question: "A rectangular prism has a length of $2x$ centimeters, a width of $x$ centimeters, and a height of $40$ centimeters. Which expression represents the volume, in cubic centimeters, of the prism?",
    choices: [
      // distractor: multiplies 2x by 40 and drops the width x
      { id: "A", text: "$80x$" },
      // distractor: multiplies x by x by 40 and drops the factor 2 in the length
      { id: "B", text: "$40x^{2}$" },
      { id: "C", text: "$80x^{2}$" },
      // distractor: gives every factor an x, as if the height were 40x
      { id: "D", text: "$80x^{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rectangular Prism Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $V = (2x)(x)(40) = 80x^{2}$.\n\n**The Full Solution:**\nStep 1: The volume of a rectangular prism is length times width times height.\nStep 2: Multiply: $(2x)(x)(40)$.\nStep 3: Combine the numbers and the variables: $2 \\cdot 40 = 80$ and $x \\cdot x = x^{2}$, so $V = 80x^{2}$. Check with $x = 1$: a $2$ by $1$ by $40$ prism has volume $80$, and $80(1)^{2} = 80$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($80x$): multiplies the length by the height and leaves out the width.\n* Choice B ($40x^{2}$): drops the factor $2$ in the length $2x$.\n* Choice D ($80x^{3}$): treats the height as if it contained an $x$; only two of the dimensions do.\n\n**Test Day Takeaway:** Multiply all three dimensions, then count factors of $x$: two dimensions with $x$ give $x^{2}$.",
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
    question: "What is the measure, in radians, of an angle that measures $252°$?",
    choices: [
      // distractor: divides 252 by 360 and multiplies by pi, using pi radians for a full turn
      { id: "A", text: "$\\frac{7\\pi}{10}$" },
      // distractor: inverts the conversion factor, computing (180/252) pi
      { id: "B", text: "$\\frac{5\\pi}{7}$" },
      { id: "C", text: "$\\frac{7\\pi}{5}$" },
      // distractor: divides 252 by 90 instead of 180
      { id: "D", text: "$\\frac{14\\pi}{5}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Degrees to Radians**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Multiply by $\\frac{\\pi}{180}$: $252 \\cdot \\frac{\\pi}{180} = \\frac{7\\pi}{5}$.\n\n**The Full Solution:**\nStep 1: Since $180° = \\pi$ radians, multiply a degree measure by $\\frac{\\pi}{180}$ to convert it to radians.\nStep 2: $252 \\cdot \\frac{\\pi}{180} = \\frac{252\\pi}{180}$.\nStep 3: Divide $252$ and $180$ by $36$: $\\frac{252\\pi}{180} = \\frac{7\\pi}{5}$. Check: $\\frac{7\\pi}{5} \\cdot \\frac{180}{\\pi} = 7 \\cdot 36 = 252$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7\\pi}{10}$): divides by $360$ instead of $180$, as if a full turn were only $\\pi$ radians.\n* Choice B ($\\frac{5\\pi}{7}$): flips the conversion factor, computing $\\frac{180}{252}\\pi$.\n* Choice D ($\\frac{14\\pi}{5}$): divides by $90$ instead of $180$, doubling the answer.\n\n**Test Day Takeaway:** Degrees to radians: multiply by $\\frac{\\pi}{180}$. An angle between $180°$ and $270°$ must land between $\\pi$ and $\\frac{3\\pi}{2}$.",
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
    question: "A triangle has a base of length $18$ meters and a height of $7$ meters. What is the area, in square meters, of the triangle?",
    correctAnswer: "63",
    explanation: "**SAT Pattern: Triangle Area**\n\n**The correct answer is 63.**\n\n**The Fast Way (~10s):** $\\frac{1}{2}(18)(7) = 63$.\n\n**The Full Solution:**\nStep 1: The area of a triangle is $\\frac{1}{2}bh$.\nStep 2: Substitute $b = 18$ and $h = 7$: $\\frac{1}{2}(18)(7)$.\nStep 3: Compute: $\\frac{1}{2}(126) = 63$ square meters. Check: a rectangle $18$ by $7$ has area $126$, and the triangle is half of it ✓\n\n**Common Mistakes:**\n* $126$: multiplies the base by the height and forgets the factor $\\frac{1}{2}$.\n* $25$: adds the base and the height instead of multiplying.\n* $31.5$: halves the product twice.\n\n**Test Day Takeaway:** Triangle area is half of base times height; check that your answer is half of the matching rectangle.",
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
    question: "An angle measures $\\frac{5\\pi}{9}$ radians. What is the measure of this angle in degrees?",
    choices: [
      // distractor: drops the 5 and converts pi/9, computing 180/9 = 20
      { id: "A", text: "$20$" },
      // distractor: uses 90 degrees for pi radians, computing (5/9)(90) = 50
      { id: "B", text: "$50$" },
      { id: "C", text: "$100$" },
      // distractor: uses 360 degrees for pi radians, computing (5/9)(360) = 200
      { id: "D", text: "$200$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Radians to Degrees**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Replace $\\pi$ with $180°$: $\\frac{5(180)}{9} = 100$.\n\n**The Full Solution:**\nStep 1: Since $\\pi$ radians $= 180°$, multiply a radian measure by $\\frac{180}{\\pi}$ to convert it to degrees.\nStep 2: $\\frac{5\\pi}{9} \\cdot \\frac{180}{\\pi} = \\frac{5 \\cdot 180}{9}$.\nStep 3: Compute: $\\frac{900}{9} = 100$, so the angle measures $100°$. Check: $100 \\cdot \\frac{\\pi}{180} = \\frac{100\\pi}{180} = \\frac{5\\pi}{9}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): converts only $\\frac{\\pi}{9}$, which is $20°$, and forgets to multiply by $5$.\n* Choice B ($50$): replaces $\\pi$ with $90$ instead of $180$.\n* Choice D ($200$): replaces $\\pi$ with $360$, the degree measure of a full turn, which is $2\\pi$ radians.\n\n**Test Day Takeaway:** Radians to degrees: replace $\\pi$ with $180$. Since $\\frac{5}{9}$ is a little more than $\\frac{1}{2}$, the answer must be a little more than $90$.",
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
    question: "In triangle $PQR$, $PQ = 16$ centimeters and $QR = 16$ centimeters. Which additional fact would show that triangle $PQR$ is equilateral?",
    choices: [
      // distractor: angles P and R are already equal because PQ = QR, so this says nothing new about PR
      { id: "A", text: "Angle $P$ and angle $R$ have equal measures." },
      // distractor: a right angle at Q makes PR = 16 sqrt(2), so the triangle is isosceles but not equilateral
      { id: "B", text: "Angle $Q$ is a right angle." },
      // distractor: halves the given side length instead of matching it
      { id: "C", text: "$PR = 8$ centimeters" },
      { id: "D", text: "$PR = 16$ centimeters" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Triangle Classification by Sides**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** An equilateral triangle has three equal sides. Two sides are already $16$, so the third side must also be $16$ centimeters.\n\n**The Full Solution:**\nStep 1: Triangle $PQR$ is equilateral exactly when $PQ = QR = PR$.\nStep 2: It is given that $PQ = QR = 16$, so the only missing condition is $PR = 16$.\nStep 3: Choice D states that $PR = 16$ centimeters, which makes all three sides equal. Check: the sides are $16$, $16$, and $16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Angle $P$ and angle $R$ have equal measures.): since $PQ = QR$, the angles opposite those sides, angle $R$ and angle $P$, are already equal. This is true of every triangle with these two sides, so it cannot force $PR = 16$.\n* Choice B (Angle $Q$ is a right angle.): a right angle at $Q$ gives $PR = \\sqrt{16^{2} + 16^{2}} = 16\\sqrt{2}$, so the triangle is isosceles but not equilateral.\n* Choice C ($PR = 8$ centimeters): gives side lengths $16$, $16$, and $8$, which is isosceles but not equilateral.\n\n**Test Day Takeaway:** Equilateral means all three sides are equal. A statement proves it only if it forces the third side to match the other two.",
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
    question: "What is the value of $x$ in the triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [16, 0], [16, 16]], rightAngleVertex: 1, labels: ["45°", "", ""], sideLabels: ["16", "", "x"], figureNote: true } },
    choices: [
      // distractor: divides the leg by sqrt(2) instead of multiplying
      { id: "A", text: "$8\\sqrt{2}$" },
      // distractor: assumes the hypotenuse is equal to the leg
      { id: "B", text: "$16$" },
      { id: "C", text: "$16\\sqrt{2}$" },
      // distractor: doubles the leg instead of multiplying it by sqrt(2)
      { id: "D", text: "$32$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In a $45°$-$45°$-$90°$ triangle, the hypotenuse is $\\sqrt{2}$ times a leg, so $x = 16\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The triangle has a right angle and a $45°$ angle, so its third angle is $45°$ and its legs are equal: both legs are $16$.\nStep 2: In a $45°$-$45°$-$90°$ triangle, the hypotenuse is $\\sqrt{2}$ times the length of a leg.\nStep 3: So $x = 16\\sqrt{2}$. Check: $16^{2} + 16^{2} = 512$ and $(16\\sqrt{2})^{2} = 256 \\cdot 2 = 512$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8\\sqrt{2}$): divides the leg by $\\sqrt{2}$; that move finds a leg from the hypotenuse, not the hypotenuse from a leg.\n* Choice B ($16$): treats the hypotenuse as equal to the leg, but the hypotenuse is always the longest side.\n* Choice D ($32$): doubles the leg. The hypotenuse is $\\sqrt{2} \\approx 1.41$ times a leg, not $2$ times.\n\n**Test Day Takeaway:** In a $45°$-$45°$-$90°$ triangle, leg to hypotenuse: multiply by $\\sqrt{2}$. Hypotenuse to leg: divide by $\\sqrt{2}$.",
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
    question: "Points $A$ and $B$ lie on a circle with center $O$, and $\\overline{AB}$ passes through $O$. If $OA = 7$, what is the length of $\\overline{AB}$?",
    choices: [
      // distractor: halves the radius instead of doubling it
      { id: "A", text: "$3.5$" },
      // distractor: treats AB as a radius, the same length as OA
      { id: "B", text: "$7$" },
      { id: "C", text: "$14$" },
      // distractor: computes the circumference, 2 pi (7), about 44
      { id: "D", text: "$44$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle Vocabulary**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** A segment that joins two points of the circle through the center is a diameter, and $OA$ is a radius, so $AB = 2(7) = 14$.\n\n**The Full Solution:**\nStep 1: $O$ is the center and $A$ is on the circle, so $\\overline{OA}$ is a radius: the radius is $7$.\nStep 2: $\\overline{AB}$ joins two points of the circle and passes through the center, so $\\overline{AB}$ is a diameter.\nStep 3: A diameter is twice the radius: $AB = 2(7) = 14$. Check: $AB = AO + OB = 7 + 7 = 14$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.5$): halves the radius, mixing up which of radius and diameter is the longer one.\n* Choice B ($7$): treats $\\overline{AB}$ as a radius, but it runs all the way across the circle.\n* Choice D ($44$): computes the circumference $2\\pi(7) \\approx 44$, the distance around the circle, not across it.\n\n**Test Day Takeaway:** A segment through the center with both endpoints on the circle is a diameter, and a diameter is two radii laid end to end.",
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
    question: "In the right triangle shown, what is the value of $\\sin A$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15, 0], [15, 8]], labels: ["A", "B", "C"], sideLabels: ["15", "8", "17"], rightAngleVertex: 1 } },
    choices: [
      { id: "A", text: "$\\frac{8}{17}$" },
      // distractor: uses opposite over adjacent, which is tan A
      { id: "B", text: "$\\frac{8}{15}$" },
      // distractor: uses adjacent over hypotenuse, which is cos A
      { id: "C", text: "$\\frac{15}{17}$" },
      // distractor: inverts the sine ratio to hypotenuse over opposite
      { id: "D", text: "$\\frac{17}{8}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: SOH-CAH-TOA**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The side opposite $A$ is $8$ and the hypotenuse is $17$, so $\\sin A = \\frac{8}{17}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $B$, so the hypotenuse is $\\overline{AC}$, with length $17$.\nStep 2: The side opposite angle $A$ is $\\overline{BC}$, with length $8$; the side adjacent to $A$ is $\\overline{AB}$, with length $15$.\nStep 3: Sine is opposite over hypotenuse: $\\sin A = \\frac{8}{17}$. Check: $8^{2} + 15^{2} = 64 + 225 = 289 = 17^{2}$, so the labels are consistent ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{8}{15}$): divides opposite by adjacent, which gives $\\tan A$.\n* Choice C ($\\frac{15}{17}$): divides adjacent by hypotenuse, which gives $\\cos A$.\n* Choice D ($\\frac{17}{8}$): flips the sine ratio; a sine can never be greater than $1$.\n\n**Test Day Takeaway:** Locate the hypotenuse across from the right angle, then read opposite and adjacent from the angle you are asked about.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-trig-ratio",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-013",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Two angles of a triangle have measures $38°$ and $x°$. Which of the following could be the value of $x$?",
    choices: [
      { id: "A", text: "$135$" },
      // distractor: uses 180 - 38 = 142, which leaves 0 degrees for the third angle
      { id: "B", text: "$142$" },
      // distractor: ignores the 180-degree total once x looks less than 180
      { id: "C", text: "$160$" },
      // distractor: adds 38 to 180 instead of subtracting
      { id: "D", text: "$218$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The third angle is $180 - 38 - x = 142 - x$, which must be positive, so $x < 142$. Only $135$ works.\n\n**The Full Solution:**\nStep 1: The three angles of a triangle add to $180°$, so the third angle measures $180 - 38 - x = 142 - x$ degrees.\nStep 2: Every angle of a triangle has a positive measure, so $142 - x > 0$, which means $x < 142$.\nStep 3: Of the choices, only $135$ is less than $142$. Check: the angles would be $38°$, $135°$, and $7°$, and $38 + 135 + 7 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($142$): makes the third angle $142 - 142 = 0°$, which is not a triangle.\n* Choice C ($160$): makes the third angle $142 - 160 = -18°$, which is impossible.\n* Choice D ($218$): adds $38$ to $180$; no angle of a triangle can be greater than $180°$.\n\n**Test Day Takeaway:** The angles of a triangle add to $180°$, and each one is positive, so any two angles must add to less than $180°$.",
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
      // distractor: computes the surface area 4 pi r^2 = 144 pi
      { id: "A", text: "$144\\pi$" },
      { id: "B", text: "$288\\pi$" },
      // distractor: omits the factor 1/3, computing 4 pi (6^3) = 864 pi
      { id: "C", text: "$864\\pi$" },
      // distractor: uses the diameter 12 as the radius, (4/3) pi (12^3) = 2,304 pi
      { id: "D", text: "$2{,}304\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Sphere Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $V = \\frac{4}{3}\\pi(6)^{3} = \\frac{4}{3}\\pi(216) = 288\\pi$.\n\n**The Full Solution:**\nStep 1: The volume of a sphere is $V = \\frac{4}{3}\\pi r^{3}$.\nStep 2: With $r = 6$, $r^{3} = 216$.\nStep 3: $V = \\frac{4}{3}\\pi(216) = 288\\pi$ cubic inches. Check: $\\frac{216}{3} = 72$ and $4(72) = 288$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($144\\pi$): uses the surface area formula $4\\pi r^{2}$, which measures square inches, not cubic inches.\n* Choice C ($864\\pi$): leaves out the $\\frac{1}{3}$ in $\\frac{4}{3}$.\n* Choice D ($2{,}304\\pi$): cubes the diameter $12$ instead of the radius $6$.\n\n**Test Day Takeaway:** Sphere volume is $\\frac{4}{3}\\pi r^{3}$; cube the radius, then divide by $3$ before multiplying by $4$.",
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
    question: "A circle is divided into $8$ arcs of equal length. What is the measure, in radians, of the central angle of each arc?",
    choices: [
      // distractor: uses pi radians for a full turn, computing pi/8
      { id: "A", text: "$\\frac{\\pi}{8}$" },
      { id: "B", text: "$\\frac{\\pi}{4}$" },
      // distractor: gives the measure of the whole circle without dividing by 8
      { id: "C", text: "$2\\pi$" },
      // distractor: multiplies 2 pi by 8 instead of dividing
      { id: "D", text: "$16\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Radian Measure of a Full Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A full circle is $2\\pi$ radians, and $\\frac{2\\pi}{8} = \\frac{\\pi}{4}$.\n\n**The Full Solution:**\nStep 1: The central angles of the $8$ arcs together make one full turn, which measures $2\\pi$ radians.\nStep 2: The arcs have equal length, so their central angles are equal, and each one is $\\frac{2\\pi}{8}$.\nStep 3: Simplify: $\\frac{2\\pi}{8} = \\frac{\\pi}{4}$. Check: $\\frac{\\pi}{4}$ radians is $45°$, and $8(45°) = 360°$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{\\pi}{8}$): treats a full turn as $\\pi$ radians, which is only half a circle.\n* Choice C ($2\\pi$): gives the measure of the whole circle and never divides it among the arcs.\n* Choice D ($16\\pi$): multiplies by $8$ instead of dividing.\n\n**Test Day Takeaway:** A full turn is $2\\pi$ radians, the same as $360°$; split it evenly when a circle is cut into equal arcs.",
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
    question: "$(x + 6)^{2} + (y - 4)^{2} = 81$\nIn the $xy$-plane, the graph of the given equation is a circle. What are the coordinates of the center of the circle?",
    choices: [
      // distractor: swaps the coordinates, pairing the y-shift with x
      { id: "A", text: "$(-4, 6)$" },
      { id: "B", text: "$(-6, 4)$" },
      // distractor: swaps the coordinates and copies the signs as written
      { id: "C", text: "$(4, -6)$" },
      // distractor: copies the signs as written in the equation instead of reversing them
      { id: "D", text: "$(6, -4)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle Equation Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Write $x + 6$ as $x - (-6)$: the center is $(-6, 4)$.\n\n**The Full Solution:**\nStep 1: A circle with center $(h, k)$ and radius $r$ has equation $(x - h)^{2} + (y - k)^{2} = r^{2}$.\nStep 2: Rewrite the given equation in that form: $(x - (-6))^{2} + (y - 4)^{2} = 9^{2}$.\nStep 3: So $h = -6$ and $k = 4$, and the center is $(-6, 4)$. Check: substituting $x = -6$ and $y = 4$ makes both squared terms $0$, which happens only at the center ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-4, 6)$): swaps the coordinates, using the $y$-term's number for $x$.\n* Choice C ($(4, -6)$): swaps the coordinates and also keeps the signs as written.\n* Choice D ($(6, -4)$): copies the signs from the equation; the center coordinates have the opposite signs.\n\n**Test Day Takeaway:** In $(x - h)^{2} + (y - k)^{2} = r^{2}$ the center coordinates appear with the opposite sign, so $x + 6$ means $h = -6$.",
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
    question: "Line $\\ell$ is tangent to a circle with center $O$ at point $T$. Point $P$ lies on line $\\ell$, and the measure of angle $TOP$ is $52°$. What is the measure, in degrees, of angle $OPT$?",
    choices: [
      { id: "A", text: "$38$" },
      // distractor: treats triangle OTP as isosceles and copies the 52-degree angle at O to the angle at P
      { id: "B", text: "$52$" },
      // distractor: gives angle OTP, the right angle between the radius and the tangent line, instead of angle OPT
      { id: "C", text: "$90$" },
      // distractor: subtracts only 52 from 180 and forgets the right angle at T
      { id: "D", text: "$128$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Tangent-Radius Perpendicularity**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The radius $\\overline{OT}$ is perpendicular to the tangent line at $T$, so angle $OTP$ is $90°$ and angle $OPT$ is $180 - 90 - 52 = 38$ degrees.\n\n**The Full Solution:**\nStep 1: $\\overline{OT}$ is a radius drawn to the point of tangency, so it is perpendicular to line $\\ell$, and angle $OTP$ measures $90°$.\nStep 2: The angle measures of triangle $OTP$ add to $180°$: $90 + 52 + (\\text{measure of angle } OPT) = 180$.\nStep 3: Solve: the measure of angle $OPT$ is $180 - 142 = 38$ degrees. Check: $90 + 52 + 38 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($52$): treats triangle $OTP$ as isosceles, but only $\\overline{OT}$ is a radius; $\\overline{OP}$ and $\\overline{TP}$ are not equal to it.\n* Choice C ($90$): is the measure of angle $OTP$, the right angle at the point of tangency, not angle $OPT$.\n* Choice D ($128$): subtracts only $52$ from $180$ and leaves out the right angle at $T$.\n\n**Test Day Takeaway:** A radius drawn to a point of tangency meets the tangent line at a right angle; mark that $90°$ first, then use the triangle angle sum.",
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
    question: "A right circular cone has a height of $14$ centimeters and a base with a radius of $6$ centimeters. The volume of the cone is $k\\pi$ cubic centimeters. What is the value of $k$?",
    correctAnswer: "168",
    explanation: "**SAT Pattern: Cone Volume**\n\n**The correct answer is 168.**\n\n**The Fast Way (~20s):** $\\frac{1}{3}\\pi(6)^{2}(14) = \\frac{1}{3}(504)\\pi = 168\\pi$, so $k = 168$.\n\n**The Full Solution:**\nStep 1: The volume of a cone is $V = \\frac{1}{3}\\pi r^{2}h$.\nStep 2: Substitute $r = 6$ and $h = 14$: $V = \\frac{1}{3}\\pi(36)(14) = \\frac{1}{3}\\pi(504)$.\nStep 3: Simplify: $V = 168\\pi$, so $k = 168$. Check: a cylinder with the same base and height has volume $504\\pi$, exactly $3$ times the cone's ✓\n\n**Common Mistakes:**\n* $504$: leaves out the $\\frac{1}{3}$ and computes the volume of a cylinder.\n* $28$: forgets to square the radius, computing $\\frac{1}{3}(6)(14)$.\n* $672$: uses the diameter $12$ in place of the radius, computing $\\frac{1}{3}(144)(14)$.\n\n**Test Day Takeaway:** A cone holds one third of the matching cylinder: square the radius, multiply by the height, then divide by $3$.",
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
    question: "A $17$-foot ladder leans against a vertical wall, and the bottom of the ladder is $8$ feet from the wall, as shown. How many feet up the wall does the top of the ladder reach?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [8, 0], [8, 15]], sideLabels: ["8 ft", "", "17 ft"], rightAngleVertex: 1 } },
    choices: [
      // distractor: subtracts the side lengths, 17 - 8 = 9, instead of their squares
      { id: "A", text: "$9$" },
      { id: "B", text: "$15$" },
      // distractor: adds the side lengths, 17 + 8 = 25
      { id: "C", text: "$25$" },
      // distractor: finds 17^2 - 8^2 = 225 and forgets to take the square root
      { id: "D", text: "$225$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Ladder Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The ladder is the hypotenuse: $\\sqrt{17^{2} - 8^{2}} = \\sqrt{225} = 15$.\n\n**The Full Solution:**\nStep 1: The wall, the ground, and the ladder form a right triangle with the ladder, $17$ feet, as the hypotenuse and the ground distance, $8$ feet, as one leg.\nStep 2: Let $h$ be the height the ladder reaches. By the Pythagorean theorem, $8^{2} + h^{2} = 17^{2}$, so $h^{2} = 289 - 64 = 225$.\nStep 3: $h = \\sqrt{225} = 15$ feet. Check: $8^{2} + 15^{2} = 64 + 225 = 289 = 17^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): subtracts the lengths themselves; the Pythagorean theorem works with their squares.\n* Choice C ($25$): adds the two lengths, but a leg must be shorter than the hypotenuse.\n* Choice D ($225$): is $h^{2}$, not $h$; the last step is the square root.\n\n**Test Day Takeaway:** In a right triangle, the side across from the right angle is the hypotenuse. To find a leg, subtract squares: $b = \\sqrt{c^{2} - a^{2}}$.",
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
    question: "Triangle $FGH$ is similar to triangle $JKL$ in the figure shown, with $F$, $G$, and $H$ corresponding to $J$, $K$, and $L$, respectively. What is the length of $\\overline{KL}$?",
    diagram: { type: "similarTriangles", params: { triangle1: { vertices: [[0, 7.79], [4.5, 0], [19.5, 0]], labels: ["F", "G", "H"], sideLabels: ["9", "15", "21"] }, triangle2: { vertices: [[0, 10.39], [6, 0], [26, 0]], labels: ["J", "K", "L"], sideLabels: ["12", "", ""] }, figureNote: true } },
    choices: [
      // distractor: inverts the scale factor, multiplying 15 by 9/12
      { id: "A", text: "$11.25$" },
      // distractor: adds the difference 12 - 9 = 3 to GH instead of multiplying by the scale factor
      { id: "B", text: "$18$" },
      { id: "C", text: "$20$" },
      // distractor: scales HF = 21 instead of the corresponding side GH
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\overline{JK}$ matches $\\overline{FG}$, so the scale factor is $\\frac{12}{9} = \\frac{4}{3}$, and $KL = \\frac{4}{3}(15) = 20$.\n\n**The Full Solution:**\nStep 1: Because $F$, $G$, $H$ correspond to $J$, $K$, $L$, side $\\overline{JK}$ corresponds to $\\overline{FG}$ and side $\\overline{KL}$ corresponds to $\\overline{GH}$.\nStep 2: The scale factor from triangle $FGH$ to triangle $JKL$ is $\\frac{JK}{FG} = \\frac{12}{9} = \\frac{4}{3}$.\nStep 3: Then $KL = \\frac{4}{3} \\cdot GH = \\frac{4}{3}(15) = 20$. Check: $\\frac{KL}{GH} = \\frac{20}{15} = \\frac{4}{3} = \\frac{12}{9}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($11.25$): uses the scale factor upside down, $\\frac{9}{12}$, which shrinks a side of the larger triangle.\n* Choice B ($18$): adds the difference $12 - 9 = 3$; similar figures scale by multiplying, not adding.\n* Choice D ($28$): scales $HF = 21$, which corresponds to $\\overline{LJ}$, not $\\overline{KL}$.\n\n**Test Day Takeaway:** Use the letter order of the similarity statement to pair sides, then multiply by one scale factor.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "proportion-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-021",
    domain: "geometry",
    skills: ["soh-cah-toa", "pythagorean-theorem"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the right triangle shown, which expression represents the value of $x$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15.046, 0], [0, 8]], rightAngleVertex: 0, labels: ["", "28°", ""], sideLabels: ["", "x", "8"] } },
    choices: [
      // distractor: sets x/8 = sin 28 degrees, putting the hypotenuse in the numerator
      { id: "A", text: "$8\\sin 28°$" },
      // distractor: treats the side of length 8 as the hypotenuse and x as the adjacent side
      { id: "B", text: "$8\\cos 28°$" },
      // distractor: treats the side of length 8 as adjacent to the 28-degree angle
      { id: "C", text: "$\\frac{8}{\\cos 28°}$" },
      { id: "D", text: "$\\frac{8}{\\sin 28°}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The side of length $8$ is opposite the $28°$ angle and $x$ is the hypotenuse, so $\\sin 28° = \\frac{8}{x}$ and $x = \\frac{8}{\\sin 28°}$.\n\n**The Full Solution:**\nStep 1: The side of length $8$ is across from the $28°$ angle, and $x$ is across from the right angle, so $x$ is the hypotenuse.\nStep 2: Sine relates the opposite side and the hypotenuse: $\\sin 28° = \\frac{8}{x}$.\nStep 3: Multiply both sides by $x$ and divide by $\\sin 28°$: $x = \\frac{8}{\\sin 28°}$. Check: $\\sin 28° \\approx 0.469$, so $x \\approx 17.0$, which is longer than $8$, as a hypotenuse must be ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8\\sin 28°$): gives $8\\sin 28° \\approx 3.8$, shorter than the leg of length $8$, so it cannot be the hypotenuse.\n* Choice B ($8\\cos 28°$): treats $8$ as the hypotenuse and $x$ as the side next to the $28°$ angle.\n* Choice C ($\\frac{8}{\\cos 28°}$): uses cosine, which would require the side of length $8$ to be next to the $28°$ angle, not across from it.\n\n**Test Day Takeaway:** Label the sides from the given angle first (opposite, adjacent, hypotenuse), then pick the ratio that uses the side you know and the side you want.",
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
    question: "The circle shown has center $O$. What is the length of arc $AB$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 80, angleLabel: "80°", radius: 27, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: uses pi r instead of 2 pi r for the circumference, giving 6 pi
      { id: "A", text: "$6\\pi$" },
      { id: "B", text: "$12\\pi$" },
      // distractor: gives the full circumference 2 pi (27) = 54 pi
      { id: "C", text: "$54\\pi$" },
      // distractor: computes the sector's area, (80/360) pi (27^2) = 162 pi
      { id: "D", text: "$162\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The arc is $\\frac{80}{360} = \\frac{2}{9}$ of the circumference $54\\pi$, which is $12\\pi$.\n\n**The Full Solution:**\nStep 1: The radius is $27$, so the circumference is $2\\pi(27) = 54\\pi$.\nStep 2: The central angle is $80°$, so arc $AB$ is $\\frac{80}{360} = \\frac{2}{9}$ of the circle.\nStep 3: Multiply: $\\frac{2}{9}(54\\pi) = 12\\pi$. Check: in radians the angle is $\\frac{4\\pi}{9}$, and $r\\theta = 27 \\cdot \\frac{4\\pi}{9} = 12\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6\\pi$): uses $\\pi r$ instead of $2\\pi r$ for the circumference, halving the arc.\n* Choice C ($54\\pi$): gives the whole circumference instead of the $80°$ portion of it.\n* Choice D ($162\\pi$): computes the sector's area, $\\frac{2}{9}\\pi(27)^{2}$, rather than the arc length.\n\n**Test Day Takeaway:** Arc length is the angle's fraction of $360°$ times the circumference; sector area uses the same fraction of $\\pi r^{2}$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "arc-sector-computation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-023",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A circle has a radius of $9$ centimeters. Points $A$ and $B$ lie on the circle, and the length of arc $AB$ is $3\\pi$ centimeters. What is the measure, in degrees, of arc $AB$?",
    choices: [
      // distractor: uses 18 as the radius, so the circumference becomes 36 pi and the arc 1/12 of the circle
      { id: "A", text: "$30$" },
      { id: "B", text: "$60$" },
      // distractor: uses pi r = 9 pi as the circumference, so the arc becomes 1/3 of the circle
      { id: "C", text: "$120$" },
      // distractor: gives the measure of the rest of the circle, 360 - 60
      { id: "D", text: "$300$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The circumference is $18\\pi$, and $3\\pi$ is $\\frac{1}{6}$ of it, so the arc measures $\\frac{1}{6}(360°) = 60°$.\n\n**The Full Solution:**\nStep 1: The circumference is $2\\pi(9) = 18\\pi$ centimeters.\nStep 2: Arc $AB$ is $\\frac{3\\pi}{18\\pi} = \\frac{1}{6}$ of the circle.\nStep 3: So the arc measures $\\frac{1}{6}(360) = 60$ degrees. Check: $\\frac{60}{360}(18\\pi) = 3\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): doubles the radius to $18$, which makes the arc look like only $\\frac{1}{12}$ of the circle.\n* Choice C ($120$): uses $\\pi r = 9\\pi$ for the circumference, which makes the arc look like $\\frac{1}{3}$ of the circle.\n* Choice D ($300$): gives the measure of the other arc, $360 - 60 = 300$.\n\n**Test Day Takeaway:** An arc is the same fraction of the circumference as its measure is of $360°$.",
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
    question: "$(x - 7)^{2} + (y + 4)^{2} = 9k$\nIn the given equation, $k$ is a positive constant. The graph of the equation in the $xy$-plane is a circle with radius $12$. What is the value of $k$?",
    correctAnswer: "16",
    explanation: "**SAT Pattern: Read Radius from Circle Equation**\n\n**The correct answer is 16.**\n\n**The Fast Way (~20s):** The right side is $r^{2} = 144$, so $9k = 144$ and $k = 16$.\n\n**The Full Solution:**\nStep 1: In the form $(x - h)^{2} + (y - k)^{2} = r^{2}$, the right side equals the square of the radius.\nStep 2: The radius is $12$, so $9k = 12^{2} = 144$.\nStep 3: Divide by $9$: $k = 16$. Check: $9(16) = 144$ and $\\sqrt{144} = 12$ ✓\n\n**Common Mistakes:**\n* $\\frac{4}{3}$: sets $9k$ equal to the radius $12$ instead of its square.\n* $144$: finds $r^{2} = 144$ and reports it without dividing by $9$.\n* $1{,}296$: multiplies $144$ by $9$ instead of dividing.\n\n**Test Day Takeaway:** The constant on the right side of a circle's equation is $r^{2}$; square the radius before you set the two equal.",
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
    question: "A right prism has bases that are right triangles with legs of lengths $6$ centimeters and $8$ centimeters. The height of the prism is $45$ centimeters. What is the volume, in cubic centimeters, of the prism?",
    choices: [
      // distractor: multiplies by 1/3 as if the solid were a pyramid, (1/3)(24)(45) = 360
      { id: "A", text: "$360$" },
      { id: "B", text: "$1{,}080$" },
      // distractor: uses the hypotenuse 10 and a leg 8 as base and height, (1/2)(10)(8)(45) = 1,800
      { id: "C", text: "$1{,}800$" },
      // distractor: omits the 1/2 in the triangle area, 6(8)(45) = 2,160
      { id: "D", text: "$2{,}160$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangular Prism Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Base area $\\frac{1}{2}(6)(8) = 24$, times the height $45$, gives $1{,}080$.\n\n**The Full Solution:**\nStep 1: The volume of a prism is the area of a base times the height of the prism.\nStep 2: Each base is a right triangle, so its legs serve as base and height: $\\frac{1}{2}(6)(8) = 24$ square centimeters.\nStep 3: Multiply by the height: $24(45) = 1{,}080$ cubic centimeters. Check: a $6$ by $8$ by $45$ box has volume $2{,}160$, and the prism is exactly half of it ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($360$): multiplies by $\\frac{1}{3}$, which belongs to a pyramid, not a prism.\n* Choice C ($1{,}800$): uses the hypotenuse $10$ as a base with the leg $8$ as a height; those two sides are not perpendicular.\n* Choice D ($2{,}160$): forgets the $\\frac{1}{2}$ in the triangle's area.\n\n**Test Day Takeaway:** Every prism is base area times height; for a right-triangle base, the two legs are the base and height.",
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
    question: "In triangle $JKL$, the measure of angle $J$ is $3$ times the measure of angle $K$, and the measure of angle $L$ is $20°$ less than the measure of angle $K$. What is the measure, in degrees, of angle $J$?",
    choices: [
      // distractor: solves correctly but reports the measure of angle L
      { id: "A", text: "$20$" },
      // distractor: solves correctly but reports the measure of angle K
      { id: "B", text: "$40$" },
      // distractor: ignores the 20 degrees, solving 5x = 180 to get x = 36 and J = 108
      { id: "C", text: "$108$" },
      { id: "D", text: "$120$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Translate to Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** With $K = x$, $x + 3x + (x - 20) = 180$, so $x = 40$ and $J = 3(40) = 120$.\n\n**The Full Solution:**\nStep 1: Let the measure of angle $K$ be $x$ degrees. Then angle $J$ measures $3x$ degrees and angle $L$ measures $x - 20$ degrees.\nStep 2: The angle measures of a triangle sum to $180°$: $x + 3x + (x - 20) = 180$, so $5x - 20 = 180$.\nStep 3: Solve: $5x = 200$, so $x = 40$, and angle $J$ measures $3(40) = 120$ degrees. Check: $120 + 40 + 20 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): solves the equation correctly but reports angle $L$, which is $40 - 20$.\n* Choice B ($40$): stops at $x = 40$, the measure of angle $K$, instead of tripling it.\n* Choice C ($108$): drops the $-20$, solving $5x = 180$ to get $x = 36$ and $3(36) = 108$.\n\n**Test Day Takeaway:** Name the angle the others are compared to as $x$, write every angle in terms of $x$, and answer for the angle the question names.",
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
    question: "$x^{2} - 12x + y^{2} + 16y + 96 = 0$\nThe given equation defines a circle in the $xy$-plane. What is the radius of the circle?",
    choices: [
      { id: "A", text: "$2$" },
      // distractor: finds r^2 = 4 and does not take the square root
      { id: "B", text: "$4$" },
      // distractor: completes both squares but forgets to move the constant 96, giving the square root of 100
      { id: "C", text: "$10$" },
      // distractor: adds 96 to the right side instead of subtracting it, giving the square root of 196
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Complete the Square for Circle**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Completing both squares gives $(x - 6)^{2} + (y + 8)^{2} = 36 + 64 - 96 = 4$, so $r = 2$.\n\n**The Full Solution:**\nStep 1: Group the terms and move the constant: $(x^{2} - 12x) + (y^{2} + 16y) = -96$.\nStep 2: Complete each square by adding $\\left(\\frac{-12}{2}\\right)^{2} = 36$ and $\\left(\\frac{16}{2}\\right)^{2} = 64$ to both sides: $(x - 6)^{2} + (y + 8)^{2} = -96 + 36 + 64 = 4$.\nStep 3: So $r^{2} = 4$ and the radius is $2$. Check: expanding $(x - 6)^{2} + (y + 8)^{2} - 4$ gives $x^{2} - 12x + 36 + y^{2} + 16y + 64 - 4$, and $36 + 64 - 4 = 96$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): finds $r^{2}$ but stops before taking the square root.\n* Choice C ($10$): completes the squares but leaves out the constant $96$, using $36 + 64 = 100$.\n* Choice D ($14$): moves $96$ to the right side with the wrong sign, using $36 + 64 + 96 = 196$.\n\n**Test Day Takeaway:** After completing the square, the right side is $r^{2}$: add the two completing constants and subtract the original constant, then take the square root.",
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
    question: "In the triangle shown, what is the length of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [18, 0], [18, 10.392]], rightAngleVertex: 1, labels: ["30°", "", ""], sideLabels: ["18", "", ""], figureNote: true } },
    choices: [
      // distractor: finds the short leg, 18 / sqrt 3 = 6 sqrt 3, and stops before doubling it
      { id: "A", text: "$6\\sqrt{3}$" },
      // distractor: multiplies 18 by sqrt 3 / 2, treating 18 as the hypotenuse
      { id: "B", text: "$9\\sqrt{3}$" },
      { id: "C", text: "$12\\sqrt{3}$" },
      // distractor: multiplies 18 by 2 sqrt 3 instead of dividing by sqrt 3 before doubling
      { id: "D", text: "$36\\sqrt{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The side of length $18$ is the long leg, so the short leg is $\\frac{18}{\\sqrt{3}} = 6\\sqrt{3}$ and the hypotenuse is $2(6\\sqrt{3}) = 12\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The triangle has angles $30°$, $60°$, and $90°$. The side of length $18$ is adjacent to the $30°$ angle, so it is the long leg, opposite the $60°$ angle.\nStep 2: In a $30°$-$60°$-$90°$ triangle the sides are in the ratio $1 : \\sqrt{3} : 2$, so the short leg is $\\frac{18}{\\sqrt{3}} = 6\\sqrt{3}$.\nStep 3: The hypotenuse is twice the short leg: $2(6\\sqrt{3}) = 12\\sqrt{3}$. Check: $(6\\sqrt{3})^{2} + 18^{2} = 108 + 324 = 432 = (12\\sqrt{3})^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6\\sqrt{3}$): finds the short leg and stops one step early.\n* Choice B ($9\\sqrt{3}$): treats $18$ as the hypotenuse and multiplies by $\\frac{\\sqrt{3}}{2}$.\n* Choice D ($36\\sqrt{3}$): multiplies $18$ by $\\sqrt{3}$ and then by $2$, making the hypotenuse far too long.\n\n**Test Day Takeaway:** In a $30°$-$60°$-$90°$ triangle, decide which side you were given (short leg, long leg, or hypotenuse) before applying $1 : \\sqrt{3} : 2$.",
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
    question: "An isosceles triangle has two sides of length $25$ centimeters and a third side of length $14$ centimeters. What is the area, in square centimeters, of the triangle?",
    correctAnswer: "168",
    explanation: "**SAT Pattern: Isosceles Triangle Area**\n\n**The correct answer is 168.**\n\n**The Fast Way (~40s):** The height to the $14$-centimeter side is $\\sqrt{25^{2} - 7^{2}} = 24$, so the area is $\\frac{1}{2}(14)(24) = 168$.\n\n**The Full Solution:**\nStep 1: The altitude to the base of an isosceles triangle splits the base in half, making two right triangles with hypotenuse $25$ and one leg $7$.\nStep 2: The altitude is $\\sqrt{25^{2} - 7^{2}} = \\sqrt{625 - 49} = \\sqrt{576} = 24$ centimeters.\nStep 3: Area $= \\frac{1}{2}(14)(24) = 168$ square centimeters. Check: each half is a $7$-$24$-$25$ right triangle with area $\\frac{1}{2}(7)(24) = 84$, and $2(84) = 168$ ✓\n\n**Common Mistakes:**\n* $175$: uses the slanted side $25$ as the height, computing $\\frac{1}{2}(14)(25)$.\n* $336$: finds the height $24$ but forgets the $\\frac{1}{2}$, computing $14(24)$.\n* $\\approx 145$: uses the whole base $14$ instead of half of it in the Pythagorean theorem, getting a height of about $20.7$.\n\n**Test Day Takeaway:** An altitude of an isosceles triangle bisects the base; build the right triangle with half the base before using the Pythagorean theorem.",
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
    question: "In the triangle shown, what is the value of $\\cos D$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [9, 0], [9, 40]], labels: ["D", "E", "F"], sideLabels: ["9", "40", ""], rightAngleVertex: 1 } },
    choices: [
      { id: "A", text: "$\\frac{9}{41}$" },
      // distractor: divides the adjacent leg by the opposite leg, using the two legs without finding the hypotenuse
      { id: "B", text: "$\\frac{9}{40}$" },
      // distractor: uses opposite over hypotenuse, which is sin D
      { id: "C", text: "$\\frac{40}{41}$" },
      // distractor: inverts the cosine ratio to hypotenuse over adjacent
      { id: "D", text: "$\\frac{41}{9}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Cosine in a Right Triangle**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The hypotenuse is $\\sqrt{9^{2} + 40^{2}} = 41$, so $\\cos D = \\frac{DE}{DF} = \\frac{9}{41}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $E$, so $\\overline{DF}$ is the hypotenuse. Its length is $\\sqrt{9^{2} + 40^{2}} = \\sqrt{81 + 1{,}600} = \\sqrt{1{,}681} = 41$.\nStep 2: The side adjacent to angle $D$ is $\\overline{DE}$, with length $9$.\nStep 3: Cosine is adjacent over hypotenuse: $\\cos D = \\frac{9}{41}$. Check: $\\sin D = \\frac{40}{41}$, and $\\left(\\frac{9}{41}\\right)^{2} + \\left(\\frac{40}{41}\\right)^{2} = \\frac{81 + 1{,}600}{1{,}681} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{9}{40}$): uses the two legs and never finds the hypotenuse; that ratio is $\\cot D$, not $\\cos D$.\n* Choice C ($\\frac{40}{41}$): uses the side opposite $D$ over the hypotenuse, which is $\\sin D$.\n* Choice D ($\\frac{41}{9}$): flips the cosine ratio; a cosine can never be greater than $1$.\n\n**Test Day Takeaway:** When the figure gives only two legs, find the hypotenuse first; then cosine is the leg touching the angle over the hypotenuse.",
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
    question: "The edge length of cube $B$ is $4$ times the edge length of cube $A$. The volume of cube $A$ is $15$ cubic inches. What is the volume, in cubic inches, of cube $B$?",
    choices: [
      // distractor: multiplies the volume by the edge factor 4 instead of 4^3
      { id: "A", text: "$60$" },
      // distractor: multiplies by 4 x 3 = 12 instead of 4^3
      { id: "B", text: "$180$" },
      // distractor: multiplies by 4^2 = 16, the factor for area
      { id: "C", text: "$240$" },
      { id: "D", text: "$960$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Volume Scaling by Cube of Linear Factor**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Volume scales by the cube of the edge factor: $15 \\cdot 4^{3} = 15 \\cdot 64 = 960$.\n\n**The Full Solution:**\nStep 1: If cube $A$ has edge $s$, then cube $B$ has edge $4s$.\nStep 2: The volume of cube $B$ is $(4s)^{3} = 64s^{3}$, which is $64$ times the volume of cube $A$, $s^{3}$.\nStep 3: So the volume of cube $B$ is $64 \\cdot 15 = 960$ cubic inches. Check: $\\frac{960}{15} = 64 = 4^{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($60$): multiplies by the edge factor $4$, as if volume grew at the same rate as length.\n* Choice B ($180$): multiplies by $4 \\cdot 3$ instead of raising $4$ to the third power.\n* Choice C ($240$): multiplies by $4^{2} = 16$, which is how area scales, not volume.\n\n**Test Day Takeaway:** Scale lengths by $k$: areas scale by $k^{2}$ and volumes by $k^{3}$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scaling-factor",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-032",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the circle shown, $O$ is the center and the diameter is $56$. What is the length of arc $AB$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 45, angleLabel: "45°", labelCenter: "O", labelPoint1: "A", labelPoint2: "B" } },
    choices: [
      { id: "A", text: "$7\\pi$" },
      // distractor: uses the diameter 56 as the radius
      { id: "B", text: "$14\\pi$" },
      // distractor: gives the whole circumference and never applies the fraction 45/360
      { id: "C", text: "$56\\pi$" },
      // distractor: computes the area of the sector, (45/360) pi (28^2), instead of the arc length
      { id: "D", text: "$98\\pi$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The circumference is $56\\pi$, and a $45°$ arc is $\\frac{1}{8}$ of it: $7\\pi$.\n\n**The Full Solution:**\nStep 1: The diameter is $56$, so the circumference is $\\pi(56) = 56\\pi$.\nStep 2: The central angle is $45°$, so arc $AB$ is $\\frac{45}{360} = \\frac{1}{8}$ of the circle.\nStep 3: The arc length is $\\frac{1}{8}(56\\pi) = 7\\pi$. Check: eight such arcs make $8(7\\pi) = 56\\pi$, the whole circumference ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($14\\pi$): treats $56$ as the radius, which doubles the circumference to $112\\pi$.\n* Choice C ($56\\pi$): gives the whole circumference instead of the $45°$ part of it.\n* Choice D ($98\\pi$): takes $\\frac{1}{8}$ of the area $\\pi(28)^{2} = 784\\pi$, which is an area, not a length.\n\n**Test Day Takeaway:** Arc length is the central angle's fraction of $360°$ times the circumference, $\\pi d$.",
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
    question: "An angle measures $255^{\\circ}$, which is equal to $\\frac{k\\pi}{12}$ radians. What is the value of $k$?",
    correctAnswer: "17",
    explanation: "**SAT Pattern: Degrees to Radians with Reduction**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~20s):** $255 \\cdot \\frac{\\pi}{180} = \\frac{255\\pi}{180} = \\frac{17\\pi}{12}$, so $k = 17$.\n\n**The Full Solution:**\nStep 1: Convert with the factor $\\frac{\\pi}{180}$: the measure is $\\frac{255\\pi}{180}$ radians.\nStep 2: Reduce so the denominator is $12$. Both $255$ and $180$ are divisible by $15$: $\\frac{255}{15} = 17$ and $\\frac{180}{15} = 12$.\nStep 3: The measure is $\\frac{17\\pi}{12}$ radians, so $k = 17$. Check: $\\frac{17\\pi}{12} \\approx 4.45$, and $255^{\\circ}$ lies between $180^{\\circ}$ ($\\pi \\approx 3.14$) and $270^{\\circ}$ ($\\frac{3\\pi}{2} \\approx 4.71$) ✓\n\n**Common Mistakes:**\n* $255$: reports the degree measure without converting.\n* $12$: reports the denominator instead of the numerator.\n* $85$: reduces only by $3$, reaching $\\frac{85\\pi}{60}$, which does not have denominator $12$.\n\n**Test Day Takeaway:** Convert first, then match the denominator the question names; the value of $k$ depends on that reduction.",
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
    question: "A $4$-meter-tall sign casts a $3$-meter shadow at the same time that a tower casts a $42$-meter shadow. What is the height, in meters, of the tower?",
    choices: [
      // distractor: inverts the ratio, computing (3/4)(42)
      { id: "A", text: "$31.5$" },
      // distractor: adds the 1-meter difference between the sign and its shadow to 42
      { id: "B", text: "$43$" },
      { id: "C", text: "$56$" },
      // distractor: multiplies 4 by 42 and never divides by 3
      { id: "D", text: "$168$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Shadow Similar Triangles**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The sign is $\\frac{4}{3}$ as tall as its shadow, so the tower is too: $\\frac{4}{3}(42) = 56$ meters.\n\n**The Full Solution:**\nStep 1: The sun's rays meet the ground at the same angle for both objects, so each object and its shadow form similar right triangles.\nStep 2: Corresponding sides are proportional: $\\frac{4}{3} = \\frac{h}{42}$, where $h$ is the height of the tower.\nStep 3: Cross multiply: $3h = 168$, so $h = 56$ meters. Check: $\\frac{56}{42} = \\frac{4}{3}$, the same height-to-shadow ratio as the sign ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($31.5$): inverts the ratio, computing $\\frac{3}{4}(42)$; that would make the tower shorter than its shadow while the sign is taller than its own.\n* Choice B ($43$): adds the $1$-meter difference between the sign and its shadow to $42$; similar triangles scale by multiplying, not by adding.\n* Choice D ($168$): multiplies $4 \\cdot 42$ and never divides by $3$.\n\n**Test Day Takeaway:** Write both ratios as height over shadow. If one object is taller than its shadow, the other must be too.",
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
    question: "A right square pyramid has a base with side length $9$ centimeters and a height of $14$ centimeters. What is the volume, in cubic centimeters, of the pyramid?",
    choices: [
      { id: "A", text: "$378$" },
      // distractor: uses 1/2 in place of 1/3: (1/2)(81)(14) = 567
      { id: "B", text: "$567$" },
      // distractor: omits the 1/3 entirely: 81 x 14 = 1,134
      { id: "C", text: "$1{,}134$" },
      // distractor: multiplies by 3 instead of dividing by 3: 3 x 81 x 14 = 3,402
      { id: "D", text: "$3{,}402$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Square Pyramid Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $V = \\frac{1}{3}Bh = \\frac{1}{3}(9^2)(14) = 27(14) = 378$.\n\n**The Full Solution:**\nStep 1: The base is a square with side length $9$, so its area is $B = 9^2 = 81$ square centimeters.\nStep 2: A pyramid's volume is $\\frac{1}{3}Bh$, and $\\frac{1}{3}(81) = 27$.\nStep 3: Multiply by the height: $27(14) = 378$ cubic centimeters. Check: a prism with the same base and height holds $81(14) = 1{,}134$, and $\\frac{1{,}134}{3} = 378$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($567$): uses $\\frac{1}{2}$, the factor from a triangle's area, instead of $\\frac{1}{3}$.\n* Choice C ($1{,}134$): is the volume of the prism with the same base and height; the $\\frac{1}{3}$ is missing.\n* Choice D ($3{,}402$): multiplies by $3$ rather than dividing by $3$.\n\n**Test Day Takeaway:** A pyramid holds one third of the prism with the same base and height; square the side first, then take one third.",
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
    question: "In the $xy$-plane, the points $(-3, 5)$ and $(9, 5)$ are the endpoints of a diameter of a circle. Which equation represents this circle?",
    choices: [
      // distractor: flips the signs of the center coordinates when writing (x - h) and (y - k)
      { id: "A", text: "$(x + 3)^{2} + (y + 5)^{2} = 36$" },
      // distractor: uses the radius 6 on the right side instead of 6^2
      { id: "B", text: "$(x - 3)^{2} + (y - 5)^{2} = 6$" },
      { id: "C", text: "$(x - 3)^{2} + (y - 5)^{2} = 36$" },
      // distractor: uses the diameter 12 in place of the radius, 12^2 = 144
      { id: "D", text: "$(x - 3)^{2} + (y - 5)^{2} = 144$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle from Diameter Endpoints**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The center is halfway between the endpoints, $(3, 5)$, and the diameter is $9 - (-3) = 12$, so $r = 6$ and $r^{2} = 36$.\n\n**The Full Solution:**\nStep 1: Both endpoints have $y$-coordinate $5$, so the diameter is horizontal with length $9 - (-3) = 12$. The radius is $6$.\nStep 2: The center is the point halfway between the endpoints: $\\left(\\frac{-3 + 9}{2}, 5\\right) = (3, 5)$.\nStep 3: With center $(3, 5)$ and $r^{2} = 36$, the equation is $(x - 3)^{2} + (y - 5)^{2} = 36$. Check: $(9, 5)$ gives $6^{2} + 0^{2} = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x + 3)^{2} + (y + 5)^{2} = 36$): writes $(x + 3)$ and $(y + 5)$, which would put the center at $(-3, -5)$.\n* Choice B ($(x - 3)^{2} + (y - 5)^{2} = 6$): puts the radius $6$ on the right side; the equation needs $r^{2} = 36$.\n* Choice D ($(x - 3)^{2} + (y - 5)^{2} = 144$): squares the diameter $12$ instead of the radius $6$.\n\n**Test Day Takeaway:** From the endpoints of a diameter: the center is the halfway point, the radius is half the diameter, and the equation uses $r^{2}$.",
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
    question: "Point $P$ lies outside a circle with center $O$ and radius $r$. Segment $PT$ is tangent to the circle at point $T$, and $OP = 3r$. Which expression represents the length of $\\overline{PT}$?",
    choices: [
      // distractor: subtracts lengths instead of squares: 3r - r = 2r
      { id: "A", text: "$2r$" },
      { id: "B", text: "$2\\sqrt{2}r$" },
      // distractor: reports OP = 3r, the distance to the center rather than to the point of tangency
      { id: "C", text: "$3r$" },
      // distractor: adds the squares, 9r^2 + r^2, treating OP as a leg instead of the hypotenuse
      { id: "D", text: "$\\sqrt{10}r$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent from External Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The radius $OT$ is perpendicular to the tangent, so $PT = \\sqrt{(3r)^2 - r^2} = \\sqrt{8r^2} = 2\\sqrt{2}r$.\n\n**The Full Solution:**\nStep 1: A tangent segment is perpendicular to the radius at the point of tangency, so triangle $OTP$ has a right angle at $T$ and hypotenuse $\\overline{OP}$.\nStep 2: By the Pythagorean theorem, $PT^2 = OP^2 - OT^2 = (3r)^2 - r^2 = 9r^2 - r^2 = 8r^2$.\nStep 3: $PT = \\sqrt{8r^2} = 2\\sqrt{2}r$. Check: $(2\\sqrt{2}r)^2 + r^2 = 8r^2 + r^2 = 9r^2 = (3r)^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2r$): subtracts the lengths, $3r - r$, instead of subtracting their squares.\n* Choice C ($3r$): reports $OP$, the distance to the center, not the length of the tangent segment.\n* Choice D ($\\sqrt{10}r$): adds the squares, $9r^2 + r^2$, treating $\\overline{OP}$ as a leg instead of the hypotenuse.\n\n**Test Day Takeaway:** A radius drawn to a point of tangency makes a right angle, and the segment to the center is always the hypotenuse.",
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
    question: "A circle has a radius of $20$ centimeters. An arc of the circle has a central angle of $\\frac{3\\pi}{8}$ radians, and the length of the arc is $k\\pi$ centimeters. What is the value of $k$?",
    correctAnswer: "7.5",
    explanation: "**SAT Pattern: Arc Length in Radians**\n\n**The correct answer is $7.5$.**\n\n**The Fast Way (~20s):** $s = r\\theta = 20 \\cdot \\frac{3\\pi}{8} = 7.5\\pi$, so $k = 7.5$.\n\n**The Full Solution:**\nStep 1: When the central angle $\\theta$ is in radians, the arc length is $s = r\\theta$.\nStep 2: Substitute $r = 20$ and $\\theta = \\frac{3\\pi}{8}$: $s = 20 \\cdot \\frac{3\\pi}{8} = \\frac{60\\pi}{8}$.\nStep 3: $\\frac{60}{8} = 7.5$, so the arc length is $7.5\\pi$ centimeters and $k = 7.5$. Check: the circumference is $40\\pi$, and the arc is $\\frac{3\\pi/8}{2\\pi} = \\frac{3}{16}$ of it: $\\frac{3}{16}(40\\pi) = 7.5\\pi$ ✓\n\n**Common Mistakes:**\n* $15$: uses the diameter $40$ in place of the radius.\n* $75$: uses the sector-area formula $\\frac{1}{2}r^2\\theta = \\frac{1}{2}(400)\\left(\\frac{3\\pi}{8}\\right) = 75\\pi$, which is an area, not a length.\n* $0.375$: reports the coefficient $\\frac{3}{8}$ from the angle and never multiplies by the radius.\n\n**Test Day Takeaway:** With the angle in radians, arc length is simply $r\\theta$; no division by $360$ or $2\\pi$ is needed.",
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
    question: "A rectangle has a perimeter of $206$ centimeters, and the length of its longer side is $55$ centimeters. What is the length, in centimeters, of a diagonal of the rectangle?",
    choices: [
      // distractor: subtracts the two side lengths, 55 - 48, instead of combining their squares
      { id: "A", text: "$7$" },
      // distractor: reports the shorter side and stops before the diagonal
      { id: "B", text: "$48$" },
      { id: "C", text: "$73$" },
      // distractor: adds the two side lengths, 55 + 48, which is half the perimeter
      { id: "D", text: "$103$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rectangle Diagonal**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Half the perimeter is $103$, so the shorter side is $103 - 55 = 48$, and the diagonal is $\\sqrt{55^2 + 48^2} = 73$.\n\n**The Full Solution:**\nStep 1: The perimeter is $2(\\ell + w) = 206$, so $\\ell + w = 103$.\nStep 2: With $\\ell = 55$, the shorter side is $w = 103 - 55 = 48$ centimeters.\nStep 3: A diagonal is the hypotenuse of a right triangle with legs $55$ and $48$: $\\sqrt{3{,}025 + 2{,}304} = \\sqrt{5{,}329} = 73$ centimeters. Check: $73^2 = 5{,}329$ and $2(55 + 48) = 206$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): subtracts the side lengths instead of combining their squares.\n* Choice B ($48$): finds the missing side and stops there.\n* Choice D ($103$): adds the two sides, which is half the perimeter, not the diagonal.\n\n**Test Day Takeaway:** Halve the perimeter to get $\\ell + w$, find the missing side, and only then apply the Pythagorean theorem.",
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
    question: "A sphere has a radius of $5$ centimeters. Which of the following is closest to the volume, in cubic centimeters, of the sphere?",
    choices: [
      // distractor: squares the radius instead of cubing it, (4/3) pi (5^2)
      { id: "A", text: "$105$" },
      // distractor: computes 4 pi r^2, the surface area, instead of the volume
      { id: "B", text: "$314$" },
      { id: "C", text: "$524$" },
      // distractor: drops the 1/3 from 4/3, computing 4 pi (5^3)
      { id: "D", text: "$1{,}571$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Sphere Volume Approximation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $V = \\frac{4}{3}\\pi(5)^{3} = \\frac{500\\pi}{3} \\approx 523.6$, closest to $524$.\n\n**The Full Solution:**\nStep 1: The volume of a sphere is $V = \\frac{4}{3}\\pi r^{3}$.\nStep 2: With $r = 5$: $V = \\frac{4}{3}\\pi(125) = \\frac{500\\pi}{3}$.\nStep 3: $\\frac{500\\pi}{3} \\approx 523.6$, so the closest choice is $524$. Check: a cube with edge $10$ holds this sphere and has volume $1{,}000$, and $523.6$ is a little more than half of that ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($105$): uses $r^{2} = 25$ instead of $r^{3} = 125$.\n* Choice B ($314$): is $4\\pi r^{2} \\approx 314$, the surface area of the sphere, not its volume.\n* Choice D ($1{,}571$): uses $4\\pi r^{3}$, leaving out the division by $3$.\n\n**Test Day Takeaway:** Sphere volume: $\\frac{4}{3}\\pi r^{3}$. Cube the radius, and do not drop the $\\frac{1}{3}$.",
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
    question: "What is the area of the triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15, 0], [9.6, 7.2]], sideLabels: ["15", "9", "12"], showRightAngle: false, rightAngleVertex: 2, figureNote: true } },
    choices: [
      { id: "A", text: "$54$" },
      // distractor: uses the sides 9 and 15 as base and height, computing (1/2)(9)(15)
      { id: "B", text: "$67.5$" },
      // distractor: uses the sides 12 and 15 as base and height, computing (1/2)(12)(15)
      { id: "C", text: "$90$" },
      // distractor: multiplies the legs 9 and 12 and forgets the 1/2
      { id: "D", text: "$108$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Classify Triangle by Pythagorean Test**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Since $9^{2} + 12^{2} = 15^{2}$, the triangle is a right triangle with legs $9$ and $12$, so its area is $\\frac{1}{2}(9)(12) = 54$.\n\n**The Full Solution:**\nStep 1: Test the side lengths: $9^{2} + 12^{2} = 81 + 144 = 225 = 15^{2}$.\nStep 2: Because the squares of the two shorter sides add to the square of the longest side, the triangle is a right triangle, and the sides of length $9$ and $12$ are its legs.\nStep 3: The legs are a base and its height, so the area is $\\frac{1}{2}(9)(12) = 54$. Check: the height to the side of length $15$ is $\\frac{9 \\cdot 12}{15} = 7.2$, and $\\frac{1}{2}(15)(7.2) = 54$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($67.5$): uses the sides of length $9$ and $15$, but they do not meet at a right angle, so $15$ is not the height to the side of length $9$.\n* Choice C ($90$): uses the sides of length $12$ and $15$, which also do not meet at a right angle.\n* Choice D ($108$): multiplies the legs correctly but forgets the $\\frac{1}{2}$ in the triangle area formula.\n\n**Test Day Takeaway:** If $a^{2} + b^{2} = c^{2}$ for the side lengths, the triangle is a right triangle and the two shorter sides are a base and height.",
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
    question: "An angle has a measure of $d$ degrees, where $d > 0$. Which expression represents the measure of this angle in radians?",
    choices: [
      // distractor: uses the reciprocal factor 180/pi, which converts radians to degrees
      { id: "A", text: "$\\frac{180d}{\\pi}$" },
      // distractor: divides by 180 pi instead of multiplying by pi/180
      { id: "B", text: "$\\frac{d}{180\\pi}$" },
      // distractor: multiplies by 180 pi, making the measure larger instead of smaller
      { id: "C", text: "$180\\pi d$" },
      { id: "D", text: "$\\frac{\\pi d}{180}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Radian-Degree Conversion Factor**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Since $180^{\\circ} = \\pi$ radians, each degree is $\\frac{\\pi}{180}$ radians, so $d$ degrees is $\\frac{\\pi d}{180}$ radians.\n\n**The Full Solution:**\nStep 1: A straight angle measures $180^{\\circ}$ and also $\\pi$ radians, so $1^{\\circ} = \\frac{\\pi}{180}$ radians.\nStep 2: Multiply the degree measure by that factor: $d \\cdot \\frac{\\pi}{180} = \\frac{\\pi d}{180}$ radians.\nStep 3: Check with a known angle: $d = 90$ gives $\\frac{90\\pi}{180} = \\frac{\\pi}{2}$ radians, the radian measure of a right angle ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{180d}{\\pi}$): uses the reciprocal factor, which converts radians to degrees.\n* Choice B ($\\frac{d}{180\\pi}$): divides by $180\\pi$ rather than multiplying by $\\frac{\\pi}{180}$; $d = 90$ would give about $0.16$, far too small.\n* Choice C ($180\\pi d$): multiplies by $180\\pi$, making the measure larger instead of smaller.\n\n**Test Day Takeaway:** Build the factor from $180^{\\circ} = \\pi$ radians and put the unit you want on top: degrees to radians means multiplying by $\\frac{\\pi}{180}$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "conceptual-understanding",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-043",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The radius of a circle is $2.5$ meters. What is the area, in square meters, of the circle?",
    choices: [
      // distractor: computes the circumference 2 pi (2.5) = 5 pi instead of the area
      { id: "A", text: "$5\\pi$" },
      { id: "B", text: "$6.25\\pi$" },
      // distractor: multiplies the radius by the diameter, pi (2.5)(5), instead of squaring the radius
      { id: "C", text: "$12.5\\pi$" },
      // distractor: squares the diameter 5 instead of the radius 2.5
      { id: "D", text: "$25\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $A = \\pi r^{2} = \\pi(2.5)^{2} = 6.25\\pi$.\n\n**The Full Solution:**\nStep 1: The area of a circle with radius $r$ is $A = \\pi r^{2}$.\nStep 2: Substitute $r = 2.5$: $A = \\pi(2.5)^{2}$.\nStep 3: $(2.5)^{2} = 2.5 \\cdot 2.5 = 6.25$, so the area is $6.25\\pi$ square meters. Check: $\\frac{6.25\\pi}{\\pi} = 6.25$ and $\\sqrt{6.25} = 2.5$, the given radius ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\pi$): is $2\\pi(2.5)$, the circumference of the circle, not its area.\n* Choice C ($12.5\\pi$): multiplies the radius $2.5$ by the diameter $5$ instead of multiplying the radius by itself.\n* Choice D ($25\\pi$): squares the diameter $5$ instead of the radius $2.5$.\n\n**Test Day Takeaway:** Area uses the radius squared, $\\pi r^{2}$; circumference uses the radius once, $2\\pi r$. With a decimal radius, square it carefully: $(2.5)^{2} = 6.25$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "annulus-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-044",
    domain: "geometry",
    skills: ["triangle-angle-sum"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In triangle $PQR$, the measure of angle $P$ is $34°$, and angle $Q$ is obtuse. Which of the following could be the measure, in degrees, of angle $R$?",
    choices: [
      { id: "A", text: "$50$" },
      // distractor: treats angle Q as exactly 90 degrees, but a right angle is not obtuse
      { id: "B", text: "$56$" },
      // distractor: splits 180 - 34 = 146 evenly between Q and R, which makes Q acute
      { id: "C", text: "$73$" },
      // distractor: uses 180 - 34 = 146 and forgets that angle Q also takes part of the 180 degrees
      { id: "D", text: "$146$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Angles $Q$ and $R$ share $180 - 34 = 146$ degrees, and $Q > 90$, so $R < 56$. Only $50$ works.\n\n**The Full Solution:**\nStep 1: The angles of a triangle add to $180°$, so $Q + R = 180 - 34 = 146$.\nStep 2: Angle $Q$ is obtuse, so $Q > 90$. Then $R = 146 - Q < 146 - 90 = 56$.\nStep 3: Of the choices, only $50$ is less than $56$. Check: if $R = 50$, then $Q = 96$, which is obtuse, and $34 + 96 + 50 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($56$): gives $Q = 146 - 56 = 90$, a right angle, which is not obtuse.\n* Choice C ($73$): gives $Q = 146 - 73 = 73$, which is acute.\n* Choice D ($146$): leaves $0°$ for angle $Q$.\n\n**Test Day Takeaway:** Turn each condition into an inequality: the angle sum fixes $Q + R$, and \"obtuse\" means greater than $90°$.",
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
    question: "The height of a right circular cylinder is $3$ times its radius, and the volume of the cylinder is $192\\pi$ cubic centimeters. What is the radius, in centimeters, of the cylinder?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~30s):** With $h = 3r$, the volume is $\\pi r^{2}(3r) = 3\\pi r^{3}$, so $3r^{3} = 192$, $r^{3} = 64$, and $r = 4$.\n\n**The Full Solution:**\nStep 1: Write the height in terms of the radius: $h = 3r$.\nStep 2: Substitute into $V = \\pi r^{2}h$: $\\pi r^{2}(3r) = 3\\pi r^{3} = 192\\pi$.\nStep 3: Divide by $3\\pi$ to get $r^{3} = 64$, so $r = 4$ centimeters. Check: $h = 12$, and $\\pi(4^{2})(12) = 192\\pi$ ✓\n\n**Common Mistakes:**\n* $64$: stops at $r^{3}$ without taking the cube root.\n* $8$: writes $3r^{2} = 192$, losing the factor of $r$ that comes from the height.\n* $12$: reports the height $3r$ instead of the radius.\n\n**Test Day Takeaway:** When the height is a multiple of the radius, $\\pi r^{2}h$ becomes a multiple of $r^{3}$; solve for $r^{3}$, then take the cube root.",
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
    question: "$x^{2} + y^{2} - 10x + 12y - 3 = 0$\nIn the $xy$-plane, the graph of the given equation is a circle. What is the area of the circle?",
    choices: [
      // distractor: gives the circumference 2(pi)(8) = 16 pi instead of the area
      { id: "A", text: "$16\\pi$" },
      // distractor: forgets to move the constant -3 to the right side, using r^2 = 25 + 36 = 61
      { id: "B", text: "$61\\pi$" },
      { id: "C", text: "$64\\pi$" },
      // distractor: uses the diameter 16 as the radius, giving pi(16^2) = 256 pi
      { id: "D", text: "$256\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle Equation to Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~50s):** Completing the square gives $(x - 5)^2 + (y + 6)^2 = 64$, so $r^2 = 64$ and the area is $64\\pi$.\n\n**The Full Solution:**\nStep 1: Group the terms and move the constant: $(x^2 - 10x) + (y^2 + 12y) = 3$.\nStep 2: Complete each square by adding $25$ and $36$ to both sides: $(x - 5)^2 + (y + 6)^2 = 3 + 25 + 36 = 64$.\nStep 3: The circle has $r^2 = 64$, so its area is $\\pi r^2 = 64\\pi$. Check: expanding $(x - 5)^2 + (y + 6)^2 = 64$ gives $x^2 - 10x + 25 + y^2 + 12y + 36 = 64$, which simplifies to the given equation ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($16\\pi$): gives the circumference $2\\pi r$ instead of the area.\n* Choice B ($61\\pi$): forgets to move the constant $-3$ to the right side, using $r^2 = 25 + 36$.\n* Choice D ($256\\pi$): uses the diameter $16$ as the radius.\n\n**Test Day Takeaway:** After completing the square, the number on the right is $r^2$, which is exactly what the area formula $\\pi r^2$ needs.",
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
    question: "In the right triangle shown, $\\sin\\theta = \\frac{3}{5}$. What is the value of $x$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [36, 0], [36, 27]], labels: ["θ", "", ""], sideLabels: ["36", "x", ""], rightAngleVertex: 1 } },
    choices: [
      // distractor: multiplies 36 by sin(theta) = 3/5, treating 36 as the hypotenuse
      { id: "A", text: "$21.6$" },
      { id: "B", text: "$27$" },
      // distractor: multiplies 36 by cos(theta) = 4/5
      { id: "C", text: "$28.8$" },
      // distractor: finds the hypotenuse, 36(5/4), instead of the leg x
      { id: "D", text: "$45$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Recover Tangent from Sine (3-4-5 Triple)**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $\\sin\\theta = \\frac{3}{5}$ gives a $3$-$4$-$5$ triangle, so $\\tan\\theta = \\frac{3}{4}$ and $x = 36 \\cdot \\frac{3}{4} = 27$.\n\n**The Full Solution:**\nStep 1: $\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{3}{5}$, so the sides are in the ratio $3 : 4 : 5$, since $3^2 + 4^2 = 5^2$.\nStep 2: In the figure, the side of length $36$ is the leg adjacent to $\\theta$ and $x$ is the leg opposite $\\theta$, so $\\tan\\theta = \\frac{x}{36}$, and $\\tan\\theta = \\frac{3}{4}$.\nStep 3: $x = 36 \\cdot \\frac{3}{4} = 27$. Check: the hypotenuse is $\\sqrt{36^2 + 27^2} = \\sqrt{2{,}025} = 45$, and $\\frac{27}{45} = \\frac{3}{5}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($21.6$): multiplies $36$ by $\\sin\\theta = \\frac{3}{5}$, which treats $36$ as the hypotenuse.\n* Choice C ($28.8$): multiplies $36$ by $\\cos\\theta = \\frac{4}{5}$.\n* Choice D ($45$): finds the hypotenuse, $36 \\cdot \\frac{5}{4}$, instead of the leg $x$.\n\n**Test Day Takeaway:** Given one trig ratio, rebuild the whole triangle from it, then pick the ratio that links the side you know to the side you want.",
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
    question: "In the figure shown, triangle $PQR$ is similar to triangle $STU$, and side $PQ$ corresponds to side $ST$. The area of triangle $PQR$ is $16$ square units. What is the area, in square units, of triangle $STU$?",
    diagram: { type: "similarTriangles", params: { triangle1: { labels: ["P", "Q", "R"], sideLabels: ["10", "", ""] }, triangle2: { labels: ["S", "T", "U"], sideLabels: ["25", "", ""] }, figureNote: true } },
    choices: [
      // distractor: scales the area by the side ratio 5/2 instead of its square
      { id: "A", text: "$40$" },
      { id: "B", text: "$100$" },
      // distractor: cubes the side ratio: 16 x 125/8 = 250
      { id: "C", text: "$250$" },
      // distractor: multiplies the area by 25, the side length itself
      { id: "D", text: "$400$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area Scaling by Square of Linear Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** The side ratio is $\\frac{25}{10} = \\frac{5}{2}$, so the area ratio is $\\frac{25}{4}$, and $16 \\cdot \\frac{25}{4} = 100$.\n\n**The Full Solution:**\nStep 1: Corresponding sides $PQ$ and $ST$ have lengths $10$ and $25$, so the scale factor from triangle $PQR$ to triangle $STU$ is $\\frac{25}{10} = \\frac{5}{2}$.\nStep 2: Areas of similar figures are in the ratio of the square of the scale factor: $\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$.\nStep 3: The area of triangle $STU$ is $16 \\cdot \\frac{25}{4} = 100$ square units. Check: $\\frac{100}{16} = 6.25 = 2.5^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($40$): multiplies the area by $\\frac{5}{2}$, the side ratio, instead of its square.\n* Choice C ($250$): cubes the ratio, which is how volumes scale.\n* Choice D ($400$): multiplies the area by $25$, the side length itself.\n\n**Test Day Takeaway:** Lengths scale by $k$, areas by $k^2$, and volumes by $k^3$.",
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
    question: "Two similar right circular cones have base areas in the ratio $9$ to $25$. The volume of the smaller cone is $81$ cubic inches. What is the volume, in cubic inches, of the larger cone?",
    choices: [
      // distractor: finds the length ratio 5/3 but applies it to the volume only once
      { id: "A", text: "$135$" },
      // distractor: applies the area ratio 25/9 to the volume
      { id: "B", text: "$225$" },
      { id: "C", text: "$375$" },
      // distractor: squares the area ratio, 81(25/9)^2, as if 25/9 were the length ratio
      { id: "D", text: "$625$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Volume Scaling by Cube of Linear Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** An area ratio of $\\frac{25}{9}$ means a length ratio of $\\frac{5}{3}$, so the volume ratio is $\\frac{125}{27}$ and the larger volume is $81 \\cdot \\frac{125}{27} = 375$.\n\n**The Full Solution:**\nStep 1: Areas of similar figures scale by the square of the length ratio, so the length ratio is $\\sqrt{\\frac{25}{9}} = \\frac{5}{3}$.\nStep 2: Volumes scale by the cube of the length ratio: $\\left(\\frac{5}{3}\\right)^3 = \\frac{125}{27}$.\nStep 3: The larger cone's volume is $81 \\cdot \\frac{125}{27} = 3 \\cdot 125 = 375$ cubic inches. Check: $\\frac{375}{81} = \\frac{125}{27} = \\left(\\frac{5}{3}\\right)^3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($135$): finds the length ratio $\\frac{5}{3}$ but multiplies the volume by it only once.\n* Choice B ($225$): multiplies the volume by the area ratio $\\frac{25}{9}$.\n* Choice D ($625$): squares $\\frac{25}{9}$, treating the area ratio as if it were the length ratio.\n\n**Test Day Takeaway:** Convert any ratio back to the length ratio first: take the square root of an area ratio, then cube the result for volume.",
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
    question: "In the $xy$-plane, a circle has its center at $(3, -1)$. Line $t$ is tangent to the circle at the point $(7, 2)$. What is the slope of line $t$?",
    correctAnswer: "-4/3",
    explanation: "**SAT Pattern: Tangent Slope from Perpendicular Radius**\n\n**The correct answer is $-\\frac{4}{3}$.**\n\n**The Fast Way (~30s):** The radius from $(3, -1)$ to $(7, 2)$ has slope $\\frac{2 - (-1)}{7 - 3} = \\frac{3}{4}$, and the tangent line is perpendicular to it, so its slope is $-\\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: The point of tangency $(7, 2)$ is on the circle, so the segment from the center $(3, -1)$ to $(7, 2)$ is a radius.\nStep 2: That radius has slope $\\frac{2 - (-1)}{7 - 3} = \\frac{3}{4}$.\nStep 3: A tangent line is perpendicular to the radius at the point of tangency, so the slope of line $t$ is the negative reciprocal of $\\frac{3}{4}$, which is $-\\frac{4}{3}$. Check: $\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = -1$ ✓\n\n**Common Mistakes:**\n* $\\frac{3}{4}$: reports the slope of the radius instead of the tangent line.\n* $\\frac{4}{3}$: takes the reciprocal but drops the negative sign.\n* $-\\frac{3}{4}$: changes the sign without taking the reciprocal.\n\n**Test Day Takeaway:** A tangent line is perpendicular to the radius at the point of tangency: find the radius's slope from the center to that point, then take the negative reciprocal.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "tangent-slope-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-051",
    domain: "geometry",
    skills: ["right-triangles"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The perimeter of an equilateral triangle is $96$ inches. What is the area, in square inches, of the triangle?",
    choices: [
      // distractor: uses half the side length, 16, as the side of the triangle
      { id: "A", text: "$64\\sqrt{3}$" },
      // distractor: uses half the side length, 16, as the base with the correct height
      { id: "B", text: "$128\\sqrt{3}$" },
      { id: "C", text: "$256\\sqrt{3}$" },
      // distractor: multiplies the base by the height and forgets the 1/2
      { id: "D", text: "$512\\sqrt{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Each side is $\\frac{96}{3} = 32$, the height is $16\\sqrt{3}$, and the area is $\\frac{1}{2}(32)(16\\sqrt{3}) = 256\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The three sides are equal, so each side is $\\frac{96}{3} = 32$ inches.\nStep 2: The height splits the triangle into two $30°$-$60°$-$90°$ triangles with short leg $16$ and hypotenuse $32$, so the height is $16\\sqrt{3}$.\nStep 3: The area is $\\frac{1}{2}(32)(16\\sqrt{3}) = 256\\sqrt{3}$ square inches. Check: $16^{2} + (16\\sqrt{3})^{2} = 256 + 768 = 1{,}024 = 32^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($64\\sqrt{3}$): treats $16$ as the side length, giving $\\frac{1}{2}(16)(8\\sqrt{3}) = 64\\sqrt{3}$.\n* Choice B ($128\\sqrt{3}$): uses $16$, half of a side, as the base: $\\frac{1}{2}(16)(16\\sqrt{3}) = 128\\sqrt{3}$.\n* Choice D ($512\\sqrt{3}$): computes $32 \\cdot 16\\sqrt{3}$ and forgets the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** The height of an equilateral triangle with side $s$ is $\\frac{s\\sqrt{3}}{2}$, from the $30°$-$60°$-$90°$ triangle it cuts off.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "composite-geometry",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-052",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Points $A$ and $B$ lie on a circle with center $O$. Arc $AB$ has a measure of $40°$ and a length of $6\\pi$ centimeters. What is the radius, in centimeters, of the circle?",
    choices: [
      // distractor: finds 360/40 = 9 and stops before using the arc length
      { id: "A", text: "$9$" },
      // distractor: uses 180 degrees instead of 360 degrees for the whole circle
      { id: "B", text: "$13.5$" },
      { id: "C", text: "$27$" },
      // distractor: finds the circumference 54 pi and reports 54, which is the diameter
      { id: "D", text: "$54$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** A $40°$ arc is $\\frac{1}{9}$ of the circle, so the circumference is $9(6\\pi) = 54\\pi$ and the radius is $27$.\n\n**The Full Solution:**\nStep 1: The arc measures $40°$, so it is $\\frac{40}{360} = \\frac{1}{9}$ of the circle.\nStep 2: The arc length is $\\frac{1}{9}$ of the circumference, so the circumference is $9(6\\pi) = 54\\pi$ centimeters.\nStep 3: Since $2\\pi r = 54\\pi$, the radius is $r = 27$ centimeters. Check: $\\frac{40}{360}(2\\pi \\cdot 27) = \\frac{1}{9}(54\\pi) = 6\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): is how many $40°$ arcs fit in the circle, not a length.\n* Choice B ($13.5$): uses $180°$ for the whole circle, which makes the arc look like $\\frac{2}{9}$ of the circle.\n* Choice D ($54$): is the diameter: $54\\pi = \\pi d$ gives $d = 54$, and the radius is half of that.\n\n**Test Day Takeaway:** An arc's length is the same fraction of the circumference as its measure is of $360°$. Find the circumference first, then the radius.",
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
    question: "A right square pyramid sits on top of a right rectangular prism, and the two share a square base with side length $6$ meters. The prism has height $7$ meters, and the pyramid has slant height $5$ meters. What is the volume, in cubic meters, of the solid?",
    choices: [
      // distractor: finds only the volume of the prism
      { id: "A", text: "$252$" },
      { id: "B", text: "$300$" },
      // distractor: uses the slant height 5 as the height of the pyramid
      { id: "C", text: "$312$" },
      // distractor: drops the 1/3 from the pyramid volume formula
      { id: "D", text: "$396$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Composite Solid Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** The pyramid's height is $\\sqrt{5^{2} - 3^{2}} = 4$, so the volume is $36(7) + \\frac{1}{3}(36)(4) = 252 + 48 = 300$.\n\n**The Full Solution:**\nStep 1: The prism has base area $6^{2} = 36$ and height $7$, so its volume is $36 \\cdot 7 = 252$ cubic meters.\nStep 2: The slant height runs from the top of the pyramid to the middle of a base edge, which is $3$ meters from the center of the base. So the pyramid's height is $\\sqrt{5^{2} - 3^{2}} = \\sqrt{16} = 4$ meters.\nStep 3: The pyramid's volume is $\\frac{1}{3}(36)(4) = 48$, so the solid's volume is $252 + 48 = 300$ cubic meters. Check: $3^{2} + 4^{2} = 5^{2}$, so the height $4$ fits the slant height $5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($252$): stops after the prism and leaves out the pyramid.\n* Choice C ($312$): uses the slant height $5$ as the pyramid's height, giving $\\frac{1}{3}(36)(5) = 60$ and a total of $312$.\n* Choice D ($396$): uses $36 \\cdot 4 = 144$ for the pyramid, forgetting the $\\frac{1}{3}$.\n\n**Test Day Takeaway:** A pyramid's volume uses its height, not its slant height. The two are linked by a right triangle with half the base edge.",
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
    question: "A right circular cone has a slant height of $15$ centimeters, and the circumference of its base is $18\\pi$ centimeters. The volume of the cone is $k\\pi$ cubic centimeters. What is the value of $k$?",
    correctAnswer: "324",
    explanation: "**SAT Pattern: Cone Volume from Slant Height**\n\n**The correct answer is $324$.**\n\n**The Fast Way (~45s):** The base gives $r = 9$, the slant height gives $h = \\sqrt{15^2 - 9^2} = 12$, and $V = \\frac{1}{3}\\pi(81)(12) = 324\\pi$.\n\n**The Full Solution:**\nStep 1: From $2\\pi r = 18\\pi$, the radius is $r = 9$ centimeters.\nStep 2: The radius, the height, and the slant height form a right triangle with the slant height as hypotenuse, so $h = \\sqrt{15^2 - 9^2} = \\sqrt{225 - 81} = \\sqrt{144} = 12$ centimeters.\nStep 3: $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(81)(12) = 324\\pi$, so $k = 324$. Check: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$ ✓\n\n**Common Mistakes:**\n* $405$: uses the slant height $15$ as the height, computing $\\frac{1}{3}(81)(15)$.\n* $972$: omits the $\\frac{1}{3}$, computing $81(12)$.\n* $36$: forgets to square the radius, computing $\\frac{1}{3}(9)(12)$.\n\n**Test Day Takeaway:** The slant height is a hypotenuse, never the height; solve the right triangle before using $V = \\frac{1}{3}\\pi r^2 h$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-solid",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-055",
    domain: "geometry",
    skills: ["circle-equation", "completing-square-circles"],
    difficulty: "hard",
    type: "fill-in",
    question: "$x^{2} - 6x + y^{2} = 10y + 191$\nThe graph of the given equation in the $xy$-plane is a circle. What is the greatest $y$-coordinate of any point on the circle?",
    correctAnswer: "20",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~40s):** Move $10y$ to the left and complete both squares: $(x - 3)^{2} + (y - 5)^{2} = 225$. The top of the circle is $15$ above the center: $5 + 15 = 20$.\n\n**The Full Solution:**\nStep 1: Subtract $10y$ from both sides so every variable term is on the left: $x^{2} - 6x + y^{2} - 10y = 191$.\nStep 2: Complete the square in each variable: $(x^{2} - 6x + 9) + (y^{2} - 10y + 25) = 191 + 9 + 25$, so $(x - 3)^{2} + (y - 5)^{2} = 225$. The center is $(3, 5)$ and the radius is $15$.\nStep 3: The highest point of the circle is directly above the center, at $y = 5 + 15 = 20$. Check: $(3, 20)$ gives $9 - 18 + 400 = 391$ and $10(20) + 191 = 391$ ✓\n\n**Common Mistakes:**\n* $15$: reports the radius instead of a coordinate.\n* $5$: reports the center's $y$-coordinate without moving up by the radius.\n* $10$: moves $10y$ to the left without changing its sign, so the center becomes $(3, -5)$ and the top of the circle $-5 + 15 = 10$.\n* $-10$: gives the lowest point of the circle, $5 - 15$, instead of the highest.\n\n**Test Day Takeaway:** Before completing the square, collect every $x$ and $y$ term on one side of the equation; the radius then moves you from the center to the highest point.",
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
    question: "In the right triangle shown, $\\sin\\theta = \\frac{20}{29}$. What is the value of $\\tan\\phi$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [21, 0], [21, 20]], labels: ["θ", "", "φ"], sideLabels: ["", "", "29"], rightAngleVertex: 1 } },
    choices: [
      // distractor: copies sin(theta), which equals cos(phi), not tan(phi)
      { id: "A", text: "$\\frac{20}{29}$" },
      // distractor: gives cos(theta), which equals sin(phi)
      { id: "B", text: "$\\frac{21}{29}$" },
      // distractor: gives tan(theta), the reciprocal of tan(phi)
      { id: "C", text: "$\\frac{20}{21}$" },
      { id: "D", text: "$\\frac{21}{20}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Cofunction Identity**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** The legs are $20$ and $\\sqrt{29^2 - 20^2} = 21$; the leg opposite $\\theta$ is adjacent to $\\phi$, so $\\tan\\phi = \\frac{21}{20}$.\n\n**The Full Solution:**\nStep 1: $\\sin\\theta = \\frac{20}{29}$ means the leg opposite $\\theta$ is $20$ and the hypotenuse is $29$, so the other leg is $\\sqrt{29^2 - 20^2} = \\sqrt{441} = 21$.\nStep 2: The two acute angles are complementary, so the leg opposite $\\theta$ (length $20$) is adjacent to $\\phi$, and the leg adjacent to $\\theta$ (length $21$) is opposite $\\phi$.\nStep 3: $\\tan\\phi = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{21}{20}$. Check: $\\tan\\theta = \\frac{20}{21}$, and $\\tan\\theta \\cdot \\tan\\phi = 1$ for complementary angles ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{20}{29}$): copies $\\sin\\theta$, which equals $\\cos\\phi$, not $\\tan\\phi$.\n* Choice B ($\\frac{21}{29}$): gives $\\cos\\theta$, which equals $\\sin\\phi$.\n* Choice C ($\\frac{20}{21}$): gives $\\tan\\theta$, the reciprocal of $\\tan\\phi$.\n\n**Test Day Takeaway:** The two acute angles of a right triangle trade opposite and adjacent legs, so their sines and cosines swap and their tangents are reciprocals.",
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
    question: "Right circular cylinder $A$ has radius $r$ and height $h$. Right circular cylinder $B$ has radius $3r$ and height $\\frac{h}{2}$. The volume of cylinder $B$ is how many times the volume of cylinder $A$?",
    choices: [
      // distractor: multiplies the factors 3 and 1/2 without squaring the radius factor
      { id: "A", text: "$1.5$" },
      { id: "B", text: "$4.5$" },
      // distractor: squares the radius factor but ignores the change in height
      { id: "C", text: "$9$" },
      // distractor: cubes the radius factor as if the cylinders were similar, then multiplies by 1/2
      { id: "D", text: "$13.5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pure Volume Scaling**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $V = \\pi r^2 h$, so the radius factor counts twice and the height factor once: $3^2 \\cdot \\frac{1}{2} = 4.5$.\n\n**The Full Solution:**\nStep 1: The volume of cylinder $A$ is $\\pi r^2 h$.\nStep 2: The volume of cylinder $B$ is $\\pi(3r)^2\\left(\\frac{h}{2}\\right) = \\pi(9r^2)\\left(\\frac{h}{2}\\right) = 4.5\\pi r^2 h$.\nStep 3: Divide: $\\frac{4.5\\pi r^2 h}{\\pi r^2 h} = 4.5$. Check with $r = 1$ and $h = 2$: cylinder $A$ has volume $2\\pi$, cylinder $B$ has volume $\\pi(3^2)(1) = 9\\pi$, and $\\frac{9\\pi}{2\\pi} = 4.5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.5$): multiplies $3 \\cdot \\frac{1}{2}$ without squaring the radius factor.\n* Choice C ($9$): squares the radius factor but ignores the halved height.\n* Choice D ($13.5$): cubes $3$ as if the cylinders were similar, then multiplies by $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Substitute the scaled dimensions into the formula; each factor is raised to the power its variable has in the formula.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "scaling-conceptual",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-058",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the circle shown, the center is $P$, the radius is $18$, and the measure of angle $XPY$ is $\\frac{5\\pi}{6}$ radians. Points $X$ and $Y$ divide the circle into two arcs. What is the length of the longer arc?",
    diagram: { type: "circleWithSector", params: { centralAngle: 150, angleLabel: "5π/6", radius: "18", showRadiusLabel: true, labelCenter: "P", labelPoint1: "X", labelPoint2: "Y" } },
    choices: [
      // distractor: finds the shorter arc, 18(5 pi/6) = 15 pi
      { id: "A", text: "$15\\pi$" },
      { id: "B", text: "$21\\pi$" },
      // distractor: gives the whole circumference 2 pi (18) = 36 pi
      { id: "C", text: "$36\\pi$" },
      // distractor: computes the area of the circle outside the angle, (7/12) pi (18^2), instead of an arc length
      { id: "D", text: "$189\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length in Radians**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** The shorter arc is $\\frac{5\\pi}{6} \\div 2\\pi = \\frac{5}{12}$ of the circle, so the longer arc is $\\frac{7}{12}$ of $36\\pi$, which is $21\\pi$.\n\n**The Full Solution:**\nStep 1: A full circle is $2\\pi$ radians, so the arc inside angle $XPY$ is $\\frac{5\\pi/6}{2\\pi} = \\frac{5}{12}$ of the circle, and the longer arc is $1 - \\frac{5}{12} = \\frac{7}{12}$ of the circle.\nStep 2: The circumference is $2\\pi(18) = 36\\pi$.\nStep 3: The longer arc has length $\\frac{7}{12}(36\\pi) = 21\\pi$. Check: the shorter arc is $\\frac{5}{12}(36\\pi) = 15\\pi$, and $15\\pi + 21\\pi = 36\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15\\pi$): is the length of the shorter arc, the one inside angle $XPY$.\n* Choice C ($36\\pi$): is the whole circumference, not one of the two arcs.\n* Choice D ($189\\pi$): takes $\\frac{7}{12}$ of the area $324\\pi$, which is an area, not a length.\n\n**Test Day Takeaway:** A full circle is $2\\pi$ radians or $360°$. Divide the angle by the full turn to get the fraction of the circumference.",
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
    question: "In the figure shown, angle $LMN$ is a right angle and $\\overline{MP}$ is perpendicular to $\\overline{LN}$. What is the perimeter of triangle $LMN$?",
    diagram: { type: "rightTriangleWithAltitude", params: { vertexLabels: ["L", "M", "N", "P"], sideLengths: { PM: "12", PN: "16" }, figureNote: true } },
    correctAnswer: "60",
    explanation: "**SAT Pattern: Altitude to Hypotenuse**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~50s):** $LP = \\frac{12^2}{16} = 9$, so $LN = 25$; the legs are $\\sqrt{9 \\cdot 25} = 15$ and $\\sqrt{16 \\cdot 25} = 20$, and the perimeter is $15 + 20 + 25 = 60$.\n\n**The Full Solution:**\nStep 1: The altitude to the hypotenuse splits triangle $LMN$ into two triangles similar to it, so $MP^2 = LP \\cdot PN$: $144 = LP \\cdot 16$, which gives $LP = 9$.\nStep 2: The hypotenuse is $LN = LP + PN = 9 + 16 = 25$.\nStep 3: Each leg satisfies leg$^2$ = (adjacent segment)(hypotenuse): $LM^2 = 9 \\cdot 25 = 225$, so $LM = 15$, and $MN^2 = 16 \\cdot 25 = 400$, so $MN = 20$. The perimeter is $15 + 20 + 25 = 60$. Check: $15^2 + 20^2 = 625 = 25^2$ ✓\n\n**Common Mistakes:**\n* $25$: reports the hypotenuse $LN$ alone.\n* $47$: adds the altitude $MP = 12$ in place of the hypotenuse: $15 + 20 + 12$.\n* $72$: adds the altitude as a fourth side: $15 + 20 + 25 + 12$.\n\n**Test Day Takeaway:** The altitude to the hypotenuse makes three similar right triangles; the altitude is the geometric mean of the two hypotenuse segments.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "altitude-to-hypotenuse",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-geo-060",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The circle shown has center $O$, and the length of arc $AB$ is $12\\pi$. What is the area of the circle?",
    diagram: { type: "circleWithSector", params: { centralAngle: 144, angleLabel: "144°", labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
    choices: [
      // distractor: stops at the circumference, 30 pi
      { id: "A", text: "$30\\pi$" },
      // distractor: treats 12 pi as the whole circumference, so r = 6
      { id: "B", text: "$36\\pi$" },
      { id: "C", text: "$225\\pi$" },
      // distractor: uses the diameter 30 as the radius
      { id: "D", text: "$900\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** A $144°$ arc is $\\frac{2}{5}$ of the circle, so the circumference is $\\frac{5}{2}(12\\pi) = 30\\pi$, the radius is $15$, and the area is $225\\pi$.\n\n**The Full Solution:**\nStep 1: The central angle is $144°$, so arc $AB$ is $\\frac{144}{360} = \\frac{2}{5}$ of the circle.\nStep 2: The circumference is $12\\pi \\div \\frac{2}{5} = 30\\pi$, so $2\\pi r = 30\\pi$ and $r = 15$.\nStep 3: The area is $\\pi(15)^{2} = 225\\pi$. Check: $\\frac{2}{5}(2\\pi \\cdot 15) = \\frac{2}{5}(30\\pi) = 12\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($30\\pi$): is the circumference; the question asks for the area.\n* Choice B ($36\\pi$): treats $12\\pi$ as the whole circumference, ignoring the $144°$ angle, so $r = 6$ and the area is $36\\pi$.\n* Choice D ($900\\pi$): squares the diameter $30$ instead of the radius $15$.\n\n**Test Day Takeaway:** From an arc: angle fraction gives the circumference, the circumference gives the radius, and the radius gives the area.",
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
    question: "In the right triangle shown, what is the value of $\\cos F$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [12, 0], [12, 9]], labels: ["F", "G", "H"], sideLabels: ["12", "9", "15"], rightAngleVertex: 1 } },
    choices: [
      // distractor: gives sin F, the side opposite F over the hypotenuse, 9/15
      { id: "A", text: "$\\frac{3}{5}$" },
      // distractor: gives tan F, the side opposite F over the side adjacent to F, 9/12
      { id: "B", text: "$\\frac{3}{4}$" },
      { id: "C", text: "$\\frac{4}{5}$" },
      // distractor: inverts the tangent, using adjacent over opposite, 12/9
      { id: "D", text: "$\\frac{4}{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The side adjacent to angle $F$ is $FG = 12$ and the hypotenuse is $FH = 15$, so $\\cos F = \\frac{12}{15} = \\frac{4}{5}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $G$, so the hypotenuse is the side opposite $G$: $FH = 15$.\nStep 2: Of the two legs, $\\overline{FG}$ touches angle $F$, so it is the adjacent leg, with length $12$; $\\overline{GH} = 9$ is the opposite leg.\nStep 3: Cosine is adjacent over hypotenuse: $\\cos F = \\frac{12}{15} = \\frac{4}{5}$. Check: $\\sin F = \\frac{9}{15} = \\frac{3}{5}$, and $\\left(\\frac{3}{5}\\right)^{2} + \\left(\\frac{4}{5}\\right)^{2} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{5}$): this is $\\sin F$, the opposite leg $9$ over the hypotenuse $15$.\n* Choice B ($\\frac{3}{4}$): this is $\\tan F$, the opposite leg $9$ over the adjacent leg $12$.\n* Choice D ($\\frac{4}{3}$): divides the adjacent leg by the opposite leg, $\\frac{12}{9}$, which is the reciprocal of $\\tan F$.\n\n**Test Day Takeaway:** Find the hypotenuse first (it is across from the right angle); then the adjacent leg is the one that touches the named angle.",
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
    question: "Right triangle $JKL$ is shown. What is the value of $\\tan K$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15, 0], [0, 8]], labels: ["J", "K", "L"], sideLabels: ["15", "17", "8"], rightAngleVertex: 0 } },
    choices: [
      // distractor: gives sin K, the opposite leg 8 over the hypotenuse 17
      { id: "A", text: "$\\frac{8}{17}$" },
      { id: "B", text: "$\\frac{8}{15}$" },
      // distractor: gives cos K, the adjacent leg 15 over the hypotenuse 17
      { id: "C", text: "$\\frac{15}{17}$" },
      // distractor: inverts the ratio, dividing the adjacent leg 15 by the opposite leg 8
      { id: "D", text: "$\\frac{15}{8}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The leg opposite $K$ is $JL = 8$ and the leg adjacent to $K$ is $JK = 15$, so $\\tan K = \\frac{8}{15}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $J$, so $KL = 17$ is the hypotenuse.\nStep 2: Angle $K$ touches leg $\\overline{JK}$, so $JK = 15$ is adjacent to $K$; the leg across from $K$ is $JL = 8$.\nStep 3: Tangent is opposite over adjacent: $\\tan K = \\frac{8}{15}$. Check: $8^{2} + 15^{2} = 64 + 225 = 289 = 17^{2}$, so the side lengths are consistent ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{17}$): uses the hypotenuse in the denominator, which gives $\\sin K$.\n* Choice C ($\\frac{15}{17}$): divides the adjacent leg by the hypotenuse, which gives $\\cos K$.\n* Choice D ($\\frac{15}{8}$): puts the adjacent leg on top; that is $\\tan L$, not $\\tan K$.\n\n**Test Day Takeaway:** Tangent never uses the hypotenuse: it is the leg across from the angle divided by the leg that touches it.",
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
    question: "In the triangle shown, $\\sin P = \\frac{5}{13}$. What is the length of $\\overline{QR}$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 10]], labels: ["P", "Q", "R"], sideLabels: ["", "", "26"], rightAngleVertex: 1 } },
    choices: [
      // distractor: reads the numerator of the ratio, 5, as the length itself without scaling by the hypotenuse
      { id: "A", text: "$5$" },
      { id: "B", text: "$10$" },
      // distractor: finds the leg adjacent to P, PQ = 26(12/13) = 24, instead of the leg opposite P
      { id: "C", text: "$24$" },
      // distractor: divides the hypotenuse by the ratio instead of multiplying, computing 26 / (5/13) = 67.6
      { id: "D", text: "$67.6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $\\overline{QR}$ is opposite angle $P$ and $PR = 26$ is the hypotenuse, so $QR = 26 \\cdot \\frac{5}{13} = 10$.\n\n**The Full Solution:**\nStep 1: The right angle is at $Q$, so the hypotenuse is $PR = 26$, and the leg across from angle $P$ is $\\overline{QR}$.\nStep 2: Sine is opposite over hypotenuse, so $\\frac{QR}{26} = \\frac{5}{13}$.\nStep 3: Multiply both sides by $26$: $QR = \\frac{5 \\cdot 26}{13} = 10$. Check: the other leg is $\\sqrt{26^{2} - 10^{2}} = \\sqrt{576} = 24$, and $\\frac{10}{26} = \\frac{5}{13}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): takes the numerator of $\\frac{5}{13}$ as the length. The ratio describes a $5$-$12$-$13$ triangle; this one is twice as large.\n* Choice C ($24$): finds the other leg, $\\overline{PQ}$, which is adjacent to $P$ rather than opposite it.\n* Choice D ($67.6$): divides $26$ by $\\frac{5}{13}$ instead of multiplying, giving a leg longer than the hypotenuse.\n\n**Test Day Takeaway:** A trig ratio times the hypotenuse gives a leg; any leg longer than the hypotenuse means the ratio was applied upside down.",
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
    question: "In the triangle shown, what is the value of $x$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15.5885, 0], [15.5885, 9]], labels: ["30°", "", ""], sideLabels: ["x", "", "18"], rightAngleVertex: 1 } },
    choices: [
      // distractor: finds the leg opposite the 30 degree angle, 18/2 = 9, instead of the leg adjacent to it
      { id: "A", text: "$9$" },
      // distractor: uses the 45-45-90 relationship, dividing the hypotenuse by the square root of 2
      { id: "B", text: "$9\\sqrt{2}$" },
      { id: "C", text: "$9\\sqrt{3}$" },
      // distractor: multiplies the hypotenuse by the square root of 3 instead of the shorter leg
      { id: "D", text: "$18\\sqrt{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** In a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle the leg adjacent to the $30^\\circ$ angle is $\\frac{\\sqrt{3}}{2}$ of the hypotenuse: $x = 18 \\cdot \\frac{\\sqrt{3}}{2} = 9\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The side labeled $18$ is across from the right angle, so it is the hypotenuse; the side labeled $x$ touches the $30^\\circ$ angle, so it is the adjacent leg.\nStep 2: Cosine is adjacent over hypotenuse: $\\cos 30^\\circ = \\frac{x}{18}$, and $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$.\nStep 3: So $x = 18 \\cdot \\frac{\\sqrt{3}}{2} = 9\\sqrt{3}$. Check: the leg opposite $30^\\circ$ is $\\frac{18}{2} = 9$, and $9^{2} + \\left(9\\sqrt{3}\\right)^{2} = 81 + 243 = 324 = 18^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): is the leg opposite the $30^\\circ$ angle (half the hypotenuse), not the leg labeled $x$.\n* Choice B ($9\\sqrt{2}$): divides $18$ by $\\sqrt{2}$, a rule for $45^\\circ$-$45^\\circ$-$90^\\circ$ triangles.\n* Choice D ($18\\sqrt{3}$): multiplies the hypotenuse by $\\sqrt{3}$; the $\\sqrt{3}$ multiplies the shorter leg, $9$.\n\n**Test Day Takeaway:** In a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle the sides are $a$, $a\\sqrt{3}$ and $2a$; find $a$ from the hypotenuse first, then build the other leg from it.",
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
    question: "In right triangle $ABC$ shown, $AC = 100$ and $\\tan A = \\frac{7}{24}$. What is the length of $\\overline{BC}$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [96, 0], [96, 28]], labels: ["A", "B", "C"], sideLabels: ["", "", ""], rightAngleVertex: 1 } },
    choices: [
      // distractor: uses the numerator of the tangent ratio, 7, as the length without scaling
      { id: "A", text: "$7$" },
      // distractor: uses the denominator of the tangent ratio, 24, as a length
      { id: "B", text: "$24$" },
      { id: "C", text: "$28$" },
      // distractor: finds the leg adjacent to A, AB = 4(24) = 96, instead of the leg opposite A
      { id: "D", text: "$96$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $\\tan A = \\frac{7}{24}$ describes a $7$-$24$-$25$ triangle; a hypotenuse of $100$ is $4$ times $25$, so $BC = 4(7) = 28$.\n\n**The Full Solution:**\nStep 1: The right angle is at $B$, so $\\overline{BC}$ is the leg opposite $A$ and $\\overline{AB}$ is adjacent to $A$. Write $BC = 7k$ and $AB = 24k$ for some positive $k$.\nStep 2: The hypotenuse is $\\sqrt{(7k)^{2} + (24k)^{2}} = \\sqrt{625k^{2}} = 25k$, and it equals $100$, so $k = 4$.\nStep 3: Then $BC = 7(4) = 28$. Check: $AB = 96$, $\\frac{28}{96} = \\frac{7}{24}$, and $28^{2} + 96^{2} = 784 + 9{,}216 = 10{,}000 = 100^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): treats the ratio's numerator as the actual length; the triangle is $4$ times the $7$-$24$-$25$ triangle.\n* Choice B ($24$): takes the ratio's denominator as a length, which is neither leg of this triangle.\n* Choice D ($96$): finds $AB$, the leg adjacent to $A$, instead of the leg opposite $A$.\n\n**Test Day Takeaway:** A tangent ratio fixes the shape, not the size: build the hypotenuse of the ratio triangle, then scale everything to the given side.",
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
    question: "In the triangle shown, $\\sin\\theta = \\frac{3}{5}$. What is the area, in square units, of the triangle?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 18]], labels: ["θ", "", ""], sideLabels: ["", "", "30"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$216$" },
      // distractor: uses the hypotenuse 30 and the leg 18 as base and height
      { id: "B", text: "$270$" },
      // distractor: uses the hypotenuse 30 and the leg 24 as base and height
      { id: "C", text: "$360$" },
      // distractor: multiplies the legs 18 and 24 and forgets the 1/2
      { id: "D", text: "$432$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $\\sin\\theta = \\frac{3}{5}$ with hypotenuse $30$ gives legs $18$ and $24$, so the area is $\\frac{1}{2}(18)(24) = 216$.\n\n**The Full Solution:**\nStep 1: The hypotenuse is $30$, and $\\sin\\theta = \\frac{\\text{opposite}}{30} = \\frac{3}{5}$, so the side opposite $\\theta$ is $18$.\nStep 2: By the Pythagorean theorem, the other leg is $\\sqrt{30^{2} - 18^{2}} = \\sqrt{576} = 24$.\nStep 3: The legs are a base and its height, so the area is $\\frac{1}{2}(18)(24) = 216$ square units. Check: the sides $18$, $24$, $30$ are $6$ times $3$, $4$, $5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($270$): uses the hypotenuse as a height, but the hypotenuse is not perpendicular to either leg.\n* Choice C ($360$): also uses the hypotenuse with a leg; only the two legs meet at the right angle.\n* Choice D ($432$): multiplies the legs correctly but forgets the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** A trig ratio and one side give a second side; the Pythagorean theorem gives the third. A right triangle's area is half the product of its legs.",
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
    question: "In the triangle shown, $\\cos R = \\frac{8}{17}$. What is the length of $\\overline{RT}$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 45]], labels: ["R", "S", "T"], sideLabels: ["x", "x + 21", ""], rightAngleVertex: 1 } },
    correctAnswer: "51",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is 51.**\n\n**The Fast Way (~50s):** $\\cos R = \\frac{8}{17}$ makes the legs $RS = 8k$ and $ST = 15k$ with $RT = 17k$; the legs differ by $7k = 21$, so $k = 3$ and $RT = 51$.\n\n**The Full Solution:**\nStep 1: The right angle is at $S$, so $RT$ is the hypotenuse and $RS = x$ is the leg adjacent to $R$. From $\\cos R = \\frac{8}{17}$, write $RS = 8k$ and $RT = 17k$ for some positive $k$; then $ST = \\sqrt{(17k)^{2} - (8k)^{2}} = \\sqrt{225k^{2}} = 15k$.\nStep 2: The figure gives $ST - RS = (x + 21) - x = 21$, so $15k - 8k = 21$, which gives $7k = 21$ and $k = 3$.\nStep 3: Therefore $RT = 17(3) = 51$. Check: $RS = 24$, $ST = 45 = 24 + 21$, $24^{2} + 45^{2} = 576 + 2{,}025 = 2{,}601 = 51^{2}$, and $\\cos R = \\frac{24}{51} = \\frac{8}{17}$ ✓\n\n**Common Mistakes:**\n* $17$: reads the denominator of $\\frac{8}{17}$ as the hypotenuse without scaling; legs of $8$ and $15$ differ by $7$, not $21$.\n* $45$: finds $ST = x + 21$ correctly but reports that leg instead of $\\overline{RT}$.\n* $119/3$: sets $17k - 8k = 21$, as if $21$ were the gap between the hypotenuse and $RS$; that gives $k = \\frac{7}{3}$ and $RT = \\frac{119}{3}$.\n\n**Test Day Takeaway:** When the figure labels two legs with a difference, turn the trig ratio into $8k$, $15k$, $17k$ and let the given difference fix $k$.",
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
    question: "In triangle $DEF$, angle $F$ is a right angle and $\\cos D = \\frac{20}{29}$. If $EF = 63$, what is the perimeter of triangle $DEF$?",
    choices: [
      // distractor: adds the sides of the 20-21-29 ratio triangle, 20 + 21 + 29 = 70, without scaling by 3
      { id: "A", text: "$70$" },
      // distractor: adds only the two legs, DF + EF = 60 + 63, and leaves out the hypotenuse
      { id: "B", text: "$123$" },
      { id: "C", text: "$210$" },
      // distractor: treats EF as the leg adjacent to D, so 20k = 63, k = 3.15, and the perimeter is 70(3.15) = 220.5
      { id: "D", text: "$220.5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** $\\cos D = \\frac{20}{29}$ gives a $20$-$21$-$29$ triangle, and $EF$, the leg opposite $D$, is $21k = 63$, so $k = 3$ and the perimeter is $70(3) = 210$.\n\n**The Full Solution:**\nStep 1: The right angle is at $F$, so $DE$ is the hypotenuse, $DF$ is adjacent to $D$, and $EF$ is opposite $D$. From $\\cos D = \\frac{20}{29}$, write $DF = 20k$ and $DE = 29k$.\nStep 2: The opposite leg is $EF = \\sqrt{(29k)^{2} - (20k)^{2}} = \\sqrt{441k^{2}} = 21k$. Since $EF = 63$, $k = 3$.\nStep 3: The sides are $DF = 60$, $EF = 63$ and $DE = 87$, so the perimeter is $60 + 63 + 87 = 210$. Check: $60^{2} + 63^{2} = 3{,}600 + 3{,}969 = 7{,}569 = 87^{2}$ and $\\frac{60}{87} = \\frac{20}{29}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($70$): adds the sides of the ratio triangle, $20 + 21 + 29$, and never scales up to match $EF = 63$.\n* Choice B ($123$): adds the two legs, $60 + 63$, and leaves out the hypotenuse $87$.\n* Choice D ($220.5$): pairs $EF$ with the $20$ in the cosine, but $EF$ is opposite $D$, not adjacent to it; that gives $k = 3.15$ and $70(3.15) = 220.5$.\n\n**Test Day Takeaway:** Before using a given side, decide whether it is adjacent to, opposite, or across from the named angle; the cosine only describes the adjacent leg and the hypotenuse.",
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
    question: "$x^{2} + y^{2} - 12y = 0$\nThe graph of the given equation in the $xy$-plane is a circle. Which of the following gives the center of the circle and its radius?",
    choices: [
      // distractor: takes the sign of -12y directly, putting the center at y = -6
      { id: "A", text: "The center is at $(0, -6)$ and the radius is $6$." },
      { id: "B", text: "The center is at $(0, 6)$ and the radius is $6$." },
      // distractor: reports r^2 = 36 as the radius
      { id: "C", text: "The center is at $(0, 6)$ and the radius is $36$." },
      // distractor: puts the 6 in the x-coordinate even though only y was completed
      { id: "D", text: "The center is at $(6, 0)$ and the radius is $6$." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Add $36$ to both sides: $x^{2} + (y - 6)^{2} = 36$, so the center is $(0, 6)$ and the radius is $6$.\n\n**The Full Solution:**\nStep 1: There is no $x$ term, so $x^{2}$ is already $(x - 0)^{2}$.\nStep 2: Complete the square in $y$: half of $-12$ is $-6$, and $(-6)^{2} = 36$. Adding $36$ to both sides gives $x^{2} + (y - 6)^{2} = 36$.\nStep 3: The center is $(0, 6)$ and $r^{2} = 36$, so $r = 6$. Check: $(0, 12)$ is $6$ units above the center, and $0^{2} + 12^{2} - 12(12) = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (The center is at $(0, -6)$ and the radius is $6$.): reads the center straight from $-12y$; in $(y - 6)^{2}$ the center's $y$-coordinate is $+6$.\n* Choice C (The center is at $(0, 6)$ and the radius is $36$.): stops at $r^{2} = 36$; the radius is its square root, $6$.\n* Choice D (The center is at $(6, 0)$ and the radius is $6$.): swaps the coordinates; the completed square is in $y$, so the $6$ belongs to the $y$-coordinate.\n\n**Test Day Takeaway:** To read a circle written as $x^{2} + y^{2} + \\dots = 0$, complete the square in each variable that has a linear term.",
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
    question: "$x^{2} + y^{2} + 10x = 39$\nIn the $xy$-plane, the graph of the given equation is a circle. What is the radius of the circle?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** Add $25$ to both sides: $(x + 5)^{2} + y^{2} = 64$, so the radius is $8$.\n\n**The Full Solution:**\nStep 1: Complete the square in $x$: half of $10$ is $5$, and $5^{2} = 25$.\nStep 2: Add $25$ to both sides: $x^{2} + 10x + 25 + y^{2} = 39 + 25$, which is $(x + 5)^{2} + y^{2} = 64$.\nStep 3: So $r^{2} = 64$ and $r = 8$. Check: the point $(3, 0)$ is $8$ units from the center $(-5, 0)$, and $3^{2} + 0^{2} + 10(3) = 39$ ✓\n\n**Common Mistakes:**\n* $64$: reports $r^{2}$ instead of $r$.\n* $\\sqrt{39}$: forgets to add $25$ to the right side when completing the square.\n* $5$: gives the distance from the center to the $y$-axis instead of the radius.\n\n**Test Day Takeaway:** Whatever you add to complete the square on the left, add to the right too; the right side is then $r^{2}$.",
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
    question: "$x^{2} + y^{2} + ax - 18y + 45 = 0$\nIn the given equation, $a$ is a constant. The graph of the equation in the $xy$-plane is a circle with center $(7, 9)$. What is the value of $a$?",
    choices: [
      { id: "A", text: "$-14$" },
      // distractor: sets a equal to the opposite of the center coordinate, -7, forgetting that a equals -2h
      { id: "B", text: "$-7$" },
      // distractor: copies the center's x-coordinate, 7, as the coefficient
      { id: "C", text: "$7$" },
      // distractor: doubles the coordinate but drops the sign, using a = 2h instead of a = -2h
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** A center at $x = 7$ comes from $(x - 7)^{2} = x^{2} - 14x + 49$, so $a = -14$.\n\n**The Full Solution:**\nStep 1: A circle with center $(h, k)$ has equation $(x - h)^{2} + (y - k)^{2} = r^{2}$; here $h = 7$.\nStep 2: Expanding $(x - 7)^{2}$ gives $x^{2} - 14x + 49$, so the coefficient of $x$ in the expanded equation is $-14$.\nStep 3: Matching coefficients, $a = -14$. Check: the $y$-terms agree, since $(y - 9)^{2} = y^{2} - 18y + 81$, and $r^{2} = 49 + 81 - 45 = 85 > 0$, so the equation really is a circle ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-7$): uses the opposite of the center coordinate but forgets the factor of $2$ from squaring the binomial.\n* Choice C ($7$): copies the $x$-coordinate of the center as the coefficient.\n* Choice D ($14$): doubles the coordinate but loses the sign; $(x - 7)^{2}$ produces $-14x$.\n\n**Test Day Takeaway:** The linear coefficient is $-2$ times the center coordinate: center $x = 7$ means $-14x$ in the expanded equation.",
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
    question: "$x^{2} - 6x + y^{2} + 20y + 9 = 0$\nThe graph of the given equation in the $xy$-plane is a circle with center $(h, k)$. What is the value of $h + k$?",
    correctAnswer: "-7",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is -7.**\n\n**The Fast Way (~25s):** The center is $\\left(\\frac{6}{2}, -\\frac{20}{2}\\right) = (3, -10)$, so $h + k = -7$.\n\n**The Full Solution:**\nStep 1: Complete the square in $x$: $x^{2} - 6x = (x - 3)^{2} - 9$, so $h = 3$.\nStep 2: Complete the square in $y$: $y^{2} + 20y = (y + 10)^{2} - 100$, so $k = -10$.\nStep 3: Then $h + k = 3 + (-10) = -7$. Check: the equation becomes $(x - 3)^{2} + (y + 10)^{2} = 9 + 100 - 9 = 100$, a circle with center $(3, -10)$ and radius $10$ ✓\n\n**Common Mistakes:**\n* $7$: keeps the signs of the coefficients, taking the center to be $(-3, 10)$.\n* $-14$: uses the whole coefficients, $6 + (-20)$, instead of half of each.\n* $3$: adds the radius to the center coordinates, computing $3 - 10 + 10$.\n\n**Test Day Takeaway:** Halve each linear coefficient and change its sign to read the center; the constant term only affects the radius.",
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
    question: "$x^{2} + y^{2} - 4x + 10y + k = 0$\nIn the given equation, $k$ is a constant. In the $xy$-plane, the graph of the equation is a circle with area $16\\pi$. What is the value of $k$?",
    choices: [
      // distractor: subtracts in the wrong order, setting k = 16 - 29
      { id: "A", text: "$-13$" },
      { id: "B", text: "$13$" },
      // distractor: uses the radius 4 instead of r squared 16, computing k = 29 - 4
      { id: "C", text: "$25$" },
      // distractor: ignores the area condition and sets k equal to 4 + 25, the sum of the completed-square constants
      { id: "D", text: "$29$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** An area of $16\\pi$ means $r^{2} = 16$, and completing the square gives $r^{2} = 4 + 25 - k$, so $29 - k = 16$ and $k = 13$.\n\n**The Full Solution:**\nStep 1: Complete both squares: $x^{2} - 4x = (x - 2)^{2} - 4$ and $y^{2} + 10y = (y + 5)^{2} - 25$, so the equation becomes $(x - 2)^{2} + (y + 5)^{2} = 29 - k$.\nStep 2: The area of a circle is $\\pi r^{2}$, so $\\pi r^{2} = 16\\pi$ gives $r^{2} = 16$.\nStep 3: Set $29 - k = 16$, so $k = 13$. Check: with $k = 13$ the equation is $(x - 2)^{2} + (y + 5)^{2} = 16$, a circle of radius $4$ and area $16\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-13$): solves $k = 16 - 29$, reversing the subtraction in $29 - k = 16$.\n* Choice C ($25$): sets $29 - k$ equal to the radius $4$ instead of to $r^{2} = 16$.\n* Choice D ($29$): adds the two completed-square constants and never uses the area.\n\n**Test Day Takeaway:** An area or circumference condition is really a condition on $r$; translate it to $r^{2}$ before matching it to the completed-square form.",
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
    question: "$x^{2} + y^{2} + 12x + by - 20 = 0$\nIn the given equation, $b$ is a positive constant. The graph of the equation in the $xy$-plane is a circle with radius $9$. What is the value of $b$?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is 10.**\n\n**The Fast Way (~40s):** $r^{2} = 36 + \\frac{b^{2}}{4} + 20 = 81$, so $\\frac{b^{2}}{4} = 25$, $b^{2} = 100$ and, since $b > 0$, $b = 10$.\n\n**The Full Solution:**\nStep 1: Complete the square in $x$: $x^{2} + 12x = (x + 6)^{2} - 36$. Complete the square in $y$: $y^{2} + by = \\left(y + \\frac{b}{2}\\right)^{2} - \\frac{b^{2}}{4}$.\nStep 2: The equation becomes $(x + 6)^{2} + \\left(y + \\frac{b}{2}\\right)^{2} = 36 + \\frac{b^{2}}{4} + 20$. A radius of $9$ means this right side equals $81$, so $\\frac{b^{2}}{4} = 25$.\nStep 3: Then $b^{2} = 100$, and because $b$ is positive, $b = 10$. Check: $(x + 6)^{2} + (y + 5)^{2} = 81$ expands to $x^{2} + y^{2} + 12x + 10y + 61 - 81 = 0$, which is $x^{2} + y^{2} + 12x + 10y - 20 = 0$ ✓\n\n**Common Mistakes:**\n* $5$: reports $\\frac{b}{2} = 5$, the size of the center's $y$-coordinate, without doubling it; using $b^{2}$ in place of $\\frac{b^{2}}{4}$ leads to the same wrong value.\n* $2\\sqrt{65}$: keeps the $-20$ on the right side as $-20$, solving $36 + \\frac{b^{2}}{4} - 20 = 81$, so $\\frac{b^{2}}{4} = 65$.\n* $100$: stops at $b^{2} = 100$ and forgets the square root.\n\n**Test Day Takeaway:** A missing coefficient in a circle equation hides inside its completed square: $by$ contributes $\\frac{b^{2}}{4}$ to $r^{2}$.",
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
    question: "$x^{2} + y^{2} - 8x + 6y + c = 0$\nIn the given equation, $c$ is a constant. In the $xy$-plane, the graph of the equation is a circle that is tangent to the $x$-axis. What is the value of $c$?",
    correctAnswer: "16",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is 16.**\n\n**The Fast Way (~45s):** The center is $(4, -3)$, which is $3$ units from the $x$-axis, so $r = 3$; then $16 + 9 - c = 9$ gives $c = 16$.\n\n**The Full Solution:**\nStep 1: Complete both squares: $(x - 4)^{2} + (y + 3)^{2} = 16 + 9 - c = 25 - c$. The center is $(4, -3)$ and $r^{2} = 25 - c$.\nStep 2: A circle tangent to the $x$-axis touches it at exactly one point, so its radius equals the distance from the center to the $x$-axis, which is $|-3| = 3$.\nStep 3: Set $25 - c = 3^{2} = 9$, so $c = 16$. Check: with $c = 16$, substituting $y = 0$ gives $x^{2} - 8x + 16 = 0$, or $(x - 4)^{2} = 0$, a single point $(4, 0)$ ✓\n\n**Common Mistakes:**\n* $9$: takes $r = 4$, the distance from $(4, -3)$ to the $y$-axis, and solves $25 - c = 16$; that circle is tangent to the $y$-axis.\n* $22$: sets $25 - c$ equal to the radius $3$ instead of $r^{2} = 9$.\n* $25$: reads tangency as the circle shrinking to a single point, setting $25 - c = 0$.\n\n**Test Day Takeaway:** Tangent to the $x$-axis means the radius equals $|k|$, the center's $y$-coordinate; tangent to the $y$-axis means it equals $|h|$.",
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
    question: "$x^{2} + y^{2} + 12x - 16y + 75 = 0$\nThe graph of the given equation in the $xy$-plane is a circle. If the point $(a, b)$ is on the circle, which of the following is a possible value of $a$?",
    choices: [
      // distractor: forgets to subtract 75, so the radius becomes 10 and the x-values run from -16 to 4
      { id: "A", text: "$-14$" },
      { id: "B", text: "$-3$" },
      // distractor: puts the center at x = 6 instead of x = -6, so the x-values run from 1 to 11
      { id: "C", text: "$1$" },
      // distractor: uses the y-coordinate of the center, 8
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The circle is $(x + 6)^{2} + (y - 8)^{2} = 25$, so $x$ runs from $-6 - 5 = -11$ to $-6 + 5 = -1$. Only $-3$ is in that range.\n\n**The Full Solution:**\nStep 1: Complete both squares: $(x^{2} + 12x + 36) + (y^{2} - 16y + 64) = -75 + 36 + 64$, which is $(x + 6)^{2} + (y - 8)^{2} = 25$.\nStep 2: The center is $(-6, 8)$ and the radius is $5$, so every point on the circle has an $x$-coordinate from $-11$ to $-1$.\nStep 3: Of the choices, only $-3$ is between $-11$ and $-1$. Check: with $a = -3$, $(-3 + 6)^{2} = 9$, so $(b - 8)^{2} = 16$ and $b = 4$ or $b = 12$; the point $(-3, 4)$ satisfies $9 + 16 - 36 - 64 + 75 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-14$): is in the range only if $r^{2} = 100$, which happens when the $75$ is left out.\n* Choice C ($1$): comes from a center at $(6, 8)$; the term $+12x$ means $(x + 6)^{2}$, so the center's $x$-coordinate is $-6$.\n* Choice D ($8$): is the center's $y$-coordinate, but the question asks about $x$-coordinates.\n\n**Test Day Takeaway:** A circle with center $(h, k)$ and radius $r$ contains only points with $h - r \\le x \\le h + r$.",
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
    question: "What is the length of the hypotenuse of the right triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [40, 0], [40, 9]], labels: ["", "", ""], sideLabels: ["40", "9", ""], rightAngleVertex: 1 } },
    choices: [
      // distractor: subtracts the legs, 40 - 9
      { id: "A", text: "$31$" },
      { id: "B", text: "$41$" },
      // distractor: adds the legs, 40 + 9, instead of combining their squares
      { id: "C", text: "$49$" },
      // distractor: finds the square of the hypotenuse, 1,681, and forgets the square root
      { id: "D", text: "$1{,}681$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\sqrt{40^{2} + 9^{2}} = \\sqrt{1{,}681} = 41$.\n\n**The Full Solution:**\nStep 1: The legs are $40$ and $9$; let $c$ be the hypotenuse.\nStep 2: By the Pythagorean theorem, $c^{2} = 40^{2} + 9^{2} = 1{,}600 + 81 = 1{,}681$.\nStep 3: So $c = \\sqrt{1{,}681} = 41$. Check: $41$ is longer than either leg but shorter than their sum, $49$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($31$): subtracts the legs.\n* Choice C ($49$): adds the legs; the theorem adds their squares.\n* Choice D ($1{,}681$): stops at $c^{2}$ and forgets the square root.\n\n**Test Day Takeaway:** The hypotenuse is always longer than each leg and shorter than their sum; a choice outside that window is an arithmetic slip.",
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
    question: "In triangle $ABC$ shown, what is the length of $\\overline{AB}$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [60, 0], [60, 11]], labels: ["A", "B", "C"], sideLabels: ["", "11", "61"], rightAngleVertex: 1 } },
    correctAnswer: "60",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is 60.**\n\n**The Fast Way (~20s):** $AB = \\sqrt{61^{2} - 11^{2}} = \\sqrt{3{,}600} = 60$.\n\n**The Full Solution:**\nStep 1: The right angle is at $B$, so $AC = 61$ is the hypotenuse and $\\overline{AB}$ and $\\overline{BC}$ are the legs.\nStep 2: By the Pythagorean theorem, $AB^{2} + 11^{2} = 61^{2}$, so $AB^{2} = 3{,}721 - 121 = 3{,}600$.\nStep 3: So $AB = 60$. Check: $60^{2} + 11^{2} = 3{,}600 + 121 = 3{,}721 = 61^{2}$ ✓\n\n**Common Mistakes:**\n* $50$: subtracts the lengths, $61 - 11$, instead of their squares.\n* $62$: adds the squares as if $61$ were a leg: $\\sqrt{61^{2} + 11^{2}} \\approx 62$.\n* $3600$: stops at $AB^{2}$ and forgets the square root.\n\n**Test Day Takeaway:** When the hypotenuse is given, subtract squares; add squares only when both legs are given.",
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
    question: "What is the value of $x$ in the right triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 10]], labels: ["", "", ""], sideLabels: ["x", "10", "26"], rightAngleVertex: 1 } },
    choices: [
      // distractor: subtracts the lengths, 26 - 10, instead of their squares
      { id: "A", text: "$16$" },
      { id: "B", text: "$24$" },
      // distractor: adds the given lengths, 26 + 10
      { id: "C", text: "$36$" },
      // distractor: finds x squared, 576, and forgets the square root
      { id: "D", text: "$576$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $x = \\sqrt{26^{2} - 10^{2}} = \\sqrt{576} = 24$.\n\n**The Full Solution:**\nStep 1: The side labeled $26$ is across from the right angle, so it is the hypotenuse; $x$ and $10$ are the legs.\nStep 2: By the Pythagorean theorem, $x^{2} + 10^{2} = 26^{2}$, so $x^{2} = 676 - 100 = 576$.\nStep 3: So $x = 24$. Check: $10$-$24$-$26$ is $2$ times the $5$-$12$-$13$ triple ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): subtracts the side lengths instead of their squares.\n* Choice C ($36$): adds the two given sides.\n* Choice D ($576$): stops at $x^{2}$.\n\n**Test Day Takeaway:** Spot multiples of common triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$): $10$ and $26$ are $2 \\times 5$ and $2 \\times 13$, so the missing leg is $2 \\times 12$.",
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
    question: "What is the length of a diagonal of a rectangle with side lengths $24$ and $45$?",
    correctAnswer: "51",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is 51.**\n\n**The Fast Way (~25s):** The diagonal is the hypotenuse of a right triangle with legs $45$ and $24$: $\\sqrt{2{,}025 + 576} = \\sqrt{2{,}601} = 51$.\n\n**The Full Solution:**\nStep 1: A diagonal splits the rectangle into two right triangles whose legs are the length and the width, $45$ and $24$.\nStep 2: By the Pythagorean theorem, $d^{2} = 45^{2} + 24^{2} = 2{,}025 + 576 = 2{,}601$.\nStep 3: So $d = \\sqrt{2{,}601} = 51$. Check: $45$-$24$-$51$ is $3$ times the $15$-$8$-$17$ triple ✓\n\n**Common Mistakes:**\n* $69$: adds the length and the width.\n* $38.07$: subtracts the squares, $\\sqrt{2{,}025 - 576} \\approx 38.07$, as if the diagonal were a leg.\n* $2601$: stops at $d^{2}$ and forgets the square root.\n\n**Test Day Takeaway:** A rectangle's diagonal is a hypotenuse; its sides are the legs.",
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
    question: "What is the area of the right triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [20, 0], [20, 15]], labels: ["", "", ""], sideLabels: ["", "15", "25"], rightAngleVertex: 1 } },
    choices: [
      { id: "A", text: "$150$" },
      // distractor: uses the hypotenuse as the base, computing (1/2)(15)(25)
      { id: "B", text: "$187.5$" },
      // distractor: finds both legs but forgets the factor of 1/2
      { id: "C", text: "$300$" },
      // distractor: multiplies the two given sides, 15(25), with no 1/2 and the wrong base
      { id: "D", text: "$375$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The missing leg is $\\sqrt{25^{2} - 15^{2}} = 20$, so the area is $\\frac{1}{2}(15)(20) = 150$.\n\n**The Full Solution:**\nStep 1: The side labeled $25$ is the hypotenuse, and $15$ is one leg. The other leg is $\\sqrt{25^{2} - 15^{2}} = \\sqrt{625 - 225} = \\sqrt{400} = 20$.\nStep 2: In a right triangle the two legs are perpendicular, so they serve as base and height.\nStep 3: Area $= \\frac{1}{2}(15)(20) = 150$. Check: $15$-$20$-$25$ is $5$ times the $3$-$4$-$5$ triple ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($187.5$): uses the hypotenuse as a base; the hypotenuse is not perpendicular to the leg of length $15$.\n* Choice C ($300$): multiplies the legs and forgets the $\\frac{1}{2}$.\n* Choice D ($375$): multiplies the two labeled sides, $15$ and $25$, with no $\\frac{1}{2}$.\n\n**Test Day Takeaway:** The base and height of a right triangle are its legs; find the missing leg first whenever the hypotenuse is one of the given sides.",
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
    question: "What is the perimeter of the triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [48, 0], [48, 14]], labels: ["", "", ""], sideLabels: ["48", "", "50"], rightAngleVertex: 1 } },
    correctAnswer: "112",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is 112.**\n\n**The Fast Way (~25s):** The missing leg is $\\sqrt{50^{2} - 48^{2}} = \\sqrt{196} = 14$, so the perimeter is $48 + 14 + 50 = 112$.\n\n**The Full Solution:**\nStep 1: The side labeled $50$ is across from the right angle, so it is the hypotenuse; $48$ is a leg.\nStep 2: The other leg is $\\sqrt{50^{2} - 48^{2}} = \\sqrt{2{,}500 - 2{,}304} = \\sqrt{196} = 14$.\nStep 3: The perimeter is $48 + 14 + 50 = 112$. Check: $14$-$48$-$50$ is $2$ times the $7$-$24$-$25$ triple ✓\n\n**Common Mistakes:**\n* $98$: adds only the two labeled sides, $48 + 50$.\n* $100$: takes the missing leg as $50 - 48 = 2$, subtracting lengths instead of squares.\n* $167.3$: adds squares as if $50$ were a leg, $\\sqrt{50^{2} + 48^{2}} \\approx 69.3$, then adds $48 + 50$.\n\n**Test Day Takeaway:** Perimeter needs all three sides; fill in the missing one with the Pythagorean theorem before adding.",
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
    question: "The side lengths of the right triangle shown are in meters. What is the area, in square meters, of the triangle?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 7]], labels: ["", "", ""], sideLabels: ["x + 17", "x", "25"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: stops at the longer leg, x + 17 = 24
      { id: "A", text: "$24$" },
      { id: "B", text: "$84$" },
      // distractor: uses the hypotenuse as a base with the shorter leg, (1/2)(7)(25)
      { id: "C", text: "$87.5$" },
      // distractor: finds both legs but forgets the factor of 1/2, computing 7(24)
      { id: "D", text: "$168$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** $x^{2} + (x + 17)^{2} = 625$ gives $x = 7$, so the legs are $7$ and $24$ and the area is $\\frac{1}{2}(7)(24) = 84$.\n\n**The Full Solution:**\nStep 1: The legs are $x$ and $x + 17$ and the hypotenuse is $25$, so $x^{2} + (x + 17)^{2} = 25^{2}$.\nStep 2: Expand: $2x^{2} + 34x + 289 = 625$, so $x^{2} + 17x - 168 = 0$, which factors as $(x + 24)(x - 7) = 0$. A length is positive, so $x = 7$.\nStep 3: The legs are $7$ and $24$, so the area is $\\frac{1}{2}(7)(24) = 84$ square meters. Check: $24 - 7 = 17$ and $7^{2} + 24^{2} = 49 + 576 = 625 = 25^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): stops at the longer leg, $x + 17$.\n* Choice C ($87.5$): multiplies the shorter leg by the hypotenuse; the hypotenuse is not a height.\n* Choice D ($168$): multiplies the legs and forgets the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** When the legs are written in terms of $x$, the Pythagorean theorem becomes a quadratic; keep only the positive root, then finish the question that was asked.",
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
    question: "In the right triangle shown, $b$ is a positive number. What is the perimeter of the triangle?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 32]], labels: ["", "", ""], sideLabels: ["24", "b", "b + 8"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "96",
    explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is 96.**\n\n**The Fast Way (~50s):** $24^{2} + b^{2} = (b + 8)^{2}$ simplifies to $576 = 16b + 64$, so $b = 32$, the hypotenuse is $40$, and the perimeter is $24 + 32 + 40 = 96$.\n\n**The Full Solution:**\nStep 1: The side labeled $b + 8$ is across from the right angle, so $24^{2} + b^{2} = (b + 8)^{2}$.\nStep 2: Expand the right side: $576 + b^{2} = b^{2} + 16b + 64$. The $b^{2}$ terms cancel, leaving $512 = 16b$, so $b = 32$.\nStep 3: The sides are $24$, $32$ and $40$, so the perimeter is $96$. Check: $24^{2} + 32^{2} = 576 + 1{,}024 = 1{,}600 = 40^{2}$ ✓\n\n**Common Mistakes:**\n* $32$: finds $b$ and reports it instead of the perimeter.\n* $40$: reports the hypotenuse, $b + 8$, instead of the perimeter.\n* $160$: expands $(b + 8)^{2}$ with a middle term of $8b$ instead of $16b$, getting $512 = 8b$, $b = 64$, and a perimeter of $24 + 64 + 72$.\n\n**Test Day Takeaway:** Squaring $b + 8$ produces a middle term, $16b$; that term is what makes the $b^{2}$'s cancel and the equation linear.",
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
    question: "A right circular cylinder has a diameter of $d$ and a height of $h$. Which expression represents the volume of the cylinder?",
    choices: [
      { id: "A", text: "$\\frac{\\pi d^{2}h}{4}$" },
      // distractor: halves d squared instead of squaring d/2
      { id: "B", text: "$\\frac{\\pi d^{2}h}{2}$" },
      // distractor: substitutes the diameter for the radius in V = pi r^2 h
      { id: "C", text: "$\\pi d^{2}h$" },
      // distractor: uses a surface-area style expression, 2 pi r h with r replaced by d
      { id: "D", text: "$2\\pi dh$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The radius is $\\frac{d}{2}$, so $V = \\pi\\left(\\frac{d}{2}\\right)^{2}h = \\frac{\\pi d^{2}h}{4}$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^{2}h$.\nStep 2: The radius is half the diameter: $r = \\frac{d}{2}$.\nStep 3: Substitute: $V = \\pi\\left(\\frac{d}{2}\\right)^{2}h = \\pi \\cdot \\frac{d^{2}}{4} \\cdot h = \\frac{\\pi d^{2}h}{4}$. Check: with $d = 2$ and $h = 5$, the radius is $1$ and $V = \\pi(1)^{2}(5) = 5\\pi$, and $\\frac{\\pi(4)(5)}{4} = 5\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{\\pi d^{2}h}{2}$): divides $d^{2}$ by $2$, but squaring $\\frac{d}{2}$ divides by $4$.\n* Choice C ($\\pi d^{2}h$): uses the diameter as the radius, making the volume $4$ times too large.\n* Choice D ($2\\pi dh$): uses $2\\pi rh$, which is the area of the curved side, with $d$ in place of $r$.\n\n**Test Day Takeaway:** Convert a diameter to a radius before you square: $\\left(\\frac{d}{2}\\right)^{2} = \\frac{d^{2}}{4}$.",
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
    question: "A right circular cylinder has a radius of $7$ inches and a height of $6$ inches. The volume of the cylinder is $k\\pi$ cubic inches. What is the value of $k$?",
    correctAnswer: "294",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $294$.**\n\n**The Fast Way (~10s):** $V = \\pi(7)^{2}(6) = 294\\pi$, so $k = 294$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^{2}h$.\nStep 2: Substitute $r = 7$ and $h = 6$: $V = \\pi(49)(6)$.\nStep 3: $49 \\cdot 6 = 294$, so $V = 294\\pi$ and $k = 294$. Check: $\\frac{294}{6} = 49 = 7^{2}$ ✓\n\n**Common Mistakes:**\n* $42$: multiplies $7 \\cdot 6$ without squaring the radius.\n* $84$: uses $2r = 14$ in place of $r^{2}$, computing $14 \\cdot 6$.\n* $1{,}176$: uses the diameter $14$ as the radius, computing $14^{2} \\cdot 6$.\n\n**Test Day Takeaway:** Cylinder volume is base area times height: $\\pi r^{2}h$.",
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
    question: "Right circular cylinder $B$ has $2$ times the radius and $3$ times the height of right circular cylinder $A$. The volume of cylinder $A$ is $V$. Which expression represents the volume of cylinder $B$?",
    choices: [
      // distractor: multiplies the two scale factors, 2 x 3, without squaring the radius factor
      { id: "A", text: "$6V$" },
      { id: "B", text: "$12V$" },
      // distractor: squares the height factor instead of the radius factor, 2 x 3^2
      { id: "C", text: "$18V$" },
      // distractor: squares both factors, 2^2 x 3^2
      { id: "D", text: "$36V$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The radius is squared in $\\pi r^{2}h$, so the volume changes by $2^{2} \\cdot 3 = 12$: $12V$.\n\n**The Full Solution:**\nStep 1: Let cylinder $A$ have radius $r$ and height $h$, so $V = \\pi r^{2}h$.\nStep 2: Cylinder $B$ has radius $2r$ and height $3h$, so its volume is $\\pi(2r)^{2}(3h) = \\pi(4r^{2})(3h) = 12\\pi r^{2}h$.\nStep 3: Since $\\pi r^{2}h = V$, the volume of cylinder $B$ is $12V$. Check: with $r = 1$ and $h = 1$, $V = \\pi$ and cylinder $B$ has volume $\\pi(2)^{2}(3) = 12\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6V$): treats both dimensions the same way; the radius is squared in the formula, so its factor becomes $2^{2} = 4$.\n* Choice C ($18V$): squares the height factor, but height appears to the first power in $\\pi r^{2}h$.\n* Choice D ($36V$): squares the height factor as well as the radius factor.\n\n**Test Day Takeaway:** In $\\pi r^{2}h$, a radius factor of $k$ multiplies the volume by $k^{2}$, and a height factor of $m$ multiplies it by $m$.",
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
    question: "A right circular cylinder has a volume of $320\\pi$ cubic feet and a height of $5$ feet. What is the radius of the cylinder, in feet?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is 8.**\n\n**The Fast Way (~20s):** $\\pi r^{2}(5) = 320\\pi$ gives $r^{2} = 64$, so $r = 8$.\n\n**The Full Solution:**\nStep 1: Substitute into $V = \\pi r^{2}h$: $320\\pi = \\pi r^{2}(5)$.\nStep 2: Divide both sides by $5\\pi$: $r^{2} = 64$.\nStep 3: A radius is positive, so $r = 8$ feet. Check: $\\pi(8)^{2}(5) = 320\\pi$ ✓\n\n**Common Mistakes:**\n* $64$: stops at $r^{2}$ and forgets the square root.\n* $16$: reports the diameter, $2r$, instead of the radius.\n* $17.89$: forgets to divide by the height, solving $r^{2} = 320$ and taking $\\sqrt{320} \\approx 17.89$.\n\n**Test Day Takeaway:** Undo the volume formula in order: divide out $\\pi$ and the height, then take the square root.",
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
    question: "Right circular cylinders $A$ and $B$ have equal volumes. Cylinder $A$ has a radius of $5$ inches and a height of $12$ inches. If cylinder $B$ has a radius of $10$ inches, what is the height, in inches, of cylinder $B$?",
    choices: [
      { id: "A", text: "$3$" },
      // distractor: halves the height because the radius doubled, treating volume as proportional to r instead of r squared
      { id: "B", text: "$6$" },
      // distractor: doubles the height along with the radius
      { id: "C", text: "$24$" },
      // distractor: multiplies the height by 2 squared = 4 instead of dividing by 4
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Cylinder $A$ has volume $\\pi(5)^{2}(12) = 300\\pi$, so $\\pi(10)^{2}h = 300\\pi$ gives $h = 3$.\n\n**The Full Solution:**\nStep 1: The volume of cylinder $A$ is $\\pi r^{2}h = \\pi(5)^{2}(12) = 300\\pi$ cubic inches.\nStep 2: Cylinder $B$ has the same volume, so $\\pi(10)^{2}h = 300\\pi$, which simplifies to $100h = 300$.\nStep 3: So $h = 3$ inches. Check: $\\pi(10)^{2}(3) = 300\\pi$, matching cylinder $A$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): halves the height because the radius doubled; volume depends on $r^{2}$, so the height must be divided by $4$.\n* Choice C ($24$): doubles the height along with the radius, which would make $B$ eight times as large.\n* Choice D ($48$): multiplies by $2^{2} = 4$ instead of dividing by it.\n\n**Test Day Takeaway:** For equal volumes, $r^{2}h$ stays the same: doubling the radius divides the height by $4$.",
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
    question: "The radius of right circular cylinder $Q$ is $\\frac{2}{3}$ of the radius of right circular cylinder $P$, and the volume of $Q$ is twice the volume of $P$. The height of $Q$ is how many times the height of $P$?",
    choices: [
      // distractor: multiplies the volume factor 2 by the radius-squared factor 4/9 instead of dividing by it
      { id: "A", text: "$\\frac{8}{9}$" },
      // distractor: divides by the radius-squared factor 4/9 but ignores that the volume doubled
      { id: "B", text: "$\\frac{9}{4}$" },
      // distractor: divides the volume factor 2 by the radius factor 2/3 without squaring it
      { id: "C", text: "$3$" },
      { id: "D", text: "$\\frac{9}{2}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Volume scales by (radius factor)$^{2}$ times (height factor), so $\\frac{4}{9} \\cdot t = 2$ and $t = \\frac{9}{2}$.\n\n**The Full Solution:**\nStep 1: Let $P$ have radius $r$ and height $h$, so its volume is $\\pi r^{2}h$; let $Q$ have height $th$.\nStep 2: The volume of $Q$ is $\\pi\\left(\\frac{2r}{3}\\right)^{2}(th) = \\frac{4t}{9}\\pi r^{2}h$, and it equals $2\\pi r^{2}h$, so $\\frac{4t}{9} = 2$.\nStep 3: Solve: $t = \\frac{18}{4} = \\frac{9}{2}$. Check: with $r = 3$ and $h = 2$, $P$ has volume $18\\pi$; $Q$ has radius $2$ and height $9$, so its volume is $\\pi(4)(9) = 36\\pi = 2(18\\pi)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{9}$): multiplies $2$ by $\\frac{4}{9}$ instead of dividing by it.\n* Choice B ($\\frac{9}{4}$): corrects for the smaller radius but forgets that $Q$ holds twice as much.\n* Choice C ($3$): divides $2$ by $\\frac{2}{3}$ without squaring the radius factor.\n\n**Test Day Takeaway:** Write the volume ratio as (radius factor)$^{2}$ $\\times$ (height factor) and solve for the unknown factor.",
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
    question: "A right circular cylinder has a volume of $375\\pi$ cubic centimeters, and the circumference of its base is $10\\pi$ centimeters. What is the height, in centimeters, of the cylinder?",
    correctAnswer: "15",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~30s):** From $2\\pi r = 10\\pi$, $r = 5$, so the base area is $25\\pi$ and the height is $\\frac{375\\pi}{25\\pi} = 15$.\n\n**The Full Solution:**\nStep 1: The circumference of the base is $2\\pi r = 10\\pi$, so the radius is $r = 5$ centimeters.\nStep 2: The base area is $\\pi r^{2} = \\pi(5)^{2} = 25\\pi$ square centimeters.\nStep 3: Since $V = \\pi r^{2}h$, $25\\pi h = 375\\pi$, so $h = 15$ centimeters. Check: $\\pi(5)^{2}(15) = 375\\pi$ ✓\n\n**Common Mistakes:**\n* $3.75$: treats $10$ as the radius, so the base area is $100\\pi$ and $h = \\frac{375}{100}$.\n* $37.5$: divides the volume by the circumference, $\\frac{375\\pi}{10\\pi}$, instead of by the base area.\n* $5$: reports the radius instead of the height.\n\n**Test Day Takeaway:** Circumference gives the radius, the radius gives the base area, and volume divided by base area gives the height.",
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
    question: "In the triangle shown, what is the value of $x$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["x°", "48°", "67°"], figureNote: true } },
    choices: [
      { id: "A", text: "$65$" },
      // distractor: subtracts only the 67 degree angle from 180
      { id: "B", text: "$113$" },
      // distractor: adds the two given angles, 48 + 67, instead of subtracting their sum from 180
      { id: "C", text: "$115$" },
      // distractor: subtracts only the 48 degree angle from 180
      { id: "D", text: "$132$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The angles of a triangle sum to $180°$, so $x = 180 - 48 - 67 = 65$.\n\n**The Full Solution:**\nStep 1: The three interior angles of any triangle sum to $180°$: $x + 48 + 67 = 180$.\nStep 2: Combine the known angles: $x + 115 = 180$.\nStep 3: Subtract: $x = 65$. Check: $65 + 48 + 67 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($113$): subtracts only $67$ from $180$ and ignores the $48°$ angle.\n* Choice C ($115$): adds the two given angles, which gives the exterior angle at the third vertex, not $x$.\n* Choice D ($132$): subtracts only $48$ from $180$ and ignores the $67°$ angle.\n\n**Test Day Takeaway:** Subtract BOTH known angles from $180$; the sum of the two known angles is the exterior angle, a common trap.",
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
    question: "In the figure shown, what is the value of $y$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["(2y)°", "50°", "70°"], figureNote: true } },
    correctAnswer: "30",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~15s):** The third angle is $180 - 50 - 70 = 60$ degrees, so $2y = 60$ and $y = 30$.\n\n**The Full Solution:**\nStep 1: The angles of a triangle sum to $180°$: $2y + 50 + 70 = 180$.\nStep 2: Combine the known angles: $2y + 120 = 180$, so $2y = 60$.\nStep 3: Divide by $2$: $y = 30$. Check: the angles are $60°$, $50°$, and $70°$, and $60 + 50 + 70 = 180$ ✓\n\n**Common Mistakes:**\n* $60$: finds the measure of the third angle and stops before dividing by $2$.\n* $120$: adds the two known angles instead of subtracting them from $180$.\n* $65$: subtracts only $50$ from $180$ and then halves the result.\n\n**Test Day Takeaway:** When an angle is labeled with an expression such as $(2y)°$, the angle sum gives the expression's value; finish by solving for the variable.",
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
    question: "What is the measure, in degrees, of the largest angle of the triangle shown?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["(4t)°", "(t+15)°", "(2t+25)°"], figureNote: true } },
    choices: [
      // distractor: reports t itself instead of an angle measure
      { id: "A", text: "$20$" },
      // distractor: gives t + 15 = 35, the smallest of the three angles
      { id: "B", text: "$35$" },
      // distractor: gives 2t + 25 = 65, picking the label with the largest constant term
      { id: "C", text: "$65$" },
      { id: "D", text: "$80$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $4t + (t + 15) + (2t + 25) = 7t + 40 = 180$, so $t = 20$, and the largest angle is $4t = 80$ degrees.\n\n**The Full Solution:**\nStep 1: Add the three angle measures and set the total equal to $180$: $4t + (t + 15) + (2t + 25) = 180$.\nStep 2: Combine like terms: $7t + 40 = 180$, so $7t = 140$ and $t = 20$.\nStep 3: Evaluate each angle: $4t = 80$, $t + 15 = 35$, and $2t + 25 = 65$. The largest is $80$ degrees. Check: $80 + 35 + 65 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): reports $t$, which is not an angle measure.\n* Choice B ($35$): is $t + 15$, the smallest angle.\n* Choice C ($65$): is $2t + 25$; the label with the largest constant is not necessarily the largest angle.\n\n**Test Day Takeaway:** Solving for the variable is only half the work: evaluate every angle, then reread which one the question asks for.",
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
    question: "In right triangle $DEF$ shown, angle $E$ is a right angle. The measure of angle $D$ is $14°$ greater than $3$ times the measure of angle $F$. What is the measure, in degrees, of angle $F$?",
    diagram: { type: "rightTriangle", params: { labels: ["D", "E", "F"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "19",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~25s):** The acute angles of a right triangle sum to $90°$: $f + (3f + 14) = 90$, so $4f = 76$ and $f = 19$.\n\n**The Full Solution:**\nStep 1: Angle $E$ is $90°$, so angles $D$ and $F$ sum to $180 - 90 = 90$ degrees.\nStep 2: Let angle $F$ measure $f$ degrees. Then angle $D$ measures $3f + 14$, and $f + (3f + 14) = 90$, or $4f + 14 = 90$.\nStep 3: Solve: $4f = 76$, so $f = 19$. Check: angle $D$ is $3(19) + 14 = 71$, and $19 + 71 + 90 = 180$ ✓\n\n**Common Mistakes:**\n* $71$: reports the measure of angle $D$ instead of angle $F$.\n* $41.5$: sets the two acute angles equal to $180$, ignoring the right angle.\n* $22.5$: drops the $14$ and solves $4f = 90$.\n\n**Test Day Takeaway:** In a right triangle the two acute angles always sum to $90°$, so one equation in one variable finishes the problem.",
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
    question: "In the triangle shown, $d$ is a positive constant. What is the value of $x + d$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["x°", "(x+d)°", "(x+2d)°"], figureNote: true } },
    choices: [
      // distractor: divides 180 by 4, miscounting 3x + 3d as four equal parts
      { id: "A", text: "$45$" },
      { id: "B", text: "$60$" },
      // distractor: assumes the middle angle must be a right angle
      { id: "C", text: "$90$" },
      // distractor: divides 360, the angle sum of a quadrilateral, by 3
      { id: "D", text: "$120$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $x + (x + d) + (x + 2d) = 3x + 3d = 180$, so $x + d = 60$.\n\n**The Full Solution:**\nStep 1: The angles of a triangle sum to $180°$: $x + (x + d) + (x + 2d) = 180$.\nStep 2: Combine like terms: $3x + 3d = 180$.\nStep 3: Divide both sides by $3$: $x + d = 60$. Check with $d = 10$: the angles are $50°$, $60°$, and $70°$, which sum to $180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($45$): divides $180$ by $4$, as if $3x + 3d$ had four equal parts.\n* Choice C ($90$): assumes the middle angle is a right angle, which nothing in the figure requires.\n* Choice D ($120$): divides $360$, the angle sum of a quadrilateral, by $3$.\n\n**Test Day Takeaway:** You do not need $x$ and $d$ separately; when the question asks for a combination, look for a way to solve for that combination directly.",
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
    question: "In triangle $ABC$ shown, $AB = BC$. What is the measure, in degrees, of angle $B$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["(3x-20)°", "", "(x+30)°"], vertexLabels: ["A", "B", "C"], figureNote: true } },
    choices: [
      // distractor: stops at x = 25 instead of finding the angle
      { id: "A", text: "$25$" },
      // distractor: gives the measure of angle A (and angle C) instead of angle B
      { id: "B", text: "$55$" },
      { id: "C", text: "$70$" },
      // distractor: subtracts only one 55-degree angle from 180
      { id: "D", text: "$125$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** $AB = BC$ makes angles $A$ and $C$ equal: $3x - 20 = x + 30$, so $x = 25$ and both measure $55°$. Then angle $B$ is $180 - 110 = 70°$.\n\n**The Full Solution:**\nStep 1: Since $AB = BC$, the angles opposite those sides are equal: angle $C$ (opposite $AB$) and angle $A$ (opposite $BC$). So $3x - 20 = x + 30$.\nStep 2: Solve: $2x = 50$, so $x = 25$, and each of angles $A$ and $C$ measures $25 + 30 = 55°$.\nStep 3: The angles add to $180°$, so angle $B$ measures $180 - 55 - 55 = 70°$. Check: $3(25) - 20 = 55$, and $55 + 70 + 55 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): is the value of $x$, not an angle measure.\n* Choice B ($55$): is the measure of angles $A$ and $C$; the question asks for angle $B$.\n* Choice D ($125$): subtracts only one of the two equal angles from $180$.\n\n**Test Day Takeaway:** In a triangle, equal sides sit across from equal angles. Set those angle expressions equal, then use the $180°$ sum.",
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
    question: "In triangle $JKL$, $JK = JL$, and the measure of angle $K$ is $27°$ greater than the measure of angle $J$. What is the measure, in degrees, of angle $J$?",
    correctAnswer: "42",
    explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $42$.**\n\n**The Fast Way (~40s):** Sides $JK$ and $JL$ are equal, so angles $L$ and $K$ are equal: $j + 2(j + 27) = 180$, so $3j = 126$ and $j = 42$.\n\n**The Full Solution:**\nStep 1: Equal sides are opposite equal angles. Side $JK$ is opposite angle $L$ and side $JL$ is opposite angle $K$, so angles $K$ and $L$ have the same measure.\nStep 2: Let angle $J$ measure $j$ degrees. Then angles $K$ and $L$ each measure $j + 27$, and $j + (j + 27) + (j + 27) = 180$, or $3j + 54 = 180$.\nStep 3: Solve: $3j = 126$, so $j = 42$. Check: angles $K$ and $L$ are each $69°$, and $42 + 69 + 69 = 180$ ✓\n\n**Common Mistakes:**\n* $51$: treats angle $J$ as one of the two equal angles, solving $j + j + (j + 27) = 180$.\n* $69$: reports the measure of angle $K$ instead of angle $J$.\n* $60$: divides $180$ by $3$, as if the triangle were equilateral.\n\n**Test Day Takeaway:** In an isosceles triangle, locate the equal angles from the equal SIDES: they are the angles opposite those sides, not the angle between them.",
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
    question: "Circle $Q$ in the $xy$-plane has the equation $(x + 5)^{2} + (y - 2)^{2} = 64$. What is the radius of circle $Q$?",
    choices: [
      // distractor: reads the 5 inside (x + 5) squared as the radius
      { id: "A", text: "$5$" },
      { id: "B", text: "$8$" },
      // distractor: reports the diameter, 2 times 8
      { id: "C", text: "$16$" },
      // distractor: reports r squared, 64, without taking the square root
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $(x - h)^2 + (y - k)^2 = r^2$ the right side is $r^2$, so circle $Q$ has radius $\\sqrt{64} = 8$.\n\n**The Full Solution:**\nStep 1: The equation of circle $Q$ is $(x + 5)^2 + (y - 2)^2 = 64$.\nStep 2: Match it to $(x - h)^2 + (y - k)^2 = r^2$: the center is $(-5, 2)$ and $r^2 = 64$.\nStep 3: Take the positive square root: $r = 8$. Check: the point $(3, 2)$ satisfies $(3 + 5)^2 + 0^2 = 64$, and it is $8$ units from the center $(-5, 2)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): takes the $5$ inside the parentheses, which locates the center, not the radius.\n* Choice C ($16$): reports the diameter, $2r$.\n* Choice D ($64$): reports $r^2$ straight from the right side of the equation.\n\n**Test Day Takeaway:** The numbers inside the parentheses give the center; the constant on the right side is $r^2$, so take its square root.",
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
    question: "$(x - 12)^{2} + (y + 5)^{2} = 196$\nThe graph of the given equation in the $xy$-plane is a circle. What is the diameter of the circle?",
    correctAnswer: "28",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~10s):** The right side is $r^2 = 196$, so $r = 14$ and the diameter is $2(14) = 28$.\n\n**The Full Solution:**\nStep 1: Compare the equation with $(x - h)^2 + (y - k)^2 = r^2$: here $r^2 = 196$.\nStep 2: Take the positive square root: $r = \\sqrt{196} = 14$.\nStep 3: The diameter is twice the radius: $2(14) = 28$. Check: the points $(-2, -5)$ and $(26, -5)$ both satisfy the equation, since $14^2 = 196$, and they are $26 - (-2) = 28$ units apart ✓\n\n**Common Mistakes:**\n* $14$: reports the radius instead of the diameter.\n* $196$: reads the right side as the radius.\n* $392$: doubles $196$ without taking the square root first.\n\n**Test Day Takeaway:** Standard form gives $r^2$, not $r$ or the diameter: take the square root, then double it if the question asks for the diameter.",
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
    question: "In the $xy$-plane, circle $W$ has center $(6, -2)$ and passes through the point $(11, 10)$. Which equation represents circle $W$?",
    choices: [
      // distractor: uses the radius, 13, on the right side instead of the radius squared
      { id: "A", text: "$(x - 6)^2 + (y + 2)^2 = 13$" },
      { id: "B", text: "$(x - 6)^2 + (y + 2)^2 = 169$" },
      // distractor: flips the signs of the center coordinates
      { id: "C", text: "$(x + 6)^2 + (y - 2)^2 = 169$" },
      // distractor: uses the point on the circle as the center
      { id: "D", text: "$(x - 11)^2 + (y - 10)^2 = 169$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The radius is the distance from $(6, -2)$ to $(11, 10)$: $r^2 = 5^2 + 12^2 = 169$, so the circle is $(x - 6)^2 + (y + 2)^2 = 169$.\n\n**The Full Solution:**\nStep 1: A circle with center $(h, k)$ and radius $r$ has equation $(x - h)^2 + (y - k)^2 = r^2$. Here $(h, k) = (6, -2)$, so the left side is $(x - 6)^2 + (y + 2)^2$.\nStep 2: The point $(11, 10)$ is on the circle, so $r^2 = (11 - 6)^2 + (10 - (-2))^2 = 25 + 144 = 169$.\nStep 3: The equation is $(x - 6)^2 + (y + 2)^2 = 169$. Check: substituting $(11, 10)$ gives $5^2 + 12^2 = 169$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: puts the radius, $13$, on the right side instead of $r^2 = 169$.\n* Choice C: flips the signs of the center, which would place it at $(-6, 2)$.\n* Choice D: uses the point on the circle as the center.\n\n**Test Day Takeaway:** For a circle through a known point, the squared distance from the center to that point is exactly the $r^2$ in standard form, so there is no need to take a square root.",
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
    question: "$(x + 3)^{2} + (y - 10)^{2} = 121$\nIn the $xy$-plane, the graph of the given equation is a circle. If the point $(a, 10)$ lies on the circle and $a > 0$, what is the value of $a$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~25s):** With $y = 10$ the equation becomes $(a + 3)^2 = 121$, so $a + 3 = 11$ (the positive case) and $a = 8$.\n\n**The Full Solution:**\nStep 1: Substitute $x = a$ and $y = 10$: $(a + 3)^2 + (10 - 10)^2 = 121$, so $(a + 3)^2 = 121$.\nStep 2: Take square roots: $a + 3 = 11$ or $a + 3 = -11$, so $a = 8$ or $a = -14$.\nStep 3: Since $a > 0$, $a = 8$. Check: the center is $(-3, 10)$ and the radius is $11$, and $(8, 10)$ is $8 - (-3) = 11$ units to the right of the center ✓\n\n**Common Mistakes:**\n* $14$: reads the center as $(3, 10)$ and adds the radius, $3 + 11$.\n* $11$: reports the radius instead of the $x$-coordinate.\n* $118$: forgets the square root, solving $a + 3 = 121$.\n\n**Test Day Takeaway:** A point with the same $y$-coordinate as the center lies exactly one radius to the left or right of the center.",
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
    question: "In the $xy$-plane, the points $(4, -7)$ and $(4, 3)$ are the endpoints of a diameter of a circle. Which equation represents the circle?",
    choices: [
      // distractor: flips the signs of the center coordinates
      { id: "A", text: "$(x + 4)^2 + (y - 2)^2 = 25$" },
      // distractor: uses the radius 5 on the right side instead of 5^2
      { id: "B", text: "$(x - 4)^2 + (y + 2)^2 = 5$" },
      { id: "C", text: "$(x - 4)^2 + (y + 2)^2 = 25$" },
      // distractor: uses the diameter 10 in place of the radius, 10^2 = 100
      { id: "D", text: "$(x - 4)^2 + (y + 2)^2 = 100$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The center is halfway between the endpoints, $(4, -2)$, and the diameter is $3 - (-7) = 10$, so $r = 5$ and $r^{2} = 25$.\n\n**The Full Solution:**\nStep 1: Both endpoints have $x$-coordinate $4$, so the diameter is vertical with length $3 - (-7) = 10$. The radius is $5$.\nStep 2: The center is halfway between the endpoints: $\\left(4, \\frac{-7 + 3}{2}\\right) = (4, -2)$.\nStep 3: With center $(4, -2)$ and $r^{2} = 25$, the equation is $(x - 4)^2 + (y + 2)^2 = 25$. Check: $(4, 3)$ gives $0^{2} + 5^{2} = 25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x + 4)^2 + (y - 2)^2 = 25$): writes $(x + 4)$ and $(y - 2)$, which would put the center at $(-4, 2)$.\n* Choice B ($(x - 4)^2 + (y + 2)^2 = 5$): puts the radius $5$ on the right side; the equation needs $r^{2} = 25$.\n* Choice D ($(x - 4)^2 + (y + 2)^2 = 100$): squares the diameter $10$ instead of the radius $5$.\n\n**Test Day Takeaway:** From the endpoints of a diameter: the center is the halfway point, the radius is half the diameter, and the equation uses $r^{2}$.",
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
    question: "$(x - 7)^{2} + (y + a)^{2} = 169$\nIn the given equation, $a$ is a constant. The graph of the equation in the $xy$-plane is a circle, and the lowest point of the circle has a $y$-coordinate of $-21$. What is the value of $a$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~25s):** The center is $(7, -a)$ and the radius is $13$, so the lowest point has $y = -a - 13 = -21$, which gives $a = 8$.\n\n**The Full Solution:**\nStep 1: Write $(y + a)^2$ as $(y - (-a))^2$: the center is $(7, -a)$, and $r^2 = 169$ gives $r = 13$.\nStep 2: The lowest point of a circle is one radius below the center, so its $y$-coordinate is $-a - 13$.\nStep 3: Set $-a - 13 = -21$, so $-a = -8$ and $a = 8$. Check: the center is $(7, -8)$, and $-8 - 13 = -21$ ✓\n\n**Common Mistakes:**\n* $-8$: reads the center's $y$-coordinate as $a$ instead of $-a$, solving $a - 13 = -21$.\n* $34$: adds the radius, which locates the highest point, solving $-a + 13 = -21$.\n* $-148$: uses $169$ as the radius, solving $-a - 169 = -21$.\n\n**Test Day Takeaway:** In standard form the center's coordinates are the OPPOSITES of the numbers added inside the parentheses; the lowest and highest points are one radius below and above the center.",
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
    question: "$(x - 5)^{2} + (y + 9)^{2} = 128$\nIn the $xy$-plane, the graph of the given equation is a circle. Square $ABCD$ is inscribed in the circle, as shown. What is the area of square $ABCD$?",
    diagram: { type: "circleWithSquare", params: { labels: { A: "A", B: "B", C: "C", D: "D", O: "O" }, showDiagonals: true } },
    choices: [
      // distractor: reports the perimeter of the square, 4 times 16, instead of its area
      { id: "A", text: "$64$" },
      // distractor: uses the radius as the side length, giving r squared = 128
      { id: "B", text: "$128$" },
      { id: "C", text: "$256$" },
      // distractor: uses the diameter as the side length, giving (2r) squared = 512
      { id: "D", text: "$512$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The diagonal of the inscribed square is a diameter, $2r$, so the area is $\\frac{(2r)^2}{2} = 2r^2 = 2(128) = 256$.\n\n**The Full Solution:**\nStep 1: The right side of the equation is $r^2$, so $r^2 = 128$ and $r = 8\\sqrt{2}$.\nStep 2: Each diagonal of the inscribed square passes through the center, so it is a diameter: $2r = 16\\sqrt{2}$. A square with diagonal $16\\sqrt{2}$ has side $\\frac{16\\sqrt{2}}{\\sqrt{2}} = 16$.\nStep 3: The area is $16^2 = 256$. Check: the square's diagonal is $16\\sqrt{2} \\approx 22.6$, and $2\\sqrt{128} \\approx 22.6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($64$): computes the perimeter, $4(16)$, instead of the area.\n* Choice B ($128$): uses the radius as the side of the square, so the area comes out as $r^2$.\n* Choice D ($512$): uses the diameter as the side of the square, giving $(2r)^2 = 4r^2$.\n\n**Test Day Takeaway:** For a square inscribed in a circle, the diameter is the square's DIAGONAL, so the area is $\\frac{d^2}{2} = 2r^2$.",
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
    question: "$(x + 8)^{2} + (y - 3)^{2} = 289$\nThe graph of the given equation in the $xy$-plane is a circle. The circle intersects the $y$-axis at two points. What is the distance between these two points?",
    correctAnswer: "30",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~40s):** On the $y$-axis $x = 0$, so $64 + (y - 3)^2 = 289$, $(y - 3)^2 = 225$, and $y = 18$ or $y = -12$; the points are $18 - (-12) = 30$ apart.\n\n**The Full Solution:**\nStep 1: Every point on the $y$-axis has $x = 0$. Substitute: $(0 + 8)^2 + (y - 3)^2 = 289$, so $(y - 3)^2 = 289 - 64 = 225$.\nStep 2: Take square roots: $y - 3 = 15$ or $y - 3 = -15$, so $y = 18$ or $y = -12$. The circle meets the $y$-axis at $(0, 18)$ and $(0, -12)$.\nStep 3: The distance between these points is $18 - (-12) = 30$. Check: the center $(-8, 3)$ is $8$ units from the $y$-axis, and $8^2 + 15^2 = 64 + 225 = 289 = 17^2$, so each point is one radius from the center ✓\n\n**Common Mistakes:**\n* $15$: finds the distance from $y = 3$ to one of the points and stops.\n* $34$: gives the diameter, $2(17)$; the $y$-axis does not pass through the center, so the chord is shorter.\n* About $37.6$: adds $64$ to $289$ instead of subtracting it, so $(y - 3)^2 = 353$ and the distance is $2\\sqrt{353}$.\n\n**Test Day Takeaway:** To find where a circle crosses the $y$-axis, set $x = 0$ and solve for $y$; the two solutions are the endpoints of the chord.",
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
    question: "In right triangle $XYZ$ shown, what is the value of $\\sin Z$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [16, 0], [16, 12]], labels: ["X", "Y", "Z"], sideLabels: ["16", "12", "20"], rightAngleVertex: 1 } },
    choices: [
      // distractor: gives cos Z, the adjacent leg 12 over the hypotenuse 20
      { id: "A", text: "$\\frac{3}{5}$" },
      // distractor: divides the adjacent leg 12 by the opposite leg 16, which is tan X
      { id: "B", text: "$\\frac{3}{4}$" },
      { id: "C", text: "$\\frac{4}{5}$" },
      // distractor: gives tan Z, the opposite leg 16 over the adjacent leg 12
      { id: "D", text: "$\\frac{4}{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Sine is opposite over hypotenuse: $\\sin Z = \\frac{XY}{XZ} = \\frac{16}{20} = \\frac{4}{5}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $Y$, so $XZ = 20$ is the hypotenuse.\nStep 2: Relative to angle $Z$, the opposite leg is $XY = 16$ (the leg that does not touch $Z$) and the adjacent leg is $YZ = 12$.\nStep 3: $\\sin Z = \\frac{16}{20} = \\frac{4}{5}$. Check: $12^2 + 16^2 = 144 + 256 = 400 = 20^2$, so the sides form a $3$-$4$-$5$ triangle scaled by $4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{5}$): uses the adjacent leg, $\\frac{12}{20}$, which is $\\cos Z$.\n* Choice B ($\\frac{3}{4}$): divides $12$ by $16$, which is $\\tan X$, not a ratio for angle $Z$.\n* Choice D ($\\frac{4}{3}$): divides the opposite leg by the adjacent leg, $\\frac{16}{12}$, which is $\\tan Z$.\n\n**Test Day Takeaway:** Label the sides opposite, adjacent and hypotenuse from the angle named in the question; the opposite leg is the one that does not touch that angle.",
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
    question: "What is the value of $\\tan T$ in the triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [20, 0], [20, 15]], labels: ["T", "U", "V"], sideLabels: ["20", "15", ""], rightAngleVertex: 1 } },
    correctAnswer: "3/4",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**The correct answer is $\\frac{3}{4}$.** Equivalent forms such as $.75$ are also correct.\n\n**The Fast Way (~10s):** Tangent is opposite over adjacent: $\\tan T = \\frac{UV}{TU} = \\frac{15}{20} = \\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $U$, so $TU$ and $UV$ are the legs.\nStep 2: Relative to angle $T$, the opposite leg is $UV = 15$ and the adjacent leg is $TU = 20$.\nStep 3: $\\tan T = \\frac{15}{20} = \\frac{3}{4}$. Check: the hypotenuse is $\\sqrt{15^2 + 20^2} = 25$, and $\\frac{\\sin T}{\\cos T} = \\frac{15/25}{20/25} = \\frac{3}{4}$ ✓\n\n**Common Mistakes:**\n* $\\frac{4}{3}$: divides the adjacent leg by the opposite leg, which gives $\\tan V$.\n* $\\frac{3}{5}$: finds the hypotenuse and computes $\\sin T$ instead.\n* $\\frac{4}{5}$: computes $\\cos T$, adjacent over hypotenuse.\n\n**Test Day Takeaway:** Tangent uses only the two legs, so you never need the hypotenuse to find it.",
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
    question: "Right triangle $ABC$ is shown. What is the value of $\\tan A$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [32, 0], [32, 24]], labels: ["A", "B", "C"], sideLabels: ["", "24", "40"], rightAngleVertex: 1 } },
    choices: [
      // distractor: uses the hypotenuse, 24/40, which is sin A
      { id: "A", text: "$\\frac{3}{5}$" },
      { id: "B", text: "$\\frac{3}{4}$" },
      // distractor: computes AB/CA = 32/40, which is cos A
      { id: "C", text: "$\\frac{4}{5}$" },
      // distractor: divides the adjacent leg by the opposite leg, 32/24, which is tan C
      { id: "D", text: "$\\frac{4}{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The missing leg is $AB = \\sqrt{40^2 - 24^2} = 32$, so $\\tan A = \\frac{BC}{AB} = \\frac{24}{32} = \\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $B$, so $CA = 40$ is the hypotenuse and $AB$ is the unlabeled leg.\nStep 2: Find $AB$: $AB = \\sqrt{40^2 - 24^2} = \\sqrt{1{,}600 - 576} = \\sqrt{1{,}024} = 32$.\nStep 3: Relative to angle $A$, the opposite leg is $BC = 24$ and the adjacent leg is $AB = 32$, so $\\tan A = \\frac{24}{32} = \\frac{3}{4}$. Check: $24$, $32$, $40$ is the $3$-$4$-$5$ triple scaled by $8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{5}$): divides by the hypotenuse, giving $\\sin A$.\n* Choice C ($\\frac{4}{5}$): computes $\\frac{32}{40}$, which is $\\cos A$.\n* Choice D ($\\frac{4}{3}$): divides adjacent by opposite, which is $\\tan C$.\n\n**Test Day Takeaway:** If a needed leg is missing, recover it with the Pythagorean theorem, or spot the scaled $3$-$4$-$5$ triple, before writing the ratio.",
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
    question: "In the figure shown, triangle $PQR$ is a right triangle. What is the value of $\\cos P$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [45, 0], [45, 60]], labels: ["P", "Q", "R"], sideLabels: ["45", "60", ""], rightAngleVertex: 1 } },
    correctAnswer: "3/5",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**The correct answer is $\\frac{3}{5}$.** Equivalent forms such as $.6$ are also correct.\n\n**The Fast Way (~25s):** The hypotenuse is $PR = \\sqrt{45^2 + 60^2} = 75$, so $\\cos P = \\frac{PQ}{PR} = \\frac{45}{75} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $Q$, so $PQ = 45$ and $QR = 60$ are the legs and $PR$ is the hypotenuse.\nStep 2: Find the hypotenuse: $PR = \\sqrt{45^2 + 60^2} = \\sqrt{2{,}025 + 3{,}600} = \\sqrt{5{,}625} = 75$.\nStep 3: Relative to angle $P$, the adjacent leg is $PQ = 45$, so $\\cos P = \\frac{45}{75} = \\frac{3}{5}$. Check: $\\sin P = \\frac{60}{75} = \\frac{4}{5}$, and $\\left(\\frac{3}{5}\\right)^2 + \\left(\\frac{4}{5}\\right)^2 = 1$ ✓\n\n**Common Mistakes:**\n* $\\frac{4}{5}$: uses the opposite leg, $\\frac{60}{75}$, which is $\\sin P$.\n* $\\frac{3}{4}$: divides leg by leg, $\\frac{45}{60}$, skipping the hypotenuse.\n* $\\frac{4}{3}$: computes $\\frac{60}{45}$, which is $\\tan P$.\n\n**Test Day Takeaway:** Sine and cosine both need the hypotenuse; when only the legs are given, find it first ($45$-$60$-$75$ is $3$-$4$-$5$ scaled by $15$).",
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
    question: "Right triangle $RST$ has a right angle at $S$, a hypotenuse of length $30$, and $\\cos R = \\frac{4}{5}$. What is the length of $\\overline{ST}$?",
    choices: [
      // distractor: subtracts RS = 24 from the hypotenuse instead of using the Pythagorean theorem
      { id: "A", text: "$6$" },
      { id: "B", text: "$18$" },
      // distractor: gives RS, the leg adjacent to angle R, instead of ST
      { id: "C", text: "$24$" },
      // distractor: divides 30 by 4/5, treating the hypotenuse as the adjacent side
      { id: "D", text: "$37.5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $\\cos R = \\frac{RS}{RT}$ gives $RS = 30 \\cdot \\frac{4}{5} = 24$, and then $ST = \\sqrt{30^2 - 24^2} = 18$.\n\n**The Full Solution:**\nStep 1: The hypotenuse is $RT = 30$, opposite the right angle at $S$. Relative to angle $R$, the adjacent leg is $RS$ and the opposite leg is $ST$.\nStep 2: $\\cos R = \\frac{RS}{RT}$, so $\\frac{RS}{30} = \\frac{4}{5}$ and $RS = 24$.\nStep 3: $ST = \\sqrt{30^2 - 24^2} = \\sqrt{900 - 576} = \\sqrt{324} = 18$. Check: $\\sin R = \\frac{18}{30} = \\frac{3}{5}$, and $\\left(\\frac{3}{5}\\right)^2 + \\left(\\frac{4}{5}\\right)^2 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): subtracts $24$ from $30$ instead of using the Pythagorean theorem.\n* Choice C ($24$): stops at $RS$, the leg adjacent to angle $R$.\n* Choice D ($37.5$): divides $30$ by $\\frac{4}{5}$, treating the hypotenuse as the adjacent side.\n\n**Test Day Takeaway:** A cosine of $\\frac{4}{5}$ means the sides are a $3$-$4$-$5$ triangle; scale it so the hypotenuse matches, then read off the leg you need.",
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
    question: "Triangle $JKL$ shown is a right triangle. What is the value of $\\tan L$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [20, 0], [20, 15]], labels: ["J", "K", "L"], sideLabels: ["20", "", "25"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "4/3",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**The correct answer is $\\frac{4}{3}$.** Equivalent forms such as $1.333$ are also correct.\n\n**The Fast Way (~25s):** The missing leg is $KL = \\sqrt{25^2 - 20^2} = 15$, so $\\tan L = \\frac{JK}{KL} = \\frac{20}{15} = \\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $K$, so $LJ = 25$ is the hypotenuse and $JK = 20$ and $KL$ are the legs.\nStep 2: Find $KL$: $KL = \\sqrt{25^2 - 20^2} = \\sqrt{625 - 400} = \\sqrt{225} = 15$.\nStep 3: Relative to angle $L$, the opposite leg is $JK = 20$ and the adjacent leg is $KL = 15$, so $\\tan L = \\frac{20}{15} = \\frac{4}{3}$. Check: $15$, $20$, $25$ is the $3$-$4$-$5$ triple scaled by $5$ ✓\n\n**Common Mistakes:**\n* $\\frac{3}{4}$: divides adjacent by opposite, which is $\\tan J$.\n* $\\frac{4}{5}$: divides by the hypotenuse, $\\frac{20}{25}$, which is $\\sin L$.\n* $\\frac{3}{5}$: computes $\\frac{15}{25}$, which is $\\cos L$.\n\n**Test Day Takeaway:** Tangent needs both legs; when one leg is missing, find it from the hypotenuse before forming the ratio.",
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
    question: "Right triangle $ABC$ has its right angle at $C$, and $\\sin A = \\frac{3}{5}$. The perimeter of the triangle is $84$. What is the length of $\\overline{AC}$?",
    choices: [
      // distractor: stops at the scale factor k = 7
      { id: "A", text: "$7$" },
      // distractor: gives BC, the leg opposite angle A
      { id: "B", text: "$21$" },
      { id: "C", text: "$28$" },
      // distractor: gives AB, the hypotenuse
      { id: "D", text: "$35$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** $\\sin A = \\frac{3}{5}$ makes the sides $3k$, $4k$, and $5k$, so $12k = 84$, $k = 7$, and $AC = 4k = 28$.\n\n**The Full Solution:**\nStep 1: $\\sin A = \\frac{BC}{AB} = \\frac{3}{5}$, so $BC = 3k$ and $AB = 5k$ for some positive $k$. By the Pythagorean theorem, $AC = \\sqrt{(5k)^2 - (3k)^2} = 4k$.\nStep 2: The perimeter is $3k + 4k + 5k = 12k = 84$, so $k = 7$.\nStep 3: $AC$ is the leg adjacent to angle $A$: $AC = 4(7) = 28$. Check: the sides are $21$, $28$, and $35$, which sum to $84$, and $\\sin A = \\frac{21}{35} = \\frac{3}{5}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): stops at the scale factor $k$.\n* Choice B ($21$): gives $BC$, the leg opposite angle $A$.\n* Choice D ($35$): gives $AB$, the hypotenuse.\n\n**Test Day Takeaway:** A trig ratio fixes the SHAPE of a right triangle; a perimeter or area then fixes the scale factor.",
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
    question: "In right triangle $PQR$, angle $Q$ is a right angle and $\\tan P = \\frac{3}{4}$. If the area of triangle $PQR$ is $96$, what is the length of $\\overline{PR}$?",
    correctAnswer: "20",
    explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~40s):** $\\tan P = \\frac{3}{4}$ makes the legs $3k$ and $4k$, so the area is $\\frac{1}{2}(3k)(4k) = 6k^2 = 96$, $k = 4$, and the hypotenuse is $5k = 20$.\n\n**The Full Solution:**\nStep 1: $\\tan P = \\frac{QR}{PQ} = \\frac{3}{4}$, so $QR = 3k$ and $PQ = 4k$ for some positive $k$, and the hypotenuse is $PR = \\sqrt{(3k)^2 + (4k)^2} = 5k$.\nStep 2: The legs are perpendicular, so the area is $\\frac{1}{2}(3k)(4k) = 6k^2 = 96$, which gives $k^2 = 16$ and $k = 4$.\nStep 3: $PR = 5(4) = 20$. Check: the legs are $12$ and $16$, $\\frac{1}{2}(12)(16) = 96$, and $12^2 + 16^2 = 400 = 20^2$ ✓\n\n**Common Mistakes:**\n* $16$: gives $PQ$, the longer leg, instead of the hypotenuse.\n* $28$: adds the two legs, $12 + 16$.\n* $4$: stops at the scale factor $k$.\n\n**Test Day Takeaway:** A tangent of $\\frac{3}{4}$ means a $3$-$4$-$5$ triangle; write the sides as $3k$, $4k$, $5k$ and let the area pin down $k$.",
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
    question: "A rectangle has a length of $22$ centimeters and a width of $14$ centimeters. What is the area, in square centimeters, of the rectangle?",
    choices: [
      // distractor: adds the length and width instead of multiplying
      { id: "A", text: "$36$" },
      // distractor: computes the perimeter, 2(22 + 14)
      { id: "B", text: "$72$" },
      { id: "C", text: "$308$" },
      // distractor: doubles the product, 2(22)(14)
      { id: "D", text: "$616$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Area is length times width: $22 \\times 14 = 308$ square centimeters.\n\n**The Full Solution:**\nStep 1: The area of a rectangle is $A = \\ell w$.\nStep 2: Substitute $\\ell = 22$ and $w = 14$: $A = 22 \\times 14$.\nStep 3: $A = 308$ square centimeters. Check: $22 \\times 14 = 22 \\times 10 + 22 \\times 4 = 220 + 88 = 308$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): adds the length and width.\n* Choice B ($72$): computes the perimeter, $2(22 + 14)$.\n* Choice D ($616$): doubles the product, mixing the area and perimeter formulas.\n\n**Test Day Takeaway:** Area multiplies the two dimensions; perimeter adds all four sides. Check the units in the question, square centimeters, to know which one is asked for.",
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
    question: "The area of a rectangle is $91$ square meters, and its width is $7$ meters. What is the length, in meters, of the rectangle?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~10s):** $\\ell = \\frac{A}{w} = \\frac{91}{7} = 13$ meters.\n\n**The Full Solution:**\nStep 1: Start from $A = \\ell w$ with $A = 91$ and $w = 7$: $91 = 7\\ell$.\nStep 2: Divide both sides by $7$: $\\ell = \\frac{91}{7}$.\nStep 3: $\\ell = 13$ meters. Check: $13 \\times 7 = 91$ square meters ✓\n\n**Common Mistakes:**\n* $84$: subtracts the width from the area.\n* $637$: multiplies $91$ by $7$ instead of dividing.\n* $38.5$: treats $91$ as the perimeter, computing $\\frac{91}{2} - 7$.\n\n**Test Day Takeaway:** An area divided by one side gives the other side; the units confirm it, since square meters divided by meters is meters.",
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
    question: "A rectangle has a perimeter of $54$ inches and a length of $17$ inches. What is the area, in square inches, of the rectangle?",
    choices: [
      { id: "A", text: "$170$" },
      // distractor: forgets to halve after subtracting both lengths, using a width of 20
      { id: "B", text: "$340$" },
      // distractor: uses half the perimeter, 27, as the width
      { id: "C", text: "$459$" },
      // distractor: subtracts the length once from the perimeter, using a width of 37
      { id: "D", text: "$629$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The width is $\\frac{54}{2} - 17 = 10$, so the area is $17 \\times 10 = 170$ square inches.\n\n**The Full Solution:**\nStep 1: The perimeter is $2\\ell + 2w = 54$, so $\\ell + w = 27$.\nStep 2: With $\\ell = 17$, the width is $w = 27 - 17 = 10$ inches.\nStep 3: The area is $\\ell w = 17 \\times 10 = 170$ square inches. Check: $2(17) + 2(10) = 54$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($340$): subtracts both lengths, $54 - 34 = 20$, but forgets to halve, using a width of $20$.\n* Choice C ($459$): uses half the perimeter, $27$, as the width.\n* Choice D ($629$): subtracts the length only once, $54 - 17 = 37$, and uses $37$ as the width.\n\n**Test Day Takeaway:** Half the perimeter is length plus width; subtract the known side to get the other, then multiply.",
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
    question: "A rectangle's length is $4$ times its width, and its area is $324$. What is the width of the rectangle?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~15s):** $w \\cdot 4w = 4w^2 = 324$, so $w^2 = 81$ and $w = 9$.\n\n**The Full Solution:**\nStep 1: Let the width be $w$. The length is $4w$, so the area is $w(4w) = 4w^2$.\nStep 2: Set the area equal to $324$: $4w^2 = 324$, so $w^2 = 81$.\nStep 3: A width is positive, so $w = 9$. Check: the length is $36$, and $9 \\times 36 = 324$ ✓\n\n**Common Mistakes:**\n* $36$: reports the length, $4w$, instead of the width.\n* $18$: takes $\\sqrt{324}$, treating the rectangle as a square.\n* $81$: stops at $w^2$ without taking the square root.\n\n**Test Day Takeaway:** Write both sides in terms of one variable before using $A = \\ell w$; the result is a quadratic, so remember the square root at the end.",
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
    question: "A rectangle has side lengths $k$ and $k + 5$, and its area is $84$. What is the value of $k$?",
    choices: [
      { id: "A", text: "$7$" },
      // distractor: takes the rejected root k = -12 and drops the negative sign
      { id: "B", text: "$12$" },
      // distractor: treats 84 as the perimeter, solving 2(k + k + 5) = 84
      { id: "C", text: "$18.5$" },
      // distractor: subtracts 5 from 84 instead of solving the quadratic
      { id: "D", text: "$79$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $k(k + 5) = 84$ gives $k^2 + 5k - 84 = 0$, or $(k + 12)(k - 7) = 0$, so the positive solution is $k = 7$.\n\n**The Full Solution:**\nStep 1: Area is length times width: $k(k + 5) = 84$.\nStep 2: Expand and set equal to zero: $k^2 + 5k - 84 = 0$, which factors as $(k + 12)(k - 7) = 0$.\nStep 3: The solutions are $k = -12$ and $k = 7$; a side length must be positive, so $k = 7$. Check: $7 \\times 12 = 84$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): takes the rejected root $k = -12$ and drops the sign; $12$ is the other side length, $k + 5$.\n* Choice C ($18.5$): treats $84$ as the perimeter, solving $4k + 10 = 84$.\n* Choice D ($79$): subtracts $5$ from $84$, as if the two sides added to $84$.\n\n**Test Day Takeaway:** A rectangle with a variable side leads to a quadratic: factor it and keep only the positive root.",
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
    question: "The length of a rectangle is $6$ less than twice its width, and the area of the rectangle is $80$. What is the width of the rectangle?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~30s):** $w(2w - 6) = 80$ gives $w^2 - 3w - 40 = 0$, or $(w - 8)(w + 5) = 0$, so $w = 8$.\n\n**The Full Solution:**\nStep 1: Let the width be $w$. The length is $2w - 6$, so $w(2w - 6) = 80$.\nStep 2: Expand: $2w^2 - 6w - 80 = 0$. Divide by $2$: $w^2 - 3w - 40 = 0$, which factors as $(w - 8)(w + 5) = 0$.\nStep 3: The solutions are $w = 8$ and $w = -5$; a width must be positive, so $w = 8$. Check: the length is $2(8) - 6 = 10$, and $8 \\times 10 = 80$ ✓\n\n**Common Mistakes:**\n* $10$: reports the length, $2w - 6$, instead of the width.\n* $5$: takes the rejected root $w = -5$ and drops the sign.\n* $\\frac{46}{3}$: treats $80$ as the perimeter, solving $2w + 2(2w - 6) = 80$.\n\n**Test Day Takeaway:** Translate \"6 less than twice\" as $2w - 6$, not $6 - 2w$, then solve the quadratic and keep the positive root.",
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
      // distractor: copies the 4 percent change in area as the change in width
      { id: "A", text: "$4$" },
      { id: "B", text: "$20$" },
      // distractor: subtracts the percents, 30 - 4 = 26, instead of dividing the multipliers
      { id: "C", text: "$26$" },
      // distractor: reports the width multiplier 0.80 as the percent decrease
      { id: "D", text: "$80$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Area changes by the product of the multipliers: $1.30m = 1.04$, so $m = 0.80$ and the width decreases by $20\\%$.\n\n**The Full Solution:**\nStep 1: Let the original length and width be $L$ and $W$, so the original area is $LW$. The new length is $1.30L$, and the new width is $mW$, where $m = 1 - \\frac{p}{100}$.\nStep 2: The new area is $(1.30L)(mW) = 1.30m(LW)$, and it equals $1.04LW$, so $1.30m = 1.04$ and $m = \\frac{1.04}{1.30} = 0.80$.\nStep 3: A multiplier of $0.80$ is a decrease of $20\\%$, so $p = 20$. Check: $(1.30)(0.80) = 1.04$, an area $4\\%$ greater ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): copies the $4\\%$ change in area, which is the result of both side changes, not the change in width.\n* Choice C ($26$): subtracts the percents, $30 - 4 = 26$, as if percent changes on a product added.\n* Choice D ($80$): reports the multiplier $0.80$ as the percent decrease; $0.80$ means $80\\%$ of the original width remains, a $20\\%$ decrease.\n\n**Test Day Takeaway:** Percent changes to the sides of a rectangle multiply. Turn each change into a multiplier, set the product equal to the area's multiplier, and solve.",
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
    question: "In the $xy$-plane, the graph of $y = kx + 18$, where $k$ is a negative constant, forms a triangle with the $x$-axis and the $y$-axis. The area of the triangle is $108$ square units. What is the value of $k$?",
    correctAnswer: "-1.5",
    explanation: "**SAT Pattern: Triangle Area with a Line Constraint**\n\n**The correct answer is -1.5.**\n\n**The Fast Way (~45s):** The triangle's legs are the intercepts $18$ and $-\\frac{18}{k}$, so $\\frac{1}{2}(18)\\left(-\\frac{18}{k}\\right) = 108$, which gives $k = -1.5$.\n\n**The Full Solution:**\nStep 1: The line crosses the $y$-axis at $(0, 18)$. It crosses the $x$-axis where $kx + 18 = 0$, at $x = -\\frac{18}{k}$, which is positive because $k$ is negative.\nStep 2: The axes are perpendicular, so the triangle is a right triangle with legs $18$ and $-\\frac{18}{k}$. Its area is $\\frac{1}{2}(18)\\left(-\\frac{18}{k}\\right) = -\\frac{162}{k}$.\nStep 3: Set $-\\frac{162}{k} = 108$, so $k = -\\frac{162}{108} = -1.5$. Check: with $k = -1.5$, the $x$-intercept is $\\frac{18}{1.5} = 12$, and $\\frac{1}{2}(12)(18) = 108$ ✓\n\n**Common Mistakes:**\n* $-3$: drops the factor $\\frac{1}{2}$, solving $-\\frac{324}{k} = 108$.\n* $12$: reports the $x$-intercept, a length, instead of the slope.\n* $1.5$: finds the size of the slope but ignores that $k$ is negative.\n\n**Test Day Takeaway:** A line and the two axes always enclose a right triangle whose legs are the intercepts, so its area is half the product of the intercepts.",
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
    question: "In right triangle $DEF$ shown, what is the length of $\\overline{DF}$?",
    diagram: { type: "rightTriangle", params: { labels: ["D", "E", "F"], sideLabels: ["16", "12", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: averages the two legs, (16 + 12) / 2 = 14
      { id: "A", text: "$14$" },
      { id: "B", text: "$20$" },
      // distractor: adds the two legs, 16 + 12 = 28, instead of using the Pythagorean theorem
      { id: "C", text: "$28$" },
      // distractor: stops at DF squared = 400 without taking the square root
      { id: "D", text: "$400$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The legs $12$ and $16$ are $4$ times $3$ and $4$, so the hypotenuse is $4 \\times 5 = 20$.\n\n**The Full Solution:**\nStep 1: Angle $E$ is the right angle, so $\\overline{DE}$ and $\\overline{EF}$ are the legs and $\\overline{DF}$ is the hypotenuse.\nStep 2: By the Pythagorean theorem, $DF^{2} = 16^{2} + 12^{2} = 256 + 144 = 400$.\nStep 3: $DF = \\sqrt{400} = 20$. Check: $12$-$16$-$20$ is the $3$-$4$-$5$ triple scaled by $4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): averages the legs, $\\frac{16 + 12}{2} = 14$, but the hypotenuse must be longer than either leg.\n* Choice C ($28$): adds the legs, $16 + 12 = 28$; the hypotenuse is always less than the sum of the legs.\n* Choice D ($400$): stops at $DF^{2}$ without taking the square root.\n\n**Test Day Takeaway:** Check the legs for a scaled $3$-$4$-$5$ triple first; when they fit, the hypotenuse takes one multiplication.",
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
    question: "In the right triangle shown, what is the value of $x$?",
    diagram: { type: "rightTriangle", params: { sideLabels: ["x", "24", "30"], rightAngleVertex: 1, figureNote: true, vertices: [[0, 0], [18, 0], [18, 24]] } },
    correctAnswer: "18",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is 18.**\n\n**The Fast Way (~10s):** $24$ and $30$ are $6$ times $4$ and $5$, so the missing leg is $6 \\times 3 = 18$.\n\n**The Full Solution:**\nStep 1: The side of length $30$ is opposite the right angle, so it is the hypotenuse, and $x$ and $24$ are the legs.\nStep 2: By the Pythagorean theorem, $x^{2} + 24^{2} = 30^{2}$, so $x^{2} = 900 - 576 = 324$.\nStep 3: $x = \\sqrt{324} = 18$. Check: $18^{2} + 24^{2} = 324 + 576 = 900 = 30^{2}$ ✓\n\n**Common Mistakes:**\n* $6$: subtracts the side lengths, $30 - 24$, instead of their squares.\n* $38.4$: treats $30$ as a leg and finds $\\sqrt{24^{2} + 30^{2}} \\approx 38.4$.\n* $324$: stops at $x^{2}$ without taking the square root.\n\n**Test Day Takeaway:** Find the hypotenuse first: it is the side across from the right angle, and it is the one whose square is the sum of the other two.",
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
    question: "What is the perimeter of the right triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [40, 0], [40, 30]], sideLabels: ["40", "30", ""], rightAngleVertex: 1 } },
    choices: [
      // distractor: finds the hypotenuse, 50, and stops before adding the other two sides
      { id: "A", text: "$50$" },
      // distractor: adds only the two given legs, 30 + 40, and omits the hypotenuse
      { id: "B", text: "$70$" },
      { id: "C", text: "$120$" },
      // distractor: computes the area, one half times 30 times 40, instead of the perimeter
      { id: "D", text: "$600$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $30$-$40$-$50$ is the $3$-$4$-$5$ triple scaled by $10$, so the perimeter is $30 + 40 + 50 = 120$.\n\n**The Full Solution:**\nStep 1: The legs are $40$ and $30$, so the hypotenuse is $\\sqrt{40^{2} + 30^{2}} = \\sqrt{1{,}600 + 900} = \\sqrt{2{,}500} = 50$.\nStep 2: The perimeter is the sum of all three sides: $40 + 30 + 50$.\nStep 3: The perimeter is $120$. Check: $30^{2} + 40^{2} = 2{,}500 = 50^{2}$, so the three sides form a right triangle ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($50$): finds the hypotenuse and stops before adding the other two sides.\n* Choice B ($70$): adds only the two labeled sides and leaves out the hypotenuse.\n* Choice D ($600$): computes the area, $\\frac{1}{2}(30)(40)$, instead of the distance around the triangle.\n\n**Test Day Takeaway:** A perimeter question about a right triangle usually hides one side; find it with the Pythagorean theorem, then add all three.",
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
    question: "In the right triangle shown, $k$ is a positive constant. The area of the triangle is $294$ square units. What is the length of the hypotenuse of the triangle?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [28, 0], [28, 21]], sideLabels: ["4k", "3k", ""], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "35",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is 35.**\n\n**The Fast Way (~35s):** $\\frac{1}{2}(3k)(4k) = 6k^{2} = 294$ gives $k = 7$, and a right triangle with legs $3k$ and $4k$ has hypotenuse $5k = 35$.\n\n**The Full Solution:**\nStep 1: The legs are $3k$ and $4k$, so the area is $\\frac{1}{2}(3k)(4k) = 6k^{2}$.\nStep 2: Set $6k^{2} = 294$, so $k^{2} = 49$ and $k = 7$, since $k$ is positive.\nStep 3: The legs are $21$ and $28$, so the hypotenuse is $\\sqrt{21^{2} + 28^{2}} = \\sqrt{441 + 784} = \\sqrt{1{,}225} = 35$. Check: $\\frac{1}{2}(21)(28) = 294$ ✓\n\n**Common Mistakes:**\n* $7$: reports $k$ instead of the length of the hypotenuse.\n* $28$: reports the longer leg, $4k$, instead of the hypotenuse.\n* $24.7$: drops the $\\frac{1}{2}$, solving $12k^{2} = 294$ to get $k \\approx 4.95$ and a hypotenuse of about $24.7$.\n\n**Test Day Takeaway:** When both legs are multiples of the same constant, the area pins down the constant, and the $3$-$4$-$5$ ratio gives the hypotenuse as $5k$.",
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
    question: "A right triangle has side lengths in the ratio $3 : 4 : 5$ and a perimeter of $84$. What is the length of the shortest side?",
    choices: [
      // distractor: finds the scale factor, 84 / 12 = 7, and stops
      { id: "A", text: "$7$" },
      { id: "B", text: "$21$" },
      // distractor: reports the middle side, 4(7) = 28
      { id: "C", text: "$28$" },
      // distractor: reports the longest side, 5(7) = 35
      { id: "D", text: "$35$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The ratio parts total $3 + 4 + 5 = 12$, so each part is $\\frac{84}{12} = 7$ and the shortest side is $3(7) = 21$.\n\n**The Full Solution:**\nStep 1: Write the sides as $3x$, $4x$, and $5x$.\nStep 2: The perimeter is $3x + 4x + 5x = 12x = 84$, so $x = 7$.\nStep 3: The shortest side is $3x = 21$. Check: the sides are $21$, $28$, and $35$, their sum is $84$, and $21^{2} + 28^{2} = 1{,}225 = 35^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): finds the scale factor $x$ and stops before multiplying by $3$.\n* Choice C ($28$): reports the middle side, $4x$.\n* Choice D ($35$): reports the longest side, $5x$, instead of the shortest.\n\n**Test Day Takeaway:** For sides in a ratio, add the ratio parts, divide the total by that sum, and then multiply by the part the question names.",
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
    question: "What is the area of the right triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [60, 0], [60, 45]], sideLabels: ["", "45", "75"], rightAngleVertex: 1 } },
    correctAnswer: "1350",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is 1350.**\n\n**The Fast Way (~25s):** $45$ and $75$ are $15$ times $3$ and $5$, so the missing leg is $15 \\times 4 = 60$ and the area is $\\frac{1}{2}(45)(60) = 1{,}350$.\n\n**The Full Solution:**\nStep 1: The side of length $75$ is across from the right angle, so it is the hypotenuse. The unlabeled side is the other leg.\nStep 2: The missing leg is $\\sqrt{75^{2} - 45^{2}} = \\sqrt{5{,}625 - 2{,}025} = \\sqrt{3{,}600} = 60$.\nStep 3: The area is half the product of the legs: $\\frac{1}{2}(45)(60) = 1{,}350$. Check: $45^{2} + 60^{2} = 2{,}025 + 3{,}600 = 5{,}625 = 75^{2}$ ✓\n\n**Common Mistakes:**\n* $1687.5$: multiplies a leg by the hypotenuse, $\\frac{1}{2}(45)(75)$; the base and height must be the two legs.\n* $2700$: forgets the factor $\\frac{1}{2}$ and reports $45 \\times 60$.\n* $60$: finds the missing leg and stops.\n\n**Test Day Takeaway:** The area of a right triangle uses the two legs, so find the missing leg first; the hypotenuse is never the base or the height.",
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
    question: "In the right triangle shown, the length of the hypotenuse is $6$ greater than the length of the longer leg. What is the area of the triangle?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 18]], sideLabels: ["4x", "3x", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: compares the hypotenuse with the shorter leg, 5x = 3x + 6, so x = 3 and the area is (1/2)(9)(12) = 54
      { id: "A", text: "$54$" },
      // distractor: finds the perimeter, 18 + 24 + 30, instead of the area
      { id: "B", text: "$72$" },
      { id: "C", text: "$216$" },
      // distractor: forgets the factor 1/2 and multiplies the legs, 18 times 24
      { id: "D", text: "$432$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The hypotenuse is $5x$, so $5x = 4x + 6$ gives $x = 6$; the legs are $18$ and $24$, and the area is $\\frac{1}{2}(18)(24) = 216$.\n\n**The Full Solution:**\nStep 1: The legs are $3x$ and $4x$, so the hypotenuse is $\\sqrt{(3x)^{2} + (4x)^{2}} = \\sqrt{25x^{2}} = 5x$.\nStep 2: The hypotenuse is $6$ greater than the longer leg, $4x$: $5x = 4x + 6$, so $x = 6$.\nStep 3: The legs are $3(6) = 18$ and $4(6) = 24$, so the area is $\\frac{1}{2}(18)(24) = 216$. Check: the hypotenuse is $30$, and $30 - 24 = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($54$): compares the hypotenuse with the shorter leg, $5x = 3x + 6$, which gives $x = 3$ and an area of $\\frac{1}{2}(9)(12) = 54$.\n* Choice B ($72$): finds the perimeter, $18 + 24 + 30 = 72$, instead of the area.\n* Choice D ($432$): multiplies the legs, $18 \\times 24$, and forgets the factor $\\frac{1}{2}$.\n\n**Test Day Takeaway:** In a $3x$-$4x$-$5x$ triangle every side is a multiple of $x$, so one stated difference between two sides determines $x$ and then every length.",
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
    question: "The lengths of the legs of a right triangle are in the ratio $5 : 12$, and the area of the triangle is $750$ square units. What is the length of the hypotenuse?",
    correctAnswer: "65",
    explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is 65.**\n\n**The Fast Way (~30s):** With legs $5k$ and $12k$, the area is $30k^{2} = 750$, so $k = 5$ and the hypotenuse is $13k = 65$.\n\n**The Full Solution:**\nStep 1: Write the legs as $5k$ and $12k$. The area is $\\frac{1}{2}(5k)(12k) = 30k^{2}$.\nStep 2: $30k^{2} = 750$, so $k^{2} = 25$ and $k = 5$. The legs are $25$ and $60$.\nStep 3: The hypotenuse is $\\sqrt{25^{2} + 60^{2}} = \\sqrt{625 + 3{,}600} = \\sqrt{4{,}225} = 65$. Check: $\\frac{1}{2}(25)(60) = 750$ ✓\n\n**Common Mistakes:**\n* $45.96$: forgets the factor $\\frac{1}{2}$, so $60k^{2} = 750$ gives $k \\approx 3.54$ and a hypotenuse of about $46$.\n* $85$: adds the legs, $25 + 60$, instead of using the Pythagorean theorem.\n* $60$: reports the longer leg instead of the hypotenuse.\n\n**Test Day Takeaway:** Ratio plus area is a two-step: write the legs as multiples of $k$, use the area to find $k$, then use the $5$-$12$-$13$ triple for the hypotenuse.",
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
    question: "In the $xy$-plane, a circle has center $(-3, 2)$ and passes through the point $(5, 2)$. What is the radius of the circle?",
    choices: [
      // distractor: subtracts 5 - 3 = 2, dropping the negative sign of the center's x-coordinate
      { id: "A", text: "$2$" },
      // distractor: halves the distance 8, as if the segment from the center to the point were a diameter
      { id: "B", text: "$4$" },
      { id: "C", text: "$8$" },
      // distractor: doubles the distance 8, giving the diameter instead of the radius
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The center $(-3, 2)$ and the point $(5, 2)$ have the same $y$-coordinate, so the radius is $5 - (-3) = 8$.\n\n**The Full Solution:**\nStep 1: Every point on a circle is one radius from the center, so the radius is the distance from $(-3, 2)$ to $(5, 2)$.\nStep 2: Both points lie on the horizontal line $y = 2$, so the distance between them is the difference of their $x$-coordinates.\nStep 3: The radius is $5 - (-3) = 8$. Check: moving $8$ units to the right of $(-3, 2)$ gives $(5, 2)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): computes $5 - 3$, dropping the negative sign of $-3$.\n* Choice B ($4$): halves the distance, as if the segment from the center to the point were a diameter.\n* Choice D ($16$): doubles the distance, giving the diameter instead of the radius.\n\n**Test Day Takeaway:** The radius is the distance from the center to any point on the circle; when the two points share a coordinate, subtract the other coordinates.",
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
    question: "Point $(3, -7)$ lies on a circle in the $xy$-plane with center $(3, 5)$. What is the radius of the circle?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is 12.**\n\n**The Fast Way (~15s):** The point and the center have the same $x$-coordinate, so the radius is $5 - (-7) = 12$.\n\n**The Full Solution:**\nStep 1: The radius is the distance from the center $(3, 5)$ to the point $(3, -7)$ on the circle.\nStep 2: Both points lie on the vertical line $x = 3$, so the distance between them is the difference of their $y$-coordinates.\nStep 3: The radius is $5 - (-7) = 12$. Check: moving $12$ units down from $(3, 5)$ gives $(3, -7)$ ✓\n\n**Common Mistakes:**\n* $2$: computes $7 - 5$, dropping the negative sign of $-7$.\n* $24$: doubles the distance, giving the diameter instead of the radius.\n* $6$: halves the distance, as if the segment were a diameter.\n\n**Test Day Takeaway:** The radius is the distance from the center to any point on the circle; when the two points share a coordinate, subtract the other coordinates.",
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
    question: "A circle in the $xy$-plane has center $(1, -3)$ and passes through $(13, 2)$. What is the circumference of the circle?",
    choices: [
      // distractor: uses pi times r, which is half the circumference
      { id: "A", text: "$13\\pi$" },
      { id: "B", text: "$26\\pi$" },
      // distractor: computes the area, pi times 13 squared, instead of the circumference
      { id: "C", text: "$169\\pi$" },
      // distractor: uses 2 times pi times r squared, mixing the area and circumference formulas
      { id: "D", text: "$338\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The differences are $12$ and $5$, so $r = 13$ and the circumference is $2\\pi(13) = 26\\pi$.\n\n**The Full Solution:**\nStep 1: The radius is the distance from the center $(1, -3)$ to $(13, 2)$. The differences are $13 - 1 = 12$ and $2 - (-3) = 5$.\nStep 2: $r = \\sqrt{12^{2} + 5^{2}} = \\sqrt{169} = 13$.\nStep 3: The circumference is $2\\pi r = 2\\pi(13) = 26\\pi$. Check: $(13 - 1)^{2} + (2 + 3)^{2} = 169 = 13^{2}$, so $(13, 2)$ is on the circle of radius $13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13\\pi$): uses $\\pi r$, which is half the circumference.\n* Choice C ($169\\pi$): computes the area, $\\pi r^{2}$, instead of the circumference.\n* Choice D ($338\\pi$): mixes the two formulas, computing $2\\pi r^{2}$.\n\n**Test Day Takeaway:** Find the radius as a distance first, then decide whether the question wants $2\\pi r$ (circumference) or $\\pi r^{2}$ (area).",
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
    question: "$(x - 6)^{2} + (y - k)^{2} = 289$\nIn the given equation, $k$ is a positive constant. The graph of the equation in the $xy$-plane is a circle that passes through the point $(-2, 3)$. What is the value of $k$?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is 18.**\n\n**The Fast Way (~35s):** Substitute $(-2, 3)$: $64 + (3 - k)^{2} = 289$, so $(3 - k)^{2} = 225$ and $k = 18$ (the other value, $-12$, is negative).\n\n**The Full Solution:**\nStep 1: The point $(-2, 3)$ is on the circle, so it satisfies the equation: $(-2 - 6)^{2} + (3 - k)^{2} = 289$.\nStep 2: $(-8)^{2} = 64$, so $(3 - k)^{2} = 289 - 64 = 225$, which means $3 - k = 15$ or $3 - k = -15$.\nStep 3: These give $k = -12$ or $k = 18$. Since $k$ is positive, $k = 18$. Check: $(-2 - 6)^{2} + (3 - 18)^{2} = 64 + 225 = 289$ ✓\n\n**Common Mistakes:**\n* $-12$: keeps the root that the condition $k > 0$ rules out.\n* $12$: solves $3 - k = 15$ but drops the sign, writing $k = 12$.\n* $15$: takes the square root, $15$, as the value of $k$ instead of solving $3 - k = \\pm 15$.\n\n**Test Day Takeaway:** A point on a circle satisfies the circle's equation; substitute it, solve the squared term, and use the stated sign condition to pick the root.",
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
    question: "$(x + 3)^{2} + (y - 4)^{2} = 169$\nIn the $xy$-plane, the graph of the given equation is a circle. Which of the following points lies on the circle?",
    choices: [
      { id: "A", text: "$(2, -8)$" },
      // distractor: treats the radius 13 as the sum of the coordinate differences, 8 + 5 = 13, instead of using the distance formula
      { id: "B", text: "$(5, -1)$" },
      // distractor: uses (3, -4) as the center by reading the signs in the equation backward
      { id: "C", text: "$(8, 8)$" },
      // distractor: uses (3, 4) as the center by flipping the sign of the x-coordinate only
      { id: "D", text: "$(15, 9)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The center is $(-3, 4)$ and the radius is $13$. From $(-3, 4)$ to $(2, -8)$ the differences are $5$ and $-12$, and $\\sqrt{25 + 144} = 13$.\n\n**The Full Solution:**\nStep 1: The equation has the form $(x - h)^{2} + (y - k)^{2} = r^{2}$ with $h = -3$, $k = 4$, and $r^{2} = 169$, so the center is $(-3, 4)$ and the radius is $13$.\nStep 2: A point lies on the circle exactly when its distance from $(-3, 4)$ is $13$, that is, when it satisfies the equation.\nStep 3: For $(2, -8)$: $(2 + 3)^{2} + (-8 - 4)^{2} = 25 + 144 = 169$. Check the others: $(5, -1)$ gives $64 + 25 = 89$, $(8, 8)$ gives $121 + 16 = 137$, and $(15, 9)$ gives $324 + 25 = 349$, so only $(2, -8)$ works ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(5, -1)$): its coordinate differences from the center, $8$ and $5$, add to $13$, but distance is $\\sqrt{8^{2} + 5^{2}} = \\sqrt{89}$, not $8 + 5$.\n* Choice C ($(8, 8)$): is $13$ units from $(3, -4)$, the center you get by reading both signs in the equation backward.\n* Choice D ($(15, 9)$): is $13$ units from $(3, 4)$, the center you get by flipping the sign of the $x$-coordinate only.\n\n**Test Day Takeaway:** In $(x - h)^{2} + (y - k)^{2} = r^{2}$, the center is $(h, k)$, so $(x + 3)$ means $h = -3$; then test each point by substituting it into the equation.",
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
    question: "In the $xy$-plane, the points $(4, -7)$ and $(4, 15)$ are the endpoints of a diameter of a circle. What is the radius of the circle?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is 11.**\n\n**The Fast Way (~20s):** The endpoints share the $x$-coordinate $4$, so the diameter is $15 - (-7) = 22$ and the radius is $\\frac{22}{2} = 11$.\n\n**The Full Solution:**\nStep 1: Both endpoints have $x$-coordinate $4$, so the diameter is vertical and its length is the difference of the $y$-coordinates: $15 - (-7) = 22$.\nStep 2: The radius is half the diameter: $\\frac{22}{2} = 11$.\nStep 3: The center is the midpoint of the diameter, $(4, 4)$. Check: $15 - 4 = 11$ and $4 - (-7) = 11$, so both endpoints are $11$ units from the center ✓\n\n**Common Mistakes:**\n* $22$: reports the diameter instead of the radius.\n* $4$: computes $15 - 7 = 8$, dropping the negative sign of $-7$, and then halves it.\n\n**Test Day Takeaway:** A diameter's endpoints are two radii apart; find the length of the diameter, then halve it.",
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
    question: "$(x - 4)^{2} + (y + 1)^{2} = 100$\nIn the $xy$-plane, the graph of the given equation is circle $A$. Circle $B$ has the same center as circle $A$ and passes through the point $(9, 11)$. What is the area of the region inside circle $B$ and outside circle $A$?",
    choices: [
      // distractor: squares the difference of the radii, (13 - 10) squared, instead of subtracting the areas
      { id: "A", text: "$9\\pi$" },
      { id: "B", text: "$69\\pi$" },
      // distractor: gives the area of circle B only
      { id: "C", text: "$169\\pi$" },
      // distractor: adds the two areas, 169 pi + 100 pi, instead of subtracting
      { id: "D", text: "$269\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Circle $A$ has center $(4, -1)$ and radius $10$, and circle $B$'s radius is the distance from $(4, -1)$ to $(9, 11)$, $\\sqrt{25 + 144} = 13$. The region's area is $169\\pi - 100\\pi = 69\\pi$.\n\n**The Full Solution:**\nStep 1: From the given equation, circle $A$ has center $(4, -1)$ and radius $\\sqrt{100} = 10$, so its area is $100\\pi$.\nStep 2: Circle $B$ has center $(4, -1)$ and passes through $(9, 11)$, so its radius squared is $(9 - 4)^{2} + (11 - (-1))^{2} = 25 + 144 = 169$. Its radius is $13$ and its area is $169\\pi$.\nStep 3: The region inside circle $B$ and outside circle $A$ has area $169\\pi - 100\\pi = 69\\pi$. Check: $69\\pi + 100\\pi = 169\\pi$, the area of circle $B$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9\\pi$): squares the difference of the radii, $(13 - 10)^{2} = 9$, instead of subtracting the areas.\n* Choice C ($169\\pi$): gives the area of circle $B$ without removing circle $A$.\n* Choice D ($269\\pi$): adds the two areas instead of subtracting them.\n\n**Test Day Takeaway:** The area between two circles with the same center is the larger area minus the smaller area; subtract the areas, not the radii.",
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
    question: "In the $xy$-plane, a circle has center $(3, -2)$ and passes through the point $(9, 6)$. The point $(k, -2)$, where $k > 3$, also lies on the circle. What is the value of $k$?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is 13.**\n\n**The Fast Way (~40s):** The radius is $\\sqrt{(9 - 3)^{2} + (6 - (-2))^{2}} = \\sqrt{100} = 10$. The point $(k, -2)$ is on the horizontal line through the center, so $k = 3 + 10 = 13$.\n\n**The Full Solution:**\nStep 1: The radius is the distance from the center $(3, -2)$ to $(9, 6)$: $\\sqrt{6^{2} + 8^{2}} = \\sqrt{100} = 10$.\nStep 2: The point $(k, -2)$ has the same $y$-coordinate as the center, so it is $10$ units to the left or right of the center: $k = 3 - 10 = -7$ or $k = 3 + 10 = 13$.\nStep 3: Since $k > 3$, $k = 13$. Check: $(13 - 3)^{2} + (-2 - (-2))^{2} = 100 = 10^{2}$ ✓\n\n**Common Mistakes:**\n* $-7$: takes the point to the left of the center, which the condition $k > 3$ rules out.\n* $10$: reports the radius instead of the $x$-coordinate of the point.\n* $9$: copies the $x$-coordinate of the given point $(9, 6)$.\n\n**Test Day Takeaway:** Find the radius from the center and the given point, then move one radius along the horizontal or vertical line through the center.",
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
    question: "A rectangular prism has a length of $24$ centimeters, a width of $15$ centimeters, and a height of $8$ centimeters. What is the volume, in cubic centimeters, of the prism?",
    choices: [
      // distractor: adds the three dimensions, 24 + 15 + 8, instead of multiplying them
      { id: "A", text: "$47$" },
      // distractor: multiplies only the length and width, 24 times 15, and leaves out the height
      { id: "B", text: "$360$" },
      // distractor: computes the surface area, 2(360 + 192 + 120), instead of the volume
      { id: "C", text: "$1{,}344$" },
      { id: "D", text: "$2{,}880$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $V = (24)(15)(8) = 360 \\times 8 = 2{,}880$.\n\n**The Full Solution:**\nStep 1: The volume of a rectangular prism is length times width times height.\nStep 2: $(24)(15) = 360$, the area of the base in square centimeters.\nStep 3: $(360)(8) = 2{,}880$ cubic centimeters. Check: $(15)(8) = 120$ and $(120)(24) = 2{,}880$, the same product in a different order ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($47$): adds the dimensions, $24 + 15 + 8$, instead of multiplying them.\n* Choice B ($360$): finds the area of the base, $24 \\times 15$, and stops before multiplying by the height.\n* Choice C ($1{,}344$): computes the surface area, $2(360 + 192 + 120)$, which is measured in square units, not cubic units.\n\n**Test Day Takeaway:** Volume multiplies all three dimensions; surface area adds the areas of the six faces. Let the units in the question, cubic or square, tell you which one is asked for.",
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
    question: "A rectangular prism has a base area of $45$ and a height of $6$. What is the volume of the prism?",
    correctAnswer: "270",
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**The correct answer is 270.**\n\n**The Fast Way (~5s):** Volume is base area times height: $45 \\times 6 = 270$.\n\n**The Full Solution:**\nStep 1: The volume of a rectangular prism is $V = \\ell wh$, and $\\ell w$ is the area of the base, so $V = Bh$, where $B$ is the base area.\nStep 2: Substitute $B = 45$ and $h = 6$: $V = 45 \\times 6$.\nStep 3: $V = 270$. Check: $\\frac{270}{6} = 45$, the given base area ✓\n\n**Common Mistakes:**\n* $51$: adds the base area and the height.\n* $135$: multiplies by $\\frac{1}{2}$, using the formula for a triangle instead of a prism.\n* $7.5$: divides the base area by the height.\n\n**Test Day Takeaway:** For any prism, volume is the area of the base times the height, so a given base area saves you from needing the length and width.",
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
    question: "A rectangular prism has a volume of $320$ cubic meters. The length of the prism is $5$ meters, and the width is $8$ meters. What is the surface area, in square meters, of the prism?",
    choices: [
      // distractor: adds the three distinct face areas, 40 + 40 + 64, without doubling them
      { id: "A", text: "$144$" },
      // distractor: finds only the four side faces, 2(5 + 8)(8), and leaves out the top and bottom
      { id: "B", text: "$208$" },
      { id: "C", text: "$288$" },
      // distractor: reports the volume, 320, as though cubic and square units were interchangeable
      { id: "D", text: "$320$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Volume → Missing Dimension → Surface Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The height is $\\frac{320}{5 \\times 8} = 8$, so the surface area is $2(40 + 40 + 64) = 288$.\n\n**The Full Solution:**\nStep 1: Volume is length times width times height: $(5)(8)h = 320$, so $40h = 320$ and $h = 8$ meters.\nStep 2: The three distinct face areas are $(5)(8) = 40$, $(5)(8) = 40$, and $(8)(8) = 64$ square meters, and each appears twice.\nStep 3: The surface area is $2(40 + 40 + 64) = 2(144) = 288$ square meters. Check: $(5)(8)(8) = 320$, the given volume ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($144$): adds the three distinct face areas but never doubles them for the opposite faces.\n* Choice B ($208$): finds the area of the four side faces, $2(5 + 8)(8)$, and leaves out the top and bottom.\n* Choice D ($320$): reports the volume, which is measured in cubic meters, not square meters.\n\n**Test Day Takeaway:** Use the volume to find the missing dimension first; a rectangular prism has three different face areas, and each one appears twice.",
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
    question: "A rectangular prism has a volume of $6{,}048$, a length of $14$, and a width of $12$. What is the height of the prism?",
    correctAnswer: "36",
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**The correct answer is 36.**\n\n**The Fast Way (~20s):** The base area is $14 \\times 12 = 168$, so the height is $\\frac{6{,}048}{168} = 36$.\n\n**The Full Solution:**\nStep 1: Volume is length times width times height: $(14)(12)h = 6{,}048$.\nStep 2: $(14)(12) = 168$, so $168h = 6{,}048$.\nStep 3: $h = \\frac{6{,}048}{168} = 36$. Check: $(14)(12)(36) = 168 \\times 36 = 6{,}048$ ✓\n\n**Common Mistakes:**\n* $432$: divides the volume by the length only, $\\frac{6{,}048}{14}$.\n* $504$: divides the volume by the width only, $\\frac{6{,}048}{12}$.\n* $6022$: subtracts the length and width from the volume, $6{,}048 - 14 - 12$.\n\n**Test Day Takeaway:** To find a missing dimension, divide the volume by the product of the two known dimensions, not by each one separately.",
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
    question: "A sandbox in the shape of a rectangular prism is $6$ feet long, $4$ feet wide, and $2$ feet deep. Sand costs \\$3 per cubic foot. What is the cost of the sand needed to fill the sandbox?",
    choices: [
      // distractor: adds the three dimensions, 6 + 4 + 2 = 12, and multiplies that sum by 3
      { id: "A", text: "\\$36" },
      // distractor: uses the area of the base, (6)(4) = 24 square feet, without the depth
      { id: "B", text: "\\$72" },
      { id: "C", text: "\\$144" },
      // distractor: uses the surface area, 2(24 + 12 + 8) = 88 square feet, instead of the volume
      { id: "D", text: "\\$264" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The sandbox holds $(6)(4)(2) = 48$ cubic feet of sand, and $48 \\times 3 = 144$, so the sand costs \\$144.\n\n**The Full Solution:**\nStep 1: The volume of a rectangular prism is the product of its three dimensions: $(6)(4)(2)$.\nStep 2: $(6)(4)(2) = 48$ cubic feet.\nStep 3: At \\$3 per cubic foot, the cost is $48 \\times 3 = 144$ dollars. Check: $\\frac{144}{3} = 48 = (6)(4)(2)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (\\$36): adds the dimensions, $6 + 4 + 2 = 12$, and multiplies that sum by $3$.\n* Choice B (\\$72): uses the area of the base, $(6)(4) = 24$ square feet, and ignores the depth.\n* Choice D (\\$264): uses the surface area, $2(24 + 12 + 8) = 88$ square feet, instead of the volume.\n\n**Test Day Takeaway:** Filling a container is a volume question: multiply all three dimensions before applying a price per cubic unit.",
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
    question: "A rectangular prism has a length of $8$ centimeters and a volume of $400$ cubic centimeters. The height of the prism is twice its width. What is the width, in centimeters, of the prism?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**The correct answer is 5.**\n\n**The Fast Way (~25s):** With width $w$ and height $2w$, $8(w)(2w) = 16w^{2} = 400$, so $w^{2} = 25$ and $w = 5$.\n\n**The Full Solution:**\nStep 1: Let the width be $w$ centimeters, so the height is $2w$ centimeters.\nStep 2: The volume is length times width times height: $8 \\cdot w \\cdot 2w = 16w^{2}$, so $16w^{2} = 400$.\nStep 3: Then $w^{2} = 25$, and since a width is positive, $w = 5$. Check: $8 \\cdot 5 \\cdot 10 = 400$ ✓\n\n**Common Mistakes:**\n* $25$: stops at $w^{2}$ without taking the square root.\n* $10$: gives the height, $2w$, instead of the width.\n* About $7.07$: forgets the factor of $2$ and solves $8w^{2} = 400$.\n\n**Test Day Takeaway:** Write every dimension in terms of one variable, then solve the volume equation for that variable.",
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
    question: "The length of a rectangular prism is increased by $20\\%$, and the width is decreased by $25\\%$. The height is unchanged. The volume of the resulting prism is $1{,}350$ cubic centimeters. What is the volume, in cubic centimeters, of the original prism?",
    choices: [
      // distractor: divides by the 1.2 growth factor only and ignores the width decrease: 1350 / 1.2
      { id: "A", text: "$1{,}125$" },
      // distractor: assumes the increase and decrease cancel, so the volume is unchanged
      { id: "B", text: "$1{,}350$" },
      { id: "C", text: "$1{,}500$" },
      // distractor: divides by the 0.75 shrink factor only and ignores the length increase: 1350 / 0.75
      { id: "D", text: "$1{,}800$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Inverse Multi-Percent Change (Volume)**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The volume is multiplied by $(1.20)(0.75) = 0.90$, so the original volume is $\\frac{1{,}350}{0.90} = 1{,}500$.\n\n**The Full Solution:**\nStep 1: Volume is length times width times height. Multiplying the length by $1.20$ and the width by $0.75$ multiplies the volume by $(1.20)(0.75) = 0.90$.\nStep 2: If $V$ is the original volume, then $0.90V = 1{,}350$.\nStep 3: $V = \\frac{1{,}350}{0.90} = 1{,}500$ cubic centimeters. Check: $1{,}500 \\times 1.20 = 1{,}800$, and $1{,}800 \\times 0.75 = 1{,}350$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1{,}125$): divides by $1.20$ only, ignoring the decrease in width.\n* Choice B ($1{,}350$): assumes the two changes cancel, but a $20\\%$ increase and a $25\\%$ decrease multiply to $0.90$, not $1$.\n* Choice D ($1{,}800$): divides by $0.75$ only, ignoring the increase in length.\n\n**Test Day Takeaway:** Successive percent changes multiply into one factor; to undo them, divide by that single factor rather than adding or subtracting the percents.",
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
    question: "A cube has the same volume as a rectangular prism with dimensions $8$ centimeters by $12$ centimeters by $18$ centimeters. What is the surface area, in square centimeters, of the cube?",
    correctAnswer: "864",
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**The correct answer is 864.**\n\n**The Fast Way (~40s):** The prism's volume is $1{,}728$, so the cube's edge is $\\sqrt[3]{1{,}728} = 12$ and its surface area is $6(12^{2}) = 864$.\n\n**The Full Solution:**\nStep 1: The volume of the prism is $(8)(12)(18) = 1{,}728$ cubic centimeters, so the cube's volume is also $1{,}728$.\nStep 2: For a cube with edge length $s$, $s^{3} = 1{,}728$, so $s = 12$ centimeters.\nStep 3: A cube has six square faces, so its surface area is $6s^{2} = 6(144) = 864$ square centimeters. Check: $12^{3} = 1{,}728$, the prism's volume ✓\n\n**Common Mistakes:**\n* $912$: computes the prism's surface area, $2(96 + 144 + 216)$; the two solids share a volume, not a surface area.\n* $144$: finds the area of one face of the cube and stops.\n* $72$: uses $6s$ instead of $6s^{2}$.\n\n**Test Day Takeaway:** Equal-volume problems go through the shared volume: compute it once, solve for the new solid's dimension, then answer the question that was asked.",
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
    question: "A circle has a diameter of $10$ inches. What is the area, in square inches, of the circle?",
    choices: [
      // distractor: uses the radius, 5, as the coefficient without squaring it
      { id: "A", text: "$5\\pi$" },
      // distractor: computes the circumference, pi times the diameter, instead of the area
      { id: "B", text: "$10\\pi$" },
      { id: "C", text: "$25\\pi$" },
      // distractor: squares the diameter instead of the radius
      { id: "D", text: "$100\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The radius is $5$, so the area is $\\pi(5)^{2} = 25\\pi$.\n\n**The Full Solution:**\nStep 1: The radius is half the diameter: $r = \\frac{10}{2} = 5$ inches.\nStep 2: The area of a circle is $A = \\pi r^{2}$.\nStep 3: $A = \\pi(5)^{2} = 25\\pi$ square inches. Check: $25\\pi \\approx 78.5$, which is less than the $10$-by-$10$ square that just encloses the circle, $100$ square inches ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\pi$): finds the radius but never squares it.\n* Choice B ($10\\pi$): computes the circumference, $\\pi d$, instead of the area.\n* Choice D ($100\\pi$): squares the diameter instead of the radius.\n\n**Test Day Takeaway:** The area formula uses the radius; when a problem gives the diameter, halve it before squaring.",
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
    question: "The area of a circle with radius $9$ is $k\\pi$. What is the value of $k$?",
    correctAnswer: "81",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**The correct answer is 81.**\n\n**The Fast Way (~5s):** $\\pi(9)^{2} = 81\\pi$, so $k = 81$.\n\n**The Full Solution:**\nStep 1: The area of a circle is $A = \\pi r^{2}$.\nStep 2: Substitute $r = 9$: $A = \\pi(9)^{2} = 81\\pi$.\nStep 3: Matching $81\\pi$ with $k\\pi$ gives $k = 81$. Check: $\\sqrt{81} = 9$, the given radius ✓\n\n**Common Mistakes:**\n* $18$: computes the circumference coefficient, $2r$, instead of $r^{2}$.\n* $9$: uses $r$ without squaring it.\n* $324$: squares the diameter, $18^{2}$, instead of the radius.\n\n**Test Day Takeaway:** An area written as $k\\pi$ means $k = r^{2}$; square the radius and you are done.",
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
    question: "The area of a circle is $225\\pi$ square inches. What is the diameter, in inches, of the circle?",
    choices: [
      // distractor: finds the radius, 15, and stops without doubling it
      { id: "A", text: "$15$" },
      { id: "B", text: "$30$" },
      // distractor: halves 225 instead of taking its square root
      { id: "C", text: "$112.5$" },
      // distractor: reads the coefficient 225 as the diameter
      { id: "D", text: "$225$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of a Circle (Reverse from Given Area)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $r^{2} = 225$, so $r = 15$ and the diameter is $30$.\n\n**The Full Solution:**\nStep 1: Set the area formula equal to the given area: $\\pi r^{2} = 225\\pi$.\nStep 2: Divide both sides by $\\pi$: $r^{2} = 225$, so $r = 15$ inches.\nStep 3: The diameter is twice the radius: $d = 2(15) = 30$ inches. Check: a diameter of $30$ gives a radius of $15$ and an area of $\\pi(15)^{2} = 225\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): finds the radius and stops before doubling it.\n* Choice C ($112.5$): halves $225$ instead of taking its square root.\n* Choice D ($225$): reads the coefficient of $\\pi$ as a length.\n\n**Test Day Takeaway:** Working backward from an area, take the square root of the coefficient of $\\pi$ to get the radius, then double it if the question asks for the diameter.",
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
    question: "A circle has a circumference of $44\\pi$. If the area of the circle is $k\\pi$, what is the value of $k$?",
    correctAnswer: "484",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**The correct answer is 484.**\n\n**The Fast Way (~20s):** $2\\pi r = 44\\pi$ gives $r = 22$, so the area is $\\pi(22)^{2} = 484\\pi$ and $k = 484$.\n\n**The Full Solution:**\nStep 1: The circumference is $2\\pi r$, so $2\\pi r = 44\\pi$.\nStep 2: Divide both sides by $2\\pi$: $r = 22$.\nStep 3: The area is $\\pi(22)^{2} = 484\\pi$, so $k = 484$. Check: $2\\pi(22) = 44\\pi$, the given circumference ✓\n\n**Common Mistakes:**\n* $22$: stops at the radius instead of squaring it.\n* $1936$: squares the diameter, $44$, instead of the radius, $22$.\n* $44$: reports the coefficient of the circumference, which is the diameter.\n\n**Test Day Takeaway:** A circumference written as a multiple of $\\pi$ gives the diameter directly; halve it to get the radius before squaring.",
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
    question: "The diameter of circle $A$ is $6$ times the radius of circle $B$. The area of circle $A$ is how many times the area of circle $B$?",
    choices: [
      // distractor: finds the radius ratio 3 but does not square it for area
      { id: "A", text: "$3$" },
      // distractor: treats the 6 as the radius ratio and does not square it
      { id: "B", text: "$6$" },
      { id: "C", text: "$9$" },
      // distractor: squares 6 without first halving the diameter to get the radius
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The radius of circle $A$ is half its diameter, so it is $3$ times the radius of circle $B$, and areas scale by $3^{2} = 9$.\n\n**The Full Solution:**\nStep 1: Let the radius of circle $B$ be $r$. The diameter of circle $A$ is $6r$, so the radius of circle $A$ is $\\frac{6r}{2} = 3r$.\nStep 2: The areas are $\\pi(3r)^{2} = 9\\pi r^{2}$ for circle $A$ and $\\pi r^{2}$ for circle $B$.\nStep 3: $\\frac{9\\pi r^{2}}{\\pi r^{2}} = 9$. Check: with $r = 1$, circle $A$ has diameter $6$, radius $3$, and area $9\\pi$, which is $9$ times $\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): finds the ratio of the radii but stops before squaring it.\n* Choice B ($6$): compares a diameter with a radius as if they were the same kind of length, and does not square.\n* Choice D ($36$): squares $6$, but $6$ compares a diameter with a radius; halve to the radius ratio $3$ first.\n\n**Test Day Takeaway:** Put both circles in the same length (radius with radius) before you compare, then square that ratio for area.",
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
    question: "A circle has an area of $196\\pi$ square inches. The circumference of the circle is $k\\pi$ inches. What is the value of $k$?",
    correctAnswer: "28",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**The correct answer is 28.**\n\n**The Fast Way (~20s):** $\\pi r^{2} = 196\\pi$ gives $r = 14$, so the circumference is $2\\pi(14) = 28\\pi$ and $k = 28$.\n\n**The Full Solution:**\nStep 1: Set the area formula equal to the given area: $\\pi r^{2} = 196\\pi$.\nStep 2: Divide both sides by $\\pi$: $r^{2} = 196$, so $r = 14$ inches, since a radius is positive.\nStep 3: The circumference is $2\\pi r = 2\\pi(14) = 28\\pi$ inches, so $k = 28$. Check: a circle with radius $14$ has area $\\pi(14)^{2} = 196\\pi$ ✓\n\n**Common Mistakes:**\n* $14$: uses $\\pi r$ instead of $2\\pi r$, reporting the radius.\n* $392$: doubles the area coefficient, $2(196)$, instead of doubling the radius.\n* $196$: reports $r^{2}$, the coefficient of $\\pi$ in the area.\n\n**Test Day Takeaway:** From an area, take the square root of the coefficient of $\\pi$ to get the radius; the circumference is then $2\\pi r$.",
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
    question: "A square is inscribed in a circle. The area of the square is $578$ square units. What is the area, in square units, of the circle?",
    choices: [
      // distractor: uses the radius 17 as the coefficient of pi instead of r squared
      { id: "A", text: "$17\\pi$" },
      // distractor: uses the diameter 34, the coefficient of pi in the circumference
      { id: "B", text: "$34\\pi$" },
      { id: "C", text: "$289\\pi$" },
      // distractor: uses the square's area, 578, as r squared, skipping the diagonal
      { id: "D", text: "$578\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The square's diagonal is a diameter: $d^{2} = 2(578) = 1{,}156$, so $d = 34$, $r = 17$, and the area is $289\\pi$.\n\n**The Full Solution:**\nStep 1: The vertices of the square lie on the circle, so a diagonal of the square is a diameter of the circle. If the side is $s$, then $s^{2} = 578$.\nStep 2: The diagonal splits the square into two right triangles with legs $s$, so $d^{2} = s^{2} + s^{2} = 2(578) = 1{,}156$ and $d = 34$.\nStep 3: The radius is $\\frac{34}{2} = 17$, so the area of the circle is $\\pi(17)^{2} = 289\\pi$. Check: $r^{2} = \\frac{d^{2}}{4} = \\frac{1{,}156}{4} = 289$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($17\\pi$): uses the radius $17$ where the area needs $r^{2}$.\n* Choice B ($34\\pi$): uses the diameter $34$, which belongs in the circumference $2\\pi r$, not the area.\n* Choice D ($578\\pi$): treats the square's area as $r^{2}$; the radius is half the square's diagonal, not its side.\n\n**Test Day Takeaway:** For a square inscribed in a circle, the square's diagonal is the circle's diameter; find the diagonal first, then halve it for the radius.",
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
    question: "Circle $A$ has a circumference of $40\\pi$, and circle $B$ has an area of $441\\pi$. The area of circle $C$ is equal to the sum of the areas of circles $A$ and $B$. What is the radius of circle $C$?",
    correctAnswer: "29",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**The correct answer is 29.**\n\n**The Fast Way (~40s):** Circle $A$ has radius $20$ and circle $B$ has radius $21$, so circle $C$ has $r^{2} = 400 + 441 = 841$ and $r = 29$.\n\n**The Full Solution:**\nStep 1: For circle $A$, $2\\pi r = 40\\pi$, so $r = 20$ and its area is $400\\pi$. Circle $B$ has area $441\\pi$.\nStep 2: The area of circle $C$ is $400\\pi + 441\\pi = 841\\pi$, so its radius satisfies $\\pi r^{2} = 841\\pi$, or $r^{2} = 841$.\nStep 3: $r = \\sqrt{841} = 29$. Check: $\\pi(29)^{2} = 841\\pi = \\pi(20)^{2} + \\pi(21)^{2}$ ✓\n\n**Common Mistakes:**\n* $41$: adds the radii, $20 + 21$, as if areas added the way lengths do.\n* $841$: reports $r^{2}$ instead of $r$.\n* $21.93$: treats $40\\pi$ as an area, so $r^{2} = 40 + 441 = 481$.\n\n**Test Day Takeaway:** Areas add; radii do not. Convert each circle to $r^{2}$, add, and take a single square root at the end.",
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
    question: "The area of a square is $196$ square inches. What is the perimeter, in inches, of the square?",
    choices: [
      // distractor: stops at the side length 14 and never multiplies by 4
      { id: "A", text: "$14$" },
      // distractor: doubles the side instead of multiplying it by 4
      { id: "B", text: "$28$" },
      // distractor: divides the area by 4 without taking a square root
      { id: "C", text: "$49$" },
      { id: "D", text: "$56$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $\\sqrt{196} = 14$, so the perimeter is $4(14) = 56$ inches.\n\n**The Full Solution:**\nStep 1: A square with side length $s$ has area $s^{2}$, so $s^{2} = 196$.\nStep 2: $s = \\sqrt{196} = 14$ inches, taking the positive root because $s$ is a length.\nStep 3: The perimeter is $4s = 4(14) = 56$ inches. Check: a $14$-by-$14$ square has area $196$ and perimeter $56$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): this is one side, not the distance around the square.\n* Choice B ($28$): this counts only two sides.\n* Choice C ($49$): this divides the area by $4$ without ever taking a square root.\n\n**Test Day Takeaway:** Go from area to side with a square root first; only then multiply by $4$ for the perimeter.",
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
    question: "A square has a perimeter of $72$ centimeters. What is the area, in square centimeters, of the square?",
    correctAnswer: "324",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is 324.**\n\n**The Fast Way (~15s):** Each side is $\\frac{72}{4} = 18$ centimeters, so the area is $18^{2} = 324$ square centimeters.\n\n**The Full Solution:**\nStep 1: A square's perimeter is $4s$, so $4s = 72$.\nStep 2: $s = \\frac{72}{4} = 18$ centimeters.\nStep 3: The area is $s^{2} = 18^{2} = 324$ square centimeters. Check: an $18$-centimeter square has perimeter $4(18) = 72$ ✓\n\n**Common Mistakes:**\n* $18$: stops at the side length.\n* $1{,}296$: halves the perimeter instead of dividing by $4$, getting a side of $36$ and an area of $36^{2}$.\n* $5{,}184$: squares the perimeter, $72^{2}$, instead of the side.\n\n**Test Day Takeaway:** Divide a perimeter by $4$ to get the side; only the side gets squared for area.",
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
    question: "A square has an area of $A$ square units. Which expression represents the perimeter, in units, of the square?",
    choices: [
      // distractor: divides the area by 4 without taking a square root first
      { id: "A", text: "$\\frac{A}{4}$" },
      // distractor: gives the side length rather than the perimeter
      { id: "B", text: "$\\sqrt{A}$" },
      // distractor: adds only two of the four sides
      { id: "C", text: "$2\\sqrt{A}$" },
      { id: "D", text: "$4\\sqrt{A}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** A square with area $A$ has side length $\\sqrt{A}$, so its perimeter is $4\\sqrt{A}$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the side length, so $s^{2} = A$.\nStep 2: Solve for the side: $s = \\sqrt{A}$, the positive root, since $s$ is a length.\nStep 3: The perimeter is $4s = 4\\sqrt{A}$. Check with $A = 100$: the side is $10$ and the perimeter is $40$, and $4\\sqrt{100} = 40$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{A}{4}$): divides the area by $4$; with $A = 100$ it gives $25$, not $40$.\n* Choice B ($\\sqrt{A}$): this is one side of the square.\n* Choice C ($2\\sqrt{A}$): adds only two of the four sides.\n\n**Test Day Takeaway:** When the choices are expressions, test a friendly value such as $A = 100$ in each one.",
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
    question: "The length of a diagonal of a square is $11\\sqrt{2}$ inches. What is the perimeter, in inches, of the square?",
    correctAnswer: "44",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is 44.**\n\n**The Fast Way (~20s):** A square's diagonal is its side times $\\sqrt{2}$, so the side is $11$ and the perimeter is $4(11) = 44$ inches.\n\n**The Full Solution:**\nStep 1: The diagonal splits the square into two right triangles with legs $s$ and $s$, so $s^{2} + s^{2} = \\left(11\\sqrt{2}\\right)^{2}$.\nStep 2: $2s^{2} = 242$, so $s^{2} = 121$ and $s = 11$ inches.\nStep 3: The perimeter is $4s = 4(11) = 44$ inches. Check: $11^{2} + 11^{2} = 242 = \\left(11\\sqrt{2}\\right)^{2}$ ✓\n\n**Common Mistakes:**\n* $11$: stops at the side length.\n* $22$: adds only two sides.\n* $62.2$: multiplies the diagonal by $4$, treating $11\\sqrt{2} \\approx 15.56$ as a side.\n\n**Test Day Takeaway:** In a square, side and diagonal are linked by $\\sqrt{2}$: divide the diagonal by $\\sqrt{2}$ before you build the perimeter.",
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
    question: "The perimeter of square $P$ is $5$ times the perimeter of square $Q$. The area of square $P$ is $k$ times the area of square $Q$. What is the value of $k$?",
    choices: [
      // distractor: takes the square root of the perimeter ratio instead of squaring it
      { id: "A", text: "$\\sqrt{5}$" },
      // distractor: assumes area scales by the same factor as perimeter
      { id: "B", text: "$5$" },
      // distractor: doubles the perimeter ratio instead of squaring it
      { id: "C", text: "$10$" },
      { id: "D", text: "$25$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Square Perimeter and Area Scaling**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Perimeter scales like a side, so the sides are in the ratio $5$ and the areas are in the ratio $5^{2} = 25$.\n\n**The Full Solution:**\nStep 1: Let square $Q$ have side $s$, so its perimeter is $4s$ and its area is $s^{2}$.\nStep 2: The perimeter of square $P$ is $5(4s) = 20s$, so its side is $\\frac{20s}{4} = 5s$.\nStep 3: The area of square $P$ is $(5s)^{2} = 25s^{2}$, so $k = 25$. Check: with $s = 1$, the perimeters are $4$ and $20$ and the areas are $1$ and $25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{5}$): takes a square root where going from length to area calls for a square.\n* Choice B ($5$): reuses the perimeter ratio, which applies to lengths, not areas.\n* Choice C ($10$): doubles the ratio instead of squaring it.\n\n**Test Day Takeaway:** Perimeter and side length scale by the same factor $k$; area scales by $k^{2}$.",
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
    question: "A square has a side length of $(2x + 5)$ inches and a perimeter of $68$ inches. What is the value of $x$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is 6.**\n\n**The Fast Way (~20s):** Each side is $\\frac{68}{4} = 17$, so $2x + 5 = 17$ and $x = 6$.\n\n**The Full Solution:**\nStep 1: The perimeter of a square is $4$ times its side length, so $4(2x + 5) = 68$.\nStep 2: Divide both sides by $4$: $2x + 5 = 17$.\nStep 3: $2x = 12$, so $x = 6$. Check: the side is $2(6) + 5 = 17$ inches and $4(17) = 68$ ✓\n\n**Common Mistakes:**\n* $17$: reports the side length instead of $x$.\n* $14.5$: uses only two sides, solving $2(2x + 5) = 68$.\n* $31.5$: sets the side length equal to the perimeter, solving $2x + 5 = 68$.\n\n**Test Day Takeaway:** Write the perimeter as $4$ times the side expression, divide by $4$ first, and then solve for the variable the question asks for.",
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
    question: "Square $A$ has a side length of $3x - 7$, and square $B$ has a side length of $2x + 1$. The perimeter of square $A$ is $8$ more than the perimeter of square $B$. What is the value of $x$?",
    choices: [
      // distractor: adds the 8 to the perimeter of square A instead of square B
      { id: "A", text: "$6$" },
      // distractor: drops the 8 and sets the two perimeters equal
      { id: "B", text: "$8$" },
      { id: "C", text: "$10$" },
      // distractor: applies the difference of 8 to the side lengths instead of the perimeters
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The perimeters are $12x - 28$ and $8x + 4$, so $12x - 28 = 8x + 12$, which gives $4x = 40$ and $x = 10$.\n\n**The Full Solution:**\nStep 1: Each perimeter is $4$ times its side length: square $A$ has perimeter $4(3x - 7) = 12x - 28$, and square $B$ has perimeter $4(2x + 1) = 8x + 4$.\nStep 2: The perimeter of square $A$ is the perimeter of square $B$ plus $8$: $12x - 28 = (8x + 4) + 8$, or $12x - 28 = 8x + 12$.\nStep 3: Subtract $8x$ and add $28$: $4x = 40$, so $x = 10$. Check: the sides are $23$ and $21$, the perimeters are $92$ and $84$, and $92 - 84 = 8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): adds the $8$ to square $A$, solving $(12x - 28) + 8 = 8x + 4$; square $A$ has the larger perimeter, so the $8$ belongs with square $B$.\n* Choice B ($8$): drops the $8$ and sets the perimeters equal, $12x - 28 = 8x + 4$.\n* Choice D ($16$): applies the difference to the side lengths, solving $3x - 7 = (2x + 1) + 8$.\n\n**Test Day Takeaway:** A comparison applies to the quantity it names. Write both perimeters in full, then add the difference to the smaller one.",
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
    question: "The length of a rectangle is $3$ times its width, and the area of the rectangle is $192$ square meters. A square has the same perimeter as the rectangle. What is the area, in square meters, of the square?",
    correctAnswer: "256",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is 256.**\n\n**The Fast Way (~50s):** $3w^{2} = 192$ gives $w = 8$ and a length of $24$, so the shared perimeter is $64$, the square's side is $16$, and its area is $256$.\n\n**The Full Solution:**\nStep 1: Let the width be $w$, so the length is $3w$ and the area is $3w^{2} = 192$. Then $w^{2} = 64$, so $w = 8$ meters and the length is $24$ meters.\nStep 2: The rectangle's perimeter is $2(8 + 24) = 64$ meters. The square has the same perimeter, so its side is $\\frac{64}{4} = 16$ meters.\nStep 3: The square's area is $16^{2} = 256$ square meters. Check: $4(16) = 64 = 2(8) + 2(24)$, and the square encloses more area than the rectangle with the same perimeter, as it must ✓\n\n**Common Mistakes:**\n* $192$: matches the areas instead of the perimeters.\n* $64$ or $16$: reports the shared perimeter or the square's side instead of its area.\n* $1{,}024$: halves the perimeter instead of dividing by $4$, getting a side of $32$.\n\n**Test Day Takeaway:** In a two-figure problem, find the shared quantity explicitly, carry it to the second figure, and answer in the units the question asks for.",
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
    question: "In the figure, parallel lines $a$ and $b$ are intersected by line $c$. What is the value of $x$?",
    diagram: { type: "parallelLines", params: { angles: { top: ["48°", ""], bottom: ["", "x°"] }, lineLabels: ["a", "b", "c"], figureNote: true } },
    choices: [
      // distractor: takes the complement of 48 instead of the supplement
      { id: "A", text: "$42$" },
      // distractor: treats the two marked angles as congruent
      { id: "B", text: "$48$" },
      { id: "C", text: "$132$" },
      // distractor: adds 90 to the marked angle
      { id: "D", text: "$138$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The $48^{\\circ}$ angle corresponds to the angle beside $x^{\\circ}$ at line $b$, and those two angles form a linear pair, so $x = 180 - 48 = 132$.\n\n**The Full Solution:**\nStep 1: At line $b$, the angle in the same position as the $48^{\\circ}$ angle at line $a$ is a corresponding angle, so it also measures $48^{\\circ}$.\nStep 2: That angle and the angle marked $x^{\\circ}$ lie along line $b$ on opposite sides of line $c$, so they form a linear pair: $48 + x = 180$.\nStep 3: $x = 132$. Check: $132 + 48 = 180$, and the marked angle is obtuse while the $48^{\\circ}$ angle is acute, as the figure shows ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($42$): uses $90 - 48$, a complement, but these angles do not form a right angle.\n* Choice B ($48$): assumes the two marked angles are congruent, but one is acute and the other is obtuse.\n* Choice D ($138$): adds $90$ to $48$, as if line $c$ were perpendicular to the parallel lines.\n\n**Test Day Takeaway:** Move the known angle to the second parallel line first (corresponding angles are equal), then use the linear pair there.",
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
    question: "In the figure, line $j$ is parallel to line $k$. What is the value of $x$?",
    diagram: { type: "parallelLines", params: { angles: { top: ["(x + 25)°", ""], bottom: ["62°", ""] }, lineLabels: ["j", "k", "t"], figureNote: true } },
    correctAnswer: "37",
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**The correct answer is 37.**\n\n**The Fast Way (~15s):** The marked angles are corresponding angles, so $x + 25 = 62$ and $x = 37$.\n\n**The Full Solution:**\nStep 1: The two marked angles sit in the same position at the two parallel lines, so they are corresponding angles and have equal measures.\nStep 2: $x + 25 = 62$.\nStep 3: $x = 37$. Check: $37 + 25 = 62$, so both angles measure $62^{\\circ}$ ✓\n\n**Common Mistakes:**\n* $62$: reports the angle measure instead of the value of $x$.\n* $87$: adds $25$ to $62$ instead of subtracting it.\n* $93$: treats the angles as supplementary, solving $(x + 25) + 62 = 180$.\n\n**Test Day Takeaway:** Corresponding angles at parallel lines are equal. Set the expressions equal and answer for the variable, not the angle.",
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
    question: "In the figure, line $\\ell$ is parallel to line $m$. What is the value of $x$?",
    diagram: { type: "parallelLines", params: { angles: { top: ["", "(3x + 18)°"], bottom: ["(2x - 3)°", ""] }, lineLabels: ["ℓ", "m", "t"], figureNote: true } },
    choices: [
      // distractor: sets the sum of the two angles equal to 90 instead of 180
      { id: "A", text: "$15$" },
      { id: "B", text: "$33$" },
      // distractor: reports the measure of the angle marked (2x - 3) degrees instead of x
      { id: "C", text: "$63$" },
      // distractor: reports the measure of the angle marked (3x + 18) degrees instead of x
      { id: "D", text: "$117$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The two marked angles are supplementary, so $(3x + 18) + (2x - 3) = 180$, which gives $5x = 165$ and $x = 33$.\n\n**The Full Solution:**\nStep 1: The angle marked $(3x + 18)^{\\circ}$ at line $\\ell$ corresponds to the angle in the same position at line $m$, which forms a linear pair with the angle marked $(2x - 3)^{\\circ}$.\nStep 2: So the two marked angles are supplementary: $(3x + 18) + (2x - 3) = 180$, or $5x + 15 = 180$.\nStep 3: $5x = 165$, so $x = 33$. Check: the angles measure $3(33) + 18 = 117$ and $2(33) - 3 = 63$ degrees, and $117 + 63 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): sets the sum equal to $90$, giving $5x + 15 = 90$.\n* Choice C ($63$): reports the measure of the angle marked $(2x - 3)^{\\circ}$.\n* Choice D ($117$): reports the measure of the angle marked $(3x + 18)^{\\circ}$.\n\n**Test Day Takeaway:** Two marked angles at parallel lines are either equal or supplementary; an obtuse angle paired with an acute angle means supplementary.",
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
    question: "In the figure, line $p$ is parallel to line $q$. What is the value of $x$?",
    diagram: { type: "parallelLines", params: { angles: { top: ["(3x + 24)°", ""], bottom: ["", "(5x - 4)°"] }, lineLabels: ["p", "q", "r"], figureNote: true } },
    correctAnswer: "20",
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**The correct answer is 20.**\n\n**The Fast Way (~30s):** The two marked angles are supplementary, so $(3x + 24) + (5x - 4) = 180$, which gives $8x = 160$ and $x = 20$.\n\n**The Full Solution:**\nStep 1: The angle marked $(3x + 24)^{\\circ}$ at line $p$ corresponds to the angle in the same position at line $q$, so that angle also measures $(3x + 24)^{\\circ}$.\nStep 2: That angle and the angle marked $(5x - 4)^{\\circ}$ form a linear pair along line $q$: $(3x + 24) + (5x - 4) = 180$, or $8x + 20 = 180$.\nStep 3: $8x = 160$, so $x = 20$. Check: the angles measure $3(20) + 24 = 84$ and $5(20) - 4 = 96$ degrees, and $84 + 96 = 180$ ✓\n\n**Common Mistakes:**\n* $14$: sets the two expressions equal, $3x + 24 = 5x - 4$; that rule fits corresponding or alternate angles, not this pair.\n* $84$ or $96$: reports an angle measure instead of the value of $x$.\n* $8.75$: sets the sum equal to $90$ instead of $180$.\n\n**Test Day Takeaway:** Check whether the two marked angles are both acute (equal) or one acute and one obtuse (supplementary) before you write the equation.",
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
    question: "In the figure, two lines intersect. What is the measure, in degrees, of the smaller of the two marked angles?",
    diagram: { type: "intersectingLines", params: { angles: ["(3x + 12)°", "(5x - 8)°", "", ""], angle0Measure: 78, figureNote: true } },
    choices: [
      // distractor: stops at x = 22 instead of substituting to get an angle measure
      { id: "A", text: "$22$" },
      // distractor: treats the marked angles as vertical angles, solving 3x + 12 = 5x - 8 for x = 10 and an angle of 42
      { id: "B", text: "$42$" },
      { id: "C", text: "$78$" },
      // distractor: reports the larger marked angle, 5(22) - 8 = 102
      { id: "D", text: "$102$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertical and Linear-Pair Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The marked angles form a linear pair, so $(3x + 12) + (5x - 8) = 180$ gives $x = 22$, and the smaller angle is $3(22) + 12 = 78$ degrees.\n\n**The Full Solution:**\nStep 1: The two marked angles are adjacent and together form a straight angle, so $(3x + 12) + (5x - 8) = 180$.\nStep 2: $8x + 4 = 180$, so $8x = 176$ and $x = 22$.\nStep 3: The angles measure $3(22) + 12 = 78$ degrees and $5(22) - 8 = 102$ degrees, so the smaller one measures $78$ degrees. Check: $78 + 102 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($22$): reports $x$ instead of substituting it into an angle expression.\n* Choice B ($42$): treats the marked angles as vertical angles and sets them equal, getting $x = 10$ and $3(10) + 12 = 42$.\n* Choice D ($102$): finds $x$ correctly but reports the larger angle.\n\n**Test Day Takeaway:** Adjacent angles along a line sum to $180^{\\circ}$; only angles across the vertex from each other are equal.",
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
    question: "In the figure, line $j$ is parallel to line $k$. What is the measure, in degrees, of the angle marked $(6y - 15)^{\\circ}$?",
    diagram: { type: "parallelLines", params: { angles: { top: ["(6y - 15)°", ""], bottom: ["(4y + 9)°", ""] }, lineLabels: ["j", "k", "n"], figureNote: true } },
    correctAnswer: "57",
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**The correct answer is 57.**\n\n**The Fast Way (~25s):** The marked angles are corresponding angles, so $6y - 15 = 4y + 9$ gives $y = 12$, and $6(12) - 15 = 57$.\n\n**The Full Solution:**\nStep 1: The two marked angles are in the same position at the two parallel lines, so they are corresponding angles and are equal: $6y - 15 = 4y + 9$.\nStep 2: Subtract $4y$ and add $15$: $2y = 24$, so $y = 12$.\nStep 3: The requested measure is $6(12) - 15 = 57$ degrees. Check: $4(12) + 9 = 57$ as well ✓\n\n**Common Mistakes:**\n* $12$: reports $y$ instead of the angle measure.\n* $123$: reports the supplement, $180 - 57$, which is the adjacent angle.\n* $96.6$: sets the sum equal to $180$, giving $y = 18.6$ and $6(18.6) - 15 = 96.6$.\n\n**Test Day Takeaway:** Corresponding angles are equal; after solving, substitute back to get the measure the question asks for.",
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
    question: "In the figure, line $\\ell$ is parallel to line $m$, and $a$ and $b$ are constants. What is the value of $b$?",
    diagram: { type: "parallelLines", params: { angles: { top: ["(3a + 2b)°", "(7a - 2b)°"], bottom: ["(2a + 4b)°", ""] }, lineLabels: ["ℓ", "m", "t"], figureNote: true } },
    choices: [
      { id: "A", text: "$9$" },
      // distractor: reports the value of a instead of b
      { id: "B", text: "$18$" },
      // distractor: reads a = 2b as b = 2a, getting b = 36
      { id: "C", text: "$36$" },
      // distractor: reports the measure of the angle marked (3a + 2b) degrees
      { id: "D", text: "$72$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Angles with Parallel Lines (System of Two Conditions)**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** The two angles at line $\\ell$ form a linear pair, so $10a = 180$ and $a = 18$; the corresponding angles give $3a + 2b = 2a + 4b$, so $a = 2b$ and $b = 9$.\n\n**The Full Solution:**\nStep 1: The angles marked $(3a + 2b)^{\\circ}$ and $(7a - 2b)^{\\circ}$ form a linear pair: $(3a + 2b) + (7a - 2b) = 180$, so $10a = 180$ and $a = 18$.\nStep 2: The angles marked $(3a + 2b)^{\\circ}$ and $(2a + 4b)^{\\circ}$ are corresponding angles, so $3a + 2b = 2a + 4b$, which gives $a = 2b$.\nStep 3: $18 = 2b$, so $b = 9$. Check: the angles measure $72^{\\circ}$, $108^{\\circ}$, and $72^{\\circ}$; the first two sum to $180^{\\circ}$ and the corresponding pair is equal ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($18$): reports $a$, the value found in the first step.\n* Choice C ($36$): turns $a = 2b$ into $b = 2a$.\n* Choice D ($72$): reports an angle measure instead of the constant $b$.\n\n**Test Day Takeaway:** Each angle relationship in the figure gives one equation. Use the linear pair and the corresponding pair to build a system, then solve for the constant asked for.",
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
    question: "In the figure, line $r$ is parallel to line $s$, and $k$ is a constant. If the angle marked $(11x + 4k)^{\\circ}$ has a measure of $123^{\\circ}$, what is the value of $k$?",
    diagram: { type: "parallelLines", params: { angles: { top: ["(9x - 4k)°", ""], bottom: ["", "(11x + 4k)°"] }, lineLabels: ["r", "s", "t"], figureNote: true } },
    correctAnswer: "6",
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**The correct answer is 6.**\n\n**The Fast Way (~50s):** The marked angles are supplementary, so $(9x - 4k) + (11x + 4k) = 180$; the $k$ terms cancel, giving $x = 9$, and then $11(9) + 4k = 123$ gives $k = 6$.\n\n**The Full Solution:**\nStep 1: The angle marked $(9x - 4k)^{\\circ}$ at line $r$ corresponds to the angle in the same position at line $s$, which forms a linear pair with the angle marked $(11x + 4k)^{\\circ}$. So $(9x - 4k) + (11x + 4k) = 180$, or $20x = 180$, and $x = 9$.\nStep 2: Substitute into the angle with the given measure: $11(9) + 4k = 123$, so $99 + 4k = 123$.\nStep 3: $4k = 24$, so $k = 6$. Check: the other angle measures $9(9) - 4(6) = 57$ degrees, and $57 + 123 = 180$ ✓\n\n**Common Mistakes:**\n* $24$: stops at $4k = 24$.\n* $9$: reports $x$ instead of $k$.\n* $-10.5$: assigns $123^{\\circ}$ to the angle marked $(9x - 4k)^{\\circ}$, solving $81 - 4k = 123$.\n\n**Test Day Takeaway:** When a constant appears with opposite signs in two supplementary angles, adding the angles cancels it; solve for $x$ first, then use the given measure to find the constant.",
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
    question: "In the right triangle shown, $\\sin A = \\frac{20}{29}$. If the perimeter of triangle $ABC$ is $140$, what is the length of $\\overline{BC}$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [42, 0], [42, 40]], labels: ["A", "B", "C"], sideLabels: ["", "", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: stops at the scale factor k = 2 instead of evaluating 20k
      { id: "A", text: "$2$" },
      { id: "B", text: "$40$" },
      // distractor: reports the leg adjacent to angle A, 21k = 42
      { id: "C", text: "$42$" },
      // distractor: reports the hypotenuse, 29k = 58
      { id: "D", text: "$58$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $\\sin A = \\frac{20}{29}$ makes the sides $20k$, $21k$, and $29k$; the perimeter $70k = 140$ gives $k = 2$, so $BC = 20(2) = 40$.\n\n**The Full Solution:**\nStep 1: The right angle is at $B$, so $\\overline{AC}$ is the hypotenuse and $\\sin A = \\frac{BC}{AC} = \\frac{20}{29}$. Write $BC = 20k$ and $AC = 29k$ for some positive $k$.\nStep 2: The third side is $AB = \\sqrt{(29k)^{2} - (20k)^{2}} = \\sqrt{441k^{2}} = 21k$, so the perimeter is $20k + 21k + 29k = 70k$.\nStep 3: $70k = 140$, so $k = 2$ and $BC = 20(2) = 40$. Check: the sides $40$, $42$, and $58$ sum to $140$, and $40^{2} + 42^{2} = 3{,}364 = 58^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): stops at the scale factor $k$.\n* Choice C ($42$): reports $AB$, the leg adjacent to angle $A$.\n* Choice D ($58$): reports the hypotenuse $AC$.\n\n**Test Day Takeaway:** A sine value fixes the ratio of the sides; the perimeter fixes their size. Find the scale factor, then evaluate the side asked for.",
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
    question: "In triangle $PQR$, angle $Q$ is a right angle and $\\cos P = \\frac{9}{41}$. The perimeter of the triangle is $180$. What is the length of $\\overline{QR}$?",
    correctAnswer: "80",
    explanation: "**SAT Pattern: Right Triangle Trig — Perimeter Constraint to Sides**\n\n**The correct answer is 80.**\n\n**The Fast Way (~40s):** $\\cos P = \\frac{9}{41}$ makes the sides $9k$, $40k$, and $41k$; the perimeter $90k = 180$ gives $k = 2$, so $QR = 40(2) = 80$.\n\n**The Full Solution:**\nStep 1: Angle $Q$ is the right angle, so $\\overline{PR}$ is the hypotenuse and $\\cos P = \\frac{PQ}{PR} = \\frac{9}{41}$. Write $PQ = 9k$ and $PR = 41k$ for some positive $k$.\nStep 2: The leg opposite angle $P$ is $QR = \\sqrt{(41k)^{2} - (9k)^{2}} = \\sqrt{1{,}600k^{2}} = 40k$, so the perimeter is $9k + 40k + 41k = 90k$.\nStep 3: $90k = 180$, so $k = 2$ and $QR = 40(2) = 80$. Check: the sides $18$, $80$, and $82$ sum to $180$, and $18^{2} + 80^{2} = 6{,}724 = 82^{2}$ ✓\n\n**Common Mistakes:**\n* $18$: reports $PQ$, the leg adjacent to angle $P$.\n* $82$: reports the hypotenuse $PR$.\n* $2$: stops at the scale factor $k$.\n\n**Test Day Takeaway:** A cosine names the adjacent leg and the hypotenuse; get the third side with the Pythagorean theorem, then let the perimeter fix the scale factor.",
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
    question: "The perimeter of the right triangle shown is $90$, and $\\tan\\theta = \\frac{5}{12}$. What is the length of the hypotenuse of the triangle?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [36, 0], [36, 15]], labels: ["θ", "", ""], sideLabels: ["", "", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: uses 5, 12, and 13 as the side lengths without scaling them to the perimeter of 90
      { id: "A", text: "$13$" },
      // distractor: reports the leg opposite theta, 5k = 15
      { id: "B", text: "$15$" },
      // distractor: reports the leg adjacent to theta, 12k = 36
      { id: "C", text: "$36$" },
      { id: "D", text: "$39$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** $\\tan\\theta = \\frac{5}{12}$ makes the sides $5k$, $12k$, and $13k$; the perimeter $30k = 90$ gives $k = 3$, so the hypotenuse is $13(3) = 39$.\n\n**The Full Solution:**\nStep 1: $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{5}{12}$, so the leg opposite $\\theta$ is $5k$ and the leg adjacent to $\\theta$ is $12k$ for some positive $k$. The hypotenuse is $\\sqrt{(5k)^{2} + (12k)^{2}} = \\sqrt{169k^{2}} = 13k$.\nStep 2: The perimeter is $5k + 12k + 13k = 30k$, so $30k = 90$ and $k = 3$.\nStep 3: The hypotenuse is $13(3) = 39$. Check: the sides $15$, $36$, and $39$ sum to $90$, and $\\frac{15}{36} = \\frac{5}{12}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): uses $5$, $12$, and $13$ as the actual side lengths, but those sides have a perimeter of only $30$.\n* Choice B ($15$): reports the leg opposite $\\theta$, $5k$.\n* Choice C ($36$): reports the leg adjacent to $\\theta$, $12k$.\n\n**Test Day Takeaway:** A trig ratio fixes the shape of a right triangle, not its size; write each side as a multiple of $k$, and let the perimeter find $k$.",
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
    question: "In the right triangle shown, $\\tan\\theta = \\frac{7}{24}$. What is the perimeter of the triangle?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 7]], labels: ["θ", "", ""], sideLabels: ["", "", "75"], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "168",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is 168.**\n\n**The Fast Way (~35s):** $\\tan\\theta = \\frac{7}{24}$ makes the sides $7k$, $24k$, and $25k$; the hypotenuse $25k = 75$ gives $k = 3$, so the perimeter is $56(3) = 168$.\n\n**The Full Solution:**\nStep 1: $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{7}{24}$, so the legs are $7k$ and $24k$ for some positive $k$, and the hypotenuse is $\\sqrt{49k^{2} + 576k^{2}} = 25k$.\nStep 2: The hypotenuse is labeled $75$, so $25k = 75$ and $k = 3$. The legs are $21$ and $72$.\nStep 3: The perimeter is $21 + 72 + 75 = 168$. Check: $21^{2} + 72^{2} = 5{,}625 = 75^{2}$, and $\\frac{21}{72} = \\frac{7}{24}$ ✓\n\n**Common Mistakes:**\n* $56$: uses $7$, $24$, and $25$ as the side lengths without scaling to the hypotenuse of $75$.\n* $93$: adds only the two legs.\n* $756$: computes the area, $\\frac{1}{2}(21)(72)$, instead of the perimeter.\n\n**Test Day Takeaway:** A tangent ratio gives the legs only up to a scale factor; the one labeled side fixes the factor.",
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
    question: "A right triangle has a hypotenuse of length $h$ and an acute angle with measure $\\theta$. Which expression represents the perimeter of the triangle?",
    choices: [
      // distractor: adds the two legs but leaves out the hypotenuse
      { id: "A", text: "$h(\\sin\\theta + \\cos\\theta)$" },
      // distractor: uses h tan theta as a leg, but the tangent compares the two legs, not a leg with the hypotenuse, and counts only one leg
      { id: "B", text: "$h(1 + \\tan\\theta)$" },
      // distractor: multiplies the two leg ratios instead of adding them
      { id: "C", text: "$h(1 + \\sin\\theta\\cos\\theta)$" },
      { id: "D", text: "$h(1 + \\sin\\theta + \\cos\\theta)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The legs are $h\\sin\\theta$ and $h\\cos\\theta$; adding the hypotenuse $h$ and factoring gives $h(1 + \\sin\\theta + \\cos\\theta)$.\n\n**The Full Solution:**\nStep 1: The leg opposite $\\theta$ is $h\\sin\\theta$ and the leg adjacent to $\\theta$ is $h\\cos\\theta$, since each ratio is a leg over the hypotenuse.\nStep 2: The perimeter is the sum of all three sides: $h + h\\sin\\theta + h\\cos\\theta$.\nStep 3: Factor out $h$: $h(1 + \\sin\\theta + \\cos\\theta)$. Check with $h = 2$ and $\\theta = 30^{\\circ}$: the legs are $1$ and $\\sqrt{3}$, the perimeter is $3 + \\sqrt{3}$, and $2\\left(1 + \\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\right) = 3 + \\sqrt{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($h(\\sin\\theta + \\cos\\theta)$): adds the two legs but omits the hypotenuse.\n* Choice B ($h(1 + \\tan\\theta)$): treats $h\\tan\\theta$ as a leg; the tangent compares the legs with each other, not with $h$.\n* Choice C ($h(1 + \\sin\\theta\\cos\\theta)$): multiplies the two ratios instead of adding the two legs.\n\n**Test Day Takeaway:** Sine and cosine turn a hypotenuse into both legs. Write each side, add, and check the expression with a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle.",
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
    question: "A right triangle has a hypotenuse of length $26$ and a perimeter of $60$. What is the sine of the smallest angle of the triangle?",
    correctAnswer: "5/13",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is $\\frac{5}{13}$.** Note that 5/13 and .3846 are examples of ways to enter a correct answer.\n\n**The Fast Way (~60s):** The legs satisfy $a + b = 34$ and $a^{2} + b^{2} = 676$, so $2ab = 34^{2} - 676 = 480$ and the legs are $10$ and $24$. The smallest angle is opposite the leg of length $10$, so its sine is $\\frac{10}{26} = \\frac{5}{13}$.\n\n**The Full Solution:**\nStep 1: Let the legs be $a$ and $b$. The perimeter gives $a + b = 60 - 26 = 34$, and the Pythagorean theorem gives $a^{2} + b^{2} = 26^{2} = 676$.\nStep 2: Squaring the first equation: $(a + b)^{2} = a^{2} + 2ab + b^{2}$, so $1{,}156 = 676 + 2ab$ and $ab = 240$.\nStep 3: Two numbers with sum $34$ and product $240$ are $10$ and $24$. The smallest angle is opposite the shortest side, so its sine is $\\frac{10}{26} = \\frac{5}{13}$. Check: $10 + 24 + 26 = 60$ and $10^{2} + 24^{2} = 676 = 26^{2}$ ✓\n\n**Common Mistakes:**\n* $\\frac{12}{13}$: uses the longer leg; the smallest angle is opposite the shortest side.\n* $\\frac{5}{12}$: gives the tangent of the smallest angle instead of the sine.\n\n**Test Day Takeaway:** Squaring the sum of the legs turns a perimeter condition into one about $a^{2} + b^{2}$, which the Pythagorean theorem replaces with $c^{2}$.",
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
    question: "In the right triangle shown, the perimeter of the triangle is $126$. What is the value of $\\tan\\theta$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [45, 0], [45, 28]], labels: ["θ", "", ""], sideLabels: ["45", "", "53"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: gives sin theta, 28/53, instead of tan theta
      { id: "A", text: "$\\frac{28}{53}$" },
      { id: "B", text: "$\\frac{28}{45}$" },
      // distractor: gives cos theta, 45/53, instead of tan theta
      { id: "C", text: "$\\frac{45}{53}$" },
      // distractor: inverts the tangent ratio, using adjacent over opposite, 45/28
      { id: "D", text: "$\\frac{45}{28}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The missing leg is $126 - 45 - 53 = 28$, and it is opposite $\\theta$, so $\\tan\\theta = \\frac{28}{45}$.\n\n**The Full Solution:**\nStep 1: The three sides sum to the perimeter, so the unlabeled leg is $126 - 45 - 53 = 28$.\nStep 2: In the figure, $\\theta$ is opposite the leg of length $28$ and adjacent to the leg of length $45$.\nStep 3: $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{28}{45}$. Check: $28^{2} + 45^{2} = 784 + 2{,}025 = 2{,}809 = 53^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{28}{53}$): this is opposite over hypotenuse, which is $\\sin\\theta$.\n* Choice C ($\\frac{45}{53}$): this is adjacent over hypotenuse, which is $\\cos\\theta$.\n* Choice D ($\\frac{45}{28}$): this is adjacent over opposite, the tangent ratio inverted.\n\n**Test Day Takeaway:** When the perimeter and two sides are given, subtract to get the third side first, then pick the two sides the ratio needs.",
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
    question: "In triangle $RST$, angle $T$ is a right angle and $\\tan R = \\frac{33}{56}$. The perimeter of the triangle is $308$ centimeters. What is the length, in centimeters, of $\\overline{RS}$?",
    correctAnswer: "130",
    explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is 130.**\n\n**The Fast Way (~45s):** $\\tan R = \\frac{33}{56}$ makes the legs $33k$ and $56k$ and the hypotenuse $65k$; the perimeter $154k = 308$ gives $k = 2$, so $RS = 65(2) = 130$.\n\n**The Full Solution:**\nStep 1: Angle $T$ is the right angle, so $\\overline{RS}$ is the hypotenuse, and $\\tan R = \\frac{ST}{RT} = \\frac{33}{56}$. Write $ST = 33k$ and $RT = 56k$ for some positive $k$.\nStep 2: $RS = \\sqrt{(33k)^{2} + (56k)^{2}} = \\sqrt{4{,}225k^{2}} = 65k$, so the perimeter is $33k + 56k + 65k = 154k$.\nStep 3: $154k = 308$, so $k = 2$ and $RS = 65(2) = 130$ centimeters. Check: the sides $66$, $112$, and $130$ sum to $308$, and $66^{2} + 112^{2} = 16{,}900 = 130^{2}$ ✓\n\n**Common Mistakes:**\n* $65$: uses $k = 1$, ignoring the perimeter.\n* $112$ or $66$: reports a leg instead of the hypotenuse.\n\n**Test Day Takeaway:** A tangent gives both legs up to a scale factor; find the hypotenuse with the Pythagorean theorem, then let the perimeter fix the factor.",
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
    question: "$(x - 3)^{2} + (y + 6)^{2} = 16$\nIn the $xy$-plane, which of the following lines intersects the graph of the given equation at exactly one point?",
    choices: [
      // distractor: passes through the center (3, -6), so it crosses the circle at two points
      { id: "A", text: "$x = 3$" },
      // distractor: uses the radius 4 as the line's position without the center; x = 4 is only 1 unit from the center, so it crosses the circle twice
      { id: "B", text: "$x = 4$" },
      { id: "C", text: "$y = -2$" },
      // distractor: treats the center's y-coordinate as 6 instead of -6 and subtracts the radius; y = 2 is 8 units from the center and misses the circle
      { id: "D", text: "$y = 2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The circle has center $(3, -6)$ and radius $4$, so a horizontal line touches it once only at $y = -6 + 4 = -2$ or $y = -6 - 4 = -10$.\n\n**The Full Solution:**\nStep 1: The given equation is in the form $(x - h)^{2} + (y - k)^{2} = r^{2}$, so the center is $(3, -6)$ and the radius is $\\sqrt{16} = 4$.\nStep 2: A horizontal or vertical line meets the circle at exactly one point when its distance from the center equals the radius: $x = 3 \\pm 4$ gives $x = -1$ or $x = 7$, and $y = -6 \\pm 4$ gives $y = -10$ or $y = -2$.\nStep 3: Of the choices, only $y = -2$ is one of these lines. Check: substituting $y = -2$ gives $(x - 3)^{2} + 16 = 16$, so $(x - 3)^{2} = 0$ and $x = 3$; the only intersection point is $(3, -2)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = 3$): passes through the center, so it crosses the circle at two points, $(3, -2)$ and $(3, -10)$.\n* Choice B ($x = 4$): is only $1$ unit from the center, less than the radius, so it crosses the circle at two points.\n* Choice D ($y = 2$): is $8$ units from the center, more than the radius, so it does not meet the circle at all.\n\n**Test Day Takeaway:** A horizontal or vertical line touches a circle at exactly one point when its distance from the center equals the radius.",
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
    question: "$(x - 6)^{2} + (y - 1)^{2} = r^{2}$\nIn the given equation, $r$ is a positive constant. In the $xy$-plane, the graph of $y = -8$ intersects the graph of the given equation at exactly one point. What is the value of $r$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**The correct answer is 9.**\n\n**The Fast Way (~30s):** Substituting $y = -8$ gives $(x - 6)^{2} + 81 = r^{2}$, which has exactly one solution only when $r^{2} = 81$, so $r = 9$.\n\n**The Full Solution:**\nStep 1: Substitute $y = -8$: $(x - 6)^{2} + (-8 - 1)^{2} = r^{2}$, or $(x - 6)^{2} = r^{2} - 81$.\nStep 2: This equation has exactly one solution only when the right side is $0$; a positive right side gives two solutions and a negative one gives none. So $r^{2} - 81 = 0$.\nStep 3: $r^{2} = 81$, so $r = 9$, since $r$ is positive. Check: the center $(6, 1)$ is $1 - (-8) = 9$ units above the line $y = -8$, so a circle of radius $9$ touches the line only at $(6, -8)$ ✓\n\n**Common Mistakes:**\n* $7$: subtracts, $8 - 1$, instead of measuring from $y = 1$ down to $y = -8$.\n* $8$: uses the distance from the line to the $x$-axis instead of to the center.\n* $81$: reports $r^{2}$ instead of $r$.\n\n**Test Day Takeaway:** For exactly one intersection, substitute the line into the circle and require the resulting equation to have a single solution.",
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
    question: "$x^{2} + (y + 1)^{2} = 49$\n$y = b$\nIn the given system of equations, $b$ is a positive constant. If the system has exactly one real solution, what is the value of $b$?",
    choices: [
      // distractor: uses the center's y-coordinate as 1 instead of -1; the line y = 1 gives x^2 = 45, which has two solutions
      { id: "A", text: "$1$" },
      { id: "B", text: "$6$" },
      // distractor: uses the radius 7 without the center's shift; y = 7 gives x^2 = -15, which has no real solutions
      { id: "C", text: "$7$" },
      // distractor: finds the other value, b = -8, and drops its negative sign; y = 8 gives x^2 = -32, which has no real solutions
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Substituting $y = b$ gives $x^{2} = 49 - (b + 1)^{2}$, which has exactly one solution only when $(b + 1)^{2} = 49$. So $b = 6$ or $b = -8$, and the positive value is $6$.\n\n**The Full Solution:**\nStep 1: Substitute $y = b$ into the first equation: $x^{2} + (b + 1)^{2} = 49$, so $x^{2} = 49 - (b + 1)^{2}$.\nStep 2: An equation $x^{2} = c$ has exactly one real solution only when $c = 0$. So $(b + 1)^{2} = 49$, which gives $b + 1 = 7$ or $b + 1 = -7$, that is, $b = 6$ or $b = -8$.\nStep 3: Since $b$ is positive, $b = 6$. Check: $y = 6$ gives $x^{2} = 49 - 49 = 0$, so the only solution is $(0, 6)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): treats the center's $y$-coordinate as $1$ instead of $-1$; the line $y = 1$ gives $x^{2} = 45$ and two solutions.\n* Choice C ($7$): uses the radius without the center's shift; $y = 7$ gives $x^{2} = -15$, which has no real solutions.\n* Choice D ($8$): drops the negative sign of the other value, $b = -8$; $y = 8$ gives $x^{2} = -32$, which has no real solutions.\n\n**Test Day Takeaway:** Substitute the line into the circle's equation; exactly one solution means the squared term must equal $0$.",
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
    question: "From point $P$, two segments are drawn tangent to a circle with center $O$, touching the circle at points $A$ and $B$. The radius of the circle is $20$, and $OP = 29$. What is the perimeter of quadrilateral $OAPB$?",
    correctAnswer: "82",
    explanation: "**SAT Pattern: Tangent from External Point**\n\n**The correct answer is 82.**\n\n**The Fast Way (~40s):** A tangent segment is perpendicular to the radius at the point of tangency, so $PA = \\sqrt{29^{2} - 20^{2}} = 21$, and $PB = 21$ as well. The perimeter is $20 + 21 + 21 + 20 = 82$.\n\n**The Full Solution:**\nStep 1: Radius $\\overline{OA}$ is perpendicular to tangent segment $\\overline{PA}$, so triangle $OAP$ is a right triangle with hypotenuse $\\overline{OP}$.\nStep 2: By the Pythagorean theorem, $PA = \\sqrt{29^{2} - 20^{2}} = \\sqrt{841 - 400} = \\sqrt{441} = 21$.\nStep 3: In the same way, triangle $OBP$ has $OB = 20$ and $PB = 21$. The perimeter of $OAPB$ is $OA + AP + PB + BO = 20 + 21 + 21 + 20 = 82$. Check: $20^{2} + 21^{2} = 400 + 441 = 841 = 29^{2}$ ✓\n\n**Common Mistakes:**\n* $98$: uses $OP = 29$ as the length of each tangent segment.\n* $70$: gives the perimeter of triangle $OAP$, $20 + 21 + 29$, instead of the quadrilateral.\n* $41$: adds only one radius and one tangent segment.\n\n**Test Day Takeaway:** A radius drawn to a point of tangency meets the tangent at a right angle, and the two tangent segments from one outside point are equal.",
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
    question: "$(x - 6)^{2} + (y + 2)^{2} = 25$\nIn the $xy$-plane, the line $y = k$ is tangent to the graph of the given equation. If $k > 0$, what is the value of $k$?",
    choices: [
      // distractor: finds the lower horizontal tangent, -2 - 5 = -7, ignoring the condition k > 0
      { id: "A", text: "$-7$" },
      { id: "B", text: "$3$" },
      // distractor: reports the radius 5 without adding it to the y-coordinate of the center
      { id: "C", text: "$5$" },
      // distractor: reads the center's y-coordinate as 2 instead of -2, so 2 + 5 = 7
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The center is $(6, -2)$ and the radius is $5$, so the horizontal tangent lines are $y = -2 + 5 = 3$ and $y = -2 - 5 = -7$; since $k > 0$, $k = 3$.\n\n**The Full Solution:**\nStep 1: Read the center and radius from the equation: the center is $(6, -2)$ and the radius is $\\sqrt{25} = 5$.\nStep 2: Substitute $y = k$: $(x - 6)^{2} = 25 - (k + 2)^{2}$. This has exactly one solution for $x$ only when the right side is $0$, so $(k + 2)^{2} = 25$.\nStep 3: Then $k + 2 = 5$ or $k + 2 = -5$, so $k = 3$ or $k = -7$; since $k > 0$, $k = 3$. Check: with $k = 3$, $(x - 6)^{2} = 0$, so the line touches the circle only at $(6, 3)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): finds the tangent line below the circle, $y = -2 - 5$. That line is tangent too, but $-7$ is negative and the question requires $k > 0$.\n* Choice C ($5$): reports the radius but never adds it to the $y$-coordinate of the center.\n* Choice D ($7$): reads $(y + 2)$ as a center at $y = 2$, then adds the radius: $2 + 5 = 7$. The center's $y$-coordinate is $-2$.\n\n**Test Day Takeaway:** A horizontal tangent sits one radius above or below the center, so $k$ is the center's $y$-coordinate plus or minus $r$; watch the sign inside $(y + 2)$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-to-circle",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-geo-184",
    domain: "geometry",
    skills: ["circle-equation", "tangent-lines"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$(x + 1)^{2} + (y - 4)^{2} = 169$\nIn the $xy$-plane, line $t$ is tangent to the graph of the given equation at the point $(4, 16)$. What is the slope of line $t$?",
    choices: [
      // distractor: negates the slope of the radius without taking the reciprocal
      { id: "A", text: "$-\\frac{12}{5}$" },
      { id: "B", text: "$-\\frac{5}{12}$" },
      // distractor: takes the reciprocal of the radius's slope without changing its sign
      { id: "C", text: "$\\frac{5}{12}$" },
      // distractor: gives the slope of the radius to (4, 16) instead of the tangent line
      { id: "D", text: "$\\frac{12}{5}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent Slope from Perpendicular Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The radius from the center $(-1, 4)$ to $(4, 16)$ has slope $\\frac{16 - 4}{4 - (-1)} = \\frac{12}{5}$, and the tangent line is perpendicular to it, so its slope is $-\\frac{5}{12}$.\n\n**The Full Solution:**\nStep 1: The given equation is in the form $(x - h)^{2} + (y - k)^{2} = r^{2}$, so the center of the circle is $(-1, 4)$.\nStep 2: The slope of the radius from $(-1, 4)$ to the point of tangency $(4, 16)$ is $\\frac{16 - 4}{4 - (-1)} = \\frac{12}{5}$.\nStep 3: A tangent line is perpendicular to the radius at the point of tangency, so its slope is the negative reciprocal of $\\frac{12}{5}$, which is $-\\frac{5}{12}$. Check: $\\left(\\frac{12}{5}\\right)\\left(-\\frac{5}{12}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{12}{5}$): changes the sign of the radius's slope but does not take the reciprocal.\n* Choice C ($\\frac{5}{12}$): takes the reciprocal but does not change the sign.\n* Choice D ($\\frac{12}{5}$): is the slope of the radius, not of the tangent line.\n\n**Test Day Takeaway:** A tangent line is perpendicular to the radius at the point of tangency, so its slope is the negative reciprocal of the radius's slope.",
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
    question: "$(x - h)^{2} + (y + 3)^{2} = 64$\nIn the given equation, $h$ is a positive constant. In the $xy$-plane, the graph of the given equation and the $y$-axis have exactly one point in common. What is the value of $h$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**The correct answer is 8.**\n\n**The Fast Way (~30s):** On the $y$-axis, $x = 0$, so $h^{2} + (y + 3)^{2} = 64$, or $(y + 3)^{2} = 64 - h^{2}$. This has exactly one solution only when $64 - h^{2} = 0$, so $h = 8$.\n\n**The Full Solution:**\nStep 1: Every point on the $y$-axis has $x = 0$. Substituting gives $(0 - h)^{2} + (y + 3)^{2} = 64$, so $(y + 3)^{2} = 64 - h^{2}$.\nStep 2: An equation of the form $(y + 3)^{2} = c$ has exactly one solution only when $c = 0$, so $64 - h^{2} = 0$ and $h^{2} = 64$.\nStep 3: Since $h$ is positive, $h = 8$. Check: the center $(8, -3)$ is $8$ units from the $y$-axis, which equals the radius $\\sqrt{64} = 8$, so the circle touches the $y$-axis only at $(0, -3)$ ✓\n\n**Common Mistakes:**\n* $3$: uses the distance from the center to the $x$-axis instead of to the $y$-axis.\n* $64$: reports $h^{2}$ instead of $h$.\n\n**Test Day Takeaway:** A circle touches the $y$-axis at exactly one point when the distance from its center to the $y$-axis equals its radius.",
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
    question: "In the $xy$-plane, a circle has center $(-3, 8)$ and intersects the $x$-axis at exactly one point. Which equation represents this circle?",
    choices: [
      // distractor: uses the radius 8 on the right side instead of the radius squared, 64
      { id: "A", text: "$(x + 3)^{2} + (y - 8)^{2} = 8$" },
      // distractor: uses the distance from the center to the y-axis, 3, as the radius
      { id: "B", text: "$(x + 3)^{2} + (y - 8)^{2} = 9$" },
      { id: "C", text: "$(x + 3)^{2} + (y - 8)^{2} = 64$" },
      // distractor: reverses the signs of the center's coordinates
      { id: "D", text: "$(x - 3)^{2} + (y + 8)^{2} = 64$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The center is $8$ units above the $x$-axis, so a circle that meets the $x$-axis at exactly one point has radius $8$. Its equation is $(x + 3)^{2} + (y - 8)^{2} = 64$.\n\n**The Full Solution:**\nStep 1: A circle meets the $x$-axis at exactly one point when the distance from its center to the $x$-axis equals the radius. The center $(-3, 8)$ is $8$ units from the $x$-axis, so $r = 8$.\nStep 2: A circle with center $(h, k)$ and radius $r$ has equation $(x - h)^{2} + (y - k)^{2} = r^{2}$.\nStep 3: With $h = -3$, $k = 8$, and $r = 8$: $(x + 3)^{2} + (y - 8)^{2} = 64$. Check: $y = 0$ gives $(x + 3)^{2} + 64 = 64$, so $(x + 3)^{2} = 0$ and the only point on the $x$-axis is $(-3, 0)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: puts the radius, $8$, on the right side instead of the radius squared.\n* Choice B: uses $3$, the distance from the center to the $y$-axis, as the radius; that circle meets the $y$-axis at one point, not the $x$-axis.\n* Choice D: reverses the signs, giving a circle centered at $(3, -8)$.\n\n**Test Day Takeaway:** A circle meets the $x$-axis at exactly one point when its radius equals the distance from its center to the $x$-axis, which is the absolute value of the center's $y$-coordinate.",
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
    question: "A right rectangular prism has a square base with side length $x$ and a height of $4$. Which expression represents the volume of the prism?",
    choices: [
      // distractor: multiplies one side of the base by the height and skips the other side
      { id: "A", text: "$4x$" },
      // distractor: multiplies the perimeter of the base, 4x, by the height, which gives the area of the four side faces
      { id: "B", text: "$16x$" },
      { id: "C", text: "$4x^{2}$" },
      // distractor: squares the height along with the side length
      { id: "D", text: "$16x^{2}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Volume is base area times height: $x^{2} \\cdot 4 = 4x^{2}$.\n\n**The Full Solution:**\nStep 1: The base is a square with side length $x$, so its area is $x \\cdot x = x^{2}$.\nStep 2: The volume of a prism is the area of its base times its height: $x^{2} \\cdot 4$.\nStep 3: So the volume is $4x^{2}$. Check: if $x = 2$, the prism is $2$ by $2$ by $4$, with volume $16 = 4(2)^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4x$): multiplies only one side of the base by the height.\n* Choice B ($16x$): multiplies the perimeter of the base, $4x$, by the height, which gives the area of the four side faces, not the volume.\n* Choice D ($16x^{2}$): squares the height as well as the side length.\n\n**Test Day Takeaway:** The volume of a prism is the area of its base times its height; a square base with side $x$ has area $x^{2}$.",
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
    question: "A rectangle has a length of $x + 6$ and a width of $5$. Which expression represents the area of the rectangle?",
    choices: [
      // distractor: adds the length and the width instead of multiplying
      { id: "A", text: "$x + 11$" },
      // distractor: gives the perimeter, 2(x + 6) + 2(5), instead of the area
      { id: "B", text: "$2x + 22$" },
      // distractor: multiplies only the x term by 5 and leaves the 6 unchanged
      { id: "C", text: "$5x + 6$" },
      { id: "D", text: "$5x + 30$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Area is length times width: $5(x + 6) = 5x + 30$.\n\n**The Full Solution:**\nStep 1: The area of a rectangle is its length times its width: $5(x + 6)$.\nStep 2: Distribute the $5$ to both terms: $5 \\cdot x + 5 \\cdot 6$.\nStep 3: So the area is $5x + 30$. Check: if $x = 2$, the rectangle is $8$ by $5$, with area $40 = 5(2) + 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x + 11$): adds the length and the width instead of multiplying them.\n* Choice B ($2x + 22$): gives the perimeter, $2(x + 6) + 2(5)$, instead of the area.\n* Choice C ($5x + 6$): multiplies only $x$ by $5$ and forgets to multiply the $6$.\n\n**Test Day Takeaway:** Area is length times width; distribute the width to every term of the length.",
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
    question: "A square with side length $2m$ is cut out of a rectangle with length $7m$ and width $3m$. Which expression represents the area of the part of the rectangle that remains?",
    choices: [
      { id: "A", text: "$17m^{2}$" },
      // distractor: squares only the m in the side length, subtracting 2m^2 instead of (2m)^2 = 4m^2
      { id: "B", text: "$19m^{2}$" },
      // distractor: finds the area of the rectangle but never subtracts the square
      { id: "C", text: "$21m^{2}$" },
      // distractor: adds the area of the square instead of subtracting it
      { id: "D", text: "$25m^{2}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Rectangle minus square: $(7m)(3m) - (2m)^{2} = 21m^{2} - 4m^{2} = 17m^{2}$.\n\n**The Full Solution:**\nStep 1: Find the area of the rectangle: $(7m)(3m) = 21m^{2}$.\nStep 2: Find the area of the square that is cut out: $(2m)^{2} = 4m^{2}$.\nStep 3: Subtract: $21m^{2} - 4m^{2} = 17m^{2}$. Check: with $m = 1$, the rectangle is $7$ by $3$ with area $21$, the square has area $4$, and $21 - 4 = 17$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($19m^{2}$): squares only the $m$, using $2m^{2}$ for the square's area. The whole side length $2m$ must be squared: $(2m)^{2} = 4m^{2}$.\n* Choice C ($21m^{2}$): is the area of the full rectangle, before the square is removed.\n* Choice D ($25m^{2}$): adds the square's area instead of subtracting it.\n\n**Test Day Takeaway:** For a figure with a piece removed, compute the outer area and the removed area separately, then subtract; square the whole coefficient, not just the variable.",
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
    question: "A triangle has an area of $(10x^{2} + 4x)$ square units and a base of length $4x$ units, where $x > 0$. Which expression represents the height, in units, of the triangle?",
    choices: [
      // distractor: divides the area by the base without doubling, using A = bh instead of A = bh/2
      { id: "A", text: "$\\frac{5}{2}x + 1$" },
      { id: "B", text: "$5x + 2$" },
      // distractor: treats the formula as A = bh/4, multiplying the area by 4 before dividing by the base
      { id: "C", text: "$10x + 4$" },
      // distractor: doubles the area and divides by x instead of by the base 4x
      { id: "D", text: "$20x + 8$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** From $A = \\frac{1}{2}bh$, $h = \\frac{2A}{b} = \\frac{20x^{2} + 8x}{4x} = 5x + 2$.\n\n**The Full Solution:**\nStep 1: Start from $A = \\frac{1}{2}bh$ and solve for the height: $h = \\frac{2A}{b}$.\nStep 2: Substitute: $h = \\frac{2(10x^{2} + 4x)}{4x} = \\frac{20x^{2} + 8x}{4x}$.\nStep 3: Divide each term by $4x$: $h = 5x + 2$. Check: $\\frac{1}{2}(4x)(5x + 2) = 2x(5x + 2) = 10x^{2} + 4x$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{2}x + 1$): divides the area by the base without doubling it, which treats the triangle as a rectangle.\n* Choice C ($10x + 4$): multiplies the area by $4$ before dividing by $4x$, as if the area formula were $\\frac{1}{4}bh$.\n* Choice D ($20x + 8$): doubles the area correctly but divides by $x$ instead of by the full base $4x$.\n\n**Test Day Takeaway:** To recover a missing dimension of a triangle, use $h = \\frac{2A}{b}$ and divide every term of the numerator by the whole base.",
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
    question: "A rectangular tank is $6p$ inches long, $5p$ inches wide, and $q$ inches tall. The tank is filled with water to $3$ inches below its top. Which expression represents the volume, in cubic inches, of the water in the tank?",
    choices: [
      // distractor: adds the length and the width, 6p + 5p, instead of multiplying them
      { id: "A", text: "$11p(q - 3)$" },
      // distractor: writes (6p)(5p) as 30p instead of 30p^2
      { id: "B", text: "$30p(q - 3)$" },
      { id: "C", text: "$30p^{2}(q - 3)$" },
      // distractor: uses the full height of the tank, q, instead of the depth of the water, q - 3
      { id: "D", text: "$30p^{2}q$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The water fills a prism $6p$ by $5p$ by $(q - 3)$ inches, so its volume is $(6p)(5p)(q - 3) = 30p^{2}(q - 3)$.\n\n**The Full Solution:**\nStep 1: The water reaches $3$ inches below the top of a tank that is $q$ inches tall, so the water is $(q - 3)$ inches deep.\nStep 2: The water has the same base as the tank: $(6p)(5p) = 30p^{2}$ square inches.\nStep 3: The volume of the water is base area times depth: $30p^{2}(q - 3)$. Check: if $p = 1$ and $q = 5$, the water is $6$ by $5$ by $2$ inches, with volume $60 = 30(1)^{2}(5 - 3)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($11p(q - 3)$): adds the length and the width instead of multiplying them.\n* Choice B ($30p(q - 3)$): writes $(6p)(5p)$ as $30p$; the product of $p$ and $p$ is $p^{2}$.\n* Choice D ($30p^{2}q$): gives the volume of the full tank, using the height $q$ instead of the water's depth.\n\n**Test Day Takeaway:** The volume of water in a container uses the depth of the water, not the height of the container.",
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
    question: "A right rectangular prism has a volume of $8w^{3} + 36w^{2}$ cubic units, and the area of its base is $4w^{2}$ square units. The height of the prism is $(2w + n)$ units, where $n$ is a constant. What is the value of $n$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**The correct answer is 9.**\n\n**The Fast Way (~25s):** Height is volume divided by base area: $\\frac{8w^{3} + 36w^{2}}{4w^{2}} = 2w + 9$, so $n = 9$.\n\n**The Full Solution:**\nStep 1: The volume of a prism is the area of its base times its height: $8w^{3} + 36w^{2} = 4w^{2}(2w + n)$.\nStep 2: Expand the right side: $4w^{2}(2w + n) = 8w^{3} + 4nw^{2}$.\nStep 3: Matching the $w^{2}$ terms gives $4n = 36$, so $n = 9$. Check: $4w^{2}(2w + 9) = 8w^{3} + 36w^{2}$ ✓\n\n**Common Mistakes:**\n* $36$: matches the $w^{2}$ coefficient without dividing by the $4$ in the base area.\n* $18$: divides $36$ by $2$ instead of by $4$.\n\n**Test Day Takeaway:** When volume and base area are both expressions, divide each term of the volume by the base area to get the height.",
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
    question: "A right rectangular prism has a square base with side length $(x + 4)$ and a height of $x$. The total surface area of the prism is $6x^{2} + kx + 32$, where $k$ is a constant. What is the value of $k$?",
    choices: [
      // distractor: squares x + 4 as x^2 + 16, dropping the 8x middle term of each base
      { id: "A", text: "$16$" },
      // distractor: distributes the four side faces 4x(x + 4) as 4x^2 + 4x instead of 4x^2 + 16x
      { id: "B", text: "$20$" },
      // distractor: expands (x + 4)^2 as x^2 + 4x + 16, so the two bases contribute 8x instead of 16x
      { id: "C", text: "$24$" },
      { id: "D", text: "$32$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** Two bases give $2(x + 4)^{2} = 2x^{2} + 16x + 32$ and four sides give $4x(x + 4) = 4x^{2} + 16x$, so the total is $6x^{2} + 32x + 32$ and $k = 32$.\n\n**The Full Solution:**\nStep 1: The prism has two square bases, each with area $(x + 4)^{2} = x^{2} + 8x + 16$, so together they contribute $2x^{2} + 16x + 32$.\nStep 2: It has four rectangular side faces, each $x$ by $(x + 4)$, so together they contribute $4x(x + 4) = 4x^{2} + 16x$.\nStep 3: Add: $6x^{2} + 32x + 32$, so $k = 32$. Check: with $x = 1$, the prism is $5$ by $5$ by $1$, with surface area $2(25) + 4(5) = 70$, and $6 + 32 + 32 = 70$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): writes $(x + 4)^{2}$ as $x^{2} + 16$, which drops the $8x$ term from each base. The $x^{2}$ and constant terms still match, which makes this trap convincing.\n* Choice B ($20$): distributes the side faces as $4x^{2} + 4x$, multiplying the $4$ in $(x + 4)$ by $1$ instead of by $4x$.\n* Choice C ($24$): expands $(x + 4)^{2}$ as $x^{2} + 4x + 16$, doubling $4$ instead of doubling $4x$ for the middle term, so the two bases contribute $8x$ instead of $16x$.\n\n**Test Day Takeaway:** Surface area is the sum of every face: two bases plus four sides for a rectangular prism; expand each square of a binomial fully, middle term included.",
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
    question: "A right circular cylinder has radius $r$ and height $h$. A second right circular cylinder has radius $3r$ and height $\\frac{h}{4}$. The volume of the second cylinder is $k$ times the volume of the first cylinder. What is the value of $k$?",
    correctAnswer: "9/4",
    explanation: "**SAT Pattern: Symbolic Area or Volume**\n\n**The correct answer is $\\frac{9}{4}$.** Note that 9/4 and 2.25 are examples of ways to enter a correct answer.\n\n**The Fast Way (~30s):** Volume scales with the square of the radius and with the height, so the factor is $3^{2} \\cdot \\frac{1}{4} = \\frac{9}{4}$.\n\n**The Full Solution:**\nStep 1: The first cylinder has volume $V_{1} = \\pi r^{2}h$.\nStep 2: The second has volume $V_{2} = \\pi(3r)^{2}\\left(\\frac{h}{4}\\right) = \\pi \\cdot 9r^{2} \\cdot \\frac{h}{4} = \\frac{9}{4}\\pi r^{2}h$.\nStep 3: Divide: $\\frac{V_{2}}{V_{1}} = \\frac{9}{4}$. Check: with $r = 1$ and $h = 4$, $V_{1} = 4\\pi$ and $V_{2} = \\pi(9)(1) = 9\\pi$, and $\\frac{9\\pi}{4\\pi} = \\frac{9}{4}$ ✓\n\n**Common Mistakes:**\n* $\\frac{3}{4}$: multiplies the radius factor $3$ by $\\frac{1}{4}$ without squaring it.\n* $12$: multiplies $3$ by $4$, treating the height as multiplied by $4$ instead of divided by $4$.\n* $36$: squares the radius factor and multiplies by $4$ instead of dividing, $9 \\cdot 4$.\n\n**Test Day Takeaway:** For a scaled cylinder, the volume factor is (radius factor)$^{2}$ times (height factor); write each factor down before multiplying.",
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
    question: "Two similar hexagons have corresponding side lengths in the ratio $5:6$. What is the ratio of the area of the smaller hexagon to the area of the larger hexagon?",
    choices: [
      // distractor: uses the side-length ratio as the area ratio without squaring
      { id: "A", text: "$5:6$" },
      { id: "B", text: "$25:36$" },
      // distractor: squares correctly but reverses the order, giving larger to smaller
      { id: "C", text: "$36:25$" },
      // distractor: cubes the side-length ratio, which is the volume rule for similar solids
      { id: "D", text: "$125:216$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Areas of similar figures scale by the square of the side ratio: $5^{2}:6^{2} = 25:36$.\n\n**The Full Solution:**\nStep 1: The side lengths of the smaller hexagon are $\\frac{5}{6}$ of the corresponding side lengths of the larger hexagon.\nStep 2: Area is a two-dimensional measure, so the area ratio is the square of the side-length ratio: $\\left(\\frac{5}{6}\\right)^{2} = \\frac{25}{36}$.\nStep 3: The ratio of the smaller area to the larger area is $25:36$. Check: $\\sqrt{\\frac{25}{36}} = \\frac{5}{6}$, the given side ratio ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5:6$): uses the side ratio as the area ratio. Area grows with the square of length.\n* Choice C ($36:25$): squares correctly but gives the ratio of the larger area to the smaller area.\n* Choice D ($125:216$): cubes the ratio, which applies to volumes of similar solids, not areas.\n\n**Test Day Takeaway:** Lengths scale by $k$, areas by $k^{2}$, volumes by $k^{3}$; then keep the order the question asks for.",
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
    question: "Circles $A$ and $B$ have circumferences in the ratio $7:3$. What is the ratio of the area of circle $A$ to the area of circle $B$?",
    choices: [
      // distractor: uses the circumference ratio as the area ratio without squaring
      { id: "A", text: "$7:3$" },
      // distractor: squares correctly but reverses the order, giving circle B to circle A
      { id: "B", text: "$9:49$" },
      { id: "C", text: "$49:9$" },
      // distractor: cubes the ratio instead of squaring it
      { id: "D", text: "$343:27$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Circumference is a length, so the radii are in the ratio $7:3$, and the areas are in the ratio $7^{2}:3^{2} = 49:9$.\n\n**The Full Solution:**\nStep 1: Circumference is $2\\pi r$, so the ratio of circumferences equals the ratio of radii: $7:3$.\nStep 2: Area is $\\pi r^{2}$, so the ratio of areas is the square of the ratio of radii: $\\left(\\frac{7}{3}\\right)^{2} = \\frac{49}{9}$.\nStep 3: The ratio of the area of circle $A$ to the area of circle $B$ is $49:9$. Check: radii $7$ and $3$ give areas $49\\pi$ and $9\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7:3$): treats the circumference ratio as the area ratio. Circumference is a length, so it must be squared.\n* Choice B ($9:49$): squares correctly but reverses the order; the question asks for circle $A$ to circle $B$.\n* Choice D ($343:27$): cubes the ratio, which is the rule for volumes.\n\n**Test Day Takeaway:** Any length ratio of two circles (radius, diameter or circumference) squares to give the area ratio.",
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
    question: "Two similar pentagons have perimeters of $24$ inches and $40$ inches. What is the ratio of the area of the smaller pentagon to the area of the larger pentagon?",
    choices: [
      // distractor: uses the perimeter ratio as the area ratio without squaring
      { id: "A", text: "$3:5$" },
      { id: "B", text: "$9:25$" },
      // distractor: squares correctly but gives larger to smaller
      { id: "C", text: "$25:9$" },
      // distractor: cubes the perimeter ratio instead of squaring it
      { id: "D", text: "$27:125$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The perimeters give the scale factor $\\frac{24}{40} = \\frac{3}{5}$, so the area ratio is $\\left(\\frac{3}{5}\\right)^{2} = \\frac{9}{25}$.\n\n**The Full Solution:**\nStep 1: Perimeter is a length, so the ratio of perimeters is the scale factor: $\\frac{24}{40} = \\frac{3}{5}$.\nStep 2: Area ratios of similar figures are the square of the scale factor: $\\left(\\frac{3}{5}\\right)^{2} = \\frac{9}{25}$.\nStep 3: The ratio of the smaller area to the larger area is $9:25$. Check: $\\sqrt{\\frac{9}{25}} = \\frac{3}{5} = \\frac{24}{40}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3:5$): stops at the perimeter ratio. Perimeters scale like lengths, but areas scale like the square of length.\n* Choice C ($25:9$): squares correctly but reverses the order.\n* Choice D ($27:125$): cubes the scale factor, which is the rule for volumes of similar solids.\n\n**Test Day Takeaway:** Reduce the perimeter ratio to lowest terms first; that is the scale factor, and its square is the area ratio.",
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
    question: "Hexagon $Q$ is similar to hexagon $P$. The area of hexagon $Q$ is $\\frac{9}{4}$ times the area of hexagon $P$, and the perimeter of hexagon $Q$ is $k$ times the perimeter of hexagon $P$. What is the value of $k$?",
    correctAnswer: "3/2",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**The correct answer is $\\frac{3}{2}$.** Note that 3/2 and 1.5 are examples of ways to enter a correct answer.\n\n**The Fast Way (~15s):** Areas scale by the square of the ratio of corresponding lengths, so $k^{2} = \\frac{9}{4}$ and $k = \\frac{3}{2}$.\n\n**The Full Solution:**\nStep 1: If each length of hexagon $Q$ is $k$ times the corresponding length of hexagon $P$, then the perimeter of $Q$ is $k$ times the perimeter of $P$, and the area of $Q$ is $k^{2}$ times the area of $P$.\nStep 2: So $k^{2} = \\frac{9}{4}$.\nStep 3: Since $k$ is positive, $k = \\sqrt{\\frac{9}{4}} = \\frac{3}{2}$. Check: $\\left(\\frac{3}{2}\\right)^{2} = \\frac{9}{4}$ ✓\n\n**Common Mistakes:**\n* $\\frac{9}{4}$: uses the area ratio as the perimeter ratio.\n* $\\frac{81}{16}$: squares the area ratio instead of taking its square root.\n\n**Test Day Takeaway:** For similar figures, perimeters scale by the length ratio and areas by its square; take the square root of an area ratio to get the length ratio.",
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
    question: "The length and the width of a rectangle are each multiplied by $4$. The area of the new rectangle is $k$ times the area of the original rectangle. What is the value of $k$?",
    choices: [
      // distractor: assumes the area changes by the same factor as each side
      { id: "A", text: "$4$" },
      // distractor: adds the two factors, 4 + 4, instead of multiplying them
      { id: "B", text: "$8$" },
      { id: "C", text: "$16$" },
      // distractor: cubes the factor, as for a volume, instead of squaring it
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Both dimensions are multiplied by $4$, so the area is multiplied by $4 \\cdot 4 = 16$.\n\n**The Full Solution:**\nStep 1: Let the original rectangle have length $l$ and width $w$, so its area is $lw$.\nStep 2: The new rectangle has length $4l$ and width $4w$, so its area is $(4l)(4w) = 16lw$.\nStep 3: So the new area is $16$ times the original area, and $k = 16$. Check: a $1$ by $2$ rectangle (area $2$) becomes a $4$ by $8$ rectangle (area $32 = 16 \\cdot 2$) ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): assumes the area grows by the same factor as each side.\n* Choice B ($8$): adds the factors, $4 + 4$, instead of multiplying them.\n* Choice D ($64$): cubes the factor, as for a volume.\n\n**Test Day Takeaway:** When every length is multiplied by $k$, area is multiplied by $k^{2}$.",
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
    question: "Triangles $JKL$ and $PQR$ are similar, and side $\\overline{JK}$ corresponds to side $\\overline{PQ}$. The area of triangle $PQR$ is $16$ times the area of triangle $JKL$. If $JK = 5$, what is the length of $\\overline{PQ}$?",
    choices: [
      // distractor: divides JK by the area ratio 16, scaling down and skipping the square root
      { id: "A", text: "$\\frac{5}{16}$" },
      // distractor: divides JK by the scale factor 4 instead of multiplying
      { id: "B", text: "$\\frac{5}{4}$" },
      { id: "C", text: "$20$" },
      // distractor: multiplies JK by the area ratio 16 instead of by its square root
      { id: "D", text: "$80$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The ratio of the areas is $16$, so the ratio of corresponding sides is $\\sqrt{16} = 4$, and $PQ = 4(5) = 20$.\n\n**The Full Solution:**\nStep 1: For similar triangles, the ratio of the areas is the square of the ratio of corresponding sides.\nStep 2: The area ratio is $16$, so the side ratio is $\\sqrt{16} = 4$; each side of triangle $PQR$ is $4$ times the corresponding side of triangle $JKL$.\nStep 3: $\\overline{PQ}$ corresponds to $\\overline{JK}$, so $PQ = 4(5) = 20$. Check: $\\left(\\frac{20}{5}\\right)^{2} = 16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{16}$): divides $5$ by the area ratio, $16$, which both scales the wrong way and skips the square root.\n* Choice B ($\\frac{5}{4}$): divides $5$ by $4$; triangle $PQR$ is the larger triangle, so its sides are longer.\n* Choice D ($80$): multiplies $5$ by the area ratio, $16$, instead of by its square root.\n\n**Test Day Takeaway:** Take the square root of an area ratio to get the side ratio, then scale the given side.",
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
    question: "Triangle $R$ is similar to triangle $S$. The perimeter of triangle $R$ is $20$ inches, and the perimeter of triangle $S$ is $30$ inches. The area of triangle $S$ is $72$ square inches. What is the area, in square inches, of triangle $R$?",
    choices: [
      { id: "A", text: "$32$" },
      // distractor: scales the area by the perimeter ratio 2/3 without squaring it
      { id: "B", text: "$48$" },
      // distractor: multiplies 72 by the perimeter ratio 3/2 instead of by (2/3)^2
      { id: "C", text: "$108$" },
      // distractor: squares the ratio but in the wrong direction, multiplying 72 by (3/2)^2
      { id: "D", text: "$162$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The scale factor from $S$ to $R$ is $\\frac{20}{30} = \\frac{2}{3}$, so the area of $R$ is $72 \\cdot \\left(\\frac{2}{3}\\right)^{2} = 32$.\n\n**The Full Solution:**\nStep 1: The ratio of perimeters is the scale factor: triangle $R$'s lengths are $\\frac{20}{30} = \\frac{2}{3}$ of triangle $S$'s.\nStep 2: Areas scale by the square of that factor: $\\left(\\frac{2}{3}\\right)^{2} = \\frac{4}{9}$.\nStep 3: Area of triangle $R$ $= \\frac{4}{9}(72) = 32$ square inches. Check: $\\frac{72}{32} = \\frac{9}{4} = \\left(\\frac{30}{20}\\right)^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($48$): scales the area by $\\frac{2}{3}$, the length ratio, without squaring it.\n* Choice C ($108$): multiplies by $\\frac{3}{2}$, which both skips the square and goes the wrong direction.\n* Choice D ($162$): squares the ratio but uses $\\left(\\frac{3}{2}\\right)^{2}$, enlarging the area even though triangle $R$ is the smaller triangle.\n\n**Test Day Takeaway:** Write the scale factor from the known figure to the unknown one, square it, and sanity-check that the smaller figure gets the smaller area.",
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
    question: "Two similar triangles have areas of $45$ square inches and $125$ square inches. The shortest side of the smaller triangle is $12$ inches long. What is the length, in inches, of the shortest side of the larger triangle?",
    correctAnswer: "20",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**The correct answer is 20.**\n\n**The Fast Way (~25s):** The area ratio $\\frac{125}{45} = \\frac{25}{9}$ gives a scale factor of $\\frac{5}{3}$, so the side is $12 \\cdot \\frac{5}{3} = 20$.\n\n**The Full Solution:**\nStep 1: The ratio of the areas, larger to smaller, is $\\frac{125}{45} = \\frac{25}{9}$.\nStep 2: The scale factor for lengths is the square root of the area ratio: $\\sqrt{\\frac{25}{9}} = \\frac{5}{3}$.\nStep 3: Multiply the corresponding side by the scale factor: $12 \\cdot \\frac{5}{3} = 20$ inches. Check: $\\left(\\frac{20}{12}\\right)^{2} = \\frac{25}{9} = \\frac{125}{45}$ ✓\n\n**Common Mistakes:**\n* $33\\frac{1}{3}$ (about $33.3$): multiplies $12$ by the area ratio $\\frac{25}{9}$ instead of by its square root.\n* $7.2$: divides $12$ by the scale factor $\\frac{5}{3}$, shrinking the side even though it belongs to the larger triangle.\n\n**Test Day Takeaway:** Reduce the area ratio to a fraction of perfect squares, take the square root, and only then scale the side.",
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
    question: "In the $xy$-plane, a triangle has vertices at $(0, 0)$, $(9, 0)$, and $(0, 8)$. What is the area, in square units, of the triangle?",
    choices: [
      // distractor: adds the two leg lengths, 9 + 8, instead of multiplying
      { id: "A", text: "$17$" },
      { id: "B", text: "$36$" },
      // distractor: multiplies base and height but forgets the factor of 1/2
      { id: "C", text: "$72$" },
      // distractor: adds the squares of the legs, 81 + 64, which is the squared length of the hypotenuse
      { id: "D", text: "$145$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The legs lie on the axes with lengths $9$ and $8$, so the area is $\\frac{1}{2}(9)(8) = 36$.\n\n**The Full Solution:**\nStep 1: The side from $(0, 0)$ to $(9, 0)$ lies on the $x$-axis and has length $9$; use it as the base.\nStep 2: The vertex $(0, 8)$ is $8$ units above the $x$-axis, so the height is $8$.\nStep 3: Area $= \\frac{1}{2}(9)(8) = 36$ square units. Check: the triangle is half of a $9$ by $8$ rectangle, whose area is $72$, and $\\frac{72}{2} = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): adds the base and height instead of multiplying them.\n* Choice C ($72$): is the area of the $9$ by $8$ rectangle; the triangle covers only half of it.\n* Choice D ($145$): adds $9^{2} + 8^{2}$, which is the square of the hypotenuse length, not an area.\n\n**Test Day Takeaway:** A triangle with two sides on the axes is half of a rectangle: $\\frac{1}{2}$ times the two intercepts.",
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
    question: "A triangle in the $xy$-plane has vertices at $(0, 0)$, $(12, 0)$, and $(5, k)$, where $k > 0$. Which expression represents the area of the triangle?",
    choices: [
      // distractor: uses the x-coordinate 5 of the third vertex as the base instead of the side of length 12
      { id: "A", text: "$\\frac{5}{2}k$" },
      { id: "B", text: "$6k$" },
      // distractor: multiplies base and height but forgets the factor of 1/2
      { id: "C", text: "$12k$" },
      // distractor: multiplies 12 by 5 and by k, treating the x-coordinate 5 as another dimension
      { id: "D", text: "$30k$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The base on the $x$-axis is $12$ and the height is $k$, so the area is $\\frac{1}{2}(12)(k) = 6k$.\n\n**The Full Solution:**\nStep 1: The side from $(0, 0)$ to $(12, 0)$ lies on the $x$-axis, so take the base to be $12$.\nStep 2: The height is the vertical distance from $(5, k)$ to the $x$-axis, which is $k$; the $x$-coordinate $5$ does not affect it.\nStep 3: Area $= \\frac{1}{2}(12)(k) = 6k$. Check: with $k = 2$, the vertices $(0, 0)$, $(12, 0)$, $(5, 2)$ give $\\frac{1}{2}(12)(2) = 12 = 6(2)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{2}k$): uses $5$, the $x$-coordinate of the top vertex, as the base. The base is the full side on the $x$-axis.\n* Choice C ($12k$): leaves out the factor of $\\frac{1}{2}$.\n* Choice D ($30k$): multiplies by $5$ as well, treating the $x$-coordinate of the top vertex as if it were part of the area.\n\n**Test Day Takeaway:** With a side on the $x$-axis, the height is just the $y$-coordinate of the third vertex, wherever it sits left to right.",
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
    question: "In the $xy$-plane, a triangle has vertices at $(-2, 3)$, $(4, 3)$, and $(1, y)$, where $y > 3$. Which expression represents the area of the triangle?",
    choices: [
      { id: "A", text: "$3y - 9$" },
      // distractor: distributes 3 over y - 3 as 3y - 3 instead of 3y - 9
      { id: "B", text: "$3y - 3$" },
      // distractor: uses y as the height, measuring to the x-axis instead of to the base on the line y = 3
      { id: "C", text: "$3y$" },
      // distractor: multiplies base and height but forgets the factor of 1/2
      { id: "D", text: "$6y - 18$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The base from $(-2, 3)$ to $(4, 3)$ is $6$ and the height is $y - 3$, so the area is $\\frac{1}{2}(6)(y - 3) = 3y - 9$.\n\n**The Full Solution:**\nStep 1: The vertices $(-2, 3)$ and $(4, 3)$ share the $y$-coordinate $3$, so they form a horizontal base of length $4 - (-2) = 6$.\nStep 2: The height is the vertical distance from $(1, y)$ down to the line $y = 3$, which is $y - 3$.\nStep 3: Area $= \\frac{1}{2}(6)(y - 3) = 3(y - 3) = 3y - 9$. Check: with $y = 7$, the height is $4$ and the area is $\\frac{1}{2}(6)(4) = 12$, and $3(7) - 9 = 12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($3y - 3$): distributes $3$ over $y - 3$ but multiplies only the $y$, writing $3y - 3$ instead of $3y - 9$.\n* Choice C ($3y$): uses $y$ as the height, which measures down to the $x$-axis rather than to the base, which lies on the line $y = 3$.\n* Choice D ($6y - 18$): uses base times height without the factor of $\\frac{1}{2}$.\n\n**Test Day Takeaway:** When the base is not on an axis, measure the height from the base's line, not from the $x$-axis.",
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
    question: "What is the area, in square units, of the triangle in the $xy$-plane with vertices $(2, -3)$, $(12, -3)$, and $(5, 4)$?",
    correctAnswer: "35",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**The correct answer is 35.**\n\n**The Fast Way (~20s):** The base along $y = -3$ has length $10$ and the third vertex is $4 - (-3) = 7$ units above it, so the area is $\\frac{1}{2}(10)(7) = 35$.\n\n**The Full Solution:**\nStep 1: The vertices $(2, -3)$ and $(12, -3)$ share the $y$-coordinate $-3$, so the base is horizontal with length $12 - 2 = 10$.\nStep 2: The height is the vertical distance from $(5, 4)$ to the line $y = -3$: $4 - (-3) = 7$.\nStep 3: Area $= \\frac{1}{2}(10)(7) = 35$ square units. Check: the shoelace formula gives $\\frac{1}{2}\\left|2(-3 - 4) + 12(4 + 3) + 5(-3 + 3)\\right| = \\frac{1}{2}|-14 + 84| = 35$ ✓\n\n**Common Mistakes:**\n* $70$: multiplies base and height but forgets the factor of $\\frac{1}{2}$.\n* $5$: computes the height as $4 - 3 = 1$, ignoring the negative sign of $-3$, and gets $\\frac{1}{2}(10)(1)$.\n* $20$: uses $4$, the $y$-coordinate of the top vertex, as the height, measuring to the $x$-axis instead of to the base.\n\n**Test Day Takeaway:** Find the side that is horizontal or vertical, use it as the base, and measure the height from that side's line; subtracting a negative coordinate adds.",
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
    question: "Triangle $ABC$ in the $xy$-plane has vertices $A(-5, 5)$, $B(9, 5)$, and $C(2, -4)$. What is the area, in square units, of triangle $ABC$?",
    choices: [
      // distractor: computes the base as 9 - 5 = 4, dropping the negative sign of -5
      { id: "A", text: "$18$" },
      // distractor: uses 4, the distance from C to the x-axis, as the height instead of the distance to the line y = 5
      { id: "B", text: "$28$" },
      { id: "C", text: "$63$" },
      // distractor: multiplies base and height but forgets the factor of 1/2
      { id: "D", text: "$126$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The horizontal base $\\overline{AB}$ along $y = 5$ has length $14$, and $C(2, -4)$ is $9$ units below that line, so the area is $\\frac{1}{2}(14)(9) = 63$.\n\n**The Full Solution:**\nStep 1: $A(-5, 5)$ and $B(9, 5)$ share the $y$-coordinate $5$, so they form a horizontal base of length $9 - (-5) = 14$.\nStep 2: The height is the vertical distance from $C(2, -4)$ to the line $y = 5$: $5 - (-4) = 9$.\nStep 3: Area $= \\frac{1}{2}(14)(9) = 63$ square units. Check: the shoelace formula gives $\\frac{1}{2}\\left|(-5)(5 - (-4)) + 9(-4 - 5) + 2(5 - 5)\\right| = \\frac{1}{2}|-45 - 81 + 0| = 63$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): computes the base as $9 - 5 = 4$, dropping the negative sign, and gets $\\frac{1}{2}(4)(9)$.\n* Choice B ($28$): uses $4$, the distance from $C$ to the $x$-axis, as the height. The base lies on $y = 5$, so the height is $5 - (-4) = 9$.\n* Choice D ($126$): multiplies base and height without the factor of $\\frac{1}{2}$.\n\n**Test Day Takeaway:** When two vertices share a coordinate, use that side as the base; the height is the distance from the third vertex to that side's line, not to an axis.",
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
    question: "In the $xy$-plane, a triangle has vertices at $(0, 0)$, $(16, 0)$, and $(0, k)$, where $k$ is a positive constant. The area of the triangle is $56$ square units. What is the value of $k$?",
    choices: [
      // distractor: solves 16k = 56, leaving out the factor of 1/2
      { id: "A", text: "$3.5$" },
      { id: "B", text: "$7$" },
      // distractor: subtracts the base from the area, 56 - 16
      { id: "C", text: "$40$" },
      // distractor: doubles the area but never divides by the base 16
      { id: "D", text: "$112$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\frac{1}{2}(16)(k) = 56$, so $8k = 56$ and $k = 7$.\n\n**The Full Solution:**\nStep 1: The base runs along the $x$-axis from $(0, 0)$ to $(16, 0)$, so it has length $16$; the third vertex $(0, k)$ is on the $y$-axis, so the height is $k$.\nStep 2: Set up the area equation: $\\frac{1}{2}(16)(k) = 56$, or $8k = 56$.\nStep 3: Divide by $8$: $k = 7$. Check: $\\frac{1}{2}(16)(7) = 56$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.5$): solves $16k = 56$, which leaves out the $\\frac{1}{2}$ in the area formula.\n* Choice C ($40$): subtracts the base from the area instead of dividing.\n* Choice D ($112$): doubles the area, $2(56)$, but never divides by the base.\n\n**Test Day Takeaway:** Write $\\frac{1}{2}bh = A$ with the known numbers in place, then solve for the missing dimension.",
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
    question: "In the $xy$-plane, a triangle has vertices at $(2, -1)$, $(8, -1)$, and $(t, 6)$, where $t$ is a constant. Which of the following must be true about the area of the triangle?",
    choices: [
      { id: "A", text: "The area is $21$ square units for every value of $t$." },
      // distractor: assumes the top vertex must be directly above the midpoint of the base for the area formula to apply
      { id: "B", text: "The area is $21$ square units only when $t = 5$." },
      // distractor: uses base times height without the factor of 1/2
      { id: "C", text: "The area is $42$ square units for every value of $t$." },
      // distractor: assumes moving the top vertex sideways changes the area, though the height stays 7
      { id: "D", text: "The area increases as $t$ increases." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The base on $y = -1$ is $6$ long and every point $(t, 6)$ is $7$ units above that line, so the area is $\\frac{1}{2}(6)(7) = 21$ no matter what $t$ is.\n\n**The Full Solution:**\nStep 1: The vertices $(2, -1)$ and $(8, -1)$ form a horizontal base of length $8 - 2 = 6$.\nStep 2: The third vertex $(t, 6)$ always lies on the line $y = 6$, which is $6 - (-1) = 7$ units above the base, so the height is $7$ for every value of $t$.\nStep 3: Area $= \\frac{1}{2}(6)(7) = 21$ square units, independent of $t$. Check with the shoelace formula for $t = 0$ and $t = 20$: $\\frac{1}{2}|2(-1 - 6) + 8(6 + 1) + 0| = 21$ and $\\frac{1}{2}|2(-7) + 8(7) + 20(0)| = 21$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: assumes the third vertex has to be centered over the base. Height is measured perpendicular to the base, so sliding the vertex along $y = 6$ does not change it.\n* Choice C: uses base times height, $6 \\cdot 7 = 42$, without the factor of $\\frac{1}{2}$.\n* Choice D: assumes moving the top vertex to the right changes the area. The triangle's shape changes, but its base and height do not.\n\n**Test Day Takeaway:** Area depends only on a base and the perpendicular height to it; a vertex that slides parallel to the base leaves the area unchanged.",
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
    question: "In the $xy$-plane, a triangle has vertices at $(0, 0)$, $(2a, 0)$, and $(a, 3a)$, where $a$ is a positive constant. If the area of the triangle is $108$ square units, what is the value of $a$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**The correct answer is 6.**\n\n**The Fast Way (~25s):** The base is $2a$ and the height is $3a$, so the area is $\\frac{1}{2}(2a)(3a) = 3a^{2} = 108$, giving $a^{2} = 36$ and $a = 6$.\n\n**The Full Solution:**\nStep 1: The vertices $(0, 0)$ and $(2a, 0)$ lie on the $x$-axis, so the base has length $2a$.\nStep 2: The third vertex $(a, 3a)$ is $3a$ units above the $x$-axis, so the height is $3a$, and the area is $\\frac{1}{2}(2a)(3a) = 3a^{2}$.\nStep 3: Solve $3a^{2} = 108$: $a^{2} = 36$, and since $a > 0$, $a = 6$. Check: the vertices are $(0, 0)$, $(12, 0)$, and $(6, 18)$, and $\\frac{1}{2}(12)(18) = 108$ ✓\n\n**Common Mistakes:**\n* $36$: stops at $a^{2} = 36$ and reports $a^{2}$ instead of $a$.\n* $3\\sqrt{2}$ (about $4.24$): leaves out the factor of $\\frac{1}{2}$, solving $6a^{2} = 108$ to get $a^{2} = 18$.\n* $18$: solves $3a = 54$ or $6a = 108$, treating the area as linear in $a$ instead of quadratic.\n\n**Test Day Takeaway:** When the coordinates are written in terms of a constant, build the area expression first; it is usually a multiple of $a^{2}$, so finish with a square root.",
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
    question: "In triangle $ABC$, side $\\overline{AC}$ is extended through $C$ to point $D$. The measure of angle $BCD$ is $118^{\\circ}$, and the measure of angle $A$ is $46^{\\circ}$. What is the measure of angle $B$?",
    choices: [
      // distractor: gives the interior angle ACB, 180 - 118 = 62, instead of angle B
      { id: "A", text: "$62^{\\circ}$" },
      { id: "B", text: "$72^{\\circ}$" },
      // distractor: subtracts angle A from 180: 180 - 46 = 134
      { id: "C", text: "$134^{\\circ}$" },
      // distractor: adds the two given angles, 118 + 46 = 164, instead of subtracting
      { id: "D", text: "$164^{\\circ}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Angle $BCD$ is the exterior angle at $C$, so it equals angle $A$ plus angle $B$: $118 = 46 + B$, and angle $B$ measures $72^{\\circ}$.\n\n**The Full Solution:**\nStep 1: Angle $BCD$ is formed by side $\\overline{BC}$ and the extension of $\\overline{AC}$, so it is an exterior angle of the triangle at $C$. The interior angles not next to it are angle $A$ and angle $B$.\nStep 2: An exterior angle equals the sum of the two remote interior angles: $118^{\\circ} = 46^{\\circ} + B$.\nStep 3: So angle $B$ measures $118^{\\circ} - 46^{\\circ} = 72^{\\circ}$. Check: angle $ACB = 180^{\\circ} - 118^{\\circ} = 62^{\\circ}$, and $46^{\\circ} + 72^{\\circ} + 62^{\\circ} = 180^{\\circ}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($62^{\\circ}$): $62^{\\circ}$ is angle $ACB$, the interior angle at $C$, not angle $B$.\n* Choice C ($134^{\\circ}$): $180 - 46$ subtracts only angle $A$ from $180$ and ignores angle $BCD$.\n* Choice D ($164^{\\circ}$): $118 + 46$ adds the given angles; angle $A$ and angle $B$ together make up angle $BCD$, so subtract.\n\n**Test Day Takeaway:** When a side of a triangle is extended, the outside angle equals the sum of the two far interior angles; if one of them is missing, subtract.",
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
    question: "In triangle $PQR$, side $\\overline{QR}$ is extended through $R$ to point $S$. Angle $P$ measures $52^{\\circ}$ and angle $Q$ measures $71^{\\circ}$. What is the measure of angle $PRS$?",
    choices: [
      // distractor: gives the interior angle PRQ, 180 - 52 - 71 = 57, instead of the exterior angle
      { id: "A", text: "$57^{\\circ}$" },
      // distractor: subtracts only angle Q from 180: 180 - 71 = 109
      { id: "B", text: "$109^{\\circ}$" },
      { id: "C", text: "$123^{\\circ}$" },
      // distractor: subtracts only angle P from 180: 180 - 52 = 128
      { id: "D", text: "$128^{\\circ}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Angle $PRS$ is the exterior angle at $R$, so it equals $52^{\\circ} + 71^{\\circ} = 123^{\\circ}$.\n\n**The Full Solution:**\nStep 1: Angle $PRS$ is formed by side $\\overline{PR}$ and the extension of $\\overline{QR}$, so it is an exterior angle of the triangle at $R$.\nStep 2: The interior angles not adjacent to it are angle $P$ and angle $Q$.\nStep 3: An exterior angle equals the sum of the two remote interior angles: $52^{\\circ} + 71^{\\circ} = 123^{\\circ}$. Check: angle $PRQ = 180^{\\circ} - 52^{\\circ} - 71^{\\circ} = 57^{\\circ}$, and $57^{\\circ} + 123^{\\circ} = 180^{\\circ}$ along line $QS$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($57^{\\circ}$): $57^{\\circ}$ is angle $PRQ$, the interior angle at $R$. Angle $PRS$ is its supplement.\n* Choice B ($109^{\\circ}$): $180 - 71$ uses only angle $Q$; angle $P$ is ignored.\n* Choice D ($128^{\\circ}$): $180 - 52$ uses only angle $P$; angle $Q$ is ignored.\n\n**Test Day Takeaway:** When a side is extended, the outside angle is the sum of the two far interior angles — one addition, no subtraction from $180$.",
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
    question: "In triangle $ABC$, an exterior angle at vertex $C$ measures $135^{\\circ}$. Angle $A$ measures $40^{\\circ}$, and angle $B$ measures $(5x - 10)^{\\circ}$. What is the value of $x$?",
    choices: [
      // distractor: moves the -10 across with the wrong sign, solving 5x = 85
      { id: "A", text: "$17$" },
      { id: "B", text: "$21$" },
      // distractor: sets angle B alone equal to the exterior angle: 5x - 10 = 135
      { id: "C", text: "$29$" },
      // distractor: gives the measure of angle B, 135 - 40 = 95, instead of x
      { id: "D", text: "$95$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The two remote angles add to the exterior angle: $40 + (5x - 10) = 135$, so $5x = 105$ and $x = 21$.\n\n**The Full Solution:**\nStep 1: The exterior angle at $C$ equals the sum of the interior angles at $A$ and $B$: $40 + (5x - 10) = 135$.\nStep 2: Combine the constants: $5x + 30 = 135$, so $5x = 105$.\nStep 3: Divide by $5$: $x = 21$. Check: angle $B = 5(21) - 10 = 95^{\\circ}$, and $40^{\\circ} + 95^{\\circ} = 135^{\\circ}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): $17$ comes from $5x = 135 - 40 - 10$; the $-10$ must be added back, not subtracted again.\n* Choice C ($29$): $29$ comes from $5x - 10 = 135$, which leaves angle $A$ out of the sum.\n* Choice D ($95$): $95$ is the measure of angle $B$, not the value of $x$.\n\n**Test Day Takeaway:** Write exterior angle = remote angle + remote angle, then solve; finish by answering for the variable the question names.",
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
    question: "An exterior angle of triangle $ABC$ at vertex $C$ measures $118^{\\circ}$, and angle $B$ measures $30^{\\circ}$ more than angle $A$. What is the measure, in degrees, of angle $A$?",
    correctAnswer: "44",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**The correct answer is 44.**\n\n**The Fast Way (~25s):** Angles $A$ and $B$ add to $118^{\\circ}$ and differ by $30^{\\circ}$, so angle $A = \\frac{118 - 30}{2} = 44^{\\circ}$.\n\n**The Full Solution:**\nStep 1: The exterior angle at $C$ equals the sum of the remote interior angles: $m\\angle A + m\\angle B = 118$.\nStep 2: Let $m\\angle A = a$. Then $m\\angle B = a + 30$, so $a + (a + 30) = 118$ and $2a = 88$.\nStep 3: So $a = 44$. Check: angle $B = 74^{\\circ}$, $44 + 74 = 118$, and angle $C = 180 - 118 = 62^{\\circ}$, so $44 + 74 + 62 = 180$ ✓\n\n**Common Mistakes:**\n* $59$: splits $118$ evenly and ignores the $30^{\\circ}$ difference.\n* $74$: solves correctly but reports angle $B$.\n* $16$: uses the interior angle at $C$, $62^{\\circ}$, as the sum of angles $A$ and $B$: $\\frac{62 - 30}{2} = 16$.\n\n**Test Day Takeaway:** The two remote angles add to the exterior angle itself, not to its supplement. Turn \"30 more than\" into one variable before solving.",
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
    question: "In a triangle, two of the interior angles measure $(4n)^{\\circ}$ and $(5n)^{\\circ}$. The exterior angle at the third vertex measures $135^{\\circ}$. What is the value of $5n$?",
    choices: [
      // distractor: stops at n = 15 and does not multiply by 5
      { id: "A", text: "$15$" },
      // distractor: gives the interior angle at the third vertex, 180 - 135 = 45
      { id: "B", text: "$45$" },
      // distractor: gives 4n, the smaller of the two angles
      { id: "C", text: "$60$" },
      { id: "D", text: "$75$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $4n + 5n = 135$, so $n = 15$ and $5n = 75$.\n\n**The Full Solution:**\nStep 1: The exterior angle equals the sum of the two remote interior angles: $4n + 5n = 135$.\nStep 2: So $9n = 135$ and $n = 15$.\nStep 3: Then $5n = 5(15) = 75$. Check: the angles are $60^{\\circ}$, $75^{\\circ}$, and $180 - 135 = 45^{\\circ}$, which add to $180^{\\circ}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): $15$ is the value of $n$; the question asks for $5n$.\n* Choice B ($45$): $45^{\\circ}$ is the interior angle at the third vertex, the supplement of the exterior angle.\n* Choice C ($60$): $60$ is $4n$, the other remote angle.\n\n**Test Day Takeaway:** Set the two remote angles equal to the exterior angle, solve for the variable, then evaluate exactly the expression asked for.",
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
    question: "In the triangle shown, an exterior angle at vertex $R$ measures $(5k)^{\\circ}$. What is the value of $k$?",
    diagram: { type: "triangleWithAngles", params: { vertexLabels: ["R", "S", "T"], angleLabels: ["", "(2k + 12)°", "63°"], figureNote: true } },
    choices: [
      // distractor: sets the exterior angle equal to angle S alone and drops the constant 63: 5k = 2k + 12
      { id: "A", text: "$4$" },
      // distractor: treats the exterior angle as a third interior angle: 5k + (2k + 12) + 63 = 180
      { id: "B", text: "$15$" },
      // distractor: treats the exterior angle at R as supplementary to angle S: 5k + (2k + 12) = 180
      { id: "C", text: "$24$" },
      { id: "D", text: "$25$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The exterior angle at $R$ equals angle $S$ + angle $T$: $5k = (2k + 12) + 63$, so $3k = 75$ and $k = 25$.\n\n**The Full Solution:**\nStep 1: Angles $S$ and $T$ are the interior angles not adjacent to vertex $R$, so $5k = (2k + 12) + 63$.\nStep 2: Simplify: $5k = 2k + 75$, so $3k = 75$.\nStep 3: So $k = 25$. Check: the exterior angle is $125^{\\circ}$, angle $S$ is $62^{\\circ}$, and $62 + 63 = 125$; angle $R$ is $55^{\\circ}$ and $55 + 62 + 63 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): $4$ comes from $5k = 2k + 12$, which leaves angle $T$ out of the sum.\n* Choice B ($15$): $15$ comes from adding the exterior angle to the two interior angles and setting the total to $180$; the exterior angle is not an angle of the triangle.\n* Choice C ($24$): $24$ pairs the exterior angle at $R$ with angle $S$ as if they formed a straight line. The exterior angle is supplementary to the interior angle at $R$ only.\n\n**Test Day Takeaway:** An exterior angle sits on a straight line with its own vertex's interior angle and equals the sum of the other two.",
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
    question: "In the triangle shown, an exterior angle at vertex $C$ measures $(4y - 9)^{\\circ}$. What is the measure, in degrees, of angle $ACB$?",
    diagram: { type: "triangleWithAngles", params: { vertexLabels: ["A", "B", "C"], angleLabels: ["(2y + 7)°", "(y + 14)°", ""], figureNote: true } },
    choices: [
      // distractor: stops at y = 30 and reports the value of y
      { id: "A", text: "$30$" },
      // distractor: reports angle B, y + 14 = 44
      { id: "B", text: "$44$" },
      { id: "C", text: "$69$" },
      // distractor: reports the exterior angle, 4(30) - 9 = 111, instead of the interior angle at C
      { id: "D", text: "$111$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** $4y - 9 = (2y + 7) + (y + 14)$ gives $y = 30$, so the exterior angle is $111^{\\circ}$ and angle $ACB = 180 - 111 = 69^{\\circ}$.\n\n**The Full Solution:**\nStep 1: The exterior angle at $C$ equals the sum of the remote interior angles: $4y - 9 = (2y + 7) + (y + 14) = 3y + 21$.\nStep 2: Solve: $y = 30$. The exterior angle measures $4(30) - 9 = 111^{\\circ}$.\nStep 3: Angle $ACB$ and the exterior angle at $C$ form a straight line, so angle $ACB = 180 - 111 = 69^{\\circ}$. Check: angle $A = 67^{\\circ}$, angle $B = 44^{\\circ}$, and $67 + 44 + 69 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): $30$ is the value of $y$, not an angle measure asked for.\n* Choice B ($44$): $44^{\\circ}$ is angle $B$, one of the remote interior angles.\n* Choice D ($111$): $111^{\\circ}$ is the exterior angle. The question asks for the interior angle at $C$, its supplement.\n\n**Test Day Takeaway:** After the exterior-angle equation gives the variable, check which angle is asked for: the interior angle at that vertex is $180^{\\circ}$ minus the exterior angle.",
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
    question: "In triangle $ABC$, $AB = AC$. The measure of an exterior angle at vertex $C$ is $3$ times the measure of angle $A$. What is the measure, in degrees, of angle $A$?",
    correctAnswer: "36",
    explanation: "**SAT Pattern: Exterior Angle Theorem**\n\n**The correct answer is 36.**\n\n**The Fast Way (~50s):** Let angle $A = a$. Since $AB = AC$, angles $B$ and $C$ are equal, and the exterior angle at $C$ equals $a + m\\angle B = a + \\frac{180 - a}{2}$. Setting this equal to $3a$ gives $a = 36$.\n\n**The Full Solution:**\nStep 1: Because $AB = AC$, the angles opposite those sides, angles $C$ and $B$, are equal. If angle $A$ measures $a^{\\circ}$, each of angles $B$ and $C$ measures $\\frac{180 - a}{2}$ degrees.\nStep 2: The exterior angle at $C$ equals the sum of the remote interior angles $A$ and $B$: $a + \\frac{180 - a}{2} = \\frac{180 + a}{2}$. Set this equal to $3a$: $180 + a = 6a$.\nStep 3: So $5a = 180$ and $a = 36$. Check: the angles are $36^{\\circ}$, $72^{\\circ}$, and $72^{\\circ}$; the exterior angle at $C$ is $180 - 72 = 108^{\\circ}$, and $108 = 3(36)$ ✓\n\n**Common Mistakes:**\n* $72$: reports angle $B$ or angle $C$ instead of angle $A$.\n* $108$: reports the exterior angle at $C$.\n* $45$: writes the exterior angle as $180 - a$, the supplement of angle $A$ instead of angle $C$, and solves $180 - a = 3a$.\n\n**Test Day Takeaway:** Equal sides mean equal opposite angles. Express every angle in one variable, then apply exterior angle = sum of the two remote angles.",
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
    question: "In the figure shown, triangle $JKL$ is similar to triangle $MNP$, where $J$, $K$, and $L$ correspond to $M$, $N$, and $P$, respectively. What is the length of $\\overline{NP}$?",
    diagram: { type: "similarTriangles", params: { triangle1: { vertices: [[-1.143, 3.833], [0, 0], [7, 0]], labels: ["J", "K", "L"], sideLabels: ["4", "7", "9"] }, triangle2: { vertices: [[-3.429, 11.5], [0, 0], [21, 0]], labels: ["M", "N", "P"], sideLabels: ["12", "", ""] }, figureNote: true } },
    choices: [
      // distractor: divides KL by the scale factor instead of multiplying: 7 / 3
      { id: "A", text: "$\\frac{7}{3}$" },
      // distractor: copies KL unchanged, treating the triangles as congruent
      { id: "B", text: "$7$" },
      // distractor: adds the difference MN - JK = 8 to KL instead of multiplying by the scale factor
      { id: "C", text: "$15$" },
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $\\overline{MN}$ corresponds to $\\overline{JK}$, so the scale factor is $\\frac{12}{4} = 3$ and $NP = 3(7) = 21$.\n\n**The Full Solution:**\nStep 1: The correspondence $J \\to M$, $K \\to N$, $L \\to P$ pairs $\\overline{JK}$ with $\\overline{MN}$ and $\\overline{KL}$ with $\\overline{NP}$.\nStep 2: The scale factor from triangle $JKL$ to triangle $MNP$ is $\\frac{MN}{JK} = \\frac{12}{4} = 3$.\nStep 3: So $NP = 3(KL) = 3(7) = 21$. Check: $\\frac{NP}{KL} = \\frac{21}{7} = 3 = \\frac{MN}{JK}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{3}$): $\\frac{7}{3}$ divides by the scale factor, which would make triangle $MNP$ the smaller one.\n* Choice B ($7$): $7$ is $KL$ itself; similar triangles share angles, not side lengths.\n* Choice C ($15$): $15$ adds $12 - 4 = 8$ to $7$. Similar figures scale by a factor, not by a fixed amount.\n\n**Test Day Takeaway:** Match sides by the vertex order, find the scale factor from one known pair, and multiply.",
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
    question: "The side lengths of triangle $DEF$ are $3$ times the corresponding side lengths of triangle $ABC$. The perimeter of triangle $ABC$ is $14$. What is the perimeter of triangle $DEF$?",
    choices: [
      // distractor: adds 3 to the perimeter instead of multiplying it by 3
      { id: "A", text: "$17$" },
      // distractor: adds 3 to each of the three sides, so the perimeter grows by 9: 14 + 9 = 23
      { id: "B", text: "$23$" },
      { id: "C", text: "$42$" },
      // distractor: multiplies by the square of the scale factor, 9, as if the perimeter were an area
      { id: "D", text: "$126$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Every side is tripled, so the perimeter is tripled: $3(14) = 42$.\n\n**The Full Solution:**\nStep 1: If the sides of triangle $ABC$ are $a$, $b$, and $c$, then $a + b + c = 14$.\nStep 2: The sides of triangle $DEF$ are $3a$, $3b$, and $3c$.\nStep 3: The perimeter of triangle $DEF$ is $3a + 3b + 3c = 3(a + b + c) = 3(14) = 42$. Check: sides $3$, $5$, $6$ have perimeter $14$, and $9 + 15 + 18 = 42$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): $17$ adds the scale factor to the perimeter; scaling multiplies.\n* Choice B ($23$): $23$ adds $3$ to each side. A scale factor multiplies every side, so the perimeter is multiplied too.\n* Choice D ($126$): $126 = 9(14)$ squares the scale factor. Only areas scale by the square; perimeters scale by the factor itself.\n\n**Test Day Takeaway:** Perimeter is a length, so it scales by the same factor as each side.",
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
    question: "The two triangles shown are similar, and side $\\overline{DE}$ corresponds to side $\\overline{AB}$. What is the perimeter of triangle $DEF$?",
    diagram: { type: "similarTriangles", params: { triangle1: { vertices: [[-1.5, 5.809], [0, 0], [9, 0]], labels: ["A", "B", "C"], sideLabels: ["6", "9", "12"] }, triangle2: { vertices: [[-2, 7.746], [0, 0], [12, 0]], labels: ["D", "E", "F"], sideLabels: ["8", "", ""] }, figureNote: true } },
    choices: [
      // distractor: gives the perimeter of triangle ABC, 6 + 9 + 12 = 27
      { id: "A", text: "$27$" },
      // distractor: adds DE - AB = 2 to each side of triangle ABC: 8 + 11 + 14 = 33
      { id: "B", text: "$33$" },
      { id: "C", text: "$36$" },
      // distractor: multiplies the perimeter of ABC by the square of the scale factor, (4/3)^2 = 16/9
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\frac{DE}{AB} = \\frac{8}{6} = \\frac{4}{3}$, so the perimeter of triangle $DEF$ is $\\frac{4}{3}(6 + 9 + 12) = \\frac{4}{3}(27) = 36$.\n\n**The Full Solution:**\nStep 1: Side $\\overline{DE}$ corresponds to side $\\overline{AB}$, so the scale factor from triangle $ABC$ to triangle $DEF$ is $\\frac{8}{6} = \\frac{4}{3}$.\nStep 2: The perimeter of triangle $ABC$ is $6 + 9 + 12 = 27$.\nStep 3: Perimeters scale by the same factor as sides: $\\frac{4}{3}(27) = 36$. Check: the sides of triangle $DEF$ are $8$, $12$, and $16$, and $8 + 12 + 16 = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($27$): $27$ is the perimeter of triangle $ABC$, the triangle whose sides are all labeled.\n* Choice B ($33$): $33$ adds $8 - 6 = 2$ to every side; similar triangles scale by a factor, not by a fixed amount.\n* Choice D ($48$): $48 = \\frac{16}{9}(27)$ uses the square of the scale factor, which applies to area, not perimeter.\n\n**Test Day Takeaway:** One labeled pair of corresponding sides fixes the scale factor; multiply the whole perimeter by it.",
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
    question: "In the figure shown, triangle $FGH$ is similar to triangle $RST$, where $F$, $G$, and $H$ correspond to $R$, $S$, and $T$, respectively. What is the length of $\\overline{RS}$?",
    diagram: { type: "similarTriangles", params: { triangle1: { vertices: [[-2.286, 7.667], [0, 0], [14, 0]], labels: ["F", "G", "H"], sideLabels: ["8", "14", "18"] }, triangle2: { vertices: [[-3.429, 11.5], [0, 0], [21, 0]], labels: ["R", "S", "T"], sideLabels: ["", "21", ""] }, figureNote: true } },
    correctAnswer: "12",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**The correct answer is 12.**\n\n**The Fast Way (~20s):** $\\overline{ST}$ corresponds to $\\overline{GH}$, so the scale factor is $\\frac{21}{14} = \\frac{3}{2}$ and $RS = \\frac{3}{2}(8) = 12$.\n\n**The Full Solution:**\nStep 1: The correspondence pairs $\\overline{FG}$ with $\\overline{RS}$ and $\\overline{GH}$ with $\\overline{ST}$.\nStep 2: The scale factor from triangle $FGH$ to triangle $RST$ is $\\frac{ST}{GH} = \\frac{21}{14} = \\frac{3}{2}$.\nStep 3: So $RS = \\frac{3}{2}(FG) = \\frac{3}{2}(8) = 12$. Check: $\\frac{RS}{FG} = \\frac{12}{8} = \\frac{3}{2} = \\frac{ST}{GH}$ ✓\n\n**Common Mistakes:**\n* $15$: adds $21 - 14 = 7$ to $8$ instead of multiplying by the scale factor.\n* $5.333$ or $\\frac{16}{3}$: divides $8$ by $\\frac{3}{2}$, shrinking instead of enlarging.\n* $27$: scales $18$, the side $\\overline{HF}$, which corresponds to $\\overline{TR}$, not $\\overline{RS}$.\n\n**Test Day Takeaway:** Use the vertex order to pair sides before you set up the ratio; the side you scale must be the partner of the side you want.",
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
    question: "In triangle $PQR$, point $M$ lies on $\\overline{PQ}$ and point $N$ lies on $\\overline{PR}$ such that $\\overline{MN}$ is parallel to $\\overline{QR}$. If $PM = 6$, $MQ = 9$, and $QR = 20$, what is the length of $\\overline{MN}$?",
    choices: [
      { id: "A", text: "$8$" },
      // distractor: uses MQ instead of PM as the matching side: 20(9/15) = 12
      { id: "B", text: "$12$" },
      // distractor: compares PM to MQ instead of to the whole side PQ: 20(6/9)
      { id: "C", text: "$\\frac{40}{3}$" },
      // distractor: inverts the ratio of the two pieces: 20(9/6) = 30
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Triangle $PMN$ is similar to triangle $PQR$ with scale factor $\\frac{PM}{PQ} = \\frac{6}{15} = \\frac{2}{5}$, so $MN = \\frac{2}{5}(20) = 8$.\n\n**The Full Solution:**\nStep 1: Since $\\overline{MN} \\parallel \\overline{QR}$, angle $PMN$ = angle $PQR$ and angle $PNM$ = angle $PRQ$, so triangle $PMN$ is similar to triangle $PQR$.\nStep 2: The matching sides are $PM$ and $PQ$, where $PQ = PM + MQ = 6 + 9 = 15$. The scale factor is $\\frac{6}{15} = \\frac{2}{5}$.\nStep 3: So $MN = \\frac{2}{5}(QR) = \\frac{2}{5}(20) = 8$. Check: $\\frac{MN}{QR} = \\frac{8}{20} = \\frac{2}{5} = \\frac{PM}{PQ}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): $12$ uses $\\frac{MQ}{PQ} = \\frac{9}{15}$; $MQ$ is not a side of the small triangle.\n* Choice C ($\\frac{40}{3}$): $\\frac{40}{3}$ uses $\\frac{PM}{MQ} = \\frac{6}{9}$. The small triangle's side must be compared with the whole side $PQ$, not with the leftover piece.\n* Choice D ($30$): $30$ uses $\\frac{9}{6}$, which is larger than $1$ and would make $MN$ longer than $QR$.\n\n**Test Day Takeaway:** With a segment parallel to one side, compare the small triangle to the WHOLE triangle: piece over whole side, never piece over piece.",
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
    question: "Triangle $ABC$ is similar to triangle $DEF$, where $A$ and $B$ correspond to $D$ and $E$, respectively. The perimeters of triangles $ABC$ and $DEF$ are $36$ and $60$, respectively, and $AB = 9$. What is the length of $\\overline{DE}$?",
    choices: [
      // distractor: inverts the scale factor: 9(36/60) = 5.4
      { id: "A", text: "$5.4$" },
      { id: "B", text: "$15$" },
      // distractor: multiplies by the square of the perimeter ratio, (5/3)^2
      { id: "C", text: "$25$" },
      // distractor: adds the perimeter difference 60 - 36 = 24 to AB
      { id: "D", text: "$33$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The ratio of perimeters is the scale factor: $\\frac{60}{36} = \\frac{5}{3}$, so $DE = \\frac{5}{3}(9) = 15$.\n\n**The Full Solution:**\nStep 1: For similar triangles, the ratio of the perimeters equals the ratio of corresponding sides, so the scale factor from triangle $ABC$ to triangle $DEF$ is $\\frac{60}{36} = \\frac{5}{3}$.\nStep 2: Side $\\overline{DE}$ corresponds to side $\\overline{AB}$.\nStep 3: So $DE = \\frac{5}{3}(9) = 15$. Check: $\\frac{DE}{AB} = \\frac{15}{9} = \\frac{5}{3} = \\frac{60}{36}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5.4$): $5.4$ multiplies by $\\frac{36}{60}$, the factor from the larger triangle to the smaller one.\n* Choice C ($25$): $25$ uses $\\left(\\frac{5}{3}\\right)^{2}$, the factor for areas, not lengths.\n* Choice D ($33$): $33$ adds $24$ to $9$; the whole perimeter grows by $24$, but each side grows in proportion to its length.\n\n**Test Day Takeaway:** Perimeters are lengths: their ratio is the same scale factor that relates every pair of corresponding sides.",
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
    question: "Triangles $ABC$ and $DEF$ shown are similar, with $\\overline{AB}$ corresponding to $\\overline{DE}$ and $\\overline{BC}$ corresponding to $\\overline{EF}$. What is the value of $x$?",
    diagram: { type: "similarTriangles", params: { triangle1: { vertices: [[-0.4, 5.987], [0, 0], [10, 0]], labels: ["A", "B", "C"], sideLabels: ["6", "10", ""] }, triangle2: { vertices: [[-0.8, 11.973], [0, 0], [20, 0]], labels: ["D", "E", "F"], sideLabels: ["x", "x + 8", ""] }, figureNote: true } },
    choices: [
      // distractor: distributes 6(x + 8) as 6x + 8, giving 4x = 8
      { id: "A", text: "$2$" },
      // distractor: sets x equal to the difference BC - AB = 4
      { id: "B", text: "$4$" },
      { id: "C", text: "$12$" },
      // distractor: reports EF = x + 8 instead of x
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** $EF - DE = 8$ corresponds to $BC - AB = 4$, so the scale factor is $2$ and $x = DE = 2(6) = 12$.\n\n**The Full Solution:**\nStep 1: Corresponding sides are proportional: $\\frac{DE}{AB} = \\frac{EF}{BC}$, so $\\frac{x}{6} = \\frac{x + 8}{10}$.\nStep 2: Cross multiply: $10x = 6(x + 8) = 6x + 48$, so $4x = 48$.\nStep 3: So $x = 12$. Check: $DE = 12$ and $EF = 20$, and $\\frac{12}{6} = \\frac{20}{10} = 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): $2$ comes from writing $6(x + 8)$ as $6x + 8$; the $6$ multiplies both terms.\n* Choice B ($4$): $4$ is $BC - AB$. Differences of corresponding sides scale too, so they are not equal across the two triangles.\n* Choice D ($20$): $20$ is the length of $\\overline{EF}$, not the value of $x$.\n\n**Test Day Takeaway:** Write one proportion with the variable in both sides, cross multiply with full distribution, and answer for the variable asked.",
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
    question: "The side lengths of triangle $ABC$ are $8$, $10$, and $14$. Triangle $DEF$ is similar to triangle $ABC$, and the longest side of triangle $DEF$ is $9$ greater than its shortest side. What is the perimeter of triangle $DEF$?",
    correctAnswer: "48",
    explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**The correct answer is 48.**\n\n**The Fast Way (~45s):** With scale factor $k$, the longest and shortest sides of triangle $DEF$ differ by $14k - 8k = 6k = 9$, so $k = \\frac{3}{2}$ and the perimeter is $\\frac{3}{2}(32) = 48$.\n\n**The Full Solution:**\nStep 1: Let $k$ be the scale factor from triangle $ABC$ to triangle $DEF$. The sides of triangle $DEF$ are $8k$, $10k$, and $14k$.\nStep 2: The longest side is $9$ greater than the shortest: $14k - 8k = 9$, so $6k = 9$ and $k = \\frac{3}{2}$.\nStep 3: The perimeter of triangle $DEF$ is $k(8 + 10 + 14) = \\frac{3}{2}(32) = 48$. Check: the sides are $12$, $15$, and $21$; $21 - 12 = 9$ and $12 + 15 + 21 = 48$ ✓\n\n**Common Mistakes:**\n* $41$: adds $9$ to the perimeter of triangle $ABC$, $32 + 9 = 41$.\n* $21$: finds the scale factor correctly but reports the longest side, $14\\left(\\frac{3}{2}\\right)$.\n* $59$: assumes every side of triangle $DEF$ is $9$ longer than the matching side of triangle $ABC$, $32 + 27$.\n\n**Test Day Takeaway:** Write every side of the similar triangle as $k$ times the original, turn the stated condition into one equation in $k$, and scale the perimeter by $k$.",
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
    question: "Point $O$ is the center of the circle shown. What is the length of arc $AB$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 90, angleLabel: "90°", radius: 10, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: uses pi r instead of 2 pi r for the circumference: (90/360)(10 pi)
      { id: "A", text: "$\\frac{5\\pi}{2}$" },
      { id: "B", text: "$5\\pi$" },
      // distractor: gives the circumference of the whole circle, 2 pi (10)
      { id: "C", text: "$20\\pi$" },
      // distractor: gives the area of the sector, (90/360) pi (10)^2
      { id: "D", text: "$25\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** A $90^{\\circ}$ arc is $\\frac{1}{4}$ of the circle: $\\frac{1}{4}(2\\pi \\cdot 10) = 5\\pi$.\n\n**The Full Solution:**\nStep 1: The circumference of the circle is $2\\pi r = 2\\pi(10) = 20\\pi$.\nStep 2: The central angle is $90^{\\circ}$, which is $\\frac{90}{360} = \\frac{1}{4}$ of the full $360^{\\circ}$.\nStep 3: So arc $AB$ has length $\\frac{1}{4}(20\\pi) = 5\\pi$. Check: four such arcs make $4(5\\pi) = 20\\pi$, the whole circumference ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5\\pi}{2}$): $\\frac{5\\pi}{2}$ takes the fraction of $\\pi r = 10\\pi$ instead of $2\\pi r$.\n* Choice C ($20\\pi$): $20\\pi$ is the full circumference; the arc is only the part cut off by the $90^{\\circ}$ angle.\n* Choice D ($25\\pi$): $25\\pi$ is the area of the sector, $\\frac{1}{4}\\pi(10)^{2}$, not a length.\n\n**Test Day Takeaway:** Arc length = (central angle / 360) × $2\\pi r$.",
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
    question: "Points $A$ and $B$ lie on the circle shown with center $O$. If the diameter of the circle is $32$, what is the length of minor arc $AB$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 45, angleLabel: "45°", labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
    choices: [
      // distractor: uses pi r instead of 2 pi r: (45/360)(16 pi)
      { id: "A", text: "$2\\pi$" },
      { id: "B", text: "$4\\pi$" },
      // distractor: uses the diameter 32 as the radius: (45/360)(64 pi)
      { id: "C", text: "$8\\pi$" },
      // distractor: gives the circumference of the whole circle, 32 pi
      { id: "D", text: "$32\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The circumference is $32\\pi$, and $45^{\\circ}$ is $\\frac{1}{8}$ of the circle, so the arc is $\\frac{32\\pi}{8} = 4\\pi$.\n\n**The Full Solution:**\nStep 1: The diameter is $32$, so the circumference is $\\pi d = 32\\pi$.\nStep 2: The central angle is $45^{\\circ}$, which is $\\frac{45}{360} = \\frac{1}{8}$ of the circle.\nStep 3: Minor arc $AB$ has length $\\frac{1}{8}(32\\pi) = 4\\pi$. Check with the radius $16$: $\\frac{45}{360} \\cdot 2\\pi(16) = 4\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2\\pi$): $2\\pi$ takes $\\frac{1}{8}$ of $\\pi r = 16\\pi$, half the circumference.\n* Choice C ($8\\pi$): $8\\pi$ treats $32$ as the radius, doubling the circumference.\n* Choice D ($32\\pi$): $32\\pi$ is the whole circumference, not the $45^{\\circ}$ part of it.\n\n**Test Day Takeaway:** Check whether the number given is a radius or a diameter before you find the circumference, then take the angle's fraction of it.",
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
    question: "A circle has center $O$ and radius $12$. Points $A$ and $B$ lie on the circle, and minor arc $AB$ has length $7\\pi$. What is the measure, in degrees, of angle $AOB$?",
    correctAnswer: "105",
    explanation: "**SAT Pattern: Arc Length**\n\n**The correct answer is 105.**\n\n**The Fast Way (~25s):** The circumference is $2\\pi(12) = 24\\pi$, so the arc is $\\frac{7\\pi}{24\\pi} = \\frac{7}{24}$ of the circle, and $\\frac{7}{24}(360) = 105$.\n\n**The Full Solution:**\nStep 1: The circumference of the circle is $2\\pi r = 2\\pi(12) = 24\\pi$.\nStep 2: Minor arc $AB$ is $\\frac{7\\pi}{24\\pi} = \\frac{7}{24}$ of the whole circle.\nStep 3: Angle $AOB$ is the same fraction of $360^{\\circ}$: $\\frac{7}{24}(360) = 105^{\\circ}$. Check: $\\frac{105}{360} \\cdot 24\\pi = 7\\pi$ ✓\n\n**Common Mistakes:**\n* $210$: uses $\\pi r = 12\\pi$ as the whole circumference, getting $\\frac{7}{12}(360)$.\n* $52.5$: takes the fraction of $180^{\\circ}$ instead of $360^{\\circ}$.\n* $17.5$: divides the arc by the area $144\\pi$ instead of by the circumference.\n\n**Test Day Takeaway:** Arc length over circumference equals central angle over $360^{\\circ}$; set up that one proportion and solve.",
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
    question: "In the circle shown, $O$ is the center and chord $\\overline{AB}$ has length $15$. What is the length of minor arc $AB$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 60, angleLabel: "60°", labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
    choices: [
      // distractor: takes the radius to be half the chord, 7.5
      { id: "A", text: "$\\frac{5\\pi}{2}$" },
      { id: "B", text: "$5\\pi$" },
      // distractor: divides the central angle by 180 instead of 360
      { id: "C", text: "$10\\pi$" },
      // distractor: gives the area of the sector, (60/360) pi (15)^2
      { id: "D", text: "$\\frac{75\\pi}{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $OA = OB$ and the angle between them is $60^{\\circ}$, so triangle $AOB$ is equilateral and the radius is $15$; the arc is $\\frac{60}{360}(2\\pi \\cdot 15) = 5\\pi$.\n\n**The Full Solution:**\nStep 1: $\\overline{OA}$ and $\\overline{OB}$ are radii, so triangle $AOB$ is isosceles. Its base angles are each $\\frac{180 - 60}{2} = 60^{\\circ}$, so the triangle is equilateral.\nStep 2: Therefore the radius equals the chord: $r = AB = 15$, and the circumference is $2\\pi(15) = 30\\pi$.\nStep 3: The arc is $\\frac{60}{360} = \\frac{1}{6}$ of the circle: $\\frac{1}{6}(30\\pi) = 5\\pi$. Check: six $60^{\\circ}$ arcs give $6(5\\pi) = 30\\pi$, the whole circumference ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5\\pi}{2}$): $\\frac{5\\pi}{2}$ treats the chord as a diameter, so the radius becomes $7.5$; a $60^{\\circ}$ chord equals the radius, not the diameter.\n* Choice C ($10\\pi$): $10\\pi$ uses $\\frac{60}{180}$; a full turn is $360^{\\circ}$.\n* Choice D ($\\frac{75\\pi}{2}$): $\\frac{75\\pi}{2}$ is the sector area, $\\frac{1}{6}\\pi(15)^{2}$, not the arc length.\n\n**Test Day Takeaway:** A $60^{\\circ}$ central angle makes an equilateral triangle with its chord, so the chord IS the radius.",
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
    question: "A triangle has a base of length $14$ centimeters and a height of $9$ centimeters. What is the area, in square centimeters, of the triangle?",
    choices: [
      // distractor: adds the base and the height instead of multiplying them
      { id: "A", text: "$23$" },
      // distractor: halves the product twice, dividing 126 by 4
      { id: "B", text: "$31.5$" },
      { id: "C", text: "$63$" },
      // distractor: multiplies base and height but forgets the factor of 1/2
      { id: "D", text: "$126$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Area $= \\frac{1}{2}bh = \\frac{1}{2}(14)(9) = 63$.\n\n**The Full Solution:**\nStep 1: The area of a triangle is $\\frac{1}{2}bh$, where $b$ is the base and $h$ is the height.\nStep 2: Substitute $b = 14$ and $h = 9$: $\\frac{1}{2}(14)(9)$.\nStep 3: Compute: $\\frac{1}{2}(126) = 63$ square centimeters. Check: the triangle is half of a $14$ by $9$ rectangle with area $126$, and $\\frac{126}{2} = 63$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): adds the base and the height instead of multiplying them.\n* Choice B ($31.5$): divides the product by $4$, applying the $\\frac{1}{2}$ twice.\n* Choice D ($126$): is base times height, the area of the rectangle; the triangle covers only half of it.\n\n**Test Day Takeaway:** Triangle area is half of base times height; multiply first, then halve once.",
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
    question: "What is the area, in square units, of the right triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [18, 0], [18, 13]], sideLabels: ["18", "13", ""], rightAngleVertex: 1 } },
    correctAnswer: "117",
    explanation: "**SAT Pattern: Triangle Area**\n\n**The correct answer is 117.**\n\n**The Fast Way (~10s):** The legs are perpendicular, so one is the base and the other the height: $\\frac{1}{2}(18)(13) = 117$.\n\n**The Full Solution:**\nStep 1: In a right triangle the two legs meet at the right angle, so one leg is the base and the other is the height.\nStep 2: The legs are $18$ and $13$.\nStep 3: Area $= \\frac{1}{2}(18)(13) = 117$ square units. Check: two copies of the triangle form an $18$ by $13$ rectangle with area $234 = 2(117)$ ✓\n\n**Common Mistakes:**\n* $234$: forgets the factor $\\frac{1}{2}$ and gives the area of the rectangle.\n* $31$: adds the two legs instead of multiplying.\n* $58.5$: halves twice, dividing the product by $4$.\n\n**Test Day Takeaway:** For a right triangle, the legs are the base and the height; area is half their product.",
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
    question: "In triangle $ABC$, $AB = AC = 17$ and $BC = 16$. What is the area of triangle $ABC$?",
    choices: [
      { id: "A", text: "$120$" },
      // distractor: uses the slanted side 17 as the height: (1/2)(16)(17)
      { id: "B", text: "$136$" },
      // distractor: finds the height 15 but forgets the factor of 1/2
      { id: "C", text: "$240$" },
      // distractor: multiplies the side lengths 16 and 17 with no height and no factor of 1/2
      { id: "D", text: "$272$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The height from $A$ bisects $\\overline{BC}$, so it is $\\sqrt{17^{2} - 8^{2}} = 15$, and the area is $\\frac{1}{2}(16)(15) = 120$.\n\n**The Full Solution:**\nStep 1: Since $AB = AC$, the height from $A$ to $\\overline{BC}$ meets $\\overline{BC}$ at its midpoint, splitting it into two segments of length $8$.\nStep 2: Each half is a right triangle with hypotenuse $17$ and leg $8$, so the height is $\\sqrt{17^{2} - 8^{2}} = \\sqrt{289 - 64} = \\sqrt{225} = 15$.\nStep 3: Area $= \\frac{1}{2}(16)(15) = 120$. Check: $8^{2} + 15^{2} = 64 + 225 = 289 = 17^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($136$): uses the side $17$ as the height. A height must be perpendicular to the base, and $\\overline{AB}$ is not.\n* Choice C ($240$): finds the height $15$ correctly but leaves out the $\\frac{1}{2}$.\n* Choice D ($272$): multiplies $16$ and $17$ directly, with no height and no $\\frac{1}{2}$.\n\n**Test Day Takeaway:** In an isosceles triangle, the height to the base bisects the base; use the Pythagorean theorem to find it before applying $\\frac{1}{2}bh$.",
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
    question: "In the triangle shown, $AB = 14$. What is the area of the triangle?",
    diagram: { type: "triangleWithAngles", params: { vertexLabels: ["A", "B", "C"], angleLabels: ["60°", "60°", ""], figureNote: true } },
    choices: [
      // distractor: uses half of AB, 7, as the height: (1/2)(14)(7)
      { id: "A", text: "$49$" },
      { id: "B", text: "$49\\sqrt{3}$" },
      // distractor: uses AB itself as the height: (1/2)(14)(14)
      { id: "C", text: "$98$" },
      // distractor: finds the height 7 sqrt 3 but forgets the factor of 1/2
      { id: "D", text: "$98\\sqrt{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Two $60^{\\circ}$ angles force the third to be $60^{\\circ}$, so the triangle is equilateral with side $14$ and height $7\\sqrt{3}$; area $= \\frac{1}{2}(14)(7\\sqrt{3}) = 49\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The third angle is $180 - 60 - 60 = 60^{\\circ}$, so all angles are equal and the triangle is equilateral with every side $14$.\nStep 2: The height from $C$ to $\\overline{AB}$ splits the triangle into two $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangles with short leg $7$ and hypotenuse $14$, so the height is $7\\sqrt{3}$.\nStep 3: Area $= \\frac{1}{2}(14)(7\\sqrt{3}) = 49\\sqrt{3}$. Check with the equilateral formula: $\\frac{\\sqrt{3}}{4}(14)^{2} = \\frac{196\\sqrt{3}}{4} = 49\\sqrt{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($49$): $49$ uses $7$, the half-base, as the height.\n* Choice C ($98$): $98$ uses the side $14$ as the height; the height of an equilateral triangle is shorter than its side.\n* Choice D ($98\\sqrt{3}$): $98\\sqrt{3}$ is base × height without the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Two $60^{\\circ}$ angles mean equilateral; its height is $\\frac{\\sqrt{3}}{2}$ times the side.",
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
    question: "In triangle $JKL$ shown, $JL = 16$. What is the area of triangle $JKL$?",
    diagram: { type: "triangleWithAngles", params: { vertexLabels: ["J", "K", "L"], angleLabels: ["x°", "3x°", "2x°"], figureNote: true } },
    choices: [
      // distractor: uses 8 for both legs, dropping the sqrt 3 from the longer leg
      { id: "A", text: "$32$" },
      { id: "B", text: "$32\\sqrt{3}$" },
      // distractor: finds legs 8 and 8 sqrt 3 but forgets the factor of 1/2
      { id: "C", text: "$64\\sqrt{3}$" },
      // distractor: treats JL as the shorter leg instead of the hypotenuse, so the legs are 16 and 16 sqrt 3
      { id: "D", text: "$128\\sqrt{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** $x + 3x + 2x = 180$ gives $x = 30$, so angle $K$ is $90^{\\circ}$ and $JL$ is the hypotenuse; the legs are $8$ and $8\\sqrt{3}$, and the area is $32\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The angles add to $180$: $x + 3x + 2x = 6x = 180$, so $x = 30$. The angles are $J = 30^{\\circ}$, $K = 90^{\\circ}$, and $L = 60^{\\circ}$.\nStep 2: $\\overline{JL}$ is opposite the right angle at $K$, so it is the hypotenuse. In a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle with hypotenuse $16$, the leg opposite $30^{\\circ}$ is $8$ and the leg opposite $60^{\\circ}$ is $8\\sqrt{3}$.\nStep 3: The legs are perpendicular, so the area is $\\frac{1}{2}(8)(8\\sqrt{3}) = 32\\sqrt{3}$. Check: $8^{2} + (8\\sqrt{3})^{2} = 64 + 192 = 256 = 16^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): $32$ uses $8$ for both legs; the longer leg is $8\\sqrt{3}$.\n* Choice C ($64\\sqrt{3}$): $64\\sqrt{3}$ multiplies the legs without the $\\frac{1}{2}$.\n* Choice D ($128\\sqrt{3}$): $128\\sqrt{3}$ treats $16$ as the short leg. Side $\\overline{JL}$ is opposite the $90^{\\circ}$ angle, so it is the hypotenuse.\n\n**Test Day Takeaway:** Solve for the angles first; once you know where the right angle is, you know which side is the hypotenuse and which sides are the legs.",
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
    question: "A circle has a radius of $13$. What is the circumference of the circle?",
    choices: [
      // distractor: uses pi r instead of 2 pi r
      { id: "A", text: "$13\\pi$" },
      { id: "B", text: "$26\\pi$" },
      // distractor: gives the area, pi r^2
      { id: "C", text: "$169\\pi$" },
      // distractor: multiplies the area by 2: 2 pi r^2
      { id: "D", text: "$338\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $C = 2\\pi r = 2\\pi(13) = 26\\pi$.\n\n**The Full Solution:**\nStep 1: The circumference of a circle with radius $r$ is $2\\pi r$.\nStep 2: Substitute $r = 13$: $2\\pi(13)$.\nStep 3: So the circumference is $26\\pi$. Check: the diameter is $26$, and $\\pi d = 26\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13\\pi$): $13\\pi$ is $\\pi r$, half the circumference.\n* Choice C ($169\\pi$): $169\\pi$ is $\\pi r^{2}$, the area.\n* Choice D ($338\\pi$): $338\\pi$ mixes the two formulas: $2\\pi r^{2}$.\n\n**Test Day Takeaway:** Circumference $= 2\\pi r = \\pi d$; area $= \\pi r^{2}$. Squared radius means area.",
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
    question: "A circle has a circumference of $34\\pi$ centimeters. What is the radius, in centimeters, of the circle?",
    correctAnswer: "17",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**The correct answer is 17.**\n\n**The Fast Way (~10s):** $2\\pi r = 34\\pi$, so $r = 17$.\n\n**The Full Solution:**\nStep 1: The circumference is $2\\pi r$, so $2\\pi r = 34\\pi$.\nStep 2: Divide both sides by $2\\pi$: $r = \\frac{34\\pi}{2\\pi} = 17$.\nStep 3: The radius is $17$ centimeters. Check: $2\\pi(17) = 34\\pi$ ✓\n\n**Common Mistakes:**\n* $34$: gives the diameter, from $\\pi d = 34\\pi$.\n* $68$: multiplies by $2$ instead of dividing.\n* $\\sqrt{34}$: solves $\\pi r^{2} = 34\\pi$, using the area formula.\n\n**Test Day Takeaway:** Circumference $= \\pi d$; divide the diameter by $2$ to get the radius.",
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
    question: "A circle has an area of $64\\pi$ square inches. What is the circumference, in inches, of the circle?",
    choices: [
      // distractor: finds r = 8 but uses pi r instead of 2 pi r
      { id: "A", text: "$8\\pi$" },
      { id: "B", text: "$16\\pi$" },
      // distractor: reports the area value 64 pi as the circumference
      { id: "C", text: "$64\\pi$" },
      // distractor: uses 64 as the radius: 2 pi (64)
      { id: "D", text: "$128\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\pi r^{2} = 64\\pi$ gives $r = 8$, so the circumference is $2\\pi(8) = 16\\pi$.\n\n**The Full Solution:**\nStep 1: The area of a circle is $\\pi r^{2}$, so $\\pi r^{2} = 64\\pi$ and $r^{2} = 64$.\nStep 2: Take the positive square root: $r = 8$ inches.\nStep 3: The circumference is $2\\pi r = 2\\pi(8) = 16\\pi$ inches. Check: $\\pi(8)^{2} = 64\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8\\pi$): finds $r = 8$ but uses $\\pi r$, which is half the circumference.\n* Choice C ($64\\pi$): repeats the area; area and circumference are different measures.\n* Choice D ($128\\pi$): uses $64$ as the radius, skipping the square root.\n\n**Test Day Takeaway:** From an area, take $r = \\sqrt{A/\\pi}$ first; only then apply $2\\pi r$.",
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
    question: "$x^{2} - 10x + y^{2} + 6y = 2$\nThe graph of the given equation in the $xy$-plane is a circle. What is the circumference of the circle?",
    choices: [
      // distractor: reads 2 as r^2 without completing the square: r = sqrt 2
      { id: "A", text: "$2\\sqrt{2}\\pi$" },
      // distractor: finds r = 6 but uses pi r instead of 2 pi r
      { id: "B", text: "$6\\pi$" },
      { id: "C", text: "$12\\pi$" },
      // distractor: gives the area, pi r^2 = 36 pi
      { id: "D", text: "$36\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Completing the square gives $(x - 5)^{2} + (y + 3)^{2} = 36$, so $r = 6$ and the circumference is $12\\pi$.\n\n**The Full Solution:**\nStep 1: Complete the square in each variable: $x^{2} - 10x + 25 + y^{2} + 6y + 9 = 2 + 25 + 9$.\nStep 2: So $(x - 5)^{2} + (y + 3)^{2} = 36$, a circle with center $(5, -3)$ and radius $\\sqrt{36} = 6$.\nStep 3: The circumference is $2\\pi(6) = 12\\pi$. Check: $(x - 5)^{2} + (y + 3)^{2}$ expands to $x^{2} - 10x + y^{2} + 6y + 34$, and $34 + 2 = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2\\sqrt{2}\\pi$): uses $r^{2} = 2$, the constant before completing the square; the $25$ and $9$ added to the left must be added to the right as well.\n* Choice B ($6\\pi$): is $\\pi r$, half the circumference.\n* Choice D ($36\\pi$): is $\\pi r^{2}$, the area.\n\n**Test Day Takeaway:** Complete both squares and add the same amounts to the right side; only then is the constant $r^{2}$.",
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
    question: "Circle $A$ has a circumference of $36\\pi$ centimeters. The radius of circle $B$ is $5$ centimeters greater than the radius of circle $A$. The circumference of circle $B$ is $k\\pi$ centimeters. What is the value of $k$?",
    correctAnswer: "46",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**The correct answer is 46.**\n\n**The Fast Way (~25s):** Circle $A$ has radius $\\frac{36\\pi}{2\\pi} = 18$, so circle $B$ has radius $23$ and circumference $2\\pi(23) = 46\\pi$.\n\n**The Full Solution:**\nStep 1: Solve $2\\pi r = 36\\pi$ for the radius of circle $A$: $r = 18$.\nStep 2: The radius of circle $B$ is $18 + 5 = 23$.\nStep 3: The circumference of circle $B$ is $2\\pi(23) = 46\\pi$, so $k = 46$. Check: adding $5$ to the radius adds $2\\pi(5) = 10\\pi$ to the circumference, and $36\\pi + 10\\pi = 46\\pi$ ✓\n\n**Common Mistakes:**\n* $41$: adds $5$ to the circumference coefficient instead of to the radius.\n* $23$: reports the radius of circle $B$, or uses $\\pi r$ for its circumference.\n* $82$: treats $36$ as the radius of circle $A$, getting $2(36 + 5)$.\n\n**Test Day Takeaway:** A change to the radius changes the circumference by $2\\pi$ times that amount; find the radius first, then apply $2\\pi r$.",
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
      // distractor: reports the circumference of circle B, 2 pi (18) = 36 pi, instead of its area
      { id: "A", text: "$36\\pi$" },
      // distractor: finds the area of circle A, pi (13)^2, and never adds the 5 centimeters
      { id: "B", text: "$169\\pi$" },
      { id: "C", text: "$324\\pi$" },
      // distractor: treats 26 as the radius of circle A, so circle B has radius 31 and area 961 pi
      { id: "D", text: "$961\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $2\\pi r = 26\\pi$ gives $r = 13$ for circle $A$, so circle $B$ has radius $18$ and area $\\pi(18)^{2} = 324\\pi$.\n\n**The Full Solution:**\nStep 1: Use the circumference of circle $A$: $2\\pi r_A = 26\\pi$, so $r_A = 13$ centimeters.\nStep 2: Add $5$ centimeters: the radius of circle $B$ is $r_B = 13 + 5 = 18$ centimeters.\nStep 3: Apply the area formula: $\\pi r_B^{2} = \\pi(18)^{2} = 324\\pi$ square centimeters. Check: circle $B$ has circumference $2\\pi(18) = 36\\pi$, which is $10\\pi$ more than circle $A$'s, matching a radius $5$ greater ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($36\\pi$): this is the circumference of circle $B$, a length rather than an area.\n* Choice B ($169\\pi$): this is the area of circle $A$; the extra $5$ centimeters were never added.\n* Choice D ($961\\pi$): treats $26$ as the radius of circle $A$, giving $r_B = 31$ and $\\pi(31)^{2} = 961\\pi$.\n\n**Test Day Takeaway:** The coefficient of $\\pi$ in a circumference is the diameter, not the radius. Divide by $2\\pi$ before you change or square anything.",
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
    question: "The radius of a circle is $r$ centimeters. When the radius is increased by $k$ centimeters, the circumference increases by $12\\pi$ centimeters and the area increases by $156\\pi$ square centimeters. What is the value of $r$?",
    choices: [
      // distractor: reports k, the increase in the radius, instead of r
      { id: "A", text: "$6$" },
      { id: "B", text: "$10$" },
      // distractor: expands (r + 6)^2 as r^2 + 12r, dropping the 36, and solves 12r = 156
      { id: "C", text: "$13$" },
      // distractor: reports the enlarged radius r + k = 16 instead of the original radius
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circumference of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** The circumference grows by $2\\pi k = 12\\pi$, so $k = 6$; then $\\pi(r + 6)^{2} - \\pi r^{2} = 156\\pi$ gives $12r + 36 = 156$, so $r = 10$.\n\n**The Full Solution:**\nStep 1: The circumference grows by $2\\pi(r + k) - 2\\pi r = 2\\pi k$. Setting $2\\pi k = 12\\pi$ gives $k = 6$.\nStep 2: The area grows by $\\pi(r + 6)^{2} - \\pi r^{2} = \\pi(12r + 36)$. Setting this equal to $156\\pi$ gives $12r + 36 = 156$.\nStep 3: Solve: $12r = 120$, so $r = 10$. Check: a radius of $10$ grows to $16$, and $\\pi(16^{2} - 10^{2}) = \\pi(256 - 100) = 156\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): this is $k$, the amount the radius increased, not the original radius.\n* Choice C ($13$): expands $(r + 6)^{2}$ as $r^{2} + 12r$ and drops the $36$, solving $12r = 156$.\n* Choice D ($16$): this is the enlarged radius $r + k$; the question asks for $r$.\n\n**Test Day Takeaway:** A change in circumference depends only on the change in radius, so use it first to find $k$; the area equation then has a single unknown.",
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
    skills: ["arc-length"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the circle shown, $C$ is the center. What is the length, in centimeters, of minor arc $MN$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 40, angleLabel: "40°", radius: "9 cm", showRadiusLabel: true, labelCenter: "C", labelPoint1: "M", labelPoint2: "N" } },
    choices: [
      // distractor: uses pi r instead of 2 pi r for the circumference: (40/360)(9 pi) = pi
      { id: "A", text: "$\\pi$" },
      { id: "B", text: "$2\\pi$" },
      // distractor: computes the sector area (40/360)(81 pi) = 9 pi instead of the arc length
      { id: "C", text: "$9\\pi$" },
      // distractor: gives the circumference of the whole circle, ignoring the 40-degree angle
      { id: "D", text: "$18\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The arc is $\\frac{40}{360} = \\frac{1}{9}$ of a circumference of $2\\pi(9) = 18\\pi$, so its length is $2\\pi$.\n\n**The Full Solution:**\nStep 1: Read the figure: the radius is $9$ centimeters and the central angle $MCN$ is $40^{\\circ}$.\nStep 2: Find the circumference of the circle: $2\\pi(9) = 18\\pi$ centimeters.\nStep 3: Take the arc's share: $\\frac{40}{360}(18\\pi) = 2\\pi$ centimeters. Check: nine such arcs go around the circle, and $9(2\\pi) = 18\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\pi$): uses $\\pi r$ for the circumference instead of $2\\pi r$.\n* Choice C ($9\\pi$): this is the area of the sector, $\\frac{40}{360}\\pi(9)^{2}$, not a length.\n* Choice D ($18\\pi$): this is the circumference of the entire circle, ignoring the $40^{\\circ}$ angle.\n\n**Test Day Takeaway:** Arc length is the circumference times $\\frac{\\text{central angle}}{360^{\\circ}}$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sector-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-244",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the circle shown with center $O$, the length of minor arc $AB$ is $10\\pi$ inches. What is the value of $x$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 150, angleLabel: "x°", radius: "12 in", showRadiusLabel: true, labelCenter: "O", labelPoint1: "A", labelPoint2: "B" } },
    correctAnswer: "150",
    explanation: "**SAT Pattern: Arc Length**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~30s):** The circumference is $2\\pi(12) = 24\\pi$, and the arc is $\\frac{10\\pi}{24\\pi} = \\frac{5}{12}$ of it, so $x = \\frac{5}{12}(360) = 150$.\n\n**The Full Solution:**\nStep 1: Read the figure: the radius is $12$ inches, so the circumference is $2\\pi(12) = 24\\pi$ inches.\nStep 2: The arc's share of the circle is $\\frac{10\\pi}{24\\pi} = \\frac{5}{12}$.\nStep 3: The central angle is the same share of $360^{\\circ}$: $x = \\frac{5}{12}(360) = 150$. Check: $\\frac{150}{360}(24\\pi) = 10\\pi$ ✓\n\n**Common Mistakes:**\n* $300$: uses $\\pi r = 12\\pi$ as the circumference, so the share looks like $\\frac{10}{12}$.\n* $75$: finds the share $\\frac{5}{12}$ but multiplies by $180$ instead of $360$.\n* $210$: gives the angle of the major arc, $360 - 150$.\n\n**Test Day Takeaway:** An arc and its central angle are the same fraction of the whole: arc over circumference equals angle over $360^{\\circ}$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "sector-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-18"
  },

  {
    id: "bank-geo-245",
    domain: "geometry",
    skills: ["arc-length"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the circle shown with center $O$, the area of the circle is $144\\pi$ and the length of minor arc $AB$ is $4\\pi$. What is the value of $\\theta$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 60, angleLabel: "θ°", labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
    choices: [
      // distractor: treats 144 pi as the circumference, so the arc's share is 4/144 and theta = 10
      { id: "A", text: "$10$" },
      // distractor: finds the correct share 1/6 but multiplies by 180 instead of 360
      { id: "B", text: "$30$" },
      { id: "C", text: "$60$" },
      // distractor: finds the angle of the major arc, 360 - 60 = 300, instead of the minor arc
      { id: "D", text: "$300$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** $\\pi r^{2} = 144\\pi$ gives $r = 12$, so the circumference is $24\\pi$; the arc is $\\frac{4\\pi}{24\\pi} = \\frac{1}{6}$ of it, and $\\frac{1}{6}(360) = 60$.\n\n**The Full Solution:**\nStep 1: Find the radius from the area: $\\pi r^{2} = 144\\pi$, so $r^{2} = 144$ and $r = 12$.\nStep 2: Find the circumference: $2\\pi(12) = 24\\pi$. The arc's share of the circle is $\\frac{4\\pi}{24\\pi} = \\frac{1}{6}$.\nStep 3: The central angle has the same share of $360^{\\circ}$: $\\theta = \\frac{1}{6}(360) = 60$. Check: $\\frac{60}{360}(24\\pi) = 4\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): divides the arc length by the area, $\\frac{4\\pi}{144\\pi}$, as if $144\\pi$ were the circumference.\n* Choice B ($30$): finds the share $\\frac{1}{6}$ correctly but multiplies by $180$ instead of $360$.\n* Choice D ($300$): this is the angle of the major arc, $360 - 60$.\n\n**Test Day Takeaway:** Arc length is a fraction of the circumference, not of the area; get the radius first, then compare the arc to $2\\pi r$.",
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
    question: "In the circle shown with center $O$, what is the measure of angle $AOB$, in radians?",
    diagram: { type: "circleWithSector", params: { centralAngle: 135, angleLabel: "135°", showAngleLabel: true, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
    choices: [
      // distractor: divides 135 by 360 instead of 180, getting 3/8 of pi
      { id: "A", text: "$\\frac{3\\pi}{8}$" },
      { id: "B", text: "$\\frac{3\\pi}{4}$" },
      // distractor: flips the conversion factor, multiplying by 180/135 instead of 135/180
      { id: "C", text: "$\\frac{4\\pi}{3}$" },
      // distractor: divides 135 by 90 instead of 180, getting 3/2 of pi
      { id: "D", text: "$\\frac{3\\pi}{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Radians ↔ Degrees Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Multiply by $\\frac{\\pi}{180}$: $135 \\cdot \\frac{\\pi}{180} = \\frac{3\\pi}{4}$.\n\n**The Full Solution:**\nStep 1: Read the figure: angle $AOB$ measures $135^{\\circ}$.\nStep 2: Since $180^{\\circ} = \\pi$ radians, multiply the degree measure by $\\frac{\\pi}{180}$: $135\\left(\\frac{\\pi}{180}\\right) = \\frac{135\\pi}{180}$.\nStep 3: Simplify: $\\frac{135}{180} = \\frac{3}{4}$, so the angle measures $\\frac{3\\pi}{4}$ radians. Check: $\\frac{3\\pi}{4} \\cdot \\frac{180}{\\pi} = 135$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3\\pi}{8}$): divides by $360$ instead of $180$, as if a full turn were $\\pi$ radians.\n* Choice C ($\\frac{4\\pi}{3}$): flips the fraction, using $\\frac{180}{135}$ instead of $\\frac{135}{180}$.\n* Choice D ($\\frac{3\\pi}{2}$): divides by $90$ instead of $180$; $\\frac{3\\pi}{2}$ radians is $270^{\\circ}$.\n\n**Test Day Takeaway:** Degrees to radians: multiply by $\\frac{\\pi}{180}$. An angle between $90^{\\circ}$ and $180^{\\circ}$ must land between $\\frac{\\pi}{2}$ and $\\pi$.",
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
    question: "$\\frac{k\\pi}{15} \\text{ radians} = 132^{\\circ}$\nIn the given equation, $k$ is a constant. What is the value of $k$?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Radians ↔ Degrees Conversion**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~25s):** $132^{\\circ} = \\frac{132\\pi}{180} = \\frac{11\\pi}{15}$ radians, so $k = 11$.\n\n**The Full Solution:**\nStep 1: Convert the degree measure to radians by multiplying by $\\frac{\\pi}{180}$: $132\\left(\\frac{\\pi}{180}\\right) = \\frac{132\\pi}{180}$.\nStep 2: Simplify: $\\frac{132}{180} = \\frac{11}{15}$, so $132^{\\circ} = \\frac{11\\pi}{15}$ radians.\nStep 3: Match the given form $\\frac{k\\pi}{15}$: $k = 11$. Check: $\\frac{11\\pi}{15} \\cdot \\frac{180}{\\pi} = 11 \\cdot 12 = 132$ ✓\n\n**Common Mistakes:**\n* $5.5$: converts with $\\frac{\\pi}{360}$, treating a half turn as $360^{\\circ}$.\n* $1{,}980$: multiplies $132$ by $15$ and never divides by $180$.\n* $8.8$: divides $132$ by $15$, ignoring the degree-to-radian conversion entirely.\n\n**Test Day Takeaway:** Convert first, then match forms: once both sides are written over $15$, the constant is just the numerator.",
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
    question: "Angle $A$ measures $\\frac{7\\pi}{10}$ radians, and angle $B$ measures $18^{\\circ}$ less than angle $A$. What is the measure, in degrees, of angle $B$?",
    choices: [
      { id: "A", text: "$108$" },
      // distractor: converts angle A to 126 degrees correctly but reports angle A instead of subtracting 18
      { id: "B", text: "$126$" },
      // distractor: adds 18 to angle A instead of subtracting it
      { id: "C", text: "$144$" },
      // distractor: converts with 360/pi instead of 180/pi, getting 252 for angle A, then subtracts 18
      { id: "D", text: "$234$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Radians ↔ Degrees Conversion**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\frac{7\\pi}{10} \\cdot \\frac{180}{\\pi} = 126$, so angle $B$ measures $126 - 18 = 108$ degrees.\n\n**The Full Solution:**\nStep 1: Convert angle $A$ to degrees by multiplying by $\\frac{180}{\\pi}$: $\\frac{7\\pi}{10} \\cdot \\frac{180}{\\pi} = \\frac{7 \\cdot 180}{10} = 126$.\nStep 2: Angle $B$ measures $18^{\\circ}$ less than angle $A$, so subtract: $126 - 18$.\nStep 3: Angle $B$ measures $108^{\\circ}$. Check: $108 + 18 = 126$, and $126^{\\circ} = \\frac{126\\pi}{180} = \\frac{7\\pi}{10}$ radians ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($126$): this is angle $A$ in degrees; the $18^{\\circ}$ was never subtracted.\n* Choice C ($144$): adds $18$ to angle $A$ instead of subtracting it.\n* Choice D ($234$): converts with $\\frac{360}{\\pi}$, getting $252$ for angle $A$, then subtracts $18$.\n\n**Test Day Takeaway:** Convert to one unit before you add or subtract angle measures; radians to degrees means multiplying by $\\frac{180}{\\pi}$.",
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
    question: "In the right triangle shown, what is the length of the hypotenuse?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [22.517, 0], [22.517, 13]], rightAngleVertex: 1, labels: ["30°", "", ""], sideLabels: ["", "13", ""], figureNote: true } },
    choices: [
      // distractor: halves the short leg instead of doubling it
      { id: "A", text: "$6.5$" },
      // distractor: applies the 45-45-90 ratio, multiplying the leg by sqrt 2
      { id: "B", text: "$13\\sqrt{2}$" },
      // distractor: gives the length of the longer leg, opposite the 60-degree angle
      { id: "C", text: "$13\\sqrt{3}$" },
      { id: "D", text: "$26$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The side of length $13$ is opposite the $30^{\\circ}$ angle, and in a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle the hypotenuse is twice that side: $2(13) = 26$.\n\n**The Full Solution:**\nStep 1: The triangle has a right angle and a $30^{\\circ}$ angle, so its third angle is $60^{\\circ}$: it is a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle with sides in the ratio $1 : \\sqrt{3} : 2$.\nStep 2: The side labeled $13$ is opposite the $30^{\\circ}$ angle, so it is the shorter leg and corresponds to the $1$ in the ratio.\nStep 3: The hypotenuse corresponds to the $2$: its length is $2(13) = 26$. Check: the longer leg is $13\\sqrt{3}$, and $13^{2} + \\left(13\\sqrt{3}\\right)^{2} = 169 + 507 = 676 = 26^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.5$): halves the shorter leg; the hypotenuse is the longest side, so it must be more than $13$.\n* Choice B ($13\\sqrt{2}$): uses the $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ ratio, which does not apply to this triangle.\n* Choice C ($13\\sqrt{3}$): this is the longer leg, opposite the $60^{\\circ}$ angle.\n\n**Test Day Takeaway:** In a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle, the hypotenuse is exactly twice the leg opposite the $30^{\\circ}$ angle.",
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
    question: "What is the length of the shorter leg of the right triangle shown?",
    diagram: { type: "rightTriangle", params: { labels: ["30°", "", "60°"], sideLabels: ["", "", "16"], rightAngleVertex: 1, figureNote: true, vertices: [[0, 0], [13.856, 0], [13.856, 8]] } },
    correctAnswer: "8",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** The shorter leg of a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle is half the hypotenuse: $\\frac{16}{2} = 8$.\n\n**The Full Solution:**\nStep 1: The angles are $30^{\\circ}$, $60^{\\circ}$ and $90^{\\circ}$, so the sides are in the ratio $1 : \\sqrt{3} : 2$, and the hypotenuse is $16$.\nStep 2: The shorter leg is the side opposite the $30^{\\circ}$ angle, which corresponds to the $1$ in the ratio.\nStep 3: Its length is half the hypotenuse: $\\frac{16}{2} = 8$. Check: the longer leg is $8\\sqrt{3}$, and $8^{2} + \\left(8\\sqrt{3}\\right)^{2} = 64 + 192 = 256 = 16^{2}$ ✓\n\n**Common Mistakes:**\n* $8\\sqrt{3}$ (about $13.86$): this is the longer leg, opposite the $60^{\\circ}$ angle.\n* $32$: doubles the hypotenuse instead of halving it.\n* $8\\sqrt{2}$ (about $11.31$): uses the $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ ratio.\n\n**Test Day Takeaway:** Shorter leg = half the hypotenuse; longer leg = shorter leg times $\\sqrt{3}$.",
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
    question: "In triangle $PQR$ shown, angle $Q$ is a right angle and the measure of angle $P$ is $30^{\\circ}$. What is the length of $PR$?",
    diagram: { type: "rightTriangle", params: { labels: ["P", "Q", "R"], sideLabels: ["15√3", "", ""], rightAngleVertex: 1, figureNote: true, vertices: [[0, 0], [25.981, 0], [25.981, 15]] } },
    choices: [
      // distractor: finds the shorter leg QR = 15 and reports it instead of the hypotenuse
      { id: "A", text: "$15$" },
      { id: "B", text: "$30$" },
      // distractor: multiplies the longer leg by sqrt 3 instead of dividing by it
      { id: "C", text: "$45$" },
      // distractor: doubles the longer leg, treating PQ as the side opposite the 30-degree angle
      { id: "D", text: "$30\\sqrt{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $PQ$ is the longer leg, so the shorter leg is $\\frac{15\\sqrt{3}}{\\sqrt{3}} = 15$ and the hypotenuse is $2(15) = 30$.\n\n**The Full Solution:**\nStep 1: Angle $Q$ is $90^{\\circ}$ and angle $P$ is $30^{\\circ}$, so angle $R$ is $60^{\\circ}$; the sides are in the ratio $1 : \\sqrt{3} : 2$.\nStep 2: $PQ$ is opposite angle $R$, the $60^{\\circ}$ angle, so it is the longer leg. The shorter leg $QR$ is $\\frac{15\\sqrt{3}}{\\sqrt{3}} = 15$.\nStep 3: The hypotenuse $PR$ is twice the shorter leg: $PR = 2(15) = 30$. Check: $15^{2} + \\left(15\\sqrt{3}\\right)^{2} = 225 + 675 = 900 = 30^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): this is the shorter leg $QR$, not the hypotenuse.\n* Choice C ($45$): multiplies $15\\sqrt{3}$ by $\\sqrt{3}$ instead of dividing by it.\n* Choice D ($30\\sqrt{3}$): doubles $PQ$, which treats it as the leg opposite the $30^{\\circ}$ angle.\n\n**Test Day Takeaway:** Name the leg first: the leg next to the $30^{\\circ}$ angle is the longer one. Divide it by $\\sqrt{3}$ to get the shorter leg, then double for the hypotenuse.",
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
    question: "In triangle $PQR$, $PQ = 7$, $QR = 7\\sqrt{3}$, and $PR = 14$. What is the measure of angle $P$?",
    choices: [
      // distractor: gives the angle opposite the shortest side PQ, which is angle R, not angle P
      { id: "A", text: "$30^{\\circ}$" },
      // distractor: treats the triangle as an isosceles right triangle
      { id: "B", text: "$45^{\\circ}$" },
      { id: "C", text: "$60^{\\circ}$" },
      // distractor: assumes angle P is the right angle; the right angle is opposite the longest side PR, at Q
      { id: "D", text: "$90^{\\circ}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The sides are in the ratio $7 : 7\\sqrt{3} : 14 = 1 : \\sqrt{3} : 2$, so the triangle is $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$; angle $P$ is opposite the middle side $QR$, so it measures $60^{\\circ}$.\n\n**The Full Solution:**\nStep 1: Check for a right triangle: $7^{2} + \\left(7\\sqrt{3}\\right)^{2} = 49 + 147 = 196 = 14^{2}$, so the angle opposite $PR$, angle $Q$, is a right angle.\nStep 2: Dividing each side by $7$ gives $1 : \\sqrt{3} : 2$, the side ratio of a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle. The $30^{\\circ}$ angle is opposite the shortest side and the $60^{\\circ}$ angle is opposite the middle side.\nStep 3: Angle $P$ is opposite side $QR = 7\\sqrt{3}$, the middle side, so angle $P$ measures $60^{\\circ}$. Check: angle $R$, opposite $PQ = 7$, is $30^{\\circ}$, and $60 + 30 + 90 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($30^{\\circ}$): this is angle $R$, the angle opposite the shortest side.\n* Choice B ($45^{\\circ}$): an isosceles right triangle would need two equal legs; $7$ and $7\\sqrt{3}$ are not equal.\n* Choice D ($90^{\\circ}$): the right angle is opposite the longest side $PR$, so it is at $Q$, not $P$.\n\n**Test Day Takeaway:** Match each angle to the side across from it: in a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle the shortest side faces $30^{\\circ}$ and the side with the $\\sqrt{3}$ faces $60^{\\circ}$.",
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
    question: "In the right triangle shown, what is the value of $x$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15, 0], [15, 8.66]], rightAngleVertex: 1, labels: ["30°", "", ""], sideLabels: ["x", "5√3", ""], figureNote: true } },
    correctAnswer: "15",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~15s):** The side $5\\sqrt{3}$ is opposite the $30^{\\circ}$ angle, so it is the shorter leg, and $x$ is the longer leg: $x = 5\\sqrt{3} \\cdot \\sqrt{3} = 15$.\n\n**The Full Solution:**\nStep 1: The triangle has a right angle and a $30^{\\circ}$ angle, so it is a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle with sides in the ratio $1 : \\sqrt{3} : 2$.\nStep 2: The side labeled $5\\sqrt{3}$ is opposite the $30^{\\circ}$ angle, so it is the shorter leg. The side labeled $x$ is the other leg, the longer one.\nStep 3: The longer leg is $\\sqrt{3}$ times the shorter leg: $x = 5\\sqrt{3} \\cdot \\sqrt{3} = 5 \\cdot 3 = 15$. Check: the hypotenuse is $2\\left(5\\sqrt{3}\\right) = 10\\sqrt{3}$, and $\\left(5\\sqrt{3}\\right)^{2} + 15^{2} = 75 + 225 = 300 = \\left(10\\sqrt{3}\\right)^{2}$ ✓\n\n**Common Mistakes:**\n* $5$: divides by $\\sqrt{3}$, treating $5\\sqrt{3}$ as the longer leg.\n* $10\\sqrt{3}$ (about $17.32$): doubles the shorter leg, which gives the hypotenuse, not the other leg.\n* $5\\sqrt{3}$ (about $8.66$): assumes the two legs are equal, as in a $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ triangle.\n\n**Test Day Takeaway:** A leg written with $\\sqrt{3}$ is not automatically the longer leg. Decide by position: the side across from $30^{\\circ}$ is the shorter leg.",
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
    question: "The area of the right triangle shown is $50\\sqrt{3}$. What is the length of the hypotenuse of the triangle?",
    diagram: { type: "rightTriangle", params: { labels: ["30°", "", "60°"], rightAngleVertex: 1, figureNote: true, vertices: [[0, 0], [17.321, 0], [17.321, 10]] } },
    choices: [
      // distractor: solves for the shorter leg a = 10 and reports it as the hypotenuse
      { id: "A", text: "$10$" },
      // distractor: reports the longer leg, 10 sqrt 3, instead of the hypotenuse
      { id: "B", text: "$10\\sqrt{3}$" },
      { id: "C", text: "$20$" },
      // distractor: stops at a^2 = 100 without taking the square root
      { id: "D", text: "$100$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** With shorter leg $a$, the legs are $a$ and $a\\sqrt{3}$, so the area is $\\frac{\\sqrt{3}}{2}a^{2} = 50\\sqrt{3}$, giving $a = 10$ and a hypotenuse of $2a = 20$.\n\n**The Full Solution:**\nStep 1: The angles are $30^{\\circ}$, $60^{\\circ}$ and $90^{\\circ}$, so if the shorter leg is $a$, the longer leg is $a\\sqrt{3}$ and the hypotenuse is $2a$.\nStep 2: The legs are perpendicular, so the area is $\\frac{1}{2}(a)\\left(a\\sqrt{3}\\right) = \\frac{\\sqrt{3}}{2}a^{2}$. Setting this equal to $50\\sqrt{3}$ gives $a^{2} = 100$, so $a = 10$.\nStep 3: The hypotenuse is $2a = 20$. Check: the legs are $10$ and $10\\sqrt{3}$, and $\\frac{1}{2}(10)\\left(10\\sqrt{3}\\right) = 50\\sqrt{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): this is the shorter leg $a$; the hypotenuse is twice as long.\n* Choice B ($10\\sqrt{3}$): this is the longer leg, opposite the $60^{\\circ}$ angle.\n* Choice D ($100$): this is $a^{2}$; the square root was never taken.\n\n**Test Day Takeaway:** Write all three sides in terms of the shorter leg, $a$, $a\\sqrt{3}$ and $2a$, then one area equation finds $a$.",
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
    question: "In triangle $ABC$ shown, $AB = 12$. What is the area of triangle $ABC$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["30°", "60°", "90°"], vertexLabels: ["A", "B", "C"], figureNote: true } },
    choices: [
      { id: "A", text: "$18\\sqrt{3}$" },
      // distractor: treats the hypotenuse AB = 12 as the longer leg, so the shorter leg is 4 sqrt 3 and the area is (1/2)(4 sqrt 3)(12)
      { id: "B", text: "$24\\sqrt{3}$" },
      // distractor: finds the legs 6 and 6 sqrt 3 but forgets the 1/2 in the area formula
      { id: "C", text: "$36\\sqrt{3}$" },
      // distractor: treats AB = 12 as the shorter leg, so the longer leg is 12 sqrt 3 and the area is (1/2)(12)(12 sqrt 3)
      { id: "D", text: "$72\\sqrt{3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: 30-60-90 Triangle**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $AB$ is the hypotenuse, so the legs are $6$ and $6\\sqrt{3}$, and the area is $\\frac{1}{2}(6)\\left(6\\sqrt{3}\\right) = 18\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Angle $C$ is the right angle, so $AB$, the side opposite it, is the hypotenuse; the triangle is $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$.\nStep 2: The shorter leg $BC$, opposite the $30^{\\circ}$ angle at $A$, is half the hypotenuse: $BC = 6$. The longer leg is $AC = 6\\sqrt{3}$.\nStep 3: The legs are perpendicular, so the area is $\\frac{1}{2}(6)\\left(6\\sqrt{3}\\right) = 18\\sqrt{3}$. Check: $6^{2} + \\left(6\\sqrt{3}\\right)^{2} = 36 + 108 = 144 = 12^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($24\\sqrt{3}$): treats $AB$ as the longer leg, giving a shorter leg of $4\\sqrt{3}$ and an area of $\\frac{1}{2}\\left(4\\sqrt{3}\\right)(12)$.\n* Choice C ($36\\sqrt{3}$): finds the correct legs but leaves out the $\\frac{1}{2}$.\n* Choice D ($72\\sqrt{3}$): treats $AB$ as the shorter leg, giving legs $12$ and $12\\sqrt{3}$.\n\n**Test Day Takeaway:** Locate the right angle first; the side across from it is the hypotenuse, and the area uses the two legs.",
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
    question: "What is the length of each leg of the right triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [9.9, 0], [9.9, 9.9]], rightAngleVertex: 1, labels: ["45°", "", "45°"], sideLabels: ["", "", "14"], figureNote: true } },
    choices: [
      // distractor: halves the hypotenuse, using the 30-60-90 rule for the shorter leg
      { id: "A", text: "$7$" },
      { id: "B", text: "$7\\sqrt{2}$" },
      // distractor: multiplies the hypotenuse by sqrt 2 instead of dividing by it
      { id: "C", text: "$14\\sqrt{2}$" },
      // distractor: doubles the hypotenuse
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Each leg of a $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ triangle is the hypotenuse divided by $\\sqrt{2}$: $\\frac{14}{\\sqrt{2}} = 7\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The triangle has two $45^{\\circ}$ angles, so its legs are equal and its sides are in the ratio $1 : 1 : \\sqrt{2}$.\nStep 2: The hypotenuse is $14$, so each leg is $\\frac{14}{\\sqrt{2}}$.\nStep 3: Rationalize: $\\frac{14}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2}$. Check: $\\left(7\\sqrt{2}\\right)^{2} + \\left(7\\sqrt{2}\\right)^{2} = 98 + 98 = 196 = 14^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): halves the hypotenuse, which is the rule for the shorter leg of a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle.\n* Choice C ($14\\sqrt{2}$): multiplies by $\\sqrt{2}$, which would make each leg longer than the hypotenuse.\n* Choice D ($28$): doubles the hypotenuse.\n\n**Test Day Takeaway:** Leg to hypotenuse: multiply by $\\sqrt{2}$. Hypotenuse to leg: divide by $\\sqrt{2}$. A leg is always shorter than the hypotenuse.",
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
    question: "Each side of a square has length $15\\sqrt{2}$. What is the length of a diagonal of the square?",
    correctAnswer: "30",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~10s):** A diagonal is a side times $\\sqrt{2}$: $15\\sqrt{2} \\cdot \\sqrt{2} = 15 \\cdot 2 = 30$.\n\n**The Full Solution:**\nStep 1: A diagonal splits the square into two $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ triangles whose legs are sides of the square and whose hypotenuse is the diagonal.\nStep 2: In a $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ triangle, the hypotenuse is $\\sqrt{2}$ times a leg, so the diagonal is $15\\sqrt{2} \\cdot \\sqrt{2}$.\nStep 3: Since $\\sqrt{2} \\cdot \\sqrt{2} = 2$, the diagonal is $15 \\cdot 2 = 30$. Check: $\\left(15\\sqrt{2}\\right)^{2} + \\left(15\\sqrt{2}\\right)^{2} = 450 + 450 = 900 = 30^{2}$ ✓\n\n**Common Mistakes:**\n* $15$: divides by $\\sqrt{2}$ instead of multiplying, which gives a diagonal shorter than a side.\n* $60\\sqrt{2}$ (about $84.85$): adds the four sides, finding the perimeter instead of the diagonal.\n* $30\\sqrt{2}$ (about $42.43$): doubles the side instead of multiplying by $\\sqrt{2}$.\n\n**Test Day Takeaway:** Square diagonal = side $\\times \\sqrt{2}$, and $\\sqrt{2} \\cdot \\sqrt{2} = 2$, so a side written with $\\sqrt{2}$ gives a whole-number diagonal.",
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
    question: "What is the area of the isosceles right triangle shown?",
    diagram: { type: "rightTriangle", params: { labels: ["45°", "", "45°"], sideLabels: ["", "", "16"], rightAngleVertex: 1, figureNote: true, vertices: [[0, 0], [11.314, 0], [11.314, 11.314]] } },
    choices: [
      // distractor: halves the hypotenuse to get legs of 8, so the area is (1/2)(8)(8) = 32
      { id: "A", text: "$32$" },
      { id: "B", text: "$64$" },
      // distractor: finds the legs 8 sqrt 2 but forgets the 1/2, computing (8 sqrt 2)^2 = 128
      { id: "C", text: "$128$" },
      // distractor: squares the hypotenuse, 16^2 = 256
      { id: "D", text: "$256$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Each leg is $\\frac{16}{\\sqrt{2}} = 8\\sqrt{2}$, so the area is $\\frac{1}{2}\\left(8\\sqrt{2}\\right)^{2} = \\frac{1}{2}(128) = 64$.\n\n**The Full Solution:**\nStep 1: The triangle is $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ with hypotenuse $16$, so each leg is $\\frac{16}{\\sqrt{2}} = 8\\sqrt{2}$.\nStep 2: The legs are perpendicular, so they serve as base and height: area $= \\frac{1}{2}\\left(8\\sqrt{2}\\right)\\left(8\\sqrt{2}\\right)$.\nStep 3: Since $\\left(8\\sqrt{2}\\right)^{2} = 128$, the area is $\\frac{1}{2}(128) = 64$. Check: $128 + 128 = 256 = 16^{2}$, so legs of $8\\sqrt{2}$ do fit a hypotenuse of $16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): halves the hypotenuse to get legs of $8$; the legs are $\\frac{16}{\\sqrt{2}}$, not $\\frac{16}{2}$.\n* Choice C ($128$): finds the legs correctly but forgets the $\\frac{1}{2}$ in the area formula.\n* Choice D ($256$): squares the hypotenuse, which gives the area of a square, not this triangle.\n\n**Test Day Takeaway:** An isosceles right triangle with hypotenuse $h$ has area $\\frac{h^{2}}{4}$: here $\\frac{256}{4} = 64$.",
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
    question: "In square $ABCD$, the length of diagonal $AC$ is $26\\sqrt{2}$. What is the perimeter of square $ABCD$?",
    correctAnswer: "104",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**The correct answer is $104$.**\n\n**The Fast Way (~20s):** A side is the diagonal divided by $\\sqrt{2}$: $\\frac{26\\sqrt{2}}{\\sqrt{2}} = 26$, so the perimeter is $4(26) = 104$.\n\n**The Full Solution:**\nStep 1: Diagonal $AC$ splits the square into two $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ triangles, with the sides of the square as legs and $AC$ as the hypotenuse.\nStep 2: A leg is the hypotenuse divided by $\\sqrt{2}$: each side of the square has length $\\frac{26\\sqrt{2}}{\\sqrt{2}} = 26$.\nStep 3: The perimeter is $4(26) = 104$. Check: $26^{2} + 26^{2} = 1{,}352$ and $\\left(26\\sqrt{2}\\right)^{2} = 676 \\cdot 2 = 1{,}352$ ✓\n\n**Common Mistakes:**\n* $26$: finds the side length and stops before multiplying by $4$.\n* $52$: adds only two sides, which is the half perimeter.\n* $676$: finds the area, $26^{2}$, instead of the perimeter.\n\n**Test Day Takeaway:** Diagonal to side: divide by $\\sqrt{2}$. Then reread the question; a perimeter needs all four sides.",
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
    question: "The area of triangle $DEF$ shown is $50$. What is the length of $DE$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["45°", "45°", "90°"], vertexLabels: ["D", "E", "F"], figureNote: true } },
    choices: [
      // distractor: solves for the leg length 10 and reports it instead of the hypotenuse DE
      { id: "A", text: "$10$" },
      { id: "B", text: "$10\\sqrt{2}$" },
      // distractor: doubles the leg instead of multiplying by sqrt 2
      { id: "C", text: "$20$" },
      // distractor: treats the area 50 as the length of a leg and multiplies by sqrt 2
      { id: "D", text: "$50\\sqrt{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** With legs $s$, $\\frac{1}{2}s^{2} = 50$ gives $s = 10$, and the hypotenuse $DE$ is $10\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $F$ and the other two angles are $45^{\\circ}$, so legs $DF$ and $EF$ are equal; call each $s$. Side $DE$ is the hypotenuse.\nStep 2: The legs are perpendicular, so the area is $\\frac{1}{2}s^{2} = 50$. Then $s^{2} = 100$ and $s = 10$.\nStep 3: The hypotenuse is $s\\sqrt{2}$, so $DE = 10\\sqrt{2}$. Check: $10^{2} + 10^{2} = 200 = \\left(10\\sqrt{2}\\right)^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): this is the length of each leg, not side $DE$.\n* Choice C ($20$): doubles the leg; the hypotenuse is a leg times $\\sqrt{2}$, not $2$.\n* Choice D ($50\\sqrt{2}$): treats the area $50$ as a leg length.\n\n**Test Day Takeaway:** Use the area to find the legs first: an isosceles right triangle with legs $s$ has area $\\frac{1}{2}s^{2}$.",
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
    question: "In isosceles right triangle $PQR$ shown, the length of $PR$ is $6$ greater than the length of $PQ$. What is the length of $PQ$?",
    diagram: { type: "rightTriangle", params: { labels: ["P", "Q", "R"], rightAngleVertex: 1, figureNote: true, vertices: [[0, 0], [10, 0], [10, 10]] } },
    choices: [
      // distractor: multiplies 6 by (sqrt 2 - 1) instead of dividing 6 by it
      { id: "A", text: "$6\\sqrt{2} - 6$" },
      // distractor: rationalizes 6/(sqrt 2 - 1) with a denominator of 2 instead of 1
      { id: "B", text: "$3 + 3\\sqrt{2}$" },
      { id: "C", text: "$6 + 6\\sqrt{2}$" },
      // distractor: reports the hypotenuse PR = PQ + 6 instead of PQ
      { id: "D", text: "$12 + 6\\sqrt{2}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** With $PQ = s$, the hypotenuse is $s\\sqrt{2}$, so $s\\sqrt{2} - s = 6$ and $s = \\frac{6}{\\sqrt{2} - 1} = 6\\left(\\sqrt{2} + 1\\right) = 6 + 6\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $Q$, so $PR$ is the hypotenuse and the legs $PQ$ and $QR$ are equal. Let $PQ = s$; then $PR = s\\sqrt{2}$.\nStep 2: Since $PR$ is $6$ greater than $PQ$, $s\\sqrt{2} - s = 6$, so $s\\left(\\sqrt{2} - 1\\right) = 6$ and $s = \\frac{6}{\\sqrt{2} - 1}$.\nStep 3: Rationalize: $\\frac{6}{\\sqrt{2} - 1} \\cdot \\frac{\\sqrt{2} + 1}{\\sqrt{2} + 1} = \\frac{6\\left(\\sqrt{2} + 1\\right)}{2 - 1} = 6 + 6\\sqrt{2}$. Check: $PR = \\left(6 + 6\\sqrt{2}\\right)\\sqrt{2} = 6\\sqrt{2} + 12$, and $\\left(12 + 6\\sqrt{2}\\right) - \\left(6 + 6\\sqrt{2}\\right) = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6\\sqrt{2} - 6$): multiplies $6$ by $\\sqrt{2} - 1$ instead of dividing by it; this value is less than $6$, too short for a leg.\n* Choice B ($3 + 3\\sqrt{2}$): rationalizes with a denominator of $2$; $\\left(\\sqrt{2} - 1\\right)\\left(\\sqrt{2} + 1\\right) = 2 - 1 = 1$.\n* Choice D ($12 + 6\\sqrt{2}$): this is $PR$, the hypotenuse, which is $6$ more than the leg.\n\n**Test Day Takeaway:** Write every side in terms of one leg, factor that leg out, and rationalize with the conjugate; $\\left(\\sqrt{2} - 1\\right)\\left(\\sqrt{2} + 1\\right) = 1$.",
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
    question: "In isosceles right triangle $PQR$ shown, what is the value of $y$?",
    diagram: { type: "triangleWithAngles", params: { angleLabels: ["(2y - 5)°", "(y + 20)°", "90°"], vertexLabels: ["P", "Q", "R"], figureNote: true } },
    choices: [
      { id: "A", text: "$25$" },
      // distractor: sets the angle 2y - 5 equal to 90
      { id: "B", text: "$47.5$" },
      // distractor: uses only the two acute angles and sets their sum to 180, solving 3y + 15 = 180
      { id: "C", text: "$55$" },
      // distractor: sets the angle y + 20 equal to 90
      { id: "D", text: "$70$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: 45-45-90 Triangle**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The two acute angles of an isosceles right triangle are equal: $2y - 5 = y + 20$, so $y = 25$.\n\n**The Full Solution:**\nStep 1: The right angle is at $R$, so the equal angles are the acute angles at $P$ and $Q$, each $45^{\\circ}$.\nStep 2: Set the two acute angles equal: $2y - 5 = y + 20$.\nStep 3: Solve: $y = 25$. Check: $2(25) - 5 = 45$ and $25 + 20 = 45$, and $45 + 45 + 90 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($47.5$): sets $2y - 5$ equal to $90$, but the right angle is the one already marked $90^{\\circ}$.\n* Choice C ($55$): sets the sum of the two acute angles equal to $180$, leaving out the right angle; the acute angles sum to $90$.\n* Choice D ($70$): sets $y + 20$ equal to $90$, treating an acute angle as the right angle.\n\n**Test Day Takeaway:** In an isosceles right triangle, both acute angles are $45^{\\circ}$; setting either expression equal to $45$ gives the same value of $y$.",
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
    question: "In the figure shown, two lines intersect at a point. What is the value of $x$?",
    diagram: { type: "intersectingLines", params: { angles: ["(x + 26)°", "", "94°", ""], figureNote: true, angle0Measure: 94 } },
    choices: [
      // distractor: treats the two angles as supplementary, solving x + 26 = 180 - 94
      { id: "A", text: "$60$" },
      { id: "B", text: "$68$" },
      // distractor: reports the angle measure 94 instead of x
      { id: "C", text: "$94$" },
      // distractor: adds 26 to 94 instead of subtracting it
      { id: "D", text: "$120$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The angles are vertical angles, so $x + 26 = 94$ and $x = 68$.\n\n**The Full Solution:**\nStep 1: The angles marked $(x + 26)^{\\circ}$ and $94^{\\circ}$ are across the intersection from each other, so they are vertical angles.\nStep 2: Vertical angles are congruent: $x + 26 = 94$.\nStep 3: Subtract $26$: $x = 68$. Check: $68 + 26 = 94$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($60$): treats the angles as supplementary, solving $x + 26 = 86$; that would be true only for angles that share a side.\n* Choice C ($94$): this is the measure of the angle, not the value of $x$.\n* Choice D ($120$): adds $26$ to $94$ instead of subtracting it.\n\n**Test Day Takeaway:** Angles directly across an intersection are equal; angles that share a side add to $180^{\\circ}$. Check which pair you have before writing the equation.",
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
    question: "In the figure, lines $j$ and $k$ intersect. What is the value of $y$?",
    diagram: { type: "intersectingLines", params: { angles: ["", "y°", "", "137°"], figureNote: true, angle0Measure: 43, lineLabels: ["j", "k"] } },
    correctAnswer: "137",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**The correct answer is $137$.**\n\n**The Fast Way (~5s):** The angle marked $y^{\\circ}$ is vertical to the $137^{\\circ}$ angle, so $y = 137$.\n\n**The Full Solution:**\nStep 1: Lines $j$ and $k$ form two pairs of vertical angles.\nStep 2: The angles marked $y^{\\circ}$ and $137^{\\circ}$ are across the intersection from each other, so they are vertical angles and are congruent.\nStep 3: Therefore $y = 137$. Check: each of the two unmarked angles is $180 - 137 = 43$ degrees, and $137 + 43 + 137 + 43 = 360$ ✓\n\n**Common Mistakes:**\n* $43$: treats $y^{\\circ}$ and $137^{\\circ}$ as a linear pair, subtracting $137$ from $180$.\n* $223$: subtracts $137$ from $360$, as if the two angles made a full turn.\n* $68.5$: halves $137$, treating the angles as if they split one angle.\n\n**Test Day Takeaway:** Vertical angles sit across the intersection point and never share a side. When they do, the answer is the same number.",
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
    question: "The figure shows two intersecting lines. What is the value of $y$?",
    diagram: { type: "intersectingLines", params: { angles: ["(2x + 11)°", "(3x + 4)°", "y°", ""], figureNote: true, angle0Measure: 77 } },
    choices: [
      // distractor: solves for x = 33 and reports x instead of y
      { id: "A", text: "$33$" },
      // distractor: treats the two labeled angles as complementary, so 5x + 15 = 90 and x = 15, giving 2(15) + 11 = 41
      { id: "B", text: "$41$" },
      { id: "C", text: "$77$" },
      // distractor: gives the measure of the (3x + 4)-degree angle, which is adjacent to the y-degree angle, not vertical to it
      { id: "D", text: "$103$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The two labeled angles form a straight line: $5x + 15 = 180$, so $x = 33$. The angle $y^{\\circ}$ is vertical to $(2x + 11)^{\\circ}$, so $y = 77$.\n\n**The Full Solution:**\nStep 1: The angles $(2x + 11)^{\\circ}$ and $(3x + 4)^{\\circ}$ share a side and together form a straight line, so $(2x + 11) + (3x + 4) = 180$.\nStep 2: Simplify and solve: $5x + 15 = 180$, so $5x = 165$ and $x = 33$.\nStep 3: The angle $y^{\\circ}$ is vertical to the $(2x + 11)^{\\circ}$ angle, so $y = 2(33) + 11 = 77$. Check: the adjacent angle is $3(33) + 4 = 103$, and $77 + 103 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($33$): this is the value of $x$; the question asks for $y$.\n* Choice B ($41$): sets the sum of the labeled angles equal to $90$ instead of $180$.\n* Choice D ($103$): this is the $(3x + 4)^{\\circ}$ angle, which shares a side with the $y^{\\circ}$ angle.\n\n**Test Day Takeaway:** Use the linear pair to find $x$, then use the vertical pair to carry that measure across the intersection.",
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
    question: "Two lines intersect at a point, as shown. If $a + c = 104$, what is the value of $b$?",
    diagram: { type: "intersectingLines", params: { angles: ["a°", "b°", "c°", ""], figureNote: true, angle0Measure: 52 } },
    choices: [
      // distractor: finds a = 52 and reports it instead of b
      { id: "A", text: "$52$" },
      // distractor: treats a + c as a single angle adjacent to b, computing 180 - 104
      { id: "B", text: "$76$" },
      // distractor: assumes b equals a + c
      { id: "C", text: "$104$" },
      { id: "D", text: "$128$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Vertical angles give $a = c$, so $2a = 104$ and $a = 52$; then $b = 180 - 52 = 128$.\n\n**The Full Solution:**\nStep 1: The angles $a^{\\circ}$ and $c^{\\circ}$ are across the intersection from each other, so they are vertical angles and $a = c$.\nStep 2: Substitute $a$ for $c$ in $a + c = 104$: $2a = 104$, so $a = 52$.\nStep 3: The angles $a^{\\circ}$ and $b^{\\circ}$ share a side and form a straight line, so $b = 180 - 52 = 128$. Check: $b + c = 128 + 52 = 180$, as it must for the other linear pair ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($52$): this is $a$ (and $c$), not $b$.\n* Choice B ($76$): subtracts $104$ from $180$, treating $a + c$ as one angle next to $b$.\n* Choice C ($104$): assumes $b = a + c$; no angle in the figure has that relationship.\n\n**Test Day Takeaway:** Use the vertical pair to turn two unknowns into one, then the straight line to reach the adjacent angle.",
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
    question: "Two lines intersect, as shown. What is the value of $y$?",
    diagram: { type: "intersectingLines", params: { angles: ["(4x + 27)°", "y°", "(7x - 12)°", ""], figureNote: true, angle0Measure: 79 } },
    correctAnswer: "101",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**The correct answer is $101$.**\n\n**The Fast Way (~30s):** Vertical angles: $4x + 27 = 7x - 12$, so $x = 13$ and each of those angles is $79^{\\circ}$; then $y = 180 - 79 = 101$.\n\n**The Full Solution:**\nStep 1: The angles $(4x + 27)^{\\circ}$ and $(7x - 12)^{\\circ}$ are vertical angles, so $4x + 27 = 7x - 12$.\nStep 2: Solve: $39 = 3x$, so $x = 13$, and each of these angles measures $4(13) + 27 = 79$ degrees.\nStep 3: The angle $y^{\\circ}$ forms a straight line with the $(4x + 27)^{\\circ}$ angle, so $y = 180 - 79 = 101$. Check: $7(13) - 12 = 79$, and $79 + 101 = 180$ ✓\n\n**Common Mistakes:**\n* $13$: reports $x$, the value that solves the equation, instead of $y$.\n* $79$: reports the measure of the vertical angles; the $y^{\\circ}$ angle is next to them, not across from them.\n* $93$: treats the two labeled angles as supplementary, $11x + 15 = 180$, so $x = 15$, then computes $y = 180 - (4(15) + 27) = 93$.\n\n**Test Day Takeaway:** Read which pair is vertical before writing the equation: across the point means equal, side by side means a sum of $180^{\\circ}$.",
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
    question: "In the figure shown, lines $j$ and $k$ intersect. If $2x + y = 174$, what is the value of $y$?",
    diagram: { type: "intersectingLines", params: { angles: ["x°", "", "y°", ""], figureNote: true, angle0Measure: 58, lineLabels: ["j", "k"] } },
    choices: [
      { id: "A", text: "$58$" },
      // distractor: divides 174 by 2, ignoring that 2x + y counts the same angle 3 times
      { id: "B", text: "$87$" },
      // distractor: reports 2x = 116 instead of y
      { id: "C", text: "$116$" },
      // distractor: gives the measure of an angle adjacent to the y-degree angle, 180 - 58
      { id: "D", text: "$122$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The angles are vertical, so $x = y$; then $2y + y = 174$ gives $y = 58$.\n\n**The Full Solution:**\nStep 1: The angles $x^{\\circ}$ and $y^{\\circ}$ are across the intersection from each other, so they are vertical angles and $x = y$.\nStep 2: Substitute $y$ for $x$ in $2x + y = 174$: $2y + y = 174$, so $3y = 174$.\nStep 3: Divide by $3$: $y = 58$. Check: $x = 58$ and $2(58) + 58 = 174$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($87$): divides $174$ by $2$, as if the equation were $2y = 174$.\n* Choice C ($116$): this is $2x$, not $y$.\n* Choice D ($122$): this is $180 - 58$, the measure of an angle next to the $y^{\\circ}$ angle.\n\n**Test Day Takeaway:** When an equation links two angle labels, use the figure first: vertical angles let you replace one variable with the other.",
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
    question: "In the figure, three of the four angles formed by two intersecting lines are labeled. What is the value of $x$?",
    diagram: { type: "intersectingLines", params: { angles: ["(2x + y)°", "5y°", "(3x - 10)°", ""], figureNote: true, angle0Measure: 80 } },
    choices: [
      // distractor: solves the vertical-angle equation as x = y - 10, getting y = 25 and x = 15
      { id: "A", text: "$15$" },
      // distractor: reports y = 20 instead of x
      { id: "B", text: "$20$" },
      { id: "C", text: "$30$" },
      // distractor: reports the angle measure 2x + y = 80 instead of x
      { id: "D", text: "$80$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (~50s):** Vertical angles give $2x + y = 3x - 10$, so $x = y + 10$; the linear pair gives $(2x + y) + 5y = 180$, so $8y + 20 = 180$, $y = 20$ and $x = 30$.\n\n**The Full Solution:**\nStep 1: The angles $(2x + y)^{\\circ}$ and $(3x - 10)^{\\circ}$ are vertical angles, so $2x + y = 3x - 10$, which gives $x = y + 10$.\nStep 2: The angles $(2x + y)^{\\circ}$ and $5y^{\\circ}$ share a side and form a straight line, so $2x + 6y = 180$. Substituting $x = y + 10$ gives $2y + 20 + 6y = 180$, so $8y = 160$ and $y = 20$.\nStep 3: Then $x = 20 + 10 = 30$. Check: $2(30) + 20 = 80$, $3(30) - 10 = 80$, and $80 + 5(20) = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): flips the sign when solving the vertical-angle equation, using $x = y - 10$.\n* Choice B ($20$): this is $y$; the question asks for $x$.\n* Choice D ($80$): this is the measure of the vertical angles, $2x + y$, not $x$.\n\n**Test Day Takeaway:** Two unknowns need two equations, and an intersection supplies both: vertical angles are equal and a linear pair sums to $180^{\\circ}$.",
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
    question: "Two lines intersect at a point, as shown. What is the value of $x$?",
    diagram: { type: "intersectingLines", params: { angles: ["", "132°", "", "3x°"], figureNote: true, angle0Measure: 48 } },
    choices: [
      // distractor: treats the angles as supplementary, so 3x = 180 - 132 = 48 and x = 16
      { id: "A", text: "$16$" },
      { id: "B", text: "$44$" },
      // distractor: finds 180 - 132 = 48 and reports it as x
      { id: "C", text: "$48$" },
      // distractor: reports the angle measure 132 instead of x
      { id: "D", text: "$132$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The angles are vertical, so $3x = 132$ and $x = 44$.\n\n**The Full Solution:**\nStep 1: The angles marked $3x^{\\circ}$ and $132^{\\circ}$ are across the intersection from each other, so they are vertical angles.\nStep 2: Vertical angles are congruent: $3x = 132$.\nStep 3: Divide by $3$: $x = 44$. Check: $3(44) = 132$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): treats the angles as supplementary, solving $3x = 48$.\n* Choice C ($48$): this is $180 - 132$, the measure of each unmarked angle, not $x$.\n* Choice D ($132$): this is the angle measure; $x$ is one third of it.\n\n**Test Day Takeaway:** Vertical angles are equal, so set the expressions equal and finish solving for the variable.",
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
    question: "A circle has a diameter of $18$ inches. What is the area, in square inches, of the circle?",
    choices: [
      // distractor: computes pi times the radius, 9 pi, without squaring the radius
      { id: "A", text: "$9\\pi$" },
      // distractor: computes pi times the diameter, which is the circumference
      { id: "B", text: "$18\\pi$" },
      { id: "C", text: "$81\\pi$" },
      // distractor: uses the diameter 18 as the radius, getting pi times 324
      { id: "D", text: "$324\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The radius is half the diameter, $9$ inches, so the area is $\\pi(9)^{2} = 81\\pi$ square inches.\n\n**The Full Solution:**\nStep 1: The radius is half the diameter: $r = \\frac{18}{2} = 9$ inches.\nStep 2: The area of a circle is $A = \\pi r^{2}$.\nStep 3: $A = \\pi(9)^{2} = 81\\pi$ square inches. Check: $81\\pi \\approx 254$, which is less than the $18 \\times 18 = 324$ square inches of the square drawn around the circle ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9\\pi$): multiplies $\\pi$ by the radius without squaring it.\n* Choice B ($18\\pi$): computes $\\pi d$, which is the circumference, not the area.\n* Choice D ($324\\pi$): uses the diameter $18$ in place of the radius.\n\n**Test Day Takeaway:** Halve a diameter before using $A = \\pi r^{2}$; the formula needs the radius.",
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
    question: "The circumference of a circle is $26\\pi$ centimeters. What is the area of the circle, in square centimeters?",
    choices: [
      // distractor: finds the radius 13 but then computes pi r instead of pi r squared
      { id: "A", text: "$13\\pi$" },
      // distractor: reports the circumference instead of the area
      { id: "B", text: "$26\\pi$" },
      { id: "C", text: "$169\\pi$" },
      // distractor: uses 26 as the radius instead of solving 2 pi r = 26 pi
      { id: "D", text: "$676\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $2\\pi r = 26\\pi$ gives $r = 13$, so the area is $\\pi(13)^{2} = 169\\pi$ square centimeters.\n\n**The Full Solution:**\nStep 1: Use $C = 2\\pi r$: $2\\pi r = 26\\pi$.\nStep 2: Divide both sides by $2\\pi$: $r = 13$ centimeters.\nStep 3: The area is $\\pi r^{2} = \\pi(13)^{2} = 169\\pi$ square centimeters. Check: a radius of $13$ gives a circumference of $2\\pi(13) = 26\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13\\pi$): finds the radius but multiplies it by $\\pi$ without squaring it.\n* Choice B ($26\\pi$): repeats the circumference, which measures the distance around the circle, not the area.\n* Choice D ($676\\pi$): treats $26$ as the radius instead of solving $2\\pi r = 26\\pi$.\n\n**Test Day Takeaway:** Circumference and area both run through the radius: solve $2\\pi r = C$ for $r$ first, then square it.",
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
    question: "A square has a perimeter of $76$ inches. What is the length, in inches, of one side of the square?",
    choices: [
      { id: "A", text: "$19$" },
      // distractor: divides the perimeter by 2, as if the square had only two sides
      { id: "B", text: "$38$" },
      // distractor: multiplies the perimeter by 4 instead of dividing
      { id: "C", text: "$304$" },
      // distractor: finds the side 19 and then reports the area, 19 squared
      { id: "D", text: "$361$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A square has $4$ equal sides, so each side is $\\frac{76}{4} = 19$ inches.\n\n**The Full Solution:**\nStep 1: The perimeter of a square is $P = 4s$, where $s$ is the side length.\nStep 2: Substitute the perimeter: $4s = 76$.\nStep 3: Divide by $4$: $s = 19$ inches. Check: $19 + 19 + 19 + 19 = 76$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($38$): divides by $2$, which would give the sum of two sides.\n* Choice C ($304$): multiplies the perimeter by $4$ instead of dividing it.\n* Choice D ($361$): finds the side length and then squares it, which gives the area of the square.\n\n**Test Day Takeaway:** Perimeter $= 4s$, so one side is the perimeter divided by $4$.",
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
    question: "Square $A$ has a perimeter of $60$ centimeters. The area of square $B$ is $\\frac{1}{4}$ the area of square $A$. What is the perimeter, in centimeters, of square $B$?",
    choices: [
      // distractor: applies the area ratio 1/4 directly to the perimeter
      { id: "A", text: "$15$" },
      { id: "B", text: "$30$" },
      // distractor: reports the area of square B instead of its perimeter
      { id: "C", text: "$56.25$" },
      // distractor: doubles the perimeter instead of halving it
      { id: "D", text: "$120$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Square Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** An area ratio of $1:4$ means a side ratio of $1:2$, so the perimeter of square $B$ is half of $60$, or $30$ centimeters.\n\n**The Full Solution:**\nStep 1: Square $A$ has side length $\\frac{60}{4} = 15$ centimeters and area $15^{2} = 225$ square centimeters.\nStep 2: Square $B$ has area $\\frac{225}{4} = 56.25$ square centimeters, so its side length is $\\sqrt{56.25} = 7.5$ centimeters.\nStep 3: The perimeter of square $B$ is $4(7.5) = 30$ centimeters. Check: $7.5^{2} = 56.25$, and $\\frac{56.25}{225} = \\frac{1}{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): multiplies the perimeter by $\\frac{1}{4}$, applying the area ratio to a length.\n* Choice C ($56.25$): reports the area of square $B$ instead of its perimeter.\n* Choice D ($120$): doubles the perimeter instead of halving it.\n\n**Test Day Takeaway:** Lengths scale by $k$ and areas scale by $k^{2}$. One fourth of the area means one half of the side and one half of the perimeter.",
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
    question: "In the figure shown, point $O$ is the center of the circle. What is the length of minor arc $AB$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 72, angleLabel: "72°", radius: 15, labelCenter: "O", showRadiusLabel: true, figureNote: true, labelPoint1: "A", labelPoint2: "B" } },
    choices: [
      // distractor: uses pi r instead of 2 pi r for the circumference, getting one fifth of 15 pi
      { id: "A", text: "$3\\pi$" },
      { id: "B", text: "$6\\pi$" },
      // distractor: gives the circumference of the whole circle, 30 pi
      { id: "C", text: "$30\\pi$" },
      // distractor: computes the area of the sector, one fifth of 225 pi
      { id: "D", text: "$45\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** A $72°$ arc is $\\frac{72}{360} = \\frac{1}{5}$ of the circumference $2\\pi(15) = 30\\pi$, which is $6\\pi$.\n\n**The Full Solution:**\nStep 1: The circumference of the circle is $2\\pi r = 2\\pi(15) = 30\\pi$.\nStep 2: The central angle is $72°$, which is $\\frac{72}{360} = \\frac{1}{5}$ of a full turn.\nStep 3: Arc $AB$ is $\\frac{1}{5}(30\\pi) = 6\\pi$. Check: five $72°$ arcs make $360°$, and $5(6\\pi) = 30\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3\\pi$): uses $\\pi r$ for the circumference, which is half of the correct $2\\pi r$.\n* Choice C ($30\\pi$): gives the circumference of the whole circle.\n* Choice D ($45\\pi$): computes $\\frac{1}{5}$ of the area $\\pi(15)^{2} = 225\\pi$, which is the area of the sector, not the arc length.\n\n**Test Day Takeaway:** Arc length $= \\frac{\\text{central angle}}{360°} \\times 2\\pi r$. The same fraction of $\\pi r^{2}$ gives the sector's area, so keep the two apart.",
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
    question: "Point $O$ is the center of the circle shown. What is the length of arc $AB$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 90, angleLabel: "90°", radius: 14, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: uses pi r instead of 2 pi r, halving the arc to 3.5 pi
      { id: "A", text: "$3.5\\pi$" },
      { id: "B", text: "$7\\pi$" },
      // distractor: gives half the circumference, the arc of a semicircle
      { id: "C", text: "$14\\pi$" },
      // distractor: gives the full circumference 2 pi (14) = 28 pi
      { id: "D", text: "$28\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** A $90°$ arc is one quarter of the circumference $2\\pi(14) = 28\\pi$, which is $7\\pi$.\n\n**The Full Solution:**\nStep 1: The circumference is $2\\pi r = 2\\pi(14) = 28\\pi$.\nStep 2: The central angle is $90°$, and $\\frac{90}{360} = \\frac{1}{4}$.\nStep 3: Arc $AB$ is $\\frac{1}{4}(28\\pi) = 7\\pi$. Check: four quarter arcs make the whole circle, and $4(7\\pi) = 28\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.5\\pi$): uses $\\pi r$ rather than $2\\pi r$ for the circumference.\n* Choice C ($14\\pi$): gives half the circumference, the arc of a semicircle rather than a quarter circle.\n* Choice D ($28\\pi$): reports the whole circumference.\n\n**Test Day Takeaway:** A $90°$ arc is exactly one fourth of $2\\pi r$; write the circumference first, then take the fraction.",
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
    question: "The circle shown has center $O$. What is the length of minor arc $AB$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 120, angleLabel: "120°", radius: 21, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", showRadiusLabel: true, figureNote: true } },
    choices: [
      { id: "A", text: "$14\\pi$" },
      // distractor: finds the major arc, two thirds of the circumference
      { id: "B", text: "$28\\pi$" },
      // distractor: gives the full circumference 2 pi (21) = 42 pi
      { id: "C", text: "$42\\pi$" },
      // distractor: computes the area of the sector, one third of 441 pi
      { id: "D", text: "$147\\pi$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** A $120°$ arc is $\\frac{1}{3}$ of the circumference $2\\pi(21) = 42\\pi$, which is $14\\pi$.\n\n**The Full Solution:**\nStep 1: The circumference is $2\\pi r = 2\\pi(21) = 42\\pi$.\nStep 2: The central angle is $120°$, and $\\frac{120}{360} = \\frac{1}{3}$.\nStep 3: Minor arc $AB$ is $\\frac{1}{3}(42\\pi) = 14\\pi$. Check: the major arc is $\\frac{2}{3}(42\\pi) = 28\\pi$, and $14\\pi + 28\\pi = 42\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($28\\pi$): uses $360° - 120° = 240°$, which gives the major arc instead of the minor arc.\n* Choice C ($42\\pi$): reports the whole circumference.\n* Choice D ($147\\pi$): takes $\\frac{1}{3}$ of the area $\\pi(21)^{2} = 441\\pi$, which is the sector's area.\n\n**Test Day Takeaway:** The minor arc goes with the central angle that is less than $180°$; take that fraction of $2\\pi r$.",
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
    question: "Point $O$ is the center of the circle shown, and the measure of angle $AOB$ is given in radians. What is the length of arc $AB$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 150, angleLabel: "5π/6", radius: 12, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", showRadiusLabel: true, figureNote: true } },
    choices: [
      // distractor: multiplies the angle by half the radius
      { id: "A", text: "$5\\pi$" },
      { id: "B", text: "$10\\pi$" },
      // distractor: multiplies the angle by the diameter 24 instead of the radius
      { id: "C", text: "$20\\pi$" },
      // distractor: computes the sector area one half r squared theta
      { id: "D", text: "$60\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** With the angle in radians, arc length is $s = r\\theta = 12 \\cdot \\frac{5\\pi}{6} = 10\\pi$.\n\n**The Full Solution:**\nStep 1: For a central angle $\\theta$ in radians, the arc length is $s = r\\theta$.\nStep 2: Here $r = 12$ and $\\theta = \\frac{5\\pi}{6}$.\nStep 3: $s = 12 \\cdot \\frac{5\\pi}{6} = 10\\pi$. Check: $\\frac{5\\pi}{6}$ is $\\frac{5}{12}$ of $2\\pi$, and $\\frac{5}{12}$ of the circumference $24\\pi$ is $10\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\pi$): multiplies the angle by $6$, half the radius.\n* Choice C ($20\\pi$): multiplies the angle by the diameter $24$ instead of the radius.\n* Choice D ($60\\pi$): computes $\\frac{1}{2}r^{2}\\theta = \\frac{1}{2}(144)\\left(\\frac{5\\pi}{6}\\right)$, the area of the sector.\n\n**Test Day Takeaway:** In radians the arc length is simply $s = r\\theta$; no $360$ is needed.",
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
    question: "In the circle shown, $O$ is the center and the length of arc $AB$ is $14\\pi$. What is the radius of the circle?",
    diagram: { type: "circleWithSector", params: { centralAngle: 40, angleLabel: "40°", labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
    choices: [
      // distractor: solves 2 pi r = 14 pi, treating the arc as the whole circumference
      { id: "A", text: "$7$" },
      // distractor: uses 40/180 instead of 40/360 for the fraction of the circle
      { id: "B", text: "$31.5$" },
      { id: "C", text: "$63$" },
      // distractor: uses pi r instead of 2 pi r for the circumference
      { id: "D", text: "$126$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $\\frac{40}{360}(2\\pi r) = 14\\pi$ simplifies to $\\frac{\\pi r}{4.5} = 14\\pi$, so $r = 63$.\n\n**The Full Solution:**\nStep 1: The arc is $\\frac{40}{360} = \\frac{1}{9}$ of the circumference, so $\\frac{1}{9}(2\\pi r) = 14\\pi$.\nStep 2: Multiply both sides by $9$: $2\\pi r = 126\\pi$.\nStep 3: Divide by $2\\pi$: $r = 63$. Check: $\\frac{1}{9}(2\\pi \\cdot 63) = \\frac{126\\pi}{9} = 14\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): solves $2\\pi r = 14\\pi$, treating the arc as the entire circumference.\n* Choice B ($31.5$): uses $\\frac{40}{180}$ as the fraction of the circle, which doubles the fraction and halves the radius.\n* Choice D ($126$): uses $\\pi r$ for the circumference, which gives the diameter instead of the radius.\n\n**Test Day Takeaway:** Write arc $=$ (fraction of the circle) $\\times 2\\pi r$, then solve for $r$; the fraction of a full circle uses $360°$.",
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
    question: "In the circle with center $O$ shown, angle $AOB$ measures $\\frac{2\\pi}{3}$ radians and minor arc $AB$ has a length of $14\\pi$ centimeters. What is the circumference, in centimeters, of the circle?",
    diagram: { type: "circleWithSector", params: { centralAngle: 120, angleLabel: "2π/3", labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
    choices: [
      // distractor: finds the radius 21 and writes it as pi r instead of 2 pi r
      { id: "A", text: "$21\\pi$" },
      // distractor: gives the length of the major arc, 42 pi - 14 pi
      { id: "B", text: "$28\\pi$" },
      { id: "C", text: "$42\\pi$" },
      // distractor: gives the area of the circle, pi times 21 squared
      { id: "D", text: "$441\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Arc Length**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** An angle of $\\frac{2\\pi}{3}$ radians is $\\frac{2\\pi/3}{2\\pi} = \\frac{1}{3}$ of a full turn, so the circumference is $3(14\\pi) = 42\\pi$.\n\n**The Full Solution:**\nStep 1: For an angle in radians, arc length is $s = r\\theta$, so $14\\pi = r\\left(\\frac{2\\pi}{3}\\right)$.\nStep 2: Solve for the radius: $r = 14\\pi \\cdot \\frac{3}{2\\pi} = 21$ centimeters.\nStep 3: The circumference is $2\\pi(21) = 42\\pi$ centimeters. Check: $\\frac{1}{3}(42\\pi) = 14\\pi$, the given arc length ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($21\\pi$): finds $r = 21$ but uses $\\pi r$ instead of $2\\pi r$.\n* Choice B ($28\\pi$): this is the major arc, $42\\pi - 14\\pi$, not the whole circle.\n* Choice D ($441\\pi$): this is $\\pi r^{2}$, the area of the circle.\n\n**Test Day Takeaway:** A radian angle over $2\\pi$ is the arc's share of the circumference; divide the arc length by that share to get the whole circle.",
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
    question: "$x^{2} + y^{2} + 6x - 2y + t = 0$\nIn the given equation, $t$ is a constant. The graph of the equation in the $xy$-plane is a circle with radius $4$. What is the value of $t$?",
    choices: [
      // distractor: forgets to add the completing constants 9 and 1, so -t = 16
      { id: "A", text: "$-16$" },
      { id: "B", text: "$-6$" },
      // distractor: sets 10 - t equal to the radius 4 instead of 16
      { id: "C", text: "$6$" },
      // distractor: makes a sign error moving t, writing t = 10 + 16
      { id: "D", text: "$26$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Completing both squares gives $(x + 3)^{2} + (y - 1)^{2} = 10 - t$, so $10 - t = 4^{2} = 16$ and $t = -6$.\n\n**The Full Solution:**\nStep 1: Group and move the constant: $(x^{2} + 6x) + (y^{2} - 2y) = -t$.\nStep 2: Complete each square by adding $9$ and $1$ to both sides: $(x + 3)^{2} + (y - 1)^{2} = 10 - t$.\nStep 3: The right side is $r^{2} = 16$, so $10 - t = 16$ and $t = -6$. Check: with $t = -6$, the point $(1, 1)$, which is $4$ units right of the center $(-3, 1)$, gives $1 + 1 + 6 - 2 - 6 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-16$): sets $-t = 16$ without adding the $9$ and $1$ used to complete the squares.\n* Choice C ($6$): sets $10 - t$ equal to the radius $4$ instead of $r^{2} = 16$.\n* Choice D ($26$): reaches $10 - t = 16$ but moves $t$ with the wrong sign.\n\n**Test Day Takeaway:** After completing the square, the constant on the right side is $r^{2}$, so square the radius before you set them equal.",
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
    question: "$x^{2} + y^{2} - 4x + 14y + m = 0$\nIn the given equation, $m$ is a constant. If the graph of the equation in the $xy$-plane is a circle that passes through the point $(6, -7)$, what is the value of $m$?",
    choices: [
      // distractor: gets 36 + 49 - 24 - 98 = -37 and stops without moving it to the other side
      { id: "A", text: "$-37$" },
      // distractor: reports r squared, 16, as the value of m
      { id: "B", text: "$16$" },
      { id: "C", text: "$37$" },
      // distractor: uses the radius 4 instead of r squared, solving 53 - m = 4
      { id: "D", text: "$49$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Substitute $(6, -7)$: $36 + 49 - 24 - 98 + m = 0$, so $-37 + m = 0$ and $m = 37$.\n\n**The Full Solution:**\nStep 1: A point on the circle satisfies the equation, so substitute $x = 6$ and $y = -7$.\nStep 2: $6^{2} + (-7)^{2} - 4(6) + 14(-7) + m = 36 + 49 - 24 - 98 + m = -37 + m$.\nStep 3: Set $-37 + m = 0$: $m = 37$. Check: completing the squares gives $(x - 2)^{2} + (y + 7)^{2} = 4 + 49 - 37 = 16$, and $(6, -7)$ is $4$ units from the center $(2, -7)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-37$): adds the four numbers and reports their sum instead of solving $-37 + m = 0$.\n* Choice B ($16$): completes the squares and reports $r^{2}$ instead of $m$.\n* Choice D ($49$): finds the radius $4$ and solves $53 - m = 4$, using $r$ where $r^{2}$ belongs.\n\n**Test Day Takeaway:** When a point lies on a graph, substitute it into the equation; that is usually faster than completing the square.",
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
    question: "$x^{2} + y^{2} + Dx + Ey + F = 0$\nIn the given equation, $D$, $E$, and $F$ are constants, and the table shows their values. The graph of the equation in the $xy$-plane is a circle. What are the coordinates $(x, y)$ of the center of the circle?",
    questionTable: { headers: ["Constant", "Value"], rows: [["$D$", "$-18$"], ["$E$", "$24$"], ["$F$", "$56$"]] },
    choices: [
      // distractor: halves D and E but does not negate them, giving (-9, 12)
      { id: "A", text: "$(-9, 12)$" },
      // distractor: negates D but not E, giving (9, 12)
      { id: "B", text: "$(9, 12)$" },
      // distractor: negates D and E but forgets to halve them, giving (18, -24)
      { id: "C", text: "$(18, -24)$" },
      { id: "D", text: "$(9, -12)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** For $x^{2} + y^{2} + Dx + Ey + F = 0$ the center is $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right) = \\left(-\\frac{-18}{2}, -\\frac{24}{2}\\right) = (9, -12)$.\n\n**The Full Solution:**\nStep 1: Substitute the values from the table: $x^{2} + y^{2} - 18x + 24y + 56 = 0$.\nStep 2: Complete each square: $x^{2} - 18x = (x - 9)^{2} - 81$ and $y^{2} + 24y = (y + 12)^{2} - 144$, so $(x - 9)^{2} + (y + 12)^{2} = 81 + 144 - 56 = 169$.\nStep 3: In the form $(x - h)^{2} + (y - k)^{2} = r^{2}$, the center is $(9, -12)$ and the radius is $13$. Check: the point $(22, -12)$ is $13$ units from the center, and $484 + 144 - 396 - 288 + 56 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-9, 12)$): halves $D$ and $E$ but skips the sign change.\n* Choice B ($(9, 12)$): changes the sign of $D$ but not $E$, so the $y$-coordinate has the wrong sign.\n* Choice C ($(18, -24)$): changes both signs but forgets the factor of $\\frac{1}{2}$.\n\n**Test Day Takeaway:** In general form the center is half of each linear coefficient with the sign flipped: $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$.",
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
    question: "The table shows equations of circle $A$ and circle $B$ in the $xy$-plane. Which statement about the two circles is true?",
    questionTable: { headers: ["Circle", "Equation"], rows: [["$A$", "$x^{2} + y^{2} - 8x + 6y + 16 = 0$"], ["$B$", "$x^{2} + y^{2} - 8x + 6y - 11 = 0$"]] },
    choices: [
      // distractor: compares r squared (36 and 9) instead of the radii
      { id: "A", text: "The circles have the same center, and the radius of circle $B$ is $4$ times the radius of circle $A$." },
      // distractor: reads the constant terms 16 and -11 as the sizes, so circle A looks larger
      { id: "B", text: "The circles have the same center, and the radius of circle $A$ is $2$ times the radius of circle $B$." },
      { id: "C", text: "The circles have the same center, and the radius of circle $B$ is $2$ times the radius of circle $A$." },
      // distractor: assumes different constant terms mean different centers
      { id: "D", text: "The circles have different centers, and the radius of circle $B$ is $2$ times the radius of circle $A$." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Both equations have $-8x + 6y$, so both circles have center $(4, -3)$; completing the square gives $r^{2} = 9$ for circle $A$ and $r^{2} = 36$ for circle $B$, so the radii are $3$ and $6$.\n\n**The Full Solution:**\nStep 1: Circle $A$: $(x - 4)^{2} + (y + 3)^{2} = 16 + 9 - 16 = 9$, so its center is $(4, -3)$ and its radius is $3$.\nStep 2: Circle $B$: $(x - 4)^{2} + (y + 3)^{2} = 16 + 9 + 11 = 36$, so its center is $(4, -3)$ and its radius is $6$.\nStep 3: The centers are the same, and $6 = 2(3)$, so the radius of circle $B$ is $2$ times the radius of circle $A$. Check: $(x - 4)^{2} + (y + 3)^{2} = 36$ expands to $x^{2} - 8x + y^{2} + 6y + 25 = 36$, which is $x^{2} + y^{2} - 8x + 6y - 11 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: compares $r^{2}$ values, $\\frac{36}{9} = 4$, instead of the radii, $\\frac{6}{3} = 2$.\n* Choice B: reads the constant terms $16$ and $-11$ as if they measured size; a smaller constant on the left means a larger $r^{2}$.\n* Choice D: the $x$ and $y$ terms set the center, and they match, so the centers are the same.\n\n**Test Day Takeaway:** In $x^{2} + y^{2} + Dx + Ey + F = 0$, the $x$ and $y$ terms fix the center; complete the square to find $r^{2}$, then take the square root before comparing radii.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "circle-in-general-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-geo-285",
    domain: "geometry",
    skills: ["circle-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$(x - 7)^{2} + y^{2} = 64$\nThe given equation represents the circle shown in the $xy$-plane, where $\\overline{AB}$ is a diameter of the circle. What is the length of $\\overline{AB}$?",
    diagram: { type: "circleWithInscribedTriangle", params: { labels: { A: "A", B: "B", C: "C", O: "O" }, angleAtAValue: 35, showDiameter: true, showCenter: true, showRightAngleAtC: true } },
    choices: [
      // distractor: reports the radius instead of the diameter
      { id: "A", text: "$8$" },
      // distractor: doubles the center's x-coordinate, 7, instead of the radius
      { id: "B", text: "$14$" },
      { id: "C", text: "$16$" },
      // distractor: reports r squared instead of the diameter
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $r^{2} = 64$, so $r = 8$ and the diameter is $2(8) = 16$.\n\n**The Full Solution:**\nStep 1: The equation has the form $(x - h)^{2} + (y - k)^{2} = r^{2}$ with $r^{2} = 64$.\nStep 2: The radius is $\\sqrt{64} = 8$.\nStep 3: A diameter is twice the radius, so $AB = 2(8) = 16$. Check: the center is $(7, 0)$, and the points $(-1, 0)$ and $(15, 0)$ both satisfy the equation and are $16$ apart ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): is the radius, half of the diameter.\n* Choice B ($14$): doubles the $7$ from the center $(7, 0)$, which tells where the circle is, not how big it is.\n* Choice D ($64$): is $r^{2}$; take the square root before doubling.\n\n**Test Day Takeaway:** The number on the right side of a circle equation is $r^{2}$: take its square root for the radius, then double it for the diameter.",
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
    question: "$x^{2} + y^{2} - 16x + 2cy + 39 = 0$\nIn the given equation, $c$ is a positive constant. The graph of the equation in the $xy$-plane is the circle shown. What is the value of $c$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 55, showAngleLabel: false, showAngleArc: false, radius: "13", showRadiusLabel: true, labelCenter: "O", labelPoint1: "P", labelPoint2: "Q" } },
    choices: [
      // distractor: takes the square root of 25, the constant left after completing the x-square, as c
      { id: "A", text: "$5$" },
      { id: "B", text: "$12$" },
      // distractor: treats the y-coefficient as c, adds (c/2) squared, and gets c squared / 4 = 144
      { id: "C", text: "$24$" },
      // distractor: reports c squared instead of c
      { id: "D", text: "$144$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** Completing the squares gives $(x - 8)^{2} + (y + c)^{2} = 64 + c^{2} - 39$. The figure shows $r = 13$, so $c^{2} + 25 = 169$ and $c = 12$.\n\n**The Full Solution:**\nStep 1: Group and move the constant: $(x^{2} - 16x) + (y^{2} + 2cy) = -39$.\nStep 2: Add $64$ and $c^{2}$ to both sides: $(x - 8)^{2} + (y + c)^{2} = c^{2} + 25$.\nStep 3: The radius shown is $13$, so $c^{2} + 25 = 169$, $c^{2} = 144$, and since $c > 0$, $c = 12$. Check: with $c = 12$ the center is $(8, -12)$, and the point $(21, -12)$ gives $441 + 144 - 336 - 288 + 39 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): takes $\\sqrt{25}$, where $25 = 64 - 39$ is the constant left after completing the square in $x$, as the value of $c$.\n* Choice C ($24$): treats the coefficient of $y$ as $c$ instead of $2c$, adds $\\left(\\frac{c}{2}\\right)^{2}$, and solves $\\frac{c^{2}}{4} = 144$.\n* Choice D ($144$): stops at $c^{2} = 144$ without taking the square root.\n\n**Test Day Takeaway:** When a constant sits inside a linear term, complete the square with it as a letter and set the right side equal to $r^{2}$.",
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
    question: "$(x - 3)^{2} + (y + 4)^{2} = 25$\nThe graph of the given equation in the $xy$-plane is a circle. The table shows the coordinates of four points. Which point lies on the circle?",
    questionTable: { headers: ["Point", "Coordinates"], rows: [["$W$", "$(3, 1)$"], ["$X$", "$(10, 20)$"], ["$Y$", "$(3, -4)$"], ["$Z$", "$(1, 7)$"]] },
    choices: [
      { id: "A", text: "$W$" },
      // distractor: treats 25 as the radius, so it looks for a point 25 units from the center
      { id: "B", text: "$X$" },
      // distractor: picks the center of the circle rather than a point on it
      { id: "C", text: "$Y$" },
      // distractor: flips the signs of the center to (-3, 4) before testing
      { id: "D", text: "$Z$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Substitute $W(3, 1)$: $(3 - 3)^{2} + (1 + 4)^{2} = 0 + 25 = 25$, so $W$ is on the circle.\n\n**The Full Solution:**\nStep 1: The circle has center $(3, -4)$ and radius $\\sqrt{25} = 5$.\nStep 2: Test $W(3, 1)$: $(3 - 3)^{2} + (1 + 4)^{2} = 0 + 25 = 25$, which satisfies the equation.\nStep 3: The other points fail: $X$ gives $49 + 576 = 625$, $Y$ gives $0$, and $Z$ gives $4 + 121 = 125$. Check: $W$ is directly $5$ units above the center ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($X$): is $25$ units from the center, which treats $25$ as the radius instead of $r^{2}$.\n* Choice C ($Y$): is the center of the circle, not a point on it.\n* Choice D ($Z$): would be on the circle only if the center were $(-3, 4)$, so it comes from flipping the signs of $h$ and $k$.\n\n**Test Day Takeaway:** A point is on a circle exactly when it satisfies the equation; substitute and compare with $r^{2}$.",
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
    question: "$(x - 2)^{2} + (y - 11)^{2} = 144$\nThe graph of the given equation in the $xy$-plane is the circle shown, with center $O$ and radius $r$. What is the value of $r$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 70, showAngleLabel: false, showAngleArc: false, radius: "r", showRadiusLabel: true, labelCenter: "O", labelPoint1: "P", labelPoint2: "Q" } },
    choices: [
      // distractor: reads the y-coordinate of the center, 11, as the radius
      { id: "A", text: "$11$" },
      { id: "B", text: "$12$" },
      // distractor: gives the diameter, 2 times 12
      { id: "C", text: "$24$" },
      // distractor: reports r squared, 144, as the radius
      { id: "D", text: "$144$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The right side is $r^{2} = 144$, so $r = 12$.\n\n**The Full Solution:**\nStep 1: A circle with center $(h, k)$ and radius $r$ has equation $(x - h)^{2} + (y - k)^{2} = r^{2}$.\nStep 2: Here $r^{2} = 144$.\nStep 3: Since $r > 0$, $r = \\sqrt{144} = 12$. Check: the point $(14, 11)$ is $12$ units right of the center $(2, 11)$, and $(14 - 2)^{2} + 0 = 144$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): takes a coordinate of the center, $(2, 11)$, as the radius.\n* Choice C ($24$): gives the diameter, $2r$.\n* Choice D ($144$): reports $r^{2}$ instead of $r$.\n\n**Test Day Takeaway:** The constant on the right side of standard form is $r^{2}$; take its square root.",
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
    question: "$(x + 4)^{2} + (y - 3)^{2} = 169$\nThe graph of the given equation in the $xy$-plane is a circle. The figure shows the center of the circle and a point on the circle. What is the distance between the two points shown?",
    diagram: { type: "coordinatePoints", params: { points: [[-4, 3], [8, 8]], xMin: -6, xMax: 10, yMin: -2, yMax: 10 } },
    choices: [
      // distractor: uses only the vertical change between the two points
      { id: "A", text: "$5$" },
      // distractor: uses only the horizontal change between the two points
      { id: "B", text: "$12$" },
      { id: "C", text: "$13$" },
      // distractor: reports r squared, 169, instead of the radius
      { id: "D", text: "$169$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The distance from the center to any point on the circle is the radius, $\\sqrt{169} = 13$.\n\n**The Full Solution:**\nStep 1: The equation has the form $(x - h)^{2} + (y - k)^{2} = r^{2}$ with $r^{2} = 169$.\nStep 2: Every point on a circle is one radius from the center, so the distance is $r = \\sqrt{169} = 13$.\nStep 3: Check with the figure: the center is $(-4, 3)$ and the point is $(8, 8)$, so the distance is $\\sqrt{12^{2} + 5^{2}} = \\sqrt{169} = 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): uses only the vertical change from $3$ to $8$.\n* Choice B ($12$): uses only the horizontal change from $-4$ to $8$.\n* Choice D ($169$): reports $r^{2}$ instead of $r$.\n\n**Test Day Takeaway:** The segment from the center to a point on the circle is a radius, so its length is $\\sqrt{r^{2}}$.",
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
    question: "The table shows the coordinates of points $P$ and $Q$, the endpoints of a diameter of a circle in the $xy$-plane. Which equation represents the circle?",
    diagram: { type: "dataTable", params: { headers: ["Point", "x", "y"], rows: [["P", "-5", "4"], ["Q", "7", "4"]] } },
    choices: [
      // distractor: uses the right center (1, 4) but writes the signs inside the squares backward
      { id: "A", text: "$(x + 1)^{2} + (y + 4)^{2} = 36$" },
      // distractor: uses the radius 6 on the right side without squaring it
      { id: "B", text: "$(x - 1)^{2} + (y - 4)^{2} = 6$" },
      { id: "C", text: "$(x - 1)^{2} + (y - 4)^{2} = 36$" },
      // distractor: uses the full diameter 12 as the radius, so r squared is 144
      { id: "D", text: "$(x - 1)^{2} + (y - 4)^{2} = 144$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The center is halfway between $P$ and $Q$, at $(1, 4)$, and the diameter is $7 - (-5) = 12$, so $r = 6$ and $r^{2} = 36$.\n\n**The Full Solution:**\nStep 1: $P$ and $Q$ have the same $y$-coordinate, so the diameter is horizontal and its length is $7 - (-5) = 12$. The radius is $6$.\nStep 2: The center is the point halfway between $P$ and $Q$: $\\left(\\frac{-5 + 7}{2}, 4\\right) = (1, 4)$.\nStep 3: The equation is $(x - 1)^{2} + (y - 4)^{2} = 6^{2} = 36$. Check: $P$ gives $(-6)^{2} + 0^{2} = 36$ and $Q$ gives $6^{2} + 0^{2} = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: has the center $(-1, -4)$, which reverses the signs of the coordinates of the center.\n* Choice B: puts the radius $6$ on the right side; the right side must be $r^{2}$.\n* Choice D: uses the diameter $12$ as the radius.\n\n**Test Day Takeaway:** The center of a circle is the middle of any diameter, the radius is half its length, and the right side of the equation is the radius squared.",
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
    question: "$(x - 16)^{2} + (y + 12)^{2} = 900$\nThe graph of the given equation in the $xy$-plane is a circle. The point $(a, -12)$ lies on the circle, where $a$ is a positive constant. What is the value of $a$?",
    choices: [
      // distractor: chooses the negative solution of (a - 16) squared = 900, which is ruled out
      { id: "A", text: "$-14$" },
      // distractor: reports the radius 30 instead of the x-coordinate
      { id: "B", text: "$30$" },
      { id: "C", text: "$46$" },
      // distractor: adds 16 to 900 without taking a square root
      { id: "D", text: "$916$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** With $y = -12$, $(a - 16)^{2} = 900$, so $a - 16 = \\pm 30$ and $a = 46$ or $a = -14$. Since $a > 0$, $a = 46$.\n\n**The Full Solution:**\nStep 1: Substitute $y = -12$: $(a - 16)^{2} + 0 = 900$.\nStep 2: Take square roots: $a - 16 = 30$ or $a - 16 = -30$, so $a = 46$ or $a = -14$.\nStep 3: Only $46$ is positive, so $a = 46$. Check: $(46 - 16)^{2} = 30^{2} = 900$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-14$): is the other solution of $(a - 16)^{2} = 900$, but $a$ is positive.\n* Choice B ($30$): reports the radius, which is the distance from the center to the point, not its $x$-coordinate.\n* Choice D ($916$): adds $16$ to $900$ without taking the square root.\n\n**Test Day Takeaway:** A squared term has two square roots; use the condition in the question to pick the right one.",
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
    question: "$(x - 6)^{2} + (y + 15)^{2} = k$\nIn the given equation, $k$ is a positive constant. The graph of the equation in the $xy$-plane is a circle. The points $(6, -23)$ and $(6, -7)$ are the endpoints of a diameter of the circle. What is the value of $k$?",
    choices: [
      // distractor: finds the radius, 8, but does not square it
      { id: "A", text: "$8$" },
      // distractor: uses the diameter, 16, as k
      { id: "B", text: "$16$" },
      { id: "C", text: "$64$" },
      // distractor: squares the diameter, 16 squared, instead of the radius
      { id: "D", text: "$256$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The diameter runs from $y = -23$ to $y = -7$, so it is $16$ long; the radius is $8$, and $k = r^{2} = 64$.\n\n**The Full Solution:**\nStep 1: In $(x - h)^{2} + (y - k)^{2} = r^{2}$ form, the right side $k$ is the square of the radius.\nStep 2: The endpoints $(6, -23)$ and $(6, -7)$ share an $x$-coordinate, so the diameter is $-7 - (-23) = 16$ and the radius is $8$.\nStep 3: $k = 8^{2} = 64$. Check: $(6, -7)$ gives $0^{2} + (-7 + 15)^{2} = 64$, and $(6, -23)$ gives $0^{2} + (-8)^{2} = 64$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): is the radius; the right side of the equation is the radius squared.\n* Choice B ($16$): is the length of the diameter.\n* Choice D ($256$): squares the diameter instead of the radius.\n\n**Test Day Takeaway:** The constant on the right side of a circle's equation is $r^{2}$; halve the diameter first, then square.",
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
    question: "A right circular cylinder has a radius of $4$ centimeters and a height of $9$ centimeters. What is the volume, in cubic centimeters, of the cylinder?",
    choices: [
      // distractor: multiplies pi by the radius and height without squaring the radius
      { id: "A", text: "$36\\pi$" },
      // distractor: uses the cone formula, one third pi r squared h
      { id: "B", text: "$48\\pi$" },
      // distractor: computes 2 pi r h, the area of the curved surface
      { id: "C", text: "$72\\pi$" },
      { id: "D", text: "$144\\pi$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $V = \\pi r^{2}h = \\pi(4)^{2}(9) = 144\\pi$ cubic centimeters.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^{2}h$.\nStep 2: Substitute $r = 4$ and $h = 9$: $V = \\pi(16)(9)$.\nStep 3: $V = 144\\pi$ cubic centimeters. Check: the base has area $16\\pi$, and $9$ layers of it make $144\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($36\\pi$): computes $\\pi rh$, leaving the radius unsquared.\n* Choice B ($48\\pi$): uses $\\frac{1}{3}\\pi r^{2}h$, the volume of a cone.\n* Choice C ($72\\pi$): computes $2\\pi rh$, the area of the curved side, not the volume.\n\n**Test Day Takeaway:** Cylinder volume is base area times height: $\\pi r^{2}h$.",
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
    question: "A right circular cylinder has a volume of $200\\pi$ cubic inches. The radius of the base of the cylinder is $5$ inches. What is the height, in inches, of the cylinder?",
    choices: [
      // distractor: divides by 2 r squared, using 50 pi as the base area
      { id: "A", text: "$4$" },
      { id: "B", text: "$8$" },
      // distractor: uses the cone formula, so 200 pi = one third pi (25) h
      { id: "C", text: "$24$" },
      // distractor: divides by r instead of r squared
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\pi(5)^{2}h = 200\\pi$ gives $25h = 200$, so $h = 8$ inches.\n\n**The Full Solution:**\nStep 1: Use $V = \\pi r^{2}h$ with $V = 200\\pi$ and $r = 5$: $\\pi(25)h = 200\\pi$.\nStep 2: Divide both sides by $\\pi$: $25h = 200$.\nStep 3: Divide by $25$: $h = 8$ inches. Check: $\\pi(5)^{2}(8) = 200\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): divides $200$ by $2r^{2} = 50$.\n* Choice C ($24$): uses $\\frac{1}{3}\\pi r^{2}h$, the cone formula.\n* Choice D ($40$): divides $200$ by the radius $5$ instead of by $r^{2} = 25$.\n\n**Test Day Takeaway:** To find a cylinder's height, divide the volume by the base area $\\pi r^{2}$.",
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
    question: "A cylindrical tank has an inside diameter of $24$ centimeters. The tank is filled with water to a depth of $15$ centimeters. What is the volume, in cubic centimeters, of the water in the tank?",
    choices: [
      // distractor: computes pi r h without squaring the radius
      { id: "A", text: "$180\\pi$" },
      // distractor: computes 2 pi r h, the area of the wetted side wall
      { id: "B", text: "$360\\pi$" },
      { id: "C", text: "$2{,}160\\pi$" },
      // distractor: uses the diameter 24 as the radius
      { id: "D", text: "$8{,}640\\pi$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The radius is $12$, so the water's volume is $\\pi(12)^{2}(15) = 2{,}160\\pi$ cubic centimeters.\n\n**The Full Solution:**\nStep 1: The water is a cylinder with radius $\\frac{24}{2} = 12$ centimeters and height $15$ centimeters.\nStep 2: Use $V = \\pi r^{2}h = \\pi(144)(15)$.\nStep 3: $V = 2{,}160\\pi$ cubic centimeters. Check: $\\frac{2{,}160\\pi}{\\pi(12)^{2}} = 15$, the depth of the water ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($180\\pi$): computes $\\pi rh = \\pi(12)(15)$ and never squares the radius.\n* Choice B ($360\\pi$): computes $2\\pi rh$, the area of the tank's side below the water line.\n* Choice D ($8{,}640\\pi$): uses the diameter $24$ as the radius.\n\n**Test Day Takeaway:** Halve a diameter before using $V = \\pi r^{2}h$.",
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
    question: "A right circular cylinder has a volume of $1{,}176\\pi$ cubic inches and a height of $24$ inches. What is the radius, in inches, of the base of the cylinder?",
    choices: [
      { id: "A", text: "$7$" },
      // distractor: gives the diameter, 2 times 7
      { id: "B", text: "$14$" },
      // distractor: divides 1,176 by 2h = 48 instead of solving for r squared
      { id: "C", text: "$24.5$" },
      // distractor: reports r squared, 49, as the radius
      { id: "D", text: "$49$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\pi r^{2}(24) = 1{,}176\\pi$ gives $r^{2} = 49$, so $r = 7$ inches.\n\n**The Full Solution:**\nStep 1: Use $V = \\pi r^{2}h$: $\\pi r^{2}(24) = 1{,}176\\pi$.\nStep 2: Divide both sides by $24\\pi$: $r^{2} = 49$.\nStep 3: Since $r > 0$, $r = 7$ inches. Check: $\\pi(7)^{2}(24) = 1{,}176\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($14$): gives the diameter instead of the radius.\n* Choice C ($24.5$): divides $1{,}176$ by $2h = 48$, treating the formula as if it were linear in $r$.\n* Choice D ($49$): stops at $r^{2} = 49$ without taking the square root.\n\n**Test Day Takeaway:** Solving a volume for a radius ends with a square root; check that the last step is $r$, not $r^{2}$.",
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
    question: "Right circular cylinders $A$ and $B$ have equal volumes. The radius of cylinder $A$ is $2$ times the radius of cylinder $B$. The height of cylinder $A$ is $k$ times the height of cylinder $B$. What is the value of $k$?",
    choices: [
      { id: "A", text: "$\\frac{1}{4}$" },
      // distractor: scales the height by the radius ratio, 1/2, instead of its square
      { id: "B", text: "$\\frac{1}{2}$" },
      // distractor: copies the radius ratio 2 as the height ratio
      { id: "C", text: "$2$" },
      // distractor: squares the radius ratio but forgets to take the reciprocal
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Doubling the radius multiplies the base area by $4$, so equal volumes need the height to be $\\frac{1}{4}$ as tall: $k = \\frac{1}{4}$.\n\n**The Full Solution:**\nStep 1: Let cylinder $B$ have radius $r$ and height $h$, so its volume is $\\pi r^{2}h$.\nStep 2: Cylinder $A$ has radius $2r$ and height $kh$, so its volume is $\\pi(2r)^{2}(kh) = 4k\\pi r^{2}h$.\nStep 3: Set the volumes equal: $4k\\pi r^{2}h = \\pi r^{2}h$, so $4k = 1$ and $k = \\frac{1}{4}$. Check: with $r = 1$, $h = 8$, cylinder $B$ holds $8\\pi$ and cylinder $A$ holds $\\pi(2)^{2}(2) = 8\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{2}$): scales the height by $\\frac{1}{2}$, as if volume depended on $r$ instead of $r^{2}$.\n* Choice C ($2$): copies the radius ratio as the height ratio.\n* Choice D ($4$): finds the factor $4$ for the base area but does not take its reciprocal.\n\n**Test Day Takeaway:** Volume depends on $r^{2}$, so multiplying the radius by $2$ multiplies the base area by $4$; keeping the volume fixed divides the height by $4$.",
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
    question: "A pipe is a hollow right circular cylinder that is $20$ centimeters long. Its outer radius is $6$ centimeters, and its inner radius is $5$ centimeters. What is the volume, in cubic centimeters, of the material that makes up the pipe?",
    choices: [
      // distractor: squares the wall thickness, computing pi times 1 squared times 20
      { id: "A", text: "$20\\pi$" },
      { id: "B", text: "$220\\pi$" },
      // distractor: multiplies the outer curved surface 2 pi r h by the thickness
      { id: "C", text: "$240\\pi$" },
      // distractor: reports the volume of the whole outer cylinder, pi times 36 times 20
      { id: "D", text: "$720\\pi$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The material is the outer cylinder minus the hollow: $\\pi(6^{2} - 5^{2})(20) = \\pi(11)(20) = 220\\pi$.\n\n**The Full Solution:**\nStep 1: The outer cylinder has volume $\\pi(6)^{2}(20) = 720\\pi$ cubic centimeters.\nStep 2: The hollow center has volume $\\pi(5)^{2}(20) = 500\\pi$ cubic centimeters.\nStep 3: The material is the difference: $720\\pi - 500\\pi = 220\\pi$ cubic centimeters. Check: the ring's cross section is $\\pi(36 - 25) = 11\\pi$, and $11\\pi(20) = 220\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20\\pi$): squares the thickness $6 - 5 = 1$, as if the wall were a solid cylinder of radius $1$.\n* Choice C ($240\\pi$): multiplies the outer curved surface $2\\pi(6)(20)$ by the thickness, which overstates the volume because the inner surface is smaller.\n* Choice D ($720\\pi$): gives the volume of the whole outer cylinder and ignores the hollow center.\n\n**Test Day Takeaway:** A pipe wall is a difference of two cylinders: subtract the inner volume from the outer volume.",
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
    question: "A circle in the $xy$-plane has center $(6, 8)$ and radius $10$. Which of the following points lies on the circle?",
    choices: [
      // distractor: subtracts the radius from both coordinates of the center
      { id: "A", text: "$(-4, -2)$" },
      { id: "B", text: "$(0, 0)$" },
      // distractor: picks a point 10 units from the origin instead of from the center
      { id: "C", text: "$(10, 0)$" },
      // distractor: adds the radius to both coordinates of the center
      { id: "D", text: "$(16, 18)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The distance from $(6, 8)$ to $(0, 0)$ is $\\sqrt{6^{2} + 8^{2}} = 10$, the radius.\n\n**The Full Solution:**\nStep 1: A point lies on the circle exactly when its distance from the center $(6, 8)$ is $10$.\nStep 2: For $(0, 0)$: $\\sqrt{(6 - 0)^{2} + (8 - 0)^{2}} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.\nStep 3: The other choices are $\\sqrt{200}$, $\\sqrt{80}$, and $\\sqrt{200}$ units from the center. Check: $(0 - 6)^{2} + (0 - 8)^{2} = 100 = 10^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-4, -2)$): subtracts $10$ from each coordinate, which moves $10\\sqrt{2}$ units diagonally.\n* Choice C ($(10, 0)$): is $10$ units from the origin, not from the center $(6, 8)$.\n* Choice D ($(16, 18)$): adds $10$ to each coordinate, which also moves $10\\sqrt{2}$ units.\n\n**Test Day Takeaway:** Test a point with the distance formula from the center; moving $r$ units in both $x$ and $y$ goes farther than $r$.",
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
    question: "A circle in the $xy$-plane has center $(-2, 9)$ and passes through the point $(-2, -6)$. What is the radius of the circle?",
    choices: [
      // distractor: adds the y-coordinates, 9 + (-6) = 3, instead of finding the distance between them
      { id: "A", text: "$3$" },
      { id: "B", text: "$15$" },
      // distractor: gives the diameter, 2 times 15
      { id: "C", text: "$30$" },
      // distractor: gives r squared, 15 squared
      { id: "D", text: "$225$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The two points share the $x$-coordinate $-2$, so the radius is the vertical distance $9 - (-6) = 15$.\n\n**The Full Solution:**\nStep 1: Every point on a circle is one radius from the center, so the radius is the distance from $(-2, 9)$ to $(-2, -6)$.\nStep 2: The points have the same $x$-coordinate, so they lie on a vertical line.\nStep 3: The distance between them is $9 - (-6) = 15$. Check: $(x + 2)^{2} + (y - 9)^{2} = 225$ at $(-2, -6)$ gives $0 + (-15)^{2} = 225$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): adds the $y$-coordinates, $9 + (-6)$, instead of subtracting them.\n* Choice C ($30$): is the diameter, twice the radius.\n* Choice D ($225$): is $r^{2}$, the number on the right side of the circle's equation.\n\n**Test Day Takeaway:** The radius is the distance from the center to any point on the circle; when the two points line up vertically or horizontally, just subtract the coordinates that differ.",
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
    question: "A circle in the $xy$-plane has its center at $(-4, -3)$ and passes through the point $(8, 2)$. Which equation represents this circle?",
    choices: [
      // distractor: flips the signs of the center coordinates inside the parentheses, centering the circle at (4, 3)
      { id: "A", text: "$(x - 4)^2 + (y - 3)^2 = 169$" },
      // distractor: uses the point on the circle, (8, 2), as the center
      { id: "B", text: "$(x - 8)^2 + (y - 2)^2 = 169$" },
      // distractor: puts the radius 13 on the right side instead of r squared, 169
      { id: "C", text: "$(x + 4)^2 + (y + 3)^2 = 13$" },
      { id: "D", text: "$(x + 4)^2 + (y + 3)^2 = 169$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The radius is the distance from $(-4, -3)$ to $(8, 2)$: $\\sqrt{12^2 + 5^2} = 13$, so the equation is $(x + 4)^2 + (y + 3)^2 = 169$.\n\n**The Full Solution:**\nStep 1: A circle with center $(h, k)$ and radius $r$ has equation $(x - h)^2 + (y - k)^2 = r^2$. With center $(-4, -3)$, the left side is $(x + 4)^2 + (y + 3)^2$.\nStep 2: The radius is the distance from the center to $(8, 2)$: $\\sqrt{(8 - (-4))^2 + (2 - (-3))^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$.\nStep 3: So $r^2 = 169$ and the equation is $(x + 4)^2 + (y + 3)^2 = 169$. Check: substituting $(8, 2)$ gives $12^2 + 5^2 = 169$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: writes $(x - 4)^2 + (y - 3)^2$, which places the center at $(4, 3)$ instead of $(-4, -3)$.\n* Choice B: centers the circle at $(8, 2)$, the point on the circle, rather than at the given center.\n* Choice C: uses the radius $13$ where $r^2 = 169$ belongs.\n\n**Test Day Takeaway:** The center goes inside the parentheses with its signs flipped, and the distance from the center to any point on the circle is the radius, which gets SQUARED on the right side.",
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
    question: "A circle in the $xy$-plane has center $(-8, 1)$ and passes through the point $(-3, 1)$. What is the radius of the circle?",
    choices: [
      { id: "A", text: "$5$" },
      // distractor: gives the diameter, 2 times 5
      { id: "B", text: "$10$" },
      // distractor: adds the sizes of the x-coordinates, 8 + 3, instead of finding the distance between them
      { id: "C", text: "$11$" },
      // distractor: gives r squared, 5 squared
      { id: "D", text: "$25$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The two points share the $y$-coordinate $1$, so the radius is the horizontal distance $-3 - (-8) = 5$.\n\n**The Full Solution:**\nStep 1: Every point on a circle is one radius from the center, so the radius is the distance from $(-8, 1)$ to $(-3, 1)$.\nStep 2: The points have the same $y$-coordinate, so they lie on a horizontal line.\nStep 3: The distance between them is $-3 - (-8) = 5$. Check: $(x + 8)^{2} + (y - 1)^{2} = 25$ at $(-3, 1)$ gives $5^{2} + 0 = 25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): is the diameter, twice the radius.\n* Choice C ($11$): adds $8$ and $3$, treating points on the same side of the $y$-axis as if they were on opposite sides.\n* Choice D ($25$): is $r^{2}$, the number on the right side of the circle's equation.\n\n**Test Day Takeaway:** The radius is the distance from the center to any point on the circle; for two points on a horizontal line, subtract the $x$-coordinates.",
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
    question: "$(x - 7)^2 + (y + 6)^2 = r^2$\nIn the $xy$-plane, the graph of the given equation is a circle that passes through the point $(-1, 9)$, where $r$ is a positive constant. What is the value of $r$?",
    choices: [
      // distractor: subtracts the two coordinate differences, 15 - 8 = 7, instead of combining their squares
      { id: "A", text: "$7$" },
      { id: "B", text: "$17$" },
      // distractor: adds the two coordinate differences, 8 + 15 = 23
      { id: "C", text: "$23$" },
      // distractor: reports r squared, 289, instead of r
      { id: "D", text: "$289$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The center is $(7, -6)$; the point is $8$ across and $15$ up from it, and $8$-$15$-$17$ is a Pythagorean triple, so $r = 17$.\n\n**The Full Solution:**\nStep 1: The equation has the form $(x - h)^2 + (y - k)^2 = r^2$, so the center is $(7, -6)$ and $r$ is the radius.\nStep 2: Substitute the point $(-1, 9)$: $(-1 - 7)^2 + (9 + 6)^2 = r^2$, so $64 + 225 = r^2$ and $r^2 = 289$.\nStep 3: Since $r$ is positive, $r = \\sqrt{289} = 17$. Check: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): subtracts the differences, $15 - 8$, rather than combining their squares.\n* Choice C ($23$): adds the differences, $8 + 15$, as if the path went along the grid lines.\n* Choice D ($289$): is $r^2$, the right side of the equation, not $r$.\n\n**Test Day Takeaway:** A point on the circle satisfies the equation, so substituting it gives $r^2$ directly; take the positive square root at the end.",
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
    question: "Circle $A$ in the $xy$-plane has center $(-9, 4)$ and passes through the point $(-1, -2)$. Circle $B$ has the same radius as circle $A$, has center $(6, k)$, and passes through the point $(6, -6)$. Which of the following could be the value of $k$?",
    choices: [
      // distractor: uses only the vertical difference 6 as the radius of circle A, so |k + 6| = 6 and k = -12
      { id: "A", text: "$-12$" },
      // distractor: writes the distance from (6, k) to (6, -6) as |k - 6| = 10, a sign error, giving k = -4
      { id: "B", text: "$-4$" },
      // distractor: uses only the horizontal difference 8 as the radius of circle A, so |k + 6| = 8 and k = 2
      { id: "C", text: "$2$" },
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** Circle $A$ has radius $\\sqrt{8^2 + 6^2} = 10$, so $(6, k)$ is $10$ units from $(6, -6)$: $k = 4$ or $k = -16$. Only $4$ is a choice.\n\n**The Full Solution:**\nStep 1: The radius of circle $A$ is the distance from $(-9, 4)$ to $(-1, -2)$: $\\sqrt{(-1 + 9)^2 + (-2 - 4)^2} = \\sqrt{64 + 36} = 10$.\nStep 2: Circle $B$ also has radius $10$. Its center $(6, k)$ and the point $(6, -6)$ share an $x$-coordinate, so the distance between them is $|k - (-6)| = |k + 6|$.\nStep 3: Set $|k + 6| = 10$: $k + 6 = 10$ gives $k = 4$, and $k + 6 = -10$ gives $k = -16$. Only $4$ appears among the choices. Check: the distance from $(6, 4)$ to $(6, -6)$ is $10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): uses $6$, the vertical difference alone, as circle $A$'s radius; then $|k + 6| = 6$ gives $k = -12$.\n* Choice B ($-4$): writes the distance as $|k - 6|$, dropping the negative sign of $-6$; then $|k - 6| = 10$ gives $k = -4$.\n* Choice C ($2$): uses $8$, the horizontal difference alone, as circle $A$'s radius; then $|k + 6| = 8$ gives $k = 2$.\n\n**Test Day Takeaway:** Find the shared radius first, then set the distance from the new center to its point equal to it; an absolute-value equation gives two candidates, so check which one is offered.",
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
    question: "What is the length of the hypotenuse of the right triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [12, 0], [12, 5]], sideLabels: ["12", "5", ""], rightAngleVertex: 1 } },
    choices: [
      // distractor: subtracts the legs, 12 - 5, instead of combining their squares
      { id: "A", text: "$7$" },
      { id: "B", text: "$13$" },
      // distractor: adds the legs, 12 + 5
      { id: "C", text: "$17$" },
      // distractor: computes the area, one half times 12 times 5, instead of a length
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Pythagorean Triple Recognition**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $5$-$12$-$13$ is a Pythagorean triple, so the hypotenuse is $13$.\n\n**The Full Solution:**\nStep 1: The legs of the right triangle have lengths $12$ and $5$; the hypotenuse $c$ is the side opposite the right angle.\nStep 2: By the Pythagorean theorem, $c^2 = 12^2 + 5^2 = 144 + 25 = 169$.\nStep 3: So $c = \\sqrt{169} = 13$. Check: $13$ is longer than either leg and shorter than $12 + 5 = 17$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): subtracts the legs instead of adding their squares.\n* Choice C ($17$): adds the legs; the hypotenuse is always shorter than the sum of the legs.\n* Choice D ($30$): is the area, $\\frac{1}{2}(12)(5)$, not a length.\n\n**Test Day Takeaway:** Know $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, and $7$-$24$-$25$ on sight; spotting one turns a calculation into recall.",
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
    question: "In triangle $PQR$, angle $Q$ is a right angle, $PQ = 7$, and $QR = 24$. What is the length of $\\overline{PR}$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 7]], labels: ["R", "Q", "P"], sideLabels: ["24", "7", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: doubles the shorter leg, 2 times 7, instead of using the Pythagorean theorem
      { id: "A", text: "$14$" },
      // distractor: subtracts the legs, 24 - 7 = 17
      { id: "B", text: "$17$" },
      { id: "C", text: "$25$" },
      // distractor: adds the legs, 7 + 24 = 31
      { id: "D", text: "$31$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Pythagorean Triple Recognition**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $7$-$24$-$25$ is a Pythagorean triple, so $PR = 25$.\n\n**The Full Solution:**\nStep 1: Angle $Q$ is the right angle, so $\\overline{PR}$, the side opposite it, is the hypotenuse, and $\\overline{PQ}$ and $\\overline{QR}$ are the legs.\nStep 2: By the Pythagorean theorem, $PR^2 = 7^2 + 24^2 = 49 + 576 = 625$.\nStep 3: So $PR = \\sqrt{625} = 25$. Check: $25$ is longer than $24$ and shorter than $7 + 24 = 31$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): doubles the shorter leg, which has no basis in the Pythagorean theorem.\n* Choice B ($17$): subtracts the legs instead of adding their squares.\n* Choice D ($31$): adds the legs; the hypotenuse is always shorter than their sum.\n\n**Test Day Takeaway:** Name the hypotenuse from the right angle first: it is the side whose endpoints are the two OTHER vertices.",
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
    question: "What is the area, in square centimeters, of the right triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [45, 0], [45, 28]], sideLabels: ["", "28 cm", "53 cm"], rightAngleVertex: 1 } },
    choices: [
      { id: "A", text: "$630$" },
      // distractor: uses the hypotenuse as the base, one half times 53 times 28
      { id: "B", text: "$742$" },
      // distractor: finds the missing leg, 45, but forgets the factor of one half: 45 times 28
      { id: "C", text: "$1{,}260$" },
      // distractor: multiplies the hypotenuse by the given leg, 53 times 28, with no factor of one half
      { id: "D", text: "$1{,}484$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Pythagorean Triple Recognition**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $28$-$45$-$53$ is a Pythagorean triple, so the other leg is $45$ and the area is $\\frac{1}{2}(45)(28) = 630$.\n\n**The Full Solution:**\nStep 1: The $53$-centimeter side is opposite the right angle, so it is the hypotenuse; the legs are $28$ and an unknown length $b$.\nStep 2: By the Pythagorean theorem, $b^2 = 53^2 - 28^2 = 2{,}809 - 784 = 2{,}025$, so $b = 45$.\nStep 3: The legs are perpendicular, so they serve as base and height: area $= \\frac{1}{2}(45)(28) = 630$. Check: $45^2 + 28^2 = 2{,}025 + 784 = 2{,}809 = 53^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($742$): uses the hypotenuse as the base; the hypotenuse is not perpendicular to the $28$-centimeter leg.\n* Choice C ($1{,}260$): finds the leg $45$ correctly but leaves off the $\\frac{1}{2}$.\n* Choice D ($1{,}484$): multiplies $53$ by $28$ with no $\\frac{1}{2}$ and with the wrong base.\n\n**Test Day Takeaway:** The area of a right triangle is half the product of its LEGS, so when the hypotenuse is given, find the missing leg first.",
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
    question: "What is the perimeter, in inches, of the right triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [21, 0], [21, 20]], sideLabels: ["21 in", "", "29 in"], rightAngleVertex: 1 } },
    choices: [
      // distractor: adds only the two labeled sides, 21 + 29
      { id: "A", text: "$50$" },
      // distractor: takes the missing leg as 29 - 21 = 8, giving 21 + 8 + 29
      { id: "B", text: "$58$" },
      { id: "C", text: "$70$" },
      // distractor: computes the area, one half times 21 times 20, instead of the perimeter
      { id: "D", text: "$210$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Pythagorean Triple Recognition**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $20$-$21$-$29$ is a Pythagorean triple, so the missing leg is $20$ and the perimeter is $21 + 20 + 29 = 70$.\n\n**The Full Solution:**\nStep 1: The $29$-inch side is opposite the right angle, so it is the hypotenuse; the legs are $21$ and an unknown length $b$.\nStep 2: By the Pythagorean theorem, $b^2 = 29^2 - 21^2 = 841 - 441 = 400$, so $b = 20$.\nStep 3: The perimeter is $21 + 20 + 29 = 70$ inches. Check: $20^2 + 21^2 = 400 + 441 = 841 = 29^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($50$): adds the two labeled sides and leaves out the third side.\n* Choice B ($58$): takes the missing leg as $29 - 21 = 8$; a leg comes from subtracting SQUARES, not lengths.\n* Choice D ($210$): is the area, $\\frac{1}{2}(21)(20)$, not the perimeter.\n\n**Test Day Takeaway:** Add $20$-$21$-$29$ to your list of triples; a missing leg is $\\sqrt{c^2 - a^2}$, never $c - a$.",
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
    question: "The right triangle shown is formed by two sides and a diagonal of a rectangle. What is the area, in square inches, of the rectangle?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [35, 0], [35, 12]], sideLabels: ["", "12 in", "37 in"], rightAngleVertex: 1 } },
    choices: [
      // distractor: finds the area of the triangle, one half times 35 times 12, instead of the rectangle
      { id: "A", text: "$210$" },
      // distractor: uses the diagonal as a side of the triangle with height 12: one half times 37 times 12
      { id: "B", text: "$222$" },
      { id: "C", text: "$420$" },
      // distractor: multiplies the diagonal by the short side, 37 times 12, as if the diagonal were a side of the rectangle
      { id: "D", text: "$444$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Pythagorean Triple Recognition**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $12$-$35$-$37$ is a Pythagorean triple, so the rectangle is $35$ by $12$ and its area is $420$.\n\n**The Full Solution:**\nStep 1: The diagonal of the rectangle is the hypotenuse of the triangle, $37$ inches, and the sides of the rectangle are the legs: $12$ inches and an unknown length $L$.\nStep 2: By the Pythagorean theorem, $L^2 = 37^2 - 12^2 = 1{,}369 - 144 = 1{,}225$, so $L = 35$.\nStep 3: The rectangle's area is $35 \\times 12 = 420$ square inches. Check: $35^2 + 12^2 = 1{,}225 + 144 = 1{,}369 = 37^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($210$): is the area of the triangle, which is only half of the rectangle.\n* Choice B ($222$): is $\\frac{1}{2}(37)(12)$, which treats the diagonal as a base perpendicular to the $12$-inch side.\n* Choice D ($444$): multiplies the diagonal by the short side; the diagonal is not a side of the rectangle.\n\n**Test Day Takeaway:** A diagonal splits a rectangle into two congruent right triangles, so the rectangle's sides are the triangle's legs, and the rectangle's area is twice the triangle's.",
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
    question: "In right triangle $JKL$, angle $K$ is the right angle, $JL = 37$, and $KL$ is $23$ greater than $JK$. What is the perimeter of triangle $JKL$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [12, 0], [12, 35]], labels: ["J", "K", "L"], sideLabels: ["", "", "37"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: adds only the two legs, 12 + 35, leaving out the hypotenuse
      { id: "A", text: "$47$" },
      // distractor: adds the two given numbers, 37 + 23, instead of finding the legs
      { id: "B", text: "$60$" },
      { id: "C", text: "$84$" },
      // distractor: computes the area, one half times 12 times 35, instead of the perimeter
      { id: "D", text: "$210$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Pythagorean Triple Recognition**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Legs that differ by $23$ with hypotenuse $37$ point to the triple $12$-$35$-$37$, so the perimeter is $12 + 35 + 37 = 84$.\n\n**The Full Solution:**\nStep 1: Let $JK = x$, so $KL = x + 23$. The hypotenuse is $JL = 37$, opposite the right angle at $K$.\nStep 2: By the Pythagorean theorem, $x^2 + (x + 23)^2 = 37^2$, so $2x^2 + 46x + 529 = 1{,}369$, which simplifies to $x^2 + 23x - 420 = 0$, or $(x + 35)(x - 12) = 0$.\nStep 3: Since $x > 0$, $x = 12$ and $KL = 35$. The perimeter is $12 + 35 + 37 = 84$. Check: $12^2 + 35^2 = 144 + 1{,}225 = 1{,}369 = 37^2$ and $35 - 12 = 23$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($47$): adds the legs $12$ and $35$ but leaves out the hypotenuse $37$.\n* Choice B ($60$): adds $37$ and $23$, the two numbers in the stem; $23$ is a difference of lengths, not a side.\n* Choice D ($210$): is the area, $\\frac{1}{2}(12)(35)$, not the perimeter.\n\n**Test Day Takeaway:** When two legs are described by their difference, write one leg as $x$ and the other as $x$ plus that difference; a known triple often confirms the root before you finish factoring.",
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
    question: "A rectangle has a width of $w$ centimeters and a length that is $3$ centimeters greater than its width. Which expression represents the area, in square centimeters, of the rectangle?",
    choices: [
      // distractor: gives the length of the rectangle, not its area
      { id: "A", text: "$w + 3$" },
      // distractor: adds the width and the length instead of multiplying them
      { id: "B", text: "$2w + 3$" },
      // distractor: multiplies w by w but does not distribute w across the 3
      { id: "C", text: "$w^2 + 3$" },
      { id: "D", text: "$w^2 + 3w$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Area is width times length: $w(w + 3) = w^2 + 3w$.\n\n**The Full Solution:**\nStep 1: The width is $w$, and the length is $3$ more than the width, or $w + 3$.\nStep 2: The area of a rectangle is width times length: $w(w + 3)$.\nStep 3: Distribute: $w(w + 3) = w^2 + 3w$. Check with $w = 4$: a $4$ by $7$ rectangle has area $28$, and $4^2 + 3(4) = 28$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($w + 3$): is the length, not the area.\n* Choice B ($2w + 3$): adds the width and the length instead of multiplying them.\n* Choice C ($w^2 + 3$): multiplies $w$ by $w$ but forgets to multiply $w$ by $3$.\n\n**Test Day Takeaway:** Write the length in terms of $w$ first, then multiply and distribute; test the expression with one convenient number.",
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
    question: "A rectangle has a perimeter of $40$ inches and a length of $12$ inches. What is the area, in square inches, of the rectangle?",
    choices: [
      { id: "A", text: "$96$" },
      // distractor: treats the rectangle as a square with side 12
      { id: "B", text: "$144$" },
      // distractor: takes the width as 40 - 12 = 28, subtracting only one length from the perimeter
      { id: "C", text: "$336$" },
      // distractor: multiplies the perimeter by the length, 40 times 12
      { id: "D", text: "$480$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The width is $\\frac{40 - 2(12)}{2} = 8$, so the area is $12 \\times 8 = 96$.\n\n**The Full Solution:**\nStep 1: The perimeter is $2L + 2W$, so $2(12) + 2W = 40$.\nStep 2: Then $2W = 16$ and $W = 8$ inches.\nStep 3: The area is $L \\times W = 12 \\times 8 = 96$ square inches. Check: $2(12) + 2(8) = 24 + 16 = 40$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($144$): squares the length, as if the rectangle were a square with side $12$.\n* Choice C ($336$): takes the width as $40 - 12 = 28$; the perimeter includes the length twice and the width twice.\n* Choice D ($480$): multiplies the perimeter by the length, mixing a length total with a side.\n\n**Test Day Takeaway:** Perimeter counts every side, so subtract BOTH lengths and then split what is left between the two widths.",
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
    question: "A rectangle has a length of $9$ centimeters and a width of $5$ centimeters. What is the area, in square centimeters, of the rectangle?",
    choices: [
      // distractor: adds the length and the width, 9 + 5
      { id: "A", text: "$14$" },
      // distractor: uses the triangle formula, one half times 9 times 5
      { id: "B", text: "$22.5$" },
      // distractor: computes the perimeter, 2(9) + 2(5)
      { id: "C", text: "$28$" },
      { id: "D", text: "$45$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Area is length times width: $9 \\times 5 = 45$.\n\n**The Full Solution:**\nStep 1: The area of a rectangle is length times width.\nStep 2: Here that is $9 \\times 5$.\nStep 3: $9 \\times 5 = 45$ square centimeters. Check: $45 \\div 9 = 5$, the width ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): adds the two dimensions instead of multiplying them.\n* Choice B ($22.5$): includes a factor of $\\frac{1}{2}$, which belongs to the area of a triangle.\n* Choice C ($28$): is the perimeter, $2(9) + 2(5)$, not the area.\n\n**Test Day Takeaway:** Area multiplies the two dimensions and is measured in square units; perimeter adds all four sides.",
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
    question: "A rectangle has a length of $3k$ inches and a width of $(k + 6)$ inches, where $k$ is a positive constant. The area of the rectangle is $216$ square inches. What is the length, in inches, of the rectangle?",
    choices: [
      // distractor: solves for k = 6 and reports it as the length
      { id: "A", text: "$6$" },
      // distractor: reports the width, k + 6 = 12, instead of the length
      { id: "B", text: "$12$" },
      { id: "C", text: "$18$" },
      // distractor: divides the area by 3 and reports 216/3 = 72
      { id: "D", text: "$72$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $3k(k + 6) = 216$ gives $k(k + 6) = 72$, so $k = 6$ and the length is $3(6) = 18$.\n\n**The Full Solution:**\nStep 1: Area is length times width: $3k(k + 6) = 216$. Divide both sides by $3$: $k(k + 6) = 72$, or $k^2 + 6k - 72 = 0$.\nStep 2: Factor: $(k + 12)(k - 6) = 0$. Since $k$ is positive, $k = 6$.\nStep 3: The length is $3k = 18$ inches. Check: the width is $6 + 6 = 12$, and $18 \\times 12 = 216$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): is the value of $k$, not the length $3k$.\n* Choice B ($12$): is the width, $k + 6$, not the length.\n* Choice D ($72$): divides the area by $3$ and stops; $72$ is $k(k + 6)$, not a side.\n\n**Test Day Takeaway:** After you solve for the constant, plug it back into the expression the question asks about.",
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
    question: "A rectangle has side lengths of $(2k + 1)$ meters and $(k - 2)$ meters. Its area is $16$ square meters greater than the area of a square with side length $k$ meters. What is the value of $k$?",
    choices: [
      // distractor: expands (2k + 1)(k - 2) as 2k^2 + 3k - 2, a sign error on the middle term, which leads to k^2 + 3k - 18 = 0 and k = 3
      { id: "A", text: "$3$" },
      { id: "B", text: "$6$" },
      // distractor: reports the side length 2k + 1 = 13 instead of k
      { id: "C", text: "$13$" },
      // distractor: reports the rectangle's area, 13 times 4 = 52, instead of k
      { id: "D", text: "$52$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $2k^2 - 3k - 2 = k^2 + 16$ becomes $k^2 - 3k - 18 = 0$, or $(k - 6)(k + 3) = 0$, so $k = 6$.\n\n**The Full Solution:**\nStep 1: The rectangle's area is $(2k + 1)(k - 2) = 2k^2 - 4k + k - 2 = 2k^2 - 3k - 2$, and the square's area is $k^2$.\nStep 2: \"$16$ square meters greater\" gives $2k^2 - 3k - 2 = k^2 + 16$, so $k^2 - 3k - 18 = 0$.\nStep 3: Factor: $(k - 6)(k + 3) = 0$. A side length must be positive, so $k = 6$. Check: the rectangle is $13$ by $4$ with area $52$, the square has area $36$, and $52 - 36 = 16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): comes from expanding $(2k + 1)(k - 2)$ as $2k^2 + 3k - 2$; the middle term is $-4k + k = -3k$.\n* Choice C ($13$): is the side length $2k + 1$, not $k$.\n* Choice D ($52$): is the area of the rectangle, not the value of $k$.\n\n**Test Day Takeaway:** Write each area as an expression, set up \"greater by\" as an equation, and discard any root that makes a length negative.",
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
    question: "The length of a rectangle is $5$ inches more than twice its width. The area of the rectangle is $150$ square inches. What is the perimeter, in inches, of the rectangle?",
    choices: [
      // distractor: adds the length and the width once, 20 + 7.5, which is half the perimeter
      { id: "A", text: "$27.5$" },
      // distractor: counts the length twice but the width once, 2(20) + 7.5
      { id: "B", text: "$47.5$" },
      // distractor: reads the length as w + 5 instead of 2w + 5, giving a 10 by 15 rectangle with perimeter 50
      { id: "C", text: "$50$" },
      { id: "D", text: "$55$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** $w(2w + 5) = 150$ gives $w = 7.5$, so the rectangle is $7.5$ by $20$ and the perimeter is $2(7.5 + 20) = 55$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width; the length is $2w + 5$. The area gives $w(2w + 5) = 150$, or $2w^2 + 5w - 150 = 0$.\nStep 2: Factor: $(2w - 15)(w + 10) = 0$. Since $w > 0$, $w = 7.5$, and the length is $2(7.5) + 5 = 20$.\nStep 3: The perimeter is $2(7.5) + 2(20) = 55$ inches. Check: $7.5 \\times 20 = 150$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($27.5$): is $7.5 + 20$, half the perimeter; a rectangle has two lengths and two widths.\n* Choice B ($47.5$): counts both lengths but only one width.\n* Choice C ($50$): reads the length as $w + 5$; then $w(w + 5) = 150$ gives a $10$ by $15$ rectangle.\n\n**Test Day Takeaway:** Translate \"$5$ more than twice\" as $2w + 5$, solve the quadratic for the width, and finish by answering the question that was asked: here, the perimeter.",
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
    question: "In the right triangle shown, what is the value of $c$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [56, 0], [56, 33]], sideLabels: ["56", "33", "c"], rightAngleVertex: 1 } },
    choices: [
      // distractor: subtracts the legs, 56 - 33
      { id: "A", text: "$23$" },
      { id: "B", text: "$65$" },
      // distractor: adds the legs, 56 + 33
      { id: "C", text: "$89$" },
      // distractor: computes the area, one half times 56 times 33
      { id: "D", text: "$924$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $c = \\sqrt{33^2 + 56^2} = \\sqrt{4{,}225} = 65$.\n\n**The Full Solution:**\nStep 1: The sides of length $33$ and $56$ meet at the right angle, so they are the legs, and $c$ is the hypotenuse.\nStep 2: By the Pythagorean theorem, $c^2 = 33^2 + 56^2 = 1{,}089 + 3{,}136 = 4{,}225$.\nStep 3: So $c = \\sqrt{4{,}225} = 65$. Check: $65^2 = 4{,}225$, and $65$ lies between $56$ and $33 + 56 = 89$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): subtracts the legs instead of adding their squares.\n* Choice C ($89$): adds the legs; the hypotenuse is always shorter than their sum.\n* Choice D ($924$): is the area, $\\frac{1}{2}(33)(56)$, not a length.\n\n**Test Day Takeaway:** Square, add, square root: $c^2 = a^2 + b^2$ for the side opposite the right angle.",
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
    question: "In triangle $DEF$, angle $E$ is a right angle. If $DE = 5$ and $DF = 13$, what is the length of $\\overline{EF}$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [5, 0], [5, 12]], labels: ["D", "E", "F"], sideLabels: ["5", "", "13"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: subtracts the two given sides, 13 - 5
      { id: "A", text: "$8$" },
      { id: "B", text: "$12$" },
      // distractor: adds the two given sides, 13 + 5
      { id: "C", text: "$18$" },
      // distractor: stops at EF squared, 169 - 25 = 144, without taking the square root
      { id: "D", text: "$144$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $5$-$12$-$13$ is a Pythagorean triple, so $EF = 12$.\n\n**The Full Solution:**\nStep 1: Angle $E$ is the right angle, so $\\overline{DF}$ is the hypotenuse and $\\overline{DE}$ and $\\overline{EF}$ are the legs.\nStep 2: By the Pythagorean theorem, $EF^2 = DF^2 - DE^2 = 169 - 25 = 144$.\nStep 3: So $EF = \\sqrt{144} = 12$. Check: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): subtracts the side lengths instead of their squares.\n* Choice C ($18$): adds the side lengths; a leg must be shorter than the hypotenuse.\n* Choice D ($144$): is $EF^2$; take the square root.\n\n**Test Day Takeaway:** When the hypotenuse is one of the given sides, SUBTRACT the squares to find a leg.",
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
    question: "What is the perimeter, in centimeters, of the right triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15, 0], [15, 36]], sideLabels: ["15 cm", "", "39 cm"], rightAngleVertex: 1 } },
    choices: [
      // distractor: adds only the two labeled sides, 15 + 39
      { id: "A", text: "$54$" },
      // distractor: takes the missing leg as 39 - 15 = 24, giving 15 + 24 + 39
      { id: "B", text: "$78$" },
      { id: "C", text: "$90$" },
      // distractor: computes the area, one half times 15 times 36, instead of the perimeter
      { id: "D", text: "$270$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The missing leg is $\\sqrt{39^2 - 15^2} = 36$, so the perimeter is $15 + 36 + 39 = 90$.\n\n**The Full Solution:**\nStep 1: The $39$-centimeter side is opposite the right angle, so it is the hypotenuse; the legs are $15$ and an unknown length $b$.\nStep 2: By the Pythagorean theorem, $b^2 = 39^2 - 15^2 = 1{,}521 - 225 = 1{,}296$, so $b = 36$.\nStep 3: The perimeter is $15 + 36 + 39 = 90$ centimeters. Check: $15^2 + 36^2 = 225 + 1{,}296 = 1{,}521 = 39^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($54$): adds the two labeled sides and leaves out the third side.\n* Choice B ($78$): takes the missing leg as $39 - 15 = 24$; subtract the squares, not the lengths.\n* Choice D ($270$): is the area, $\\frac{1}{2}(15)(36)$, not the perimeter.\n\n**Test Day Takeaway:** $15$-$36$-$39$ is $5$-$12$-$13$ scaled by $3$; dividing out a common factor often reveals the triple.",
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
    question: "A straight ramp rises $1.4$ meters over a horizontal distance of $4.8$ meters, as shown. What is the length, in meters, of the ramp?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [4.8, 0], [4.8, 1.4]], sideLabels: ["4.8 m", "1.4 m", ""], rightAngleVertex: 1 } },
    choices: [
      // distractor: subtracts the two distances, 4.8 - 1.4
      { id: "A", text: "$3.4$" },
      { id: "B", text: "$5$" },
      // distractor: adds the two distances, 4.8 + 1.4
      { id: "C", text: "$6.2$" },
      // distractor: stops at the square of the length, 1.4^2 + 4.8^2 = 25
      { id: "D", text: "$25$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $1.4^2 + 4.8^2 = 1.96 + 23.04 = 25$, so the ramp is $\\sqrt{25} = 5$ meters.\n\n**The Full Solution:**\nStep 1: The rise and the horizontal distance are perpendicular, so they are the legs of a right triangle and the ramp is the hypotenuse.\nStep 2: By the Pythagorean theorem, $L^2 = 1.4^2 + 4.8^2 = 1.96 + 23.04 = 25$.\nStep 3: So $L = \\sqrt{25} = 5$ meters. Check: these are the sides $7$-$24$-$25$ scaled by $0.2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.4$): subtracts the two distances instead of adding their squares.\n* Choice C ($6.2$): adds the two distances, the length of the path along the legs.\n* Choice D ($25$): is $L^2$; take the square root.\n\n**Test Day Takeaway:** Decimal legs often hide a scaled triple: $1.4$ and $4.8$ are $7$ and $24$ times $0.2$.",
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
    question: "The hypotenuse of the right triangle shown has length $6.5$. What is the value of $x$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [6, 0], [6, 2.5]], sideLabels: ["6", "x", ""], rightAngleVertex: 1 } },
    choices: [
      // distractor: subtracts the side lengths, 6.5 - 6
      { id: "A", text: "$0.5$" },
      { id: "B", text: "$2.5$" },
      // distractor: stops at x squared, 42.25 - 36 = 6.25
      { id: "C", text: "$6.25$" },
      // distractor: adds the side lengths, 6.5 + 6
      { id: "D", text: "$12.5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $x^2 = 6.5^2 - 6^2 = 42.25 - 36 = 6.25$, so $x = 2.5$.\n\n**The Full Solution:**\nStep 1: The sides of length $6$ and $x$ are the legs, and $6.5$ is the hypotenuse.\nStep 2: By the Pythagorean theorem, $x^2 + 6^2 = 6.5^2$, so $x^2 = 42.25 - 36 = 6.25$.\nStep 3: So $x = \\sqrt{6.25} = 2.5$. Check: $2.5^2 + 6^2 = 6.25 + 36 = 42.25 = 6.5^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.5$): subtracts the side lengths instead of their squares.\n* Choice C ($6.25$): is $x^2$; take the square root.\n* Choice D ($12.5$): adds the side lengths; a leg must be shorter than the hypotenuse.\n\n**Test Day Takeaway:** Doubling the sides gives $5$-$12$-$13$, so $x$ is half of $5$: scaled triples work with decimals too.",
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
    question: "A rectangle has a diagonal of length $4\\sqrt{10}$ centimeters. The length of the rectangle is $3$ times its width. What is the area, in square centimeters, of the rectangle?",
    choices: [
      // distractor: finds the length, 12, and stops before multiplying by the width
      { id: "A", text: "$12$" },
      // distractor: finds w squared = 16 and stops, which is the area of a square with the width as its side
      { id: "B", text: "$16$" },
      { id: "C", text: "$48$" },
      // distractor: squares the diagonal, (4 sqrt 10) squared = 160, and reports it as the area
      { id: "D", text: "$160$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Right Triangle Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** With width $w$ and length $3w$, $w^{2} + (3w)^{2} = (4\\sqrt{10})^{2}$ gives $10w^{2} = 160$, so $w = 4$, the length is $12$, and the area is $4(12) = 48$.\n\n**The Full Solution:**\nStep 1: The diagonal splits the rectangle into two right triangles with legs $w$ and $3w$ and hypotenuse $4\\sqrt{10}$.\nStep 2: By the Pythagorean theorem, $w^{2} + 9w^{2} = 16(10)$, so $10w^{2} = 160$, $w^{2} = 16$, and $w = 4$. The length is $3(4) = 12$.\nStep 3: The area is $12(4) = 48$ square centimeters. Check: $4^{2} + 12^{2} = 16 + 144 = 160 = (4\\sqrt{10})^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): is the length of the rectangle, not its area.\n* Choice B ($16$): is $w^{2}$; the area is $w(3w) = 3w^{2}$, not $w^{2}$.\n* Choice D ($160$): is the square of the diagonal, which is the sum of the squares of the sides, not their product.\n\n**Test Day Takeaway:** A rectangle's diagonal is the hypotenuse of a right triangle whose legs are the sides; write both sides in one variable, solve, then multiply for the area.",
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
    question: "A triangle has a base of $34$ inches and a height of $15$ inches. What is the area, in square inches, of the triangle?",
    choices: [
      // distractor: adds the base and height and halves the sum, (34 + 15)/2
      { id: "A", text: "$24.5$" },
      // distractor: adds the base and height, 34 + 15
      { id: "B", text: "$49$" },
      { id: "C", text: "$255$" },
      // distractor: multiplies base by height but forgets the factor of one half
      { id: "D", text: "$510$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\frac{1}{2}(34)(15) = 255$.\n\n**The Full Solution:**\nStep 1: The area of a triangle is $\\frac{1}{2}bh$.\nStep 2: Substitute $b = 34$ and $h = 15$: $\\frac{1}{2}(34)(15)$.\nStep 3: $\\frac{1}{2}(510) = 255$ square inches. Check: $17 \\times 15 = 255$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($24.5$): adds the base and height before halving; the formula multiplies them.\n* Choice B ($49$): adds the base and height.\n* Choice D ($510$): is $bh$ without the $\\frac{1}{2}$, the area of a rectangle.\n\n**Test Day Takeaway:** A triangle is half of a rectangle with the same base and height, so never drop the $\\frac{1}{2}$.",
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
    question: "The height of a triangle is $3$ units less than its base, $b$ units. Which expression represents the area, in square units, of the triangle?",
    choices: [
      // distractor: multiplies base by height but leaves off the factor of one half
      { id: "A", text: "$b(b - 3)$" },
      { id: "B", text: "$\\frac{b(b - 3)}{2}$" },
      // distractor: writes the height as b + 3, 3 more than the base
      { id: "C", text: "$\\frac{b(b + 3)}{2}$" },
      // distractor: writes the height as 3 - b, reversing the subtraction
      { id: "D", text: "$\\frac{b(3 - b)}{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Height $= b - 3$, so area $= \\frac{1}{2}b(b - 3) = \\frac{b(b - 3)}{2}$.\n\n**The Full Solution:**\nStep 1: The base is $b$, and \"$3$ less than\" the base means the height is $b - 3$.\nStep 2: The area of a triangle is $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}b(b - 3)$.\nStep 3: Written as one fraction, that is $\\frac{b(b - 3)}{2}$. Check with $b = 10$: the height is $7$ and the area is $\\frac{1}{2}(10)(7) = 35$, and $\\frac{10(7)}{2} = 35$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: $b(b - 3)$ has no $\\frac{1}{2}$; it is the area of a rectangle.\n* Choice C: uses $b + 3$, which is $3$ MORE than the base.\n* Choice D: reverses the subtraction; $3 - b$ is negative whenever $b > 3$.\n\n**Test Day Takeaway:** \"$3$ less than $b$\" is $b - 3$, never $3 - b$; then apply $\\frac{1}{2}bh$.",
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
    question: "A triangle has an area of $48$ square units and a height of $8$ units. What is the length, in units, of the base of the triangle?",
    choices: [
      // distractor: divides the area by the height, 48/8, forgetting the factor of one half
      { id: "A", text: "$6$" },
      { id: "B", text: "$12$" },
      // distractor: subtracts the height from the area, 48 - 8
      { id: "C", text: "$40$" },
      // distractor: multiplies the area by the height, 48 times 8
      { id: "D", text: "$384$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $48 = \\frac{1}{2}b(8) = 4b$, so $b = 12$.\n\n**The Full Solution:**\nStep 1: The area of a triangle is $\\frac{1}{2}bh$, so $48 = \\frac{1}{2}b(8)$.\nStep 2: Simplify the right side: $48 = 4b$.\nStep 3: Divide by $4$: $b = 12$. Check: $\\frac{1}{2}(12)(8) = 48$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): divides $48$ by $8$, which ignores the $\\frac{1}{2}$ in the formula.\n* Choice C ($40$): subtracts the height from the area, mixing square units with units.\n* Choice D ($384$): multiplies the area by the height instead of dividing.\n\n**Test Day Takeaway:** Working backward from an area, the base is $\\frac{2A}{h}$: double the area before dividing.",
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
    question: "What is the area of the right triangle shown?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 7]], sideLabels: ["", "7", "25"], rightAngleVertex: 1 } },
    choices: [
      // distractor: takes the missing leg as 25 - 7 = 18, giving one half times 7 times 18
      { id: "A", text: "$63$" },
      { id: "B", text: "$84$" },
      // distractor: uses the hypotenuse as the base, one half times 7 times 25
      { id: "C", text: "$87.5$" },
      // distractor: finds the leg 24 but forgets the factor of one half
      { id: "D", text: "$168$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $7$-$24$-$25$ is a Pythagorean triple, so the legs are $7$ and $24$ and the area is $\\frac{1}{2}(7)(24) = 84$.\n\n**The Full Solution:**\nStep 1: The side of length $25$ is the hypotenuse, so the other leg is $\\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$.\nStep 2: The two legs are perpendicular, so they are the base and the height.\nStep 3: Area $= \\frac{1}{2}(7)(24) = 84$. Check: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($63$): takes the missing leg as $25 - 7 = 18$; legs come from subtracting squares, not lengths.\n* Choice C ($87.5$): uses the hypotenuse as the base, but the hypotenuse is not perpendicular to the leg of length $7$.\n* Choice D ($168$): finds the leg correctly but leaves off the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** For a right triangle's area, use the two LEGS as base and height; if the hypotenuse is given, find the missing leg first.",
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
    question: "An equilateral triangle has a perimeter of $30$ inches. What is the area, in square inches, of the triangle?",
    choices: [
      // distractor: uses half a side, 5, as the height: one half times 10 times 5
      { id: "A", text: "$25$" },
      { id: "B", text: "$25\\sqrt{3}$" },
      // distractor: uses a side, 10, as the height: one half times 10 times 10
      { id: "C", text: "$50$" },
      // distractor: finds the height 5 sqrt(3) but forgets the factor of one half
      { id: "D", text: "$50\\sqrt{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Each side is $10$, so the area is $\\frac{\\sqrt{3}}{4}(10)^2 = 25\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The three sides are equal, so each side is $\\frac{30}{3} = 10$ inches.\nStep 2: The height splits the triangle into two $30$-$60$-$90$ triangles with hypotenuse $10$ and short leg $5$, so the height is $\\sqrt{10^2 - 5^2} = \\sqrt{75} = 5\\sqrt{3}$.\nStep 3: Area $= \\frac{1}{2}(10)(5\\sqrt{3}) = 25\\sqrt{3}$. Check: $\\frac{\\sqrt{3}}{4}s^2 = \\frac{\\sqrt{3}}{4}(100) = 25\\sqrt{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): uses $5$, half a side, as the height; the height is $5\\sqrt{3}$.\n* Choice C ($50$): uses a slanted side as the height; the height must be perpendicular to the base.\n* Choice D ($50\\sqrt{3}$): finds the height correctly but forgets the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** For an equilateral triangle with side $s$, the height is $\\frac{\\sqrt{3}}{2}s$ and the area is $\\frac{\\sqrt{3}}{4}s^2$.",
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
    question: "A triangle has an area of $84$ square centimeters. The base of the triangle is increased by $25\\%$, and the height is decreased by $25\\%$. What is the area, in square centimeters, of the new triangle?",
    choices: [
      // distractor: applies only the 25% decrease, 0.75 times 84
      { id: "A", text: "$63$" },
      { id: "B", text: "$78.75$" },
      // distractor: assumes a 25% increase and a 25% decrease cancel
      { id: "C", text: "$84$" },
      // distractor: treats the net change as a 6.25% increase, 1.0625 times 84
      { id: "D", text: "$89.25$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The area is multiplied by $1.25 \\times 0.75 = 0.9375$, and $0.9375 \\times 84 = 78.75$.\n\n**The Full Solution:**\nStep 1: The original area is $\\frac{1}{2}bh = 84$. The new base is $1.25b$ and the new height is $0.75h$.\nStep 2: The new area is $\\frac{1}{2}(1.25b)(0.75h) = (1.25)(0.75) \\cdot \\frac{1}{2}bh = 0.9375 \\cdot \\frac{1}{2}bh$.\nStep 3: So the new area is $0.9375 \\times 84 = 78.75$ square centimeters. Check with $b = 24$ and $h = 7$: the new triangle has base $30$ and height $5.25$, and $\\frac{1}{2}(30)(5.25) = 78.75$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($63$): applies the decrease to the height but ignores the increase to the base.\n* Choice C ($84$): assumes $+25\\%$ and $-25\\%$ cancel; they multiply to $0.9375$, not $1$.\n* Choice D ($89.25$): gets the size of the change, $6.25\\%$, but in the wrong direction.\n\n**Test Day Takeaway:** Percent changes to two dimensions MULTIPLY: $1.25 \\times 0.75 = 0.9375$, a $6.25\\%$ decrease.",
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
    question: "The perimeter of triangle $ABC$ shown is $90$. What is the value of $\\sin A$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [9, 0], [9, 40]], labels: ["A", "B", "C"], sideLabels: ["9", "", "41"], rightAngleVertex: 1 } },
    choices: [
      // distractor: uses AB/CA = 9/41, which is cos A (adjacent over hypotenuse)
      { id: "A", text: "$\\frac{9}{41}$" },
      // distractor: uses AB/BC = 9/40, adjacent over opposite
      { id: "B", text: "$\\frac{9}{40}$" },
      { id: "C", text: "$\\frac{40}{41}$" },
      // distractor: uses BC/AB = 40/9, which is tan A
      { id: "D", text: "$\\frac{40}{9}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Trig Ratio from Perimeter**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The missing side is $BC = 90 - 9 - 41 = 40$, so $\\sin A = \\frac{40}{41}$.\n\n**The Full Solution:**\nStep 1: The perimeter is the sum of the three side lengths, so $BC = 90 - 9 - 41 = 40$.\nStep 2: The right angle is at $B$, so $\\overline{CA}$, with length $41$, is the hypotenuse, and $\\overline{BC}$, with length $40$, is the leg opposite angle $A$.\nStep 3: $\\sin A = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{BC}{CA} = \\frac{40}{41}$.\n\nCheck: $9^2 + 40^2 = 81 + 1{,}600 = 1{,}681 = 41^2$, so the three sides form a right triangle. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{41}$): divides the adjacent leg by the hypotenuse, which is $\\cos A$.\n* Choice B ($\\frac{9}{40}$): divides the adjacent leg by the opposite leg and never uses the hypotenuse.\n* Choice D ($\\frac{40}{9}$): divides the opposite leg by the adjacent leg, which is $\\tan A$.\n\n**Test Day Takeaway:** A perimeter and two sides give the third side in one subtraction; then name opposite, adjacent, and hypotenuse from the angle before writing the ratio.",
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
    question: "Triangle $ABC$ shown has a perimeter of $40$. What is the value of $\\tan A$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15, 0], [15, 8]], labels: ["A", "C", "B"], sideLabels: ["15", "", "17"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: uses BC/AB = 8/17, which is sin A
      { id: "A", text: "$\\frac{8}{17}$" },
      { id: "B", text: "$\\frac{8}{15}$" },
      // distractor: uses AC/AB = 15/17, which is cos A
      { id: "C", text: "$\\frac{15}{17}$" },
      // distractor: uses AC/BC = 15/8, adjacent over opposite (tan B)
      { id: "D", text: "$\\frac{15}{8}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Trig Ratio from Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $BC = 40 - 15 - 17 = 8$, so $\\tan A = \\frac{BC}{AC} = \\frac{8}{15}$.\n\n**The Full Solution:**\nStep 1: The perimeter is $AC + BC + AB = 40$, so $15 + BC + 17 = 40$ and $BC = 8$.\nStep 2: The right angle is at $C$, so $\\overline{AB}$ is the hypotenuse; for angle $A$, the opposite leg is $\\overline{BC}$ and the adjacent leg is $\\overline{AC}$.\nStep 3: $\\tan A = \\frac{BC}{AC} = \\frac{8}{15}$.\n\nCheck: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{17}$): divides the opposite leg by the hypotenuse, which is $\\sin A$.\n* Choice C ($\\frac{15}{17}$): divides the adjacent leg by the hypotenuse, which is $\\cos A$.\n* Choice D ($\\frac{15}{8}$): divides the adjacent leg by the opposite leg, which is $\\tan B$, not $\\tan A$.\n\n**Test Day Takeaway:** Use the perimeter to find the missing side, then read the ratio from angle $A$: tangent is opposite over adjacent.",
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
    question: "In the figure shown, the perimeter of triangle $ABC$ is $144$. What is the value of $\\sin C$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [16, 0], [16, 63]], labels: ["A", "B", "C"], sideLabels: ["", "63", "65"], rightAngleVertex: 1 } },
    choices: [
      { id: "A", text: "$\\frac{16}{65}$" },
      // distractor: uses AB/BC = 16/63, which is tan C
      { id: "B", text: "$\\frac{16}{63}$" },
      // distractor: uses BC/CA = 63/65, which is cos C
      { id: "C", text: "$\\frac{63}{65}$" },
      // distractor: uses BC/AB = 63/16, adjacent over opposite for angle C
      { id: "D", text: "$\\frac{63}{16}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Trig Ratio from Perimeter**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The unlabeled side is $AB = 144 - 63 - 65 = 16$, and it is opposite angle $C$, so $\\sin C = \\frac{16}{65}$.\n\n**The Full Solution:**\nStep 1: Subtract the two labeled sides from the perimeter: $AB = 144 - 63 - 65 = 16$.\nStep 2: The right angle is at $B$, so $\\overline{CA}$, with length $65$, is the hypotenuse. From angle $C$, the opposite leg is $\\overline{AB}$ and the adjacent leg is $\\overline{BC}$.\nStep 3: $\\sin C = \\frac{AB}{CA} = \\frac{16}{65}$.\n\nCheck: $16^2 + 63^2 = 256 + 3{,}969 = 4{,}225 = 65^2$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{16}{63}$): divides the opposite leg by the adjacent leg, which is $\\tan C$.\n* Choice C ($\\frac{63}{65}$): uses the two labeled sides, $\\frac{63}{65}$, which is $\\cos C$; it never uses the perimeter.\n* Choice D ($\\frac{63}{16}$): divides the adjacent leg by the opposite leg, flipping the tangent of $C$.\n\n**Test Day Takeaway:** If the ratio you need uses the unlabeled side, the perimeter is there to give you that side; subtract first, then read the ratio from the angle named.",
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
    question: "Right triangle $JKL$ is shown. If the perimeter of the triangle is $84$, what is the value of $\\tan J$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [12, 0], [12, 35]], labels: ["J", "K", "L"], sideLabels: ["12", "", "37"], rightAngleVertex: 1 } },
    choices: [
      // distractor: uses JK/LJ = 12/37, which is cos J
      { id: "A", text: "$\\frac{12}{37}$" },
      // distractor: uses JK/KL = 12/35, adjacent over opposite
      { id: "B", text: "$\\frac{12}{35}$" },
      // distractor: uses KL/LJ = 35/37, which is sin J
      { id: "C", text: "$\\frac{35}{37}$" },
      { id: "D", text: "$\\frac{35}{12}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Trig Ratio from Perimeter**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $KL = 84 - 12 - 37 = 35$, so $\\tan J = \\frac{KL}{JK} = \\frac{35}{12}$.\n\n**The Full Solution:**\nStep 1: The missing side is $KL = 84 - 12 - 37 = 35$.\nStep 2: The right angle is at $K$. From angle $J$, the opposite leg is $\\overline{KL}$, with length $35$, and the adjacent leg is $\\overline{JK}$, with length $12$.\nStep 3: $\\tan J = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{35}{12}$.\n\nCheck: $12^2 + 35^2 = 144 + 1{,}225 = 1{,}369 = 37^2$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{12}{37}$): divides the adjacent leg by the hypotenuse, which is $\\cos J$.\n* Choice B ($\\frac{12}{35}$): divides the adjacent leg by the opposite leg, the reciprocal of $\\tan J$.\n* Choice C ($\\frac{35}{37}$): divides the opposite leg by the hypotenuse, which is $\\sin J$.\n\n**Test Day Takeaway:** Tangent uses the two legs only; a tangent greater than $1$ is fine whenever the opposite leg is longer than the adjacent leg.",
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
    question: "The perimeter of the right triangle shown is $70$. What is the value of $\\cos C$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [21, 0], [21, 20]], labels: ["A", "B", "C"], sideLabels: ["21", "", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\frac{20}{29}$" },
      // distractor: uses AB/CA = 21/29, which is sin C
      { id: "B", text: "$\\frac{21}{29}$" },
      // distractor: uses BC/AB = 20/21, adjacent over opposite for angle C
      { id: "C", text: "$\\frac{20}{21}$" },
      // distractor: uses AB/BC = 21/20, which is tan C
      { id: "D", text: "$\\frac{21}{20}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Trig Ratio from Perimeter**\n\n**Choice A is correct.**\n\n**The Fast Way (~60s):** With $BC = x$, the hypotenuse is $70 - 21 - x = 49 - x$, and $(49 - x)^2 = 21^2 + x^2$ gives $x = 20$, so the sides are $20$, $21$, and $29$ and $\\cos C = \\frac{20}{29}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $B$, so $\\overline{AC}$ is the hypotenuse. Let $BC = x$; then $AC = 70 - 21 - x = 49 - x$.\nStep 2: By the Pythagorean theorem, $21^2 + x^2 = (49 - x)^2$, so $441 + x^2 = 2{,}401 - 98x + x^2$. Then $98x = 1{,}960$ and $x = 20$, so $BC = 20$ and $AC = 29$.\nStep 3: From angle $C$, the adjacent leg is $\\overline{BC}$, so $\\cos C = \\frac{BC}{AC} = \\frac{20}{29}$.\n\nCheck: $20 + 21 + 29 = 70$ and $20^2 + 21^2 = 400 + 441 = 841 = 29^2$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{21}{29}$): divides the leg opposite $C$ by the hypotenuse, which is $\\sin C$.\n* Choice C ($\\frac{20}{21}$): divides the adjacent leg by the opposite leg and never uses the hypotenuse.\n* Choice D ($\\frac{21}{20}$): divides the opposite leg by the adjacent leg, which is $\\tan C$.\n\n**Test Day Takeaway:** Write the hypotenuse as the perimeter minus the two legs; the $x^2$ terms cancel in the Pythagorean equation, leaving a linear equation.",
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
    question: "In right triangle $PQR$ shown, $PQ > QR$, and the perimeter of the triangle is $60$. What is the value of $\\sin P$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 10]], labels: ["P", "Q", "R"], sideLabels: ["", "", "26"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\frac{5}{13}$" },
      // distractor: uses QR/PQ = 10/24 = 5/12, which is tan P
      { id: "B", text: "$\\frac{5}{12}$" },
      // distractor: uses PQ/PR = 24/26 = 12/13, which is cos P
      { id: "C", text: "$\\frac{12}{13}$" },
      // distractor: uses PQ/QR = 24/10 = 12/5, which is tan R
      { id: "D", text: "$\\frac{12}{5}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Trig Ratio from Perimeter**\n\n**Choice A is correct.**\n\n**The Fast Way (~75s):** The legs add to $60 - 26 = 34$ and multiply to $\\frac{34^2 - 26^2}{2} = 240$, so they are $24$ and $10$; then $\\sin P = \\frac{QR}{PR} = \\frac{10}{26} = \\frac{5}{13}$.\n\n**The Full Solution:**\nStep 1: The hypotenuse $\\overline{PR}$ has length $26$, so $PQ + QR = 60 - 26 = 34$ and $PQ^2 + QR^2 = 26^2 = 676$.\nStep 2: Since $(PQ + QR)^2 = 1{,}156$, it follows that $2(PQ)(QR) = 1{,}156 - 676 = 480$, so $(PQ)(QR) = 240$. Two numbers with sum $34$ and product $240$ are $24$ and $10$. Since $PQ > QR$, $PQ = 24$ and $QR = 10$.\nStep 3: The leg opposite angle $P$ is $\\overline{QR}$, so $\\sin P = \\frac{10}{26} = \\frac{5}{13}$.\n\nCheck: $24 + 10 + 26 = 60$ and $24^2 + 10^2 = 576 + 100 = 676 = 26^2$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{5}{12}$): divides the opposite leg by the adjacent leg, $\\frac{10}{24}$, which is $\\tan P$.\n* Choice C ($\\frac{12}{13}$): uses the longer leg, $\\frac{24}{26}$, which is $\\cos P$.\n* Choice D ($\\frac{12}{5}$): divides the longer leg by the shorter leg, $\\frac{24}{10}$, which is $\\tan R$.\n\n**Test Day Takeaway:** Sum of the legs from the perimeter plus sum of their squares from the hypotenuse pins down both legs; the stated inequality tells you which is which.",
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
    question: "In the triangle shown, what is the value of $\\cos A$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [72, 0], [72, 65]], labels: ["A", "B", "C"], sideLabels: ["72", "65", "97"], rightAngleVertex: 1 } },
    choices: [
      // distractor: uses BC/CA = 65/97, which is sin A
      { id: "A", text: "$\\frac{65}{97}$" },
      { id: "B", text: "$\\frac{72}{97}$" },
      // distractor: uses BC/AB = 65/72, which is tan A
      { id: "C", text: "$\\frac{65}{72}$" },
      // distractor: inverts the ratio, hypotenuse over adjacent
      { id: "D", text: "$\\frac{97}{72}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The leg adjacent to $A$ is $72$ and the hypotenuse is $97$, so $\\cos A = \\frac{72}{97}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $B$, so $\\overline{CA}$, with length $97$, is the hypotenuse.\nStep 2: The leg that touches angle $A$ is $\\overline{AB}$, with length $72$; this is the adjacent leg.\nStep 3: $\\cos A = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{72}{97}$.\n\nCheck: $72^2 + 65^2 = 5{,}184 + 4{,}225 = 9{,}409 = 97^2$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{65}{97}$): uses the leg opposite $A$, which gives $\\sin A$.\n* Choice C ($\\frac{65}{72}$): divides the opposite leg by the adjacent leg, which is $\\tan A$.\n* Choice D ($\\frac{97}{72}$): puts the hypotenuse on top; a cosine of an acute angle is always less than $1$.\n\n**Test Day Takeaway:** Cosine is adjacent over hypotenuse: the adjacent leg is the leg that touches the angle and is not the hypotenuse.",
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
    question: "Triangle $ABC$ is shown. What is the value of $\\sin A$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 7]], labels: ["A", "B", "C"], sideLabels: ["24", "7", "25"], rightAngleVertex: 1 } },
    choices: [
      { id: "A", text: "$\\frac{7}{25}$" },
      // distractor: uses BC/AB = 7/24, which is tan A
      { id: "B", text: "$\\frac{7}{24}$" },
      // distractor: uses AB/CA = 24/25, which is cos A
      { id: "C", text: "$\\frac{24}{25}$" },
      // distractor: uses AB/BC = 24/7, adjacent over opposite
      { id: "D", text: "$\\frac{24}{7}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The leg opposite $A$ is $7$ and the hypotenuse is $25$, so $\\sin A = \\frac{7}{25}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $B$, so $\\overline{CA}$, with length $25$, is the hypotenuse.\nStep 2: The side across from angle $A$ is $\\overline{BC}$, with length $7$.\nStep 3: $\\sin A = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{7}{25}$.\n\nCheck: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{7}{24}$): divides the opposite leg by the adjacent leg, which is $\\tan A$.\n* Choice C ($\\frac{24}{25}$): uses the adjacent leg, which gives $\\cos A$.\n* Choice D ($\\frac{24}{7}$): divides the adjacent leg by the opposite leg, the reciprocal of $\\tan A$.\n\n**Test Day Takeaway:** Find the side across from the angle first; sine puts that side over the hypotenuse.",
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
    question: "In right triangle $RST$ shown, what is the value of $\\tan R$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [35, 0], [35, 12]], labels: ["R", "T", "S"], sideLabels: ["35", "12", ""], rightAngleVertex: 1, figureNote: true } },
    choices: [
      // distractor: finds the hypotenuse, 37, and reports ST/RS = 12/37, which is sin R
      { id: "A", text: "$\\frac{12}{37}$" },
      { id: "B", text: "$\\frac{12}{35}$" },
      // distractor: reports RT/RS = 35/37, which is cos R
      { id: "C", text: "$\\frac{35}{37}$" },
      // distractor: reports RT/ST = 35/12, which is tan S
      { id: "D", text: "$\\frac{35}{12}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The leg opposite $R$ is $ST = 12$ and the leg adjacent to $R$ is $RT = 35$, so $\\tan R = \\frac{12}{35}$.\n\n**The Full Solution:**\nStep 1: Angle $T$ is the right angle, so $\\overline{RT}$ and $\\overline{ST}$ are the legs.\nStep 2: From angle $R$, the opposite leg is $\\overline{ST}$ and the adjacent leg is $\\overline{RT}$.\nStep 3: $\\tan R = \\frac{ST}{RT} = \\frac{12}{35}$.\n\nCheck: $\\tan R$ uses only the legs, so the hypotenuse, $\\sqrt{35^2 + 12^2} = 37$, is not needed. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{12}{37}$): brings in the hypotenuse, $37$, and computes $\\sin R$.\n* Choice C ($\\frac{35}{37}$): computes $\\cos R$, adjacent over hypotenuse.\n* Choice D ($\\frac{35}{12}$): divides the adjacent leg by the opposite leg, which is $\\tan S$.\n\n**Test Day Takeaway:** Tangent needs only the two legs: opposite over adjacent, measured from the angle named.",
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
    question: "In right triangle $PQR$ shown, what is the value of $\\tan P$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [28, 0], [28, 45]], labels: ["P", "Q", "R"], sideLabels: ["", "45", "53"], rightAngleVertex: 1 } },
    choices: [
      // distractor: finds PQ = 28 and reports PQ/PR = 28/53, which is cos P
      { id: "A", text: "$\\frac{28}{53}$" },
      // distractor: reports PQ/QR = 28/45, which is tan R
      { id: "B", text: "$\\frac{28}{45}$" },
      // distractor: reports QR/PR = 45/53, which is sin P
      { id: "C", text: "$\\frac{45}{53}$" },
      { id: "D", text: "$\\frac{45}{28}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** $PQ = \\sqrt{53^2 - 45^2} = 28$, so $\\tan P = \\frac{QR}{PQ} = \\frac{45}{28}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $Q$, so $\\overline{PR}$, with length $53$, is the hypotenuse and $\\overline{PQ}$ is the unlabeled leg.\nStep 2: $PQ^2 = 53^2 - 45^2 = 2{,}809 - 2{,}025 = 784$, so $PQ = 28$.\nStep 3: From angle $P$, the opposite leg is $\\overline{QR}$ and the adjacent leg is $\\overline{PQ}$, so $\\tan P = \\frac{45}{28}$.\n\nCheck: $28^2 + 45^2 = 784 + 2{,}025 = 2{,}809 = 53^2$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{28}{53}$): uses the adjacent leg over the hypotenuse, which is $\\cos P$.\n* Choice B ($\\frac{28}{45}$): divides the adjacent leg by the opposite leg, which is $\\tan R$.\n* Choice C ($\\frac{45}{53}$): uses the two labeled sides, which gives $\\sin P$, and skips the missing leg.\n\n**Test Day Takeaway:** Tangent needs both legs; when the figure labels a leg and the hypotenuse, one Pythagorean step recovers the other leg.",
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
    question: "For triangle $XYZ$ shown, what is the value of $\\cos X$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [56, 0], [56, 33]], labels: ["X", "Y", "Z"], sideLabels: ["56", "33", ""], rightAngleVertex: 1 } },
    choices: [
      // distractor: reports YZ/XZ = 33/65, which is sin X
      { id: "A", text: "$\\frac{33}{65}$" },
      // distractor: reports YZ/XY = 33/56, which is tan X
      { id: "B", text: "$\\frac{33}{56}$" },
      { id: "C", text: "$\\frac{56}{65}$" },
      // distractor: reports XY/YZ = 56/33, adjacent over opposite
      { id: "D", text: "$\\frac{56}{33}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** $XZ = \\sqrt{56^2 + 33^2} = 65$, so $\\cos X = \\frac{XY}{XZ} = \\frac{56}{65}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $Y$, so the hypotenuse is $\\overline{XZ}$: $XZ^2 = 56^2 + 33^2 = 3{,}136 + 1{,}089 = 4{,}225$, and $XZ = 65$.\nStep 2: The leg adjacent to angle $X$ is $\\overline{XY}$, with length $56$.\nStep 3: $\\cos X = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{56}{65}$.\n\nCheck: $\\left(\\frac{56}{65}\\right)^2 + \\left(\\frac{33}{65}\\right)^2 = \\frac{3{,}136 + 1{,}089}{4{,}225} = 1$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{33}{65}$): uses the leg opposite $X$, which gives $\\sin X$.\n* Choice B ($\\frac{33}{56}$): divides the two legs, which is $\\tan X$, and skips the hypotenuse.\n* Choice D ($\\frac{56}{33}$): divides the adjacent leg by the opposite leg, the reciprocal of $\\tan X$.\n\n**Test Day Takeaway:** With two legs given, find the hypotenuse first; sine and cosine both need it.",
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
    question: "In right triangle $XYZ$ shown, $XY$ is $31$ greater than $YZ$. What is the value of $\\cos Z$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [40, 0], [40, 9]], labels: ["X", "Y", "Z"], sideLabels: ["", "", "41"], rightAngleVertex: 1, figureNote: true } },
    choices: [
      { id: "A", text: "$\\frac{9}{41}$" },
      // distractor: uses YZ/XY = 9/40, adjacent over opposite for angle Z
      { id: "B", text: "$\\frac{9}{40}$" },
      // distractor: uses XY/XZ = 40/41, which is sin Z
      { id: "C", text: "$\\frac{40}{41}$" },
      // distractor: uses XY/YZ = 40/9, which is tan Z
      { id: "D", text: "$\\frac{40}{9}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Trig Ratio with Known Triple**\n\n**Choice A is correct.**\n\n**The Fast Way (~60s):** With $YZ = y$, $y^2 + (y + 31)^2 = 41^2$ gives $y = 9$, so $\\cos Z = \\frac{YZ}{XZ} = \\frac{9}{41}$.\n\n**The Full Solution:**\nStep 1: Let $YZ = y$, so $XY = y + 31$. The right angle is at $Y$, so $\\overline{XZ}$, with length $41$, is the hypotenuse.\nStep 2: $y^2 + (y + 31)^2 = 41^2$ gives $2y^2 + 62y + 961 = 1{,}681$, so $y^2 + 31y - 360 = 0$, or $(y - 9)(y + 40) = 0$. A length is positive, so $y = 9$ and $XY = 40$.\nStep 3: The leg adjacent to angle $Z$ is $\\overline{YZ}$, so $\\cos Z = \\frac{9}{41}$.\n\nCheck: $40 - 9 = 31$ and $9^2 + 40^2 = 81 + 1{,}600 = 1{,}681 = 41^2$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{9}{40}$): divides the adjacent leg by the opposite leg and never uses the hypotenuse.\n* Choice C ($\\frac{40}{41}$): uses the leg opposite $Z$, which gives $\\sin Z$.\n* Choice D ($\\frac{40}{9}$): divides the opposite leg by the adjacent leg, which is $\\tan Z$.\n\n**Test Day Takeaway:** A relation between the legs plus the hypotenuse is a quadratic; factor it, keep the positive root, and only then pick the ratio.",
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
    question: "Cylinder $A$ and cylinder $B$ are similar right circular cylinders. The area of the base of cylinder $B$ is $\\frac{16}{9}$ times the area of the base of cylinder $A$. The volume of cylinder $B$ is $k$ times the volume of cylinder $A$. What is the value of $k$?",
    choices: [
      // distractor: reports the linear scale factor 4/3 instead of cubing it
      { id: "A", text: "$\\frac{4}{3}$" },
      // distractor: reuses the base-area ratio 16/9 as though volume scaled like area
      { id: "B", text: "$\\frac{16}{9}$" },
      { id: "C", text: "$\\frac{64}{27}$" },
      // distractor: squares the area ratio, (16/9)^2 = 256/81, instead of cubing the linear ratio
      { id: "D", text: "$\\frac{256}{81}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Similar-Figures Area Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** An area ratio of $\\frac{16}{9}$ means a length ratio of $\\frac{4}{3}$, so the volume ratio is $\\left(\\frac{4}{3}\\right)^3 = \\frac{64}{27}$.\n\n**The Full Solution:**\nStep 1: Base areas are $\\pi r^2$, so $\\frac{\\pi R^2}{\\pi r^2} = \\frac{16}{9}$ gives $\\frac{R}{r} = \\frac{4}{3}$.\nStep 2: The cylinders are similar, so every length, including the height, is multiplied by $\\frac{4}{3}$.\nStep 3: Volume is a product of three lengths, so $k = \\left(\\frac{4}{3}\\right)^3 = \\frac{64}{27}$.\n\nCheck: With $r = 3$, $h = 3$ for cylinder $A$ and $R = 4$, $H = 4$ for cylinder $B$, the volumes are $27\\pi$ and $64\\pi$, a ratio of $\\frac{64}{27}$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{4}{3}$): stops at the length ratio and never cubes it.\n* Choice B ($\\frac{16}{9}$): reuses the area ratio; area scales two dimensions, volume scales three.\n* Choice D ($\\frac{256}{81}$): squares the area ratio, which is a fourth power of the length ratio.\n\n**Test Day Takeaway:** Turn any given ratio back into a length ratio first; areas then scale by its square and volumes by its cube.",
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
    question: "In triangle $ABC$, the measure of angle $A$ is $\\frac{3\\pi}{10}$ radians and the measure of angle $B$ is $\\frac{4\\pi}{9}$ radians. What is the measure, in degrees, of angle $C$?",
    choices: [
      // distractor: finds angle C = 23π/90 radians and reports the numerator 23 without converting to degrees
      { id: "A", text: "$23$" },
      { id: "B", text: "$46$" },
      // distractor: reports the sum of angles A and B, 54 + 80 = 134, without subtracting from 180
      { id: "C", text: "$134$" },
      // distractor: subtracts 134 from 360 instead of 180
      { id: "D", text: "$226$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Radian Sum to Degrees**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $\\frac{3\\pi}{10}$ radians is $54^\\circ$ and $\\frac{4\\pi}{9}$ radians is $80^\\circ$, so angle $C$ measures $180 - 54 - 80 = 46$ degrees.\n\n**The Full Solution:**\nStep 1: Multiply each radian measure by $\\frac{180^\\circ}{\\pi}$: $\\frac{3\\pi}{10} \\cdot \\frac{180^\\circ}{\\pi} = 54^\\circ$ and $\\frac{4\\pi}{9} \\cdot \\frac{180^\\circ}{\\pi} = 80^\\circ$.\nStep 2: The angle measures of a triangle sum to $180^\\circ$.\nStep 3: Angle $C$ measures $180^\\circ - 54^\\circ - 80^\\circ = 46^\\circ$.\n\nCheck: In radians, $\\pi - \\frac{3\\pi}{10} - \\frac{4\\pi}{9} = \\frac{23\\pi}{90}$, and $\\frac{23\\pi}{90} \\cdot \\frac{180^\\circ}{\\pi} = 46^\\circ$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): finds $\\frac{23\\pi}{90}$ radians correctly but reports the $23$ without converting to degrees.\n* Choice C ($134$): adds angles $A$ and $B$ and stops before subtracting from $180^\\circ$.\n* Choice D ($226$): subtracts from $360^\\circ$, the angle sum of a quadrilateral, not a triangle.\n\n**Test Day Takeaway:** Convert radians to degrees with $\\frac{180}{\\pi}$ before mixing in facts stated in degrees, such as the triangle angle sum.",
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
    question: "A sphere is inscribed in a cube with edge length $s$ centimeters. Which expression represents the volume, in cubic centimeters, of the space inside the cube but outside the sphere?",
    choices: [
      // distractor: uses a radius of s/4, half of the true radius
      { id: "A", text: "$s^{3}\\left(1 - \\frac{\\pi}{48}\\right)$" },
      // distractor: drops the 4/3 and computes the sphere's volume as π(s/2)^3
      { id: "B", text: "$s^{3}\\left(1 - \\frac{\\pi}{8}\\right)$" },
      { id: "C", text: "$s^{3}\\left(1 - \\frac{\\pi}{6}\\right)$" },
      // distractor: uses a radius of s, the full edge length
      { id: "D", text: "$s^{3}\\left(1 - \\frac{4\\pi}{3}\\right)$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Composite Solid — Cube Minus Inscribed Sphere**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The sphere's diameter is $s$, so its volume is $\\frac{4}{3}\\pi\\left(\\frac{s}{2}\\right)^3 = \\frac{\\pi s^3}{6}$, leaving $s^3 - \\frac{\\pi s^3}{6}$.\n\n**The Full Solution:**\nStep 1: The cube's volume is $s^3$.\nStep 2: A sphere inscribed in a cube touches all six faces, so its diameter equals the edge length $s$ and its radius is $\\frac{s}{2}$. Its volume is $\\frac{4}{3}\\pi\\left(\\frac{s}{2}\\right)^3 = \\frac{4\\pi s^3}{24} = \\frac{\\pi s^3}{6}$.\nStep 3: The space between them is $s^3 - \\frac{\\pi s^3}{6} = s^3\\left(1 - \\frac{\\pi}{6}\\right)$.\n\nCheck: $\\frac{\\pi}{6} \\approx 0.52$, so a little less than half of the cube lies outside the sphere, a positive amount as it must be. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($s^{3}\\left(1 - \\frac{\\pi}{48}\\right)$): uses a radius of $\\frac{s}{4}$, halving the edge twice.\n* Choice B ($s^{3}\\left(1 - \\frac{\\pi}{8}\\right)$): drops the $\\frac{4}{3}$ from the sphere formula.\n* Choice D ($s^{3}\\left(1 - \\frac{4\\pi}{3}\\right)$): uses a radius of $s$; that sphere would not fit in the cube, and the expression is negative.\n\n**Test Day Takeaway:** An inscribed sphere's diameter is the cube's edge; cube the whole radius $\\frac{s}{2}$, denominator included.",
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
    question: "$p(x) = \\dfrac{c}{x - 4}$\nThe function $p$ is defined by the given equation, where $c$ is a constant. In the $xy$-plane, the graph of $y = p(x)$ passes through the point $(9, 12)$. The graph of $y = q(x)$ is the result of translating the graph of $y = p(x)$ $6$ units to the left. Which equation defines $q$?",
    choices: [
      // distractor: shifts in the wrong direction, replacing x with x - 6
      { id: "A", text: "$q(x) = \\dfrac{60}{x - 10}$" },
      { id: "B", text: "$q(x) = \\dfrac{60}{x + 2}$" },
      // distractor: replaces the -4 with +6 instead of adding 6 to it
      { id: "C", text: "$q(x) = \\dfrac{60}{x + 6}$" },
      // distractor: adds 6 to the constant c instead of translating the graph horizontally
      { id: "D", text: "$q(x) = \\dfrac{66}{x - 4}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Horizontal Shift of a Rational Function**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** From $12 = \\frac{c}{9 - 4}$, $c = 60$; a shift $6$ units left replaces $x$ with $x + 6$, giving $q(x) = \\frac{60}{x + 2}$.\n\n**The Full Solution:**\nStep 1: Substitute the point: $12 = \\frac{c}{9 - 4} = \\frac{c}{5}$, so $c = 60$ and $p(x) = \\frac{60}{x - 4}$.\nStep 2: Translating a graph $6$ units to the left replaces $x$ with $x + 6$: $q(x) = p(x + 6) = \\frac{60}{(x + 6) - 4}$.\nStep 3: Simplify: $q(x) = \\frac{60}{x + 2}$.\n\nCheck: The point $(9, 12)$ moves to $(3, 12)$, and $q(3) = \\frac{60}{3 + 2} = 12$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($q(x) = \\dfrac{60}{x - 10}$): replaces $x$ with $x - 6$, which shifts the graph $6$ units to the right.\n* Choice C ($q(x) = \\dfrac{60}{x + 6}$): writes the shift amount in place of the $-4$ instead of combining $-4 + 6$.\n* Choice D ($q(x) = \\dfrac{66}{x - 4}$): adds $6$ to the constant, which stretches the graph rather than translating it.\n\n**Test Day Takeaway:** Find the constant from the given point first; then a shift of $h$ units left means $x \\to x + h$, inside the function.",
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
    question: "The perimeter of an isosceles right triangle is $16 + 8\\sqrt{2}$ centimeters. What is the area, in square centimeters, of the triangle?",
    choices: [
      { id: "A", text: "$32$" },
      // distractor: uses a leg and the hypotenuse as base and height, (1/2)(8)(8√2)
      { id: "B", text: "$32\\sqrt{2}$" },
      // distractor: finds the leg 8 but forgets the 1/2 in the area formula
      { id: "C", text: "$64$" },
      // distractor: takes 16, the whole-number part of the perimeter, as the leg length
      { id: "D", text: "$128$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: 45-45-90 Triangle — Perimeter to Leg**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** With leg $a$, the perimeter is $2a + a\\sqrt{2} = 16 + 8\\sqrt{2}$, so $a = 8$ and the area is $\\frac{1}{2}(8)(8) = 32$.\n\n**The Full Solution:**\nStep 1: Let each leg have length $a$. The hypotenuse of an isosceles right triangle is $a\\sqrt{2}$, so the perimeter is $2a + a\\sqrt{2}$.\nStep 2: Matching $2a + a\\sqrt{2} = 16 + 8\\sqrt{2}$ gives $a = 8$ (the whole-number parts give $2a = 16$ and the radical parts give $a = 8$).\nStep 3: The legs are the base and height, so the area is $\\frac{1}{2}(8)(8) = 32$ square centimeters.\n\nCheck: $8 + 8 + 8\\sqrt{2} = 16 + 8\\sqrt{2}$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($32\\sqrt{2}$): multiplies a leg by the hypotenuse; the hypotenuse is not a height of the triangle.\n* Choice C ($64$): finds $a = 8$ but forgets the $\\frac{1}{2}$ in the area formula.\n* Choice D ($128$): treats $16$ as the leg length; $16$ is the sum of the two legs.\n\n**Test Day Takeaway:** Write the perimeter of a 45-45-90 triangle as $2a + a\\sqrt{2}$ and match parts; the area then uses the two legs.",
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
    question: "Three identical cubes, each with edge length $n$ inches, are joined face to face in a row to form a rectangular prism. Which expression represents the surface area, in square inches, of the prism?",
    choices: [
      // distractor: counts only the four long faces, 4(3n^2), and leaves out the two square ends
      { id: "A", text: "$12n^{2}$" },
      { id: "B", text: "$14n^{2}$" },
      // distractor: subtracts only one face at each of the two joins, 18n^2 - 2n^2
      { id: "C", text: "$16n^{2}$" },
      // distractor: adds the surface areas of the three cubes, 3(6n^2), without removing hidden faces
      { id: "D", text: "$18n^{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Surface Area of Glued Prisms**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The prism measures $n$ by $n$ by $3n$, so its surface area is $2(n^2 + 3n^2 + 3n^2) = 14n^2$.\n\n**The Full Solution:**\nStep 1: Three cubes in a row form a rectangular prism with dimensions $n$, $n$, and $3n$.\nStep 2: The prism has two square ends of area $n^2$ each and four rectangular faces of area $n \\cdot 3n = 3n^2$ each.\nStep 3: Surface area $= 2n^2 + 4(3n^2) = 14n^2$.\n\nCheck: The three cubes have $18$ faces in all; each of the $2$ joins hides $2$ faces, so $18n^2 - 4n^2 = 14n^2$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12n^{2}$): counts the four long faces but leaves out the two square ends.\n* Choice C ($16n^{2}$): removes one face per join, but each join hides a face from both cubes.\n* Choice D ($18n^{2}$): adds the three cubes' surface areas and removes none of the hidden faces.\n\n**Test Day Takeaway:** Find the new solid's dimensions and use $2(lw + lh + wh)$, or subtract two faces for every join.",
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
    question: "What is the value of $\\tan\\left(\\frac{23\\pi}{4}\\right)$?",
    choices: [
      { id: "A", text: "$-1$" },
      // distractor: reports sin(7π/4) = -√2/2 instead of the tangent
      { id: "B", text: "$-\\frac{\\sqrt{2}}{2}$" },
      // distractor: reports cos(7π/4) = √2/2 instead of the tangent
      { id: "C", text: "$\\frac{\\sqrt{2}}{2}$" },
      // distractor: uses the reference angle π/4 but drops the negative sign of quadrant IV
      { id: "D", text: "$1$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Coterminal-Angle Reduction for Tangent**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** $\\frac{23\\pi}{4} - 4\\pi = \\frac{7\\pi}{4}$, which lies in quadrant IV with reference angle $\\frac{\\pi}{4}$, so the tangent is $-1$.\n\n**The Full Solution:**\nStep 1: Subtract full turns of $2\\pi = \\frac{8\\pi}{4}$: $\\frac{23\\pi}{4} - \\frac{16\\pi}{4} = \\frac{7\\pi}{4}$, so $\\tan\\left(\\frac{23\\pi}{4}\\right) = \\tan\\left(\\frac{7\\pi}{4}\\right)$.\nStep 2: The angle $\\frac{7\\pi}{4}$ lies in quadrant IV, where cosine is positive and sine is negative, and its reference angle is $\\frac{\\pi}{4}$.\nStep 3: $\\tan\\left(\\frac{7\\pi}{4}\\right) = \\frac{\\sin(7\\pi/4)}{\\cos(7\\pi/4)} = \\frac{-\\sqrt{2}/2}{\\sqrt{2}/2} = -1$.\n\nCheck: $\\frac{23\\pi}{4}$ is $5.75\\pi$; removing two full turns ($4\\pi$) leaves $1.75\\pi$, which is in quadrant IV, where tangent is negative. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{\\sqrt{2}}{2}$): gives the sine of $\\frac{7\\pi}{4}$, not the tangent.\n* Choice C ($\\frac{\\sqrt{2}}{2}$): gives the cosine of $\\frac{7\\pi}{4}$, not the tangent.\n* Choice D ($1$): uses the reference angle $\\frac{\\pi}{4}$ but misses that tangent is negative in quadrant IV.\n\n**Test Day Takeaway:** Strip off multiples of $2\\pi$, locate the quadrant for the sign, and use the reference angle for the size.",
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
    question: "In triangle $LMN$ shown, angle $N$ is a right angle and $\\sin M = \\frac{24}{25}$. What is the value of $\\tan L$?",
    diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [48, 0], [48, 14]], labels: ["L", "N", "M"], sideLabels: ["", "", ""], rightAngleVertex: 1, figureNote: true } },
    correctAnswer: "7/24",
    explanation: "**SAT Pattern: Direct Trig Ratio**\n\n**The correct answer is $\\frac{7}{24}$.**\n\n**The Fast Way (~40s):** $\\sin M = \\frac{LN}{LM} = \\frac{24}{25}$, so take $LN = 24$ and $LM = 25$; then $MN = \\sqrt{25^2 - 24^2} = 7$ and $\\tan L = \\frac{MN}{LN} = \\frac{7}{24}$.\n\n**The Full Solution:**\nStep 1: The leg opposite angle $M$ is $\\overline{LN}$ and the hypotenuse is $\\overline{LM}$, so $LN = 24k$ and $LM = 25k$ for some positive number $k$.\nStep 2: By the Pythagorean theorem, $MN^2 = (25k)^2 - (24k)^2 = 49k^2$, so $MN = 7k$.\nStep 3: From angle $L$, the opposite leg is $\\overline{MN}$ and the adjacent leg is $\\overline{LN}$, so $\\tan L = \\frac{7k}{24k} = \\frac{7}{24}$.\n\nCheck: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$. Equivalent entries: $7/24$, $.2916$, or $.2917$. ✓\n\n**Common Mistakes:**\n* $\\frac{24}{7}$: this is $\\frac{LN}{MN} = \\tan M$, the tangent of the other acute angle.\n* $\\frac{7}{25}$: this is $\\frac{MN}{LM} = \\sin L$, opposite over hypotenuse instead of opposite over adjacent.\n* $\\frac{24}{25}$: this copies $\\sin M$; since $\\sin M = \\cos L$, it is the cosine of $L$, not the tangent.\n\n**Test Day Takeaway:** A trig ratio fixes the shape of a right triangle, not its size: write the sides as multiples of $k$, find the third side, and the $k$ cancels in the ratio the question asks for.",
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
    question: "$(x - 6)^{2} + (y + 3)^{2} = 169$\nIn the $xy$-plane, the graph of the given equation is a circle. The point $(a, 9)$ lies on the circle. What is the greatest possible value of $a$?",
    choices: [
      // distractor: finds both solutions, 1 and 11, and picks the lesser
      { id: "A", text: "$1$" },
      // distractor: reports the x-coordinate of the center
      { id: "B", text: "$6$" },
      { id: "C", text: "$11$" },
      // distractor: adds the radius to the center's x-coordinate, 6 + 13, which is the rightmost point of the circle, not a point with y = 9
      { id: "D", text: "$19$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Circle in Standard Form — $x$-range**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Substituting $y = 9$ gives $(a - 6)^2 + 144 = 169$, so $a - 6 = \\pm 5$ and the greatest value is $a = 11$.\n\n**The Full Solution:**\nStep 1: Substitute $x = a$ and $y = 9$: $(a - 6)^2 + (9 + 3)^2 = 169$.\nStep 2: $(a - 6)^2 = 169 - 144 = 25$, so $a - 6 = 5$ or $a - 6 = -5$.\nStep 3: $a = 11$ or $a = 1$; the greatest possible value is $11$.\n\nCheck: $(11 - 6)^2 + (9 + 3)^2 = 25 + 144 = 169$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): is the other point on the circle with $y = 9$, the lesser value of $a$.\n* Choice B ($6$): is the $x$-coordinate of the center; the center is not on the circle.\n* Choice D ($19$): adds the radius $13$ to $6$; that point, $(19, -3)$, has $y = -3$, not $9$.\n\n**Test Day Takeaway:** Substitute the known coordinate, solve for the square, and remember the $\\pm$; the question's word (greatest) picks the root.",
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
    question: "$f(x) = 3x^{2} + bx - 28$\nThe function $f$ is defined by the given equation, where $b$ is a constant. If $f(4) = 0$, what is the value of $f(6)$?",
    correctAnswer: "50",
    explanation: "**SAT Pattern: Recover Parameter from Known Root, then Evaluate**\n\n**The correct answer is 50.**\n\n**The Fast Way (~40s):** $f(4) = 48 + 4b - 28 = 0$ gives $b = -5$, so $f(6) = 108 - 30 - 28 = 50$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 4$: $3(4)^2 + 4b - 28 = 48 + 4b - 28 = 20 + 4b$.\nStep 2: Set it equal to $0$: $20 + 4b = 0$, so $b = -5$ and $f(x) = 3x^2 - 5x - 28$.\nStep 3: Evaluate: $f(6) = 3(36) - 5(6) - 28 = 108 - 30 - 28 = 50$.\n\nCheck: $f(4) = 48 - 20 - 28 = 0$, and $3x^2 - 5x - 28 = (3x + 7)(x - 4)$ has $4$ as a zero. ✓\n\n**Common Mistakes:**\n* $110$: uses $b = 5$ after a sign slip, so $f(6) = 108 + 30 - 28$.\n* $-5$: stops at the value of $b$ and never evaluates $f(6)$.\n* $-22$: forgets the coefficient $3$ when evaluating, $36 - 30 - 28$.\n\n**Test Day Takeaway:** A known zero is an equation for the missing constant; solve for it, write the complete function, then evaluate.",
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
    question: "In rectangle $ABCD$, $AC = 2(BC)$ and $AB = 12$. The area of the rectangle is $k\\sqrt{3}$. What is the value of $k$?",
    correctAnswer: "48",
    explanation: "**SAT Pattern: 30-60-90 from Diagonal-to-Side Ratio**\n\n**The correct answer is 48.**\n\n**The Fast Way (~60s):** A diagonal twice a side makes triangle $ABC$ a 30-60-90 triangle, so $AB = BC\\sqrt{3}$, $BC = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$, and the area is $12 \\cdot 4\\sqrt{3} = 48\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Angle $B$ of the rectangle is a right angle, so triangle $ABC$ is a right triangle with hypotenuse $\\overline{AC}$. Since $AC = 2(BC)$, the leg $\\overline{BC}$ is half the hypotenuse, which makes triangle $ABC$ a 30-60-90 triangle with $\\overline{BC}$ as the shorter leg.\nStep 2: In a 30-60-90 triangle the longer leg is $\\sqrt{3}$ times the shorter leg, so $12 = BC\\sqrt{3}$ and $BC = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$.\nStep 3: Area $= AB \\cdot BC = 12 \\cdot 4\\sqrt{3} = 48\\sqrt{3}$, so $k = 48$.\n\nCheck: $AC = 2(4\\sqrt{3}) = 8\\sqrt{3}$, and $12^2 + (4\\sqrt{3})^2 = 144 + 48 = 192 = (8\\sqrt{3})^2$. ✓\n\n**Common Mistakes:**\n* $144$: treats $AB = 12$ as the shorter side, so the other side is $12\\sqrt{3}$.\n* $24$: takes half the product of the sides, which is the area of triangle $ABC$, not the rectangle.\n* $36$: treats $12$ as the diagonal, giving sides $6$ and $6\\sqrt{3}$.\n\n**Test Day Takeaway:** A diagonal twice a side signals a 30-60-90 triangle with sides $x$, $x\\sqrt{3}$, $2x$; decide which side you were given before scaling.",
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
    question: "$(x + 4)^{2} + (y - 1)^{2} = 25$\nThe graph of the given equation in the $xy$-plane is a circle. Line $p$ is tangent to the circle at the point $(-1, 5)$. What is the slope of line $p$?",
    choices: [
      // distractor: negates the slope of the radius, 4/3, but does not take its reciprocal
      { id: "A", text: "$-\\frac{4}{3}$" },
      { id: "B", text: "$-\\frac{3}{4}$" },
      // distractor: takes the reciprocal of the radius slope but does not change its sign
      { id: "C", text: "$\\frac{3}{4}$" },
      // distractor: gives the slope of the radius from the center to (-1, 5), not of the tangent line
      { id: "D", text: "$\\frac{4}{3}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Tangent Line to a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The center is $(-4, 1)$, so the radius to $(-1, 5)$ has slope $\\frac{5 - 1}{-1 - (-4)} = \\frac{4}{3}$; the tangent line is perpendicular to it, with slope $-\\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: The circle has center $(-4, 1)$ and radius $\\sqrt{25} = 5$; the point $(-1, 5)$ is on it because $3^{2} + 4^{2} = 25$.\nStep 2: The radius from $(-4, 1)$ to $(-1, 5)$ has slope $\\frac{4}{3}$.\nStep 3: A tangent line is perpendicular to the radius at the point of tangency, so its slope is the negative reciprocal, $-\\frac{3}{4}$. Check: $\\frac{4}{3}\\left(-\\frac{3}{4}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{4}{3}$): changes the sign of the radius slope but does not flip the fraction.\n* Choice C ($\\frac{3}{4}$): flips the fraction but keeps the positive sign.\n* Choice D ($\\frac{4}{3}$): is the slope of the radius, not the tangent line.\n\n**Test Day Takeaway:** A tangent line meets the radius at a right angle: find the slope from the center to the point, then take its negative reciprocal.",
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
    question: "In the figure shown, $O$ is the center of the circle, and the length of minor arc $AB$ is $\\frac{7\\pi}{2}$. What is the length of $\\overline{AB}$?",
    diagram: { type: "circleWithSector", params: { centralAngle: 90, angleLabel: "90°", showAngleLabel: true, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
    choices: [
      // distractor: treats 7 pi/2 as the circumference of the whole circle, so r = 7/4
      { id: "A", text: "$\\frac{7\\sqrt{2}}{4}$" },
      // distractor: reports the radius OA instead of the chord AB
      { id: "B", text: "$7$" },
      { id: "C", text: "$7\\sqrt{2}$" },
      // distractor: uses pi r as the circumference, so the arc is pi r/4 and r = 14
      { id: "D", text: "$14\\sqrt{2}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Right Triangle at Center — Chord Length**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** A $90^\\circ$ arc is $\\frac{1}{4}$ of the circumference, so $\\frac{2\\pi r}{4} = \\frac{7\\pi}{2}$ gives $r = 7$, and $AB = 7\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The central angle is $90^\\circ$, so the arc length is $\\frac{90}{360}(2\\pi r) = \\frac{\\pi r}{2}$.\nStep 2: $\\frac{\\pi r}{2} = \\frac{7\\pi}{2}$ gives $r = 7$, so $OA = OB = 7$.\nStep 3: Triangle $AOB$ is an isosceles right triangle with legs $7$, so $AB = 7\\sqrt{2}$.\n\nCheck: $7^2 + 7^2 = 98 = (7\\sqrt{2})^2$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7\\sqrt{2}}{4}$): sets $2\\pi r = \\frac{7\\pi}{2}$, treating the arc as the whole circle, so $r = \\frac{7}{4}$.\n* Choice B ($7$): stops at the radius; $\\overline{AB}$ is the hypotenuse of triangle $AOB$, not a radius.\n* Choice D ($14\\sqrt{2}$): uses $\\pi r$ for the circumference, so $\\frac{\\pi r}{4} = \\frac{7\\pi}{2}$ and $r = 14$.\n\n**Test Day Takeaway:** An arc is its angle's fraction of the circumference; once you have the radius, two radii at $90^\\circ$ make a 45-45-90 triangle.",
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
    question: "A circle has area $75\\pi$ square centimeters. An equilateral triangle is inscribed in the circle. What is the length, in centimeters, of each side of the triangle?",
    correctAnswer: "15",
    explanation: "**SAT Pattern: Equilateral Triangle — Circumradius**\n\n**The correct answer is 15.**\n\n**The Fast Way (~50s):** $\\pi r^2 = 75\\pi$ gives $r = 5\\sqrt{3}$, and an inscribed equilateral triangle has side $r\\sqrt{3} = 15$.\n\n**The Full Solution:**\nStep 1: From $\\pi r^2 = 75\\pi$, $r^2 = 75$ and $r = 5\\sqrt{3}$.\nStep 2: The center of the circle is the center of the triangle. Joining it to two vertices forms a triangle with sides $r$, $r$, and $s$ and a $120^\\circ$ angle at the center; splitting it in half gives two 30-60-90 triangles with hypotenuse $r$ and longer leg $\\frac{s}{2}$, so $\\frac{s}{2} = \\frac{r\\sqrt{3}}{2}$ and $s = r\\sqrt{3}$.\nStep 3: $s = 5\\sqrt{3} \\cdot \\sqrt{3} = 15$.\n\nCheck: The circumradius of an equilateral triangle with side $15$ is $\\frac{15}{\\sqrt{3}} = 5\\sqrt{3}$, and $\\pi(5\\sqrt{3})^2 = 75\\pi$. ✓\n\n**Common Mistakes:**\n* $5\\sqrt{3} \\approx 8.66$: this is the radius, not the side.\n* $10\\sqrt{3} \\approx 17.32$: this treats a side as a diameter of the circle.\n* $7.5$: this is half a side, the longer leg of the 30-60-90 triangle, reported without doubling.\n\n**Test Day Takeaway:** For an equilateral triangle in a circle, side $= r\\sqrt{3}$; get $r$ from the area or circumference first.",
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
    question: "Triangle $RST$ shown has an area of $162$ square units. Triangle $LMN$ is similar to triangle $RST$, with $L$, $M$, and $N$ corresponding to $R$, $S$, and $T$, respectively. What is the area, in square units, of triangle $LMN$?",
    diagram: { type: "similarTriangles", params: { triangle1: { vertices: [[4, 12], [0, 0], [12, 0]], labels: ["L", "M", "N"], sideLabels: ["", "12", ""] }, triangle2: { vertices: [[6, 18], [0, 0], [18, 0]], labels: ["R", "S", "T"], sideLabels: ["", "18", ""] }, figureNote: true } },
    choices: [
      // distractor: multiplies the area by the cube of the length ratio, (2/3)^3
      { id: "A", text: "$48$" },
      { id: "B", text: "$72$" },
      // distractor: multiplies the area by the length ratio 2/3 instead of its square
      { id: "C", text: "$108$" },
      // distractor: multiplies the area by 3/2, scaling the wrong way and skipping the square
      { id: "D", text: "$243$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Similar Figures Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The length ratio is $\\frac{MN}{ST} = \\frac{12}{18} = \\frac{2}{3}$, so the area ratio is $\\frac{4}{9}$ and the area of $LMN$ is $162 \\cdot \\frac{4}{9} = 72$.\n\n**The Full Solution:**\nStep 1: Sides $\\overline{MN}$ and $\\overline{ST}$ correspond, so the scale factor from $RST$ to $LMN$ is $\\frac{12}{18} = \\frac{2}{3}$.\nStep 2: Areas of similar figures scale by the square of the length ratio: $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$.\nStep 3: Area of $LMN$ $= 162 \\cdot \\frac{4}{9} = 72$ square units. Check: $\\frac{72}{162} = \\frac{4}{9} = \\left(\\frac{2}{3}\\right)^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($48$): cubes the length ratio, which is how volumes scale, not areas.\n* Choice C ($108$): scales the area by $\\frac{2}{3}$, the length ratio, instead of its square.\n* Choice D ($243$): multiplies by $\\frac{3}{2}$, which makes the smaller triangle larger and skips the square.\n\n**Test Day Takeaway:** Find the length ratio from one pair of corresponding sides, then square it for areas; check that the smaller triangle gets the smaller area.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "similar-area-ratio-chain",
    sourceRef: "pilot-m2-similar-area",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-08-13"
  }
];
