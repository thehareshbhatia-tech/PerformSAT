/**
 * Learn lesson body — Function Transformations (Advanced Math).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js):
 * practiced-tutor register — developed 2-5 sentence paragraphs with
 * connective tissue; every rule earns its "because"; student-psychology
 * named concretely; math teaching is example-led; varied rhythm, no
 * aphorism-per-block. Bans carried from v3: no analogies, no pep talk,
 * no exclamation marks, no emojis, no test-personification. All v3
 * teaching claims preserved.
 *
 * COMPOSED MODE (2026-07-18): chapterOpener lede + auto-numbered
 * sections/examples/figures + aside margin-notes + summary close
 * (exemplar: bodies/mPercents.js).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mTransformationsBlocks = [
  {
    type: 'chapterOpener',
    lede: "Solving a quadratic told us where a parabola sits — its roots and vertex. Transformation questions move the graph itself and ask how the equation records the move, and every one of them turns on a single distinction: **is the change applied outside the function or inside it?** Outside, the change acts on the output, so the graph moves vertically and the sign behaves as written. Inside, it acts on the input, so the graph moves horizontally — and the direction is the opposite of what the sign suggests. There's a reason for that asymmetry, and watching it happen once is worth more than memorizing the rule.",
  },

  { type: 'heading', content: 'Outside the function: vertical moves' },
  {
    type: 'text',
    content: "Start with $f(x)+2$. By the time the $+2$ arrives, the rule has already run — an input went in, an output came out, and only then was $2$ added. So the change lands directly on the y-values: every point on the graph rises exactly $2$, and nothing moves sideways, because no input was ever touched.",
  },
  {
    type: 'diagramRef',
    visualType: 'verticalShiftDiagram',
    description: "The graph of $f(x)$ (dashed) and $f(x)+2$: adding outside the function lifts every point straight up by $2$, exactly as the sign says.",
  },
  {
    type: 'text',
    content: "Figure 1 shows the move — the dashed parent and its lifted copy, every point raised the same $2$ with nothing sliding sideways. Everything written outside behaves this way. $f(x)-3$ computes the output first and then drops it by $3$; $-f(x)$ negates every output, which flips the whole graph over the **x-axis**. Outside the function, the sign means exactly what it says — plus is up, minus is down. The intuitive half of the topic ends here.",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The graph of $y=f(x)$ is shifted to produce $y=f(x)+6$. Describe the shift.',
    steps: [
      { label: 'Classify the change', content: "The $+6$ is *outside* the function, so it's a **vertical** shift — and an outside sign behaves as written." },
      { label: 'Read the direction', content: 'Positive outside means **up**: the graph shifts **up $6$**.' },
    ],
  },

  { type: 'heading', content: 'Inside the function: horizontal moves' },
  {
    type: 'text',
    content: "Now put the change inside the parentheses: $f(x-2)$. Track one point instead of trusting the sign. Whatever output $f$ produced at $x=0$, the new function produces at $x=2$, because $f(2-2)=f(0)$. Every feature of the graph now happens $2$ units later than it used to — the graph has moved **right**, opposite the sign.",
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "Nearly every student reads the minus sign in $f(x-2)$ and says left — and that answer choice is waiting on the test every time. The sign is the trap; a single tracked point is the escape.",
  },
  {
    type: 'diagramRef',
    visualType: 'horizontalShiftDiagram',
    description: "The graph of $f(x)$ (dashed) and $f(x-2)$: subtracting $2$ inside the parentheses moves the graph right $2$ — the direction opposite the sign.",
  },
  {
    type: 'text',
    content: "Figure 2 makes the reversal concrete: the minus inside $f(x-2)$ moved the graph right, not left. The same logic runs through every inside change: the expression alters the input *before* the rule sees it, so the graph compensates by sliding the other way. $f(x+2)$ hands the rule inputs that are $2$ ahead of schedule, so the graph shifts **left** $2$; $f(-x)$ feeds the rule mirrored inputs, reflecting the graph over the **y-axis**. This reversal is the central difficulty of the whole topic — which is precisely why the misread \"left $2$\" for $f(x-2)$ appears so routinely among the wrong answers.",
  },
  {
    type: 'keyInsight',
    content: 'Only the inside sign reverses. $f(x-h)$ moves the graph RIGHT by $h$: to shift a graph right, *subtract* inside the parentheses.',
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

  { type: 'heading', content: 'A shortcut: set the inside to zero' },
  {
    type: 'text',
    content: "If the sign reversal refuses to stick, there's a method that never needs it: find **the value of $x$ that makes the inside expression equal zero**. For $f(x-5)$, the inside is zero at $x=5$, so the graph has moved to $x=5$ — right $5$. Why does that work? Because the input that zeroes the inside is exactly the input where the new function reproduces $f(0)$, so it marks where the graph's old starting point has landed. The method extends cleanly to fractions: $f(x-\\tfrac{3}{2})$ has a zero inside at $x=\\tfrac{3}{2}$, so the shift is right $\\tfrac{3}{2}$, with no sign-flipping anywhere in the reasoning.",
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The graph shown is $y=f(x-3)$. If this shifted graph passes through the point $(7, 2)$, what point must lie on the graph of the parent function $y=f(x)$?',
    steps: [
      { label: 'Identify the shift', content: 'The inside is zero at $x=3$, so $f(x-3)$ is $f$ shifted **right $3$**.' },
      { label: 'Undo the shift', content: "Getting back to the parent function means reversing the transformation: move **left $3$**. Re-applying the shift instead of reversing it is the standard error on this question type." },
      { label: 'Shift the point', content: 'Subtract $3$ from the x-coordinate: $(7,2)\\to(4,2)$. The point $(4,2)$ lies on $y=f(x)$.' },
    ],
  },

  { type: 'heading', content: 'Combining transformations' },
  {
    type: 'text',
    content: "A single expression can carry both kinds of change at once. In $f(x+1)-4$, the inside $+1$ moves the graph **left $1$** and the outside $-4$ moves it **down $4$** — and the reliable approach is simply to classify each change separately and stack the results.",
  },
  {
    type: 'aside',
    kind: 'remember',
    content: 'A vertical move and a horizontal move never interfere — one acts on $x$, the other on $y$ — so a combined transformation can be taken one piece at a time, in either order, and land on the same graph.',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The function $g$ is defined by $g(x)=f(x-4)+1$. Compared to the graph of $f$, how is the graph of $g$ shifted?',
    steps: [
      { label: 'Separate the two changes', content: "There's an inside change ($x-4$) and an outside change ($+1$). Classify each one separately." },
      { label: 'Classify the inside change', content: 'The inside is zero at $x=4$, so the graph moved to $x=4$: **right $4$**. The $-4$ moves it right, not left — the inside sign reverses.' },
      { label: 'Classify the outside change', content: 'The $+1$ is outside, so it acts as written: **up $1$**.' },
      { label: 'Combine', content: 'The graph of $g$ is the graph of $f$ shifted **right $4$ and up $1$**.' },
    ],
  },
  {
    type: 'steps',
    title: 'How to approach these questions',
    items: [
      '**Locate each change.** Outside the function (after the rule runs), or inside the parentheses (attached to $x$)?',
      '**Outside means vertical, sign as written.** $+k$ up, $-k$ down, a leading negative reflects over the x-axis.',
      '**Inside means horizontal, sign reversed.** Or skip the memorizing: set the inside expression to zero — the graph moved to that x-value.',
      '**Take combined changes one at a time.** Vertical and horizontal moves never interfere, so classify each separately and stack the results.',
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
    answer: "No — **it reflects over the x-axis.** The negative is *outside* the function, so it changes the output (the y-values) and reflects vertically. The reflection over the y-axis is $f(-x)$, with the negative inside — locating the change, inside or outside, decides the axis.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The point $(2, 7)$ lies on $y=f(x)$. What point lies on $y=f(x)-3$?',
    answer: "**$(2, 4)$.** The $-3$ is outside, so it affects only the output: $7-3=4$. The x-coordinate stays $2$ — an outside change never moves a graph horizontally.",
  },

  {
    type: 'summary',
    title: 'The chapter in one classification',
    points: [
      'Locate each change before reading its sign: **outside** the function, or **inside** the parentheses.',
      '**Outside** means a vertical move and the sign behaves as written — plus is up, minus is down, a leading negative reflects over the x-axis.',
      '**Inside** means a horizontal move and the sign reverses: $f(x-h)$ shifts the graph right by $h$.',
      'To sidestep the reversal, set the **inside expression to zero** — the graph has moved to that x-value.',
      'A combined change is nothing more than the two classifications **stacked**, since vertical and horizontal moves never interfere.',
    ],
  },
];
