/**
 * Learn lesson body — Rhetorical Synthesis (Expression of Ideas).
 *
 * TUTOR VOICE (adopted 2026-07-14, mLinearEquations.js is the user-approved
 * exemplar): coaching direct-address — talks TO the student, everyday anchor
 * first, anticipates the near-miss trap before it lands, concrete decision
 * rules ("the goal is a checklist, not a vibe"). Lean structure unchanged:
 * short headed sections, a method, a signature table, 4 worked examples, 3
 * checkpoints. Example problems stay authentic test material. Gated by
 * bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gRhetoricalSynthesisBlocks = [
  {
    type: 'text',
    content: 'You get four bullet-point notes, a line that says what "the student wants to" do, and four sentences to choose from. Here\'s what changes everything: this is the one question type that tells you, in writing, exactly what the right answer has to do. The whole skill is one move — **read the goal first, and let its wording be your checklist.**',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "Every choice is drawn faithfully from the notes, so every choice is *true*. Sit with that for a second — it means truth can't separate them, and fact-checking against the bullets is wasted motion. What separates them is the **job**: does the sentence do what the goal asked? The right answer is usually just the goal restated in new words. The question hands you its own answer key, if you take it.",
  },

  { type: 'heading', content: 'Step 1 — Skip the notes, read the goal' },
  {
    type: 'text',
    content: "Don't read the bullets top to bottom — that's the instinct, and it costs you twice. It burns time, and it loads your head with true-but-irrelevant facts that make every choice feel plausible. Jump straight to the goal sentence (\"The student wants to ...\"). The bullets are just the box the answer came in; you open the box only as a tiebreaker, and usually not even then.",
  },

  { type: 'heading', content: 'Step 2 — Decompose the goal' },
  {
    type: 'text',
    content: 'Break the goal into its pieces: the **verb** (introduce, emphasize, compare, specify), the **focus** (the exact thing it names), and any **qualifier** (an audience like "for readers unfamiliar with X," or a relation like "the similarity between A and B"). The right answer has to hit *every* piece. Watch for this: a choice that nails the verb and focus but drops the qualifier feels finished — and that near-miss is exactly how the wrong answers get built.',
  },
  {
    type: 'keyInsight',
    content: 'Treat the goal as a checklist, not a vibe. A choice that satisfies part of it and feels complete is the classic near-miss. Demand every component before you commit.',
  },

  { type: 'heading', content: 'Match the goal to its answer signature' },
  {
    type: 'text',
    content: "Each goal type wears a uniform — a surface feature the right answer has to show. Predict the feature from the goal, then scan the choices for it before reading any choice in full. You're hunting for a marker, not weighing prose.",
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
      { label: 'Read the goal', content: 'Verb = *emphasize*, focus = *the variety of kite shapes*. So the uniform: the answer has to name **several** shapes.' },
      { label: 'Scan for the feature', content: '(A) is about crowds — off-focus. (C) is about countries — off-focus. (B) lists dragons, birds, and fish.' },
      { label: 'Commit', content: '**(B)** — it enumerates multiple shapes, which is exactly what "variety" demands. All three are true; only (B) does the job.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Notes:\n- Ada Lovelace lived in the 1800s.\n- She wrote what many consider the first computer algorithm.\n- She worked on Charles Babbage\'s Analytical Engine.\n- The engine was never fully built.\n\nGoal: The student wants to introduce Ada Lovelace to readers unfamiliar with her. Which choice best accomplishes this?\n\n(A) Her algorithm was intended for the Analytical Engine.\n(B) The Analytical Engine was never fully built during her lifetime.\n(C) Ada Lovelace, a 19th-century mathematician, wrote what many consider the first computer algorithm.',
    steps: [
      { label: 'Decompose', content: 'Verb = *introduce*, focus = *Ada Lovelace*, qualifier = *readers unfamiliar with her*. That qualifier means the answer owes the reader **background** — who she is.' },
      { label: 'Test the qualifier', content: '(A) and (B) talk as if you already know her — they skip the introduction entirely. Only (C) names her and tells a stranger *what she is* (a 19th-century mathematician) and *what she did*.' },
      { label: 'Commit', content: "**(C)** — it welds identity (full name + role) to the focus. That background clause isn't padding; the qualifier made it mandatory." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Notes:\n- Both maple and pine trees grow across North America.\n- Maples drop their leaves each autumn.\n- Pines keep their needles all year.\n- Both provide shelter for birds.\n\nGoal: The student wants to emphasize a difference between maples and pines. Which choice best accomplishes this?\n\n(A) Both maples and pines grow across North America and shelter birds.\n(B) Maples and pines are two common types of North American trees.\n(C) Unlike pines, which keep their needles year-round, maples drop their leaves each autumn.',
    steps: [
      { label: 'Predict the signature', content: 'The goal says *emphasize a difference*. So hunt for a **difference marker** — the answer has to actually assert how they differ.' },
      { label: 'Spot the trap', content: '(A) and (B) both *mention* maples and pines together, but neither states a difference. That\'s the "names both, relates neither" trap — co-mention is not comparison.' },
      { label: 'Commit', content: '**(C)** — "Unlike ... year-round ... each autumn" states the contrast outright. The marker word is what does the job.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Notes:\n- Researchers studied how honeybees find their way home.\n- They tracked the bees using tiny radar tags.\n- The study ran across two summers.\n- Bees returned to the hive even from unfamiliar terrain.\n\nGoal: The student wants to present the aim of the researchers\' study. Which choice best accomplishes this?\n\n(A) The study ran across two full summers of fieldwork.\n(B) The researchers set out to learn how honeybees find their way home.\n(C) The bees returned to the hive even from unfamiliar terrain.',
    steps: [
      { label: 'Decompose', content: 'Verb = *present*, focus = *the aim of the study*. "Aim" means what the researchers **set out to learn** — not what they found, not how long it took.' },
      { label: 'Scan for the feature', content: '(A) is method and duration — off-focus. (C) is a *finding*. Only (B) frames intent: "set out to learn how...".' },
      { label: 'Commit', content: '**(B)** — it names the goal. Notice that (C) sounds the most interesting; that\'s the bait. "Aim" demands the intent, never the result.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A goal says: "emphasize a similarity between the two inventors." One choice describes both inventors\' childhoods in detail but never says they are alike. Is it right? Why or why not?',
    answer: '**No.** A similarity goal needs a likeness *assertion* — a marker like "both," "like," or "similarly." Describing two people side by side is co-mention, not comparison; don\'t give a choice credit for proximity. The right answer states the shared trait outright.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A goal says: "introduce the aim of the study." One choice reports that the study found a 20% increase; another says the researchers wanted to test whether sleep affects memory. Which fits the goal?',
    answer: '**The second one.** "Aim" means what they *set out to learn* — intent framing ("wanted to test whether..."). The 20% result is a finding, and it usually sounds more interesting. That\'s exactly why it\'s the bait.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A goal says: "introduce the painter Lena Ruiz to readers already familiar with her work." One choice opens "Lena Ruiz, a painter born in 1970, ..."; another says "Ruiz\'s later murals grew steadily more abstract." Which fits the goal?',
    answer: '**The second one.** These readers already know Ruiz, so background — full identity, birth year, "a painter" — is dead weight, and re-explaining the known is the wrong-answer tell on a *familiar-audience* goal. Skip the introduction and go straight to a specific point.',
  },

  {
    type: 'text',
    content: "**The move, every time:** read the goal, not the notes → break it into verb + focus + qualifier → predict the answer's signature → scan for that feature → commit at the first full match. These become the fastest points on the module once the habit flips.",
  },
];
