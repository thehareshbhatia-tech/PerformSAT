# Raw notes — math-panda ch18 "Triangles" (Geometry & Trigonometry)

Source: College Panda SAT Math (Digital ed.), ch 18, scans p0105–p0114(left).
Extraction is understanding-only; all wording, names, and examples below are ours.

## Concepts taught (candidate nodes)

- `triangle-area-any-base` — area = ½·base·height where ANY side may serve as base;
  the height is the perpendicular dropped from the opposite vertex and may land
  outside the triangle. "Altitude" = height.
- `isosceles-side-angle-link` — equal sides sit opposite equal angles, and the converse.
  Equilateral ⇒ all angles 60.
- `isosceles-case-split` — one known angle in an isosceles triangle yields TWO possible
  triangles (known angle is the repeated one, or the lone one); questions asking for
  greatest/least possible value are testing whether you enumerate both cases.
- `pythagorean-theorem` + `pythagorean-triples` — leg²+leg²=hyp²; recognizing the
  common integer triples (3-4-5 family incl. scaled multiples, 5-12-13, 7-24-25,
  8-15-17) as a speed tool, never a necessity.
- `right-triangle-45-45-90` — isosceles right triangle; hypotenuse = leg·√2. Derivable
  on demand from the Pythagorean theorem (and equals half a square cut on its diagonal).
- `right-triangle-30-60-90` — sides x : x√3 : 2x opposite 30/60/90; derivable by
  halving an equilateral triangle of side 2x (the 2x choice avoids fractions).
- `triangle-congruence-criteria` — SSS/SAS/ASA/AAS suffice; ASA and AAS collapse into
  "two angles + any side"; SSA is NOT a criterion (two triangles possible when the
  angle is acute); correspondence is encoded in the naming order of the vertices.
- `triangle-similarity-criteria` — AA (dominant on the exam), SAS-proportional,
  SSS-proportional; similar = same shape, scaled. Corresponding sides share one ratio,
  and within-triangle ratios also transfer ("side a over side b" equal in both).
- `letter-order-correspondence` — in a congruence/similarity statement, the k-th
  letters correspond; you can read off corresponding sides/angles from names alone
  with no figure.
- `parallel-cut-similarity` — a segment parallel to one side of a triangle cuts off a
  smaller AA-similar triangle (equal corresponding angles from the parallel).
- `altitude-hypotenuse-three-similar` — dropping the altitude to the hypotenuse of a
  right triangle produces three mutually similar right triangles.
- `similar-polygons` — similarity generalizes beyond triangles: equal corresponding
  angles + one common side ratio; quadrilateral angle sum 360 composes in.
- `triangle-inequality` — any side < sum of the other two; typical answer shape is a
  compound inequality band for the unknown side.
- `inscribed-polygon-center-coincidence` — a regular polygon inscribed in a circle
  shares its center with the circle; a square's diagonal is then a diameter (bridges
  into ch19).

## Teaching philosophy observed

- Both special right triangles are PROVEN (from square-diagonal and halved-equilateral
  constructions), with an explicit meta-note: the proofs aren't testable, but the
  *moves inside them* (drop a perpendicular, choose 2x to dodge fractions) are exactly
  what hard SAT items require. Proof as move-training, not rigor.
- Correspondence is treated as a *reading skill* (letter order) before any geometry —
  the author bets most congruence/similarity errors are bookkeeping errors, not
  concept errors. Our bank's distractor data can test this bet.
- SSA gets an honest "why not" (two triangles satisfy it) with a scope note that the
  exam won't probe the ≥90° nuance — calibrated honesty rather than over-teaching.
- Sufficiency-format items ("which additional fact proves congruence/similarity?")
  are drilled repeatedly — treating criteria as *minimum information sets*, which is
  the digital-SAT house style for this topic.

## Expert reasoning patterns (generalized)

1. **Tick-mark ritual.** In any overlapping or shared-vertex figure, mark equal angles
   with matching tick counts FIRST; then name triangles by walking the tick pattern.
   Correspondence falls out mechanically, and the ratio equation writes itself
   ("side opposite 1-tick over side opposite 1-tick = side opposite 2-tick over ...").
2. **Sides, not sub-segments.** When a parallel cut creates nested similar triangles,
   the similarity ratio uses WHOLE triangle sides; a piece of a side (the part above
   the cut) is not a side of either triangle. Check every ratio entry: "is this a full
   side of the triangle I named?"
3. **Case-enumerate isosceles.** Given one angle and "isosceles," always branch into
   both placements before optimizing anything.
4. **Drop the strategic perpendicular.** For any 120°-vertex isosceles, equilateral
   height, or non-right triangle area, drop an altitude to manufacture a 30-60-90 or
   45-45-90; radicals in the answer choices are the tell.
5. **Scan for triple multiples** before computing: a 12-13 pairing or 21/28/35-style
   numbers signal a scaled 3-4-5 / 5-12-13, skipping the square-root work.
6. **Angle-ratio ≠ side-ratio.** Never scale sides by the ratio of the opposite
   angles; only the special-right templates or trig convert between the two.

## Misconceptions targeted (and why students hold them)

- **angle-ratio-projection** — believing the side opposite 60° is twice the side
  opposite 30° "because 60 is twice 30." Formed by over-generalizing proportionality
  from similar-triangle scaling to within-triangle angle/side relations. The 30-60-90
  template (x, x√3, 2x) is the counterexample.
- **sub-segment-as-side** — in a parallel-cut figure, using top-piece : whole-side or
  top-piece : bottom-piece as the similarity ratio. Formed because the pieces are
  visually salient and the numbers are placed to make the wrong ratio effortless
  (e.g., pieces 9 and 3 tempting a 3× answer). Problem DESIGN: distractor = the
  answer produced by the piece-ratio.
- **ssa-counts** — assuming two sides + a non-included angle lock a triangle; formed
  because SSA "feels like" SAS. Trap format: sufficiency items where the SSA option
  is a distractor.
- **unique-isosceles** — assuming a given angle must be the repeated one; produces
  exactly one of the two candidate answers, and "greatest possible" phrasing exposes it.
- **name-order-blindness** — matching sides by size or position in the figure instead
  of by letter order; produces ratio equations that mix non-corresponding sides.
  Diagnostic: student's wrong answer is a correct computation on wrongly paired sides.
- **hypotenuse-misplacement** — putting a leg in the c-slot of the Pythagorean theorem
  when the right angle's position is only given verbally (no figure). Digital-SAT
  relevance: several exercises are figure-free by design, forcing a self-drawn sketch.

## SAT patterns claimed (verify against bank)

- AA is "by far" the most-tested similarity criterion (unverified-claim; plausible —
  check bank distribution).
- Sufficiency-format congruence/similarity items are a recurring digital shape
  (unverified-claim).
- Figure-free verbal triangle setups (student must sketch) are common at mid/hard
  (unverified-claim).
- Shadow/pole proportion items (real-world similar triangles) still appear
  (unverified-claim).
- Answer choices with radicals (a√b forms, perimeters like N + N√3) signal special-right
  decomposition items (consistent with our M2 calibration).

## Difficulty escalation observed

Direct formula (area, one Pythagorean step) → recognize special right / triple →
compose two tools (inscribed square→diagonal→45-45-90; equilateral height; isosceles
120° area) → correspondence bookkeeping under overlap (altitude-to-hypotenuse,
crossed segments, trapezoid similarity) → sufficiency logic and figure-free verbal
builds with case splits. Hard end composes [[right-triangle-30-60-90]] +
[[parallel-cut-similarity]] + [[triangle-inequality]] with circle facts from ch19.

## Prerequisite edges implied

- ch17 `transversal-angle-classes` → `parallel-cut-similarity` (parallel ⇒ equal angles ⇒ AA).
- ch17 `triangle-exterior-angle-shortcut` + `straight-line-angle-pairs` → isosceles
  angle chases.
- `pythagorean-theorem` → both special-right templates → circle chapter's
  chord/tangent computations.
- Radical simplification (algebra) → special-right answers.
- `letter-order-correspondence` → all congruence/similarity problem-solving.

## What this source does well / poorly

- Well: correspondence-as-reading-skill; tick-mark ritual is a genuinely transferable
  expert habit; explicit anti-misconception passages (angle-ratio, sub-segment) with
  the WHY; sufficiency drilling matches the modern exam; proofs used as move-training.
- Poorly: no trig at all in this chapter (SOHCAHTOA lives elsewhere), so similar-right-
  triangle ↔ trig-ratio bridge is missed; area of non-right triangles gets only one
  hard exercise; no coordinate-plane triangles; dense pages, few visuals per concept
  relative to the concept count.
