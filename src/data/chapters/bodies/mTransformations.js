/**
 * Learn lesson body — Function Transformations (Advanced Math).
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

export const mTransformationsBlocks = [
  {
    type: 'text',
    content: "Every transformation question turns on a single distinction: **is the change applied outside the function or inside it?** A change outside the function acts on the output, so the graph moves vertically and the sign behaves as written. A change inside the function acts on the input, so the graph moves horizontally — and the direction is the opposite of what the sign suggests.",
  },

  { type: 'heading', content: 'Changes outside the function: vertical effects' },
  {
    type: 'text',
    content: "A change written *outside* the function applies after the rule has produced its output — the output is computed first, then added to or negated. These transformations behave intuitively because the change lands directly on the y-values: $f(x)+3$ shifts the graph up $3$, $f(x)-3$ shifts it down $3$, and $-f(x)$ reflects the entire graph over the **x-axis**. Outside the function, the sign means exactly what it says.",
  },

  { type: 'heading', content: 'Changes inside the function: horizontal effects' },
  {
    type: 'text',
    content: "A change written *inside* the parentheses — attached to the $x$ — alters the input before the rule is applied, so the graph moves **left or right**, in the direction opposite the sign. $f(x-2)$ shifts **right** $2$, not left. $f(x+2)$ shifts **left** $2$. And $f(-x)$ reflects the graph over the **y-axis**. This reversal is the central difficulty of the topic — the incorrect reading \"left $2$\" for $f(x-2)$ appears routinely among the wrong answer choices.",
  },
  {
    type: 'keyInsight',
    content: 'Only the inside sign reverses. $f(x-h)$ moves the graph RIGHT by $h$: to shift a graph right, *subtract* inside the parentheses.',
  },

  { type: 'heading', content: 'Summary of transformations' },
  {
    type: 'table',
    headers: ['Transformation', 'Position of the change', 'Effect on the graph'],
    rows: [
      ['$f(x)+k$', 'outside', 'up by $k$'],
      ['$f(x)-k$', 'outside', 'down by $k$'],
      ['$-f(x)$', 'outside', 'reflection over the x-axis'],
      ['$f(x-h)$', 'inside', 'right by $h$'],
      ['$f(x+h)$', 'inside', 'left by $h$'],
      ['$f(-x)$', 'inside', 'reflection over the y-axis'],
    ],
  },

  { type: 'heading', content: 'Finding horizontal shifts: set the inside to zero' },
  {
    type: 'text',
    content: "Rather than memorizing the sign reversal, determine **the value of $x$ that makes the inside expression equal zero** — that value is where the graph has moved. For $f(x-5)$, the inside is zero at $x=5$, so the graph shifted to $x=5$: right $5$. The method extends cleanly to fractions: $f(x-\\tfrac{3}{2})$ has a zero inside at $x=\\tfrac{3}{2}$, so the shift is right $\\tfrac{3}{2}$.",
  },

  { type: 'heading', content: 'Combining transformations' },
  {
    type: 'text',
    content: "A single expression can carry both kinds of change, and the reliable approach is to classify each one separately: in $f(x+1)-4$, the inside $+1$ moves the graph **left $1$**, and the outside $-4$ moves it **down $4$**. This decomposition is valid because vertical and horizontal moves are independent — one acts on $x$, the other on $y$ — so they never interfere. Applying them in either order produces the same graph.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The graph of $y=f(x)$ is shifted to produce $y=f(x)+6$. Describe the shift.',
    steps: [
      { label: 'Classify the change', content: 'The $+6$ is *outside* the function, so it is a **vertical** shift, and an outside sign behaves as written.' },
      { label: 'Read the direction', content: 'Positive outside means **up**: the graph shifts **up $6$**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The function $g$ is defined by $g(x)=f(x-4)+1$. Compared to the graph of $f$, how is the graph of $g$ shifted?',
    steps: [
      { label: 'Separate the two changes', content: 'There is an inside change ($x-4$) and an outside change ($+1$). Classify each one separately.' },
      { label: 'Classify the inside change', content: 'The inside is zero at $x=4$, so the graph moved to $x=4$: **right $4$**. The $-4$ moves it right, not left — the inside sign reverses.' },
      { label: 'Classify the outside change', content: 'The $+1$ is outside, so it acts as written: **up $1$**.' },
      { label: 'Combine', content: 'The graph of $g$ is the graph of $f$ shifted **right $4$ and up $1$**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The graph shown is $y=f(x-3)$. If this shifted graph passes through the point $(7, 2)$, what point must lie on the graph of the parent function $y=f(x)$?',
    steps: [
      { label: 'Identify the shift', content: 'The inside is zero at $x=3$, so $f(x-3)$ is $f$ shifted **right $3$**.' },
      { label: 'Undo the shift', content: "Returning to the parent function requires reversing the transformation: move **left $3$**. Re-applying the shift instead of reversing it is the standard error on this question type." },
      { label: 'Shift the point', content: 'Subtract $3$ from the x-coordinate: $(7,2)\\to(4,2)$. The point $(4,2)$ lies on $y=f(x)$.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The point $(3, 5)$ lies on $y=f(x)$. What point must lie on $y=f(-x)$?',
    steps: [
      { label: 'Classify the change', content: 'The negative is *inside*, attached to $x$, so $f(-x)$ reflects the graph over the **y-axis**.' },
      { label: 'Move the point', content: 'A y-axis reflection negates the x-coordinate and leaves y unchanged: $(3,5)\\to(-3,5)$. Verify: $f(-(-3))=f(3)=5$, so $(-3,5)$ lies on the new graph.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The graph of $y=f(x)$ is transformed into $y=f(x+2)$. Which direction and how far does it move, and why?',
    answer: "**Left $2$.** The $+2$ is inside, so the shift is horizontal and opposite the sign. The zero method confirms it: $x+2$ is zero at $x=-2$, so the graph moved to $x=-2$ — left $2$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A student says $y=-f(x)$ flips the graph over the y-axis. Are they right?',
    answer: "No — **it reflects over the x-axis.** The negative is *outside* the function, so it changes the output (the y-values) and reflects vertically. The transformation that reflects over the y-axis is $f(-x)$, with the negative inside. Locating the change — inside or outside — determines the axis.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The point $(2, 7)$ lies on $y=f(x)$. What point lies on $y=f(x)-3$?',
    answer: "**$(2, 4)$.** The $-3$ is outside, so it affects only the output: $7-3=4$. The x-coordinate remains $2$ — an outside change never moves a graph horizontally.",
  },

  {
    type: 'text',
    content: "**In summary:** classify each change as outside or inside. An outside change is vertical and follows its sign; an inside change is horizontal and reverses it. For any horizontal shift, set the inside expression to zero to locate the graph's new position.",
  },
];
