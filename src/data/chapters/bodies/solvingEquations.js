/**
 * Learn lesson body — Solving Equations & Rearranging Formulas (Algebra).
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

export const solvingEquationsBlocks = [
  {
    type: 'text',
    content: "An equation is a balance scale: whatever sits on the left weighs exactly what sits on the right. That picture is the whole skill — **do the same move to both whole sides until the thing you want stands alone.** Touch only one side and you've quietly turned the problem into a different one. Hold onto the scale and even a messy multi-step equation collapses into the same short routine.",
  },

  { type: 'heading', content: 'Solve by undoing, in reverse' },
  {
    type: 'text',
    content: "Shoes and socks: they went on in one order, they come off in the other. An expression is built the same way, so to free the variable, undo the *last* operation first. In $2x + 1 = 9$, the $x$ was multiplied by $2$ and then had $1$ added — so strip the $+1$ first (subtract from both sides), then the $\\times 2$ (divide both sides): $x = 4$. Go out of order and you end up dividing only part of the expression while the rest tags along — that's exactly where the arithmetic quietly breaks.",
  },
  {
    type: 'keyInsight',
    content: "Every move hits **both whole sides**, never one term. And before you look at the choices, plug your answer back in — $2(4)+1 = 9$ checks out, so you know you're right before the test tells you.",
  },

  { type: 'heading', content: 'Variables on both sides' },
  {
    type: 'text',
    content: "When the variable shows up on both sides, herd all the variable terms onto one side and the plain numbers onto the other — then peel as usual. You can't isolate a variable while copies of it sit on both sides pulling against each other. One thing before you herd: if a group is multiplied by something, **distribute to every term first** — the factor reaches all the way inside. $-2(x-5) = -2x + 10$, not $-2x - 5$. Here's where points get dropped: nearly everyone rushes distribution and loses the sign on that second term. Slow down for one beat and that slip disappears.",
  },

  { type: 'heading', content: 'Rearrange a formula: other letters are just numbers' },
  {
    type: 'text',
    content: "A formula stuffed with letters is the same solve wearing a lab coat. Treat every letter except your target as a frozen number and run the same peeling steps. To solve $A = \\tfrac{1}{2}bh$ for $h$: multiply both sides by $2$ to get $2A = bh$, then divide both sides by $b$ to get $h = \\dfrac{2A}{b}$. The $A$ and the $b$ obey the same rules a $7$ would — nothing new is happening. Students freeze on these because the letters feel like they demand special handling. They don't. Whisper \"that's just a number\" at each one and keep peeling.",
  },
  {
    type: 'keyInsight',
    content: "One-directional rule: a sum in a *numerator* splits ($\\frac{r+s}{t} = \\frac{r}{t} + \\frac{s}{t}$), but a sum in a *denominator* never does — $\\frac{r}{s+t}$ is **not** $\\frac{r}{s} + \\frac{r}{t}$. Split a denominator and your answer looks tidy and is completely wrong.",
  },

  { type: 'heading', content: 'The combined-total form $Ax + By = C$' },
  {
    type: 'text',
    content: "When a story prices *two* things and hands you their combined total, write it straight down: price times quantity, plus price times quantity, equals total. Adult tickets at $\\$8$, child tickets at $\\$5$, a group spends $\\$120$? That's $8a + 5c = 120$ — done, no slope in sight. The trap is reaching for $y = mx + b$ out of habit when the situation is really just two costs filling a budget. Want a free anchor point? Set one variable to $0$ to read an **intercept**: with $a = 0$, $5c = 120$, so $c = 24$ children — the pure \"all of one, none of the other\" case, and a quick sanity check for any answer.",
  },

  { type: 'heading', content: 'Answer what is asked, not just the variable' },
  {
    type: 'text',
    content: "Plenty of questions want a *combination* like $x + y$ or $2t$, not a single variable — and often you can grab it in one move without finding either variable. These are written on purpose: they reward the student who pauses to look for the shortcut and quietly punish the one who grinds. Given $3x + 3y = 21$, don't hunt for $x$ and $y$ separately (you can't from one equation). Factor: $3(x+y) = 21$, divide by $3$, and $x + y = 7$ falls straight out. When the coefficients match, the combination is sitting right there.",
  },
  {
    type: 'tip',
    content: "Before you bubble, re-read the last line of the question and say the exact object to yourself — \"it wants $x+y$,\" \"it wants $2t$.\" Solving perfectly and then bubbling the wrong quantity is the cheapest point you can lose on the whole math section.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'If $\\dfrac{x}{5} + 3 = 8$, what is the value of $x$?',
    steps: [
      { label: 'Peel the outside first', content: "The $+3$ is the outer layer. Subtract $3$ from both sides: $\\dfrac{x}{5} = 5$." },
      { label: 'Undo the division', content: "The $x$ is divided by $5$, so multiply both sides by $5$: $x = 25$." },
      { label: 'Check', content: "$\\dfrac{25}{5} + 3 = 5 + 3 = 8$. True — you're done, and you know it." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $4(t - 1) = 2t + 6$ for $t$.',
    steps: [
      { label: 'Distribute across the group', content: "The $4$ has to reach both terms: $4t - 4 = 2t + 6$ (not $4t - 1$)." },
      { label: 'Herd variables and numbers', content: "Subtract $2t$: $2t - 4 = 6$. Add $4$: $2t = 10$." },
      { label: 'Peel and check', content: "Divide by $2$: $t = 5$. Verify: $4(5-1) = 16$ and $2(5)+6 = 16$. Balanced." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $P = 2\\ell + 2w$ for $w$.',
    steps: [
      { label: 'Freeze the other letters', content: "Treat $P$ and $\\ell$ as numbers. Subtract $2\\ell$ from both sides: $P - 2\\ell = 2w$." },
      { label: 'Divide to isolate', content: "Divide both sides by $2$: $w = \\dfrac{P - 2\\ell}{2}$." },
      { label: 'Spot-check', content: "Try $P = 20,\\ \\ell = 3$: $w = 7$, and $2(3) + 2(7) = 20$. True." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The formula $F = \\dfrac{9}{5}C + 32$ converts a Celsius temperature to Fahrenheit. Solve for $C$ in terms of $F$.',
    steps: [
      { label: 'Freeze F, peel the outside', content: "Treat $F$ as a number and undo the $+32$ first: subtract $32$ from both sides to get $F - 32 = \\dfrac{9}{5}C$." },
      { label: 'Undo the fraction', content: "The $C$ is multiplied by $\\dfrac{9}{5}$, so multiply both sides by its reciprocal $\\dfrac{5}{9}$: $C = \\dfrac{5}{9}(F - 32)$." },
      { label: 'Spot-check', content: "Try $F = 212$: $C = \\dfrac{5}{9}(180) = 100$, the known boiling point. True." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'If $6x + 6y = 42$, what is $x + y$? (You cannot find $x$ and $y$ on their own — do not try.)',
    answer: "**7.** Every coefficient is a multiple of $6$, so factor: $6(x+y) = 42$, then divide by $6$. The combination falls out in one move — you never needed $x$ or $y$ alone, and one equation couldn't have given them to you anyway.",
  },
  {
    type: 'checkpointQuestion',
    question: 'You solve a system and find $x = 3$, but the question asks for $4x - 5$. What do you bubble?',
    answer: "**7.** Feed $x = 3$ into what was actually asked: $4(3) - 5 = 7$. Bubbling $3$ is the classic trap — that's the value of $x$, not of $4x - 5$. Re-reading the final clause is what turns correct algebra into a correct answer.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Solve $5(x + 2) = 3x + 16$ for $x$.',
    answer: "**3.** Distribute the $5$ across both terms first: $5x + 10 = 3x + 16$ (not $5x + 2$). Herd the variables and numbers: subtract $3x$ to get $2x + 10 = 16$, then subtract $10$ to get $2x = 6$, so $x = 3$. Check: $5(3 + 2) = 25$ and $3(3) + 16 = 25$. Balanced.",
  },

  {
    type: 'text',
    content: "**The move, every time:** keep both sides balanced, peel from the outside in, treat other letters as frozen numbers when rearranging, and answer the exact object the question asked for.",
  },
];
