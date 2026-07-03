/**
 * Pure read helpers for the post-drill completion summary
 * (AssignedPracticeShell's isComplete screen).
 */

/**
 * extractMissedIds — the ids of questions the student answered incorrectly.
 *
 * Given the drill's question list and the session's answers map
 * (`practiceState.answers`, keyed by question id), returns the ids of the
 * questions that were ANSWERED and WRONG. Unanswered questions are excluded
 * (they have no answer entry) and correct answers are excluded. Order follows
 * the `questions` array so a re-drill preserves the original sequence.
 *
 * Use it to build the "Re-drill your misses" action on the drill summary —
 * feed the returned ids straight into the bank launcher.
 *
 * @param {Array<{id: (string|number)}>} questions — the drill's questions, in order.
 * @param {Object<string, {correct?: boolean}>} answers — session answers keyed by question id.
 * @returns {Array<(string|number)>} ids of answered-wrong questions (may be empty).
 */
export function extractMissedIds(questions, answers) {
  if (!Array.isArray(questions) || !answers || typeof answers !== 'object') return [];
  const missed = [];
  for (const q of questions) {
    if (!q || q.id == null) continue;
    const ans = answers[q.id];
    // An entry must exist (question was answered) and be marked not-correct.
    if (ans && !ans.correct) missed.push(q.id);
  }
  return missed;
}
