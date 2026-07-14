/**
 * Learn lesson body — Subject-Verb Agreement (Standard English Conventions).
 *
 * TUTOR VOICE (adopted 2026-07-14, user-approved exemplar mLinearEquations.js):
 * coaching direct-address — talks TO the student, anticipates the mistake
 * before it happens, everyday anchor first and rule second, concrete decision
 * rules ("cross out the middle, then match"). Balanced-bump depth retained:
 * four worked examples, three check-yourself questions. Gated by
 * chapters/__tests__/bodies.test.js (lean contract).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gSubjectVerbAgreementBlocks = [
  {
    type: 'text',
    content: '*The dog barks. The dogs bark.* You\'ve matched subjects to verbs since before you could read — so why does a whole question type exist for it? Because the rule was never the skill. The skill is one thing: **can you still find the subject after the sentence buries it?** Every hard version of this question is just the subject hidden well.',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'Here\'s the setup you\'ll face: extra words slide in between the subject and the verb, so the noun sitting closest to the verb is the *wrong* one. Your ear grabs that nearby noun, hears its number, and hands you the matching — wrong — verb. That miss happens in under a second, which is exactly why the trap works. Beat it by locating the true subject **before** you let your ear vote.',
  },

  { type: 'heading', content: 'Step 1 — Find the subject' },
  {
    type: 'text',
    content: 'Find the verb first, then ask out loud: **who or what is doing this?** That noun is the subject — the only word in the whole sentence the verb answers to. *The scientist **conducts** research* — who conducts? *Scientist*, singular, so *conducts*. Asking the who-is-doing-it question is what stops your ear from grabbing whatever noun happens to sit nearby.',
  },

  { type: 'heading', content: 'Step 2 — Cross out the middle' },
  {
    type: 'text',
    content: 'The stuff between subject and verb exists to bury the subject — so unbury it, physically. Bracket out everything between them and read what\'s left. *The collection ~~of rare books~~ (is / are) on display* → *The collection **is** on display.* With the middle gone, the right verb is obvious. This one crossing-out habit defuses most of the questions in this skill.',
  },
  {
    type: 'keyInsight',
    content: 'The noun sitting right before the verb is usually a decoy, planted there on purpose. Match the verb to the **subject** — never to the nearest noun.',
  },

  { type: 'heading', content: 'The phrases that are always decoys' },
  {
    type: 'text',
    content: 'Some phrases add detail but *never* change the subject or its number — pure padding between subject and verb. Cross them out on sight: **of… · along with… · as well as… · including… · together with… · in addition to… · accompanied by… · rather than…** *The teacher, ~~along with her students~~, **is** leaving* — the subject is still just *teacher*, no matter how many students tag along. Watch *along with* especially: it feels like *and*, but it never makes a subject plural.',
  },

  { type: 'heading', content: 'The subjects people get wrong' },
  {
    type: 'text',
    content: 'A few subject types refuse to behave the way your ear expects — and those are exactly the ones the questions reach for. Get these cold and the hard versions turn routine:',
  },
  {
    type: 'table',
    headers: ['When the subject is…', 'Verb is…', 'Example'],
    rows: [
      ['each, every, either, neither, anyone', 'singular', '*Each of the players **is** ready.*'],
      ['two nouns joined by "and"', 'plural', '*The coach and the captain **are** here.*'],
      ['either…or / neither…nor', 'match the nearer noun', '*Neither the manager nor the workers **were** told.*'],
      ['some, most, all, none, half', 'match the noun after "of"', '*Most of the water **is** gone. Most of the samples **are** gone.*'],
      ['a gerund (-ing) phrase', 'singular', '*Running the numbers **takes** time.*'],
      ['inverted "here/there is…"', 'match the noun that follows', '*There **are** three reasons.*'],
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The bouquet of roses that was picked for the ceremony ______ on the stage.\n\n(A) is\n(B) are',
    steps: [
      { label: 'Find the verb', content: 'The blank is the verb: ______ on the stage.' },
      { label: 'Who is on the stage?', content: 'The **bouquet** — that\'s your subject.' },
      { label: 'Cross out the middle', content: 'Delete *of roses* and *that was picked for the ceremony*. You\'re left with: *The bouquet ______ on the stage.*' },
      { label: 'Match', content: '*Bouquet* is singular → **(A) is**. *Roses* sits right next to the blank precisely so you\'ll reach for *are* — that\'s the decoy doing its job.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The list of ingredients ______ printed on the back of the box.\n\n(A) is\n(B) are',
    steps: [
      { label: 'Subject?', content: 'What is printed? The **list**, not the ingredients.' },
      { label: 'Match', content: '*List* is singular → **(A) is**. *Of ingredients* is a decoy phrase — cross it out and the sentence reads *The list is printed.*' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'On the top shelf, beneath the old yearbooks, ______ the trophies the team won last spring.\n\n(A) sits\n(B) sit',
    steps: [
      { label: 'Notice the sentence is flipped', content: 'It opens with location phrases, so the subject comes *after* the verb. Don\'t let *shelf* or *yearbooks* pull you in — neither one is doing anything.' },
      { label: 'Who is doing the sitting?', content: 'The **trophies** sit there — that\'s your subject.' },
      { label: 'Match', content: '*Trophies* is plural → **(B) sit**. When a sentence flips, hunt for the real subject after the verb and match that.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Neither the director nor the producers ______ willing to change the ending.\n\n(A) was\n(B) were',
    steps: [
      { label: 'Spot the pair', content: '*Neither…nor* — the verb matches the **nearer** noun, not both nouns together.' },
      { label: 'Which noun is nearer?', content: '*Producers* (plural) sits right before the verb → **(B) were**.' },
      { label: 'Prove the rule', content: 'Flip the order — *Neither the producers nor the director* — and the verb flips to *was*. It tracks whichever noun is closest, every time.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The set of tools in the red toolbox (belong / belongs) to the mechanic. Which verb, and why?',
    answer: '**belongs.** The subject is *set* — singular. Everything after it, *of tools in the red toolbox*, is describing-phrase padding. Cross it out and read what\'s left: *The set belongs.*',
  },
  {
    type: 'checkpointQuestion',
    question: 'Every one of the applicants (was / were) interviewed twice. Which verb?',
    answer: '**was.** *Every one* is singular no matter how many applicants stand behind it. *Of the applicants* is the decoy of-phrase — your ear hears the plural and reaches for *were*. Don\'t take the bait.',
  },
  {
    type: 'checkpointQuestion',
    question: 'There (is / are) a notebook and two pens on the desk. Which verb?',
    answer: '**are.** In a "there is/are" sentence the real subject comes after the verb — here it\'s *a notebook and two pens*, joined by *and*, so it\'s plural. Your ear votes *is* because *a notebook* comes first; the whole subject outvotes it.',
  },

  {
    type: 'text',
    content: '**The move, every time:** find the verb → ask who\'s doing it → cross out the describing phrases → match. Buried, flipped, or one of the tricky types above — the same four-step move gets all of them.',
  },
];
