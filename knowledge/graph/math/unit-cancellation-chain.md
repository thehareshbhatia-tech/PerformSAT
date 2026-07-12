---
id: unit-cancellation-chain
section: math
domain: problem-solving-data-analysis
skill: distance-rate-time, average-rate
difficulty_span: [easy, hard]
prereqs: [proportion-setup-template]
unlocks: [unit-magnitude-sanity-check, exponent-time-unit-conversion]
related: [scaling-laws-k-k2-k3, ratio-part-whole-discipline]
---

# Units as checkable algebra: the cancellation chain

## What it is
Units behave like multiplicative symbols: identical units in a numerator and a
denominator cancel, and repeated units exponentiate. So any conversion or rate task —
one hop or five — is the starting quantity multiplied by a sequence of fractions,
each equal to 1 in disguise (a known equivalence written new-unit-over-old-unit),
oriented so each factor kills exactly one unwanted unit. When only the target unit
survives, the arithmetic is already correct-by-construction.

## Why it exists / why the SAT tests it
The exam tests whether a student can navigate an unfamiliar quantitative landscape
with no memorized recipe: stems deliberately define exotic or invented units inline
so that prior knowledge is useless and only the mechanical chain works
(unverified-claim on the "deliberately" — frequency matches our bank's conversion
items, still verify). Shapes range from one-hop swaps to 4–5 factor chains with decoy
data, two-leg journeys, symbolic-rate expression selection, and rates fused into
model equations. Distractor sets spread across orders of magnitude, each wrong choice
encoding one specific chain error.

## Mental model
**Plan the unit route before touching a number.** Read the question tail for the
target unit, write the itinerary of units from start to target (dollars ⇒ liters ⇒
miles), and note that each leg needs exactly one given rate. Orientation is never
memorized — each factor is written whichever way up cancels the unit you're trying to
kill. The cancellation audit IS the correctness check; units and algebra are the same
machine. A rate is a two-way multiplier: "k miles per gallon" serves as miles/gallon
or gallons/mile depending on which unit must die.

## Expert reasoning process
1. Anchor on the goal: identify the requested unit from the question tail FIRST.
2. Plan the route backward from the goal; each leg = one available equivalence.
   Givens that aren't legs on the route are decoys — unused data is normal.
3. Ask of each factor: is this a universal constant (60 min/hr) or a situational
   rate (a 4-hour working day *in this problem*)? Use the rate that governs THIS
   situation.
4. Write the full chain with units, cancel diagonally, confirm the survivor is the
   target unit. Mismatch = a factor is inverted or missing — a signal, not a mystery.
5. For compound rates (speed, density): convert numerator-unit and denominator-unit
   as independent links in the same chain. For squared/cubed units: apply the linear
   factor once per dimension (see [[scaling-laws-k-k2-k3]]). A compound unit IS its
   own formula — read it, don't recall one. Density in g/cm³ says, literally, grams
   divided by cubic centimeters: given a 54 g object of volume 20 cm³, the unit
   sentence yields 54/20 = 2.7 g/cm³ with nothing memorized; given density and either
   partner, the third quantity follows by making the units cancel to what's asked
   (mass = density × volume because g/cm³ × cm³ leaves g). Every "formula" of this
   family is recoverable from its unit on sight.
6. Two-leg journeys: average speed is TOTAL distance over TOTAL time — compute each
   leg's time, sum, divide. Never average the legs' speeds (see the misconception
   below).
7. Evaluate as ONE Desmos line. Reason first, one-line chain second, never round
   intermediates — chained rounding drifts onto near-miss distractors.
8. Run the [[unit-magnitude-sanity-check]]: did the number move the sensible
   direction?

## Misconceptions
- **multiply-divide-coinflip** — given "1 big = k small," the student guesses the
  operation. Forms because school teaches conversions as answer-getting recipes tied
  to specific unit pairs; an unfamiliar pair leaves no procedure, only a coin flip.
  Wrong answers sit k² apart from right ones, and both ×k and ÷k results appear as
  choices. The inverted result often *feels* fine — it passes the lazy feel-check
  because the student has no magnitude expectation to violate.
- **every-number-must-be-used** — student forces decoy givens into the computation
  because homework historically used all data. The chain stalls or grows an extra
  bogus factor. Route-planning is the cure: a given is used only if it's a leg.
- **unit-blind-formula-plugging** — in rate × time, multiplying a per-hour rate by
  minutes because "the formula says multiply." Formulas were learned as number slots,
  not quantity relations; the skipped cancellation audit is exactly the repair.
- **compound-rate-half-conversion** — converting km→mi in a speed but forgetting
  hr→min, because the rate is stored mentally as one number rather than a fraction
  of two units.
- **stepwise-rounding-drift** — rounding each intermediate because school rewarded
  tidy rounding; accumulated error lands on a near-miss distractor or misses a
  grid-in tolerance.
- **arithmetic-mean-of-speeds** — on a two-leg trip (out at 30, back at 60), the
  student averages the two speeds and reports 45. Forms because the word "average"
  triggers the add-and-halve schema, which is correct only when the legs take EQUAL
  TIME; here the slow leg lasts longer and drags the true average below the midpoint.
  Average speed is total distance ÷ total time — a time-weighted quantity, not a
  mean of the two rate numbers. The arithmetic mean is planted prominently in the
  choices; the true value always sits below it (closer to the slower leg's speed).

## Diagnostic indicators
- Answer is the reciprocal-chain result (coinflip): correct value × k² or ÷ k² for
  the leg's factor k. Chosen distractor differs from key by an even power of one
  conversion factor.
- Answer incorporates a decoy given (every-number): value only reachable by
  multiplying in the unused rate.
- Answer off by exactly 60 (or 24, or 12) on rate-time stems (unit-blind plugging).
- Speed conversions off by one unit's factor only (half-conversion).
- Grid-in near-misses at the 3rd significant figure (rounding drift); scratch work
  shows intermediate rounded values.
- Symbolic-rate items: picks the wrong arrangement of 20a/d vs 20d/a — with letters
  the cancellation habit was abandoned; verbal explanation says "I wasn't sure which
  goes on top."
- Picks the exact midpoint of the two speeds on two-leg average-speed items
  (arithmetic-mean-of-speeds); no time computation appears in scratch work.

## Remediation pathways
- **coinflip**: forbid memorized directions entirely; re-teach orientation as "write
  the factor so the unwanted unit cancels," then 5 reps on invented units where
  memory cannot help. Escalate to [[proportion-setup-template]] if fraction
  manipulation itself is shaky.
- **every-number-must-be-used**: teach goal-first triage explicitly — route first,
  then select facts. One drill with a table containing a useless row makes the point.
- **unit-blind plugging**: make the pre-compute unit audit mandatory: "do the units
  of this multiplication cancel to what I want?" A mismatch means insert a repair
  factor, not push on.
- **half-conversion**: rewrite the compound rate as an explicit fraction with two
  units showing before converting anything.
- **rounding drift**: switch the habit, not the intent — carry the whole computation
  as one Desmos chain and only round at the very end.
- **arithmetic-mean-of-speeds**: one concrete demolition — a trip with an extreme
  slow leg (1 mile at 1 mph, 1 mile at 60 mph: the mean says ~30, the truth is
  under 2) makes the time-weighting undeniable. Then install the replacement as
  definition, not formula: average speed = total distance ÷ total time, computed
  leg-time by leg-time. The equal-time special case can be named honestly so the
  schema has a home instead of leaking.

## Mastery criteria
Student can (a) plan a 3+ hop route aloud before computing, (b) solve a chain with a
decoy given without using it, (c) run a symbolic chain (letters only) with correct
factor orientation, (d) produce grid-in answers at full precision. Proof: consistent
accuracy on medium chains plus one hard composed item (situational rate + decoy +
compound unit) solved with a written unit-cancelling chain.

## Difficulty ladder
- **easy**: one-hop swap with the rate given in-stem.
- **medium**: 2–3 factor chains; distance = rate × time with matching units; convert-
  then-average shapes.
- **hard**: 4–5 factor chains with situational rates and decoy rows; rate-time with
  mismatched time units; two-leg journeys with different speeds (keep per-leg
  subscripted quantities); symbolic expression-selection where all four orientations
  appear as choices; equation-building where each term must pass a unit audit.
- **hardest (composed)**: scientific-notation speeds; percent-modified legs
  (composes with [[percent-as-multiplier]]); piecewise speeds read off a graph;
  exponent-unit conversions ([[exponent-time-unit-conversion]]). Escalation adds
  layers and disguises — the chain never stops being the engine.

## Teaching notes
- **Struggling**: start with a single hop and physically cross out the cancelling
  units with a pencil. Acknowledge the chemistry-class scar tissue: this is the same
  tool, but here it is a safety net, not a hazing ritual. Offer the single-proportion
  alternative for one-hop items so they have a temperament match.
- **Average**: teach route-planning as the skill and the chain as its transcript;
  drill triage on stems with decoy data until unused givens stop feeling wrong.
- **Advanced**: symbolic chains (letters behave exactly like units), compound rates,
  and situational-vs-universal rate selection.
- **1500+**: structure-matching — when choices are unsimplified expressions, match
  the form and skip evaluation entirely; and the one-line Desmos discipline: the
  entire chain typed once, no intermediate rounding, answer read straight off.
