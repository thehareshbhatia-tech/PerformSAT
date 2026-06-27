import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import './HighlightablePassage.css';

// ============================================
// Bluebook-style highlightable passage (R&W)
// ============================================
//
// Shared between the timed practice-test flow (PracticeTest.jsx) and the
// study-plan drill flow (AssignedPracticeShell.jsx) so both surfaces offer the
// same select-to-highlight / click-to-remove annotation a student gets in the
// real Bluebook. Highlights are tracked as char-offset ranges over the PLAIN
// (markup-stripped) passage string; the consumer owns the range state and the
// hide/clear controls. The component is purely presentational — typography is
// controlled by the `className` the consumer passes (the test uses its cream
// `--pt-*` palette; the drill uses its `--pr-*` palette), while the highlight
// swatch itself is self-contained in HighlightablePassage.css.

/**
 * Walk the text nodes inside `container` to convert a DOM (node, offset)
 * selection boundary into a character offset against the container's flattened
 * text. Keeps selection-based highlighting aligned with the plain string the
 * highlight ranges are stored against.
 *
 * @param {HTMLElement} container - the passage container element
 * @param {Node} node - the DOM node a selection boundary sits in
 * @param {number} offset - the offset within `node`
 * @returns {number} char offset from the start of the container's text
 */
export function getCharOffsetWithin(container, node, offset) {
  if (!container || !node) return 0;
  let charOffset = 0;
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
  let curr;
  while ((curr = walker.nextNode())) {
    if (curr === node) return charOffset + offset;
    charOffset += curr.textContent.length;
  }
  return charOffset;
}

/**
 * Coalesce overlapping / adjacent highlight ranges into a minimal sorted set
 * so re-highlighting an already-covered span doesn't create slivers.
 *
 * @param {Array<{start:number,end:number}>} highlights
 * @returns {Array<{start:number,end:number}>} merged, start-sorted ranges
 */
export function mergeHighlights(highlights) {
  if (!highlights || highlights.length === 0) return [];
  const sorted = [...highlights].sort((a, b) => a.start - b.start);
  const merged = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    const last = merged[merged.length - 1];
    if (sorted[i].start <= last.end) last.end = Math.max(last.end, sorted[i].end);
    else merged.push({ ...sorted[i] });
  }
  return merged;
}

/**
 * Strip markup `*...*` (italic) and `__...__` (underline) from passage text
 * to produce a plain string AND a list of formatting ranges over the plain
 * string. Highlight char offsets are computed against the plain string, so
 * markup-aware rendering and selection-based highlighting stay aligned.
 *
 * @param {string} text - raw passage text with inline markup
 * @returns {{plain:string, formats:Array<{start:number,end:number,kind:string}>}}
 *   kind is 'em' | 'u' | 'blank'
 */
export function parsePassageMarkup(text) {
  if (!text) return { plain: '', formats: [] };
  const formats = [];
  let plain = '';
  let i = 0;
  while (i < text.length) {
    // Convention-question blank: 4+ consecutive underscores → render as styled placeholder.
    // Replace with a non-breaking-space token so highlights still align cleanly.
    if (text[i] === '_' && text[i + 1] === '_' && text[i + 2] === '_' && text[i + 3] === '_') {
      let j = i;
      while (j < text.length && text[j] === '_') j++;
      const start = plain.length;
      plain += ' ';
      formats.push({ start, end: plain.length, kind: 'blank' });
      i = j;
      continue;
    }
    if (text[i] === '_' && text[i + 1] === '_') {
      // underline (paired __...__)
      const end = text.indexOf('__', i + 2);
      if (end !== -1) {
        const inner = text.slice(i + 2, end);
        const start = plain.length;
        plain += inner;
        formats.push({ start, end: plain.length, kind: 'u' });
        i = end + 2;
        continue;
      }
    }
    if (text[i] === '*') {
      const end = text.indexOf('*', i + 1);
      if (end !== -1 && end > i + 1) {
        const inner = text.slice(i + 1, end);
        const start = plain.length;
        plain += inner;
        formats.push({ start, end: plain.length, kind: 'em' });
        i = end + 1;
        continue;
      }
    }
    plain += text[i];
    i++;
  }
  return { plain, formats };
}

/**
 * Build a flat list of segments for rendering, where each segment has:
 *   { text, highlight, em, u, blank, key, start?, end? }
 * Boundaries are unioned over highlight ranges and format ranges so that
 * formatting + highlight can co-occur on the same span.
 *
 * @param {string} plain - markup-stripped passage text
 * @param {Array<{start:number,end:number}>} highlights - highlight ranges
 * @param {Array<{start:number,end:number,kind:string}>} formats - format ranges
 * @param {boolean} hidden - when true, highlights are suppressed (still rendered as plain text)
 * @returns {Array<object>} render-ready segments
 */
export function buildSegments(plain, highlights, formats, hidden) {
  if (!plain) return [];
  const safeHighlights = (hidden ? [] : mergeHighlights(highlights || []));
  const cuts = new Set([0, plain.length]);
  safeHighlights.forEach((h) => { cuts.add(h.start); cuts.add(h.end); });
  (formats || []).forEach((f) => { cuts.add(f.start); cuts.add(f.end); });
  const sortedCuts = [...cuts].sort((a, b) => a - b);
  const segments = [];
  for (let i = 0; i < sortedCuts.length - 1; i++) {
    const a = sortedCuts[i];
    const b = sortedCuts[i + 1];
    if (a === b) continue;
    const hl = safeHighlights.find((h) => h.start <= a && b <= h.end);
    const em = (formats || []).find((f) => f.kind === 'em' && f.start <= a && b <= f.end);
    const u = (formats || []).find((f) => f.kind === 'u' && f.start <= a && b <= f.end);
    const blank = (formats || []).find((f) => f.kind === 'blank' && f.start <= a && b <= f.end);
    segments.push({
      text: plain.slice(a, b),
      highlight: !!hl,
      em: !!em,
      u: !!u,
      blank: !!blank,
      key: `s${i}`,
      start: hl ? hl.start : undefined,
      end: hl ? hl.end : undefined,
    });
  }
  return segments;
}

/**
 * Renders a passage the student can highlight by selecting text, and un-highlight
 * by clicking an existing highlight. Range state is owned by the consumer.
 *
 * @param {object} props
 * @param {string} props.text - raw passage text (inline markup supported)
 * @param {Array<{start:number,end:number}>} props.highlights - current ranges
 * @param {boolean} [props.hidden] - suppress highlight rendering (text stays)
 * @param {(range:{start:number,end:number})=>void} props.onAddHighlight
 * @param {(range:{start:number,end:number})=>void} [props.onRemoveHighlight]
 * @param {string} [props.className] - container class for typography (default 'rw-passage')
 * @param {string} [props.ariaLabel]
 */
const HighlightablePassage = memo(function HighlightablePassage({
  text,
  highlights,
  hidden,
  onAddHighlight,
  onRemoveHighlight,
  className = 'rw-passage',
  ariaLabel,
}) {
  const ref = useRef(null);

  const { plain, formats } = useMemo(() => parsePassageMarkup(text), [text]);

  const segments = useMemo(() => buildSegments(plain, highlights, formats, hidden), [plain, highlights, formats, hidden]);

  // Capture the current text selection as a highlight range. Shared by the
  // mouseup path (mouse/trackpad) and the selectionchange path (touch).
  const captureSelection = useCallback(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0 || !ref.current) return;
    const range = sel.getRangeAt(0);
    if (!ref.current.contains(range.startContainer) || !ref.current.contains(range.endContainer)) return;
    const start = getCharOffsetWithin(ref.current, range.startContainer, range.startOffset);
    const end = getCharOffsetWithin(ref.current, range.endContainer, range.endOffset);
    if (start < end) onAddHighlight({ start, end });
    sel.removeAllRanges();
  }, [onAddHighlight]);

  // Touch highlighting: on iPadOS/Safari a long-press + drag-handle selection
  // does not reliably emit a `mouseup` on a plain div, so the mouseup path
  // alone misses it. Listen to `selectionchange` (debounced so it fires once
  // the selection settles) on coarse-pointer devices. The mouse path is left
  // untouched on desktop. Double-capture is harmless: ranges are merged and the
  // selection is cleared after the first capture.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    if (!window.matchMedia('(hover: none), (pointer: coarse)').matches) return undefined;
    let timer;
    const onSelectionChange = () => {
      clearTimeout(timer);
      timer = setTimeout(captureSelection, 320);
    };
    document.addEventListener('selectionchange', onSelectionChange);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('selectionchange', onSelectionChange);
    };
  }, [captureSelection]);

  const renderSegment = (s) => {
    if (s.blank) {
      return <span key={s.key} className="rw-blank" aria-label="blank" />;
    }
    let node = s.text;
    if (s.em) node = <em>{node}</em>;
    if (s.u) node = <u>{node}</u>;
    if (s.highlight) {
      return (
        <mark
          key={s.key}
          className="rw-highlight"
          onClick={(e) => {
            e.stopPropagation();
            onRemoveHighlight && onRemoveHighlight({ start: s.start, end: s.end });
          }}
          title="Click to remove highlight"
        >
          {node}
        </mark>
      );
    }
    return <span key={s.key}>{node}</span>;
  };

  return (
    <div
      ref={ref}
      className={`hl-passage ${className}`}
      style={{ whiteSpace: 'pre-wrap' }}
      onMouseUp={captureSelection}
      aria-label={ariaLabel}
    >
      {segments.map(renderSegment)}
    </div>
  );
});

export default HighlightablePassage;
export { HighlightablePassage };
