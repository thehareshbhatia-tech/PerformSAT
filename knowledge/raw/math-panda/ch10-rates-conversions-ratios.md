# Raw notes — College Panda ch. 10: Rates, Conversions & Ratios
Source: math-panda (Digital SAT ed.), pages p0059–p0063 scans. Domain: Problem-Solving & Data Analysis.
Extraction is understanding-only; no source expression retained.

## Concepts taught

- `unit-conversion-chain` — Any rate or conversion task can be solved by multiplying the starting
  quantity by a sequence of fractions, each equal to 1 in disguise (a known equivalence written
  as new-unit over old-unit), until only the target unit survives.
- `unit-cancellation-check` — The self-verification move: written units must cancel diagonally
  through the chain; the unit left standing at the end must be the unit the question asks for.
  If it isn't, a factor is inverted or missing.
- `rate-as-two-way-multiplier` — A rate ("k widgets per hour") is a conversion factor usable in
  either orientation; choosing which orientation comes from asking which unit must die.
- `squared-unit-conversion` — Converting an area between unit systems requires the linear factor
  applied twice (cubed units three times), because the equivalence is between lengths, not areas.
- `compound-rate-conversion` — Speeds and densities carry TWO units; each must be independently
  converted, and the chain must be arranged so the target compound unit (e.g., length per time)
  remains.
- `average-rate-of-change-arithmetic` — Average rate over an interval = (change in quantity) /
  (elapsed amount), computed from two snapshots; no formula memorization, just deltas.
- `ratio-as-fraction` — A part-to-part ratio a:b is interchangeable with the fraction a/b;
  equivalent ratios are equivalent fractions; proportions between ratios solve like fraction
  equations via cross-manipulation.
- `part-to-part-vs-part-to-whole` — a:b between two parts implies each part's share of the whole
  is a/(a+b) and b/(a+b) — but only if the two parts exhaust the whole. The conversion between
  the two readings is the core skill.
- `ratio-scaling` — Given a real count for one term of a ratio, the other term follows by
  multiplying the count by the ratio fraction oriented so units cancel (ratio and conversion
  factor are the same machine).
- `ratio-bridging` (three-quantity ratio linking) — When two ratios share a common quantity,
  rescale one ratio so the shared term's number matches in both, then read off a combined
  three-term ratio and use part-of-whole reasoning on it.

## Teaching philosophy observed

- Dual-solution pedagogy: nearly every early worked case is solved twice — once by common-sense
  arithmetic, once by the explicit factor chain — then the author advocates the systematic chain
  as the default because it externalizes bookkeeping and prevents silly errors on harder items.
  The implicit claim: intuition and the chain are the same reasoning, one just writes it down.
- Verification is built into the method, not appended: unit cancellation is presented as
  simultaneously the solving procedure and the correctness check.
- Ratios are taught as a special case of the same multiplier idea, so the chapter is really one
  concept (multiply by disguised 1s) wearing three costumes.
- Very example-dense, theory-light; concepts emerge from a difficulty-graded example run rather
  than definitions.

## Expert reasoning patterns (generalized)

1. Identify the anchor: either the given stock (a budget, a distance, a count) or the demanded
   target. The chain starts from the anchor.
2. List every equivalence available (given in the stem, e.g. odd units defined in parentheses,
   or standard like time units) — each is a candidate factor.
3. Orient each factor so the previous unit cancels; never decide orientation by memory, decide
   it by what must cancel.
4. For compound units, treat numerator-unit and denominator-unit conversions as independent
   links in the same chain.
5. For squared/cubed units, repeat the linear factor per dimension.
6. Read the surviving unit as the answer's unit; mismatch = bug.
7. For ratio bridging: scale ratios to align the shared quantity before comparing or combining;
   for share-of-whole, sum the parts first.
8. Sanity-scale: expect the answer's magnitude direction (more smaller units, fewer bigger
   units) before computing; catches inverted factors that survive careless unit bookkeeping.
   (Implied by the answer-choice spreads that differ by orders of magnitude.)

## Misconceptions targeted (and why students hold them)

- **inverted-conversion-factor** — Students memorize "multiply by the conversion number" from
  grade school where conversions were one-directional; they multiply when they should divide.
  Formed because early schooling drills number-moves, not unit-moves. Distractor sets include
  the reciprocal result routinely.
- **single-application-on-squared-units** — Students convert square feet to square meters using
  the length factor once. The belief comes from treating "the conversion factor between feet and
  meters" as attached to the unit-word rather than to the dimension. Answer choices bracket the
  correct value with the once-applied and thrice-applied variants.
- **converting-only-one-unit-of-a-compound-rate** — In speed conversions, students convert
  length and forget time (or vice versa), because the rate is stored mentally as one number, not
  a fraction of two units.
- **part-to-part-read-as-part-to-whole** — Given cars:trucks = a:b, students compute a/b of all
  vehicles instead of a/(a+b). Formed because the ratio's surface shape (two numbers) matches
  the fraction shape they need, so they skip constructing the whole.
- **arithmetic-mean-of-speeds** — For a two-leg trip, students average the two speeds. Feels
  right because "average" triggers the add-and-halve schema; actually average speed = total
  distance / total time (time-weighted). Exercise distractors place the arithmetic mean
  prominently.
- **ratio-broken-by-addition** — When quantities are added to a mixture, students update one
  term of the ratio and not the other, or assume the old ratio persists. Root cause: ratios
  taught as static labels rather than as constraints that must be re-satisfied after any change.
- **rate-target-confusion in variable expressions** — With symbolic rates (a items per d
  dollars), students can't decide between 20a/d, 20d/a, etc., because with letters the
  unit-cancellation habit is abandoned. The fix taught: run the chain on letters exactly as on
  numbers.

## SAT patterns claimed (mark unverified until checked vs bank/official)

- unverified-claim: Stems define exotic/unfamiliar units inline (including invented or archaic
  ones) precisely to force the mechanical chain — no prior knowledge is ever required.
- unverified-claim: Multi-hop conversion items (2–3 equivalences chained) appear with answer
  choices spread across orders of magnitude, each distractor = one specific chain error.
- unverified-claim: "Which expression represents…" items with symbolic rates test factor
  orientation with all four arrangement variants as choices.
- unverified-claim: Two-leg average-speed items to the nearest hundredth (harmonic-vs-arithmetic
  trap) appear on the exam.
- unverified-claim: Three-quantity ratio-bridging items (two ratios sharing a middle term) are a
  recurring shape.
- unverified-claim: Constant-rate linear extrapolation between two timestamped snapshots
  (find rate as delta/delta, then project) is a common PSDA stem.
- unverified-claim: Scale-model items (model:actual as a ratio, both directions asked) recur.

## Prerequisite edges implied

- fraction arithmetic & reciprocals → everything here
- `ratio-as-fraction` → `ratio-scaling` → `ratio-bridging`
- `unit-conversion-chain` → `squared-unit-conversion`, `compound-rate-conversion`
- `average-rate-of-change-arithmetic` → later linear-model slope-interpretation work
- scientific-notation fluency is assumed in at least one hard exercise (density with 10^k)

## Difficulty escalation observed

Single division by a rate → one-factor conversion → 2–3 factor chains → squared units →
compound units (both units converted) → symbolic (letters-only) chains → ratio scaling →
ratio bridging across two ratios → ratios embedded in percent-change or added-quantity
contexts → rate reasoning fused with linear models and least/greatest integer constraints.

## What this source does well / poorly

- Well: one unifying mechanism for the whole topic; verification embedded in method; smart
  exercise traps that each isolate a single misconception; symbolic-rate items train the
  letters-behave-like-units insight.
- Poorly: no visual/graphic treatment (no double-number-line or tape-diagram intuition for
  ratio learners who need it); harmonic-mean insight for average speed is buried in an exercise
  rather than taught; no explicit treatment of when NOT to chain (trivial one-step items);
  Desmos/calculator leverage unaddressed in this chapter.
