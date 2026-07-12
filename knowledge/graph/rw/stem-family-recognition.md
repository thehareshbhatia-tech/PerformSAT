---
id: stem-family-recognition
section: rw
domain: cross-cutting
skill: central-ideas-details, inferences, command-of-evidence-textual, command-of-evidence-quantitative, words-in-context, text-structure-purpose, cross-text-connections
difficulty_span: [easy, hard]
prereqs: [question-first-reading-protocol]
unlocks: [predict-then-verify, detail-lookup-protocol, topic-point-attitude-reading]
related: [writing-module-economics]
---

# Stem recognition: classify the question before touching the passage

## What it is
Digital SAT Reading stems are drawn from a small, highly standardized set of phrasings. A trained student can classify any item into its skill family from the stem wording alone — before reading a word of the passage — and that classification tells them exactly which reasoning procedure to run. Stem recognition is the routing layer of the whole section.

## Why it exists / why the SAT tests it
The test doesn't test it directly — it PRESUPPOSES it. On a real module, question types arrive shuffled with no labels, so a student must recognize which procedure applies with nothing but the stem as a cue. This recognition-under-mixing step is its own trainable skill and its own failure mode: a student can execute every procedure correctly in labeled drills and still miss on the test because they ran the wrong procedure. unverified-claim: stem wording recurs nearly verbatim across official forms — consistent with our bank's stem regularity, but verify coverage against official adaptive-test stems before the tutor asserts it as fact.

## Mental model
**Index your toolkit off the stem, not the topic.** Novices think "this is a biology passage"; experts think "this is a support-the-claim item that happens to be about biology." The reading half of the section carves into a finite set of procedural families:
1. **Vocabulary in context** — most logical word for a blank, or meaning of a common word as used → [[evidence-forced-word-meaning]]
2. **Main idea / overall structure** — central claim or organization of the whole text → [[topic-point-attitude-reading]]
3. **Literal detail** — "according to the text, what is true about X" → [[detail-lookup-protocol]]
4. **Function** — rhetorical job of the whole text or of one underlined piece → [[rhetorical-role-identification]]
5. **Text completion** — statement that most logically finishes the argument → [[logical-text-completion]]
6. **Support / weaken** — finding or quotation that would strengthen or undermine a claim → [[support-and-weaken-textual]]
7. **Graph/table evidence** — data description that bears on a claim → [[chart-decoding-fundamentals]]
8. **Paired texts** — how one author would respond to the other → [[cross-text-relationship-taxonomy]]

This procedure-first cut deliberately crosses College Board's reporting domains — it groups items by what you DO, which is what matters for routing.

## Expert reasoning process
1. Read the stem; match its phrasing to a family (the match should feel like recognizing a face, not solving a puzzle).
2. Retrieve that family's procedure: what to read, what to predict, what the correct-answer shape looks like.
3. Only then read the passage per the plan from [[question-first-reading-protocol]].
4. During review, sort every miss by stem family; clustered misses name the weak family, scattered misses indicate a process problem (rushing, verification skips) rather than a skill hole.

## Misconceptions
- **topic-indexing** — Student organizes difficulty by subject matter ("I'm bad at science passages") rather than by question family. Formed because school reading is topic-organized. Produces misdirected study (reading more science articles instead of drilling the actual weak procedure) and no improvement.
- **drills-equal-readiness** — "If I can do each type in isolation, I'm ready." Formed because chapter exercises are self-labeled; the recognition burden is invisible until the mixed test. Produces the classic drills-great/test-flat gap. Diagnostic gold: high drill accuracy + low test accuracy on the SAME skill = recognition failure, not skill failure.
- **stem-skimming** — Reading half the stem and answering the question they expected rather than the one asked (e.g., stem asks how A differs from B; student picks a true statement about a shared quality — the unasked-comparison species in [[distractor-species-taxonomy]]). Formed by pattern-matching haste on familiar-looking stems.
- **volume-equals-progress** — "More practice tests will raise my score by themselves." Formed because volume feels like work and scores drift slightly. Plateaus without per-error autopsy sorted by family; wastes scarce official material.

## Diagnostic indicators
- **topic-indexing**: student's self-report of weaknesses names subjects, not question types; error log shows misses spread across topics but concentrated in one or two families.
- **drills-equal-readiness**: our engine's signature pattern — drill accuracy high, full-test accuracy low, same skill. Tag as recognition failure and drill mixed-format.
- **stem-skimming**: picks textually-true choices that answer a different relation than asked; very short stem-read times in telemetry.
- **volume-equals-progress**: many completed tests, flat score curve, empty or perfunctory review notes.

## Remediation pathways
- topic-indexing: have the student re-sort their own last 20 misses by stem family instead of subject; the resulting histogram usually reorders their study plan on the spot.
- drills-equal-readiness: prescribe mixed-family question pools where the student must NAME the family aloud before solving each item; recognition becomes automatic through forced classification, then goes silent.
- stem-skimming: slow-stem ritual — restate the stem in their own words before reading the passage; contrast pair of two items with near-identical passages but different stems.
- volume-equals-progress: install the error-autopsy rule — no test is finished until every miss has a named root cause and a prevention plan; revisit [[writing-module-economics]] if misses are pacing-driven.

## Mastery criteria
Shown 10 stems with passages hidden, the student classifies all 10 into families and states each family's procedure in one sentence. On mixed timed sets, per-family accuracy matches their labeled-drill accuracy (the recognition gap is closed). Evidence: consistency across at least two full mixed modules, not single-family streaks.

## Difficulty ladder
- **Easy**: canonical stem phrasings that match the family template word-for-word.
- **Medium**: hybrid stems (a function stem scoped to a whole text reads like a main-idea stem; an inference stem that behaves like a detail lookup).
- **Hard**: family is clear but the CORRECT procedure requires composing families — e.g., a quantitative-evidence item that is really a claim-matching item ([[chart-decoding-fundamentals]] composed with [[abstraction-ladder-paraphrase]]); paired-text items that require running the main-point procedure twice then a comparison.

## Teaching notes
- **Struggling**: don't teach all families at once — teach three (vocab, detail, main idea), get recognition solid, then add. Use a sorting game: stems on cards, sort into bins, no solving allowed.
- **Average**: full taxonomy plus the "name it before you solve it" ritual on every practice item for two weeks. Show them their own drill-vs-test gap as motivation.
- **Advanced**: focus on hybrid stems and on review discipline — their recognition is fine; their error autopsies are shallow. Teach family-sorted miss logs.
- **1500+**: recognition is automatic; the remaining value is in review analytics (which family × distractor-species combination produces their rare misses) and in knowing when a stem signals a likely time-sink for triage purposes ([[writing-module-economics]]).
