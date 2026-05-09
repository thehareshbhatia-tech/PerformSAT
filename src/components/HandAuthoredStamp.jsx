import React from 'react';

/**
 * HandAuthoredStamp — 28×28 SVG monogram for drill question cards.
 *
 * Differentiation move D4 (Day 5 of the Acely-parity batch). Pairs with the
 * c0f64eb commit narrative ("dropped 1,750 incoherent AI-rewritten items in
 * favor of 1,300 hand-authored coherent ones"): the stamp makes that
 * provenance visible per-question, where competitors ship indistinguishable
 * AI-generated drills with no such marker.
 *
 * Visual:
 *   "PS" in serif (--font-reading) inside a soft brand-tinted circle,
 *   28×28 default. The serif typography itself does the editorial-voice
 *   work — that's why the two-typeface lockup landed first.
 *
 * Accessibility:
 *   The stamp uses native `title` (HTML attribute on the wrapping span)
 *   which most browsers render as a hover tooltip and screen readers
 *   read on focus. We also expose role="img" + aria-label on the SVG
 *   for richer screen-reader context.
 *
 * @param {object} props
 * @param {number} [props.size=28]
 * @param {string} [props.title]  override tooltip copy
 */
function HandAuthoredStamp({
  size = 28,
  title = 'Authored by a 99th-percentile SAT instructor.',
}) {
  const half = size / 2;
  const r = half - 1.5; // small inset so the stroke sits inside the box
  return (
    <span
      title={title}
      style={{ display: 'inline-flex', lineHeight: 0, cursor: 'help' }}
    >
      <svg
        role="img"
        aria-label={title}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ display: 'block' }}
      >
        <circle
          cx={half}
          cy={half}
          r={r}
          fill="var(--color-brand-primary-light)"
          stroke="var(--color-brand-primary)"
          strokeWidth="1.25"
        />
        <text
          x={half}
          y={half + 1}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-reading)"
          fontSize={Math.round(size * 0.45)}
          fontWeight="700"
          fontStyle="italic"
          fill="var(--color-brand-primary)"
        >
          PS
        </text>
      </svg>
    </span>
  );
}

export default HandAuthoredStamp;
