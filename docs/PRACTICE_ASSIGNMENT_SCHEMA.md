# Practice Assignment Schema

How practice questions from the bank are assigned to users inside their study plans.

## Overview

Every generated study plan includes three practice models:

1. **Fixed domain assignments** — concrete MCQ question IDs per domain, persisted in
   the plan as `domainAssignments`. These power the "Strengths & Focus Areas" section
   and launch as fixed assigned practice (not adaptive).
2. **Adaptive practice queue** (Acely-style) — dynamically selects the next question
   based on in-session performance; difficulty adjusts after each answer and missed
   questions return for spaced retry.
3. **Legacy per-week bundles** — deterministic fallback for backward compatibility.

## Service

`src/services/practiceAssignmentService.js` — pure functions, no side effects.

### Key exports

| Function | Purpose |
|---|---|
| `buildWeakSkillPayload(diagnostic)` | Normalizes diagnostic weak skills into `{ skillId, domain, priority, errorType }` sorted by priority |
| `generatePracticeAssignments(opts)` | Legacy assignment generator — returns `targetedQuestionIds`, `practiceAssignments`, and `summary` |
| `resolveAssignedQuestions(ids)` | Resolves persisted IDs back to full question objects; reports stale count |
| `buildStrengthFocusAssignments(opts)` | Builds fixed MCQ question ID bundles per canonical domain for Strengths & Focus Areas |
| `buildAdaptiveQueueSeed(opts)` | Builds the adaptive pool with difficulty buckets from diagnostic weak skills |
| `buildDomainAdaptiveQueueSeed(opts)` | Builds an adaptive pool focused on a single enforced domain, with fallback to other domains |
| `normalizeDomain(raw)` | Maps any domain string (alias, mixed case, display name) to a canonical ID or `null` |
| `getDomainAssignmentPreview(domain, opts)` | Returns a deterministic MCQ-only preview of questions for a domain (for UI display) |
| `CANONICAL_DOMAINS` | Exported constant: `['algebra', 'problem-solving', 'advanced-math', 'geometry']` |
| `createAdaptiveSessionState(seed)` | Creates a fresh in-memory session state for an adaptive practice run |
| `getNextAdaptiveQuestion(seed, state)` | Returns the next question based on current difficulty, streak, and retry queue |
| `applyAdaptiveResult(state, qId, correct, isRetry)` | Updates session state after an answer — adjusts difficulty, schedules retries |
| `evaluateAdaptiveCompletion(state)` | Checks both-rule completion: answered >= target AND mastery >= threshold |
| `serializeAdaptiveState(state)` | Converts runtime state (with Sets) to JSON-safe format for persistence |
| `deserializeAdaptiveState(raw)` | Restores persisted state back to runtime format |

## Adaptive Practice (primary — Acely-style)

### Queue seed

Built at plan generation time by `buildAdaptiveQueueSeed()` and stored in the
artifact as `adaptivePractice`:

```json
{
  "poolIds": ["bank-off-alg-0001", "bank-off-geo-0022", ...],
  "byDifficulty": {
    "easy": ["bank-off-alg-0001", ...],
    "medium": ["bank-off-alg-0045", ...],
    "hard": ["bank-off-geo-0022", ...]
  },
  "weakSkillIds": ["slope-intercept-form", "pythagorean-theorem"],
  "weakDomains": ["algebra", "geometry"],
  "sessionLength": 15,
  "targetQuestions": 15,
  "minMasteryPercent": 80,
  "createdAt": "2026-03-15T..."
}
```

The pool is built using the same three-phase waterfall as legacy assignments
(skill-targeted → domain fallback → global fill), all MCQ-filtered, with
seeded shuffling for determinism.

### Session state

Created at runtime by `createAdaptiveSessionState()`:

| Field | Type | Description |
|---|---|---|
| `cursor` | number | Internal position counter |
| `currentDifficulty` | `'easy'` \| `'medium'` \| `'hard'` | Active difficulty level |
| `streak` | number | Consecutive correct (positive) or incorrect (negative) count |
| `answered` | Array | `{ id, correct, isRetry }` log of all answers |
| `correct` | number | Total correct count |
| `incorrect` | number | Total incorrect count |
| `retryQueue` | Array | `{ id, serveAt }` entries for missed questions pending retry |
| `seenIds` | Set | Question IDs already served (prevents repeats except retries) |
| `sessionLength` | number | Target number of questions per session (default 15) |
| `targetQuestions` | number | Minimum questions before completion can be evaluated (default 15) |
| `minMasteryPercent` | number | Minimum mastery percentage required for completion (default 80) |
| `sessionsCompleted` | number | Count of completed adaptive sessions |
| `isCompleted` | boolean | Whether the assignment is complete (both conditions met) |
| `completedAt` | string/null | ISO timestamp when completion was achieved |

### Question selection algorithm

1. If the retry queue has an entry whose `serveAt` <= current answered count → serve that retry.
2. Otherwise pick the first unseen question from the current difficulty bucket.
3. If the current bucket is exhausted → try adjacent difficulty buckets.
4. Session ends when `answered.length >= sessionLength` and no retries remain.

### Difficulty adaptation

- **Step up**: after 2 consecutive correct answers, difficulty moves up one level.
- **Step down**: after 1 incorrect answer, difficulty moves down one level.
- Difficulty levels: `easy` → `medium` → `hard`.

### Missed-question retry

When a student answers incorrectly (first attempt, not already a retry), the question
is added to `retryQueue` with `serveAt = answered.length + 4` (spaced 4 questions later).

### Completion rules (both required)

Assignment is complete only when **both** conditions are met:

1. `answered.length >= targetQuestions` (default 15)
2. `Math.round(correct / answered.length * 100) >= minMasteryPercent` (default 80%)

Evaluated by `evaluateAdaptiveCompletion(state)` which returns:

```json
{
  "isComplete": true,
  "mastery": 87,
  "answeredCount": 15,
  "targetQuestions": 15,
  "minMasteryPercent": 80,
  "meetsTarget": true,
  "meetsMastery": true
}
```

If the student reaches the target count but not mastery, the session continues
serving more questions until either mastery is met or the pool is exhausted.

### Persistence and resume

- `adaptivePracticeState` is persisted in the artifact after each answer via
  `patchAdaptivePracticeState(userId, artifactId, serializedState)`.
- On page reload, `startAdaptivePractice()` in App.jsx checks for persisted
  state with `answered.length > 0 && !isCompleted` and resumes via
  `deserializeAdaptiveState()`.
- The root preview document carries a lightweight `adaptiveProgress` summary:
  `{ answered, target, mastery, isCompleted, completedAt }`.

### Study Plan CTA transitions

| State | CTA |
|---|---|
| No answers yet | "Start Adaptive Practice" |
| In progress (answered > 0, not complete) | "Resume Adaptive Practice" |
| Completed (both rules met) | "Completed" badge, no button |

### Fixed domain assignments (Strengths & Focus Areas)

The **primary** practice model for the Strengths & Focus Areas section. Every plan
stores a `domainAssignments` object keyed by canonical domain, each containing a
fixed set of MCQ question IDs persisted at plan generation time.

#### Schema

```json
{
  "domainAssignments": {
    "algebra": {
      "domain": "algebra",
      "questionIds": ["bank-off-alg-0001", "bank-off-alg-0015", ...],
      "count": 10,
      "source": "focus"
    },
    "problem-solving": {
      "domain": "problem-solving",
      "questionIds": [...],
      "count": 10,
      "source": "focus"
    },
    "advanced-math": {
      "domain": "advanced-math",
      "questionIds": [...],
      "count": 10,
      "source": "strength"
    },
    "geometry": {
      "domain": "geometry",
      "questionIds": [...],
      "count": 10,
      "source": "strength"
    }
  }
}
```

| Field | Type | Description |
|---|---|---|
| `domain` | string | Canonical domain ID |
| `questionIds` | string[] | Fixed MCQ question IDs assigned to this domain |
| `count` | number | Length of `questionIds` |
| `source` | `'focus'` \| `'strength'` | Whether this domain is a weak area or a strength |

#### `buildStrengthFocusAssignments(opts)`

| Parameter | Type | Default | Description |
|---|---|---|---|
| `diagnostic` | Object | required | Output of `diagnosticEngine.runDiagnostic()` |
| `seed` | string | `'domain-assign'` | Deterministic seed |
| `countPerDomain` | number | 10 | Number of questions to assign per domain |
| `excludeIds` | string[] | `[]` | IDs to skip (e.g. from legacy assignments) |

Guarantees:
- All assigned questions are MCQ-only (choices array length >= 2).
- No duplicate IDs across domains.
- Same seed + same diagnostic → same assignments.
- Weak domains are tagged `source: 'focus'`, strong domains `source: 'strength'`.

#### Launch payload (fixed assigned)

```js
onStartPractice(null, null, {
  questionIds: domainAssignments[domain].questionIds,
  source: 'study-plan-assigned',
  label: 'Algebra Assigned Practice',
})
```

This hits the `startAssignedPractice` branch in App.jsx (not adaptive).

#### UI rendering

Both `StudyPlanDashboard` and `ImmersiveStudyPlanView` resolve domain assignments:

1. Read `studyPlan.domainAssignments[domain].questionIds`.
2. Show first 2-3 questions as preview rows (resolved via `getQuestionById`).
3. Show `+ N more questions` count.
4. CTA button sends the full `questionIds` array for fixed assigned launch.

#### Domain fallback for display

The UI resolves which domains to show from two sources:

1. `Object.keys(studyPlan.domainAssignments)` (preferred).
2. Domains from `studyPlan.weaknesses` and `studyPlan.strengths` (normalized).
3. All four `CANONICAL_DOMAINS` as a final fallback.

This ensures at least one domain row is always visible.

### Domain-enforced adaptive practice

Adaptive sessions can still be launched from the general "Adaptive Practice" section.
Per-domain adaptive sessions remain available via the `buildDomainAdaptiveQueueSeed`
function but are **not** the default for Strengths & Focus Areas CTAs.

#### `buildDomainAdaptiveQueueSeed(opts)`

| Parameter | Type | Default | Description |
|---|---|---|---|
| `enforcedDomain` | string | required | Domain ID to prioritize (`'algebra'`, `'geometry'`, etc.) |
| `existingPoolIds` | string[] | `[]` | IDs from the generic adaptive pool (for reference, not exclusion) |
| `seed` | string | `enforcedDomain` | Deterministic seed |
| `poolSize` | number | 60 | Target pool size |

Returns the same shape as `buildAdaptiveQueueSeed` plus an `enforcedDomain` field.
Pool is filled domain-first, with fallback to other domains when the target domain
has fewer than 20 MCQ questions.

### Precedence (onStartPractice payloads)

| Payload | Behavior | Used by |
|---|---|---|
| `questionIds: [...]` | Fixed assigned practice (MCQ set) | Strengths & Focus domain CTAs |
| `adaptive: true, enforcedDomain: 'algebra'` | Domain-focused adaptive session | (available but not default for domain CTAs) |
| `adaptive: true` (no domain) | Generic adaptive session (resume-aware) | General Adaptive Practice CTA |

### Domain normalization

All domain values flowing through the system are normalized via `normalizeDomain(raw)`:

| Input example | Normalized output |
|---|---|
| `'algebra'`, `'ALGEBRA'`, `'Heart of Algebra'` | `'algebra'` |
| `'problem-solving'`, `'Problem Solving and Data Analysis'` | `'problem-solving'` |
| `'advanced-math'`, `'Passport to Advanced Math'` | `'advanced-math'` |
| `'geometry'`, `'Geometry & Trigonometry'`, `'Additional Topics in Math'` | `'geometry'` |
| `'english'`, `null`, `undefined` | `null` |

Normalization is applied:
- In `StudyPlanDashboard` and `ImmersiveStudyPlanView` when grouping strengths/weaknesses by domain.
- In `App.jsx` when resolving `enforcedDomain` before building a domain queue.
- In `getDomainAssignmentPreview` before querying the question bank.

### Domain assignment preview

`getDomainAssignmentPreview(domain, { seed, count })` returns a read-only preview
of MCQ questions for display in the Strengths & Focus Areas UI:

```json
{
  "domain": "algebra",
  "questions": [{ "id": "bank-off-alg-0001", "question": "...", "choices": [...], "difficulty": "medium" }, ...],
  "total": 523
}
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `domain` | string | required | Any domain string (normalized internally) |
| `seed` | string | domain name | Deterministic seed for consistent ordering |
| `count` | number | 3 | Number of preview questions to return |

Guarantees:
- All returned questions are MCQ (choices array length >= 2).
- Same seed + same domain always returns the same preview.
- Returns `{ domain: null, questions: [], total: 0 }` for unrecognized domains.

### Domain fallback in Strengths & Focus Areas

The UI resolves domains to display from three sources in priority order:

1. `studyPlan.strengths[].domain` and `studyPlan.weaknesses[].domain` (normalized).
2. `studyPlan.adaptivePractice.weakDomains` (normalized).
3. All four `CANONICAL_DOMAINS` as a final fallback.

This ensures at least one domain with assigned practice previews is always visible,
even when diagnostic data has incomplete or missing domain metadata. This three-tier
fallback is applied identically in both the default and immersive Study Plan variants.

## Legacy Assignments (fallback)

### `generatePracticeAssignments` options

| Parameter | Type | Default | Description |
|---|---|---|---|
| `diagnostic` | Object | required | Output of `diagnosticEngine.runDiagnostic()` |
| `weekCount` | number | 4 | Number of weeks in the plan |
| `excludeIds` | string[] | [] | Question IDs to skip (already completed) |
| `seed` | string | current timestamp | Deterministic seed (typically `testId-generatedAt`) |
| `questionsPerWeek` | number | 10 | Target questions per weekly bundle |
| `difficultyMix` | Object | `{ easy: 0.30, medium: 0.45, hard: 0.25 }` | Fraction allocation by difficulty |

### Selection Algorithm

Three-phase waterfall:

1. **Skill-targeted** — `getQuestionsBySkillIds` using weak-skill IDs from the diagnostic, seeded shuffle, then difficulty-mix slicing.
2. **Domain fallback** — if phase 1 yields fewer than needed, fills from weak domains with seeded shuffle.
3. **Global fill** — round-robin across all four domains to guarantee at least 15 total questions.

All shuffling uses a seeded LCG (`s = (s * 1103515245 + 12345) & 0x7FFFFFFF`) — same seed always produces the same assignment.

## Plan payload fields

```json
{
  "domainAssignments": {
    "algebra": { "domain": "algebra", "questionIds": [...], "count": 10, "source": "focus" },
    "problem-solving": { ... },
    "advanced-math": { ... },
    "geometry": { ... }
  },

  "adaptivePractice": {
    "poolIds": [...],
    "byDifficulty": { "easy": [...], "medium": [...], "hard": [...] },
    "weakSkillIds": [...],
    "weakDomains": [...],
    "sessionLength": 15,
    "createdAt": "..."
  },

  "targetedQuestionIds": ["bank-off-alg-0001", ...],

  "practiceAssignments": [
    {
      "weekNumber": 1,
      "questionIds": [...],
      "count": 10,
      "domainBreakdown": { ... },
      "difficultyBreakdown": { ... }
    }
  ],

  "assignmentSummary": { ... }
}
```

## MCQ filtering

Only questions with a `choices` array of length >= 2 are included in both adaptive
pools and legacy assignments. Fill-in / free-response questions are excluded at
selection time so every assigned question can be rendered as a standard MCQ item.

## Persistence

### Artifact

The full `domainAssignments`, `adaptivePractice`, `targetedQuestionIds`,
`practiceAssignments`, and `assignmentSummary` are persisted inside the artifact's
`plan` payload in `progress/{userId}/studyPlanArtifacts/{artifactId}`.

### Preview

The root progress document's `studyPlanPreview` includes:

```json
{
  "totalAssignedQuestions": 40,
  "adaptivePoolSize": 80
}
```

### Merge safety

During hybrid merge (`studyPlanMerger.mergeHybridPlan`), deterministic fields
(`domainAssignments`, `adaptivePractice`, `targetedQuestionIds`,
`practiceAssignments`, `assignmentSummary`) are explicitly preserved — the AI plan
cannot overwrite them.

## UI consumption

`StudyPlanDashboard.jsx` (default variant) and `ImmersiveStudyPlanView.jsx`
(immersive variant) both render three practice surfaces:

1. **Strengths & Focus Areas** — reads `domainAssignments` for per-domain fixed
   assigned practice cards with preview rows and "Practice {Domain}" buttons.
2. **Adaptive Practice** — if `adaptivePractice.poolIds` exists → renders
   "Start Adaptive Practice" button with pool size and weak-skill count badges.
3. **Legacy Targeted Practice** — fallback if no adaptive pool; uses `targetedQuestionIds`.

## Adaptive-practice launch flow

### Trigger

`StudyPlanDashboard` or `ImmersiveStudyPlanView` calls:

```js
onStartPractice(null, null, { source: 'study-plan-adaptive', adaptive: true })
```

### App handler

`App.jsx` intercepts `opts.adaptive` in every `onStartPractice` handler:

```js
onStartPractice={(moduleId, sectionName, opts) => {
  if (opts?.adaptive) { startAdaptivePractice(); return; }
  // existing module/section flow
}}
```

### `startAdaptivePractice(opts?)`

1. If `opts.enforcedDomain` is set → builds a domain-focused queue via `buildDomainAdaptiveQueueSeed`.
   Otherwise reads `studyPlan.adaptivePractice` queue seed and checks for persisted state to resume.
2. Creates a fresh `adaptiveSessionState` via `createAdaptiveSessionState()` (or deserializes persisted state for resume).
3. Calls `getNextAdaptiveQuestion()` for the first question.
4. Sets `practiceState` with `practiceMode: 'adaptive'` and `adaptiveDomainLabel` (if domain-enforced).
5. Sets `activeSection` to `'__adaptive__'`.
6. Routes to `view='practice'`, which renders `AdaptivePracticeShell` (test-style UI).

### Answer-by-answer loop

In `handleNextQuestion`, when `practiceMode === 'adaptive'`:

1. `applyAdaptiveResult()` records the answer and updates difficulty/streak/retries.
2. `getNextAdaptiveQuestion()` picks the next question from the updated state.
3. The new question is appended to `shuffledQuestions` and the index advances.
4. When the engine returns `isComplete: true`, the results screen is shown.

### Adaptive practice test-style UI

Adaptive practice sessions render in a dedicated **test-style shell** (`AdaptivePracticeShell`)
rather than the generic practice renderer. The shell provides:

- **Dark top bar** with session title, question counter, answered/target progress, mastery %.
- **Progress bar** showing answered/target completion and mastery threshold.
- **Question grid navigator** (collapsible) showing all served questions with color-coded answer status and flagged indicators.
- **Split workspace**: left panel for question stem/diagram/formula, right panel for answer choices with inline feedback.
- **Answer-choice elimination** (cross-out) for test-taking strategy.
- **Mark for review** ("Come Back Later") flag per question, visible in the grid.
- **Prev/Next navigation** among already-served questions.
- **Bottom nav bar** with Previous, Flag, and Next/Submit controls.

Question selection, difficulty adaptation, retry scheduling, and completion logic remain
unchanged — the shell is purely a UI layer over the existing adaptive engine.

### Behavior differences by practice mode

| Aspect | Module/section practice | Domain assigned practice | Legacy assigned practice | Adaptive practice |
|---|---|---|---|---|
| Back button | → Learn view | → Study Plan view | → Study Plan view | → Study Plan view |
| Header title | Section name | "{Domain} Assigned Practice" | Assignment label | "Adaptive Practice" or "Adaptive Practice — {domain label}" |
| UI shell | Generic practice renderer | Generic practice renderer | Generic practice renderer | Test-style AdaptivePracticeShell |
| Question selection | Fixed set from module | Fixed set from domainAssignments IDs | Fixed set from IDs | Dynamic per-answer |
| Question navigation | Sequential only | Sequential only | Sequential only | Grid + Prev/Next among served questions |
| Answer elimination | No | No | No | Yes (cross-out choices) |
| Mark for review | No | No | No | Yes (flag icon per question) |
| Difficulty | Static | Static | Static | Adjusts after each answer |
| Missed-question retry | No | No | No | Yes (spaced at +4 questions) |
| Review queue writes | Yes | Skipped | Skipped | Skipped |
| `recordPracticeAttempt` | Yes | Skipped | Skipped | Skipped |
| Results "action" | Try Again (same set) | Try Again (same set) | Try Again (same set) | New Session (fresh queue) |
| Session length | All questions in set | All assigned IDs for domain | All questions in set | Configurable (default 15) |

## Artifact hydration

`useProgress.js` prioritizes artifact-backed plans when `currentStudyPlanArtifactId`
exists on the progress document. This ensures plans containing `adaptivePractice`
are loaded even when the legacy root `studyPlan` field is stale or empty.

Hydration priority:

1. If `artifactId` exists → fetch artifact, use its plan.
2. If artifact fetch fails or returns no weeks → fall back to root `studyPlan`.
3. If no `artifactId` and no root plan → query latest artifact.

## Determinism guarantee

- Same `seed` + same `diagnostic` → same adaptive pool and same legacy assignment every time.
- The seed is `"${diagnostic.testId}-${generatedAt}"`, so pools are stable within a plan version but rotate on each regeneration.

## Tests

### `src/services/__tests__/practiceAssignmentService.test.js`

- Weak-skill payload construction and filtering
- Non-empty output, minimum question guarantee
- Weekly grouping with correct breakdowns
- No duplicate IDs
- Exclusion support
- Deterministic seeding (same seed → same result, different seed → different result)
- Domain fallback and global fill behavior
- Empty diagnostic handling
- Stale ID resolution
- **Adaptive queue seed**: pool generation, difficulty buckets, determinism, MCQ guarantee, completion policy fields
- **Adaptive session lifecycle**: initial state, question serving, streak tracking, difficulty stepping up/down, missed-question retry scheduling, session completion, no-duplicate guarantee
- **Adaptive state serialization**: round-trip through serialize/deserialize, completion field preservation, default fallbacks
- **Completion evaluator**: both-rule logic (target + mastery), boundary conditions, partial-met scenarios
- **Resume from persisted state**: serialize → deserialize → continue session determinism, initial state inherits policy
- **Domain-enforced adaptive queue**: null when no domain, pool generation for specific domain, MCQ-only guarantee, determinism with same seed, different pools for different domains, difficulty buckets, completion policy fields, full session lifecycle with domain seed, fallback when domain has few questions
- **normalizeDomain**: canonical ID mapping, alias handling, case-insensitive matching, partial match, null for invalid inputs
- **CANONICAL_DOMAINS**: contains all four SAT math domains
- **getDomainAssignmentPreview**: valid domain returns MCQ preview, deterministic with seed, normalizes input, respects count, all four domains have questions, different domains produce different previews, null/invalid returns empty
- **Adaptive test-style UI contract**: domain queue provides MCQ pool for shell, session tracks answered/correct for progress bar, session has completion policy fields, evaluateAdaptiveCompletion returns structured result, serialize/deserialize preserves state for navigation, adaptive queue delivers questions one-by-one, all served questions have choices array, domain CTA payload normalizes correctly
- **buildStrengthFocusAssignments**: entry for every canonical domain, MCQ-only guarantee, deterministic with same seed, weak domains tagged as focus, count matches questionIds length, no duplicate IDs across domains, respects countPerDomain, respects excludeIds, different seed produces different assignment, CTA contract (questionIds payload for fixed launch)

### `src/services/__tests__/assignedPracticeFlow.test.js`

- MCQ readiness of resolved questions (id, stem, choices, correctAnswer)
- All resolved questions have a choices array
- Stale ID counting
- Weekly bundle shape and resolveability
- Weekly uniqueness
- Difficulty/domain breakdown metadata
- Launch contract (resolved objects usable by renderer)
- Artifact hydration precedence (artifact preferred, legacy fallback, no-assignments fallback)
