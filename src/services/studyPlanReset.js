/**
 * studyPlanReset — pure decision helpers for keeping the study plan coherent
 * after a practice-test reset.
 *
 * Study-plan artifacts can't be deleted client-side (firestore.rules block
 * subcollection deletes), so when a test is reset we cannot remove the artifact
 * it generated. Instead we RE-POINT the current-plan pointer to the newest
 * SURVIVING artifact and let the hydration listener skip any orphan it still
 * finds via getLatestStudyPlanArtifact. This module holds the (unit-testable)
 * selection logic; the Firestore reads/writes live in useProgress.
 */

/**
 * Pick the newest study-plan artifact that still belongs to existing data.
 *
 * An artifact survives a reset when EITHER it has no source test — a
 * mini-diagnostic plan carries sourceTestId == null — OR its source test is
 * still present in practiceTestResults. `history` is newest-first (the order
 * getStudyPlanHistory returns), so the first match is the newest survivor.
 *
 * @param {Array<{id: string, sourceTestId: string|null}>} history - artifacts, newest first
 * @param {Object} remainingTestResults - practiceTestResults map AFTER the reset
 * @returns {string|null} the surviving artifact id, or null if none survive
 */
export const pickSurvivingArtifactId = (history = [], remainingTestResults = {}) => {
  const results = remainingTestResults || {};
  const survivor = (history || []).find(
    (a) =>
      a &&
      a.id &&
      (a.sourceTestId == null ||
        Object.prototype.hasOwnProperty.call(results, a.sourceTestId)),
  );
  return survivor ? survivor.id : null;
};

/**
 * True when a hydrated artifact is orphaned: it was generated from a test that
 * no longer exists in practiceTestResults (e.g. the test was reset). A
 * mini-diagnostic artifact (sourceTestId == null) is never an orphan.
 *
 * Used as a last-resort guard in the latest-query hydration fallback so a
 * deleted test's undeletable artifact can't re-hydrate as the current plan.
 *
 * @param {Object|null} artifact - a study-plan artifact ({ linkage: { sourceTestId } })
 * @param {Object} practiceTestResults - current practiceTestResults map
 * @returns {boolean}
 */
export const isOrphanArtifact = (artifact, practiceTestResults = {}) => {
  const sourceTestId = artifact?.linkage?.sourceTestId;
  if (!sourceTestId) return false;
  return !Object.prototype.hasOwnProperty.call(practiceTestResults || {}, sourceTestId);
};
