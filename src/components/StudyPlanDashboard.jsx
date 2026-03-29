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
      marginTop: '24px',
      paddingTop: '16px',
      borderTop: '1px solid #e5e7eb',
      flexWrap: 'wrap',
    }}>
      <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: 500, marginRight: '4px' }}>Score History:</span>
      {trajectory.map((entry, i) => (
        <span key={i} style={{
          fontSize: '13px',
          fontWeight: 600,
          color: i === trajectory.length - 1 ? '#4f46e5' : '#374151',
          background: i === trajectory.length - 1 ? '#e0e7ff' : '#f3f4f6',
          padding: '4px 10px',
          borderRadius: '8px',
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
      <div style={{ padding: `${spacing.xl} 0`, animation: 'fadeInUp 0.5s ease-out' }}>
        <style>{`
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes pulseGlow { 0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); } 70% { box-shadow: 0 0 0 15px rgba(79, 70, 229, 0); } 100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); } }
        `}</style>
        <div style={{ textAlign: 'center', padding: '50px 20px', borderRadius: radius.xl, background: `linear-gradient(to bottom, ${colors.surface.white}, ${colors.surface.offWhite})`, border: `1px solid ${colors.surface.grayDark}`, boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
          <div style={{ marginBottom: spacing.md, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: `${colors.accent.orangeLight}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.accent.orange }}>
              <ClipboardIcon size={40} />
            </div>
          </div>
          <div style={{ fontSize: '24px', fontWeight: typography.weights.bold, color: colors.text.primary, marginBottom: '12px' }}>
            No Study Plan Yet
          </div>
          <div style={{ fontSize: '15px', color: colors.text.secondary, maxWidth: '420px', margin: '0 auto', lineHeight: '1.6' }}>
            Complete a practice test and our AI will generate a highly personalized study plan tailored to your exact weaknesses.
          </div>
          {onStartPracticeTest && (
            <div style={{ marginTop: '28px' }}>
              <button onClick={onStartPracticeTest} style={{ padding: '14px 28px', fontSize: '15px', fontWeight: typography.weights.bold, color: '#fff', background: colors.accent.orange, border: 'none', borderRadius: '30px', cursor: 'pointer', animation: 'pulseGlow 2s infinite', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.05)' } }}>
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
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}>
        <div style={{ padding: '20px' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--color-brand-navy)', marginBottom: '4px' }}>
                <MathText>{act.title}</MathText>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-slate-500)', marginBottom: '12px' }}>
                {meta.label}
              </div>
              <div style={{ 
                display: 'inline-block', background: 'var(--color-brand-primary-light)', 
                color: 'var(--color-brand-primary)', padding: '4px 12px', 
                borderRadius: '99px', fontSize: '0.75rem', fontWeight: '600' 
              }}>
                {act.type === 'test' ? 'High Priority' : 'Medium Priority'}
              </div>
            </div>
            {/* Toggle */}
            <button
              onClick={(e) => handleToggle(e, weekIdx, actIdx, done)}
              style={{
                width: '24px', height: '24px', borderRadius: '6px',
                border: done ? 'none' : `2px solid var(--color-slate-300)`,
                background: done ? 'var(--color-success-600)' : '#fff',
                color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', padding: 0
              }}
            >
              {done && <CheckIcon size={14} color="#fff" />}
            </button>
          </div>

          {/* Progress / Info */}
          {!done && isNavigable && (
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-slate-600)', marginBottom: '8px' }}>
                0 of 10 Questions Completed
              </div>
              <div style={{ height: '8px', background: 'var(--color-slate-100)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '15%', height: '100%', background: 'var(--color-brand-primary)' }}></div>
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
                fontSize: '1rem', fontWeight: '600', cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => e.target.style.background = 'var(--color-brand-primary-hover)'}
              onMouseOut={(e) => e.target.style.background = 'var(--color-brand-primary)'}
            >
              Practice {act.title.replace(/Practice/i, '').trim() || meta.label}
            </button>
          )}

          {/* Tips for strategy/review */}
          {isTip && tips.length > 0 && !done && (
            <div style={{ marginTop: '12px' }}>
              {tips.map((tip, i) => (
                <div key={i} style={{
                  fontSize: '0.875rem', color: 'var(--color-slate-600)', lineHeight: '1.5',
                  paddingLeft: '12px', borderLeft: `2px solid ${meta.fg}`,
                  marginBottom: i < tips.length - 1 ? '8px' : 0,
                  background: `${meta.fg}10`, padding: '12px', borderRadius: '0 8px 8px 0'
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
            background: 'var(--color-brand-neon)',
            color: 'var(--color-accent-dark-green)',
            padding: '16px',
            textAlign: 'center',
            fontSize: '1rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
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
      <div className="study-plan-section" style={{
        background: `linear-gradient(135deg, ${colors.surface.dark} 0%, #0f172a 100%)`, 
        color: '#fff', 
        borderRadius: radius.xl,
        padding: '28px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 12px 30px rgba(15, 23, 42, 0.25)'
      }}>
        {/* Decorative orb */}
        <div style={{
          position: 'absolute', top: '-50px', right: '-20px', width: '200px', height: '200px',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.3) 0%, rgba(79, 70, 229, 0) 70%)',
          borderRadius: '50%', opacity: 0.8, animation: 'pulseSoft 4s infinite ease-in-out'
        }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
          <div>
            <div style={{ fontSize: '13px', color: colors.accent.orangeLight, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: typography.weights.bold, marginBottom: '6px' }}>
              Current Objective
            </div>
            <div style={{ fontSize: '24px', fontWeight: typography.weights.bold, lineHeight: 1.2 }}>
              {summary?.headline || 'Your Study Plan'}
              {studyPlan.deltaFromPrevious && (
                <span style={{
                  padding: '2px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: '700',
                  background: 'rgba(34,197,94,0.2)', color: '#4ade80',
                  marginLeft: '10px', verticalAlign: 'middle',
                }}>
                  Updated
                </span>
              )}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '32px', fontWeight: typography.weights.heavy, color: colors.accent.orange, lineHeight: 1 }}>
              {progressPercent}%
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: typography.weights.medium, marginTop: '6px' }}>
              {completedActivities} of {totalActivities} tasks
            </div>
          </div>
        </div>
        <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
          <div style={{ 
            position: 'absolute', top: 0, left: 0, height: '100%', width: `${progressPercent}%`, 
            borderRadius: '4px', background: `linear-gradient(90deg, ${colors.accent.orange}, #c7d2fe)`, 
            transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: '0 0 10px rgba(79, 70, 229, 0.5)'
          }} />
        </div>
        {/* What changed since your last test */}
        {studyPlan.deltaFromPrevious && (
          <div style={{
            marginTop: '14px',
            padding: '10px 14px',
            borderRadius: '10px',
            background: 'rgba(255,255,255,0.08)',
            borderLeft: '3px solid rgba(255,255,255,0.25)',
          }}>
            <div style={{
              fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px',
            }}>
              Updated since your last test
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.5' }}>
              {studyPlan.deltaFromPrevious}
            </div>
          </div>
        )}

        {/* Persistent weakness callout */}
        {studyPlan.persistentWeaknessStrategy && (
          <div style={{
            marginTop: '10px',
            padding: '10px 14px',
            borderRadius: '10px',
            background: 'rgba(220,38,38,0.15)',
            borderLeft: '3px solid rgba(220,38,38,0.5)',
          }}>
            <div style={{
              fontSize: '10px', fontWeight: '700', color: 'rgba(252,165,165,0.9)',
              textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px',
            }}>
              Stuck skill — different approach needed
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.5' }}>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: summary?.diagnosis ? '8px' : '16px' }}>
            <div style={{ width: '4px', height: '18px', background: colors.accent.orange, borderRadius: '2px' }} />
            <h3 style={{ fontSize: '15px', fontWeight: typography.weights.bold, color: colors.text.primary, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Focus Areas
            </h3>
          </div>
          {/* AI diagnosis narrative — explains WHY these are the focus areas */}
          {summary?.diagnosis && (
            <div style={{
              fontSize: '13px', color: colors.text.secondary, lineHeight: '1.55',
              marginBottom: '14px', padding: '0 2px',
            }}>
              {summary.diagnosis}
            </div>
          )}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '12px'
          }}>
            {skillPracticeRows.map((w, i) => (
              <div key={w.skillId || i} className="skill-card" style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '14px 16px', borderRadius: radius.lg,
                background: colors.surface.white,
                boxShadow: shadows.sm,
              }}>
                {/* Accuracy indicator */}
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                  background: w.accuracy < 30 ? colors.semantic.errorLight : colors.semantic.warningLight,
                  color: w.accuracy < 30 ? colors.semantic.error : colors.semantic.warning,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: typography.weights.bold,
                  boxShadow: `0 0 0 2px ${w.accuracy < 30 ? colors.semantic.errorLight : colors.semantic.warningLight}50 inset`
                }}>
                  {w.accuracy}%
                </div>

                {/* Skill name + error type from AI diagnosis */}
                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <div style={{
                    fontSize: '14px', fontWeight: typography.weights.semibold,
                    color: colors.text.primary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {w.skill}
                  </div>
                  {w.errorType && (
                    <div style={{
                      fontSize: '11px', fontWeight: typography.weights.semibold,
                      color: w.accuracy < 30 ? colors.semantic.error : colors.semantic.warning,
                      marginTop: '2px',
                    }}>
                      {w.errorType}
                    </div>
                  )}
                  <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: '2px' }}>
                    {w.qCount} questions {w.domain ? `\u00B7 ${w.domain}` : ''}
                  </div>
                </div>

                {/* Practice button */}
                <button
                  className="practice-btn"
                  onClick={() => onStartPractice(null, null, { questionIds: w.qIds, source: 'study-plan-assigned', label: `${w.skill} Practice` })}
                  style={{
                    padding: '8px 14px', borderRadius: '20px', border: `1.5px solid ${colors.accent.orangeLight}`,
                    background: '#fff', color: colors.accent.orange,
                    fontSize: '12px', fontWeight: typography.weights.bold, cursor: 'pointer', flexShrink: 0,
                    display: 'flex', alignItems: 'center', gap: '6px'
                  }}
                >
                  <PencilIcon size={12} /> Practice
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', marginTop: '8px' }}>
          <div style={{ width: '4px', height: '18px', background: colors.accent.orange, borderRadius: '2px' }} />
          <h3 style={{ fontSize: '15px', fontWeight: typography.weights.bold, color: colors.text.primary, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Action Plan
          </h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Current week */}
          <div style={{
            borderRadius: radius.xl,
            background: colors.surface.white,
            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: colors.accent.orange }} />
            <div style={{
              padding: '16px 24px', background: `linear-gradient(to right, ${colors.accent.orangeLight}40, transparent)`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderBottom: `1px solid ${colors.surface.grayDark}`
            }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: typography.weights.bold, color: colors.accent.orange, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Current Task List
                </span>
                <div style={{ fontSize: '18px', fontWeight: typography.weights.bold, color: colors.text.primary, marginTop: '2px' }}>
                  Week {displayCurrentWeek + 1}{currentWeek?.title ? ` — ${currentWeek.title}` : ''}
                </div>
              </div>
              <div style={{ background: colors.surface.white, padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: typography.weights.bold, color: colors.accent.orange, boxShadow: shadows.md }}>
                {currentDone} / {currentTotal}
              </div>
            </div>
            <div style={{ padding: '20px', background: colors.surface.white }}>
              {renderWeekActivities(currentWeek, displayCurrentWeek)}
            </div>
          </div>

          {/* Other weeks — collapsed sleek cards */}
          {otherWeeks.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {otherWeeks.map(week => {
                const realIdx = weeks.indexOf(week);
                const isOpen = expandedWeek === realIdx;
                const done = (week.activities || []).filter(a => a.completed).length;
                const total = (week.activities || []).length;
                const pct = total > 0 ? Math.round((done / total) * 100) : 0;
                const isComplete = pct === 100;

                return (
                  <div key={realIdx} style={{
                    borderRadius: radius.lg, border: `1px solid ${isComplete ? colors.semantic.successLight : colors.surface.grayDark}`,
                    background: isComplete ? `${colors.semantic.successLight}30` : colors.surface.white,
                    overflow: 'hidden', transition: 'all 0.3s ease',
                    boxShadow: isOpen ? shadows.md : shadows.none
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
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{
                          width: '28px', height: '28px', borderRadius: '50%',
                          background: isComplete ? colors.semantic.success : colors.surface.grayMedium,
                          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: isComplete ? '0 2px 8px rgba(34, 197, 94, 0.4)' : 'none'
                        }}>
                          {isComplete ? <CheckIcon size={14} color="#fff" /> : <span style={{ fontSize: '11px', fontWeight: 'bold' }}>{realIdx + 1}</span>}
                        </div>
                        <span style={{ fontSize: '15px', fontWeight: typography.weights.semibold, color: isComplete ? colors.text.secondary : colors.text.primary }}>
                          Week {week.weekNumber}{week.title ? ` — ${week.title}` : ''}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '13px', fontWeight: typography.weights.medium, color: colors.text.secondary }}>
                          {done} / {total}
                        </span>
                        <div style={{ 
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: '28px', height: '28px', borderRadius: '50%', background: colors.surface.gray,
                          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', 
                          transform: isOpen ? 'rotate(180deg)' : 'none' 
                        }}>
                          <ChevronDownIcon size={16} color={colors.text.secondary} />
                        </div>
                      </div>
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 20px 20px', animation: 'fadeInUp 0.4s ease forwards' }}>
                        <div style={{ height: '1px', background: colors.surface.grayDark, marginBottom: '16px' }} />
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
