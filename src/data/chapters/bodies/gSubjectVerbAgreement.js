/**
 * Learn lesson body — Subject-Verb Agreement (Standard English Conventions).
 *
 * VOICE v4 (adopted 2026-07-18, exemplar: bodies/centralIdeas.js): practiced-tutor
 * register — developed 2-5 sentence paragraphs with connective tissue; every rule
 * earns its "because"; student-psychology named concretely; math teaching is
 * example-led; varied rhythm, no aphorism-per-block. Bans carried from v3: no
 * analogies, no pep talk, no exclamation marks, no emojis, no test-personification.
 * All v3 teaching claims preserved.
 *
 * COMPOSED MODE (2026-07-18): chapterOpener lede + auto-numbered
 * sections/examples/figures + aside margin-notes + summary close
 * (exemplar: bodies/mPercents.js).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * bodies/index.js — never import this from the chapter index.
 */

export const gSubjectVerbAgreementBlocks = [
  {
    type: 'chapterOpener',
    lede: "Punctuation governed how clauses meet; now we turn to the machinery inside them, and the first matching rule is the simplest one in the section: a verb agrees with its subject in number. *The dog barks. The dogs bark.* Nobody misses that pair, which is exactly the problem — the match is automatic in simple sentences, so the tested versions are never simple. The rule itself isn't the skill. The skill is **locating the subject after the sentence has buried it**, because every difficult version of this question is simply the subject well hidden.",
  },

  { type: 'heading', content: "What's actually tested" },
  {
    type: 'text',
    content: "The standard construction places a stack of extra words between the subject and its verb, so the noun nearest the verb isn't the subject at all. Your ear doesn't know that: it registers the nearby noun, borrows its number, and supplies the matching — incorrect — verb, all in under a second. That speed is why the construction keeps working on students who know the rule perfectly, and it's why the defense has to be procedural: locate the true subject **before** letting your ear judge the verb.",
  },

  { type: 'heading', content: 'Step 1 — Find the subject' },
  {
    type: 'text',
    content: "Locate the verb first, then ask **who or what performs the action**. That noun is the subject — the only word in the sentence whose number the verb must match. In *The scientist **conducts** research*, the one who conducts is the *scientist*, singular, so the verb is *conducts*. The order of the two questions matters, because asking *who performs it* forces you past whatever noun happens to sit nearest the verb.",
  },

  { type: 'heading', content: 'Step 2 — Cross out the middle' },
  {
    type: 'text',
    content: "The material between subject and verb exists to obscure the subject, and you can delete it without changing the grammar — an of-phrase or a descriptive clause adds detail, never a new subject. So bracket out everything between the two and read what remains: *The collection ~~of rare books~~ (is / are) on display* becomes *The collection **is** on display*, and with the interruption gone the correct verb is evident. This single deletion resolves most questions in this skill. Figure 1 shows the move: the distractor noun beside the verb struck out, the true subject linked straight to the verb it must match.",
  },
  {
    type: 'diagramRef',
    visualType: 'subjectVerbAgreementDiagram',
    description: "A subject buried behind an interrupting phrase: the distractor noun beside the verb is crossed out, and the true subject links straight to its verb — the only pair whose numbers must match.",
  },
  {
    type: 'aside',
    kind: 'remember',
    content: "The noun immediately before the verb is usually a distractor — incorrect choices are routinely built around it. Match the verb to the **subject**, never to the nearest noun.",
  },

  { type: 'heading', content: 'Phrases that never change the subject' },
  {
    type: 'text',
    content: "Certain phrases add companions to the subject without ever changing its number — grammatically they're interruptions, whatever they add in meaning. Cross them out on sight:",
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
    content: "In *The teacher, ~~along with her students~~, **is** leaving*, the subject stays *teacher* alone, no matter how many students come along. The phrase feels additive — more people are leaving, after all — but the verb counts only the noun that owns it, and none of these phrases ever hands over that ownership.",
  },
  {
    type: 'aside',
    kind: 'watch',
    content: "**Watch *along with*.** It resembles *and* in meaning, but only *and* builds a compound subject — *along with* leaves the original subject, and its number, untouched.",
  },

  { type: 'heading', content: 'Subjects with counterintuitive number' },
  {
    type: 'text',
    content: "A few subject types take a number the ear doesn't expect — and those are exactly the types the questions favor, because a subject the ear gets right for free tests nothing. Knowing this short set outright makes the difficult versions routine:",
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
    content: "One pair deserves separate treatment, because a single article flips the verb. ***The** number of…* names a quantity — one number — so it takes a **singular** verb: *The number of volunteers **has** doubled since spring.* ***A** number of…* simply means *several*, so it takes a **plural** verb: *A number of volunteers **have** signed up for the night shift.* The mismatch to catch is *The number of volunteers have doubled* — the subject is the quantity itself, one number, however many volunteers it counts.",
  },

  { type: 'heading', content: 'One of the… who' },
  {
    type: 'text',
    content: "When *one of the [plural noun]* stands alone as the subject, the verb matches *one* — singular: *One of the turbines **is** offline.* Put the same phrase inside a *who* or *that* clause, though, and the verb flips, because the pronoun reaches back to the **plural noun**: in *She is one of the engineers who **design** the turbines*, *who* stands for *engineers* — the group that designs — and she belongs to it.",
  },
  {
    type: 'text',
    content: "So *one of the engineers who designs the turbines* mismatches, and rearranging the sentence exposes why: *Of the engineers who design the turbines, she is one.* The designing belongs to the whole group; the *one* only picks her out of it.",
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
    type: 'summary',
    title: 'The whole method in four moves',
    points: [
      'Find the **verb**, then ask who or what performs the action — that noun is the subject.',
      'Match the verb to that **subject**, never to the noun sitting nearest it.',
      'Cross out the **interrupting phrases** and read what remains before you decide.',
      'Buried, inverted, or counterintuitive, the **same four moves** apply.',
    ],
  },
];
