/**
 * Learn lesson body — Radicals, Rationals & Hidden Quadratics (Advanced Math).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js): practiced-tutor
 * register — developed 2-5 sentence paragraphs with connective tissue; every rule
 * earns its "because"; student-psychology named concretely; math teaching is
 * example-led; varied rhythm, no aphorism-per-block. Bans carried from v3: no
 * analogies, no pep talk, no exclamation marks, no emojis, no
 * test-personification. All v3 teaching claims preserved.
 *
 * COMPOSED MODE (2026-07-18): chapterOpener lede + auto-numbered sections/examples/figures +
 * aside margin-notes + summary close (exemplar: bodies/mPercents.js).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const nonlinearEquationsBlocks = [
  {
    type: 'chapterOpener',
    lede: "The unit closes with four equation types that draw on every tool we've assembled so far: the variable under a square root, the variable in a denominator, a quartic with quadratic structure, and a polynomial presented through division. Each has its own solution method, but one principle governs all four — **the moves that clear roots and fractions can introduce false solutions or hide restrictions.** The original equation is the final authority on which candidates count: solve directly, then verify against it.",
  },

  { type: 'heading', content: 'Radical equations: isolate, square, verify' },
  {
    type: 'text',
    content: "Start with an equation that has no solution at all: $\\sqrt{x} = -3$. A square root can't be negative, so nothing satisfies it — yet squaring both sides produces $x = 9$ anyway, and $\\sqrt{9} = 3$, not $-3$. Squaring manufactured a candidate out of nothing, because squaring is **not reversible**: squaring $\\sqrt{A} = B$ also solves $\\sqrt{A} = -B$, a different equation. That failure is the whole reason the method ends with a check.",
  },
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
    content: "The check is the step students skip, because by the time they reach it the algebra feels finished. It isn't optional — skipping it is how a correctly executed method still lands on a wrong answer, and the extraneous candidate is routinely listed among the choices.",
  },
  {
    type: 'aside',
    kind: 'remember',
    content: "A square root symbol always means the non-negative value: $\\sqrt{9} = 3$, never $\\pm 3$. The $\\pm$ arises only when a root is taken during solving — it's never part of the symbol itself.",
  },
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

  { type: 'heading', content: 'Rational equations and domain restrictions' },
  {
    type: 'text',
    content: "When the variable sits in a denominator, multiply both sides by that denominator to clear the fraction, then solve. One restriction applies, and it applies before the algebra starts: any value that makes an *original* denominator $0$ was never admissible, because the fraction is undefined there — and clearing the denominator removes the visible evidence. So strike any candidate that zeroes an original denominator. The parallel with radicals holds exactly: clearing a fraction, like squaring, can admit a value the original equation never permitted.",
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "Cancel only a **factor**, never a term across a plus or minus. $\\dfrac{(x-3)(x+2)}{x-3}$ cancels to $x+2$ (with $x \\ne 3$), but $\\dfrac{x+2}{x}$ does **not** become $\\dfrac{2}{1}$.",
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

  { type: 'heading', content: 'Dividing both sides by a variable expression' },
  {
    type: 'text',
    content: "Take $x^2 = 5x$. Dividing both sides by $x$ gives $x = 5$, and the work looks finished. Yet $x = 0$ satisfies the original equation — $0 = 0$ — and it has been discarded, because division is valid only when the divisor is nonzero, so dividing by $x$ builds in the silent assumption $x \\ne 0$. Any root that makes the divisor zero disappears without a trace.",
  },
  {
    type: 'text',
    content: "This makes the mistake worse than an extraneous root. An extraneous candidate at least shows up in the final check and gets caught; a discarded root leaves nothing behind to check. The work simply reports one solution where there were two, and no later step ever flags the loss.",
  },
  {
    type: 'trapCard',
    wrong: 'To solve $x^2 = 5x$, divide both sides by $x$: $\\;x = 5$.',
    correction: 'Dividing by $x$ assumes $x \\ne 0$ and discards the root $x = 0$. Move every term to one side and factor instead: $x^2 - 5x = 0 \\Rightarrow x(x - 5) = 0 \\Rightarrow x = 0$ or $x = 5$.',
  },
  {
    type: 'text',
    content: "The rule extends beyond a lone $x$: cancelling $(x-1)$ from both sides of $(x-1)(x+2) = 4(x-1)$ discards the solution $x = 1$ the same way. Whenever the same variable factor appears on both sides, subtract to bring everything to one side and factor it out: $(x-1)(x+2) - 4(x-1) = (x-1)(x-2) = 0$, so $x = 1$ or $x = 2$. Factoring preserves every root; cancelling erases one.",
  },

  { type: 'heading', content: 'Hidden quadratics and substitution' },
  {
    type: 'text',
    content: "When the same expression appears twice in an equation, a quadratic structure is hiding in it. $x^4 - 5x^2 + 4 = 0$ opens up through substitution: let $u = x^2$, and the equation becomes $u^2 - 5u + 4 = 0$ — an ordinary quadratic. The same substitution handles $(x-3)^2 + 5(x-3) + 6 = 0$ with $u = x-3$.",
  },
  {
    type: 'text',
    content: "Solve for $u$, then complete the step that gets skipped most often: **substitute back**, translating every value of $u$ into values of $x$. It gets skipped because solving for $u$ feels like finishing — but $u$ is an intermediate variable, not the answer, and stopping at $u$ reports the wrong quantity. That final translation is where solutions get lost.",
  },

  { type: 'heading', content: 'Line-parabola intersections and the remainder theorem' },
  {
    type: 'text',
    content: "To find where a line and a parabola intersect, set the two expressions **equal** and solve the single quadratic that results. Why does one equation capture both curves? Because an intersection point lies on both at once, so equating the right-hand sides finds every shared x-value in one step.",
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
    type: 'text',
    content: "The remainder theorem: dividing a polynomial $P(x)$ by $(x - a)$ leaves remainder **$P(a)$** — a single evaluation replaces long division entirely. There's a reason it works: division means $P(x) = (x-a)\\,Q(x) + r$, and plugging in $x = a$ kills the first term, leaving $P(a) = r$. A remainder of $0$ means $(x - a)$ is a factor. Watch the converse error, though — $P(6) = 4$ establishes that the remainder is $4$, and it does **not** make $(x-6)$ a factor.",
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
    type: 'steps',
    title: 'How to approach these questions',
    items: [
      '**Record restrictions first.** Before any algebra, note every value that makes an original denominator zero.',
      '**Clear the obstacle.** Isolate and square a radical, multiply away a denominator, or substitute $u$ for a repeated expression.',
      '**Never divide by a variable expression.** Bring every term to one side and factor — factoring keeps every root, cancelling erases one.',
      '**Check each candidate against the original equation.** Discard the extraneous ones, and translate every $u$ back into $x$ before counting solutions.',
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
    type: 'summary',
    title: 'The chapter in five checks',
    points: [
      'Clear the root or fraction, solve, then **check every candidate against the original equation** — squaring, clearing, and dividing are not fully reversible.',
      '**Never divide by a variable expression**; factor instead, because dividing silently discards the root that zeroes the divisor.',
      '**Substitute** for a repeated expression to expose a hidden quadratic, then translate every value back into the original variable before counting.',
      'Set two intersecting curves **equal** to get one quadratic, whose discriminant counts the crossings without finding them.',
      'Evaluate **$P(a)$** for the remainder on division by $(x - a)$; a remainder of $0$ means $(x - a)$ is a factor.',
    ],
  },
];
