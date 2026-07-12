# Raw notes — Math source A ("orange"), Ch. 19: Angles, Triangles, and Trigonometry

Domain: Geometry & Trigonometry. Printed pages 629–695 (scans p0332–p0366; p0347/p0348
were duplicate scans of one spread). Sections: angle basics → finding angle measures →
triangles & polygons → similar triangles → trig ratios → perimeter/area/Pythagorean/
special right triangles → recap → 26 mixed additional problems. NOTE: despite the
chapter title, **radians are NOT covered here** (no radian section exists in this
chapter), and the per-chapter answer key was not in the provided page range. Congruence
is handled only implicitly (tick-mark notation), never as SSS/SAS/ASA.

---

## Concepts taught (candidate node ids + our-words definitions)

- `angle-vocabulary-and-notation` — an angle is the opening where two lines/segments meet
  at a vertex; three-letter naming puts the vertex in the middle; right angles get a
  square mark instead of an arc-plus-number.
- `angles-on-a-line-and-at-a-right-angle` — any set of angles composing a straight line
  totals 180°; any set composing a right angle totals 90°; two-angle cases are called
  supplementary / complementary. Acute (<90°), obtuse (90–180°), reflex (>180°) labels.
- `vertical-angles` — two crossing lines make two pairs of equal opposite angles;
  adjacent ones sum to 180°.
- `parallel-lines-two-angle-families` — a non-perpendicular line crossing parallel lines
  creates exactly two distinct angle values: every acute angle equals every other acute,
  every obtuse equals every other obtuse, and acute + obtuse = 180°. (The source
  deliberately collapses alternate-interior / corresponding-angle vocabulary into this
  single "small family / big family" invariant — a strong teaching move.)
- `figure-marking-conventions` — tick marks = congruent segments, matching arc counts =
  congruent angles, matching arrowheads = parallel lines; marks assert equality only
  (absence or difference of marks proves nothing).
- `triangle-angle-sum` — interior angles of any triangle total 180°.
- `side-angle-order-correspondence` — longer side sits across from bigger angle; the
  ordering of sides matches the ordering of opposite angles (test asks this directly and
  uses it as sub-step).
- `isosceles-symmetry-two-way` — two equal sides ⇔ the two angles across from them are
  equal; the inference runs in BOTH directions (equal angles prove equal sides too).
- `equilateral-60` — all sides equal ⇒ all angles 60° (180/3).
- `polygon-interior-angle-sum` — an n-sided polygon triangulates from one vertex into
  n−2 triangles, so interior angles total 180(n−2); regular polygon angle = that sum / n.
- `regular-hexagon-six-equilateral` — a regular hexagon splits from its center into 6
  equilateral triangles (note center-splitting is different from one-vertex
  triangulation), which then split into 30-60-90s; this is the bridge from hexagon
  problems to special-right-triangle arithmetic.
- `similar-triangles-definition` — same three angles = same shape, any size; every
  corresponding-side pair shares one common ratio; additionally the internal ratio of two
  sides within one triangle equals the matching internal ratio in the other.
- `aa-similarity-shortcut` — matching just two angles forces the third to match (all sum
  to 180°), so two shared angles certify similarity; one shared angle + one right angle
  is the most common test instance.
- `divided-triangle-similarity` — a line parallel to one side of a triangle (or an
  altitude dropped inside a right triangle) creates nested triangles similar to the
  original; nested-figure segment labels are NOT whole sides (part vs whole must be
  converted before any ratio is written).
- `altitude-to-hypotenuse-three-triangles` — dropping a perpendicular from the right
  angle to the hypotenuse produces three mutually similar right triangles; all
  hypotenuses correspond, all long legs correspond, all short legs correspond, and the
  within-triangle side ratios equal the across-triangle ratios (a peculiarity of this
  configuration).
- `parallel-side-splitter-proportion` — a line parallel to one side cuts the other two
  sides in equal proportions, so you can ratio the pieces directly without solving whole
  sides first (also gives trapezoid/triangle height ratios when the parallel line is
  horizontal — heights split in the same proportion as the slanted-side pieces).
- `bowtie-similar-triangles` — two triangles joined at a vertex (vertical angles) with a
  pair of parallel sides are similar, with correspondence FLIPPED across the vertex
  (top-left matches bottom-right); extending the parallel lines re-creates the familiar
  transversal picture and disambiguates the matching.
- `unknown-sides-via-shared-multiplier` — when only a ratio between similar figures is
  known, name the sides d and 2d (one constant, scaled), never invent concrete lengths;
  invented values can silently contradict later givens.
- `similar-triangles-in-the-plane` — parallel lines with the axes form similar right
  triangles (slope is the underlying shared ratio); perpendicular lines through a point
  create the altitude-to-hypotenuse configuration on the axes. Cross-representation link:
  one problem, solvable by slopes or by similarity.
- `right-triangle-side-names` — hypotenuse fixed by the right angle; opposite/adjacent
  are RELATIVE to the chosen acute angle (each acute angle swaps them).
- `sine-cosine-tangent-ratios` — sin = opp/hyp, cos = adj/hyp, tan = opp/adj; the ratio
  depends only on the angle's measure, never the triangle's size (similarity is why trig
  works); equal angles anywhere have equal sines/cosines/tangents.
- `trig-requires-right-triangle` — the ratios are DEFINED from right-triangle sides; an
  angle inside an oblique triangle still has a sine, but you may not compute it from that
  oblique triangle's side lengths — build or find a right triangle first.
- `cofunction-complement-identity` — sin x° = cos(90−x)° and vice versa, because the two
  acute angles of a right triangle are complementary and each one's opposite side is the
  other's adjacent side; if sin x = cos y with acute angles, then x + y = 90 (source
  claims most SAT sine+cosine items reduce to exactly this).
- `perimeter-vs-area-distinction` — perimeter = edge-length sum; area = square units of
  cover; the swap error is explicitly called out as frequently observed.
- `rectangle-area-unit-squares` — A = lw motivated by counting unit squares; square is
  the s×s special case.
- `triangle-area-half-rectangle` — diagonal halves a rectangle, giving A = ½bh; height
  must be perpendicular to base; for obtuse triangles the foot of the height can land
  outside the base (extend the base, or rotate the figure so the height drops from the
  widest angle).
- `decompose-dont-memorize-quadrilaterals` — trapezoid/parallelogram areas by cutting
  into rectangles + right triangles (or cut-and-slide a right triangle to turn a
  parallelogram into a rectangle); the average-the-two-parallel-sides-times-height
  shortcut is derived, not asserted.
- `pythagorean-theorem` — legs a, b and hypotenuse c satisfy a² + b² = c²; positioned as
  the FALLBACK when pattern recognition fails, not the default move.
- `pythagorean-triples` — 3:4:5 dominant, 5:12:13 occasional, 7:24:25 / 8:15:17 /
  20:21:29 rare; any positive multiple (including fractional) of a triple is a triple;
  recognition works from the RATIO, not the raw numbers.
- `triple-recognition-guardrails` — hypotenuse must be the longest side: leg 3 with
  hypotenuse 4 gives √7, NOT 5; triple recognition requires knowing which side is the
  hypotenuse before pattern-matching.
- `triangle-30-60-90` — sides opposite 30/60/90 are in ratio 1 : √3 : 2; short leg is
  the natural unit (x, x√3, 2x); canonical hiding place: an equilateral triangle cut by
  an altitude (halves: s/2, height s√3/2).
- `triangle-45-45-90` — isosceles right triangle, sides 1 : 1 : √2 (x, x, x√2);
  canonical hiding place: a square cut by its diagonal (diagonal s√2).
- `radical-side-misdirection` — a √3 (or √2) factor on a given side does NOT mean that
  side is the long leg (or hypotenuse); e.g. legs of 3√2 give hypotenuse 3√2·√2 = 6, and
  a short leg of 3√3 gives a long leg of 9. Assign roles from the ANGLES, then multiply.
- `relative-lengths-suffice-for-trig` — when the answer is itself a ratio (any trig
  value), actual lengths are irrelevant; work the whole problem in lowest-terms ratio
  units and skip the calculator.
- `dilation-scale-effects` (additional-problems only) — dilation scales every length by
  the factor (perimeter too) but leaves angles unchanged; area is NOT covered explicitly
  here (gap worth filling in our graph with an area-scales-by-k² node).

## Teaching philosophy observed

- Strict dependency ladder, each rung provable from the previous: line/right-angle sums →
  vertical angles → parallel-line families → triangle angle sum → isosceles/equilateral →
  polygon sums → similarity (AA justified via angle sum) → trig ratios (justified via
  similarity: ratio depends only on angle) → area → Pythagorean → special right
  triangles. Geometry facts are never presented as isolated formulas; each is derived on
  the page from earlier rungs (hexagon → equilateral → 30-60-90; area of triangle →
  half-rectangle; polygon sum → triangle fan).
- Trig ratios are taught BEFORE the Pythagorean theorem and special right triangles —
  deliberate: it frames trig as "similarity, packaged", and frames the special triangles
  as the computational engine you bolt on afterward. Most prep books do the reverse.
- Minimal vocabulary load: alternate-interior/corresponding-angles jargon is skipped in
  favor of one visual invariant (two angle families). Terminology is introduced but
  explicitly de-emphasized ("know the idea, not the term").
- Fluency drills isolate ONE micro-skill with parameter variation (given a, find its
  supplement; given the apex angle of an isosceles, find the base angles) before any
  multi-step item appears.
- Worked examples show 2–3 alternative solutions and then a Notes block ranks them by
  speed/error-resistance (e.g., ratio-only reasoning beats Pythagorean-with-calculator).
  Teaches route CHOICE, not just routes.
- Explicit metacognitive coaching: for chain problems, start deducing anything derivable
  and iterate — you don't need to see the whole path before starting; each new fact
  unlocks the next. Anti-freeze advice stated in prose, then modeled step-by-step with
  the figure redrawn at every deduction.
- Every section ends with pointers to specific real-test items (frequency evidence the
  authors clearly collected), then original practice problems tagged by section.

## Expert reasoning patterns (generalized)

- **Angle-chase loop**: scan for the five local generators — straight line 180, right
  angle 90, vertical angles equal, triangle 180, isosceles symmetry — fire whichever
  applies, write the new number ON the figure, repeat until the target falls out. The
  discipline is graphical: re-annotate after every inference.
- **Redraw-and-label discipline**: copy the figure; mark equal angles with matching arc
  counts and equal sides with matching ticks as they're DEDUCED (not just as given);
  extend parallel segments into full lines to expose the transversal picture; drop a
  perpendicular to manufacture right triangles where none exist; rotate a triangle so its
  base is horizontal before computing area. Never trust apparent scale, especially under
  a not-drawn-to-scale note.
- **Similarity spotting triggers** (checklist an expert runs on any multi-triangle
  figure): shared angle + parallel line cutting the triangle; shared angle + both
  triangles right; vertical angles + one pair of parallel sides (bowtie); altitude
  dropped to a hypotenuse (instant 3-way similarity); any two angle matches at all.
  Transitivity extends the web: triangles similar to a common third are similar to each
  other.
- **Part-vs-whole conversion before any proportion**: nested figures give PIECE lengths;
  convert part-to-part into part-to-whole (1:3 pieces ⇒ small:large = 1:4) before writing
  the similarity ratio. Writing ratios of mismatched spans is the dominant error mode in
  divided-triangle problems.
- **Ratio-first mindset**: if the question asks for a ratio (any trig value, "how many
  times longer"), collapse to lowest-terms relative lengths immediately and never touch
  real lengths; if a ratio between unknown sides is given, encode it as d and kd.
- **Recognition-before-computation hierarchy for right-triangle lengths**: (1) check for
  a Pythagorean-triple ratio; (2) check for 30-60-90 / 45-45-90 signals (angles given, a
  √3/√2 factor, an equilateral triangle or square cut in half, a hexagon); (3) only then
  Pythagorean theorem; trig-with-calculator last. Higher rungs are faster AND less
  error-prone.
- **Trig ↔ similarity equivalence**: "tan of this angle is 12/5" is read as "this is a
  5-12-13-shaped triangle" — a trig value IS a similarity class, so a given trig value
  plus one length resolves the whole triangle via scale factor.
- **SOH-CAH-TOA decision**: use similarity/proportion when two triangles are in play;
  use a trig ratio when one right triangle relates a known angle-value to sides. Both are
  the same underlying proportion; choose whichever names the unknown directly.
- **Composite-area protocol**: cut any straight-edged region into rectangles + right
  triangles along perpendiculars you draw yourself; for removed/shaded regions compute
  whole minus parts; for a parallelogram, slice a right triangle off one end and slide it
  to the other to form a rectangle.
- **Coordinate-plane transfer**: parallel lines share slope ⇒ the axis-triangles they cut
  are similar (slope = the shared leg ratio); a perpendicular pair through a point on
  both axes = altitude-to-hypotenuse configuration. Experts pick similarity when the
  numbers are leg-lengths, slope algebra when equations are given.

## Misconceptions the source targets (with the why)

- **similar-by-eyeball** — students certify similarity from visual resemblance and deny
  it for rotated/flipped pairs; forms because school exposure shows same-orientation
  pairs. Test exploits with flipped/rotated similar pairs and with lookalike triangles
  that share no two angles.
- **bowtie-same-side-pairing** — in vertex-joined triangles students match the two "top"
  angles because spatial position feels like correspondence; correct matching crosses the
  vertex. Distractors bake in the swapped ratio.
- **piece-equals-side** — in divided triangles, using a segment (piece of a side) as if
  it were the full side in a proportion; forms because the label sits where a side label
  usually sits. Distractor = the part-to-part answer when part-to-whole is needed.
- **marks-imply-inequality** — believing differently-marked sides must be unequal; marks
  only assert equality.
- **radical-flags-the-role** — "the side with √3 must be the long leg / with √2 must be
  the hypotenuse"; forms from always seeing 1 : √3 : 2 with integers on short sides.
  Items put the radical on the short leg or hypotenuse so naive matching inverts the
  scale factor (answer off by factor 3 or 2).
- **triple-autopilot** — seeing 3 and 4 (or 6 and 10) and asserting the 3:4:5 completion
  without checking which side is the hypotenuse; hyp 4 + leg 3 → other leg √7, not 5.
- **perimeter-area swap** — computing the one not asked; authors report seeing this
  error constantly; language cue ("fence vs paint") absent on test, so students must
  self-check units.
- **oblique-trig** — computing sin/cos/tan from a non-right triangle's sides because the
  angle and two sides are visible; forms because the ratio definitions get memorized
  without their right-triangle precondition.
- **concrete-numbers-for-ratios** — instantiating "AB = 2·DE" as AB=2, DE=1; the guess
  can contradict later givens; the fix (shared multiplier d/2d) needs explicit teaching
  because students distrust variables.
- **height-inside-the-triangle** — assuming a triangle's height always lands inside the
  base; obtuse triangles put the foot outside, so students refuse to extend the base or
  pick a wrong height.
- **scale-trust** — reading relative sizes off a figure labeled not-drawn-to-scale.
- **dilation-scales-angles** — thinking a scale-factor-4 dilation multiplies angle
  measures by 4 (angle measure is scale-invariant); tested via NOT-true selection.

## SAT patterns claimed (all unverified-claim; check vs official material + our bank)

- Parallel-lines + transversal and vertical-angles items are the entry-level geometry
  staples; triangle items are mostly angle-rule extensions.
- unverified-claim: the "vast majority" of sine+cosine problems reduce to the
  complement identity sin x = cos(90−x).
- unverified-claim: nearly every right triangle appearing in known test problems is a
  Pythagorean triple or an angle-based special right triangle; the theorem itself is
  mostly avoidable.
- unverified-claim: the test overwhelmingly prefers whole-number side lengths.
- unverified-claim: 3:4:5 is by far the most common triple; 5:12:13 occasional;
  7:24:25 / 8:15:17 / 20:21:29 spotted but rare; longer triple lists unnecessary.
- Recurring disguise pairs: 30-60-90 hidden in equilateral triangles (and hexagons);
  45-45-90 hidden in squares (diagonal); regular hexagon split into 6 equilateral
  triangles for area/side questions.
- Recurring configurations: divided triangle (parallel cut), altitude-to-hypotenuse,
  bowtie with parallel sides, axis-triangles from parallel/perpendicular lines in the
  xy-plane, trapezoid decomposition (occasionally with no triangle drawn, e.g. real-world
  shelf/blueprint dressing).
- Question shapes seen in the additional set: exterior-angle chains with isosceles;
  "which statement, if true, proves lines parallel"; must-be-true I/II/III on crossing
  lines; dilation NOT-true; area of composite (hexagon+square, triangle-of-triangles,
  board-minus-corner with stacked 30° angles); perimeter-ratio of similar triangles;
  cofunction with algebraic angle expressions (solve for the parameter).

## Prerequisite edges implied

- angles-on-a-line / vertical-angles / parallel-two-families → triangle-angle-sum →
  polygon-interior-angle-sum; triangle-angle-sum → aa-similarity-shortcut.
- ratio-and-proportion fluency (earlier chapter) → similar-triangles-definition →
  divided-triangle / bowtie / altitude-to-hypotenuse configurations.
- similar-triangles → sine-cosine-tangent-ratios (why trig values are size-free) →
  cofunction-complement-identity.
- rectangle-area → triangle-area-half-rectangle → decompose-dont-memorize-quadrilaterals.
- pythagorean-theorem → pythagorean-triples → triple-recognition-guardrails;
  equilateral-60 + isosceles-symmetry → triangle-30-60-90; square facts →
  triangle-45-45-90; regular-hexagon-six-equilateral → triangle-30-60-90.
- slope / linear equations (earlier chapter) ↔ similar-triangles-in-the-plane (two
  routes to one answer); solving linear equations → cofunction algebraic items.

## Difficulty escalation & hard-end composition

Easy: one generator (supplement, vertical angle, triangle sum, read a trig ratio off a
labeled right triangle). Medium: two-generator chains (isosceles + line angle; AA spot +
one proportion; triple recognition + one trig ratio). Hard: (a) long angle chases through
overlapping triangles requiring 4–6 sequential deductions with figure re-annotation;
(b) nested/divided figures where part-vs-whole conversion AND similarity must both fire;
(c) composites gluing special right triangles + area + regular-polygon decomposition +
radical arithmetic (hexagon area → side length → square area; equilateral-triangle art
figure: perimeter → side → composed area; rectangle-minus-triangle with three stacked 30°
angles requiring iterated 30-60-90 scaling). The hardest items compose:
regular-hexagon-six-equilateral + triangle-30-60-90 + triangle-area-half-rectangle +
radical-side-misdirection, or divided-triangle-similarity + parallel-side-splitter +
perimeter/ratio scaling. Trig hard items stay shallow computationally but hide the
right triangle (oblique figure, coordinate plane) or go algebraic via the cofunction
identity.

## What this source does well / poorly

Well: derivation-first sequencing (every fact earns its place); two-angle-family
compression of parallel-line angles; multiple ranked solutions per example; explicit
observed-error warnings (perimeter/area swap, radical misdirection, hypotenuse-longest);
ratio-first ethos with the shared-multiplier technique; anti-freeze deduction coaching;
real-test frequency pointers; disguise taxonomy (where each special triangle hides).

Poorly: no radians despite the chapter title scope (must be sourced elsewhere — gap for
our graph); congruence never formalized (tick-marks only; no congruence criteria);
similar-figures AREA scaling (k²) never stated even though a dilation problem brushes
against it; trig stops at ratio definitions + cofunction (no unit circle, no non-acute
angles); verbose multi-page solutions may model thoroughness over exam-speed; drills are
purely mechanical (no error-choice rationale); relies on its companion app for the
real-test items it cites, so frequency claims aren't independently checkable here.
