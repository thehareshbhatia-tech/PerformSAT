/**
 * Learn lesson body — Functions (Advanced Math).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar:
 * bodies/mLinearEquations.js): coaching direct-address — talks TO the student,
 * anticipates the mistake before it happens, everyday anchor first and formula
 * second, concrete decision rules. Lean structure unchanged: short headed
 * sections, 4 worked examples, 3 checkpoints. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mFunctionsBlocks = [
  {
    type: 'text',
    content: "A function is a vending machine: drop an input in, exactly one output comes out. Everything in this topic is that one picture wearing different costumes — read the notation, feed the machine, read the answer. The guarantee that makes it a function: feed it the same value twice and you get the same result twice, every time. Once that picture is solid, the notation stops being scary — because the notation is only ever describing the machine.",
  },

  { type: 'heading', content: 'The machine and its slot' },
  {
    type: 'text',
    content: "In $f(x) = 3x - 5$, the $f$ names the machine and the $x$ marks the empty slot. The letter in the slot means nothing on its own — it's a blank waiting to be filled, and whatever you drop in fills **every** copy of it. A rule written as $f(t) = 3t - 5$ is the exact same machine. The test swaps the slot letter on purpose to rattle you — $f(t)$, $f(a)$, $f(\\ )$ all name one identical rule. What matters is the *pattern* of operations, never the placeholder's name.",
  },

  { type: 'heading', content: '$f(3)$ means "put 3 in," not "f times 3"' },
  {
    type: 'text',
    content: "To find $f(3)$, paste $3$ into the slot: $f(3) = 3(3) - 5 = 4$. The $f$ is a name, not a number — $f(3)$ is never $f \\times 3$, and reading it as multiplication quietly wrecks every step after it. When the input is negative or a whole expression, wrap it in parentheses first: for $f(x) = x^2$, $f(-2) = (-2)^2 = 4$, and $f(2x) = (2x)^2 = 4x^2$ — not $2x^2$. Skip the parentheses and a negative input loses its sign, or a compound input like $2x$ only gets partly squared.",
  },
  {
    type: 'keyInsight',
    content: "Rewrite the rule with an empty slot — $f(\\ ) = (\\ )^2$ — and paste the whole input in, parentheses and all. That single habit kills both classic errors: $2x^2$ vs $(2x)^2$, and the dropped negative sign.",
  },

  { type: 'heading', content: 'Forward and backward' },
  {
    type: 'text',
    content: "Same machine, two directions. **Forward:** you're given the input, so you compute the output — $f(3)$. **Backward:** you're given the output and hunting for the input — \"for what $x$ is $f(x) = 7$?\" Set the rule equal to $7$ and solve. Spotting the direction is half the battle: forward hands you the number inside the parentheses; backward hands you the value the whole expression equals. The moment a value gets *set equal* to the rule, it's an ordinary solve-for-$x$ you already know how to do.",
  },

  { type: 'heading', content: 'Composition: do the inside first' },
  {
    type: 'text',
    content: "$f(g(2))$ chains two machines: run $g$ on $2$, then feed whatever comes out into $f$. Inside out, always — and that's not a style preference. The outer machine literally can't run until it has a number to receive, and that number is whatever the inner machine produced. Grab the outer rule first and you'll end up mashing the two rules together wrong — an otherwise easy point, gone.",
  },
  {
    type: 'tip',
    content: "$f(g(2))$ and $g(f(2))$ usually give different numbers. Read which one the question asked before you compute anything.",
  },

  { type: 'heading', content: 'A graph is a set of (input, output) pairs' },
  {
    type: 'text',
    content: "Every point on $y = f(x)$ is a receipt from the machine: the $x$-coordinate went in, the $y$-coordinate came out. So $f(a)$ is just the height of the curve at $x = a$, and solving $f(x) = k$ means finding where the curve reaches height $k$. That one translation unlocks most \"graph of $f$\" questions — they look intimidating, but they're asking you to read a coordinate. Keep the roles straight — $x$ always goes in, $y$ always comes out — and a question about $f$ becomes a point you can put your finger on.",
  },
  {
    type: 'table',
    headers: ['The question asks…', 'On the graph, find…'],
    rows: [
      ['$f(4)$', 'the height ($y$) of the curve at $x = 4$'],
      ['solve $f(x) = 3$', 'the $x$ where the curve hits height $3$'],
      ['where is $f$ greatest', 'the highest point ($x$ of the peak)'],
      ['$f(x) = 0$', 'the $x$-intercepts (where the curve meets the $x$-axis)'],
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'If $f(x) = 2x^2 - 1$, what is $f(-3)$?',
    steps: [
      { label: 'Paste the input', content: "Put $-3$ in every slot, in parentheses: $f(-3) = 2(-3)^2 - 1$." },
      { label: 'Exponent before coefficient', content: "Square first: $(-3)^2 = 9$. Then $2(9) - 1$." },
      { label: 'Finish', content: "$18 - 1 = 17$. So $f(-3) = 17$." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'If $f(x) = 4x - 5$, for what value of $x$ is $f(x) = 11$?',
    steps: [
      { label: 'Backward mode', content: "You have the output, so set the rule equal to it: $4x - 5 = 11$." },
      { label: 'Solve', content: "Add $5$: $4x = 16$. Divide by $4$: $x = 4$." },
      { label: 'Check', content: "Run it forward: $f(4) = 4(4) - 5 = 11$. It matches, so $x = 4$." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'If $f(x) = x + 4$ and $g(x) = x^2$, what is $f(g(3))$?',
    steps: [
      { label: 'Inside first', content: "The inner call is $g(3)$. Compute it: $g(3) = 3^2 = 9$." },
      { label: 'Feed it outward', content: "Now the input to $f$ is $9$: $f(9) = 9 + 4$." },
      { label: 'Finish', content: "$f(g(3)) = 13$. (Going the other way, $g(f(3)) = g(7) = 49$ — order changes the answer.)" },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'If $f(x) = x^2 + 1$, what is $f(x + 3)$?',
    steps: [
      { label: 'Paste the whole input', content: "Replace every $x$ with $(x + 3)$, parentheses and all: $f(x + 3) = (x + 3)^2 + 1$." },
      { label: 'Expand the square', content: "$(x + 3)^2 = x^2 + 6x + 9$, so $f(x + 3) = x^2 + 6x + 9 + 1$." },
      { label: 'Finish', content: "Combine the constants: $f(x + 3) = x^2 + 6x + 10$. (Writing $x^2 + 3$ is the trap — the input is the whole $x + 3$, not just $x$.)" },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'If $f(x) = x^2 - 2x$, what is $f(-1)$?',
    answer: "**3.** Paste $-1$ in: $f(-1) = (-1)^2 - 2(-1) = 1 + 2 = 3$. Two sign traps live in this one problem: $(-1)^2 = 1$ (not $-1$), and $-2(-1) = +2$. The parentheses habit dodges both.",
  },
  {
    type: 'checkpointQuestion',
    question: 'If $f(x) = 2x$ and $g(x) = x - 5$, what is $g(f(4))$?',
    answer: "**3.** Inside first: $f(4) = 2(4) = 8$. Then $g(8) = 8 - 5 = 3$. The inner output feeds the outer machine — never the other way around.",
  },
  {
    type: 'checkpointQuestion',
    question: 'If $f(x) = 3x + 7$, for what value of $x$ is $f(x) = 1$?',
    answer: "**$-2$.** Backward direction: you have the output, so set the rule equal to it — $3x + 7 = 1$. Subtract $7$: $3x = -6$, so $x = -2$. Check by running it forward: $f(-2) = 3(-2) + 7 = 1$.",
  },

  {
    type: 'text',
    content: "**The move, every time:** read $f(\\text{input})$ as \"run the machine,\" paste the whole input into every slot, and for a composition resolve the inside first. On a graph, $f(a)$ is a height and $f(x) = k$ is a crossing.",
  },
];
