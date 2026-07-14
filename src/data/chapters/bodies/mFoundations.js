/**
 * Learn lesson body — Number Foundations (Math).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar: mLinearEquations):
 * coaching direct-address — talks TO the student, anticipates the mistake
 * before it happens, everyday anchor first and rule second, concrete decision
 * rules ("tops only, never bottoms"). Lean structure: short headed sections,
 * worked examples, checkpoints. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 *
 * Scope: the basic-arithmetic primer the rest of the math section quietly
 * assumes — fraction operations, negative-number sign rules, order of
 * operations (including the fraction-bar grouping trap), and number-line
 * order vs distance. Solving equations starts in the NEXT lesson.
 */

export const mFoundationsBlocks = [
  {
    type: 'text',
    content: "None of this gets its own question — and that's exactly how it costs you. Fractions, negative signs, and order of operations run underneath every algebra, rate, and geometry item on the test, so when one of them slips, the miss gets blamed on the topic sitting on top. Most \"careless errors\" aren't careless at all: each one is a specific, predictable slip, and each slip has a habit that shuts it down for good.",
  },

  { type: 'heading', content: 'Adding fractions: same-size pieces first' },
  {
    type: 'text',
    content: "You can't add $\\frac{1}{2}$ and $\\frac{1}{3}$ as they stand, for the same reason you can't add 2 feet to 3 inches without converting: the pieces are different sizes. A common denominator recuts both fractions into pieces of one size — sixths, here — and once the pieces match, you just count them: add the tops, leave the bottom alone. The bottom is the unit you're counting in, and units don't add.",
  },
  {
    type: 'text',
    content: "The pull toward $\\frac{a}{b} + \\frac{c}{d} = \\frac{a+c}{b+d}$ is real, because straight-across is exactly how multiplication works. Addition is the odd one out: match the denominators first, then touch only the numerators. If your denominator changed during an add or a subtract, that's the slip.",
  },
  {
    type: 'keyInsight',
    content: 'Tops only, never bottoms. To add or subtract fractions: common denominator first, then combine the numerators and keep the denominator. Straight-across belongs to multiplication alone.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Compute $\\dfrac{3}{4} - \\dfrac{2}{3}$.',
    steps: [
      { label: 'Recut into same-size pieces', content: 'Both fractions convert to twelfths: $\\frac{3}{4} = \\frac{9}{12}$ and $\\frac{2}{3} = \\frac{8}{12}$.' },
      { label: 'Subtract the tops', content: '$\\frac{9}{12} - \\frac{8}{12} = \\frac{1}{12}$. The bottom stays $12$ — it names the piece size, so it never joins the arithmetic.' },
    ],
  },

  { type: 'heading', content: 'Multiplying and dividing fractions' },
  {
    type: 'text',
    content: "Multiplication is the friendly one: straight across, top times top over bottom times bottom. Cancel shared factors before you multiply and the numbers stay small enough to trust. Division is one rewrite away: dividing by a fraction means multiplying by its reciprocal, because $\\div \\frac{3}{4}$ asks how many three-quarters fit inside — and flipping answers exactly that. Flip the second fraction, the one you're dividing BY, then multiply. Flip the first one instead, or flip and then still divide, and you've answered a different question.",
  },
  {
    type: 'tip',
    content: "The moment a mixed number appears, convert it: $2\\frac{1}{2}$ becomes $\\frac{5}{2}$ before anything touches it. Mixed form is an addition sitting where a multiplication goes, so it multiplies badly — and the free-response answer box can't accept it anyway. Typed as $21/2$, it reads as twenty-one halves.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Compute $2\\frac{1}{2} \\div \\dfrac{3}{4}$.',
    steps: [
      { label: 'Convert on sight', content: '$2\\frac{1}{2} = \\frac{5}{2}$. No mixed numbers past this point.' },
      { label: 'Flip the divisor', content: 'Dividing by $\\frac{3}{4}$ is multiplying by $\\frac{4}{3}$: the problem is now $\\frac{5}{2} \\times \\frac{4}{3}$.' },
      { label: 'Cancel, then multiply', content: 'The $2$ and the $4$ share a factor of $2$: $\\frac{5}{1} \\times \\frac{2}{3} = \\frac{10}{3}$. Cancelling first kept every number single-digit.' },
    ],
  },

  { type: 'heading', content: 'Negative numbers: size first, sign last' },
  {
    type: 'text',
    content: "Run any messy computation in two passes: work the bare sizes first, then settle the sign once at the end. For multiplying and dividing, the sign is a parity count — an even number of negative factors gives a positive result, an odd number gives a negative one. $(-2)(-3)(-5)$ carries three negatives, an odd count, so it's $-30$. No tracking the sign step by step, no running worry.",
  },
  {
    type: 'text',
    content: "Subtraction sets its own trap: $a - (-b)$ equals $a + b$, and the safe habit is rewriting it that way before computing anything. Say \"minus minus\" out loud and your brain shortens it to one minus — that's how $8 - (-3)$ turns into $5$ instead of $11$. The number line keeps you honest: subtracting a negative moves you to the right.",
  },

  { type: 'heading', content: 'A minus in front of parentheses flips every term' },
  {
    type: 'text',
    content: "Distributing a minus is a full sweep: every term inside changes sign, then the parentheses drop. The term that gets stranded is the last one — the minus visually attaches to the first term, so $a - (b - c)$ comes out as $a - b - c$ when it should be $a - b + c$. After you distribute, check the last term specifically: if it kept its old sign, the sweep stopped early.",
  },
  {
    type: 'trapCard',
    wrong: '$7 - (2x - 5) = 7 - 2x - 5 = 2 - 2x$',
    correction: 'The minus hits both terms: $7 - 2x + 5 = 12 - 2x$. The $-5$ inside flips to $+5$ — and the last term is always the one to double-check.',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Simplify $9 - (2x - 7) + 3x$.',
    steps: [
      { label: 'Sweep every sign', content: '$-(2x - 7)$ becomes $-2x + 7$: the expression is now $9 - 2x + 7 + 3x$.' },
      { label: 'Combine', content: 'Constants: $9 + 7 = 16$. The $x$ terms: $-2x + 3x = x$. Result: $x + 16$.' },
      { label: 'Last-term check', content: 'The $-7$ inside came out as $+7$ — it flipped, so the sweep was complete.' },
    ],
  },

  { type: 'heading', content: 'Exponents grab before the minus does' },
  {
    type: 'text',
    content: "An expression resolves in layers: grouping first, then exponents, then multiply and divide left to right, then add and subtract left to right. So $2 + 3 \\times 4$ is $14$, not $20$ — the multiplication outranks your reading order. The costliest version involves a minus sign: in $-3^2$, the exponent grabs the $3$ before the minus acts, so $-3^2 = -9$ while $(-3)^2 = 9$. Two different numbers, one pair of parentheses apart — and the wrong one is usually printed among the answer choices, waiting.",
  },
  {
    type: 'callout',
    content: "Substituting a negative? Parentheses first, always: $x = -3$ goes into $x^2$ as $(-3)^2 = 9$. Written bare, $-3^2$ silently computes $-9$. The parentheses aren't decoration — they're what keeps the sign inside the squaring.",
  },

  { type: 'heading', content: 'The fraction bar is an invisible parenthesis' },
  {
    type: 'text',
    content: "A fraction bar groups everything above it and everything below it, even though no parentheses are printed. $\\dfrac{8+4}{2+2}$ means $(8+4) \\div (2+2) = 3$; type it into a calculator left to right as $8 + 4 \\div 2 + 2$ and you get $12$. Radicals pull the same trick — everything under the bar resolves first. When a stacked expression looks ambiguous, rewrite it with the parentheses the bar is hiding, then evaluate inside-out. That grouping is also the one skill a calculator can't supply: Desmos computes exactly what you type, so the parentheses have to come from you.",
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Evaluate $\\dfrac{-3^2 + (-3)^2}{5 - (-4)}$.',
    steps: [
      { label: 'Top first, both terms', content: '$-3^2 = -(3^2) = -9$ — the exponent grabs the $3$ before the minus acts. $(-3)^2 = 9$ — the parentheses put the sign inside the squaring. Numerator: $-9 + 9 = 0$.' },
      { label: 'Bottom as its own group', content: '$5 - (-4)$ rewrites as $5 + 4 = 9$ — subtracting a negative is adding.' },
      { label: 'Then divide', content: '$\\frac{0}{9} = 0$. Zero on top makes the whole fraction zero. (Zero on the bottom would make it undefined — a different beast entirely.)' },
    ],
  },

  { type: 'heading', content: 'The number line: left means less' },
  {
    type: 'text',
    content: "The number line answers two different questions, and blurring them turns finished problems into misses at the very last step. Order: further left is smaller, period. That makes $-9 < -2$, even though $9$ feels bigger — on the negative side, a bigger digit means further from zero to the LEFT, which is smaller. Whenever a comparison involves a negative, place both numbers on the line and read left to right; never compare by digit size. Distance is the other question: the gap between two numbers, $|a - b|$, and it's never negative — subtract in either order and the gap comes out the same size. (Bonus fact: the midpoint of two numbers is just their average, the spot equally far from both.)",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The temperature at midnight is $-9^{\\circ}\\text{C}$; by noon it reaches $-2^{\\circ}\\text{C}$. Did it warm up or cool down, and by how many degrees?',
    steps: [
      { label: 'Order first', content: '$-9$ sits to the left of $-2$, so $-9$ is the colder reading. Moving from $-9$ to $-2$ is moving right: it warmed up.' },
      { label: 'Distance next', content: 'The gap is $|-2 - (-9)| = |-2 + 9| = 7$ degrees. Subtracting the other way gives $-7$, but distance is the size of the gap — $7$ either way.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Compute $\\dfrac{2}{3} + \\dfrac{1}{4}$.',
    answer: '**$\\frac{11}{12}$.** Same-size pieces first: $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$. Adding straight across — $\\frac{2+1}{3+4} = \\frac{3}{7}$ — combines mismatched pieces; straight-across is a multiplication move only.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Simplify $12 - (5 - x)$. Then evaluate $-x^2$ at $x = 4$.',
    answer: '**$7 + x$, and $-16$.** The minus sweeps both terms: $12 - 5 + x = 7 + x$ — the inside $-x$ flips to $+x$. And $-x^2$ at $x = 4$ is $-(4^2) = -16$: the exponent grabs the $4$ before the minus acts. If you got $16$, the sign slipped inside the squaring.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Which is smaller, $-12$ or $-5$? And what is the distance between them?',
    answer: '**$-12$ is smaller; the distance is $7$.** $-12$ sits further left, and left means less — the bigger digit only means further from zero. Distance: $|-12 - (-5)| = |-7| = 7$, never negative, same in either order.',
  },

  {
    type: 'text',
    content: "**The move, every time:** match denominators before adding — tops only. Flip the divisor to divide. Work sizes first and settle the sign by counting negatives. Sweep a leading minus through every term and check the last one. Give the exponent first grab: $-3^2$ is $-9$. Treat every fraction bar as parentheses you can't see. And read the number line left to right — left means less.",
  },
];
