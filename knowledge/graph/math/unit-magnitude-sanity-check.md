---
id: unit-magnitude-sanity-check
section: math
domain: problem-solving-data-analysis
skill: distance-rate-time
difficulty_span: [easy, hard]
prereqs: [unit-cancellation-chain]
unlocks: []
related: [proportion-setup-template, exponent-time-unit-conversion, percent-as-multiplier]
---

# The magnitude feel-check: more of a smaller unit

## What it is
A two-second audit run after (or before) any conversion or rate computation: measure
the same thing in a smaller unit and the number must get BIGGER; in a bigger unit,
smaller. If 3 hours became 0.05 minutes, no algebra review is needed — the setup is
inverted. This codifies a rule expert solvers apply implicitly but that instruction
almost never states outright: direction of magnitude is predictable before any
arithmetic happens, so it can be used as a free error detector.

## Why it exists / why the SAT tests it
The SAT's conversion distractors are built from inverted factors, and answer choices
on multi-hop items are spread across orders of magnitude — meaning almost every wrong
chain lands on a choice that a magnitude expectation would have vetoed. The exam
doesn't test the check directly; it rewards students who have it and punishes those
who don't. Crucially, this is the ONLY defense that catches the inverted-conversion
error class, because the standard substitution checks pass it (an upside-down
proportion still "checks out" symbolically — the reciprocal conversion passes the
naive feel-check too, which is why the rule must be about unit SIZE, not vibes).

## Mental model
**Smaller ruler, bigger count.** Chopping a quantity into finer pieces means more
pieces; gathering it into coarser pieces means fewer. Before computing, commit to a
direction: "the answer in minutes must be ~60× the hours number." Anchor examples
make it instant: a mile a minute is 60 mph; your height in centimeters is a bigger
number than in feet. The check has two levels — direction (bigger or smaller?) and
rough scale (by about what factor?) — and the scale level catches errors the
direction level misses.

## Expert reasoning process
1. Before converting, state the expected direction: target unit smaller → number
   grows; larger → shrinks.
2. Estimate the rough factor (about ×60, about ÷12) from the equivalence itself.
3. Compute via the [[unit-cancellation-chain]].
4. Compare: does the result agree in direction AND rough scale? A result off by the
   factor squared is the inverted-factor signature.
5. In exponent contexts ([[exponent-time-unit-conversion]]), the same reasoning runs
   as "finer time slices ⇒ the exponent's per-unit coefficient shrinks" — direction
   logic catches the reciprocal error that the substitute-one-period check cannot.
6. On multiple choice, run the check BEFORE computing: it frequently eliminates two
   choices outright (the order-of-magnitude outliers).

## Misconceptions
- **feel-check-absent** — student has no magnitude expectation at all; any output is
  accepted because conversions were learned as symbol-pushing with no quantity
  meaning. This is less a wrong belief than a missing habit; it forms because school
  grading rewarded procedures, never estimates.
- **inverted-feel** — student expects "converting to a bigger unit makes the number
  bigger" because bigger units sound like more. Produces confident acceptance of
  reciprocal errors. Forms from attaching size to the unit-word instead of to the
  count of pieces.
- **direction-only-checking** — student checks direction but not rough scale, so an
  error of ×3600 vs ×60 (double-converted time) survives. The check was adopted as a
  ritual without the estimation layer.
- **check-as-afterthought** — student computes first, and by then is anchored on
  their own output, so the check silently confirms whatever they got. Confirmation
  bias defeats a check applied post hoc without a pre-committed expectation.

## Diagnostic indicators
- Accepts answers that are reciprocal-chain results (feel-check-absent): the wrong
  choice differs from the key by k² for a conversion factor k, and the student
  expresses no discomfort when asked "does that size make sense?"
- Verbally predicts the wrong direction when asked before computing (inverted-feel).
- Catches ÷/× swaps but misses double-applications (direction-only): errors of an
  even power of the factor survive their review.
- Scratch work shows no pre-computation estimate; when asked to re-check, re-runs
  the same algebra instead of estimating (check-as-afterthought).

## Remediation pathways
- **feel-check-absent**: install via anchor pairs the student already owns (height
  in cm vs feet; a movie in minutes vs hours). Then make direction-stating a
  mandatory spoken step for five consecutive items.
- **inverted-feel**: the ruler image — measure one pencil in cm then in m; the count
  of pieces vs the size of pieces distinction lands physically. Revisit
  [[unit-cancellation-chain]] if the confusion is really about factor orientation.
- **direction-only-checking**: add the rough-factor layer: "about how many times
  bigger?" One item where direction passes but scale fails (a double-conversion
  trap) demonstrates why direction alone is insufficient.
- **check-as-afterthought**: enforce ordering — expectation BEFORE computation,
  written down (even just "↑ ~60×"). The pre-commitment is what defeats anchoring.

## Mastery criteria
Student states direction and rough factor before computing on every conversion item,
unprompted; rejects at least one inverted distractor per session by magnitude alone;
transfers the reasoning to exponent-unit items ("t/12 vs 12t — which makes the
exponent count years?"). Proof: verbalized pre-checks observed across a mixed set,
plus zero reciprocal-error picks over two consecutive sessions.

## Difficulty ladder
- **easy**: single conversions where the check is the whole problem (eliminate the
  two order-of-magnitude-wrong choices, pick between the remaining two).
- **medium**: multi-hop chains where the composite factor must be roughly estimated;
  rate-time items with mismatched units.
- **hard**: exponent-unit conversion (12t vs t/12) where the check must run on an
  abstract coefficient rather than a concrete count — composes with
  [[exponent-time-unit-conversion]]; compound rates where numerator and denominator
  pull magnitude in opposite directions and the net direction must be reasoned.

## Teaching notes
- **Struggling**: keep it concrete and physical — pieces of a chocolate bar, minutes
  in a class period. The goal is one owned anchor example they can always rebuild
  from. Do not present it as an extra step; present it as the way to know you're
  right without asking anyone.
- **Average**: train it as a pre-computation habit with the written arrow-and-factor
  shorthand ("↑ ~60×"); show one worked item where the check catches a real inverted
  chain.
- **Advanced**: the abstract transfer — run the check on symbolic rates (does 20a/d
  grow when d shrinks? should it?) and on exponent coefficients.
- **1500+**: weaponize it for speed: on multiple choice, magnitude elimination
  BEFORE any computation regularly cuts four choices to two; combined with structure
  matching, some conversion items are solvable with zero arithmetic.
