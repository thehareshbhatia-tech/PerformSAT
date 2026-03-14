import { db } from '../firebase/config';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp, arrayUnion, collection, addDoc, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

/**
 * Generate a short unique attempt identifier.
 * Format: timestamp-based hex + random suffix for collision safety.
 */
export const generateAttemptId = () => {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 8);
  return `${ts}-${rand}`;
};

/**
 * Records a practice test result to Firestore
 * @param {string} userId - User ID
 * @param {string} testId - Test ID (e.g., "practice-test-1")
 * @param {string} testTitle - Test title (e.g., "Practice Test 1")
 * @param {Object} results - Test results object
 * @param {number} results.rawScore - Number of correct answers
 * @param {number} results.totalQuestions - Total number of questions
 * @param {number} results.scaledScore - SAT scaled score (200-800)
 * @param {boolean} results.timedMode - Whether test was taken in timed mode
 * @param {Array} results.moduleScores - Array of module score objects
 * @returns {Promise<void>}
 */
export const recordPracticeTestResult = async (userId, testId, testTitle, results) => {
  console.log('[practiceTestService] recordPracticeTestResult called:', { userId, testId, testTitle });

  if (!userId) {
    console.error('[practiceTestService] No userId provided!');
    throw new Error('User ID is required to save practice test results');
  }

  try {
    const progressRef = doc(db, 'progress', userId);
    console.log('[practiceTestService] Getting progress document for user:', userId);
    const progressSnap = await getDoc(progressRef);
    console.log('[practiceTestService] Progress document exists:', progressSnap.exists());

    const attemptData = {
      attemptId: results.attemptId || generateAttemptId(),
      completedAt: new Date().toISOString(),
      rawScore: results.rawScore,
      totalQuestions: results.totalQuestions,
      scaledScore: results.scaledScore,
      timedMode: results.timedMode,
      moduleScores: results.moduleScores,
      diagnosticData: results.diagnosticData || null,
      scoringVersion: results.scoringVersion || null,
      thetaEstimate: results.thetaEstimate ?? null,
      standardError: results.standardError ?? null,
      routeTaken: results.routeTaken || null,
      aiArtifactId: results.aiArtifactId || null,
      studyPlanArtifactId: results.studyPlanArtifactId || null,
    };

    if (!progressSnap.exists()) {
      console.log('[practiceTestService] Creating new progress document...');
      await setDoc(progressRef, {
        userId,
        [`practiceTestResults.${testId}`]: {
          testId,
          testTitle,
          attempts: [attemptData],
          bestScaledScore: results.scaledScore,
          bestRawScore: results.rawScore,
          totalAttempts: 1,
          lastAttemptAt: serverTimestamp()
        },
        lastUpdated: serverTimestamp()
      }, { merge: true });
      console.log('[practiceTestService] New document created successfully!');
    } else {
      const currentData = progressSnap.data();
      const existingTest = currentData.practiceTestResults?.[testId];

      if (existingTest) {
        // Update existing test results
        console.log('[practiceTestService] Updating existing test results...');
        await updateDoc(progressRef, {
          [`practiceTestResults.${testId}.attempts`]: arrayUnion(attemptData),
          [`practiceTestResults.${testId}.bestScaledScore`]: Math.max(existingTest.bestScaledScore, results.scaledScore),
          [`practiceTestResults.${testId}.bestRawScore`]: Math.max(existingTest.bestRawScore, results.rawScore),
          [`practiceTestResults.${testId}.totalAttempts`]: existingTest.totalAttempts + 1,
          [`practiceTestResults.${testId}.lastAttemptAt`]: serverTimestamp(),
          lastUpdated: serverTimestamp()
        });
        console.log('[practiceTestService] Existing test updated successfully!');
      } else {
        // Add new test to results
        console.log('[practiceTestService] Adding new test to existing document...');
        await updateDoc(progressRef, {
          [`practiceTestResults.${testId}`]: {
            testId,
            testTitle,
            attempts: [attemptData],
            bestScaledScore: results.scaledScore,
            bestRawScore: results.rawScore,
            totalAttempts: 1,
            lastAttemptAt: serverTimestamp()
          },
          lastUpdated: serverTimestamp()
        });
        console.log('[practiceTestService] New test added successfully!');
      }
    }
    console.log('[practiceTestService] Save complete!');
  } catch (error) {
    console.error('[practiceTestService] Error recording practice test result:', error);
    throw error;
  }
};

/**
 * Gets all practice test results for a user
 * @param {Object} practiceTestResults - Practice test results from user data
 * @returns {Array} Array of test result summaries sorted by last attempt date
 */
export const getPracticeTestSummaries = (practiceTestResults) => {
  if (!practiceTestResults) return [];

  return Object.values(practiceTestResults)
    .map(test => ({
      testId: test.testId,
      testTitle: test.testTitle,
      bestScaledScore: test.bestScaledScore,
      bestRawScore: test.bestRawScore,
      totalAttempts: test.totalAttempts,
      lastAttemptAt: test.lastAttemptAt
    }))
    .sort((a, b) => {
      // Sort by last attempt date, most recent first
      const dateA = a.lastAttemptAt?.toDate?.() || new Date(0);
      const dateB = b.lastAttemptAt?.toDate?.() || new Date(0);
      return dateB - dateA;
    });
};

/**
 * Gets the best score for a specific test
 * @param {Object} practiceTestResults - Practice test results from user data
 * @param {string} testId - Test ID
 * @returns {number|null} Best scaled score or null if not taken
 */
export const getPracticeTestBestScore = (practiceTestResults, testId) => {
  if (!practiceTestResults || !practiceTestResults[testId]) return null;
  return practiceTestResults[testId].bestScaledScore;
};

/**
 * Gets the number of attempts for a specific test
 * @param {Object} practiceTestResults - Practice test results from user data
 * @param {string} testId - Test ID
 * @returns {number} Number of attempts or 0
 */
export const getPracticeTestAttempts = (practiceTestResults, testId) => {
  if (!practiceTestResults || !practiceTestResults[testId]) return 0;
  return practiceTestResults[testId].totalAttempts;
};

/**
 * Saves in-progress test state to Firestore
 * This allows users to resume a test if they leave mid-test
 * @param {string} userId - User ID
 * @param {string} testId - Test ID
 * @param {Object} progressData - Current test progress
 * @param {number} progressData.currentModule - Current module index
 * @param {number} progressData.currentQuestion - Current question index
 * @param {Object} progressData.answers - Answers object { "modIdx-qIdx": answer }
 * @param {Array} progressData.markedForReview - Array of question indices marked for review
 * @param {boolean} progressData.isTimed - Whether test is in timed mode
 * @param {number} progressData.timeRemaining - Remaining time in seconds (for timed mode)
 * @returns {Promise<void>}
 */
export const saveTestProgress = async (userId, testId, progressData) => {
  if (!userId || !testId) {
    console.error('[practiceTestService] saveTestProgress: Missing userId or testId');
    return;
  }

  try {
    const progressRef = doc(db, 'progress', userId);
    const progressSnap = await getDoc(progressRef);

    const inProgressData = {
      testId,
      currentModule: progressData.currentModule,
      currentQuestion: progressData.currentQuestion,
      answers: progressData.answers,
      markedForReview: progressData.markedForReview || [],
      eliminatedChoices: progressData.eliminatedChoices || {},
      isTimed: progressData.isTimed,
      timeRemaining: progressData.timeRemaining,
      questionTelemetry: progressData.questionTelemetry || {},
      lastSavedAt: new Date().toISOString()
    };

    if (!progressSnap.exists()) {
      await setDoc(progressRef, {
        userId,
        [`inProgressTests.${testId}`]: inProgressData,
        lastUpdated: serverTimestamp()
      }, { merge: true });
    } else {
      // Update existing document
      await updateDoc(progressRef, {
        [`inProgressTests.${testId}`]: inProgressData,
        lastUpdated: serverTimestamp()
      });
    }
    console.log('[practiceTestService] Test progress saved for:', testId);
  } catch (error) {
    console.error('[practiceTestService] Error saving test progress:', error);
  }
};

/**
 * Clears in-progress test state (called when test is completed or abandoned)
 * @param {string} userId - User ID
 * @param {string} testId - Test ID
 * @returns {Promise<void>}
 */
export const clearTestProgress = async (userId, testId) => {
  if (!userId || !testId) return;

  try {
    const progressRef = doc(db, 'progress', userId);
    const progressSnap = await getDoc(progressRef);

    if (progressSnap.exists()) {
      const data = progressSnap.data();
      if (data.inProgressTests && data.inProgressTests[testId]) {
        // Remove the in-progress test entry
        const { [testId]: _, ...remainingTests } = data.inProgressTests;
        await updateDoc(progressRef, {
          inProgressTests: remainingTests,
          lastUpdated: serverTimestamp()
        });
        console.log('[practiceTestService] Cleared in-progress test:', testId);
      }
    }
  } catch (error) {
    console.error('[practiceTestService] Error clearing test progress:', error);
  }
};

/**
 * Gets in-progress test data from the progress object
 * @param {Object} inProgressTests - In-progress tests from user progress data
 * @param {string} testId - Test ID to check
 * @returns {Object|null} In-progress data or null if not found
 */
export const getInProgressTest = (inProgressTests, testId) => {
  if (!inProgressTests || !inProgressTests[testId]) return null;
  return inProgressTests[testId];
};

/**
 * Gets all in-progress tests for display in the test list
 * @param {Object} inProgressTests - In-progress tests from user progress data
 * @returns {Array} Array of in-progress test summaries
 */
export const getInProgressTestSummaries = (inProgressTests) => {
  if (!inProgressTests) return [];

  return Object.values(inProgressTests).map(test => ({
    testId: test.testId,
    currentModule: test.currentModule,
    currentQuestion: test.currentQuestion,
    answeredCount: Object.keys(test.answers || {}).length,
    lastSavedAt: test.lastSavedAt,
    isTimed: test.isTimed
  }));
};

/**
 * Back-link artifact IDs onto a stored attempt record.
 * Called after AI diagnostic or study plan artifacts are created,
 * so the attempt carries pointers to its associated artifacts.
 */
export const linkArtifactToAttempt = async (userId, testId, attemptId, links = {}) => {
  if (!userId || !testId || !attemptId) return;

  try {
    const progressRef = doc(db, 'progress', userId);
    const snap = await getDoc(progressRef);
    if (!snap.exists()) return;

    const data = snap.data();
    const testRecord = data.practiceTestResults?.[testId];
    if (!testRecord?.attempts) return;

    const attemptIdx = testRecord.attempts.findIndex(a => a.attemptId === attemptId);
    if (attemptIdx === -1) return;

    const updates = {};
    if (links.aiArtifactId) {
      updates[`practiceTestResults.${testId}.attempts`] = testRecord.attempts.map((a, i) =>
        i === attemptIdx ? { ...a, aiArtifactId: links.aiArtifactId } : a
      );
    }
    if (links.studyPlanArtifactId) {
      const current = updates[`practiceTestResults.${testId}.attempts`] || testRecord.attempts;
      updates[`practiceTestResults.${testId}.attempts`] = current.map((a, i) =>
        i === attemptIdx ? { ...a, studyPlanArtifactId: links.studyPlanArtifactId } : a
      );
    }

    if (Object.keys(updates).length > 0) {
      await updateDoc(progressRef, updates);
    }
  } catch (err) {
    console.warn('[practiceTestService] linkArtifactToAttempt error (non-blocking):', err.message);
  }
};

// ===== AI Diagnostic Artifact Storage =====

/**
 * AI diagnostic status lifecycle:
 *   'generating' -> 'ready' | 'failed'
 *
 * Stored per-attempt in a subcollection so each test run carries its own
 * AI narrative artifact that the results page can hydrate from.
 */

export const AI_DIAGNOSTIC_STATUS = {
  GENERATING: 'generating',
  READY: 'ready',
  FAILED: 'failed',
};

/**
 * Creates a placeholder artifact when generation starts, returns its ID.
 */
export const createAiDiagnosticArtifact = async (userId, testId, attemptTimestamp, attemptId = null) => {
  if (!userId || !testId) return null;

  const colRef = collection(db, 'progress', userId, 'aiDiagnostics');
  const data = {
    testId,
    attemptTimestamp,
    status: AI_DIAGNOSTIC_STATUS.GENERATING,
    createdAt: serverTimestamp(),
  };
  if (attemptId) data.attemptId = attemptId;

  const artifactRef = await addDoc(colRef, data);
  return artifactRef.id;
};

/**
 * Marks an artifact as ready with the full narrative payload.
 */
export const completeAiDiagnosticArtifact = async (userId, artifactId, narrative, meta = {}) => {
  if (!userId || !artifactId) return;

  const artifactRef = doc(db, 'progress', userId, 'aiDiagnostics', artifactId);
  const updatePayload = {
    status: AI_DIAGNOSTIC_STATUS.READY,
    narrative,
    generatedAt: meta.generatedAt || new Date().toISOString(),
    model: meta.model || 'unknown',
    completedAt: serverTimestamp(),
  };

  if (meta.promptVersion) updatePayload.promptVersion = meta.promptVersion;
  if (meta.quality) {
    updatePayload.qualityScore = meta.quality.total ?? null;
    updatePayload.qualityRepaired = meta.quality.repaired ?? false;
    updatePayload.qualityFailed = meta.quality.repairFailed ?? false;
    updatePayload.qualityOutcome = meta.quality.repairFailed ? 'fallback' : meta.quality.repaired ? 'repaired' : 'accepted';
  }

  await updateDoc(artifactRef, updatePayload);
};

/**
 * Marks an artifact as failed so the UI can show fallback + retry.
 */
export const failAiDiagnosticArtifact = async (userId, artifactId, errorMessage) => {
  if (!userId || !artifactId) return;

  const artifactRef = doc(db, 'progress', userId, 'aiDiagnostics', artifactId);
  await updateDoc(artifactRef, {
    status: AI_DIAGNOSTIC_STATUS.FAILED,
    errorMessage: errorMessage || 'Unknown error',
    failedAt: serverTimestamp(),
  });
};

/**
 * Fetches the latest AI diagnostic artifact for a specific test.
 * Returns null if nothing exists or the artifact is still generating.
 */
export const getLatestAiDiagnostic = async (userId, testId) => {
  if (!userId || !testId) return null;

  const colRef = collection(db, 'progress', userId, 'aiDiagnostics');
  const q = query(
    colRef,
    where('testId', '==', testId),
    orderBy('createdAt', 'desc'),
    limit(1),
  );

  const snap = await getDocs(q);
  if (snap.empty) return null;

  const docSnap = snap.docs[0];
  return { id: docSnap.id, ...docSnap.data() };
};

/**
 * Fetches a ready AI diagnostic artifact for a specific test attempt.
 * Filters by attemptTimestamp (when provided) and status === 'ready'.
 * Falls back to the latest ready artifact for the test if no
 * attempt-specific match is found.
 */
export const getReadyAiDiagnostic = async (userId, testId, attemptTimestamp) => {
  if (!userId || !testId) return null;

  const colRef = collection(db, 'progress', userId, 'aiDiagnostics');

  if (attemptTimestamp) {
    const attemptQ = query(
      colRef,
      where('testId', '==', testId),
      where('attemptTimestamp', '==', attemptTimestamp),
      where('status', '==', AI_DIAGNOSTIC_STATUS.READY),
      orderBy('createdAt', 'desc'),
      limit(1),
    );
    const attemptSnap = await getDocs(attemptQ);
    if (!attemptSnap.empty) {
      const d = attemptSnap.docs[0];
      return { id: d.id, ...d.data() };
    }
  }

  const fallbackQ = query(
    colRef,
    where('testId', '==', testId),
    where('status', '==', AI_DIAGNOSTIC_STATUS.READY),
    orderBy('createdAt', 'desc'),
    limit(1),
  );
  const fallbackSnap = await getDocs(fallbackQ);
  if (fallbackSnap.empty) return null;

  const d = fallbackSnap.docs[0];
  return { id: d.id, ...d.data() };
};
