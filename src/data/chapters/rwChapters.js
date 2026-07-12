/**
 * Learn tab — Reading & Writing chapters (metadata only).
 *
 * One chapter per College Board R&W skill (11 total), grouped into the four
 * official R&W units. Every chapter is a full teach-from-zero textbook
 * chapter following the locked template (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md
 * §4): roadmap → foundations → numbered method/rulebook with right/wrong
 * pairs → decision flow, traps, worked examples, checkpoints, and a one-page
 * summary. Grounded in the SAT knowledge graph (knowledge/graph/rw).
 *
 * The heavy chapter BODIES live in ./bodies/ (source.kind 'body',
 * keyed by chapter id) and are dynamic-imported by ChapterReader — keep this
 * module light and NEVER import the bodies corpus from here.
 * `unitId` values match index.js UNIT_REGISTRY (section 'rw').
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
    blurb: 'Choose the linking word that matches the real logical relationship between two sentences.',
    readMinutes: 18,
    cbSkills: ['transitions'],
    source: { kind: 'body', bodyId: 'rw-transitions' },
  },

  {
    id: 'rw-rhetorical-synthesis',
    unitId: 'rw-expression-ideas',
    title: 'Rhetorical Synthesis',
    blurb: 'Use a set of bulleted notes to accomplish one specific goal stated in the question.',
    readMinutes: 15,
    cbSkills: ['rhetorical-synthesis'],
    source: { kind: 'body', bodyId: 'rw-rhetorical-synthesis' },
  },

  // ══════════════════════════════════════════════════════════════════════
  // UNIT: Standard English Conventions  (rw-conventions)
  // ══════════════════════════════════════════════════════════════════════

  {
    id: 'rw-boundaries',
    unitId: 'rw-conventions',
    title: 'Boundaries (Punctuation)',
    blurb: 'End, join, and separate the parts of a sentence with rules you can prove: count the clauses, look up the mark, cancel the twins.',
    readMinutes: 16,
    cbSkills: ['boundaries'],
    source: { kind: 'body', bodyId: 'rw-boundaries' },
  },

  {
    id: 'rw-form-structure-and-sense',
    unitId: 'rw-conventions',
    title: 'Form, Structure & Sense',
    blurb: 'Fix verbs, subject-verb agreement, pronouns, modifiers, and parallel form so the sentence reads correctly.',
    readMinutes: 20,
    cbSkills: ['form-structure-and-sense'],
    source: { kind: 'body', bodyId: 'rw-form-structure-and-sense' },
  },
];
