# Learn-Tab Textbook Overhaul — Plan & Content Audit

_Status: **Phase 1 SHIPPED (2026-07-12)** — all 11 R&W chapters rebuilt to the locked
template from the SAT knowledge graph (~500 blocks, was 117), living in the lazy
`src/data/chapters/rwBodies/` corpus (`source.kind: 'rwBody'`, gated by
`rwBodies.test.js`). Phases 2-5 (Math holes, data hygiene, decimal numbering,
two-pane reader) not started._

## Why

Students have questions, study plans, and practice tests — but **nothing to actually learn
from**. Videos exist, but when a concept is missing from a video, the student has no way to
know it's missing. The Learn tab must become a **self-sufficient textbook**: a student with
zero prior knowledge should be able to learn any tested concept **completely, from the text
alone, in plain language**.

Two non-negotiable quality bars for every chapter:

1. **Completeness** — no silent gaps; the concept is taught in full, not assumed.
2. **Clarity** — plain language, define every term, teach from zero.

Reference design (visual target for the eventual reader): a two-pane textbook — persistent
table of contents on the left, textbook-styled lesson on the right, with decimal `1.1.02`
sub-section numbering. **Layout is deferred; content comes first** (see Sequence).

## Scope decisions (from the user, 2026-07-10)

- **Priority = content overhaul**, not the two-pane layout. The reader is built _last_.
- **TOC is sub-section deep** — decimal numbering (`domain → skill → concept`, e.g. `1.3.01`).
- This pass began as a **coverage + pattern audit**; it has since produced a **locked chapter
  template** and moves into Phase 1 authoring next.

## Live previews (Claude artifacts)

- **Audit + blueprint:** https://claude.ai/code/artifact/f459ba99-ca98-4b34-b7e2-a3b7a1ff2e2c
- **Sample chapter (Boundaries), v2:** https://claude.ai/code/artifact/d252c608-3ae8-4616-b1f7-a827e182a996
- Static reference copy of the sample chapter: `docs/learn-textbook/sample-chapter-boundaries.html`

---

## 1. What the real Digital SAT tests (verified)

Deep-research pass, 25/25 structural claims confirmed 3-0 against College Board primary
sources (assessment framework, spec overview, technical manual, Skills Insight).

- **Reading & Writing** — 54 Q / 64 min (2 adaptive modules × 27 = 25 operational + 2 pretest).
  Discrete 4-option MC, one question per 25–150-word passage/pair.
- **Math** — 44 Q / 70 min (2 modules × 22 = 20 operational + 2 pretest). ~75% MC / ~25%
  student-produced response; ~30% in context. Built-in Desmos + reference sheet throughout.
- Section-adaptive: Module 1 routes Module 2 easy/hard. Scoring is **IRT / route-dependent**
  — there is **no fixed raw→scaled table** (teach conversion as an approximation).

### Official domain weightings (operational questions)

| Section | Domain | Weight | Skills |
|---|---|---|---|
| R&W | Craft & Structure | ≈28% (largest) | Words in Context · Text Structure & Purpose · Cross-Text Connections |
| R&W | Information & Ideas | ≈26% | Central Ideas & Details · Command of Evidence (Textual + Quantitative) · Inferences |
| R&W | Standard English Conventions | ≈26% | Boundaries · Form, Structure & Sense |
| R&W | Expression of Ideas | ≈20% | Rhetorical Synthesis · Transitions |
| Math | Algebra | ≈35% | 5 linear skills |
| Math | Advanced Math | ≈35% | Equivalent expressions · Nonlinear equations & systems · Nonlinear functions |
| Math | Problem-Solving & Data Analysis | ≈15% | 7 skills (ratios, %, 1-var data, 2-var data, probability, margin of error, statistical claims) |
| Math | Geometry & Trigonometry | ≈15% | Area & volume · Lines/angles/triangles · Right-triangle trig · Circles |

> Per-skill trap taxonomies are **not** published by College Board. The "question patterns /
> traps" layer is medium-confidence and must be validated against official Bluebook items.

---

## 2. Coverage audit vs. current 27 chapters

Figures computed by executing the actual content modules (not estimates).

**Headline: the content is lopsided against the test.** Math is deep and well-built; Reading &
Writing — half the exam — is a thin, templated stub.

- Math: **898 blocks**, 83 worked examples, 79 lessons across 14 chapters (avg ~64 blocks/ch).
  Already sub-sectioned via per-lesson headings.
- R&W: **117 blocks** across 11 chapters (avg ~10.6 blocks, **1 worked example each**). Every
  chapter is the same fixed template with **zero heading blocks** — not ready for decimal
  numbering, and it teaches _test strategy_ while assuming the underlying grammar/skill.
- Strategy: 2 chapters, 24 blocks.

### Prioritized gaps

| Priority | Gap | Action |
|---|---|---|
| P0 | `statistical-claims` (studies vs. experiments, M3.7) — **no lesson exists** | Author new |
| P0 | Two-variable data: scatterplots & models (M3.4) — missing from Statistics | Author new |
| P1 | Advanced-Math nonlinear breadth — polynomial/rational/radical/absolute-value + nonlinear systems | Expand |
| P1 | **All R&W depth** — half the exam at ~1/8 the depth; Craft & Structure (largest) is thinnest | Rebuild |
| P1 | Thin Math chapters — Functions (32), Equivalent Expressions (20), Ratios/Rates (22) | Deepen |
| P2 | Probability + margin-of-error content exists in Statistics but `cbSkills` **untagged** → app reports uncovered, distorts drill routing | Re-tag / split |
| P2 | R&W + Strategy have zero heading blocks → no `1.1.02` numbering possible | Author headings |

---

## 3. Decimal-numbered blueprint (target TOC)

Three levels — **domain → skill → concept** — matching the reference's `1.1.02` navigation.
Reorders R&W into the official within-module sequence (Craft & Structure first) and splits the
overloaded Statistics chapter into its official PSDA skills. Numbering maps 1:1 to `cbSkills`.

```
Part 0 · The Digital SAT
  0.1 How the Test Works      0.1.01 adaptive design · 0.1.02 scoring/IRT · 0.1.03 Bluebook tools
  0.2 Test-Day Tactics        0.2.01 pacing · 0.2.02 grid-in (SPR) entry rules

Part 1 · Reading & Writing
  1.1 Craft & Structure       Words in Context · Text Structure & Purpose · Cross-Text Connections
  1.2 Information & Ideas      Central Ideas · Command of Evidence (Textual) · (Quantitative) · Inferences
  1.3 Standard English Conv.   1.3.01 Boundaries · 1.3.02 Form, Structure & Sense
  1.4 Expression of Ideas      Transitions · Rhetorical Synthesis

Part 2 · Math
  2.1 Algebra                 linear eq 1-var · 2-var · linear functions · systems · inequalities
  2.2 Advanced Math           equivalent expr · quadratics · exp/radical · poly/rational/abs (NEW) · nonlinear systems (NEW) · transformations
  2.3 Problem-Solving & Data  ratios · percentages · 1-var data · 2-var data (NEW) · probability (retag) · margin of error (retag) · statistical claims (NEW)
  2.4 Geometry & Trig         area & volume · lines/angles/triangles · right-triangle trig · circles
```

---

## 4. Locked chapter template

Established via the Boundaries sample (v2). The problem it fixes: current R&W chapters are
**strategy guides that assume the skill** — they never teach the grammar/concept itself. New
chapters **teach the concept completely from zero, then layer SAT strategy on top.**

Every chapter follows the same spine (adapted per subject):

1. **Roadmap** — 3 labeled stages up front so the student sees the whole shape.
2. **Stage 1 · Foundations** — the underlying idea from zero (e.g. what a clause is), plus the
   one reusable test.
3. **Stage 2 · The rulebook / method / techniques** — a **numbered** set of units, each in the
   identical shape: **rule → right example → wrong example → why.** Errors are flagged inside
   the rule they break.
   - R&W conventions → numbered **rules**
   - R&W reading → numbered **method** steps
   - Math → numbered **techniques**
4. **Stage 3 · On the test** — a **decision flow** routing to the numbered units, the common
   **traps**, a **worked example** and **check-yourself** questions (all cross-referencing the
   numbered units), and a **one-page summary** table.

Voice: plain language, short sentences, define every term on first use, concrete right/wrong
pairs, no assumed knowledge. No emojis. Tri-color brand usage (purple = structure, orange =
emphasis, green/red = right/wrong).

---

## 5. Sequence

1. **Phase 1 — Rebuild Reading & Writing** to the template (biggest gap; half the exam). All 11
   chapters get real multi-section structure (headings for `1.1.02` numbering), the numbered
   method/rulebook, 3–5 worked examples, expanded trap catalogs.
2. **Phase 2 — Fill the Math holes** — two-variable data, statistical claims, Advanced-Math
   nonlinear breadth. Add missing diagrams.
3. **Phase 3 — Data hygiene** — split Statistics into its PSDA skills; fix untagged
   probability/margin-of-error `cbSkills` (restores drill routing); deepen thin Math chapters.
4. **Phase 4 — Impose decimal numbering** across all parts as real section anchors,
   distinguishing lesson-title headings from the composer-injected "Common Mistake" / "Test-Day
   Strategy" headings.
5. **Phase 5 — Build the two-pane reader** (persistent TOC left, textbook right, in-book search,
   figure captions) against the now-numbered content.

## Where the content lives (for authors)

- Chapter defs: `src/data/chapters/{math,rw,strategy}Chapters.js`
- Math bodies composed from `src/data/contentTabs/lessons/*Lessons.js` via
  `src/data/chapters/composeChapterBlocks.js`
- Block schema: `src/data/contentTabs/schema.js` · renderer: `SectionContent` in
  `src/components/learn/ContentTabRenderer.jsx`
- TOC: `src/components/learnTab/LearnTab.jsx` · reader: `src/components/learnTab/ChapterReader.jsx`
  (currently single-column, **not** two-pane)
- **Bundle invariant:** never static-import the corpus; `ChapterReader` dynamic-`import()`s it.
