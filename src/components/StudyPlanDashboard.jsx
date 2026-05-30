import React, { useState, useMemo } from 'react';
import { colors, typography, spacing, radius, transitions, breakpoints, shadows } from '../design/tokens';
import { MathText } from './MathText';
import { DataCard } from './ui/DataCard';
import { PrimaryButton } from './ui/Button';
import { getQuestionById, getQuestionsBySkillIds, getTargetedWeaknessSet } from '../data/questions/bank';
import {
  getQuestionsBySkillIds as getRWQuestionsBySkillIds,
  getTargetedWeaknessSet as getRWTargetedWeaknessSet,
} from '../data/questions/rwBank';
import { getWeaknessSection, getMathWeaknesses, getRWWeaknesses } from '../services/selectors/weaknesses';
import { getDrillChipForWeakness } from '../services/selectors/drillChip';
import { formatDiagnosticSentence } from '../services/diagnosticEngine';
import { getTodaySlice } from '../services/studyPlanGenerator';
import { getSessionAdherence } from '../services/selectors/sessionAdherence';
import { formatDailyIntro } from '../services/selectors/dailyIntro';
import { getPracticedDayKeys } from '../services/selectors/practicedDays';
import { getCompletedTests } from '../services/selectors/completedTests';
import { isGoalAchieved, goalDelta } from '../services/selectors/goalProgress';
import { useFeatureFlag } from '../hooks/useFeatureFlag';
import CalendarMonth from './CalendarMonth';
import TodaysTasksCard from './TodaysTasksCard';
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

const TYPE_META = {
  lesson:   { label: 'Lesson',   fg: colors.semantic.info },
  practice: { label: 'Practice', fg: colors.semantic.success },
  strategy: { label: 'Tip',      fg: colors.semantic.info },
  review:   { label: 'Tip',      fg: colors.badge.bronze },
  test:     { label: 'Test',     fg: colors.semantic.info },
};

function activityIcon(type) {
  if (type === 'lesson')   return <BookOpenIcon size={16} color={colors.semantic.info} />;
  if (type === 'practice') return <PencilIcon size={16} color={colors.semantic.success} />;
  if (type === 'strategy') return <BrainIcon size={16} color={colors.semantic.info} />;
  if (type === 'review')   return <SearchIcon size={16} color={colors.badge.bronze} />;
  if (type === 'test')     return <DocumentIcon size={16} color={colors.semantic.info} />;
  return <PinIcon size={16} color={colors.text.secondary} />;
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
  skillProgress,
  reviewQueue,
  user,
  onStartPractice,
  onStartPracticeTest,
  onCompleteActivity,
  onUncompleteActivity,
  studyPlanHistory,
  onSelectPlanVersion,
  onReviewPastTests,
  answeredQuestionIds = [],
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
            Complete a practice test and our AI will generate a highly personalized study plan tailored to your exact weaknesses.
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

  // ── Derived data ─────────────────────────────────────────────────────
  // Render-time guard: legacy plan artifacts in Firestore may still
  // carry type='lesson' activities — those routed to the legacy
  // LearnWorkspace, which the product no longer surfaces. Drop them
  // before rendering so users only ever see practice/review/strategy/
  // test activities. Generator no longer emits lessons (see
  // studyPlanGenerator.js:472), but this defends against old plans
  // already persisted server-side.
  const isVisibleActivity = (a) => a && a.type !== 'lesson';
  const visibleActivities = (week) => (week?.activities || []).filter(isVisibleActivity);

  const delta = studyPlanArtifact?.delta || studyPlan._diff || null;
  const longitudinal = studyPlanArtifact?.longitudinal || null;
  const { weeks, summary, weaknesses } = studyPlan;
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
    () => getPracticedDayKeys({ practiceProgress, practiceTestResults }),
    [practiceProgress, practiceTestResults],
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
  // Compute days until test. Negative values (test date in the past) are
  // common in dogfood/seed data and look terrible as "-57"; clamp + flag.
  const daysUntilTest = (() => {
    if (!user?.testDate) return null;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const test = new Date(user.testDate); test.setHours(0, 0, 0, 0);
    return Math.ceil((test - today) / (1000 * 60 * 60 * 24));
  })();
  const testDateIsPast = daysUntilTest !== null && daysUntilTest < 0;
  // Goal already achieved? Common in mid-test cycles where a recent score
  // already exceeds onboarding-time target. Compared scale-safely (1.4): a
  // 400-1600 composite must never "achieve" a 200-800 section target.
  const goalArgs = { latestScore, targetScore: user?.targetScore, isMultiSection: latestTest?.isMultiSection };
  const goalAchieved = isGoalAchieved(goalArgs);
  const goalAboveDelta = goalDelta(goalArgs);

  // Day-1 of Acely-polish v2: extract just the FIRST sentence of the
  // adaptive-plan delta paragraph so the banner reads like a tight summary
  // rather than a wall of strategy text. The full paragraph is available
  // behind a "Show more" disclosure.
  const [deltaExpanded, setDeltaExpanded] = useState(false);
  const deltaText = studyPlan.deltaFromPrevious || '';
  const deltaFirstSentence = (() => {
    if (!deltaText) return '';
    const m = deltaText.match(/^[^.!?]+[.!?]/);
    return m ? m[0] : deltaText.slice(0, 140);
  })();
  const deltaHasMore = deltaText.length > deltaFirstSentence.length + 4;

  // Today's-Tasks tab derived state.
  const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayDayName = DAY_NAMES[new Date().getDay()];
  const todaySlice = useMemo(() => getTodaySlice(studyPlan, todayDayName), [studyPlan, todayDayName]);
  const sessionAdherence = useMemo(() => getSessionAdherence(practiceProgress), [practiceProgress]);
  const topWeakness = useMemo(() => {
    if (!studyPlan) return null;
    const math = getMathWeaknesses(studyPlan);
    const rw = getRWWeaknesses(studyPlan);
    const merged = [...math, ...rw].sort((a, b) => (a.accuracy ?? 100) - (b.accuracy ?? 100));
    return merged[0] || null;
  }, [studyPlan]);
  const dailyIntro = useMemo(
    () => formatDailyIntro({ todaySlice, latestScore, topWeakness }),
    [todaySlice, latestScore, topWeakness],
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
    if (activity.type === 'practice' && onStartPractice && activity.moduleId) {
      onStartPractice(activity.moduleId, activity.sectionName);
    } else if (activity.type === 'test' && onStartPracticeTest) {
      onStartPracticeTest();
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
    if (!weaknesses?.length || !onStartPractice) return [];

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

    return weaknesses.slice(0, 6).map(w => {
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
      let missedPatterns = Array.isArray(w.missedPatterns) ? w.missedPatterns : undefined;
      if (section !== 'rw') {
        const chip = getDrillChipForWeakness(w);
        if (chip) missedPatterns = [chip.slug];
      }

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
  }, [weaknesses, onStartPractice, answeredQuestionIds, studyPlan?.difficultyAnalysis]);

  // ── Activity row ─────────────────────────────────────────────────────
  const ActivityRow = ({ act, weekIdx, actIdx }) => {
    const done = act.completed;
    const isNavigable = act.type === 'lesson' || act.type === 'practice' || act.type === 'test';
    const isTip = act.type === 'strategy' || act.type === 'review';
    const tips = act.tips || [];
    const meta = TYPE_META[act.type] || TYPE_META.lesson;

    return (
      <div className="ai-practice-banner" style={{ marginBottom: '16px', opacity: done ? 0.6 : 1, filter: done ? 'grayscale(1)' : 'none', position: 'relative' }}>
        {/* Toggle checkmark */}
        <button
          onClick={(e) => handleToggle(e, weekIdx, actIdx, done)}
          style={{
            position: 'absolute', top: '-10px', right: '-10px',
            width: '28px', height: '28px', borderRadius: '50%',
            border: done ? 'none' : `2px solid var(--color-slate-300)`,
            background: done ? 'var(--color-success-500)' : '#fff',
            color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center',
            justifyContent: 'center', padding: 0, transition: 'all 0.2s',
            zIndex: 10, boxShadow: 'var(--shadow-sm)'
          }}
        >
          {done && <CheckIcon size={16} color="#fff" />}
        </button>

        <div className="ai-banner-content" style={{ flex: 1 }}>
          <div className="ai-banner-icon" style={{ 
            background: done ? 'var(--color-slate-100)' : `${meta.fg}15`, 
            color: done ? 'var(--color-slate-400)' : meta.fg,
            borderColor: done ? 'var(--color-slate-200)' : `${meta.fg}40`
          }}>
            {activityIcon(act.type)}
          </div>
          <div className="ai-banner-text-group" style={{ flex: 1 }}>
            <div className="ai-banner-title">
              <MathText>{act.title}</MathText>
            </div>
            <div className="ai-banner-desc">
              {meta.label} {act.type === 'test' ? '· High Priority' : ''}
            </div>
            {isTip && tips.length > 0 && !done && (
              <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {tips.map((tip, i) => (
                  <div key={i} style={{
                    fontSize: '0.875rem', color: 'var(--color-slate-700)', lineHeight: '1.5',
                    paddingLeft: '12px', borderLeft: `3px solid ${meta.fg}`,
                    background: `${meta.fg}10`, padding: '8px 12px', borderRadius: '0 8px 8px 0'
                  }}>
                    <MathText>{tip}</MathText>
                  </div>
                ))}
              </div>
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

    // Sort: needs-focus first, normal middle, mastered last (within uncompleted)
    const sortOrder = { 'needs-focus': 0, normal: 1, null: 1, 'mastered': 2 };
    const sorted = [...rankedActivities].sort((a, b) => {
      // Completed always at end
      if (a.act.completed && !b.act.completed) return 1;
      if (!a.act.completed && b.act.completed) return -1;
      if (a.act.completed && b.act.completed) return 0;
      // Then by mastery status
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
          PROGRESS STRIP (Weekly View only — Today's Tasks gets its own
          day-header inside TodaysTasksCard, matching Acely's reference).
      ──────────────────────────────────────────────────────────────── */}
      {activeView === 'weeklyView' && (
        <header className="sp-strip">
          <div className="sp-strip-cell">
            <span className="sp-strip-eyebrow">Plan Progress</span>
            <span className="sp-strip-num">{progressPercent}%</span>
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
            <span className="sp-past-test-review-icon" aria-hidden="true">📋</span>
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
            onStartActivity={(activity) => {
              if (!activity || !onStartPractice) return;

              // Route this activity through AssignedPracticeShell (same UI as
              // the Weekly View "Practice" buttons) instead of falling through
              // to App.jsx's legacy `practiceMode: 'prescriptive'` inline
              // render — the "old screen" with the centered title, "Easy
              // difficulty selected based on your performance" banner, no
              // round indicator, no Assisted Help panel.
              //
              // The activity's skillId (set by studyPlanGenerator.js:476 from
              // `gap.skillId`) is more granular than the weakness skillId from
              // the diagnostic engine. E.g., the "Practice: Vertex" activity
              // has skillId='vertex-form', but the matching weakness is
              // "Function Interpretation" with missedPattern
              // 'vertex-form-from-two-conditions'. We try three lookups in
              // order: (1) cached row by exact skillId, (2) weakness by exact
              // skillId, (3) any weakness whose missedPatterns prefix-matches
              // the activity's skillId — the third is what catches Vertex.
              if (!activity.skillId) {
                if (activity.moduleId) onStartPractice(activity.moduleId, activity.sectionName);
                return;
              }

              const cachedRow = skillPracticeRows.find(r => r.skillId === activity.skillId);
              const exactWeakness = !cachedRow ? weaknesses?.find(wk => wk.skillId === activity.skillId) : null;
              // Heuristic third lookup: scan every weakness's missedPatterns
              // for a slug that prefix-matches the activity's skillId. The
              // first hit gives us a Tier-1-routable pattern for this drill.
              let prefixedPattern = null;
              if (!cachedRow && !exactWeakness && Array.isArray(weaknesses)) {
                for (const w of weaknesses) {
                  if (!Array.isArray(w.missedPatterns)) continue;
                  const hit = w.missedPatterns.find(p =>
                    p === activity.skillId || p.startsWith(activity.skillId + '-')
                  );
                  if (hit) { prefixedPattern = hit; break; }
                }
              }

              let qIds = cachedRow?.qIds;
              let weaknessForShell = cachedRow;

              if (!qIds) {
                const baseW = exactWeakness || {
                  skillId: activity.skillId,
                  skill: activity.skillName || activity.skillId,
                  domain: 'math',
                  section: 'math',
                  missedPatterns: prefixedPattern ? [prefixedPattern] : undefined,
                };
                const section = getWeaknessSection(baseW);
                const targetedQuery = section === 'rw' ? getRWTargetedWeaknessSet : getTargetedWeaknessSet;
                const fallbackQuery = section === 'rw' ? getRWQuestionsBySkillIds : getQuestionsBySkillIds;
                let mp = Array.isArray(baseW.missedPatterns) ? baseW.missedPatterns : undefined;
                if (section !== 'rw') {
                  const chip = getDrillChipForWeakness(baseW);
                  if (chip) mp = [chip.slug];
                }
                let qs = targetedQuery({
                  weakSkills: [{ skillId: baseW.skillId, domain: baseW.domain, missedPatterns: mp }],
                  count: 15,
                  excludeIds: answeredQuestionIds,
                }).filter(q => Array.isArray(q.choices) && q.choices.length >= 2);
                if (qs.length === 0) {
                  qs = fallbackQuery([baseW.skillId], { limit: 15 })
                    .filter(q => Array.isArray(q.choices) && q.choices.length >= 2);
                }
                if (qs.length > 0) {
                  qIds = qs.map(q => q.id);
                  weaknessForShell = { ...baseW, section };
                }
              }

              if (qIds && qIds.length > 0) {
                onStartPractice(null, null, {
                  questionIds: qIds,
                  source: 'study-plan-todays-tasks',
                  label: activity.title || (activity.skillName ? `${activity.skillName} Practice` : 'Practice'),
                  weakness: weaknessForShell,
                });
                return;
              }

              // Last-resort fallback. Both targeted and skill-id lookups came
              // up empty — pass through to the legacy module/section path so
              // the user at least lands SOMEWHERE rather than a dead button.
              if (activity.moduleId) {
                onStartPractice(activity.moduleId, activity.sectionName);
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
                const icon = sc.direction === 'improved' ? '✅' : sc.direction === 'worsened' ? '⚠️' : sc.direction === 'new' ? '🆕' : '✨';
                const label = sc.direction === 'improved'
                  ? `${sc.skill}: ${sc.oldAccuracy}% → ${sc.newAccuracy}%`
                  : sc.direction === 'worsened'
                  ? `${sc.skill}: ${sc.oldAccuracy}% → ${sc.newAccuracy}%`
                  : sc.direction === 'new'
                  ? `${sc.skill}: new weakness detected`
                  : `${sc.skill}: resolved!`;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#334155' }}>
                    <span>{icon}</span>
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
              <p className="sp-note-text">{studyPlan.persistentWeaknessStrategy}</p>
            </div>
          )}
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────
          2. SKILLS TO IMPROVE — weakness list with Practice buttons
      ──────────────────────────────────────────────────────────────── */}
      {skillPracticeRows.length > 0 && (
        <div className="sp-section">
          <h3 className="sp-section-header">Focus Areas</h3>
          
          {/* AI diagnosis narrative — explains WHY these are the focus areas */}
          {summary?.diagnosis && (
            <div className="sp-section-desc">
              {summary.diagnosis}
            </div>
          )}
          <div className="dashboard-actions-grid">
            {skillPracticeRows.map((w, i) => {
              // v3.1: classify into low/mid/high bands so CSS picks the
              // soft-tint color. JSX no longer paints the heavy red/green
              // panel; the chip color reads from a data attribute.
              const accuracyBand = w.accuracy >= 70 ? 'high'
                : w.accuracy < 40 ? 'low'
                : 'mid';

              const diagnosticSentence = formatDiagnosticSentence(w);
              return (
                <div key={w.skillId || i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    className="acely-split-card"
                    data-accuracy-band={accuracyBand}
                  >
                    <div className="acely-split-left">
                      {w.accuracy}%
                    </div>
                    <div className="acely-split-right" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ flex: 1, minWidth: 0, paddingRight: '1rem' }}>
                        <div className="acely-metric-label">{w.domain || 'Skill'}</div>
                        <div className="acely-section-name" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{w.skill}</div>
                        {w.errorType && (
                          <div style={{ fontSize: '0.8125rem', marginTop: '0.25rem', color: 'var(--color-slate-500)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {w.errorType}
                          </div>
                        )}
                      </div>
                      <button
                        className="btn-launch"
                        style={{ flexShrink: 0 }}
                        onClick={() => onStartPractice(null, null, {
                          questionIds: w.qIds,
                          source: 'study-plan-assigned',
                          label: `${w.skill} Practice`,
                          weakness: w, // Day 5 D3: shell renders diagnostic sentence after wrong answers
                        })}
                      >
                        <PencilIcon size={14} style={{ marginRight: '6px', verticalAlign: 'text-bottom' }} /> Practice
                      </button>
                    </div>
                  </div>
                  {/* Day 5 D3 — italic editorial sentence translating the
                      6-class error taxonomy into prose. Serif by design. */}
                  {diagnosticSentence && (
                    <p
                      className="sp-diagnostic-sentence"
                      style={{
                        margin: '8px 4px 0',
                        fontFamily: 'var(--font-reading)',
                        fontStyle: 'italic',
                        fontSize: '0.9375rem',
                        lineHeight: 1.5,
                        color: 'var(--color-slate-700)',
                      }}
                    >
                      {diagnosticSentence}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────
          3. WEEKLY PLAN — visually distinct cards
      ──────────────────────────────────────────────────────────────── */}
      <div className="sp-section">
        <h3 className="sp-section-header">Weekly Schedule</h3>

        <div className="sp-timeline">
          {/* Current week */}
          <div className="sp-week-card is-current">
            <div className="sp-week-indicator" />
            <div className="sp-week-header" style={{ cursor: 'default' }}>
              <div className="sp-week-title-area">
                <div>
                  <div className="sp-week-label">This Week</div>
                  <div className="sp-week-title">
                    Week {displayCurrentWeek + 1}{currentWeek?.title ? ` — ${currentWeek.title}` : ''}
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
                    <div
                      className="sp-week-header"
                      onClick={() => setExpandedWeek(isOpen ? null : realIdx)}
                    >
                      <div className="sp-week-title-area">
                        <div className="sp-week-icon">
                          {isComplete ? <CheckIcon size={16} color="currentColor" /> : realIdx + 1}
                        </div>
                        <div className="sp-week-title" style={{ fontSize: '1rem' }}>
                          Week {week.weekNumber}{week.title ? ` — ${week.title}` : ''}
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
                    </div>
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
                    : new Date(user.testDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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
