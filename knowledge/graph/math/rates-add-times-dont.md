---
id: rates-add-times-dont
section: math
domain: problem-solving-data-analysis
skill: ratios-rates-proportional-relationships
difficulty_span: [medium, hard]
prereqs: [fraction-operations]
unlocks: []
related: [unit-cancellation-chain, linearity-constant-rate-model, magnitude-sanity-checks]
---

# Rates add; times never do

## What it is
The work-rate model for "two workers / two machines / two pipes together" problems. Each independent worker is converted from the stated quantity (time to finish the job alone) into a rate: **rate = 1/(solo time)**, in jobs per unit time. Rates of independent workers ADD; times combine through the rates, never directly. The combined time t comes from 1/a + 1/b = 1/t (equivalently, t(1/a + 1/b) = 1 — "in t hours, the two rates together complete one job"). One formula runs the whole family: work done = rate × time.

## Why it exists / why the SAT tests it
The stem states TIMES, but the additive quantity is RATES — the exam is probing whether the student converts to the quantity that actually combines before combining anything. The English never mentions a rate, so the conversion has to come from the model, not the prose. unverified-claim: joint-work items recur at the medium-hard band, usually as find-the-combined-time, with the averaged-times value planted among the choices.

## Mental model
**Convert to per-hour speech before combining.** "Finishes in 6 hours" is re-said as "does 1/6 of the job per hour"; "in 3 hours" as "1/3 per hour." Per-hour contributions from independent workers stack: together they do 1/6 + 1/3 = 1/2 of the job per hour, so the job takes 2 hours. The reciprocal at the end is part of the model: the sum is a RATE, and the question asks a TIME, so one final flip converts back. Times themselves never add, never average — a helper can only speed things up, so the combined time must beat the FASTER solo time (that structural bound lives in [[magnitude-sanity-checks]]; run it on every answer).

The rate here is the same object as any unit rate ([[unit-cancellation-chain]]): jobs/hour, and the units audit works — (jobs/hour) × hours = jobs, and the job count must come out to 1.

## Expert reasoning process
1. Extract each worker's solo time and immediately rewrite it as a rate: 1/(solo time), jobs per the stem's time unit. If the times use different units, reconcile to one unit first.
2. Add the rates of everyone working simultaneously. Partial participation (someone starts late, leaves early) means the rates only add over the interval they share — split the timeline into intervals of constant crew, accumulate work per interval, and require the total to reach 1 job.
3. Convert back: combined time = 1/(combined rate). Say the answer as a sentence ("half the job per hour, so two hours") to force the flip.
4. For "how long for the remaining work" tails: remaining fraction ÷ combined rate.
5. Gate the answer: below the faster solo time, positive, and sane against the inputs ([[magnitude-sanity-checks]]).

## Desmos vs algebra
Clean solo times (6 and 3) resolve mentally through fraction addition. Hostile ones (7 and 11, or rates given as decimals) are one Desmos line: solve 1/7 + 1/11 = 1/t, or just evaluate 1/(1/7 + 1/11) directly. The conversion decision — that RATES are the things being summed — is yours; the arithmetic is not worth hand-grinding when the denominators don't cooperate. On multiple choice, the together-beats-fastest bound often kills half the grid before any computation.

## Misconceptions
- **solo-times-averaged** — combined time reported as the mean of the solo times (6 and 3 together → 4.5). Forms because time is the only quantity the stem names, and "working together" cues the add-and-halve averaging schema; the additive quantity (rate) never appears in the English. The averaged value is the classic planted distractor, and it always fails the faster-solo bound.
- **times-added-directly** — combined time as the SUM of solo times (6 and 3 → 9), from an additive schema applied to the visible numbers ("two workers, add their numbers"). Produces an answer slower than either worker alone — a bound violation that the student's missing sanity gate lets through.
- **reciprocal-left-unfinished** — correct setup and algebra ending at the combined RATE (1/t or its decimal), reported as the time. Forms because the algebra terminates when a value is isolated, and the final unit flip feels like cleanup rather than a required conversion. The reciprocal of the correct answer sits in the choice set.

## Diagnostic indicators
- solo-times-averaged: answer is exactly the midpoint of the two given times; the student defends it with the word "average"; miss disappears when asked "can a helper make the fast worker slower?"
- times-added-directly: answer exceeds both solo times; no reaction to the impossibility — the bound isn't running.
- reciprocal-left-unfinished: answer is the exact reciprocal of the key (0.5 gridded where 2 was asked); scratch work is correct through the rate sum; explain-back ends at "so it's one half."

## Remediation pathways
- solo-times-averaged: representational fix, not a warning — require the per-hour re-saying of every solo time before any combining is allowed, for a full session. Once the quantities on the page are rates, averaging times has nothing to grab. Pair it with the bound: helper present → beat the faster time.
- times-added-directly: one thought experiment ("two identical 6-hour workers — together 12 hours?") collapses the schema; then install the same per-hour re-saying ritual.
- reciprocal-left-unfinished: end-of-solve unit audit — "is the number I'm holding jobs-per-hour or hours?" — the same units discipline as [[unit-cancellation-chain]]; drill three items where the asked object alternates between the combined rate and the combined time so the flip stays conscious.

## Mastery criteria
Student converts solo times to rates unprompted, adds only rates, flips back to time, and rejects any candidate at or above the faster solo time without being told. Evidence: correct combined-time items with hostile denominators (proving the model, not memorized number pairs), plus at least one partial-participation item where the timeline had to be split.

## Difficulty ladder
- **Medium**: two workers, clean solo times, find the combined time; or combined and one solo time given, find the other solo time (the same equation solved for a different slot).
- **Hard**: partial participation — one worker starts late or leaves, forcing interval-by-interval accumulation; three workers; rates stated in mixed time units; "how much is left after h hours together" tails.
- **Hardest**: symbolic-answer forms (combined time as an expression in a and b — the ab/(a+b) shape must be BUILT from 1/a + 1/b = 1/t, not recalled); composition with [[linearity-constant-rate-model]] when a fixed setup time precedes the joint work.

## Teaching notes
- **Struggling**: make the rate physical before any fractions — "she paints 1 fence in 6 hours, so in 1 hour she paints one-sixth of it," drawn as a fence in sixths. Combine by shading each worker's hourly share. No formula language until the picture is automatic.
- **Average**: the per-hour re-saying ritual plus the two bounds (beats the faster solo; slower than teleportation is not a thing to check — positive and finite is); drill the flip-back step until reporting a rate as a time stops happening.
- **Advanced**: partial-participation timelines and solve-for-the-other-slot variants; mixed units; introduce the symbolic form by derivation.
- **1500+**: recognize the family from the stem's shape in one read; write 1/a + 1/b = 1/t immediately, predict the averaged-times distractor before looking, and hand ugly arithmetic to Desmos.
