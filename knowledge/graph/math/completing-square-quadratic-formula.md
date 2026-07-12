---
id: completing-square-quadratic-formula
section: math
domain: advanced-math
skill: completing-the-square
difficulty_span: [medium, hard]
prereqs: [sum-product-factoring, radical-simplification-principal-root, binomial-product-templates]
unlocks: [quadratic-method-selection]
related: [vieta-root-aggregates]
---

# Non-factorable quadratics — completing the square and the quadratic formula

## What it is
The two routes that solve EVERY quadratic, including those with irrational roots. Completing the square: divide by a; move the constant across; rewrite x² + bx as (x + b/2)² while adding (b/2)² to the other side to compensate; square-root both sides keeping ±; isolate. The quadratic formula packages the identical algebra into x = −b/(2a) ± √(b² − 4ac)/(2a) — it IS completing the square, pre-run on the general equation. Written as two fractions deliberately: the −b/(2a) piece is the parabola's axis of symmetry, which pays forward into graphing.

## Why it exists / why the SAT tests it
Radical-root quadratics are the minority on test but concentrated in the hard band (unverified-claim on rates). The signature exam shape: a solution displayed in a surd template like (h − √n)/2 with the ask being n — you must produce YOUR answer, simplify the surd fully, and match structure term-by-term rather than solve for anything new. Completing the square also pays forward beyond solving: vertex form and circle-equation extraction both run on it.

## Mental model
**Manufacture a perfect square, then un-square.** Factoring fails when no integer pair exists; completing the square doesn't search — it FORCES the left side into (x + b/2)² by paying the compensation fee (b/2)², then inverts the square with a ±. The formula is the same machine with the crank pre-turned: trustworthy, but dense — nested radical, double negatives, a 2a denominator — so its error surface is the widest of any method. Choose by cost, not by loyalty.

## Expert reasoning process
1. Confirm this route is warranted: radicals in the choices, or a failed 10-second factor scan ([[quadratic-method-selection]] owns the routing).
2. Completing the square: pre-simplify b/2 ONCE before anything (it's used twice — in the binomial and squared as the compensation). The compensation term is a square, hence ALWAYS added as a positive quantity regardless of b's sign.
3. Take the even root with an explicit ± on the line where it happens; two answers exist from that moment.
4. Formula route: substitute with parentheses around every negative before evaluating; compute the discriminant b² − 4ac as its own line; simplify the surd fully ([[radical-simplification-principal-root]]) — template-matching items REQUIRE the fully reduced form.
5. Template matching: put your result in the exact printed shape ((h ± √n)/d) and read the constant off. Do not re-solve; the algebra is done, only bookkeeping remains.
6. Desmos route: numeric-answer items (one solution, larger root, decimal choices) — plot and read intercepts; compare radical choices numerically (3 + √5 ≈ 5.24). Template/parameter asks stay algebraic — the graph can't show n.

## Misconceptions
- **forgot-plus-minus** — keeping only the positive branch when un-squaring, halving the solution set. Forms because school radical exercises always returned principal roots; the ± belongs to the ACT of un-squaring ([[radical-simplification-principal-root]]). Single-root distractors are standard.
- **compensation-sign-agonizing** — believing the added (b/2)² should be negative when b is negative. Forms from overgeneralized "track the signs" vigilance; a square is never negative. Produces off-by-2·(b/2)² constants.
- **formula-sign-slips** — dropping a double negative in −b, or mangling −4ac when c is negative. Forms from the formula's sheer density; transcription, not concept. Choice pairs differing only in ± or one sign are the standard harvest.
- **formula-always** — defaulting to the quadratic formula on everything because "it always works." It does — at several times the cost on factorable items and with the widest error surface. Forms because the formula is the one thing everyone memorized. This is a routing failure; see [[quadratic-method-selection]].
- **half-simplified-surd** — leaving √72 in the answer and failing to match the template printed with 6√2 (or matching n wrongly). Forms from treating simplification as optional polish; on template items it's the whole task.

## Diagnostic indicators
- **forgot-plus-minus**: exactly one root reported where two exist; picks only-positive traps; consistent across CtS and formula routes (it's an un-squaring belief, not a method slip).
- **compensation-sign-agonizing**: constants off by twice the compensation; long timing at the compensation step; asks "plus or minus (b/2)²?" when explaining.
- **formula-sign-slips**: picks the sign-twin distractor; errors correlate with negative b or c; clean on all-positive coefficients.
- **formula-always**: formula work visible on trivially factorable items; slow section pacing with correct answers — the wrong-cost signature.
- **half-simplified-surd**: wrong n on template items while the unsimplified form was correct (unsquared-bundle cousin at the surd level).

## Remediation pathways
- **forgot-plus-minus** → the habit fix: write ± at the instant of un-squaring, before isolating. Reinforce with a graph: the parabola crosses the axis twice; where did the second crossing go? Revisit [[radical-simplification-principal-root]] if the symbol/solving confusion underlies it.
- **compensation-sign-agonizing** → re-derive once: expand (x + b/2)² for negative b and watch the +（b/2)² appear regardless. One derivation beats ten reminders.
- **formula-sign-slips** → parenthesize-then-evaluate protocol; discriminant on its own line; on MC, predict the sign-twin distractor and use it as a self-check ("which slip produces choice B?").
- **formula-always** → cost audit: same item by factoring and by formula, timed side by side; then routing drills via [[quadratic-method-selection]]. Band note: for mid-band students a formula-default is defensible robustness — fix the slips before fixing the routing.
- **half-simplified-surd** → make full surd reduction a mandatory closing step on any radical answer; drill [[radical-simplification-principal-root]] largest-square extraction.

## Mastery criteria
Executes both routes error-free on negative-coefficient quadratics; produces fully simplified surds and matches templates correctly; states WHY the compensation is always positive. Proof: hard-band template-matching items ("one solution is (h − √n)/2; find n") correct, plus no sign-twin distractor picks over a session.

## Difficulty ladder
Medium: clean a = 1 completing the square; formula with positive coefficients. Medium-hard: negative b/c sign discipline; surd simplification in the answer. Hard: template matching; fraction coefficients; a ≠ 1 CtS; parameterized coefficients where the formula output is an expression (often better served by [[vieta-root-aggregates]]); CtS reused structurally for vertex form and circle equations (cross-cluster).

## Teaching notes
- **Struggling**: formula only, with the parenthesize-protocol and the discriminant as a separate line. Completing the square is a distraction at this stage; robustness beats elegance.
- **Average**: formula fluency first, then CtS introduced via its derivation payoff (it explains where the formula comes from — no more black box). The ± habit drilled on every un-squaring.
- **Advanced**: CtS as the lighter tool on non-factorable items (smaller numbers, less nesting); template-matching workflow; b/2 pre-simplification.
- **1500+**: CtS-primary policy is a legitimate optimization at this band — it can be run mentally, feeds vertex form and circle equations directly, and out-paces the formula on most non-factorable items. Teach it as such: a 700+ upgrade, not a universal rule. Desmos numeric-comparison for radical choices as the 10-second verification layer.
