---
id: system-combination-target
section: math
domain: algebra
skill: algebra.solve-for-a-combination
difficulty_span: [medium, hard]
prereqs: [linear-system-method-selection]
unlocks: []
related: [system-parameter-tuning]
---

# When the answer is a combination, don't solve the system

## What it is
Some system questions ask not for x or y but for a combination — x + y, 3y − c, 6x + 6y, a/b. On the SAT these systems are constructed so that a single addition or subtraction of the given equations (occasionally one scaling first) produces the target expression directly. Solving for each variable individually is the long way around, and the question is designed to punish it.

## Why it exists / why the SAT tests it
This probes structural sight-reading: can the student see equations as manipulable wholes rather than as containers of variables to extract? It also enforces answer-the-question-asked discipline. unverified-claim: combination-target items are built by construction so the sum or difference of the raw equations yields the target (or a clean multiple of it), and the individual variable values appear among the distractors.

## Mental model
**Read the ask, then look for it in the wreckage of one addition.** Before any solving: stack the two equations and mentally add them, then subtract them. Compare each result against the target expression — matching it exactly, or matching a multiple of it (getting 2x + 2y when x + y is asked means divide by 2). Only if both combinations miss does the item degrade to an ordinary solve ([[linear-system-method-selection]]). Related move: if an identical multi-term block appears in both equations, treat the block itself as the variable.

## Expert reasoning process
1. Write the target expression at the top of scratch work before touching the system. This is the contract for the final line.
2. Stack the equations with like terms aligned. Add. Does the result equal the target, or a constant multiple of it? Then one division finishes the item.
3. If addition misses, subtract (negate-then-add to protect signs). Check against the target again.
4. If a scaling is needed, it is usually a single obvious one (e.g., doubling one row so the sum's coefficients match the target's).
5. Confirm the final answer's SHAPE matches the ask — a value of x + y, not a value of x. The intermediate variable values are decoys even when they're computable.
6. Fall back to a full solve only after the combination scan fails; that is rare by design on this item family.

## Desmos vs algebra
Algebra wins here, narrowly but consistently. Desmos will happily give the intersection (x, y), after which you compute the target by hand — legitimate, and a good fallback when the combination scan fails or the numbers are ugly. But the add-the-equations route is a one-line move with no transcription step, while Desmos costs entry + read-off + arithmetic (often with non-integer coordinates that invite copy errors). Decision rule: **combination target → scan add/subtract first; Desmos as the fallback, not the opener.**

## Misconceptions
- **misc-solve-everything-reflex** — Grinding out x and y individually even when asked for x + y. Forms from years of find-x homework establishing "solving" as the only terminal state. Costs 2–4× the time and multiplies arithmetic-error surface; on hard variants the individual values are deliberately ugly (fractions) while the combination is clean — a strong tell the writer expected the shortcut.
- **misc-report-the-intermediate** — Doing the shortcut or the full solve correctly, then reporting x (or y) instead of the combination. Forms because a number appearing feels like completion. Distractor archetype: wrong-variable answer; both x and y typically appear as choices.
- **misc-expand-the-chunk** — When a shared block like 2a + 3b appears in both equations, expanding and re-solving instead of substituting the block's known value whole. Forms from the habit that simplification means expansion. Produces long solutions and dropped signs.
- **misc-blind-subtraction-signs** — Subtracting the stacked equations and negating only the leading term. Same mechanical root as in [[linear-system-method-selection]]; on combination items it corrupts the target directly and the sign-flipped value is among the choices.

## Diagnostic indicators
- misc-solve-everything-reflex: correct answers but outlier time-on-item; scratch work shows full elimination with back-substitution on items solvable in one line.
- misc-report-the-intermediate: picks the x-value or y-value distractor; own work contains the correct combination un-reported.
- misc-expand-the-chunk: long expansions in work where the item contains a repeated parenthesized block.
- misc-blind-subtraction-signs: answer off by a sign pattern consistent with a half-negated second row.

## Remediation pathways
- misc-solve-everything-reflex: run a timed contrast — same item solved both ways — so the cost is felt; then install the pre-solve combination scan as a mandatory first move. If the student can't verify the shortcut's legitimacy, re-derive "adding equals to equals" from [[linear-system-method-selection]]'s elimination logic.
- misc-report-the-intermediate: written-target habit (ask copied to top of work) plus a last-line shape check.
- misc-expand-the-chunk: one worked contrast where block-substitution is three lines and expansion is twelve; name the move "treat the block as one letter."
- misc-blind-subtraction-signs: negate-then-add retraining, as in the method-selection node.

## Mastery criteria
Student runs the combination scan unprompted on every combination-target item, completes typical items in under 45 seconds, and never submits an intermediate value. Evidence: repeated clean performance on medium-hard combination items where individual-variable distractors are present.

## Difficulty ladder
- **Medium**: sum or difference of the raw equations IS the target; integer arithmetic.
- **Hard**: one scaling required before combining; target is a multiple of the natural combination; shared-chunk variants; targets mixing variables and constants (3y − c).
- **Hardest**: composed with [[system-parameter-tuning]] — two unknown constants where the ask is their ratio or sum — or systems whose individual solutions are deliberately irrational while the combination is an integer.

## Teaching notes
- **Struggling**: first secure the legitimacy intuition: if two scales balance, pooling both pans onto one scale still balances. Then practice pure "add these two equations" mechanics before any strategic use.
- **Average**: teach the scan as a decision habit — target written first, add, subtract, compare — with mixed sets where some items DO require full solves, so the scan is a test, not an assumption.
- **Advanced**: multiple-of-target and scale-then-combine variants; introduce the ugly-individuals/clean-combination tell as a meta-signal for when the shortcut must exist.
- **1500+**: this family should be near-instant; drill it interleaved under time pressure, with the specific goal of zero intermediate-value submissions — the only realistic remaining error at this level is the endgame slip, not the method.
