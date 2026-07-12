# Raw notes — Source B (math-panda), Ch. 24: Probability
Section: math · Domain: Problem-Solving & Data Analysis · Pages studied: p0139–p0143

## Concepts taught

- **probability-as-share** — probability is a share: (count of outcomes you want) ÷ (count of outcomes possible). No formalism, no events/sample-space vocabulary.
- **table-probability-denominator-rule** — for data-table items, the useful reframing is: (count in the target group *inside* the pool you're drawing from) ÷ (count in the pool you're drawing from). The entire game is identifying the pool.
- **conditional-narrowing** — the phrase "given that …" (read as "assuming that …") always shrinks the pool being drawn from; it never changes the target, only the denominator's universe.
- **two-way-table-anatomy** — rows and columns each carry one categorical variable; margins carry totals; any cell is the intersection of one row condition and one column condition.
- **union-of-cells** — "either A or B" with disjoint cells means adding cell counts before dividing by the (unchanged) total pool.
- **complement-counting** — "not X" handled by summing the non-X cells or subtracting X's count from the pool (both shown implicitly through exercises).
- **probability-reverse-engineering** — given a probability and a total (or partial counts), recover a missing count or total: count = probability × pool, or pool = count ÷ probability.
- **geometric-probability** — probability of a random point landing in a region = (area of region) ÷ (area of whole figure); appears as an application, not a section.
- **independence-of-repeated-trials** — a die has no memory: an earlier roll doesn't shift a later roll's probability (taught only via one exercise's design).

## Teaching philosophy observed

- Definition-minimal: two fraction templates and one language rule ("given that" = narrow the pool) carry the whole chapter. All sophistication is pushed into the exercises.
- The author sequences: generic share definition → table-specific reframing → worked conditional example — i.e., the conditional case is treated as *the* skill worth teaching, because most SAT probability lives in tables.
- Answer-format coaching is embedded (express as fraction/decimal, not percent, for grid-ins) — a pure test-interface concern the author treats as part of the skill.

## Expert reasoning patterns (generalized)

- **Denominator first.** The expert reads a table-probability stem asking one question before anything else: *from which group is the draw actually happening?* The stem's selection sentence ("a first-class passenger is selected," "given that the worker has 4+ years") defines the pool. Only after fixing the pool do they locate the target subset inside it.
- **Row/column discipline.** In a two-way table, restate the pool as a row (or column, or union of columns) and refuse to touch any cell outside it. Conditional questions become: slice the table down to the conditioned stripe, then read target/stripe-total within that stripe. The grand total becomes irrelevant the moment a condition appears — experts consciously discard it.
- **Union = add disjoint cells, keep the big pool.** For "either/or" across non-overlapping cells, add the two cell counts; the pool stays the full total because no condition narrowed it. Experts distinguish *what I want* (numerator assembly) from *where I'm drawing* (denominator) as two independent decisions.
- **Reverse items are one multiplication.** Given P and pool, the count is P × pool; given count and P, the pool is count ÷ P. Experts do not set up proportion machinery.
- **Sanity bounds.** A conditional probability computed with the wrong (too-large) denominator usually looks suspiciously small; experts check that the answer's magnitude is plausible for the narrowed group.

## Misconceptions targeted (and why students hold them)

- **grand-total-denominator** — always dividing by the table's grand total, even under a "given that" condition. The most-targeted error in the chapter. It forms because the whole-total template is learned first and feels safe, and because the grand total is visually prominent (bottom-right corner). Trap answers are the joint probability (cell ÷ grand total) sitting right next to the correct conditional.
- **condition-target-swap** — reading "P(plumber | 4+ years)" but computing "P(4+ years | plumber)" — dividing by the plumber row instead of the experience columns. Forms because English word order doesn't mark which clause is the condition; both fractions use the same cell numerator, so the error feels self-consistent. Answer choices pair the two reversals.
- **double-counting-overlap / wrong union arithmetic** — for "either A or B," adding counts that overlap, or (opposite failure) narrowing the denominator as if "or" were a condition. Forms from conflating union ("what I want") with conditioning ("where I draw").
- **memory-in-randomness** — believing a second die roll is less likely to repeat the first roll's value. Classic gambler's fallacy; formed from everyday intuition that outcomes "balance out." The item design offers the joint probability (1/144) as bait for another related confusion — treating a conditional/marginal question as a two-event joint question.
- **complement-slippage** — for "not X," subtracting the wrong thing (e.g., building the complement of the *pool* instead of the *target*), or leaving an algebraic complement half-formed when the table is symbolic (n fish, g guppies → P(not guppy) = 1 − g/n; distractors present every plausible malformed variant).
- **percent-format-transfer** — writing 40 instead of 0.4 (or 2/5) on grid-ins. A pure interface error the book explicitly pre-empts in stems.

## SAT patterns claimed (mark: unverified-claim)

- Most SAT probability questions are two-way-table questions; pure "spinner/dice/marble" probability is marginal. (unverified-claim)
- "Given that" phrasing is the exam's standard signal for conditioning; the exam also writes conditions without the phrase, e.g., "If a first-class passenger is selected…" — the selection sentence itself carries the condition. (unverified-claim)
- Recurring design templates in the exercise set: single-cell ÷ margin; margin ÷ grand total; conditional with bait joint-probability distractor; reversed-conditional distractor pair; algebraic tables (variables as counts) forcing expression answers; incomplete percentage tables (missing cell recovered via 100%); expected-count reverse items (P × total); two-layer pools built from prose instead of a table (stacks of books, production-rate bagels — student must construct the counts before any probability); geometric-area probability including a donut/annulus region and a shaded-vs-unshaded comparison asking for a *difference* of probabilities; conditional where the condition spans multiple columns (e.g., "at least $21" = union of two columns as the pool). (unverified-claim)
- The exam tells you the answer format when fraction/decimal is required. (unverified-claim)

## Prerequisite edges implied

- table-probability-denominator-rule ← two-way-table-anatomy ← chart-value-lookup (ch23-style table reading)
- conditional-narrowing ← table-probability-denominator-rule
- probability-reverse-engineering ← probability-as-share + one-step linear solving
- geometric-probability ← area formulas (circles, triangles, rectangles)
- algebraic-table items ← fraction manipulation with variables

## Difficulty escalation observed

1. One cell or one margin over the grand total (easy).
2. Union of disjoint cells; complements ("not").
3. Conditional: pool = one row/column.
4. Conditional where the pool itself is an aggregate (union of columns, "at least" bands) or where the *question* asks which of four described probabilities is largest (meta-comparison, no computation given).
5. Construct-the-table-yourself from prose; algebraic counts; probability fused with geometry (areas) or with rate×time production math; reverse-engineering totals through a probability.

## What this source does well / poorly

- **Well:** the "given that = narrow the pool" rule is a genuinely load-bearing, formalism-free rendering of conditional probability; distractor architecture in the exercises is a clean catalog of the joint-vs-conditional-vs-reversed error space; includes symbolic-count items that force structural understanding over arithmetic.
- **Poorly:** never names or contrasts the reversed-conditional error explicitly (students meet it only by falling into it); no treatment of independence/multiplication of events beyond one die item (fine for SAT scope, but the boundary is unstated); geometric probability appears with zero bridging instruction; no explicit strategy for building a two-way table from prose, which its own hardest items require. Our node should teach pool-identification as a written-down step and explicitly contrast P(A|B) vs P(B|A) vs P(A and B) on one table.
