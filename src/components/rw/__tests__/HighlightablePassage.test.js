import { renderToStaticMarkup } from 'react-dom/server';
import HighlightablePassage, {
  mergeHighlights,
  parsePassageMarkup,
  buildSegments,
} from '../HighlightablePassage';

describe('mergeHighlights', () => {
  it('returns [] for empty / nullish input', () => {
    expect(mergeHighlights([])).toEqual([]);
    expect(mergeHighlights(null)).toEqual([]);
    expect(mergeHighlights(undefined)).toEqual([]);
  });

  it('coalesces overlapping ranges', () => {
    expect(mergeHighlights([{ start: 0, end: 5 }, { start: 3, end: 8 }])).toEqual([
      { start: 0, end: 8 },
    ]);
  });

  it('coalesces adjacent (touching) ranges', () => {
    expect(mergeHighlights([{ start: 0, end: 5 }, { start: 5, end: 9 }])).toEqual([
      { start: 0, end: 9 },
    ]);
  });

  it('keeps disjoint ranges separate and sorted', () => {
    expect(mergeHighlights([{ start: 10, end: 12 }, { start: 0, end: 3 }])).toEqual([
      { start: 0, end: 3 },
      { start: 10, end: 12 },
    ]);
  });
});

describe('parsePassageMarkup', () => {
  it('handles empty input', () => {
    expect(parsePassageMarkup('')).toEqual({ plain: '', formats: [] });
    expect(parsePassageMarkup(null)).toEqual({ plain: '', formats: [] });
  });

  it('strips *italic* and records an em range over the plain string', () => {
    const { plain, formats } = parsePassageMarkup('a *b* c');
    expect(plain).toBe('a b c');
    expect(formats).toEqual([{ start: 2, end: 3, kind: 'em' }]);
  });

  it('strips __underline__ and records a u range', () => {
    const { plain, formats } = parsePassageMarkup('x __yz__ w');
    expect(plain).toBe('x yz w');
    expect(formats).toEqual([{ start: 2, end: 4, kind: 'u' }]);
  });

  it('renders a 4+ underscore run as a single blank token', () => {
    const { plain, formats } = parsePassageMarkup('fill ______ in');
    // the underscore run collapses to one space so offsets stay aligned
    expect(plain).toBe('fill   in');
    expect(formats).toEqual([{ start: 5, end: 6, kind: 'blank' }]);
  });

  it('leaves a lone * untouched (no closing delimiter)', () => {
    const { plain, formats } = parsePassageMarkup('2 * 3 = 6');
    expect(plain).toBe('2 * 3 = 6');
    expect(formats).toEqual([]);
  });
});

describe('buildSegments', () => {
  it('returns [] for empty plain text', () => {
    expect(buildSegments('', [], [], false)).toEqual([]);
  });

  it('marks the highlighted span and carries its range for click-to-remove', () => {
    const segs = buildSegments('hello world', [{ start: 0, end: 5 }], [], false);
    const hl = segs.find((s) => s.highlight);
    expect(hl).toBeTruthy();
    expect(hl.text).toBe('hello');
    expect(hl.start).toBe(0);
    expect(hl.end).toBe(5);
  });

  it('suppresses highlights when hidden=true (text still present)', () => {
    const segs = buildSegments('hello world', [{ start: 0, end: 5 }], [], true);
    expect(segs.some((s) => s.highlight)).toBe(false);
    expect(segs.map((s) => s.text).join('')).toBe('hello world');
  });

  it('lets a format and a highlight co-occur on the same span', () => {
    const { plain, formats } = parsePassageMarkup('a *b* c');
    const segs = buildSegments(plain, [{ start: 2, end: 3 }], formats, false);
    const both = segs.find((s) => s.em && s.highlight);
    expect(both).toBeTruthy();
    expect(both.text).toBe('b');
  });

  it('reconstructs the full plain string across all segments', () => {
    const segs = buildSegments('abcdef', [{ start: 2, end: 4 }], [], false);
    expect(segs.map((s) => s.text).join('')).toBe('abcdef');
  });
});

describe('rendered blank keeps DOM text aligned with the plain string', () => {
  // getCharOffsetWithin walks TEXT nodes only. A childless blank span
  // contributes no text node, so every selection after a blank landed one
  // char off per preceding blank. The blank must render exactly ONE text
  // character (an NBSP) to match the one char parsePassageMarkup emits.
  it('renders exactly one NBSP inside the blank span', () => {
    const html = renderToStaticMarkup(
      <HighlightablePassage text="fill ______ in" highlights={[]} onAddHighlight={() => {}} />
    );
    expect(html).toMatch(/<span class="rw-blank" aria-label="blank">\u00A0<\/span>/);
  });

  it('keeps total rendered text length equal to the plain string length', () => {
    const raw = 'fill ______ in, then ____ again';
    const html = renderToStaticMarkup(
      <HighlightablePassage text={raw} highlights={[]} onAddHighlight={() => {}} />
    );
    const domText = html.replace(/<[^>]+>/g, '');
    expect(domText.length).toBe(parsePassageMarkup(raw).plain.length);
  });
});
