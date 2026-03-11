const fs = require('fs');
const path = '/Users/hareshbhatia/PerformSAT/src/components/TestResults.jsx';

let content = fs.readFileSync(path, 'utf8');

const startTag = '  const renderDiagnosticView = () => {';
const endTag = '      `}</style>';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag) + endTag.length;

if (startIndex === -1 || endIndex < startTag.length) {
  console.error("Tags not found!");
  process.exit(1);
}

const newBlock = `  const renderDiagnosticView = () => {
    if (!diagUI) {
      return (
        <div style={{ textAlign: 'center', padding: '80px 20px', color: colors.text.secondary }}>
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChartBarIcon size={40} color={colors.text.muted} />
            </div>
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: '600', color: colors.text.primary, marginBottom: '8px', letterSpacing: '-0.02em' }}>
            Diagnostic Insights Unavailable
          </h3>
          <p style={{ fontSize: '15px', color: colors.text.secondary, maxWidth: '400px', margin: '0 auto', lineHeight: '1.5' }}>
            Complete a full practice test to unlock AI-powered analysis and detailed performance breakdowns.
          </p>
        </div>
      );
    }

    const isGenerating = aiStatus === 'generating';
    const hasFailed = aiStatus === 'failed';
    const hasAI = aiStatus === 'ready' && !!aiNarrative;
    const merged = hasAI ? mergeAiIntoReport(diagUI.report, aiNarrative) : diagUI.report;
    if (!merged) return null;

    const uni = buildUnifiedReport(merged);
    if (!uni) return null;
    const narrative = buildNarrativeFlow(uni);
    if (!narrative) return null;

    const { blocks, details, meta } = narrative;

    const aiGradient = 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)';
    const aiGradientText = {
      background: aiGradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent'
    };

    const sevColors = {
      critical:    { bg: 'rgba(239,68,68,0.05)', border: 'rgba(239,68,68,0.15)', dot: '#ef4444' },
      significant: { bg: 'rgba(239,68,68,0.03)', border: 'rgba(239,68,68,0.1)', dot: '#ef4444' },
      moderate:    { bg: 'rgba(245,158,11,0.05)', border: 'rgba(245,158,11,0.15)', dot: '#f59e0b' },
      warning:     { bg: 'rgba(245,158,11,0.03)', border: 'rgba(245,158,11,0.1)', dot: '#f59e0b' },
    };

    const renderBlock = (block, idx) => {
      if (block.id === 'context') {
        return (
          <div key={block.id} style={{ padding: '48px', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle glow behind title */}
            <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '250px', height: '250px', background: aiGradient, filter: 'blur(80px)', opacity: '0.08', borderRadius: '50%', pointerEvents: 'none' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '14px',
                  background: aiGradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(99,102,241,0.25)'
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '26px', fontWeight: '700', color: colors.text.primary, margin: 0, letterSpacing: '-0.03em' }}>
                  {block.label}
                </h2>
              </div>
              {meta.hasAI && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '8px 16px', borderRadius: '20px',
                  background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(99,102,241,0.15)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)', backdropFilter: 'blur(8px)'
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6', boxShadow: '0 0 8px #8b5cf6' }} />
                  <span style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.04em', textTransform: 'uppercase', ...aiGradientText }}>
                    AI Analysis
                  </span>
                </div>
              )}
            </div>

            {isGenerating ? (
              <div style={{ padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', border: '3px solid rgba(99,102,241,0.1)', borderTopColor: '#8b5cf6', borderRadius: '50%', margin: '0 auto 24px', animation: 'spin 1s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite' }} />
                <div style={{ fontSize: '18px', fontWeight: '600', ...aiGradientText }}>Synthesizing performance insights...</div>
              </div>
            ) : hasFailed ? (
              <div style={{ padding: '24px', borderRadius: '20px', background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '15px', color: '#92400e', fontWeight: '500' }}>AI analysis could not load. Displaying underlying data insights.</span>
                {onRetryAiDiagnostic && <button onClick={onRetryAiDiagnostic} style={{ padding: '10px 20px', borderRadius: '12px', border: 'none', background: '#f59e0b', color: '#fff', fontSize: '13px', fontWeight: '700', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 12px rgba(245,158,11,0.2)' }}>Retry AI</button>}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {block.items.map((pt, i) => {
                  const colonIdx = pt.indexOf(':');
                  const periodIdx = pt.indexOf('.');
                  // Use first punctuation to bold the first phrase, but only if it's reasonably short
                  let splitIdx = -1;
                  if (colonIdx !== -1 && colonIdx < 60) splitIdx = colonIdx;
                  else if (periodIdx !== -1 && periodIdx < 60) splitIdx = periodIdx;
                  
                  return (
                    <div key={i} className="insight-row">
                      <div className="insight-bullet">
                        {i + 1}
                      </div>
                      <div style={{
                        fontSize: '18px', fontWeight: '500', color: '#334155',
                        lineHeight: '1.5', letterSpacing: '-0.015em'
                      }}>
                        {splitIdx !== -1 ? (
                          <>
                            <strong style={{ fontWeight: '700', color: '#0f172a' }}>{pt.substring(0, splitIdx + 1)}</strong>
                            <span>{pt.substring(splitIdx + 1)}</span>
                          </>
                        ) : (
                          pt
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      }

      if (block.id === 'metaStrip') {
        return (
          <div key={block.id} style={{ padding: '0 48px 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
              {block.items.map((s, i) => {
                const valColor = s.type === 'warning' ? '#d97706' : s.type === 'success' ? '#16a34a' : s.type === 'info' ? '#0ea5e9' : colors.text.primary;
                return (
                  <div key={i} className="stat-card">
                    <div style={{ fontSize: '36px', fontWeight: '800', color: valColor, lineHeight: 1, letterSpacing: '-0.03em' }}>{s.value}</div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.secondary, marginTop: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                    {s.subtext && <div style={{ fontSize: '13px', color: colors.text.muted, marginTop: '6px', fontWeight: '500' }}>{s.subtext}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        );
      }

      if (block.id === 'primaryCause') {
        return (
          <div key={block.id} style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.text.primary, marginBottom: '24px', letterSpacing: '-0.02em' }}>Core Issues</h3>
            {block.transition && (
              <div style={{ fontSize: '15px', color: colors.text.secondary, fontWeight: '500', marginBottom: '24px', lineHeight: '1.5' }}>{block.transition}</div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {block.items.map((d, i) => {
                if (d.type === 'pattern') {
                  const sc = sevColors[d.severity] || sevColors.moderate;
                  return (
                    <div key={i} style={{ padding: '24px', borderRadius: '20px', background: 'rgba(255,255,255,0.7)', border: \`1px solid \${sc.border}\`, position: 'relative', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: sc.dot }} />
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <span style={{ flex: 1, fontSize: '16px', fontWeight: '600', color: colors.text.primary, lineHeight: '1.5' }}>{d.text}</span>
                        {d.estimatedPointGain && (
                          <span style={{ fontSize: '13px', fontWeight: '800', color: '#16a34a', background: 'rgba(34,197,94,0.1)', padding: '6px 12px', borderRadius: '10px', whiteSpace: 'nowrap' }}>+{d.estimatedPointGain} pts</span>
                        )}
                      </div>
                      {d.impact && (
                        <div style={{ fontSize: '14px', color: colors.text.secondary, fontWeight: '500', marginTop: '12px' }}>{d.impact}</div>
                      )}
                    </div>
                  );
                }
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '8px 0' }}>
                    <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: '#cbd5e1', marginTop: '10px' }} />
                    <span style={{ fontSize: '16px', color: colors.text.secondary, lineHeight: '1.6' }}>{d.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }

      if (block.id === 'behaviorAmplifier') {
        return (
          <div key={block.id} style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.text.primary, marginBottom: '24px', letterSpacing: '-0.02em' }}>Test Behavior</h3>
            {block.transition && (
              <div style={{ fontSize: '15px', color: colors.text.secondary, fontWeight: '500', marginBottom: '24px', lineHeight: '1.5' }}>{block.transition}</div>
            )}
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {block.items.map((pt, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', fontSize: '16px', color: colors.text.secondary, lineHeight: '1.6' }}>
                  <span style={{ flexShrink: 0, width: '8px', height: '8px', borderRadius: '50%', background: '#94a3b8', marginTop: '10px' }} />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        );
      }

      if (block.id === 'evidence') {
        return (
          <div key={block.id} style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.text.primary, marginBottom: '24px', letterSpacing: '-0.02em' }}>Data Evidence</h3>
            {block.transition && (
              <div style={{ fontSize: '15px', color: colors.text.secondary, fontWeight: '500', marginBottom: '24px', lineHeight: '1.5' }}>{block.transition}</div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
              {block.items.map((ev, i) => {
                const evColor = ev.type === 'warning' ? '#d97706' : ev.type === 'success' || ev.type === 'good' ? '#16a34a' : colors.text.primary;
                const evBg = ev.type === 'warning' ? 'rgba(245,158,11,0.05)' : ev.type === 'success' || ev.type === 'good' ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.8)';
                return (
                  <div key={i} style={{ padding: '20px', borderRadius: '16px', background: evBg, border: '1px solid rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{ev.label}</span>
                    <span style={{ fontSize: '16px', fontWeight: '700', color: evColor }}>{ev.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }

      if (block.id === 'nextMove') {
        const item = block.items[0] || {};
        return (
          <div key={block.id} style={{ padding: '48px', background: 'linear-gradient(180deg, rgba(99,102,241,0.04) 0%, rgba(99,102,241,0) 100%)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 16px rgba(15,23,42,0.2)' }}>
                <ArrowRightIcon size={20} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: colors.text.primary, margin: 0, letterSpacing: '-0.02em' }}>Action Plan</h3>
            </div>
            
            {block.transition && (
              <div style={{ fontSize: '16px', color: colors.text.secondary, fontWeight: '500', marginBottom: '20px', lineHeight: '1.6' }}>{block.transition}</div>
            )}
            <div style={{ fontSize: '18px', fontWeight: '600', color: colors.text.primary, lineHeight: '1.6', marginBottom: item.reasons?.length > 0 ? '20px' : '32px' }}>
              {item.text}
            </div>
            {item.reasons?.length > 0 && (
              <ul style={{ margin: '0 0 32px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {item.reasons.map((r, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', fontSize: '16px', color: colors.text.secondary, lineHeight: '1.6' }}>
                    <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: '#6366f1', marginTop: '10px' }} />
                    {r}
                  </li>
                ))}
              </ul>
            )}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {onOpenDiagnosticReport && (
                <button onClick={onOpenDiagnosticReport} style={{
                  padding: '16px 32px', borderRadius: '16px', border: 'none',
                  background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)', color: '#fff',
                  fontSize: '15px', fontWeight: '600', cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(15,23,42,0.2)', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex', alignItems: 'center', gap: '10px'
                }} className="action-btn-primary">
                  View Study Plan <ArrowRightIcon size={16} />
                </button>
              )}
              <button onClick={onReview} style={{
                padding: '16px 32px', background: '#fff', color: colors.text.primary,
                border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', fontSize: '15px', fontWeight: '600', cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }} className="action-btn-secondary">
                Review Missed Questions
              </button>
            </div>
          </div>
        );
      }

      return null;
    };

    const getBlock = (id) => blocks.find(b => b.id === id);
    const hasDetails = details.additionalDrivers.length > 0 || details.secondaryEvidence.length > 0 || details.uncertainties || details.qualityFailed;

    return (
      <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Row 1: Hero & Stats */}
        <div className="premium-card" style={{ overflow: 'hidden' }}>
          {getBlock('context') && renderBlock(getBlock('context'), 0)}
          {getBlock('context') && getBlock('metaStrip') && <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.04) 10%, rgba(0,0,0,0.04) 90%, transparent 100%)', margin: '0 48px' }} />}
          {getBlock('metaStrip') && renderBlock(getBlock('metaStrip'), 1)}
        </div>

        {/* Row 2: Causes & Behavior (2-column on desktop) */}
        {(getBlock('primaryCause') || getBlock('behaviorAmplifier')) && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            {getBlock('primaryCause') && (
              <div className="premium-card">
                {renderBlock(getBlock('primaryCause'), 2)}
              </div>
            )}
            {getBlock('behaviorAmplifier') && (
              <div className="premium-card">
                {renderBlock(getBlock('behaviorAmplifier'), 3)}
              </div>
            )}
          </div>
        )}

        {/* Row 3: Evidence */}
        {getBlock('evidence') && (
          <div className="premium-card">
            {renderBlock(getBlock('evidence'), 4)}
          </div>
        )}

        {/* Row 4: Next Move */}
        {getBlock('nextMove') && (
          <div className="premium-card" style={{ overflow: 'hidden' }}>
            {renderBlock(getBlock('nextMove'), 5)}
          </div>
        )}

        {/* Details Area */}
        {hasDetails && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '16px' }}>
            <button
              className="details-button"
              onClick={() => setShowNarrativeDetails(!showNarrativeDetails)}
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.9)',
                borderRadius: '30px',
                cursor: 'pointer',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '600',
                color: colors.text.secondary,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)',
              }}
            >
              <span>{showNarrativeDetails ? 'Hide technical details' : 'View technical details'}</span>
              <span style={{ transform: showNarrativeDetails ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)', fontSize: '12px' }}>&#9662;</span>
            </button>

            {showNarrativeDetails && (
              <div className="premium-card" style={{ width: '100%', marginTop: '24px', padding: '36px 48px', animation: 'slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {details.additionalDrivers.length > 0 && (
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>Additional Patterns</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {details.additionalDrivers.map((d, i) => {
                          const sc = sevColors[d.severity] || sevColors.moderate;
                          return (
                            <div key={i} style={{ padding: '16px 20px', borderRadius: '16px', background: sc.bg, border: \`1px solid \${sc.border}\`, display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <span style={{ fontSize: '15px', fontWeight: '600', color: colors.text.primary }}>{d.text}</span>
                              {d.estimatedPointGain && (
                                <span style={{ fontSize: '12px', fontWeight: '700', color: '#16a34a', background: 'rgba(34,197,94,0.1)', padding: '4px 10px', borderRadius: '8px', marginLeft: 'auto', whiteSpace: 'nowrap' }}>+{d.estimatedPointGain} pts</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {details.secondaryEvidence.length > 0 && (
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>Additional Evidence</div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                        {details.secondaryEvidence.map((ev, i) => {
                          const evColor = ev.type === 'warning' ? '#d97706' : ev.type === 'success' || ev.type === 'good' ? '#16a34a' : colors.text.secondary;
                          const evBg = ev.type === 'warning' ? 'rgba(245,158,11,0.05)' : ev.type === 'success' || ev.type === 'good' ? 'rgba(34,197,94,0.05)' : 'rgba(0,0,0,0.02)';
                          return (
                            <div key={i} style={{ padding: '16px', borderRadius: '16px', background: evBg, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              <span style={{ fontSize: '11px', fontWeight: '700', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{ev.label}</span>
                              <span style={{ fontSize: '15px', fontWeight: '700', color: evColor }}>{ev.value}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {details.uncertainties && (
                    <div style={{ fontSize: '14px', color: '#92400e', lineHeight: '1.6', fontStyle: 'italic', padding: '16px 20px', borderRadius: '16px', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.1)' }}>
                      <span style={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '11px', marginRight: '8px' }}>Note:</span>
                      {details.uncertainties}
                    </div>
                  )}

                  {details.qualityFailed && (
                    <div style={{ fontSize: '14px', color: '#92400e', fontWeight: '600', padding: '16px 20px', borderRadius: '16px', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.1)' }}>
                      Some AI insights could not be fully verified. Data-driven analysis is shown where AI confidence was insufficient.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 20px 40px' }}>
      <style>{\`
        .premium-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 28px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.02);
          border: 1px solid rgba(255,255,255,0.9);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.03);
        }
        .insight-row {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 24px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.01);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .insight-row:hover {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(99, 102, 241, 0.15);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.08);
          transform: scale(1.01);
        }
        .insight-bullet {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          color: #6366f1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.02);
          margin-top: 2px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s, color 0.3s;
        }
        .insight-row:hover .insight-bullet {
          background: #6366f1;
          color: #ffffff;
          transform: scale(1.1);
        }
        .details-button {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .details-button:hover {
          background: rgba(255,255,255,0.9) !important;
          color: #4f46e5 !important;
          transform: translateY(-1px);
        }
        .stat-card {
          padding: 24px;
          border-radius: 20px;
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.8);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .stat-card:hover {
          background: rgba(255,255,255,0.9) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.04);
        }
        .action-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(15,23,42,0.3) !important;
        }
        .action-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06) !important;
        }
      \`}</style>`;

const newContent = content.substring(0, startIndex) + newBlock + content.substring(endIndex);
fs.writeFileSync(path, newContent, 'utf8');
console.log("Replacement successful!");
