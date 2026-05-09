# CLAUDE.md — PerformSAT orientation for Claude Code (and humans)

PerformSAT is a digital-SAT prep web app: students take adaptive practice tests, get a diagnostic-driven study plan, drill weak skills, and track score trajectory toward a target. Built on Create React App + Firebase. ~256 JS/JSX files in `src/` (~9.7MB).

The codebase is mid-scale, mostly mature, with one large orchestrating file (`src/App.jsx`, ~11k lines) that owns view state and practice-session state. The recent direction is closing UX gaps vs Acely AI while surfacing PerformSAT's deeper diagnostic engine.

This file is the orientation document for new contributors and LLM agents. Keep it up to date when architecture moves.

## Quick start

```bash
npm install
npm start          # dev server (CRA, port 3000)
npm test           # Jest watcher
CI=true npx react-scripts test --watchAll=false   # run all tests once
```

Firebase config lives in `src/firebase/config.js`. To run against a real project you need a `.env.local` with the Firebase keys (template at `.env.local.template`). To dogfood the study plan or drill flow you currently need a real Firebase project + a seeded `schools` doc — a Firebase emulator + seed script is on the Day-6 DX checklist of the current plan and not yet shipped.

## The big picture

```
Student logs in
   │
   ▼
StudentDashboard  ──────── Default landing. Two tabs: "Dashboard" + "Study Plan"
   │   ├─ Dashboard tab → widgets (perf grid, projected score, AI Practice Banner)
   │   └─ Study Plan tab → <StudyPlanDashboard />
   │
   ▼  (student takes a practice test)
PracticeTest.jsx  ──────── Full-length test runner. Builds groundTruth diagnosis
                            on completion, persists studyPlanArtifact to Firestore.
   │
   ▼  (test completes)
diagnosticEngine.js  ──── Classifies errors (6-class taxonomy), aggregates skill
                            accuracy, builds weaknesses[]/strengths[]/etc.
   │
   ▼
studyPlanGenerator.js ── Generates week-by-week plan from the diagnosis.
   │
   ▼  (drill flow)
StudyPlanDashboard.jsx ── "Skills to Improve" cards. Each card calls
                            getTargetedWeaknessSet() with the weak skill →
                            returns drill question IDs.
   │
   ▼  (student clicks Practice)
AssignedPracticeShell.jsx ─ The PRODUCTION DRILL PATH. Renders the question +
                            feedback panel for assigned (study-plan-driven) drills.
```

## The three practice shells (important — pick the right one)

There are three components that look like "the drill UI." They serve different purposes:

| Shell | Purpose | Mount path | When to use |
|-------|---------|------------|-------------|
| `AssignedPracticeShell.jsx` | **Production drill path** for study-plan focus areas | `App.jsx` view='practice', `practiceMode='assigned'` (lines ~9902-9926) | Anything the student reaches via "Practice" button on Study Plan |
| `AdaptivePracticeShell.jsx` | Alternate adaptive practice (difficulty adjusts) | `App.jsx` view='practice', `practiceMode='adaptive'` | The adaptive flow launched separately. Not study-plan-driven. |
| `PracticeTest.jsx` | Full-length timed practice test | `App.jsx` view='takingTest' | Only for full mock tests, not drills |

When the plan says "add a button to the drill flow" or "after a wrong answer in practice," it means **AssignedPracticeShell**. `QuestionRenderer.jsx` is just a math/text segment renderer — no answer state, no feedback panel.

The mutation rules also matter: `AssignedPracticeShell` is a **controlled component** with no local state for the question list. Session state (the `shuffledQuestions` array, current index, answers) lives in `App.jsx` as `practiceState`. To insert / advance questions mid-session, the handler MUST live in `App.jsx` and the shell receives a callback prop.

## The data flow that matters most

```
PracticeTest finishes
   │
   ▼
buildGroundTruthDiagnosis(diagReport)  ─── PracticeTest.jsx:41
   │  builds: { strengths, weaknesses, calculatorDependency, ... }
   │  ★ weakSkills entries are the DRILL-shape, fed into:
   │
   ▼
enrichPlanWithGroundTruth(plan, groundTruth)  ─── PracticeTest.jsx:140
   │  plan.weaknesses = groundTruth.weaknesses
   │  plan.targetedQuestionIds = getTargetedWeaknessSet(...)
   │
   ▼
studyPlanArtifact persisted to Firestore  (useProgress hydrates it)
   │
   ▼
StudyPlanDashboard renders weaknesses → calls getTargetedWeaknessSet
   │  per weakness → routes by weakness.section ('math' | 'rw')
   │
   ▼  ★ section-tag contract (Day 0 of Acely-parity batch — see below)
math weaknesses → src/data/questions/bank/getTargetedWeaknessSet
rw weaknesses   → (currently 'Drill coming soon'; lands in item #1)
```

## The weakness shape contract

Every drill-shape weakness on `studyPlan.weaknesses` carries a `section` field:

```js
{
  skillId: 'slope-intercept-form',         // canonical skill ID
  skill: 'Slope-intercept form',           // display name
  evidence: '4/6 correct, primary error: ...',
  accuracy: 42,                            // testAccuracy %
  errorType: 'Conceptual gap',
  domain: 'algebra',                       // e.g. 'algebra' | 'craft-and-structure'
  modules: ['module-1'],                   // legacy plural — modules where skill appears
  sections: [...],                         // legacy plural — same axis as `modules`
  section: 'math' | 'rw',                  // ← Day 0 contract (test subject axis)
}
```

Read with the selector module to apply the rollback-safety default (legacy weaknesses without `section` are treated as math):

```js
import { getMathWeaknesses, getRWWeaknesses, getWeaknessSection }
  from '@/services/selectors/weaknesses';
```

The legacy `sections` (plural array) and the new `section` (singular string) are **different axes**. `sections` is the modules-where-the-skill-appears list; `section` is math vs R&W. Don't conflate them.

The diagnostic adapter in `services/scoring/diagnosticAdapter.js` builds a **separate** narrative-shape weaknesses array (`{id, name, why, proof, impact, severity}`) for diagnostic-report rendering. That's not the same data as `plan.weaknesses` and isn't fed into `getTargetedWeaknessSet`. Don't confuse the two.

## What already exists (don't rebuild)

| Capability | Where | State |
|------------|-------|-------|
| Question banks (math + R&W) | `src/data/questions/bank/index.js` (math, 664 items) and `src/data/practiceTests/practiceTest{N}RW.js` (R&W, 12 test bundles ~648 items, embedded — not yet flattened) | Math: production. R&W: source data ready, flatten lands in item #1. |
| 6-class error taxonomy | `src/services/diagnosticEngine.js:83-118` | Built. Surfaces as small badges only — wider UI surfacing is on the current Acely-parity ship list. |
| Prediction engine + validation history | `src/services/predictionEngine.js` | Built. Currently only consumed by `AiTutorChat.jsx`. Visible-UI surface is on the current ship list. |
| Intervention tracker | `src/services/interventionTracker.js` | Built. Same: only consumed by AiTutorChat. |
| 4 coach modes | `src/services/aiCoachModes.js` (hint ladder, mistake replay, teach-back, exam strategy) | Built. `CoachModePicker.jsx` exists but is currently unused. |
| Study plan tab on homepage | `StudentDashboard.jsx:73-305` (activeTab state + tab bar + Study Plan tab mount) | Shipped 2026-03-27 (prior approved design). |
| Trend / longitudinal analysis | `src/services/studyPlanMerger.js`, `trendContextBuilder.js` | Built. Persistent-weakness escalation works; surfaces as a small banner. |
| Pacing analysis | `src/services/pacingService.js` | Built. PacingDrillCard.jsx component exists but is not yet wired into the dashboard. |
| Daily review queue | `src/services/dailyReviewEngine.js`, `DailyReviewCard.jsx` | Built; mounts on dashboard. Streak tracking lives here. |

## Canonical files (do not duplicate)

- `src/App.jsx` — the entrypoint mount target. It IS large (~11k lines). Items #2 and #4 of the current ship list both touch it. A `<DashboardShell>` extraction is on the deferred TODOS list — not in this batch.
- `src/index.js:6` — the React entrypoint imports `./App` (resolves to `src/App.jsx`).
- `src/components/StudyPlanDashboard.jsx` — the active study plan view. Both `App.jsx:9539` and `StudentDashboard.jsx:305` mount it.

Recently removed (see git log for details — Day 0 of the Acely-parity batch):

- `src/components/ImmersiveStudyPlanView.jsx` — defined but never imported. Use `StudyPlanDashboard.jsx`.
- `src/data/questions/bank/generatedOfficial.js` — 1,750 incoherent regex-rewritten items. Pipeline parked at `scripts/officialQuestionBankPipeline.mjs`. See `src/data/questions/bank/index.js` lines 7-14 for the why.
- Root-level dead duplicates: `App.jsx` (root), `App_1.jsx`, `src/App.old.jsx`, root-level `DashboardDiagnosticWidget.jsx`, `DiagnosticReport.jsx`, `DiagnosticReport_1.jsx`, `PracticeTest.jsx`, `StudentDashboard.jsx`, `replace_script.js`, `replace_script_colors.js`, `update_app.py`.

## Conventions

### Feature flags

Use `useFeatureFlag(key)` from `src/hooks/useFeatureFlag.js`. CRA-style env vars (`process.env.REACT_APP_FF_*`) with localStorage runtime override (`ff:<key>`). For Jest, use `setFeatureFlagForTest(key, value)`.

```js
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
const enabled = useFeatureFlag('todaysTasks');
```

### Selectors

Pure read accessors over `studyPlan` and similar shapes live under `src/services/selectors/`. The first one is `weaknesses.js` (Day 0). When you find yourself destructuring the same shape in multiple components, extract a selector here.

### JSDoc

New exported functions get a 4-8 line JSDoc with `@param`, `@returns`, a one-sentence "what it does", and a one-line "when to use it." Examples in `src/hooks/useFeatureFlag.js` and `src/services/selectors/weaknesses.js`.

### Tests

Unit tests live next to source as `__tests__/X.test.js`. Use `CI=true npx react-scripts test --watchAll=false --testPathPattern="..."` to run a subset. Two pre-existing failures are baseline — `diagnosticAdapter.test.js` (transitions block) and `diagnosticNarrativeContract.test.js` (Firebase/undici jest load error) — neither is caused by anyone's recent work.

### Scripts of note

| Command | What it does |
|---------|--------------|
| `npm test` | Jest watcher |
| `npm run bank:validate` | Validate math bank shape + uniqueness + skill coverage |
| `npm run bank:test` | Pipeline self-tests for the (parked) generatedOfficial pipeline |
| `node scripts/validateRWBank.mjs --all` | Validate R&W test-bundle authenticity / passage uniqueness |
| `npm run tabs:validate` | Validate lesson content tabs |

## Ship list (current — Acely-parity batch, May 2026)

The full plan + four-phase /autoplan review is at `~/.gstack/projects/thehareshbhatia-tech-PerformSAT/hareshbhatia-main-plan-20260509-132835.md`. Brief summary:

- **Day 0 (this commit batch):** section-tag weakness contract, `useFeatureFlag` hook, weaknesses selectors, dead-code cleanup, this CLAUDE.md.
- **Day 1-2:** R&W focus area drills — flatten R&W bank, extend `diagnosticEngine` for R&W weaknesses, write `RW_SKILL_ALIAS_MAP`, dispatcher routes by section.
- **Day 3:** "Generate similar question" button in `AssignedPracticeShell`, brand color resolution (orange `#ea580c` → token), mobile collapse for the shell.
- **Day 4:** Today's Tasks hero on Dashboard tab (replaces the AI Practice Banner), wire `DiagnosticReport.jsx` to `onViewFullDiagnosis`, session-adherence streak metric.
- **Day 5:** Predicted vs Actual card, Hand-Authored stamp on every drill question, Diagnostic Sentence below focus areas, Calendar Strip days-until-test, two-typeface lockup.
- **Day 6:** DX polish — Firebase emulator + seed, README update, error-logging convention, `.env.example`, JSDoc convention applied, 375px mobile pass.

Killed: a generic persistent header (replaced by Calendar Strip + Predicted vs Actual data) and a plan-updated animation (replaced by typographic delta line).

## Skill routing for Claude Code

When the user's request matches a /skill, invoke it with the Skill tool first instead of free-handing the work:

- "ship", "deploy", "create a PR" → invoke `/ship`
- "qa", "test the site", "find bugs" → invoke `/qa`
- "review my diff", "code review" → invoke `/review`
- "investigate", "why is this broken" → invoke `/investigate`
- "design audit", "visual polish" → invoke `/design-review`
- "plan review", "is this plan good" → invoke `/plan-eng-review` or `/autoplan`
- "what did we ship", "weekly retro" → invoke `/retro`
- "checkpoint", "where was I" → invoke `/checkpoint`

Anything not on this list, just answer — don't force a skill match.
