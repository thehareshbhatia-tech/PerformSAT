/**
 * Learn lesson body — Radicals, Rationals & Hidden Quadratics (Advanced Math).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no
 * analogies, no pep-talk, no emojis. All substance of the v2 textbook
 * version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const nonlinearEquationsBlocks = [
  {
    type: 'text',
    content: "The unit closes with four equation types that draw on every tool we've assembled so far — each with its own solution method.",
  },
  {
    type: 'list',
    title: 'The four types:',
    items: [
      'the variable under a square root',
      'the variable in a denominator',
      'a quartic with quadratic structure',
      'a polynomial presented through division',
    ],
  },
  {
    type: 'text',
    content: "One principle governs all four: **the moves that clear roots and fractions can introduce false solutions or hide restrictions.** The original equation is the final authority on which candidates count — solve directly, then verify against it.",
  },

  { type: 'heading', content: 'Radical equations: isolate, square, verify' },
  {
    type: 'steps',
    title: 'Solving a radical equation',
    items: [
      '**Isolate the square root** on one side.',
      '**Square both sides** to eliminate it, then solve what remains.',
      '**Check every candidate in the original equation.** Any candidate that fails is **extraneous** — discard it.',
    ],
  },
  {
    type: 'text',
    content: "The check isn't optional, because squaring is **not reversible**. Squaring $\\sqrt{A} = B$ also solves $\\sqrt{A} = -B$, a different equation — so a candidate can appear that the original never had.",
  },
  {
    type: 'text',
    content: "Skipping the check is how a correctly executed method still lands on a wrong answer.",
  },
  {
    type: 'keyInsight',
    content: "A square root symbol always means the non-negative value: $\\sqrt{9} = 3$, never $\\pm 3$. The $\\pm$ arises only when a root is taken during solving — it's never part of the symbol itself.",
  },

  { type: 'heading', content: 'Rational equations and domain restrictions' },
  {
    type: 'text',
    content: "When the variable sits in a denominator, multiply both sides by that denominator to clear the fraction, then solve.",
  },
  {
    type: 'text',
    content: "One restriction applies: any value that makes an *original* denominator $0$ was never admissible — the fraction is undefined there, and clearing the denominator removes the visible evidence. Strike any candidate that zeroes an original denominator.",
  },
  {
    type: 'text',
    content: "The parallel with radicals holds: clearing a fraction, like squaring, can admit a value the original equation never permitted.",
  },
  {
    type: 'tip',
    content: "Cancel only a **factor**, never a term across a plus or minus. $\\dfrac{(x-3)(x+2)}{x-3}$ cancels to $x+2$ (with $x \\ne 3$), but $\\dfrac{x+2}{x}$ does **not** become $\\dfrac{2}{1}$.",
  },

  { type: 'heading', content: 'Dividing both sides by a variable expression' },
  {
    type: 'text',
    content: "A third non-reversible move joins squaring and fraction-clearing: **dividing both sides by an expression that contains the variable.**",
  },
  {
    type: 'text',
    content: "Division is valid only when the divisor is nonzero, so dividing by $x$ builds in the silent assumption $x \\ne 0$ — and any root that makes the divisor zero disappears without a trace.",
  },
  {
    type: 'text',
    content: "In $x^2 = 5x$, dividing both sides by $x$ gives $x = 5$ and looks finished. Yet $x = 0$ satisfies the original equation ($0 = 0$) and has been discarded.",
  },
  {
    type: 'text',
    content: "Unlike an extraneous root, which the final check exposes, a discarded root leaves nothing behind to check. The work simply reports one solution where there were two.",
  },
  {
    type: 'trapCard',
    wrong: 'To solve $x^2 = 5x$, divide both sides by $x$: $\\;x = 5$.',
    correction: 'Dividing by $x$ assumes $x \\ne 0$ and discards the root $x = 0$. Move every term to one side and factor instead: $x^2 - 5x = 0 \\Rightarrow x(x - 5) = 0 \\Rightarrow x = 0$ or $x = 5$.',
  },
  {
    type: 'text',
    content: "The rule extends beyond a lone $x$: cancelling $(x-1)$ from both sides of $(x-1)(x+2) = 4(x-1)$ discards the solution $x = 1$.",
  },
  {
    type: 'text',
    content: "Whenever the same variable factor appears on both sides, subtract to bring everything to one side and factor it out: $(x-1)(x+2) - 4(x-1) = (x-1)(x-2) = 0$, so $x = 1$ or $x = 2$. Factoring preserves every root; cancelling erases one.",
  },

  { type: 'heading', content: 'Hidden quadratics and substitution' },
  {
    type: 'text',
    content: "When the same expression appears twice in an equation, a quadratic structure is hiding in it. $x^4 - 5x^2 + 4 = 0$ opens up through substitution: let $u = x^2$, and the equation becomes $u^2 - 5u + 4 = 0$ — an ordinary quadratic.",
  },
  {
    type: 'text',
    content: "Solve for $u$, then complete the step that gets skipped most often: **substitute back**, translating every value of $u$ into values of $x$.",
  },
  {
    type: 'text',
    content: "That's where solutions get lost — $u$ is an intermediate variable, not the answer, and stopping at $u$ reports the wrong quantity. The same substitution handles $(x-3)^2 + 5(x-3) + 6 = 0$ (let $u = x-3$).",
  },

  { type: 'heading', content: 'Line-parabola intersections and the remainder theorem' },
  {
    type: 'text',
    content: "To find where a line and a parabola intersect, set the two expressions **equal** and solve the single quadratic that results. An intersection point lies on both curves at once, so equating the right-hand sides finds every shared x-value in one step.",
  },
  {
    type: 'list',
    title: 'The discriminant $b^2 - 4ac$ of that quadratic counts the intersections without finding them:',
    items: [
      'positive — two crossings',
      'zero — a tangent touch (one point)',
      'negative — the curves never meet',
    ],
  },
  {
    type: 'text',
    content: "To find a tangent line, set the discriminant equal to $0$ and solve.",
  },
  {
    type: 'text',
    content: "The remainder theorem: dividing a polynomial $P(x)$ by $(x - a)$ leaves remainder **$P(a)$** — a single evaluation replaces long division entirely. A remainder of $0$ means $(x - a)$ is a factor.",
  },
  {
    type: 'text',
    content: "Watch the converse error: $P(6) = 4$ establishes that the remainder is $4$. It does **not** make $(x-6)$ a factor.",
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      '**Record restrictions first.** Before any algebra, note every value that makes an original denominator zero.',
      '**Clear the obstacle.** Isolate and square a radical, multiply away a denominator, or substitute $u$ for a repeated expression.',
      '**Never divide by a variable expression.** Bring every term to one side and factor — factoring keeps every root, cancelling erases one.',
      '**Check each candidate against the original equation.** Discard the extraneous ones, and translate every $u$ back into $x$ before counting solutions.',
    ],
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
      { label: 'Apply the remainder theorem', content: "The remainder on division by $(x - a)$ is $P(a)$; here $a = 1$. No long division needed." },
      { label: 'Evaluate', content: "$P(1) = 2 - 3 + 1 - 7 = -7$." },
      { label: 'Interpret the result', content: "**The remainder is $-7$.** It isn't $0$, so $(x-1)$ is not a factor." },
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
      { label: 'Flag the restriction', content: "The denominator is $0$ at $x = 3$, so $x \\ne 3$ — record that before solving." },
      { label: 'Clear the denominator', content: "Multiply both sides by $(x-3)$: $x^2 - 9 = 5(x - 3)$." },
      { label: 'Solve the quadratic', content: "$x^2 - 9 = 5x - 15 \\Rightarrow x^2 - 5x + 6 = 0 \\Rightarrow (x-2)(x-3) = 0 \\Rightarrow x = 2$ or $x = 3$." },
      { label: 'Discard the restricted value', content: "$x = 3$ makes the original denominator zero, so it is extraneous. **$x = 2$ only** — and it verifies: $\\dfrac{4-9}{2-3} = \\dfrac{-5}{-1} = 5$." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Solving $\\dfrac{x^2}{x-2} = \\dfrac{4}{x-2}$ gives candidates $x = 2$ and $x = -2$. Which are real solutions?',
    answer: "**$x = -2$ only.** Clearing the denominators gives $x^2 = 4$, so $x = \\pm 2$ — but $x = 2$ makes the original denominator $(x - 2)$ zero, so it was never admissible. A rational equation excludes every value that zeroes an original denominator, no matter how the algebra produced it.",
  },
  {
    type: 'checkpointQuestion',
    question: 'You let $u = x^2$ to solve $x^4 - 13x^2 + 36 = 0$ and find $u = 4$ and $u = 9$. How many solutions for $x$, and what are they?',
    answer: "Four: $x^2 = 4 \\Rightarrow x = \\pm 2$ and $x^2 = 9 \\Rightarrow x = \\pm 3$. Each positive value of $u = x^2$ yields *two* values of $x$ — substitute back before counting, or the count comes out as two when there are four.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A quadratic formed by setting a line equal to a parabola has discriminant $-12$. How many times do they intersect?',
    answer: "**Zero times.** A negative discriminant means the quadratic has no real solutions, so the curves never meet. The discriminant counts the intersections without computing a single coordinate — that's exactly its use.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Solving $3x^2 = 12x$ by dividing both sides by $3x$ gives $x = 4$. What was lost, and what is the full solution set?',
    answer: "**$x = 0$ was lost; the solutions are $x = 0$ and $x = 4$.** Dividing by $3x$ is valid only when $x \\ne 0$, so the root that makes the divisor zero vanished — with no extraneous candidate left behind to flag the error. Factoring keeps both: $3x^2 - 12x = 0 \\Rightarrow 3x(x - 4) = 0 \\Rightarrow x = 0$ or $x = 4$.",
  },

  {
    type: 'text',
    content: "**In summary:** clear the root or fraction, solve, then check every candidate against the *original* equation — squaring, clearing, and dividing aren't fully reversible. Substitute for a repeated expression to expose a quadratic, set intersecting curves equal to get one quadratic, and evaluate $P(a)$ for remainders.",
  },
];
