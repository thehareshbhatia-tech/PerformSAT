/**
 * Learn lesson body — Rhetorical Synthesis (Expression of Ideas).
 *
 * NEW lean "review / cheat-sheet" style (not the old dense textbook template):
 * one SAT skill per lesson, plain language, one idea per short section, a
 * method, a scannable cheat-list/table, then 2-3 worked examples and a couple
 * of check-yourself questions. Gated by bodies.test.js (lean contract).
 * Voice + shape mirror gSubjectVerbAgreement.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gRhetoricalSynthesisBlocks = [
  {
    type: 'text',
    content: 'These are the questions that hand you four bullet-point notes, tell you what "the student wants to" do, and ask which sentence does it best. The whole skill is one move: **read the goal first, and let its wording be your checklist.**',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'Every choice is drawn faithfully from the notes, so every choice is *true.* Truth cannot separate them. What separates them is the **job** — does the sentence do what the goal asked? The right answer is basically the goal restated in new words. The question hands you its own answer key.',
  },

  { type: 'heading', content: 'Step 1 — Skip the notes, read the goal' },
  {
    type: 'text',
    content: 'Do not read the bullets top to bottom. Jump straight to the goal sentence ("The student wants to ..."). The bullets are just the box the answer came in — you inspect them only as a tiebreaker, and usually not even then.',
  },

  { type: 'heading', content: 'Step 2 — Decompose the goal' },
  {
    type: 'text',
    content: 'Break the goal into its pieces: the **verb** (introduce, emphasize, compare, specify), the **focus** (the exact thing it names), and any **qualifier** (an audience like "for readers unfamiliar with X," or a relation like "the similarity between A and B"). The right answer must hit *every* piece — nailing one and missing another is exactly how the trap answers are built.',
  },
  {
    type: 'keyInsight',
    content: 'The goal is a checklist. A choice that satisfies part of it and feels complete is the classic near-miss. Demand every component before you commit.',
  },

  { type: 'heading', content: 'Match the goal to its answer signature' },
  {
    type: 'text',
    content: 'Each goal type has a "uniform" — a surface feature the right answer has to wear. Predict the feature from the goal, then scan the choices for it before reading any choice in full.',
  },
  {
    type: 'table',
    headers: ['When the goal says...', 'The right answer must...'],
    rows: [
      ['emphasize a similarity / a difference', 'contain an actual **comparison word** (like, unlike, both, whereas) — naming both things is not comparing them'],
      ['introduce X *to readers unfamiliar with it*', 'include **background** — say who or what X is, often by full name'],
      ['for an audience already familiar with X', 'leave background *out* — re-explaining the known signals a wrong answer'],
      ['introduce the aim / goal of a study', 'state what researchers **set out to learn**, not what they found'],
      ['emphasize the range / variety of X', 'name **several** kinds — one vivid example fails the goal'],
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Notes:\n- Kite festivals are held in many countries.\n- The Weifang festival in China draws huge crowds.\n- Some kites are shaped like dragons.\n- Others are shaped like birds or fish.\n\nGoal: The student wants to emphasize the variety of kite shapes. Which choice best accomplishes this?\n\n(A) The Weifang festival in China draws huge crowds each year.\n(B) At kite festivals, kites appear in shapes ranging from dragons to birds to fish.\n(C) Kite festivals are held in many countries around the world.',
    steps: [
      { label: 'Read the goal', content: 'Verb = *emphasize*, focus = *the variety of kite shapes*. Signature: the answer must name **several** shapes.' },
      { label: 'Scan for the feature', content: '(A) is about crowds — off-focus. (C) is about countries — off-focus. (B) lists dragons, birds, and fish.' },
      { label: 'Commit', content: '**(B)** — it enumerates multiple shapes, which is what "variety" demands. All three are true; only (B) does the job.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Notes:\n- Ada Lovelace lived in the 1800s.\n- She wrote what many consider the first computer algorithm.\n- She worked on Charles Babbage\'s Analytical Engine.\n- The engine was never fully built.\n\nGoal: The student wants to introduce Ada Lovelace to readers unfamiliar with her. Which choice best accomplishes this?\n\n(A) Her algorithm was intended for the Analytical Engine.\n(B) The Analytical Engine was never fully built during her lifetime.\n(C) Ada Lovelace, a 19th-century mathematician, wrote what many consider the first computer algorithm.',
    steps: [
      { label: 'Decompose', content: 'Verb = *introduce*, focus = *Ada Lovelace*, qualifier = *readers unfamiliar with her*. Signature: the answer needs **background** — who she is.' },
      { label: 'Test the qualifier', content: '(A) and (B) assume you already know who she is; they skip the introduction. Only (C) names her and tells the unfamiliar reader *what she is* (a 19th-century mathematician) and *what she did*.' },
      { label: 'Commit', content: '**(C)** — it welds identity (full name + role) to the focus. The background clause is mandatory here, not padding.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Notes:\n- Both maple and pine trees grow across North America.\n- Maples drop their leaves each autumn.\n- Pines keep their needles all year.\n- Both provide shelter for birds.\n\nGoal: The student wants to emphasize a difference between maples and pines. Which choice best accomplishes this?\n\n(A) Both maples and pines grow across North America and shelter birds.\n(B) Maples and pines are two common types of North American trees.\n(C) Unlike pines, which keep their needles year-round, maples drop their leaves each autumn.',
    steps: [
      { label: 'Predict the signature', content: 'The goal is *emphasize a difference*. Signature: the answer must carry a **difference marker** and actually assert how they differ.' },
      { label: 'Spot the trap', content: '(A) and (B) both *mention* maples and pines together, but neither states a difference — they are the "names both, relates neither" trap. Co-mention is not comparison.' },
      { label: 'Commit', content: '**(C)** — "Unlike ... year-round ... each autumn" names the contrast explicitly. The marker word is what does the job.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A goal says: "emphasize a similarity between the two inventors." One choice describes both inventors\' childhoods in detail but never says they are alike. Is it right? Why or why not?',
    answer: '**No.** A similarity goal needs a likeness *assertion* — a marker like "both," "like," or "similarly." Describing two people side by side is co-mention, not comparison. The right answer will state the shared trait outright.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A goal says: "introduce the aim of the study." One choice reports that the study found a 20% increase; another says the researchers wanted to test whether sleep affects memory. Which fits the goal?',
    answer: '**The second one.** "Aim" means what they *set out to learn*, which is intent framing ("wanted to test whether..."). The 20% result is a finding — often the more interesting-sounding choice, which is exactly the bait.',
  },

  {
    type: 'text',
    content: '**The move, every time:** read the goal, not the notes → break it into verb + focus + qualifier → predict the answer\'s signature → scan for that feature → commit at the first full match. Fastest points on the module once the habit flips.',
  },
];
