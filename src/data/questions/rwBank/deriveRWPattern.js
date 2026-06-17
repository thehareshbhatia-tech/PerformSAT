/**
 * deriveRWPattern — pure, deterministic R&W sub-pattern tagger.
 *
 * The R&W analog of the math bank's SAT-Pattern model, but only for the four
 * skills that carry a 100%-present discriminating signal:
 *   - boundaries              → punctuation in the CORRECT choice
 *   - transitions             → the leading transition word of the CORRECT choice
 *   - text-structure-and-purpose → the question stem
 *   - command-of-evidence-textual → the question stem (tag-only; see note)
 *
 * Every shipped tag derives from `choices`/`correctAnswer`/`question`, all
 * present on 100% of items, so it is immune to the sparse `_meta` fields.
 *
 * This SAME function runs at both ends of the closed loop so they always agree:
 *   1. rwBank flatten — to build the patternIndex the drill cascade selects from.
 *   2. diagnosticEngine aggregation — to emit weakness.missedPatterns for wrong
 *      R&W items, which feeds the Tier-1 cascade.
 *
 * Skills WITHOUT a deterministic >=8 signal (words-in-context, inferences,
 * central-ideas, rhetorical-synthesis, cross-text-connections,
 * command-of-evidence-quantitative, and form-structure-and-sense until its
 * _meta.rule is backfilled) always return null. A null tag means the item stays
 * Tier-3 skill-level — byte-identical to the pre-pattern behavior.
 *
 * @param {object} item - an R&W item (bundle shape or flattened bank shape)
 * @returns {string|null} kebab-case pattern slug, or null for skill-level
 */

import { getAuthoritativeGrammarType } from './rwGrammarType';

// Transition lexicons by bucket. Flattened + sorted longest-phrase-first so
// "on the other hand" wins over "on" and "therefore" wins over "then".
// 'moreover'/'furthermore'/'in addition' are deliberately absent — the
// 'addition' bucket is below the Tier-1 threshold, so those items stay Tier-3.
const TRANSITION_BUCKETS = {
  'transitions-contrast': [
    'on the other hand', 'in contrast', 'by contrast', 'even so', 'despite this',
    'however', 'nevertheless', 'nonetheless', 'conversely', 'instead', 'rather',
    'regardless', 'still', 'yet',
  ],
  'transitions-example-emphasis': [
    'for example', 'for instance', 'in particular', 'in other words', 'in fact',
    'that is', 'specifically', 'indeed', 'notably', 'namely',
  ],
  'transitions-cause-effect': [
    'as a result', 'for this reason', 'because of this', 'therefore', 'thus',
    'consequently', 'hence', 'accordingly', 'so',
  ],
  'transitions-sequence-time': [
    'more recently', 'since then', 'in time', 'before long', 'meanwhile',
    'subsequently', 'afterward', 'eventually', 'ultimately', 'throughout',
    'finally', 'later', 'then', 'today', 'first', 'second', 'next',
  ],
};

const TRANSITION_LEXICON = Object.entries(TRANSITION_BUCKETS)
  .flatMap(([slug, phrases]) => phrases.map(phrase => [phrase, slug]))
  .sort((a, b) => b[0].length - a[0].length);

/** Text of the choice flagged as correct, or '' if not resolvable. */
function correctChoiceText(item) {
  const choices = Array.isArray(item.choices) ? item.choices : [];
  const correct = choices.find(c => c && c.id === item.correctAnswer);
  return correct && typeof correct.text === 'string' ? correct.text : '';
}

function boundariesPattern(item) {
  const text = correctChoiceText(item);
  if (!text) return null;
  if (/[—–]|--/.test(text)) return 'boundaries-dash';   // em-dash, en-dash, or '--' (highest priority)
  if (text.includes(';')) return 'boundaries-semicolon';
  if (text.includes(':')) return 'boundaries-colon';
  if (text.includes(',')) return 'boundaries-comma';
  return null;                                            // no-mark items stay Tier-3
}

function transitionsPattern(item) {
  const text = correctChoiceText(item).toLowerCase().replace(/^\s+/, '');
  if (!text) return null;
  for (const [phrase, slug] of TRANSITION_LEXICON) {
    if (text.startsWith(phrase)) {
      const after = text.charAt(phrase.length);
      if (after === '' || !/[a-z]/.test(after)) return slug;   // word boundary
    }
  }
  return null;
}

function tspPattern(item) {
  const stem = (item.question || '').toLowerCase();
  if (stem.includes('main purpose')) return 'tsp-main-purpose';
  if (stem.includes('overall structure')) return 'tsp-overall-structure';
  if (stem.includes('function of the underlined')) return 'tsp-function-of-underlined';
  return null;
}

function coeTextualPattern(item) {
  // Tag-only: clears the threshold but its pool == the skill pool, so it adds
  // no routing precision over Tier-3. Tagged for diagnostic-signal completeness.
  const stem = (item.question || '').toLowerCase();
  if (stem.includes('illustrates the claim')) return 'coe-textual-illustrate-claim';
  return null;
}

// form-structure-and-sense grammar sub-patterns — FALLBACK heuristic only.
//
// As of 2026-06-17 every live FSS item is classified authoritatively in
// `rwGrammarType.js` (by what varies across the answer choices), and fssPattern
// consults that map first. This prose-scoped heuristic now serves only FSS items
// that are NOT yet in the authoritative map (e.g. newly authored ones) — and a
// regression test fails CI if any live FSS item ships untagged, so reliance on
// this fallback is bounded. It reads the FIRST paragraph of the explanation,
// before the distractor discussion; precedence runs most-distinctive-structural
// first and the generic verb-tense LAST. NOTE: this ordering is imperfect (it is
// exactly why the authoritative map exists — "opening phrase" wording could pull
// a verb-tense item into modifier-placement); the map supersedes it for all
// current items. Of the 7 buckets, only the 4 that clear the Tier-1 threshold
// are labeled (RW_PATTERN_LABELS); the rest route Tier-3 and show no chip.
const FSS_RULES = [
  ['fss-parallelism', /parallel|coordinated (?:series|list)|(?:three|two|four)-item (?:list|series)|gerund-gerund/],
  ['fss-modifier-placement', /dangling|introductory (?:participial|modifier)|participial (?:introductory|opener|phrase|modifier)|modifier (?:attaches|must|should)|fronted modifier|opening (?:phrase|participial)/],
  ['fss-possessive', /possessive|apostrophe/],
  ['fss-comparison', /\bfewer\b|comparative|superlative|count nouns?|non-?count/],
  ['fss-subject-verb-agreement', /subject[- ]verb agreement|agree (?:in number|with (?:its|the) (?:head|singular|plural))|verb (?:must|to) agree|singular verb|plural verb/],
  ['fss-pronoun', /\bpronoun|\bantecedent|\bwhom\b|relative pronoun|objective form|pronoun case/],
  ['fss-verb-tense', /simple past|present perfect|past perfect|simple present|verb tense|verb form|past tense|present tense|\btense\b|\baspect\b/],
];

function fssPattern(item) {
  // Authoritative per-item tag wins. It is decided by what varies across the
  // answer choices (the reliable signal) rather than by explanation prose, so
  // it never mis-files a verb-tense / subject-verb item into "Modifier
  // placement." Present for every live FSS item; `undefined` means untagged
  // (future items) → fall through to the heuristic below. A tagged `null` is
  // authoritative ("no surfaced bucket") and short-circuits the heuristic.
  const authoritative = getAuthoritativeGrammarType(item);
  if (authoritative !== undefined) return authoritative;

  const firstPara = (item.explanation || '').split(/Why the wrong answers/i)[0].toLowerCase();
  if (!firstPara) return null;
  for (const [slug, re] of FSS_RULES) {
    if (re.test(firstPara)) return slug;
  }
  return null;
}

export function deriveRWPattern(item) {
  if (!item) return null;
  const skill = item.skill || (Array.isArray(item.skills) ? item.skills[0] : null);
  switch (skill) {
    case 'boundaries': return boundariesPattern(item);
    case 'transitions': return transitionsPattern(item);
    case 'text-structure-and-purpose': return tspPattern(item);
    case 'command-of-evidence-textual': return coeTextualPattern(item);
    case 'form-structure-and-sense': return fssPattern(item);
    default: return null;
  }
}

/**
 * Human labels for the routing-useful R&W patterns, used by the
 * "Practicing: <pattern>" drill chip. coe-textual-illustrate-claim is
 * deliberately omitted — it is tag-only (its drill pool equals the skill pool),
 * so surfacing a chip for it would mislead.
 */
export const RW_PATTERN_LABELS = {
  'boundaries-semicolon': 'Semicolons & independent clauses',
  'boundaries-comma': 'Comma boundaries',
  'boundaries-dash': 'Dashes',
  'boundaries-colon': 'Colons',
  'transitions-contrast': 'Contrast transitions',
  'transitions-example-emphasis': 'Example & emphasis transitions',
  'transitions-cause-effect': 'Cause & effect transitions',
  'transitions-sequence-time': 'Sequence & time transitions',
  'tsp-main-purpose': 'Main purpose',
  'tsp-overall-structure': 'Overall text structure',
  'tsp-function-of-underlined': 'Function of a sentence',
  // form-structure-and-sense grammar sub-patterns (only the >=8 buckets are
  // labeled; pronoun/possessive/comparison stay sub-threshold + chip-less).
  'fss-subject-verb-agreement': 'Subject-verb agreement',
  'fss-verb-tense': 'Verb tense & form',
  'fss-modifier-placement': 'Modifier placement',
  'fss-parallelism': 'Parallel structure',
};
