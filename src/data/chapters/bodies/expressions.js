/**
 * Learn lesson body — Working with Expressions (Algebra / Advanced Math).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 * $...$ is KaTeX.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const expressionsBlocks = [
  {
    type: 'text',
    content: "Algebra closed with functions that reach beyond the linear, and work on nonlinear functions runs on one prerequisite skill: rewriting expressions. Expression items contain nothing to solve — no equation, no unknown to determine, only a single expression to be **rewritten as an equivalent one** by expanding it, factoring it, or matching a target form. These items can feel unfamiliar at first precisely because the solving reflex has no application, and extended computation earns nothing; the skill is *recognizing* which form the item requires. The entire topic rests on two operations that reverse each other, three templates worth memorizing, and one habit — treating a compound piece as a single unit.",
  },

  { type: 'heading', content: 'Expanding and factoring as inverse operations' },
  {
    type: 'text',
    content: "**Expanding** multiplies out to remove parentheses: $(x+2)(x+3)\\to x^2+5x+6$. **Factoring** is the reverse operation, rewriting a sum as a product: $x^2+5x+6\\to(x+2)(x+3)$. Neither changes the value — the two forms represent the same quantity. The instruction verb indicates the direction: \"expand\" or \"multiply\" goes forward, \"factor\" or \"write as a product\" goes backward. Identify that verb before beginning the algebra; working in the wrong direction produces genuine effort toward a form the item never requested.",
  },
  {
    type: 'keyInsight',
    content: "In expansion, **every term of one factor must multiply every term of the other** — all four products in a two-term-by-two-term case. Multiplying only the first terms and the last terms, and thereby losing the entire middle term, is the characteristic error.",
  },

  { type: 'heading', content: 'Factoring: the greatest common factor, then the trinomial' },
  {
    type: 'text',
    content: "Factoring begins with a fixed first step: **remove the greatest common factor before anything else.** $6x^2+9x=3x(2x+3)$. A trinomial that appears unfactorable often becomes straightforward once the common factor is removed; skipping this step is the leading reason a perfectly factorable expression is judged prime. Then, for $x^2+bx+c$, find **two numbers that multiply to $c$ and add to $b$** — these are the constants in $(x+\\square)(x+\\square)$.",
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
    content: "The backward direction carries most of the value. A difference of two squares with no middle term factors immediately: $x^2-49=(x+7)(x-7)$. When both end terms are squares and the middle term equals twice the product of their roots, the expression is a perfect square: $x^2+12x+36=(x+6)^2$, since $2\\cdot x\\cdot6=12x$. Recognizing the form and applying the template replaces the longer computation entirely.",
  },

  { type: 'heading', content: 'Identities: matching coefficients' },
  {
    type: 'text',
    content: "The phrase **\"for all values of $x$\"** signals an identity, not an equation to solve. An equation holding at one value of $x$ is solved for that value; holding *for all* $x$ means the two polynomials are the same polynomial, which occurs only when their corresponding terms agree. The method is therefore to **match the coefficients of like terms.** If $x^2+bx+12=(x+3)(x+k)$ for all $x$, expand the right side to $x^2+(3+k)x+3k$: the constants give $3k=12\\Rightarrow k=4$, then $b=3+k=7$.",
  },

  { type: 'heading', content: 'Treating a compound expression as one unit' },
  {
    type: 'text',
    content: "A compound piece such as $(x+y)$ or $(x+1)$ can be handled as a **single unit.** The instinct to break it apart and determine $x$ and $y$ individually is misplaced here, because the unit itself is the quantity the question requests. If $3(x+y)=24$ and the item asks for $x+y$, one division suffices: $x+y=8$ — the individual values are never needed. A repeated unit even factors like a single variable: $6(x+1)^2-5(x+1)=(x+1)\\big[6(x+1)-5\\big]=(x+1)(6x+1)$.",
  },
  {
    type: 'tip',
    content: "To test whether two forms are equivalent, **substitute one number** (avoiding $0$ or $1$) and compare the resulting values. $(x+5)^2$ versus $x^2+25$ at $x=1$: $36$ versus $26$ — not equivalent, and the question is settled.",
  },

  { type: 'heading', content: 'Rational expressions' },
  {
    type: 'text',
    content: "A rational expression is a fraction whose numerator and denominator are polynomials, and it simplifies the way a numeric fraction does: **factor both, then cancel the factors common to the whole numerator and the whole denominator.** $\\dfrac{x^2-9}{x^2+5x+6}=\\dfrac{(x-3)(x+3)}{(x+2)(x+3)}=\\dfrac{x-3}{x+2}$. Cancelling is a division of top and bottom by the same quantity, so only a complete factor qualifies — a term joined by $+$ or $-$ never cancels. Striking the two $x^2$ terms before factoring changes the expression's value; factoring first is what makes the cancellation legitimate.",
  },
  {
    type: 'keyInsight',
    content: "Cancel **factors**, never terms. A cancellation is valid exactly when the numerator and denominator are both written as products and share an identical factor — $\\dfrac{x+6}{6}$ does not simplify, because the $6$ on top is a term, not a factor.",
  },
  {
    type: 'text',
    content: "Addition and subtraction require a common denominator, exactly as with numeric fractions: convert each fraction, combine the numerators, and keep the shared denominator. $\\dfrac{1}{x}+\\dfrac{2}{x+1}=\\dfrac{x+1}{x(x+1)}+\\dfrac{2x}{x(x+1)}=\\dfrac{3x+1}{x(x+1)}$. The product of the two denominators always serves as a common denominator. Adding tops and bottoms separately — $\\frac{1}{x}+\\frac{2}{x+1}\\ne\\frac{3}{2x+1}$ — is the error the wrong choices are built from.",
  },
  {
    type: 'text',
    content: "Division by a fraction is multiplication by its reciprocal: $\\dfrac{a}{b}\\div\\dfrac{c}{d}=\\dfrac{a}{b}\\cdot\\dfrac{d}{c}$. A stacked (complex) fraction states the same thing in different typography — flip the bottom fraction, multiply, and the item becomes an ordinary factor-and-cancel exercise.",
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Which is equivalent to $(3x-2)(x+4)$?\n\n(A) $3x^2+10x-8$\n(B) $3x^2-8$\n(C) $3x^2+14x-8$',
    steps: [
      { label: 'Form all four products', content: "Four products: $3x\\cdot x=3x^2$, $3x\\cdot4=12x$, $-2\\cdot x=-2x$, $-2\\cdot4=-8$." },
      { label: 'Combine the middle terms', content: "$12x-2x=10x$, so the result is $3x^2+10x-8$." },
      { label: 'Answer', content: "**(A).** Choice (B) omits the middle term — the firsts-and-lasts error offered as a choice; (C) combines the cross products incorrectly." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: '$16x^2-9$ can be written as $(4x+a)(4x+b)$ for constants $a,b$. Find $a\\cdot b$.',
    steps: [
      { label: 'Identify the form', content: "Two squares subtracted, no middle term: $(4x)^2-3^2$. Difference of squares." },
      { label: 'Apply the template backward', content: "$(4x+3)(4x-3)$, so $a=3$, $b=-3$." },
      { label: 'Answer the question asked', content: "$a\\cdot b=(3)(-3)=\\mathbf{-9}$ — the product, not the individual constants. Confirm the requested quantity before answering." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: '$6x^2+cx-20=(2x+5)(3x+d)$ is true for all $x$. Find $c$.',
    steps: [
      { label: 'Recognize the identity', content: "\"For all $x$\" indicates an identity: match coefficients rather than solve." },
      { label: 'Match the constant', content: "The constant term of the product is $5d$, which must equal $-20$, so $d=-4$." },
      { label: 'Match the middle', content: "The $x$-term is $2x\\cdot d+5\\cdot3x=(2d+15)x$. With $d=-4$: $2(-4)+15=7$, so $c=\\mathbf{7}$." },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Which is equivalent to $9x^2+12x+4$?\n\n(A) $(3x+2)^2$\n(B) $(3x+4)^2$\n(C) $(9x+2)^2$',
    steps: [
      { label: 'Check the ends', content: "Both outer terms are squares: $9x^2=(3x)^2$ and $4=2^2$, suggesting a perfect square." },
      { label: 'Check the middle', content: "Twice the product of $3x$ and $2$ is $2\\cdot3x\\cdot2=12x$, which matches the middle term — the expression is a perfect square." },
      { label: 'Answer', content: "**(A) $(3x+2)^2$.** (C) uses $9x$ instead of $\\sqrt{9x^2}=3x$; (B) fails the twice-the-product check ($2\\cdot3x\\cdot4=24x\\ne12x$)." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Which expression is equivalent to $\\dfrac{x^2-4}{x^2+3x+2}\\div\\dfrac{x-2}{x+3}$?',
    steps: [
      { label: 'Rewrite as multiplication by the reciprocal', content: "Division by a fraction flips it: $\\dfrac{x^2-4}{x^2+3x+2}\\cdot\\dfrac{x+3}{x-2}$." },
      { label: 'Factor every polynomial', content: "$x^2-4=(x-2)(x+2)$ and $x^2+3x+2=(x+1)(x+2)$, giving $\\dfrac{(x-2)(x+2)}{(x+1)(x+2)}\\cdot\\dfrac{x+3}{x-2}$." },
      { label: 'Cancel whole factors', content: "$(x+2)$ cancels top and bottom, then $(x-2)$ cancels across the product. What remains is $\\dfrac{x+3}{x+1}$ — every cancellation removed a complete factor, never a term." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Factor $x^2-2x-15$ completely. What pair drives it?',
    answer: "**$(x-5)(x+3)$.** The pair must multiply to $-15$ and add to $-2$: that is $-5$ and $+3$. The negative constant indicates opposite signs, and the negative sum indicates that the larger number ($5$) carries the minus sign.",
  },
  {
    type: 'checkpointQuestion',
    question: 'You are told $x+y=6$ and $xy=4$. What is $x^2+y^2$?',
    answer: "**$28$.** Apply the square-of-a-sum template in reverse: $x^2+y^2=(x+y)^2-2xy=6^2-2(4)=36-8=28$. Treating $x+y$ and $xy$ as single units makes the individual values of $x$ and $y$ unnecessary.",
  },
  {
    type: 'checkpointQuestion',
    question: 'Expand $(2x-5)^2$. What is the middle term, and why is it negative?',
    answer: "**$4x^2-20x+25$.** This is a square of a difference: the ends are $(2x)^2=4x^2$ and $(-5)^2=25$, and the middle is twice the product, $2\\cdot2x\\cdot(-5)=-20x$. The middle term is negative because the $-5$ carries its sign into that product — squaring a difference changes the sign of the middle term only.",
  },

  {
    type: 'text',
    content: "**In summary:** identify the direction the item requires; expand by forming every pairwise product, or factor by removing the GCF and reading the form; apply the three templates in both directions; on \"for all $x$,\" match coefficients; and simplify rational expressions by factoring first and cancelling only whole factors. Recognition precedes computation.",
  },
];
