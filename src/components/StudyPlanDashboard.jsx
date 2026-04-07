import React, { useState, useMemo } from 'react';
import { colors, typography, spacing, radius, transitions, breakpoints, shadows } from '../design/tokens';
import { MathText } from './MathText';
import { DataCard } from './ui/DataCard';
import { PrimaryButton } from './ui/Button';
import { getQuestionById, getQuestionsBySkillIds, getTargetedWeaknessSet } from '../data/questions/bank';
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
  onNavigateToModule,
  onStartPractice,
  onStartPracticeTest,
  onCompleteActivity,
  onUncompleteActivity,
  studyPlanHistory,
  onSelectPlanVersion,
  answeredQuestionIds = [],
}) => {
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [deltaDismissed, setDeltaDismissed] = useState(() =>
    !!studyPlanMeta?.artifactId && !!localStorage.getItem(`dismissedDelta:${studyPlanMeta.artifactId}`)
  );

  // ── Empty state ──────────────────────────────────────────────────────
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

  // ── Derived data ─────────────────────────────────────────────────────
  const delta = studyPlanArtifact?.delta || studyPlan._diff || null;
  const longitudinal = studyPlanArtifact?.longitudinal || null;
  const { weeks, summary, weaknesses } = studyPlan;
  const totalActivities = weeks.reduce((s, w) => s + (w.activities?.length || 0), 0);
  const completedActivities = weeks.reduce((s, w) => s + (w.activities?.filter(a => a.completed).length || 0), 0);
  const progressPercent = totalActivities > 0 ? Math.round((completedActivities / totalActivities) * 100) : 0;
  const currentWeekIndex = weeks.findIndex(w => w.activities?.some(a => !a.completed));
  const displayCurrentWeek = currentWeekIndex >= 0 ? currentWeekIndex : weeks.length - 1;

  // ── Handlers ─────────────────────────────────────────────────────────
  const handleGo = (activity) => {
    if (activity.type === 'lesson' && onNavigateToModule && activity.moduleId) {
      onNavigateToModule(activity.moduleId, activity.lessonId);
    } else if (activity.type === 'practice' && onStartPractice && activity.moduleId) {
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
      // Use getTargetedWeaknessSet for smarter question selection:
      // - Filters by the student's weak skill
      // - Applies difficulty mix matching their level
      // - Excludes already-answered questions
      const questions = getTargetedWeaknessSet({
        weakSkills: [{ skillId: w.skillId, domain: w.domain }],
        difficultyMix: diffMix,
        count: 15,
        excludeIds: answeredQuestionIds,
      }).filter(q => Array.isArray(q.choices) && q.choices.length >= 2);

      if (questions.length === 0) {
        // Fallback: if targeted set is empty (all answered), use basic query without excludes
        const fallback = getQuestionsBySkillIds(w.skillId ? [w.skillId] : [], { limit: 15 })
          .filter(q => Array.isArray(q.choices) && q.choices.length >= 2);
        if (fallback.length === 0) return null;
        return { ...w, qCount: fallback.length, qIds: fallback.map(q => q.id) };
      }
      return { ...w, qCount: questions.length, qIds: questions.map(q => q.id) };
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
    const activities = week.activities || [];
    if (activities.length === 0) {
      return <div style={{ fontSize: '14px', color: colors.text.muted, padding: '12px 0', textAlign: 'center' }}>No activities this week.</div>;
    }

    // ═══ RENDER-TIME RE-RANKING based on skillProgress ═══
    // Compute mastery status for each activity's target skill
    const rankedActivities = activities.map((act, origIdx) => {
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
  const currentDone = (currentWeek?.activities || []).filter(a => a.completed).length;
  const currentTotal = (currentWeek?.activities || []).length;

  // ====================================================================
  // RENDER — 3 clean sections
  // ====================================================================

  return (
    <div className="study-plan-dashboard">
      
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {delta.skillChanges.slice(0, 5).map((sc, i) => {
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
          1. PROGRESS (Acely Performance Grid)
      ──────────────────────────────────────────────────────────────── */}
      <div className="sp-section acely-performance-grid">
        <div className="acely-metric-card acely-accuracy-card">
          <div className="acely-metric-label">Plan Progress</div>
          <div className="acely-metric-value">{progressPercent}%</div>
          <div className="acely-metric-detail">
            {completedActivities} of {totalActivities} tasks completed
          </div>
        </div>
        <div className="acely-metric-stack">
          <div className="acely-split-card acely-strongest-card">
            <div className="acely-split-left"><ClipboardIcon size={48} /></div>
            <div className="acely-split-right">
              <div className="acely-metric-label">Current Objective</div>
              <div className="acely-section-name">
                {summary?.headline || 'Your Study Plan'}
              </div>
              {studyPlan.deltaFromPrevious && (
                <span className="sp-progress-badge" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>Updated</span>
              )}
            </div>
          </div>
          <div className="acely-split-card" style={{ border: '1px solid var(--color-slate-200)', boxShadow: 'var(--shadow-sm)' }}>
            <div className="acely-split-left" style={{ backgroundColor: 'var(--color-brand-primary, #3B52D9)', color: 'white' }}><PinIcon size={48} /></div>
            <div className="acely-split-right" style={{ backgroundColor: 'var(--color-slate-50)' }}>
              <div className="acely-metric-label">Next Milestone</div>
              <div className="acely-section-name">Complete Week {displayCurrentWeek + 1}</div>
            </div>
          </div>
        </div>
      </div>

      {/* What changed & Persistent weakness callouts moved out of the progress card for cleaner design */}
      {(studyPlan.deltaFromPrevious || studyPlan.persistentWeaknessStrategy) && (
        <div className="sp-section" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {studyPlan.deltaFromPrevious && (
            <div className="sp-banner sp-banner-info" style={{ background: 'var(--color-slate-50)', borderLeft: '3px solid var(--color-brand-primary)' }}>
              <div className="sp-banner-title" style={{ color: 'var(--color-slate-500)' }}>Updated since your last test</div>
              <div className="sp-banner-content" style={{ color: 'var(--color-slate-700)', fontWeight: 400 }}>{studyPlan.deltaFromPrevious}</div>
            </div>
          )}
          {studyPlan.persistentWeaknessStrategy && (
            <div className="sp-banner sp-banner-info" style={{ background: 'var(--color-slate-50)', borderLeft: '3px solid var(--color-brand-primary)' }}>
              <div className="sp-banner-title" style={{ color: 'var(--color-slate-700)' }}>Stuck skill — different approach needed</div>
              <div className="sp-banner-content" style={{ color: 'var(--color-slate-600)', fontWeight: 400 }}>{studyPlan.persistentWeaknessStrategy}</div>
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
              const isGreen = w.accuracy >= 70;
              const isRed = w.accuracy < 40;
              const bgColorLeft = isGreen ? 'var(--color-success-600)' : (isRed ? 'var(--color-error-600)' : 'var(--color-brand-primary)');
              const colorLeft = 'white';
              const bgColorRight = isGreen ? 'var(--color-success-50)' : (isRed ? 'var(--color-error-50)' : 'var(--color-accent-light-blue)');
              
              return (
                <div key={w.skillId || i} className="acely-split-card" style={{ border: '1px solid var(--color-slate-200)', boxShadow: 'var(--shadow-sm)' }}>
                  <div className="acely-split-left" style={{ backgroundColor: bgColorLeft, color: colorLeft, width: '120px', flex: 'none' }}>
                    {w.accuracy}%
                  </div>
                  <div className="acely-split-right" style={{ backgroundColor: bgColorRight, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem' }}>
                    <div style={{ flex: 1, minWidth: 0, paddingRight: '1rem' }}>
                      <div className="acely-metric-label">{w.domain || 'Skill'}</div>
                      <div className="acely-section-name" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{w.skill}</div>
                      {w.errorType && (
                        <div style={{ fontSize: '0.8125rem', marginTop: '0.25rem', opacity: 0.8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {w.errorType}
                        </div>
                      )}
                    </div>
                    <button
                      className="btn-launch"
                      style={{ flexShrink: 0, padding: '0.5rem 1rem' }}
                      onClick={() => onStartPractice(null, null, { questionIds: w.qIds, source: 'study-plan-assigned', label: `${w.skill} Practice` })}
                    >
                      <PencilIcon size={14} style={{ marginRight: '6px', verticalAlign: 'text-bottom' }} /> Practice
                    </button>
                  </div>
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
        <h3 className="sp-section-header">Action Plan</h3>
        
        <div className="sp-timeline">
          {/* Current week */}
          <div className="sp-week-card is-current">
            <div className="sp-week-indicator" />
            <div className="sp-week-header" style={{ cursor: 'default' }}>
              <div className="sp-week-title-area">
                <div>
                  <div className="sp-week-label">Current Task List</div>
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
  );
};

export default StudyPlanDashboard;
