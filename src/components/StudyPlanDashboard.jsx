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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const TYPE_META = {
  lesson:   { label: 'Lesson',   fg: colors.semantic.info },
  practice: { label: 'Practice', fg: colors.semantic.success },
  strategy: { label: 'Tip',      fg: colors.semantic.warning },
  review:   { label: 'Tip',      fg: colors.badge.bronze },
  test:     { label: 'Test',     fg: colors.accent.orange },
};

function activityIcon(type) {
  if (type === 'lesson')   return <BookOpenIcon size={16} color={colors.semantic.info} />;
  if (type === 'practice') return <PencilIcon size={16} color={colors.semantic.success} />;
  if (type === 'strategy') return <BrainIcon size={16} color={colors.semantic.warning} />;
  if (type === 'review')   return <SearchIcon size={16} color={colors.badge.bronze} />;
  if (type === 'test')     return <DocumentIcon size={16} color={colors.accent.orange} />;
  return <PinIcon size={16} color={colors.text.secondary} />;
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const ScoreTrajectory = ({ artifact }) => {
  const trajectory = artifact?.longitudinal?.scoreTrajectory;
  if (!trajectory?.length) return null;

  return (
    <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      marginTop: '32px',
      paddingTop: '20px',
      borderTop: '1px solid var(--color-slate-200)',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-ui)'
    }}>
      <span style={{ fontSize: '13px', color: 'var(--color-slate-500)', fontWeight: '600', marginRight: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Score History</span>
      {trajectory.map((entry, i) => (
        <span key={i} style={{
          fontSize: '13px',
          fontWeight: '700',
          color: i === trajectory.length - 1 ? 'var(--color-brand-primary)' : 'var(--color-slate-700)',
          background: i === trajectory.length - 1 ? 'var(--color-accent-light-blue)' : 'var(--color-slate-100)',
          padding: '6px 12px',
          borderRadius: '9999px',
          fontVariantNumeric: 'tabular-nums'
        }}>
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
      <div style={{ padding: `${spacing.xl} 0`, animation: 'fadeInUp 0.5s ease-out', fontFamily: 'var(--font-ui)' }}>
        <style>{`
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes pulseGlowBlue { 0% { box-shadow: 0 0 0 0 rgba(59, 82, 217, 0.4); } 70% { box-shadow: 0 0 0 15px rgba(59, 82, 217, 0); } 100% { box-shadow: 0 0 0 0 rgba(59, 82, 217, 0); } }
        `}</style>
        <div style={{ textAlign: 'center', padding: '60px 20px', borderRadius: 'var(--radius-xl)', background: '#ffffff', border: '1px solid rgba(0,0,0,0.05)', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ marginBottom: spacing.md, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-accent-light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand-primary)' }}>
              <ClipboardIcon size={40} />
            </div>
          </div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--color-brand-navy)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
            No Study Plan Yet
          </div>
          <div style={{ fontSize: '16px', color: 'var(--color-slate-500)', maxWidth: '420px', margin: '0 auto', lineHeight: '1.6' }}>
            Complete a practice test and our AI will generate a highly personalized study plan tailored to your exact weaknesses.
          </div>
          {onStartPracticeTest && (
            <div style={{ marginTop: '32px' }}>
              <button onClick={onStartPracticeTest} style={{ fontFamily: 'var(--font-ui)', padding: '14px 28px', fontSize: '15px', fontWeight: '700', color: '#fff', background: 'var(--color-brand-primary)', border: 'none', borderRadius: '9999px', cursor: 'pointer', animation: 'pulseGlowBlue 2s infinite', transition: 'transform 0.2s', boxShadow: 'var(--shadow-sm)' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                Take a Practice Test
              </button>
            </div>
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
      <div className="activity-row acely-task-card" style={{
        background: '#fff',
        borderRadius: '16px',
        border: `1px solid var(--color-slate-200)`,
        marginBottom: '16px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
      }}>
        <div style={{ padding: '20px' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: '1.125rem', fontWeight: '800', color: 'var(--color-brand-navy)', marginBottom: '4px', letterSpacing: '-0.01em' }}>
                <MathText>{act.title}</MathText>
              </div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.875rem', fontWeight: '500', color: 'var(--color-slate-500)', marginBottom: '12px' }}>
                {meta.label}
              </div>
              <div style={{ 
                display: 'inline-block', background: 'var(--color-accent-light-blue)', 
                color: 'var(--color-brand-primary)', padding: '6px 12px', 
                borderRadius: '9999px', fontFamily: 'var(--font-ui)', fontSize: '0.75rem', fontWeight: '700',
                letterSpacing: '0.02em', textTransform: 'uppercase'
              }}>
                {act.type === 'test' ? 'High Priority' : 'Medium Priority'}
              </div>
            </div>
            {/* Toggle */}
            <button
              onClick={(e) => handleToggle(e, weekIdx, actIdx, done)}
              style={{
                width: '28px', height: '28px', borderRadius: '8px',
                border: done ? 'none' : `2px solid var(--color-slate-300)`,
                background: done ? 'var(--color-success-500)' : '#fff',
                color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', padding: 0, transition: 'all 0.2s'
              }}
            >
              {done && <CheckIcon size={16} color="#fff" />}
            </button>
          </div>

          {/* Progress / Info */}
          {!done && isNavigable && (
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-slate-500)', marginBottom: '8px' }}>
                0 of 10 Questions Completed
              </div>
              <div style={{ height: '8px', background: 'var(--color-slate-100)', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: '15%', height: '100%', background: 'var(--color-brand-primary)', borderRadius: '9999px' }}></div>
              </div>
            </div>
          )}

          {/* Action button */}
          {!done && isNavigable && (
            <button
              onClick={(e) => { e.stopPropagation(); handleGo(act); }}
              style={{
                width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
                background: 'var(--color-brand-primary)', color: '#fff',
                fontFamily: 'var(--font-ui)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer',
                transition: 'all 0.2s ease', boxShadow: 'var(--shadow-sm)'
              }}
              onMouseOver={(e) => { e.target.style.background = 'var(--color-brand-primary-hover)'; e.target.style.transform = 'translateY(-1px)'; }}
              onMouseOut={(e) => { e.target.style.background = 'var(--color-brand-primary)'; e.target.style.transform = 'none'; }}
            >
              Practice {act.title.replace(/Practice/i, '').trim() || meta.label}
            </button>
          )}

          {/* Tips for strategy/review */}
          {isTip && tips.length > 0 && !done && (
            <div style={{ marginTop: '12px' }}>
              {tips.map((tip, i) => (
                <div key={i} style={{
                  fontFamily: 'var(--font-ui)', fontSize: '0.875rem', color: 'var(--color-slate-700)', lineHeight: '1.6',
                  paddingLeft: '12px', borderLeft: `3px solid ${meta.fg}`,
                  marginBottom: i < tips.length - 1 ? '8px' : 0,
                  background: `${meta.fg}10`, padding: '12px 16px', borderRadius: '0 8px 8px 0'
                }}>
                  <MathText>{tip}</MathText>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Completed Footer */}
        {done && (
          <div style={{
            background: 'var(--color-success-50)',
            color: 'var(--color-success-700)',
            padding: '16px',
            textAlign: 'center',
            fontFamily: 'var(--font-ui)',
            fontSize: '1rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            borderTop: '1px solid var(--color-success-100)'
          }}>
            Complete <CheckIcon size={16} color="currentColor" />
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
              <div style={{ position: 'absolute', top: '8px', right: '8px', fontSize: '10px', fontWeight: '700', color: '#16a34a', background: '#f0fdf4', border: '1px solid #86efac', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Mastered
              </div>
            )}
            {masteryStatus === 'needs-focus' && !act.completed && (
              <div style={{ position: 'absolute', top: '8px', right: '8px', fontSize: '10px', fontWeight: '700', color: '#dc2626', background: '#fef2f2', border: '1px solid #fca5a5', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
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
    <div style={{ padding: `${spacing.lg} 0`, display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes pulseSoft {
          0% { opacity: 0.6; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.6; transform: scale(0.95); }
        }
        .study-plan-section {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .study-plan-section:nth-child(2) { animation-delay: 0.1s; }
        .study-plan-section:nth-child(3) { animation-delay: 0.2s; }
        .study-plan-section:nth-child(4) { animation-delay: 0.3s; }
        
        .activity-row { transition: all 0.2s ease; }
        .activity-row:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.06);
          border-color: ${colors.accent.orangeLight} !important;
          z-index: 10;
        }
        .practice-btn { transition: all 0.2s ease; }
        .practice-btn:hover {
          transform: translateY(-1px);
          filter: brightness(1.1);
        }
        .skill-card { transition: all 0.2s ease; border: 1px solid transparent; }
        .skill-card:hover {
          transform: translateY(-3px);
          border-color: ${colors.accent.orangeLight};
          box-shadow: 0 8px 24px rgba(79, 70, 229, 0.12);
        }
      `}</style>
      
      {/* ────────────────────────────────────────────────────────────────
          0. WHAT CHANGED BANNER (adaptive plan diff)
          Sources: studyPlanArtifact.delta (Firestore) or studyPlan._diff (legacy)
      ──────────────────────────────────────────────────────────────── */}
      {!deltaDismissed && delta && !delta.isFirst && delta.headline && (
        <div className="study-plan-section" style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          border: '1px solid #bae6fd',
          borderRadius: radius.xl,
          padding: '20px 24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0284c7', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
            </div>
            <span style={{ fontSize: '14px', fontWeight: typography.weights.bold, color: '#0c4a6e', textTransform: 'uppercase', letterSpacing: '0.04em', flex: 1 }}>
              Plan Updated
            </span>
            <button onClick={() => {
              if (studyPlanMeta?.artifactId) localStorage.setItem(`dismissedDelta:${studyPlanMeta.artifactId}`, '1');
              setDeltaDismissed(true);
            }} style={{ background: 'none', border: 'none', color: '#0284c7', cursor: 'pointer', fontSize: '18px', padding: '0 4px', lineHeight: 1 }}>&times;</button>
          </div>
          <div style={{ fontSize: '15px', fontWeight: typography.weights.semibold, color: '#0c4a6e', lineHeight: '1.5', marginBottom: delta.skillChanges?.length > 0 ? '14px' : '0' }}>
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
        <div className="study-plan-section" style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
          border: '1px solid #86efac',
          borderRadius: radius.xl,
          padding: '20px 24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '20px' }}>🎯</span>
            <span style={{ fontSize: '16px', fontWeight: typography.weights.bold, color: '#14532d' }}>
              Your First Study Plan
            </span>
          </div>
          <div style={{ fontSize: '14px', color: '#166534', lineHeight: '1.5' }}>
            Based on your practice test results, here's your personalized weekly plan. Take another test to see how it adapts to your progress.
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────
          1. PROGRESS
      ──────────────────────────────────────────────────────────────── */}
      <div className="study-plan-section acely-projected-card" style={{
        background: '#ffffff', 
        borderRadius: 'var(--radius-xl)',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.05)',
        boxShadow: 'var(--shadow-md)'
      }}>
        {/* Decorative background radial (subtle blue) */}
        <div style={{
          position: 'absolute', top: '-50px', right: '-20px', width: '250px', height: '250px',
          background: 'radial-gradient(circle, rgba(59, 82, 217, 0.08) 0%, rgba(59, 82, 217, 0) 70%)',
          borderRadius: '50%', opacity: 1
        }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--color-brand-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '800', marginBottom: '8px' }}>
              Current Objective
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '28px', fontWeight: '800', color: 'var(--color-brand-navy)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              {summary?.headline || 'Your Study Plan'}
              {studyPlan.deltaFromPrevious && (
                <span style={{
                  padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700',
                  background: 'var(--color-accent-light-blue)', color: 'var(--color-brand-primary)',
                  marginLeft: '12px', verticalAlign: 'middle', textTransform: 'uppercase', letterSpacing: '0.04em'
                }}>
                  Updated
                </span>
              )}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '36px', fontWeight: '800', color: 'var(--color-brand-primary)', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
              {progressPercent}%
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-slate-500)', fontWeight: '600', marginTop: '8px' }}>
              {completedActivities} of {totalActivities} tasks
            </div>
          </div>
        </div>
        <div style={{ height: '8px', background: 'rgba(59, 82, 217, 0.1)', borderRadius: '9999px', overflow: 'hidden', position: 'relative' }}>
          <div style={{ 
            position: 'absolute', top: 0, left: 0, height: '100%', width: `${progressPercent}%`, 
            borderRadius: '9999px', background: 'var(--color-brand-primary)', 
            transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
          }} />
        </div>
        
        {/* What changed since your last test */}
        {studyPlan.deltaFromPrevious && (
          <div style={{
            marginTop: '20px',
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'var(--color-slate-50)',
            border: '1px solid var(--color-slate-200)',
            borderLeft: '3px solid var(--color-brand-primary)',
          }}>
            <div style={{
              fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: '800', color: 'var(--color-slate-500)',
              textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px',
            }}>
              Updated since your last test
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-slate-700)', lineHeight: '1.5' }}>
              {studyPlan.deltaFromPrevious}
            </div>
          </div>
        )}

        {/* Persistent weakness callout */}
        {studyPlan.persistentWeaknessStrategy && (
          <div style={{
            marginTop: '12px',
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'var(--color-error-50)',
            border: '1px solid var(--color-error-200)',
            borderLeft: '3px solid var(--color-error-500)',
          }}>
            <div style={{
              fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: '800', color: 'var(--color-error-700)',
              textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px',
            }}>
              Stuck skill — different approach needed
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-error-900)', lineHeight: '1.5' }}>
              {studyPlan.persistentWeaknessStrategy}
            </div>
          </div>
        )}
      </div>

      {/* ────────────────────────────────────────────────────────────────
          2. SKILLS TO IMPROVE — weakness list with Practice buttons
      ──────────────────────────────────────────────────────────────── */}
      {skillPracticeRows.length > 0 && (
        <div className="study-plan-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: summary?.diagnosis ? '12px' : '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-brand-navy)', margin: 0, letterSpacing: '-0.01em' }}>
              Focus Areas
            </h3>
          </div>
          {/* AI diagnosis narrative — explains WHY these are the focus areas */}
          {summary?.diagnosis && (
            <div style={{
              fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-slate-600)', lineHeight: '1.6',
              marginBottom: '20px', padding: '0 4px', maxWidth: '800px'
            }}>
              {summary.diagnosis}
            </div>
          )}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '16px'
          }}>
            {skillPracticeRows.map((w, i) => (
              <div key={w.skillId || i} className="skill-card" style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '16px 20px', borderRadius: '16px',
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--color-brand-primary)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* Accuracy indicator */}
                <div style={{
                  padding: '6px 12px', borderRadius: '9999px', flexShrink: 0,
                  background: w.accuracy < 30 ? 'var(--color-error-50)' : 'var(--color-warning-50)',
                  color: w.accuracy < 30 ? 'var(--color-error-700)' : 'var(--color-warning-700)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '800',
                  border: `1px solid ${w.accuracy < 30 ? 'var(--color-error-200)' : 'var(--color-warning-200)'}`
                }}>
                  {w.accuracy}%
                </div>

                {/* Skill name + error type from AI diagnosis */}
                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <div style={{
                    fontFamily: 'var(--font-ui)', fontSize: '15px', fontWeight: '700',
                    color: 'var(--color-brand-navy)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {w.skill}
                  </div>
                  {w.errorType && (
                    <div style={{
                      fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600',
                      color: w.accuracy < 30 ? 'var(--color-error-600)' : 'var(--color-warning-600)',
                      marginTop: '4px',
                    }}>
                      {w.errorType}
                    </div>
                  )}
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--color-slate-500)', marginTop: '4px' }}>
                    {w.qCount} questions {w.domain ? `\u00B7 ${w.domain}` : ''}
                  </div>
                </div>

                {/* Practice button */}
                <button
                  className="practice-btn"
                  onClick={() => onStartPractice(null, null, { questionIds: w.qIds, source: 'study-plan-assigned', label: `${w.skill} Practice` })}
                  style={{
                    padding: '8px 16px', borderRadius: '9999px', border: 'none',
                    background: 'var(--color-brand-primary)', color: '#fff',
                    fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '700', cursor: 'pointer', flexShrink: 0,
                    display: 'flex', alignItems: 'center', gap: '6px', boxShadow: 'var(--shadow-sm)', transition: 'background 0.2s'
                  }}
                  onMouseOver={e => e.currentTarget.style.background = 'var(--color-brand-primary-hover)'}
                  onMouseOut={e => e.currentTarget.style.background = 'var(--color-brand-primary)'}
                >
                  <PencilIcon size={14} /> Practice
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────
          3. WEEKLY PLAN — visually distinct cards
      ──────────────────────────────────────────────────────────────── */}
      <div className="study-plan-section">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', marginTop: '8px' }}>
          <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-brand-navy)', margin: 0, letterSpacing: '-0.01em' }}>
            Action Plan
          </h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Current week */}
          <div style={{
            borderRadius: 'var(--radius-xl)',
            background: '#ffffff',
            boxShadow: 'var(--shadow-md)',
            position: 'relative', overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'var(--color-brand-primary)' }} />
            <div style={{
              padding: '20px 24px', background: 'linear-gradient(to right, rgba(59, 82, 217, 0.08), transparent)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}>
              <div>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: '800', color: 'var(--color-brand-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Current Task List
                </span>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '20px', fontWeight: '800', color: 'var(--color-brand-navy)', marginTop: '4px', letterSpacing: '-0.01em' }}>
                  Week {displayCurrentWeek + 1}{currentWeek?.title ? ` — ${currentWeek.title}` : ''}
                </div>
              </div>
              <div style={{ background: '#ffffff', padding: '8px 16px', borderRadius: '9999px', fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '800', color: 'var(--color-brand-primary)', boxShadow: 'var(--shadow-sm)', fontVariantNumeric: 'tabular-nums' }}>
                {currentDone} / {currentTotal}
              </div>
            </div>
            <div style={{ padding: '24px', background: '#ffffff' }}>
              {renderWeekActivities(currentWeek, displayCurrentWeek)}
            </div>
          </div>

          {/* Other weeks — collapsed sleek cards */}
          {otherWeeks.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {otherWeeks.map(week => {
                const realIdx = weeks.indexOf(week);
                const isOpen = expandedWeek === realIdx;
                const done = (week.activities || []).filter(a => a.completed).length;
                const total = (week.activities || []).length;
                const pct = total > 0 ? Math.round((done / total) * 100) : 0;
                const isComplete = pct === 100;

                return (
                  <div key={realIdx} style={{
                    borderRadius: '16px', border: `1px solid ${isComplete ? 'var(--color-success-200)' : 'rgba(0,0,0,0.06)'}`,
                    background: isComplete ? 'var(--color-success-50)' : '#ffffff',
                    overflow: 'hidden', transition: 'all 0.3s ease',
                    boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)'
                  }}>
                    <button
                      onClick={() => setExpandedWeek(isOpen ? null : realIdx)}
                      style={{
                        width: '100%', padding: '16px 20px',
                        background: 'transparent',
                        border: 'none', cursor: 'pointer',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                          width: '32px', height: '32px', borderRadius: '50%',
                          background: isComplete ? 'var(--color-success-500)' : 'var(--color-slate-100)',
                          color: isComplete ? '#fff' : 'var(--color-slate-500)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: isComplete ? '0 2px 8px rgba(34, 197, 94, 0.4)' : 'none'
                        }}>
                          {isComplete ? <CheckIcon size={16} color="#fff" /> : <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '800' }}>{realIdx + 1}</span>}
                        </div>
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', fontWeight: '700', color: isComplete ? 'var(--color-slate-500)' : 'var(--color-brand-navy)' }}>
                          Week {week.weekNumber}{week.title ? ` — ${week.title}` : ''}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--color-slate-500)', fontVariantNumeric: 'tabular-nums' }}>
                          {done} / {total}
                        </span>
                        <div style={{ 
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-slate-50)',
                          border: '1px solid var(--color-slate-200)',
                          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', 
                          transform: isOpen ? 'rotate(180deg)' : 'none' 
                        }}>
                          <ChevronDownIcon size={16} color="var(--color-slate-500)" />
                        </div>
                      </div>
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 20px 20px', animation: 'fadeInUp 0.4s ease forwards' }}>
                        <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', marginBottom: '16px' }} />
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
