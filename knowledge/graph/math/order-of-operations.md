---
id: order-of-operations
section: math
domain: algebra
skill: foundations, order-of-operations
difficulty_span: [easy, medium]
prereqs: []
unlocks: [function-as-io-machine, linear-equation-balance-peeling, exponent-rules-factor-counting]
related: [fraction-operations, negative-number-arithmetic]
---

# Order of operations: the grammar of an expression

## What it is
The convention that fixes what an expression means: grouping first, then exponents, then multiplication and division left to right, then addition and subtraction left to right. It is the grammar every other math skill assumes — evaluating a function at an input, simplifying before solving, applying exponent rules all depend on parsing the expression the same way the test writer did. Like fraction fluency, the SAT never asks about it directly but punishes its absence constantly, especially through sign and grouping errors that masquerade as carelessness.

## Why it exists / why the SAT tests it
An expression is ambiguous without a shared parsing order, so mathematics fixes one. On the exam, wrong parsing produces a specific, exploitable error: negating only part of a term, distributing an exponent over a sum, or evaluating a function's input in the wrong order. Writers seed distractors with exactly these mis-parses. A student who parses reliably removes a whole layer of "silly" errors.

## Mental model
**Grouping and exponents bind tightest; addition and subtraction bind loosest.** A minus sign in front of a term applies to the WHOLE term after the higher-priority operations resolve — −3² is −(3²) = −9, not (−3)² = 9, because the exponent binds before the negation. When in doubt, add parentheses to make your intended grouping explicit, then evaluate inside-out.

## Expert reasoning process
1. Scan for grouping symbols (parentheses, brackets, fraction bars, radicals — a fraction bar and a radical both act as invisible grouping) and resolve their interiors first.
2. Apply exponents, watching the scope: a negative sign is NOT inside the base unless parenthesized.
3. Multiply and divide left to right; then add and subtract left to right.
4. Treat a leading minus as multiplication by −1 applied after higher-priority operations, so its scope is clear.
5. **Desmos decision:** Desmos parses exactly and shows the value instantly — invaluable for checking a hand-parse, but note Desmos requires YOU to type the grouping correctly, so the skill of knowing where the parentheses go is still yours.

## Misconceptions
- **negation-scope-error** — Reading −x² as (−x)². Forms because the minus sign visually precedes the whole thing and "square it" feels like it includes the sign; the exponent actually binds tighter. Produces sign-flipped values that are frequently the designed distractor.
- **left-to-right-literalism** — Evaluating strictly left to right regardless of operation, e.g. 2 + 3 × 4 as 20. Forms from reading habit overriding precedence. Fixed by internalizing that ×/÷ outrank +/−.
- **hidden-grouping-missed** — Not treating a fraction bar or radical as grouping, so the numerator or radicand isn't fully resolved before combining. Forms because the grouping is implicit, not a visible parenthesis.
- **exponent-over-sum** — Simplifying (a+b)² as a²+b². Forms from over-extending distribution; the exponent does not distribute over addition (see [[dropped-middle-term]]).

## Diagnostic indicators
- **negation-scope-error**: answers off by a sign specifically on items with −x², or with a negative input to an even power; the magnitude is right.
- **left-to-right-literalism**: multi-operation arithmetic that matches a strict-left-to-right miscalculation.
- **hidden-grouping-missed**: fraction or radical items where the numerator/radicand was partially evaluated.

## Remediation pathways
- negation-scope-error: drill −x² vs (−x)² side by side, verbalizing "the exponent grabs the base before the minus acts"; confirm with Desmos.
- left-to-right-literalism: precedence practice on mixed-operation strings until ×/÷ before +/− is reflexive.
- hidden-grouping: teach the fraction bar and radical as parentheses you can't see; rewrite them with explicit parentheses when parsing.

## Mastery criteria
The student parses any expression the way the writer intended — correct negation scope, implicit grouping resolved, no exponent-over-sum — so these errors vanish from harder items. Proof: sign- and grouping-clean execution inside function-evaluation, simplification, and exponent items.

## Difficulty ladder
- **Easy**: numeric expressions with explicit parentheses and one or two operation types.
- **Medium**: negative bases and exponents, implicit grouping (fraction bars, radicals), nested parentheses, and expressions embedded in function evaluation or substitution.

## Teaching notes
- **Struggling**: focus on the two highest-yield traps — negation scope (−x²) and hidden grouping (fraction bars) — before broad precedence drills.
- **Average**: precedence plus explicit-parenthesis rewriting as a habit under time pressure.
- **Advanced / 1500+**: parsing is automatic; the residual value is catching a writer's distractor built on the common mis-parse, and typing correct grouping into Desmos so the tool's answer is trustworthy.
