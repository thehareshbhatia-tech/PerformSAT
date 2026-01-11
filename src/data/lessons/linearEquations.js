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
      subtitle: "Everything starts with a straight line",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    content: {
      blocks: [
        { type: "text", content: "A **linear equation** is an equation **whose graph is a straight line**." },
        { type: "text", content: "The word *linear* comes from *line* — meaning when you plot the **x values** of the equation and their corresponding **y values** on a coordinate plane, they **form a straight line**." },
        { type: "text", content: "The highest **degree** of a linear function is **1** ( x¹ )" },
        { type: "formula", label: "Slope-Intercept Form", content: "y = mx + b" },
        { type: "text", content: "The **two components** of **Slope-Intercept Form** are **m (slope)** and **b (y-intercept)**" }
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
      subtitle: "How steep is your line?",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    content: {
      blocks: [
        { type: "text", content: "The **slope** of a linear equation tells you **how steep the line is** and **how the y-value changes** as the x-value increases." },
        { type: "text", content: "In other words, slope is ( the change in y ) over ( the change in x )" },
        { type: "list", items: ["It represents the **rate of change**"] },
        { type: "example", title: "Example", content: "In the equation **y = 3x + 2**, the slope is **3** (or ³⁄₁)\n\nAnd because slope is ( the change in y ) over ( the change in x )\n\n**For every 1 unit you increase x, y increases by 3**" }
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
      subtitle: "Two points tell you everything",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    content: {
      blocks: [
        { type: "text", content: "If you know two points on a line, **(x₁, y₁)** and **(x₂, y₂)**, you can find the **slope** of that line!" },
        { type: "formula", label: "Slope Formula", prefix: "slope =", fraction: { numerator: "y₂ - y₁", denominator: "x₂ - x₁" }, numeratorColor: "#ea580c", denominatorColor: "#3b82f6" }
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
      subtitle: "Find slope from any data table",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    content: {
      blocks: [
        { type: "text", content: "When given a table of values, find the change in Y (ΔY) and change in X (ΔX), then divide." },
        { type: "table", headers: ["X", "2", "4", "6", "8"], row: ["Y", "0", "3", "6", "9"], xChange: "+2", yChange: "+3" },
        { type: "formula", label: "Result", prefix: "", fraction: { numerator: "ΔY", denominator: "ΔX" }, suffix: "=", secondFraction: { numerator: "+3", denominator: "+2" }, secondSuffix: "= ³⁄₂", numeratorColor: "#ea580c", denominatorColor: "#3b82f6" }
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
      subtitle: "Rise and run on any graph",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    content: {
      blocks: [
        { type: "text", content: "To find slope from a graph, pick two points and count the **rise** (vertical change) and **run** (horizontal change)." },
        { type: "slopeFromGraphDiagram" },
        { type: "text", content: "The line has a slope of **-³⁄₅**" }
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
      subtitle: "The starting point of every line",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    content: {
      blocks: [
        { type: "text", content: "The **Y-intercept** is the point where the line **crosses the y-axis**." },
        { type: "yInterceptDiagram" },
        { type: "list", items: ["It's the value of **y when x = 0**", "In coordinate form, it's **( 0, b )**", "In a real world scenario, the y-intercept is the starting point because no negative numbers exist in the real world, and the lowest that x can be is 0"] },
        { type: "example", title: "Example", content: "In the equation **y = 3x + 2**, the y-intercept is **2**\n\n→ the line crosses the y-axis at the point **( 0, 2 )**" }
      ]
    }
  },
  // Section: Deriving Equations
  { id: 7, title: "Deriving Linear Equations From Context", type: "video", duration: "10 min", section: "Deriving Equations", videoId: "p9m2tKpTKzM" },
  { id: 8, title: "Deriving Linear Equations From Graph (Example 1)", type: "video", duration: "8 min", section: "Deriving Equations", videoId: "nwqjqznGy1w" },
  { id: 9, title: "Deriving Linear Equations From Graph (Example 2)", type: "video", duration: "8 min", section: "Deriving Equations", videoId: "s0OT5hRgkv8" },
  { id: 10, title: "Deriving Linear Equations From Table", type: "video", duration: "8 min", section: "Deriving Equations", videoId: "sUwnF6j8ES4" },
  { id: 11, title: "Deriving Linear Equations From Function Notation", type: "video", duration: "8 min", section: "Deriving Equations", videoId: "4HC-rL8KPAc" },
  // Section: Parallel Lines
  {
    id: 12,
    title: "Parallel Lines",
    type: "lesson",
    duration: "5 min",
    section: "Parallel Lines",
    hero: {
      tagline: "NEVER CROSS",
      subtitle: "Same slope, different paths",
      gradient: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)"
    },
    content: {
      blocks: [
        { type: "text", content: "Parallel lines are **two or more lines in the same plane that never intersect**, no matter how far you extend them." },
        { type: "parallelLinesDiagram" },
        { type: "text", content: "Parallel Lines have the **Same Slope**." },
        { type: "list", items: ["Because their slopes are equal, the lines rise and run at the *same rate*, which is why they never cross."] },
        { type: "text", content: "Parallel Lines have **Different Y-Intercepts**" },
        { type: "list", items: ["If the **y-intercepts are the *same*** *and* the slopes are the same, then they are **not just parallel** — they are actually the **same exact line**"] }
      ]
    }
  },
  { id: 13, title: "Simple Parallel Lines Question #1", type: "video", duration: "6 min", section: "Parallel Lines", videoId: "bY6HSCB0hHE" },
  { id: 14, title: "Simple Parallel Lines Question #2", type: "video", duration: "6 min", section: "Parallel Lines", videoId: "5McgHKQg0M4" },
  { id: 15, title: "Simple Parallel Lines in a System Question", type: "video", duration: "8 min", section: "Parallel Lines", videoId: "a6Wph54Ks6c" },
  { id: 16, title: "Complex Parallel Lines in a System Question #1", type: "video", duration: "10 min", section: "Parallel Lines", videoId: "kWAW26BUVak" },
  { id: 17, title: "Complex Parallel Lines #1 (DESMOS Method)", type: "video", duration: "8 min", section: "Parallel Lines", videoId: "F9GUje7wxVo" },
  { id: 18, title: "Complex Parallel Lines in a System Question #2", type: "video", duration: "10 min", section: "Parallel Lines", videoId: "ajbuDVZK_w0" },
  { id: 19, title: "Complex Parallel Lines #2 (DESMOS Method)", type: "video", duration: "8 min", section: "Parallel Lines", videoId: "kpc7cVNdPLc" },
  { id: 20, title: "Complex Parallel Lines in a System Question #3", type: "video", duration: "10 min", section: "Parallel Lines", videoId: "4qZLRcR2nDc" },
  { id: 21, title: "Complex Parallel Lines #3 (Answer Choices Method)", type: "video", duration: "8 min", section: "Parallel Lines", videoId: "AypfTD5JHuk" },
  // Section: Perpendicular Lines
  {
    id: 22,
    title: "Perpendicular Lines",
    type: "lesson",
    duration: "5 min",
    section: "Perpendicular Lines",
    hero: {
      tagline: "90° ANGLES",
      subtitle: "When lines meet at right angles",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    content: {
      blocks: [
        { type: "text", content: "Perpendicular lines are **two lines that intersect to form 90° angles**" },
        { type: "perpendicularLinesDiagram" },
        { type: "text", content: "The Slopes of Perpendicular Lines are **negative reciprocals** of each other" },
        { type: "text", content: "The Y-Intercepts of Perpendicular Lines **do not matter**" },
        { type: "text", content: "**(Y-Intercepts can be the same or different)**" },
        { type: "list", items: ["As long as the **slopes are negative reciprocals**, the lines will be **perpendicular**, regardless of their y-intercepts."] }
      ]
    }
  },
  { id: 23, title: "Simple Perpendicular Lines Question", type: "video", duration: "6 min", section: "Perpendicular Lines", videoId: "62BK8zl8FjA" },
  { id: 24, title: "Complex Perpendicular Lines Question", type: "video", duration: "10 min", section: "Perpendicular Lines", videoId: "Xw5bLjiPKOU" }
];
