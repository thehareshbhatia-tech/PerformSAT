/**
 * Learn lesson body — Rhetorical Synthesis (Expression of Ideas).
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

export const gRhetoricalSynthesisBlocks = [
  {
    type: 'text',
    content: 'A rhetorical synthesis question presents a set of bullet-point notes, a sentence stating what "the student wants to" accomplish, and four sentences to choose from. It is the one question type that states in writing exactly what the correct answer must do. The entire skill reduces to a single principle: **read the goal first, and treat its wording as the criteria the answer must satisfy.**',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "Every choice is drawn faithfully from the notes, so every choice is *true*. This has an immediate consequence: truth cannot separate the choices, and fact-checking them against the bullets is wasted effort. What separates them is **function** — whether the sentence performs the task the goal specifies. The correct answer is usually the goal itself restated in new words, which means the question supplies its own answer key.",
  },

  { type: 'heading', content: 'Reading the goal before the notes' },
  {
    type: 'text',
    content: "Resist the instinct to read the bullets from top to bottom. Doing so costs time and, worse, fills working memory with true but irrelevant facts that make every choice sound plausible. Begin instead with the goal sentence (\"The student wants to ...\"). The notes are only the raw material the answer was built from; consult them as a tiebreaker between two surviving choices, and often not even then.",
  },

  { type: 'heading', content: 'Decomposing the goal' },
  {
    type: 'text',
    content: 'Break the goal into its components: the **verb** (introduce, emphasize, compare, specify), the **focus** (the exact thing it names), and any **qualifier** (an audience such as "for readers unfamiliar with X," or a relation such as "the similarity between A and B"). The correct answer must satisfy *every* component. The most common error is selecting a choice that satisfies the verb and the focus but omits the qualifier — incorrect choices are routinely constructed from exactly that near-miss.',
  },
  {
    type: 'keyInsight',
    content: 'Treat the goal as a set of criteria, not a general impression. A choice that satisfies part of the goal and sounds complete is the standard near-miss. Verify every component before committing to an answer.',
  },

  { type: 'heading', content: 'Matching goal types to answer features' },
  {
    type: 'text',
    content: "Each goal type imposes a characteristic surface feature that the correct answer must display. Predict that feature from the goal, then scan the choices for it before reading any choice in full. At that point the task is identifying a marker, not weighing prose.",
  },
  {
    type: 'table',
    headers: ['When the goal says...', 'The right answer must...'],
    rows: [
      ['emphasize a similarity / a difference', 'contain an actual **comparison word** (like, unlike, both, whereas) — naming both things is not comparing them'],
      ['introduce X *to readers unfamiliar with it*', 'include **background** — state who or what X is, often by full name'],
      ['for an audience already familiar with X', 'omit background — a choice that re-explains familiar material is incorrect for this goal'],
      ['introduce the aim / goal of a study', 'state what researchers **set out to learn**, not what they found'],
      ['emphasize the range / variety of X', 'name **several** kinds — a single vivid example does not satisfy the goal'],
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'Notes:\n- Kite festivals are held in many countries.\n- The Weifang festival in China draws huge crowds.\n- Some kites are shaped like dragons.\n- Others are shaped like birds or fish.\n\nGoal: The student wants to emphasize the variety of kite shapes. Which choice best accomplishes this?\n\n(A) The Weifang festival in China draws huge crowds each year.\n(B) At kite festivals, kites appear in shapes ranging from dragons to birds to fish.\n(C) Kite festivals are held in many countries around the world.',
    steps: [
      { label: 'Read the goal', content: 'Verb = *emphasize*, focus = *the variety of kite shapes*. The required feature follows: the answer must name **several** shapes.' },
      { label: 'Scan for the feature', content: '(A) is about crowds — off-focus. (C) is about countries — off-focus. (B) lists dragons, birds, and fish.' },
      { label: 'Confirm the match', content: '**(B)** — it enumerates multiple shapes, which is what "variety" requires. All three statements are true; only (B) performs the assigned task.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Notes:\n- Ada Lovelace lived in the 1800s.\n- She wrote what many consider the first computer algorithm.\n- She worked on Charles Babbage\'s Analytical Engine.\n- The engine was never fully built.\n\nGoal: The student wants to introduce Ada Lovelace to readers unfamiliar with her. Which choice best accomplishes this?\n\n(A) Her algorithm was intended for the Analytical Engine.\n(B) The Analytical Engine was never fully built during her lifetime.\n(C) Ada Lovelace, a 19th-century mathematician, wrote what many consider the first computer algorithm.',
    steps: [
      { label: 'Decompose the goal', content: 'Verb = *introduce*, focus = *Ada Lovelace*, qualifier = *readers unfamiliar with her*. The qualifier requires the answer to supply **background** — who she is.' },
      { label: 'Test the qualifier', content: '(A) and (B) assume prior knowledge of Lovelace — neither performs an introduction. Only (C) names her and tells an unfamiliar reader *what she is* (a 19th-century mathematician) and *what she did*.' },
      { label: 'Confirm the match', content: "**(C)** — it joins identity (full name and role) to the focus. The background clause is not padding; the qualifier makes it mandatory." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Notes:\n- Both maple and pine trees grow across North America.\n- Maples drop their leaves each autumn.\n- Pines keep their needles all year.\n- Both provide shelter for birds.\n\nGoal: The student wants to emphasize a difference between maples and pines. Which choice best accomplishes this?\n\n(A) Both maples and pines grow across North America and shelter birds.\n(B) Maples and pines are two common types of North American trees.\n(C) Unlike pines, which keep their needles year-round, maples drop their leaves each autumn.',
    steps: [
      { label: 'Predict the required feature', content: 'The goal says *emphasize a difference*, so the answer must contain a **difference marker** — it has to assert how the two trees actually differ.' },
      { label: 'Test each choice', content: '(A) and (B) both *mention* maples and pines together, but neither states a difference. This is the standard error pattern on comparison goals: naming both items without relating them. Co-mention is not comparison.' },
      { label: 'Confirm the match', content: '**(C)** — "Unlike ... year-round ... each autumn" states the contrast outright. The marker word performs the task the goal assigns.' },
    ],
  },

  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Notes:\n- Researchers studied how honeybees find their way home.\n- They tracked the bees using tiny radar tags.\n- The study ran across two summers.\n- Bees returned to the hive even from unfamiliar terrain.\n\nGoal: The student wants to present the aim of the researchers\' study. Which choice best accomplishes this?\n\n(A) The study ran across two full summers of fieldwork.\n(B) The researchers set out to learn how honeybees find their way home.\n(C) The bees returned to the hive even from unfamiliar terrain.',
    steps: [
      { label: 'Decompose the goal', content: 'Verb = *present*, focus = *the aim of the study*. "Aim" means what the researchers **set out to learn** — not what they found, and not how long the work took.' },
      { label: 'Scan for the feature', content: '(A) is method and duration — off-focus. (C) is a *finding*. Only (B) frames intent: "set out to learn how...".' },
      { label: 'Confirm the match', content: '**(B)** — it states the researchers\' intent. (C) is the most interesting statement in the notes, and findings are routinely offered as distractors on aim goals; "aim" requires the intent, not the result.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'A goal says: "emphasize a similarity between the two inventors." One choice describes both inventors\' childhoods in detail but never says they are alike. Is it right? Why or why not?',
    answer: '**No.** A similarity goal requires a likeness *assertion* — a marker such as "both," "like," or "similarly." Describing two people side by side is co-mention, not comparison, and proximity earns a choice no credit. The correct answer states the shared trait outright.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A goal says: "introduce the aim of the study." One choice reports that the study found a 20% increase; another says the researchers wanted to test whether sleep affects memory. Which fits the goal?',
    answer: '**The second one.** "Aim" means what the researchers *set out to learn*, so the answer requires intent framing ("wanted to test whether..."). The 20% result is a finding, and findings usually sound more interesting than aims — which is why they appear so often as distractors.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A goal says: "introduce the painter Lena Ruiz to readers already familiar with her work." One choice opens "Lena Ruiz, a painter born in 1970, ..."; another says "Ruiz\'s later murals grew steadily more abstract." Which fits the goal?',
    answer: '**The second one.** These readers already know Ruiz, so background — full identity, birth year, "a painter" — is unnecessary, and re-explaining familiar material is the characteristic mark of a wrong answer on a *familiar-audience* goal. The correct choice omits the introduction and advances a specific point.',
  },

  {
    type: 'text',
    content: "**In summary:** read the goal before the notes; break it into verb, focus, and qualifier; predict the surface feature the answer must display; scan the choices for that feature; and select the choice that satisfies every component. Once this routine is established, these questions are among the fastest on the module.",
  },
];
