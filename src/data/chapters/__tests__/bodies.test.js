/**
 * Quality gate for the Learn-tab lesson bodies corpus (R&W + math).
 *
 * Pins the LEAN "review / cheat-sheet" contract (adopted 2026-07-12, replacing
 * the old dense-textbook template): each body is a focused per-skill lesson —
 * short sectioned teaching in plain language, then a couple of worked examples
 * and check-yourself questions — in block types the renderer actually supports,
 * with no low-signal filler, no emojis, and no reference-book fingerprints.
 */

import { CHAPTER_BODIES } from '../bodies';
import { ALL_CHAPTERS } from '../index';
import { LOW_SIGNAL_PATTERNS } from '../../contentTabs/schema';

// Block types SectionContent (ContentTabRenderer) renders that R&W chapter
// bodies are allowed to use. Anything else would silently render as null.
const ALLOWED_TYPES = new Set([
  'heading', 'text', 'list', 'table', 'callout', 'tip', 'keyInsight', 'trapCard',
  'strategyCard', 'example', 'steps', 'checkpointQuestion', 'comparison',
  'diagramRef', 'formula', 'formulaGrid',
]);

const REQUIRED_FIELDS = {
  heading: ['content'],
  text: ['content'],
  list: ['items'],
  table: ['headers', 'rows'],
  callout: ['content'],
  tip: ['content'],
  keyInsight: ['content'],
  trapCard: ['wrong', 'correction'],
  strategyCard: ['title', 'content'],
  example: ['problem', 'steps'],
  steps: ['items'],
  checkpointQuestion: ['question', 'answer'],
  comparison: ['items'],
  diagramRef: ['visualType'],
  formula: ['content'],
  formulaGrid: ['items'],
};

// Source-book fingerprints that must never appear (originality invariant from
// knowledge/SCHEMA.md). Checked case-insensitively against all body text.
const FORBIDDEN_SOURCES = [
  /meltzer/i, /\berica\b/i, /1600\.io/i, /orange book/i, /college panda/i,
  /\bpanda\b/i, /barron/i, /kaplan/i, /princeton review/i, /khan academy/i,
];

// Emoji / pictograph ban (house rule: SVG icons or text, never emoji).
const EMOJI_RE = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/u;

function collectStrings(value, out) {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => collectStrings(v, out));
  else if (value && typeof value === 'object') Object.values(value).forEach((v) => collectStrings(v, out));
  return out;
}

const bodyIds = Object.keys(CHAPTER_BODIES);

describe('bodies wiring', () => {
  test('every body-source chapter resolves to a non-empty body', () => {
    ALL_CHAPTERS
      .filter((c) => c.source.kind === 'body')
      .forEach((c) => {
        const blocks = CHAPTER_BODIES[c.source.bodyId];
        expect(Array.isArray(blocks)).toBe(true);
        expect(blocks.length).toBeGreaterThan(0);
      });
  });

  test('every body key belongs to a real R&W chapter', () => {
    const chapterIds = new Set(ALL_CHAPTERS.map((c) => c.id));
    bodyIds.forEach((id) => expect(chapterIds.has(id)).toBe(true));
  });
});

describe.each(bodyIds)('bodies template contract: %s', (bodyId) => {
  const blocks = CHAPTER_BODIES[bodyId];
  const allText = collectStrings(blocks, []).join('\n');

  test('uses only renderer-supported block types with required fields', () => {
    blocks.forEach((block, i) => {
      expect(ALLOWED_TYPES.has(block.type)).toBe(true);
      (REQUIRED_FIELDS[block.type] || []).forEach((field) => {
        if (block[field] === undefined || block[field] === null) {
          throw new Error(`${bodyId} block[${i}] (${block.type}) missing '${field}'`);
        }
      });
    });
  });

  test('carries the lean review spine', () => {
    const count = (type) => blocks.filter((b) => b.type === type).length;
    // Lean "review / cheat-sheet" contract (replaced the old dense-textbook
    // spine on 2026-07-12): a focused per-skill lesson teaches in short
    // sections, then lets the student practice. No forced comparison grids,
    // trap-card catalogs, or summary tables.
    expect(blocks.length).toBeGreaterThanOrEqual(8);        // a real lesson, not a stub
    expect(count('heading')).toBeGreaterThanOrEqual(3);     // sectioned teaching
    expect(count('example')).toBeGreaterThanOrEqual(4);     // balanced-bump: 4 worked examples
    expect(count('checkpointQuestion')).toBeGreaterThanOrEqual(3); // balanced-bump: 3 check-yourself
  });

  test('worked examples carry a valid difficulty and solution steps', () => {
    const examples = blocks.filter((b) => b.type === 'example');
    examples.forEach((ex) => {
      expect(['Easy', 'Medium', 'Hard']).toContain(ex.difficulty);
      expect(ex.steps.length).toBeGreaterThanOrEqual(2);
      ex.steps.forEach((s) => {
        expect(typeof s.label).toBe('string');
        expect(typeof s.content).toBe('string');
      });
    });
  });

  test('no low-signal filler phrasing', () => {
    LOW_SIGNAL_PATTERNS.forEach((pattern) => {
      const m = allText.match(pattern);
      if (m) throw new Error(`${bodyId}: low-signal phrase "${m[0]}"`);
    });
  });

  test('no emojis and no source-book fingerprints', () => {
    const emoji = allText.match(EMOJI_RE);
    if (emoji) throw new Error(`${bodyId}: emoji "${emoji[0]}" found`);
    FORBIDDEN_SOURCES.forEach((pattern) => {
      const m = allText.match(pattern);
      if (m) throw new Error(`${bodyId}: source fingerprint "${m[0]}"`);
    });
  });
});
