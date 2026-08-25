import React, { useMemo, useState } from 'react';
import { getDaysUntilTest } from '../services/selectors/daysUntilTest';
import { getScoreReleaseDate } from '../data/satTestDates';
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
/**
 * The SAT-day marker: a gold five-point star (SVG, never an emoji) that sits
 * behind the day number in the calendar cell and doubles as the legend
 * swatch. Test day is the one date on the calendar that isn't about the
 * student's routine, so it gets the one non-brand color on the card.
 */
function GoldStar({ className, muted = false }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 2.4l2.9 6.05 6.65.85-4.9 4.6 1.25 6.6L12 17.3l-5.9 3.2 1.25-6.6-4.9-4.6 6.65-.85z"
        fill={muted ? '#E4E1D8' : '#F5B301'}
        stroke={muted ? '#B8B4A8' : '#C98A12'}
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
  // Shared selector — same signed day-count the hero subtitle and goal tile
  // render, so the three surfaces can never disagree at the <24h boundary.
  const daysToTest = getDaysUntilTest(testKey, todayDate);
  // A sitting that's behind them reads as "taken" (muted star), and the day
  // College Board is expected to release its scores gets its own marker.
  const testIsPast = daysToTest !== null && daysToTest < 0;
  const releaseKey = testIsPast ? (getScoreReleaseDate(testKey)?.date || null) : null;
  const releaseInView = !!releaseKey && cells.some(c => c.inMonth && c.key === releaseKey);
  const daysToRelease = releaseKey ? getDaysUntilTest(releaseKey, todayDate) : null;

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
            : (releaseInView && daysToRelease !== null && daysToRelease >= 0)
              ? (daysToRelease === 0 ? 'Scores expected TODAY' : `Scores expected in ${daysToRelease} day${daysToRelease === 1 ? '' : 's'}`)
              : `${practicedThisMonth} day${practicedThisMonth === 1 ? '' : 's'} practiced`}
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
          const isRelease = cell.inMonth && cell.key === releaseKey;
          const cls = [
            'cm-cell',
            !cell.inMonth && 'cm-cell-out',
            isToday && 'cm-cell-today',
            isPracticed && 'cm-cell-practiced',
            isTestDay && 'cm-cell-test',
            isTestDay && testIsPast && 'is-past',
            isRelease && 'cm-cell-release',
          ].filter(Boolean).join(' ');
          const label = isTestDay
            ? `${cell.aria} — SAT ${testIsPast ? 'taken' : 'test day'}`
            : isRelease ? `${cell.aria} — SAT scores expected` : cell.aria;
          return (
            <span
              key={cell.key}
              role="gridcell"
              aria-label={label}
              aria-current={isToday ? 'date' : undefined}
              title={isTestDay ? (testIsPast ? 'SAT taken' : 'SAT test day') : isRelease ? 'SAT scores expected' : undefined}
              className={cls}
            >
              {isTestDay && <GoldStar className="cm-star" muted={testIsPast} />}
              <span className="cm-cell-day">{cell.day}</span>
              {isRelease && <span className="cm-release-mark" aria-hidden="true" />}
            </span>
          );
        })}
      </div>

      {(testInView || releaseInView) && (
        <div className="cm-legend" aria-hidden="true">
          {testInView && (
            <span className="cm-legend-item">
              <GoldStar className="cm-legend-star" muted={testIsPast} />
              <span className="cm-legend-label">{testIsPast ? 'SAT taken' : 'SAT test day'}</span>
            </span>
          )}
          {releaseInView && (
            <span className="cm-legend-item">
              <span className="cm-legend-release" />
              <span className="cm-legend-label">Scores expected</span>
            </span>
          )}
        </div>
      )}
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
