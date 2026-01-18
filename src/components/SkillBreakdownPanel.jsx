import React, { useState } from 'react';
import { skillTaxonomy } from '../data/skillTaxonomy';

// Module display names
const MODULE_NAMES = {
  'linear-equations': 'Linear Equations',
  'functions': 'Functions',
  'systems': 'System of Equations',
  'transformations': 'Transformations',
  'exponents': 'Exponents',
  'percents': 'Percents',
  'equivalent-expressions': 'Equivalent Expressions',
  'quadratics': 'Quadratics',
  'radians-degrees': 'Radians & Degrees',
  'triangles': 'Triangles',
  'circles': 'Circles',
  'volume': 'Volume',
  'statistics': 'Statistics',
  'dimensional-analysis': 'Dimensional Analysis'
};

/**
 * Expandable hierarchical view showing skill breakdown
 * Domain > Module > Section > Individual Skills with mastery %
 */
const SkillBreakdownPanel = ({ skillBreakdown }) => {
  const [expandedDomains, setExpandedDomains] = useState({});
  const [expandedModules, setExpandedModules] = useState({});
  const [expandedSections, setExpandedSections] = useState({});

  if (!skillBreakdown || Object.keys(skillBreakdown).length === 0) {
    return (
      <div style={{
        background: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
          Skill Breakdown
        </h3>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          Complete practice questions to see your detailed skill breakdown.
        </p>
      </div>
    );
  }

  const toggleDomain = (domainId) => {
    setExpandedDomains(prev => ({ ...prev, [domainId]: !prev[domainId] }));
  };

  const toggleModule = (key) => {
    setExpandedModules(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSection = (key) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Get mastery bar color
  const getMasteryColor = (mastery) => {
    if (mastery === null || mastery === undefined) return '#e5e7eb';
    if (mastery >= 80) return '#22c55e';
    if (mastery >= 60) return '#f59e0b';
    return '#ef4444';
  };

  // Get trend indicator
  const getTrendIndicator = (trend) => {
    if (trend === 'improving') return { symbol: '\u2191', color: '#16a34a' };
    if (trend === 'declining') return { symbol: '\u2193', color: '#dc2626' };
    return { symbol: '-', color: '#9ca3af' };
  };

  // Render mastery bar
  const MasteryBar = ({ mastery, width = 100 }) => (
    <div style={{
      width: `${width}px`,
      height: '6px',
      background: '#e5e7eb',
      borderRadius: '3px',
      overflow: 'hidden'
    }}>
      <div style={{
        height: '100%',
        width: `${mastery || 0}%`,
        background: getMasteryColor(mastery),
        borderRadius: '3px',
        transition: 'width 0.3s ease'
      }} />
    </div>
  );

  // Calculate domain average from all skills
  const getDomainAverage = (domain) => {
    let total = 0;
    let count = 0;

    Object.values(domain.modules || {}).forEach(sections => {
      Object.values(sections).forEach(skills => {
        skills.forEach(skill => {
          if (skill.progress) {
            total += skill.progress.mastery;
            count++;
          }
        });
      });
    });

    return count > 0 ? Math.round(total / count) : null;
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      padding: '24px'
    }}>
      <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
        Skill Breakdown
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {Object.entries(skillBreakdown).map(([domainId, domain]) => {
          const isDomainExpanded = expandedDomains[domainId];
          const domainAvg = getDomainAverage(domain);
          const hasModules = Object.keys(domain.modules || {}).length > 0;

          return (
            <div key={domainId}>
              {/* Domain Row */}
              <div
                onClick={() => hasModules && toggleDomain(domainId)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: '#f9fafb',
                  borderRadius: '8px',
                  cursor: hasModules ? 'pointer' : 'default',
                  borderLeft: `4px solid ${domain.color}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    transform: isDomainExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                    opacity: hasModules ? 1 : 0
                  }}>
                    &#9658;
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: '600', color: '#111827' }}>
                    {domain.name}
                  </span>
                </div>
                {domainAvg !== null && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <MasteryBar mastery={domainAvg} width={80} />
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: getMasteryColor(domainAvg),
                      minWidth: '40px',
                      textAlign: 'right'
                    }}>
                      {domainAvg}%
                    </span>
                  </div>
                )}
              </div>

              {/* Modules (expanded) */}
              {isDomainExpanded && hasModules && (
                <div style={{ marginLeft: '20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {Object.entries(domain.modules).map(([moduleId, sections]) => {
                    const moduleKey = `${domainId}-${moduleId}`;
                    const isModuleExpanded = expandedModules[moduleKey];
                    const hasSections = Object.keys(sections).length > 0;

                    // Calculate module average
                    let moduleTotal = 0;
                    let moduleCount = 0;
                    Object.values(sections).forEach(skills => {
                      skills.forEach(skill => {
                        if (skill.progress) {
                          moduleTotal += skill.progress.mastery;
                          moduleCount++;
                        }
                      });
                    });
                    const moduleAvg = moduleCount > 0 ? Math.round(moduleTotal / moduleCount) : null;

                    return (
                      <div key={moduleKey}>
                        {/* Module Row */}
                        <div
                          onClick={() => hasSections && toggleModule(moduleKey)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 14px',
                            background: '#f3f4f6',
                            borderRadius: '6px',
                            cursor: hasSections ? 'pointer' : 'default'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{
                              fontSize: '10px',
                              color: '#9ca3af',
                              transform: isModuleExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s',
                              opacity: hasSections ? 1 : 0
                            }}>
                              &#9658;
                            </span>
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                              {MODULE_NAMES[moduleId] || moduleId}
                            </span>
                          </div>
                          {moduleAvg !== null && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <MasteryBar mastery={moduleAvg} width={60} />
                              <span style={{
                                fontSize: '13px',
                                fontWeight: '600',
                                color: getMasteryColor(moduleAvg),
                                minWidth: '36px',
                                textAlign: 'right'
                              }}>
                                {moduleAvg}%
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Sections (expanded) */}
                        {isModuleExpanded && hasSections && (
                          <div style={{ marginLeft: '20px', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {Object.entries(sections).map(([sectionName, skills]) => {
                              const sectionKey = `${moduleKey}-${sectionName}`;
                              const isSectionExpanded = expandedSections[sectionKey];
                              const hasSkills = skills.length > 0;

                              // Calculate section average
                              const skillsWithProgress = skills.filter(s => s.progress);
                              const sectionAvg = skillsWithProgress.length > 0
                                ? Math.round(skillsWithProgress.reduce((sum, s) => sum + s.progress.mastery, 0) / skillsWithProgress.length)
                                : null;

                              return (
                                <div key={sectionKey}>
                                  {/* Section Row */}
                                  <div
                                    onClick={() => hasSkills && toggleSection(sectionKey)}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      padding: '8px 12px',
                                      background: '#fafafa',
                                      borderRadius: '4px',
                                      cursor: hasSkills ? 'pointer' : 'default'
                                    }}
                                  >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                      <span style={{
                                        fontSize: '9px',
                                        color: '#9ca3af',
                                        transform: isSectionExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.2s',
                                        opacity: hasSkills ? 1 : 0
                                      }}>
                                        &#9658;
                                      </span>
                                      <span style={{ fontSize: '13px', color: '#4b5563' }}>
                                        {sectionName}
                                      </span>
                                    </div>
                                    {sectionAvg !== null && (
                                      <span style={{
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        color: getMasteryColor(sectionAvg)
                                      }}>
                                        {sectionAvg}%
                                      </span>
                                    )}
                                  </div>

                                  {/* Skills (expanded) */}
                                  {isSectionExpanded && hasSkills && (
                                    <div style={{ marginLeft: '20px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                      {skills.map((skill) => {
                                        const trend = skill.progress ? getTrendIndicator(skill.progress.trend) : null;

                                        return (
                                          <div
                                            key={skill.id}
                                            style={{
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'space-between',
                                              padding: '6px 10px',
                                              background: skill.progress
                                                ? (skill.progress.mastery >= 80 ? '#f0fdf4' : skill.progress.mastery < 60 ? '#fef2f2' : '#fffbeb')
                                                : 'white',
                                              borderRadius: '4px',
                                              border: '1px solid #e5e7eb'
                                            }}
                                          >
                                            <span style={{
                                              fontSize: '12px',
                                              color: '#374151',
                                              flex: 1
                                            }}>
                                              {skill.name}
                                            </span>
                                            {skill.progress ? (
                                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <MasteryBar mastery={skill.progress.mastery} width={50} />
                                                <span style={{
                                                  fontSize: '12px',
                                                  fontWeight: '600',
                                                  color: getMasteryColor(skill.progress.mastery),
                                                  minWidth: '32px',
                                                  textAlign: 'right'
                                                }}>
                                                  {skill.progress.mastery}%
                                                </span>
                                                {trend && (
                                                  <span style={{
                                                    fontSize: '10px',
                                                    color: trend.color,
                                                    fontWeight: 'bold'
                                                  }}>
                                                    {trend.symbol}
                                                  </span>
                                                )}
                                              </div>
                                            ) : (
                                              <span style={{
                                                fontSize: '11px',
                                                color: '#9ca3af',
                                                fontStyle: 'italic'
                                              }}>
                                                Not practiced
                                              </span>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillBreakdownPanel;
