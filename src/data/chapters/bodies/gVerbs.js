/**
 * Learn lesson body — Verbs: Tense & Form (Standard English Conventions).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js): practiced-tutor
 * register — developed 2-5 sentence paragraphs with connective tissue; every rule
 * earns its "because"; student-psychology named concretely; math teaching is
 * example-led; varied rhythm, no aphorism-per-block. Bans carried from v3: no
 * analogies, no pep talk, no exclamation marks, no emojis, no test-personification.
 * All v3 teaching claims preserved. Gated by bodies.test.js.
 *
 * COMPOSED MODE (2026-07-18): chapterOpener lede + auto-numbered
 * sections/examples/figures + aside margin-notes + summary close
 * (exemplar: bodies/mPercents.js).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gVerbsBlocks = [
  {
    type: 'chapterOpener',
    lede: "You've matched verbs to their subjects and pronouns to their antecedents. One match remains, and it's the one your ear is least equipped to check: time — the verb has to agree with the sentence's own timeline. Tense questions are built so that every choice sounds acceptable on its own, and that's deliberate: the rest of the sentence sets when events happened, and your job is to pick the form that lands in the right spot on that line, not the form that reads most smoothly.",
  },

  { type: 'heading', content: 'What these questions test' },
  {
    type: 'text',
    content: "A typical item gives you a blank and four forms of the same verb: *walks, walked, has walked, had walked.* Read the blank by itself and often three of them sound fine — which is exactly why the ear fails here. It judges each option in isolation, and in isolation every option passes; only the **surrounding verbs and time words** can decide which form matches when the events actually happened. The evidence lives outside the blank.",
  },

  { type: 'heading', content: 'The default: match the neighbors' },
  {
    type: 'text',
    content: "The default rule takes no analysis: use the tense the sentences around the blank are already using, so a passage narrated in the past keeps its blank in the past. Depart from the neighboring tense only when a time word requires it. One caution about instinct, because it costs real points: the elaborate form tends to look more sophisticated, and students reach for it on the theory that a harder question deserves a fancier verb — the wrong answers are written for exactly that theory. The plain form that echoes its neighbors is usually right.",
  },
  {
    type: 'aside',
    kind: 'remember',
    content: 'The elaborate tense (*had studied, would have gone, will have finished*) is usually the wrong choice. A marked tense requires **a time word that justifies it** — with no such signal, the plain form wins.',
  },

  { type: 'heading', content: 'When a time word overrides the default' },
  {
    type: 'text',
    content: 'Certain words fix the tense outright, regardless of what the neighboring verbs are doing. When one of these appears, it outranks everything else in the sentence:',
  },
  {
    type: 'table',
    headers: ['Signal in the sentence', 'Use this tense', 'Example'],
    rows: [
      ['*since* or *for* (an action still going)', 'present perfect (*has / have* + participle)', '*She **has taught** here since 2019.*'],
      ['a specific past date or finished period', 'simple past', '*The lab **opened** in 2004.*'],
      ['two past events, one before the other', 'past perfect (*had* + participle) for the earlier one', '*By the time we arrived, the show **had ended**.*'],
      ['*will* / prediction from now', 'simple future', '*The bridge **will open** next spring.*'],
      ['a past viewpoint looking at its own future', '*would* + base verb', '*In 1990, researchers expected the method **would spread**.*'],
    ],
  },

  { type: 'heading', content: 'Two past events: the earlier one gets "had"' },
  {
    type: 'text',
    content: "When one past event happened *before* another past event, the earlier action takes the past perfect — *had* + participle — and the later one stays in the simple past. In *The train **had left** before we **reached** the platform*, the leaving came first, so it carries the *had*; the *had* is what tells the reader the two events are staggered rather than simultaneous.",
  },
  {
    type: 'text',
    content: "The restriction matters as much as the rule. With no second past event in the sentence, there's nothing for the *had* action to be earlier *than*, so an unjustified past perfect is wrong — and it turns up as a wrong answer often, precisely because it looks more considered than the simple past.",
  },

  { type: 'heading', content: 'The if / would-have pattern' },
  {
    type: 'text',
    content: 'A hypothetical about the past — what would have happened if something else had happened — divides its forms between the two clauses, and the halves are **not** identical.',
  },
  {
    type: 'list',
    title: 'How the two halves divide:',
    items: [
      'the *if*-clause takes *had* + participle: *If she **had trained** longer…*',
      'the result clause takes *would have* + participle: *…she **would have qualified**.*',
    ],
  },
  {
    type: 'text',
    content: "The characteristic error puts *would have* in both clauses, and it tempts students because the doubled version sounds balanced, as though the two halves ought to match. They don't: *If she would have trained* is wrong every time it appears.",
  },
  {
    type: 'aside',
    kind: 'watch',
    content: 'One *had* + participle in the *if*-clause, one *would have* + participle in the result clause. Never *"would have... would have."*',
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      "**Read the neighbors first.** Note the tense of the verbs around the blank — that's your default.",
      '**Scan for a time signal.** *Since / for*, a specific date, a second past event, a future cue, or *if… would have* — any of these overrides the default.',
      "**Decide from the timeline, not your ear.** Every choice sounds fine alone, so the surrounding verbs and time words settle it.",
      '**No signal? Stay plain.** A marked tense has to be justified by a time word; without one, match the neighboring tense.',
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The volcano has been dormant for centuries, and geologists ______ its slopes closely ever since the last eruption.\n\n(A) monitor\n(B) have monitored\n(C) had monitored\n(D) will monitor',
    steps: [
      { label: 'Find the time signal', content: '**Ever since** — the action began in the past and continues into the present.' },
      { label: 'Match the signal', content: '*Since* → present perfect → **(B) have monitored**.' },
      { label: 'Rule out the rest', content: "*Monitor* ignores the *since*; *had monitored* would need a second, later past event, and there isn't one; *will monitor* points forward while the sentence runs from past to present." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The museum reopened last March, and within weeks it ______ record crowds.\n\n(A) draws\n(B) drew\n(C) had drawn\n(D) will draw',
    steps: [
      { label: 'Read the surrounding tense', content: 'The first verb, *reopened*, is simple past, and *last March* is a finished date.' },
      { label: 'Match the frame', content: 'The blank stays in that finished-past frame → **(B) drew**. No time word licenses anything more elaborate.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'If the engineers ______ the flaw earlier, the launch would have proceeded on schedule.\n\n(A) had caught\n(B) would have caught\n(C) have caught\n(D) caught',
    steps: [
      { label: 'Identify the pattern', content: 'The result clause already reads *would have proceeded* — a past hypothetical, the if / would-have pattern.' },
      { label: 'Apply the rule', content: 'The *if*-clause takes *had* + participle → **(A) had caught**. Not (B): *"would have... would have"* is the classic error in this pattern.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Construction crews broke ground last month, and next spring the new library ______ its doors to the public.\n\n(A) opens\n(B) opened\n(C) will open\n(D) had opened',
    steps: [
      { label: 'Find the time signal', content: "**Next spring** — a time that hasn't arrived yet. Future." },
      { label: 'Match the signal', content: 'A future point → simple future → **(C) will open**.' },
      { label: 'Rule out the rest', content: "*Opens* and *opened* ignore the future cue; *had opened* would need an even earlier past event to sit before, and there isn't one." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The author published her first novel in 1978, but she ______ the manuscript years before that. Which fits: (wrote / had written)?',
    answer: '**had written.** Two past events sit on the timeline — publishing (1978) and writing — and the writing came first. The earlier event takes the past perfect: *had written.*',
  },
  {
    type: 'checkpointQuestion',
    question: 'The committee ______ the same procedure since it was founded in 2001. Which fits: (followed / has followed)?',
    answer: '**has followed.** *Since 2001* marks an action that began then and continues now — the present-perfect signal: *has followed.*',
  },
  {
    type: 'checkpointQuestion',
    question: 'By the time the alarm sounded, the technicians ______ the reactor. Which fits: (shut down / had shut down)?',
    answer: '**had shut down.** Two past events again — the alarm and the shutdown — and the shutdown came first. The earlier action takes the past perfect: *had shut down.*',
  },

  {
    type: 'summary',
    title: 'The whole skill in two moves',
    points: [
      'Default to the tense the **neighboring sentences** already use.',
      'Scan for a **time signal** — *since / for*, a specific date, a second past event, *if… would have* — that forces a different form.',
      'No signal means the **plain form** is right; a marked tense has to earn its place with a time word.',
    ],
  },
];
