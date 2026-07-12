---
id: similarity-configurations
section: math
domain: geometry-trigonometry
skill: geometry.similar-triangles-proportion
difficulty_span: [medium, hard]
prereqs: [similarity-as-scaling, parallel-lines-two-angle-families]
unlocks: []
related: [angle-chasing-ritual, soh-cah-toa-and-cofunction]
---

# The three similarity configurations: parallel cut, altitude drop, bowtie

## What it is
Three recurring figures where similar triangles hide inside one drawing. (1) **Parallel cut**: a segment parallel to one side of a triangle cuts off a smaller triangle similar to the original (the parallel creates equal corresponding angles → AA); it also splits the two crossed sides in equal proportions, so piece-to-piece ratios can be used directly. (2) **Altitude to the hypotenuse**: dropping a perpendicular from a right angle to the hypotenuse produces THREE mutually similar right triangles — all hypotenuses correspond, all long legs correspond, all short legs correspond. (3) **Bowtie**: two triangles joined at a vertex (vertical angles) with a pair of parallel sides are similar, with correspondence FLIPPED across the vertex — top-left matches bottom-right.

## Why it exists / why the SAT tests it
Direct "these triangles are similar" items are the warm-up; the real test is recognizing similarity inside a single busy figure and then keeping the bookkeeping straight. Each configuration has a signature bookkeeping hazard (piece vs. whole; which leg is which; crossed correspondence), and the distractors are minted from exactly those hazards. These are staple medium-hard items; the parallel-cut and bowtie figures also appear on the coordinate plane where axis-triangles play the roles.

## Mental model
**Nested and mirrored copies.** The parallel cut nests a shrunken copy inside the original, sharing the apex. The altitude drop shatters a right triangle into two smaller copies of itself. The bowtie is a copy reflected through the crossing point. In every case there is one underlying triangle shape at 2–3 sizes; the work is identifying which lengths belong to which copy.

## Expert reasoning process
1. **Run the spotting checklist** on any multi-triangle figure: parallel segment inside a triangle? shared angle + both triangles right? vertical angles + a parallel pair? altitude to a hypotenuse? Any two angle matches at all? Each is an instant AA certificate.
2. **Parallel cut — convert part to whole before any across-triangle ratio.** The labels on the crossed sides are PIECES; the similar triangles' sides are WHOLES. Pieces in ratio 1:3 mean small triangle : large triangle = 1 : 4. Check every ratio entry: "is this a full side of the triangle I named?" Alternatively, stay entirely in piece-land: the parallel line splits both crossed sides in the SAME proportion, so upper-piece : lower-piece on one side equals upper-piece : lower-piece on the other — a legal shortcut that never touches the wholes (and it extends to heights: a horizontal cut splits the altitude in that same proportion).
3. **Altitude drop — organize by role, not position.** Label each of the three triangles' hypotenuse/long-leg/short-leg; corresponding means same role. A peculiarity of this configuration: within-triangle ratios equal across-triangle ratios, so several proportions are simultaneously available — pick the one containing the known pair and the unknown. On the coordinate plane, two perpendicular lines through a point between the axes recreate this exact configuration.
4. **Bowtie — cross the vertex.** Extend the parallel segments into full lines to re-expose the transversal picture; the two-family equalities then dictate the matching (near angle pairs with FAR angle). Write the correspondence statement before the proportion.
5. Close with one scale factor and one multiplication, per [[similarity-as-scaling]].

## Misconceptions
- **piece-equals-side** — in a parallel-cut figure, using a segment (a piece of a crossed side) as if it were a full side of a similar triangle. Forms because the label sits exactly where a side label usually sits, and the pieces are the visually salient lengths. Problem design places numbers so the wrong ratio is effortless (pieces 9 and 3 tempting a 3× scale when the truth is 12:3 = 4×); the piece-ratio answer IS a listed distractor.
- **bowtie-same-side-pairing** — matching the two "top" sides of a bowtie because spatial position feels like correspondence; correct matching crosses the vertex. Forms from position-based matching habits ([[congruence-criteria-and-correspondence]] name-order-blindness in costume). Distractor: the swapped-ratio answer.
- **part-part-vs-part-whole** — even after noticing pieces, mixing the two legal schemes: setting a piece-to-piece ratio equal to a piece-to-whole ratio. Forms because both schemes are taught and both are valid *separately*. Answers off by "one piece's worth."
- **altitude-role-scramble** — in the three-triangle figure, pairing a short leg with a long leg because the triangles are rotated at three different orientations. Forms because role-identification (opposite the smallest angle = short leg) is skipped in favor of visual matching.

## Diagnostic indicators
- Answer equals the piece-ratio scale factor (e.g., 3 when 4 is correct) → **piece-equals-side**.
- Answer is the reciprocal/swapped ratio on vertex-joined triangles → **bowtie-same-side-pairing**.
- Proportion mixes a part-part fraction with a part-whole fraction → **part-part-vs-part-whole**.
- On altitude figures, correct method but sides paired across roles (answer matches the wrong-leg computation) → **altitude-role-scramble**.
- Student solves clean two-triangle items but scores drop sharply on single-figure nested items → configurations not yet recognized as similarity at all (recognition gap, remediate with the spotting checklist).

## Remediation pathways
- **piece-equals-side**: the conversion mantra — "pieces add up to sides." Drill: three parallel-cut figures where the student must write both crossed sides as piece-sums BEFORE any ratio. Then show the distractor autopsy: where the 3× answer comes from.
- **bowtie-same-side-pairing**: extend-the-lines demo — lengthen both parallel segments until the figure is visibly two parallel lines and a transversal pair; the two-family equalities make the crossed matching undeniable.
- **part-part-vs-part-whole**: side-by-side legal solutions of one item both ways (all-pieces vs. all-wholes), then one illegal mixed setup with its wrong answer, labeled.
- **altitude-role-scramble**: redraw the three triangles separately, same orientation, labeled S/L/H — the correspondence becomes trivial. Make redrawing the standing move for this figure.
- If AA certification itself is shaky, revisit [[similarity-as-scaling]]; if the parallel equalities are shaky, [[parallel-lines-two-angle-families]].

## Mastery criteria
Student names the configuration aloud on sight ("parallel cut — pieces aren't sides"), converts part-to-whole before across-triangle ratios, crosses the vertex on bowties, and can redraw the altitude configuration as three separated same-orientation triangles. Proof: hard items in all three configurations correct across sessions, with distractor-avoidance on the piece-ratio trap specifically.

## Difficulty ladder
- **Easy**: (rare) parallel cut with wholes given directly.
- **Medium**: parallel cut with pieces given (the part-whole conversion is the whole test); clean bowtie with one unknown.
- **Hard**: altitude-to-hypotenuse with only two lengths known; nested figures needing conversion AND certification; coordinate-plane versions (perpendicular lines through a point = altitude configuration; parallel lines = similar axis triangles); composition with perimeter/ratio scaling from [[scaling-laws-k-k2-k3]] or trig readouts from [[soh-cah-toa-and-cofunction]].

## Teaching notes
- **Struggling**: one configuration at a time, always with the separated-redraw step. Parallel cut first (most common), and drill piece-sum writing as a mechanical habit.
- **Average**: teach the spotting checklist as a scan you run on every multi-triangle figure; contrast the two legal parallel-cut schemes so the illegal mix is visible.
- **Advanced**: all three configurations mixed in one set; coordinate-plane transfers; make them predict the trap distractor before solving.
- **1500+**: recognition speed under disguise — configurations embedded in circle figures and word problems; solving parallel-cut items via the piece-proportion shortcut to save the whole-side computation entirely.
