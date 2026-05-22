import { pickInitialModuleIndex } from '../initialModule';

const fullTest = {
  id: 'practice-test-1',
  modules: [
    { section: 'reading-writing', title: 'Module 1', questions: [] },
    { section: 'reading-writing', title: 'Module 2', questions: [] },
    { section: 'math', title: 'Module 3', questions: [] },
    { section: 'math', title: 'Module 4', questions: [] },
  ],
};

describe('pickInitialModuleIndex', () => {
  it('defaults to module 0 when no savedProgress and no initialSection', () => {
    expect(pickInitialModuleIndex(fullTest, null, null)).toBe(0);
  });

  it('jumps to the first Math module when initialSection is "math"', () => {
    // Regression for "Math click starts R&W" bug: clicking the Math row on the
    // test list must land the user on Math Module 1 (index 2), not R&W M1.
    expect(pickInitialModuleIndex(fullTest, null, 'math')).toBe(2);
  });

  it('stays at module 0 when initialSection is "reading-writing"', () => {
    expect(pickInitialModuleIndex(fullTest, null, 'reading-writing')).toBe(0);
  });

  it('savedProgress.currentModule wins over initialSection (resume case)', () => {
    expect(
      pickInitialModuleIndex(fullTest, { currentModule: 3 }, 'reading-writing')
    ).toBe(3);
  });

  it('falls back to 0 when initialSection has no matching module', () => {
    expect(pickInitialModuleIndex(fullTest, null, 'science')).toBe(0);
  });

  it('handles missing test gracefully', () => {
    expect(pickInitialModuleIndex(null, null, 'math')).toBe(0);
    expect(pickInitialModuleIndex({}, null, 'math')).toBe(0);
  });
});
