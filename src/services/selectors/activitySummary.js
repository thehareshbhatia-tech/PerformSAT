/**
 * activitySummary.js — deterministic "at a glance" metadata for a study-plan
 * activity: the summary chip (minutes + question count) and the expandable
 * per-skill breakdown rows the Weekly View reveals under each card.
 *
 * Why estimates: the persisted plan stores a `duration` (minutes) per activity
 * but NO question list, so question counts are estimated by activity kind and
 * section and flagged with a leading "~". When `duration` is absent (e.g. a
 * student-added custom task) minutes are estimated from the question count too.
 * Every value here is a pure, deterministic function of the activity — no
 * Firestore, no network, no randomness — so it renders identically each time.
 *
 * The breakdown mirrors buildPlanModule's "rounds" projection in
 * StudyPlanDashboard.jsx: an activity's missed SAT patterns become rows, and
 * skill-level drill evidence (skillProgress) is projected onto them. Honest at
 * skill grain; per-pattern telemetry would refine it (a follow-up).
 */

// Fixed drill sizes by section — a targeted set is ~a dozen questions. Reading
// sets run a touch shorter. Deliberately NOT derived from `duration`: the
// generator's durations are inconsistent (a 5-question section is 15 min), so a
// fixed per-section size gives a stable, sensible chip.
const DRILL_QUESTIONS = { math: 12, rw: 10 };
// Minutes per question when we must estimate minutes from a question count.
const MIN_PER_Q = { math: 1.2, rw: 1.6 };

/** Humanize a kebab pattern slug into a short, title-cased round label. */
function humanizePattern(slug) {
  if (!slug || typeof slug !== 'string') return '';
  const words = slug.split('-').filter(Boolean);
  const label = words.slice(0, 4).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return words.length > 4 ? `${label}…` : label;
}

/** Strip the redundant "Practice:" / "Drill:" prefix from an activity title. */
function cleanTitle(title) {
  return String(title || '').replace(/^(Practice|Drill)\s*:\s*/i, '').trim();
}

const sectionOf = (activity) => (activity && activity.section === 'rw' ? 'rw' : 'math');

/**
 * Estimate a question count for an activity.
 *
 * @param {object} activity  a weeks[].activities[] entry
 * @returns {{ n: number|null, estimated: boolean }}  n is null for
 *   non-question activities (strategy tips, full tests).
 */
export function estimateActivityQuestions(activity) {
  if (!activity) return { n: null, estimated: false };
  if (Array.isArray(activity.questionIds) && activity.questionIds.length > 0) {
    return { n: activity.questionIds.length, estimated: false };
  }
  // A CB-style practice section is a fixed 5-question set (not an estimate).
  if (activity.activityType === 'practiceSection') return { n: 5, estimated: false };
  if (activity.type === 'practice') return { n: DRILL_QUESTIONS[sectionOf(activity)], estimated: true };
  return { n: null, estimated: false };
}

/**
 * Estimate the minutes for an activity — the stored `duration` when present,
 * otherwise derived deterministically from the question count by section.
 *
 * @param {object} activity
 * @param {{ n: number|null }} questions  result of estimateActivityQuestions
 * @returns {{ n: number, estimated: boolean }}
 */
export function estimateActivityMinutes(activity, questions) {
  if (activity && typeof activity.duration === 'number' && activity.duration > 0) {
    return { n: activity.duration, estimated: false };
  }
  if (activity && activity.type === 'test') return { n: 70, estimated: true };
  if (activity && (activity.type === 'strategy' || activity.type === 'review')) {
    return { n: 10, estimated: true };
  }
  const q = (questions && questions.n) || DRILL_QUESTIONS[sectionOf(activity)];
  return { n: Math.max(5, Math.round(q * MIN_PER_Q[sectionOf(activity)])), estimated: true };
}

/**
 * The compact summary for an activity's chip line.
 *
 * @param {object} activity  a weeks[].activities[] entry
 * @returns {{
 *   minutes: number, minutesEstimated: boolean,
 *   questions: number|null, questionsEstimated: boolean,
 *   label: string,           // e.g. "15 MIN · ~12 Q" or "70 MIN · full test"
 * } | null}  null when there is nothing meaningful to summarize.
 */
export function activitySummary(activity) {
  if (!activity || typeof activity !== 'object') return null;
  const questions = estimateActivityQuestions(activity);
  const minutes = estimateActivityMinutes(activity, questions);

  const mStr = `${minutes.estimated ? '~' : ''}${minutes.n} MIN`;
  let qStr = null;
  if (questions.n != null) {
    qStr = `${questions.estimated ? '~' : ''}${questions.n} Q`;
  } else if (activity.type === 'test') {
    qStr = 'full test';
  }

  return {
    minutes: minutes.n,
    minutesEstimated: minutes.estimated,
    questions: questions.n,
    questionsEstimated: questions.estimated,
    label: qStr ? `${mStr} · ${qStr}` : mStr,
  };
}

/**
 * Build the expandable breakdown rows for a practice/drill activity: one row
 * per missed SAT pattern (cap 3), or a single skill row when none are tagged.
 * Round status/progress projects the skill's drill evidence (skillProgress) —
 * completed → every row done; drilled-not-mastered → earlier rows done + the
 * next active; never drilled → all to-do.
 *
 * @param {object} activity  a weeks[].activities[] entry
 * @param {object} [skillProgress]  uid skill-progress map keyed by skillId
 * @returns {Array<{ label: string, status: 'done'|'active'|'todo',
 *   prog: string, complete: boolean }>}  empty for non-practice activities.
 */
export function activityBreakdown(activity, skillProgress = {}) {
  if (!activity || activity.type !== 'practice') return [];

  const patterns = Array.isArray(activity.missedPatterns)
    ? activity.missedPatterns.filter(Boolean).slice(0, 3)
    : [];
  const roundCount = Math.max(1, patterns.length);
  const totalQ = estimateActivityQuestions(activity).n || DRILL_QUESTIONS[sectionOf(activity)];
  const perRound = Math.max(3, Math.round(totalQ / roundCount));

  const sp = (activity.skillId && skillProgress) ? skillProgress[activity.skillId] : null;
  const attempts = sp && typeof sp.attempts === 'number' ? sp.attempts : 0;
  const mastery = sp
    ? (typeof sp.mastery === 'number' ? sp.mastery : (attempts ? (sp.correct / attempts) * 100 : 0))
    : 0;
  const completed = !!activity.completed;
  const hasStarted = attempts > 0;
  const doneRounds = completed
    ? roundCount
    : hasStarted
      ? Math.min(roundCount - 1, Math.floor((mastery / 100) * roundCount))
      : 0;

  const fallbackLabel = activity.skillName || activity.skill || cleanTitle(activity.title) || 'Targeted set';
  const rows = [];
  for (let r = 0; r < roundCount; r++) {
    const label = patterns[r] ? humanizePattern(patterns[r]) : fallbackLabel;
    let status;
    let prog;
    if (r < doneRounds) {
      status = 'done';
      prog = `${perRound}/${perRound}`;
    } else if (r === doneRounds && hasStarted && !completed) {
      status = 'active';
      const within = Math.min(perRound - 1, Math.max(1, Math.round((mastery / 100) * perRound)));
      prog = `${within}/${perRound}`;
    } else {
      status = 'todo';
      prog = `0/${perRound}`;
    }
    rows.push({ label, status, prog, complete: status === 'done' });
  }
  return rows;
}
