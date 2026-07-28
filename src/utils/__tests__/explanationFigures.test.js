import {
  parseFigureSpec,
  extractExplanationFigures,
  SUPPORTED_FIGURE_TYPES,
  FIGURE_PLACEHOLDER_RE,
} from '../explanationFigures';

const TRIANGLE = JSON.stringify({
  type: 'rightTriangle',
  params: { sideLabels: ['9', '12', '15'] },
  caption: 'The $9$-$12$-$15$ triangle',
});

const block = (body) => '```seva-figure\n' + body + '\n```';

describe('parseFigureSpec', () => {
  it('accepts a valid spec with caption', () => {
    const spec = parseFigureSpec(TRIANGLE);
    expect(spec).toEqual({
      type: 'rightTriangle',
      params: { sideLabels: ['9', '12', '15'] },
      caption: 'The $9$-$12$-$15$ triangle',
    });
  });

  it('defaults missing params to {} and missing caption to null', () => {
    expect(parseFigureSpec('{"type": "dotPlot"}')).toEqual({ type: 'dotPlot', params: {}, caption: null });
  });

  it('rejects malformed JSON, unknown types, and bad shapes', () => {
    expect(parseFigureSpec('{oops')).toBeNull();
    expect(parseFigureSpec('{"type": "hologram", "params": {}}')).toBeNull();
    expect(parseFigureSpec('{"type": "dotPlot", "params": []}')).toBeNull();
    expect(parseFigureSpec('{"type": "dotPlot", "caption": 7}')).toBeNull();
    expect(parseFigureSpec('[1,2]')).toBeNull();
    expect(parseFigureSpec('')).toBeNull();
  });

  it('supports every QuestionDiagram dispatcher type', () => {
    for (const type of SUPPORTED_FIGURE_TYPES) {
      expect(parseFigureSpec(JSON.stringify({ type, params: {} }))).not.toBeNull();
    }
  });
});

describe('extractExplanationFigures', () => {
  it('is a no-op without fences', () => {
    const { text, figures } = extractExplanationFigures('**Step 1:** plain prose.');
    expect(text).toBe('**Step 1:** plain prose.');
    expect(figures).toHaveLength(0);
  });

  it('swaps a valid block for a placeholder line and returns the spec', () => {
    const src = 'Step 2: $b = 12$.\n' + block(TRIANGLE) + '\nDone.';
    const { text, figures } = extractExplanationFigures(src);
    expect(figures).toHaveLength(1);
    expect(figures[0].type).toBe('rightTriangle');
    expect(text).not.toContain('```');
    expect(text).not.toContain('rightTriangle');
    const placeholderLine = text.split('\n').find((l) => FIGURE_PLACEHOLDER_RE.test(l.trim()));
    expect(placeholderLine).toBeTruthy();
    expect(text).toContain('Done.');
  });

  it('strips invalid blocks without emitting a placeholder', () => {
    const src = 'Before.\n' + block('{not json') + '\nAfter.';
    const { text, figures } = extractExplanationFigures(src);
    expect(figures).toHaveLength(0);
    expect(text).not.toContain('```');
    expect(text).not.toContain('not json');
    expect(text).toContain('Before.');
    expect(text).toContain('After.');
  });

  it('truncates a trailing unclosed fence so raw JSON never shows', () => {
    const src = 'Prose stays.\n```seva-figure\n{"type": "dotPlot"';
    const { text, figures } = extractExplanationFigures(src);
    expect(figures).toHaveLength(0);
    expect(text).toBe('Prose stays.\n');
  });

  it('handles multiple blocks with independent indices', () => {
    const src = block(TRIANGLE) + '\nMiddle.\n' + block('{"type": "dotPlot", "params": {"values": [1, 2, 2, 5]}}');
    const { text, figures } = extractExplanationFigures(src);
    expect(figures).toHaveLength(2);
    expect(figures[1].type).toBe('dotPlot');
    const placeholders = text.split('\n').filter((l) => FIGURE_PLACEHOLDER_RE.test(l.trim()));
    expect(placeholders).toHaveLength(2);
  });
});
