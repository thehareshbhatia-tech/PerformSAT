---
id: line-parabola-intersections
section: math
domain: advanced-math
skill: quadratic-systems, intersection-count
difficulty_span: [medium, hard]
prereqs: [linear-system-method-selection, discriminant-trichotomy, zeros-roots-factors-identity]
unlocks: [composite-decomposition]
related: [vieta-root-aggregates, desmos-decision-framework, system-parameter-tuning]
---

# Line meets parabola: substitute, then let the discriminant count

## What it is
The canonical nonlinear system on the digital SAT: one linear equation and one quadratic, asked either for the intersection point(s) or — more often at the hard band — for the number of solutions or a parameter that produces a specific count. The whole family reduces to one move: substitute the line into the parabola to collapse two equations into a single quadratic in one variable, then read the situation off that quadratic. Two real solutions means the line cuts the parabola; one means it is tangent; none means it misses. This is where systems reasoning and quadratic structure meet, and it is a favorite seam for multi-concept composites.

## Why it exists / why the SAT tests it
It fuses two independently tested skills — solving systems and analyzing a quadratic — so it separates students who can execute each in isolation from those who can chain them. The hard variant hides a discriminant question inside a system: "for what value of k does the line touch the curve exactly once" is a tangency question wearing a system's clothes, and students who don't recognize that reach for graphing or guessing instead of setting the discriminant to zero.

## Mental model
**Collapse to one quadratic; the discriminant is the referee.** Substitution turns the geometry (a line and a curve in the plane) into a single algebraic object whose discriminant reports how many times they meet — positive: two, zero: tangent, negative: none. You rarely need the actual intersection coordinates when the ask is about count.

## Expert reasoning process
1. Read the ask: coordinates, or a count / count-producing parameter? The ask decides the route.
2. Substitute the linear equation into the quadratic to get a single quadratic set to zero.
3. If coordinates are wanted: solve it (factor / formula / [[desmos-decision-framework]]) and back-substitute into the LINE — it is cheaper than the parabola — to get the paired coordinate.
4. If a count is wanted: form the discriminant of the collapsed quadratic and apply [[discriminant-trichotomy]] — do not solve.
5. If a parameter for tangency is wanted: set the discriminant to zero and solve for the parameter — this is the single most missed recognition in the family.
6. **Desmos decision:** for a concrete line and parabola, graphing and reading intersections is fastest and safest; for a symbolic parameter (k inside the equation), algebra via the discriminant wins because Desmos cannot solve the "how many" question over an unknown constant cleanly.

## Misconceptions
- **solve-when-you-should-count** — Grinding out the intersection coordinates when the item only asks how many there are. Forms because solving is the familiar reflex and "solutions" primes computation; wastes time and invites arithmetic error on an item the discriminant answers in one line.
- **tangency-not-recognized** — Failing to translate "touches at exactly one point" / "exactly one solution" into discriminant = 0. Forms because tangency is taught geometrically and the discriminant algebraically, and students never connect the two representations. Produces guessing on the highest-value items in the family.
- **back-substitute-into-the-hard-equation** — Plugging a found x back into the parabola rather than the line, doubling the arithmetic and the error surface. Forms from not noticing the line is the cheaper equation.
- **discriminant-sign-slip** — Miscomputing b²−4ac (sign of a c-term, a negative b squared) and inverting the count. Forms under time pressure; the same root error as in [[discriminant-trichotomy]].

## Diagnostic indicators
- **solve-when-you-should-count**: long scratch work with full coordinate solving on count-only items; right answer but far over time, or arithmetic slip.
- **tangency-not-recognized**: blank or guessed on "exactly one solution / touches once" parameter items while succeeding on plain intersection items.
- **discriminant-sign-slip**: count is off by exactly the two-vs-zero swap; the setup was right.

## Remediation pathways
- solve-when-you-should-count: drill ask-classification first — sort a mixed set into "wants coordinates" vs "wants a count" before solving anything.
- tangency-not-recognized: build the explicit bridge — geometric tangency ⇔ one repeated root ⇔ discriminant zero — with a Desmos slider showing the curve lifting off the line as the discriminant crosses zero.
- back-substitute error: make "return to the simplest equation" a stated habit.
- sign-slip: route to [[discriminant-trichotomy]] remediation.

## Mastery criteria
The student routes every item by its ask, uses the discriminant for all count and tangency questions without solving, sets the discriminant to zero on sight of "exactly one solution," and back-substitutes into the line. Proof: a mixed set including at least one symbolic-parameter tangency item solved without graphing.

## Difficulty ladder
- **Medium**: concrete line and parabola, find the intersection point(s).
- **Hard**: "how many solutions" with no parameter (discriminant sign); then a parameter k somewhere in the system with a target count; then tangency (discriminant = 0) for k.
- **Hardest / composite**: the intersection feeds a further step — a distance between the two points, a sum of roots via [[vieta-root-aggregates]], or a geometry measurement — the [[composite-decomposition]] territory.

## Teaching notes
- **Struggling**: one procedure only — substitute to one quadratic, then solve; defer the discriminant-for-count shortcut until solving is reliable.
- **Average**: introduce the count-vs-coordinates fork and the discriminant route; drill back-substitution into the line.
- **Advanced**: tangency ⇔ discriminant zero as a recognition trigger; symbolic-parameter items where Desmos can't shortcut.
- **1500+**: the item as a composite seam — anticipate the step after the intersection and set up so the intersection's byproducts (root sum/product) are already in hand.
