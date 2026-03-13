/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DIAGNOSTIC REPORT — The Core Experience of PerformSAT
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This component displays:
 * 1. Score overview with gap-to-target
 * 2. Error pattern breakdown ("why you got things wrong")
 * 3. Score projection ("fix X to gain Y points")
 * 4. Domain-level analysis
 * 5. The generated weekly study plan
 * 6. Cross-test trend analysis
 *
 * This is shown after a practice test is completed and is the primary
 * interface through which students understand their performance and
 * receive their study plan.
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { runDiagnostic, ERROR_TYPES, ERROR_TYPE_LABELS, ERROR_TYPE_ICONS, ERROR_TYPE_COLORS } from '../services/diagnosticEngine';
import { generateStudyPlan, compareDiagnostics } from '../services/studyPlanGenerator';
import ErrorRecoveryDrills from './ErrorRecoveryDrills';
import { MathText } from './MathText';
import { colors, typography, spacing, radius, shadows, transitions } from '../design/tokens';
import { cardStyles, buttonStyles } from '../design/components';
import {
  ChartBarIcon, TrendingUpIcon, TrendingDownIcon, CheckCircleIcon, WarningIcon,
  TargetIcon, LightBulbIcon, ClipboardIcon, MicroscopeIcon, RocketIcon, LinkIcon,
  PuzzleIcon, RefreshIcon, RepeatIcon, FlagCheckeredIcon, SignalIcon, RulerIcon,
  RunnerIcon, BooksIcon, LightningIcon, StarIcon, StarFilledIcon, TimerIcon,
  SearchIcon, CalendarIcon, ChevronUpIcon, ChevronDownIcon, ChevronRightIcon,
  ArrowRightIcon, ArrowLeftIcon, InfoIcon,
} from '../design/icons';
import { useCountUp } from '../design/animations';

// Note: Advanced analytics (confidenceInterval, learningVelocity, skillClusters,
// answerPatterns, stamina, percentile, mistakeFingerprint, timeAllocation)
// are now included in the diagnostic output from runDiagnostic automatically.

// Design tokens are now imported directly from '../design/tokens'
// No wrapper objects needed — use colors.text.primary, colors.accent.orange, etc.

// ═══════════════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

// ── Score Ring with count-up animation ──
const ScoreRing = ({ score, target, size = 160 }) => {
  const strokeWidth = 12;
  const r = (size - strokeWidth) / 2 - 4;
  const circumference = 2 * Math.PI * r;
  const progress = Math.min(score / 800, 1);
  const targetProgress = Math.min(target / 800, 1);
  const offset = circumference - progress * circumference;
  const targetOffset = circumference - targetProgress * circumference;
  const isAtTarget = score >= target;
  const displayScore = useCountUp(score, 800, 200);

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.06))' }}>
        {/* Background track */}
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth={strokeWidth} />
        {/* Target marker */}
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#f97316" strokeWidth={strokeWidth}
          strokeDasharray={`2 ${circumference - 2}`} strokeDashoffset={targetOffset} opacity={0.6} />
        {/* Score progress */}
        <circle cx={size/2} cy={size/2} r={r} fill="none"
          stroke={isAtTarget ? '#22c55e' : '#06b6d4'} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.34, 1.56, 0.64, 1)' }} />
      </svg>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <div style={{ fontSize: '42px', fontWeight: '800', color: colors.text.primary, letterSpacing: '-0.04em', lineHeight: '1' }}>
          {displayScore}
        </div>
        <div style={{ fontSize: '13px', color: colors.text.secondary, marginTop: '4px', fontWeight: '600', letterSpacing: '0.02em' }}>
          out of 800
        </div>
      </div>
    </div>
  );
};

// ── Progress Bar ──
const ProgressBar = ({ value, max = 100, color = colors.accent.orange, height = 8, showLabel = false }) => {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
      <div style={{ flex: 1, height, background: colors.surface.gray, borderRadius: height, overflow: 'hidden' }}>
        <div style={{
          width: `${pct}%`, height: '100%', background: color, borderRadius: height,
          transition: 'width 0.6s ease',
        }} />
      </div>
      {showLabel && <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.secondary, minWidth: '36px', textAlign: 'right' }}>{Math.round(pct)}%</span>}
    </div>
  );
};

// ── Card Component ──
const Card = ({ children, style = {}, onClick }) => (
  <div onClick={onClick} style={{
    background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'saturate(180%) blur(24px)', WebkitBackdropFilter: 'saturate(180%) blur(24px)',
    border: `1px solid rgba(255, 255, 255, 0.6)`, borderRadius: '24px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
    padding: '32px', ...style,
    ...(onClick ? { cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 12px 40px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03)' } } : {}),
  }}>
    {children}
  </div>
);

// ── Section Title ──
const SectionTitle = ({ icon, title, subtitle }) => (
  <div style={{ marginBottom: '20px' }}>
    <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.text.primary, margin: 0, display: 'flex', alignItems: 'center', gap: '8px', fontFamily: typography.fontFamily }}>
      {icon && <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{icon}</span>}
      {title}
    </h3>
    {subtitle && <p style={{ fontSize: '14px', color: colors.text.tertiary, margin: '4px 0 0', lineHeight: '1.5' }}>{subtitle}</p>}
  </div>
);

// ── Collapsible Section — progressive disclosure wrapper ──
const CollapsibleSection = ({ title, icon, summary, defaultOpen = false, children }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <Card style={{ padding: 0, overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px', background: open ? 'rgba(0,0,0,0.02)' : 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
          transition: 'background 0.2s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
          {icon && <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{icon}</span>}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '16px', fontWeight: '700', color: colors.text.primary, letterSpacing: '-0.01em' }}>{title}</div>
            {summary && !open && <div style={{ fontSize: '14px', color: colors.text.tertiary, marginTop: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{summary}</div>}
          </div>
        </div>
        <span style={{ display: 'flex', alignItems: 'center', transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0, marginLeft: '12px' }}>
          <ChevronDownIcon size={20} color={colors.text.tertiary} />
        </span>
      </button>
      {open && <div style={{ padding: '0 24px 24px', borderTop: `1px solid rgba(0,0,0,0.04)`, paddingTop: '16px' }}>{children}</div>}
    </Card>
  );
};

// ── Stat Box ──
const StatBox = ({ value, label, color: c, icon }) => (
  <div style={{ textAlign: 'center', flex: 1, padding: '16px 12px' }}>
    {icon && <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>{icon}</div>}
    <div style={{ fontSize: '24px', fontWeight: '700', color: c || colors.text.primary, letterSpacing: '-0.02em' }}>{value}</div>
    <div style={{ fontSize: '12px', color: colors.text.tertiary, marginTop: '4px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// QUESTION-BY-QUESTION BREAKDOWN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

const QuestionBreakdown = ({ questionAnalysis }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [filter, setFilter] = React.useState('wrong'); // 'all' | 'wrong' | error type

  if (!questionAnalysis || questionAnalysis.length === 0) return null;

  const wrongQuestions = questionAnalysis.filter(q => !q.isCorrect);
  const filtered = filter === 'all'
    ? questionAnalysis
    : filter === 'wrong'
      ? wrongQuestions
      : wrongQuestions.filter(q => q.errorType === filter);

  const displayList = expanded ? filtered : filtered.slice(0, 5);

  // Group error types for filter chips
  const errorCounts = {};
  wrongQuestions.forEach(q => {
    if (q.errorType) {
      errorCounts[q.errorType] = (errorCounts[q.errorType] || 0) + 1;
    }
  });

  const confidenceColor = (conf) => {
    if (conf >= 0.8) return colors.semantic.success;
    if (conf >= 0.6) return colors.semantic.warning;
    return colors.text.tertiary;
  };

  return (
    <div style={{
      background: 'white', borderRadius: radius.lg, border: `1px solid ${colors.surface.grayDark}`, overflow: 'hidden',
    }}>
      <div style={{ padding: '20px 20px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '700', color: colors.text.primary, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SearchIcon size={18} color={colors.accent.orange} /> Question-by-Question Analysis
            </div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>
              {wrongQuestions.length} wrong — each classified by root cause
            </div>
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {[
            { key: 'wrong', label: `All Wrong (${wrongQuestions.length})` },
            { key: 'all', label: `All (${questionAnalysis.length})` },
            ...Object.entries(errorCounts).map(([type, count]) => ({
              key: type,
              label: `${ERROR_TYPE_ICONS[type] || ''} ${ERROR_TYPE_LABELS[type] || type} (${count})`,
            })),
          ].map(chip => (
            <button
              key={chip.key}
              onClick={() => setFilter(chip.key)}
              style={{
                padding: '4px 12px', borderRadius: radius.xl, border: 'none', cursor: 'pointer',
                fontSize: '12px', fontWeight: '600',
                background: filter === chip.key ? colors.accent.orange : colors.surface.offWhite,
                color: filter === chip.key ? 'white' : colors.text.secondary,
                transition: 'all 0.15s',
              }}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {displayList.map((q, idx) => (
          <div key={q.key || idx} style={{
            display: 'flex', gap: '14px', padding: '14px 20px',
            borderTop: `1px solid ${colors.surface.gray}`,
            background: q.isCorrect ? 'transparent' : (idx % 2 === 0 ? colors.surface.offWhite : 'white'),
          }}>
            {/* Status indicator */}
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
              background: q.isCorrect ? colors.semantic.successLight : (ERROR_TYPE_COLORS[q.errorType] || colors.semantic.error) + '18',
              color: q.isCorrect ? colors.semantic.success : (ERROR_TYPE_COLORS[q.errorType] || colors.semantic.error),
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '13px', fontWeight: '700',
            }}>
              {q.isCorrect ? <CheckCircleIcon size={14} color={colors.semantic.success} /> : (q.questionNumber || idx + 1)}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Question info row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>
                  Q{q.questionNumber || idx + 1}
                </span>
                <span style={{
                  padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600',
                  textTransform: 'uppercase', letterSpacing: '0.03em',
                  background: q.difficulty === 'easy' ? colors.semantic.successLight : q.difficulty === 'hard' ? colors.semantic.errorLight : colors.semantic.warningBg,
                  color: q.difficulty === 'easy' ? colors.semantic.success : q.difficulty === 'hard' ? colors.semantic.error : '#d97706',
                }}>
                  {q.difficulty || 'medium'}
                </span>
                {q.domain && (
                  <span style={{ fontSize: '11px', color: colors.text.tertiary }}>{q.domain}</span>
                )}
                {q.timeSpent > 0 && (
                  <span style={{ fontSize: '11px', color: colors.text.tertiary }}>
                    {Math.round(q.timeSpent)}s
                  </span>
                )}
              </div>

              {/* Error classification */}
              {!q.isCorrect && q.errorType && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{
                    padding: '3px 10px', borderRadius: radius.md, fontSize: '11px', fontWeight: '600',
                    background: (ERROR_TYPE_COLORS[q.errorType] || colors.text.tertiary) + '18',
                    color: ERROR_TYPE_COLORS[q.errorType] || colors.text.tertiary,
                  }}>
                    {ERROR_TYPE_ICONS[q.errorType]} {ERROR_TYPE_LABELS[q.errorType]}
                  </span>
                  {q.confidence && (
                    <span style={{
                      fontSize: '10px', fontWeight: '600',
                      color: confidenceColor(q.confidence),
                    }}>
                      {Math.round(q.confidence * 100)}% conf
                    </span>
                  )}
                </div>
              )}

              {/* AI reasoning */}
              {!q.isCorrect && q.reasoning && (
                <div style={{ fontSize: '13px', color: colors.text.secondary, lineHeight: '1.5' }}>
                  <MathText>{q.reasoning}</MathText>
                </div>
              )}

              {/* Skills tested */}
              {q.skills && q.skills.length > 0 && (
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '6px' }}>
                  {q.skills.slice(0, 3).map((skill, sIdx) => (
                    <span key={sIdx} style={{
                      padding: '2px 8px', borderRadius: radius.sm, fontSize: '10px',
                      background: colors.surface.offWhite, color: colors.text.tertiary,
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show more / less */}
      {filtered.length > 5 && (
        <div style={{
          padding: '12px 20px', borderTop: `1px solid ${colors.surface.gray}`, textAlign: 'center',
        }}>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: 'none', border: 'none', color: colors.accent.orange,
              fontSize: '13px', fontWeight: '600', cursor: 'pointer',
            }}
          >
            {expanded ? <><ChevronUpIcon size={14} /> Show Less</> : <><ChevronDownIcon size={14} /> Show All {filtered.length} Questions</>}
          </button>
        </div>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

const DiagnosticReport = ({
  test,
  answers,
  diagnosticData,
  skillProgress = {},
  user = {},
  practiceTestResults = {},
  completedLessons = {},
  practiceProgress = {},
  onNavigateToModule,
  onStartPractice,
  onStartPracticeTest,
  onSaveStudyPlan,
  onBack,
}) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedWeek, setExpandedWeek] = useState(1);
  const [planSaved, setPlanSaved] = useState(false);
  const planSaveAttempted = useRef(false);
  const tabBarRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Responsive
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth < 768;

  // Sliding tab indicator
  useEffect(() => {
    if (!tabBarRef.current) return;
    const buttons = tabBarRef.current.querySelectorAll('[data-tab]');
    const activeBtn = Array.from(buttons).find(b => b.dataset.tab === activeSection);
    if (activeBtn) {
      const barRect = tabBarRef.current.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      setIndicatorStyle({
        left: btnRect.left - barRect.left,
        width: btnRect.width,
      });
    }
  }, [activeSection, windowWidth]);

  // ═══ Run the diagnostic engine ═══
  const diagnostic = useMemo(() => {
    return runDiagnostic(
      test, answers, diagnosticData, skillProgress,
      { targetScore: user?.targetScore || 700, testDate: user?.testDate, currentScore: user?.currentScore },
      practiceTestResults
    );
  }, [test, answers, diagnosticData, skillProgress, user, practiceTestResults]);

  // ═══ Generate the study plan ═══
  const studyPlan = useMemo(() => {
    return generateStudyPlan(
      diagnostic,
      { targetScore: user?.targetScore || 700, testDate: user?.testDate },
      completedLessons,
      practiceProgress,
      null // No previous plan for now
    );
  }, [diagnostic, user, completedLessons, practiceProgress]);

  const { score, errorPatterns, domainAnalysis, scoreProjection, difficultyAnalysis, timeAnalysis, trendAnalysis, prioritizedActions } = diagnostic;
  const { summary: planSummary } = studyPlan;

  // ═══ Auto-save the study plan to Firestore ═══
  useEffect(() => {
    if (onSaveStudyPlan && studyPlan && !planSaveAttempted.current) {
      planSaveAttempted.current = true;
      onSaveStudyPlan(studyPlan).then(() => {
        setPlanSaved(true);
        console.log('[DiagnosticReport] Study plan auto-saved');
      }).catch(err => {
        console.error('[DiagnosticReport] Failed to auto-save study plan:', err);
      });
    }
  }, [studyPlan, onSaveStudyPlan]);

  // Navigation tabs
  const sections = [
    { id: 'overview', label: 'Overview', icon: <ChartBarIcon size={16} /> },
    { id: 'plan', label: 'Study Plan', icon: <ClipboardIcon size={16} /> },
  ];

  if (trendAnalysis.hasHistory) {
    sections.push({ id: 'trends', label: 'Progress', icon: <TrendingUpIcon size={16} /> });
  }

  // ═══════════════════════════════════════════════════════════════════════
  // RENDER: OVERVIEW SECTION (minimal Math score + percentile + target gap)
  // ═══════════════════════════════════════════════════════════════════════

  const renderOverview = () => {
    const percentile = diagnostic.percentile?.percentile;
    const percentileTier = diagnostic.percentile?.tier;
    const isAtTarget = score.gap <= 0;

    const tierColor = percentileTier === 'elite' || percentileTier === 'excellent'
      ? colors.semantic.success
      : percentileTier === 'above_average' || percentileTier === 'average'
        ? colors.semantic.info
        : colors.semantic.warning;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', padding: isMobile ? '20px 0' : '40px 0' }}>

        {/* Math Score Ring */}
        <div style={{ textAlign: 'center' }}>
          <ScoreRing score={score.scaled} target={score.target} size={isMobile ? 180 : 200} />
          <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: '600', color: colors.text.tertiary, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Math Score
          </div>
        </div>

        {/* Percentile + Target Gap */}
        <div style={{
          display: 'flex', gap: '16px', width: '100%', maxWidth: '440px',
          flexDirection: isMobile ? 'column' : 'row',
        }}>
          {/* Percentile */}
          {percentile != null && (
            <div style={{
              flex: 1, textAlign: 'center', padding: '24px 16px',
              background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'saturate(180%) blur(24px)', WebkitBackdropFilter: 'saturate(180%) blur(24px)',
              borderRadius: '24px',
              border: `1px solid rgba(255, 255, 255, 0.6)`,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
            }}>
              <div style={{ fontSize: '40px', fontWeight: '800', color: tierColor, letterSpacing: '-0.03em', lineHeight: '1' }}>
                {percentile}<span style={{ fontSize: '18px', fontWeight: '600', marginLeft: '2px' }}>th</span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.tertiary, marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Percentile
              </div>
            </div>
          )}

          {/* Target Gap */}
          <div style={{
            flex: 1, textAlign: 'center', padding: '24px 16px',
            background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'saturate(180%) blur(24px)', WebkitBackdropFilter: 'saturate(180%) blur(24px)',
            borderRadius: '24px',
            border: `1px solid rgba(255, 255, 255, 0.6)`,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
          }}>
            {isAtTarget ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', height: '40px' }}>
                  <CheckCircleIcon size={32} color={colors.semantic.success} />
                </div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: colors.semantic.success, marginTop: '8px' }}>
                  At or above {score.target} target
                </div>
              </>
            ) : (
              <>
                <div style={{ fontSize: '40px', fontWeight: '800', color: colors.accent.orange, letterSpacing: '-0.03em', lineHeight: '1' }}>
                  {score.gap}
                </div>
                <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.tertiary, marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Points to {score.target}
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    );
  };

  const renderStudyPlan = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* ── Plan Overview ── */}
      <Card style={{ background: colors.surface.dark, color: 'white', border: 'none' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
          <div style={{ fontSize: '22px', fontWeight: '700' }}>
            Your {studyPlan.weeksUntilTest}-Week Study Plan
          </div>
          {planSaved && (
            <span style={{
              padding: '4px 10px', borderRadius: radius.xl, fontSize: '11px', fontWeight: '600',
              background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)',
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><CheckCircleIcon size={12} color="rgba(255,255,255,0.85)" /> Saved to Dashboard</span>
            </span>
          )}
        </div>
        <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px', lineHeight: '1.6' }}>
          <MathText>{planSummary.headline}</MathText>
        </div>
        <div style={{ display: 'flex', gap: '1px', background: 'rgba(255,255,255,0.1)', borderRadius: radius.md, overflow: 'hidden' }}>
          <StatBox value={planSummary.stats.currentScore} label="Current" color="white" />
          <StatBox value={`→ ${planSummary.stats.targetScore}`} label="Target" color={colors.accent.orange} />
          <StatBox value={`${planSummary.stats.minutesPerDay}m`} label="Per Day" color="white" />
          <StatBox value={planSummary.stats.daysUntilTest || '—'} label="Days Left" color={planSummary.stats.daysUntilTest && planSummary.stats.daysUntilTest < 30 ? colors.semantic.warning : 'white'} />
        </div>
      </Card>

      {/* ── Plan Stats ── */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Card style={{ flex: 1, minWidth: '140px', textAlign: 'center', padding: '16px' }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Lessons</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: colors.text.primary }}>{planSummary.stats.totalLessons}</div>
        </Card>
        <Card style={{ flex: 1, minWidth: '140px', textAlign: 'center', padding: '16px' }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Practice Sets</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: colors.text.primary }}>{planSummary.stats.totalPractice}</div>
        </Card>
        <Card style={{ flex: 1, minWidth: '140px', textAlign: 'center', padding: '16px' }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Practice Tests</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: colors.text.primary }}>{planSummary.stats.totalTests}</div>
        </Card>
        <Card style={{ flex: 1, minWidth: '140px', textAlign: 'center', padding: '16px' }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Total Hours</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: colors.text.primary }}>{planSummary.stats.totalHours}</div>
        </Card>
      </div>

      {/* ── Adherence Projection — What Your Effort Gets You ── */}
      {studyPlan.adherenceProjection && (
        <Card>
          <SectionTitle icon={<TrendingUpIcon size={18} color={colors.accent.orange} />} title="What Your Effort Gets You" subtitle="Projected scores based on plan completion" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {studyPlan.adherenceProjection.scenarios.map((scenario, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: '16px 12px',
                borderRadius: radius.md,
                background: i === 0 ? colors.semantic.successLight : i === 1 ? colors.semantic.infoLight : i === 2 ? colors.semantic.warningLight : colors.surface.offWhite,
                border: i === 0 ? `2px solid ${colors.semantic.success}` : `1px solid ${colors.surface.grayDark}`,
              }}>
                <div style={{ fontSize: '24px', marginBottom: '4px' }}>{scenario.emoji}</div>
                <div style={{ fontSize: '26px', fontWeight: '800', color: colors.text.primary }}>{scenario.projectedScore}</div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: colors.text.secondary, marginTop: '2px' }}>{scenario.label}</div>
                <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: '4px' }}>{scenario.adherence}% completion</div>
                <div style={{ fontSize: '10px', color: colors.text.tertiary, marginTop: '2px' }}><MathText>{scenario.description}</MathText></div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Skill-level details (spaced repetition, micro-goals, focus areas)
         are handled by the AI study plan generator and surfaced in the
         Study Plan dashboard — omitted here to keep the report concise. */}

      {/* ── Milestones ── */}
      <Card>
        <SectionTitle icon={<FlagCheckeredIcon size={18} color={colors.accent.orange} />} title="Milestones" subtitle="Your checkpoints on the path to your target score" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '15px', top: '16px', bottom: '16px', width: '2px',
            background: `linear-gradient(to bottom, ${colors.accent.orange}, ${colors.semantic.success})`, borderRadius: '1px',
          }} />
          {studyPlan.milestones.map((ms, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px', padding: '12px 0', position: 'relative' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                background: ms.type === 'goal' ? colors.semantic.success : ms.type === 'test' ? colors.accent.orange : colors.surface.gray,
                color: ms.type === 'goal' || ms.type === 'test' ? 'white' : colors.text.secondary,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: '700', zIndex: 1,
                border: `3px solid ${colors.surface.white}`,
              }}>
                {ms.type === 'goal' ? <StarFilledIcon size={14} color="white" /> : `W${ms.weekNumber}`}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}><MathText>{ms.title}</MathText></div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary, lineHeight: '1.5' }}><MathText>{ms.description}</MathText></div>
              </div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: ms.type === 'goal' ? colors.semantic.success : colors.accent.orange, flexShrink: 0 }}>
                {ms.targetScore}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* ── Weekly Breakdown ── */}
      <SectionTitle icon={<CalendarIcon size={18} color={colors.accent.orange} />} title="Week-by-Week Plan" subtitle="Click a week to see your daily activities" />

      {studyPlan.weeks.map(week => {
        const isExpanded = expandedWeek === week.weekNumber;
        return (
          <Card
            key={week.weekNumber}
            onClick={() => setExpandedWeek(isExpanded ? null : week.weekNumber)}
            style={{
              cursor: 'pointer', padding: '0', overflow: 'hidden',
              border: isExpanded ? `2px solid ${colors.accent.orange}` : `1px solid ${colors.surface.grayDark}`,
            }}
          >
            {/* Week header */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '16px 20px', background: isExpanded ? colors.accent.orangeLight : colors.surface.white,
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '11px', fontWeight: '700', color: 'white',
                    background: week.isTestWeek ? colors.accent.orange : colors.surface.dark,
                    padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase',
                  }}>
                    Week {week.weekNumber}
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: '600', color: colors.text.primary }}><MathText>{week.title}</MathText></span>
                </div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary, marginTop: '4px' }}><MathText>{week.goalDescription}</MathText></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '12px', color: colors.text.tertiary }}>{week.totalMinutes} min</span>
                <span style={{ display: 'flex', alignItems: 'center', transition: 'transform 0.2s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}><ChevronDownIcon size={18} color={colors.text.tertiary} /></span>
              </div>
            </div>

            {/* Expanded activities */}
            {isExpanded && (
              <div style={{ padding: '16px 20px', borderTop: `1px solid ${colors.surface.grayDark}` }}>
                {week.activities.length === 0 ? (
                  <div style={{ fontSize: '14px', color: colors.text.tertiary, textAlign: 'center', padding: '20px' }}>
                    No specific activities scheduled — continue practicing at your own pace
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {week.activities.map((activity, aIdx) => (
                      <div key={aIdx} style={{
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px',
                        background: activity.type === 'test' ? colors.accent.orangeLight : colors.surface.offWhite,
                        borderRadius: '10px', border: `1px solid ${colors.surface.gray}`,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (activity.type === 'lesson' && activity.moduleId && onNavigateToModule) {
                          onNavigateToModule(activity.moduleId, activity.lessonId);
                        } else if (activity.type === 'practice' && activity.moduleId && onStartPractice) {
                          onStartPractice(activity.moduleId, activity.sectionName);
                        }
                      }}
                      >
                        <span style={{ fontSize: '20px', flexShrink: 0 }}>{activity.icon}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}><MathText>{activity.title}</MathText></div>
                          <div style={{ fontSize: '12px', color: colors.text.tertiary }}><MathText>{activity.subtitle}</MathText></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flexShrink: 0, gap: '2px' }}>
                          {activity.day && (
                            <span style={{ fontSize: '11px', fontWeight: '600', color: colors.text.tertiary }}>{activity.day}</span>
                          )}
                          <span style={{ fontSize: '11px', color: colors.text.tertiary }}>{activity.duration} min</span>
                        </div>
                        {(activity.type === 'lesson' || activity.type === 'practice') && (
                          <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}><ChevronRightIcon size={16} color={colors.accent.orange} /></span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {/* Week tips */}
                {week.activities.some(a => a.tips) && (
                  <div style={{ marginTop: '12px', padding: '12px 14px', background: colors.semantic.infoLight, borderRadius: '10px' }}>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: colors.semantic.info, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}><LightBulbIcon size={14} color={colors.semantic.info} /> Tips for this week</div>
                    {week.activities
                      .filter(a => a.tips)
                      .flatMap(a => a.tips)
                      .slice(0, 3)
                      .map((tip, i) => (
                        <div key={i} style={{ fontSize: '12px', color: '#1e40af', lineHeight: '1.5', paddingLeft: '12px', borderLeft: `2px solid ${colors.semantic.info}`, marginBottom: '6px' }}>
                          <MathText>{tip}</MathText>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════
  // RENDER: TRENDS SECTION
  // ═══════════════════════════════════════════════════════════════════════

  const renderTrends = () => {
    if (!trendAnalysis.hasHistory) return null;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Score history */}
        <Card>
          <SectionTitle icon={<TrendingUpIcon size={18} color={colors.accent.orange} />} title="Score Trend" subtitle={trendAnalysis.message} />
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '20px 0' }}>
            {trendAnalysis.testHistory.map((test, i) => {
              const maxScore = 800;
              const height = Math.max(20, (test.scaledScore / maxScore) * 150);
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: test.isCurrent ? colors.accent.orange : colors.text.primary }}>
                    {test.scaledScore}
                  </div>
                  <div style={{
                    width: '100%', maxWidth: '48px', height: `${height}px`,
                    background: test.isCurrent
                      ? `linear-gradient(to top, ${colors.accent.orange}, #fb923c)`
                      : colors.surface.gray,
                    borderRadius: '6px 6px 0 0',
                    border: test.isCurrent ? `2px solid ${colors.accent.orange}` : `1px solid ${colors.surface.grayDark}`,
                  }} />
                  <div style={{ fontSize: '10px', color: colors.text.tertiary, textAlign: 'center' }}>
                    {test.isCurrent ? 'Now' : `Test ${i + 1}`}
                  </div>
                </div>
              );
            })}
          </div>
          {trendAnalysis.scoreChange !== null && (
            <div style={{
              textAlign: 'center', padding: '12px', borderRadius: '10px',
              background: trendAnalysis.scoreChange > 0 ? colors.semantic.successLight : trendAnalysis.scoreChange < 0 ? colors.semantic.errorLight : colors.surface.gray,
              fontSize: '14px', fontWeight: '600',
              color: trendAnalysis.scoreChange > 0 ? colors.semantic.success : trendAnalysis.scoreChange < 0 ? colors.semantic.error : colors.text.secondary,
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>{trendAnalysis.scoreChange > 0 ? <TrendingUpIcon size={16} /> : trendAnalysis.scoreChange < 0 ? <TrendingDownIcon size={16} /> : <ArrowRightIcon size={16} />} {trendAnalysis.scoreChange > 0 ? '+' : ''}{trendAnalysis.scoreChange} points since last test</span>
            </div>
          )}
        </Card>

        {/* Skill-level trend lists (improving, declining, persistent weaknesses)
           are fed into the AI study plan — omitted from the report to reduce noise. */}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════
  // MAIN RENDER
  // ═══════════════════════════════════════════════════════════════════════

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: isMobile ? '12px' : '20px', fontFamily: typography.fontFamily }}>

      {/* ── Header ── */}
      <div style={{ marginBottom: '32px' }}>
        {onBack && (
          <button onClick={onBack} style={{
            background: 'none', border: 'none', color: colors.text.secondary,
            fontSize: '15px', fontWeight: '600', cursor: 'pointer', padding: '8px 0',
            marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => e.target.style.color = colors.text.primary}
          onMouseLeave={(e) => e.target.style.color = colors.text.secondary}
          >
            <ArrowLeftIcon size={16} /> Back to Results
          </button>
        )}

        <div style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: '800', color: colors.text.primary, letterSpacing: '-0.04em' }}>
          {diagnostic.testTitle}
        </div>
      </div>

      {/* ── Tab Navigation with sliding indicator ── */}
      <div
        ref={tabBarRef}
        role="tablist"
        aria-label="Diagnostic report sections"
        style={{
          display: 'flex', gap: '4px', marginBottom: '32px',
          background: 'rgba(0,0,0,0.06)', borderRadius: '14px', padding: '4px',
          position: 'relative',
        }}
      >
        {/* Sliding indicator */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '4px',
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            height: 'calc(100% - 8px)',
            borderRadius: '10px',
            background: '#ffffff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
            transition: 'left 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
            zIndex: 0,
          }}
        />
        {sections.map(section => (
          <button
            key={section.id}
            id={`tab-${section.id}`}
            data-tab={section.id}
            onClick={() => setActiveSection(section.id)}
            aria-selected={activeSection === section.id}
            aria-controls={`panel-${section.id}`}
            role="tab"
            style={{
              flex: 1, padding: isMobile ? '10px 8px' : '10px 16px', border: 'none', borderRadius: '10px',
              background: 'transparent',
              color: activeSection === section.id ? colors.text.primary : colors.text.tertiary,
              fontSize: isMobile ? '12px' : '13px', fontWeight: '600', cursor: 'pointer',
              transition: 'color 0.2s ease',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '4px' : '6px',
              position: 'relative', zIndex: 1,
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center' }}>{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      {activeSection === 'overview' && <div role="tabpanel" id="panel-overview" aria-labelledby="tab-overview">{renderOverview()}</div>}
      {activeSection === 'plan' && <div role="tabpanel" id="panel-plan" aria-labelledby="tab-plan">{renderStudyPlan()}</div>}
      {activeSection === 'trends' && <div role="tabpanel" id="panel-trends" aria-labelledby="tab-trends">{renderTrends()}</div>}

      {/* ── Bottom CTA ── */}
      <div style={{
        marginTop: '32px', padding: '24px', textAlign: 'center',
        background: colors.surface.offWhite, borderRadius: radius.lg, border: `1px solid ${colors.surface.grayDark}`,
      }}>
        <div style={{ fontSize: '16px', fontWeight: '700', color: colors.text.primary, marginBottom: '8px' }}>
          Ready to start improving?
        </div>
        <div style={{ fontSize: '14px', color: colors.text.tertiary, marginBottom: '16px' }}>
          {activeSection === 'plan'
            ? 'Go to your dashboard to begin Week 1 of your study plan'
            : 'Switch to the Study Plan tab to see your personalized weekly plan'
          }
        </div>
        <button
          onClick={() => activeSection === 'plan' && onBack ? onBack() : setActiveSection('plan')}
          style={{
            padding: '12px 32px', borderRadius: radius.md, border: 'none',
            background: colors.accent.orange, color: 'white',
            fontSize: '15px', fontWeight: '600', cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)',
          }}
        >
          {activeSection === 'plan' ? 'Go to Dashboard' : <><span>View Study Plan</span> <ArrowRightIcon size={16} /></>}
        </button>
      </div>
    </div>
  );
};

export default DiagnosticReport;
