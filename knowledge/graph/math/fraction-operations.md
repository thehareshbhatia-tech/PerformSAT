---
id: fraction-operations
section: math
domain: algebra
skill: fraction-fluency, foundations
difficulty_span: [easy, medium]
prereqs: []
unlocks: [linear-equation-balance-peeling, slope-as-rate-of-change, cancellation-legality]
related: [order-of-operations, percent-as-multiplier]
---

# Fraction fluency: the arithmetic the whole test assumes

## What it is
The bedrock skill the digital SAT never tests directly but relies on everywhere: adding fractions over a common denominator, multiplying across, dividing by multiplying by the reciprocal, and — most load-bearing — clearing fractions from an equation by multiplying every term by a common denominator. Slope is a fraction, rate is a fraction, probability is a fraction, and a shaky grasp here surfaces as errors that look like "careless mistakes" but are really a missing foundation. This node exists so weakness here is diagnosed as its own cause rather than misattributed to the topic on top of it.

## Why it exists / why the SAT tests it
It is a hidden prerequisite. A student can understand slope conceptually and still miss slope items because they mishandle the rise-over-run fraction; can set up a rational equation correctly and still fail because they added the fractions wrong. Naming fraction fluency as a distinct node lets the diagnostic engine route "conceptually fine but arithmetically failing" students to the real deficit instead of re-teaching the surface topic.

## Mental model
**A fraction is a single number — a division waiting to happen — and a division is multiplication by the reciprocal.** Common denominators only exist so two fractions can be counted in the same units before adding. Clearing fractions from an equation is legal because multiplying both sides by the same nonzero amount preserves equality (see [[linear-equation-balance-peeling]]).

## Expert reasoning process
1. To add or subtract: rewrite both over a common denominator, then combine numerators only — never denominators.
2. To multiply: multiply numerators and denominators straight across; cancel common factors first to keep numbers small.
3. To divide: multiply by the reciprocal of the divisor.
4. To clear fractions from an equation: multiply EVERY term (both sides) by a common denominator; done correctly, no fractions remain.
5. **Desmos decision:** Desmos evaluates any concrete fraction arithmetic instantly and exactly — use it to check, not to avoid understanding, since symbolic/literal work (a fraction with variables) still requires the by-hand rules.

## Misconceptions
- **add-across-denominators** — Computing a/b + c/d as (a+c)/(b+d). Forms by false analogy to multiplication, where straight-across IS correct; addition's need for a common denominator feels arbitrary without the "same units" idea. Produces wrong sums that are often close enough to a distractor.
- **partial-term-clearing** — When clearing fractions, multiplying only the fraction terms and forgetting the whole-number or other-side terms. Forms from treating "get rid of the fraction" as a local move rather than an equation-wide operation; breaks the equality silently.
- **reciprocal-only-one-part** — Dividing by a fraction by flipping the wrong fraction, or flipping and then also dividing. Forms from a half-remembered rule; the fix is the meaning ("how many d/c fit into a/b").
- **cancel-terms-not-factors** — Cancelling across a sum, e.g. striking the x in (x+2)/x. Forms from over-generalizing legal factor cancellation; only common FACTORS of the whole numerator and denominator cancel (see [[cancellation-legality]]).

## Diagnostic indicators
- **add-across-denominators**: fraction-addition results that match the (a+c)/(b+d) distractor; errors concentrated on sum/difference, not product.
- **partial-term-clearing**: rational-equation work where one term still has a denominator or a constant went unmultiplied; answer off by a predictable factor.
- **cancel-terms-not-factors**: simplifications that illegally strike a shared symbol across a sum.

## Remediation pathways
- add-across-denominators: re-teach common denominators as "same-size pieces" with a concrete pie/number-line image; contrast explicitly with multiplication's legal straight-across.
- partial-term-clearing: require writing the multiplier against every single term as an explicit step before simplifying.
- cancel errors: route to [[cancellation-legality]] — factor first, then cancel; never cancel across + or −.

## Mastery criteria
The student adds/subtracts/multiplies/divides fractions reliably, clears fractions from an equation by multiplying every term, and never cancels across a sum. Proof: clean execution embedded inside slope, rate, and rational-equation items — the skill is invisible because it stopped generating errors.

## Difficulty ladder
- **Easy**: numeric fraction arithmetic with small denominators.
- **Medium**: clearing fractions from a linear or rational equation; fractions with variable numerators; nested fractions (a fraction over a fraction).

## Teaching notes
- **Struggling**: this is often THE hidden blocker — diagnose and remediate it before any algebra topic that sits on it, or the topic work won't stick.
- **Average**: emphasize clear-every-term and factor-before-cancel as the two highest-yield habits.
- **Advanced / 1500+**: fraction fluency is automatic; the value is speed — cancelling before multiplying to keep numbers small, and recognizing when a fraction is better left uncomputed for a later cancellation.
