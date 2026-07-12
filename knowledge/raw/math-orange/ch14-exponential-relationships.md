# Raw notes — Math source A, Ch. 14: Exponential Relationships

Source: math-orange chapter 14 (instruction + embedded drills + practice sets + answer key).
Scan gap: one spread (printed pp. 502–503, early part of the graphs section) missing; graph
content reconstructed from the surrounding pages and the chapter recap.

## Concepts taught (candidate nodes)

- `additive-vs-multiplicative-change` — The single root idea: a linear relationship adds the
  same amount per input step; an exponential relationship multiplies by the same factor per
  input step. Everything else in the chapter is bookkeeping on top of this distinction.
- `exponential-general-form` — y = a·b^x where a is the starting amount, b is the per-interval
  multiplier, and x counts intervals. The input becomes an exponent precisely because it counts
  how many times the multiplication has happened.
- `growth-factor-vs-growth-rate` — r% growth per interval ⇔ multiplier (1 + r/100); r% decay ⇔
  (1 − r/100). The factor and the rate are different numbers and the test aggressively exploits
  the gap (2.4% → 1.024, not 1.24).
- `exponential-direction` — b > 1 ⇒ increasing (growth); 0 < b < 1 ⇒ decreasing (decay).
  Dividing repeatedly by k is identical to multiplying by 1/k.
- `exponent-unit-conversion` — When the rate is stated per one time unit but the function's
  input is a different unit, the exponent must still be measured in rate-period units; convert
  the supplied variable with a proportion (e.g., years-rate with months input ⇒ exponent m/12;
  months input on a monthly rate re-expressed in years ⇒ exponent 12t). Works identically for
  non-standard periods ("every 4 years" ⇒ t/4; "every 18 minutes" as function of hours ⇒ 60h/18).
- `exponent-evaluates-to-one-check` — Sanity check: substitute one full rate period into the
  converted exponent; it should evaluate to 1. Explicitly flagged as not foolproof — the
  reciprocal (inverted) conversion also passes, so the check catches unit mismatches but not
  upside-down proportions.
- `reading-exponential-equations-as-sentences` — Fluency skill: (1.07)^(m/12) reads "grows 7%
  every 12 months"; (1.07)^(12t) reads "grows 7% twelve times per year." Coefficient inside the
  exponent changes the *cadence* of the growth statement, not the rate.
- `solving-exponentials-without-logs` — The test never requires logarithms. Two expert routes:
  (a) isolate the power, raise both sides to the reciprocal exponent; (b) build a small table
  and walk backwards by repeated division (inverse of the repeated multiplication).
- `exponential-graph-shape` — One tail hugs a horizontal asymptote, the other climbs/falls
  toward vertical; the curve is NOT symmetric (students who pattern-match to parabolas expect
  symmetry). y-intercept is the starting amount a; adding a constant after the power shifts the
  whole curve vertically. Sign of a flips the curve below the axis; b vs 1 (with exponent sign)
  decides which side levels off.
- `sat-compounding-scope` — Boundary claim: test interest problems keep the compounding period
  equal to the rate period, so the exam never demands the full compound-interest formula with
  n-per-year machinery; the plain a·b^x form suffices. (mark: unverified-claim — check bank.)

## Teaching philosophy observed

- Concrete-first derivation: a membership table with per-row deltas makes the "differences
  aren't constant, ratios are" observation *visible* before any formula appears; the exponent
  is then derived (input counts the factors), not asserted.
- Contrast teaching: linear and exponential are taught as a matched pair with identical
  scenarios differing only in add-2 vs double; the recap enshrines the contrast as the
  chapter's one invariant.
- Interpretation as a first-class skill: multiple drills ask only "say what this equation
  means" with no computation — building the read-aloud fluency that later powers trap-dodging.
- Immediate micro-practice (short drills) after each concept; multi-step numbered solutions
  that always begin with an elimination move; a "Notes" block after solutions carrying the
  meta-lesson (shortcuts, why precision wasn't needed).
- Verification habits are taught alongside methods (the exponent=1 check), including honest
  disclosure of the check's blind spot.

## Expert reasoning patterns (generalized)

- **Classify before computing.** First decision on any change-over-time item: is the described
  change a fixed amount per step (linear) or a fixed percent/multiple per step (exponential)?
  Wording cues: "increases by N each ..." ⇒ linear; "increases by N% each ..." / "doubles/halves
  every ..." ⇒ exponential. This alone eliminates half the choices on model-matching items.
- **Direction next.** Growing or shrinking decides b > 1 vs b < 1, killing another choice or two
  before any arithmetic.
- **Rate → factor conversion is a ritual.** Percent r becomes 1 ± r/100 mechanically; experts
  never carry the raw percent into the base.
- **Exponent units by proportion, verified.** Set (rate-period variable)/(supplied variable) =
  known unit ratio, solve for the rate-period variable, substitute into the exponent; then run
  the evaluates-to-1 check on one full period — and additionally reason directionally ("finer
  time slices ⇒ exponent shrinks per unit") to catch the reciprocal error the check misses.
- **Backwards tables beat algebra for small n.** "Quadrupled yearly, reached V after 3 years" —
  divide V by the factor three times rather than solving a·4³ = V formally.
- **Reciprocal powers, not logs.** x⁵ = k ⇒ raise both sides to 1/5. Recognizing this pattern
  removes the panic response of students who think logs are required.
- **Graph-shape reasoning for decay:** halving removes a big amount early and ever-smaller
  amounts later ⇒ steep-then-flattening curve; a straight decline or a slow-then-fast drop are
  both wrong shapes. Experts narrate the first two or three steps of the process to pick the
  curve rather than memorizing orientations.
- **Desmos leverage (our product has it built in):** type the two candidate models against the
  described values or the supplied table; the wrong family visibly misses points. For
  unit-conversion answers, define both candidate functions and evaluate each at one full rate
  period — the correct one reproduces exactly one growth step. For interest-comparison graph
  items, plot both compounding variants and compare gaps. This replaces most of the source's
  "plug in a few test values" hand-computation.

## Misconceptions targeted (and why students hold them)

- **percent-as-addition** — "Grows 2.4% per year" rendered as +2.4 (or +0.024·t) per year,
  yielding a linear model. Forms because school arithmetic drills percent-of-a-fixed-number;
  students don't internalize that the base of the percent moves each period. Trap answers are
  linear equations wearing percent-derived coefficients.
- **factor-decimal-slip** — 2.4% → 1.24 (or 24% → 1.024). Forms from weak percent-to-decimal
  conversion under pressure; the test always offers the misplaced-decimal twin as a distractor.
- **decay-keeps-the-loss** — "Decreases 5% per period" → multiplier 0.05 instead of 0.95.
  Students latch onto the named number; "what remains" requires the complement, which is an
  extra mental step the trap removes.
- **inverted-unit-conversion** — Converting years→months by multiplying when they should divide
  (12t vs t/12 in the exponent). Forms because "12 months per year" suggests ×12 regardless of
  direction; dangerous because the standard substitution check cannot expose it.
- **rate-means-slope** — Any phrase with "rate" triggers a linear model, because rate was
  taught as slope. "Constant percent rate" is exponential; students need the wording contrast
  made explicit.
- **logs-required-panic** — Belief that an unknown exponent or a variable-to-a-power equation
  needs logarithms; produces skips/guesses. Fixed by the reciprocal-power identity and the
  backwards-table method.
- **exponential-symmetry** — Expecting the graph to mirror like a parabola, or both ends to
  blow up. Forms from parabola over-exposure; produces wrong graph picks where the flat tail
  is on the wrong side.
- **initial-value-misplacement** — Starting amount wandering into the base or the exponent
  (e.g., a^x with the rate as a, or start^(factor·t)). Forms because students memorize "the
  numbers go in the formula" without slot meanings.
- **any-withdrawal-decays-exponentially** — Not distinguishing percent-of-current-balance
  (exponential) from percent-of-initial or fixed-amount withdrawals (both linear). Forms
  because all three "feel like repeated decrease"; the discriminating question is *what the
  percent is taken of* each period.

## SAT patterns claimed (unverified-claim; check against official material + our bank)

- Model-identification items (pick the equation for a percent story) are the dominant shape;
  answer sets pair the linear twins with the exponential twins and the factor-decimal twins.
- Exponent-unit-conversion items appear in both directions (coarser and finer units) and with
  non-standard periods (multi-year, minutes).
- "Interpret the parameter" items (what does a mean, what does 1.31 mean) recur; correct
  answers are the initial-value / percent-per-unit readings.
- Solving items never need logs; worst case is reciprocal-power isolation.
- Graph items test shape family + direction + which-tail-levels, occasionally with a vertical
  shift; f(0) from a graph is asked directly.
- Table-based items ask linear vs nonlinear (constant differences vs constant ratios) and
  fitting a·b^t to two table rows.
- Compound-interest comparisons (monthly vs annually) appear as graph-reading, not formula
  computation.

## Prerequisite edges implied

- percent-to-decimal fluency and percent-change (the immediately preceding chapter) → this one.
- linear-equation modeling (slope as per-step add) — needed as the contrast class.
- exponent rules: zero exponent, fractional/negative exponents, power-of-a-power (for
  reciprocal-power solving and (b^(1/k))^t rewrites).
- proportions/unit ratios → exponent-unit-conversion.
- function notation and evaluation.

## Difficulty escalation observed

Easy: classify growth vs decay; write f = start·(factor)^t from a clean percent statement.
Medium: decimal-precision factors (0.25% etc.); interpret equations as sentences; f(0)/intercept
from graph; linear-vs-exponential from a table. Hard: exponent-unit conversion (especially
inverted-direction bait and non-standard periods), parameter interpretation with unit subtleties,
withdrawal-plan discrimination, multi-concept graph comparisons (compounding curves, average
rates over intervals), and items composing exponential models with linear ones (intersection
bounds). The hard end composes with: proportions, function-graph reading, and rate-of-change
comparison nodes.

## What this source does well / poorly

Well: the additive-vs-multiplicative derivation from a delta-annotated table; rigorous and
honest treatment of exponent unit conversion (proportion + verification + the check's blind
spot); the "read equations as sentences" fluency drills; no-logs reassurance with the
reciprocal-power alternative; solutions model elimination-first expert order.
Poorly: very text-dense; the unit-conversion exposition is long-winded where one worked
contrast pair would do; the graph-orientation taxonomy (sign cases of a, b, exponent) is more
than the DSAT needs; never names the second-difference-vs-ratio table test even though its own
problems require it; no calculator/Desmos workflow despite recommending "plug test values" —
our version should lead with Desmos; whimsical contexts occasionally obscure the math register
of real items.
