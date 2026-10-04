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
      question: "Triangle $ABC$ has side lengths $AB = 13$, $BC = 13$, and $AC = 20$. Which of the following best describes triangle $ABC$?",
      choices: [
        // distractor: requires all three sides to be equal, but AC = 20 is not 13
        { id: "A", text: "Equilateral" },
        { id: "B", text: "Isosceles" },
        // distractor: would require 13 squared + 13 squared = 20 squared, but 338 is not 400
        { id: "C", text: "Right" },
        // distractor: requires no two sides to be equal, but AB = BC = 13
        { id: "D", text: "Scalene" }
      ],
      correctAnswer: "B",
      hint: "Count how many of the three lengths are equal.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Two sides, $AB$ and $BC$, are both $13$ and the third is $20$, so the triangle is isosceles.\n\n**The Full Solution:**\nStep 1: Compare the lengths: $AB = BC = 13$, and $AC = 20$ is different.\nStep 2: A triangle with exactly two equal sides is isosceles.\nStep 3: Rule out a right triangle: $13^{2} + 13^{2} = 169 + 169 = 338$, and $20^{2} = 400$. Since $338 \\ne 400$, the triangle is not a right triangle. Check: two equal sides and $338 \\ne 400$, so isosceles is the description that fits ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Equilateral): needs all three sides equal, but $AC = 20$ while the other two sides are $13$.\n* Choice C (Right): needs $13^{2} + 13^{2} = 20^{2}$, but $338 \\ne 400$.\n* Choice D (Scalene): needs three different side lengths, but two sides are both $13$.\n\n**Test Day Takeaway:** Classify a triangle by its sides by counting equal lengths, and test for a right triangle only with the Pythagorean theorem.",
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
      question: "A triangle has sides of length $11$ centimeters and $26$ centimeters. Which of the following could be the length, in centimeters, of the third side?",
      choices: [
        // distractor: is shorter than 26 - 11 = 15, so 10 + 11 is less than 26
        { id: "A", text: "$10$" },
        // distractor: equals 26 - 11, so 11 + 15 = 26 and the three sides would lie flat
        { id: "B", text: "$15$" },
        { id: "C", text: "$30$" },
        // distractor: equals 11 + 26, so the two given sides would only reach the third side lying flat
        { id: "D", text: "$37$" }
      ],
      correctAnswer: "C",
      hint: "Each side must be shorter than the sum of the other two sides.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The third side must be greater than $26 - 11 = 15$ and less than $26 + 11 = 37$; only $30$ is strictly between.\n\n**The Full Solution:**\nStep 1: By the triangle inequality, the sum of any two side lengths must be greater than the third, so the third side $s$ satisfies $s + 11 > 26$, or $s > 15$.\nStep 2: Also $11 + 26 > s$, so $s < 37$.\nStep 3: The third side must satisfy $15 < s < 37$, and $30$ is the only choice in that range. Check: $11 + 26 = 37 > 30$, $11 + 30 = 41 > 26$, and $26 + 30 = 56 > 11$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): is too short: $10 + 11 = 21$, which is less than $26$.\n* Choice B ($15$): gives $11 + 15 = 26$, equal to the third side, so the sides would lie flat instead of forming a triangle.\n* Choice D ($37$): equals $11 + 26$, so the two given sides could not meet to form a triangle.\n\n**Test Day Takeaway:** The third side of a triangle is strictly between the difference and the sum of the other two sides; the endpoints themselves never work.",
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
      question: "In the figure shown, triangle $PQR$ is similar to triangle $STU$, where $P$, $Q$, and $R$ correspond to $S$, $T$, and $U$, respectively. What is the length of $\\overline{TU}$?",
      diagram: { type: "similarTriangles", params: { triangle1: { labels: ["P", "Q", "R"], sideLabels: ["10", "14", ""] }, triangle2: { labels: ["S", "T", "U"], sideLabels: ["25", "", ""] }, figureNote: true } },
      choices: [
        // distractor: divides by the scale factor instead of multiplying by it
        { id: "A", text: "$5.6$" },
        // distractor: adds the difference $25 - 10$ to $14$ rather than scaling
        { id: "B", text: "$29$" },
        { id: "C", text: "$35$" },
        // distractor: multiplies $14$ by $25$ without dividing by $10$
        { id: "D", text: "$350$" }
      ],
      correctAnswer: "C",
      hint: "Compare the two corresponding sides whose lengths are both given.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\frac{ST}{PQ} = \\frac{25}{10} = 2.5$, so $TU = 2.5(14) = 35$.\n\n**The Full Solution:**\nStep 1: Side $\\overline{ST}$ corresponds to $\\overline{PQ}$ and side $\\overline{TU}$ corresponds to $\\overline{QR}$.\nStep 2: The scale factor from triangle $PQR$ to triangle $STU$ is $\\frac{25}{10} = 2.5$.\nStep 3: Multiply: $TU = 2.5(14) = 35$. Check: $\\frac{35}{14} = 2.5 = \\frac{25}{10}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5.6$): divides $14$ by the scale factor instead of multiplying.\n* Choice B ($29$): adds the difference $25 - 10 = 15$ to $14$ instead of scaling.\n* Choice D ($350$): multiplies $14$ by $25$ and never divides by $10$.\n\n**Test Day Takeaway:** Similar triangles scale every side by the same factor; find it from one pair of corresponding sides, then multiply.",
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
      question: "Triangle $ABC$ is similar to triangle $DEF$, and each side length of triangle $DEF$ is $\\frac{2}{3}$ times the corresponding side length of triangle $ABC$. If the area of triangle $ABC$ is $90$ square units, what is the area, in square units, of triangle $DEF$?",
      choices: [
        { id: "A", text: "$40$" },
        // distractor: multiplies by $\frac{2}{3}$ once instead of squaring the scale factor
        { id: "B", text: "$60$" },
        // distractor: inverts the ratio and uses $\frac{3}{2}$ once
        { id: "C", text: "$135$" },
        // distractor: inverts the ratio and squares it, using $\frac{9}{4}$
        { id: "D", text: "$202.5$" }
      ],
      correctAnswer: "A",
      hint: "The factor that applies to area is not the same as the one that applies to length.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** Area scales by $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$, so the area is $90 \\cdot \\frac{4}{9} = 40$.\n\n**The Full Solution:**\nStep 1: Corresponding lengths scale by $\\frac{2}{3}$, so areas scale by $\\left(\\frac{2}{3}\\right)^2$.\nStep 2: $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$.\nStep 3: The area of triangle $DEF$ is $90 \\cdot \\frac{4}{9} = 40$ square units.\n\nVerification: $\\frac{40}{90} = \\frac{4}{9} = \\left(\\frac{2}{3}\\right)^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): multiplies by $\\frac{2}{3}$ once instead of squaring the scale factor.\n* Choice C ($135$): inverts the ratio and uses $\\frac{3}{2}$ once.\n* Choice D ($202.5$): inverts the ratio and squares it, using $\\frac{9}{4}$.\n\n**Test Day Takeaway:** Shrink every length by a factor and the area shrinks by that factor squared.",
      skills: ["similar-triangles"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In triangle $ABC$, point $D$ lies on $\\overline{AB}$ and point $E$ lies on $\\overline{AC}$ so that $\\overline{DE}$ is parallel to $\\overline{BC}$. If $AD = 6$, $DB = 4$, and $BC = 20$, what is the length of $\\overline{DE}$?",
      choices: [
        // distractor: uses $\frac{DB}{AB} = \frac{4}{10}$ instead of $\frac{AD}{AB}$
        { id: "A", text: "$8$" },
        { id: "B", text: "$12$" },
        // distractor: subtracts $AD$ from $BC$ rather than scaling
        { id: "C", text: "$14$" },
        // distractor: uses $\frac{AD}{DB} = \frac{6}{4}$, comparing the two pieces of $\overline{AB}$ instead of a piece to the whole
        { id: "D", text: "$30$" }
      ],
      correctAnswer: "B",
      hint: "The whole side $\\overline{AB}$, not the piece $\\overline{DB}$, is what $\\overline{AD}$ should be compared with.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~50s):** $AB = 6 + 4 = 10$, so $DE = 20 \\cdot \\frac{6}{10} = 12$.\n\n**The Full Solution:**\nStep 1: Because $\\overline{DE}$ is parallel to $\\overline{BC}$, triangles $ADE$ and $ABC$ have congruent corresponding angles and are similar.\nStep 2: The scale factor compares a side of $ADE$ to the whole corresponding side: $\\frac{AD}{AB} = \\frac{6}{6 + 4} = \\frac{3}{5}$.\nStep 3: So $DE = \\frac{3}{5}(20) = 12$.\n\nVerification: $\\frac{12}{20} = \\frac{3}{5} = \\frac{6}{10}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): uses $\\frac{DB}{AB} = \\frac{4}{10}$ instead of $\\frac{AD}{AB}$.\n* Choice C ($14$): subtracts $AD$ from $BC$ rather than scaling.\n* Choice D ($30$): uses $\\frac{AD}{DB} = \\frac{6}{4}$, comparing the two pieces of $\\overline{AB}$ instead of a piece to the whole.\n\n**Test Day Takeaway:** When a parallel segment cuts a triangle, compare a piece to the whole side, never a piece to the other piece.",
      skills: ["similar-triangles"]
    }
  ],

  // Section: Right Triangles & Pythagorean Theorem
  "Right Triangles & Pythagorean Theorem": [
    {
      id: 1,
      difficulty: "easy",
      question: "The diagonal brace of a barge loading ramp forms the right triangle shown, with two side lengths given in feet. What is the length, in feet, of the brace?",
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
      hint: "The brace is the side opposite the right angle.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $21^2 + 20^2 = 441 + 400 = 841$, and $\\sqrt{841} = 29$ feet.\n\n**The Full Solution:**\nStep 1: The brace is the hypotenuse, so $21^2 + 20^2 = c^2$.\nStep 2: That gives $441 + 400 = 841$.\nStep 3: Taking the square root, $c = 29$ feet. Check: $29^2 = 841 = 441 + 400$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{41}$): subtracting the squares, $441 - 400$, which finds a leg rather than the hypotenuse.\n* Choice C ($41$): adding the two legs directly; the theorem adds their squares.\n* Choice D ($841$): stopping at $c^2$ and never taking the square root.\n\n**Test Day Takeaway:** Add the squares of the legs to get the square of the hypotenuse, then take the root.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A hop trellis pole rises from level ground, and an anchor cable ties its top to a point on the ground, as the figure shows with lengths in feet. How tall, in feet, is the pole?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [7, 0], [7, 24]], sideLabels: ["7", "", "25"], rightAngleVertex: 1 } },
      choices: [
        // distractor: subtracts the lengths, 25 - 7, instead of their squares
        { id: "A", text: "$18$" },
        { id: "B", text: "$24$" },
        // distractor: adds the squares instead of subtracting them
        { id: "C", text: "$26$" },
        // distractor: adds the two given lengths
        { id: "D", text: "$32$" }
      ],
      correctAnswer: "B",
      hint: "The longest side of this triangle is already known.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $25^2 - 7^2 = 625 - 49 = 576$, and $\\sqrt{576} = 24$ feet.\n\n**The Full Solution:**\nStep 1: The $25$-foot cable is the hypotenuse and the $7$-foot ground distance is one leg, so the pole's height $h$ satisfies $7^2 + h^2 = 25^2$.\nStep 2: That gives $h^2 = 625 - 49 = 576$.\nStep 3: Taking the square root, $h = 24$ feet. Check: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): subtracting the lengths, $25 - 7$, instead of subtracting their squares.\n* Choice C ($26$): adding the squares, $\\sqrt{625 + 49} \\approx 26$, which would make the pole longer than the cable.\n* Choice D ($32$): adding the two given lengths.\n\n**Test Day Takeaway:** When the hypotenuse is known, subtract the squares; when it is not, add them.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The triangular platform brace of a launch tower is shown, with two of its side lengths in meters. Steel bar for the brace costs \\$14 per meter. What is the total cost, in dollars, of the bar needed for all three sides?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 10]], sideLabels: ["", "10", "26"], rightAngleVertex: 1 } },
      choices: [
        // distractor: uses 10 + 24 = 34 meters and leaves out the hypotenuse
        { id: "A", text: "$476$" },
        // distractor: uses only the two given sides, 10 + 26 = 36 meters
        { id: "B", text: "$504$" },
        { id: "C", text: "$840$" },
        // distractor: doubles the perimeter before multiplying
        { id: "D", text: "$1{,}680$" }
      ],
      correctAnswer: "C",
      hint: "The figure prints only two of the three lengths the price applies to.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** The missing leg is $24$ meters, so the perimeter is $60$ meters and the bar costs $60(14) = 840$ dollars.\n\n**The Full Solution:**\nStep 1: The $26$-meter side is the hypotenuse, so the missing leg satisfies $10^2 + b^2 = 26^2$, giving $b^2 = 676 - 100 = 576$ and $b = 24$ meters.\nStep 2: The perimeter is $10 + 24 + 26 = 60$ meters.\nStep 3: At $14$ dollars per meter the cost is $60(14) = 840$ dollars. Check: $10^2 + 24^2 = 100 + 576 = 676 = 26^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($476$): using $10 + 24 = 34$ meters and leaving the hypotenuse out of the perimeter.\n* Choice B ($504$): using only the two side lengths printed in the figure, $10 + 26 = 36$ meters.\n* Choice D ($1{,}680$): doubling the perimeter to $120$ meters before multiplying by the price.\n\n**Test Day Takeaway:** Recover the missing side first, then add all three lengths before applying any rate.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In right triangle $XYZ$, angle $Y$ is a right angle, the hypotenuse $\\overline{XZ}$ has length $26$, and leg $\\overline{XY}$ has length $24$. What is the length of $\\overline{YZ}$?",
      diagram: { type: "rightTriangle", params: { labels: ["X", "Y", "Z"], sideLabels: ["24", "", "26"], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: subtracts the two given lengths instead of their squares
        { id: "A", text: "$2$" },
        { id: "B", text: "$10$" },
        // distractor: averages the hypotenuse and the given leg
        { id: "C", text: "$25$" },
        // distractor: adds the two given lengths
        { id: "D", text: "$50$" }
      ],
      correctAnswer: "B",
      hint: "The hypotenuse is the one given, so the missing side comes out of a subtraction.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $YZ = \\sqrt{26^2 - 24^2} = \\sqrt{100} = 10$.\n\n**The Full Solution:**\nStep 1: Angle $Y$ is the right angle, so $\\overline{XZ}$ is the hypotenuse and $\\overline{XY}$ and $\\overline{YZ}$ are the legs.\nStep 2: $24^2 + YZ^2 = 26^2$, so $YZ^2 = 676 - 576 = 100$.\nStep 3: $YZ = \\sqrt{100} = 10$.\n\nVerification: $24^2 + 10^2 = 576 + 100 = 676 = 26^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracts the two given lengths instead of their squares.\n* Choice C ($25$): averages the hypotenuse and the given leg.\n* Choice D ($50$): adds the two given lengths.\n\n**Test Day Takeaway:** Solving for a leg subtracts squares, not lengths: square first, subtract, then take the root.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In right triangle $ABC$, angle $C$ is a right angle. The legs have lengths $AC = x$ and $BC = x + 7$, and the hypotenuse has length $AB = 17$. What is the value of $x$?",
      choices: [
        // distractor: solves $x + (x + 7) = 17$, adding the legs to reach the hypotenuse
        { id: "A", text: "$5$" },
        { id: "B", text: "$8$" },
        // distractor: subtracts $7$ from the hypotenuse
        { id: "C", text: "$10$" },
        // distractor: gives $BC = x + 7$ instead of $x$ itself
        { id: "D", text: "$15$" }
      ],
      correctAnswer: "B",
      hint: "Write the theorem with the expressions in place, then expand before solving.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~60s):** $x^2 + (x + 7)^2 = 289$ reduces to $x^2 + 7x - 120 = 0$, so $x = 8$.\n\n**The Full Solution:**\nStep 1: The legs are $x$ and $x + 7$ and the hypotenuse is $17$, so $x^2 + (x + 7)^2 = 17^2$.\nStep 2: Expand: $x^2 + x^2 + 14x + 49 = 289$, so $2x^2 + 14x - 240 = 0$, or $x^2 + 7x - 120 = 0$.\nStep 3: Factor: $(x + 15)(x - 8) = 0$. A length must be positive, so $x = 8$.\n\nVerification: The legs are $8$ and $15$, and $8^2 + 15^2 = 64 + 225 = 289 = 17^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): solves $x + (x + 7) = 17$, adding the legs to reach the hypotenuse.\n* Choice C ($10$): subtracts $7$ from the hypotenuse.\n* Choice D ($15$): gives $BC = x + 7$ instead of $x$ itself.\n\n**Test Day Takeaway:** When the legs are expressions, square them into a quadratic and throw out the negative root.",
      skills: ["pythagorean-theorem"]
    }
  ],

  // Section: Trigonometric Ratios
  "Trigonometric Ratios": [
    {
      id: 1,
      difficulty: "easy",
      question: "In right triangle $KLM$, angle $L$ is a right angle, $KL = 24$, $LM = 7$, and $KM = 25$. What is the value of $\\sin K$?",
      diagram: { type: "rightTriangle", params: { labels: ["K", "L", "M"], sideLabels: ["24", "7", "25"], rightAngleVertex: 1, figureNote: true } },
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\sin K$ is opposite over hypotenuse: $\\frac{LM}{KM} = \\frac{7}{25}$.\n\n**The Full Solution:**\nStep 1: Angle $L$ is the right angle, so $\\overline{KM}$ is the hypotenuse.\nStep 2: The leg opposite angle $K$ is $\\overline{LM}$, of length $7$.\nStep 3: Therefore $\\sin K = \\frac{7}{25}$.\n\nVerification: $\\left(\\frac{7}{25}\\right)^2 + \\left(\\frac{24}{25}\\right)^2 = \\frac{49 + 576}{625} = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{7}{24}$): the value of $\\tan K$, using the adjacent leg in the denominator instead of the hypotenuse.\n* Choice C ($\\frac{24}{25}$): the value of $\\cos K$, using the adjacent leg in the numerator.\n* Choice D ($\\frac{24}{7}$): the reciprocal of $\\tan K$, swapping the opposite and adjacent legs.\n\n**Test Day Takeaway:** Locate the hypotenuse first, then read opposite and adjacent from the angle actually named in the ratio.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A milking-parlor rail bracket forms right triangle $LMN$, with its right angle at $M$, $LM = 9$ centimeters, and $MN = 40$ centimeters. Which expression is equal to $\\tan L$?",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** From angle $L$, the opposite leg is $MN = 40$ and the adjacent leg is $LM = 9$, so $\\tan L = \\frac{40}{9}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $M$, so the two legs are $LM$ and $MN$ and the hypotenuse is $LN$.\nStep 2: Viewed from angle $L$, the leg $MN = 40$ is opposite and the leg $LM = 9$ is adjacent.\nStep 3: Tangent is opposite over adjacent, so $\\tan L = \\frac{40}{9}$. Check: $LN = \\sqrt{9^2 + 40^2} = \\sqrt{1681} = 41$, and $\\frac{\\sin L}{\\cos L} = \\frac{40/41}{9/41} = \\frac{40}{9}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{41}$): this is $\\cos L$, adjacent over hypotenuse.\n* Choice B ($\\frac{9}{40}$): this inverts the tangent, giving adjacent over opposite.\n* Choice C ($\\frac{40}{41}$): this is $\\sin L$, opposite over hypotenuse.\n\n**Test Day Takeaway:** Tangent never uses the hypotenuse; name the opposite and adjacent legs from the angle in question first.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "An almond huller's grading chute forms right triangle $PQR$, with its right angle at $Q$. If $\\sin R = \\frac{5}{13}$ and $PR = 39$ centimeters, what is the length, in centimeters, of $PQ$?",
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
      hint: "A ratio of $\\frac{5}{13}$ does not make any side $5$ or $13$ centimeters long.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\sin R = \\frac{PQ}{PR}$, so $\\frac{PQ}{39} = \\frac{5}{13}$ and $PQ = 15$ centimeters.\n\n**The Full Solution:**\nStep 1: With the right angle at $Q$, the hypotenuse is $PR$ and the leg opposite angle $R$ is $PQ$.\nStep 2: So $\\sin R = \\frac{PQ}{PR} = \\frac{PQ}{39} = \\frac{5}{13}$.\nStep 3: Multiplying gives $PQ = \\frac{5}{13}(39) = 15$ centimeters. Check: $QR = \\sqrt{39^2 - 15^2} = \\sqrt{1296} = 36$, and $\\frac{15}{39} = \\frac{5}{13}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reporting the numerator of the ratio as though it were the length itself.\n* Choice B ($13$): reporting the denominator of the ratio as though it were the length itself.\n* Choice D ($36$): computing $QR$, the leg adjacent to angle $R$, instead of the requested $PQ$.\n\n**Test Day Takeaway:** A ratio scales: multiply the hypotenuse by the sine to get the opposite leg, and name the sides before substituting.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In a dockside crane, the jib $ST$, the mast $TU$, and the tie $SU$ meet so that the right angle falls at $U$. The tie is $42$ meters long and $\\tan S = \\frac{20}{21}$. How long, in meters, is the jib?",
      choices: [
        // distractor: reports the mast TU instead of the jib
        { id: "A", text: "$40$" },
        { id: "B", text: "$58$" },
        // distractor: adds the two legs, 42 + 40
        { id: "C", text: "$82$" },
        // distractor: doubles the tie, as though the hypotenuse were twice the adjacent leg
        { id: "D", text: "$84$" }
      ],
      correctAnswer: "B",
      hint: "The jib is the one side that the tangent of $S$ never touches.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~40s):** $\\tan S = \\frac{TU}{42} = \\frac{20}{21}$ gives $TU = 40$, and $\\sqrt{42^2 + 40^2} = 58$ meters.\n\n**The Full Solution:**\nStep 1: The right angle is at $U$, so from angle $S$ the mast $TU$ is opposite and the tie $SU$ is adjacent: $\\tan S = \\frac{TU}{42} = \\frac{20}{21}$.\nStep 2: Solving gives $TU = \\frac{20}{21}(42) = 40$ meters.\nStep 3: The jib $ST$ is the hypotenuse: $ST = \\sqrt{42^2 + 40^2} = \\sqrt{1764 + 1600} = \\sqrt{3364} = 58$ meters. Check: $\\frac{40}{42} = \\frac{20}{21}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($40$): reporting the mast $TU$, the leg the tangent produces, instead of the jib.\n* Choice C ($82$): adding the two legs, $42 + 40$, instead of using the Pythagorean theorem.\n* Choice D ($84$): doubling the tie, which assumes a $30$-$60$-$90$ relationship that does not hold here.\n\n**Test Day Takeaway:** Tangent hands you the second leg; the hypotenuse still needs the Pythagorean theorem.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A taxiway wind-fence panel is a right triangle whose two acute angles measure $x^\\circ$ and $y^\\circ$. If $\\sin(x^\\circ) = \\frac{20}{29}$, what is the value of $\\cos(y^\\circ)$?",
      choices: [
        { id: "A", text: "$\\frac{20}{29}$" },
        // distractor: computes the cosine of x using the third side 21
        { id: "B", text: "$\\frac{21}{29}$" },
        // distractor: computes the tangent of x
        { id: "C", text: "$\\frac{20}{21}$" },
        // distractor: inverts the ratio
        { id: "D", text: "$\\frac{29}{20}$" }
      ],
      correctAnswer: "A",
      hint: "No side length is needed to answer this.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** The two acute angles are complementary, and the cosine of an angle equals the sine of its complement, so $\\cos(y^\\circ) = \\frac{20}{29}$.\n\n**The Full Solution:**\nStep 1: In a right triangle the two acute angles satisfy $x + y = 90$, so they are complementary.\nStep 2: The side opposite $x^\\circ$ is the side adjacent to $y^\\circ$, and both ratios are taken over the same hypotenuse.\nStep 3: Therefore $\\cos(y^\\circ) = \\sin(x^\\circ) = \\frac{20}{29}$. Check: with legs $20$ and $21$ and hypotenuse $29$, $\\cos(y^\\circ) = \\frac{20}{29}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{21}{29}$): computing $\\cos(x^\\circ)$ with the third side $21$; the complement swaps which leg is adjacent.\n* Choice C ($\\frac{20}{21}$): computing $\\tan(x^\\circ)$, a ratio of the two legs rather than a leg over the hypotenuse.\n* Choice D ($\\frac{29}{20}$): inverting the ratio, which no sine or cosine of an acute angle can exceed $1$.\n\n**Test Day Takeaway:** Complementary angles trade sine for cosine — no side lengths are needed at all.",
      skills: ["soh-cah-toa"]
    }
  ],

  // Section: Special Right Triangles
  "Special Right Triangles": [
    {
      id: 1,
      difficulty: "easy",
      question: "A $45°$-$45°$-$90°$ triangle has legs of length $11$ centimeters. What is the length, in centimeters, of its hypotenuse?",
      diagram: { type: "rightTriangle", params: { labels: ["45°", "", "45°"], sideLabels: ["11", "11", ""], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: adds the legs and then takes a square root, instead of adding their squares
        { id: "A", text: "$\\sqrt{22}$" },
        { id: "B", text: "$11\\sqrt{2}$" },
        // distractor: uses $\sqrt{3}$, which belongs to the $30°$-$60°$-$90°$ ratios
        { id: "C", text: "$11\\sqrt{3}$" },
        // distractor: doubles a leg, which is the $30°$-$60°$-$90°$ hypotenuse rule
        { id: "D", text: "$22$" }
      ],
      correctAnswer: "B",
      hint: "The two legs are equal, so the Pythagorean theorem gives twice one square.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** In a $45°$-$45°$-$90°$ triangle the hypotenuse is $\\sqrt{2}$ times a leg, so it is $11\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The two legs are equal, so the sides are in the ratio $1 : 1 : \\sqrt{2}$.\nStep 2: With each leg $11$, the hypotenuse is $11\\sqrt{2}$ centimeters.\nStep 3: Check with the Pythagorean theorem: $11^2 + 11^2 = 242$ and $(11\\sqrt{2})^2 = 121(2) = 242$.\n\nVerification: $11\\sqrt{2} \\approx 15.6$, longer than either leg and shorter than their sum of $22$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{22}$): adds the legs and then takes a square root, instead of adding their squares.\n* Choice C ($11\\sqrt{3}$): uses $\\sqrt{3}$, which belongs to the $30°$-$60°$-$90°$ ratios.\n* Choice D ($22$): doubles a leg, which is the $30°$-$60°$-$90°$ hypotenuse rule.\n\n**Test Day Takeaway:** Leg to hypotenuse in a $45°$-$45°$-$90°$ triangle multiplies by $\\sqrt{2}$; going the other way divides.",
      skills: ["special-right-triangles"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In a $30°$-$60°$-$90°$ triangle, the side opposite the $30°$ angle has length $9$. What is the length of the side opposite the $90°$ angle?",
      diagram: { type: "rightTriangle", params: { labels: ["30°", "", "60°"], sideLabels: ["", "9", ""], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: uses $\sqrt{2}$, which belongs to the $45°$-$45°$-$90°$ ratios
        { id: "A", text: "$9\\sqrt{2}$" },
        // distractor: gives the side opposite the $60°$ angle
        { id: "B", text: "$9\\sqrt{3}$" },
        { id: "C", text: "$18$" },
        // distractor: triples the shorter leg instead of doubling it
        { id: "D", text: "$27$" }
      ],
      correctAnswer: "C",
      hint: "The side opposite the largest angle is the hypotenuse — compare it with the shortest side.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The hypotenuse is twice the side opposite the $30°$ angle: $2(9) = 18$.\n\n**The Full Solution:**\nStep 1: The side opposite the $90°$ angle is the hypotenuse.\nStep 2: In a $30°$-$60°$-$90°$ triangle the sides are in the ratio $1 : \\sqrt{3} : 2$, shortest to longest.\nStep 3: The shorter leg is $9$, so the hypotenuse is $2(9) = 18$.\n\nVerification: $9^2 + (9\\sqrt{3})^2 = 81 + 243 = 324 = 18^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9\\sqrt{2}$): uses $\\sqrt{2}$, which belongs to the $45°$-$45°$-$90°$ ratios.\n* Choice B ($9\\sqrt{3}$): gives the side opposite the $60°$ angle.\n* Choice D ($27$): triples the shorter leg instead of doubling it.\n\n**Test Day Takeaway:** The shorter leg of a $30°$-$60°$-$90°$ triangle is exactly half the hypotenuse.",
      skills: ["special-right-triangles"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A dome shutter's diagonal stay makes a $45^\\circ$ angle with the horizontal rail beneath it. If the stay spans $9$ meters horizontally, how long is the stay, in meters?",
      choices: [
        // distractor: divides by the square root of 2 instead of multiplying
        { id: "A", text: "$\\frac{9\\sqrt{2}}{2}$" },
        { id: "B", text: "$9\\sqrt{2}$" },
        // distractor: uses the 30-60-90 ratio of the square root of 3
        { id: "C", text: "$9\\sqrt{3}$" },
        // distractor: doubles the run, as though the hypotenuse were twice a leg
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "B",
      hint: "A $45^\\circ$ angle with the rail settles the third angle as well.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** A $45^\\circ$ stay makes a $45$-$45$-$90$ triangle, whose hypotenuse is $\\sqrt{2}$ times a leg: $9\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The stay, the horizontal run, and the vertical rise form a right triangle with a $45^\\circ$ angle, so the third angle is also $45^\\circ$.\nStep 2: In a $45$-$45$-$90$ triangle the two legs are equal and the hypotenuse is $\\sqrt{2}$ times a leg.\nStep 3: The stay is the hypotenuse, so it measures $9\\sqrt{2}$ meters. Check: $9^2 + 9^2 = 162 = (9\\sqrt{2})^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9\\sqrt{2}}{2}$): dividing the leg by $\\sqrt{2}$ instead of multiplying, which makes the hypotenuse shorter than a leg.\n* Choice C ($9\\sqrt{3}$): using the $30$-$60$-$90$ ratio $\\sqrt{3}$, which belongs to a different special triangle.\n* Choice D ($18$): doubling the run; only in a $30$-$60$-$90$ triangle is the hypotenuse twice a side, and then twice the shorter leg.\n\n**Test Day Takeaway:** Identify which special triangle the given angle creates before reaching for a ratio.",
      skills: ["special-right-triangles"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In right triangle $ABC$, the measure of angle $A$ is $30°$, the measure of angle $B$ is $60°$, and $AB = 22$. What is the length of $\\overline{AC}$?",
      choices: [
        // distractor: gives $BC$, the side opposite the $30°$ angle
        { id: "A", text: "$11$" },
        // distractor: uses the $45°$-$45°$-$90°$ ratio
        { id: "B", text: "$11\\sqrt{2}$" },
        { id: "C", text: "$11\\sqrt{3}$" },
        // distractor: multiplies the hypotenuse by $\sqrt{3}$ without halving it first
        { id: "D", text: "$22\\sqrt{3}$" }
      ],
      correctAnswer: "C",
      hint: "Work through the shortest side before reaching for $\\sqrt{3}$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** $\\overline{AB}$ is the hypotenuse, so $BC = 11$ and $AC = 11\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Angle $C$ measures $180 - 30 - 60 = 90°$, so $\\overline{AB}$ is the hypotenuse.\nStep 2: The side opposite the $30°$ angle is $\\overline{BC}$, half the hypotenuse: $BC = 11$.\nStep 3: The side opposite the $60°$ angle is $\\overline{AC}$, which is $\\sqrt{3}$ times the shorter leg: $AC = 11\\sqrt{3}$.\n\nVerification: $11^2 + (11\\sqrt{3})^2 = 121 + 363 = 484 = 22^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): gives $BC$, the side opposite the $30°$ angle.\n* Choice B ($11\\sqrt{2}$): uses the $45°$-$45°$-$90°$ ratio.\n* Choice D ($22\\sqrt{3}$): multiplies the hypotenuse by $\\sqrt{3}$ without halving it first.\n\n**Test Day Takeaway:** Build a $30°$-$60°$-$90°$ triangle from its shortest side: halve the hypotenuse, then multiply by $\\sqrt{3}$.",
      skills: ["special-right-triangles"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A beet-loading conveyor rises from the field to a trailer at an angle of $30^\\circ$ with the level ground, and its horizontal run measures $4\\sqrt{3}$ meters. What is the length, in meters, of the conveyor?",
      choices: [
        // distractor: reports the vertical rise instead of the conveyor's length
        { id: "A", text: "$4$" },
        // distractor: repeats the given horizontal run
        { id: "B", text: "$4\\sqrt{3}$" },
        { id: "C", text: "$8$" },
        // distractor: doubles the run instead of the rise
        { id: "D", text: "$8\\sqrt{3}$" }
      ],
      correctAnswer: "C",
      hint: "The run is not the side opposite the $30^\\circ$ angle.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** The run is the longer leg, $4\\sqrt{3}$, so the shorter leg is $4$ and the conveyor, the hypotenuse, is $8$ meters.\n\n**The Full Solution:**\nStep 1: The conveyor, its horizontal run, and its vertical rise form a $30$-$60$-$90$ triangle, and the run lies opposite the $60^\\circ$ angle, so it is the longer leg.\nStep 2: The longer leg is $\\sqrt{3}$ times the shorter leg, so the rise is $\\frac{4\\sqrt{3}}{\\sqrt{3}} = 4$ meters.\nStep 3: The hypotenuse is twice the shorter leg, so the conveyor is $8$ meters long. Check: $4^2 + (4\\sqrt{3})^2 = 16 + 48 = 64 = 8^2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reporting the vertical rise, the shorter leg, instead of the conveyor itself.\n* Choice B ($4\\sqrt{3}$): repeating the horizontal run that the question already gave.\n* Choice D ($8\\sqrt{3}$): doubling the run; the hypotenuse is twice the SHORTER leg, not twice the longer one.\n\n**Test Day Takeaway:** In a $30$-$60$-$90$ triangle, find the shorter leg first — every other length is measured from it.",
      skills: ["special-right-triangles"]
    }
  ]
};
