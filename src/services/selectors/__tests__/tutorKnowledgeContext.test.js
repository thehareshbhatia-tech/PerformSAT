import { buildTutorKnowledgeContext, resolveCbSkill } from '../tutorKnowledgeContext';
import { TUTOR_KNOWLEDGE } from '../../../data/knowledge/tutorKnowledge';

describe('resolveCbSkill', () => {
  it('passes through a CB skill slug (R&W path)', () => {
    expect(resolveCbSkill('boundaries')).toBe('boundaries');
    expect(resolveCbSkill('words-in-context')).toBe('words-in-context');
  });
  it('maps a math bank skill to its CB skill', () => {
    expect(resolveCbSkill('slope-intercept-form')).toBe('linear-functions');
    expect(resolveCbSkill('circle-equation')).toBe('circles');
    expect(resolveCbSkill('soh-cah-toa')).toBe('right-triangles-trig');
    expect(resolveCbSkill('percent-of-value')).toBe('percentages');
    expect(resolveCbSkill('quadratic-formula')).toBe('nonlinear-equations');
  });
  it('returns null for an unknown skill', () => {
    expect(resolveCbSkill('not-a-real-skill')).toBeNull();
    expect(resolveCbSkill('')).toBeNull();
    expect(resolveCbSkill(undefined)).toBeNull();
  });
});

describe('buildTutorKnowledgeContext', () => {
  it('returns "" with no usable skills', () => {
    expect(buildTutorKnowledgeContext({})).toBe('');
    expect(buildTutorKnowledgeContext({ skills: [] })).toBe('');
    expect(buildTutorKnowledgeContext({ skills: ['not-a-real-skill'] })).toBe('');
  });

  it('emits an expert misconception block for a resolvable skill', () => {
    const block = buildTutorKnowledgeContext({ skills: ['boundaries'] });
    expect(block).toContain('>>> EXPERT MISCONCEPTION MAP <<<');
    expect(block).toContain('ROOT CAUSE');
    expect(block.split('\n').some((l) => l.startsWith('- '))).toBe(true);
  });

  it('resolves a math bank skill through to knowledge', () => {
    const block = buildTutorKnowledgeContext({ skills: ['slope-intercept-form'] });
    expect(block).toContain('>>> EXPERT MISCONCEPTION MAP <<<');
    expect(block.length).toBeGreaterThan(0);
  });

  it('respects the hard char cap', () => {
    // two content-rich skills should not blow past the cap
    const block = buildTutorKnowledgeContext({ skills: ['boundaries', 'nonlinear-functions'] });
    expect(block.length).toBeLessThanOrEqual(1400);
  });

  it('caps the number of skills injected', () => {
    const block = buildTutorKnowledgeContext({
      skills: ['boundaries', 'words-in-context', 'inferences'],
    });
    // only up to MAX_SKILLS (2) expert-model lines appear
    const modelLines = block.split('\n').filter((l) => l.startsWith('How an expert holds this skill:'));
    expect(modelLines.length).toBeLessThanOrEqual(2);
  });

  it('every generated knowledge entry has at least one misconception', () => {
    const empties = Object.entries(TUTOR_KNOWLEDGE).filter(([, v]) => !v.misc || v.misc.length === 0);
    expect(empties).toEqual([]);
  });
});
