import {
  buildDomainSkillTable,
  STRONG_ACCURACY_THRESHOLD,
} from '../domainSkillTable';

/**
 * Per-question record helper — mirrors diagnosticEngine.questionAnalysis shape.
 */
const q = (over = {}) => ({
  key: '0-0',
  moduleIndex: 0,
  questionIndex: 0,
  section: 'math',
  isCorrect: true,
  difficulty: 'medium',
  skills: ['ratios'],
  domain: 'problem-solving',
  satPattern: null,
  ...over,
});

describe('buildDomainSkillTable', () => {
  it('returns empty structure for no items', () => {
    const t = buildDomainSkillTable([]);
    expect(t.sections).toEqual([]);
    expect(t.totals).toEqual({ correct: 0, total: 0, accuracy: 0 });
    // null / undefined input is tolerated
    expect(buildDomainSkillTable(null).sections).toEqual([]);
  });

  it('splits math and R&W into separate sections that never merge', () => {
    const items = [
      q({ key: '0-0', section: 'math', domain: 'algebra', skills: ['slope-intercept-form'], isCorrect: false }),
      q({ key: '0-1', section: 'math', domain: 'algebra', skills: ['slope-intercept-form'], isCorrect: true }),
      // module-shape section value must normalize to 'rw'
      q({ key: '2-0', section: 'reading-writing', domain: 'craft-and-structure', skills: ['words-in-context'], isCorrect: false, moduleIndex: 2 }),
      q({ key: '2-1', section: 'rw', domain: 'craft-and-structure', skills: ['words-in-context'], isCorrect: true, moduleIndex: 2, questionIndex: 1 }),
    ];
    const t = buildDomainSkillTable(items);

    expect(t.sections.map(s => s.section)).toEqual(['math', 'rw']); // math first
    const math = t.sections.find(s => s.section === 'math');
    const rw = t.sections.find(s => s.section === 'rw');

    expect(math.total).toBe(2);
    expect(rw.total).toBe(2);
    // Each section only contains its own domains — no cross-contamination.
    expect(math.domains.map(d => d.domainId)).toEqual(['algebra']);
    expect(rw.domains.map(d => d.domainId)).toEqual(['craft-and-structure']);
    expect(t.totals).toEqual({ correct: 2, total: 4, accuracy: 50 });
  });

  it('preserves module-section: same domain slug in two sections stays split', () => {
    // A pathological case — same domain id appearing under both sections must
    // NOT collapse into one bucket (guards the 210-Math collapse fingerprint).
    const items = [
      q({ key: '0-0', section: 'math', domain: 'shared', skills: ['m'], isCorrect: false }),
      q({ key: '3-0', section: 'reading-writing', domain: 'shared', skills: ['r'], isCorrect: true, moduleIndex: 3 }),
    ];
    const t = buildDomainSkillTable(items);
    expect(t.sections).toHaveLength(2);
    const math = t.sections.find(s => s.section === 'math');
    const rw = t.sections.find(s => s.section === 'rw');
    expect(math.domains[0].total).toBe(1);
    expect(math.domains[0].correct).toBe(0);
    expect(rw.domains[0].total).toBe(1);
    expect(rw.domains[0].correct).toBe(1);
  });

  it('counts correct/total/accuracy per skill and rolls up to domain + section', () => {
    const items = [
      q({ key: '0-0', domain: 'algebra', skills: ['linear'], isCorrect: true }),
      q({ key: '0-1', domain: 'algebra', skills: ['linear'], isCorrect: false, questionIndex: 1 }),
      q({ key: '0-2', domain: 'algebra', skills: ['systems'], isCorrect: false, questionIndex: 2 }),
      q({ key: '0-3', domain: 'algebra', skills: ['systems'], isCorrect: false, questionIndex: 3 }),
    ];
    const t = buildDomainSkillTable(items);
    const algebra = t.sections[0].domains.find(d => d.domainId === 'algebra');

    expect(algebra.correct).toBe(1);
    expect(algebra.total).toBe(4);
    expect(algebra.accuracy).toBe(25);
    expect(algebra.misses).toBe(3);

    const linear = algebra.skills.find(s => s.skillId === 'linear');
    const systems = algebra.skills.find(s => s.skillId === 'systems');
    expect(linear).toMatchObject({ correct: 1, total: 2, accuracy: 50, misses: 1 });
    expect(systems).toMatchObject({ correct: 0, total: 2, accuracy: 0, misses: 2 });
    expect(t.sections[0]).toMatchObject({ correct: 1, total: 4, accuracy: 25 });
  });

  it('sorts skills weakest-first within a domain', () => {
    const items = [
      // strong skill: 2/2
      q({ key: '0-0', domain: 'algebra', skills: ['strong'], isCorrect: true }),
      q({ key: '0-1', domain: 'algebra', skills: ['strong'], isCorrect: true, questionIndex: 1 }),
      // mid skill: 1/2
      q({ key: '0-2', domain: 'algebra', skills: ['mid'], isCorrect: true, questionIndex: 2 }),
      q({ key: '0-3', domain: 'algebra', skills: ['mid'], isCorrect: false, questionIndex: 3 }),
      // weak skill: 0/2
      q({ key: '0-4', domain: 'algebra', skills: ['weak'], isCorrect: false, questionIndex: 4 }),
      q({ key: '0-5', domain: 'algebra', skills: ['weak'], isCorrect: false, questionIndex: 5 }),
    ];
    const t = buildDomainSkillTable(items);
    const algebra = t.sections[0].domains.find(d => d.domainId === 'algebra');
    expect(algebra.skills.map(s => s.skillId)).toEqual(['weak', 'mid', 'strong']);
  });

  it('sorts domains weakest-first within a section', () => {
    const items = [
      q({ key: '0-0', domain: 'strongDom', skills: ['a'], isCorrect: true }),
      q({ key: '0-1', domain: 'strongDom', skills: ['a'], isCorrect: true, questionIndex: 1 }),
      q({ key: '0-2', domain: 'weakDom', skills: ['b'], isCorrect: false, questionIndex: 2 }),
      q({ key: '0-3', domain: 'weakDom', skills: ['b'], isCorrect: false, questionIndex: 3 }),
    ];
    const t = buildDomainSkillTable(items);
    expect(t.sections[0].domains.map(d => d.domainId)).toEqual(['weakDom', 'strongDom']);
  });

  it('collects missed question keys (module-then-question order) + first-miss module', () => {
    const items = [
      q({ key: '2-5', moduleIndex: 2, questionIndex: 5, domain: 'd', skills: ['s'], isCorrect: false }),
      q({ key: '1-3', moduleIndex: 1, questionIndex: 3, domain: 'd', skills: ['s'], isCorrect: false }),
      q({ key: '1-1', moduleIndex: 1, questionIndex: 1, domain: 'd', skills: ['s'], isCorrect: false }),
      q({ key: '1-2', moduleIndex: 1, questionIndex: 2, domain: 'd', skills: ['s'], isCorrect: true }),
    ];
    const skill = buildDomainSkillTable(items).sections[0].domains[0].skills[0];
    expect(skill.missedKeys).toEqual(['1-1', '1-3', '2-5']);
    expect(skill.firstMissModuleIndex).toBe(1);
    expect(skill.misses).toBe(3);
  });

  it('collects distinct missed SAT Patterns for drill routing (wrong items only)', () => {
    const items = [
      q({ key: '0-0', skills: ['s'], isCorrect: false, satPattern: 'slope-from-two-points' }),
      q({ key: '0-1', skills: ['s'], isCorrect: false, satPattern: 'slope-from-two-points', questionIndex: 1 }),
      q({ key: '0-2', skills: ['s'], isCorrect: false, satPattern: 'point-slope', questionIndex: 2 }),
      // correct item's pattern must NOT leak into missedPatterns
      q({ key: '0-3', skills: ['s'], isCorrect: true, satPattern: 'y-intercept', questionIndex: 3 }),
    ];
    const skill = buildDomainSkillTable(items).sections[0].domains[0].skills[0];
    expect(skill.missedPatterns.sort()).toEqual(['point-slope', 'slope-from-two-points']);
  });

  it('marks strong domains/skills at or above the threshold (green tint), neutral below', () => {
    const items = [
      // 4/5 = 80% ⇒ strong
      q({ key: '0-0', domain: 'algebra', skills: ['s'], isCorrect: true }),
      q({ key: '0-1', domain: 'algebra', skills: ['s'], isCorrect: true, questionIndex: 1 }),
      q({ key: '0-2', domain: 'algebra', skills: ['s'], isCorrect: true, questionIndex: 2 }),
      q({ key: '0-3', domain: 'algebra', skills: ['s'], isCorrect: true, questionIndex: 3 }),
      q({ key: '0-4', domain: 'algebra', skills: ['s'], isCorrect: false, questionIndex: 4 }),
    ];
    const dom = buildDomainSkillTable(items).sections[0].domains[0];
    expect(STRONG_ACCURACY_THRESHOLD).toBe(80);
    expect(dom.accuracy).toBe(80);
    expect(dom.isStrong).toBe(true);
    expect(dom.skills[0].isStrong).toBe(true);

    const weak = buildDomainSkillTable([
      q({ key: '0-0', domain: 'algebra', skills: ['s'], isCorrect: false }),
      q({ key: '0-1', domain: 'algebra', skills: ['s'], isCorrect: true, questionIndex: 1 }),
    ]).sections[0].domains[0];
    expect(weak.accuracy).toBe(50);
    expect(weak.isStrong).toBe(false);
  });

  it('applies injected display names and falls back to humanized ids', () => {
    const items = [
      q({ key: '0-0', domain: 'craft-and-structure', skills: ['words-in-context'], section: 'rw', isCorrect: false }),
    ];
    const named = buildDomainSkillTable(items, {
      domainNames: { 'craft-and-structure': 'Craft and Structure' },
      skillNames: { 'words-in-context': 'Words in Context' },
    });
    expect(named.sections[0].domains[0].domainName).toBe('Craft and Structure');
    expect(named.sections[0].domains[0].skills[0].skillName).toBe('Words in Context');

    // No injected names ⇒ humanized fallback.
    const bare = buildDomainSkillTable(items);
    expect(bare.sections[0].domains[0].domainName).toBe('Craft And Structure');
    expect(bare.sections[0].domains[0].skills[0].skillName).toBe('Words In Context');
  });

  it('buckets items with no skill under a general skill so totals stay complete', () => {
    const items = [
      q({ key: '0-0', domain: 'algebra', skills: [], isCorrect: false }),
      q({ key: '0-1', domain: 'algebra', skills: undefined, isCorrect: true, questionIndex: 1 }),
    ];
    const dom = buildDomainSkillTable(items).sections[0].domains[0];
    expect(dom.total).toBe(2); // nothing dropped
    expect(dom.skills[0].skillId).toBe('__general__');
  });

  it('respects a custom strongThreshold', () => {
    const items = [
      q({ key: '0-0', domain: 'algebra', skills: ['s'], isCorrect: true }),
      q({ key: '0-1', domain: 'algebra', skills: ['s'], isCorrect: false, questionIndex: 1 }),
    ]; // 50%
    expect(buildDomainSkillTable(items, { strongThreshold: 50 }).sections[0].domains[0].isStrong).toBe(true);
    expect(buildDomainSkillTable(items, { strongThreshold: 51 }).sections[0].domains[0].isStrong).toBe(false);
  });
});
