import React, { useMemo, useState } from 'react';
import './CalendarMonth.css';

/**
 * CalendarMonth — adherence calendar for the dashboard right rail.
 *
 * Replaces the 91-tick CalendarStrip from the previous batch (Day 5). The
 * month-grid is denser at the same data: practiced days as filled dots,
 * today as a strong ring, the standard 7-column / 6-row layout everyone
 * already knows how to read. Test-date stays out of this widget — it
 * belongs in its own "Days until exam" tile to keep concerns separate.
 *
 * @param {object} props
 * @param {Set<string> | string[]} [props.practicedDays]
 *   YYYY-MM-DD keys (local-time) of days the student practiced. Use
 *   `getPracticedDayKeys(practiceProgress)` from selectors/practicedDays.js
 *   (added alongside).
 * @param {Date} [props.today]               default = new Date()
 * @param {string} [props.ariaLabel]
 */
function CalendarMonth({ practicedDays, today, ariaLabel }) {
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
        <span className="cm-eyebrow-stat">{practicedThisMonth} days practiced</span>
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
          const cls = [
            'cm-cell',
            !cell.inMonth && 'cm-cell-out',
            isToday && 'cm-cell-today',
            isPracticed && 'cm-cell-practiced',
          ].filter(Boolean).join(' ');
          return (
            <span
              key={cell.key}
              role="gridcell"
              aria-label={cell.aria}
              aria-current={isToday ? 'date' : undefined}
              className={cls}
            >
              {cell.day}
            </span>
          );
        })}
      </div>
    </section>
  );
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
