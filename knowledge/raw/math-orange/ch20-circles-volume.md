# Raw extraction — Math source A, Ch. 20: Circles and Volume (printed 697–764)

Domain: Geometry & Trigonometry. Sections: circles + central angles (20.1), circumference /
arc length / radians (20.2), circle area + sectors (20.3), the circle equation (20.4),
solids/volume (20.5). Instruction with embedded drills, worked examples (often two solution
paths + a notes block), recap, additional problems, answer key. Note: one interior spread of
20.1 (printed 710–711) was missing from the scan set; its content (circle crossing the x-axis
worked example, start of inscribed-polygon discussion) is fully reconstructable from the recap
and surrounding pages, so coverage below is complete.

## Concepts taught (candidate node ids)

- `circle-definition-radius` — a circle is the set of points at one fixed distance (radius)
  from a center; every segment from center to circle is a radius, so any two radii are equal.
  This equality is the engine behind almost every circle-angle deduction.
- `central-angle-360` — angles with vertex at the center sum to 360; a diameter splits the
  circle into two 180 halves. Central-angle bookkeeping (subtract knowns from 360) closes
  many problems.
- `diameter-midpoint-center` — given a diameter's endpoints in the xy-plane, the center is
  their midpoint (average the x's and the y's); d = 2r.
- `radius-triangle-isosceles` — any triangle with one vertex at the center and two on the
  circle has two radius-length sides, hence is isosceles; knowing one base angle gives the
  other, then 180-sum gives the apex central angle.
- `draw-the-radius-habit` — proactive construction move: when a marked point sits on the
  circle with no radius drawn to it, draw one and label it r. (Their name for this is just
  advice-in-bold; our plain name: **radius-completion move**.)
- `angles-on-coordinate-plane` — an angle θ measured from the positive x-axis with a
  radius-length terminal segment; drop a vertical to the x-axis to form a right triangle.
  Unit-circle trig without ever naming the unit circle: sin θ = y/r, cos θ = x/r,
  tan θ = y/x, with the crucial sign discipline that x and y are coordinates (can be
  negative) while r is a length (always positive).
- `reference-triangle-signs` — for θ beyond quadrant I, build the right triangle against the
  x-axis, find the interior reference angle (supplement for QII, 360-θ for QIV), use special
  right-triangle ratios for relative lengths, then assign signs from the quadrant of the
  endpoint.
- `circle-axis-symmetry` — any line through the center is an axis of symmetry; two on-circle
  points sharing a y-coordinate are mirror images across the vertical center line, so the
  center's x-coordinate is the average of theirs (same logic rotated 90° for shared x).
- `chord-center-right-triangle` — connecting the center, a chord endpoint (e.g. an x-axis
  intersection), and the foot of the axis of symmetry gives a right triangle whose hypotenuse
  is a radius; half-chord and center-height are the legs (Pythagorean triples show up here).
- `inscribed-polygon-radii-fan` — for a regular polygon inscribed in a circle, draw radii to
  every vertex; central angle = 360/n and every triangle formed is isosceles (equilateral for
  the hexagon). Square case: four 45-45-90 triangles whose hypotenuses are the sides.
- `circumference` — C = 2πr = πd; π defined as the circumference:diameter ratio.
- `radian-definition` — 1 radian is the central angle whose intercepted arc equals the
  radius. Their core chant (concept, not wording, worth keeping): radians of angle produce
  the same number of radii of arc. So arc length L = rθ directly when θ is in radians, and a
  full circle is 2π radians because C is 2π radii long.
- `degree-radian-conversion` — proportion degrees/radians = 360/2π (= 180/π); streamlined
  multipliers ×(π/180) and ×(180/π), but the proportion is presented as the always-available
  fallback if the multiplier direction is uncertain.
- `arc-length-proportional` — for degrees: L = (x/360)·C. Two interchangeable framings:
  fraction-of-circle, or a ratio L/C = x/360. Never convert radians→degrees for arc length;
  use L = rθ straight.
- `arc-notation-major-minor` — two-letter arc names default to the minor arc; a third
  interior letter disambiguates; major arc = the long way around; arcs can be "measured" in
  degrees (the central angle) as well as in length units.
- `tangent-perpendicular-radius` — a tangent touches at exactly one point and is
  perpendicular to the radius at that point; with two tangents from an external point, the
  tangency quadrilateral (center, two tangent points, external point) has interior angles
  summing to 360, with two right angles at the tangency points.
- `inscribed-angle-half-central` — an inscribed angle (vertex on the circle) is half the
  central angle on the same arc; equal inscribed angles ↔ equal intercepted arcs. Flagged by
  the source as rare on the test but used before.
- `circle-area-sector` — A = πr²; sector area = (x/360)·πr² or (θ/2π)·πr². Same
  proportional-part logic as arc length; the book explicitly says don't memorize the sector
  formulas, re-derive the proportion.
- `circle-equation-standard` — (x−h)² + (y−k)² = r² is the Pythagorean theorem applied to a
  generic on-circle point: legs (x−h) and (y−k), hypotenuse r. Origin-centered special case
  x² + y² = r².
- `circle-inequality-interior` — inside the circle ⇔ (x−h)²+(y−k)² < r², outside ⇔ > r².
  Membership testing by plugging points in.
- `complete-square-circle` — converting expanded form ax²+bx+ay²+cy+d=e to standard form:
  collect constants right, divide through by the (always matching) squared-term coefficient,
  complete the square separately in x and y, add both compensating constants to the right.
  Then r is the square root of the right side — a heavily-trapped step.
- `center-radius-shortcuts` — if only the center is needed: h = −(x-coefficient)/2 and
  k = −(y-coefficient)/2 (after normalizing the leading coefficient). If only the radius is
  needed: skip finding the center; move constants right and add (p/2)² + (q/2)².
- `volume-prism-cylinder` — V = ℓwh for right rectangular prisms (cube ℓ³); V = πr²h for
  right circular cylinders, framed as base-area × height (stacked circular slices).
- `surface-area-prism` — sum of 6 face areas; S = 2(ℓh + ℓw + wh); cube 6ℓ². Book advises
  computing three distinct faces and doubling rather than memorizing.
- `volume-cone-pyramid-sphere` — cone = ⅓ of its cylinder, pyramid = ⅓ of its prism (the
  pairing is taught as one analogy), sphere V = (4/3)πr³. All given in the test's reference
  box; cones/spheres/pyramids noted as rare (sphere and pyramid "not yet seen on known
  tests" — an unverified-claim to timestamp).
- `volume-scaling-effects` — how volume responds to dimension changes: radius enters squared
  (halve r ⇒ quarter V), height linearly (double h ⇒ double V); net effect is the product of
  factors. Taught as the fast alternative to grinding the algebra, with a warning that loose
  scaling reasoning invites careless errors.
- `density-mass-volume` — D = m/V; on the SAT it's a units-reading exercise (g per cm³ tells
  you the formula) more than physics.
- `liquid-fill-rate-shape` — filling a container at constant inflow: height vs. time graph
  shape is governed by cross-sectional area. Constant cross-section (cylinder) → linear;
  widening cone → concave-down (rises ever slower); sphere → slow-fast-slow S-shape. A
  qualitative graph-matching concept.

## Teaching philosophy observed

- **Trig before circle geometry.** 20.1 extends the previous chapter's right-triangle trig
  to the coordinate plane BEFORE arcs/sectors, so "circle trig" is taught as
  triangle-dropping, not as a new unit-circle formalism. The unit circle is never named;
  everything stays SOH-CAH-TOA + reference triangle + sign check. Good fit for SAT scope.
- **Derive, don't memorize, the proportional formulas.** Repeated principle: for arc length
  and sector area you only need "part/whole = angle/full-angle" and the ability to rebuild
  the proportion; formulas are quoted but explicitly demoted.
- **Radians taught as a physical definition** (arc = radius) rather than a conversion rule,
  then conversions derived from 360° = 2π rad. The instruction warns against
  converting radians to degrees when L = rθ applies — treats unnecessary conversion as an
  error source, not just inefficiency.
- **Dual solution paths on most worked examples** (e.g., ratio-of-arcs vs.
  fraction-of-circumference; plug-and-test vs. sketch-and-eliminate; formal algebra vs.
  proportional scaling), usually followed by a "notes" block naming the shortcut or the trap.
  This models solution-path choice as a skill in itself.
- **Sketch-first bias.** For circle-equation membership questions the first solution is
  always "draw the circle, mark diameter endpoints, eliminate choices spatially," with
  algebra as the verification layer.
- **Escalation within each section:** definitional drill (SkillDrills are pure mechanics:
  compute C from r, convert 16 angles, complete the square 6 times) → worked multi-step
  examples → mixed practice problems → chapter-end "additional problems" that hybridize
  sections (e.g., revolutions-per-minute × circumference × unit conversion; density from a
  dimension table; composite solids).
- Real-test cross-references per section (which official tests exercise the skill) — signals
  their frequency claims are grounded in released exams.

## Expert reasoning patterns (generalized)

1. **Radius-completion move**: on any circle figure, join the center to every marked
   on-circle point, label each r; read off isosceles triangles; propagate angles by
   base-angles-equal and 180-triangle-sum; close with central angles summing to 360.
2. **Reference-triangle protocol** for angles on the plane: drop a perpendicular to the
   x-axis (never the y-axis), find the acute interior angle, get side ratios from
   30-60-90 / 45-45-90 or Pythagoras using RELATIVE lengths (r need not be actual), then
   impose signs from quadrant last. Signs are a separate, final pass — that separation is
   the teachable discipline.
3. **Everything-is-a-proportion** for arcs and sectors: part/whole on one side, angle/full
   on the other; angle may be degrees over 360 or radians over 2π; "whole" may be C, πr², or
   simply 1 (fraction questions). One schema covers arc length, arc fraction, sector area,
   sector fraction, and back-solving for radius or circumference.
4. **Radian direct-multiply**: when θ is already in radians, L = rθ, no conversion, ever.
5. **Circle-equation reading**: standard form is read, not solved — center = (h, k) with
   sign flip, radius = √(right side). Expanded form triggers the complete-the-square-twice
   routine, or the half-coefficient shortcut when only center (or only radius) is asked.
6. **Symmetry-averaging**: two on-circle points with equal y ⇒ center x = mean of their x's;
   diameter endpoints ⇒ center = midpoint. Combined with the chord right-triangle
   (half-chord, vertical offset, radius) this solves most "circle meets axis" items via
   3-4-5 / 5-12-13 recognition.
7. **Tangency chain**: tangent ⇒ right angle at tangency ⇒ quadrilateral/triangle angle sum
   ⇒ central angle ⇒ arc fraction. The tangent fact is the entry point; the rest is the
   standard proportion machine.
8. **Solid decomposition**: composite objects (cones + cylinder "football") are summed by
   part; ⅓-factor links let you convert between a cone and its bounding cylinder mentally.
9. **Scaling-factor reasoning** for compare-two-solids items: track each dimension's factor
   through the formula (squared for r, linear for h), multiply the factors — with the
   author's own caveat that the formal substitute-and-simplify route is safer.
10. **Test-the-point** for interior/exterior questions: plug candidate coordinates into
    (x−h)²+(y−k)² and compare against r²; sketch first to see which candidates even need
    testing.

Desmos: this chapter does not teach a Desmos/graphing workflow (some problem headers carry a
graphing icon marking graphable items, but no calculator strategy is articulated). For our
product (built-in Desmos): circle-equation items are trivially checkable by pasting the
equation and reading center/radius/intersections; membership questions by plotting the point.
Worth authoring our own Desmos sidebars for 20.4-type items; expanded-form equations paste in
directly, which neutralizes the complete-the-square trap — our difficulty ladders should
account for that.

## Misconceptions targeted (and why students hold them)

- **r-as-coordinate**: treating r like x and y as if all three were signed coordinates, or
  conversely forgetting x/y can be negative because lengths never are. Forms because school
  trig lives in QI where everything is positive. Trap: answer choices offering the
  positive-only value of cos θ for a QII angle (the ± pair is always among the choices).
- **Wrong-sign square root when solving x² = k on the plane**: students take the positive
  root reflexively; position of the endpoint dictates the negative root. Same root cause.
- **Radius/diameter swap**: problems deliberately give one and ask in terms of the other
  (equation gives r², question asks diameter; circumference given, radius wanted). Forms
  because C = πd and C = 2πr coexist and students pattern-match on "the number next to π."
- **r² read as r**: from (x−h)²+(y−k)² = 100 concluding r = 100. The equation displays r²,
  but every other formula the student knows displays the quantity itself. The book's
  completing-the-square example (r² = 36 ⇒ r = 6, choice B vs trap √59-style choices) is
  designed around exactly this; distractor sets pair r, r², √(r²-ish constants).
- **Sign flip in center coordinates**: reading (x+5)² as h = +5. Forms because the standard
  form encodes subtraction and students read the visible sign. Distractors: all four
  (±h, ±k) combinations.
- **Halving-the-coefficient errors in completing the square**: forgetting to add the
  compensating constant to the right side, or completing the square without first dividing
  out a shared leading coefficient (equations with a = 2 or 3 are authored precisely to
  punish this).
- **Degree-radian mode errors**: converting radians to degrees before L = rθ (needless,
  error-prone), or mixing units inside one proportion. Forms because degrees feel like the
  "real" unit and radians like an obstacle; the book attacks this by making radians the
  native unit for arc length.
- **Arc ambiguity**: reading a two-letter arc as the major arc, or assuming the drawn/bold
  arc rather than the named one. Also "arc measures 150°" (degree measure) confused with
  arc length 150.
- **Inscribed vs central angle**: using an inscribed angle directly as the arc's fraction
  weight without doubling.
- **Not-to-scale trust**: figures deliberately drawn misleading ("figure not drawn to
  scale") so a 20° labeled angle looks 60°; students who eyeball rather than label
  mis-assign congruences. The book's inscribed-triangle example is built entirely on
  resisting the picture.
- **Volume scaling linearity assumption**: believing halving the radius halves a cylinder's
  volume (misses the square). Forms from over-generalized proportional reasoning — the most
  productive trap in the compare-two-cylinders design (choice ladder 8/16/32/64 maps each
  partial reasoning state to a choice).
- **Surface-area vs volume conflation**: cube surface area 24 ⇒ side 2 ⇒ volume 8; students
  who divide 24 by the wrong face count or cube the wrong number land on the other choices.
- **Density as trivia**: not realizing the units string (g/cm³) IS the formula; students
  stall hunting for a memorized fact.
- **Tangent-line assumptions**: not drawing the radius to the tangency point, so the right
  angle (the only usable fact) never enters the diagram.

## SAT patterns claimed (all unverified-claim until checked vs our bank/officials)

- Circle-equation items are the workhorse of this domain; sector/arc next; inscribed angles
  rare-but-attested; spheres and right rectangular pyramids "never yet on known tests"
  (volume formulas still in the reference box). Density appears occasionally with the
  formula effectively given.
- Liquid-fill height-vs-time graph matching has appeared exactly once but confuses many
  students (their motivation for teaching it).
- The reference box at the start of each math section supplies circumference, area, and all
  volume formulas — so recall is never the tested skill; selection and manipulation are.
- Grid-in variants: arc fraction as decimal, radius from area, "one possible integer value"
  ranges (bold-arc between 20 and 21 ⇒ integer x range), and translate-circle-until-tangent
  (find shift a so the circle touches the x-axis ⇒ a = k − r style).
- Recurring word-problem shells: revolutions × circumference → speed with unit conversion;
  pour-from-gallon into cylindrical tubes (floor division); optimal-cone volume with h
  expressed in terms of r (substitution into the formula); slab density from a dimensions
  table; concentric-region ("dog space") annulus area differences.
- Difficulty escalation within the domain: (easy) plug into C/A/V formulas, identify center
  and radius from standard form → (medium) complete the square with a = 1, arc/sector
  proportions, surface area → (hard) a ≠ 1 completing the square, radians-native reasoning,
  tangency + polygon angle sums, composite/compare solids, translate-until-tangent,
  cross-section fill-rate graphs. Chapter-end mixed problems deliberately hybridize with
  unit conversion and ratio machinery from earlier chapters.

## Prerequisite edges implied

- right-triangle trig (SOH-CAH-TOA) and special triangles 30-60-90 / 45-45-90 → angles on
  the coordinate plane, inscribed squares/hexagons
- Pythagorean theorem + triples → chord/axis right triangles, circle equation derivation
- isosceles base-angle theorem + triangle angle sum → central-angle deductions
- completing the square (quadratics chapter) → circle standard form
- proportions/ratio fluency → arc length, sector area, radian conversions
- polygon interior-angle sum → tangency quadrilateral problems
- midpoint/averaging on the coordinate plane → center from diameter endpoints
- unit conversion chains → circumference-speed and density word problems
- (forward edge) radian fluency → trig functions beyond SAT scope

## What this source does well / poorly

Well: the radian treatment (definition-first, "angle radians = arc radii" invariant) is the
cleanest I've seen and directly transplantable as a mental model; sign discipline for
plane angles as a separate final pass; consistent dual-solution + notes structure that names
shortcuts and traps; completing-the-square shortcuts (half-coefficient center read) with the
r vs r² warning; the liquid-fill cross-section intuition; honest frequency labeling (rare
topics flagged as rare).

Poorly: no calculator/Desmos strategy anywhere in the chapter despite circle equations being
the single most Desmos-vulnerable SAT topic — a major gap our product should exploit; 20.1's
coordinate-plane trig is long-winded relative to its SAT yield (the same reference-triangle
protocol is re-derived four times at 30/120/330 degrees); inscribed-angle coverage is thin
(one worked example) given real-test attestations; no unified "which circle tool when"
decision map — students get ten tools serially but no routing logic (our graph node should
supply the router: marked points → radii fan; tangent word → right angle; equation given →
form conversion; arc/sector ask → proportion machine; xy-intersections → symmetry averaging).

## Cross-cutting observations

- The chapter's deep invariant: nearly every circle skill is "equal radii" + "part/whole
  proportionality" wearing different clothes. A single graph node on proportional circle
  reasoning could parent arc length, sector area, arc fraction, and degree-radian conversion.
- The 3D half of the chapter is formula-light by design (reference box) — its real skills
  are decomposition, scaling-factor tracking, and units reading; that's how we should tag
  bank items, not by shape name.
- Trap authoring recipe visible throughout: enumerate the partial-work states (kept the
  square, forgot the doubling, flipped the sign, used diameter) and mint one distractor per
  state. Answer keys confirm each choice maps to a nameable error.
