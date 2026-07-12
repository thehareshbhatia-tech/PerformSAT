/**
 * Learn lesson body — Subject-Verb Agreement (Standard English Conventions).
 *
 * Lean "review / cheat-sheet" style at the BALANCED-BUMP depth (2026-07-12):
 * one SAT skill per lesson, plain language, one idea per short section, but each
 * section explains the WHY, not just the rule. Four worked examples and three
 * check-yourself questions. Gated by bodies.test.js (lean contract).
 * This file is the VOICE + SHAPE + DEPTH EXEMPLAR for every other per-skill
 * lesson — match its section length and example/checkpoint counts.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gSubjectVerbAgreementBlocks = [
  {
    type: 'text',
    content: 'The rule is easy — a singular subject takes a singular verb, a plural subject takes a plural verb. The whole skill is one thing: **can you still find the subject after the sentence buries it?** Every hard version of this question is just the subject hidden well.',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'You already match subjects and verbs by ear: *The dog barks. The dogs bark.* The SAT never tests that — it would be too easy. Instead it slides extra words between the subject and the verb so the noun sitting closest to the verb is the *wrong* one. Your ear grabs that nearby noun and picks the matching verb, and you get it wrong. So the entire skill is really about **locating the true subject** before you let your ear decide.',
  },

  { type: 'heading', content: 'Step 1 — Find the subject' },
  {
    type: 'text',
    content: 'Find the verb first, then ask **who or what is doing it.** That noun is the subject, and it is the only word the verb has to match — nothing else in the sentence matters. *The scientist **conducts** research* — who conducts? *scientist* (singular), so *conducts*. Asking the "who is doing it" question out loud is what stops your ear from defaulting to the nearest noun.',
  },

  { type: 'heading', content: 'Step 2 — Cross out the middle' },
  {
    type: 'text',
    content: 'The SAT buries the subject behind describing phrases so your eye lands on the wrong noun. The fix is physical: bracket out everything between the subject and the verb, then read what is left. *The collection ~~of rare books~~ (is / are) on display* → *The collection **is** on display.* Once the middle is gone, the right verb is obvious — this is where most agreement errors are actually set.',
  },
  {
    type: 'keyInsight',
    content: 'The noun sitting right before the verb is usually a decoy planted there on purpose. Match the verb to the **subject**, never to the nearest noun.',
  },

  { type: 'heading', content: 'The phrases that are always decoys' },
  {
    type: 'text',
    content: 'These phrases add detail but *never* change the subject or its number — they are pure padding between subject and verb. Learn to cross them out on sight: **of… · along with… · as well as… · including… · together with… · in addition to… · accompanied by… · rather than…** For example, *The teacher, ~~along with her students~~, **is** leaving* — the subject is still just *teacher*, no matter how many students you add. "Along with" is not the same as "and": it never makes a subject plural.',
  },

  { type: 'heading', content: 'The subjects people get wrong' },
  {
    type: 'text',
    content: 'A few subject types don’t behave the way your ear expects. These are the ones the SAT reaches for, so it’s worth knowing them cold:',
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
      { label: 'Who is on the stage?', content: 'The **bouquet** — that is the subject.' },
      { label: 'Cross out the middle', content: 'Delete *of roses* and *that was picked for the ceremony*. Left with: *The bouquet ______ on the stage.*' },
      { label: 'Match', content: '*Bouquet* is singular → **(A) is**. Not *are*: *roses* is a decoy sitting right next to the blank.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The list of ingredients ______ printed on the back of the box.\n\n(A) is\n(B) are',
    steps: [
      { label: 'Subject?', content: 'What is printed? The **list**, not the ingredients.' },
      { label: 'Match', content: '*List* is singular → **(A) is**. *of ingredients* is a decoy phrase — cross it out and the sentence reads *The list is printed.*' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'On the top shelf, beneath the old yearbooks, ______ the trophies the team won last spring.\n\n(A) sits\n(B) sit',
    steps: [
      { label: 'Notice the sentence is flipped', content: 'It opens with location phrases, so the subject comes *after* the verb. Don’t let *shelf* or *yearbooks* fool you.' },
      { label: 'Who is doing the sitting?', content: 'The **trophies** sit there — that is the subject.' },
      { label: 'Match', content: '*Trophies* is plural → **(B) sit**. When a sentence inverts, find the real subject after the verb and match it.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Neither the director nor the producers ______ willing to change the ending.\n\n(A) was\n(B) were',
    steps: [
      { label: 'Spot the pair', content: 'This is a *neither…nor* subject, so the verb matches the **nearer** noun, not both together.' },
      { label: 'Which noun is nearer?', content: '*producers* (plural) sits right before the verb → **(B) were**.' },
      { label: 'Prove the rule', content: 'Flip the order to *Neither the producers nor the director* and it would become *was* — the verb tracks whichever noun is closest.' },
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
    type: 'checkpointQuestion',
    question: 'There (is / are) a notebook and two pens on the desk. Which verb?',
    answer: '**are.** In a "there is/are" sentence the real subject comes after the verb — here it is *a notebook and two pens*, joined by *and*, so it is plural. (Your ear wants *is* because *a notebook* comes first, but the whole subject is plural.)',
  },

  {
    type: 'text',
    content: '**The move, every time:** find the verb → ask who is doing it → cross out the describing phrases → match. Whether the subject is buried, inverted, or one of the tricky types above, that four-step move gets it right.',
  },
];
