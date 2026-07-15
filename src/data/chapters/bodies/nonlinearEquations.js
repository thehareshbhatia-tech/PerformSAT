/**
 * Learn lesson body — Radicals, Rationals & Hidden Quadratics (Advanced Math).
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

export const nonlinearEquationsBlocks = [
  {
    type: 'text',
    content: "An equation with the variable under a square root, an equation with the variable in a denominator, a quartic with quadratic structure, and a polynomial presented through division — four equation types, each with its own solution method. One principle governs all of them: **the operations that clear roots and fractions can introduce false solutions or conceal restrictions, so the original equation is the final authority on which candidates count.** Solve directly, then verify against the original.",
  },

  { type: 'heading', content: 'Radical equations: isolate, square, and verify' },
  {
    type: 'text',
    content: "Isolate the square root, square both sides to eliminate it, then solve the resulting equation. Squaring, however, is **not reversible** — it can produce a solution the original equation never had, because squaring $\\sqrt{A} = B$ also solves $\\sqrt{A} = -B$, a different equation. Every candidate must therefore be substituted into the *original* equation. Any candidate that fails is **extraneous** and is discarded. Omitting this check is how a correctly executed method still produces a wrong answer.",
  },
  {
    type: 'keyInsight',
    content: "A square root symbol always denotes the non-negative value: $\\sqrt{9} = 3$, never $\\pm 3$. The $\\pm$ arises only when a root is taken during solving — it is never part of the symbol itself.",
  },

  { type: 'heading', content: 'Rational equations and domain restrictions' },
  {
    type: 'text',
    content: "When the variable appears in a denominator, multiply both sides by that denominator to clear the fraction, then solve. One restriction applies: any value that makes an *original* denominator $0$ was never admissible — the fraction is undefined there, and multiplying the denominator away removes the visible evidence. The original equation determines which values are allowed, so any candidate that makes an original denominator zero must be struck. The situation parallels the radical case: clearing a fraction, like squaring, can admit a value the original equation never permitted.",
  },
  {
    type: 'tip',
    content: "Cancel only a **factor**, never a term across a plus or minus. $\\dfrac{(x-3)(x+2)}{x-3}$ cancels to $x+2$ (with $x \\ne 3$), but $\\dfrac{x+2}{x}$ does **not** become $\\dfrac{2}{1}$.",
  },

  { type: 'heading', content: 'Hidden quadratics and substitution' },
  {
    type: 'text',
    content: "When the same expression appears twice in an equation, a quadratic structure is present. $x^4 - 5x^2 + 4 = 0$ becomes tractable through substitution: let $u = x^2$, and the equation is $u^2 - 5u + 4 = 0$ — an ordinary quadratic. Solve for $u$, then complete the step that is most often skipped: **substitute back**, translating every value of $u$ into values of $x$. This is where solutions are lost — $u$ is an intermediate variable, not the answer, and stopping at $u$ reports the wrong quantity. The same substitution handles $(x-3)^2 + 5(x-3) + 6 = 0$ (let $u = x-3$).",
  },

  { type: 'heading', content: 'Line-parabola intersections and the remainder theorem' },
  {
    type: 'text',
    content: "To find where a line and a parabola intersect, set the two expressions **equal** and solve the single quadratic that results — an intersection point lies on both curves at once, so equating the right-hand sides finds every shared $x$-value in one step. The discriminant $b^2 - 4ac$ of that quadratic counts the intersections without finding them: positive means two crossings, zero means a tangent touch (one point), negative means the curves never meet. To find a tangent line, set the discriminant equal to $0$ and solve.",
  },
  {
    type: 'text',
    content: "The remainder theorem: dividing a polynomial $P(x)$ by $(x - a)$ leaves remainder **$P(a)$** — a single evaluation replaces long division entirely. A remainder of $0$ means $(x - a)$ is a factor. Note the converse error: $P(6) = 4$ establishes that the remainder is $4$ — it does **not** make $(x-6)$ a factor.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $\\;x = \\sqrt{2x + 3}\\;$.',
    steps: [
      { label: 'Square both sides', content: "The radical is already isolated: $x^2 = 2x + 3$." },
      { label: 'Solve the quadratic', content: "$x^2 - 2x - 3 = 0 \\Rightarrow (x-3)(x+1) = 0 \\Rightarrow x = 3$ or $x = -1$." },
      { label: 'Check both in the original', content: "$x=3$: $\\sqrt{9} = 3$, valid. $x=-1$: $\\sqrt{1} = 1 \\ne -1$, extraneous." },
      { label: 'State the solution', content: "**$x = 3$ only** — squaring introduced $x = -1$, and the check eliminated it." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'What is the remainder when $P(x) = 2x^3 - 3x^2 + x - 7$ is divided by $(x - 1)$?',
    steps: [
      { label: 'Apply the remainder theorem', content: "The remainder on division by $(x - a)$ is $P(a)$; here $a = 1$. No long division is needed." },
      { label: 'Evaluate', content: "$P(1) = 2 - 3 + 1 - 7 = -7$." },
      { label: 'Interpret the result', content: "**The remainder is $-7$.** It is not $0$, so $(x-1)$ is not a factor." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'For what value of $c$ is the line $y = 6x + c$ tangent to the parabola $y = x^2 + 2$?',
    steps: [
      { label: 'Set the expressions equal', content: "$x^2 + 2 = 6x + c \\Rightarrow x^2 - 6x + (2 - c) = 0$." },
      { label: 'Set the discriminant to zero', content: "Tangency means one intersection, so $b^2 - 4ac = 0$: $(-6)^2 - 4(1)(2 - c) = 0 \\Rightarrow 36 - 8 + 4c = 0$." },
      { label: 'Solve for c', content: "$28 + 4c = 0 \\Rightarrow c = -7$." },
      { label: 'State the value', content: "**$c = -7$** — the single value for which the line touches the parabola at exactly one point." },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $\\;\\dfrac{x^2 - 9}{x - 3} = 5\\;$.',
    steps: [
      { label: 'Flag the restriction', content: "The denominator is $0$ at $x = 3$, so $x \\ne 3$ — record the restriction before solving." },
      { label: 'Clear the denominator', content: "Multiply both sides by $(x-3)$: $x^2 - 9 = 5(x - 3)$." },
      { label: 'Solve the quadratic', content: "$x^2 - 9 = 5x - 15 \\Rightarrow x^2 - 5x + 6 = 0 \\Rightarrow (x-2)(x-3) = 0 \\Rightarrow x = 2$ or $x = 3$." },
      { label: 'Discard the restricted value', content: "$x = 3$ makes the original denominator zero, so it is extraneous. **$x = 2$ only** — and it verifies: $\\dfrac{4-9}{2-3} = \\dfrac{-5}{-1} = 5$." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Solving $\\dfrac{x^2}{x-2} = \\dfrac{4}{x-2}$ gives candidates $x = 2$ and $x = -2$. Which are real solutions?',
    answer: "**$x = -2$ only.** Clearing the denominators gives $x^2 = 4$, so $x = \\pm 2$ — but $x = 2$ makes the original denominator $(x - 2)$ zero, so it was never admissible. A rational equation excludes every value that makes an original denominator zero, regardless of how the algebra produced it.",
  },
  {
    type: 'checkpointQuestion',
    question: 'You let $u = x^2$ to solve $x^4 - 13x^2 + 36 = 0$ and find $u = 4$ and $u = 9$. How many solutions for $x$, and what are they?',
    answer: "Four: $x^2 = 4 \\Rightarrow x = \\pm 2$ and $x^2 = 9 \\Rightarrow x = \\pm 3$. Each positive value of $u = x^2$ yields *two* values of $x$ — substitute back before counting, or the count comes out as two solutions when there are four.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A quadratic formed by setting a line equal to a parabola has discriminant $-12$. How many times do they intersect?',
    answer: "**Zero times.** A negative discriminant means the quadratic has no real solutions, so the curves never meet. The discriminant counts the intersections without computing a single coordinate — that is precisely its use.",
  },

  {
    type: 'text',
    content: "**In summary:** clear the root or fraction, solve, then check every candidate against the *original* equation — squaring, clearing, and dividing are not fully reversible. Substitute for a repeated expression to expose a quadratic, set intersecting curves equal to obtain a single quadratic, and evaluate $P(a)$ for remainders.",
  },
];
