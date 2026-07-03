/**
 * domainSkillTable.js — pure selector that turns an attempt's per-question
 * data into an organized Math / R&W → domain → skill accuracy table.
 *
 * This is the data spine for the "Domains & Skills" block on the post-test
 * score-analysis surface (TestResults). It mirrors the clean Domains-and-
 * Accuracy table competitors surface, but is fed by SEVA's richer diagnostic
 * engine: it groups by test SECTION first (math vs reading-writing — the two
 * never merge), then by content DOMAIN, then by individual SKILL.
 *
 * Input is the engine's per-question `questionAnalysis` records (freshly
 * recomputed by runDiagnostic on every mount — never the trimmed, stored
 * aggregate). Accuracy is RE-derived here from the per-question `isCorrect`
 * flags, so a section-stripped snapshot can never collapse math + R&W into
 * one bucket (see project_score_review_210_fix). Each skill row also carries
 * the KEYS of its missed questions (for a deep-link into the answer review)
 * and its distinct missed SAT Patterns (for exact-question-type drill
 * routing — Tier 1 of getTargetedWeaknessSet).
 *
 * Pure + dependency-free: display names and thresholds are injected, so it
 * stays unit-testable without a taxonomy or Firebase mock.
 */

// Accuracy at or above this counts a domain / skill as "strong" — rendered
// with a subtle green tint. Everything below is neutral (no red walls).
export const STRONG_ACCURACY_THRESHOLD = 80;

/**
 * Normalize a per-question / per-module section value to the binary test
 * subject axis. Accepts 'math', 'rw', or the module-shape 'reading-writing'.
 *
 * @param {string|null|undefined} section
 * @returns {'math'|'rw'}
 */
function normalizeSection(section) {
  return section === 'rw' || section === 'reading-writing' ? 'rw' : 'math';
}

const SECTION_LABELS = { math: 'Math', rw: 'Reading & Writing' };
// Math before R&W in the rendered order (stable, deterministic).
const SECTION_ORDER = { math: 0, rw: 1 };

/**
 * Humanize a kebab / snake id when no display name is injected.
 *
 * @param {string} id
 * @returns {string}
 */
function humanize(id) {
  if (!id || typeof id !== 'string') return '';
  return id.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * The primary skill id a question counts under. Questions carry a `skills`
 * array (math bank) or a `skill` string (R&W bundles); the first entry is the
 * primary. Falls back to a shared '__general__' bucket so no item is dropped
 * and section/domain totals stay complete.
 *
 * @param {object} q  a questionAnalysis record
 * @returns {string}
 */
function primarySkillId(q) {
  if (Array.isArray(q.skills) && q.skills.length > 0 && q.skills[0]) return q.skills[0];
  if (typeof q.skill === 'string' && q.skill) return q.skill;
  return '__general__';
}

/**
 * buildDomainSkillTable(questionAnalysis, opts?)
 *
 * @param {Array<{
 *   key?: string, moduleIndex?: number, questionIndex?: number,
 *   section?: string, isCorrect?: boolean, difficulty?: string,
 *   skills?: string[], skill?: string, domain?: string, satPattern?: string|null
 * }>} questionAnalysis  per-question records (diagnosticEngine.questionAnalysis shape)
 * @param {object} [opts]
 * @param {Object<string,string>} [opts.skillNames]   skillId → display name
 * @param {Object<string,string>} [opts.domainNames]  domainId → display name
 * @param {number} [opts.strongThreshold]             accuracy% ≥ this ⇒ strong
 * @returns {{
 *   totals: { correct: number, total: number, accuracy: number },
 *   sections: Array<{
 *     section: 'math'|'rw', label: string,
 *     correct: number, total: number, accuracy: number, misses: number,
 *     domains: Array<{
 *       domainId: string, domainName: string, section: 'math'|'rw',
 *       correct: number, total: number, accuracy: number, misses: number,
 *       isStrong: boolean, firstMissModuleIndex: number|null,
 *       skills: Array<{
 *         skillId: string, skillName: string, section: 'math'|'rw', domainId: string,
 *         correct: number, total: number, accuracy: number, misses: number,
 *         isStrong: boolean, missedKeys: string[], firstMissModuleIndex: number|null,
 *         missedPatterns: string[]
 *       }>
 *     }>
 *   }>
 * }}
 *
 * Sorting: skills weakest-first within a domain (accuracy asc, then more
 * misses first, then name); domains weakest-first within a section; sections
 * math then R&W. `missedKeys` are ordered by module then question index.
 */
export function buildDomainSkillTable(questionAnalysis, opts = {}) {
  const {
    skillNames = {},
    domainNames = {},
    strongThreshold = STRONG_ACCURACY_THRESHOLD,
  } = opts;

  const items = Array.isArray(questionAnalysis) ? questionAnalysis : [];

  // section → domainId → skillId → aggregate bucket
  const sectionMap = new Map();

  const ensureSection = (section) => {
    if (!sectionMap.has(section)) sectionMap.set(section, new Map());
    return sectionMap.get(section);
  };

  for (const q of items) {
    if (!q) continue;
    const section = normalizeSection(q.section);
    const domainId = q.domain || 'unknown';
    const skillId = primarySkillId(q);
    const isCorrect = !!q.isCorrect;
    const moduleIndex = Number.isFinite(q.moduleIndex) ? q.moduleIndex : 0;
    const questionIndex = Number.isFinite(q.questionIndex) ? q.questionIndex : 0;

    const domainMap = ensureSection(section);
    if (!domainMap.has(domainId)) domainMap.set(domainId, new Map());
    const skillMap = domainMap.get(domainId);

    if (!skillMap.has(skillId)) {
      skillMap.set(skillId, {
        skillId,
        section,
        domainId,
        correct: 0,
        total: 0,
        missed: [],           // { key, moduleIndex, questionIndex }
        patternSet: new Set(), // distinct satPattern of missed items
      });
    }
    const bucket = skillMap.get(skillId);
    bucket.total += 1;
    if (isCorrect) {
      bucket.correct += 1;
    } else {
      bucket.missed.push({
        key: q.key || `${moduleIndex}-${questionIndex}`,
        moduleIndex,
        questionIndex,
      });
      if (q.satPattern) bucket.patternSet.add(q.satPattern);
    }
  }

  const accuracyOf = (correct, total) => (total > 0 ? Math.round((correct / total) * 100) : 0);

  const sections = [];
  for (const [section, domainMap] of sectionMap.entries()) {
    let secCorrect = 0;
    let secTotal = 0;
    const domains = [];

    for (const [domainId, skillMap] of domainMap.entries()) {
      let domCorrect = 0;
      let domTotal = 0;
      const domMissModules = [];
      const skills = [];

      for (const bucket of skillMap.values()) {
        const missed = bucket.missed
          .slice()
          .sort((a, b) =>
            a.moduleIndex !== b.moduleIndex
              ? a.moduleIndex - b.moduleIndex
              : a.questionIndex - b.questionIndex
          );
        const misses = missed.length;
        const accuracy = accuracyOf(bucket.correct, bucket.total);
        const firstMissModuleIndex = missed.length > 0 ? missed[0].moduleIndex : null;
        if (firstMissModuleIndex !== null) domMissModules.push(firstMissModuleIndex);

        skills.push({
          skillId: bucket.skillId,
          skillName: skillNames[bucket.skillId] || humanize(bucket.skillId),
          section: bucket.section,
          domainId: bucket.domainId,
          correct: bucket.correct,
          total: bucket.total,
          accuracy,
          misses,
          isStrong: accuracy >= strongThreshold,
          missedKeys: missed.map(m => m.key),
          firstMissModuleIndex,
          missedPatterns: [...bucket.patternSet],
        });

        domCorrect += bucket.correct;
        domTotal += bucket.total;
      }

      // Weakest skill first: lowest accuracy, then most misses, then name.
      skills.sort((a, b) =>
        a.accuracy - b.accuracy ||
        b.misses - a.misses ||
        a.skillName.localeCompare(b.skillName)
      );

      const domAccuracy = accuracyOf(domCorrect, domTotal);
      domains.push({
        domainId,
        domainName: domainNames[domainId] || humanize(domainId),
        section,
        correct: domCorrect,
        total: domTotal,
        accuracy: domAccuracy,
        misses: domTotal - domCorrect,
        isStrong: domAccuracy >= strongThreshold,
        firstMissModuleIndex: domMissModules.length > 0 ? Math.min(...domMissModules) : null,
        skills,
      });

      secCorrect += domCorrect;
      secTotal += domTotal;
    }

    // Weakest domain first: lowest accuracy, then larger question count.
    domains.sort((a, b) => a.accuracy - b.accuracy || b.total - a.total);

    sections.push({
      section,
      label: SECTION_LABELS[section] || humanize(section),
      correct: secCorrect,
      total: secTotal,
      accuracy: accuracyOf(secCorrect, secTotal),
      misses: secTotal - secCorrect,
      domains,
    });
  }

  sections.sort((a, b) => (SECTION_ORDER[a.section] ?? 9) - (SECTION_ORDER[b.section] ?? 9));

  const totalCorrect = sections.reduce((s, sec) => s + sec.correct, 0);
  const totalTotal = sections.reduce((s, sec) => s + sec.total, 0);

  return {
    totals: {
      correct: totalCorrect,
      total: totalTotal,
      accuracy: accuracyOf(totalCorrect, totalTotal),
    },
    sections,
  };
}

export default buildDomainSkillTable;
