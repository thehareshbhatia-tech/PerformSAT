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
function StudyPlanReviewSection({ reviewQueue, onReviewTestWrong, onStartReview, prominent = false }) {
  const [expanded, setExpanded] = useState(false);
  const { testGroups, drillGroups, sessionSize } = useMemo(
    () => partitionReviewQueue(reviewQueue),
    [reviewQueue]
  );

  if (sessionSize === 0) return null;

  const hasOverdue = testGroups.some((g) => g.hasOverdue) || drillGroups.some((g) => g.hasOverdue);

  // Prominent variant — a full open card for the weekly "Beyond this week"
  // section (vs the quiet collapsible strip used below the plan).
  if (prominent) {
    return (
      <section className="sp-bq sp-bq-review" aria-label="Review queue">
        <div className="sp-bq-head">
          <span className="sp-bq-head-icon" aria-hidden="true"><RepeatIcon size={18} /></span>
          <span className="sp-bq-head-title">Review Queue</span>
          <span className={`sp-bq-head-count${hasOverdue ? ' is-due' : ''}`}>{sessionSize} due</span>
        </div>
        {testGroups.length > 0 && (
          <div className="sp-bq-block">
            <div className="sp-bq-block-label">From your tests</div>
            {testGroups.map((g) => (
              <button
                key={g.testId}
                type="button"
                className="sp-bq-row"
                onClick={() => onReviewTestWrong && onReviewTestWrong(g.testId)}
                aria-label={`Review the ${g.count} questions you got wrong on ${g.label}`}
              >
                <span className="sp-bq-row-icon" aria-hidden="true"><DocumentIcon size={16} /></span>
                <span className="sp-bq-row-text">{g.label} · {g.count} {g.count === 1 ? 'miss' : 'misses'} to review</span>
                {g.hasOverdue && <span className="sp-bq-tag is-overdue">Overdue</span>}
                <span className="sp-bq-row-chev" aria-hidden="true"><ChevronRightIcon size={15} /></span>
              </button>
            ))}
          </div>
        )}
        {drillGroups.length > 0 && (
          <div className="sp-bq-block">
            <div className="sp-bq-block-label">Spaced repetition</div>
            {drillGroups.map((g) => (
              <button
                key={g.name}
                type="button"
                className={`sp-bq-row${g.hasOverdue ? ' is-overdue' : ''}`}
                onClick={() => onStartReview && onStartReview(g.items)}
                aria-label={`Start a ${g.count}-question ${g.name} review drill`}
              >
                <span className="sp-bq-row-icon" aria-hidden="true"><RepeatIcon size={16} /></span>
                <span className="sp-bq-row-text">{g.name} · {g.count}</span>
                <span className={`sp-bq-tag${g.hasOverdue ? ' is-overdue' : ''}`}>{g.hasOverdue ? 'Overdue' : 'Due'}</span>
                <span className="sp-bq-row-chev" aria-hidden="true"><ChevronRightIcon size={15} /></span>
              </button>
            ))}
          </div>
        )}
      </section>
    );
  }

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
