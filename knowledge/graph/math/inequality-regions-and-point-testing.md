---
id: inequality-regions-and-point-testing
section: math
domain: algebra
skill: algebra.inequality-regions-and-point-testing
difficulty_span: [easy, hard]
prereqs: [inequality-direction-logic, linear-system-solution-as-intersection]
unlocks: [inequality-translation-and-integer-bounds]
related: [compound-inequality-operations]
---

# Half-planes, overlaps, and the point test

## What it is
A two-variable inequality's solution set is a HALF-PLANE: a boundary line plus everything on one side of it. Three attributes fully describe it — which line, which side, and whether the line itself counts (solid boundary for ≤/≥, dashed for strict). A system of inequalities is solved by the region where ALL the individual half-planes overlap; a point is a solution only if it satisfies EVERY inequality. The universal, always-available method for "which point / which region / which graph" items is the point test: substitute a candidate and check each condition.

## Why it exists / why the SAT tests it
The digital SAT tests inequalities mostly through REPRESENTATION — matching pictures to symbols and points to regions — rather than multi-step solving, so graph literacy carries more points here than algebraic stamina. unverified-claim: most inequality items are representational (region-matching, point-in-region, decompose-a-shaded-picture) rather than solve-and-simplify; distractor points are systematically placed inside exactly ONE of a system's half-planes to catch students who stop checking after the first pass.

## Mental model
**Boundary, side, membership — in that order.** The boundary is the equation with the sign replaced by =. The side: isolate y, then ≥ means the region ABOVE the line and ≤ means BELOW (if isolating y required dividing by a negative, the sign — and therefore the side — flipped; this is where shading errors are born). Membership: strict signs exclude the boundary (drawn dashed), inclusive signs include it (drawn solid). For systems, stack the half-planes: the answer region is where every shading overlaps, and a point must clear EVERY gate. When "above vs below" is visually ambiguous (steep lines, rotated axes), cut the picture with a vertical line: along that cut, up is always greater-y.

## Expert reasoning process
1. Classify the item: point-candidates offered → point-test; graph offered, inequality asked (or reverse) → read boundary/side/membership; region description with a coordinate constraint → propagate the known coordinate.
2. **Point test protocol**: simplify each inequality once up front (divide out common positive factors) to make substitutions cheap; test each candidate against the FIRST inequality and discard failures immediately; survivors advance to the second. If all candidates share an x-value, compute the x-dependent pieces once and vary only y.
3. **Graph reading**: identify the boundary's slope/intercept to match the equation; determine the shaded side via y-isolation or by testing one easy point (the origin, if it's off the boundary); confirm dashed↔strict, solid↔inclusive. All three attributes must match — choice sets differ in exactly one.
4. **Known coordinate propagation**: given that (a, 3) or (5, b) solves a system, feed the known coordinate through each inequality, producing an interval for the unknown coordinate; intersect the intervals; pick the choice inside.
5. **Boundary points in systems**: a point ON a dashed boundary fails that inequality — even if it is inside every other region. Check boundary membership explicitly whenever a candidate lands on a line.
6. For no-solution topology: two half-planes fail to overlap only when their boundaries are parallel and the shadings face away from each other — a rare but askable structure that reduces to slope comparison ([[linear-system-solution-count]] logic transplanted).
7. **Extreme values live at the boundary intersection.** When the item asks for the maximum or minimum of x or y over a two-inequality system ("the greatest possible y-coordinate of a solution"), the overlap region is a wedge, and the extreme sits at its corner — where the two BOUNDARIES cross. Procedure: replace each inequality's sign with =, solve the resulting 2×2 system ([[linear-system-method-selection]]), and read the asked coordinate off the intersection point. Check strictness before answering: if either boundary is dashed, the corner itself is excluded and the correct phrasing is "approaches but never reaches" — integer-answer variants then want the nearest solution-side integer. The word-problem twin needs no graph at all: to maximize one variable under a joint cap ("x + y ≤ 100, y is at least 20 — greatest possible x"), spend the MINIMUM on the other variable first; max x = 100 − 20. Minimizing works mirror-image: give the other variable its maximum.

## Desmos vs algebra
This is the highest-leverage Desmos territory in the entire section. Desmos shades inequality regions NATIVELY: type each inequality verbatim (no y-isolation needed — it accepts standard form directly, sidestepping the flip-changes-the-side hazard entirely), and the overlap region appears as the darkest area. Point-in-region items: plot the candidate points too and see which dot sits in the overlap. Strictness still needs your eyes — Desmos's boundary rendering for strict vs inclusive is subtle, so read the SIGN for membership decisions on boundary-sitting points. Algebra/point-testing wins only when candidates are few and coefficients are tiny (two mental substitutions beat any typing), or when no graph intuition is needed at all. Decision rule: **ugly coefficients, many candidates, or any region reasoning → Desmos shade-and-read; two clean candidates → just substitute; boundary-membership calls → read the sign yourself.**

## Misconceptions
- **misc-one-region-suffices** — Accepting a point that satisfies a single inequality as solving the system, holding an "any condition" model instead of "all conditions." Forms because single-inequality practice precedes systems and the habit transfers unedited. Trap: distractor points placed inside exactly one half-plane.
- **misc-shade-side-by-guess** — Choosing above/below by visual instinct or by the sign as written in STANDARD form (≥ "means above"), without isolating y or testing a point. Forms because the ≥→above rule is true only after y is isolated with a positive coefficient; rearranging across a negative y-coefficient flips the side. Distractor: the same boundary with opposite shading (direction-swap archetype).
- **misc-strict-boundary-accepted** — Counting a point on a dashed line as a solution because "it's on the line." Forms because touching feels like belonging; membership vs adjacency is never explicitly taught. Trap: a candidate placed exactly on the strict boundary (inclusion-swap archetype).
- **misc-solid-dashed-blur** — Matching a graph while ignoring line style, or translating "at least" to a dashed boundary. Forms because line style feels decorative rather than semantic. Choice sets pair otherwise-identical graphs differing only in boundary style.
- **misc-transposed-test-point** — Substituting the candidate's coordinates into the wrong slots (y for x). Produces acceptance/rejection flips on asymmetric inequalities; the transposed-pair distractor archetype in its point-testing costume.

## Diagnostic indicators
- misc-one-region-suffices: picks single-region distractor points; work shows one substitution per candidate instead of one per inequality.
- misc-shade-side-by-guess: errors concentrate on negative-y-coefficient boundaries; explains side choice as "greater means above" with the inequality still in standard form.
- misc-strict-boundary-accepted: misses exactly on boundary-sitting candidates; answers "it's on the line so it works."
- misc-solid-dashed-blur: graph-matching errors where the picked choice differs from the key only in line style.
- misc-transposed-test-point: inconsistent accept/reject on hand-checked points; fine when using Desmos.

## Remediation pathways
- misc-one-region-suffices: reframe a system as a series of gates — a point must show its ticket at EVERY gate; then drill with distractor points engineered to pass gate one and fail gate two.
- misc-shade-side-by-guess: one contrast demonstration — shade y ≤ 2x + 1 and −y ≤ 2x + 1 (equivalently y ≥ −2x − 1) — showing the rearrangement flipping the side; then install "isolate y first, or test the origin." If the flip mechanics are the root, revisit [[inequality-direction-logic]].
- misc-strict-boundary-accepted: teach membership as a sign question, not a picture question: on the boundary, the two sides are EQUAL, and a strict sign rejects equality. One boundary-point check drill cements it.
- misc-solid-dashed-blur: pair every graph-reading rep with a two-word callout ("solid, included" / "dashed, excluded") until line style is read as meaning.
- misc-transposed-test-point: enforce labeled substitution (write x = …, y = … above the plug-in) or route the student to Desmos plotting for candidate points.

## Mastery criteria
Student can decompose any shaded picture into inequalities (boundary, side, membership all correct), run the point-test protocol efficiently with early discards, propagate a known coordinate to an interval for the other, and adjudicate boundary-sitting points by sign. Evidence: consistent accuracy on graph-matching items whose choices differ in exactly one attribute, and on point-in-system items with single-region distractors — plus demonstrated fluency doing the same items via Desmos shade-and-read.

## Difficulty ladder
- **Easy**: one inequality, which-point or which-graph; origin test settles the side.
- **Medium**: two-inequality systems; dashed/solid discrimination; identify the inequality from a shaded graph.
- **Hard**: known-coordinate propagation; wedges and bands requiring TWO inequalities to describe one picture; negative-y-coefficient boundaries where naive side-reading fails; no-overlap topology reasoning.
- **Hardest**: region reasoning fused with optimization — the extreme point of the overlap (the boundary-intersection procedure of step 7, composing [[linear-system-method-selection]]) and word-built constraint systems ([[inequality-translation-and-integer-bounds]]).

## Teaching notes
- **Struggling**: start with membership, not pictures: one inequality, five points, plug and verdict each. Then introduce the picture as the map of all the "yes" points. Desmos makes this immediate — type the inequality, drop the points, see the verdicts.
- **Average**: teach boundary/side/membership as a three-attribute checklist for both reading and writing graphs; drill the origin test and the vertical-cut disambiguator; introduce the system-as-gates model.
- **Advanced**: negative-coefficient side flips, coordinate propagation, and picture-decomposition (band/wedge → two inequalities); train the Desmos entry-verbatim habit so rearrangement errors disappear.
- **1500+**: speed via tool arbitrage — default to Desmos for anything regional, reserve hand substitution for two-candidate items, and keep the one human judgment call sharp: strictness and boundary membership, which the graph won't decide for you.
