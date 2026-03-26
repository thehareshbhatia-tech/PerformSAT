export const transformationsLessons = [
  // Section: Fundamentals
  {
    id: 1,
    title: "What is a Transformation?",
    type: "lesson",
    duration: "4 min",
    section: "Fundamentals",
    hero: {
      tagline: "MOVE & RESHAPE",
      subtitle: "How equations change graphs"
    },
    content: {
      blocks: [
        { type: "text", content: "A **transformation** is a change made to a function's equation that moves, flips, or reshapes its graph on the coordinate plane. Think of it this way: the original function f(x) is like a photograph, and transformations are edits you make to that photograph — sliding it around, flipping it, or stretching it — without changing the fundamental shape." },
        { type: "text", content: "There are several families of transformations:" },
        { type: "list", items: [
          "**Translations** — sliding the graph up, down, left, or right without changing its shape",
          "**Reflections** — flipping the graph over an axis, like looking in a mirror",
          "**Stretches/Compressions** — making the graph taller, shorter, wider, or narrower"
        ]},
        { type: "text", content: "**Why the SAT cares about this so much:** Transformation questions test whether you understand the **relationship between an equation and its graph**. Rather than asking you to graph from scratch (which takes time), the SAT gives you a known function and asks what happens when the equation changes. Students who understand transformations can answer these in under 30 seconds. Students who don't end up trying to plot points — a slow, error-prone approach under time pressure." },
        { type: "text", content: "On the SAT, **translations** (shifts) are by far the most commonly tested transformation type. You'll see them on graphs, in tables of values, and in algebraic expressions. This module focuses primarily on translations because mastering them covers roughly 80% of SAT transformation questions." },
        { type: "text", content: "**The core insight you need to carry forward:** Every transformation can be understood by asking two questions: (1) Is the change happening **inside** the function (affecting x, the input) or **outside** the function (affecting y, the output)? (2) What is the operation — adding, subtracting, multiplying, or negating? Once you can answer those two questions, you can predict exactly what the graph will do." },
        { type: "example", title: "The Big Idea", content: "If you know what **f(x)** looks like, you can figure out what **f(x) + 5** or **f(x − 3)** looks like without graphing from scratch.\n\nTransformations let you take a known function and **predict how changes to the equation affect the graph**.\n\nThis is the algebraic equivalent of saying: \"I know where this building is. If I slide it 3 blocks east and lift it 5 stories, I know exactly where every room ends up.\"" },
        { type: "text", content: "**SAT question formats you'll encounter:**\n\n• A graph is shown, and you're asked which equation matches a shifted version\n• A table of values is given for f(x), and you must find values for f(x + 2) or f(x) − 3\n• An equation is given, and you must describe the transformation in words\n• Two equations are given, and you must identify how one is a transformation of the other" }
      ]
    }
  },
  {
    id: 2,
    title: "Vertical Translations (Up & Down)",
    type: "lesson",
    duration: "5 min",
    section: "Fundamentals",
    hero: {
      tagline: "UP & DOWN",
      subtitle: "Shifting along the y-axis"
    },
    content: {
      blocks: [
        { type: "text", content: "**Vertical translations** shift a graph **up or down** along the y-axis. Of all transformations, these are the most intuitive — they work exactly the way you'd expect." },
        { type: "text", content: "**Why they make sense:** The number being added or subtracted is **outside** the function, which means it modifies the **output** (the y-value). After the function does its work and produces a result, the translation adds to or subtracts from that result. Every single point on the graph gets the same vertical nudge." },
        { type: "formula", label: "Moving UP", content: "f(x) + d" },
        { type: "text", content: "Adding **d** to the function shifts the graph **up** by **d** units. Every y-value increases by d. If a point used to be at (2, 5), it moves to (2, 5 + d)." },
        { type: "formula", label: "Moving DOWN", content: "f(x) − d" },
        { type: "text", content: "Subtracting **d** from the function shifts the graph **down** by **d** units. Every y-value decreases by d. If a point used to be at (2, 5), it moves to (2, 5 − d)." },
        { type: "text", content: "**Real-world analogy:** Imagine an elevator in a building. The floor plan (the function) stays exactly the same — all the rooms are in the same arrangement. But the entire floor has been lifted up or pushed down. Nothing about the shape changes; only the height changes." },
        { type: "example", title: "Example", content: "If **f(x) = x²** (a parabola with vertex at the origin)\n\n• **f(x) + 3 = x² + 3** → parabola shifts **UP 3** (vertex moves from (0,0) to (0,3))\n• **f(x) − 5 = x² − 5** → parabola shifts **DOWN 5** (vertex moves from (0,0) to (0,−5))\n\nThe parabola's shape and width are completely unchanged — only its vertical position moved." },
        { type: "text", content: "**Golden Rule for Vertical Translations:**\nWhen moving a function **up or down**, **ALWAYS** use the **y-intercept** as your reference point, **NEVER** the x-intercept. The y-intercept shifts by exactly d units, making it the most reliable anchor for tracking the translation." },
        { type: "text", content: "**SAT trap — confusing the constant with the shift direction:** When you see g(x) = f(x) − 4, students sometimes think \"minus means the graph was originally 4 units higher\" versus \"the graph moves down 4.\" Both descriptions are valid, but the SAT always asks about the transformation applied TO f(x) to GET g(x). Read the question carefully: \"g(x) = f(x) − 4\" means g's graph is f's graph shifted **down 4**." },
        { type: "text", content: "**On table-based SAT problems:** If you're given a table of values for f(x) and asked to find values for f(x) + 3, simply add 3 to every y-value in the table. The x-values stay exactly the same. This mechanical simplicity is what makes vertical translations the friendliest type of transformation." }
      ]
    }
  },
  {
    id: 3,
    title: "Horizontal Translations (Left & Right)",
    type: "lesson",
    duration: "6 min",
    section: "Fundamentals",
    hero: {
      tagline: "LEFT & RIGHT",
      subtitle: "The counterintuitive shift"
    },
    content: {
      blocks: [
        { type: "text", content: "**Horizontal translations** shift a graph **left or right** along the x-axis. Unlike vertical translations, these work in the **opposite direction** from what you'd intuitively expect — and this counterintuitive behavior is exactly why the SAT tests them so heavily." },
        { type: "text", content: "The key insight: the number being added or subtracted is **inside** the function, grouped with x. It modifies the **input** before the function processes it. Because the change happens at the input stage, the effect on the graph is reversed." },
        { type: "text", content: "**This is the single most counterintuitive rule in SAT math.** The direction is **opposite** to the sign:" },
        { type: "formula", label: "Moving LEFT", content: "f(x + c)" },
        { type: "text", content: "Adding **c** inside the function shifts the graph **LEFT** by **c** units. Plus means left. Yes, really." },
        { type: "formula", label: "Moving RIGHT", content: "f(x − c)" },
        { type: "text", content: "Subtracting **c** inside the function shifts the graph **RIGHT** by **c** units. Minus means right." },
        { type: "example", title: "Why is it backwards? (Two ways to understand it)", content: "**Explanation 1 — The \"earlier activation\" idea:**\nf(x + 3) means the function \"activates\" 3 units sooner. To get the same y-value that used to occur at x = 5, you now only need x = 2. The whole graph shifts **LEFT** because everything happens earlier.\n\n**Explanation 2 — The \"set the inside to zero\" trick:**\nTo find where the key feature lands, set the inside equal to zero. For f(x − 2): x − 2 = 0, so x = 2. The key feature moved to x = 2 — that's a shift RIGHT. For f(x + 4): x + 4 = 0, so x = −4. The key feature moved to x = −4 — that's a shift LEFT.\n\nUse whichever explanation clicks for you." },
        { type: "example", title: "Example", content: "If **f(x) = x²** (a parabola with vertex at origin)\n\n• **f(x + 4) = (x + 4)²** → vertex moves to **(−4, 0)** → parabola shifts **LEFT 4**\n• **f(x − 2) = (x − 2)²** → vertex moves to **(2, 0)** → parabola shifts **RIGHT 2**\n\nIn both cases, the shape and width are unchanged — only the horizontal position moved." },
        { type: "text", content: "**Golden Rule for Horizontal Translations:**\nWhen moving a function **left or right**, **ALWAYS** use the **x-intercept** (or vertex, or any key x-feature) as your reference point, **NEVER** the y-intercept. Horizontal shifts change the x-coordinates of every point while leaving y-coordinates untouched." },
        { type: "text", content: "**SAT trap — the sign switcheroo:** The SAT loves to write expressions like g(x) = f(x − 5) and ask \"How does the graph of g compare to f?\" The minus sign inside tempts you to say \"left 5,\" but the correct answer is **right 5**. Roughly 30% of students pick the wrong direction on these problems. Always pause and apply the rule: minus inside = shift right." },
        { type: "text", content: "**On table-based SAT problems:** If you're given a table for f(x) and asked to find f(x + 2), you must **subtract 2 from every x-value** in the table (the opposite direction again). The y-values stay the same. For example, if f(3) = 7 in the original table, then in the f(x + 2) table, the point (1, 7) replaces (3, 7) because 1 + 2 = 3 gives you the same input to the original function." }
      ]
    }
  },
  {
    id: 4,
    title: "Transformation Rules Summary",
    type: "lesson",
    duration: "4 min",
    section: "Fundamentals",
    hero: {
      tagline: "CHEAT SHEET",
      subtitle: "All the rules in one place"
    },
    content: {
      blocks: [
        { type: "text", content: "This lesson brings everything together into a single, organized framework. When you face a transformation problem on the SAT, you won't have time to re-derive rules from scratch. You need these patterns drilled into automatic recall. Here is your complete reference:" },
        { type: "transformTable" },
        { type: "text", content: "**The master decision tree — ask two questions every time:**\n\n**Question 1: Where is the change?**\n• **Outside** the function (added to or subtracted from the entire f(x)) → **Vertical** shift → affects **y-values**\n• **Inside** the function (added to or subtracted from x itself) → **Horizontal** shift → affects **x-values**\n\n**Question 2: Does the direction match the sign?**\n• Vertical shifts **match** the sign: + goes up, − goes down (intuitive)\n• Horizontal shifts are **opposite** the sign: + goes left, − goes right (counterintuitive)" },
        { type: "list", items: [
          "**Outside the function** (f(x) ± d) → **Vertical** shift → affects **y-values** → direction MATCHES sign",
          "**Inside the function** (f(x ± c)) → **Horizontal** shift → affects **x-values** → direction is OPPOSITE to sign",
          "Vertical and horizontal translations can be **combined** in a single expression — process them independently"
        ]},
        { type: "example", title: "Combined Transformation", content: "What does **f(x − 3) + 7** do to the graph of f(x)?\n\n• **(x − 3)** is INSIDE → horizontal shift → minus = **RIGHT 3**\n• **+ 7** is OUTSIDE → vertical shift → plus = **UP 7**\n\nThe graph moves **right 3 and up 7**.\n\nIf a point on f(x) was at (1, 2), it's now at (1 + 3, 2 + 7) = (4, 9) on the transformed graph." },
        { type: "text", content: "**How the SAT frames combined transformations:** The test might give you g(x) = f(x − 3) + 7 and ask: \"Point (a, b) is on the graph of f. Which point must be on the graph of g?\" The answer is **(a + 3, b + 7)**. Or it might work backward: \"Point (4, 9) is on g. What point is on f?\" Then you reverse both shifts: (4 − 3, 9 − 7) = **(1, 2)**." },
        { type: "text", content: "**SAT trap — vertex form confusion:** The equation y = (x − 3)² + 7 looks like a combined transformation of y = x². The vertex is at (3, 7) — NOT (−3, 7). Students who forget the horizontal sign-flip put the vertex in the wrong place. Always remember: the x-coordinate of the vertex is the value that makes the inside equal to zero. x − 3 = 0 means x = 3." },
        { type: "text", content: "**Speed tip for SAT test day:** When a transformation question appears, don't overthink. Find what's inside and what's outside. Apply the rules mechanically. Check: did I flip the horizontal direction? These problems should take 30–45 seconds once the rules are automatic. If you're spending more than a minute, you're likely second-guessing yourself — trust the rules." },
        { type: "text", content: "**Final check strategy:** If time permits, verify your answer by testing one specific point. Pick an easy input (like x = 0 or x = 1), find the original output, apply the transformation, and confirm the new point matches your predicted answer. This 15-second check catches mistakes that would otherwise cost you the full problem." }
      ]
    }
  },
  // Section: Transformations from Graph
  { id: 5, title: "Simple Transformation From Graph Example", type: "video", duration: "8 min", section: "Transformations from Graph", videoId: "Qdjm9OwykZY", hero: { tagline: "PRACTICE", subtitle: "Reading shifts from graphs" } },
  { id: 6, title: "Complex Transformation From Graph Example", type: "video", duration: "10 min", section: "Transformations from Graph", videoId: "OPDUQ7xR3DY", hero: { tagline: "ADVANCED", subtitle: "Multi-step graph analysis" } },
  // Section: Transformations from Table
  { id: 7, title: "Simple Transformation From Table Example #1", type: "video", duration: "8 min", section: "Transformations from Table", videoId: "FykKYINTDbE", hero: { tagline: "PRACTICE", subtitle: "Finding shifts in data" } },
  { id: 8, title: "Simple Transformation From Table #1 (DESMOS Method)", type: "video", duration: "6 min", section: "Transformations from Table", videoId: "Zw2WJEwEowU", hero: { tagline: "DESMOS METHOD", subtitle: "Visual verification" } },
  { id: 9, title: "Complex Transformation From Table Example", type: "video", duration: "10 min", section: "Transformations from Table", videoId: "MuB5Q2nMEZ4", hero: { tagline: "ADVANCED", subtitle: "Challenging table problems" } },
  { id: 10, title: "Complex Transformation From Table (DESMOS Method)", type: "video", duration: "8 min", section: "Transformations from Table", videoId: "G34X0J7M7qM", hero: { tagline: "DESMOS METHOD", subtitle: "Complex visual approach" } },
  // Section: Transformations from Expression
  { id: 11, title: "Simple Transformation From Expression Example", type: "video", duration: "8 min", section: "Transformations from Expression", videoId: "butfjZEcHcg", hero: { tagline: "PRACTICE", subtitle: "Algebraic transformations" } },
  { id: 12, title: "Complex Transformation From Expression Example #1", type: "video", duration: "10 min", section: "Transformations from Expression", videoId: "Xw5tnurT1Ss", hero: { tagline: "ADVANCED", subtitle: "Multi-step expressions" } },
  { id: 13, title: "Complex Transformation From Expression Example #2", type: "video", duration: "10 min", section: "Transformations from Expression", videoId: "lt3QfNmDDPI", hero: { tagline: "ADVANCED", subtitle: "Challenging scenarios" } },
  // Section: Difficult Transformations
  { id: 14, title: "Difficult Transformations (System of Equations Method)", type: "video", duration: "12 min", section: "Difficult Transformations", videoId: "CygUy93GH6o", hero: { tagline: "EXPERT", subtitle: "System of equations approach" } },
  { id: 15, title: "Difficult Transformations (Answer Choice Method)", type: "video", duration: "10 min", section: "Difficult Transformations", videoId: "6e9Gx_EC8uw", hero: { tagline: "EXPERT", subtitle: "Strategic elimination" } }
];
