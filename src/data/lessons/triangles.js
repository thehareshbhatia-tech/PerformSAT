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
        { type: "text", content: "A **triangle** is the simplest polygon — just three sides and three angles — yet it's the foundation of nearly everything in geometry. Bridges, roof trusses, phone towers, even the structural frames of skyscrapers all rely on triangles because they're the only polygon that is naturally **rigid**. A square can be squished into a diamond, but a triangle holds its shape. That structural importance is mirrored on the SAT: triangles appear in roughly **one-third** of all geometry questions, so mastering them is non-negotiable." },
        { type: "formula", label: "Key Property", content: "Interior angles always sum to 180°" },
        { type: "text", content: "That 180° rule is the single most useful fact about triangles. It means if you know two angles, you always know the third — and the SAT loves to exploit this. They'll give you two angles buried in a word problem and expect you to find the third instantly." },
        { type: "text", content: "Triangles are classified by their **sides**, and each classification carries hidden information that can save you time on test day:" },
        { type: "triangleTypes" },
        { type: "list", items: [
          "**Scalene Triangle** — All three sides are different lengths, so all three angles are different too. No shortcuts here — you'll need to use the given information carefully.",
          "**Isosceles Triangle** — Two sides are equal, which means the angles opposite those equal sides (called **base angles**) are also equal. This is a massive time-saver: spot two equal sides, and you've just reduced the unknowns.",
          "**Equilateral Triangle** — All three sides are equal, and all three angles are exactly **60°**. This is the most \"predictable\" triangle — the moment you see one, you know everything about its angles."
        ]},
        { type: "text", content: "**Why does the SAT care about classification?** Because classification unlocks hidden information. When a problem says \"isosceles,\" it's really handing you a free equation (the two base angles are equal). When it says \"equilateral,\" it's giving you all three angles for free. Trained students see these keywords and immediately write down extra facts — untrained students stare at the problem wondering where to start." },
        { type: "example", title: "SAT Pattern: The Isosceles Shortcut", content: "A common SAT question gives you an isosceles triangle with one angle — say the apex angle is 40°. Since the triangle is isosceles, the two base angles are equal. So: 40 + 2x = 180 → x = 70°.\n\nThe trap? Some students forget which angles are equal. Remember: the equal angles sit **opposite** the equal sides." },
        { type: "text", content: "**Real-world connection:** Think about a bicycle frame — the main triangle formed by the seat tube, top tube, and down tube is what gives the bike its strength. Architects use triangles in roof trusses for the same reason. On the SAT, that same \"strength\" shows up as predictability — triangles follow strict rules, and those rules are your tools." }
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
        { type: "text", content: "Beyond classifying triangles by their sides, we can classify them by the **size of their angles**. This matters on the SAT because the type of angle in a triangle often determines which tools and formulas you'll use to solve the problem. A right triangle unlocks the Pythagorean Theorem; an obtuse triangle might rule out certain assumptions. Knowing the type instantly narrows your strategy." },
        { type: "triangleAngles" },
        { type: "list", items: [
          "**Acute Triangle** — All three angles are less than 90°. Think of it as a \"pointy\" triangle where no angle is too wide. Every equilateral triangle (60°-60°-60°) is acute.",
          "**Right Triangle** — One angle is exactly 90° (marked with a small square in diagrams). This is the SAT's favorite triangle because it unlocks the **Pythagorean Theorem** and trigonometric ratios.",
          "**Obtuse Triangle** — One angle is greater than 90°. The triangle looks \"stretched\" or \"flattened.\" The side opposite the obtuse angle is always the longest side."
        ]},
        { type: "text", content: "Here's the critical insight: a triangle can have **at most one** right angle or obtuse angle. Never two. This isn't just a rule to memorize — it flows directly from the 180° rule. If one angle is already 90° or more, the remaining angles must share the leftover degrees, and there simply aren't enough degrees left for a second big angle." },
        { type: "example", title: "Why Only One Big Angle?", content: "If one angle is 90°, the other two must sum to 90° — so both must be under 90°.\nIf one angle is 120° (obtuse), the other two must sum to only 60° — so both are small.\nIf two angles were each 90°, they'd sum to 180° alone — leaving 0° for the third, which is impossible.\n\nThis is why every triangle falls neatly into exactly one category: acute, right, or obtuse." },
        { type: "text", content: "**SAT trap to watch for:** A problem might describe a triangle and ask whether it's acute, right, or obtuse. Some students assume any triangle with a \"big-looking\" angle is obtuse. Don't eyeball it — calculate! The SAT draws diagrams that are intentionally misleading. Always compute the angles and compare to 90°." },
        { type: "text", content: "**The practical connection:** In navigation and surveying, knowing whether an angle is acute or obtuse determines which direction a measurement points. On the SAT, it determines which formula toolkit you reach for. Right triangle? Pythagorean Theorem. Acute or obtuse? You'll likely use the 180° rule or properties of similar triangles instead." },
        { type: "example", title: "Quick Angle Check Strategy", content: "Given sides 5, 7, and 9, you can determine the triangle type without finding angles:\n\n• Compare a² + b² vs. c² (where c is the longest side)\n• 5² + 7² = 25 + 49 = 74\n• 9² = 81\n• Since 74 < 81, this is an **obtuse** triangle\n\nIf a² + b² = c² → right. If a² + b² > c² → acute. If a² + b² < c² → obtuse." }
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
        { type: "text", content: "Imagine you have three sticks and you want to build a triangle. Can you always do it? Surprisingly, no. If one stick is way too long — longer than the other two combined — the short sticks can't \"reach\" each other to close the shape. Try it with a 1-inch stick, a 2-inch stick, and a 10-inch stick: the two short ones together only span 3 inches, nowhere near enough to bridge the 10-inch gap. This physical intuition is exactly what the **Triangle Inequality Theorem** captures mathematically." },
        { type: "formula", label: "Triangle Inequality", content: "The sum of any two sides must be greater than the third side" },
        { type: "text", content: "This theorem is a **gatekeeper rule** — it tells you whether a triangle can even exist before you start solving anything else. The SAT uses it in two main ways: (1) asking whether given lengths can form a triangle, and (2) asking for the range of possible values for an unknown side." },
        { type: "example", title: "Example 1: Can 7, 6, and 10 form a triangle?", content: "Check all combinations:\n• 7 + 6 = 13 > 10 ✓\n• 7 + 10 = 17 > 6 ✓\n• 6 + 10 = 16 > 7 ✓\n\n**Yes**, these can form a triangle." },
        { type: "example", title: "Example 2: Can 2, 3, and 7 form a triangle?", content: "Check: 2 + 3 = 5\nIs 5 > 7? **No!**\n\n**Impossible** — these cannot form a triangle. The two short sides are too short to \"close\" around the long side." },
        { type: "text", content: "**The shortcut that saves time:** You don't need to check all three combinations. Just check the two **smallest** sides. If their sum is greater than the **largest** side, you're good — the other two combinations will automatically pass. If it fails, you're done. This one check replaces three." },
        { type: "example", title: "SAT Pattern: Finding the Range of a Side", content: "\"Two sides of a triangle are 5 and 11. What is the range of the third side?\"\n\nThe third side must be:\n• Greater than |11 − 5| = 6 (otherwise the triangle collapses flat)\n• Less than 11 + 5 = 16 (otherwise the two known sides can't reach)\n\nAnswer: **6 < third side < 16**\n\nThis \"range\" question is a SAT favorite — know the shortcut: the third side is between the **difference** and the **sum** of the other two sides." },
        { type: "text", content: "**Common SAT trap:** The inequality is **strict** — it uses \"greater than,\" not \"greater than or equal to.\" If two sides sum to exactly the third side (like 3 + 5 = 8), you get a flat line, not a triangle. The SAT tests this edge case — don't include the endpoints." },
        { type: "text", content: "**Real-world analogy:** Think of GPS satellite triangulation. Your phone pinpoints your location by measuring distances from three satellites. If the distance measurements violate the Triangle Inequality, the system knows something is wrong — the measurements are inconsistent. The same logic applies on your test: if the given sides don't satisfy the inequality, the problem has no valid triangle." }
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
        { type: "text", content: "The **area of a triangle** tells you how much space the triangle encloses — and it's one of the most frequently tested formulas on the SAT. But here's what separates prepared students from the rest: understanding **why** the formula works, not just memorizing it. A triangle is always exactly **half of a parallelogram**. If you duplicate any triangle, flip the copy, and attach it to the original, you get a parallelogram whose area is base × height. The triangle is half of that, giving us the famous formula." },
        { type: "areaTriangle" },
        { type: "text", content: "The formula looks simple, but the SAT complicates it by making the **height** hard to identify. Here's what you need to know about base and height:" },
        { type: "list", items: [
          "The **base** can be **any** side of the triangle — you choose whichever is most convenient",
          "The **height** must be **perpendicular** (at a 90° angle) to the base — it's the shortest distance from the base to the opposite vertex",
          "The height might fall **inside** the triangle (acute triangles), land on a **side** (right triangles), or drop **outside** the triangle (obtuse triangles)"
        ]},
        { type: "text", content: "**This is where students get tripped up on the SAT.** The test loves to give you side lengths that look like the height but aren't actually perpendicular to the base. Always look for that right-angle marker (the small square) — if you don't see it, the given length probably isn't the height." },
        { type: "example", title: "Right Triangles: The Easy Case", content: "Right triangles are a gift because the two **legs** (the sides forming the right angle) automatically serve as the base and height — they're already perpendicular!\n\nIf the legs are 6 and 8:\nArea = ½ × 6 × 8 = **24 square units**\n\nNo hunting for the height needed." },
        { type: "example", title: "SAT Trap: Slant Height vs. True Height", content: "A triangle has sides 5, 12, and 13. A student might try: ½ × 12 × 5 = 30.\n\nIs this correct? Actually, yes — but only because 5² + 12² = 13² makes it a right triangle with legs 5 and 12.\n\nIf it weren't a right triangle, multiplying two random sides would give the WRONG answer. Always verify which lengths are perpendicular." },
        { type: "text", content: "**Perimeter** is much simpler — just add all three sides. But don't confuse area and perimeter on the SAT. Area is measured in **square units** (cm², ft²), while perimeter is measured in **linear units** (cm, ft). If an answer has the wrong units, you may have calculated the wrong thing." },
        { type: "text", content: "**Real-world connection:** When architects calculate how much paint to cover a triangular gable (the triangular wall section under a roof), they use this exact formula. The base is the width of the house, the height is how tall the peak rises above the wall. Same formula, real stakes." }
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
        { type: "text", content: "**Similar triangles** are one of the SAT's most powerful concepts — and one of its most frequently tested. Two triangles are similar when they have the **same shape** but potentially different **sizes**. Think of it like zooming in on a photograph: everything gets bigger (or smaller), but the proportions stay identical. The angles don't change, and the sides all scale by the same factor." },
        { type: "similarTriangles" },
        { type: "text", content: "When two triangles are similar, you get two guarantees that work hand-in-hand:" },
        { type: "list", items: [
          "**Corresponding angles are equal** — every angle in one triangle has a matching equal angle in the other. The triangles are the same \"shape\" at every corner.",
          "**Corresponding sides are proportional** — the sides are related by a constant **scale factor**. If one side doubled, they all doubled."
        ]},
        { type: "text", content: "The word \"corresponding\" is critical here. It means you must match up the right pairs — the side across from the 30° angle in one triangle matches the side across from the 30° angle in the other. Mixing up which sides correspond is the #1 mistake students make with similarity problems." },
        { type: "example", title: "Scale Factor in Action", content: "Triangle ABC ~ Triangle DEF with a scale factor of 2:\n\n• AB = 3 → DE = 6\n• BC = 4 → EF = 8\n• AC = 5 → DF = 10\n\nEvery side of the larger triangle is exactly 2× its corresponding side. Notice the scale factor applies uniformly — you can't have one side doubled and another tripled." },
        { type: "text", content: "**Why does the SAT love similar triangles?** Because they let you find missing measurements without direct calculation. You just set up a proportion. If you know three sides and need a fourth, similarity gives you the equation to solve it. This appears in problems about shadows (a person and a building cast shadows at the same time), maps (scaled distances), and overlapping geometric figures." },
        { type: "example", title: "SAT Strategy: Setting Up the Proportion", content: "If triangles are similar and you know: side A₁ = 4, its corresponding side A₂ = 10, and side B₁ = 6, find B₂.\n\nSet up: 4/10 = 6/B₂\nCross-multiply: 4 × B₂ = 60\nB₂ = **15**\n\nThe key move: always put corresponding sides in the same ratio position." },
        { type: "text", content: "**Real-world analogy:** Architects create scale models of buildings. A 1:100 model means every measurement on the model is 1/100th of the real building. A 3 cm door on the model represents a 300 cm (3 m) real door. That's similarity in action — same shape, different size, constant scale factor." },
        { type: "text", content: "**Important distinction:** Similar triangles have equal angles and proportional sides. **Congruent** triangles go further — they have equal angles AND equal sides (scale factor = 1). Every congruent pair is similar, but not every similar pair is congruent." }
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
        { type: "text", content: "Knowing that similar triangles exist is one thing — but on the SAT, you need to **spot** them in a diagram where nobody tells you they're there. The test rarely says \"these triangles are similar.\" Instead, it gives you a figure and expects you to recognize similarity yourself. This lesson teaches you exactly what to look for." },
        { type: "text", content: "**Method 1: AA (Angle-Angle) Criterion** — This is by far the most common method on the SAT. If two angles of one triangle equal two angles of another triangle, the triangles **must** be similar. You don't even need to check the third angle — since all angles sum to 180°, the third angle is automatically equal too. Two matching angles is enough." },
        { type: "text", content: "**Method 2: Parallel Lines** — When a line drawn **parallel** to one side of a triangle cuts through the other two sides, it creates a smaller triangle inside the original. This smaller triangle is always similar to the whole triangle. The SAT uses this pattern constantly — any time you see parallel lines inside or near a triangle, your similarity radar should go off." },
        { type: "example", title: "How AA Works in Practice", content: "Triangle 1 has angles 50°, 60°, and 70°.\nTriangle 2 has angles 50° and 70° (third unknown).\n\nSince angles sum to 180°: third angle = 180 - 50 - 70 = 60°.\n\nBoth triangles have angles 50°, 60°, 70° → **they're similar!**\n\nYou only needed to match two angles. The third was guaranteed." },
        { type: "text", content: "**Where to find hidden equal angles on the SAT:**" },
        { type: "list", items: [
          "**Shared angles** — If two triangles share a common angle (they overlap at a vertex), that's one matching angle for free",
          "**Vertical angles** — When two lines cross, the opposite angles are equal. If each angle belongs to a different triangle, that's a match",
          "**Parallel line angles** — When a transversal crosses parallel lines, it creates equal corresponding angles and equal alternate interior angles",
          "**Right angles** — Two right triangles already share one angle (90°), so you only need to find one more matching angle"
        ]},
        { type: "example", title: "The Classic SAT Parallel-Line Pattern", content: "A triangle ABC has a line DE drawn parallel to base BC, where D is on side AB and E is on side AC.\n\nTriangle ADE sits inside triangle ABC. Since DE ∥ BC:\n• Angle A is shared (same angle in both triangles)\n• Angle ADE = Angle ABC (corresponding angles from the parallel lines)\n\nTwo angles match → Triangle ADE ~ Triangle ABC.\n\nNow set up proportions: AD/AB = AE/AC = DE/BC." },
        { type: "text", content: "**SAT trap:** Students sometimes assume triangles are similar just because they \"look\" similar in the diagram. You must **prove** it with angles or parallel lines. The SAT intentionally draws non-similar triangles that look similar to catch careless test-takers." },
        { type: "text", content: "**The strategy workflow:** (1) Spot two triangles in the figure. (2) Hunt for two matching angles using shared angles, vertical angles, or parallel lines. (3) Confirm similarity. (4) Set up the proportion with corresponding sides. (5) Cross-multiply and solve. This five-step process handles the vast majority of SAT similarity questions." }
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
        { type: "text", content: "If there's one type of triangle you need to know inside and out for the SAT, it's the **right triangle**. A right triangle contains one **90° angle** — that perfect square corner you see in door frames, book edges, and building foundations. That right angle isn't just a geometric detail; it's a **key** that unlocks an entire toolkit of problem-solving formulas: the Pythagorean Theorem, trigonometric ratios, and special triangle shortcuts. None of these work without a right angle." },
        { type: "rightTriangleParts" },
        { type: "text", content: "A right triangle has three parts with specific names, and using the correct names is essential for applying formulas correctly:" },
        { type: "list", items: [
          "**Hypotenuse** — The side directly **across from** the right angle. It is always the **longest side** of the triangle. It never touches the right-angle corner.",
          "**Legs** — The two sides that **form** the right angle. They meet at the 90° corner. In formulas, these are often called **a** and **b**."
        ]},
        { type: "text", content: "**Why is the hypotenuse always the longest?** Because in any triangle, the largest angle sits opposite the largest side. Since 90° is the biggest possible angle in a right triangle (the other two must share the remaining 90°), the side opposite it — the hypotenuse — must be the longest. This fact alone can help you catch mistakes: if your calculated \"hypotenuse\" is shorter than a leg, something went wrong." },
        { type: "example", title: "Identifying Parts Correctly", content: "The hypotenuse is always:\n• Opposite the 90° angle\n• The longest side\n• The side that does NOT touch the right-angle corner\n\nThe two legs always meet at the right angle.\n\nIf a problem says the hypotenuse is 13 and one leg is 15 — stop! A leg can't be longer than the hypotenuse. Re-read the problem." },
        { type: "text", content: "**SAT context:** The SAT gives you the Pythagorean Theorem and special right triangle ratios on the reference sheet, but it does NOT tell you which side is the hypotenuse and which are legs. Mislabeling the sides is one of the most common errors. Always identify the hypotenuse (across from 90°) before plugging into any formula." },
        { type: "text", content: "**Why the SAT loves right triangles:** They show up everywhere — in coordinate geometry (distance between points uses a hidden right triangle), in word problems (ladders leaning against walls, shadows on the ground), and in complex figures where a diagonal creates two right triangles. When you see a 90° angle or the word \"perpendicular,\" think right triangle and reach for your toolkit." },
        { type: "text", content: "**Real-world connection:** Every building corner, every TV screen, every rectangular sports field contains right angles — and therefore right triangles. When a soccer field's diagonal is measured, when a carpenter checks if a wall is \"square,\" when a surveyor measures land — they're all using right triangle principles. The same math that builds cities will earn you points on the SAT." }
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
        { type: "text", content: "The **Pythagorean Theorem** is arguably the single most important formula you'll use on the SAT. It connects the three sides of a right triangle in one elegant equation, and it applies **only to right triangles** — if there's no 90° angle, this formula doesn't work. The SAT provides it on the reference sheet, but the top scorers have it so deeply memorized that they never even glance at the sheet." },
        { type: "pythagorean" },
        { type: "text", content: "Here, **a** and **b** are the two legs (the sides forming the right angle), and **c** is the hypotenuse (the side opposite the right angle). The order of a and b doesn't matter — you can swap them freely — but **c must always be the hypotenuse**. Putting a leg in the c position is the most common mistake with this formula." },
        { type: "text", content: "In plain language: **if you square both legs and add them up, you get the square of the hypotenuse.** Think of it geometrically — if you literally drew squares on each side of the triangle, the area of the square on the hypotenuse would equal the combined areas of the squares on the two legs." },
        { type: "example", title: "Finding the Hypotenuse", content: "Legs are 3 and 4. Find the hypotenuse:\n\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = √25 = **5**\n\nThis 3-4-5 triangle is so common on the SAT that you should recognize it instantly — no calculation needed." },
        { type: "example", title: "Finding a Missing Leg", content: "One leg is 5, hypotenuse is 13. Find the other leg:\n\n5² + b² = 13²\n25 + b² = 169\nb² = 169 − 25 = 144\nb = √144 = **12**\n\nNotice how we **subtract** when finding a leg but **add** when finding the hypotenuse. This is a key distinction." },
        { type: "text", content: "**Pythagorean Triples** are sets of whole numbers that satisfy the theorem. Memorizing them lets you skip calculation entirely — when you recognize the pattern, the answer is instant:" },
        { type: "list", items: [
          "**3, 4, 5** — The most common. Multiples also work: 6-8-10, 9-12-15, 12-16-20, 15-20-25...",
          "**5, 12, 13** — Second most common on the SAT. Multiples: 10-24-26, etc.",
          "**8, 15, 17** — Less frequent but still tested",
          "**7, 24, 25** — Rare but worth knowing"
        ]},
        { type: "text", content: "**Why multiples work:** If 3-4-5 is a right triangle, then doubling every side (6-8-10) gives a similar right triangle — and similarity preserves the right angle. So any multiple of a triple is also a valid triple." },
        { type: "text", content: "**SAT traps to avoid:** (1) Using the Pythagorean Theorem on a triangle that isn't a right triangle — always confirm the 90° angle first. (2) Forgetting to take the square root at the end — c² = 25 means c = 5, not c = 25. (3) Adding when you should subtract — when finding a leg, you subtract from c², not add." },
        { type: "text", content: "**Where it hides on the SAT:** The Pythagorean Theorem isn't always obvious. Finding the distance between two points on a coordinate grid? That's a hidden right triangle. Calculating the diagonal of a rectangle? Same thing. A ladder leaning against a wall? Classic right triangle. Train yourself to see the right triangle lurking in every geometry problem." }
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
        { type: "text", content: "**Trigonometric ratios** are one of the most powerful tools on the SAT, yet many students find them intimidating. Here's the truth: trig ratios are nothing more than **fractions comparing sides of a right triangle**. That's it. If you can identify which side is which and divide, you can do trigonometry. The Pythagorean Theorem tells you side lengths; trig ratios tell you how those lengths relate to the **angles**. They only work in **right triangles**." },
        { type: "text", content: "Before you can use any trig ratio, you must label the three sides **relative to the angle you're working with** (called θ). This is the crucial step — the labels change depending on which angle you pick:" },
        { type: "sohcahtoa", notGiven: true },
        { type: "list", items: [
          "**Opposite** — The side directly **across from** your angle θ. It doesn't touch the angle at all.",
          "**Adjacent** — The side **next to** your angle θ that is NOT the hypotenuse. It forms one side of the angle.",
          "**Hypotenuse** — Always the longest side, always across from the 90° angle. This one **never changes** regardless of which angle you pick."
        ]},
        { type: "text", content: "**The Three Ratios (SOH CAH TOA):**" },
        { type: "formula", label: "Sine", prefix: "sin(θ) =", fraction: { numerator: "Opposite", denominator: "Hypotenuse" }, numeratorColor: "#ea580c", denominatorColor: "#3b82f6" },
        { type: "formula", label: "Cosine", prefix: "cos(θ) =", fraction: { numerator: "Adjacent", denominator: "Hypotenuse" }, numeratorColor: "#16a34a", denominatorColor: "#3b82f6" },
        { type: "formula", label: "Tangent", prefix: "tan(θ) =", fraction: { numerator: "Opposite", denominator: "Adjacent" }, numeratorColor: "#ea580c", denominatorColor: "#16a34a" },
        { type: "text", content: "**Memory trick: SOH CAH TOA** — say it out loud a few times and it sticks. Each three-letter chunk tells you the ratio:" },
        { type: "list", items: [
          "**S**ine = **O**pposite / **H**ypotenuse (SOH)",
          "**C**osine = **A**djacent / **H**ypotenuse (CAH)",
          "**T**angent = **O**pposite / **A**djacent (TOA)"
        ]},
        { type: "text", content: "**The #1 SAT trap with trig:** Mislabeling \"opposite\" and \"adjacent.\" These labels are **relative to the angle you choose**. If you switch to the other acute angle, opposite and adjacent swap! The hypotenuse stays the same, but the other two sides trade roles. Always ask: \"Opposite to WHICH angle? Adjacent to WHICH angle?\"" },
        { type: "text", content: "**Why does the SAT test this?** Trig ratios let you find missing sides when you know an angle, or find missing angles when you know sides. Real-world applications are everywhere: pilots use trig to calculate descent angles, engineers use it to design ramps, and surveyors use it to measure distances across rivers they can't cross. On the SAT, it transforms angle information into side-length information and vice versa — a power that no other tool gives you." }
      ]
    }
  },
  { id: 23, title: "Simple Trigonometric Ratios Example #1", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "V4hSoSCACUA", hero: { tagline: "PRACTICE", subtitle: "Basic trig ratios" } },
  { id: 24, title: "Simple Trigonometric Ratios Example #2", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "XO4V-6Nv2VA", hero: { tagline: "PRACTICE", subtitle: "More examples" } },
  { id: 25, title: "Simple Trigonometric Ratios Example #3", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "1pN3OcxOVk4", hero: { tagline: "PRACTICE", subtitle: "Building fluency" } },
  { id: 26, title: "Simple Trigonometric Ratios Example #4", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "HaJettXIUlU", hero: { tagline: "PRACTICE", subtitle: "Additional practice" } },
  { id: 27, title: "Simple Trigonometric Ratios Example #5", type: "video", duration: "8 min", section: "Trigonometric Ratios", videoId: "byD4ls13d64", hero: { tagline: "PRACTICE", subtitle: "Final basic examples" } },
  { id: 28, title: "Complex Trigonometric Ratios Example", type: "video", duration: "12 min", section: "Trigonometric Ratios", videoId: "lTF4dy953gw", hero: { tagline: "ADVANCED", subtitle: "Challenging trig problems" } },
  {
    id: 36,
    title: "Cofunctions & Complementary Angles",
    type: "lesson",
    duration: "6 min",
    section: "Trigonometric Ratios",
    hero: {
      tagline: "sin θ = cos(90° − θ)",
      subtitle: "The complement identity"
    },
    content: {
      blocks: [
        { type: "text", content: "Once you know **SOH CAH TOA**, there's a beautiful shortcut waiting for you: the **cofunction identity**. The prefix \"co-\" in **co**sine literally means \"complement of\" — cosine is the sine of the *complementary* angle. On the SAT this identity turns a whole family of trig questions into a one-line answer, and it's tested often enough that recognizing it instantly is worth real points." },
        { type: "formula", label: "Cofunction Identity", content: "sin(θ) = cos(90° − θ)  and  cos(θ) = sin(90° − θ)" },
        { type: "text", content: "**Why is it true?** Look at any right triangle. One angle is 90°, so the two **acute** angles must add to 90° — they are **complementary**. Now pick one acute angle, θ. The side **opposite** θ is the side **adjacent** to the other acute angle (90° − θ). Since sine uses the opposite side and cosine uses the adjacent side, sin(θ) and cos(90° − θ) are literally the same ratio — the same two sides, just viewed from the other corner." },
        { type: "list", items: [
          "In a right triangle, the two acute angles are **complementary** — they sum to 90°.",
          "One angle's **opposite** leg is the other angle's **adjacent** leg.",
          "So **sine of an angle = cosine of its complement**, and vice versa."
        ]},
        { type: "example", title: "The Classic SAT Setup", content: "The SAT loves this one:\n\nIf sin(x°) = cos(y°), what is x + y?\n\nBecause sine equals cosine only when the angles are complementary, x and y must add to 90.\n\n**x + y = 90.**\n\nYou don't need the actual value of the sine or cosine — the identity alone gives the answer." },
        { type: "text", content: "The identity also shows up in **algebraic costume**. Instead of clean numbers, the SAT hides the angles inside expressions like sin(2x°) = cos(3x°). The move is the same: the two angles are complementary, so set their sum equal to 90 and solve. Here, 2x + 3x = 90 → 5x = 90 → x = 18." },
        { type: "example", title: "Tangent Has a Cofunction Too", content: "The pattern isn't limited to sine and cosine. Tangent pairs with **cotangent** the same way:\n\ntan(θ) = 1 / tan(90° − θ)\n\nSo the tangent of an angle is the reciprocal of the tangent of its complement. For example, tan(30°) and tan(60°) are reciprocals because 30° and 60° are complementary." },
        { type: "text", content: "**SAT trap to avoid:** the identity only works when the two functions are **different** (sine paired with cosine, tangent paired with cotangent). If a problem says sin(x°) = sin(y°), that does **not** mean x + y = 90 — it means the angles are equal (for acute angles). Reach for \"add to 90\" only when a sine is set equal to a cosine." },
        { type: "text", content: "**Real-world connection:** surveyors and navigators constantly switch between an angle and its complement when they measure from different reference lines — an angle measured up from the ground is the complement of the same direction measured down from the vertical. The cofunction identity is what lets them use one measurement to get the other without re-measuring." }
      ]
    }
  },
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
        { type: "text", content: "The **45-45-90 triangle** is the first of two \"special\" right triangles that the SAT expects you to know cold. What makes it special? Its angles are fixed at **45°, 45°, and 90°**, which locks the side ratios into a permanent pattern. Once you know any single side, you can find the other two instantly — no Pythagorean Theorem needed. That's the payoff of memorizing special triangles: they turn multi-step calculations into one-step lookups." },
        { type: "text", content: "Here's the intuition: a 45-45-90 triangle is what you get when you **cut a square diagonally**. Take any square, draw a line from one corner to the opposite corner, and you've created two identical 45-45-90 triangles. The legs are the sides of the square (equal, because it's a square), and the hypotenuse is the diagonal." },
        { type: "triangle4545" },
        { type: "list", items: [
          "The two **legs** are always equal (both are **x**) — this makes it an isosceles right triangle",
          "The **hypotenuse** is always **x√2** — multiply either leg by √2 to get the hypotenuse"
        ]},
        { type: "text", content: "**Two directions to solve — know both:**\n\n**Leg → Hypotenuse:** Multiply the leg by √2. Easy.\n\n**Hypotenuse → Leg:** Divide the hypotenuse by √2 (or equivalently, multiply by √2/2). This direction trips up more students because dividing by a radical feels unfamiliar. Practice it until it's automatic." },
        { type: "example", title: "Going Both Directions", content: "**Given a leg = 5:**\n• Both legs = 5\n• Hypotenuse = 5√2 ≈ 7.07\n\n**Given the hypotenuse = 10:**\n• 10 = x√2 → x = 10/√2 = 10√2/2 = 5√2\n• Each leg = 5√2 ≈ 7.07\n\nNotice: when the hypotenuse is a clean number, the legs often involve radicals. That's normal — don't panic when you see √2 in your answer." },
        { type: "text", content: "**Where the SAT hides 45-45-90 triangles:** (1) A square's diagonal — the diagonal of a square with side s is s√2. (2) A coordinate geometry problem where a line makes a 45° angle with the x-axis. (3) Any time a problem mentions \"isosceles right triangle.\" (4) When a problem says an angle is 45° inside a right triangle, the triangle is automatically 45-45-90." },
        { type: "text", content: "**SAT trap:** The test might give you the hypotenuse and ask for the area. Students who don't know the 45-45-90 ratio get stuck because they can't find the legs. But with the ratio, you find the leg (hypotenuse ÷ √2), then use Area = ½ × leg × leg. Quick and clean." },
        { type: "text", content: "**Real-world connection:** Baseball diamonds are squares — the distance from home plate to second base is the diagonal, which is the base path length × √2. If the base paths are 90 feet, the throw from home to second is 90√2 ≈ 127.3 feet. Same triangle, real application." }
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
        { type: "text", content: "The **30-60-90 triangle** is the second special right triangle you need to master for the SAT, and it's arguably the trickier one to remember because the ratio involves three different values instead of two. But here's the beautiful insight that makes it stick: a 30-60-90 triangle is exactly **half of an equilateral triangle** sliced down the middle. Take any equilateral triangle (all sides equal, all angles 60°), drop a vertical line from the top vertex to the base, and you've split it into two perfect 30-60-90 triangles." },
        { type: "text", content: "That origin story explains every part of the ratio. The hypotenuse is a full side of the equilateral triangle. The shortest side is half a side (you cut the base in two). And the medium side is the vertical height you drew. Because the angles are fixed, these proportions never change:" },
        { type: "triangle3060" },
        { type: "list", items: [
          "**Shortest side** (opposite 30°) = **x** — always across from the smallest angle",
          "**Medium side** (opposite 60°) = **x√3** — always across from the medium angle",
          "**Hypotenuse** (opposite 90°) = **2x** — always across from the right angle, always the longest"
        ]},
        { type: "text", content: "**The anchor relationship:** The hypotenuse is always **exactly twice** the shortest side. This is the easiest relationship to remember, and it lets you find the shortest side from the hypotenuse (just divide by 2) or the hypotenuse from the shortest side (just multiply by 2). Once you have the shortest side, multiply by √3 to get the medium side." },
        { type: "example", title: "Starting from the Shortest Side", content: "Shortest side = **4**:\n• Short side (opposite 30°) = 4\n• Medium side (opposite 60°) = 4√3 ≈ 6.93\n• Hypotenuse = 2 × 4 = **8**" },
        { type: "example", title: "Starting from the Hypotenuse", content: "Hypotenuse = **12**:\n• 12 = 2x → x = 6\n• Short side = **6**\n• Medium side = 6√3 ≈ **10.39**\n\nAlways find the shortest side first — it's the key that unlocks the other two." },
        { type: "text", content: "**The most common SAT mistake with 30-60-90:** Confusing which side gets the √3. Students sometimes put √3 on the shortest side or the hypotenuse. Remember: **√3 goes on the MEDIUM side** (opposite 60°). The shortest side is just x, and the hypotenuse is 2x. If you mix them up, your answer will be wrong by a factor of √3 — and the SAT will have that wrong answer as a trap choice." },
        { type: "text", content: "**Where the SAT hides 30-60-90 triangles:** (1) Any equilateral triangle problem — the height of an equilateral triangle with side s is (s√3)/2, which comes from the 30-60-90 ratio. (2) Problems mentioning 30° or 60° angles in a right triangle. (3) Hexagon problems — a regular hexagon is made of six equilateral triangles, each containing 30-60-90 relationships." },
        { type: "text", content: "**Real-world connection:** Road signs like the yield sign are equilateral triangles. If you wanted to calculate the height of a yield sign from its side length, you'd use the 30-60-90 ratio. Architects use these proportions when designing A-frame buildings and triangular roof supports. The math is everywhere — and it's on your test." }
      ]
    }
  },
  { id: 33, title: "Simple 30-60-90 Triangle Example", type: "video", duration: "8 min", section: "Special Right Triangles", videoId: "_6bZxuQym8g", hero: { tagline: "PRACTICE", subtitle: "Basic 30-60-90" } },
  { id: 34, title: "Complex 30-60-90 Triangle Example #1", type: "video", duration: "10 min", section: "Special Right Triangles", videoId: "HvJnE1eP6Xs", hero: { tagline: "ADVANCED", subtitle: "Challenging 30-60-90" } },
  { id: 35, title: "Complex 30-60-90 Triangle Example #2", type: "video", duration: "10 min", section: "Special Right Triangles", videoId: "q19izkGElyI", hero: { tagline: "ADVANCED", subtitle: "More complex examples" } }
];
