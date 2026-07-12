/**
 * Learn chapter body — Form, Structure, and Sense (Standard English Conventions).
 *
 * Teach-from-zero textbook chapter following the locked template
 * (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md): roadmap → Stage 1 foundations →
 * Stage 2 numbered rulebook (rule → right → wrong → why) → Stage 3 on-the-test
 * (decision flow, traps, worked examples, checkpoints, one-page summary).
 * Voice reference: rwBodies/boundaries.js (the approved sibling chapter).
 * Concept source: knowledge/graph/rw (choice-set-diagnosis,
 * subject-verb-agreement-disguises, grammatical-number-assignment,
 * verb-tense-timeline, pronoun-antecedent-agreement,
 * pronoun-clarity-and-specificity, relative-pronoun-and-case,
 * modifier-adjacency, parallel-structure, apostrophe-possession-grid,
 * comparisons-and-word-pairs, window-widening, delete-and-reread).
 *
 * Rendered by SectionContent (ContentTabRenderer). Loaded lazily via
 * rwBodies/index.js — never import this from the chapter index.
 */

export const formStructureAndSenseBlocks = [
  {
    type: 'text',
    content: 'A Form, Structure, and Sense question hands you the same stem as Boundaries — *"Which choice completes the text so that it conforms to the conventions of Standard English?"* — but the four choices differ by **words**, not punctuation: one verb in four forms, a pronoun against its rivals, or the same phrases in a different order. The good news: **the choice set itself tells you which rule is being tested**, and every rule comes down to a mechanical check — find a noun, count it, match a shape. Learn the checks once and you can *prove* the answer instead of picking what sounds right.',
  },
  {
    type: 'steps',
    title: 'How this chapter is built',
    items: [
      '**Stage 1 · Foundations.** How to read a choice set as a label, what subjects and verbs are, and the strip-and-widen habit you will reuse on every question.',
      '**Stage 2 · The rulebook.** Ten numbered rules, each in the same shape: the rule, a right example, a wrong example, and the why.',
      '**Stage 3 · On the test.** A decision flow that routes the choice set to the right rule, the traps the test sets, worked examples, and a one-page summary.',
    ],
  },

  // ── Stage 1 · Foundations ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 1 · The choice set names the rule' },
  {
    type: 'text',
    content: 'The stem is always the same sentence, so it can never tell you which rule is on trial. **The four choices can.** Read them first, as a set, and name the one way they differ: verb **number** (*is / are*) means agreement; verb **time** (*walked / has walked*) means tense; a **pronoun** split (*it / they*, or a pronoun against a named noun) means reference; different **opening words** after an introductory phrase mean a modifier; a changed **shape** on a list item means parallel structure; shuffled **apostrophes** mean the possession grid; a swapped second half of a pair (*not only… and*) means word pairs. Diagnose before you solve — a student who applies the wrong rule can still land on a grammatical-sounding sentence, and the test is built to reward exactly that mistake with a wrong answer.',
  },
  {
    type: 'text',
    content: 'Two terms carry the whole chapter. The **subject** is the noun a clause is about — the doer or holder of the action. The **verb** is the action or state word that answers to it. Between those two, the test wedges **camouflage**: a prepositional phrase (a preposition plus its noun — *of the results*, *across the valley*), a comma-wrapped aside, or a *that*-clause. None of it can ever be the subject. The core move, reused by half the rules below: **delete the camouflage and read the survivors welded together.** The noun left standing in the subject slot — not the noun nearest the blank — decides the verb.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Strip the camouflage', content: '*The recipe for these dumplings has been handed down for generations.* Delete *for these dumplings* and the skeleton appears: the recipe has been handed down. The verb answers to *recipe*.', variant: 'right' },
      { label: 'Trust the nearest noun', content: '*The recipe for these dumplings have been handed down for generations.* The verb was matched to *dumplings* — the noun that happens to sit beside it. Position is not ownership.', variant: 'wrong' },
    ],
  },
  {
    type: 'strategyCard',
    title: 'Strip, then widen',
    content: 'Two habits run underneath every rule in this chapter. **Strip:** cross out prepositional phrases and comma-wrapped asides between subject and verb, and judge only what survives. **Widen:** read from the sentence’s true start to its end — and for tense, one sentence back — before deciding. The evidence is deliberately placed outside the blank’s neighborhood: the subject several words upstream, a list’s anchor at the sentence’s start, the deciding verb in the sentence before. If you chose without moving your eyes, assume the local read fooled you.',
  },
  {
    type: 'checkpointQuestion',
    number: 1,
    question: 'In *The crate of oranges ______ left on the dock overnight*, which noun decides the verb — *crate* or *oranges* — and what do you do to see it?',
    answer: '*Crate* — so the verb is *was*, not *were*. Strike the prepositional phrase *of oranges*: a preposition’s noun can never be the subject. **Why:** the test parks a wrong-number noun beside the blank on purpose; the subject is found by deleting, not by proximity.',
  },

  // ── Stage 2 · The rulebook ─────────────────────────────────────────────
  { type: 'heading', content: 'Stage 2 · The rulebook' },
  {
    type: 'text',
    content: 'Ten rules cover this territory. Each follows the same shape: the **rule**, a **right** example, a **wrong** example, and the **why**. Rules 1 and 2 are one skill — agreement — split into its two halves: finding the subject, then counting it.',
  },

  { type: 'heading', content: 'Rule 1 — A verb agrees with its true subject, not the nearest noun' },
  {
    type: 'text',
    content: 'Agreement is the simplest rule with the hardest hunt. A **singular** subject (one thing) takes a singular verb; a **plural** subject (more than one) takes a plural verb. One quirk worth saying out loud: on present-tense verbs, the **-s form is the singular** — *the result suggests* (one result), *the results suggest* (many) — the opposite of how nouns work. The rule is trivial; the test is finding the subject, because on real items the subject never sits beside the verb. Something is always wedged between them: a prepositional phrase, a comma-wrapped aside, or a *that*-clause. Strip the camouflage and weld subject to verb. Two frames flip the hunt’s direction: in *there is / there are* sentences the subject comes **after** the verb, and some sentences invert entirely (*Along the ridge stands a row of pines*) — when the verb arrives early, hunt the subject downstream.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*The pattern of cracks across the tiles suggests a slow leak.* Strike *of cracks across the tiles*; the subject is *pattern*, singular, so the verb takes -s.', variant: 'right' },
      { label: 'Wrong', content: '*The pattern of cracks across the tiles suggest a slow leak.* The verb was matched to *tiles* — the nearest noun, and never the subject.', variant: 'wrong' },
    ],
  },
  {
    type: 'diagramRef',
    visualType: 'subjectVerbAgreementDiagram',
    description: 'Match the verb to the true subject, not the decoy noun wedged between them by a prepositional phrase or aside.',
  },

  { type: 'heading', content: 'Rule 2 — Grammatical number is assigned by grammar, not by feel' },
  {
    type: 'text',
    content: 'Finding the subject is half the job; the other half is counting it, and for a family of subjects the count defies the ear. **Each, every, either, neither,** and *one (of…)* point at individuals one at a time — always singular, even with *of the [plural]* attached; the of-phrase is scenery. A **collective noun** (*committee, team, flock*) names one body — singular. Two subjects joined by **and** are plural, always, no matter how far apart the sentence splits them. But *along with*, *as well as*, and *together with* do **not** build a plural — they are trailing phrases, not joins; only *and* compounds a subject. Two more: *the number of* names one quantity (singular) while *a number of* means several (plural), and an *-ing* phrase used as a subject (*collecting samples from six rivers*) names one activity — singular, no matter what plurals ride inside it.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*Each of the volunteers was assigned a separate trail.* *Each* points at the volunteers one at a time; the of-phrase is scenery.', variant: 'right' },
      { label: 'Wrong', content: '*Each of the volunteers were assigned a separate trail.* The verb was matched to *volunteers* — but the subject is *each*, and *each* is always singular.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Rule 3 — Verb tense follows the passage’s timeline' },
  {
    type: 'text',
    content: 'A **tense** places a verb in time. The defining property of tense items: several choices are grammatical on their own, so the blank’s sentence alone cannot decide. The evidence lives in the **neighboring sentences’ verbs** and in time markers, which makes this the rule that demands the widest window. The default: **match the tenses around the blank.** Deviate only when a cue licenses a marked form: *since*, *for*, or *over the past…* takes *has/have* + verb (started then, still true now); a specific date or a finished period takes simple past; when two past events interact, only the **earlier** one takes *had* + verb; a past moment looking at its own future (*in 1990, engineers expected the line would open soon*) takes *would*. No cue, no fancy tense — an elaborate form has to show visible evidence to earn its place.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*Since 2015 the survey has recorded a steady decline.* *Since* marks something that started in the past and still holds, which takes *has* + verb.', variant: 'right' },
      { label: 'Wrong', content: '*Since 2015 the survey recorded a steady decline.* Simple past says finished-and-over; it cannot carry a *since* that reaches into the present.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Rule 4 — A pronoun inherits its number from a stated antecedent' },
  {
    type: 'text',
    content: 'A **pronoun** is a stand-in word (*it, they, its, their*); the noun it stands for is its **antecedent**. Two laws govern the pair. First, the antecedent must **literally appear on the page** — a noun the passage merely implies cannot govern a pronoun. Second, the pronoun copies the antecedent’s number exactly, read off the noun’s written form rather than the mental picture: *the orchestra* is one body even though it holds ninety players, so *it*, not *they*. When a pronoun opens a sentence, its antecedent usually sits in the sentence before — back up one sentence and point at it. If you cannot put your finger on the exact noun a pronoun replaces, the pronoun is the problem.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*The museum rotates its collection every spring.* One institution, so *its*.', variant: 'right' },
      { label: 'Wrong', content: '*The museum rotates their collection every spring.* *Their* has no plural noun on the page to stand for — the stated antecedent is the singular *museum*.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Rule 5 — A pronoun must point at exactly one thing' },
  {
    type: 'text',
    content: 'Beyond number, a pronoun must point at **exactly one** reasonable referent. If two nouns of the same type are in range — two people, two plural things — any matching pronoun is ambiguous, and ambiguity is a structural fact, not a style opinion. When the choice set offers both a pronoun and a specific noun, count the candidates: two candidates, or zero, and the specific noun wins. A bare *this* or *that* pointing at a whole previous idea is vague the same way; the repair is *this* plus a naming noun (*this delay*, *this method*). And repeating a noun is not an error — on these items, clarity outranks elegance every time.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*When Okafor emailed Reyes about the deadline, Okafor attached the revised budget.* Repeating the name reads plainly — and points at exactly one person.', variant: 'right' },
      { label: 'Wrong', content: '*When Okafor emailed Reyes about the deadline, she attached the revised budget.* Two women are on the page; *she* could be either one, so the sentence never says who acted.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Rule 6 — Who, whom, which, that, whose: match the type, then the slot' },
  {
    type: 'text',
    content: 'A **relative pronoun** picks up a noun and starts a clause about it. Choose on two axes. **Type:** *who/whom* are for people; *which* is for things; *that* covers either; *whose* is the possessive of both (*a theory whose predictions held up* is correct); *where* is for physical places only; *when* is for times only. A study, a novel, or a situation is not a place — the fix is *in which*, not *where*. **Slot:** *who* fills a subject slot, so a verb comes right after it; *whom* fills an object slot, so it follows a preposition (*many of whom*). *Whom* directly before a verb is the error signature. Stiff-sounding forms like *in which* are often the credited answer precisely because the smooth-sounding rival breaks a rule.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*The judges praised the apprentice who restored the clock tower.* Person + a verb right after the blank: subject slot, so *who*.', variant: 'right' },
      { label: 'Wrong', content: '*The film depicts a decade where the town doubled in size.* A decade is a time, not a place you can stand in — *when* (or *in which*), never *where*.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Rule 7 — A modifier attaches to whatever it sits next to' },
  {
    type: 'text',
    content: 'A **modifier** is a describing word or phrase, and it attaches to whatever it touches — the reader has no other way to know what it describes. The workhorse item: a sentence opens with a describing phrase, then a comma; the person or thing being described must be the **very next noun**. When it is not, the modifier **dangles** — it attaches to the wrong noun and the sentence literally claims something absurd. The method: extract the opening phrase, ask *who or what is doing this?*, and name the required noun **before** reading any choice. Then scan only each choice’s first noun. One planted trap: a possessive smuggles the right name inside the wrong noun — after *Trained in Vienna,* the phrase *the pianist’s recordings* still dangles, because the head noun is *recordings*, and recordings were never trained anywhere.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*Hoping to beat the storm, the crew shortened the route.* The first noun after the comma is the one doing the hoping.', variant: 'right' },
      { label: 'Wrong', content: '*Hoping to beat the storm, the route was shortened by the crew.* A route cannot hope; the passive rewrite smuggled the wrong noun into the opening slot.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Rule 8 — Items in a series or pair share one grammatical form' },
  {
    type: 'text',
    content: 'Ideas of equal weight joined by *and*, *or*, or a series must wear one grammatical shape: all nouns, all *-ing* phrases, all *to*-phrases, all full clauses. This is **parallel structure**. The blank holds one item; the others — the **anchors** — sit in fixed text, so read the whole sentence, classify the anchor’s form by its first words, and keep only the choice that matches. Word pairs are welded templates whose second half is not negotiable: *not only… but also*, *both… and*, *either… or*, *neither… nor*, *between… and*. What follows the first marker must match what follows the second. One allowance: a repeated function word (a second *to*, a repeated preposition) is optional — never eliminate a choice just for dropping the echo word.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*The grant funds planting native trees, restoring wetlands, and monitoring runoff.* Three *-ing* phrases — one shape down the whole list.', variant: 'right' },
      { label: 'Wrong', content: '*The grant funds planting native trees, restoring wetlands, and to monitor runoff.* The last item switches shape mid-list, breaking the pattern the anchors set.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Rule 9 — Apostrophes: the four written shapes of a noun' },
  {
    type: 'text',
    content: 'A noun has four written shapes, and the apostrophe is the code that separates them — every competing form sounds identical, so the ear carries zero information here. Two mechanical tests decide everything. **Nouns — the next-word test:** look at the word right after the noun. Another noun follows → possession is happening → an apostrophe belongs, positioned by the owner’s number (one owner → *’s*; many owners → *s’*). Anything else follows (a verb, a preposition, the end of the sentence) → plain plural, no apostrophe. Pluralizing alone never uses an apostrophe. **Pronouns — the expansion test:** pronouns invert the noun logic. Possessive pronouns take **no** apostrophe (*its, their, whose, your*); a pronoun spelled with an apostrophe is always a contraction (*it’s* = *it is*, *they’re* = *they are*, *who’s* = *who is*). Expand it to the full phrase and re-read: if the sentence parses, the contraction is right; if not, the bare possessive is. *There* is neither — it points at a place or opens a *there is / there are* frame.',
  },
  {
    type: 'table',
    title: 'The four written shapes of a noun',
    headers: ['Shape', 'Spelling', 'What it signals'],
    rows: [
      ['Plain plural', 'the visitors', 'More than one; nothing owned — no apostrophe, ever'],
      ['Singular possessive', 'the visitor’s coat', 'One owner — apostrophe before the s'],
      ['Plural possessive', 'the visitors’ coats', 'Many owners — apostrophe after the s'],
      ['Irregular-plural possessive', 'the children’s coats', 'The plural has no s, so the possessive is built like a singular: apostrophe + s'],
    ],
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*The engine lost its power because both filters were clogged.* *Its* owns the power; *filters* has no noun after it, so it stays a plain plural.', variant: 'right' },
      { label: 'Wrong', content: '*The engine lost it’s power.* Expand the contraction: "the engine lost it is power" does not read. The apostrophe form is a contraction, never a possessive.', variant: 'wrong' },
    ],
  },

  { type: 'heading', content: 'Rule 10 — Comparisons weigh like against like' },
  {
    type: 'text',
    content: 'A comparison is valid only when both sides are the same kind of thing: person against person, work against work, measurement against measurement. *The population of Finland is larger than Iceland* weighs a number against a country. Three repairs put the same kind on both sides: repeat with a possessive (*Iceland’s*), restate with an of-phrase (*the population of Iceland*), or use a stand-in — *that of* for a singular noun, *those of* for a plural — and the stand-in must match the number of the noun it replaces. The check is naming, not hearing: say what each side **is**, and if the kinds differ, the sentence fails no matter how obvious the intended meaning feels.',
  },
  {
    type: 'comparison',
    items: [
      { label: 'Right', content: '*The wingspan of the condor exceeds that of the golden eagle.* *That of* stands in for "the wingspan of" — measurement against measurement.', variant: 'right' },
      { label: 'Wrong', content: '*The wingspan of the condor exceeds the golden eagle.* This weighs a measurement against a bird.', variant: 'wrong' },
    ],
  },

  // ── Stage 3 · On the test ──────────────────────────────────────────────
  { type: 'heading', content: 'Stage 3 · On the test' },
  {
    type: 'steps',
    title: 'The decision flow',
    items: [
      'Read the four choices before the passage. Name the one way they differ: number, time, pronoun, opening words, item shape, apostrophes, or the second half of a pair. That name routes you to a rule.',
      'Run that rule’s check — strip the camouflage (R1-R2), read the neighboring verbs (R3), point at the stated antecedent (R4-R5), match type then slot (R6), name the doer (R7), find the anchor (R8), run the next-word or expansion test (R9), weigh like against like (R10).',
      'Two axes varying at once? Settle number first — it is silent, cheap to check, and usually the real test. Treat the audible axis as bait until the passage proves otherwise.',
      'Plug the survivor in and re-read the whole sentence from its true start. The fix has to survive the full sentence, not just the neighborhood around the blank.',
    ],
  },
  {
    type: 'keyInsight',
    content: '**One axis decides; the rest is decoration.** When the choices vary on two axes at once — number and tense is the standard pairing — the test is betting you will fix the audible one. Tense differences are easy to hear; number slips are not. Settle the silent axis first: find the true subject, strike the wrong-number choices, and only then let the timeline pick among the survivors. A choice that fixes the sound while keeping the wrong number is the most carefully built wrong answer on the page.',
  },
  {
    type: 'trapCard',
    title: 'The nearest-noun match',
    wrong: '**The nearest-noun match.** A noun sits right beside the blank, and its number is loud — *the shelf of trophies were…*, *the debates over the policy was…* You match the verb (or the pronoun) to the noun you can see without moving your eyes.',
    correction: 'The noun inside a prepositional phrase can never be the subject, and an aside wrapped in commas never changes the count. Strip every phrase between the subject and the verb, then read the two welded together (Rules 1-2). The sentence was engineered so the wrong noun touches the blank — treat adjacency as a warning, not evidence.',
  },
  {
    type: 'trapCard',
    title: 'The audible fix',
    wrong: '**The audible fix.** The sentence sounds off, and a tense change is the fix you can hear — so you swap *was* for *has been* and move on, never noticing the choices also split singular against plural.',
    correction: 'Read the choice set before diagnosing. A number split among the choices means agreement is on trial, and the tense variation is decoration (Rules 1-3). Number errors are nearly silent to the ear, which is exactly why the test hides them under audible tense noise. Settle number first; it eliminates half the set for free.',
  },
  {
    type: 'trapCard',
    title: 'The smooth dangler',
    wrong: '**The smooth dangler.** After an opening phrase, all four choices are grammatical, clear, and concise on their own — so you pick the one that flows best, and it opens with a possessive: *Determined to finish, the writer’s draft…*',
    correction: 'Grammatical-in-isolation is zero evidence on a modifier item. Ask who is doing the opening phrase’s action, name that noun before reading a single choice, and check only each choice’s first noun (Rule 7). The possessive is the sharpest plant: *the writer’s draft* is a draft, not a writer, and a draft cannot be determined.',
  },
  {
    type: 'example',
    difficulty: 'Easy',
    problem: 'The design of the two new terminals ______ passengers to reach any gate in under eight minutes.\n\n(A) allow\n(B) allows\n(C) are allowing\n(D) have allowed',
    steps: [
      { label: 'Read the choice set', content: 'One singular form (*allows*) against three plural forms, with tense noise sprinkled on top. A number split means agreement — Rule 1.' },
      { label: 'Strip the camouflage', content: 'Delete *of the two new terminals*. The skeleton: *The design ______ passengers to reach any gate.* The subject is *design*, singular; *terminals* is the planted decoy beside the blank.' },
      { label: 'Answer', content: '**(B) allows** — singular subject, singular verb (the -s form is the singular). The tense variation never mattered.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'The archive of letters, along with several water-damaged notebooks recovered from the same trunk, ______ now the subject of a painstaking restoration led by conservators at the university.\n\n(A) are\n(B) were\n(C) is\n(D) have been',
    steps: [
      { label: 'Read the choice set', content: 'Number splits (singular *is* against plural *are / were / have been*) with tense noise. Agreement — Rules 1 and 2.' },
      { label: 'Strip two layers of camouflage', content: 'The prepositional phrase *of letters* and the comma-wrapped *along with…* aside both go. *Along with* adds company, not a compound — only *and* builds a plural subject (Rule 2). The subject is *archive*, singular.' },
      { label: 'Match and verify', content: 'Only (C) is singular. Plug it in and read from the true start: *The archive … is now the subject of a painstaking restoration.* Clean.' },
      { label: 'Answer', content: '**(C) is** — (A) and (D) agree with the decoy *notebooks*; (B) is both plural and past while *now* holds the sentence in the present.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Medium',
    problem: 'Between 1968 and 1972, the mission’s ground crews ______ more than four hundred soil samples for long-term storage.\n\n(A) have prepared\n(B) prepared\n(C) had prepared\n(D) prepare',
    steps: [
      { label: 'Read the choice set', content: 'Every choice is plural; only the time changes. A pure time split means tense — Rule 3.' },
      { label: 'Find the cue', content: '*Between 1968 and 1972* is a bounded, finished window in the past. A finished past takes simple past. *Have prepared* claims the action still reaches the present; *had prepared* needs a second, later past event to sit in front of; *prepare* is present tense.' },
      { label: 'Answer', content: '**(B) prepared** — a dated, closed window takes simple past, and nothing in the sentence licenses a marked form.' },
    ],
  },
  {
    type: 'example',
    difficulty: 'Hard',
    problem: 'Determined to document the eruption at close range, ______\n\n(A) the volcanologist’s notebooks filled with sketches and ash-fall measurements within a week.\n(B) sketches and ash-fall measurements filled the volcanologist’s notebooks within a week.\n(C) the volcanologist filled three notebooks with sketches and ash-fall measurements within a week.\n(D) within a week the volcanologist’s notebooks were filled with sketches and ash-fall measurements.',
    steps: [
      { label: 'Read the choice set', content: 'The choices differ in their opening words after a fixed introductory phrase — a modifier item, Rule 7.' },
      { label: 'Name the doer first', content: 'Who was determined? A person — the volcanologist. That noun must lead the main clause. Decide this before reading any choice in full.' },
      { label: 'Scan only the boundary words', content: '(A) and (D) lead with *the volcanologist’s notebooks* — the head noun is *notebooks*, and notebooks cannot be determined; the possessive plants the right name inside the wrong noun. (B) leads with *sketches*. Only (C) puts the determined person right after the comma.' },
      { label: 'Answer', content: '**(C)** — every wrong choice here is grammatical, clear, and concise on its own. Only the first noun after the comma separates them, which is why sounding fine proves nothing on a modifier item.' },
    ],
  },
  {
    type: 'checkpointQuestion',
    number: 2,
    question: '*Neither of the proposals ______ funded this cycle.* Singular or plural verb — and what is the subject?',
    answer: 'Singular — *was funded*. The subject is *neither* ("neither one"), and the of-phrase is scenery (Rule 2). **Why:** number is assigned by the head word of the subject, not by the loudest plural riding inside the phrase.',
  },
  {
    type: 'checkpointQuestion',
    number: 3,
    question: '*By the time the inspectors arrived, the crew ______ the scaffolding.* Which verb form, and what licenses it?',
    answer: '*Had dismantled.* Two past events interact, and the dismantling came first — the earlier of two past actions takes *had* + verb (Rule 3). **Why:** *had* is licensed only by a second, later past event; without one, simple past wins.',
  },
  {
    type: 'checkpointQuestion',
    number: 4,
    question: '*The observatory opened ______ dome at dusk.* Choose among *its*, *it’s*, and *their* — and name the order of your checks.',
    answer: 'Number first: the stated antecedent is *observatory*, one institution, which kills *their* (Rule 4). Then form: the word owns the dome, and possessive pronouns take no apostrophe — expand *it’s* to *it is* and the sentence fails (Rule 9). The answer is *its*. **Why:** number is the cheaper check and eliminates half the set before any apostrophe thinking starts.',
  },
  {
    type: 'checkpointQuestion',
    number: 5,
    question: '*The internship taught her to budget her time, to write for a general audience, and ______.* Which shape must the last item take?',
    answer: 'A *to*-phrase — *to speak with confidence*, not *speaking with confidence*. The anchors in fixed text are *to budget* and *to write*; every item in the series matches their form (Rule 8). **Why:** the anchor lives outside the blank, so the whole sentence — not the blank’s neighborhood — sets the shape.',
  },
  {
    type: 'checkpointQuestion',
    number: 6,
    question: 'A choice set reads *has remained / have remained / remains / remain*. What two axes vary, and which do you settle first?',
    answer: 'Number (singular *has remained / remains* against plural *have remained / remain*) and time (perfect against simple present). Settle number first: find the true subject, strike half the set, then let the passage’s timeline pick between the survivors (Rules 1 and 3). **Why:** number is decided by one noun and is silent to the ear — the axis the test most often hides under audible tense noise.',
  },
  { type: 'heading', content: 'One-page summary' },
  {
    type: 'table',
    title: 'The whole chapter in one place',
    headers: ['Choice-set signal', 'Rule', 'The check'],
    rows: [
      ['Verb number splits (is / are, was / were)', 'R1', 'Strip the camouflage; the true subject — never the nearest noun — sets the verb'],
      ['Tricky subject (each, every, a number of, a collective)', 'R2', 'Assign number by grammar: each / every / either singular; and = plural; along with adds nothing'],
      ['Verb time splits (walked / has walked / had walked)', 'R3', 'Match the neighboring verbs unless a cue (since / for, a date, by the time) licenses a marked form'],
      ['Pronoun number splits (it / they, its / their)', 'R4', 'Point at the stated antecedent on the page; copy its written number'],
      ['Pronoun vs. a named noun; bare this / which', 'R5', 'Count the candidates: two, or zero, means the specific noun wins'],
      ['who / whom / which / where / when rotate', 'R6', 'Match person-vs-thing, then subject-vs-object slot; abstractions take in which, not where'],
      ['Opening words differ after an intro phrase', 'R7', 'Name the doer first; it must be the first noun after the comma — head noun, not possessive'],
      ['A list or pair item changes shape', 'R8', 'Find the anchor in fixed text and match its form; word pairs are welded templates'],
      ['Apostrophes shuffle (visitors / visitor’s / visitors’; its / it’s)', 'R9', 'Nouns: the next-word test. Pronouns: expand the contraction and re-read'],
      ['Second half of a pair swaps; that of / those of appear', 'R10', 'Weigh like against like; the stand-in must match its noun’s number'],
    ],
  },
  {
    type: 'text',
    content: 'That is the entire skill: read the choices, name the axis they vary on, run that rule’s one mechanical check — strip, point, match, expand — and verify the survivor by re-reading the whole sentence from its true start. Ten rules, each a lookup. No ear required.',
  },
];
