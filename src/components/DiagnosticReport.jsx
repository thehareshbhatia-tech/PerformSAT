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
import { isBlankAttempt } from '../services/selectors/latestTestStats';
// Drill routing for the Do-This-First CTA when the next action is a
// drill-shaped (skillId, no moduleId) activity. This component already
// imports the generator, so the bank imports add no new bundle weight.
import { resolveActivityDrill } from '../services/activityDrillRouter';
import { getTargetedWeaknessSet, getQuestionsBySkillIds } from '../data/questions/bank';
import {
  getTargetedWeaknessSet as getRWTargetedWeaknessSet,
  getQuestionsBySkillIds as getRWQuestionsBySkillIds,
} from '../data/questions/rwBank';
import { getDrillChipForWeakness } from '../services/selectors/drillChip';
import { showToast } from './ui/Toaster';
import ErrorRecoveryDrills from './ErrorRecoveryDrills';
import { MathText } from './MathText';
import Avatar, { AVATAR_SIZES } from './ui/Avatar';
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
// `max` is the scale ceiling: 800 for a section score, 1600 for a
// multi-section composite. The target tick only renders when the target is
// on the same scale (a 1300 composite goal on an 800 ring is meaningless).
const ScoreRing = ({ score, target, size = 160, max = 800 }) => {
  const strokeWidth = 12;
  const r = (size - strokeWidth) / 2 - 4;
  const circumference = 2 * Math.PI * r;
  const progress = Math.min(score / max, 1);
  const showTarget = typeof target === 'number' && target > 0 && target <= max;
  const targetProgress = showTarget ? Math.min(target / max, 1) : 0;
  const offset = circumference - progress * circumference;
  const targetOffset = circumference - targetProgress * circumference;
  const isAtTarget = showTarget && score >= target;
  const displayScore = useCountUp(score, 800, 200);

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.06))' }}>
        {/* Background track */}
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth={strokeWidth} />
        {/* Target marker */}
        {showTarget && (
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#f97316" strokeWidth={strokeWidth}
            strokeDasharray={`2 ${circumference - 2}`} strokeDashoffset={targetOffset} opacity={0.6} />
        )}
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
          out of {max}
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
              label: `${ERROR_TYPE_ICONS[type] || ''} ${ERROR_TYPE_LABELS[type] || type} (${count})`.trim(),
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
                  color: q.difficulty === 'easy' ? colors.semantic.success : q.difficulty === 'hard' ? colors.semantic.error : 'var(--color-warning-text)',
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
                    {`${ERROR_TYPE_ICONS[q.errorType] || ''} ${ERROR_TYPE_LABELS[q.errorType] || ''}`.trim()}
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
  savedStudyPlan = null,
  answeredQuestionIds = [],
  onStartPractice,
  onStartPracticeTest,
  onSaveStudyPlan,
  onGoToStudyPlan,
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

  // Use the hybrid plan from PracticeTest when available (same plan shown on dashboard).
  // Fall back to a local deterministic plan if not yet generated.
  const studyPlan = useMemo(() => {
    if (savedStudyPlan) return savedStudyPlan;
    return generateStudyPlan(
      diagnostic,
      { targetScore: user?.targetScore || 700, testDate: user?.testDate },
      completedLessons,
      practiceProgress,
      null
    );
  }, [savedStudyPlan, diagnostic, user, completedLessons, practiceProgress]);

  const { score, errorPatterns, domainAnalysis, scoreProjection, difficultyAnalysis, timeAnalysis, trendAnalysis, prioritizedActions } = diagnostic;
  const { summary: planSummary } = studyPlan;

  // If the hybrid plan was passed in, it's already persisted by PracticeTest.
  // Otherwise, try to auto-save the locally-generated plan.
  useEffect(() => {
    if (savedStudyPlan) {
      setPlanSaved(true);
      return;
    }
    if (onSaveStudyPlan && studyPlan && !planSaveAttempted.current) {
      planSaveAttempted.current = true;
      onSaveStudyPlan(studyPlan).then(() => {
        setPlanSaved(true);
        console.log('[DiagnosticReport] Study plan auto-saved');
      }).catch(err => {
        console.error('[DiagnosticReport] Failed to auto-save study plan:', err);
      });
    }
  }, [savedStudyPlan, studyPlan, onSaveStudyPlan]);

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
    // Section axis from the engine: composite headline + per-section scores
    // for multi-section tests, single-section label derived from which
    // section actually has items (survives section-stripped snapshots).
    const isMultiSection = !!score.isMultiSection;
    const sections = score.sections || {};
    const ringMax = isMultiSection ? 1600 : 800;
    const ringLabel = isMultiSection
      ? 'Composite Score'
      : (sections.rw != null && sections.math == null ? 'Reading & Writing Score' : 'Math Score');
    // Gap/target tiles only when the stored target is provably on the same
    // scale as the headline (engine sets targetComparable; default true for
    // legacy reports that predate the field).
    const targetComparable = score.targetComparable !== false;
    const isAtTarget = targetComparable && score.gap <= 0;

    const tierColor = percentileTier === 'elite' || percentileTier === 'excellent'
      ? colors.semantic.success
      : percentileTier === 'above_average' || percentileTier === 'average'
        ? colors.semantic.info
        : colors.semantic.warning;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', padding: isMobile ? '20px 0' : '40px 0' }}>

        {/* Headline score ring (composite for multi-section tests) */}
        <div style={{ textAlign: 'center' }}>
          <ScoreRing
            score={score.scaled}
            target={targetComparable ? score.target : null}
            size={isMobile ? 180 : 200}
            max={ringMax}
          />
          <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: '600', color: colors.text.tertiary, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {ringLabel}
          </div>
        </div>

        {/* Per-section scores — the diagnosis covers BOTH sections */}
        {isMultiSection && (
          <div style={{
            display: 'flex', gap: '16px', width: '100%', maxWidth: '440px',
            flexDirection: isMobile ? 'column' : 'row',
          }}>
            {[
              { label: 'Reading & Writing', value: sections.rw },
              { label: 'Math', value: sections.math },
            ].map(s => (
              <div key={s.label} style={{
                flex: 1, textAlign: 'center', padding: '20px 16px',
                background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'saturate(180%) blur(24px)', WebkitBackdropFilter: 'saturate(180%) blur(24px)',
                borderRadius: '24px',
                border: `1px solid rgba(255, 255, 255, 0.6)`,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
              }}>
                <div style={{ fontSize: '32px', fontWeight: '800', color: colors.text.primary, letterSpacing: '-0.03em', lineHeight: '1' }}>
                  {s.value ?? '--'}
                </div>
                <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.tertiary, marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {s.label} <span style={{ fontWeight: '500', textTransform: 'none' }}>/ 800</span>
                </div>
              </div>
            ))}
          </div>
        )}

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
                {percentile}<span style={{ fontSize: '18px', fontWeight: '600', marginLeft: '2px' }}>{(() => {
                  // English ordinal suffix: 1st/2nd/3rd, but 11th/12th/13th
                  const mod100 = percentile % 100;
                  if (mod100 >= 11 && mod100 <= 13) return 'th';
                  return { 1: 'st', 2: 'nd', 3: 'rd' }[percentile % 10] || 'th';
                })()}</span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.tertiary, marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Percentile
              </div>
            </div>
          )}

          {/* Target Gap — hidden when the stored target is on a different
              scale than the headline (no honest cross-scale delta exists) */}
          {targetComparable && (
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
          )}
        </div>

      </div>
    );
  };

  const getActivityTypeIcon = (activity) => {
    const iconMap = {
      lesson: <BooksIcon size={16} color={colors.accent.orange} />,
      practice: <RulerIcon size={16} color="var(--color-brand-green-text)" />,
      strategy: <LightBulbIcon size={16} color="var(--color-brand-purple-text)" />,
      review: <SearchIcon size={16} color="var(--color-brand-purple-text)" />,
      test: <ClipboardIcon size={16} color="var(--color-brand-purple-text)" />,
    };
    return iconMap[activity.type] || <ClipboardIcon size={16} color={colors.text.secondary} />;
  };

  const getActivityTypeBadge = (activity) => {
    const map = {
      lesson: { bg: colors.accent.orangeLight || '#fff7ed', text: colors.accent.orange },
      practice: { bg: 'var(--color-brand-green-soft)', text: 'var(--color-brand-green-text)' },
      strategy: { bg: 'var(--color-brand-purple-soft)', text: 'var(--color-brand-purple-text)' },
      review: { bg: 'var(--color-brand-purple-soft)', text: 'var(--color-brand-purple-text)' },
      test: { bg: colors.surface.offWhite, text: colors.text.secondary },
    };
    const labels = { lesson: 'Lesson', practice: 'Practice', strategy: 'Strategy', review: 'Review', test: 'Test' };
    return { ...(map[activity.type] || { bg: colors.surface.offWhite, text: colors.text.secondary }), label: labels[activity.type] || 'Activity' };
  };

  const planNextAction = studyPlan.nextAction || (() => {
    const first = studyPlan.weeks?.[0]?.activities?.find(a => !a.completed);
    return first ? {
      title: first.title, reason: first.subtitle, type: first.type, duration: first.duration,
      moduleId: first.moduleId, lessonId: first.lessonId,
      skillId: first.skillId || null, skillName: first.skillName || null, section: first.section || null,
    } : null;
  })();

  // Drill-shaped next actions (skillId, no moduleId — format v2) launch via
  // the shared router into the assigned shell, same as the plan's own
  // launchers. This component is already corpus-coupled (it imports the
  // generator), so the bank deps are static imports, not new bundle weight.
  const launchNextAction = () => {
    if (!planNextAction || planNextAction.type !== 'practice' || !onStartPractice) return;
    if (planNextAction.moduleId) {
      onStartPractice(planNextAction.moduleId);
      return;
    }
    if (!planNextAction.skillId) return;
    const route = resolveActivityDrill({
      activity: planNextAction,
      weaknesses: studyPlan.weaknesses || [],
      cachedRows: [],
      answeredQuestionIds: answeredQuestionIds || [],
    }, {
      getTargetedWeaknessSet,
      getQuestionsBySkillIds,
      getRWTargetedWeaknessSet,
      getRWQuestionsBySkillIds,
      getDrillChipForWeakness,
    });
    if (route?.kind === 'assigned') {
      // weakness rides along so drill completion auto-checks the plan task
      // (App's completion handler matches on assignmentMeta.weakness).
      onStartPractice(null, null, { questionIds: route.questionIds, label: route.label, weakness: route.weakness });
    } else {
      showToast({ type: 'info', message: 'No drill set is available for this activity yet.' });
    }
  };

  const renderStudyPlan = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

      {/* Compact Summary */}
      <Card style={{ background: colors.surface.dark, color: 'white', border: 'none', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
              {studyPlan.weeksUntilTest}-Week Plan
            </div>
            <div style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.3' }}>
              <MathText>{planSummary.headline}</MathText>
            </div>
            {planSummary.diagnosis && (
              <p style={{ fontSize: typography.sizes.sm, color: 'rgba(255,255,255,0.7)', marginTop: '6px', lineHeight: '1.5', maxWidth: '520px' }}>
                <MathText>{planSummary.diagnosis}</MathText>
              </p>
            )}
          </div>
          {planSaved && (
            <span style={{ padding: '3px 8px', borderRadius: radius.sm, fontSize: '10px', fontWeight: '600', background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', flexShrink: 0, marginLeft: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircleIcon size={10} color="rgba(255,255,255,0.8)" /> Saved
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: '1px', background: 'rgba(255,255,255,0.08)', borderRadius: radius.sm, overflow: 'hidden' }}>
          <StatBox value={planSummary.stats.currentScore} label="Current" color="white" />
          {/* null target = no honest same-scale comparison exists (cross-scale account) */}
          <StatBox value={planSummary.stats.targetScore ?? '—'} label="Target" color="var(--color-brand-purple)" />
          <StatBox value={`${planSummary.stats.minutesPerDay}m`} label="Per Day" color="white" />
          <StatBox value={planSummary.stats.weeksInPlan} label="Weeks" color="white" />
        </div>
      </Card>

      {/* Do This First — single prominent action */}
      {planNextAction && (
        <Card
          style={{
            background: `linear-gradient(135deg, ${colors.accent.purple} 0%, var(--color-brand-purple-text) 100%)`,
            border: 'none', cursor: 'pointer', padding: '20px 24px',
          }}
          onClick={launchNextAction}
        >
          <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
            Do This First
          </div>
          <div style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>
            <MathText>{planNextAction.title}</MathText>
          </div>
          {planNextAction.reason && (
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.4' }}>
              <MathText>{planNextAction.reason}</MathText>
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px' }}>
            {planNextAction.duration && (
              <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '3px 10px', borderRadius: radius.sm }}>
                ~{planNextAction.duration} min
              </span>
            )}
            <span style={{ fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Start now <ArrowRightIcon size={14} />
            </span>
          </div>
        </Card>
      )}

      {/* Week-by-Week Plan */}
      <div>
        <div style={{ fontSize: '16px', fontWeight: '700', color: colors.text.primary, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CalendarIcon size={18} color={colors.accent.purple} /> Weekly Plan
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {studyPlan.weeks.map(week => {
            const isExpanded = expandedWeek === week.weekNumber;
            const weekActivities = week.activities || [];
            const isFirst = week.weekNumber === 1;
            return (
              <div key={week.weekNumber} style={{
                border: isFirst ? `2px solid ${colors.accent.purple}` : `1px solid ${colors.surface.grayDark}`,
                borderRadius: radius.md, overflow: 'hidden', background: colors.surface.white,
              }}>
                <button
                  onClick={() => setExpandedWeek(isExpanded ? null : week.weekNumber)}
                  style={{
                    width: '100%', padding: '14px 16px', background: isExpanded ? colors.accent.purpleLight : colors.surface.white,
                    border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      background: isFirst ? colors.accent.purple : colors.surface.grayMedium || colors.surface.gray,
                      color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '12px', fontWeight: '700', flexShrink: 0,
                    }}>
                      {week.weekNumber}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        <MathText>{week.title}</MathText>
                        {isFirst && <span style={{ marginLeft: '8px', fontSize: '11px', fontWeight: '500', color: colors.accent.purple, background: colors.accent.purpleLight, padding: '2px 6px', borderRadius: radius.sm }}>Current</span>}
                      </div>
                      {(week.goalDescription || week.rationale) && (
                        <div style={{ fontSize: '12px', color: colors.text.tertiary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          <MathText>{week.rationale || week.goalDescription}</MathText>
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <span style={{ fontSize: '12px', color: colors.text.tertiary }}>{weekActivities.length} tasks</span>
                    <span style={{ display: 'flex', transition: 'transform 0.2s', transform: isExpanded ? 'rotate(180deg)' : 'none' }}>
                      <ChevronDownIcon size={16} color={colors.text.tertiary} />
                    </span>
                  </div>
                </button>

                {isExpanded && weekActivities.length > 0 && (
                  <div style={{ padding: '8px 16px 16px', borderTop: `1px solid ${colors.surface.gray}` }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {weekActivities.map((activity, aIdx) => {
                        const badge = getActivityTypeBadge(activity);
                        return (
                          <div
                            key={aIdx}
                            style={{
                              display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px',
                              borderRadius: radius.sm, background: colors.surface.offWhite,
                              border: `1px solid ${colors.surface.gray}`, cursor: 'pointer',
                            }}
                            onClick={() => {
                              // Lesson branch removed — only practice activities surface now.
                              if (activity.type === 'practice' && activity.moduleId && onStartPractice) {
                                onStartPractice(activity.moduleId, activity.sectionName);
                              }
                            }}
                          >
                            <span style={{ flexShrink: 0, display: 'flex' }}>{getActivityTypeIcon(activity)}</span>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                <MathText>{activity.title}</MathText>
                              </div>
                              {activity.subtitle && (
                                <div style={{ fontSize: '11px', color: colors.text.tertiary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  <MathText>{activity.subtitle}</MathText>
                                </div>
                              )}
                            </div>
                            <span style={{ fontSize: '10px', fontWeight: '600', color: badge.text, background: badge.bg, padding: '2px 6px', borderRadius: radius.sm, flexShrink: 0 }}>
                              {badge.label}
                            </span>
                            {activity.duration && (
                              <span style={{ fontSize: '11px', color: colors.text.tertiary, flexShrink: 0 }}>{activity.duration}m</span>
                            )}
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
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════
  // RENDER: TRENDS SECTION
  // ═══════════════════════════════════════════════════════════════════════

  const renderTrends = () => {
    if (!trendAnalysis.hasHistory) return null;

    // Window to the most recent attempts — one flex column per attempt with
    // an unshrinkable score label means 30+ bars overflow the card and the
    // viewport. Ten bars fit the 720px report column at every breakpoint.
    const TREND_WINDOW = 10;
    // Re-apply the blank-attempt filter at render time: persisted diagnostic
    // snapshots were computed before the widened heuristic existed, so their
    // stored testHistory can still carry floor-score blank rows. The entries
    // keep rawScore/scaledScore/isMultiSection — enough to re-judge them.
    const fullHistory = trendAnalysis.testHistory.filter(t => !isBlankAttempt(t));
    if (fullHistory.length === 0) return null;
    const visibleHistory = fullHistory.slice(-TREND_WINDOW);
    const windowOffset = fullHistory.length - visibleHistory.length;
    // Scale bars to the window's own range — scores mix 200-800 section-era
    // attempts with 400-1600 composites, so a hardcoded 800 cap both
    // overflows composite bars and flattens section-score variation.
    const maxScore = Math.max(...visibleHistory.map(t => t.scaledScore || 0), 1);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Score history */}
        <Card>
          <SectionTitle icon={<TrendingUpIcon size={18} color={colors.accent.orange} />} title="Score Trend" subtitle={trendAnalysis.message} />
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '20px 0' }}>
            {visibleHistory.map((test, i) => {
              const height = Math.max(20, (test.scaledScore / maxScore) * 150);
              return (
                <div key={i} style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: test.isCurrent ? colors.accent.orange : colors.text.primary }}>
                    {test.scaledScore}
                  </div>
                  <div style={{
                    width: '100%', maxWidth: '48px', height: `${height}px`,
                    background: test.isCurrent
                      ? `linear-gradient(to top, ${colors.accent.orange}, var(--color-brand-orange-400))`
                      : colors.surface.gray,
                    borderRadius: '6px 6px 0 0',
                    border: test.isCurrent ? `2px solid ${colors.accent.orange}` : `1px solid ${colors.surface.grayDark}`,
                  }} />
                  <div style={{ fontSize: '10px', color: colors.text.tertiary, textAlign: 'center' }}>
                    {test.isCurrent ? 'Now' : `Test ${windowOffset + i + 1}`}
                  </div>
                </div>
              );
            })}
          </div>
          {windowOffset > 0 && (
            <div style={{ fontSize: '12px', color: colors.text.tertiary, textAlign: 'center', marginBottom: '12px' }}>
              Showing your last {visibleHistory.length} tests of {fullHistory.length}
            </div>
          )}
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

        {/* Identity stamp (made-for-me item 12) — merged into the existing
            heading, never a second one. Live user doc fields, not snapshot. */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
          <Avatar user={user} size={AVATAR_SIZES.md} />
          <div style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: '800', color: colors.text.primary, letterSpacing: '-0.04em', minWidth: 0 }}>
            {user?.firstName ? `${user.firstName}'s diagnostic — ${diagnostic.testTitle}` : diagnostic.testTitle}
          </div>
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
            ? 'Open your full Study Plan to begin Week 1'
            : 'Switch to the Study Plan tab to see your personalized weekly plan'
          }
        </div>
        <button
          onClick={() => {
            if (activeSection === 'plan') {
              (onGoToStudyPlan || onBack)?.();
            } else {
              setActiveSection('plan');
            }
          }}
          style={{
            padding: '12px 32px', borderRadius: radius.md, border: 'none',
            background: colors.accent.orange, color: 'white',
            fontSize: '15px', fontWeight: '600', cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)',
          }}
        >
          {activeSection === 'plan' ? <>Open Study Plan <ArrowRightIcon size={16} /></> : <><span>View Study Plan</span> <ArrowRightIcon size={16} /></>}
        </button>
      </div>
    </div>
  );
};

export default DiagnosticReport;
