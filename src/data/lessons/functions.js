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
        { type: "text", content: "Think of a function as a **machine with one unbreakable promise**: for every input you feed it, it gives back exactly one output. No surprises, no randomness — the same input always produces the same output. That predictability is what makes functions the backbone of algebra and the SAT math section." },
        { type: "text", content: "Here is the model you should carry in your head every time you see a function problem:" },
        { type: "diagram", content: "x → function rule → f(x)" },
        { type: "list", items: [
          "The **input** (x) is the value you choose or are given — the independent variable",
          "The **rule** is the operation the function performs — squaring, adding, multiplying, or any combination",
          "The **output** f(x) is the result — the dependent variable, because it depends entirely on what you fed in"
        ]},
        { type: "text", content: "**Why does this matter for the SAT?** Roughly 15–20% of SAT math questions involve functions in some form — from straightforward evaluation to interpreting real-world models. The test loves to dress up simple function concepts in unfamiliar notation or word-problem wrappers. If you truly understand what a function does (input → rule → output), those disguises fall away." },
        { type: "text", content: "**Real-world analogy:** A vending machine is a function. You insert a code (input), the machine runs its process (rule), and it drops a specific item (output). Code A3 always gives you the same bag of chips. If it gave you something different each time, it would be a broken vending machine — and a broken function." },
        { type: "text", content: "**Common SAT trap:** Students sometimes confuse f(x) with \"f times x.\" The parentheses in function notation are NOT multiplication — they are a container showing what input is being used. When you see f(3), it means \"the output of function f when 3 is the input,\" not \"f multiplied by 3.\" The SAT will exploit this misunderstanding by placing function notation next to multiplication expressions." },
        { type: "text", content: "One more critical idea: a function can have many inputs that produce the same output (for example, in f(x) = x², both 3 and −3 produce 9), but a single input can **never** produce two different outputs. That one-to-one input-to-output contract is what defines a function." },
        { type: "example", title: "Building Intuition", content: "Imagine a function f(x) = 2x + 1.\n\n• Input 0 → output 1\n• Input 3 → output 7\n• Input −2 → output −3\n\nNotice: every input maps to exactly one output. If someone asks \"What is f(3)?\" there is only one correct answer: 7. That certainty is what the SAT tests again and again." }
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
        { type: "text", content: "Function notation is the **language** mathematicians (and the SAT) use to talk about functions efficiently. Before notation existed, people had to write clunky sentences like \"the rule that doubles a number and adds three.\" Function notation compresses all of that into a compact symbol." },
        { type: "formula", label: "Function Notation", content: "f(x)" },
        { type: "text", content: "Read this as **\"f of x.\"** It means: \"the output of the function named **f** when the input is **x**.\" Let's break down every piece:" },
        { type: "list", items: [
          "**f** — the function's name. Just like people have names, functions do too. You'll see f, g, h, p, or even full words on the SAT",
          "**x** — the input variable sitting inside the parentheses. It is a placeholder that says \"whatever value goes here\"",
          "**f(x)** — the output. It represents the entire result after the function's rule has been applied to x"
        ]},
        { type: "text", content: "**Why notation matters for the SAT:** The test uses notation as a gatekeeper. If you freeze when you see g(a + 1) or h(2t), you'll waste time on problems that are mechanically simple. The SAT is not testing whether you can do hard math — it's testing whether you can read the notation, substitute correctly, and simplify without errors." },
        { type: "text", content: "**The substitution principle:** When a number replaces x inside the parentheses, you replace **every instance of x** in the function's rule with that number. This is the single most important mechanical skill for function problems." },
        { type: "example", title: "Standard Evaluation", content: "If **f(x) = 2x + 3**, then:\n\n**f(4)** = 2(4) + 3 = 8 + 3 = **11**\n\nWe replaced every x with 4, then simplified." },
        { type: "text", content: "**SAT trap — nested inputs:** The SAT loves to put expressions (not just numbers) inside the parentheses. When you see f(a + 1), you must replace **every x** with **(a + 1)**, parentheses included. Forgetting those parentheses is the #1 careless error on function notation questions." },
        { type: "example", title: "Expression as Input", content: "If **f(x) = x² − 2x**, find **f(a + 1)**:\n\nf(a + 1) = (a + 1)² − 2(a + 1)\n= a² + 2a + 1 − 2a − 2\n= **a² − 1**\n\nNotice how the parentheses around (a + 1) were critical for correctly squaring and distributing." },
        { type: "text", content: "**Quick check pattern:** On the SAT, after you evaluate a function, you can verify your answer by plugging the input into the original expression with a calculator. This 10-second check catches arithmetic mistakes and can save you from losing easy points." }
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
        { type: "text", content: "**Evaluating a function** means plugging in a specific input and calculating the output. It sounds simple — and it is — but the SAT builds an enormous number of questions on this single skill. The twist is that evaluation can run in **two directions**, and the test expects you to handle both fluently." },
        { type: "text", content: "**Direction 1 — Forward evaluation (\"Find f(a)\"):** You're given the input and must calculate the output. This is the classic plug-and-chug." },
        { type: "list", items: [
          "**Step 1:** Identify the input value (whatever is inside the parentheses)",
          "**Step 2:** Replace every instance of the variable in the rule with that input — always use parentheses around the substituted value",
          "**Step 3:** Simplify carefully, respecting order of operations (exponents before multiplication, multiplication before addition)"
        ]},
        { type: "example", title: "Forward Evaluation", content: "Given **f(x) = x² + 9**, find **f(4)**\n\nf(4) = (4)² + 9\nf(4) = 16 + 9\nf(4) = **25**" },
        { type: "text", content: "**Direction 2 — Reverse evaluation (\"Find x when f(x) = k\"):** You're given the output and must work backward to find the input. This requires setting up and solving an equation. The SAT asks reverse evaluation frequently because it tests both function understanding AND equation-solving." },
        { type: "example", title: "Reverse Evaluation", content: "Given **g(x) = x² + 9**, for which value of x is **g(x) = 25**?\n\nSet up: x² + 9 = 25\nSolve: x² = 16\nx = **4** (or −4)\n\nNotice: two answers are possible because squaring destroys sign information. The SAT may ask for \"a positive value of x\" to signal they want only one answer." },
        { type: "text", content: "**SAT question patterns to recognize:**\n\n• \"What is the value of f(3)?\" — pure forward evaluation\n• \"If f(a) = 10, what is a?\" — reverse evaluation\n• \"What is f(g(2))?\" — nested evaluation: evaluate the inner function first, then feed that result into the outer function\n• \"For what value of x does f(x) = g(x)?\" — set the two function rules equal and solve" },
        { type: "text", content: "**The parentheses trap:** When evaluating something like f(−3) where f(x) = x², students often write −3² = −9 instead of (−3)² = 9. The negative sign must be included inside the parentheses when you substitute. On the SAT, wrong answer choices are specifically designed to catch this mistake." },
        { type: "text", content: "**Pro strategy:** After evaluating, do a quick reasonableness check. If f(x) = x² + 9, every output must be at least 9 (since x² is never negative). If your answer is less than 9, you know you made an error. Developing this habit of sanity-checking catches mistakes before you commit to a wrong answer." }
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
