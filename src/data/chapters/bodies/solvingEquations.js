/**
 * Learn lesson body — Solving Equations & Rearranging Formulas (Algebra).
 *
 * NEW lean "review / cheat-sheet" style (voice + shape exemplar:
 * bodies/gSubjectVerbAgreement.js): one-sentence lede → short headed sections,
 * one idea each → a few worked examples → check-yourself questions → a one-line
 * takeaway. ~1-2 min read. Gated by bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const solvingEquationsBlocks = [
  {
    type: 'text',
    content: 'An equation is a balance: the two sides weigh the same. So you can solve almost anything with one habit — **do the same move to both whole sides until the thing you want is alone.** The balance only stays true if each move hits both sides equally; touch one side and you have quietly changed the equation into a different one. Keep that picture in mind and even a messy multi-step problem collapses into the same short routine.',
  },

  { type: 'heading', content: 'Solve by undoing, in reverse' },
  {
    type: 'text',
    content: 'To get a variable alone, peel off the operations wrapped around it from the outside in — undo the last thing that was done first. In $2x + 1 = 9$, the $x$ was multiplied by $2$ and *then* had $1$ added, so strip the $+1$ first (subtract from both sides), then the $\\times 2$ (divide both sides): $x = 4$. Order matters because you are reversing how the expression was built — like taking off your shoes before your socks. Go out of order and you end up dividing only part of the expression while the rest tags along, which is exactly where the arithmetic quietly breaks.',
  },
  {
    type: 'keyInsight',
    content: 'Every move hits **both whole sides**, never one term. And close every solve by plugging your answer back in — $2(4)+1 = 9$ checks out, so you know it before you look at the choices.',
  },

  { type: 'heading', content: 'Variables on both sides' },
  {
    type: 'text',
    content: 'If the variable shows up on both sides, first **collect** all the variable terms onto one side and the numbers onto the other, then peel as usual. Collecting has to come first because you cannot isolate a variable while copies of it still sit on both sides fighting each other. If a group is multiplied by something, **distribute to every term first** — the factor must reach all the way inside: $-2(x-5) = -2x + 10$, not $-2x - 5$. Distribution is the step people rush, and dropping the sign on that second term is the single most common slip in the whole process.',
  },

  { type: 'heading', content: 'Rearrange a formula: other letters are just numbers' },
  {
    type: 'text',
    content: 'To solve a formula for one letter, treat every *other* letter as a frozen number and run the same peeling steps. To solve $A = \\tfrac{1}{2}bh$ for $h$: multiply both sides by $2$ to get $2A = bh$, then divide both sides by $b$ to get $h = \\dfrac{2A}{b}$. The letters $A$ and $b$ behave exactly like constants — a letter obeys the same rules a $7$ would, so nothing new is really happening. This is worth drilling because literal equations show up all over the test dressed as science and geometry formulas, and the students who freeze are the ones who convince themselves the letters need special handling.',
  },
  {
    type: 'keyInsight',
    content: 'One-directional rule: a sum in a *numerator* splits ($\\frac{r+s}{t} = \\frac{r}{t} + \\frac{s}{t}$), but a sum in a *denominator* never does — $\\frac{r}{s+t}$ is **not** $\\frac{r}{s} + \\frac{r}{t}$.',
  },

  { type: 'heading', content: 'The combined-total form $Ax + By = C$' },
  {
    type: 'text',
    content: 'When a story prices *two* things and gives their combined total, write it straight down as $Ax + By = C$ — no slope needed. If adult tickets cost $\\$8$, child tickets cost $\\$5$, and a group spends $\\$120$, that is $8a + 5c = 120$. The trap is reaching for $y = mx + b$ out of habit when the situation is really just two costs adding up to a budget, so read it as "price times quantity, plus price times quantity, equals total." Set one variable to $0$ to read an **intercept**, the pure "all of one, none of the other" case: with $a = 0$, $5c = 120$, so $c = 24$ children — and those two intercepts double as quick anchor points to sanity-check any answer.',
  },

  { type: 'heading', content: 'Answer what is asked, not just the variable' },
  {
    type: 'text',
    content: 'Many questions want a *combination* like $x + y$ or $2t$, not a single variable — and often you can grab it in one move without finding each variable. The test writes these on purpose: it rewards the student who pauses to look for the shortcut and quietly punishes the one who grinds. Given $3x + 3y = 21$, do not hunt for $x$ and $y$ separately (you cannot from one equation). Factor: $3(x+y) = 21$, then divide by $3$: $x + y = 7$ — when the coefficients match, factoring pulls the exact combination straight out.',
  },
  {
    type: 'tip',
    content: 'Before you bubble, re-read the last line of the question and say the exact object out loud — "it wants $x+y$," "it wants $2t$." Solving correctly then answering the wrong quantity is the most common careless loss on the whole math section.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'If $\\dfrac{x}{5} + 3 = 8$, what is the value of $x$?',
    steps: [
      { label: 'Peel the outside first', content: 'The $+3$ is the outer layer. Subtract $3$ from both sides: $\\dfrac{x}{5} = 5$.' },
      { label: 'Undo the division', content: 'The $x$ is divided by $5$, so multiply both sides by $5$: $x = 25$.' },
      { label: 'Check', content: '$\\dfrac{25}{5} + 3 = 5 + 3 = 8$. True, so $x = 25$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $4(t - 1) = 2t + 6$ for $t$.',
    steps: [
      { label: 'Distribute across the group', content: 'The $4$ reaches both terms: $4t - 4 = 2t + 6$ (not $4t - 1$).' },
      { label: 'Collect variables and numbers', content: 'Subtract $2t$: $2t - 4 = 6$. Add $4$: $2t = 10$.' },
      { label: 'Peel and check', content: 'Divide by $2$: $t = 5$. Verify: $4(5-1) = 16$ and $2(5)+6 = 16$. Balanced.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Solve $P = 2\\ell + 2w$ for $w$.',
    steps: [
      { label: 'Freeze the other letters', content: 'Treat $P$ and $\\ell$ as numbers. Subtract $2\\ell$ from both sides: $P - 2\\ell = 2w$.' },
      { label: 'Divide to isolate', content: 'Divide both sides by $2$: $w = \\dfrac{P - 2\\ell}{2}$.' },
      { label: 'Spot-check', content: 'Try $P = 20,\\ \\ell = 3$: $w = 7$, and $2(3) + 2(7) = 20$. True.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The formula $F = \\dfrac{9}{5}C + 32$ converts a Celsius temperature to Fahrenheit. Solve for $C$ in terms of $F$.',
    steps: [
      { label: 'Freeze F, peel the outside', content: 'Treat $F$ as a number and undo the $+32$ first: subtract $32$ from both sides to get $F - 32 = \\dfrac{9}{5}C$.' },
      { label: 'Undo the fraction', content: 'The $C$ is multiplied by $\\dfrac{9}{5}$, so multiply both sides by its reciprocal $\\dfrac{5}{9}$: $C = \\dfrac{5}{9}(F - 32)$.' },
      { label: 'Spot-check', content: 'Try $F = 212$: $C = \\dfrac{5}{9}(180) = 100$, the known boiling point. True.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'If $6x + 6y = 42$, what is $x + y$? (You cannot find $x$ and $y$ on their own — do not try.)',
    answer: '**7.** Every coefficient is a multiple of $6$, so factor: $6(x+y) = 42$, then divide by $6$. The combination falls out in one move; the individual values are not recoverable from a single equation, and you never needed them.',
  },
  {
    type: 'checkpointQuestion',
    question: 'You solve a system and find $x = 3$, but the question asks for $4x - 5$. What do you bubble?',
    answer: '**7.** Substitute into the requested expression: $4(3) - 5 = 7$. Bubbling $3$ is the classic trap — that is the value of $x$, not of $4x - 5$. Re-reading the final clause converts correct algebra into a correct answer.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Solve $5(x + 2) = 3x + 16$ for $x$.',
    answer: '**3.** Distribute the $5$ across both terms first: $5x + 10 = 3x + 16$ (not $5x + 2$). Collect the variables and numbers: subtract $3x$ to get $2x + 10 = 16$, then subtract $10$ to get $2x = 6$, so $x = 3$. Check: $5(3 + 2) = 25$ and $3(3) + 16 = 25$. Balanced.',
  },

  {
    type: 'text',
    content: '**The whole skill:** keep both sides balanced, peel from the outside in, treat other letters as numbers when rearranging, and always answer the exact object the question asked for.',
  },
];
