import React from 'react';
import './PredictedVsActualCard.css';

/**
 * PredictedVsActualCard — Day 5 ADD B (CEO recommendation).
 *
 * Surfaces predictionEngine.js's validation history. Currently dead in UI
 * — the engine generates predictions after every test and validates them
 * against subsequent tests, but no surface ever rendered the result. This
 * card is the first.
 *
 * Visible-after-2nd-test gate:
 *   The parent passes `summary` from `summarizePredictions(predictionLog,
 *   practiceTestResults)`. That function returns null when there's no
 *   validated prediction yet, so the parent simply doesn't render the card.
 *
 * Copy:
 *   "We predicted you'd score 1340-1420. You scored 1395 — within range."
 *   "7 of 9 historical predictions correct (78%)."
 *
 * @param {object} props
 * @param {{ latest: { low, high, actualScore, scoreInRange },
 *           hits, total, hitRate }} props.summary
 */
function PredictedVsActualCard({ summary }) {
  if (!summary || !summary.latest) return null;

  const { latest, hits, total, hitRate } = summary;
  const { low, high, actualScore, scoreInRange } = latest;
  const hitRatePct = Math.round(hitRate * 100);

  return (
    <section className="pva-card" aria-label="Predicted vs actual score">
      <div className="pva-eyebrow">Prediction accuracy</div>

      <p className="pva-headline">
        We predicted you’d score{' '}
        <strong className="pva-range">{low}–{high}</strong>.
        {actualScore !== null && (
          <>
            {' '}You scored{' '}
            <strong className={`pva-actual ${scoreInRange ? 'is-in-range' : 'is-out'}`}>
              {actualScore}
            </strong>
            {' '}— {scoreInRange ? 'within range' : 'outside range'}.
          </>
        )}
      </p>

      <p className="pva-stats">
        <span className="pva-stat-num">{hits} of {total}</span>{' '}
        historical predictions correct
        {total > 0 && <span className="pva-rate"> ({hitRatePct}%)</span>}.
      </p>
    </section>
  );
}

export default PredictedVsActualCard;
