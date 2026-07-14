/**
 * Learn lesson body — Function Transformations (Advanced Math).
 *
 * TUTOR VOICE (adopted 2026-07-14, exemplar: ./mLinearEquations.js): coaching
 * direct-address — talks TO the student, anticipates the mistake before it
 * happens, everyday anchor first ("a function is a machine") and rules second.
 * Lean structure unchanged. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const mTransformationsBlocks = [
  {
    type: 'text',
    content: "Think of a function as a machine: numbers go in, numbers come out. Every transformation question is one question in disguise — **is the edit OUTSIDE the machine or INSIDE it?** Outside edits touch what comes out, so the graph slides up or down and the sign means what it says. Inside edits tamper with what goes in, so the graph slides left or right — and the sign lies to you.",
  },

  { type: 'heading', content: 'Outside edits move it vertically (and behave normally)' },
  {
    type: 'text',
    content: "An edit *outside* the function runs after the machine finishes its job — the output comes out, then you add to it or negate it. That's why these feel natural: the change lands directly on the y-values you already have. $f(x)+3$ shifts up $3$. $f(x)-3$ shifts down $3$. And $-f(x)$ flips the whole graph over the **x-axis**. No surprises out here.",
  },

  { type: 'heading', content: 'Inside edits move it horizontally (and behave backward)' },
  {
    type: 'text',
    content: "An edit *inside* — attached to the $x$ — tampers with the input before the rule ever runs, so the graph moves **left or right**, in the direction OPPOSITE the sign. $f(x-2)$ shifts **right** $2$, not left. $f(x+2)$ shifts **left** $2$. And $f(-x)$ flips over the **y-axis**. This backwardness is the trap the whole topic is built on — pick \"left $2$\" for $f(x-2)$ and there it sits, waiting for you, in the answer choices.",
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
    content: "If the backward sign keeps biting you, stop memorizing it. Ask one question instead: **what value of $x$ makes the inside equal zero?** That's where the graph went. For $f(x-5)$, the inside is zero at $x=5$, so the graph shifted to $x=5$: right $5$. It even handles fractions without flinching: $f(x-\\tfrac{3}{2})$ zeroes at $x=\\tfrac{3}{2}$, so it shifted right $\\tfrac{3}{2}$.",
  },

  { type: 'heading', content: 'Combine shifts one edit at a time' },
  {
    type: 'text',
    content: "A graph can carry both edits at once, and the safe path is to never mix them. Classify each on its own: in $f(x+1)-4$, the inside $+1$ moves it **left $1$**, and the outside $-4$ moves it **down $4$**. You can trust this because vertical and horizontal moves are independent — one touches $x$, the other touches $y$ — so they never interfere. Do them in either order; you land on the same graph.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The graph of $y=f(x)$ is shifted to produce $y=f(x)+6$. Describe the shift.',
    steps: [
      { label: 'Classify the edit', content: 'The $+6$ is *outside* the function, so it is a **vertical** shift — and outside signs tell the truth.' },
      { label: 'Read the direction', content: 'Positive outside means **up**: the graph shifts **up $6$**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The function $g$ is defined by $g(x)=f(x-4)+1$. Compared to the graph of $f$, how is the graph of $g$ shifted?',
    steps: [
      { label: 'Split into two edits', content: 'There is an inside edit ($x-4$) and an outside edit ($+1$). Handle each on its own — never mix them.' },
      { label: 'Inside edit', content: 'The inside is zero at $x=4$, so the graph moved to $x=4$: **right $4$**. The $-4$ moves it right, not left — the inside sign lies.' },
      { label: 'Outside edit', content: 'The $+1$ is outside, so it means what it says: **up $1$**.' },
      { label: 'Combine', content: 'The graph of $g$ is the graph of $f$ shifted **right $4$ and up $1$**.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The graph shown is $y=f(x-3)$. If this shifted graph passes through the point $(7, 2)$, what point must lie on the graph of the parent function $y=f(x)$?',
    steps: [
      { label: 'Which way did it move?', content: 'The inside is zero at $x=3$, so $f(x-3)$ is $f$ shifted **right $3$**.' },
      { label: 'Undo the shift', content: "You're walking back to the parent, so move **left $3$** — reverse the transformation. Re-applying it instead is the classic slip here." },
      { label: 'Shift the point', content: 'Subtract $3$ from the x-coordinate: $(7,2)\\to(4,2)$. The point $(4,2)$ lies on $y=f(x)$.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The point $(3, 5)$ lies on $y=f(x)$. What point must lie on $y=f(-x)$?',
    steps: [
      { label: 'Classify the edit', content: 'The negative is *inside*, attached to $x$, so $f(-x)$ reflects the graph over the **y-axis**.' },
      { label: 'Move the point', content: 'A y-axis reflection negates the x-coordinate and leaves y alone: $(3,5)\\to(-3,5)$. Check it: $f(-(-3))=f(3)=5$, so $(-3,5)$ sits on the new graph.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The graph of $y=f(x)$ is transformed into $y=f(x+2)$. Which direction and how far does it move, and why?',
    answer: "**Left $2$.** The $+2$ is inside, so the shift is horizontal and backward from the sign. If that feels shaky, use the zero trick: $x+2$ is zero at $x=-2$, so the graph moved to $x=-2$ — left $2$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A student says $y=-f(x)$ flips the graph over the y-axis. Are they right?',
    answer: "No — **it flips over the x-axis.** The negative is *outside* the function, so it changes the output (the y-values) and reflects vertically. The one that flips over the y-axis is $f(-x)$, with the negative inside. Ask where the edit lives before you say which axis.",
  },
  {
    type: 'checkpointQuestion',
    question: 'The point $(2, 7)$ lies on $y=f(x)$. What point lies on $y=f(x)-3$?',
    answer: "**$(2, 4)$.** The $-3$ is outside, so it only touches the output: $7-3=4$. The x-coordinate stays $2$ — outside edits never move a graph sideways.",
  },

  {
    type: 'text',
    content: "**The move, every time:** ask outside or inside → outside means vertical and honest, inside means horizontal and backward → for any horizontal shift, set the inside to zero to find where the graph landed.",
  },
];
