/**
 * Pure-constant R&W taxonomy module (Stage 2a of the bundle-split plan).
 *
 * These constants used to live in `./index.js`, which flattens all 12 R&W
 * practice-test bundles (~2.9MB) at import time — so consumers that only
 * needed the taxonomy (diagnosticEngine, predictionEngine, drillChip)
 * dragged the entire R&W corpus into the main chunk. This module has ZERO
 * imports; keep it that way — anything added here must be a pure constant
 * or a pure function over these constants.
 *
 * `./index.js` imports AND re-exports every name here, so corpus-coupled
 * consumers keep importing from the rwBank index unchanged.
 */

export const RW_CANONICAL_SKILLS = [
  'central-ideas-and-details',
  'inferences',
  'command-of-evidence-textual',
  'command-of-evidence-quantitative',
  'words-in-context',
  'text-structure-and-purpose',
  'cross-text-connections',
  'boundaries',
  'form-structure-and-sense',
  'transitions',
  'rhetorical-synthesis',
];

export const RW_DOMAINS = [
  'information-and-ideas',
  'craft-and-structure',
  'standard-english-conventions',
  'expression-of-ideas',
];

/**
 * Alias map for R&W skill IDs. Mirrors `SKILL_ALIAS_MAP` in the math bank.
 * Variants surface from diagnostic engine, AI tutor outputs, and human-typed
 * weakness labels — they need to resolve to the canonical IDs above.
 */
export const RW_SKILL_ALIAS_MAP = {
  // Information and Ideas
  'central-ideas-and-details':       ['central-ideas-and-details'],
  'central ideas and details':       ['central-ideas-and-details'],
  'central-ideas':                   ['central-ideas-and-details'],
  'main-idea':                       ['central-ideas-and-details'],
  'main idea':                       ['central-ideas-and-details'],
  'Central Ideas and Details':       ['central-ideas-and-details'],

  'inferences':                      ['inferences'],
  'inference':                       ['inferences'],
  'Inferences':                      ['inferences'],

  'command-of-evidence-textual':     ['command-of-evidence-textual'],
  'command-of-evidence':             ['command-of-evidence-textual', 'command-of-evidence-quantitative'],
  'textual-evidence':                ['command-of-evidence-textual'],
  'evidence-textual':                ['command-of-evidence-textual'],
  'Command of Evidence (Textual)':   ['command-of-evidence-textual'],

  'command-of-evidence-quantitative': ['command-of-evidence-quantitative'],
  'quantitative-evidence':            ['command-of-evidence-quantitative'],
  'evidence-quantitative':            ['command-of-evidence-quantitative'],
  'Command of Evidence (Quantitative)': ['command-of-evidence-quantitative'],
  'data-evidence':                    ['command-of-evidence-quantitative'],
  'table-evidence':                   ['command-of-evidence-quantitative'],

  // Craft and Structure
  'words-in-context':                ['words-in-context'],
  'words in context':                ['words-in-context'],
  'vocabulary':                      ['words-in-context'],
  'vocab':                           ['words-in-context'],
  'Words in Context':                ['words-in-context'],
  'word-meaning':                    ['words-in-context'],

  'text-structure-and-purpose':      ['text-structure-and-purpose'],
  'text-structure':                  ['text-structure-and-purpose'],
  'purpose':                         ['text-structure-and-purpose'],
  'Text Structure and Purpose':      ['text-structure-and-purpose'],
  'function-of-sentence':            ['text-structure-and-purpose'],

  'cross-text-connections':          ['cross-text-connections'],
  'cross-text':                      ['cross-text-connections'],
  'paired-passages':                 ['cross-text-connections'],
  'Cross-Text Connections':          ['cross-text-connections'],
  'Cross-text Connections':          ['cross-text-connections'],

  // Standard English Conventions
  'boundaries':                      ['boundaries'],
  'punctuation':                     ['boundaries'],
  'sentence-boundaries':             ['boundaries'],
  'commas':                          ['boundaries'],
  'semicolons':                      ['boundaries'],
  'Boundaries':                      ['boundaries'],

  'form-structure-and-sense':        ['form-structure-and-sense'],
  'form-structure':                  ['form-structure-and-sense'],
  'grammar':                         ['form-structure-and-sense'],
  'subject-verb-agreement':          ['form-structure-and-sense'],
  'pronoun-agreement':               ['form-structure-and-sense'],
  'Form, Structure, and Sense':      ['form-structure-and-sense'],

  // Expression of Ideas
  'transitions':                     ['transitions'],
  'transition-words':                ['transitions'],
  'Transitions':                     ['transitions'],

  'rhetorical-synthesis':            ['rhetorical-synthesis'],
  'rhetorical synthesis':            ['rhetorical-synthesis'],
  'notes':                           ['rhetorical-synthesis'],
  'student-notes':                   ['rhetorical-synthesis'],
  'synthesis':                       ['rhetorical-synthesis'],
  'Rhetorical Synthesis':            ['rhetorical-synthesis'],
};

/**
 * Canonical section deriver for a skill id. Keyed off the single source of
 * truth (RW_CANONICAL_SKILLS) so prediction, diagnostic, and tutor code all
 * agree on what counts as R&W — no drift between separately-maintained lists.
 * Unknown / math skill ids return 'math'.
 *
 * @param {string} skillId - canonical skill id
 * @returns {('rw'|'math')}
 */
export const getSkillSection = (skillId) => (RW_CANONICAL_SKILLS.includes(skillId) ? 'rw' : 'math');

// Tier-1 firing threshold — mirrors the math bank's TIER1_PATTERN (=8). Defined
// locally to avoid coupling the R&W bank to the math bank module.
export const RW_TIER1_PATTERN_THRESHOLD = 8;
