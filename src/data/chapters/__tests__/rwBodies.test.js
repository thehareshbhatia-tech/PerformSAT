/**
 * Quality gate for the R&W textbook chapter bodies (rwBodies corpus).
 *
 * Pins the locked chapter template (docs/LEARN_TEXTBOOK_OVERHAUL_PLAN.md §4):
 * every rebuilt chapter must carry the full spine — headings (roadmap through
 * one-page summary), a numbered method/rulebook, right/wrong comparisons,
 * multiple worked examples, traps, checkpoints, and a summary table — in
 * block types the renderer actually supports, with no low-signal filler, no
 * emojis, and no reference-book fingerprints.
 */

import { RW_CHAPTER_BODIES } from '../rwBodies';
import { rwChapters } from '../rwChapters';
import { LOW_SIGNAL_PATTERNS } from '../../contentTabs/schema';

// Block types SectionContent (ContentTabRenderer) renders that R&W chapter
// bodies are allowed to use. Anything else would silently render as null.
const ALLOWED_TYPES = new Set([
  'heading', 'text', 'table', 'callout', 'tip', 'keyInsight', 'trapCard',
  'strategyCard', 'example', 'steps', 'checkpointQuestion', 'comparison',
  'diagramRef',
]);

const REQUIRED_FIELDS = {
  heading: ['content'],
  text: ['content'],
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
};

// Source-book fingerprints that must never appear (originality invariant from
// knowledge/SCHEMA.md). Checked case-insensitively against all body text.
const FORBIDDEN_SOURCES = [
  /meltzer/i, /erica\b/i, /1600\.io/i, /orange book/i, /college panda/i,
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

const bodyIds = Object.keys(RW_CHAPTER_BODIES);

describe('rwBodies wiring', () => {
  test('every rwBody-source chapter resolves to a non-empty body', () => {
    rwChapters
      .filter((c) => c.source.kind === 'rwBody')
      .forEach((c) => {
        const blocks = RW_CHAPTER_BODIES[c.source.bodyId];
        expect(Array.isArray(blocks)).toBe(true);
        expect(blocks.length).toBeGreaterThan(0);
      });
  });

  test('every body key belongs to a real R&W chapter', () => {
    const chapterIds = new Set(rwChapters.map((c) => c.id));
    bodyIds.forEach((id) => expect(chapterIds.has(id)).toBe(true));
  });
});

describe.each(bodyIds)('rwBodies template contract: %s', (bodyId) => {
  const blocks = RW_CHAPTER_BODIES[bodyId];
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

  test('carries the full template spine', () => {
    const count = (type) => blocks.filter((b) => b.type === type).length;
    expect(blocks.length).toBeGreaterThanOrEqual(25);      // real chapter, not a stub
    expect(count('heading')).toBeGreaterThanOrEqual(5);    // staged structure
    expect(count('steps')).toBeGreaterThanOrEqual(2);      // roadmap + decision flow
    expect(count('comparison')).toBeGreaterThanOrEqual(3); // right/wrong pairs
    expect(count('example')).toBeGreaterThanOrEqual(3);    // 3-5 worked examples
    expect(count('trapCard')).toBeGreaterThanOrEqual(2);   // trap catalog
    expect(count('checkpointQuestion')).toBeGreaterThanOrEqual(4);
    expect(count('table')).toBeGreaterThanOrEqual(1);      // one-page summary
  });

  test('worked examples span difficulty and carry solution steps', () => {
    const examples = blocks.filter((b) => b.type === 'example');
    examples.forEach((ex) => {
      expect(['Easy', 'Medium', 'Hard']).toContain(ex.difficulty);
      expect(ex.steps.length).toBeGreaterThanOrEqual(2);
      ex.steps.forEach((s) => {
        expect(typeof s.label).toBe('string');
        expect(typeof s.content).toBe('string');
      });
    });
    expect(new Set(examples.map((e) => e.difficulty)).size).toBeGreaterThanOrEqual(2);
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
