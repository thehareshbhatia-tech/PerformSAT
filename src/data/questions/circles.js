// Practice questions for Circles module
// Questions are organized by SECTION (question type)

export const circlesQuestions = {
  // Section: Circle Fundamentals
  "Circle Fundamentals": [
    {
      id: 1,
      question: "A circle has a radius of 7 cm. What is the diameter of the circle?",
      choices: [
        { id: "A", text: "3.5 cm" },
        { id: "B", text: "7 cm" },
        { id: "C", text: "14 cm" },
        { id: "D", text: "49 cm" }
      ],
      correctAnswer: "C",
      explanation: "The diameter of a circle is twice the radius. Diameter = 2 × radius = 2 × 7 = 14 cm."
    },
    {
      id: 2,
      question: "If the diameter of a circle is 20 inches, what is the radius?",
      choices: [
        { id: "A", text: "5 inches" },
        { id: "B", text: "10 inches" },
        { id: "C", text: "20 inches" },
        { id: "D", text: "40 inches" }
      ],
      correctAnswer: "B",
      explanation: "The radius is half the diameter. Radius = diameter ÷ 2 = 20 ÷ 2 = 10 inches."
    },
    {
      id: 3,
      question: "A circle has a center at point O. If point P is on the circle and OP = 5, what is the radius of the circle?",
      choices: [
        { id: "A", text: "2.5" },
        { id: "B", text: "5" },
        { id: "C", text: "10" },
        { id: "D", text: "25" }
      ],
      correctAnswer: "B",
      explanation: "The radius is the distance from the center to any point on the circle. Since OP = 5 and P is on the circle, the radius is 5."
    },
    {
      id: 4,
      question: "Which of the following is always true about a chord of a circle?",
      choices: [
        { id: "A", text: "It passes through the center" },
        { id: "B", text: "It is equal to the radius" },
        { id: "C", text: "Its endpoints are on the circle" },
        { id: "D", text: "It is perpendicular to the diameter" }
      ],
      correctAnswer: "C",
      explanation: "A chord is a line segment with both endpoints on the circle. It doesn't have to pass through the center (that would be a diameter) or have any specific relationship to the radius."
    },
    {
      id: 5,
      question: "The longest chord in a circle is the:",
      choices: [
        { id: "A", text: "Radius" },
        { id: "B", text: "Diameter" },
        { id: "C", text: "Arc" },
        { id: "D", text: "Secant" }
      ],
      correctAnswer: "B",
      explanation: "The diameter is the longest chord in a circle because it passes through the center. Any other chord that doesn't pass through the center will be shorter."
    }
  ],

  // Section: Area Problems
  "Area Problems": [
    {
      id: 1,
      question: "What is the area of a circle with radius 6? (Leave answer in terms of π)",
      choices: [
        { id: "A", text: "6π" },
        { id: "B", text: "12π" },
        { id: "C", text: "36π" },
        { id: "D", text: "72π" }
      ],
      correctAnswer: "C",
      explanation: "Area = πr² = π(6)² = 36π. Remember, area of a circle is always πr², not πd or 2πr."
    },
    {
      id: 2,
      question: "A circular pizza has a diameter of 16 inches. What is its area in square inches?",
      choices: [
        { id: "A", text: "16π" },
        { id: "B", text: "32π" },
        { id: "C", text: "64π" },
        { id: "D", text: "256π" }
      ],
      correctAnswer: "C",
      explanation: "First find radius: r = d/2 = 16/2 = 8 inches. Area = πr² = π(8)² = 64π square inches."
    },
    {
      id: 3,
      question: "If the area of a circle is 100π square meters, what is the radius?",
      choices: [
        { id: "A", text: "5 meters" },
        { id: "B", text: "10 meters" },
        { id: "C", text: "25 meters" },
        { id: "D", text: "50 meters" }
      ],
      correctAnswer: "B",
      explanation: "Area = πr², so 100π = πr². Dividing both sides by π: 100 = r². Taking the square root: r = 10 meters."
    },
    {
      id: 4,
      question: "A circular garden has an area of 154 square feet. Using π ≈ 22/7, what is the radius of the garden?",
      choices: [
        { id: "A", text: "7 feet" },
        { id: "B", text: "14 feet" },
        { id: "C", text: "49 feet" },
        { id: "D", text: "77 feet" }
      ],
      correctAnswer: "A",
      explanation: "Area = πr², so 154 = (22/7)r². Solving: r² = 154 × (7/22) = 49. Therefore r = 7 feet."
    },
    {
      id: 5,
      question: "If the radius of a circle is doubled, by what factor does the area increase?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "4" },
        { id: "C", text: "π" },
        { id: "D", text: "2π" }
      ],
      correctAnswer: "B",
      explanation: "If original area = πr², new area with doubled radius = π(2r)² = 4πr². The new area is 4 times the original area."
    }
  ],

  // Section: Circumference & Arc Length
  "Circumference & Arc Length": [
    {
      id: 1,
      question: "What is the circumference of a circle with radius 5? (Leave answer in terms of π)",
      choices: [
        { id: "A", text: "5π" },
        { id: "B", text: "10π" },
        { id: "C", text: "25π" },
        { id: "D", text: "50π" }
      ],
      correctAnswer: "B",
      explanation: "Circumference = 2πr = 2π(5) = 10π. Alternatively, C = πd = π(10) = 10π."
    },
    {
      id: 2,
      question: "A circle has a circumference of 24π cm. What is the diameter?",
      choices: [
        { id: "A", text: "6 cm" },
        { id: "B", text: "12 cm" },
        { id: "C", text: "24 cm" },
        { id: "D", text: "48 cm" }
      ],
      correctAnswer: "C",
      explanation: "Circumference = πd, so 24π = πd. Dividing both sides by π: d = 24 cm."
    },
    {
      id: 3,
      question: "What is the length of an arc with a central angle of 60° in a circle with radius 9?",
      choices: [
        { id: "A", text: "3π" },
        { id: "B", text: "6π" },
        { id: "C", text: "9π" },
        { id: "D", text: "18π" }
      ],
      correctAnswer: "A",
      explanation: "Arc length = (θ/360°) × 2πr = (60°/360°) × 2π(9) = (1/6) × 18π = 3π."
    },
    {
      id: 4,
      question: "In a circle with radius 12, what central angle creates an arc of length 4π?",
      choices: [
        { id: "A", text: "30°" },
        { id: "B", text: "60°" },
        { id: "C", text: "90°" },
        { id: "D", text: "120°" }
      ],
      correctAnswer: "B",
      explanation: "Arc length = (θ/360°) × 2πr. So 4π = (θ/360°) × 24π. Solving: θ/360° = 4π/24π = 1/6. θ = 60°."
    },
    {
      id: 5,
      question: "A semicircular arc has length 8π. What is the radius of the circle?",
      choices: [
        { id: "A", text: "4" },
        { id: "B", text: "8" },
        { id: "C", text: "16" },
        { id: "D", text: "32" }
      ],
      correctAnswer: "B",
      explanation: "A semicircle is half the circumference: arc = πr. So 8π = πr, meaning r = 8."
    }
  ],

  // Section: Sector Area
  "Sector Area": [
    {
      id: 1,
      question: "What is the area of a sector with central angle 90° in a circle with radius 8?",
      choices: [
        { id: "A", text: "8π" },
        { id: "B", text: "16π" },
        { id: "C", text: "32π" },
        { id: "D", text: "64π" }
      ],
      correctAnswer: "B",
      explanation: "Sector area = (θ/360°) × πr² = (90°/360°) × π(8)² = (1/4) × 64π = 16π."
    },
    {
      id: 2,
      question: "A pizza slice represents a 45° sector of a circular pizza with radius 10 inches. What is the area of the slice?",
      choices: [
        { id: "A", text: "12.5π square inches" },
        { id: "B", text: "25π square inches" },
        { id: "C", text: "50π square inches" },
        { id: "D", text: "100π square inches" }
      ],
      correctAnswer: "A",
      explanation: "Sector area = (θ/360°) × πr² = (45°/360°) × π(10)² = (1/8) × 100π = 12.5π square inches."
    },
    {
      id: 3,
      question: "If a sector has an area of 18π and a central angle of 60°, what is the radius of the circle?",
      choices: [
        { id: "A", text: "3√6" },
        { id: "B", text: "6" },
        { id: "C", text: "6√3" },
        { id: "D", text: "18" }
      ],
      correctAnswer: "C",
      explanation: "18π = (60°/360°) × πr² = (1/6) × πr². So r² = 18 × 6 = 108. r = √108 = √(36×3) = 6√3."
    },
    {
      id: 4,
      question: "A sector of a circle with radius 6 has an area of 9π. What is the central angle of the sector?",
      choices: [
        { id: "A", text: "45°" },
        { id: "B", text: "60°" },
        { id: "C", text: "90°" },
        { id: "D", text: "120°" }
      ],
      correctAnswer: "C",
      explanation: "9π = (θ/360°) × π(6)² = (θ/360°) × 36π. So θ/360° = 9/36 = 1/4. θ = 90°."
    },
    {
      id: 5,
      question: "The area of a sector is what fraction of the circle's total area if the central angle is 120°?",
      choices: [
        { id: "A", text: "1/6" },
        { id: "B", text: "1/4" },
        { id: "C", text: "1/3" },
        { id: "D", text: "1/2" }
      ],
      correctAnswer: "C",
      explanation: "The fraction of the circle is simply θ/360° = 120°/360° = 1/3."
    }
  ],

  // Section: Equation of a Circle
  "Equation of a Circle": [
    {
      id: 1,
      question: "What is the center of the circle with equation (x - 3)² + (y + 2)² = 25?",
      choices: [
        { id: "A", text: "(3, 2)" },
        { id: "B", text: "(-3, 2)" },
        { id: "C", text: "(3, -2)" },
        { id: "D", text: "(-3, -2)" }
      ],
      correctAnswer: "C",
      explanation: "In the form (x - h)² + (y - k)² = r², the center is (h, k). Here, h = 3 and k = -2 (note: y + 2 = y - (-2)). Center: (3, -2)."
    },
    {
      id: 2,
      question: "What is the radius of the circle (x + 1)² + (y - 4)² = 49?",
      choices: [
        { id: "A", text: "7" },
        { id: "B", text: "14" },
        { id: "C", text: "24.5" },
        { id: "D", text: "49" }
      ],
      correctAnswer: "A",
      explanation: "In standard form (x - h)² + (y - k)² = r², the radius is r = √49 = 7."
    },
    {
      id: 3,
      question: "Which equation represents a circle with center (0, 5) and radius 3?",
      choices: [
        { id: "A", text: "x² + (y - 5)² = 3" },
        { id: "B", text: "x² + (y - 5)² = 9" },
        { id: "C", text: "x² + (y + 5)² = 9" },
        { id: "D", text: "(x - 5)² + y² = 9" }
      ],
      correctAnswer: "B",
      explanation: "Standard form: (x - h)² + (y - k)² = r². With center (0, 5) and radius 3: x² + (y - 5)² = 9."
    },
    {
      id: 4,
      question: "The circle x² + y² = 36 has its center at:",
      choices: [
        { id: "A", text: "(0, 0)" },
        { id: "B", text: "(6, 0)" },
        { id: "C", text: "(0, 6)" },
        { id: "D", text: "(6, 6)" }
      ],
      correctAnswer: "A",
      explanation: "The equation x² + y² = 36 can be written as (x - 0)² + (y - 0)² = 36. The center is (0, 0) and radius is 6."
    },
    {
      id: 5,
      question: "A circle has center (-2, 3) and passes through the point (1, 7). What is the radius?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "4" },
        { id: "C", text: "5" },
        { id: "D", text: "7" }
      ],
      correctAnswer: "C",
      explanation: "The radius equals the distance from center to point on circle: r = √[(1-(-2))² + (7-3)²] = √[9 + 16] = √25 = 5."
    }
  ],

  // Section: Circle Transformations
  "Circle Transformations": [
    {
      id: 1,
      question: "If the circle x² + y² = 16 is translated 3 units right and 2 units up, what is the new equation?",
      choices: [
        { id: "A", text: "(x - 3)² + (y - 2)² = 16" },
        { id: "B", text: "(x + 3)² + (y + 2)² = 16" },
        { id: "C", text: "(x - 3)² + (y + 2)² = 16" },
        { id: "D", text: "(x + 3)² + (y - 2)² = 16" }
      ],
      correctAnswer: "A",
      explanation: "Translation right by 3 means subtract 3 from x; up by 2 means subtract 2 from y. New equation: (x - 3)² + (y - 2)² = 16."
    },
    {
      id: 2,
      question: "The circle (x - 2)² + (y + 1)² = 9 is translated so its new center is at (5, 3). What is the new equation?",
      choices: [
        { id: "A", text: "(x - 5)² + (y - 3)² = 9" },
        { id: "B", text: "(x + 5)² + (y + 3)² = 9" },
        { id: "C", text: "(x - 5)² + (y + 3)² = 9" },
        { id: "D", text: "(x - 5)² + (y - 3)² = 3" }
      ],
      correctAnswer: "A",
      explanation: "The new center is (5, 3) and the radius stays the same at 3. New equation: (x - 5)² + (y - 3)² = 9."
    },
    {
      id: 3,
      question: "If a circle centered at the origin with radius 4 is dilated by a factor of 2, what is the new radius?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "4" },
        { id: "C", text: "6" },
        { id: "D", text: "8" }
      ],
      correctAnswer: "D",
      explanation: "A dilation by factor 2 multiplies all distances by 2. New radius = 4 × 2 = 8."
    },
    {
      id: 4,
      question: "The circle (x + 4)² + (y - 1)² = 25 is reflected across the y-axis. What is the x-coordinate of the new center?",
      choices: [
        { id: "A", text: "-4" },
        { id: "B", text: "4" },
        { id: "C", text: "-1" },
        { id: "D", text: "1" }
      ],
      correctAnswer: "B",
      explanation: "Original center: (-4, 1). Reflecting across y-axis changes sign of x-coordinate. New center: (4, 1)."
    },
    {
      id: 5,
      question: "After a circle is translated 5 units left, its equation is (x + 2)² + (y - 3)² = 4. What was the original center?",
      choices: [
        { id: "A", text: "(-7, 3)" },
        { id: "B", text: "(3, 3)" },
        { id: "C", text: "(-2, 3)" },
        { id: "D", text: "(7, 3)" }
      ],
      correctAnswer: "B",
      explanation: "Current center: (-2, 3). Moving 5 left means 5 was subtracted from x. Original x = -2 + 5 = 3. Original center: (3, 3)."
    }
  ],

  // Section: Domain, Range & Intersections
  "Domain, Range & Intersections": [
    {
      id: 1,
      question: "What is the domain of the circle (x - 1)² + (y + 2)² = 9?",
      choices: [
        { id: "A", text: "-2 ≤ x ≤ 4" },
        { id: "B", text: "-1 ≤ x ≤ 3" },
        { id: "C", text: "-5 ≤ x ≤ 1" },
        { id: "D", text: "All real numbers" }
      ],
      correctAnswer: "A",
      explanation: "Center is (1, -2), radius is 3. Domain extends 3 units left and right of center: 1 - 3 = -2 and 1 + 3 = 4. Domain: -2 ≤ x ≤ 4."
    },
    {
      id: 2,
      question: "What is the range of the circle x² + (y - 5)² = 16?",
      choices: [
        { id: "A", text: "1 ≤ y ≤ 9" },
        { id: "B", text: "-4 ≤ y ≤ 4" },
        { id: "C", text: "1 ≤ y ≤ 5" },
        { id: "D", text: "-1 ≤ y ≤ 9" }
      ],
      correctAnswer: "A",
      explanation: "Center is (0, 5), radius is 4. Range extends 4 units above and below center: 5 - 4 = 1 and 5 + 4 = 9. Range: 1 ≤ y ≤ 9."
    },
    {
      id: 3,
      question: "How many times does the line y = 3 intersect the circle x² + y² = 25?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "2" },
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "C",
      explanation: "Substituting y = 3: x² + 9 = 25, so x² = 16, x = ±4. The line intersects at (4, 3) and (-4, 3) - two points."
    },
    {
      id: 4,
      question: "At what points does the circle x² + y² = 25 intersect the x-axis?",
      choices: [
        { id: "A", text: "(5, 0) only" },
        { id: "B", text: "(5, 0) and (-5, 0)" },
        { id: "C", text: "(0, 5) and (0, -5)" },
        { id: "D", text: "No intersection" }
      ],
      correctAnswer: "B",
      explanation: "On the x-axis, y = 0. Substituting: x² + 0 = 25, so x = ±5. Intersection points: (5, 0) and (-5, 0)."
    },
    {
      id: 5,
      question: "The line y = x + 1 and circle x² + y² = 5 intersect at how many points?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "2" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "C",
      explanation: "Substitute y = x + 1: x² + (x+1)² = 5 → x² + x² + 2x + 1 = 5 → 2x² + 2x - 4 = 0 → x² + x - 2 = 0 → (x+2)(x-1) = 0. Two solutions, so 2 intersection points."
    }
  ],

  // Section: Converting to Standard Form
  "Converting to Standard Form": [
    {
      id: 1,
      question: "Convert x² + y² - 6x + 4y = 12 to standard form. What is the center?",
      choices: [
        { id: "A", text: "(3, -2)" },
        { id: "B", text: "(-3, 2)" },
        { id: "C", text: "(6, -4)" },
        { id: "D", text: "(-6, 4)" }
      ],
      correctAnswer: "A",
      explanation: "Complete the square: (x² - 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4 → (x - 3)² + (y + 2)² = 25. Center: (3, -2)."
    },
    {
      id: 2,
      question: "For the circle x² + y² + 8x - 2y - 8 = 0, what is the radius?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "5" },
        { id: "C", text: "8" },
        { id: "D", text: "25" }
      ],
      correctAnswer: "B",
      explanation: "Complete the square: (x² + 8x + 16) + (y² - 2y + 1) = 8 + 16 + 1 = 25 → (x + 4)² + (y - 1)² = 25. Radius = 5."
    },
    {
      id: 3,
      question: "The equation x² + y² - 10y = 0 represents a circle with center at:",
      choices: [
        { id: "A", text: "(0, 5)" },
        { id: "B", text: "(0, -5)" },
        { id: "C", text: "(5, 0)" },
        { id: "D", text: "(-5, 0)" }
      ],
      correctAnswer: "A",
      explanation: "Complete the square: x² + (y² - 10y + 25) = 25 → x² + (y - 5)² = 25. Center: (0, 5)."
    },
    {
      id: 4,
      question: "Convert x² + y² + 2x - 6y + 6 = 0 to standard form. What is r²?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "4" },
        { id: "C", text: "6" },
        { id: "D", text: "10" }
      ],
      correctAnswer: "B",
      explanation: "Complete the square: (x² + 2x + 1) + (y² - 6y + 9) = -6 + 1 + 9 = 4 → (x + 1)² + (y - 3)² = 4. So r² = 4."
    },
    {
      id: 5,
      question: "Which equation in general form represents the circle (x - 2)² + (y + 3)² = 16?",
      choices: [
        { id: "A", text: "x² + y² - 4x + 6y - 3 = 0" },
        { id: "B", text: "x² + y² - 4x - 6y - 3 = 0" },
        { id: "C", text: "x² + y² + 4x - 6y - 3 = 0" },
        { id: "D", text: "x² + y² - 4x + 6y + 3 = 0" }
      ],
      correctAnswer: "A",
      explanation: "Expand: x² - 4x + 4 + y² + 6y + 9 = 16 → x² + y² - 4x + 6y + 13 = 16 → x² + y² - 4x + 6y - 3 = 0."
    }
  ],

  // Section: Tangent Lines
  "Tangent Lines": [
    {
      id: 1,
      question: "A tangent line to a circle at a point is _____ to the radius at that point.",
      choices: [
        { id: "A", text: "Parallel" },
        { id: "B", text: "Perpendicular" },
        { id: "C", text: "Equal" },
        { id: "D", text: "Secant" }
      ],
      correctAnswer: "B",
      explanation: "A fundamental property: a tangent line is always perpendicular to the radius drawn to the point of tangency."
    },
    {
      id: 2,
      question: "The center of a circle is at (3, 4) and a tangent line touches the circle at (6, 8). What is the slope of the tangent line?",
      choices: [
        { id: "A", text: "4/3" },
        { id: "B", text: "-4/3" },
        { id: "C", text: "3/4" },
        { id: "D", text: "-3/4" }
      ],
      correctAnswer: "D",
      explanation: "Slope of radius = (8-4)/(6-3) = 4/3. Tangent is perpendicular, so its slope = -1/(4/3) = -3/4."
    },
    {
      id: 3,
      question: "From point P outside a circle, two tangent segments are drawn to the circle. These segments are:",
      choices: [
        { id: "A", text: "Perpendicular" },
        { id: "B", text: "Equal in length" },
        { id: "C", text: "Parallel" },
        { id: "D", text: "Always different lengths" }
      ],
      correctAnswer: "B",
      explanation: "A key theorem: two tangent segments from the same external point to a circle are always equal in length."
    },
    {
      id: 4,
      question: "A circle has center (0, 0) and radius 5. What is the distance from the center to the tangent line y = 5?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "5" },
        { id: "C", text: "10" },
        { id: "D", text: "25" }
      ],
      correctAnswer: "B",
      explanation: "The distance from center to a tangent line always equals the radius. Here, the tangent at the top of the circle is at y = 5, distance 5 from center."
    },
    {
      id: 5,
      question: "If the tangent line at point (5, 0) on a circle centered at the origin is vertical, what can you conclude?",
      choices: [
        { id: "A", text: "The radius at that point is horizontal" },
        { id: "B", text: "The radius at that point is vertical" },
        { id: "C", text: "The circle has radius 5" },
        { id: "D", text: "Both A and C" }
      ],
      correctAnswer: "D",
      explanation: "If the tangent is vertical, the radius must be horizontal (perpendicular). The point (5, 0) is distance 5 from origin, so radius = 5."
    }
  ]
};
