import React, { useState, useEffect } from 'react';
import { colors, typography, spacing, radius, shadows, transitions } from '../design/tokens';
import { cardStyles, inputStyles } from '../design/components';
import { injectAnimations } from '../design/animations';
import { CheckIcon, DocumentIcon } from '../design/icons';
import { Button } from './ui/Button';

const Onboarding = ({ user, onUpdateTargetScore, onUpdateTestDate, onUpdateCurrentScore, onComplete }) => {
  const [step, setStep] = useState(0);
  const [targetScore, setTargetScore] = useState(700);
  const [testDateOption, setTestDateOption] = useState(null);
  const [customDate, setCustomDate] = useState('');
  const [hasScore, setHasScore] = useState(null);
  const [currentScore, setCurrentScore] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { injectAnimations(); }, []);

  const handleFinish = async () => {
    setSaving(true);
    setError('');
    try {
      await onUpdateTargetScore(targetScore);

      if (testDateOption && testDateOption !== 'not-scheduled') {
        const date = testDateOption === 'custom' ? customDate : testDateOption;
        if (date) await onUpdateTestDate(date);
      }

      if (hasScore && currentScore) {
        const score = parseInt(currentScore);
        if (score >= 200 && score <= 800) {
          await onUpdateCurrentScore(score);
        }
      }

      onComplete();
    } catch (err) {
      setError('Could not save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const getTestDatePresets = () => {
    const now = new Date();
    const addMonths = (d, m) => { const r = new Date(d); r.setMonth(r.getMonth() + m); return r.toISOString().split('T')[0]; };
    return [
      { label: 'This month', value: addMonths(now, 0) },
      { label: '2-3 months', value: addMonths(now, 2) },
      { label: '6+ months', value: addMonths(now, 6) },
      { label: 'Not scheduled', value: 'not-scheduled' },
    ];
  };

  const steps = [
    // Step 0: Welcome
    () => (
      <div style={{ textAlign: 'center', animation: 'fadeInUp 400ms ease' }}>
        <div style={{
          width: '64px',
          height: '64px',
          background: `linear-gradient(135deg, ${colors.accent.orange}, ${colors.accent.orangeHover})`,
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '28px',
          fontWeight: '700',
          margin: '0 auto 2rem',
        }}>P</div>

        <h1 style={{
          fontSize: typography.sizes['3xl'],
          fontWeight: typography.weights.bold,
          color: colors.text.primary,
          marginBottom: spacing.sm,
          letterSpacing: typography.letterSpacing.tight,
        }}>
          Welcome to Perform, {user?.firstName || 'Student'}!
        </h1>

        <p style={{
          fontSize: typography.sizes.md,
          color: colors.text.secondary,
          marginBottom: spacing['2xl'],
          lineHeight: typography.lineHeights.relaxed,
        }}>
          Let's set up your personalized SAT Math study plan.
        </p>

        <Button
          onClick={() => setStep(1)}
          variant="primary"
          style={{ width: '100%', maxWidth: '320px', fontSize: typography.sizes.md }}
        >
          Get Started
        </Button>
      </div>
    ),

    // Step 1: Target Score
    () => (
      <div style={{ animation: 'fadeInUp 400ms ease' }}>
        <h2 style={{
          fontSize: typography.sizes['2xl'],
          fontWeight: typography.weights.bold,
          color: colors.text.primary,
          marginBottom: spacing.xs,
          textAlign: 'center',
        }}>
          What score are you aiming for?
        </h2>
        <p style={{
          fontSize: typography.sizes.base,
          color: colors.text.secondary,
          marginBottom: spacing['2xl'],
          textAlign: 'center',
        }}>
          We'll build your study plan around this goal.
        </p>

        {/* Score Display */}
        <div style={{
          textAlign: 'center',
          marginBottom: spacing.lg,
        }}>
          <span style={{
            fontSize: '64px',
            fontWeight: typography.weights.bold,
            color: colors.accent.orange,
            lineHeight: 1,
          }}>
            {targetScore}
          </span>
        </div>

        {/* Score Slider */}
        <div style={{ padding: `0 ${spacing.md}`, marginBottom: spacing.lg }}>
          <input
            type="range"
            min="400"
            max="800"
            step="10"
            value={targetScore}
            onChange={(e) => setTargetScore(parseInt(e.target.value))}
            aria-label="Target SAT Math score"
            style={{
              width: '100%',
              height: '8px',
              borderRadius: '4px',
              appearance: 'none',
              background: `linear-gradient(to right, ${colors.accent.orange} ${((targetScore - 400) / 400) * 100}%, ${colors.surface.grayDark} ${((targetScore - 400) / 400) * 100}%)`,
              outline: 'none',
              cursor: 'pointer',
            }}
          />
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: typography.sizes.xs,
            color: colors.text.muted,
            marginTop: spacing.xs,
          }}>
            <span>400</span>
            <span>600</span>
            <span>800</span>
          </div>
        </div>

        {/* Score Context */}
        <div style={{
          ...cardStyles.base,
          textAlign: 'center',
          marginBottom: spacing.xl,
        }}>
          <span style={{ fontSize: typography.sizes.sm, color: colors.text.secondary }}>
            {targetScore >= 750 ? 'Top-tier universities (MIT, Stanford, Ivy League)' :
             targetScore >= 700 ? 'Highly competitive schools (UCLA, UMich, NYU)' :
             targetScore >= 650 ? 'Strong competitive range (most state flagships)' :
             targetScore >= 600 ? 'Solid foundation — great improvement target' :
             'Building fundamentals — every point counts!'}
          </span>
        </div>

        <div style={{ display: 'flex', gap: spacing.sm }}>
          <Button onClick={() => setStep(0)} variant="ghost" style={{ flex: 1 }}>
            Back
          </Button>
          <Button onClick={() => setStep(2)} variant="primary" style={{ flex: 2 }}>
            Continue
          </Button>
        </div>
      </div>
    ),

    // Step 2: Test Date
    () => (
      <div style={{ animation: 'fadeInUp 400ms ease' }}>
        <h2 style={{
          fontSize: typography.sizes['2xl'],
          fontWeight: typography.weights.bold,
          color: colors.text.primary,
          marginBottom: spacing.xs,
          textAlign: 'center',
        }}>
          When is your SAT?
        </h2>
        <p style={{
          fontSize: typography.sizes.base,
          color: colors.text.secondary,
          marginBottom: spacing['2xl'],
          textAlign: 'center',
        }}>
          We'll pace your study plan based on this.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm, marginBottom: spacing.xl }}>
          {getTestDatePresets().map(preset => (
            <button
              key={preset.value}
              onClick={() => { setTestDateOption(preset.value); setCustomDate(''); }}
              style={{
                ...cardStyles.interactive,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: testDateOption === preset.value
                  ? `2px solid ${colors.accent.orange}`
                  : `1px solid ${colors.surface.grayDark}`,
                background: testDateOption === preset.value ? colors.accent.orangeLight : colors.surface.white,
              }}
            >
              <span style={{
                fontSize: typography.sizes.md,
                fontWeight: testDateOption === preset.value ? typography.weights.semibold : typography.weights.medium,
                color: colors.text.primary,
              }}>
                {preset.label}
              </span>
              {testDateOption === preset.value && (
                <CheckIcon size={20} color={colors.accent.orange} />
              )}
            </button>
          ))}

          {/* Custom date option */}
          <button
            onClick={() => setTestDateOption('custom')}
            style={{
              ...cardStyles.interactive,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: testDateOption === 'custom'
                ? `2px solid ${colors.accent.orange}`
                : `1px solid ${colors.surface.grayDark}`,
              background: testDateOption === 'custom' ? colors.accent.orangeLight : colors.surface.white,
            }}
          >
            <span style={{
              fontSize: typography.sizes.md,
              fontWeight: testDateOption === 'custom' ? typography.weights.semibold : typography.weights.medium,
              color: colors.text.primary,
            }}>
              Pick a specific date
            </span>
          </button>
          {testDateOption === 'custom' && (
            <input
              type="date"
              value={customDate}
              onChange={(e) => setCustomDate(e.target.value)}
              style={{ ...inputStyles.base, marginTop: spacing.xs }}
              aria-label="SAT test date"
            />
          )}
        </div>

        <div style={{ display: 'flex', gap: spacing.sm }}>
          <Button onClick={() => setStep(1)} variant="ghost" style={{ flex: 1 }}>
            Back
          </Button>
          <Button
            onClick={() => setStep(3)}
            disabled={!testDateOption}
            variant="primary"
            style={{ flex: 2, opacity: testDateOption ? 1 : 0.5 }}
          >
            Continue
          </Button>
        </div>
      </div>
    ),

    // Step 3: Baseline
    () => (
      <div style={{ animation: 'fadeInUp 400ms ease' }}>
        <h2 style={{
          fontSize: typography.sizes['2xl'],
          fontWeight: typography.weights.bold,
          color: colors.text.primary,
          marginBottom: spacing.xs,
          textAlign: 'center',
        }}>
          Have you taken a practice test?
        </h2>
        <p style={{
          fontSize: typography.sizes.base,
          color: colors.text.secondary,
          marginBottom: spacing['2xl'],
          textAlign: 'center',
        }}>
          Your starting score helps us measure progress.
        </p>

        <div style={{ display: 'flex', gap: spacing.md, marginBottom: spacing.xl }}>
          <button
            onClick={() => setHasScore(true)}
            style={{
              ...cardStyles.interactive,
              flex: 1,
              textAlign: 'center',
              border: hasScore === true ? `2px solid ${colors.accent.orange}` : `1px solid ${colors.surface.grayDark}`,
              background: hasScore === true ? colors.accent.orangeLight : colors.surface.white,
            }}
          >
            <div style={{ marginBottom: spacing.xs }}><CheckIcon size={32} color={colors.accent.orange} /></div>
            <div style={{ fontSize: typography.sizes.md, fontWeight: typography.weights.semibold, color: colors.text.primary }}>
              Yes, I have a score
            </div>
          </button>

          <button
            onClick={() => setHasScore(false)}
            style={{
              ...cardStyles.interactive,
              flex: 1,
              textAlign: 'center',
              border: hasScore === false ? `2px solid ${colors.accent.orange}` : `1px solid ${colors.surface.grayDark}`,
              background: hasScore === false ? colors.accent.orangeLight : colors.surface.white,
            }}
          >
            <div style={{ marginBottom: spacing.xs }}><DocumentIcon size={32} color={colors.semantic.info} /></div>
            <div style={{ fontSize: typography.sizes.md, fontWeight: typography.weights.semibold, color: colors.text.primary }}>
              No, let's find out
            </div>
          </button>
        </div>

        {hasScore === true && (
          <div style={{ marginBottom: spacing.xl, animation: 'fadeInUp 300ms ease' }}>
            <label style={{
              display: 'block',
              fontSize: typography.sizes.sm,
              fontWeight: typography.weights.medium,
              color: colors.text.secondary,
              marginBottom: spacing.xs,
            }}>
              Your SAT Math score (200-800)
            </label>
            <input
              type="number"
              min="200"
              max="800"
              step="10"
              value={currentScore}
              onChange={(e) => setCurrentScore(e.target.value)}
              placeholder="e.g. 580"
              style={inputStyles.base}
              aria-label="Current SAT Math score"
            />
            {currentScore && (parseInt(currentScore) < 200 || parseInt(currentScore) > 800) && (
              <p style={{
                fontSize: typography.sizes.sm,
                color: colors.semantic.error,
                marginTop: spacing.xs,
              }}>
                Enter a score between 200 and 800
              </p>
            )}
          </div>
        )}

        {error && (
          <p role="alert" style={{
            fontSize: typography.sizes.sm,
            color: colors.semantic.error,
            marginBottom: spacing.md,
            textAlign: 'center',
          }}>
            {error}
          </p>
        )}

        <div style={{ display: 'flex', gap: spacing.sm }}>
          <Button onClick={() => setStep(2)} variant="ghost" style={{ flex: 1 }}>
            Back
          </Button>
          <Button
            onClick={handleFinish}
            disabled={hasScore === null || saving || (hasScore && (!currentScore || parseInt(currentScore) < 200 || parseInt(currentScore) > 800))}
            variant="primary"
            style={{ flex: 2, opacity: (hasScore === null || saving) ? 0.5 : 1 }}
          >
            {saving ? 'Saving...' : hasScore === false ? 'Take Practice Test' : 'Go to Dashboard'}
          </Button>
        </div>
      </div>
    ),
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(180deg, ${colors.accent.orangeLight} 0%, ${colors.surface.white} 40%)`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: spacing.xl,
      fontFamily: typography.fontFamily,
    }}>
      {/* Step Indicator */}
      <div role="group" aria-label="Onboarding progress" style={{
        display: 'flex',
        gap: spacing.xs,
        marginBottom: spacing['2xl'],
      }}>
        {[0, 1, 2, 3].map(i => (
          <button
            key={i}
            onClick={() => i < step && setStep(i)}
            aria-label={`Step ${i + 1} of 4${i === step ? ', current step' : i < step ? ', completed' : ''}`}
            aria-current={i === step ? 'step' : undefined}
            tabIndex={i < step ? 0 : -1}
            style={{
              width: i === step ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i <= step ? colors.accent.orange : colors.surface.grayDark,
              border: 'none',
              cursor: i < step ? 'pointer' : 'default',
              transition: `all ${transitions.normal}`,
            }}
          />
        ))}
      </div>

      {/* Step Content */}
      <div style={{
        width: '100%',
        maxWidth: '440px',
      }}>
        {steps[step]()}
      </div>
    </div>
  );
};

export default Onboarding;
