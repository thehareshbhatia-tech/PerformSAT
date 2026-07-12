# Raw notes — Math source B, Ch. 8: Percent

Source scope: chapter opener + 11 worked examples + translation table + 2 exercise sets (~15 + ~15 items), pages p0049–p0053 scans (ch. 8 ends on the left half of p0053).
Section/domain: Math — Problem-Solving & Data Analysis (percentages).

## Concepts taught (candidate nodes)

- `percent-of-as-multiplication` — "p% of x" means (p/100)·x; the word "of" is a multiplication instruction. Foundation for everything else in the chapter.
- `percent-change-multiplier` — A p% increase is one multiplication by (1 + p/100); a p% decrease is one multiplication by (1 − p/100). The "one ±" exists because the original 100% is either kept-plus-extra or partially-retained: the decrease multiplier IS the fraction that remains.
- `multiplier-chaining` — Successive percent changes (and taxes, discounts, layered percents) compose by multiplying their factors in one product; intermediate dollar values never need to be computed. This is the chapter's flagship method, stated as an explicit bold rule.
- `multiplier-back-translation` — Fluency in reverse: seeing 1.15x and reading "15% greater than x," seeing 0.85x and reading "15% less than x." Multipliers and percent-comparison sentences are one bidirectional vocabulary.
- `percent-change-formula` — percent change = (new − original)/original × 100. The original value — the quantity after the word "than" — is always the denominator.
- `percent-change-asymmetry` — A +p% change cannot be undone by a −p% change because the two percents act on different bases. Reversing a known change requires DIVIDING by its multiplier (or setting up original × factor = known and solving), never applying the opposite percent.
- `percent-variable-form` — When the percent is a variable p, it must enter as p/100; expressions like (1 − p) vs (1 − p/100) are the difference between right and wrong.
- `pick-100-strategy` — Concretize an abstract percent chain by assuming the total is 100 (or another convenient base) and tracking actual numbers; a legitimacy check or full substitute for algebra on percent-of-percent items.
- `greater-than-vs-times` — "x% greater than" compares the EXCESS over the original; "x times" compares the whole. 200 vs 50 is 4 times but only 300% greater. Extreme percents ("80% less," "250% greater") are still one-step multipliers (0.20 and 3.5), not 0.80 and 2.5.

## Teaching philosophy observed

- Multiplier-first ideology: every percent situation is converted to a single multiplication factor as early as possible, and the chapter's only bolded rule is "never compute intermediate values — multiply all the factors at once." The pedagogy treats step-by-step percent arithmetic as the enemy (tedious AND error-prone).
- Dual entry points: each early idea is shown both algebraically (with variables) and via pick-a-number, explicitly serving students uncomfortable with variables.
- Each worked example is immediately generalized into a rule; the chapter accumulates a compact translation table (percent-of / percent-greater / percent-less → factor forms) as its central reference object.
- Trap-forward teaching: several examples exist primarily to inoculate against a specific wrong move (the reverse-percent example, the "400%" example), with the wrong reasoning walked through before the right one.

## Expert reasoning patterns (generalized)

1. **Translate every percent clause into a factor before doing anything.** Increase → (1+p/100), decrease → (1−p/100), "of" → ×(p/100). Then the problem is pure multiplication bookkeeping.
2. **Chain, don't step.** For multiple changes, write the whole product (original × f1 × f2 × f3) and evaluate once. This eliminates the dominant error source (rounding/adding against the wrong base mid-stream).
3. **Identify the base ("than"-anchor) before computing any comparison.** The quantity after "than" is the original value — the denominator of the change formula and the anchor of the multiplier.
4. **Reverse changes by equation, not by opposite percent.** If final = known and the change is known, set original × factor = final and divide. An expert's reflex when seeing "was p% more/less than [unknown earlier value]" is to name the unknown and multiply toward the known.
5. **Sanity-check variable-percent expressions dimensionally:** p is a whole-number percent, so it must appear as p/100 inside a factor; a bare (1 − p) with p ≈ 25 goes negative — an instant absurdity check.
6. **When abstraction stalls, instantiate:** pick 100 for the base and recompute; per-item concrete arithmetic verifies (or replaces) the factor algebra.

Desmos: not mentioned in this chapter. (These are arithmetic-identity items; calculator helps evaluate products but no graphing strategy applies.)

## Misconceptions targeted (and why students hold them)

- **percent-symmetry illusion** — Believing +30% then −30% returns you to start, so "last year" can be found by decreasing this year's total by 30%. Forms because addition/subtraction ARE symmetric and students port that schema onto percents without noticing the base changes. Trap design: the reverse-applied factor (e.g., known×0.70, or 1.20k for a 20% decrease's reversal) always appears as a choice and matches naive intuition exactly.
- **excess-vs-multiple confusion** — Reading "200 is what % greater than 50" as 400% because 200 = 4×50. Forms because school usage blurs "times" and "percent greater." Trap: the ×-based percent is always offered next to the excess-based one.
- **big-percent literalism** — "80% less" → ×0.80, "250% greater" → ×2.5. Forms because unusual percents break the memorized 1± pattern and students grab the raw number. The source explicitly claims the SAT uses uncommon percents deliberately for this (unverified-claim).
- **missing-hundredth on variable percents** — Writing 240(1−p) for "p% less than 240." Forms because with numeric percents the /100 is absorbed silently into the decimal, so students never internalized it as a required step.
- **stepwise-base drift** — Computing chained changes one step at a time and taking a percent of the wrong intermediate. Forms because stepwise is how percents are first taught; the error is not conceptual but procedural exposure.
- **percent-of-percent flattening** — For nested shares (40% of a group, 20% of those), adding or averaging instead of multiplying the shares. Forms from treating percents as counts rather than proportions of stated bases.

## SAT patterns claimed (unverified-claim; verify against bank/official)

- Multi-change items (discount + tax, increase then decrease) are designed so stepwise computation is tedious but factor-chaining is fast — speed is part of the intended discrimination.
- Reverse-percent items ("final value known, find original") are a recurring family whose main distractor is always the opposite-percent application.
- Variable-percent expression items systematically offer the (1−p) / (p−1) / (1−p/100) / (p/100 −1) permutation set.
- Percent-change compute items ("was what percent less than") test base identification via the "than" clause; distractors use the wrong base or wrong sign.
- Exercise set 2 escalates into multi-variable percent relations (p is 60% of q, p is 390% of r → q vs r), where each clause is a factor and the answer is a factor quotient.

## Prerequisite edges implied

- `percent-of-as-multiplication` ← fraction/decimal conversion fluency.
- `percent-change-multiplier` ← percent-of-as-multiplication.
- `multiplier-chaining`, `percent-change-asymmetry` ← percent-change-multiplier.
- This chapter is declared (by ch. 9's opener) the direct prerequisite of exponential growth/decay: the growth factor b IS a chained percent multiplier applied repeatedly.

## Difficulty escalation observed

easy: single percent-of, single increase/decrease → medium: two-step chains; back-translation (given 1.84×, find the percent increase); percent-change formula with rounding → hard: reverse-percent with variables; uncommon percents (80% less, 390% of); chained relations across 3+ variables; nested shares of shares with tiny decimals; base-switching stories (wholesale vs retail price, tax added after discount).

## What this source does well / poorly

- Well: the factor-chaining rule is the single most valuable idea in SAT percent work and is taught with conviction; asymmetry of percent change gets a dedicated worked demonstration (100→150→75) that is memorable and portable; misconception inoculation is explicit rather than incidental.
- Well: the translation table gives a compact canonical reference our Learn chapter should have an equivalent of (our own design).
- Poorly: no real-data contexts (charts/tables) that the digital SAT often wraps percents in; pick-100 is shown once early but not systematically offered on hard items; no timing guidance; percent-point vs percent distinction never addressed; no connection forward to ratios/proportions.
