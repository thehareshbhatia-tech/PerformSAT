# Raw notes — College Panda SAT Math, Ch. 14 (Inequalities)

Source: math-panda scans p0081 (right half) – p0089 (left half). Extraction is understanding-only; all wording, names, and examples below are ours.

## Concepts taught

- **inequality-sign-flip-rule** — inequalities obey every equation-manipulation rule with exactly one exception: multiplying or dividing both sides by a NEGATIVE number reverses the direction of the sign. Adding/subtracting anything, and multiplying/dividing by positives, never flips.
- **negative-presence-vs-negative-operation** — the precise trigger for flipping: it's the operation (× or ÷ by a negative applied to both sides), not the presence of negative numbers anywhere in the problem. A deliberately drawn boundary because students over-flip.
- **inequality-region-graphing** — a two-variable inequality's solution set is a half-plane: the boundary line plus a shaded side. Strict inequality → dashed boundary (line excluded); inclusive → solid boundary (line included). "y > expression" shades above the boundary; "y < expression" shades below.
- **above-below-anchor** — when "above vs below" is visually ambiguous (steep lines, no axes shown), use a vertical reference line (the y-axis or one you draw): along any vertical cut, the upper part is the "greater-y" region.
- **point-testing-strategy** — for "which point satisfies this inequality/system," substitute each candidate; a point solves a system only if it makes EVERY inequality true. Stop at the first candidate that passes all.
- **compound-inequality-operations** — a three-part inequality is two conditions on one variable; every operation must be applied to all three parts, and a negative multiply/divide flips BOTH signs. A chain like c ≥ x ≥ d is the same statement as d ≤ x ≤ c — reading order is not mathematical order.
- **system-of-inequalities-region** — graph each inequality's half-plane; the system's solution set is the overlap of all shaded regions. A point in only one region satisfies only that inequality.
- **coordinate-bound-propagation** — when a point with one known coordinate must satisfy a system, feed the known coordinate through each inequality to squeeze the unknown coordinate into an interval, then pick the answer choice inside it.
- **inequality-word-translation** — verbal thresholds map to symbols: "at least"/"no less than" → ≥; "no more than"/"at most" → ≤; "more than" → strict >; "less than" → strict <. Constraint problems typically pair a resource cap (≤) with a requirement floor (≥).
- **integer-rounding-direction** — when context forces whole-number answers, a computed decimal bound rounds UP for a minimum ("need at least 14.5 → 15") and DOWN for a maximum ("can afford 16.7 → 16"). The direction comes from which side of the bound is feasible, not from standard rounding.
- **limiting-resource-analysis** — when output requires several resources, compute the max output each resource alone allows; the smallest of these is the real cap because the scarcest input runs out first.
- **optimization-over-inequality-systems** — to extremize one variable subject to two joined constraints, three routes: (a) substitute the binding boundary of one constraint into the other; (b) add the inequalities after aligning their directions (multiply one by a negative — flipping it — so signs point the same way; never subtract inequalities); (c) graph the system and read the extreme point of the overlap region.
- **desmos-region-reading** — the source explicitly names graphing the system on Desmos and reading the highest/lowest point of the overlap region as the BEST route for min/max system questions. Directly actionable for us: our product embeds Desmos, so the tutor should teach shade-and-read as a first-line strategy for inequality regions, system intersections, and constrained-extremum items.
- **inequality-addition-rule** — same-direction inequalities can be added term-by-term; subtraction is never safe. To "subtract," negate one inequality (flipping it) and add.

## Teaching philosophy observed

- Minimal-delta framing: inequalities are introduced as "equations plus exactly one new rule," which shrinks perceived difficulty and localizes attention on the flip rule.
- The chapter states upfront that the SAT mostly tests REPRESENTATION (graphs, regions, translations) rather than solving skill — reallocating the student's attention from algebra drills to graph literacy.
- Misconception-first correction: the over-flipping error gets an explicit "this is where mistakes come from" paragraph rather than being left to practice discovery.
- Multiple solution routes are shown for the same optimization problem and explicitly RANKED, ending with the graphing/Desmos route as best — teaching strategy selection, not just methods.
- Word problems escalate from single-constraint translation → min/max with rounding → two-resource limiting analysis → genuine two-constraint optimization, each layer reusing the previous one.

## Expert reasoning patterns (generalized)

1. **Track the flip trigger only.** While manipulating, ask one question at each step: "did I just multiply/divide both sides by a negative?" All other steps are equation-identical.
2. **For region questions, identify boundary + side + line-style** in that order: which line, which side is shaded (test the origin or use a vertical cut), dashed or solid.
3. **Candidate points beat algebra** when answer choices are points: substitute, requiring all conditions true.
4. **One known coordinate → interval for the other.** Push the given coordinate through every constraint, intersect the resulting bounds, then match to choices.
5. **Translate word constraints one clause at a time,** binding each price/rate coefficient to its own quantity variable before assembling; check units (hours vs minutes conversions are deliberately planted).
6. **Min/max: find the binding boundary.** Experts treat inequalities at equality on the boundary, solve, then round in the feasible direction.
7. **Desmos-first for anything regional:** shade the system, then READ the answer (a contained point, an intersection, the region's extreme point). This outperforms algebra on speed and error rate for graph-shaped items; our tutor should coach the exact click-path since Desmos is built into the exam and our app.

## Misconceptions targeted (and why students hold them)

- **reflexive-sign-flipping** — students flip whenever negatives appear (dividing a negative constant on one side, subtracting a negative, seeing negative coefficients) because the rule was memorized as "negatives flip the sign" without the both-sides-operation condition. Produces reversed final inequalities; distractors are the same interval with reversed direction.
- **forgotten-final-flip** — the complementary error: after isolating −x, students drop the negative or divide by −1 without flipping, because the step feels like cleanup rather than an operation.
- **chain-read-as-written** — students read c ≥ x ≥ d and report bounds in written order, mismatching an answer choice written low-to-high; they treat notation order as meaning rather than the two underlying conditions. Distractor sets include the same interval written both ways plus reversed-direction fakes.
- **strict-vs-inclusive blur** — "at least" translated as > or "more than" as ≥, because everyday speech doesn't distinguish them. The test writes answer pairs differing only in strictness (and matching dashed/solid boundaries in graph form).
- **coefficient-attachment error** — in word translations, unit values get attached to the wrong quantities (price of A times count of B), because students pattern-match number order in the sentence instead of binding each rate to its noun. Choices systematically include the swapped version.
- **one-region-suffices** — for systems, students accept a point satisfying a single inequality, holding an "any condition" model instead of "all conditions." Graph versions exploit this with points inside exactly one shaded half-plane.
- **wrong-direction rounding** — students round 16.7 to 17 on a maximum question because school rounding is nearest-integer; they don't check feasibility of the rounded value.
- **inequality-subtraction** — students subtract inequalities like equations, which can silently produce false statements; held because the addition rule generalizes visually from equation elimination.

## SAT patterns claimed (unverified-claim — check vs official material + our bank)

- Most inequality items are representational: match an inequality/system to a shaded region, pick a point in a region, or pick the region for a system — not multi-step solving.
- "Which point is a solution" items (single inequality and systems) are common and are designed for point-testing, with distractors placed in single-constraint regions.
- Compound-inequality items hinge on a negative divide across three parts plus the chain-order re-reading.
- Word-problem families: threshold translation (single inequality), two-constraint systems (cap + floor: hours and earnings, budget and quota), min/max with forced integer rounding, limiting-resource output caps, estimate-within-a-range items (|estimate − actual| bounded, expressed as a compound inequality), and layered-cost items (percent fees on top of prices).
- Constants-in-inequality items ("point (p, q) is a solution; which could be b − a") extend the parameter-tuning pattern from systems of equations into inequality form.
- Region-with-restricted-shading graphics (bands between two lines, wedges from crossing lines) test whether students can decompose a picture into two inequalities including strictness via dashed/solid.
- Difficulty escalation observed: translate one clause → test a point → two-inequality systems → coordinate-bound propagation → integer min/max with rounding → two-resource limiting → full constrained optimization (where the graphing route is decisive).

## Prerequisite edges implied

- linear-equation solving → inequality-sign-flip-rule (everything except the flip is inherited)
- slope-intercept graphing & above/below-line intuition → inequality-region-graphing, system-of-inequalities-region
- systems of equations (Ch. 13: substitution, elimination, intersections) → optimization-over-inequality-systems, coordinate-bound-propagation
- verbal-to-symbol translation → inequality-word-translation
- inequality-region-graphing → desmos-region-reading

## What this source does well / poorly

- **Well:** the flip rule is taught with its failure modes attached (over-flip and under-flip both named); the representational emphasis matches the modern exam; the min/max rounding-direction rule is boxed as a reusable takeaway; the same optimization problem is solved three ways with an explicit ranking; Desmos is recommended by name — rare and valuable.
- **Poorly:** the Desmos advice is one paragraph with no walkthrough of entering inequalities or reading regions (our product can go much deeper since Desmos is embedded); no treatment of absolute-value inequalities here; the estimate-within-range pattern appears in exercises without instructional support; strict-vs-inclusive boundary logic (dashed/solid ↔ >/≥) is mentioned once but never drilled explicitly; no discussion of when point-testing beats solving on timed sections.
