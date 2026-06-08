import React, { useState, useEffect, useRef, useMemo } from 'react';

// Cmd/Ctrl+K command palette. Self-contained: owns its open state + a global
// keydown listener. Parent passes `commands` (each { id, label, hint?, icon?, run }).
// Premium glass overlay; keyboard-first (arrows / enter / esc); reduced-motion safe
// (the only animation is a short fade handled by the global reduce block).
export default function CommandPalette({ commands = [] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      const t = setTimeout(() => inputRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.hint || ''}`.toLowerCase().includes(q));
  }, [query, commands]);

  useEffect(() => { setActive(0); }, [query]);

  if (!open) return null;

  const run = (cmd) => { setOpen(false); if (cmd && typeof cmd.run === 'function') cmd.run(); };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); run(filtered[active]); }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      style={S.overlay}
    >
      <div style={S.panel} onKeyDown={onKeyDown}>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Jump to..."
          aria-label="Search commands"
          style={S.input}
        />
        <div style={S.list} role="listbox">
          {filtered.length === 0 && <div style={S.empty}>No matches</div>}
          {filtered.map((c, i) => (
            <button
              key={c.id}
              type="button"
              role="option"
              aria-selected={i === active}
              onMouseEnter={() => setActive(i)}
              onClick={() => run(c)}
              style={{ ...S.row, ...(i === active ? S.rowActive : null) }}
            >
              {c.icon && <span style={S.icon}>{c.icon}</span>}
              <span style={S.label}>{c.label}</span>
              {c.hint && <span style={S.hint}>{c.hint}</span>}
            </button>
          ))}
        </div>
        <div style={S.footer}>
          <span><kbd style={S.kbd}>↑</kbd><kbd style={S.kbd}>↓</kbd> navigate</span>
          <span><kbd style={S.kbd}>↵</kbd> select</span>
          <span><kbd style={S.kbd}>esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}

const S = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 600,
    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
    paddingTop: '12vh',
    background: 'rgba(15, 23, 42, 0.35)',
    backdropFilter: 'saturate(180%) blur(6px)',
    WebkitBackdropFilter: 'saturate(180%) blur(6px)',
    animation: 'fadeIn 150ms ease-out',
  },
  panel: {
    width: 'min(560px, 92vw)',
    background: 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'saturate(180%) blur(20px)',
    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
    border: '1px solid var(--color-slate-200)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-lg)',
    overflow: 'hidden',
  },
  input: {
    width: '100%', boxSizing: 'border-box',
    padding: '18px 20px', fontSize: '16px',
    fontFamily: 'var(--font-ui)', color: 'var(--color-slate-900)',
    border: 'none', borderBottom: '1px solid var(--color-slate-200)',
    outline: 'none', background: 'transparent',
  },
  list: { maxHeight: '340px', overflowY: 'auto', padding: '8px' },
  empty: { padding: '20px', textAlign: 'center', color: 'var(--color-slate-500)', fontSize: '14px' },
  row: {
    width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
    padding: '10px 12px', borderRadius: 'var(--radius-md)',
    border: 'none', background: 'transparent', cursor: 'pointer',
    textAlign: 'left', fontSize: '14px', fontFamily: 'var(--font-ui)',
    color: 'var(--color-slate-900)',
  },
  rowActive: { background: 'var(--color-brand-primary-light)', color: 'var(--color-brand-primary-hover)' },
  icon: { display: 'inline-flex', color: 'var(--color-brand-primary)', flexShrink: 0 },
  label: { flex: 1, fontWeight: 500 },
  hint: { fontSize: '12px', color: 'var(--color-slate-500)' },
  footer: {
    display: 'flex', gap: '16px', padding: '10px 16px',
    borderTop: '1px solid var(--color-slate-100)',
    fontSize: '12px', color: 'var(--color-slate-500)',
  },
  kbd: {
    display: 'inline-block', minWidth: '18px', textAlign: 'center',
    padding: '1px 5px', margin: '0 2px',
    background: 'var(--color-slate-100)', borderRadius: '5px',
    fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--color-slate-600)',
  },
};
