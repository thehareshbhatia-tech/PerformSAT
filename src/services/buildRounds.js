/**
 * buildRounds.js — split a question-id sequence into rounds for the
 * AssignedPracticeShell drill flow. Day-2 of the Acely-polish batch.
 *
 * Acely's pattern: a 24-question focus-area drill renders as 3 rounds × 8.
 * Each round is its own micro-session — natural pause point, visible
 * progress circles, "Continue to Round 2 →" between them.
 *
 * Pure function. Stays in services/ so it can be exercised without
 * mounting the React shell.
 */

const DEFAULT_ROUND_SIZE = 8;

/**
 * Split an ordered list of question ids into round chunks.
 *
 * @param {string[]} questionIds
 * @param {number} [roundSize=8]
 * @returns {Array<{
 *   index: number,
 *   questionIds: string[],
 *   label: string,
 *   startedAt: string|null,
 *   completedAt: string|null,
 * }>}
 */
export function buildRounds(questionIds, roundSize = DEFAULT_ROUND_SIZE) {
  if (!Array.isArray(questionIds) || questionIds.length === 0) return [];
  const size = (typeof roundSize === 'number' && roundSize > 0) ? Math.floor(roundSize) : DEFAULT_ROUND_SIZE;

  const rounds = [];
  for (let start = 0, idx = 0; start < questionIds.length; start += size, idx += 1) {
    const slice = questionIds.slice(start, start + size);
    rounds.push({
      index: idx,
      questionIds: slice,
      label: `Round ${idx + 1}`,
      startedAt: null,
      completedAt: null,
    });
  }
  return rounds;
}

/**
 * Find the round index that owns a given question id. -1 when not found.
 * Used by handleNextQuestion to determine round-boundary advances.
 *
 * @param {Array<{questionIds: string[]}>} rounds
 * @param {string} questionId
 * @returns {number}
 */
export function findRoundIndexForQuestion(rounds, questionId) {
  if (!Array.isArray(rounds) || !questionId) return -1;
  for (const round of rounds) {
    if (round.questionIds.includes(questionId)) return round.index;
  }
  return -1;
}

/**
 * Compute round-level progress given the current answers map. Each round
 * gets { answered, correct, total, isComplete }. Used by the focus-area
 * card's progress-circle rendering and the post-round summary screen.
 *
 * @param {Array<{index, questionIds, completedAt}>} rounds
 * @param {Object<string, {correct: boolean}>} answers
 * @returns {Array<{index, total, answered, correct, isComplete, isInProgress}>}
 */
export function computeRoundProgress(rounds, answers = {}) {
  if (!Array.isArray(rounds)) return [];
  return rounds.map(round => {
    const total = round.questionIds.length;
    let answered = 0;
    let correct = 0;
    for (const id of round.questionIds) {
      const ans = answers[id];
      if (ans) {
        answered += 1;
        if (ans.correct === true) correct += 1;
      }
    }
    const isComplete = answered === total && total > 0;
    return {
      index: round.index,
      total,
      answered,
      correct,
      isComplete,
      isInProgress: answered > 0 && !isComplete,
    };
  });
}

/**
 * Given current `practiceState`, return whether the just-answered question
 * was the last in its round. Used by handleNextQuestion to fire the
 * round-complete toast + pause before advancing.
 *
 * @param {Array<{questionIds: string[]}>} rounds
 * @param {string} questionId  the id the student just answered
 * @param {Object<string, any>} answers  including the just-answered entry
 * @returns {{ isLastInRound: boolean, roundIndex: number, isLastRound: boolean }}
 */
export function classifyRoundBoundary(rounds, questionId, answers = {}) {
  const roundIndex = findRoundIndexForQuestion(rounds, questionId);
  if (roundIndex < 0) {
    return { isLastInRound: false, roundIndex: -1, isLastRound: false };
  }
  const round = rounds[roundIndex];
  const allAnswered = round.questionIds.every(id => !!answers[id]);
  return {
    isLastInRound: allAnswered,
    roundIndex,
    isLastRound: roundIndex === rounds.length - 1,
  };
}
