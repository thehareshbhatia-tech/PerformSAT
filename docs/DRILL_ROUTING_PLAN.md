# Drill Routing Plan — Exact-Question-Type Matching

**Author:** Claude (with Haresh)
**Date:** 2026-05-11
**Status:** Reviewed via /plan-eng-review — architecture revised; ready to implement.

## Goal

When a student gets a question wrong on a practice test, route their drill
practice to questions of the same SAT Pattern first, falling back to the
broader `sourceStyleRef` category, then to skill-level, when the bank
doesn't have enough items at the finer grain.

Today's dispatcher matches by skill only — a student who misses one
"Reverse-Percent" item and one "Compound-Percent-Of" item gets drills
across all "percents" skill items mixed together. After this change,
they get **exact-pattern** drills when the bank has ≥8 items of that
pattern, **category** drills when the bank has ≥12 items of the parent
`sourceStyleRef`, or today's skill-blend otherwise.

## Key data shape discoveries (from /plan-eng-review)

Two findings drove the final architecture:

1. **The SAT Pattern is already embedded in every item.** Every one of the
   300 bank items AND every one of the 528 test items has
   `**SAT Pattern: <Title>**` at the head of its `explanation` text.
   Universal coverage, no missing data.

2. **`sourceStyleRef` is BROADER than SAT Pattern.** In algebra, 88 of 90
   bank items have a SAT Pattern that's more granular than their
   `sourceStyleRef` (e.g., `sourceStyleRef: 'slope-rate-of-change'` covers
   5 distinct SAT Patterns: "Rate of Change from Two Points", "Slope from
   Two Points", "Per-Unit Rate", "Rate from Two Points (Negative Slope)",
   "Average Rate Over Time"). This is intentional — the bank uses
   `sourceStyleRef` as a category, with SAT Pattern as the leaf label.

These two facts shape everything below.

## Architecture

### Two-tier matching with skill fallback

```
PracticeTest.jsx finishes
  → runDiagnostic(test, answers, …)
     ★ extracts satPattern from each q.explanation into questionAnalysis
  → analyzeSkills aggregates per skill
     ★ skill.missedPatterns: Set<satPattern>  ← NEW
  → buildGroundTruthDiagnosis → weaknesses[] carries missedPatterns
  → enrichPlanWithGroundTruth → plan.weaknesses[]
  → getTargetedWeaknessSet({ weakSkills })
  → CASCADE:
     1. Tier 1 — exact SAT Pattern
        filter bank items where satPattern ∈ weakness.missedPatterns
        if pool ≥ TIER1_PATTERN_THRESHOLD (8) → serve
     2. Tier 2 — derived sourceStyleRef (parent category)
        for each pattern in missedPatterns, look up parent style via
        patternToStyle (built at bank module load from bank items)
        filter bank items where sourceStyleRef ∈ derivedStyles
        if pool ≥ TIER2_STYLE_THRESHOLD (12) → serve
     3. Tier 3 — skill (existing behavior, unchanged)
        filter bank items where skillId ∈ weakness.skillId
        if empty, expand to domain (existing behavior)
```

### Lazy extraction, single source of truth

The SAT Pattern is computed from `explanation` text on demand — **NOT**
written as a structured field on each item. Trade-off accepted:
explanation format becomes a contract (lint guard enforces it). Reward:
12 fewer files touched, no drift between explanation text and structured
field.

```
src/data/questions/extractSatPattern.js  (NEW)
└── extractSatPattern(text) → 'kebab-case' | null
    ─ regex: /\*\*SAT Pattern:\s*([^*]+?)\*\*/
    ─ kebab-case the captured title
    ─ returns null for missing/empty/null input
```

### Module-load indexes in bank/index.js

Two new indexes built once at module load by walking `questionBank`:

```
patternIndex:    Map<satPattern, Question[]>
                 // For Tier 1 lookup. Built by extracting from each
                 // bank item's explanation.

patternToStyle:  Map<satPattern, sourceStyleRef>
                 // For Tier 2 derivation. Built from bank items that
                 // have BOTH a parseable SAT Pattern AND a sourceStyleRef.
                 // The bank itself is the source of truth for this
                 // many-to-one mapping; no separate file needed.
```

Build cost: ~5ms across 300 items at app start. Negligible.

### Weakness shape change (additive)

```js
{
  skillId: 'slope-intercept-form',
  skill: 'Slope-intercept form',
  evidence: '4/6 correct, primary error: …',
  accuracy: 42,
  errorType: 'Conceptual gap',
  domain: 'algebra',
  modules: ['module-1'],
  sections: […],
  section: 'math' | 'rw',
  missedPatterns: ['reverse-percent', 'shifted-output'],  // ★ NEW
}
```

**Backward compat:** legacy weaknesses (hydrated from Firestore plans
saved before this change) have no `missedPatterns` field → cascade Tier 1
+ Tier 2 short-circuit (empty input) → Tier 3 fires, identical to
today's behavior. **Iron-rule regression test enforces this.**

### Diagnostic engine changes

Two small edits to `src/services/diagnosticEngine.js`:

1. **`runDiagnostic` line ~626 and ~642** — when pushing `questionAnalysis`
   records (both correct + wrong branches), add
   `satPattern: extractSatPattern(q.explanation)` to the record.
2. **`analyzeSkills` line ~870** — initialize `missedPatterns: new Set()`
   on each `skillMap[skillId]`. When a wrong question is encountered,
   if its `satPattern` is non-null, add to the Set. At the end (line
   ~907), serialize: `missedPatterns: [...s.missedPatterns]`.

That's it. No other diagnostic code paths change.

### Dispatcher changes

`src/data/questions/bank/index.js:435 (getTargetedWeaknessSet)`:

```js
const TIER1_PATTERN_THRESHOLD = 8;   // half a round, exact-pattern viable
const TIER2_STYLE_THRESHOLD = 12;    // user-set threshold, sourceStyleRef viable

export const getTargetedWeaknessSet = (
  { weakSkills = [], errorTypes = [], difficultyMix, count = 10, excludeIds = [] }
) => {
  const log = makeLogger('drill-routing');

  // Tier 1: exact SAT Pattern
  const patterns = weakSkills.flatMap(w => w.missedPatterns || []);
  if (patterns.length) {
    const pool = getQuestionsBySatPatterns(patterns, { excludeIds });
    if (pool.length >= TIER1_PATTERN_THRESHOLD) {
      log.info(`Tier 1 (satPattern) matched, pool=${pool.length}`);
      return selectFromPool(pool, count, difficultyMix);
    }
  }

  // Tier 2: derived sourceStyleRef
  const derivedStyles = [...new Set(patterns.map(p => patternToStyle.get(p)).filter(Boolean))];
  if (derivedStyles.length) {
    const pool = getQuestionsByStyles(derivedStyles, { excludeIds });
    if (pool.length >= TIER2_STYLE_THRESHOLD) {
      log.info(`Tier 2 (sourceStyleRef) matched, pool=${pool.length}`);
      return selectFromPool(pool, count, difficultyMix);
    }
  }

  // Tier 3: skill (unchanged from today)
  log.info(`Tier 3 (skill) matched`);
  const skillIds = weakSkills.map(w => w.skillId || w.skill || w);
  let pool = getQuestionsBySkillIds(skillIds, { excludeIds });
  if (pool.length === 0 && weakSkills.length > 0) {
    const domains = [...new Set(weakSkills.map(w => w.domain).filter(Boolean))];
    domains.forEach(d => { pool.push(...getQuestionsByDomain(d, { excludeIds })); });
  }
  return selectFromPool(pool, count, difficultyMix);
};
```

Where `selectFromPool` extracts the existing `difficultyMix + shuffle +
slice count` logic into one helper (DRY across tiers).

### New accessors

```js
export const getQuestionsBySatPatterns = (patterns, opts = {}) => {
  const seen = new Set();
  let results = [];
  patterns.forEach(p => {
    (patternIndex.get(p) || []).forEach(q => {
      if (!seen.has(q.id)) { seen.add(q.id); results.push(q); }
    });
  });
  return applyFilters(results, opts);
};

export const getQuestionsByStyles = (styles, opts = {}) => { /* … */ };
```

And one extracted helper:

```js
const applyFilters = (results, { difficulty, excludeIds = [], limit } = {}) => {
  if (difficulty) results = results.filter(q => q.difficulty === difficulty);
  if (excludeIds.length) results = results.filter(q => !excludeIds.includes(q.id));
  if (limit) results = results.slice(0, limit);
  return results;
};
```

This consolidates the post-filter pattern across all four accessors.

## Validation hooks (protective)

Two small additions to keep the contract from drifting:

1. **`scripts/validateBank.mjs`** (or `npm run bank:validate`) — add a
   check that every bank item has a parseable SAT Pattern in its
   `explanation`. Fail the script if any are missing.
2. **`src/data/practiceTests/__tests__/testBundleIntegrity.test.js`**
   (NEW) — assert that every item across all 12 practice tests has a
   parseable SAT Pattern. Snapshot-style regression guard.

## Implementation order

1. **`extractSatPattern.js`** + isolated unit tests (~8 cases covering
   happy path, whitespace, MathJax, punctuation, null/empty, missing
   header, multiple patterns in one explanation).
2. **`bank/index.js`** — patternIndex + patternToStyle builders at
   module load; `getQuestionsBySatPatterns` + `getQuestionsByStyles`;
   refactor to `applyFilters` helper; cascade in
   `getTargetedWeaknessSet`; constants for thresholds.
3. **`diagnosticEngine.js`** — `runDiagnostic` adds satPattern to
   questionAnalysis; `analyzeSkills` aggregates `missedPatterns`.
4. **Tests** — see Test plan below. Mandatory regression test for
   legacy-weakness path.
5. **Validation hooks** — bank:validate check + test-bundle integrity
   test.
6. **Manual smoke** — complete PT1 in dev, inspect first weakness in
   Firestore via console — has `missedPatterns` array; click "Practice"
   from a focus area — verify Tier N log fires.
7. **Commit + push to main** (per direct-to-main workflow).

## Test plan (40 paths total)

### `src/data/questions/__tests__/extractSatPattern.test.js` (NEW)

- Happy path: `**SAT Pattern: Reverse-Percent**` → `'reverse-percent'`
- Spaces in title: `**SAT Pattern: Sum of Parts Ratio**`
- Punctuation: `**SAT Pattern: Linear (Slope+Intercept)**`
- Whitespace variation: `**SAT Pattern:   Foo   **`
- MathJax in title: `**SAT Pattern: $f(x)$ Evaluation**`
- Multiple patterns in one explanation → returns FIRST
- Missing header → null
- Null/undefined/empty input → null

### `src/data/questions/bank/__tests__/patternIndex.test.js` (NEW)

- All 300 bank items have an extractable satPattern (REGRESSION GUARD)
- `patternIndex` builds correctly (count, key presence)
- `patternToStyle` builds correctly (every bank item with both fields)
- Items missing satPattern (none today) excluded gracefully

### `src/data/questions/bank/__tests__/getTargetedWeaknessSet.test.js` (NEW)

- **Tier 1 hit:** weakness with `missedPatterns: ['<pattern with ≥8 items>']`
- **Tier 1 miss → Tier 2 hit:** pattern pool < 8 BUT derived style ≥ 12
- **Tier 1 + 2 miss → Tier 3:** both pools too thin → skill fallback
- **★REGRESSION★ Legacy weakness (no `missedPatterns`):** returns
  byte-identical items to pre-change skill-only path
- Empty `weakSkills` → empty result
- `excludeIds` respected at each tier
- `difficultyMix` respected at each tier
- Cascade tier ordering verified (mock and inspect which tier fired)

### `src/services/__tests__/diagnosticEngine.test.js` (EXTEND)

- `runDiagnostic` adds `satPattern` to questionAnalysis records (correct + wrong branches)
- `analyzeSkills` aggregates `missedPatterns` per skill
- Two wrong items different patterns same skill → both captured
- Two wrong items same pattern same skill → deduped via Set
- Wrong item with `satPattern: null` → not added
- Strong/correct items don't pollute `missedPatterns`

### `src/data/practiceTests/__tests__/testBundleIntegrity.test.js` (NEW)

- Every item across PT1-PT12 (528 items) has parseable SAT Pattern

### Existing tests stay green

- 854 Jest tests
- `npm run bank:validate` reports 300 items, all valid (plus new SAT Pattern check)

## Failure modes (production)

| Path | Failure | Test? | Error handling? | User impact |
|------|---------|-------|-----------------|-------------|
| Bank item missing SAT Pattern header | Excluded from patternIndex | ✓ (regression guard) | Graceful — fallthrough | None visible |
| Test item explanation malformed | `satPattern: null` | ✓ | Graceful — skip in aggregation | None visible |
| `patternToStyle` lookup miss for a pattern | Style derivation returns undefined | ✓ | Filtered out via `.filter(Boolean)` | None visible |
| Tier 1 pool below threshold | Cascade to Tier 2 | ✓ | Documented cascade | None visible (better targeting still possible at Tier 2) |
| Tier 2 pool below threshold | Cascade to Tier 3 | ✓ | Documented cascade | Identical to today |
| Legacy plan from Firestore | No `missedPatterns` field | ✓ (REGRESSION GUARD) | Cascade short-circuits | Identical to today |
| R&W weakness | No `missedPatterns` (out of scope this batch) | — | Existing R&W path unaffected | None |

**No critical gaps.** Every new code path has both test coverage AND
error handling AND graceful behavior. The cascade is designed so each
tier's failure mode is "fall through to next tier."

## Worktree parallelization

**Sequential implementation, no parallelization opportunity.** Files
touched cluster around `bank/index.js` and `diagnosticEngine.js` — both
must be coherent at commit time. The 6-file scope is small enough that
sequential is faster than worktree setup overhead.

## What already exists (don't rebuild)

- `getTargetedWeaknessSet` cascade pattern — extending with two new tiers
- `getQuestionsBySkillIds`, `getQuestionsByDomain` — reused as Tier 3
- `SKILL_ALIAS_MAP` — Tier 3 already uses it
- `skillIndex`, `domainIndex`, `difficultyIndex` — new indexes follow same pattern
- `runDiagnostic` / `analyzeSkills` skeleton — adding one field
- `makeLogger('drill-routing')` from `src/utils/log.js` — used for cascade observability
- Existing 854-test suite — extending, not rewriting

## NOT in scope

- **Phase 2: Bank expansion to ≥8 items per SAT Pattern + ≥12 items per
  sourceStyleRef.** Current density (~1.5 items/pattern average) means
  Tier 1 will fire rarely in v1 — graceful, but the visible UX delta
  arrives when bank grows. Multi-session lift.
- **R&W exact-match routing.** R&W bank items may or may not carry
  SAT Pattern headers (unverified). Separate audit + dispatcher change.
  Captured as TODO.
- **AdaptivePracticeShell parity.** AdaptivePracticeShell is a separate
  shell from AssignedPracticeShell and uses different mechanics. Captured
  as TODO.
- **`missedPatterns` UI surfacing.** Student doesn't see "you're drilling
  Reverse-Percent" anywhere in v1 — implicit feels less algorithmic.
  Captured as TODO.
- **Tagging topic-flattened items (~664).** They predate the test-bundle
  format and don't have SAT Pattern headers. They participate in Tier 3
  (skill-based fallback) only. No work needed.

## File list (final)

- `src/data/questions/extractSatPattern.js` (NEW)
- `src/data/questions/bank/index.js` (MODIFIED — indexes, accessors, cascade)
- `src/services/diagnosticEngine.js` (MODIFIED — satPattern extract + aggregate)
- `src/data/questions/__tests__/extractSatPattern.test.js` (NEW)
- `src/data/questions/bank/__tests__/patternIndex.test.js` (NEW)
- `src/data/questions/bank/__tests__/getTargetedWeaknessSet.test.js` (NEW)
- `src/services/__tests__/diagnosticEngine.test.js` (EXTEND — add ~50 lines)
- `src/data/practiceTests/__tests__/testBundleIntegrity.test.js` (NEW)
- `scripts/validateBank.mjs` (EXTEND — add SAT Pattern check)

**6 files modified + extended, 5 new files. No test-bundle item edits.
No new script. Down from 18 files in v1 plan.**

## Time estimate (halved per `feedback_dont_pad_estimates.md`)

- Architecture (extractSatPattern + indexes + cascade + diagnosis edits): ~25 min
- Tests (8 + 4 + 8 + 6 + 1 = 27 specs): ~25 min
- Validation hooks: ~10 min
- Verification + ship: ~10 min
- **Total: ~70 min** for the full v1 ship

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | — | — |
| Codex Review | `/codex review` | Independent 2nd opinion | 0 | — | — |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 1 | **CLEAR** | 2 architecture issues resolved, 0 critical gaps, 40 test paths planned, 3 TODOs captured |
| Design Review | `/plan-design-review` | UI/UX gaps | 0 | — | — (no UI in this PR) |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | — | — (internal refactor) |

**UNRESOLVED:** 0
**VERDICT:** ENG CLEARED — ready to implement. No UI scope, so design review is N/A. Not a significant product change, so CEO review is N/A.
