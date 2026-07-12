/**
 * Learn chapter body — Inequalities & Absolute Value (Algebra).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered techniques (technique → right → wrong → why) → Stage 3
 * on-the-test (decision flow, traps, worked examples, checkpoints,
 * one-page summary). Voice reference: bodies/boundaries.js.
 * Concept source: knowledge/graph/math (inequality-direction-logic,
 * compound-inequality-operations, inequality-translation-and-integer-bounds,
 * inequality-regions-and-point-testing, absolute-value-as-distance,
 * number-line-order-and-distance, desmos-decision-framework).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const inequalitiesBlocks = [
  {
    type: 'text',
    content: 'An inequality item looks like an equation with the equals sign swapped for $<$, $\\le$, $>$, or $\\ge$ — solve $-4x + 9 > 21$, find every point $(x, y)$ satisfying a shaded region, or turn "at most 2,200 pounds" into symbols. The good news most students never hear: **the entire topic runs on three mechanical rules and one picture.** The rules: solve like an equation with a single exception, do the same move to every part of a chain, and round leftover decimals toward the side that actually works. The picture: the number line, where absolute value is nothing more than distance. Learn these once and every answer is provable — no guessing at directions, no memorized case tables.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** The number line from zero: what order really means, what a solution *set* is, and absolute value as distance.',
      '**Stage 2 · The techniques.** Six numbered techniques, each in the same shape: the move, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow that routes each item to its technique, the traps the test sets, worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · The number line: order, sets, and distance' },
  {
    type: 'text',
    content: 'Every inequality statement is a claim about **position on the number line**. The line runs left to right, smaller to larger, forever in both directions. That single fact settles what $<$ means: $a < b$ says *a sits to the left of b* — nothing more. It also settles the comparison students miss most: negatives. Since every negative sits left of every positive, and $-9$ sits left of $-2$, the number with the *bigger digits* can be the *smaller number*. Order is position, never digit size.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — compare by position', content: '$-9 < -2$. On the line, $-9$ sits seven units further left, so it is smaller. Reading left-to-right decides every comparison.', variant: 'right' },
      { label: 'Wrong — compare by digit size', content: '"$-9 > -2$ because $9 > 2$." Digit size ranks positives only. Twelve years of positive-number habits push this read, and it converts finished, correct algebra into a missed point at the last line.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'The second foundation: an inequality is not solved by *a number* — it is solved by a **set**. The statement $x > 2$ is satisfied by $2.001$, by $3$, by $47$, by ten million: infinitely many numbers, forming a solid region of the line. So "solve the inequality" means "describe the region," and "is this a solution?" means "does this point sit inside the region?" Holding the answer as a region — not a single value — is what makes every later technique readable.',
  },
  {
    type: 'formula',
    label: 'A solution set is a region, not a number',
    content: '$x > 2$',
    note: 'The graph is a ray: an open circle at $2$ (the boundary itself fails a strict $>$) and everything to its right. A $\\ge$ would fill the circle in — the boundary would count.',
  },
  {
    type: 'text',
    content: 'Third foundation: **absolute value is distance, not "make it positive."** $|x|$ measures how far $x$ sits from zero — a length, so it is never negative and it ignores direction. The payoff comes from one small upgrade: $|x - c|$ measures the distance of $x$ from $c$, because subtracting $c$ slides the center of the measurement from $0$ to $c$. Read $|x - 3| = 5$ as a sentence: *"the distance from $x$ to $3$ is exactly $5$."* Two points qualify — $3 + 5 = 8$ and $3 - 5 = -2$ — and you found both without any case-splitting algebra.',
  },
  {
    type: 'formula',
    label: 'The distance read',
    content: '$|x - c| = \\text{distance from } x \\text{ to } c$',
    note: 'Watch the sign inside: the center is the value that makes the inside zero, so $|x + 3|$ centers at $-3$, not at $3$.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'Which is smaller, $-14$ or $-6$? And separately: how far apart are they?',
    answer: '$-14$ is smaller — it sits further left. The distance between them is $|-14 - (-6)| = 8$. **Why:** order and distance are two different readings of the same line. Order is left-vs-right (so digit size lies about negatives); distance is the gap, always non-negative, the same whichever number you start from.',
  },

  // ── Stage 2 · The techniques ───────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The techniques' },
  {
    type: 'text',
    content: 'Six techniques cover every inequality item. Each follows the same shape: the **move**, a **right** example, a **wrong** example, and the **why**.',
  },

  { type: 'heading', content: 'Technique 1 — Solve like an equation, with one exception' },
  {
    type: 'text',
    content: 'Everything you know about equations transfers: add or subtract anything from both sides, multiply or divide both sides by any *positive* number, and the inequality stays true. The one exception: **multiplying or dividing both sides by a negative number flips the direction of the sign.** The why is geometry, not decree. Multiplying by a negative reflects every number across zero like a mirror — whatever sat rightmost lands leftmost. $3 < 5$ is true, but after multiplying by $-1$, the images are $-3$ and $-5$, and $-3 > -5$. Order reversed, so the sign reverses to keep the statement honest.',
  },
  {
    type: 'formula',
    label: 'The mirror at zero',
    content: '$3 < 5 \\quad\\text{but}\\quad -3 > -5$',
    note: 'The trigger is exactly one thing: multiplying or dividing *both sides* by a *negative*. A negative constant sitting on one side, a subtraction, a negative final answer — none of those flip anything.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — flip at the negative divide', content: '$-4x > 12$. Divide both sides by $-4$ and flip in the same stroke: $x < -3$. Verify with one number: $x = -5$ gives $-4(-5) = 20 > 12$. True — the direction holds.', variant: 'right' },
      { label: 'Wrong — divide and keep the direction', content: '$-4x > 12 \\Rightarrow x > -3$. Test it: $x = 0$ gives $-4(0) = 0 > 12$, which is false. The choice set will offer this reversed interval, and it reads as the "natural" one.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'A pressure-proof alternative: the flip is **optional**. Any solve can be rearranged so no negative scaling ever happens — move the variable term across by *addition* instead. For $-4x > 12$: add $4x$ to both sides to get $0 > 12 + 4x$, subtract $12$ to get $-12 > 4x$, divide by *positive* $4$ to get $-3 > x$ — the same answer, $x < -3$, with the mirror never entering the room. When the stakes feel high, take this route and the flip question disappears. One more spot the flip hides: the endgame $-x < 4$ is a real operation, not cosmetic cleanup. Multiplying by $-1$ gives $x > -4$ — flipped.',
  },

  { type: 'heading', content: 'Technique 2 — Compound chains: one squeeze, three parts' },
  {
    type: 'text',
    content: 'A chain like $2 < 3x - 1 \\le 11$ is a single statement packing two conditions on one quantity: the middle expression sits *above* $2$ AND *at or below* $11$. Picture a sandwich — the middle expression is the filling, the bounds are the bread, and **whatever you do to the filling, you do to both slices.** Every operation hits all three parts at once, layer by layer, until $x$ stands alone in the middle. If a step divides by a negative, *both* signs flip and the chain must be rewritten small-to-large before matching answers.',
  },
  {
    type: 'formula',
    label: 'Strip the middle, mirror on both bounds',
    content: '$2 < 3x - 1 \\le 11 \\;\\Rightarrow\\; 3 < 3x \\le 12 \\;\\Rightarrow\\; 1 < x \\le 4$',
    note: 'Add $1$ to all three parts, then divide all three by $3$. Read the result as two facts: $x$ is more than $1$ AND at most $4$.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — every row hits all three parts', content: '$-6 \\le 2x + 4 < 10$: subtract $4$ everywhere ($-10 \\le 2x < 6$), divide by $2$ everywhere ($-5 \\le x < 3$). Three columns, no empty cells.', variant: 'right' },
      { label: 'Wrong — the operation skips a bound', content: '$-6 \\le 2x + 4 < 10$: subtracting $4$ from the middle and right only gives $-6 \\le 2x < 6$, then $-3 \\le x < 3$. One endpoint is now wrong — and the near-miss interval with exactly one correct endpoint is a standard distractor.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'Orientation is notation, not mathematics: $7 \\ge x \\ge 2$ and $2 \\le x \\le 7$ are the *same statement*. Choice sets exploit this by writing the correct interval backwards next to a genuinely reversed fake — so compare **content** (the two bounds and whether each is strict), never surface order. And after any negative divide across a chain, re-plate the result in ascending order immediately: a big-to-small chain left on the page is where re-reading errors breed. One sanity check catches the worst outcome: a chain like $5 < x < -2$ is *impossible* (nothing sits right of $5$ and left of $-2$), and it appears exactly when only one of the two signs got flipped.',
  },

  { type: 'heading', content: 'Technique 3 — Words to symbols, symbols to whole numbers' },
  {
    type: 'formulaGrid',
    items: [
      { label: 'at least / no less than', formula: '$\\ge$', note: 'The boundary itself counts.' },
      { label: 'at most / no more than', formula: '$\\le$', note: 'The boundary itself counts.' },
      { label: 'more than / exceeds', formula: '$>$', note: 'Strict — the boundary fails.' },
      { label: 'less than / fewer than', formula: '$<$', note: 'Strict — the boundary fails.' },
    ],
  },
  {
    type: 'text',
    content: 'Translating a word constraint adds exactly two decisions on top of ordinary expression-building: **which direction**, and **does the boundary itself count**. Circle the threshold phrase before writing anything, and translate it as a pair — "at least 50" is ($\\ge$, boundary counts); "more than 50" is ($>$, boundary excluded). The adjudicating question is concrete: *does 50 itself pass?* A useful sort for multi-constraint stories: resources are **ceilings** — money, hours, seats take $\\le$ — while quotas and goals are **floors** taking $\\ge$. Direction comes from the logic of the phrase, never from the verb of the sentence ("earn" does not mean $\\ge$; "at most" does mean $\\le$).',
  },
  {
    type: 'text',
    content: 'The second half of the technique fires *after* the algebra. When the quantity is discrete — buses, tickets, crates — the algebraic boundary is usually not the answer. A minimum of $x \\ge 14.2$ means $14$ fails and $15$ is the first value that works: **round toward the feasible side**, up for minimums, down for maximums. School rounding (nearest integer) is the planted error. The cheap proof is the neighbor check: plug the chosen integer and its rejected neighbor into the *original* condition — exactly one should pass.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — round toward feasibility', content: 'A maximum works out to $x \\le 16.7$. Round *down*: the answer is $16$, because $17$ breaks the original constraint. Check the neighbor: $17$ fails, $16$ passes.', variant: 'right' },
      { label: 'Wrong — round to the nearest integer', content: '$x \\le 16.7$ "rounds to $17$." But $17 > 16.7$, so $17$ violates the very condition just solved. The infeasible neighbor is always offered as a choice.', variant: 'wrong' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'Tara needs to earn **at least** 300 dollars, and she earns 12 dollars per hour. Write the constraint. Does working exactly 25 hours satisfy it?',
    answer: '$12h \\ge 300$, and yes — $12(25) = 300$, and "at least" is $\\ge$, so the boundary itself counts. **Why:** "at least" versus "more than" is a membership decision, not a synonym choice. Under "more than 300," the same 25 hours would fail, because a strict $>$ rejects the boundary value. Adjudicate the boundary number itself and the sign writes itself.',
  },

  { type: 'heading', content: 'Technique 4 — Absolute value: equations and inequalities as distance' },
  {
    type: 'text',
    content: 'Every absolute-value form is one sentence about distance. $|x - c| = r$ asks: *which points sit exactly $r$ away from $c$?* Two points — $c - r$ and $c + r$. Draw the center, step off $r$ in both directions, done. The inequalities follow from the same picture with no new rules to memorize: *within* $r$ of the center is the solid band between the two points; *beyond* $r$ is everything outside — two rays running off in opposite directions.',
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Exactly $r$ away — two points', formula: '$|x - c| = r \\;\\Rightarrow\\; x = c - r \\text{ or } x = c + r$', note: 'If $r < 0$: no solutions. Distance is never negative.' },
      { label: 'Within $r$ — one band ("and")', formula: '$|x - c| < r \\;\\Rightarrow\\; c - r < x < c + r$', note: 'A single interval between the two boundary points — a chain, handled by Technique 2.' },
      { label: 'Beyond $r$ — two rays ("or")', formula: '$|x - c| > r \\;\\Rightarrow\\; x < c - r \\text{ or } x > c + r$', note: 'Everything outside the band. Two separate pieces, never one interval.' },
    ],
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — beyond means rays', content: '$|x - 3| > 5$: the points farther than $5$ from center $3$. Band edges at $-2$ and $8$, so the answer is $x < -2$ or $x > 8$ — two rays.', variant: 'right' },
      { label: 'Wrong — beyond written as a band', content: '$|x - 3| > 5 \\Rightarrow -2 < x < 8$. That interval is the set of points *within* $5$ of the center — the exact opposite region. Test one number: $x = 0$ gives $|0-3| = 3 > 5$, false, yet $0$ sits inside the claimed band.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'When the inside is messy — a coefficient on $x$, a longer expression — fall back to the **two-branch rewrite**, which is the same picture in algebra: $|A| = r$ becomes $A = r$ or $A = -r$; $|A| > r$ becomes $A > r$ or $A < -r$; $|A| < r$ becomes the chain $-r < A < r$. Note where the flip from Technique 1 hides: the second branch of $|A| > r$ carries a *reversed* sign, and dropping that reversal is a signature hard-item miss. One flag before any branching: $|x - 6| = -2$ has **no solutions** — no case work, no algebra. A distance cannot be negative, and the item is testing whether you notice.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'Without any case-splitting: how many solutions does $|x - 6| = -2$ have? And what shape is the solution set of $|x - 6| \\le 2$?',
    answer: 'Zero solutions for the equation, and a single closed band — $4 \\le x \\le 8$ — for the inequality. **Why:** $|x - 6|$ is a distance, and no point sits a negative distance from $6$, so the equation fails on sight. The inequality asks for points within $2$ of center $6$: step off $2$ both ways and keep the boundary, since $\\le$ is inclusive.',
  },

  { type: 'heading', content: 'Technique 5 — Two variables: half-planes and point testing' },
  {
    type: 'text',
    content: 'A two-variable inequality like $y \\le 2x + 1$ is solved by a **half-plane**: a boundary line plus everything on one side of it. Three attributes describe it completely, checked in order. **Boundary** — the line you get by replacing the sign with $=$. **Side** — isolate $y$; with $y$ alone and positive, $\\ge$ shades *above* the line and $\\le$ shades *below*. (If isolating $y$ required dividing by a negative, the sign flipped, and the side flipped with it — the birthplace of shading errors.) **Membership** — a strict sign draws the boundary *dashed* (points on the line fail); an inclusive sign draws it *solid* (points on the line count). Line style is meaning, not decoration.',
  },
  {
    type: 'text',
    content: 'When you distrust the side — or want to skip the rearranging entirely — run the **point test**: substitute one easy point and see whether it satisfies the inequality. The origin $(0, 0)$ is the classic pick when it is off the boundary, because the arithmetic is instant. For a *system* of inequalities, the solution region is where all the half-planes **overlap**, and a point is a solution only if it passes *every* gate — distractor points are placed to pass the first inequality and fail the second, punishing anyone who stops checking early. Two more high-value facts: a point sitting on a *dashed* boundary fails that inequality even if it sits inside every other region; and when an item asks for the greatest or least possible $x$ or $y$ over a system, the extreme lives at the **corner of the overlap — where the two boundary lines cross**. Replace both signs with $=$, solve the little system, read off the asked coordinate.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — decide the side with a test point', content: 'For $3x - y > 2$: test $(0, 0)$. $3(0) - 0 = 0 > 2$ is false, so the origin’s side is *not* shaded — shade the other side. No rearranging, no flip hazard.', variant: 'right' },
      { label: 'Wrong — read the side off the standard form', content: '"$3x - y > 2$ has a $>$, so shade above the line." The $\\ge$-means-above rule only applies after $y$ is isolated with a positive coefficient; here, isolating $y$ divides by $-1$ and lands on $y < 3x - 2$ — shade *below*. The same-boundary-opposite-shading graph is the planted twin.', variant: 'wrong' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'A candidate point lies exactly on the boundary line of $y < 2x + 1$ and comfortably satisfies the other inequality in the system. Is it a solution to the system?',
    answer: 'No. **Why:** on the boundary, the two sides are *equal*, and a strict $<$ rejects equality — the dashed line marks points that do not belong. Passing the other inequality is irrelevant: a system solution shows its ticket at every gate, and this point already failed one.',
  },

  { type: 'heading', content: 'Technique 6 — The Desmos route' },
  {
    type: 'text',
    content: 'The built-in Desmos calculator shades inequality regions **natively**. Type $y \\ge 2x - 3$ and the half-plane appears; type each inequality of a system verbatim — no isolating $y$, no flip hazard, standard form accepted as-is — and the overlap shows as the darkest region. Add candidate points as coordinate pairs and read which dot sits inside. This is the highest-leverage graphing territory on the exam: region matching, point-in-system, and corner-of-the-wedge items all become read-the-picture. Where hands still win: a one-variable solve is three short lines of algebra (typing costs more than solving), translation items have nothing to graph, and **strictness stays your call** — the dashed-versus-solid rendering is subtle, so boundary-membership decisions come from reading the sign, not the pixels.',
  },
  {
    type: 'tip',
    content: 'The routing rule in one line: regions, overlaps, ugly coefficients, or many candidate points → type it into Desmos verbatim and read the shading. One variable and clean numbers → solve by hand. Any negative divide or a gridded answer → hand-solve, then spend ten seconds confirming the interval in Desmos or with a test value.',
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'Before solving, read the four choices as a set — they tell you what is being tested. Two choices that are the same interval with the directions swapped mean the item is hunting the flip (Technique 1). Choices differing only in $>$ versus $\\ge$ mean the boundary-membership decision is the whole question (Technique 3). A band offered next to the matching pair of rays means the two absolute-value shapes are being confused on purpose (Technique 4). Two identical graphs differing only in dashed-versus-solid mean membership again (Technique 5). The choice set is the label.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Classify the item: one variable, a three-part chain, a word constraint, an absolute value, or two variables with a graph or region.',
      'One variable → solve like an equation (Technique 1). At each step ask exactly one question: did I just multiply or divide both sides by a negative? Yes → flip now, deliberately. Unsure → take the addition route and never scale by a negative.',
      'A chain → operate on all three parts at once (Technique 2); after any negative divide, flip both signs and rewrite ascending.',
      'Words → circle the threshold phrase, translate as (direction, boundary counts?) (Technique 3). Discrete quantity → finish with feasibility rounding and the neighbor check.',
      'Absolute value → find the center (the value zeroing the inside), step off the radius: equals gives two points, *within* gives a band, *beyond* gives two rays (Technique 4).',
      'Two variables, regions, or candidate points → boundary, side, membership in that order (Technique 5) — or paste everything into Desmos verbatim and read the overlap (Technique 6).',
      'Before submitting: test one number from your answer region in the *original* inequality, and one from outside it. Both verdicts should agree with your interval.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**Ten seconds of test-plugging beats every direction trap on the page.** The reversed interval, the single-flipped chain, the band-for-rays swap, the wrong-side shading — every one of them is exposed by substituting a single concrete number into the original statement. A student who verifies one point per item is immune to the entire direction-swap distractor family; a student who trusts the algebra’s last line is exactly who those choices were built for.',
  },
  {
    type: 'trapCard',
    title: 'The unflipped sign',
    wrong: '**The unflipped sign.** The item plants a negative leading coefficient — $-5x + 3 \\le 18$ — and the twelve-year equation habit carries you through the divide by $-5$ without a flip. The reversed interval, $x \\le -3$, sits right there in the choices looking like a finished answer.',
    correction: 'Name the exact trigger before it fires: only multiplying or dividing *both sides* by a *negative* flips anything. At every scaling step, ask that one question, then flip in the same stroke as the divide. Under pressure, remove the hazard entirely — move the variable term across by addition so all scaling stays positive — and close with a test value: one number from your interval into the original inequality settles the direction beyond argument.',
  },
  {
    type: 'trapCard',
    title: 'The digit-size comparison',
    wrong: '**The digit-size comparison.** Every algebraic step is right, and the last move is comparing two negatives — is the answer $x < -9$ or $x < -2$? The digit habit whispers that $-9$ is "bigger," the boundary lands on the wrong number, and a solved item scores zero at the final line.',
    correction: 'Order is position: place both numbers on the line and read left-to-right, out loud if needed — "$-9$ sits left of $-2$, so $-9$ is smaller." The trap fires at the *end* of correct work, so give the final comparison its own beat instead of treating it as cleanup. Anything involving negatives gets the number-line read, never the digit read.',
  },
  {
    type: 'trapCard',
    title: 'The bare-positive absolute value',
    wrong: '**The bare-positive absolute value.** Solving $|x - 4| = 9$ by "dropping the bars" produces $x - 4 = 9$, so $x = 13$ — one clean answer, confidently gridded. The mislearning "absolute value makes it positive" hides the entire second solution, and the omitted value is a listed choice on multiple-choice versions.',
    correction: 'Read it as distance: which points sit exactly $9$ from center $4$? Step off both directions — $4 + 9 = 13$ *and* $4 - 9 = -5$ — and demand both before any algebra. An absolute-value *equation* with a positive right side always has two solutions; producing only one means a direction went missing. The same picture guards the inequalities: *within* is one band, *beyond* is two rays, and a lone ray or lone point is a red flag.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Which of the following represents all solutions of $-4x + 9 > 21$?\n\n(A) $x > -3$\n(B) $x < -3$\n(C) $x > 3$\n(D) $x < 3$',
    steps: [
      { label: 'Peel like an equation', content: 'Subtract $9$ from both sides: $-4x > 12$. Adding and subtracting never touch the direction.' },
      { label: 'Divide — and name the trigger', content: 'Dividing both sides by $-4$ is negative scaling, the one flip trigger. Divide and flip in the same stroke: $x < -3$.' },
      { label: 'Verify with one number', content: 'Pick $x = -5$ (inside the claimed set): $-4(-5) + 9 = 29 > 21$. True. Pick $x = 0$ (outside): $9 > 21$ is false. Both verdicts agree with $x < -3$.' },
      { label: 'Answer', content: '**(B)**. Choice (A) is the unflipped-sign trap — the same boundary with the direction reversed.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A freight elevator can carry at most 2,200 pounds. An operator who weighs 160 pounds will ride along with $c$ crates, each weighing 55 pounds. What is the greatest number of crates the elevator can carry on one trip?',
    steps: [
      { label: 'Circle the threshold phrase', content: '"At most 2,200" translates as $\\le 2200$ — a resource ceiling, boundary included (Technique 3).' },
      { label: 'Build the constraint', content: 'Total weight is crates plus operator: $55c + 160 \\le 2200$.' },
      { label: 'Solve with equation moves', content: 'Subtract $160$: $55c \\le 2040$. Divide by positive $55$ (no flip): $c \\le 37.09...$' },
      { label: 'Round toward the feasible side', content: 'Crates are discrete, and this is a maximum — round *down* to $37$. Neighbor check: $55(38) + 160 = 2250 > 2200$ fails; $55(37) + 160 = 2195 \\le 2200$ passes.' },
      { label: 'Answer', content: '**37**. The nearest-integer round to $38$ is the planted infeasible neighbor.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'In the $xy$-plane, the point $(x, y)$ is a solution to the system of inequalities below. What is the greatest possible value of $y$?\n\n$$y \\le -2x + 14$$\n$$y \\le 3x - 1$$',
    steps: [
      { label: 'Picture the region', content: 'Each inequality shades *below* its boundary line ($y$ is already isolated with a positive coefficient). The overlap is a wedge that rises to a single highest point — the corner where the two boundaries cross (Technique 5).' },
      { label: 'Find the corner', content: 'Replace both signs with $=$ and solve: $-2x + 14 = 3x - 1$ gives $15 = 5x$, so $x = 3$, and $y = -2(3) + 14 = 8$.' },
      { label: 'Check membership at the corner', content: 'Both signs are $\\le$ — solid boundaries — so the corner point $(3, 8)$ itself belongs to the region. (With a strict sign on either line, $y$ could approach $8$ but never reach it.)' },
      { label: 'Confirm in Desmos', content: 'Typing both inequalities verbatim shades the wedge; the darkest region visibly peaks at $(3, 8)$. Ten seconds, and the algebra is confirmed by the picture (Technique 6).' },
      { label: 'Answer', content: '**8**. Testing a nearby point seals it: $y = 8.5$ would require $x$ to satisfy both $8.5 \\le -2x + 14$ (so $x \\le 2.75$) and $8.5 \\le 3x - 1$ (so $x \\ge 3.16...$) — impossible.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'You solve a chain and reach $6 \\ge x > 1$. One choice reads $1 < x \\le 6$; another reads $6 > x \\ge 1$. Which matches, and what is the fastest safe way to tell?',
    answer: '$1 < x \\le 6$ matches. **Why:** orientation is notation, not content — compare the two bounds and the strictness at each one. Your result says $x$ is at most $6$ (inclusive) and more than $1$ (strict); so does $1 < x \\le 6$. The other choice quietly swaps which end is strict, which is the actual difference to check. Reading chains as two separate facts, not left-to-right prose, makes the swap visible.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Technique', 'Situation', 'The move'],
    rows: [
      ['T1', 'One-variable inequality', 'Solve like an equation; flip the sign only when multiplying or dividing both sides by a negative — or avoid the flip entirely by moving the variable term across with addition'],
      ['T2', 'Three-part chain', 'Every operation hits all three parts; a negative divide flips both signs; rewrite ascending and compare bounds by content, not orientation'],
      ['T3', 'Word constraints and integer answers', 'at least / no less than $\\to \\ge$; at most / no more than $\\to \\le$; more than $\\to >$; fewer than $\\to <$. Discrete quantities round toward the feasible side — up for minimums, down for maximums — then neighbor-check'],
      ['T4', 'Absolute value', '$|x - c|$ is distance from $c$: $= r$ gives the two points $c \\pm r$; $< r$ gives the band between them; $> r$ gives the two rays outside; negative $r$ gives no solutions'],
      ['T5', 'Two variables / regions / candidate points', 'Boundary, side, membership — in that order. Test an easy point to pick the side; dashed (strict) boundaries reject their own points; a system solution passes every gate; extremes live at the boundary intersection'],
      ['T6', 'Anything regional or ugly', 'Type it into Desmos verbatim — no rearranging — and read the shaded overlap; keep strictness calls for your own eyes'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: read every statement as a region of the number line (or a region of the plane), solve with equation moves plus the one flip rule, translate boundary words as direction-plus-membership, see absolute value as distance from a center, and verify the survivor by plugging in one concrete number. Three rules, one picture, no guessing.',
  },
];
