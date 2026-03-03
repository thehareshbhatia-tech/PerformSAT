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
  onBack,
  onRetake,
  onReview,
  onReviewModule // New: review specific module
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

    return (
      <div>
        {/* Total Score Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '400',
            color: colors.text.secondary,
            marginBottom: '24px'
          }}>
            Total Score
          </h2>
          <ScoreBadge score={satScore} maxScore={800} size="large" />
        </div>

        {/* Score Explanation */}
        <div style={{
          background: colors.semantic.infoLight,
          border: `1px solid ${colors.semantic.infoBg}`,
          borderRadius: radius.sm,
          padding: '16px 20px',
          marginBottom: '32px',
          fontSize: '13px',
          color: colors.semantic.info
        }}>
          <strong>HOW ARE SCORES CALCULATED?</strong>
          <p style={{ marginTop: '8px', lineHeight: '1.5' }}>
            Scores are calculated using item response theory, which is the paradigm for SAT scoring.
            This scoring algorithm relies on aggregated student performance data, and therefore will
            be updated over time as our data set changes, to provide the most accurate estimated score
            based on your answers.
          </p>
        </div>

        {/* Math Score Card */}
        <div style={{
          background: colors.accent.teal,
          borderRadius: radius.md,
          padding: '24px',
          color: colors.text.inverse,
          marginBottom: '32px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '500',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Your Math Score
          </h3>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '20px'
          }}>
            {/* Score circle */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: radius.full,
              background: colors.surface.white,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.accent.teal,
              fontSize: '28px',
              fontWeight: '700'
            }}>
              {satScore}
            </div>

            {/* Progress bar */}
            <div style={{ flex: 1, maxWidth: '250px' }}>
              <div style={{
                height: '10px',
                background: 'rgba(255,255,255,0.3)',
                borderRadius: '5px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${((satScore - 200) / 600) * 100}%`,
                  height: '100%',
                  background: colors.surface.white,
                  borderRadius: '5px'
                }} />
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '4px',
                fontSize: '12px',
                opacity: 0.8
              }}>
                <span>200</span>
                <span>800</span>
              </div>
            </div>
          </div>

          {/* Module routing info */}
          <div style={{
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '8px',
              fontSize: '14px'
            }}>
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '4px 12px',
                borderRadius: '4px'
              }}>
                Module 1
              </span>
              <ArrowRightIcon size={20} color={colors.text.inverse} />
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '4px 12px',
                borderRadius: '4px'
              }}>
                Module 2 {mod2Hard ? '(Hard)' : '(Standard)'}
              </span>
            </div>
            <p style={{ fontSize: '13px', opacity: 0.9 }}>
              {mod2Hard
                ? "Great job! Your performance on Module 1 unlocked Module 2 (Hard) and increased your ceiling score."
                : "Complete Module 1 with 60%+ accuracy to unlock the harder Module 2 and increase your ceiling score."
              }
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={onBack}
            style={{
              padding: '12px 28px',
              background: colors.surface.white,
              color: colors.text.secondary,
              border: `1px solid ${colors.surface.grayMedium}`,
              borderRadius: radius.sm,
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Back to Practice Tests
          </button>
          <button
            onClick={onRetake}
            style={{
              padding: '12px 28px',
              background: colors.surface.dark,
              color: colors.text.inverse,
              border: 'none',
              borderRadius: radius.sm,
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Retake Test
          </button>
          <button
            onClick={onReview}
            style={{
              padding: '12px 28px',
              background: colors.accent.teal,
              color: colors.text.inverse,
              border: 'none',
              borderRadius: radius.sm,
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Review Answers
          </button>
        </div>
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
      .slice(0, 5);

    // Domain performance across all modules
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

    // Difficulty breakdown across all modules
    const diffTotals = { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } };
    test.modules.forEach((_, modIdx) => {
      const db = calculateDifficultyBreakdown(modIdx);
      ['easy', 'medium', 'hard'].forEach(d => {
        diffTotals[d].correct += db[d].correct;
        diffTotals[d].total += db[d].correct + db[d].incorrect + db[d].unanswered;
      });
    });

    // Answer change analysis
    const totalAnswerChanges = questionEntries.reduce((sum, [, q]) => sum + (q.answerChanges || 0), 0);
    const changedCorrectly = questionEntries.filter(([, q]) => (q.answerChanges || 0) > 0 && q.isCorrect).length;
    const changedIncorrectly = questionEntries.filter(([, q]) => (q.answerChanges || 0) > 0 && !q.isCorrect).length;

    // Missed easy questions
    const missedEasy = questionEntries.filter(([, q]) => (q.difficulty === 'easy') && !q.isCorrect);

    // Study recommendations (skill-aware but concise)
    const skillMap = {};
    questionEntries.forEach(([, q]) => {
      (q.skills || []).forEach(skillId => {
        if (!skillMap[skillId]) skillMap[skillId] = { correct: 0, total: 0 };
        skillMap[skillId].total += 1;
        if (q.isCorrect) skillMap[skillId].correct += 1;
      });
    });
    const recommendations = [];
    const weakSkills = Object.entries(skillMap)
      .map(([id, d]) => ({ name: getSkillById(id)?.name || id, ...d, pct: d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0 }))
      .filter(s => s.pct < 60 && s.total >= 1)
      .sort((a, b) => a.pct - b.pct)
      .slice(0, 3);
    weakSkills.forEach(s => recommendations.push(`Focus on ${s.name} — you got ${s.correct}/${s.total} correct.`));
    if (navigationPattern === 'jumping') recommendations.push('Try working through questions in order first, then revisit flagged ones.');
    if (markedForReviewCount === 0 && questionEntries.filter(([, q]) => !q.isCorrect).length > 3) {
      recommendations.push('Use mark-for-review to flag uncertain answers for a second pass.');
    }
    if (missedEasy.length > 0) recommendations.push(`You missed ${missedEasy.length} easy question${missedEasy.length > 1 ? 's' : ''} — these are the highest-value points to recover.`);
    if (recommendations.length === 0) recommendations.push('Great job! Keep practicing to maintain your skills.');

    const navPatternLabel = { 'linear': 'Linear', 'strategic-skip': 'Strategic Skip', 'jumping': 'Jumping' };
    const navPatternTip = {
      'linear': 'Steady and methodical — great for not missing questions.',
      'strategic-skip': 'Smart approach — skipping hard ones and coming back.',
      'jumping': 'Lots of jumping around — may cause careless errors.',
    };

    const cardStyle = {
      background: colors.surface.white,
      border: `1px solid ${colors.surface.grayDark}`,
      borderRadius: radius.md,
      padding: '20px',
      marginBottom: '20px',
    };

    const heading = (text, subtitle) => (
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: '700', color: colors.text.primary, margin: 0 }}>{text}</h3>
        {subtitle && <div style={{ fontSize: '12px', color: colors.text.tertiary, marginTop: '2px' }}>{subtitle}</div>}
      </div>
    );

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

    const statBox = (label, value, color, sub) => (
      <div style={{ background: `${color}12`, borderRadius: '10px', padding: '14px', textAlign: 'center', flex: 1, minWidth: '100px' }}>
        <div style={{ fontSize: '12px', color: colors.text.secondary, marginBottom: '6px' }}>{label}</div>
        <div style={{ fontSize: '22px', fontWeight: '700', color }}>{value}</div>
        {sub && <div style={{ fontSize: '11px', color: colors.text.muted, marginTop: '3px' }}>{sub}</div>}
      </div>
    );

    return (
      <div>
        {/* Quick Stats Row */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {statBox('Score', `${totalCorrect}/${totalQ}`, colors.accent.teal, `${Math.round((totalCorrect / totalQ) * 100)}% accuracy`)}
          {statBox('Avg Time', formatTime(avgTime), colors.semantic.info, 'per question')}
          {statBox('Answer Changes', totalAnswerChanges, colors.semantic.warning, totalAnswerChanges > 0 ? `${changedCorrectly} helped, ${changedIncorrectly} hurt` : 'none')}
          {statBox('Flagged', markedForReviewCount, colors.accent.orange, `${questionsVisitedMultipleTimes} revisited`)}
        </div>

        {/* Domain Performance */}
        <div style={cardStyle}>
          {heading('Domain Performance', 'How you did across SAT content areas')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {Object.entries(domainTotals).map(([domain, data]) => {
              const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
              const barColor = pct >= 80 ? colors.semantic.success : pct >= 60 ? colors.semantic.warning : colors.semantic.error;
              return (
                <div key={domain}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}>{domainLabels[domain] || domain}</span>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: barColor }}>{data.correct}/{data.total} ({pct}%)</span>
                  </div>
                  <div style={{ background: colors.surface.gray, borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: barColor, borderRadius: '4px', transition: 'width 0.4s ease' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div style={cardStyle}>
          {heading('Difficulty Breakdown', 'Where you gained and lost points')}
          <div style={{ display: 'flex', gap: '12px' }}>
            {['easy', 'medium', 'hard'].map(level => {
              const d = diffTotals[level];
              const pct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
              const bgColor = level === 'easy' ? colors.semantic.successLight : level === 'medium' ? colors.semantic.warningLight : colors.semantic.errorLight;
              const fgColor = level === 'easy' ? colors.semantic.success : level === 'medium' ? '#b45309' : colors.semantic.error;
              return (
                <div key={level} style={{ flex: 1, background: bgColor, borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', fontWeight: '600', color: fgColor, textTransform: 'capitalize', marginBottom: '8px' }}>{level}</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: fgColor }}>{pct}%</div>
                  <div style={{ fontSize: '12px', color: colors.text.secondary, marginTop: '4px' }}>{d.correct}/{d.total} correct</div>
                </div>
              );
            })}
          </div>
          {missedEasy.length > 0 && (
            <div style={{ marginTop: '12px', padding: '10px 14px', background: colors.semantic.errorLight, borderRadius: radius.sm, fontSize: '13px', color: colors.semantic.error, fontWeight: '500' }}>
              You missed {missedEasy.length} easy question{missedEasy.length > 1 ? 's' : ''} — these are the quickest points to recover.
            </div>
          )}
        </div>

        {/* Test-Taking Behavior */}
        <div style={cardStyle}>
          {heading('Test-Taking Behavior', navPatternTip[navigationPattern] || '')}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '140px', background: colors.accent.tealLight, borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: colors.text.secondary, marginBottom: '6px' }}>Navigation</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: colors.accent.teal }}>{navPatternLabel[navigationPattern] || 'Linear'}</div>
            </div>
            <div style={{ flex: 1, minWidth: '140px', background: colors.semantic.infoLight, borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', color: colors.text.secondary, marginBottom: '6px' }}>Calculator Used</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: colors.semantic.info }}>{calculatorUsageCount} <span style={{ fontSize: '12px', fontWeight: '400' }}>of {totalQ}</span></div>
            </div>
          </div>
        </div>

        {/* Time Analysis */}
        <div style={cardStyle}>
          {heading('Time Analysis', 'Where your time went')}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div style={{ background: colors.surface.offWhite, borderRadius: radius.sm, padding: '12px 20px' }}>
              <div style={{ fontSize: '12px', color: colors.text.secondary }}>Total Time</div>
              <div style={{ fontSize: '18px', fontWeight: '600', color: colors.text.primary }}>{formatTime(totalTimeSpent)}</div>
            </div>
            {Object.entries(modTimeRemaining || {}).map(([modIdx, remaining]) => (
              <div key={modIdx} style={{ background: colors.surface.offWhite, borderRadius: radius.sm, padding: '12px 20px' }}>
                <div style={{ fontSize: '12px', color: colors.text.secondary }}>Module {parseInt(modIdx) + 1} Time Left</div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: remaining === null ? colors.text.muted : remaining > 120 ? colors.semantic.success : colors.accent.orange }}>
                  {remaining === null ? 'Untimed' : formatTime(remaining)}
                </div>
              </div>
            ))}
          </div>
          {slowest.length > 0 && (
            <>
              <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.secondary, marginBottom: '8px' }}>Slowest Questions</div>
              {slowest.map(([key, q]) => {
                const diffColor = q.difficulty === 'hard' ? colors.semantic.error : q.difficulty === 'medium' ? colors.semantic.warning : colors.semantic.success;
                return (
                  <div key={key} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '8px 12px', borderRadius: '6px',
                    background: q.isCorrect ? colors.semantic.successLight : colors.semantic.errorLight,
                    marginBottom: '4px'
                  }}>
                    <span style={{ fontWeight: '600', fontSize: '13px', color: colors.text.secondary, minWidth: '55px' }}>{questionLabel(key)}</span>
                    <span style={{ fontSize: '11px', fontWeight: '500', padding: '2px 8px', borderRadius: '4px', background: diffColor, color: colors.text.inverse, textTransform: 'capitalize' }}>
                      {q.difficulty || 'medium'}
                    </span>
                    <span style={{ flex: 1, fontSize: '13px', color: q.isCorrect ? colors.semantic.success : colors.semantic.error, fontWeight: '500' }}>
                      {q.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                    <span style={{ fontWeight: '600', fontSize: '14px', color: colors.text.secondary }}>{formatTime(q.timeSpent || 0)}</span>
                  </div>
                );
              })}
            </>
          )}
        </div>

        {/* What To Do Next */}
        <div style={{ ...cardStyle, background: colors.accent.tealLight, border: `1px solid ${colors.accent.teal}22` }}>
          {heading('What To Do Next', 'Personalized recommendations based on this test')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {recommendations.map((rec, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '22px', height: '22px', borderRadius: '50%', background: colors.accent.teal,
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px',
                }}>{i + 1}</div>
                <span style={{ fontSize: '14px', color: colors.text.secondary, lineHeight: '1.5' }}>{rec}</span>
              </div>
            ))}
          </div>
        </div>
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
