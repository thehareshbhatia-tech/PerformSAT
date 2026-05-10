/**
 * completedTests.js — pure selectors for the Past-Test-Review surface.
 *
 * Pure functions over `practiceTestResults` (the per-student aggregate
 * persisted at progress/{userId}.practiceTestResults). For the per-attempt
 * question snapshot (subcollection write at progress/{userId}/attempts/
 * {attemptId}), use the existing services/diagnosticReportLoader.js — that
 * lives outside selectors/ because it pulls Firebase.
 *
 * Lives in selectors/ alongside recentTest, weaknesses, etc. so it stays
 * unit-testable without a Firebase mock.
 */

function toMillis(ts) {
  if (!ts) return null;
  if (typeof ts === 'number') return ts;
  if (ts instanceof Date) return ts.getTime();
  if (typeof ts === 'object') {
    if (typeof ts.toMillis === 'function') return ts.toMillis();
    if (typeof ts.seconds === 'number') return ts.seconds * 1000;
  }
  if (typeof ts === 'string') {
    const t = Date.parse(ts);
    return Number.isFinite(t) ? t : null;
  }
  return null;
}

/**
 * Canonical join key shared by diagnosticData.questionDetails and the
 * subcollection snapshot.questionsSnapshot. Convention: `${modIdx}-${qIdx}`.
 *
 * @param {number} moduleIndex
 * @param {number} questionIndex
 * @returns {string}
 */
export function itemKey(moduleIndex, questionIndex) {
  return `${moduleIndex}-${questionIndex}`;
}

/**
 * getCompletedTests(practiceTestResults)
 *
 * Returns one summary per test that has at least one attempt, sorted by the
 * latest attempt's `completedAt` (newest first). The shape is what the
 * Past-Test-Review index card needs to render — no Firestore reads required.
 *
 * Note on `attempts` ordering: practiceTestService.recordPracticeTestResult
 * stores newest-first via `trimAttempts` (see practiceTestService.js:96).
 * So `attempts[0]` is the latest.
 *
 * @param {Object<string, {attempts?: Array, testTitle?: string,
 *   bestScaledScore?: number, bestRawScore?: number, totalAttempts?: number,
 *   lastAttemptAt?: any}>} practiceTestResults
 * @returns {Array<{testId, testTitle, latestAttemptId, completedAt,
 *   rawScore, totalQuestions, scaledScore, isMultiSection, bestScaledScore,
 *   bestRawScore, totalAttempts, moduleScores}>}
 */
export function getCompletedTests(practiceTestResults) {
  if (!practiceTestResults || typeof practiceTestResults !== 'object') return [];
  const out = [];
  for (const [testId, results] of Object.entries(practiceTestResults)) {
    const attempts = results && Array.isArray(results.attempts) ? results.attempts : [];
    if (attempts.length === 0) continue;
    const latest = attempts[0];
    out.push({
      testId,
      testTitle: results.testTitle || testId,
      latestAttemptId: latest.attemptId || null,
      completedAt: latest.completedAt || null,
      rawScore: latest.rawScore ?? null,
      totalQuestions: latest.totalQuestions ?? null,
      scaledScore: latest.scaledScore ?? null,
      isMultiSection: latest.isMultiSection ?? false,
      bestScaledScore: results.bestScaledScore ?? null,
      bestRawScore: results.bestRawScore ?? null,
      totalAttempts: results.totalAttempts ?? attempts.length,
      moduleScores: latest.moduleScores || [],
    });
  }
  return out.sort((a, b) => {
    const am = toMillis(a.completedAt) ?? 0;
    const bm = toMillis(b.completedAt) ?? 0;
    return bm - am;
  });
}

/**
 * getLatestAttempt(practiceTestResults, testId)
 *
 * The newest attempt entry for a specific test, or null if none.
 * Includes `diagnosticData` (per-question telemetry) when present —
 * older attempts have it stripped to keep the doc under the 1MB limit.
 *
 * @param {object} practiceTestResults
 * @param {string} testId
 * @returns {object|null}
 */
export function getLatestAttempt(practiceTestResults, testId) {
  const results = practiceTestResults?.[testId];
  const attempts = results && Array.isArray(results.attempts) ? results.attempts : [];
  return attempts[0] || null;
}

/**
 * extractItemsFromAttempt(attempt)
 *
 * Flatten attempt.diagnosticData.questionDetails into an array of
 * per-item review entries. Does NOT include question stem/choices —
 * those come from the per-attempt snapshot doc via diagnosticReportLoader.
 *
 * @param {object|null} attempt
 * @returns {Array<{key, moduleIndex, questionIndex, isCorrect, timeSpent,
 *   visits, usedCalculator, markedForReview, difficulty, skills, answerChanges}>}
 */
export function extractItemsFromAttempt(attempt) {
  if (!attempt) return [];
  const dd = attempt.diagnosticData;
  if (!dd?.questionDetails || typeof dd.questionDetails !== 'object') return [];
  return Object.entries(dd.questionDetails).map(([key, detail]) => {
    const [m, q] = key.split('-').map(Number);
    return {
      key,
      moduleIndex: Number.isFinite(m) ? m : 0,
      questionIndex: Number.isFinite(q) ? q : 0,
      isCorrect: !!detail.isCorrect,
      timeSpent: typeof detail.timeSpent === 'number' ? detail.timeSpent : 0,
      visits: typeof detail.visits === 'number' ? detail.visits : 0,
      usedCalculator: !!detail.usedCalculator,
      markedForReview: !!detail.markedForReview,
      difficulty: detail.difficulty || null,
      skills: Array.isArray(detail.skills) ? detail.skills : [],
      answerChanges: typeof detail.answerChanges === 'number' ? detail.answerChanges : 0,
    };
  }).sort((a, b) => {
    if (a.moduleIndex !== b.moduleIndex) return a.moduleIndex - b.moduleIndex;
    return a.questionIndex - b.questionIndex;
  });
}

/**
 * getWrongItems(attempt)
 *
 * Convenience filter — items where !isCorrect (includes unanswered).
 *
 * @param {object|null} attempt
 * @returns {Array<object>}
 */
export function getWrongItems(attempt) {
  return extractItemsFromAttempt(attempt).filter(item => !item.isCorrect);
}

/**
 * groupItemsByErrorClass(items, diagnosticReport)
 *
 * Group items by their primary error class (from the 6-class taxonomy in
 * diagnosticEngine.js: conceptual_gap, procedural_error, trap_susceptibility,
 * time_pressure, careless_error, unanswered).
 *
 * Error classification lives at the SKILL level in diagnosticReport
 * (skillAnalysis.weakSkills[].primaryErrorType), so we map each item's
 * first skill to that skill's classification. Items whose skill isn't in
 * weakSkills (i.e., not weak) bucket as 'mixed'.
 *
 * @param {Array<object>} items
 * @param {object|null} diagnosticReport
 * @returns {Object<string, Array<object>>}
 */
export function groupItemsByErrorClass(items, diagnosticReport) {
  const out = {};
  if (!Array.isArray(items)) return out;
  const skillToClass = new Map();
  const weakSkills = diagnosticReport?.skillAnalysis?.weakSkills || [];
  for (const ws of weakSkills) {
    if (ws?.skillId) skillToClass.set(ws.skillId, ws.primaryErrorType || 'mixed');
  }
  for (const item of items) {
    const firstSkill = item.skills?.[0];
    const cls = (firstSkill && skillToClass.get(firstSkill)) || 'mixed';
    if (!out[cls]) out[cls] = [];
    out[cls].push(item);
  }
  return out;
}

/**
 * computeReviewStats(attempt)
 *
 * Top-of-page stats row for TestReviewDetail.
 *
 * @param {object|null} attempt
 * @returns {{total, correct, wrong, accuracy, moduleScores}}
 */
export function computeReviewStats(attempt) {
  const items = extractItemsFromAttempt(attempt);
  const total = items.length;
  const correct = items.filter(i => i.isCorrect).length;
  const wrong = total - correct;
  return {
    total,
    correct,
    wrong,
    accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
    moduleScores: attempt?.moduleScores || [],
  };
}
