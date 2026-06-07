/**
 * dailyIntro.js — coach-voice paragraph for the top of TodaysTasksCard.
 *
 * One or two sentences, aggregated across today's activities. Echoes
 * Acely's reference: "Last time you worked on Inequalities you scored
 * 68%, which is a solid starting point. As you go through today's
 * problems, focus on simplifying each side..."
 *
 * Defends against thin-data slop:
 *   - No data at all      → empty string (caller hides the paragraph)
 *   - Today is a rest day → null sentinel (caller hides — TodaysTasksCard
 *                            already shows a rest-day card)
 *   - Score only          → score-anchored copy
 *   - Weakness only       → weakness-anchored copy
 *   - Both                → richer two-sentence copy
 *
 * Pure. No Firestore deps. Lives in selectors/ next to weaknesses.js
 * + sessionAdherence.js + recentTest.js + predictionSummary.js.
 */

function pluralize(n, singular, plural) {
  return n === 1 ? `1 ${singular}` : `${n} ${plural}`;
}

function totalMinutes(activities) {
  return (activities || []).reduce((sum, a) => sum + (typeof a.duration === 'number' ? a.duration : 0), 0);
}

/**
 * Format the per-day intro paragraph.
 *
 * @param {object} args
 * @param {{ kind: string, activities?: Array, day: string }} args.todaySlice
 * @param {number|null} [args.latestScore]      Most recent test scaledScore
 * @param {{skill?: string, errorType?: string, accuracy?: number}|null} [args.topWeakness]
 * @param {string|null} [args.firstName]        Used at most ONCE, only in
 *   designated frames — a note to the student, not a mail-merge. Dropped
 *   cleanly when absent.
 * @returns {string}  The paragraph (empty string when nothing useful to say)
 */
export function formatDailyIntro({ todaySlice, latestScore = null, topWeakness = null, firstName = null } = {}) {
  if (!todaySlice || typeof todaySlice !== 'object') return '';
  // Don't try to write a coach paragraph when there's no plan or it's
  // refreshing — the card's body already handles those states.
  if (todaySlice.kind === 'no-plan' || todaySlice.kind === 'refreshing') return '';

  const activities = Array.isArray(todaySlice.activities) ? todaySlice.activities : [];
  const count = activities.length;
  const minutes = totalMinutes(activities);

  // Rest-day branch — soft message is fine, but the card already shows a
  // rest-day visual state with its own copy. Skip the intro on rest days
  // to avoid double-dipping the "rest day" message.
  if (todaySlice.kind === 'rest-day' || todaySlice.kind === 'all-done' || todaySlice.kind === 'plan-complete') {
    return '';
  }

  const skill = topWeakness?.skill || null;
  const accuracyText = (typeof topWeakness?.accuracy === 'number')
    ? ` (${Math.round(topWeakness.accuracy)}% accuracy)`
    : '';
  const minutesText = minutes > 0 ? ` (~${minutes} min)` : '';
  const taskWord = pluralize(count, 'practice set', 'practice sets');

  // Both score + weakness — the richest, two-sentence form.
  if (latestScore !== null && skill) {
    return (
      `Last test you scored ${latestScore} with weakest performance on ${skill}${accuracyText}. ` +
      `Today's ${taskWord} focus on closing that gap${minutesText}.`
    );
  }

  // Score only — first-time-with-results path. Name lands once, mid-sentence,
  // so the line reads like a note to the student rather than a template.
  if (latestScore !== null) {
    const nameClause = firstName ? `, ${firstName}` : '';
    return `Last test you scored ${latestScore}${nameClause}. Today's ${taskWord} build on what's working${minutesText}.`;
  }

  // Weakness only — pre-scoring or score not yet validated.
  if (skill) {
    const lead = firstName ? `${firstName}, your` : 'Your';
    return (
      `${lead} weakest area right now is ${skill}${accuracyText}. ` +
      `Today's ${taskWord} target conceptual gaps you can close${minutesText}.`
    );
  }

  // Activities present but no diagnostic context yet — skip the paragraph
  // rather than render generic filler.
  return '';
}
