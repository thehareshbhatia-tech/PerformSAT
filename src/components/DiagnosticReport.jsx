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
  const strokeWidth = 10;
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
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background track */}
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={colors.surface.gray} strokeWidth={strokeWidth} />
        {/* Target marker */}
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={colors.surface.grayDark} strokeWidth={strokeWidth}
          strokeDasharray={`2 ${circumference - 2}`} strokeDashoffset={targetOffset} opacity={0.5} />
        {/* Score progress */}
        <circle cx={size/2} cy={size/2} r={r} fill="none"
          stroke={isAtTarget ? colors.semantic.success : colors.accent.orange} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" style={{ transition: 'stroke-dashoffset 1s ease' }} />
      </svg>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <div style={{ fontSize: '36px', fontWeight: '700', color: colors.text.primary, letterSpacing: '-0.02em', lineHeight: '1' }}>
          {displayScore}
        </div>
        <div style={{ fontSize: '12px', color: colors.text.tertiary, marginTop: '4px', fontWeight: '500' }}>
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
    background: colors.surface.white, border: `1px solid ${colors.surface.grayDark}`, borderRadius: radius.lg,
    padding: '24px', ...style,
    ...(onClick ? { cursor: 'pointer', transition: 'box-shadow 0.2s ease' } : {}),
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
          padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
          {icon && <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{icon}</span>}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '15px', fontWeight: '600', color: colors.text.primary }}>{title}</div>
            {summary && !open && <div style={{ fontSize: '13px', color: colors.text.tertiary, marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{summary}</div>}
          </div>
        </div>
        <span style={{ display: 'flex', alignItems: 'center', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0, marginLeft: '8px' }}>
          <ChevronDownIcon size={18} color={colors.text.tertiary} />
        </span>
      </button>
      {open && <div style={{ padding: '0 20px 20px', borderTop: `1px solid ${colors.surface.gray}` }}>{children}</div>}
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
                  {q.reasoning}
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
  const [activeSection, setActiveSection] = useState('diagnosis');
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
    { id: 'diagnosis', label: 'Your Diagnosis', icon: <MicroscopeIcon size={16} /> },
    { id: 'plan', label: 'Study Plan', icon: <ClipboardIcon size={16} /> },
  ];

  if (trendAnalysis.hasHistory) {
    sections.push({ id: 'trends', label: 'Progress', icon: <TrendingUpIcon size={16} /> });
  }

  // ═══════════════════════════════════════════════════════════════════════
  // RENDER: DIAGNOSIS SECTION
  // ═══════════════════════════════════════════════════════════════════════

  const renderDiagnosis = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

      {/* ═══ STEP 1: SNAPSHOT — always visible ═══ */}

      {/* Key Insight */}
      <Card style={{ background: planSummary.keyInsight.type === 'quick_win' ? colors.accent.orangeLight : colors.semantic.infoLight, border: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
          <div style={{ lineHeight: '1', flexShrink: 0 }}>
            {planSummary.keyInsight.type === 'quick_win' ? <LightningIcon size={24} color={colors.accent.orange} /> : planSummary.keyInsight.type === 'easy_wins' ? <TargetIcon size={24} color={colors.accent.orange} /> : planSummary.keyInsight.type === 'time' ? <TimerIcon size={24} color={colors.accent.orange} /> : <LightBulbIcon size={24} color={colors.accent.orange} />}
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, marginBottom: '4px' }}>
              {planSummary.keyInsight.title}
            </div>
            <div style={{ fontSize: '13px', color: colors.text.secondary, lineHeight: '1.55' }}>
              {planSummary.keyInsight.message}
            </div>
          </div>
        </div>
      </Card>

      {/* Top 3 Error Types — compact summary */}
      <Card>
        <div style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, marginBottom: '4px' }}>
          Why You Lost Points
        </div>
        <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: '14px' }}>
          {errorPatterns.totalWrong} wrong out of {score.total}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {errorPatterns.summary.slice(0, 3).map(pattern => (
            <div key={pattern.type} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '16px', width: '28px', textAlign: 'center', flexShrink: 0 }}>{pattern.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{pattern.label}</span>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: pattern.color }}>{pattern.count}</span>
                </div>
                <ProgressBar value={pattern.count} max={errorPatterns.totalWrong} color={pattern.color} height={5} />
              </div>
            </div>
          ))}
        </div>
        {errorPatterns.summary.length > 3 && (
          <div style={{ fontSize: '12px', color: colors.text.tertiary, marginTop: '8px', textAlign: 'center' }}>
            +{errorPatterns.summary.length - 3} more error type{errorPatterns.summary.length - 3 > 1 ? 's' : ''} in detailed view
          </div>
        )}
      </Card>

      {/* ═══ STEP 2: TOP PRIORITIES — always visible, max 3 ═══ */}
      <Card>
        <div style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TargetIcon size={18} color={colors.accent.orange} /> Fix These First
        </div>
        <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: '14px' }}>
          Highest-impact improvements for your score
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {prioritizedActions.slice(0, 3).map((action, idx) => (
            <div key={idx} style={{
              display: 'flex', gap: '12px', padding: '14px',
              background: idx === 0 ? colors.accent.orangeLight : colors.surface.offWhite,
              borderRadius: radius.md, border: idx === 0 ? `1px solid ${colors.accent.orangeMuted}` : `1px solid ${colors.surface.gray}`,
            }}>
              <div style={{
                width: '26px', height: '26px', borderRadius: '50%',
                background: idx === 0 ? colors.accent.orange : colors.surface.gray,
                color: idx === 0 ? 'white' : colors.text.secondary,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: '700', flexShrink: 0,
              }}>
                {idx + 1}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary, marginBottom: '2px' }}>
                  {action.title}
                </div>
                <div style={{ fontSize: '12px', color: colors.text.secondary, lineHeight: '1.5' }}>
                  {action.description}
                </div>
              </div>
              {action.estimatedGain > 0 && (
                <span style={{
                  padding: '3px 10px', borderRadius: radius.xl, alignSelf: 'flex-start',
                  background: colors.semantic.successLight, color: colors.semantic.success,
                  fontSize: '12px', fontWeight: '700', flexShrink: 0, whiteSpace: 'nowrap',
                }}>
                  +{action.estimatedGain} pts
                </span>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* ═══ STEP 3: ACTION CTA ═══ */}
      <Card style={{
        background: `linear-gradient(135deg, ${colors.accent.orange} 0%, ${colors.accent.orangeHover} 100%)`,
        border: 'none', cursor: 'pointer', textAlign: 'center', padding: '20px',
      }} onClick={() => setActiveSection('plan')}>
        <div style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>
          See Your Personalized Study Plan
        </div>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
          Week-by-week activities to close the gap
        </div>
      </Card>

      {/* ═══ DEEP DIVES — collapsed by default ═══ */}

      {/* Score Projection */}
      <CollapsibleSection
        title="How to Reach Your Target"
        icon={<ChartBarIcon size={18} color={colors.accent.orange} />}
        summary={score.gap > 0 ? `${scoreProjection.questionsNeededForTarget} more correct answers needed` : 'At or above target!'}
      >
        {scoreProjection.quickWins.count > 0 && (
          <div style={{
            background: colors.semantic.successLight, border: `1px solid ${colors.semantic.successBg}`,
            borderRadius: radius.md, padding: '14px', marginTop: '12px', marginBottom: '12px',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: colors.semantic.success, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <TargetIcon size={14} color={colors.semantic.success} /> Quick Win: +{scoreProjection.quickWins.projectedGain} points possible
            </div>
            <div style={{ fontSize: '12px', color: colors.text.secondary }}>{scoreProjection.quickWins.description}</div>
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
          {scoreProjection.domainProjections.map(proj => (
            <div key={proj.domain} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: proj.color, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '500', color: colors.text.primary }}>{proj.domainName}</span>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: colors.semantic.success }}>+{proj.projectedPointGain} pts</span>
                </div>
                <ProgressBar value={proj.questionsToFix} max={Math.max(...scoreProjection.domainProjections.map(p => p.questionsToFix))} color={proj.color} height={4} />
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Domain Performance */}
      <CollapsibleSection
        title="Performance by SAT Domain"
        icon={<RulerIcon size={18} color={colors.accent.orange} />}
        summary={domainAnalysis.map(d => `${d.displayName}: ${d.accuracy}%`).join(' · ')}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>
          {domainAnalysis.map(domain => (
            <div key={domain.domain}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}>{domain.displayName}</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: domain.accuracy >= 80 ? colors.semantic.success : domain.accuracy >= 60 ? colors.semantic.warning : colors.semantic.error }}>
                  {domain.correct}/{domain.total} ({domain.accuracy}%)
                </span>
              </div>
              <ProgressBar value={domain.accuracy} max={100} color={domain.accuracy >= 80 ? colors.semantic.success : domain.accuracy >= 60 ? colors.semantic.warning : colors.semantic.error} height={7} />
              <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                {['easy', 'medium', 'hard'].map(diff => {
                  const d = domain.byDifficulty[diff];
                  if (d.total === 0) return null;
                  return <span key={diff} style={{ fontSize: '11px', color: colors.text.tertiary }}><span style={{ textTransform: 'capitalize' }}>{diff}</span>: {d.correct}/{d.total}</span>;
                })}
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Difficulty Breakdown */}
      <CollapsibleSection
        title="Performance by Difficulty"
        icon={<SignalIcon size={18} color={colors.accent.orange} />}
        summary={['easy', 'medium', 'hard'].filter(l => difficultyAnalysis.levels[l].total > 0).map(l => `${l}: ${difficultyAnalysis.levels[l].accuracy}%`).join(' · ')}
      >
        <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
          {['easy', 'medium', 'hard'].map(level => {
            const data = difficultyAnalysis.levels[level];
            if (data.total === 0) return null;
            const pct = data.accuracy;
            return (
              <div key={level} style={{
                flex: 1, textAlign: 'center', padding: '16px 10px',
                background: pct >= 80 ? colors.semantic.successLight : pct >= 50 ? colors.semantic.warningLight : colors.semantic.errorLight,
                borderRadius: radius.md,
              }}>
                <div style={{ fontSize: '24px', fontWeight: '700', color: pct >= 80 ? colors.semantic.success : pct >= 50 ? '#b45309' : colors.semantic.error }}>{pct}%</div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: colors.text.primary, textTransform: 'capitalize', marginTop: '4px' }}>{level}</div>
                <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: '2px' }}>{data.correct}/{data.total}</div>
              </div>
            );
          })}
        </div>
        {difficultyAnalysis.difficultyCliff && (
          <div style={{ marginTop: '10px', padding: '10px 14px', background: colors.semantic.warningLight, borderRadius: '8px', fontSize: '12px', color: '#92400e' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><WarningIcon size={14} color="#92400e" /> Accuracy drops at <strong>{difficultyAnalysis.difficultyCliff}</strong> difficulty.</span>
          </div>
        )}
      </CollapsibleSection>

      {/* Time Management */}
      {timeAnalysis.insights.length > 0 && (
        <CollapsibleSection
          title="Time Management"
          icon={<TimerIcon size={18} color={colors.accent.orange} />}
          summary={`Avg ${timeAnalysis.avgTimePerQuestion}s/question · Correct: ${timeAnalysis.avgCorrectTime}s · Wrong: ${timeAnalysis.avgIncorrectTime}s`}
        >
          <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
            <div style={{ padding: '10px 14px', background: colors.surface.gray, borderRadius: '8px', flex: 1, minWidth: '100px' }}>
              <div style={{ fontSize: '10px', color: colors.text.tertiary, textTransform: 'uppercase', fontWeight: '600' }}>Correct</div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: colors.semantic.success }}>{timeAnalysis.avgCorrectTime}s</div>
            </div>
            <div style={{ padding: '10px 14px', background: colors.surface.gray, borderRadius: '8px', flex: 1, minWidth: '100px' }}>
              <div style={{ fontSize: '10px', color: colors.text.tertiary, textTransform: 'uppercase', fontWeight: '600' }}>Wrong</div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: colors.semantic.error }}>{timeAnalysis.avgIncorrectTime}s</div>
            </div>
            {timeAnalysis.fadeEffect > 10 && (
              <div style={{ padding: '10px 14px', background: colors.semantic.warningLight, borderRadius: '8px', flex: 1, minWidth: '100px' }}>
                <div style={{ fontSize: '10px', color: colors.text.tertiary, textTransform: 'uppercase', fontWeight: '600' }}>Fade</div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#b45309' }}>-{timeAnalysis.fadeEffect}%</div>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
            {timeAnalysis.insights.slice(0, 3).map((insight, i) => (
              <div key={i} style={{
                padding: '8px 12px', borderRadius: radius.sm, fontSize: '12px', lineHeight: '1.5',
                background: insight.type === 'warning' ? colors.semantic.warningLight : colors.semantic.infoLight,
                color: insight.type === 'warning' ? '#92400e' : '#1e40af',
              }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>{insight.type === 'warning' ? <WarningIcon size={12} color="#92400e" /> : <InfoIcon size={12} color="#1e40af" />} {insight.message}</span>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* All Priorities (expanded list) */}
      {prioritizedActions.length > 3 && (
        <CollapsibleSection
          title={`All ${prioritizedActions.length} Priorities`}
          icon={<TargetIcon size={18} color={colors.accent.orange} />}
          summary={`${prioritizedActions.length - 3} more beyond your top 3`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
            {prioritizedActions.slice(3).map((action, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', padding: '10px', background: colors.surface.offWhite, borderRadius: radius.sm, border: `1px solid ${colors.surface.gray}` }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: colors.text.tertiary, minWidth: '20px', flexShrink: 0 }}>{idx + 4}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{action.title}</div>
                  <div style={{ fontSize: '12px', color: colors.text.secondary }}>{action.description}</div>
                </div>
                {action.estimatedGain > 0 && <span style={{ fontSize: '11px', fontWeight: '700', color: colors.semantic.success, flexShrink: 0 }}>+{action.estimatedGain}</span>}
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Question-by-Question */}
      {diagnostic.questionAnalysis && (
        <CollapsibleSection
          title="Question-by-Question Breakdown"
          icon={<SearchIcon size={18} color={colors.accent.orange} />}
          summary={`${diagnostic.questionAnalysis.filter(q => !q.isCorrect).length} wrong — each classified by root cause`}
        >
          <div style={{ marginTop: '12px' }}>
            <QuestionBreakdown questionAnalysis={diagnostic.questionAnalysis} />
          </div>
        </CollapsibleSection>
      )}

      {/* Student Archetype */}
      {diagnostic.mistakeFingerprint && (
        <CollapsibleSection
          title={`Your Profile: ${diagnostic.mistakeFingerprint.archetypeLabel}`}
          icon={diagnostic.mistakeFingerprint.archetype === 'knowledge_builder' ? <BooksIcon size={18} color={colors.accent.orange} /> : diagnostic.mistakeFingerprint.archetype === 'trap_prone' ? <WarningIcon size={18} color={colors.accent.orange} /> : <StarIcon size={18} color={colors.accent.orange} />}
          summary={diagnostic.mistakeFingerprint.archetypeDescription?.slice(0, 80) + '...'}
        >
          <div style={{ marginTop: '12px', fontSize: '13px', color: colors.text.secondary, lineHeight: 1.6 }}>
            {diagnostic.mistakeFingerprint.archetypeDescription}
          </div>
          {diagnostic.mistakeFingerprint.traits?.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
              {diagnostic.mistakeFingerprint.traits.map((trait, i) => (
                <div key={i} style={{
                  background: trait.severity === 'high' ? colors.semantic.errorLight : colors.semantic.warningLight,
                  borderRadius: radius.sm, padding: '6px 10px', fontSize: '11px',
                }}>
                  <span style={{ fontWeight: '600' }}>{trait.trait}</span>
                  <span style={{ opacity: 0.8, marginLeft: '4px' }}>— {trait.tip}</span>
                </div>
              ))}
            </div>
          )}
        </CollapsibleSection>
      )}

      {/* Statistical Analysis */}
      {(diagnostic.confidenceInterval || diagnostic.percentile) && (
        <CollapsibleSection
          title="Statistical Score Analysis"
          icon={<ChartBarIcon size={18} color={colors.accent.orange} />}
          summary={diagnostic.percentile ? `${diagnostic.percentile.percentile}th percentile nationally` : '80% confidence interval'}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
            {diagnostic.percentile && (
              <div style={{ background: diagnostic.percentile.percentile >= 85 ? colors.semantic.successLight : diagnostic.percentile.percentile >= 50 ? colors.semantic.infoLight : colors.semantic.warningLight, borderRadius: radius.md, padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: colors.text.tertiary, textTransform: 'uppercase', marginBottom: '6px' }}>National Percentile</div>
                <div style={{ fontSize: '30px', fontWeight: '800', color: colors.text.primary }}>{diagnostic.percentile.percentile}<span style={{ fontSize: '14px', fontWeight: '400' }}>th</span></div>
              </div>
            )}
            {diagnostic.confidenceInterval && (
              <div style={{ background: colors.surface.offWhite, borderRadius: radius.md, padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: colors.text.tertiary, textTransform: 'uppercase', marginBottom: '6px' }}>True Score Range</div>
                <div style={{ fontSize: '22px', fontWeight: '700', color: colors.text.primary }}>{diagnostic.confidenceInterval.scaled80.low} — {diagnostic.confidenceInterval.scaled80.high}</div>
              </div>
            )}
          </div>
        </CollapsibleSection>
      )}

      {/* Stamina */}
      {diagnostic.stamina?.hasData && (
        <CollapsibleSection
          title="Test Stamina"
          icon={<RunnerIcon size={18} color={colors.accent.orange} />}
          summary={`Score: ${diagnostic.stamina.staminaScore}/100 · ${diagnostic.stamina.rating}`}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px', marginBottom: '12px' }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '50%',
              background: diagnostic.stamina.rating === 'excellent' ? colors.semantic.successLight : diagnostic.stamina.rating === 'good' ? colors.semantic.infoLight : diagnostic.stamina.rating === 'fair' ? colors.semantic.warningLight : colors.semantic.errorLight,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ fontSize: '20px', fontWeight: '800', color: colors.text.primary }}>{diagnostic.stamina.staminaScore}</div>
            </div>
            <div style={{ flex: 1, fontSize: '13px', color: colors.text.secondary }}>{diagnostic.stamina.message}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
            {diagnostic.stamina.quarters.map((q, i) => {
              const barColor = q.accuracy >= 80 ? colors.semantic.success : q.accuracy >= 60 ? colors.semantic.warning : colors.semantic.error;
              return (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '10px', color: colors.text.tertiary, marginBottom: '4px' }}>{q.label}</div>
                  <div style={{ height: '50px', background: colors.surface.gray, borderRadius: radius.sm, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', bottom: 0, width: '100%', height: `${q.accuracy}%`, background: barColor, borderRadius: radius.sm }} />
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.primary, marginTop: '3px' }}>{q.accuracy}%</div>
                </div>
              );
            })}
          </div>
        </CollapsibleSection>
      )}

      {/* Skill Clusters + Answer Patterns + Time Allocation + Learning Velocity — grouped */}
      {(diagnostic.skillClusters?.length > 0 || diagnostic.answerPatterns || diagnostic.timeAllocation?.length > 0 || diagnostic.learningVelocity?.hasData) && (
        <CollapsibleSection
          title="Advanced Analytics"
          icon={<MicroscopeIcon size={18} color={colors.accent.orange} />}
          summary="Skill clusters, answer patterns, time allocation, learning velocity"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
            {diagnostic.skillClusters?.length > 0 && (
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary, marginBottom: '8px' }}>Related Skill Gaps</div>
                {diagnostic.skillClusters.map((cluster, i) => (
                  <div key={i} style={{
                    background: cluster.severity === 'critical' ? colors.semantic.errorLight : colors.semantic.warningLight,
                    borderRadius: '8px', padding: '12px', marginBottom: '8px',
                  }}>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{cluster.name}</div>
                    <div style={{ fontSize: '12px', color: colors.text.secondary, marginTop: '2px' }}>{cluster.recommendation}</div>
                  </div>
                ))}
              </div>
            )}
            {diagnostic.answerPatterns && diagnostic.answerPatterns.answerChanges.total > 0 && (
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary, marginBottom: '8px' }}>Answer Changes</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, background: colors.semantic.successLight, borderRadius: radius.sm, padding: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: colors.semantic.success }}>{diagnostic.answerPatterns.answerChanges.changedToCorrect}</div>
                    <div style={{ fontSize: '10px', color: colors.text.secondary }}>Changed to Correct</div>
                  </div>
                  <div style={{ flex: 1, background: colors.semantic.errorLight, borderRadius: radius.sm, padding: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: colors.semantic.error }}>{diagnostic.answerPatterns.answerChanges.changedToWrong}</div>
                    <div style={{ fontSize: '10px', color: colors.text.secondary }}>Changed to Wrong</div>
                  </div>
                </div>
              </div>
            )}
            {diagnostic.learningVelocity?.hasData && (
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary, marginBottom: '8px' }}>Learning Velocity</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, background: colors.surface.offWhite, borderRadius: radius.sm, padding: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: diagnostic.learningVelocity.velocity >= 0 ? colors.semantic.success : colors.semantic.error }}>{diagnostic.learningVelocity.velocity > 0 ? '+' : ''}{diagnostic.learningVelocity.velocity}</div>
                    <div style={{ fontSize: '10px', color: colors.text.secondary }}>pts/week</div>
                  </div>
                  <div style={{ flex: 1, background: colors.surface.offWhite, borderRadius: radius.sm, padding: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: colors.text.primary }}>{diagnostic.learningVelocity.testsCompleted}</div>
                    <div style={{ fontSize: '10px', color: colors.text.secondary }}>tests</div>
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: colors.text.secondary, marginTop: '6px', textAlign: 'center' }}>{diagnostic.learningVelocity.message}</div>
              </div>
            )}
          </div>
        </CollapsibleSection>
      )}

      {/* Error Recovery Drills */}
      <ErrorRecoveryDrills diagnostic={diagnostic} onStartDrill={(drill) => {
        if (drill.steps?.[0]?.type === 'lesson' && onNavigateToModule) {
          const moduleId = drill.affectedSkills?.[0]?.moduleId || drill.questions?.[0]?.moduleId;
          if (moduleId) onNavigateToModule(moduleId);
        }
      }} />
    </div>
  );

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
          {planSummary.headline}
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
                <div style={{ fontSize: '10px', color: colors.text.tertiary, marginTop: '2px' }}>{scenario.description}</div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* ── Spaced Repetition Schedule ── */}
      {studyPlan.spacedRepetitionSchedule?.skills?.length > 0 && (
        <Card>
          <SectionTitle icon={<RefreshIcon size={18} color={colors.accent.orange} />} title="Spaced Repetition Schedule" subtitle="Skills that will be reviewed at increasing intervals to lock in learning" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {studyPlan.spacedRepetitionSchedule.skills.slice(0, 6).map((skill, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '10px 14px', borderRadius: radius.sm, background: colors.surface.offWhite,
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{skill.skillName}</div>
                  <div style={{ fontSize: '11px', color: colors.text.tertiary }}>
                    Current: {skill.currentMastery}% → Target: {skill.estimatedRetention}%
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {skill.reviewDays.map((day, j) => (
                    <span key={j} style={{
                      fontSize: '10px', fontWeight: '600',
                      background: j === 0 ? colors.accent.orangeMuted : colors.surface.gray,
                      color: j === 0 ? colors.accent.orange : colors.text.secondary,
                      padding: '2px 6px', borderRadius: '4px',
                    }}>
                      Day {day}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '12px', color: colors.text.tertiary, marginTop: '12px', textAlign: 'center' }}>
            {studyPlan.spacedRepetitionSchedule.message}
          </div>
        </Card>
      )}

      {/* ── Daily Micro-Goals ── */}
      {studyPlan.microGoals?.goals?.length > 0 && (
        <Card>
          <SectionTitle icon={<LightningIcon size={18} color={colors.accent.orange} />} title="Daily Micro-Goals" subtitle="3-5 minute activities to keep your momentum" />
          <div style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: '16px' }}>
            {studyPlan.microGoals.message}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {studyPlan.microGoals.goals.slice(0, 6).map((goal, i) => (
              <div key={i} style={{
                padding: '12px', borderRadius: radius.sm, background: colors.surface.offWhite,
                border: `1px solid ${colors.surface.gray}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '16px' }}>{goal.icon}</span>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{goal.title}</span>
                </div>
                <div style={{ fontSize: '11px', color: colors.text.secondary }}>{goal.description}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                  <span style={{ fontSize: '10px', color: colors.text.tertiary }}>{goal.duration} min</span>
                  <span style={{ fontSize: '10px', color: colors.accent.orange }}>{goal.day}</span>
                </div>
              </div>
            ))}
          </div>
          {studyPlan.microGoals.goals.length > 6 && (
            <div style={{ fontSize: '12px', color: colors.text.tertiary, marginTop: '8px', textAlign: 'center' }}>
              +{studyPlan.microGoals.goals.length - 6} more micro-goals across your study plan
            </div>
          )}
        </Card>
      )}

      {/* ── Focus Areas ── */}
      <Card>
        <SectionTitle icon={<TargetIcon size={18} color={colors.accent.orange} />} title="Top Focus Areas" subtitle="Skills your plan prioritizes most" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {planSummary.topFocusAreas.map((area, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '24px', height: '24px', borderRadius: '50%', background: colors.semantic.errorLight,
                color: colors.semantic.error, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: '700', flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}>{area.name}</div>
              </div>
              <span style={{
                fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: radius.xl,
                background: area.accuracy < 40 ? colors.semantic.errorLight : colors.semantic.warningLight,
                color: area.accuracy < 40 ? colors.semantic.error : '#b45309',
              }}>
                {area.accuracy !== undefined ? `${area.accuracy}% on test` : 'New skill'}
              </span>
            </div>
          ))}
        </div>
      </Card>

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
                <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}>{ms.title}</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary, lineHeight: '1.5' }}>{ms.description}</div>
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
                  <span style={{ fontSize: '15px', fontWeight: '600', color: colors.text.primary }}>{week.title}</span>
                </div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary, marginTop: '4px' }}>{week.goalDescription}</div>
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
                          <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}>{activity.title}</div>
                          <div style={{ fontSize: '12px', color: colors.text.tertiary }}>{activity.subtitle}</div>
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
                          {tip}
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

        {/* Improving / Declining skills */}
        {trendAnalysis.improvingSkills.length > 0 && (
          <Card>
            <SectionTitle icon={<CheckCircleIcon size={18} color={colors.semantic.success} />} title="Skills Improving" />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {trendAnalysis.improvingSkills.map((skill, i) => (
                <span key={i} style={{
                  padding: '6px 12px', borderRadius: radius.xl, fontSize: '13px',
                  background: colors.semantic.successLight, color: colors.semantic.success, fontWeight: '500',
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                }}>
                  <TrendingUpIcon size={14} /> {skill}
                </span>
              ))}
            </div>
          </Card>
        )}

        {trendAnalysis.decliningSkills.length > 0 && (
          <Card>
            <SectionTitle icon={<WarningIcon size={18} color={colors.semantic.warning} />} title="Skills Needing Attention" />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {trendAnalysis.decliningSkills.map((skill, i) => (
                <span key={i} style={{
                  padding: '6px 12px', borderRadius: radius.xl, fontSize: '13px',
                  background: colors.semantic.errorLight, color: colors.semantic.error, fontWeight: '500',
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                }}>
                  <TrendingDownIcon size={14} /> {skill}
                </span>
              ))}
            </div>
          </Card>
        )}

        {/* Persistent Weaknesses — skills weak across 2+ tests */}
        {trendAnalysis.persistentWeaknesses && trendAnalysis.persistentWeaknesses.length > 0 && (
          <Card>
            <SectionTitle icon={<RepeatIcon size={18} color={colors.accent.orange} />} title="Persistent Weaknesses" />
            <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: '12px' }}>
              These skills have been weak across multiple practice tests — they need focused attention.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {trendAnalysis.persistentWeaknesses.map((pw, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 14px', borderRadius: '10px',
                  background: colors.semantic.errorLight, border: '1px solid #fecaca',
                }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}>
                    {pw.name}
                  </span>
                  <span style={{
                    padding: '3px 10px', borderRadius: radius.md, fontSize: '11px', fontWeight: '700',
                    background: colors.semantic.error, color: 'white',
                  }}>
                    Weak in {pw.testCount} tests
                  </span>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════
  // MAIN RENDER
  // ═══════════════════════════════════════════════════════════════════════

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: isMobile ? '12px' : '20px', fontFamily: typography.fontFamily }}>

      {/* ── Header ── */}
      <div style={{ marginBottom: '24px' }}>
        {onBack && (
          <button onClick={onBack} style={{
            background: 'none', border: 'none', color: colors.accent.orange,
            fontSize: '14px', fontWeight: '500', cursor: 'pointer', padding: '4px 0',
            marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            <ArrowLeftIcon size={14} color={colors.accent.orange} /> Back to Results
          </button>
        )}

        {/* Score overview */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: isMobile ? '16px' : '24px',
          padding: isMobile ? '16px' : '24px', background: colors.surface.offWhite, borderRadius: radius.xl,
          border: `1px solid ${colors.surface.grayDark}`,
          flexDirection: isMobile ? 'column' : 'row',
          textAlign: isMobile ? 'center' : 'left',
        }}>
          <ScoreRing score={score.scaled} target={score.target} size={isMobile ? 120 : 140} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', color: colors.text.tertiary, fontWeight: '500', marginBottom: '4px' }}>
              {diagnostic.testTitle}
            </div>
            <div style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: '700', color: colors.text.primary, marginBottom: '4px' }}>
              {score.raw}/{score.total} correct ({score.percentCorrect}%)
            </div>
            {score.gap > 0 ? (
              <div style={{ fontSize: '14px', color: colors.accent.orange, fontWeight: '600' }}>
                {score.gap} points to your {score.target} target
              </div>
            ) : (
              <div style={{ fontSize: '14px', color: colors.semantic.success, fontWeight: '600' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><CheckCircleIcon size={14} color={colors.semantic.success} /> At or above your {score.target} target!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Tab Navigation with sliding indicator ── */}
      <div
        ref={tabBarRef}
        role="tablist"
        aria-label="Diagnostic report sections"
        style={{
          display: 'flex', gap: '4px', marginBottom: '24px',
          background: colors.surface.gray, borderRadius: radius.md, padding: '4px',
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
            background: colors.surface.white,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'left 0.25s cubic-bezier(0.25, 0.1, 0.25, 1), width 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)',
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
      {activeSection === 'diagnosis' && <div role="tabpanel" id="panel-diagnosis" aria-labelledby="tab-diagnosis">{renderDiagnosis()}</div>}
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
