---
id: area-by-decomposition
section: math
domain: geometry-trigonometry
skill: geometry.area-and-volume
difficulty_span: [easy, hard]
prereqs: [triangle-properties-toolkit, pythagorean-theorem-and-triples]
unlocks: [solids-volume-and-density]
related: [composite-decomposition, special-right-triangles, triangle-properties-toolkit]
---

# Area by decomposition: perpendicular heights and self-drawn cuts

## What it is
Two ideas that cover every straight-edged area on the exam. First, the triangle formula A = ½·base·height, where ANY of the three sides may serve as the base — but the height must be the PERPENDICULAR distance from the opposite vertex to that base (or to the base's extension). Second, everything that isn't a rectangle or a triangle gets CUT into rectangles and right triangles along perpendicular lines you draw yourself: parallelograms, trapezoids, and arbitrary composite regions all decompose. Named quadrilateral formulas are conveniences derived from cutting, not independent facts.

## Why it exists / why the SAT tests it
Area items separate students who hold a picture-level understanding (area = square units of cover, computable by cutting) from students who hold a formula list. The formula list fails in exactly the places the test likes: an obtuse triangle whose altitude lands outside it, a parallelogram labeled with its slanted side, a shaded region with no name at all, and glued figures whose perimeter is not the sum of the parts. Composite and shaded-region items concentrate at the medium-hard band, often composing [[special-right-triangles]] to manufacture the heights (unverified-claim).

## Mental model
**Height is a dropped plumb line, and every region is rectangles-plus-right-triangles waiting to be cut.** For a triangle: stand the chosen base horizontal (rotate the figure mentally if needed) and drop a vertical from the opposite vertex — where it lands, even outside the base, is irrelevant; its LENGTH is the height. For anything bigger: draw perpendicular cuts until only rectangles and right triangles remain, then add — or compute the enclosing whole and subtract the parts you don't want.

## Expert reasoning process
1. **Triangles: pick the convenient base.** Any side works, so choose the one whose perpendicular height is given or easiest to compute. A right triangle is the free case: the two legs are base and height. If the given "height" is not perpendicular to the chosen base, it is not the height.
2. **Obtuse triangles: extend the base.** The altitude from the opposite vertex can land OUTSIDE the base segment; extend the base line and drop the perpendicular to the extension — or rotate the figure so the height falls from the widest angle. The formula is unchanged.
3. **Manufacture missing heights.** When no height is given, drop a strategic perpendicular and solve the right triangle it creates — by triple recognition or by the [[special-right-triangles]] templates when 30°/45°/60°/120° angles or √2/√3 answer choices signal them.
4. **Parallelograms: cut and slide.** Slice a right triangle off one end and slide it to the other — the parallelogram becomes a rectangle of the same base and the same perpendicular height. This derivation is the vaccine against the slant-side trap: the slanted side visibly is NOT the rectangle's height.
5. **Trapezoids: cut, don't recall.** Perpendiculars from the short parallel side's endpoints split a trapezoid into a rectangle plus one or two right triangles. Compute the parts; the average-the-parallel-sides shortcut is just this cut pre-simplified, and re-deriving it beats misremembering it.
6. **Shaded and composite regions: whole minus parts.** Enclose the region in the smallest clean shape, compute it, subtract the un-shaded pieces — or cut the region directly. Either way the cuts are perpendicular lines YOU add; unfamiliar-looking regions are the test's way of asking whether you know you're allowed to draw ([[composite-decomposition]] is this same move at the multi-topic scale).
7. **Glued-figure perimeter: subtract the seams twice.** When two figures are joined along an edge, that shared edge appears in BOTH figures' perimeters but in neither's boundary: perimeter of the glued figure = sum of the two perimeters − 2 × (each shared edge). Sketch the union and trace its actual boundary rather than trusting arithmetic on the parts.
8. **Answer the asked quantity.** Area setups love to ask for the perimeter, a side, or a dimension after the area work is done — reread the target before answering ([[answer-the-asked-question]]).

## Misconceptions
- **slant-side-as-height** — multiplying a parallelogram's (or triangle's) base by the adjacent slanted side. Forms because rectangles train "base × the side next to it," and the perpendicularity requirement stays invisible until a slanted figure punishes it. The base-times-slant product is the planted distractor; it always overestimates.
- **height-stays-inside** — believing a triangle's altitude must land inside the base, so on obtuse triangles the student refuses to extend the base, picks some interior segment as the "height," or declares the problem unsolvable. Forms because school diagrams overwhelmingly show acute triangles with tidy interior altitudes.
- **glued-perimeter-plain-sum** — adding the perimeters of joined figures without removing the shared edge from each. Forms from computing on the parts without sketching the union — the double-counted overlap error. The plain sum (and sometimes the over-subtracted variant) are the distractors; picking the plain sum is near-proof the figure was never drawn.
- **formula-recall-dependence** — stalling on trapezoids, kites, or unnamed regions while hunting a memorized formula instead of cutting. Forms from formula-sheet schooling in which every shape had its own formula and drawing on the figure was never modeled as a legal move. Shows as skips on composite items the student has every tool to solve.
- **perimeter-area-swap** — computing the perimeter when area was asked, or vice versa. Forms because both are "the size of the shape" in casual thought, and the test provides no everyday cue (fence vs paint) to force the distinction. The swapped quantity is routinely among the choices.

## Diagnostic indicators
- Parallelogram/triangle answers exactly base × slant → **slant-side-as-height**; the overestimate pattern is consistent.
- Correct on acute-triangle areas, wrong or skipped on obtuse ones; explanations like "the height isn't in the triangle" → **height-stays-inside**.
- Glued-figure perimeter answers equal to the sum of part perimeters → **glued-perimeter-plain-sum**; scratch work shows no sketch of the union.
- Skips concentrated on unnamed/composite regions while single-shape items are fine; "I don't know the formula for that shape" when asked → **formula-recall-dependence**.
- Answers matching the un-asked twin quantity (perimeter for area or reverse) → **perimeter-area-swap**; the picked distractor identifies it exactly.

## Remediation pathways
- **slant-side-as-height**: run the cut-and-slide derivation once on grid paper — the slid triangle makes the true height visible and the slant's irrelevance obvious. Then a contrast pair: same parallelogram, slant labeled and height labeled, compute with each and check against a grid count.
- **height-stays-inside**: one obtuse triangle drawn with its base extended and the altitude dropped outside, verified by rotating the same triangle onto a different base where the altitude falls inside — same area both ways. The rotation proves the formula never cared where the foot lands.
- **glued-perimeter-plain-sum**: force the sketch — trace the union's boundary with a finger or highlighter and ask "does the shared edge get walked?" Then install the rule: sum of perimeters minus TWICE each shared edge, once per figure that claimed it.
- **formula-recall-dependence**: explicitly license drawing — three unnamed-region items where the only instruction is "cut it into rectangles and right triangles before computing anything." Success on shapes with no name is the fix; the trapezoid shortcut can be re-derived afterward as a victory lap.
- **perimeter-area-swap**: a units habit — annotate the target as "units" or "units²" before starting; route persistent cases to [[answer-the-asked-question]] since the gap is target discipline, not geometry.

## Mastery criteria
Student computes triangle areas from any base including obtuse cases, derives parallelogram/trapezoid areas by cutting without formula retrieval, decomposes an unnamed shaded region unprompted, and adjusts glued perimeters for shared edges. Proof: ≥85% on a mixed set containing one obtuse-height item, one slant-trap item, and one composite region, with self-drawn cuts visible in the work.

## Difficulty ladder
- **Easy**: rectangle and right-triangle areas; ½bh with both values given perpendicular.
- **Medium**: choose-your-base triangles; parallelogram and trapezoid by decomposition; slant-side traps; simple whole-minus-part shaded regions.
- **Hard**: obtuse triangles requiring base extension; heights manufactured via [[special-right-triangles]] or triple recognition; glued-figure perimeters; multi-cut composites.
- **Hardest**: area chained into algebra — dimensions related linearly with area given, producing a quadratic ([[sum-product-factoring]]), or area feeding a similarity/scaling step ([[scaling-laws-k-k2-k3]]); regions requiring both decomposition and a subtraction layer in one figure.

## Teaching notes
- **Struggling**: ground area in square-counting on grid paper, then ½bh as "half a rectangle" — draw the rectangle around the triangle and shade the half. Only perpendicular pairs, only interior heights, until the formula feels like a picture.
- **Average**: the choose-your-base freedom, the obtuse extension, and cut-and-slide for parallelograms; drill one slant-trap item early so the perpendicularity requirement is learned from a near-miss rather than a lecture.
- **Advanced**: manufacture-the-height problems (dropping the strategic perpendicular into a 30-60-90), whole-minus-parts fluency, and glued perimeters; require the cut lines drawn before any arithmetic.
- **1500+**: composites under time pressure — recognizing in seconds whether direct cutting or enclose-and-subtract is cheaper, and pre-naming the slant-product and plain-sum distractors before solving as a verification habit.
