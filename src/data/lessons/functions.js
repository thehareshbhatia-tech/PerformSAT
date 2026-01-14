export const functionsLessons = [
  // Section: Fundamentals
  {
    id: 1,
    title: "What is a Function?",
    type: "lesson",
    duration: "5 min",
    section: "Fundamentals",
    hero: {
      tagline: "INPUT → OUTPUT",
      subtitle: "The machine that transforms numbers"
    },
    content: {
      blocks: [
        { type: "text", content: "A function can be viewed as an **input–output system** — a rule that converts an input value into an output value according to a specific process." },
        { type: "text", content: "We often describe this concept using the \"function machine\" analogy — not as a childlike idea, but as a precise model:" },
        { type: "diagram", content: "x → function rule → f(x)" },
        { type: "list", items: [
          "The **input** is the independent variable, often called **x**",
          "The **rule** is the function's defining operation or expression",
          "The **output** is the dependent variable, denoted **f(x)**"
        ]}
      ]
    }
  },
  {
    id: 2,
    title: "Function Notation",
    type: "lesson",
    duration: "5 min",
    section: "Fundamentals",
    hero: {
      tagline: "f(x) DECODED",
      subtitle: "Understanding the language of functions"
    },
    content: {
      blocks: [
        { type: "text", content: "**Function notation** is a way to name a function and show what input it takes." },
        { type: "formula", label: "Function Notation", content: "f(x)" },
        { type: "text", content: "This is read as \"**f of x**\" — it means the output of function **f** when the input is **x**." },
        { type: "list", items: [
          "**f** is the name of the function (could be g, h, or any letter)",
          "**x** is the input value",
          "**f(x)** is the output value"
        ]},
        { type: "example", title: "Example", content: "If **f(x) = 2x + 3**, then:\n\n**f(4)** = 2(4) + 3 = **11**\n\nWe substituted **4** for **x** and calculated the output." }
      ]
    }
  },
  {
    id: 3,
    title: "Evaluating Functions",
    type: "lesson",
    duration: "6 min",
    section: "Fundamentals",
    hero: {
      tagline: "PLUG AND SOLVE",
      subtitle: "Find the output for any input"
    },
    content: {
      blocks: [
        { type: "text", content: "**Evaluating a function** means finding the output value when you're given a specific input." },
        { type: "text", content: "To evaluate a function:" },
        { type: "list", items: [
          "**Step 1:** Take the input value given to you",
          "**Step 2:** Substitute it for the variable in the function",
          "**Step 3:** Simplify to find the output"
        ]},
        { type: "example", title: "Example 1: Find f(x)", content: "Given **f(x) = x² + 9**, find **f(4)**\n\nf(4) = (4)² + 9\nf(4) = 16 + 9\nf(4) = **25**" },
        { type: "example", title: "Example 2: Find x when f(x) = value", content: "Given **g(x) = x² + 9**, for which value of x is **g(x) = 25**?\n\nSet up: x² + 9 = 25\nSolve: x² = 16\nx = **4** (or -4)" }
      ]
    }
  },
  // Section: Simple Function Problems
  { id: 4, title: "Simple Function Example #1", type: "video", duration: "8 min", section: "Simple Function Problems", videoId: "4E54Yd1aSPo", hero: { tagline: "PRACTICE", subtitle: "Basic function evaluation" } },
  { id: 5, title: "Simple Function Example #2", type: "video", duration: "8 min", section: "Simple Function Problems", videoId: "cMmuvbxZUco", hero: { tagline: "PRACTICE", subtitle: "More evaluation practice" } },
  { id: 6, title: "Simple Function Example #3", type: "video", duration: "8 min", section: "Simple Function Problems", videoId: "fV_idRMO6k8", hero: { tagline: "PRACTICE", subtitle: "Building confidence" } },
  { id: 7, title: "Simple Function Example #4 (Word Problem)", type: "video", duration: "10 min", section: "Simple Function Problems", videoId: "VU1ydOSDfTI", hero: { tagline: "WORD PROBLEM", subtitle: "Functions in context" } },
  // Section: Complex Function Problems
  { id: 8, title: "Complex Functions Example #1", type: "video", duration: "10 min", section: "Complex Function Problems", videoId: "p7Z2beYwpaI", hero: { tagline: "ADVANCED", subtitle: "Multi-step problems" } },
  { id: 9, title: "Complex Functions Example #2", type: "video", duration: "10 min", section: "Complex Function Problems", videoId: "dUWjb0racis", hero: { tagline: "ADVANCED", subtitle: "Challenging scenarios" } },
  { id: 10, title: "Complex Functions Example #3 (Polynomial)", type: "video", duration: "12 min", section: "Complex Function Problems", videoId: "WIKiYCOZnSw", hero: { tagline: "POLYNOMIALS", subtitle: "Higher degree functions" } }
];
