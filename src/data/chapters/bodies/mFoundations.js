/**
 * Learn lesson body — Number Foundations (Math).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
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
    content: "Fraction arithmetic, negative-number sign rules, and order of operations rarely receive questions of their own, but they run underneath nearly every algebra, rate, and geometry item, so when one of them slips, the miss is usually attributed to the topic sitting on top. Most errors labeled careless are not careless at all: each is a specific, predictable slip, and each slip is prevented by a definite working habit.",
  },

  { type: 'heading', content: 'Adding and subtracting fractions' },
  {
    type: 'text',
    content: "The fractions $\\frac{1}{2}$ and $\\frac{1}{3}$ cannot be added as written, for the same reason that 2 feet and 3 inches cannot be added without converting: the pieces are of different sizes. A common denominator rewrites both fractions in pieces of a single size — sixths, here — and once the pieces match, addition is a matter of counting them: add the numerators and keep the denominator. The denominator names the unit being counted, and units do not add.",
  },
  {
    type: 'text',
    content: "The incorrect shortcut $\\frac{a}{b} + \\frac{c}{d} = \\frac{a+c}{b+d}$ is tempting because combining straight across is exactly how multiplication works. Addition follows the other rule: match the denominators first, then combine only the numerators. A denominator that changed during an addition or subtraction is the sign of this error.",
  },
  {
    type: 'keyInsight',
    content: 'To add or subtract fractions, find a common denominator first, then combine the numerators and keep the denominator unchanged. Combining straight across — numerator with numerator, denominator with denominator — is valid for multiplication only.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Compute $\\dfrac{3}{4} - \\dfrac{2}{3}$.',
    steps: [
      { label: 'Convert to a common denominator', content: 'Both fractions convert to twelfths: $\\frac{3}{4} = \\frac{9}{12}$ and $\\frac{2}{3} = \\frac{8}{12}$.' },
      { label: 'Subtract the numerators', content: '$\\frac{9}{12} - \\frac{8}{12} = \\frac{1}{12}$. The denominator remains $12$ — it names the size of the pieces and does not enter the arithmetic.' },
    ],
  },

  { type: 'heading', content: 'Multiplying and dividing fractions' },
  {
    type: 'text',
    content: "Multiplication proceeds straight across: numerator times numerator over denominator times denominator. Cancel shared factors before multiplying so the numbers stay small. Division is one rewrite away: dividing by a fraction is equivalent to multiplying by its reciprocal, because $\\div \\frac{3}{4}$ asks how many three-quarters fit inside the dividend, and inverting the fraction answers exactly that. Invert the second fraction — the divisor — and then multiply. Inverting the first fraction instead, or inverting and then still dividing, answers a different question.",
  },
  {
    type: 'tip',
    content: "Convert any mixed number to an improper fraction before computing: $2\\frac{1}{2}$ becomes $\\frac{5}{2}$. Mixed form places an addition where a single factor belongs, so it multiplies incorrectly — and the free-response answer field cannot accept it: entered as $21/2$, it is read as twenty-one halves.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Compute $2\\frac{1}{2} \\div \\dfrac{3}{4}$.',
    steps: [
      { label: 'Convert the mixed number', content: '$2\\frac{1}{2} = \\frac{5}{2}$. All later work uses the improper form.' },
      { label: 'Invert the divisor', content: 'Dividing by $\\frac{3}{4}$ is multiplying by $\\frac{4}{3}$: the expression becomes $\\frac{5}{2} \\times \\frac{4}{3}$.' },
      { label: 'Cancel, then multiply', content: 'The $2$ and the $4$ share a factor of $2$: $\\frac{5}{1} \\times \\frac{2}{3} = \\frac{10}{3}$. Cancelling first keeps every intermediate number small.' },
    ],
  },

  { type: 'heading', content: 'Sign rules for negative numbers' },
  {
    type: 'text',
    content: "Carry out an involved computation in two passes: work with the absolute values first, then determine the sign once at the end. For multiplication and division, the sign follows a parity count — an even number of negative factors gives a positive result, an odd number gives a negative one. $(-2)(-3)(-5)$ contains three negative factors, an odd count, so the product is $-30$. This removes any need to track the sign step by step.",
  },
  {
    type: 'text',
    content: "Subtraction of a negative deserves its own rule: $a - (-b)$ equals $a + b$, and the reliable habit is to rewrite it in that form before computing. Read quickly, the double minus tends to collapse into a single minus — the mechanism by which $8 - (-3)$ is computed as $5$ instead of $11$. The number line confirms the correct direction: subtracting a negative moves the result to the right.",
  },

  { type: 'heading', content: 'Distributing a negative sign' },
  {
    type: 'text',
    content: "A negative sign in front of parentheses distributes to every term inside: each term changes sign, and the parentheses are then removed. The term most often missed is the last one — the minus visually attaches to the first term, so $a - (b - c)$ is frequently written as $a - b - c$ when the correct result is $a - b + c$. After distributing, check the final term specifically: if it kept its original sign, the distribution stopped early.",
  },
  {
    type: 'trapCard',
    wrong: '$7 - (2x - 5) = 7 - 2x - 5 = 2 - 2x$',
    correction: 'The negative distributes to both terms: $7 - 2x + 5 = 12 - 2x$. The $-5$ inside becomes $+5$ — and the last term is the one to verify.',
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Simplify $9 - (2x - 7) + 3x$.',
    steps: [
      { label: 'Distribute the negative', content: '$-(2x - 7)$ becomes $-2x + 7$: the expression is now $9 - 2x + 7 + 3x$.' },
      { label: 'Combine', content: 'Constants: $9 + 7 = 16$. The $x$ terms: $-2x + 3x = x$. Result: $x + 16$.' },
      { label: 'Check the last term', content: 'The $-7$ inside emerged as $+7$ — its sign changed, so the distribution was complete.' },
    ],
  },

  { type: 'heading', content: 'Order of operations: exponents before negation' },
  {
    type: 'text',
    content: "An expression evaluates in layers: grouping first, then exponents, then multiplication and division left to right, then addition and subtraction left to right. Thus $2 + 3 \\times 4$ is $14$, not $20$ — the multiplication takes precedence over reading order. The costliest case involves a negative sign: in $-3^2$, the exponent applies to the $3$ before the negation does, so $-3^2 = -9$ while $(-3)^2 = 9$. The two values differ by a single pair of parentheses, and the incorrect one routinely appears among the answer choices.",
  },
  {
    type: 'callout',
    content: "When substituting a negative value, enclose it in parentheses: $x = -3$ goes into $x^2$ as $(-3)^2 = 9$. Written bare, $-3^2$ silently computes to $-9$. The parentheses are not decoration — they are what keeps the sign inside the squaring.",
  },

  { type: 'heading', content: 'The fraction bar as a grouping symbol' },
  {
    type: 'text',
    content: "A fraction bar groups everything above it and everything below it, even though no parentheses appear in print. $\\dfrac{8+4}{2+2}$ means $(8+4) \\div (2+2) = 3$; entered into a calculator left to right as $8 + 4 \\div 2 + 2$, it evaluates to $12$. Radicals group in the same way — everything under the bar resolves first. When a stacked expression looks ambiguous, rewrite it with the parentheses the bar implies, then evaluate from the inside out. This grouping is the one step a calculator cannot supply: Desmos computes exactly what is typed, so the parentheses must be entered explicitly.",
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Evaluate $\\dfrac{-3^2 + (-3)^2}{5 - (-4)}$.',
    steps: [
      { label: 'Evaluate the numerator', content: '$-3^2 = -(3^2) = -9$ — the exponent applies to the $3$ before the negation. $(-3)^2 = 9$ — the parentheses place the sign inside the squaring. Numerator: $-9 + 9 = 0$.' },
      { label: 'Evaluate the denominator', content: '$5 - (-4)$ rewrites as $5 + 4 = 9$ — subtracting a negative is adding.' },
      { label: 'Divide', content: '$\\frac{0}{9} = 0$. A zero numerator makes the entire fraction zero. (A zero denominator would instead make the expression undefined — a different situation entirely.)' },
    ],
  },

  { type: 'heading', content: 'Order and distance on the number line' },
  {
    type: 'text',
    content: "The number line answers two distinct questions, and conflating them converts a finished problem into a miss at the final step. Order: the number further left is smaller. Thus $-9 < -2$, even though $9$ is the larger digit — on the negative side, a larger digit means farther from zero to the left, which is smaller. Whenever a comparison involves a negative, place both numbers on the line and read left to right rather than comparing digit sizes. Distance is the other question: the gap between two numbers, $|a - b|$, is never negative — subtracting in either order yields the same size gap. A related fact: the midpoint of two numbers is their average, the point equally far from both.",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The temperature at midnight is $-9^{\\circ}\\text{C}$; by noon it reaches $-2^{\\circ}\\text{C}$. Did it warm up or cool down, and by how many degrees?',
    steps: [
      { label: 'Compare positions', content: '$-9$ sits to the left of $-2$, so $-9$ is the colder reading. Moving from $-9$ to $-2$ is moving right: it warmed up.' },
      { label: 'Compute the distance', content: 'The gap is $|-2 - (-9)| = |-2 + 9| = 7$ degrees. Subtracting in the other order gives $-7$, but distance is the size of the gap: $7$ in either case.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Compute $\\dfrac{2}{3} + \\dfrac{1}{4}$.',
    answer: '**$\\frac{11}{12}$.** Convert to a common denominator first: $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$. Adding straight across — $\\frac{2+1}{3+4} = \\frac{3}{7}$ — combines pieces of different sizes; straight-across combination is valid for multiplication only.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Simplify $12 - (5 - x)$. Then evaluate $-x^2$ at $x = 4$.',
    answer: '**$7 + x$, and $-16$.** The negative distributes to both terms: $12 - 5 + x = 7 + x$ — the inside $-x$ becomes $+x$. And $-x^2$ at $x = 4$ is $-(4^2) = -16$: the exponent applies to the $4$ before the negation. An answer of $16$ indicates the sign was placed inside the squaring.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Which is smaller, $-12$ or $-5$? And what is the distance between them?',
    answer: '**$-12$ is smaller; the distance is $7$.** $-12$ lies further left on the number line, and the number further left is smaller — the larger digit means only greater distance from zero. Distance: $|-12 - (-5)| = |-7| = 7$, never negative and the same in either order.',
  },

  {
    type: 'text',
    content: "**In summary:** match denominators before adding or subtracting, and combine only the numerators. Invert the divisor to divide. Work with absolute values first and settle the sign by counting negative factors. Distribute a leading negative through every term and verify the last one. Evaluate exponents before applying a leading negative: $-3^2$ is $-9$. Treat every fraction bar as an implied pair of parentheses. And read the number line left to right: further left is smaller.",
  },
];
