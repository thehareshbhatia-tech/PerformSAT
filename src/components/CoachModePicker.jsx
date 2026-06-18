/**
 * CoachModePicker — a compact "Coach mode" trigger chip that opens a popover for
 * switching the AI tutor into a structured coach mode (or back to Default).
 *
 * Replaces the old always-visible pill row: it reclaims vertical space (acute on
 * mobile), shows each mode's one-line description instead of a title-attr
 * tooltip, and gates modes whose preconditions aren't met (Mistake Replay only
 * applies after a wrong answer is revealed) so the menu never offers an
 * incoherent mode mid-question.
 */

import React, { useState, useRef, useEffect } from 'react';
import { getAvailableCoachModes } from '../services/aiCoachModes';

const modes = getAvailableCoachModes();

const isModeAvailable = (id, answerRevealed, isCorrect) => {
  // Mistake Replay walks through a wrong answer — only meaningful post-reveal+wrong.
  if (id === 'mistake_replay') return !!answerRevealed && isCorrect === false;
  return true;
};

const MenuItem = ({ label, description, active, onClick }) => (
  <button
    type="button"
    role="menuitemradio"
    aria-checked={active}
    onClick={onClick}
    style={{
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '8px 10px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      background: active ? 'rgba(255, 149, 0, 0.08)' : 'transparent',
    }}
  >
    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: active ? 'var(--color-brand-orange-600)' : 'var(--color-slate-800)' }}>{label}</div>
    <div style={{ fontSize: '0.72rem', color: 'var(--color-slate-500)', marginTop: '2px', lineHeight: 1.4 }}>{description}</div>
  </button>
);

const CoachModePicker = ({ activeMode, onSelectMode, answerRevealed, isCorrect }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const available = modes.filter((m) => isModeAvailable(m.id, answerRevealed, isCorrect));
  const activeLabel = activeMode ? (modes.find((m) => m.id === activeMode)?.label || 'Coach mode') : null;

  return (
    <div ref={ref} style={{ position: 'relative', paddingBottom: '8px' }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '0.375rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          border: activeMode ? '2px solid var(--color-brand-orange-500)' : '1px solid var(--color-slate-200)',
          background: activeMode ? 'rgba(255, 149, 0, 0.08)' : 'transparent',
          color: activeMode ? 'var(--color-brand-orange-600)' : 'var(--color-slate-600)',
          fontSize: '0.75rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5 10.1 10.9 5.5 9l4.6-1.4z" />
        </svg>
        {activeLabel || 'Coach mode'}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s ease' }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 6px)',
            left: 0,
            zIndex: 50,
            width: '280px',
            maxWidth: '80vw',
            background: '#ffffff',
            border: '1px solid var(--color-slate-200)',
            borderRadius: '12px',
            boxShadow: '0 12px 32px -8px rgba(0,0,0,0.18)',
            padding: '6px',
            maxHeight: '320px',
            overflowY: 'auto',
          }}
        >
          <MenuItem
            label="Default Tutor"
            description="Open conversation — ask anything."
            active={!activeMode}
            onClick={() => { onSelectMode(null); setOpen(false); }}
          />
          {available.map((m) => (
            <MenuItem
              key={m.id}
              label={m.label}
              description={m.description}
              active={activeMode === m.id}
              onClick={() => { onSelectMode(activeMode === m.id ? null : m.id); setOpen(false); }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CoachModePicker;
