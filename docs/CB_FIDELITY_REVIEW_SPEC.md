# CB fidelity review — round 4 (2026-10-05)

**Ask (founder, 2026-10-05):** "Go through it again; make sure all of the questions are something College
Board would produce; compare alongside official College Board SAT material and the SAT Educator Question
Bank; nothing too complex; also make sure we are good on the copyright side."

Round 3 (docs/TEST_REGISTER_V3_SPEC.md) fixed the *wording*. This round adds two things it never measured:
**complexity** (is the item harder to read or compute than CB's items of the same skill at the same
difficulty?) and **scope** (does CB ever ask this at all?). Every rule in the v3 spec still applies.

## The three questions, for every item

1. **Would College Board print this exact item?** Setting, wording, choices, figure, difficulty.
2. **Is it no more complex than CB's items of the same skill at the same difficulty?** Compare against
   2-4 official exemplars (`qbankExemplars.mjs`), not against your intuition.
3. **Is it clear of CB copyright?** It must not reproduce any official item (equation + numbers, number
   set, answer choices, passage, sentence template). Formats and stock sentences are free to use.

## Evidence tools (use them; do not guess)

```
node scripts/qbankExemplars.mjs --section=math --skill="<CB skill label>" --difficulty=E|M|H --n=4
node scripts/cbSearch.mjs --q="<regex>" [--section=math|rw] [--difficulty=E|M|H] [--n=4]   # does CB ever ask this?
node scripts/complexityAudit.mjs --json=<scratch output path>   # math: per-item features vs QBank p95 for skill×difficulty
node scripts/rwComplexityAudit.mjs --json=<scratch output path> # R&W: sentence length, hard words, choice length vs QBank
node scripts/copyrightGate.mjs probe --text="<stem>"  # copyright check for one stem
node scripts/copyrightGate.mjs census                 # whole corpus (3,926 items incl. topic drills + R&W fills)
```

Official sources held: Educator Question Bank — 1,463 math + 1,845 R&W (contains every item of the
"new 300" Drive set) — and Bluebook practice tests 1-11. Third-party books are not references.

## Math — "nothing too complex"

Measured 2026-10-05 (no-figure items, median ours/CB): easy items carry 3 numbers vs 2 and 2 stem
operators vs 0; medium 4 vs 3 numbers; hard 3 vs 2 operators. 204 of 2,913 items exceed the most complex
official item of their skill at their difficulty on at least one feature.

1. **Scope: only what CB asks.** If you are not sure CB asks an archetype, `cbSearch` it. Zero official
   hits = off the test → rebuild the item on an archetype CB does ask (same CB skill, same SAT Pattern
   where possible, same difficulty). Found off-scope 2026-10-05:
   - computing a standard deviation (incl. after a linear transformation) — CB only *compares* spreads
     (dot plots, lists, "which must be true", effect of removing a value);
   - compound interest with n > 1 periods per year ("compounded quarterly/semiannually/monthly") — 0 hits;
     CB writes growth as "increases by 4% each year" or gives the model;
   - interquartile range, vertical/horizontal asymptotes, the k/√n margin-of-error formula — 0 hits
     (margin of error IS on the test, as interpretation: "a plausible value is between …");
   - also never: logarithms, complex numbers, combinatorics/factorials, matrices, sequence notation,
     law of sines/cosines, polynomial division.
2. **Clean numbers.** CB's numbers are small and friendly; answers are integers or simple fractions or
   decimals. Prices with cents are fine ($1.90); computed balances to the cent ($8,659.46), 5-6 digit
   values, and decimals in a skill where CB uses none (complexityAudit flags "decimal in stem (CB 0%)")
   are not. Round, large counts are fine (2,400 people).
3. **Difficulty comes from the idea, not the arithmetic.** Easy = one move. Medium = two moves or a
   translation. Hard = a constant/parameter, no/infinitely many solutions, a must-be-true, a non-obvious
   setup. A hard item is NOT four routine steps, stacked conditions (fee + credit + discount + tax), extra
   quantities, or an ugly number. When you simplify, keep the item at its labeled difficulty by keeping
   (or adding) the CB-style twist — check against exemplars at that difficulty.
4. **No more quantities than the question needs.** CB almost never includes irrelevant numbers.
5. **Choices as simple as the skill allows.** Expression choices share one form; numeric choices
   ascending; each wrong choice is one real error (`distractorNotes`).
6. **Do not over-correct.** Most items are fine. Do not dumb a medium/hard item down to easy, do not
   rewrite a CB-like item for style, and keep CB's stock sentences.

## R&W — "nothing too complex"

Measured 2026-10-05 (median ours/CB): our vocabulary is already *plainer* than CB's (3+-syllable words
11% vs 16%), but our **sentences are longer** (words per sentence: Cross-Text 24 vs 18, Form/Structure
29 vs 25, Text Structure 25 vs 22, CoE-quantitative 25 vs 21, Boundaries 32 vs 28) and our **choices
are wordier** (Central Ideas 18 vs 15, Text Structure 18 vs 14, CoE-quantitative 21 vs 17).

1. **Sentences near CB's length for the skill.** Split winding sentences; cut stacked clauses and
   parentheticals. Aim at the CB median words-per-sentence; no sentence over ~35 words. Boundaries/Form
   items: the sentence that holds the blank must still test the same rule.
2. **Choices near CB's length**, parallel in grammar and length, exactly one defensible.
3. **Facts stay true.** Trimming must not change a fact. Do not add a new claim about a real person,
   study, date or number without verifying it (web search: the paper, a university/museum page, an
   encyclopedia). Literary excerpts are genuine public-domain text quoted exactly — never "simplify" them.
4. **One subject per passage, no repeats.** CB does not return to the same subject within a test. If a
   subject (or a close family: same scientist, same species, same invention) appears more than once in
   one test, re-author the repeats on new, verified subjects, keeping each item's skill, question type
   and answer logic.
5. **Plain expository register** (v3 spec R&W section) — one subject, a claim, the evidence.

## Copyright (unchanged rules, wider coverage)

`copyrightGate.mjs census` now covers the 364 topic drills and the 41 R&W drill fills too (was 3,521 →
3,926 items). Baseline 2026-10-05: 0 fails. Six items share a few numbers or a short equation fragment
with an official item (warn-level: test7-m2-q20, test8-m1-q18, test8-m2-q03, bank-am-057, bank-ps-381,
bank-geo-008) — reviewers change the numbers anyway. Every rewritten stem must pass `probe`; exemplars are
register anchors only — never take their numbers, equation, setting or choices.

## Where content lives (edit these, then assemble)

- Test math: `scripts/generated/authored/tests2/test{N}/{m1|m2|m2easy}-q{NN}.json` →
  `node scripts/recreateTestMath.mjs check --test=N` → `assemble --test=N`.
- Drill math: `scripts/generated/authored/bank/{source}/{fileId}.json` →
  `node scripts/recreateBank.mjs check --source=X` → `assemble --source=X`.
- Test R&W M1+M2: `scripts/generated/authored/test{N}/q01..q54.json` → `node scripts/assembleRWTest.mjs
  --test=N --ship` → `node scripts/varyRWSeating.mjs --test=N`. M2 Easy: edit
  `src/data/practiceTests/practiceTest{N}RWM2Easy.js` in place. Gates: `validateRWBank.mjs --test=N`,
  `registerGate.mjs rwcensus`, `rwComplexityAudit.mjs`.
- R&W drill fills: `scripts/generated/authored/bank/rwFills/` (`recreateRWFills.mjs`).

Frozen per item: `id`, `type`, `difficulty`, `band`, `skills`, SAT Pattern header, figure presence.

## Review log (per unit)

Each reviewer writes `review/<unit>.json` in the session scratchpad:
`[{ "id": "...", "verdict": "keep|reworded|simplified|rebuilt|key-fixed|trimmed|resubjected", "reason": "..." }]`
covering EVERY item in the unit (keeps too), so coverage is provable.

## Round 4 rulings (2026-10-07) — established by `cbSearch` over the QBank caches + Bluebook PT text

**Off-test math archetypes (0 official hits — rebuild on a CB archetype of the same skill/difficulty):**
the mode; IQR; computing a standard deviation (comparing spreads is fine); "in both" / overlapping-group
probability; draws without replacement; weighted / two-group total-probability means; the margin-of-error
FORMULA (CB asks only direction: bigger sample → smaller margin; plausible range from estimate ± margin);
"compounded" anything; quadratic inequalities; polynomial division / other zeros of a cubic; "one solution
is k times the other"; function composition f(g(x)) / f(f(x)); inverse functions; graph reflections,
stretches, a·f(x), −f(x), f(−x), f(kx) (CB transformations are translations only: f(x+h), f(x)+k);
domain / "undefined"; asymptotes; residuals and any actual-minus-predicted gap (CB only COUNTS points
above/below a best-fit line); multiplying every value of a data set (CB only adds/subtracts a constant);
sector area (arc length / central angle is on the test); the standalone coordinate midpoint or distance
formula; triangle inequality; naming a triangle type; angle of depression; regular hexagons; space
diagonals; slanted tangent lines solved by discriminant (CB tangent items: perpendicular radius slope,
horizontal/vertical lines, tangent segments).
**Lines:** CB perpendicular items ask only for the SLOPE; parallel-line-through-a-point items use (0, b)
or the origin. Writing a perpendicular/parallel line through a general point is beyond CB.
**R&W:** no invented data tables or unnamed studies — every Command-of-Evidence table and every cited study
must be real and sourced; no subject that an official CB item already uses; no subject repeated within a
test or across the 12 tests; keep the longest-choice-is-key rate inside `rwPredictabilityGuards`.
**Drills vs tests:** after rebuilding both onto the same archetypes, run `recreateBank.mjs verify --all`
(drill stems must not read close to any practice-test stem) and `check --all` (cross-source near-dups).
**Pattern headers:** when a rebuild changes what an item tests, log `newPatternTitle`; the orchestrator
applies them centrally (bank: live src header + skills + authored; tests: chunk row + authored) and maps
any new title in `PATTERN_TO_CB_SKILL`.
