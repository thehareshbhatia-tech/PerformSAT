export const trianglesLessons = [
  // Section 1: Triangle Fundamentals
  {
    id: 1,
    title: "What is a Triangle?",
    type: "lesson",
    duration: "5 min",
    section: "Triangle Fundamentals",
    hero: {
      tagline: "3 SIDES, 180°",
      subtitle: "The building block of geometry"
    },
    content: {
      blocks: [
        { type: "text", content: "A **triangle** is a 3-sided polygon. It is one of the most fundamental shapes in geometry and appears frequently on the SAT." },
        { type: "formula", label: "Key Property", content: "Interior angles always sum to 180°" },
        { type: "text", content: "Triangles are classified by their **sides**:" },
        { type: "triangleTypes" },
        { type: "list", items: [
          "**Scalene Triangle** — All three sides are different lengths (no equal sides)",
          "**Isosceles Triangle** — Two sides are equal → the angles opposite those sides (base angles) are also equal",
          "**Equilateral Triangle** — All three sides are equal → all three angles are equal (each is 60°)"
        ]},
        { type: "example", title: "Important Connection", content: "In an **isosceles triangle**, equal sides mean equal angles.\n\nIf you know two sides are equal, the angles across from them must be equal too. This is tested frequently on the SAT!" }
      ]
    }
  },
  {
    id: 2,
    title: "Types of Triangles by Angles",
    type: "lesson",
    duration: "4 min",
    section: "Triangle Fundamentals",
    hero: {
      tagline: "ACUTE • RIGHT • OBTUSE",
      subtitle: "Classifying by angle size"
    },
    content: {
      blocks: [
        { type: "text", content: "Triangles can also be classified by their **angles**:" },
        { type: "triangleAngles" },
        { type: "list", items: [
          "**Acute Triangle** — All angles are less than 90°",
          "**Right Triangle** — One angle is exactly 90° (marked with a small square)",
          "**Obtuse Triangle** — One angle is greater than 90°"
        ]},
        { type: "text", content: "A triangle can only have **at most one** right angle or obtuse angle. Why? Because the angles must sum to 180°." },
        { type: "example", title: "Think About It", content: "If one angle is 90°, the other two must sum to 90°.\nIf one angle is 100° (obtuse), the other two must sum to only 80°.\n\nThere's no room for a second large angle!" }
      ]
    }
  },
  {
    id: 3,
    title: "Triangle Inequality Theorem",
    type: "lesson",
    duration: "4 min",
    section: "Triangle Fundamentals",
    hero: {
      tagline: "CAN IT EXIST?",
      subtitle: "Testing if three sides form a triangle"
    },
    content: {
      blocks: [
        { type: "text", content: "The **Triangle Inequality Theorem** states:" },
        { type: "formula", label: "Triangle Inequality", content: "The sum of any two sides must be greater than the third side" },
        { type: "text", content: "This rule determines whether three lengths can actually form a triangle." },
        { type: "example", title: "Example 1: Can 7, 6, and 10 form a triangle?", content: "Check all combinations:\n• 7 + 6 = 13 > 10 ✓\n• 7 + 10 = 17 > 6 ✓\n• 6 + 10 = 16 > 7 ✓\n\n**Yes**, these can form a triangle." },
        { type: "example", title: "Example 2: Can 2, 3, and 7 form a triangle?", content: "Check: 2 + 3 = 5\nIs 5 > 7? **No!**\n\n**Impossible** — these cannot form a triangle." },
        { type: "text", content: "**SAT Tip:** You only need to find ONE combination that fails. Check the two smallest sides first — if their sum isn't greater than the largest side, it's impossible." }
      ]
    }
  },
  // Section 2: Angles of a Triangle
  { id: 4, title: "Simple Angles of a Triangle Example", type: "video", duration: "8 min", section: "Angles of a Triangle", videoId: "VYNQZLCTnx8", hero: { tagline: "PRACTICE", subtitle: "Basic angle problems" } },
  { id: 5, title: "Complex Angles of a Triangle Example", type: "video", duration: "10 min", section: "Angles of a Triangle", videoId: "ZkBP4vwYxQ0", hero: { tagline: "ADVANCED", subtitle: "Multi-step angle problems" } },
  // Section 3: Area of a Triangle
  {
    id: 6,
    title: "Area of a Triangle",
    type: "lesson",
    duration: "5 min",
    section: "Area of a Triangle",
    hero: {
      tagline: "½ × BASE × HEIGHT",
      subtitle: "Finding the space inside"
    },
    content: {
      blocks: [
        { type: "text", content: "The **area of a triangle** measures how much space is inside the triangle." },
        { type: "areaTriangle" },
        { type: "text", content: "**Key concepts:**" },
        { type: "list", items: [
          "The **base** can be any side of the triangle",
          "The **height** must be perpendicular (at 90°) to the base",
          "The height may be inside or outside the triangle depending on its shape"
        ]},
        { type: "example", title: "For Right Triangles", content: "Right triangles are the easiest! The two **legs** (the sides that form the right angle) serve as the base and height.\n\nJust multiply the two legs and divide by 2." },
        { type: "text", content: "**Perimeter** is simpler — just add up all three sides." }
      ]
    }
  },
  { id: 7, title: "Simple Area of a Right Triangle Example", type: "video", duration: "8 min", section: "Area of a Triangle", videoId: "yv6gAJqTezs", hero: { tagline: "PRACTICE", subtitle: "Right triangle area" } },
  { id: 8, title: "Complex Area of a Right Triangle Example", type: "video", duration: "10 min", section: "Area of a Triangle", videoId: "XqQj-8GeyEM", hero: { tagline: "ADVANCED", subtitle: "Challenging area problems" } },
  // Section 4: Similar Triangles
  {
    id: 9,
    title: "What Are Similar Triangles?",
    type: "lesson",
    duration: "5 min",
    section: "Similar Triangles",
    hero: {
      tagline: "SAME SHAPE, DIFFERENT SIZE",
      subtitle: "Proportional sides, equal angles"
    },
    content: {
      blocks: [
        { type: "text", content: "**Similar triangles** have the same shape but may be different sizes. Think of them as scaled versions of each other." },
        { type: "similarTriangles" },
        { type: "text", content: "When two triangles are similar:" },
        { type: "list", items: [
          "**Corresponding angles are equal** — same angles, same positions",
          "**Corresponding sides are proportional** — related by a constant scale factor"
        ]},
        { type: "example", title: "Scale Factor", content: "If triangle ABC is similar to triangle DEF with a scale factor of 2:\n\n• If AB = 3, then DE = 6\n• If BC = 4, then EF = 8\n• If AC = 5, then DF = 10\n\nEvery side of the larger triangle is exactly **2×** the corresponding side of the smaller triangle." },
        { type: "text", content: "**SAT Strategy:** Set up a proportion between corresponding sides to find missing lengths." }
      ]
    }
  },
  {
    id: 10,
    title: "How to Identify Similar Triangles",
    type: "lesson",
    duration: "5 min",
    section: "Similar Triangles",
    hero: {
      tagline: "AA SIMILARITY",
      subtitle: "Two angles are all you need"
    },
    content: {
      blocks: [
        { type: "text", content: "There are two main ways to prove triangles are similar on the SAT:" },
        { type: "text", content: "**1. AA (Angle-Angle) Criterion**" },
        { type: "text", content: "If two angles of one triangle equal two angles of another triangle, the triangles are similar. (The third angle must also be equal since angles sum to 180°.)" },
        { type: "text", content: "**2. Parallel Lines**" },
        { type: "text", content: "When a line is drawn parallel to one side of a triangle, it creates a smaller triangle that is similar to the original." },
        { type: "example", title: "Parallel Line Pattern", content: "If a line parallel to the base cuts through a triangle, the smaller triangle formed at the top is similar to the whole triangle.\n\nThis pattern appears frequently on the SAT — look for parallel lines inside triangles!" },
        { type: "text", content: "**Once you confirm triangles are similar**, set up proportions between corresponding sides to solve for unknowns." }
      ]
    }
  },
  { id: 11, title: "Simple Similar Triangles Example #1", type: "video", duration: "8 min", section: "Similar Triangles", videoId: "SllN4xzTNm0", hero: { tagline: "PRACTICE", subtitle: "Basic similarity" } },
  { id: 12, title: "Simple Similar Triangles Example #2", type: "video", duration: "8 min", section: "Similar Triangles", videoId: "cQ8KEHofTyA", hero: { tagline: "PRACTICE", subtitle: "More examples" } },
  { id: 13, title: "Simple Similar Triangles Example #3", type: "video", duration: "8 min", section: "Similar Triangles", videoId: "fCleu3BSqEw", hero: { tagline: "PRACTICE", subtitle: "Building fluency" } },
  { id: 14, title: "Simple Similar Triangles Example #4", type: "video", duration: "8 min", section: "Similar Triangles", videoId: "PEW__E6DNOU", hero: { tagline: "PRACTICE", subtitle: "Additional practice" } },
  { id: 15, title: "Complex Similar Triangles Example", type: "video", duration: "12 min", section: "Similar Triangles", videoId: "9Y71mE9It_4", hero: { tagline: "ADVANCED", subtitle: "Challenging scenarios" } },
  // Section 5: Right Triangles & Pythagorean Theorem
  {
    id: 16,
    title: "Right Triangles",
    type: "lesson",
    duration: "4 min",
    section: "Right Triangles & Pythagorean Theorem",
    hero: {
      tagline: "THE 90° TRIANGLE",
      subtitle: "Hypotenuse and legs"
    },
    content: {
      blocks: [
        { type: "text", content: "A **right triangle** is a triangle with one **90° angle** (a right angle)." },
        { type: "rightTriangleParts" },
        { type: "text", content: "The parts of a right triangle have special names:" },
        { type: "list", items: [
          "**Hypotenuse** — The side across from the right angle. It is always the **longest side**.",
          "**Legs** — The two sides that form the right angle."
        ]},
        { type: "example", title: "Identifying the Hypotenuse", content: "The hypotenuse is always:\n• Opposite the 90° angle\n• The longest side\n• Never touches the right angle corner\n\nThe two legs always meet at the right angle." },
        { type: "text", content: "Right triangles are special because they follow the **Pythagorean Theorem**, which lets us find missing sides." }
      ]
    }
  },
  {
    id: 17,
    title: "The Pythagorean Theorem",
    type: "lesson",
    duration: "6 min",
    section: "Right Triangles & Pythagorean Theorem",
    hero: {
      tagline: "a² + b² = c²",
      subtitle: "The most famous formula"
    },
    content: {
      blocks: [
        { type: "text", content: "The **Pythagorean Theorem** is one of the most important formulas in geometry. It applies **only to right triangles**." },
        { type: "pythagorean" },
        { type: "text", content: "Where **a** and **b** are the legs, and **c** is the hypotenuse." },
        { type: "text", content: "In words: **The sum of the squares of the two legs equals the square of the hypotenuse.**" },
        { type: "example", title: "Finding the Hypotenuse", content: "If the legs are 3 and 4, find the hypotenuse:\n\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = **5**" },
        { type: "example", title: "Finding a Leg", content: "If one leg is 5 and the hypotenuse is 13, find the other leg:\n\n5² + b² = 13²\n25 + b² = 169\nb² = 144\nb = **12**" },
        { type: "text", content: "**Common Pythagorean Triples** (memorize these!):" },
        { type: "list", items: [
          "**3, 4, 5** (and multiples: 6-8-10, 9-12-15, etc.)",
          "**5, 12, 13**",
          "**8, 15, 17**",
          "**7, 24, 25**"
        ]}
      ]
    }
  },
  { id: 18, title: "Simple Pythagorean Theorem Example #1", type: "video", duration: "8 min", section: "Right Triangles & Pythagorean Theorem", videoId: "DmKXof2wtJM", hero: { tagline: "PRACTICE", subtitle: "Basic Pythagorean" } },
  { id: 19, title: "Simple Pythagorean Theorem Example #2", type: "video", duration: "8 min", section: "Right Triangles & Pythagorean Theorem", videoId: "xKBeYQAxV4g", hero: { tagline: "PRACTICE", subtitle: "More examples" } },
  { id: 20, title: "Simple Pythagorean Theorem Example #3", type: "video", duration: "8 min", section: "Right Triangles & Pythagorean Theorem", videoId: "caGJrq00byY", hero: { tagline: "PRACTICE", subtitle: "Building fluency" } },
  { id: 21, title: "Complex Pythagorean Theorem Example", type: "video", duration: "12 min", section: "Right Triangles & Pythagorean Theorem", videoId: "k4eFz5IlTOo", hero: { tagline: "ADVANCED", subtitle: "Challenging problems" } },
  // Section 6: Trigonometric Ratios
  {
    id: 22,
    title: "Introduction to Trigonometry (SOH CAH TOA)",
    type: "lesson",
    duration: "7 min",
    section: "Trigonometric Ratios",
    hero: {
      tagline: "SOH CAH TOA",
      subtitle: "Sin, Cos, Tan explained"
    },
    content: {
      blocks: [
        { type: "text", content: "**Trigonometric ratios** compare the sides of a right triangle relative to a chosen acute angle. They only apply to **right triangles**." },
        { type: "text", content: "First, you must identify the sides relative to your chosen angle θ:" },
        { type: "sohcahtoa", notGiven: true },
        { type: "list", items: [
          "**Opposite** — The side across from the angle (doesn't touch it)",
          "**Adjacent** — The side next to the angle (not the hypotenuse)",
          "**Hypotenuse** — Always the longest side, across from the 90°"
        ]},
        { type: "text", content: "**The Three Ratios (SOH CAH TOA):**" },
        { type: "formula", label: "Sine", prefix: "sin(θ) =", fraction: { numerator: "Opposite", denominator: "Hypotenuse" }, numeratorColor: "#ea580c", denominatorColor: "#3b82f6" },
        { type: "formula", label: "Cosine", prefix: "cos(θ) =", fraction: { numerator: "Adjacent", denominator: "Hypotenuse" }, numeratorColor: "#16a34a", denominatorColor: "#3b82f6" },
        { type: "formula", label: "Tangent", prefix: "tan(θ) =", fraction: { numerator: "Opposite", denominator: "Adjacent" }, numeratorColor: "#ea580c", denominatorColor: "#16a34a" },
        { type: "text", content: "**Memory trick: SOH CAH TOA**" },
        { type: "list", items: [
          "**S**ine = **O**pposite / **H**ypotenuse",
          "**C**osine = **A**djacent / **H**ypotenuse",
          "**T**angent = **O**pposite / **A**djacent"
        ]}
      ]
    }
  },
  { id: 23, title: "Simple Trigonometric Ratios Example #1", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "V4hSoSCACUA", hero: { tagline: "PRACTICE", subtitle: "Basic trig ratios" } },
  { id: 24, title: "Simple Trigonometric Ratios Example #2", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "XO4V-6Nv2VA", hero: { tagline: "PRACTICE", subtitle: "More examples" } },
  { id: 25, title: "Simple Trigonometric Ratios Example #3", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "1pN3OcxOVk4", hero: { tagline: "PRACTICE", subtitle: "Building fluency" } },
  { id: 26, title: "Simple Trigonometric Ratios Example #4", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "HaJettXIUlU", hero: { tagline: "PRACTICE", subtitle: "Additional practice" } },
  { id: 27, title: "Simple Trigonometric Ratios Example #5", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "byD4ls13d64", hero: { tagline: "PRACTICE", subtitle: "Final basic examples" } },
  { id: 28, title: "Complex Trigonometric Ratios Example", type: "video", duration: "12 min", section: "Trigonometric Ratios", videoId: "lTF4dy953gw", hero: { tagline: "ADVANCED", subtitle: "Challenging trig problems" } },
  // Section 7: Special Right Triangles
  {
    id: 29,
    title: "The 45-45-90 Triangle",
    type: "lesson",
    duration: "5 min",
    section: "Special Right Triangles",
    hero: {
      tagline: "x : x : x√2",
      subtitle: "The isosceles right triangle"
    },
    content: {
      blocks: [
        { type: "text", content: "A **45-45-90 triangle** is a special right triangle that is also **isosceles** (two equal sides)." },
        { type: "text", content: "The angles are always **45°, 45°, and 90°**." },
        { type: "text", content: "Because the angles are fixed, the **side ratios are always the same**:" },
        { type: "triangle4545" },
        { type: "list", items: [
          "The two **legs** are equal (both are **x**)",
          "The **hypotenuse** is **x√2** (leg times √2)"
        ]},
        { type: "example", title: "Example", content: "If each leg is **5**:\n• Leg 1 = 5\n• Leg 2 = 5\n• Hypotenuse = 5√2 ≈ 7.07\n\nIf the hypotenuse is **10**:\n• Hypotenuse = 10 = x√2\n• x = ¹⁰⁄√₂ = ¹⁰√²⁄₂ = 5√2\n• Each leg = 5√2 ≈ 7.07" },
        { type: "text", content: "**Quick tip:** A 45-45-90 triangle is half of a square cut diagonally!" }
      ]
    }
  },
  { id: 30, title: "Simple 45-45-90 Triangle Example", type: "video", duration: "8 min", section: "Special Right Triangles", videoId: "hEcp1GCByyk", hero: { tagline: "PRACTICE", subtitle: "Basic 45-45-90" } },
  { id: 31, title: "Complex 45-45-90 Triangle Example", type: "video", duration: "10 min", section: "Special Right Triangles", videoId: "Nqke1YTLr3k", hero: { tagline: "ADVANCED", subtitle: "Challenging 45-45-90" } },
  {
    id: 32,
    title: "The 30-60-90 Triangle",
    type: "lesson",
    duration: "6 min",
    section: "Special Right Triangles",
    hero: {
      tagline: "x : x√3 : 2x",
      subtitle: "Half an equilateral triangle"
    },
    content: {
      blocks: [
        { type: "text", content: "A **30-60-90 triangle** is a special right triangle where the angles are always **30°, 60°, and 90°**." },
        { type: "text", content: "Because the angles are fixed, the **side ratios are always the same**:" },
        { type: "triangle3060" },
        { type: "list", items: [
          "**Shortest side** (opposite 30°) = **x**",
          "**Medium side** (opposite 60°) = **x√3**",
          "**Hypotenuse** (opposite 90°) = **2x**"
        ]},
        { type: "text", content: "**Key relationship:** The hypotenuse is always **twice** the shortest side." },
        { type: "example", title: "Example", content: "If the shortest side is **4**:\n• Short side (opposite 30°) = 4\n• Medium side (opposite 60°) = 4√3 ≈ 6.93\n• Hypotenuse = 8\n\nIf the hypotenuse is **12**:\n• Hypotenuse = 12 = 2x → x = 6\n• Short side = 6\n• Medium side = 6√3 ≈ 10.39" },
        { type: "text", content: "**Quick tip:** A 30-60-90 triangle is half of an equilateral triangle cut down the middle!" }
      ]
    }
  },
  { id: 33, title: "Simple 30-60-90 Triangle Example", type: "video", duration: "8 min", section: "Special Right Triangles", videoId: "_6bZxuQym8g", hero: { tagline: "PRACTICE", subtitle: "Basic 30-60-90" } },
  { id: 34, title: "Complex 30-60-90 Triangle Example #1", type: "video", duration: "10 min", section: "Special Right Triangles", videoId: "HvJnE1eP6Xs", hero: { tagline: "ADVANCED", subtitle: "Challenging 30-60-90" } },
  { id: 35, title: "Complex 30-60-90 Triangle Example #2", type: "video", duration: "10 min", section: "Special Right Triangles", videoId: "q19izkGElyI", hero: { tagline: "ADVANCED", subtitle: "More complex examples" } }
];
