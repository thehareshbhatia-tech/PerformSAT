# Raw notes — math-panda ch17 "Angles" (Geometry & Trigonometry)

Source: College Panda SAT Math (Digital ed.), ch 17, scans p0101(right)–p0104.
Extraction is understanding-only; all wording, names, and examples below are ours.

## Concepts taught (candidate nodes)

- `triangle-exterior-angle-shortcut` — an angle formed by extending one side of a
  triangle equals the sum of the two interior angles it is NOT adjacent to. One-step
  replacement for the two-step "find third angle, subtract from 180" routine.
- `straight-line-angle-pairs` — angles along one side of a line at a point sum to 180;
  the workhorse for converting a given interior angle into its exterior partner.
- `transversal-angle-classes` — when a line crosses two parallel lines, the eight angles
  collapse into just two value-classes: every acute one is equal, every obtuse one is
  equal, and any acute+obtuse pair sums to 180. (Named pair types — vertical, alternate
  interior/exterior, corresponding, same-side interior — are all just instances.)
- `parallel-proof-conditions` — the converse direction: which single angle equality is
  *sufficient* to force two lines parallel (an alternate or corresponding congruence),
  vs. equalities that prove nothing (e.g., two angles at the same crossing point).
- `polygon-interior-angle-sum` — sum of interior angles = 180(n−2); each added side adds
  one triangle's worth. Regular polygon: divide by n for each angle. Exam mostly stays
  at triangles/quadrilaterals; pentagon+ appears as a composition ingredient.
- `angles-around-a-point` — full turn = 360; used when several segments meet at a point.

## Teaching philosophy observed

- Exterior-angle theorem is taught FIRST, before parallel lines — the author front-loads
  the single highest-leverage shortcut of the whole angle topic, then treats everything
  else as bookkeeping around it.
- Parallel-line angle names are listed once, then immediately deflated into the
  two-classes-of-angles compression. The message: don't memorize five pair names,
  memorize one invariant.
- Polygons get a brief, honest treatment with an explicit claim that the SAT rarely
  goes past quadrilaterals (mark: unverified-claim; matches our bank roughly).
- Worked solutions model *auxiliary reasoning*: extend a line, find the supplementary
  partner, then apply the exterior-angle shortcut — a fixed 3-move combo.

## Expert reasoning patterns (generalized)

1. **Convert at the straight line first.** When an angle sits outside a triangle,
   immediately compute its supplement to get an interior angle (or vice versa), then
   apply the exterior-angle relation. Experts never chase all three interior angles.
2. **Collapse the figure into acute/obtuse classes.** On any parallel-lines figure,
   assign one variable to the acute class, its supplement to the obtuse class, and
   read every marked angle as one or the other.
3. **Add the invisible parallel line.** For zig-zag/staircase figures between two
   parallels, draw an extra parallel through the bend point to split an unknown angle
   into two transversal angles.
4. **In dense multi-triangle figures, angle-chase triangle by triangle**, harvesting
   180-sums and vertical angles at each intersection instead of trying to see the
   whole figure at once.

## Misconceptions targeted (and why students hold them)

- **assumed-parallelism** — students apply parallel-line angle equalities to any two
  lines that *look* parallel. Formed because school diagrams are usually drawn to
  scale; the exam weaponizes "figure not drawn to scale." Trap: sufficiency-style
  items where only one of several candidate equalities actually forces parallelism.
- **equal-vs-supplementary-swap** — students remember "transversal angles are related"
  but pick the wrong relation (set an acute equal to an obtuse). Formed from
  memorizing pair names without the acute/obtuse compression. Distractors are built
  by offering both x and 180−x.
- **exterior-equals-adjacent** — treating the exterior angle as equal to the adjacent
  interior angle rather than the two remote ones; comes from a vague "exterior angle
  theorem" memory with no mental picture.
- **polygon-formula-off-by-one** — using 180n or 180(n−1); comes from memorizing the
  formula without the triangulation story. Fix baked into the source: each extra side
  = one extra triangle.

## SAT patterns claimed (verify against bank)

- Sufficiency-format items ("which condition is enough to prove ℓ∥m") appear in the
  digital exam (unverified-claim).
- Inequality-flavored angle items (given a > 74, what must be true of b on the other
  parallel line) — supplementary reasoning under inequality (unverified-claim).
- Angles-at-a-point items with 4+ rays where the answer is a sum x+y rather than a
  single angle (unverified-claim).
- Composite "regular polygon with two sides extended to form a triangle" items
  (unverified-claim).

## Difficulty escalation observed

single transversal, one unknown → two transversals / three parallels, variable sums
(a+b or a+b+c+d) → converse/sufficiency logic → composite figures (polygon + triangle,
star-shaped chains of 4+ triangles) where 3+ theorems compose. Hard end feeds
[[triangle-exterior-angle-shortcut]] into multi-triangle angle chases.

## Prerequisite edges implied

- `straight-line-angle-pairs` and `angles-around-a-point` precede everything.
- `triangle-angle-sum` (assumed known, never re-taught) precedes
  `triangle-exterior-angle-shortcut`.
- `transversal-angle-classes` precedes `parallel-proof-conditions` and the ch18
  similarity work (parallel segment inside a triangle ⇒ equal angles ⇒ AA).
- `polygon-interior-angle-sum` builds on `triangle-angle-sum`.

## What this source does well / poorly

- Well: the acute/obtuse two-class compression; teaching the converse (proof of
  parallelism) as its own skill; exercise set escalates cleanly into logic-style items.
- Poorly: no real-world contexts at all; polygons feel bolted on; no discussion of
  how to handle not-to-scale figures beyond the boilerplate note (no redraw ritual).
