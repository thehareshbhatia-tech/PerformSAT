# Drill-Bank Freshness Pass (2026-09-07)

**Why.** The 2026-09-04 bank recreation (docs/BANK_RECREATION_SPEC.md) froze every item's pattern and
showed authors the old stem. Census on the live bank (same metric as the test rebuild): 810 of 2,121
items are their pre-09-04 item with new numbers, 38% have a near-verbatim twin elsewhere in the bank,
and stems run E27/M31/H36 words against the tests' E33/M38/H43. Students drilling one skill meet the
same setup again and again. This pass rewrites the minimal set that fixes it and leaves the rest.

**Scope (from `node scripts/refreshBank.mjs plan`).** 1,210 items to rewrite (21 chunks): every item that is near
its pre-09-04 version (Dice ≥ 0.55), near a current practice-test question (≥ 0.55), a thin stem
(under 60% of the official word norm), or one of a pair of drills closer than 0.65 to each other
(the greedy keep-set prefers figure-bearing, longer, clean items). 911 items are kept untouched.

**Lines.** A rewritten stem must sit below Dice 0.55 against its own old versions and every current
test question, and below 0.65 against every other drill (kept or rewritten). Drills are reps of one
archetype, so they may share more structure than two test questions may — but never the same setup.

**Frozen per item** (recreateBank re-applies at assembly): id, domain, skills, difficulty, type,
sourceStyleRef, tags, the exact `**SAT Pattern**` title (drill routing keys off it), topic-file hint
requirement. **Authored:** question, diagram/questionTable/questionFormula, choices, correctAnswer,
explanation, `distractorNotes` (required for every wrong letter), hint (topic items).

## Pipeline

```
node scripts/refreshBank.mjs plan                       # rewrite set, seen corpus, chunks fresh-01..fresh-21 (gitignored WORK dir)
node scripts/recreateBank.mjs check --chunk=fresh-01    # schema, scaffold, KaTeX, ascending, official gate + FRESHNESS gate
node scripts/recreateBank.mjs score --text="…" [--self=source/fileId]   # author helper: nearest seen / new drill + verdict
node scripts/recreateBank.mjs solvesheet --chunk=fresh-01
node scripts/recreateBank.mjs assemble --source=<sources of the chunk> --chunk=fresh-01,fresh-02
node scripts/recreateBank.mjs verify --source=<sources>
node scripts/refreshBank.mjs verify                     # live census: old-self, tests, pairwise ≥0.65 count, register
npm run bank:validate · CI=true npx react-scripts test --watchAll=false --testPathPattern="bankDiagramRender|recreatedBankRender|bank"
```

Chunk rows carry NO old stem. Each row gives: fileId, source, kind, frozen metadata, patternTitle,
cbSkillLabel, `figure` (must carry a real diagram/questionTable), `form` + `formHint` (rotates inside a
pattern group so reps of one archetype wear different clothes), and `why` it is being rewritten.
Each chunk carries a `palette` of three scenario themes.

## Authoring rules

Same as docs/TEST_RECREATION_V2_SPEC.md "Authoring rules" with these bank specifics:

1. Never open the bank shard/topic files or git history for ideas (the gate compares against all of
   them); the only allowed peek is a diagram `params` key shape via grep.
2. Keep the frozen `**SAT Pattern: <title>**` header exactly; the item must remain a genuine drill on
   that archetype at its difficulty and type.
3. Inside your chunk, items sharing a pattern are reps of one archetype: give each a different setup,
   a different unknown, or a different form — the 0.65 sibling line is the floor, not the goal.
4. Topic-file items need a fresh one-sentence `hint` (a nudge, not the method).
5. Stems ≥ 10 words unless a figure carries the setup; aim E32/M40/H49 words; official voice; premises
   physically and mathematically sound; every distractor a named error with its exact number.
6. Score drafts first (`recreateBank.mjs score --text="…"`); a FRESHNESS fail means change the setup.

## Verification

Per chunk: `solvesheet` → an independent verifier re-derives every number with python, checks
distractor rationales, figure params against the renderers (rightTriangle `vertices` in true
proportion; barChart values on gridlines; dotPlot window ≤ 50; linearGraph ≤ 26 gridlines per axis;
"residual" needs a scatterplot), difficulty, register, scenario collisions — fixes in place — then
`check` again.

## Status board

| Chunk | Sources | Items | Authored | Verified | Assembled |
|---|---|---|---|---|---|
| fresh-01..21 | see chunk files | 1,210 | | | |
