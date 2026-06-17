/**
 * Authoritative grammar-type tags for the Form/Structure/Sense (FSS) R&W items,
 * keyed by RAW question id.
 *
 * ── Why this file exists ─────────────────────────────────────────────────────
 * The FSS "question type" shown in the practice bank — Subject-verb agreement,
 * Verb tense & form, Modifier placement, Parallel structure, etc. — used to be
 * *inferred* by regex over each item's explanation prose (see the fallback in
 * `deriveRWPattern.js`). That heuristic mis-filed items whenever the explanation
 * mentioned an incidental grammar word. For example, a past-perfect VERB-TENSE
 * item landed under "Modifier placement" simply because its explanation opened
 * with the words "the opening phrase…", and several subject-verb-agreement items
 * scattered into the verb-tense bucket or were left untyped entirely.
 *
 * This map replaces that guess with a per-item classification decided by reading
 * WHAT VARIES ACROSS THE FOUR ANSWER CHOICES — the reliable signal for which
 * grammar rule an item tests — so the bank's grammar types contain the right
 * questions. `deriveRWPattern()` consults this map FIRST; the explanation
 * heuristic remains only as a fallback for any future FSS item not yet tagged
 * here (and `rwGrammarType.test.js` fails CI if such an item ever ships untagged).
 *
 * ── Keying ───────────────────────────────────────────────────────────────────
 * Keyed by the raw, per-bundle question id (e.g. 420), which is globally unique
 * across the 12 R&W test bundles (verified in the rwBank tests). The raw id is
 * the only identifier available on BOTH item shapes `deriveRWPattern` sees: the
 * flattened bank item (`sourceQuestionId`) and the raw bundle item (`id`).
 *
 * Value is the canonical `fss-*` slug, or `null` for an item whose tested rule
 * has no surfaced sub-type bucket (it routes Tier-3, exactly like an item the
 * heuristic would have left untagged). Keys are present for ALL live FSS items,
 * including the `null` ones, so "authoritatively no bucket" is distinguishable
 * from "not yet classified."
 *
 * ── How to regenerate ────────────────────────────────────────────────────────
 * Re-run the `rw-grammar-classify` workflow (a 3-voter diverse-lens panel that
 * classifies by how the answer choices differ, with adjudication on splits) over
 * the FSS items, then replace the map below. Last generated 2026-06-17.
 */
export const RW_GRAMMAR_TYPE_BY_ID = {
  118: 'fss-verb-tense',
  120: 'fss-subject-verb-agreement',
  122: 'fss-modifier-placement',
  145: 'fss-subject-verb-agreement',
  147: 'fss-parallelism',
  149: 'fss-subject-verb-agreement',
  218: 'fss-subject-verb-agreement',
  220: 'fss-verb-tense',
  222: 'fss-subject-verb-agreement',
  245: 'fss-parallelism',
  247: 'fss-modifier-placement',
  249: 'fss-modifier-placement',
  318: 'fss-subject-verb-agreement',
  320: 'fss-subject-verb-agreement',
  322: 'fss-subject-verb-agreement',
  345: 'fss-verb-tense',
  347: 'fss-subject-verb-agreement',
  349: 'fss-modifier-placement',
  418: 'fss-subject-verb-agreement',
  420: 'fss-verb-tense',
  422: 'fss-subject-verb-agreement',
  445: 'fss-subject-verb-agreement',
  447: 'fss-verb-tense',
  449: null,                       // 'other' — no surfaced sub-type bucket (routes Tier-3)
  518: 'fss-verb-tense',
  520: 'fss-verb-tense',
  522: 'fss-subject-verb-agreement',
  545: 'fss-verb-tense',
  547: 'fss-subject-verb-agreement',
  549: 'fss-modifier-placement',
  618: 'fss-subject-verb-agreement',
  620: 'fss-verb-tense',
  622: 'fss-possessive',
  645: 'fss-subject-verb-agreement',
  647: 'fss-parallelism',
  649: 'fss-modifier-placement',
  718: 'fss-subject-verb-agreement',
  720: 'fss-verb-tense',
  722: 'fss-possessive',
  745: 'fss-parallelism',
  747: 'fss-pronoun',
  749: 'fss-modifier-placement',
  818: 'fss-subject-verb-agreement',
  820: 'fss-parallelism',
  822: 'fss-pronoun',
  845: null,                       // 'other' — no surfaced sub-type bucket (routes Tier-3)
  847: 'fss-modifier-placement',
  849: 'fss-verb-tense',
  918: 'fss-subject-verb-agreement',
  920: 'fss-verb-tense',
  922: 'fss-subject-verb-agreement',
  945: 'fss-subject-verb-agreement',
  947: 'fss-verb-tense',
  949: 'fss-subject-verb-agreement',
  1018: 'fss-subject-verb-agreement',
  1020: 'fss-verb-tense',
  1022: 'fss-modifier-placement',
  1045: 'fss-possessive',
  1047: 'fss-parallelism',
  1049: 'fss-verb-tense',
  1118: 'fss-subject-verb-agreement',
  1120: 'fss-possessive',
  1122: 'fss-verb-tense',
  1145: 'fss-parallelism',
  1147: 'fss-possessive',
  1149: 'fss-modifier-placement',
  1218: 'fss-subject-verb-agreement',
  1220: 'fss-verb-tense',
  1222: 'fss-subject-verb-agreement',
  1245: 'fss-parallelism',
  1247: 'fss-pronoun',
  1249: 'fss-modifier-placement',
};

/**
 * Returns the authoritative FSS grammar slug for an item (or null), or
 * `undefined` if the item is not in the authoritative map (caller should fall
 * back to the heuristic). Accepts either item shape: flattened bank items carry
 * `sourceQuestionId`; raw bundle items carry a numeric `id`.
 *
 * @param {object} item - an R&W item (bundle shape or flattened bank shape)
 * @returns {string|null|undefined} canonical fss-* slug, authoritative null, or
 *   undefined when the item is untagged
 */
export function getAuthoritativeGrammarType(item) {
  if (!item) return undefined;
  const rawId = item.sourceQuestionId != null ? item.sourceQuestionId : item.id;
  if (rawId == null) return undefined;
  return Object.prototype.hasOwnProperty.call(RW_GRAMMAR_TYPE_BY_ID, rawId)
    ? RW_GRAMMAR_TYPE_BY_ID[rawId]
    : undefined;
}
