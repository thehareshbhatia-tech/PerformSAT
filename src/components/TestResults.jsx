/**
 * TestResults Component
 * Displays practice test results in Test Innovators style
 * Features: Tab navigation, score badges with progress bars,
 * difficulty donut charts, and content domain bars
 */

import React, { useState, useMemo, useCallback } from 'react';
import { colors, radius, shadows } from '../design/tokens';
import { cardStyles, buttonStyles } from '../design/components';
import { ChartBarIcon, ArrowRightIcon, CircleDotIcon } from '../design/icons';
import {
  convertToSATScore, isAnswerCorrect, estimatePercentile,
  inferDomain, SAT_MATH_DOMAINS, DOMAIN_DISPLAY_NAMES,
  adaptDiagnosticForUI,
} from '../services/scoring';
import { generateDiagnosticNarrative } from '../services/diagnosticNarrativeService';

// Donut Chart Component for difficulty breakdown
const DonutChart = ({ correct, incorrect, unanswered, label, size = 100 }) => {
  const total = correct + incorrect + unanswered;
  if (total === 0) return null;

  const chartRadius = 40;
  const circumference = 2 * Math.PI * chartRadius;

  const correctPct = (correct / total) * 100;
  const incorrectPct = (incorrect / total) * 100;
  const unansweredPct = (unanswered / total) * 100;

  const correctDash = (correctPct / 100) * circumference;
  const incorrectDash = (incorrectPct / 100) * circumference;
  const unansweredDash = (unansweredPct / 100) * circumference;

  const correctOffset = 0;
  const incorrectOffset = -correctDash;
  const unansweredOffset = -(correctDash + incorrectDash);

  return (
    <div style={{ textAlign: 'center' }}>
      <svg width={size} height={size} viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={chartRadius}
          fill="none"
          stroke={colors.surface.grayDark}
          strokeWidth="12"
        />
        {/* Unanswered (gray) - draw first as base */}
        {unanswered > 0 && (
          <circle
            cx="50"
            cy="50"
            r={chartRadius}
            fill="none"
            stroke={colors.text.muted}
            strokeWidth="12"
            strokeDasharray={`${unansweredDash} ${circumference}`}
            strokeDashoffset={unansweredOffset}
            transform="rotate(-90 50 50)"
          />
        )}
        {/* Incorrect (red) */}
        {incorrect > 0 && (
          <circle
            cx="50"
            cy="50"
            r={chartRadius}
            fill="none"
            stroke={colors.semantic.error}
            strokeWidth="12"
            strokeDasharray={`${incorrectDash} ${circumference}`}
            strokeDashoffset={incorrectOffset}
            transform="rotate(-90 50 50)"
          />
        )}
        {/* Correct (green) - draw last on top */}
        {correct > 0 && (
          <circle
            cx="50"
            cy="50"
            r={chartRadius}
            fill="none"
            stroke={colors.semantic.success}
            strokeWidth="12"
            strokeDasharray={`${correctDash} ${circumference}`}
            strokeDashoffset={correctOffset}
            transform="rotate(-90 50 50)"
          />
        )}
      </svg>
      <p style={{
        fontWeight: '600',
        fontSize: '14px',
        color: colors.text.secondary,
        marginTop: '8px'
      }}>
        {label}
      </p>
    </div>
  );
};

// Score Badge Component with progress bar
const ScoreBadge = ({ score, maxScore, size = 'large' }) => {
  const percentage = (score / maxScore) * 100;
  const isLarge = size === 'large';

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: isLarge ? '24px' : '16px',
      justifyContent: 'center'
    }}>
      {/* Score circle */}
      <div style={{
        width: isLarge ? '100px' : '70px',
        height: isLarge ? '100px' : '70px',
        borderRadius: radius.full,
        background: colors.accent.teal,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.text.inverse,
        fontSize: isLarge ? '32px' : '22px',
        fontWeight: '700',
        boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)'
      }}>
        {score}
      </div>

      {/* Progress bar */}
      <div style={{ flex: 1, maxWidth: isLarge ? '300px' : '200px' }}>
        <div style={{
          height: isLarge ? '12px' : '8px',
          background: colors.surface.grayDark,
          borderRadius: '6px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            width: `${percentage}%`,
            height: '100%',
            background: colors.accent.teal,
            borderRadius: '6px',
            transition: 'width 0.5s ease-out'
          }} />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '4px',
          fontSize: isLarge ? '13px' : '11px',
          color: colors.text.secondary
        }}>
          <span>{isLarge ? '400' : '200'}</span>
          <span>{maxScore}</span>
        </div>
      </div>
    </div>
  );
};

// Domain Bar Component
const DomainBar = ({ domain, correct, total, maxTotal }) => {
  const displayName = DOMAIN_DISPLAY_NAMES[domain] || domain;
  const barWidth = maxTotal > 0 ? (correct / maxTotal) * 100 : 0;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '12px'
    }}>
      <span style={{
        width: '220px',
        fontSize: '14px',
        color: colors.text.secondary,
        flexShrink: 0
      }}>
        {displayName}
      </span>
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div style={{
          flex: 1,
          height: '24px',
          background: colors.surface.grayDark,
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${barWidth}%`,
            height: '100%',
            background: colors.semantic.success,
            borderRadius: '4px',
            transition: 'width 0.3s ease'
          }} />
        </div>
        <span style={{
          fontWeight: '600',
          fontSize: '14px',
          color: colors.text.secondary,
          minWidth: '24px',
          textAlign: 'right'
        }}>
          {correct}
        </span>
      </div>
    </div>
  );
};

// Legend Component for donut charts
const DonutLegend = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    marginTop: '16px',
    fontSize: '12px'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '12px', height: '12px', background: colors.semantic.success, borderRadius: '2px' }} />
      <span style={{ color: colors.text.secondary }}>Correct</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '12px', height: '12px', background: colors.semantic.error, borderRadius: '2px' }} />
      <span style={{ color: colors.text.secondary }}>Incorrect</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '12px', height: '12px', background: colors.text.muted, borderRadius: '2px' }} />
      <span style={{ color: colors.text.secondary }}>Unanswered</span>
    </div>
  </div>
);

const TestResults = ({
  test,
  answers,
  diagnosticData,
  diagnosticReport,
  practiceTestResults,
  onBack,
  onRetake,
  onReview,
  onReviewModule,
  onOpenDiagnosticReport,
  user,
}) => {
  const [activeTab, setActiveTab] = useState('summary');

  const diagUI = useMemo(
    () => adaptDiagnosticForUI(diagnosticReport, diagnosticData),
    [diagnosticReport, diagnosticData]
  );

  const [aiNarrative, setAiNarrative] = useState(null);
  const [aiNarrativeLoading, setAiNarrativeLoading] = useState(false);
  const [aiNarrativeError, setAiNarrativeError] = useState(null);

  const handleGenerateNarrative = useCallback(async () => {
    if (aiNarrativeLoading || !diagnosticReport) return;
    setAiNarrativeLoading(true);
    setAiNarrativeError(null);
    try {
      const { narrative } = await generateDiagnosticNarrative(
        diagnosticReport,
        { targetScore: user?.targetScore, testDate: user?.testDate }
      );
      setAiNarrative(narrative);
    } catch (err) {
      console.error('[TestResults] AI narrative error:', err);
      setAiNarrativeError(err.message || 'Failed to generate AI diagnosis');
    } finally {
      setAiNarrativeLoading(false);
    }
  }, [diagnosticReport, user, aiNarrativeLoading]);

  // Calculate scores
  const calculateModuleScore = (moduleIndex) => {
    const module = test.modules[moduleIndex];
    let correct = 0;
    module.questions.forEach((q, qIdx) => {
      const key = `${moduleIndex}-${qIdx}`;
      if (isAnswerCorrect(q, answers[key])) correct++;
    });
    return { correct, total: module.questions.length };
  };

  const calculateTotalScore = () => {
    let total = 0;
    test.modules.forEach((_, idx) => {
      total += calculateModuleScore(idx).correct;
    });
    return total;
  };

  // Calculate difficulty breakdown for a module
  const calculateDifficultyBreakdown = (moduleIndex) => {
    const module = test.modules[moduleIndex];
    const breakdown = {
      easy: { correct: 0, incorrect: 0, unanswered: 0 },
      medium: { correct: 0, incorrect: 0, unanswered: 0 },
      hard: { correct: 0, incorrect: 0, unanswered: 0 }
    };

    module.questions.forEach((q, qIdx) => {
      const key = `${moduleIndex}-${qIdx}`;
      const userAnswer = answers[key];
      const difficulty = q.difficulty || 'medium';

      if (!userAnswer) {
        breakdown[difficulty].unanswered++;
      } else if (isAnswerCorrect(q, userAnswer)) {
        breakdown[difficulty].correct++;
      } else {
        breakdown[difficulty].incorrect++;
      }
    });

    return breakdown;
  };

  // Calculate domain breakdown for a module using the shared inferDomain helper
  const calculateDomainBreakdown = (moduleIndex) => {
    const module = test.modules[moduleIndex];
    const domains = {};
    SAT_MATH_DOMAINS.forEach(d => { domains[d] = { correct: 0, total: 0 }; });

    module.questions.forEach((q, qIdx) => {
      const key = `${moduleIndex}-${qIdx}`;
      const userAnswer = answers[key];
      const domain = inferDomain(q.skills);

      domains[domain].total++;
      if (userAnswer && isAnswerCorrect(q, userAnswer)) {
        domains[domain].correct++;
      }
    });

    return domains;
  };

  // Determine if Module 2 is "Hard" based on Module 1 performance
  const isModule2Hard = () => {
    if (test.modules.length < 2) return false;
    const mod1Score = calculateModuleScore(0);
    const percentage = (mod1Score.correct / mod1Score.total) * 100;
    return percentage >= 60; // Threshold for unlocking hard module
  };

  const totalQuestions = test.modules.reduce((sum, m) => sum + m.questions.length, 0);
  const totalCorrect = calculateTotalScore();
  const satScore = convertToSATScore(totalCorrect, totalQuestions);

  const allQuestionEntries = test.modules.flatMap((mod, modIdx) =>
    mod.questions.map((q, qIdx) => {
      const key = `${modIdx}-${qIdx}`;
      const userAnswer = answers[key];
      const isAnswered = userAnswer !== undefined && userAnswer !== null && userAnswer !== '';
      return { key, question: q, isAnswered, isCorrect: isAnswered && isAnswerCorrect(q, userAnswer) };
    })
  );

  // Tab navigation
  const tabs = [
    { id: 'summary', label: 'TEST OVERVIEW' },
    { id: 'diagnostic', label: 'DIAGNOSTIC INSIGHTS' },
    ...test.modules.map((mod, idx) => ({
      id: `module-${idx}`,
      label: `MATH: MODULE ${idx + 1}`
    }))
  ];

  const renderSummaryView = () => {
    const mod2Hard = isModule2Hard();
    const mod1 = calculateModuleScore(0);
    const mod2 = test.modules.length > 1 ? calculateModuleScore(1) : null;
    const targetScore = user?.targetScore || 700;
    const gap = Math.max(0, targetScore - satScore);
    const isAtTarget = gap <= 0;
    const accuracyPct = Math.round((totalCorrect / totalQuestions) * 100);

    const percentile = estimatePercentile(satScore);

    // ── Difficulty aggregates ──
    const diffAll = { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } };
    test.modules.forEach((_, modIdx) => {
      const bd = calculateDifficultyBreakdown(modIdx);
      ['easy', 'medium', 'hard'].forEach(d => {
        diffAll[d].correct += bd[d].correct;
        diffAll[d].total += bd[d].correct + bd[d].incorrect + bd[d].unanswered;
      });
    });

    // ── Domain aggregates (always all 4 SAT domains) ──
    const domAll = {};
    SAT_MATH_DOMAINS.forEach(d => { domAll[d] = { correct: 0, total: 0 }; });
    test.modules.forEach((_, modIdx) => {
      const bd = calculateDomainBreakdown(modIdx);
      Object.entries(bd).forEach(([dom, vals]) => {
        if (!domAll[dom]) domAll[dom] = { correct: 0, total: 0 };
        domAll[dom].correct += vals.correct;
        domAll[dom].total += vals.total;
      });
    });
    const domEntries = SAT_MATH_DOMAINS
      .filter(d => domAll[d].total > 0)
      .map(d => [d, domAll[d]])
      .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total));

    // ── Telemetry extraction (current attempt) ──
    const qDetails = diagnosticData?.questionDetails || {};
    const qEntries = Object.entries(qDetails);
    const hasTelemetry = qEntries.length > 0;
    const totalTimeSpent = qEntries.reduce((s, [, q]) => s + (q.timeSpent || 0), 0);
    const avgTimePerQ = hasTelemetry ? totalTimeSpent / qEntries.length : 0;

    const incorrectEntries = qEntries.filter(([, q]) => !q.isCorrect);
    const unansweredCount = qEntries.filter(([key]) => !answers[key]).length;

    const carelessCount = incorrectEntries.filter(([, q]) =>
      (q.difficulty === 'easy') || (avgTimePerQ > 0 && (q.timeSpent || 0) < avgTimePerQ * 0.5)
    ).length;
    const timePressureCount = incorrectEntries.filter(([, q]) =>
      (q.timeSpent || 0) > avgTimePerQ * 1.5
    ).length;
    const contentGapCount = Math.max(0, incorrectEntries.length - carelessCount - timePressureCount);

    const totalAnswerChanges = qEntries.reduce((s, [, q]) => s + (q.answerChanges || 0), 0);
    const reviewedCount = diagnosticData?.markedForReviewCount || 0;
    const navPattern = diagnosticData?.navigationPattern || 'linear';

    // First-half vs second-half accuracy (stamina)
    const halfIdx = Math.floor(qEntries.length / 2);
    const firstHalf = qEntries.slice(0, halfIdx);
    const secondHalf = qEntries.slice(halfIdx);
    const firstHalfAcc = firstHalf.length > 0 ? firstHalf.filter(([, q]) => q.isCorrect).length / firstHalf.length : 0;
    const secondHalfAcc = secondHalf.length > 0 ? secondHalf.filter(([, q]) => q.isCorrect).length / secondHalf.length : 0;
    const staminaDrop = Math.round((firstHalfAcc - secondHalfAcc) * 100);

    // Difficulty cliff: biggest accuracy drop between adjacent levels
    const diffLevels = ['easy', 'medium', 'hard'];
    const diffPcts = diffLevels.map(d => diffAll[d].total > 0 ? Math.round((diffAll[d].correct / diffAll[d].total) * 100) : null);
    let diffCliff = null;
    for (let i = 0; i < diffPcts.length - 1; i++) {
      if (diffPcts[i] !== null && diffPcts[i + 1] !== null) {
        const drop = diffPcts[i] - diffPcts[i + 1];
        if (!diffCliff || drop > diffCliff.drop) {
          diffCliff = { from: diffLevels[i], to: diffLevels[i + 1], drop };
        }
      }
    }

    // Weakest and strongest domain
    const weakestDom = domEntries.length > 0 ? domEntries[0] : null;
    const strongestDom = domEntries.length > 0 ? domEntries[domEntries.length - 1] : null;

    // Easy misses (high-value recoverable points)
    const easyMissed = qEntries.filter(([, q]) => q.difficulty === 'easy' && !q.isCorrect).length;

    // Module delta
    const mod1Pct = mod1.total > 0 ? Math.round((mod1.correct / mod1.total) * 100) : 0;
    const mod2Pct = mod2 && mod2.total > 0 ? Math.round((mod2.correct / mod2.total) * 100) : null;

    // ── Historical attempt data ──
    const testHistory = practiceTestResults?.[test.id];
    const attempts = testHistory?.attempts || [];
    const pastAttempts = attempts.filter(a => a.scaledScore !== satScore || a.completedAt !== attempts[attempts.length - 1]?.completedAt);
    const hasHistory = attempts.length > 1;
    const bestScore = testHistory?.bestScaledScore || satScore;
    const firstAttemptScore = attempts.length > 0 ? attempts[0].scaledScore : satScore;
    const improvementFromFirst = satScore - firstAttemptScore;

    // Linear gauge geometry (200–800 scale)
    const scorePct = ((satScore - 200) / 600) * 100;
    const targetPct = ((targetScore - 200) / 600) * 100;
    const accentHex = isAtTarget ? '#22c55e' : '#06b6d4';

    const formatTime = (seconds) => {
      if (seconds < 60) return `${Math.round(seconds)}s`;
      const m = Math.floor(seconds / 60);
      const s = Math.round(seconds % 60);
      return s > 0 ? `${m}m ${s}s` : `${m}m`;
    };

    const cardBase = {
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'saturate(180%) blur(24px)',
      WebkitBackdropFilter: 'saturate(180%) blur(24px)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.6)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
      padding: '32px',
    };
    const sectionTitle = { fontSize: '11px', fontWeight: '700', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px 0' }}>

        {/* ═══════════ BLOCK 1: SCORE + MAIN ACTIONS ═══════════ */}
        <div style={{ ...cardBase, padding: '40px 24px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Score number */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '72px', fontWeight: '800', color: colors.text.primary, letterSpacing: '-0.05em', lineHeight: 1 }}>
              {satScore}
            </div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.secondary, marginTop: '8px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>Math Score</div>
          </div>

          {/* Linear score gauge (box-and-whisker style) */}
          <div style={{ width: '100%', maxWidth: '480px', padding: '0 8px', marginBottom: '40px' }}>
            {/* Score + Target labels above the bar */}
            <div style={{ position: 'relative', height: '32px', marginBottom: '6px' }}>
              {/* Score label */}
              <div style={{
                position: 'absolute',
                left: `${scorePct}%`, transform: 'translateX(-50%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
                <div style={{
                  fontSize: '13px', fontWeight: '800', color: accentHex,
                  background: `${accentHex}12`, padding: '4px 10px', borderRadius: '8px',
                  fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap',
                  boxShadow: `0 2px 8px ${accentHex}20`
                }}>
                  {satScore}
                </div>
              </div>
              {/* Target label (only if not overlapping score) */}
              {!isAtTarget && Math.abs(scorePct - targetPct) > 8 && (
                <div style={{
                  position: 'absolute',
                  left: `${targetPct}%`, transform: 'translateX(-50%)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                }}>
                  <div style={{
                    fontSize: '11px', fontWeight: '700', color: '#f97316',
                    whiteSpace: 'nowrap', marginTop: '4px'
                  }}>
                    Target {targetScore}
                  </div>
                </div>
              )}
            </div>

            {/* The gauge track */}
            <div style={{ position: 'relative', height: '16px' }}>
              {/* Background track with range zones */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '8px', overflow: 'hidden',
                display: 'flex',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)'
              }}>
                <div style={{ flex: 1, background: 'linear-gradient(90deg, #fee2e2, #fef08a)' }} />
                <div style={{ flex: 1, background: 'linear-gradient(90deg, #fef08a, #bbf7d0)' }} />
                <div style={{ flex: 1, background: 'linear-gradient(90deg, #bbf7d0, #86efac)' }} />
              </div>

              {/* Filled portion up to score */}
              <div style={{
                position: 'absolute', top: '2px', bottom: '2px', left: '2px',
                width: `calc(${scorePct}% - 4px)`,
                borderRadius: '6px',
                background: `linear-gradient(90deg, ${accentHex}99, ${accentHex})`,
                boxShadow: `0 0 12px ${accentHex}50`,
                transition: 'width 1s cubic-bezier(0.34,1.56,0.64,1)',
              }} />

              {/* Target marker line */}
              {!isAtTarget && (
                <div style={{
                  position: 'absolute', top: '-6px', bottom: '-6px',
                  left: `${targetPct}%`, transform: 'translateX(-50%)',
                  width: '2px', background: '#f97316',
                  borderRadius: '1px',
                  boxShadow: '0 0 4px rgba(249,115,22,0.4)',
                }}>
                  <div style={{
                    position: 'absolute', top: '-2px', left: '50%', transform: 'translateX(-50%)',
                    width: '8px', height: '4px', borderRadius: '2px 2px 0 0',
                    background: '#f97316',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: '-2px', left: '50%', transform: 'translateX(-50%)',
                    width: '8px', height: '4px', borderRadius: '0 0 2px 2px',
                    background: '#f97316',
                  }} />
                </div>
              )}

              {/* Score marker dot */}
              <div style={{
                position: 'absolute', top: '50%', left: `${scorePct}%`,
                transform: 'translate(-50%, -50%)',
                width: '22px', height: '22px', borderRadius: '50%',
                background: '#fff',
                border: `5px solid ${accentHex}`,
                boxShadow: `0 2px 12px ${accentHex}60, 0 1px 3px rgba(0,0,0,0.1)`,
                transition: 'left 1s cubic-bezier(0.34,1.56,0.64,1)',
              }} />
            </div>

            {/* Scale labels */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              {[200, 400, 600, 800].map(v => (
                <span key={v} style={{ fontSize: '11px', fontWeight: '600', color: colors.text.muted, fontVariantNumeric: 'tabular-nums' }}>{v}</span>
              ))}
            </div>
          </div>

          {/* Primary Action Row */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
            <button onClick={onReview} style={{
              flex: '1 1 auto', maxWidth: '320px',
              padding: '16px 28px', background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)', color: '#fff',
              border: '1px solid #020617', borderRadius: '18px',
              fontSize: '15px', fontWeight: '600', cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(15,23,42,0.2), inset 0 1px 1px rgba(255,255,255,0.1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}>
              Review Answers <ArrowRightIcon size={16} />
            </button>
            <button onClick={onRetake} style={{
              flex: '0 1 auto',
              padding: '16px 28px', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)', color: colors.text.primary,
              border: '1px solid rgba(0,0,0,0.08)', borderRadius: '18px',
              fontSize: '15px', fontWeight: '600', cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03), inset 0 1px 1px #fff',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
              Retake
            </button>
            <button onClick={onBack} style={{
              flex: '0 1 auto',
              padding: '16px 28px', background: 'transparent', color: colors.text.secondary,
              border: '1px solid transparent', borderRadius: '18px',
              fontSize: '15px', fontWeight: '600', cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
              Back to Tests
            </button>
          </div>
        </div>

        {/* ═══════════ SECONDARY STATS ROW ═══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          <div style={{ ...cardBase, padding: '24px' }}>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Percentile</div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: percentile >= 75 ? '#22c55e' : percentile >= 50 ? '#06b6d4' : '#eab308', marginTop: '4px', lineHeight: 1 }}>{percentile}th</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Accuracy</div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: accuracyPct >= 80 ? '#22c55e' : accuracyPct >= 60 ? '#06b6d4' : '#eab308', marginTop: '4px', lineHeight: 1 }}>{accuracyPct}%</div>
              </div>
            </div>
          </div>
          
          <div style={{ ...cardBase, padding: '24px', display: 'flex', gap: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Module 1</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: colors.text.primary, marginTop: '4px' }}>{mod1Pct}%</div>
            </div>
            {mod2Pct !== null && (
              <div style={{ flex: 1, textAlign: 'right' }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Module 2 {mod2Hard && <span style={{ color: '#f97316' }}>(Hard)</span>}</div>
                <div style={{ fontSize: '20px', fontWeight: '700', color: colors.text.primary, marginTop: '4px' }}>{mod2Pct}%</div>
              </div>
            )}
          </div>
        </div>

        {/* ═══════════ BLOCK 2: ATTEMPT DATA ═══════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* ── 2A  ATTEMPT SNAPSHOT ── */}
          <div style={cardBase}>
            <div style={sectionTitle}>Attempt Snapshot</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '16px' }}>
              {[
                { label: 'Total Time', value: hasTelemetry ? formatTime(totalTimeSpent) : '—', sub: null },
                { label: 'Avg / Question', value: hasTelemetry ? formatTime(avgTimePerQ) : '—', sub: hasTelemetry && avgTimePerQ > 90 ? 'Slow' : null, subColor: '#f97316' },
                { label: 'Incorrect', value: `${incorrectEntries.length}`, sub: totalQuestions > 0 ? `of ${totalQuestions}` : null, subColor: '#ef4444' },
                { label: 'Unanswered', value: `${unansweredCount}`, sub: null, subColor: '#eab308' },
                { label: 'Easy Missed', value: `${easyMissed}`, sub: easyMissed > 0 ? 'Recoverable' : null, subColor: '#f97316' },
                { label: 'Flagged', value: `${reviewedCount}`, sub: null },
              ].map((m, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '12px 8px' }}>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: colors.text.primary, fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{m.label}</div>
                  {m.sub && <div style={{ fontSize: '10px', fontWeight: '700', color: m.subColor || colors.text.muted, marginTop: '2px' }}>{m.sub}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* ── 2B  POINT-LOSS BREAKDOWN ── */}
          {incorrectEntries.length > 0 && (
            <div style={cardBase}>
              <div style={sectionTitle}>Point-Loss Breakdown</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Careless Errors', count: carelessCount, color: '#eab308', desc: 'Easy Qs wrong or rushed answers' },
                  { label: 'Time Pressure', count: timePressureCount, color: '#f97316', desc: 'Spent 50%+ more time than average' },
                  { label: 'Content Gaps', count: contentGapCount, color: '#ef4444', desc: 'Skill or concept not yet learned' },
                ].map(b => {
                  const pct = incorrectEntries.length > 0 ? Math.round((b.count / incorrectEntries.length) * 100) : 0;
                  return (
                    <div key={b.label}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', minWidth: 0 }}>
                          <span style={{ fontSize: '14px', fontWeight: '700', color: colors.text.primary, whiteSpace: 'nowrap' }}>{b.label}</span>
                          <span style={{ fontSize: '12px', color: colors.text.muted, whiteSpace: 'nowrap' }}>{b.desc}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', flexShrink: 0 }}>
                          <span style={{ fontSize: '18px', fontWeight: '800', color: b.color, fontVariantNumeric: 'tabular-nums' }}>{b.count}</span>
                          <span style={{ fontSize: '12px', fontWeight: '600', color: colors.text.muted }}>{pct}%</span>
                        </div>
                      </div>
                      <div style={{ height: '8px', background: 'rgba(0,0,0,0.04)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                          width: `${pct}%`, height: '100%', background: b.color, borderRadius: '4px',
                          transition: 'width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }} />
                      </div>
                    </div>
                  );
                })}
                <div style={{ fontSize: '12px', color: colors.text.muted, marginTop: '4px', fontVariantNumeric: 'tabular-nums' }}>
                  {incorrectEntries.length} incorrect out of {totalQuestions} total
                </div>
              </div>
            </div>
          )}

          {/* ── 2C  PERFORMANCE BY DIFFICULTY ── */}
          <div style={cardBase}>
            <div style={sectionTitle}>Performance by Difficulty</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {diffLevels.map(d => {
                const stats = diffAll[d];
                const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                const accent = d === 'easy' ? '#22c55e' : d === 'medium' ? '#06b6d4' : '#f97316';
                return (
                  <div key={d} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: accent, fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>{pct}%</div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: colors.text.secondary, marginTop: '6px', textTransform: 'capitalize' }}>{d}</div>
                    <div style={{ fontSize: '11px', color: colors.text.muted, marginTop: '2px', fontVariantNumeric: 'tabular-nums' }}>{stats.correct}/{stats.total}</div>
                    <div style={{ height: '6px', background: 'rgba(0,0,0,0.04)', borderRadius: '3px', overflow: 'hidden', marginTop: '10px' }}>
                      <div style={{ width: `${pct}%`, height: '100%', background: accent, borderRadius: '3px', transition: 'width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }} />
                    </div>
                    {diffCliff && diffCliff.to === d && diffCliff.drop > 10 && (
                      <div style={{ fontSize: '10px', fontWeight: '700', color: '#ef4444', marginTop: '6px' }}>-{diffCliff.drop}pp drop</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── 2D  DOMAIN PERFORMANCE ── */}
          {domEntries.length > 0 && (
            <div style={cardBase}>
              <div style={sectionTitle}>Domain Performance</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {domEntries.map(([domain, stats]) => {
                  const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                  const isWeakest = weakestDom && weakestDom[0] === domain;
                  const isStrongest = strongestDom && strongestDom[0] === domain;
                  const barColor = pct >= 80 ? '#22c55e' : pct >= 60 ? '#06b6d4' : pct >= 40 ? '#f97316' : '#ef4444';
                  return (
                    <div key={domain}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', minWidth: 0 }}>
                          <span style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}>
                            {DOMAIN_DISPLAY_NAMES[domain] || domain}
                          </span>
                          {isWeakest && <span style={{ fontSize: '10px', fontWeight: '700', color: '#ef4444', background: 'rgba(239,68,68,0.08)', padding: '2px 6px', borderRadius: '6px' }}>Weakest</span>}
                          {isStrongest && domEntries.length > 1 && <span style={{ fontSize: '10px', fontWeight: '700', color: '#22c55e', background: 'rgba(34,197,94,0.08)', padding: '2px 6px', borderRadius: '6px' }}>Strongest</span>}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', flexShrink: 0 }}>
                          <span style={{ fontSize: '16px', fontWeight: '800', color: barColor, fontVariantNumeric: 'tabular-nums' }}>{pct}%</span>
                          <span style={{ fontSize: '11px', color: colors.text.muted, fontVariantNumeric: 'tabular-nums' }}>{stats.correct}/{stats.total}</span>
                        </div>
                      </div>
                      <div style={{ height: '8px', background: 'rgba(0,0,0,0.04)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                          width: `${pct}%`, height: '100%', background: barColor, borderRadius: '4px',
                          transition: 'width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── 2E  STAMINA & BEHAVIOR ── */}
          {hasTelemetry && (
            <div style={cardBase}>
              <div style={sectionTitle}>Stamina &amp; Behavior</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>

                {/* First-half vs second-half */}
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.5)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>Accuracy Split</div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '22px', fontWeight: '800', color: colors.text.primary, fontVariantNumeric: 'tabular-nums' }}>{Math.round(firstHalfAcc * 100)}%</div>
                      <div style={{ fontSize: '11px', color: colors.text.muted, marginTop: '4px' }}>1st Half</div>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: staminaDrop > 5 ? '#f97316' : staminaDrop < -5 ? '#22c55e' : colors.text.muted, paddingBottom: '4px' }}>
                      {staminaDrop > 0 ? `−${staminaDrop}pp` : staminaDrop < 0 ? `+${Math.abs(staminaDrop)}pp` : '='}
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '22px', fontWeight: '800', color: colors.text.primary, fontVariantNumeric: 'tabular-nums' }}>{Math.round(secondHalfAcc * 100)}%</div>
                      <div style={{ fontSize: '11px', color: colors.text.muted, marginTop: '4px' }}>2nd Half</div>
                    </div>
                  </div>
                </div>

                {/* Behavior metrics */}
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.5)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>Test Behavior</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { label: 'Answer Changes', value: totalAnswerChanges },
                      { label: 'Flagged for Review', value: reviewedCount },
                      { label: 'Navigation Style', value: navPattern === 'strategic-skip' ? 'Strategic Skip' : navPattern === 'jumping' ? 'Jumping' : 'Linear' },
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '13px', color: colors.text.secondary }}>{row.label}</span>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: colors.text.primary, fontVariantNumeric: 'tabular-nums' }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ═══════════ BLOCK 3: SCORE HISTORY ═══════════ */}
        {(() => {
          if (!hasHistory && attempts.length <= 1) {
            return (
              <div style={cardBase}>
                <div style={sectionTitle}>Score Trajectory</div>
                <div style={{ textAlign: 'center', padding: '16px 0' }}>
                  <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                    This is your first recorded attempt. Retake to start tracking progress.
                  </div>
                </div>
              </div>
            );
          }

          const sortedAttempts = [...attempts].sort((a, b) => new Date(a.completedAt) - new Date(b.completedAt));
          const scores = sortedAttempts.map(a => a.scaledScore);
          const minS = Math.min(...scores, targetScore) - 20;
          const maxS = Math.max(...scores, targetScore) + 20;
          const range = maxS - minS || 1;

          const chartW = 340;
          const chartH = 100;
          const padX = 30;
          const padY = 10;
          const plotW = chartW - padX * 2;
          const plotH = chartH - padY * 2;

          const pts = scores.map((s, i) => ({
            x: padX + (scores.length > 1 ? (i / (scores.length - 1)) * plotW : plotW / 2),
            y: padY + plotH - ((s - minS) / range) * plotH,
            score: s,
            idx: i + 1,
          }));
          const targetY = padY + plotH - ((targetScore - minS) / range) * plotH;
          const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');

          return (
            <div style={cardBase}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={sectionTitle}>Score Trajectory</div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  {[
                    { label: 'Best', value: bestScore },
                    { label: 'Attempts', value: attempts.length },
                    ...(improvementFromFirst !== 0 ? [{ label: 'Change', value: `${improvementFromFirst > 0 ? '+' : ''}${improvementFromFirst}` }] : []),
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '16px', fontWeight: '800', color: colors.text.primary, fontVariantNumeric: 'tabular-nums' }}>{s.value}</div>
                      <div style={{ fontSize: '10px', fontWeight: '600', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width={chartW} height={chartH + 20} viewBox={`0 0 ${chartW} ${chartH + 20}`} style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor={`${accentHex}66`} />
                      <stop offset="100%" stopColor={accentHex} />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <g transform={`translate(0, 10)`}>
                    {/* Grid lines */}
                    {[0, 0.25, 0.5, 0.75, 1].map((f, i) => {
                      const y = padY + plotH - f * plotH;
                      const val = Math.round(minS + f * range);
                      return (
                        <g key={i}>
                          <line x1={padX} y1={y} x2={chartW - padX} y2={y} stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
                          <text x={padX - 8} y={y + 3} textAnchor="end" fontSize="9" fill="rgba(0,0,0,0.3)" fontWeight="600" fontVariantNumeric="tabular-nums">{val}</text>
                        </g>
                      );
                    })}
                    {/* Target line */}
                    <line x1={padX} y1={targetY} x2={chartW - padX} y2={targetY}
                      stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                    <text x={chartW - padX + 8} y={targetY + 3} fontSize="9" fill="#f97316" fontWeight="700">Target</text>
                    
                    {/* Score line */}
                    {pts.length > 1 && (
                      <path d={linePath} fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0px 4px 6px rgba(6,182,212,0.3))" />
                    )}
                    
                    {/* Data points */}
                    {pts.map((p, i) => (
                      <g key={i}>
                        {i === pts.length - 1 && (
                          <circle cx={p.x} cy={p.y} r={12} fill={`${accentHex}20`} filter="blur(4px)" />
                        )}
                        <circle cx={p.x} cy={p.y} r={i === pts.length - 1 ? 6 : 4}
                          fill={i === pts.length - 1 ? accentHex : '#fff'}
                          stroke={i === pts.length - 1 ? '#fff' : accentHex} strokeWidth={i === pts.length - 1 ? 2 : 2.5} 
                          boxShadow={i === pts.length - 1 ? `0 0 10px ${accentHex}` : 'none'}
                          style={{ transition: 'all 0.3s ease' }}
                        />
                        <text x={p.x} y={p.y - (i === pts.length - 1 ? 14 : 12)} textAnchor="middle" fontSize="10" fontWeight="800"
                          fill={i === pts.length - 1 ? accentHex : 'rgba(0,0,0,0.5)'} fontVariantNumeric="tabular-nums">{p.score}</text>
                      </g>
                    ))}
                  </g>
                </svg>
              </div>
            </div>
          );
        })()}
      </div>
    );
  };

  const renderModuleSummary = (moduleIndex) => {
    const module = test.modules[moduleIndex];
    const difficultyBreakdown = calculateDifficultyBreakdown(moduleIndex);
    const domainBreakdown = calculateDomainBreakdown(moduleIndex);
    const moduleScore = calculateModuleScore(moduleIndex);

    // Find max correct for scaling domain bars
    const maxCorrect = Math.max(
      ...Object.values(domainBreakdown).map(d => d.correct),
      1
    );

    return (
      <div>
        {/* Module Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '500',
            color: colors.text.primary
          }}>
            Math: Module {moduleIndex + 1} Summary
          </h2>
          <button
            onClick={() => onReviewModule ? onReviewModule(moduleIndex) : onReview()}
            style={{
              padding: '10px 20px',
              background: colors.accent.teal,
              color: colors.text.inverse,
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            VIEW YOUR ANSWERS
            <ArrowRightIcon size={16} color={colors.text.inverse} />
          </button>
        </div>

        {/* Score Summary */}
        <div style={{
          background: colors.surface.offWhite,
          borderRadius: radius.md,
          padding: '20px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '14px', color: colors.text.secondary }}>Module Score: </span>
          <span style={{ fontSize: '24px', fontWeight: '600', color: colors.text.primary }}>
            {moduleScore.correct}/{moduleScore.total}
          </span>
          <span style={{ fontSize: '14px', color: colors.text.secondary, marginLeft: '8px' }}>
            ({Math.round((moduleScore.correct / moduleScore.total) * 100)}%)
          </span>
        </div>

        {/* Difficulty Breakdown */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: colors.text.primary,
            marginBottom: '20px'
          }}>
            How you did, by difficulty:
          </h3>

          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '24px'
          }}>
            <DonutChart
              correct={difficultyBreakdown.easy.correct}
              incorrect={difficultyBreakdown.easy.incorrect}
              unanswered={difficultyBreakdown.easy.unanswered}
              label="Easy"
            />
            <DonutChart
              correct={difficultyBreakdown.medium.correct}
              incorrect={difficultyBreakdown.medium.incorrect}
              unanswered={difficultyBreakdown.medium.unanswered}
              label="Medium"
            />
            <DonutChart
              correct={difficultyBreakdown.hard.correct}
              incorrect={difficultyBreakdown.hard.incorrect}
              unanswered={difficultyBreakdown.hard.unanswered}
              label="Hard"
            />
          </div>

          <DonutLegend />
        </div>

        {/* Domain Breakdown */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: colors.text.primary,
            marginBottom: '20px'
          }}>
            How you did, by content domain:
          </h3>

          {/* Stable SAT domain order */}
          {SAT_MATH_DOMAINS.map(domainId => {
            const data = domainBreakdown[domainId];
            if (!data || data.total === 0) return null;
            return (
              <DomainBar
                key={domainId}
                domain={domainId}
                correct={data.correct}
                total={data.total}
                maxTotal={Math.max(...Object.values(domainBreakdown).map(d => d.total))}
              />
            );
          })}
        </div>

        {/* Back to Summary */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setActiveTab('summary')}
            style={{
              padding: '10px 24px',
              background: colors.surface.white,
              color: colors.text.secondary,
              border: `1px solid ${colors.surface.grayMedium}`,
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Back to Summary
          </button>
        </div>
      </div>
    );
  };

  const [showEvidence, setShowEvidence] = useState(false);

  const renderDiagnosticView = () => {
    if (!diagUI) {
      return (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: colors.text.secondary }}>
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
            <ChartBarIcon size={48} color={colors.text.muted} />
          </div>
          <p style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px' }}>
            Diagnostic data is not available for this test attempt.
          </p>
          <p style={{ fontSize: '14px' }}>
            Complete a new test to see detailed insights about your performance.
          </p>
        </div>
      );
    }

    const cardStyle = {
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'saturate(180%) blur(24px)',
      WebkitBackdropFilter: 'saturate(180%) blur(24px)',
      border: '1px solid rgba(255, 255, 255, 0.6)',
      borderRadius: '24px',
      padding: '24px',
      marginBottom: '20px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
    };

    const severityStyles = {
      error:   { bg: 'rgba(239, 68, 68, 0.06)', border: 'rgba(239, 68, 68, 0.15)', dot: '#ef4444' },
      warning: { bg: 'rgba(245, 158, 11, 0.06)', border: 'rgba(245, 158, 11, 0.15)', dot: '#f59e0b' },
      info:    { bg: 'rgba(14, 165, 233, 0.06)', border: 'rgba(14, 165, 233, 0.15)', dot: '#0ea5e9' },
    };

    const {
      keyFindings, pointLoss, roiFixes, domains, behavior, difficulty,
      questionEvidence, scoreProjection, weaknessClusters, persistentWeaknesses,
      behaviorOutcomes, timeAllocation, confidenceIndicators, learningVelocity,
    } = diagUI;

    return (
      <div>
        {/* ── 1. KEY FINDINGS ── */}
        {keyFindings.length > 0 && (
          <div style={cardStyle}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '16px' }}>
              Key Findings
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {keyFindings.map(f => {
                const sev = severityStyles[f.severity] || severityStyles.info;
                return (
                  <div key={f.id} style={{
                    padding: '14px 16px', borderRadius: '16px',
                    background: sev.bg, border: `1px solid ${sev.border}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: sev.dot, flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}>{f.title}</span>
                    </div>
                    <div style={{ fontSize: '13px', color: colors.text.secondary, lineHeight: '1.5', paddingLeft: '18px' }}>
                      {f.detail}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── AI DIAGNOSTIC NARRATIVE ── */}
        <div style={{
          ...cardStyle,
          background: aiNarrative
            ? 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(99,102,241,0.02) 100%)'
            : 'rgba(255,255,255,0.85)',
          border: aiNarrative ? '1px solid rgba(99,102,241,0.15)' : cardStyle.border,
        }}>
          {!aiNarrative && !aiNarrativeLoading && (
            <>
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '8px' }}>
                AI Diagnostic Analysis
              </h3>
              <p style={{ fontSize: '13px', color: colors.text.secondary, margin: '0 0 14px', lineHeight: '1.5' }}>
                Get a personalized AI-generated diagnosis that synthesizes your performance data into an explanation of your weaknesses and why they're happening.
              </p>
              <button
                onClick={handleGenerateNarrative}
                disabled={!diagnosticReport}
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  color: '#fff', border: 'none',
                  borderRadius: '14px', fontSize: '14px', fontWeight: '600',
                  padding: '12px 20px', width: '100%', cursor: diagnosticReport ? 'pointer' : 'not-allowed',
                  boxShadow: '0 4px 12px rgba(99,102,241,0.25)',
                  transition: 'all 0.2s ease',
                  opacity: diagnosticReport ? 1 : 0.5,
                }}
              >
                Generate AI Diagnosis
              </button>
              {aiNarrativeError && (
                <div style={{ marginTop: '10px', padding: '8px 12px', background: colors.semantic.errorLight, borderRadius: '8px', fontSize: '12px', color: colors.semantic.error }}>
                  {aiNarrativeError}
                </div>
              )}
            </>
          )}

          {aiNarrativeLoading && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#6366f1', marginBottom: '6px' }}>Analyzing your performance...</div>
              <div style={{ fontSize: '12px', color: colors.text.secondary }}>This takes 10-15 seconds</div>
            </div>
          )}

          {aiNarrative && (
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#4f46e5', margin: 0, marginBottom: '14px' }}>
                AI Diagnostic Analysis
              </h3>

              {aiNarrative.learnerProfile && (
                <div style={{ fontSize: '14px', color: colors.text.primary, lineHeight: '1.6', marginBottom: '16px', fontStyle: 'italic' }}>
                  {aiNarrative.learnerProfile}
                </div>
              )}

              {aiNarrative.topWeaknesses && aiNarrative.topWeaknesses.length > 0 && (
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                    Why You're Struggling
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {aiNarrative.topWeaknesses.map((w, i) => {
                      const sevStyle = w.severity === 'critical'
                        ? { bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.12)', dot: '#ef4444' }
                        : w.severity === 'significant'
                        ? { bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.12)', dot: '#f59e0b' }
                        : { bg: 'rgba(99,102,241,0.06)', border: 'rgba(99,102,241,0.12)', dot: '#6366f1' };
                      return (
                        <div key={i} style={{ padding: '12px 14px', borderRadius: '14px', background: sevStyle.bg, border: `1px solid ${sevStyle.border}` }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: sevStyle.dot, flexShrink: 0 }} />
                            <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{w.title}</span>
                          </div>
                          <div style={{ fontSize: '12px', color: colors.text.secondary, lineHeight: '1.5', paddingLeft: '16px' }}>
                            {w.explanation}
                          </div>
                          {w.evidence && w.evidence.length > 0 && (
                            <div style={{ paddingLeft: '16px', marginTop: '6px' }}>
                              {w.evidence.map((e, j) => (
                                <div key={j} style={{ fontSize: '11px', color: colors.text.muted, paddingLeft: '8px', borderLeft: '2px solid rgba(99,102,241,0.2)', marginBottom: '2px' }}>
                                  {e}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {aiNarrative.behaviorInsights && (
                <div style={{ marginBottom: '14px', padding: '12px 14px', borderRadius: '14px', background: 'rgba(99,102,241,0.04)', border: '1px solid rgba(99,102,241,0.1)' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                    Behavior Insights
                  </div>
                  <div style={{ fontSize: '13px', color: colors.text.secondary, lineHeight: '1.5' }}>
                    {aiNarrative.behaviorInsights}
                  </div>
                </div>
              )}

              {aiNarrative.changesSinceLast && (
                <div style={{ marginBottom: '14px', padding: '10px 14px', borderRadius: '12px', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.1)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '600', color: '#16a34a', marginBottom: '4px' }}>Changes Since Last Test</div>
                  <div style={{ fontSize: '12px', color: colors.text.secondary, lineHeight: '1.5' }}>{aiNarrative.changesSinceLast}</div>
                </div>
              )}

              {aiNarrative.topNextFocus && (
                <div style={{ marginBottom: '14px', padding: '12px 14px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(6,182,212,0.03) 100%)', border: '1px solid rgba(6,182,212,0.15)' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#0891b2', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                    Top Priority
                  </div>
                  <div style={{ fontSize: '13px', color: colors.text.primary, lineHeight: '1.5', fontWeight: '500' }}>
                    {aiNarrative.topNextFocus}
                  </div>
                </div>
              )}

              {aiNarrative.strongestEvidence && aiNarrative.strongestEvidence.length > 0 && (
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.muted, marginBottom: '6px' }}>Key Evidence</div>
                  {aiNarrative.strongestEvidence.map((e, i) => (
                    <div key={i} style={{ fontSize: '12px', color: colors.text.secondary, paddingLeft: '10px', borderLeft: '2px solid rgba(99,102,241,0.2)', marginBottom: '3px', lineHeight: '1.4' }}>
                      {e}
                    </div>
                  ))}
                </div>
              )}

              {aiNarrative.uncertainties && (
                <div style={{ fontSize: '12px', color: colors.text.muted, fontStyle: 'italic', lineHeight: '1.5' }}>
                  <span style={{ fontWeight: '600' }}>Note: </span>{aiNarrative.uncertainties}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── 2. WHY POINTS WERE LOST ── */}
        {pointLoss.length > 0 && (
          <div style={cardStyle}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '14px' }}>
              Why Points Were Lost
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: pointLoss.some(p => p.sampleQuestions.length > 0) ? '14px' : '0' }}>
              {pointLoss.map(p => (
                <div key={p.type} style={{
                  flex: '1 1 0', minWidth: '110px', background: p.bg, borderRadius: '14px', padding: '14px', textAlign: 'center',
                  border: `1px solid ${p.color}15`,
                }}>
                  <div style={{ fontSize: '22px', fontWeight: '700', color: p.color }}>{p.count}</div>
                  <div style={{ fontSize: '12px', fontWeight: '600', color: p.color, marginTop: '2px' }}>{p.label}</div>
                  <div style={{ fontSize: '11px', color: colors.text.muted, marginTop: '2px' }}>{p.percentage}% of misses</div>
                </div>
              ))}
            </div>
            {pointLoss.filter(p => p.sampleQuestions.length > 0).slice(0, 2).map(p => (
              <div key={`sample-${p.type}`} style={{ marginBottom: '8px' }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: p.color, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  {p.label} — example{p.sampleQuestions.length > 1 ? 's' : ''}
                </div>
                {p.sampleQuestions.map(sq => (
                  <div key={sq.key} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '6px 10px', background: 'rgba(0,0,0,0.02)', borderRadius: '8px', marginBottom: '3px', fontSize: '12px',
                  }}>
                    <span style={{ fontWeight: '600', color: colors.text.secondary, minWidth: '52px' }}>{sq.label}</span>
                    <span style={{
                      fontSize: '10px', fontWeight: '600', padding: '1px 6px', borderRadius: '3px', textTransform: 'capitalize',
                      background: sq.difficulty === 'hard' ? colors.semantic.error : sq.difficulty === 'medium' ? colors.semantic.warning : colors.semantic.success,
                      color: colors.text.inverse,
                    }}>{sq.difficulty || 'medium'}</span>
                    <span style={{ flex: 1, fontSize: '12px', color: colors.text.secondary, lineHeight: '1.4' }}>{sq.reasoning}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* ── 3. HIGHEST ROI FIXES ── */}
        {roiFixes.length > 0 && (
          <div style={{
            ...cardStyle,
            background: 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(6,182,212,0.02) 100%)',
            border: '1px solid rgba(6,182,212,0.15)',
          }}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '14px' }}>
              Highest ROI Fixes
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {roiFixes.map((fix, idx) => (
                <div key={idx} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  background: 'rgba(255,255,255,0.7)', borderRadius: '16px', padding: '14px 16px',
                  border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                    background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', color: colors.text.inverse,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: '700', boxShadow: '0 2px 6px rgba(6,182,212,0.3)',
                  }}>{idx + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}>{fix.title}</span>
                      {fix.estimatedGain > 0 && (
                        <span style={{
                          fontSize: '11px', fontWeight: '700', color: '#0891b2',
                          background: 'rgba(6,182,212,0.1)', padding: '2px 8px', borderRadius: '6px',
                        }}>+{fix.estimatedGain} pts</span>
                      )}
                      {fix.effort && (
                        <span style={{
                          fontSize: '10px', fontWeight: '600', textTransform: 'capitalize',
                          color: fix.effort === 'low' ? colors.semantic.success : fix.effort === 'high' ? colors.semantic.error : '#b45309',
                          background: fix.effort === 'low' ? colors.semantic.successLight : fix.effort === 'high' ? colors.semantic.errorLight : colors.semantic.warningLight,
                          padding: '2px 6px', borderRadius: '4px',
                        }}>{fix.effort} effort</span>
                      )}
                    </div>
                    <div style={{ fontSize: '13px', color: colors.text.secondary, lineHeight: '1.45', marginTop: '4px' }}>{fix.description}</div>
                    {fix.actionItems.length > 0 && (
                      <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        {fix.actionItems.slice(0, 2).map((item, i) => (
                          <div key={i} style={{ fontSize: '12px', color: colors.text.secondary, paddingLeft: '10px', borderLeft: '2px solid rgba(6,182,212,0.3)' }}>
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {onOpenDiagnosticReport && (
              <button
                onClick={onOpenDiagnosticReport}
                style={{
                  background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
                  color: '#fff', border: '1px solid #020617',
                  borderRadius: '14px', fontSize: '14px', fontWeight: '600',
                  padding: '12px 20px', width: '100%', textAlign: 'center',
                  marginTop: '16px', cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(15,23,42,0.15), inset 0 1px 1px rgba(255,255,255,0.1)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Open Study Plan
              </button>
            )}
          </div>
        )}

        {/* ── 4. DOMAIN PERFORMANCE ── */}
        {domains.length > 0 && (
          <div style={cardStyle}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '14px' }}>
              Domain Performance
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {domains.map(d => {
                const barColor = d.accuracy >= 80 ? colors.semantic.success : d.accuracy >= 60 ? colors.semantic.warning : colors.semantic.error;
                return (
                  <div key={d.domain}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{d.displayName}</span>
                        {d.topErrorType && (
                          <span style={{ fontSize: '10px', color: colors.text.muted, fontWeight: '500' }}>
                            top issue: {d.topErrorType}
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: '600', color: barColor }}>{d.correct}/{d.total} ({d.accuracy}%)</span>
                    </div>
                    <div style={{ background: colors.surface.gray || '#f1f5f9', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
                      <div style={{ width: `${d.accuracy}%`, height: '100%', background: barColor, borderRadius: '4px', transition: 'width 0.4s ease' }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 5. DIFFICULTY BREAKDOWN ── */}
        {difficulty && (
          <div style={cardStyle}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '14px' }}>
              Difficulty Breakdown
            </h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              {difficulty.map(d => {
                const bgColor = d.level === 'easy' ? colors.semantic.successLight : d.level === 'medium' ? colors.semantic.warningLight : colors.semantic.errorLight;
                const fgColor = d.level === 'easy' ? colors.semantic.success : d.level === 'medium' ? '#b45309' : colors.semantic.error;
                return (
                  <div key={d.level} style={{ flex: 1, background: bgColor, borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: '600', color: fgColor, textTransform: 'capitalize', marginBottom: '6px' }}>{d.level}</div>
                    <div style={{ fontSize: '22px', fontWeight: '700', color: fgColor }}>{d.accuracy}%</div>
                    <div style={{ fontSize: '11px', color: colors.text.secondary, marginTop: '3px' }}>{d.correct}/{d.total}</div>
                  </div>
                );
              })}
            </div>
            {scoreProjection?.easyWins?.count > 0 && (
              <div style={{ marginTop: '10px', padding: '8px 12px', background: colors.semantic.errorLight, borderRadius: radius.sm, fontSize: '12px', color: colors.semantic.error, fontWeight: '500' }}>
                {scoreProjection.easyWins.count} easy miss{scoreProjection.easyWins.count > 1 ? 'es' : ''} — fixing them adds +{scoreProjection.easyWins.projectedGain} points.
              </div>
            )}
          </div>
        )}

        {/* ── 6. BEHAVIOR SIGNALS ── */}
        {behavior.length > 0 && (
          <div style={cardStyle}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '14px' }}>
              Behavior Signals
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {behavior.map((s, i) => {
                const isWarning = s.type === 'warning';
                const isGood = s.type === 'good';
                return (
                  <div key={i} style={{
                    background: isWarning ? 'rgba(245,158,11,0.06)' : isGood ? 'rgba(34,197,94,0.06)' : colors.surface.offWhite,
                    border: isWarning ? '1px solid rgba(245,158,11,0.15)' : isGood ? '1px solid rgba(34,197,94,0.15)' : '1px solid transparent',
                    borderRadius: '12px', padding: '10px 16px', flex: '1 1 140px', minWidth: '130px',
                  }}>
                    <div style={{ fontSize: '11px', color: isWarning ? '#b45309' : isGood ? colors.semantic.success : colors.text.secondary, fontWeight: '500' }}>{s.label}</div>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: isWarning ? '#b45309' : isGood ? colors.semantic.success : colors.text.primary, marginTop: '2px' }}>{s.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 7. WEAKNESS CLUSTERS ── */}
        {weaknessClusters && weaknessClusters.length > 0 && (
          <div style={cardStyle}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '14px' }}>
              Weakness Clusters
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {weaknessClusters.map(c => {
                const sev = c.severity === 'critical'
                  ? { bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.15)', dot: '#ef4444', text: '#dc2626' }
                  : c.severity === 'moderate'
                  ? { bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.15)', dot: '#f59e0b', text: '#b45309' }
                  : { bg: 'rgba(14,165,233,0.06)', border: 'rgba(14,165,233,0.15)', dot: '#0ea5e9', text: '#0284c7' };
                return (
                  <div key={c.id} style={{
                    padding: '14px 16px', borderRadius: '16px',
                    background: sev.bg, border: `1px solid ${sev.border}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: sev.dot, flexShrink: 0 }} />
                      <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{c.label}</span>
                      <span style={{
                        fontSize: '10px', fontWeight: '600', textTransform: 'capitalize',
                        color: sev.text, background: `${sev.dot}18`, padding: '1px 6px', borderRadius: '4px', marginLeft: 'auto',
                      }}>{c.severity}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: colors.text.secondary, lineHeight: '1.5', paddingLeft: '16px' }}>
                      {c.detail}
                    </div>
                    {c.failedSkills && c.failedSkills.length > 0 && (
                      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', paddingLeft: '16px', marginTop: '6px' }}>
                        {c.failedSkills.map(s => (
                          <span key={s} style={{
                            fontSize: '10px', fontWeight: '500', padding: '2px 8px', borderRadius: '6px',
                            background: 'rgba(0,0,0,0.04)', color: colors.text.secondary,
                          }}>{s.replace(/-/g, ' ')}</span>
                        ))}
                      </div>
                    )}
                    {c.questions && c.questions.length > 0 && (
                      <div style={{ fontSize: '11px', color: colors.text.muted, paddingLeft: '16px', marginTop: '4px' }}>
                        Affected: {c.questions.join(', ')}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 8. PERSISTENT WEAKNESSES ── */}
        {persistentWeaknesses && persistentWeaknesses.length > 0 && (
          <div style={{
            ...cardStyle,
            background: 'linear-gradient(135deg, rgba(239,68,68,0.04) 0%, rgba(239,68,68,0.01) 100%)',
            border: '1px solid rgba(239,68,68,0.12)',
          }}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '14px' }}>
              Persistent Weaknesses
            </h3>
            <p style={{ fontSize: '12px', color: colors.text.secondary, margin: '0 0 12px', lineHeight: '1.4' }}>
              These weaknesses have appeared across multiple tests, signaling areas that need sustained attention.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {persistentWeaknesses.map((pw, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '10px 14px', borderRadius: '12px', background: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(239,68,68,0.08)',
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                    background: pw.severity === 'critical' ? '#ef4444' : pw.type === 'declining-skill' ? '#f59e0b' : '#f97316',
                  }} />
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{pw.skill}</span>
                    {pw.testsWeak && (
                      <span style={{
                        fontSize: '10px', fontWeight: '600', marginLeft: '8px',
                        color: '#dc2626', background: 'rgba(239,68,68,0.08)', padding: '1px 6px', borderRadius: '4px',
                      }}>{pw.testsWeak} tests</span>
                    )}
                  </div>
                  <span style={{ fontSize: '12px', color: colors.text.secondary, maxWidth: '200px', textAlign: 'right' }}>{pw.detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── 9. BEHAVIOR → OUTCOME ── */}
        {behaviorOutcomes && behaviorOutcomes.length > 0 && (
          <div style={cardStyle}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '14px' }}>
              Behavior → Outcome
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {behaviorOutcomes.map(bo => {
                const impactColors = {
                  positive: { bg: 'rgba(34,197,94,0.06)', border: 'rgba(34,197,94,0.15)', color: '#16a34a', icon: '✓' },
                  negative: { bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.15)', color: '#dc2626', icon: '✗' },
                  neutral:  { bg: 'rgba(100,116,139,0.06)', border: 'rgba(100,116,139,0.15)', color: '#64748b', icon: '–' },
                };
                const ic = impactColors[bo.impact] || impactColors.neutral;
                return (
                  <div key={bo.id} style={{
                    padding: '14px 16px', borderRadius: '16px',
                    background: ic.bg, border: `1px solid ${ic.border}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: ic.color, width: '18px', textAlign: 'center' }}>{ic.icon}</span>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{bo.behavior}</span>
                      <span style={{ fontSize: '12px', color: colors.text.secondary, marginLeft: 'auto' }}>{bo.stat}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: colors.text.secondary, lineHeight: '1.5', paddingLeft: '26px' }}>
                      {bo.detail}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 10. TIME ALLOCATION BY DOMAIN ── */}
        {timeAllocation && timeAllocation.length > 0 && (
          <div style={cardStyle}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '14px' }}>
              Time Allocation by Domain
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {timeAllocation.map(ta => {
                const barColor = ta.isOverinvested ? colors.semantic.error
                  : ta.accuracy >= 80 ? colors.semantic.success
                  : ta.accuracy >= 60 ? colors.semantic.warning
                  : '#f97316';
                return (
                  <div key={ta.domain}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{ta.displayName}</span>
                        {ta.isOverinvested && (
                          <span style={{
                            fontSize: '9px', fontWeight: '700', padding: '1px 6px', borderRadius: '4px',
                            color: colors.semantic.error, background: colors.semantic.errorLight,
                          }}>OVER-INVESTED</span>
                        )}
                      </div>
                      <div style={{ display: 'flex', gap: '12px', fontSize: '12px' }}>
                        <span style={{ color: colors.text.secondary }}>{ta.timeFormatted} ({ta.timePct}%)</span>
                        <span style={{ fontWeight: '600', color: barColor }}>{ta.accuracy}% accuracy</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '3px', height: '6px' }}>
                      <div style={{
                        flex: ta.timePct, background: barColor, borderRadius: '3px 0 0 3px',
                        opacity: 0.3, transition: 'flex 0.4s ease',
                      }} />
                      <div style={{
                        flex: ta.accuracy, background: barColor, borderRadius: '0 3px 3px 0',
                        transition: 'flex 0.4s ease',
                      }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2px' }}>
                      <span style={{ fontSize: '10px', color: colors.text.muted }}>time share</span>
                      <span style={{ fontSize: '10px', color: colors.text.muted }}>accuracy</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 11. CONFIDENCE / CERTAINTY ── */}
        {confidenceIndicators && confidenceIndicators.length > 0 && (
          <div style={{
            ...cardStyle,
            background: 'rgba(248,250,252,0.9)',
            border: '1px solid rgba(226,232,240,0.6)',
          }}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '14px' }}>
              Diagnostic Confidence
            </h3>
            <p style={{ fontSize: '12px', color: colors.text.secondary, margin: '0 0 12px', lineHeight: '1.4' }}>
              How reliable each part of this diagnosis is based on the evidence available.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {confidenceIndicators.map(ci => {
                const confColors = {
                  high: { color: '#16a34a', bg: 'rgba(34,197,94,0.1)', label: 'High' },
                  moderate: { color: '#b45309', bg: 'rgba(245,158,11,0.1)', label: 'Moderate' },
                  low: { color: '#dc2626', bg: 'rgba(239,68,68,0.1)', label: 'Low' },
                };
                const cc = confColors[ci.confidence] || confColors.moderate;
                return (
                  <div key={ci.id} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '10px 14px', borderRadius: '12px', background: 'rgba(255,255,255,0.7)',
                  }}>
                    <span style={{
                      fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '6px',
                      color: cc.color, background: cc.bg, minWidth: '52px', textAlign: 'center',
                    }}>{cc.label}</span>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: colors.text.primary }}>{ci.area}</span>
                      <div style={{ fontSize: '11px', color: colors.text.secondary, marginTop: '2px' }}>{ci.detail}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 12. QUESTION EVIDENCE (collapsible) ── */}
        {questionEvidence.length > 0 && (
          <>
            <button
              onClick={() => setShowEvidence(!showEvidence)}
              style={{
                width: '100%', background: 'none', border: `1px solid ${colors.surface.grayDark || '#e2e8f0'}`,
                borderRadius: radius.sm, padding: '12px 16px', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: showEvidence ? '16px' : '0',
              }}
            >
              <span style={{ fontSize: '14px', fontWeight: '600', color: colors.text.secondary }}>
                {showEvidence ? 'Hide question evidence' : `See question evidence (${questionEvidence.length})`}
              </span>
              <span style={{ fontSize: '18px', color: colors.text.muted, transform: showEvidence ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
                &#9660;
              </span>
            </button>

            {showEvidence && (
              <div style={cardStyle}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '12px' }}>
                  Classified Misses
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {questionEvidence.map(q => (
                    <div key={q.key} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '10px',
                      padding: '10px 12px', background: 'rgba(0,0,0,0.02)', borderRadius: '10px',
                    }}>
                      <span style={{ fontWeight: '600', color: colors.text.secondary, fontSize: '12px', minWidth: '52px', paddingTop: '1px' }}>{q.label}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '3px' }}>
                          <span style={{
                            fontSize: '10px', fontWeight: '600', padding: '1px 6px', borderRadius: '3px', textTransform: 'capitalize',
                            background: q.difficulty === 'hard' ? colors.semantic.error : q.difficulty === 'medium' ? colors.semantic.warning : colors.semantic.success,
                            color: colors.text.inverse,
                          }}>{q.difficulty}</span>
                          <span style={{
                            fontSize: '10px', fontWeight: '600', padding: '1px 6px', borderRadius: '3px',
                            color: q.errorColor, background: `${q.errorColor}12`,
                          }}>{q.errorLabel}</span>
                          <span style={{ fontSize: '11px', color: colors.text.muted }}>{q.domainName}</span>
                          <span style={{ fontSize: '11px', color: colors.text.muted, marginLeft: 'auto' }}>{q.timeFormatted}</span>
                        </div>
                        <div style={{ fontSize: '12px', color: colors.text.secondary, lineHeight: '1.4' }}>{q.reasoning}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px 40px' }}>
      {/* Header Area */}
      <div style={{
        marginBottom: '24px',
        paddingTop: '20px'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '800',
          color: colors.text.primary,
          letterSpacing: '-0.04em',
          marginBottom: '8px'
        }}>
          {test.title}
        </h1>
        <div style={{ fontSize: '15px', color: colors.text.secondary, fontWeight: '500' }}>
          Completed on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        gap: '4px',
        background: 'rgba(0,0,0,0.06)',
        padding: '4px',
        borderRadius: '16px',
        marginBottom: '32px',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: '1 0 auto',
              padding: '12px 20px',
              background: activeTab === tab.id ? '#ffffff' : 'transparent',
              border: 'none',
              borderRadius: '12px',
              color: activeTab === tab.id ? colors.text.primary : colors.text.secondary,
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
              boxShadow: activeTab === tab.id ? '0 2px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)' : 'none'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div style={{
        animation: 'fadeIn 0.4s ease-out'
      }}>
        {activeTab === 'summary'
          ? renderSummaryView()
          : activeTab === 'diagnostic'
          ? renderDiagnosticView()
          : renderModuleSummary(parseInt(activeTab.split('-')[1]))
        }
      </div>
    </div>
  );
};

export default TestResults;
