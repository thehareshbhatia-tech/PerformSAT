// Practice questions for Triangles module
// Questions are organized by SECTION (question type)

export const trianglesQuestions = {
  // Section: Triangle Fundamentals
  "Triangle Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "In triangle $JKL$, the measure of angle $J$ is $x^\\circ$, the measure of angle $K$ is $y^\\circ$, and $x + y = 110$. What is the measure, in degrees, of angle $L$?",
      choices: [
        // distractor: halves 110, as though angle L were equal to each of the other two angles
        { id: "A", text: "$55$" },
        { id: "B", text: "$70$" },
        // distractor: reports x + y, the sum of the other two angles, instead of angle L
        { id: "C", text: "$110$" },
        // distractor: subtracts 110 from 360, the angle sum of a quadrilateral
        { id: "D", text: "$250$" }
      ],
      correctAnswer: "B",
      hint: "The three angle measures of a triangle always have the same sum.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The angles of a triangle sum to $180^\\circ$, so angle $L$ measures $180 - 110 = 70$ degrees.\n\n**The Full Solution:**\nStep 1: The measures of the three angles of a triangle sum to $180^\\circ$, so $x + y + L = 180$, where $L$ is the measure of angle $L$ in degrees.\nStep 2: It's given that $x + y = 110$, so $110 + L = 180$.\nStep 3: Subtract: $L = 70$. Check: $110 + 70 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($55$): halves $110$, which would be the measure of angle $J$ or $K$ only if those two angles were equal, and is not angle $L$.\n* Choice C ($110$): is the combined measure of angles $J$ and $K$, not the measure of angle $L$.\n* Choice D ($250$): subtracts $110$ from $360$, the angle sum of a quadrilateral, not a triangle.\n\n**Test Day Takeaway:** Whenever two angle measures of a triangle, or their sum, are known, subtract from $180^\\circ$ to get the third.",
      skills: ["triangle-angle-sum"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In triangle $ABC$, $AB = AC$, and the measure of angle $A$ is $50^{\\circ}$. What is the measure, in degrees, of angle $B$?",
      choices: [
        // distractor: halves the measure of angle A
        { id: "A", text: "$25$" },
        // distractor: assumes angle B is equal to angle A
        { id: "B", text: "$50$" },
        { id: "C", text: "$65$" },
        // distractor: finds the combined measure of angles B and C and does not split it
        { id: "D", text: "$130$" }
      ],
      correctAnswer: "C",
      hint: "The angles opposite the two equal sides are equal.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Angles $B$ and $C$ are equal, so each measures $\\frac{180 - 50}{2} = 65$ degrees.\n\n**The Full Solution:**\nStep 1: Since $AB = AC$, the angles opposite those sides, angles $C$ and $B$, have equal measures.\nStep 2: The three angles sum to $180^{\\circ}$, so angles $B$ and $C$ together measure $180 - 50 = 130$ degrees.\nStep 3: Each of them measures $\\frac{130}{2} = 65$ degrees. Check: $50 + 65 + 65 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): this halves $50$; the $130$ degrees left over is what is split between the two equal angles.\n* Choice B ($50$): the equal angles are $B$ and $C$, not $A$ and $B$.\n* Choice D ($130$): this is the combined measure of angles $B$ and $C$; each one is half of it.\n\n**Test Day Takeaway:** In an isosceles triangle, the angles opposite the equal sides are equal; split what is left of $180^{\\circ}$ between them.",
      skills: ["triangle-types"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In right triangle $ABC$, the measures of the two acute angles are $(4k + 6)^\\circ$ and $(2k - 6)^\\circ$. What is the value of $k$?",
      choices: [
        { id: "A", text: "$15$" },
        // distractor: reports the angle measure 2k - 6 instead of k
        { id: "B", text: "$24$" },
        // distractor: sets the sum of the two acute angles equal to 180 instead of 90
        { id: "C", text: "$30$" },
        // distractor: reports the angle measure 4k + 6 instead of k
        { id: "D", text: "$66$" }
      ],
      correctAnswer: "A",
      hint: "The third angle of the triangle is known even though no number is given for it.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** The two acute angles of a right triangle sum to $90^\\circ$: $6k = 90$, so $k = 15$.\n\n**The Full Solution:**\nStep 1: The angles of a triangle sum to $180^\\circ$, and one angle is $90^\\circ$, so the two acute angles sum to $90^\\circ$.\nStep 2: Write the equation: $(4k + 6) + (2k - 6) = 90$, which simplifies to $6k = 90$.\nStep 3: Divide: $k = 15$. Check: the angles are $66^\\circ$ and $24^\\circ$, and $66 + 24 + 90 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): is the measure of the angle $(2k - 6)^\\circ$, not the value of $k$.\n* Choice C ($30$): sets the two acute angles equal to $180$, forgetting the right angle.\n* Choice D ($66$): is the measure of the angle $(4k + 6)^\\circ$, not the value of $k$.\n\n**Test Day Takeaway:** In a right triangle the two acute angles are complementary; write their sum as $90$, solve, and reread whether the question asks for the variable or an angle.",
      skills: ["triangle-angle-sum", "triangle-types"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In triangle $PQR$, the measure of angle $Q$ is $3$ times the measure of angle $P$, and the measure of angle $R$ is $76^{\\circ}$. What is the measure, in degrees, of angle $P$?",
      choices: [
        { id: "A", text: "$26$" },
        // distractor: splits 104 equally, as if angles P and Q were equal
        { id: "B", text: "$52$" },
        // distractor: gives the measure of angle Q
        { id: "C", text: "$78$" },
        // distractor: gives the combined measure of angles P and Q
        { id: "D", text: "$104$" }
      ],
      correctAnswer: "A",
      hint: "Write the measure of angle $Q$ in terms of the measure of angle $P$, then use the angle sum.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $p + 3p + 76 = 180$, so $4p = 104$ and $p = 26$.\n\n**The Full Solution:**\nStep 1: Let angle $P$ measure $p$ degrees; then angle $Q$ measures $3p$ degrees.\nStep 2: The angles of a triangle sum to $180^{\\circ}$: $p + 3p + 76 = 180$, so $4p = 104$.\nStep 3: So $p = 26$. Check: $26 + 78 + 76 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($52$): this splits $104$ equally, as if angles $P$ and $Q$ were equal; angle $Q$ is $3$ times angle $P$.\n* Choice C ($78$): this is the measure of angle $Q$, $3(26)$.\n* Choice D ($104$): this is the combined measure of angles $P$ and $Q$.\n\n**Test Day Takeaway:** Write every unknown angle in terms of one variable, then use the $180^{\\circ}$ angle sum.",
      skills: ["triangle-inequality"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In triangle $ABC$, $AB = AC$, the measure of angle $A$ is $x^\\circ$, and triangle $ABC$ is obtuse. Which of the following must be true?",
      choices: [
        // distractor: describes triangles in which angle A is the smallest angle, and every angle is then acute
        { id: "A", text: "$x < 60$" },
        // distractor: keeps angle A acute, but then all three angles are acute
        { id: "B", text: "$x < 90$" },
        // distractor: makes angle A the largest angle while keeping it acute, so no angle is obtuse
        { id: "C", text: "$60 < x < 90$" },
        { id: "D", text: "$x > 90$" }
      ],
      correctAnswer: "D",
      hint: "Decide which angle of the triangle can be the obtuse one.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** The base angles $B$ and $C$ are equal, so they can't both be obtuse; the obtuse angle must be angle $A$, so $x > 90$.\n\n**The Full Solution:**\nStep 1: Since $AB = AC$, the angles opposite those sides, angles $C$ and $B$, have equal measures.\nStep 2: If angle $B$ were obtuse, angle $C$ would be too, and two obtuse angles would sum to more than $180^\\circ$. So neither base angle can be obtuse.\nStep 3: The obtuse angle must therefore be angle $A$, so $x > 90$. Check: with $x = 120$, the base angles are each $\\frac{180 - 120}{2} = 30$, and $120 + 30 + 30 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x < 60$): makes angle $A$ the smallest angle, and each base angle is then less than $90^\\circ$, so the triangle is acute.\n* Choice B ($x < 90$): keeps angle $A$ acute, and the base angles are then acute as well, so the triangle cannot be obtuse.\n* Choice C ($60 < x < 90$): makes angle $A$ the largest angle but still acute, so no angle is obtuse.\n\n**Test Day Takeaway:** An isosceles triangle's two base angles are equal, so they are always acute; if the triangle is obtuse, the obtuse angle is the vertex angle.",
      skills: ["triangle-types"]
    }
  ],

  // Section: Angles of a Triangle
  "Angles of a Triangle": [
    {
      id: 1,
      difficulty: "easy",
      question: "In the triangle shown, what is the value of $x$?",
      diagram: { type: "triangleWithAngles", params: { angleLabels: ["52°", "71°", "x°"], vertexLabels: ["A", "C", "B"], figureNote: true } },
      choices: [
        { id: "A", text: "$57$" },
        // distractor: subtracts only the 71-degree angle from 180
        { id: "B", text: "$109$" },
        // distractor: adds the two given angles instead of subtracting their sum from 180
        { id: "C", text: "$123$" },
        // distractor: subtracts only the 52-degree angle from 180
        { id: "D", text: "$128$" }
      ],
      correctAnswer: "A",
      hint: "The three angles in the figure belong to the same triangle.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** $x = 180 - (52 + 71) = 57$.\n\n**The Full Solution:**\nStep 1: The angle measures of a triangle sum to $180^\\circ$: $52 + 71 + x = 180$.\nStep 2: Add the known angles: $52 + 71 = 123$, so $123 + x = 180$.\nStep 3: Subtract: $x = 57$. Check: $52 + 71 + 57 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($109$): subtracts only the $71^\\circ$ angle from $180$.\n* Choice C ($123$): adds the two given angles and stops, instead of subtracting their sum from $180$.\n* Choice D ($128$): subtracts only the $52^\\circ$ angle from $180$.\n\n**Test Day Takeaway:** Add the known angles first, then subtract that sum from $180$.",
      skills: ["triangle-angle-sum"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In triangle $ABC$, the exterior angle at vertex $C$ has a measure of $142^\\circ$. What is the sum of the measures, in degrees, of angles $A$ and $B$?",
      choices: [
        // distractor: gives the interior angle at $C$, the supplement, rather than the sum of the other two angles
        { id: "A", text: "$38$" },
        // distractor: halves the exterior angle, assuming angles $A$ and $B$ are equal
        { id: "B", text: "$71$" },
        { id: "C", text: "$142$" },
        // distractor: subtracts the exterior angle from $360$ instead of using the exterior angle relationship
        { id: "D", text: "$218$" }
      ],
      correctAnswer: "C",
      hint: "Find the interior angle at $C$ first.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** An exterior angle equals the sum of the two interior angles not next to it, so angles $A$ and $B$ sum to $142^\\circ$.\n\n**The Full Solution:**\nStep 1: The exterior angle and the interior angle at $C$ form a straight line, so the interior angle at $C$ is $180 - 142 = 38$ degrees.\nStep 2: The interior angles sum to $180^\\circ$, so the measures of angles $A$ and $B$ sum to $180 - 38 = 142$ degrees.\nStep 3: So the sum is $142$, which equals the exterior angle. Check: $142 + 38 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($38$): is the interior angle at $C$, not the sum of angles $A$ and $B$.\n* Choice B ($71$): halves $142$, assuming angles $A$ and $B$ are equal, and gives only one of them.\n* Choice D ($218$): subtracts $142$ from $360$, which has no role in a triangle's angle sum.\n\n**Test Day Takeaway:** An exterior angle of a triangle equals the sum of the two interior angles that are not adjacent to it.",
      skills: ["triangle-angle-sum"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "What is the measure, in degrees, of the largest angle of the triangle shown?",
      diagram: { type: "triangleWithAngles", params: { angleLabels: ["(x + 12)°", "(2x)°", "(x - 8)°"], figureNote: true } },
      choices: [
        // distractor: reports the smallest angle, (x - 8)
        { id: "A", text: "$36$" },
        // distractor: reports the value of x rather than an angle measure
        { id: "B", text: "$44$" },
        // distractor: reports the angle (x + 12) instead of the largest
        { id: "C", text: "$56$" },
        { id: "D", text: "$88$" }
      ],
      correctAnswer: "D",
      hint: "You can't tell which expression is largest until $x$ has a value.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** $(x + 12) + 2x + (x - 8) = 180$ gives $4x + 4 = 180$, so $x = 44$, and the largest angle is $2x = 88$ degrees.\n\n**The Full Solution:**\nStep 1: The angle measures sum to $180^\\circ$: $(x + 12) + 2x + (x - 8) = 180$, which simplifies to $4x + 4 = 180$.\nStep 2: Solve: $4x = 176$, so $x = 44$.\nStep 3: The angles are $44 + 12 = 56$, $2(44) = 88$, and $44 - 8 = 36$ degrees, so the largest is $88$. Check: $56 + 88 + 36 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): is the smallest angle, $(x - 8)^\\circ$, not the largest.\n* Choice B ($44$): is the value of $x$, not an angle measure.\n* Choice C ($56$): is the angle $(x + 12)^\\circ$, which is not the largest.\n\n**Test Day Takeaway:** Solve for the variable, then substitute into every expression; the question asks for an angle, not for $x$.",
      skills: ["triangle-angle-sum"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "What is the value of $z$ in the triangle shown?",
      diagram: { type: "triangleWithAngles", params: { angleLabels: ["z°", "z°", "48°"], figureNote: true } },
      choices: [
        // distractor: computes 90 - 48, treating the base angles as complementary to the apex
        { id: "A", text: "$42$" },
        { id: "B", text: "$66$" },
        // distractor: doubles the apex angle
        { id: "C", text: "$96$" },
        // distractor: stops at 180 - 48 without halving
        { id: "D", text: "$132$" }
      ],
      correctAnswer: "B",
      hint: "The $48^\\circ$ angle is the only angle that is not $z^\\circ$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $2z + 48 = 180$, so $z = 66$.\n\n**The Full Solution:**\nStep 1: The angle measures sum to $180^\\circ$: $z + z + 48 = 180$.\nStep 2: Subtract $48$: $2z = 132$.\nStep 3: Divide by $2$: $z = 66$. Check: $66 + 66 + 48 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($42$): computes $90 - 48$, as though the two angles were complementary.\n* Choice C ($96$): doubles $48$ instead of using the angle sum.\n* Choice D ($132$): finds $2z = 132$ and forgets to divide by $2$.\n\n**Test Day Takeaway:** When two angles of a triangle are equal, subtract the third angle from $180$ and split the rest in half.",
      skills: ["triangle-angle-sum"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The measures of the angles of the triangle shown are given in degrees. What is the positive difference, in degrees, between the measures of the largest angle and the smallest angle?",
      diagram: { type: "triangleWithAngles", params: { angleLabels: ["(x + 9)°", "(4x)°", "(x + 3)°"], figureNote: true } },
      choices: [
        // distractor: reports the value of x instead of a difference of angles
        { id: "A", text: "$28$" },
        // distractor: subtracts the angle (x + 9), 37 degrees, which is not the smallest angle
        { id: "B", text: "$75$" },
        { id: "C", text: "$81$" },
        // distractor: reports the largest angle without subtracting the smallest
        { id: "D", text: "$112$" }
      ],
      correctAnswer: "C",
      hint: "The question asks for a difference between two angles, not for one angle.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** $(x + 9) + 4x + (x + 3) = 180$ gives $x = 28$; the angles are $37$, $112$, and $31$, and $112 - 31 = 81$.\n\n**The Full Solution:**\nStep 1: The angle measures sum to $180$: $(x + 9) + 4x + (x + 3) = 180$, which simplifies to $6x + 12 = 180$, so $x = 28$.\nStep 2: The angles are $28 + 9 = 37$, $4(28) = 112$, and $28 + 3 = 31$ degrees.\nStep 3: The largest angle is $112^\\circ$ and the smallest is $31^\\circ$, so the difference is $112 - 31 = 81$. Check: $37 + 112 + 31 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): is the value of $x$, not a difference of two angles.\n* Choice B ($75$): subtracts $37$, the angle $(x + 9)^\\circ$, but the smallest angle is $(x + 3)^\\circ = 31^\\circ$.\n* Choice D ($112$): is the largest angle; the smallest angle still has to be subtracted.\n\n**Test Day Takeaway:** Find every angle before comparing them; the expression with the smallest constant is not always the smallest angle unless the coefficients match.",
      skills: ["triangle-angle-sum"]
    }
  ],

  // Section: Area of a Triangle
  "Area of a Triangle": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the area, in square units, of the triangle shown?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15, 0], [15, 8]], sideLabels: ["15", "8", "17"], rightAngleVertex: 1 } },
      choices: [
        { id: "A", text: "$60$" },
        // distractor: uses the hypotenuse, 17, as the height with base 8
        { id: "B", text: "$68$" },
        // distractor: multiplies the two legs and forgets the factor of one-half
        { id: "C", text: "$120$" },
        // distractor: uses the hypotenuse, 17, as the height with base 15
        { id: "D", text: "$127.5$" }
      ],
      correctAnswer: "A",
      hint: "The two sides that meet at the right angle are a base and its height.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The legs $15$ and $8$ are perpendicular, so the area is $\\frac{1}{2}(15)(8) = 60$.\n\n**The Full Solution:**\nStep 1: The right angle is between the sides of lengths $15$ and $8$, so one is a base and the other is its height.\nStep 2: The area of a triangle is $\\frac{1}{2}bh$.\nStep 3: Substitute: $\\frac{1}{2}(15)(8) = 60$ square units. Check: $8^{2} + 15^{2} = 289 = 17^{2}$, so $17$ is the hypotenuse and is not used as a height ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($68$): uses the hypotenuse as the height: $\\frac{1}{2}(8)(17) = 68$.\n* Choice C ($120$): multiplies the legs but forgets the $\\frac{1}{2}$.\n* Choice D ($127.5$): uses the hypotenuse as the height with the other leg: $\\frac{1}{2}(15)(17) = 127.5$.\n\n**Test Day Takeaway:** In a right triangle, the legs are the base and height; the hypotenuse is never the height.",
      skills: ["triangle-area"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The area of triangle $MNP$ is $176$ square inches, and the altitude from $P$ to $\\overline{MN}$ has length $16$ inches. What is the length, in inches, of $\\overline{MN}$?",
      choices: [
        // distractor: divides the area by the altitude without doubling it first
        { id: "A", text: "$11$" },
        { id: "B", text: "$22$" },
        // distractor: halves the area and never uses the altitude
        { id: "C", text: "$88$" },
        // distractor: doubles the area and stops before dividing by the altitude
        { id: "D", text: "$352$" }
      ],
      correctAnswer: "B",
      hint: "Put the known values into the area formula and solve for the missing factor.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\frac{1}{2}(MN)(16) = 176$, so $8(MN) = 176$ and $MN = 22$.\n\n**The Full Solution:**\nStep 1: The altitude to $\\overline{MN}$ is the height for base $\\overline{MN}$, so the area is $\\frac{1}{2}(MN)(16)$.\nStep 2: Set this equal to the area: $\\frac{1}{2}(MN)(16) = 176$, or $8(MN) = 176$.\nStep 3: Divide: $MN = 22$ inches. Check: $\\frac{1}{2}(22)(16) = 176$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): divides $176$ by $16$ without the factor of $2$, solving $(MN)(16) = 176$.\n* Choice C ($88$): halves the area and stops, never using the altitude.\n* Choice D ($352$): doubles the area to $352$ and stops before dividing by $16$.\n\n**Test Day Takeaway:** To find a missing base or height, substitute into $A = \\frac{1}{2}bh$ and solve; doubling the area and dividing by the known dimension does it in one line.",
      skills: ["triangle-area"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$A = \\frac{1}{2}bh$\nThe formula gives the area $A$ of a triangle with base $b$ and height $h$. If $b$ is multiplied by $3$ and $h$ is multiplied by $\\frac{1}{2}$, then $A$ is multiplied by $k$. What is the value of $k$?",
      choices: [
        // distractor: inverts both factors, using 1/3 and 2
        { id: "A", text: "$\\frac{2}{3}$" },
        { id: "B", text: "$\\frac{3}{2}$" },
        // distractor: applies only the change to the base and ignores the height
        { id: "C", text: "$3$" },
        // distractor: adds the two factors, 3 + 1/2, instead of multiplying them
        { id: "D", text: "$\\frac{7}{2}$" }
      ],
      correctAnswer: "B",
      hint: "Replace $b$ with $3b$ and $h$ with $\\frac{1}{2}h$, then compare with the original formula.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The area is multiplied by the product of the two factors: $3 \\cdot \\frac{1}{2} = \\frac{3}{2}$.\n\n**The Full Solution:**\nStep 1: Replace $b$ with $3b$ and $h$ with $\\frac{1}{2}h$: the new area is $\\frac{1}{2}(3b)\\left(\\frac{1}{2}h\\right)$.\nStep 2: Rearrange: $\\frac{1}{2}(3b)\\left(\\frac{1}{2}h\\right) = \\frac{3}{2} \\cdot \\frac{1}{2}bh = \\frac{3}{2}A$.\nStep 3: So $k = \\frac{3}{2}$. Check with numbers: $b = 4$ and $h = 6$ give $A = 12$; $b = 12$ and $h = 3$ give $18$, and $\\frac{18}{12} = \\frac{3}{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{3}$): inverts both factors, using $\\frac{1}{3}$ and $2$.\n* Choice C ($3$): applies the change to the base and ignores the change to the height.\n* Choice D ($\\frac{7}{2}$): adds $3$ and $\\frac{1}{2}$ instead of multiplying them.\n\n**Test Day Takeaway:** When each factor in a product formula is scaled, the result is scaled by the product of the scale factors.",
      skills: ["triangle-area"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "What is the area of the right triangle shown?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [20, 0], [20, 21]], sideLabels: ["20", "", "29"], rightAngleVertex: 1 } },
      choices: [
        { id: "A", text: "$210$" },
        // distractor: uses the hypotenuse, 29, as the height
        { id: "B", text: "$290$" },
        // distractor: finds the missing leg, 21, but forgets the factor of one-half
        { id: "C", text: "$420$" },
        // distractor: multiplies the leg by the hypotenuse and forgets the factor of one-half
        { id: "D", text: "$580$" }
      ],
      correctAnswer: "A",
      hint: "The two perpendicular sides are the base and the height, and the figure gives only one of them.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** The missing leg is $\\sqrt{29^{2} - 20^{2}} = 21$, so the area is $\\frac{1}{2}(20)(21) = 210$.\n\n**The Full Solution:**\nStep 1: The side of length $29$ is opposite the right angle, so it is the hypotenuse, and the missing side is a leg.\nStep 2: By the Pythagorean theorem, the missing leg is $\\sqrt{29^{2} - 20^{2}} = \\sqrt{841 - 400} = \\sqrt{441} = 21$.\nStep 3: The area is $\\frac{1}{2}(20)(21) = 210$. Check: $20^{2} + 21^{2} = 400 + 441 = 841 = 29^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($290$): uses the hypotenuse as the height: $\\frac{1}{2}(20)(29) = 290$.\n* Choice C ($420$): finds the missing leg but forgets the $\\frac{1}{2}$: $20 \\cdot 21 = 420$.\n* Choice D ($580$): multiplies the leg by the hypotenuse and forgets the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** The area of a right triangle needs both legs; if a leg is missing, find it with the Pythagorean theorem first.",
      skills: ["triangle-area"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The right triangle shown has a hypotenuse of length $12$. What is the area of the triangle?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [10.392, 0], [10.392, 6]], labels: ["30°", "", ""], sideLabels: ["", "", "12"], rightAngleVertex: 1 } },
      choices: [
        // distractor: finds the short leg, 6, and uses it for both legs
        { id: "A", text: "$18$" },
        { id: "B", text: "$18\\sqrt{3}$" },
        // distractor: uses the short leg, 6, as the base and the hypotenuse, 12, as the height
        { id: "C", text: "$36$" },
        // distractor: finds both legs but forgets the factor of one-half
        { id: "D", text: "$36\\sqrt{3}$" }
      ],
      correctAnswer: "B",
      hint: "An area needs both legs, and the $30^\\circ$ angle determines both of them.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** In a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle with hypotenuse $12$, the legs are $6$ and $6\\sqrt{3}$, so the area is $\\frac{1}{2}(6)(6\\sqrt{3}) = 18\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The triangle has a $90^\\circ$ angle and a $30^\\circ$ angle, so it is a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle.\nStep 2: The leg opposite the $30^\\circ$ angle is half the hypotenuse, $6$, and the other leg is $6\\sqrt{3}$.\nStep 3: The area is $\\frac{1}{2}(6)(6\\sqrt{3}) = 18\\sqrt{3}$. Check: $6^{2} + (6\\sqrt{3})^{2} = 36 + 108 = 144 = 12^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): finds the short leg, $6$, and uses it for both legs: $\\frac{1}{2}(6)(6) = 18$.\n* Choice C ($36$): uses the hypotenuse as the height: $\\frac{1}{2}(6)(12) = 36$.\n* Choice D ($36\\sqrt{3}$): finds both legs but forgets the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** In a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle the sides are in the ratio $1 : \\sqrt{3} : 2$; find both legs from the hypotenuse before using $\\frac{1}{2}bh$.",
      skills: ["triangle-area", "special-right-triangles"]
    }
  ],

  // Section: Similar Triangles
  "Similar Triangles": [
    {
      id: 1,
      difficulty: "easy",
      question: "Triangle $ABC$ is similar to triangle $DEF$, where $A$ corresponds to $D$ and $C$ corresponds to $F$. What is the length of $\\overline{EF}$?",
      diagram: { type: "similarTriangles", params: { triangle1: { labels: ["A", "B", "C"], sideLabels: ["8", "6", ""] }, triangle2: { labels: ["D", "E", "F"], sideLabels: ["12", "", ""] }, figureNote: true } },
      choices: [
        // distractor: divides 6 by the scale factor 1.5 instead of multiplying
        { id: "A", text: "$4$" },
        { id: "B", text: "$9$" },
        // distractor: adds the difference 12 - 8 = 4 to 6 rather than scaling
        { id: "C", text: "$10$" },
        // distractor: multiplies 6 by 12 without dividing by 8
        { id: "D", text: "$72$" }
      ],
      correctAnswer: "B",
      hint: "$B$ must correspond to $E$. Compare the two corresponding sides whose lengths are both given.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\frac{DE}{AB} = \\frac{12}{8} = 1.5$, so $EF = 1.5(6) = 9$.\n\n**The Full Solution:**\nStep 1: Since $A$ corresponds to $D$ and $C$ corresponds to $F$, $B$ corresponds to $E$. So $\\overline{DE}$ corresponds to $\\overline{AB}$ and $\\overline{EF}$ corresponds to $\\overline{BC}$.\nStep 2: The scale factor from triangle $ABC$ to triangle $DEF$ is $\\frac{12}{8} = 1.5$.\nStep 3: Multiply: $EF = 1.5(6) = 9$. Check: $\\frac{9}{6} = 1.5 = \\frac{12}{8}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): divides $6$ by the scale factor instead of multiplying; triangle $DEF$ is the larger triangle.\n* Choice C ($10$): adds the difference $12 - 8 = 4$ to $6$ instead of scaling.\n* Choice D ($72$): multiplies $6$ by $12$ and never divides by $8$.\n\n**Test Day Takeaway:** Similar triangles scale every side by the same factor; find it from one pair of corresponding sides, then multiply.",
      skills: ["similar-triangles"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Triangle $ABC$ is similar to triangle $XYZ$, where $A$, $B$, and $C$ correspond to $X$, $Y$, and $Z$, respectively. If angle $A$ measures $41^\\circ$ and angle $B$ measures $77^\\circ$, what is the measure, in degrees, of angle $Z$?",
      choices: [
        // distractor: gives the measure of angle X, which corresponds to angle A
        { id: "A", text: "$41$" },
        { id: "B", text: "$62$" },
        // distractor: gives the measure of angle Y, which corresponds to angle B
        { id: "C", text: "$77$" },
        // distractor: subtracts only angle B from 180
        { id: "D", text: "$103$" }
      ],
      correctAnswer: "B",
      hint: "Corresponding angles of similar triangles have equal measures.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Angle $Z$ corresponds to angle $C$, which measures $180 - 41 - 77 = 62$ degrees.\n\n**The Full Solution:**\nStep 1: In triangle $ABC$, the angle measures sum to $180^\\circ$, so angle $C$ measures $180 - 41 - 77 = 62$ degrees.\nStep 2: Corresponding angles of similar triangles are equal, and angle $Z$ corresponds to angle $C$.\nStep 3: So angle $Z$ measures $62$ degrees. Check: angles $X$, $Y$, and $Z$ measure $41^\\circ$, $77^\\circ$, and $62^\\circ$, and $41 + 77 + 62 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($41$): is the measure of angle $X$, which corresponds to angle $A$.\n* Choice C ($77$): is the measure of angle $Y$, which corresponds to angle $B$.\n* Choice D ($103$): subtracts only angle $B$ from $180$ and leaves out angle $A$.\n\n**Test Day Takeaway:** Similarity keeps angle measures the same; use the correspondence to match each angle, then use the $180^\\circ$ sum for the missing one.",
      skills: ["similar-triangles"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Triangle $ABC$ has side lengths $AB = 14$, $BC = 18$, and $AC = 22$. Triangle $DEF$ is similar to triangle $ABC$, where $D$, $E$, and $F$ correspond to $A$, $B$, and $C$, respectively, and $DE = 21$. What is the perimeter of triangle $DEF$?",
      choices: [
        // distractor: scales by 14/21 instead of 21/14, making triangle DEF smaller
        { id: "A", text: "$36$" },
        // distractor: gives the perimeter of triangle ABC without scaling
        { id: "B", text: "$54$" },
        // distractor: adds the difference 21 - 14 = 7 to the perimeter of triangle ABC instead of scaling
        { id: "C", text: "$61$" },
        { id: "D", text: "$81$" }
      ],
      correctAnswer: "D",
      hint: "$\\overline{DE}$ corresponds to $\\overline{AB}$, so it shows how much larger triangle $DEF$ is.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** The scale factor is $\\frac{21}{14} = 1.5$, and the perimeter of triangle $ABC$ is $54$, so triangle $DEF$ has perimeter $1.5(54) = 81$.\n\n**The Full Solution:**\nStep 1: $\\overline{DE}$ corresponds to $\\overline{AB}$, so the scale factor from triangle $ABC$ to triangle $DEF$ is $\\frac{21}{14} = 1.5$.\nStep 2: The perimeter of triangle $ABC$ is $14 + 18 + 22 = 54$.\nStep 3: Every side of triangle $DEF$ is $1.5$ times the corresponding side, so its perimeter is $1.5(54) = 81$. Check: the sides are $21$, $27$, and $33$, and $21 + 27 + 33 = 81$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): scales by $\\frac{14}{21}$ instead of $\\frac{21}{14}$, making triangle $DEF$ smaller than triangle $ABC$.\n* Choice B ($54$): is the perimeter of triangle $ABC$, before scaling.\n* Choice C ($61$): adds the difference $21 - 14 = 7$ to $54$ instead of multiplying by the scale factor.\n\n**Test Day Takeaway:** Perimeters of similar triangles are in the same ratio as their corresponding sides.",
      skills: ["similar-triangles"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Triangle $PQR$ is similar to triangle $STU$, where $P$, $Q$, and $R$ correspond to $S$, $T$, and $U$, respectively. The length of $\\overline{PQ}$ is $12$, the length of $\\overline{ST}$ is $8$, and the area of triangle $PQR$ is $81$. What is the area of triangle $STU$?",
      choices: [
        { id: "A", text: "$36$" },
        // distractor: multiplies by the side ratio 2/3 once instead of squaring it
        { id: "B", text: "$54$" },
        // distractor: inverts the ratio and uses 3/2 once
        { id: "C", text: "$121.5$" },
        // distractor: inverts the ratio and squares it, using 9/4
        { id: "D", text: "$182.25$" }
      ],
      correctAnswer: "A",
      hint: "Lengths and areas of similar triangles do not scale by the same factor.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** The scale factor from $PQR$ to $STU$ is $\\frac{8}{12} = \\frac{2}{3}$, so areas scale by $\\left(\\frac{2}{3}\\right)^{2} = \\frac{4}{9}$: $81 \\cdot \\frac{4}{9} = 36$.\n\n**The Full Solution:**\nStep 1: $\\overline{PQ}$ and $\\overline{ST}$ are corresponding sides, so each length in triangle $STU$ is $\\frac{8}{12} = \\frac{2}{3}$ of the corresponding length in triangle $PQR$.\nStep 2: Area depends on two lengths (a base and a height), so the area is multiplied by $\\left(\\frac{2}{3}\\right)^{2} = \\frac{4}{9}$.\nStep 3: The area of triangle $STU$ is $81 \\cdot \\frac{4}{9} = 36$. Check: the ratio of areas, $\\frac{36}{81} = \\frac{4}{9}$, is the square of the side ratio $\\frac{2}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($54$): multiplies the area by the side ratio $\\frac{2}{3}$ once instead of by its square.\n* Choice C ($121.5$): uses the side ratio upside down, $\\frac{3}{2}$, and applies it only once.\n* Choice D ($182.25$): squares the ratio but uses it upside down, multiplying by $\\frac{9}{4}$.\n\n**Test Day Takeaway:** If similar figures have side lengths in the ratio $k$, their areas are in the ratio $k^{2}$.",
      skills: ["similar-triangles"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In triangle $PQR$, point $S$ is on $\\overline{PQ}$ and point $T$ is on $\\overline{PR}$ such that $\\overline{ST}$ is parallel to $\\overline{QR}$. The length of $\\overline{QR}$ is $12$ more than the length of $\\overline{ST}$. If $PT = 6$ and $TR = 9$, what is the length of $\\overline{QR}$?",
      choices: [
        // distractor: stops at the length of ST, 8, instead of QR
        { id: "A", text: "$8$" },
        { id: "B", text: "$20$" },
        // distractor: compares TR with PR, solving s/(s + 12) = 9/15
        { id: "C", text: "$30$" },
        // distractor: compares the two pieces of PR, solving s/(s + 12) = 6/9
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "B",
      hint: "Compare $\\overline{PT}$ with the whole side $\\overline{PR}$, not with the piece $\\overline{TR}$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~40s):** Triangle $PST$ is similar to triangle $PQR$ with ratio $\\frac{PT}{PR} = \\frac{6}{15} = \\frac{2}{5}$, so with $ST = s$, $\\frac{s}{s + 12} = \\frac{2}{5}$, which gives $s = 8$ and $QR = 20$.\n\n**The Full Solution:**\nStep 1: Since $\\overline{ST}$ is parallel to $\\overline{QR}$, corresponding angles are congruent, so triangle $PST$ is similar to triangle $PQR$. The side of the small triangle along $\\overline{PR}$ is $PT = 6$, and the matching side of the large triangle is $PR = PT + TR = 15$.\nStep 2: Let $ST = s$, so $QR = s + 12$. Corresponding sides are proportional: $\\frac{ST}{QR} = \\frac{PT}{PR}$, so $\\frac{s}{s + 12} = \\frac{6}{15}$.\nStep 3: Cross-multiply: $15s = 6s + 72$, so $9s = 72$ and $s = 8$. Then $QR = 8 + 12 = 20$. Check: $\\frac{8}{20} = \\frac{2}{5} = \\frac{6}{15}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): this is the length of $\\overline{ST}$; the question asks for $\\overline{QR}$, which is $12$ longer.\n* Choice C ($30$): compares $TR$ with $PR$, solving $\\frac{s}{s + 12} = \\frac{9}{15}$, which gives $s = 18$.\n* Choice D ($36$): compares the two pieces of $\\overline{PR}$, solving $\\frac{s}{s + 12} = \\frac{6}{9}$, which gives $s = 24$.\n\n**Test Day Takeaway:** When a segment parallel to one side cuts a triangle, compare a piece of a side with the whole side, never with the other piece, and answer the length the question asks for.",
      skills: ["similar-triangles"]
    }
  ],

  // Section: Right Triangles & Pythagorean Theorem
  "Right Triangles & Pythagorean Theorem": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the length of the hypotenuse of the right triangle shown?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [21, 0], [21, 20]], sideLabels: ["21", "20", ""], rightAngleVertex: 1 } },
      choices: [
        // distractor: subtracts the squares, 441 - 400 = 41
        { id: "A", text: "$\\sqrt{41}$" },
        { id: "B", text: "$29$" },
        // distractor: adds the two legs instead of their squares
        { id: "C", text: "$41$" },
        // distractor: stops at 29 squared without taking the square root
        { id: "D", text: "$841$" }
      ],
      correctAnswer: "B",
      hint: "Square the two legs before adding.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $21^{2} + 20^{2} = 441 + 400 = 841$, and $\\sqrt{841} = 29$.\n\n**The Full Solution:**\nStep 1: The legs of the right triangle have lengths $21$ and $20$; let $c$ be the length of the hypotenuse.\nStep 2: By the Pythagorean theorem, $c^{2} = 21^{2} + 20^{2} = 441 + 400 = 841$.\nStep 3: Take the positive square root: $c = 29$. Check: $29^{2} = 841 = 441 + 400$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{41}$): subtracts the squares, $441 - 400 = 41$, which is the method for a missing leg.\n* Choice C ($41$): adds the two legs instead of their squares.\n* Choice D ($841$): stops at $c^{2}$ and never takes the square root.\n\n**Test Day Takeaway:** For the hypotenuse, add the squares of the legs and then take the square root.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In the triangle shown, what is the value of $x$?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [7, 0], [7, 24]], sideLabels: ["7", "x", "25"], rightAngleVertex: 1 } },
      choices: [
        // distractor: subtracts the lengths, 25 - 7, instead of their squares
        { id: "A", text: "$18$" },
        { id: "B", text: "$24$" },
        // distractor: adds the squares, treating 25 as a leg, and rounds sqrt(674) to 26
        { id: "C", text: "$26$" },
        // distractor: adds the two given lengths
        { id: "D", text: "$32$" }
      ],
      correctAnswer: "B",
      hint: "Decide which side is the hypotenuse before using the Pythagorean theorem.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $x^{2} = 25^{2} - 7^{2} = 625 - 49 = 576$, so $x = 24$.\n\n**The Full Solution:**\nStep 1: The side of length $25$ is opposite the right angle, so it is the hypotenuse; $7$ and $x$ are the legs.\nStep 2: By the Pythagorean theorem, $7^{2} + x^{2} = 25^{2}$, so $x^{2} = 625 - 49 = 576$.\nStep 3: Take the positive square root: $x = 24$. Check: $7^{2} + 24^{2} = 49 + 576 = 625 = 25^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): subtracts the lengths, $25 - 7$, instead of their squares.\n* Choice C ($26$): adds the squares, treating $25$ as a leg: $\\sqrt{625 + 49} \\approx 26$.\n* Choice D ($32$): adds the two given lengths.\n\n**Test Day Takeaway:** When the hypotenuse is known, subtract the square of the known leg from the square of the hypotenuse.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "What is the perimeter of the right triangle shown?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 10]], sideLabels: ["", "10", "26"], rightAngleVertex: 1 } },
      choices: [
        // distractor: adds only the two labeled sides
        { id: "A", text: "$36$" },
        // distractor: finds the missing leg as 26 - 10 = 16 instead of using squares
        { id: "B", text: "$52$" },
        { id: "C", text: "$60$" },
        // distractor: computes the area, (1/2)(10)(24), instead of the perimeter
        { id: "D", text: "$120$" }
      ],
      correctAnswer: "C",
      hint: "The figure labels only two of the three sides.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The missing leg is $\\sqrt{26^{2} - 10^{2}} = \\sqrt{576} = 24$, so the perimeter is $10 + 24 + 26 = 60$.\n\n**The Full Solution:**\nStep 1: The side of length $26$ is the hypotenuse, and $10$ is one leg. Let $b$ be the unlabeled leg.\nStep 2: By the Pythagorean theorem, $10^{2} + b^{2} = 26^{2}$, so $b^{2} = 676 - 100 = 576$ and $b = 24$.\nStep 3: Add all three sides: $10 + 24 + 26 = 60$. Check: $10^{2} + 24^{2} = 100 + 576 = 676 = 26^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): adds only the two labeled sides and leaves out the unlabeled leg.\n* Choice B ($52$): finds the missing leg as $26 - 10 = 16$ instead of using the squares.\n* Choice D ($120$): computes the area, $\\frac{1}{2}(10)(24)$, instead of the perimeter.\n\n**Test Day Takeaway:** A perimeter needs every side; use the Pythagorean theorem to find any side the figure leaves unlabeled.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Right triangle $XYZ$ is shown. What is the length of $\\overline{YZ}$?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [8, 0], [8, 8.944]], labels: ["X", "Y", "Z"], sideLabels: ["8", "", "12"], rightAngleVertex: 1 } },
      choices: [
        // distractor: subtracts the lengths, 12 - 8, instead of their squares
        { id: "A", text: "$4$" },
        { id: "B", text: "$4\\sqrt{5}$" },
        // distractor: adds the squares, treating the hypotenuse as a leg: sqrt(208)
        { id: "C", text: "$4\\sqrt{13}$" },
        // distractor: adds the two given lengths
        { id: "D", text: "$20$" }
      ],
      correctAnswer: "B",
      hint: "Identify the hypotenuse from the right-angle mark, then simplify the square root.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $YZ^{2} = 12^{2} - 8^{2} = 80$, and $\\sqrt{80} = \\sqrt{16 \\cdot 5} = 4\\sqrt{5}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $Y$, so $\\overline{XZ}$, of length $12$, is the hypotenuse and $\\overline{XY}$, of length $8$, is a leg.\nStep 2: By the Pythagorean theorem, $8^{2} + YZ^{2} = 12^{2}$, so $YZ^{2} = 144 - 64 = 80$.\nStep 3: Simplify: $YZ = \\sqrt{80} = \\sqrt{16 \\cdot 5} = 4\\sqrt{5}$. Check: $8^{2} + \\left(4\\sqrt{5}\\right)^{2} = 64 + 80 = 144 = 12^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): subtracts the lengths, $12 - 8$, instead of their squares.\n* Choice C ($4\\sqrt{13}$): adds the squares, $\\sqrt{144 + 64} = \\sqrt{208}$, treating $12$ as a leg.\n* Choice D ($20$): adds the two given lengths.\n\n**Test Day Takeaway:** Subtract squares when the hypotenuse is given, then simplify the radical by pulling out the largest perfect-square factor.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A right triangle has legs of lengths $x$ and $x + 7$ and a hypotenuse of length $x + 9$. What is the value of $x$?",
      choices: [
        // distractor: factors as (x + 8)(x - 4), reversing the signs of the roots
        { id: "A", text: "$4$" },
        { id: "B", text: "$8$" },
        // distractor: reports the longer leg, x + 7 = 15
        { id: "C", text: "$15$" },
        // distractor: reports the hypotenuse, x + 9 = 17
        { id: "D", text: "$17$" }
      ],
      correctAnswer: "B",
      hint: "Write the theorem with the expressions in place, then expand before solving.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~45s):** $x^{2} + (x + 7)^{2} = (x + 9)^{2}$ simplifies to $x^{2} - 4x - 32 = 0$, or $(x - 8)(x + 4) = 0$; a length is positive, so $x = 8$.\n\n**The Full Solution:**\nStep 1: By the Pythagorean theorem, $x^{2} + (x + 7)^{2} = (x + 9)^{2}$.\nStep 2: Expand: $x^{2} + x^{2} + 14x + 49 = x^{2} + 18x + 81$, which simplifies to $x^{2} - 4x - 32 = 0$.\nStep 3: Factor: $(x - 8)(x + 4) = 0$, so $x = 8$ or $x = -4$. A side length must be positive, so $x = 8$. Check: the sides are $8$, $15$, and $17$, and $8^{2} + 15^{2} = 64 + 225 = 289 = 17^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): factors as $(x + 8)(x - 4)$, reversing the signs of the roots.\n* Choice C ($15$): this is the length $x + 7$ of the longer leg, not $x$.\n* Choice D ($17$): this is the length $x + 9$ of the hypotenuse, not $x$.\n\n**Test Day Takeaway:** When sides are given as expressions, write the Pythagorean theorem with the expressions, expand each square fully, and reject any root that makes a length negative.",
      skills: ["pythagorean-theorem"]
    }
  ],

  // Section: Trigonometric Ratios
  "Trigonometric Ratios": [
    {
      id: 1,
      difficulty: "easy",
      question: "In the right triangle shown, what is the value of $\\sin K$?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 7]], labels: ["K", "L", "M"], sideLabels: ["24", "7", "25"], rightAngleVertex: 1 } },
      choices: [
        { id: "A", text: "$\\frac{7}{25}$" },
        // distractor: the value of $\tan K$, using the adjacent leg in the denominator instead of the hypotenuse
        { id: "B", text: "$\\frac{7}{24}$" },
        // distractor: the value of $\cos K$, using the adjacent leg in the numerator
        { id: "C", text: "$\\frac{24}{25}$" },
        // distractor: the reciprocal of $\tan K$, swapping the opposite and adjacent legs
        { id: "D", text: "$\\frac{24}{7}$" }
      ],
      correctAnswer: "A",
      hint: "Sine pairs the side across from the angle with the longest side of the triangle.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\sin K$ is opposite over hypotenuse: $\\frac{LM}{KM} = \\frac{7}{25}$.\n\n**The Full Solution:**\nStep 1: Angle $L$ is the right angle, so $\\overline{KM}$ is the hypotenuse.\nStep 2: The leg opposite angle $K$ is $\\overline{LM}$, of length $7$.\nStep 3: Therefore $\\sin K = \\frac{7}{25}$. Check: $7^{2} + 24^{2} = 49 + 576 = 625 = 25^{2}$, so $\\overline{KM}$ is the hypotenuse ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{7}{24}$): the value of $\\tan K$, using the adjacent leg in the denominator instead of the hypotenuse.\n* Choice C ($\\frac{24}{25}$): the value of $\\cos K$, using the adjacent leg in the numerator.\n* Choice D ($\\frac{24}{7}$): the reciprocal of $\\tan K$, swapping the opposite and adjacent legs.\n\n**Test Day Takeaway:** Locate the hypotenuse first, then read opposite and adjacent from the angle actually named in the ratio.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In triangle $LMN$, angle $M$ is a right angle, $LM = 9$, and $MN = 40$. What is the value of $\\tan L$?",
      choices: [
        // distractor: gives cosine of L, adjacent over hypotenuse
        { id: "A", text: "$\\frac{9}{41}$" },
        // distractor: inverts the tangent, adjacent over opposite
        { id: "B", text: "$\\frac{9}{40}$" },
        // distractor: gives sine of L, opposite over hypotenuse
        { id: "C", text: "$\\frac{40}{41}$" },
        { id: "D", text: "$\\frac{40}{9}$" }
      ],
      correctAnswer: "D",
      hint: "Only two of the three sides are given, and this question does not need the third.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** $\\tan L$ is the opposite leg over the adjacent leg: $\\frac{MN}{LM} = \\frac{40}{9}$.\n\n**The Full Solution:**\nStep 1: Angle $M$ is the right angle, so $\\overline{LM}$ and $\\overline{MN}$ are the legs.\nStep 2: From angle $L$, the opposite leg is $\\overline{MN}$ (length $40$) and the adjacent leg is $\\overline{LM}$ (length $9$).\nStep 3: So $\\tan L = \\frac{40}{9}$. Check: the hypotenuse is $\\sqrt{9^{2} + 40^{2}} = 41$, and $\\frac{\\sin L}{\\cos L} = \\frac{40/41}{9/41} = \\frac{40}{9}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{41}$): this is $\\cos L$, adjacent over hypotenuse.\n* Choice B ($\\frac{9}{40}$): inverts the tangent, using adjacent over opposite.\n* Choice C ($\\frac{40}{41}$): this is $\\sin L$, opposite over hypotenuse.\n\n**Test Day Takeaway:** Tangent needs only the two legs; name the leg opposite the given angle first.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In triangle $PQR$, angle $Q$ is a right angle, $\\sin R = \\frac{5}{13}$, and $PR = 39$. What is the length of $\\overline{PQ}$?",
      choices: [
        // distractor: reports the numerator of the ratio as a length
        { id: "A", text: "$5$" },
        // distractor: reports the denominator of the ratio as a length
        { id: "B", text: "$13$" },
        { id: "C", text: "$15$" },
        // distractor: finds QR, the other leg, instead of PQ
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "C",
      hint: "A ratio of $\\frac{5}{13}$ does not make any side $5$ or $13$ units long.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\sin R = \\frac{PQ}{PR}$, so $PQ = 39 \\cdot \\frac{5}{13} = 15$.\n\n**The Full Solution:**\nStep 1: Angle $Q$ is the right angle, so $\\overline{PR}$ is the hypotenuse, and the leg opposite angle $R$ is $\\overline{PQ}$.\nStep 2: Sine is opposite over hypotenuse: $\\frac{PQ}{39} = \\frac{5}{13}$.\nStep 3: Multiply: $PQ = \\frac{5 \\cdot 39}{13} = 15$. Check: $\\frac{15}{39} = \\frac{5}{13}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): treats the numerator of the ratio as a length; the ratio only fixes the proportion of the sides.\n* Choice B ($13$): treats the denominator of the ratio as a length.\n* Choice D ($36$): finds the other leg, $QR = \\sqrt{39^{2} - 15^{2}} = 36$, instead of $PQ$.\n\n**Test Day Takeaway:** A trigonometric ratio gives a proportion, not the lengths themselves; scale it to the side you know.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In triangle $STU$, angle $U$ is a right angle, $SU = 42$, and $\\tan S = \\frac{20}{21}$. What is the length of $\\overline{ST}$?",
      choices: [
        // distractor: reports TU, the leg opposite angle S, instead of ST
        { id: "A", text: "$40$" },
        { id: "B", text: "$58$" },
        // distractor: adds the two legs, 42 + 40
        { id: "C", text: "$82$" },
        // distractor: finds the perimeter, 42 + 40 + 58
        { id: "D", text: "$140$" }
      ],
      correctAnswer: "B",
      hint: "The hypotenuse is the one side that $\\tan S$ does not use.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~35s):** $\\tan S = \\frac{TU}{SU}$, so $TU = 42 \\cdot \\frac{20}{21} = 40$, and $ST = \\sqrt{42^{2} + 40^{2}} = 58$.\n\n**The Full Solution:**\nStep 1: Angle $U$ is the right angle, so $\\overline{ST}$ is the hypotenuse. From angle $S$, the opposite leg is $\\overline{TU}$ and the adjacent leg is $\\overline{SU}$.\nStep 2: Tangent is opposite over adjacent: $\\frac{TU}{42} = \\frac{20}{21}$, so $TU = 40$.\nStep 3: By the Pythagorean theorem, $ST = \\sqrt{42^{2} + 40^{2}} = \\sqrt{1764 + 1600} = \\sqrt{3364} = 58$. Check: $58^{2} = 3364$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($40$): stops at $TU$, the leg opposite angle $S$.\n* Choice C ($82$): adds the two legs, $42 + 40$, instead of using the Pythagorean theorem.\n* Choice D ($140$): finds the perimeter, $42 + 40 + 58$, instead of the length of one side.\n\n**Test Day Takeaway:** Tangent gives the second leg; the hypotenuse then comes from the Pythagorean theorem.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$JK = 36$\n$KL = 15$\n$LJ = 39$\nTriangle $JKL$ has the given side lengths. Triangle $PQR$ is similar to triangle $JKL$, where $J$, $K$, and $L$ correspond to $P$, $Q$, and $R$, respectively. What is the value of $\\cos R$?",
      choices: [
        { id: "A", text: "$\\frac{5}{13}$" },
        // distractor: computes tan J, using the two legs
        { id: "B", text: "$\\frac{5}{12}$" },
        // distractor: computes sin L (equivalently cos J), using the opposite leg
        { id: "C", text: "$\\frac{12}{13}$" },
        // distractor: computes tan L, opposite over adjacent
        { id: "D", text: "$\\frac{12}{5}$" }
      ],
      correctAnswer: "A",
      hint: "First decide whether the triangle has a right angle, and where.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~45s):** $15^{2} + 36^{2} = 39^{2}$, so the right angle is at $K$. Angle $R$ corresponds to angle $L$, and $\\cos L = \\frac{KL}{LJ} = \\frac{15}{39} = \\frac{5}{13}$.\n\n**The Full Solution:**\nStep 1: Check for a right angle: $JK^{2} + KL^{2} = 1296 + 225 = 1521 = 39^{2} = LJ^{2}$. So triangle $JKL$ is a right triangle with its right angle at $K$, the vertex between the two shorter sides, and $\\overline{LJ}$ is the hypotenuse.\nStep 2: Corresponding angles of similar triangles are congruent, so $\\cos R = \\cos L$.\nStep 3: From angle $L$, the adjacent leg is $\\overline{KL}$, so $\\cos L = \\frac{15}{39} = \\frac{5}{13}$. Check: $\\sin L = \\frac{36}{39} = \\frac{12}{13}$, and $\\left(\\frac{5}{13}\\right)^{2} + \\left(\\frac{12}{13}\\right)^{2} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{5}{12}$): this is $\\tan J$, using the two legs.\n* Choice C ($\\frac{12}{13}$): this is $\\sin L$ (equivalently $\\cos J$), using the leg opposite angle $L$.\n* Choice D ($\\frac{12}{5}$): this is $\\tan L$, opposite over adjacent.\n\n**Test Day Takeaway:** Similar triangles have equal corresponding angles, so a trigonometric ratio in one triangle can be computed from the matching angle in the other.",
      skills: ["soh-cah-toa"]
    }
  ],

  // Section: Special Right Triangles
  "Special Right Triangles": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the length of the longest side of the triangle shown?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [11, 0], [11, 11]], labels: ["45°", "", "45°"], sideLabels: ["11", "11", ""], rightAngleVertex: 1 } },
      choices: [
        // distractor: adds the legs and then takes a square root, instead of adding their squares
        { id: "A", text: "$\\sqrt{22}$" },
        { id: "B", text: "$11\\sqrt{2}$" },
        // distractor: uses sqrt(3), which belongs to the 30-60-90 ratios
        { id: "C", text: "$11\\sqrt{3}$" },
        // distractor: doubles a leg, which is the 30-60-90 rule
        { id: "D", text: "$22$" }
      ],
      correctAnswer: "B",
      hint: "The two legs are equal, so the Pythagorean theorem gives twice one square.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** In a $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ triangle, the hypotenuse is $\\sqrt{2}$ times a leg: $11\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The triangle has two $45^{\\circ}$ angles and legs of length $11$; the longest side is the hypotenuse, opposite the right angle.\nStep 2: By the Pythagorean theorem, $c^{2} = 11^{2} + 11^{2} = 242$.\nStep 3: So $c = \\sqrt{242} = \\sqrt{121 \\cdot 2} = 11\\sqrt{2}$. Check: $\\left(11\\sqrt{2}\\right)^{2} = 242 = 121 + 121$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{22}$): adds the legs and then takes a square root, instead of adding their squares.\n* Choice C ($11\\sqrt{3}$): uses $\\sqrt{3}$, which belongs to the $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ ratios.\n* Choice D ($22$): doubles a leg, which is the $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ rule for the shortest side.\n\n**Test Day Takeaway:** The sides of a $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ triangle are in the ratio $1 : 1 : \\sqrt{2}$.",
      skills: ["special-right-triangles"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In the triangle shown, what is the length of the hypotenuse?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15.588, 0], [15.588, 9]], labels: ["30°", "", "60°"], sideLabels: ["", "9", ""], rightAngleVertex: 1 } },
      choices: [
        // distractor: uses sqrt(2), which belongs to the 45-45-90 ratios
        { id: "A", text: "$9\\sqrt{2}$" },
        // distractor: gives the side opposite the 60 degree angle
        { id: "B", text: "$9\\sqrt{3}$" },
        { id: "C", text: "$18$" },
        // distractor: triples the shortest side instead of doubling it
        { id: "D", text: "$27$" }
      ],
      correctAnswer: "C",
      hint: "Find which angle the side of length $9$ is opposite.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The side of length $9$ is opposite the $30^{\\circ}$ angle, and in a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle the hypotenuse is twice that side: $18$.\n\n**The Full Solution:**\nStep 1: The angles are $30^{\\circ}$, $60^{\\circ}$, and $90^{\\circ}$, and the side of length $9$ is opposite the $30^{\\circ}$ angle, so it is the shortest side.\nStep 2: The sides of a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle are in the ratio $1 : \\sqrt{3} : 2$.\nStep 3: So the hypotenuse is $2(9) = 18$. Check: the other leg is $9\\sqrt{3}$, and $9^{2} + \\left(9\\sqrt{3}\\right)^{2} = 81 + 243 = 324 = 18^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9\\sqrt{2}$): uses $\\sqrt{2}$, which belongs to the $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ ratios.\n* Choice B ($9\\sqrt{3}$): gives the side opposite the $60^{\\circ}$ angle.\n* Choice D ($27$): triples the shortest side instead of doubling it.\n\n**Test Day Takeaway:** In a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle, the hypotenuse is twice the side opposite the $30^{\\circ}$ angle.",
      skills: ["special-right-triangles"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The hypotenuse of an isosceles right triangle has length $14$. What is the length of one leg of this triangle?",
      choices: [
        // distractor: halves the hypotenuse
        { id: "A", text: "$7$" },
        { id: "B", text: "$7\\sqrt{2}$" },
        // distractor: uses the 30-60-90 ratio for the longer leg
        { id: "C", text: "$7\\sqrt{3}$" },
        // distractor: multiplies by sqrt(2) instead of dividing
        { id: "D", text: "$14\\sqrt{2}$" }
      ],
      correctAnswer: "B",
      hint: "The two legs are equal, so set up the Pythagorean theorem with one unknown.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The hypotenuse is $\\sqrt{2}$ times a leg, so a leg is $\\frac{14}{\\sqrt{2}} = 7\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: An isosceles right triangle has two equal legs; call each one $s$.\nStep 2: By the Pythagorean theorem, $s^{2} + s^{2} = 14^{2}$, so $2s^{2} = 196$ and $s^{2} = 98$.\nStep 3: Then $s = \\sqrt{98} = \\sqrt{49 \\cdot 2} = 7\\sqrt{2}$. Check: $\\left(7\\sqrt{2}\\right)^{2} + \\left(7\\sqrt{2}\\right)^{2} = 98 + 98 = 196 = 14^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): halves the hypotenuse, as if the legs added up to it.\n* Choice C ($7\\sqrt{3}$): uses the $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ ratio for the longer leg.\n* Choice D ($14\\sqrt{2}$): multiplies by $\\sqrt{2}$ instead of dividing, which gives a side longer than the hypotenuse.\n\n**Test Day Takeaway:** In a $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ triangle, go from leg to hypotenuse by multiplying by $\\sqrt{2}$ and back by dividing by $\\sqrt{2}$.",
      skills: ["special-right-triangles"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In triangle $ABC$, the measure of angle $A$ is $30^{\\circ}$, the measure of angle $B$ is $60^{\\circ}$, and $AB = 26$. What is the length of $\\overline{AC}$?",
      choices: [
        // distractor: gives BC, the side opposite the 30 degree angle
        { id: "A", text: "$13$" },
        // distractor: uses the 45-45-90 ratio
        { id: "B", text: "$13\\sqrt{2}$" },
        { id: "C", text: "$13\\sqrt{3}$" },
        // distractor: multiplies the hypotenuse by sqrt(3) without halving it first
        { id: "D", text: "$26\\sqrt{3}$" }
      ],
      correctAnswer: "C",
      hint: "Work through the shortest side before reaching for $\\sqrt{3}$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** Angle $C$ is $90^{\\circ}$, so $\\overline{AB}$ is the hypotenuse. $\\overline{AC}$ is opposite the $60^{\\circ}$ angle, so $AC = \\frac{26}{2}\\sqrt{3} = 13\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The angle measures sum to $180^{\\circ}$, so angle $C$ measures $180^{\\circ} - 30^{\\circ} - 60^{\\circ} = 90^{\\circ}$, and $\\overline{AB}$, opposite angle $C$, is the hypotenuse.\nStep 2: The side opposite the $30^{\\circ}$ angle is half the hypotenuse: $BC = 13$.\nStep 3: The side opposite the $60^{\\circ}$ angle is $\\sqrt{3}$ times the shortest side: $AC = 13\\sqrt{3}$. Check: $13^{2} + \\left(13\\sqrt{3}\\right)^{2} = 169 + 507 = 676 = 26^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): gives $BC$, the side opposite the $30^{\\circ}$ angle.\n* Choice B ($13\\sqrt{2}$): uses the $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ ratio.\n* Choice D ($26\\sqrt{3}$): multiplies the hypotenuse by $\\sqrt{3}$ without halving it first.\n\n**Test Day Takeaway:** Find the right angle first; in a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle, halve the hypotenuse to get the shortest side, then multiply by $\\sqrt{3}$ for the other leg.",
      skills: ["special-right-triangles"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "One angle of a right triangle measures $30^{\\circ}$, and the perimeter of the triangle is $12 + 4\\sqrt{3}$ units. What is the length, in units, of the hypotenuse of the triangle?",
      choices: [
        // distractor: reports the shortest side s instead of the hypotenuse
        { id: "A", text: "$4$" },
        // distractor: reports the side opposite the 60 degree angle
        { id: "B", text: "$4\\sqrt{3}$" },
        { id: "C", text: "$8$" },
        // distractor: doubles the longer leg instead of the shorter one
        { id: "D", text: "$8\\sqrt{3}$" }
      ],
      correctAnswer: "C",
      hint: "Write all three sides in terms of the shortest side.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~45s):** If the shortest side is $s$, the sides are $s$, $s\\sqrt{3}$, and $2s$, so the perimeter is $s(3 + \\sqrt{3}) = 4(3 + \\sqrt{3})$. Then $s = 4$ and the hypotenuse is $8$.\n\n**The Full Solution:**\nStep 1: The triangle is a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle. Let $s$ be the length of the side opposite the $30^{\\circ}$ angle; then the other leg is $s\\sqrt{3}$ and the hypotenuse is $2s$.\nStep 2: The perimeter is $s + s\\sqrt{3} + 2s = 3s + s\\sqrt{3} = s(3 + \\sqrt{3})$.\nStep 3: The given perimeter is $12 + 4\\sqrt{3} = 4(3 + \\sqrt{3})$, so $s = 4$ and the hypotenuse is $2s = 8$. Check: $4 + 4\\sqrt{3} + 8 = 12 + 4\\sqrt{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): this is $s$, the side opposite the $30^{\\circ}$ angle.\n* Choice B ($4\\sqrt{3}$): this is the side opposite the $60^{\\circ}$ angle.\n* Choice D ($8\\sqrt{3}$): doubles the longer leg instead of the shorter one.\n\n**Test Day Takeaway:** Write every side of a special right triangle in terms of the shortest side, then factor the given perimeter to match.",
      skills: ["special-right-triangles"]
    }
  ]
};
