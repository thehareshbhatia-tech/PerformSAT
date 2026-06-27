/**
 * Intervention Tracker — Component 1 of the Closed-Loop Data Intelligence System
 *
 * Logs every teaching action as a trackable intervention with pre-metrics,
 * so the loop closer (Cloud Function) can measure impact after the next test.
 *
 * Data lives at progress/{userId}.interventionLog[] (bounded to 50 entries).
 */

import { db } from '../firebase/config';
import { doc, getDoc, runTransaction } from 'firebase/firestore';

const MAX_INTERVENTION_LOG = 50;

/**
 * Generates a short unique ID for an intervention
 */
const generateId = () => {
  return `int_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
};

/**
 * Starts tracking a new intervention (teaching action).
 * Called when the AI tutor engages with a student on specific skills.
 *
 * @param {string} userId
 * @param {Object} params
 * @param {'tutoring_session'|'proactive_recommendation'|'trap_warning'|'reteach'} params.type
 * @param {string[]} params.skillIds - Skills being targeted
 * @param {'concrete_examples'|'socratic'|'desmos_visual'|'step_by_step'|'analogy'|'pattern_recognition'} params.approach
 * @param {'lesson'|'practice'|'post_test'} params.context
 * @param {string} params.moduleId
 * @param {string|null} params.lessonId
 * @param {Object} params.preMetrics
 * @param {Object} params.preMetrics.skillMastery - { [skillId]: number }
 * @param {Object} params.preMetrics.errorTypes - { [errorType]: number }
 * @param {string} params.preMetrics.archetype
 * @returns {Promise<string>} interventionId
 */
export const startIntervention = async (userId, { type, skillIds, approach, context, moduleId, lessonId, preMetrics }) => {
  const interventionId = generateId();

  const intervention = {
    id: interventionId,
    type,
    skillIds: skillIds || [],
    approach: approach || 'concrete_examples',
    context: context || 'lesson',
    moduleId: moduleId || null,
    lessonId: lessonId || null,
    preMetrics: {
      skillMastery: preMetrics?.skillMastery || {},
      errorTypes: preMetrics?.errorTypes || {},
      archetype: preMetrics?.archetype || 'unknown',
    },
    resolved: false,
    postMetrics: null,
    createdAt: new Date().toISOString(),
    resolvedAt: null,
  };

  try {
    const progressRef = doc(db, 'progress', userId);
    // Transaction: re-reads the log and retries if another device wrote
    // concurrently, so a second device starting an intervention at the same
    // time doesn't clobber this append (read-modify-write lost-update).
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(progressRef);
      let log = snap.exists() ? (snap.data().interventionLog || []) : [];
      log = [...log, intervention];
      // Evict oldest resolved entries first if over cap
      if (log.length > MAX_INTERVENTION_LOG) {
        log = evictOldest(log, MAX_INTERVENTION_LOG);
      }
      // setDoc+merge so this works even if the progress doc doesn't exist yet
      tx.set(progressRef, { interventionLog: log }, { merge: true });
    });
    return interventionId;
  } catch (err) {
    console.error('[interventionTracker] Failed to start intervention:', err);
    throw err;
  }
};

/**
 * Gets all unresolved interventions for a user.
 * Used by the loop closer to find interventions that need post-test resolution.
 *
 * @param {string} userId
 * @returns {Promise<Object[]>}
 */
export const getUnresolvedInterventions = async (userId) => {
  try {
    const progressRef = doc(db, 'progress', userId);
    const progressSnap = await getDoc(progressRef);

    if (!progressSnap.exists()) return [];

    const log = progressSnap.data().interventionLog || [];
    return log.filter(i => !i.resolved);
  } catch (err) {
    console.error('[interventionTracker] Failed to get unresolved interventions:', err);
    return [];
  }
};

/**
 * Resolves an intervention after a test covers the targeted skills.
 * Computes delta between pre and post metrics.
 *
 * @param {string} userId
 * @param {string} interventionId
 * @param {Object} postMetrics
 * @param {Object} postMetrics.skillMastery - { [skillId]: number }
 * @param {Object} postMetrics.errorTypes - { [errorType]: number }
 * @returns {Promise<void>}
 */
export const resolveIntervention = async (userId, interventionId, postMetrics) => {
  try {
    const progressRef = doc(db, 'progress', userId);
    // Transaction: re-read + retry so resolving an intervention on one device
    // doesn't clobber a concurrent append/resolve from another device.
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(progressRef);
      if (!snap.exists()) return;

      const log = [...(snap.data().interventionLog || [])];
      const idx = log.findIndex(i => i.id === interventionId);
      if (idx === -1) return;

      const intervention = log[idx];

      // Compute delta per skill
      const delta = {};
      let totalDelta = 0;
      let deltaCount = 0;
      for (const skillId of intervention.skillIds) {
        const pre = intervention.preMetrics?.skillMastery?.[skillId] ?? 0;
        const post = postMetrics?.skillMastery?.[skillId] ?? pre;
        delta[skillId] = post - pre;
        totalDelta += delta[skillId];
        deltaCount++;
      }

      const avgDelta = deltaCount > 0 ? totalDelta / deltaCount : 0;

      log[idx] = {
        ...intervention,
        resolved: true,
        resolvedAt: new Date().toISOString(),
        postMetrics: {
          skillMastery: postMetrics?.skillMastery || {},
          errorTypes: postMetrics?.errorTypes || {},
          delta,
          improved: avgDelta > 0,
        },
      };

      tx.update(progressRef, { interventionLog: log });
    });
  } catch (err) {
    console.error('[interventionTracker] Failed to resolve intervention:', err);
    throw err;
  }
};

/**
 * Aggregates effectiveness data for a specific approach on a specific skill.
 * Returns stats on how each approach performed for this student+skill.
 *
 * @param {string} userId
 * @param {string} skillId
 * @returns {Promise<Object>} { [approach]: { attempts, avgDelta, successRate } }
 */
export const getApproachEffectiveness = async (userId, skillId) => {
  try {
    const progressRef = doc(db, 'progress', userId);
    const progressSnap = await getDoc(progressRef);

    if (!progressSnap.exists()) return {};

    const log = progressSnap.data().interventionLog || [];
    return computeApproachEffectiveness(log, skillId);
  } catch (err) {
    console.error('[interventionTracker] Failed to get approach effectiveness:', err);
    return {};
  }
};

/**
 * Pure computation: aggregates effectiveness from an intervention log array.
 * Can be used client-side with cached data (no Firestore call).
 *
 * @param {Object[]} interventionLog
 * @param {string} skillId
 * @returns {Object} { [approach]: { attempts, avgDelta, successRate } }
 */
export const computeApproachEffectiveness = (interventionLog, skillId) => {
  const resolved = (interventionLog || []).filter(
    i => i.resolved && i.skillIds?.includes(skillId) && i.postMetrics?.delta
  );

  const byApproach = {};

  for (const intervention of resolved) {
    const approach = intervention.approach;
    const delta = intervention.postMetrics.delta[skillId] ?? 0;

    if (!byApproach[approach]) {
      byApproach[approach] = { attempts: 0, totalDelta: 0, successes: 0 };
    }

    byApproach[approach].attempts++;
    byApproach[approach].totalDelta += delta;
    if (delta > 0) byApproach[approach].successes++;
  }

  const result = {};
  for (const [approach, data] of Object.entries(byApproach)) {
    result[approach] = {
      attempts: data.attempts,
      avgDelta: Math.round((data.totalDelta / data.attempts) * 10) / 10,
      successRate: Math.round((data.successes / data.attempts) * 100),
    };
  }

  return result;
};

/**
 * Infers the teaching approach from learning memory effective approaches.
 * Used when starting an intervention to tag the approach.
 *
 * @param {Object|null} learningMemory
 * @param {string|null} coachMode
 * @returns {string} approach tag
 */
export const inferApproach = (learningMemory, coachMode) => {
  if (coachMode === 'socratic') return 'socratic';
  if (coachMode === 'desmos') return 'desmos_visual';

  const approaches = learningMemory?.effectiveApproaches || [];
  const approachText = approaches.join(' ').toLowerCase();

  if (/concrete|example|number|specific/i.test(approachText)) return 'concrete_examples';
  if (/socratic|question|discover/i.test(approachText)) return 'socratic';
  if (/desmos|graph|visual/i.test(approachText)) return 'desmos_visual';
  if (/step.by.step|systematic|procedure/i.test(approachText)) return 'step_by_step';
  if (/analog|relate|connect/i.test(approachText)) return 'analogy';
  if (/pattern|recogni|structure/i.test(approachText)) return 'pattern_recognition';

  return 'concrete_examples'; // default
};

/**
 * Evicts oldest resolved entries to stay within cap.
 * Unresolved entries are preserved (they haven't been measured yet).
 */
function evictOldest(log, maxSize) {
  if (log.length <= maxSize) return log;

  // Separate resolved and unresolved
  const unresolved = log.filter(i => !i.resolved);
  const resolved = log.filter(i => i.resolved);

  // Sort resolved by date (oldest first)
  resolved.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  // If unresolved alone exceeds cap, keep newest unresolved + no resolved
  if (unresolved.length >= maxSize) {
    unresolved.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return unresolved.slice(0, maxSize);
  }

  // Evict oldest resolved entries first
  const toKeep = maxSize - unresolved.length;
  const keptResolved = resolved.slice(Math.max(0, resolved.length - toKeep));

  return [...keptResolved, ...unresolved];
}
