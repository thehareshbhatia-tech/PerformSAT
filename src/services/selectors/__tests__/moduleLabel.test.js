import { sectionModuleLabel, sectionModuleShort } from '../moduleLabel';

describe('sectionModuleLabel', () => {
  // A full SAT lays modules out [R&W M1, R&W M2, Math M1, Math M2] by
  // continuous index. Labels must be numbered WITHIN the section.
  it('numbers full-test math modules within their section, not continuously', () => {
    expect(sectionModuleLabel('math', 2)).toBe('Math Module 1');
    expect(sectionModuleLabel('math', 3)).toBe('Math Module 2');
  });

  it('labels reading & writing modules', () => {
    expect(sectionModuleLabel('reading-writing', 0)).toBe('Reading & Writing Module 1');
    expect(sectionModuleLabel('reading-writing', 1)).toBe('Reading & Writing Module 2');
  });

  it('treats the diagnostic-engine "rw" axis the same as "reading-writing"', () => {
    expect(sectionModuleLabel('rw', 0)).toBe('Reading & Writing Module 1');
    expect(sectionModuleLabel('rw', 1)).toBe('Reading & Writing Module 2');
  });

  it('handles single-section (math-only / R&W-only) tests at indices 0/1', () => {
    expect(sectionModuleLabel('math', 0)).toBe('Math Module 1');
    expect(sectionModuleLabel('math', 1)).toBe('Math Module 2');
  });

  it('falls back to a continuous label when the section is unknown', () => {
    expect(sectionModuleLabel(null, 2)).toBe('Module 3');
    expect(sectionModuleLabel('default', 0)).toBe('Module 1');
    expect(sectionModuleLabel(undefined, undefined)).toBe('Module 1');
  });
});

describe('sectionModuleShort', () => {
  it('produces compact section-relative chips', () => {
    expect(sectionModuleShort('math', 2)).toBe('Math M1');
    expect(sectionModuleShort('math', 3)).toBe('Math M2');
    expect(sectionModuleShort('reading-writing', 0)).toBe('R&W M1');
    expect(sectionModuleShort('rw', 1)).toBe('R&W M2');
  });

  it('falls back to a continuous chip when the section is unknown', () => {
    expect(sectionModuleShort(null, 2)).toBe('M3');
  });
});
