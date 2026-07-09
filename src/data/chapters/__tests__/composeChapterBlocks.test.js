/**
 * Depth tests for the contentTab chapter composer.
 *
 * Guards the "thin module tab" regression: the module-level tabs are ~1.4k-char
 * summaries, while the real textbook content lives in the per-lesson tab maps.
 * These tests pin that composeChapterSection stitches the per-lesson content
 * (several thousand chars, with checkpoint questions) for every math chapter.
 */

import { composeChapterSection } from '../composeChapterBlocks';
import { mathChapters } from '../mathChapters';

/** Recursively extracts every string value from a block tree into one string. */
const extractText = (node) => {
  if (typeof node === 'string') return ` ${node}`;
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node && typeof node === 'object') return Object.values(node).map(extractText).join('');
  return '';
};

const statsFor = (moduleId) => {
  const section = composeChapterSection(moduleId);
  const text = extractText(section?.blocks || []);
  return {
    blocks: section?.blocks?.length || 0,
    chars: text.length,
    words: (text.match(/\S+/g) || []).length,
    checkpoints: (section?.blocks || []).filter((b) => b.type === 'checkpointQuestion').length,
  };
};

describe('composeChapterSection', () => {
  test('linear-equations composes deep content with checkpoint questions', () => {
    const s = statsFor('linear-equations');
    expect(s.chars).toBeGreaterThan(5000);
    expect(s.checkpoints).toBeGreaterThan(0);
  });

  test('every math chapter composes a non-trivial body with checkpoints', () => {
    mathChapters.forEach((c) => {
      const s = statsFor(c.source.moduleId);
      expect(s.blocks).toBeGreaterThan(5);
      // Floor of 1500 chars: equivalent-expressions and radians-degrees are
      // genuine single-lesson modules (~2k chars); everything else is 4k-28k.
      expect(s.chars).toBeGreaterThan(1500);
      expect(s.checkpoints).toBeGreaterThan(0);
    });
  });

  test('returns null for an unknown module', () => {
    expect(composeChapterSection('no-such-module')).toBeNull();
  });

  test('readMinutes in mathChapters roughly matches composed volume (~180wpm)', () => {
    mathChapters.forEach((c) => {
      const s = statsFor(c.source.moduleId);
      const estimated = Math.max(1, Math.round(s.words / 180));
      // Allow slack — readMinutes is an editorial estimate, not a formula.
      expect(Math.abs(c.readMinutes - estimated)).toBeLessThanOrEqual(Math.max(3, estimated * 0.35));
    });
  });
});
