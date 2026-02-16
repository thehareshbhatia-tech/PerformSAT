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

import React, { useState, useMemo } from 'react';
import { runDiagnostic, ERROR_TYPES, ERROR_TYPE_LABELS, ERROR_TYPE_ICONS, ERROR_TYPE_COLORS } from '../services/diagnosticEngine';
import { generateStudyPlan, compareDiagnostics } from '../services/studyPlanGenerator';

// ═══════════════════════════════════════════════════════════════════════════
// DESIGN TOKENS
// ═══════════════════════════════════════════════════════════════════════════

const colors = {
  bg: '#ffffff',
  bgSubtle: '#fafafa',
  bgMuted: '#f5f5f5',
  bgDark: '#171717',
  text: '#0a0a0a',
  textSecondary: '#525252',
  textMuted: '#737373',
  border: '#e5e5e5',
  borderLight: '#f0f0f0',
  accent: '#ea580c',
  accentLight: '#fff7ed',
  accentBg: '#ffedd5',
  success: '#16a34a',
  successLight: '#f0fdf4',
  successBg: '#dcfce7',
  error: '#dc2626',
  errorLight: '#fef2f2',
  warning: '#f59e0b',
  warningLight: '#fffbeb',
  info: '#2563eb',
  infoLight: '#eff6ff',
  purple: '#7c3aed',
  purpleLight: '#f5f3ff',
};

const font = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

// ═══════════════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

// ── Score Ring ──
const ScoreRing = ({ score, target, size = 160 }) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2 - 4;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(score / 800, 1);
  const targetProgress = Math.min(target / 800, 1);
  const offset = circumference - progress * circumference;
  const targetOffset = circumference - targetProgress * circumference;
  const isAtTarget = score >= target;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background track */}
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={colors.bgMuted} strokeWidth={strokeWidth} />
        {/* Target marker */}
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={colors.border} strokeWidth={strokeWidth}
          strokeDasharray={`2 ${circumference - 2}`} strokeDashoffset={targetOffset} opacity={0.5} />
        {/* Score progress */}
        <circle cx={size/2} cy={size/2} r={radius} fill="none"
          stroke={isAtTarget ? colors.success : colors.accent} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" style={{ transition: 'stroke-dashoffset 1s ease' }} />
      </svg>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <div style={{ fontSize: '36px', fontWeight: '700', color: colors.text, letterSpacing: '-0.02em', lineHeight: '1' }}>
          {score}
        </div>
        <div style={{ fontSize: '12px', color: colors.textMuted, marginTop: '4px', fontWeight: '500' }}>
          out of 800
        </div>
      </div>
    </div>
  );
};

// ── Progress Bar ──
const ProgressBar = ({ value, max = 100, color = colors.accent, height = 8, showLabel = false }) => {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
      <div style={{ flex: 1, height, background: colors.bgMuted, borderRadius: height, overflow: 'hidden' }}>
        <div style={{
          width: `${pct}%`, height: '100%', background: color, borderRadius: height,
          transition: 'width 0.6s ease',
        }} />
      </div>
      {showLabel && <span style={{ fontSize: '13px', fontWeight: '600', color: colors.textSecondary, minWidth: '36px', textAlign: 'right' }}>{Math.round(pct)}%</span>}
    </div>
  );
};

// ── Card Component ──
const Card = ({ children, style = {}, onClick }) => (
  <div onClick={onClick} style={{
    background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: '16px',
    padding: '24px', ...style,
    ...(onClick ? { cursor: 'pointer', transition: 'box-shadow 0.2s ease' } : {}),
  }}>
    {children}
  </div>
);

// ── Section Title ──
const SectionTitle = ({ icon, title, subtitle }) => (
  <div style={{ marginBottom: '20px' }}>
    <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.text, margin: 0, display: 'flex', alignItems: 'center', gap: '8px', fontFamily: font }}>
      {icon && <span style={{ fontSize: '20px' }}>{icon}</span>}
      {title}
    </h3>
    {subtitle && <p style={{ fontSize: '14px', color: colors.textMuted, margin: '4px 0 0', lineHeight: '1.5' }}>{subtitle}</p>}
  </div>
);

// ── Stat Box ──
const StatBox = ({ value, label, color: c, icon }) => (
  <div style={{ textAlign: 'center', flex: 1, padding: '16px 12px' }}>
    {icon && <div style={{ fontSize: '20px', marginBottom: '6px' }}>{icon}</div>}
    <div style={{ fontSize: '24px', fontWeight: '700', color: c || colors.text, letterSpacing: '-0.02em' }}>{value}</div>
    <div style={{ fontSize: '12px', color: colors.textMuted, marginTop: '4px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
  </div>
);

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
  onBack,
}) => {
  const [activeSection, setActiveSection] = useState('diagnosis');
  const [expandedWeek, setExpandedWeek] = useState(1);

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

  // Navigation tabs
  const sections = [
    { id: 'diagnosis', label: 'Your Diagnosis', icon: '🔬' },
    { id: 'plan', label: 'Study Plan', icon: '📋' },
  ];

  if (trendAnalysis.hasHistory) {
    sections.push({ id: 'trends', label: 'Progress', icon: '📈' });
  }

  // ═══════════════════════════════════════════════════════════════════════
  // RENDER: DIAGNOSIS SECTION
  // ═══════════════════════════════════════════════════════════════════════

  const renderDiagnosis = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* ── KEY INSIGHT CARD ── */}
      <Card style={{ background: planSummary.keyInsight.type === 'quick_win' ? colors.accentLight : colors.infoLight, border: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{ fontSize: '32px', lineHeight: '1' }}>
            {planSummary.keyInsight.type === 'quick_win' ? '⚡' : planSummary.keyInsight.type === 'easy_wins' ? '🎯' : planSummary.keyInsight.type === 'time' ? '⏱️' : '💡'}
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '700', color: colors.text, marginBottom: '6px' }}>
              {planSummary.keyInsight.title}
            </div>
            <div style={{ fontSize: '14px', color: colors.textSecondary, lineHeight: '1.6' }}>
              {planSummary.keyInsight.message}
            </div>
          </div>
        </div>
      </Card>

      {/* ── ERROR PATTERN BREAKDOWN ── */}
      <Card>
        <SectionTitle
          icon="🔍"
          title="Why You Got Questions Wrong"
          subtitle={`${errorPatterns.totalWrong} wrong out of ${score.total} — here's the breakdown`}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {errorPatterns.summary.map(pattern => (
            <div key={pattern.type} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: pattern.color + '15', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '18px', flexShrink: 0,
              }}>
                {pattern.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: colors.text }}>{pattern.label}</span>
                  <span style={{ fontSize: '14px', fontWeight: '700', color: pattern.color }}>
                    {pattern.count} question{pattern.count !== 1 ? 's' : ''}
                  </span>
                </div>
                <ProgressBar value={pattern.count} max={errorPatterns.totalWrong} color={pattern.color} height={6} />
                <div style={{ fontSize: '12px', color: colors.textMuted, marginTop: '4px' }}>{pattern.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* ── SCORE PROJECTION ── */}
      <Card>
        <SectionTitle
          icon="📊"
          title="How to Reach Your Target"
          subtitle={score.gap > 0 ? `You need ${scoreProjection.questionsNeededForTarget} more correct answers to reach ${score.target}` : "You're at or above your target!"}
        />

        {/* Quick wins callout */}
        {scoreProjection.quickWins.count > 0 && (
          <div style={{
            background: colors.successLight, border: `1px solid ${colors.successBg}`,
            borderRadius: '12px', padding: '16px', marginBottom: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: colors.success, marginBottom: '4px' }}>
              🎯 Quick Win: +{scoreProjection.quickWins.projectedGain} points possible
            </div>
            <div style={{ fontSize: '13px', color: colors.textSecondary }}>
              {scoreProjection.quickWins.description}
            </div>
          </div>
        )}

        {/* Domain projections */}
        <div style={{ fontSize: '13px', fontWeight: '600', color: colors.textMuted, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Points available by domain
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {scoreProjection.domainProjections.map(proj => (
            <div key={proj.domain} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: proj.color, flexShrink: 0,
              }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '500', color: colors.text }}>{proj.domainName}</span>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: colors.success }}>
                    +{proj.projectedPointGain} pts
                  </span>
                </div>
                <ProgressBar value={proj.questionsToFix} max={Math.max(...scoreProjection.domainProjections.map(p => p.questionsToFix))} color={proj.color} height={5} />
              </div>
              <span style={{ fontSize: '12px', color: colors.textMuted, flexShrink: 0 }}>{proj.questionsToFix} Q's</span>
            </div>
          ))}
        </div>
      </Card>

      {/* ── DOMAIN PERFORMANCE ── */}
      <Card>
        <SectionTitle
          icon="📐"
          title="Performance by SAT Domain"
          subtitle="How you did across the four tested areas"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {domainAnalysis.map(domain => (
            <div key={domain.domain}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: colors.text }}>{domain.displayName}</span>
                  <span style={{ fontSize: '12px', color: colors.textMuted, marginLeft: '8px' }}>
                    ({Math.round(domain.satWeight * 100)}% of SAT)
                  </span>
                </div>
                <span style={{
                  fontSize: '14px', fontWeight: '700',
                  color: domain.accuracy >= 80 ? colors.success : domain.accuracy >= 60 ? colors.warning : colors.error,
                }}>
                  {domain.correct}/{domain.total} ({domain.accuracy}%)
                </span>
              </div>
              <ProgressBar
                value={domain.accuracy} max={100}
                color={domain.accuracy >= 80 ? colors.success : domain.accuracy >= 60 ? colors.warning : colors.error}
                height={8}
              />
              {/* Difficulty sub-breakdown */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                {['easy', 'medium', 'hard'].map(diff => {
                  const d = domain.byDifficulty[diff];
                  if (d.total === 0) return null;
                  return (
                    <span key={diff} style={{ fontSize: '12px', color: colors.textMuted }}>
                      <span style={{ textTransform: 'capitalize' }}>{diff}</span>: {d.correct}/{d.total}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* ── DIFFICULTY BREAKDOWN ── */}
      <Card>
        <SectionTitle icon="📶" title="Performance by Difficulty" />
        <div style={{ display: 'flex', gap: '16px' }}>
          {['easy', 'medium', 'hard'].map(level => {
            const data = difficultyAnalysis.levels[level];
            if (data.total === 0) return null;
            const pct = data.accuracy;
            return (
              <div key={level} style={{
                flex: 1, textAlign: 'center', padding: '20px 12px',
                background: pct >= 80 ? colors.successLight : pct >= 50 ? colors.warningLight : colors.errorLight,
                borderRadius: '12px',
              }}>
                <div style={{ fontSize: '28px', fontWeight: '700', color: pct >= 80 ? colors.success : pct >= 50 ? '#b45309' : colors.error }}>
                  {pct}%
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text, textTransform: 'capitalize', marginTop: '4px' }}>
                  {level}
                </div>
                <div style={{ fontSize: '12px', color: colors.textMuted, marginTop: '2px' }}>
                  {data.correct}/{data.total} correct
                </div>
                <div style={{ fontSize: '11px', color: colors.textMuted, marginTop: '2px' }}>
                  avg {data.avgTime}s / question
                </div>
              </div>
            );
          })}
        </div>
        {difficultyAnalysis.difficultyCliff && (
          <div style={{ marginTop: '12px', padding: '12px 16px', background: colors.warningLight, borderRadius: '10px', fontSize: '13px', color: '#92400e' }}>
            ⚠️ Your accuracy drops sharply at <strong>{difficultyAnalysis.difficultyCliff}</strong> difficulty.
            {difficultyAnalysis.difficultyCliff === 'easy' && ' Focus on mastering the fundamentals before tackling harder problems.'}
            {difficultyAnalysis.difficultyCliff === 'medium' && ' Solidify your core concepts to handle the step up in complexity.'}
            {difficultyAnalysis.difficultyCliff === 'hard' && ' Your basics are solid — practice harder questions to push your ceiling higher.'}
          </div>
        )}
      </Card>

      {/* ── TIME MANAGEMENT ── */}
      {timeAnalysis.insights.length > 0 && (
        <Card>
          <SectionTitle icon="⏱️" title="Time Management" subtitle={`Average ${timeAnalysis.avgTimePerQuestion}s per question`} />
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div style={{ padding: '12px 16px', background: colors.bgMuted, borderRadius: '10px', flex: 1, minWidth: '120px' }}>
              <div style={{ fontSize: '11px', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Correct answers</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: colors.success }}>{timeAnalysis.avgCorrectTime}s avg</div>
            </div>
            <div style={{ padding: '12px 16px', background: colors.bgMuted, borderRadius: '10px', flex: 1, minWidth: '120px' }}>
              <div style={{ fontSize: '11px', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Wrong answers</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: colors.error }}>{timeAnalysis.avgIncorrectTime}s avg</div>
            </div>
            {timeAnalysis.fadeEffect > 10 && (
              <div style={{ padding: '12px 16px', background: colors.warningLight, borderRadius: '10px', flex: 1, minWidth: '120px' }}>
                <div style={{ fontSize: '11px', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Accuracy fade</div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#b45309' }}>-{timeAnalysis.fadeEffect}%</div>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {timeAnalysis.insights.map((insight, i) => (
              <div key={i} style={{
                padding: '10px 14px', borderRadius: '8px', fontSize: '13px', lineHeight: '1.5',
                background: insight.type === 'warning' ? colors.warningLight : colors.infoLight,
                color: insight.type === 'warning' ? '#92400e' : '#1e40af',
              }}>
                {insight.type === 'warning' ? '⚠️' : 'ℹ️'} {insight.message}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* ── TOP ACTIONS ── */}
      <Card>
        <SectionTitle
          icon="🎯"
          title="Your Top Priorities"
          subtitle="Focus on these first for maximum improvement"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {prioritizedActions.slice(0, 5).map((action, idx) => (
            <div key={idx} style={{
              display: 'flex', gap: '14px', padding: '16px',
              background: idx === 0 ? colors.accentLight : colors.bgSubtle,
              borderRadius: '12px', border: idx === 0 ? `1px solid ${colors.accentBg}` : `1px solid ${colors.borderLight}`,
            }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: idx === 0 ? colors.accent : colors.bgMuted,
                color: idx === 0 ? 'white' : colors.textSecondary,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: '700', flexShrink: 0,
              }}>
                {idx + 1}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text, marginBottom: '4px' }}>
                  {action.title}
                </div>
                <div style={{ fontSize: '13px', color: colors.textSecondary, lineHeight: '1.5', marginBottom: '8px' }}>
                  {action.description}
                </div>
                {action.estimatedGain > 0 && (
                  <span style={{
                    display: 'inline-block', padding: '3px 10px', borderRadius: '20px',
                    background: colors.successLight, color: colors.success,
                    fontSize: '12px', fontWeight: '600',
                  }}>
                    +{action.estimatedGain} pts potential
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════
  // RENDER: STUDY PLAN SECTION
  // ═══════════════════════════════════════════════════════════════════════

  const renderStudyPlan = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* ── Plan Overview ── */}
      <Card style={{ background: colors.bgDark, color: 'white', border: 'none' }}>
        <div style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>
          Your {studyPlan.weeksUntilTest}-Week Study Plan
        </div>
        <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px', lineHeight: '1.6' }}>
          {planSummary.headline}
        </div>
        <div style={{ display: 'flex', gap: '1px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
          <StatBox value={planSummary.stats.currentScore} label="Current" color="white" />
          <StatBox value={`→ ${planSummary.stats.targetScore}`} label="Target" color={colors.accent} />
          <StatBox value={`${planSummary.stats.minutesPerDay}m`} label="Per Day" color="white" />
          <StatBox value={planSummary.stats.daysUntilTest || '—'} label="Days Left" color={planSummary.stats.daysUntilTest && planSummary.stats.daysUntilTest < 30 ? colors.warning : 'white'} />
        </div>
      </Card>

      {/* ── Plan Stats ── */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Card style={{ flex: 1, minWidth: '140px', textAlign: 'center', padding: '16px' }}>
          <div style={{ fontSize: '11px', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Lessons</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: colors.text }}>{planSummary.stats.totalLessons}</div>
        </Card>
        <Card style={{ flex: 1, minWidth: '140px', textAlign: 'center', padding: '16px' }}>
          <div style={{ fontSize: '11px', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Practice Sets</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: colors.text }}>{planSummary.stats.totalPractice}</div>
        </Card>
        <Card style={{ flex: 1, minWidth: '140px', textAlign: 'center', padding: '16px' }}>
          <div style={{ fontSize: '11px', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Practice Tests</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: colors.text }}>{planSummary.stats.totalTests}</div>
        </Card>
        <Card style={{ flex: 1, minWidth: '140px', textAlign: 'center', padding: '16px' }}>
          <div style={{ fontSize: '11px', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Total Hours</div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: colors.text }}>{planSummary.stats.totalHours}</div>
        </Card>
      </div>

      {/* ── Focus Areas ── */}
      <Card>
        <SectionTitle icon="🎯" title="Top Focus Areas" subtitle="Skills your plan prioritizes most" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {planSummary.topFocusAreas.map((area, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '24px', height: '24px', borderRadius: '50%', background: colors.errorLight,
                color: colors.error, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: '700', flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text }}>{area.name}</div>
              </div>
              <span style={{
                fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px',
                background: area.accuracy < 40 ? colors.errorLight : colors.warningLight,
                color: area.accuracy < 40 ? colors.error : '#b45309',
              }}>
                {area.accuracy !== undefined ? `${area.accuracy}% on test` : 'New skill'}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* ── Milestones ── */}
      <Card>
        <SectionTitle icon="🏁" title="Milestones" subtitle="Your checkpoints on the path to your target score" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '15px', top: '16px', bottom: '16px', width: '2px',
            background: `linear-gradient(to bottom, ${colors.accent}, ${colors.success})`, borderRadius: '1px',
          }} />
          {studyPlan.milestones.map((ms, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px', padding: '12px 0', position: 'relative' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                background: ms.type === 'goal' ? colors.success : ms.type === 'test' ? colors.accent : colors.bgMuted,
                color: ms.type === 'goal' || ms.type === 'test' ? 'white' : colors.textSecondary,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: '700', zIndex: 1,
                border: `3px solid ${colors.bg}`,
              }}>
                {ms.type === 'goal' ? '★' : `W${ms.weekNumber}`}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text }}>{ms.title}</div>
                <div style={{ fontSize: '13px', color: colors.textMuted, lineHeight: '1.5' }}>{ms.description}</div>
              </div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: ms.type === 'goal' ? colors.success : colors.accent, flexShrink: 0 }}>
                {ms.targetScore}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* ── Weekly Breakdown ── */}
      <SectionTitle icon="📅" title="Week-by-Week Plan" subtitle="Click a week to see your daily activities" />

      {studyPlan.weeks.map(week => {
        const isExpanded = expandedWeek === week.weekNumber;
        return (
          <Card
            key={week.weekNumber}
            onClick={() => setExpandedWeek(isExpanded ? null : week.weekNumber)}
            style={{
              cursor: 'pointer', padding: '0', overflow: 'hidden',
              border: isExpanded ? `2px solid ${colors.accent}` : `1px solid ${colors.border}`,
            }}
          >
            {/* Week header */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '16px 20px', background: isExpanded ? colors.accentLight : colors.bg,
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '11px', fontWeight: '700', color: 'white',
                    background: week.isTestWeek ? colors.accent : colors.bgDark,
                    padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase',
                  }}>
                    Week {week.weekNumber}
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: '600', color: colors.text }}>{week.title}</span>
                </div>
                <div style={{ fontSize: '13px', color: colors.textMuted, marginTop: '4px' }}>{week.goalDescription}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '12px', color: colors.textMuted }}>{week.totalMinutes} min</span>
                <span style={{ fontSize: '18px', color: colors.textMuted, transition: 'transform 0.2s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
              </div>
            </div>

            {/* Expanded activities */}
            {isExpanded && (
              <div style={{ padding: '16px 20px', borderTop: `1px solid ${colors.border}` }}>
                {week.activities.length === 0 ? (
                  <div style={{ fontSize: '14px', color: colors.textMuted, textAlign: 'center', padding: '20px' }}>
                    No specific activities scheduled — continue practicing at your own pace
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {week.activities.map((activity, aIdx) => (
                      <div key={aIdx} style={{
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px',
                        background: activity.type === 'test' ? colors.accentLight : colors.bgSubtle,
                        borderRadius: '10px', border: `1px solid ${colors.borderLight}`,
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
                          <div style={{ fontSize: '14px', fontWeight: '600', color: colors.text }}>{activity.title}</div>
                          <div style={{ fontSize: '12px', color: colors.textMuted }}>{activity.subtitle}</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flexShrink: 0, gap: '2px' }}>
                          {activity.day && (
                            <span style={{ fontSize: '11px', fontWeight: '600', color: colors.textMuted }}>{activity.day}</span>
                          )}
                          <span style={{ fontSize: '11px', color: colors.textMuted }}>{activity.duration} min</span>
                        </div>
                        {(activity.type === 'lesson' || activity.type === 'practice') && (
                          <span style={{ fontSize: '16px', color: colors.accent, flexShrink: 0 }}>→</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {/* Week tips */}
                {week.activities.some(a => a.tips) && (
                  <div style={{ marginTop: '12px', padding: '12px 14px', background: colors.infoLight, borderRadius: '10px' }}>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: colors.info, marginBottom: '6px' }}>💡 Tips for this week</div>
                    {week.activities
                      .filter(a => a.tips)
                      .flatMap(a => a.tips)
                      .slice(0, 3)
                      .map((tip, i) => (
                        <div key={i} style={{ fontSize: '12px', color: '#1e40af', lineHeight: '1.5', paddingLeft: '12px', borderLeft: `2px solid ${colors.info}`, marginBottom: '6px' }}>
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
          <SectionTitle icon="📈" title="Score Trend" subtitle={trendAnalysis.message} />
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '20px 0' }}>
            {trendAnalysis.testHistory.map((test, i) => {
              const maxScore = 800;
              const height = Math.max(20, (test.scaledScore / maxScore) * 150);
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: test.isCurrent ? colors.accent : colors.text }}>
                    {test.scaledScore}
                  </div>
                  <div style={{
                    width: '100%', maxWidth: '48px', height: `${height}px`,
                    background: test.isCurrent
                      ? `linear-gradient(to top, ${colors.accent}, #fb923c)`
                      : colors.bgMuted,
                    borderRadius: '6px 6px 0 0',
                    border: test.isCurrent ? `2px solid ${colors.accent}` : `1px solid ${colors.border}`,
                  }} />
                  <div style={{ fontSize: '10px', color: colors.textMuted, textAlign: 'center' }}>
                    {test.isCurrent ? 'Now' : `Test ${i + 1}`}
                  </div>
                </div>
              );
            })}
          </div>
          {trendAnalysis.scoreChange !== null && (
            <div style={{
              textAlign: 'center', padding: '12px', borderRadius: '10px',
              background: trendAnalysis.scoreChange > 0 ? colors.successLight : trendAnalysis.scoreChange < 0 ? colors.errorLight : colors.bgMuted,
              fontSize: '14px', fontWeight: '600',
              color: trendAnalysis.scoreChange > 0 ? colors.success : trendAnalysis.scoreChange < 0 ? colors.error : colors.textSecondary,
            }}>
              {trendAnalysis.scoreChange > 0 ? '↑' : trendAnalysis.scoreChange < 0 ? '↓' : '→'} {trendAnalysis.scoreChange > 0 ? '+' : ''}{trendAnalysis.scoreChange} points since last test
            </div>
          )}
        </Card>

        {/* Improving / Declining skills */}
        {trendAnalysis.improvingSkills.length > 0 && (
          <Card>
            <SectionTitle icon="✅" title="Skills Improving" />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {trendAnalysis.improvingSkills.map((skill, i) => (
                <span key={i} style={{
                  padding: '6px 12px', borderRadius: '20px', fontSize: '13px',
                  background: colors.successLight, color: colors.success, fontWeight: '500',
                }}>
                  ↑ {skill}
                </span>
              ))}
            </div>
          </Card>
        )}

        {trendAnalysis.decliningSkills.length > 0 && (
          <Card>
            <SectionTitle icon="⚠️" title="Skills Needing Attention" />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {trendAnalysis.decliningSkills.map((skill, i) => (
                <span key={i} style={{
                  padding: '6px 12px', borderRadius: '20px', fontSize: '13px',
                  background: colors.errorLight, color: colors.error, fontWeight: '500',
                }}>
                  ↓ {skill}
                </span>
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
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '20px', fontFamily: font }}>

      {/* ── Header ── */}
      <div style={{ marginBottom: '24px' }}>
        {onBack && (
          <button onClick={onBack} style={{
            background: 'none', border: 'none', color: colors.accent,
            fontSize: '14px', fontWeight: '500', cursor: 'pointer', padding: '4px 0',
            marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            ← Back to Results
          </button>
        )}

        {/* Score overview */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '24px',
          padding: '24px', background: colors.bgSubtle, borderRadius: '20px',
          border: `1px solid ${colors.border}`,
        }}>
          <ScoreRing score={score.scaled} target={score.target} size={140} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', color: colors.textMuted, fontWeight: '500', marginBottom: '4px' }}>
              {diagnostic.testTitle}
            </div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: colors.text, marginBottom: '4px' }}>
              {score.raw}/{score.total} correct ({score.percentCorrect}%)
            </div>
            {score.gap > 0 ? (
              <div style={{ fontSize: '14px', color: colors.accent, fontWeight: '600' }}>
                {score.gap} points to your {score.target} target
              </div>
            ) : (
              <div style={{ fontSize: '14px', color: colors.success, fontWeight: '600' }}>
                ✓ At or above your {score.target} target!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Tab Navigation ── */}
      <div style={{
        display: 'flex', gap: '4px', marginBottom: '24px',
        background: colors.bgMuted, borderRadius: '12px', padding: '4px',
      }}>
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            style={{
              flex: 1, padding: '10px 16px', border: 'none', borderRadius: '10px',
              background: activeSection === section.id ? colors.bg : 'transparent',
              color: activeSection === section.id ? colors.text : colors.textMuted,
              fontSize: '13px', fontWeight: '600', cursor: 'pointer',
              boxShadow: activeSection === section.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              transition: 'all 0.2s ease',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
            }}
          >
            <span style={{ fontSize: '15px' }}>{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      {activeSection === 'diagnosis' && renderDiagnosis()}
      {activeSection === 'plan' && renderStudyPlan()}
      {activeSection === 'trends' && renderTrends()}

      {/* ── Bottom CTA ── */}
      <div style={{
        marginTop: '32px', padding: '24px', textAlign: 'center',
        background: colors.bgSubtle, borderRadius: '16px', border: `1px solid ${colors.border}`,
      }}>
        <div style={{ fontSize: '16px', fontWeight: '700', color: colors.text, marginBottom: '8px' }}>
          Ready to start improving?
        </div>
        <div style={{ fontSize: '14px', color: colors.textMuted, marginBottom: '16px' }}>
          {activeSection === 'plan'
            ? 'Go to your dashboard to begin Week 1 of your study plan'
            : 'Switch to the Study Plan tab to see your personalized weekly plan'
          }
        </div>
        <button
          onClick={() => activeSection === 'plan' && onBack ? onBack() : setActiveSection('plan')}
          style={{
            padding: '12px 32px', borderRadius: '12px', border: 'none',
            background: colors.accent, color: 'white',
            fontSize: '15px', fontWeight: '600', cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)',
          }}
        >
          {activeSection === 'plan' ? 'Go to Dashboard' : 'View Study Plan →'}
        </button>
      </div>
    </div>
  );
};

export default DiagnosticReport;
