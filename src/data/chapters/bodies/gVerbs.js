/**
 * Learn lesson body — Verbs: Tense & Form (Standard English Conventions).
 *
 * Lean "review / cheat-sheet" style: one SAT skill, plain language, one idea
 * per short section, a signal→tense table, then worked examples and a couple
 * of check-yourself questions. Same VOICE + SHAPE as gSubjectVerbAgreement.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gVerbsBlocks = [
  {
    type: 'text',
    content: 'The verb choices in these questions usually all sound fine on their own. The skill is not grammar by ear — it is **reading the timeline** the rest of the sentence lays out and picking the tense that fits it.',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'You get a blank verb and four time-forms: *walks, walked, has walked, had walked.* Often three of them are perfectly grammatical in the blank alone. The test is whether you can look at the **surrounding verbs and time words** and choose the form that matches when things happened. That is why reading by ear fails here: every option can sound natural in isolation, and only the timeline the rest of the sentence builds tells you which one is actually right.',
  },

  { type: 'heading', content: 'Default: match the neighbors' },
  {
    type: 'text',
    content: 'The safe first move is to match the tense the sentences around the blank already use. If the passage is telling a story in the past, keep the verb in the past too. Only break from that when a time word tells you to. Test writers count on you reaching for the most elaborate-looking tense, but the plain form that echoes its neighbors is usually the answer.',
  },
  {
    type: 'keyInsight',
    content: 'The fancy-looking tense (*had studied, would have gone, will have finished*) is usually a trap. A marked tense is **guilty until a time word proves it** — no signal, use the plain form.',
  },

  { type: 'heading', content: 'When a time word overrides the default' },
  {
    type: 'text',
    content: 'Certain words pin down the tense no matter what the neighbors do. Learn these signals and the tense each one demands:',
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
    content: 'When one past thing happened *before* another past thing, put the earlier action in past perfect (*had* + participle) and leave the later one in simple past. *The train **had left** before we **reached** the platform* — leaving came first, so it takes *had left*. Do not use past perfect unless there are truly two past events to order.',
  },

  { type: 'heading', content: 'The if / would-have pattern' },
  {
    type: 'text',
    content: 'For a hypothetical about the past, the two halves take **different** forms: the *if*-side takes *had* + participle, and the result-side takes *would have* + participle. *If she **had trained** longer, she **would have qualified**.* The classic error is putting *would have* on both sides — *if she would have trained* is always wrong.',
  },
  {
    type: 'keyInsight',
    content: 'One *had* + participle in the *if*-clause, one *would have* + participle in the result. Never *"would have... would have."*',
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The volcano has been dormant for centuries, and geologists ______ its slopes closely ever since the last eruption.\n\n(A) monitor\n(B) have monitored\n(C) had monitored\n(D) will monitor',
    steps: [
      { label: 'Find the time signal', content: 'The words **ever since** signal an action that started in the past and continues to now.' },
      { label: 'Match the signal', content: '*Since* → present perfect. That is **(B) have monitored**.' },
      { label: 'Rule out the rest', content: '*monitor* ignores "since"; *had monitored* needs a second, later past event that is not here; *will monitor* points to the future, not an ongoing past-to-now action.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The museum reopened last March, and within weeks it ______ record crowds.\n\n(A) draws\n(B) drew\n(C) had drawn\n(D) will draw',
    steps: [
      { label: 'Read the neighbors', content: 'The first verb, *reopened*, is simple past, and *last March* is a finished date.' },
      { label: 'Match', content: 'Keep the same finished-past frame → **(B) drew**. No time word licenses a perfect or future form.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'If the engineers ______ the flaw earlier, the launch would have proceeded on schedule.\n\n(A) had caught\n(B) would have caught\n(C) have caught\n(D) caught',
    steps: [
      { label: 'Spot the pattern', content: 'The result-side already says *would have proceeded*, so this is a past hypothetical — the if/would-have pattern.' },
      { label: 'Apply the rule', content: 'The *if*-side takes *had* + participle → **(A) had caught**. Not (B): *"would have... would have"* is the trademark error the question is baiting.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Construction crews broke ground last month, and next spring the new library ______ its doors to the public.\n\n(A) opens\n(B) opened\n(C) will open\n(D) had opened',
    steps: [
      { label: 'Find the time signal', content: 'The phrase **next spring** points to a time that has not arrived yet — the future.' },
      { label: 'Match the signal', content: 'A future point → simple future → **(C) will open**.' },
      { label: 'Rule out the rest', content: '*opens* and *opened* stay in the present or past despite the future cue; *had opened* would need an even earlier past event to sit before, and there is none.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The author published her first novel in 1978, but she ______ the manuscript years before that. Which fits: (wrote / had written)?',
    answer: '**had written.** There are two past events — publishing (1978) and writing. Writing came first, so the earlier action takes past perfect: *had written.*',
  },
  {
    type: 'checkpointQuestion',
    question: 'The committee ______ the same procedure since it was founded in 2001. Which fits: (followed / has followed)?',
    answer: '**has followed.** *Since 2001* marks an action that began in the past and is still going, which calls for present perfect: *has followed.*',
  },
  {
    type: 'checkpointQuestion',
    question: 'By the time the alarm sounded, the technicians ______ the reactor. Which fits: (shut down / had shut down)?',
    answer: '**had shut down.** There are two past events — the alarm sounding and the shutdown — and the shutdown happened first, so the earlier action takes past perfect: *had shut down.*',
  },

  {
    type: 'text',
    content: '**The move, every time:** default to the tense of the neighboring sentences, then scan for a signal (*since/for*, a date, a second past event, *if... would have*) that forces a different form. No signal, plain form.',
  },
];
