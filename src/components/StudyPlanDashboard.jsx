import React, { useState, useMemo } from 'react';
import { colors, typography, spacing, radius, transitions, breakpoints, shadows } from '../design/tokens';
import { MathText } from './MathText';
import { getQuestionsBySkillIds, getTargetedWeaknessSet } from '../data/questions/bank';
import {
  getQuestionsBySkillIds as getRWQuestionsBySkillIds,
  getTargetedWeaknessSet as getRWTargetedWeaknessSet,
} from '../data/questions/rwBank';
import { showToast } from './ui/Toaster';
import { getWeaknessSection, getMathWeaknesses, getRWWeaknesses } from '../services/selectors/weaknesses';
import { activitySection, matchesSectionFilter, SECTION_FILTERS } from '../services/selectors/planSection';
import { DOMAIN_DISPLAY_NAMES } from '../services/scoring/domainInference';
import { CB_RW_DOMAIN_LABELS } from '../data/questions/cbSkillTaxonomy';
import { resolveActivityDrill } from '../services/activityDrillRouter';
import { applyPredictionBoost } from '../services/selectors/predictionBoost';
import { annotateFocusAreas } from '../services/selectors/focusAreaProgress';
import { getDrillChipForWeakness } from '../services/selectors/drillChip';
import { formatDiagnosticSentence } from '../services/diagnosticEngine';
import {
  rescheduleActivity,
  setActivitySkipped,
  removeActivity,
  addCustomActivity,
  setFocusAreas,
  setPacing,
} from '../services/studyPlanEditor';
import { getTodaySlice } from '../services/selectors/todaySlice';
import { getIdentityInsights, getPredictionTrust } from '../services/selectors/identityInsights';
import { getReviewStreak } from '../services/dailyReviewEngine';
import { formatDailyIntro } from '../services/selectors/dailyIntro';
import { getPracticedDayKeys } from '../services/selectors/practicedDays';
import { getCompletedTests } from '../services/selectors/completedTests';
import { isGoalAchieved, goalDelta, isSectionScaleScore } from '../services/selectors/goalProgress';
import { getDaysUntilTest } from '../services/selectors/daysUntilTest';
import { parseLocalDate } from '../utils/localDate';
import { useFeatureFlag } from '../hooks/useFeatureFlag';
import CalendarMonth from './CalendarMonth';
import Avatar, { AVATAR_SIZES } from './ui/Avatar';
import StudyPlanReviewSection from './StudyPlanReviewSection';
import StudyPlanPacingSection from './StudyPlanPacingSection';
import { buildPacingTelemetry } from '../services/selectors/pacingTelemetry';
import { getPacingStruggle } from '../services/selectors/pacingStruggle';
import {
  ClipboardIcon,
  VideoCameraIcon,
  BookOpenIcon,
  PencilIcon,
  BrainIcon,
  SearchIcon,
  DocumentIcon,
  PinIcon,
  CheckIcon,
  ChevronDownIcon,
} from '../design/icons';
import './StudyPlanDashboard.css';
import './StudentDashboard.css';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

// Design-review FINDING-007: activity accents were semantic.info (blue) and
// badge.bronze (a token that actually resolves to blue) — off-brand in an
// orange app. One accent (brand) for actionable rows, quiet slate for tips.
const TYPE_META = {
  lesson:   { label: 'Lesson',   fg: colors.text.tertiary },
  practice: { label: 'Practice', fg: colors.focus },
  strategy: { label: 'Tip',      fg: colors.text.tertiary },
  review:   { label: 'Tip',      fg: colors.text.tertiary },
  test:     { label: 'Test',     fg: colors.focus },
};

// Tinted icon-chip palette, diagnostic-report style: each activity kind gets
// an identity color. Math/R&W use the section hues (orange / info-blue) the
// section chips use; strategy = amber, review = purple (plan domain),
// test = navy. Tri-color semantics preserved — purple stays plan/focus,
// green stays completion (the done state).
const chipColorsFor = (act) => {
  if (act.type === 'test') return { bg: 'var(--color-slate-100)', fg: 'var(--color-brand-navy)' };
  if (act.type === 'strategy' || act.type === 'review') {
    // Both render the user-facing label "Tip" — one shared hue (amber), so
    // color stays a one-to-one encoding on a page where it now means section.
    return { bg: 'var(--color-warning-100)', fg: 'var(--color-warning-600)' };
  }
  const section = activitySection(act);
  if (section === 'rw') return { bg: 'var(--color-info-100)', fg: 'var(--color-info-700)' };
  // orange-600 (not primary): the lighter primary fails contrast at chip size
  return { bg: 'var(--color-brand-primary-light)', fg: 'var(--color-brand-orange-600)' };
};

const SECTION_CHIP_LABEL = { math: 'Math', rw: 'R&W' };

// Focus-card domain eyebrow: official display names, never raw kebab slugs
// ("ADVANCED-MATH" next to the polished section chip read as a bug).
const domainLabel = (domain) => {
  if (!domain) return 'Skill';
  return DOMAIN_DISPLAY_NAMES[domain]
    || CB_RW_DOMAIN_LABELS[domain]
    || domain.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};

// Week titles persisted by the generator embed their own "Week N:" prefix
// ("Week 2: targeted practice"), which the header template then doubles
// ("Week 2 — Week 2: targeted practice"). Strip at render so both new and
// persisted plans read clean.
const cleanWeekTitle = (title) => {
  if (!title) return '';
  const stripped = title.replace(/^week\s*\d+\s*[:—–-]\s*/i, '').trim();
  if (!stripped) return '';
  return stripped.charAt(0).toUpperCase() + stripped.slice(1);
};

// Icons inherit the tinted chip's color (chipColorsFor) via currentColor —
// passing explicit hues here would fight the section/type tint.
function activityIcon(type) {
  if (type === 'lesson')   return <BookOpenIcon size={16} color="currentColor" />;
  if (type === 'practice') return <PencilIcon size={16} color="currentColor" />;
  if (type === 'strategy') return <BrainIcon size={16} color="currentColor" />;
  if (type === 'review')   return <SearchIcon size={16} color="currentColor" />;
  if (type === 'test')     return <DocumentIcon size={16} color="currentColor" />;
  return <PinIcon size={16} color="currentColor" />;
}

// Monday-first weekday order for the Weekly View day-row timeline. Module
// scope so the useMemo that consumes it stays dependency-stable.
const WEEKDAY_FULL = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Humanize a kebab pattern slug into a short, title-cased round label
// ("vertex-form-from-two-conditions" → "Vertex Form From Two…"). Capped at
// four words so a round row never wraps.
function humanizePattern(slug) {
  if (!slug || typeof slug !== 'string') return '';
  const words = slug.split('-').filter(Boolean);
  const label = words.slice(0, 4).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return words.length > 4 ? `${label}…` : label;
}

// Rough drill-time estimate from a question count (~1.2 min/Q, floored at 10).
const estMinutes = (qCount) => Math.max(10, Math.round((qCount || 0) * 1.2));

/**
 * buildPlanModule — turn a focus-area weakness row into the "module card with
 * rounds" model the redesigned Today panel renders.
 *
 * Rounds surface the skill's missed SAT patterns (real sub-skills the drill
 * targets). Round status/progress is the skill's *drill evidence* projected
 * onto those rounds — mastered → every round done; drilled-but-not-mastered →
 * earlier rounds done + the next active; never-drilled → all to-do. This is
 * honest at skill grain; per-pattern telemetry would refine it (follow-up).
 *
 * @param {object} w  a focus-area weakness (from skillPracticeRows)
 * @param {number} i  index in the (sectioned) focus list — top row gets KEY FOCUS
 * @param {object|undefined} skillProgress  uid skill-progress map
 * @param {string} diagnosticSentence  editorial sentence for this row
 * @returns {object} module model { section, tag, title, desc, acc, accBand,
 *   status, meta, qIds, rounds[], weakness, adaptiveLine, predictedStruggle }
 */
function buildPlanModule(w, i, skillProgress, diagnosticSentence) {
  const section = w.section === 'rw' ? 'rw' : 'math';
  const rawAcc = typeof w.displayAccuracy === 'number' ? w.displayAccuracy : (w.accuracy ?? null);
  const acc = rawAcc != null ? Math.round(rawAcc) : null;
  const accBand = (w.isMastered || (acc != null && acc >= 70)) ? 'high'
    : (acc != null && acc < 40) ? 'low' : 'mid';

  const sp = (skillProgress && w.skillId) ? skillProgress[w.skillId] : null;
  const attempts = sp?.attempts ?? 0;
  const mastery = sp ? (sp.mastery ?? (attempts ? (sp.correct / attempts) * 100 : 0)) : 0;
  const hasStarted = !!w.hasDrillSignal || attempts > 0;

  const status = w.isMastered ? 'complete' : hasStarted ? 'progress' : 'start';

  // Rounds from missed patterns (cap 3); fall back to a single skill round.
  const patterns = Array.isArray(w.missedPatterns) ? w.missedPatterns.filter(Boolean).slice(0, 3) : [];
  const roundCount = Math.max(1, patterns.length);
  const total = w.qCount || roundCount * 8;
  const perRound = Math.max(4, Math.round(total / roundCount));
  const doneRounds = status === 'complete' ? roundCount
    : status === 'progress' ? Math.min(roundCount - 1, Math.floor((mastery / 100) * roundCount))
    : 0;

  const rounds = [];
  for (let r = 0; r < roundCount; r++) {
    const label = patterns[r] ? humanizePattern(patterns[r]) : (w.skill || 'Targeted drill');
    let rstatus, prog;
    if (r < doneRounds) { rstatus = 'done'; prog = `${perRound}/${perRound}`; }
    else if (r === doneRounds && status === 'progress') {
      rstatus = 'active';
      const within = Math.min(perRound - 1, Math.max(1, Math.round((mastery / 100) * perRound)));
      prog = `${within}/${perRound}`;
    } else { rstatus = 'todo'; prog = `0/${perRound}`; }
    rounds.push({
      label: `Round ${r + 1} · ${label}`,
      keyFocus: r === 0 && status !== 'complete',
      status: rstatus,
      prog,
    });
  }

  return {
    section,
    tag: section === 'math' ? 'MATH' : 'R&W',
    title: w.skill || 'Focus skill',
    desc: diagnosticSentence || w.errorType || '',
    acc,
    accBand,
    status,
    meta: `${estMinutes(total)} MIN · ${total} Q`,
    qIds: Array.isArray(w.qIds) ? w.qIds : [],
    rounds,
    weakness: w,
    domain: w.domain,
    adaptiveLine: w.adaptiveLine,
    predictedStruggle: w.predictedStruggle,
    isMastered: w.isMastered,
  };
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const ScoreTrajectory = ({ artifact }) => {
  const trajectory = artifact?.longitudinal?.scoreTrajectory;
  if (!trajectory?.length) return null;

  return (
    <div className="sp-trajectory">
      <span className="sp-trajectory-label">Score History</span>
      {trajectory.map((entry, i) => (
        <span key={i} className={`sp-trajectory-node ${i === trajectory.length - 1 ? 'is-latest' : ''}`}>
          {entry.scaledScore}
        </span>
      ))}
    </div>
  );
};

const StudyPlanDashboard = ({
  variant = 'default',
  studyPlan,
  studyPlanArtifact,
  studyPlanMeta,
  practiceTestResults,
  practiceProgress,
  drillDays = [],
  skillProgress,
  reviewQueue,
  adaptiveOverlay = null,
  user,
  onStartPractice,
  onStartPracticeTest,
  onCompleteActivity,
  onUncompleteActivity,
  onEditPlan,
  studyPlanHistory,
  onSelectPlanVersion,
  onReviewPastTests,
  onStartReview,
  onStartPacing,
  onReviewTestWrong,
  answeredQuestionIds = [],
  predictionLog = null,
}) => {
  // ── Empty state — return BEFORE any hooks ─────────────────────────────
  // Rules of Hooks: hooks must be called in the same order every render.
  // The component has many hooks; if studyPlan transitions from undefined
  // (loading from Firestore) to defined (loaded), and we ran some hooks
  // before this early return, the second render would call MORE hooks
  // and React panics with "Rendered more hooks than during the previous
  // render." Returning early before any hook keeps the order consistent.
  if (!studyPlan || !studyPlan.weeks || studyPlan.weeks.length === 0) {
    return (
      <div className="study-plan-dashboard">
        <div className="sp-empty-state">
          <div className="sp-empty-icon">
            <ClipboardIcon size={40} />
          </div>
          <div className="sp-empty-title">
            No Study Plan Yet
          </div>
          <div className="sp-empty-desc">
            {user?.firstName
              ? `${user.firstName}, here's where your plan will live. One practice test builds it — which skills cost you points, where you rush, and what to fix first.`
              : 'Take one practice test. Your plan gets built from every answer — which skills cost you points, where you rush, and what to fix first.'}
          </div>
          {onStartPracticeTest && (
            <button onClick={onStartPracticeTest} className="sp-empty-btn">
              Take a Practice Test
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Hooks (all below the empty-state early return) ──────────────────
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [deltaDismissed, setDeltaDismissed] = useState(() =>
    !!studyPlanMeta?.artifactId && !!localStorage.getItem(`dismissedDelta:${studyPlanMeta.artifactId}`)
  );
  // Acely-polish v2: top-level sub-tabs ("Today's Tasks" / "Weekly View")
  // matching the reference. Default to Today's Tasks (the day-grain view).
  // When mounted inside another tab structure (variant='inline'), the sub-
  // tabs are hidden and we always render the weekly content — the outer
  // tab is already labeled 'Study Plan' so the day-grain branch is
  // redundant in that mount.
  const showSubTabs = variant !== 'inline';
  const [activeView, setActiveView] = useState(
    variant === 'inline' ? 'weeklyView' : 'todaysTasks'
  );
  const [showAllSkillChanges, setShowAllSkillChanges] = useState(false);
  // Math / Reading & Writing switcher (Practice-Bank-style). Scopes the
  // Weekly Schedule, Focus Areas, coming-up preview, and the plan-progress
  // counts. Section-agnostic items (review/strategy/test) show everywhere.
  const [sectionFilter, setSectionFilter] = useState('all');

  // ── Edit-plan mode (student-initiated edits) ──────────────────────────
  // Off by default; the Weekly view's "Edit plan" toggle flips it on, which
  // reveals per-task controls (reschedule / skip / remove), an "add task"
  // form per week, and the Plan Settings panel (focus areas + pacing).
  const [editMode, setEditMode] = useState(false);
  const [addTaskWeek, setAddTaskWeek] = useState(null); // week index with an open add-task form
  const [addTaskTitle, setAddTaskTitle] = useState('');
  const [addTaskDay, setAddTaskDay] = useState('Monday');

  // ── Derived data ─────────────────────────────────────────────────────
  // Render-time guard: legacy plan artifacts in Firestore may still
  // carry type='lesson' activities — those routed to the legacy
  // LearnWorkspace, which the product no longer surfaces. Drop them
  // before rendering so users only ever see practice/review/strategy/
  // test activities. Generator no longer emits lessons (see
  // studyPlanGenerator.js:472), but this defends against old plans
  // already persisted server-side.
  const isVisibleActivity = (a) => a && a.type !== 'lesson' && !a.skipped && matchesSectionFilter(a, sectionFilter);
  const visibleActivities = (week) => (week?.activities || []).filter(isVisibleActivity);

  const delta = studyPlanArtifact?.delta || studyPlan._diff || null;
  const longitudinal = studyPlanArtifact?.longitudinal || null;
  const { weeks } = studyPlan;
  // Prediction-aware Focus Areas ordering (2026-06 audit gap 2): weaknesses
  // the engine flags as likely struggle areas on the NEXT test move to the
  // front, annotated so the card can say why. Render-time re-rank — the
  // persisted plan order is untouched, and the selector returns the original
  // array reference when there is no active prediction.
  const weaknesses = useMemo(
    () => applyPredictionBoost(studyPlan.weaknesses, predictionLog),
    [studyPlan.weaknesses, predictionLog],
  );
  // Live drill evidence + reprioritization annotations (adaptivity audit
  // items 1-3): each weakness gains recent-drill stats from skillProgress,
  // a mastered-in-practice flag, and the engine's improved/declined call —
  // and the list re-orders so declined skills rise, improved sink, and
  // mastered drop to the bottom. Pure selector; plan data untouched.
  const annotatedWeaknesses = useMemo(
    () => annotateFocusAreas({ weaknesses, skillProgress, practiceTestResults, overlay: adaptiveOverlay }),
    [weaknesses, skillProgress, practiceTestResults, adaptiveOverlay],
  );
  const totalActivities = weeks.reduce((s, w) => s + visibleActivities(w).length, 0);
  const completedActivities = weeks.reduce((s, w) => s + visibleActivities(w).filter(a => a.completed).length, 0);
  const currentWeekIndex = weeks.findIndex(w => visibleActivities(w).some(a => !a.completed));
  const displayCurrentWeek = currentWeekIndex >= 0 ? currentWeekIndex : weeks.length - 1;

  // Past-Test-Review CTA gate. Hooks live here (after the empty-state
  // early return) instead of at the top of the component to keep the
  // hook order consistent across the loading→loaded transition. Putting
  // them above the early return shifts the hook count between renders
  // and trips React's "Rendered more hooks than during the previous
  // render" check the first time studyPlan hydrates from Firestore.
  const pastTestReviewEnabled = useFeatureFlag('pastTestReview');
  // Filter to attempts that actually have item-level telemetry — older
  // attempts had `diagnosticData.questionDetails` stripped so the doc
  // stayed under the Firestore 1MB limit, and surfacing them on the CTA
  // misleads the user (they click in expecting wrong-items breakdown and
  // hit empty).
  const completedTestCount = useMemo(
    () => getCompletedTests(practiceTestResults, { requireItemDetails: true }).length,
    [practiceTestResults],
  );
  const showReviewTestsButton =
    pastTestReviewEnabled && completedTestCount > 0 && typeof onReviewPastTests === 'function';

  // Acely-polish v2: right-rail derived state.
  const practicedDayKeys = useMemo(
    () => getPracticedDayKeys({ practiceProgress, practiceTestResults, drillDays }),
    [practiceProgress, practiceTestResults, drillDays],
  );
  const sortedTests = useMemo(() => {
    if (!practiceTestResults) return [];
    return Object.values(practiceTestResults)
      .filter(t => typeof t.bestScaledScore === 'number')
      .sort((a, b) => {
        const at = a.lastAttemptAt?.toDate?.() || new Date(a.lastAttemptAt || 0);
        const bt = b.lastAttemptAt?.toDate?.() || new Date(b.lastAttemptAt || 0);
        return at - bt;
      });
  }, [practiceTestResults]);
  const latestTest = sortedTests.length > 0 ? sortedTests[sortedTests.length - 1] : null;
  const latestScore = latestTest ? latestTest.bestScaledScore : null;
  const scoreDelta = sortedTests.length >= 2
    ? sortedTests[sortedTests.length - 1].bestScaledScore - sortedTests[0].bestScaledScore
    : null;
  // Shared selector — one day-count for the SAT date everywhere. Negative
  // values (test date in the past) are common in dogfood/seed data and look
  // terrible as "-57"; flag + remap below.
  const daysUntilTest = getDaysUntilTest(user?.testDate);
  const testDateIsPast = daysUntilTest !== null && daysUntilTest < 0;
  // Pacing & Timing section: per-question timing from the most recent test +
  // the plan's timing-struggle signal (the generator's "Pacing Reset"
  // activity). The section gates/boosts itself on these.
  const pacingTelemetry = useMemo(
    () => buildPacingTelemetry(practiceTestResults),
    [practiceTestResults]
  );
  const pacingStruggle = useMemo(() => getPacingStruggle(studyPlan), [studyPlan]);
  // Goal already achieved? Common in mid-test cycles where a recent score
  // already exceeds onboarding-time target. Compared scale-safely (1.4): a
  // 400-1600 composite must never "achieve" a 200-800 section target.
  const goalArgs = { latestScore, targetScore: user?.targetScore, isMultiSection: latestTest?.isMultiSection };
  const goalAchieved = isGoalAchieved(goalArgs);
  const goalAboveDelta = goalDelta(goalArgs);

  // ── Personalization overhaul (2026-06): the dark signals ────────────
  // The plan artifact has carried eliminationEffectiveness, staminaInsight,
  // and calculatorDependency since the groundTruth graft — rendered nowhere.
  // These three memos surface them: identity insights ("How you test"),
  // the prediction-trust record, and the target-school anchor.
  const identityInsights = useMemo(() => getIdentityInsights(studyPlan), [studyPlan]);
  const predictionTrust = useMemo(() => getPredictionTrust(predictionLog), [predictionLog]);
  const targetSchool = useMemo(() => {
    const schools = Array.isArray(user?.targetSchools)
      ? user.targetSchools.filter(s => s && typeof s.satMath === 'number')
      : [];
    if (schools.length === 0) return null;
    // Anchor to the stretch school — the highest mid-50% Math among picks.
    return schools.reduce((a, b) => (b.satMath > a.satMath ? b : a));
  }, [user?.targetSchools]);
  // Review streak — localStorage-backed; only show a LIVE streak (touched
  // today or yesterday, at least 2 days). A stale or 1-day "streak" is noise.
  const reviewStreak = useMemo(() => {
    const streak = getReviewStreak();
    if (!streak || streak.current < 2 || !streak.lastDate) return null;
    const today = new Date().toISOString().slice(0, 10);
    const y = new Date(); y.setDate(y.getDate() - 1);
    const yesterday = y.toISOString().slice(0, 10);
    return (streak.lastDate === today || streak.lastDate === yesterday) ? streak : null;
  }, []);

  // Day-1 of Acely-polish v2: extract just the FIRST sentence of the
  // adaptive-plan delta paragraph so the banner reads like a tight summary
  // rather than a wall of strategy text. The full paragraph is available
  // behind a "Show more" disclosure.
  //
  // Design-review FINDING-001: the generated paragraphs are often ONE long
  // semicolon-chained sentence, so the first-sentence regex matched the whole
  // wall of text and the clamp never fired. Hard-cap at a word boundary so
  // the collapsed note is always 1-2 lines, never a paragraph.
  const clampToSentence = (text, max = 170) => {
    if (!text) return '';
    const m = text.match(/^[^.!?]+[.!?]/);
    let first = m ? m[0] : text;
    if (first.length > max) {
      const cut = first.slice(0, max);
      const lastSpace = cut.lastIndexOf(' ');
      first = cut.slice(0, lastSpace > 80 ? lastSpace : max).replace(/[,;:\s]+$/, '') + '…';
    }
    return first;
  };
  const [deltaExpanded, setDeltaExpanded] = useState(false);
  const deltaText = studyPlan.deltaFromPrevious || '';
  const deltaFirstSentence = clampToSentence(deltaText);
  const deltaHasMore = deltaText.length > deltaFirstSentence.length + 4;
  // FINDING-001: the "stuck skill" strategy note rendered its full paragraph
  // with no disclosure at all — same treatment as the delta note.
  const [strategyExpanded, setStrategyExpanded] = useState(false);
  const strategyText = studyPlan.persistentWeaknessStrategy || '';
  const strategyFirstSentence = clampToSentence(strategyText);
  const strategyHasMore = strategyText.length > strategyFirstSentence.length + 4;
  // FINDING-002: Focus Areas disclosure state — only the top 3 focus modules
  // render in the Today panel until expanded.
  const [showAllFocus, setShowAllFocus] = useState(false);

  // Today's-Tasks tab derived state.
  const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayDayName = DAY_NAMES[new Date().getDay()];
  const todaySlice = useMemo(() => getTodaySlice(studyPlan, todayDayName), [studyPlan, todayDayName]);
  const topWeakness = useMemo(() => {
    if (!studyPlan) return null;
    const math = getMathWeaknesses(studyPlan);
    const rw = getRWWeaknesses(studyPlan);
    const merged = [...math, ...rw].sort((a, b) => (a.accuracy ?? 100) - (b.accuracy ?? 100));
    return merged[0] || null;
  }, [studyPlan]);
  const dailyIntro = useMemo(
    () => formatDailyIntro({ todaySlice, latestScore, topWeakness, firstName: user?.firstName }),
    [todaySlice, latestScore, topWeakness, user?.firstName],
  );

  // Tab count badges — 'Today's Tasks (N) / Weekly View (N)' matches the
  // Acely reference exactly.
  const todaysTasksCount = (todaySlice && Array.isArray(todaySlice.activities))
    ? todaySlice.activities.length : 0;
  const weeklyViewCount = totalActivities - completedActivities;

  // Coming-up preview for the Today's Tasks tab — when today is a rest-day
  // or all-done, the page would otherwise leave a huge gap below a small
  // card. Build a 4-day rolling preview of the current week, starting
  // tomorrow, showing each day's activity count + nameplate. We inline the
  // currentWeek lookup since the named binding is declared lower in the
  // file (avoids a TDZ hoisting issue).
  const comingUpDays = useMemo(() => {
    const week = weeks[displayCurrentWeek];
    if (!week || !Array.isArray(week.activities)) return [];
    const todayIdx = DAY_NAMES.indexOf(todayDayName);
    const visible = week.activities.filter(a => a && a.type !== 'lesson' && !a.skipped);
    const out = [];
    for (let offset = 1; offset <= 6; offset++) {
      const dayIdx = (todayIdx + offset) % 7;
      const dayName = DAY_NAMES[dayIdx];
      const dayActs = visible.filter(a => a.day === dayName);
      const incomplete = dayActs.filter(a => !a.completed);
      if (dayActs.length === 0) continue;
      out.push({
        day: dayName,
        offset,
        total: dayActs.length,
        incomplete: incomplete.length,
        sample: incomplete[0] || dayActs[0],
      });
      if (out.length >= 4) break;
    }
    return out;
  }, [weeks, displayCurrentWeek, todayDayName]);

  // ── Handlers ─────────────────────────────────────────────────────────
  const handleGo = (activity) => {
    // Lesson branch removed — generator no longer emits type='lesson'
    // and the legacy LearnWorkspace mount is gone.
    if (activity.type === 'test' && onStartPracticeTest) {
      onStartPracticeTest();
      return;
    }
    if (activity.type !== 'practice' || !onStartPractice) return;

    // 3-tier activity routing (shared with the module-card launch path) — the
    // Weekly View previously called the raw 2-arg module/section form, which
    // App.jsx routed to the legacy 'prescriptive' screen instead of
    // AssignedPracticeShell.
    const route = resolveActivityDrill(
      {
        activity,
        weaknesses,
        cachedRows: skillPracticeRows,
        answeredQuestionIds,
      },
      {
        getTargetedWeaknessSet,
        getQuestionsBySkillIds,
        getRWTargetedWeaknessSet,
        getRWQuestionsBySkillIds,
        getDrillChipForWeakness,
      },
    );
    if (route?.kind === 'assigned') {
      onStartPractice(null, null, {
        questionIds: route.questionIds,
        source: 'study-plan-weekly',
        label: route.label,
        weakness: route.weakness,
      });
    } else if (route?.kind === 'module') {
      onStartPractice(route.moduleId, route.sectionName);
    } else {
      // Unroutable (no drill pool, no module) — say so instead of a dead click.
      showToast({ type: 'info', message: 'No drill set is available for this activity yet.' });
    }
  };

  const handleToggle = (e, weekIdx, actIdx, done) => {
    e.stopPropagation();
    if (done) {
      onUncompleteActivity?.(weekIdx, actIdx);
    } else {
      onCompleteActivity?.(weekIdx, actIdx);
    }
  };

  // ── Edit handlers ─────────────────────────────────────────────────────
  // Each applies a pure transform (studyPlanEditor) to the current plan and
  // hands the result to onEditPlan (= useProgress.saveEditedStudyPlan), which
  // persists the whole plan to the Firestore artifact.
  const EDIT_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const todayISO = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };
  const applyEdit = (transform) => {
    if (!onEditPlan || !studyPlan) return;
    const next = transform(studyPlan);
    if (next && next !== studyPlan) onEditPlan(next);
  };
  const handleReschedule = (weekIdx, actIdx, day) => applyEdit(p => rescheduleActivity(p, weekIdx, actIdx, day));
  const handleToggleSkip = (weekIdx, actIdx, currentlySkipped) => applyEdit(p => setActivitySkipped(p, weekIdx, actIdx, !currentlySkipped));
  const handleRemoveActivity = (weekIdx, actIdx) => applyEdit(p => removeActivity(p, weekIdx, actIdx));
  const handleAddTask = (weekIdx) => {
    const title = addTaskTitle.trim();
    if (!title) return;
    applyEdit(p => addCustomActivity(p, weekIdx, { title, day: addTaskDay }));
    setAddTaskTitle('');
    setAddTaskWeek(null);
    showToast({ type: 'success', message: 'Task added to your plan.' });
  };
  const handleRemoveFocus = (skillId) => {
    const remaining = (studyPlan.weaknesses || []).filter(w => w.skillId !== skillId);
    if (remaining.length === 0) {
      showToast({ type: 'info', message: 'Keep at least one focus area.' });
      return;
    }
    applyEdit(p => setFocusAreas(p, remaining));
  };
  const handleAddFocus = (gap) => {
    if (!gap?.skillId) return;
    const weakness = {
      skillId: gap.skillId,
      skill: gap.skillName || gap.skill || gap.skillId,
      section: gap.section === 'rw' ? 'rw' : 'math',
      accuracy: gap.testAccuracy ?? gap.accuracy ?? 0,
      domain: gap.domain || '',
      missedPatterns: gap.missedPatterns || [],
      evidence: gap.evidence || 'Added to your focus areas.',
      errorType: gap.errorType || 'Focus area',
    };
    applyEdit(p => setFocusAreas(p, [...(p.weaknesses || []), weakness]));
  };
  const handlePacing = (minutesPerDay, examDate) => applyEdit(p => setPacing(p, { minutesPerDay, examDate }, todayISO()));

  // Skills the diagnosis surfaced that aren't currently in the focus list —
  // the pool the student can re-add via the Plan Settings panel.
  const addableFocusSkills = useMemo(() => {
    const current = new Set((studyPlan?.weaknesses || []).map(w => w.skillId));
    const gaps = studyPlan?.skillGaps || [];
    const seen = new Set();
    return gaps.filter(g => {
      if (!g?.skillId || current.has(g.skillId) || seen.has(g.skillId)) return false;
      seen.add(g.skillId);
      return true;
    });
  }, [studyPlan]);

  // ── Skill practice data ──────────────────────────────────────────────
  // Section-tag contract (Day 0): each weakness now has `section: 'math' | 'rw'`.
  // Today only the math bank ships (R&W bank lands in Day 1-2 / item #1), so we
  // route only math-section weaknesses into the dispatcher and surface R&W ones
  // as "drill coming soon" rows. Once the R&W bank ships, the rw branch will
  // route to its own getTargetedWeaknessSet from `data/questions/rwBank`.
  const skillPracticeRows = useMemo(() => {
    if (!annotatedWeaknesses?.length || !onStartPractice) return [];

    // Build a difficulty mix from the student's accuracy profile
    // A student struggling at easy questions needs more easy practice
    const diffMix = (() => {
      const diffLevels = studyPlan?.difficultyAnalysis?.levels;
      if (!diffLevels) return undefined; // let getTargetedWeaknessSet use default
      const easyAcc = diffLevels.easy?.accuracy ?? 70;
      const medAcc = diffLevels.medium?.accuracy ?? 50;
      if (easyAcc < 60) return { easy: 0.55, medium: 0.35, hard: 0.10 };
      if (easyAcc >= 75 && medAcc < 55) return { easy: 0.20, medium: 0.60, hard: 0.20 };
      if (easyAcc >= 80 && medAcc >= 65) return { easy: 0.15, medium: 0.45, hard: 0.40 };
      return undefined;
    })();

    return annotatedWeaknesses.slice(0, 6).map(w => {
      const section = getWeaknessSection(w);

      // Section-aware dispatcher. Pick the bank API matching the weakness's
      // test subject. Both banks expose the same `getTargetedWeaknessSet` and
      // `getQuestionsBySkillIds` signature, so the rest of the logic is shared.
      const targetedQuery = section === 'rw' ? getRWTargetedWeaknessSet : getTargetedWeaknessSet;
      const fallbackQuery = section === 'rw' ? getRWQuestionsBySkillIds : getQuestionsBySkillIds;

      // Drill-routing precision: pass `missedPatterns` through so the cascade
      // can fire Tier 1 (exact SAT Pattern) instead of falling all the way to
      // Tier 3 (skill alias). When the chip is viable on this section, restrict
      // to the chip's single pattern so the drill content matches the chip's
      // "Practicing: <Pattern>" claim. Without restriction, the chip names one
      // pattern but the pool unions every missed pattern on the weakness — a
      // student opens "Scatterplots Practice" and gets mean-of-running-times
      // problems because skillId 'Scatterplots' aliases to 'calculate-mean'
      // in Tier 3 (see SKILL_ALIAS_MAP). R&W goes without chip restriction
      // for now — its drill chip wiring lands in a separate batch.
      // Restrict the drill to the chip's single pattern (both sections now that
      // the chip is section-aware) so the content matches the "Practicing: X"
      // claim. R&W chips resolve against the R&W pattern pool + labels.
      let missedPatterns = Array.isArray(w.missedPatterns) ? w.missedPatterns : undefined;
      const chip = getDrillChipForWeakness({ ...w, section });
      if (chip) missedPatterns = [chip.slug];

      const questions = targetedQuery({
        weakSkills: [{ skillId: w.skillId, domain: w.domain, missedPatterns }],
        difficultyMix: diffMix,
        count: 15,
        excludeIds: answeredQuestionIds,
      }).filter(q => Array.isArray(q.choices) && q.choices.length >= 2);

      if (questions.length === 0) {
        // Fallback: if targeted set is empty (all answered or skill missing
        // from this section's bank), use the basic query without excludes.
        const fallback = fallbackQuery(w.skillId ? [w.skillId] : [], { limit: 15 })
          .filter(q => Array.isArray(q.choices) && q.choices.length >= 2);
        if (fallback.length === 0) return null;
        return { ...w, section, qCount: fallback.length, qIds: fallback.map(q => q.id) };
      }
      return { ...w, section, qCount: questions.length, qIds: questions.map(q => q.id) };
    }).filter(Boolean);
  }, [annotatedWeaknesses, onStartPractice, answeredQuestionIds, studyPlan?.difficultyAnalysis]);

  // FINDING-002: the per-skill diagnostic sentences close with the same
  // boilerplate advice ("Untimed first; bring time pressure back once
  // accuracy holds."), repeated verbatim under every card — the single
  // loudest "generated, not written" signal on the page. When 3+ rows share
  // Section switcher scope: Focus Areas show only the selected section's
  // weaknesses. Computed BEFORE focusDiagnostics so the per-row diagnostic
  // sentences (index-aligned) stay matched to their cards.
  const sectionedFocusRows = useMemo(() => {
    if (sectionFilter === 'all') return skillPracticeRows;
    return skillPracticeRows.filter(w => (w.section === 'rw' ? 'rw' : 'math') === sectionFilter);
  }, [skillPracticeRows, sectionFilter]);

  // a closing sentence, hoist it to ONE section-level coach line and strip
  // it from each card. Pure render-time presentation; plan data untouched.
  const focusDiagnostics = useMemo(() => {
    const rows = sectionedFocusRows.map(w => formatDiagnosticSentence(w) || '');
    const lastSentence = (t) => {
      const m = t.trim().match(/[^.!?]+[.!?]$/);
      return m ? m[0].trim() : '';
    };
    const counts = new Map();
    rows.forEach(t => {
      const s = lastSentence(t);
      if (s) counts.set(s, (counts.get(s) || 0) + 1);
    });
    let shared = '';
    counts.forEach((n, s) => {
      if (n >= 3 && n > (counts.get(shared) || 0)) shared = s;
    });
    const perRow = rows.map(t => {
      const trimmed = t.trim();
      if (shared && trimmed.endsWith(shared)) {
        return trimmed.slice(0, trimmed.length - shared.length).trim();
      }
      return trimmed;
    });
    return { shared, perRow };
  }, [sectionedFocusRows]);

  // ── Activity row ─────────────────────────────────────────────────────
  const ActivityRow = ({ act, weekIdx, actIdx }) => {
    const done = act.completed;
    const isNavigable = act.type === 'lesson' || act.type === 'practice' || act.type === 'test';
    const isTip = act.type === 'strategy' || act.type === 'review';
    const tips = act.tips || [];
    const meta = TYPE_META[act.type] || TYPE_META.lesson;
    const chip = chipColorsFor(act);
    const section = act.type === 'practice' ? activitySection(act) : null;

    // FINDING-007: the completion toggle was absolutely positioned at the
    // card's top-right corner (-10px outside it), floating detached over the
    // border; tips wore colored left-border bars (AI-slop pattern, in blue).
    // The toggle now leads the row like a checklist; tips are a quiet
    // dot-list in slate.
    return (
      <div className={`ai-practice-banner${isTip ? ' is-tip' : ''}`} style={{ marginBottom: '16px', opacity: (done || act.skipped) ? 0.55 : 1, filter: (done || act.skipped) ? 'grayscale(1)' : 'none', position: 'relative' }}>
        <button
          type="button"
          className={`sp-act-toggle${done ? ' is-done' : ''}`}
          aria-label={done ? `Mark "${act.title}" incomplete` : `Mark "${act.title}" complete`}
          onClick={(e) => handleToggle(e, weekIdx, actIdx, done)}
        >
          {done && <CheckIcon size={14} color="#fff" />}
        </button>

        <div className="ai-banner-content" style={{ flex: 1 }}>
          <div className="ai-banner-icon" style={{
            // Tips recede to a neutral ghost chip — no amber square, which read
            // as a 4th brand hue and made tips out-shout the practice rows.
            background: done ? 'var(--color-slate-100)' : (isTip ? 'var(--sp-surface-2)' : chip.bg),
            color: done ? 'var(--color-slate-400)' : (isTip ? 'var(--sp-text-3)' : chip.fg),
            borderColor: done ? 'var(--color-slate-200)' : 'transparent'
          }}>
            {activityIcon(act.type)}
          </div>
          <div className="ai-banner-text-group" style={{ flex: 1 }}>
            <div className="ai-banner-title">
              <MathText>{act.title}</MathText>
            </div>
            <div className="ai-banner-desc">
              {act.day && <span className="sp-act-day">{act.day.slice(0, 3).toUpperCase()}</span>}
              {section && !done && (
                <span className={`sp-sec-chip is-${section}`}>{SECTION_CHIP_LABEL[section]}</span>
              )}
              {act.custom && <span className="sp-sec-chip" style={{ background: 'var(--sp-surface-2)', color: 'var(--sp-text-3)' }}>CUSTOM</span>}
              {act.skipped && <span className="sp-sec-chip" style={{ background: 'var(--sp-surface-2)', color: 'var(--sp-text-3)' }}>SKIPPED</span>}
              {act.custom ? 'Your task' : meta.label} {act.type === 'test' ? '· High Priority' : ''}
            </div>
            {isTip && tips.length > 0 && !done && (
              <ul className="sp-act-tips">
                {tips.map((tip, i) => (
                  <li key={i} className="sp-act-tip">
                    <MathText>{tip}</MathText>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {editMode ? (
          <div className="sp-edit-controls" onClick={(e) => e.stopPropagation()}>
            <select
              className="sp-edit-day"
              value={EDIT_DAYS.includes(act.day) ? act.day : 'Monday'}
              onChange={(e) => handleReschedule(weekIdx, actIdx, e.target.value)}
              aria-label={`Move "${act.title}" to a different day`}
            >
              {EDIT_DAYS.map((d) => <option key={d} value={d}>{d.slice(0, 3)}</option>)}
            </select>
            <button type="button" className="sp-edit-btn" onClick={() => handleToggleSkip(weekIdx, actIdx, act.skipped)}>
              {act.skipped ? 'Unskip' : 'Skip'}
            </button>
            <button type="button" className="sp-edit-btn sp-edit-remove" aria-label={`Remove "${act.title}"`} onClick={() => handleRemoveActivity(weekIdx, actIdx)}>
              Remove
            </button>
          </div>
        ) : (!done && isNavigable && (
          <div className="ai-banner-controls">
            <button className="btn-launch" onClick={(e) => { e.stopPropagation(); handleGo(act); }}>
              Launch {meta.label}
            </button>
          </div>
        ))}
      </div>
    );
  };

  // ── Render a week's activities as a flat list ────────────────────────
  const renderWeekActivities = (week, weekIdx) => {
    // Render only visible activities — skip type='lesson' since the
    // legacy LearnWorkspace flow is no longer surfaced (see top of
    // this component for the full note). Map BEFORE filter so we
    // preserve each activity's original index for the toggle-complete
    // callback (parent uses {weekIdx, actIdx} to mutate the full array
    // — feeding it a filtered index would mark the wrong activity).
    const fullActivities = week.activities || [];
    const activitiesWithIdx = fullActivities
      .map((act, origIdx) => ({ act, origIdx }))
      // In edit mode, also surface skipped tasks (greyed) so they can be
      // un-skipped or removed; otherwise skipped tasks stay hidden.
      .filter(({ act }) => (editMode
        ? (act.type !== 'lesson' && matchesSectionFilter(act, sectionFilter))
        : isVisibleActivity(act)));
    if (activitiesWithIdx.length === 0) {
      return <div style={{ fontSize: '14px', color: colors.text.muted, padding: '12px 0', textAlign: 'center' }}>No activities this week.</div>;
    }

    // ═══ RENDER-TIME RE-RANKING based on skillProgress ═══
    // Compute mastery status for each activity's target skill
    const rankedActivities = activitiesWithIdx.map(({ act, origIdx }) => {
      let masteryStatus = null; // null = no data, 'mastered', 'needs-focus', or 'normal'
      if (skillProgress && act.skillId) {
        const sp = skillProgress[act.skillId];
        if (sp && sp.attempts >= 2) {
          const mastery = sp.mastery ?? (sp.correct / sp.attempts * 100);
          if (mastery >= 70) masteryStatus = 'mastered';
          else if (mastery < 40) masteryStatus = 'needs-focus';
          else masteryStatus = 'normal';
        }
      }
      return { act, origIdx, masteryStatus };
    });

    // Sort: completed last; then CHRONOLOGICAL by day — with day chips
    // visible, Wednesday rendering above Monday read as "disorganized"
    // (design-critique blocker). Mastery urgency breaks ties within a day;
    // the NEEDS FOCUS tag still flags it.
    const sortOrder = { 'needs-focus': 0, normal: 1, null: 1, 'mastered': 2 };
    const weekDayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayRank = (act) => {
      const i = weekDayOrder.indexOf(act.day);
      return i === -1 ? weekDayOrder.length : i; // day-less activities sink to the end
    };
    const sorted = [...rankedActivities].sort((a, b) => {
      // Completed always at end
      if (a.act.completed && !b.act.completed) return 1;
      if (!a.act.completed && b.act.completed) return -1;
      if (a.act.completed && b.act.completed) return 0;
      const byDay = dayRank(a.act) - dayRank(b.act);
      if (byDay !== 0) return byDay;
      return (sortOrder[a.masteryStatus] ?? 1) - (sortOrder[b.masteryStatus] ?? 1);
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {sorted.map(({ act, origIdx, masteryStatus }) => (
          <div key={origIdx} style={{ position: 'relative' }}>
            <ActivityRow act={act} weekIdx={weekIdx} actIdx={origIdx} />
            {masteryStatus === 'mastered' && !act.completed && (
              <div className="sp-activity-status-tag mastered">
                Mastered
              </div>
            )}
            {masteryStatus === 'needs-focus' && !act.completed && (
              <div className="sp-activity-status-tag needs-focus">
                Needs Focus
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const otherWeeks = weeks.filter((_, i) => i !== displayCurrentWeek);
  const currentWeek = weeks[displayCurrentWeek];
  const currentVisibleActivities = visibleActivities(currentWeek);
  const currentDone = currentVisibleActivities.filter(a => a.completed).length;
  const currentTotal = currentVisibleActivities.length;

  // ── Plan modules (Today panel) ────────────────────────────────────────
  // The focus-area weaknesses, rendered as the redesigned "module cards with
  // rounds". sectionedFocusRows already respects the Math/R&W filter, and
  // focusDiagnostics.perRow is index-aligned to it.
  const modules = useMemo(
    () => sectionedFocusRows.map((w, i) =>
      buildPlanModule(w, i, skillProgress, focusDiagnostics.perRow[i])),
    [sectionedFocusRows, skillProgress, focusDiagnostics]
  );
  const visibleModules = showAllFocus ? modules : modules.slice(0, 3);

  // ── Weekly day-row timeline ───────────────────────────────────────────
  // The current plan week's activities laid onto this calendar week (Mon–Sun).
  const weekDayRows = useMemo(() => {
    const acts = (currentWeek?.activities || []).filter(
      (a) => a && a.type !== 'lesson' && !a.skipped && matchesSectionFilter(a, sectionFilter)
    );
    const now = new Date();
    const dow = now.getDay(); // 0 Sun … 6 Sat
    const monday = new Date(now);
    monday.setDate(now.getDate() + (dow === 0 ? -6 : 1 - dow));
    return WEEKDAY_FULL.map((dayName, idx) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + idx);
      const dayActs = acts.filter((a) => a.day === dayName);
      const isToday = dayName === todayDayName;
      const allDone = dayActs.length > 0 && dayActs.every((a) => a.completed);
      const allTips = dayActs.length > 0 && dayActs.every((a) => a.type === 'strategy' || a.type === 'review');
      let pill = 'PLANNED', pillKind = 'plain';
      if (isToday) { pill = 'TODAY'; pillKind = 'today'; }
      else if (dayActs.length === 0) { pill = 'REST'; }
      else if (allDone) { pill = 'DONE'; pillKind = 'done'; }
      else if (allTips) { pill = 'TIP'; }
      let title, sub;
      if (dayActs.length === 0) { title = 'Rest day'; sub = 'Recovery is part of the plan'; }
      else {
        const first = dayActs.find((a) => !a.completed) || dayActs[0];
        const extra = dayActs.length - 1;
        title = (first.title || 'Practice') + (extra > 0 ? ` +${extra} more` : '');
        const doneN = dayActs.filter((a) => a.completed).length;
        sub = `${dayActs.length} task${dayActs.length === 1 ? '' : 's'}${doneN ? ` · ${doneN} done` : ''}`;
      }
      return { dayName, dowLabel: dayName.slice(0, 3).toUpperCase(), num: date.getDate(), isToday, title, sub, pill, pillKind };
    });
  }, [currentWeek, sectionFilter, todayDayName]);

  const todayLongDate = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const ymPrefix = new Date().toISOString().slice(0, 7);
  const practicedThisMonth = Array.from(practicedDayKeys || []).filter(
    (k) => typeof k === 'string' && k.startsWith(ymPrefix)
  ).length;

  // One focus "module card" with its drill rounds. Launches the same assigned
  // drill the legacy Focus Area "Practice" button did (qIds + weakness).
  const renderModule = (m, idx) => (
    <div className="sp-module" key={m.weakness?.skillId || idx}>
      <div className="sp-module-top">
        <span className={`sp-module-tag is-${m.section}`}>{m.tag}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          {m.domain && <div className="sp-module-domain">{domainLabel(m.domain)}</div>}
          <div className="sp-module-titlerow">
            <span className="sp-module-title"><MathText>{m.title}</MathText></span>
            {typeof m.acc === 'number' && (
              <span className={`sp-module-acc is-${m.accBand}`}>{m.acc}%</span>
            )}
          </div>
          {m.desc && <div className="sp-module-desc"><MathText>{m.desc}</MathText></div>}
        </div>
      </div>
      <div className="sp-module-actions">
        {m.status === 'complete' ? (
          <span className="sp-module-complete-badge">
            <CheckIcon size={14} color="currentColor" /> PRACTICE COMPLETE
          </span>
        ) : (
          <span className="sp-module-meta">{m.meta}</span>
        )}
        <button
          type="button"
          className={`sp-module-btn ${m.status === 'complete' ? 'is-review' : m.status === 'progress' ? 'is-continue' : 'is-start'}`}
          onClick={() => (m.qIds.length
            ? onStartPractice(null, null, {
                questionIds: m.qIds,
                source: 'study-plan-assigned',
                label: `${m.title} Practice`,
                weakness: m.weakness,
              })
            : showToast({ type: 'info', message: 'No drill set is available for this skill yet.' }))}
        >
          {m.status === 'complete' ? 'Review session' : m.status === 'progress' ? 'Continue' : 'Start'}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>
      <div className="sp-rounds">
        {m.rounds.map((r, ri) => (
          <div className="sp-round" key={ri}>
            <span className={`sp-round-dot is-${r.status}`} aria-hidden="true">
              {r.status === 'done' && <CheckIcon size={13} color="#fff" />}
            </span>
            <span className="sp-round-label">{r.label}</span>
            {r.keyFocus && <span className="sp-round-key">KEY FOCUS</span>}
            <span className="sp-round-spacer" />
            <span className={`sp-round-prog${r.status === 'active' ? ' is-active' : ''}`}>{r.prog} Q</span>
          </div>
        ))}
      </div>
      {m.adaptiveLine && (
        <p className="sp-card-diagnostic sp-card-adaptive"><MathText>{m.adaptiveLine}</MathText></p>
      )}
      {m.predictedStruggle && (
        <p className="sp-prediction-flag">
          Prioritized in your plan — flagged as a likely struggle area on your next test{m.predictedStruggle.reason ? ` (${m.predictedStruggle.reason.toLowerCase()})` : ''}.
        </p>
      )}
    </div>
  );

  // ====================================================================
  // RENDER
  // ====================================================================

  return (
    <div className="study-plan-dashboard sp-with-rail" data-theme="light">
      <div className="sp-main">

      {/* ── Title bar ─────────────────────────────────────────────── */}
      {(user?.firstName || user?.targetScore || latestScore !== null) && (
        <header className="sp-titlebar">
          <div className="sp-titlebar-id">
            {variant !== 'inline' && <Avatar user={user} size={AVATAR_SIZES.md} />}
            <div style={{ minWidth: 0 }}>
              <h1 className="sp-title">
                {user?.firstName ? `${user.firstName}'s Study Plan` : 'Your Study Plan'}
              </h1>
              <div className="sp-title-meta">
                {latestScore !== null && (
                  <span>
                    <strong>{latestScore}</strong>
                    {isSectionScaleScore(latestScore, { isMultiSection: latestTest?.isMultiSection }) ? ' now' : ' composite'}
                  </span>
                )}
                {user?.testDate && !testDateIsPast && daysUntilTest !== null && (
                  <span>test in <strong>{daysUntilTest} day{daysUntilTest === 1 ? '' : 's'}</strong></span>
                )}
                {user?.targetScore && (
                  <span>path to <strong>{user.targetScore}{user.targetScore <= 800 ? ' Math' : ''}</strong></span>
                )}
              </div>
            </div>
          </div>
        </header>
      )}

      {/* ── Tabs + date pills ─────────────────────────────────────── */}
      {showSubTabs && (
        <div className="sp-tabs-row">
          <div className="sp-tabs" role="tablist" aria-label="Study plan view">
            <button
              type="button" role="tab"
              aria-selected={activeView === 'todaysTasks'}
              className={`sp-tab${activeView === 'todaysTasks' ? ' is-active' : ''}`}
              onClick={() => setActiveView('todaysTasks')}
            >
              Today's Tasks
              {todaysTasksCount > 0 && <span className="sp-tab-count">{todaysTasksCount}</span>}
            </button>
            <button
              type="button" role="tab"
              aria-selected={activeView === 'weeklyView'}
              className={`sp-tab${activeView === 'weeklyView' ? ' is-active' : ''}`}
              onClick={() => setActiveView('weeklyView')}
            >
              Weekly View
              {weeklyViewCount > 0 && <span className="sp-tab-count">{weeklyViewCount}</span>}
            </button>
          </div>
          <div className="sp-datepills">
            {practicedThisMonth > 0 && (
              <span className="sp-datepill is-streak">{practicedThisMonth} DAYS PRACTICED</span>
            )}
            <span className="sp-datepill">{todayLongDate.toUpperCase()}</span>
          </div>
        </div>
      )}

      {adaptiveOverlay?.isTriage && (
        <div className="sp-triage-banner" role="status">
          Triage mode: prioritizing your highest-impact skills before test day.
        </div>
      )}

      {/* ════════════ TODAY'S TASKS TAB — focus modules with rounds ════════════ */}
      {activeView === 'todaysTasks' && (
        <div className="sp-today-panel">
          <div className="sp-today-head">
            <h2 className="sp-today-date">{todayLongDate}</h2>
            <div className="sp-seg" role="tablist" aria-label="Plan section">
              {SECTION_FILTERS.map((tab) => (
                <button
                  key={tab.id} type="button" role="tab"
                  aria-selected={sectionFilter === tab.id}
                  className={`sp-seg-btn${sectionFilter === tab.id ? ' is-active' : ''}`}
                  onClick={() => setSectionFilter(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {dailyIntro && <p className="sp-today-narrative">{dailyIntro}</p>}
          {modules.length > 0 ? (
            <>
              <div className="sp-module-list">
                {visibleModules.map((m, idx) => renderModule(m, idx))}
              </div>
              {modules.length > 3 && (
                <button type="button" className="sp-showall" onClick={() => setShowAllFocus((v) => !v)}>
                  {showAllFocus ? 'Show fewer' : `Show all ${modules.length} focus skills`}
                </button>
              )}
            </>
          ) : (
            <div className="sp-today-empty">
              {sectionFilter !== 'all'
                ? `No ${sectionFilter === 'rw' ? 'Reading & Writing' : 'Math'} focus skills flagged right now. Switch to All to see your full plan.`
                : 'No focus skills flagged right now — your latest test came back clean. Take another test to refresh your plan.'}
            </div>
          )}

          {(todaySlice?.kind === 'rest-day'
            || todaySlice?.kind === 'all-done'
            || todaySlice?.kind === 'plan-complete')
            && comingUpDays.length > 0 && (
            <section className="sp-coming-up" aria-label="Coming up this week" style={{ marginTop: '16px' }}>
              <div className="sp-coming-up-header">
                <span className="sp-coming-up-eyebrow">Coming up this week</span>
                <span className="sp-coming-up-week">Week {displayCurrentWeek + 1}</span>
              </div>
              <div className="sp-coming-up-list">
                {comingUpDays.map((cu) => {
                  const dayShort = cu.day.slice(0, 3).toUpperCase();
                  const sampleTitle = cu.sample?.title || 'Practice';
                  return (
                    <div key={cu.day} className="sp-coming-up-row">
                      <div className="sp-coming-up-day">
                        <span className="sp-coming-up-daychip">{dayShort}</span>
                        {cu.offset === 1 && <span className="sp-coming-up-soon">Tomorrow</span>}
                      </div>
                      <div className="sp-coming-up-text">
                        <div className="sp-coming-up-title">{sampleTitle}</div>
                        <div className="sp-coming-up-meta">
                          {cu.incomplete} of {cu.total} task{cu.total === 1 ? '' : 's'}
                          {cu.incomplete < cu.total && ` · ${cu.total - cu.incomplete} done`}
                        </div>
                      </div>
                      <button type="button" className="sp-coming-up-cta" onClick={() => setActiveView('weeklyView')}>
                        View →
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}

      {/* ════════════ WEEKLY VIEW TAB ════════════ */}
      {activeView === 'weeklyView' && (
      <div className="sp-weekly">

        {/* Plan-updated banner (adaptive plan diff) */}
        {!deltaDismissed && delta && !delta.isFirst && delta.headline && (
          <div className="sp-banner is-info">
            <div className="sp-banner-header">
              <span className="sp-banner-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
              </span>
              <span className="sp-banner-title">Plan Updated</span>
              <button className="sp-banner-close" onClick={() => {
                if (studyPlanMeta?.artifactId) localStorage.setItem(`dismissedDelta:${studyPlanMeta.artifactId}`, '1');
                setDeltaDismissed(true);
              }}>&times;</button>
            </div>
            <div className="sp-banner-content">{delta.headline}</div>
            {delta.skillChanges?.length > 0 && (
              <div className="sp-banner-changes">
                {(showAllSkillChanges ? delta.skillChanges : delta.skillChanges.slice(0, 2)).map((sc, i) => {
                  const dotColor = sc.direction === 'improved' ? 'var(--sp-done)'
                    : sc.direction === 'worsened' ? 'var(--sp-error)'
                    : sc.direction === 'new' ? 'var(--sp-orange)'
                    : 'var(--sp-text-3)';
                  const label = (sc.direction === 'improved' || sc.direction === 'worsened')
                    ? `${sc.skill}: ${sc.oldAccuracy}% → ${sc.newAccuracy}%`
                    : sc.direction === 'new'
                    ? `${sc.skill}: new gap found on this test`
                    : `${sc.skill}: was ${sc.oldAccuracy}%, no longer a weakness`;
                  return (
                    <div key={i} className="sp-banner-change">
                      <span className="sp-banner-change-dot" style={{ background: dotColor }} aria-hidden="true" />
                      <span>{label}</span>
                    </div>
                  );
                })}
                {delta.skillChanges.length > 2 && (
                  <button type="button" className="sp-banner-morebtn" onClick={() => setShowAllSkillChanges(v => !v)}>
                    {showAllSkillChanges ? 'Show less' : `Show ${delta.skillChanges.length - 2} more`}
                  </button>
                )}
              </div>
            )}
            {delta.scoreChange && (
              <div style={{ marginTop: '10px', fontSize: '13px', color: 'var(--sp-text-3)' }}>
                Score: {delta.scoreChange.old} → {delta.scoreChange.new} ({delta.scoreChange.delta > 0 ? '+' : ''}{delta.scoreChange.delta} points)
              </div>
            )}
          </div>
        )}

        {delta?.isFirst && (
          <div className="sp-banner is-success">
            <div className="sp-banner-header">
              <span className="sp-banner-icon"><CheckIcon size={14} color="#fff" /></span>
              <span className="sp-banner-title">Your First Study Plan</span>
            </div>
            <div className="sp-banner-content">
              This is your focused starter plan, built from your first test. Work through it, then take Practice Test&nbsp;2 — that gathers the data to unlock your full, more personalized plan.
            </div>
          </div>
        )}

        {/* Adaptive coach notes */}
        {(studyPlan.deltaFromPrevious || studyPlan.persistentWeaknessStrategy) && (
          <div className="sp-notes">
            {studyPlan.deltaFromPrevious && (
              <div className="sp-note">
                <span className="sp-note-eyebrow">Updated since your last test</span>
                <p className="sp-note-text">
                  {deltaExpanded ? deltaText : deltaFirstSentence}
                  {deltaHasMore && (
                    <button type="button" className="sp-note-toggle" onClick={() => setDeltaExpanded(v => !v)}>
                      {deltaExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </p>
              </div>
            )}
            {studyPlan.persistentWeaknessStrategy && (
              <div className="sp-note">
                <span className="sp-note-eyebrow">Stuck skill — different approach needed</span>
                <p className="sp-note-text">
                  {strategyExpanded ? strategyText : strategyFirstSentence}
                  {strategyHasMore && (
                    <button type="button" className="sp-note-toggle" onClick={() => setStrategyExpanded(v => !v)}>
                      {strategyExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </p>
              </div>
            )}
          </div>
        )}

        {/* This week — day-row glance + section filter */}
        <div className="sp-today-head" style={{ marginTop: '4px', marginBottom: '12px' }}>
          <h3 className="sp-section-title" style={{ margin: 0 }}>This week</h3>
          <div className="sp-seg" role="tablist" aria-label="Plan section">
            {SECTION_FILTERS.map((tab) => (
              <button
                key={tab.id} type="button" role="tab"
                aria-selected={sectionFilter === tab.id}
                className={`sp-seg-btn${sectionFilter === tab.id ? ' is-active' : ''}`}
                onClick={() => setSectionFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="sp-weekrows">
          {weekDayRows.map((d) => (
            <div className={`sp-weekrow${d.isToday ? ' is-today' : ''}`} key={d.dayName}>
              <div className="sp-weekrow-date">
                <div className="sp-weekrow-dow">{d.dowLabel}</div>
                <div className="sp-weekrow-num">{d.num}</div>
              </div>
              <div className="sp-weekrow-rule" aria-hidden="true" />
              <div className="sp-weekrow-body">
                <div className="sp-weekrow-title">{d.title}</div>
                <div className="sp-weekrow-sub">{d.sub}</div>
              </div>
              <span className={`sp-weekrow-pill${d.pillKind === 'today' ? ' is-today' : d.pillKind === 'done' ? ' is-done' : ''}`}>{d.pill}</span>
            </div>
          ))}
        </div>

        {/* Edit-plan toggle (Weekly view) */}
        {onEditPlan && (
          <div className="sp-edit-bar">
            <button
              type="button"
              className={`sp-edit-toggle${editMode ? ' is-active' : ''}`}
              aria-pressed={editMode}
              onClick={() => { setEditMode((v) => !v); setAddTaskWeek(null); }}
            >
              {editMode ? 'Done editing' : 'Edit plan'}
            </button>
          </div>
        )}

        {/* Plan Settings — focus areas + pacing (edit mode only) */}
        {editMode && (
          <div className="sp-edit-settings">
            <div className="sp-edit-section">
              <div className="sp-edit-section-title">Focus areas</div>
              <div className="sp-focus-chips">
                {(studyPlan.weaknesses || []).map((w) => (
                  <span key={w.skillId} className="sp-focus-chip">
                    {w.skill}
                    <button type="button" aria-label={`Remove ${w.skill} from focus areas`} onClick={() => handleRemoveFocus(w.skillId)}>×</button>
                  </span>
                ))}
              </div>
              {addableFocusSkills.length > 0 && (
                <select
                  className="sp-focus-add"
                  value=""
                  aria-label="Add a focus area"
                  onChange={(e) => {
                    const gap = addableFocusSkills.find((g) => g.skillId === e.target.value);
                    if (gap) handleAddFocus(gap);
                  }}
                >
                  <option value="" disabled>+ Add a focus skill…</option>
                  {addableFocusSkills.map((g) => (
                    <option key={g.skillId} value={g.skillId}>{g.skillName || g.skill || g.skillId}</option>
                  ))}
                </select>
              )}
            </div>

            <div className="sp-edit-section">
              <div className="sp-edit-section-title">Pacing</div>
              <div className="sp-pacing-row">
                <span className="sp-pacing-label">Minutes per day</span>
                <div className="sp-pacing-opts">
                  {[15, 30, 45, 60, 90].map((m) => {
                    const cur = studyPlan.summary?.stats?.minutesPerDay || studyPlan.intensityConfig?.minutesPerDay || 30;
                    return (
                      <button
                        key={m}
                        type="button"
                        className={`sp-pacing-opt${cur === m ? ' is-active' : ''}`}
                        onClick={() => handlePacing(m, studyPlan.userPrefs?.examDate || studyPlan.examDate || null)}
                      >{m}</button>
                    );
                  })}
                </div>
              </div>
              <div className="sp-pacing-row">
                <span className="sp-pacing-label">Test date</span>
                <input
                  type="date"
                  className="sp-pacing-date"
                  value={(studyPlan.userPrefs?.examDate || studyPlan.examDate || '').slice(0, 10)}
                  onChange={(e) => handlePacing(studyPlan.summary?.stats?.minutesPerDay || studyPlan.intensityConfig?.minutesPerDay || 30, e.target.value || null)}
                />
              </div>
            </div>
          </div>
        )}

        {/* This week's sessions (launchable) + collapsed other weeks */}
        <div className="sp-otherweeks" style={{ marginTop: '14px' }}>
          <div className="sp-otherweek" style={{ borderColor: 'var(--sp-orange)' }}>
            <div className="sp-otherweek-head" style={{ cursor: 'default' }}>
              <div className="sp-otherweek-left">
                <div className="sp-otherweek-disc" style={{ background: 'var(--sp-orange-tint)', color: 'var(--sp-orange)' }}>{displayCurrentWeek + 1}</div>
                <div className="sp-otherweek-title">
                  This week's sessions{cleanWeekTitle(currentWeek?.title) ? ` — ${cleanWeekTitle(currentWeek.title)}` : ''}
                </div>
              </div>
              <div className="sp-otherweek-meta">
                <span className="sp-otherweek-prog">{currentDone} / {currentTotal}</span>
              </div>
            </div>
            <div className="sp-otherweek-body">
              {renderWeekActivities(currentWeek, displayCurrentWeek)}
              {editMode && (
                <div className="sp-add-task">
                  {addTaskWeek === displayCurrentWeek ? (
                    <div className="sp-add-task-form">
                      <input
                        type="text"
                        className="sp-add-task-input"
                        placeholder="Add your own task (e.g. Redo Test 3 misses)"
                        value={addTaskTitle}
                        onChange={(e) => setAddTaskTitle(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleAddTask(displayCurrentWeek); }}
                      />
                      <select className="sp-edit-day" value={addTaskDay} onChange={(e) => setAddTaskDay(e.target.value)} aria-label="Day for new task">
                        {EDIT_DAYS.map((d) => <option key={d} value={d}>{d.slice(0, 3)}</option>)}
                      </select>
                      <button type="button" className="sp-edit-btn" onClick={() => handleAddTask(displayCurrentWeek)}>Add</button>
                      <button type="button" className="sp-edit-btn" onClick={() => { setAddTaskWeek(null); setAddTaskTitle(''); }}>Cancel</button>
                    </div>
                  ) : (
                    <button type="button" className="sp-add-task-btn" onClick={() => { setAddTaskWeek(displayCurrentWeek); setAddTaskDay('Monday'); }}>
                      + Add a task
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
          {otherWeeks.map((week) => {
            const realIdx = weeks.indexOf(week);
            const isOpen = expandedWeek === realIdx;
            const doneN = (week.activities || []).filter((a) => a.completed && !a.skipped).length;
            const totalN = (week.activities || []).filter((a) => !a.skipped).length;
            const isComplete = totalN > 0 && doneN === totalN;
            return (
              <div key={realIdx} className={`sp-otherweek${isComplete ? ' is-complete' : ''}`}>
                <button
                  type="button"
                  className="sp-otherweek-head"
                  aria-expanded={isOpen}
                  onClick={() => setExpandedWeek(isOpen ? null : realIdx)}
                >
                  <div className="sp-otherweek-left">
                    <div className="sp-otherweek-disc">
                      {isComplete ? <CheckIcon size={14} color="currentColor" /> : realIdx + 1}
                    </div>
                    <div className="sp-otherweek-title">
                      Week {week.weekNumber}{cleanWeekTitle(week.title) ? ` — ${cleanWeekTitle(week.title)}` : ''}
                    </div>
                  </div>
                  <div className="sp-otherweek-meta">
                    <span className="sp-otherweek-prog">{doneN} / {totalN}</span>
                    <span className={`sp-otherweek-chev${isOpen ? ' is-open' : ''}`}>
                      <ChevronDownIcon size={16} color="currentColor" />
                    </span>
                  </div>
                </button>
                {isOpen && (
                  <div className="sp-otherweek-body">
                    {renderWeekActivities(week, realIdx)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* How you test — identity insights */}
        {identityInsights.length > 0 && (
          <div>
            <h3 className="sp-section-title">How you test</h3>
            <div className="sp-identity-grid">
              {identityInsights.map((insight) => (
                <div key={insight.key} className="sp-identity-card">
                  <div className="sp-identity-stat">{insight.stat}</div>
                  <div className="sp-identity-label">{insight.label}</div>
                  <p className="sp-identity-text">{insight.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <ScoreTrajectory artifact={studyPlanArtifact} />

      </div>
      )}

      {/* ── Tune-ups — review queue + pacing + past tests. Deliberately kept
            quiet and BELOW the plan: important, but it must never out-shout the
            actual study plan above it. ───────────────────────────────────── */}
      <div className="sp-attention">
        {showReviewTestsButton && (
          <div className="sp-past-test-review-cta">
            <button type="button" className="sp-past-test-review-btn" onClick={onReviewPastTests}>
              <span className="sp-past-test-review-icon" aria-hidden="true"><ClipboardIcon size={18} /></span>
              <span className="sp-past-test-review-text">
                <span className="sp-past-test-review-title">Review your tests</span>
                <span className="sp-past-test-review-sub">
                  {completedTestCount === 1
                    ? 'See every wrong answer explained from your test'
                    : `See every wrong answer explained from your ${completedTestCount} tests`}
                </span>
              </span>
              <span className="sp-past-test-review-chev" aria-hidden="true">›</span>
            </button>
          </div>
        )}
        <StudyPlanReviewSection
          reviewQueue={reviewQueue}
          onReviewTestWrong={onReviewTestWrong}
          onStartReview={onStartReview}
        />
        <StudyPlanPacingSection
          questionTelemetry={pacingTelemetry}
          struggle={pacingStruggle}
          onStartPacing={onStartPacing}
          testDateIsPast={testDateIsPast}
        />
      </div>

      </div> {/* /.sp-main */}

      {/* ── Right rail — calendar heatmap + colored summary tiles ────── */}
      <aside className="sp-rail" aria-label="Study plan summary">
        <CalendarMonth practicedDays={practicedDayKeys} testDate={user?.testDate} />

        {latestScore !== null && (
          <div className="sp-tile is-score">
            <div className="sp-tile-eyebrow">Current Score</div>
            <div className="sp-tile-row">
              <span className="sp-tile-num">{latestScore}</span>
              {scoreDelta !== null && (
                <span className={`sp-tile-delta ${scoreDelta >= 0 ? 'is-up' : 'is-down'}`}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    {scoreDelta >= 0 ? <path d="M7 17 17 7M9 7h8v8"/> : <path d="M7 7 17 17M17 9v8H9"/>}
                  </svg>
                  {Math.abs(scoreDelta)} pts
                </span>
              )}
            </div>
            {sortedTests.length > 0 && (
              <div className="sp-tile-sub">Across {sortedTests.length} test{sortedTests.length !== 1 ? 's' : ''}</div>
            )}
          </div>
        )}

        {(user?.targetScore || user?.testDate) && (
          <div className="sp-tile-pair">
            {user?.targetScore && (
              <div className="sp-tile is-goal">
                <div className="sp-tile-eyebrow">{goalAchieved ? 'Goal Achieved' : 'Goal Score'}</div>
                <div className="sp-tile-num">{user.targetScore}</div>
                <div className="sp-tile-sub">{goalAchieved ? `+${goalAboveDelta} pts above` : 'From onboarding'}</div>
              </div>
            )}
            {user?.testDate && (
              <div className="sp-tile is-exam">
                <div className="sp-tile-eyebrow">{testDateIsPast ? 'Test Date' : 'Days Until Exam'}</div>
                <div className="sp-tile-num">{testDateIsPast ? '—' : (daysUntilTest ?? '—')}</div>
                <div className="sp-tile-sub">
                  {testDateIsPast
                    ? `Was ${Math.abs(daysUntilTest)} days ago`
                    : parseLocalDate(user.testDate)?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Prediction record — "trust this plan" evidence. */}
        {predictionTrust && (
          <div className="sp-tile is-plain">
            <div className="sp-tile-eyebrow">Prediction Record</div>
            <div className="sp-tile-num">{predictionTrust.hits}/{predictionTrust.total}</div>
            <div className="sp-tile-sub">
              {predictionTrust.total === 1
                ? 'test where we called your struggle areas early'
                : 'tests where we called your struggle areas early'}
            </div>
          </div>
        )}

        {/* Live review streak — hidden unless touched today/yesterday. */}
        {reviewStreak && (
          <div className="sp-tile is-plain">
            <div className="sp-tile-eyebrow">Review Streak</div>
            <div className="sp-tile-num">{reviewStreak.current}</div>
            <div className="sp-tile-sub">
              days in a row{reviewStreak.best > reviewStreak.current ? ` · best ${reviewStreak.best}` : ' · personal best'}
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

export default StudyPlanDashboard;
