import { getQuestionsBySkillIds as defaultMathDispatcher } from '../data/questions/bank';
import { getQuestionsBySkillIds as defaultRWDispatcher } from '../data/questions/rwBank';

/**
 * pickSimilarQuestion — picks one fresh question matching the same weak skill
 * as the question the student just got wrong. Used by the AssignedPracticeShell
 * "Try a similar question" feedback-panel button.
 *
 * Pure function: takes the current question and a list of ids to avoid, returns
 * a tagged-result object the caller dispatches on. Bank dispatchers are
 * dependency-injected so tests don't need to mock the bank modules.
 *
 * Section dispatch:
 *   - currentQuestion.section === 'rw' OR id starts with 'rw-' → R&W bank
 *   - otherwise                                                 → math bank
 *
 * Result shape (discriminated by `kind`):
 *   { kind: 'invalid' }                        // currentQuestion missing/non-object
 *   { kind: 'no-skill' }                       // no skill tag found on the question
 *   { kind: 'error', error: Error }            // dispatcher threw
 *   { kind: 'exhausted', skillIds: string[] }  // dispatcher returned []
 *   { kind: 'ok', question: object }           // success — caller should advance to this
 *
 * @param {object} args
 * @param {object} args.currentQuestion
 * @param {string[]} [args.excludeIds=[]]   Question ids already in the session
 * @param {Function} [args.mathDispatcher]  override for tests
 * @param {Function} [args.rwDispatcher]    override for tests
 * @returns {{kind: string, question?: object, skillIds?: string[], error?: Error}}
 */
export function pickSimilarQuestion({
  currentQuestion,
  excludeIds = [],
  mathDispatcher = defaultMathDispatcher,
  rwDispatcher = defaultRWDispatcher,
} = {}) {
  if (!currentQuestion || typeof currentQuestion !== 'object') {
    return { kind: 'invalid' };
  }

  const skillIds = Array.isArray(currentQuestion.skills)
    ? currentQuestion.skills.filter(Boolean)
    : (currentQuestion.skill ? [currentQuestion.skill] : []);

  if (skillIds.length === 0) {
    return { kind: 'no-skill' };
  }

  const isRW = currentQuestion.section === 'rw'
    || (typeof currentQuestion.id === 'string' && currentQuestion.id.startsWith('rw-'));

  const dispatcher = isRW ? rwDispatcher : mathDispatcher;

  let pool;
  try {
    pool = dispatcher(skillIds, { excludeIds, limit: 1 });
  } catch (err) {
    return { kind: 'error', error: err };
  }

  if (!Array.isArray(pool) || pool.length === 0) {
    return { kind: 'exhausted', skillIds };
  }

  return { kind: 'ok', question: pool[0] };
}
