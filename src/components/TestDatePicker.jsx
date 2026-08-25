/**
 * TestDatePicker — inline picker for the student's SAT date. Shows the next
 * official College Board sittings (src/data/satTestDates — the single source
 * of truth) as chips with their registration deadline, plus a native date
 * input for a school-day or later sitting, and an optional "clear" for a
 * student who's done. Renders IN PLACE wherever a "change your test date"
 * action lives (Home hero, diagnosis screen, score prompt) — never a trip to
 * Profile.
 *
 * @param {object} props
 * @param {string|null} props.value           current 'YYYY-MM-DD'
 * @param {(date:string|null)=>void} props.onSelect  called with the new date (null = cleared)
 * @param {()=>void} [props.onCancel]
 * @param {boolean} [props.allowClear=false]
 * @param {Date} [props.today]
 * @param {string} [props.title]
 */
import React, { useMemo, useState } from 'react';
import './TestDatePicker.css';
import { getUpcomingSATDates, formatSatChipLabel } from '../data/satTestDates';
import { parseLocalDate } from '../utils/localDate';

function longLabel(dateStr) {
  const d = parseLocalDate(dateStr);
  return d ? d.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' }) : dateStr;
}

export default function TestDatePicker({ value = null, onSelect, onCancel = null, allowClear = false, today = new Date(), title = 'When are you taking the SAT?' }) {
  const upcoming = useMemo(() => getUpcomingSATDates(today).slice(0, 6), [today]);
  const [custom, setCustom] = useState('');
  const todayStr = useMemo(() => {
    const t = new Date(today);
    return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
  }, [today]);
  const customValid = /^\d{4}-\d{2}-\d{2}$/.test(custom) && custom >= todayStr;

  return (
    <div className="tdp" role="group" aria-label={title}>
      <div className="tdp-title">{title}</div>
      {upcoming.length > 0 && (
        <>
          <div className="tdp-label">Official dates</div>
          <div className="tdp-chips">
            {upcoming.map((sat) => {
              const selected = value === sat.date;
              const regPast = sat.regDeadline && sat.regDeadline < todayStr;
              const latePast = sat.lateDeadline && sat.lateDeadline < todayStr;
              const sub = latePast
                ? 'Registration closed'
                : regPast
                  ? `Late reg. by ${formatSatChipLabel(sat.lateDeadline)}`
                  : sat.regDeadline
                    ? `Register by ${formatSatChipLabel(sat.regDeadline)}`
                    : 'Date anticipated';
              return (
                <button
                  key={sat.date}
                  type="button"
                  className={`tdp-chip${selected ? ' is-selected' : ''}`}
                  aria-pressed={selected}
                  onClick={() => onSelect(sat.date)}
                  title={longLabel(sat.date)}
                >
                  <span className="tdp-chip-date">{formatSatChipLabel(sat.date)}</span>
                  <span className={`tdp-chip-sub${latePast ? ' is-closed' : ''}`}>{sub}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
      <div className="tdp-label">{upcoming.length > 0 ? 'Or a different date (school-day SAT, later sitting)' : 'Pick your test date'}</div>
      <div className="tdp-custom">
        <input
          type="date"
          className="tdp-input"
          value={custom}
          min={todayStr}
          onChange={(e) => setCustom(e.target.value)}
          aria-label="Custom test date"
        />
        <button type="button" className="tdp-btn tdp-btn-primary" disabled={!customValid} onClick={() => onSelect(custom)}>
          Use this date
        </button>
      </div>
      <div className="tdp-foot">
        {allowClear && (
          <button type="button" className="tdp-btn tdp-btn-text" onClick={() => onSelect(null)}>
            I'm done with the SAT — clear my date
          </button>
        )}
        {typeof onCancel === 'function' && (
          <button type="button" className="tdp-btn tdp-btn-text" onClick={onCancel}>Cancel</button>
        )}
      </div>
    </div>
  );
}
