export const volumeLessons = [
  // Section: Fundamentals
  {
    id: 1,
    title: "What is Volume?",
    type: "lesson",
    duration: "5 min",
    section: "Fundamentals",
    hero: {
      tagline: "3D SPACE",
      subtitle: "Measuring what's inside"
    },
    content: {
      blocks: [
        { type: "text", content: "Imagine you have a cardboard box sitting in front of you. You can measure how tall it is, how wide it is, and how deep it is — but **volume** answers a different question entirely: **how much stuff can you fit inside it?** Volume is the measure of the three-dimensional space an object occupies or encloses. While area covers a flat surface (two dimensions), volume adds that crucial third dimension — depth." },
        { type: "text", content: "Here's an intuition trick that makes volume click: picture filling a shape with tiny unit cubes, each exactly 1 cm × 1 cm × 1 cm. The total number of cubes you can pack inside IS the volume. That's why volume is always measured in **cubic units** — cm³, m³, ft³, in³. Each cube represents one unit of three-dimensional space." },
        { type: "volumeIntro" },
        { type: "text", content: "**Why Volume Matters on the SAT:** Volume questions appear in roughly 2-4 questions per test in the Math section. The SAT provides most volume formulas on the reference sheet, so you don't need to memorize them — but you DO need to understand what they mean and how to apply them quickly. The real challenge isn't plugging into formulas; it's setting up the problem correctly." },
        { type: "text", content: "**Common SAT Patterns for Volume:**\n\n• Finding the volume when given dimensions directly (the easiest type)\n• Working backwards — given the volume, solve for a missing dimension\n• Comparing volumes of two shapes (\"how many times greater...\")\n• Word problems where you must extract the right measurements from a story\n• Composite shapes — adding or subtracting volumes of simpler shapes" },
        { type: "volumeUnits" },
        { type: "text", content: "**SAT Trap — Unit Confusion:** Watch out for problems that mix units (e.g., some measurements in inches, others in feet). The SAT loves this trap. Before plugging numbers into any volume formula, make sure every measurement uses the **same unit**. Convert first, calculate second. If you see a problem where the answer choices are suspiciously far apart, a unit mismatch is probably the trap they're setting." },
        { type: "text", content: "**Key Takeaway:** Volume = 3D space inside a shape. Always cubic units. Always same units before calculating. The SAT gives you the formulas — your job is knowing WHEN and HOW to use them, not memorizing them." }
      ]
    }
  },
  // Section: Rectangular Prism
  {
    id: 2,
    title: "Volume of a Rectangular Prism",
    type: "lesson",
    duration: "5 min",
    section: "Rectangular Prism",
    hero: {
      tagline: "LENGTH × WIDTH × HEIGHT",
      subtitle: "The classic box formula"
    },
    content: {
      blocks: [
        { type: "text", content: "A rectangular prism is just the math name for a **box** — think of a cereal box, a shipping container, a room in your house, or a brick. It's the most common 3D shape in everyday life and, not coincidentally, the most common volume shape on the SAT. If you only learn one volume formula deeply, make it this one." },
        { type: "rectangularPrismIntro" },
        { type: "text", content: "**Building Intuition:** Why is volume Length × Width × Height? Think about it in layers. The bottom layer of unit cubes is a flat grid — that's Length × Width (which gives you the area of the base). Now stack those layers on top of each other, one for each unit of height. So you're really calculating: **Area of base × Height**. This \"base × height\" pattern shows up in almost every volume formula you'll encounter." },
        { type: "rectangularPrismFormula" },
        { type: "text", content: "**SAT Question Patterns for Rectangular Prisms:**\n\n• **Direct calculation:** Given l, w, h — find volume (straightforward plug-in)\n• **Solve for a missing dimension:** Given volume and two dimensions, find the third\n• **Doubling/tripling problems:** \"If the length is doubled, what happens to the volume?\" (Answer: it doubles too — volume scales linearly with each dimension)\n• **Fill-rate problems:** \"Water flows at 5 cubic feet per minute. How long to fill a tank that is 10 × 8 × 4 feet?\" (Find volume, then divide by rate)" },
        { type: "rectangularPrismExample" },
        { type: "text", content: "**SAT Trap — Scaling Confusion:** Here's a classic trick the SAT loves. \"If every dimension of a box is tripled, the volume becomes how many times larger?\" Many students answer 3. The real answer is **27** (which is 3³). When you scale ALL dimensions by a factor of k, the volume scales by **k³**. This is because V = l × w × h, and tripling each gives (3l)(3w)(3h) = 27lwh. Remember: volume scaling = (scale factor)³." },
        { type: "text", content: "**Pro Tip:** On the SAT, if a rectangular prism problem feels complicated, ask yourself: \"Do I know the area of the base?\" Often the problem gives you the base area indirectly (e.g., \"a rectangular floor that is 120 square feet\"). Once you have the base area, just multiply by height. Don't overthink it." },
        { type: "text", content: "**Quick Check — Does Your Answer Make Sense?** After calculating volume, do a sanity check. If a room is 12 ft × 10 ft × 8 ft, your volume should be 960 ft³. That's roughly the size of a bedroom — does that feel right? If you got 96 ft³ or 9600 ft³, you probably made an arithmetic error. Building number sense saves you from careless mistakes." }
      ]
    }
  },
  { id: 3, title: "Simple Volume of Rectangular Prism", type: "video", duration: "6 min", section: "Rectangular Prism", videoId: "Pr0sgY6eHaA", hero: { tagline: "PRACTICE", subtitle: "Basic box calculations" } },
  { id: 4, title: "Complex Volume of Rectangular Prism", type: "video", duration: "8 min", section: "Rectangular Prism", videoId: "YK1O3QN_puE", hero: { tagline: "ADVANCED", subtitle: "Multi-step problems" } },
  // Section: Cube
  {
    id: 5,
    title: "Volume of a Cube",
    type: "lesson",
    duration: "5 min",
    section: "Cube",
    hero: {
      tagline: "s³",
      subtitle: "All sides equal"
    },
    content: {
      blocks: [
        { type: "text", content: "A cube is a special rectangular prism where **every edge is exactly the same length**. Think of a Rubik's cube, a die, or an ice cube. Because all three dimensions are identical, the volume formula simplifies beautifully — instead of l × w × h, you just need **s³** (side cubed). It's the simplest volume formula you'll encounter, but the SAT finds clever ways to make it tricky." },
        { type: "cubeIntro" },
        { type: "cubeFormula" },
        { type: "text", content: "**Why s³ Works:** Since length = width = height = s for a cube, the rectangular prism formula V = l × w × h becomes V = s × s × s = s³. This is also where the word \"cubed\" comes from in math — raising a number to the third power literally means making a cube with that side length." },
        { type: "text", content: "**SAT Question Patterns for Cubes:**\n\n• **Given side, find volume:** Straightforward — cube the side length\n• **Given volume, find side:** This is where it gets interesting. If V = 64, then s = ∛64 = 4. You need to be comfortable with cube roots\n• **Surface area + volume combos:** The SAT may give surface area and ask for volume. Since SA = 6s², solve for s first, then cube it\n• **Diagonal problems:** Sometimes the SAT gives the space diagonal of a cube (d = s√3) and asks for volume" },
        { type: "cubeExample" },
        { type: "text", content: "**SAT Trap — Confusing Surface Area with Volume:** A cube with side 3 has surface area = 6(3²) = 54 and volume = 3³ = 27. These are different quantities! If a problem mentions \"square units,\" it's asking about area. If it mentions \"cubic units,\" it's volume. Read the units in the answer choices — they tell you which formula to use." },
        { type: "text", content: "**Perfect Cubes You Should Know Cold:**\n\n1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125, 6³ = 216, 7³ = 343, 8³ = 512, 9³ = 729, 10³ = 1000\n\nKnowing these saves you precious seconds on the SAT. If a volume problem gives you 343 cubic inches, you should instantly know the side is 7 inches." },
        { type: "text", content: "**Key Takeaway:** The cube is the simplest 3D shape, but SAT problems often work backwards (volume → side) or combine volume with surface area. Master cube roots and perfect cubes, and these problems become quick wins." }
      ]
    }
  },
  { id: 6, title: "Simple Volume of Cube Example", type: "video", duration: "6 min", section: "Cube", videoId: "3NGFvYlxWsE", hero: { tagline: "PRACTICE", subtitle: "Perfect cube problems" } },
  // Section: Cylinder
  {
    id: 7,
    title: "Volume of a Cylinder",
    type: "lesson",
    duration: "5 min",
    section: "Cylinder",
    hero: {
      tagline: "πr²h",
      subtitle: "Circles stacked up"
    },
    content: {
      blocks: [
        { type: "text", content: "A cylinder is one of the most common shapes in the real world — soda cans, water pipes, grain silos, oil drums, candles. On the SAT, cylinders show up frequently because the formula is elegant and the problems can be layered with real-world context. Here's the key insight: **a cylinder is just a stack of circles**. If you understand that, the formula writes itself." },
        { type: "cylinderIntro" },
        { type: "text", content: "**Building the Formula from Intuition:** Imagine taking a circular coin (area = πr²) and stacking identical coins on top of each other until you reach height h. You've built a cylinder! The volume is simply the area of one circle times how many layers you stacked: **V = πr²h**. This is the same \"base area × height\" pattern we saw with rectangular prisms — the only difference is that the base is a circle instead of a rectangle." },
        { type: "cylinderFormula" },
        { type: "text", content: "**SAT Question Patterns for Cylinders:**\n\n• **Direct calculation:** Given radius and height, find volume\n• **Given diameter, not radius:** The SAT often gives diameter. Don't forget to divide by 2! This is the #1 careless mistake\n• **Solve for height or radius:** Given volume and one dimension, solve for the other\n• **Liquid/fill problems:** \"A cylindrical tank holds 500π cubic inches of water. If the radius is 10 inches, how deep is the water?\"\n• **Comparing cylinders:** \"Cylinder A has twice the radius but half the height of Cylinder B. Which has greater volume?\"" },
        { type: "cylinderExample" },
        { type: "text", content: "**SAT Trap — Diameter vs. Radius:** This catches more students than any other cylinder mistake. If a problem says \"a cylindrical pipe with a diameter of 8 inches,\" the radius is 4 inches. Always check: did they give you r or d? Using diameter instead of radius in πr²h will give you an answer exactly **4 times too large** (because (2r)² = 4r²). If your answer is 4× one of the other choices, you probably used diameter." },
        { type: "text", content: "**SAT Trap — Scaling with Radius:** Because volume depends on r² (radius squared), doubling the radius **quadruples** the volume (not doubles it). But doubling the height only doubles the volume. The SAT loves asking: \"Which change increases volume more — doubling the radius or doubling the height?\" Doubling the radius always wins because of that squared term." },
        { type: "text", content: "**When to Leave π in Your Answer:** Many SAT cylinder problems have answer choices like 36π, 48π, 100π. When you see this, do NOT multiply out π (3.14159...). Just calculate the numerical part and keep π as a symbol. This is faster AND avoids rounding errors. Only multiply out π if the answer choices are decimal numbers." },
        { type: "text", content: "**Key Takeaway:** Cylinder volume = circle area × height = πr²h. Always use radius (not diameter). Remember that volume scales with r² but only linearly with h. The SAT reference sheet has this formula — your job is reading the problem carefully." }
      ]
    }
  },
  { id: 8, title: "Simple Volume of Cylinder Example", type: "video", duration: "6 min", section: "Cylinder", videoId: "K_wAeM8oKSo", hero: { tagline: "PRACTICE", subtitle: "Basic cylinder problems" } },
  { id: 9, title: "Complex Volume of Cylinder Example", type: "video", duration: "8 min", section: "Cylinder", videoId: "bVOOj1uhCLM", hero: { tagline: "ADVANCED", subtitle: "Multi-step cylinder" } },
  // Section: Sphere
  {
    id: 10,
    title: "Volume of a Sphere",
    type: "lesson",
    duration: "5 min",
    section: "Sphere",
    hero: {
      tagline: "⁴⁄₃πr³",
      subtitle: "The perfect 3D shape"
    },
    content: {
      blocks: [
        { type: "text", content: "A sphere is the most \"efficient\" 3D shape in nature — it encloses the maximum volume for a given surface area. That's why bubbles, planets, and water droplets are all spherical. Think of a basketball, a marble, or the Earth. On the SAT, the sphere formula looks intimidating at first glance (⁴⁄₃πr³), but once you understand where it comes from and how to use it, sphere problems are very manageable." },
        { type: "sphereIntro" },
        { type: "text", content: "**Understanding the Formula:** V = ⁴⁄₃πr³. Unlike prisms and cylinders, there's no simple \"base × height\" intuition here — the sphere formula comes from calculus. But here's what you should know intuitively: the volume depends on the **cube** of the radius. That r³ is critical. A sphere with radius 2 has volume ⁴⁄₃π(8) ≈ 33.5, but a sphere with radius 4 has volume ⁴⁄₃π(64) ≈ 268. Doubling the radius made the volume **8 times larger** (2³ = 8)." },
        { type: "sphereFormula" },
        { type: "text", content: "**SAT Question Patterns for Spheres:**\n\n• **Direct calculation:** Given radius (or diameter), find volume\n• **Solve for radius:** Given volume, work backwards to find r. This requires dividing by ⁴⁄₃π, then taking a cube root\n• **Hemisphere problems:** A hemisphere is half a sphere, so V = ⅔πr³. The SAT loves asking about bowls, domes, and igloos\n• **Comparing spheres:** \"Sphere A has 3 times the radius of Sphere B. How many times greater is A's volume?\" (Answer: 27 times, since 3³ = 27)" },
        { type: "sphereExample" },
        { type: "text", content: "**SAT Trap — The ⁴⁄₃ Factor:** When working backwards from volume to radius, students often forget to deal with the ⁴⁄₃ properly. Here's the clean process:\n\n1. Start with V = ⁴⁄₃πr³\n2. Multiply both sides by ¾: (¾)V = πr³\n3. Divide by π: (3V)/(4π) = r³\n4. Take the cube root: r = ∛(3V/4π)\n\nPractice this sequence so it becomes automatic." },
        { type: "text", content: "**SAT Trap — Diameter Again:** Just like cylinders, the SAT will give you the diameter of a sphere and hope you forget to halve it. Since the formula uses r³, using diameter instead of radius makes your answer **8 times too large** (2³ = 8). If your answer is exactly 8× one of the other choices, you used diameter instead of radius." },
        { type: "text", content: "**Real-World SAT Context:** Sphere problems on the SAT often involve balls (tennis balls in a can is a classic), planets, balloons being inflated, or scoops of ice cream. The context is just decoration — strip it away and find the radius. That's all you need." },
        { type: "text", content: "**Key Takeaway:** V = ⁴⁄₃πr³. The sphere formula is on the reference sheet — don't waste time memorizing it. Focus on the skills: using radius (not diameter), working backwards to find r, and understanding that volume scales as r³." }
      ]
    }
  },
  { id: 11, title: "Simple Volume of Sphere Example", type: "video", duration: "6 min", section: "Sphere", videoId: "vgp4iFY6vdU", hero: { tagline: "PRACTICE", subtitle: "Basic sphere calculations" } },
  { id: 12, title: "Complex Volume of Sphere Example", type: "video", duration: "8 min", section: "Sphere", videoId: "8ix6fP1eQlU", hero: { tagline: "ADVANCED", subtitle: "Challenging sphere problems" } },
  // Section: Cone
  {
    id: 13,
    title: "Volume of a Cone",
    type: "lesson",
    duration: "5 min",
    section: "Cone",
    hero: {
      tagline: "⅓πr²h",
      subtitle: "One-third of a cylinder"
    },
    content: {
      blocks: [
        { type: "text", content: "A cone is essentially a cylinder that tapers to a point — think of an ice cream cone, a traffic cone, a party hat, or a funnel. The critical relationship to remember is this: **a cone's volume is exactly one-third of a cylinder with the same base and height**. This ⅓ factor is the single most important thing to know about cones, and the SAT tests it directly." },
        { type: "coneIntro" },
        { type: "text", content: "**Why One-Third?** Imagine you have a cylinder and a cone with the same radius and height. If you filled the cone with water and poured it into the cylinder, you'd need to do it exactly **3 times** to fill the cylinder completely. This is a real experiment you can do! Mathematically, V(cone) = ⅓πr²h, while V(cylinder) = πr²h. The only difference is that ⅓ out front." },
        { type: "coneFormula" },
        { type: "text", content: "**SAT Question Patterns for Cones:**\n\n• **Direct calculation:** Given radius and height, find volume (don't forget the ⅓!)\n• **Cone vs. cylinder comparison:** \"A cone and cylinder have the same radius and height. What fraction of the cylinder's volume is the cone?\" (Always ⅓)\n• **Given slant height:** The SAT might give the slant height (the diagonal from tip to edge) instead of the vertical height. You'll need the Pythagorean theorem: h² + r² = slant²\n• **Inverted cone problems:** Sand or water draining in an inverted cone shape" },
        { type: "coneExample" },
        { type: "text", content: "**SAT Trap — Forgetting the ⅓:** The most common cone mistake is calculating πr²h and forgetting to multiply by ⅓. Your answer will be exactly 3× the correct answer. If you see an answer choice that's exactly 3 times another choice, one of them forgot the ⅓. Always double-check: \"Did I include the one-third?\"" },
        { type: "text", content: "**SAT Trap — Slant Height vs. Vertical Height:** The height in the cone formula is the **vertical** height (straight up from the base to the tip), NOT the slant height (along the surface). If the SAT gives you slant height l and radius r, find the vertical height with: h = √(l² − r²). Drawing a right triangle inside the cone (with r, h, and slant height) makes this clear." },
        { type: "text", content: "**The ⅓ Pattern on the SAT:** This one-third relationship isn't unique to cones. A pyramid is also ⅓ of a prism with the same base and height. So V(pyramid) = ⅓ × base area × height. The SAT reference sheet shows both formulas, but understanding the pattern means you really only need to remember one idea: **any shape that tapers to a point has ⅓ the volume of its \"un-tapered\" version.**" },
        { type: "text", content: "**Key Takeaway:** V = ⅓πr²h. A cone is one-third of a cylinder. Watch out for slant height vs. vertical height, and never forget the ⅓. These are the two traps the SAT sets for cone problems." }
      ]
    }
  },
  { id: 14, title: "Simple Volume of Cone Example", type: "video", duration: "6 min", section: "Cone", videoId: "e3E58fCpu4E", hero: { tagline: "PRACTICE", subtitle: "Basic cone problems" } },
  // Section: Triangular Prism
  {
    id: 15,
    title: "Volume of a Triangular Prism",
    type: "lesson",
    duration: "5 min",
    section: "Triangular Prism",
    hero: {
      tagline: "½ × b × h × l",
      subtitle: "Triangle meets depth"
    },
    content: {
      blocks: [
        { type: "text", content: "A triangular prism is a 3D shape with two identical triangular faces and three rectangular faces — think of a Toblerone box, a tent, or a door wedge. It follows the same fundamental pattern as every other prism: **Volume = Area of base × length (or depth)**. The only difference here is that the base is a triangle, so you need to calculate the triangle's area first." },
        { type: "triangularPrismIntro" },
        { type: "text", content: "**Building the Formula Step by Step:**\n\n1. The base of the prism is a triangle with area = ½ × base × height\n2. The prism extends this triangle through a length (or depth) l\n3. So the total volume = (½ × b × h) × l = **½bhl**\n\nThis is just \"base area × depth\" — the exact same pattern as rectangular prisms and cylinders. The only thing that changes is how you calculate the base area." },
        { type: "triangularPrismFormula" },
        { type: "text", content: "**SAT Question Patterns for Triangular Prisms:**\n\n• **Direct calculation:** Given the triangle's base, height, and the prism's length — plug into V = ½bhl\n• **Given the volume, solve for a dimension:** Work backwards by dividing\n• **Cross-section problems:** \"A prism has a triangular cross-section with area 24 cm². If the prism is 10 cm long, what is its volume?\" (Just multiply: 24 × 10 = 240 cm³)\n• **Composite shape:** A house-shaped solid = rectangular prism + triangular prism on top" },
        { type: "triangularPrismExample" },
        { type: "text", content: "**SAT Trap — Which Measurement is Which?** Triangular prism problems use three measurements (b, h, l), and the SAT likes to make it unclear which is which. Here's how to keep them straight:\n\n• **b** (base of triangle) and **h** (height of triangle) are the two measurements that define the triangular face\n• **l** (length/depth) is how far the prism extends — it's perpendicular to the triangular face\n\nDraw the shape if you're confused. Labeling the diagram takes 10 seconds and prevents errors." },
        { type: "text", content: "**SAT Trap — The ½ Factor:** Just like the ⅓ in cone problems, students forget the ½ that comes from the triangle area formula. If your answer is exactly double one of the other answer choices, you probably forgot to halve the triangle area. Always ask: \"Did I include the one-half?\"" },
        { type: "text", content: "**The Universal Volume Pattern:** Notice that every prism and cylinder follows the same rule: V = (Area of base) × (depth or height of the prism). The base can be a rectangle, triangle, circle, hexagon — anything. This means if the SAT gives you any weird prism shape and tells you the cross-sectional area, you just multiply by the depth. You don't even need a special formula." },
        { type: "text", content: "**Key Takeaway:** V = ½ × b × h × l. A triangular prism is just a triangle extended through space. Remember the ½ from the triangle area, identify which measurements belong to the triangle and which is the prism's depth, and you're set." }
      ]
    }
  },
  { id: 16, title: "Simple Volume of Triangular Prism Example", type: "video", duration: "6 min", section: "Triangular Prism", videoId: "Hu_1bndFGFY", hero: { tagline: "PRACTICE", subtitle: "Triangular prism basics" } },
  // Section: Applied Volume
  {
    id: 17,
    title: "Density & Applied Volume",
    type: "lesson",
    duration: "6 min",
    section: "Applied Volume",
    hero: {
      tagline: "MASS = DENSITY × VOLUME",
      subtitle: "Turning volume into mass, cost, and counts"
    },
    content: {
      blocks: [
        { type: "text", content: "You already know how to find the volume of every solid on the reference sheet. This lesson is the layer that sits on **top** of those formulas: once you know how much space a solid takes up, the SAT often asks a second question — how **heavy** is it, how **much does it cost**, or **how many units** fit? Almost every one of those follow-ups runs through one relationship: **mass = density × volume**." },
        { type: "text", content: "**Density is just a ratio.** Density tells you how much mass is packed into each unit of volume — grams per cubic centimeter, pounds per cubic foot, and so on. The unit string IS the formula: g/cm³ literally reads \"grams divided by cubic centimeters.\" So density = mass ÷ volume, and you can rearrange it three ways depending on which slot is missing:\n\n• **mass = density × volume** (volume and density known)\n• **volume = mass ÷ density** (mass and density known)\n• **density = mass ÷ volume** (mass and volume known)" },
        { type: "text", content: "**The universal applied pattern: find the volume FIRST.** Applied solid problems are almost always two steps. Step 1: compute the volume with the right formula (cube, prism, cylinder, whatever the solid is). Step 2: multiply or divide that volume by a rate — density (to get mass), a price per cubic unit (to get cost), or a per-unit amount (to get a count). The SAT hides the two-step structure inside a story, but the skeleton is always \"volume, then multiply.\"" },
        { type: "text", content: "**Worked example — volume then mass.** A solid metal bar is a rectangular prism $4$ cm by $5$ cm by $20$ cm. The metal has a density of $8$ g/cm³. What is the mass?\n\n• Step 1 — volume: $V = 4 \\times 5 \\times 20 = 400$ cm³.\n• Step 2 — mass: mass = density × volume = $8 \\times 400 = 3{,}200$ g.\n\nNotice you never needed to memorize a density formula — you read it straight out of the units." },
        { type: "text", content: "**Worked example — volume then cost.** Concrete costs $\\$6$ per cubic foot. A rectangular footing is $3$ ft by $2$ ft by $0.5$ ft. What does the concrete cost?\n\n• Step 1 — volume: $V = 3 \\times 2 \\times 0.5 = 3$ ft³.\n• Step 2 — cost: cost = rate × volume = $6 \\times 3 = \\$18$.\n\nSame skeleton — the only thing that changed is the rate you multiply by." },
        { type: "text", content: "**SAT Trap — keep the units consistent.** The single biggest mistake in applied volume problems is a **unit mismatch**. If the density is given in g/cm³, your volume must be in cm³ before you multiply. If one dimension is in inches and another in feet, convert first — and remember that volume conversions cube the factor (1 ft = 12 in, but 1 ft³ = 12³ = 1,728 in³). Line up the units before you calculate, not after." },
        { type: "text", content: "**SAT Trap — pick the right rearrangement.** Read the question to see which slot is missing. \"Given the density and dimensions, find the mass\" means multiply. \"Given the mass and density, find the volume (then a dimension)\" means divide, and you may then run a volume formula backward to recover a length. Deciding multiply-vs-divide up front prevents the classic inverted-answer trap." },
        { type: "text", content: "**Key Takeaway:** Applied volume = volume first, then one multiplication or division by a rate. Density is mass ÷ volume — the units tell you the formula, so there is nothing extra to memorize. Keep every measurement in matching units, decide whether the missing slot calls for multiplying or dividing, and these \"hard\" problems collapse into two clean steps." }
      ]
    }
  }
];
