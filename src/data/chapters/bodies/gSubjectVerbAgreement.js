/**
 * Learn lesson body — Subject-Verb Agreement (Standard English Conventions).
 *
 * NEW lean "review / cheat-sheet" style (not the old dense textbook template):
 * one SAT skill per lesson, plain language, one idea per short section, a
 * method, a scannable cheat-list/table, then 2-3 worked examples and a couple
 * of check-yourself questions. Gated by bodies.test.js (lean contract).
 * This file is the VOICE + SHAPE EXEMPLAR for every other per-skill lesson.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gSubjectVerbAgreementBlocks = [
  {
    type: 'text',
    content: 'The rule is easy — a singular subject takes a singular verb, a plural subject takes a plural verb. The whole skill is one thing: **can you still find the subject after the sentence buries it?**',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'You already match subjects and verbs by ear: *The dog barks. The dogs bark.* The SAT never tests that. It tests whether you can find the subject once it is hidden behind extra words — so the entire skill is really about **locating the subject**.',
  },

  { type: 'heading', content: 'Step 1 — Find the subject' },
  {
    type: 'text',
    content: 'Find the verb, then ask **who or what is doing it.** That noun is the subject, and it is the only word the verb has to match. *The scientist **conducts** research* — who conducts? *scientist* (singular), so *conducts*.',
  },

  { type: 'heading', content: 'Step 2 — Cross out the middle' },
  {
    type: 'text',
    content: 'The SAT stuffs describing phrases between the subject and the verb so your eye lands on the wrong noun. Delete them and the answer is obvious: *The collection ~~of rare books~~ (is / are) on display* → *The collection **is** on display.*',
  },
  {
    type: 'keyInsight',
    content: 'The noun sitting right before the verb is usually a decoy. Match the verb to the **subject**, never to the nearest noun.',
  },

  { type: 'heading', content: 'The phrases that are always decoys' },
  {
    type: 'text',
    content: 'These add detail but never change the subject. Cross them out on sight: **of… · along with… · as well as… · including… · together with… · in addition to… · accompanied by… · rather than…** For example, *The teacher, ~~along with her students~~, **is** leaving* — subject = *teacher*.',
  },

  { type: 'heading', content: 'The subjects people get wrong' },
  {
    type: 'table',
    headers: ['When the subject is…', 'Verb is…', 'Example'],
    rows: [
      ['each, every, either, neither, anyone', 'singular', '*Each of the players **is** ready.*'],
      ['two nouns joined by "and"', 'plural', '*The coach and the captain **are** here.*'],
      ['either…or / neither…nor', 'match the nearer noun', '*Neither the manager nor the workers **were** told.*'],
      ['some, most, all, none, half', 'match the noun after "of"', '*Most of the water **is** gone. Most of the samples **are** gone.*'],
      ['a gerund (-ing) phrase', 'singular', '*Running the numbers **takes** time.*'],
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The bouquet of roses that was picked for the ceremony ______ on the stage.\n\n(A) is\n(B) are',
    steps: [
      { label: 'Find the verb', content: 'The blank is the verb: ______ on the stage.' },
      { label: 'Who is on the stage?', content: 'The **bouquet** — that is the subject.' },
      { label: 'Cross out the middle', content: 'Delete *of roses* and *that was picked for the ceremony*. Left with: *The bouquet ______ on the stage.*' },
      { label: 'Match', content: '*Bouquet* is singular → **(A) is**. Not *are*: *roses* is a decoy sitting next to the blank.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The list of ingredients ______ printed on the back of the box.\n\n(A) is\n(B) are',
    steps: [
      { label: 'Subject?', content: 'What is printed? The **list**, not the ingredients.' },
      { label: 'Match', content: '*List* is singular → **(A) is**. *of ingredients* is a decoy phrase.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Neither the director nor the producers ______ willing to change the ending.\n\n(A) was\n(B) were',
    steps: [
      { label: 'Spot the pair', content: 'This is a *neither…nor* subject, so the verb matches the **nearer** noun.' },
      { label: 'Which noun is nearer?', content: '*producers* (plural) sits right before the verb → **(B) were**. Flip the order to *Neither the producers nor the director* and it would become *was*.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The set of tools in the red toolbox (belong / belongs) to the mechanic. Which verb, and why?',
    answer: '**belongs.** The subject is *set* (singular); *of tools in the red toolbox* is all describing phrases. Cross them out: *The set belongs.*',
  },
  {
    type: 'checkpointQuestion',
    question: 'Every one of the applicants (was / were) interviewed twice. Which verb?',
    answer: '**was.** *Every one* is singular no matter how many applicants there are; *of the applicants* is a decoy of-phrase.',
  },

  {
    type: 'text',
    content: '**The move, every time:** find the verb → ask who is doing it → cross out the describing phrases → match. That is the whole skill.',
  },
];
