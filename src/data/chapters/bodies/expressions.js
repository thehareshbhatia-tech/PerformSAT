/**
 * Learn lesson body — Working with Expressions (Algebra / Advanced Math).
 *
 * NEW lean "review / cheat-sheet" style (not the old dense textbook template):
 * one SAT skill per lesson, plain language, one idea per short section, a
 * couple of memorized moves, then 2-3 worked examples and a couple of
 * check-yourself questions. Voice + shape exemplar: bodies/gSubjectVerbAgreement.js.
 * Gated by bodies.test.js (lean contract). $...$ is KaTeX.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const expressionsBlocks = [
  {
    type: 'text',
    content: 'Expression items never ask you to *solve* — they ask you to **rewrite one expression as an equivalent one**. Expand, factor, or match a form. What makes them feel hard is reflex: there is no equation and nothing to solve for, so grinding gets you nowhere — the work is *recognizing* which form the item wants. The whole skill runs on two moves that are opposites, three templates worth memorizing, and one habit: treat a chunk as a single thing.',
  },

  { type: 'heading', content: 'Expand and factor are the same move, reversed' },
  {
    type: 'text',
    content: '**Expanding** multiplies out to kill parentheses: $(x+2)(x+3)\\to x^2+5x+6$. **Factoring** runs it backward, pulling a product out of a sum: $x^2+5x+6\\to(x+2)(x+3)$. Neither changes the value — same quantity, different outfit. The verb tells you the direction: "expand / multiply" go forward, "factor / write as a product" go backward. Read that instruction word before you touch the algebra — picking the wrong direction means real work toward a shape the item never asked for.',
  },
  {
    type: 'keyInsight',
    content: 'When you expand, **every term of one factor must meet every term of the other** — fill all four cells of the grid. The classic mistake is multiplying only the firsts and lasts and losing the whole middle term.',
  },

  { type: 'heading', content: 'Factor: pull the GCF first, then split the trinomial' },
  {
    type: 'text',
    content: 'Factoring has a fixed first step: **pull out the greatest common factor before anything else.** $6x^2+9x=3x(2x+3)$. A trinomial that looks impossible often turns friendly once the common piece leaves — skipping this step is the top reason a perfectly factorable expression looks prime. Then, for $x^2+bx+c$, find **two numbers that multiply to $c$ and add to $b$** — those are the constants in $(x+\\square)(x+\\square)$.',
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
    content: 'Reading them **backward** is the real shortcut. Two squares subtracted with no middle term is a difference of squares: $x^2-49=(x+7)(x-7)$. A trinomial whose ends are squares and whose middle equals twice their product is a perfect square: $x^2+12x+36=(x+6)^2$, since $2\\cdot x\\cdot6=12x$.',
  },

  { type: 'heading', content: 'Equal for all x? Match coefficients' },
  {
    type: 'text',
    content: 'When an item says two forms are equal **"for all values of $x$,"** stop solving — that exact phrase is the trigger, and it means something different from "solve for $x$." One value of $x$ would be an equation to solve; *for all* $x$ means the two polynomials must be identical, which happens only when their matching terms match. So **match the coefficients of like terms.** If $x^2+bx+12=(x+3)(x+k)$ for all $x$, expand the right side to $x^2+(3+k)x+3k$: the constants give $3k=12\\Rightarrow k=4$, then $b=3+k=7$.',
  },

  { type: 'heading', content: 'Treat a chunk as one unit' },
  {
    type: 'text',
    content: 'A compound piece like $(x+y)$ or $(x+1)$ can be handled as a **single sealed object.** The reason people struggle here is instinct — they try to crack the block open and find $x$ and $y$ on their own, when the block itself is what the question wants. If $3(x+y)=24$ and the question wants $x+y$, just divide: $x+y=8$ — you never need $x$ or $y$ alone. And a repeated block factors like one letter: $6(x+1)^2-5(x+1)=(x+1)\\big[6(x+1)-5\\big]=(x+1)(6x+1)$.',
  },
  {
    type: 'tip',
    content: 'Unsure whether two forms are equivalent? **Plug in one number** (not $0$ or $1$) and check both give the same value. $(x+5)^2$ vs $x^2+25$ at $x=1$: $36$ vs $26$ — not equivalent.',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Which is equivalent to $(3x-2)(x+4)$?\n\n(A) $3x^2+10x-8$\n(B) $3x^2-8$\n(C) $3x^2+14x-8$',
    steps: [
      { label: 'Fill the grid', content: 'Four products: $3x\\cdot x=3x^2$, $3x\\cdot4=12x$, $-2\\cdot x=-2x$, $-2\\cdot4=-8$.' },
      { label: 'Collect the middle', content: '$12x-2x=10x$, so the result is $3x^2+10x-8$.' },
      { label: 'Answer', content: '**(A).** (B) drops the middle term; (C) adds the cross products wrong.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: '$16x^2-9$ can be written as $(4x+a)(4x+b)$ for constants $a,b$. Find $a\\cdot b$.',
    steps: [
      { label: 'Spot the shape', content: 'Two squares subtracted, no middle term: $(4x)^2-3^2$. Difference of squares.' },
      { label: 'Fire the template backward', content: '$(4x+3)(4x-3)$, so $a=3$, $b=-3$.' },
      { label: 'Answer the question asked', content: '$a\\cdot b=(3)(-3)=\\mathbf{-9}$ — not the factors, the product.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: '$6x^2+cx-20=(2x+5)(3x+d)$ is true for all $x$. Find $c$.',
    steps: [
      { label: 'Read the trigger', content: '"For all $x$" means match coefficients, not solve.' },
      { label: 'Match the constant', content: 'Constant of the product is $5d$, which must equal $-20$, so $d=-4$.' },
      { label: 'Match the middle', content: 'The $x$-term is $2x\\cdot d+5\\cdot3x=(2d+15)x$. With $d=-4$: $2(-4)+15=7$, so $c=\\mathbf{7}$.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Which is equivalent to $9x^2+12x+4$?\n\n(A) $(3x+2)^2$\n(B) $(3x+4)^2$\n(C) $(9x+2)^2$',
    steps: [
      { label: 'Check the ends', content: 'Both outer terms are squares: $9x^2=(3x)^2$ and $4=2^2$. That hints at a perfect square.' },
      { label: 'Check the middle', content: 'Twice the product of $3x$ and $2$ is $2\\cdot3x\\cdot2=12x$ — it matches the middle term, so it really is a perfect square.' },
      { label: 'Answer', content: '**(A) $(3x+2)^2$.** (C) uses $9x$ instead of $\\sqrt{9x^2}=3x$; (B) breaks the twice-the-product check ($2\\cdot3x\\cdot4=24x\\ne12x$).' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Factor $x^2-2x-15$ completely. What pair drives it?',
    answer: '**$(x-5)(x+3)$.** You need a pair multiplying to $-15$ and adding to $-2$: that is $-5$ and $+3$. The negative $c$ means opposite signs, and the negative sum means the bigger number ($5$) takes the minus.',
  },
  {
    type: 'checkpointQuestion',
    question: 'You are told $x+y=6$ and $xy=4$. What is $x^2+y^2$?',
    answer: '**$28$.** Read the square-of-a-sum backward: $x^2+y^2=(x+y)^2-2xy=6^2-2(4)=36-8=28$. Treat $x+y$ and $xy$ as sealed units — no need to find $x$ and $y$ separately.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Expand $(2x-5)^2$. What is the middle term, and why is it negative?',
    answer: '**$4x^2-20x+25$.** Use the square-of-a-difference template: the ends are $(2x)^2=4x^2$ and $(-5)^2=25$, and the middle is twice the product, $2\\cdot2x\\cdot(-5)=-20x$. It is negative because the $-5$ carries its sign into the product — squaring a difference flips only the middle term.',
  },

  {
    type: 'text',
    content: '**The move, every time:** read the direction the item wants → expand by filling the grid, or factor by pulling the GCF and reading the shape → own the three templates both ways → on "for all $x$," match coefficients. Recognition first, computation second.',
  },
];
