/**
 * Extracts the SAT Pattern title from a question's explanation text and
 * returns it in kebab-case. SAT Patterns are encoded as
 * `**SAT Pattern: <Title>**` at the head of every PerformSAT bank and
 * test-bundle explanation (verified universal: 300 bank + 528 test items).
 *
 * @param {string|null|undefined} text — explanation text (or any value)
 * @returns {string|null} kebab-cased pattern (e.g., 'reverse-percent') or null
 *
 * When to use: building the bank's patternIndex at module load, and
 * extracting the SAT Pattern of a wrong test item during diagnosis so the
 * weakness can carry `missedPatterns` into `getTargetedWeaknessSet`'s
 * Tier 1 (exact SAT Pattern) cascade.
 */

// Non-greedy capture of the title between the `**SAT Pattern:` and the
// closing `**`. The title cannot contain `*` itself — bank/test authoring
// guarantees this (no SAT Pattern title in production contains `*`).
const SAT_PATTERN_RE = /\*\*SAT Pattern:\s*([^*]+?)\s*\*\*/;

export const extractSatPattern = (text) => {
  if (!text || typeof text !== 'string') return null;
  const m = SAT_PATTERN_RE.exec(text);
  if (!m) return null;
  return m[1]
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};
