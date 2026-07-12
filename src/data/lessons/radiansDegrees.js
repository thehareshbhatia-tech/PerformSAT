export const radiansDegreesLessons = [
  {
    id: 1,
    title: "Radians & Degrees",
    type: "lesson",
    duration: "5 min",
    section: "Converting Angles",
    hero: {
      tagline: "TWO WAYS TO MEASURE",
      subtitle: "Converting between angle units"
    },
    content: {
      blocks: [
        { type: "text", content: "You already know one way to measure angles: **degrees**. A full circle is 360°, a right angle is 90°, a straight line is 180°. But there's a second system — **radians** — and the SAT expects you to move fluently between both. Radians aren't harder than degrees; they're just a different ruler for measuring the same thing. Let's make sure you understand WHY radians exist and HOW to convert." },
        { type: "text", content: "**What Is a Radian, Really?** Imagine you take the radius of a circle and \"lay it down\" along the circumference, like wrapping a string around the edge. The angle created by that arc is exactly **1 radian**. Since the full circumference is 2πr, it takes exactly **2π radius-lengths** to go all the way around. That's why a full circle = 2π radians. It's not a random number — it comes directly from the geometry of the circle." },
        { type: "radiansDegreesIntro" },
        { type: "text", content: "**The Master Conversion:** Since 360° = 2π radians, we can simplify: **180° = π radians**. This single equation is the key to every conversion:\n\n• **Degrees → Radians:** Multiply by π/180\n• **Radians → Degrees:** Multiply by 180/π\n\nThink of it as a fraction that equals 1: π radians / 180° = 1. You're just multiplying by 1 in a clever form." },
        { type: "conversionFormulas", notGiven: true },
        { type: "commonAnglesTable" },
        { type: "text", content: "**SAT Question Patterns:**\n\n• **Direct conversion:** \"Convert 5π/6 radians to degrees\" (multiply by 180/π → 150°)\n• **Trig function with wrong mode:** The Desmos calculator on the SAT defaults to radians. If a problem gives an angle in degrees, you must convert to radians first or switch the calculator mode\n• **Arc length / sector area:** These formulas use radians (s = rθ, A = ½r²θ), so the SAT may give an angle in degrees that you need to convert before plugging in\n• **Unit circle questions:** Key angles (π/6, π/4, π/3, π/2) and their trig values" },
        { type: "text", content: "**SAT Trap — Desmos Calculator Mode:** This trips up students on every test. The built-in Desmos calculator defaults to **radian mode**. If you type sin(90) expecting sin(90°) = 1, you'll get sin(90 radians) ≈ 0.894, which is wrong. **Always check your calculator mode.** Click the wrench icon in Desmos to switch between degrees and radians. Better yet: if the problem gives degrees, convert to radians yourself so you don't depend on the calculator mode." },
        { type: "desmosTip" },
        { type: "text", content: "**Quick Mental Conversions — The π/180 Shortcut:** For common angles, it helps to think in terms of fractions of 180°. Since 180° = π:\n\n• 30° = 180°/6 = π/6\n• 45° = 180°/4 = π/4\n• 60° = 180°/3 = π/3\n• 90° = 180°/2 = π/2\n\nSee the pattern? The denominator tells you what fraction of 180° the angle is. Memorizing these five angles (plus 0° and 180°/360°) covers most SAT radian problems." },
        { type: "text", content: "**Key Takeaway:** 180° = π radians. That's the bridge between the two systems. Multiply by π/180 to go from degrees to radians, or 180/π to go the other way. Know the common angles cold, and always verify your Desmos calculator mode before evaluating trig functions." }
      ]
    }
  },
  { id: 2, title: "Simple Converting Radians to Degrees Example", type: "video", duration: "6 min", section: "Converting Angles", videoId: "Ymvs5c9ZGoU", hero: { tagline: "PRACTICE", subtitle: "Radians to degrees" } },
  { id: 3, title: "Using DESMOS Calculator in Radian Mode Example", type: "video", duration: "5 min", section: "Converting Angles", videoId: "fMeL-KVlrgA", hero: { tagline: "DESMOS", subtitle: "Radian mode calculations" } },
  { id: 4, title: "Using DESMOS Calculator in Degree Mode Example", type: "video", duration: "5 min", section: "Converting Angles", videoId: "fMeL-KVlrgA", hero: { tagline: "DESMOS", subtitle: "Degree mode calculations" } },
  {
    id: 5,
    title: "Evaluating on the Unit Circle",
    type: "lesson",
    duration: "7 min",
    section: "The Unit Circle",
    hero: {
      tagline: "COORDINATES ARE THE RULE",
      subtitle: "Reading sine, cosine, and tangent off the circle"
    },
    content: {
      blocks: [
        { type: "text", content: "Right-triangle trig only defines sine, cosine, and tangent for angles between 0° and 90°. The **unit circle** — a circle of radius 1 centered at the origin — finishes the job. Place an angle **θ** in standard position (vertex at the origin, initial side along the positive x-axis). Where its terminal side crosses the circle, the point has coordinates **(cos θ, sin θ)**. So the x-coordinate *is* the cosine, the y-coordinate *is* the sine, and tan θ = (sin θ)/(cos θ) = y/x. For acute angles this matches the triangle ratios exactly; for every other angle, it becomes the definition." },
        { type: "text", content: "**Magnitude and sign are two separate jobs.** The size of a value comes from the reference angle — the acute angle between the terminal side and the x-axis. The sign comes from the quadrant, read straight off the coordinates: cosine takes the sign of x, sine takes the sign of y, tangent takes the sign of their quotient. No mnemonic needed — the coordinates are the rule." },
        { type: "list", title: "Signs by quadrant", items: [
          "Quadrant I (0 to π/2): x > 0, y > 0 → sin +, cos +, tan +",
          "Quadrant II (π/2 to π): x < 0, y > 0 → sin +, cos −, tan −",
          "Quadrant III (π to 3π/2): x < 0, y < 0 → sin −, cos −, tan +",
          "Quadrant IV (3π/2 to 2π): x > 0, y < 0 → sin −, cos +, tan −"
        ]},
        { type: "formula", title: "Definitions on the circle", content: "For a point (x, y) on a circle of radius r: sin θ = y/r, cos θ = x/r, tan θ = y/x. On the unit circle r = 1, so sin θ = y and cos θ = x. Because |x| ≤ 1 and |y| ≤ 1, neither sine nor cosine can ever exceed 1 in size." },
        { type: "text", content: "**The common angles.** Memorize the first-quadrant landmarks and you can rebuild the rest by attaching signs: at π/6, (√3/2, 1/2); at π/4, (√2/2, √2/2); at π/3, (1/2, √3/2). The axis angles are exact: 0 → (1, 0), π/2 → (0, 1), π → (−1, 0), 3π/2 → (0, −1)." },
        { type: "example", title: "Evaluating in Quadrant II", content: "Find cos(2π/3). The angle 2π/3 = 120° lands in Quadrant II, where x is negative. Its reference angle is π − 2π/3 = π/3, whose cosine has magnitude 1/2. Attach the Quadrant-II sign: cos(2π/3) = −1/2." },
        { type: "example", title: "Reading a terminal point", content: "A terminal point on the circle is (−3, 4) (not on the unit circle). First r = √((−3)² + 4²) = √25 = 5 — always positive. Then sin θ = 4/5, cos θ = −3/5, tan θ = 4/(−3) = −4/3. The signs arrive for free inside x and y." },
        { type: "text", content: "**Key takeaway:** A point at angle θ is (cos θ, sin θ). Reduce large or negative angles by full turns (2π, not π) until you land in one revolution, find the reference angle for the magnitude, then attach the quadrant's sign last as a separate step. When a terminal point is given, r = √(x² + y²) is always positive — the signs live only in x and y." }
      ]
    }
  }
];
