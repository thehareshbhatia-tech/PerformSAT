<!-- /autoplan restore point: /Users/hareshbhatia/.gstack/projects/thehareshbhatia-tech-PerformSAT/main-autoplan-restore-20260510-125408.md -->
# Math Question Bank Rebuild — Plan

**Status:** DRAFT, awaiting `/autoplan` review
**Owner:** Claude Code (Opus 4.7)
**Date:** 2026-05-10

## Goal

Replace the current 664-item hand-authored math bank with a source-traceable bank built from three authentic sources:

1. **CB Educator Question Bank** — 1,293 College Board items, currently on disk but never integrated (`scripts/generated/cbEducatorQBank.json`)
2. **In-repo test modules** — 12 practice tests × 3 variants (M1, M2-standard, M2Easy) ≈ 792 PerformSAT-authored CB-calibrated items
3. **Official SAT Practice Tests 4–11 PDFs** — 8 PDFs, ~352 official items, text already extracted at `scripts/generated/pdf-text/`

**Target:** ~1,800–2,200 unique items after de-duplication. Roughly 3× the current bank surface area.

## Why this, why now

The current 664 items have served well, but:
- **Volume ceiling**: not enough to support repeated drill cycles without student fatigue
- **Source diversity**: small hand-authored pool means narrow coverage of question styles and contexts
- **Untapped assets**: 1,293 educator-bank items already extracted, zero integration; PDF text already on disk
- **Diagnostic precision**: more items per skill = better targeting + less "we already drilled this" friction

## Lessons from the parked pipeline (do NOT repeat)

`generatedOfficial.js` was deleted (1,750 incoherent items) because the regex rewriter mutated numbers, names, and references **independently** across stem / choices / explanation, producing internally inconsistent questions.

**Iron rule for this rebuild:** **NO rewriting**. Use authentic source items only. Rely on volume + provenance + de-dup for variety.

## Architecture

### Sources & trust ladder

| Source | Count | Format | Trust | Authoring |
|--------|-------|--------|-------|-----------|
| CB Educator Bank | 1,293 | JSON, uuid-keyed | Authoritative | College Board API |
| Test modules (M1+M2+M2Easy × 12) | ~792 | JS modules | High | PerformSAT-authored, CB-style-calibrated |
| PDFs 4–11 (extracted text) | ~352 | TXT | Authoritative | College Board official PDFs |

### Pipeline shape

```
scripts/
├── sources/
│   ├── educatorBank/transform.mjs     # JSON → canonical schema (MathML→LaTeX)
│   ├── testModules/transform.mjs       # Test JS files → canonical schema (+ originTestId)
│   └── pdfs/extract.mjs               # LLM extraction from pre-extracted PDF text
├── buildBank.mjs                       # Orchestrator: transform → de-dup → write
└── validateBank.mjs                    # Existing — extended for new schema fields

src/data/questions/bank/
├── _archive/                           # Old shards + topic-flattened items
│   ├── algebra.js                      # (300 hand-authored)
│   ├── advancedMath.js
│   ├── geometry.js
│   └── problemSolving.js
├── algebra.js                          # NEW — generated, all sources, algebra domain
├── advancedMath.js                     # NEW
├── geometry.js                         # NEW
├── problemSolving.js                   # NEW
└── index.js                            # Selectors + indexes (existing API preserved)
```

The 14 topic files in `src/data/questions/*.js` (`linearEquations.js`, etc.) **stay in place** — lessons depend on them. We just stop pulling them into the bank.

### Schema (extends current shard schema)

```javascript
{
  // Existing fields — unchanged
  id: 'edu-cb-ad6cdfd4...',         // source-prefixed
  domain: 'algebra',
  skills: ['solving-linear-equations'],
  difficulty: 'easy' | 'medium' | 'hard',
  type: 'multiple-choice' | 'fill-in',
  question: '...',                   // LaTeX
  choices: [{id, text}, ...],        // 4 choices for MC, [] for fill-in
  correctAnswer: 'B' | '403',
  explanation: '...',                // LaTeX, markdown
  calculatorAllowed: true,

  // NEW — provenance
  source: 'educator-bank' | 'test-{N}-m{M}' | 'pdf-test-{N}-m{M}',
  authoredBy: 'collegeboard' | 'performsat-engine' | 'collegeboard-pdf-extracted',
  ingestedAt: '2026-05-10',

  // NEW — test-bleed prevention
  originTestId: 'practice-test-7' | null,

  // NEW — diagnostic metadata (when available)
  band: 1..7 | null,                 // CB scoreBandRangeCd / PerformSAT band
  hasImage: boolean,                 // figure-required questions
  imageDescription: string | null,   // for screen-reader / fallback rendering
}
```

### De-duplication strategy

- **Hash:** normalized stem (lowercase, strip whitespace/punctuation/LaTeX delimiters)
- **Tie-break priority:** `educator > pdf-extracted > test-module` (richer metadata, more authoritative)
- **Expected overlap:** PDFs 4–11 likely overlap heavily with educator-bank items (same source pool)
- **De-dup output:** per-source kept-vs-dropped report for audit

### Test-bleed prevention

Drill flow already supports `excludeIds` in `getQuestionsBySkillIds`. Two extensions:

1. Each item in the bank carries `originTestId` (or `null` for educator-bank items)
2. `AssignedPracticeShell` consumer extends `excludeIds` to also skip items where `originTestId === student.nextAssignedTestId`

The result: a student assigned Practice Test 7 won't see Test 7 items in their drill bank, even if those items' skills match their weakness.

### Skill taxonomy mapping

Educator bank uses CB skill names (e.g., `'Linear equations in one variable'`). Map to PerformSAT 76-skill taxonomy by extending `SKILL_ALIAS_MAP` in `bank/index.js`.

**Coverage rule:** any source skill that doesn't map gets a `skills: ['unmapped:<sourceLabel>']` tag. Drill flow falls back to domain match. Coverage report flags gaps for human review — we don't drop items.

## Phases

| # | Phase | Deliverable | Risk | Reversible? |
|---|-------|-------------|------|-------------|
| 1 | Schema + orchestrator skeleton | `scripts/buildBank.mjs`, types module | Low | Yes |
| 2 | Educator bank transformer | `educator.js` ≈ 1,293 items | Medium (MathML→LaTeX correctness) | Yes |
| 3 | Test module transformer | `testModule.js` ≈ 792 items + `originTestId` | Low | Yes |
| 4 | PDF LLM extraction | `pdfExtract.js` ≈ 352 items | **High** (LLM quality control) | Yes |
| 5 | Skill taxonomy mapping + alias updates | `SKILL_ALIAS_MAP` extensions, gap report | Medium | Yes |
| 6 | De-dup + validation | Final bank, `bank:validate` clean | Medium | Yes |
| 7 | Archive old shards + wire new bank | `_archive/` move, lessons unbroken | **Medium** (lesson breakage) | Yes (git revert) |
| 8 | Drill `originTestId` exclusion | `AssignedPracticeShell` filter | Low | Yes |
| 9 | Smoke test + ship | `/ship` workflow | Low | Via revert |

## Open decisions (resolve in `/autoplan`)

### D1. PDF extraction approach
- **Option A (recommended):** Anthropic Files API — feed PDFs directly, get figures + structured questions
- **Option B:** Use existing pre-extracted text in `scripts/generated/pdf-text/`
- **Option C:** Hybrid — text first, re-do figure-rich items with Files API

Recommendation: **A** for fidelity (figures matter on ~10–15% of math items). Cost: ~$5–15 per full pass across 8 PDFs.

### D2. Image-rich questions
- ~10–15% of math items have figures (diagrams, graphs, geometry)
- **Recommendation:** extract `hasImage: true` flag, **drop from drill bank initially**, file follow-up to add figure rendering

Drilling without figures means students get `[figure]` placeholder text — confusing and unhelpful. Better to omit until rendering ships.

### D3. Fill-in (SPR) items
- Current bank has both MC and fill-in
- Educator bank `type: 'spr'` items are present
- **Recommendation:** keep both. Drill UI already handles fill-in.

### D4. Topic files in `_archive/` or stay in `src/data/questions/`?
- Topic files are consumed by lessons (`allQuestions` export from `src/data/questions/index.js`)
- **Recommendation:** STAY in place. Bank just stops importing them. Zero lesson impact.

## Risk register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Lesson breakage (topic file dependency) | Low | High | Topic files stay in place; only bank stops importing. Verify lesson load post-archive. |
| LLM extraction produces incoherent items | Medium | High | Strict schema validation; reject items where stem/choices/answer don't reference each other. Manual spot-check sample of 30 items per PDF. |
| Skill mapping gaps drop items | Medium | Medium | Don't drop — tag `unmapped:<label>` and route via domain. Surface gap report. |
| Test-bleed in drills | Low (existing exclusion path) | Medium | Add `originTestId` filter in `AssignedPracticeShell`; smoke test with seeded student. |
| MathML→LaTeX conversion errors | Medium | Medium | Use `mathml-to-latex` npm package + spot-check. Fallback to plain-text bracket notation if conversion fails. |
| Volume regression (new bank smaller than expected) | Low | Medium | Each transformer reports item count. Hard floor: 1,200 items post de-dup. |
| Practice test items showing in drills | Medium | High | `originTestId` exclusion in drill query. Verify with seeded test assignment + drill. |

## Success criteria

- `npm run bank:validate` passes 0 violations
- Bank size ≥ 1,200 items post-de-dup
- All 76 taxonomy skills covered
- Drill flow smoke test: assigned drill returns 10 questions for any seeded weakness
- Test-bleed smoke test: no items where `originTestId === student.assignedTestId` appear in drill
- Lesson smoke test: at least 3 lessons load and render their content tabs

## What we're NOT doing in this batch

- Figure rendering for image-rich questions (deferred — `hasImage: true` flag dropped from drills)
- R&W bank rebuild (separate effort, R&W bank is already 648 items and CB-derived)
- Adaptive difficulty calibration changes (out of scope)
- New skill taxonomy entries (extend aliases, don't add new taxonomy skills)

## Estimated time

Per memory: don't pad estimates. User ships fast.

| Phase | Estimate |
|-------|----------|
| 1 (schema/skeleton) | 30 min |
| 2 (educator transformer + MathML) | 90 min |
| 3 (test module transformer) | 30 min |
| 4 (PDF LLM extraction) | 2–3 hrs (parallelizable) |
| 5 (skill mapping) | 60 min |
| 6 (de-dup + validate) | 60 min |
| 7 (archive + wire) | 30 min |
| 8 (drill exclusion) | 20 min |
| 9 (smoke + ship) | 60 min |

**Total: ~7–9 hours of focused work, 1–2 sessions.**

---

# /autoplan REVIEW — CEO Phase

**Voices:** Claude (primary) + Claude subagent (independent). Codex unavailable → tag `[subagent-only]`.
**Mode:** SELECTIVE EXPANSION (per autoplan override).
**Status:** **PREMISE GATE — awaiting user confirmation before proceeding to Eng/DX phases.**

## CEO Dual Voices — Consensus Table

| Dimension | Claude (primary) | Claude subagent | Consensus |
|-----------|------------------|-----------------|-----------|
| 1. Premises valid? | ❌ NO — copyright + volume premise both wrong | ❌ NO — same + estimate premise wrong | **CONFIRMED FAIL** |
| 2. Right problem to solve? | ⚠️ UNVERIFIED — no telemetry of bank exhaustion | ⚠️ UNVERIFIED — variety per-skill is real lever, not total volume | **CONFIRMED concern** |
| 3. Scope calibration correct? | ❌ Underscoped — copyright + 4 alternatives ignored | ❌ Underscoped — 4 alternatives ignored, takedown risk unmodeled | **CONFIRMED FAIL** |
| 4. Alternatives sufficiently explored? | ❌ ZERO alternatives in plan | ❌ ZERO alternatives in plan | **CONFIRMED FAIL** |
| 5. Competitive risk? | ⚠️ Acely is winning on UX, not bank size | ⚠️ Bigger bank closes no Acely gap | **CONFIRMED concern** |
| 6. 6-month trajectory sound? | ❌ Takedown + contamination scenarios unmodeled | ❌ Takedown + drill-history backcompat broken | **CONFIRMED FAIL** |

**Verdict:** 4 of 6 dimensions FAIL consensus. Plan does not survive CEO review as drafted.

## Critical Findings (severity-ordered)

### F1. CRITICAL — Copyright posture inverted, no user sign-off
- Plan iron rule: "NO rewriting, use authentic source items only"
- AUTHORING_SPEC.md (line 5): "No direct copying. Every stem, data set, answer set, and explanation must be original."
- Educator bank = 1,293 verbatim College Board items. PDF extraction = ~352 verbatim items.
- CB Educator QBank Terms of Service typically forbid SaaS bundling.
- **Plan dismisses this in zero sentences.** User must explicitly authorize before any code.

### F2. HIGH — Volume premise unverified
- Plan claims "volume ceiling, not enough to support repeat drill cycles" — no telemetry, no support tickets, no completion-rate data.
- "More items = better diagnostic precision" conflates total count with per-skill coverage.
- Educator bank has only **19 unique skill labels** vs PerformSAT's **76 taxonomy skills**. The volume increase concentrates in already-covered skills (linear equations), not the long tail (vertex-formula, dimensional analysis).

### F3. HIGH — Estimate is wildly optimistic
- Plan: 7-9 hours, 1-2 sessions
- Parked `generatedOfficial.js` (similar scope, 1,750 items) was multi-day → deletion
- Phase 4 (PDF LLM extraction) alone realistically 1-2 hr extraction + 4-8 hr fixing systematic errors
- Phase 4 spot-check: 240 items × ~2 min = 8 hours, not budgeted
- Realistic: **24-30 hours** including the inevitable second pass

### F4. HIGH — Image-rich items undercounted ~3×
- Plan: "10-15% have figures"
- Verified against `cbEducatorQBank.json`: **28.2%** (365 of 1,293) reference figure/graph/diagram in stem
- After dropping image-rich: real educator yield ~928 items, not 1,293
- New-bank target collapses from 1,800-2,200 to ~**1,300** (barely 2× current)
- PDFs likely WORSE figure rate (geometry sections)

### F5. HIGH — Test-bleed protection is single-test only
- Plan excludes items from `student.nextAssignedTestId` only
- Student takes Test 7 next week → drills Test 7 items today → contaminates Test 7 score
- Predicted vs Actual card uses test scores → contamination breaks the diagnostic measurement
- This breaks the **central reason** PerformSAT hand-authored 664 items: separating drill from test

### F6. HIGH — Zero alternatives evaluated
- Plan offers no "Alternatives considered" section
- Strongest alternatives missing:
  - **A. Augment, don't replace** — CB items as opt-in "exam preview" tier; keep hand-authored as production drill bank. Zero IP regression.
  - **B. LLM coherent rewrite** — Not regex. ~$0.01/item × 2,000 = $20 + validation. Spec-compliant.
  - **C. Targeted hand-author** — 10 items × 8 thinnest skills = 80 items in ~10 hours, zero risk.
  - **D. Don't rebuild — invest in diagnostic engine** — 6-class taxonomy, coach modes, intervention tracker are differentiators per CLAUDE.md.

### F7. MEDIUM — Skill taxonomy mismatch is structural
- Educator: 19 unique skill labels
- PerformSAT: 76 taxonomy skills
- "Unmapped" tag + domain fallback dilutes diagnostic precision (student weak on `vertex-formula` gets generic Advanced Math)
- Existing `SKILL_ALIAS_MAP` is 287 lines of careful mapping; "extend in 60 min" is unrealistic

### F8. MEDIUM — Tie-break silently demotes PerformSAT content
- `educator > pdf > test-module` ranking
- Hand-authored test modules (with pedagogically-tuned distractors and band metadata) get replaced by CB verbatim on stem-hash collision
- Should invert: PerformSAT-authored wins ties, OR require stem+choice match for dedup

### F9. MEDIUM — MathML→LaTeX cycle underestimated
- `mathml-to-latex@1.5.0` confirmed real, maintained
- ~85% conversions clean; 15% produce ugly LaTeX with spurious braces
- Plan tolerates "bracket notation fallback" — unacceptable for math drill bank
- Realistic Phase 2: 2-3 hours, not 90 min

### F10. MEDIUM — Phase 4 LLM extraction unspecified
- No prompt drafted, no output schema shown, no rejection rate estimated
- "Coherence check" is exactly what the parked regex pipeline failed at
- Highest-risk phase is least specified

### F11. MEDIUM — Drill-history backward compat broken
- Current bank flattens topic files into bank with IDs like `topic-linear-equations-...-3`
- Firestore-persisted student drill history references these IDs
- After rebuild, `getQuestionById('topic-...')` returns null → drill replay broken
- Plan does not mention migration

### F12. LOW — `scripts/generated/pdf-text/` is column-collapsed
- `measureRWJaccardFloor.mjs:13-18`: "paragraph boundaries are unrecoverable without re-extracting in column-aware mode"
- Plan can't use existing pdf-text dumps for LLM structured extraction
- Need either Anthropic Files API on raw PDFs OR re-extract with `pdftotext -layout`

## Existing Infrastructure Not Leveraged

The plan re-invents:
- `scripts/fetchCBQuestionBank.mjs` — educator bank fetcher (already done, generated cbEducatorQBank.json)
- `scripts/extractCBPracticeTestText.mjs` — PDF text extraction (already done, but column-collapsed)
- `scripts/measureRWJaccardFloor.mjs` — R&W bank uses Jaccard de-dup (could reuse for math)
- `scripts/validateRWBank.mjs` — has `validateBankSkeletons`/`validateWithinTestCloning` (reusable)
- `scripts/officialQuestionBankPipeline.mjs` — parked but the 4-phase shape is reusable

## NOT in scope (deferred)

- Figure rendering for image-rich items — explicitly deferred to follow-up
- R&W bank — separate effort, already CB-derived (different IP profile)
- Adaptive difficulty calibration — out of scope
- New skill taxonomy entries — extend aliases only

## Decision Audit Trail (CEO phase, partial — gate pending)

| # | Phase | Decision | Class | Principle | Rationale |
|---|-------|----------|-------|-----------|-----------|
| 1 | CEO 0E | Mode: SELECTIVE EXPANSION | Mechanical | autoplan override | Always SELECTIVE for autoplan |
| 2 | CEO Subagent | Run Claude subagent, skip Codex | Mechanical | P6 (dual voices when available) | Codex CLI not installed |
| 3 | CEO 0A | Challenge premises | **USER GATE** | Required by autoplan | Premise confirmation is non-auto-decided |
| 4 | CEO 0C-bis | Surface 4 alternatives not in plan | Auto | P1 (completeness) | Plan offered zero alternatives — surfacing is mandatory CEO output |

**NEXT: Premise gate user question. Eng + DX phases pending user response.**


---

# /autoplan FINAL DECISION — DIRECTION PIVOTED

**Decision:** User chose **"Augment, don't replace"** at the premise gate.
**Date:** 2026-05-10
**Result:** Original plan REJECTED. New plan to be drafted with new architecture.

## What changed

| Before (Original plan) | After (Augment direction) |
|------------------------|---------------------------|
| Replace hand-authored bank (664 items) with ~2,000 CB-sourced items | **Keep hand-authored bank as production drill bank** |
| All sources merge into single bank, ID-prefixed by source | **Two tiers**: Production (hand-authored, unchanged) + Exam Preview (CB-sourced, opt-in, labeled) |
| AUTHORING_SPEC.md silently violated | AUTHORING_SPEC.md unchanged for production tier; new policy doc for Exam Preview tier |
| `originTestId` exclusion in main drill flow | Exam Preview is its own surface; bleed concerns scoped to that tier |
| Production drill bank IP risk: HIGH (verbatim CB) | Production: ZERO IP regression. Exam Preview: needs CB Educator Bank usage confirmation before ship |

## Required next steps (NEW plan)

1. **CB rights confirmation** — User to confirm CB Educator Bank usage rights for the Exam Preview tier (in writing). Blocker for Exam Preview ship; not for production.
2. **Draft Augment-direction plan** — New architecture: separate `examPreviewBank` namespace, dedicated UI surface, opt-in flow, copyright labeling. Original 9 phases discarded.
3. **Re-run /autoplan on new plan** before any code.

## Tasks status

The 9 tasks from the original plan are SUPERSEDED by the Augment direction. Will be replaced with new task list aligned to the Augment architecture.

## Decision Audit Trail (final)

| # | Phase | Decision | Class | Principle | Rationale |
|---|-------|----------|-------|-----------|-----------|
| 1 | CEO 0E | Mode: SELECTIVE EXPANSION | Mechanical | autoplan override | Always SELECTIVE for autoplan |
| 2 | CEO Subagent | Run Claude subagent, skip Codex | Mechanical | P6 (dual voices when available) | Codex CLI not installed |
| 3 | CEO 0A | Premise challenge | USER GATE | Required by autoplan | 4 of 6 dimensions FAILED consensus |
| 4 | CEO 0C-bis | Surface 4 alternatives | Auto | P1 (completeness) | Plan offered zero alternatives |
| 5 | Final Gate | Direction pivot to "Augment" | **USER CHALLENGE → USER DECIDED** | User sovereignty | Both reviews recommended pivot; user confirmed |
| 6 | Final Gate | Skip remaining Eng + DX phases | User | User chose "Wait for direction first" | Reviewing rejected plan wastes cycles |

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/autoplan` | Scope & strategy | 1 | **REJECTED** | 12 findings, 4/6 consensus dimensions failed, direction pivoted |
| Codex Review | `/autoplan` | Independent 2nd opinion | 0 | **SKIPPED** | codex CLI not installed |
| Claude subagent (CEO) | `/autoplan` | Independent CEO review | 1 | confirmed | Independent analysis aligned with primary on 11 of 12 findings |
| Eng Review | `/autoplan` | Architecture & tests | 0 | **SKIPPED** | User: "wait for direction" |
| Design Review | n/a | UI/UX gaps | 0 | n/a | No UI scope (1 match below threshold) |
| DX Review | `/autoplan` | Developer experience gaps | 0 | **SKIPPED** | User: "wait for direction" |

**VERDICT:** Plan REJECTED at premise gate. Direction pivoted to "Augment, don't replace" via User Challenge resolution. Awaiting new plan draft.

