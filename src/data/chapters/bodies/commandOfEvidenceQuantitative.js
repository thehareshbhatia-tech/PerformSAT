/**
 * Learn lesson body — Command of Evidence: Quantitative (Information and Ideas).
 *
 * NEW lean "review / cheat-sheet" style (not the old dense textbook template):
 * one SAT skill per lesson, plain language, one idea per short section, a
 * method, a scannable cheat-list/table, then 2-3 worked examples and a couple
 * of check-yourself questions. Gated by bodies.test.js (lean contract).
 * Voice + shape exemplar: bodies/gSubjectVerbAgreement.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const commandOfEvidenceQuantitativeBlocks = [
  {
    type: 'text',
    content: 'These give you a **table or graph plus a claim**, then ask which choice uses the data to complete or support that claim. The whole skill is one thing: **let the claim tell you which numbers to go get, and ignore the rest of the graphic.**',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'It looks like a chart-reading question, but it is really a matching question. The display is deliberately overloaded with numbers you will never use. Your job is not to understand the whole graphic — it is to find the **two or three values the claim asks about** and check each answer choice against them.',
  },

  { type: 'heading', content: 'Step 1 — Read the frame before any number' },
  {
    type: 'text',
    content: 'Spend ten seconds on the graphic\'s labels before you touch a value: the **title** (what is this about?), the **axis labels or column headers** (what is measured?), and the **units** (a count? a percent? a rate?). Then read every value *with* its unit — "about 40 **percent**," never a bare "about 40."',
  },
  {
    type: 'keyInsight',
    content: 'Almost every wrong read is a **frame error**: a right number pulled off the wrong row, or a percent treated like a raw count. Attach both labels to a number before you use it.',
  },

  { type: 'heading', content: 'Step 2 — Let the claim pick the numbers' },
  {
    type: 'text',
    content: 'The claim is usually the passage\'s last sentence, or the sentence the blank interrupts. Every word in it is an instruction: the **subject** (which thing), the **direction** (rose, fell, is higher), and the **size** (far more, roughly equal, more than doubled). Turn the claim into a tiny checklist, then go grab only those cells.',
  },
  {
    type: 'tip',
    content: 'Watch for scope words — **each, all, every**. A claim about "every region" needs evidence covering *all* the regions, so a choice quoting one strong region is a trap, not an answer.',
  },

  { type: 'heading', content: 'Step 3 — The two-part test for the right answer' },
  {
    type: 'text',
    content: 'The correct choice has to pass **both** tests. **True to the data:** the numbers, row, units, and direction all match the graphic. **About the claim:** if the choice is true, the claim actually gets completed or supported. A wrong answer passes only one — it either misreads the graphic, or quotes a real number that has nothing to do with the claim.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — passes both', content: 'Claim: the additive *lowered* output. Choice: "output fell from 310 to 192." The numbers match the table, and a fall is exactly what the claim asserts.' },
      { label: 'Wrong — true but irrelevant', content: 'Choice: "the untreated group had the single highest reading, 312." Perfectly accurate — and useless. A highest-value fact says nothing about the *change* the claim is about.' },
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A study reports the average tomato yield per plot. Plots covered with mulch averaged **9.6 kg**; uncovered plots averaged **6.1 kg**. The gardener concluded that mulching ______\n\n(A) raised yield: mulched plots gave 9.6 kg vs. 6.1 kg for uncovered.\n(B) lowered yield, since uncovered plots gave only 6.1 kg.\n(C) had little effect: both groups fell between 6 and 10 kg.',
    steps: [
      { label: 'Claim needs', content: 'The blank completes a conclusion about the *direction* of the mulch effect. Two cells matter: 9.6 (mulched) and 6.1 (uncovered).' },
      { label: 'Which way?', content: 'Mulched beat uncovered, so the answer must say yield went **up**.' },
      { label: 'Test the choices', content: '(B) flips the direction — wrong. (C) buries a 3.5 kg gap under "little effect" — that is more than half the uncovered yield, so "little" misreads the data.' },
      { label: 'Answer', content: '**(A)** — right values, right direction, and it does the completion the claim needs.' },
    ],
  },
  {
    type: 'table',
    title: 'Data for the Medium example — bike-share rides by season',
    headers: ['Season', 'Rides in Year 1', 'Rides in Year 2'],
    rows: [
      ['Winter', '1,200', '1,450'],
      ['Spring', '2,100', '2,600'],
      ['Summer', '3,400', '3,750'],
      ['Fall', '2,000', '1,900'],
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A claim states that ridership grew **in every season** from Year 1 to Year 2.\n\nWhich choice best supports the claim?\n\n(A) In spring, rides rose from 2,100 to 2,600.\n(B) Rides rose in every season, from winter (1,200 to 1,450) through fall.\n(C) Summer had the most rides in both years.',
    steps: [
      { label: 'Claim needs', content: '"Every season" sets two conditions: (1) cover **all four** seasons, (2) each one\'s Year 2 value beats Year 1.' },
      { label: 'Check the table', content: 'Read each row: 1,200 to 1,450, 2,100 to 2,600, 3,400 to 3,750 — but Fall goes 2,000 to **1,900**, a drop. So the "every season" claim is not actually backed for Fall.' },
      { label: 'Test the choices', content: '(A) is true but covers one season — a single row cannot prove an *every* claim. (C) is a "most rides" (level) fact, but the claim is about *growth* — irrelevant. (B) is the only choice that even claims the full set.' },
      { label: 'Answer', content: '**(B)** — it is the choice whose scope matches "every season." (A) and (C) fail the claim even though their numbers are real.' },
    ],
  },
  {
    type: 'table',
    title: 'Data for the Hard example — methane per cow (grams/day)',
    headers: ['Herd', 'Normal feed', 'Feed + additive'],
    rows: [
      ['Herd A', '310', '192'],
      ['Herd B', '305', '298'],
      ['Herd C', '312', '301'],
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'A report concluded a feed additive "**sharply reduces** methane **across herds**." Which choice best weakens that conclusion?\n\n(A) With the additive, Herd A fell from 310 to 192.\n(B) Herds B and C barely changed: 305 to 298, and 312 to 301.\n(C) Herd C on normal feed, 312, was the highest value recorded.',
    steps: [
      { label: 'Claim needs', content: 'Two load-bearing words: **sharply** (a big drop) and **across herds** (in general). Knock down either one and the claim weakens.' },
      { label: 'What weakens it?', content: 'A herd where the additive barely helped. Weakening does not require methane to *rise* — a near-zero change already contradicts "sharply reduces across herds."' },
      { label: 'Test the choices', content: '(A) is accurate but supports the claim — it is the very herd the report leaned on. (C) is a "highest value" fact, inert — it says nothing about what the additive *changed*.' },
      { label: 'Answer', content: '**(B)** — drops of 7 and 11 against Herd A\'s 118 are not "sharp," and two of three herds barely responding sinks "across herds."' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A column reads *Share of households with internet (%)* and a cell shows 42. A claim says "42,000 households have internet." Does the cell back the claim?',
    answer: '**No.** The cell says 42 **percent**, not 42,000 households — different units, different fact. A percent can never prove a raw count. This is why you read every value with its unit.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A claim says attendance "more than doubled," from 40 up to 68. A choice cites both numbers as support. Keep it?',
    answer: '**Cut it.** "More than doubled" means the later value must beat 80 (twice 40), and 68 falls short. Size words are conditions, not decoration — a real rise is still not *this* rise.',
  },

  {
    type: 'text',
    content: '**The move, every time:** read the frame → turn the claim into a tiny checklist → grab only those cells → keep the one choice that is both true to the data *and* about the claim. Claim first, data last.',
  },
];
