---
id: inequality-translation-and-integer-bounds
section: math
domain: algebra
skill: algebra.linear-inequality-word-problems
difficulty_span: [easy, hard]
prereqs: [inequality-direction-logic, variable-definition-discipline]
unlocks: [inequality-translation-and-integer-bounds]
related: [system-from-two-constraints, compound-inequality-operations]
---

# From boundary words to symbols — and back to whole-number answers

## What it is
Two bookend skills wrap every applied inequality. Going IN: verbal thresholds map to precise signs — "at least" / "no less than" → ≥; "at most" / "no more than" → ≤; "more than" / "exceeds" → strict >; "less than" / "fewer than" → strict <. Writing the expression side is ordinary equation translation; the inequality adds exactly two decisions: which direction, and is the boundary itself allowed. Coming OUT: when the quantity is discrete (people, buses, tickets), the algebraic boundary is not the answer — a decimal bound rounds toward the FEASIBLE side: a minimum of 14.2 becomes 15 (round up), a maximum of 16.7 becomes 16 (round down). Direction comes from feasibility, never from nearest-integer habit.

## Why it exists / why the SAT tests it
Threshold translation items check symbol precision (an entire answer choice set can differ only in > vs ≥); integer-bound items check whether the student keeps modeling after the algebra ends. unverified-claim: discrete-context items regularly ENGINEER fractional algebraic boundaries specifically so that rounding discipline — not the solve — is the tested skill; unverified-claim: min/max integer answer choices are placed one apart so an inclusion error (≥ vs >) or a wrong-direction rounding changes the answer.

## Mental model
**Two gates: direction and membership on the way in; feasibility on the way out.** In: circle the boundary phrase before writing anything, and translate it as (direction, included?) — "at least 50" is (≥, boundary counts); "more than 50" is (>, boundary excluded). Constraint problems typically pair a resource CAP (≤ — money, hours, seats) with a requirement FLOOR (≥ — a quota, a minimum earning). Out: ask "which whole numbers actually satisfy the original condition?" — then the rounding direction is never in doubt, because 14.2-as-minimum means 14 fails and 15 is the first that works.

## Expert reasoning process
1. Circle the threshold phrase and commit to sign + inclusion BEFORE building the expression. The expression side is just [[variable-definition-discipline]] work — rate × quantity + fixed amounts.
2. Bind each rate to its own quantity (the per-hour wage multiplies the hours; the per-item cost multiplies the count) — the coefficient-attachment discipline from [[system-from-two-constraints]] applies unchanged.
3. Check for planted unit mismatches (minutes vs hours, cents vs dollars) before finalizing coefficients.
4. Solve with normal inequality mechanics ([[inequality-direction-logic]]).
5. If the quantity is discrete: state the algebraic bound, then step to the nearest integer IN THE FEASIBLE DIRECTION — up for minimums, down for maximums. Verify by plugging the chosen integer AND its rejected neighbor into the original condition; exactly one should pass.
6. If the boundary came out exactly whole (e.g., x ≥ 12 for a minimum), inclusion decides: ≥ 12 → 12 itself is the answer; > 12 → 13 is. This is where the strict/inclusive translation from step 1 pays or punishes.

## Desmos vs algebra
Translation is untooled — no calculator writes the inequality for you, and which-inequality-represents items are pure setup. For the solve-and-round tail, Desmos helps two ways: plot the constraint expression against the threshold line and read the crossing x (the algebraic boundary), or — for gridded integer answers — evaluate the original condition at candidate integers directly (a table of the expression at x = 14, 15, 16 makes the feasible first integer visually undeniable). The rounding JUDGMENT stays with you: Desmos reports the continuous boundary; feasibility direction is a modeling decision. Decision rule: **setup by hand always; ugly-arithmetic boundaries → let Desmos find the crossing; the final integer step is yours.**

## Misconceptions
- **misc-boundary-inclusion-blur** — Translating "more than" as ≥ or "at least" as >. Forms because everyday speech treats these as synonyms; math distinguishes membership. Produces off-by-one integer answers and wrong sign choices in which-inequality items (inclusion-swap archetype).
- **misc-fractional-count-answer** — Reporting the algebraic boundary (3.75 buses) as the answer, or gridding it. Forms because the algebra "finishes" before the modeling does — the solved inequality feels like the terminal state.
- **misc-nearest-integer-rounding** — Rounding 16.7 to 17 on a MAXIMUM question because school rounding is nearest-integer. Forms from importing the arithmetic rounding rule into a feasibility context; 17 fails the original constraint. Distractor archetype: the infeasible neighbor, always offered.
- **misc-cap-floor-direction-swap** — Writing the budget as ≥ or the quota as ≤ — attaching the wrong direction to a constraint because the sentence's verb ("earn," "spend") rather than its logic ("at most," "at least") drove the choice. Distractor: the direction-swapped inequality.
- **misc-rate-to-wrong-quantity** — The coefficient-attachment error in inequality clothing: hourly wage times number of items. Same root and same fix as in [[system-from-two-constraints]].

## Diagnostic indicators
- misc-boundary-inclusion-blur: on which-inequality items, picks the choice differing from the key only in strictness; verbalizes "at least means bigger."
- misc-fractional-count-answer: grids decimals for discrete quantities; multiple-choice picks the boundary-value distractor when offered.
- misc-nearest-integer-rounding: errors specifically on max items with .5+ decimals (rounds up) while min items are fine — or vice versa; explains "I rounded."
- misc-cap-floor-direction-swap: direction errors cluster on two-constraint word items; reads the sentence aloud without isolating the threshold phrase.
- misc-rate-to-wrong-quantity: picks crossed-coefficient choices; scratch variables unlabeled.

## Remediation pathways
- misc-boundary-inclusion-blur: contrast drill on a single scenario ("you need at least 50 points" vs "more than 50 points" — does 50 itself pass?); make the student adjudicate the boundary value each time. The boundary-value question IS the fix.
- misc-fractional-count-answer / misc-nearest-integer-rounding: one re-anchoring move — plug the decimal's two integer neighbors into the ORIGINAL condition and observe which passes. Rule earned: "round toward the side that works." Then drill mins and maxes interleaved so no fixed direction can be memorized.
- misc-cap-floor-direction-swap: teach the resource/requirement sort — money, time, capacity are ceilings (≤); quotas, needs, goals are floors (≥) — then confirm against the circled phrase.
- misc-rate-to-wrong-quantity: same noun-binding remediation as [[system-from-two-constraints]]; revisit [[variable-definition-discipline]] if translation is globally weak.

## Mastery criteria
Student translates threshold phrases with correct direction AND strictness on first read, builds unit-consistent constraint inequalities from context, and lands discrete answers on the feasible integer with a neighbor-check justification. Evidence: clean performance on which-inequality items whose choices differ only in sign/strictness, and on min/max integer items with engineered fractional boundaries, in both directions (round-up minimums and round-down maximums).

## Difficulty ladder
- **Easy**: one clause, one threshold phrase, translate only.
- **Medium**: rate + flat-fee contexts solved through to a bound; unit conversions planted; whole-number boundary where inclusion decides the answer.
- **Hard**: fractional boundaries with feasibility rounding; two constraints in one story (cap + floor) feeding a combined条件; comparative phrasing layered over thresholds.
- **Hardest**: full constrained-optimization items where translation, a system of inequalities, boundary reasoning, and integer rounding all stack ([[inequality-translation-and-integer-bounds]]).

## Teaching notes
- **Struggling**: boundary-value adjudication as a game before any algebra: given a phrase and a number, does the number itself count? Build the four-phrase table from their own verdicts rather than presenting it.
- **Average**: install the circle-the-phrase-first habit and the two-gate (direction, membership) translation; solve-and-round items with mandatory neighbor checks.
- **Advanced**: engineered-decimal min/max items interleaved; ceilings-and-floors sorting on multi-constraint stories; timed which-inequality sets where all four sign/strictness variants appear.
- **1500+**: the errors left at this level are pure endgame — an inclusion slip or a wrong-direction round under speed. Drill a fixed 5-second finishing ritual: re-read the ask, name min-or-max, name round-up-or-down, neighbor-check.
