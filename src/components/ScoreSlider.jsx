import React from 'react';
import { PrimaryButton } from './ui/Button';
import { DataCard } from './ui/DataCard';

const ScoreSlider = ({
  value,
  onChange,
  min = 200,
  max = 800,
  step = 10,
  label,
  description,
  onSave,
  onCancel
}) => {
  // Calculate percentage for visual track fill
  const percent = ((value - min) / (max - min)) * 100;

  const sliderStyle = {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    width: '100%',
    height: '8px',
    borderRadius: 'var(--radius-md)',
    background: `linear-gradient(to right, var(--color-brand-orange-500) 0%, var(--color-brand-orange-500) ${percent}%, var(--color-slate-200) ${percent}%, var(--color-slate-200) 100%)`,
    outline: 'none',
    cursor: 'pointer',
    margin: '0'
  };

  return (
    <DataCard className="mb-6">
      {/* Header with Cancel button */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1.5rem'
      }}>
        <div>
          <div style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--color-slate-900)' }}>
            {label}
          </div>
          <div style={{ fontSize: '0.875rem', color: 'var(--color-slate-500)', marginTop: '0.25rem' }}>
            {description}
          </div>
        </div>
        <button
          onClick={onCancel}
          style={{
            background: 'transparent',
            color: 'var(--color-slate-500)',
            border: 'none',
            fontSize: '0.875rem',
            cursor: 'pointer'
          }}
        >
          Cancel
        </button>
      </div>

      {/* Large score display */}
      <div style={{
        fontSize: '3.5rem',
        fontWeight: '700',
        textAlign: 'center',
        color: 'var(--color-brand-orange-500)',
        marginBottom: '1.5rem',
        fontVariantNumeric: 'tabular-nums',
        textShadow: 'var(--shadow-brand-glow)'
      }}>
        {value}
      </div>

      {/* Slider track with labels */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <span style={{
          fontSize: '0.875rem',
          color: 'var(--color-slate-500)',
          fontWeight: '500',
          minWidth: '2rem'
        }}>
          {min}
        </span>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          style={sliderStyle}
        />
        <span style={{
          fontSize: '0.875rem',
          color: 'var(--color-slate-500)',
          fontWeight: '500',
          minWidth: '2rem'
        }}>
          {max}
        </span>
      </div>

      {/* Save button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <PrimaryButton onClick={onSave}>
          Save
        </PrimaryButton>
      </div>
    </DataCard>
  );
};

export default ScoreSlider;
