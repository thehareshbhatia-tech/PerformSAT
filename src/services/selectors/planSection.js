/**
 * planSection.js — pure helpers for the Study Plan's Math / Reading & Writing
 * section filter (the Practice-Bank-style switcher on the plan view).
 *
 * Section identity of a plan activity:
 *   - drill-shaped activities (plan format v2+) carry `section: 'math'|'rw'`
 *   - module/section-coordinate activities are math-curriculum by definition
 *   - strategy / review / test activities are whole-plan items with no
 *     section — they stay visible under every filter.
 *
 * Zero imports (selectors/ convention — bundleGuard-safe).
 */

/**
 * The test-subject section of a plan activity.
 *
 * @param {object|null} a - a weeks[].activities[] entry
 * @returns {('math'|'rw'|null)} null = section-agnostic (strategy/review/test)
 */
export const activitySection = (a) => {
  if (!a) return null;
  if (a.section === 'rw' || a.section === 'math') return a.section;
  if (a.moduleId) return 'math';
  return null;
};

/**
 * Does an activity belong under the given section filter?
 * Section-agnostic activities (null section) belong everywhere — hiding the
 * week's review/strategy/test items under a section tab would make the plan
 * look emptier than it is.
 *
 * @param {object|null} a - a weeks[].activities[] entry
 * @param {('all'|'math'|'rw')} filter
 * @returns {boolean}
 */
export const matchesSectionFilter = (a, filter) => {
  if (!filter || filter === 'all') return true;
  const section = activitySection(a);
  return section === null || section === filter;
};

/** Display labels for the switcher + section chips. */
export const SECTION_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'math', label: 'Math' },
  { id: 'rw', label: 'Reading & Writing' },
];
