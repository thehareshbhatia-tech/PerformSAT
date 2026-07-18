/**
 * Gates for the Learn lesson visuals (LessonVisualRenderer).
 *
 * 1. Every component in visualRegistry renders to real SVG markup without
 *    throwing — a broken diagram would otherwise fail silently at runtime.
 * 2. Every diagramRef block in the chapter corpus (bodies + strategy)
 *    references a REGISTERED visualType — an unregistered name renders as
 *    null in production (LessonVisualRenderer returns null), which reads as
 *    a silent gap in the middle of a chapter.
 */

import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { visualRegistry } from '../LessonVisualRenderer';
import { CHAPTER_BODIES } from '../../../data/chapters/bodies';
import { strategyChapters } from '../../../data/chapters/strategyChapters';

describe('visualRegistry components', () => {
  test.each(Object.keys(visualRegistry))('%s renders to SVG markup', (key) => {
    const Component = visualRegistry[key];
    const markup = ReactDOMServer.renderToStaticMarkup(React.createElement(Component));
    expect(markup).toContain('<svg');
    expect(markup).toContain('aria-label');
  });
});

describe('corpus diagramRef wiring', () => {
  const collectDiagramRefs = (blocks, source, out) => {
    (blocks || []).forEach((b) => {
      if (b && b.type === 'diagramRef') out.push({ source, visualType: b.visualType });
    });
    return out;
  };

  const refs = [];
  Object.entries(CHAPTER_BODIES).forEach(([id, blocks]) => collectDiagramRefs(blocks, id, refs));
  strategyChapters.forEach((c) => collectDiagramRefs(c.source?.blocks, c.id, refs));

  test('every diagramRef visualType is registered', () => {
    const missing = refs.filter((r) => !visualRegistry[r.visualType]);
    expect(missing).toEqual([]);
  });

  test('the corpus actually uses visuals (placement regression guard)', () => {
    // 2026-07-17 visual pass placed diagrams across math + writing chapters
    // (plus the 4 strategy refs that predate it). If this count collapses,
    // a refactor dropped the corpus's figures.
    expect(refs.length).toBeGreaterThanOrEqual(20);
  });
});
