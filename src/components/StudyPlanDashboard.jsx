import React, { useState, useMemo } from 'react';
import { colors, typography, spacing, radius, transitions, breakpoints } from '../design/tokens';
import { MathText } from './MathText';
import { DataCard } from './ui/DataCard';
import { PrimaryButton } from './ui/Button';
import { getQuestionById, getQuestionsBySkillIds } from '../data/questions/bank';
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

const StudyPlanDashboard = ({
  variant = 'default',
  studyPlan,
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
}) => {
  const [expandedWeek, setExpandedWeek] = useState(null);

  // ── Empty state ──────────────────────────────────────────────────────
  if (!studyPlan || !studyPlan.weeks || studyPlan.weeks.length === 0) {
    return (
      <div style={{ padding: `${spacing.xl} 0` }}>
        <DataCard style={{ textAlign: 'center', padding: `${spacing.xl} ${spacing.lg}` }}>
          <div style={{ marginBottom: spacing.xs, display: 'flex', justifyContent: 'center' }}>
            <ClipboardIcon size={28} color={colors.text.secondary} />
          </div>
          <div style={{ fontSize: typography.sizes.lg, fontWeight: typography.weights.semibold, color: colors.text.primary, marginBottom: '4px' }}>
            No Study Plan Yet
          </div>
          <div style={{ fontSize: typography.sizes.sm, color: colors.text.secondary, maxWidth: '360px', margin: '0 auto', lineHeight: '1.6' }}>
            Complete a practice test and your personalized study plan will appear here.
          </div>
          {onStartPracticeTest && (
            <PrimaryButton onClick={onStartPracticeTest} style={{ marginTop: spacing.md }}>
              Take a Practice Test
            </PrimaryButton>
          )}
        </DataCard>
      </div>
    );
  }

  // ── Derived data ─────────────────────────────────────────────────────
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
    return weaknesses.slice(0, 6).map(w => {
      const skillIds = w.skillId ? [w.skillId] : [];
      const questions = skillIds.length > 0
        ? getQuestionsBySkillIds(skillIds, { limit: 15 }).filter(q => Array.isArray(q.choices) && q.choices.length >= 2)
        : [];
      if (questions.length === 0) return null;
      return { ...w, qCount: questions.length, qIds: questions.map(q => q.id) };
    }).filter(Boolean);
  }, [weaknesses, onStartPractice]);

  // ── Activity row ─────────────────────────────────────────────────────
  const ActivityRow = ({ act, weekIdx, actIdx }) => {
    const done = act.completed;
    const isNavigable = act.type === 'lesson' || act.type === 'practice' || act.type === 'test';
    const isTip = act.type === 'strategy' || act.type === 'review';
    const tips = act.tips || [];
    const meta = TYPE_META[act.type] || TYPE_META.lesson;

    return (
      <div style={{
        padding: '10px 12px', borderRadius: radius.md,
        background: done ? colors.surface.offWhite : colors.surface.white,
        border: `1px solid ${done ? colors.surface.gray : colors.surface.grayDark}`,
        opacity: done ? 0.5 : 1,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Checkbox */}
          <button
            onClick={(e) => handleToggle(e, weekIdx, actIdx, done)}
            role="checkbox" aria-checked={done}
            style={{
              width: '20px', height: '20px', borderRadius: '5px',
              border: done ? 'none' : `2px solid ${colors.surface.grayMedium}`,
              background: done ? colors.semantic.success : '#fff',
              color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0, padding: 0,
            }}
          >
            {done && <CheckIcon size={10} color="#fff" />}
          </button>

          {/* Icon */}
          <span style={{ flexShrink: 0, display: 'flex' }}>{activityIcon(act.type)}</span>

          {/* Title */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: '13px', fontWeight: typography.weights.semibold,
              color: done ? colors.text.muted : colors.text.primary,
              textDecoration: done ? 'line-through' : 'none',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              <MathText>{act.title}</MathText>
            </div>
          </div>

          {/* Badge */}
          <span style={{
            fontSize: '10px', fontWeight: typography.weights.bold,
            color: meta.fg, background: `${meta.fg}15`,
            padding: '2px 8px', borderRadius: radius.sm, flexShrink: 0,
          }}>
            {meta.label}
          </span>

          {/* Action button */}
          {!done && isNavigable && (
            <button
              onClick={(e) => { e.stopPropagation(); handleGo(act); }}
              style={{
                padding: '5px 14px', borderRadius: radius.sm, border: 'none',
                background: meta.fg, color: '#fff',
                fontSize: '11px', fontWeight: typography.weights.bold,
                cursor: 'pointer', flexShrink: 0,
              }}
            >
              Go
            </button>
          )}
        </div>

        {/* Tips for strategy/review — shown inline below title */}
        {isTip && tips.length > 0 && !done && (
          <div style={{ marginTop: '8px', paddingLeft: '46px' }}>
            {tips.map((tip, i) => (
              <div key={i} style={{
                fontSize: '12px', color: colors.text.secondary, lineHeight: '1.5',
                paddingLeft: '12px', borderLeft: `2px solid ${colors.surface.grayMedium}`,
                marginBottom: i < tips.length - 1 ? '4px' : 0,
              }}>
                {tip}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // ── Render a week's activities as a flat list ────────────────────────
  const renderWeekActivities = (week, weekIdx) => {
    const activities = week.activities || [];
    if (activities.length === 0) {
      return <div style={{ fontSize: '13px', color: colors.text.muted, padding: '8px 0' }}>No activities this week.</div>;
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {activities.map((act, i) => (
          <ActivityRow key={i} act={act} weekIdx={weekIdx} actIdx={i} />
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
    <div style={{ padding: `${spacing.md} 0`, display: 'flex', flexDirection: 'column', gap: '14px' }}>

      {/* ────────────────────────────────────────────────────────────────
          1. PROGRESS
      ──────────────────────────────────────────────────────────────── */}
      <div style={{
        background: colors.surface.dark, color: '#fff', borderRadius: radius.lg,
        padding: '14px 18px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '14px', fontWeight: typography.weights.bold }}>
            {summary?.headline || 'Your Study Plan'}
          </span>
          <span style={{ fontSize: '13px', fontWeight: typography.weights.bold, color: colors.accent.orange }}>
            {progressPercent}%
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', fontWeight: typography.weights.regular, marginLeft: '4px' }}>
              ({completedActivities}/{totalActivities})
            </span>
          </span>
        </div>
        <div style={{ height: '4px', background: 'rgba(255,255,255,0.12)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progressPercent}%`, borderRadius: '2px', background: colors.accent.orange, transition: `width ${transitions.slow}` }} />
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────
          2. SKILLS TO IMPROVE — weakness list with Practice buttons
      ──────────────────────────────────────────────────────────────── */}
      {skillPracticeRows.length > 0 && (
        <div style={{
          borderRadius: radius.lg, border: `1px solid ${colors.surface.grayDark}`,
          background: colors.surface.white, padding: '14px 18px',
        }}>
          <div style={{
            fontSize: '11px', fontWeight: typography.weights.bold, color: colors.text.muted,
            textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px',
          }}>
            Skills to Improve
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {skillPracticeRows.map((w, i) => (
              <div key={w.skillId || i} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '8px 12px', borderRadius: radius.sm,
                background: colors.surface.offWhite,
              }}>
                {/* Accuracy dot */}
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
                  background: w.accuracy < 30 ? colors.semantic.error : colors.semantic.warning,
                }} />

                {/* Skill name */}
                <span style={{
                  flex: 1, fontSize: '13px', fontWeight: typography.weights.semibold,
                  color: colors.text.primary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {w.skill}
                </span>

                {/* Accuracy */}
                <span style={{
                  fontSize: '12px', color: w.accuracy < 30 ? colors.semantic.error : colors.semantic.warning,
                  fontWeight: typography.weights.bold, flexShrink: 0,
                }}>
                  {w.accuracy}%
                </span>

                {/* Practice button */}
                <button
                  onClick={() => onStartPractice(null, null, { questionIds: w.qIds, source: 'study-plan-assigned', label: `${w.skill} Practice` })}
                  style={{
                    padding: '4px 12px', borderRadius: radius.sm, border: 'none',
                    background: colors.accent.orange, color: '#fff',
                    fontSize: '11px', fontWeight: typography.weights.bold, cursor: 'pointer', flexShrink: 0,
                  }}
                >
                  Practice
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────
          3. WEEKLY PLAN — flat checklist
      ──────────────────────────────────────────────────────────────── */}
      <div>
        {/* Current week — always open */}
        <div style={{
          borderRadius: radius.lg, border: `1.5px solid ${colors.accent.orange}`,
          background: colors.surface.white, overflow: 'hidden',
        }}>
          <div style={{
            padding: '12px 18px', background: colors.accent.orangeLight,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span style={{ fontSize: '13px', fontWeight: typography.weights.bold, color: colors.text.primary }}>
              Week {displayCurrentWeek + 1}{currentWeek?.title ? ` — ${currentWeek.title}` : ''}
            </span>
            <span style={{ fontSize: '11px', color: colors.text.secondary }}>
              {currentDone}/{currentTotal} done
            </span>
          </div>
          <div style={{ padding: '12px 14px' }}>
            {renderWeekActivities(currentWeek, displayCurrentWeek)}
          </div>
        </div>

        {/* Other weeks — collapsed */}
        {otherWeeks.length > 0 && (
          <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {otherWeeks.map(week => {
              const realIdx = weeks.indexOf(week);
              const isOpen = expandedWeek === realIdx;
              const done = (week.activities || []).filter(a => a.completed).length;
              const total = (week.activities || []).length;
              const pct = total > 0 ? Math.round((done / total) * 100) : 0;

              return (
                <div key={realIdx} style={{
                  borderRadius: radius.md, border: `1px solid ${colors.surface.grayDark}`,
                  background: colors.surface.white, overflow: 'hidden',
                }}>
                  <button
                    onClick={() => setExpandedWeek(isOpen ? null : realIdx)}
                    style={{
                      width: '100%', padding: '10px 16px',
                      background: pct === 100 ? colors.semantic.successLight : colors.surface.offWhite,
                      border: 'none', cursor: 'pointer',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: typography.weights.semibold, color: colors.text.primary }}>
                      {pct === 100 && <CheckIcon size={12} color={colors.semantic.success} />}
                      {pct === 100 ? ' ' : ''}Week {week.weekNumber}{week.title ? ` — ${week.title}` : ''}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '11px', color: colors.text.muted }}>{done}/{total}</span>
                      <span style={{ display: 'flex', transition: `transform ${transitions.fast}`, transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                        <ChevronDownIcon size={14} color={colors.text.muted} />
                      </span>
                    </div>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '12px 14px' }}>
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
  );
};

export default StudyPlanDashboard;
