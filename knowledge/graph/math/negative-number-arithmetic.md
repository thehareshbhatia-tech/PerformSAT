---
id: negative-number-arithmetic
section: math
domain: algebra
skill: foundations
difficulty_span: [easy, medium]
prereqs: [number-line-order-and-distance]
unlocks: [order-of-operations, function-as-io-machine, linear-equation-balance-peeling]
related: [exponent-rules-factor-counting, magnitude-sanity-checks]
---

# Negative-number arithmetic — signs as a separate bookkeeping pass

## What it is
The sign rules for the four operations, held as mechanical bookkeeping rather than intuition: subtracting a negative is adding (a − (−b) = a + b); multiplying or dividing two same-sign numbers gives positive, opposite signs give negative; and a minus sign in front of a parenthesis distributes to EVERY term inside. Not glamorous — but sign slips are the single most common way strong students lose points they had already earned.

## Why it exists / why the SAT tests it
The exam rarely writes a "negative numbers" item; instead it builds sign traps into substitution steps: evaluate f(−3) where f squares its input, distribute a subtraction across a two-term parenthesis, or plug a negative into a formula with its own minus signs. Distractor sets are engineered so each plausible sign slip lands on a printed choice.

## Mental model
**Do the magnitudes, then do the signs.** Treat every messy computation as two passes: compute with bare magnitudes, then settle the sign by counting negative factors (even count → positive, odd → negative — the same parity logic as [[exponent-rules-factor-counting]]). For subtraction chains, rewrite a − (−b) as a + b BEFORE computing. When substituting a negative into an expression, wrap it in parentheses first — (−3)² and −3² are different numbers, and the parentheses are what keep them apart.

## Expert reasoning process
1. Substituting a negative value: write the parentheses first, then evaluate.
2. Distributing a leading minus: change the sign of every term inside, then drop the parenthesis; verify the LAST term flipped (it is the one students forget).
3. Long products/quotients: count the negative factors once at the end for the sign.
4. Sanity-check against the number line: adding a negative moves left, subtracting a negative moves right ([[number-line-order-and-distance]]).

## Misconceptions
- **last-term-unflipped** — Distributing a minus across a parenthesis but flipping only the first term (a − (b − c) → a − b − c). Forms because the minus visually attaches to the first term only; surfaces as consistent off-by-2c errors.
- **bare-negative-substitution** — Plugging a negative in without parentheses, so squaring keeps the minus (f(−3) with x² computed as −9). Forms from writing habits, not concepts; the distractor set always prints the −9 answer.
- **double-negative-drop** — Reading a − (−b) as a − b because two minus signs "cancel into one." Forms from verbal shorthand ("minus minus") replacing the rewrite step.

## Diagnostic indicators
- Wrong answers that match the correct answer with exactly one sign flipped.
- Errors concentrated on items whose given values are negative, while positive-value siblings are clean.
- Work shows f(−3) written as f(−3) = −3² style substitutions without parentheses.

## Remediation pathways
- Enforce the two writing habits (parentheses on substitution; full-flip on distribution) rather than re-teaching rules the student can already recite.
- Then run the parity count on longer products so the sign becomes a single end-of-computation decision, not a running worry.
