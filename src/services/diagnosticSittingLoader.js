/**
 * diagnosticSittingLoader — rebuild a diagnostic sitting from its per-attempt
 * snapshot (progress/{uid}/attempts/{attemptId}, written by
 * finishMiniDiagnostic → saveDiagnosticSittingSnapshot) into the
 * { test, answers, diagnosticData } triple the diagnostic engine and the
 * review runner consume.
 *
 * Counterpart of diagnosticReportLoader for scored practice tests, minus the
 * live-test backfill: the diagnostic snapshot is complete by construction
 * (stimulus fields included) and there is no catalog test to fall back to.
 *
 * Use it when Home's "View your diagnosis" opens (App lazy-loads this module).
 */
import { loadAttemptSnapshot } from './practiceTestService';
import { sectionModuleLabel } from './selectors/moduleLabel';

/** Matches finishMiniDiagnostic's MINI_DIAGNOSTIC_TEST_ID (not imported: that
 *  module drags the whole plan-generation stack into this chunk). */
export const DIAGNOSTIC_SITTING_TEST_ID = 'mini-diagnostic-v1';

/**
 * Turn a snapshot doc's flat questionsSnapshot back into a multi-module test.
 * Pure; exported for tests.
 *
 * @param {object} snapshotDoc - loadAttemptSnapshot result
 * @returns {object|null} test { id, title, isMiniDiagnostic, diagnosticVariant, modules[] }
 */
export function rebuildSittingTest(snapshotDoc) {
  const snaps = snapshotDoc?.questionsSnapshot;
  if (!Array.isArray(snaps) || snaps.length === 0) return null;
  const moduleMap = new Map();
  snaps.forEach((snap, i) => {
    const modIdx = Number.isFinite(snap.moduleIndex) ? snap.moduleIndex : 0;
    if (!moduleMap.has(modIdx)) {
      moduleMap.set(modIdx, {
        section: snap.section ?? null,
        title: sectionModuleLabel(snap.section ?? null, modIdx),
        questions: [],
      });
    }
    const mod = moduleMap.get(modIdx);
    const qIdx = Number.isFinite(snap.questionIndex) ? snap.questionIndex : mod.questions.length;
    mod.questions[qIdx] = {
      id: snap.id ?? `q-${i}`,
      type: snap.type ?? null,
      question: snap.stem ?? null,
      stem: snap.stem ?? null,
      choices: snap.choices ?? null,
      correctAnswer: snap.correctAnswer ?? null,
      explanation: snap.explanation ?? null,
      difficulty: snap.difficulty ?? null,
      band: snap.band ?? null,
      skills: Array.isArray(snap.skills) ? snap.skills : [],
      domain: snap.domain ?? null,
      passage: snap.passage ?? null,
      passages: snap.passages ?? null,
      studentNotes: snap.studentNotes ?? null,
      questionContinued: snap.questionContinued ?? null,
      diagram: snap.diagram ?? null,
      questionTable: snap.questionTable ?? null,
      questionFormula: snap.questionFormula ?? null,
    };
  });
  const modules = Array.from(moduleMap.keys()).sort((a, b) => a - b).map((k) => {
    const m = moduleMap.get(k);
    // Sparse holes (a missing questionIndex) would crash the engine's forEach.
    m.questions = m.questions.filter(Boolean);
    return m;
  });
  return {
    id: snapshotDoc.testId || DIAGNOSTIC_SITTING_TEST_ID,
    title: 'Your diagnostic',
    isMiniDiagnostic: true,
    diagnosticVariant: snapshotDoc.diagnosticVariant || 'full',
    modules,
  };
}

/**
 * Load + rebuild one diagnostic sitting.
 *
 * @param {object} args
 * @param {string} args.userId
 * @param {string} args.attemptId - miniDiagnostic.attemptId
 * @returns {Promise<{test:object, answers:object, diagnosticData:object|null, scoreBand:object|null, routes:object|null, attemptId:string, completedAt:string|null}|null>}
 *   null when no snapshot exists (records from before 2026-08-24) or it isn't a diagnostic
 */
export async function loadDiagnosticSitting({ userId, attemptId } = {}) {
  if (!userId || !attemptId) return null;
  const snap = await loadAttemptSnapshot(userId, attemptId);
  if (!snap || snap.isDiagnostic !== true) return null;
  const test = rebuildSittingTest(snap);
  if (!test) return null;
  return {
    test,
    answers: { ...(snap.answers || {}) },
    diagnosticData: snap.diagnosticData || null,
    scoreBand: snap.scoreBand || null,
    routes: snap.routes || null,
    attemptId,
    completedAt: snap.completedAt || null,
  };
}
