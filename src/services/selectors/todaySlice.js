/**
 * todaySlice.js — pure "what should the student do today" read accessor.
 *
 * Extracted from studyPlanGenerator.js (Stage 2c of the bundle-split plan):
 * the generator statically imports the math bank (getQuestionById) and the
 * practice-routing service, so dashboard components that only needed this
 * selector dragged the whole corpus into their chunk. This module has ZERO
 * service/data imports — keep it that way.
 *
 * studyPlanGenerator re-exports getTodaySlice for back-compat; new consumers
 * should import from here (matches the selectors/ convention in CLAUDE.md).
 */

const DAY_ORDER = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * Return the next day name (Sunday-cycled) in the same week that has at
 * least one scheduled activity. Returns null if no such day exists.
 *
 * @param {{activities?: Array<{day: string}>}} week
 * @param {string} fromDayName
 * @returns {string | null}
 */
function getNextScheduledDay(week, fromDayName) {
  const activities = (week && Array.isArray(week.activities)) ? week.activities : [];
  if (activities.length === 0) return null;
  const startIdx = DAY_ORDER.indexOf(fromDayName);
  if (startIdx < 0) return null;
  const scheduledDays = new Set(activities.map(a => a.day));
  for (let step = 1; step <= 7; step++) {
    const candidate = DAY_ORDER[(startIdx + step) % 7];
    if (scheduledDays.has(candidate)) return candidate;
  }
  return null;
}

/**
 * getTodaySlice — return a tagged result describing what (if anything)
 * the student should do today. Pure function over a plan + a day name.
 *
 * The returned `kind` lets a card pick its visual state without re-deriving
 * the same logic at render time:
 *   - `'no-plan'`        plan is null/undefined/empty
 *   - `'refreshing'`     plan.isRefreshing flag is set (post-test regen)
 *   - `'plan-complete'`  every week's activities are completed
 *   - `'rest-day'`       no activities scheduled today this week
 *   - `'all-done'`       activities were scheduled today, all completed
 *   - `'partial'`        activities scheduled today, some done
 *   - `'ready'`          activities scheduled today, none done
 *
 * The day field on activities is a NAME ('Wednesday'), not an index — HC2
 * from the /autoplan eng review. We string-match accordingly.
 *
 * @param {object|null} plan          studyPlan with `weeks[].activities[].day`
 * @param {string} todayDayName       e.g. 'Wednesday'
 * @returns {{
 *   kind: string,
 *   activities: Array,
 *   completedToday?: Array,
 *   day: string,
 *   weekNumber: number | null,
 *   nextScheduledDay?: string | null,
 * }}
 */
export function getTodaySlice(plan, todayDayName) {
  const empty = { kind: 'no-plan', activities: [], day: todayDayName, weekNumber: null };

  if (!plan || typeof plan !== 'object') return empty;
  if (plan.isRefreshing === true) {
    return { kind: 'refreshing', activities: [], day: todayDayName, weekNumber: null };
  }
  if (!Array.isArray(plan.weeks) || plan.weeks.length === 0) return empty;

  const { weeks } = plan;

  // Current week = first week with any incomplete activity. Mirrors the
  // existing StudyPlanDashboard.jsx:123 derivation. Lesson-type activities
  // are excluded — see studyPlanGenerator.js:472 for the cleanup note.
  const isVisibleActivity = (a) => a && a.type !== 'lesson';
  const currentWeekIndex = weeks.findIndex(
    w => Array.isArray(w?.activities) && w.activities.filter(isVisibleActivity).some(a => !a.completed),
  );

  if (currentWeekIndex < 0) {
    // Every week's activities are completed.
    return {
      kind: 'plan-complete',
      activities: [],
      day: todayDayName,
      weekNumber: weeks[weeks.length - 1]?.weekNumber || weeks.length,
    };
  }

  const week = weeks[currentWeekIndex];
  const todayActivities = (week.activities || [])
    .filter(isVisibleActivity)
    .filter(a => a.day === todayDayName);

  if (todayActivities.length === 0) {
    return {
      kind: 'rest-day',
      activities: [],
      day: todayDayName,
      weekNumber: week.weekNumber,
      nextScheduledDay: getNextScheduledDay(week, todayDayName),
    };
  }

  const incomplete = todayActivities.filter(a => !a.completed);
  const completedToday = todayActivities.filter(a => a.completed);

  if (incomplete.length === 0) {
    return {
      kind: 'all-done',
      activities: completedToday,
      completedToday,
      day: todayDayName,
      weekNumber: week.weekNumber,
      nextScheduledDay: getNextScheduledDay(week, todayDayName),
    };
  }

  return {
    kind: completedToday.length > 0 ? 'partial' : 'ready',
    activities: incomplete,
    completedToday,
    day: todayDayName,
    weekNumber: week.weekNumber,
  };
}
