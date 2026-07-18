/**
 * Learn lesson body — Working with Expressions (Algebra / Advanced Math).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js): practiced-tutor
 * register — developed 2-5 sentence paragraphs with connective tissue; every rule
 * earns its "because"; student-psychology named concretely; math teaching is
 * example-led; varied rhythm, no aphorism-per-block. Bans carried from v3: no
 * analogies, no pep talk, no exclamation marks, no emojis, no
 * test-personification. All v3 teaching claims preserved.
 * Gated by bodies.test.js.
 * $...$ is KaTeX.
 *
 * COMPOSED MODE (2026-07-18): chapterOpener lede + auto-numbered
 * sections/examples/figures + aside margin-notes + summary close
 * (exemplar: bodies/mPercents.js).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const expressionsBlocks = [
  {
    type: 'chapterOpener',
    lede: "Algebra closed with functions that reach beyond the linear, and everything nonlinear runs on one prerequisite skill: rewriting expressions. These questions hand you nothing to solve — no equation, no unknown to find, just one expression to **rewrite as an equivalent one** by expanding it, factoring it, or matching a target form. That can feel unfamiliar at first, precisely because the solving reflex has nothing to do here and long computation earns nothing; the skill is *recognizing* which form the question wants. The whole topic rests on two operations that reverse each other, three templates worth memorizing, and one habit — treating a compound piece as a single unit.",
  },

  { type: 'heading', content: 'Expanding and factoring: two directions' },
  {
    type: 'text',
    content: "**Expanding** multiplies out to remove parentheses: $(x+2)(x+3)\\to x^2+5x+6$. **Factoring** reverses it, rewriting a sum as a product: $x^2+5x+6\\to(x+2)(x+3)$. Neither changes the value — the two forms are the same quantity written two ways — so the instruction verb is what tells you which direction to work: \"expand\" or \"multiply\" goes forward, \"factor\" or \"write as a product\" goes backward. Find that verb before starting the algebra, because working in the wrong direction is real effort spent on a form the question never asked for.",
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "In expansion, **every term of one factor multiplies every term of the other** — all four products in a two-term-by-two-term case. Multiplying only the firsts and the lasts, and losing the entire middle term, is the characteristic error.",
  },

  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Which is equivalent to $(3x-2)(x+4)$?\n\n(A) $3x^2+10x-8$\n(B) $3x^2-8$\n(C) $3x^2+14x-8$',
    steps: [
      { label: 'Form all four products', content: "Four products: $3x\\cdot x=3x^2$, $3x\\cdot4=12x$, $-2\\cdot x=-2x$, $-2\\cdot4=-8$." },
      { label: 'Combine the middle terms', content: "$12x-2x=10x$, so the result is $3x^2+10x-8$." },
      { label: 'Answer', content: "**(A).** (B) drops the middle term — the firsts-and-lasts error, offered as a choice. (C) combines the cross products incorrectly." },
    ],
  },

  { type: 'heading', content: 'How to factor' },
  {
    type: 'steps',
    title: 'Factoring, in order',
    items: [
      "**Pull out the greatest common factor first.** $6x^2+9x=3x(2x+3)$. A trinomial that looks unfactorable often opens up once the GCF is out — skipping this step is the leading reason a perfectly factorable expression gets judged prime.",
      "**Then find the pair.** For $x^2+bx+c$, find two numbers that multiply to $c$ and add to $b$ — they're the constants in $(x+\\square)(x+\\square)$.",
    ],
  },

  { type: 'heading', content: 'The three templates, in both directions' },
  {
    type: 'table',
    headers: ['Template', 'Forward (expand)', 'Recognition cue (backward)'],
    rows: [
      ['Square of a sum', '$(a+b)^2=a^2+2ab+b^2$', 'Middle $=$ twice the product'],
      ['Square of a difference', '$(a-b)^2=a^2-2ab+b^2$', 'Same, with a negative middle term'],
      ['Conjugate pair', '$(a+b)(a-b)=a^2-b^2$', 'No middle term at all'],
    ],
  },
  {
    type: 'text',
    content: "The backward direction carries most of the value. A difference of two squares with no middle term factors immediately — $x^2-49=(x+7)(x-7)$ — and when both end terms are squares while the middle equals twice the product of their roots, you're holding a perfect square: $x^2+12x+36=(x+6)^2$, since $2\\cdot x\\cdot6=12x$. Spotting the form and applying the template replaces the longer computation entirely.",
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: '$16x^2-9$ can be written as $(4x+a)(4x+b)$ for constants $a,b$. Find $a\\cdot b$.',
    steps: [
      { label: 'Identify the form', content: "Two squares subtracted, no middle term: $(4x)^2-3^2$. Difference of squares." },
      { label: 'Apply the template backward', content: "$(4x+3)(4x-3)$, so $a=3$, $b=-3$." },
      { label: 'Answer the question asked', content: "$a\\cdot b=(3)(-3)=\\mathbf{-9}$ — the product, not the individual constants. Check what the question requests before you answer." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Which is equivalent to $9x^2+12x+4$?\n\n(A) $(3x+2)^2$\n(B) $(3x+4)^2$\n(C) $(9x+2)^2$',
    steps: [
      { label: 'Check the ends', content: "Both outer terms are squares: $9x^2=(3x)^2$ and $4=2^2$ — a perfect square is likely." },
      { label: 'Check the middle', content: "Twice the product of $3x$ and $2$ is $2\\cdot3x\\cdot2=12x$, which matches the middle term. The expression is a perfect square." },
      { label: 'Answer', content: "**(A) $(3x+2)^2$.** (C) uses $9x$ instead of $\\sqrt{9x^2}=3x$; (B) fails the twice-the-product check ($2\\cdot3x\\cdot4=24x\\ne12x$)." },
    ],
  },

  { type: 'heading', content: 'What "for all values of x" means' },
  {
    type: 'text',
    content: "The phrase **\"for all values of $x$\"** signals an identity, not an equation to solve. An equation that holds at one value of $x$ gets solved for that value; holding for *all* $x$ means the two polynomials are the same polynomial, and two polynomials are the same only when their corresponding terms agree. So the method is to **match the coefficients of like terms** — nothing gets solved except for the constants that make the match work.",
  },
  {
    type: 'text',
    content: "If $x^2+bx+12=(x+3)(x+k)$ for all $x$, expand the right side to $x^2+(3+k)x+3k$. The constants give $3k=12\\Rightarrow k=4$, then $b=3+k=7$.",
  },

  {
    type: 'example',
    difficulty: 'Hard',
    problem: '$6x^2+cx-20=(2x+5)(3x+d)$ is true for all $x$. Find $c$.',
    steps: [
      { label: 'Recognize the identity', content: "\"For all $x$\" means identity: match coefficients rather than solve." },
      { label: 'Match the constant', content: "The constant term of the product is $5d$, which must equal $-20$, so $d=-4$." },
      { label: 'Match the middle', content: "The $x$-term is $2x\\cdot d+5\\cdot3x=(2d+15)x$. With $d=-4$: $2(-4)+15=7$, so $c=\\mathbf{7}$." },
    ],
  },

  { type: 'heading', content: 'Treat a compound piece as one unit' },
  {
    type: 'text',
    content: "If $3(x+y)=24$ and the question wants $x+y$, one division does it: $x+y=8$. The instinct to break the pair apart and pin down $x$ and $y$ individually is misplaced here, because the unit itself is the quantity the question asks for — the individual values never enter. A compound piece such as $(x+y)$ or $(x+1)$ can be handled as a **single unit**, and a repeated unit even factors like a single variable: $6(x+1)^2-5(x+1)=(x+1)\\big[6(x+1)-5\\big]=(x+1)(6x+1)$.",
  },
  {
    type: 'tip',
    content: "To test whether two forms are equivalent, **substitute one number** (avoiding $0$ or $1$) and compare the values. $(x+5)^2$ versus $x^2+25$ at $x=1$: $36$ versus $26$ — not equivalent, and the question is settled.",
  },

  { type: 'heading', content: 'Rational expressions' },
  {
    type: 'text',
    content: "A rational expression is a fraction whose numerator and denominator are polynomials, and it simplifies the way a numeric fraction does: **factor both, then cancel the factors** the whole top and the whole bottom share. $\\dfrac{x^2-9}{x^2+5x+6}=\\dfrac{(x-3)(x+3)}{(x+2)(x+3)}=\\dfrac{x-3}{x+2}$. Why factor first? Because cancelling is dividing top and bottom by the same quantity, so only a complete factor qualifies — a term joined by $+$ or $-$ never cancels, and striking the two $x^2$ terms before factoring changes the expression's value. Factoring first is what makes the cancellation legitimate.",
  },
  {
    type: 'aside',
    kind: 'remember',
    content: "Cancel **factors**, never terms. A cancellation is valid exactly when the numerator and denominator are both written as products and share an identical factor — $\\dfrac{x+6}{6}$ doesn't simplify, because the $6$ on top is a term, not a factor.",
  },
  {
    type: 'text',
    content: "Addition and subtraction need a common denominator, exactly as with numeric fractions.",
  },
  {
    type: 'steps',
    title: 'Adding or subtracting rational expressions',
    items: [
      "**Get a common denominator.** The product of the two denominators always works.",
      "**Convert each fraction, combine the numerators, keep the shared denominator.** $\\dfrac{1}{x}+\\dfrac{2}{x+1}=\\dfrac{x+1}{x(x+1)}+\\dfrac{2x}{x(x+1)}=\\dfrac{3x+1}{x(x+1)}$.",
    ],
  },
  {
    type: 'text',
    content: "Adding tops and bottoms separately — $\\frac{1}{x}+\\frac{2}{x+1}\\ne\\frac{3}{2x+1}$ — is the error the wrong choices are built from; it's the straight-across slip from numeric fractions, translated into polynomials. Division by a fraction is multiplication by its reciprocal: $\\dfrac{a}{b}\\div\\dfrac{c}{d}=\\dfrac{a}{b}\\cdot\\dfrac{d}{c}$. A stacked (complex) fraction says the same thing in different typography — flip the bottom fraction, multiply, and the question becomes an ordinary factor-and-cancel exercise.",
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Which expression is equivalent to $\\dfrac{x^2-4}{x^2+3x+2}\\div\\dfrac{x-2}{x+3}$?',
    steps: [
      { label: 'Rewrite as multiplication by the reciprocal', content: "Division by a fraction flips it: $\\dfrac{x^2-4}{x^2+3x+2}\\cdot\\dfrac{x+3}{x-2}$." },
      { label: 'Factor every polynomial', content: "$x^2-4=(x-2)(x+2)$ and $x^2+3x+2=(x+1)(x+2)$, giving $\\dfrac{(x-2)(x+2)}{(x+1)(x+2)}\\cdot\\dfrac{x+3}{x-2}$." },
      { label: 'Cancel whole factors', content: "$(x+2)$ cancels top and bottom, then $(x-2)$ cancels across the product. What's left is $\\dfrac{x+3}{x+1}$ — every cancellation removed a complete factor, never a term." },
    ],
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      "**Read the verb.** \"Expand\" or \"multiply\" goes forward; \"factor\" or \"write as a product\" goes backward. Pick the direction before touching the algebra.",
      "**Scan for a template.** No middle term → difference of squares. Middle term equal to twice the product of the end roots → perfect square.",
      "**On \"for all $x$,\" match coefficients.** Expand one side and set like terms equal — there's nothing to solve.",
      "**Look for a unit.** If the question asks for $x+y$ or repeats a chunk like $(x+1)$, work with the chunk whole.",
      "**When in doubt, plug in a number.** One substitution (avoiding $0$ or $1$) settles whether two forms are equivalent.",
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Factor $x^2-2x-15$ completely. What pair drives it?',
    answer: "**$(x-5)(x+3)$.** The pair has to multiply to $-15$ and add to $-2$: that's $-5$ and $+3$. The negative constant says the signs are opposite, and the negative sum says the larger number ($5$) carries the minus sign.",
  },
  {
    type: 'checkpointQuestion',
    question: "You're told $x+y=6$ and $xy=4$. What is $x^2+y^2$?",
    answer: "**$28$.** Apply the square-of-a-sum template in reverse: $x^2+y^2=(x+y)^2-2xy=6^2-2(4)=36-8=28$. Treating $x+y$ and $xy$ as single units means you never need the individual values of $x$ and $y$.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Expand $(2x-5)^2$. What is the middle term, and why is it negative?',
    answer: "**$4x^2-20x+25$.** This is a square of a difference: the ends are $(2x)^2=4x^2$ and $(-5)^2=25$, and the middle is twice the product, $2\\cdot2x\\cdot(-5)=-20x$. The middle term is negative because the $-5$ carries its sign into that product — squaring a difference changes the sign of the middle term only.",
  },

  {
    type: 'summary',
    title: 'The topic in one habit',
    points: [
      'Recognize before you compute: **read the verb** to set the direction — expand or factor.',
      '**Expand** by forming every pairwise product; **factor** by pulling out the GCF first, then reading the form.',
      'Run the **three templates** in both directions.',
      'On "for all $x$," **match coefficients** — there is nothing to solve.',
      'Simplify **rational expressions** by factoring first and cancelling only whole factors.',
    ],
  },
];
