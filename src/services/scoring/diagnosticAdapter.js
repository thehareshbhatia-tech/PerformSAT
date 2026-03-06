/**
 * Diagnostic-to-UI adapter.
 *
 * Converts the verbose diagnostic report from `runDiagnostic()` into a
 * stable, UI-ready shape that the TestResults Diagnostic Insights tab
 * can render directly.  Keeps all formatting and fallback logic out of
 * the component body.
 */

import { DOMAIN_DISPLAY_NAMES, SAT_MATH_DOMAINS } from './domainInference';

const ERROR_TYPE_DISPLAY = {
  careless_error:       { label: 'Careless Mistakes',   color: '#b45309', bg: 'rgba(245, 158, 11, 0.08)' },
  trap_susceptibility:  { label: 'Trap Answers',        color: '#9333ea', bg: 'rgba(147, 51, 234, 0.08)' },
  time_pressure:        { label: 'Time Pressure',       color: '#0284c7', bg: 'rgba(14, 165, 233, 0.08)' },
  conceptual_gap:       { label: 'Concept Gaps',        color: '#dc2626', bg: 'rgba(239, 68, 68, 0.08)' },
  procedural_error:     { label: 'Procedural Errors',   color: '#ea580c', bg: 'rgba(249, 115, 22, 0.08)' },
  unanswered:           { label: 'Unanswered',          color: '#64748b', bg: 'rgba(100, 116, 139, 0.08)' },
};

function formatTime(seconds) {
  if (seconds == null || seconds === 0) return '0s';
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}m ${s}s`;
}

function questionLabel(key) {
  const [modIdx, qIdx] = key.split('-').map(Number);
  return `M${modIdx + 1} Q${qIdx + 1}`;
}

/**
 * Build the "Key Findings" list -- the 2-4 most important takeaways
 * from the diagnostic report, each with supporting evidence.
 */
function buildKeyFindings(report) {
  const findings = [];

  const { mistakeFingerprint, errorPatterns, scoreProjection, stamina, timeAnalysis } = report;

  if (mistakeFingerprint?.archetypeLabel && mistakeFingerprint.archetype !== 'balanced') {
    findings.push({
      id: 'archetype',
      title: mistakeFingerprint.archetypeLabel,
      detail: mistakeFingerprint.archetypeDescription,
      severity: 'info',
    });
  }

  if (scoreProjection?.easyWins?.count >= 2) {
    findings.push({
      id: 'easy-wins',
      title: `${scoreProjection.easyWins.count} easy questions missed`,
      detail: `Getting them right would add +${scoreProjection.easyWins.projectedGain} points. These are the fastest points to recover.`,
      severity: 'warning',
    });
  }

  const dominant = errorPatterns?.dominantPattern;
  if (dominant && dominant.count >= 3) {
    const display = ERROR_TYPE_DISPLAY[dominant.type] || { label: dominant.label };
    findings.push({
      id: 'dominant-error',
      title: `${display.label}: ${dominant.count} questions (${dominant.percentage}%)`,
      detail: dominant.description || `This is your most common error type.`,
      severity: dominant.type === 'conceptual_gap' ? 'error' : 'warning',
    });
  }

  if (stamina?.hasData && stamina.dropoff > 15) {
    findings.push({
      id: 'stamina-drop',
      title: `${stamina.dropoff}% accuracy drop by test end`,
      detail: stamina.message,
      severity: stamina.dropoff > 25 ? 'error' : 'warning',
    });
  }

  if (timeAnalysis?.insights?.length > 0) {
    const warning = timeAnalysis.insights.find(i => i.type === 'warning');
    if (warning) {
      findings.push({
        id: 'time-warning',
        title: 'Time management signal',
        detail: warning.message,
        severity: 'warning',
      });
    }
  }

  return findings.slice(0, 4);
}

/**
 * Build "Why Points Were Lost" -- error-pattern breakdown with
 * confidence-backed classifications from the engine.
 */
function buildPointLoss(report) {
  const { errorPatterns } = report;
  if (!errorPatterns) return [];

  return (errorPatterns.summary || []).map(s => {
    const display = ERROR_TYPE_DISPLAY[s.type] || { label: s.label, color: '#888', bg: 'rgba(0,0,0,0.04)' };
    return {
      type: s.type,
      label: display.label,
      count: s.count,
      percentage: s.percentage,
      color: display.color,
      bg: display.bg,
      sampleQuestions: (s.questions || []).slice(0, 3).map(q => ({
        key: q.key,
        label: questionLabel(q.key),
        difficulty: q.difficulty,
        reasoning: q.reasoning,
        confidence: q.confidence,
        domain: q.domain,
        timeSpent: q.timeSpent,
      })),
    };
  });
}

/**
 * Build "Highest ROI Fixes" from prioritized actions + score projection.
 */
function buildROIFixes(report) {
  const { prioritizedActions, scoreProjection } = report;
  if (!prioritizedActions) return [];

  return prioritizedActions.slice(0, 5).map(a => ({
    title: a.title,
    description: a.description,
    estimatedGain: a.estimatedGain,
    effort: a.effort,
    category: a.category,
    actionItems: a.actionItems || [],
  }));
}

/**
 * Build domain performance data in stable SAT order.
 */
function buildDomainPerformance(report) {
  const { domainAnalysis } = report;
  if (!domainAnalysis) return [];

  const domainMap = {};
  domainAnalysis.forEach(d => { domainMap[d.domain] = d; });

  return SAT_MATH_DOMAINS
    .filter(id => domainMap[id])
    .map(id => {
      const d = domainMap[id];
      return {
        domain: id,
        displayName: DOMAIN_DISPLAY_NAMES[id] || d.displayName,
        correct: d.correct,
        total: d.total,
        accuracy: d.accuracy,
        color: d.color,
        pointsAvailable: d.pointsAvailable,
        topErrorType: (() => {
          const entries = Object.entries(d.errorTypes || {});
          if (entries.length === 0) return null;
          entries.sort((a, b) => b[1] - a[1]);
          const display = ERROR_TYPE_DISPLAY[entries[0][0]];
          return display ? display.label : entries[0][0];
        })(),
      };
    });
}

/**
 * Build behavior signals from time analysis, stamina, answer patterns,
 * and raw diagnosticData.
 */
function buildBehaviorSignals(report, rawDiagnosticData) {
  const { timeAnalysis, stamina, answerPatterns } = report;
  const raw = rawDiagnosticData || {};

  const signals = [];

  if (timeAnalysis) {
    signals.push({ label: 'Avg time / question', value: formatTime(timeAnalysis.avgTimePerQuestion), type: 'neutral' });
    signals.push({
      label: 'Correct vs wrong speed',
      value: `${formatTime(timeAnalysis.avgCorrectTime)} vs ${formatTime(timeAnalysis.avgIncorrectTime)}`,
      type: timeAnalysis.avgIncorrectTime < timeAnalysis.avgCorrectTime * 0.6 ? 'warning' : 'neutral',
    });
    if (timeAnalysis.timeRelatedErrors > 0) {
      signals.push({ label: 'Time-related errors', value: `${timeAnalysis.timeRelatedErrors}`, type: 'warning' });
    }
  }

  if (stamina?.hasData) {
    signals.push({
      label: 'Stamina',
      value: `${stamina.staminaScore}/100 (${stamina.rating.replace('_', ' ')})`,
      type: stamina.staminaScore < 70 ? 'warning' : 'good',
    });
    signals.push({
      label: '1st half → 2nd half accuracy',
      value: `${timeAnalysis?.firstHalfAccuracy ?? '?'}% → ${timeAnalysis?.secondHalfAccuracy ?? '?'}%`,
      type: (timeAnalysis?.fadeEffect ?? 0) > 15 ? 'warning' : 'neutral',
    });
  }

  if (raw.navigationPattern) {
    const navLabels = { 'linear': 'Linear', 'strategic-skip': 'Strategic Skip', 'jumping': 'Jumping' };
    signals.push({ label: 'Navigation', value: navLabels[raw.navigationPattern] || 'Linear', type: 'neutral' });
  }

  if (raw.calculatorUsageCount != null) {
    const totalQ = Object.keys(raw.questionDetails || {}).length || 1;
    signals.push({ label: 'Calculator usage', value: `${raw.calculatorUsageCount}/${totalQ}`, type: 'neutral' });
  }
  if (raw.markedForReviewCount != null) {
    signals.push({ label: 'Flagged for review', value: `${raw.markedForReviewCount}`, type: 'neutral' });
  }

  return signals;
}

/**
 * Build difficulty breakdown from the engine's difficultyAnalysis.
 */
function buildDifficultyBreakdown(report) {
  const { difficultyAnalysis } = report;
  if (!difficultyAnalysis?.levels) return null;

  return ['easy', 'medium', 'hard'].map(level => {
    const d = difficultyAnalysis.levels[level] || { correct: 0, total: 0, accuracy: 0 };
    return {
      level,
      correct: d.correct,
      total: d.total,
      accuracy: d.accuracy,
    };
  });
}

/**
 * Build question evidence -- representative missed questions with
 * classification reasoning.
 */
function buildQuestionEvidence(report) {
  const { questionAnalysis } = report;
  if (!questionAnalysis) return [];

  return questionAnalysis
    .filter(q => !q.isCorrect && q.reasoning)
    .sort((a, b) => (b.confidence || 0) - (a.confidence || 0))
    .slice(0, 6)
    .map(q => ({
      key: q.key,
      label: questionLabel(q.key),
      difficulty: q.difficulty,
      domain: q.domain,
      domainName: DOMAIN_DISPLAY_NAMES[q.domain] || q.domain,
      errorType: q.errorType,
      errorLabel: (ERROR_TYPE_DISPLAY[q.errorType] || {}).label || q.errorType,
      errorColor: (ERROR_TYPE_DISPLAY[q.errorType] || {}).color || '#888',
      reasoning: q.reasoning,
      confidence: q.confidence,
      timeSpent: q.timeSpent,
      timeFormatted: formatTime(q.timeSpent),
    }));
}

/**
 * Build the score-projection summary for the UI.
 */
function buildScoreProjection(report) {
  const { scoreProjection } = report;
  if (!scoreProjection) return null;

  return {
    currentScore: scoreProjection.currentScore,
    targetScore: scoreProjection.targetScore,
    gap: scoreProjection.gap,
    questionsNeeded: scoreProjection.questionsNeededForTarget,
    quickWins: scoreProjection.quickWins,
    easyWins: scoreProjection.easyWins,
    topDomainGain: scoreProjection.domainProjections?.[0] || null,
  };
}

/**
 * Main adapter entry point.
 *
 * @param {object} report       Full output from `runDiagnostic()`
 * @param {object} rawDiagData  The raw `diagnosticData` from PracticeTest (for nav/calc/flags)
 * @returns {object}  UI-ready diagnostic payload
 */
export function adaptDiagnosticForUI(report, rawDiagData) {
  if (!report) return null;

  return {
    keyFindings: buildKeyFindings(report),
    pointLoss: buildPointLoss(report),
    roiFixes: buildROIFixes(report),
    domains: buildDomainPerformance(report),
    behavior: buildBehaviorSignals(report, rawDiagData),
    difficulty: buildDifficultyBreakdown(report),
    questionEvidence: buildQuestionEvidence(report),
    scoreProjection: buildScoreProjection(report),
    score: report.score,
    percentile: report.percentile,
    fingerprint: report.mistakeFingerprint,
  };
}
