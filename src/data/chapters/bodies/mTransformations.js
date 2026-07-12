/**
 * Learn lesson body — Function Transformations (Advanced Math).
 *
 * Lean "review / cheat-sheet" style: one SAT skill, plain language, one idea per
 * short section, then worked examples and check-yourself questions. Shape + voice
 * follow bodies/gSubjectVerbAgreement.js (the exemplar). Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mTransformationsBlocks = [
  {
    type: 'text',
    content: 'A transformation is just an edit to a function. The whole skill is one question: **is the edit OUTSIDE the function or INSIDE it?** Outside moves the graph up/down and behaves normally. Inside moves it left/right and behaves backward.',
  },

  { type: 'heading', content: 'Outside edits move it vertically (and behave normally)' },
  {
    type: 'text',
    content: 'An edit *outside* the function changes the output after the rule runs, so the graph moves **up or down**, in the direction the sign says. $f(x)+3$ shifts up $3$. $f(x)-3$ shifts down $3$. And $-f(x)$ flips the whole graph over the **x-axis**. No surprises here.',
  },

  { type: 'heading', content: 'Inside edits move it horizontally (and behave backward)' },
  {
    type: 'text',
    content: 'An edit *inside* — attached to the $x$ — changes the input before the rule runs, so the graph moves **left or right**, in the direction OPPOSITE the sign. $f(x-2)$ shifts **right** $2$, not left. $f(x+2)$ shifts **left** $2$. And $f(-x)$ flips over the **y-axis**. This backward behavior is the one thing the SAT traps.',
  },
  {
    type: 'keyInsight',
    content: 'The sign lies only on the inside. $f(x-h)$ moves RIGHT by $h$. To move a graph right, you *subtract* inside.',
  },

  { type: 'heading', content: 'The edit-to-effect table' },
  {
    type: 'table',
    headers: ['Edit', 'Where the edit is', 'What the graph does'],
    rows: [
      ['$f(x)+k$', 'outside', 'up by $k$'],
      ['$f(x)-k$', 'outside', 'down by $k$'],
      ['$-f(x)$', 'outside', 'flip over the x-axis'],
      ['$f(x-h)$', 'inside', 'right by $h$'],
      ['$f(x+h)$', 'inside', 'left by $h$'],
      ['$f(-x)$', 'inside', 'flip over the y-axis'],
    ],
  },

  { type: 'heading', content: 'The trick for horizontal shifts: make the inside zero' },
  {
    type: 'text',
    content: 'If the backward sign confuses you, never memorize it — just ask **what value of $x$ makes the inside equal zero.** That is where the graph moved. For $f(x-5)$, the inside is zero at $x=5$, so the graph shifted to $x=5$: right $5$. This even handles fractions: $f(x-\\tfrac{3}{2})$ zeroes at $x=\\tfrac{3}{2}$, so it shifted right $\\tfrac{3}{2}$.',
  },

  { type: 'heading', content: 'Combine shifts one edit at a time' },
  {
    type: 'text',
    content: 'A graph can have both edits at once. Classify each separately: in $f(x+1)-4$, the inside $+1$ moves it **left $1$**, and the outside $-4$ moves it **down $4$**. Order does not matter — you land on the same graph either way.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The graph of $y=f(x)$ is shifted to produce $y=f(x)+6$. Describe the shift.',
    steps: [
      { label: 'Classify the edit', content: 'The $+6$ is *outside* the function, so it is a **vertical** shift that behaves normally.' },
      { label: 'Read the direction', content: 'A positive outside edit moves the graph **up**, so the graph shifts **up $6$**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The function $g$ is defined by $g(x)=f(x-4)+1$. Compared to the graph of $f$, how is the graph of $g$ shifted?',
    steps: [
      { label: 'Split into two edits', content: 'There is an inside edit ($x-4$) and an outside edit ($+1$). Handle each on its own.' },
      { label: 'Inside edit', content: 'Inside is zero at $x=4$, so the graph moves to $x=4$: **right $4$** (the $-4$ moves it right, not left).' },
      { label: 'Outside edit', content: 'The $+1$ is outside, so it moves the graph **up $1$**.' },
      { label: 'Combine', content: 'The graph of $g$ is the graph of $f$ shifted **right $4$ and up $1$**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The graph shown is $y=f(x-3)$. If this shifted graph passes through the point $(7, 2)$, what point must lie on the graph of the parent function $y=f(x)$?',
    steps: [
      { label: 'Which way did it move?', content: 'Inside is zero at $x=3$, so $f(x-3)$ is $f$ shifted **right $3$**.' },
      { label: 'Undo the shift', content: 'To get back to the parent, move **left $3$**: reverse the transformation, do not re-apply it.' },
      { label: 'Shift the point', content: 'Subtract $3$ from the x-coordinate: $(7,2)\\to(4,2)$. The point $(4,2)$ lies on $y=f(x)$.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The graph of $y=f(x)$ is transformed into $y=f(x+2)$. Which direction and how far does it move, and why?',
    answer: '**Left $2$.** The $+2$ is inside, so the shift is horizontal and backward from the sign. Check: the inside $x+2$ is zero at $x=-2$, so the graph moved to $x=-2$, i.e., left $2$.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A student says $y=-f(x)$ flips the graph over the y-axis. Are they right?',
    answer: 'No — **it flips over the x-axis.** The negative is *outside* the function, so it changes the output (the y-values) and reflects vertically. $f(-x)$, with the negative inside, is the one that flips over the y-axis.',
  },

  {
    type: 'text',
    content: '**The move, every time:** ask outside or inside → outside means vertical and normal, inside means horizontal and backward → for a horizontal shift, set the inside to zero to find where it landed.',
  },
];
