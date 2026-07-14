/**
 * Learn lesson body — Command of Evidence: Quantitative (Information and Ideas).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar:
 * bodies/mLinearEquations.js): coaching direct-address — talks TO the student,
 * everyday anchor first (the graphic is a grocery store; the claim is your
 * list), anticipates the trap before it fires (frame errors, scope words),
 * concrete decision rules ("claim first, data last"). Invented claims, data
 * tables, and answer choices inside example blocks stay authentic test
 * material. Lean structure unchanged; gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const commandOfEvidenceQuantitativeBlocks = [
  {
    type: 'text',
    content: "You get a **table or graph plus a claim**, and the question asks which choice uses the data to complete or support that claim. Here's the setup: the graphic is a grocery store and the claim is your shopping list. The store stocks far more than you came for, and most misses happen when you start browsing. The whole skill is one thing: **let the claim tell you which numbers to go get, and ignore the rest of the graphic.**",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "It looks like a chart-reading question. It's really a matching question. The display is deliberately overloaded with numbers you'll never use. Your job isn't to understand the whole graphic — it's to fetch the **two or three values the claim asks about** and check each answer choice against them.",
  },

  { type: 'heading', content: 'Step 1 — Read the frame before any number' },
  {
    type: 'text',
    content: "Give the frame ten seconds before you touch a value: the **title** (what is this about?), the **axis labels or column headers** (what's measured?), and the **units** (a count? a percent? a rate?). A number with no label attached is just a loose digit — and most wrong choices are real digits lifted off the wrong row or read in the wrong unit. So read every value *with* its unit — \"about 40 **percent**,\" never a bare \"about 40.\"",
  },
  {
    type: 'keyInsight',
    content: "Almost every wrong read is a **frame error**: the right number pulled from the wrong row, or a percent treated like a raw count. Attach both labels — row and unit — before a number gets to leave the graphic with you.",
  },

  { type: 'heading', content: 'Step 2 — Let the claim pick the numbers' },
  {
    type: 'text',
    content: "The claim usually hides in the passage's last sentence, or the sentence the blank interrupts. Every word in it is an instruction: the **subject** (which thing), the **direction** (rose, fell, is higher), and the **size** (far more, roughly equal, more than doubled). Turn the claim into a tiny checklist, then go grab only those cells — nothing more.",
  },
  {
    type: 'tip',
    content: "Watch the scope words — **each, all, every**. A claim about \"every region\" needs evidence covering *all* the regions, so a choice quoting one strong region is a trap dressed as an answer.",
  },

  { type: 'heading', content: 'Step 3 — The two-part test for the right answer' },
  {
    type: 'text',
    content: "Run every choice through both gates. **True to the data:** the numbers, row, units, and direction all match the graphic. **About the claim:** if the choice is true, the claim actually gets completed or supported. Wrong answers pass exactly one gate — they misread the graphic, or they quote a perfectly real number that has nothing to do with the claim.",
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
      { label: 'Claim needs', content: "The blank completes a conclusion about the *direction* of the mulch effect, so only two cells matter: 9.6 (mulched) and 6.1 (uncovered)." },
      { label: 'Which way?', content: "Mulched beat uncovered — so the answer has to say yield went **up**." },
      { label: 'Test the choices', content: "(B) flips the direction — gone. (C) buries a 3.5 kg gap under \"little effect\" — that's more than half the uncovered yield, so \"little\" misreads the data." },
      { label: 'Answer', content: "**(A)** — right values, right direction, and it does the completion the claim needs." },
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
      { label: 'Claim needs', content: "\"Every group\" hands you two conditions: cover **all three** groups, and show each one's After value below its Before value." },
      { label: 'Check the table', content: "Row by row: 180 to 120, 165 to 110, 172 to 118 — all three fall. The \"every group\" claim really is backed by the data." },
      { label: 'Test the choices', content: "(B) is a \"paid the most\" fact about a single group before — a ranking, not a change. (C) is a \"paid the least\" fact after — same problem. Only (A) reports the fall for all three groups." },
      { label: 'Answer', content: "**(A)** — right rows, right direction, and its scope covers every group the claim names. (B) and (C) quote real numbers that say nothing about the change." },
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
      { label: 'Claim needs', content: "\"Every season\" means two conditions: cover **all four** seasons, and show each Year 2 value beating Year 1." },
      { label: 'Check the table', content: "Row by row: 1,200 to 1,450; 2,100 to 2,600; 3,400 to 3,750; 2,000 to 2,150 — all four rise, so the claim holds." },
      { label: 'Test the choices', content: "(A) is true but covers one season — a single row can't prove an *every* claim. (C) is a \"most rides\" fact — a level, but the claim is about *growth*. (B) is the only choice that even claims the full set." },
      { label: 'Answer', content: "**(B)** — it's the only choice that covers *every* season, matching the claim's scope, and every number checks out against the table. (A) is true but names just one season; (C) is a real number that says nothing about growth." },
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
      { label: 'Claim needs', content: "Two load-bearing words: **sharply** (a big drop) and **across herds** (in general). Knock out either one and the claim wobbles." },
      { label: 'What weakens it?', content: "A herd where the additive barely helped. You don't need methane to *rise* — a near-zero change already contradicts \"sharply reduces across herds.\"" },
      { label: 'Test the choices', content: "(A) is accurate but supports the claim — it's the very herd the report leaned on. (C) is a \"highest value\" fact, inert: it says nothing about what the additive *changed*." },
      { label: 'Answer', content: "**(B)** — drops of 7 and 11 against Herd A's 118 aren't \"sharp,\" and two of three herds barely responding sinks \"across herds.\"" },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A column reads *Share of households with internet (%)* and a cell shows 42. A claim says "42,000 households have internet." Does the cell back the claim?',
    answer: "**No.** The cell says 42 **percent**, not 42,000 households — different unit, different fact, and a percent can never prove a raw count. That's why every value leaves the graphic with its unit attached.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A claim says attendance "more than doubled," from 40 up to 68. A choice cites both numbers as support. Keep it?',
    answer: "**Cut it.** \"More than doubled\" means the later value has to clear 80 (twice 40), and 68 falls short. Size words are conditions, not decoration — a real rise still isn't *this* rise.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A claim says sales grew from Q1 to Q2. A choice reads *"Q2 had the highest sales of any quarter."* Does it support the claim?',
    answer: "**No.** \"Highest of any quarter\" is a level fact — a ranking at one moment. The claim is about *growth* from Q1 to Q2, and a choice that never compares Q1 with Q2 can't back a change claim, no matter how real its number is.",
  },

  {
    type: 'text',
    content: "**The move, every time:** read the frame → turn the claim into a tiny checklist → fetch only those cells → keep the one choice that's both true to the data *and* about the claim. Claim first, data last.",
  },
];
