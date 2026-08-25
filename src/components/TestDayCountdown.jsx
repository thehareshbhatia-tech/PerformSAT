/**
 * TestDayCountdown — the prominent "N days to your SAT" card at the top of
 * Home's right rail (founder 2026-08-25: the countdown was buried in the
 * calendar eyebrow and the hero footer). Reads the same primary date every
 * other surface paces off, so the three can't disagree.
 *
 * States: counting down · test day today · last sitting behind them with
 * nothing ahead ("add your next date") · no date at all ("pick a date").
 * The action opens the same inline date manager the hero uses (children).
 *
 * @param {object} props
 * @param {string|null} props.testDate      primary sitting (next upcoming, or latest past)
 * @param {string[]} [props.testDates]      every sitting
 * @param {Date} [props.today]
 * @param {()=>void} [props.onManage]       opens/closes the date manager
 * @param {boolean} [props.managing]        whether the manager is open (children render below)
 * @param {React.ReactNode} [props.children]
 */
import React from 'react';
import { getDaysUntilTest } from '../services/selectors/daysUntilTest';
import { getUserTestDates, splitTestDates } from '../services/selectors/testDates';
import { SAT_TEST_DATES, formatSatChipLabel } from '../data/satTestDates';
import { parseLocalDate } from '../utils/localDate';

function longDate(dateStr) {
  const d = parseLocalDate(dateStr);
  return d ? d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : dateStr;
}

export default function TestDayCountdown({ testDate = null, testDates = null, today = new Date(), onManage = null, managing = false, children = null }) {
  const all = getUserTestDates({ testDate, testDates });
  const { upcoming, past } = splitTestDates(all, today);
  const primary = upcoming[0] || past[past.length - 1] || null;
  const days = primary ? getDaysUntilTest(primary, today) : null;
  const official = primary ? SAT_TEST_DATES.find((s) => s.date === primary) : null;
  const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const regOpen = official?.regDeadline && official.regDeadline >= todayKey;
  const later = upcoming.slice(1);

  let eyebrow = 'Your SAT';
  let big = null;
  let unit = '';
  let dateLine = '';
  let meta = '';
  let action = 'Change dates';
  if (!primary) {
    eyebrow = 'Your SAT';
    big = '—';
    unit = 'no test date yet';
    dateLine = 'Pick a sitting and the plan paces itself toward it.';
    action = 'Pick a date';
  } else if (days === 0) {
    eyebrow = 'Test day';
    big = 'Today';
    unit = '';
    dateLine = longDate(primary);
    meta = 'Sleep well, eat breakfast, bring your ID and calculator.';
  } else if (days > 0) {
    eyebrow = 'Countdown';
    big = String(days);
    unit = days === 1 ? 'day to your SAT' : 'days to your SAT';
    dateLine = longDate(primary);
    meta = [
      regOpen ? `Register by ${formatSatChipLabel(official.regDeadline)}` : null,
      later.length ? `then ${later.map(formatSatChipLabel).join(', ')}` : null,
    ].filter(Boolean).join(' · ');
  } else {
    eyebrow = 'Your SAT';
    big = 'Taken';
    unit = `${Math.abs(days)} day${Math.abs(days) === 1 ? '' : 's'} ago`;
    dateLine = longDate(primary);
    meta = 'Nothing scheduled after this one.';
    action = 'Add your next date';
  }

  return (
    <div className="hv2-countdown" data-testid="test-day-countdown" role="group" aria-label={primary ? `${big} ${unit}` : 'No test date yet'}>
      <div className="hv2-countdown-eyebrow">{eyebrow}</div>
      <div className="hv2-countdown-row">
        <span className="hv2-countdown-num">{big}</span>
        {unit && <span className="hv2-countdown-unit">{unit}</span>}
      </div>
      <div className="hv2-countdown-date">{dateLine}</div>
      {meta && <div className="hv2-countdown-meta">{meta}</div>}
      {typeof onManage === 'function' && (
        <button type="button" className="hv2-countdown-link" onClick={onManage} aria-expanded={managing}>
          {managing ? 'Close' : action}
          {!managing && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>}
        </button>
      )}
      {managing && children}
    </div>
  );
}
