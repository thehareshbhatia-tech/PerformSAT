/**
 * Learn chapter body — Command of Evidence: Quantitative (Information and Ideas).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations
 * (chart literacy from zero) → Stage 2 numbered method (claim → checklist →
 * locate → predict → two kill-tests) → Stage 3 on-the-test (decision flow,
 * traps, worked examples, checkpoints, one-page summary).
 * Voice reference: rwBodies/boundaries.js.
 * Concept source: knowledge/graph/rw (chart-decoding-fundamentals,
 * claim-anchored-data-reading, directional-evidence-prediction,
 * argument-spine-decomposition, topical-vs-logical-relevance).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * rwBodies/index.js — never import this from the chapter index.
 */

export const commandOfEvidenceQuantitativeBlocks = [
  {
    type: 'text',
    content: 'A Command of Evidence — Quantitative item pairs a short passage with a **table, bar chart, or line graph**. Either the passage ends in a blank ("Which choice most effectively uses data from the table to complete the statement?") or it states a claim ("...to support the claim?" / "...to weaken the conclusion?"). The display often carries far more numbers than you need. The secret most students never hear: **the passage tells you exactly which cells matter.** Read the claim first, and the graphic shrinks from a wall of numbers to two or three values with a job to do.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** How to read a table, a bar chart, and a line graph from zero — titles, axes, units, rows — and the difference between what data *shows* and what it merely *allows*.',
      '**Stage 2 · The method.** Four numbered steps that turn any claim into a short checklist, then audit every choice against the data *and* the claim.',
      '**Stage 3 · On the test.** A decision flow, the traps the test sets, worked examples across the difficulty range, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · Reading a data display from zero' },
  {
    type: 'text',
    content: 'A **table** organizes facts into rows and columns. Each **row** is usually one thing being measured (a city, a species, a year). Each **column header** names what is being measured and — critically — in what **units**: a count ("number of visitors"), a percent ("share of households, %"), or a rate ("grams per day"). The number where a row meets a column is a **cell**, and a cell means nothing until you attach both labels to it. Practice the **row sentence**: say what one cell means in plain words before using it.',
  },
  {
    type: 'table',
    title: 'Sample dataset — evening visitors at two branch libraries',
    headers: ['Branch', 'Visitors in March', 'Visitors in April'],
    rows: [
      ['Oakfield', '410', '520'],
      ['Millbrook', '480', '455'],
    ],
  },
  {
    type: 'text',
    content: 'Row sentence for the top-right cell: "Oakfield had 520 visitors in April." Two labels, one number, no ambiguity. From the same little table you can also read **comparisons**: across a row (Oakfield rose from 410 to 520 — a change over time) or down a column (in March, Millbrook had more visitors than Oakfield — a gap at one moment). Those are different facts, and a question always wants one specific kind.',
  },
  {
    type: 'text',
    content: 'A **bar chart** is a table drawn as heights: each bar is a category, and the bar reaches up to its value on the vertical **axis**. Comparing two bars is comparing two cells — read each bar back to the axis and note the units. A **line graph** adds time: the horizontal axis usually marks years or months, and the line\'s **direction** is a fact of its own. Rising left-to-right means the quantity grew; falling means it shrank. One distinction does heavy work here: **level** is how big a value is at one point ("highest in 2019"); **trend** is how the value changes across points ("grew every year"). A line can be at its highest level while its growth is slowing — the two facts live on different layers.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right read — level and trend kept separate', content: 'A line rises steeply, then rises gently. Correct description: "the value kept increasing, but more slowly toward the end." Still going up — just less steeply.', variant: 'right' },
      { label: 'Wrong read — a flattening curve called a decline', content: 'The same graph described as "the value declined toward the end." The *growth* slowed; the value itself never fell. Everyday phrases like "going down" blur the two layers.', variant: 'wrong' },
    ],
  },
  {
    type: 'strategyCard',
    title: 'The orientation scan',
    content: 'Before pulling any number from any display, spend ten seconds building the frame: **title** (what is this about?), **axes or column headers** (what is measured, in what units?), **legend or row labels** (which mark or row is which thing?). Then read every value *with* its unit — "about 40 **percent**," never a bare "about 40." Nearly every misread is a frame error: a right number off the wrong row, a right point off the wrong line, a percent treated as a count.',
  },
  { type: 'heading', content: 'What the data shows vs. what it merely allows' },
  {
    type: 'text',
    content: 'One more foundation before the method. Data **shows** only what can be read directly off it: values, gaps, directions. Data merely **allows** anything that sounds compatible with it but is not written in it — causes, motives, predictions. The library table above *shows* that Oakfield\'s visits rose; it does not show *why*, and it says nothing about May. On these questions, a right answer stays inside what the numbers show. A choice that leaps to an explanation or a forecast has left the data behind, no matter how reasonable the leap feels.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Shows — readable off the table', content: '"Oakfield\'s evening visits rose from 410 in March to 520 in April, while Millbrook\'s fell slightly." Every piece is a cell or a comparison of cells.', variant: 'right' },
      { label: 'Allows — a leap past the table', content: '"Oakfield\'s new late hours drew visitors away from Millbrook." Plausible, tidy — and nowhere in the data. The table records visits, not reasons.', variant: 'wrong' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'A column is labeled *Share of households with internet access (%)*, and one cell reads 42. A claim states that "42,000 households in the county have internet access." Does the cell back the claim?',
    answer: 'No. **Why:** the cell says 42 **percent**, not 42,000 households. A percent and a count are different units of different facts, and a claim stated in one cannot be proven by a number stated in the other. Reading every value with its unit catches this instantly.',
  },

  // ── Stage 2 · The method ───────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The method' },
  {
    type: 'text',
    content: 'Four steps cover every quantitative evidence question, and they run in a fixed order: **claim first, data last.** The claim writes a short shopping list; the graphic is the store. You never wander the store — you walk in with the list, pick up exactly those values, and leave. Each step below comes with a right and a wrong execution.',
  },

  { type: 'heading', content: 'Step 1 — Turn the claim into the comparison it needs' },
  {
    type: 'text',
    content: 'Find the claim — usually the passage\'s final sentence, or the sentence the blank interrupts — and rewrite it as a **checklist of two or three testable conditions**. Every word of the claim is a condition: the subject ("the same species," "each region"), the direction ("rose," "fell," "recovered after a dip"), the magnitude ("far lower," "roughly equal," "more than doubled"), the window ("between 2018 and 2022"). A claim that "attendance more than doubled" needs *one* comparison: the later value against twice the earlier value. Write the list before touching a single number.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — the claim becomes a checklist', content: 'Claim: *"Ridership grew in every season."* Checklist: (1) all four seasons appear, (2) each one\'s later value is higher than its earlier value. Two checks, done.', variant: 'right' },
      { label: 'Wrong — the claim becomes a vibe', content: 'The same claim remembered as "something about ridership going up." Without *every season* on the list, a choice citing one strong season feels sufficient — and it is the planted trap.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 2 — Locate only the data the claim needs' },
  {
    type: 'text',
    content: 'Now open the store with your list. Run the orientation scan, then go straight to the rows, bars, or points the checklist names — and deliberately ignore the rest. Displays on these items are overbuilt on purpose: extra rows, extra series, technical jargon that never matters. A term you do not recognize is an **inert token**: treat "chlorophyll-a concentration" as "the blah number" and read it like any other value. Understanding the science is never required; locating the right cells is.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — a targeted visit', content: 'The claim compares one species at two temperatures. You find that species\' row, read its two cells with units, and stop. The other four rows stay unread.', variant: 'right' },
      { label: 'Wrong — decode everything first', content: 'You study all five rows, every column, and the footnote before returning to the claim. Minutes gone — and worse, every accurate-looking choice now feels equally supported, because your attention is anchored to the display instead of the claim.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 3 — Predict the needed numbers before the choices' },
  {
    type: 'text',
    content: 'Before reading a single option, state what a qualifying answer would look like: which values, pointing which way, how far apart. For a *support* stem, the winning choice points the same direction as the claim. For a *weaken* stem, it points the opposite way — **or shows no relationship at all**, or supplies a counterexample. Weakening never requires proving the claim false; the finding only has to be the one *most inconsistent* with it. A result of "no measurable difference" is a fully qualified weakener of a claim that a difference exists.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — target written before the arrows fly', content: 'Claim: *more shade → fewer beetles.* Stem asks what would weaken it. Target: shade up while beetles hold steady or rise — or shade and beetles moving with no pattern. Any choice is now a five-second comparison against that target.', variant: 'right' },
      { label: 'Wrong — judge each choice fresh', content: 'No target, so each option gets its own from-scratch reasoning. By choice (C) the stem\'s direction has drifted, and a *strengthener* gets picked on a weaken stem — the mirror-image trap, built into the choice set on purpose.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Step 4 — Run both kill-tests on every choice' },
  {
    type: 'text',
    content: 'A right answer must pass two independent tests. **Kill-test 1 — true to the data:** every number, direction, and comparison in the choice matches the display, from the correct row, in the correct units. **Kill-test 2 — relevant to the claim:** if the choice is true, the claim\'s status actually changes — it gets completed, supported, or damaged. Failing either test kills the choice. The trap design leans on students who run only one: a choice can quote the table perfectly and still aim at nothing the claim needs, or it can sound exactly like the claim while misquoting the data.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Passes both tests', content: 'Claim: *the additive lowered output.* Choice: "output fell from 310 to 192 grams per day with the additive." The numbers match the table (test 1), and a fall is exactly what the claim asserts (test 2).', variant: 'right' },
      { label: 'Passes only one', content: 'Choice: "the untreated group produced the highest single reading, 312 grams per day." Perfectly accurate — and inert. A highest-reading fact neither supports nor damages a claim about the *change* the additive caused. True to the data, dead to the claim.', variant: 'wrong' },
    ],
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'text',
    content: 'The stem names the job: *complete the statement*, *support the claim*, or *weaken the conclusion*. The choices are full sentences built around numbers, and their wording does real work. Long, detailed choices can often be sorted on wording alone — wrong direction, wrong subject, wrong magnitude — before any cell gets read. And expect the correct answer to sometimes look plain while a distractor looks rich: detail level and proving power are independent, and the richness is bait.',
  },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Read the passage\'s claim (or the sentence the blank interrupts) and the stem\'s task verb: complete, support, or weaken.',
      'Write the claim\'s checklist: subject, direction, magnitude, window (Step 1).',
      'Orientation-scan the display — title, axes or headers, units, labels — then locate only the checklist\'s cells (Step 2).',
      'State the target: what values, pointing which way, would do the stem\'s job (Step 3). On weaken stems, include "no relationship" as a live option.',
      'Audit each choice with both kill-tests — true to the data, relevant to the claim (Step 4). One survivor → commit. Do not reopen it because the graphic "has more in it."',
    ],
  },
  {
    type: 'keyInsight',
    content: '**Every right answer passes two kill-tests.** Test 1: it is *true to the data* — correct cells, correct units, correct direction. Test 2: it is *relevant to the claim* — if true, the claim moves. Most wrong answers here pass exactly one. The accurate-but-irrelevant choice passes test 1 and fails test 2; the claim-shaped misquote passes test 2 and fails test 1. Ask both questions of every choice, every time.',
  },
  {
    type: 'trapCard',
    title: 'The true-but-irrelevant number',
    wrong: '**The true-but-irrelevant number.** You verify a choice against the table, every figure checks out, and you pick it — "I checked, and that\'s accurate." But the claim needed a change over time, and the choice reports which category was largest.',
    correction: 'Accuracy is half a credential. After confirming a choice is true of the display, ask the second question: *if this is true, what happens to the claim?* If the honest answer is "nothing," the choice is garnish — no matter how precise its numbers. Choices are judged against the claim\'s checklist, never against the display alone.',
  },
  {
    type: 'trapCard',
    title: 'The right number, wrong direction',
    wrong: '**The right number, wrong direction.** A choice lifts the exact values off the table — and then describes a rise as a "decline," calls a widening gap "steady," or swaps which year came first. The familiar numbers make the sentence feel verified.',
    correction: 'Verify the sentence built *around* the numbers, not just the numbers. Read the choice\'s direction word (rose, fell, held, widened) and check it against the data\'s actual direction — later value minus earlier value, this row minus that row. Correct figures wrapped around a flipped conclusion fail kill-test 1 just as hard as a made-up figure.',
  },
  {
    type: 'trapCard',
    title: 'The one row speaking for the table',
    wrong: '**The one row speaking for the table.** The claim covers a whole set — "each region," "all five species," "every season" — and a choice cites one row whose numbers are correct and strongly in the claimed direction. One good soldier stands in for the army.',
    correction: 'Match the choice\'s scope to the claim\'s scope. A claim with *each*, *all*, or *every* on its checklist needs evidence covering the full set; a single row proves only itself. The same discipline runs the other way on weaken stems: against an *all*-claim, one row moving the wrong way — a **counterexample** — is a complete kill.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A community-garden coordinator tracked two groups of tomato plots through one season. A table reports average yield per plot: plots covered with straw mulch averaged **9.6 kilograms** of tomatoes; uncovered plots averaged **6.1 kilograms**. The coordinator concluded that mulching ______\n\nWhich choice most effectively uses data from the table to complete the statement?\n\n(A) raised average yield, since mulched plots produced 9.6 kilograms on average compared with 6.1 kilograms for uncovered plots.\n(B) lowered average yield, since uncovered plots produced only 6.1 kilograms on average.\n(C) raised average yield, since mulched plots produced 6.1 kilograms on average compared with 9.6 kilograms for uncovered plots.\n(D) had little effect on yield, since both groups produced between 6 and 10 kilograms on average.',
    steps: [
      { label: 'Build the checklist', content: 'The blank completes a conclusion about what mulching did. Checklist: (1) name the direction of the mulch effect, (2) back it with both groups\' values. Two cells matter: 9.6 (mulched) and 6.1 (uncovered).' },
      { label: 'Predict', content: 'Mulched plots out-produced uncovered plots, so the completion must say yield went *up* and cite 9.6 against 6.1.' },
      { label: 'Run the kill-tests', content: '(B) flips the direction — the data shows mulched plots ahead. (C) keeps the right direction but swaps the two values between groups: claim-shaped, data-false. (D) quotes real values but buries a 3.5-kilogram gap — more than half the uncovered plots\' entire yield — under "little effect."' },
      { label: 'Answer', content: '**(A)** — correct values, correct groups, correct direction: true to the data and exactly what the conclusion needs.' },
    ],
  },
  {
    type: 'table',
    title: 'Dataset for the Medium example — bike-share rides by season, Rivertown',
    headers: ['Season', 'Rides in 2022', 'Rides in 2023'],
    rows: [
      ['Winter', '1,200', '1,450'],
      ['Spring', '2,100', '2,600'],
      ['Summer', '3,400', '3,750'],
      ['Fall', '2,000', '2,350'],
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A transportation researcher, citing the table above, claims that Rivertown\'s bike-share ridership grew in every season from 2022 to 2023.\n\nWhich choice most effectively uses data from the table to support the claim?\n\n(A) In spring, rides rose from 2,100 in 2022 to 2,600 in 2023.\n(B) Rides increased in all four seasons, from winter\'s rise of 1,200 to 1,450 through fall\'s rise of 2,000 to 2,350.\n(C) Summer recorded the most rides in both years, with 3,400 in 2022 and 3,750 in 2023.\n(D) Summer rides declined from 3,750 in 2022 to 3,400 in 2023.',
    steps: [
      { label: 'Build the checklist', content: '"Grew in **every** season" sets two conditions: (1) the evidence covers all four seasons, (2) each season\'s 2023 value beats its 2022 value.' },
      { label: 'Locate and predict', content: 'Read each row left to right: 1,200→1,450, 2,100→2,600, 3,400→3,750, 2,000→2,350. All four rise. A qualifying choice must speak for the full set.' },
      { label: 'Run the kill-tests', content: '(A) is true to the data but covers one season — one row cannot prove an *every*-claim. (C) is also true, but "most rides in both years" is a level fact; the claim is about growth, so it is claim-irrelevant. (D) reverses the two years — the table shows summer rising, so it fails the data test outright.' },
      { label: 'Answer', content: '**(B)** — the only choice whose scope matches the claim\'s *every* and whose numbers match the table. It also happens to look the least dramatic; plain and complete beats vivid and partial.' },
    ],
  },
  {
    type: 'table',
    title: 'Dataset for the Hard example — methane output per cow (grams per day)',
    headers: ['Herd', 'Standard feed', 'Feed with seaweed additive'],
    rows: [
      ['Herd A', '310', '192'],
      ['Herd B', '305', '298'],
      ['Herd C', '312', '301'],
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'After a feeding trial with Herd A, an agricultural report concluded that a seaweed feed additive "sharply reduces methane output across dairy herds." A follow-up study measured two additional herds under the same conditions; the results appear in the table above.\n\nWhich choice most effectively uses data from the table to weaken the report\'s conclusion?\n\n(A) With the additive, Herd A\'s output fell from 310 to 192 grams per day.\n(B) Herds B and C changed little on the additive, moving from 305 to 298 and from 312 to 301 grams per day, respectively.\n(C) Herd C\'s output on standard feed, 312 grams per day, was the highest value recorded in the study.\n(D) Herd B\'s output on the additive, 298 grams per day, was lower than Herd A\'s output on standard feed, 310 grams per day.',
    steps: [
      { label: 'Build the checklist', content: 'The conclusion carries two load-bearing qualifiers: **sharply** (a large drop) and **across dairy herds** (in herds generally, not one herd). Weakening either qualifier weakens the conclusion.' },
      { label: 'Predict the weakener\'s shape', content: 'Target: a herd — or herds — where the additive produced little or no reduction. Weakening does not require methane to *rise*; a near-zero change is fully inconsistent with "sharply reduces across herds."' },
      { label: 'Run the kill-tests', content: '(A) is accurate but points the wrong way — it restates the very trial the conclusion was built on, so it supports rather than weakens. (C) is accurate and inert: a highest-single-value fact says nothing about what the additive *changed*. (D) is accurate but compares the wrong pair of cells — one herd on additive against a *different* herd on standard feed measures nothing about the additive\'s effect within any herd.' },
      { label: 'Answer', content: '**(B)** — the counterexamples. Drops of 7 and 11 grams against Herd A\'s 118 are not "sharp," and two of three herds barely responding contradicts "across dairy herds." Both qualifiers take the hit; the conclusion cannot stand on Herd A alone.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: 'A claim says attendance "more than doubled" between two years. The table shows 40 (first year) and 68 (second year). A choice cites both numbers as support. Keep it?',
    answer: 'Cut it. **Why:** magnitude words are conditions, not decoration. "More than doubled" requires the later value to beat 80 (twice 40), and 68 falls short. The choice is true to the data but fails the claim\'s magnitude check — a real gap in the right direction is still not *this* gap.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: 'The stem asks which finding would weaken a conclusion. One choice reports "no measurable difference between the treated and untreated groups." A classmate eliminates it as irrelevant. Right call?',
    answer: 'Wrong call — that choice is a prime candidate. **Why:** a conclusion asserting that a treatment causes a difference is directly contradicted by evidence of *no* difference. Weakening means being most inconsistent with the claim, and a null result is exactly that; it never has to prove the claim false.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: 'A claim concerns manufacturing employment, and a choice quotes a value that really does appear in the table — in the row labeled "Agriculture." Both kill-tests: pass or fail?',
    answer: 'It fails both in practice. **Why:** as a statement about manufacturing it is data-false, because the number belongs to a different row — a frame error the row-sentence habit catches. And no agriculture figure can move a claim about manufacturing, so relevance fails too. Wrong cell, wrong claim, gone.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: 'A claim states that a fish population "recovered after a sharp decline." What checklist does Step 1 produce, and what line shape are you hunting for in Step 2?',
    answer: 'Two conditions: (1) the values first *fall* substantially, then (2) *rise* again afterward. **Why:** "recovered after a decline" is a two-part trend — down, then up. A line that only rises fails condition 1; a line that falls and stays flat fails condition 2. A choice citing only the rise, or only the drop, covers half the checklist and loses.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Step', 'What you do', 'What it catches'],
    rows: [
      ['Orient', 'Ten-second scan: title, axes or headers, units, labels; read every value with its unit', 'Percent-vs-count mixups, wrong-row reads, trend/level confusion'],
      ['1 · Checklist', 'Rewrite the claim as 2–3 testable conditions: subject, direction, magnitude, window', 'Scope traps ("every," "each"), magnitude traps ("far lower," "doubled")'],
      ['2 · Locate', 'Visit only the cells the checklist names; treat unknown jargon as inert tokens', 'Overbuilt displays, decode-everything time sinks'],
      ['3 · Predict', 'State the qualifying values and direction before the choices; on weaken stems, include null results and counterexamples', 'Mirror-image (wrong-direction) picks, "weaken means disprove"'],
      ['4 · Kill-tests', 'Test 1: true to the data. Test 2: relevant to the claim. Both, every choice', 'Accurate-but-irrelevant numbers, claim-shaped misquotes'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: read the display with its frame, turn the claim into a checklist, visit only the cells on the list, predict the answer\'s shape, and demand that the survivor pass both kill-tests. The passage always tells you which numbers matter — claim first, data last, and the busiest graphic on the test becomes a two-cell errand.',
  },
];
