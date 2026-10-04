# Register v3 — every math item reads like College Board wrote it (2026-10-04)

**Why.** The founder's bar is "looks like the actual SAT." A measured study (2026-10-03) of the
whole Educator Question Bank (1,463 math items) against our 12 practice tests and drill bank:

| Math, no-figure items (prose words, math masked) | College Board | SEVA tests (09-26) | SEVA drills |
|---|---|---|---|
| Median words, easy / medium / hard | 19 / 23 / 28 | 31 / 33 / 36 | 29 / 31 / 34 |
| Stems of 20 words or fewer | 42% | 4% | 5% |
| Stems that open with the equation | 27% | 1% | 1% |
| Long word problems (> 45 words) | 20% | 7% | 8% |
| Final question is a stock CB question | 62% | 26% | — |

Causes, both ours: the v2 spec set target medians E32/M40/H49, and the v2 wording-freshness gate
punished CB's stock sentences, so authors padded stems until the trigrams diluted (v2 learning #2).
A 20-question sample written to this spec was approved by the founder on 2026-10-04 ("MUCH MUCH BETTER").

The work: re-author every math item so it is something College Board would print, without ever
reproducing a College Board item. Keep each slot's skill, SAT Pattern, difficulty, type and figure.

## The College Board register — rules

1. **Let the math talk.** When the skill is pure math (solving, equivalent expressions, systems,
   circles from equations, exponent rules), state it bare. Display the equation on its own line,
   then ask about "the given equation":
   `$3(2x - 5) = 4x + 9$\nWhat is the solution to the given equation?`
   `$\\frac{x}{4} + \\frac{x}{6} = 10$\nWhat value of $x$ satisfies the given equation?`
2. **Context only when the context IS the skill**: interpreting a number in a model, writing an equation
   for a situation, rates/units, percentages, data and probability. Then use a plain, everyday setting in
   one or two sentences: a store, a school, a bakery, a town's population, a bank account, a museum,
   a rental, a box of pens, a scientist measuring something ordinary. Named people are fine (CB uses
   first names). **No jargon settings** (spectrophotometer, acoustics technician, retrofit program,
   hardwood sample tiles, assembly-line scrap rate). No profession in the stem unless it matters.
3. **Never teach, hint or reveal.** No definitions ("…are called equivalent when…"), no "Because P and Q
   share an x-coordinate, the angle at P is a right angle", no "Note/Recall that", no restating the method.
   A hard item is hard because of the math (a parameter, a constant, a must-be-true), not the wording.
4. **Use CB's stock sentences.** Repetition is the point. Preferred closings (mined from the bank):
   "What is the value of $x$?" · "If …, what is the value of …?" · "Which expression is equivalent to …?" ·
   "Which equation defines $f$?" · "Which equation represents this situation?" · "What is the best
   interpretation of $25$ in this context?" · "What is the solution to the given equation?" ·
   "What is the positive solution to the given equation?" · "For what value of $k$ does …?" ·
   "How many distinct real solutions does the given equation have?" · "Which equation correctly
   expresses $w$ in terms of $x$ and $y$?" · "What is the area, in square units, of …?" ·
   "What is the slope of line $j$?" · "Which of the following is the best interpretation …?" ·
   "In the given equation, $k$ is a constant." · "where $a$ and $b$ are constants" ·
   "The table shows …" (never gives/lists/summarizes/records) · "the $xy$-plane" · "x-axis" (never
   "horizontal axis") · "the least possible value" (not "smallest positive integer value that meets…"). A fill-in probability
   or proportion item ends with CB's own line "(Express your answer as a decimal or fraction, not as a percent.)" — keep it.
   Crossing-lines figures (`intersectingLines`) set `params.angle0Measure` to the true measure of `angles[0]`.
5. **Length follows the skill.** Official per-skill norms (no-figure items):

| CB skill | median words | ≤ 20 words | opens with equation | > 45 words |
|---|---|---|---|---|
| Equivalent expressions | 5 | 97% | 14% | 0% |
| Linear equations in one variable | 10 | 72% | 35% | 12% |
| Nonlinear equations in one variable and systems in two variables | 14 | 81% | 90% | 0% |
| Systems of two linear equations in two variables | 15 | 66% | 79% | 11% |
| Percentages | 19 | 54% | 11% | 17% |
| One-variable data | 19 | 53% | 42% | 21% |
| Ratios, rates, proportional relationships, and units | 24 | 47% | 0% | 11% |
| Right triangles and trigonometry | 24 | 24% | 6% | 3% |
| Linear functions | 25 | 41% | 20% | 14% |
| Circles | 25 | 28% | 14% | 10% |
| Linear equations in two variables | 28 | 37% | 16% | 20% |
| Area and volume | 28 | 25% | 0% | 5% |
| Lines, angles, and triangles | 29 | 22% | 0% | 17% |
| Nonlinear functions | 30 | 33% | 30% | 19% |
| Two-variable data: models and scatterplots | 31 | 33% | 0% | 0% |
| Probability and conditional probability | 36 | 0% | 13% | 33% |
| Linear inequalities | 39 | 8% | 22% | 35% |
| Inference from sample statistics / margin of error | 70 | 0% | 0% | 93% |

6. **Choices look official.** Numeric choices ascending. Expression choices share one form. Interpretation
   choices are parallel sentences of similar length ("The estimated population increases by 6% each year.").
   Each wrong choice encodes ONE real error, written in `distractorNotes`.
7. **Difficulty is real.** Easy = one clean move. Medium = two moves or a translation. Hard = a parameter,
   a constant, infinitely many / no solutions, a must-be-true, a non-obvious setup. Module 2 hard-track
   Q1-5 are never trivial.

## Copyright — never reproduce a College Board item

Formats, stock sentences and question types are not protected and we reuse them. A specific item is:
its equation with its numbers, its number set, its answer choices, its passage. `scripts/copyrightGate.mjs`
FAILs an item that shares with any official item (Educator Question Bank + Bluebook practice tests 1-11):

- an expression of 3+ numbers, or an official item's whole equation (≥ 6 tokens, with a variable);
- 4+ numbers including 3 rare ones (used by ≤ 12 official items);
- 3+ identifying answer choices (expressions, or all four);
- most of its sentence template (5+ non-stock 8-word runs covering half our stem).

Exemplars from `node scripts/qbankExemplars.mjs` are style anchors only: never take their numbers,
equations, setting or choices. Fix a COPYRIGHT fail by changing the numbers or the structure.

## Pipeline (tests) — `scripts/recreateTestMath.mjs`

Under v3 `check` adds, per item: `registerGate.registerItem` (hints, non-CB phrasings, hard length caps),
`copyrightGate.checkMath`, and a math-twin check (same expression and numbers as another of our items);
per module: `registerGate.registerModule` — of no-figure stems ≥ 30% must be ≤ 20 words; ≥ 18% of stems
open with the equation; ≥ 45% close on a stock CB question; medians E ≤ 26 / M ≤ 30 / H ≤ 35. Wording
freshness is a warning only (`--strict-fresh` restores the v2 gate).

```
node scripts/recreateTestMath.mjs check --chunk=test1-m1      # every gate, per item and per module
node scripts/recreateTestMath.mjs solvesheet --chunk=test1-m1 # for the verifier
node scripts/recreateTestMath.mjs assemble --test=1
node scripts/recreateTestMath.mjs verify --test=1
node scripts/copyrightGate.mjs census --tests                 # whole-corpus copyright audit
node scripts/registerGate.mjs census                          # whole-corpus register audit
```

Authored JSON (committed): `scripts/generated/authored/tests2/test{N}/{m1|m2|m2easy}-q{NN}.json`.
Edit these files in place. The JSON contract is unchanged from v2 (docs/TEST_RECREATION_V2_SPEC.md).

**Frozen per slot:** `id`, `type`, `difficulty`, `band`, `skills`, and the exact SAT Pattern header
(`**SAT Pattern: <patternTitle>**`). A `figure: true` slot keeps a real `diagram`/`questionTable`.
**Re-authored:** `question`, `choices`, `correctAnswer`, `explanation`, `distractorNotes`, and the
diagram/table when the numbers change. The chunk's old `form`/`palette` fields are retired.

## Author brief (per chunk agent)

1. Read this spec, then the chunk file `scripts/generated/testRecreation2/chunks/<chunk>.json` (slot
   metadata) and the slot's current authored JSON (`tests2/test{N}/<fileId>.json`).
2. For each slot decide: **keep the math, re-word** (most slots) or **re-build** (the archetype is not
   something CB asks at this difficulty, or the setup cannot be made plain). Re-building keeps the
   SAT Pattern and difficulty.
3. Pull 2 official exemplars of the slot's CB skill at its difficulty for register only:
   `node scripts/qbankExemplars.mjs --section=math --skill="<cbSkillLabel>" --difficulty=E|M|H --n=2`.
4. Write the stem in the register above. Then fix everything that depended on the old wording:
   choices (CB form), `distractorNotes`, and the whole explanation (no reference to removed context;
   Fast Way ≤ 2 sentences; Full Solution 3 steps ending in a check; Why the wrong answers are tempting;
   Test Day Takeaway). Compute every number with python before writing it.
5. A displayed equation is its own line: `"$…$\n<sentence>"`. Money is `\\$` inside JSON strings.
6. Run `node scripts/recreateTestMath.mjs check --chunk=<chunk>` until it passes. Module-level fails
   mean the chunk's mix is still too wordy: convert more pure-math slots to bare form.
7. Report: slots re-worded vs re-built, any slot you could not make CB-like, and the final register line.

## Verifier brief (independent agent per chunk)

Run `solvesheet`, then for every item: (1) solve it blind with python and confirm the key and every
distractor's stated error; (2) ask "would College Board print this exact item?" — wording, setting,
choices, difficulty — and fix what is off; (3) re-run `check`. Write fixes into the authored JSON.

## Status board

| Test | m1 | m2 | m2easy | verified | committed |
|---|---|---|---|---|---|

## R&W review v3 (per test: Module 1 + Module 2 + Module 2 Easy = 81 items)

R&W already uses CB's stems and formats (validateRWBank pins the stems) and the copyright census found
0 shared passages. Three things are left, in priority order:

1. **Facts.** College Board passages are true. Every claim about a real person, study, work, date,
   number or event must be checked against a reliable source (web search: the paper, a university or
   museum page, an encyclopedia entry). If a claim is wrong or cannot be verified, rewrite the passage
   around a verified fact and keep the question's logic and answer key; if no verified version can keep
   the logic, re-author the item on a different verified subject. Never invent a study, a quotation, a
   finding, or a number and attribute it to a real person. Literary excerpts must be genuine public-domain
   text (published before 1929) quoted exactly, with the correct author, title and year.
2. **Length.** Trim passages to the official distribution for the skill (`registerGate.rwRegisterItem`:
   FAIL over the official p90 + 5%; aim near the median). Official medians (words): Words in Context 54 ·
   Text Structure and Purpose 91 · Cross-Text 142 (both texts) · Central Ideas 89 · Command of Evidence
   textual 107 / quantitative 80 · Inferences 101 · Boundaries 47 · Form, Structure, and Sense 45 ·
   Transitions 55 · Rhetorical Synthesis notes 68 (bullets only). Answer choices for Central Ideas,
   Inferences, Purpose and Synthesis run about 15 words (p90 25-30). Trim by cutting setup, not the
   sentences the answer depends on.
3. **Register.** Plain expository prose like CB's: one subject, a claim, the evidence. No ornamental
   openers, no editorializing. Distractors parallel in length and grammar to the key; exactly one
   defensible answer.

Where content lives: Module 1 + 2 items are `scripts/generated/authored/test{N}/q01..q54.json` (q01-27 =
Module 1, q28-54 = Module 2), shipped with `node scripts/assembleRWTest.mjs --test=N --ship` then
`node scripts/varyRWSeating.mjs --test=N` (re-applies the seating; idempotent). Module 2 Easy items live
only in `src/data/practiceTests/practiceTest{N}RWM2Easy.js` (edit in place). Gates:
`node scripts/validateRWBank.mjs --test=N`, `node scripts/registerGate.mjs rwcensus`,
`node scripts/copyrightGate.mjs census --rw`.
