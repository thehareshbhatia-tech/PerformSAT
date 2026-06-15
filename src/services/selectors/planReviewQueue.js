/**
 * planReviewQueue.js — shape today's due review items for the Study Plan.
 *
 * The Study Plan surfaces the same Review Queue the home Dashboard does, but
 * with two distinct affordances:
 *   - items that came from a full practice test DEEP-LINK to the specific wrong
 *     questions on that test (grouped by testId),
 *   - bank/legacy spaced-repetition items launch the existing review drill
 *     (grouped by sectionName).
 *
 * Pure: reuses buildDailySession for the overdue/due ordering + MAX_DAILY_ITEMS
 * cap, then partitions the result by the queue item's moduleId shape (see
 * reviewQueueResolve.js for the three coexisting shapes).
 */

import { buildDailySession } from '../dailyReviewEngine';
import { TEST_REVIEW_MODULE_PREFIX } from '../reviewQueueResolve';

/**
 * testLabel — friendly label for a catalog test id.
 *   'practice-test-3' → 'Test 3'   ·   'diagnostic' → 'Diagnostic'
 *
 * @param {string} testId
 * @returns {string}
 */
export const testLabel = (testId) => {
  if (!testId) return 'Test';
  const trailing = String(testId).match(/(\d+)\s*$/);
  if (trailing) return `Test ${trailing[1]}`;
  return String(testId)
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

/**
 * partitionReviewQueue — split today's due items into test-deep-link groups and
 * spaced-rep drill groups.
 *
 * @param {object} reviewQueue — progress/{uid}.reviewQueue (keyed object)
 * @returns {{
 *   testGroups: Array<{ testId, label, items, count, hasOverdue }>,
 *   drillGroups: Array<{ name, items, count, hasOverdue }>,
 *   totalDue: number,
 *   sessionSize: number,
 * }}
 *
 * When to use: render the Review Queue section inside StudyPlanDashboard.
 */
export const partitionReviewQueue = (reviewQueue = {}) => {
  const session = buildDailySession(reviewQueue);

  const testMap = new Map();  // testId     -> group
  const drillMap = new Map(); // sectionName -> group

  session.items.forEach((item) => {
    const moduleId = item?.moduleId;
    const isTestMiss =
      typeof moduleId === 'string' && moduleId.startsWith(TEST_REVIEW_MODULE_PREFIX);

    if (isTestMiss) {
      // 'test::<testId>::<std|easy>' → testId
      const testId = moduleId.split('::')[1] || 'unknown';
      if (!testMap.has(testId)) {
        testMap.set(testId, { testId, label: testLabel(testId), items: [], hasOverdue: false });
      }
      const group = testMap.get(testId);
      group.items.push(item);
      if (item.daysOverdue) group.hasOverdue = true;
    } else {
      const name = item?.sectionName || 'General';
      if (!drillMap.has(name)) {
        drillMap.set(name, { name, items: [], hasOverdue: false });
      }
      const group = drillMap.get(name);
      group.items.push(item);
      if (item.daysOverdue) group.hasOverdue = true;
    }
  });

  const withCount = (g) => ({ ...g, count: g.items.length });
  const byCountDesc = (a, b) => b.items.length - a.items.length;

  return {
    testGroups: [...testMap.values()].sort(byCountDesc).map(withCount),
    drillGroups: [...drillMap.values()].sort(byCountDesc).map(withCount),
    totalDue: session.totalDue,
    sessionSize: session.sessionSize,
  };
};

export default partitionReviewQueue;
