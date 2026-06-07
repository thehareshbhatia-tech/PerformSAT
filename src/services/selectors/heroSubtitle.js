import { isGoalAchieved, isSectionScaleScore } from './goalProgress';

/**
 * heroSubtitle.js — the ONE editorial line under the dashboard hero greeting.
 *
 * Exactly one fact, never three (D-IH-2 + right-rail dedupe): the rail
 * already shows countdown + score + goal as tiles, so the subtitle prefers
 * facts the rail does NOT narrate, in this order:
 *   1. today's focus      — "Two practice sets on deck today."
 *   2. score-to-goal      — "60 points from your 700 goal." (scale-safe)
 *   3. days-until-test    — only when neither richer fact exists
 *   4. null               — caller renders its FIXED zero-data string
 *                            (new users never ride this composer)
 *
 * Output is hard-capped at a word boundary (prior pitfall: sentence-detection
 * clamps never fire on semicolon-chained generated copy).
 */

const HARD_CHAR_CAP = 64;
const COUNT_WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
// Slice kinds whose body copy already owns the moment — no focus fact.
const NON_FOCUS_KINDS = new Set(['no-plan', 'refreshing', 'rest-day', 'all-done', 'plan-complete']);

/** Cap at a word boundary; never mid-word, never over HARD_CHAR_CAP. Exported for tests. */
export function clampAtWordBoundary(text) {
  if (typeof text !== 'string') return '';
  if (text.length <= HARD_CHAR_CAP) return text;
  const cut = text.slice(0, HARD_CHAR_CAP);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[,.;:\s]+$/, '')}…`;
}

/**
 * Compose the hero subtitle.
 *
 * @param {object} args
 * @param {{kind?: string, activities?: Array}|null} [args.todaySlice]
 * @param {number|null} [args.latestScore]   most recent bestScaledScore
 * @param {number|null} [args.targetScore]   200-800 Math target from onboarding
 * @param {boolean|undefined} [args.isMultiSection] scale of the latest score
 * @param {number|null} [args.daysUntilTest] signed day count (selectors/daysUntilTest)
 * @returns {string|null} one capped editorial sentence, or null when there is
 *   nothing personal to say (caller shows its fixed new-user copy)
 */
export function formatHeroSubtitle({
  todaySlice = null,
  latestScore = null,
  targetScore = null,
  isMultiSection = undefined,
  daysUntilTest = null,
} = {}) {
  // 1 — today's focus
  const activities = Array.isArray(todaySlice?.activities) ? todaySlice.activities : [];
  if (todaySlice && !NON_FOCUS_KINDS.has(todaySlice.kind) && activities.length > 0) {
    const n = activities.length;
    const word = n < COUNT_WORDS.length ? COUNT_WORDS[n] : String(n);
    return clampAtWordBoundary(`${word} practice set${n === 1 ? '' : 's'} on deck today.`);
  }

  // 2 — score-to-goal, only when the scales are comparable (a 400-1600
  // composite never measures against the 200-800 Math target).
  if (
    latestScore !== null && typeof targetScore === 'number' && targetScore > 0 &&
    isSectionScaleScore(latestScore, { isMultiSection })
  ) {
    if (isGoalAchieved({ latestScore, targetScore, isMultiSection })) {
      return clampAtWordBoundary(`Past your ${targetScore} goal — hold it.`);
    }
    return clampAtWordBoundary(`${targetScore - latestScore} points from your ${targetScore} goal.`);
  }

  // 3 — countdown, the rail already shows it; last resort only.
  if (typeof daysUntilTest === 'number' && daysUntilTest >= 0) {
    return clampAtWordBoundary(
      daysUntilTest === 0
        ? 'Test day is today.'
        : `Test day in ${daysUntilTest} day${daysUntilTest === 1 ? '' : 's'}.`
    );
  }

  return null;
}
