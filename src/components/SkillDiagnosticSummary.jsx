import React from 'react';
import { skillTaxonomy } from '../data/skillTaxonomy';

/**
 * Quick summary card showing skill-based strengths and weaknesses
 * Displays overall mastery, focus areas, and strong skills
 */
const SkillDiagnosticSummary = ({ diagnosticSummary, onPracticeSkill }) => {
  if (!diagnosticSummary || diagnosticSummary.totalSkillsAttempted === 0) {
    return (
      <div style={{
        background: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
          Skill Diagnostic
        </h3>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          Complete some practice questions to see your skill breakdown.
        </p>
      </div>
    );
  }

  const { overallMastery, weakSkills, strongSkills, domainProgress } = diagnosticSummary;

  // Get mastery color
  const getMasteryColor = (mastery) => {
    if (mastery >= 80) return '#16a34a';
    if (mastery >= 60) return '#ea580c';
    return '#dc2626';
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      padding: '24px'
    }}>
      {/* Header with overall readiness */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
          SAT Math Readiness
        </h3>
        <div style={{
          fontSize: '24px',
          fontWeight: '700',
          color: getMasteryColor(overallMastery)
        }}>
          {overallMastery}%
        </div>
      </div>

      {/* Domain progress bars */}
      <div style={{ marginBottom: '20px' }}>
        {Object.entries(domainProgress).map(([domainId, progress]) => {
          const domain = skillTaxonomy.domains[domainId];
          if (!domain || progress.skillsAttempted === 0) return null;

          return (
            <div key={domainId} style={{ marginBottom: '12px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '4px'
              }}>
                <span style={{ fontSize: '13px', color: '#374151', fontWeight: '500' }}>
                  {domain.name}
                </span>
                <span style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: getMasteryColor(progress.avgMastery)
                }}>
                  {progress.avgMastery}%
                </span>
              </div>
              <div style={{
                height: '6px',
                background: '#e5e7eb',
                borderRadius: '3px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  width: `${progress.avgMastery}%`,
                  background: domain.color,
                  borderRadius: '3px',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Weak skills - Focus areas */}
      {weakSkills.length > 0 && (
        <div style={{ marginBottom: '16px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '10px'
          }}>
            <span style={{ fontSize: '14px' }}>&#9888;&#65039;</span>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#dc2626' }}>
              Focus Areas ({weakSkills.length} skill{weakSkills.length !== 1 ? 's' : ''})
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {weakSkills.slice(0, 3).map((item) => (
              <div
                key={item.skillId}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 12px',
                  background: '#fef2f2',
                  borderRadius: '8px',
                  cursor: onPracticeSkill ? 'pointer' : 'default'
                }}
                onClick={() => onPracticeSkill && onPracticeSkill(item.skillId)}
              >
                <span style={{ fontSize: '13px', color: '#7f1d1d' }}>
                  {item.skill?.name || item.skillId}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#dc2626'
                  }}>
                    {item.mastery}%
                  </span>
                  {onPracticeSkill && (
                    <span style={{
                      fontSize: '12px',
                      color: '#dc2626',
                      padding: '2px 8px',
                      background: '#fee2e2',
                      borderRadius: '4px'
                    }}>
                      Practice
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Strong skills */}
      {strongSkills.length > 0 && (
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '10px'
          }}>
            <span style={{ fontSize: '14px' }}>&#10003;</span>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#16a34a' }}>
              Strengths ({strongSkills.length} skill{strongSkills.length !== 1 ? 's' : ''})
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {strongSkills.slice(0, 5).map((item) => (
              <span
                key={item.skillId}
                style={{
                  fontSize: '12px',
                  color: '#166534',
                  background: '#dcfce7',
                  padding: '4px 10px',
                  borderRadius: '12px'
                }}
              >
                {item.skill?.name || item.skillId} - {item.mastery}%
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillDiagnosticSummary;
