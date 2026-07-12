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
        { type: "text", content: "A **circle** is defined as the set of all points that are the **same distance** from a fixed center point. That simple definition — \"every point equally far from the middle\" — is what gives circles their perfect symmetry. No corners, no edges, just smooth curvature. Wheels, coins, pizza, clock faces — circles are everywhere in daily life, and they're everywhere on the SAT too. Circle questions appear in nearly every test, so understanding the vocabulary is your first step." },
        { type: "circleParts" },
        { type: "text", content: "Every circle problem on the SAT uses these key parts. Learn them so well that you can identify them instantly in any diagram:" },
        { type: "list", items: [
          "**Center** — The fixed point in the exact middle. Every point on the circle is the same distance from the center. On the SAT, the center is often given as coordinates like (h, k).",
          "**Radius (r)** — The distance from the center to any point on the circle's edge. Think of it as a spoke on a bicycle wheel. All radii of the same circle are equal — that's the whole definition of a circle.",
          "**Diameter (d)** — The distance across the circle **through the center**. It's the longest possible straight line inside a circle. A diameter is essentially two radii placed end-to-end.",
          "**Circumference** — The distance **around** the circle — its perimeter. If you \"unrolled\" the circle into a straight line, that line's length would be the circumference.",
          "**Area** — The amount of space **enclosed inside** the circle. Think of it as how much paint you'd need to fill the circle completely."
        ]},
        { type: "formula", label: "Key Relationship", content: "Diameter = 2 × Radius   →   d = 2r" },
        { type: "text", content: "This relationship between diameter and radius is the **first thing to check** in every circle problem. The SAT constantly switches between giving you the radius and the diameter, and every formula uses the radius. So if you're given the diameter, your very first move should always be: **divide by 2 to get the radius**. Forgetting this step is the single most common error on circle problems." },
        { type: "text", content: "**Why the SAT loves circles:** Circles combine measurement (area, circumference), algebra (the circle equation), and proportional reasoning (arcs and sectors). A single circle problem can test multiple skills at once, making circles one of the highest-value topics to master." },
        { type: "text", content: "**Real-world connection:** Engineers design circular gears, wheels, and pipes because the circle's constant radius means every rotation covers the same distance. When a car tire has a radius of 1 foot, one full rotation moves the car forward by exactly 2π feet (the circumference). That's the circle's vocabulary in action — and the same vocabulary you'll use on test day." }
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
        { type: "text", content: "The **area of a circle** measures how much space is enclosed within the circle's boundary. Think of it as the amount of material needed to make a circular tabletop, or the amount of grass inside a circular garden. The formula is one of the most recognizable in all of math — and it appears on the SAT reference sheet — but understanding **why** it works builds the intuition you need for harder problems." },
        { type: "circleArea" },
        { type: "text", content: "The formula uses π (pi ≈ 3.14159...) because every circle's area relates to its radius through this universal constant. Here's an intuitive way to think about it: if you cut a circle into many thin pie slices and rearrange them, they form a shape that's approximately a rectangle with height r and width πr. The area of that rectangle is πr × r = πr². The more slices you make, the closer it gets to a perfect rectangle." },
        { type: "text", content: "**Step one in every area problem: find the radius.** If the problem gives you the **diameter**, divide by 2 first. If it gives you the **circumference**, work backward using C = 2πr. The SAT almost never hands you the radius directly — it makes you extract it from other information." },
        { type: "example", title: "Given the Radius", content: "A circle has a **radius of 5**.\n\nArea = π(5)² = **25π** ≈ 78.54 square units\n\nLeave the answer as 25π unless the problem asks for a decimal approximation." },
        { type: "example", title: "Given the Diameter (The Classic Trap)", content: "A circle has a **diameter of 10**.\n\n**First:** Radius = 10 ÷ 2 = 5\n**Then:** Area = π(5)² = **25π**\n\nThe trap answer is π(10)² = 100π — what you get if you forget to convert diameter to radius. The SAT puts this wrong answer in the choices every time." },
        { type: "text", content: "**Critical insight: area grows with the SQUARE of the radius.** This non-linear relationship is tested frequently on the SAT and catches students who think proportionally but not quadratically:" },
        { type: "example", title: "The Scaling Surprise", content: "If the radius **doubles** (×2), the area becomes **4× larger** (2² = 4), not 2×.\nIf the radius **triples** (×3), the area becomes **9× larger** (3² = 9), not 3×.\nIf the radius is **halved** (×½), the area becomes **¼ as large** (½² = ¼).\n\nThe SAT loves asking: \"If the radius of a circle is doubled, what happens to the area?\" The answer is always the scale factor squared." },
        { type: "text", content: "**SAT strategy for \"working backward\" problems:** Sometimes the SAT gives you the area and asks for the radius. Just reverse the formula: if A = πr², then r² = A/π, and r = √(A/π). For example, if A = 49π, then r² = 49, so r = 7." },
        { type: "text", content: "**Real-world connection:** Pizza pricing illustrates area scaling perfectly. A 16-inch pizza (diameter) has an area of π(8)² = 64π square inches. A 12-inch pizza has π(6)² = 36π. The 16-inch pizza is 78% larger in area, even though the diameter is only 33% larger. That's the power of squaring — and exactly the kind of reasoning the SAT tests." }
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
        { type: "text", content: "The **circumference** is the distance around a circle — it's the circle's version of a perimeter. Imagine wrapping a string tightly around a circular plate and then straightening the string out — the length of that string is the circumference. This measurement is fundamental to the SAT and connects directly to arc length problems you'll see later." },
        { type: "formula", label: "Using Radius", content: "C = 2πr" },
        { type: "formula", label: "Using Diameter", content: "C = πd" },
        { type: "text", content: "These two formulas are actually the same thing, since d = 2r. Use **C = πd** when you're given the diameter, and **C = 2πr** when you're given the radius. Choosing the right one saves a step and reduces errors." },
        { type: "text", content: "**The deep meaning of π:** The number π (≈ 3.14159) is the **ratio** of any circle's circumference to its diameter: π = C/d. This is true for every circle in the universe, from a coin to a planet's orbit. That's why π appears in the formula — it's the universal \"circle constant.\" When you multiply the diameter by π, you're converting a straight-line distance into a curved distance." },
        { type: "example", title: "Example: Radius Given", content: "A circle has a **radius of 7**.\n\nUsing radius: C = 2π(7) = **14π** ≈ 43.98\n\nUsing diameter (d = 14): C = π(14) = **14π** ≈ 43.98 ✓\n\nSame answer both ways — as expected." },
        { type: "text", content: "**How circumference differs from area on the SAT:** Circumference grows **linearly** with the radius (double r → double C), while area grows **quadratically** (double r → quadruple A). The SAT tests whether you know this distinction. If a problem asks how the circumference changes when the radius changes, think linearly. If it asks about area, think quadratically." },
        { type: "example", title: "SAT Pattern: Working Backward", content: "\"A circle has a circumference of 20π. What is its area?\"\n\nStep 1: Find r from circumference: 20π = 2πr → r = 10\nStep 2: Find area: A = π(10)² = **100π**\n\nThe SAT frequently chains circumference and area together. The radius is always the bridge between them." },
        { type: "text", content: "**SAT trap:** Don't confuse circumference (a length, measured in units like cm) with area (a space, measured in square units like cm²). If your answer to a circumference question has squared units, something went wrong." },
        { type: "text", content: "**Real-world connection:** A bicycle wheel with a 26-inch diameter rolls forward π × 26 ≈ 81.7 inches per revolution. Odometers count rotations and multiply by the circumference to calculate distance traveled. Understanding circumference literally tells you how far a wheel moves — and gives you points on the SAT." }
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
        { type: "text", content: "**Arc length** is the distance along the curved part of a circle — literally a \"piece of the circumference.\" Think of a slice of pizza: the curved crust edge is an arc. If the whole pizza's crust is the circumference, then the crust on your one slice is the arc length. The SAT tests arc length frequently because it combines two skills: knowing the circumference formula and understanding proportional reasoning." },
        { type: "arcLength", notGiven: true },
        { type: "text", content: "The key insight is that arc length is a **fraction** of the full circumference, and that fraction is determined by the **central angle** — the angle at the center of the circle that \"opens up\" to create the arc. A bigger angle means a bigger fraction of the circle, which means a longer arc." },
        { type: "fractionEquation",
          label: "Arc Length Formula",
          leftNumerator: "Arc Length",
          leftDenominator: "Circumference",
          leftColor: "#2563eb",
          rightNumerator: "Central Angle",
          rightDenominator: "360°",
          rightColor: "#7c3aed"
        },
        { type: "text", content: "**How to think about it:** A full circle is 360°. If your central angle is 90°, that's 90/360 = ¼ of the circle, so the arc is ¼ of the circumference. If the angle is 180°, it's half the circumference. If it's 60°, it's 1/6 of the circumference. The fraction always equals the angle divided by 360° — simple proportional reasoning." },
        { type: "arcLengthExample" },
        { type: "text", content: "**SAT problem-solving strategy:** (1) Identify the radius (convert from diameter if needed). (2) Calculate the full circumference: C = 2πr. (3) Find the fraction: central angle ÷ 360°. (4) Multiply: Arc Length = fraction × circumference. These four steps solve every arc length problem on the SAT." },
        { type: "text", content: "**Common SAT traps:** (1) Confusing arc length with the straight-line **chord** connecting the arc's endpoints — the arc is curved and always longer than the chord. (2) Forgetting to convert diameter to radius before finding circumference. (3) Using the arc's inscribed angle instead of the central angle — they're different! The central angle is at the center; an inscribed angle is on the circle and equals half the central angle." },
        { type: "text", content: "**Real-world connection:** When a car drives around a circular roundabout, the distance it travels is an arc length — determined by how many degrees of the circle it covers. GPS navigation systems calculate these curved distances constantly. Same math, different context." }
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
        { type: "text", content: "A **sector** is a \"pie-slice\" shaped region of a circle — the area bounded by two radii and the arc connecting them. If arc length was about the curved **edge** of the slice, sector area is about the **entire surface** of the slice. Picture cutting a pizza: each slice is a sector, and the area of that slice is the sector area. The SAT tests sectors because they combine area formulas with proportional reasoning in a way that requires careful thinking." },
        { type: "sectorArea", notGiven: true },
        { type: "text", content: "The logic is identical to arc length: sector area is a **fraction** of the circle's total area, and the fraction is determined by the central angle divided by 360°. A 90° sector is ¼ of the total area. A 180° sector is ½. The pattern is consistent and predictable." },
        { type: "fractionEquation",
          label: "Sector Area Formula",
          leftNumerator: "Sector Area",
          leftDenominator: "Circle Area",
          leftColor: "#2563eb",
          rightNumerator: "Central Angle",
          rightDenominator: "360°",
          rightColor: "#7c3aed"
        },
        { type: "text", content: "**Step-by-step strategy:** (1) Find the radius. (2) Calculate the full circle area: A = πr². (3) Find the fraction: central angle ÷ 360°. (4) Multiply: Sector Area = fraction × πr². This process mirrors arc length exactly — the only difference is you start with area instead of circumference." },
        { type: "sectorAreaExample" },
        { type: "text", content: "**The powerful connection between arc length and sector area:** Notice that both use the same fraction (central angle ÷ 360°). Arc length applies that fraction to the circumference; sector area applies it to the total area. If you understand one, you understand both. The SAT sometimes asks for both in the same problem — just apply the same fraction to different base measurements." },
        { type: "text", content: "**SAT traps to watch for:** (1) Giving you the diameter and expecting you to find the radius before squaring — forgetting to halve the diameter is the most common error. (2) Asking for the area of the region OUTSIDE the sector (the \"rest of the pizza\") — subtract the sector area from the total area. (3) Giving the arc length and asking for the sector area — you'll need to work backward to find the radius first." },
        { type: "text", content: "**Real-world connection:** Sprinkler coverage is a perfect sector example. A sprinkler that rotates 120° and sprays 15 feet covers a sector with central angle 120° and radius 15 feet. The watered area is (120/360) × π(15)² = (1/3)(225π) = 75π ≈ 235.6 square feet. Same formula, real application." }
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
        { type: "text", content: "Up to this point, we've worked with circles geometrically — measuring areas, circumferences, arcs, and sectors. Now we shift to the **algebraic** side: writing an equation that describes a circle on the coordinate plane. The **Standard Form** of a circle equation is your tool for this, and the SAT tests it heavily. It lets you look at an equation and instantly read off the circle's **center** and **radius** — no graphing needed." },
        { type: "circleEquation", notGiven: true },
        { type: "list", items: [
          "**(h, k)** is the **center** of the circle — the fixed point everything revolves around",
          "**r** is the **radius** — but notice the equation shows **r²** on the right side, so you must take the **square root** to find the actual radius"
        ]},
        { type: "text", content: "**The logic behind the formula:** The equation says \"the distance from any point (x, y) to the center (h, k) equals r.\" It's actually the distance formula in disguise — just squared on both sides to remove the square root. Every point (x, y) that satisfies the equation lies on the circle." },
        { type: "text", content: "**The sign trap — the #1 SAT mistake on this topic:** Inside the parentheses, the signs are **OPPOSITE** of the center's coordinates. If the center is at (3, -4), the equation reads (x **-** 3)² + (y **+** 4)² = r². The minus becomes plus, the plus becomes minus. This happens because the formula uses subtraction: (x - h) and (y - k). When k is negative, (y - (-4)) simplifies to (y + 4). The SAT exploits this confusion relentlessly." },
        { type: "circleStandardFormExample" },
        { type: "text", content: "**How to avoid the sign trap:** After reading the equation, always do a \"sign check.\" If you see (x - 3), the center's x-coordinate is +3 (same sign in parentheses means positive). If you see (y + 4), the center's y-coordinate is -4 (opposite of what's shown). Practice this until it's automatic." },
        { type: "text", content: "**SAT question patterns:** (1) \"What is the center and radius?\" — read directly from standard form. (2) \"Does the point (a, b) lie on the circle?\" — plug (a, b) into the equation and check if both sides are equal. (3) \"Write the equation of a circle with center (h, k) and radius r\" — plug into the standard form template." },
        { type: "text", content: "**Don't forget the square root:** The right side of the equation is r², not r. If the equation says = 49, the radius is 7, not 49. If it says = 12, the radius is √12 = 2√3. The SAT will always include the un-square-rooted value as a wrong answer choice." },
        { type: "text", content: "**Real-world connection:** GPS systems model satellite coverage areas as circles on a map. The center is the satellite's ground position, and the radius is its broadcast range. The standard form equation tells you whether a given location falls within coverage — exactly how the SAT asks \"does point P lie on the circle?\"" }
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
        { type: "text", content: "A **translation** slides the entire circle to a new position on the coordinate plane without changing its shape or size. Imagine picking up a coin and placing it somewhere else on the table — it's still the same coin, just in a different spot. Mathematically, only the **center** changes; the **radius** stays exactly the same. The SAT tests this by asking you to write the new equation after a circle is shifted." },
        { type: "text", content: "**How translations affect the equation:** When a circle moves **right by a units**, the center's x-coordinate increases by a, so h becomes h + a. When it moves **up by b units**, the center's y-coordinate increases by b, so k becomes k + b. Left and down work in reverse — subtract instead of add. The radius term (r²) never changes." },
        { type: "circleTransformRules" },
        { type: "circleTransformExample" },
        { type: "text", content: "**The sign trap returns:** Remember, the sign inside the parentheses is **opposite** the center's coordinate. If the center moves to (5, -3), the equation uses (x - 5) and (y + 3). Every translation problem is really a sign problem in disguise. Double-check your signs after every shift." },
        { type: "text", content: "**SAT question patterns for transformations:** (1) \"The circle is shifted 3 units right and 2 units down — write the new equation.\" (2) \"Circle A has equation ___ and Circle B has equation ___. Describe the transformation from A to B.\" (3) \"After a transformation, the circle passes through point P. What is the new equation?\" All three require you to adjust (h, k) while keeping r² fixed." },
        { type: "text", content: "**Common SAT mistakes:** (1) Changing the radius when only the position changes — translations never alter size. (2) Moving the center in the wrong direction — \"right\" increases x, \"up\" increases y. (3) Forgetting the sign flip in the equation — if the new center is (5, -3), write (x - 5)² + (y + 3)², NOT (x + 5)² + (y - 3)²." },
        { type: "text", content: "**Strategy tip:** When the SAT describes a transformation in words (\"shifted 4 left and 6 up\"), first calculate the new center coordinates on scratch paper, then plug them into the standard form equation. Don't try to modify the equation directly — it's too easy to flip a sign." },
        { type: "text", content: "**Real-world connection:** Video game developers use circle translations constantly. When a character moves, their \"hit box\" (often a circle) translates with them — same radius, different center. The game engine recalculates the circle equation every frame to check for collisions. Same math, different context." }
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
        { type: "text", content: "The **domain** of a circle tells you how far it extends **horizontally** (left to right), and the **range** tells you how far it extends **vertically** (bottom to top). Think of it this way: if you shined a flashlight straight down onto a circle, the shadow on the x-axis is the domain. If you shined it from the side, the shadow on the y-axis is the range. These concepts connect circles to function analysis — a topic the SAT tests across multiple question types." },
        { type: "text", content: "For a circle with **center (h, k)** and **radius r**, the domain and range are determined by how far the radius stretches from the center in each direction:" },
        { type: "domainRangeFormulas" },
        { type: "text", content: "**The intuition:** The center is at (h, k). The circle extends r units in every direction. So horizontally, it goes from h - r (leftmost point) to h + r (rightmost point). Vertically, it goes from k - r (bottom) to k + r (top). That's it — no complex formula needed, just center ± radius." },
        { type: "text", content: "**Intersecting the Axes — a key SAT topic:**" },
        { type: "axisIntersectionRules" },
        { type: "text", content: "**How to determine axis intersections:** A circle intersects the **x-axis** if its center is close enough vertically — specifically, if |k| ≤ r (the center's distance from the x-axis is less than or equal to the radius). Similarly, it intersects the **y-axis** if |h| ≤ r. If the distance equals the radius exactly, the circle **touches** the axis at one point (tangent). If the distance is less, it crosses at **two points**. If greater, no intersection." },
        { type: "domainRangeExample" },
        { type: "text", content: "**SAT question patterns:** (1) \"What is the domain/range of the circle?\" — use center ± radius. (2) \"Does the circle intersect the x-axis?\" — check if |k| ≤ r. (3) \"At how many points does the circle cross the y-axis?\" — check if |h| < r (two points), |h| = r (one point), or |h| > r (none)." },
        { type: "text", content: "**Common SAT trap:** Students sometimes confuse the domain/range of a circle with the domain/range of a function. A circle is NOT a function (it fails the vertical line test), but it still has a domain and range — they just describe the x- and y-extent rather than input-output pairs." }
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
        { type: "text", content: "Sometimes the SAT gives you a circle equation that doesn't look like the clean standard form you've learned. Instead of (x - h)² + (y - k)² = r², you see something messy like **x² + y² - 6x + 4y - 12 = 0**. This is the **expanded (general) form**, and you can't read the center or radius from it directly. To extract that information, you need a technique called **completing the square** — one of the most important algebraic tools on the entire SAT." },
        { type: "text", content: "**Why does this come up?** Because expanding (x - 3)² gives x² - 6x + 9. The standard form is \"hiding\" inside the expanded form, and completing the square reverses the expansion to recover it. Think of it as \"un-FOILing\" — you're packaging loose terms back into neat squared binomials." },
        { type: "completingSquareSteps" },
        { type: "text", content: "**The step-by-step process:** (1) Group x terms together and y terms together. Move the constant to the right side. (2) For each group, take **half** of the linear coefficient and **square it** — this is the number you add to both sides. (3) Factor each group into a perfect square binomial: (x - h)² and (y - k)². (4) Read off the center (h, k) and radius r = √(right side)." },
        { type: "completingSquareExample" },
        { type: "text", content: "**The key move that students forget:** Whatever you add to the left side, you MUST add to the right side too. This preserves the equation's balance. If you add 9 to the x-group and 4 to the y-group on the left, you must also add 9 + 4 = 13 to the right side. Forgetting this step is the #1 algebraic error on circle problems." },
        { type: "text", content: "**SAT strategy — the DESMOS shortcut:** On the digital SAT, you can type the expanded equation directly into DESMOS, and it will graph the circle for you. You can then read the center and estimate the radius visually. However, completing the square algebraically gives you exact values and is faster once you've practiced it." },
        { type: "text", content: "**SAT question patterns:** (1) \"What is the radius of the circle x² + y² + 8x - 6y = 0?\" — complete the square, find r. (2) \"What is the center?\" — complete the square, read (h, k). (3) \"What is the area/circumference?\" — complete the square to find r, then apply πr² or 2πr. The SAT rarely asks you to complete the square for its own sake — it's always a means to an end." },
        { type: "text", content: "**Common SAT traps:** (1) If there's a coefficient in front of x² or y² (like 2x² + 2y²...), you must **divide the entire equation** by that coefficient first. Standard form requires the coefficients of x² and y² to both be 1. (2) Watch for sign errors when factoring — (x² - 6x + 9) factors to (x - 3)², not (x + 3)². (3) Don't forget to square root the right side to get r — if the right side is 25, the radius is 5." }
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
        { type: "text", content: "A **tangent line** is a line that touches a circle at exactly **one point** — it \"kisses\" the circle and immediately moves away. That single contact point is called the **point of tangency**. Imagine a ball sitting on a flat floor: the floor is tangent to the ball, touching it at exactly one point on the bottom. This concept bridges circle geometry and line geometry, and the SAT uses it to create some of the most satisfying (and tricky) problems on the test." },
        { type: "tangentLine" },
        { type: "formula", label: "Key Rule", content: "The Tangent Line is PERPENDICULAR to the Radius at the Point of Tangency" },
        { type: "text", content: "This perpendicularity rule is the foundation of every tangent line problem. At the point where the tangent touches the circle, the radius and the tangent form a perfect **90° angle**. This isn't just a coincidence — it's a geometric necessity. If the angle were anything other than 90°, the line would cut into the circle (becoming a secant) or miss it entirely." },
        { type: "text", content: "**Why this matters on the SAT — three powerful consequences:**" },
        { type: "list", items: [
          "**Right triangles appear:** Draw the radius to the tangent point, and you've created a 90° angle. If a line segment connects the center to any point on the tangent line, you have a right triangle — and the Pythagorean Theorem applies.",
          "**Slope relationship:** Perpendicular lines have **negative reciprocal slopes**. If the radius has slope m, the tangent has slope −1/m. The SAT frequently asks you to find the tangent line's equation using this relationship.",
          "**Distance calculations:** The shortest distance from the center of a circle to a tangent line always equals the radius. This fact helps you determine if a given line is tangent, secant, or misses the circle entirely."
        ]},
        { type: "text", content: "**SAT question patterns:** (1) \"Find the equation of the tangent line at point P.\" — Find the slope of the radius to P, take the negative reciprocal, use point-slope form. (2) \"A tangent from external point P to the circle has length L. Find L.\" — Draw the radius to the tangent point, creating a right triangle with the line from P to the center as the hypotenuse. Apply the Pythagorean Theorem. (3) \"Is this line tangent to the circle?\" — Find the distance from the center to the line; if it equals the radius, it's tangent." },
        { type: "example", title: "Classic SAT Setup", content: "A circle has center (0, 0) and radius 5. A tangent line touches the circle at point (3, 4). Find the tangent line's slope.\n\nRadius slope from (0,0) to (3,4) = 4/3\nTangent is perpendicular → slope = −3/4\n\nThe radius slope and tangent slope are negative reciprocals — always!" },
        { type: "text", content: "**Common SAT trap:** Students sometimes confuse tangent lines with secant lines. A **secant** crosses through the circle at two points; a **tangent** touches at exactly one point. If you calculate the distance from the center to the line and it's **less than** the radius, the line is a secant. If it **equals** the radius, it's a tangent. If it's **greater**, the line misses the circle entirely." },
        { type: "text", content: "**Real-world connection:** When you ride a bicycle, each wheel is tangent to the ground. The axle (center) is exactly one radius above the ground (tangent line), and the ground makes a 90° angle with the spoke pointing straight down (radius). Engineers use this tangent-radius relationship when designing gears, pulleys, and roller coasters — anywhere a curved surface meets a flat one." }
      ]
    }
  },
  { id: 33, title: "Tangent Line to a Circle Example", type: "video", duration: "10 min", section: "Tangent Lines", videoId: "CYnV3su1S5A", hero: { tagline: "PRACTICE", subtitle: "Working with tangents" } },
  // Section 10: Circle Angles
  {
    id: 34,
    title: "Circle Angles: Inscribed & Tangent",
    type: "lesson",
    duration: "7 min",
    section: "Circle Angles",
    hero: {
      tagline: "HALVES AND DOUBLES",
      subtitle: "Angles from arcs, the rim, and tangents"
    },
    content: {
      blocks: [
        { type: "text", content: "So far, circle problems have been about **length and area** — radius, circumference, arcs, sectors. This lesson is about **angles**: how the corners of a figure drawn inside or touching a circle get their measures. Two ideas do almost all the work — where the angle's vertex sits (at the **center** or on the **rim**), and what a **tangent** line does when it meets a radius." },
        { type: "text", content: "**The one habit that unlocks these problems:** every point marked on the circle deserves a radius drawn to it. All radii are equal, so drawing them fills the figure with isosceles triangles whose base angles come for free. Circle angle figures almost always arrive unfinished — the segment that solves the problem is the one you draw yourself." },
        { type: "formula", label: "Central Angle", content: "A central angle (vertex AT the center) equals the measure of the arc it intercepts." },
        { type: "formula", label: "Inscribed Angle", content: "An inscribed angle (vertex ON the circle) is HALF its intercepted arc — half the central angle standing on the same arc." },
        { type: "text", content: "That single 2-to-1 exchange rate produces the results the SAT reuses most:" },
        { type: "list", items: [
          "**Same-arc inscribed angles are equal.** Any two inscribed angles that open onto the same arc are the same size, because both equal half of that one arc.",
          "**An angle inscribed in a semicircle is 90°.** When the arc is a full half-circle (its 'central angle' is the 180° diameter), the inscribed angle is half of 180°, a perfect right angle. Spot a diameter with a third point on the circle, and you have a right triangle.",
          "**A tangent is perpendicular to the radius at the point of tangency.** The moment a problem says 'tangent,' draw the radius to the contact point — it lands at a clean 90° angle, and that right angle is the only fact tangency gives you."
        ]},
        { type: "formula", label: "Tangent Rule", content: "A tangent line meets the radius at the point of tangency at a 90° angle." },
        { type: "example", title: "Angle in a Semicircle", content: "AB is a diameter and C is a point on the circle. Since the angle inscribed in a semicircle is 90°, angle ACB = 90°. If angle ABC = 35°, then the triangle's angles sum to 180°, so angle BAC = 180 - 90 - 35 = **55°**. The diameter handed you the right angle; the triangle sum did the rest." },
        { type: "example", title: "Same Arc, Same Angle", content: "Two inscribed angles both open onto arc PQ. One measures 28°. The other must also measure **28°** — same arc means same half-arc, so the two inscribed angles are identical, no matter where their vertices sit on the rim." },
        { type: "text", content: "**Before you convert, name your view.** Label each angle as central (C) or inscribed (I) first. Central-view sees the whole arc; rim-view sees half. Writing the ÷2 or ×2 as its own step is what keeps you from landing on an answer that is exactly double or half the correct one — those wrong values are always sitting in the choices." },
        { type: "text", content: "**Real-world connection:** a camera positioned anywhere along a circular balcony that frames the same stage-front arc captures it at the same angle of view — the same-arc inscribed-angle rule is why every seat on that curve sees the stage span identically." }
      ]
    }
  }
];
