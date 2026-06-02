/**
 * Intelligence Context Builder — Component 6 of the Closed-Loop Data Intelligence System
 *
 * Assembles all data loop outputs into a single bounded context block (~400-500 tokens)
 * for the AI system prompt. Keeps the token budget tight while maximizing signal.
 */

import { getFingerprintContext } from './studentFingerprintService';
import { getPredictionContext } from './predictionEngine';

/**
 * Builds the complete intelligence context block for the AI system prompt.
 * Combines fingerprint, predictions, approach guidance, and intervention highlights
 * into a bounded ~400-500 token string.
 *
 * @param {Object|null} fingerprint - Student fingerprint from studentFingerprintService
 * @param {Object|null} predictions - Latest prediction from predictionEngine
 * @param {Object[]|null} interventionLog - Array of interventions
 * @param {Object|null} approachGuidance - { approach, reason, confidence, history }
 * @returns {string} Intelligence context block for system prompt
 */
export const buildIntelligenceContext = (fingerprint, predictions, interventionLog, approachGuidance, section = 'math') => {
  const parts = [];

  // 1. Fingerprint summary (~100 tokens)
  const fingerprintBlock = getFingerprintContext(fingerprint);
  if (fingerprintBlock) {
    parts.push(fingerprintBlock);
  }

  // 2. Prediction alerts (~100 tokens)
  const predictionBlock = getPredictionContext(predictions);
  if (predictionBlock) {
    parts.push(predictionBlock);
  }

  // 3. Approach guidance (~150 tokens)
  const approachBlock = buildApproachBlock(approachGuidance, section);
  if (approachBlock) {
    parts.push(approachBlock);
  }

  // 4. Resolved intervention highlights (~50 tokens)
  const interventionBlock = buildInterventionHighlights(interventionLog);
  if (interventionBlock) {
    parts.push(interventionBlock);
  }

  if (parts.length === 0) return '';

  return '\n\n' + parts.join('\n\n');
};

/**
 * Builds the approach guidance block.
 *
 * @param {Object|null} guidance
 * @returns {string}
 */
function buildApproachBlock(guidance, section = 'math') {
  if (!guidance?.approach) return '';

  const approachNames = {
    'concrete_examples': 'CONCRETE EXAMPLES',
    'socratic': 'SOCRATIC QUESTIONING',
    'desmos_visual': 'DESMOS VISUAL',
    'step_by_step': 'STEP-BY-STEP WALKTHROUGH',
    'analogy': 'ANALOGY AND CONNECTIONS',
    'pattern_recognition': 'PATTERN RECOGNITION',
    'close_reading': 'CLOSE READING AND EVIDENCE MAPPING',
  };

  // desmos_visual is a math-only graphing approach — never recommend it on an
  // R&W skill. Substitute a reading-appropriate approach for the verbal section.
  const approach = (section === 'rw' && guidance.approach === 'desmos_visual')
    ? 'close_reading'
    : guidance.approach;

  const name = approachNames[approach] || approach.toUpperCase();
  const parts = [`=== DATA-DRIVEN TEACHING GUIDANCE ===`];
  parts.push(`Recommended approach for this student: ${name}`);

  if (guidance.reason) {
    parts.push(`Reason: ${guidance.reason}`);
  }

  if (guidance.history?.best) {
    parts.push(`What has worked before: "${guidance.history.best.approach}" improved mastery by +${guidance.history.best.avgDelta}% last time.`);
  }

  if (guidance.history?.worst) {
    parts.push(`What hasn't worked: "${guidance.history.worst.approach}" — mastery dropped ${guidance.history.worst.avgDelta}% after last attempt.`);
  }

  return parts.join('\n');
}

/**
 * Builds intervention highlights from recent resolved interventions.
 * Shows the most recent 2 resolved interventions.
 *
 * @param {Object[]|null} interventionLog
 * @returns {string}
 */
function buildInterventionHighlights(interventionLog) {
  if (!interventionLog || interventionLog.length === 0) return '';

  const resolved = interventionLog
    .filter(i => i.resolved && i.postMetrics)
    .sort((a, b) => new Date(b.resolvedAt) - new Date(a.resolvedAt))
    .slice(0, 2);

  if (resolved.length === 0) return '';

  const lines = ['=== RECENT INTERVENTION RESULTS ==='];

  for (const intervention of resolved) {
    const skills = intervention.skillIds.join(', ');
    const approach = intervention.approach;
    const delta = intervention.postMetrics.delta || {};
    const avgDelta = Object.values(delta).length > 0
      ? Math.round(Object.values(delta).reduce((a, b) => a + b, 0) / Object.values(delta).length)
      : 0;
    const direction = avgDelta > 0 ? '+' : '';
    const result = intervention.postMetrics.improved ? 'improved' : 'no improvement';

    lines.push(`- ${skills}: ${direction}${avgDelta}% via ${approach} (${result})`);
  }

  return lines.join('\n');
}

/**
 * Gets the recommended approach for a student+skill combination.
 * Uses intervention history when available, falls back to fingerprint heuristics.
 *
 * @param {Object} effectivenessData - { [approach]: { attempts, avgDelta, successRate } }
 * @param {Object|null} fingerprint - Student fingerprint
 * @param {string[]} skillIds - Skills being taught
 * @returns {Object} { approach, reason, confidence, history }
 */
export const getRecommendedApproach = (effectivenessData, fingerprint, skillIds) => {
  // If we have sufficient data (3+ resolved interventions for any approach)
  if (effectivenessData && Object.keys(effectivenessData).length > 0) {
    const withData = Object.entries(effectivenessData).filter(([_, d]) => d.attempts >= 3);

    if (withData.length > 0) {
      // Pick approach with highest avgDelta and successRate > 50%
      const viable = withData
        .filter(([_, d]) => d.successRate > 50)
        .sort((a, b) => b[1].avgDelta - a[1].avgDelta);

      if (viable.length > 0) {
        const [bestApproach, bestData] = viable[0];

        // Find worst approach for context
        const worst = withData.sort((a, b) => a[1].avgDelta - b[1].avgDelta);
        const worstEntry = worst[0]?.[1]?.avgDelta < 0 ? {
          approach: worst[0][0],
          avgDelta: worst[0][1].avgDelta,
        } : null;

        return {
          approach: bestApproach,
          reason: `Data-driven: "${bestApproach}" has ${bestData.successRate}% success rate with avg +${bestData.avgDelta}% mastery improvement across ${bestData.attempts} sessions.`,
          confidence: 'high',
          history: {
            best: { approach: bestApproach, avgDelta: bestData.avgDelta },
            worst: worstEntry,
          },
        };
      }
    }
  }

  // Fall back to fingerprint-based heuristics
  if (fingerprint) {
    return getHeuristicApproach(fingerprint);
  }

  return {
    approach: 'concrete_examples',
    reason: 'Default approach — no student data available yet.',
    confidence: 'low',
    history: null,
  };
};

/**
 * Heuristic approach selection based on fingerprint dimensions.
 */
function getHeuristicApproach(fingerprint) {
  // Fast but trap-prone → slow them down, show trap structure
  if (fingerprint.speedProfile > 70 && fingerprint.trapResistance < 50) {
    return {
      approach: 'pattern_recognition',
      reason: `This student is fast (speed ${fingerprint.speedProfile}/100) but falls for traps (resistance ${fingerprint.trapResistance}/100). Show them the trap structure to slow down and recognize patterns.`,
      confidence: 'medium',
      history: null,
    };
  }

  // Shallow conceptual understanding → build from ground up
  if (fingerprint.conceptualDepth < 40) {
    return {
      approach: 'concrete_examples',
      reason: `This student has conceptualDepth ${fingerprint.conceptualDepth}/100 — abstract explanations don't stick. Lead with a specific, simple number example before introducing the general method.`,
      confidence: 'medium',
      history: null,
    };
  }

  // Fast learner → let them discover
  if (fingerprint.learningVelocity > 70) {
    return {
      approach: 'socratic',
      reason: `This student learns quickly (velocity ${fingerprint.learningVelocity}/100). Socratic questioning lets them discover patterns themselves, which sticks better for fast learners.`,
      confidence: 'medium',
      history: null,
    };
  }

  // Low stamina → reduce cognitive load
  if (fingerprint.staminaProfile < 50) {
    return {
      approach: 'step_by_step',
      reason: `This student has stamina ${fingerprint.staminaProfile}/100 — performance drops under cognitive load. Break explanations into small, clear steps.`,
      confidence: 'medium',
      history: null,
    };
  }

  // Default
  return {
    approach: 'concrete_examples',
    reason: 'Balanced profile — concrete examples provide a solid foundation for most learners.',
    confidence: 'low',
    history: null,
  };
}
