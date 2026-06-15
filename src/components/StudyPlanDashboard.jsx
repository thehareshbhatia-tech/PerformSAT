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
import { getTodaySlice } from '../services/selectors/todaySlice';
import { getSessionAdherence } from '../services/selectors/sessionAdherence';
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
import TodaysTasksCard from './TodaysTasksCard';
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

  // ── Derived data ─────────────────────────────────────────────────────
  // Render-time guard: legacy plan artifacts in Firestore may still
  // carry type='lesson' activities — those routed to the legacy
  // LearnWorkspace, which the product no longer surfaces. Drop them
  // before rendering so users only ever see practice/review/strategy/
  // test activities. Generator no longer emits lessons (see
  // studyPlanGenerator.js:472), but this defends against old plans
  // already persisted server-side.
  const isVisibleActivity = (a) => a && a.type !== 'lesson' && matchesSectionFilter(a, sectionFilter);
  const visibleActivities = (week) => (week?.activities || []).filter(isVisibleActivity);

  const delta = studyPlanArtifact?.delta || studyPlan._diff || null;
  const longitudinal = studyPlanArtifact?.longitudinal || null;
  const { weeks, summary } = studyPlan;
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
  const progressPercent = totalActivities > 0 ? Math.round((completedActivities / totalActivities) * 100) : 0;
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
  // FINDING-002: Focus Areas disclosure state — the section diagnosis clamps
  // like the coach notes, and only the top 5 skills render until expanded.
  const [diagExpanded, setDiagExpanded] = useState(false);
  const [showAllFocus, setShowAllFocus] = useState(false);

  // Today's-Tasks tab derived state.
  const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayDayName = DAY_NAMES[new Date().getDay()];
  const todaySlice = useMemo(() => getTodaySlice(studyPlan, todayDayName), [studyPlan, todayDayName]);
  const sessionAdherence = useMemo(
    () => getSessionAdherence({ practiceProgress, practiceTestResults, drillDays }),
    [practiceProgress, practiceTestResults, drillDays],
  );
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
    const visible = week.activities.filter(a => a && a.type !== 'lesson');
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

    // Same 3-tier routing as TodaysTasksCard's onStartActivity below — the
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
      <div className="ai-practice-banner" style={{ marginBottom: '16px', opacity: done ? 0.6 : 1, filter: done ? 'grayscale(1)' : 'none', position: 'relative' }}>
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
            background: done ? 'var(--color-slate-100)' : chip.bg,
            color: done ? 'var(--color-slate-400)' : chip.fg,
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
              {meta.label} {act.type === 'test' ? '· High Priority' : ''}
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

        {!done && isNavigable && (
          <div className="ai-banner-controls">
            <button className="btn-launch" onClick={(e) => { e.stopPropagation(); handleGo(act); }}>
              Launch {meta.label}
            </button>
          </div>
        )}
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
      .filter(({ act }) => isVisibleActivity(act));
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

  // ====================================================================
  // RENDER — 3 clean sections
  // ====================================================================

  return (
    <div className="study-plan-dashboard sp-with-rail">
      <div className="sp-main">

      {/* ────────────────────────────────────────────────────────────────
          PERSONAL HERO — the plan is addressed to someone, anchored to
          their target, their test date, and their stretch school. Falls
          back gracefully field-by-field; hidden only when we know nothing.
      ──────────────────────────────────────────────────────────────── */}
      {(user?.firstName || user?.targetScore || latestScore !== null) && (
        <header
          className="sp-hero"
          // Standalone view only: in the inline (dashboard-tab) mount the
          // identity hero above the tab bar already carries the face — a
          // second avatar 100px below would read as repetition (H-3).
          style={variant !== 'inline' ? { display: 'flex', alignItems: 'center', gap: '12px' } : undefined}
        >
          {variant !== 'inline' && <Avatar user={user} size={AVATAR_SIZES.md} />}
          <div style={variant !== 'inline' ? { minWidth: 0 } : undefined}>
          <h2 className="sp-hero-title">
            {(() => {
              const name = user?.firstName;
              // Composite (400-1600, on-ramp era) targets read as plain SAT
              // scores; legacy section-scale (200-800) targets keep the
              // "Math" label so the title stays accurate when the latest
              // headline score is a composite (scale-safety per
              // goalProgress.js / isCompositeScaleTarget).
              const targetLabel = user?.targetScore
                ? `${user.targetScore}${user.targetScore <= 800 ? ' Math' : ''}`
                : null;
              const body = goalAchieved && targetLabel
                ? `you're past ${targetLabel} — the job now is holding it`
                : targetLabel
                  ? `here's your path to ${targetLabel}`
                  : 'here\'s your plan';
              return name
                ? `${name}, ${body}`
                : body.charAt(0).toUpperCase() + body.slice(1);
            })()}
          </h2>
          <p className="sp-hero-meta">
            {latestScore !== null && (
              <span>
                <strong>{latestScore}</strong>
                {isSectionScaleScore(latestScore, { isMultiSection: latestTest?.isMultiSection })
                  ? ' now'
                  : ' composite now'}
              </span>
            )}
            {user?.testDate && !testDateIsPast && daysUntilTest !== null && (
              <span>test in <strong>{daysUntilTest} day{daysUntilTest === 1 ? '' : 's'}</strong></span>
            )}
            {targetSchool && (
              <span>{targetSchool.name} Median Math: <strong>{targetSchool.satMath}</strong></span>
            )}
          </p>
          </div>
        </header>
      )}

      {/* ────────────────────────────────────────────────────────────────
          PROGRESS STRIP (Weekly View only — Today's Tasks gets its own
          day-header inside TodaysTasksCard, matching Acely's reference).
      ──────────────────────────────────────────────────────────────── */}
      {activeView === 'weeklyView' && (
        <header className="sp-strip">
          <div className="sp-strip-cell">
            <span className="sp-strip-eyebrow">Plan Progress</span>
            <span className="sp-strip-num">{progressPercent}%</span>
            <div className="sp-strip-bar" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100}>
              <div className="sp-strip-bar-fill" style={{ width: `${progressPercent}%` }} />
            </div>
            <span className="sp-strip-meta">{completedActivities} of {totalActivities} tasks</span>
          </div>
          <div className="sp-strip-divider" aria-hidden="true" />
          <div className="sp-strip-cell sp-strip-objective">
            <span className="sp-strip-eyebrow">Current Objective</span>
            <span className="sp-strip-text">{summary?.headline || 'Your study plan'}</span>
          </div>
          <div className="sp-strip-divider" aria-hidden="true" />
          <div className="sp-strip-cell">
            <span className="sp-strip-eyebrow">Next</span>
            <span className="sp-strip-text">Week {displayCurrentWeek + 1}</span>
          </div>
        </header>
      )}

      {/* Past-Test-Review entry — above the sub-tabs so it appears in BOTH
          inline (Dashboard tab) and standalone (sidebar) mounts. Originally
          it lived inside the Today's Tasks branch, but the inline mount
          defaults to Weekly View, so the CTA was invisible to dashboard
          tab users. Gated by feature flag + at-least-one-completed-test. */}
      {showReviewTestsButton && (
        <div className="sp-past-test-review-cta">
          <button
            type="button"
            className="sp-past-test-review-btn"
            onClick={onReviewPastTests}
          >
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

      {/* Review Queue + Pacing — lifted off the home Dashboard into the plan.
          Above the sub-tabs so they show in BOTH Today's Tasks and Weekly
          View. Section-agnostic (a queue spans Math + R&W), so they sit
          outside the Math/R&W filter scope. Each renders nothing when it has
          nothing to show (no due items / no telemetry). */}
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

      {/* ────────────────────────────────────────────────────────────────
          SUB-TABS: 'Today's Tasks (N) / Weekly View (N)' matching Acely.
          Hidden when mounted inline inside another tab structure.
      ──────────────────────────────────────────────────────────────── */}
      {showSubTabs && (
        <div className="sp-subtabs" role="tablist" aria-label="Study plan view">
          <button
            type="button"
            role="tab"
            aria-selected={activeView === 'todaysTasks'}
            className={`sp-subtab${activeView === 'todaysTasks' ? ' is-active' : ''}`}
            onClick={() => setActiveView('todaysTasks')}
          >
            Today's Tasks
            {todaysTasksCount > 0 && <span className="sp-subtab-count">{todaysTasksCount}</span>}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeView === 'weeklyView'}
            className={`sp-subtab${activeView === 'weeklyView' ? ' is-active' : ''}`}
            onClick={() => setActiveView('weeklyView')}
          >
            Weekly View
            {weeklyViewCount > 0 && <span className="sp-subtab-count">{weeklyViewCount}</span>}
          </button>
        </div>
      )}

      {/* Triage mode (adaptivity audit item 5) — the reprioritization engine
          flips isTriage when the SAT is < 7 days out and the plan narrows to
          the top-3 highest-impact skills. One quiet line, both views. */}
      {adaptiveOverlay?.isTriage && (
        <div className="sp-triage-banner" role="status">
          Triage mode: prioritizing your highest-impact skills before test day.
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════════
          TODAY'S TASKS TAB — day-grain TodaysTasksCard hero + a
          "Coming Up This Week" preview when today's slate is empty so the
          tab doesn't leave a wall of whitespace under a small card.
      ════════════════════════════════════════════════════════════════ */}
      {activeView === 'todaysTasks' && (
        <>
          <TodaysTasksCard
            slice={todaySlice}
            adherence={sessionAdherence}
            dailyIntro={dailyIntro}
            firstName={user?.firstName}
            onStartActivity={(activity) => {
              if (!activity || !onStartPractice) return;

              // Route this activity through AssignedPracticeShell (same UI as
              // the Weekly View "Practice" buttons) instead of falling through
              // to App.jsx's legacy `practiceMode: 'prescriptive'` inline
              // render (since removed). The 3-tier granular-to-pattern lookup lives in
              // services/activityDrillRouter.js (shared with the HOME
              // dashboard mount of TodaysTasksCard — see commit 994933e for
              // the original handler this was extracted from).
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
                  source: 'study-plan-todays-tasks',
                  label: route.label,
                  weakness: route.weakness,
                });
              } else if (route?.kind === 'module') {
                // Last-resort fallback — the legacy module/section path so
                // the user at least lands SOMEWHERE rather than a dead button.
                onStartPractice(route.moduleId, route.sectionName);
              } else {
                showToast({ type: 'info', message: 'No drill set is available for this activity yet.' });
              }
            }}
            onTakeTest={onStartPracticeTest}
          />

          {(todaySlice?.kind === 'rest-day'
            || todaySlice?.kind === 'all-done'
            || todaySlice?.kind === 'plan-complete')
            && comingUpDays.length > 0 && (
            <section className="sp-coming-up" aria-label="Coming up this week">
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
                        {cu.offset === 1 && (
                          <span className="sp-coming-up-soon">Tomorrow</span>
                        )}
                      </div>
                      <div className="sp-coming-up-text">
                        <div className="sp-coming-up-title">{sampleTitle}</div>
                        <div className="sp-coming-up-meta">
                          {cu.incomplete} of {cu.total} task{cu.total === 1 ? '' : 's'}
                          {cu.incomplete < cu.total && ` · ${cu.total - cu.incomplete} done`}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="sp-coming-up-cta"
                        onClick={() => {
                          // "Coming up" is a preview of FUTURE days. Don't
                          // auto-launch the activity — that route hits the
                          // legacy LearnWorkspace / 2-arg practice flow, which
                          // is old scaffolding the rest of the app no longer
                          // surfaces. Switch to Weekly View where the user
                          // can engage with the full plan in the canonical UI.
                          setActiveView('weeklyView');
                        }}
                      >
                        View →
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </>
      )}

      {activeView === 'weeklyView' && (
      <div className="sp-weekly-tight">

      {/* ────────────────────────────────────────────────────────────────
          0. WHAT CHANGED BANNER (adaptive plan diff)
          Sources: studyPlanArtifact.delta (Firestore) or studyPlan._diff (legacy)
      ──────────────────────────────────────────────────────────────── */}
      {!deltaDismissed && delta && !delta.isFirst && delta.headline && (
        <div className="sp-section sp-banner sp-banner-info">
          <div className="sp-banner-header">
            <div className="sp-banner-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
            </div>
            <span className="sp-banner-title">Plan Updated</span>
            <button className="sp-banner-close" onClick={() => {
              if (studyPlanMeta?.artifactId) localStorage.setItem(`dismissedDelta:${studyPlanMeta.artifactId}`, '1');
              setDeltaDismissed(true);
            }}>&times;</button>
          </div>
          <div className="sp-banner-content" style={{ marginBottom: delta.skillChanges?.length > 0 ? '0.5rem' : '0' }}>
            {delta.headline}
          </div>
          {delta.skillChanges?.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
              {(showAllSkillChanges ? delta.skillChanges : delta.skillChanges.slice(0, 2)).map((sc, i) => {
                // No-emoji rule: a colored dot (same convention as
                // ttc-adherence-dot) carries the direction; the label
                // carries the evidence.
                const dotColor = sc.direction === 'improved' ? 'var(--color-success-500)'
                  : sc.direction === 'worsened' ? 'var(--color-error-500)'
                  : sc.direction === 'new' ? 'var(--color-brand-primary)'
                  : 'var(--color-slate-400)';
                const label = sc.direction === 'improved'
                  ? `${sc.skill}: ${sc.oldAccuracy}% → ${sc.newAccuracy}%`
                  : sc.direction === 'worsened'
                  ? `${sc.skill}: ${sc.oldAccuracy}% → ${sc.newAccuracy}%`
                  : sc.direction === 'new'
                  ? `${sc.skill}: new gap found on this test`
                  : `${sc.skill}: was ${sc.oldAccuracy}%, no longer a weakness`;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#334155' }}>
                    <span aria-hidden="true" style={{ width: '7px', height: '7px', borderRadius: '50%', background: dotColor, flexShrink: 0 }} />
                    <span>{label}</span>
                  </div>
                );
              })}
              {delta.skillChanges.length > 2 && (
                <button
                  type="button"
                  onClick={() => setShowAllSkillChanges(v => !v)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--color-brand-primary)',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: 0,
                    marginTop: '2px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    alignSelf: 'flex-start',
                  }}
                >
                  {showAllSkillChanges
                    ? 'Show less'
                    : `Show ${delta.skillChanges.length - 2} more`}
                </button>
              )}
            </div>
          )}
          {delta.scoreChange && (
            <div style={{ marginTop: '10px', fontSize: '13px', color: '#64748b' }}>
              Score: {delta.scoreChange.old} → {delta.scoreChange.new} ({delta.scoreChange.delta > 0 ? '+' : ''}{delta.scoreChange.delta} points)
            </div>
          )}
        </div>
      )}

      {delta?.isFirst && (
        <div className="sp-section sp-banner sp-banner-success">
          <div className="sp-banner-header">
            <span className="sp-banner-icon"><CheckIcon size={20} /></span>
            <span className="sp-banner-title">Your First Study Plan</span>
          </div>
          <div className="sp-banner-content">
            Based on your practice test results, here's your personalized weekly plan. Take another test to see how it adapts to your progress.
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────
          1. ADAPTIVE NOTES — collapsed by default to keep the above-fold
             tight. Acely's per-day intro is 1-2 sentences; we mirror that.
      ──────────────────────────────────────────────────────────────── */}
      {(studyPlan.deltaFromPrevious || studyPlan.persistentWeaknessStrategy) && (
        <div className="sp-section sp-notes">
          {studyPlan.deltaFromPrevious && (
            <div className="sp-note">
              <span className="sp-note-eyebrow">Updated since your last test</span>
              <p className="sp-note-text">
                {deltaExpanded ? deltaText : deltaFirstSentence}
                {deltaHasMore && (
                  <button
                    type="button"
                    className="sp-note-toggle"
                    onClick={() => setDeltaExpanded(v => !v)}
                  >
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
                  <button
                    type="button"
                    className="sp-note-toggle"
                    onClick={() => setStrategyExpanded(v => !v)}
                  >
                    {strategyExpanded ? 'Show less' : 'Read more'}
                  </button>
                )}
              </p>
            </div>
          )}
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────
          2. WEEKLY PLAN — the protagonist. Design-review FINDING-003: the
          actual task list was the LAST section, below ~1800px of
          diagnostics. Acely leads with tasks; so do we now.
      ──────────────────────────────────────────────────────────────── */}
      <div className="sp-section">
        <div className="sp-section-header-row">
          <h3 className="sp-section-header">Weekly Schedule</h3>
          {/* Section switcher — Practice-Bank-style pill toggle. Scopes the
              Weekly Schedule, Focus Areas, and the plan-progress counts to
              one test section; whole-plan items (review/strategy/tests)
              always show. Lives in the schedule header so its scope reads
              clearly (critique: a toolbar above the banners attached to
              nothing). */}
          <div className="sp-section-toggle" role="tablist" aria-label="Plan section">
            {SECTION_FILTERS.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={sectionFilter === tab.id}
                className={`sp-section-toggle-btn${sectionFilter === tab.id ? ' is-active' : ''}`}
                onClick={() => setSectionFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="sp-timeline">
          {/* Current week */}
          <div className="sp-week-card is-current">
            <div className="sp-week-indicator" />
            <div className="sp-week-header" style={{ cursor: 'default' }}>
              <div className="sp-week-title-area">
                <div>
                  <div className="sp-week-label">This Week</div>
                  <div className="sp-week-title">
                    Week {displayCurrentWeek + 1}{cleanWeekTitle(currentWeek?.title) ? ` — ${cleanWeekTitle(currentWeek.title)}` : ''}
                  </div>
                </div>
              </div>
              <div className="sp-week-meta">
                <div className="sp-week-progress">
                  {currentDone} / {currentTotal}
                </div>
              </div>
            </div>
            <div className="sp-week-body">
              {renderWeekActivities(currentWeek, displayCurrentWeek)}
            </div>
          </div>

          {/* Other weeks — collapsed sleek cards */}
          {otherWeeks.length > 0 && (
            <div className="sp-timeline" style={{ gap: '0.75rem' }}>
              {otherWeeks.map(week => {
                const realIdx = weeks.indexOf(week);
                const isOpen = expandedWeek === realIdx;
                const done = (week.activities || []).filter(a => a.completed).length;
                const total = (week.activities || []).length;
                const pct = total > 0 ? Math.round((done / total) * 100) : 0;
                const isComplete = pct === 100;

                return (
                  <div key={realIdx} className={`sp-week-card ${isComplete ? 'is-complete' : ''}`}>
                    {/* FINDING-009: was a div with onClick — no keyboard
                        access, no aria-expanded. Real button now. */}
                    <button
                      type="button"
                      className="sp-week-header sp-week-header-btn"
                      aria-expanded={isOpen}
                      onClick={() => setExpandedWeek(isOpen ? null : realIdx)}
                    >
                      <div className="sp-week-title-area">
                        <div className="sp-week-icon">
                          {isComplete ? <CheckIcon size={16} color="currentColor" /> : realIdx + 1}
                        </div>
                        <div className="sp-week-title" style={{ fontSize: '1rem' }}>
                          Week {week.weekNumber}{cleanWeekTitle(week.title) ? ` — ${cleanWeekTitle(week.title)}` : ''}
                        </div>
                      </div>
                      <div className="sp-week-meta">
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-slate-500)' }}>
                          {done} / {total}
                        </span>
                        <div className={`sp-week-toggle ${isOpen ? 'is-open' : ''}`}>
                          <ChevronDownIcon size={16} color="currentColor" />
                        </div>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="sp-week-body" style={{ borderTop: '1px solid var(--color-slate-100)' }}>
                        {renderWeekActivities(week, realIdx)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────
          3. SKILLS TO IMPROVE — weakness list with Practice buttons
      ──────────────────────────────────────────────────────────────── */}
      {skillPracticeRows.length > 0 && (
        <div className="sp-section">
          <h3 className="sp-section-header">Focus Areas</h3>

          {/* AI diagnosis narrative — explains WHY these are the focus areas.
              FINDING-002: clamped like the coach notes; the full paragraph
              sits behind Read more. */}
          {summary?.diagnosis && (
            <div className="sp-section-desc">
              {diagExpanded ? summary.diagnosis : clampToSentence(summary.diagnosis, 200)}
              {summary.diagnosis.length > clampToSentence(summary.diagnosis, 200).length + 4 && (
                <button
                  type="button"
                  className="sp-note-toggle"
                  onClick={() => setDiagExpanded(v => !v)}
                >
                  {diagExpanded ? 'Show less' : 'Read more'}
                </button>
              )}
            </div>
          )}
          {/* Shared coach advice hoisted from the per-card sentences. */}
          {focusDiagnostics.shared && (
            <p className="sp-focus-shared-advice">{focusDiagnostics.shared}</p>
          )}
          <div className="dashboard-actions-grid">
            {(showAllFocus ? sectionedFocusRows : sectionedFocusRows.slice(0, 5)).map((w, i) => {
              // v3.1: classify into low/mid/high bands so CSS picks the
              // soft-tint color. JSX no longer paints the heavy red/green
              // panel; the chip color reads from a data attribute.
              // Adaptivity item 1: the band reads from the LIVE signal —
              // recent drill accuracy when the student has drilled this
              // skill since the last test, else the test-time baseline.
              const liveAccuracy = typeof w.displayAccuracy === 'number' ? w.displayAccuracy : w.accuracy;
              const accuracyBand = w.isMastered ? 'high'
                : liveAccuracy >= 70 ? 'high'
                : liveAccuracy < 40 ? 'low'
                : 'mid';
              const showDrillDelta = w.hasDrillSignal
                && typeof w.accuracy === 'number'
                && w.drillStats
                && w.drillStats.accuracy !== w.accuracy;

              // FINDING-002: the editorial sentence moved INSIDE the card
              // (2-line clamp) — it used to float below as a full paragraph,
              // ~7 near-identical paragraphs in a row.
              const diagnosticSentence = focusDiagnostics.perRow[i] || '';
              return (
                <div key={w.skillId || i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    className="acely-split-card"
                    data-accuracy-band={accuracyBand}
                    data-mastered={w.isMastered ? 'true' : undefined}
                  >
                    <div className="acely-split-left">
                      {liveAccuracy}%
                    </div>
                    <div className="acely-split-right" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ flex: 1, minWidth: 0, paddingRight: '1rem' }}>
                        <div className="acely-metric-label">
                          <span className={`sp-sec-chip is-${w.section === 'rw' ? 'rw' : 'math'}`}>
                            {SECTION_CHIP_LABEL[w.section === 'rw' ? 'rw' : 'math']}
                          </span>
                          {domainLabel(w.domain)}
                        </div>
                        <div className="acely-section-name" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{w.skill}</div>
                        {/* Retirement (item 2): the green confirmation. The
                            weakness stays in the plan — the next full test
                            is the arbiter. */}
                        {w.isMastered && (
                          <p className="sp-card-mastered-note">
                            Mastered in practice — we'll confirm on your next test
                          </p>
                        )}
                        {/* Both signals, side by side (item 1). */}
                        {showDrillDelta && (
                          <p className="sp-card-drill-delta">
                            {w.accuracy}% on your last test → {w.drillStats.accuracy}% in drills since
                          </p>
                        )}
                        {!w.isMastered && (diagnosticSentence ? (
                          <p className="sp-card-diagnostic">{diagnosticSentence}</p>
                        ) : w.errorType ? (
                          <div style={{ fontSize: '0.8125rem', marginTop: '0.25rem', color: 'var(--color-slate-500)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {w.errorType}
                          </div>
                        ) : null)}
                      </div>
                      <button
                        className={`btn-launch${w.isMastered ? ' is-keep-sharp' : i === 0 ? ' is-primary' : ''}`}
                        style={{ flexShrink: 0 }}
                        onClick={() => onStartPractice(null, null, {
                          questionIds: w.qIds,
                          source: 'study-plan-assigned',
                          label: `${w.skill} Practice`,
                          weakness: w, // Day 5 D3: shell renders diagnostic sentence after wrong answers
                        })}
                      >
                        {w.isMastered ? 'Keep sharp' : (
                          <>
                            <PencilIcon size={14} style={{ marginRight: '6px', verticalAlign: 'text-bottom' }} /> Practice
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  {/* Reprioritization editorial (item 3) — the engine's
                      improved/declined call, in the diagnostic-sentence
                      voice. Suppressed on mastered cards (the green note
                      already carries the story). */}
                  {w.adaptiveLine && (
                    <p className="sp-card-diagnostic sp-card-adaptive">{w.adaptiveLine}</p>
                  )}
                  {/* Prediction flag (audit gap 2) — the visible "your plan
                      updated because..." moment. Renders only on weaknesses
                      the engine flagged for the student's next test. */}
                  {w.predictedStruggle && (
                    <p
                      className="sp-prediction-flag"
                      style={{
                        margin: '8px 4px 0',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--color-brand-primary)',
                      }}
                    >
                      Prioritized in your plan — flagged as a likely struggle area on your next test{w.predictedStruggle.reason ? ` (${w.predictedStruggle.reason.toLowerCase()})` : ''}.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          {sectionedFocusRows.length > 5 && (
            <button
              type="button"
              className="sp-focus-show-all"
              onClick={() => setShowAllFocus(v => !v)}
            >
              {showAllFocus
                ? 'Show fewer'
                : `Show all ${sectionedFocusRows.length} skills`}
            </button>
          )}
          {sectionedFocusRows.length === 0 && (
            <div className="sp-focus-empty">
              No {sectionFilter === 'rw' ? 'Reading & Writing' : 'Math'} focus areas right now —
              your latest test didn't flag any. Switch back to All to see the full list.
            </div>
          )}
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────
          4. HOW YOU TEST — identity insights mined from signals the plan
          already persisted but never rendered (answer-change behavior,
          stamina fade, calculator dependency). Significance-gated: the
          whole section hides rather than render filler.
      ──────────────────────────────────────────────────────────────── */}
      {identityInsights.length > 0 && (
        <div className="sp-section sp-identity">
          <h3 className="sp-section-header">How you test</h3>
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

      {/* Score Trajectory */}
      <ScoreTrajectory artifact={studyPlanArtifact} />

      </div>
      )}

      </div> {/* /.sp-main */}

      {/* ────────────────────────────────────────────────────────────────
          RIGHT RAIL — calendar + score + goal/exam two-up.
          Same composition as the StudentDashboard's Dashboard tab so
          students see consistent context across both views.
      ──────────────────────────────────────────────────────────────── */}
      <aside className="sp-rail" aria-label="Study plan summary">
        <CalendarMonth practicedDays={practicedDayKeys} />

        {latestScore !== null && (
          <div className="dashboard-tile">
            <div className="dashboard-tile-eyebrow">Current Score</div>
            <div className="dashboard-tile-row">
              <span className="dashboard-tile-num">{latestScore}</span>
              {scoreDelta !== null && (
                <span className={`dashboard-tile-delta ${scoreDelta >= 0 ? 'is-up' : 'is-down'}`}>
                  {scoreDelta >= 0 ? '↑' : '↓'} {Math.abs(scoreDelta)} pts
                </span>
              )}
            </div>
            {sortedTests.length > 0 && (
              <div className="dashboard-tile-sub">
                Across {sortedTests.length} test{sortedTests.length !== 1 ? 's' : ''}
              </div>
            )}
          </div>
        )}

        {/* Prediction record — "trust this plan" evidence. Only renders
            when the engine has called at least one struggle area right. */}
        {predictionTrust && (
          <div className="dashboard-tile">
            <div className="dashboard-tile-eyebrow">Prediction Record</div>
            <div className="dashboard-tile-num">{predictionTrust.hits}/{predictionTrust.total}</div>
            <div className="dashboard-tile-sub">
              {predictionTrust.total === 1
                ? 'test where we called your struggle areas early'
                : 'tests where we called your struggle areas early'}
            </div>
          </div>
        )}

        {/* Live review streak — hidden unless touched today/yesterday. */}
        {reviewStreak && (
          <div className="dashboard-tile">
            <div className="dashboard-tile-eyebrow">Review Streak</div>
            <div className="dashboard-tile-num">{reviewStreak.current}</div>
            <div className="dashboard-tile-sub">
              days in a row{reviewStreak.best > reviewStreak.current ? ` · best ${reviewStreak.best}` : ' · personal best'}
            </div>
          </div>
        )}

        {(user?.targetScore || user?.testDate) && (
          <div className="dashboard-tile-pair">
            {user?.targetScore && (
              <div className={`dashboard-tile ${goalAchieved ? 'is-positive' : ''}`}>
                <div className="dashboard-tile-eyebrow">
                  {goalAchieved ? 'Goal Achieved' : 'Goal Score'}
                </div>
                <div className="dashboard-tile-num">{user.targetScore}</div>
                <div className="dashboard-tile-sub">
                  {goalAchieved
                    ? `+${goalAboveDelta} pts above target`
                    : 'From onboarding'}
                </div>
              </div>
            )}
            {user?.testDate && (
              <div className={`dashboard-tile ${testDateIsPast ? 'is-warn' : ''}`}>
                <div className="dashboard-tile-eyebrow">
                  {testDateIsPast ? 'Test Date' : 'Days Until Exam'}
                </div>
                <div className="dashboard-tile-num">
                  {testDateIsPast ? '—' : (daysUntilTest ?? '—')}
                </div>
                <div className="dashboard-tile-sub">
                  {testDateIsPast
                    ? `Was ${Math.abs(daysUntilTest)} days ago — update in settings`
                    : parseLocalDate(user.testDate)?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            )}
          </div>
        )}
      </aside>
    </div>
  );
};

export default StudyPlanDashboard;
