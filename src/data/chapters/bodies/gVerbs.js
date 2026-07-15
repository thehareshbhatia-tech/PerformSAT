/**
 * Learn lesson body — Verbs: Tense & Form (Standard English Conventions).
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

export const gVerbsBlocks = [
  {
    type: 'text',
    content: "Verb-tense questions present choices that all sound acceptable in isolation — the construction is deliberate. The skill is not grammar by ear but **timeline** reasoning: the rest of the sentence establishes when events happened, and the task is to choose the form that occupies the correct position on that line.",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "A typical item offers a blank and four tense forms: *walks, walked, has walked, had walked.* Often three of them are grammatical if the blank is read by itself — each form sounds acceptable alone. The question actually tests whether the **surrounding verbs and time words** have been read, since only they determine which form matches when events happened. This is why sound is unreliable here: the ear judges each option in isolation, and in isolation every option passes.",
  },

  { type: 'heading', content: 'The default: match the surrounding tense' },
  {
    type: 'text',
    content: 'The default rule requires no analysis: match the tense the sentences around the blank are already using. A passage narrated in the past keeps the blank in the past. Depart from the neighboring tense only when a time word requires it. One caution about instinct: the elaborate form tends to look more sophisticated, and that appearance attracts errors. The plain form that echoes its neighbors is usually correct.',
  },
  {
    type: 'keyInsight',
    content: 'The elaborate tense (*had studied, would have gone, will have finished*) is usually the incorrect choice. A marked tense requires **a time word that justifies it** — with no such signal, the plain form is correct.',
  },

  { type: 'heading', content: 'When a time word overrides the default' },
  {
    type: 'text',
    content: 'Certain words fix the tense regardless of what the neighboring verbs are doing. These signals, when present, outrank everything else in the sentence:',
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
    content: "When one past event happened *before* another past event, the earlier action takes the past perfect (*had* + participle) and the later one stays in the simple past. In *The train **had left** before we **reached** the platform*, the leaving came first, so it carries the *had*. The restriction matters as much as the rule: with no second past event, the past perfect is unjustified, and an unjustified form is incorrect.",
  },

  { type: 'heading', content: 'The if / would-have pattern' },
  {
    type: 'text',
    content: 'A hypothetical about the past divides its forms between the two clauses — the halves are **not** identical. The *if*-clause takes *had* + participle; the result clause takes *would have* + participle. *If she **had trained** longer, she **would have qualified**.* The characteristic error places *would have* in both clauses: *If she would have trained* is incorrect in every instance.',
  },
  {
    type: 'keyInsight',
    content: 'One *had* + participle in the *if*-clause, one *would have* + participle in the result clause. Never *"would have... would have."*',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The volcano has been dormant for centuries, and geologists ______ its slopes closely ever since the last eruption.\n\n(A) monitor\n(B) have monitored\n(C) had monitored\n(D) will monitor',
    steps: [
      { label: 'Find the time signal', content: '**Ever since** — the action began in the past and continues into the present.' },
      { label: 'Match the signal', content: '*Since* → present perfect → **(B) have monitored**.' },
      { label: 'Rule out the rest', content: '*Monitor* ignores the *since*; *had monitored* requires a second, later past event, and none is present; *will monitor* points forward while the sentence spans past to present.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The museum reopened last March, and within weeks it ______ record crowds.\n\n(A) draws\n(B) drew\n(C) had drawn\n(D) will draw',
    steps: [
      { label: 'Read the surrounding tense', content: 'The first verb, *reopened*, is simple past, and *last March* is a finished date.' },
      { label: 'Match the frame', content: 'The blank stays in that finished-past frame → **(B) drew**. No time word licenses a more elaborate form.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'If the engineers ______ the flaw earlier, the launch would have proceeded on schedule.\n\n(A) had caught\n(B) would have caught\n(C) have caught\n(D) caught',
    steps: [
      { label: 'Identify the pattern', content: 'The result clause already reads *would have proceeded* — a past hypothetical, the if / would-have pattern.' },
      { label: 'Apply the rule', content: 'The *if*-clause takes *had* + participle → **(A) had caught**. Not (B): *"would have... would have"* is the characteristic error in this pattern.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Construction crews broke ground last month, and next spring the new library ______ its doors to the public.\n\n(A) opens\n(B) opened\n(C) will open\n(D) had opened',
    steps: [
      { label: 'Find the time signal', content: '**Next spring** — a time that has not yet arrived. Future.' },
      { label: 'Match the signal', content: 'A future point → simple future → **(C) will open**.' },
      { label: 'Rule out the rest', content: '*Opens* and *opened* ignore the future cue; *had opened* would require an even earlier past event to precede, and none is present.' },
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
    type: 'text',
    content: '**In summary:** default to the tense the neighboring sentences use, then scan for a signal — *since / for*, a specific date, a second past event, *if... would have* — that forces a different form. With no signal, the plain form is correct; a marked tense must be justified by a time word.',
  },
];
