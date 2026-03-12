/**
 * Shared SAT domain inference.
 *
 * Maps any combination of question skill IDs/labels to one of the
 * four official SAT Math domains.  Works with both canonical taxonomy
 * IDs (e.g. "slope-from-points") and the human-readable labels used
 * in many practice-test files (e.g. "Linear Equations", "Geometry").
 */

import { getSkillById } from '../../data/skillTaxonomy';

export const SAT_MATH_DOMAINS = ['algebra', 'problem-solving', 'advanced-math', 'geometry'];

export const DOMAIN_DISPLAY_NAMES = {
  'algebra': 'Algebra',
  'problem-solving': 'Problem Solving & Data Analysis',
  'advanced-math': 'Advanced Math',
  'geometry': 'Geometry & Trigonometry',
};

const DOMAIN_DISPLAY_ORDER = SAT_MATH_DOMAINS;

/**
 * Label-to-domain mapping for the human-readable skill names used in
 * practice-test files.  Keys are lowercased; values are canonical
 * domain IDs.  Ordered by specificity so more-specific labels come
 * first when iterating.
 */
const LABEL_TO_DOMAIN = {
  // ── Geometry & Trigonometry ──────────────────────────────────────────
  'geometry':               'geometry',
  'triangle':               'geometry',
  'triangles':              'geometry',
  'triangle angle sum':     'geometry',
  'triangle angles':        'geometry',
  'triangle area':          'geometry',
  'right triangles':        'geometry',
  'similar triangles':      'geometry',
  'congruent triangles':    'geometry',
  'special triangles':      'geometry',
  'special right triangles':'geometry',
  'pythagorean theorem':    'geometry',
  'circle':                 'geometry',
  'circles':                'geometry',
  'circle equations':       'geometry',
  'circle equation':        'geometry',
  'angle measures':         'geometry',
  'angle relationships':    'geometry',
  'parallel lines':         'geometry',
  'perpendicular lines':    'geometry',
  'transversals':           'geometry',
  'coordinate geometry':    'geometry',
  'point slope form':       'geometry',
  'tangent lines':          'geometry',
  'volume':                 'geometry',
  'volume prism':           'geometry',
  'surface area':           'geometry',
  'area':                   'geometry',
  'trigonometry':           'geometry',
  'soh-cah-toa':            'geometry',
  'radians degrees':        'geometry',

  // ── Problem Solving & Data Analysis ─────────────────────────────────
  'problem solving':                    'problem-solving',
  'problem-solving and data analysis':  'problem-solving',
  'data analysis':                      'problem-solving',
  'data interpretation':                'problem-solving',
  'statistics':                         'problem-solving',
  'statistical inference':              'problem-solving',
  'standard deviation':                 'problem-solving',
  'scatterplots':                       'problem-solving',
  'bar graphs':                         'problem-solving',
  'two-way tables':                     'problem-solving',
  'frequency tables':                   'problem-solving',
  'line of best fit':                   'problem-solving',
  'linear regression':                  'problem-solving',
  'probability':                        'problem-solving',
  'margin of error':                    'problem-solving',
  'sampling':                           'problem-solving',
  'find mean':                          'problem-solving',
  'proportions':                        'problem-solving',
  'ratios':                             'problem-solving',
  'ratios and proportions':             'problem-solving',
  'unit rate':                          'problem-solving',
  'unit rates':                         'problem-solving',
  'unit conversion':                    'problem-solving',
  'dimensional analysis':               'problem-solving',
  'density':                            'problem-solving',
  'population density':                 'problem-solving',
  'rate problems':                      'problem-solving',
  'rates':                              'problem-solving',
  'percent':                            'problem-solving',
  'percent change':                     'problem-solving',
  'percent of value':                   'problem-solving',
  'percentages':                        'problem-solving',
  'arithmetic':                         'problem-solving',

  // ── Advanced Math ───────────────────────────────────────────────────
  'advanced math':                      'advanced-math',
  'rational functions':                 'advanced-math',
  'domain':                             'advanced-math',
  'quadratic equations':                'advanced-math',
  'quadratic expressions':              'advanced-math',
  'quadratic functions':                'advanced-math',
  'discriminant':                       'advanced-math',
  'exponents':                          'advanced-math',
  'exponents and radicals':             'advanced-math',
  'exponential equations':              'advanced-math',
  'exponential functions':              'advanced-math',
  'exponential growth':                 'advanced-math',
  'exponential growth decay':           'advanced-math',
  'radical equations':                  'advanced-math',
  'radical functions':                  'advanced-math',
  'rational equations':                 'advanced-math',
  'rational expressions':               'advanced-math',
  'polynomial functions':               'advanced-math',
  'polynomial addition':                'advanced-math',
  'polynomials':                        'advanced-math',
  'factoring':                          'advanced-math',
  'factored form':                      'advanced-math',
  'completing the square':              'advanced-math',
  'identify quadratic':                 'advanced-math',
  'parabola direction':                 'advanced-math',
  "vieta's formulas":                   'advanced-math',
  'function composition':               'advanced-math',
  'function domain':                    'advanced-math',
  'function equations':                 'advanced-math',
  'function operations':                'advanced-math',
  'function transformations':           'advanced-math',
  'horizontal shifts':                  'advanced-math',
  'translations':                       'advanced-math',
  'finding function from conditions':   'advanced-math',
  'finding roots factoring':            'advanced-math',
  'special solutions':                  'advanced-math',
  'combining like terms':               'advanced-math',
  'equivalent expressions':             'advanced-math',

  // ── Algebra ─────────────────────────────────────────────────────────
  'algebra':                            'algebra',
  'linear equations':                   'algebra',
  'linear expressions':                 'algebra',
  'linear functions':                   'algebra',
  'linear function interpretation':     'algebra',
  'linear inequalities':                'algebra',
  'linear models':                      'algebra',
  'slope':                              'algebra',
  'slope intercept form':               'algebra',
  'slope interpretation':               'algebra',
  'systems of equations':               'algebra',
  'systems of inequalities':            'algebra',
  'setting up systems':                 'algebra',
  'substitution method':                'algebra',
  'graphing systems':                   'algebra',
  'inequalities':                       'algebra',
  'absolute value equations':           'algebra',
  'algebraic manipulation':             'algebra',
  'algebraic expressions':              'algebra',
  'rearranging formulas':               'algebra',
  'solving equations':                  'algebra',
  'no solution':                        'algebra',
  'table to equation':                  'algebra',
  'word problems':                      'algebra',
  'word problem to equation':           'algebra',
  'translating word problems':          'algebra',
  'function notation':                  'algebra',
  'function evaluation':                'algebra',
  'function identification':            'algebra',
  'function interpretation':            'algebra',
  'evaluating expressions':             'algebra',
  'arithmetic sequences':               'algebra',
  'summation':                          'algebra',
};

/**
 * Regex-based fallback patterns when neither the taxonomy nor the
 * label map produces a match.  Ordered from most-specific to broadest.
 *
 * Use word boundaries (\b) and negative lookaheads to prevent
 * substring collisions (e.g. "rational" matching "ratio").
 */
const DOMAIN_PATTERNS = [
  { domain: 'geometry',         re: /\btriangle|\bcircle|\bangle|\bvolume|\barea\b|\bgeometry|\btrig|\bradian|\bpolygon|\bperpendicular|\bpythagor|\btangent\b|\bsurface\b|\bcongruent|\bsimilar\b|\btransversal|\bcoordinate\s*geo|\bsoh.?cah/i },
  { domain: 'problem-solving',  re: /\bpercent|\bstatistic|\bmean\b|\bmedian\b|\bprobability|\bratio(?!nal)|\btable\b|\bmargin|\bscatter|\bbar\s*graph|\bfrequency|\bline\s*of\s*best|\bregression|\bsampling|\bdata\s*analysis|\bdata\s*interpret|\bunit\s*rate|\bunit\s*conv|\bdimension|\bdensity|\bpopulation|\bpropor|\btwo.?way/i },
  { domain: 'advanced-math',    re: /\bquadratic|\bexponential|\bpolynomial|\bradical|\brational|\bfactor(?!s?\b\s*of\b)|\bvertex|\bdiscriminant|\bexponent|\bparabola|\bcompleting|\bvieta|\bcomposition|\btransformation|\bhorizontal\s*shift|\btranslation/i },
  { domain: 'algebra',          re: /\blinear|\bslope|\bsystem|\babsolute|\binequalit|\bequation|\balgebraic|\brearrang|\bsubstitut|\beliminat|\bword\s*prob/i },
];

/**
 * Normalize a skill string for label lookup: lowercase, trim, and
 * convert hyphens/underscores to spaces so that "Quadratic-Functions",
 * "quadratic_functions", and "Quadratic Functions" all match the same key.
 */
function normalizeLabel(raw) {
  return String(raw).toLowerCase().trim().replace(/[-_]+/g, ' ');
}

/**
 * Domain specificity tier — broad labels like "algebra" should not
 * override specific ones like "quadratic functions".
 */
const BROAD_LABELS = new Set(['algebra', 'geometry', 'advanced math', 'problem solving']);

/**
 * Infer the SAT Math domain for a question from its skill array.
 *
 * Resolution order:
 *  1. Taxonomy lookup on each skill ID
 *  2. Label match (case-insensitive, hyphen/underscore normalized)
 *     — prefer the most-specific label when broad and specific disagree
 *  3. Regex pattern match
 *  4. Fallback to 'algebra'
 *
 * @param {string[]} skills  Array of skill IDs / labels from the question
 * @returns {string} One of the four canonical SAT Math domain IDs
 */
export function inferDomain(skills = []) {
  if (!Array.isArray(skills) || skills.length === 0) return 'algebra';

  // 1. Taxonomy lookup — check every skill, not just the first
  for (const skillId of skills) {
    const skill = getSkillById(skillId);
    if (skill?.domain) return skill.domain;
  }

  // 2. Label match with normalization and specificity preference
  let broadMatch = null;
  for (const skillId of skills) {
    const norm = normalizeLabel(skillId);
    const domain = LABEL_TO_DOMAIN[norm];
    if (!domain) continue;
    if (BROAD_LABELS.has(norm)) {
      if (!broadMatch) broadMatch = domain;
    } else {
      return domain;
    }
  }
  if (broadMatch) return broadMatch;

  // 3. Regex pattern match across all skills joined
  const skillStr = skills.map(s => normalizeLabel(s)).join(' ');
  for (const { domain, re } of DOMAIN_PATTERNS) {
    if (re.test(skillStr)) return domain;
  }

  // 4. Fallback
  return 'algebra';
}

/**
 * Return the 4 SAT Math domains in stable display order.
 */
export function getDomainDisplayOrder() {
  return [...DOMAIN_DISPLAY_ORDER];
}
