import React, { useMemo } from 'react';
import { partitionReviewQueue } from '../services/selectors/planReviewQueue';
import { DocumentIcon, RepeatIcon, ChevronRightIcon } from '../design/icons';

/**
 * StudyPlanReviewSection — the Review Queue, embedded in the Study Plan.
 *
 * Two affordances, matching how the queue is sourced:
 *   - "From your tests": each group DEEP-LINKS (onReviewTestWrong) to the
 *     specific wrong questions on that test (steps into the first miss).
 *   - "Spaced repetition": each group launches the existing review drill
 *     (onStartReview) with that group's due items.
 *
 * Renders nothing when nothing is due. Section-agnostic: it ignores the plan's
 * Math/R&W filter because a single queue spans both subjects.
 *
 * @param {object} props
 * @param {object} props.reviewQueue — progress/{uid}.reviewQueue
 * @param {(testId: string) => void} props.onReviewTestWrong
 * @param {(items: Array) => void} props.onStartReview
 */
function StudyPlanReviewSection({ reviewQueue, onReviewTestWrong, onStartReview }) {
  const { testGroups, drillGroups, sessionSize } = useMemo(
    () => partitionReviewQueue(reviewQueue),
    [reviewQueue]
  );

  if (sessionSize === 0) return null;

  return (
    <section className="sp-section sp-review" aria-label="Review queue">
      <div className="sp-review-head">
        <span className="sp-review-icon" aria-hidden="true"><RepeatIcon size={18} /></span>
        <h3 className="sp-review-title">Review Queue</h3>
        <span className="sp-review-due">{sessionSize} due</span>
      </div>

      {testGroups.length > 0 && (
        <div className="sp-review-block">
          <div className="sp-review-block-label">From your tests</div>
          <ul className="sp-review-list">
            {testGroups.map((g) => (
              <li key={g.testId}>
                <button
                  type="button"
                  className="sp-review-row"
                  onClick={() => onReviewTestWrong && onReviewTestWrong(g.testId)}
                  aria-label={`Review the ${g.count} questions you got wrong on ${g.label}`}
                >
                  <span className="sp-review-row-icon" aria-hidden="true"><DocumentIcon size={16} /></span>
                  <span className="sp-review-row-text">
                    {g.label} · {g.count} {g.count === 1 ? 'miss' : 'misses'} to review
                  </span>
                  {g.hasOverdue && <span className="sp-review-tag is-overdue">Overdue</span>}
                  <span className="sp-review-chev" aria-hidden="true"><ChevronRightIcon size={16} /></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {drillGroups.length > 0 && (
        <div className="sp-review-block">
          <div className="sp-review-block-label">Spaced repetition</div>
          <ul className="sp-review-list">
            {drillGroups.map((g) => (
              <li key={g.name}>
                <button
                  type="button"
                  className="sp-review-row"
                  onClick={() => onStartReview && onStartReview(g.items)}
                  aria-label={`Start a ${g.count}-question ${g.name} review drill`}
                >
                  <span className="sp-review-row-icon" aria-hidden="true"><RepeatIcon size={16} /></span>
                  <span className="sp-review-row-text">{g.name} · {g.count}</span>
                  <span className={`sp-review-tag${g.hasOverdue ? ' is-overdue' : ''}`}>
                    {g.hasOverdue ? 'Overdue' : 'Due'}
                  </span>
                  <span className="sp-review-chev" aria-hidden="true"><ChevronRightIcon size={16} /></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default StudyPlanReviewSection;
