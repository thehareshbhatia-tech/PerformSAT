/**
 * Extracts the SAT Pattern title from a question's explanation text and
 * returns it in kebab-case. SAT Patterns are encoded as
 * `**SAT Pattern: <Title>**` at the head of every PerformSAT bank and
 * test-bundle explanation (verified universal: 300+ bank + 528 test items).
 *
 * @param {string|null|undefined} text — explanation text (or any value)
 * @returns {string|null} canonical kebab slug (e.g., 'reverse-percent') or null
 *
 * When to use: building the bank's patternIndex at module load, and
 * extracting the SAT Pattern of a wrong test item during diagnosis so the
 * weakness can carry `missedPatterns` into `getTargetedWeaknessSet`'s
 * Tier 1 (exact SAT Pattern) cascade.
 *
 * Alias normalization: test-bundle authors used variant titles for some
 * shared concepts (e.g., "Volume of a Cylinder" vs the canonical "Cylinder
 * Volume", or three variants of "Pythagorean Theorem (5-12-13 ...)"
 * for one Pythagorean triple). The PATTERN_ALIASES map below normalizes
 * these to the canonical slug so the existing bank pool serves all variants.
 * This is the architectural fix for routing-redundancy authoring; without
 * it we'd author 8 duplicate bank items per variant, which is 2000+ items
 * of redundant work for the long tail.
 */

// Non-greedy capture of the title between the `**SAT Pattern:` and the
// closing `**`. The title cannot contain `*` itself — bank/test authoring
// guarantees this (no SAT Pattern title in production contains `*`).
const SAT_PATTERN_RE = /\*\*SAT Pattern:\s*([^*]+?)\s*\*\*/;

/**
 * Maps non-canonical kebab slugs (from test bundles) to canonical slugs
 * (covered in the bank). Keys are post-kebab slugs; values are the canonical
 * slug a covered bank pool already lives under.
 *
 * Add an entry here when:
 *   - A test bundle uses a variant title for a concept the bank already covers
 *   - Two test items with synonymous titles should drill the same pool
 *
 * Do NOT add an entry when the patterns are conceptually different
 * (e.g., "Joint Probability" is distinct from "Conditional Probability").
 */
const PATTERN_ALIASES = Object.freeze({
  // Volume — cylinder
  'volume-of-a-cylinder': 'cylinder-volume',

  // Volume — rectangular prism (two near-typo variants in test bundles)
  'volume-of-rectangular-prism': 'volume-of-a-rectangular-prism',
  'volume-of-a-rectangular-box': 'volume-of-a-rectangular-prism',

  // Pythagorean — 5-12-13 variants (3 ways the test bundles named one concept)
  'pythagorean-theorem-5-12-13': 'right-triangle-pythagorean',
  'pythagorean-theorem-5-12-13-triple': 'right-triangle-pythagorean',
  'pythagorean-theorem-5-12-13-family': 'right-triangle-pythagorean',
  'pythagorean-theorem-6-8-10-2x-3-4-5': 'right-triangle-pythagorean',
  'pythagorean-theorem-multiple-of-3-4-5': 'right-triangle-pythagorean',
  'pythagorean-theorem-on-a-rectangle': 'right-triangle-pythagorean',

  // Trig — extended forms of the canonical right-triangle-trig-ratios
  'soh-cah-toa-in-a-5-12-13-triangle': 'right-triangle-trig-ratios',
  'soh-cah-toa-tangent-in-a-9-40-41-triangle': 'right-triangle-trig-ratios',
  'right-triangle-trigonometry-with-perimeter': 'right-triangle-trig-ratios',

  // Linear systems — title variants
  'linear-system-by-elimination': 'system-of-equations-elimination',
  'system-by-elimination-sum-difference': 'system-of-equations-elimination',
  'system-by-substitution': 'system-of-equations-substitution',

  // Systems from word problems — title variants
  'system-of-equations-from-word-problem': 'two-equation-system-from-a-word-problem',
  'two-variable-word-problem': 'two-equation-system-from-a-word-problem',
  'word-problem-to-linear-equation': 'two-equation-system-from-a-word-problem',
  'substitution-into-a-two-variable-equation': 'two-equation-system-from-a-word-problem',

  // Proportions — title variants
  'solve-a-proportion': 'proportion-ratio',
  'solving-a-proportion': 'proportion-ratio',
  'solving-a-simple-proportion': 'proportion-ratio',
  'unit-rate-direct-proportion': 'proportion-ratio',

  // Two-step linear equations — variants
  'two-step-equation-with-fraction': 'two-step-linear-equation',
  'two-step-linear-equation-with-fraction-coefficient': 'two-step-linear-equation',

  // Function evaluation — variants
  'solving-with-function-notation': 'function-evaluation',
  'solving-via-function-notation': 'function-evaluation',
  'function-evaluation-in-context': 'function-evaluation',
  'solve-f-x-c': 'function-evaluation',
  'solve-f-a-c': 'function-evaluation',
  'solving-for-input-from-output': 'function-evaluation',
  'solving-for-the-input-given-the-output': 'function-evaluation',

  // Two-way table — variants
  // ONLY conditional-style → conditional canonical. Joint probability is a
  // DIFFERENT concept (P(A AND B) vs P(A | B)) — DO NOT alias.
  'two-way-table-conditional-percentage': 'two-way-table-conditional-probability',

  // Tangent line / discriminant — only the line-tangent-to-parabola variants.
  // "Building Triangle from Tangent" is a circle-tangent geometry problem,
  // NOT the discriminant pattern — left distinct.
  'tangent-line-via-discriminant-0': 'tangent-line-and-discriminant',
  'tangent-line-to-circle-discriminant-0': 'tangent-line-and-discriminant',

  // Discriminant variants
  'discriminant-equals-zero': 'discriminant-analysis',

  // Vieta's / quadratic factoring — variants
  // Vieta's IS about polynomial roots which is what factoring exposes,
  // so the bank pool serves both pedagogically.
  'sum-product-of-roots-vieta-s': 'quadratic-via-factoring',
  'vieta-s-with-product-sum-relation': 'quadratic-via-factoring',
  'quadratic-vieta-s-sum-product': 'quadratic-via-factoring',
  'zero-product-property': 'quadratic-via-factoring',

  // Reading slope-intercept form variants
  'y-intercept-from-slope-intercept-form': 'reading-slope-intercept-form',

  // Scatterplot / best-fit-line variants
  'line-of-best-fit-prediction': 'scatterplot-line-of-best-fit',

  // Word-problem-into-equation variants
  'linear-cost-setup': 'two-equation-system-from-a-word-problem',

  // Probability variants — complement is a simple basic-probability flavor
  'complement-probability': 'basic-probability',

  // Algebraic expansion / FOIL → matching coefficients pool
  'expanding-a-product-foil': 'matching-coefficients',
  'algebraic-identity-expansion': 'matching-coefficients',
  'foil-distribution': 'matching-coefficients',

  // Quadratic via factoring — more variants
  'quadratic-by-factoring': 'quadratic-via-factoring',
  'polynomial-factoring-with-given-factor': 'quadratic-via-factoring',

  // Proportions / ratios — more variants
  'proportions': 'proportion-ratio',
  'proportion-with-linear-expressions': 'proportion-ratio',
  'rate-word-problem-proportions': 'proportion-ratio',
  'ratios-with-a-total': 'proportion-ratio',

  // Trig — short form
  'soh-cah-toa': 'right-triangle-trig-ratios',

  // Reading slope-intercept form — more variants
  'slope-from-y-mx-b': 'reading-slope-intercept-form',
  'slope-intercept-form': 'reading-slope-intercept-form',

  // Parallel / line-construction variants
  'parallel-line-equation': 'parallel-line-through-a-point',
  'equation-of-a-line-through-two-points': 'line-from-two-points',

  // Two-step linear — more variants
  'linear-equation-with-a-fraction': 'two-step-linear-equation',
  'linear-word-problem-with-two-step-solve': 'two-step-linear-equation',

  // Combining like terms — variants
  'distribute-and-combine': 'combining-like-terms',

  // Mean — variants
  'mean-from-total': 'mean-from-list',
  'mean-of-a-small-data-set': 'mean-from-list',
  'combined-mean-with-parameter': 'finding-a-missing-value-given-the-mean',

  // Percent — more variants
  'percent-of-a-value': 'percent-of-a-whole',
  'percent-complement': 'basic-probability',

  // Triangle angle sum variant (isosceles is a special case)
  'isosceles-triangle-angle-sum': 'triangle-angle-sum',

  // Rectangle area variant (word order)
  'area-of-a-rectangle': 'rectangle-area',

  // Exponential function variants — these share the exp-evaluation concept
  'exponential-function-evaluation': 'function-evaluation',
  'exponential-growth-rate': 'exponential-growth-decay',
  'exponential-growth-with-period': 'exponential-growth-decay',
  'function-evaluation-with-quadratic': 'function-evaluation',

  // Percent variants — share with percent-decrease where appropriate
  'percent-change-decrease': 'percent-decrease',
});

export const extractSatPattern = (text) => {
  if (!text || typeof text !== 'string') return null;
  const m = SAT_PATTERN_RE.exec(text);
  if (!m) return null;
  const slug = m[1]
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return PATTERN_ALIASES[slug] || slug;
};

/**
 * Exposed for testing — the alias map itself.
 * Tests can verify a given non-canonical slug maps to its canonical form.
 */
export const _PATTERN_ALIASES = PATTERN_ALIASES;
