# Raw notes — College Panda SAT Math, Ch 22 "Area, Perimeter, & Volume" (Geometry & Trigonometry)

Source scope: p0130 – p0135 (chapter opens p0130 left; p0135 ends exercise set 2).

## Concepts taught

- `quadrilateral-area-basics` — square/rectangle/parallelogram areas, with the hierarchy (squares ⊂ rectangles ⊂ parallelograms) stated so properties inherit; parallelogram area uses the perpendicular height, not the slanted side.
- `dimension-area-backsolve` — running the formulas in reverse: perimeter → side → area; area + a stated relation between length and width → quadratic → dimensions → perimeter (discard the negative root on physical grounds).
- `prism-volume-unification` — one master idea, volume = base area × height, from which cube, rectangular prism, cylinder, and triangular-prism volumes are all instances; kills formula proliferation.
- `surface-area-as-face-sum` — surface area is literally the sum of face areas (6 squares; 3 pairs of rectangles); no formula memorization needed if you can inventory faces.
- `cylinder-unrolling` — the cylinder's curved surface unrolls into a rectangle (circumference × height), deriving lateral area and total surface area from scratch.
- `curved-solid-volumes` — sphere, cone, square-pyramid volume formulas; provided on the exam's reference sheet but worth knowing cold for speed.
- `slant-vs-true-height` — a cone's slant height is not its height; Pythagorean theorem (radius, height, slant) recovers the true height.
- `similar-figures-scaling-laws` — if linear dimensions scale by k, areas scale by k², volumes scale by k³; runs in reverse via square/cube roots; the single most leveraged fact of the chapter.
- `percent-change-vs-factor` — a 30% longer radius means a factor of 1.30, and the resulting area factor 1.69 means 69% greater — translating between "times as large" and "percent greater" is its own skill.
- `mixed-dimension-scaling` — when dimensions scale by different factors (radius halved, height tripled), track each factor through the formula with its own exponent; the volume factor is the product.
- `density-mass-volume` — density = mass ÷ volume; a three-slot relationship solvable for any slot, usually a units-reading exercise.
- `geometry-algebra-interpretation` — geometry formulas re-dressed as algebra: an expression represents a surface area or volume and the student must identify what a sub-expression means in context (interpretation items), or factor an expression to expose a dimension.
- `composite-solids` — volumes combined by subtraction (space inside a sphere not occupied by an inscribed cylinder) or figures combined by gluing (shared edges vanish from the perimeter).

## Teaching philosophy observed

- Explicit continuity management: the chapter opens by scoping itself to what earlier chapters haven't covered — the book treats its chapter graph as a dependency structure.
- Derive-then-use: surface area of a cylinder is derived by unrolling before being used, with the stated rationale of learning over lookup; likewise prism volume is explained via the base-area × height principle rather than listed per solid.
- Reference-sheet realism: the book tells students the exam supplies the curved-solid formulas but recommends memorizing them anyway — a speed-vs-lookup tradeoff judgment.
- The scaling shortcut is taught THROUGH the algebra first (substitute the scaled radius, carry the parentheses, collect the coefficient), and only then compressed into the k²/k³ rule — the shortcut is earned, not asserted. The parenthesization step is explicitly flagged as the danger point.
- Both directions drilled immediately: factor-of-5 radius → 125× volume, then the reverse (216× volume → 6× radius via cube root) in the same breath.

## Expert reasoning patterns (generalized)

1. **Formulas as two-way streets.** Every area/volume formula is a solvable equation: experts move fluidly from any known subset to the unknown (volume + two dims → third dim → surface area).
2. **Translate relations into one variable.** "Width is 3 less than length" + area → a one-variable quadratic; factor; keep the positive root because lengths are positive; only then answer what was actually asked (often the perimeter, not the dimension — read the question twice).
3. **Scaling by exponent bookkeeping.** For similar figures: linear k, area k², volume k³. For non-uniform scaling: write the formula, replace each dimension by (factor × original) with parentheses, and collect all numeric factors; the exponent each factor picks up equals the power of its dimension in the formula.
4. **Reverse scaling via roots.** Given an area or volume ratio, take the square or cube root to recover the linear ratio before touching any specific length.
5. **Factor-to-percent translation as a final step.** Compute the factor (1.69), subtract 1, then report percent (69%) — keeping the two representations separate until the end prevents the 30%→30% trap.
6. **Face inventory for surface area.** List faces with multiplicities instead of recalling a formula; works for any right solid, including ones with no named formula.
7. **Composite = big minus small (or sum minus shared).** Volumes of leftover space are subtractions of known solids; perimeters of glued figures are sums minus twice each shared edge.
8. **Slant-height reflex.** Any cone/pyramid giving a slant measurement triggers a Pythagorean sub-step before the volume formula.
9. **Desmos leverage (ours; source is calculator-silent here):** quadratics from area setups (l(l−3)=108) solve instantly by graphing in our embedded Desmos; cube roots (∛42875) and messy composites (sphere-minus-cylinder in exact π then rounded) are arithmetic Desmos does better than hand work. Worth teaching explicitly since the book leaves it out.

## Misconceptions targeted (and why students hold them)

- **linear-scaling-transfer** — the belief that "sides ×5 ⇒ area/volume ×5," or "radius +30% ⇒ area +30%." The deepest misconception of the chapter: proportional reasoning is drilled for years on linear relationships and students over-apply it to squared/cubed quantities. Distractor sets are built around it (the k-percent answer choices include 30 for a 30% radius increase; times-as-large sets include the linear factor).
- **dropped-parentheses-substitution** — substituting a scaled dimension without parentheses (writing π·1.30r² instead of π(1.30r)²), so the factor never gets squared. Root cause: weak symbolic hygiene; the book calls the parentheses "very important" at exactly this step.
- **factor-percent-conflation** — reporting 1.69× as "169% greater" or 69% greater as "69 times." Students hold it because everyday speech blurs "times more" and "percent more."
- **slant-height-as-height** — plugging a cone's slant height straight into the volume formula; the picture makes the slant the most visually salient length.
- **parallelogram-slant-side-area** — multiplying base by the slanted side because rectangles trained base × adjacent-side; the perpendicular-height requirement is invisible until a figure punishes it.
- **perimeter-area-ratio-mixing** — assuming perimeter ratios behave like area ratios; in fact perimeter is linear (scales by k), so a problem giving perimeter relations and asking about sides is a same-scale relationship while an area question needs the square. Exercises deliberately alternate to force the distinction.
- **surface-area-vs-volume-slot-confusion** — in algebraic-representation items (surface area = 24a², find volume), students who race pattern-match will cube or square the wrong thing; the designed path is: recover the edge from the surface-area expression first (s = 2a), THEN cube. Distractors include every shortcut product (8a³ vs 64a⁶ vs squares).
- **interpretation-slot-errors** — in context items (y = x(x−6)(x+6) as a volume; A = x(75−2x)/2 as an area), assigning a factor to the wrong dimension. Root: students match position rather than deriving which physical quantity each factor must be (e.g., using the given "width is 6 more / height is 12 less" relations to pin x−6).

## SAT patterns claimed (unverified-claim — verify vs. official + bank)

- Similar-figure ratio items in every costume: squares (perimeter↔area), quadrilaterals/polygons (side ratio → area ratio), rectangular prisms and cylinders (edge ratio → volume ratio), spheres (radius % change → volume % change), triangles (area ratio 16 → side ratio 4). The k/k²/k³ family is claimed as a high-frequency hard-question engine.
- Volume formulas for sphere/cone/pyramid appear on the exam's reference sheet (so items test setup, not recall).
- Density items are straight formula-slot problems, sometimes chained with volume computation (cylinder from base area × height, then mass = density × volume).
- Interpretation-of-expression items now extend into geometry contexts (which factor is the height; what does the 75 mean) — geometry fused with the algebra "meaning of a term" genre.
- Grid-in composites at the hard end: inscribed-cylinder-in-sphere leftover volume; glued congruent rectangles with a fractional-perimeter relation; quadrilateral area from four coordinate points.
- Quadratic-setup area problems (dimensions related linearly, area given) are standard; expect factoring-friendly numbers.

## Prerequisite edges implied

- `dimension-area-backsolve` ← solving quadratics by factoring; rejecting extraneous roots.
- `prism-volume-unification` ← area formulas for the base shapes (incl. right-triangle area via legs).
- `cylinder-unrolling` ← circle circumference/area.
- `similar-figures-scaling-laws` ← similarity (corresponding sides proportional); exponent rules ((kr)³ = k³r³); percent-to-factor translation (the book cross-references its percent chapter).
- `slant-vs-true-height` ← Pythagorean theorem.
- `geometry-algebra-interpretation` ← factoring; function/expression structure reading.
- `composite-solids` ← each component solid's volume; spatial decomposition.

## Difficulty escalation observed

Easy: single-formula forward computation (perimeter → area; density plug-in). Medium: backward solving and two-step chains (volume → missing dimension → surface area); quadratic setups; scaling with clean factors. Hard: scaling with percent language and reversals (root extraction); mixed-factor scaling through a formula; algebraic-interpretation items; composite/inscribed solids and coordinate-plane quadrilaterals. Escalation = forward → inverse → ratio/structural reasoning → composition with algebra or other solids.

## What this source does well / poorly

- **Well:** volume = base area × height as a unifying principle; the unrolling derivation; scaling laws earned through explicit substitution with the parentheses hazard called out; both directions (forward and root-extraction) taught together; exercises systematically permute the scaling law across shapes so students generalize the rule rather than memorize per-shape cases.
- **Poorly:** calculator-silent — quadratic setups, cube roots, and π-heavy composites are exactly where our embedded Desmos changes the optimal method, and the book gives no guidance; density appears abruptly with no unit-analysis teaching (dimensional reasoning would inoculate against slot confusion); no treatment of when NOT to use the scaling shortcut (non-similar figures with one shared dimension); coordinate-geometry area (the plotted quadrilateral) appears in exercises with zero instructional support — decomposition/enclosing-rectangle methods must come from elsewhere in our graph.
