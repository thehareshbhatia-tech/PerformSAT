<!-- /autoplan restore: thehareshbhatia-tech-PerformSAT/main-autoplan-restore-(latest).md -->
# Exam Preview Tier — Plan

**Status:** DRAFT (replaces the rejected `MATH_BANK_REBUILD_PLAN.md`)
**Owner:** Claude Code (Opus 4.7)
**Date:** 2026-05-10
**Direction:** Augment, not replace (decided at autoplan premise gate)

## Goal

Add an **Exam Preview** tier — an opt-in, clearly labeled practice surface that lets students drill against authentic College Board content from the Educator Question Bank. The **production drill bank** (664 hand-authored items in `src/data/questions/bank/`) stays untouched.

## Why this shape

- **Production drill bank stays measurement-clean.** Diagnostic engine + Predicted vs Actual continue to use only PerformSAT-authored items. Zero contamination of the diagnostic signal.
- **Students get authentic CB practice** — they ask for it; CB items are the gold-standard prep surface.
- **AUTHORING_SPEC.md unchanged.** Existing copyright posture preserved for production. Exam Preview gets its own clearly-scoped policy doc.
- **IP exposure is bounded** — only the Exam Preview tier carries CB content, with explicit copyright labeling and an opt-in flow.
- **Smaller blast radius than rebuild** — production bank is in-place; only net-new code is Exam Preview tier.

## Architecture

### File layout

```
src/data/questions/
├── bank/                              # PRODUCTION (unchanged)
│   ├── algebra.js, advancedMath.js, geometry.js, problemSolving.js
│   ├── AUTHORING_SPEC.md
│   └── index.js                       # Production bank selectors (unchanged)
│
└── examPreview/                       # NEW — separate namespace
    ├── educator.js                    # CB educator-bank items, transformed
    ├── EXAM_PREVIEW_POLICY.md         # Copyright + usage policy for this tier
    ├── index.js                       # Exam Preview selectors (own API)
    └── __tests__/

src/components/
└── ExamPreviewSurface.jsx             # NEW — opt-in entry + labeled question card

scripts/
└── sources/educatorBank/transform.mjs # NEW — JSON → examPreview/educator.js
```

### Bank tiering

| Tier | Source | Where | Used by |
|------|--------|-------|---------|
| **Production** | Hand-authored (664 items) | `bank/index.js` → `questionBank` | `getTargetedWeaknessSet` (drill flow), Try-Similar, study plan focus areas |
| **Exam Preview** | CB Educator Bank (~928 items after figure-drop) | `examPreview/index.js` → `examPreviewBank` | Only `ExamPreviewSurface` |

**Iron rule:** the diagnostic engine, Predicted vs Actual card, and study plan generator NEVER read from `examPreview/`. That isolation preserves measurement integrity.

### Schema (Exam Preview items)

```javascript
{
  // Same as production schema (so renderers can reuse)
  id: 'exam-preview-cb-{cbExternalId}',
  domain: 'algebra' | 'problem-solving' | 'advanced-math' | 'geometry',
  skills: ['<mapped-skill>'] | ['unmapped:<sourceLabel>'],
  difficulty: 'easy' | 'medium' | 'hard',  // mapped from CB E/M/H
  type: 'multiple-choice' | 'fill-in',
  question: '...',                          // LaTeX (MathML→LaTeX converted)
  choices: [{id, text}, ...],
  correctAnswer: 'B' | '403',
  explanation: '...',                       // CB rationale, LaTeX
  calculatorAllowed: true,                  // CB items are all calc-on per Module 2

  // Provenance / tier-specific
  tier: 'exam-preview',
  source: 'cb-educator-bank',
  authoredBy: 'collegeboard',
  cbExternalId: 'ad6cdfd4-...',             // for traceability
  cbScoreBand: 1..7,                         // CB scoreBandRangeCd
  ingestedAt: '2026-05-10',
  hasImage: false,                           // figure items dropped, never true here
}
```

### UI surface (Exam Preview)

- New button on Study Plan dashboard: **"Try CB Exam Preview"** (clearly labeled)
- Distinct visual treatment from production drills (CB blue accent, copyright disclaimer at top)
- First time entering: opt-in modal: *"Exam Preview uses authentic College Board questions from the SAT Educator Question Bank. These are official CB content used for practice. Continue?"*
- Question card includes a small footer: *"Source: College Board SAT Educator Question Bank"*
- Drill loop reuses existing `AssignedPracticeShell` component (controlled mode, props-driven), so we don't duplicate the rendering pipeline

### Test-bleed scoping

Exam Preview is its own surface. The `originTestId` exclusion is scoped within Exam Preview only — student doesn't see the same item twice within Exam Preview, and we exclude items that appear on their assigned tests *if we know which CB items appear on which PracticeTest*. (For now, no overlap mapping exists — tests in repo are PerformSAT-authored, not CB-derived. So no exclusion needed.)

This contains the test-bleed problem: production drill bank doesn't have CB items at all, so contamination of the diagnostic signal is impossible.

## Phases

| # | Phase | Deliverable | Effort | Risk |
|---|-------|-------------|--------|------|
| 0 | **CB rights confirmation** (USER) | Written confirmation that PerformSAT can surface CB Educator Bank items inside the app | async user task | BLOCKER for ship |
| 1 | Educator bank transformer | `examPreview/educator.js` ≈ 928 items, MathML→LaTeX, figure-drop, schema-validated | ~2-3 hrs | Medium (MathML quality) |
| 2 | Exam Preview namespace + selectors | `examPreview/index.js` with `getExamPreviewQuestions`, skill index, domain index | ~30 min | Low |
| 3 | Skill alias mapping (CB → PerformSAT) | Extend mapping for the 19 CB skills → PerformSAT taxonomy. Unmapped items get domain fallback | ~1 hr | Low |
| 4 | `EXAM_PREVIEW_POLICY.md` | Copyright disclaimer, source attribution rules, opt-in flow spec | ~30 min | Low |
| 5 | `ExamPreviewSurface` component | Entry button + opt-in modal + question card with CB attribution + copyright footer | ~2-3 hrs | Medium (UI work) |
| 6 | Wire into Study Plan dashboard | New button below focus-area cards, behind feature flag `examPreview` | ~30 min | Low |
| 7 | Validation + smoke test | `bank:validate` extended for Exam Preview tier, render smoke test | ~1 hr | Low |
| 8 | Ship | `/ship` workflow | ~1 hr | Low |

**Realistic total:** 8-12 hours of focused work, 1-2 sessions. (Phase 0 is async user action.)

## Open decisions (resolve at next /autoplan)

### D1. UI placement
- **Option A (recommended):** Separate "Try CB Exam Preview" button below Today's Tasks on Study Plan dashboard
- Option B: New top-level tab next to "Dashboard" + "Study Plan"
- Option C: Sub-mode inside an existing drill flow

### D2. Session shape
- **Option A (recommended):** Skill-targeted (10 items matching student's weakest skill) — mirrors current drill pattern
- Option B: Full module (22 items, mixed difficulty, mimics CB module)
- Option C: User-pickable (skill / module / random)

### D3. Diagnostic feedback
- **Option A (recommended):** Track Exam Preview accuracy in a separate Firestore field; do NOT feed into diagnostic engine. Show student "your Exam Preview accuracy" as a vanity metric.
- Option B: Feed into diagnostic engine alongside production drill data
- Option C: Don't track at all

Recommendation A keeps the diagnostic engine clean (production-bank-only signal) while giving the student a sense of progress on authentic CB content.

### D4. Figure-rich items
- 28% of CB items reference figures
- **Recommendation:** Drop figure items from initial Exam Preview tier (same as production policy). File follow-up to add figure rendering.

### D5. Feature flag
- Ship behind `useFeatureFlag('examPreview')` so we can dogfood with one student before broad enable

## NOT in scope

- PDF 4-11 extraction (deferred — educator bank covers the same content space with better structured metadata; revisit if there's a specific gap)
- Test module ingestion (those stay test-only for measurement integrity)
- Replacing or modifying the production drill bank
- Figure rendering for image-rich items
- Adaptive difficulty within Exam Preview
- Re-extracting PDFs in column-aware mode

## Risk register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| CB sends takedown letter | Low (educator-tier opt-in is conservative) | High | Phase 0 written confirmation; clear attribution; remove Exam Preview tier if challenged. Production bank unaffected. |
| MathML conversion produces ugly LaTeX | Medium | Medium | Strict gate — items where conversion produces bracket-fallback get rejected, not displayed |
| Skill mapping coverage too low | Medium | Low | Domain fallback exists in pattern; surface coverage report |
| Students confuse Exam Preview with production drills | Low | Medium | Distinct visual treatment + opt-in modal + per-question footer |
| Volume premise still wrong | High | Low | Doesn't matter — Exam Preview is opt-in supplemental, not the primary drill surface |

## Success criteria

- Phase 0 confirmation in writing
- Exam Preview surface renders 10 CB items in skill-targeted mode for a student weakness
- Production drill bank `getTargetedWeaknessSet` returns same 10 items as before for the same input (regression-free)
- `bank:validate` (extended) passes 0 violations on Exam Preview tier
- Per-question footer shows CB attribution
- Opt-in modal shows on first entry; not shown on subsequent
- Feature flag `examPreview` gates the entry button

## Comparison to original (rejected) plan

| Dimension | Original plan | This plan |
|-----------|--------------|-----------|
| Production bank | REPLACED (~2,000 mixed-source) | UNCHANGED (664 hand-authored) |
| AUTHORING_SPEC.md | Silently violated | Unchanged |
| IP exposure | Inherited 1,645 verbatim CB items into production | Bounded to Exam Preview tier only |
| Test-bleed | "Excludes next assigned test" — leaks over time | N/A — production bank has no CB items |
| Diagnostic engine integrity | Compromised | Preserved |
| Effort | 7-9 hrs claimed (24-30 hrs realistic) | 8-12 hrs realistic |
| Reversibility | "git revert" but contaminates Firestore data | Trivial — feature-flag off |
| Volume increase | 664 → ~1,300 (post figure-drop) | 664 in production unchanged + 928 in opt-in tier |

## Required user inputs before any code

1. **Phase 0 sign-off:** Written confirmation that PerformSAT has the right to surface CB Educator Question Bank items inside the app for paying students. (My read: this is grey area — Educator QBank is published for educators to assign individual practice; SaaS bundling is typically not licensed. User should make the decision with full context, not me.)
2. **D1-D5 decisions:** Which option for each open decision above (or "engineer's call")

---

# /autoplan REVIEW (Round 2) — CEO Phase

**Voices:** Claude (primary) + Claude subagent (independent). Codex unavailable → tag `[subagent-only]`.
**Status:** **PREMISE GATE — second pivot may be needed.**

## CEO Dual Voices — Consensus Table (Round 2)

| Dimension | Claude (primary) | Claude subagent | Consensus |
|-----------|------------------|-----------------|-----------|
| 1. Premises valid? | ⚠️ Phase 0 framing too soft | ❌ Phase 0 is theater (self-attestation isn't a license) | **CONFIRMED concern → CRITICAL** |
| 2. Right problem to solve? | ⚠️ Solves IP rejection, not student need | ❌ Same — zero demand evidence cited | **CONFIRMED FAIL** |
| 3. Scope calibration correct? | ⚠️ Estimate still optimistic | ❌ Phase 5 alone 4-6h, total 16-24h | **CONFIRMED concern** |
| 4. Alternatives sufficiently explored? | ⚠️ Past-test-review not considered | ❌ Past-test-review + 80 hand-authored items missing | **CONFIRMED FAIL** |
| 5. Competitive risk? | ⚠️ Doesn't close Acely gap | ❌ Acely-parity is UX, not content | **CONFIRMED concern** |
| 6. 6-month trajectory sound? | ⚠️ Cannibalization possible | ❌ Strategic moat erosion via signal-starvation | **CONFIRMED FAIL — moat risk** |

**Verdict:** 3 of 6 dimensions FAIL consensus, 3 are concerns. This plan also doesn't survive review as drafted.

## Critical Findings (Round 2)

### R2-F1. CRITICAL — Phase 0 is theater
- Plan "Phase 0: Written confirmation that PerformSAT can surface CB Educator Bank items"
- **Source unspecified.** User self-attestation is not a license.
- CB Educator QBank ToS typically requires educator login + prohibits redistribution / commercial bundling
- **Fix required:** Phase 0 must be "Obtain CB license OR attorney's written opinion that this use is fair use." No code begins until one exists.

### R2-F2. CRITICAL — No demand evidence
- Plan asserts "students want CB content" with zero support
- No support tickets quoted, no NPS comment, no engagement gap measured
- "Build first, validate later" → orphan code likely outcome
- **Fix required:** Produce ONE concrete demand artifact in 30 min of looking, OR kill the feature

### R2-F3. CRITICAL — No success metrics, no telemetry, no sunset criteria
- "Success criteria" section lists ONLY engineering acceptance ("renders," "regression-free," "validates")
- Zero product success criteria (opt-in rate, engagement, accuracy delta, return rate)
- **Fix required:** Add adoption / engagement / sunset thresholds with numbers BEFORE building

### R2-F4. HIGH — Strongest alternative not compared (Past-Test-Review)
- **Past-Test-Review mode**: let students review items from tests they've ALREADY taken (12 PracticeTests in repo)
- Same perceived "authentic SAT" benefit
- Zero IP risk (PerformSAT-authored content student already legitimately accessed)
- Different value proposition: "see your wrong answers explained" vs "drill new CB items"
- **The plan never considers this.** Should compare head-to-head.

### R2-F5. HIGH — Cannibalization risk → moat erosion
- Students may perceive CB items as "more real" → systematically prefer Exam Preview to production drills
- Less data flowing through production drill bank → diagnostic engine has less signal
- Predicted vs Actual card (the ACTUAL moat per CLAUDE.md) gets less accurate
- **Adding this feature could undermine the product's core differentiator.**
- **Fix required:** Either gate Exam Preview behind production drill completion (alignment), OR cap items/week (forced rotation), OR explicitly accept and quantify the impact.

### R2-F6. HIGH — Isolation is policy, not enforcement
- "Iron rule: diagnostic engine NEVER reads from examPreview/" is a comment
- No lint rule, no test, no package boundary
- Will decay in 90 days as future PRs add features
- **Fix required:** Phase 2 must include enforcement — Jest test that scans `services/diagnosticEngine.js`, `predictionEngine.js`, `studyPlanGenerator.js`, `selectors/predictionSummary.js` for `examPreview` imports and FAILS the build.

### R2-F7. HIGH — No QA owner for 928 transformed items
- Phase 1 says "MathML→LaTeX, schema-validated" — schema catches structure, not garbled LaTeX
- 5% bad-conversion rate × 928 items = **46 broken items shown with CB attribution footer**
- Per-question footer means CB gets blamed for our render bugs
- **Fix required:** Phase 7 must include manual visual inspection of random 50-item sample (~1 hr added)

### R2-F8. MEDIUM — Estimate still optimistic
- Phase 5 (ExamPreviewSurface) realistically 4-6h not 2-3h (entanglement with App.jsx practiceState, distinct visual treatment, opt-in modal + Firestore wiring)
- Phase 1 (transformer) realistically 3-5h not 2-3h (MathML edge cases historically eat days)
- Realistic total: **16-24 hours**, not 8-12

### R2-F9. MEDIUM — D2 (session shape) unresolved but determines effort
- D2 Option A (10 items skill-targeted) vs B (22-item module) vs C (user-pickable)
- Phase 5 estimate doesn't depend on D2 choice — that's a planning bug
- **Fix required:** Resolve D2 before phases lock

### R2-F10. MEDIUM — Doesn't close Acely gap
- Acely-parity batch (CLAUDE.md ship history) was UX: Try-Similar, rounds, calendar, Predicted vs Actual
- None of those was "show CB items"
- Khan Academy (with actual CB partnership) wins on CB content; PerformSAT wins on diagnostic
- **The strategic question is unposed:** "Are we a diagnostic-driven app (our moat) or a CB-content app (Khan's moat)?"

## What this round adds vs Round 1

Round 1 (rejected original plan) found IP conflict + volume premise broken. Round 2 (this plan) finds:
- Augment direction solved IP RISK but not strategic value
- A stronger alternative (Past-Test-Review) wasn't on the menu in Round 1
- Even with isolated tier, cannibalization could erode the diagnostic moat
- Basic product hygiene (telemetry, success metrics, sunset) is missing regardless of direction


---

# /autoplan Round 2 FINAL DECISION — DIRECTION PIVOTED AGAIN

**Decision:** User chose **"Pivot to Past-Test-Review"** at the second premise gate.
**Date:** 2026-05-10
**Result:** Augment plan also REJECTED. Past-Test-Review plan to be drafted.

## Why this pivot

CEO Round 2 surfaced an alternative that wasn't on the menu in Round 1:
- **Past-Test-Review mode** uses content the student has ALREADY legitimately taken (12 PracticeTests already in repo)
- Zero IP risk (PerformSAT-authored)
- Same perceived "authentic SAT review" benefit
- Builds on existing moats: diagnostic engine, 6-class error taxonomy, Predicted vs Actual

The Augment plan dodged the IP rejection but introduced cannibalization risk (students preferring CB items would starve the diagnostic engine of signal — eroding the ACTUAL competitive moat per CLAUDE.md).

## GSTACK REVIEW REPORT (Round 2)

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review (R2) | `/autoplan` | Scope & strategy on Augment plan | 1 | **REJECTED** | 10 findings, 3/6 dimensions failed, second pivot to Past-Test-Review |
| Codex Review | `/autoplan` | Independent 2nd opinion | 0 | **SKIPPED** | codex CLI not installed |
| Claude subagent (CEO R2) | `/autoplan` | Independent CEO review | 1 | confirmed | Independent analysis aligned with primary on all 10 findings + surfaced Past-Test-Review alternative |
| Eng Review | `/autoplan` | Architecture & tests | 0 | **SKIPPED** | Plan rejected at premise gate |
| Design Review | `/autoplan` | UI/UX gaps | 0 | **SKIPPED** | Plan rejected at premise gate |
| DX Review | `/autoplan` | Developer experience gaps | 0 | **SKIPPED** | Plan rejected at premise gate |

**VERDICT:** Plan REJECTED at premise gate (Round 2). Direction pivoted to Past-Test-Review via User Challenge resolution. New plan: `docs/PAST_TEST_REVIEW_PLAN.md`.

