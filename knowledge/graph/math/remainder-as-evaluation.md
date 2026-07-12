---
id: remainder-as-evaluation
section: math
domain: advanced-math
skill: equivalent-expressions
difficulty_span: [medium, hard]
prereqs: []
unlocks: []
related: [zeros-roots-factors-identity, graph-as-io-pairs, function-as-io-machine]
---

# The remainder is an evaluation, not a division

## What it is
Polynomial division obeys the same identity as whole-number division: **dividend = divisor × quotient + remainder**, with the remainder's degree below the divisor's. In fraction form: dividend/divisor = quotient + remainder/divisor. For the linear divisors the exam uses, the identity collapses remainder-finding into one evaluation: since P(x) = (x − r)·Q(x) + R holds for every x, setting x = r kills the divisor term and leaves **R = P(r)** — the remainder on division by (x − r) is the dividend evaluated at r. One plug-in, no division. For a scaled divisor (ax − r), evaluate at the divisor's zero, r/a. And remainder 0 is factorhood: (x − r) divides P exactly when P(r) = 0 exactly when r is a zero — the division-flavored face of [[zeros-roots-factors-identity]].

## Why it exists / why the SAT tests it
This family checks whether the student owns the identity or only the school algorithm. Signature shapes: an expression rewritten as "quotient + remainder/(x − r)" with the choices differing only in the remainder (the answer-shape cue — evaluate the numerator at r and match, ignoring the quotient entirely); "P(6) = 4 — which of the following must be true?" with factor statements planted among the choices; a remainder asked from only a TABLE or GRAPH of P, where no formula exists to divide. Long division can grind out any of these, slowly; the identity answers them in seconds, and that speed gap is the discrimination being sold. unverified-claim: real items keep divisors first-degree, so the full algorithm is never strictly required — verify against bank.

## Mental model
**The divisor term is built to vanish.** P(x) = (x − r)·Q(x) + R is an identity — true at every x — so choose the x that murders the term you don't know: at x = r, the entire (x − r)·Q(x) block is zero no matter what Q is, and the equation hands over R = P(r). You never needed the quotient; the identity licenses ignoring it. A remainder question is a function-evaluation question wearing a division costume ([[function-as-io-machine]]).

## Expert reasoning process
1. **Read the answer shape first.** Choices of the form quotient + k/(x − r) differing in k: evaluate the dividend at r, match k, never divide. The quotient printed in the choices is decoration.
2. **Find the divisor's zero properly.** Solve divisor = 0: (x + 5) → evaluate at −5; (2x − 3) → at 3/2. Never plug in the printed number.
3. Evaluate P there — by hand for small polynomials, or define P in the calculator and compute P(r) directly.
4. **Route factor questions through the zero-remainder face**: "is (x − a) a factor?" = "is P(a) = 0?"; and "P(6) = 4" means the remainder on division by (x − 6) is 4 — so (x − 6) is NOT a factor.
5. Given only a table or graph of P: the remainder on division by (x − a) is P's output — the height — at x = a; read it off ([[graph-as-io-pairs]]).
6. **Verify or reverse with the identity**: divisor × quotient + remainder must multiply back to the dividend — also the route for reversals that ask for a dividend coefficient.
7. **Long division as the demoted backup**: same algorithm as numeric long division (divide leading terms, multiply back, subtract, bring down, repeat). Reserve it for the rare item where the QUOTIENT itself differs across choices; if forced to run it, insert zero-coefficient placeholders for missing degrees and distribute the subtraction sign across every term.

## Misconceptions
- **value-is-factor** — from P(6) = 4 concluding that (x − 6) is a factor. Forms because "plugged in, got a clean number" pattern-matches success; factorhood requires the evaluation to be ZERO — a nonzero value IS the remainder. Distractors offer factor claims about 6 and its shifts; the credited choice states the remainder.
- **plug-the-printed-number** — divisor (x + 5) evaluated at +5. Forms because the theorem is memorized as an "x − r" template read as "plug in the number you see" instead of as "evaluate at the divisor's zero." Distractors are built by evaluating at the negated point.
- **scaled-divisor-slip** — for (ax − r), evaluating at r instead of r/a. The same template overfit one level deeper: the zero of 2x − 3 is 3/2, not 3. Boxed-in by items whose choices include P(r) alongside P(r/a).
- **always-long-divide** — running the full algorithm on every remainder item. Forms because school teaches division as the only remainder machine and the theorem, if at all, as trivia. Less a wrong-answer generator than a time trap that also exposes the algorithm's two mechanical failure points: omitted zero-coefficient placeholders and an undistributed subtraction sign.

## Diagnostic indicators
- Picks a factor statement on a nonzero-evaluation item → **value-is-factor**.
- Answer matches P evaluated at the sign-mirrored point → **plug-the-printed-number**.
- Correct on (x − r) divisors, wrong precisely on (ax − r) divisors → **scaled-divisor-slip**.
- Long-division scratch work on answer-shape-cue items; timing blowouts; mid-algorithm arithmetic slips → **always-long-divide**.

## Remediation pathways
- **value-is-factor**: re-derive the dichotomy from the identity — P(r) = 0 ⇒ factor; P(r) = anything else ⇒ that value is the remainder. Seal it with the numeric anchor: 17 = 5·3 + 2, and 5 is not a factor of 17. Route to [[zeros-roots-factors-identity]] if the factor-zero link itself is loose.
- **plug-the-printed-number / scaled-divisor-slip**: replace the template with the rule "evaluate at the divisor's zero," and require the one-line solve of divisor = 0 in writing for five mixed divisors — (x + a), (ax − b), (ax + b).
- **always-long-divide**: derive the theorem once from the identity (set x = r, watch the quotient term die) so the evaluation is trusted rather than magic; then time-contrast one item solved both ways.
- If the evaluation itself wobbles (signs, order of operations), revisit [[function-as-io-machine]].

## Mastery criteria
Answers remainder items by evaluation unprompted, including (ax − r) divisors; translates P(a) = k statements into remainder and factor claims correctly in both directions; reads remainders off tables and graphs; states and uses dividend = divisor × quotient + remainder to verify or reverse-engineer. Proof: clean runs on both designed kill shots — the answer-shape items and the P(a) = k inference items — with long-division scratch appearing only where a quotient is genuinely asked.

## Difficulty ladder
- **Medium**: remainder on division by (x − r) for a small polynomial; is-(x − a)-a-factor checks.
- **Medium-hard**: (ax − r) divisors (fractional evaluation points); remainders read from a table or graph; quotient + remainder/(x − r) answer-shape items.
- **Hard**: reversals — given the remainder, recover a dividend coefficient via the identity (composing [[coefficient-matching-identities]]); multi-condition items (P(2) = 0 and P(−1) = 5 together fixing factors and remainders); factor-face composites with [[zeros-roots-factors-identity]].

## Teaching notes
- **Struggling**: the numeric anchor first — 17 ÷ 5 leaves 2 because 17 = 5·3 + 2 — then the polynomial version as the same sentence. Only after that, the vanishing-term trick, on plain (x − r) divisors.
- **Average**: the answer-shape cue plus "evaluate at the divisor's zero" as the working rule; drill the P(a) = k ⇒ remainder-k inference against factor-claim distractors.
- **Advanced**: (ax − r) fluency; table and graph reads; identity-based reversals.
- **1500+**: the identity as a construction tool — building a polynomial to spec from stated remainders on two divisors — and the reflex that every remainder item is an evaluation item before the choices are even read; long division retained only as the derivation that explains WHY the theorem holds.
