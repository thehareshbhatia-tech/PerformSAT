---
id: proportion-setup-template
section: math
domain: problem-solving-data-analysis
skill: proportion-ratio
difficulty_span: [easy, medium]
prereqs: [ratio-part-whole-discipline]
unlocks: [unit-cancellation-chain, exponent-time-unit-conversion]
related: [unit-magnitude-sanity-check, scaling-laws-k-k2-k3]
---

# The one-move proportion: unknown on top, correspondence locked

## What it is
When two ratios describe the same fixed relationship (a map scale, a unit price, a
constant rate), setting them equal produces an equation solvable for any one missing
quantity. The entire skill is setup: put the unknown in the numerator of the left
ratio, mirror the correspondence exactly on the right, and the solve collapses to one
multiplication — the whole right side becomes a single chain the calculator (or your
head) evaluates in one pass.

## Why it exists / why the SAT tests it
Proportions are the SAT's workhorse for scale models, recipes, unit prices, map
distances, and constant-of-proportionality (y = kx) stems. They sit in the easy-to-
medium band, usually early in a module. What's really being tested is correspondence
discipline — do the two sides pair the same roles (model↔model, real↔real, old↔old,
new↔new) — because the arithmetic afterward is trivial.

## Mental model
**A proportion is a correspondence, and the unknown rides on top-left.** Two quantity
pairs, same relationship; each side of the equation must keep its roles aligned
(numerators correspond to each other, denominators correspond to each other). With
the unknown in the top-left slot, one multiplication isolates it — the variable never
migrates around the equation, so there is no algebra to get wrong. Bonus symmetry: a
valid proportion survives transposing which axis is "across" vs "down" (time/time =
dist/dist ⇔ time/dist = time/dist) — pick whichever arrangement reads naturally, as
long as correspondence holds.

## Expert reasoning process
1. Identify the two corresponding quantity pairs and name the roles out loud
   ("inches on the map / actual miles").
2. Write the LEFT ratio with the unknown in the numerator; its denominator is the
   unknown's partner quantity.
3. Mirror the same role-arrangement on the right with the known pair. Mixed units in
   a scale (inches per mile) are fine — each slot just keeps its own unit role.
4. Multiply both sides by the left denominator; type the whole right side as one
   Desmos line. Never round intermediates.
5. Feel-check the result against [[unit-magnitude-sanity-check]] logic: did the
   number move the direction the story demands?
6. For y = kx / y = k/x framings: one given (x, y) pair pins k; then the equation
   answers any second scenario. It's the same proportion in function clothing.

## Misconceptions
- **cross-correspondence-swap** — student mismatches roles across the two sides
  (model on top left, real on top right). Forms because proportions are taught as
  "put numbers in a grid and cross-multiply" with no role semantics; any grid feels
  as good as any other. Produces the reciprocal-relationship answer, which often
  passes a lazy glance because it uses all the right numbers.
- **unknown-buried-in-denominator** — student sets up with x on the bottom, then
  fumbles the two-step algebra (cross-multiply, divide) and loses a factor. The
  error isn't conceptual; it's that extra algebraic moves are where slips live.
- **direct-template-on-inverse** — for inversely related quantities (gear teeth vs.
  rpm; workers vs. time), student applies the direct-proportion template and scales
  both quantities the same direction. Forms because direct proportion is the only
  template ever drilled; the distractor is exactly the direct-proportion answer.
- **unit-conversion-panic-inside-scales** — student converts inches to miles before
  setting up a map-scale proportion, mangling the scale. In truth mixed units are
  fine as long as each side keeps its unit roles consistent.

## Diagnostic indicators
- Answer is the reciprocal of correct (cross-correspondence-swap): x·(known ratio)
  inverted — flag when the chosen value equals known²/correct or correct⁻¹-scaled.
- Answers off by one factor on multi-step solves with x initially in a denominator
  (unknown-buried): work shows a cross-multiplication followed by a wrong division.
- On inverse-variation stems, picks the answer that scaled UP when the story demands
  down (direct-template-on-inverse) — the direction of the error is the signature.
- Long time-on-task for scale items with mixed units (conversion panic), often with
  an unnecessary unit conversion in scratch work.

## Remediation pathways
- **cross-correspondence-swap**: teach the role-naming ritual (say both numerator
  roles aloud; they must be the same kind of thing). Re-derivation: show the
  proportion as two equal unit-rates, which makes role-mixing visibly absurd. If it
  persists, revisit [[ratio-part-whole-discipline]].
- **unknown-buried-in-denominator**: don't fix the algebra — fix the setup. Install
  the top-left convention as a hard habit; one clean move beats two fragile ones.
  Also show the recovery: if you DID set up x on the bottom, flip both sides.
- **direct-template-on-inverse**: contrast pair — same numbers, one direct story
  (more hours → more pay) and one inverse story (more workers → fewer hours). Ask
  "as this goes up, does that go up or down?" BEFORE writing anything.
- **conversion panic**: one worked map-scale item where units stay mixed and the
  answer comes out right; the relief is the lesson.

## Mastery criteria
Student can set up and solve any single-proportion stem in under 45 seconds with the
unknown top-left, can articulate WHY correspondence matters (not just the ritual),
handles one inverse-variation item correctly by reasoning direction first, and
evaluates the solve as one unrounded Desmos chain. Proof: consistent easy/medium
accuracy plus one correct inverse item.

## Difficulty ladder
- **easy**: single proportion, integer answer, roles stated plainly (unit price,
  recipe scaling).
- **medium**: map/model scales with mixed units; constant-of-proportionality dressed
  as y = kx with a plug-in pair (unverified-claim that these arrive pre-packaged —
  verify against bank); rate stems requiring the student to extract both pairs from
  prose.
- **hard end (composed)**: proportions inside exponent unit conversion
  ([[exponent-time-unit-conversion]]) and multi-hop unit chains
  ([[unit-cancellation-chain]]) — the proportion itself stays easy; the disguise and
  stacking escalate.

## Teaching notes
- **Struggling**: start from unit rates ("$3 for 2 pounds → how much for 1 pound?")
  and let the proportion emerge as two equal unit-rates. Avoid "cross-multiply"
  language until setup is reliable — it's the ritual that enables role-blindness.
- **Average**: install the top-left template plus the role-naming step; drill 5
  setups with NO solving (setup-only reps isolate the actual skill).
- **Advanced**: transposability (swap across/down freely), inverse variation, and
  spotting when a "function" problem (y = kx) is just a proportion.
- **1500+**: speed framing — the right side is a one-line Desmos chain; type it once,
  never round. Teach the deliberate skip: if answer choices are unsimplified
  expressions, match structure and don't evaluate at all.
