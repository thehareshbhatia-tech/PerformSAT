/**
 * College Board Official SAT Skill Taxonomy
 *
 * Source: College Board Educator Question Bank
 *         (https://satsuiteeducatorquestionbank.collegeboard.org/)
 *         API: qbank-api.collegeboard.org/.../digital/get-questions
 *
 * The 19 math skills + 11 R&W skills below are the canonical units College
 * Board uses to organize Bluebook practice tests, the Educator Bank, and
 * Khan Academy's SAT prep. Every question on the digital SAT is tagged
 * with exactly one of these skills by CB.
 *
 * PerformSAT's bank uses a finer-grained "SAT Pattern" granularity below
 * the CB skill (e.g., `slope-from-two-points`, `interpret-slope-in-context`
 * — both sit under CB skill `H.B.` "Linear functions"). Patterns give us
 * precision in drill routing; CB skills give students a recognizable
 * top-level taxonomy that matches what they see in Bluebook.
 *
 * The Practice Bank UI surfaces CB skills as the primary unit. Patterns
 * appear as a secondary "specific question types" expansion inside each
 * skill card.
 */

// ── Math: 19 skills across 4 domains ─────────────────────────────────────────

export const CB_MATH_DOMAIN_LABELS = {
  algebra: 'Algebra',
  'advanced-math': 'Advanced Math',
  'problem-solving': 'Problem-Solving and Data Analysis',
  geometry: 'Geometry and Trigonometry',
};

/**
 * Each CB skill has:
 *   - code:   The CB skill code (e.g., "H.A.")
 *   - domain: PerformSAT-canonical domain slug
 *   - slug:   Stable kebab-case ID used in the runtime
 *   - label:  Student-facing display name (CB's own wording)
 *   - short:  Short label for narrow UI surfaces
 */
export const CB_MATH_SKILLS = [
  // Algebra (5)
  { code: 'H.A.', domain: 'algebra',         slug: 'linear-equations-one-variable',        label: 'Linear equations in one variable',         short: 'Linear equations' },
  { code: 'H.B.', domain: 'algebra',         slug: 'linear-functions',                     label: 'Linear functions',                          short: 'Linear functions' },
  { code: 'H.C.', domain: 'algebra',         slug: 'linear-equations-two-variables',       label: 'Linear equations in two variables',         short: 'Lines in xy-plane' },
  { code: 'H.D.', domain: 'algebra',         slug: 'linear-systems',                       label: 'Systems of two linear equations in two variables', short: 'Linear systems' },
  { code: 'H.E.', domain: 'algebra',         slug: 'linear-inequalities',                  label: 'Linear inequalities in one or two variables', short: 'Linear inequalities' },

  // Advanced Math (3)
  { code: 'P.A.', domain: 'advanced-math',   slug: 'equivalent-expressions',               label: 'Equivalent expressions',                    short: 'Equivalent expressions' },
  { code: 'P.B.', domain: 'advanced-math',   slug: 'nonlinear-equations',                  label: 'Nonlinear equations & systems',             short: 'Nonlinear equations' },
  { code: 'P.C.', domain: 'advanced-math',   slug: 'nonlinear-functions',                  label: 'Nonlinear functions',                       short: 'Nonlinear functions' },

  // Problem-Solving and Data Analysis (7)
  { code: 'Q.A.', domain: 'problem-solving', slug: 'ratios-rates-proportions',             label: 'Ratios, rates, proportional relationships, and units', short: 'Ratios & rates' },
  { code: 'Q.B.', domain: 'problem-solving', slug: 'percentages',                          label: 'Percentages',                               short: 'Percentages' },
  { code: 'Q.C.', domain: 'problem-solving', slug: 'one-variable-data',                    label: 'One-variable data: distributions and measures of center and spread', short: 'One-variable data' },
  { code: 'Q.D.', domain: 'problem-solving', slug: 'two-variable-data',                    label: 'Two-variable data: models and scatterplots', short: 'Scatterplots' },
  { code: 'Q.E.', domain: 'problem-solving', slug: 'probability',                          label: 'Probability and conditional probability',   short: 'Probability' },
  { code: 'Q.F.', domain: 'problem-solving', slug: 'inference-margin-of-error',            label: 'Inference from sample statistics and margin of error', short: 'Margin of error' },
  { code: 'Q.G.', domain: 'problem-solving', slug: 'statistical-claims',                   label: 'Evaluating statistical claims: observational studies and experiments', short: 'Statistical claims' },

  // Geometry and Trigonometry (4)
  { code: 'S.A.', domain: 'geometry',        slug: 'area-and-volume',                      label: 'Area and volume',                           short: 'Area & volume' },
  { code: 'S.B.', domain: 'geometry',        slug: 'lines-angles-triangles',               label: 'Lines, angles, and triangles',              short: 'Lines & angles' },
  { code: 'S.C.', domain: 'geometry',        slug: 'right-triangles-trig',                 label: 'Right triangles and trigonometry',          short: 'Right triangles' },
  { code: 'S.D.', domain: 'geometry',        slug: 'circles',                              label: 'Circles',                                   short: 'Circles' },
];

// ── R&W: 11 skills across 4 domains ──────────────────────────────────────────

export const CB_RW_DOMAIN_LABELS = {
  'information-and-ideas':         'Information and Ideas',
  'craft-and-structure':           'Craft and Structure',
  'standard-english-conventions':  'Standard English Conventions',
  'expression-of-ideas':           'Expression of Ideas',
};

export const CB_RW_SKILLS = [
  { slug: 'central-ideas-and-details',        domain: 'information-and-ideas',         label: 'Central Ideas and Details' },
  { slug: 'inferences',                       domain: 'information-and-ideas',         label: 'Inferences' },
  { slug: 'command-of-evidence-textual',      domain: 'information-and-ideas',         label: 'Command of Evidence (Textual)' },
  { slug: 'command-of-evidence-quantitative', domain: 'information-and-ideas',         label: 'Command of Evidence (Quantitative)' },
  { slug: 'words-in-context',                 domain: 'craft-and-structure',           label: 'Words in Context' },
  { slug: 'text-structure-and-purpose',       domain: 'craft-and-structure',           label: 'Text Structure and Purpose' },
  { slug: 'cross-text-connections',           domain: 'craft-and-structure',           label: 'Cross-Text Connections' },
  { slug: 'boundaries',                       domain: 'standard-english-conventions',  label: 'Boundaries' },
  { slug: 'form-structure-and-sense',         domain: 'standard-english-conventions',  label: 'Form, Structure, and Sense' },
  { slug: 'transitions',                      domain: 'expression-of-ideas',           label: 'Transitions' },
  { slug: 'rhetorical-synthesis',             domain: 'expression-of-ideas',           label: 'Rhetorical Synthesis' },
];

// ── Pattern → CB Skill mapping ───────────────────────────────────────────────
// Maps each PerformSAT SAT Pattern slug (post-alias) to its CB skill slug.
// When a new pattern appears in a bank item explanation, ADD a row here.
// The audit script `scripts/auditCBCoverage.mjs` will fail if a surfaced
// pattern is missing from this map.
//
// Conservative mapping rules:
//   - If the pattern is a sub-skill of a CB skill, map to that skill.
//   - When a pattern straddles two CB skills, prefer the one the SAT
//     historically classifies it under (see CB Educator Bank for precedent).
//   - Patterns that don't represent a real CB question type are NOT listed
//     here — they should be removed from the bank or renamed.

export const PATTERN_TO_CB_SKILL = {
  // ── H.A. Linear equations in one variable ─────────────────────────────────
  'shifted-output':                          'linear-equations-one-variable', // "If 7x − 4 = 24, find 7x + 11"
  'one-step-linear-equation':                'linear-equations-one-variable',
  'two-step-linear-equation':                'linear-equations-one-variable',
  'multi-step-linear-equation':              'linear-equations-one-variable',
  'linear-equation-with-distribution':       'linear-equations-one-variable',
  'linear-equation-with-variables-on-both-sides': 'linear-equations-one-variable',
  'combining-like-terms':                    'linear-equations-one-variable',
  'absolute-value-equation':                 'linear-equations-one-variable',
  'identifying-identity-contradiction-equations': 'linear-equations-one-variable',
  'matching-coefficients':                   'linear-equations-one-variable',
  'word-problem-to-multi-step-linear':       'linear-equations-one-variable',
  'linear-cost-equation-setup':              'linear-equations-one-variable',

  // ── H.B. Linear functions ─────────────────────────────────────────────────
  'slope-from-two-points':                   'linear-functions',
  'interpret-slope-in-context':              'linear-functions',
  'slope-as-rate-of-change-in-context':      'linear-functions',
  'reading-slope-intercept-form':            'linear-functions',
  'linear-cost-model':                       'linear-functions',
  'solve-for-input-from-output':             'linear-functions',
  'function-evaluation':                     'linear-functions', // direct evaluation of a linear function (f(x) = ax + b)
  'line-from-two-points':                    'linear-functions',

  // ── H.C. Linear equations in two variables ────────────────────────────────
  'parallel-line-through-a-point':           'linear-equations-two-variables',
  'perpendicular-line-through-point':        'linear-equations-two-variables',
  'perpendicular-slope':                     'linear-equations-two-variables',
  'distance-formula':                        'linear-equations-two-variables',
  'midpoint-formula':                        'linear-equations-two-variables',

  // ── H.D. Systems of two linear equations in two variables ─────────────────
  'system-of-equations-substitution':        'linear-systems',
  'system-of-equations-elimination':         'linear-systems',
  'linear-system-by-substitution':           'linear-systems',
  'no-solution-condition':                   'linear-systems',
  'parallel-lines-no-solution':              'linear-systems',
  'same-line-infinitely-many-solutions':     'linear-systems',
  'system-equivalence-check':                'linear-systems',
  'solve-for-a-combination':                 'linear-systems',
  'two-equation-system-from-a-word-problem': 'linear-systems',

  // ── H.E. Linear inequalities ──────────────────────────────────────────────
  'inequality-word-problem-floor':           'linear-inequalities',
  'one-variable-linear-inequality':          'linear-inequalities',
  'system-of-linear-inequalities':           'linear-inequalities',

  // ── P.A. Equivalent expressions ───────────────────────────────────────────
  'vertex-form-to-standard-form':            'equivalent-expressions',
  'rational-expression-simplification':      'equivalent-expressions',
  'common-base-exponent-simplification':     'equivalent-expressions',
  'exponent-rules-with-radicals':            'equivalent-expressions',
  'factor-by-grouping':                      'equivalent-expressions',
  'completing-the-square':                   'equivalent-expressions', // standard form → vertex form

  // ── P.B. Nonlinear equations & systems ────────────────────────────────────
  'quadratic-via-factoring':                 'nonlinear-equations',
  'discriminant-analysis':                   'nonlinear-equations',
  'discriminant-with-integer-bound':         'nonlinear-equations',
  'vieta-sum-product-of-roots':              'nonlinear-equations',
  'tangent-line-and-discriminant':           'nonlinear-equations',
  'rational-equation-with-extraneous-solution': 'nonlinear-equations', // solve, then check domain
  'polynomial-remainder-theorem':            'nonlinear-equations', // p(a)=remainder when divided by (x−a)
  'quadratic-inequality-from-context':       'nonlinear-equations', // ax²+bx+c ≷ 0 from a real-world setup
  'radical-equation':                        'nonlinear-equations', // √(...) = x — isolate then square
  'exponential-equation-with-common-base':   'nonlinear-equations', // 2^(3x)=8 — set exponents equal
  'distance-between-x-intercepts':           'nonlinear-equations', // |root_a − root_b|

  // ── P.C. Nonlinear functions ──────────────────────────────────────────────
  'classify-physical-motion-model':          'nonlinear-functions',
  'interpret-initial-value-in-context':      'nonlinear-functions',
  'interpret-vertex-form':                   'nonlinear-functions',
  'interpret-exponential-parameters':        'nonlinear-functions',
  'exponential-growth-decay':                'nonlinear-functions',
  'exponential-growth-model':                'nonlinear-functions',
  'build-exponential-model':                 'nonlinear-functions',
  'reverse-exponential-back-in-time':        'nonlinear-functions', // past-value: divide by b^n
  'compound-interest':                       'nonlinear-functions', // A = P(1+r)^t — exponential model
  'function-composition':                    'nonlinear-functions',
  'function-evaluation-with-negative-input': 'nonlinear-functions',
  'function-transformation':                 'nonlinear-functions',
  'function-from-shifted-graph':             'nonlinear-functions', // reverse of function-transformation
  'vertical-shift':                          'nonlinear-functions', // f(x) + k
  'horizontal-shift':                        'nonlinear-functions', // f(x ± h)
  'reflection-of-graph':                     'nonlinear-functions', // -f(x) or f(-x)
  'vertical-stretch':                        'nonlinear-functions', // a·f(x)
  'vertex-form-from-two-conditions':         'nonlinear-functions',
  'vertex-form-maximum':                     'nonlinear-functions',

  // ── Q.A. Ratios, rates, proportional relationships, units ────────────────
  'proportion-ratio':                        'ratios-rates-proportions',
  'sum-of-parts-ratio':                      'ratios-rates-proportions',
  'unit-conversion':                         'ratios-rates-proportions',
  'mixture-problems':                        'ratios-rates-proportions',
  'distance-rate-time':                      'ratios-rates-proportions', // d = rt word problems
  'average-rate':                            'ratios-rates-proportions', // total/total
  'simple-interest':                         'ratios-rates-proportions', // A = P(1 + rt); linear growth

  // ── Q.B. Percentages ──────────────────────────────────────────────────────
  'percent-of-a-number':                     'percentages',
  'percent-of-a-whole':                      'percentages',
  'percent-decrease':                        'percentages',
  'reverse-percent':                         'percentages',
  'reverse-percent-multi-step':              'percentages',
  'percent-complement':                      'percentages', // 100% − x%; not probability complement
  'compound-percent-of':                     'percentages', // count-anchored chained percent (1200 × 18% × 25%)
  'chained-percent-relationship':            'percentages', // pure-algebraic chained percent (a→b→c)
  'percent-greater-than-less-than':          'percentages', // "X% greater than" / "X% less than" verbal framing

  // ── Q.C. One-variable data (distributions/center/spread) ─────────────────
  'mean-from-list':                          'one-variable-data',
  'finding-a-missing-value-given-the-mean':  'one-variable-data',
  'outlier-effect':                          'one-variable-data',
  'box-plot-interpretation':                 'one-variable-data',
  'standard-deviation-comparison':           'one-variable-data',
  'median-from-list':                        'one-variable-data',
  'mode-from-list':                          'one-variable-data',
  'scaling-a-data-set':                      'one-variable-data', // effect of × constant on mean/SD

  // ── Q.D. Two-variable data (models, scatterplots) ────────────────────────
  'residual':                                'two-variable-data',
  'scatterplot-line-of-best-fit':            'two-variable-data',
  'interpret-slope-of-best-fit':             'two-variable-data',
  'interpret-intercept-of-best-fit':         'two-variable-data',

  // ── Q.E. Probability and conditional probability ─────────────────────────
  'basic-probability':                       'probability',
  'marginal-probability':                    'probability',
  'conditional-probability-from-two-way-table': 'probability',
  'two-way-table-conditional-probability':   'probability',
  'conditional-probability-with-percent':    'probability',
  'probability-without-replacement':         'probability', // sequential draws, shrinking denominator

  // ── Q.F. Inference / margin of error ──────────────────────────────────────
  'margin-of-error':                         'inference-margin-of-error',
  'confidence-interval-interpretation':      'inference-margin-of-error',
  'sample-size-for-margin-reduction':        'inference-margin-of-error',

  // ── Q.G. Evaluating statistical claims ────────────────────────────────────
  'observational-vs-experimental-study':     'statistical-claims', // random ASSIGNMENT supports causation
  'scope-of-inference':                      'statistical-claims', // sampling validity & generalization

  // ── S.A. Area and volume ──────────────────────────────────────────────────
  'rectangle-area':                          'area-and-volume',
  'square-perimeter':                        'area-and-volume',
  'cylinder-volume':                         'area-and-volume',
  'volume-of-a-rectangular-prism':           'area-and-volume',
  'area-of-a-circle':                        'area-and-volume',
  'symbolic-area-or-volume':                 'area-and-volume', // area/volume expressed in terms of a variable
  'similar-figures-area-ratio':              'area-and-volume', // linear ratio² = area ratio
  'area-of-triangle-from-coordinates':       'area-and-volume', // base-height or shoelace
  'triangle-area':                           'area-and-volume', // generic 1/2 base × height
  'circumference-of-a-circle':               'area-and-volume', // C = 2π r or π d

  // ── S.B. Lines, angles, and triangles ─────────────────────────────────────
  'triangle-angle-sum':                      'lines-angles-triangles',
  'angles-with-parallel-lines-and-transversals': 'lines-angles-triangles',
  'exterior-angle-theorem':                  'lines-angles-triangles',
  'similar-triangles-proportion':            'lines-angles-triangles',
  'vertical-angles':                         'lines-angles-triangles', // ∠ = its vertical pair

  // ── S.C. Right triangles and trigonometry ─────────────────────────────────
  'right-triangle-pythagorean':              'right-triangles-trig',
  'right-triangle-trig-ratios':              'right-triangles-trig',
  'pythagorean-triple-recognition':          'right-triangles-trig',
  'pythagorean-theorem-3-4-5-family':        'right-triangles-trig',
  'soh-cah-toa-in-a-3-4-5-triangle':         'right-triangles-trig',
  'trig-ratio-from-perimeter':               'right-triangles-trig',
  'trig-ratio-with-known-triple':            'right-triangles-trig',
  'radians-degrees-conversion':              'right-triangles-trig', // π/180 or 180/π
  '30-60-90-triangle':                       'right-triangles-trig', // sides 1 : √3 : 2
  '45-45-90-triangle':                       'right-triangles-trig', // sides 1 : 1 : √2

  // ── S.D. Circles ──────────────────────────────────────────────────────────
  'circle-in-standard-form':                 'circles',
  'circle-in-general-form':                  'circles',
  'distance-from-center-as-radius':          'circles',
  'line-tangent-to-circle':                  'circles',
  'arc-length':                              'circles',
  'sector-area':                             'circles', // (θ/360) · π r²
};

// ── Lookup helpers ───────────────────────────────────────────────────────────

const CB_MATH_BY_SLUG = new Map(CB_MATH_SKILLS.map(s => [s.slug, s]));
const CB_RW_BY_SLUG = new Map(CB_RW_SKILLS.map(s => [s.slug, s]));

/**
 * Returns the CB math skill object for a given pattern slug, or null.
 *
 * @param {string} patternSlug — post-alias SAT Pattern slug (the value that
 *   `extractSatPattern` returns).
 */
export function getCBSkillForPattern(patternSlug) {
  const skillSlug = PATTERN_TO_CB_SKILL[patternSlug];
  if (!skillSlug) return null;
  return CB_MATH_BY_SLUG.get(skillSlug) || null;
}

/**
 * Returns all patterns mapped to a given CB skill slug.
 */
export function getPatternsForCBSkill(cbSkillSlug) {
  return Object.entries(PATTERN_TO_CB_SKILL)
    .filter(([, s]) => s === cbSkillSlug)
    .map(([p]) => p);
}

export function getCBMathSkillsByDomain(domainSlug) {
  return CB_MATH_SKILLS.filter(s => s.domain === domainSlug);
}

export function getCBRWSkillsByDomain(domainSlug) {
  return CB_RW_SKILLS.filter(s => s.domain === domainSlug);
}
