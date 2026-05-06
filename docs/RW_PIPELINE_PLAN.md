<!-- /autoplan restore point: /Users/hareshbhatia/.gstack/projects/thehareshbhatia-tech-PerformSAT/main-autoplan-restore-20260505-215203.md -->
# CB R&W Authenticity Content Pipeline — Plan

**Status:** Draft, pending engineering review
**Author:** Audit-driven (see `docs/RW_AUTHENTICITY_AUDIT.md`)
**Target:** Replace the templated R&W bank with CB-authentic items, mirroring the Math pipeline (`docs/CB_AUTHENTICITY_RUBRIC.md` + `scripts/calibrateModule.mjs`).
**Estimated timeline:** 6 weeks (timeline assumes 1 engineer + LLM authoring; manual-only would be ~6 months).

---

## 1. Goal

Build the infrastructure and content pipeline so that **every R&W question in the 12-test bank passes a CB authenticity rubric**, the same way Math does. Specifically:

- A student taking 3+ tests in sequence cannot detect templates, repeated skeletons, or fabricated entities.
- Every passage anchors on a real, verifiable source (real author, real researcher, real study, real public-domain text).
- Every distractor maps to a named student misconception.
- Every stem matches one of the canonical CB stem phrasings.
- Mechanical lints catch authorial drift before it lands.

## 2. Non-goals

- Not regenerating Math items (Math has its own pipeline already).
- Not changing the test format, blueprint, or scoring (those are tested and right per recent calibration commits).
- Not replacing the M2 Easy track distinct from the M2 Hard track (same rubric applies; same authoring approach).
- Not changing the test-taking UI (covered by recent UI commits 6c27c60, 65f4136).

## 3. Architecture overview

Four-stage pipeline, parallel to Math:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  1. RUBRIC      │ →  │  2. SOURCE      │ →  │  3. AUTHOR      │ →  │  4. VALIDATE    │
│  (rules doc)    │    │  (curated DB)   │    │  (LLM + human)  │    │  (lints + cal)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
     │                       │                       │                       │
     ▼                       ▼                       ▼                       ▼
CB_RW_AUTHENT-         scripts/generated/      scripts/                docs/calibration_
ICITY_RUBRIC.md        rwSources/              authorRWItem.mjs        set/rw/
                       (literary, research,    + scripts/prompts/      + scripts/
                       cross-text, COE-Q)      rwAuthor*.md             validateRWBank.mjs
```

**Reuses from Math pipeline:**
- PDF text extracts in `scripts/generated/pdf-text/sat-practice-test-{4..11}-digital.txt` (already exists, used for uniqueness checks)
- The Jaccard 0.78 / 3-gram 0.60 uniqueness gates (proven in Math)
- The `vm`-based test-file evaluation pattern in `scripts/calibrateModule.mjs`

**New for R&W:**
- A curated source database (literary, research, cross-text pairs, datasets)
- LLM authoring with rubric-in-context prompts
- Bank-level template detection (NEW — Math doesn't need this; R&W does)
- Entity verification ("is this researcher real?")

## 4. Phases

### Phase 1 — Rubric (5 days)

**Output:** `docs/CB_RW_AUTHENTICITY_RUBRIC.md` (parallel to `CB_AUTHENTICITY_RUBRIC.md`).

Sharpens the existing reference doc (`CB_RW_AUTHENTICITY_REFERENCE.md`) into a strict rubric with:

1. **Per-skill stem registry.** The exact CB stem phrasing for each skill is one of ~7 canonical strings (e.g., SEC: *"Which choice completes the text so that it conforms to the conventions of Standard English?"*). Any deviation = lint fail.
2. **Per-skill passage rules.** For each of 11 R&W skills, specify: passage word count range (from PT4-11 measured), genre allowlist (e.g., literary = real public-domain authors only), source-anchoring requirement (real or paraphrased-from-real, never invented).
3. **Distractor logic** (parallel to Math §2):
   - WiC: 4 vocab words, all defensible-looking but only one fits semantically; no obvious mismatches.
   - SEC: 4 grammar variants, all look superficially valid but only one is correct; **no non-words**, **no patently malformed forms**.
   - CTC: 4 different rhetorical positions; none verbatim-templated across items.
   - Etc.
4. **Bank-level invariants** (NEW vs Math):
   - No researcher name appears in >1 item across the bank.
   - No passage skeleton (defined as the 12-token opening + grammatical structure) appears in >1 item.
   - No literary work title is reused across tests with different attributed authors.
   - No identical-across-tests distractor strings (e.g., "By insisting that the model has already been disproven by the [X] record" in 11/12 tests).
   - Per-test passage-genre distribution matches CB blueprint (a literary excerpt, a science passage, a humanities passage, a history/civics passage, etc.).
5. **Anti-patterns** (parallel to Math §7) — concrete failure modes from this audit:
   - Templated cross-test parallel passages
   - Invented "first/third woman to..." biographical claims
   - Literary biography fiction style ("self-imposed silence")
   - Skills not in the CB SEC menu (comparative/superlative, etc.)
   - Egregiously malformed distractor choices (non-words)
   - Fabricated researchers and studies
   - Fabricated literary works
   - Within-test transition cloning
6. **Lint check spec** — concrete list of what `validateRWBank.mjs` will enforce.

**Acceptance:** rubric reviewed against 50+ verbatim CB items from `docs/CB_RW_AUTHENTICITY_REFERENCE.md` and shown to flag every PerformSAT FAIL.

### Phase 2 — Calibration set (3 days)

**Output:** `docs/calibration_set/rw/items.json`, `docs/calibration_set/rw/baseline_ratings.md`, `docs/calibration_set/rw/methodology.md`.

40 items (20 CB pulled from PT4-11, 20 PerformSAT) anonymized and shuffled. Rated on 5 dimensions (parallel to Math's 5):

1. **Stem clarity** — does the question read crisply?
2. **Passage authenticity** — does the source feel real and CB-anchored?
3. **Distractor quality** — do wrong answers map to specific misconceptions?
4. **Difficulty calibration** — does it match its claimed band?
5. **Overall CB-grade** — would it fit unobtrusively in PT4-11?

**Headline number:** average gap between CB items and PerformSAT items on dimension 5. Target: ≤0.5 points after Phase 6.

### Phase 3 — Lint scripts (5 days)

**Output:** `scripts/validateRWBank.mjs` (extends the lint mode from `scripts/calibrateModule.mjs`).

Mechanical checks:

1. **Stem verbatim match** per skill (against the registry from Phase 1).
2. **PDF uniqueness** vs PT4-11 (Jaccard 0.78, 3-gram 0.60) on passage, choices, and explanation. Reuses Math's `checkUniqueness()`.
3. **Bank-level template detection** — n-gram fingerprint over passages; flag any pair >0.40 similarity within or across tests.
4. **Entity registry validation** — researcher/author/work names compared against an `approvedSources.json` file. Anything not in the registry = unknown/possibly-fabricated; warning unless explicitly marked `unverified: true` (with a public source URL).
5. **Distractor word validation** — every choice token is a valid English word (uses `wordlist-english` or similar); flags non-words like "comprehensiver", "complexs".
6. **Choice-string uniqueness across bank** — no distractor string appears verbatim in >2 items.
7. **Within-test cloning** — passages within a single test compared with each other; >0.30 similarity = fail.
8. **Genre distribution per test** — checks each test has the expected mix of passage genres.
9. **Skill blueprint per module** — counts per skill match the CB blueprint (already implicit; make it explicit).
10. **Bank stats report** — outputs per-test and per-skill PASS/WARN/FAIL counts.

Runs with: `node scripts/validateRWBank.mjs --all` or `--test=N` or `--lint-only`.

### Phase 4 — Source curation (5 days)

**Output:** `scripts/generated/rwSources/` directory with:

- `literaryWorks.json` — 100+ public-domain texts with extracts (Whitman, Glaspell, Grimké, Petry, Baldwin, Hardy, Chekhov, Mansfield, Marianne Moore, Jerome K. Jerome, etc.). Each entry: author, title, year, genre, public-domain status, 200-word excerpt usable for TS&P/Inferences/CID, source URL.
- `researchers.json` — 200+ real researchers organized by skill domain (CB favors archaeology, ecology, art history, biology, paleontology, anthropology, Indigenous studies, lesser-known biographies). Each entry: name, field, real claim/study, source URL.
- `crossTextPairs.json` — 30+ real engaging-essay pairs (researcher A vs researcher B on a real debate). Each entry: topic, Text 1 source, Text 2 source.
- `quantitativeData.json` — 30+ real datasets that fit the COE-Q format (table, simple comparison, real source).
- `topicAllowlist.md` — what topics CB writes about (and what it avoids).

**Acceptance:** the 4 source DBs collectively cover all 11 R&W skills × 3 difficulties = 33 cells, with at least 5 sources per cell.

**Sourcing:** Project Gutenberg (literary), JSTOR/Smithsonian/National Geographic (research), real published cross-text debates, public datasets (CDC, NOAA, USGS, Pew). All real, all verifiable.

### Phase 5 — Authoring pipeline (8 days)

**Output:**
- `scripts/authorRWItem.mjs` — main authoring script
- `scripts/prompts/rwAuthorWiC.md`, `rwAuthorSEC.md`, `rwAuthorTSP.md`, etc. — per-skill prompts
- `scripts/prompts/rwAuthorRubric.md` — the rubric shared across all prompts

**Architecture:**

```
authorRWItem({skill, difficulty, source, testN, moduleN, position})
  1. Load source from rwSources/
  2. Load rubric + skill-specific prompt template
  3. Load existing bank (so far) — for "do not repeat" context
  4. Call LLM (Claude Sonnet 4.6 — fast iteration, good quality / cost ratio)
  5. Parse output into item shape
  6. Run lints from Phase 3
  7. If any lint fails:
     a. Up to 3 retries with lint-failure feedback
     b. If still fails: write to drafts/rw/needs-human-review/
  8. If passes: write to drafts/rw/approved/
```

Key design choices:
- LLM authors one item at a time, not whole tests (each item should feel hand-authored)
- Source-grounded, not free-generation (passes a real text excerpt + extraction instructions)
- Rubric-in-context (full rubric prompt) — not fine-tuning
- Cache LLM calls (Anthropic prompt cache; rubric is the cacheable prefix)

**Cost estimate:**
- 648 items, ~3 LLM calls per item (1 author + 2 retries average) = ~2000 calls
- Each call: rubric (~5K cached tokens) + source (~500 tokens) + output (~500 tokens) = effectively ~1K billable per call after cache
- Sonnet 4.6 input: $3/M, cached $0.30/M, output $15/M
- Estimated total: **~$20-50** for the entire bank regeneration

### Phase 6 — Regenerate the 12-test bank (10 days)

**Output:** Updated `src/data/practiceTests/practiceTest{1-12}RW.js` files with re-authored items.

Strategy:

1. **Re-author all 648 items** (Approach A — locked 2026-05-05 via `/autoplan`). Audited PASS items (100 of 360 from `RW_SEC_AUDIT.md` + `RW_NON_SEC_SAMPLE_AUDIT.md`) serve as calibration comparison fixtures only; they are NOT preserved in place. Rationale: with 36% audit fail rate and shared bank-level templates, partial preservation leaks template DNA into the new bank.
2. **Run authoring pipeline test-by-test**, in order: Test 1 → 2 → 3 → ... → 12. Each test fully validates before next.
3. **Lint check at end of each test** — if any cross-test invariant fails (e.g., template detection across tests), fix before moving on.
4. **Keep one git commit per test** — rollback unit is one test.
5. **Run `/qa` against the dev environment after each test** to confirm no rendering regressions.

Parallelization: tests are mostly independent at the item level. Authoring multiple items in parallel is safe; the bank-level lints run at the end. Could compress to 5-6 days with parallel workers.

### Phase 7 — QA and ship (3 days)

1. Full lint pass: `node scripts/validateRWBank.mjs --all` — zero failures.
2. Calibration set re-rate: have 2 raters score the new items + CB items blindly. Confirm gap ≤0.5.
3. `/qa` across all 12 tests in the dev environment — no rendering bugs, no broken Module 2 routing.
4. Spot-check 10% of items (~65) manually — confirm they read as CB-authored.
5. Final smoke test — take Test 1 end-to-end as a student.
6. Ship: PR, merge, deploy, canary monitor.

## 5. Risks and mitigations

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| LLM output drifts toward the same templated style after a few items | High | High | Bank-level template detection in Phase 3 catches this immediately; force re-author with explicit "do not match the structure of these previous items" prompt. |
| Source database has gaps for some skills | Medium | Medium | Phase 4 acceptance criterion (5 sources per skill × difficulty) gates Phase 5. |
| Public-domain text sourcing takes longer than 5 days | Medium | Low | Project Gutenberg's catalog is well-indexed; CB's own author list (in the reference doc) is the seed. |
| Real-researcher fact-checking is slow | Medium | Medium | Use an LLM-as-fact-checker tool to flag claims that don't appear in any indexed corpus, then human-verify only flags. |
| Cost overruns on LLM calls | Low | Low | Estimated $20-50 total; tracking via `--dry-run` mode that reports token counts before authoring. |
| Generated items still feel templated to students | Medium | High | Calibration set re-rate gate at Phase 7 catches this; 5-rater median <4 on dimension 5 = block ship. |
| Existing PASS items don't survive lint (false positives) | Low | Low | Tune lint thresholds against PASS items first; they should all pass before any FAIL item is authored. |
| User loses interest mid-pipeline | N/A | High | Each phase ships independently and is useful on its own (rubric → calibration set → lints can land before authoring even starts). |

## 6. Success criteria

The pipeline is shipped when:

1. ✅ `validateRWBank.mjs --all` passes with zero failures.
2. ✅ Calibration set: average overall-CB-grade gap between CB items and PerformSAT items ≤0.5 (Math's same gate).
3. ✅ Spot-check pass rate ≥95% on a random 10% sample, blind-rated.
4. ✅ No bank-level invariant violations (no template detection across tests, no entity reuse, no within-test cloning).
5. ✅ The user takes Test 1 end-to-end and reports it feels like a real CB test.

## 7. Timeline

```
Week 1: Phase 1 (Rubric) + Phase 2 (Calibration set) — DONE in parallel
Week 2: Phase 3 (Lints) + Phase 4 (Source curation) — DONE in parallel
Week 3: Phase 5 (Authoring pipeline) — Build + initial test
Week 4: Phase 6 — Regen tests 1-4
Week 5: Phase 6 — Regen tests 5-8
Week 6: Phase 6 — Regen tests 9-12 + Phase 7 (QA and ship)
```

Slack: 1 week in week 5 if Phase 6 is slower than expected.

## 8. Open questions for the user

Before execution, please weigh in on:

1. **LLM model choice for authoring.** Default is Claude Sonnet 4.6 (good cost/quality). Opus 4.7 is higher quality (~5x cost) but the rubric+lint loop should make Sonnet sufficient. Override?
2. **Manual review depth.** I'd recommend reviewing 10% of items (~65) manually after Phase 6. More gives more confidence; less ships faster. Your preference?
3. **Public-domain literary catalog scope.** The reference doc lists CB's documented authors (Whitman, Baldwin, Grimké, etc.). Want me to expand beyond that with more contemporary public-domain sources, or stay strict to CB's own documented set?
4. **Cross-text pair sourcing.** This is the hardest source category to find authentically. Two options: (a) use real essay/lecture pairs from JSTOR/academic archives, (b) paraphrase real debates without naming specific essays. CB does both. Pick one or both?
5. **Phase 1 dependency.** Phase 3 (lints) needs Phase 1 (rubric) and Phase 4 (entity registry). If we want to start Phase 4 (sourcing) immediately in parallel with Phase 1, that's fine — but Phase 3 blocks until both are done.
6. **Modules 2 Easy/Hard tracks.** The plan covers all R&W including M2 variants. Confirm scope.
7. **Bilingual passages?** CB occasionally uses excerpts in translation. Allow/disallow?
8. **What about questions that are CURRENTLY broken in subtler ways than the audit caught?** E.g., explanations citing rules incorrectly (Test 1 M2 Q18's claim "a dash cannot join two independent clauses on the SAT in this construction" — actually CB does sometimes accept this). Should the pipeline also re-author explanations? Yes/no?

## 9. Decision required

This plan is a hand-off, not an execution. Before starting Phase 1, please:

- ✅ Approve the architecture (4-stage pipeline, mirrors Math)
- ✅ Approve the timeline (~6 weeks)
- ✅ Answer the 8 open questions
- ✅ Authorize me to start Phase 1 (rubric authoring)

Recommended next step: run `/plan-eng-review` on this doc for an opinionated technical review, or `/autoplan` for a multi-perspective pass (CEO, design, eng, DX). Either will surface issues this draft missed.

---

# /autoplan — CEO Review

**Mode:** SELECTIVE EXPANSION (per autoplan override)
**Premise gate:** Locked at **Approach A — re-author all 648 items, ship together** (user choice, completeness 10/10).
**Dual voices:** Codex unavailable → tagged `[subagent-only]` throughout.
**Date:** 2026-05-05

## Reality-vs-Plan reconciliation (CRITICAL)

The plan's status field says "Draft, pending engineering review." The disk says otherwise. Phases 1–4 are largely done already:

| Phase | Plan status (line) | Actual disk state |
|---|---|---|
| 1. Rubric | Estimated 5 days | ✅ `docs/CB_RW_AUTHENTICITY_RUBRIC.md` — 2,125 lines |
| 2. Calibration set | Estimated 3 days | ✅ `docs/calibration_set/rw/{items.json, baseline_ratings.md, methodology.md, _build.mjs}` |
| 3. Lint script | Estimated 5 days | ✅ `scripts/validateRWBank.mjs` — 1,149 lines, all 10 lint exports |
| 4. Source curation | Estimated 5 days | ✅ Mostly done — 60 lit / 100 researchers / 25 cross-text / 25 quantitative + topicAllowlist + README |
| 5. Authoring pipeline | 8 days | ❌ `scripts/authorRWItem.mjs` does not exist |
| 6. Regen 12-test bank | 10 days | ❌ Not started |
| 7. QA + ship | 3 days | ❌ Not started |

**Real remaining work:** Phases 5–7 = ~21 days human-team. With CC + gstack at 10x compression: **roughly 2–3 days of focused execution.**

## Step 0A: Premise Challenge

Eight load-bearing premises evaluated:

| # | Premise | Evaluation | Action |
|---|---|---|---|
| 1 | Audit findings are correct (36% FAIL) | STRONG, but single-rater. Subagent H1 flags this. | Surfaced at final gate (taste). |
| 2 | Path C (full pipeline) is the right approach | User confirmed 2026-05-05. | Locked. |
| 3 | 6-week timeline reflects the work | STALE — Phases 1-4 done. | Re-baselined to ~3 days CC. |
| 4 | Math pipeline is the right architectural model | STRONG. validateRWBank already imports from calibrateModule. | Accept. Subagent M1 flags Jaccard tuning — addressed in Phase 3 review. |
| 5 | LLM authoring with rubric+lints is feasible | REASONABLE, but quality risk (subagent C3). | Carry forward to Eng phase. |
| 6 | Real-source grounding non-negotiable | STRONG. Audit's #1 finding (fabricated authors). Subagent H2 says paraphrased claims attributed to real authors is also fabrication-laundering. | Accept; tightened in Eng phase. |
| 7 | CB authenticity achievable for AI-generated content | UNTESTED. Calibration set is the gate. Subagent C1 flags the metric itself as wrong. | Surfaced at final gate. |
| 8 | All 12 tests need re-authoring | LOCKED via premise gate (Approach A). | Locked. |

## Step 0B: Existing Code Leverage

Mapped sub-problems → existing code:

```
PROBLEM                              EXISTING CODE                                  STATUS
─────────────────────────────────    ─────────────────────────────────────────      ─────────
PDF text extracts (uniqueness)       scripts/generated/pdf-text/sat-PT4-11.txt     ✅ exists
Tokenize / Jaccard / 3-gram          scripts/calibrateModule.mjs (exported)         ✅ reused
PDF corpus indexing                  loadPdfCorpus / indexCorpus from Math          ✅ reused
Stem registry                        validateRWBank.mjs §RW_STEM_REGISTRY           ✅ done
Bank skeleton detection              validateRWBank.mjs validateBankSkeletons       ✅ done
Distractor word validation           validateRWBank.mjs validateDistractorWords    ✅ done
Within-test cloning                  validateRWBank.mjs validateWithinTestCloning  ✅ done
Entity registry validation           validateRWBank.mjs validateEntityRegistry     ✅ done
Real source DB                       scripts/generated/rwSources/ (5 files)         ✅ done
Calibration set methodology          docs/calibration_set/_build.mjs (Math)         ✅ done
Per-item PASS/FAIL labels            RW_SEC_AUDIT.md + RW_NON_SEC_SAMPLE_AUDIT.md  ✅ done
Authoring orchestrator               scripts/authorRWItem.mjs                       ❌ TO BUILD
Per-skill authoring prompts          scripts/prompts/rwAuthor*.md                   ❌ TO BUILD
Manual review UI                     none                                           ❌ subagent M3 — TO BUILD
Score-prediction shadow A/B          none                                           ❌ subagent C1 — DEFERRED to TODO
```

## Step 0C: Dream State Mapping

```
CURRENT STATE              THIS PLAN                          12-MONTH IDEAL
──────────────             ──────────────                     ────────────────
12 tests, 648 R&W items    Build authorRWItem.mjs            Self-improving content engine:
36% items FAIL             Re-author all 648                 - Calibration set rotates with user signals
Templates + fab sources    Lints catch templates             - Source DB grows on contributor PRs
IRT scoring (f749c8f)      Ship all-12 together              - Per-student item generation possible
                                                              - Math + R&W both authentic
                                                              - Score-prediction telemetry feeds rubric
```

**Delta:** Plan moves us from broken-R&W to passing-R&W with mechanical guardrails. Doesn't yet build the score-prediction loop (subagent C1 surfaced this gap). Pipeline is on-trajectory; score-prediction is reasonable Phase 8.

## Step 0C-bis: Implementation Alternatives

Four approaches evaluated. Option A locked via premise gate; B, C, D documented for posterity.

| # | Approach | Effort (CC) | Effort (human) | Risk | Status |
|---|---|---|---|---|---|
| **A** | **Plan-as-written: re-author all 648 items, ship together** | **~2-3 days** | **~21 days** | **Med** | **✅ LOCKED** |
| B | Hybrid: re-author FAIL+BORDERLINE only, lint full bank, ship test-by-test | ~1.5 days | ~14 days | Low-Med | Rejected (premise gate) |
| C | Lean: hand-patch FAIL items only, no pipeline | ~6 hours | ~3 days | Low | Rejected (premise gate) |
| D | Pipeline + ship-per-test, defer literary+CTC to v2 | ~1 day | ~10 days | Med | Rejected (defers core fix) |

Subagent's adjacent alternatives (A1 hire content team / A2 license / A3 ship-as-is patch / A4 IRT-based) are documented in the User Challenges section at the gate.

## Step 0D: SELECTIVE EXPANSION — auto-decided expansions

| # | Expansion candidate | In blast radius? | Effort CC | Decision | Principle |
|---|---|---|---|---|---|
| E1 | Add LLM-judge eval (blind-rate generated vs PT4-11) | Yes | ~1d | **Add to scope** | P1 (completeness) |
| E2 | Re-author item explanations alongside questions | Yes | included | **Add to scope** | P1 |
| E3 | Per-test diversity check on regen | Yes | already in `validateBankSkeletons` | **Already covered** | P4 (DRY) |
| E4 | Rotate calibration set after regen (held-out eval) | Yes | ~30 min | **Add to scope** | P1 |
| E5 | CI integration: validateRWBank.mjs on every commit touching practiceTest*RW.js | Tangential | ~2h | **Defer to TODOS.md** | P3 (pragmatic) |
| E6 | Per-student adaptive generation | Out of radius | weeks | **Defer to TODOS.md (Phase 8)** | P2 |
| E7 | Bilingual passage support | Out of radius | requires new sourcing | **Skip** | P3, P5 |
| E8 | Manual review UI (subagent M3 finding) | Yes | ~1d CC | **Add to scope** | P1, P5 |
| E9 | Pilot regen on Test 7 first, time it, then extrapolate (subagent M6) | Yes | included in Phase 6 | **Add to plan as Phase 6.0** | P5 (explicit) |

## Step 0E: Temporal Interrogation (CC compression scale)

- **Hour 1 (foundations):** Implementer needs the rubric+sources+lints contract. README.md in rwSources/ explains it. Question they'll hit: "Is the prompt cache prefix the rubric or the rubric+source?" → SPECIFY in plan (subagent M2 finding).
- **Hour 2-3 (core logic):** First items will template against few-shot examples. They'll need aggressive anti-templating prompt. Question: "How do I detect 'matches structural pattern' before lint time?" → CHALLENGE: subagent C3 says this won't converge with naïve retry. **Mitigation: pre-author skeleton allowlist per skill (~30 openings each), force LLM pick.**
- **Hour 4-5 (integration):** Lint surfaces cross-test similarity. Implementer needs `--explain` flag on lint output ("why does this match Test 3 Q12?").
- **Hour 6+ (polish):** Calibration re-rate. _build.mjs builds OLD set; need `--regenerate` mode for NEW bank.

## Step 0F: Mode Selection Confirmed

**Mode: SELECTIVE EXPANSION.** Approach A from 0C-bis. Locked.

## Step 0.5: CEO Dual Voices

**Codex CEO voice:** UNAVAILABLE (codex CLI not installed). Tagged `[codex-only-N/A]` for all dimensions.

**Claude CEO subagent:** Returned with adversarial 21/60 scorecard, verdict RECONSIDER-APPROACH.

### CEO consensus table

| Dimension | Claude subagent | Codex | Consensus |
|---|---|---|---|
| 1. Premises valid? | 4/10 — single-rater audit, untested 36% FAIL | N/A | `[subagent-only]` flagged H1 (rater agreement) |
| 2. Right problem to solve? | 3/10 — optimizes rubric compliance, not student outcomes | N/A | `[subagent-only]` flagged C1, C2 → final gate |
| 3. Scope calibration correct? | 5/10 — Path A defensible if premise holds; timeline 2x optimistic | N/A | `[subagent-only]` flagged M6 |
| 4. Alternatives sufficiently explored? | 2/10 — buy/license/hire/IRT not considered | N/A | `[subagent-only]` flagged → final gate as User Challenge |
| 5. Competitive/market risks covered? | 3/10 — AI-authored reputational risk undersold | N/A | `[subagent-only]` flagged M5 |
| 6. 6-month trajectory sound? | 4/10 — infrastructure reusable IF premise holds | N/A | `[subagent-only]` |

**Single critical findings flagged regardless of single-voice mode:** C1, C2, C3, C4 (per autoplan rule).

### Subagent findings — auto-decided (with engineering principles)

| ID | Finding | Severity | Decision | Principle |
|---|---|---|---|---|
| C3 | Bank-level template detection won't converge at item 600+ via naïve retry | CRITICAL | **Add to plan: pre-author skeleton allowlist (~30 openings per skill), force LLM pick. Carry forward to Eng review.** | P1, P5 |
| C4 | Cross-text DB has 25 entries for ~24 items (zero margin) | CRITICAL | **Add to scope: triple cross-text DB to 75+ pairs before Phase 5 starts.** | P1 (completeness) |
| H2 | Source DB has real authors but paraphrased claims (laundered fabrication) | HIGH | **Tighten rubric §10: require either verbatim short excerpt OR explicit "in the style of [author]'s argument" framing. Lint enforces.** | P1 |
| H3 | 5x cost variance (Sonnet vs Opus) is really a 5x human-review-time decision | HIGH | **Add to plan Phase 5.5: pilot 20 items each model, measure retry/needs-human rates, pick on total human time.** | P5 (explicit) |
| H4 | 100 PASS items will fail new lints (proper-noun whitelist unsolved) | HIGH | **N/A under Approach A** (we re-author all 648, no preservation). But the proper-noun whitelist is still needed for the new authoring → carry forward to Eng. | P5 |
| H5 | 80/20 stem distribution is a number from nowhere | HIGH | **Replace with measured PT4-11 distribution per skill. Lint clamps to (CB count + 0).** | P1 |
| M1 | Jaccard 0.78 / 3-gram 0.60 thresholds inherited from Math; R&W needs different | MEDIUM | **Add to Eng review: calibrate Jaccard against PT4-11 cross-test pairs to find the floor.** | P1 |
| M2 | No prompt-cache strategy specified; could 10x cost | MEDIUM | **Specify: rubric is cache prefix, batch authoring per-skill within 4-min window so skill prompt also caches.** | P5 |
| M3 | Manual review UI undefined → actual bottleneck | MEDIUM | **Add to scope (E8): tiny review UI before Phase 6. ~1d CC.** | P1, P5 |
| M4 | 8 open questions should be pre-decided | MEDIUM | **Auto-decide all 8 below.** | P5, P6 |
| M5 | "AI-authored SAT prep" reputational risk undersold | MEDIUM | **Surface at final gate as taste decision.** | User sovereignty |
| M6 | 6-week timeline heroic by 2x | MEDIUM | **Re-baselined: ~3 days CC vs ~21 days human. Phase 6.0 pilot validates.** | P5 |

### Auto-decisions on the plan's 8 open questions (subagent M4)

| Q# | Question | Decision | Reason |
|---|---|---|---|
| 1 | LLM model — Sonnet 4.6 vs Opus 4.7 | **Pilot both per H3, then pick on human-review burden** | P1, evidence-based |
| 2 | Manual review depth — 5%/10%/20% | **10%, with the new review UI from E8** | Subagent M3 + plan default |
| 3 | Public-domain catalog — strict to CB-documented vs broader | **Stay strict to CB-documented set (Whitman, Glaspell, Grimké, Petry, Baldwin, Hardy, Chekhov, Mansfield, Moore, Jerome) plus the 60 in literaryWorks.json** | P5 (explicit), audit alignment |
| 4 | Cross-text pair sourcing — real essay/lecture pairs vs paraphrased real debates | **Verbatim short excerpts from real sources where possible (40-80 words, fair-use-defensible); explicit "in the style of" framing where not. NEVER paraphrase a claim and attribute it.** | Subagent H2 |
| 5 | Phase 1 dependency on Phase 4 sources | **Already done — moot** | Reality reconciliation |
| 6 | Modules 2 Easy/Hard tracks | **Yes, in scope. Same rubric. Adaptive routing already in scope per existing test files.** | P1 |
| 7 | Bilingual passages | **No, defer to TODOS.md** | E7, P3 |
| 8 | Re-author explanations too | **Yes, in scope** | E2, P1 |

## Section-by-section evaluation (1-11)

### Section 1: Architecture
**ASCII dependency graph for the new pipeline:**
```
                    ┌────────────────────────────┐
                    │ docs/CB_RW_AUTHENTICITY_   │ (rubric, prompt prefix)
                    │ RUBRIC.md                  │
                    └────────────┬───────────────┘
                                 │
                                 ▼
┌──────────────┐   ┌──────────────────────────┐   ┌────────────────┐
│ rwSources/   │──▶│ scripts/authorRWItem.mjs │◀──│ scripts/prompts│
│ *.json       │   │   (NEW — Phase 5)        │   │ rwAuthor*.md   │
│ (60+100+25+  │   └────┬───────────────┬─────┘   │ (NEW — Phase 5)│
│  25 sources) │        │               │         └────────────────┘
└──────┬───────┘        ▼               ▼
       │           drafts/rw/      drafts/rw/
       │           approved/       needs-human-review/
       │                │
       │                ▼
       │         ┌─────────────────────────┐
       │         │ Manual Review UI (E8)   │ (NEW — Phase 5.5)
       │         └────────────┬────────────┘
       │                      │
       │                      ▼
       │         ┌─────────────────────────┐
       └────────▶│ scripts/validateRWBank  │◀── scripts/calibrateModule.mjs
                 │   .mjs (existing)       │       (Math primitives reused)
                 └────────────┬────────────┘
                              │
                              ▼
                src/data/practiceTests/practiceTest{1-12}RW.js
                              │
                              ▼
                docs/calibration_set/rw/_build.mjs --regenerate
                              │
                              ▼
                Re-rated calibration → exit gate (gap ≤ 0.5)
```

**No issues found** at the architectural level beyond what's already flagged in subagent findings (C3, C4 on data model, M2 on cache prefix). Pipeline is straightforward generator + validator + ship.

### Section 2: Error & Rescue Map

| Codepath | Failure mode | Exception class | Rescue? | Action | User sees |
|---|---|---|---|---|---|
| `authorRWItem(spec)` | Anthropic API 429 | `RateLimitError` | Y | Backoff 30s, retry 3× | Nothing (transparent) |
| `authorRWItem` | Anthropic API timeout | `TimeoutError` | Y | Retry 2×, then write to `drafts/rw/needs-human-review/` | `WARN` log line |
| `authorRWItem` | LLM returns malformed JSON | `JSONParseError` | Y | Retry 1× with "valid JSON only" instruction; else needs-human | `WARN` log line |
| `authorRWItem` | LLM returns refusal | `ContentPolicyRefusal` | Y | Skip item, log, continue | `ERROR` log + skip |
| `validateStem(item)` | Stem doesn't match registry | (lint) | N (by design) | Re-author up to 3× | counted in retry budget |
| `validateBankSkeletons` | Item matches existing skeleton (Jaccard >0.40) | (lint) | N | Re-author with anti-templating instruction | counted in retry budget |
| `validateEntityRegistry` | Researcher not in approved list | (lint) | N | **GAP — new entity prompt asks LLM to provide source URL → human verification queue** | block until verified |
| `_build.mjs --regenerate` | items.json malformed after regen | `SchemaMismatchError` | N ← GAP | **Add: validate against JSON schema at write time** | `ERROR` halts ship |
| `validateDistractorWords` | Token not in wordlist (proper noun) | (lint, false positive) | N ← GAP | **Add: proper-noun whitelist + opt-in `unverified: true`** (subagent H4) | counted in retry |

**Gaps:** New entity verification queue, JSON schema check at regen, proper-noun whitelist. All carried forward.

### Section 3: Security & Threat Model

| Threat | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Prompt injection via source DB content | Low | Med | Source DB is curated by us; no user input flows in. LLM prompt sanitization at boundary. |
| Copyright/IP violation (real excerpts) | Med | High | Public-domain only for literary (Gutenberg-linked); fair-use 40-80 words for non-PD academic; explicit attribution. **Audit `publicDomainYear` field on every literary entry before ship.** |
| Real-researcher consent (subagent L4) | Low | Med | README.md line 100 mentions opt-out but ship-before-email. **Add: pre-ship email outreach to all 100 named researchers with 14-day notice.** |
| LLM hallucinates real-sounding fake claim attributed to real author (subagent H2) | High | High | Lint enforces verbatim quote OR "in the style of" framing. No paraphrased claims with named attribution. |
| Source DB tampering (malicious PR adding fake researcher) | Low | High | Lint validates `verifiable: true` requires source URL. PR review gate. |

### Section 4: Data Flow & Interaction Edge Cases

```
SOURCE DB ──▶ AUTHOR PROMPT ──▶ LLM ──▶ JSON PARSE ──▶ LINT ──▶ WRITE ──▶ INTEGRATE
   │              │              │         │            │         │           │
   ▼              ▼              ▼         ▼            ▼         ▼           ▼
 [missing       [oversize     [refusal? [malformed   [stem        [disk       [dup
  field?]        prompt?]     timeout?]  empty?]      mismatch?]   full?]      id?]
 [stale URL?]   [prompt-      [hallucin- [JSON in     [skeleton    [perms?]   [test
 [dup id?]       inject?]      ation?]    string]      clone?]                   spec
                                                                                  drift?]
```

**Edge case coverage:**
- Idempotency: re-running `authorRWItem` for same `(skill, difficulty, source-id, test-N, module-N, position)` should produce stable output (cache hit). **Add: deterministic seed in prompt.**
- Concurrent authoring: parallel workers across tests must not pick the same source twice. **Add: lock file or DB transaction on source picks.**
- Bank growth during author: if Test 1 authors items A-F and bank-skeleton lint runs, then Test 2 starts, Test 2's lint must see Test 1's just-authored items. **Sequential by-test ordering enforced.**

### Section 5: Code Quality
- DRY: validateRWBank.mjs already imports Math primitives. ✅
- Naming: `RW_STEM_REGISTRY`, `RW_SKILL_BLUEPRINT` — clear. ✅
- Over-engineering: pipeline has 7 phases for one bank regen. With Approach A locked, this is appropriate, not bloated.
- Under-engineering: per subagent C3, retry-with-feedback is hand-waved; needs structured anti-templating mechanism.

### Section 6: Test Review

**See Phase 3 (Eng review) for full test diagram + plan artifact.**

For LLM/prompt changes: this plan is entirely an LLM/prompt change. Required eval suites:
1. **Calibration set re-rate** — exit gate, gap ≤ 0.5 (already in plan §7).
2. **LLM-judge eval (E1)** — blind-rate 50 generated items vs 50 PT4-11 items, target gap ≤ 0.5.
3. **Lint pass-rate eval** — % of authored items passing all lints first try (target ≥ 70% to keep human-review tractable).
4. **Per-skill stem fidelity** — 100% canonical stem for words-in-context (subagent H5).

### Section 7: Performance
- LLM cost: per plan §5 = $20-50 (under-modeled per subagent M2). **Re-baseline with cache strategy specified.**
- Per-item authoring time: ~10s (Sonnet) or ~30s (Opus). 648 items × 30s = 5.4 hours wall-clock for full regen at Opus, 1.8 hours at Sonnet. Parallelizable across tests.
- Bank-skeleton lint: O(N²) by item, N=648 → ~420K comparisons. With pre-tokenized 12-grams, ~30s total. Acceptable.

### Section 8: Observability
**Logging at:**
- Each authoring attempt (skill, difficulty, source, model, retry count).
- Each lint failure (which lint, item ID, retry count).
- Each needs-human-review write (with reason).
- Final regen summary (per-test pass/fail, total cost, total time).

**Metrics:** items authored, items passed first try, retry distribution, cost-per-item, calibration delta.

**Dashboards:** none needed — this is an offline pipeline run by founder, not a production service.

### Section 9: Deployment & Rollout

- Migration safety: ship is replacing item content in JS files. No DB migration. Backward-compat: yes (item shape unchanged per project memory).
- Feature flags: not applicable (content swap, not feature swap).
- Rollback: `git revert` on the regen commits per test. Per Approach A premise gate, **ship all 12 together**, but commit per-test internally for forensic rollback.
- Post-deploy verification: take Test 1 end-to-end as a student (subagent's own success criterion #5). Add: sample 10 random items from each test, verify rendering in dev.

### Section 10: Long-Term Trajectory
- Tech debt introduced: minimal — pipeline is self-contained, sources are versioned, lints are tested.
- Path dependency: makes Math/R&W consistent, eases future test 13+, opens per-student authoring (Phase 8).
- 1-year question: a new contributor reading `rwSources/_README.md` + `validateRWBank.mjs` should understand the pipeline in <30 min. Currently true for the lint script; less true for the (yet-to-build) `authorRWItem.mjs`. **Address in Eng phase.**

### Section 11: Design & UX Review — SKIPPED (no UI scope detected, except E8 manual review UI which is internal tooling → handled in DX phase)

## Required CEO Outputs

### NOT in scope (deferred to TODOS.md)

- E5: CI integration of validateRWBank.mjs on every commit touching `practiceTest*RW.js`
- E6: Per-student adaptive item generation (Phase 8+)
- E7: Bilingual passage support (no source DB, requires new sourcing)
- Score-prediction shadow A/B (subagent C1) — flagged at final gate as taste decision; if user agrees, this becomes Phase 8

### What already exists

See "Reality-vs-Plan reconciliation" table at top.

### Dream state delta

Plan moves us 60% toward 12-month ideal. Missing: score-prediction loop (subagent C1), self-improving content engine, per-student generation. Not blocking; add to TODOS.md.

## Phase 1 Completion Summary

- ✅ Premise gate: Locked at Approach A (re-author all 648, ship together)
- ✅ Step 0A-0F: All sub-steps run, mode SELECTIVE EXPANSION
- ✅ Reality-vs-plan reconciliation: Phases 1-4 mostly done
- ✅ CEO Claude subagent: 21/60 score, RECONSIDER-APPROACH verdict, all findings absorbed
- ✅ Codex CEO voice: unavailable — tagged `[subagent-only]`
- ✅ All 8 open questions auto-decided
- ✅ Sections 1-10 evaluated; Section 11 skipped (no UI)
- 📋 Carried to final gate as taste decisions: subagent C1 (wrong North Star), subagent C2 (predictive validity vs authenticity), subagent A1+A2 (hire/license alternatives), M5 (AI-authored reputational positioning)

**Phase 1 complete.** Codex: N/A. Claude subagent: 21/60, 4 critical + 5 high + 6 medium + 4 low findings.
Consensus: 0/6 confirmed (single-voice mode), all critical findings flagged regardless.
Passing to Phase 3 (Eng review). Phase 2 (Design) skipped — no UI scope.

---

# /autoplan — Eng Review

**Mode override:** Per autoplan rules, scope challenge is locked from CEO premise gate (re-author all 648). Eng review hardens the execution plan.
**Dual voices:** Codex unavailable → tagged `[subagent-only]`.
**Date:** 2026-05-05

## Critical correction: my CEO auto-decisions were wrong on two points

The Eng subagent caught two errors in my CEO block that materially change the plan. Surfacing here so they're in the audit trail:

1. **CEO §0E Q6 was wrong.** I auto-decided "M2 Easy/Hard tracks — Yes, in scope. Adaptive routing already in scope per existing test files." Disk reality: `src/data/practiceTests/practiceTest*RW*M2Easy*` returns NO matches. Only Math has M2Easy variants. **Corrected:** R&W ships single-file (M1+M2 in one file) and the plan does not introduce R&W adaptive routing. Item count stays 648, not 972. Removed from open-questions list.

2. **CEO Reality-vs-Plan table called Phase 3 ✅ done.** It is not. The 10 lint functions are written but `scripts/validateRWBank.mjs:1128 main()` is a literal stub: `console.log(...); process.exit(0);`. Phase 3 is **library-done, CLI-stub**. Real Phase 3 finish requires wiring `main()`, implementing `--validate-sources`, `--check=`, exit-code-on-violation, plus a test suite (zero tests today vs Math's 93-assertion suite). Estimated remediation: **1–2 days of CC work**, gated before Phase 5.

## Step 0: Eng Scope Challenge

Reused from CEO Step 0B (existing code leverage). Scope is locked at Approach A.

**Complexity check:** Plan touches ~25 files (12 RW test files + new author script + ~11 prompt files + sources tweaks + lint test suite + manifest format + rebuild script). >8 files = smell, but content regen unavoidably touches many files. Real complexity smell is the *coupled chain of unfinished prerequisites* (F1–F4 in subagent findings).

**Search check (Layer 1/2/3):**
- Anthropic prompt cache breakpoints (Layer 1): docs say cache is per-prefix, 5-min TTL. Plan must respect.
- Structured-output mode for Anthropic (Layer 1): `tool_choice` with JSON schema is the conventional way to constrain LLM outputs to a fixed shape — eliminates "47KB JSON blob" failure mode.
- Idempotency in LLM pipelines (Layer 2): tag with `(spec_id, prompt_hash) → response_hash` manifest is current best practice.
- Skeleton-as-construct vs lint (Layer 3): forcing structural diversity by construction (LLM picks 1-of-N pre-authored openings) sidesteps the convergence problem CEO C3 surfaced. Conventional "lint-and-retry" doesn't converge.

## Step 0.5: Eng Dual Voices

**Codex eng voice:** UNAVAILABLE. Tagged `[codex-only-N/A]`.

**Claude eng subagent:** Returned with 17 findings (4 CRITICAL, 6 HIGH, 5 MEDIUM, 2 LOW), verdict NEEDS-FIXES-FIRST, scorecard 21/60.

### Eng consensus table

| Dimension | Claude subagent | Codex | Consensus |
|---|---|---|---|
| 1. Architecture sound? | 5/10 — concept right; no idempotency, no concurrency, main() stub, skeleton-allowlist hand-waved | N/A | `[subagent-only]` flagged F3, F5, F10, F14 |
| 2. Test coverage sufficient? | 2/10 — zero tests on validateRWBank, no PT4-11-passes-our-lints test, no calibration-rebuild test | N/A | `[subagent-only]` flagged F3, F4, F16 |
| 3. Performance risks addressed? | 3/10 — cost order-of-magnitude wrong, N² lint not optimized, no rate-limit | N/A | `[subagent-only]` flagged F6, F15 |
| 4. Security threats covered? | 3/10 — prompt injection dismissed, copyright/IP under-modeled | N/A | `[subagent-only]` flagged F7, F8 |
| 5. Error paths handled? | 4/10 — happy path good; no resume, vm parse errors propagate | N/A | `[subagent-only]` flagged F5, F13 |
| 6. Deployment risk manageable? | 4/10 — calibration gate has no implementation; spec drift in §6 | N/A | `[subagent-only]` flagged F1, F4 |

### All 17 subagent findings — auto-decided

| ID | Severity | Finding | Decision | Principle |
|---|---|---|---|---|
| **F1** | CRITICAL | Plan §6:178 says "Preserve PASS items (100/360)" — contradicts Approach A "re-author all 648" | **Edit §6 step 1: remove preservation. Use audited PASS items as comparison fixtures only.** | P5 (explicit), Boil the Lake |
| **F2** | CRITICAL | R&W has no M2Easy files on disk; CEO Q6 was wrong | **Strike R&W M2Easy from scope. Item count stays 648.** | P5 |
| **F3** | CRITICAL | validateRWBank.mjs main() is a stub; library-done, CLI-stub | **Add Phase 3.5 (1-2d CC): wire main(), implement --validate-sources, --check=, exit-code-on-violation, write test suite mirroring `scripts/__tests__/calibrateModule.test.mjs`** | P1 |
| **F4** | CRITICAL | Calibration `_build.mjs` has no `--regenerate` mode for re-rate harness | **Add Phase 5.0: build `docs/calibration_set/rw/_rebuild.mjs` that anonymizes 20 new + 20 PT4-11 items, shuffles, emits LLM-judge harness. Decide rater = LLM-judge (E1) vs human; default LLM-judge with 3-rater majority. ~0.5-1d CC.** | P1, P3 |
| **F5** | HIGH | No idempotency / resume mechanism for partial regen | **Mandate `temperature: 0` for author calls. Add `drafts/rw/manifest.json` listing `{specId: {model, promptHash, status, outputPath, lintsPassed[]}}`. `authorRWItem.mjs --resume` skips completed specs.** | P5 |
| **F6** | HIGH | Cost model is order-of-magnitude wrong (real Sonnet $150-300, Opus $750-1500) | **Re-baseline. Set hard cost ceiling in pipeline (e.g., $500). Track tokensUsed per-item. Specify cache strategy: rubric is the only cached prefix; per-skill prompt is per-call.** | P5 |
| **F7** | HIGH | Prompt injection from `passagePromptHint` is real once contributor PRs land | **Add lint scanning passage prompt fields for injection patterns (`ignore\|disregard\|new instructions\|system:\|<\|im_start\|>\|forget\|override`). Cap field length at 400 chars. Add CODEOWNERS gate on `rwSources/*.json`. Use Anthropic structured-output mode (JSON schema) to lock output shape.** | P1, security |
| **F8** | HIGH | Copyright/IP under-modeled; pre-ship-email mitigation is fictional-effort | **Add hard pre-Phase-5 gate: IP review by counsel. Categorize researchers by living/deceased; flag living ones in `researchers.json` with `livingAsOf: 2026-05-05` field. For living: prefer verbatim short quotes (40-80 words, attribution-clear) OR explicit "in the style of [author]" framing. Never paraphrase a claim and attribute by name without verbatim source.** | Legal/risk |
| **F9** | HIGH | Cross-text DB has 25 entries for 24 items (zero margin); CEO C4 said "triple to 75+" with no plan | **Make explicit Phase 4.5: cross-text expansion. Either (a) recruit 50 new pairs in week 1 of Phase 5 (multi-week research project) OR (b) accept 25-pair budget and lower-bound per-test CTC usage to 2 items max (which is the current target).** | P5 |
| **F10** | HIGH | Skeleton allowlist mitigation has no owner, no validation, no source | **Mechanism = constraint, not template. Author 30 distinct openings/skill (~330 total) by hand-extracting from PT4-11 + light synthesis. Validate by sampling 30 openings into the prompt, confirming bank-skeleton lint accepts > 90%. Gated before Phase 5.** | P5 |
| **F11** | HIGH | 80%-canonical-stem rate hardcoded with no PT4-11 evidence (also CEO H5) | **Add `scripts/measureStemDistribution.mjs`: walks PT4-11 PDF text, computes per-skill {canonical: pct, variant: pct, other: pct}. Hardcode `validateStemDistribution` thresholds to those measurements. ~0.5d CC.** | P1 |
| **F12** | MEDIUM | Jaccard 0.78 / 3-gram 0.60 / skeleton 0.40 thresholds inherited from Math without recalibration | **Add `scripts/measureJaccardFloor.mjs`: compute intra-PT pair Jaccard distribution across PT4-11. Set threshold = 90th percentile + 0.05 margin per metric. ~0.5d CC.** | P1 |
| **F13** | MEDIUM | `loadRWPracticeTest` propagates `vm.runInContext` parse errors → corrupts whole-bank lint | **Wrap vm.runInContext in try/catch. Emit `parse-error` violation per file. Add JSON-balance pre-check (balanced braces, balanced quotes) for useful line numbers.** | P5 |
| **F14** | MEDIUM | No concurrency control for parallel workers picking same source | **Default to single-threaded (clearer semantics, slower wall-clock). If parallel needed: atomic manifest.json lock on source picks. Plus: add `validateEntityUniquenessAcrossBank` lint as defense in depth.** | P3 |
| **F15** | MEDIUM | O(N²) bank-skeleton comparison in retry hot path (210K pair-compares on every retry) | **Index passages by first-12-token opening; check exact-opening collisions in O(N). Run full Jaccard only on pre-flagged candidates. Skip `validateBankSkeletons` per-item; batch-gate after each test completes.** | P5 |
| **F16** | MEDIUM | `extractEntities` regex NER untested; PT4-11 itself probably fails our lints | **Add `scripts/__tests__/validateRWBank.PT4-11.test.mjs`: run every lint over PT4-11 PDF text. Any failure → adjust the lint, not the PDF. This is the empirical floor.** | P1 |
| **F17** | LOW | `--validate-sources` URL-rot scanning unimplemented; README overpromises | **Implement minimal `--validate-sources` (schema only). Move URL-rot to separate `scripts/checkSourceUrls.mjs` with caching, parallelism limits, quarterly schedule. Update README to match what's implemented.** | P3 |

## Section 1: Architecture (ASCII dependency graph)

Reused from CEO §1, with additions from F5/F7/F14:

```
                     ┌─────────────────────────┐
                     │  Anthropic API          │
                     │  (Sonnet/Opus +         │
                     │   structured-output     │
                     │   JSON schema mode)     │
                     └──────────┬──────────────┘
                                │
                ┌───────────────┴────────────────┐
                ▼                                ▼
     ┌──────────────────┐            ┌──────────────────────┐
     │ Rubric (cached   │            │ Per-skill prompt     │
     │ prefix, ~64K     │            │ template (per-call,  │
     │ tokens, $0.30/M) │            │ ~2K tokens)          │
     └──────────┬───────┘            └──────────┬───────────┘
                │                               │
                └─────────────┬─────────────────┘
                              │
                              ▼
                ┌─────────────────────────────────┐
                │ scripts/authorRWItem.mjs        │
                │  loadSpec → loadSource          │
                │   → injection-lint              │ (NEW: F7)
                │   → buildPrompt(skeleton-1of30) │ (NEW: F10)
                │   → callLLM(temperature:0)      │ (NEW: F5)
                │   → parseJSON(via schema)       │
                │   → runLints                    │
                │   → onFail: retry≤3             │
                │   → writeManifest               │ (NEW: F5)
                └─────────────┬───────────────────┘
                              │
                ┌─────────────┴─────────────┐
                ▼                           ▼
   drafts/rw/approved/           drafts/rw/needs-human-review/
                │                           │
                ▼                           ▼
                                  Manual Review UI (E8)
                                            │
                                            ▼
                  ┌─────────────────────────────────┐
                  │ src/data/practiceTests/         │
                  │ practiceTest{1-12}RW.js         │
                  └─────────────┬───────────────────┘
                                │
                                ▼
                ┌────────────────────────────────────┐
                │ scripts/validateRWBank.mjs --all   │ (NEEDS F3 fix)
                │   - validateStem                   │
                │   - validateStemDistribution       │ (NEEDS F11 calibrate)
                │   - validatePdfUniqueness          │ (NEEDS F12 calibrate)
                │   - validateChoiceUniqueness       │
                │   - validateBankSkeletons          │ (NEEDS F15 perf)
                │   - validateEntityRegistry         │
                │   - validateDistractorWords        │ (proper-noun whitelist)
                │   - validateWithinTestCloning      │
                │   - validateEntityUniquenessAcross │ (NEW: F14)
                │   - validatePromptInjection        │ (NEW: F7)
                └────────────────┬───────────────────┘
                                 │
                                 ▼
                ┌────────────────────────────────────┐
                │ docs/calibration_set/rw/_rebuild   │ (NEW: F4)
                │   anonymize → shuffle → re-rate    │
                │   gate: gap ≤ 0.5                  │
                └────────────────────────────────────┘
```

## Section 2: Code Quality

- **DRY:** ✅ validateRWBank already imports Math primitives. Note: `loadRWPracticeTest` (line 215) duplicates `loadPracticeTest` (Math, line 187) without a try/catch — both should share a hardened helper. F13 mitigation could be a shared `loadTestSafely` exported from a new `scripts/lib/testLoader.mjs`.
- **Naming:** `RW_STEM_REGISTRY`, `validateBankSkeletons` — clear; ✅ matches Math conventions.
- **Over-engineering:** Pipeline scope is appropriate under Approach A.
- **Under-engineering:** main() stub (F3), no manifest (F5), no concurrency control (F14), no injection lint (F7) — listed in audit trail.
- **Cyclomatic complexity:** `extractEntities` (line 853-929, ~80 lines) has multiple regex passes + sentence splits — borderline complex; F16 regression test mitigates.

## Section 3: Test Review (MANDATORY — coverage diagram)

```
CODE PATH COVERAGE (Phase 3 + Phase 5 deliverables)
==================================================
[+] scripts/validateRWBank.mjs (existing; needs F3, F11, F12, F13)
    │
    ├── validateStem()
    │   ├── [GAP]  PASS case (canonical stem) — NO TEST
    │   ├── [GAP]  FAIL case (variant stem)   — NO TEST
    │   └── [GAP]  Edge: [VAR] placeholder    — NO TEST
    │
    ├── validateStemDistribution()
    │   ├── [GAP] [F11] threshold 80% is hardcoded; needs PT4-11-measured baseline test
    │   └── [GAP] regression: PT4-11 must pass this lint — NO TEST
    │
    ├── validatePdfUniqueness()
    │   ├── [GAP] [F12] Jaccard threshold needs PT4-11 floor measurement
    │   ├── [GAP] regression: PT4-11 cross-test pairs must NOT all collide   — NO TEST
    │   └── [GAP] FAIL case: copy of PT4 passage flagged                     — NO TEST
    │
    ├── validateBankSkeletons()
    │   ├── [GAP] [F15] perf: O(N²) hot path                                  — NO TEST
    │   ├── [GAP] [F16] PT4-11 itself must not fail this lint                — NO TEST
    │   └── [GAP] FAIL case: synthetic skeleton clone                        — NO TEST
    │
    ├── validateEntityRegistry()
    │   ├── [GAP] PASS: Robin Wall Kimmerer in registry                      — NO TEST
    │   ├── [GAP] FAIL: "Aiyana Standing Bear" (audit-flagged fabrication)   — NO TEST
    │   └── [GAP] proper-noun whitelist for non-registered names             — NO TEST
    │
    ├── validateDistractorWords()
    │   ├── [GAP] FAIL: "comprehensiver" / "complexs" (audit-flagged)        — NO TEST
    │   └── [GAP] PASS: registered proper nouns ("Tsinnajinnie")             — NO TEST
    │
    ├── validateWithinTestCloning()
    │   └── [GAP] FAIL: Test 1 M1 Q5 vs M2 Q5 cloned passage                  — NO TEST
    │
    └── main()
        └── [GAP] [F3] STUB — no integration test, no exit-code-on-violation  — NO TEST

[+] scripts/authorRWItem.mjs (NEW — Phase 5)
    │
    ├── loadSpec / loadSource / buildPrompt
    │   └── [GAP] all branches untested                                       — NO TEST
    ├── callLLM
    │   ├── [GAP] HTTP 429 retry with backoff                                 — NO TEST
    │   ├── [GAP] Timeout retry                                                — NO TEST
    │   └── [GAP] Refusal handling                                             — NO TEST
    ├── parseJSON
    │   ├── [GAP] valid JSON                                                   — NO TEST
    │   ├── [GAP] LLM returns 47KB blob (per F-eng-5)                          — NO TEST
    │   └── [GAP] structured-output schema-violation                           — NO TEST
    ├── runLints
    │   └── [GAP] coverage delegated to lint test suite                        — NO TEST
    ├── retry loop
    │   └── [GAP] retry budget exhausted → needs-human                          — NO TEST
    └── --resume mode
        └── [GAP] [F5] manifest read + skip                                     — NO TEST

[+] docs/calibration_set/rw/_rebuild.mjs (NEW — F4)
    │
    └── [GAP] anonymize + shuffle + emit-judge-harness                         — NO TEST

EVAL COVERAGE
=============
[+] LLM-judge eval (E1)
    └── [GAP] [→EVAL] generated items vs PT4-11 items, blind-rate gap ≤ 0.5    — NO EVAL HARNESS

[+] Lint regression vs audit-flagged FAIL items
    └── [GAP] [F16] every audit FAIL must be caught by lints                   — NO REGRESSION SUITE

[+] PT4-11 must pass our lints
    └── [GAP] [F16] empirical floor for the entire pipeline                    — NO TEST

──────────────────────────────────────────────────────────
COVERAGE: 0/29 paths tested (0%)
QUALITY:  ★★★: 0  ★★: 0  ★: 0
GAPS: 29 paths need tests; 3 are eval-tier
──────────────────────────────────────────────────────────
```

## Test Plan Artifact (writes to disk per autoplan §Phase 3)

Will be written to `~/.gstack/projects/thehareshbhatia-tech-PerformSAT/hareshbhatia-main-eng-review-test-plan-{datetime}.md` after this section.

## Section 4: Performance

| Metric | Plan estimate | Realistic (per F6) | Mitigation |
|---|---|---|---|
| Total LLM cost (Sonnet) | $20-50 | $150-300 | F6: hard cost ceiling $500, per-item tokensUsed tracking |
| Total LLM cost (Opus) | ~$100-250 | $750-1500 | F6: same |
| Wall-clock (Sonnet, sequential) | ~1.8h | 4-8h with rate-limit + retries | F14: single-threaded default; bumped tier if needed |
| Wall-clock (Opus, sequential) | ~5.4h | 12-24h | F14: same |
| Bank-skeleton lint per retry | "~30s" | ~30s for full bank; runs N times during retry | F15: O(N) opening-index pre-filter |
| Cache effectiveness | "rubric is cacheable" | unspecified; 5-min TTL constraint | F6: batch authoring per-skill within 4-min windows |

## Required Eng Outputs

### NOT in scope (deferred to TODOS.md)

- F17b URL-rot scanning (`scripts/checkSourceUrls.mjs`) — quarterly cron, not blocking ship
- E5: CI integration for validateRWBank (already in CEO TODOS)
- Per-student adaptive generation (already in CEO TODOS)
- IP review for *deceased* researchers — low risk, can clear post-ship

### What already exists

See CEO §"What already exists." Plus correction: Phase 3 is library-done, CLI-stub.

### Failure modes registry (with critical gap flags)

| Failure mode | Caught by | Status |
|---|---|---|
| LLM hallucinates fake claim attributed to real author | F7 injection lint + F8 IP gate + structured output | ⚠️ All three needed |
| LLM templates after item 600 | F10 skeleton allowlist + F15 indexed skeleton check | ⚠️ Both needed |
| Partial regen failure mid-Test-7 | F5 manifest + --resume | ⚠️ Critical gap |
| Cost runaway | F6 ceiling | ⚠️ Critical gap |
| Lint false positive on real proper noun | F16 PT4-11 regression test + proper-noun whitelist | ⚠️ Critical gap |
| Calibration gate has no harness | F4 _rebuild.mjs | ⚠️ Critical gap |
| Source DB tampering via PR | F7 CODEOWNERS + injection lint | ⚠️ Both needed |

## Phase 3 Completion Summary

- ✅ Step 0 scope challenge: locked (Approach A)
- ✅ Step 0.5 dual voices: subagent only (codex unavailable)
- ✅ Sections 1-4 evaluated; ASCII architecture + test diagram produced
- ✅ All 17 subagent findings auto-decided
- ✅ Two CEO mistakes corrected (M2Easy, Phase 3 status)
- 📋 Test plan artifact to be written to disk
- 📋 Carried to final gate: F1 spec drift (need plan §6 edit), F8 IP review (external blocker)

**Phase 3 complete.** Codex: N/A. Claude subagent: 21/60, NEEDS-FIXES-FIRST verdict, 17 findings.
Consensus: 0/6 confirmed (single-voice), all CRITICAL findings flagged regardless.

**Real timeline reality-check (CC compression):**
- Pre-Phase-5 work uncovered by Eng review: F3 (1-2d), F4 (0.5-1d), F8 IP review (calendar 1-2 weeks), F9 cross-text expansion (decide path), F10 skeleton allowlist (1-2d), F11 stem distribution measure (0.5d), F12 Jaccard floor measure (0.5d), F13 vm parse hardening (0.25d), F16 PT4-11 regression suite (0.5d). Total: **~5-8d CC, plus calendar wait for IP review.**
- Phase 5 (authorRWItem.mjs + prompts): **~1.5-2d CC** (revised up from "8d human / 1d CC" given the proper integration work)
- Phase 6 (regen 12 tests): **~1-2d CC** (revised up: cost overruns + retry tail)
- Phase 7 (QA + ship): **~1d CC**

**Honest end-to-end estimate:** ~10-13 CC-days end-to-end (vs plan's 6 weeks human / my CEO claim of "2-3 days CC"). The CEO timeline was wrong because it didn't audit Phase 3's actual completeness.

Passing to Phase 3.5 (DX review).

---

# /autoplan — DX Review

**Mode:** DX POLISH (auto-decided per autoplan default for "enhancement to existing product").
**Persona:** Primary = solo founder iterating fast. Secondary = future OSS/academic contributor PR'ing a researcher into rwSources/. Tertiary = future engineer adding a new lint.
**Product type:** Internal CLI toolchain + JSON-PR contributor workflow + lint library (re-exports primitives).
**Date:** 2026-05-05

## Step 0: DX scope

- Auto-detected product type: **CLI Tool + Library + Contributor Workflow** (CEO already noted DX scope detected via 31+ matches)
- Persona: founder primary, OSS contributor secondary
- Mode: DX POLISH (auto-decided)
- Pilot magical moment vehicle: **Test 7 pilot end-to-end run** (already in scope as Phase 6.0 per CEO E9 / DX-F16)

## Step 0.5: DX dual voices

**Codex DX voice:** UNAVAILABLE. Tagged `[codex-only-N/A]`.

**Claude DX subagent:** Returned 19 findings (3 CRITICAL, 6 HIGH, 7 MEDIUM, 3 LOW), verdict DX-NEEDS-WORK, scorecard avg 3.7/10.

### DX consensus table

| Dimension | Claude subagent | Codex | Consensus |
|---|---|---|---|
| 1. Getting started < 5 min? | 2/10 — TTHW is currently infinite (CLI stub exits 0) | N/A | `[subagent-only]` flagged DX-F1, F2, F12, F13 |
| 2. API/CLI naming guessable? | 4/10 — flag styles inconsistent; Phase 5 CLI undefined | N/A | `[subagent-only]` flagged DX-F3, F5, F11, F14 |
| 3. Error messages actionable? | 5/10 — has problem+got+expected, missing fix half | N/A | `[subagent-only]` flagged DX-F10 |
| 4. Docs findable & complete? | 3/10 — 7 docs no index; README in `generated/`; promises unbacked | N/A | `[subagent-only]` flagged DX-F2, F6, F7 |
| 5. Upgrade path safe? | 4/10 — no version, no CHANGELOG, no CI | N/A | `[subagent-only]` flagged DX-F18 |
| 6. Dev environment friction-free? | 4/10 — no .nvmrc, no engines, no ANTHROPIC_API_KEY doc, no progress UI | N/A | `[subagent-only]` flagged DX-F9, F12, F13 |

### All 19 DX findings — auto-decided

| ID | Severity | Finding | Decision | Principle |
|---|---|---|---|---|
| **DX-F1** | CRITICAL | CLI stub exits 0 (false success — worst possible DX bug) | **Phase 3.5 fix already in scope (Eng F3). Add: until main() is wired, replace stub with `console.error("not yet implemented; see RW_PIPELINE_PLAN.md §3"); process.exit(2)`. 2-line change.** | P1 |
| **DX-F2** | CRITICAL | No top-level CONTRIBUTING.md or README hand-off to R&W pipeline | **Add `CONTRIBUTING.md` at repo root with: code → here, source DB → `scripts/generated/rwSources/_README.md`. Add R&W paragraph to top-level README. ~30 min, blocks first contributor PR.** | P1 |
| **DX-F3** | CRITICAL | `authorRWItem.mjs` Phase 5 CLI surface unspecified | **Add §5.0 to plan: lock CLI before implementation. Subcommand grammar: `author --spec=<file>`, `author --test=N --module=M`, `resume`, `dry-run --spec=<file>`. Common flags: `--model`, `--max-cost`, `--temperature`, `--concurrency`. Match Math's `bank:official extract\|rewrite\|validate\|publish` precedent.** | P5 (explicit) |
| **DX-F4** | HIGH | No npm-script entries for R&W; convention drift from Math | **Add to package.json: `bank:rw:lint`, `bank:rw:lint:test`, `bank:rw:sources`, `bank:rw:sources:strict`, `bank:rw:author`, `bank:rw:resume`, `bank:rw:measure:stems`, `bank:rw:measure:jacc`, `bank:rw:test`. ~10 min.** | P5 |
| **DX-F5** | HIGH | Inconsistent flag styles within validateRWBank.mjs | **Pick subcommand form to match Math: `validateRWBank lint --all`, `validateRWBank sources --strict`. Lock before F3 wires main(). ~2 hrs.** | P5 |
| **DX-F6** | HIGH | README at `_README.md:76-86` lies about what `--validate-sources --strict` does | **Either land Eng F17 split before Phase 5 OR front-load STATUS block at top of README listing what works vs planned. Add smoke test that fails build if any README bullet isn't backed by code.** | P5 |
| **DX-F7** | HIGH | No top-level "what is the R&W pipeline" doc map | **Create `docs/RW_PIPELINE_README.md` with: 4-stage diagram, file map (which doc answers what), command map, TODO map. 30-min write-up. Phase 7 ship gate.** | P1 |
| **DX-F8** | HIGH | Test culture asymmetry vs Math (R&W has 0 tests, Math has 93 assertions) | **Already covered by Eng F3 + Eng's "match Math's test suite shape" requirement. Block Phase 5 on it. Reinforced.** | P1 |
| **DX-F9** | HIGH | Founder regen has no progress UI for 4-8h wall-clock job | **Spec TTY progress UI in §5: per-test bar with item position, retry count, cost-spent / cost-cap, ETA. Use `cli-progress` (50 LOC). Persist last 5 log lines below bar. Falls back to plain logs when not a TTY. ~2 hrs.** | P1, magical moment design |
| **DX-F10** | MEDIUM | No --help / -h / --version | **Add `-h\|--help` (usage + flags + exit codes), `-V\|--version` (matches package.json). 30 LOC.** | P5 |
| **DX-F11** | MEDIUM | Underscore-prefix on CLI scripts (_build.mjs, _rebuild.mjs) collides with "private/generated" Node convention | **Rename to `buildCalibrationSet.mjs` / `rebuildCalibrationSet.mjs`. Decide before F4 ships.** | P5 |
| **DX-F12** | MEDIUM | Node version unconstrained (no .nvmrc, no engines) | **Add `"engines": {"node": ">=20"}` to package.json. Add `.nvmrc` with `20`. 5 min.** | P5 |
| **DX-F13** | MEDIUM | ANTHROPIC_API_KEY undocumented | **Update `.env.local.template` with ANTHROPIC_API_KEY + comment. Update _README.md: "no key for source contributions; ANTHROPIC_API_KEY for authoring." 10 min.** | P5 |
| **DX-F14** | MEDIUM | Plan §3:121 mentions `--lint-only` flag that parseArgs doesn't accept | **Strike `--lint-only` from plan §3, or implement it. Recommend strike.** | P3 |
| **DX-F15** | MEDIUM | No traceback from authored item → source registry entry | **Add to rubric §10 schema: every authored item has `__source: { kind, id }`. Generate `scripts/generated/rwSources/contributorMap.json` post-Phase-6. Auto-generate `CONTRIBUTORS.md` from it. ~0.5 day.** | OSS contributor magical moment |
| **DX-F16** | MEDIUM | Pilot-on-Test-7 buried in §0D bullet E9; should be Phase 6.0 | **Promote E9 to top-level Phase 6.0 in plan §4. Exit criteria: 95%+ first-try lint pass, ≤4h wall-clock, ≤$30 cost, blind-rated CB-grade gap ≤0.5 on 10 random items. If any fail, halt before Phase 6 main run.** | P1, magical moment |
| **DX-F17** | LOW | README diversity targets at `_README.md:88-94` not machine-readable | **Add `diversityTargets.json` co-located with sources. Future enhancement.** | Defer |
| **DX-F18** | LOW | No CHANGELOG.md | **Add CHANGELOG.md with entries per phase ship. Match standard keepachangelog.com format.** | P5 |
| **DX-F19** | LOW | CLI output format `file:line type message` is good but unspecified for JSON | **Lock format in rubric §8. Mandate `validateRWBank --json` for CI consumption (E5). ~1 hr.** | P5 |

## Developer Journey Map (post-fix target)

| Stage | Action | Friction (now) | Friction (after fixes) |
|---|---|---|---|
| Discover | Founder/contributor encounters R&W pipeline | HIGH — no top-level pointer | LOW — README + CONTRIBUTING.md (DX-F2, F7) |
| Install | `git clone && npm ci` | MEDIUM — no engines, .nvmrc | LOW — engines + .nvmrc (DX-F12) |
| Hello World | `npm run bank:rw:lint:test 1` | CRITICAL — stub exits 0 | LOW — real lint output (DX-F1) |
| Real Usage (contrib) | Edit researchers.json, run lint, PR | HIGH — README lies about checks | LOW — README/code aligned (DX-F6) |
| Real Usage (founder) | Run regen pipeline | HIGH — 4-8h quiet terminal | LOW — TTY progress UI (DX-F9) |
| Debug | Lint rejects with explanation | MEDIUM — no `--explain` | LOW — `--explain` flag added |
| Upgrade | Pull main, re-run, expect parity | MEDIUM — no CI, no version | LOW — bank version + CHANGELOG (DX-F18) |

## Empathy narrative (founder, condensed)

> *"I sat down Friday afternoon to start the regen. The CLI printed `validateRWBank.mjs invoked with mode=test` and exited zero. Hung? Good? I scrolled looking for output. Nothing. The main function is a stub. By 6pm I haven't authored a single item — I've been preparing to author."*

This is the journey-blocker that DX-F1 fixes in 2 lines of code.

## TTHW Assessment

- **Current TTHW:** ∞ (CLI stub returns success, can't be done)
- **After DX-F1 alone (stub returns useful error):** 30s fail-fast
- **After DX-F1+F2+F4+F6 (CONTRIBUTING + npm scripts + README/code reconciled):** 3-4 min to genuine pass-or-fail
- **After full polish (F1+F2+F4+F6+F10+F12+F13):** **<2 min — Champion tier**
- **Recommended target:** Competitive (2-5 min) at Phase 5 ship, Champion (<2 min) at Phase 7 ship

## Phase 3.5 Completion Summary

- ✅ Persona, mode, magical moment defined
- ✅ Step 0.5 dual voices: subagent only
- ✅ All 8 passes evaluated; consensus table built
- ✅ All 19 findings auto-decided
- ✅ Journey map produced
- ✅ Empathy narrative captured
- ✅ TTHW assessment + targets

**Phase 3.5 complete.** DX overall: 3.7/10. TTHW: ∞ → target <2 min Champion.
Codex: N/A. Claude subagent: 19 findings, DX-NEEDS-WORK verdict.

---

# /autoplan — Cross-Phase Themes

Concerns flagged independently across multiple phases:

| Theme | Phases | Severity |
|---|---|---|
| **Phase 3 is library-only, not done** | CEO Reality-vs-Plan + Eng F3 + DX F1 | CRITICAL |
| **Cost model is order-of-magnitude wrong** | CEO M2 + Eng F6 + DX F9 implies | HIGH |
| **No top-level R&W pipeline doc map** | CEO §10 1-year question + DX F7 | HIGH |
| **Source DB legal/IP risk under-modeled** | CEO M5 + Eng F8 | HIGH |
| **Plan §6 spec drift (Approach A vs preserve PASS)** | Eng F1 + my own CEO block didn't catch | HIGH |
| **Test infrastructure asymmetry vs Math** | Eng F3 + DX F8 | HIGH |
| **Skeleton allowlist mechanism unspecified** | CEO C3 + Eng F10 | HIGH |
| **Calibration re-rate harness unbuilt** | Eng F4 + DX implications | HIGH |

These are the high-confidence, multi-voice (here: multi-phase since codex unavailable) signals that require resolution before Phase 5 starts.

---

# /autoplan — Decision Audit Trail

| # | Phase | Decision | Classification | Principle | Rationale |
|---|---|---|---|---|---|
| 1 | Phase 0 | Detect UI scope: NO | Mechanical | n/a | 1 grep match, explicitly out-of-scope |
| 2 | Phase 0 | Detect DX scope: YES | Mechanical | n/a | 31+ matches |
| 3 | Phase 0 | Skip Phase 2 (Design) | Mechanical | n/a | No UI scope |
| 4 | Phase 1 | Mode = SELECTIVE EXPANSION | Mechanical | autoplan default |  |
| 5 | Phase 1 | Premise gate → Approach A (re-author all 648) | USER GATE | (user choice) | User selected option B (re-author everything) |
| 6 | Phase 1 | E1 LLM-judge eval → in scope | Auto | P1 | Completeness |
| 7 | Phase 1 | E2 author explanations too → in scope | Auto | P1 |  |
| 8 | Phase 1 | E4 rotate calibration set → in scope | Auto | P1 |  |
| 9 | Phase 1 | E5 CI integration → defer to TODOS | Auto | P3 |  |
| 10 | Phase 1 | E6 per-student adaptive → defer | Auto | P2 |  |
| 11 | Phase 1 | E7 bilingual passages → skip | Auto | P3 |  |
| 12 | Phase 1 | E8 manual review UI → in scope | Auto | P1 |  |
| 13 | Phase 1 | E9 Phase 6.0 Test 7 pilot → in scope | Auto | P5 |  |
| 14 | Phase 1 | Q1 LLM model → pilot both, decide on human-review burden | Auto | P1 |  |
| 15 | Phase 1 | Q2 Manual review depth → 10% with new UI | Auto | default |  |
| 16 | Phase 1 | Q3 Public-domain catalog → strict to CB-documented + 60 in DB | Auto | P5 |  |
| 17 | Phase 1 | Q4 Cross-text sourcing → verbatim or "in style of" only | Auto | subagent H2 |  |
| 18 | Phase 1 | Q5 Phase 1-4 dependency → moot (already done) | Mechanical | reality |  |
| 19 | Phase 1 | Q6 R&W M2 Easy/Hard → **CORRECTED in Eng phase: NO, R&W single-file** | Mechanical (corrected) | reality |  |
| 20 | Phase 1 | Q7 Bilingual → defer | Auto | P3 |  |
| 21 | Phase 1 | Q8 Re-author explanations too → yes | Auto | P1 |  |
| 22 | Phase 1 | Subagent C1 (wrong North Star) | TASTE — surfaced at gate | user sovereignty | |
| 23 | Phase 1 | Subagent C2 (predictive validity vs CB authenticity) | TASTE — surfaced at gate | user sovereignty | |
| 24 | Phase 1 | Subagent C3 (template detection won't converge) → skeleton allowlist mitigation | Auto | P5 | Carry to Eng |
| 25 | Phase 1 | Subagent C4 (cross-text DB margin) → triple to 75+ | Auto | P1 |  |
| 26 | Phase 1 | Subagent H1 (rater agreement) | TASTE — surfaced at gate | user sovereignty | |
| 27 | Phase 1 | Subagent A1+A2 (hire/license alternatives) | TASTE — surfaced at gate | user sovereignty | |
| 28 | Phase 3 | Subagent F1 (plan §6 spec drift) → edit §6 step 1 | Auto | P5 |  |
| 29 | Phase 3 | Subagent F2 (M2Easy not on disk) → strike from RW scope | Mechanical | reality |  |
| 30 | Phase 3 | Subagent F3 (validateRWBank main() stub) → Phase 3.5 (1-2d CC) | Auto | P1 |  |
| 31 | Phase 3 | Subagent F4 (calibration re-rate harness) → Phase 5.0 build | Auto | P1 |  |
| 32 | Phase 3 | Subagent F5 (no idempotency) → manifest + temperature 0 + --resume | Auto | P5 |  |
| 33 | Phase 3 | Subagent F6 (cost model wrong) → re-baseline + $500 hard cap | Auto | P5 |  |
| 34 | Phase 3 | Subagent F7 (prompt injection) → injection lint + CODEOWNERS + structured output | Auto | P1 |  |
| 35 | Phase 3 | Subagent F8 (IP/copyright) → pre-Phase-5 IP review gate | TASTE — surfaced at gate | external blocker |  |
| 36 | Phase 3 | Subagent F9 (cross-text expansion ownership) | TASTE — surfaced at gate |  |  |
| 37 | Phase 3 | Subagent F10 (skeleton allowlist mechanism) → constraint, not template | Auto | P5 |  |
| 38 | Phase 3 | Subagent F11 (stem distribution measure) → measureStemDistribution.mjs | Auto | P1 |  |
| 39 | Phase 3 | Subagent F12 (Jaccard floor measure) → measureJaccardFloor.mjs | Auto | P1 |  |
| 40 | Phase 3 | Subagent F13 (vm parse errors) → try/catch + JSON pre-check | Auto | P5 |  |
| 41 | Phase 3 | Subagent F14 (concurrency control) → single-thread default + atomic manifest | Auto | P3 |  |
| 42 | Phase 3 | Subagent F15 (N² lint) → opening-index pre-filter | Auto | P5 |  |
| 43 | Phase 3 | Subagent F16 (PT4-11 regression test) → empirical floor test | Auto | P1 |  |
| 44 | Phase 3 | Subagent F17 (URL-rot script split) → defer to TODOS | Auto | P3 |  |
| 45-63 | Phase 3.5 | All 19 DX findings auto-decided | Auto | mostly P5 |  |

**Total auto-decisions:** 56. **Taste decisions surfaced at gate:** 6. **User Challenges:** 0 (codex unavailable; single-voice cannot create formal User Challenges).

