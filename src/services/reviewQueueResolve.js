/**
 * reviewQueueResolve.js — pure helpers for the review queue's feed + resolution
 * contract. Two item shapes coexist in progress/{uid}.reviewQueue:
 *
 *   legacy free-practice : { moduleId, sectionName, questionId: <array index> }
 *       resolved via getQuestionsForSection(moduleId, sectionName)[index]
 *
 *   bank-fed drill miss  : { moduleId: 'bank', sectionName: <display>, questionId: <bank id> }
 *       resolved via resolveQuestionById(bankId)  (unified math + R&W lookup)
 *
 * Keeping this pure (no Firebase, no React) makes the contract unit-testable and
 * lets App.jsx stay thin. The legacy path is preserved byte-for-byte so existing
 * queue data keeps resolving exactly as before.
 */

export const BANK_REVIEW_MODULE = 'bank';

/**
 * Human-ish group label for a bank-fed review item. DailyReviewCard groups the
 * queue by sectionName, so this is what the student sees as the topic heading.
 *
 * @param {object|null} question
 * @returns {string}
 */
export const reviewDisplaySection = (question) => {
  if (!question) return 'Practice';
  return (
    question.domain
    || (Array.isArray(question.skills) && question.skills[0])
    || question.section
    || 'Practice'
  );
};

/**
 * Build the reviewQueue entry fields for a bank-sourced (drill) question.
 * Returns the (moduleId, sectionName, questionId) triple addToReviewQueue keys on.
 *
 * @param {object} question
 * @returns {{ moduleId: string, sectionName: string, questionId: string|number|null }}
 */
export const buildBankReviewEntry = (question) => ({
  moduleId: BANK_REVIEW_MODULE,
  sectionName: reviewDisplaySection(question),
  questionId: question?.id ?? null,
});

/**
 * Resolve a reviewQueue item back to its question, dispatching on shape.
 *
 * @param {object} item — a reviewQueue item ({ moduleId, sectionName, questionId, ... })
 * @param {object} resolvers
 * @param {(id: string) => object|null} resolvers.resolveQuestionById — unified bank lookup
 * @param {(moduleId: string, sectionName: string) => Array} resolvers.getQuestionsForSection
 * @returns {object|null} the question, or null if it can't be resolved (stale)
 */
export const resolveReviewItemToQuestion = (item, { resolveQuestionById, getQuestionsForSection } = {}) => {
  if (!item) return null;

  // Bank-fed drill miss: resolve by real id across math + R&W banks.
  if (item.moduleId === BANK_REVIEW_MODULE) {
    if (item.questionId == null || typeof resolveQuestionById !== 'function') return null;
    return resolveQuestionById(item.questionId) || null;
  }

  // Legacy free-practice: questionId is an index into the section array.
  if (item.moduleId && item.sectionName && typeof getQuestionsForSection === 'function') {
    const section = getQuestionsForSection(item.moduleId, item.sectionName) || [];
    const idx = typeof item.questionId === 'number' ? item.questionId : parseInt(item.questionId, 10);
    if (Number.isNaN(idx)) return null;
    return section[idx] || null;
  }

  return null;
};
