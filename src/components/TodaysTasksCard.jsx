import React, { useState } from 'react';
import './TodaysTasksCard.css';

/**
 * TodaysTasksCard — the Dashboard-tab hero. Replaces the legacy AI Practice
 * Banner for users who have a study plan (D-IH-1).
 *
 * Renders a list of activity sub-cards for today (matching Acely's pattern)
 * plus state-specific empty / refreshing / rest-day / plan-complete branches.
 *
 * Visual state matrix:
 *   - 'no-plan'        empty state with "Take a diagnostic test" CTA
 *   - 'refreshing'     spinner + "Updating your plan..."
 *   - 'plan-complete'  celebration "All weeks complete"
 *   - 'rest-day'       "Rest day — see you <nextScheduledDay>"
 *   - 'ready' / 'partial' / 'all-done'  → list of activity sub-cards
 *
 * Each activity sub-card has:
 *   - title + subtitle
 *   - status badge (READY / IN PROGRESS / PRACTICE COMPLETE!)
 *   - time chip (X MIN)
 *   - CTA button (Start → / Continue → / Review Session →)
 *   - Completed cards collapse on click (chevron toggle)
 *
 * Inline adherence ("X of last 7 days") sits in the card footer for every
 * state except no-plan / refreshing.
 *
 * @param {object} props
 * @param {{ kind: string, activities: Array, completedToday?: Array,
 *           day: string, weekNumber: number|null,
 *           nextScheduledDay?: string|null }} props.slice
 * @param {{ uniqueDays: number, totalDays: number, label: string }} [props.adherence]
 * @param {string} [props.dailyIntro]   Per-day editorial paragraph
 * @param {(activity: object) => void} [props.onStartActivity]
 * @param {() => void} [props.onTakeTest]
 * @param {string} [props.firstName]  Name-aware no-plan copy (made-for-me item 13)
 */
function TodaysTasksCard({ slice, adherence, dailyIntro, onStartActivity, onTakeTest, firstName }) {
  const safeSlice = slice || { kind: 'no-plan', activities: [], day: '', weekNumber: null };
  const showAdherence = adherence
    && safeSlice.kind !== 'no-plan'
    && safeSlice.kind !== 'refreshing';

  return (
    <section className="ttc-card" aria-label="Today's tasks">
      {dailyIntro && <p className="ttc-daily-intro">{dailyIntro}</p>}
      {renderBody(safeSlice, onStartActivity, onTakeTest, firstName)}
      {showAdherence && (
        <div className="ttc-adherence" data-testid="ttc-adherence">
          <span className="ttc-adherence-dot" aria-hidden="true" />
          You've practiced {adherence.label.replace(/^\d+/, String(adherence.uniqueDays))}.
        </div>
      )}
    </section>
  );
}

function renderBody(slice, onStartActivity, onTakeTest, firstName) {
  switch (slice.kind) {
    case 'no-plan':
      return (
        <div className="ttc-state ttc-state-empty">
          <div className="ttc-eyebrow">Get started</div>
          <h2 className="ttc-title">
            {firstName
              ? `${firstName}, your study plan starts with one diagnostic test`
              : 'Take your first diagnostic test'}
          </h2>
          <p className="ttc-sub">
            One test builds your whole plan — which skills cost you points, where you rush, and what to fix first.
          </p>
          <button
            type="button"
            className="ttc-cta ttc-cta-primary"
            onClick={() => onTakeTest && onTakeTest()}
          >
            Start a test →
          </button>
        </div>
      );

    case 'refreshing':
      return (
        <div className="ttc-state ttc-state-refreshing" role="status" aria-live="polite">
          <div className="ttc-spinner" aria-hidden="true" />
          <h2 className="ttc-title">Updating your plan…</h2>
          <p className="ttc-sub">
            We're folding your latest test results into the next few weeks.
          </p>
        </div>
      );

    case 'plan-complete':
      return (
        <div className="ttc-state ttc-state-complete">
          <div className="ttc-eyebrow">Plan complete</div>
          <h2 className="ttc-title">All {slice.weekNumber || 0} weeks done — great work.</h2>
          <p className="ttc-sub">
            Take a fresh practice test to see how far you've come.
          </p>
          <button
            type="button"
            className="ttc-cta ttc-cta-secondary"
            onClick={() => onTakeTest && onTakeTest()}
          >
            Take another test →
          </button>
        </div>
      );

    case 'rest-day':
      return (
        <div className="ttc-state ttc-state-rest">
          <div className="ttc-eyebrow">Today · {slice.day}</div>
          <h2 className="ttc-title">Rest day</h2>
          <p className="ttc-sub">
            {slice.nextScheduledDay
              ? <>Next up: <strong>{slice.nextScheduledDay}</strong>. Rest is part of the plan.</>
              : <>Nothing scheduled — enjoy a break.</>}
          </p>
        </div>
      );

    case 'ready':
    case 'partial':
    case 'all-done':
    default: {
      // Build the merged activity list. Incomplete first, completed below.
      const incomplete = Array.isArray(slice.activities) ? slice.activities : [];
      const completed = Array.isArray(slice.completedToday) ? slice.completedToday : [];
      const isAllDone = slice.kind === 'all-done';
      // In all-done, slice.activities contains the completed list (per
      // getTodaySlice's contract). De-dupe by reference.
      const allTasks = isAllDone
        ? incomplete.map(a => ({ activity: a, isComplete: true }))
        : [
            ...incomplete.map(a => ({ activity: a, isComplete: false })),
            ...completed.map(a => ({ activity: a, isComplete: true })),
          ];
      const completedCount = isAllDone ? incomplete.length : completed.length;
      const totalCount = isAllDone ? incomplete.length : (incomplete.length + completed.length);

      return (
        <div className="ttc-state ttc-state-day">
          <div className="ttc-day-header">
            <div className="ttc-eyebrow">
              Today · {slice.day}
              {totalCount > 0 && <> · {completedCount}/{totalCount} done</>}
            </div>
            {isAllDone && slice.nextScheduledDay && (
              <p className="ttc-sub">
                Next session: <strong>{slice.nextScheduledDay}</strong>.
              </p>
            )}
          </div>

          <div className="ttc-activity-list">
            {allTasks.map(({ activity, isComplete }, i) => (
              <ActivityRow
                key={(activity?.moduleId || 'act') + '-' + i}
                activity={activity}
                isComplete={isComplete}
                onStart={onStartActivity}
                index={i}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

function ActivityRow({ activity, isComplete, onStart, index = 0 }) {
  const [expanded, setExpanded] = useState(!isComplete);
  if (!activity) return null;

  // Entrance stagger — each row fades up 40ms after the previous (fadeInUp keyframe
  // in design/animations.js; reduced-motion is handled globally). Capped so a long
  // list never feels slow to settle.
  const entranceStyle = {
    animation: 'fadeInUp 320ms cubic-bezier(0.25, 0.1, 0.25, 1) both',
    animationDelay: `${Math.min(index, 6) * 40}ms`,
  };

  const title = activity.title || 'Practice session';
  const subtitle = activity.subtitle || activity.skillName || '';
  const minutes = typeof activity.duration === 'number' ? activity.duration : null;

  // Status: completed > in-progress (future) > ready
  const status = isComplete ? 'complete' : 'ready';

  const handleStart = () => {
    if (typeof onStart === 'function' && activity?.moduleId) onStart(activity);
  };

  const collapsed = isComplete && !expanded;

  return (
    <div className={`ttc-activity ttc-activity-${status}${collapsed ? ' is-collapsed' : ''}`} style={entranceStyle}>
      <div className="ttc-activity-row">
        <div className="ttc-activity-text">
          <div className="ttc-activity-title">{title}</div>
          {subtitle && !collapsed && (
            <div className="ttc-activity-sub">{subtitle}</div>
          )}
        </div>

        <div className="ttc-activity-meta">
          {isComplete ? (
            <span className="ttc-badge ttc-badge-success">Done</span>
          ) : minutes !== null ? (
            <span className="ttc-chip">{minutes} MIN</span>
          ) : null}
        </div>
      </div>

      {!collapsed && (
        <div className="ttc-activity-actions">
          {isComplete ? (
            <>
              <button
                type="button"
                className="ttc-activity-cta ttc-activity-cta-secondary"
                onClick={handleStart}
                disabled={!activity?.moduleId}
              >
                Review Session →
              </button>
              <button
                type="button"
                className="ttc-activity-toggle"
                onClick={() => setExpanded(false)}
                aria-label="Collapse this completed task"
              >
                ▴
              </button>
            </>
          ) : (
            <button
              type="button"
              className="ttc-activity-cta ttc-activity-cta-primary"
              onClick={handleStart}
              disabled={!activity?.moduleId}
            >
              Start →
            </button>
          )}
        </div>
      )}

      {collapsed && (
        <button
          type="button"
          className="ttc-activity-toggle"
          onClick={() => setExpanded(true)}
          aria-label="Expand this completed task"
        >
          ▾
        </button>
      )}
    </div>
  );
}

/**
 * Pick the first activity worth offering as the CTA. Strategy-only drills
 * with no moduleId don't navigate cleanly, so we skip them and fall through.
 * If every activity is strategy-only we hand back the first one anyway —
 * the user gets a CTA instead of a silent fail (FM-13).
 *
 * Kept as a named export for the downstream tests that lock the FM-13
 * contract; not used by the new render path (which lists every activity).
 *
 * @param {Array<object>} activities
 * @returns {object | null}
 */
export function pickStartableActivity(activities) {
  if (!Array.isArray(activities) || activities.length === 0) return null;
  const startable = activities.find(a => a && a.moduleId);
  return startable || activities[0];
}

export default TodaysTasksCard;
