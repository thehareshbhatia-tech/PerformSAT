/**
 * reviewQueueResolve.js — pure helpers for the review queue's feed + resolution
 * contract. Three item shapes coexist in progress/{uid}.reviewQueue:
 *
 *   legacy free-practice : { moduleId, sectionName, questionId: <array index> }
 *       resolved via getQuestionsForSection(moduleId, sectionName)[index]
 *
 *   bank-fed drill miss  : { moduleId: 'bank', sectionName: <display>, questionId: <bank id> }
 *       resolved via resolveQuestionById(bankId)  (unified math + R&W lookup)
 *
 *   full-test miss       : { moduleId: 'test::<testId>::<std|easy>', sectionName: <display>,
 *                            questionId: '<moduleIndex>-<questionIndex>' }
 *       resolved positionally via getTestById(testId)  (2026-06 audit gap 4)
 *
 * Keeping this pure (no Firebase, no React) makes the contract unit-testable and
 * lets App.jsx stay thin. The legacy path is preserved byte-for-byte so existing
 * queue data keeps resolving exactly as before.
 */

export const BANK_REVIEW_MODULE = 'bank';
export const TEST_REVIEW_MODULE_PREFIX = 'test::';

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
 * Build the reviewQueue entry fields for a full-test miss. moduleId encodes
 * the test plus which question source served the item:
 *   'test::practice-test-3::std'    — the test's standard module list
 *   'test::practice-test-3::easy'   — the MATH Module 2 Easy variant (only for
 *                                      items served from the swapped math module)
 *   'test::practice-test-3::rweasy' — the R&W Module 2 Easy variant
 * questionId is the '<moduleIndex>-<questionIndex>' position, NOT q.id — raw
 * test ids restart at 1 inside every module, so they can't key a queue that
 * spans modules and tests.
 *
 * @param {string} testId — catalog test id (e.g. 'practice-test-3')
 * @param {object} fields
 * @param {number} fields.modIdx — index into the module list the student saw
 * @param {number} fields.qIdx — index into that module's questions
 * @param {object} fields.question — the question object (for the display section)
 * @param {boolean} [fields.servedEasyVariant=false] — item came from a swapped easy module
 * @param {string} [fields.section] — owning module's section axis; with
 *   servedEasyVariant it picks 'rweasy' vs 'easy' (legacy math default)
 * @returns {{ moduleId: string, sectionName: string, questionId: string }}
 */
export const buildTestReviewEntry = (testId, { modIdx, qIdx, question, servedEasyVariant = false, section = null }) => {
  const variant = servedEasyVariant
    ? (section === 'reading-writing' || section === 'rw' ? 'rweasy' : 'easy')
    : 'std';
  return {
    moduleId: `${TEST_REVIEW_MODULE_PREFIX}${testId}::${variant}`,
    sectionName: reviewDisplaySection(question),
    questionId: `${modIdx}-${qIdx}`,
  };
};

/**
 * Resolve a full-test reviewQueue item back to its question via the test
 * catalog. Returns a copy with a SYNTHETIC globally-unique id — the review
 * runner keys answers and reviewKeyByQuestionId by q.id, and raw test ids
 * collide across modules and tests (two id-7s in one session would clobber
 * each other).
 *
 * @param {object} item — a reviewQueue item with a 'test::' moduleId
 * @param {(id: string) => object|null} getTestById — practice-test catalog lookup
 * @returns {object|null} the question (synthetic id), or null if stale
 */
export const resolveTestReviewItem = (item, getTestById) => {
  if (!item || typeof getTestById !== 'function') return null;
  const parts = String(item.moduleId).split('::'); // ['test', testId, variant]
  if (parts.length !== 3) return null;
  const [, testId, variant] = parts;
  const test = getTestById(testId);
  if (!test) return null;
  const [modIdx, qIdx] = String(item.questionId).split('-').map(Number);
  if (Number.isNaN(modIdx) || Number.isNaN(qIdx)) return null;
  const questions = variant === 'easy'
    ? (test.module2Easy?.questions || [])
    : variant === 'rweasy'
      ? (test.rwModule2Easy?.questions || [])
      : (test.modules?.[modIdx]?.questions || []);
  const q = questions[qIdx];
  if (!q) return null;
  // Tag the drill-contract `section` ('rw'|'math') from the owning module —
  // test questions don't carry one themselves, and without it the drill
  // shells offer the calculator on Reading & Writing items and the AI tutor
  // coaches them with the math prompt.
  const moduleSection = variant === 'easy'
    ? 'math'
    : variant === 'rweasy'
      ? 'rw'
      : (test.modules?.[modIdx]?.section === 'reading-writing' ? 'rw' : 'math');
  return {
    ...q,
    id: `tq::${testId}::${variant}::${modIdx}-${qIdx}`,
    sourceTestId: testId,
    section: moduleSection,
  };
};

/**
 * Resolve a reviewQueue item back to its question, dispatching on shape.
 *
 * @param {object} item — a reviewQueue item ({ moduleId, sectionName, questionId, ... })
 * @param {object} resolvers
 * @param {(id: string) => object|null} resolvers.resolveQuestionById — unified bank lookup
 * @param {(moduleId: string, sectionName: string) => Array} resolvers.getQuestionsForSection
 * @param {(id: string) => object|null} resolvers.getTestById — practice-test catalog lookup
 * @returns {object|null} the question, or null if it can't be resolved (stale)
 */
export const resolveReviewItemToQuestion = (item, { resolveQuestionById, getQuestionsForSection, getTestById } = {}) => {
  if (!item) return null;

  // Bank-fed drill miss: resolve by real id across math + R&W banks.
  if (item.moduleId === BANK_REVIEW_MODULE) {
    if (item.questionId == null || typeof resolveQuestionById !== 'function') return null;
    return resolveQuestionById(item.questionId) || null;
  }

  // Full-test miss: resolve positionally against the test catalog. Must be
  // checked before the legacy branch — a 'test::' moduleId would otherwise
  // fall through to getQuestionsForSection and silently return null.
  if (typeof item.moduleId === 'string' && item.moduleId.startsWith(TEST_REVIEW_MODULE_PREFIX)) {
    return resolveTestReviewItem(item, getTestById);
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
