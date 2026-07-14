/**
 * Learn lesson body — Radicals, Rationals & Hidden Quadratics (Advanced Math).
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

export const nonlinearEquationsBlocks = [
  {
    type: 'text',
    content: "A square root sitting on the variable, a fraction with the variable underneath, a quartic that's secretly a quadratic, a polynomial handed to you through a division — four costumes, four moves. One habit ties them all together: **the moves that clear roots and fractions can invent fake answers or erase real ones, so the original equation is the only judge of what counts.** Solve boldly, then verify against the original.",
  },

  { type: 'heading', content: 'Radical equations: isolate, square, then CHECK' },
  {
    type: 'text',
    content: "Get the square root alone, square both sides to kill it, then solve what's left. But squaring is a **one-way door** — it can hand you a solution the original equation never had, because it secretly also solves $\\sqrt{A} = -B$, an equation you never wrote. So every candidate goes back into the *original* equation. Any that fails is **extraneous** — cross it out without mercy. Skipping that check is how a perfectly right method produces a wrong answer.",
  },
  {
    type: 'keyInsight',
    content: "A square root symbol always means the non-negative value: $\\sqrt{9} = 3$, never $\\pm 3$. The $\\pm$ appears only when *you* take a root to solve — it never lives inside the symbol.",
  },

  { type: 'heading', content: 'Rational equations: clear denominators, ban zero-makers' },
  {
    type: 'text',
    content: "Variable in a denominator? Multiply both sides by that denominator to clear the fraction, then solve. But here's the fine print: any value that makes an *original* denominator $0$ was never legal — the fraction is undefined there, and multiplying the denominator away hides the evidence. Read the original equation to decide what's allowed, then strike any candidate that zeroes a denominator. It's the mirror image of the radical case: clearing a fraction, like squaring, can smuggle in a value the original never permitted.",
  },
  {
    type: 'tip',
    content: "Only cancel a **factor**, never a term across a plus or minus. $\\dfrac{(x-3)(x+2)}{x-3}$ cancels to $x+2$ (with $x \\ne 3$), but $\\dfrac{x+2}{x}$ does **not** become $\\dfrac{2}{1}$.",
  },

  { type: 'heading', content: 'Hidden quadratics: rename the repeated chunk' },
  {
    type: 'text',
    content: "When the same expression shows up twice, a quadratic is hiding in there. $x^4 - 5x^2 + 4 = 0$ looks scary until you rename: let $u = x^2$ and it's just $u^2 - 5u + 4 = 0$ — an ordinary quadratic. Solve for $u$, then do the step people skip: **un-rename**, translating every $u$ back into $x$. Here's where answers get lost — $u$ is a middleman, not the finish line, and stopping at $u$ hands in the wrong object entirely. Same trick for $(x-3)^2 + 5(x-3) + 6 = 0$ (let $u = x-3$).",
  },

  { type: 'heading', content: 'Line meets parabola, and the remainder shortcut' },
  {
    type: 'text',
    content: "Where do a line and a parabola meet? Set them **equal** and solve the single quadratic that falls out — an intersection is just a point sitting on both curves at once, so equating the right sides finds every shared $x$-value in one move. Even better, the discriminant $b^2 - 4ac$ counts the meetings without finding them: positive = two crossings, zero = a tangent touch (one), negative = they never meet. Need a tangent line? Set the discriminant to $0$ and solve.",
  },
  {
    type: 'text',
    content: "And the remainder shortcut: dividing a polynomial $P(x)$ by $(x - a)$ leaves remainder **$P(a)$** — one evaluation, zero long division. A remainder of $0$ means $(x - a)$ is a factor. Watch the backward trap: $P(6) = 4$ tells you the remainder is $4$ — it does **not** make $(x-6)$ a factor.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $\\;x = \\sqrt{2x + 3}\\;$.',
    steps: [
      { label: 'Square both sides', content: "The radical is already alone: $x^2 = 2x + 3$." },
      { label: 'Solve the quadratic', content: "$x^2 - 2x - 3 = 0 \\Rightarrow (x-3)(x+1) = 0 \\Rightarrow x = 3$ or $x = -1$." },
      { label: 'Check both in the original', content: "$x=3$: $\\sqrt{9} = 3$, works. $x=-1$: $\\sqrt{1} = 1 \\ne -1$, extraneous." },
      { label: 'Answer', content: "**$x = 3$ only** — squaring invented $x = -1$, and the check threw it out." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'What is the remainder when $P(x) = 2x^3 - 3x^2 + x - 7$ is divided by $(x - 1)$?',
    steps: [
      { label: 'Recognize the shape', content: "Remainder on division by $(x - a)$ is $P(a)$; here $a = 1$. No long division." },
      { label: 'Evaluate', content: "$P(1) = 2 - 3 + 1 - 7 = -7$." },
      { label: 'Answer', content: "**The remainder is $-7$.** It isn't $0$, so $(x-1)$ is not a factor." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'For what value of $c$ is the line $y = 6x + c$ tangent to the parabola $y = x^2 + 2$?',
    steps: [
      { label: 'Set equal', content: "$x^2 + 2 = 6x + c \\Rightarrow x^2 - 6x + (2 - c) = 0$." },
      { label: 'Tangent means discriminant zero', content: "One intersection, so $b^2 - 4ac = 0$: $(-6)^2 - 4(1)(2 - c) = 0 \\Rightarrow 36 - 8 + 4c = 0$." },
      { label: 'Solve for c', content: "$28 + 4c = 0 \\Rightarrow c = -7$." },
      { label: 'Answer', content: "**$c = -7$** — the one line in the family that just grazes the parabola." },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $\\;\\dfrac{x^2 - 9}{x - 3} = 5\\;$.',
    steps: [
      { label: 'Flag the restriction', content: "The denominator is $0$ at $x = 3$, so $x \\ne 3$ — ban that value before you solve anything." },
      { label: 'Clear the denominator', content: "Multiply both sides by $(x-3)$: $x^2 - 9 = 5(x - 3)$." },
      { label: 'Solve the quadratic', content: "$x^2 - 9 = 5x - 15 \\Rightarrow x^2 - 5x + 6 = 0 \\Rightarrow (x-2)(x-3) = 0 \\Rightarrow x = 2$ or $x = 3$." },
      { label: 'Discard the banned value', content: "$x = 3$ zeroes the original denominator, so it's extraneous. **$x = 2$ only** — and it checks: $\\dfrac{4-9}{2-3} = \\dfrac{-5}{-1} = 5$." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Solving $\\dfrac{x^2}{x-2} = \\dfrac{4}{x-2}$ gives candidates $x = 2$ and $x = -2$. Which are real solutions?',
    answer: "**$x = -2$ only.** Clearing gives $x^2 = 4$, so $x = \\pm 2$ — but $x = 2$ zeroes the original denominator $(x - 2)$, so it was never legal. A rational equation bans every value that makes an original denominator zero, no matter how politely the algebra produced it.",
  },
  {
    type: 'checkpointQuestion',
    question: 'You let $u = x^2$ to solve $x^4 - 13x^2 + 36 = 0$ and find $u = 4$ and $u = 9$. How many solutions for $x$, and what are they?',
    answer: "Four: $x^2 = 4 \\Rightarrow x = \\pm 2$ and $x^2 = 9 \\Rightarrow x = \\pm 3$. Each positive $u = x^2$ hands back *two* values of $x$ — un-rename before you count, or you'll report two solutions when there are four.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A quadratic formed by setting a line equal to a parabola has discriminant $-12$. How many times do they intersect?',
    answer: "**Zero times.** A negative discriminant means no real solutions, so the curves never meet. The discriminant counts the crossings without computing a single coordinate — that's the whole point of it.",
  },

  {
    type: 'text',
    content: "**The move, every time:** clear the root or fraction, solve, then check every candidate against the *original* equation — squaring, clearing, and dividing don't fully reverse. Rename repeated chunks into a quadratic, set curves equal to get a single quadratic, and evaluate $P(a)$ for remainders.",
  },
];
