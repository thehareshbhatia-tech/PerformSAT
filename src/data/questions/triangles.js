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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~5s):** The interior angles of any triangle always sum to $180^\\circ$. That is choice B.\n\n**The Full Solution:**\nStep 1: The Triangle Angle Sum Theorem says that for any triangle with angles $A$, $B$, and $C$, $A + B + C = 180^\\circ$.\nStep 2: This holds for every triangle — acute, right, obtuse, equilateral, isosceles, or scalene. Tearing off the three corners and lining them up always forms a straight line, $180^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($90^\\circ$): the measure of a single right angle, not the sum of all three.\n* Choice C ($270^\\circ$): comes from adding $90^\\circ$ to $180^\\circ$ or confusing this with a reflex sum.\n* Choice D ($360^\\circ$): the interior-angle sum of a quadrilateral (or the exterior-angle sum of any convex polygon), not a triangle.\n\n**Test Day Takeaway:** A triangle's interior angles always total $180^\\circ$ — a quadrilateral totals $360^\\circ$. Keep those two numbers straight.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** All three sides are different ($3$, $4$, $5$), so the triangle is scalene — choice C.\n\n**The Full Solution:**\nStep 1: Classify by sides. Equilateral means all three equal; isosceles means exactly two equal; scalene means no two equal.\nStep 2: Compare: $3 \\neq 4$, $4 \\neq 5$, $3 \\neq 5$. No two sides match, so the triangle is scalene.\n\n**Why the wrong answers are tempting:**\n* Choice A (Equilateral): requires all three sides equal, like $5$-$5$-$5$. Here they are all different.\n* Choice B (Isosceles): requires two equal sides. None of these match.\n* Choice D (Cannot determine): three side lengths fully determine the side classification — no ambiguity. (As a bonus, $3^2 + 4^2 = 5^2$, so this is also a right triangle, but the question asks about sides.)\n\n**Test Day Takeaway:** Classify by sides first by counting how many lengths are equal: three equal $\\Rightarrow$ equilateral, two equal $\\Rightarrow$ isosceles, none equal $\\Rightarrow$ scalene.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** In an isosceles triangle the two equal angles match, so both base angles are $70^\\circ$. The third is $180^\\circ - 70^\\circ - 70^\\circ = 40^\\circ$ — choice A.\n\n**The Full Solution:**\nStep 1: The triangle has two equal angles. One is $70^\\circ$, so the other equal angle is also $70^\\circ$.\nStep 2: Apply the angle sum: $70^\\circ + 70^\\circ + x = 180^\\circ$, so $140^\\circ + x = 180^\\circ$.\nStep 3: Solve: $x = 40^\\circ$. Check: $70^\\circ + 70^\\circ + 40^\\circ = 180^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($55^\\circ$): splits the leftover $110^\\circ$ into two equal parts, wrongly treating the unknown pair as the equal angles.\n* Choice C ($70^\\circ$): three $70^\\circ$ angles sum to $210^\\circ$, which is impossible.\n* Choice D ($110^\\circ$): subtracts only one $70^\\circ$ from $180^\\circ$, forgetting the second equal angle.\n\n**Test Day Takeaway:** In an isosceles triangle, both base angles are equal, so the third angle is $180^\\circ - 2 \\times (\\text{base angle})$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Add the two shortest sides: $2 + 3 = 5$, which is less than $7$. They can't reach to close the triangle, so no — choice B.\n\n**The Full Solution:**\nStep 1: The Triangle Inequality says the sum of any two sides must be strictly greater than the third: $a + b > c$.\nStep 2: Test the binding case, the two smallest against the largest: $2 + 3 = 5$, and $5 < 7$.\nStep 3: Since the inequality fails, no such triangle exists.\n\n**Why the wrong answers are tempting:**\n* Choice A (Yes): skips the inequality check and assumes any three positive numbers work.\n* Choice C (No, because $7$ is too large): right conclusion but vague reason — the precise failure is $2 + 3 < 7$.\n* Choice D (Only if it's a right triangle): triangle type is irrelevant; once the inequality fails, no triangle of any type can form.\n\n**Test Day Takeaway:** A set of lengths forms a triangle only if the two shortest sides sum to more than the longest. Check that one inequality first.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~5s):** An equilateral triangle has three equal sides, so $P = 3 \\times 6 = 18$ — choice B.\n\n**The Full Solution:**\nStep 1: Equilateral means all three sides equal the given length $s = 6$.\nStep 2: Perimeter is the sum of the sides: $P = 6 + 6 + 6 = 3 \\times 6 = 18$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): $2 \\times 6$ — counts only two sides.\n* Choice C ($24$): $4 \\times 6$ — treats the shape as a square with four sides.\n* Choice D ($36$): $6 \\times 6$ — squares the side, computing something area-like instead of a perimeter.\n\n**Test Day Takeaway:** The perimeter of an equilateral triangle is $P = 3s$ — multiply one side by $3$, never square it.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Subtract the two known angles from $180^\\circ$: $180^\\circ - 45^\\circ - 75^\\circ = 60^\\circ$ — choice B.\n\n**The Full Solution:**\nStep 1: The three interior angles sum to $180^\\circ$: $45^\\circ + 75^\\circ + x = 180^\\circ$.\nStep 2: Combine and solve: $120^\\circ + x = 180^\\circ$, so $x = 60^\\circ$. Check: $45^\\circ + 75^\\circ + 60^\\circ = 180^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($30^\\circ$): comes from subtracting the two given angles ($75^\\circ - 45^\\circ$) instead of subtracting their sum from $180^\\circ$.\n* Choice C ($90^\\circ$): a reflex guess toward a right angle; $45^\\circ + 75^\\circ + 90^\\circ = 210^\\circ$, too large.\n* Choice D ($120^\\circ$): the sum of the two known angles, reported instead of the missing one.\n\n**Test Day Takeaway:** The missing angle is $180^\\circ$ minus the sum of the two known angles — add first, then subtract from $180^\\circ$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~5s):** The Exterior Angle Theorem says an exterior angle equals the sum of the two remote interior angles, so the sum is $110^\\circ$ — choice C.\n\n**The Full Solution:**\nStep 1: The exterior angle equals the sum of the two non-adjacent (remote) interior angles. That sum is therefore $110^\\circ$.\nStep 2: Confirm the long way: the adjacent interior angle is $180^\\circ - 110^\\circ = 70^\\circ$, so the remaining two interior angles sum to $180^\\circ - 70^\\circ = 110^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($70^\\circ$): $180^\\circ - 110^\\circ$ — this is the adjacent interior angle (the supplement), not the remote pair.\n* Choice B ($90^\\circ$): a default guess with no basis here.\n* Choice D ($180^\\circ$): the sum of all three interior angles, not just the two remote ones.\n\n**Test Day Takeaway:** An exterior angle of a triangle equals the sum of the two remote interior angles — no need to find the angles individually.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~5s):** The two acute angles of a right triangle add to $90^\\circ$, so the other is $90^\\circ - 35^\\circ = 55^\\circ$ — choice C.\n\n**The Full Solution:**\nStep 1: A right triangle has a $90^\\circ$ angle. The angle sum gives $90^\\circ + 35^\\circ + x = 180^\\circ$.\nStep 2: Solve: $125^\\circ + x = 180^\\circ$, so $x = 55^\\circ$. Check the shortcut: $35^\\circ + 55^\\circ = 90^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($35^\\circ$): assumes the two acute angles are equal, which only holds for a $45$-$45$-$90$ triangle.\n* Choice B ($45^\\circ$): the acute angle of a $45$-$45$-$90$ triangle — a familiar value grabbed without calculating.\n* Choice D ($145^\\circ$): $180^\\circ - 35^\\circ$, forgetting the $90^\\circ$ angle; an angle that large can't share a triangle with a right angle.\n\n**Test Day Takeaway:** In a right triangle the two acute angles are complementary — they sum to $90^\\circ$, so subtract the known one from $90^\\circ$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~5s):** All three angles below $90^\\circ$ is the definition of an acute triangle — choice A.\n\n**The Full Solution:**\nStep 1: Classify by angles: acute means all three angles $< 90^\\circ$; right means exactly one $= 90^\\circ$; obtuse means exactly one $> 90^\\circ$.\nStep 2: Every angle here is less than $90^\\circ$, matching the acute definition exactly. Example: $50^\\circ$, $60^\\circ$, $70^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice B (Right): needs exactly one $90^\\circ$ angle, but all angles are below $90^\\circ$.\n* Choice C (Obtuse): needs one angle above $90^\\circ$, which is ruled out here.\n* Choice D (Equilateral): an equilateral triangle is acute, but \"equilateral\" classifies by sides, and not every acute triangle is equilateral.\n\n**Test Day Takeaway:** Angle classification depends on the largest angle: all under $90^\\circ \\Rightarrow$ acute, one equal to $90^\\circ \\Rightarrow$ right, one over $90^\\circ \\Rightarrow$ obtuse.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Sum the angles: $2x + 3x + 4x = 9x = 180^\\circ$, so $x = 20^\\circ$. Then angle $B = 3x = 60^\\circ$ — choice C.\n\n**The Full Solution:**\nStep 1: The angles sum to $180^\\circ$: $2x + 3x + 4x = 180^\\circ$, so $9x = 180^\\circ$.\nStep 2: Solve: $x = \\frac{180^\\circ}{9} = 20^\\circ$.\nStep 3: Angle $B = 3x = 3 \\times 20^\\circ = 60^\\circ$. Check: $40^\\circ + 60^\\circ + 80^\\circ = 180^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($20^\\circ$): the value of $x$, not angle $B$ — forgot to multiply by the coefficient $3$.\n* Choice B ($40^\\circ$): $2x$, which is angle $A$, not $B$.\n* Choice D ($80^\\circ$): $4x$, which is angle $C$, not $B$.\n\n**Test Day Takeaway:** When angles are multiples of a variable, sum the coefficients, set equal to $180^\\circ$, solve for the variable, then substitute back into the exact angle requested.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~5s):** $A = \\frac{1}{2}bh = \\frac{1}{2}(10)(6) = 30$ — choice B.\n\n**The Full Solution:**\nStep 1: The triangle area formula is $A = \\frac{1}{2} \\times b \\times h$.\nStep 2: Substitute: $A = \\frac{1}{2} \\times 10 \\times 6 = \\frac{60}{2} = 30$. A triangle is exactly half the bounding rectangle ($10 \\times 6 = 60$, then halve).\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): $10 + 6$ — adds base and height instead of multiplying.\n* Choice C ($60$): $10 \\times 6$ — the rectangle's area, forgetting the $\\frac{1}{2}$.\n* Choice D ($120$): $2 \\times 10 \\times 6$ — doubles instead of halving the product.\n\n**Test Day Takeaway:** Triangle area is $A = \\frac{1}{2}bh$ — half of base times height, not the full product.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Use $h = \\frac{2A}{b} = \\frac{2(24)}{8} = \\frac{48}{8} = 6$ — choice B.\n\n**The Full Solution:**\nStep 1: Start from $A = \\frac{1}{2}bh$ and plug in: $24 = \\frac{1}{2} \\times 8 \\times h$.\nStep 2: Simplify the right side: $24 = 4h$.\nStep 3: Solve: $h = \\frac{24}{4} = 6$. Check: $\\frac{1}{2} \\times 8 \\times 6 = 24$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): $\\frac{24}{8}$ — divides area by base but drops the factor of $2$ from rearranging $A = \\frac{1}{2}bh$.\n* Choice C ($12$): an algebra slip, such as doubling $24$ then dividing by $4$ instead of $8$.\n* Choice D ($16$): $2 \\times 8$, unrelated to the given area.\n\n**Test Day Takeaway:** To get height from area, use $h = \\frac{2A}{b}$ — double the area before dividing by the base.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Area depends on the product of base and height, so doubling both multiplies the area by $2 \\times 2 = 4$.\n\n**The Full Solution:**\nStep 1: Original area is $A = \\frac{1}{2}bh$.\nStep 2: Double both dimensions: $A_{\\text{new}} = \\frac{1}{2}(2b)(2h) = \\frac{1}{2}(4bh) = 4 \\cdot \\frac{1}{2}bh = 4A$.\nStep 3: Quick check with $b=3$, $h=4$: original $= \\frac{1}{2}(3)(4) = 6$, new $= \\frac{1}{2}(6)(8) = 24$, and $\\frac{24}{6} = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): scaled only one dimension, not both — each factor of $2$ multiplies the area, so two of them compound.\n* Choice C ($8$): used $2^3$, the volume scale factor, not the area scale factor.\n* Choice D ($16$): used $2^4$, squaring the scale factor an extra time.\n\n**Test Day Takeaway:** When every linear dimension scales by $k$, area scales by $k^2$ and volume by $k^3$. Here $k=2$, so area scales by $2^2 = 4$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** In a right triangle the two legs are perpendicular, so they are the base and height directly: $A = \\frac{1}{2}(5)(12) = 30$.\n\n**The Full Solution:**\nStep 1: The legs meet at the right angle, so one leg is the base and the other is the height — no extra height calculation needed.\nStep 2: $A = \\frac{1}{2} \\cdot 5 \\cdot 12 = \\frac{60}{2} = 30$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): computed $5 \\times 12$ but forgot the $\\frac{1}{2}$ — the single most common area slip.\n* Choice C ($65$): tried to involve the hypotenuse $13$; the legs, not the hypotenuse, are the base and height.\n* Choice D ($85$): combined the numbers with no valid area formula.\n\n**Test Day Takeaway:** For a right triangle, $A = \\frac{1}{2}(\\text{leg}_1)(\\text{leg}_2)$. The legs are already perpendicular, so use them and never drop the $\\frac{1}{2}$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The altitude of an equilateral triangle is $h = \\frac{s\\sqrt{3}}{2} = \\frac{4\\sqrt{3}}{2} = 2\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Drop an altitude to the base. It bisects the base, creating a $30$-$60$-$90$ right triangle with hypotenuse $4$ (the side) and short leg $2$ (half the base).\nStep 2: Apply the Pythagorean theorem: $h^2 + 2^2 = 4^2 \\Rightarrow h^2 + 4 = 16 \\Rightarrow h^2 = 12 \\Rightarrow h = \\sqrt{12} = 2\\sqrt{3}$.\nStep 3: This matches the $30$-$60$-$90$ ratio $1 : \\sqrt{3} : 2$, where the height (long leg) is $2\\sqrt{3} \\approx 3.46$ — sensibly less than the side of $4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): stopped at half the base, which is the short leg, not the height.\n* Choice C ($4$): reported the side length; the height is always shorter than the side.\n* Choice D ($4\\sqrt{3}$): used the full side $4$ instead of half the base in the ratio — that is the height for a side of $8$.\n\n**Test Day Takeaway:** An equilateral triangle's height is $h = \\frac{s\\sqrt{3}}{2}$, which comes straight from the $30$-$60$-$90$ triangle the altitude creates.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The scale factor is $\\frac{DE}{AB} = \\frac{9}{6} = \\frac{3}{2}$, so $EF = 8 \\cdot \\frac{3}{2} = 12$.\n\n**The Full Solution:**\nStep 1: Corresponding sides of similar triangles are proportional. $AB$ matches $DE$, and $BC$ matches $EF$.\nStep 2: Set up the proportion $\\frac{DE}{AB} = \\frac{EF}{BC} \\Rightarrow \\frac{9}{6} = \\frac{EF}{8}$.\nStep 3: Solve: $EF = 8 \\cdot \\frac{9}{6} = 8 \\cdot \\frac{3}{2} = 12$. Check the ratios: $\\frac{9}{6} = 1.5$ and $\\frac{12}{8} = 1.5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): a rough estimate that does not satisfy $\\frac{9}{6} = \\frac{EF}{8}$.\n* Choice C ($14$): added the side difference $9 - 6 = 3$ to a wrong base; similarity scales by multiplication, not addition.\n* Choice D ($16$): used a scale factor of $2$ instead of $\\frac{3}{2}$.\n\n**Test Day Takeaway:** Similar triangles scale by a multiplicative factor: find $k$ from a known pair of corresponding sides, then multiply.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Perimeter scales by the side ratio, so the larger perimeter is $24 \\cdot \\frac{5}{2} = 60$.\n\n**The Full Solution:**\nStep 1: Perimeter is a sum of lengths, so it scales linearly with the side ratio $\\frac{5}{2}$.\nStep 2: $P_{\\text{larger}} = 24 \\cdot \\frac{5}{2} = \\frac{120}{2} = 60$. Check: $\\frac{60}{24} = \\frac{5}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($48$): multiplied by $2$ instead of $\\frac{5}{2}$, using only part of the ratio.\n* Choice C ($96$): multiplied by $4$, treating the ratio like an area-style factor.\n* Choice D ($150$): applied the area ratio $\\frac{25}{4}$ to the perimeter; perimeter scales by $k$, area by $k^2$.\n\n**Test Day Takeaway:** Perimeters of similar figures scale by the side ratio $k$; only area scales by $k^2$. Don't square the ratio for a length.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** The side ratio is the square root of the area ratio: $\\sqrt{\\frac{4}{9}} = \\frac{2}{3}$, so $2:3$.\n\n**The Full Solution:**\nStep 1: For similar figures, $\\frac{A_1}{A_2} = \\left(\\frac{s_1}{s_2}\\right)^2$.\nStep 2: Take the square root: $\\frac{s_1}{s_2} = \\sqrt{\\frac{4}{9}} = \\frac{2}{3}$. Check: $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4:9$): reported the area ratio unchanged — forgot to take the square root.\n* Choice C ($16:81$): squared the area ratio, going the wrong direction.\n* Choice D ($8:27$): cubed the side numbers, which gives the volume ratio.\n\n**Test Day Takeaway:** Side ratio $= k$, area ratio $= k^2$, volume ratio $= k^3$. To recover the side ratio from areas, take the square root.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The area ratio is the side ratio squared: $\\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$, so $A = 18 \\cdot \\frac{25}{9} = 50$.\n\n**The Full Solution:**\nStep 1: The side ratio is $k = \\frac{5}{3}$.\nStep 2: Areas scale by $k^2$: $k^2 = \\frac{25}{9}$.\nStep 3: $A_{\\text{larger}} = 18 \\cdot \\frac{25}{9} = \\frac{450}{9} = 50$. Check: $\\frac{50}{18} = \\frac{25}{9}$ and $\\sqrt{\\frac{25}{9}} = \\frac{5}{3}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): multiplied by the side ratio $\\frac{5}{3}$ instead of the area ratio $\\frac{25}{9}$.\n* Choice C ($54$): multiplied by $3$, using the wrong factor.\n* Choice D ($90$): multiplied by $5$, ignoring both the squaring and the denominator.\n\n**Test Day Takeaway:** Area of a similar figure $= A_{\\text{small}} \\cdot k^2$, where $k$ is the ratio of corresponding sides. Square the ratio before scaling area.",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** SSA is the ambiguous case — two sides and a non-included angle can produce two different triangles, so it cannot fix a shape and is not a valid similarity criterion.\n\n**The Full Solution:**\nStep 1: The valid similarity criteria each lock the shape. AA: two equal angles force the third (angles sum to $180^\\circ$). SSS: all three side pairs proportional forces the shape. SAS: two proportional sides with the included angle equal fixes the shape.\nStep 2: SSA does not. With two sides and a non-included angle fixed, the angle opposite the second side can be acute or obtuse, yielding two distinct triangles (or zero or one). Since the shape isn't uniquely determined, SSA proves nothing about similarity.\n\n**Why the wrong answers are tempting:**\n* Choice A (AA): valid and the most-used criterion — two equal angles guarantee the third.\n* Choice B (SSS): valid — all three sides proportional forces the same shape.\n* Choice C (SAS): valid — the included angle between two proportional sides locks the shape.\n\n**Test Day Takeaway:** The valid similarity criteria are AA, SSS, and SAS. SSA is the ambiguous case and proves neither similarity nor congruence.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $6$-$8$-$10$ is the $3$-$4$-$5$ triple doubled, so the hypotenuse is $10$.\n\n```seva-figure\n{\"type\":\"rightTriangle\",\"params\":{\"vertices\":[[0,0],[6,0],[6,8]],\"sideLabels\":[\"6\",\"8\",\"10\"],\"rightAngleVertex\":1},\"caption\":\"Legs 6 and 8 — hypotenuse 10.\"}\n```\n\n**The Full Solution:**\nStep 1: Apply the Pythagorean theorem: $c^2 = 6^2 + 8^2 = 36 + 64 = 100$.\nStep 2: Take the square root: $c = \\sqrt{100} = 10$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): averaged the legs, $\\frac{6+8}{2}$; the hypotenuse is not the average.\n* Choice C ($14$): added the legs, $6+8$; the hypotenuse is shorter than the legs' sum.\n* Choice D ($100$): stopped at $c^2$ and forgot to take the square root.\n\n**Test Day Takeaway:** Use $a^2 + b^2 = c^2$, then take the square root for $c$ — don't report $c^2$. Spotting $3$-$4$-$5$ multiples saves the arithmetic.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The ladder, base, and wall form a $5$-$12$-$13$ right triangle, so the wall height is $12$ feet.\n\n```seva-figure\n{\"type\":\"rightTriangle\",\"params\":{\"vertices\":[[0,0],[5,0],[5,12]],\"sideLabels\":[\"5\",\"12\",\"13\"],\"rightAngleVertex\":1},\"caption\":\"The ladder is the hypotenuse (13); base 5, wall height 12.\"}\n```\n\n**The Full Solution:**\nStep 1: The ladder is the hypotenuse $c = 13$, the ground distance is one leg $a = 5$, and the wall height $h$ is the other leg.\nStep 2: $13^2 = 5^2 + h^2 \\Rightarrow 169 = 25 + h^2 \\Rightarrow h^2 = 144 \\Rightarrow h = \\sqrt{144} = 12$. Check: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): computed $13 - 5$; the sides relate quadratically, not by subtraction.\n* Choice C ($18$): added $13 + 5$, which has no meaning here.\n* Choice D ($144$): stopped at $h^2$ and forgot the square root.\n\n**Test Day Takeaway:** In word problems, the longest side (here the ladder) is the hypotenuse. Set it as $c$, solve for the leg, and take the square root.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** Test the longest side as the hypotenuse: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$, so the triangle is right.\n\n```seva-figure\n{\"type\":\"rightTriangle\",\"params\":{\"vertices\":[[0,0],[7,0],[7,24]],\"sideLabels\":[\"7\",\"24\",\"25\"],\"rightAngleVertex\":1},\"caption\":\"Test the triple: does 7² + 24² equal 25²?\"}\n```\n\n**The Full Solution:**\nStep 1: By the converse of the Pythagorean theorem, a triangle is right exactly when $a^2 + b^2 = c^2$ for the longest side $c$.\nStep 2: $7^2 + 24^2 = 49 + 576 = 625$ and $25^2 = 625$, so $625 = 625$. The equation holds, so it is a right triangle. $7$-$24$-$25$ is a known triple.\n\n**Why the wrong answers are tempting:**\n* Choice B: claims $7^2 + 24^2 \\neq 25^2$, but the arithmetic gives $625 = 625$ — likely a miscomputation of $24^2$.\n* Choice C: $7 + 24 > 25$ only confirms the triangle inequality (a valid triangle exists), not that it is right.\n* Choice D: three side lengths are enough to apply the converse, so the answer is fully determinable.\n\n**Test Day Takeaway:** Converse of the Pythagorean theorem: if $a^2 + b^2 = c^2$ with $c$ the longest side, the triangle is right. Memorize $3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $(9, 12, 15)$ is the $3$-$4$-$5$ triple tripled, so the missing leg is $12$.\n\n```seva-figure\n{\"type\":\"rightTriangle\",\"params\":{\"vertices\":[[0,0],[12,0],[12,9]],\"sideLabels\":[\"12\",\"9\",\"15\"],\"rightAngleVertex\":1},\"caption\":\"Legs 9 and 12 — hypotenuse 15, the 3-4-5 triple scaled by 3.\"}\n```\n\n**The Full Solution:**\nStep 1: To find a leg, rearrange the Pythagorean theorem: $b^2 = c^2 - a^2 = 15^2 - 9^2$.\nStep 2: $b^2 = 225 - 81 = 144 \\Rightarrow b = \\sqrt{144} = 12$. Check: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): computed $15 - 9$, using subtraction instead of the quadratic relationship.\n* Choice C ($18$): added the squares ($\\sqrt{225 + 81}$) instead of subtracting; a leg requires subtraction.\n* Choice D ($24$): added hypotenuse and leg, $15 + 9$, which has no Pythagorean meaning.\n\n**Test Day Takeaway:** To find a missing leg, $b = \\sqrt{c^2 - a^2}$ — subtract the known leg squared from the hypotenuse squared. Only add squares when solving for the hypotenuse.",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** The diagonal is the hypotenuse: $s=\\sqrt{10^2-6^2}=\\sqrt{64}=8$. Choice B writes it as $8$ and choice C writes it as $\\sqrt{64}$ — the same number — so \"Both B and C\" is the answer.\n\n```seva-figure\n{\"type\":\"rightTriangle\",\"params\":{\"vertices\":[[0,0],[6,0],[6,8.0]],\"sideLabels\":[\"6\",\"8\",\"10\"],\"rightAngleVertex\":1},\"caption\":\"Legs 6 and 8 — hypotenuse 10.\"}\n```\n\n**The Full Solution:**\nStep 1: A rectangle's diagonal splits it into two right triangles, so $d^2=l^2+w^2$, giving $10^2=6^2+s^2$.\nStep 2: $100=36+s^2 \\Rightarrow s^2=64 \\Rightarrow s=8$.\nStep 3: $\\sqrt{64}=8$, so choices B ($8$) and C ($\\sqrt{64}$) are identical values. Both are correct, so the answer is D. Check: $6^2+8^2=36+64=100=10^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): subtracts the sides linearly ($10-6$) instead of using the Pythagorean theorem. Test: $6^2+4^2=52\\neq100$.\n* Choice B ($8$) alone: numerically right, but ignores that C names the same value, so it's incomplete.\n* Choice C ($\\sqrt{64}$) alone: also right, but ignores that B is the same number simplified.\n\n**Test Day Takeaway:** When two answer choices are equivalent expressions (like $8$ and $\\sqrt{64}$), a \"Both\" option is usually the intended answer — always simplify before you choose.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~5s):** SOH: $\\sin(\\theta)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}$, which is choice B.\n\n**The Full Solution:**\nStep 1: The mnemonic SOH-CAH-TOA gives the three ratios: $\\sin=\\frac{O}{H}$, $\\cos=\\frac{A}{H}$, $\\tan=\\frac{O}{A}$.\nStep 2: The first block, SOH, reads $\\sin(\\theta)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}$. Check with a $3$-$4$-$5$ triangle: with $\\theta$ opposite the side of length $3$, $\\sin(\\theta)=\\frac{3}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$): that's $\\cos(\\theta)$, the most common sine/cosine swap.\n* Choice C ($\\frac{\\text{Opposite}}{\\text{Adjacent}}$): that's $\\tan(\\theta)$.\n* Choice D ($\\frac{\\text{Hypotenuse}}{\\text{Opposite}}$): that's $\\csc(\\theta)$, the reciprocal of sine — the fraction is flipped.\n\n**Test Day Takeaway:** Lock in SOH-CAH-TOA. Sine pairs Opposite over Hypotenuse; the hypotenuse sits in the denominator for both sine and cosine.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The side opposite $30^\\circ$ is half the hypotenuse, so the hypotenuse is $2\\times5=10$, which is choice B.\n\n**The Full Solution:**\nStep 1: Use sine with the known angle and its opposite side: $\\sin(30^\\circ)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}=\\frac{5}{h}$.\nStep 2: Since $\\sin(30^\\circ)=\\frac{1}{2}$, $\\frac{1}{2}=\\frac{5}{h} \\Rightarrow h=10$.\nStep 3: Check the $30$-$60$-$90$ ratio $1:\\sqrt{3}:2$: short leg $\\frac{10}{2}=5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): repeats the opposite side; the hypotenuse must be the longest side, so it can't equal a leg.\n* Choice C ($5\\sqrt{3}$): that's the longer leg, opposite the $60^\\circ$ angle — wrong side.\n* Choice D ($10\\sqrt{3}$): multiplies the hypotenuse by an extra $\\sqrt{3}$ that doesn't belong.\n\n**Test Day Takeaway:** In a $30$-$60$-$90$ triangle the side opposite $30^\\circ$ is half the hypotenuse, so hypotenuse $=2\\times$ short leg.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Cosine puts the adjacent side over the hypotenuse, so $h=\\frac{\\text{Adjacent}}{\\cos\\theta}=\\frac{12}{0.8}=15$, which is choice B.\n\n**The Full Solution:**\nStep 1: $\\cos(\\theta)=\\frac{\\text{Adjacent}}{\\text{Hypotenuse}}=\\frac{12}{h}$.\nStep 2: Substitute $\\cos(\\theta)=0.8$: $0.8=\\frac{12}{h} \\Rightarrow h=\\frac{12}{0.8}=15$.\nStep 3: Check: $\\frac{12}{15}=0.8$, and the opposite side is $\\sqrt{15^2-12^2}=\\sqrt{81}=9$, a $9$-$12$-$15$ triangle ($3\\times$ a $3$-$4$-$5$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9.6$): computes $12\\times0.8$ — multiplies by cosine instead of dividing.\n* Choice C ($16$): an arithmetic slip; $\\frac{12}{0.8}$ is $15$, not $16$.\n* Choice D ($20$): uses $\\frac{12}{0.6}$, swapping in $\\sin\\theta=0.6$ for $\\cos\\theta=0.8$.\n\n**Test Day Takeaway:** To find the hypotenuse from an adjacent side, divide by cosine: $\\text{Hyp}=\\frac{\\text{Adj}}{\\cos\\theta}$. Division, not multiplication.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** TOA: tangent is the opposite leg over the adjacent leg. Opposite $\\theta$ is $3$, adjacent is $4$, so $\\tan(\\theta)=\\frac{3}{4}$, which is choice A.\n\n**The Full Solution:**\nStep 1: Identify the sides relative to $\\theta$: opposite $=3$, adjacent $=4$. The hypotenuse ($5$) isn't needed for tangent.\nStep 2: Apply TOA: $\\tan(\\theta)=\\frac{\\text{Opposite}}{\\text{Adjacent}}=\\frac{3}{4}$.\nStep 3: Check: $\\arctan\\left(\\frac{3}{4}\\right)\\approx36.87^\\circ$, a valid acute angle. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{4}{3}$): tangent of the other acute angle, or $\\cot(\\theta)$ — the ratio is flipped.\n* Choice C ($\\frac{3}{5}$): that's $\\frac{\\text{Opposite}}{\\text{Hypotenuse}}=\\sin(\\theta)$, not tangent.\n* Choice D ($\\frac{4}{5}$): that's $\\frac{\\text{Adjacent}}{\\text{Hypotenuse}}=\\cos(\\theta)$, not tangent.\n\n**Test Day Takeaway:** Tangent uses only the two legs: $\\tan(\\theta)=\\frac{\\text{Opposite}}{\\text{Adjacent}}$. The hypotenuse never appears.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The co-function identity says $\\sin(A)=\\cos(90^\\circ-A)$. If $\\sin(A)=\\cos(B)$, then $B=90^\\circ-A$, so $A+B=90^\\circ$ — complementary, choice B.\n\n**The Full Solution:**\nStep 1: Apply the co-function identity: $\\sin(A)=\\cos(90^\\circ-A)$.\nStep 2: Set equal to the given $\\cos(B)$: $\\cos(90^\\circ-A)=\\cos(B) \\Rightarrow 90^\\circ-A=B$.\nStep 3: Rearrange: $A+B=90^\\circ$, the definition of complementary angles. Check with $A=30^\\circ$, $B=60^\\circ$: $\\sin(30^\\circ)=0.5=\\cos(60^\\circ)$ and $30^\\circ+60^\\circ=90^\\circ$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Equal): $\\sin(A)=\\cos(A)$ only at $A=45^\\circ$ — a single special case, not the general rule.\n* Choice C (Supplementary): supplementary means $180^\\circ$; here the sum is $90^\\circ$.\n* Choice D (No relationship): the co-function identity gives a precise relationship.\n\n**Test Day Takeaway:** $\\sin(\\theta)=\\cos(90^\\circ-\\theta)$. Whenever $\\sin(A)=\\cos(B)$ in these problems, the angles are complementary: $A+B=90^\\circ$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~5s):** In a $45$-$45$-$90$ triangle the hypotenuse is a leg times $\\sqrt{2}$, so $6\\sqrt{2}$, which is choice B.\n\n```seva-figure\n{\"type\":\"rightTriangle\",\"params\":{\"vertices\":[[0,0],[6,0],[6,6]],\"sideLabels\":[\"6\",\"6\",\"6√2\"],\"rightAngleVertex\":1},\"caption\":\"Isosceles right triangle — legs 6 and 6, hypotenuse 6√2.\"}\n```\n\n**The Full Solution:**\nStep 1: The side ratio is $\\text{leg}:\\text{leg}:\\text{hypotenuse}=1:1:\\sqrt{2}$.\nStep 2: With leg $=6$, hypotenuse $=6\\sqrt{2}$.\nStep 3: Check with the Pythagorean theorem: $\\sqrt{6^2+6^2}=\\sqrt{72}=6\\sqrt{2}\\approx8.49$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): repeats the leg; the hypotenuse must be longer than either leg.\n* Choice C ($6\\sqrt{3}$): borrows the $\\sqrt{3}$ multiplier from a $30$-$60$-$90$ triangle.\n* Choice D ($12$): doubles the leg, which is the $30$-$60$-$90$ rule, not $45$-$45$-$90$.\n\n**Test Day Takeaway:** $45$-$45$-$90$ sides go $x:x:x\\sqrt{2}$. The hypotenuse is leg $\\times\\sqrt{2}$ — never $\\sqrt{3}$ or $2$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~5s):** In a $30$-$60$-$90$ triangle the hypotenuse (longest side) is twice the shortest side: $2\\times5=10$, which is choice C.\n\n**The Full Solution:**\nStep 1: The side ratio is $x:x\\sqrt{3}:2x$, where $x$ is the shortest side and $2x$ is the hypotenuse.\nStep 2: With $x=5$, the longest side is $2x=10$.\nStep 3: Check: the sides are $5$, $5\\sqrt{3}$, $10$, and $5^2+(5\\sqrt{3})^2=25+75=100=10^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\sqrt{2}$): uses the $\\sqrt{2}$ multiplier from a $45$-$45$-$90$ triangle.\n* Choice B ($5\\sqrt{3}$): that's the middle side (opposite $60^\\circ$), not the longest side.\n* Choice D ($10\\sqrt{3}$): applies both multipliers — doubles and then multiplies by $\\sqrt{3}$.\n\n**Test Day Takeaway:** $30$-$60$-$90$ sides go $x:x\\sqrt{3}:2x$. Shortest side $\\times2=$ hypotenuse; shortest side $\\times\\sqrt{3}=$ longer leg.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Each leg is the hypotenuse divided by $\\sqrt{2}$: $\\frac{10}{\\sqrt{2}}=5\\sqrt{2}$. Choice C shows that exact step.\n\n**The Full Solution:**\nStep 1: In a $45$-$45$-$90$ triangle, hypotenuse $=\\text{leg}\\times\\sqrt{2}$, so $\\text{leg}=\\frac{\\text{hypotenuse}}{\\sqrt{2}}=\\frac{10}{\\sqrt{2}}$.\nStep 2: Rationalize: $\\frac{10}{\\sqrt{2}}\\cdot\\frac{\\sqrt{2}}{\\sqrt{2}}=\\frac{10\\sqrt{2}}{2}=5\\sqrt{2}$.\nStep 3: Check: $(5\\sqrt{2})^2+(5\\sqrt{2})^2=50+50=100=10^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): divides by $2$ instead of $\\sqrt{2}$; halving is the $30$-$60$-$90$ rule. Test: $5^2+5^2=50\\neq100$.\n* Choice B ($5\\sqrt{2}$): the right number, but choice C is the form that shows the $\\frac{10}{\\sqrt{2}}=5\\sqrt{2}$ derivation the question is keyed to.\n* Choice D (Both B and C): only C is presented as the full derivation, so it is the single intended answer.\n\n**Test Day Takeaway:** To go from hypotenuse to leg in a $45$-$45$-$90$ triangle, divide by $\\sqrt{2}$, then rationalize: $\\frac{a}{\\sqrt{2}}=\\frac{a\\sqrt{2}}{2}$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Find $x$ from the hypotenuse $2x=8 \\Rightarrow x=4$, then the side opposite $60^\\circ$ is $x\\sqrt{3}=4\\sqrt{3}$, which is choice B.\n\n**The Full Solution:**\nStep 1: Use the $30$-$60$-$90$ ratio $x:x\\sqrt{3}:2x$. The hypotenuse is $2x=8$, so $x=4$.\nStep 2: The side opposite $60^\\circ$ is the longer leg, $x\\sqrt{3}=4\\sqrt{3}$.\nStep 3: Check: the sides are $4$, $4\\sqrt{3}$, $8$, and $4^2+(4\\sqrt{3})^2=16+48=64=8^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): that's the short side (opposite $30^\\circ$) — students find $x$ and stop before multiplying by $\\sqrt{3}$.\n* Choice C ($8\\sqrt{3}$): multiplies the hypotenuse by $\\sqrt{3}$ instead of multiplying $x$.\n* Choice D ($\\frac{8}{\\sqrt{3}}$): divides the hypotenuse by $\\sqrt{3}$, which matches no side of the triangle.\n\n**Test Day Takeaway:** For $30$-$60$-$90$ triangles, always solve for $x$ first from the side you know, then build the target side as $x\\sqrt{3}$ or $2x$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** A square's diagonal is the hypotenuse of a $45$-$45$-$90$ triangle, so the side is $\\frac{\\text{diagonal}}{\\sqrt{2}}=\\frac{10}{\\sqrt{2}}=5\\sqrt{2}$. Choice C shows that step.\n\n**The Full Solution:**\nStep 1: The diagonal splits the square into two $45$-$45$-$90$ triangles, with the diagonal as the hypotenuse and the sides as the legs.\nStep 2: $\\text{side}=\\frac{\\text{diagonal}}{\\sqrt{2}}=\\frac{10}{\\sqrt{2}}$.\nStep 3: Rationalize: $\\frac{10}{\\sqrt{2}}=\\frac{10\\sqrt{2}}{2}=5\\sqrt{2}$. Check: $(5\\sqrt{2})^2+(5\\sqrt{2})^2=50+50=100=10^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): divides by $2$ instead of $\\sqrt{2}$; a square with side $5$ has diagonal $5\\sqrt{2}\\approx7.07$, not $10$.\n* Choice B ($5\\sqrt{2}$): the right number, but choice C is the form that displays the $\\frac{10}{\\sqrt{2}}=5\\sqrt{2}$ derivation the question is keyed to.\n* Choice D ($10\\sqrt{2}$): multiplies the diagonal by $\\sqrt{2}$ instead of dividing — that gives the diagonal of a side-$10$ square, the inverse operation.\n\n**Test Day Takeaway:** A square with side $s$ has diagonal $s\\sqrt{2}$, so to recover the side from the diagonal, divide by $\\sqrt{2}$: $s=\\frac{d}{\\sqrt{2}}=\\frac{d\\sqrt{2}}{2}$.",
      skills: ['special-right-triangles']
    }
  ]
};
