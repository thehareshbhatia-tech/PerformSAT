import React, { useEffect } from 'react';
import { colors, radius, shadows, transitions } from '../design/tokens';
import { cardStyles } from '../design/components';

// Inject slider styles once
const injectSliderStyles = () => {
  const styleId = 'score-slider-styles';
  if (document.getElementById(styleId)) return;

  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    input[type="range"].score-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: ${colors.surface.dark};
      cursor: grab;
      border: 4px solid ${colors.surface.white};
      box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      margin-top: -10px;
    }
    input[type="range"].score-slider::-webkit-slider-thumb:active {
      cursor: grabbing;
      transform: scale(1.1);
    }
    input[type="range"].score-slider::-moz-range-thumb {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: ${colors.surface.dark};
      cursor: grab;
      border: 4px solid ${colors.surface.white};
      box-shadow: 0 2px 6px rgba(0,0,0,0.25);
    }
    input[type="range"].score-slider::-moz-range-thumb:active {
      cursor: grabbing;
      transform: scale(1.1);
    }
    input[type="range"].score-slider::-webkit-slider-runnable-track {
      height: 8px;
      border-radius: 4px;
    }
    input[type="range"].score-slider::-moz-range-track {
      height: 8px;
      border-radius: 4px;
    }
  `;
  document.head.appendChild(style);
};

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
  // Inject CSS styles for slider thumb on mount
  useEffect(() => {
    injectSliderStyles();
  }, []);

  // Calculate percentage for visual track fill
  const percent = ((value - min) / (max - min)) * 100;

  const cardStyle = {
    ...cardStyles.subtle,
    padding: '28px',
    marginBottom: '24px'
  };

  const sliderStyle = {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    width: '100%',
    height: '8px',
    borderRadius: '4px',
    background: `linear-gradient(to right, ${colors.surface.dark} 0%, ${colors.surface.dark} ${percent}%, ${colors.surface.grayDark} ${percent}%, ${colors.surface.grayDark} 100%)`,
    outline: 'none',
    cursor: 'pointer',
    margin: '0'
  };

  return (
    <div style={cardStyle}>
      {/* Header with Cancel button */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '24px'
      }}>
        <div>
          <div style={{ fontSize: '18px', fontWeight: '600', color: colors.text.primary }}>
            {label}
          </div>
          <div style={{ fontSize: '13px', color: colors.text.secondary, marginTop: '4px' }}>
            {description}
          </div>
        </div>
        <button
          onClick={onCancel}
          style={{
            padding: '6px 12px',
            background: 'transparent',
            color: colors.text.secondary,
            border: 'none',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Cancel
        </button>
      </div>

      {/* Large score display */}
      <div style={{
        fontSize: '56px',
        fontWeight: '700',
        textAlign: 'center',
        color: colors.text.primary,
        marginBottom: '24px',
        fontVariantNumeric: 'tabular-nums'
      }}>
        {value}
      </div>

      {/* Slider track with labels */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <span style={{
          fontSize: '13px',
          color: colors.text.secondary,
          fontWeight: '500',
          minWidth: '32px'
        }}>
          {min}
        </span>
        <input
          type="range"
          className="score-slider"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          style={sliderStyle}
        />
        <span style={{
          fontSize: '13px',
          color: colors.text.secondary,
          fontWeight: '500',
          minWidth: '36px'
        }}>
          {max}
        </span>
      </div>

      {/* Save button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={onSave}
          style={{
            padding: '10px 24px',
            background: colors.surface.dark,
            color: colors.text.inverse,
            border: 'none',
            borderRadius: radius.sm,
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: `background ${transitions.fast}`
          }}
          onMouseEnter={(e) => e.target.style.background = colors.text.secondary}
          onMouseLeave={(e) => e.target.style.background = colors.surface.dark}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ScoreSlider;
