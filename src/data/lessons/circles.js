export const circlesLessons = [
  // Section 1: Circle Fundamentals
  {
    id: 1,
    title: "Parts of a Circle",
    type: "lesson",
    duration: "5 min",
    section: "Circle Fundamentals",
    hero: {
      tagline: "THE PERFECT SHAPE",
      subtitle: "Radius, diameter, and everything round"
    },
    content: {
      blocks: [
        { type: "text", content: "A **Circle** is the set of all points that are the **same distance** from a fixed point called the **Center**." },
        { type: "circleParts" },
        { type: "text", content: "**Key Parts of a Circle:**" },
        { type: "list", items: [
          "**Center** — The fixed point in the middle of the circle",
          "**Radius (r)** — The distance from the center to any point on the circle",
          "**Diameter (d)** — The distance across the circle through the center",
          "**Circumference** — The distance around the circle (the perimeter)",
          "**Area** — The space enclosed inside the circle"
        ]},
        { type: "formula", label: "Key Relationship", content: "Diameter = 2 × Radius   →   d = 2r" },
        { type: "text", content: "The **Diameter** is always **twice** the **Radius**. If given one, you can always find the other." }
      ]
    }
  },
  {
    id: 2,
    title: "Area of a Circle",
    type: "lesson",
    duration: "5 min",
    section: "Circle Fundamentals",
    hero: {
      tagline: "πr² — MEMORIZE IT",
      subtitle: "The space inside the circle"
    },
    content: {
      blocks: [
        { type: "text", content: "The **Area** of a circle measures the space enclosed inside the circle." },
        { type: "circleArea" },
        { type: "text", content: "The most important step is identifying the **Radius**. If the problem gives the **Diameter**, divide by 2 first!" },
        { type: "example", title: "Example 1: Given Radius", content: "A circle has a **radius of 5**.\n\nArea = π(5)² = **25π**" },
        { type: "example", title: "Example 2: Given Diameter", content: "A circle has a **diameter of 10**.\n\nRadius = 10 ÷ 2 = 5\nArea = π(5)² = **25π**" },
        { type: "text", content: "**Critical Insight:** Area grows with the **square** of the radius." },
        { type: "example", title: "What This Means", content: "If the radius **doubles**, the area becomes **4× larger** (not 2×).\nIf the radius **triples**, the area becomes **9× larger**." }
      ]
    }
  },
  {
    id: 3,
    title: "Circumference of a Circle",
    type: "lesson",
    duration: "4 min",
    section: "Circle Fundamentals",
    hero: {
      tagline: "2πr OR πd",
      subtitle: "The distance around"
    },
    content: {
      blocks: [
        { type: "text", content: "The **Circumference** is the distance around a circle — the circle's perimeter." },
        { type: "formula", label: "Using Radius", content: "C = 2πr" },
        { type: "formula", label: "Using Diameter", content: "C = πd" },
        { type: "text", content: "Both formulas give the same result since **d = 2r**. Use whichever matches what you're given." },
        { type: "example", title: "Example", content: "A circle has a **radius of 7**.\n\nUsing radius: C = 2π(7) = **14π**\n\nUsing diameter (d = 14): C = π(14) = **14π** ✓" }
      ]
    }
  },
  // Section 2: Area Problems
  { id: 4, title: "Simple Circle Area Example", type: "video", duration: "8 min", section: "Area Problems", videoId: "iD5FSvzmEqY", hero: { tagline: "PRACTICE", subtitle: "Basic area calculations" } },
  { id: 5, title: "Complex Circle Area Example", type: "video", duration: "10 min", section: "Area Problems", videoId: "qEtS0mW7dH8", hero: { tagline: "ADVANCED", subtitle: "Multi-step area problems" } },
  // Section 3: Circumference & Arc Length
  {
    id: 6,
    title: "Arc Length",
    type: "lesson",
    duration: "5 min",
    section: "Circumference & Arc Length",
    hero: {
      tagline: "PART OF THE CIRCLE",
      subtitle: "Measuring curved distance"
    },
    content: {
      blocks: [
        { type: "text", content: "**Arc Length** is the distance along the curved part of a circle — a \"portion of the circumference.\"" },
        { type: "arcLength", notGiven: true },
        { type: "text", content: "The Arc Length is a **fraction** of the full Circumference. The fraction equals the central angle divided by 360°." },
        { type: "fractionEquation",
          label: "Arc Length Formula",
          leftNumerator: "Arc Length",
          leftDenominator: "Circumference",
          leftColor: "#2563eb",
          rightNumerator: "Central Angle",
          rightDenominator: "360°",
          rightColor: "#7c3aed"
        },
        { type: "arcLengthExample" }
      ]
    }
  },
  { id: 7, title: "Simple Circumference Example", type: "video", duration: "8 min", section: "Circumference & Arc Length", videoId: "rylb6ba8CXY", hero: { tagline: "PRACTICE", subtitle: "Basic circumference" } },
  { id: 8, title: "Conceptual Arc Length Example", type: "video", duration: "8 min", section: "Circumference & Arc Length", videoId: "FogWIBHFRVM", hero: { tagline: "CONCEPT", subtitle: "Understanding arc length" } },
  { id: 9, title: "Calculating Arc Length Example", type: "video", duration: "10 min", section: "Circumference & Arc Length", videoId: "dINd03hAQc0", hero: { tagline: "CALCULATION", subtitle: "Arc length computation" } },
  // Section 4: Sector Area
  {
    id: 10,
    title: "Sector Area",
    type: "lesson",
    duration: "5 min",
    section: "Sector Area",
    hero: {
      tagline: "PIE SLICE",
      subtitle: "Area of a circle portion"
    },
    content: {
      blocks: [
        { type: "text", content: "A **Sector** is a \"pie-slice\" region of a circle, bounded by two radii and an arc." },
        { type: "sectorArea", notGiven: true },
        { type: "text", content: "Just like Arc Length, Sector Area is a **fraction** of the circle's total area. The fraction uses the same ratio: Central Angle ÷ 360°." },
        { type: "fractionEquation",
          label: "Sector Area Formula",
          leftNumerator: "Sector Area",
          leftDenominator: "Circle Area",
          leftColor: "#2563eb",
          rightNumerator: "Central Angle",
          rightDenominator: "360°",
          rightColor: "#7c3aed"
        },
        { type: "sectorAreaExample" }
      ]
    }
  },
  { id: 11, title: "Simple Sector Area Example", type: "video", duration: "8 min", section: "Sector Area", videoId: "BCj2GzLu84I", hero: { tagline: "PRACTICE", subtitle: "Basic sector calculations" } },
  { id: 12, title: "Complex Sector Area Example", type: "video", duration: "10 min", section: "Sector Area", videoId: "kInBtmMmsn8", hero: { tagline: "ADVANCED", subtitle: "Multi-step sector problems" } },
  // Section 5: Equation of a Circle
  {
    id: 13,
    title: "Standard Form of a Circle Equation",
    type: "lesson",
    duration: "6 min",
    section: "Equation of a Circle",
    hero: {
      tagline: "(x-h)² + (y-k)² = r²",
      subtitle: "The circle equation"
    },
    content: {
      blocks: [
        { type: "text", content: "The **Standard Form** of a circle equation lets you immediately identify the **Center** and **Radius**." },
        { type: "circleEquation", notGiven: true },
        { type: "list", items: [
          "**(h, k)** is the **Center** of the circle",
          "**r** is the **Radius** (note: the equation shows **r²**, so take the square root!)"
        ]},
        { type: "text", content: "⚠️ **Watch the Signs!** Inside the parentheses, the signs are **OPPOSITE** of the center coordinates." },
        { type: "circleStandardFormExample" },
        { type: "text", content: "This sign flip is a **common SAT trap** — always double-check your signs!" }
      ]
    }
  },
  { id: 14, title: "Simple Extracting Center & Radius from Standard Form", type: "video", duration: "8 min", section: "Equation of a Circle", videoId: "FyCLcqWY2H0", hero: { tagline: "PRACTICE", subtitle: "Reading standard form" } },
  { id: 15, title: "Simple Extracting Diameter from Standard Form", type: "video", duration: "8 min", section: "Equation of a Circle", videoId: "75d4HDTqVqg", hero: { tagline: "PRACTICE", subtitle: "Finding diameter" } },
  { id: 16, title: "Complex Extracting Diameter (Conceptual Method)", type: "video", duration: "10 min", section: "Equation of a Circle", videoId: "h2q3pRkWHc4", hero: { tagline: "CONCEPTUAL", subtitle: "Understanding diameter" } },
  { id: 17, title: "Complex Extracting Diameter (Plug-In Method)", type: "video", duration: "10 min", section: "Equation of a Circle", videoId: "qpYkCKjZzrA", hero: { tagline: "PLUG-IN", subtitle: "Strategic approach" } },
  // Section 6: Circle Transformations
  {
    id: 18,
    title: "Transformations of Circles",
    type: "lesson",
    duration: "5 min",
    section: "Circle Transformations",
    hero: {
      tagline: "MOVE THE CIRCLE",
      subtitle: "Shifting center position"
    },
    content: {
      blocks: [
        { type: "text", content: "A **Translation** moves the entire circle without changing its size. Only the **Center** changes — the **Radius** stays the same." },
        { type: "circleTransformRules" },
        { type: "circleTransformExample" },
        { type: "text", content: "**Remember:** The sign inside the equation is always **OPPOSITE** the center's coordinate value." }
      ]
    }
  },
  { id: 19, title: "Simple Circle Transformations Example", type: "video", duration: "8 min", section: "Circle Transformations", videoId: "bO3UP6O7U4M", hero: { tagline: "PRACTICE", subtitle: "Basic transformations" } },
  { id: 20, title: "Complex Circle Transformations Example", type: "video", duration: "10 min", section: "Circle Transformations", videoId: "Ggb2uBweoDg", hero: { tagline: "ADVANCED", subtitle: "Complex transformations" } },
  // Section 7: Domain, Range & Intersections
  {
    id: 21,
    title: "Domain & Range of a Circle",
    type: "lesson",
    duration: "5 min",
    section: "Domain, Range & Intersections",
    hero: {
      tagline: "BOUNDARIES",
      subtitle: "How far the circle extends"
    },
    content: {
      blocks: [
        { type: "text", content: "For a circle with **Center (h, k)** and **Radius r**, the Domain and Range tell you how far the circle extends." },
        { type: "domainRangeFormulas" },
        { type: "text", content: "**Intersecting the Axes:**" },
        { type: "axisIntersectionRules" },
        { type: "domainRangeExample" }
      ]
    }
  },
  { id: 22, title: "Determining Domain & Range Example", type: "video", duration: "10 min", section: "Domain, Range & Intersections", videoId: "U7bhoyuhCwA", hero: { tagline: "PRACTICE", subtitle: "Finding domain & range" } },
  { id: 23, title: "Intersecting Y-Axis at Exactly One Point Example", type: "video", duration: "8 min", section: "Domain, Range & Intersections", videoId: "RV6vzQq3fro", hero: { tagline: "TANGENT", subtitle: "Single intersection" } },
  { id: 24, title: "Intersecting Y-Axis at One Point (DESMOS Method)", type: "video", duration: "8 min", section: "Domain, Range & Intersections", videoId: "0dGx4haTSfk", hero: { tagline: "DESMOS METHOD", subtitle: "Visual approach" } },
  // Section 8: Converting to Standard Form
  {
    id: 25,
    title: "Completing the Square for Circles",
    type: "lesson",
    duration: "7 min",
    section: "Converting to Standard Form",
    hero: {
      tagline: "CONVERT THE FORM",
      subtitle: "From expanded to standard"
    },
    content: {
      blocks: [
        { type: "text", content: "Sometimes a circle equation is given in **Expanded Form**. You must convert it to **Standard Form** to find the Center and Radius." },
        { type: "completingSquareSteps" },
        { type: "completingSquareExample" }
      ]
    }
  },
  { id: 26, title: "Deriving Standard Form to Determine Radius #1", type: "video", duration: "10 min", section: "Converting to Standard Form", videoId: "Ivt8GlJNN54", hero: { tagline: "ALGEBRAIC", subtitle: "Finding radius #1" } },
  { id: 27, title: "Deriving Standard Form — Radius #1 (DESMOS)", type: "video", duration: "8 min", section: "Converting to Standard Form", videoId: "2QLT2GBx4J8", hero: { tagline: "DESMOS METHOD", subtitle: "Visual radius finding" } },
  { id: 28, title: "Deriving Standard Form — Center #1 (DESMOS)", type: "video", duration: "8 min", section: "Converting to Standard Form", videoId: "adDR0DIhsiU", hero: { tagline: "DESMOS METHOD", subtitle: "Visual center finding" } },
  { id: 29, title: "Deriving Standard Form to Determine Radius #2", type: "video", duration: "10 min", section: "Converting to Standard Form", videoId: "SZ49_TM1cRk", hero: { tagline: "ALGEBRAIC", subtitle: "Finding radius #2" } },
  { id: 30, title: "Deriving Standard Form — Radius #2 (DESMOS)", type: "video", duration: "8 min", section: "Converting to Standard Form", videoId: "MuVouk8s0R4", hero: { tagline: "DESMOS METHOD", subtitle: "More visual radius" } },
  { id: 31, title: "Deriving Standard Form — Center #2 (DESMOS)", type: "video", duration: "8 min", section: "Converting to Standard Form", videoId: "maCBR4AUK8g", hero: { tagline: "DESMOS METHOD", subtitle: "More visual center" } },
  // Section 9: Tangent Lines
  {
    id: 32,
    title: "Tangent Lines to a Circle",
    type: "lesson",
    duration: "5 min",
    section: "Tangent Lines",
    hero: {
      tagline: "TOUCHES ONCE",
      subtitle: "Lines that kiss the circle"
    },
    content: {
      blocks: [
        { type: "text", content: "A **Tangent Line** is a line that touches a circle at exactly **ONE point**, called the **Point of Tangency**." },
        { type: "tangentLine" },
        { type: "formula", label: "Key Rule", content: "The Tangent Line is PERPENDICULAR to the Radius at the Point of Tangency" },
        { type: "text", content: "This means the tangent and radius form a **90° angle** where they meet." },
        { type: "text", content: "**Why This Matters on the SAT:**" },
        { type: "list", items: [
          "If you know the radius to a point, the tangent at that point is **perpendicular** to it",
          "Perpendicular lines have **negative reciprocal slopes** (if one slope is m, the other is −1/m)",
          "This often creates **right triangles** you can solve with the Pythagorean Theorem"
        ]}
      ]
    }
  },
  { id: 33, title: "Tangent Line to a Circle Example", type: "video", duration: "10 min", section: "Tangent Lines", videoId: "CYnV3su1S5A", hero: { tagline: "PRACTICE", subtitle: "Working with tangents" } }
];
