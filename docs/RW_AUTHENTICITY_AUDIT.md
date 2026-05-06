# PerformSAT R&W Authenticity Audit — Executive Summary

**Date:** 2026-05-05
**Scope:** All 12 R&W practice tests (PT1–PT12), audited against the 8 official College Board digital practice tests (PT4–PT11).
**Trigger:** User noticed Standard English Conventions questions that "just don't fit" CB authoring.

---

## Bottom line

**The user was right, and the problem is bigger than they noticed.**

- **27% of SEC questions FAIL** the CB authenticity bar (39 of 144).
- **43% of sampled non-SEC questions FAIL** (92 of 216 sampled). Non-SEC is **worse**, not better.
- **The R&W bank is not a hand-authored set of 12 distinct tests** — it is a small set of question templates ("skeletons") that repeat across all 12 tests with surface variables (researcher name, region, plant/animal, art form) swapped between iterations.
- Several whole skill sub-domains (Cross-Text Connections, Text Structure & Purpose literary passages, Expression of Ideas) need to be **rewritten from scratch**, not patched.

---

## Headline numbers

| Domain | Sampled | PASS | BORDERLINE | FAIL | FAIL rate |
|---|---|---|---|---|---|
| **Standard English Conventions** | 144 (full) | 49 | 56 | 39 | **27%** |
| Information and Ideas | 96 | 36 | 38 | 22 | 23% |
| Craft and Structure | 72 | 9 | 23 | 40 | **56%** |
| Expression of Ideas | 48 | 6 | 12 | 30 | **63%** |
| **Total** | **360** | **100** | **129** | **131** | **36%** |

---

## The five most damning findings

### 1. All 24 literary passages are fabricated

CB literary passages are exclusively from **real public-domain authors** (Whitman, Glaspell, Grimké, Petry, Baldwin, Hardy, Chekhov, Mansfield, Marianne Moore, Jerome K. Jerome). Every literary passage in PerformSAT is attributed to an **invented contemporary short-story author with an invented title**:

> "Lara Esposito's 2019 short story 'Closing'" (Test 1 M1 Q5)
> "Aroha Whitford's 2021 short story 'The Lighthouse Keeper'" (Test 3 M1 Q5)
> "Selma Bekele's 2021 short story 'The Loom Room'" (Test 4 M1 Q5)
> "Ahmed Belkacem's 2021 short story 'The Loom Room'" (Test 9 M1 Q5)
> "Itziar Olano's 2021 short story 'The Loom Room'" (Test 10 M1 Q5)

— "The Loom Room" is reused as a story title across **three** different fabricated authors. All 24 passages share one formula: solitary craftsperson at end of workday → physical action → pause → memory of an older relative → "the thought did not unsettle her, it made her steadier." **One fabricated passage repackaged 24 times.**

### 2. Cross-Text Connections uses 2 templates across 11+ tests with identical wrong answers

In every cross-text Q6, Text 2's researcher is "sympathetic to the goals... cautions that '[buzzword]' alone is not the same as [equity goal]... studies of [region] show that without [policy], the model risks recreating exactly the [problem] it was meant to dissolve." The four answer choices are templated across **all 11 instances**:

- A: "By rejecting the [benefits] as overstated."
- B: **correct** in every instance — "By acknowledging the benefits but warning…"
- C: "By arguing that [movement] is technically impossible to scale."
- D: "By insisting that the model has already been disproven by the [region] record."

A student taking 3+ tests in sequence will recognize the template and answer correctly **without reading either passage**. CB authentic distractors vary in form, length, and angle.

### 3. Non-word distractors in SEC questions

CB **never** offers a non-word as a distractor. PerformSAT does, repeatedly:

- **Test 6 Q21** (M1 + M2): "more comprehensiver", "comprehensivest", "more detaileder", "detailedest" (the explanation literally says "not a real form" about its own distractor C)
- **Test 5 Q18** (M1): "complexs"
- **Test 5 Q18** (M2): "valleys's"
- **Test 8 Q21** (M1 + M2): "Library's'", "Denmark's'", "Librarys"
- **Test 6 Q23** (M1 + M2): "whom's", "which's"

### 4. Tests 1 and 2 are essentially the same paper

Multiple Q-numbers across both tests share the same skeleton with only proper nouns swapped:

- Inez Park (T1, "third woman in NWS history, 1972") ↔ Maya Khoury (T2, "first woman to lead signaling-systems team, 1981")
- Reza Ahmadi 1979–1985 in self-imposed silence (T1) ↔ Yusuf Adisa 1989–1994 refusing all major commissions (T2)
- Dr. Aiyana Standing Bear, soil scientist on prairie restoration (T1) ↔ Kalinda Brave Bull, soil scientist on tallgrass prairie root systems (T2) — **fabricated Indigenous scholars**, both
- Tomás Reyna footbridges with visible steelwork (T1) ↔ Akira Tanaka footbridges with exposed timber joinery (T2)

T1+T2 together (24 SEC items) contain **zero** PASSes.

### 5. Quantitative tables have artificially clean signals

Real CB data tables have variance or near-ties to force interpretation. PerformSAT tables are too clean:

- Test 3 Q14: differences of +4.4, +3.5, +3.5, +3.5 (three identical residuals)
- Test 1 Q16: site changes of +11, +12, +11, +11
- Test 8 Q14: stand ages 12, 31, 47, 92 (perfectly monotone)

The answer can be read from the largest absolute value without interpreting the data.

---

## Per-test heat map (PASS/BORDERLINE/FAIL across all R&W)

For SEC (full audit, 12 questions per test):

| Test | PASS | BORDERLINE | FAIL | Health |
|---|---|---|---|---|
| 1 | 0 | 7 | 5 | 🔴 worst |
| 2 | 0 | 6 | 6 | 🔴 worst |
| 3 | 9 | 1 | 2 | 🟢 |
| 4 | 6 | 2 | 4 | 🟡 |
| 5 | 4 | 4 | 4 | 🟡 |
| 6 | 7 | 2 | 3 | 🟢 |
| 7 | 6 | 5 | 1 | 🟢 best |
| 8 | 3 | 5 | 4 | 🟡 |
| 9 | 1 | 8 | 3 | 🟡 |
| 10 | 5 | 6 | 1 | 🟢 |
| 11 | 1 | 9 | 2 | 🟡 (mostly borderline) |
| 12 | 7 | 1 | 4 | 🟡 |

---

## What needs to change — prioritized rewrite plan

In rough order of impact-per-rewrite:

1. **Replace all 24 literary passages.** Source from real public-domain texts. Non-negotiable — this is the most visible flaw to any student taking >1 test.
2. **Replace 18 cross-text passages.** The two cross-text templates are cooked.
3. **Replace 9 literary-letter Central Ideas passages** ("In a 19XX letter to her [colleague], she begins to suspect the only honest [record] left to make is...").
4. **Wholesale rewrite of Tests 1 and 2 SEC sections** — both are templated parallel papers; line-by-line edits won't fix them.
5. **Fix non-word distractors** in Tests 5, 6, 8 SEC items (7 items affected).
6. **Replace within-test transition clones** (Test 8 M1 Q24+25 / M2 Q24+25).
7. **Fix Test 12 M2 Q24** non-CB transition "In fact, similarly,".
8. **Replace fabricated literary works** cited in COE-Textual (e.g., "*The Glass Tide* by Olwen Tregaron, 1936"; "*La Pastorella di Volterra*").
9. **Add variance to quantitative tables** — small noise terms to defeat largest-value picking.
10. **Diversify rhetorical-synthesis goal verbs** — current bank uses 3 goal types in 70%+ of items.

---

## What's good and worth preserving

The audit found **100 questions that genuinely feel CB-authentic** (28%). Notable bright spots:

- **Test 7 (R&W)** — the closest test to genuine CB feel. Use as a quality model.
- **Rhetorical Synthesis** — strongest skill in the bank, especially when grounded in real subjects (mycorrhizal networks, bog bodies, Faroese chain dance, dzong construction, Larin Paraske).
- **COE-Quantitative** — best of C&S's neighbor domain; format mirrors CB. Just needs table noise.
- **Tests 3, 6, 7, 10, 12 SEC sections** — mostly clean, can be triaged item-by-item.

Specific PASS examples to use as rewrite models are listed in `docs/RW_SEC_AUDIT.md` and `docs/RW_NON_SEC_SAMPLE_AUDIT.md`.

---

## Reference documents (deliverables of this audit)

- **`docs/CB_RW_AUTHENTICITY_REFERENCE.md`** — 827 lines. The "what authentic CB looks like" reference, built from PT4–PT11 with verbatim quotes. Use this as the rubric for any rewrites.
- **`docs/sec_questions_extracted.md`** — 3,634 lines. All 144 SEC questions extracted in one place. (Note: module labels in this file are wrong — use line ranges or original file refs.)
- **`docs/RW_SEC_AUDIT.md`** — 502 lines. Per-question SEC verdicts with reasoning and fix recommendations.
- **`docs/RW_NON_SEC_SAMPLE_AUDIT.md`** — 311 lines. Non-SEC sample audit with failure modes and rewrite priorities.

---

## Recommended next steps

This audit produces a hand-off, not edits. Three paths from here:

**Path A — Triage and patch (lowest cost, ~2 weeks):**
Fix the 39 SEC FAILs and the 30 worst non-SEC FAILs by item-level rewrite. Leaves the templated structure intact; students will still notice the patterns.

**Path B — Wholesale rewrite of failing tests (~4 weeks):**
Tests 1, 2, and the cross-text/literary passages get fully re-authored. Other tests get item-level patches.

**Path C — Build a CB-authenticity content pipeline (~6 weeks):**
Treat the R&W bank like the Math bank — establish a CB R&W rubric (parallel to `CB_AUTHENTICITY_RUBRIC.md`), build a content-pipeline script that generates new items from real CB-style sources (real authors, real studies), enforce uniqueness and template-detection lints, then run it across all 12 tests.

Path C is the right long-term answer. Path A is the right short-term answer if launch is imminent. Path B is a middle ground.

User decision needed before any rewrites begin.
