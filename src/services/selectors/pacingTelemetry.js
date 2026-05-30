/**
 * pacingTelemetry.js — derive the per-question timing vector the pacing engine
 * (analyzePacingProfile / PacingDrillCard) consumes from the data PracticeTest
 * actually persists.
 *
 * Why a derivation: the dashboard used to read `diagnosticData.questionTelemetry`,
 * an array that is only written to the IN-PROGRESS saveProgress doc — never to the
 * completed attempt. So the pacing card always saw an empty array and recommended
 * the speed_rounds default ("no telemetry yet"). `diagnosticData.questionDetails`
 * (timeSpent / isCorrect / difficulty per question) IS persisted on the attempt
 * (kept on the latest attempt by practiceTestService's trim), so we map from that.
 *
 * Uses the MOST RECENT attempt that carries telemetry: pacing is a "where do you
 * waste time right now" signal, so the latest test is the right basis. Aggregating
 * every historical attempt both dilutes the current profile and lets stale runs
 * pile up nonsense counts (e.g. "338 late questions unanswered").
 *
 * Shape matches analyzePacingProfile's contract: { timeSpent, difficulty,
 * wasCorrect, questionIndex }, questionIndex 0-based within the attempt
 * (the engine's endgame heuristic keys off question position).
 *
 * @param {Object<string, {attempts?: Array}>} practiceTestResults
 * @returns {Array<{timeSpent:number, difficulty:string|null, wasCorrect:boolean, questionIndex:number}>}
 */
export function buildPacingTelemetry(practiceTestResults = {}) {
  const withTelemetry = Object.values(practiceTestResults || {})
    .flatMap((t) => (t?.attempts || []))
    .filter((a) => a?.diagnosticData?.questionDetails && typeof a.diagnosticData.questionDetails === 'object');

  if (withTelemetry.length === 0) return [];

  // Most recent attempt (by completedAt) = the current pacing signal.
  withTelemetry.sort((a, b) => new Date(b.completedAt || 0) - new Date(a.completedAt || 0));
  const details = withTelemetry[0].diagnosticData.questionDetails;

  return Object.values(details).map((q, i) => ({
    timeSpent: q?.timeSpent || 0,
    difficulty: q?.difficulty || null,
    wasCorrect: !!q?.isCorrect,
    questionIndex: i,
  }));
}
