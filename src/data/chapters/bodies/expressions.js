/**
 * Learn chapter body — Working with Expressions (Algebra / Advanced Math).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered techniques (technique → right → wrong → why) → Stage 3
 * on-the-test (decision flow, traps, worked examples, checkpoints,
 * one-page summary). Voice reference: bodies/inequalities.js and
 * bodies/nonlinearEquations.js (the approved math exemplars).
 * Concept source: knowledge/graph/math (binomial-product-templates,
 * dropped-middle-term, coefficient-matching-identities, expression-as-unit).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const expressionsBlocks = [
  {
    type: 'text',
    content: 'Expression items ask you to rewrite one algebraic expression as another — expand $(2x - 5)(x + 3)$, factor $x^2 - 9$, find the constant that makes two forms equal for every $x$, or solve for $(x + y)$ as a single chunk. There is no equation to balance and often no single number to find; the whole task is **producing an equivalent form** and recognizing when the test hands you one in disguise. The good news: it all runs on two inverse moves (distribute and factor), three memorized templates, and one mental habit — treating a compound expression as a single sealed object. Learn those and the "hard" items become pattern recognition, not grinding.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** What "equivalent" actually means, why expanding and factoring are the same move run in opposite directions, and how like terms combine.',
      '**Stage 2 · The techniques.** Six numbered techniques, each in the same shape: the move, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow that routes each item to its technique, the traps the test sets, worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · Equivalence, and the two inverse moves' },
  {
    type: 'text',
    content: 'Two expressions are **equivalent** when they produce the same output for *every* input — not for one lucky value, but for all of them. $3(x + 2)$ and $3x + 6$ are equivalent because plugging in any number gives the same result both ways; try $x = 5$ and both give $21$, and that is true forever. This is the entire game: "rewrite," "which is equivalent," and "simplify" all mean *find a different-looking expression with the same value everywhere*. It also gives you a free verification tool — when two forms should be equal but you are unsure, **plug in one number** (avoid $0$ and $1$, which hide too many errors) and see whether they agree.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — equal for every input', content: '$5(x - 4)$ and $5x - 20$. Test $x = 3$: $5(-1) = -5$ and $5(3) - 20 = -5$. Test $x = 10$: both give $30$. Same output every time — genuinely equivalent.', variant: 'right' },
      { label: 'Wrong — equal at one value only', content: 'Calling $x^2$ and $2x$ "equivalent" because both give $4$ at $x = 2$. They collide at that one input and nowhere else — $x = 3$ gives $9$ versus $6$. A single matching value proves nothing; equivalence is an every-input promise.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'Every rewrite in this chapter is one of two moves, and they are **exact opposites**. *Expanding* (distributing) multiplies things out to remove parentheses: $(x + 2)(x + 3) \\to x^2 + 5x + 6$. *Factoring* runs the film backward, pulling a product back out of a sum: $x^2 + 5x + 6 \\to (x + 2)(x + 3)$. Neither changes the value — you are looking at the same quantity wearing a different outfit. Knowing which direction the item wants is half the work: "expand," "multiply," or "write without parentheses" means go forward; "factor," "which is a factor," or "write as a product" means go backward.',
  },
  {
    type: 'formula',
    label: 'Expand and factor are one move in two directions',
    content: '$(x + 2)(x + 3) \\;\\underset{\\text{factor}}{\\overset{\\text{expand}}{\\rightleftarrows}}\\; x^2 + 5x + 6$',
    note: 'Same quantity, two costumes. The equals sign between them holds for every value of $x$ — that is what makes them equivalent.',
  },
  {
    type: 'text',
    content: 'The workhorse of expanding is **combining like terms**: terms with the identical variable part add or subtract by their coefficients, and nothing else touches. $4x + 3x = 7x$ and $x^2 + 5x^2 = 6x^2$, but $4x + 3x^2$ stays as it is — $x$ and $x^2$ are different species and never merge. The two rules students break: a constant is only "like" another constant (you cannot fold $6$ into a $5x$), and the exponent does *not* change when you add ($x^2 + x^2 = 2x^2$, never $x^4$). Adding counts how many of a thing you have; it never multiplies the things together.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'Simplify $2x^2 + 5x - x^2 + 3 - x$. And separately: are $x^2 + 4$ and $(x + 2)^2$ equivalent?',
    answer: 'The simplification is $x^2 + 4x + 3$: combine $2x^2 - x^2 = x^2$, then $5x - x = 4x$, and the lone $3$ stands alone. **No**, the two are not equivalent — $(x + 2)^2$ expands to $x^2 + 4x + 4$, which carries a middle term $x^2 + 4$ lacks. **Why:** like terms merge only within a species, and squaring a sum is *not* squaring each piece — a one-number test ($x = 1$: $5$ versus $9$) settles it instantly.',
  },

  // ── Stage 2 · The techniques ───────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The techniques' },
  {
    type: 'text',
    content: 'Six techniques cover every expression item. Each follows the same shape: the **move**, a **right** example, a **wrong** example, and the **why**.',
  },

  { type: 'heading', content: 'Technique 1 — Distribute onto every term, then collect' },
  {
    type: 'text',
    content: 'To expand a product, **every term of the first factor must meet every term of the second** — think of it as a grid where no cell is allowed to stay empty. For $(2x - 5)(x + 3)$ that is four products: $2x \\cdot x = 2x^2$, $2x \\cdot 3 = 6x$, $-5 \\cdot x = -5x$, $-5 \\cdot 3 = -15$. Then collect like terms: $2x^2 + 6x - 5x - 15 = 2x^2 + x - 15$. Write the result in descending powers so it lines up cleanly against the answer choices. The single most common failure is skipping cross products — multiplying only the "outer" or "first" terms and losing the middle.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — all four cells filled', content: '$(x - 4)(x + 6)$: the four products are $x^2$, $+6x$, $-4x$, $-24$. Collect the middle: $x^2 + 2x - 24$. Signs carried, nothing dropped.', variant: 'right' },
      { label: 'Wrong — only firsts and lasts', content: '$(x - 4)(x + 6) = x^2 - 24$, multiplying just the first terms and the last terms. The two cross products $+6x$ and $-4x$ never got written, so the entire middle term vanished. The choice set always offers this middle-less form.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Technique 2 — Factor: pull out the common piece, then split the trinomial' },
  {
    type: 'text',
    content: 'Factoring is the reverse move, and it has a fixed first step: **always pull out the greatest common factor before anything else**. In $6x^2 + 9x$, both terms share a $3x$, so it lifts out as $3x(2x + 3)$. Skipping the GCF is what makes later factoring look impossibly hard — a stubborn trinomial often becomes a friendly one the instant the common factor leaves. Check the pull by mentally re-distributing: $3x$ times $2x$ is $6x^2$, $3x$ times $3$ is $9x$. If the re-expansion does not rebuild the original, the factor was wrong.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — GCF out first', content: '$4x^3 - 12x^2 + 8x$: every term carries $4x$, so it comes out whole → $4x(x^2 - 3x + 2)$, and the inside factors further to $4x(x - 1)(x - 2)$. Two clean stages.', variant: 'right' },
      { label: 'Wrong — partial or missed GCF', content: '$4x^3 - 12x^2 + 8x = 4(x^3 - 3x^2 + 2x)$, pulling only the $4$ and leaving an $x$ behind in every term. Not fully factored — the leftover common $x$ means the answer is incomplete, and the "half-pulled" form is a planted choice.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'To factor a simple quadratic $x^2 + bx + c$ (leading coefficient $1$), find **two numbers that multiply to $c$ and add to $b$** — those two numbers are the constants in $(x + \\square)(x + \\square)$. For $x^2 + 7x + 12$: what pair multiplies to $12$ and adds to $7$? That is $3$ and $4$, so it factors as $(x + 3)(x + 4)$. The signs are your compass: a positive $c$ means both numbers share the sign of $b$; a negative $c$ means they have opposite signs, and the larger-magnitude one carries the sign of $b$. Always confirm by re-expanding the middle term — the product-and-sum test is easy to fumble under time.',
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'Factor $x^2 - 2x - 15$ completely. What pair of numbers drives it, and how do the signs tell you their arrangement?',
    answer: '$(x - 5)(x + 3)$. **Why:** you need a pair multiplying to $-15$ and adding to $-2$; that is $-5$ and $+3$. The negative $c$ ($-15$) signals opposite signs, and since the sum $-2$ is negative, the larger-magnitude number ($5$) takes the minus. Re-expand to confirm: $x^2 + 3x - 5x - 15 = x^2 - 2x - 15$. Matches.',
  },

  { type: 'heading', content: 'Technique 3 — The three templates, forward' },
  {
    type: 'text',
    content: 'Three products show up so often they are worth owning as instant templates rather than expanding from scratch. Each is just Technique 1 with the cross products pre-computed — but recognizing the shape saves time and dodges arithmetic slips. Derive them once by the grid so you *see* where each piece comes from, then fire them on sight. The two squares carry a middle term equal to **twice the product** of the pieces; the conjugate pair (a sum times its sign-flipped twin) has its cross terms cancel, leaving a **difference of two squares** with no middle at all.',
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Square of a sum', formula: '$(a + b)^2 = a^2 + 2ab + b^2$', note: 'Middle term is $2ab$ — twice the product, not zero.' },
      { label: 'Square of a difference', formula: '$(a - b)^2 = a^2 - 2ab + b^2$', note: 'Same shape, middle sign flips; the squared terms stay positive.' },
      { label: 'Conjugate pair', formula: '$(a + b)(a - b) = a^2 - b^2$', note: 'The $+ab$ and $-ab$ cancel; result is always a subtraction of two squares.' },
    ],
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — the middle term is twice the product', content: '$(x + 5)^2 = x^2 + 2(x)(5) + 25 = x^2 + 10x + 25$. The $10x$ is $2 \\cdot x \\cdot 5$ — the two cross products from the grid, added.', variant: 'right' },
      { label: 'Wrong — squaring each piece separately', content: '$(x + 5)^2 = x^2 + 25$. Treating the square as if it distributes across the plus sign drops the $10x$ entirely. Test $x = 1$: the real value is $36$, this gives $26$ — different, so not equivalent. This is the single most-planted wrong answer in the topic.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Technique 4 — The templates, backward: reading the shape' },
  {
    type: 'text',
    content: 'The higher-value skill is running the templates *in reverse* — spotting when a quadratic is secretly a template and factoring it in one step. Two recognition checks do it. **Difference of squares:** a two-term subtraction where both pieces are perfect squares — the "middle term has vanished" signature — is $(a + b)(a - b)$. So $x^2 - 49$ is instantly $(x + 7)(x - 7)$, and $9x^2 - 16$ is $(3x + 4)(3x - 4)$. **Perfect-square trinomial:** a three-term expression where the first and last are squares and the middle equals *twice their product* is a squared binomial. $x^2 + 12x + 36$ passes the check ($2 \\cdot x \\cdot 6 = 12x$), so it is $(x + 6)^2$. Train the eye and these skip the product-and-sum search entirely.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — recognize the difference of squares', content: '$4x^2 - 25$ is two squares subtracted: $(2x)^2 - (5)^2$. Fire the conjugate template backward → $(2x + 5)(2x - 5)$. No product-and-sum hunt needed.', variant: 'right' },
      { label: 'Wrong — miss the shape, or misread a sum', content: 'Treating $4x^2 + 25$ as a difference of squares and writing $(2x + 5)(2x - 5)$. But that is a *sum* of squares — it does not factor over the reals, and expanding the guess gives $4x^2 - 25$, the wrong sign. The template only fires on a subtraction.', variant: 'wrong' },
    ],
  },
  {
    type: 'tip',
    content: 'Before hunting for factor pairs, run two five-second checks. Two terms subtracted, both perfect squares? → difference of squares, done. Three terms with square ends and a middle equal to twice the product? → perfect-square binomial, done. Only if both checks fail do you fall back to the product-and-sum search of Technique 2.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'Factor $x^2 - 16$ and, separately, $x^2 - 10x + 25$. Which template does each match, and what tips you off?',
    answer: '$x^2 - 16 = (x + 4)(x - 4)$ — a difference of squares (two terms subtracted, both perfect squares, no middle term). $x^2 - 10x + 25 = (x - 5)^2$ — a perfect-square trinomial, because the ends $x^2$ and $25$ are squares and the middle $10x$ equals $2 \\cdot x \\cdot 5$. **Why:** the *number of terms* and whether the middle equals twice the product are the tells; reading them first turns two-step factoring into one-step recognition.',
  },

  { type: 'heading', content: 'Technique 5 — Equal for all x: match coefficients' },
  {
    type: 'text',
    content: 'When an item says two expressions are equal **"for all values of $x$"** (or "equivalent"), that phrase is a mode switch: stop trying to solve for $x$, because there is nothing to solve — two polynomials agree everywhere only if they are the *same polynomial*. So **match the coefficients of equal-degree terms**. If $x^2 + bx + 12 = (x + 3)(x + k)$ for all $x$, expand the right side to $x^2 + (3 + k)x + 3k$ and line up: the constant gives $3k = 12$, so $k = 4$; then the $x$ coefficient gives $b = 3 + k = 7$. The expert shortcut: you often need only the *one* coefficient you are asked about, so compute just the partial products that land on that degree instead of expanding everything.',
  },
  {
    type: 'formula',
    label: 'Same polynomial → matching coefficients',
    content: '$x^2 + bx + 12 = (x + 3)(x + k) = x^2 + (3 + k)x + 3k$',
    note: 'Match term by term: $3k = 12 \\Rightarrow k = 4$, then $b = 3 + k = 7$. "For all $x$" means match, not solve.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — match the constant term first', content: 'Given $2x^2 + cx - 15 = (2x - 3)(x + k)$ for all $x$: the constant is $-3k = -15$, so $k = 5$; then the $x$-term is $2k - 3 = 7$, giving $c = 7$. One targeted match resolved each unknown.', variant: 'right' },
      { label: 'Wrong — solve for x as if it is an equation', content: 'Reading "for all $x$" and isolating $x$ to "solve," producing an $x$-value on a question that asked for a constant. There is no single $x$ — the statement is true for every $x$, so isolating one is answering a question the item never posed.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Technique 6 — Treat the whole expression as one unit' },
  {
    type: 'text',
    content: 'The most leveraged habit in the topic: a compound expression like $(x + 1)$, $(a - b)$, or $x^2$ can be handled as a **single sealed object** — move it, factor it out, substitute for it — without ever breaking it into parts. Two payoffs. First, **solve for the chunk directly**: if a question gives $3(x + y) = 24$ and asks for $x + y$, just divide by $3$ to get $8$ — you never need $x$ or $y$ alone. Second, **factor by treating a repeat as one letter**: in $6(x + 1)^2 - 5(x + 1)$, the block $(x + 1)$ appears in both terms, so pull it out → $(x + 1)\\big[6(x + 1) - 5\\big] = (x + 1)(6x + 1)$. Rename the block $u$ in your head if it helps: $6u^2 - 5u = u(6u - 5)$, then restore $u = x + 1$. Do not expand a repeated block just to re-collect it later.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — solve for the chunk as a whole', content: 'If $5(a + 2b) = 45$, then $a + 2b = 9$ by dividing both sides by $5$. The item asked for $a + 2b$, so isolating that one bundle is the entire job — no need to find $a$ or $b$.', variant: 'right' },
      { label: 'Wrong — dismantle a bundle you were asked to keep', content: 'Given $5(a + 2b) = 45$ and asked for $a + 2b$, trying to solve for $a$ and $b$ separately. One equation with two unknowns cannot pin either variable — the student stalls out or declares it impossible, when the whole quantity was one short division away.', variant: 'wrong' },
    ],
  },
  {
    type: 'keyInsight',
    content: '**Recognition beats computation on every expression item.** The three templates, the difference-of-squares "missing middle," the coefficient-matching trigger phrase, and the repeated-block bundle are all *shapes to see*, not procedures to grind. The student who scans for the shape first factors in one step, matches one coefficient instead of expanding four products, and solves for a chunk without ever touching its parts. The student who reaches for full expansion every time gets the same answers slower — and walks straight into the arithmetic-slip distractors those long expansions were built to harvest.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'If $2(m + n) = 30$, what is the value of $3(m + n)$? And separately: factor $4(y - 3)^2 + 8(y - 3)$ by treating $(y - 3)$ as one unit.',
    answer: '$3(m + n) = 45$, because $m + n = 15$ from the first equation, so three of them is $45$ — no need for $m$ or $n$ alone. The factoring: $(y - 3)$ is the shared block, and both terms carry a $4$, so pull out $4(y - 3)$ → $4(y - 3)\\big[(y - 3) + 2\\big] = 4(y - 3)(y - 1)$. **Why:** a bundle is a crate — weigh it and move it whole; unpack only when the answer is genuinely inside.',
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'Read the four choices as a set before working — they announce what is being tested. A squared-binomial expansion sitting next to the same thing minus its middle term means the item is hunting the dropped-middle-term slip (Technique 3). A two-term subtraction of squares in the stem means difference-of-squares recognition (Technique 4). The phrase "for all values of $x$" or "equivalent" with an unknown constant means coefficient matching (Technique 5). A question that asks for $x + y$ rather than $x$ means the answer is a bundle you can reach directly (Technique 6). The choice set is the label — read it first.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Which direction? "Expand / multiply / write without parentheses" → go forward (Technique 1). "Factor / which is a factor / write as a product" → go backward (Techniques 2 and 4).',
      'Expanding → fill every cell of the grid, then collect like terms in descending order. If it is a squared binomial or a conjugate pair, fire the template (Technique 3) instead of grinding.',
      'Factoring → pull the GCF first, always (Technique 2). Then run the two shape checks: difference of squares, or perfect-square trinomial (Technique 4). Only if both fail, hunt the product-and-sum pair.',
      '"For all $x$" or "equivalent" with an unknown constant → stop solving, match coefficients degree by degree; compute only the products landing on the coefficient you need (Technique 5).',
      'Asked for a compound quantity like $x + y$, or seeing a block repeat → treat it as one unit: solve for the chunk or factor the repeat out whole (Technique 6).',
      'Before submitting: if two forms should be equivalent, plug in one number that is not $0$ or $1$ and confirm both give the same value.',
    ],
  },
  {
    type: 'trapCard',
    title: 'The dropped middle term',
    wrong: '**The dropped middle term.** Expanding $(x + 5)^2$ as $x^2 + 25$ — squaring each piece and skipping the cross products. The wrong answer *looks* finished (two clean terms), it is generated by the distribute-over-multiplication habit drilled for years, and the middle-less form is always waiting in the choice set.',
    correction: 'A square of a sum is that sum times itself, so every term of the first copy must meet every term of the second — which is exactly where the middle $2ab$ is born. Fire the template deliberately: $(a + b)^2 = a^2 + 2ab + b^2$, middle term equal to *twice the product*. When anything feels off, plug in a small number: $(1 + 5)^2 = 36$, but $1^2 + 5^2 = 26$ — the false version fails on sight.',
  },
  {
    type: 'trapCard',
    title: 'The half middle term',
    wrong: '**The half middle term.** A partial fix of the trap above: the student remembers "there is a cross term" and writes $(x + 5)^2 = x^2 + 5x + 25$ — one $ab$ instead of $2ab$. It feels safer than dropping the middle entirely, and the item plants exactly this halfway form as its own choice.',
    correction: 'The grid has *two* cross cells, both equal to $ab$, so they sum to $2ab$ — never one. Recount the grid whenever the middle looks thin: $(x + 5)^2$ has cross products $5x$ and $5x$, totaling $10x$. The one-number test catches it too: at $x = 1$, the real value is $36$, and $1 + 5 + 25 = 31$ misses.',
  },
  {
    type: 'trapCard',
    title: 'Stopping before fully factored',
    wrong: '**Stopping before fully factored.** Factoring $x^4 - 16$ to $(x^2 + 4)(x^2 - 4)$ and calling it done — or pulling only part of the GCF and leaving a common factor stranded in every term. The intermediate, half-factored form is deliberately offered as a choice.',
    correction: 'After every factoring pass, re-scan each factor against the templates. Here $(x^2 - 4)$ is itself a difference of squares, so it decomposes again: $x^4 - 16 = (x^2 + 4)(x + 2)(x - 2)$. "Fully factored" means no remaining factor matches any template and no common piece is left inside — check both before committing.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Which of the following is equivalent to $(3x - 2)(x + 4)$?\n\n(A) $3x^2 + 10x - 8$\n(B) $3x^2 - 8$\n(C) $3x^2 + 2x - 8$\n(D) $3x^2 + 14x - 8$',
    steps: [
      { label: 'Fill every cell of the grid', content: 'Four products: $3x \\cdot x = 3x^2$, $3x \\cdot 4 = 12x$, $-2 \\cdot x = -2x$, $-2 \\cdot 4 = -8$ (Technique 1).' },
      { label: 'Collect the middle', content: 'Combine the two cross products: $12x - 2x = 10x$. So the expression is $3x^2 + 10x - 8$.' },
      { label: 'Answer', content: '**(A)**. Choice (B) is the dropped-middle-term trap; (C) keeps only one cross product; (D) adds the cross products with the wrong sign.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The expression $16x^2 - 9$ can be written in the form $(4x + a)(4x + b)$, where $a$ and $b$ are constants. What is the value of $a \\cdot b$?',
    steps: [
      { label: 'Recognize the shape', content: 'Two terms subtracted, both perfect squares: $16x^2 = (4x)^2$ and $9 = 3^2$. That is a difference of squares (Technique 4) — the missing middle term is the tell.' },
      { label: 'Fire the template backward', content: '$(4x)^2 - 3^2 = (4x + 3)(4x - 3)$. So $a = 3$ and $b = -3$.' },
      { label: 'Answer the actual question', content: 'The item asks for $a \\cdot b$, not the factors: $a \\cdot b = (3)(-3) = -9$.' },
      { label: 'Answer', content: '**$-9$**. Notice it equals the original constant term — the conjugate product $a^2 - b^2$ always lands the constant at $-b^2$.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'The equation $6x^2 + cx - 20 = (2x + 5)(3x + d)$ is true for all values of $x$, where $c$ and $d$ are constants. What is the value of $c$?',
    steps: [
      { label: 'Read the trigger phrase', content: '"True for all values of $x$" means match coefficients, not solve for $x$ (Technique 5). Expand the right side.' },
      { label: 'Expand only what you need', content: 'The constant term of the product is $5 \\cdot d = 5d$, and it must equal $-20$, so $d = -4$.' },
      { label: 'Match the middle coefficient', content: 'The $x$-term comes from two products: $2x \\cdot d + 5 \\cdot 3x = 2dx + 15x = (2d + 15)x$. With $d = -4$: $2(-4) + 15 = 7$, so $c = 7$.' },
      { label: 'Answer', content: '**$c = 7$**. Confirm with one value if unsure — at $x = 1$, the left side is $6 + 7 - 20 = -7$ and the right is $(7)(-1) = -7$. Match.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'You need the value of $x^2 + y^2$, and you are told $x + y = 6$ and $xy = 4$. How do the templates get you there without finding $x$ and $y$?',
    answer: '$x^2 + y^2 = 28$. **Why:** the square-of-a-sum template says $(x + y)^2 = x^2 + 2xy + y^2$, so $x^2 + y^2 = (x + y)^2 - 2xy = 6^2 - 2(4) = 36 - 8 = 28$. Treating $x + y$ and $xy$ as sealed units (Technique 6) and reading the template backward reaches the answer directly — solving for $x$ and $y$ individually is the slow detour the item is daring you to take.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Situation', 'Technique', 'The move'],
    rows: [
      ['Expand / multiply out', 'T1 — Grid and collect', 'Every term of one factor meets every term of the other; fill all cells, then combine like terms in descending order'],
      ['Factor to a product', 'T2 — GCF, then trinomial', 'Pull the greatest common factor first, always; then find two numbers multiplying to $c$ and adding to $b$'],
      ['Squared binomial or conjugate pair', 'T3 — Templates forward', '$(a \\pm b)^2 = a^2 \\pm 2ab + b^2$ (middle is twice the product); $(a + b)(a - b) = a^2 - b^2$'],
      ['Two squares subtracted, or square-ended trinomial', 'T4 — Templates backward', 'Missing middle + both squares → $(a + b)(a - b)$; middle equals twice the product → $(a \\pm b)^2$'],
      ['"For all $x$" / "equivalent" with an unknown', 'T5 — Match coefficients', 'Same polynomial both sides; match term by term, computing only the products landing on the coefficient asked'],
      ['Asked for a chunk, or a block repeats', 'T6 — Expression as a unit', 'Solve for $x + y$ whole; factor a repeated block out intact by renaming it $u$ — unpack only if the answer is inside'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: read the direction the item wants, expand by filling the grid or factor by pulling the GCF and reading the shape, own the three templates in both directions, switch to coefficient-matching on the "for all $x$" trigger, and handle compound expressions as sealed units. Recognition first, computation second — and one plugged-in number confirms any equivalence you are unsure of.',
  },
];
