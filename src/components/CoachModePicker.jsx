/**
 * CoachModePicker — allows the student to switch the AI tutor
 * into one of the structured coach modes (or back to default).
 */

import React from 'react';
import { getAvailableCoachModes } from '../services/aiCoachModes';

const modes = getAvailableCoachModes();

const CoachModePicker = ({ activeMode, onSelectMode }) => {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', padding: '0.5rem 0' }}>
      <button
        onClick={() => onSelectMode(null)}
        style={{
          padding: '0.375rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          border: !activeMode ? '2px solid var(--color-brand-orange-500)' : '1px solid var(--color-slate-200)',
          background: !activeMode ? 'rgba(255, 149, 0, 0.08)' : 'transparent',
          color: !activeMode ? 'var(--color-brand-orange-600)' : 'var(--color-slate-600)',
          fontSize: '0.75rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
        }}
      >
        Default Tutor
      </button>

      {modes.map((mode) => {
        const isActive = activeMode === mode.id;
        return (
          <button
            key={mode.id}
            onClick={() => onSelectMode(isActive ? null : mode.id)}
            title={mode.description}
            style={{
              padding: '0.375rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              border: isActive ? '2px solid var(--color-brand-orange-500)' : '1px solid var(--color-slate-200)',
              background: isActive ? 'rgba(255, 149, 0, 0.08)' : 'transparent',
              color: isActive ? 'var(--color-brand-orange-600)' : 'var(--color-slate-600)',
              fontSize: '0.75rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {mode.label}
          </button>
        );
      })}
    </div>
  );
};

export default CoachModePicker;
