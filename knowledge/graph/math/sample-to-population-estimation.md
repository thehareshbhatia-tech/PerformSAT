---
id: sample-to-population-estimation
section: math
domain: problem-solving-data-analysis
skill: sample-proportion-population-estimate
difficulty_span: [easy, medium]
prereqs: [probability-as-pool-share]
unlocks: [margin-of-error-interpretation, statistical-claim-legality]
related: [sampling-validity-two-dials, percent-three-slots]
---

# Scaling a sample to a population

## What it is
You can't measure a whole population, so you measure a random subset and let its statistics stand in for the population's. The workhorse computation: **best estimate of a population count = (sample proportion) × (population size)**. The reverse directions also appear: recover a proportion from counts, or a population size from a count and a proportion. It's proportional reasoning wearing survey clothes — with one non-negotiable license check: the scaling is only legitimate if the sample was randomly drawn from that population ([[sampling-validity-two-dials]]).

## Why it exists / why the SAT tests it
This is the arithmetic on-ramp to the inference cluster: an easy-band computation testing percent-of and base discipline in context. Escalations add a second step (expected-vote *differences*, "at least" aggregations across categories) rather than harder math. unverified-claim: expected-count items accept the *closest* answer choice — exact matches may be deliberately absent because a projection is an estimate, not a census.

## Mental model
**The sample is a scale model of the population.** Whatever fraction of the sample has the trait, assume the same fraction of the population does — then the only work is "fraction × the right base." Two discipline points carry every item: identify *whose* proportion (which subgroup, which complement) and *which base* it scales against. The answer is an estimate; expecting round-number exactness is a category error.

## Expert reasoning process
1. Extract the sample proportion (or compute it: trait count ÷ sample size). Note whether the question wants the trait or its complement.
2. Identify the base to scale against — the full population, or a stated subgroup. The "of what?" step, done consciously.
3. Multiply. For two-step items (differences of projected counts, sums across categories), project each piece first, then combine.
4. Pick the closest choice; don't distrust the work because nothing matches exactly.
5. Before finishing, run the license check: was the sample random and from the same population being projected onto? If not, the projection is illegitimate — which is itself sometimes what the question tests (handoff to [[sampling-validity-two-dials]]).

## Misconceptions
- **percent-of-wrong-base** — applying the sample percentage to the sample when the population is asked, to the whole population when a subgroup is asked, or ignoring a needed complement. Forms from rushing the "of what?" step; the distractor set is built from every wrong base × the same percentage. Maps to the wrong-denominator distractor archetype.
- **exactness-expectation** — distrusting a correct projection because no answer choice matches it exactly, then "fixing" the work into a wrong choice. Forms from arithmetic schooling where answers match; projections are estimates by nature.
- **proportion-count-confusion** — reporting the proportion when a count is asked, or vice versa (0.35 vs 35,000). Forms because both are "the answer to the survey question" in the student's head; units discipline fixes it.
- **unlicensed-scaling** — scaling a *non-random* or wrong-frame sample up to a population without noticing the projection is invalid. Forms because the multiplication is so mechanical that the license check never occurs; this is the bridge misconception into the inference band.

## Diagnostic indicators
- Answer equals the right percentage of the wrong number → **percent-of-wrong-base**; the specific wrong base identifies which reading slip occurred.
- Long hesitation then an answer far from their (correct) computed value → **exactness-expectation**. Verbal tell: "none of these match."
- Magnitude off by the population size (gives 0.35 for a count, or a huge number for a proportion) → **proportion-count-confusion**.
- Confidently projects from a convenience sample in mixed inference sets → **unlicensed-scaling**; pairs with overreach indicators in [[statistical-claim-legality]].

## Remediation pathways
- **percent-of-wrong-base**: make "X% *of what?*" a written annotation before multiplying; drill with items whose choices are the same percent applied to four different bases. Revisit percent-of fundamentals ([[percent-three-slots]]) if the slip persists on bare percent items too.
- **exactness-expectation**: reframe once — a projection is a *best estimate*, so "closest to" is the honest phrasing; then show the same item with deliberately off-round choices.
- **proportion-count-confusion**: units drill — every answer gets a unit written next to it (people vs share); mismatch becomes visible.
- **unlicensed-scaling**: prepend the license check as step zero; teach it with one item where the correct answer is that no valid projection exists. Route to [[sampling-validity-two-dials]] for the full design logic.

## Mastery criteria
Executes proportion × base correctly with the right base under subgroup and complement phrasings; handles two-step aggregations and differences; accepts closest-choice answers without second-guessing; refuses to scale when the sample doesn't license it. Proof: consistent accuracy on medium-band two-step projection items plus at least one correct refusal on an invalid-sample item.

## Difficulty ladder
easy: sample % × population, one step. → medium: complement handling; subgroup bases; expected-count differences and "at least" aggregations across two categories; recover a missing total from a count and a proportion. → hard end: the arithmetic disappears into judgment — projections embedded in conclusion-legality items where the *validity* of scaling, not the product, is under test ([[statistical-claim-legality]], [[margin-of-error-interpretation]]).

## Teaching notes
- **Struggling**: concrete miniatures — "3 of the 10 fish we caught were tagged; the lake has 500 fish" — before any percent notation. One multiplication, then name the base aloud.
- **Average**: base-discipline drills (same percent, four bases) and two-step items; introduce the estimate-not-census framing so closest-choice answers stop feeling wrong.
- **Advanced**: reverse items (recover the population from a projected count) and aggregations; add the license check as a standing step zero.
- **1500+**: nearly all remaining value is the handoff into inference: recognizing when a stem that *looks* like a scaling item is actually asking whether scaling is legal. Train the reflex of checking frame and randomness before honoring any multiplication.
