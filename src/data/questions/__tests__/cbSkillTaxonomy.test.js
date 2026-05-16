/**
 * Verifies the CB Skill Taxonomy stays aligned with the actual bank.
 *
 * Three guarantees:
 *  1. The taxonomy lists exactly 19 official CB math skills + 11 R&W skills.
 *  2. Every pattern with ≥4 items in the bank (i.e., surfaced in the
 *     Practice Bank UI) has a mapping in PATTERN_TO_CB_SKILL. New surfaced
 *     patterns without a mapping fail this test — author must either map
 *     the pattern or rename to a canonical SAT type.
 *  3. `getQuestionsByCBSkill` returns at least one item for every CB skill
 *     where the bank has surfaced coverage.
 */

import {
  CB_MATH_SKILLS,
  CB_RW_SKILLS,
  PATTERN_TO_CB_SKILL,
  getCBSkillForPattern,
  getPatternsForCBSkill,
} from '../cbSkillTaxonomy';
import { questionBank, getQuestionsByCBSkill } from '../bank';
import { extractSatPattern } from '../extractSatPattern';

const MIN_POOL = 4;

describe('CB Skill Taxonomy', () => {
  test('has exactly 19 math skills across 4 domains', () => {
    expect(CB_MATH_SKILLS).toHaveLength(19);
    const algebraSkills = CB_MATH_SKILLS.filter(s => s.domain === 'algebra');
    const advMathSkills = CB_MATH_SKILLS.filter(s => s.domain === 'advanced-math');
    const psSkills = CB_MATH_SKILLS.filter(s => s.domain === 'problem-solving');
    const geoSkills = CB_MATH_SKILLS.filter(s => s.domain === 'geometry');
    expect(algebraSkills).toHaveLength(5);
    expect(advMathSkills).toHaveLength(3);
    expect(psSkills).toHaveLength(7);
    expect(geoSkills).toHaveLength(4);
  });

  test('has exactly 11 R&W skills', () => {
    expect(CB_RW_SKILLS).toHaveLength(11);
  });

  test('every pattern in PATTERN_TO_CB_SKILL maps to a real CB skill slug', () => {
    const validSlugs = new Set(CB_MATH_SKILLS.map(s => s.slug));
    const invalidMappings = Object.entries(PATTERN_TO_CB_SKILL)
      .filter(([, skill]) => !validSlugs.has(skill));
    expect(invalidMappings).toEqual([]);
  });

  test('getCBSkillForPattern returns the right skill object', () => {
    const skill = getCBSkillForPattern('slope-from-two-points');
    expect(skill).not.toBeNull();
    expect(skill.code).toBe('H.B.');
    expect(skill.label).toBe('Linear functions');
  });

  test('getPatternsForCBSkill returns all patterns under a skill', () => {
    const linearOneVar = getPatternsForCBSkill('linear-equations-one-variable');
    expect(linearOneVar.length).toBeGreaterThan(0);
    // sanity: known canonical patterns
    expect(linearOneVar).toContain('one-step-linear-equation');
    expect(linearOneVar).toContain('two-step-linear-equation');
  });
});

describe('Practice Bank surface area', () => {
  // Pre-compute the patterns the Practice Bank UI surfaces (≥4 items).
  const patternCounts = new Map();
  for (const q of questionBank) {
    if (!Array.isArray(q.choices) || q.choices.length < 2) continue;
    const p = extractSatPattern(q.explanation);
    if (!p) continue;
    patternCounts.set(p, (patternCounts.get(p) || 0) + 1);
  }
  const surfacedPatterns = [...patternCounts.entries()]
    .filter(([, c]) => c >= MIN_POOL)
    .map(([p]) => p);

  test(`every surfaced pattern (≥${MIN_POOL} items) has a CB skill mapping`, () => {
    const unmapped = surfacedPatterns.filter(p => !PATTERN_TO_CB_SKILL[p]);
    if (unmapped.length > 0) {
      // Surface the actual list in the failure message so the author can fix.
      throw new Error(
        `Surfaced patterns missing CB skill mapping (add to PATTERN_TO_CB_SKILL ` +
        `in cbSkillTaxonomy.js):\n  - ${unmapped.join('\n  - ')}`
      );
    }
    expect(unmapped).toEqual([]);
  });

  test('getQuestionsByCBSkill returns items for every covered CB skill', () => {
    const coveredSkills = new Set(
      surfacedPatterns.map(p => PATTERN_TO_CB_SKILL[p]).filter(Boolean)
    );
    for (const skillSlug of coveredSkills) {
      const items = getQuestionsByCBSkill(skillSlug);
      expect(items.length).toBeGreaterThan(0);
    }
  });
});
