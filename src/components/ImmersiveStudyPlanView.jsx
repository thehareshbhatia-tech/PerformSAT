import React, { useState } from 'react';
import { colors, typography, spacing, radius, transitions } from '../design/tokens';
import { MathText } from './MathText';
import {
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

const TYPE_META = {
  lesson:   { label: 'Lesson',   bg: colors.semantic.infoLight,    fg: colors.semantic.info },
  practice: { label: 'Practice', bg: colors.semantic.successLight, fg: colors.semantic.success },
  strategy: { label: 'Strategy', bg: colors.semantic.warningLight, fg: colors.semantic.warning },
  review:   { label: 'Review',   bg: colors.semantic.warningBg,    fg: colors.badge.bronze },
  test:     { label: 'Test',     bg: colors.accent.orangeLight,    fg: colors.accent.orange },
};

function activityIcon(activity) {
  if (activity.type === 'lesson') {
    return activity.activityType === 'watchLesson'
      ? <VideoCameraIcon size={18} color={colors.semantic.info} />
      : <BookOpenIcon size={18} color={colors.semantic.info} />;
  }
  if (activity.type === 'practice') return <PencilIcon size={18} color={colors.semantic.success} />;
  if (activity.type === 'strategy') return <BrainIcon size={18} color={colors.semantic.warning} />;
  if (activity.type === 'review')   return <SearchIcon size={18} color={colors.badge.bronze} />;
  if (activity.type === 'test')     return <DocumentIcon size={18} color={colors.accent.orange} />;
  return <PinIcon size={18} color={colors.text.secondary} />;
}

// Minimal Badge for Immersive View
function ImmersiveBadge({ text, bg, fg }) {
  return (
    <span style={{
      fontSize: '11px',
      fontWeight: '600',
      color: fg,
      background: bg,
      padding: '4px 8px',
      borderRadius: '6px',
      flexShrink: 0,
      letterSpacing: '0.02em',
      textTransform: 'uppercase'
    }}>
      {text}
    </span>
  );
}

// Refined Collapsible
function ImmersiveCollapsible({ title, summary, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{
      background: colors.surface.white,
      borderRadius: '16px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
      overflow: 'hidden',
      marginBottom: spacing.md
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = colors.surface.offWhite}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
      >
        <div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: colors.text.primary }}>{title}</div>
          {!open && summary && (
            <div style={{ fontSize: '13px', color: colors.text.tertiary, marginTop: '2px' }}>{summary}</div>
          )}
        </div>
        <span style={{
          display: 'flex', alignItems: 'center',
          transition: `transform ${transitions.fast}`, transform: open ? 'rotate(180deg)' : 'none',
          background: colors.surface.offWhite,
          padding: '6px',
          borderRadius: '50%'
        }}>
          <ChevronDownIcon size={16} color={colors.text.secondary} />
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 20px 20px' }}>
          {children}
        </div>
      )}
    </div>
  );
}

function ImmersiveInsightTile({ label, value, valueColor, detail }) {
  return (
    <div style={{ padding: '16px', background: colors.surface.offWhite, borderRadius: '12px' }}>
      <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>{label}</div>
      <div style={{ fontSize: '24px', fontWeight: '700', color: valueColor, letterSpacing: '-0.02em' }}>{value}</div>
      {detail && <div style={{ fontSize: '13px', color: colors.text.secondary, lineHeight: '1.4', marginTop: '6px' }}><MathText>{detail}</MathText></div>}
    </div>
  );
}

const ImmersiveStudyPlanView = ({
  studyPlan,
  targetedQuestions,
  adaptiveOverlay,
  isMobile,
  progressPercent,
  completedActivities,
  totalActivities,
  weeks,
  displayCurrentWeek,
  activeExpanded,
  expandedWeek,
  setExpandedWeek,
  nextAction,
  handleActivityClick,
  handleToggleComplete,
  hasHowYouTestData,
  hasDelta,
  hasInsights,
  studyPlanHistory,
  onSelectPlanVersion
}) => {
  const { summary, strengths, weaknesses, deltaFromPrevious, persistentWeaknessStrategy, calculatorDependency, eliminationEffectiveness, persistentWeaknesses, staminaInsight } = studyPlan;

  return (
    <div style={{ padding: `${spacing.xl} 0`, display: 'flex', flexDirection: 'column', gap: '32px' }}>

      {/* ── 1. HERO SUMMARY (Apple-style gradient & glassmorphism) ────────────────── */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.surface.dark} 0%, #0f172a 100%)`,
        color: 'white', borderRadius: '24px',
        padding: isMobile ? '24px' : '40px',
        boxShadow: '0 20px 40px rgba(15,23,42,0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle decorative glow */}
        <div style={{
          position: 'absolute', top: '-50%', right: '-10%', width: '60%', height: '150%',
          background: 'radial-gradient(ellipse at center, rgba(234, 88, 12, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
          <div style={{ flex: 1, paddingRight: '24px' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', color: colors.accent.orange, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              {weeks.length}-Week Plan
            </div>
            <div style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.02em', marginBottom: '12px' }}>
              <MathText>{summary?.headline || 'Your Personalized Plan'}</MathText>
            </div>
            {summary?.diagnosis && (
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', maxWidth: '600px', margin: 0 }}>
                <MathText>{summary.diagnosis}</MathText>
              </p>
            )}
          </div>
          <div style={{ textAlign: 'right', minWidth: '80px', flexShrink: 0 }}>
            <div style={{ fontSize: '48px', fontWeight: '800', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>
              {progressPercent}<span style={{ fontSize: '24px', opacity: 0.6 }}>%</span>
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px', fontWeight: '500' }}>{completedActivities} of {totalActivities} done</div>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: '32px', position: 'relative', zIndex: 1 }}>
          <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: `${progressPercent}%`, borderRadius: '3px',
              background: progressPercent >= 75 ? colors.semantic.success : colors.accent.orange,
              transition: `width ${transitions.slow}`,
            }} />
          </div>
        </div>

        {/* Stat boxes */}
        {summary?.stats && (
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', position: 'relative', zIndex: 1, overflowX: 'auto', paddingBottom: '4px' }}>
            {[
              { label: 'Weeks', value: summary.stats.weeksInPlan },
              { label: 'Lessons', value: summary.stats.totalLessons },
              { label: 'Practice', value: summary.stats.totalPractice },
              { label: 'Per Day', value: `${summary.stats.minutesPerDay}m` }
            ].map((stat, i) => stat.value ? (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '12px 16px', minWidth: '100px',
                border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#fff' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '4px', fontWeight: '500' }}>{stat.label}</div>
              </div>
            ) : null)}
          </div>
        )}
      </div>

      {/* ── 2. DO THIS NOW ───────────────────────────────────────────── */}
      {nextAction && (
        <div
          onClick={() => handleActivityClick(nextAction)}
          style={{
            background: colors.surface.white,
            borderRadius: '20px', padding: isMobile ? '20px' : '24px 32px',
            cursor: 'pointer', border: `1px solid ${colors.surface.grayDark}`,
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            display: 'flex', flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between', gap: '20px',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.04)';
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ fontSize: '11px', fontWeight: '700', color: colors.accent.orange, textTransform: 'uppercase', letterSpacing: '0.06em', background: colors.accent.orangeLight, padding: '4px 10px', borderRadius: '6px' }}>
                Next Up
              </div>
              {nextAction.duration && (
                <span style={{ fontSize: '13px', color: colors.text.secondary, fontWeight: '500' }}>
                  ~{nextAction.duration} min
                </span>
              )}
            </div>
            <div style={{ fontSize: '20px', fontWeight: '700', color: colors.text.primary, marginBottom: '6px', letterSpacing: '-0.01em' }}>
              <MathText>{nextAction.title}</MathText>
            </div>
            {(nextAction.reason || nextAction.subtitle) && (
              <div style={{ fontSize: '15px', color: colors.text.secondary, lineHeight: '1.5' }}>
                <MathText>{nextAction.reason || nextAction.subtitle}</MathText>
              </div>
            )}
          </div>
          <button style={{
            background: colors.text.primary, color: '#fff', border: 'none', borderRadius: '12px',
            padding: '14px 28px', fontSize: '15px', fontWeight: '600', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0
          }}>
            Start Activity
          </button>
        </div>
      )}

      {/* ── 3. WEEKLY PLAN ───────────────────────────────────────────── */}
      <div>
        <div style={{ fontSize: '22px', fontWeight: '700', color: colors.text.primary, marginBottom: '20px', letterSpacing: '-0.02em' }}>
          Weekly Breakdown
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {weeks.map((week, weekIdx) => {
            const isExpanded = activeExpanded === weekIdx;
            const done = (week.activities || []).filter(a => a.completed).length;
            const total = (week.activities || []).length;
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;
            const isCurrent = weekIdx === displayCurrentWeek;

            return (
              <div key={weekIdx} style={{
                background: colors.surface.white,
                borderRadius: '16px',
                border: isCurrent ? `2px solid ${colors.accent.orange}` : `1px solid ${colors.surface.grayDark}`,
                boxShadow: isCurrent ? '0 8px 24px rgba(234, 88, 12, 0.08)' : '0 2px 8px rgba(0,0,0,0.02)',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setExpandedWeek(isExpanded ? null : weekIdx)}
                  style={{
                    width: '100%', padding: '20px', background: 'transparent',
                    border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '12px',
                      background: pct === 100 ? colors.semantic.successLight : isCurrent ? colors.accent.orangeLight : colors.surface.offWhite,
                      color: pct === 100 ? colors.semantic.success : isCurrent ? colors.accent.orange : colors.text.secondary,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '16px', fontWeight: '700', flexShrink: 0,
                    }}>
                      {pct === 100 ? <CheckIcon size={20} color={colors.semantic.success} /> : week.weekNumber}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ fontSize: '18px', fontWeight: '600', color: colors.text.primary, letterSpacing: '-0.01em' }}>
                          {week.title || `Week ${week.weekNumber}`}
                        </div>
                        {isCurrent && (
                          <span style={{ fontSize: '11px', fontWeight: '600', color: colors.accent.orange, background: colors.accent.orangeLight, padding: '4px 8px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Current</span>
                        )}
                      </div>
                      <div style={{ fontSize: '14px', color: colors.text.secondary, marginTop: '4px' }}>
                        {done} of {total} activities completed
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Mini progress bar */}
                    {!isMobile && (
                      <div style={{ width: '80px', height: '6px', background: colors.surface.grayDark, borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${pct}%`, background: pct === 100 ? colors.semantic.success : colors.accent.orange, borderRadius: '3px' }} />
                      </div>
                    )}
                    <span style={{
                      display: 'flex', alignItems: 'center', transition: 'transform 0.2s', transform: isExpanded ? 'rotate(180deg)' : 'none',
                      background: colors.surface.offWhite, padding: '8px', borderRadius: '50%'
                    }}>
                      <ChevronDownIcon size={18} color={colors.text.secondary} />
                    </span>
                  </div>
                </button>

                {isExpanded && (
                  <div style={{ padding: '0 20px 24px', borderTop: `1px solid ${colors.surface.gray}` }}>
                    {(week.rationale || week.goalDescription) && (
                      <div style={{ fontSize: '15px', color: colors.text.secondary, padding: '20px 0 16px', lineHeight: '1.5' }}>
                        <MathText>{week.rationale || week.goalDescription}</MathText>
                      </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: (week.rationale || week.goalDescription) ? 0 : '20px' }}>
                      {(week.activities || []).map((activity, actIdx) => {
                        const done = activity.completed;
                        const meta = TYPE_META[activity.type] || { label: 'Activity', bg: colors.surface.gray, fg: colors.text.secondary };

                        return (
                          <div
                            key={actIdx}
                            onClick={() => handleActivityClick(activity)}
                            style={{
                              display: 'flex', alignItems: 'center', gap: '16px',
                              padding: '16px', borderRadius: '12px',
                              background: done ? colors.surface.offWhite : colors.surface.white,
                              border: `1px solid ${colors.surface.grayDark}`, cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              opacity: done ? 0.7 : 1
                            }}
                            onMouseEnter={e => {
                              if (!done) {
                                e.currentTarget.style.borderColor = colors.surface.grayMedium;
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                              }
                            }}
                            onMouseLeave={e => {
                              if (!done) {
                                e.currentTarget.style.borderColor = colors.surface.grayDark;
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'none';
                              }
                            }}
                          >
                            <button
                              onClick={(e) => handleToggleComplete(e, weekIdx, actIdx, done)}
                              style={{
                                width: '24px', height: '24px', borderRadius: '8px',
                                border: done ? 'none' : `2px solid ${colors.surface.grayMedium}`,
                                background: done ? colors.semantic.success : 'transparent',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0, padding: 0, cursor: 'pointer', transition: 'all 0.15s'
                              }}
                            >
                              {done && <CheckIcon size={14} color="#fff" />}
                            </button>

                            <div style={{ flexShrink: 0, padding: '10px', background: colors.surface.offWhite, borderRadius: '10px' }}>
                              {activityIcon(activity)}
                            </div>

                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{
                                fontSize: '15px', fontWeight: '600', color: done ? colors.text.secondary : colors.text.primary,
                                textDecoration: done ? 'line-through' : 'none', marginBottom: '4px', letterSpacing: '-0.01em'
                              }}>
                                <MathText>{activity.title}</MathText>
                              </div>
                              {activity.subtitle && (
                                <div style={{ fontSize: '13px', color: colors.text.tertiary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  <MathText>{activity.subtitle}</MathText>
                                </div>
                              )}
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                              {!isMobile && <ImmersiveBadge text={meta.label} bg={meta.bg} fg={meta.fg} />}
                              {activity.duration && (
                                <span style={{ fontSize: '13px', color: colors.text.secondary, fontWeight: '500', width: '40px', textAlign: 'right' }}>
                                  {activity.duration}m
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 4. INSIGHTS ──────────────────────────────────────────────── */}
      {hasInsights && (
        <div style={{ marginTop: '16px' }}>
          <div style={{ fontSize: '22px', fontWeight: '700', color: colors.text.primary, marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Performance Insights
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {(strengths?.length > 0 || weaknesses?.length > 0) && (
                <ImmersiveCollapsible
                  title="Strengths & Focus Areas"
                  summary={`${weaknesses?.length || 0} focus areas · ${strengths?.length || 0} strengths`}
                  defaultOpen={true}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {weaknesses?.length > 0 && (
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: '700', color: colors.semantic.error, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Focus Areas</div>
                        {weaknesses.slice(0, 4).map((w, i) => (
                          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: colors.surface.offWhite, borderRadius: '8px', marginBottom: '8px' }}>
                            <span style={{ fontSize: '14px', fontWeight: '500', color: colors.text.primary }}><MathText>{w.skill}</MathText></span>
                            <span style={{ fontSize: '13px', fontWeight: '600', color: w.accuracy < 30 ? colors.semantic.error : colors.semantic.warning }}>{w.accuracy}%</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {strengths?.length > 0 && (
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: '700', color: colors.semantic.success, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Strengths</div>
                        {strengths.slice(0, 3).map((s, i) => (
                          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: colors.surface.offWhite, borderRadius: '8px', marginBottom: '8px' }}>
                            <span style={{ fontSize: '14px', fontWeight: '500', color: colors.text.primary }}>{s.skill}</span>
                            <span style={{ fontSize: '13px', fontWeight: '600', color: colors.semantic.success }}>{s.accuracy}%</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </ImmersiveCollapsible>
              )}

              {hasDelta && (
                <ImmersiveCollapsible title="What Changed" summary="Progress since last plan">
                  {deltaFromPrevious && (
                    <div style={{ fontSize: '14px', color: colors.text.secondary, lineHeight: '1.6', marginBottom: '16px' }}>{deltaFromPrevious}</div>
                  )}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {adaptiveOverlay?.focusSkills?.filter(s => s.delta === 'improved' || s.delta === 'declined').slice(0, 6).map((skill, i) => (
                      <span key={i} style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        fontSize: '13px', fontWeight: '500', padding: '6px 12px', borderRadius: '8px',
                        background: skill.delta === 'improved' ? colors.semantic.successLight : colors.semantic.errorLight,
                        color: skill.delta === 'improved' ? colors.semantic.success : colors.semantic.error,
                      }}>
                        {skill.delta === 'improved' ? '↑' : '↓'} {skill.skillName} {skill.currentAccuracy !== null && `(${skill.currentAccuracy}%)`}
                      </span>
                    ))}
                  </div>
                </ImmersiveCollapsible>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {hasHowYouTestData && (
                <ImmersiveCollapsible title="How You Test" summary="Testing habits and stamina" defaultOpen={true}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {staminaInsight && (
                      <ImmersiveInsightTile label="Stamina" value={staminaInsight.score} valueColor={staminaInsight.score >= 70 ? colors.semantic.success : staminaInsight.score >= 50 ? colors.semantic.warning : colors.semantic.error} detail={staminaInsight.message} />
                    )}
                    {calculatorDependency && (
                      <ImmersiveInsightTile label="Calculator" value={`${calculatorDependency.usagePercent}%`} valueColor={calculatorDependency.usagePercent > 60 ? colors.semantic.warning : colors.text.primary} detail={calculatorDependency.insight} />
                    )}
                  </div>
                </ImmersiveCollapsible>
              )}

              {targetedQuestions.length > 0 && (
                <ImmersiveCollapsible title="Targeted Practice" summary={`${targetedQuestions.length} matched questions`}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {targetedQuestions.slice(0, 5).map((q, i) => (
                      <div key={q.id} style={{ padding: '12px', background: colors.surface.offWhite, borderRadius: '8px', fontSize: '13px', color: colors.text.secondary }}>
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                          <span style={{ fontWeight: '600', color: q.difficulty === 'hard' ? colors.semantic.error : q.difficulty === 'medium' ? colors.semantic.warning : colors.semantic.success }}>{q.difficulty.toUpperCase()}</span>
                          <span style={{ color: colors.text.tertiary }}>•</span>
                          <span style={{ fontWeight: '500', color: colors.text.primary }}>{q.domain}</span>
                        </div>
                        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          <MathText>{q.question}</MathText>
                        </div>
                      </div>
                    ))}
                  </div>
                </ImmersiveCollapsible>
              )}
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ImmersiveStudyPlanView;
