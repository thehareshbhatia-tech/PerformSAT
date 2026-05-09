import React from 'react';

/**
 * CalendarStrip — 91-tick days-until-test artifact (D5 of Day 5 of the
 * Acely-parity batch). Single SVG, no animation. The visible alternative to
 * a plain-text "37 days until your test" — the artifact makes time tangible.
 *
 * Layout:
 *   91 vertical ticks across 13 weeks of width. Today is the leftmost
 *   strong tick. Test day is marked with a taller, accented tick when it
 *   falls inside the 91-day window. Every 7th gap has a faint week
 *   separator. Days within the window past the test day render at half
 *   opacity ("after the test you don't strictly need to study, but life
 *   continues").
 *
 * Edge cases:
 *   - testDate is null/missing      → render a decorative 91-day window from
 *                                      today; no test marker
 *   - testDate < today              → render today as rightmost; testDate
 *                                      shown to the left if within window
 *   - testDate > today + 91 days    → render today on the left; arrow chevron
 *                                      at the right hints "test still further out"
 *   - testDate within window        → today on left, testDate marked inside
 *
 * @param {object} props
 * @param {string|Date|null|undefined} [props.testDate]
 * @param {number} [props.height=28]   total SVG height in px
 * @param {string} [props.ariaLabel]
 */
function CalendarStrip({
  testDate,
  height = 28,
  ariaLabel,
}) {
  const TICKS = 91;          // 13 weeks × 7 days
  const WIDTH = 364;          // 4px per tick — readable on both desktop + 375px mobile
  const PADDING_X = 2;
  const trackY = height / 2;
  const tickHeight = 14;
  const todayHeight = 18;
  const testHeight = 22;

  const today = stripTime(new Date());
  const test = parseDate(testDate);
  const daysUntilTest = test ? Math.round((test.getTime() - today.getTime()) / 86400000) : null;

  const tickSpacing = (WIDTH - PADDING_X * 2) / (TICKS - 1);
  const ariaSummary = ariaLabel || (
    daysUntilTest === null
      ? 'Calendar strip — no test date set'
      : daysUntilTest >= 0
        ? `Calendar strip — ${daysUntilTest} days until test`
        : `Calendar strip — test was ${Math.abs(daysUntilTest)} days ago`
  );

  return (
    <svg
      role="img"
      aria-label={ariaSummary}
      width="100%"
      height={height}
      viewBox={`0 0 ${WIDTH} ${height}`}
      preserveAspectRatio="none"
      style={{ display: 'block' }}
    >
      {/* Week separators — every 7 ticks, subtle, behind everything */}
      {Array.from({ length: 12 }).map((_, weekIdx) => {
        const x = PADDING_X + (weekIdx + 1) * 7 * tickSpacing - tickSpacing / 2;
        return (
          <line
            key={`week-${weekIdx}`}
            x1={x} x2={x}
            y1={trackY - todayHeight / 2 - 3}
            y2={trackY + todayHeight / 2 + 3}
            stroke="var(--color-slate-200)"
            strokeWidth="1"
            strokeDasharray="2 3"
            opacity="0.6"
          />
        );
      })}

      {/* Day ticks */}
      {Array.from({ length: TICKS }).map((_, i) => {
        // Day 0 = today. Day 90 = 90 days from now.
        const isToday = i === 0;
        const isTest = daysUntilTest !== null && daysUntilTest === i;
        const isPostTest = daysUntilTest !== null && daysUntilTest >= 0 && daysUntilTest < i;
        const isPastTest = daysUntilTest !== null && daysUntilTest < 0 && i === 0;

        const x = PADDING_X + i * tickSpacing;
        let h, color, opacity;
        if (isTest) {
          h = testHeight;
          color = 'var(--color-brand-primary)';
          opacity = 1;
        } else if (isToday) {
          h = todayHeight;
          color = 'var(--color-slate-700)';
          opacity = 1;
        } else if (isPostTest || isPastTest) {
          h = tickHeight;
          color = 'var(--color-slate-300)';
          opacity = 0.5;
        } else {
          h = tickHeight;
          color = 'var(--color-slate-300)';
          opacity = 1;
        }

        return (
          <line
            key={`tick-${i}`}
            x1={x} x2={x}
            y1={trackY - h / 2}
            y2={trackY + h / 2}
            stroke={color}
            strokeWidth={isTest ? 2.5 : isToday ? 2 : 1}
            strokeLinecap="round"
            opacity={opacity}
          />
        );
      })}

      {/* Out-of-window indicator: testDate beyond 91 days */}
      {daysUntilTest !== null && daysUntilTest > TICKS - 1 && (
        <g aria-hidden="true">
          <polyline
            points={`${WIDTH - 8},${trackY - 5} ${WIDTH - 3},${trackY} ${WIDTH - 8},${trackY + 5}`}
            fill="none"
            stroke="var(--color-slate-500)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}
    </svg>
  );
}

function parseDate(d) {
  if (!d) return null;
  if (d instanceof Date) return stripTime(d);
  const parsed = new Date(d);
  if (Number.isNaN(parsed.getTime())) return null;
  return stripTime(parsed);
}

function stripTime(d) {
  const out = new Date(d);
  out.setHours(0, 0, 0, 0);
  return out;
}

export default CalendarStrip;
