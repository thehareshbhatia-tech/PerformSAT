/**
 * Learn lesson body — Working with Expressions (Algebra / Advanced Math).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar:
 * bodies/mLinearEquations.js): coaching direct-address — talks TO the student,
 * anticipates the mistake before it happens, everyday anchor first and formula
 * second, concrete decision rules. Lean structure unchanged: short headed
 * sections, 4 worked examples, 3 checkpoints. Gated by bodies.test.js.
 * $...$ is KaTeX.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const expressionsBlocks = [
  {
    type: 'text',
    content: "Here's the twist with expression items: there's nothing to solve. No equation, no unknown to hunt — just one expression that wants to be **rewritten as an equivalent one**. Expand it, factor it, or match a form. That's exactly why they feel strange at first: your solving reflex has nowhere to go, and grinding gets you nothing. The work is *recognizing* which shape the item wants. The whole skill runs on two moves that are opposites, three templates worth memorizing, and one habit — treat a chunk as a single thing.",
  },

  { type: 'heading', content: 'Expand and factor are the same move, reversed' },
  {
    type: 'text',
    content: "**Expanding** multiplies out to kill parentheses: $(x+2)(x+3)\\to x^2+5x+6$. **Factoring** runs the film backward, pulling a product out of a sum: $x^2+5x+6\\to(x+2)(x+3)$. Neither changes the value — same quantity, different outfit. The instruction verb tells you which way to walk: \"expand\" or \"multiply\" goes forward, \"factor\" or \"write as a product\" goes backward. Read that word before you touch the algebra — pick the wrong direction and you'll do real work toward a shape the item never asked for.",
  },
  {
    type: 'keyInsight',
    content: "When you expand, **every term of one factor has to meet every term of the other** — fill all four cells of the grid. Here's where the points go: multiplying only the firsts and the lasts, and losing the entire middle term.",
  },

  { type: 'heading', content: 'Factor: pull the GCF first, then split the trinomial' },
  {
    type: 'text',
    content: "Factoring has a fixed opening move: **pull out the greatest common factor before anything else.** $6x^2+9x=3x(2x+3)$. A trinomial that looks impossible often turns friendly the moment the common piece leaves — skipping this step is the top reason a perfectly factorable expression gets called prime. Then, for $x^2+bx+c$, hunt for **two numbers that multiply to $c$ and add to $b$** — they're the constants in $(x+\\square)(x+\\square)$.",
  },

  { type: 'heading', content: 'The three templates — know them both directions' },
  {
    type: 'table',
    headers: ['Template', 'Forward (expand)', 'The tell, backward'],
    rows: [
      ['Square of a sum', '$(a+b)^2=a^2+2ab+b^2$', 'Middle $=$ twice the product'],
      ['Square of a difference', '$(a-b)^2=a^2-2ab+b^2$', 'Same, middle sign flips'],
      ['Conjugate pair', '$(a+b)(a-b)=a^2-b^2$', 'No middle term at all'],
    ],
  },
  {
    type: 'text',
    content: "Backward is where the payoff lives. Two squares subtracted, no middle term? Difference of squares: $x^2-49=(x+7)(x-7)$. Ends that are squares and a middle equal to twice their product? Perfect square: $x^2+12x+36=(x+6)^2$, since $2\\cdot x\\cdot6=12x$. Spot the shape, fire the template, skip the grind.",
  },

  { type: 'heading', content: 'Equal for all x? Match coefficients' },
  {
    type: 'text',
    content: "The phrase **\"for all values of $x$\"** is a trigger — the moment you see it, stop solving. One value of $x$ would be an equation to solve; *for all* $x$ means the two polynomials are the same polynomial, and that only happens when their matching terms match. So **match the coefficients of like terms.** If $x^2+bx+12=(x+3)(x+k)$ for all $x$, expand the right side to $x^2+(3+k)x+3k$: the constants give $3k=12\\Rightarrow k=4$, then $b=3+k=7$.",
  },

  { type: 'heading', content: 'Treat a chunk as one unit' },
  {
    type: 'text',
    content: "A compound piece like $(x+y)$ or $(x+1)$ can be handled as a **single sealed box.** Instinct says crack the box open and find $x$ and $y$ on their own — and instinct is exactly wrong here, because the box itself is what the question wants. If $3(x+y)=24$ and the item asks for $x+y$, just divide: $x+y=8$ — you never needed $x$ or $y$ alone. A repeated box even factors like a single letter: $6(x+1)^2-5(x+1)=(x+1)\\big[6(x+1)-5\\big]=(x+1)(6x+1)$.",
  },
  {
    type: 'tip',
    content: "Unsure whether two forms are equivalent? **Plug in one number** (not $0$ or $1$) and see whether both give the same value. $(x+5)^2$ vs $x^2+25$ at $x=1$: $36$ vs $26$ — not equivalent, case closed.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Which is equivalent to $(3x-2)(x+4)$?\n\n(A) $3x^2+10x-8$\n(B) $3x^2-8$\n(C) $3x^2+14x-8$',
    steps: [
      { label: 'Fill the grid', content: "Four products: $3x\\cdot x=3x^2$, $3x\\cdot4=12x$, $-2\\cdot x=-2x$, $-2\\cdot4=-8$." },
      { label: 'Collect the middle', content: "$12x-2x=10x$, so the result is $3x^2+10x-8$." },
      { label: 'Answer', content: "**(A).** (B) drops the middle term — the firsts-and-lasts mistake, bottled as a choice; (C) adds the cross products wrong." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: '$16x^2-9$ can be written as $(4x+a)(4x+b)$ for constants $a,b$. Find $a\\cdot b$.',
    steps: [
      { label: 'Spot the shape', content: "Two squares subtracted, no middle term: $(4x)^2-3^2$. Difference of squares." },
      { label: 'Fire the template backward', content: "$(4x+3)(4x-3)$, so $a=3$, $b=-3$." },
      { label: 'Answer the question asked', content: "$a\\cdot b=(3)(-3)=\\mathbf{-9}$ — the product, not the factors. Re-read what it wanted before you bubble." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: '$6x^2+cx-20=(2x+5)(3x+d)$ is true for all $x$. Find $c$.',
    steps: [
      { label: 'Read the trigger', content: "\"For all $x$\" means match coefficients, not solve." },
      { label: 'Match the constant', content: "Constant of the product is $5d$, which has to equal $-20$, so $d=-4$." },
      { label: 'Match the middle', content: "The $x$-term is $2x\\cdot d+5\\cdot3x=(2d+15)x$. With $d=-4$: $2(-4)+15=7$, so $c=\\mathbf{7}$." },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Which is equivalent to $9x^2+12x+4$?\n\n(A) $(3x+2)^2$\n(B) $(3x+4)^2$\n(C) $(9x+2)^2$',
    steps: [
      { label: 'Check the ends', content: "Both outer terms are squares: $9x^2=(3x)^2$ and $4=2^2$. That hints at a perfect square." },
      { label: 'Check the middle', content: "Twice the product of $3x$ and $2$ is $2\\cdot3x\\cdot2=12x$ — it matches the middle term, so it really is a perfect square." },
      { label: 'Answer', content: "**(A) $(3x+2)^2$.** (C) uses $9x$ instead of $\\sqrt{9x^2}=3x$; (B) fails the twice-the-product check ($2\\cdot3x\\cdot4=24x\\ne12x$)." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Factor $x^2-2x-15$ completely. What pair drives it?',
    answer: "**$(x-5)(x+3)$.** Hunt for a pair multiplying to $-15$ and adding to $-2$: that's $-5$ and $+3$. The negative $c$ says opposite signs, and the negative sum says the bigger number ($5$) takes the minus.",
  },
  {
    type: 'checkpointQuestion',
    question: 'You are told $x+y=6$ and $xy=4$. What is $x^2+y^2$?',
    answer: "**$28$.** Read the square-of-a-sum template backward: $x^2+y^2=(x+y)^2-2xy=6^2-2(4)=36-8=28$. Treat $x+y$ and $xy$ as sealed boxes — you never needed $x$ and $y$ on their own.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Expand $(2x-5)^2$. What is the middle term, and why is it negative?',
    answer: "**$4x^2-20x+25$.** Square-of-a-difference: the ends are $(2x)^2=4x^2$ and $(-5)^2=25$, and the middle is twice the product, $2\\cdot2x\\cdot(-5)=-20x$. It's negative because the $-5$ carries its sign into that product — squaring a difference flips only the middle term.",
  },

  {
    type: 'text',
    content: "**The move, every time:** read the direction the item wants → expand by filling the grid, or factor by pulling the GCF and reading the shape → own the three templates both ways → on \"for all $x$,\" match coefficients. Recognition first, computation second.",
  },
];
