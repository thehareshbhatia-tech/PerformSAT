# Raw notes — College Panda SAT Math, Ch 20 "Radians" (Geometry & Trigonometry)

Source scope: p0121 (right half) – p0123. Left half of p0121 is the tail of the circles chapter (circle-equation exercises) — not covered here.

## Concepts taught

- `radian-as-angle-unit` — a radian is just a second unit for measuring angles, the way meters coexist with feet; nothing mystical about π appearing in the values.
- `pi-radians-equals-180` — the single anchor fact: a half-turn is π radians and also 180°, so the two unit systems are locked together by one equation.
- `degree-radian-conversion` — multiply by a fraction equal to 1 (π rad over 180°, or its reciprocal) and let the units cancel; the direction of conversion decides which fraction to use.
- `radian-arc-length-link` — with the central angle in radians, arc length is radius × angle and sector area is half × radius² × angle; radians exist because they make these relationships clean.
- `arc-fraction-central-angle` — an arc that is some fraction of the circumference subtends a central angle that is the same fraction of a full turn (2π rad / 360°).
- `slope-to-angle` — the slope of a line through the origin is the tangent of its inclination angle, so recognizable slopes (√3, 1, 1/√3) map to special angles; a coordinate point's angle to the x-axis comes from the same idea.
- `coterminal-and-multi-turn-angles` — angles beyond one full turn (e.g., several rotations) are handled by counting full turns of 2π / 360°.

## Teaching philosophy observed

- Demystify first: the author's opening move is to normalize π ("it's just a number ≈ 3.14") before any procedure. The emotional barrier to radians is treated as the real obstacle, not the math.
- One anchor fact + dimensional analysis: instead of memorizing two conversion rules, the student learns π rad = 180° and derives both directions by unit cancellation, explicitly modeled on physics-style unit conversion ("degree symbols cancel just as they should").
- Explicit deprioritization: arc-length/sector formulas in radians are labeled nice-to-know, not must-memorize, keeping the chapter's memory load to a single fact.
- Immediate bidirectional practice: worked material covers deg→rad, then rad→deg (flip the factor), then a coordinate-geometry application — the third example deliberately fuses radians with slope/special-triangle knowledge rather than staying in pure conversion land.

## Expert reasoning patterns (generalized)

1. **Unit-cancellation conversion.** Decide which unit must disappear; write the conversion fraction with that unit in the denominator; multiply and simplify. This eliminates the "do I multiply by π/180 or 180/π?" coin flip entirely.
2. **Sanity-check by size.** π/4 ≈ 0.79 while 45 is huge — expert converts and glances at magnitude to confirm direction was right (implicit in the answer checks).
3. **Fraction-of-a-turn thinking.** For circle problems (arc is 1/5 of circumference, arc ratios on crossing diameters, inscribed equilateral triangle), don't convert anything: reason in fractions of 2π directly. Central angle = fraction × 2π.
4. **Slope → tangent → special triangle.** For "angle formed by a segment/line with the x-axis": drop a perpendicular to form a right triangle, read the leg ratio from slope or coordinates, recognize the special-triangle ratio (1:√3, 1:1), name the angle, express in radians. Hard variants sum two such angles from two segments.
5. **Strip full turns.** For angles > 2π, subtract multiples of 2π (or 360°) until landing in one turn; express leftovers as kπ if asked.
6. **Desmos/calculator note (ours):** the source doesn't discuss calculator mode here, but every grid-in like "3.4 radians ≈ how many degrees" is pure multiplication (3.4 × 180/π) that our built-in Desmos evaluates directly; students must NOT type trig of it or rely on a degree-mode assumption. Flag deg/rad mode explicitly when we teach Ch 21.

## Misconceptions targeted (and why students hold them)

- **radians-are-alien** — students treat π-containing values as a different species of number, because school introduces radians late and always symbolically. Effect: freezing on conversion items, or refusing to compare π/4 with decimal choices. Fix built into the chapter: π is a number; 3.14 rad ≈ 180°.
- **conversion-direction-flip** — memorizing "multiply by π/180" as a ritual with no units attached; under pressure the ritual reverses. Produces answers off by a factor of (180/π)² ≈ 3283 or picking the reciprocal-looking distractor. The unit-cancellation habit is the antidote.
- **radians-must-contain-pi** — belief that a radian measure is only valid written with π, so "3.4 radians" looks like an error. Comes from only ever seeing textbook multiples of π/6, π/4. Exercise design (a plain-decimal radian grid-in) attacks it directly.
- **mixed-unit-arithmetic** — adding/subtracting a degree quantity and a radian quantity without converting one (exercise design: angle difference given in degrees, answer demanded in radians; or one angle given in each unit). Students hold it because both are "angle numbers" and the units are invisible in symbolic work.
- **arc-length-vs-angle-conflation** — treating an arc's radian measure and its length as interchangeable; works only when r = 1, so it survives unit-circle-only practice and breaks on real circles.

## SAT patterns claimed (unverified-claim — check against official material + our bank)

- Pure conversion both directions appears as easy multiple choice AND as grid-in with decimal radians (disregard-the-degree-sign instructions).
- Angle-difference items mix units deliberately (given in degrees, answer in radians).
- Radian questions frequently arrive dressed as circle geometry: fraction-of-circumference arcs, crossing diameters with arc ratios, inscribed regular polygons, sector area given → central angle sought.
- Coordinate-plane angle items (angle between a segment and x-axis, or between two segments) expect special-triangle recognition from slope/coordinates, answers in radians.
- Arc length = rθ and sector area = ½r²θ are claimed to be nonessential for the SAT (formulas derivable / rarely required) — verify before we deprioritize.

## Prerequisite edges implied

- `pi-radians-equals-180` ← fraction arithmetic, unit-conversion fluency (proportions).
- `slope-to-angle` ← slope as rise/run; special right triangles (30-60-90, 45-45-90); tangent ratio (forward-references Ch 21 — the book actually uses it BEFORE formally teaching trig, leaning on triangle ratios only).
- `arc-fraction-central-angle` ← circle circumference; central-angle/arc correspondence.
- `coterminal-and-multi-turn-angles` ← degree-radian conversion.

## Difficulty escalation observed

Easy: single conversion, friendly multiples of π. Medium: conversion embedded in angle arithmetic or mixed units; decimal radians. Hard: no conversion at all — radians as the language for circle-geometry composites (arc ratios on diameters, inscribed equilateral triangle) and coordinate-angle items requiring slope→special-triangle→angle chains, including summing two angles from two segments.

## What this source does well / poorly

- **Well:** kills radian anxiety in three sentences; single-anchor-fact + unit cancellation is the most robust conversion method to teach; exercises escalate into genuinely SAT-flavored composites instead of staying at drill level.
- **Poorly:** never gives the "1 radian ≈ 57.3°, a radian is the angle whose arc equals the radius" geometric meaning — the arc-length-ratio definition is absent, so `radian-as-arc-length-ratio` intuition must come from elsewhere for our graph. No calculator/Desmos guidance in this chapter. Arc-length/sector formulas are name-dropped then shelved; our treatment should connect them to WHY radians exist (they're the payoff).
