// Section-relative module labels.
//
// The digital SAT numbers modules WITHIN each section — Reading & Writing
// Module 1/2 and Math Module 1/2 — never continuously across the whole test
// ("Module 3"/"Module 4"). Use these helpers anywhere you only have a
// continuous moduleIndex + section (snapshot review items, nav chips, pacing
// insights). When a real module object with a section-relative `.title` is on
// hand, prefer that title directly.

const isMath = (section) => section === 'math';
// Both section axes appear in the codebase: 'reading-writing' (test data) and
// 'rw' (diagnostic engine). Treat them the same.
const isRW = (section) => section === 'reading-writing' || section === 'rw';

// Every SAT section has exactly Module 1 and Module 2, and a full test is laid
// out [R&W M1, R&W M2, Math M1, Math M2], so the within-section number is just
// the continuous index mod 2, plus one. Works for full, math-only, and R&W-only
// tests alike.
const withinSectionNumber = (moduleIndex) =>
  ((Number.isFinite(moduleIndex) ? moduleIndex : 0) % 2) + 1;

const continuousFallback = (moduleIndex) =>
  (Number.isFinite(moduleIndex) ? moduleIndex : 0) + 1;

/**
 * Full human label for a module, numbered within its section.
 * Use it for headers, titles, and aria-labels.
 *
 * @param {string|null} section - 'math' | 'reading-writing' | 'rw' | null
 * @param {number} moduleIndex - continuous 0-based index across the full test
 * @returns {string} e.g. "Math Module 1", "Reading & Writing Module 2"
 */
export function sectionModuleLabel(section, moduleIndex) {
  const n = withinSectionNumber(moduleIndex);
  if (isMath(section)) return `Math Module ${n}`;
  if (isRW(section)) return `Reading & Writing Module ${n}`;
  return `Module ${continuousFallback(moduleIndex)}`;
}

/**
 * Compact label for dense chips / ids.
 * Use it where space is tight (question-grid chips, item ids).
 *
 * @param {string|null} section - 'math' | 'reading-writing' | 'rw' | null
 * @param {number} moduleIndex - continuous 0-based index across the full test
 * @returns {string} e.g. "Math M1", "R&W M2"
 */
export function sectionModuleShort(section, moduleIndex) {
  const n = withinSectionNumber(moduleIndex);
  if (isMath(section)) return `Math M${n}`;
  if (isRW(section)) return `R&W M${n}`;
  return `M${continuousFallback(moduleIndex)}`;
}
