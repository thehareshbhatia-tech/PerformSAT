import { getQuestionsBySkillIds as defaultMathDispatcher } from '../data/questions/bank';
import { getQuestionsBySkillIds as defaultRWDispatcher } from '../data/questions/rwBank';
import { getQuestionsBySatPatterns as defaultMathPatternDispatcher } from '../data/questions/bank';
import { getQuestionsByPattern as defaultRWPatternDispatcher } from '../data/questions/rwBank';
import { extractSatPattern } from '../data/questions/extractSatPattern';
import { deriveRWQuestionType } from '../data/questions/rwBank/deriveRWPattern';

// Drill shells render answers ONLY through AnswerChoiceList (multiple choice);
// a fill-in has no input there and would strand the student. Every launcher
// applies this same choices>=2 guard.
const isMCQ = (q) => Array.isArray(q.choices) && q.choices.length >= 2;

/**
 * pickSimilarQuestion — picks one fresh question "like this one" so the student
 * can drill deeper without leaving the round. Two match tiers:
 *
 *   1. TYPE (satPattern) — same exact question type as the current item. This
 *      is the "drill down a specific question type" affordance: the type level
 *      the Practice Bank no longer browses becomes an on-demand "more like THIS
 *      one." Only runs when `preferType` is true (Practice Bank adaptive round).
 *   2. SKILL (topic) — same weak skill. The original behavior and the fallback
 *      when no type is derivable or the type pool is exhausted.
 *
 * Pure function: bank dispatchers + the pattern extractors are all
 * dependency-injected so tests don't touch the bank modules.
 *
 * Section dispatch:
 *   - currentQuestion.section === 'rw' OR id starts with 'rw-' → R&W bank
 *   - otherwise                                                 → math bank
 *
 * Result shape (discriminated by `kind`):
 *   { kind: 'invalid' }                                   // missing/non-object
 *   { kind: 'no-skill' }                                  // no skill tag found
 *   { kind: 'error', error: Error }                       // dispatcher threw
 *   { kind: 'exhausted', skillIds: string[] }             // dispatcher returned []
 *   { kind: 'ok', question, matchedBy: 'type'|'skill', typeSlug? }  // advance to this
 *
 * @param {object} args
 * @param {object} args.currentQuestion
 * @param {string[]} [args.excludeIds=[]]   Question ids already in the session
 * @param {boolean} [args.preferType=false] Try the same question TYPE first
 * @param {Function} [args.mathDispatcher]  skill dispatcher override (tests)
 * @param {Function} [args.rwDispatcher]    skill dispatcher override (tests)
 * @param {Function} [args.mathPatternDispatcher] type dispatcher override (tests)
 * @param {Function} [args.rwPatternDispatcher]   type dispatcher override (tests)
 * @param {Function} [args.extractPattern] math type extractor override (tests)
 * @param {Function} [args.deriveRWType]   R&W type extractor override (tests)
 * @returns {{kind: string, question?: object, matchedBy?: string, typeSlug?: string, skillIds?: string[], error?: Error}}
 */
export function pickSimilarQuestion({
  currentQuestion,
  excludeIds = [],
  preferType = false,
  mathDispatcher = defaultMathDispatcher,
  rwDispatcher = defaultRWDispatcher,
  mathPatternDispatcher = defaultMathPatternDispatcher,
  rwPatternDispatcher = defaultRWPatternDispatcher,
  extractPattern = extractSatPattern,
  deriveRWType = deriveRWQuestionType,
} = {}) {
  if (!currentQuestion || typeof currentQuestion !== 'object') {
    return { kind: 'invalid' };
  }

  const isRW = currentQuestion.section === 'rw'
    || (typeof currentQuestion.id === 'string' && currentQuestion.id.startsWith('rw-'));

  // ── Tier 1: same QUESTION TYPE (satPattern) ──
  // Opt-in — keeps the study-plan drill path matching by skill, while the
  // Practice Bank adaptive round drills the exact type the student is on.
  if (preferType) {
    let typeSlug = null;
    try {
      typeSlug = isRW ? deriveRWType(currentQuestion) : extractPattern(currentQuestion.explanation);
    } catch {
      typeSlug = null;
    }
    if (typeSlug) {
      const patternDispatcher = isRW ? rwPatternDispatcher : mathPatternDispatcher;
      let patternPool = null;
      try {
        patternPool = patternDispatcher([typeSlug], { excludeIds });
      } catch {
        patternPool = null; // fall through to the skill tier below
      }
      const patternMcq = Array.isArray(patternPool) ? patternPool.filter(isMCQ) : [];
      if (patternMcq.length > 0) {
        return { kind: 'ok', question: patternMcq[0], matchedBy: 'type', typeSlug };
      }
    }
  }

  // ── Tier 2: same SKILL (topic) ──
  const skillIds = Array.isArray(currentQuestion.skills)
    ? currentQuestion.skills.filter(Boolean)
    : (currentQuestion.skill ? [currentQuestion.skill] : []);

  if (skillIds.length === 0) {
    return { kind: 'no-skill' };
  }

  const dispatcher = isRW ? rwDispatcher : mathDispatcher;

  let pool;
  try {
    // No `limit` — fetch the full matched pool so the MCQ filter below has
    // candidates to choose from after fill-ins are dropped.
    pool = dispatcher(skillIds, { excludeIds });
  } catch (err) {
    return { kind: 'error', error: err };
  }

  const mcqPool = Array.isArray(pool) ? pool.filter(isMCQ) : [];

  if (mcqPool.length === 0) {
    return { kind: 'exhausted', skillIds };
  }

  return { kind: 'ok', question: mcqPool[0], matchedBy: 'skill' };
}
