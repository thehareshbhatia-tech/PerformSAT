# Raw notes — Math Orange source, Ch. 18: Unit Conversions (printed 607–627)

Section: math · Domain: Problem-Solving & Data Analysis
Source-role: teacher-training input only. Everything below is our own synthesis; no source wording, examples, or problems retained.

## Concepts taught (candidate nodes)

- **unit-conversion-single-proportion** — When two units measure via a fixed exchange rate, one conversion is a proportion: set the ratio of the two measurements equal to the known exchange ratio and solve. One hop, one unknown.
- **units-behave-like-factors** — Units can be treated as multiplicative symbols: identical units in a numerator and denominator cancel, and repeated units exponentiate (length × length gives squared-length). This single idea turns conversion from a memorized recipe into checkable algebra.
- **same-dimension-vs-linked-quantity-conversion** — Two flavors of exchange rate: (a) two units for the *same* kind of quantity (two length units, two currencies) and (b) a *bridge rate* linking genuinely different quantities (distance per fuel volume, cost per volume). The mechanics are identical; only the meaning differs. Bridge rates let you chain across quantity types (money → fuel → distance).
- **unit-cancellation-chain** — (our name for the source's coined multi-step method, a.k.a. dimensional analysis) For multi-hop conversions, multiply the starting quantity by a sequence of ratio factors, each oriented so it cancels exactly one unwanted unit and introduces the next one, until only the target unit survives.
- **unit-route-planning** — Before any arithmetic, write the itinerary of units from start to target (e.g., distance ⇒ fuel ⇒ cost). Each leg of the route corresponds to one given rate. The route is planned backward from the goal.
- **goal-first-data-triage** — Identify what the question ultimately wants (its unit), then select ONLY the given facts that can serve as links in the route. Deliberately unused data is normal, not a sign of a mistake.
- **situational-vs-universal-rates** — Some conversion factors are physical constants (60 min = 1 hr); others are context-supplied (a person works 4 hr per day, so "1 day" = 4 working hours *in this problem*). Experts ask "which rate governs *this* situation?" rather than reflexively grabbing the universal constant.
- **distance-rate-time-relation** — Distance = speed × time is just a linear relationship with a unit constraint; average speed is total distance over total time. Unit-cancellation applies inside it: the time unit in the speed must match the time unit of the duration or a repair factor is required.
- **unit-mismatch-detection** — Before computing with any formula, audit whether the units actually cancel; a mismatch (per-hour rate with minutes) is a *signal to insert a conversion factor*, not something to ignore.
- **one-pass-calculator-discipline** — Chain all multiplications/divisions in a single calculator expression (or carry full precision forward); rounding intermediate values can shift the final answer onto a wrong choice.
- **rate-composition-into-equations** — Build model equations (fuel remaining over time, cost as function of duration) by composing rates until the units of each term match the output unit; answer-choice equations can be eliminated purely on unit grounds.

## Teaching philosophy observed

- Sequencing: single proportion (familiar, low anxiety) → generalized cancellation chain (the power tool) → one high-frequency special case (distance/speed/time) as an application. The special case comes LAST, framed as "nothing new, just units again."
- Convention pushed hard: put the unknown in the numerator on the left of the proportion. Rationale given is ergonomic, not mathematical — it avoids algebra on the unknown, keeps one clean solve-by-multiplying step, and yields a readable final statement.
- Anxiety acknowledged explicitly (students scarred by chemistry-class dimensional analysis); the response is to show TWO independent solution paths (clever single proportion vs mechanical chain) for the same problem so students can pick a temperament match.
- Distractor data is taught as a designed feature: drill tables include rows that convert nothing useful, training triage rather than plug-everything behavior.
- Mechanical fluency drills (pure conversions, no context) precede test-style items; challenge items within drills are visually flagged. Whimsical, obviously fictional contexts are used in drills to keep focus on structure.
- Heavy cross-referencing to real released-test items per section — the authors lean on authentic frequency rather than invented importance.

## Expert reasoning patterns (generalized)

1. **Units first, numbers last.** Plan the unit route completely before touching arithmetic. If the route is right, the arithmetic is bookkeeping.
2. **Anchor on the goal.** Read the question tail for the requested unit; work backward to find which given connects to it.
3. **Orientation by cancellation, not memory.** Never memorize "multiply or divide by 2.54"; write the factor whichever way up kills the unwanted unit. The cancellation audit IS the correctness check.
4. **Magnitude sanity.** After converting, ask whether the number moved in the sensible direction (more of a smaller unit, fewer of a bigger unit). The book models this implicitly (shortcut: a mile-a-minute equals 60 mph) but doesn't codify it — we should.
5. **Stop at structure when choices are expressions.** If answer choices are unsimplified forms, match the form and skip evaluation; premature simplification wastes time and invites error.
6. **Split multi-leg journeys.** For two-speed trips: compute leg 1, subtract from the total to get leg 2, then apply the rate relation per leg. Keep per-leg subscripted quantities rather than juggling one mutating value.

## Misconceptions targeted (and why students hold them)

- **multiply-divide-coinflip** — Given "1 big = k small," students guess whether to multiply or divide by k. Why: school teaches conversions as answer-getting recipes tied to specific unit pairs, so an unfamiliar pair leaves no procedure, only a guess. Produces answers off by k² apart; test writers offer BOTH the ×k and ÷k results as choices (observed in a mass-unit item whose choices spanned both directions).
- **every-number-must-be-used** — Students force irrelevant givens into the computation because homework problems historically use all data. The test exploits this with decoy rates/rows; the fix is route-planning (a given is used only if it's a leg on the route).
- **universal-constant-reflex** — Students convert hours→days with 24 because it's "the" conversion, even when the context defines a working day of fewer hours. Why: they classify conversion factors as facts to recall, not as rates to select. Produces plausibly-wrong answers that the choice set anticipates.
- **unit-blind-formula-plugging** — In rate × time, students multiply a per-hour rate by minutes because the formula "says multiply." Why: formulas are learned as number slots, not quantity relations. The repair (insert a min↔hr factor) is exactly the cancellation audit they skipped.
- **stepwise-rounding-drift** — Rounding each intermediate result feels tidy and "correct" (school rewards rounding), but chained rounding accumulates enough error to hit a near-miss distractor or miss a grid-in tolerance.
- **rate-direction-misread** — Verbal rates ("k distance per unit fuel") get inverted when written as a fraction because "per" parsing is shaky. Produces reciprocal-form wrong answers; equation-selection items include the reciprocal as a choice.
- **linear-scaling-of-squared-units** — Converting an area with a single length factor. The source only brushes this (a squared-unit aside and one area-rate problem); it's a known deeper trap we should cover more than the source does.

## SAT patterns claimed (unverified-claim; check against official material + our bank)

- Non-everyday conversion factors are supplied in-stem as a parenthetical; everyday time conversions are assumed known. (unverified-claim)
- The requested unit is typographically emphasized in the stem — attention to it is essentially the whole question. (unverified-claim)
- Common shapes: convert-then-average (mean per container), two-leg journeys with different speeds, equation/function-selection where choices differ only in rate placement, inequality forms of a fuel/range limit, interpret-the-constant in a rate equation, scientific-notation speeds at the hard end, percent-change layered onto a rate table. (unverified-claim)
- Grid-in rate answers accept both rounded and truncated forms; stems sometimes give explicit formatting instructions. (unverified-claim)
- Topic is high-frequency on real tests — the source lists dozens of released-test references across all three sections. (unverified-claim)

## Prerequisite edges implied

- ratio-and-proportion-solving → unit-conversion-single-proportion
- fraction-multiplication-and-cancellation → unit-cancellation-chain
- unit-cancellation-chain → distance-rate-time-relation (presented as a special case)
- linear-equation-modeling → rate-composition-into-equations
- scientific-notation-arithmetic → hard-band conversion items
- percent-change → composed hard items (rate table + percent delay)
- unlocks: density/unit-price problems, work-rate problems, geometry measurement conversion

## Difficulty escalation observed

Single-factor swap (given rate, one hop) → two-factor chain → 4–5 factor chains including situational rates and decoy data → rate relation with mismatched time units → symbolic layer (function selection, inequalities, constant interpretation, expressions kept unsimplified) → composed items (scientific notation; percent-modified legs of a journey; piecewise speed read off a graph). Escalation adds *layers and disguises*, not new machinery — the cancellation chain never stops being the engine.

## What this source does well / poorly

**Well:** unifies the whole topic under one checkable discipline (cancellation); teaches data triage as a first-class skill; models two solution temperaments per problem; honest calculator-rounding warning; mixed problem set escalates realistically into algebra-flavored hybrids.

**Poorly:** magnitude/direction sanity-checking is modeled but never made an explicit rule (biggest single defense against multiply-vs-divide guessing — we should promote it); squared/cubed-unit conversion is nearly skipped; the unknown-on-the-left proportion convention is asserted ergonomically without showing students how to recover when they set it up differently; no guidance on which conversions must be memorized for the SAT vs always given; drill contexts are deliberately silly, so difficulty calibration against real test tone must come from elsewhere.
