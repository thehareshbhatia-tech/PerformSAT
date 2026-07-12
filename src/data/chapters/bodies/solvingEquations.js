/**
 * Learn chapter body — Solving Equations & Rearranging Formulas (Algebra).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered techniques (method → right → wrong → why) → Stage 3
 * on-the-test (decision flow, traps, worked examples, checkpoints,
 * one-page summary). Voice reference: bodies/inequalities.js and
 * bodies/ratiosProportions.js. Teaches the MECHANICS of solving that the
 * Linear Equations chapter (lines/slope/intercepts) assumes but never shows.
 * Concept source: knowledge/graph/math (linear-equation-balance-peeling,
 * formula-rearrangement, standard-form-combined-total,
 * solve-for-the-asked-quantity, coordinate-plane-literacy).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const solvingEquationsBlocks = [
  {
    type: 'text',
    content: 'A solving item hands you an equation — $\\tfrac{3x}{4} + 5 = 17$, a formula to rearrange, a two-price story to model, or a stem that quietly asks for $x + y$ instead of $x$ — and wants one value back. Students who feel shaky here are almost never bad at arithmetic; they are unsure *which move is legal* and *what the question actually asked for*. The whole topic runs on one principle and four decisions. The principle: an equation is a balance, so any move done to **both whole sides** keeps it true. The decisions: undo operations from the outside in, treat other letters as frozen numbers, read a two-rate total as $Ax + By = C$, and answer the exact object requested — not the variable your school reflex reaches for. Learn these and every answer becomes provable, verifiable by substituting one number back in.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** What an equation and its solution really are, the balance principle behind every legal move, and a short tour of the coordinate plane so nothing later is assumed — points, quadrants, and what an intercept is.',
      '**Stage 2 · The techniques.** Five numbered techniques, each in the same shape: the move, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow that routes each item to its technique, the traps the test sets, worked examples, checkpoints, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · What solving means, and the plane it lives on' },
  {
    type: 'text',
    content: 'An **equation** asserts that two expressions name the *same value*: $2x + 1 = 9$ claims the left pile and the right pile weigh exactly the same. A **solution** is any number that makes the claim true — here, $x = 4$, because $2(4) + 1 = 9$. "Solve the equation" means "find every value that keeps the balance level." That framing licenses every move you will ever make: because the two sides are equal, doing the *same* thing to *both entire sides* — add, subtract, multiply, divide — leaves them equal. Break that symmetry (touch one side only, or one term only) and the balance tips into a false statement.',
  },
  {
    type: 'formula',
    label: 'The balance principle',
    content: '$\\text{if } A = B, \\text{ then } A + c = B + c \\text{ and } A \\cdot c = B \\cdot c$',
    note: 'The move must hit both *whole* sides, not a single term. This one rule is the license behind peeling, rearranging, and every technique below.',
  },
  {
    type: 'text',
    content: 'The second foundation is the stage every graph lives on: the **coordinate plane**. Two number lines cross at the **origin** $(0, 0)$ — the horizontal $x$-axis and the vertical $y$-axis. A point is an **ordered pair** $(x, y)$: read the address first (how far left or right), then the altitude (how far up or down). Right and up are positive; left and down are negative. The two axes cut the plane into four **quadrants**, numbered counterclockwise from the top right, and a point\'s quadrant is fixed entirely by the sign pair of its coordinates: $(+, +)$ top right, $(-, +)$ top left, $(-, -)$ bottom left, $(+, -)$ bottom right.',
  },
  {
    type: 'diagramRef',
    visualType: 'coordinate-plane',
    description: 'A standard xy-plane: horizontal x-axis and vertical y-axis crossing at the origin (0,0), the four quadrants labeled counterclockwise from the top-right, and the point (3, -2) plotted three units right and two units down to show address-then-altitude reading.',
  },
  {
    type: 'text',
    content: 'The single most useful points on any line are its **intercepts** — the places it crosses an axis — because at each one a coordinate is forced to zero, which kills a term and makes the arithmetic trivial. The **$x$-intercept** is where the line meets the $x$-axis, so $y = 0$ there; the **$y$-intercept** is where it meets the $y$-axis, so $x = 0$ there. Read that as a procedure, not a fact to memorize: to find where a graph crosses the $x$-axis, set $y = 0$ and solve; to find where it crosses the $y$-axis, set $x = 0$ and solve. The order of the coordinates is not decoration — reading $(3, -2)$ as "up 3, left 2" reflects the point across the diagonal and quietly corrupts everything built on top of it.',
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'A point is an ordered pair', formula: '$(x, y)$', note: 'Address first (left/right), altitude second (up/down). Never $(y, x)$.' },
      { label: 'The x-intercept', formula: '$y = 0$', note: 'Where the graph crosses the horizontal axis. Set $y=0$ and solve for $x$.' },
      { label: 'The y-intercept', formula: '$x = 0$', note: 'Where the graph crosses the vertical axis. Set $x=0$ and solve for $y$.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'A line crosses the vertical axis at the point where its graph shows the value $7$. Is its $y$-intercept $7$ or $(0, 7)$ — and why is "the $x$-intercept is $7$" a different claim entirely?',
    answer: 'The $y$-intercept is the point $(0, 7)$; naming just the number $7$ is fine as long as you know it sits on the $y$-axis, so $x = 0$ there. **Why:** an intercept is a point with one coordinate forced to zero. "$x$-intercept is $7$" would mean the *horizontal* crossing at $(7, 0)$, where $y = 0$ — a completely different location. The trap is answering with the right number attached to the wrong axis, so always name which coordinate the zero belongs to.',
  },

  // ── Stage 2 · The techniques ───────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The techniques' },
  {
    type: 'text',
    content: 'Five techniques cover every solving and rearranging item. Each follows the same shape: the **move**, a **right** example, a **wrong** example, and the **why**.',
  },

  { type: 'heading', content: 'Technique 1 — Peel the onion: undo operations from the outside in' },
  {
    type: 'text',
    content: 'To isolate a variable, undo the operations bound to it in **reverse order** — outermost first. Think of the operations as layers wrapped around $x$: whatever was done *last* to build the expression is peeled *first*. In $2x + 1 = 9$, the variable was multiplied by $2$ (inner layer) and then had $1$ added (outer layer), so you strip the $+1$ before the $\\times 2$: subtract $1$ from both sides, then divide both sides by $2$. Three inverse pairs do all the work — add undoes subtract, multiply undoes divide, and each move lands on **both whole sides**. If the equation carries fractions, clear them in one stroke by multiplying every term on both sides by the denominator; a fraction problem becomes an integer problem instantly.',
  },
  {
    type: 'formula',
    label: 'Peel order: outermost operation first',
    content: '$2x + 1 = 9 \\;\\Rightarrow\\; 2x = 8 \\;\\Rightarrow\\; x = 4$',
    note: 'Subtract the outer $+1$, then divide by the inner coefficient $2$. Verify by substituting: $2(4) + 1 = 9$. A back-substitution check catches almost every slip for free.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — peel outside-in, both sides', content: 'Solve $\\frac{x}{3} - 4 = 2$. Add $4$ to both sides: $\\frac{x}{3} = 6$. Multiply both sides by $3$: $x = 18$. Check: $\\frac{18}{3} - 4 = 2$. True.', variant: 'right' },
      { label: 'Wrong — undo in build order', content: 'Multiplying by $3$ first, before clearing the $-4$: "$x - 4 = 6$, so $x = 10$." The $\\times 3$ never reached the $-4$ term, because the move touched only part of the side. The near-miss $10$ is exactly the planted distractor.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'The most common failure is not the order — it is applying a move to *part* of a side instead of the whole side. Multiplying "both sides" by $3$ means every term gets the $3$, including the constant. When the equation has several terms, the safe habit is: clear fractions across all terms first, then collect, then peel. And always close with the cheapest insurance in all of algebra — **substitute your answer back into the original equation.** If the two sides do not match, you know there is an error before you ever look at the choices.',
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'To solve $\\frac{2x + 6}{4} = 5$, a student\'s first instinct is to subtract $6$. What is the cleaner first move, and what is the whole solve?',
    answer: 'Multiply both sides by $4$ first: $2x + 6 = 20$, then subtract $6$ ($2x = 14$) and divide by $2$ ($x = 7$). **Why:** the entire left side is divided by $4$, so the outermost operation wrapping the variable is that division — peel it first. Subtracting $6$ before clearing the $\\div 4$ tries to strip an inner layer through the fraction bar, which is where sign and grouping errors breed. Check: $\\frac{2(7)+6}{4} = \\frac{20}{4} = 5$. True.',
  },

  { type: 'heading', content: 'Technique 2 — Variables on both sides: distribute, then collect' },
  {
    type: 'text',
    content: 'When the variable appears on *both* sides — or inside parentheses — two moves precede the peeling. First **distribute** any factor sitting against a group: $3(x - 2)$ becomes $3x - 6$, and the factor must reach *every* term inside, signs included. Second **collect** the variable terms onto one side and the constants onto the other, using balance moves. Gather the variables toward whichever side keeps the leading coefficient positive — the answer is identical either way, but you dodge a sign error. Once the variable lives in a single term on a single side, you are back to Technique 1: peel and divide.',
  },
  {
    type: 'formula',
    label: 'Distribute reaches every term',
    content: '$-2(x - 5) = -2x + 10$',
    note: 'Carry the $-2$ to both the $x$ and the $-5$; two negatives make the $+10$. Distributing to only the first term — the "$-2x - 5$" slip — is the single most common distribution error.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — distribute fully, then collect', content: 'Solve $3(x - 2) = x + 4$. Distribute: $3x - 6 = x + 4$. Collect variables left, constants right: $2x = 10$, so $x = 5$. Check: $3(5-2) = 9$ and $5 + 4 = 9$. Balanced.', variant: 'right' },
      { label: 'Wrong — distribute to the first term only', content: '$3(x - 2) = x + 4$ read as "$3x - 2 = x + 4$." The $3$ never multiplied the $-2$, so the constant is off by $4$, landing on $x = 3$ — a value that fails the check ($3(3-2) = 3 \\ne 7$) yet sits in the choices.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'Two special results are worth recognizing on sight, because the test uses them as "how many solutions?" items. If collecting makes the variable vanish and leaves a **true** statement like $5 = 5$, *every* number works — infinitely many solutions (the two sides were the same line). If it leaves a **false** statement like $5 = 8$, *no* number works — no solution (parallel lines that never meet). These are not errors; the disappearing variable is the answer. And do not declare a many-letter equation unsolvable before simplifying — the exam writes equations where most of the clutter cancels once you distribute and collect.',
  },

  { type: 'heading', content: 'Technique 3 — Rearrange a formula: every other letter is just a number' },
  {
    type: 'text',
    content: 'A literal-equation item gives a formula relating several quantities and asks you to solve for *one chosen letter* in terms of the rest. Nothing evaluates to a number, which is exactly why it feels foreign — but the mechanics are identical to Technique 1. The key reframe: **freeze every non-target letter into a gray blob and treat it as a known number.** Then run the same pipeline: expand any products, move every term containing the target to one side and everything else to the other, and if the target sits in more than one term, factor it out and divide by its cofactor. If the target lives in just one term, it degenerates to ordinary peeling with letters standing in for numbers.',
  },
  {
    type: 'formula',
    label: 'Solve $A = \\tfrac{1}{2}bh$ for $h$ — treat $A$ and $b$ as numbers',
    content: '$A = \\tfrac{1}{2}bh \\;\\Rightarrow\\; 2A = bh \\;\\Rightarrow\\; h = \\dfrac{2A}{b}$',
    note: 'Multiply both sides by $2$, then divide both sides by $b$. Every move is a Technique-1 peel; the letters $A$ and $b$ behave exactly like frozen constants.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — isolate the target letter cleanly', content: 'Solve $P = 2\\ell + 2w$ for $w$. Subtract $2\\ell$ from both sides: $P - 2\\ell = 2w$. Divide both sides by $2$: $w = \\frac{P - 2\\ell}{2}$. Spot-check with numbers ($P=20, \\ell=3$): $w = 7$, and $2(3)+2(7)=20$. True.', variant: 'right' },
      { label: 'Wrong — split a sum in the denominator', content: 'Solving $q = \\frac{r}{s + t}$ for $s$ by writing "$\\frac{r}{q} = s + t$, so $s = \\frac{r}{q} - t$" is correct — but the trap version splits $\\frac{r}{s+t}$ into $\\frac{r}{s} + \\frac{r}{t}$ mid-solve. A sum in a numerator splits; a sum in a denominator never does. The distributed-denominator choice is the planted twin.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'When your rearranged answer matches none of the choices, do not assume you erred — the choices are usually one cosmetic step apart. Try multiplying through by $-1$, or check whether a choice is your result with a single fraction left unsplit. The reliable tiebreaker between two candidate forms is **number substitution**: invent small values for every letter, evaluate the original formula, then test which choice reproduces the target\'s value. It is faster and safer than staring at symbols, and it is the one place a calculator earns its keep here — the answers are symbolic, so there is nothing to graph.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'Solve $y = mx + b$ for $x$. What is the target, what freezes, and what is the result?',
    answer: 'The target is $x$; $y$, $m$, and $b$ all freeze into known numbers. Subtract $b$ from both sides: $y - b = mx$. Divide both sides by $m$: $x = \\frac{y - b}{m}$. **Why:** with everything but $x$ treated as a constant, the formula is a two-step linear equation wearing letters — peel the $+b$, then the $\\times m$. Spot-check ($m=2, b=1, y=9$): $x = 4$, and $2(4)+1 = 9$. True.',
  },

  { type: 'heading', content: 'Technique 4 — Standard form $Ax + By = C$: the combined-total model' },
  {
    type: 'text',
    content: 'When a story prices *two* quantities and gives their *combined total*, the natural model is **standard form** $Ax + By = C$, not slope-intercept. Read it as a budget spent two ways: $A$ is the rate for the $x$-quantity, $B$ the rate for the $y$-quantity, and $C$ the fixed total they must add up to. Transcribe straight from the sentence — $(\\text{rate}_1)(\\text{count}_1) + (\\text{rate}_2)(\\text{count}_2) = \\text{total}$ — no slope, no rearranging. The line\'s points are exactly the feasible combinations, and because $C$ is fixed, more of one quantity forces less of the other.',
  },
  {
    type: 'formula',
    label: 'Intercepts are the pure cases — read them straight off',
    content: '$Ax + By = C:\\quad x\\text{-int} = \\tfrac{C}{A}\\;\\; (y=0), \\qquad y\\text{-int} = \\tfrac{C}{B}\\;\\; (x=0)$',
    note: 'Set the other variable to zero and one term vanishes. Each intercept is a *count* — "all of one quantity, none of the other" — never a rate and never the total.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — transcribe directly to standard form', content: 'Adult tickets cost $\\$8$, child tickets $\\$5$, and a group spends $\\$120$. Model it as $8a + 5c = 120$ — done, no slope needed. The $c$-intercept ($a=0$) is $\\frac{120}{5} = 24$ children if no adults come.', variant: 'right' },
      { label: 'Wrong — force it into $y = mx + b$', content: 'Rearranging to $c = \\frac{120 - 8a}{5}$ before doing anything invites fraction errors and scrambles which quantity is which. Standard form already answers most asks — feasibility, intercepts, totals — so convert only when the question explicitly wants a slope.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'Two facts make this model powerful. First, **every point on the line pays the same total**: substitute any feasible combination and it yields the same $C$, which both recovers an unknown total from one known combination and verifies your work. Second, to test whether a specific combination is possible, just substitute it — if the equation (or its "$\\le$" budget version) holds, the combination is feasible. Watch the interpretation trap: an intercept is a *count* of one quantity, not a price and not the budget. When a question asks what a coefficient or intercept "means," anchor it in units — every additive term carries the total\'s units, so a coefficient is total-units per count-unit.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'A vending stock equation is $2p + 3s = 60$, where $p$ is packs of chips and $s$ is sodas. What does the $p$-intercept equal, and what does it *mean*?',
    answer: 'The $p$-intercept sets $s = 0$: $2p = 60$, so $p = 30$. It means **30 packs of chips and no sodas** — the pure "all chips" case that still hits the total of $60$. **Why:** an intercept forces the other quantity to zero, so it names a *count* under a one-quantity scenario, not a rate ($2$) or the total ($60$). Reading it as "the price" or "the budget" is the standard interpretation distractor.',
  },

  { type: 'heading', content: 'Technique 5 — Solve for what is asked, not for the variable' },
  {
    type: 'text',
    content: 'Many items ask for the value of a *combination* — a sum like $x + y$, a scaled variable like $6p$, a chunk like $(a - b)$ — rather than any single variable. Often the individual variables are deliberately **unrecoverable** (one equation, two unknowns), so extracting them is impossible and unnecessary. The move: put the requested expression in a mental box and ask what single transformation of the *entire* equation makes that box appear alone. Scan the coefficients first — if the target\'s coefficients are a uniform multiple of the equation\'s, one factor-out-and-divide finishes it. The box never gets dismantled; dismantling it is the trap.',
  },
  {
    type: 'formula',
    label: 'Ride the whole equation to the target',
    content: '$3x + 3y = 21 \\;\\Rightarrow\\; 3(x + y) = 21 \\;\\Rightarrow\\; x + y = 7$',
    note: 'The stem asks for $x + y$, not $x$ or $y$ separately — which are individually unknowable here. Factor the $3$ out of the whole left side and divide once; the combination falls straight out.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — isolate the whole combination', content: 'Given $5a + 5b = 40$, find $a + b$. Divide the entire equation by $5$: $a + b = 8$. One move, no attempt to find $a$ and $b$ separately (which the single equation cannot pin down).', variant: 'right' },
      { label: 'Wrong — solve for a variable, then bubble it', content: 'Chasing individual values, guessing $a = 8, b = 0$, and answering "$8$" for $a$ — when $a + b$ was asked — happens to match here by luck but fails the instant the numbers differ. Worse is solving a solvable system for $x$ and bubbling $x$ when $2x+1$ was requested; $x$\'s value is always seeded in the choices.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'The reading discipline is the whole skill: read the question\'s *final clause* before solving, and name the exact object requested. If the target is a flipped ratio (given $\\frac{a}{b}$, asked $\\frac{b}{a}$), reciprocate both sides. Only when no whole-equation transformation lands the target should you solve for individuals and assemble — and first confirm the individuals are even recoverable by counting equations against unknowns. A linear item that looks impossible is usually a combination item in disguise, asking for exactly the piece that *is* determined.',
  },
  {
    type: 'tip',
    content: 'Before you bubble anything, re-read the last line of the stem and say the requested object out loud — "it wants $x + y$," "it wants $2t$," "it wants the ratio." This one-second ritual defeats the most common careless loss on the whole math section: solving correctly, then answering the wrong quantity.',
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'Read the four choices as a set before solving — they tell you what is being tested. Symbolic answer choices that differ by one sign or one inverted fraction mean a formula rearrangement (Technique 3), and the differences flag exactly which step to run carefully. A choice equal to a single variable\'s value sitting next to the value of a combination means the item is hunting the answer-the-variable reflex (Technique 5). A model choice with a lone constant term where a two-rate story belongs means the standard-form-vs-slope decision (Technique 4). The choice set is the label.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Read the question\'s final clause first and name the exact object requested — a single variable, a combination like $x+y$, a rearranged formula, or a feature of a model (intercept, coefficient, feasibility).',
      'A combination or scaled expression is asked → ride the whole equation to it (Technique 5): scan coefficients for a uniform factor and isolate the box in one move; do not solve for individuals unless forced.',
      'A single variable in a numeric equation → peel from the outside in (Technique 1); if the variable is on both sides or inside parentheses, distribute then collect first (Technique 2).',
      'Solve for one letter among many → freeze the others as numbers and run expand → collect → factor → divide (Technique 3); match answer forms with $\\times(-1)$ or number substitution.',
      'A two-price-plus-total story → transcribe directly to $Ax + By = C$ (Technique 4); read intercepts as pure cases, test combinations by substitution, interpret coefficients by units.',
      'Before submitting: substitute your answer back into the *original* equation, and confirm the value you have is the object the stem actually requested.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**Every technique here reduces to two habits: keep both sides balanced, and answer the exact question asked.** Peeling, distributing, rearranging, and combination-isolating are all the balance principle applied to different surfaces; the reading discipline — naming the requested object before and after solving — is what converts correct algebra into a correct answer. A student who substitutes one number back and re-reads the final clause is immune to the entire careless-loss family this topic is built to exploit.',
  },
  {
    type: 'trapCard',
    title: 'The half-distribution',
    wrong: '**The half-distribution.** A factor sits against a group — $-3(x - 4)$ or $\\frac{1}{2}(6x + 8)$ — and the factor reaches only the first term, leaving the second unmultiplied (or the negative sign dropped on it). The result is off by exactly one term, and that near-miss value is waiting in the choices looking finished.',
    correction: 'Distribute to *every* term inside the group, sign included, and narrate it — "the $-3$ times the $x$, and the $-3$ times the $-4$." Wrap negative terms in parentheses before multiplying so the sign travels: $-3(x - 4) = -3x + 12$. Then confirm with a back-substitution: plug your solution into the *original* grouped form, and a half-distributed slip fails the check on the spot.',
  },
  {
    type: 'trapCard',
    title: 'The answer-the-variable autopilot',
    wrong: '**The answer-the-variable autopilot.** The stem asks for $x + y$, or $2t$, or a ratio — but twelve years of "solve for $x$" carry you to a single variable\'s value, which you bubble with confidence. The lone variable\'s value is reliably seeded among the choices precisely to catch this.',
    correction: 'Name the requested object before solving and re-read the final clause before bubbling. Scan for the one-move route: if the asked combination is a uniform factor of the equation, factor and divide once (Technique 5) — often the individuals are not even recoverable, which is your cue that a combination is the whole point. The habit is mechanical: last clause first, requested object last.',
  },
  {
    type: 'trapCard',
    title: 'The forced slope-intercept model',
    wrong: '**The forced slope-intercept model.** A two-price-plus-total story arrives and the reflex crams it into $y = mx + b$, mangling which quantity is "$y$" and inviting fraction errors — or an intercept gets read as a price or as the total instead of a count.',
    correction: 'Let the form follow the information: two rates and one combined total transcribe directly to $Ax + By = C$, no slope required. Read each intercept as a pure case by setting the other variable to zero ("all chips, no sodas"), and anchor any interpretation ask in units — a coefficient is total-units per count, an intercept is a count. Convert to $y = mx + b$ only when the question explicitly wants a slope or a comparison of lines.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'If $\\dfrac{x}{5} + 3 = 8$, what is the value of $x$?\n\n(A) $1$\n(B) $5$\n(C) $25$\n(D) $55$',
    steps: [
      { label: 'Peel the outer operation first', content: 'The $+3$ is the outermost layer wrapping the variable. Subtract $3$ from both whole sides: $\\frac{x}{5} = 5$ (Technique 1).' },
      { label: 'Undo the division', content: 'The variable is divided by $5$, so multiply both sides by $5$: $x = 25$.' },
      { label: 'Verify by substitution', content: 'Put $25$ back into the original: $\\frac{25}{5} + 3 = 5 + 3 = 8$. True.' },
      { label: 'Answer', content: '**(C) $25$.** Choice (B) is the value of $\\frac{x}{5}$ — an intermediate mistaken for the answer.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The equation $4(t - 1) = 2t + 6$ has one solution. What is the value of $t$?\n\n(A) $2$\n(B) $3$\n(C) $5$\n(D) $7$',
    steps: [
      { label: 'Distribute across the group', content: 'Multiply the $4$ into both terms: $4t - 4 = 2t + 6$ (Technique 2). The $4$ must reach the $-1$, not just the $t$.' },
      { label: 'Collect variables and constants', content: 'Subtract $2t$ from both sides ($2t - 4 = 6$), then add $4$ ($2t = 10$). Gathering onto the left keeps the coefficient positive.' },
      { label: 'Peel and check', content: 'Divide both sides by $2$: $t = 5$. Verify: $4(5-1) = 16$ and $2(5)+6 = 16$. Balanced.' },
      { label: 'Answer', content: '**(C) $5$.** Choice (A) is the half-distribution result — "$4t - 1 = 2t + 6$" gives $t = 3.5$-flavored near-misses.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'If $6x + 6y = 42$, what is the value of $x + y$?\n\n(A) $6$\n(B) $7$\n(C) $36$\n(D) $42$',
    steps: [
      { label: 'Name the requested object', content: 'The stem asks for the *combination* $x + y$, not $x$ or $y$ alone — which a single equation cannot pin down (Technique 5).' },
      { label: 'Ride the whole equation', content: 'Every coefficient is a multiple of $6$. Factor: $6(x + y) = 42$. Divide both sides by $6$: $x + y = 7$. One move, no individuals extracted.' },
      { label: 'Answer', content: '**(B) $7$.** Choice (A) is a single variable\'s value under one guessed split; (D) is the raw total before dividing. The combination was one factor-out away the whole time.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A caterer buys $x$ trays of appetizers at $\\$12$ each and $y$ trays of dessert at $\\$9$ each, spending exactly $\\$180$ in total. If she buys $6$ appetizer trays, how many dessert trays does she buy, and what would the $y$-intercept of the model represent?',
    steps: [
      { label: 'Transcribe to standard form', content: 'Two prices plus one total → $12x + 9y = 180$ directly, no slope needed (Technique 4).' },
      { label: 'Substitute the known count', content: 'With $x = 6$: $12(6) + 9y = 180$, so $72 + 9y = 180$. Subtract $72$: $9y = 108$. Divide by $9$: $y = 12$ dessert trays.' },
      { label: 'Interpret the y-intercept', content: 'The $y$-intercept sets $x = 0$: $9y = 180$, so $y = 20$. It represents the *pure case* — buying $20$ dessert trays and no appetizer trays while still spending exactly $\\$180$ (Technique 4).' },
      { label: 'Answer', content: '**12 dessert trays**, and the $y$-intercept $20$ means "all dessert, no appetizers." Reading that intercept as a price ($\\$9$) or as the budget ($\\$180$) is the interpretation trap.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'You solve a system correctly and find $x = 3$. The stem asks for the value of $4x - 5$. One choice is $3$; another is $7$. Which do you bubble, and what mistake does the $3$ punish?',
    answer: 'Bubble $7$: substitute $x = 3$ into the requested expression, $4(3) - 5 = 7$. **Why:** the question asked for $4x - 5$, not $x$. The choice $3$ is the value of $x$ itself — the answer-the-variable autopilot, seeded exactly to catch a student who stops the instant they find $x$. Re-reading the final clause before bubbling converts correct algebra into a correct answer.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Technique', 'Situation', 'The move'],
    rows: [
      ['T1', 'One variable in a numeric equation', 'Peel the operations from the outside in, doing each move to both whole sides; clear fractions first by multiplying every term; substitute the answer back to verify'],
      ['T2', 'Variable on both sides or in parentheses', 'Distribute the factor to every term (signs included), collect variables on one side and constants on the other, then peel. Vanishing variable → true means infinite solutions, false means none'],
      ['T3', 'Solve for one letter among many', 'Freeze the other letters as numbers; expand → collect target terms → factor the target out → divide by its cofactor. A numerator sum splits, a denominator sum never does; match forms with $\\times(-1)$ or number substitution'],
      ['T4', 'Two prices plus one combined total', 'Transcribe directly to $Ax + By = C$ — no slope. Intercepts are pure cases ($\\frac{C}{A}$, $\\frac{C}{B}$) and are counts, not rates; test combinations by substitution; interpret coefficients by units'],
      ['T5', 'A combination or scaled expression is asked', 'Box the requested object and transform the whole equation until it stands alone (factor out a uniform coefficient, divide once, or reciprocate a ratio); do not dismantle the box or solve for individuals unless forced'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: an equation is a balance, so every legal move hits both whole sides; peel operations outside-in, distribute-then-collect when the variable is on both sides, freeze the other letters when rearranging a formula, model two-rate totals as $Ax + By = C$, and always isolate the exact object the question asked for. Two habits close every item — substitute one number back to check the balance, and re-read the final clause to check the ask. Balance in, question answered.',
  },
];
