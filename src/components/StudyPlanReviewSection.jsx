import React, { useMemo, useState } from 'react';
import { partitionReviewQueue } from '../services/selectors/planReviewQueue';
import { DocumentIcon, RepeatIcon, ChevronRightIcon } from '../design/icons';

/**
 * StudyPlanReviewSection — the Review Queue, embedded BELOW the Study Plan.
 *
 * Presented as a quiet, collapsible "tune-up" strip so it stays available
 * without out-shouting the actual plan above it. Collapsed by default: a single
 * muted row with a "N due" count. Expanding reveals the two affordances:
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
  const [expanded, setExpanded] = useState(false);
  const { testGroups, drillGroups, sessionSize } = useMemo(
    () => partitionReviewQueue(reviewQueue),
    [reviewQueue]
  );

  if (sessionSize === 0) return null;

  const hasOverdue = testGroups.some((g) => g.hasOverdue) || drillGroups.some((g) => g.hasOverdue);

  return (
    <section className={`sp-tuneup${expanded ? ' is-open' : ''}`} aria-label="Review queue">
      <button
        type="button"
        className="sp-tuneup-bar"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        <span className="sp-tuneup-icon" aria-hidden="true"><RepeatIcon size={16} /></span>
        <span className="sp-tuneup-label">Review Queue</span>
        <span className={`sp-tuneup-count${hasOverdue ? ' is-due' : ''}`}>{sessionSize} due</span>
        <span className={`sp-tuneup-chev${expanded ? ' is-open' : ''}`} aria-hidden="true">
          <ChevronRightIcon size={16} />
        </span>
      </button>

      {expanded && (
        <div className="sp-tuneup-body">
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
        </div>
      )}
    </section>
  );
}

export default StudyPlanReviewSection;
