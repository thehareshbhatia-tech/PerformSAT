/**
 * Learn lesson body — Number Foundations (Math).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js): practiced-tutor
 * register — developed 2-5 sentence paragraphs with connective tissue; every rule
 * earns its "because"; student-psychology named concretely; math teaching is
 * example-led; varied rhythm, no aphorism-per-block. Bans carried from v3: no
 * analogies, no pep talk, no exclamation marks, no emojis, no
 * test-personification. All v3 teaching claims preserved.
 *
 * COMPOSED MODE (2026-07-18): chapterOpener lede + auto-numbered
 * sections/examples/figures + aside margin-notes + summary close
 * (exemplar: bodies/mPercents.js).
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
    type: 'chapterOpener',
    lede: "Everything in the math chapters ahead rests on a small amount of quiet arithmetic — fraction operations, negative-number sign rules, order of operations. These rarely get questions of their own, but they run underneath nearly every algebra, rate, and geometry item, so when one of them slips mid-problem, the miss gets blamed on the topic sitting on top. That's also why most errors labeled careless aren't careless at all. Each is a specific, predictable slip, and each slip has a working habit that prevents it — this chapter is those habits.",
  },

  { type: 'heading', content: 'Adding and subtracting fractions' },
  {
    type: 'text',
    content: "Start with the smallest question that goes wrong: what is $\\frac{1}{2} + \\frac{1}{3}$? The route that tempts nearly everyone is straight across — add the tops, add the bottoms — which produces $\\frac{2}{5}$. But $\\frac{2}{5}$ is *less* than the $\\frac{1}{2}$ you started with, so adding a positive amount somehow shrank the total; the shortcut can't be right. The real obstacle is that halves and thirds are pieces of different sizes, and they can no more be added as written than 2 feet and 3 inches can be added without converting.",
  },
  {
    type: 'text',
    content: "A common denominator is the conversion: rewrite both fractions in pieces of one size — sixths, here — and the sum is $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$. Once the pieces match, addition is just counting them, which is why only the numerators combine. The denominator stays put because it names the unit being counted, and units don't add.",
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "Straight across stays tempting for a reason: it's exactly how *multiplication* works, and the two rules blur under time pressure. The tell that it happened is a denominator that changed during an addition or subtraction — when one shows up in your own work, this is the error to suspect.",
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
    content: "Multiplication is the operation that genuinely goes straight across: numerator times numerator over denominator times denominator, cancelling shared factors before multiplying so the numbers stay small. Division is one rewrite away. Dividing by a fraction is multiplying by its reciprocal — and the rewrite is legitimate because $\\div \\frac{3}{4}$ asks how many three-quarters fit inside the dividend, and inverting the fraction answers exactly that question.",
  },
  {
    type: 'text',
    content: "The detail that decides these questions is *which* fraction gets inverted: the **second** one, the divisor. Students who invert the first fraction instead, or who invert and then still divide, have answered a different question — and the result looks plausible enough to survive a glance.",
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
    content: "What is $(-2)(-3)(-5)$? Tracking the sign through each pairing invites a slip at every step, so don't track it at all. Run the arithmetic on the sizes first, as if every number were positive — $2 \\times 3 \\times 5 = 30$ — then settle the sign once at the end by counting the negative factors: an even count makes the result positive, an odd count makes it negative. Here three factors are negative, an odd count, so the product is $-30$. Why does counting work? Because negatives cancel in pairs, and only an unpaired negative survives to the answer.",
  },
  {
    type: 'text',
    content: "That's the whole rule for multiplication and division — no step-by-step sign tracking required. Subtraction brings its own trap: $a - (-b)$ equals $a + b$, and the reliable habit is to rewrite it in that form before computing anything. Read quickly, the double minus tends to collapse into a single minus — that's how $8 - (-3)$ turns into $5$ instead of $11$. The number line confirms the direction: subtracting a negative moves the result to the right.",
  },

  { type: 'heading', content: 'Distributing a negative sign' },
  {
    type: 'text',
    content: "A negative sign in front of parentheses distributes to every term inside — each term changes sign, then the parentheses come off. The term that gets missed is almost always the last one, and there's a reason it's the last one: the minus visually attaches to the first term it touches, so $a - (b - c)$ gets written as $a - b - c$ when the correct result is $a - b + c$. The fix is a targeted check. After distributing, look at the final term specifically — if it kept its original sign, the distribution stopped early.",
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
    content: "Evaluate $2 + 3 \\times 4$. Reading order says $20$; the correct value is $14$, because an expression doesn't resolve left to right — it resolves in layers:",
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
    content: "The costliest case in this topic puts a negative sign next to an exponent. In $-3^2$, the exponent applies to the $3$ before the negation does, so $-3^2 = -9$ while $(-3)^2 = 9$ — two values separated by nothing but a pair of parentheses. The incorrect one routinely appears among the answer choices.",
  },
  {
    type: 'aside',
    kind: 'remember',
    content: "When you substitute a negative value, enclose it in parentheses: $x = -3$ goes into $x^2$ as $(-3)^2 = 9$. Written bare, $-3^2$ silently computes to $-9$. The parentheses aren't decoration — they're what keeps the sign inside the squaring.",
  },

  { type: 'heading', content: 'The fraction bar as a grouping symbol' },
  {
    type: 'text',
    content: "A fraction bar groups everything above it and everything below it, even though no parentheses appear in print: $\\dfrac{8+4}{2+2}$ means $(8+4) \\div (2+2) = 3$. Type the same expression into a calculator left to right, though — $8 + 4 \\div 2 + 2$ — and it evaluates to $12$. Desmos computes exactly what you type, so the parentheses the bar implies have to be entered explicitly; that grouping is the one step a calculator can't supply.",
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
    content: "Which is smaller, $-9$ or $-2$? The digit comparison — $9$ is the bigger digit — pulls toward the wrong answer, because on the negative side a bigger digit means farther from zero to the *left*, which is smaller. The number line settles it: **the number further left is smaller**, so $-9 < -2$. Whenever a comparison involves a negative, place both numbers on the line and read left to right instead of comparing digit sizes.",
  },
  {
    type: 'text',
    content: "Distance is the number line's other question, and confusing the two turns a finished problem into a miss at the last step. The gap between two numbers, $|a - b|$, is never negative — subtracting in either order gives the same size gap. One related fact rides along: the midpoint of two numbers is their average, the point equally far from both.",
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
    content: "The coordinate plane extends the number line into two dimensions: a horizontal **x-axis** and a vertical **y-axis** crossing at the **origin**, the point $(0, 0)$. Every point gets an ordered pair $(x, y)$ — horizontal position first, vertical second — and the order is fixed because it carries the meaning: $(3, 5)$ lies 3 right and 5 up, while $(5, 3)$ lies 5 right and 3 up. Same two numbers, two different points.",
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
    content: "The axes divide the plane into four **quadrants**, numbered counterclockwise from the upper right, and each quadrant matches one combination of coordinate signs. That correspondence means you can read a point's quadrant from its signs alone, no plotting needed. The one exception: a point with a zero coordinate lies on an axis and belongs to no quadrant.",
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
    type: 'summary',
    title: 'The habits in one place',
    points: [
      'Fractions: **match denominators** before adding or subtracting (combine only the numerators), and **invert the divisor** to divide.',
      'Settle a sign by working with **absolute values first**, then **counting the negative factors**.',
      'Distribute a leading **negative** through every term — then verify the **last** one.',
      'Evaluate **exponents before a leading negative** ($-3^2$ is $-9$), and treat every **fraction bar** as an implied pair of parentheses.',
      'On the number line, **further left is smaller**; in the plane, read and plot $(x, y)$ **in order** — horizontal first, vertical second — with the quadrant set by the pair of signs.',
    ],
  },
];
