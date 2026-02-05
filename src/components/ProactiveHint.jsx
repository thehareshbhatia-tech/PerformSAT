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
      bg: '#fef3c7',
      border: '#fcd34d',
      iconBg: '#fbbf24',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      )
    },
    'declining': {
      bg: '#fee2e2',
      border: '#fca5a5',
      iconBg: '#f87171',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#991b1b" strokeWidth="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      )
    },
    'next-study': {
      bg: '#dbeafe',
      border: '#93c5fd',
      iconBg: '#3b82f6',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      )
    },
    'hint-offer': {
      bg: '#f0fdf4',
      border: '#86efac',
      iconBg: '#22c55e',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      )
    }
  };

  const style = typeStyles[recommendation.type] || typeStyles['hint-offer'];

  return (
    <div style={{
      background: style.bg,
      border: `1px solid ${style.border}`,
      borderRadius: '12px',
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
          borderRadius: '8px',
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
        }}>
          {style.icon}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            fontWeight: '600',
            fontSize: '14px',
            color: '#111827',
            marginBottom: '6px',
            margin: 0
          }}>
            {recommendation.title}
          </p>

          <p style={{
            fontSize: '13px',
            color: '#4b5563',
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
              color: '#374151'
            }}>
              <span style={{ fontWeight: '500' }}>{recommendation.skillName}</span>
              {recommendation.mastery !== undefined && (
                <span style={{
                  color: recommendation.mastery < 50 ? '#dc2626' :
                         recommendation.mastery < 70 ? '#ca8a04' : '#16a34a',
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
                background: '#111827',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#374151'}
              onMouseLeave={(e) => e.target.style.background = '#111827'}
            >
              {recommendation.actionLabel || 'Try it'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
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
              color: '#9ca3af',
              padding: '4px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#6b7280'}
            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
            aria-label="Dismiss"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
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
            color: '#6b7280',
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
                  color: '#374151',
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
