/**
 * Learn chapter body — Lines, Angles & Congruence (Geometry).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations
 * (angles as a budget: straight line, around a point, vertical angles) →
 * Stage 2 numbered methods (method → right → wrong → why) → Stage 3
 * on-the-test (decision flow, traps, worked examples, checkpoints,
 * one-page summary). Voice reference: bodies/inequalities.js and
 * bodies/boundaries.js.
 * Concept source: knowledge/graph/math (parallel-lines-two-angle-families,
 * angle-chasing-ritual, triangle-angle-sum-and-exterior-shortcut,
 * congruence-criteria-and-correspondence, area-by-decomposition,
 * scaling-laws-k-k2-k3).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const linesAnglesBlocks = [
  {
    type: 'text',
    content: 'A geometry item hands you a figure crossed with lines, a triangle or two, maybe a shaded region — and asks for an angle, a length, or an area. The good news most students never hear: **this entire chapter runs on angle budgets and one habit.** The budgets are fixed and tiny — a straight line spends $180^\\circ$, a full turn spends $360^\\circ$, a triangle spends $180^\\circ$. The habit is to write every fact you can derive directly onto the figure and keep going until the answer falls out. No memorized vocabulary, no staring and hoping. Every answer here is *provable*, one small deduction at a time.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** Angles as a spendable budget: the straight line, the full turn, and vertical angles — the facts every later method leans on.',
      '**Stage 2 · The methods.** Six numbered methods, each in the same shape: the move, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow that routes each figure to its method, the traps the test sets, worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · Angles as a budget' },
  {
    type: 'text',
    content: 'Almost every geometry answer is a share of a fixed budget, so we start with the budgets. **A straight line is $180^\\circ$.** Any angles that sit side by side along one straight edge must add to $180^\\circ$ — that is what "supplementary" means, and it is the single most-used fact in the chapter. **A full turn around a single point is $360^\\circ$.** Every angle meeting at one shared point, all the way around, adds to $360^\\circ$. These are not formulas to memorize; they are how much a line and a full spin are *worth*, and every deduction spends from one of them.',
  },
  {
    type: 'formula',
    label: 'The two budgets',
    content: '$\\text{straight line} = 180^\\circ \\qquad \\text{around a point} = 360^\\circ$',
    note: 'Angles along one line sum to $180^\\circ$; angles filling the turn around one point sum to $360^\\circ$. A right angle is exactly half a line, $90^\\circ$.',
  },
  {
    type: 'text',
    content: 'One consequence does more work than any other: **vertical angles are equal.** When two lines cross, they make four angles in two facing pairs, and the angles directly across from each other are always equal. The proof is pure budget: if one angle is $x$, the angle beside it along a straight line is $180^\\circ - x$, and the angle across from *that* one is again $180^\\circ - (180^\\circ - x) = x$. So the crossing point holds only two values, $x$ and $180^\\circ - x$, arranged in an X. See a crossing, and you already know half the figure.',
  },
  {
    type: 'diagramRef',
    visualType: 'angleDiagram',
    description: 'Two straight lines crossing at a point, forming an X. The two angles directly across from each other are marked equal (both x); each neighboring angle is 180 minus x. The pattern shows only two distinct values around the crossing.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — read the crossing as two values', content: 'Two lines cross; one angle is marked $70^\\circ$. Its vertical partner (directly across) is also $70^\\circ$; each neighbor along a straight line is $180^\\circ - 70^\\circ = 110^\\circ$. Four angles, two values, done in one glance.', variant: 'right' },
      { label: 'Wrong — treat neighbors as equal', content: 'Calling the angle *next to* the $70^\\circ$ angle another $70^\\circ$. Neighbors share a straight line, so they are supplementary, not equal — the neighbor is $110^\\circ$. Equal angles sit *across* the X, never side by side.', variant: 'wrong' },
    ],
  },
  {
    type: 'keyInsight',
    content: '**Write every derived angle onto the figure the moment you find it.** Geometry on the digital SAT is not a knowledge test — the hard items ask for four to six easy deductions in a row, and the only thing that breaks is working memory. An angle you compute but do not write down is an angle you will recompute or drop. The figure is your scratch paper; fill it in.',
  },
  {
    type: 'callout',
    content: 'One warning that governs the whole chapter: many SAT figures carry the note *"not drawn to scale."* When you see it, never measure or eyeball — a $30^\\circ$ angle may be drawn to look like $60^\\circ$ on purpose. Every value comes from a label or a deduction, never from how the picture looks.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'Two lines cross. One of the four angles measures $124^\\circ$. What are the other three, and which fact gives each?',
    answer: 'The angle across from it (vertical) is $124^\\circ$. Each of the two neighbors is $180^\\circ - 124^\\circ = 56^\\circ$ (straight-line budget). **Why:** a crossing holds only two values — the marked angle and its supplement — arranged so equal angles face each other. Vertical angles equal; neighbors along a line are supplementary.',
  },

  // ── Stage 2 · The methods ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The methods' },
  {
    type: 'text',
    content: 'Six methods cover every lines-and-angles item on the test. Each follows the same shape: the **move**, a **right** example, a **wrong** example, and the **why**.',
  },

  { type: 'heading', content: 'Method 1 — Parallel lines make just two angle sizes' },
  {
    type: 'text',
    content: 'When a single line (a *transversal*) cuts across two **parallel** lines, it creates eight angles — but only **two distinct sizes**. Every acute angle in the picture equals every other acute angle; every obtuse angle equals every other obtuse; and any acute-plus-obtuse pair sums to $180^\\circ$. That is the whole rule, and it retires a pile of vocabulary. Forget whether a pair is "corresponding" or "alternate interior" — those names are all just instances of one fact. Sort each angle into the **small family** or the **big family**: call the small one $x$, and every angle in the figure is either $x$ or $180^\\circ - x$.',
  },
  {
    type: 'formula',
    label: 'Two families, one budget',
    content: '$\\text{small family} = x \\qquad \\text{big family} = 180^\\circ - x$',
    note: 'Same family → equal. Different families → supplementary. Only valid when the lines are actually marked parallel (matching arrowheads or stated in the text).',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — classify by family', content: 'Parallel lines cut by a transversal; one angle is $52^\\circ$ (small family). An angle asked for on the *other* parallel line, also acute, is in the same family → $52^\\circ$. An obtuse angle anywhere in the figure is $180^\\circ - 52^\\circ = 128^\\circ$.', variant: 'right' },
      { label: 'Wrong — apply the rule with no parallel marks', content: 'Using $x$ / $180^\\circ - x$ on two lines that merely *look* parallel but carry no marks. Without parallelism there are no families — each crossing is independent, and only the vertical-angle read is safe. "Looks parallel" is exactly the trap on not-to-scale figures.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'The rule also runs in reverse, and that is the harder question: *which single angle fact would prove two lines are parallel?* Only an equality that pairs angles at **different** crossing points forces parallelism (a corresponding-type or alternate-type match). An equality at the **same** crossing point — vertical angles — is true for *any* two crossing lines, parallel or not, so it proves nothing. When a sufficiency item offers "these vertical angles are equal" as a choice, it is bait: always-true facts cannot certify parallelism.',
  },

  { type: 'heading', content: 'Method 2 — The angle-chasing ritual' },
  {
    type: 'text',
    content: 'Hard geometry items rarely need a new fact; they need the *same* easy facts fired four to six times in sequence. The failure mode is freezing — "I do not see how to get the answer." The cure is to stop trying to see the whole path. **Ask only: what can I compute right now?** Deduce it, write it on the figure, and let the new number unlock the next one. You do not plan the route; the figure hands it to you, one annotation at a time.',
  },
  {
    type: 'steps',
    title: 'The ritual',
    items: [
      '**Annotate the givens.** Mark equal angles with matching arcs and equal sides with matching ticks. If the figure is cramped, redraw it bigger.',
      '**Fire any generator that applies, anywhere** — not just near the target: straight line $= 180^\\circ$, vertical angles equal, angles around a point $= 360^\\circ$, triangle $= 180^\\circ$ (Method 3), isosceles base angles equal, parallel families (Method 1).',
      '**Write every result on the figure the instant you get it.** Unwritten deductions are lost deductions.',
      '**In dense figures, work one triangle at a time**, harvesting a $180^\\circ$ sum or a vertical pair at each intersection — never grasp the whole picture at once.',
      '**Stop when the target has a value.** Do not sanity-check against the drawing unless it is confirmed to scale.',
    ],
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — compute anything, then look again', content: 'Stuck on the target, you notice a straight line elsewhere gives a $40^\\circ$ angle. Write it. That feeds a triangle whose third angle is now forced. Write that. Two moves later the target appears — none of them planned in advance.', variant: 'right' },
      { label: 'Wrong — hunt only near the target', content: 'Staring at the target angle waiting for a one-step path, ignoring the far side of the figure. The unlocking deduction often lives *away* from the answer; tunnel vision on the goal is why solvable chains feel impossible.', variant: 'wrong' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'You are three steps into an angle chase and cannot see the path to the target. What is the single most productive next move?',
    answer: 'Compute *any* angle you can derive right now — anywhere in the figure — and write it down. **Why:** the ritual is graphical, not planned. Each new number is a new generator input; the path reveals itself only after you annotate. Freezing to "see the whole route first" is the failure mode, and the antidote is literally "what CAN I compute?"',
  },

  { type: 'heading', content: 'Method 3 — Triangle sum and the exterior shortcut' },
  {
    type: 'text',
    content: 'The three interior angles of **any** triangle add to $180^\\circ$ — the central angle-generator in the chapter. It comes with a shortcut worth its own line. When a side is extended, the **exterior angle** it forms equals the *sum of the two remote interior angles* — the two the exterior angle does not touch. So you never have to find the third interior angle and subtract from $180^\\circ$; the exterior angle reads off the other two directly, a genuine two-for-one.',
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Triangle sum', formula: '$a + b + c = 180^\\circ$', note: 'True for every triangle, no exceptions.' },
      { label: 'Exterior-angle shortcut', formula: '$\\text{exterior} = \\text{remote}_1 + \\text{remote}_2$', note: 'The extended-side angle equals the two interior angles it is NOT next to.' },
      { label: 'Polygon interior sum', formula: '$180^\\circ(n - 2)$', note: 'An $n$-sided polygon fans into $n - 2$ triangles from one vertex. A regular one divides this by $n$.' },
    ],
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — exterior = sum of the two remotes', content: 'In a triangle with interior angles $50^\\circ$ and $65^\\circ$ at two vertices, a side is extended at the third. The exterior angle there is $50^\\circ + 65^\\circ = 115^\\circ$ — one step, no third-angle detour.', variant: 'right' },
      { label: 'Wrong — exterior = the adjacent interior', content: 'Taking the exterior angle to equal the interior angle right beside it. Those two share a straight line, so they are *supplementary* ($180^\\circ$ apart), not equal. The adjacent interior value is the planted distractor.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'For polygons, do not memorize $180^\\circ(n - 2)$ — rebuild it. Pick one vertex, draw the diagonals, and count the triangles they cut the shape into: a quadrilateral splits into $2$ (sum $360^\\circ$), a pentagon into $3$ (sum $540^\\circ$). Each new side buys exactly one more triangle. A regular polygon shares its total equally, so each interior angle is the sum divided by $n$. The exam mostly stays at triangles and quadrilaterals; bigger polygons show up as ingredients inside a longer chase.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'A triangle has interior angles $x$, $2x$, and $3x$. Find $x$. Then: a side is extended at the $x$ vertex — what is that exterior angle, computed two ways?',
    answer: '$x + 2x + 3x = 180^\\circ$, so $6x = 180^\\circ$ and $x = 30^\\circ$. The exterior angle at the $x$ vertex is the supplement of $x$: $180^\\circ - 30^\\circ = 150^\\circ$. Check with the shortcut — it equals the two remote angles $2x + 3x = 60^\\circ + 90^\\circ = 150^\\circ$. **Why:** both routes must agree; the shortcut just skips computing the third angle.',
  },

  { type: 'heading', content: 'Method 4 — Congruence: minimum information and letter order' },
  {
    type: 'text',
    content: 'Two triangles are **congruent** when they have the same shape *and* size. The test almost never asks you to prove it from scratch — it asks the *sufficiency* question: "which extra fact would be enough?" So learn each criterion as a **minimum information set** — the smallest bundle that leaves a triangle no freedom to be anything else. Three lock a triangle: **SSS** (all three sides), **SAS** (two sides and the angle *between* them), and **two angles plus any one side** (this is what ASA and AAS both amount to — once two angles are fixed, the third is forced by the $180^\\circ$ budget).',
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'SSS', formula: '$\\text{side, side, side}$', note: 'Three matching sides lock shape and size.' },
      { label: 'SAS', formula: '$\\text{side, } \\textbf{included angle} \\text{, side}$', note: 'The angle must sit BETWEEN the two sides.' },
      { label: 'ASA / AAS', formula: '$\\text{two angles} + \\text{one side}$', note: 'Two angles fix the third; any side then sets the size.' },
      { label: 'SSA — NOT a criterion', formula: '$\\text{side, side, non-included angle}$', note: 'The second side can swing to two positions — two different triangles fit.' },
    ],
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — bank the free facts, then name the criterion', content: 'Two triangles share a side (a free "S," it equals itself) and have vertical angles at the shared vertex (a free "A"). A choice that adds one more matching side completes **SAS** → sufficient. You decide by which criterion the choice *completes*.', variant: 'right' },
      { label: 'Wrong — accept SSA as enough', content: 'Taking two sides plus a non-included angle as proof, because it "feels like" SAS. It is not: with the angle outside the two sides, the far side can swing to meet the base at two different points, giving two distinct triangles. SSA is the standard sufficiency distractor.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'The second half is a pure reading skill. In a statement like $\\triangle ABC \\cong \\triangle DEF$, the letters are zipped together by position: $A \\leftrightarrow D$, $B \\leftrightarrow E$, $C \\leftrightarrow F$. So side $AB$ corresponds to side $DE$ (positions 1–2), and angle $C$ corresponds to angle $F$ — read straight off the *names*, with no figure and regardless of how the triangles are flipped or rotated. Most congruence and similarity errors are not concept errors; they are *bookkeeping* errors from pairing the wrong parts by size or position. Letter-order reading is the cheap, mechanical fix. And the same machinery covers **similarity** ($\\sim$): same shape, any size — every congruence criterion has a similarity sibling, with AA (two equal angles) being enough for similar but never for congruent.',
  },
  {
    type: 'trapCard',
    title: 'The positional pairing',
    wrong: '**The positional pairing.** Two similar triangles are drawn flipped, and you set up the ratio by matching the two sides that sit in the same *position* on the page — top with top, left with left. The arithmetic is flawless; the pairing is wrong, and the test lists exactly that value as a choice.',
    correction: 'Pair by **letter order**, never by position or size. Write the correspondence statement first — $\\triangle ABC \\sim \\triangle DEF$ means $AB/DE = BC/EF = AC/DF$ — and read each ratio from the names, even when a figure is present, *especially* when the triangles are rotated or reflected. If no statement is given, build one from the tick marks before writing a single ratio.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'In $\\triangle PQR \\sim \\triangle XYZ$, which side corresponds to $QR$? And separately: is "two pairs of equal angles" enough to prove two triangles *congruent*?',
    answer: '$QR$ corresponds to $YZ$ — $Q, R$ are positions 2 and 3, so take positions 2 and 3 of the other name, $Y$ and $Z$. Two equal angles proves *similarity* (AA), not congruence: same shape, but the size is still free. **Why:** correspondence is read from letter position, and congruence needs a length somewhere to pin the size that similarity leaves open.',
  },

  { type: 'heading', content: 'Method 5 — Area by decomposition' },
  {
    type: 'text',
    content: 'Every straight-edged area on the exam reduces to two ideas. First, a triangle is $A = \\tfrac{1}{2} \\cdot \\text{base} \\cdot \\text{height}$, where **any** side may be the base — but the height must be the *perpendicular* distance from the opposite vertex to that base (a dropped plumb line), not a slanted side. Second, anything that is not a rectangle or triangle — a parallelogram, a trapezoid, an odd shaded region — gets **cut** into rectangles and right triangles along perpendicular lines *you* draw, then added. Or enclose the region in a clean bounding rectangle, compute that, and **subtract the pieces you do not want.** The named quadrilateral formulas are just these cuts pre-done; you never have to recall them.',
  },
  {
    type: 'formula',
    label: 'Height is perpendicular, not slanted',
    content: '$A_{\\triangle} = \\tfrac{1}{2} \\cdot b \\cdot h \\quad (h \\perp b)$',
    note: 'For an obtuse triangle the foot of the height can land OUTSIDE the base — extend the base line and drop the perpendicular to the extension. The formula never changes.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — use the perpendicular height', content: 'A parallelogram has base $10$ and a perpendicular height of $6$ (the straight-across distance between the parallel sides). Area $= 10 \\times 6 = 60$. Slice a right triangle off one end and slide it over — the parallelogram becomes a $10$-by-$6$ rectangle, same area.', variant: 'right' },
      { label: 'Wrong — multiply base by the slanted side', content: 'That same parallelogram has a slanted side of length $8$. Using $10 \\times 8 = 80$ multiplies by the wrong length — the slant is longer than the true perpendicular height, so it always *overestimates*. Base times slant is the planted trap.', variant: 'wrong' },
    ],
  },
  {
    type: 'tip',
    content: 'When a region has no name, do not hunt for a formula — draw. Cut it into rectangles and right triangles with your own perpendicular lines, or enclose-and-subtract. The unfamiliar shape is the test asking whether you know you are allowed to cut. And when the item asks for perimeter after all the area work, trace the actual outer boundary of the final figure — glued edges sit inside and are not walked.',
  },

  { type: 'heading', content: 'Method 6 — Scaling laws: lengths $\\times k$, areas $\\times k^2$, volumes $\\times k^3$' },
  {
    type: 'text',
    content: 'This is the single most-missed idea in geometry, so it earns its own method. When every linear dimension of a figure scales by a factor $k$, **lengths and perimeters scale by $k$, areas scale by $k^2$, and volumes scale by $k^3$.** The reason is unit squares: scale a figure by $k$ and each $1 \\times 1$ square becomes a $k \\times k$ square holding $k^2$ of the originals — so any area, being a sum of unit squares, picks up $k^2$. The same argument with unit cubes gives $k^3$. The law is shape-independent because it is about the *dimension* of the quantity, not the figure. Ratios cross between dimensions only through **powers and roots — never linearly.**',
  },
  {
    type: 'formulaGrid',
    items: [
      { label: 'Length / perimeter', formula: '$\\times k$', note: 'The linear factor itself.' },
      { label: 'Area', formula: '$\\times k^2$', note: 'Double the sides → area $\\times 4$, not $\\times 2$.' },
      { label: 'Volume', formula: '$\\times k^3$', note: 'Double the edges → volume $\\times 8$.' },
      { label: 'Reverse (given a ratio)', formula: '$k = \\sqrt{\\text{area ratio}} = \\sqrt[3]{\\text{volume ratio}}$', note: 'Take the root FIRST to recover the linear factor.' },
    ],
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — raise $k$ to the target dimension', content: 'A circle\'s radius grows by $30\\%$, so $k = 1.3$. Area is two-dimensional, so it scales by $k^2 = 1.3^2 = 1.69$ — a $69\\%$ increase. Sanity check: growing a radius should grow the area *more* than the radius, and it does.', variant: 'right' },
      { label: 'Wrong — carry the linear factor straight across', content: '"Radius up $30\\%$, so area up $30\\%$." Area is not a length; applying $k$ instead of $k^2$ drops a whole dimension. The $30$ answer sits waiting on every percent-radius item — it is the trap the whole method exists to defuse.', variant: 'wrong' },
    ],
  },
  {
    type: 'text',
    content: 'Two refinements finish the method. **Reverse direction: root first.** Given that one figure has $16$ times the area of another, the sides compare as $\\sqrt{16} = 4$, not $16$ — take the root *before* touching any length. **Mixed factors: substitute with parentheses.** If a cylinder\'s radius is halved and its height tripled, write the volume as $\\pi(\\tfrac{1}{2}r)^2(3h)$, not $\\pi \\cdot \\tfrac{1}{2}r^2 \\cdot 3h$ — the parentheses are what square the $\\tfrac{1}{2}$, giving a factor of $(\\tfrac{1}{2})^2 \\cdot 3 = \\tfrac{3}{4}$. Dropping the parentheses is the same wrong answer as forgetting to square, reached by a sloppier road. Keep "factor" and "percent" apart until the very end: factor $1.69$ means $69\\%$ *greater*, and $169\\%$ *of* — the same fact, easy to garble under time.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'Square A has $9$ times the area of square B. How do their side lengths compare? And how do their perimeters compare?',
    answer: 'Side ratio $= \\sqrt{9} = 3$ (root the area ratio first). Perimeter is a length, so it scales the same as the sides: $3$ times. **Why:** area carries $k^2$, so recovering $k$ from an area ratio needs a square root; perimeter carries $k^1$, so it tracks the linear factor exactly. The trap answers are $9$ (skipping the root) for the sides and $9$ (treating perimeter like area) for the perimeter.',
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'Before solving, read the figure and the choices together — they tell you which method is being tested. Two choices that are a value and its supplement ($x$ and $180^\\circ - x$) mean the test is hunting an equal-versus-supplementary slip (Methods 1 and 3). A choice that matches the *adjacent* interior angle on an exterior-angle item flags the shortcut trap (Method 3). On a scaling item, the linear-factor value sitting next to the squared one ($30$ beside $69$, or $2$ beside $8$) means dimension-awareness is the whole question (Method 6). And a "not drawn to scale" note means the eyeball answer is planted on purpose. The choice set is the label.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Read the figure top to bottom and mark every given — equal angles with arcs, equal sides with ticks, parallel marks, right-angle boxes. Note whether it says "not drawn to scale."',
      'Parallel lines with a transversal → sort angles into the two families, $x$ and $180^\\circ - x$ (Method 1). Only if the parallel marks are actually there.',
      'A triangle in the figure → spend the $180^\\circ$ budget; if a side is extended, use the exterior = remote-sum shortcut (Method 3).',
      'Multiple triangles or a long figure → run the chasing ritual: compute anything, write it down, repeat, one triangle at a time (Method 2).',
      '"Which fact proves congruent / similar / parallel?" → name the criterion each choice completes; reject SSA and same-crossing (vertical-angle) sufficiency (Methods 1 and 4).',
      'An area or a shaded region → cut into rectangles and right triangles, or enclose-and-subtract, using perpendicular heights (Method 5).',
      'Any figure scaled by a factor, or a ratio of areas/volumes → apply $k$, $k^2$, or $k^3$; reverse direction takes a root first (Method 6).',
      'Before answering: reread the target — area items love to ask for a perimeter or a single side after the area work is done.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**The figure is worked on, not looked at.** Every trap in this chapter — the supplement swap, the eyeballed not-to-scale answer, the base-times-slant area, the un-squared scale factor — is defeated by the same discipline: derive each value from a labeled fact or a budget, write it on the figure, and never once trust how the picture looks. A student who annotates and never measures is immune to the entire "looks right" distractor family.',
  },
  {
    type: 'trapCard',
    title: 'The supplement swap',
    wrong: '**The supplement swap.** The figure has parallel lines or a crossing, and both the correct angle $x$ and its supplement $180^\\circ - x$ appear in the choices. You classify the target into the wrong family — acute where it should be obtuse — and land on the value that is $180^\\circ$ away from correct.',
    correction: 'Decide family by size, not by which pair name half-surfaces from memory. Shade every acute angle one way and every obtuse another: same shade means equal, different shade means they sum to $180^\\circ$. Then read the target\'s shade off the figure. The distractor is *always* the other family member, so give the classification its own deliberate beat.',
  },
  {
    type: 'trapCard',
    title: 'The eyeballed figure',
    wrong: '**The eyeballed figure.** A "not drawn to scale" figure shows an angle that *looks* like $60^\\circ$, and $60^\\circ$ is right there in the choices. Under time pressure you trust the drawing — years of to-scale school diagrams trained the habit — and pick the value the picture was distorted to suggest.',
    correction: 'On any figure, and absolutely on a not-to-scale one, values come only from labels and deductions — never from measuring the drawing. The test deliberately draws a $30^\\circ$ angle to read as $60^\\circ$ and lists the eyeball answer as bait. Run the ritual: annotate the givens, fire the budgets, and let the computed number win even when it "looks wrong."',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Lines $\\ell$ and $m$ are parallel and are crossed by a transversal $t$. One of the angles $t$ makes with $\\ell$ measures $47^\\circ$. What is the measure of the obtuse angle $t$ makes with $m$?\n\n(A) $43^\\circ$\n(B) $47^\\circ$\n(C) $133^\\circ$\n(D) $137^\\circ$',
    steps: [
      { label: 'Confirm the families apply', content: 'The lines are stated parallel, so the two-family rule holds: every angle is $47^\\circ$ (small family) or $180^\\circ - 47^\\circ$ (big family).' },
      { label: 'Classify the target', content: 'The question asks for an *obtuse* angle — the big family. Its measure is $180^\\circ - 47^\\circ = 133^\\circ$.' },
      { label: 'Answer', content: '**(C) $133^\\circ$.** Choice (B) is the supplement swap (same family as the given), and (A) $43^\\circ$ is the leftover from confusing this with a complementary, right-angle setup.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'In $\\triangle ABC$, angle $A = 42^\\circ$. Side $BC$ is extended beyond $C$ to a point $D$, and the exterior angle $ACD = 118^\\circ$. What is the measure of angle $B$?',
    steps: [
      { label: 'Choose the shortcut over the long route', content: 'A side is extended, so the exterior angle $ACD$ equals the sum of the two remote interior angles — the ones it does not touch — which are $A$ and $B$ (Method 3).' },
      { label: 'Set up and solve', content: 'Exterior $=$ remote$_1 +$ remote$_2$: $118^\\circ = 42^\\circ + B$, so $B = 118^\\circ - 42^\\circ = 76^\\circ$.' },
      { label: 'Verify with the budget', content: 'Then the interior angle $ACB = 180^\\circ - 118^\\circ = 62^\\circ$, and $42^\\circ + 76^\\circ + 62^\\circ = 180^\\circ$. The triangle balances.' },
      { label: 'Answer', content: '**$76^\\circ$.** The trap is $62^\\circ$ — the interior angle adjacent to the exterior one, offered for anyone who pairs the exterior angle with the wrong interior.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Two similar triangles have areas $20$ and $45$ square units. The shortest side of the smaller triangle is $8$. What is the length of the corresponding side of the larger triangle?',
    steps: [
      { label: 'Recognize the dimension', content: 'The triangles are similar, so one scale factor $k$ relates every length. Areas are two-dimensional, so the area ratio is $k^2$ — not $k$ (Method 6).' },
      { label: 'Root the area ratio first', content: 'Area ratio $= \\dfrac{45}{20} = \\dfrac{9}{4}$. Take the square root to recover the linear factor: $k = \\sqrt{\\tfrac{9}{4}} = \\dfrac{3}{2}$.' },
      { label: 'Scale the length', content: 'Corresponding sides scale by $k$, so the larger side $= 8 \\times \\dfrac{3}{2} = 12$.' },
      { label: 'Answer', content: '**$12$.** The trap answers are $18$ (using the area ratio $\\tfrac{9}{4}$ on the length directly, skipping the root) and anything built from $\\tfrac{45}{20}$ un-rooted. Root first, then scale.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 6,
    question: 'A figure is marked "not drawn to scale." A transversal crosses two lines, and one marked angle looks obtuse but is labeled $35^\\circ$. The choices include $35^\\circ$, $55^\\circ$, $125^\\circ$, and $145^\\circ$. Where does the trap live?',
    answer: 'The trap is trusting the drawing: the angle *looks* obtuse, so the obtuse-looking choices ($125^\\circ$ or $145^\\circ$) tempt you, but the label says $35^\\circ$ and the label wins. **Why:** "not drawn to scale" means the picture is deliberately distorted; every value comes from labels and deductions. Read the family off the *label*, not the ink. ($55^\\circ$ is a complementary red herring, $145^\\circ$ a supplement of the eyeballed guess.)',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Method', 'Situation', 'The move'],
    rows: [
      ['M1', 'Parallel lines + transversal', 'Two families only: $x$ and $180^\\circ - x$. Same family equal, different family supplementary. Requires actual parallel marks; vertical-angle equality never proves parallelism'],
      ['M2', 'Multi-step / dense figures', 'The chasing ritual: compute anything derivable now, write it on the figure, repeat one triangle at a time. Never freeze planning the whole route'],
      ['M3', 'Any triangle or polygon', 'Interior angles sum to $180^\\circ$; exterior angle $=$ sum of the two remote interiors; polygon sum $= 180^\\circ(n-2)$, rebuilt by triangulation'],
      ['M4', 'Prove congruent / similar', 'Criteria as minimum sets: SSS, SAS, two-angles-plus-a-side. Reject SSA. Read corresponding parts by letter order, never by position or size. AA gives similar, not congruent'],
      ['M5', 'Area / shaded regions', 'Cut into rectangles and right triangles (perpendicular heights), or enclose-and-subtract. Never base times slant. Reread whether area, perimeter, or a side was asked'],
      ['M6', 'Scaling / ratios', 'Lengths $\\times k$, areas $\\times k^2$, volumes $\\times k^3$. Reverse direction roots first. Mixed factors: substitute with parentheses. Keep factor and percent separate until the end'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: read every figure as fixed angle budgets and scalable dimensions, sort parallel-line angles into two families, chase multi-step figures by annotating one deduction at a time, prove congruence by minimum information and letter order, find areas by cutting, and scale by the right power of $k$. Never measure the drawing — derive, write it down, and let the figure hand you the answer.',
  },
];
