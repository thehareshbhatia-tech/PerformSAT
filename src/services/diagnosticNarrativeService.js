/**
 * Diagnostic Narrative Service
 *
 * Separate from the study-plan service, this sends a richer evidence payload
 * to a dedicated backend endpoint optimized for deep diagnostic explanation
 * rather than weekly plan generation.
 */

import { authFetch } from './authFetch';

const DIAGNOSTIC_NARRATIVE_URL = process.env.REACT_APP_DIAGNOSTIC_NARRATIVE_URL ||
  'https://us-central1-performsat-production.cloudfunctions.net/generateDiagnosticNarrative';

// Client-side ceiling on the request. The deterministic diagnosis already renders
// instantly, so this only bounds the "Your Diagnosis" prose spinner — past this we
// hand off to the fallback strip + Retry instead of spinning forever. Note the
// Cloud Function only RETURNS the narrative — persistence is client-side
// (completeAiDiagnosticArtifact in PracticeTest.jsx marks the aiDiagnostics
// artifact ready), so an aborted request means no artifact this attempt and a
// later visit rehydrates via getReadyAiDiagnostic only after a successful retry.
const DIAGNOSTIC_TIMEOUT_MS = 35000;

/**
 * Calls the Cloud Function to generate an AI diagnostic narrative
 * from the full evidence graph. `drillEvidence` ({recentDrills:[{skillId,
 * accuracy, attempts}]}) is pre-test drill work on skills this test covered —
 * it lets the diagnosis speak to drill-to-test TRANSFER, which no single-test
 * signal can.
 */
export const generateDiagnosticNarrative = async (diagnosticReport, userProfile = {}, drillEvidence = null) => {
  const payload = serializeForNarrative(diagnosticReport, drillEvidence);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DIAGNOSTIC_TIMEOUT_MS);

  let response;
  try {
    response = await authFetch(DIAGNOSTIC_NARRATIVE_URL, {
      method: 'POST',
      body: JSON.stringify({ evidence: payload, userProfile }),
      signal: controller.signal,
    });
  } catch (err) {
    if (err?.name === 'AbortError') {
      throw new Error('AI analysis is taking longer than usual — tap retry in a moment.');
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || `Diagnostic narrative generation failed (${response.status})`);
  }

  const { narrative, generatedAt, model, promptVersion, quality } = await response.json();
  return { narrative, generatedAt, model, promptVersion, quality };
};

/**
 * Richer evidence serializer — sends substantially more data to the LLM
 * than the study-plan sanitizer so the model can produce specific,
 * evidence-backed diagnosis.
 */
export function serializeForNarrative(report, drillEvidence = null) {
  if (!report) return {};

  const { questionAnalysis = [] } = report;

  const wrongQuestions = questionAnalysis
    .filter(q => !q.isCorrect)
    .map(q => ({
      key: q.key,
      difficulty: q.difficulty,
      domain: q.domain,
      skills: q.skills,
      skillNames: q.skillNames,
      errorType: q.errorType,
      confidence: q.confidence,
      reasoning: q.reasoning,
      timeSpent: q.timeSpent,
      timeVsDifficulty: q.timeVsDifficulty,
      answerChangeCount: q.answerChangeCount,
      usedCalculator: q.usedCalculator,
      markedForReview: q.markedForReview,
      eliminatedChoices: (q.eliminatedChoices || []).length,
      // The actual pick — lets trapExplanation name the trap the student
      // fell for instead of guessing. Blank flag separates no-answer from
      // wrong-answer (they are different diagnoses).
      userAnswer: q.userAnswer ?? null,
      correctAnswer: q.correctAnswer ?? null,
      wasBlank: q.userAnswer === undefined || q.userAnswer === null || q.userAnswer === '',
    }));

  return {
    score: report.score,

    errorPatterns: report.errorPatterns ? {
      totalWrong: report.errorPatterns.totalWrong,
      summary: (report.errorPatterns.summary || []).map(s => ({
        type: s.type, label: s.label, count: s.count, percentage: s.percentage,
        description: s.description,
      })),
      dominantPattern: report.errorPatterns.dominantPattern ? {
        type: report.errorPatterns.dominantPattern.type,
        label: report.errorPatterns.dominantPattern.label,
        count: report.errorPatterns.dominantPattern.count,
        description: report.errorPatterns.dominantPattern.description,
      } : null,
    } : {},

    domainAnalysis: (report.domainAnalysis || []).map(d => ({
      domain: d.domain, displayName: d.displayName,
      accuracy: d.accuracy, correct: d.correct, total: d.total,
      pointsAvailable: d.pointsAvailable,
      errorTypes: d.errorTypes,
    })),

    skillAnalysis: {
      weakSkills: (report.skillAnalysis?.weakSkills || []).slice(0, 10).map(s => ({
        skillId: s.skillId,
        name: s.name,
        domain: s.domain,
        testAccuracy: s.testAccuracy,
        // Evidence rework: blank-excluded accuracy, sample size, and the
        // confirmed|suspected honesty tier.
        contentAccuracy: s.contentAccuracy,
        attempted: s.attempted,
        blanks: s.blanks,
        evidenceLevel: s.evidenceLevel,
        correct: s.correct,
        total: s.total,
        primaryErrorType: s.primaryErrorType,
        historicalMastery: s.historicalMastery,
        historicalAttempts: s.historicalAttempts,
        trend: s.trend,
        modules: s.modules,
        sections: s.sections,
      })),
      strongSkills: (report.skillAnalysis?.strongSkills || []).slice(0, 5).map(s => ({
        name: s.name, testAccuracy: s.testAccuracy, trend: s.trend,
      })),
    },

    wrongQuestions,

    rootCauseClusters: (report.rootCauseClusters || []).map(c => ({
      id: c.id, label: c.label, severity: c.severity,
      count: c.count, description: c.description,
      recurringSkills: c.recurringSkills,
    })),

    skillClusters: (report.skillClusters || []).map(c => ({
      name: c.name, rootConcept: c.rootConcept,
      failedSkills: c.failedSkills, severity: c.severity,
      questionsAffected: c.questionsAffected,
      recommendation: c.recommendation,
    })),

    difficultyAnalysis: report.difficultyAnalysis,

    timeAnalysis: report.timeAnalysis ? {
      avgTimePerQuestion: report.timeAnalysis.avgTimePerQuestion,
      avgCorrectTime: report.timeAnalysis.avgCorrectTime,
      avgIncorrectTime: report.timeAnalysis.avgIncorrectTime,
      fadeEffect: report.timeAnalysis.fadeEffect,
      firstHalfAccuracy: report.timeAnalysis.firstHalfAccuracy,
      secondHalfAccuracy: report.timeAnalysis.secondHalfAccuracy,
      timeRelatedErrors: report.timeAnalysis.timeRelatedErrors,
      insights: report.timeAnalysis.insights,
    } : {},

    stamina: report.stamina?.hasData ? {
      staminaScore: report.stamina.staminaScore,
      rating: report.stamina.rating,
      dropoff: report.stamina.dropoff,
      quarters: report.stamina.quarters?.map(q => ({
        label: q.label, accuracy: q.accuracy, avgTime: q.avgTime,
      })),
    } : null,

    answerPatterns: report.answerPatterns ? {
      hasPositionBias: report.answerPatterns.hasPositionBias,
      biasWarning: report.answerPatterns.biasWarning,
      answerChanges: report.answerPatterns.answerChanges,
      elimination: report.answerPatterns.elimination,
    } : {},

    trendAnalysis: report.trendAnalysis ? {
      hasHistory: report.trendAnalysis.hasHistory,
      trend: report.trendAnalysis.trend,
      scoreChange: report.trendAnalysis.scoreChange,
      improvingSkills: report.trendAnalysis.improvingSkills,
      decliningSkills: report.trendAnalysis.decliningSkills,
      persistentWeaknesses: report.trendAnalysis.persistentWeaknesses,
    } : {},

    mistakeFingerprint: report.mistakeFingerprint ? {
      archetype: report.mistakeFingerprint.archetype,
      archetypeLabel: report.mistakeFingerprint.archetypeLabel,
      archetypeDescription: report.mistakeFingerprint.archetypeDescription,
      traits: report.mistakeFingerprint.traits,
    } : {},

    confidenceInterval: report.confidenceInterval ? {
      scaled80: report.confidenceInterval.scaled80,
      reliability: report.confidenceInterval.reliability,
    } : null,

    learningVelocity: report.learningVelocity?.hasData ? {
      velocity: report.learningVelocity.velocity,
      trend: report.learningVelocity.trend,
      totalGain: report.learningVelocity.totalGain,
      testsCompleted: report.learningVelocity.testsCompleted,
    } : null,

    timeAllocation: report.timeAllocation,

    prioritizedActions: (report.prioritizedActions || []).slice(0, 6).map(a => ({
      title: a.title, category: a.category, estimatedGain: a.estimatedGain,
      description: a.description,
    })),

    // Pre-test drill work on skills this test covered — the transfer signal.
    drillEvidence: drillEvidence?.recentDrills?.length ? {
      recentDrills: drillEvidence.recentDrills.slice(0, 8).map(d => ({
        skillId: d.skillId, accuracy: d.accuracy, attempts: d.attempts,
      })),
    } : null,
  };
}
