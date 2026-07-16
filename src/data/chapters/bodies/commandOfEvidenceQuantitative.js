/**
 * Learn lesson body — Command of Evidence: Quantitative (Information and Ideas).
 *
 * VOICE (adopted 2026-07-15, exemplar: mLinearEquations.js): professional
 * textbook narrative — teaches directly in flowing prose (concept, why it
 * works, how to apply, common errors) in the measured register of a
 * well-edited textbook. Concrete contexts framed plainly as examples;
 * extended metaphors, cute headings, and pep-talk are out. Headings name
 * the concept. Gated by bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const commandOfEvidenceQuantitativeBlocks = [
  {
    type: 'text',
    content: "Quantitative command-of-evidence questions pair a **table or graph with a claim** and ask which choice uses the data to complete or support that claim. The graphic deliberately contains far more information than the claim requires, and most errors begin with unguided browsing of it. The entire skill reduces to one discipline: **let the claim determine which values to retrieve, and ignore the rest of the graphic.**",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "Although these items appear to test chart reading, they are matching questions. The display is deliberately overloaded with values that go unused. The task is not to understand the whole graphic but to retrieve the **two or three values the claim concerns** and check each answer choice against them.",
  },

  { type: 'heading', content: 'Step 1 — Read the frame before any number' },
  {
    type: 'text',
    content: "Examine the frame before reading any value: the **title** (what the display is about), the **axis labels or column headers** (what is measured), and the **units** (a count, a percent, a rate). A number without its label carries no meaning, and most wrong choices quote real digits lifted from the wrong row or read in the wrong unit. Read every value *with* its unit — \"about 40 **percent**,\" never a bare \"about 40.\"",
  },
  {
    type: 'keyInsight',
    content: "Almost every misreading is a **frame error**: the right number pulled from the wrong row, or a percent treated as a raw count. Attach both labels — row and unit — to every value taken from the graphic.",
  },

  { type: 'heading', content: 'Step 2 — Let the claim select the values' },
  {
    type: 'text',
    content: "The claim usually appears in the passage's last sentence or in the sentence the blank interrupts. Each of its words is an instruction: the **subject** (which entity), the **direction** (rose, fell, is higher), and the **size** (far more, roughly equal, more than doubled). Convert the claim into a short checklist, then retrieve only the cells that checklist names — nothing more.",
  },
  {
    type: 'tip',
    content: "Note the scope words — **each, all, every**. A claim about \"every region\" requires evidence covering *all* the regions, so a choice quoting a single strong region fails the claim's scope however accurate its numbers are.",
  },

  { type: 'heading', content: 'Step 3 — The two-part test for the right answer' },
  {
    type: 'text',
    content: "Apply two conditions to every choice. **True to the data:** the numbers, row, units, and direction all match the graphic. **About the claim:** if the choice is true, the claim is actually completed or supported. Wrong answers typically satisfy exactly one condition — they misread the graphic, or they quote an accurate number that has no bearing on the claim.",
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right — passes both', content: 'Claim: the additive *lowered* output. Choice: "output fell from 310 to 192." The numbers match the table, and a fall is exactly what the claim asserts.' },
      { label: 'Wrong — true but irrelevant', content: 'Choice: "the untreated group had the single highest reading, 312." Accurate, and irrelevant: a highest-value fact says nothing about the *change* the claim asserts.' },
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'A study reports the average tomato yield per plot. Plots covered with mulch averaged **9.6 kg**; uncovered plots averaged **6.1 kg**. The gardener concluded that mulching ______\n\n(A) raised yield: mulched plots gave 9.6 kg vs. 6.1 kg for uncovered.\n(B) lowered yield, since uncovered plots gave only 6.1 kg.\n(C) had little effect: both groups fell between 6 and 10 kg.',
    steps: [
      { label: 'Identify what the claim needs', content: "The blank completes a conclusion about the *direction* of the mulch effect, so only two cells matter: 9.6 (mulched) and 6.1 (uncovered)." },
      { label: 'Determine the direction', content: "Mulched plots outperformed uncovered plots, so the answer must state that yield went **up**." },
      { label: 'Test the choices', content: "(B) reverses the direction and is eliminated. (C) describes a 3.5 kg gap as \"little effect\" — more than half the uncovered yield — so \"little\" misreads the data." },
      { label: 'Answer', content: "**(A)** — correct values, correct direction, and it completes the conclusion the claim requires." },
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
      { label: 'Identify what the claim needs', content: "\"Every group\" imposes two conditions: the evidence must cover **all three** groups, and each group's After value must fall below its Before value." },
      { label: 'Check the table', content: "Row by row: 180 to 120, 165 to 110, 172 to 118 — all three fall, so the data do support the \"every group\" claim." },
      { label: 'Test the choices', content: "(B) is a \"paid the most\" fact about a single group before insulation — a ranking, not a change. (C) is a \"paid the least\" fact after insulation — the same defect. Only (A) reports the decrease for all three groups." },
      { label: 'Answer', content: "**(A)** — correct rows, correct direction, and a scope covering every group the claim names. (B) and (C) quote accurate numbers that say nothing about the change." },
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
      { label: 'Identify what the claim needs', content: "\"Every season\" imposes two conditions: the evidence must cover **all four** seasons, and each Year 2 value must exceed its Year 1 value." },
      { label: 'Check the table', content: "Row by row: 1,200 to 1,450; 2,100 to 2,600; 3,400 to 3,750; 2,000 to 2,150 — all four rise, so the claim holds." },
      { label: 'Test the choices', content: "(A) is true but covers one season — a single row cannot establish an *every* claim. (C) is a \"most rides\" fact — a level, where the claim concerns *growth*. (B) is the only choice that addresses the full set." },
      { label: 'Answer', content: "**(B)** — the only choice that covers *every* season, matching the claim's scope, and each of its numbers checks against the table. (A) is true but names one season; (C) is an accurate number that says nothing about growth." },
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
      { label: 'Identify what the claim needs', content: "The claim rests on two load-bearing words: **sharply** (a large drop) and **across herds** (in general). Undermining either one weakens the conclusion." },
      { label: 'Define what would weaken it', content: "A herd where the additive barely helped. Methane need not *rise* — a near-zero change already contradicts \"sharply reduces across herds.\"" },
      { label: 'Test the choices', content: "(A) is accurate but supports the claim — it is the herd the report relied on. (C) is a \"highest value\" fact with no bearing: it says nothing about what the additive *changed*." },
      { label: 'Answer', content: "**(B)** — drops of 7 and 11, against Herd A's 118, are not \"sharp,\" and two of three herds barely responding contradicts \"across herds.\"" },
    ],
  },

  { type: 'heading', content: 'Beyond the simple table' },
  {
    type: 'text',
    content: "Not every graphic is a table. A **bar chart** compares levels across categories; a **line graph** tracks a quantity over time; a **scatterplot** shows individual observations as points, and the question it usually supports concerns the **association** — whether the points drift upward or downward together (direction) and how tightly they cluster around that drift (strength). A point far from the cloud is an **outlier**, and it is a legitimate target of a question in its own right: an observation the general pattern fails to describe. Whatever the format, the discipline is unchanged — frame first, then values read with their units.",
  },
  {
    type: 'text',
    content: "Line graphs introduce a distinction tables mostly hide: **level versus trend**. The level is how large the quantity is; the trend is how it is changing. The two answer different questions — the *highest point* on a curve is a level fact, while the *fastest growth* is a trend fact, found where the curve is steepest, not where it is tallest. The distinction matters most on flattening curves: a line that rises steeply and then rises gently is **still rising**. \"Increasing more slowly\" describes the trend, not a fall in the level, and wrong choices are built to convert that slowdown into a decrease.",
  },
  {
    type: 'tip',
    content: "**Touch the legend on every read.** On a chart with more than one line or bar series, verify the series each time a value is pulled, not once at the start. Values taken from the wrong series are internally consistent — every number really is on the chart — which makes the error invisible to later checking. Rereading the legend costs a second; trusting memory of which line was dashed costs the question.",
  },
  {
    type: 'text',
    content: "Axis scales are chosen, and the choice shapes the picture. A vertical axis that starts at 90 rather than zero displays only the slice above 90, so a gap of a few units can look severalfold, and bar heights then exaggerate the true difference. Judge magnitude from the **values, not the ink**: read the numbers off the axis and compare them arithmetically before accepting any *far more*, *nearly double*, or *sharply higher* in a choice.",
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'A line graph tracks a reserve\'s wolf population from 2010 to 2020. The line climbs steeply from 40 wolves in 2010 to 62 in 2014, then continues upward more gradually, reaching 70 by 2020. A researcher claims that after 2014 the reserve\'s wolf population began to decline.\n\nWhich choice best evaluates the claim?\n\n(A) The claim is supported: the line flattens noticeably after 2014.\n(B) The claim is not supported: the population kept rising after 2014, from 62 to 70, though more slowly than before.\n(C) The claim is supported: the population grew by 22 wolves before 2014 but by only 8 afterward.',
    steps: [
      { label: 'Separate level from trend', content: "Two different facts live on this curve. The trend slows after 2014 — 22 new wolves over four years, then 8 over six. The level never falls: 40, then 62, then 70." },
      { label: 'Test the claim against the level', content: "\"Began to decline\" is a claim about the level — the count itself dropping. From 2014 to 2020 the count went 62 to 70, a rise. The claim converts a flattening line into a falling one." },
      { label: 'Answer', content: "**(B).** (A) treats a gentler slope as a decline — the flattening changes the growth rate, not the direction. (C) quotes accurate numbers, but a smaller increase is still an increase; the figures it cites contradict the very claim they are offered to support." },
    ],
  },
  {
    type: 'checkpointQuestion',
    question: 'A bar chart\'s vertical axis runs from 90 to 100. One bar reads 92 and another 98, and the second bar is drawn roughly four times as tall. A choice calls the second value *"several times larger."* Keep it or cut it?',
    answer: "**Cut it.** The axis starts at 90, so the bars show only the slice above 90 — the drawing exaggerates the gap. Computed from the values, 98 is about seven percent more than 92, nowhere near *several times larger*. Magnitude claims are settled by arithmetic on the read values, never by comparing ink.",
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A column reads *Share of households with internet (%)* and a cell shows 42. A claim says "42,000 households have internet." Does the cell back the claim?',
    answer: "**No.** The cell reports 42 **percent**, not 42,000 households — a different unit and therefore a different fact, and a percent cannot establish a raw count. For this reason, every value should leave the graphic with its unit attached.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A claim says attendance "more than doubled," from 40 up to 68. A choice cites both numbers as support. Keep it?',
    answer: "**Eliminate it.** \"More than doubled\" requires the later value to exceed 80 (twice 40), and 68 falls short. Size words are conditions to verify, not decoration — a genuine rise is still not *this* rise.",
  },
  {
    type: 'checkpointQuestion',
    question: 'A claim says sales grew from Q1 to Q2. A choice reads *"Q2 had the highest sales of any quarter."* Does it support the claim?',
    answer: "**No.** \"Highest of any quarter\" is a level fact — a ranking at one moment. The claim concerns *growth* from Q1 to Q2, and a choice that never compares Q1 with Q2 cannot support a change claim, however accurate its number is.",
  },

  {
    type: 'text',
    content: "**In summary:** read the frame, convert the claim into a short checklist, retrieve only the cells that checklist names, and keep the one choice that is both true to the data *and* about the claim. The claim directs the reading; the data confirm it.",
  },
];
