import React, { useMemo, useState } from 'react';
import { partitionReviewQueue } from '../services/selectors/planReviewQueue';
import { DocumentIcon, RepeatIcon, ChevronRightIcon } from '../design/icons';

/** Inline bookmark glyph — matches the flag toggle in the drill shells. */
const BookmarkGlyph = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

/** Humanize a skill slug ('slope-intercept-form' → 'Slope Intercept Form'). */
const humanizeSkill = (slug) =>
  String(slug || '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

/** Short "where it came from" label for a flagged item. */
const flagSourceLabel = (f) => {
  if (f.testLabel) return f.testLabel;
  const src = String(f.source || '');
  if (f.testId || src.startsWith('test')) return 'a practice test';
  if (src.startsWith('practice-bank')) return 'the Practice Bank';
  if (src === 'adaptive') return 'adaptive practice';
  return 'practice';
};

/** Compact relative time ("just now" / "3d ago" / "Mar 4"). */
const flagTimeAgo = (iso) => {
  if (!iso) return '';
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return '';
  const mins = Math.round((Date.now() - then) / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.round(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(then).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};

/**
 * The "Flagged to review" block — the questions the student bookmarked in a
 * drill or on a test. Rendered inside the Review Queue so it stays quiet.
 * Per item: Re-drill (routes through the 3-tier cascade) + Unflag. Per section:
 * "Drill all flagged" when 2+ are flagged in that section.
 */
function FlaggedBlock({ flaggedGroups, onRedrillFlagged, onUnflagQuestion }) {
  const math = flaggedGroups?.math || [];
  const rw = flaggedGroups?.rw || [];
  if (math.length === 0 && rw.length === 0) return null;
  const bothSections = math.length > 0 && rw.length > 0;

  return (
    <div className="sp-bq-block sp-flagged-block">
      <div className="sp-bq-block-label">Flagged to review</div>
      {[{ sec: 'math', label: 'Math', items: math }, { sec: 'rw', label: 'Reading & Writing', items: rw }].map(({ sec, label, items }) => {
        if (items.length === 0) return null;
        return (
          <div key={sec} className="sp-flagged-group">
            {bothSections && <div className="sp-flagged-subhead">{label}</div>}
            {items.map((f) => {
              const title = f.snippet || (f.skillId ? humanizeSkill(f.skillId) : 'Flagged question');
              return (
                <div key={f.key} className="sp-flagged-row">
                  <span className="sp-flagged-icon" aria-hidden="true"><BookmarkGlyph size={15} /></span>
                  <span className="sp-flagged-text">
                    <span className="sp-flagged-title">{title}</span>
                    <span className="sp-flagged-meta">From {flagSourceLabel(f)} · {flagTimeAgo(f.flaggedAt)}</span>
                  </span>
                  <span className="sp-flagged-actions">
                    {onRedrillFlagged && (
                      <button
                        type="button"
                        className="sp-flagged-redrill"
                        onClick={() => onRedrillFlagged([f], sec)}
                        aria-label={`Re-drill questions like this flagged ${label} question`}
                      >
                        Re-drill
                      </button>
                    )}
                    {onUnflagQuestion && (
                      <button
                        type="button"
                        className="sp-flagged-unflag"
                        onClick={() => onUnflagQuestion(f.key)}
                        aria-label="Remove this question from your flagged list"
                      >
                        Unflag
                      </button>
                    )}
                  </span>
                </div>
              );
            })}
            {items.length >= 2 && onRedrillFlagged && (
              <button
                type="button"
                className="sp-flagged-drillall"
                onClick={() => onRedrillFlagged(items, sec)}
                aria-label={`Drill all ${items.length} flagged ${label} questions`}
              >
                Drill all {label} flagged ({items.length})
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

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
function StudyPlanReviewSection({ reviewQueue, onReviewTestWrong, onStartReview, prominent = false, flaggedGroups = null, onRedrillFlagged, onUnflagQuestion }) {
  const [expanded, setExpanded] = useState(false);
  const { testGroups, drillGroups, sessionSize } = useMemo(
    () => partitionReviewQueue(reviewQueue),
    [reviewQueue]
  );

  const flaggedTotal = (flaggedGroups?.math?.length || 0) + (flaggedGroups?.rw?.length || 0);
  // Nothing due AND nothing flagged → render nothing.
  if (sessionSize === 0 && flaggedTotal === 0) return null;

  const hasOverdue = testGroups.some((g) => g.hasOverdue) || drillGroups.some((g) => g.hasOverdue);
  const countLabel = sessionSize > 0 ? `${sessionSize} due` : `${flaggedTotal} flagged`;

  // Prominent variant — a full open card for the weekly "Beyond this week"
  // section (vs the quiet collapsible strip used below the plan).
  if (prominent) {
    return (
      <section className="sp-bq sp-bq-review" aria-label="Review queue">
        <div className="sp-bq-head">
          <span className="sp-bq-head-icon" aria-hidden="true"><RepeatIcon size={18} /></span>
          <span className="sp-bq-head-title">Review Queue</span>
          <span className={`sp-bq-head-count${hasOverdue ? ' is-due' : ''}`}>{countLabel}</span>
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
        <FlaggedBlock
          flaggedGroups={flaggedGroups}
          onRedrillFlagged={onRedrillFlagged}
          onUnflagQuestion={onUnflagQuestion}
        />
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
        <span className={`sp-tuneup-count${hasOverdue ? ' is-due' : ''}`}>{countLabel}</span>
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

          <FlaggedBlock
            flaggedGroups={flaggedGroups}
            onRedrillFlagged={onRedrillFlagged}
            onUnflagQuestion={onUnflagQuestion}
          />
        </div>
      )}
    </section>
  );
}

export default StudyPlanReviewSection;
