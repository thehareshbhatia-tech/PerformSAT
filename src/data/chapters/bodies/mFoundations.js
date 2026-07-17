/**
 * Learn lesson body — Number Foundations (Math).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 *
 * Scope: the basic-arithmetic primer the rest of the math section quietly
 * assumes — fraction operations, negative-number sign rules, order of
 * operations (including the fraction-bar grouping trap), number-line
 * order vs distance, and the coordinate plane. Solving equations starts
 * in the NEXT lesson.
 */

export const mFoundationsBlocks = [
  {
    type: 'text',
    content: "Everything in the math chapters ahead rests on a small amount of quiet arithmetic. Fraction operations, negative-number sign rules, and order of operations rarely get questions of their own — but they run underneath nearly every algebra, rate, and geometry item.",
  },
  {
    type: 'text',
    content: "When one of them slips, the miss usually gets blamed on the topic sitting on top. Most errors labeled careless aren't careless at all: each is a specific, predictable slip, and each slip has a working habit that prevents it.",
  },

  { type: 'heading', content: 'Adding and subtracting fractions' },
  {
    type: 'text',
    content: "You can't add $\\frac{1}{2}$ and $\\frac{1}{3}$ as written, for the same reason you can't add 2 feet and 3 inches without converting: the pieces are different sizes.",
  },
  {
    type: 'text',
    content: "A common denominator rewrites both fractions in pieces of one size — sixths, here. Once the pieces match, addition is just counting them.",
  },
  {
    type: 'list',
    title: 'To add or subtract fractions:',
    items: [
      'Match the denominators first.',
      'Add or subtract the numerators only.',
      "Keep the denominator — it names the unit being counted, and units don't add.",
    ],
  },
  {
    type: 'text',
    content: "The shortcut $\\frac{a}{b} + \\frac{c}{d} = \\frac{a+c}{b+d}$ is tempting because straight-across is exactly how multiplication works. Addition follows the other rule — and a denominator that changed during an addition or subtraction is the sign of this error.",
  },
  {
    type: 'keyInsight',
    content: 'Find a common denominator first, then combine the numerators and keep the denominator unchanged. Combining straight across — numerator with numerator, denominator with denominator — is valid for multiplication only.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Compute $\\dfrac{3}{4} - \\dfrac{2}{3}$.',
    steps: [
      { label: 'Convert to a common denominator', content: 'Both fractions convert to twelfths: $\\frac{3}{4} = \\frac{9}{12}$ and $\\frac{2}{3} = \\frac{8}{12}$.' },
      { label: 'Subtract the numerators', content: "$\\frac{9}{12} - \\frac{8}{12} = \\frac{1}{12}$. The denominator stays $12$ — it names the size of the pieces and doesn't enter the arithmetic." },
    ],
  },

  { type: 'heading', content: 'Multiplying and dividing fractions' },
  {
    type: 'text',
    content: "Multiplication goes straight across: numerator times numerator over denominator times denominator. Cancel shared factors before multiplying so the numbers stay small.",
  },
  {
    type: 'text',
    content: "Division is one rewrite away: dividing by a fraction is multiplying by its reciprocal. That's because $\\div \\frac{3}{4}$ asks how many three-quarters fit inside the dividend, and inverting the fraction answers exactly that.",
  },
  {
    type: 'text',
    content: "Invert the **second** fraction — the divisor — then multiply. Inverting the first fraction instead, or inverting and then still dividing, answers a different question.",
  },
  {
    type: 'tip',
    content: "Convert any mixed number to an improper fraction before computing: $2\\frac{1}{2}$ becomes $\\frac{5}{2}$. Mixed form hides an addition where a single factor belongs, so it multiplies incorrectly — and the free-response answer field can't accept it: entered as $21/2$, it reads as twenty-one halves.",
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
    content: "For multiplication and division, work in two passes: handle the sizes first, then settle the sign once at the end.",
  },
  {
    type: 'steps',
    title: 'Settling the sign in two passes',
    items: [
      '**Work with absolute values first.** Run the arithmetic as if every number were positive.',
      '**Count the negative factors.** An even count makes the result positive; an odd count makes it negative.',
      '**Attach the sign once, at the end.** $(-2)(-3)(-5)$ has three negative factors — an odd count — so the product is $-30$.',
    ],
  },
  {
    type: 'text',
    content: "That's the whole rule for multiplication and division. No step-by-step sign tracking required.",
  },
  {
    type: 'text',
    content: "Subtracting a negative gets its own rule: $a - (-b)$ equals $a + b$. The reliable habit is to rewrite it in that form before computing anything.",
  },
  {
    type: 'text',
    content: "Read quickly, the double minus tends to collapse into a single minus — that's how $8 - (-3)$ turns into $5$ instead of $11$. The number line confirms the direction: subtracting a negative moves the result to the right.",
  },

  { type: 'heading', content: 'Distributing a negative sign' },
  {
    type: 'text',
    content: "A negative sign in front of parentheses distributes to every term inside: each term changes sign, then the parentheses come off.",
  },
  {
    type: 'text',
    content: "The last term is the one most often missed. The minus visually attaches to the first term, so $a - (b - c)$ gets written as $a - b - c$ when the correct result is $a - b + c$.",
  },
  {
    type: 'text',
    content: "After distributing, check the final term specifically. If it kept its original sign, the distribution stopped early.",
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
    content: "An expression evaluates in layers:",
  },
  {
    type: 'list',
    items: [
      'Grouping symbols first.',
      'Then exponents.',
      'Then multiplication and division, left to right.',
      'Then addition and subtraction, left to right.',
    ],
  },
  {
    type: 'text',
    content: "So $2 + 3 \\times 4$ is $14$, not $20$ — the multiplication outranks reading order.",
  },
  {
    type: 'text',
    content: "The costliest case involves a negative sign. In $-3^2$, the exponent applies to the $3$ before the negation does, so $-3^2 = -9$ while $(-3)^2 = 9$.",
  },
  {
    type: 'text',
    content: "The two values differ by a single pair of parentheses, and the incorrect one routinely appears among the answer choices.",
  },
  {
    type: 'callout',
    content: "When you substitute a negative value, enclose it in parentheses: $x = -3$ goes into $x^2$ as $(-3)^2 = 9$. Written bare, $-3^2$ silently computes to $-9$. The parentheses aren't decoration — they're what keeps the sign inside the squaring.",
  },

  { type: 'heading', content: 'The fraction bar as a grouping symbol' },
  {
    type: 'text',
    content: "A fraction bar groups everything above it and everything below it, even though no parentheses appear in print. $\\dfrac{8+4}{2+2}$ means $(8+4) \\div (2+2) = 3$.",
  },
  {
    type: 'text',
    content: "Typed into a calculator left to right as $8 + 4 \\div 2 + 2$, the same expression evaluates to $12$. Desmos computes exactly what you type, so the parentheses the bar implies have to be entered explicitly — that grouping is the one step a calculator can't supply.",
  },
  {
    type: 'text',
    content: "Radicals group the same way — everything under the bar resolves first. When a stacked expression looks ambiguous, rewrite it with the parentheses the bar implies, then evaluate from the inside out.",
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
    content: "The number line answers two different questions, and mixing them up turns a finished problem into a miss at the last step.",
  },
  {
    type: 'text',
    content: "**Order:** the number further left is smaller. So $-9 < -2$, even though $9$ is the bigger digit — on the negative side, a bigger digit means farther from zero to the left, which is smaller.",
  },
  {
    type: 'text',
    content: "Whenever a comparison involves a negative, place both numbers on the line and read left to right instead of comparing digit sizes.",
  },
  {
    type: 'text',
    content: "**Distance** is the other question: the gap between two numbers, $|a - b|$, is never negative — subtracting in either order gives the same size gap. One related fact: the midpoint of two numbers is their average, the point equally far from both.",
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The temperature at midnight is $-9^{\\circ}\\text{C}$; by noon it reaches $-2^{\\circ}\\text{C}$. Did it warm up or cool down, and by how many degrees?',
    steps: [
      { label: 'Compare positions', content: '$-9$ sits to the left of $-2$, so $-9$ is the colder reading. Moving from $-9$ to $-2$ is moving right: it warmed up.' },
      { label: 'Compute the distance', content: 'The gap is $|-2 - (-9)| = |-2 + 9| = 7$ degrees. Subtracting in the other order gives $-7$, but distance is the size of the gap: $7$ either way.' },
    ],
  },

  { type: 'heading', content: 'The coordinate plane' },
  {
    type: 'text',
    content: "The coordinate plane extends the number line into two dimensions: a horizontal **x-axis** and a vertical **y-axis** crossing at the **origin**, the point $(0, 0)$.",
  },
  {
    type: 'text',
    content: "Every point gets an ordered pair $(x, y)$ — horizontal position first, vertical second. The order is fixed and matters: $(3, 5)$ lies 3 right and 5 up, while $(5, 3)$ lies 5 right and 3 up — two different points.",
  },
  {
    type: 'steps',
    title: 'Plotting a point',
    items: [
      '**Start at the origin.**',
      '**Move horizontally** by the first coordinate — right if positive, left if negative.',
      '**Move vertically** by the second — up if positive, down if negative.',
    ],
  },
  {
    type: 'text',
    content: "To read a point's coordinates off a graph, run the same trip in reverse: trace straight down or up to the x-axis for the first coordinate, and straight across to the y-axis for the second.",
  },
  {
    type: 'text',
    content: "The axes divide the plane into four **quadrants**, numbered counterclockwise from the upper right. Each quadrant matches one combination of coordinate signs, so you can read a point's quadrant from its signs alone — no plotting needed.",
  },
  {
    type: 'text',
    content: "A point with a zero coordinate lies on an axis and belongs to no quadrant.",
  },
  {
    type: 'table',
    headers: ['Quadrant', 'Location', 'Signs of $(x, y)$'],
    rows: [
      ['I', 'upper right', '$(+,\\ +)$'],
      ['II', 'upper left', '$(-,\\ +)$'],
      ['III', 'lower left', '$(-,\\ -)$'],
      ['IV', 'lower right', '$(+,\\ -)$'],
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'In which quadrant does the point $(-4, 3)$ lie, and how is it plotted?',
    steps: [
      { label: 'Read the coordinates in order', content: 'The first coordinate is horizontal: $-4$ means 4 units left of the origin. The second is vertical: $3$ means 3 units up.' },
      { label: 'Classify by signs', content: 'The sign pair is $(-,\\ +)$ — left and up — which places the point in the upper left: Quadrant II. Reversing the order and plotting $(3, -4)$ instead lands in Quadrant IV, a different point entirely.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'Compute $\\dfrac{2}{3} + \\dfrac{1}{4}$.',
    answer: '**$\\frac{11}{12}$.** Convert to a common denominator first: $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$. Adding straight across — $\\frac{2+1}{3+4} = \\frac{3}{7}$ — combines pieces of different sizes; straight-across combination works for multiplication only.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Simplify $12 - (5 - x)$. Then evaluate $-x^2$ at $x = 4$.',
    answer: '**$7 + x$, and $-16$.** The negative distributes to both terms: $12 - 5 + x = 7 + x$ — the inside $-x$ becomes $+x$. And $-x^2$ at $x = 4$ is $-(4^2) = -16$: the exponent applies to the $4$ before the negation. An answer of $16$ means the sign slipped inside the squaring.',
  },
  {
    type: 'checkpointQuestion',
    question: 'Which is smaller, $-12$ or $-5$? And what is the distance between them?',
    answer: '**$-12$ is smaller; the distance is $7$.** $-12$ lies further left on the number line, and further left is smaller — the bigger digit only means greater distance from zero. Distance: $|-12 - (-5)| = |-7| = 7$, never negative and the same in either order.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A point lies 5 units to the left of the origin and 2 units below it. What are its coordinates, and in which quadrant does it lie?',
    answer: '**$(-5, -2)$, Quadrant III.** Left of the origin makes the first coordinate negative, and below it makes the second negative. The sign pair $(-,\\ -)$ belongs to the lower left — Quadrant III. Writing $(-2, -5)$ instead swaps the axes: the horizontal position always comes first.',
  },

  {
    type: 'list',
    title: '**The habits in one place:**',
    items: [
      'Match denominators before adding or subtracting; combine only the numerators.',
      'Invert the divisor to divide fractions.',
      'Work with absolute values first; settle the sign by counting negative factors.',
      'Distribute a leading negative through every term — then verify the last one.',
      'Evaluate exponents before a leading negative: $-3^2$ is $-9$.',
      'Treat every fraction bar as an implied pair of parentheses.',
      'Read the number line left to right: further left is smaller.',
      'Read and plot $(x, y)$ in order — horizontal first, vertical second — with the quadrant set by the pair of signs.',
    ],
  },
];
