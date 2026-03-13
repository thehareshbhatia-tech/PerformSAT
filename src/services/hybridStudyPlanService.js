/**
 * Hybrid Study Plan Service
 *
 * Merges deterministic plan output (from studyPlanGenerator) with AI-augmented
 * plan output (from cloud function) into a single canonical artifact, then
 * persists versioned artifacts with full provenance and delta tracking.
 *
 * Each artifact carries:
 *  - The merged plan payload
 *  - Source metadata (which deterministic version, which AI model)
 *  - Longitudinal context (cross-test patterns, prior plan deltas)
 *  - Stable linkage IDs (attemptId, aiArtifactId)
 */

import { db } from '../firebase/config';
import {
  doc, getDoc, updateDoc, setDoc,
  collection, addDoc, getDocs,
  query, orderBy, limit, serverTimestamp,
} from 'firebase/firestore';
import { generateStudyPlan as generateDeterministic } from './studyPlanGenerator';
import { generateStudyPlan as generateAIPlan } from './studyPlanService';
import {
  buildLongitudinalEvidence,
  computePlanDelta,
  mergeHybridPlan,
  MERGE_VERSION,
} from './studyPlanMerger';

export { buildLongitudinalEvidence, computePlanDelta, mergeHybridPlan, MERGE_VERSION };

/**
 * Full hybrid plan generation pipeline.
 *
 * 1. Build longitudinal evidence from all test history
 * 2. Run deterministic generator
 * 3. Attempt AI generation (non-blocking fallback)
 * 4. Merge into canonical artifact
 * 5. Compute delta from previous plan
 * 6. Persist versioned artifact
 */
export const generateAndPersistHybridPlan = async ({
  userId,
  diagnostic,
  userProfile = {},
  completedLessons = {},
  practiceProgress = {},
  practiceTestResults = {},
  previousPlan = null,
  attemptId = null,
  aiArtifactId = null,
}) => {
  const longitudinal = buildLongitudinalEvidence(practiceTestResults);

  const deterministicPlan = generateDeterministic(
    diagnostic,
    userProfile,
    completedLessons,
    practiceProgress,
    previousPlan,
  );

  let aiPlan = null;
  try {
    const longitudinalForAI = {
      totalTests: longitudinal.totalTests,
      totalAttempts: longitudinal.totalAttempts,
      persistentWeaknesses: longitudinal.persistentWeaknesses.slice(0, 8),
      scoreTrajectory: longitudinal.scoreTrajectory.slice(-6),
    };
    const aiResult = await generateAIPlan(
      diagnostic,
      userProfile,
      previousPlan ? [previousPlan] : [],
      longitudinalForAI,
    );
    aiPlan = aiResult;
  } catch (err) {
    console.warn('[hybridStudyPlanService] AI plan generation failed, using deterministic only:', err.message);
  }

  const mergedPlan = mergeHybridPlan(deterministicPlan, aiPlan);
  const delta = computePlanDelta(previousPlan, mergedPlan);

  const artifact = {
    plan: mergedPlan,
    provenance: {
      mergeVersion: MERGE_VERSION,
      sourceDeterministic: { generatedAt: deterministicPlan.generatedAt },
      sourceAI: aiPlan
        ? { generatedAt: aiPlan.generatedAt, model: aiPlan.model }
        : null,
      hasBothSources: !!aiPlan,
    },
    longitudinal: {
      totalTests: longitudinal.totalTests,
      totalAttempts: longitudinal.totalAttempts,
      persistentWeaknesses: longitudinal.persistentWeaknesses.slice(0, 10),
      scoreTrajectory: longitudinal.scoreTrajectory.slice(-10),
    },
    delta,
    linkage: {
      attemptId: attemptId || null,
      aiArtifactId: aiArtifactId || null,
      sourceTestId: diagnostic.testId || null,
    },
    version: 1,
    status: 'active',
    generatedAt: new Date().toISOString(),
    createdAt: serverTimestamp(),
  };

  const artifactId = await persistHybridArtifact(userId, artifact);

  return { artifactId, artifact };
};

/**
 * Persist a hybrid study-plan artifact and update the progress-doc pointer.
 */
async function persistHybridArtifact(userId, artifact) {
  if (!userId || !artifact) return null;

  const progressRef = doc(db, 'progress', userId);
  const colRef = collection(db, 'progress', userId, 'studyPlanArtifacts');
  const artifactRef = await addDoc(colRef, artifact);

  const preview = {
    headline: artifact.plan?.summary?.headline || 'Study Plan',
    weeksCount: artifact.plan?.weeks?.length || 0,
    generatedAt: artifact.generatedAt,
    totalActivities: (artifact.plan?.weeks || []).reduce(
      (s, w) => s + (w.activities?.length || 0), 0
    ),
    version: artifact.version,
    hasBothSources: artifact.provenance?.hasBothSources || false,
  };

  const progressSnap = await getDoc(progressRef);
  const updatePayload = {
    currentStudyPlanArtifactId: artifactRef.id,
    studyPlanPreview: preview,
    studyPlan: artifact.plan,
    studyPlanHistory: buildHistoryEntry(artifactRef.id, artifact),
    lastUpdated: serverTimestamp(),
  };

  if (progressSnap.exists()) {
    await updateDoc(progressRef, updatePayload);
  } else {
    await setDoc(progressRef, { userId, ...updatePayload }, { merge: true });
  }

  return artifactRef.id;
}

function buildHistoryEntry(artifactId, artifact) {
  return {
    [`entries.${artifactId}`]: {
      id: artifactId,
      generatedAt: artifact.generatedAt,
      sourceTestId: artifact.linkage?.sourceTestId || null,
      headline: artifact.plan?.summary?.headline || 'Study Plan',
      currentScore: artifact.plan?.currentScore || null,
      deltaChanges: artifact.delta?.changes?.length || 0,
    },
    latestId: artifactId,
  };
}

/**
 * Fetch the N most recent study-plan artifacts for a user.
 */
export const getStudyPlanHistory = async (userId, maxResults = 10) => {
  if (!userId) return [];

  const colRef = collection(db, 'progress', userId, 'studyPlanArtifacts');
  const q = query(colRef, orderBy('createdAt', 'desc'), limit(maxResults));
  const snap = await getDocs(q);

  return snap.docs.map(d => ({
    id: d.id,
    generatedAt: d.data().generatedAt,
    headline: d.data().plan?.summary?.headline || 'Study Plan',
    sourceTestId: d.data().linkage?.sourceTestId || null,
    currentScore: d.data().plan?.currentScore || null,
    hasBothSources: d.data().provenance?.hasBothSources || false,
    deltaChanges: d.data().delta?.changes?.length || 0,
    status: d.data().status,
  }));
};

/**
 * Fetch a specific study-plan artifact by ID.
 */
export const getStudyPlanArtifact = async (userId, artifactId) => {
  if (!userId || !artifactId) return null;

  const artifactRef = doc(db, 'progress', userId, 'studyPlanArtifacts', artifactId);
  const snap = await getDoc(artifactRef);
  if (!snap.exists()) return null;

  return { id: snap.id, ...snap.data() };
};
