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
 * Granularity principle (2026-05-12, see docs/SAT_PATTERN_GRANULARITY_PROPOSAL.md):
 *   A pattern is the correct granularity when a student who has mastered one
 *   cannot, on test day, apply that mastery to a question of a different
 *   pattern WITHOUT applying a DIFFERENT METHOD.
 *
 *   Recognizing a 5-12-13 triple is a different skill from setting up
 *   Pythagorean on generic sides. Computing f(3) is a different skill from
 *   solving f(a) = c. Vieta's (sum=-b/a, product=c/a) is a different method
 *   from factoring. Line tangent to circle is different geometry from line
 *   tangent to parabola.
 *
 * Add an entry here when:
 *   - A test bundle uses a variant title for a concept the bank already covers
 *   - The two slugs describe a question that requires the SAME method
 *
 * Do NOT add an entry when:
 *   - The patterns require different methods on test day
 *   - One is a textbook-unit-level label and the other is a specific skill
 *   - The "concepts overlap" but a student who masters one wouldn't
 *     transfer to the other without separate practice
 */
const PATTERN_ALIASES = Object.freeze({
  // Volume — cylinder
  'volume-of-a-cylinder': 'cylinder-volume',

  // Volume — rectangular prism (two near-typo variants in test bundles)
  'volume-of-rectangular-prism': 'volume-of-a-rectangular-prism',
  'volume-of-a-rectangular-box': 'volume-of-a-rectangular-prism',

  // Pythagorean — generic theorem (kept aliased, same method as canonical)
  'pythagorean-theorem-on-a-rectangle': 'right-triangle-pythagorean',

  // Pythagorean triple recognition — DISTINCT METHOD from generic Pythagorean.
  // Triple recognition is a memorization shortcut (5-12-13, 3-4-5, 8-15-17,
  // 7-24-25, 9-40-41 families). A student trained only on a^2 + b^2 = c^2
  // won't see the shortcut on test day. Now its own pattern.
  'pythagorean-theorem-5-12-13': 'pythagorean-triple-recognition',
  'pythagorean-theorem-5-12-13-triple': 'pythagorean-triple-recognition',
  'pythagorean-theorem-5-12-13-family': 'pythagorean-triple-recognition',
  'pythagorean-theorem-3-4-5-family': 'pythagorean-triple-recognition',
  'pythagorean-theorem-6-8-10-2x-3-4-5': 'pythagorean-triple-recognition',
  'pythagorean-theorem-multiple-of-3-4-5': 'pythagorean-triple-recognition',
  'perimeter-of-a-right-triangle-3-4-5': 'pythagorean-triple-recognition',

  // Trig — short form, same method
  'soh-cah-toa': 'right-triangle-trig-ratios',

  // Trig with known Pythagorean triple — DISTINCT METHOD from generic trig
  // ratios. With a 5-12-13 or 9-40-41 triangle, students who know the triples
  // can read off sin/cos/tan from memory without recomputing via Pythagorean.
  'soh-cah-toa-in-a-5-12-13-triangle': 'trig-ratio-with-known-triple',
  'soh-cah-toa-in-a-3-4-5-triangle': 'trig-ratio-with-known-triple',
  'soh-cah-toa-in-an-8-15-17-triangle': 'trig-ratio-with-known-triple',
  'soh-cah-toa-tangent-in-a-9-40-41-triangle': 'trig-ratio-with-known-triple',

  // Trig with perimeter constraint — DISTINCT METHOD. Given the perimeter
  // (one equation), you must first solve for the sides before taking the
  // ratio. Different setup from "given sides, find ratio."
  'right-triangle-trigonometry-with-perimeter': 'trig-ratio-from-perimeter',

  // Linear systems — same method (mechanical naming variants)
  'linear-system-by-elimination': 'system-of-equations-elimination',
  'system-by-elimination-sum-difference': 'system-of-equations-elimination',
  'system-by-substitution': 'system-of-equations-substitution',

  // Systems from word problems — title variants, same method
  'system-of-equations-from-word-problem': 'two-equation-system-from-a-word-problem',
  'two-variable-word-problem': 'two-equation-system-from-a-word-problem',
  'word-problem-to-linear-equation': 'two-equation-system-from-a-word-problem',
  'substitution-into-a-two-variable-equation': 'two-equation-system-from-a-word-problem',

  // Proportions — title variants, same method
  'solve-a-proportion': 'proportion-ratio',
  'solving-a-proportion': 'proportion-ratio',
  'solving-a-simple-proportion': 'proportion-ratio',
  'unit-rate-direct-proportion': 'proportion-ratio',
  'proportions': 'proportion-ratio',
  'proportion-with-linear-expressions': 'proportion-ratio',
  'rate-word-problem-proportions': 'proportion-ratio',
  'ratios-with-a-total': 'proportion-ratio',

  // Two-step linear equations — variants (same method, fraction is surface)
  'two-step-equation-with-fraction': 'two-step-linear-equation',
  'two-step-linear-equation-with-fraction-coefficient': 'two-step-linear-equation',
  'linear-equation-with-a-fraction': 'two-step-linear-equation',
  'linear-word-problem-with-two-step-solve': 'two-step-linear-equation',

  // Function evaluation — DIRECT variants only. Compute f(x) at a given
  // input. Different from solve-for-input-from-output below.
  'solving-with-function-notation': 'function-evaluation',
  'solving-via-function-notation': 'function-evaluation',
  'function-evaluation-in-context': 'function-evaluation',
  'exponential-function-evaluation': 'function-evaluation',
  'function-evaluation-with-quadratic': 'function-evaluation',

  // Solve for input from output — DISTINCT METHOD from direct evaluation.
  // Given f(a) = c (output), find a (input). Requires solving an equation,
  // not just substitution. Now its own pattern.
  'solve-f-x-c': 'solve-for-input-from-output',
  'solve-f-a-c': 'solve-for-input-from-output',
  'solving-for-input-from-output': 'solve-for-input-from-output',
  'solving-for-the-input-given-the-output': 'solve-for-input-from-output',

  // Two-way table — percentage and probability are surface units, same method
  'two-way-table-conditional-percentage': 'two-way-table-conditional-probability',

  // Tangent line to PARABOLA (set line=quadratic, get one quadratic in x,
  // Δ=0). Same method between alias and canonical.
  'tangent-line-via-discriminant-0': 'tangent-line-and-discriminant',

  // Tangent line to CIRCLE — DISTINCT METHOD. Two options on test day:
  // (a) distance-from-center = radius (geometric), or
  // (b) substitute line into circle equation, get quadratic, Δ=0.
  // Both are geometric setups distinct from parabola tangent. Now its own pattern.
  'tangent-line-to-circle-discriminant-0': 'line-tangent-to-circle',

  // Discriminant — Δ=0 is one specific case of Δ-analysis, same method
  'discriminant-equals-zero': 'discriminant-analysis',

  // Zero product property IS factoring's last step — same method
  'zero-product-property': 'quadratic-via-factoring',
  'quadratic-by-factoring': 'quadratic-via-factoring',
  'polynomial-factoring-with-given-factor': 'quadratic-via-factoring',

  // Vieta's sum/product of roots — DISTINCT METHOD from factoring.
  // sum = -b/a, product = c/a, applied directly without finding roots.
  // Useful when roots are irrational/ugly. A student who can factor doesn't
  // necessarily know Vieta's. Now its own pattern.
  'sum-product-of-roots-vieta-s': 'vieta-sum-product-of-roots',
  'vieta-s-with-product-sum-relation': 'vieta-sum-product-of-roots',
  'quadratic-vieta-s-sum-product': 'vieta-sum-product-of-roots',

  // Reading slope-intercept form variants
  'y-intercept-from-slope-intercept-form': 'reading-slope-intercept-form',
  'slope-from-y-mx-b': 'reading-slope-intercept-form',
  'slope-intercept-form': 'reading-slope-intercept-form',

  // Scatterplot / best-fit-line variants — same method
  'line-of-best-fit-prediction': 'scatterplot-line-of-best-fit',

  // Linear cost equation setup — single-variable. Used to be mis-aliased
  // into a 2-variable-system pool. Now its own pattern.
  'linear-cost-setup': 'linear-cost-equation-setup',

  // Probability — complement is the same method (P(not A) = 1 - P(A))
  'complement-probability': 'basic-probability',

  // FOIL / matching coefficients — when the test problem is "expand then
  // match," FOIL is the inner mechanical step. Same skill cluster.
  'expanding-a-product-foil': 'matching-coefficients',
  'algebraic-identity-expansion': 'matching-coefficients',
  'foil-distribution': 'matching-coefficients',

  // Parallel / line-construction variants
  'parallel-line-equation': 'parallel-line-through-a-point',
  'equation-of-a-line-through-two-points': 'line-from-two-points',

  // Combining like terms — variants
  'distribute-and-combine': 'combining-like-terms',

  // Mean — variants
  'mean-from-total': 'mean-from-list',
  'mean-of-a-small-data-set': 'mean-from-list',
  'combined-mean-with-parameter': 'finding-a-missing-value-given-the-mean',

  // Percent — same method variants
  'percent-of-a-value': 'percent-of-a-whole',
  // percent-complement was previously aliased to basic-probability (BUG —
  // unrelated concept). It is now its own pattern (no alias entry; canonical
  // slug is `percent-complement` itself).

  // Triangle angle sum variant (isosceles is a special case, same theorem)
  'isosceles-triangle-angle-sum': 'triangle-angle-sum',

  // Rectangle area variant (word order)
  'area-of-a-rectangle': 'rectangle-area',

  // Exponential growth/decay — rate and period are surface parameter variants
  'exponential-growth-rate': 'exponential-growth-decay',
  'exponential-growth-with-period': 'exponential-growth-decay',

  // Build exponential model — DISTINCT from interpret. See
  // `build-exponential-model` and `interpret-exponential-parameters`
  // as new patterns under the granularity principle. Test-bundle slug
  // `exponential-growth-interpretation` now redirects to interpret.
  'exponential-growth-interpretation': 'interpret-exponential-parameters',
  'exponential-growth-model': 'build-exponential-model',

  // Multi-step linear — DISTINCT from word-problem-to-multi-step under
  // granularity principle. New patterns:
  //   - `pure-algebra-multi-step-linear` (covers current bank pool)
  //   - `word-problem-to-multi-step-linear` (covers word problems)
  // No alias entries needed; test bundles using "Multi-Step Linear Equation"
  // continue to kebab to that slug (still a valid canonical with bank pool).
  // Authors should use the new specific slugs going forward.

  // Percent decrease variant — same method
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
