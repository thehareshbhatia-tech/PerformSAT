/**
 * Learn lesson body — Functions (Advanced Math).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mFunctionsBlocks = [
  {
    type: 'text',
    content: "The relationships studied so far have all been lines. Function notation names the input-output rule itself, and naming the rule is what allows the work to extend beyond the linear — the subject of the Advanced Math unit that follows. A function is a rule that assigns to each input exactly one output, and the defining guarantee is consistency: the same input always produces the same output. Every question on this topic reduces to the same procedure — read the notation, substitute the input into the rule, and evaluate — and since the notation only ever describes this pairing of inputs with outputs, reading it correctly is most of the work.",
  },

  { type: 'heading', content: 'Function notation' },
  {
    type: 'text',
    content: "In $f(x) = 3x - 5$, the letter $f$ names the function and the letter $x$ marks the position where the input goes. The input variable has no meaning of its own — it is a placeholder, and whatever value is substituted replaces **every** copy of it. A rule written as $f(t) = 3t - 5$ defines exactly the same function. Questions routinely change the placeholder letter — $f(t)$, $f(a)$, $f(\\ )$ all name one identical rule. What matters is the *pattern* of operations, never the placeholder's name.",
  },

  { type: 'heading', content: 'Evaluating a function' },
  {
    type: 'text',
    content: "To find $f(3)$, substitute $3$ for the input variable: $f(3) = 3(3) - 5 = 4$. The symbol $f$ is a name, not a number — $f(3)$ never means $f \\times 3$, and reading it as multiplication invalidates every step that follows. When the input is negative or is itself an expression, enclose it in parentheses before substituting: for $f(x) = x^2$, $f(-2) = (-2)^2 = 4$, and $f(2x) = (2x)^2 = 4x^2$ — not $2x^2$. Omitting the parentheses drops the sign of a negative input or squares only part of a compound input such as $2x$.",
  },
  {
    type: 'keyInsight',
    content: "Rewrite the rule with an empty position — $f(\\ ) = (\\ )^2$ — and substitute the entire input, parentheses included. This single habit prevents both standard errors: writing $2x^2$ for $(2x)^2$, and dropping the sign of a negative input.",
  },

  { type: 'heading', content: 'Evaluating versus solving' },
  {
    type: 'text',
    content: "The same rule is used in two directions. **Evaluating:** the input is given, and the task is to compute the output — $f(3)$. **Solving:** the output is given, and the task is to find the input — \"for what $x$ is $f(x) = 7$?\" Set the rule equal to $7$ and solve. Identifying the direction settles the setup: an evaluation supplies the number inside the parentheses, while a solving question supplies the value the whole expression equals. Once a value is set equal to the rule, the problem is an ordinary equation in $x$.",
  },

  { type: 'heading', content: 'Composition of functions' },
  {
    type: 'text',
    content: "$f(g(2))$ applies two functions in sequence: evaluate $g$ at $2$, then use the result as the input to $f$. Work from the inside out — this order is not a stylistic preference. The outer function cannot be evaluated until it has a value to receive, and that value is the output of the inner function. Beginning with the outer rule instead leads to combining the two rules incorrectly, turning a routine evaluation into a lost point.",
  },
  {
    type: 'tip',
    content: "In general, $f(g(2))$ and $g(f(2))$ are different numbers. Confirm which one the question asks for before computing.",
  },

  { type: 'heading', content: 'A graph is a set of (input, output) pairs' },
  {
    type: 'text',
    content: "Every point on $y = f(x)$ records one input-output pair: the $x$-coordinate is the input, and the $y$-coordinate is the corresponding output. It follows that $f(a)$ is the height of the curve at $x = a$, and solving $f(x) = k$ means finding where the curve reaches height $k$. This translation resolves most questions about the graph of $f$ — however elaborate the wording, the task is to read a coordinate. The roles never change: $x$ is always the input and $y$ is always the output, so a question about $f$ corresponds to a specific point on the graph.",
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
      { label: 'Substitute the input', content: "Replace every copy of the variable with $-3$, in parentheses: $f(-3) = 2(-3)^2 - 1$." },
      { label: 'Apply the exponent first', content: "Square before multiplying: $(-3)^2 = 9$. Then $2(9) - 1$." },
      { label: 'Simplify', content: "$18 - 1 = 17$. So $f(-3) = 17$." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'If $f(x) = 4x - 5$, for what value of $x$ is $f(x) = 11$?',
    steps: [
      { label: 'Set the rule equal to the output', content: "The output is given, so set the rule equal to it: $4x - 5 = 11$." },
      { label: 'Solve', content: "Add $5$: $4x = 16$. Divide by $4$: $x = 4$." },
      { label: 'Check', content: "Evaluate to confirm: $f(4) = 4(4) - 5 = 11$. The value checks, so $x = 4$." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'If $f(x) = x + 4$ and $g(x) = x^2$, what is $f(g(3))$?',
    steps: [
      { label: 'Evaluate the inner function', content: "The inner expression is $g(3)$: $g(3) = 3^2 = 9$." },
      { label: 'Substitute into the outer function', content: "The input to $f$ is $9$: $f(9) = 9 + 4$." },
      { label: 'State the result', content: "$f(g(3)) = 13$. (In the reverse order, $g(f(3)) = g(7) = 49$ — composition depends on order.)" },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'If $f(x) = x^2 + 1$, what is $f(x + 3)$?',
    steps: [
      { label: 'Substitute the full expression', content: "Replace every $x$ with $(x + 3)$, parentheses included: $f(x + 3) = (x + 3)^2 + 1$." },
      { label: 'Expand the square', content: "$(x + 3)^2 = x^2 + 6x + 9$, so $f(x + 3) = x^2 + 6x + 9 + 1$." },
      { label: 'Combine constants', content: "Combine the constants: $f(x + 3) = x^2 + 6x + 10$. (The frequent error $x^2 + 3$ comes from substituting $x$ alone rather than the whole $x + 3$.)" },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'If $f(x) = x^2 - 2x$, what is $f(-1)$?',
    answer: "**3.** Substitute $-1$: $f(-1) = (-1)^2 - 2(-1) = 1 + 2 = 3$. Two sign errors are possible in this one computation: $(-1)^2 = 1$ (not $-1$), and $-2(-1) = +2$. Writing the input in parentheses prevents both.",
  },
  {
    type: 'checkpointQuestion',
    question: 'If $f(x) = 2x$ and $g(x) = x - 5$, what is $g(f(4))$?',
    answer: "**3.** Evaluate the inner function first: $f(4) = 2(4) = 8$. Then $g(8) = 8 - 5 = 3$. The output of the inner function becomes the input to the outer one, never the reverse.",
  },
  {
    type: 'checkpointQuestion',
    question: 'If $f(x) = 3x + 7$, for what value of $x$ is $f(x) = 1$?',
    answer: "**$-2$.** The output is given, so set the rule equal to it — $3x + 7 = 1$. Subtract $7$: $3x = -6$, so $x = -2$. Evaluating confirms it: $f(-2) = 3(-2) + 7 = 1$.",
  },

  {
    type: 'text',
    content: "**In summary:** read $f(\\text{input})$ as an instruction to apply the rule, substitute the entire input into every copy of the variable, and evaluate a composition from the inside out. On a graph, $f(a)$ is a height and $f(x) = k$ locates a crossing.",
  },
];
