/**
 * FIGURE LANGUAGE v2 (adopted 2026-07-18) — shared design constants for every
 * Learn-tab lesson figure. Textbook ink discipline:
 *
 * - Near-black thin-stroke ink for everything structural (axes 1.25, shapes
 *   1.4, leaders/ticks 1). No gradients, no background rects, no fills except
 *   a light accent wash when a REGION is the taught object (a sector, a
 *   shaded solution half-plane).
 * - ONE accent — brand orange — reserved for the single element the figure
 *   exists to teach. Everything else is ink.
 * - Serif labels (Newsreader, loaded app-wide): variables italic, numbers
 *   roman, 12.5-15px. Bold almost never.
 * - Coordinate planes: no grid; small axis arrowheads; ONLY the ticks the
 *   figure uses; points are 3-3.5px ink dots labeled "(x, y)" in plain text.
 * - Geometry: unfilled shapes, right-angle square ticks, thin angle arcs,
 *   italic vertex letters. Add "Note: Figure not drawn to scale." in the
 *   caption (diagramRef description), not inside the SVG.
 * - Teaching sentences, formula cards, and pill labels NEVER live inside the
 *   SVG — captions and body prose carry them.
 * - R&W figures are marked-up sentences (brackets, seams, tutor squiggles),
 *   never flowcharts of boxes.
 *
 * Every figure is an original drawing. Genre conventions only — never
 * reproduce a figure from any source.
 */
import React from 'react';

export const INK = '#1f2430';
export const INK_MUTED = '#6b7280';
export const ACCENT = '#ea580c';
export const ACCENT_WASH = 'rgba(234, 88, 12, 0.08)';
export const SERIF = "Newsreader, Georgia, 'Times New Roman', serif";

/** Wrapper style shared by all figures (parent .tb-figure provides the card). */
export const DIAGRAM_STYLE = { textAlign: 'center' };

/** Small solid arrowhead for axes. dir: 'right' | 'up'. */
export function AxisArrow({ x, y, dir }) {
  const pts = dir === 'right'
    ? `${x},${y} ${x - 7},${y - 3.5} ${x - 7},${y + 3.5}`
    : `${x},${y} ${x - 3.5},${y + 7} ${x + 3.5},${y + 7}`;
  return <polygon points={pts} fill={INK} />;
}

/** A tick mark + roman numeral label on the x axis. */
export function XTick({ x, axisY, label }) {
  return (
    <g>
      <line x1={x} y1={axisY - 4} x2={x} y2={axisY + 4} stroke={INK} strokeWidth="1" />
      <text x={x} y={axisY + 18} fontSize="12.5" fill={INK} textAnchor="middle"
        fontFamily={SERIF}>{label}</text>
    </g>
  );
}

/** A tick mark + roman numeral label on the y axis. */
export function YTick({ y, axisX, label }) {
  return (
    <g>
      <line x1={axisX - 4} y1={y} x2={axisX + 4} y2={y} stroke={INK} strokeWidth="1" />
      <text x={axisX - 9} y={y + 4} fontSize="12.5" fill={INK} textAnchor="end"
        fontFamily={SERIF}>{label}</text>
    </g>
  );
}
