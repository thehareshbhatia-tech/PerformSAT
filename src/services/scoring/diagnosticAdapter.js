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
 * Build weakness clusters — groups of related misses by concept family
 * or root-cause failure mode.
 */
function buildWeaknessClusters(report) {
  const { skillClusters, rootCauseClusters } = report;
  const clusters = [];

  (skillClusters || []).forEach(c => {
    clusters.push({
      id: `skill-${c.rootConcept}`,
      type: 'concept',
      label: c.name,
      severity: c.severity,
      detail: c.recommendation,
      failedSkills: c.failedSkills,
      questionsAffected: c.questionsAffected,
      failRate: c.failRate,
    });
  });

  (rootCauseClusters || []).forEach(c => {
    clusters.push({
      id: c.id,
      type: 'root-cause',
      label: c.label,
      severity: c.severity,
      detail: c.description,
      count: c.count,
      questions: (c.questions || []).slice(0, 4).map(k => questionLabel(k)),
      recurringSkills: c.recurringSkills,
    });
  });

  return clusters;
}

/**
 * Build persistent weaknesses — skills that reappear across multiple tests.
 */
function buildPersistentWeaknesses(report) {
  const { trendAnalysis } = report;
  if (!trendAnalysis?.hasHistory) return [];

  const items = [];

  (trendAnalysis.persistentWeaknesses || []).forEach(pw => {
    items.push({
      type: 'persistent-skill',
      skill: pw.name,
      skillId: pw.skillId,
      testsWeak: pw.testCount,
      detail: `Weak across ${pw.testCount} test${pw.testCount > 1 ? 's' : ''} — needs focused remediation`,
      severity: pw.testCount >= 3 ? 'critical' : 'moderate',
    });
  });

  (trendAnalysis.decliningSkills || []).forEach(name => {
    items.push({
      type: 'declining-skill',
      skill: name,
      detail: 'Performance trending downward across recent tests',
      severity: 'warning',
    });
  });

  return items;
}

/**
 * Build behavior → outcome links — where specific test-taking behaviors
 * hurt or helped performance.
 */
function buildBehaviorOutcomes(report, rawDiagnosticData) {
  const { answerPatterns, questionAnalysis, timeAnalysis } = report;
  const outcomes = [];

  const changes = answerPatterns?.answerChanges;
  if (changes && changes.total >= 2) {
    const net = changes.changedToCorrect - changes.changedToWrong;
    outcomes.push({
      id: 'answer-changes',
      behavior: 'Answer Changes',
      stat: `${changes.total} changes (${changes.changedToCorrect} helped, ${changes.changedToWrong} hurt)`,
      impact: net >= 0 ? 'positive' : 'negative',
      detail: changes.advice,
    });
  }

  const elimination = answerPatterns?.elimination;
  if (elimination && elimination.used > 0) {
    outcomes.push({
      id: 'elimination',
      behavior: 'Process of Elimination',
      stat: `Used on ${elimination.used} questions, ${elimination.accuracy}% accuracy`,
      impact: (elimination.accuracy || 0) >= 60 ? 'positive' : 'negative',
      detail: elimination.insight,
    });
  }

  if (questionAnalysis) {
    const reviewed = questionAnalysis.filter(q => q.markedForReview);
    if (reviewed.length > 0) {
      const reviewedCorrect = reviewed.filter(q => q.isCorrect).length;
      const reviewAcc = Math.round((reviewedCorrect / reviewed.length) * 100);
      outcomes.push({
        id: 'flagged-review',
        behavior: 'Flagged for Review',
        stat: `${reviewed.length} flagged, ${reviewAcc}% correct`,
        impact: reviewAcc >= 50 ? 'positive' : 'negative',
        detail: reviewAcc < 50
          ? 'Most flagged questions were wrong — flagging may signal low confidence, not genuine uncertainty'
          : 'Good review instinct — flagged questions were mostly answered correctly after revisiting',
      });
    }

    const calcUsed = questionAnalysis.filter(q => q.usedCalculator);
    if (calcUsed.length > 0) {
      const calcAcc = Math.round((calcUsed.filter(q => q.isCorrect).length / calcUsed.length) * 100);
      const easyCalc = calcUsed.filter(q => q.difficulty === 'easy').length;
      outcomes.push({
        id: 'calculator',
        behavior: 'Calculator Usage',
        stat: `${calcUsed.length} questions, ${calcAcc}% accuracy`,
        impact: easyCalc > 3 ? 'negative' : 'neutral',
        detail: easyCalc > 3
          ? `Calculator used on ${easyCalc} easy questions — building mental math fluency could save time`
          : 'Reasonable calculator usage pattern',
      });
    }
  }

  if (timeAnalysis && timeAnalysis.avgIncorrectTime > 0 && timeAnalysis.avgCorrectTime > 0) {
    const ratio = timeAnalysis.avgIncorrectTime / timeAnalysis.avgCorrectTime;
    if (ratio < 0.6) {
      outcomes.push({
        id: 'rushing-wrong',
        behavior: 'Rushing on Wrong Answers',
        stat: `Wrong answers: ${formatTime(timeAnalysis.avgIncorrectTime)} avg vs correct: ${formatTime(timeAnalysis.avgCorrectTime)} avg`,
        impact: 'negative',
        detail: 'You answered wrong questions much faster than correct ones — slowing down could recover points',
      });
    }
  }

  return outcomes;
}

/**
 * Build time allocation by domain — where time was over/under-invested.
 */
function buildTimeAllocation(report) {
  const { timeAllocation } = report;
  if (!timeAllocation || timeAllocation.length === 0) return [];

  return timeAllocation.map(ta => ({
    domain: ta.domain,
    displayName: DOMAIN_DISPLAY_NAMES[ta.domain] || ta.domain,
    timePct: ta.timePct,
    accuracy: ta.accuracy,
    timeFormatted: formatTime(ta.timeSpent),
    questionCount: ta.questionCount,
    efficiency: ta.efficiency,
    isOverinvested: ta.isOverinvested,
  }));
}

/**
 * Build confidence indicators — how reliable are different diagnosis sections.
 */
function buildConfidenceIndicators(report) {
  const { confidenceInterval, questionAnalysis, trendAnalysis } = report;
  const indicators = [];

  if (confidenceInterval) {
    indicators.push({
      id: 'score-reliability',
      area: 'Score Estimate',
      confidence: confidenceInterval.reliability,
      detail: confidenceInterval.message,
    });
  }

  if (questionAnalysis) {
    const withReasoning = questionAnalysis.filter(q => !q.isCorrect && q.confidence);
    if (withReasoning.length > 0) {
      const avgConf = Math.round(withReasoning.reduce((s, q) => s + q.confidence, 0) / withReasoning.length * 100);
      const lowConf = withReasoning.filter(q => q.confidence < 0.6).length;
      indicators.push({
        id: 'error-classification',
        area: 'Error Classifications',
        confidence: avgConf >= 70 ? 'high' : avgConf >= 55 ? 'moderate' : 'low',
        detail: lowConf > 0
          ? `Average classification confidence: ${avgConf}%. ${lowConf} classification(s) are uncertain — treat those with caution.`
          : `Average classification confidence: ${avgConf}%.`,
      });
    }
  }

  if (trendAnalysis) {
    indicators.push({
      id: 'trend-data',
      area: 'Trend Analysis',
      confidence: trendAnalysis.hasHistory ? 'high' : 'low',
      detail: trendAnalysis.hasHistory
        ? 'Cross-test comparison data is available.'
        : 'No prior test data — trend insights will improve after more tests.',
    });
  }

  return indicators;
}

/**
 * Build quick stats strip for the diagnostic hero.
 */
function buildQuickStats(report) {
  const stats = [];

  if (report.score && report.score.gap > 0) {
    stats.push({
      id: 'score-gap',
      label: 'Points to Target',
      value: report.score.gap,
      subtext: `Target: ${report.score.target}`,
      type: 'neutral',
    });
  }

  if (report.scoreProjection?.easyWins?.count > 0) {
    stats.push({
      id: 'easy-wins',
      label: 'Easy Wins',
      value: `+${report.scoreProjection.easyWins.projectedGain}`,
      subtext: `${report.scoreProjection.easyWins.count} easy questions missed`,
      type: 'warning',
    });
  }

  const topDomain = report.scoreProjection?.domainProjections?.[0];
  if (topDomain) {
    stats.push({
      id: 'top-domain-drag',
      label: 'Biggest Lever',
      value: topDomain.domainName,
      subtext: `+${topDomain.projectedPointGain} potential points`,
      type: 'info',
    });
  }

  if (report.trendAnalysis?.hasHistory) {
    const sc = report.trendAnalysis.scoreChange;
    stats.push({
      id: 'trend',
      label: 'Recent Trend',
      value: sc > 0 ? `+${sc} pts` : sc === 0 ? 'Flat' : `${sc} pts`,
      subtext: report.trendAnalysis.trend.replace('_', ' '),
      type: sc > 0 ? 'success' : sc < 0 ? 'error' : 'neutral',
    });
  } else if (report.learningVelocity?.hasData) {
    stats.push({
      id: 'velocity',
      label: 'Learning Speed',
      value: `+${report.learningVelocity.velocity}/wk`,
      subtext: report.learningVelocity.trend,
      type: report.learningVelocity.velocity > 0 ? 'success' : 'neutral',
    });
  }

  return stats;
}

/**
 * Derive a trigger-context string for a weakness: when/where does it show up?
 */
function deriveTriggerContext(report, weaknessName) {
  const { difficultyAnalysis, timeAnalysis, domainAnalysis, stamina } = report;

  const lowestDiffLevel = (() => {
    if (!difficultyAnalysis?.levels) return null;
    const levels = ['easy', 'medium', 'hard'];
    let worst = null;
    let worstAcc = 101;
    for (const l of levels) {
      const d = difficultyAnalysis.levels[l];
      if (d && d.total > 0 && d.accuracy < worstAcc) { worstAcc = d.accuracy; worst = l; }
    }
    return worst && worstAcc < 70 ? worst : null;
  })();

  if (stamina?.hasData && stamina.dropoff > 15) {
    return `Appears mostly in the second half of the test (${stamina.dropoff}% accuracy drop).`;
  }
  if (lowestDiffLevel) {
    const d = difficultyAnalysis.levels[lowestDiffLevel];
    return `Worst on ${lowestDiffLevel} questions (${d.accuracy}% accuracy on ${d.total} questions).`;
  }
  if (domainAnalysis) {
    const weakest = [...domainAnalysis].sort((a, b) => a.accuracy - b.accuracy)[0];
    if (weakest && weakest.accuracy < 65) {
      const name = DOMAIN_DISPLAY_NAMES[weakest.domain] || weakest.displayName;
      return `Most visible in ${name} (${weakest.accuracy}% accuracy).`;
    }
  }
  return null;
}

/**
 * Derive a score-impact string for a weakness.
 */
function deriveImpact(report, weakness) {
  const { scoreProjection, score } = report;
  if (scoreProjection?.easyWins?.count >= 2 && weakness.id.includes('careless')) {
    return `Costing roughly ${scoreProjection.easyWins.projectedGain} points from missed easy questions alone.`;
  }
  const topDomain = scoreProjection?.domainProjections?.[0];
  if (topDomain) {
    return `Your weakest domain could recover up to ${topDomain.projectedPointGain} points if addressed.`;
  }
  if (score?.gap > 0) {
    return `You're ${score.gap} points below your target of ${score.target}.`;
  }
  return null;
}

/**
 * Build a plain-English summary with ranked top weaknesses.
 * Each weakness carries its own proof array so evidence is attached
 * to the claim it supports, not shown in a separate section.
 */
function buildSimplifiedSummary(report, rawDiagData) {
  const weaknesses = [];

  const clusters = buildWeaknessClusters(report);
  clusters
    .filter(c => c.severity === 'critical' || c.severity === 'moderate')
    .forEach(c => {
      const why = c.type === 'concept'
        ? `You're missing related skills in this area, with a ${c.failRate || '?'}% fail rate across ${c.questionsAffected || '?'} questions.`
        : c.detail || 'A recurring pattern of errors clusters around this root cause.';

      const proof = [];
      if (c.type === 'concept') {
        proof.push(`${c.questionsAffected || '?'} questions affected, ${c.failRate || '?'}% fail rate`);
        if (c.failedSkills?.length) proof.push(`Related skills: ${c.failedSkills.slice(0, 3).map(s => s.replace(/-/g, ' ')).join(', ')}`);
      } else if (c.questions?.length) {
        proof.push(`Seen on ${c.questions.join(', ')}`);
      }
      const trigger = deriveTriggerContext(report, c.label);
      if (trigger) proof.push(trigger);

      weaknesses.push({
        id: c.id,
        name: c.label,
        why,
        proof,
        impact: deriveImpact(report, { id: c.id }),
        severity: c.severity,
      });
    });

  const persistent = buildPersistentWeaknesses(report);
  persistent.forEach(pw => {
    if (!weaknesses.find(w => w.name === pw.skill)) {
      const proof = [];
      if (pw.testsWeak) proof.push(`Weak across ${pw.testsWeak} tests`);
      if (pw.type === 'declining-skill') proof.push('Trending downward');
      const trigger = deriveTriggerContext(report, pw.skill);
      if (trigger) proof.push(trigger);

      weaknesses.push({
        id: `persistent-${pw.skillId || pw.skill}`,
        name: pw.skill,
        why: `This weakness has appeared across ${pw.testsWeak || 'multiple'} tests, indicating a gap that isn't closing through normal practice.`,
        proof,
        impact: deriveImpact(report, { id: `persistent-${pw.skillId}` }),
        severity: pw.severity,
      });
    }
  });

  const { errorPatterns } = report;
  const dominant = errorPatterns?.dominantPattern;
  if (dominant && dominant.count >= 3) {
    const display = ERROR_TYPE_DISPLAY[dominant.type] || { label: dominant.label };
    if (!weaknesses.find(w => w.name === display.label)) {
      const whyMap = {
        careless_error: 'You understand the material but lose points to avoidable slips — often on questions you should get right.',
        time_pressure: 'You run out of time or rush through questions, leading to mistakes on problems you could otherwise solve.',
        conceptual_gap: 'There are underlying concepts you haven\'t fully learned, causing repeated misses on related questions.',
        trap_susceptibility: 'You\'re drawn to distractor answer choices that look correct but test a common misconception.',
        procedural_error: 'You know the concepts but make mistakes in execution — arithmetic slips, skipped steps, or sign errors.',
      };

      const proof = [
        `${dominant.count} questions lost to this pattern (${dominant.percentage}% of all misses)`,
        `${dominant.count} out of ${errorPatterns.totalWrong || '?'} wrong answers`,
      ];
      const trigger = deriveTriggerContext(report, display.label);
      if (trigger) proof.push(trigger);

      weaknesses.push({
        id: `error-${dominant.type}`,
        name: display.label,
        why: whyMap[dominant.type] || dominant.description || `Your most common mistake pattern (${dominant.percentage}% of misses).`,
        proof,
        impact: deriveImpact(report, { id: `error-${dominant.type}` }),
        severity: dominant.count >= 5 ? 'critical' : 'moderate',
      });
    }
  }

  const behaviors = buildBehaviorOutcomes(report, rawDiagData);
  behaviors
    .filter(b => b.impact === 'negative')
    .slice(0, 1)
    .forEach(b => {
      if (!weaknesses.find(w => w.name === b.behavior)) {
        const proof = [b.stat];
        const trigger = deriveTriggerContext(report, b.behavior);
        if (trigger) proof.push(trigger);

        weaknesses.push({
          id: `behavior-${b.id}`,
          name: b.behavior,
          why: b.detail,
          proof,
          impact: deriveImpact(report, { id: `behavior-${b.id}` }),
          severity: 'moderate',
        });
      }
    });

  const severityOrder = { critical: 0, significant: 1, moderate: 2, warning: 3 };
  weaknesses.sort((a, b) => (severityOrder[a.severity] ?? 3) - (severityOrder[b.severity] ?? 3));
  const topWeaknesses = weaknesses.slice(0, 3);

  let headline = 'Your performance analysis is ready.';
  if (topWeaknesses.length > 0) {
    headline = `Your biggest challenge: ${topWeaknesses[0].name}.`;
    if (topWeaknesses.length > 1) {
      const others = topWeaknesses.slice(1).map(w => w.name).join(' and ');
      headline += ` Also affecting you: ${others}.`;
    }
  } else if (report.mistakeFingerprint?.archetypeLabel) {
    headline = report.mistakeFingerprint.archetypeLabel;
  }

  return {
    headline,
    topWeaknesses,
    scoreImpact: buildWhyThisMatters(report),
  };
}

/**
 * Build the behavior highlights chapter — top 2-3 actionable behavioral signals.
 */
function buildBehaviorHighlights(report, rawDiagData) {
  const outcomes = buildBehaviorOutcomes(report, rawDiagData);
  const signals = buildBehaviorSignals(report, rawDiagData);

  const highlights = [];

  outcomes
    .filter(b => b.impact === 'negative' || b.impact === 'positive')
    .slice(0, 2)
    .forEach(b => {
      highlights.push({
        label: b.behavior,
        detail: b.stat,
        type: b.impact === 'negative' ? 'warning' : 'good',
      });
    });

  signals
    .filter(s => s.type === 'warning' || s.type === 'good')
    .slice(0, 3 - highlights.length)
    .forEach(s => {
      if (!highlights.find(h => h.label === s.label)) {
        highlights.push({ label: s.label, detail: s.value, type: s.type });
      }
    });

  return highlights.slice(0, 3);
}

/**
 * Build the "Why This Matters" card — non-prescriptive score-impact context.
 */
function buildWhyThisMatters(report) {
  const points = [];
  const { score, scoreProjection, stamina, trendAnalysis } = report;

  if (score?.gap > 0) {
    points.push(`You're currently ${score.gap} points below your target of ${score.target}.`);
  }
  if (scoreProjection?.easyWins?.count >= 2) {
    points.push(`${scoreProjection.easyWins.count} missed easy questions alone account for roughly ${scoreProjection.easyWins.projectedGain} recoverable points.`);
  }
  const topDomain = scoreProjection?.domainProjections?.[0];
  if (topDomain) {
    points.push(`${topDomain.domainName} is your weakest domain with up to ${topDomain.projectedPointGain} points at stake.`);
  }
  if (stamina?.hasData && stamina.dropoff > 15) {
    points.push(`Your accuracy drops ${stamina.dropoff}% by the end of the test, meaning late questions hurt disproportionately.`);
  }
  if (trendAnalysis?.hasHistory) {
    const sc = trendAnalysis.scoreChange;
    if (sc < 0) {
      points.push(`Your score dropped ${Math.abs(sc)} points compared to your last test.`);
    } else if (sc === 0) {
      points.push('Your score hasn\'t changed since last test — you may have plateaued.');
    }
  }
  if (points.length === 0) {
    points.push('Understanding these patterns is the first step toward meaningful score improvement.');
  }
  return points;
}

/**
 * Build a compressed, scan-friendly evidence summary.
 *
 * Returns an array of groups, each with { id, title, items[] }.
 * Every item is a short row: { label, value, type? }.
 * Components can render each group as a small card.
 */
function buildEvidenceSummary(report, rawDiagData) {
  const groups = [];

  const pointLoss = buildPointLoss(report);
  if (pointLoss.length > 0) {
    const topCauses = pointLoss
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
    groups.push({
      id: 'causes',
      title: 'Main Causes of Lost Points',
      items: topCauses.map(p => ({
        label: p.label,
        value: `${p.count} questions (${p.percentage}%)`,
        color: p.color,
        type: 'neutral',
      })),
    });
  }

  const domains = buildDomainPerformance(report);
  const weakDomains = domains.filter(d => d.accuracy < 75);
  if (weakDomains.length > 0) {
    groups.push({
      id: 'domains',
      title: 'Where This Shows Up',
      items: weakDomains.map(d => ({
        label: d.displayName,
        value: `${d.correct}/${d.total} correct (${d.accuracy}%)`,
        type: d.accuracy < 60 ? 'warning' : 'neutral',
      })),
    });
  }

  const behaviorSignals = buildBehaviorSignals(report, rawDiagData);
  const relevantSignals = behaviorSignals.filter(s => s.type === 'warning' || s.type === 'good');
  if (relevantSignals.length > 0) {
    groups.push({
      id: 'timing',
      title: 'Timing & Behavior Signals',
      items: relevantSignals.slice(0, 4).map(s => ({
        label: s.label,
        value: s.value,
        type: s.type,
      })),
    });
  }

  const questions = buildQuestionEvidence(report);
  if (questions.length > 0) {
    groups.push({
      id: 'examples',
      title: 'Example Questions',
      items: questions.slice(0, 3).map(q => ({
        label: q.label,
        value: `${q.errorLabel} — ${q.reasoning}`,
        sublabel: `${q.domainName} · ${q.difficulty} · ${q.timeFormatted}`,
        type: 'neutral',
      })),
    });
  }

  return groups;
}

/**
 * Build a single diagnostic report — one top-to-bottom document the UI
 * renders as a continuous page.
 *
 * Strict section order:
 *   atAGlance → topWeaknesses → scoreImpact → proofDetails → nextFocus
 *
 * Each weakness carries its own evidence so proof is attached to the claim
 * it supports.  Global proof sits in a separate tertiary section for
 * optional drill-down.
 *
 * Shape:
 *   { hero, sections[], footerCta }
 */
function buildDiagnosticReport(report, rawDiagData) {
  const summary = buildSimplifiedSummary(report, rawDiagData);
  const stats = buildQuickStats(report);
  const scoreImpactPts = summary.scoreImpact || [];

  const hero = {
    headline: summary.headline,
    headlinePoints: [],
    stats: stats.slice(0, 5),
    primaryAction: { label: 'View Study Plan', action: 'study_plan' },
    secondaryAction: { label: 'Review Missed Questions', action: 'review' },
    step: 1,
  };

  const proofGroups = buildEvidenceSummary(report, rawDiagData);
  const confIndicators = buildConfidenceIndicators(report);
  const overallConf = confIndicators.find(c => c.id === 'error-classification')?.confidence || 'moderate';

  const sections = [];

  const scoreGap = report.score?.gap || 0;
  const easyWinsGain = report.scoreProjection?.easyWins?.projectedGain || 0;
  const easyWinsCount = report.scoreProjection?.easyWins?.count || 0;
  const weakestDomain = report.scoreProjection?.domainProjections?.[0] || null;
  const staminaDrop = report.stamina?.hasData && report.stamina?.dropoff > 15 ? report.stamina.dropoff : 0;
  const dominantError = report.errorPatterns?.dominantPattern || null;

  const scoreProof = [];
  if (scoreGap > 0) {
    scoreProof.push({ label: 'Points to Target', value: `${scoreGap} points`, type: 'warning' });
  }
  if (easyWinsCount >= 2) {
    scoreProof.push({ label: 'Missed Easy Qs', value: `${easyWinsCount} Qs (+${easyWinsGain} pts)`, type: 'warning' });
  }
  if (weakestDomain) {
    scoreProof.push({ label: 'Weakest Domain', value: `${weakestDomain.domainName} (+${weakestDomain.projectedPointGain} pts)`, type: 'neutral' });
  }
  if (staminaDrop > 0) {
    scoreProof.push({ label: 'Late Test Fatigue', value: `${staminaDrop}% accuracy drop`, type: 'warning' });
  }
  if (dominantError && dominantError.count >= 3) {
    const errorLabel = (ERROR_TYPE_DISPLAY[dominantError.type] || {}).label || dominantError.label;
    scoreProof.push({ label: 'Main Error Pattern', value: `${errorLabel} (${dominantError.percentage}%)`, type: 'neutral' });
  }

  const behaviorHighlightsForSection = buildBehaviorHighlights(report, rawDiagData);
  const behaviorPoints = behaviorHighlightsForSection
    .filter(h => h.type === 'warning' || h.type === 'good')
    .map(h => `${h.label}: ${h.detail}`);

  sections.push({
    id: 'whyThisScore',
    title: 'Why You Got This Score',
    step: 2,
    body: scoreImpactPts.length > 0 ? scoreImpactPts.join(' ') : 'Understanding these patterns is the first step toward meaningful score improvement.',
    bodyPoints: scoreImpactPts.length > 0 ? scoreImpactPts : null,
    behaviorPoints: behaviorPoints.length > 0 ? behaviorPoints : null,
    proof: scoreProof,
    source: 'deterministic',
  });

  const patterns = (summary.topWeaknesses || []).map(w => {
    const evidenceForWeakness = [];
    proofGroups.forEach(g => {
      g.items.forEach(item => {
        const val = `${item.label} ${item.value}`.toLowerCase();
        const name = (w.name || '').toLowerCase();
        if (name && val.includes(name)) {
          evidenceForWeakness.push({ label: item.label, value: item.value, sublabel: item.sublabel, type: item.type || 'neutral' });
        }
      });
    });

    // Estimate point gain from score projection if available
    let estimatedPointGain = null;
    if (w.id.includes('careless') && report.scoreProjection?.easyWins?.projectedGain) {
      estimatedPointGain = report.scoreProjection.easyWins.projectedGain;
    } else if (report.scoreProjection?.domainProjections) {
      const domProj = report.scoreProjection.domainProjections.find(dp => w.name.includes(dp.domainName));
      if (domProj) estimatedPointGain = domProj.projectedPointGain;
    }

    const frequency = w.proof.find(p => p.includes('questions') || p.includes('test') || p.includes('wrong')) || null;
    const whereSeen = w.proof.find(p => p.includes('Most visible in') || p.includes('Worst on') || p.includes('Appears mostly')) || null;

    return {
      id: w.id,
      title: w.name,
      why: w.why,
      frequency,
      whereSeen,
      proof: w.proof || [],
      evidence: evidenceForWeakness.slice(0, 3),
      impact: w.impact,
      severity: w.severity,
      source: 'deterministic',
      confidence: overallConf,
      estimatedPointGain,
      nextAction: { label: `Review ${w.name} Questions`, action: 'review_weakness', target: w.id }
    };
  });

  sections.push({
    id: 'patternsThatDroveScore',
    title: 'Patterns That Drove The Score',
    step: 3,
    body: patterns.length > 0
      ? `${patterns.length} score-driving pattern${patterns.length > 1 ? 's' : ''} detected.`
      : 'No significant weakness patterns detected.',
    patterns,
    source: 'deterministic',
  });

  const showUpGroups = proofGroups.filter(g => g.id === 'domains' || g.id === 'timing' || g.id === 'causes');

  sections.push({
    id: 'whereScoreBrokeDown',
    title: 'Where The Score Broke Down',
    step: 4,
    body: showUpGroups.length > 0 
      ? 'Here is how these score drivers appear across the test.'
      : 'No specific domain or timing patterns detected.',
    groups: showUpGroups,
    source: 'deterministic',
  });

  const topW = patterns[0];
  const nextFocusReasons = [];
  if (topW) {
    if (topW.estimatedPointGain) nextFocusReasons.push(`Addressing this could recover up to ${topW.estimatedPointGain} points.`);
    if (topW.frequency) nextFocusReasons.push(topW.frequency);
    if (topW.impact) nextFocusReasons.push(topW.impact);
  }
  if (report.scoreProjection?.easyWins?.count >= 2) {
    nextFocusReasons.push(`${report.scoreProjection.easyWins.count} missed easy questions = ${report.scoreProjection.easyWins.projectedGain} quick points to recover.`);
  }
  if (report.stamina?.hasData && report.stamina.dropoff > 15) {
    nextFocusReasons.push(`${report.stamina.dropoff}% accuracy drop in the second half — stamina is a factor.`);
  }

  const nextFocus = {
    id: 'whatThisMeans',
    title: 'What This Means',
    step: 5,
    text: topW 
      ? `Prioritize ${topW.title} — it has the highest impact on your score.`
      : (report.scoreProjection?.easyWins?.count >= 2 
          ? `Start with the ${report.scoreProjection.easyWins.count} easy questions you missed — they are the fastest points to recover.`
          : 'Continue consistent practice to build on your current performance.'),
    reasons: nextFocusReasons.length > 0 ? nextFocusReasons : null,
    primaryAction: { label: 'View Study Plan', action: 'study_plan' },
    source: 'deterministic'
  };

  return { hero, sections, nextFocus };
}

/**
 * Merge AI narrative into the deterministic report so the page always
 * renders one unified story — AI prose where available, deterministic elsewhere.
 *
 * @param {object} report   Output of buildDiagnosticReport
 * @param {object|null} ai  AI narrative object (from Cloud Function) or null
 * @returns {object}        Same report shape with AI copy spliced in
 */
export function mergeAiIntoReport(report, ai) {
  if (!report || !ai) return report;

  const merged = {
    hero: { ...report.hero },
    sections: report.sections.map(s => ({ ...s })),
    nextFocus: { ...report.nextFocus },
  };

  if (ai.diagnosis) {
    const diagnosisPoints = normalizeToArray(ai.diagnosisPoints, ai.diagnosis);
    if (diagnosisPoints.length > 0) {
      merged.hero.headlinePoints = diagnosisPoints;
      merged.hero.headline = diagnosisPoints[0];
    } else {
      merged.hero.headline = ai.diagnosis;
    }
  }

  // --- "Why You Got This Score" ---
  // New schema: scoreImpactPoints (array). Old schema: scoreImpact (string).
  const scoreSec = merged.sections.find(s => s.id === 'whyThisScore');
  if (scoreSec) {
    const points = normalizeToArray(ai.scoreImpactPoints, ai.scoreImpact);
    if (points.length > 0) {
      scoreSec.bodyPoints = points;
      scoreSec.body = points.join(' ');
      scoreSec.source = 'ai';
    }

    const behaviorPts = normalizeToArray(ai.behaviorInsightPoints, ai.behaviorInsights);
    if (behaviorPts.length > 0) {
      scoreSec.behaviorPoints = behaviorPts;
    }

    if (ai.changesSinceLast) {
      scoreSec.changesSinceLast = ai.changesSinceLast;
    }
  }

  const aiWeaknesses = ai.weaknesses || [];
  if (aiWeaknesses.length > 0) {
    const sec = merged.sections.find(s => s.id === 'patternsThatDroveScore');
    if (sec) {
      sec.patterns = aiWeaknesses.map(w => {
        const existingW = sec.patterns.find(ew => 
          ew.title.toLowerCase() === w.title.toLowerCase() || 
          ew.title.toLowerCase().includes(w.title.toLowerCase()) || 
          w.title.toLowerCase().includes(ew.title.toLowerCase())
        ) || sec.patterns[0];

        return {
          id: w.title,
          title: w.title,
          why: w.why,
          frequency: existingW ? existingW.frequency : null,
          whereSeen: existingW ? existingW.whereSeen : null,
          proof: Array.isArray(w.proof)
            ? w.proof.flatMap(p => typeof p === 'string' ? splitTextToBullets(p) : [])
            : (typeof w.proof === 'string' ? splitTextToBullets(w.proof) : []),
          evidence: existingW ? existingW.evidence : [],
          impact: w.impact,
          severity: w.severity || 'moderate',
          source: 'ai',
          confidence: existingW ? existingW.confidence : 'high',
          estimatedPointGain: existingW ? existingW.estimatedPointGain : null,
          nextAction: existingW ? existingW.nextAction : { label: 'Review Questions', action: 'review' }
        };
      });
      sec.body = `${aiWeaknesses.length} score-driving pattern${aiWeaknesses.length > 1 ? 's' : ''} detected.`;
      sec.source = 'ai';
    }
  }

  const whereSec = merged.sections.find(s => s.id === 'whereScoreBrokeDown');
  if (whereSec) {
    if (ai.uncertainties) {
      whereSec.note = ai.uncertainties;
    }
  }

  // --- "What This Means" ---
  // New schema: topNextFocus { headline, reasons[] }. Old schema: topNextFocus (string).
  if (ai.topNextFocus) {
    if (typeof ai.topNextFocus === 'object' && ai.topNextFocus.headline) {
      merged.nextFocus.text = ai.topNextFocus.headline;
      const reasons = normalizeReasons(ai.topNextFocus.reasons);
      if (reasons.length > 0) merged.nextFocus.reasons = reasons;
    } else if (typeof ai.topNextFocus === 'string') {
      const parts = splitTextToBullets(ai.topNextFocus);
      if (parts.length > 1) {
        merged.nextFocus.text = parts[0];
        merged.nextFocus.reasons = parts.slice(1);
      } else {
        merged.nextFocus.text = ai.topNextFocus;
      }
    }
    merged.nextFocus.source = 'ai';
  }

  if (ai._quality) {
    merged._aiQuality = ai._quality;
  }
  if (ai._promptVersion) {
    merged._promptVersion = ai._promptVersion;
  }
  if (ai.consistencyFlags) {
    merged._consistencyFlags = ai.consistencyFlags;
  }

  const diagClaims = normalizeToStructuredClaims(ai.diagnosisPoints, ai.diagnosis);
  if (diagClaims.length > 0) {
    merged._structuredDiagnosis = diagClaims;
  }
  const scoreClaims = normalizeToStructuredClaims(ai.scoreImpactPoints, ai.scoreImpact);
  if (scoreClaims.length > 0) {
    merged._structuredScoreImpact = scoreClaims;
  }
  const behaviorClaims = normalizeToStructuredClaims(ai.behaviorInsightPoints, ai.behaviorInsights);
  if (behaviorClaims.length > 0) {
    merged._structuredBehavior = behaviorClaims;
  }

  return merged;
}

/**
 * Split a text block into individual bullet-point strings.
 * Handles newline-delimited, numbered ("1.", "2."), bullet-prefixed ("- ", "• "),
 * and multi-sentence prose by splitting on sentence boundaries.
 * Returns an array of trimmed, non-empty strings.
 */
function splitTextToBullets(text) {
  if (typeof text !== 'string' || text.trim().length === 0) return [];

  const trimmed = text.trim();

  if (/\n/.test(trimmed)) {
    const lines = trimmed.split(/\n+/)
      .map(l => l.replace(/^[\s]*[-•*]\s*/, '').replace(/^\d+[.)]\s*/, '').trim())
      .filter(l => l.length > 0);
    if (lines.length > 1) return lines;
  }

  if (/^\s*(\d+[.)]|-|•)\s/m.test(trimmed)) {
    const items = trimmed.split(/(?:^|\n)\s*(?:\d+[.)]|-|•)\s*/)
      .map(s => s.trim())
      .filter(s => s.length > 0);
    if (items.length > 1) return items;
  }

  const sentences = trimmed
    .split(/(?<=[.!?])\s+(?=[A-Z])/)
    .map(s => s.trim())
    .filter(s => s.length > 0);
  if (sentences.length > 1) return sentences;

  return [trimmed];
}

/**
 * Normalize AI field to an array of bullet-point strings.
 * Accepts either the new array-of-strings/objects field or the old single-string field,
 * splitting multi-sentence strings into individual bullets.
 * Structured claims ({claim, evidence, confidence}) are flattened to claim text.
 */
function normalizeToArray(arrayField, stringField) {
  if (Array.isArray(arrayField) && arrayField.length > 0) {
    const cleaned = arrayField
      .flatMap(s => {
        if (typeof s === 'string') return splitTextToBullets(s);
        if (s && typeof s === 'object' && typeof s.claim === 'string') return splitTextToBullets(s.claim);
        return [];
      })
      .filter(s => s.length > 0);
    if (cleaned.length > 0) return cleaned;
  }
  if (typeof stringField === 'string' && stringField.length > 0) {
    return splitTextToBullets(stringField);
  }
  return [];
}

/**
 * Normalize AI field to structured claims with confidence metadata.
 * Returns [{text, evidence, confidence}].
 */
function normalizeToStructuredClaims(arrayField, stringField) {
  if (Array.isArray(arrayField) && arrayField.length > 0) {
    return arrayField
      .flatMap(s => {
        if (typeof s === 'string') return splitTextToBullets(s).map(t => ({ text: t, evidence: null, confidence: 'medium' }));
        if (s && typeof s === 'object' && typeof s.claim === 'string') {
          return [{ text: s.claim, evidence: s.evidence || null, confidence: s.confidence || 'medium' }];
        }
        return [];
      })
      .filter(c => c.text.length > 0);
  }
  if (typeof stringField === 'string' && stringField.length > 0) {
    return splitTextToBullets(stringField).map(t => ({ text: t, evidence: null, confidence: 'medium' }));
  }
  return [];
}

/**
 * Normalize a reasons field that may be an array, a string, or missing.
 */
function normalizeReasons(reasons) {
  if (Array.isArray(reasons)) {
    return reasons.flatMap(r => typeof r === 'string' ? splitTextToBullets(r) : []);
  }
  if (typeof reasons === 'string') {
    return splitTextToBullets(reasons);
  }
  return [];
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
    summary: buildSimplifiedSummary(report, rawDiagData),
    behaviorHighlights: buildBehaviorHighlights(report, rawDiagData),
    quickStats: buildQuickStats(report),
    keyFindings: buildKeyFindings(report),
    scoreProjection: buildScoreProjection(report),
    behaviorOutcomes: buildBehaviorOutcomes(report, rawDiagData),
    timeAllocation: buildTimeAllocation(report),
    confidenceIndicators: buildConfidenceIndicators(report),
    report: buildDiagnosticReport(report, rawDiagData),
    score: report.score,
    percentile: report.percentile,
    fingerprint: report.mistakeFingerprint,
    learningVelocity: report.learningVelocity,
  };
}

/**
 * Build a unified single-story diagnostic report from the merged
 * (AI + deterministic) report. Deduplicates overlapping insights,
 * enforces section budgets, and resolves conflicting signals so the
 * UI renders one clean, non-redundant narrative.
 *
 * Shape:
 *   { diagnosis, scoreDrivers, behaviorInsights, evidence, nextFocus, meta }
 */
export function buildUnifiedReport(mergedReport) {
  if (!mergedReport) return null;
  const { hero, sections, nextFocus } = mergedReport;

  const whySec = sections.find(s => s.id === 'whyThisScore') || {};
  const patternsSec = sections.find(s => s.id === 'patternsThatDroveScore') || {};
  const whereSec = sections.find(s => s.id === 'whereScoreBrokeDown') || {};

  const structuredDiag = mergedReport._structuredDiagnosis || [];
  const structuredScore = mergedReport._structuredScoreImpact || [];
  const structuredBehavior = mergedReport._structuredBehavior || [];
  const consistencyFlags = mergedReport._consistencyFlags || {};
  const aiQuality = mergedReport._aiQuality || null;
  const qualityFailed = aiQuality && aiQuality.repairFailed;

  // ─── 1. DIAGNOSIS: use structured claims if available, filter low-confidence ───
  let diagnosisPoints;
  if (structuredDiag.length > 0 && !qualityFailed) {
    diagnosisPoints = dedup(
      structuredDiag
        .filter(c => c.confidence !== 'low')
        .map(c => c.text)
    ).slice(0, 4);
  } else {
    const rawDiagPoints = Array.isArray(hero.headlinePoints) ? hero.headlinePoints : [];
    diagnosisPoints = dedup(rawDiagPoints).slice(0, 4);
  }

  // ─── 2. SCORE DRIVERS: ranked, prefer high-confidence + numeric ───
  const seenDriverKeys = new Set();
  const scoreDrivers = [];

  const hasStructuredScore = structuredScore.length > 0 && !qualityFailed;
  if (hasStructuredScore) {
    structuredScore
      .filter(c => c.confidence !== 'low')
      .forEach(c => {
        const key = canonicalKey(c.text);
        if (!seenDriverKeys.has(key)) {
          seenDriverKeys.add(key);
          scoreDrivers.push({
            text: c.text,
            evidenceAnchor: c.evidence,
            confidence: c.confidence,
            type: 'insight',
            source: 'ai',
          });
        }
      });
  }

  if (!hasStructuredScore) {
    const bodyPts = Array.isArray(whySec.bodyPoints) ? whySec.bodyPoints : [];
    const flatSource = whySec.source || 'deterministic';
    if (!(qualityFailed && flatSource === 'ai')) {
      bodyPts.forEach(pt => {
        const key = canonicalKey(pt);
        if (!seenDriverKeys.has(key)) {
          seenDriverKeys.add(key);
          scoreDrivers.push({ text: pt, type: 'insight', source: flatSource });
        }
      });
    }
  }

  const patterns = Array.isArray(patternsSec.patterns) ? patternsSec.patterns : [];
  patterns.forEach(p => {
    const impactText = p.impact || '';
    const key = canonicalKey(p.title + ' ' + impactText);
    if (!seenDriverKeys.has(key)) {
      seenDriverKeys.add(key);
      scoreDrivers.push({
        text: p.title,
        why: p.why,
        impact: p.impact,
        severity: p.severity,
        estimatedPointGain: p.estimatedPointGain,
        evidence: Array.isArray(p.evidence) ? p.evidence.slice(0, 2) : [],
        type: 'pattern',
        source: p.source || 'deterministic',
      });
    }
  });

  // ─── 3. BEHAVIOR: confidence-filtered, deduplicated ───
  const behaviorInsights = [];
  const hasStructuredBehavior = structuredBehavior.length > 0 && !qualityFailed;
  if (hasStructuredBehavior) {
    structuredBehavior
      .filter(c => c.confidence !== 'low')
      .forEach(c => {
        const key = canonicalKey(c.text);
        if (!seenDriverKeys.has(key)) {
          seenDriverKeys.add(key);
          behaviorInsights.push(c.text);
        }
      });
  }
  if (!hasStructuredBehavior) {
    const behaviorPts = Array.isArray(whySec.behaviorPoints) ? whySec.behaviorPoints : [];
    behaviorPts.forEach(pt => {
      const key = canonicalKey(pt);
      if (!seenDriverKeys.has(key)) {
        seenDriverKeys.add(key);
        behaviorInsights.push(pt);
      }
    });
  }

  // Contradiction guard: suppress behavior claims that conflict with trend direction
  const trendDir = consistencyFlags.trendDirection || null;
  const filteredBehavior = trendDir
    ? behaviorInsights.filter(pt => !isContradictoryToTrend(pt, trendDir))
    : behaviorInsights;

  const changesSinceLast = whySec.changesSinceLast || null;

  // ─── 4. EVIDENCE SNAPSHOT: compact proof grid, no repeated labels ───
  const proofItems = Array.isArray(whySec.proof) ? whySec.proof : [];
  const evidenceGroups = Array.isArray(whereSec.groups) ? whereSec.groups : [];

  const evidence = [];
  const seenEvidenceKeys = new Set();

  proofItems.forEach(pf => {
    const key = canonicalKey(pf.label + ' ' + pf.value);
    if (!seenEvidenceKeys.has(key) && !seenDriverKeys.has(key)) {
      seenEvidenceKeys.add(key);
      evidence.push({ label: pf.label, value: pf.value, type: pf.type || 'neutral' });
    }
  });

  evidenceGroups.forEach(g => {
    (g.items || []).forEach(item => {
      const key = canonicalKey(item.label + ' ' + item.value);
      if (!seenEvidenceKeys.has(key) && !seenDriverKeys.has(key)) {
        seenEvidenceKeys.add(key);
        evidence.push({ label: item.label, value: item.value, type: item.type || 'neutral', group: g.title });
      }
    });
  });

  // ─── 5. NEXT FOCUS ───
  const focus = {
    text: nextFocus?.text || '',
    reasons: Array.isArray(nextFocus?.reasons) ? dedup(nextFocus.reasons).slice(0, 3) : [],
    source: nextFocus?.source || 'deterministic',
    primaryAction: nextFocus?.primaryAction || null,
  };

  // ─── 6. META ───
  const meta = {
    stats: Array.isArray(hero.stats) ? hero.stats.slice(0, 4) : [],
    hasAI: hero.headlinePoints?.length > 0 && (whySec.source === 'ai' || patternsSec.source === 'ai'),
    uncertainties: whereSec.note || null,
    promptVersion: mergedReport._promptVersion || null,
    qualityScore: aiQuality?.total ?? null,
    qualityRepaired: aiQuality?.repaired ?? false,
    qualityFailed: !!qualityFailed,
  };

  return {
    diagnosis: { points: diagnosisPoints, headline: hero.headline || '' },
    scoreDrivers: scoreDrivers.slice(0, 5),
    behaviorInsights: filteredBehavior.slice(0, 3),
    changesSinceLast,
    evidence: evidence.slice(0, 8),
    nextFocus: focus,
    meta,
  };
}

function isContradictoryToTrend(claimText, trendDirection) {
  const lower = claimText.toLowerCase();
  if (trendDirection === 'improving') {
    return /\b(declin|worsen|dropp|regress|deteriorat)/i.test(lower);
  }
  if (trendDirection === 'declining') {
    return /\b(improv|better|gain|progress|recover)/i.test(lower);
  }
  return false;
}

function canonicalKey(text) {
  if (!text) return '';
  return text.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 60);
}

function dedup(arr) {
  const seen = new Set();
  return arr.filter(item => {
    const key = canonicalKey(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * Transform a unified report into ordered narrative blocks with transitions.
 * Each block has: { id, items[], transition? }
 * The "one fact appears once" invariant is enforced across all blocks.
 *
 * Block order: context -> primaryCause -> behaviorAmplifier -> evidence -> nextMove
 */
export function buildNarrativeFlow(uni) {
  if (!uni) return null;

  const mentionedKeys = new Set();
  const blocks = [];

  // ─── BLOCK 1: CONTEXT — where you are vs target ───
  const contextItems = [];
  if (uni.diagnosis.points.length > 0) {
    uni.diagnosis.points.forEach(pt => {
      const key = canonicalKey(pt);
      if (!mentionedKeys.has(key)) {
        mentionedKeys.add(key);
        contextItems.push(pt);
      }
    });
  } else if (uni.diagnosis.headline) {
    mentionedKeys.add(canonicalKey(uni.diagnosis.headline));
    contextItems.push(uni.diagnosis.headline);
  }
  blocks.push({
    id: 'context',
    label: 'Your Diagnosis',
    items: contextItems.slice(0, 3),
    style: 'headline',
  });

  // Always-visible stats strip (balanced mode): keep the top 3-4 highest-value stats.
  const mainStats = Array.isArray(uni.meta?.stats)
    ? [...uni.meta.stats]
        .sort((a, b) => statPriority(a.id) - statPriority(b.id))
        .slice(0, 4)
    : [];
  if (mainStats.length > 0) {
    blocks.push({
      id: 'metaStrip',
      label: 'Key Numbers',
      items: mainStats,
      style: 'stats',
    });
  }

  // ─── BLOCK 2: PRIMARY CAUSE — top 2-3 score drivers ───
  const causeItems = [];
  const allDrivers = uni.scoreDrivers || [];
  allDrivers.slice(0, 3).forEach(d => {
    const key = canonicalKey(d.text + (d.impact || ''));
    if (!mentionedKeys.has(key)) {
      mentionedKeys.add(key);
      causeItems.push(d);
    }
  });
  if (causeItems.length > 0) {
    blocks.push({
      id: 'primaryCause',
      label: 'What Drove Your Score',
      transition: causeItems.length === 1
        ? 'The primary driver behind this:'
        : 'The key drivers behind this:',
      items: causeItems,
      style: 'driver',
    });
  }

  // ─── BLOCK 3: BEHAVIOR AMPLIFIER — only if not redundant with causes ───
  const behaviorItems = [];
  (uni.behaviorInsights || []).forEach(pt => {
    const key = canonicalKey(pt);
    if (!mentionedKeys.has(key)) {
      mentionedKeys.add(key);
      behaviorItems.push(pt);
    }
  });
  if (uni.changesSinceLast) {
    const csKey = canonicalKey(uni.changesSinceLast);
    if (!mentionedKeys.has(csKey)) {
      mentionedKeys.add(csKey);
      behaviorItems.push(uni.changesSinceLast);
    }
  }
  if (behaviorItems.length > 0) {
    blocks.push({
      id: 'behaviorAmplifier',
      label: 'Behavior & Timing',
      transition: 'Beyond content knowledge, your test-taking patterns also played a role:',
      items: behaviorItems.slice(0, 2),
      style: 'bullet',
    });
  }

  // ─── BLOCK 4: EVIDENCE — compact support lines, with at least one always visible ───
  const evidenceItems = [];
  (uni.evidence || [])
    .slice()
    .sort((a, b) => evidencePriority(a.type) - evidencePriority(b.type))
    .forEach(ev => {
    const key = canonicalKey(ev.label + ' ' + ev.value);
    if (!mentionedKeys.has(key)) {
      mentionedKeys.add(key);
      evidenceItems.push(ev);
    }
  });

  // Ensure at least one strongest evidence line is visible in the main story.
  if (evidenceItems.length === 0 && causeItems.length > 0) {
    const topCause = causeItems[0];
    if (topCause.evidenceAnchor) {
      evidenceItems.push({
        label: 'Evidence',
        value: topCause.evidenceAnchor,
        type: 'neutral',
      });
    } else if (topCause.estimatedPointGain) {
      evidenceItems.push({
        label: 'Projected Gain',
        value: `+${topCause.estimatedPointGain} points`,
        type: 'warning',
      });
    } else if (topCause.impact) {
      evidenceItems.push({
        label: 'Score Impact',
        value: topCause.impact,
        type: 'warning',
      });
    }
  }

  const visibleEvidence = evidenceItems.slice(0, 3);
  const secondaryEvidence = evidenceItems.slice(3);
  if (evidenceItems.length > 0) {
    blocks.push({
      id: 'evidence',
      label: 'Supporting Data',
      transition: 'The data confirms this:',
      items: visibleEvidence,
      style: 'grid',
    });
  }

  // ─── BLOCK 5: NEXT MOVE — single focus + reasons ───
  const focus = uni.nextFocus || {};
  if (focus.text) {
    const reasons = (focus.reasons || []).filter(r => {
      const key = canonicalKey(r);
      if (mentionedKeys.has(key)) return false;
      mentionedKeys.add(key);
      return true;
    }).slice(0, 3);

    blocks.push({
      id: 'nextMove',
      label: 'Your Next Move',
      transition: 'Based on all of this, here is your highest-leverage focus:',
      items: [{ text: focus.text, reasons }],
      style: 'cta',
      source: focus.source,
      primaryAction: focus.primaryAction,
    });
  }

  // Remaining score drivers go into details
  const additionalDrivers = allDrivers.slice(2).filter(d => {
    const key = canonicalKey(d.text + (d.impact || ''));
    return !mentionedKeys.has(key);
  });

  const details = {
    additionalDrivers,
    secondaryEvidence,
    uncertainties: uni.meta?.uncertainties || null,
    qualityFailed: uni.meta?.qualityFailed || false,
  };

  return {
    blocks,
    details,
    meta: uni.meta || {},
  };
}

function statPriority(id) {
  const order = {
    'score-gap': 0,
    'easy-wins': 1,
    'top-domain-drag': 2,
    trend: 3,
    velocity: 4,
  };
  return order[id] ?? 10;
}

function evidencePriority(type) {
  if (type === 'warning') return 0;
  if (type === 'neutral') return 1;
  if (type === 'good' || type === 'success') return 2;
  return 3;
}

export { splitTextToBullets, normalizeReasons };
