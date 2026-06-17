/**
 * Pure helpers for navigating within a practice/drill session (the
 * `practiceState` owned by App.jsx, rendered by AssignedPracticeShell).
 */

/**
 * Given the recorded answers map and the question being navigated TO, return
 * the practiceState fields that RESTORE that question's prior answer — the
 * student's selected choice and whether feedback/explanation should show.
 *
 * Why: when a student clicks back to an already-answered question, the session
 * still holds the answer in `answers[question.id]`, but the view reads
 * `selectedAnswer` + `showFeedback` to paint the choice and the explanation.
 * Navigation used to clear both, so the answer looked lost ("I go back and my
 * old answer is no longer there"). Restoring them shows the choice + feedback
 * and — because answer selection is locked while `showFeedback` is true — keeps
 * the answered question read-only.
 *
 * For an unanswered target it returns the blank state (null / false), matching
 * forward navigation to a fresh question.
 *
 * @param {Object<string, {selected: string, correct: boolean}>|null|undefined} answers
 * @param {{id: string|number}|null|undefined} question - the question being navigated to
 * @returns {{selectedAnswer: string|null, showFeedback: boolean}}
 */
export function restoreAnswerStateForQuestion(answers, question) {
  const recorded = question && answers ? answers[question.id] : null;
  return {
    selectedAnswer: recorded ? recorded.selected : null,
    showFeedback: !!recorded,
  };
}

/**
 * Extracts the lean, resumable slice of a practice session from `practiceState`
 * so it can be persisted (Firestore) and rebuilt later. Stores question IDs (not
 * the resolved question objects) — resume re-resolves them from the bank.
 *
 * @param {object} ps - practiceState
 * @param {string|null} [section] - the active section tag to restore on resume
 * @returns {object|null} resumable session, or null when there is nothing to save
 */
export function buildResumableDrill(ps, section = null) {
  if (!ps || !Array.isArray(ps.shuffledQuestions) || ps.shuffledQuestions.length === 0) {
    return null;
  }
  return {
    questionIds: ps.shuffledQuestions.map(q => q.id),
    currentQuestionIndex: ps.currentQuestionIndex || 0,
    answers: ps.answers || {},
    rounds: Array.isArray(ps.rounds) ? ps.rounds : null,
    currentRoundIndex: ps.currentRoundIndex || 0,
    assignmentMeta: ps.assignmentMeta || null,
    section: section || null,
  };
}
