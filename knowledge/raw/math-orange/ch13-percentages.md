# Raw notes — Math source A, Ch. 13: Percentages

Source: math-orange (study source A), ch. 13 (three sections: percentage fundamentals, percent increase/decrease, mixtures/concentrations; conversion micro-drills, embedded examples, per-section practice, 32-item mixed set + answer key). Domain: Problem-Solving & Data Analysis. Our synthesis only — no source expression retained.

## Concepts taught

- **percent-as-scaled-fraction** — a percent is a fraction whose denominator has been normalized to 100 for readability; fraction, decimal, and percent are three skins on one number. The % sign behaves like "×0.01" (or "/100"), which makes every conversion mechanical.
- **percent-decimal-conversion** — ÷100 (point left two places) percent→decimal; ×100 (point right two places) decimal→percent. Drilled to automaticity before any word problems, including awkward cases (fractional percents like 0.6%, over-100 cases like 210%).
- **percent-three-slots** — every percentage situation has exactly three quantities: the reference amount (base/original/total), the percentage (relative share), and the actual amount (same units as the base). Know any two → compute the third. There are therefore exactly three question shapes, not thirty.
- **find-the-base-scenario** — the third shape ("actual amount is P% of WHAT?") is singled out as the one that breaks students: the phrasing feels backwards, like being handed the answer and asked for the question. Handled by the same single equation, no special trick.
- **universal-percent-sentence** — normalization move: rewrite ANY percent situation into the canonical sentence "[amount] is [P] percent of [base]," which transcribes directly to amount = p·base (p in decimal form). One memorized equation covers all three scenarios; solve for whichever letter is missing.
- **percent-proportion-alternative** — the P/100 = part/whole proportion is taught as a legitimate slower alternative for students who prefer it; consistency of method is valued over optimality.
- **plausibility-check** — before accepting a computed percentage, ask whether it should be above or below 100% (is the part bigger or smaller than the base?). Cheap self-audit that catches inverted setups.
- **fraction-preference-for-percents** — percents ending in 0/5 have small clean fraction forms (25%→1/4, 80%→4/5, even 65%→13/20); using them keeps hand arithmetic viable. Includes a divide-by-5 micro-technique (÷10 then ×2). For our product: keep the fraction fluency, but note Desmos makes the decimal path equally safe — teach both and let the student's speed decide.
- **percent-multiplier** — THE central mental model of the chapter: applying a percent change means one multiplication. Decrease by p% → multiply by (1 − p); increase by p% → multiply by (1 + p). "New value" language (loses, shrinks, discounted, grows, raised) maps straight to a multiplier. Extreme cases stress-tested: +200% → ×3, +120% → ×2.2, −100% → ×0, +0.4% → ×1.004.
- **complementary-percentage** — a p% reduction means you still HAVE (100−p)%; most SAT reduction problems actually want the remaining amount, not the removed amount. Deciding "amount removed vs. amount left" is a named reading step.
- **multiplier-applies-to-expressions** — the multiplier can hit an entire algebraic expression, not just a number (half of (30h + 200)); percent word problems often = write a small linear expression, then scale it.
- **percent-more-is-not-percent-less** — 150 is 50% more than 100, but 100 is NOT 50% less than 150. The percentage is relative to whichever quantity follows "of"/anchors the comparison; swapping roles changes the base. Corollary: from "x is 80% of y" you may NOT conclude y = 1.2x (correct: y = x/0.8 = 1.25x).
- **relative-change-formula** — percent change = (new − old)/old; sign gives direction; denominator is ALWAYS the original value. Taught, then deliberately demoted: the book prefers re-expressing the situation as "new is p percent of old" (new = p·old) and reading p against 1, because that reuses the universal sentence instead of adding a formula to memorize.
- **multiplier-as-diagnosis** — solving new = p·old and interpreting p directly: p = 1.2 means 20% growth; p = 0.85 means 15% decline. One computation yields both size and direction.
- **successive-percent-changes** — sequential percent changes CANNOT be added; each change rebases the reference. Compose by multiplying the multipliers in sequence (0.9 × 1.05 × c). Order doesn't matter (multiplication commutes) — but rebasing does.
- **same-base-exception** — percentages ARE addable when they apply to the same fixed reference (25% of the pizza + 50% of the SAME pizza = 75% of it). The addability question is really "same base or shifted base?" — this contrast pair inoculates better than a blanket "never add."
- **reverse-percent-recovery** — recovering the original value from a post-change value: DIVIDE by the multiplier(s) (original = p/((0.7)(1.09)) for a discounted-then-taxed price). Never multiply the final value by the complementary percent.
- **mixture-concentration-model** — (amount of substance) = (concentration as decimal) × (total quantity); mixing two solutions: substance amounts add, totals add, so 0.1A + 0.2B = 0.15(A + B) type equations fall out. One equation for totals, one for the tracked ingredient; substitute totals-equation into ingredient-equation to get one unknown.

## Teaching philosophy observed

- **One template, three scenarios.** Rather than three procedures for the three question shapes, one canonical sentence + one equation. Reduces memory load and makes the "backwards" find-the-base case routine.
- **Multiplier-first, formula-second.** Percent change is taught as multiplication from the very first page of 13.2; the classic change formula appears later and is explicitly ranked below the multiplier/universal-sentence approach for consistency of thought.
- **Drill → concept → composition.** Micro-drills (conversions; write-the-multiplier for a stated change) build fluency BEFORE word problems; drill items deliberately include the trap cases (over-100% changes, sub-1% changes, 100% decrease).
- **Write it down even if you can do it in your head.** Head-math is validated as understanding, but full written equations are promoted as exam practice — careless-error insurance.
- **Loud misconception callouts.** The successive-change fallacy gets an emphatic all-caps-style warning; percent-more≠percent-less gets its own named box. The book treats these as THE content, not as footnotes.
- **Calculator stance:** use fractions to avoid the calculator; calculator sanctioned for forced decimals and long chains (do the whole chain in one entry, don't round intermediates). Our translation: Desmos one-line chains, never round mid-stream.

## Expert reasoning patterns (generalized)

1. **Any percent problem:** rewrite as "___ is ___ percent of ___" → identify which slot is unknown → amount = p·base → solve. Direction words ("is", "equals") anchor which quantity sits alone on a side.
2. **Percent change question:** new = p·old → p vs. 1 gives direction and size. (Or relative-change formula with old in the denominator, if preferred.)
3. **Any sequence of changes:** convert each change to its multiplier as you read → multiply them onto the starting quantity in order → only at the end interpret the composite against 1. To recover an earlier value, divide by multipliers.
4. **Mixture:** one equation per conserved thing (total quantity; tracked ingredient at concentration×amount) → substitute → linear solve. It's linear equations wearing a lab coat.
5. **Sanity gate:** before committing, check whether the answer should exceed the base / exceed 100% — catches inverted setups in seconds.

## Misconceptions targeted (with the why)

- **additive-successive-changes** — students add sequential percent changes (+5% then −10% = "−5% overall") because percentages present as absolute quantities, and in the one familiar case (same fixed base) adding genuinely works; they overgeneralize from that case. The "+40% then −40% returns to start" illusion is the same error with extra pull: the two operations LOOK like inverse operations (same number, opposite signs — which for addition WOULD cancel), but ×1.4 and ×0.6 are not inverses; the decrease acts on a larger base, so it removes more than the increase added (net ×0.84). Trap answers: the naive net-percent value; expressions like (1.38)(1.37x) vs (0.38)(1.37x) test whether the student builds multipliers at all.
- **reverse-percentage-by-complement** — asked for the pre-tax/pre-discount original, students multiply the final amount by (1∓p) instead of dividing by (1±p), because "8% tax" reflexively cues "take 8% of whatever number I'm holding." Why it forms: the multiplier is learned as forward-only; inversion requires seeing the multiplier as an operator with an inverse. Distractor: final×complement sits right next to the correct final÷multiplier (both slightly below the final value for taxes — that's what makes it vicious).
- **percent-more-less-symmetry** — "x is 20% less than y, so y is 20% more than x." Forms because in additive contexts more/less by an AMOUNT truly is symmetric; students port that symmetry to relative change, where the base swaps. Produces y = 1.2x from x = 0.8y.
- **multiplier-off-by-one** — writing ×0.2 for "decrease by 20%" (computing the removed part when the remaining part is wanted), or ×1.2 for "+120%" (misplacing the added-vs-total distinction past 100%). Forms because "percent OF" and "percent CHANGE" use the same words with different referents. Drill answer keys show these traps drilled explicitly (+120% → 2.2; −100% → 0).
- **decimal-point-slips** — sub-1% and fractional percents (0.4% → ×1.004, not ×1.04) exploit purely mechanical conversion habits; drilled in the multiplier drill.
- **base-misidentification-in-tables** — percent-flavored table problems reuse the ch.12 restricted-denominator trap ("given the gamer did NOT answer Always" shrinks the base).

## SAT patterns claimed (unverified-claim; verify against official material + bank)

- Reduction problems usually want the remaining (complementary) amount, not the decrease itself. (unverified-claim)
- Successive-change items frequently ask for the composed EXPRESSION ((0.87)(1.11)(5400)) rather than the evaluated number — testing the model, not arithmetic. (unverified-claim; matches our M2 style memory, still verify)
- Reverse-percentage (recover original from final incl. tax/discount) is claimed as a recurring hard shape, including in-terms-of-p variable versions. (unverified-claim)
- Mixture problems claimed RARE but disproportionately lethal to unprepared students; recent tests sometimes supply the mixing equation and just ask for a plug-in. (unverified-claim)
- Percent word problems requiring writing a small linear expression first, then scaling it, are claimed common. (unverified-claim)
- "Percent greater/fewer" chained across three dates (25% fewer then 40% more) claimed as a standard medium-hard shape. (unverified-claim)

## Prerequisite edges implied

- fraction/decimal fluency → percent-decimal-conversion → everything here
- ch.12 probability-as-ratio ↔ percentages (probabilities re-expressed as percents; comparison is easier in decimal/percent form)
- one-variable linear solving → universal-percent-sentence, reverse-percent-recovery
- writing linear expressions → multiplier-applies-to-expressions, percent word problems
- linear systems (light) → mixture-concentration-model
- percent-multiplier + successive-percent-changes → (unlocks, explicitly) exponential relationships: the next chapter opens by defining exponential change as REPEATED multiplication by a fixed factor — the multiplier model is the load-bearing prereq for exponential growth/decay. Strong edge for our graph.
- squared-relationship-ratios (ch.12) → area-rescaling percent items (enlarge photo to 150% area; −20% length × +p% width).

## Difficulty escalation observed

easy: convert forms; P% of x; single multiplier. → medium: find-the-base; percent change between two given values; complementary-percentage readings; table + percent hybrids. → harder: successive changes (numeric, then expression-form, then in-terms-of-variables); reverse recovery through TWO stacked changes (discount + tax); percent conditions on restricted table bases. → hardest: mixture systems; geometry-composed items (multiplier equation 0.8(1+p) = 1.2 across two dimensions); percent relationships between abstract variables (p in terms of x). Escalation = abstraction (numbers → expressions → variables) plus stacked rebasing.

## What this source does well / poorly

- **Well:** the multiplier is installed as a single portable mental object and then stress-tested at the edges (over-100%, sub-1%, exactly-100%); the same-base-vs-shifted-base contrast explains WHEN adding percentages is legal instead of banning it; the universal sentence collapses three scenario types into one equation; drills isolate the exact trap cases; recap is a genuinely usable checklist.
- **Poorly:** verbose narrative around simple ideas; the relative-change formula is taught then half-disowned, which could confuse students who arrive already knowing it (our graph should unify: the formula IS the multiplier minus 1); no interest/repeated-growth preview beyond the ch.14 handoff; mixtures get one thin section with only two practice items; minimal use of number-line/area visuals for WHY ×1.4×0.6 < 1 — a visual (shrinking the larger bar) would land the rebasing insight faster than prose; calculator-averse framing again under-leverages Desmos (chain-multiplying multipliers in one line is the perfect Desmos habit).
