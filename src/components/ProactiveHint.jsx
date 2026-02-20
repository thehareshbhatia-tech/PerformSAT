import { colors, radius, shadows, transitions } from '../design/tokens';
import { InfoIcon, WarningIcon, BookOpenIcon, LightBulbIcon, ArrowRightIcon, CrossIcon } from '../design/icons';

/**
 * ProactiveHint Component
 * Displays proactive recommendations and hints in the AI Tutor interface.
 * Shows contextual suggestions based on student's skill progress.
 */

const ProactiveHint = ({ recommendation, onDismiss, onAccept }) => {
  if (!recommendation) return null;

  // Style configurations for different recommendation types
  const typeStyles = {
    'struggle': {
      bg: colors.semantic.warningBg,
      border: colors.semantic.warning,
      iconBg: colors.semantic.warning,
      icon: <InfoIcon size={20} color={colors.semantic.warning} />
    },
    'declining': {
      bg: colors.semantic.errorBg,
      border: colors.semantic.error,
      iconBg: colors.semantic.error,
      icon: <WarningIcon size={20} color={colors.semantic.error} />
    },
    'next-study': {
      bg: colors.semantic.infoBg,
      border: colors.semantic.info,
      iconBg: colors.semantic.info,
      icon: <BookOpenIcon size={20} color={colors.semantic.info} />
    },
    'hint-offer': {
      bg: colors.semantic.successLight,
      border: colors.semantic.success,
      iconBg: colors.semantic.success,
      icon: <LightBulbIcon size={20} color={colors.semantic.success} />
    }
  };

  const style = typeStyles[recommendation.type] || typeStyles['hint-offer'];

  return (
    <div style={{
      background: style.bg,
      border: `1px solid ${style.border}`,
      borderRadius: radius.md,
      padding: '16px',
      marginBottom: '16px',
      animation: 'slideIn 0.3s ease-out'
    }}>
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px'
      }}>
        {/* Icon */}
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: radius.sm,
          background: colors.surface.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: shadows.sm
        }}>
          {style.icon}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            fontWeight: '600',
            fontSize: '14px',
            color: colors.text.primary,
            marginBottom: '6px',
            margin: 0
          }}>
            {recommendation.title}
          </p>

          <p style={{
            fontSize: '13px',
            color: colors.text.secondary,
            lineHeight: '1.5',
            margin: '6px 0 0 0'
          }}>
            {recommendation.message}
          </p>

          {/* Skill info badge */}
          {recommendation.skillName && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginTop: '10px',
              padding: '4px 10px',
              background: 'rgba(255,255,255,0.7)',
              borderRadius: '6px',
              fontSize: '12px',
              color: colors.text.secondary
            }}>
              <span style={{ fontWeight: '500' }}>{recommendation.skillName}</span>
              {recommendation.mastery !== undefined && (
                <span style={{
                  color: recommendation.mastery < 50 ? colors.semantic.error :
                         recommendation.mastery < 70 ? colors.semantic.warning : colors.semantic.success,
                  fontWeight: '600'
                }}>
                  {recommendation.mastery}%
                </span>
              )}
            </div>
          )}

          {/* Action button */}
          {recommendation.action && onAccept && (
            <button
              onClick={() => onAccept(recommendation)}
              style={{
                marginTop: '12px',
                padding: '8px 16px',
                background: colors.surface.dark,
                color: colors.text.inverse,
                border: 'none',
                borderRadius: radius.sm,
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: `background ${transitions.fast}`
              }}
              onMouseEnter={(e) => e.target.style.background = colors.text.secondary}
              onMouseLeave={(e) => e.target.style.background = colors.surface.dark}
            >
              {recommendation.actionLabel || 'Try it'}
              <ArrowRightIcon size={14} color="currentColor" />
            </button>
          )}
        </div>

        {/* Dismiss button */}
        {onDismiss && (
          <button
            onClick={onDismiss}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: colors.text.muted,
              padding: '4px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: `color ${transitions.fast}`
            }}
            onMouseEnter={(e) => e.target.style.color = colors.text.secondary}
            onMouseLeave={(e) => e.target.style.color = colors.text.muted}
            aria-label="Dismiss"
          >
            <CrossIcon size={18} color="currentColor" />
          </button>
        )}
      </div>

      {/* Related skills (for next-study type) */}
      {recommendation.relatedSkills && recommendation.relatedSkills.length > 0 && (
        <div style={{
          marginTop: '12px',
          paddingTop: '12px',
          borderTop: '1px solid rgba(0,0,0,0.1)'
        }}>
          <p style={{
            fontSize: '11px',
            color: colors.text.secondary,
            marginBottom: '6px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Related concepts:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {recommendation.relatedSkills.map(skill => (
              <span
                key={skill.id}
                style={{
                  fontSize: '12px',
                  color: colors.text.secondary,
                  background: 'rgba(255,255,255,0.7)',
                  padding: '3px 8px',
                  borderRadius: '4px'
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProactiveHint;
