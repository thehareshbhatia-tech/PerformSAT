/**
 * Formats a kebab-cased SAT Pattern slug into a human-readable Title Case
 * label for the drill UI. Drives the "Practicing: <Pattern>" chip
 * surfaced in AssignedPracticeShell when a weakness carries a missed
 * pattern (Phase 2 routing precision made visible to students).
 *
 * @param {string|null|undefined} slug — kebab pattern (e.g., 'reverse-percent')
 * @returns {string|null} Title-cased label (e.g., 'Reverse Percent') or null
 *
 * Examples:
 *   formatPatternLabel('reverse-percent')                    → 'Reverse Percent'
 *   formatPatternLabel('right-triangle-trig-ratios')         → 'Right Triangle Trig Ratios'
 *   formatPatternLabel('soh-cah-toa-in-a-3-4-5-triangle')   → 'SOH-CAH-TOA in a 3-4-5 Triangle'
 *   formatPatternLabel(null)                                 → null
 *   formatPatternLabel('')                                   → null
 *
 * Special cases:
 *   - Acronyms (SOH, CAH, TOA, FOIL) preserved fully uppercase
 *   - "in a", "of", "with", "from", "to", "by" remain lowercase (small words)
 *   - Numbers stay as numbers (no special handling needed)
 */

const ACRONYMS = new Set([
  'soh',
  'cah',
  'toa',
  'foil',
  'lcm',
  'gcf',
  'gcd',
  'sat',
]);

// Small words that stay lowercase except when they're the first word.
// Aligned with conventional English title-case rules.
const SMALL_WORDS = new Set([
  'a',
  'an',
  'and',
  'at',
  'by',
  'for',
  'from',
  'in',
  'of',
  'on',
  'or',
  'the',
  'to',
  'via',
  'with',
]);

export const formatPatternLabel = (slug) => {
  if (!slug || typeof slug !== 'string') return null;
  const trimmed = slug.trim();
  if (!trimmed) return null;

  const tokens = trimmed.split('-');
  return tokens
    .map((tok, i) => {
      if (!tok) return tok;
      const lower = tok.toLowerCase();
      // Acronyms always uppercase
      if (ACRONYMS.has(lower)) return tok.toUpperCase();
      // Pure digits or digit-bearing tokens stay as-is
      if (/^\d+$/.test(tok)) return tok;
      // Small words stay lowercase unless they're the FIRST token
      if (i > 0 && SMALL_WORDS.has(lower)) return lower;
      // Capitalize first letter
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
};

/**
 * Selects the most-relevant pattern to surface from a weakness's
 * `missedPatterns` array. Returns the first non-empty pattern, or null.
 * The first pattern is canonical (insertion order from diagnosticEngine =
 * the order patterns were encountered as wrong items).
 *
 * @param {object|null|undefined} weakness — weakness object with `missedPatterns`
 * @returns {string|null} first pattern slug or null
 */
export const pickPrimaryMissedPattern = (weakness) => {
  if (!weakness || typeof weakness !== 'object') return null;
  const patterns = Array.isArray(weakness.missedPatterns) ? weakness.missedPatterns : [];
  for (const p of patterns) {
    if (typeof p === 'string' && p.trim()) return p.trim();
  }
  return null;
};
