/**
 * Learn lesson body — Functions (Advanced Math).
 *
 * NEW lean "review / cheat-sheet" style: one SAT skill per lesson, plain
 * language, one idea per short section, then 2-3 worked examples and a couple
 * of check-yourself questions. Voice + shape follow gSubjectVerbAgreement.js.
 * Gated by the lean contract in __tests__/bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mFunctionsBlocks = [
  {
    type: 'text',
    content: 'A function is a machine: you drop an input in, one output comes out. Everything on this topic is a variation on that one picture — read the notation, feed the machine, read the answer. The one guarantee that makes it a function is that each input gives back exactly one output, so feed the same value twice and you get the same result twice. Almost every question is just this machine wearing a different costume, and once the picture is solid the notation stops being scary.',
  },

  { type: 'heading', content: 'The machine and its slot' },
  {
    type: 'text',
    content: 'In $f(x) = 3x - 5$, the $f$ names the rule and the $x$ marks an empty slot. The letter in the slot means nothing on its own — it is a blank waiting to be filled, and whatever you put in fills **every** copy of the slot. A rule written as $f(t) = 3t - 5$ is the exact same machine. This is worth internalizing because the test deliberately swaps the slot letter to rattle you — $f(t)$, $f(a)$, $f(\\ )$ all describe one identical rule. What matters is the *pattern* of operations, never the name of the placeholder.',
  },

  { type: 'heading', content: '$f(3)$ means "put 3 in," not "f times 3"' },
  {
    type: 'text',
    content: 'To find $f(3)$, paste $3$ into the slot: $f(3) = 3(3) - 5 = 4$. The $f$ is a rule name, not a number, so $f(3)$ is never $f \\times 3$ — treating it as multiplication is the single most common beginner error, and it quietly wrecks every step after it. When the input is negative or an expression, wrap it in parentheses first: for $f(x) = x^2$, $f(-2) = (-2)^2 = 4$, and $f(2x) = (2x)^2 = 4x^2$ — not $2x^2$. The parentheses habit matters just as much, because without them a negative input loses its sign and a compound input like $2x$ only gets partly squared.',
  },
  {
    type: 'keyInsight',
    content: 'Rewrite the rule with an empty slot — $f(\\ ) = (\\ )^2$ — and paste the whole input in, parentheses and all. That single habit kills the $2x^2$ vs $(2x)^2$ error and the dropped-sign error.',
  },

  { type: 'heading', content: 'Forward and backward' },
  {
    type: 'text',
    content: 'Two directions, same machine. **Forward:** you are given the input, so you compute the output — $f(3)$. **Backward:** you are given the output and hunt for the input — "for what $x$ is $f(x) = 7$?" Set the rule equal to $7$ and solve. Recognizing which direction you are in is half the battle: a forward question hands you the number that goes inside the parentheses, while a backward one hands you the value the whole expression equals. The moment you see a value being *set equal* to the rule, it turns into an ordinary solve-for-$x$ problem you already know how to do.',
  },

  { type: 'heading', content: 'Composition: do the inside first' },
  {
    type: 'text',
    content: 'A composition like $f(g(2))$ chains two machines: run $g$ on $2$, then feed whatever came out into $f$. Always work from the inside out — the inner call is a value waiting to be computed, so resolve it first and pass the result outward. The order is not a style choice: the outer machine literally cannot run until it has a number to receive, and that number is whatever the inner machine produced. Reaching for the outer rule first is how students end up combining the two rules wrong and losing an otherwise easy point.',
  },
  {
    type: 'tip',
    content: 'Order matters: $f(g(2))$ and $g(f(2))$ usually give different numbers. Read which one the question asked before you start.',
  },

  { type: 'heading', content: 'A graph is a set of (input, output) pairs' },
  {
    type: 'text',
    content: 'Every point on $y = f(x)$ is an (input, output) pair: the $x$-coordinate went into the machine, the $y$-coordinate came out. So $f(a)$ is just the height of the curve at $x = a$, and solving $f(x) = k$ means finding where the curve reaches height $k$. This one translation unlocks most "graph of $f$" questions, which look intimidating but are really asking you to read a coordinate. Keep the roles straight — $x$ is always the input you feed in, $y$ is always the output you read off — and a question about $f$ becomes a question about a point you can put your finger on.',
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
      { label: 'Paste the input', content: 'Put $-3$ in every slot, in parentheses: $f(-3) = 2(-3)^2 - 1$.' },
      { label: 'Exponent before coefficient', content: 'Square first: $(-3)^2 = 9$. Then $2(9) - 1$.' },
      { label: 'Finish', content: '$18 - 1 = 17$. So $f(-3) = 17$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'If $f(x) = 4x - 5$, for what value of $x$ is $f(x) = 11$?',
    steps: [
      { label: 'Backward mode', content: 'You have the output, so set the rule equal to it: $4x - 5 = 11$.' },
      { label: 'Solve', content: 'Add $5$: $4x = 16$. Divide by $4$: $x = 4$.' },
      { label: 'Check', content: '$f(4) = 4(4) - 5 = 11$. It matches, so $x = 4$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'If $f(x) = x + 4$ and $g(x) = x^2$, what is $f(g(3))$?',
    steps: [
      { label: 'Inside first', content: 'The inner call is $g(3)$. Compute it: $g(3) = 3^2 = 9$.' },
      { label: 'Feed it outward', content: 'Now the input to $f$ is $9$: $f(9) = 9 + 4$.' },
      { label: 'Finish', content: '$f(g(3)) = 13$. (Going the other way, $g(f(3)) = g(7) = 49$ — order changes the answer.)' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'If $f(x) = x^2 + 1$, what is $f(x + 3)$?',
    steps: [
      { label: 'Paste the whole input', content: 'Replace every $x$ with $(x + 3)$, parentheses and all: $f(x + 3) = (x + 3)^2 + 1$.' },
      { label: 'Expand the square', content: '$(x + 3)^2 = x^2 + 6x + 9$, so $f(x + 3) = x^2 + 6x + 9 + 1$.' },
      { label: 'Finish', content: 'Combine the constants: $f(x + 3) = x^2 + 6x + 10$. (Writing $x^2 + 3$ would be the trap — the input is the whole $x + 3$, not just $x$.)' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'If $f(x) = x^2 - 2x$, what is $f(-1)$?',
    answer: '**3.** Paste $-1$ in: $f(-1) = (-1)^2 - 2(-1) = 1 + 2 = 3$. The two sign slips to avoid: $(-1)^2 = 1$ (not $-1$), and $-2(-1) = +2$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'If $f(x) = 2x$ and $g(x) = x - 5$, what is $g(f(4))$?',
    answer: '**3.** Inside first: $f(4) = 2(4) = 8$. Then $g(8) = 8 - 5 = 3$. Feeding the inner output into the outer machine, not the other way around.',
  },
  {
    type: 'checkpointQuestion',
    question: 'If $f(x) = 3x + 7$, for what value of $x$ is $f(x) = 1$?',
    answer: '**$-2$.** This is the backward direction: set the rule equal to the output, $3x + 7 = 1$. Subtract $7$: $3x = -6$, so $x = -2$. Check: $f(-2) = 3(-2) + 7 = 1$.',
  },

  {
    type: 'text',
    content: '**The move, every time:** read $f(\\text{input})$ as "run the machine," paste the whole input into every slot, and for a composition resolve the inside first. On a graph, $f(a)$ is a height and $f(x) = k$ is a crossing.',
  },
];
