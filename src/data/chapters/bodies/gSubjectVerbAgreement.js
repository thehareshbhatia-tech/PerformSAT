/**
 * Learn lesson body — Subject-Verb Agreement (Standard English Conventions).
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gSubjectVerbAgreementBlocks = [
  {
    type: 'text',
    content: "Punctuation governs how clauses meet. Now we turn to the machinery inside them — and the first matching rule is that a verb agrees with its subject in number: *The dog barks. The dogs bark.*",
  },
  {
    type: 'text',
    content: "The match is automatic in simple sentences, which is why the tested versions are never simple. The rule itself isn't the skill — the skill is **locating the subject after the sentence has buried it**.",
  },
  {
    type: 'text',
    content: "Every difficult version of this question is simply the subject well hidden.",
  },

  { type: 'heading', content: "What's actually tested" },
  {
    type: 'text',
    content: "The standard construction places extra words between the subject and the verb, so the noun nearest the verb isn't the subject.",
  },
  {
    type: 'text',
    content: "Your ear registers that nearby noun, takes its number, and supplies the matching — incorrect — verb. The error happens in under a second, which is why the construction works.",
  },
  {
    type: 'text',
    content: "The defense: locate the true subject **before** judging the verb by sound.",
  },

  { type: 'heading', content: 'Step 1 — Find the subject' },
  {
    type: 'text',
    content: "Locate the verb first, then ask **who or what performs the action**. That noun is the subject — the only word in the sentence whose number the verb must match.",
  },
  {
    type: 'text',
    content: "In *The scientist **conducts** research*, the one who conducts is the *scientist*, singular, so the verb is *conducts*. Framing the question this way keeps your ear from settling on whatever noun happens to sit nearest the verb.",
  },

  { type: 'heading', content: 'Step 2 — Cross out the middle' },
  {
    type: 'text',
    content: "The material between subject and verb exists to obscure the subject — and you can remove it without changing the grammar.",
  },
  {
    type: 'text',
    content: "Bracket out everything between the two and read what remains: *The collection ~~of rare books~~ (is / are) on display* → *The collection **is** on display.*",
  },
  {
    type: 'text',
    content: "With the interruption gone, the correct verb is evident. This single deletion step resolves most questions in this skill.",
  },
  {
    type: 'diagramRef',
    visualType: 'subjectVerbAgreementDiagram',
    description: "A subject buried behind an interrupting phrase: the distractor noun beside the verb is crossed out, and the true subject links straight to its verb — the only pair whose numbers must match.",
  },
  {
    type: 'keyInsight',
    content: "The noun immediately before the verb is usually a distractor — incorrect choices are routinely built around it. Match the verb to the **subject**, never to the nearest noun.",
  },

  { type: 'heading', content: 'Phrases that never change the subject' },
  {
    type: 'text',
    content: "Certain phrases add detail but *never* change the subject or its number — they're interruptions between subject and verb. Cross them out on sight:",
  },
  {
    type: 'list',
    items: [
      '*of…*',
      '*along with…*',
      '*as well as…*',
      '*including…*',
      '*together with…*',
      '*in addition to…*',
      '*accompanied by…*',
      '*rather than…*',
    ],
  },
  {
    type: 'text',
    content: "In *The teacher, ~~along with her students~~, **is** leaving*, the subject stays *teacher* alone, no matter how many students come along.",
  },
  {
    type: 'tip',
    content: "**Watch *along with*.** It resembles *and* in meaning, but it never makes a subject plural.",
  },

  { type: 'heading', content: 'Subjects with counterintuitive number' },
  {
    type: 'text',
    content: "A few subject types take a number the ear doesn't expect — and those are exactly the types the questions favor. Knowing them outright makes the difficult versions routine:",
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

  { type: 'heading', content: 'The number of vs. a number of' },
  {
    type: 'text',
    content: "One article flips the number.",
  },
  {
    type: 'list',
    items: [
      '***The** number of…* names a single quantity → **singular** verb: *The number of volunteers **has** doubled since spring.*',
      '***A** number of…* means *several* → **plural** verb: *A number of volunteers **have** signed up for the night shift.*',
    ],
  },
  {
    type: 'text',
    content: "*The number of volunteers have doubled* mismatches — the subject is the quantity itself, one number, however many volunteers it counts.",
  },

  { type: 'heading', content: 'One of the… who' },
  {
    type: 'text',
    content: "When *one of the [plural noun]* stands alone as the subject, the verb matches *one* — singular: *One of the turbines **is** offline.*",
  },
  {
    type: 'text',
    content: "Inside a *who* or *that* clause, though, the pronoun reaches back to the **plural noun**, so the verb inside the clause is plural: *She is one of the engineers who **design** the turbines* — *who* stands for *engineers*, the group that designs, and she belongs to it.",
  },
  {
    type: 'text',
    content: "*One of the engineers who designs the turbines* mismatches. Rearranging exposes the logic: *Of the engineers who design the turbines, she is one.*",
  },

  { type: 'heading', content: 'How to approach these questions' },
  {
    type: 'steps',
    items: [
      '**Find the verb.** The blank is usually the verb, or the word right beside it.',
      "**Ask who or what performs the action.** That noun is the subject — not the noun nearest the verb.",
      '**Cross out the middle.** Delete of-phrases and interrupters like *along with* and *including*, then read what remains.',
      '**Match the number.** Check the counterintuitive types: *each* is singular, *neither…nor* matches the nearer noun, *the number of* is singular.',
    ],
  },

  { type: 'heading', content: 'Worked examples' },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The bouquet of roses that was picked for the ceremony ______ on the stage.\n\n(A) is\n(B) are',
    steps: [
      { label: 'Find the verb', content: 'The blank is the verb: ______ on the stage.' },
      { label: 'Identify the subject', content: 'What is on the stage is the **bouquet** — that noun is the subject.' },
      { label: 'Cross out the middle', content: 'Delete *of roses* and *that was picked for the ceremony*. What remains: *The bouquet ______ on the stage.*' },
      { label: 'Match the number', content: '*Bouquet* is singular → **(A) is**. *Roses* sits beside the blank precisely to invite *are* — the standard distractor placement.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The list of ingredients ______ printed on the back of the box.\n\n(A) is\n(B) are',
    steps: [
      { label: 'Identify the subject', content: 'What is printed is the **list**, not the ingredients.' },
      { label: 'Match the number', content: '*List* is singular → **(A) is**. *Of ingredients* is an interrupting phrase — remove it and the sentence reads *The list is printed.*' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'On the top shelf, beneath the old yearbooks, ______ the trophies the team won last spring.\n\n(A) sits\n(B) sit',
    steps: [
      { label: 'Recognize the inversion', content: 'The sentence opens with location phrases, so the subject follows the verb. Neither *shelf* nor *yearbooks* performs the action.' },
      { label: 'Identify the subject', content: 'The **trophies** are what sit there — that is the subject.' },
      { label: 'Match the number', content: '*Trophies* is plural → **(B) sit**. In an inverted sentence, locate the true subject after the verb and match it.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Neither the director nor the producers ______ willing to change the ending.\n\n(A) was\n(B) were',
    steps: [
      { label: 'Identify the construction', content: '*Neither…nor* — the verb matches the **nearer** noun, not the two nouns combined.' },
      { label: 'Find the nearer noun', content: '*Producers* (plural) sits immediately before the verb → **(B) were**.' },
      { label: 'Verify with the rule', content: 'Reversing the order — *Neither the producers nor the director* — changes the verb to *was*. The verb tracks whichever noun is nearer.' },
    ],
  },

  { type: 'heading', content: 'Check yourself' },
  {
    type: 'checkpointQuestion',
    question: 'The set of tools in the red toolbox (belong / belongs) to the mechanic. Which verb, and why?',
    answer: '**belongs.** The subject is *set* — singular. Everything after it, *of tools in the red toolbox*, is descriptive interruption. Remove it and read what remains: *The set belongs.*',
  },
  {
    type: 'checkpointQuestion',
    question: 'Every one of the applicants (was / were) interviewed twice. Which verb?',
    answer: '**was.** *Every one* is singular regardless of how many applicants follow it. *Of the applicants* is the interrupting of-phrase — the ear registers the plural noun and supplies *were*, but the of-phrase never controls the verb.',
  },
  {
    type: 'checkpointQuestion',
    question: 'There (is / are) a notebook and two pens on the desk. Which verb?',
    answer: '**are.** In a "there is/are" sentence the true subject follows the verb — here it is *a notebook and two pens*, joined by *and*, and therefore plural. The ear favors *is* because *a notebook* comes first, but the full compound subject is plural.',
  },
  {
    type: 'checkpointQuestion',
    question: 'A number of the manuscripts (was / were) damaged in the flood, and the number of legible pages (continue / continues) to shrink. Which verbs?',
    answer: '**were** and **continues.** *A number of* means *several* — plural, so the manuscripts *were* damaged. *The number of* names one quantity — singular, so it *continues* to shrink. The single article carries the whole decision.',
  },

  {
    type: 'text',
    content: "**The whole method in four moves:** find the verb, ask who or what performs the action, cross out the interrupting phrases, and match. Buried, inverted, or counterintuitive — the same four moves apply.",
  },
];
