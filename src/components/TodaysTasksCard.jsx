import React from 'react';
import './TodaysTasksCard.css';

/**
 * TodaysTasksCard — the Dashboard-tab hero. Replaces the legacy AI Practice
 * Banner for users who have a study plan (D-IH-1).
 *
 * Pure presentational. Takes the result of `getTodaySlice` and
 * `getSessionAdherence` plus action callbacks.
 *
 * Visual state matrix (the kind from the slice drives the layout):
 *   - 'no-plan'        empty state with "Take a diagnostic test" CTA
 *   - 'refreshing'     spinner + "Updating your plan..." copy
 *   - 'plan-complete'  celebration "All weeks complete"
 *   - 'rest-day'       "Rest day — see you <nextScheduledDay>"
 *   - 'all-done'       "All done for today — next up <nextScheduledDay>"
 *   - 'partial'        "X done, Y remaining" + next-CTA
 *   - 'ready'          primary CTA "Start: <activity.title> (~Z min)"
 *
 * FM-13 fallthrough:
 *   When the first incomplete activity is a strategy-only drill (no
 *   moduleId), the CTA falls through to the next non-strategy activity.
 *   If every activity is strategy-only, we still render the strategy CTA
 *   so the user has SOMETHING to click — the failure mode the test plan
 *   names is "silent fail," and the fix is "always render a CTA."
 *
 * Inline adherence:
 *   "X of last 7 days" lives in the card footer for every state except
 *   no-plan and refreshing (where it would have no anchor).
 *
 * @param {object} props
 * @param {{ kind: string, activities: Array, day: string,
 *           weekNumber: number|null, nextScheduledDay?: string|null }} props.slice
 * @param {{ uniqueDays: number, totalDays: number, label: string }} [props.adherence]
 * @param {string} [props.dailyIntro]   Per-day editorial paragraph (Day-1 Acely-polish)
 * @param {(activity: object) => void} [props.onStartActivity]
 * @param {() => void} [props.onTakeTest]
 */
function TodaysTasksCard({ slice, adherence, dailyIntro, onStartActivity, onTakeTest }) {
  const safeSlice = slice || { kind: 'no-plan', activities: [], day: '', weekNumber: null };
  const showAdherence = adherence
    && safeSlice.kind !== 'no-plan'
    && safeSlice.kind !== 'refreshing';

  return (
    <section className="ttc-card" aria-label="Today's tasks">
      {dailyIntro && (
        <p className="ttc-daily-intro">{dailyIntro}</p>
      )}
      {renderBody(safeSlice, onStartActivity, onTakeTest)}
      {showAdherence && (
        <div className="ttc-adherence" data-testid="ttc-adherence">
          <span className="ttc-adherence-dot" aria-hidden="true" />
          You've practiced {adherence.label.replace(/^\d+/, String(adherence.uniqueDays))}.
        </div>
      )}
    </section>
  );
}

function renderBody(slice, onStartActivity, onTakeTest) {
  switch (slice.kind) {
    case 'no-plan':
      return (
        <div className="ttc-state ttc-state-empty">
          <div className="ttc-eyebrow">Get started</div>
          <h2 className="ttc-title">Take your first diagnostic test</h2>
          <p className="ttc-sub">
            We'll build a personalized study plan from your test results.
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

    case 'all-done':
      return (
        <div className="ttc-state ttc-state-done">
          <div className="ttc-eyebrow">Today · {slice.day}</div>
          <h2 className="ttc-title">All done for today.</h2>
          <p className="ttc-sub">
            {slice.nextScheduledDay
              ? <>Next session: <strong>{slice.nextScheduledDay}</strong>.</>
              : <>You're caught up. Tomorrow's plan refreshes overnight.</>}
          </p>
        </div>
      );

    case 'partial': {
      const cta = pickStartableActivity(slice.activities);
      const completedCount = (slice.completedToday || []).length;
      const totalToday = completedCount + (slice.activities || []).length;
      return (
        <div className="ttc-state ttc-state-partial">
          <div className="ttc-eyebrow">Today · {slice.day} · {completedCount}/{totalToday} done</div>
          <h2 className="ttc-title">{ctaCopy(cta)}</h2>
          <p className="ttc-sub">{ctaSubtitle(cta)}</p>
          {cta && (
            <button
              type="button"
              className="ttc-cta ttc-cta-primary"
              onClick={() => onStartActivity && onStartActivity(cta)}
            >
              Continue →
            </button>
          )}
        </div>
      );
    }

    case 'ready':
    default: {
      const cta = pickStartableActivity(slice.activities);
      return (
        <div className="ttc-state ttc-state-ready">
          <div className="ttc-eyebrow">Today · {slice.day}</div>
          <h2 className="ttc-title">{ctaCopy(cta)}</h2>
          <p className="ttc-sub">{ctaSubtitle(cta)}</p>
          {cta && (
            <button
              type="button"
              className="ttc-cta ttc-cta-primary"
              onClick={() => onStartActivity && onStartActivity(cta)}
            >
              Start →
            </button>
          )}
        </div>
      );
    }
  }
}

/**
 * Pick the first activity worth offering as the CTA. Strategy-only drills
 * with no moduleId can land in the queue but don't navigate cleanly, so we
 * skip them and fall through. If every activity is strategy-only we hand
 * back the first one anyway — the user gets a CTA instead of a silent fail
 * (FM-13 from the eng-review test plan).
 *
 * @param {Array<object>} activities
 * @returns {object | null}
 */
export function pickStartableActivity(activities) {
  if (!Array.isArray(activities) || activities.length === 0) return null;
  const startable = activities.find(a => a && a.moduleId);
  return startable || activities[0];
}

function ctaCopy(activity) {
  if (!activity) return 'No activities scheduled.';
  const title = activity.title || activity.subtitle || 'Practice session';
  // Plan calls for "Start: Linear Equations Drill (15 q · ~20 min)" but
  // question count isn't stored on activities. We surface duration only.
  const minutes = typeof activity.duration === 'number' ? activity.duration : null;
  return minutes ? `Start: ${title} (~${minutes} min)` : `Start: ${title}`;
}

function ctaSubtitle(activity) {
  if (!activity) return '';
  return activity.subtitle || activity.skillName || '';
}

export default TodaysTasksCard;
