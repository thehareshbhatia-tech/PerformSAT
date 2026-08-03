/**
 * Learn lesson body — Functions (Advanced Math).
 *
 * VOICE v6 (2026-08-03, exemplar chapter). Grounded in Halmos "How to Write
 * Mathematics" + Knuth "Mathematical Writing" + the register of Paul's Online
 * Math Notes, corrected against the Wikipedia "Signs of AI writing" tell-list:
 *   - Displayed equations are PART of the sentence: they carry their own
 *     commas and periods, prose flows into and out of them, and words (never
 *     arrows) connect successive formulas. Multi-step solving uses aligned
 *     environments the way a set book does.
 *   - No sentence begins with a symbol.
 *   - Short one-step computations stay inline; only real chains get displays.
 *   - The prose has slack: plain connectives (so / now / note that), direct
 *     imperatives, mild redundancy where a student needs to hear a thing
 *     twice, varied paragraph lengths.
 *   - Struck from the register: em-dash inserts (a handful per CHAPTER, not
 *     per sentence), negative parallelisms ("not X but Y"), section-closing
 *     aphorisms, bold-lead-in list items, rule-of-three stacking, elegant
 *     variation. Bold is rationed to answers.
 *   - Still banned: exclamation marks, emojis, pep-talk, test-personification,
 *     LOW_SIGNAL_PATTERNS crutches (schema.js hard-fails them).
 *
 * COMPOSED MODE (2026-07-18): chapterOpener lede + auto-numbered
 * sections/examples/figures + aside margin-notes + summary close.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mFunctionsBlocks = [
  {
    type: 'chapterOpener',
    lede: "Up to now every relationship has been linear: one line, or two lines crossing. Before the course moves past lines, algebra needs a compact way to talk about a rule itself, and function notation is that shorthand. A function takes a number in, applies its rule, and returns exactly one number out. However a question dresses it up, the work is the same: put the right number in, then compute what comes out.",
  },

  { type: 'heading', content: 'Reading the notation' },
  {
    type: 'text',
    content: "The equation $f(x) = 3x - 5$ defines a function named $f$. The $x$ in parentheses is a placeholder marking where the input goes, and the right side is the rule: multiply by 3, then subtract 5. So $f(3)$ means the output of $f$ when the input is 3. To compute it, put 3 wherever the placeholder appears:\n$$f(3) = 3(3) - 5 = 4.$$\nThat is the whole skill. Most of this chapter is practice at doing it carefully.",
  },
  {
    type: 'text',
    content: "Note that the placeholder letter carries no meaning of its own. The rule $f(t) = 3t - 5$ is the same function as $f(x) = 3x - 5$, since both say: take the input, multiply by 3, subtract 5. Test writers switch letters deliberately, and students who have only ever seen $x$ tend to stall at $f(t)$. Nothing new is happening there. The letter changed and the rule did not.",
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "The letter $f$ is a name, and $f(3)$ means the output of $f$ at the input 3. It is never $f$ times 3.",
  },

  { type: 'heading', content: 'Substituting carefully' },
  {
    type: 'text',
    content: "Trouble starts when the input is negative, or is itself an expression. The safe habit is to write the input in parentheses before doing any arithmetic. Take $f(x) = x^2$. With a negative input,\n$$f(-2) = (-2)^2 = 4,$$\nand with an expression as the input,\n$$f(2x) = (2x)^2 = 4x^2.$$\nThe parentheses are doing real work in both lines. Without them the exponent grabs only the nearest symbol: $-2^2$ means $-(2^2)$, which is $-4$, and $2x^2$ squares the $x$ but misses the 2. Wrong answer choices are built from exactly these slips.",
  },
  {
    type: 'aside',
    kind: 'remember',
    content: "Before substituting, rewrite the rule with an empty slot: $f(\\ ) = (\\ )^2$. Then put the whole input, parentheses and all, into every slot.",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'If $f(x) = 2x^2 - 1$, what is $f(-3)$?',
    steps: [
      { label: 'Substitute', content: "Put $(-3)$ in for every $x$:\n$$f(-3) = 2(-3)^2 - 1.$$" },
      { label: 'Square first', content: "The exponent applies before the multiplication. Since $(-3)^2 = 9$,\n$$f(-3) = 2(9) - 1 = 17.$$" },
      { label: 'Where the point is lost', content: "Dropping the parentheses reads $-3^2$ as $-9$, and the arithmetic lands on $-19$ instead. The parentheses in the first step are what prevent that." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'If $f(x) = x^2 + 1$, what is $f(x + 3)$?',
    steps: [
      { label: 'Substitute the whole expression', content: "Every $x$ becomes $(x + 3)$:\n$$f(x + 3) = (x + 3)^2 + 1.$$" },
      { label: 'Expand and collect', content: "Multiplying out the square and collecting constants gives\n$$(x + 3)^2 + 1 = x^2 + 6x + 9 + 1 = x^2 + 6x + 10.$$" },
      { label: 'The common error', content: "The answer $x^2 + 3$ comes from substituting into only part of the rule. The substitution has to reach every copy of $x$." },
    ],
  },

  { type: 'heading', content: 'Two directions' },
  {
    type: 'text',
    content: "A function rule gets used in two directions, and questions rarely announce which one they are. Evaluating means the input is known: a question asking for $f(3)$ hands you the input and wants the output. Solving is the reverse. A question asking for the $x$ that makes $f(x) = 7$ hands you the output and wants the input, so set the rule equal to 7 and solve. From there it is an ordinary equation, no different from the ones in the solving chapter.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'If $f(x) = 4x - 5$, for what value of $x$ is $f(x) = 11$?',
    steps: [
      { label: 'Set the rule equal to the output', content: "The question gives the output, 11, so\n$$4x - 5 = 11.$$" },
      { label: 'Solve', content: "Add 5 to both sides, then divide by 4:\n$$\\begin{aligned} 4x &= 16, \\\\ x &= 4. \\end{aligned}$$" },
      { label: 'Check', content: "Running the input back through the rule gives $f(4) = 4(4) - 5 = 11$, as required." },
    ],
  },

  { type: 'heading', content: 'A function inside a function' },
  {
    type: 'text',
    content: "The expression $f(g(2))$ uses two rules in sequence. The inner one acts first: compute $g(2)$, then hand the result to $f$. The order comes from the notation itself, since $f$ cannot act until it has a number to act on. Reading from the outside in, and trying to merge the two rules into one formula, is where this question type usually goes wrong.",
  },
  {
    type: 'aside',
    kind: 'note',
    content: "The two orders usually give different numbers: $f(g(2))$ and $g(f(2))$ are different computations. Check which one the question wrote before starting.",
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'If $f(x) = x + 4$ and $g(x) = x^2$, what is $f(g(3))$?',
    steps: [
      { label: 'Inner function first', content: "Start inside the parentheses:\n$$g(3) = 3^2 = 9.$$" },
      { label: 'Outer function next', content: "The 9 becomes the input to $f$:\n$$f(9) = 9 + 4 = 13.$$" },
      { label: 'Order matters', content: "So $f(g(3)) = 13$. In the other order, $g(f(3)) = g(7) = 49$, a different number entirely." },
    ],
  },

  { type: 'heading', content: 'Functions on a graph' },
  {
    type: 'text',
    content: "The graph of $y = f(x)$ is a record of every input with its output. The input runs along the horizontal axis, and the height of the curve is the output. In graph terms, $f(a)$ is the height of the curve above $x = a$, and solving $f(x) = k$ means finding where the curve reaches height $k$. Graph questions dress this up in words, but each one is asking for a single coordinate.",
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

  {
    type: 'steps',
    title: 'How to approach these questions',
    items: [
      'Decide the direction first. Given the input, evaluate; given the output, set the rule equal to it and solve.',
      'Substitute the whole input, in parentheses, into every copy of the variable.',
      'For compositions, evaluate the inner function and feed its result to the outer one.',
      'On a graph, translate the question into a coordinate: $f(a)$ is a height, and $f(x) = k$ asks where the curve reaches that height.',
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'If $f(x) = x^2 - 2x$, what is $f(-1)$?',
    answer: "The output is **3**. Substituting $(-1)$ into every copy of $x$ gives\n$$f(-1) = (-1)^2 - 2(-1) = 1 + 2 = 3.$$\nBoth signs deserve attention here: $(-1)^2$ is positive 1, and subtracting $2(-1)$ adds 2.",
  },
  {
    type: 'checkpointQuestion',
    question: 'If $f(x) = 2x$ and $g(x) = x - 5$, what is $g(f(4))$?',
    answer: "The output is **3**. The inner function acts first, and $f(4) = 2(4) = 8$. The 8 then goes into $g$, so $g(8) = 8 - 5 = 3$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'If $f(x) = 3x + 7$, for what value of $x$ is $f(x) = 1$?',
    answer: "The answer is **$-2$**. The output is given, so set the rule equal to 1 and solve:\n$$\\begin{aligned} 3x + 7 &= 1, \\\\ 3x &= -6, \\\\ x &= -2. \\end{aligned}$$\nSubstituting back confirms it: $f(-2) = -6 + 7 = 1$.",
  },

  {
    type: 'text',
    content: "That closes the Algebra unit. Advanced Math keeps the same notation and applies it to new rules: quadratics, exponentials, polynomials. The rules get more complicated from here, and the notation stays exactly the same.",
  },
  {
    type: 'summary',
    title: 'The chapter in short',
    points: [
      'The expression $f(a)$ means the output of $f$ at the input $a$. It is never multiplication.',
      'Substitute the whole input, in parentheses, into every copy of the variable.',
      'Compositions work from the inside out: evaluate the inner function, then feed its result to the outer one.',
      'On a graph, $f(a)$ is a height, and solving $f(x) = k$ locates where the curve reaches height $k$.',
    ],
  },
];
