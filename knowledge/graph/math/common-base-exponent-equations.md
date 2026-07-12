---
id: common-base-exponent-equations
section: math
domain: advanced-math
skill: exponential-equation-with-common-base
difficulty_span: [medium, hard]
prereqs: [exponent-rules-factor-counting, negative-fractional-exponents]
unlocks: []
related: [solve-for-the-asked-quantity]
---

# Exponent equations — unify the base, equate the counts

## What it is
When an equation puts powers on both sides, the play is to rewrite every term over one shared base; once each side is a single power of that base, the bases cancel conceptually and the exponents form an ordinary (usually linear) equation. A companion move solves for powers directly: raise both sides of an equation to a chosen power so the variable's exponent multiplies to the target — either 1 (to solve) or the asked-for exponent directly.

## Why it exists / why the SAT tests it
This family tests whether students see exponential structure or panic at it. Recurring shapes (unverified-claim, per both study sources — verify against bank): find the unknown constant in an exponent making two power-towers equal; a linear equation given up front whose left side reappears as an exponent after base-unification; word-form power relations ("the square of a equals the cube of b") translated to a² = b³; grid-ins exploiting multiple (base, exponent) factorizations of numbers like 27; and solve-for-a-power items (x⁵ = 2, find x²⁵). Mostly medium-hard band.

## Mental model
**Same alphabet, then compare spelling.** Two exponential expressions can only be compared letter-by-letter once they're written in the same alphabet — a shared base. 4 and 8 look unrelated until both are powers of 2; then the whole problem lives in the exponents. Second half: **aim the raise** — choose the power to raise both sides by working *backward from the exponent you want*, since raising-to-a-power multiplies the exponent you have.

## Expert reasoning process
1. **Read the base landscape first** — every base in the stem AND choices. Different numeric bases sharing a prime (4, 8, 16, 32 → 2; 9, 27 → 3) → base unification is the first move, before any exponent algebra.
2. Rewrite each term over the shared base; the exponents pick up multipliers (8^x = 2^(3x)).
3. Engineer a single power on each side, then equate exponents. Legality check: the base must not be 0, 1, or −1 (stems usually add positivity constraints to remove the exceptions — their presence is a hint you're on this path).
4. Asked for a power of x rather than x itself (x⁵ = 2, find x²⁵)? Don't solve for x — raise both sides to the 5th. Aim the raise at the target exponent. (Multiplying both sides by more powers of x ADDS exponents — legal but a dead end.)
5. A given linear expression (ax + by) that seems unused? Expect it to materialize as an exponent after unification; equate and substitute.
6. Desmos route: numeric answers make these fully checkable — plot both sides as functions and read the intersection, or for find-x²⁵ items compute x = 2^(1/5) and raise it numerically. Legitimate full alternative when algebra stalls; slower when the answer is an expression.

## Misconceptions
- **base-blindness** — treating 4^x and 2^(x+3) as incomparable and attempting logarithm-free brute force or guessing. Forms because perfect-power recognition (25 = 5², 27 = 3³) was never drilled as an instinct; the student lacks the entry move, not the algebra.
- **equate-exponents-unconditionally** — equating exponents when bases differ, or when the base could be 0/1/−1. Forms because the principle is memorized without its precondition ("same base" + base not degenerate).
- **raise-vs-multiply confusion** — trying to get from x⁵ to x²⁵ by multiplying both sides by x²⁰ (adds exponents; introduces an unknown factor) instead of raising to the 5th (multiplies exponents). Forms because both feel like "making the exponent bigger."
- **exponent-arithmetic-slip** — after unification, mishandling the multiplier: 8^(x+1) → 2^(3x+1) instead of 2^(3x+3). Forms because the base swap is applied to the base but the exponent distribution is skipped — a resurfacing of exponent-over-addition discipline.

## Diagnostic indicators
- **base-blindness**: long timing, then guess or blank; when explaining, never mentions that 8 is 2³.
- **equate-exponents-unconditionally**: correct on well-posed items but asserts "the exponents are always equal" when probed; misses items where a constraint matters.
- **raise-vs-multiply confusion**: answers consistent with x-solved-then-mangled, or shows both-sides-times-x work.
- **exponent-arithmetic-slip**: picks the distractor whose exponent is off by exactly the undistributed multiplier (3x+1 vs 3x+3 archetype).

## Remediation pathways
- **base-blindness** → drill perfect-power recognition as a standalone reflex (a 2-minute table: powers of 2, 3, 5 up to ~250); then the two-step routine: spot shared prime, rewrite, compare.
- **equate-exponents-unconditionally** → counterexample: 1² = 1⁵ but 2 ≠ 5. Attach the precondition to the rule as one sentence.
- **raise-vs-multiply confusion** → contrast pair: (x⁵)⁵ vs x⁵·x⁵ expanded by counting factors — revisit [[exponent-rules-factor-counting]] if the distinction doesn't hold.
- **exponent-arithmetic-slip** → force parentheses: 8^(x+1) = (2³)^(x+1) = 2^(3(x+1)) written with the parentheses intact before distributing.

## Mastery criteria
Given any two-sided exponential equation with unifiable bases, reaches the exponent equation in ≤ 3 written lines; on find-a-power items, states the target exponent and the raise before computing. Proof: correct on hard-band items pairing base unification with a fed-in linear expression, without dead-end work.

## Difficulty ladder
Easy–medium: single unification (4^x = 8). Medium: unknown constant in the exponent; fractional-exponent bases (√2 as 2^(1/2)). Hard: linked linear equation reappearing as an exponent; word-form power relations plus a second exponential condition; exponential-ratio items where a ratio of outputs pins the base via a small integer power; find-x^n raises. Composes with [[solve-for-the-asked-quantity]] — the hard versions change what's asked, not the machinery.

## Teaching notes
- **Struggling**: perfect-power recognition first, in isolation. Then only two-term equations with one rewrite. Keep exponents linear.
- **Average**: the two-move routine (unify, equate) plus the aim-the-raise idea taught through x⁵ = 2 → x²⁵ as a worked contrast with the dead-end multiply route.
- **Advanced**: fed-in linear expressions; multiple factorizations on grid-ins (27 = 27¹ = 3³ = 9^1.5); precondition fluency (why x > 0 keeps appearing in these stems).
- **1500+**: full composition items and speed. Teach the Desmos intersection route as the fallback with a cost note: for expression answers it's unavailable, and for clean unifications algebra wins on time — the skill is knowing within five seconds which path this item rewards.
