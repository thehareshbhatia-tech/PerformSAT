import { buildTutorKnowledgeContext, buildTutorPlaybookContext, resolveCbSkill } from '../tutorKnowledgeContext';
import { TUTOR_KNOWLEDGE, EXPERT_PLAYBOOK } from '../../../data/knowledge/tutorKnowledge';

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
  it('resolves the topic-file tokens closed in the 2026-07-14 coverage audit', () => {
    expect(resolveCbSkill('graph-to-equation')).toBe('linear-functions');
    expect(resolveCbSkill('best-fit-line')).toBe('two-variable-data');
    expect(resolveCbSkill('system-of-equations')).toBe('linear-systems');
    // the one previously-uncovered bank item (linearEquations "Deriving Equations", id 7)
    // carries both graph-to-equation and best-fit-line — with both mapped it now injects.
    expect(buildTutorKnowledgeContext({ skills: ['graph-to-equation', 'best-fit-line'] })).not.toBe('');
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
    expect(block).toContain('root cause');
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
    expect(block.length).toBeLessThanOrEqual(3600);
  });

  it('injects the expert method (solve-steps), not just the misconception map', () => {
    const block = buildTutorKnowledgeContext({ skills: ['slope-intercept-form'] });
    expect(block).toContain('How an expert works it:');
  });

  it('injects what mastery of the skill looks like', () => {
    const block = buildTutorKnowledgeContext({ skills: ['percent-of-value'] });
    expect(block).toContain('What mastery looks like:');
  });

  it('matches the coaching angle to the student mastery tier', () => {
    const struggling = buildTutorKnowledgeContext({ skills: ['percent-of-value'], masteryPct: 20 });
    const topScorer = buildTutorKnowledgeContext({ skills: ['percent-of-value'], masteryPct: 95 });
    expect(struggling).toContain('Coaching angle for THIS student (they are still building this skill):');
    expect(topScorer).toContain('Coaching angle for THIS student (they are pushing for a top score):');
    // the percentages node authors distinct tier advice, so the lines must differ
    expect(struggling).not.toBe(topScorer);
  });

  it('defaults the coaching tier to mid-level when mastery is unknown', () => {
    const block = buildTutorKnowledgeContext({ skills: ['percent-of-value'] });
    expect(block).toContain('Coaching angle for THIS student (they are at a developing level here):');
  });

  it('every generated knowledge entry has an expert-method approach', () => {
    const empties = Object.entries(TUTOR_KNOWLEDGE).filter(([, v]) => !v.approach || v.approach.length === 0);
    expect(empties).toEqual([]);
  });

  it('every generated knowledge entry has mastery criteria and teaching tiers', () => {
    const noMastery = Object.entries(TUTOR_KNOWLEDGE).filter(([, v]) => !v.mastery);
    const noTeach = Object.entries(TUTOR_KNOWLEDGE).filter(([, v]) => !v.teach);
    expect(noMastery).toEqual([]);
    expect(noTeach).toEqual([]);
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

  it('caps injected misconceptions at 5 per skill', () => {
    const block = buildTutorKnowledgeContext({ skills: ['percent-of-value'] });
    const bullets = block.split('\n').filter((l) => l.startsWith('- '));
    expect(bullets.length).toBeLessThanOrEqual(5);
    expect(bullets.length).toBeGreaterThanOrEqual(3);
  });
});

describe('buildTutorPlaybookContext', () => {
  it('emits a section playbook for math and rw', () => {
    const math = buildTutorPlaybookContext({ section: 'math' });
    const rw = buildTutorPlaybookContext({ section: 'rw' });
    expect(math).toContain('>>> SAT EXPERT PLAYBOOK (MATH) <<<');
    expect(rw).toContain('>>> SAT EXPERT PLAYBOOK (READING & WRITING) <<<');
    expect(math.split('\n').filter((l) => l.startsWith('- ')).length).toBeGreaterThanOrEqual(4);
    expect(rw.split('\n').filter((l) => l.startsWith('- ')).length).toBeGreaterThanOrEqual(4);
  });
  it('returns "" for an unknown section', () => {
    expect(buildTutorPlaybookContext({})).toBe('');
    expect(buildTutorPlaybookContext({ section: 'science' })).toBe('');
  });
  it('stays within its char cap', () => {
    expect(buildTutorPlaybookContext({ section: 'math' }).length).toBeLessThanOrEqual(2000);
    expect(buildTutorPlaybookContext({ section: 'rw' }).length).toBeLessThanOrEqual(2000);
  });
  it('generated playbook data covers both sections', () => {
    expect(EXPERT_PLAYBOOK.math.length).toBeGreaterThanOrEqual(5);
    expect(EXPERT_PLAYBOOK.rw.length).toBeGreaterThanOrEqual(5);
  });
});
