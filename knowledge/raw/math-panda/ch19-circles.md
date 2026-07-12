# Raw notes — math-panda ch19 "Circles" (Geometry & Trigonometry)

Source: College Panda SAT Math (Digital ed.), ch 19, scans p0114(right)–p0121(left).
Extraction is understanding-only; all wording, names, and examples below are ours.

## Concepts taught (candidate nodes)

- `circle-core-quantities` — r, d=2r, A=πr², C=2πr as the four interchangeable handles;
  most items are conversions between two of them.
- `arc-measure-vs-arc-length` — two different quantities hiding under one word "arc":
  degrees of turn vs. actual distance along the rim. Minor arcs named by 2 points,
  major arcs by 3.
- `central-angle-arc-equality` — an arc's degree measure equals its central angle.
- `fraction-of-circle-method` — arc length = (θ/360)·C and sector area = (θ/360)·A are
  ONE idea: the central angle's share of the full turn scales the whole-circle
  quantity. Also runs in reverse (given arc length / circumference ratio → degrees).
- `inscribed-angle-half-arc` — vertex on the circle ⇒ angle = half its intercepted arc;
  central and inscribed angles on the same arc differ by a factor of 2.
- `semicircle-right-angle` — an angle inscribed in a semicircle (legs to a diameter's
  endpoints) is always 90°, regardless of where the vertex sits.
- `tangent-radius-perpendicular` — tangent line ⊥ radius at the point of contact.
- `radius-chord-bisection` — a radius ⊥ a chord bisects it, and a radius bisecting a
  chord is ⊥ to it; sets up a right triangle (half-chord, distance-to-center, radius).
- `equal-tangent-segments` — two tangent segments from one external point are congruent
  (kite structure with the two radii).
- `circle-equation-standard` — (x−h)²+(y−k)²=r²; center (h,k), radius r. Center-reading
  ritual: ask what x-value and y-value zero out each parenthesis (kills sign errors).
- `circle-from-diameter-endpoints` — center = midpoint of endpoints, radius = half the
  endpoint distance.
- `circle-axis-tangency` — tangent to an axis/line ⇔ radius equals the center's
  distance to it; "intersects the x-axis at exactly one point" is a tangency statement
  in disguise.
- `complete-the-square-circle` — converting expanded x²+y²+Dx+Ey=F to standard form:
  template with a blank, halve the linear coefficient, subtract its square, once per
  variable; divide out any common leading coefficient first. Explicit calculator note:
  rarely required — graphing the equation can recover center/radius without algebra.
- `circle-shift-translation` — moving a circle shifts (h,k) only; r is untouched
  (composes with the transformation ideas from function chapters).

## Teaching philosophy observed

- Degree/length disambiguation is taught BEFORE any formula — the author treats the
  vocabulary collision as the root misconception of the whole topic.
- Formulas are framed as "share of the whole turn" proportions, not as items to
  memorize; the same fraction θ/360 drives both arc length and sector area.
- Geometry facts are presented as a small toolbox of *drawing triggers* (tangent ⇒ draw
  radius to contact point; chord ⇒ drop radius-perpendicular; diameter ⇒ look for the
  right angle). Solutions literally begin by naming which segment "wants" to be drawn.
- Coordinate-circle work is taught as template-reading plus two rituals (zero-out for
  center; complete-the-square for messy forms), with an explicit de-escalation: the
  calculator can graph its way around the algebra. Pragmatism over purity.
- Bridges backward deliberately: circle items compose special right triangles (30-60-90
  from a 60° arc) and equilateral/inscribed figures from ch18.

## Expert reasoning patterns (generalized)

1. **Draw the missing radius/diameter/chord first.** Before computing anything, add the
   segment that converts the circle fact into a triangle: radius to tangency point,
   radius perpendicular to a chord, the diameter that completes an inscribed right
   angle. The figure is unfinished as given — completing it IS the problem.
2. **Route degrees ↔ fractions ↔ lengths through the share.** Convert whatever is given
   (arc length, sector area, angle) into the fraction of the full circle, then out to
   the requested quantity. One pipeline, both directions.
3. **Halve/double discipline.** Passing between central and inscribed views of the same
   arc always costs a factor of 2; experts annotate which kind of angle they hold
   before converting.
4. **Zero-out center reading.** For (x±h)², ask "what x makes this zero" instead of
   flipping signs by rule — immune to the minus-means-plus confusion.
5. **Translate wordy coordinate conditions into distances.** "Tangent to axis,"
   "intersects line at one point," "point lies on circle" all become one statement:
   distance from center = or ≠ radius. Plug-and-check candidate points/answers where
   possible.
6. **Chord problems are Pythagoras problems.** Half-chord, center-offset, radius form
   the canonical right triangle; set it up before hunting formulas.

## Misconceptions targeted (and why students hold them)

- **arc-name-conflation** — treating arc measure (degrees) and arc length (units) as
  the same number; formed because both are called "the arc" and both can appear in one
  problem. Trap design: give length, ask degrees (or vice versa) with distractors that
  skip the conversion.
- **sign-flip-blindness** — reading (x+2)² as center +2; formed by memorizing "h is in
  the equation" without the zero-out question. Distractor sets systematically pair
  (±h, ±k) so the pattern-matcher always finds their wrong answer.
- **r-vs-r-squared** — reporting the right-hand side as the radius (or area 49π ⇒
  "radius 49"); formed because the equation displays r² while questions ask for r,
  d, A, or C. Choices pair r with r² (and combine with sign-flips for a 2×2 trap grid).
- **central-inscribed-mixup** — applying the half rule to a central angle or forgetting
  it for an inscribed one; formed because both angles "sit on" the same arc and figures
  don't label the vertex location loudly. Diagnostic: answers off by exactly ×2 or ÷2.
- **tangency-not-recognized** — not decoding "touches at exactly one point" as
  radius-distance equality; students expect a picture cue rather than an algebraic one.
- **shift-changes-radius** — when translating a circle, altering the right-hand side
  too; over-generalizes from stretch transformations of parabolas.

## SAT patterns claimed (verify against bank)

- Completing the square is "not tested very often" and, when it is, a graphing
  calculator can substitute (unverified-claim; consistent with Desmos-era items —
  check bank + official tests before the tutor asserts).
- Equation-reading items lean on the (sign × r²) distractor grid (unverified-claim,
  easy to confirm from our distractor stats).
- General-form circle items ask for derived sums (a+b+c of the expanded coefficients)
  rather than the standard form itself (unverified-claim).
- Composite hard items: inscribed equilateral triangle → arc share; 60° arc + diameter
  → 30-60-90 chord lengths; two tangents → kite/quadrilateral area (unverified-claim).

## Difficulty escalation observed

Read one quantity from the equation or convert r↔A↔C → single-tool figure facts
(central angle share, inscribed-half, tangent-perpendicular) → build the equation from
scattered data (diameter endpoints, point-on-circle, axis tangency) → complete the
square / general form with leading coefficients → multi-theorem composites where a
drawn auxiliary segment plus a ch18 special right triangle carries the arithmetic,
and grid-in forms like 2√k ask for k. Hard end composes [[right-triangle-30-60-90]],
[[radius-chord-bisection]], and [[circle-equation-standard]] in one item.

## Prerequisite edges implied

- ch18 `pythagorean-theorem` + special-right templates → chord/tangent/arc-length
  computations.
- ch18 `inscribed-polygon-center-coincidence` → inscribed triangle/square arc items.
- ch17 `angles-around-a-point` (360 full turn) → `fraction-of-circle-method`.
- Quadratics vertex-form/completing-the-square (algebra chapters) →
  `complete-the-square-circle`.
- Midpoint + distance formula (coordinate geometry) → `circle-from-diameter-endpoints`.
- This chapter feeds ch20 radians (arc thinking reused with a new unit).

## What this source does well / poorly

- Well: the measure-vs-length disambiguation as the opening move; proportional
  "share of the circle" framing unifies arc and sector; drawing-trigger toolbox
  (radius-to-tangent, perpendicular-to-chord, diameter-for-right-angle) is exactly the
  reflex set experts have; honest calculator-era de-emphasis of completing the square.
- Poorly: no angle-of-rotation/real-world contexts (ferris wheel, gears); no
  intersecting-chords/secant power theorems (fine if truly off-exam, but the
  omission is silent); coordinate section never connects tangency to systems-of-
  equations discriminant reasoning; radians deferred to the next chapter leaves arc
  length taught degrees-only here.
