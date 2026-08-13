/**
 * estimatedBaseline — the diagnostic's estimated score band as the dashboard
 * starting score, shown ONLY until the first real practice test lands.
 *
 * Display rule (Diagnostic v2 spec, 2026-08-13): the estimate fills the
 * "Current Score" slot while the account has NO scoreable full-test attempt;
 * the moment one exists, full-test scores outrank and the estimate disappears
 * everywhere. It never writes user.currentScore — it's a read-time fallback.
 *
 * Pure selector: no Firebase, no React.
 */

import { isScoreableAttempt } from './latestTestStats';

/** A SCOREABLE attempt on any row (or a legacy aggregate-only row). Uses the
 *  same gate as the Current Score hero (isScoreableAttempt) — a blank/
 *  abandoned attempt persists a floor scaledScore that must not suppress the
 *  estimate while ALSO not rendering as a score (that left NO hero at all). */
const rowHasScore = (row) => {
  if (!row || typeof row !== 'object') return false;
  if (Array.isArray(row.attempts)) {
    return row.attempts.some((a) => isScoreableAttempt(a));
  }
  return Number.isFinite(row.bestScaledScore);
};

/**
 * @param {object|null} miniDiagnostic - progress.miniDiagnostic record (carries scoreBand)
 * @param {object|null} practiceTestResults - progress.practiceTestResults map
 * @returns {{low: number, high: number, mid: number, rwBand: object|null, mathBand: object|null}|null}
 *   Composite estimate (mid snapped to the 10-point grid), or null when a real
 *   test score exists / no diagnostic band is stored.
 */
export function getEstimatedBaseline(miniDiagnostic, practiceTestResults) {
  const band = miniDiagnostic?.scoreBand;
  if (!band || !Number.isFinite(band.low) || !Number.isFinite(band.high)) return null;
  const hasRealScore = Object.values(practiceTestResults || {}).some(rowHasScore);
  if (hasRealScore) return null;
  return {
    low: band.low,
    high: band.high,
    mid: Math.round((band.low + band.high) / 2 / 10) * 10,
    rwBand: band.rwBand || null,
    mathBand: band.mathBand || null,
  };
}
