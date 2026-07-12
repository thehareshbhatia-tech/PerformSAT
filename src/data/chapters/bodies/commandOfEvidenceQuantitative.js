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
    content: 'These give you a **table or graph plus a claim**, then ask which choice uses the data to complete or support that claim. The graphic always holds far more numbers than the claim needs, and reaching for the wrong ones is how most of the misses happen. The whole skill is one thing: **let the claim tell you which numbers to go get, and ignore the rest of the graphic.**',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'It looks like a chart-reading question, but it is really a matching question. The display is deliberately overloaded with numbers you will never use. Your job is not to understand the whole graphic — it is to find the **two or three values the claim asks about** and check each answer choice against them.',
  },

  { type: 'heading', content: 'Step 1 — Read the frame before any number' },
  {
    type: 'text',
    content: 'Spend ten seconds on the graphic\'s labels before you touch a value: the **title** (what is this about?), the **axis labels or column headers** (what is measured?), and the **units** (a count? a percent? a rate?). A number with no label attached is just a loose digit, and most wrong choices are built from real digits lifted off the wrong row or read in the wrong unit. Then read every value *with* its unit — "about 40 **percent**," never a bare "about 40."',
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
    title: 'Data for the insulation example — monthly heating cost per home (\\$)',
    headers: ['Home group', 'Before insulation', 'After insulation'],
    rows: [
      ['Group A', '180', '120'],
      ['Group B', '165', '110'],
      ['Group C', '172', '118'],
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A claim states that adding insulation **lowered heating cost for every group** of homes studied.\n\nWhich choice best supports the claim?\n\n(A) After insulation, every group\'s cost fell — $180 to $120, $165 to $110, and $172 to $118.\n(B) Before insulation, Group A paid the most, at $180.\n(C) After insulation, Group B paid the least, at $110.',
    steps: [
      { label: 'Claim needs', content: '"Every group" sets two conditions: (1) cover **all three** groups, (2) each one\'s After value is lower than its Before value.' },
      { label: 'Check the table', content: 'Read each row: 180 to 120, 165 to 110, 172 to 118 — all three fall. So the "every group" claim really is backed by the data.' },
      { label: 'Test the choices', content: '(B) is a "most before" level fact about a single group — it names no change. (C) is a "least after" level fact — also a ranking, not a drop. Only (A) reports the fall for all three groups.' },
      { label: 'Answer', content: '**(A)** — right rows, right direction, and its scope covers every group the claim names. (B) and (C) quote real numbers that say nothing about the change.' },
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
      ['Fall', '2,000', '2,150'],
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A claim states that ridership grew **in every season** from Year 1 to Year 2.\n\nWhich choice best supports the claim?\n\n(A) In spring, rides rose from 2,100 to 2,600.\n(B) Rides rose in every season, from winter (1,200 to 1,450) through fall.\n(C) Summer had the most rides in both years.',
    steps: [
      { label: 'Claim needs', content: '"Every season" sets two conditions: (1) cover **all four** seasons, (2) each one\'s Year 2 value beats Year 1.' },
      { label: 'Check the table', content: 'Read each row: 1,200 to 1,450, 2,100 to 2,600, 3,400 to 3,750, and 2,000 to 2,150 — all four seasons rise. So the "every season" claim really is backed by the data.' },
      { label: 'Test the choices', content: '(A) is true but covers one season — a single row cannot prove an *every* claim. (C) is a "most rides" (level) fact, but the claim is about *growth* — irrelevant. (B) is the only choice that even claims the full set.' },
      { label: 'Answer', content: '**(B)** — it is the only choice that covers *every* season, matching the claim\'s scope, and every number is true to the table. (A) is true but names just one season, so it can\'t support an "every season" claim; (C) is a real number that says nothing about growth.' },
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
    type: 'checkpointQuestion',
    question: 'A claim says sales grew from Q1 to Q2. A choice reads *"Q2 had the highest sales of any quarter."* Does it support the claim?',
    answer: '**No.** "Highest of any quarter" is a level fact — a ranking at one moment — but the claim is about *growth* from Q1 to Q2. A choice that never compares Q1 with Q2 cannot back a change claim, no matter how real the number is.',
  },

  {
    type: 'text',
    content: '**The move, every time:** read the frame → turn the claim into a tiny checklist → grab only those cells → keep the one choice that is both true to the data *and* about the claim. Claim first, data last.',
  },
];
