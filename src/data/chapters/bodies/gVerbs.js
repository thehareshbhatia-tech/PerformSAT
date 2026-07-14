/**
 * Learn lesson body — Verbs: Tense & Form (Standard English Conventions).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar mLinearEquations.js):
 * coaching direct-address — talks TO the student, anticipates the mistake
 * before it happens, everyday anchor first and rule second, concrete decision
 * rules ("a marked tense is guilty until a time word proves it"). Lean
 * structure unchanged; gated by chapters/__tests__/bodies.test.js.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gVerbsBlocks = [
  {
    type: 'text',
    content: "Every verb-tense question hands you choices that all sound fine on their own — that's the design. This was never a grammar-by-ear skill. It's a **timeline** skill: the rest of the sentence lays out when things happened, and your job is to pick the form that sits in the right spot on that line.",
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: "You get a blank and four time-forms: *walks, walked, has walked, had walked.* Often three of them are perfectly grammatical in the blank by itself — say each one alone and nothing sounds broken. The real test is whether you read the **surrounding verbs and time words** and choose the form that matches when things happened. That's why your ear fails here: it judges each option in isolation, and isolation is exactly where every option passes.",
  },

  { type: 'heading', content: 'Default: match the neighbors' },
  {
    type: 'text',
    content: 'Your first move costs nothing: match the tense the sentences around the blank are already using. Story told in the past? Keep the blank in the past. Break from the neighbors only when a time word orders you to. And watch your own instincts here — the elaborate-looking tense feels smarter, so it pulls you in. The plain form that echoes its neighbors is usually the answer.',
  },
  {
    type: 'keyInsight',
    content: 'The fancy-looking tense (*had studied, would have gone, will have finished*) is usually the trap. Treat a marked tense as **guilty until a time word proves it** — no signal, plain form.',
  },

  { type: 'heading', content: 'When a time word overrides the default' },
  {
    type: 'text',
    content: 'Certain words pin the tense down no matter what the neighbors are doing. These are your signals — spot one and it outranks everything else in the sentence:',
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
    content: "When one past thing happened *before* another past thing, the earlier action takes past perfect (*had* + participle) and the later one stays simple past. *The train **had left** before we **reached** the platform* — the leaving came first, so it carries the *had*. One warning: no second past event, no past perfect. A *had* with only one event on the timeline is decoration, and decoration is wrong.",
  },

  { type: 'heading', content: 'The if / would-have pattern' },
  {
    type: 'text',
    content: 'A hypothetical about the past splits its forms — the two halves are **not** twins. The *if*-side takes *had* + participle; the result-side takes *would have* + participle. *If she **had trained** longer, she **would have qualified**.* The mistake to expect from yourself: putting *would have* on both sides. *If she would have trained* is wrong every single time it appears.',
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
      { label: 'Find the time signal', content: '**Ever since** — an action that started in the past and is still running now.' },
      { label: 'Match the signal', content: '*Since* → present perfect → **(B) have monitored**.' },
      { label: 'Rule out the rest', content: "*Monitor* ignores the *since*; *had monitored* needs a second, later past event and there isn't one; *will monitor* points forward when the sentence points past-to-now." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The museum reopened last March, and within weeks it ______ record crowds.\n\n(A) draws\n(B) drew\n(C) had drawn\n(D) will draw',
    steps: [
      { label: 'Read the neighbors', content: 'The first verb, *reopened*, is simple past, and *last March* is a finished date.' },
      { label: 'Match', content: "Stay in that finished-past frame → **(B) drew**. No time word licenses anything fancier — and the fancier options are sitting there hoping you'll reach." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'If the engineers ______ the flaw earlier, the launch would have proceeded on schedule.\n\n(A) had caught\n(B) would have caught\n(C) have caught\n(D) caught',
    steps: [
      { label: 'Spot the pattern', content: 'The result-side already says *would have proceeded* — a past hypothetical, the if / would-have pattern.' },
      { label: 'Apply the rule', content: "The *if*-side takes *had* + participle → **(A) had caught**. Not (B): *\"would have... would have\"* is exactly the error this question is fishing for." },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Construction crews broke ground last month, and next spring the new library ______ its doors to the public.\n\n(A) opens\n(B) opened\n(C) will open\n(D) had opened',
    steps: [
      { label: 'Find the time signal', content: "**Next spring** — a time that hasn't arrived yet. Future." },
      { label: 'Match the signal', content: 'A future point → simple future → **(C) will open**.' },
      { label: 'Rule out the rest', content: "*Opens* and *opened* ignore the future cue; *had opened* would need an even earlier past event to stand before, and there isn't one." },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The author published her first novel in 1978, but she ______ the manuscript years before that. Which fits: (wrote / had written)?',
    answer: '**had written.** Two past events sit on the timeline — publishing (1978) and writing — and the writing came first. The earlier one takes the *had*: *had written.*',
  },
  {
    type: 'checkpointQuestion',
    question: 'The committee ______ the same procedure since it was founded in 2001. Which fits: (followed / has followed)?',
    answer: "**has followed.** *Since 2001* marks an action that started back then and is still going — that's the present-perfect signal: *has followed.*",
  },
  {
    type: 'checkpointQuestion',
    question: 'By the time the alarm sounded, the technicians ______ the reactor. Which fits: (shut down / had shut down)?',
    answer: '**had shut down.** Two past events again — the alarm and the shutdown — and the shutdown came first. Earlier action, past perfect: *had shut down.*',
  },

  {
    type: 'text',
    content: '**The move, every time:** default to the tense your neighbors are using, then scan for a signal — *since / for*, a hard date, a second past event, *if... would have* — that forces a different form. No signal, plain form. The fancy tense has to earn its way in.',
  },
];
