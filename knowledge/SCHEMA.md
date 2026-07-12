# SAT Knowledge Graph — Node Schema & Originality Rules

Purpose: turn expert SAT instruction (studied from multiple reference books, official
tests, and our own bank data) into an internal, fully original knowledge graph that
powers (a) the Learn tab interactive textbook and (b) the AI tutor's diagnosis and
teaching. The reference material is teacher-training input only; after study, only
understanding remains. Nothing in this directory may reproduce any source's wording,
examples, organization, or distinctive terminology.

## Directory layout

```
knowledge/
  SCHEMA.md            ← this file
  MANIFEST.md          ← book → chapter → page-range extraction map + status
  raw/                 ← per-source concept notes (extraction output, already original)
    reading/           ← from SAT Reading study
    grammar/           ← from SAT Grammar/Writing study
    math-orange/       ← from math study source A
    math-panda/        ← from math study source B
  graph/               ← synthesized, source-free unified graph (the real product)
    math/              ← one file per concept node
    rw/
    INDEX.md           ← node list + edge summary
    MISCONCEPTIONS.md  ← cross-cutting misconception index (diagnostic use)
```

`raw/` notes may mention which source they were distilled from (for our provenance
only). `graph/` nodes are source-free: they must read as our own understanding and
cite nothing.

## Concept node schema

One markdown file per node: `graph/<section>/<node-id>.md` with frontmatter.
Node ids are kebab-case, stable, and referenced by other nodes (`[[node-id]]`).

```markdown
---
id: linear-systems-solution-count
section: math | rw
domain: <our four SAT domains per section, matching bank taxonomy>
skill: <bank skill/pattern id(s) this node maps to, e.g. algebra.linear_systems>
difficulty_span: [easy, hard]   # where on the exam this concept shows up
prereqs: [node-id, node-id]     # must-understand-first edges
unlocks: [node-id]              # what this concept is a prerequisite for
related: [node-id]              # non-prereq lateral connections
---

# <Concept name — our own name, plain language>

## What it is
2–4 sentence definition, first-principles, no assumed memorization.

## Why it exists / why the SAT tests it
What underlying ability the College Board is probing; when it appears
(question shapes, typical positions in a module, difficulty band).

## Mental model
The ONE compact way an expert holds this concept (an image, an invariant,
a decision rule). This is what the tutor should teach first.

## Expert reasoning process
Numbered steps of how a top scorer actually processes such a question,
including what they look at FIRST and what they deliberately ignore.

## Misconceptions
For each (typically 2–5):
- **<misconception-id>** — what the student wrongly believes; WHY it forms
  (what prior schooling or plausible-but-wrong heuristic produces it);
  what wrong answer it produces; how the test writes traps for it.

## Diagnostic indicators
Observable signals that a student holds each misconception: which distractor
they pick, timing patterns, what they say when explaining. Keyed to
misconception-ids so the tutor can match evidence → root cause.

## Remediation pathways
For each misconception: the shortest teaching move that fixes it
(counterexample, contrast pair, re-derivation), and which prereq node to
revisit if the fix doesn't land.

## Mastery criteria
What the student must be able to DO (not recite) to count as mastered;
what question evidence (difficulty × consistency) counts as proof.

## Difficulty ladder
easy → medium → hard: how the exam escalates this concept (added layers,
disguises, combined concepts). Names which other nodes get composed in
at the hard end.

## Teaching notes
How to explain to a struggling / average / advanced / 1500+ student —
different entry points, not shortened versions of the same script.
```

## Raw extraction note schema (`raw/<source>/<chapter-slug>.md`)

Looser than graph nodes — the extractor records understanding, flagged for later
synthesis:

- **Concepts taught** (candidate node ids + 1-line definitions in our words)
- **Teaching philosophy observed** (sequencing choices, what's taught before what, why)
- **Expert reasoning patterns** (how the author's method actually works, generalized)
- **Misconceptions the source targets** (described in our words, with the why)
- **SAT patterns claimed** (question structures, trap designs — to verify against
  official material and our bank before trusting)
- **Prerequisite edges implied**
- **What this source does well / poorly on this topic** (for multi-book synthesis)

## Originality rules (hard requirements)

1. **Concepts only.** Extract understanding: ideas, methods, sequencing logic,
   misconception taxonomies, reasoning processes. These are ideas, not expression.
2. **Zero retained expression.** Never copy or closely paraphrase wording, example
   problems, passages, answer choices, explanations, analogies, mnemonics, tables,
   diagrams, headings, or chapter organization. If you can trace a sentence back to
   a source sentence, it fails.
3. **No proprietary terminology.** If a source coined a distinctive name for a
   technique, invent our own plain-language name for the underlying idea.
4. **No example reuse.** Every worked example, practice item, passage, and
   explanation we ship is generated fresh from the concept node, never adapted
   from a source's example (changing numbers/names is NOT enough).
5. **Write-from-understanding test.** Extraction agents write notes AFTER reading,
   as a synthesis in their own words — never transcribe while reading.
6. **Multi-book synthesis over imitation.** Where sources overlap, identify why each
   treatment works and where it's limited, then write the deeper principle both are
   approximating. The graph node should be better than any single source.
7. **Verification gate.** Claimed SAT patterns get checked against official-style
   material and our own bank statistics before the tutor asserts them as fact.

## How the graph gets consumed

- **Learn tab**: chapters are authored FROM graph nodes (intuition-first, visuals,
  embedded interactive checks, misconception callouts) — see LEARN_TEXTBOOK_OVERHAUL_PLAN.md.
- **Tutor**: misconception + diagnostic-indicator indexes are injected into the tutor
  prompt (extends the skill-history/misconception injection shipped 2026-07-09),
  letting it map wrong answers → root cause → remediation move.
- **Practice generation**: difficulty ladders + trap designs parameterize original
  item authoring per AUTHORING_SPEC.md.
