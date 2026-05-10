import React from 'react';
import { getCompletedTests } from '../../services/selectors/completedTests';
import './PastTestReviewIndex.css';

/**
 * PastTestReviewIndex — list of completed practice tests for the
 * Past-Test-Review surface (Phase 2 of PAST_TEST_REVIEW_PLAN.md).
 *
 * Renders one card per completed test, sorted newest-first. Each card shows
 * date, raw + scaled score, accuracy, and a "Review →" CTA. Empty state
 * for students with zero completed tests.
 *
 * Pure presentation. Reads `practiceTestResults` (the per-student aggregate
 * Firestore doc), not the per-attempt snapshot subcollection — the snapshot
 * is fetched on demand by TestReviewDetail (Phase 3) when a card is selected.
 *
 * @param {object} props
 * @param {object} [props.practiceTestResults] keyed by testId
 * @param {(testId: string, latestAttemptId: string|null) => void} [props.onSelectTest]
 * @param {() => void} [props.onTakeTest]   CTA shown in the empty state
 * @param {() => void} [props.onBack]
 */
function PastTestReviewIndex({
  practiceTestResults = {},
  onSelectTest,
  onTakeTest,
  onBack,
}) {
  // Filter out attempts that have no per-question telemetry — clicking
  // them would land the user on TestReviewDetail's empty state. The Study
  // Plan CTA already gates on requireItemDetails > 0, so users reaching
  // this surface always have at least one viable test. Older attempts that
  // lack questionDetails (stripped to keep the Firestore doc under 1MB)
  // are hidden from the list.
  const tests = getCompletedTests(practiceTestResults, { requireItemDetails: true });
  const isEmpty = tests.length === 0;

  return (
    <section className="ptr-index" aria-label="Review your tests">
      <header className="ptr-index-header">
        {onBack && (
          <button
            type="button"
            className="ptr-back"
            onClick={onBack}
            aria-label="Back to dashboard"
          >
            ← Back
          </button>
        )}
        <h1 className="ptr-title">Review Your Tests</h1>
        <p className="ptr-sub">
          See your wrong answers explained, retry items you missed, and
          track how you're improving across attempts.
        </p>
      </header>

      {isEmpty ? (
        <div className="ptr-empty" data-testid="ptr-empty">
          <div className="ptr-empty-eyebrow">No completed tests yet</div>
          <p className="ptr-empty-body">
            Once you finish a practice test, you can review every item here
            with full explanations and an error breakdown.
          </p>
          {onTakeTest && (
            <button
              type="button"
              className="ptr-cta ptr-cta-primary"
              onClick={onTakeTest}
            >
              Start a practice test →
            </button>
          )}
        </div>
      ) : (
        <ol className="ptr-list" data-testid="ptr-list">
          {tests.map((t) => (
            <TestCard
              key={t.testId}
              test={t}
              onSelect={() => onSelectTest && onSelectTest(t.testId, t.latestAttemptId)}
            />
          ))}
        </ol>
      )}
    </section>
  );
}

function TestCard({ test, onSelect }) {
  const accuracy = computeAccuracy(test);
  const completedLabel = formatDate(test.completedAt);
  const scoreLabel = formatScore(test);
  const attemptsLabel = test.totalAttempts > 1 ? `${test.totalAttempts} attempts` : '1 attempt';

  return (
    <li className="ptr-card">
      <button
        type="button"
        className="ptr-card-button"
        onClick={onSelect}
        aria-label={`Review ${test.testTitle}, ${accuracy}% accuracy, ${attemptsLabel}`}
      >
        <div className="ptr-card-header">
          <h2 className="ptr-card-title">{test.testTitle}</h2>
          <span className="ptr-card-meta">
            {completedLabel} · {attemptsLabel}
          </span>
        </div>

        <div className="ptr-card-stats">
          <div className="ptr-stat">
            <div className="ptr-stat-value">{accuracy}%</div>
            <div className="ptr-stat-label">Accuracy</div>
          </div>
          <div className="ptr-stat">
            <div className="ptr-stat-value">{scoreLabel}</div>
            <div className="ptr-stat-label">Score</div>
          </div>
          <div className="ptr-stat">
            <div className="ptr-stat-value">
              {test.rawScore ?? '—'}
              <span className="ptr-stat-suffix">/{test.totalQuestions ?? '—'}</span>
            </div>
            <div className="ptr-stat-label">Correct</div>
          </div>
        </div>

        <div
          className="ptr-card-accuracy-bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={accuracy}
        >
          <div
            className="ptr-card-accuracy-fill"
            style={{ width: `${accuracy}%` }}
          />
        </div>

        <div className="ptr-card-cta">Review →</div>
      </button>
    </li>
  );
}

// Exported for unit testing — the project doesn't use @testing-library/react,
// so we test pure helpers directly (matches CalendarMonth + Toaster pattern).

/**
 * computeAccuracy(test) — accuracy % rounded to nearest int.
 * Defensive: returns 0 for missing or zero totalQuestions.
 */
export function computeAccuracy(test) {
  const raw = test?.rawScore;
  const total = test?.totalQuestions;
  if (!total || total <= 0 || typeof raw !== 'number') return 0;
  return Math.round((raw / total) * 100);
}

/**
 * formatScore(test) — display value for the Score stat.
 * Falls back to module-score sum for multi-section tests with null scaled,
 * then to em-dash if no usable score exists.
 */
export function formatScore(test) {
  if (typeof test?.scaledScore === 'number' && test.scaledScore > 0) {
    return test.scaledScore;
  }
  if (test?.isMultiSection && Array.isArray(test.moduleScores) && test.moduleScores.length) {
    const sum = test.moduleScores.reduce((s, m) => s + (m?.score ?? 0), 0);
    if (sum > 0) return sum;
  }
  return '—';
}

/**
 * formatDate(ts) — locale "Mon DD, YYYY". Accepts ISO string or Firestore
 * { seconds, nanoseconds } shape. Falls back to "Date unknown".
 */
export function formatDate(ts) {
  if (!ts) return 'Date unknown';
  let ms = null;
  if (typeof ts === 'string') ms = Date.parse(ts);
  else if (typeof ts === 'object' && typeof ts.seconds === 'number') ms = ts.seconds * 1000;
  else if (typeof ts === 'number') ms = ts;
  if (!Number.isFinite(ms)) return 'Date unknown';
  return new Date(ms).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

export default PastTestReviewIndex;
