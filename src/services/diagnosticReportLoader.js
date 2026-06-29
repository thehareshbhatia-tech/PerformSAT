import { runDiagnostic } from './diagnosticEngine';
import { getReadyAiDiagnostic, loadAttemptSnapshot } from './practiceTestService';
import { sectionModuleLabel } from './selectors/moduleLabel';
export { pickMostRecentTest } from './selectors/recentTest';

/**
 * loadDiagnosticReportData — gather everything <DiagnosticReport> /
 * <TestResults> need to mount: a normalized `test` object, reconstructed
 * `answers` map, the precomputed `diagnosticReport`, and the AI narrative
 * state.
 *
 * Lifted from App.jsx's PracticeTestList `onViewResults` callback (was
 * inlined ~50 lines). Extraction lets the dashboard's "View Full Diagnosis"
 * button reach the same diagnostic surface without duplicating snapshot-
 * loading logic (closes CEO C1 from /autoplan).
 *
 * Snapshot precedence:
 *   1. Per-attempt Firestore snapshot (subcollection write at attempt time).
 *      Contains the exact questions the student saw + their answers.
 *   2. Legacy fallback (pre-snapshot attempts): synthesize an answer map
 *      from diagnosticData.questionDetails. Coarser — every wrong answer
 *      becomes a sentinel '__wrong__' string — but enough for the review
 *      UI to color-code correctness.
 *
 * Async because of the snapshot fetch + AI narrative fetch. Returns a
 * shape compatible with viewingResultsData / DiagnosticReport props.
 *
 * @param {object} args
 * @param {string} args.userId            current user's uid (for Firestore reads)
 * @param {object} args.test              the live test object from PracticeTestList
 * @param {object} args.lastAttempt       attempt entry from practiceTestResults[testId].attempts
 * @param {object} [args.practiceTestResults]
 * @param {object} [args.skillProgress]
 * @param {object} [args.user]            user profile for runDiagnostic context
 * @returns {Promise<{
 *   test: object,
 *   liveTest: object,
 *   answers: object,
 *   diagnosticData: object|null,
 *   diagnosticReport: object,
 *   aiDiagnosticState: object,
 *   attemptId: string|null,
 *   snapshotMissing: boolean,
 * }>}
 */
export async function loadDiagnosticReportData({
  userId,
  test,
  lastAttempt,
  practiceTestResults = {},
  skillProgress = {},
  user = {},
} = {}) {
  if (!test || !lastAttempt) {
    throw new Error('loadDiagnosticReportData requires test and lastAttempt');
  }

  // ── 1. Try to load the per-attempt snapshot ──
  let snapshotDoc = null;
  if (userId && lastAttempt.attemptId) {
    try {
      snapshotDoc = await loadAttemptSnapshot(userId, lastAttempt.attemptId);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('[performsat:diagnosticReportLoader] snapshot load failed:', err && err.message);
    }
  }

  // ── 2. Build a reviewTest shaped like the live test ──
  let reviewTest = test;
  let reconstructedAnswers = {};
  const snapshotMissing = !snapshotDoc;

  if (snapshotDoc?.questionsSnapshot?.length) {
    const moduleMap = new Map();
    snapshotDoc.questionsSnapshot.forEach(snap => {
      const modIdx = snap.moduleIndex ?? 0;
      if (!moduleMap.has(modIdx)) {
        const liveMod = test.modules?.[modIdx];
        // Keep the section axis ('reading-writing' | 'math') — without it
        // the reconstructed test reads as math-only downstream.
        const section = snap.section ?? liveMod?.section ?? null;
        moduleMap.set(modIdx, {
          title: liveMod?.title || sectionModuleLabel(section, modIdx),
          section,
          questions: [],
        });
      }
      moduleMap.get(modIdx).questions.push({
        id: snap.id,
        type: snap.type,
        question: snap.stem,
        stem: snap.stem,
        choices: snap.choices,
        correctAnswer: snap.correctAnswer,
        explanation: snap.explanation,
        difficulty: snap.difficulty,
        band: snap.band,
        skills: snap.skills || [],
      });
    });
    reviewTest = {
      ...test,
      modules: Array.from(moduleMap.keys())
        .sort((a, b) => a - b)
        .map(k => moduleMap.get(k)),
    };
    reconstructedAnswers = { ...(snapshotDoc.answers || {}) };
  } else {
    // Legacy fallback: synthesize an answer map from diagnosticData.questionDetails.
    const qDetails = lastAttempt.diagnosticData?.questionDetails || {};
    Object.entries(qDetails).forEach(([key, detail]) => {
      const [modIdx, qIdx] = key.split('-').map(Number);
      const question = test.modules?.[modIdx]?.questions?.[qIdx];
      if (!question) return;
      reconstructedAnswers[key] = detail.isCorrect ? question.correctAnswer : '__wrong__';
    });
  }

  // ── 3. Diagnostic report — use stored, regenerate only as fallback ──
  const diagReport = lastAttempt.diagnosticReport || runDiagnostic(
    reviewTest,
    reconstructedAnswers,
    lastAttempt.diagnosticData,
    skillProgress,
    {
      targetScore: user?.targetScore,
      currentScore: user?.currentScore,
      testDate: user?.testDate,
    },
    practiceTestResults,
  );

  // ── 4. AI narrative state ──
  let aiState = { status: 'idle', narrative: null, error: null };
  if (userId) {
    try {
      const savedAi = await getReadyAiDiagnostic(userId, test.id, lastAttempt.timestamp);
      if (savedAi?.narrative) {
        aiState = { status: 'ready', narrative: savedAi.narrative, error: null };
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('[performsat:diagnosticReportLoader] AI narrative load failed:', err && err.message);
    }
  }

  return {
    test: reviewTest,
    liveTest: test,
    answers: reconstructedAnswers,
    diagnosticData: lastAttempt.diagnosticData,
    diagnosticReport: diagReport,
    aiDiagnosticState: aiState,
    attemptId: lastAttempt.attemptId || null,
    snapshotMissing,
  };
}

