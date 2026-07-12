/**
 * Learn tab — Reading & Writing chapters (metadata only).
 *
 * One focused lesson per SAT skill, grouped into the four official R&W units
 * (Reading: Information & Ideas, Craft & Structure; Writing & Grammar:
 * Expression of Ideas, Standard English Conventions). The Writing & Grammar
 * lessons follow the LEAN "review / cheat-sheet" style (short sectioned
 * teaching + a couple of worked examples and check-yourself questions); the
 * Reading lessons are pending the same lean rewrite. Grounded in the SAT
 * knowledge graph (knowledge/graph/rw).
 *
 * The lesson BODIES live in ./bodies/ (source.kind 'body', keyed by chapter
 * id) and are dynamic-imported by ChapterReader — keep this module light and
 * NEVER import the bodies corpus from here. `unitId` values match the reading
 * and writing units in index.js UNIT_REGISTRY.
 */

export const rwChapters = [
  // ══════════════════════════════════════════════════════════════════════
  // UNIT: Information and Ideas  (rw-information-ideas)
  // ══════════════════════════════════════════════════════════════════════

  {
    id: 'rw-central-ideas',
    unitId: 'rw-information-ideas',
    title: 'Central Ideas & Details',
    blurb: 'Find the single biggest point a short passage is built to support, and pin down stated facts without over-reading.',
    readMinutes: 16,
    cbSkills: ['central-ideas-and-details'],
    source: { kind: 'body', bodyId: 'rw-central-ideas' },
  },

  {
    id: 'rw-inferences',
    unitId: 'rw-information-ideas',
    title: 'Inferences',
    blurb: 'Complete a passage with the conclusion its facts logically force — no more, no less.',
    readMinutes: 17,
    cbSkills: ['inferences'],
    source: { kind: 'body', bodyId: 'rw-inferences' },
  },

  {
    id: 'rw-command-of-evidence-textual',
    unitId: 'rw-information-ideas',
    title: 'Command of Evidence (Textual)',
    blurb: 'Pick the finding or detail that would most directly strengthen or weaken a specific claim.',
    readMinutes: 18,
    cbSkills: ['command-of-evidence-textual'],
    source: { kind: 'body', bodyId: 'rw-command-of-evidence-textual' },
  },

  {
    id: 'rw-command-of-evidence-quantitative',
    unitId: 'rw-information-ideas',
    title: 'Command of Evidence (Quantitative)',
    blurb: 'Read a table or graph and pick the choice whose numbers actually prove the claim.',
    readMinutes: 16,
    cbSkills: ['command-of-evidence-quantitative'],
    source: { kind: 'body', bodyId: 'rw-command-of-evidence-quantitative' },
  },

  // ══════════════════════════════════════════════════════════════════════
  // UNIT: Craft and Structure  (rw-craft-structure)
  // ══════════════════════════════════════════════════════════════════════

  {
    id: 'rw-words-in-context',
    unitId: 'rw-craft-structure',
    title: 'Words in Context',
    blurb: 'Fill a blank with the single most precise word the surrounding sentence demands.',
    readMinutes: 18,
    cbSkills: ['words-in-context'],
    source: { kind: 'body', bodyId: 'rw-words-in-context' },
  },

  {
    id: 'rw-text-structure-and-purpose',
    unitId: 'rw-craft-structure',
    title: 'Text Structure & Purpose',
    blurb: 'Describe how a passage is built or why a sentence is there — the shape of the argument, not its topic.',
    readMinutes: 17,
    cbSkills: ['text-structure-and-purpose'],
    source: { kind: 'body', bodyId: 'rw-text-structure-and-purpose' },
  },

  {
    id: 'rw-cross-text-connections',
    unitId: 'rw-craft-structure',
    title: 'Cross-Text Connections',
    blurb: 'Read two short paired passages and predict how one author would respond to the other.',
    readMinutes: 17,
    cbSkills: ['cross-text-connections'],
    source: { kind: 'body', bodyId: 'rw-cross-text-connections' },
  },

  // ══════════════════════════════════════════════════════════════════════
  // UNIT: Expression of Ideas  (rw-expression-ideas)
  // ══════════════════════════════════════════════════════════════════════

  {
    id: 'rw-transitions',
    unitId: 'rw-expression-ideas',
    title: 'Transitions',
    blurb: 'Predict the relationship between two sentences, then match the linking word to it.',
    readMinutes: 4,
    cbSkills: ['transitions'],
    source: { kind: 'body', bodyId: 'rw-transitions' },
  },

  {
    id: 'rw-rhetorical-synthesis',
    unitId: 'rw-expression-ideas',
    title: 'Rhetorical Synthesis',
    blurb: 'Read the goal first, treat it as a checklist, and pick the sentence that hits every part.',
    readMinutes: 4,
    cbSkills: ['rhetorical-synthesis'],
    source: { kind: 'body', bodyId: 'rw-rhetorical-synthesis' },
  },

  // ══════════════════════════════════════════════════════════════════════
  // UNIT: Standard English Conventions  (rw-conventions)
  // One focused lesson per grammar skill.
  // ══════════════════════════════════════════════════════════════════════

  {
    id: 'rw-sentence-boundaries',
    unitId: 'rw-conventions',
    title: 'Sentence Boundaries',
    blurb: 'Join or split sentences correctly: count the complete thoughts, then pick period, semicolon, or comma + FANBOYS.',
    readMinutes: 4,
    cbSkills: ['boundaries'],
    source: { kind: 'body', bodyId: 'rw-sentence-boundaries' },
  },

  {
    id: 'rw-commas',
    unitId: 'rw-conventions',
    title: 'Commas & Nonessential Elements',
    blurb: 'The remove-it test: extra info gets commas, essential info gets none — and every comma needs a job.',
    readMinutes: 4,
    cbSkills: ['boundaries'],
    source: { kind: 'body', bodyId: 'rw-commas' },
  },

  {
    id: 'rw-subject-verb-agreement',
    unitId: 'rw-conventions',
    title: 'Subject-Verb Agreement',
    blurb: 'Find the real subject after the sentence hides it, then match the verb to it — never to the nearest noun.',
    readMinutes: 3,
    cbSkills: ['form-structure-and-sense'],
    source: { kind: 'body', bodyId: 'rw-subject-verb-agreement' },
  },

  {
    id: 'rw-pronouns',
    unitId: 'rw-conventions',
    title: 'Pronouns',
    blurb: 'Make every pronoun match its noun in number and point clearly to exactly one thing.',
    readMinutes: 3,
    cbSkills: ['form-structure-and-sense'],
    source: { kind: 'body', bodyId: 'rw-pronouns' },
  },

  {
    id: 'rw-verbs',
    unitId: 'rw-conventions',
    title: 'Verbs: Tense & Form',
    blurb: 'Match the verb tense to the sentence’s own time markers, not to what sounds right.',
    readMinutes: 3,
    cbSkills: ['form-structure-and-sense'],
    source: { kind: 'body', bodyId: 'rw-verbs' },
  },

  {
    id: 'rw-modifiers-parallelism',
    unitId: 'rw-conventions',
    title: 'Modifiers & Parallelism',
    blurb: 'Keep a describing phrase next to what it describes, and match the form of items in a list or comparison.',
    readMinutes: 4,
    cbSkills: ['form-structure-and-sense'],
    source: { kind: 'body', bodyId: 'rw-modifiers-parallelism' },
  },

  {
    id: 'rw-apostrophes',
    unitId: 'rw-conventions',
    title: 'Apostrophes & Possessives',
    blurb: 'Tell plural from possessive, and its from it’s, with two quick tests.',
    readMinutes: 3,
    cbSkills: ['form-structure-and-sense'],
    source: { kind: 'body', bodyId: 'rw-apostrophes' },
  },
];
