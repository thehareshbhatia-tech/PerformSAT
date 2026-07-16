/**
 * Contract tests for the Learn-tab chapter index.
 *
 * Pins the shape the LearnTab / ChapterReader components (and the parallel
 * content agent) build against: LEARN_UNITS ordering + chapterId wiring,
 * getChapter lookups, and that every contentTab-source moduleId resolves to a
 * real module in allContentTabs.
 */

import { LEARN_UNITS, LEARN_SECTIONS, ALL_CHAPTERS, getChapter } from '../index';
import { mathChapters } from '../mathChapters';
import { allContentTabs } from '../../contentTabs/index';

describe('LEARN_UNITS', () => {
  test('every unit carries id, label, section, and a chapterIds array', () => {
    LEARN_UNITS.forEach((u) => {
      expect(typeof u.id).toBe('string');
      expect(typeof u.label).toBe('string');
      expect(['strategy', 'reading', 'writing', 'math']).toContain(u.section);
      expect(Array.isArray(u.chapterIds)).toBe(true);
    });
  });

  test('sections cover the four fixed Learn sections in order', () => {
    expect(LEARN_SECTIONS.map((s) => s.id)).toEqual(['strategy', 'reading', 'writing', 'math']);
  });

  test('the four math units carry the 23 math chapters', () => {
    const mathIds = LEARN_UNITS.filter((u) => u.section === 'math').flatMap((u) => u.chapterIds);
    expect(mathIds).toHaveLength(23);
    expect(new Set(mathIds).size).toBe(23); // no dupes
  });
});

describe('getChapter + ALL_CHAPTERS', () => {
  test('every chapterId referenced by a unit resolves via getChapter', () => {
    LEARN_UNITS.flatMap((u) => u.chapterIds).forEach((id) => {
      expect(getChapter(id)).toBeTruthy();
    });
  });

  test('getChapter returns null for an unknown id', () => {
    expect(getChapter('does-not-exist')).toBeNull();
  });

  test('chapters expose the fixed contract fields', () => {
    ALL_CHAPTERS.forEach((c) => {
      expect(typeof c.id).toBe('string');
      expect(typeof c.unitId).toBe('string');
      expect(typeof c.title).toBe('string');
      expect(typeof c.blurb).toBe('string');
      expect(Number.isInteger(c.readMinutes)).toBe(true);
      expect(Array.isArray(c.cbSkills)).toBe(true);
      expect(['contentTab', 'blocks', 'body']).toContain(c.source.kind);
    });
  });
});

describe('math chapter contentTab wiring', () => {
  test('every contentTab-source moduleId exists in allContentTabs', () => {
    mathChapters
      .filter((c) => c.source.kind === 'contentTab')
      .forEach((c) => {
        expect(allContentTabs[c.source.moduleId]).toBeTruthy();
        expect(allContentTabs[c.source.moduleId].sections.learn).toBeTruthy();
      });
  });

  test('every body-source math chapter has a registered body', () => {
    const { CHAPTER_BODIES } = require('../bodies');
    mathChapters
      .filter((c) => c.source.kind === 'body')
      .forEach((c) => {
        expect(Array.isArray(CHAPTER_BODIES[c.source.bodyId])).toBe(true);
        expect(CHAPTER_BODIES[c.source.bodyId].length).toBeGreaterThan(0);
      });
  });
});
