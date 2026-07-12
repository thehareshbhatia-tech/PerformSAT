---
id: growth-factor-vs-rate
section: math
domain: advanced-math
skill: exponential-model-anatomy, build-exponential-model
difficulty_span: [easy, hard]
prereqs: [percent-as-multiplier]
unlocks: [exponential-model-anatomy, linear-vs-exponential-classification]
related: [reverse-percent-recovery]
---

# Growth factor vs. growth rate: 1.024 is not 1.24

## What it is
A percent growth RATE (r% per period) and the growth FACTOR that implements it
(1 + r/100) are different numbers, and every exponential model uses the factor, not
the rate. 2.4% growth per year → factor 1.024. 5% decay → factor 0.95, because the
base of an exponential is always the fraction KEPT each period, never the fraction
lost. The conversion is mechanical — percent r becomes 1 ± r/100 — but the exam
aggressively exploits the gap between the two numbers.

## Why it exists / why the SAT tests it
Every model-construction and parameter-interpretation exponential item runs through
this conversion, and the distractor architecture is standardized: for a stated rate
of 2.4%, the choice set offers bases 1.024 (correct), 1.24 (misplaced decimal), 2.4
(raw rate), and often 0.976 or 0.024 (direction/complement errors). Interpretation
items reverse the direction: given base 0.92, the choices offer "loses 0.92 units,"
"loses 0.92%," "loses 92%," and "keeps 92% / loses 8%" — amount, percent, and factor
readings of the same number. The skill is pure bidirectional translation; no
arithmetic hides the gap.

## Mental model
**The base of an exponential is a percent-multiplier wearing an exponent.** This is
[[percent-as-multiplier]] applied per period: rate → factor by 1 ± r/100; factor →
rate by reading the distance from 1 (1.024 is +2.4%; 0.92 keeps 92%, loses 8%).
Calibration anchors, same as the percent node: +100%/period → ×2 (doubling);
−50%/period → ×0.5 (halving); +0.4% → ×1.004. A base can never be negative, and a
decay base lives strictly between 0 and 1 — instant plausibility bounds.

## Expert reasoning process
1. On model-building: convert the stated rate to its factor as a ritual, before
   looking at choices — never carry a raw percent into a base.
2. On decay: translate the base as "fraction kept." 0.6 means 60% remains — a 40%
   loss, NOT "loses 60%."
3. On interpretation: read the base's distance from 1 and its side of 1; direction
   (growth/decay) comes from b > 1 vs b < 1 and kills half the choices immediately.
4. Watch the decimal with sub-10% and fractional rates: 2.4% → 1.024; 0.25% →
   1.0025. Slow down exactly there — that's where the trap lives.
5. Percent-vs-times discipline carries over: "grew by 160%" → ×2.6, not ×1.6.
6. Bounds check: negative or >1 "decay" base, or a base like 2.4 for a 2.4% rate,
   is structurally absurd — a 2.4 base means +140% per period, visibly wrong for a
   modest-growth story.

## Misconceptions
- **factor-decimal-slip** — 2.4% → 1.24 (or 24% → 1.024). Weak percent-to-decimal
  conversion under pressure; the misplaced-decimal twin is ALWAYS offered as a
  distractor. Same root slip as the sub-1% multiplier error in
  [[percent-as-multiplier]], now load-bearing inside a model.
- **raw-rate-as-base** — writing b = 2.4 or b = 0.024 because the stated number is
  visually available and the slot needs a number. Forms from positional memorization
  of y = a·bᵗ without slot meanings.
- **decay-keeps-the-loss** — "decreases 5% per period" → base 0.05 instead of 0.95.
  The student latches onto the named number; "what remains" requires the complement,
  an extra mental step the trap deletes. Identical structure to the removed-vs-
  remaining error in [[percent-as-multiplier]].
- **base-as-amount** — reading b = 0.92 as "loses 0.92 thousand per year" — a linear
  (amount) schema imposed on a multiplicative object, because number-equals-amount
  schemas are older and stronger than factor schemas.
- **percent-vs-times-blur-in-bases** — "grew by 160%" → ×1.6; "tripled" → base 2.
  The excess-vs-multiple confusion recurring inside exponents.

## Diagnostic indicators
- Picks the misplaced-decimal base (1.24 for 2.4%): factor-decimal-slip — the most
  common single error; concentrate diagnosis on sub-10% rate items.
- Picks the raw rate or its decimal (2.4 or 0.024) as the base: slot-meaning absent;
  expect co-occurring coefficient/base swaps in [[exponential-model-anatomy]].
- On interpretation items with base 0.92, picks "decreases 92%" (decay-keeps-the-
  loss reading in reverse) or "decreases by 0.92 [units]" (base-as-amount).
- Verbal probe: ask "what does the 1.024 DO each year?" — a masterful answer says
  "multiplies, adding 2.4%"; a shaky one says "it's the growth" with no operation.
- Fast-but-wrong on drill-style conversion; the error is automatized, so remediation
  must overwrite a habit, not fill a gap.

## Remediation pathways
- **factor-decimal-slip**: micro-drill rate→factor both directions with the trap
  cases isolated (2.4%, 0.25%, 24%, 160%); require writing the intermediate decimal
  (2.4% = 0.024 → 1.024) until the slip disappears, then allow compression.
- **raw-rate-as-base / base-as-amount**: re-derive the model from one year of
  growth: value after one period = value × (1 + r/100); the factor's identity as
  "the thing that multiplies" is rebuilt. Revisit [[percent-as-multiplier]] if the
  multiplier itself is shaky.
- **decay-keeps-the-loss**: the remainder reframe — "5% leaves, 95% stays; the base
  is the stayers." One contrast pair (base for 5% loss vs base for 95% loss) locks
  it.
- **percent-vs-times-blur**: same number-line contrast as the percent node, now
  applied to bases ("tripled" and "+200%" land on the same base 3).

## Mastery criteria
Student converts rate ↔ factor bidirectionally, including decay (base = kept
fraction), uncommon rates (160%, 0.25%), and interprets a given base in one clause
("×0.92/year = keeps 92% = loses 8% yearly"). Proof: a clean 8-item conversion
drill spanning the trap cases plus one interpretation item with the
amount/percent/factor distractor triple.

## Difficulty ladder
- **easy**: convert a clean rate (5%, 20%) to its factor; classify growth vs decay
  from the base.
- **medium**: decimal-precision rates (2.4%, 0.25%); decay-remainder readings;
  back-translation (base 1.31 → "grows 31% per period").
- **hard**: rates over 100%; interpretation with unit subtleties (base per DECADE
  read as per year); conversion composed with time-unit rescaling — a factor for a
  different period requires b^(1/k) or b^k reasoning, handing off to
  [[exponent-time-unit-conversion]] and [[exponential-model-anatomy]].

## Teaching notes
- **Struggling**: one year at a time — 1000 grows 5%: what's the new value? What
  did you multiply by? Do it three times; the factor emerges as "the thing I keep
  multiplying by." Never start from the formula.
- **Average**: bidirectional drill with the trap cases; then interpretation items
  where they must produce all three WRONG readings of a base (amount, percent,
  factor) and explain why only one survives — building the distractor taxonomy into
  the student.
- **Advanced**: uncommon rates, per-period vs per-unit mismatches, and the
  b^(1/k) rescale preview.
- **1500+**: Desmos verification habit — define f(t) = a·bᵗ with the candidate base
  and evaluate one period: f(1)/f(0) must reproduce exactly one growth step. Reason
  first, one-line check second; the wrong base fails visibly.
