export const linearEquationsLessons = [
  // Section: Fundamentals
  {
    id: 1,
    title: "Linear Equations",
    type: "lesson",
    duration: "5 min",
    section: "Fundamentals",
    hero: {
      tagline: "THE FOUNDATION",
      subtitle: "Everything starts with a straight line"
    },
    content: {
      blocks: [
        { type: "text", content: "Linear equations are the simplest and most powerful relationship in math — one thing changes **at a constant rate** with respect to another. Think of it like a cell phone plan: you pay a flat monthly fee (the y-intercept) plus a fixed rate per gigabyte used (the slope). No matter how much data you use, the cost per GB never changes. That **constant rate of change** is what makes it linear." },
        { type: "text", content: "The word *linear* literally comes from *line*. When you take every possible x-value, plug it into the equation, and plot the resulting (x, y) pairs on a coordinate plane, they **always form a perfectly straight line**. No curves, no bends, no surprises." },
        { type: "text", content: "How can you tell if an equation is linear just by looking at it? Check the **degree** — the highest power of x. In a linear equation, the highest degree is always **1** (that is, x¹). The moment you see x², x³, or √x, you're dealing with something nonlinear." },
        { type: "formula", label: "Slope-Intercept Form", content: "y = mx + b" },
        { type: "text", content: "This is the form you'll see most often on the SAT. It has exactly **two components**: **m** is the **slope** (how fast y changes as x changes), and **b** is the **y-intercept** (where the line crosses the y-axis, i.e., the value of y when x = 0)." },
        { type: "text", content: "Why does slope-intercept form matter so much for the SAT? Because the test loves to give you an equation and ask you to interpret what m and b *mean* in a real-world context. For instance, if y = 50x + 200 models the cost of a catering service, they'll ask: \"What does the 200 represent?\" (the base fee) or \"What does the 50 represent?\" (the cost per guest). Train yourself to read m and b as *meaning* something, not just numbers." },
        { type: "text", content: "**Common SAT trap:** The test sometimes writes equations in forms that don't look like y = mx + b — for example, **2y = 6x + 10** or **y − 3 = 4(x − 1)**. Don't panic. Just rearrange to isolate y and you'll see the slope and y-intercept clearly. In the first case, divide everything by 2 to get y = 3x + 5 (slope = 3, y-intercept = 5)." },
        { type: "text", content: "**Key takeaway:** Every linear equation is defined entirely by two things — its slope and its y-intercept. Master those two ideas and you've unlocked the foundation for a huge chunk of the SAT math section." }
      ]
    }
  },
  {
    id: 2,
    title: "What Is the Slope?",
    type: "lesson",
    duration: "6 min",
    section: "Fundamentals",
    hero: {
      tagline: "RISE OVER RUN",
      subtitle: "How steep is your line?"
    },
    content: {
      blocks: [
        { type: "text", content: "Slope answers one of the most natural questions you can ask about a line: **how steep is it?** But it's more than just steepness — slope tells you the **rate of change**, meaning how much the y-value changes every time the x-value goes up by 1. It's the heartbeat of every linear equation." },
        { type: "text", content: "Think of slope like a hiking trail. A slope of 3 means for every 1 step forward (horizontally), you climb 3 steps up (vertically). A slope of ½ means for every 2 steps forward, you only climb 1 step up — a much gentler path. A negative slope? You're going downhill." },
        { type: "text", content: "Mathematically, slope is the **change in y divided by the change in x** — often called **\"rise over run.\"** Rise = how much you go up or down (vertical change). Run = how much you go left or right (horizontal change)." },
        { type: "list", items: [
          "**Positive slope** → line goes UP from left to right (y increases as x increases)",
          "**Negative slope** → line goes DOWN from left to right (y decreases as x increases)",
          "**Zero slope** → line is perfectly HORIZONTAL (y never changes — it's constant)",
          "**Undefined slope** → line is perfectly VERTICAL (x never changes — this is NOT a function)"
        ] },
        { type: "example", title: "Example", content: "In the equation **y = 3x + 2**, the slope is **3** (or ³⁄₁)\n\nAnd because slope is ( the change in y ) over ( the change in x )\n\n**For every 1 unit you increase x, y increases by 3**" },
        { type: "text", content: "**SAT context questions:** The SAT loves asking what slope *means* in a word problem. If an equation models the number of books a library adds per month, and the slope is 150, the answer is \"the library adds 150 books *per month*.\" The slope is always \"the amount of [y-unit] *per* [x-unit].\" Memorize that pattern — it shows up on nearly every test." },
        { type: "text", content: "**Common SAT trap:** Students sometimes confuse slope with y-intercept. Remember — slope is the **rate** (how fast something changes), while the y-intercept is the **starting point** (where things begin when x = 0). The SAT will put both as answer choices and count on you mixing them up. Don't." },
        { type: "text", content: "**Quick gut-check trick:** If someone asks \"what is the slope?\" and you get a number like 50,000 for a problem about daily temperature changes, something is probably wrong. Slope should make sense in context. Always sanity-check your answer." }
      ]
    }
  },
  {
    id: 3,
    title: "Determining Slope from Two Coordinates",
    type: "lesson",
    duration: "5 min",
    section: "Fundamentals",
    hero: {
      tagline: "THE SLOPE FORMULA",
      subtitle: "Two points tell you everything"
    },
    content: {
      blocks: [
        { type: "text", content: "Here's a powerful fact: **any two points on a line are enough to determine the slope of the entire line.** Since a linear equation has a constant rate of change, the slope between *any* two points on it will always be the same. So if you know just two coordinates, you can unlock the slope." },
        { type: "text", content: "Label your two points **(x₁, y₁)** and **(x₂, y₂)**. It doesn't matter which point you call \"point 1\" and which you call \"point 2\" — as long as you stay consistent (subtract in the same order on top and bottom)." },
        { type: "formula", label: "Slope Formula", prefix: "slope =", fraction: { numerator: "y₂ - y₁", denominator: "x₂ - x₁" }, numeratorColor: "#ea580c", denominatorColor: "#3b82f6", notGiven: true },
        { type: "text", content: "The numerator (**y₂ − y₁**) measures the **vertical change** (rise) — how much the y-value changed between the two points. The denominator (**x₂ − x₁**) measures the **horizontal change** (run) — how much the x-value changed. Divide the two and you get the rate of change." },
        { type: "example", title: "Example", content: "Find the slope of the line through **(2, 3)** and **(5, 9)**\n\nslope = (9 − 3) / (5 − 2) = 6 / 3 = **2**\n\nThe line rises 2 units for every 1 unit it moves to the right." },
        { type: "text", content: "**Common SAT trap #1: Inconsistent subtraction order.** If you subtract y₂ − y₁ on top, you MUST subtract x₂ − x₁ on bottom (same order). Mixing the order — like doing (9 − 3) / (2 − 5) — flips the sign and gives you the wrong slope. This is the #1 careless mistake students make with this formula." },
        { type: "text", content: "**Common SAT trap #2: Getting 0 in the numerator vs. denominator.** If y₂ − y₁ = 0, the slope is **0** (horizontal line). If x₂ − x₁ = 0, the slope is **undefined** (vertical line). The SAT loves testing whether you know the difference." },
        { type: "text", content: "**Pro tip for the SAT:** When you see a question that gives you two points and asks for the equation of the line, start by finding the slope with this formula. Then plug the slope and one of the points into y = mx + b to solve for b. Two steps, and you have the full equation." }
      ]
    }
  },
  {
    id: 4,
    title: "Determining Slope from Table",
    type: "lesson",
    duration: "5 min",
    section: "Fundamentals",
    hero: {
      tagline: "READ THE PATTERN",
      subtitle: "Find slope from any data table"
    },
    content: {
      blocks: [
        { type: "text", content: "The SAT frequently gives you a table of x and y values and asks you to find the slope, write the equation, or make a prediction. The good news? Finding slope from a table is essentially the same as finding it from two points — you're just reading the points off a table instead of being told them directly." },
        { type: "text", content: "Here's the approach: look at how much **Y changes** (we call this **ΔY**, read \"delta Y\") between consecutive rows, and how much **X changes** (ΔX) between those same rows. Then divide: slope = ΔY / ΔX." },
        { type: "table", headers: ["X", "2", "4", "6", "8"], row: ["Y", "0", "3", "6", "9"], xChange: "+2", yChange: "+3" },
        { type: "text", content: "In this table, every time X increases by **2**, Y increases by **3**. That pattern is constant across the entire table — which confirms this is a linear relationship." },
        { type: "formula", label: "Result", prefix: "", fraction: { numerator: "ΔY", denominator: "ΔX" }, suffix: "=", secondFraction: { numerator: "+3", denominator: "+2" }, secondSuffix: "= ³⁄₂", numeratorColor: "#ea580c", denominatorColor: "#3b82f6" },
        { type: "text", content: "**Pro tip:** You don't have to use consecutive rows. You could pick the first and last values — (2, 0) and (8, 9) — and apply the slope formula: (9 − 0) / (8 − 2) = 9/6 = 3/2. Same answer. Using any two rows works because the rate of change is constant." },
        { type: "text", content: "**Common SAT trap: Non-uniform x-spacing.** Sometimes the x-values in the table don't increase by the same amount each row (e.g., x = 1, 2, 5, 10). Students who just look at the y-column and assume each step is equal will get the wrong slope. Always check both columns and divide ΔY by ΔX — don't assume ΔX = 1." },
        { type: "text", content: "**What if the table isn't linear?** If the ΔY/ΔX ratio changes from row to row, the relationship is NOT linear. On the SAT, if they ask for a \"line of best fit,\" the data might not be perfectly linear. But if they give you a table and ask for *the* slope, it should be consistent — and if it's not, double-check your arithmetic." },
        { type: "text", content: "**SAT strategy:** Once you have the slope from the table, you can find the full equation by plugging any (x, y) pair from the table into y = mx + b and solving for b. This is one of the fastest ways to handle \"which equation represents the data in the table?\" questions." }
      ]
    }
  },
  {
    id: 5,
    title: "Determining Slope from Graph",
    type: "lesson",
    duration: "5 min",
    section: "Fundamentals",
    hero: {
      tagline: "COUNT THE STEPS",
      subtitle: "Rise and run on any graph"
    },
    content: {
      blocks: [
        { type: "text", content: "On the SAT, you'll sometimes see a graph of a line and be asked to find the slope, the equation, or to compare it to another line. The skill here is reading slope directly off the graph — no equation needed. It's more visual and intuitive than the formula, and it's a great way to double-check your algebraic work." },
        { type: "text", content: "Here's the method: **pick two points** on the line that land cleanly on grid intersections (where the grid lines cross — these give you whole-number coordinates). Then count the **rise** (vertical change) and the **run** (horizontal change) between them." },
        { type: "text", content: "**Rise** = how many grid squares you move **up or down** (up is positive, down is negative). **Run** = how many grid squares you move **to the right** (always move left to right so the run is positive). Then: slope = rise / run." },
        { type: "slopeFromGraphDiagram" },
        { type: "text", content: "In this diagram, starting from the left point and moving to the right point, the line drops **3 units** (rise = −3) and moves **5 units to the right** (run = +5). So the slope is **−3/5**." },
        { type: "text", content: "The line has a slope of **-³⁄₅**" },
        { type: "text", content: "**Why the sign matters:** Notice the line goes *downward* from left to right — that's your visual cue that the slope is negative. Lines that go upward from left to right have positive slopes. Train your eye to spot the direction before you even count — it helps catch sign errors." },
        { type: "text", content: "**Common SAT trap: Swapping rise and run.** If you count 3 vertically and 5 horizontally but write 5/3 instead of 3/5, you've flipped the fraction. Remember: rise (vertical, y-change) is ALWAYS on top, run (horizontal, x-change) is ALWAYS on the bottom. A good mnemonic: \"rise\" rhymes with \"numerator\" — okay, not really, but rise goes on top because it goes *up*." },
        { type: "text", content: "**Pro tip:** Always pick points where the line crosses exact grid intersections. If you try to read a point that falls *between* grid lines, you'll estimate and likely get the wrong answer. The SAT always draws lines so that at least two clear grid intersections are available — find them." }
      ]
    }
  },
  {
    id: 6,
    title: "What is the Y-Intercept?",
    type: "lesson",
    duration: "5 min",
    section: "Fundamentals",
    hero: {
      tagline: "WHERE IT ALL BEGINS",
      subtitle: "The starting point of every line"
    },
    content: {
      blocks: [
        { type: "text", content: "If slope tells you *how fast* something is changing, the y-intercept tells you *where it started*. It's the value of y **when x equals zero** — before anything has happened, before any time has passed, before any units have been used. It's your baseline, your starting point, your initial condition." },
        { type: "text", content: "Graphically, the y-intercept is the exact point where the line **crosses the y-axis**. Since the y-axis is the vertical line where x = 0, the y-intercept is always at the coordinate **(0, b)**." },
        { type: "yInterceptDiagram" },
        { type: "list", items: [
          "It's the value of **y when x = 0**",
          "In coordinate form, it's always **( 0, b )**",
          "In real-world problems, the y-intercept typically represents the **initial value** — the starting amount before any changes occur"
        ] },
        { type: "example", title: "Example", content: "In the equation **y = 3x + 2**, the y-intercept is **2**\n\n→ the line crosses the y-axis at the point **( 0, 2 )**" },
        { type: "text", content: "**Real-world intuition:** Imagine a taxi ride where the fare is modeled by y = 2.50x + 3. Here, x is miles driven and y is the total fare. The y-intercept (3) is the **base fare** — what you pay the moment you step in, before you've driven a single mile. The slope (2.50) is the rate per mile. The SAT loves asking: \"What does the 3 represent in this equation?\" Now you know: it's the starting cost." },
        { type: "text", content: "**How to find the y-intercept from an equation:** If the equation is in slope-intercept form (y = mx + b), just read off b — it's the constant term. If it's in another form like 2x + 3y = 12, set x = 0 and solve: 3y = 12, so y = 4. The y-intercept is (0, 4)." },
        { type: "text", content: "**Common SAT trap: Confusing x-intercept with y-intercept.** The y-intercept is where the line crosses the *y-axis* (set x = 0). The x-intercept is where the line crosses the *x-axis* (set y = 0). The SAT sometimes asks for the x-intercept hoping you'll accidentally give the y-intercept, or vice versa. Read the question carefully." },
        { type: "text", content: "**Common SAT trap: Negative y-intercepts.** In y = 4x − 7, the y-intercept is **−7**, not 7. That minus sign is part of the value. The line crosses the y-axis *below* the origin. Don't drop the negative." },
        { type: "text", content: "**Key insight for SAT word problems:** Whenever a question asks \"what is the meaning of [some constant] in the equation,\" there's a strong chance they're asking about the y-intercept. It's almost always an initial amount, a starting value, a flat fee, or a base quantity. Recognizing this pattern will save you time and earn you easy points." }
      ]
    }
  },
  // Section: Deriving Equations
  { id: 7, title: "Deriving Linear Equations From Context", type: "video", duration: "10 min", section: "Deriving Equations", videoId: "p9m2tKpTKzM", hero: { tagline: "WORD PROBLEM", subtitle: "From story to equation" } },
  { id: 8, title: "Deriving Linear Equations From Graph (Example 1)", type: "video", duration: "8 min", section: "Deriving Equations", videoId: "nwqjqznGy1w", hero: { tagline: "PRACTICE", subtitle: "Reading graphs" } },
  { id: 9, title: "Deriving Linear Equations From Graph (Example 2)", type: "video", duration: "8 min", section: "Deriving Equations", videoId: "s0OT5hRgkv8", hero: { tagline: "PRACTICE", subtitle: "More graph examples" } },
  { id: 10, title: "Deriving Linear Equations From Table", type: "video", duration: "8 min", section: "Deriving Equations", videoId: "sUwnF6j8ES4", hero: { tagline: "PRACTICE", subtitle: "Table to equation" } },
  { id: 11, title: "Deriving Linear Equations From Function Notation", type: "video", duration: "8 min", section: "Deriving Equations", videoId: "4HC-rL8KPAc", hero: { tagline: "PRACTICE", subtitle: "Function notation approach" } },
  // Section: Parallel Lines
  {
    id: 12,
    title: "Parallel Lines",
    type: "lesson",
    duration: "5 min",
    section: "Parallel Lines",
    hero: {
      tagline: "NEVER CROSS",
      subtitle: "Same slope, different paths"
    },
    content: {
      blocks: [
        { type: "text", content: "Imagine two train tracks running side by side. They point in the same direction, they have the same steepness, and no matter how far they extend, they **never cross**. That's the essence of parallel lines — two or more lines in the same plane that never intersect, no matter how far you extend them in either direction." },
        { type: "parallelLinesDiagram" },
        { type: "text", content: "The defining property of parallel lines is simple and critical: **parallel lines have the SAME slope.** Because their slopes are equal, they rise and run at exactly the same rate. They're always the same distance apart — like railroad tracks — which is why they never cross." },
        { type: "text", content: "But having the same slope alone isn't the full picture. Parallel lines must also have **different y-intercepts**. Think about it: if two lines have the same slope AND the same y-intercept, they pass through the same point at the same angle — meaning they're actually the **same exact line**, not two parallel lines." },
        { type: "list", items: [
          "**Same slope** → lines go in the same direction at the same steepness",
          "**Different y-intercepts** → lines are offset from each other (shifted up or down)",
          "Same slope + same y-intercept → **same line** (infinitely many solutions in a system)",
          "Same slope + different y-intercept → **parallel lines** (no solutions in a system)"
        ] },
        { type: "text", content: "**Why this matters for the SAT:** Parallel lines show up in two major ways. First, the SAT asks you to find the equation of a line parallel to a given line through a specific point. Second — and this is the harder version — they appear in **systems of equations** where you need to find the value of a constant that makes the system have *no solution*. No solution = the lines are parallel = the slopes are equal." },
        { type: "example", title: "Example", content: "Line A: y = 3x + 5\nLine B: y = 3x − 2\n\nBoth have slope **3** but different y-intercepts (5 vs. −2).\nThese lines are **parallel** — they will never intersect." },
        { type: "text", content: "**Common SAT trap: Equations not in slope-intercept form.** The test might give you lines like 4x + 2y = 10 and 6x + 3y = 9 and ask if they're parallel. You need to rearrange both into y = mx + b form to compare slopes. (These simplify to y = −2x + 5 and y = −2x + 3 — same slope, so yes, parallel.)" },
        { type: "text", content: "**Key rule to memorize:** Two lines are parallel if and only if they have **equal slopes** and **different y-intercepts**. On the SAT, whenever you see the words \"no solution\" in a system question, think: parallel lines, same slope." }
      ]
    }
  },
  { id: 13, title: "Simple Parallel Lines Question #1", type: "video", duration: "6 min", section: "Parallel Lines", videoId: "bY6HSCB0hHE", hero: { tagline: "PRACTICE", subtitle: "Basic parallel lines" } },
  { id: 14, title: "Simple Parallel Lines Question #2", type: "video", duration: "6 min", section: "Parallel Lines", videoId: "5McgHKQg0M4", hero: { tagline: "PRACTICE", subtitle: "More basic examples" } },
  { id: 15, title: "Simple Parallel Lines in a System Question", type: "video", duration: "8 min", section: "Parallel Lines", videoId: "a6Wph54Ks6c", hero: { tagline: "SYSTEMS", subtitle: "Parallel in systems" } },
  { id: 16, title: "Complex Parallel Lines in a System Question #1", type: "video", duration: "10 min", section: "Parallel Lines", videoId: "kWAW26BUVak", hero: { tagline: "ADVANCED", subtitle: "Complex system #1" } },
  { id: 17, title: "Complex Parallel Lines #1 (DESMOS Method)", type: "video", duration: "8 min", section: "Parallel Lines", videoId: "F9GUje7wxVo", hero: { tagline: "DESMOS METHOD", subtitle: "Visual approach #1" } },
  { id: 18, title: "Complex Parallel Lines in a System Question #2", type: "video", duration: "10 min", section: "Parallel Lines", videoId: "ajbuDVZK_w0", hero: { tagline: "ADVANCED", subtitle: "Complex system #2" } },
  { id: 19, title: "Complex Parallel Lines #2 (DESMOS Method)", type: "video", duration: "8 min", section: "Parallel Lines", videoId: "kpc7cVNdPLc", hero: { tagline: "DESMOS METHOD", subtitle: "Visual approach #2" } },
  { id: 20, title: "Complex Parallel Lines in a System Question #3", type: "video", duration: "10 min", section: "Parallel Lines", videoId: "4qZLRcR2nDc", hero: { tagline: "ADVANCED", subtitle: "Complex system #3" } },
  { id: 21, title: "Complex Parallel Lines #3 (Answer Choices Method)", type: "video", duration: "8 min", section: "Parallel Lines", videoId: "AypfTD5JHuk", hero: { tagline: "STRATEGY", subtitle: "Answer choice elimination" } },
  // Section: Perpendicular Lines
  {
    id: 22,
    title: "Perpendicular Lines",
    type: "lesson",
    duration: "5 min",
    section: "Perpendicular Lines",
    hero: {
      tagline: "90° ANGLES",
      subtitle: "When lines meet at right angles"
    },
    content: {
      blocks: [
        { type: "text", content: "Perpendicular lines are **two lines that intersect to form perfect 90° angles** — right angles, like the corner of a piece of paper or the intersection of a wall and a floor. While parallel lines never meet, perpendicular lines *do* meet, and they meet in the most \"squared-off\" way possible." },
        { type: "perpendicularLinesDiagram" },
        { type: "text", content: "The key property is about their slopes: the slopes of perpendicular lines are **negative reciprocals** of each other. That means you take the slope, **flip it** (reciprocal) and **change its sign** (negative). If one line has a slope of 2/3, the perpendicular line has a slope of **−3/2**. If one line has a slope of −4 (which is −4/1), the perpendicular line has a slope of **1/4**." },
        { type: "text", content: "Here's an intuitive way to think about it: if a line goes UP steeply (large positive slope), the perpendicular line must go DOWN gently (small negative slope). They have to \"oppose\" each other in both direction and steepness to create that perfect 90° angle. Multiply the two slopes together and you'll always get **−1**. That's the mathematical test: m₁ × m₂ = −1." },
        { type: "list", items: [
          "**Slope of 3** → perpendicular slope is **−1/3** (flip, then negate)",
          "**Slope of −2/5** → perpendicular slope is **5/2** (flip, then negate)",
          "**Slope of 1** → perpendicular slope is **−1** (flip 1/1 → 1/1, then negate)",
          "**Slope of 0 (horizontal)** → perpendicular is **undefined (vertical)** — and vice versa"
        ] },
        { type: "text", content: "What about y-intercepts? Unlike parallel lines, the y-intercepts of perpendicular lines **do not matter at all**. The y-intercepts can be the same or different — it makes no difference. Perpendicularity is determined entirely by the slopes. As long as the slopes are negative reciprocals, the lines are perpendicular regardless of where they cross the y-axis." },
        { type: "example", title: "Example", content: "Line A: y = 2x + 5 (slope = 2)\nLine B: y = −½x + 1 (slope = −½)\n\nCheck: 2 × (−½) = **−1** ✓\n\nThese lines are **perpendicular** — they intersect at a 90° angle." },
        { type: "text", content: "**Common SAT trap: Forgetting to negate.** Students often flip the fraction but forget to change the sign. The reciprocal of 3 is 1/3, but the *negative* reciprocal is **−1/3**. Both steps — flip AND negate — are required. If you only flip without negating, the lines won't form 90° angles." },
        { type: "text", content: "**Common SAT trap: Whole numbers and fractions.** When a slope is a whole number like 5, students forget it's really 5/1. The negative reciprocal is −1/5. Conversely, if the slope is 1/4, the negative reciprocal is −4 (flip 1/4 → 4/1 = 4, then negate → −4)." },
        { type: "text", content: "**SAT strategy:** Perpendicular line questions usually follow a two-step pattern: (1) find the negative reciprocal of the given slope, and (2) use a given point to find the y-intercept of the new line. Master the negative reciprocal step and these become quick, reliable points on test day." }
      ]
    }
  },
  { id: 23, title: "Simple Perpendicular Lines Question", type: "video", duration: "6 min", section: "Perpendicular Lines", videoId: "62BK8zl8FjA", hero: { tagline: "PRACTICE", subtitle: "Basic perpendicular" } },
  { id: 24, title: "Complex Perpendicular Lines Question", type: "video", duration: "10 min", section: "Perpendicular Lines", videoId: "Xw5bLjiPKOU", hero: { tagline: "ADVANCED", subtitle: "Challenging perpendicular" } }
];
