/**
 * Student Fingerprint Service — Component 2 of the Closed-Loop Data Intelligence System
 *
 * A 6-dimensional evolving profile computed from diagnosticData output.
 * Stored at progress/{userId}.studentFingerprint. Updated after every practice test.
 * Used by the approach selector and prediction engine.
 */

import { db } from '../firebase/config';
import { doc, runTransaction } from 'firebase/firestore';

const MAX_SNAPSHOTS = 10;

/**
 * Computes a student fingerprint from diagnostic data.
 * All 6 dimensions are derived from existing runDiagnostic() output.
 *
 * @param {Object} diagnosticData - Output from runDiagnostic()
 * @param {Object} skillProgress - { skillId: { mastery, attempts, ... } }
 * @returns {Object} fingerprint dimensions
 */
export const computeFingerprint = (diagnosticData, skillProgress) => {
  if (!diagnosticData) return null;

  const speedProfile = computeSpeedProfile(diagnosticData);
  const conceptualDepth = computeConceptualDepth(diagnosticData);
  const trapResistance = computeTrapResistance(diagnosticData);
  const staminaProfile = computeStaminaProfile(diagnosticData);
  const confidenceCalibration = computeConfidenceCalibration(diagnosticData, skillProgress);
  const learningVelocity = computeLearningVelocity(diagnosticData);

  // Derived fields
  const archetype = diagnosticData.mistakeFingerprint?.archetype || 'balanced';
  const dominantErrorType = getDominantErrorType(diagnosticData);
  const { strongestDomain, weakestDomain } = getDomainExtremes(diagnosticData);

  return {
    speedProfile,
    conceptualDepth,
    trapResistance,
    staminaProfile,
    confidenceCalibration,
    learningVelocity,
    archetype,
    dominantErrorType,
    strongestDomain,
    weakestDomain,
  };
};

/**
 * Updates the student fingerprint in Firestore.
 * Computes new fingerprint, merges with existing, pushes snapshot.
 *
 * @param {string} userId
 * @param {Object} diagnosticData
 * @param {Object} skillProgress
 * @param {string} testId
 * @param {number|null} scaledScore
 * @returns {Promise<Object>} the updated fingerprint
 */
export const updateFingerprint = async (userId, diagnosticData, skillProgress, testId, scaledScore = null) => {
  const dimensions = computeFingerprint(diagnosticData, skillProgress);
  if (!dimensions) return null;

  try {
    const progressRef = doc(db, 'progress', userId);

    // Transactional read-modify-write. updateFingerprint fires on test
    // completion — the same moment a second device finishing the same test (or
    // an overlapping save path) could write studentFingerprint. A plain
    // getDoc→setDoc read-modify-write drops the concurrent write's snapshot;
    // Firestore re-runs this callback on contention so the snapshots array
    // always appends onto the freshest read (mirrors skillService /
    // predictionEngine / interventionTracker). `fingerprint` is hoisted so the
    // merged value survives to the return (callers feed it to generatePredictions).
    let fingerprint = null;
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(progressRef);
      const existing = snap.exists() ? (snap.data().studentFingerprint || null) : null;

      // Build snapshot
      const snapshot = {
        testId,
        timestamp: new Date().toISOString(),
        dimensions: {
          speedProfile: dimensions.speedProfile,
          conceptualDepth: dimensions.conceptualDepth,
          trapResistance: dimensions.trapResistance,
          staminaProfile: dimensions.staminaProfile,
          confidenceCalibration: dimensions.confidenceCalibration,
          learningVelocity: dimensions.learningVelocity,
        },
        scaledScore: scaledScore ?? diagnosticData.score?.scaled ?? null,
      };

      // Merge snapshots (fresh copy each retry so a re-run doesn't double-append)
      const snapshots = [...(existing?.snapshots || []), snapshot];

      // Evict oldest if over cap
      while (snapshots.length > MAX_SNAPSHOTS) {
        snapshots.shift();
      }

      fingerprint = {
        ...dimensions,
        snapshots,
        updatedAt: new Date().toISOString(),
      };

      // set()+merge so this works even if the progress doc doesn't exist yet.
      tx.set(progressRef, { studentFingerprint: fingerprint }, { merge: true });
    });
    return fingerprint;
  } catch (err) {
    console.error('[studentFingerprint] Failed to update fingerprint:', err);
    throw err;
  }
};

/**
 * Generates a ~100-token context string for the AI system prompt.
 *
 * @param {Object} fingerprint
 * @returns {string}
 */
export const getFingerprintContext = (fingerprint) => {
  if (!fingerprint) return '';

  const dims = [
    `Speed ${fingerprint.speedProfile}/100`,
    `Depth ${fingerprint.conceptualDepth}/100`,
    `Trap Resist ${fingerprint.trapResistance}/100`,
    `Stamina ${fingerprint.staminaProfile}/100`,
    `Calibration ${fingerprint.confidenceCalibration}/100`,
    `Velocity ${fingerprint.learningVelocity}/100`,
  ].join(' | ');

  const pattern = describePattern(fingerprint);

  return `=== STUDENT FINGERPRINT ===
Profile: ${dims}
Archetype: ${fingerprint.archetype} | Weakest: ${fingerprint.weakestDomain || 'N/A'} | Pattern: ${pattern}`;
};

// ─── Dimension Computations ─────────────────────────────────────────

/**
 * Speed Profile: How fast vs. accurate (100 = very fast, 0 = very slow/careful)
 * Source: timeAnalysis.avgTimePerQuestion, weighted by accuracy
 */
function computeSpeedProfile(diagnosticData) {
  const ta = diagnosticData.timeAnalysis;
  if (!ta?.avgTimePerQuestion) return 50;

  const avgTime = ta.avgTimePerQuestion;
  // Normalize: 30s = 100 (very fast), 120s = 0 (very slow)
  const raw = Math.round(((120 - avgTime) / 90) * 100);

  // Weight by accuracy — fast and inaccurate is not the same as fast and accurate
  const accuracy = diagnosticData.score?.percentCorrect ?? 50;
  const accuracyWeight = accuracy / 100;

  // Blend: high speed with low accuracy pulls the score toward 50 (neutral)
  const weighted = Math.round(raw * accuracyWeight + 50 * (1 - accuracyWeight));

  return clamp(weighted, 0, 100);
}

/**
 * Conceptual Depth: Ratio of conceptual vs procedural errors (100 = deep understanding)
 * Source: errorPatterns.summary
 */
function computeConceptualDepth(diagnosticData) {
  const summary = diagnosticData.errorPatterns?.summary;
  if (!summary || summary.length === 0) return 50;

  const totalWrong = diagnosticData.errorPatterns?.totalWrong || 1;
  const conceptualGaps = summary.find(e => e.type === 'CONCEPTUAL_GAP');
  const conceptualPct = conceptualGaps ? (conceptualGaps.count / totalWrong) * 100 : 0;

  // Higher conceptual gap % = lower conceptual depth
  return clamp(Math.round(100 - (conceptualPct * 1.5)), 0, 100);
}

/**
 * Trap Resistance: How often they avoid trap answers (100 = immune)
 * Source: errorPatterns.summary, mistakeFingerprint
 */
function computeTrapResistance(diagnosticData) {
  const summary = diagnosticData.errorPatterns?.summary;
  if (!summary || summary.length === 0) return 50;

  const totalWrong = diagnosticData.errorPatterns?.totalWrong || 1;
  const traps = summary.find(e => e.type === 'TRAP_SUSCEPTIBILITY');
  const trapPct = traps ? (traps.count / totalWrong) * 100 : 0;

  return clamp(Math.round(100 - (trapPct * 2)), 0, 100);
}

/**
 * Stamina Profile: Performance consistency Q1->Q4 (100 = no dropoff)
 * Source: stamina.staminaScore (direct passthrough)
 */
function computeStaminaProfile(diagnosticData) {
  if (diagnosticData.stamina?.staminaScore != null) {
    return clamp(Math.round(diagnosticData.stamina.staminaScore), 0, 100);
  }
  return 50;
}

/**
 * Confidence Calibration: How well self-assessment matches reality
 * Source: answerPatterns.answerChangeSuccess, skill mastery vs actual accuracy
 */
function computeConfidenceCalibration(diagnosticData, skillProgress) {
  let calibrationScore = 50;
  let signals = 0;

  // Signal 1: Answer change success rate
  const ac = diagnosticData.answerPatterns?.answerChanges;
  if (ac && ac.total > 0) {
    const changeAccuracy = ac.changedToCorrect / ac.total;
    // If they change answers and usually improve, they're well-calibrated
    calibrationScore += (changeAccuracy - 0.5) * 40;
    signals++;
  }

  // Signal 2: Compare predicted mastery vs actual test accuracy per skill
  if (skillProgress && diagnosticData.skillAnalysis) {
    const weakSkills = diagnosticData.skillAnalysis.weakSkills || [];
    const strongSkills = diagnosticData.skillAnalysis.strongSkills || [];
    const allTestSkills = [...weakSkills, ...strongSkills];

    let totalDeviation = 0;
    let skillCount = 0;

    for (const ts of allTestSkills) {
      const sp = skillProgress[ts.skillId];
      if (sp && sp.attempts >= 2 && ts.testAccuracy != null) {
        const deviation = Math.abs(sp.mastery - ts.testAccuracy);
        totalDeviation += deviation;
        skillCount++;
      }
    }

    if (skillCount > 0) {
      const avgDeviation = totalDeviation / skillCount;
      // Lower deviation = better calibration
      const deviationScore = 100 - avgDeviation;
      calibrationScore = signals > 0
        ? (calibrationScore + deviationScore) / 2
        : deviationScore;
      signals++;
    }
  }

  return clamp(Math.round(calibrationScore), 0, 100);
}

/**
 * Learning Velocity: Rate of mastery improvement over time (100 = very fast learner)
 * Source: learningVelocity from calculateLearningVelocity()
 */
function computeLearningVelocity(diagnosticData) {
  const lv = diagnosticData.learningVelocity;
  if (!lv?.velocity) return 50;

  const velocity = lv.velocity; // pts/week

  // Normalize: >5 pts/week = 100, 0 = 50, <-2 = 0
  if (velocity >= 5) return 100;
  if (velocity >= 0) return clamp(Math.round(50 + (velocity / 5) * 50), 50, 100);
  return clamp(Math.round(50 + (velocity / 2) * 50), 0, 50);
}

// ─── Helpers ─────────────────────────────────────────────────────────

function getDominantErrorType(diagnosticData) {
  const counts = diagnosticData.errorPatterns?.counts;
  if (!counts) return 'unknown';

  let maxType = 'unknown';
  let maxCount = 0;
  for (const [type, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      maxType = type;
    }
  }
  return maxType;
}

function getDomainExtremes(diagnosticData) {
  const domains = diagnosticData.domainAnalysis;
  if (!domains || domains.length === 0) {
    return { strongestDomain: 'N/A', weakestDomain: 'N/A' };
  }

  let strongest = domains[0];
  let weakest = domains[0];

  for (const d of domains) {
    if ((d.accuracy ?? 0) > (strongest.accuracy ?? 0)) strongest = d;
    if ((d.accuracy ?? 100) < (weakest.accuracy ?? 100)) weakest = d;
  }

  return {
    strongestDomain: strongest.displayName || strongest.domain || 'N/A',
    weakestDomain: weakest.displayName || weakest.domain || 'N/A',
  };
}

function describePattern(fingerprint) {
  const parts = [];

  if (fingerprint.speedProfile > 70 && fingerprint.trapResistance < 50) {
    parts.push('Fast but falls for engineered wrong answers');
  } else if (fingerprint.speedProfile < 30) {
    parts.push('Careful and methodical');
  } else if (fingerprint.speedProfile > 70) {
    parts.push('Quick solver');
  }

  if (fingerprint.conceptualDepth < 40) {
    parts.push('conceptual gaps need concrete foundations');
  }

  if (fingerprint.staminaProfile < 50) {
    parts.push('accuracy drops under test fatigue');
  }

  if (fingerprint.learningVelocity > 70) {
    parts.push('learns quickly from instruction');
  } else if (fingerprint.learningVelocity < 30) {
    parts.push('needs repetition to internalize');
  }

  return parts.length > 0 ? parts.join('; ') : 'Balanced profile';
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
