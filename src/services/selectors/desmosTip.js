/**
 * Desmos-tip selector — maps a practice question to the single most relevant
 * Desmos play from the curated `desmosTechniques` corpus.
 *
 * Pure read accessor: keyword rules run over the question stem + skills.
 * Returns the matched technique entry (with its corpus `key` attached) or
 * `null` when no play clearly applies — callers render nothing on null, so
 * being conservative beats being noisy.
 *
 * Use it anywhere a question's explanation surface wants a "here is the
 * calculator route" companion: drill feedback panels, review surfaces, and
 * the AI-tutor question context.
 */

import { desmosTechniques } from '../../data/satStrategies';

// Ordered rule list — first match wins. Most-specific stems first so a
// "how many solutions does the system have" lands on solution-count, not
// the generic systems play.
const RULES = [
  { key: 'parameter-slider', test: h => /(exactly one|no) (real )?(solution|point)/.test(h) && /constant/.test(h) },
  { key: 'solution-count', test: h => /how many (real )?solutions|number of (real )?solutions|at how many points/.test(h) },
  { key: 'systems', test: h => /system of (linear )?equations|systems-of-equations/.test(h) },
  { key: 'regression', test: h => /line of best fit|best fit|scatterplot/.test(h) },
  { key: 'statistics', test: h => /\bmeans?\b|\bmedians?\b|standard deviation/.test(h) },
  { key: 'number-theory', test: h => /remainder when|least common multiple|greatest common factor/.test(h) },
  { key: 'distance-midpoint', test: h => /\bmidpoint\b|distance between/.test(h) },
  { key: 'circle-geometry', test: h => /circle/.test(h) && /equation|center|radius|tangent|xy-plane/.test(h) },
  { key: 'equivalent-expressions', test: h => /equivalent/.test(h) },
  { key: 'inequality-region', test: h => /inequalit/.test(h) },
  { key: 'quadratic', test: h => /parabola|vertex|maximum value|minimum value|x-intercept/.test(h) },
  { key: 'function-evaluation', test: h => /\b[fgh]\(-?\d|value of \b[fgh]\(/.test(h) },
  { key: 'single-variable', test: h => /what is the (value of [a-z]|solution)/.test(h) && /equation/.test(h) },
];

/**
 * Pick the most relevant Desmos play for a question, or null.
 *
 * @param {object} question - bank/test item with `question` (stem text) and
 *   optional `skills` array; R&W items (anything carrying `passage`/`passages`)
 *   always return null.
 * @returns {{key: string, name: string, technique: string, when: string, timeEstimate: string}|null}
 */
export const getDesmosTip = (question) => {
  if (!question || question.passage || question.passages) return null;
  const stem = typeof question.question === 'string' ? question.question : '';
  if (!stem) return null;
  const hay = `${stem} ${(question.skills || []).join(' ')}`.toLowerCase();

  const rule = RULES.find(r => r.test(hay));
  if (!rule) return null;
  const entry = desmosTechniques[rule.key];
  return entry ? { key: rule.key, ...entry } : null;
};

export default getDesmosTip;
