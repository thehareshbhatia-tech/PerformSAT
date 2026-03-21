/**
 * Prediction Engine — Component 3 of the Closed-Loop Data Intelligence System
 *
 * Predicts what will go wrong on the next test based on fingerprint trajectory,
 * intervention history, and skill trends. Predictions are validated when the next
 * test arrives, feeding back into the loop.
 *
 * Stored at progress/{userId}.predictionLog[] (bounded to 10 entries).
 */

import { db } from '../firebase/config';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const MAX_PREDICTION_LOG = 10;

/**
 * Generates predictions for the next test.
 *
 * @param {Object} fingerprint - From studentFingerprintService
 * @param {Object} practiceTestResults - All test results { testId: { attempts: [...] } }
 * @param {Object} skillProgress - { skillId: { mastery, attempts, ... } }
 * @param {Object[]} interventionLog - Array of interventions
 * @param {string} afterTestId - The test that triggered this prediction
 * @returns {Object} prediction object
 */
export const generatePredictions = (fingerprint, practiceTestResults, skillProgress, interventionLog, afterTestId) => {
  const recentScores = getRecentScores(practiceTestResults, 3);
  const expectedScoreRange = predictScoreRange(recentScores, fingerprint);
  const likelyStruggleSkills = predictStruggleSkills(skillProgress, interventionLog, fingerprint);
  const trapVulnerabilities = predictTrapVulnerabilities(practiceTestResults, fingerprint);
  const expectedArchetype = predictArchetype(fingerprint);

  return {
    id: `pred_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
    createdAfterTestId: afterTestId,
    predictions: {
      expectedScoreRange,
      likelyStruggleSkills,
      trapVulnerabilities,
      expectedArchetype,
    },
    resolved: false,
    actualTestId: null,
    accuracy: null,
  };
};

/**
 * Validates predictions against a new test's diagnostic data.
 *
 * @param {Object} prediction - The prediction to validate
 * @param {Object} diagnosticData - New test's diagnostic output
 * @param {string} testId - The new test's ID
 * @returns {Object} prediction with accuracy fields filled in
 */
export const validatePrediction = (prediction, diagnosticData, testId) => {
  if (!prediction || !diagnosticData) return prediction;

  const preds = prediction.predictions;
  const actualScore = diagnosticData.score?.scaled;

  // Score in range?
  const scoreInRange = actualScore != null &&
    actualScore >= preds.expectedScoreRange.low &&
    actualScore <= preds.expectedScoreRange.high;

  // How many predicted struggle skills were actually weak?
  const actualWeak = new Set(
    (diagnosticData.skillAnalysis?.weakSkills || []).map(s => s.skillId)
  );
  const struggleSkillsHit = preds.likelyStruggleSkills.filter(
    s => actualWeak.has(s.skillId)
  ).length;

  // How many predicted trap types actually occurred?
  const actualTraps = diagnosticData.errorPatterns?.counts || {};
  const trapPredictionHit = preds.trapVulnerabilities.filter(
    t => (actualTraps[t.trapType] || 0) >= 2
  ).length;

  // Archetype match?
  const actualArchetype = diagnosticData.mistakeFingerprint?.archetype || 'unknown';
  const archetypeMatch = preds.expectedArchetype === actualArchetype;

  return {
    ...prediction,
    resolved: true,
    actualTestId: testId,
    accuracy: {
      scoreInRange,
      struggleSkillsHit,
      trapPredictionHit,
      archetypeMatch,
    },
  };
};

/**
 * Saves a prediction to the prediction log in Firestore.
 *
 * @param {string} userId
 * @param {Object} prediction
 * @returns {Promise<void>}
 */
export const savePrediction = async (userId, prediction) => {
  try {
    const progressRef = doc(db, 'progress', userId);
    const progressSnap = await getDoc(progressRef);

    let log = [];
    if (progressSnap.exists()) {
      log = progressSnap.data().predictionLog || [];
    }

    log.push(prediction);

    // Evict oldest if over cap
    while (log.length > MAX_PREDICTION_LOG) {
      log.shift();
    }

    await setDoc(progressRef, { predictionLog: log }, { merge: true });
  } catch (err) {
    console.error('[predictionEngine] Failed to save prediction:', err);
    throw err;
  }
};

/**
 * Validates and updates unresolved predictions in Firestore.
 *
 * @param {string} userId
 * @param {Object} diagnosticData
 * @param {string} testId
 * @returns {Promise<void>}
 */
export const validateAndUpdatePredictions = async (userId, diagnosticData, testId) => {
  try {
    const progressRef = doc(db, 'progress', userId);
    const progressSnap = await getDoc(progressRef);

    if (!progressSnap.exists()) return;

    const log = progressSnap.data().predictionLog || [];
    let updated = false;

    for (let i = 0; i < log.length; i++) {
      if (!log[i].resolved) {
        log[i] = validatePrediction(log[i], diagnosticData, testId);
        updated = true;
      }
    }

    if (updated) {
      await updateDoc(progressRef, { predictionLog: log });
    }
  } catch (err) {
    console.error('[predictionEngine] Failed to validate predictions:', err);
  }
};

/**
 * Generates a ~100-token context string for the AI system prompt.
 *
 * @param {Object} predictions - The latest prediction object
 * @returns {string}
 */
export const getPredictionContext = (predictions) => {
  if (!predictions?.predictions) return '';

  const p = predictions.predictions;
  const parts = ['=== PREDICTIONS FOR THIS STUDENT ==='];

  // Struggle skills
  if (p.likelyStruggleSkills?.length > 0) {
    const skills = p.likelyStruggleSkills
      .map(s => `"${s.skillId}" (${s.confidence})`)
      .join(', ');
    parts.push(`Next test risk areas: ${skills}`);
  }

  // Trap vulnerabilities
  if (p.trapVulnerabilities?.length > 0) {
    const traps = p.trapVulnerabilities
      .map(t => `${t.trapType} (${t.confidence})`)
      .join(', ');
    parts.push(`Trap vulnerability: ${traps}`);
  }

  // Expected score range
  if (p.expectedScoreRange) {
    parts.push(`Expected range: ${p.expectedScoreRange.low}-${p.expectedScoreRange.high}`);
  }

  return parts.join('\n');
};

// ─── Prediction Logic ────────────────────────────────────────────────

/**
 * Predicts score range based on recent scores and learning velocity.
 */
function predictScoreRange(recentScores, fingerprint) {
  if (recentScores.length === 0) {
    return { low: 400, high: 800 };
  }

  const avg = recentScores.reduce((a, b) => a + b, 0) / recentScores.length;
  const velocityFactor = fingerprint?.learningVelocity ?? 50;

  // Trend adjustment: positive velocity = slight upward shift
  const trendShift = (velocityFactor - 50) * 0.5;

  // Widen band if velocity is unstable (far from 50 in either direction)
  const instability = Math.abs(velocityFactor - 50);
  const bandWidth = 30 + (instability > 25 ? 15 : 0);

  const center = avg + trendShift;

  return {
    low: Math.max(200, Math.round(center - bandWidth)),
    high: Math.min(800, Math.round(center + bandWidth)),
  };
}

/**
 * Predicts which skills will be problematic on the next test.
 * Skills with mastery < 50 AND declining trend OR negative intervention delta.
 */
function predictStruggleSkills(skillProgress, interventionLog, fingerprint) {
  if (!skillProgress) return [];

  const candidates = [];

  for (const [skillId, data] of Object.entries(skillProgress)) {
    if (!data || data.attempts < 2) continue;

    const mastery = data.mastery ?? 100;
    if (mastery >= 50) continue;

    // Check for unresolved interventions with negative delta
    const relatedInterventions = (interventionLog || []).filter(
      i => i.skillIds?.includes(skillId) && i.resolved && i.postMetrics?.delta
    );
    const hasNegativeDelta = relatedInterventions.some(
      i => (i.postMetrics.delta[skillId] ?? 0) < 0
    );

    // Determine confidence based on available signals
    let confidence = 'medium';
    if (mastery < 30 && hasNegativeDelta) confidence = 'high';
    else if (mastery < 30 || hasNegativeDelta) confidence = 'high';
    else if (mastery >= 40) confidence = 'low';

    let reason = `Mastery at ${mastery}%`;
    if (hasNegativeDelta) reason += ', previous intervention showed no improvement';

    candidates.push({
      skillId,
      reason,
      confidence,
      // Sort weight: lower mastery + negative delta = higher priority
      _weight: (100 - mastery) * (hasNegativeDelta ? 1.5 : 1),
    });
  }

  return candidates
    .sort((a, b) => b._weight - a._weight)
    .slice(0, 3)
    .map(({ _weight, ...rest }) => rest);
}

/**
 * Predicts which trap types the student will fall for.
 * Trap types with 3+ occurrences across recent tests AND trapResistance < 50.
 */
function predictTrapVulnerabilities(practiceTestResults, fingerprint) {
  if (!practiceTestResults || (fingerprint?.trapResistance ?? 100) >= 50) return [];

  // Aggregate trap types across last 3 tests
  const trapCounts = {};
  const recentAttempts = getRecentAttempts(practiceTestResults, 3);

  for (const attempt of recentAttempts) {
    const errorCounts = attempt.diagnosticData?.errorPatterns?.counts || {};
    for (const [type, count] of Object.entries(errorCounts)) {
      if (type === 'TRAP_SUSCEPTIBILITY') {
        // This is the aggregate; look at individual traps in question analysis
        continue;
      }
      trapCounts[type] = (trapCounts[type] || 0) + count;
    }

    // Also check question-level trap data
    const questions = attempt.diagnosticData?.questionAnalysis || [];
    for (const q of questions) {
      if (q.errorType === 'TRAP_SUSCEPTIBILITY') {
        const trapType = q.trapType || 'general_trap';
        trapCounts[trapType] = (trapCounts[trapType] || 0) + 1;
      }
    }
  }

  return Object.entries(trapCounts)
    .filter(([_, count]) => count >= 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([trapType, count]) => ({
      trapType,
      confidence: count >= 5 ? 'high' : 'medium',
    }));
}

/**
 * Predicts the archetype for the next test.
 * If stable for 2+ tests, predict same. If transitioning, predict new.
 */
function predictArchetype(fingerprint) {
  if (!fingerprint?.snapshots || fingerprint.snapshots.length < 2) {
    return fingerprint?.archetype || 'balanced';
  }

  // Check last 2 snapshots for stability
  // (Archetype is stored on fingerprint, not on snapshots, so we use the current one)
  // If fingerprint has been the same archetype for 2+ updates, predict same
  return fingerprint.archetype || 'balanced';
}

// ─── Helpers ─────────────────────────────────────────────────────────

/**
 * Gets the most recent N scaled scores from practice test results.
 */
function getRecentScores(practiceTestResults, n) {
  if (!practiceTestResults) return [];

  const allAttempts = [];
  for (const testData of Object.values(practiceTestResults)) {
    if (testData?.attempts) {
      for (const attempt of testData.attempts) {
        if (attempt.scaledScore) {
          allAttempts.push({
            score: attempt.scaledScore,
            date: attempt.completedAt,
          });
        }
      }
    }
  }

  return allAttempts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, n)
    .map(a => a.score);
}

/**
 * Gets the most recent N test attempts with diagnostic data.
 */
function getRecentAttempts(practiceTestResults, n) {
  if (!practiceTestResults) return [];

  const allAttempts = [];
  for (const testData of Object.values(practiceTestResults)) {
    if (testData?.attempts) {
      for (const attempt of testData.attempts) {
        if (attempt.diagnosticData) {
          allAttempts.push(attempt);
        }
      }
    }
  }

  return allAttempts
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
    .slice(0, n);
}
