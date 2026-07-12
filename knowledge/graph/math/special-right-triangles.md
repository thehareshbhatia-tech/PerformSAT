---
id: special-right-triangles
section: math
domain: geometry-trigonometry
skill: geometry.right-triangle-pythagorean, geometry.triangle-area
difficulty_span: [medium, hard]
prereqs: [pythagorean-theorem-and-triples, triangle-properties-toolkit]
unlocks: [soh-cah-toa-and-cofunction, triangle-properties-toolkit]
related: [similarity-as-scaling, triangle-properties-toolkit]
---

# Special right triangles: templates you can rebuild, hidden where the test likes to hide them

## What it is
Two angle-determined side templates. **45-45-90** (an isosceles right triangle): sides x : x : x√2 — it is half a square cut on its diagonal, so a square's diagonal is s√2. **30-60-90**: sides x : x√3 : 2x opposite the 30°, 60°, 90° angles — it is half an equilateral triangle cut by an altitude (side 2x avoids fractions; height = x√3). Both templates are derivable on demand from the Pythagorean theorem, and the derivations aren't trivia: the *moves inside them* (drop a strategic perpendicular; choose the variable to dodge fractions) are exactly what hard items require. A regular hexagon fans from its center into six equilateral triangles, which halve into 30-60-90s — the bridge from hexagon problems to this arithmetic.

## Why it exists / why the SAT tests it
Angles determine shape (similarity), so a single given angle plus one side resolves an entire right triangle — the test probes whether students exploit that. The templates rarely appear labeled; they hide inside equilateral triangles, squares, hexagons, 120°-apex isosceles triangles, and circle figures (a 60° arc's chord). Radicals in the answer choices (a√b forms, perimeters like N + N√3) are the reliable tell that a special-right decomposition is intended — consistent with our M2 calibration.

## Mental model
**Two similarity classes with name tags.** Every 45-45-90 is the same shape; every 30-60-90 is the same shape. Meeting one means you already know all its proportions — the only question is the scale. Assign roles FROM THE ANGLES (smallest angle faces shortest side), find the one known side's role, scale the whole template.

## Expert reasoning process
1. Detect the trigger: a 45° or 30°/60° angle; a square's diagonal; an equilateral triangle needing a height; a hexagon; a 120° isosceles apex (its altitude makes two 30-60-90s); radical answer choices.
2. Assign roles by angle, never by which given number carries a radical: in 30-60-90, short leg faces 30°, long leg (x√3) faces 60°, hypotenuse (2x) faces 90°.
3. Identify the given side's role, solve for x, then read off the requested side. If the given is the long leg, divide by √3 (rationalize); if the hypotenuse, halve.
4. When no right triangle exists yet, MAKE one: drop an altitude from the apex of an isosceles or equilateral triangle. This one construction converts most "impossible-looking" area/perimeter items into template arithmetic.
5. For hexagons: center-fan into 6 equilateral triangles (side = radius), then halve one for heights. Hexagon area/side/apothem questions all route through here.
6. Forgotten template? Rebuild in 20 seconds: square of side 1, diagonal √2; equilateral of side 2, halved — legs 1 and √3, hypotenuse 2.

## Misconceptions
- **radical-flags-the-role** — assuming the side carrying √3 must be the long leg (or √2 the hypotenuse). Forms because textbook instances almost always put integers on the short sides. Items deliberately put the radical on the short leg or hypotenuse: legs of 3√2 give hypotenuse 3√2·√2 = 6; a short leg of 3√3 gives a long leg of 9. Naive matching inverts the scale factor — answers off by a factor of 3 or 2, both listed as distractors.
- **angle-ratio-projection** — expecting the side opposite 60° to be twice the side opposite 30°. The template (x, x√3, 2x) is the counterexample; see [[triangle-properties-toolkit]]. The 2x answer for the long leg is a standing distractor.
- **template-as-trivia** — memorizing 1:√3:2 as a chant with no picture, so under any disguise (equilateral half, hexagon) the template never activates. Forms when the derivations are skipped. Shows as Pythagorean grinding (slow, radical-error-prone) on items designed for template recognition.
- **which-template-blur** — mixing the two templates (using √2 in a 30-60-90). Forms from rote coexistence; the fix is anchoring each to its parent shape (square vs. equilateral).
- **rationalization-stumble** — given the long leg, dividing by √3 incorrectly (or not at all). An algebra gap surfacing here; distractors include the unrationalized and mis-rationalized forms.

## Diagnostic indicators
- Answer off by exactly ×3 or ×2 (or their reciprocals) on radical-side items → **radical-flags-the-role**.
- Long leg reported as 2× short leg → **angle-ratio-projection**.
- Long solve times + Pythagorean work visible on equilateral/hexagon items → **template-as-trivia** (recognition gap).
- √2 appearing in 30-60-90 work → **which-template-blur**.
- Correct setup, wrong final radical form → **rationalization-stumble**.

## Remediation pathways
- **radical-flags-the-role**: the two burn examples (legs 3√2 → hypotenuse 6; short leg 3√3 → long leg 9), then the rule as a chant: "roles from angles, then multiply." A four-item set with radicals placed on every role cements it.
- **angle-ratio-projection**: measure a drawn 30-60-90 — the long leg is visibly less than double the short. Then the template as the fact that replaces the intuition.
- **template-as-trivia**: teach the derivations as the memory — square-diagonal and halved-equilateral, drawn by the student. Recognition drills where the triangle is embedded (equilateral height, hexagon slice, square diagonal) and the student's first move must be naming the hidden template.
- **which-template-blur**: parent-shape anchoring — √2 belongs to squares, √3 belongs to equilaterals/hexagons. One mixed set.
- **rationalization-stumble**: route to radical-arithmetic practice (algebra cluster).
- If the altitude-drop construction never occurs to them, revisit [[triangle-properties-toolkit]] (isosceles symmetry — the altitude is the mirror line).

## Mastery criteria
Student assigns roles from angles on radical-side items without inversion, drops the strategic altitude unprompted on equilateral/isosceles-120° items, routes hexagon questions through the center-fan, and can rebuild both templates from their parent shapes in under 30 seconds. Proof: consistent hard-item accuracy where the template is disguised, and zero ×2/×3 inversion errors across 5+ radical-side items.

## Difficulty ladder
- **Easy**: labeled 45-45-90 or 30-60-90, one side given, read another.
- **Medium**: square diagonal; equilateral height; perimeters with radical answers; given-the-long-leg items (rationalization).
- **Hard**: radical-side misdirection; hexagon → equilateral → 30-60-90 chains (hexagon area to side to a square's area); 120°-apex isosceles areas; iterated scaling (stacked 30° angles each spawning a new 30-60-90); circle composites (60° arc chords, inscribed hexagons — [[triangle-properties-toolkit]]); reference triangles on the plane ([[soh-cah-toa-and-cofunction]]).

## Teaching notes
- **Struggling**: derive once, slowly, from the square and the equilateral; then only labeled-triangle reads until roles-from-angles is automatic. No radicals on tricky roles yet.
- **Average**: the disguise taxonomy is the lesson — where each template hides (square/diagonal, equilateral/height, hexagon). Teach radical answer choices as the "special triangle inside" tell.
- **Advanced**: radical-misdirection sets; multi-template composites (hexagon chains); require the 20-second rebuild when they claim to have forgotten.
- **1500+**: iterated and nested templates (each 30-60-90's output feeding the next one's input), and speed — template recognition should cost ~5 seconds so the item's real difficulty (composition) gets the time.
