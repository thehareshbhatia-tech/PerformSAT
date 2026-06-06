import React, { useMemo, useState } from 'react';
import './CalendarMonth.css';

/**
 * CalendarMonth — adherence calendar for the dashboard right rail.
 *
 * Replaces the 91-tick CalendarStrip from the previous batch (Day 5). The
 * month-grid is denser at the same data: practiced days as filled dots,
 * today as a strong ring, the standard 7-column / 6-row layout everyone
 * already knows how to read. The student's SAT date renders as a marked
 * cell (`testDate` prop) — originally kept out of this widget, but
 * students asked to see test day in calendar context (2026-06-06).
 *
 * @param {object} props
 * @param {Set<string> | string[]} [props.practicedDays]
 *   YYYY-MM-DD keys (local-time) of days the student practiced. Use
 *   `getPracticedDayKeys(practiceProgress)` from selectors/practicedDays.js
 *   (added alongside).
 * @param {string} [props.testDate]           YYYY-MM-DD SAT date from the user doc
 * @param {Date} [props.today]               default = new Date()
 * @param {string} [props.ariaLabel]
 */
function CalendarMonth({ practicedDays, testDate, today, ariaLabel }) {
  const todayDate = today instanceof Date ? today : new Date();
  const [viewYear, setViewYear] = useState(todayDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(todayDate.getMonth()); // 0-11

  const practicedSet = useMemo(() => {
    if (!practicedDays) return new Set();
    return practicedDays instanceof Set ? practicedDays : new Set(practicedDays);
  }, [practicedDays]);

  const monthLabel = new Date(viewYear, viewMonth, 1)
    .toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const cells = useMemo(() => buildMonthCells(viewYear, viewMonth), [viewYear, viewMonth]);

  const todayKey = localDateKey(todayDate);
  const practicedThisMonth = cells
    .filter(c => c.inMonth && practicedSet.has(c.key))
    .length;

  // Valid YYYY-MM-DD only; anything else is ignored so a malformed user doc
  // can't break the grid.
  const testKey = typeof testDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(testDate)
    ? testDate
    : null;
  const testInView = !!testKey && cells.some(c => c.inMonth && c.key === testKey);
  const daysToTest = testKey
    ? Math.round((parseKeyAsLocalDate(testKey) - parseKeyAsLocalDate(todayKey)) / 86400000)
    : null;

  const goPrev = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };
  const goNext = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  return (
    <section
      className="cm-card"
      aria-label={ariaLabel || `Practice calendar for ${monthLabel}`}
    >
      <div className="cm-eyebrow">
        <span className="cm-eyebrow-stat">
          {testInView && daysToTest !== null && daysToTest >= 0
            ? (daysToTest === 0 ? 'Test day is TODAY' : `Test day in ${daysToTest} day${daysToTest === 1 ? '' : 's'}`)
            : `${practicedThisMonth} days practiced`}
        </span>
        <span className="cm-eyebrow-today" aria-hidden="true">
          {todayDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
        </span>
      </div>

      <div className="cm-header">
        <button
          type="button"
          className="cm-nav"
          onClick={goPrev}
          aria-label="Previous month"
        >
          ‹
        </button>
        <span className="cm-title">{monthLabel}</span>
        <button
          type="button"
          className="cm-nav"
          onClick={goNext}
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      <div className="cm-weekdays" aria-hidden="true">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <span key={d} className="cm-weekday">{d}</span>
        ))}
      </div>

      <div className="cm-grid" role="grid" aria-readonly="true">
        {cells.map(cell => {
          const isToday = cell.inMonth && cell.key === todayKey;
          const isPracticed = cell.inMonth && practicedSet.has(cell.key);
          const isTestDay = cell.inMonth && cell.key === testKey;
          const cls = [
            'cm-cell',
            !cell.inMonth && 'cm-cell-out',
            isToday && 'cm-cell-today',
            isPracticed && 'cm-cell-practiced',
            isTestDay && 'cm-cell-test',
          ].filter(Boolean).join(' ');
          return (
            <span
              key={cell.key}
              role="gridcell"
              aria-label={isTestDay ? `${cell.aria} — SAT test day` : cell.aria}
              aria-current={isToday ? 'date' : undefined}
              title={isTestDay ? 'SAT test day' : undefined}
              className={cls}
            >
              {cell.day}
            </span>
          );
        })}
      </div>

      {testInView && (
        <div className="cm-legend" aria-hidden="true">
          <span className="cm-legend-swatch cm-legend-test" />
          <span className="cm-legend-label">SAT test day</span>
        </div>
      )}
    </section>
  );
}

/** Parse a YYYY-MM-DD key as LOCAL midnight (UTC parse shifts the day). */
function parseKeyAsLocalDate(key) {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/**
 * Build a 6-row × 7-col cell grid for the given month, padded with
 * adjacent-month days so every row has 7 cells.
 *
 * @param {number} year
 * @param {number} month  0-11
 * @returns {Array<{key: string, day: number, inMonth: boolean, aria: string}>}
 */
export function buildMonthCells(year, month) {
  const firstOfMonth = new Date(year, month, 1);
  const startWeekday = firstOfMonth.getDay(); // 0 = Sunday

  // Start the grid on the Sunday on or before the 1st.
  const gridStart = new Date(year, month, 1 - startWeekday);

  const cells = [];
  for (let i = 0; i < 42; i++) { // 6 rows × 7 cols
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    cells.push({
      key: localDateKey(d),
      day: d.getDate(),
      inMonth: d.getMonth() === month && d.getFullYear() === year,
      aria: d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
    });
  }
  return cells;
}

function localDateKey(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export default CalendarMonth;
