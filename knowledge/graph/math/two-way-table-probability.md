---
id: two-way-table-probability
section: math
domain: problem-solving-data-analysis
skill: conditional-probability-from-two-way-table, basic-probability
difficulty_span: [easy, hard]
prereqs: [probability-as-pool-share, data-display-decoding]
unlocks: []
related: [linear-system-method-selection, sample-to-population-estimation]
---

# Two-way tables: probability is pool identification

## What it is
A two-way table crosses two categorical variables — rows carry one, columns the other, margins carry totals, and any cell is the intersection of one row condition and one column condition. Every probability question on such a table is the same question: *which group is the draw actually happening from?* Once the pool is fixed, the numerator is just the qualifying subset inside it, and the arithmetic is one fraction.

## Why it exists / why the SAT tests it
This is the exam's workhorse probability format. unverified-claim: two-way-table probability is a major recurring type, and the restricted denominator — triggered by a "given that…" clause or by a selection sentence naming a subset ("If a first-class passenger is selected at random…") — is the standard difficulty lever. It probes precise reading: whether the student lets the words, not visual salience, choose the denominator. Easy versions ask for a cell or margin over the grand total; the hard band is entirely about which total to divide by.

## Mental model
**Denominator first — "given that" shrinks the pool.** Read the selection clause before hunting any numbers, and let it name the reference group. A condition never changes what you want; it only shrinks the universe you're drawing from. Concretely: slice the table down to the conditioned row or column stripe, and refuse to touch any cell outside it. The moment a condition appears, the grand total becomes irrelevant — experts consciously discard it. Both sources of our synthesis converge on this as the single master move of the topic.

## Expert reasoning process
1. Read the selection clause and name the pool *aloud/in writing*: "the draw is from [row X / column Y / union of columns]." Verbalizing defuses number-grabbing.
2. Find that pool's total (a margin, or a sum of margins for "at least"-style bands).
3. Re-read the qualifying condition; locate the intersection cell(s) inside the stripe — that's the numerator.
4. Sanity-check numerator < denominator, and that the magnitude is plausible for the narrowed group (a wrongly-too-large denominator makes conditionals look suspiciously small).
5. For which-of-these-probabilities-is-largest meta-items: set up all four as fractions structurally before computing any — most resolve by comparing pools.
6. Hardest shape — partially known table plus verbal multipliers ("4 times as many X as Y"): fill cells with subscripted expressions (4f and f; 2m and m), sum rows/columns to build a small linear system, solve by elimination, *then* assemble the asked probability with its own restricted denominator.

## Misconceptions
- **grand-total-denominator** — always dividing by the table's grand total, even under a condition. The most-targeted error in this topic. Forms because school probability drilled "favorable over TOTAL," the whole-total template is learned first and feels safe, and the grand total is the most visually salient cell (bottom-right corner). The trap answer is the joint probability (cell ÷ grand total), placed right next to the correct conditional. Maps to the wrong-denominator distractor archetype.
- **condition-target-swap** — computing P(B given A) when P(A given B) is asked: dividing by the target's margin instead of the condition's. Forms because English word order doesn't mark which clause is the condition, and both fractions share the same numerator cell, so the error feels self-consistent. Answer sets pair the two reversals.
- **union-as-condition** — narrowing the denominator for "either A or B" as if "or" conditioned the draw, or double-counting overlapping cells. Forms from conflating what-I-want (numerator assembly) with where-I-draw (denominator); inherited from [[probability-as-pool-share]].
- **unmarked-condition-blindness** — only recognizing conditioning when the literal phrase "given that" appears, missing that a selection sentence naming a subset carries the same restriction. Forms from keyword-triggered rather than meaning-triggered reading. unverified-claim: the exam regularly writes conditions without "given that."

## Diagnostic indicators
- Right numerator cell, denominator = grand total → **grand-total-denominator**. Signature: picks the joint-probability distractor; explains it as "out of everyone."
- Right numerator cell, denominator = the *other* margin → **condition-target-swap**. Verbal tell: restates the question with the clauses flipped.
- Denominator narrowed on an "or" item, or a numerator exceeding a category total → **union-as-condition**.
- Correct on items containing "given that," wrong on selection-sentence items of identical structure → **unmarked-condition-blindness**. Timing tell: no hesitation — the cue word was the entire trigger.

## Remediation pathways
- **grand-total-denominator**: contrast pair on one table — "P(A and B)" vs "P(A given B)" — computing both and naming which question each answers. Make "circle the pool's total before anything" a written step. If it doesn't land, rebuild via [[probability-as-pool-share]].
- **condition-target-swap**: teach the stripe move physically — cover every row/column except the conditioned one, then answer inside what remains. Show P(A|B), P(B|A), and P(A and B) side by side on one table, once; that single exhibit inoculates.
- **union-as-condition**: re-anchor the two-decision rule: "or" edits the want, "given/selected-from" edits the pool.
- **unmarked-condition-blindness**: rewrite three selection sentences into explicit "given that" form and back; train the paraphrase, not the keyword.
- Hardest algebraic-table shape failing → revisit [[linear-system-method-selection]] before more probability work.

## Mastery criteria
Names the pool before touching numbers on every table item; distinguishes P(A|B) / P(B|A) / P(A and B) on demand from one table; handles aggregate pools ("at least" bands spanning multiple columns) and symbolic-count tables. Proof: consistent correctness on hard-band conditional items where the joint and reversed-conditional distractors are both present — picking neither.

## Difficulty ladder
easy: one cell or one margin over the grand total. → medium: unions of disjoint cells; complements; conditionals where the pool is a single row or column; recover a missing cell from a percentage table. → hard: pools that are aggregates (union of columns, "at least" thresholds); meta-comparison of four described probabilities; build-the-table-from-prose; algebraic counts forcing expression answers; the full composite — verbal multipliers → subscripted cells → linear system → restricted-denominator probability — where escalation is composition depth, not harder arithmetic. Composes with [[linear-system-method-selection]] at the top.

## Teaching notes
- **Struggling**: one ritual, repeated: point to the pool, say it as a sentence ("I'm drawing from the 40 juniors"), write its total down, only then look for the qualifying cell. Number-grabbing is the disease; verbalizing is the cure.
- **Average**: the three-fraction exhibit (joint vs conditional vs reversed conditional on one table), then mixed sets alternating "given that" phrasing with selection-sentence phrasing.
- **Advanced**: aggregate pools and reverse items (given a conditional probability and some counts, recover a missing cell); insist the pool decision is written even when the answer feels obvious.
- **1500+**: construct-the-table items and algebraic tables. Frame it honestly: at this band the probability is one fraction at the end; the item is a modeling-and-systems problem, and the last remaining trap is reassembling the final answer with the *wrong* denominator after all the algebra went right.
