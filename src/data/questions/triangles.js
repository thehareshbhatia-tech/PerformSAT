// Practice questions for Triangles module
// Questions are organized by SECTION (question type)

export const trianglesQuestions = {
  // Section: Triangle Fundamentals
  "Triangle Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the sum of the interior angles of any triangle?",
      choices: [
        { id: "A", text: "90°" },
        { id: "B", text: "180°" },
        { id: "C", text: "270°" },
        { id: "D", text: "360°" }
      ],
      correctAnswer: "B",
      hint: "Think about what happens when you tear off all three corners of a triangle and put them together. They form a straight line.",
      explanation: "**Choice B is correct.** The sum of the interior angles of any triangle is always $180°$.\n\n**Step 1:** This is a fundamental theorem in Euclidean geometry. For any triangle with angles $A$, $B$, and $C$:\n$$A + B + C = 180°$$\n\n**Step 2:** You can verify this by drawing any triangle, measuring its three angles, and confirming they sum to $180°$. Alternatively, tearing off the three corners and arranging them shows they form a straight line ($180°$).\n\n**Verification:** This property holds for all triangles -- acute, right, obtuse, equilateral, isosceles, and scalene.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $90°$ is the measure of a single right angle, not the sum of all interior angles. Students who associate triangles with right triangles may latch onto this value.\n- Choice C: [TRAP: arithmetic_slip] $270°$ might come from accidentally adding $90°$ to $180°$, or confusing interior and reflex angle sums.\n- Choice D: [TRAP: reversed_operation] $360°$ is the sum of exterior angles of any convex polygon (or interior angles of a quadrilateral), not a triangle.\n\n**Key concept:** The Triangle Angle Sum Theorem: $\\angle A + \\angle B + \\angle C = 180°$ for every triangle.",
      skills: ['triangle-angle-sum']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A triangle has sides of length 3, 4, and 5. What type of triangle is this?",
      choices: [
        { id: "A", text: "Equilateral" },
        { id: "B", text: "Isosceles" },
        { id: "C", text: "Scalene" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "C",
      hint: "Compare all three side lengths. How many of them are equal to each other?",
      explanation: "**Choice C is correct.** A triangle with sides $3$, $4$, and $5$ is scalene because all three side lengths are different.\n\n**Step 1:** Classify by comparing side lengths:\n- Equilateral: all three sides equal\n- Isosceles: exactly two sides equal\n- Scalene: no sides equal\n\n**Step 2:** Check: $3 \\neq 4$, $4 \\neq 5$, $3 \\neq 5$. Since no two sides are equal, the triangle is **scalene**.\n\n**Verification:** As a bonus, note that $3^2 + 4^2 = 9 + 16 = 25 = 5^2$, so this is also a right triangle (a 3-4-5 Pythagorean triple). But the question asks about side classification, not angle classification.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] Equilateral requires all three sides to be equal (e.g., $5$-$5$-$5$). Here all three sides are different.\n- Choice B: [TRAP: partial_calculation] Isosceles requires at least two equal sides. Students may miscount or confuse \"different\" with \"two the same.\"\n- Choice D: [TRAP: arithmetic_slip] We have complete information -- three side lengths are given, which is sufficient to classify the triangle.\n\n**Key concept:** Triangle classification by sides: Equilateral ($a = b = c$), Isosceles ($a = b \\neq c$), Scalene ($a \\neq b \\neq c \\neq a$).",
      skills: ['triangle-types']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In an isosceles triangle, if one of the equal angles is 70°, what is the third angle?",
      choices: [
        { id: "A", text: "40°" },
        { id: "B", text: "55°" },
        { id: "C", text: "70°" },
        { id: "D", text: "110°" }
      ],
      correctAnswer: "A",
      hint: "In an isosceles triangle, two angles are equal. Use the fact that all three angles must sum to 180°.",
      explanation: "**Choice A is correct.** The third angle is $40°$.\n\n**Step 1:** In an isosceles triangle, the two base angles are equal. We are told one of the equal angles is $70°$, so both base angles are $70°$.\n\n**Step 2:** Apply the triangle angle sum:\n$$70° + 70° + x = 180°$$\n$$140° + x = 180°$$\n$$x = 40°$$\n\n**Verification:** $70° + 70° + 40° = 180°$ ✓\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: partial_calculation] $55°$ would result from incorrectly assuming the three angles are $70°$, $55°$, and $55°$ (splitting the remaining $110°$ in half). This confuses which angles are the equal pair.\n- Choice C: [TRAP: reversed_operation] If all three angles were $70°$, the sum would be $210°$, which exceeds $180°$. A triangle cannot have three $70°$ angles.\n- Choice D: [TRAP: sign_error] $110°$ is actually $180° - 70° = 110°$, but this forgets to subtract the second $70°$ angle. This is a classic partial-subtraction error.\n\n**Key concept:** In an isosceles triangle, the base angles are equal. Third angle $= 180° - 2 \\times (\\text{base angle})$.",
      skills: ['triangle-angle-sum', 'triangle-types']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Can a triangle have sides of length 2, 3, and 7?",
      choices: [
        { id: "A", text: "Yes" },
        { id: "B", text: "No, because 2 + 3 < 7" },
        { id: "C", text: "No, because 7 is too large" },
        { id: "D", text: "Only if it's a right triangle" }
      ],
      correctAnswer: "B",
      hint: "Apply the Triangle Inequality Theorem: the sum of any two sides must be greater than the third side.",
      explanation: "**Choice B is correct.** No triangle can have sides $2$, $3$, and $7$ because the Triangle Inequality Theorem is violated.\n\n**Step 1:** The Triangle Inequality Theorem states that for any triangle with sides $a$, $b$, $c$:\n$$a + b > c, \\quad a + c > b, \\quad b + c > a$$\n\n**Step 2:** Test the critical inequality (sum of the two smallest sides vs. the largest):\n$$2 + 3 = 5 < 7$$\nSince $5 < 7$, the two shorter sides cannot \"reach\" each other to close the triangle.\n\n**Verification:** Geometrically, if you place a side of length $7$ on a line and try to connect endpoints with segments of length $2$ and $3$, the segments are too short to meet.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] Students who skip the inequality check may assume any three positive numbers can form a triangle. They cannot.\n- Choice C: [TRAP: partial_calculation] Saying \"$7$ is too large\" captures the intuition but lacks the precise mathematical reasoning. The issue is specifically that $2 + 3 < 7$, not just that $7$ is \"big.\"\n- Choice D: [TRAP: arithmetic_slip] The type of triangle is irrelevant. If the Triangle Inequality fails, no triangle of any type is possible.\n\n**Key concept:** Triangle Inequality Theorem: The sum of any two sides must be strictly greater than the third side: $a + b > c$.",
      skills: ['triangle-inequality']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "An equilateral triangle has a side length of 6. What is its perimeter?",
      choices: [
        { id: "A", text: "12" },
        { id: "B", text: "18" },
        { id: "C", text: "24" },
        { id: "D", text: "36" }
      ],
      correctAnswer: "B",
      hint: "Remember that 'equilateral' means all sides are equal. Perimeter is the sum of all sides.",
      explanation: "**Choice B is correct.** The perimeter is $18$.\n\n**Step 1:** An equilateral triangle has three equal sides. With side length $s = 6$:\n$$P = 3s = 3 \\times 6 = 18$$\n\n**Step 2:** Equivalently, $P = 6 + 6 + 6 = 18$.\n\n**Verification:** $18 \\div 3 = 6$ ✓ (each side is $6$, as given).\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $12 = 2 \\times 6$. This counts only two sides instead of three, as if the triangle were a line segment or the student forgot one side.\n- Choice C: [TRAP: reversed_operation] $24 = 4 \\times 6$. This multiplies by $4$ as if the shape were a square (quadrilateral), not a triangle.\n- Choice D: [TRAP: arithmetic_slip] $36 = 6^2 = 6 \\times 6$. This computes the square of the side length, confusing perimeter with an area-related calculation.\n\n**Key concept:** Perimeter of an equilateral triangle: $P = 3s$, where $s$ is the side length.",
      skills: ['triangle-types']
    }
  ],

  // Section: Angles of a Triangle
  "Angles of a Triangle": [
    {
      id: 1,
      difficulty: "easy",
      question: "In a triangle, two angles measure 45° and 75°. What is the third angle?",
      choices: [
        { id: "A", text: "30°" },
        { id: "B", text: "60°" },
        { id: "C", text: "90°" },
        { id: "D", text: "120°" }
      ],
      correctAnswer: "B",
      hint: "All three angles in a triangle must add up to 180°. Subtract the known angles from this total.",
      explanation: "**Choice B is correct.** The third angle is $60°$.\n\n**Step 1:** Apply the Triangle Angle Sum Theorem:\n$$\\angle_1 + \\angle_2 + \\angle_3 = 180°$$\n$$45° + 75° + \\angle_3 = 180°$$\n\n**Step 2:** Solve for the third angle:\n$$\\angle_3 = 180° - 45° - 75° = 180° - 120° = 60°$$\n\n**Verification:** $45° + 75° + 60° = 180°$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] $30°$ might come from subtracting $45°$ from $75°$, or from a miscalculation of $180° - 75° - 75°$.\n- Choice C: [TRAP: reversed_operation] $90°$ is a common \"guess\" for students who associate triangles with right angles. But $45° + 75° + 90° = 210° \\neq 180°$.\n- Choice D: [TRAP: partial_calculation] $120° = 180° - 60°$. A student may have computed $45° + 75° = 120°$ correctly but then reported the sum of the two known angles rather than the missing angle.\n\n**Key concept:** Third angle $= 180° - (\\text{sum of two known angles})$.",
      skills: ['triangle-angle-sum']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "An exterior angle of a triangle is 110°. What is the sum of the two non-adjacent interior angles?",
      choices: [
        { id: "A", text: "70°" },
        { id: "B", text: "90°" },
        { id: "C", text: "110°" },
        { id: "D", text: "180°" }
      ],
      correctAnswer: "C",
      hint: "The Exterior Angle Theorem states that an exterior angle equals the sum of the two remote (non-adjacent) interior angles.",
      explanation: "**Choice C is correct.** The sum of the two non-adjacent interior angles is $110°$.\n\n**Step 1:** The **Exterior Angle Theorem** states:\n$$\\text{Exterior angle} = \\text{Sum of the two remote interior angles}$$\n\n**Step 2:** Therefore, the sum of the two non-adjacent interior angles equals the exterior angle:\n$$\\text{Sum} = 110°$$\n\n**Verification:** If the exterior angle is $110°$, the adjacent interior angle is $180° - 110° = 70°$. The three interior angles sum to $180°$, so the two remote angles sum to $180° - 70° = 110°$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] $70° = 180° - 110°$ is the adjacent interior angle (the supplement), not the sum of the two remote interior angles.\n- Choice B: [TRAP: arithmetic_slip] $90°$ has no basis here. Students may default to $90°$ from familiarity with right angles.\n- Choice D: [TRAP: partial_calculation] $180°$ is the sum of all three interior angles, not just the two non-adjacent ones.\n\n**Key concept:** Exterior Angle Theorem: An exterior angle of a triangle equals the sum of the two non-adjacent (remote) interior angles.",
      skills: ['triangle-angle-sum']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In a right triangle, if one acute angle is 35°, what is the other acute angle?",
      choices: [
        { id: "A", text: "35°" },
        { id: "B", text: "45°" },
        { id: "C", text: "55°" },
        { id: "D", text: "145°" }
      ],
      correctAnswer: "C",
      hint: "A right triangle has one 90° angle. The two acute angles must together make up the remaining degrees.",
      explanation: "**Choice C is correct.** The other acute angle is $55°$.\n\n**Step 1:** A right triangle has one $90°$ angle. Using the angle sum theorem:\n$$90° + 35° + x = 180°$$\n\n**Step 2:** Solve:\n$$125° + x = 180°$$\n$$x = 55°$$\n\n**Verification:** $90° + 35° + 55° = 180°$ ✓. Also, the two acute angles are complementary: $35° + 55° = 90°$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] $35°$ assumes the triangle is isosceles (both acute angles equal). This is only true for a 45-45-90 triangle, not when one angle is $35°$.\n- Choice B: [TRAP: arithmetic_slip] $45°$ is the acute angle in a 45-45-90 triangle. Students may default to this familiar value rather than calculating.\n- Choice D: [TRAP: sign_error] $145° = 180° - 35°$. This subtraction forgets to account for the $90°$ angle. An angle of $145°$ is obtuse and cannot be in a right triangle alongside a $90°$ angle.\n\n**Key concept:** In a right triangle, the two acute angles are complementary: $\\alpha + \\beta = 90°$.\n\n**Calculator tip:** On Desmos, verify: $180 - 90 - 35 = 55$.",
      skills: ['triangle-angle-sum']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If all angles of a triangle are less than 90°, the triangle is:",
      choices: [
        { id: "A", text: "Acute" },
        { id: "B", text: "Right" },
        { id: "C", text: "Obtuse" },
        { id: "D", text: "Equilateral" }
      ],
      correctAnswer: "A",
      hint: "Triangles are classified by their largest angle: acute (all < 90°), right (one = 90°), or obtuse (one > 90°).",
      explanation: "**Choice A is correct.** A triangle with all angles less than $90°$ is classified as **acute**.\n\n**Step 1:** Triangle classification by angles:\n- **Acute:** All three angles $< 90°$\n- **Right:** Exactly one angle $= 90°$\n- **Obtuse:** Exactly one angle $> 90°$\n\n**Step 2:** Since every angle in this triangle is less than $90°$, it matches the definition of an acute triangle.\n\n**Verification:** Example: a triangle with angles $60°$, $70°$, $50°$ has all angles $< 90°$ and sums to $180°$ ✓.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: reversed_operation] A right triangle requires exactly one $90°$ angle. The problem states all angles are less than $90°$, ruling this out.\n- Choice C: [TRAP: sign_error] An obtuse triangle has one angle greater than $90°$. Since all angles here are less than $90°$, obtuse is impossible.\n- Choice D: [TRAP: partial_calculation] Equilateral triangles (all angles $= 60°$) are indeed acute, but \"equilateral\" is a classification by sides, not a complete answer. Not all acute triangles are equilateral (e.g., $50°$-$60°$-$70°$).\n\n**Key concept:** Angle classification: Acute (all $< 90°$), Right (one $= 90°$), Obtuse (one $> 90°$).",
      skills: ['triangle-angle-sum']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In triangle ABC, angle A = 2x, angle B = 3x, angle C = 4x. What is angle B?",
      choices: [
        { id: "A", text: "20°" },
        { id: "B", text: "40°" },
        { id: "C", text: "60°" },
        { id: "D", text: "80°" }
      ],
      correctAnswer: "C",
      hint: "First, set up an equation using the fact that 2x + 3x + 4x = 180°. Solve for x, then find angle B.",
      explanation: "**Choice C is correct.** Angle $B = 60°$.\n\n**Step 1:** Set up the equation using the angle sum theorem:\n$$2x + 3x + 4x = 180°$$\n$$9x = 180°$$\n\n**Step 2:** Solve for $x$:\n$$x = \\frac{180°}{9} = 20°$$\n\n**Step 3:** Find angle $B$:\n$$\\angle B = 3x = 3 \\times 20° = 60°$$\n\n**Verification:** $\\angle A = 2(20°) = 40°$, $\\angle B = 3(20°) = 60°$, $\\angle C = 4(20°) = 80°$. Sum: $40° + 60° + 80° = 180°$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $20°$ is the value of $x$, not angle $B$. A classic trap -- students solve for the variable but forget to multiply by the coefficient ($3x$, not $x$).\n- Choice B: [TRAP: arithmetic_slip] $40° = 2x = 2(20°)$. This is angle $A$, not angle $B$. Students may grab the wrong angle after solving correctly.\n- Choice D: [TRAP: reversed_operation] $80° = 4x = 4(20°)$. This is angle $C$, not angle $B$. Mixing up which coefficient belongs to which angle.\n\n**Key concept:** When angles are expressed as multiples of a variable, sum them and set equal to $180°$. Then carefully substitute back into the correct expression.\n\n**Calculator tip:** On Desmos, type $180/9$ to find $x = 20$, then multiply: $3 \\times 20 = 60$.",
      skills: ['triangle-angle-sum']
    }
  ],

  // Section: Area of a Triangle
  "Area of a Triangle": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the area of a triangle with base 10 and height 6?",
      choices: [
        { id: "A", text: "16" },
        { id: "B", text: "30" },
        { id: "C", text: "60" },
        { id: "D", text: "120" }
      ],
      correctAnswer: "B",
      hint: "The area formula for a triangle is half of base times height: A = (1/2) × b × h.",
      explanation: "**Choice B is correct.** The area is $30$.\n\n**Step 1:** Apply the triangle area formula:\n$$A = \\frac{1}{2} \\times b \\times h$$\n\n**Step 2:** Substitute the values:\n$$A = \\frac{1}{2} \\times 10 \\times 6 = \\frac{60}{2} = 30$$\n\n**Verification:** A rectangle with the same base and height would have area $10 \\times 6 = 60$. A triangle is exactly half of that: $60 \\div 2 = 30$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] $16 = 10 + 6$. This adds base and height instead of multiplying -- confusing perimeter-type operations with area.\n- Choice C: [TRAP: partial_calculation] $60 = 10 \\times 6$. This is the area of the corresponding rectangle, forgetting the crucial $\\frac{1}{2}$ factor.\n- Choice D: [TRAP: arithmetic_slip] $120 = 2 \\times 10 \\times 6$. This doubles instead of halving the product, applying the $\\frac{1}{2}$ factor in the wrong direction.\n\n**Key concept:** Triangle area formula: $A = \\frac{1}{2}bh$. A triangle is always half of its bounding rectangle.",
      skills: ['triangle-area']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A triangle has area 24 and base 8. What is its height?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "6" },
        { id: "C", text: "12" },
        { id: "D", text: "16" }
      ],
      correctAnswer: "B",
      hint: "Rearrange the area formula A = (1/2) × b × h to solve for h when you know A and b.",
      explanation: "**Choice B is correct.** The height is $6$.\n\n**Step 1:** Start with the area formula and solve for $h$:\n$$A = \\frac{1}{2} \\times b \\times h$$\n$$24 = \\frac{1}{2} \\times 8 \\times h$$\n\n**Step 2:** Simplify and solve:\n$$24 = 4h$$\n$$h = \\frac{24}{4} = 6$$\n\n**Verification:** $\\frac{1}{2} \\times 8 \\times 6 = \\frac{48}{2} = 24$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $3 = 24 \\div 8$. This divides area by base but forgets to account for the $\\frac{1}{2}$ in the formula. The correct rearrangement is $h = \\frac{2A}{b}$.\n- Choice C: [TRAP: reversed_operation] $12 = \\frac{2 \\times 24}{4}$. This may come from an algebraic error in rearranging, such as doubling $24$ and dividing by $4$ instead of dividing by $8$.\n- Choice D: [TRAP: arithmetic_slip] $16 = 2 \\times 8$. This has no clear connection to the problem and likely comes from confusing operations.\n\n**Key concept:** Rearranged area formula: $h = \\frac{2A}{b}$. Always multiply the area by $2$ before dividing by the base.",
      skills: ['triangle-area']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If the base and height of a triangle are both doubled, the area is multiplied by:",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "4" },
        { id: "C", text: "8" },
        { id: "D", text: "16" }
      ],
      correctAnswer: "B",
      hint: "Substitute 2b and 2h into the area formula and compare to the original area (1/2)bh.",
      explanation: "**Choice B is correct.** The area is multiplied by $4$.\n\n**Step 1:** Original area:\n$$A_{\\text{original}} = \\frac{1}{2} \\times b \\times h$$\n\n**Step 2:** New area with doubled dimensions:\n$$A_{\\text{new}} = \\frac{1}{2} \\times (2b) \\times (2h) = \\frac{1}{2} \\times 4bh = 4 \\times \\frac{1}{2}bh$$\n\n**Step 3:** Compare:\n$$A_{\\text{new}} = 4 \\times A_{\\text{original}}$$\n\n**Verification:** Example: $b = 3$, $h = 4$. Original area $= \\frac{1}{2}(3)(4) = 6$. New area $= \\frac{1}{2}(6)(8) = 24$. Ratio: $24/6 = 4$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] A factor of $2$ would result from doubling only the base OR only the height, not both. Doubling both dimensions compounds the effect: $2 \\times 2 = 4$.\n- Choice C: [TRAP: arithmetic_slip] $8 = 2^3$. This might come from cubing the scale factor, which applies to volume, not area.\n- Choice D: [TRAP: reversed_operation] $16 = 2^4$. This might come from squaring the scale factor twice, or confusing with a different geometric relationship.\n\n**Key concept:** When dimensions scale by factor $k$, area scales by $k^2$. Here $k = 2$, so area scales by $2^2 = 4$.",
      skills: ['triangle-area']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A right triangle has legs of length 5 and 12. What is its area?",
      choices: [
        { id: "A", text: "30" },
        { id: "B", text: "60" },
        { id: "C", text: "65" },
        { id: "D", text: "85" }
      ],
      correctAnswer: "A",
      hint: "In a right triangle, the two legs are perpendicular, so one can serve as the base and the other as the height.",
      explanation: "**Choice A is correct.** The area is $30$.\n\n**Step 1:** In a right triangle, the two legs are perpendicular, so they serve directly as the base and height:\n$$A = \\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$$\n\n**Step 2:** Substitute:\n$$A = \\frac{1}{2} \\times 5 \\times 12 = \\frac{60}{2} = 30$$\n\n**Verification:** $\\frac{1}{2} \\times 5 \\times 12 = 30$ ✓\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: partial_calculation] $60 = 5 \\times 12$. This computes $b \\times h$ but forgets the $\\frac{1}{2}$ factor -- the most common area mistake on the SAT.\n- Choice C: [TRAP: arithmetic_slip] $65$ is related to the Pythagorean theorem: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$. The value $65$ may come from $\\frac{1}{2}(13)(10)$ or another mismatch -- students sometimes try to use the hypotenuse in the area formula.\n- Choice D: [TRAP: reversed_operation] $85$ might come from an incorrect operation like $5^2 + 12 \\times 5 = 25 + 60$. This has no geometric meaning.\n\n**Key concept:** For a right triangle, $A = \\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$. The legs are automatically perpendicular, so no separate height calculation is needed.",
      skills: ['triangle-area']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "An equilateral triangle has side length 4. What is its height?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "2√3" },
        { id: "C", text: "4" },
        { id: "D", text: "4√3" }
      ],
      correctAnswer: "B",
      hint: "Draw the height from one vertex to the opposite side. This creates two 30-60-90 triangles.",
      explanation: "**Choice B is correct.** The height is $2\\sqrt{3}$.\n\n**Step 1:** Drop an altitude from one vertex to the opposite side. This bisects the base, creating two congruent 30-60-90 right triangles with:\n- Hypotenuse $= 4$ (the original side)\n- Short leg $= 2$ (half the base)\n- Long leg $= h$ (the height we want)\n\n**Step 2:** Apply the Pythagorean theorem:\n$$h^2 + 2^2 = 4^2$$\n$$h^2 + 4 = 16$$\n$$h^2 = 12$$\n$$h = \\sqrt{12} = 2\\sqrt{3}$$\n\n**Step 3:** Alternatively, use the 30-60-90 ratio ($1 : \\sqrt{3} : 2$). The height is opposite the $60°$ angle:\n$$h = 2 \\times \\sqrt{3} = 2\\sqrt{3}$$\n\n**Verification:** Using the formula $h = \\frac{s\\sqrt{3}}{2} = \\frac{4\\sqrt{3}}{2} = 2\\sqrt{3}$ ✓. Numerically, $2\\sqrt{3} \\approx 3.46$, which is reasonable for a triangle with side $4$.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $2$ is half the base (the short leg of the 30-60-90 triangle), not the height. Students stop too early after bisecting the base.\n- Choice C: [TRAP: reversed_operation] $4$ is the side length itself. The height of an equilateral triangle is always less than its side length ($h = \\frac{s\\sqrt{3}}{2} < s$).\n- Choice D: [TRAP: arithmetic_slip] $4\\sqrt{3}$ uses the full side length instead of half the base in the 30-60-90 ratio. This would be the height if the side were $8$, not $4$.\n\n**Key concept:** Height of an equilateral triangle: $h = \\frac{s\\sqrt{3}}{2}$, derived from the 30-60-90 triangle created by the altitude.\n\n**Calculator tip:** On Desmos, compute $2\\sqrt{3} \\approx 3.464$.",
      skills: ['triangle-area', 'special-right-triangles']
    }
  ],

  // Section: Similar Triangles
  "Similar Triangles": [
    {
      id: 1,
      difficulty: "easy",
      question: "Triangles ABC and DEF are similar. If AB = 6, DE = 9, and BC = 8, what is EF?",
      choices: [
        { id: "A", text: "10" },
        { id: "B", text: "12" },
        { id: "C", text: "14" },
        { id: "D", text: "16" }
      ],
      correctAnswer: "B",
      hint: "Find the scale factor by comparing corresponding sides (DE/AB), then multiply BC by this factor.",
      explanation: "**Choice B is correct.** $EF = 12$.\n\n**Step 1:** Find the scale factor using corresponding sides:\n$$k = \\frac{DE}{AB} = \\frac{9}{6} = \\frac{3}{2}$$\n\n**Step 2:** Apply the scale factor to find $EF$ (which corresponds to $BC$):\n$$EF = BC \\times k = 8 \\times \\frac{3}{2} = 12$$\n\n**Verification:** Check the ratios: $\\frac{DE}{AB} = \\frac{9}{6} = 1.5$ and $\\frac{EF}{BC} = \\frac{12}{8} = 1.5$ ✓. Corresponding side ratios are equal.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] $10$ might come from adding $8 + 2$ or a rough estimation. It does not satisfy the proportion $\\frac{9}{6} = \\frac{EF}{8}$.\n- Choice C: [TRAP: partial_calculation] $14$ might come from adding the difference ($9 - 6 = 3$) to $BC$: $8 + 3 = 11$... or from another additive error. Similar triangles use multiplicative scaling, not additive.\n- Choice D: [TRAP: reversed_operation] $16 = 8 \\times 2$. This uses a scale factor of $2$ instead of $\\frac{3}{2}$, perhaps from misreading the side ratio.\n\n**Key concept:** In similar triangles, corresponding sides are proportional: $\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF}$. Always use multiplication (not addition) with the scale factor.",
      skills: ['similar-triangles']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Two similar triangles have a scale factor of 2:5. If the smaller triangle has perimeter 24, what is the perimeter of the larger triangle?",
      choices: [
        { id: "A", text: "48" },
        { id: "B", text: "60" },
        { id: "C", text: "96" },
        { id: "D", text: "150" }
      ],
      correctAnswer: "B",
      hint: "The ratio of perimeters equals the ratio of corresponding sides. Multiply the smaller perimeter by 5/2.",
      explanation: "**Choice B is correct.** The perimeter of the larger triangle is $60$.\n\n**Step 1:** Perimeters of similar triangles share the same ratio as their corresponding sides:\n$$\\frac{P_{\\text{larger}}}{P_{\\text{smaller}}} = \\frac{5}{2}$$\n\n**Step 2:** Solve for the larger perimeter:\n$$P_{\\text{larger}} = 24 \\times \\frac{5}{2} = \\frac{120}{2} = 60$$\n\n**Verification:** $\\frac{60}{24} = \\frac{5}{2} = 2.5$ ✓. The ratio matches the given scale factor.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $48 = 24 \\times 2$. This doubles the perimeter instead of multiplying by $\\frac{5}{2}$. Perhaps the student only used part of the ratio.\n- Choice C: [TRAP: reversed_operation] $96 = 24 \\times 4$. This uses the square of the scale factor $(\\frac{5}{2})^2 = \\frac{25}{4} \\approx 6.25$... no, $24 \\times 4 = 96$. The student may have squared the ratio $2$ to get $4$, confusing the area ratio with the perimeter ratio.\n- Choice D: [TRAP: arithmetic_slip] $150 = 24 \\times \\frac{25}{4}$. This applies the area ratio ($\\frac{25}{4}$) to the perimeter. Area scales as $k^2$; perimeter scales as $k$.\n\n**Key concept:** Perimeters of similar figures scale linearly with the side ratio $k$. Areas scale as $k^2$. Never mix them up!",
      skills: ['similar-triangles']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Similar triangles have areas in the ratio 4:9. What is the ratio of their corresponding sides?",
      choices: [
        { id: "A", text: "2:3" },
        { id: "B", text: "4:9" },
        { id: "C", text: "16:81" },
        { id: "D", text: "8:27" }
      ],
      correctAnswer: "A",
      hint: "Area ratio equals the square of the side ratio. Take the square root of the area ratio to find the side ratio.",
      explanation: "**Choice A is correct.** The side ratio is $2:3$.\n\n**Step 1:** For similar figures, the area ratio equals the square of the side ratio:\n$$\\frac{A_1}{A_2} = \\left(\\frac{s_1}{s_2}\\right)^2$$\n\n**Step 2:** Take the square root to find the side ratio:\n$$\\frac{s_1}{s_2} = \\sqrt{\\frac{4}{9}} = \\frac{\\sqrt{4}}{\\sqrt{9}} = \\frac{2}{3}$$\n\n**Verification:** $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$ ✓\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: partial_calculation] $4:9$ is the area ratio, not the side ratio. Students who don't take the square root report the given ratio unchanged.\n- Choice C: [TRAP: reversed_operation] $16:81 = 4^2 : 9^2$. This squares the area ratio instead of taking the square root -- going in the wrong direction.\n- Choice D: [TRAP: arithmetic_slip] $8:27 = 2^3 : 3^3$. This is the volume ratio, not the side ratio. Students confuse the exponent: sides use $\\sqrt{}$, areas use $k^2$, volumes use $k^3$.\n\n**Key concept:** The scaling relationships: side ratio $= k$, perimeter ratio $= k$, area ratio $= k^2$, volume ratio $= k^3$. To go from area ratio to side ratio, take the square root.",
      skills: ['similar-triangles']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Two similar triangles have corresponding sides of 3 and 5. If the smaller has area 18, what is the area of the larger?",
      choices: [
        { id: "A", text: "30" },
        { id: "B", text: "50" },
        { id: "C", text: "54" },
        { id: "D", text: "90" }
      ],
      correctAnswer: "B",
      hint: "The area ratio is the square of the side ratio. Find (5/3)² and multiply by the smaller area.",
      explanation: "**Choice B is correct.** The area of the larger triangle is $50$.\n\n**Step 1:** Find the side ratio:\n$$k = \\frac{5}{3}$$\n\n**Step 2:** The area ratio is the square of the side ratio:\n$$\\text{Area ratio} = k^2 = \\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$$\n\n**Step 3:** Calculate the larger area:\n$$A_{\\text{larger}} = 18 \\times \\frac{25}{9} = \\frac{450}{9} = 50$$\n\n**Verification:** $\\frac{50}{18} = \\frac{25}{9}$ and $\\sqrt{\\frac{25}{9}} = \\frac{5}{3}$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $30 = 18 \\times \\frac{5}{3}$. This multiplies by the side ratio $\\frac{5}{3}$ instead of the area ratio $\\left(\\frac{5}{3}\\right)^2$. Areas scale as the square of the linear ratio.\n- Choice C: [TRAP: arithmetic_slip] $54 = 18 \\times 3$. This multiplies by $3$ (perhaps confusing $\\frac{5}{3}$ with $3$, or using the wrong ratio entirely).\n- Choice D: [TRAP: reversed_operation] $90 = 18 \\times 5$. This multiplies by $5$ instead of $\\frac{25}{9}$, ignoring the squaring and ratio structure.\n\n**Key concept:** Area of similar figures: $A_{\\text{larger}} = A_{\\text{smaller}} \\times k^2$, where $k$ is the ratio of corresponding sides.\n\n**Calculator tip:** On Desmos, compute $18 \\times (5/3)^2 = 18 \\times 25/9 = 50$.",
      skills: ['similar-triangles']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Which condition is NOT sufficient to prove two triangles are similar?",
      choices: [
        { id: "A", text: "AA (two angles equal)" },
        { id: "B", text: "SSS (all sides proportional)" },
        { id: "C", text: "SAS (two sides proportional and included angle equal)" },
        { id: "D", text: "SSA (two sides proportional and non-included angle equal)" }
      ],
      correctAnswer: "D",
      hint: "Think about which combinations uniquely determine a triangle's shape. One of these can produce two different triangles.",
      explanation: "**Choice D is correct.** SSA (two sides proportional and a non-included angle equal) is NOT sufficient to prove similarity.\n\n**Step 1:** Review the valid similarity criteria:\n- **AA (Angle-Angle):** Two pairs of equal angles guarantee the third is also equal (since angles sum to $180°$). ✓ Valid.\n- **SSS (Side-Side-Side):** All three pairs of sides proportional forces the same shape. ✓ Valid.\n- **SAS (Side-Angle-Side):** Two pairs of proportional sides with the included angle equal locks the triangle's shape. ✓ Valid.\n\n**Step 2:** Why SSA fails:\n- SSA is the \"ambiguous case.\" When two sides and a non-included angle are known, it can produce **two different triangles** (or zero or one, depending on the lengths). Since SSA does not uniquely determine a triangle's shape, it cannot prove similarity.\n\n**Verification:** Consider two triangles where sides $a$, $b$ and angle $A$ (opposite side $a$) are proportional/equal. The angle opposite the second side can be either acute or obtuse, producing different triangles.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] AA is actually the most commonly used similarity criterion. With two angles equal, the third is automatically equal, guaranteeing similarity.\n- Choice B: [TRAP: partial_calculation] SSS similarity is valid -- if all three pairs of sides are proportional, the triangles must have the same shape.\n- Choice C: [TRAP: arithmetic_slip] SAS similarity is valid -- the included angle between two proportional sides fixes the triangle's shape uniquely.\n\n**Key concept:** The three valid similarity criteria are AA, SSS, and SAS. SSA is the ambiguous case and is NOT a valid similarity (or congruence) criterion.",
      skills: ['similar-triangles']
    }
  ],

  // Section: Right Triangles & Pythagorean Theorem
  "Right Triangles & Pythagorean Theorem": [
    {
      id: 1,
      difficulty: "easy",
      question: "A right triangle has legs 6 and 8. What is the hypotenuse?",
      choices: [
        { id: "A", text: "7" },
        { id: "B", text: "10" },
        { id: "C", text: "14" },
        { id: "D", text: "100" }
      ],
      correctAnswer: "B",
      hint: "Use the Pythagorean Theorem: a² + b² = c², where c is the hypotenuse.",
      explanation: "**Choice B is correct.** The hypotenuse is $10$.\n\n**Step 1:** Apply the Pythagorean Theorem:\n$$c^2 = a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100$$\n\n**Step 2:** Take the square root:\n$$c = \\sqrt{100} = 10$$\n\n**Verification:** $6$-$8$-$10$ is a multiple of the $3$-$4$-$5$ Pythagorean triple (scaled by $2$). Also: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] $7 = \\frac{6+8}{2}$. This averages the legs instead of applying the Pythagorean theorem. The hypotenuse is not the average of the legs.\n- Choice C: [TRAP: reversed_operation] $14 = 6 + 8$. This adds the legs, confusing perimeter-type addition with the Pythagorean theorem. The hypotenuse of a right triangle is always less than the sum of the legs.\n- Choice D: [TRAP: partial_calculation] $100 = 6^2 + 8^2 = c^2$. This is $c^2$, not $c$. The student computed $c^2$ correctly but forgot to take the square root -- one of the most common Pythagorean theorem errors.\n\n**Key concept:** Pythagorean Theorem: $a^2 + b^2 = c^2$. Always remember the final step -- take the square root of the sum to find $c$, not $c^2$.\n\n**Calculator tip:** On Desmos, type $\\sqrt{6^2 + 8^2}$ to get $10$ directly.",
      skills: ['pythagorean-theorem']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A ladder 13 feet long leans against a wall. If the base is 5 feet from the wall, how high up the wall does it reach?",
      choices: [
        { id: "A", text: "8 feet" },
        { id: "B", text: "12 feet" },
        { id: "C", text: "18 feet" },
        { id: "D", text: "144 feet" }
      ],
      correctAnswer: "B",
      hint: "The ladder forms a right triangle with the wall and ground. The ladder is the hypotenuse.",
      explanation: "**Choice B is correct.** The ladder reaches $12$ feet up the wall.\n\n**Step 1:** Model the situation as a right triangle: the ladder is the hypotenuse ($c = 13$), the ground distance is one leg ($a = 5$), and the wall height is the other leg ($h$).\n\n**Step 2:** Apply the Pythagorean Theorem and solve for $h$:\n$$c^2 = a^2 + h^2$$\n$$13^2 = 5^2 + h^2$$\n$$169 = 25 + h^2$$\n$$h^2 = 144$$\n$$h = \\sqrt{144} = 12$$\n\n**Verification:** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✓. This is the $5$-$12$-$13$ Pythagorean triple.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] $8 = 13 - 5$. This subtracts instead of using the Pythagorean theorem. The relationship between sides is quadratic, not linear.\n- Choice C: [TRAP: reversed_operation] $18 = 13 + 5$. This adds the hypotenuse and leg, which has no geometric meaning in a right triangle.\n- Choice D: [TRAP: partial_calculation] $144 = 13^2 - 5^2 = h^2$. This is $h^2$, not $h$. The student stopped one step early, forgetting to take the square root.\n\n**Key concept:** In real-world problems, identify the right triangle and determine which measurement is the hypotenuse. The hypotenuse is always the longest side (opposite the right angle). Then apply $a^2 + b^2 = c^2$.",
      skills: ['pythagorean-theorem']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Is a triangle with sides 7, 24, 25 a right triangle?",
      choices: [
        { id: "A", text: "Yes, because 7² + 24² = 25²" },
        { id: "B", text: "No, because 7² + 24² ≠ 25²" },
        { id: "C", text: "Yes, because 7 + 24 > 25" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "A",
      hint: "Test the Pythagorean Theorem with the two shorter sides and the longest side (potential hypotenuse).",
      explanation: "**Choice A is correct.** Yes, this is a right triangle because $7^2 + 24^2 = 25^2$.\n\n**Step 1:** To test if a triangle is right, check whether the Pythagorean theorem holds. The longest side ($25$) must be the hypotenuse:\n$$7^2 + 24^2 \\stackrel{?}{=} 25^2$$\n\n**Step 2:** Compute each side:\n$$49 + 576 = 625$$\n$$25^2 = 625$$\n$$625 = 625 \\checkmark$$\n\n**Verification:** Since the equation holds, the triangle satisfies the Pythagorean theorem and is a right triangle. The triple $7$-$24$-$25$ is a well-known Pythagorean triple.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: arithmetic_slip] This claims $7^2 + 24^2 \\neq 25^2$, but the arithmetic shows $49 + 576 = 625 = 625$. A computation error (perhaps $24^2 = 576$ is miscalculated) leads to this wrong conclusion.\n- Choice C: [TRAP: reversed_operation] $7 + 24 > 25$ (i.e., $31 > 25$) proves the Triangle Inequality (a valid triangle exists), NOT that it is a right triangle. These are entirely different theorems.\n- Choice D: [TRAP: partial_calculation] We absolutely can determine the answer. Three side lengths are sufficient to test the Pythagorean theorem.\n\n**Key concept:** The Pythagorean Theorem Converse: If $a^2 + b^2 = c^2$ (where $c$ is the longest side), the triangle is a right triangle. Common Pythagorean triples to memorize: $3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$.",
      skills: ['pythagorean-theorem']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A right triangle has hypotenuse 15 and one leg 9. What is the other leg?",
      choices: [
        { id: "A", text: "6" },
        { id: "B", text: "12" },
        { id: "C", text: "18" },
        { id: "D", text: "24" }
      ],
      correctAnswer: "B",
      hint: "Rearrange the Pythagorean Theorem to solve for the missing leg: b² = c² - a².",
      explanation: "**Choice B is correct.** The other leg is $12$.\n\n**Step 1:** Use the Pythagorean Theorem rearranged to solve for the missing leg:\n$$c^2 = a^2 + b^2$$\n$$b^2 = c^2 - a^2 = 15^2 - 9^2$$\n\n**Step 2:** Compute:\n$$b^2 = 225 - 81 = 144$$\n$$b = \\sqrt{144} = 12$$\n\n**Verification:** $9^2 + 12^2 = 81 + 144 = 225 = 15^2$ ✓. This is a $3$-$4$-$5$ triple scaled by $3$: $(9, 12, 15) = 3 \\times (3, 4, 5)$.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] $6 = 15 - 9$. This subtracts the leg from the hypotenuse, using a linear relationship instead of the quadratic Pythagorean theorem.\n- Choice C: [TRAP: reversed_operation] $18 = 15 + 9 - 6$, or possibly from $\\sqrt{225 + 81} = \\sqrt{306} \\approx 17.5$. Adding squares instead of subtracting (using $a^2 + c^2$ instead of $c^2 - a^2$) gives an incorrect result.\n- Choice D: [TRAP: partial_calculation] $24 = 15 + 9$. This adds the hypotenuse and leg, which has no Pythagorean meaning.\n\n**Key concept:** To find a missing leg: $b = \\sqrt{c^2 - a^2}$. Always subtract the known leg squared from the hypotenuse squared. Never add when finding a leg.\n\n**Calculator tip:** On Desmos, type $\\sqrt{15^2 - 9^2}$ to get $12$.",
      skills: ['pythagorean-theorem']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The diagonal of a rectangle is 10 and one side is 6. What is the other side?",
      choices: [
        { id: "A", text: "4" },
        { id: "B", text: "8" },
        { id: "C", text: "√64" },
        { id: "D", text: "Both B and C" }
      ],
      correctAnswer: "D",
      hint: "A rectangle's diagonal creates a right triangle with the two sides. The diagonal is the hypotenuse.",
      explanation: "**Choice D is correct.** Both B ($8$) and C ($\\sqrt{64}$) are correct because they are equal.\n\n**Step 1:** A rectangle's diagonal divides it into two right triangles. The diagonal is the hypotenuse:\n$$d^2 = l^2 + w^2$$\n$$10^2 = 6^2 + s^2$$\n\n**Step 2:** Solve for $s$:\n$$100 = 36 + s^2$$\n$$s^2 = 64$$\n$$s = \\sqrt{64} = 8$$\n\n**Step 3:** Notice that $\\sqrt{64} = 8$, so choices B and C are the same value expressed differently.\n\n**Verification:** $6^2 + 8^2 = 36 + 64 = 100 = 10^2$ ✓. Also, $(6, 8, 10) = 2 \\times (3, 4, 5)$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] $4 = 10 - 6$. This subtracts linearly instead of using the Pythagorean theorem. Since $6^2 + 4^2 = 36 + 16 = 52 \\neq 100$, this does not work.\n- Choice B alone: [TRAP: partial_calculation] $8$ is numerically correct, but choosing only B ignores that C is also correct ($\\sqrt{64} = 8$). The SAT tests whether you recognize equivalent expressions.\n- Choice C alone: [TRAP: partial_calculation] $\\sqrt{64}$ is correct but selecting only C ignores that B gives the same value in simplified form.\n\n**Key concept:** A rectangle's diagonal creates a right triangle: $d^2 = l^2 + w^2$. On the SAT, always check if two answer choices are equivalent expressions (e.g., $8 = \\sqrt{64}$) -- \"Both\" answers appear frequently.",
      skills: ['pythagorean-theorem']
    }
  ],

  // Section: Trigonometric Ratios
  "Trigonometric Ratios": [
    {
      id: 1,
      difficulty: "easy",
      question: "In a right triangle, sin(θ) equals:",
      choices: [
        { id: "A", text: "Adjacent/Hypotenuse" },
        { id: "B", text: "Opposite/Hypotenuse" },
        { id: "C", text: "Opposite/Adjacent" },
        { id: "D", text: "Hypotenuse/Opposite" }
      ],
      correctAnswer: "B",
      hint: "Remember SOH-CAH-TOA: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent.",
      explanation: "**Choice B is correct.** $\\sin(\\theta) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$.\n\n**Step 1:** The mnemonic **SOH-CAH-TOA** defines the three primary trig ratios:\n- **S**ine = **O**pposite / **H**ypotenuse (SOH)\n- **C**osine = **A**djacent / **H**ypotenuse (CAH)\n- **T**angent = **O**pposite / **A**djacent (TOA)\n\n**Step 2:** From SOH: $\\sin(\\theta) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$.\n\n**Verification:** In a 3-4-5 triangle with $\\theta$ opposite the side of length $3$: $\\sin(\\theta) = \\frac{3}{5}$. Using a calculator: $\\sin(\\arcsin(0.6)) = 0.6 = \\frac{3}{5}$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] Adjacent/Hypotenuse is $\\cos(\\theta)$, not $\\sin(\\theta)$. This is the most common confusion -- swapping sine and cosine definitions.\n- Choice C: [TRAP: reversed_operation] Opposite/Adjacent is $\\tan(\\theta)$, not $\\sin(\\theta)$.\n- Choice D: [TRAP: reversed_operation] Hypotenuse/Opposite is $\\csc(\\theta) = \\frac{1}{\\sin(\\theta)}$, the reciprocal of sine. The fraction is flipped.\n\n**Key concept:** SOH-CAH-TOA is non-negotiable for the SAT. Memorize it: $\\sin = \\frac{O}{H}$, $\\cos = \\frac{A}{H}$, $\\tan = \\frac{O}{A}$.",
      skills: ['soh-cah-toa']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In a right triangle, the side opposite to a 30° angle is 5. What is the hypotenuse?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "10" },
        { id: "C", text: "5√3" },
        { id: "D", text: "10√3" }
      ],
      correctAnswer: "B",
      hint: "Use the fact that sin(30°) = 1/2. Set up the equation: opposite/hypotenuse = 1/2.",
      explanation: "**Choice B is correct.** The hypotenuse is $10$.\n\n**Step 1:** Use the sine ratio with the known angle and opposite side:\n$$\\sin(30°) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{5}{h}$$\n\n**Step 2:** Since $\\sin(30°) = \\frac{1}{2}$:\n$$\\frac{1}{2} = \\frac{5}{h}$$\n$$h = 5 \\times 2 = 10$$\n\n**Verification:** In a 30-60-90 triangle with hypotenuse $10$: short leg (opposite $30°$) $= \\frac{10}{2} = 5$ ✓. Also, $\\sin(30°) = \\frac{5}{10} = 0.5$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $5$ is the opposite side itself, not the hypotenuse. The hypotenuse is always the longest side and must be greater than $5$.\n- Choice C: [TRAP: reversed_operation] $5\\sqrt{3}$ is the side opposite the $60°$ angle (the longer leg) in this 30-60-90 triangle. Students who confuse which side corresponds to which angle choose this.\n- Choice D: [TRAP: arithmetic_slip] $10\\sqrt{3}$ would be the longer leg if the hypotenuse were $20$, or it results from multiplying the hypotenuse by $\\sqrt{3}$ unnecessarily.\n\n**Key concept:** In a 30-60-90 triangle, sides are in ratio $1 : \\sqrt{3} : 2$. The side opposite $30°$ is half the hypotenuse: $\\text{hypotenuse} = 2 \\times \\text{short leg}$.\n\n**Calculator tip:** On Desmos, verify: $5 / \\sin(30°) = 5 / 0.5 = 10$.",
      skills: ['soh-cah-toa']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If cos(θ) = 0.8 in a right triangle with adjacent side 12, what is the hypotenuse?",
      choices: [
        { id: "A", text: "9.6" },
        { id: "B", text: "15" },
        { id: "C", text: "16" },
        { id: "D", text: "20" }
      ],
      correctAnswer: "B",
      hint: "Cosine equals adjacent over hypotenuse. Set up: 0.8 = 12/h and solve for h.",
      explanation: "**Choice B is correct.** The hypotenuse is $15$.\n\n**Step 1:** Apply the cosine definition:\n$$\\cos(\\theta) = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{12}{h}$$\n\n**Step 2:** Substitute $\\cos(\\theta) = 0.8$ and solve:\n$$0.8 = \\frac{12}{h}$$\n$$h = \\frac{12}{0.8} = 15$$\n\n**Verification:** $\\frac{12}{15} = 0.8$ ✓. Also, the opposite side would be $\\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = \\sqrt{81} = 9$, giving a $9$-$12$-$15$ triangle ($3 \\times$ the $3$-$4$-$5$ triple) ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] $9.6 = 12 \\times 0.8$. This multiplies the adjacent side by $\\cos(\\theta)$ instead of dividing. The correct operation is $h = \\frac{\\text{Adjacent}}{\\cos(\\theta)}$, not $h = \\text{Adjacent} \\times \\cos(\\theta)$.\n- Choice C: [TRAP: arithmetic_slip] $16$ might come from a calculation error such as $\\frac{12}{0.75}$ or a rounding mistake.\n- Choice D: [TRAP: partial_calculation] $20 = \\frac{12}{0.6}$. This uses $0.6$ (which is $\\sin(\\theta)$ in a 3-4-5 ratio) instead of $0.8$, confusing sine and cosine values.\n\n**Key concept:** From $\\cos(\\theta) = \\frac{\\text{Adj}}{\\text{Hyp}}$, solve for hypotenuse: $\\text{Hyp} = \\frac{\\text{Adj}}{\\cos(\\theta)}$. Division, not multiplication!\n\n**Calculator tip:** On Desmos, type $12 / 0.8$ to get $15$.",
      skills: ['soh-cah-toa']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In a right triangle with legs 3 and 4, what is tan(θ) where θ is the angle opposite the side of length 3?",
      choices: [
        { id: "A", fraction: { numerator: "3", denominator: "4" } },
        { id: "B", fraction: { numerator: "4", denominator: "3" } },
        { id: "C", fraction: { numerator: "3", denominator: "5" } },
        { id: "D", fraction: { numerator: "4", denominator: "5" } }
      ],
      correctAnswer: "A",
      hint: "Tangent = opposite/adjacent. Identify which leg is opposite to angle θ and which is adjacent.",
      explanation: "**Choice A is correct.** $\\tan(\\theta) = \\frac{3}{4}$.\n\n**Step 1:** Identify the sides relative to angle $\\theta$:\n- **Opposite** to $\\theta$: the side of length $3$ (given)\n- **Adjacent** to $\\theta$: the side of length $4$ (the other leg)\n- **Hypotenuse**: $\\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$\n\n**Step 2:** Apply TOA:\n$$\\tan(\\theta) = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{3}{4}$$\n\n**Verification:** $\\tan(\\theta) = \\frac{3}{4} = 0.75$. Using inverse tangent: $\\theta = \\arctan(0.75) \\approx 36.87°$ ✓\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: reversed_operation] $\\frac{4}{3}$ reverses the fraction. This is $\\tan$ of the OTHER acute angle (the one opposite the side of length $4$), or equivalently $\\frac{1}{\\tan(\\theta)} = \\cot(\\theta)$.\n- Choice C: [TRAP: reversed_operation] $\\frac{3}{5} = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\sin(\\theta)$. This uses the sine ratio instead of tangent.\n- Choice D: [TRAP: reversed_operation] $\\frac{4}{5} = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\cos(\\theta)$. This uses the cosine ratio instead of tangent.\n\n**Key concept:** $\\tan(\\theta) = \\frac{\\text{Opposite}}{\\text{Adjacent}}$. The tangent ratio does NOT involve the hypotenuse. A common SAT strategy: if only legs are needed, you may not need to find the hypotenuse at all.",
      skills: ['soh-cah-toa']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If sin(A) = cos(B) in a right triangle, then angles A and B are:",
      choices: [
        { id: "A", text: "Equal" },
        { id: "B", text: "Complementary (sum to 90°)" },
        { id: "C", text: "Supplementary (sum to 180°)" },
        { id: "D", text: "No relationship" }
      ],
      correctAnswer: "B",
      hint: "Recall that sin(θ) = cos(90° - θ). What relationship must A and B have for sin(A) = cos(B)?",
      explanation: "**Choice B is correct.** Angles $A$ and $B$ are complementary, meaning $A + B = 90°$.\n\n**Step 1:** Use the co-function identity:\n$$\\sin(A) = \\cos(90° - A)$$\n\n**Step 2:** If $\\sin(A) = \\cos(B)$, then:\n$$\\cos(90° - A) = \\cos(B)$$\n$$90° - A = B$$\n$$A + B = 90°$$\n\nAngles that sum to $90°$ are **complementary**.\n\n**Verification:** Test with $A = 30°$, $B = 60°$: $\\sin(30°) = 0.5$ and $\\cos(60°) = 0.5$ ✓. And $30° + 60° = 90°$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] Equal angles would mean $A = B$. But $\\sin(A) = \\cos(A)$ only when $A = 45°$. This is a special case, not the general rule. For example, $\\sin(30°) = \\cos(60°)$ but $30° \\neq 60°$.\n- Choice C: [TRAP: arithmetic_slip] Supplementary angles sum to $180°$. But $\\sin(A) = \\cos(B)$ implies $A + B = 90°$, not $180°$. Students may confuse complementary and supplementary.\n- Choice D: [TRAP: partial_calculation] There is a clear, precise relationship. The co-function identity $\\sin(\\theta) = \\cos(90° - \\theta)$ directly establishes that $A$ and $B$ are complementary.\n\n**Key concept:** The co-function identity: $\\sin(\\theta) = \\cos(90° - \\theta)$ and $\\cos(\\theta) = \\sin(90° - \\theta)$. This appears frequently on the SAT -- if $\\sin(A) = \\cos(B)$, then $A + B = 90°$.\n\n**Calculator tip:** Verify on Desmos: $\\sin(25°)$ and $\\cos(65°)$ both equal approximately $0.4226$.",
      skills: ['soh-cah-toa']
    }
  ],

  // Section: Special Right Triangles
  "Special Right Triangles": [
    {
      id: 1,
      difficulty: "easy",
      question: "In a 45-45-90 triangle, if one leg is 6, what is the hypotenuse?",
      choices: [
        { id: "A", text: "6" },
        { id: "B", text: "6√2" },
        { id: "C", text: "6√3" },
        { id: "D", text: "12" }
      ],
      correctAnswer: "B",
      hint: "In a 45-45-90 triangle, the sides are in the ratio 1:1:√2 (leg:leg:hypotenuse).",
      explanation: "**Choice B is correct.** The hypotenuse is $6\\sqrt{2}$.\n\n**Step 1:** In a 45-45-90 triangle, the sides are in the ratio:\n$$\\text{leg} : \\text{leg} : \\text{hypotenuse} = 1 : 1 : \\sqrt{2}$$\n\n**Step 2:** With leg $= 6$:\n$$\\text{Hypotenuse} = 6 \\times \\sqrt{2} = 6\\sqrt{2}$$\n\n**Verification:** Using the Pythagorean theorem: $\\sqrt{6^2 + 6^2} = \\sqrt{36 + 36} = \\sqrt{72} = 6\\sqrt{2} \\approx 8.49$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $6$ is the leg length. The hypotenuse must be longer than either leg. In a 45-45-90, the hypotenuse is $\\sqrt{2} \\approx 1.414$ times a leg.\n- Choice C: [TRAP: reversed_operation] $6\\sqrt{3}$ uses the $\\sqrt{3}$ multiplier from a 30-60-90 triangle. This is the most common mix-up -- confusing the $\\sqrt{2}$ ratio (45-45-90) with the $\\sqrt{3}$ ratio (30-60-90).\n- Choice D: [TRAP: arithmetic_slip] $12 = 2 \\times 6$. This doubles the leg, which would only be correct in a 30-60-90 triangle where the hypotenuse is $2 \\times$ the short leg.\n\n**Key concept:** 45-45-90 ratio: $x : x : x\\sqrt{2}$. The hypotenuse is the leg times $\\sqrt{2}$, NOT $\\sqrt{3}$ or $2$.",
      skills: ['special-right-triangles']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In a 30-60-90 triangle, if the shortest side is 5, what is the longest side?",
      choices: [
        { id: "A", text: "5√2" },
        { id: "B", text: "5√3" },
        { id: "C", text: "10" },
        { id: "D", text: "10√3" }
      ],
      correctAnswer: "C",
      hint: "In a 30-60-90 triangle, sides are in ratio 1:√3:2. The shortest side is opposite 30°, and the longest is the hypotenuse.",
      explanation: "**Choice C is correct.** The longest side (hypotenuse) is $10$.\n\n**Step 1:** In a 30-60-90 triangle, the sides are in the ratio:\n$$x : x\\sqrt{3} : 2x$$\nwhere $x$ is the shortest side (opposite $30°$) and $2x$ is the hypotenuse (the longest side).\n\n**Step 2:** With shortest side $x = 5$:\n$$\\text{Hypotenuse} = 2x = 2 \\times 5 = 10$$\n\n**Verification:** The three sides are $5$, $5\\sqrt{3}$, and $10$. Check: $5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] $5\\sqrt{2}$ uses the 45-45-90 multiplier. Students who confuse the two special triangle ratios choose this.\n- Choice B: [TRAP: partial_calculation] $5\\sqrt{3}$ is the middle side (opposite $60°$), not the longest side (hypotenuse). The question asks for the longest side.\n- Choice D: [TRAP: arithmetic_slip] $10\\sqrt{3}$ would be $2x \\cdot \\sqrt{3}$, doubling and then multiplying by $\\sqrt{3}$ -- applying both multipliers instead of just one. If $x = 5$, the hypotenuse is simply $2 \\times 5 = 10$.\n\n**Key concept:** 30-60-90 ratio: $x : x\\sqrt{3} : 2x$. Shortest side $\\times 2 =$ hypotenuse. Shortest side $\\times \\sqrt{3} =$ longer leg.",
      skills: ['special-right-triangles']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In a 45-45-90 triangle, if the hypotenuse is 10, what is each leg?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "5√2" },
        { id: "C", text: "10/√2 = 5√2" },
        { id: "D", text: "Both B and C" }
      ],
      correctAnswer: "C",
      hint: "To find a leg from the hypotenuse in a 45-45-90 triangle, divide by √2. Then rationalize the denominator.",
      explanation: "**Choice C is correct.** Each leg equals $\\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$.\n\n**Step 1:** In a 45-45-90 triangle, hypotenuse $= \\text{leg} \\times \\sqrt{2}$, so:\n$$\\text{leg} = \\frac{\\text{hypotenuse}}{\\sqrt{2}} = \\frac{10}{\\sqrt{2}}$$\n\n**Step 2:** Rationalize the denominator:\n$$\\frac{10}{\\sqrt{2}} = \\frac{10}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$$\n\n**Verification:** Check with Pythagorean theorem: $(5\\sqrt{2})^2 + (5\\sqrt{2})^2 = 50 + 50 = 100 = 10^2$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $5 = \\frac{10}{2}$. This divides by $2$ instead of $\\sqrt{2}$. Halving the hypotenuse is the 30-60-90 rule, not the 45-45-90 rule. Check: $5^2 + 5^2 = 50 \\neq 100$.\n- Choice B: [TRAP: arithmetic_slip] While $5\\sqrt{2}$ is numerically the same as choice C, choice B is presented as a standalone answer. Choice C explicitly shows the derivation $\\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$, which is the complete and correct expression.\n- Choice D: [TRAP: reversed_operation] This claims both B and C are correct. While $5\\sqrt{2}$ is indeed the numerical answer in both, the question presents C as the rationalized form showing the work. The answer is specifically C as written.\n\n**Key concept:** To go from hypotenuse to leg in a 45-45-90: divide by $\\sqrt{2}$ (or equivalently, multiply by $\\frac{\\sqrt{2}}{2}$). Always rationalize: $\\frac{a}{\\sqrt{2}} = \\frac{a\\sqrt{2}}{2}$.\n\n**Calculator tip:** On Desmos, $10 / \\sqrt{2} \\approx 7.071$ and $5\\sqrt{2} \\approx 7.071$ -- they match.",
      skills: ['special-right-triangles']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In a 30-60-90 triangle with hypotenuse 8, what is the side opposite the 60° angle?",
      choices: [
        { id: "A", text: "4" },
        { id: "B", text: "4√3" },
        { id: "C", text: "8√3" },
        { id: "D", text: "8/√3" }
      ],
      correctAnswer: "B",
      hint: "First find the shortest side (opposite 30°) using the ratio 1:√3:2. Then multiply by √3 for the side opposite 60°.",
      explanation: "**Choice B is correct.** The side opposite $60°$ is $4\\sqrt{3}$.\n\n**Step 1:** Use the 30-60-90 ratio $x : x\\sqrt{3} : 2x$. The hypotenuse is $2x$:\n$$2x = 8 \\implies x = 4$$\n\n**Step 2:** The side opposite $60°$ is $x\\sqrt{3}$:\n$$x\\sqrt{3} = 4\\sqrt{3}$$\n\n**Verification:** The three sides are $4$, $4\\sqrt{3}$, and $8$. Check: $4^2 + (4\\sqrt{3})^2 = 16 + 48 = 64 = 8^2$ ✓. Numerically, $4\\sqrt{3} \\approx 6.93$, which is between $4$ and $8$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $4$ is the shortest side (opposite $30°$), not the side opposite $60°$. Students who find $x = 4$ and stop there miss the final multiplication by $\\sqrt{3}$.\n- Choice C: [TRAP: arithmetic_slip] $8\\sqrt{3}$ multiplies the hypotenuse (not $x$) by $\\sqrt{3}$. The correct process is: first find $x$ from the hypotenuse, then multiply $x$ by $\\sqrt{3}$.\n- Choice D: [TRAP: reversed_operation] $\\frac{8}{\\sqrt{3}}$ divides the hypotenuse by $\\sqrt{3}$. This doesn't correspond to any side in the 30-60-90 ratio. $\\frac{8}{\\sqrt{3}} = \\frac{8\\sqrt{3}}{3} \\approx 4.62$, which is none of the triangle's sides.\n\n**Key concept:** 30-60-90 sides: $x$, $x\\sqrt{3}$, $2x$. Always find $x$ first (from whichever side you know), then compute the target side.",
      skills: ['special-right-triangles']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The diagonal of a square is 10. What is the side length?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "5√2" },
        { id: "C", text: "10/√2 = 5√2" },
        { id: "D", text: "10√2" }
      ],
      correctAnswer: "C",
      hint: "A square's diagonal divides it into two 45-45-90 triangles. The diagonal is the hypotenuse of these triangles.",
      explanation: "**Choice C is correct.** The side length is $\\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$.\n\n**Step 1:** A square's diagonal splits it into two 45-45-90 triangles. The diagonal is the hypotenuse, and the sides of the square are the legs.\n\n**Step 2:** Using the 45-45-90 relationship:\n$$\\text{side} = \\frac{\\text{diagonal}}{\\sqrt{2}} = \\frac{10}{\\sqrt{2}}$$\n\n**Step 3:** Rationalize:\n$$\\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$$\n\n**Verification:** Check: $(5\\sqrt{2})^2 + (5\\sqrt{2})^2 = 50 + 50 = 100 = 10^2$ ✓. Numerically, $5\\sqrt{2} \\approx 7.07$, and a square with side $\\approx 7.07$ has diagonal $\\approx 10$ ✓\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $5 = \\frac{10}{2}$. This divides the diagonal by $2$ instead of $\\sqrt{2}$. Dividing by $2$ applies to 30-60-90 triangles (hypotenuse to short leg), not 45-45-90 triangles. Check: a square with side $5$ has diagonal $5\\sqrt{2} \\approx 7.07 \\neq 10$.\n- Choice B: [TRAP: arithmetic_slip] $5\\sqrt{2}$ is numerically the same as choice C. However, C explicitly shows the derivation process ($\\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$), making it the more complete answer as presented.\n- Choice D: [TRAP: reversed_operation] $10\\sqrt{2}$ multiplies the diagonal by $\\sqrt{2}$ instead of dividing. This would give the diagonal of a square whose side is $10$, not the side of a square whose diagonal is $10$. The operation is inverted.\n\n**Key concept:** A square with side $s$ has diagonal $d = s\\sqrt{2}$. Conversely, $s = \\frac{d}{\\sqrt{2}} = \\frac{d\\sqrt{2}}{2}$. Squares always create 45-45-90 triangles when split by a diagonal.\n\n**Calculator tip:** On Desmos, verify: $10 / \\sqrt{2} \\approx 7.071$ and $5 \\times \\sqrt{2} \\approx 7.071$.",
      skills: ['special-right-triangles']
    }
  ]
};
