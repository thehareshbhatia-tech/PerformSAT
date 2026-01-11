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
      subtitle: "How equations change graphs",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    content: {
      blocks: [
        { type: "text", content: "A **transformation** is a change made to a function that moves or reshapes its graph on the coordinate plane." },
        { type: "text", content: "There are several types of transformations:" },
        { type: "list", items: [
          "**Translations** — sliding the graph up, down, left, or right",
          "**Reflections** — flipping the graph over an axis",
          "**Stretches/Compressions** — making the graph wider or narrower"
        ]},
        { type: "text", content: "On the SAT, **translations** are by far the most commonly tested. This module focuses primarily on translations — learning to shift graphs **vertically** (up/down) and **horizontally** (left/right)." },
        { type: "example", title: "The Big Idea", content: "If you know what **f(x)** looks like, you can figure out what **f(x) + 5** or **f(x − 3)** looks like without graphing from scratch.\n\nTransformations let you take a known function and **predict how changes to the equation affect the graph**." }
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
      subtitle: "Shifting along the y-axis",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    content: {
      blocks: [
        { type: "text", content: "**Vertical translations** shift a graph **up or down** along the y-axis." },
        { type: "text", content: "The key insight: the number being added or subtracted is **outside** the function — it affects the **output** (y-value)." },
        { type: "formula", label: "Moving UP", content: "f(x) + d" },
        { type: "text", content: "Adding **d** to the function shifts the graph **up** by **d** units. Every y-value increases by d." },
        { type: "formula", label: "Moving DOWN", content: "f(x) − d" },
        { type: "text", content: "Subtracting **d** from the function shifts the graph **down** by **d** units. Every y-value decreases by d." },
        { type: "example", title: "Example", content: "If **f(x) = x²** (a parabola with vertex at origin)\n\n• **f(x) + 3 = x² + 3** → parabola shifts **UP 3**\n• **f(x) − 5 = x² − 5** → parabola shifts **DOWN 5**" },
        { type: "text", content: "**Golden Rule for Vertical Translations:**" },
        { type: "text", content: "When moving a function **up or down**, **ALWAYS** use the **y-intercept** as your reference point, **NEVER** the x-intercept." }
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
      subtitle: "The counterintuitive shift",
      gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
    },
    content: {
      blocks: [
        { type: "text", content: "**Horizontal translations** shift a graph **left or right** along the x-axis." },
        { type: "text", content: "The key insight: the number being added or subtracted is **inside** the function (with x) — it affects the **input** (x-value)." },
        { type: "text", content: "⚠️ **This is counterintuitive!** The direction is **opposite** to what you might expect:" },
        { type: "formula", label: "Moving LEFT", content: "f(x + c)" },
        { type: "text", content: "Adding **c** inside the function shifts the graph **LEFT** by **c** units." },
        { type: "formula", label: "Moving RIGHT", content: "f(x − c)" },
        { type: "text", content: "Subtracting **c** inside the function shifts the graph **RIGHT** by **c** units." },
        { type: "example", title: "Why is it backwards?", content: "Think about it this way: **f(x + 3)** means the function \"activates\" **3 units sooner**.\n\nTo get the same y-value that used to occur at x = 5, you now only need x = 2.\n\nThe whole graph shifts **LEFT** because everything happens earlier." },
        { type: "example", title: "Example", content: "If **f(x) = x²** (a parabola with vertex at origin)\n\n• **f(x + 4) = (x + 4)²** → parabola shifts **LEFT 4**\n• **f(x − 2) = (x − 2)²** → parabola shifts **RIGHT 2**" },
        { type: "text", content: "**Golden Rule for Horizontal Translations:**" },
        { type: "text", content: "When moving a function **left or right**, **ALWAYS** use the **x-intercept** as your reference point, **NEVER** the y-intercept." }
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
      subtitle: "All the rules in one place",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    content: {
      blocks: [
        { type: "text", content: "Here's your complete reference for transformation rules:" },
        { type: "transformTable" },
        { type: "text", content: "**Quick Memory Tips:**" },
        { type: "list", items: [
          "**Outside the function** (f(x) ± d) → **Vertical** shift → affects **y-values**",
          "**Inside the function** (f(x ± c)) → **Horizontal** shift → affects **x-values**",
          "Horizontal shifts are **opposite** to the sign (+ goes left, − goes right)",
          "Vertical shifts **match** the sign (+ goes up, − goes down)"
        ]},
        { type: "example", title: "Putting It Together", content: "What does **f(x − 3) + 7** do to the graph of f(x)?\n\n• **(x − 3)** → shifts **RIGHT 3** (inside, minus = right)\n• **+ 7** → shifts **UP 7** (outside, plus = up)\n\nThe graph moves **right 3 and up 7**." }
      ]
    }
  },
  // Section: Transformations from Graph
  { id: 5, title: "Simple Transformation From Graph Example", type: "video", duration: "8 min", section: "Transformations from Graph", videoId: "Qdjm9OwykZY" },
  { id: 6, title: "Complex Transformation From Graph Example", type: "video", duration: "10 min", section: "Transformations from Graph", videoId: "OPDUQ7xR3DY" },
  // Section: Transformations from Table
  { id: 7, title: "Simple Transformation From Table Example #1", type: "video", duration: "8 min", section: "Transformations from Table", videoId: "FykKYINTDbE" },
  { id: 8, title: "Simple Transformation From Table #1 (DESMOS Method)", type: "video", duration: "6 min", section: "Transformations from Table", videoId: "Zw2WJEwEowU" },
  { id: 9, title: "Complex Transformation From Table Example", type: "video", duration: "10 min", section: "Transformations from Table", videoId: "MuB5Q2nMEZ4" },
  { id: 10, title: "Complex Transformation From Table (DESMOS Method)", type: "video", duration: "8 min", section: "Transformations from Table", videoId: "G34X0J7M7qM" },
  // Section: Transformations from Expression
  { id: 11, title: "Simple Transformation From Expression Example", type: "video", duration: "8 min", section: "Transformations from Expression", videoId: "butfjZEcHcg" },
  { id: 12, title: "Complex Transformation From Expression Example #1", type: "video", duration: "10 min", section: "Transformations from Expression", videoId: "Xw5tnurT1Ss" },
  { id: 13, title: "Complex Transformation From Expression Example #2", type: "video", duration: "10 min", section: "Transformations from Expression", videoId: "lt3QfNmDDPI" },
  // Section: Difficult Transformations
  { id: 14, title: "Difficult Transformations (System of Equations Method)", type: "video", duration: "12 min", section: "Difficult Transformations", videoId: "CygUy93GH6o" },
  { id: 15, title: "Difficult Transformations (Answer Choice Method)", type: "video", duration: "10 min", section: "Difficult Transformations", videoId: "6e9Gx_EC8uw" }
];
