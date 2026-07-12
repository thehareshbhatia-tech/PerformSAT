---
id: formula-rearrangement
section: math
domain: algebra
skill: rearrange-formula-for-a-variable
difficulty_span: [medium, hard]
prereqs: [linear-equation-balance-peeling, solve-for-the-asked-quantity]
unlocks: [unit-anchored-interpretation]
related: [extraneous-solutions-non-reversible-moves]
---

# Rearranging formulas: solve for a letter when everything is letters

## What it is
Given an equation relating several quantities (often a real-world formula), express one chosen variable in terms of the others. The mechanics are identical to numeric solving — balance moves, peeling — but nothing evaluates, so the student must run the algorithm on pure structure. The complete pipeline: expand any products, herd every target-containing term to one side and everything else to the other, factor the target out, divide by its cofactor.

## Why it exists / why the SAT tests it
"Which equation correctly expresses X in terms of the others?" is a recurring shape, usually wrapped in a formula shell (physics-ish, finance-ish, dosage-ish). (unverified-claim on frequency; matches our bank.) It probes whether solving is understood as principle or memorized as number-ritual: students who can solve 3x + 5 = 20 but not solve q = rs + t for s never internalized the balance principle. The four choices typically differ by exactly one algebra step — a sign flip, an inverted division, a factor left behind — so the item is really a test of move-by-move integrity.

## Mental model
**Letters are just numbers you haven't met.** Freeze every non-target letter into a gray blob and watch only the target glow. The pipeline never varies: expand → collect target terms → factor target out → divide by the cofactor. Speed comes from never deviating, not from cleverness. If the target lives in one term only, the pipeline degenerates to ordinary peeling.

## Expert reasoning process
1. Mark the target letter. Locate every term containing it (one term = easy; multiple terms = full pipeline).
2. Expand any parentheses that hold the target inside a product.
3. Balance-move all target terms to one side, everything else to the other.
4. Factor the target out; divide both sides by the cofactor in one step.
5. Match to choices: if your form matches none, look for an equivalent arrangement before doubting the work — multiply through by −1, or check whether a choice is your result with one fraction unsplit. (A sum in a numerator splits into separate fractions; a sum in a denominator does NOT — one-directional rule.)
6. Verification when unsure between two choices: invent small numbers for every letter, evaluate the original, and test which candidate reproduces the target's value.

**Desmos vs. algebra:** Desmos cannot do this — there is nothing to plot when the answer is symbolic. This is a permanently algebra-only pattern, which is exactly why the exam keeps it. The one calculator assist is step 6: number-substitution verification is faster and safer in the calculator than by hand when the formula is ugly. Teach: symbolic answer choices = algebra lane, with numeric spot-checking as the safety net.

## Misconceptions
- **letters-freeze-panic** — the student who solves numeric equations fine stalls when coefficients are letters. Forms because their solving was memorized on numbers (a ritual keyed to "get a number at the end"), so with no number to produce, the procedure has no goal state. Produces skipped items or first-move paralysis.
- **factor-left-behind** — moving target terms together but dividing by only part of the cofactor, or forgetting a term entirely when factoring. Forms because multi-term factoring of a letter is rarely drilled in school; the single-term case is the trained default. Distractors encode the one-factor-short result.
- **sum-denominator-split** — splitting c/(a+b) into c/a + c/b during rearrangement. Forms by overgeneralizing the legal numerator split; the two look symmetric and schooling rarely shows the failure case.
- **sign-flip-on-transfer** — losing a negative when herding terms across, especially when the target's terms carry minus signs. Same visual-attachment root as distribution errors, amplified by symbol density.

## Diagnostic indicators
- letters-freeze-panic: strong on numeric solves, weak/skipped on literal ones — the accuracy gap between the two is itself the signal; explain-back includes "I don't know where to start."
- factor-left-behind: picks the choice missing one term in the denominator; scratch work shows collection done, factoring botched.
- sum-denominator-split: picks the choice with the denominator distributed; the error is confident, not hesitant.
- sign-flip-on-transfer: picks the sign-variant choice; errors correlate with formulas containing subtraction.

## Remediation pathways
- letters-freeze-panic: bridging drill — same equation solved three times: all numbers, half letters, all letters, with identical move sequences written in parallel columns. The parallelism IS the lesson. If it doesn't land, revisit [[linear-equation-balance-peeling]] (the balance principle was never actually internalized).
- factor-left-behind: re-derivation — factoring as reverse distribution; check by redistributing before dividing.
- sum-denominator-split: the one-direction contrast pair with numbers (10/(2+3) vs 10/2 + 10/3); memorable because the arithmetic is obviously wrong.
- sign-flip-on-transfer: slow-motion protocol on subtraction-heavy formulas: wrap negative terms in parentheses before moving them.

## Mastery criteria
Student runs the expand-collect-factor-divide pipeline on a formula where the target appears in two or more terms (including inside a product with other letters) without deviation, and can verify a choice by number substitution. Evidence: consistent accuracy on medium/hard literal-equation items with the four one-step-apart choices, no sign/factor-signature distractor picks.

## Difficulty ladder
- **Easy/Medium:** target in one term; two-step literal peel (these are just [[linear-equation-balance-peeling]] wearing letters).
- **Medium:** target in one term but nested (inside a fraction or product); answer-form matching required.
- **Hard:** target in multiple terms forcing the full factoring pipeline; targets under structure that must be unwrapped first; formula shells adding reading load. Module 2 Hard escalates by how buried the target is and by parameterization — never by arithmetic, since there is none.

## Teaching notes
- **Struggling:** don't start with letters. Start with a numeric solve, then replace one number with a letter per round, keeping the moves identical. Goal state reframe: "done" means the target alone on the left, not a number.
- **Average:** teach the pipeline as a named four-beat rhythm; drill the factor-out step specifically, since it's the novel beat.
- **Advanced:** answer-form matching (×(−1), fraction splitting rules) and the number-substitution verification move for choice pairs.
- **1500+:** speed via structure-reading: classify the item (one-term vs multi-term target) in the first three seconds and pick the degenerate or full pipeline accordingly; this classification is what separates 30-second from 90-second executions.
