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
      explanation: "The sum of interior angles in any triangle is always 180°."
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
      explanation: "A scalene triangle has all sides of different lengths. Since 3 ≠ 4 ≠ 5, this is scalene."
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
      explanation: "Two angles are 70° each. Third angle = 180° - 70° - 70° = 40°."
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
      explanation: "Triangle inequality: sum of any two sides must be greater than the third. 2 + 3 = 5 < 7, so no triangle is possible."
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
      explanation: "An equilateral triangle has 3 equal sides. Perimeter = 3 × 6 = 18."
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
      explanation: "Third angle = 180° - 45° - 75° = 60°."
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
      explanation: "An exterior angle equals the sum of the two non-adjacent interior angles. Sum = 110°."
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
      explanation: "In a right triangle: 90° + 35° + x = 180°, so x = 55°."
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
      explanation: "An acute triangle has all angles less than 90°."
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
      explanation: "2x + 3x + 4x = 180° → 9x = 180° → x = 20°. Angle B = 3x = 60°."
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
      explanation: "Area = (1/2) × base × height = (1/2) × 10 × 6 = 30."
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
      explanation: "Area = (1/2) × base × height → 24 = (1/2) × 8 × h → 24 = 4h → h = 6."
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
      explanation: "New area = (1/2)(2b)(2h) = 4 × (1/2)bh = 4 × original area."
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
      explanation: "For a right triangle, the legs are base and height. Area = (1/2) × 5 × 12 = 30."
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
      explanation: "For equilateral triangle, height = (side × √3)/2 = (4 × √3)/2 = 2√3."
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
      explanation: "Scale factor = 9/6 = 3/2. EF = BC × (3/2) = 8 × 3/2 = 12."
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
      explanation: "Perimeters have the same ratio as sides. Larger perimeter = 24 × (5/2) = 60."
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
      explanation: "Area ratio = (side ratio)². If area ratio is 4:9, side ratio = √(4:9) = 2:3."
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
      explanation: "Area ratio = (5/3)² = 25/9. Larger area = 18 × (25/9) = 50."
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
      explanation: "SSA is not a valid similarity criterion - it can produce different triangles (ambiguous case)."
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
      explanation: "c² = a² + b² = 36 + 64 = 100. c = √100 = 10."
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
      explanation: "13² = 5² + h² → 169 = 25 + h² → h² = 144 → h = 12 feet."
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
      explanation: "Check: 7² + 24² = 49 + 576 = 625 = 25². Yes, it's a right triangle."
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
      explanation: "15² = 9² + b² → 225 = 81 + b² → b² = 144 → b = 12."
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
      explanation: "10² = 6² + s² → 100 = 36 + s² → s² = 64 → s = 8. Both B and C equal 8."
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
      explanation: "SOH-CAH-TOA: Sin = Opposite/Hypotenuse."
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
      explanation: "sin(30°) = 1/2 = opposite/hypotenuse = 5/h. So h = 10."
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
      explanation: "cos(θ) = adjacent/hypotenuse → 0.8 = 12/h → h = 12/0.8 = 15."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In a right triangle with legs 3 and 4, what is tan(θ) where θ is the angle opposite the side of length 3?",
      choices: [
        { id: "A", text: "3/4" },
        { id: "B", text: "4/3" },
        { id: "C", text: "3/5" },
        { id: "D", text: "4/5" }
      ],
      correctAnswer: "A",
      hint: "Tangent = opposite/adjacent. Identify which leg is opposite to angle θ and which is adjacent.",
      explanation: "tan(θ) = opposite/adjacent = 3/4."
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
      explanation: "In a right triangle, sin(A) = cos(90° - A). So if sin(A) = cos(B), then B = 90° - A, meaning A + B = 90°."
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
      explanation: "In a 45-45-90 triangle, hypotenuse = leg × √2 = 6√2."
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
      explanation: "In a 30-60-90, sides are in ratio 1:√3:2. If shortest = 5, hypotenuse = 2 × 5 = 10."
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
      explanation: "Leg = hypotenuse/√2 = 10/√2 = 10√2/2 = 5√2."
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
      explanation: "Sides are x : x√3 : 2x. If 2x = 8, then x = 4. Side opposite 60° = x√3 = 4√3."
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
      explanation: "A square's diagonal creates two 45-45-90 triangles. Side = diagonal/√2 = 10/√2 = 5√2."
    }
  ]
};
