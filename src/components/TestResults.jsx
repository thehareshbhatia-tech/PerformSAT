/**
 * TestResults Component
 * Displays practice test results in Test Innovators style
 * Features: Tab navigation, score badges with progress bars,
 * difficulty donut charts, and content domain bars
 */

import React, { useState } from 'react';
import { getSkillById } from '../data/skillTaxonomy';
import { colors, radius, shadows } from '../design/tokens';
import { cardStyles, buttonStyles } from '../design/components';
import { ChartBarIcon, ArrowRightIcon, CircleDotIcon } from '../design/icons';

// Domain display names matching Test Innovators
const domainDisplayNames = {
  'algebra': 'Algebra',
  'problem-solving': 'Problem Solving and Data Analysis',
  'advanced-math': 'Advanced Math',
  'geometry': 'Geometry and Trigonometry'
};

// SAT scoring table (same as PracticeTest.jsx)
const scoringTable = {
  44: 800, 43: 790, 42: 780, 41: 770, 40: 760,
  39: 750, 38: 740, 37: 730, 36: 720, 35: 710,
  34: 700, 33: 690, 32: 680, 31: 670, 30: 660,
  29: 650, 28: 640, 27: 630, 26: 620, 25: 610,
  24: 600, 23: 590, 22: 580, 21: 570, 20: 560,
  19: 550, 18: 540, 17: 530, 16: 520, 15: 510,
  14: 500, 13: 490, 12: 480, 11: 470, 10: 460,
  9: 450, 8: 440, 7: 430, 6: 420, 5: 410,
  4: 400, 3: 390, 2: 380, 1: 370, 0: 200
};

// Convert raw score to SAT scaled score
const convertToSATScore = (rawScore, totalQuestions) => {
  const scaledRaw = Math.round((rawScore / totalQuestions) * 44);
  return scoringTable[Math.min(44, Math.max(0, scaledRaw))] || 200;
};

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
  const displayName = domainDisplayNames[domain] || domain;
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
  practiceTestResults,
  onBack,
  onRetake,
  onReview,
  onReviewModule,
  onOpenDiagnosticReport,
  user,
}) => {
  const [activeTab, setActiveTab] = useState('summary');

  // Calculate scores
  const calculateModuleScore = (moduleIndex) => {
    const module = test.modules[moduleIndex];
    let correct = 0;
    module.questions.forEach((q, qIdx) => {
      const key = `${moduleIndex}-${qIdx}`;
      const userAnswer = answers[key];
      if (q.type === 'fill-in') {
        if (userAnswer === q.correctAnswer || parseFloat(userAnswer) === q.correctAnswer) {
          correct++;
        }
      } else {
        if (userAnswer === q.correctAnswer) {
          correct++;
        }
      }
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
      } else {
        let isCorrect = false;
        if (q.type === 'fill-in') {
          isCorrect = userAnswer === q.correctAnswer || parseFloat(userAnswer) === q.correctAnswer;
        } else {
          isCorrect = userAnswer === q.correctAnswer;
        }

        if (isCorrect) {
          breakdown[difficulty].correct++;
        } else {
          breakdown[difficulty].incorrect++;
        }
      }
    });

    return breakdown;
  };

  // Calculate domain breakdown for a module
  const calculateDomainBreakdown = (moduleIndex) => {
    const module = test.modules[moduleIndex];
    const domains = {};

    module.questions.forEach((q, qIdx) => {
      const key = `${moduleIndex}-${qIdx}`;
      const userAnswer = answers[key];

      // Get domain from first skill
      let domain = 'algebra'; // default
      if (q.skills && q.skills.length > 0) {
        const skill = getSkillById(q.skills[0]);
        if (skill && skill.domain) {
          domain = skill.domain;
        }
      }

      if (!domains[domain]) {
        domains[domain] = { correct: 0, total: 0 };
      }
      domains[domain].total++;

      if (userAnswer) {
        let isCorrect = false;
        if (q.type === 'fill-in') {
          isCorrect = userAnswer === q.correctAnswer || parseFloat(userAnswer) === q.correctAnswer;
        } else {
          isCorrect = userAnswer === q.correctAnswer;
        }
        if (isCorrect) {
          domains[domain].correct++;
        }
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
      let isCorrect = false;
      if (isAnswered) {
        if (q.type === 'fill-in') {
          isCorrect = userAnswer === q.correctAnswer || parseFloat(userAnswer) === q.correctAnswer;
        } else {
          isCorrect = userAnswer === q.correctAnswer;
        }
      }
      return { key, question: q, isAnswered, isCorrect };
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

    const PERCENTILE_TABLE = {
      200: 1, 210: 1, 220: 1, 230: 1, 240: 2, 250: 3, 260: 4, 270: 5,
      280: 6, 290: 8, 300: 10, 310: 12, 320: 14, 330: 16, 340: 19,
      350: 22, 360: 25, 370: 28, 380: 31, 390: 34, 400: 37, 410: 40,
      420: 43, 430: 46, 440: 49, 450: 52, 460: 55, 470: 57, 480: 60,
      490: 63, 500: 66, 510: 69, 520: 72, 530: 74, 540: 76, 550: 78,
      560: 80, 570: 82, 580: 84, 590: 86, 600: 88, 610: 89, 620: 90,
      630: 91, 640: 92, 650: 93, 660: 93, 670: 94, 680: 95, 690: 95,
      700: 96, 710: 97, 720: 97, 730: 98, 740: 98, 750: 99, 760: 99,
      770: 99, 780: 99, 790: 99, 800: 99,
    };
    const rounded = Math.round(satScore / 10) * 10;
    const percentile = PERCENTILE_TABLE[Math.min(800, Math.max(200, rounded))] || 50;

    // ── Difficulty aggregates ──
    const diffAll = { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } };
    test.modules.forEach((_, modIdx) => {
      const bd = calculateDifficultyBreakdown(modIdx);
      ['easy', 'medium', 'hard'].forEach(d => {
        diffAll[d].correct += bd[d].correct;
        diffAll[d].total += bd[d].correct + bd[d].incorrect + bd[d].unanswered;
      });
    });

    // ── Domain aggregates ──
    const domAll = {};
    test.modules.forEach((_, modIdx) => {
      const bd = calculateDomainBreakdown(modIdx);
      Object.entries(bd).forEach(([dom, vals]) => {
        if (!domAll[dom]) domAll[dom] = { correct: 0, total: 0 };
        domAll[dom].correct += vals.correct;
        domAll[dom].total += vals.total;
      });
    });
    const domEntries = Object.entries(domAll).filter(([, v]) => v.total > 0)
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
      background: colors.surface.white,
      borderRadius: '20px',
      border: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      padding: '24px',
    };
    const sectionTitle = { fontSize: '11px', fontWeight: '700', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* ═══════════ BLOCK 1: SCORE + MAIN ACTIONS ═══════════ */}
        <div style={{ ...cardBase, padding: '32px 24px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Score number */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '56px', fontWeight: '800', color: colors.text.primary, letterSpacing: '-0.04em', lineHeight: 1 }}>
              {satScore}
            </div>
            <div style={{ fontSize: '12px', fontWeight: '500', color: colors.text.secondary, marginTop: '6px' }}>Math Score</div>
          </div>

          {/* Linear score gauge (box-and-whisker style) */}
          <div style={{ width: '100%', maxWidth: '440px', padding: '0 4px', marginBottom: '32px' }}>
            {/* Score + Target labels above the bar */}
            <div style={{ position: 'relative', height: '28px', marginBottom: '4px' }}>
              {/* Score label */}
              <div style={{
                position: 'absolute',
                left: `${scorePct}%`, transform: 'translateX(-50%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
                <div style={{
                  fontSize: '12px', fontWeight: '800', color: accentHex,
                  background: `${accentHex}12`, padding: '2px 8px', borderRadius: '6px',
                  fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap',
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
                    fontSize: '10px', fontWeight: '700', color: '#f97316',
                    whiteSpace: 'nowrap',
                  }}>
                    Target {targetScore}
                  </div>
                </div>
              )}
            </div>

            {/* The gauge track */}
            <div style={{ position: 'relative', height: '14px' }}>
              {/* Background track with range zones */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '7px', overflow: 'hidden',
                display: 'flex',
              }}>
                <div style={{ flex: 1, background: 'linear-gradient(90deg, #fecaca, #fde68a)' }} />
                <div style={{ flex: 1, background: 'linear-gradient(90deg, #fde68a, #bbf7d0)' }} />
                <div style={{ flex: 1, background: 'linear-gradient(90deg, #bbf7d0, #86efac)' }} />
              </div>

              {/* Filled portion up to score */}
              <div style={{
                position: 'absolute', top: '2px', bottom: '2px', left: '2px',
                width: `calc(${scorePct}% - 4px)`,
                borderRadius: '5px',
                background: `linear-gradient(90deg, ${accentHex}88, ${accentHex})`,
                boxShadow: `0 0 8px ${accentHex}40`,
                transition: 'width 1s cubic-bezier(0.34,1.56,0.64,1)',
              }} />

              {/* Target marker line */}
              {!isAtTarget && (
                <div style={{
                  position: 'absolute', top: '-4px', bottom: '-4px',
                  left: `${targetPct}%`, transform: 'translateX(-50%)',
                  width: '2px', background: '#f97316',
                  borderRadius: '1px',
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
                width: '18px', height: '18px', borderRadius: '50%',
                background: accentHex,
                border: '3px solid white',
                boxShadow: `0 0 0 1px rgba(0,0,0,0.08), 0 2px 8px ${accentHex}50`,
                transition: 'left 1s cubic-bezier(0.34,1.56,0.64,1)',
              }} />
            </div>

            {/* Scale labels */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
              {[200, 400, 600, 800].map(v => (
                <span key={v} style={{ fontSize: '10px', fontWeight: '600', color: colors.text.muted, fontVariantNumeric: 'tabular-nums' }}>{v}</span>
              ))}
            </div>
          </div>

          {/* Primary Action Row */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
            <button onClick={onReview} style={{
              flex: '1 1 auto', maxWidth: '280px',
              padding: '14px 24px', background: '#0f172a', color: '#fff',
              border: 'none', borderRadius: '14px',
              fontSize: '15px', fontWeight: '600', cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(15,23,42,0.15)',
              transition: 'all 0.2s ease',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}>
              Review Answers <ArrowRightIcon size={16} />
            </button>
            <button onClick={onRetake} style={{
              flex: '0 1 auto',
              padding: '14px 24px', background: colors.surface.white, color: colors.text.primary,
              border: '1px solid rgba(0,0,0,0.1)', borderRadius: '14px',
              fontSize: '14px', fontWeight: '600', cursor: 'pointer',
            }}>
              Retake
            </button>
            <button onClick={onBack} style={{
              flex: '0 1 auto',
              padding: '14px 24px', background: colors.surface.white, color: colors.text.secondary,
              border: '1px solid rgba(0,0,0,0.1)', borderRadius: '14px',
              fontSize: '14px', fontWeight: '600', cursor: 'pointer',
            }}>
              Back to Tests
            </button>
          </div>
        </div>

        {/* ═══════════ SECONDARY STATS ROW ═══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          <div style={{ ...cardBase, padding: '20px' }}>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Percentile</div>
                <div style={{ fontSize: '24px', fontWeight: '800', color: percentile >= 75 ? '#22c55e' : percentile >= 50 ? '#06b6d4' : '#eab308', marginTop: '2px', lineHeight: 1 }}>{percentile}th</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Accuracy</div>
                <div style={{ fontSize: '24px', fontWeight: '800', color: accuracyPct >= 80 ? '#22c55e' : accuracyPct >= 60 ? '#06b6d4' : '#eab308', marginTop: '2px', lineHeight: 1 }}>{accuracyPct}%</div>
              </div>
            </div>
          </div>
          
          <div style={{ ...cardBase, padding: '20px', display: 'flex', gap: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Module 1</div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: colors.text.primary, marginTop: '2px' }}>{mod1Pct}%</div>
            </div>
            {mod2Pct !== null && (
              <div style={{ flex: 1, textAlign: 'right' }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Module 2 {mod2Hard && <span style={{ color: '#f97316' }}>(Hard)</span>}</div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: colors.text.primary, marginTop: '2px' }}>{mod2Pct}%</div>
              </div>
            )}
          </div>
        </div>

        {/* ═══════════ BLOCK 2: ATTEMPT INTELLIGENCE ═══════════ */}
        <div style={cardBase}>
          <div style={{ ...sectionTitle, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Attempt Intelligence</span>
            {hasTelemetry && <span style={{ fontSize: '9px', color: colors.text.muted }}>Derived from test telemetry</span>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Primary Insight (Most Actionable) */}
            {(() => {
              if (weakestDom && weakestDom[1].total > 0 && (weakestDom[1].correct / weakestDom[1].total) < 0.6) {
                // Weak domain is the primary insight
                return (
                  <div style={{ padding: '20px', background: 'rgba(239,68,68,0.04)', borderRadius: '16px', border: '1px solid rgba(239,68,68,0.1)' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '13px', fontWeight: '800', color: '#ef4444', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Top Priority: Target Weakness</div>
                        <div style={{ fontSize: '16px', fontWeight: '700', color: colors.text.primary, marginBottom: '6px' }}>
                          {(domainDisplayNames[weakestDom[0]] || weakestDom[0]).replace('and', '&')}
                        </div>
                        <div style={{ fontSize: '13px', color: colors.text.secondary, lineHeight: 1.5 }}>
                          You scored <span style={{ fontWeight: '700', color: '#ef4444' }}>{Math.round((weakestDom[1].correct / weakestDom[1].total) * 100)}%</span> in this domain. Improving here offers the fastest path to raising your overall score.
                        </div>
                      </div>
                      <button onClick={onOpenDiagnosticReport} style={{
                        padding: '10px 16px', background: '#fff', color: '#ef4444',
                        border: '1px solid rgba(239,68,68,0.2)', borderRadius: '10px',
                        fontSize: '13px', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap',
                        boxShadow: '0 2px 8px rgba(239,68,68,0.1)'
                      }}>
                        View Study Plan
                      </button>
                    </div>
                  </div>
                );
              } else if (easyMissed > 0 || unansweredCount > 0) {
                // Recoverable points is primary insight
                return (
                  <div style={{ padding: '20px', background: 'rgba(249,115,22,0.04)', borderRadius: '16px', border: '1px solid rgba(249,115,22,0.1)' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '13px', fontWeight: '800', color: '#f97316', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Top Priority: Easy Points Left Behind</div>
                        <div style={{ fontSize: '16px', fontWeight: '700', color: colors.text.primary, marginBottom: '6px' }}>
                          {easyMissed + unansweredCount} highly recoverable points
                        </div>
                        <div style={{ fontSize: '13px', color: colors.text.secondary, lineHeight: 1.5 }}>
                          You missed <span style={{ fontWeight: '700', color: '#f97316' }}>{easyMissed} easy</span> questions and left <span style={{ fontWeight: '700', color: '#f97316' }}>{unansweredCount} unanswered</span>. Review these first.
                        </div>
                      </div>
                      <button onClick={onReview} style={{
                        padding: '10px 16px', background: '#fff', color: '#f97316',
                        border: '1px solid rgba(249,115,22,0.2)', borderRadius: '10px',
                        fontSize: '13px', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap',
                        boxShadow: '0 2px 8px rgba(249,115,22,0.1)'
                      }}>
                        Review Mistakes
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })()}

            {/* Secondary Insights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {/* Pacing */}
              {hasTelemetry && avgTimePerQ > 90 && (
                <div style={{ padding: '14px 16px', background: 'rgba(0,0,0,0.02)', borderRadius: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: colors.text.primary }}>Pacing Risk</span>
                    <span style={{ fontSize: '14px', fontWeight: '800', color: '#f97316', fontVariantNumeric: 'tabular-nums' }}>
                      {formatTime(avgTimePerQ)} / q
                    </span>
                  </div>
                  <div style={{ fontSize: '11px', color: colors.text.secondary }}>
                    You spent longer than average per question. Target &lt; 1m 30s.
                  </div>
                </div>
              )}

              {/* Point-loss attribution */}
              {incorrectEntries.length > 0 && (
                <div style={{ padding: '14px 16px', background: 'rgba(0,0,0,0.02)', borderRadius: '14px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.primary, marginBottom: '8px' }}>
                    Why You Lost Points
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {[
                      { label: 'Careless', count: carelessCount, color: '#eab308' },
                      { label: 'Time Pressure', count: timePressureCount, color: '#f97316' },
                      { label: 'Content Gap', count: contentGapCount, color: '#ef4444' },
                    ].filter(b => b.count > 0).map(b => (
                      <div key={b.label} style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        padding: '4px 10px', borderRadius: '8px',
                        background: `${b.color}10`, border: `1px solid ${b.color}20`,
                      }}>
                        <span style={{ fontSize: '13px', fontWeight: '800', color: b.color, fontVariantNumeric: 'tabular-nums' }}>{b.count}</span>
                        <span style={{ fontSize: '11px', fontWeight: '600', color: b.color }}>{b.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Difficulty cliff */}
              {diffCliff && diffCliff.drop > 10 && (
                <div style={{ padding: '14px 16px', background: 'rgba(0,0,0,0.02)', borderRadius: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: colors.text.primary }}>Difficulty Cliff</span>
                    <span style={{ fontSize: '14px', fontWeight: '800', color: '#ef4444', fontVariantNumeric: 'tabular-nums' }}>
                      −{diffCliff.drop}%
                    </span>
                  </div>
                  <div style={{ fontSize: '11px', color: colors.text.secondary }}>
                    Accuracy drops <span style={{ fontWeight: '600' }}>{diffCliff.drop}pp</span> from{' '}
                    <span style={{ textTransform: 'capitalize' }}>{diffCliff.from}</span> to{' '}
                    <span style={{ textTransform: 'capitalize' }}>{diffCliff.to}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', marginTop: '8px', alignItems: 'center' }}>
                    {diffLevels.map(d => {
                      const p = diffAll[d].total > 0 ? Math.round((diffAll[d].correct / diffAll[d].total) * 100) : 0;
                      const c = d === 'easy' ? '#22c55e' : d === 'medium' ? '#06b6d4' : '#f97316';
                      return (
                        <div key={d} style={{ flex: 1 }}>
                          <div style={{ height: '6px', background: 'rgba(0,0,0,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: `${p}%`, height: '100%', background: c, borderRadius: '3px' }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Answer behavior */}
              {hasTelemetry && totalAnswerChanges > 0 && (
                <div style={{ padding: '14px 16px', background: 'rgba(0,0,0,0.02)', borderRadius: '14px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.primary, marginBottom: '6px' }}>Test Behavior</div>
                  <div style={{ fontSize: '11px', color: colors.text.secondary, lineHeight: 1.5 }}>
                    <span style={{ fontWeight: '700', color: colors.text.primary }}>{totalAnswerChanges}</span> answer{totalAnswerChanges > 1 ? 's' : ''} changed during the test
                    {reviewedCount > 0 && <div><span style={{ fontWeight: '700', color: colors.text.primary }}>{reviewedCount}</span> flagged for review</div>}
                  </div>
                </div>
              )}

              {/* Stamina */}
              {hasTelemetry && Math.abs(staminaDrop) > 5 && (
                <div style={{ padding: '14px 16px', background: 'rgba(0,0,0,0.02)', borderRadius: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: colors.text.primary }}>Stamina</span>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: staminaDrop > 10 ? '#f97316' : staminaDrop > 0 ? '#eab308' : '#22c55e' }}>
                      {staminaDrop > 0 ? `−${staminaDrop}pp` : `+${Math.abs(staminaDrop)}pp`}
                    </span>
                  </div>
                  <div style={{ fontSize: '11px', color: colors.text.secondary }}>
                    {staminaDrop > 10
                      ? 'Accuracy dropped late in the test.'
                      : staminaDrop > 0
                        ? 'Slight dip in second-half accuracy.'
                        : 'Strong finish late in the test.'}
                  </div>
                </div>
              )}
            </div>
          </div>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={sectionTitle}>Score Trajectory</div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[
                    { label: 'Best', value: bestScore },
                    { label: 'Attempts', value: attempts.length },
                    ...(improvementFromFirst !== 0 ? [{ label: 'Change', value: `${improvementFromFirst > 0 ? '+' : ''}${improvementFromFirst}` }] : []),
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '14px', fontWeight: '800', color: colors.text.primary, fontVariantNumeric: 'tabular-nums' }}>{s.value}</div>
                      <div style={{ fontSize: '9px', fontWeight: '600', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width={chartW} height={chartH} viewBox={`0 0 ${chartW} ${chartH}`}>
                  {/* Grid lines */}
                  {[0, 0.25, 0.5, 0.75, 1].map((f, i) => {
                    const y = padY + plotH - f * plotH;
                    const val = Math.round(minS + f * range);
                    return (
                      <g key={i}>
                        <line x1={padX} y1={y} x2={chartW - padX} y2={y} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                        <text x={padX - 4} y={y + 3} textAnchor="end" fontSize="8" fill="rgba(0,0,0,0.25)" fontWeight="600">{val}</text>
                      </g>
                    );
                  })}
                  {/* Target line */}
                  <line x1={padX} y1={targetY} x2={chartW - padX} y2={targetY}
                    stroke="#f97316" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                  <text x={chartW - padX + 4} y={targetY + 3} fontSize="8" fill="#f97316" fontWeight="700">Target</text>
                  {/* Score line */}
                  {pts.length > 1 && (
                    <path d={linePath} fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                  {/* Data points */}
                  {pts.map((p, i) => (
                    <g key={i}>
                      <circle cx={p.x} cy={p.y} r={i === pts.length - 1 ? 5 : 3.5}
                        fill={i === pts.length - 1 ? '#06b6d4' : '#fff'}
                        stroke="#06b6d4" strokeWidth="2" />
                      <text x={p.x} y={p.y - 10} textAnchor="middle" fontSize="9" fontWeight="700"
                        fill={i === pts.length - 1 ? '#06b6d4' : 'rgba(0,0,0,0.4)'}>{p.score}</text>
                    </g>
                  ))}
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

          {/* Sort domains by display order */}
          {['advanced-math', 'algebra', 'geometry', 'problem-solving'].map(domainId => {
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

  const [showDetailedDiag, setShowDetailedDiag] = useState(false);

  const renderDiagnosticView = () => {
    if (!diagnosticData) {
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

    const { questionDetails, navigationPattern, totalNavigationEvents,
      moduleTimeRemaining: modTimeRemaining, questionsVisitedMultipleTimes,
      calculatorUsageCount, markedForReviewCount } = diagnosticData;

    const questionEntries = Object.entries(questionDetails || {});
    const totalQ = questionEntries.length || totalQuestions;

    const totalTimeSpent = questionEntries.reduce((sum, [, q]) => sum + (q.timeSpent || 0), 0);
    const avgTime = totalQ > 0 ? (totalTimeSpent / totalQ) : 0;

    const slowest = [...questionEntries]
      .sort(([, a], [, b]) => (b.timeSpent || 0) - (a.timeSpent || 0))
      .slice(0, 3);

    // Domain performance
    const domainTotals = {};
    test.modules.forEach((_, modIdx) => {
      const domainBreak = calculateDomainBreakdown(modIdx);
      Object.entries(domainBreak).forEach(([domain, data]) => {
        if (!domainTotals[domain]) domainTotals[domain] = { correct: 0, total: 0 };
        domainTotals[domain].correct += data.correct;
        domainTotals[domain].total += data.total;
      });
    });
    const domainLabels = {
      algebra: 'Algebra',
      'advanced-math': 'Advanced Math',
      'problem-solving': 'Problem Solving & Data',
      geometry: 'Geometry & Trig',
    };
    const sortedDomains = Object.entries(domainTotals)
      .map(([d, data]) => ({ domain: d, ...data, pct: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0 }))
      .sort((a, b) => a.pct - b.pct);

    const strengths = sortedDomains.filter(d => d.pct >= 70).slice(-2).reverse();
    const weaknesses = sortedDomains.filter(d => d.pct < 70).slice(0, 2);

    // Point-loss attribution
    const incorrectEntries = questionEntries.filter(([, q]) => !q.isCorrect);
    const carelessCount = incorrectEntries.filter(([, q]) => {
      const qTime = q.timeSpent || 0;
      return (q.difficulty === 'easy') || (avgTime > 0 && qTime > 0 && qTime < avgTime * 0.7);
    }).length;
    const timePressureCount = incorrectEntries.filter(([, q]) => (q.timeSpent || 0) > avgTime * 1.35).length;
    const contentGapCount = Math.max(0, incorrectEntries.length - carelessCount - timePressureCount);
    const biggestBucket = carelessCount >= timePressureCount && carelessCount >= contentGapCount
      ? 'careless mistakes'
      : timePressureCount >= contentGapCount ? 'time pressure' : 'content gaps';

    // Difficulty totals
    const diffTotals = { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } };
    test.modules.forEach((_, modIdx) => {
      const db = calculateDifficultyBreakdown(modIdx);
      ['easy', 'medium', 'hard'].forEach(d => {
        diffTotals[d].correct += db[d].correct;
        diffTotals[d].total += db[d].correct + db[d].incorrect + db[d].unanswered;
      });
    });
    const missedEasy = questionEntries.filter(([, q]) => (q.difficulty === 'easy') && !q.isCorrect);

    // Top action
    const topAction = weaknesses.length > 0
      ? `Focus on ${domainLabels[weaknesses[0].domain] || weaknesses[0].domain} (${weaknesses[0].pct}%) — your biggest opportunity.`
      : missedEasy.length > 0
        ? `Lock in ${missedEasy.length} easy question${missedEasy.length > 1 ? 's' : ''} you missed.`
        : `Maintain consistency and keep practicing mixed sets.`;

    const cardStyle = {
      background: colors.surface.white,
      border: `1px solid ${colors.surface.grayDark}`,
      borderRadius: radius.md,
      padding: '20px',
      marginBottom: '16px',
    };

    const formatTime = (seconds) => {
      if (seconds < 60) return `${Math.round(seconds)}s`;
      const m = Math.floor(seconds / 60);
      const s = Math.round(seconds % 60);
      return `${m}m ${s}s`;
    };

    const questionLabel = (key) => {
      const [modIdx, qIdx] = key.split('-').map(Number);
      return `M${modIdx + 1} Q${qIdx + 1}`;
    };

    const navPatternLabel = { 'linear': 'Linear', 'strategic-skip': 'Strategic Skip', 'jumping': 'Jumping' };

    return (
      <div>
        {/* Section 1: Strengths & Weaknesses */}
        <div style={cardStyle}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '16px' }}>
            Your Performance at a Glance
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {/* Strengths */}
            <div style={{ flex: 1, minWidth: '220px' }}>
              <div style={{ fontSize: '12px', fontWeight: '600', color: colors.semantic.success, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Doing well
              </div>
              {strengths.length > 0 ? strengths.map(s => (
                <div key={s.domain} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: colors.semantic.successLight, borderRadius: radius.sm, marginBottom: '6px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: colors.text.primary }}>{domainLabels[s.domain] || s.domain}</span>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: colors.semantic.success }}>{s.pct}%</span>
                </div>
              )) : (
                <div style={{ fontSize: '13px', color: colors.text.secondary, padding: '8px 12px' }}>Keep working — strengths will emerge with practice.</div>
              )}
            </div>
            {/* Weaknesses */}
            <div style={{ flex: 1, minWidth: '220px' }}>
              <div style={{ fontSize: '12px', fontWeight: '600', color: colors.semantic.error, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Needs work
              </div>
              {weaknesses.length > 0 ? weaknesses.map(s => (
                <div key={s.domain} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: colors.semantic.errorLight, borderRadius: radius.sm, marginBottom: '6px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: colors.text.primary }}>{domainLabels[s.domain] || s.domain}</span>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: colors.semantic.error }}>{s.pct}%</span>
                </div>
              )) : (
                <div style={{ fontSize: '13px', color: colors.semantic.success, padding: '8px 12px', fontWeight: '500' }}>No major weak spots detected.</div>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Biggest Score Lever */}
        <div style={{
          ...cardStyle,
          background: colors.accent.tealLight,
          border: `1px solid ${colors.accent.teal}22`,
        }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '6px' }}>
            Biggest Score Lever
          </h3>
          <p style={{ fontSize: '13px', color: colors.text.secondary, margin: 0, marginBottom: '12px' }}>
            Most of your lost points came from <strong style={{ color: colors.text.primary }}>{biggestBucket}</strong>.
          </p>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            background: colors.surface.white, borderRadius: radius.sm, padding: '12px 16px',
            border: `1px solid ${colors.surface.grayDark}`,
          }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: radius.full,
              background: colors.accent.teal, color: colors.text.inverse,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', fontWeight: '700', flexShrink: 0,
            }}>1</div>
            <span style={{ fontSize: '14px', color: colors.text.primary, lineHeight: '1.45', fontWeight: '500' }}>
              {topAction}
            </span>
          </div>
          {onOpenDiagnosticReport && (
            <button
              onClick={onOpenDiagnosticReport}
              style={{
                ...buttonStyles.primary,
                background: colors.accent.teal,
                fontSize: '14px', fontWeight: '600',
                padding: '10px 20px', width: '100%', textAlign: 'center',
                marginTop: '14px',
              }}
            >
              Open Study Plan
            </button>
          )}
        </div>

        {/* Section 3: Point-Loss Summary (compact) */}
        <div style={cardStyle}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '12px' }}>
            Where Points Were Lost
          </h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { label: 'Careless', value: carelessCount, bg: colors.semantic.warningLight, fg: '#b45309' },
              { label: 'Time pressure', value: timePressureCount, bg: colors.semantic.infoLight, fg: colors.semantic.info },
              { label: 'Content gaps', value: contentGapCount, bg: colors.semantic.errorLight, fg: colors.semantic.error },
            ].map((b) => (
              <div key={b.label} style={{ flex: 1, minWidth: '100px', background: b.bg, borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: '700', color: b.fg }}>{b.value}</div>
                <div style={{ fontSize: '11px', color: colors.text.secondary, marginTop: '4px' }}>{b.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Collapsible: Detailed Breakdown */}
        <button
          onClick={() => setShowDetailedDiag(!showDetailedDiag)}
          style={{
            width: '100%', background: 'none', border: `1px solid ${colors.surface.grayDark}`,
            borderRadius: radius.sm, padding: '12px 16px', cursor: 'pointer',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: showDetailedDiag ? '16px' : '0',
          }}
        >
          <span style={{ fontSize: '14px', fontWeight: '600', color: colors.text.secondary }}>
            {showDetailedDiag ? 'Hide detailed breakdown' : 'See detailed breakdown'}
          </span>
          <span style={{ fontSize: '18px', color: colors.text.muted, transform: showDetailedDiag ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
            &#9660;
          </span>
        </button>

        {showDetailedDiag && (
          <div>
            {/* Domain Performance Bars */}
            <div style={cardStyle}>
              <h3 style={{ fontSize: '14px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '12px' }}>
                Domain Performance
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {sortedDomains.map(({ domain, correct, total, pct }) => {
                  const barColor = pct >= 80 ? colors.semantic.success : pct >= 60 ? colors.semantic.warning : colors.semantic.error;
                  return (
                    <div key={domain}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                        <span style={{ fontSize: '13px', fontWeight: '500', color: colors.text.primary }}>{domainLabels[domain] || domain}</span>
                        <span style={{ fontSize: '12px', fontWeight: '600', color: barColor }}>{correct}/{total} ({pct}%)</span>
                      </div>
                      <div style={{ background: colors.surface.gray, borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
                        <div style={{ width: `${pct}%`, height: '100%', background: barColor, borderRadius: '4px', transition: 'width 0.4s ease' }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Difficulty Breakdown */}
            <div style={cardStyle}>
              <h3 style={{ fontSize: '14px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '12px' }}>
                Difficulty Breakdown
              </h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['easy', 'medium', 'hard'].map(level => {
                  const d = diffTotals[level];
                  const pct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
                  const bgColor = level === 'easy' ? colors.semantic.successLight : level === 'medium' ? colors.semantic.warningLight : colors.semantic.errorLight;
                  const fgColor = level === 'easy' ? colors.semantic.success : level === 'medium' ? '#b45309' : colors.semantic.error;
                  return (
                    <div key={level} style={{ flex: 1, background: bgColor, borderRadius: '8px', padding: '14px', textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', fontWeight: '600', color: fgColor, textTransform: 'capitalize', marginBottom: '6px' }}>{level}</div>
                      <div style={{ fontSize: '22px', fontWeight: '700', color: fgColor }}>{pct}%</div>
                      <div style={{ fontSize: '11px', color: colors.text.secondary, marginTop: '3px' }}>{d.correct}/{d.total}</div>
                    </div>
                  );
                })}
              </div>
              {missedEasy.length > 0 && (
                <div style={{ marginTop: '10px', padding: '8px 12px', background: colors.semantic.errorLight, borderRadius: radius.sm, fontSize: '12px', color: colors.semantic.error, fontWeight: '500' }}>
                  {missedEasy.length} easy miss{missedEasy.length > 1 ? 'es' : ''} — quickest points to recover.
                </div>
              )}
            </div>

            {/* Behavior + Time (merged compact) */}
            <div style={cardStyle}>
              <h3 style={{ fontSize: '14px', fontWeight: '700', color: colors.text.primary, margin: 0, marginBottom: '12px' }}>
                Test Behavior & Time
              </h3>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
                <div style={{ background: colors.surface.offWhite, borderRadius: radius.sm, padding: '10px 16px', flex: 1, minWidth: '120px' }}>
                  <div style={{ fontSize: '11px', color: colors.text.secondary }}>Navigation</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: colors.accent.teal }}>{navPatternLabel[navigationPattern] || 'Linear'}</div>
                </div>
                <div style={{ background: colors.surface.offWhite, borderRadius: radius.sm, padding: '10px 16px', flex: 1, minWidth: '120px' }}>
                  <div style={{ fontSize: '11px', color: colors.text.secondary }}>Avg Time</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: colors.semantic.info }}>{formatTime(avgTime)}</div>
                </div>
                <div style={{ background: colors.surface.offWhite, borderRadius: radius.sm, padding: '10px 16px', flex: 1, minWidth: '120px' }}>
                  <div style={{ fontSize: '11px', color: colors.text.secondary }}>Calculator</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: colors.semantic.info }}>{calculatorUsageCount}/{totalQ}</div>
                </div>
                <div style={{ background: colors.surface.offWhite, borderRadius: radius.sm, padding: '10px 16px', flex: 1, minWidth: '120px' }}>
                  <div style={{ fontSize: '11px', color: colors.text.secondary }}>Flagged</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: colors.accent.orange }}>{markedForReviewCount}</div>
                </div>
              </div>
              {slowest.length > 0 && (
                <>
                  <div style={{ fontSize: '12px', fontWeight: '600', color: colors.text.secondary, marginBottom: '6px' }}>Slowest Questions</div>
                  {slowest.map(([key, q]) => {
                    const diffColor = q.difficulty === 'hard' ? colors.semantic.error : q.difficulty === 'medium' ? colors.semantic.warning : colors.semantic.success;
                    return (
                      <div key={key} style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '6px 10px', borderRadius: '6px',
                        background: q.isCorrect ? colors.semantic.successLight : colors.semantic.errorLight,
                        marginBottom: '3px', fontSize: '12px',
                      }}>
                        <span style={{ fontWeight: '600', color: colors.text.secondary, minWidth: '50px' }}>{questionLabel(key)}</span>
                        <span style={{ fontWeight: '500', padding: '1px 6px', borderRadius: '3px', background: diffColor, color: colors.text.inverse, textTransform: 'capitalize', fontSize: '10px' }}>
                          {q.difficulty || 'medium'}
                        </span>
                        <span style={{ flex: 1, color: q.isCorrect ? colors.semantic.success : colors.semantic.error, fontWeight: '500' }}>
                          {q.isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                        <span style={{ fontWeight: '600', color: colors.text.secondary }}>{formatTime(q.timeSpent || 0)}</span>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{
        background: colors.surface.dark,
        color: colors.text.inverse,
        padding: '16px 24px',
        borderRadius: `${radius.md} ${radius.md} 0 0`,
        marginBottom: '0'
      }}>
        <h1 style={{
          fontSize: '18px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {test.title.toUpperCase()} <span style={{ fontWeight: '400', opacity: 0.8 }}>
            ({new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })})
          </span>
        </h1>
      </div>

      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        background: colors.surface.gray,
        borderBottom: `1px solid ${colors.surface.grayDark}`,
        overflowX: 'auto'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '14px 20px',
              background: activeTab === tab.id ? colors.surface.white : 'transparent',
              border: 'none',
              borderBottom: activeTab === tab.id ? `3px solid ${colors.accent.teal}` : '3px solid transparent',
              color: activeTab === tab.id ? colors.accent.teal : colors.text.secondary,
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            {tab.id === 'summary' && (
              <span style={{ marginRight: '6px', display: 'inline-flex', verticalAlign: 'middle' }}>
                <CircleDotIcon size={12} color={activeTab === tab.id ? colors.accent.teal : colors.text.secondary} />
              </span>
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div style={{
        background: colors.surface.white,
        padding: '32px',
        borderRadius: `0 0 ${radius.md} ${radius.md}`,
        boxShadow: shadows.md
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
