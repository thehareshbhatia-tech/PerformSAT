/**
 * predictionBoost.js — re-rank studyPlan.weaknesses with the ACTIVE (not yet
 * validated) prediction's likely-struggle skills.
 *
 * The prediction engine computes likelyStruggleSkills after every full test
 * (predictionEngine.js::predictStruggleSkills) but no plan surface ever
 * consumed them — they reached only the AI tutor prompt. This selector closes
 * that loop at render time: predicted-struggle weaknesses move to the front
 * of Focus Areas, each annotated so the card can say WHY it moved (the
 * visible "your plan updated because..." moment).
 *
 * Render-time rather than persist-time on purpose: no write race with the
 * seam's savePrediction, no migration of persisted plans, and removing the
 * selector rolls the UI back to the stored order byte-for-byte.
 *
 * Lives in selectors/ to avoid predictionEngine's Firebase import chain.
 */

/**
 * Latest ACTIVE prediction's struggle skills — the newest predictionLog entry
 * that has not been validated yet (resolved !== true). Validated predictions
 * describe a test that already happened; only the open one is a claim about
 * the student's NEXT test.
 *
 * @param {Array|null|undefined} predictionLog — progress/{uid}.predictionLog[]
 * @returns {Array<{skillId: string, section?: string, reason?: string, confidence?: string}>}
 */
export function getActiveStruggleSkills(predictionLog) {
  if (!Array.isArray(predictionLog) || predictionLog.length === 0) return [];

  const active = predictionLog.filter(
    p => p && p.resolved !== true && Array.isArray(p.predictions?.likelyStruggleSkills),
  );
  if (active.length === 0) return [];

  // Newest first; predictions are pushed in order, sorting defends against
  // unordered writes (same convention as predictionSummary.js).
  const sorted = [...active].sort((a, b) => {
    const at = Date.parse(a.createdAt || '');
    const bt = Date.parse(b.createdAt || '');
    if (Number.isNaN(at) || Number.isNaN(bt)) return 0;
    return bt - at;
  });

  return sorted[0].predictions.likelyStruggleSkills;
}

/**
 * Normalize a skill identifier for cross-vocabulary comparison. skillProgress
 * keys (the prediction side) carry whatever q.skills strings the bank items
 * were authored with — often display-cased ("Quadratic equations", "Polynomial
 * Factoring") — while plan weaknesses carry canonical kebab ids. Exact match
 * would chronically under-fire.
 * @param {*} id
 * @returns {string}
 */
const normalizeSkillId = (id) => String(id).trim().toLowerCase().replace(/\s+/g, '-');

/**
 * Two normalized skill ids refer to the same concept when equal OR when one
 * is a hyphen-boundary refinement of the other ('slope-from-points' vs
 * 'slope'). The boundary requirement keeps 'function-interpretation' from
 * matching 'function-transformation'. Mirrors the granular-to-coarse prefix
 * translation Today's Tasks already uses for activity routing.
 */
const skillIdsMatch = (a, b) => a === b || a.startsWith(`${b}-`) || b.startsWith(`${a}-`);

/**
 * Stable re-rank of plan weaknesses: weaknesses whose skillId appears in the
 * active prediction's struggle list move to the front (relative order
 * preserved within both groups), each annotated with
 * `predictedStruggle: { confidence, reason }` for the card to render.
 *
 * Returns the ORIGINAL array reference when there is no active prediction or
 * no overlap, so memo dependencies don't churn.
 *
 * @param {Array|null|undefined} weaknesses — studyPlan.weaknesses
 * @param {Array|null|undefined} predictionLog
 * @returns {Array} re-ranked weaknesses (or the original reference)
 */
export function applyPredictionBoost(weaknesses, predictionLog) {
  if (!Array.isArray(weaknesses) || weaknesses.length === 0) return weaknesses ?? [];

  const struggles = getActiveStruggleSkills(predictionLog)
    .filter(s => s && s.skillId != null)
    .map(s => ({ norm: normalizeSkillId(s.skillId), entry: s }));
  if (struggles.length === 0) return weaknesses;

  const boosted = [];
  const rest = [];
  weaknesses.forEach(w => {
    const wNorm = w && w.skillId != null ? normalizeSkillId(w.skillId) : null;
    const hit = wNorm ? struggles.find(s => skillIdsMatch(s.norm, wNorm)) : undefined;
    if (hit) {
      boosted.push({
        ...w,
        predictedStruggle: {
          confidence: hit.entry.confidence || 'medium',
          reason: hit.entry.reason || '',
        },
      });
    } else {
      rest.push(w);
    }
  });

  if (boosted.length === 0) return weaknesses;
  return [...boosted, ...rest];
}
