/**
 * Composition invariants for the authored-textbook Learn system — pins the
 * exact failure modes this system has already had once (audit 2026-07-19):
 * type-malformed block fields crash the renderer, manual heading numbers
 * double under auto-numbering, a displaced chapterOpener silently disables
 * ALL numbering, dangling Figure references, and the ORDER-DEPENDENT
 * narrative sequence (bridging ledes) drifting under an innocent re-sort.
 * Covers BOTH corpora: bodies (gated elsewhere for content quality) and the
 * strategy chapters (previously ungated).
 */

import { CHAPTER_BODIES } from '../bodies';
import { strategyChapters } from '../strategyChapters';
import { LEARN_UNITS, ALL_CHAPTERS } from '../index';

// Per-type FIELD TYPES the renderer dereferences without guards. The existing
// gate only checked presence — `items: 'a string'` shipped green and crashed
// at runtime.
const FIELD_TYPES = {
  heading: { content: 'string' },
  text: { content: 'string' },
  list: { items: 'string[]' },
  table: { headers: 'string[]', rows: 'array[]' },
  callout: { content: 'string' },
  tip: { content: 'string' },
  keyInsight: { content: 'string' },
  trapCard: { wrong: 'string' },
  strategyCard: { title: 'string', content: 'string' },
  example: { steps: 'array' },
  steps: { items: 'array' },
  checkpointQuestion: { question: 'string', answer: 'string' },
  formulaGrid: { items: 'array' },
  summary: { points: 'string[]' },
  aside: { content: 'string' },
  chapterOpener: { lede: 'string' },
};

function checkFieldType(value, kind) {
  switch (kind) {
    case 'string': return typeof value === 'string';
    case 'array': return Array.isArray(value);
    case 'string[]': return Array.isArray(value) && value.every(v => typeof v === 'string');
    case 'array[]': return Array.isArray(value) && value.every(v => Array.isArray(v));
    default: return true;
  }
}

const CORPORA = [
  ...Object.entries(CHAPTER_BODIES).map(([id, blocks]) => [`body:${id}`, blocks]),
  ...strategyChapters.map((ch) => [`strategy:${ch.id}`, ch.source?.blocks || []]),
];

describe.each(CORPORA)('composition invariants: %s', (label, blocks) => {
  test('block fields carry the TYPES the renderer dereferences', () => {
    blocks.forEach((block, i) => {
      const spec = FIELD_TYPES[block.type];
      if (!spec) return;
      Object.entries(spec).forEach(([field, kind]) => {
        if (block[field] === undefined || block[field] === null) return; // presence gated elsewhere
        if (!checkFieldType(block[field], kind)) {
          throw new Error(`${label} block[${i}] (${block.type}) field '${field}' is not ${kind}`);
        }
      });
    });
  });

  test('chapterOpener, when present, is block 0 (composed mode is positional)', () => {
    const openerIdx = blocks.findIndex(b => b.type === 'chapterOpener');
    if (openerIdx > 0) {
      throw new Error(`${label}: chapterOpener at index ${openerIdx} — composed mode triggers on blocks[0] only, so ALL numbering silently turns off`);
    }
  });

  test('no manual numbering in headings (auto-numbering would double it)', () => {
    blocks.forEach((block, i) => {
      if (block.type !== 'heading' || typeof block.content !== 'string') return;
      if (/^\s*\d+[.)]\s/.test(block.content)) {
        throw new Error(`${label} block[${i}]: heading starts with a manual number ('${block.content.slice(0, 30)}…')`);
      }
    });
  });

  test('prose Figure references never exceed the figure count', () => {
    const figureCount = blocks.filter(b => b.type === 'diagramRef').length;
    const texts = [];
    const collect = (v) => {
      if (typeof v === 'string') texts.push(v);
      else if (Array.isArray(v)) v.forEach(collect);
      else if (v && typeof v === 'object') Object.values(v).forEach(collect);
    };
    collect(blocks);
    const referenced = new Set();
    texts.forEach(t => {
      for (const m of t.matchAll(/Figure\s+(\d+)/g)) referenced.add(Number(m[1]));
    });
    referenced.forEach(n => {
      if (n < 1 || n > figureCount) {
        throw new Error(`${label}: prose references Figure ${n} but the chapter has ${figureCount} figure(s)`);
      }
    });
  });
});

describe('narrative order (ORDER-DEPENDENT — bridging ledes assume this sequence)', () => {
  test('unit-by-unit chapter id sequence matches the pinned snapshot', () => {
    // Render order = UNIT_REGISTRY order × per-unit chapterIds. The 9b2f673
    // reorder wrote bridging ledes against exactly this sequence; an innocent
    // re-sort silently breaks all of them. Update this snapshot ONLY when
    // deliberately re-sequencing the narrative (and re-writing the ledes).
    const sequence = LEARN_UNITS.flatMap(u => u.chapterIds);
    expect(sequence).toMatchSnapshot();
    // And every chapter appears exactly once.
    expect(new Set(sequence).size).toBe(sequence.length);
    expect(sequence.length).toBe(ALL_CHAPTERS.length);
  });
});
