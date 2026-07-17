/**
 * Learn lesson body — Subject-Verb Agreement (Standard English Conventions).
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

export const gSubjectVerbAgreementBlocks = [
  {
    type: 'text',
    content: 'Punctuation governs how clauses meet; the conventions turn next to the machinery inside them, and the first matching rule is that a verb agrees with its subject in number. *The dog barks. The dogs bark.* The match is automatic in simple sentences, which is why the tested versions are never simple. The rule itself is not the skill; the skill is **locating the subject after the sentence has buried it**. Every difficult version of this question is simply the subject well hidden.',
  },

  { type: 'heading', content: 'What is actually tested' },
  {
    type: 'text',
    content: 'The standard construction places extra words between the subject and the verb, so that the noun nearest the verb is not the subject. The ear registers that nearby noun, takes its number, and supplies the matching — incorrect — verb. The error occurs in under a second, which is why the construction is effective. The defense is to locate the true subject **before** judging the verb by sound.',
  },

  { type: 'heading', content: 'Step 1 — Find the subject' },
  {
    type: 'text',
    content: 'Locate the verb first, then ask **who or what performs the action**. That noun is the subject — the only word in the sentence whose number the verb must match. In *The scientist **conducts** research*, the one who conducts is the *scientist*, singular, so the verb is *conducts*. Framing the question this way prevents the ear from settling on whatever noun happens to sit nearest the verb.',
  },

  { type: 'heading', content: 'Step 2 — Cross out the middle' },
  {
    type: 'text',
    content: 'The material between subject and verb serves only to obscure the subject, and it can be removed without changing the grammar. Bracket out everything between the two and read what remains: *The collection ~~of rare books~~ (is / are) on display* → *The collection **is** on display.* With the interruption removed, the correct verb is evident. This single deletion step resolves most questions in this skill.',
  },
  {
    type: 'keyInsight',
    content: 'The noun immediately before the verb is usually a distractor: incorrect choices are routinely built around it. Match the verb to the **subject** — never to the nearest noun.',
  },

  { type: 'heading', content: 'Interrupting phrases that never change the subject' },
  {
    type: 'text',
    content: 'Certain phrases add detail but *never* change the subject or its number — they are interruptions between subject and verb. Cross them out on sight: **of… · along with… · as well as… · including… · together with… · in addition to… · accompanied by… · rather than…** In *The teacher, ~~along with her students~~, **is** leaving*, the subject remains *teacher* alone, regardless of how many students accompany her. *Along with* deserves particular attention: it resembles *and* in meaning, but it never makes a subject plural.',
  },

  { type: 'heading', content: 'Subjects with counterintuitive number' },
  {
    type: 'text',
    content: 'A few subject types take a number the ear does not expect, and these are precisely the types the questions favor. Knowing them outright makes the difficult versions routine:',
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
    content: 'One article flips the number. ***The** number of…* names a single quantity and takes a **singular** verb: *The number of volunteers **has** doubled since spring.* ***A** number of…* means *several* and takes a **plural** verb: *A number of volunteers **have** signed up for the night shift.* Writing *The number of volunteers have doubled* mismatches — the subject is the quantity itself, one number, however many volunteers it counts.',
  },

  { type: 'heading', content: 'One of the… who' },
  {
    type: 'text',
    content: 'When *one of the [plural noun]* stands alone as the subject, the verb matches *one* — singular: *One of the turbines **is** offline.* Inside a *who* or *that* clause, however, the pronoun reaches back to the **plural noun**, so the verb inside the clause is plural: *She is one of the engineers who **design** the turbines* — *who* stands for *engineers*, the group that designs, and she belongs to it. *One of the engineers who designs the turbines* mismatches. Rearranging exposes the logic: *Of the engineers who design the turbines, she is one.*',
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
    content: '**In summary:** find the verb, ask who or what performs the action, cross out the interrupting phrases, and match. Whether the subject is buried, inverted, or one of the counterintuitive types above, the same four-step method applies.',
  },
];
