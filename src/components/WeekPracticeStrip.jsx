/**
 * WeekPracticeStrip — Monday-to-Sunday practice tracker at the top of the
 * Study Plan "This week" view (founder 2026-08-25). Seven rounded day tiles
 * with the letter inside: green fill = practiced, orange ring = today,
 * muted = missed, dashed = ahead. Deliberately its own look — no flames,
 * no circles with letters underneath.
 *
 * @param {object} props
 * @param {Set<string>|string[]} props.practicedDays  YYYY-MM-DD keys
 * @param {Date} [props.today]
 */
import React from 'react';
import { getWeekPractice } from '../services/selectors/weekPractice';

function caption({ done, elapsed, todayDone, streak }) {
  if (done === 0) return elapsed === 1 ? 'Practice today to open the week.' : 'Nothing yet this week. Today counts.';
  if (done === 7) return 'Every day this week. Rare air.';
  const soFar = `${done} of ${elapsed} day${elapsed === 1 ? '' : 's'} so far`;
  if (todayDone) return streak >= 3 ? `${soFar} · ${streak} in a row.` : `${soFar} · today is in.`;
  return `${soFar} · today is still open.`;
}

export default function WeekPracticeStrip({ practicedDays, today = new Date() }) {
  const week = getWeekPractice(practicedDays, today);
  return (
    <section className="wps" aria-label="Your week" data-testid="week-practice-strip">
      <div className="wps-head">
        <span className="wps-eyebrow">Your week</span>
        <span className="wps-caption">{caption(week)}</span>
      </div>
      <ol className="wps-days">
        {week.days.map((d) => {
          const practiced = d.state === 'done' || d.state === 'today-done';
          const isToday = d.state === 'today' || d.state === 'today-done';
          const title = `${d.name} ${d.date} · ${practiced ? 'practiced' : isToday ? 'today' : d.state === 'missed' ? 'no practice' : 'ahead'}`;
          return (
            <li key={d.key} className={`wps-day is-${d.state}`} title={title} aria-label={title} aria-current={isToday ? 'date' : undefined}>
              <span className="wps-day-mark" aria-hidden="true">
                {practiced ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                ) : d.state === 'missed' ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M7 12h10" /></svg>
                ) : null}
              </span>
              <span className="wps-day-letter" aria-hidden="true">{d.letter}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
