import { activitySection, matchesSectionFilter, SECTION_FILTERS } from '../planSection';

describe('activitySection', () => {
  test('explicit section tags win', () => {
    expect(activitySection({ type: 'practice', section: 'rw' })).toBe('rw');
    expect(activitySection({ type: 'practice', section: 'math' })).toBe('math');
  });

  test('module-coordinate activities are math-curriculum', () => {
    expect(activitySection({ type: 'practice', moduleId: 'percents', sectionName: 'Percent Change' })).toBe('math');
  });

  test('strategy/review/test (and null) are section-agnostic', () => {
    expect(activitySection({ type: 'strategy', title: 'Trap drill' })).toBeNull();
    expect(activitySection({ type: 'review' })).toBeNull();
    expect(activitySection({ type: 'test' })).toBeNull();
    expect(activitySection(null)).toBeNull();
  });
});

describe('matchesSectionFilter', () => {
  const rw = { type: 'practice', section: 'rw' };
  const math = { type: 'practice', moduleId: 'percents' };
  const strategy = { type: 'strategy' };

  test('all (or missing) filter passes everything', () => {
    expect(matchesSectionFilter(rw, 'all')).toBe(true);
    expect(matchesSectionFilter(math, undefined)).toBe(true);
  });

  test('math filter keeps math + section-agnostic, drops rw', () => {
    expect(matchesSectionFilter(math, 'math')).toBe(true);
    expect(matchesSectionFilter(strategy, 'math')).toBe(true);
    expect(matchesSectionFilter(rw, 'math')).toBe(false);
  });

  test('rw filter keeps rw + section-agnostic, drops math', () => {
    expect(matchesSectionFilter(rw, 'rw')).toBe(true);
    expect(matchesSectionFilter(strategy, 'rw')).toBe(true);
    expect(matchesSectionFilter(math, 'rw')).toBe(false);
  });
});

describe('SECTION_FILTERS', () => {
  test('mirrors the Practice Bank tabs plus All', () => {
    expect(SECTION_FILTERS.map(f => f.id)).toEqual(['all', 'math', 'rw']);
    expect(SECTION_FILTERS.find(f => f.id === 'rw').label).toBe('Reading & Writing');
  });
});
