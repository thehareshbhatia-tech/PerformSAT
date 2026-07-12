---
id: unit-circle-evaluation
section: math
domain: geometry-trigonometry
skill: right-triangle-trig
difficulty_span: [medium, hard]
prereqs: [soh-cah-toa-and-cofunction, special-right-triangles, radians-and-arc-length]
unlocks: []
related: [desmos-decision-framework]
---

# Unit-circle evaluation: trig outside the acute angle

## What it is
Right-triangle trig defines sin, cos, and tan only for angles strictly between 0° and 90° — a deliberately incomplete definition. The unit circle completes it: place the angle in standard position (vertex at the origin, initial side along the positive x-axis); where the terminal side meets the circle of radius 1, **cos θ = the x-coordinate, sin θ = the y-coordinate, tan θ = y/x** of that terminal point. For a terminal point at any radius the general form is **sin θ = y/r, cos θ = x/r, tan θ = y/x**, where x and y are SIGNED coordinates but r — a distance — is always positive. For acute angles this reproduces the right-triangle ratios exactly; for every other angle, it IS the definition.

## Why it exists / why the SAT tests it
Non-acute evaluation separates students who memorized the acute-angle ratio acronym from students who own the definitions. The item shapes: evaluate a trig function of an angle in QII–QIV (choices are a ±same-value pair — correct magnitude, both signs offered); read sin/cos/tan from a given terminal point (x, y); determine only the SIGN of a value from its quadrant; and, at the hard end, large or negative radian angles that must be reduced by full turns before anything else. unverified-claim: the ±same-value distractor pair is the standard architecture of these items — verify against bank.

## Mental model
**Magnitude and sign are two separate computations.** The reference triangle — drop a perpendicular from the terminal point to the x-axis — delivers the MAGNITUDE through ordinary right-triangle ratios, usually a special triangle. The QUADRANT delivers the signs, read directly off the coordinates: "in this quadrant, is x negative? is y negative?" cos inherits x's sign, sin inherits y's, tan is the quotient of the two. No sign mnemonic required — the coordinates ARE the rule, and a student who can sketch the circle can regenerate the whole sign table in seconds.

## Expert reasoning process
1. **Coterminal-reduce.** Add or subtract full turns (360°, or 2π in radians) until the angle lands within one revolution. Convert an unwieldy radian angle to degrees first if that is more comfortable.
2. **Locate the quadrant** of the terminal side.
3. **Form the reference angle** — the acute angle between the terminal side and the x-axis (always the x-axis, never the y-axis).
4. **Get the magnitude** from the reference triangle: special-triangle ratios ([[special-right-triangles]]) for the standard angles, with the hypotenuse playing r.
5. **Attach signs LAST, as a separate final pass**: which coordinate is negative in this quadrant? Assign cos from x, sin from y, tan from their quotient.
6. Given a terminal point (x, y) instead of an angle: compute r = √(x² + y²) (positive, always), then read sin = y/r, cos = x/r, tan = y/x directly — the signs arrive for free inside x and y.
7. **Calculator route**: evaluate numerically and decimal-compare against decimalized choices — but mind the mode hazard: an expression containing π is in radians, a degree-labeled angle is in degrees, and the wrong mode silently produces a plausible wrong decimal ([[desmos-decision-framework]]). Hand unit-circle work remains the route for special angles, sign-only questions, and symbolic answers.

## Misconceptions
- **acute-only-panic** — freezing on any angle outside (0°, 90°) because the right-triangle definition literally cannot draw it. Forms because the acute-angle ratios are taught as THE definition rather than as the special case of an intentionally incomplete one. Produces skips and wild guesses on QII–QIV items rather than a specific distractor.
- **sign-blindness-by-quadrant** — evaluating the reference angle correctly but keeping every value positive. Forms because magnitude and sign get fused into one mental step, and the special-triangle lookup has only ever produced positive numbers. Produces exactly the sign-flipped member of the ±same-value distractor pair.
- **r-carries-sign** — writing r as negative for terminal points in "negative" quadrants, corrupting both sin and cos. Forms by over-extending "everything down here gets a minus": r is the reference triangle's hypotenuse — a length — so it is always positive; the signs live in x and y alone.
- **mnemonic-scramble** — misrecalling a memorized which-functions-are-positive-where acronym under time pressure. Forms when sign rules are stored as letters divorced from the coordinates that generate them; the letters have no self-correcting structure, so a scrambled recall feels as confident as a correct one.
- **half-turn-reduction** — reducing a large angle by 180° instead of 360° (or not reducing at all). Forms because "subtract until it's small" is remembered without the full-turn unit; a half-turn reduction lands in the diagonally opposite quadrant, flipping both signs.

## Diagnostic indicators
- Correct magnitude, wrong sign — the ±pair pick → **sign-blindness-by-quadrant** (or **half-turn-reduction**; check which angle the scratch work located).
- Skips or guesses precisely on non-acute items while acute-angle trig is fine → **acute-only-panic**.
- Both sin AND cos sign-wrong from a terminal-point item → **r-carries-sign**.
- Explains signs by reciting letters and assigns them to the wrong quadrant → **mnemonic-scramble**.
- Long stall or quadrant error on multi-turn radian angles → **half-turn-reduction** / no reduction habit.

## Remediation pathways
- **acute-only-panic**: reframe the history — the right-triangle version was the special case; the circle is the full definition, and for one acute angle show the two definitions agreeing. Then three QII–QIV items run through the loop as a checklist.
- **sign-blindness-by-quadrant**: enforce the two-pass discipline in writing for five items — magnitude on one line, signs attached on the next. Separating the passes is the entire fix.
- **r-carries-sign**: re-derive r as the hypotenuse of the reference triangle — a length; one counterexample showing that a negative r double-flips a sign back to wrong.
- **mnemonic-scramble**: replace the acronym with the coordinate question ("which coordinate is negative here?") and have the student regenerate the sign table from a sketched circle until generation replaces retrieval.
- **half-turn-reduction**: drill full-turn reduction on radian angles (subtract 2π, not π), checking the landing quadrant each time. If radian arithmetic itself is the blocker, revisit [[radians-and-arc-length]].

## Mastery criteria
Evaluates all three functions at standard-angle positions in any quadrant via the full loop (reduce → quadrant → reference angle → magnitude → signs); reads sin/cos/tan off a terminal point with correct signs; states a value's sign from the quadrant alone without computing; handles negative and multi-turn radian angles. Proof: a mixed set of QII–QIV special-angle evaluations plus one multi-turn radian item with zero sign-flip picks.

## Difficulty ladder
- **Medium**: sign of a trig value from a stated quadrant; evaluation at a standard angle in QII or QIII; trig values from a given terminal point on the circle.
- **Medium-hard**: negative angles; reference-angle work natively in radians; terminal points off the unit circle (compute r first).
- **Hard**: large multi-turn radian angles where coterminal reduction is the real work; deduce-the-quadrant items (given sin θ < 0 and cos θ > 0, locate θ, then evaluate something else); composites where the reference triangle's third side needs a Pythagorean completion before any ratio exists.

## Teaching notes
- **Struggling**: gate this node — [[soh-cah-toa-and-cofunction]] and [[special-right-triangles]] must be solid first. Then teach ONLY the five-step loop as a checklist, one quadrant at a time, signs always as the written final step.
- **Average**: the reference-triangle picture plus the two-pass discipline; have them derive each quadrant's sign behavior from coordinates once rather than issuing a table.
- **Advanced**: radian-native reference angles (no degree detour); terminal-point items; the calculator decimal-compare route with an explicit mode check.
- **1500+**: instant sign reads as a pre-computation elimination tool; coterminal reduction treated as modular arithmetic; predicting which answer choice is the sign-flip trap before solving.
