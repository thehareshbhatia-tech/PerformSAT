/**
 * corpusLoader.js — memoized dynamic-import loaders for the question corpus
 * (Stage 2b of the bundle-split plan).
 *
 * The corpus (~9MB raw: math bank shards, the flattened R&W bank, all 36
 * practice-test bundles, topic question files) used to be statically welded
 * into the main chunk through App.jsx and two corpus-coupled services. Every
 * loader here wraps a webpack dynamic import() so each corpus slice ships as
 * its own named chunk, fetched on first use (or on idle via preloadCorpus).
 *
 * Memoization contract: each loader caches the import PROMISE at module
 * scope, so concurrent callers share one in-flight fetch, StrictMode's
 * double-invoke is free, and repeat calls are synchronous-resolving cache
 * hits. Never cache in component state — that re-fires per mount.
 *
 * When to use: any App.jsx handler (or main-chunk module) that needs bank
 * lookups, practice-test bundles, or the routing/try-similar services must
 * `await` the matching loader instead of importing the module statically.
 * Components that are already their own lazy chunks (PracticeBank,
 * StudyPlanDashboard, the practice shells) may keep their static imports —
 * the corpus lands in their chunk graph, not in main.
 */

let mathBankPromise = null;
let topicQuestionsPromise = null;
let rwBankPromise = null;
let practiceTestsPromise = null;
let practiceRoutingPromise = null;
let trySimilarPromise = null;

/**
 * Load the hand-authored math drill bank (4 shards + topic-file lift,
 * ~1373 items) as the "bank-math" chunk.
 *
 * @returns {Promise<typeof import('./questions/bank')>} module namespace
 *   (getQuestionById, getQuestionsByDomain, getTargetedWeaknessSet, ...)
 */
export const loadMathBank = () => {
  if (!mathBankPromise) {
    mathBankPromise = import(/* webpackChunkName: "bank-math" */ './questions/bank');
  }
  return mathBankPromise;
};

/**
 * Load the legacy topic question files (free-practice sections keyed by
 * moduleId + sectionName).
 *
 * @returns {Promise<typeof import('./questions')>} module namespace
 *   (getQuestionsForSection, getRandomQuestions, hasQuestionsForSection, ...)
 */
export const loadTopicQuestions = () => {
  if (!topicQuestionsPromise) {
    topicQuestionsPromise = import(/* webpackChunkName: "topic-questions" */ './questions');
  }
  return topicQuestionsPromise;
};

/**
 * Load the R&W bank (648 items flattened from the 12 R&W test bundles)
 * as the "bank-rw" chunk.
 *
 * @returns {Promise<typeof import('./questions/rwBank')>} module namespace
 *   (getQuestionById, getQuestionsBySkillIds, getTargetedWeaknessSet, ...)
 */
export const loadRWBank = () => {
  if (!rwBankPromise) {
    rwBankPromise = import(/* webpackChunkName: "bank-rw" */ './questions/rwBank');
  }
  return rwBankPromise;
};

/**
 * Load the full practice-test catalog (12 tests x [R&W + Math M1/M2 + M2
 * Easy variants]) as the "practice-tests" chunk.
 *
 * @returns {Promise<typeof import('./practiceTests')>} module namespace
 *   (getAllPracticeTests, getPracticeTestById, ...)
 */
export const loadPracticeTests = () => {
  if (!practiceTestsPromise) {
    practiceTestsPromise = import(/* webpackChunkName: "practice-tests" */ './practiceTests');
  }
  return practiceTestsPromise;
};

/**
 * Load the practice-assignment/routing service (imports BOTH banks: drill
 * resolution, adaptive queue seeding + session-state machine).
 *
 * Mid-session adaptive calls must NOT await this per answer — App.jsx stashes
 * the resolved namespace in practiceRoutingRef when the session starts and
 * reads it synchronously from handleNextQuestion.
 *
 * @returns {Promise<typeof import('../services/practiceAssignmentService')>}
 */
export const loadPracticeRouting = () => {
  if (!practiceRoutingPromise) {
    practiceRoutingPromise = import(/* webpackChunkName: "practice-routing" */ '../services/practiceAssignmentService');
  }
  return practiceRoutingPromise;
};

/**
 * Load the try-similar service (imports both banks' skill dispatchers).
 *
 * @returns {Promise<typeof import('../services/trySimilarService')>}
 */
export const loadTrySimilar = () => {
  if (!trySimilarPromise) {
    trySimilarPromise = import(/* webpackChunkName: "try-similar" */ '../services/trySimilarService');
  }
  return trySimilarPromise;
};

/**
 * Pre-warm every corpus chunk in parallel. Called from App.jsx's idle
 * pre-warm effect once auth resolves, so by the time a student clicks into
 * a drill or test every awaited loader above is a cache hit.
 *
 * @returns {Promise<Array<object>>} resolves when all corpus chunks loaded
 */
export const preloadCorpus = () => Promise.all([
  loadMathBank(),
  loadTopicQuestions(),
  loadRWBank(),
  loadPracticeTests(),
  loadPracticeRouting(),
  loadTrySimilar(),
]);
