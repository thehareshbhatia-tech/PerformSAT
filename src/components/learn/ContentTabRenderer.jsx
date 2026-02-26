import React, { useState, useMemo } from 'react';
import { SECTION_ORDER, SECTION_LABELS, BLOCK_BUDGET, DEFAULT_MAX_BLOCKS_INITIALLY } from '../../data/contentTabs/schema';
import { MathText } from '../MathText';
import LessonVisualRenderer, { visualRegistry } from './LessonVisualRenderer';

const font = 'var(--font-ui)';
const orange = 'var(--color-brand-orange-500)';
const orangeLight = 'var(--color-brand-peach-100)';
const orangeMuted = 'var(--color-brand-peach-100)';

/**
 * Renders text with markdown emphasis (**bold**, *accent*) AND KaTeX math ($...$).
 * Markdown is processed first into React nodes; segments without markup are
 * passed through MathText so LaTeX renders correctly.
 */
const renderRichText = (text) => {
  if (!text) return null;
  return text.split(/(\*\*.*?\*\*|\*.*?\*|`[^`]+`)/).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ fontWeight: 600, color: 'var(--color-slate-900)' }}>
        <MathText>{part.slice(2, -2)}</MathText>
      </strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i} style={{ color: orange, fontStyle: 'normal', fontWeight: 500 }}>
        <MathText>{part.slice(1, -1)}</MathText>
      </em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} style={{
        fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic',
        background: 'var(--color-slate-100)', padding: '2px 8px', borderRadius: 'var(--radius-sm)',
        fontSize: '0.95em', color: 'var(--color-slate-900)'
      }}>{part.slice(1, -1)}</code>;
    }
    return <MathText key={i}>{part}</MathText>;
  });
};

const BlockRenderers = {
  heading: (block, idx) => (
    <h3 key={idx} style={{
      fontFamily: font, fontSize: 18, fontWeight: 700, color: 'var(--color-slate-900)',
      letterSpacing: '-0.02em', marginBottom: 12, marginTop: idx > 0 ? 24 : 0
    }}>
      <MathText>{block.content}</MathText>
    </h3>
  ),

  text: (block, idx) => (
    <p key={idx} style={{
      fontFamily: font, fontSize: 15, lineHeight: 1.7, color: 'var(--color-slate-700)',
      marginBottom: 16, maxWidth: 680
    }}>
      {renderRichText(block.content)}
    </p>
  ),

  formula: (block, idx) => (
    <div key={idx} style={{
      position: 'relative', background: 'var(--color-slate-50)', borderRadius: 'var(--radius-lg)',
      padding: '24px 32px', margin: '16px 0', textAlign: 'center',
      border: '1px solid var(--color-slate-200)'
    }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 40, height: 3, background: orange, borderRadius: '0 0 3px 3px'
      }} />
      {block.label && (
        <div style={{
          fontSize: 10, fontWeight: 700, color: 'var(--color-slate-500)', textTransform: 'uppercase',
          letterSpacing: '0.08em', marginBottom: 12
        }}>{block.label}</div>
      )}
      <div style={{ fontSize: 24, fontWeight: 500, color: 'var(--color-slate-900)' }}>
        <MathText>{block.content}</MathText>
      </div>
      {block.note && (
        <div style={{ fontSize: 12, color: 'var(--color-slate-500)', marginTop: 10 }}>
          {renderRichText(block.note)}
        </div>
      )}
    </div>
  ),

  callout: (block, idx) => {
    const variants = {
      info: { bg: 'var(--color-info-100)', border: 'var(--color-info-600)', icon: 'i', color: 'var(--color-info-600)' },
      warning: { bg: orangeLight, border: orange, icon: '!', color: 'var(--color-brand-orange-600)' },
      success: { bg: 'var(--color-success-100)', border: 'var(--color-success-600)', icon: '\u2713', color: 'var(--color-success-600)' },
      memorize: { bg: 'var(--color-error-100)', border: 'var(--color-error-600)', icon: '\u2605', color: 'var(--color-error-600)' },
    };
    const v = variants[block.variant] || variants.info;
    return (
      <div key={idx} style={{
        background: v.bg, borderLeft: `3px solid ${v.border}`, borderRadius: '0 10px 10px 0',
        padding: '14px 18px', margin: '16px 0', display: 'flex', gap: 12, alignItems: 'flex-start'
      }}>
        <div style={{
          width: 24, height: 24, borderRadius: '50%', background: v.border,
          color: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 700, flexShrink: 0
        }}>{v.icon}</div>
        <div style={{ flex: 1 }}>
          {block.title && (
            <div style={{ fontWeight: 700, fontSize: 13, color: v.color, marginBottom: 4 }}>
              {block.title}
            </div>
          )}
          <div style={{ fontSize: 14, lineHeight: 1.6, color: v.color }}>
            {renderRichText(block.content)}
          </div>
        </div>
      </div>
    );
  },

  table: (block, idx) => (
    <div key={idx} style={{ margin: '16px 0', overflowX: 'auto' }}>
      {block.title && (
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-slate-500)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          {block.title}
        </div>
      )}
      <table style={{
        width: '100%', borderCollapse: 'collapse', fontFamily: font, fontSize: 13
      }}>
        <thead>
          <tr>
            {block.headers.map((h, i) => (
              <th key={i} style={{
                padding: '10px 14px', textAlign: 'left', fontWeight: 700,
                color: 'var(--color-slate-700)', borderBottom: '2px solid var(--color-slate-200)',
                background: 'var(--color-slate-50)', fontSize: 12, letterSpacing: '0.02em'
              }}><MathText>{h}</MathText></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '8px 14px', borderBottom: '1px solid var(--color-slate-100)',
                  color: ci === 0 ? 'var(--color-slate-900)' : 'var(--color-slate-600)', fontWeight: ci === 0 ? 600 : 400,
                }}>
                  <MathText>{cell}</MathText>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),

  steps: (block, idx) => (
    <div key={idx} style={{ margin: '16px 0' }}>
      {block.title && (
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-slate-900)', marginBottom: 12 }}>
          {block.title}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {block.items.map((step, si) => (
          <div key={si} style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            background: 'var(--color-slate-50)', borderRadius: 'var(--radius-md)', padding: '12px 16px',
            border: '1px solid var(--color-slate-100)'
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: 'var(--radius-sm)', background: orange,
              color: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700, flexShrink: 0
            }}>{si + 1}</div>
            <div style={{ flex: 1, fontSize: 14, lineHeight: 1.6, color: 'var(--color-slate-700)' }}>
              {renderRichText(step)}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  comparison: (block, idx) => (
    <div key={idx} style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '16px 0'
    }}>
      {block.items.map((item, ci) => (
        <div key={ci} style={{
          background: item.variant === 'wrong' ? 'var(--color-error-100)' : item.variant === 'correct' ? 'var(--color-success-100)' : 'var(--color-slate-50)',
          borderRadius: 'var(--radius-md)', padding: '18px', border: `1px solid ${item.variant === 'wrong' ? 'var(--color-error-100)' : item.variant === 'correct' ? 'var(--color-success-100)' : 'var(--color-slate-200)'}`
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
            color: item.variant === 'wrong' ? 'var(--color-error-600)' : item.variant === 'correct' ? 'var(--color-success-600)' : 'var(--color-slate-500)',
            marginBottom: 8
          }}>
            {item.label}
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-slate-700)' }}>
            {renderRichText(item.content)}
          </div>
        </div>
      ))}
    </div>
  ),

  example: (block, idx) => (
    <div key={idx} style={{
      background: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '22px 26px', margin: '16px 0',
      boxShadow: 'var(--shadow-md)', border: '1px solid var(--color-slate-100)',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${orange}, var(--color-brand-orange-600))`
      }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: orange }} />
        <span style={{
          fontSize: 11, fontWeight: 700, color: orange,
          textTransform: 'uppercase', letterSpacing: '0.08em'
        }}>
          {block.difficulty ? `${block.difficulty}` : 'Worked Example'}
        </span>
      </div>
      {block.problem && (
        <div style={{
          background: 'var(--color-slate-50)', borderRadius: 'var(--radius-md)', padding: '12px 16px', marginBottom: 12,
          fontSize: 14, lineHeight: 1.6, color: 'var(--color-slate-800)', border: '1px solid var(--color-slate-200)'
        }}>
          {renderRichText(block.problem)}
        </div>
      )}
      {block.steps && block.steps.map((step, si) => (
        <div key={si} style={{
          background: si === block.steps.length - 1 ? 'var(--color-success-100)' : 'var(--color-slate-50)',
          borderRadius: 'var(--radius-md)', padding: '12px 16px', marginBottom: 6,
          border: `1px solid ${si === block.steps.length - 1 ? 'var(--color-success-100)' : 'var(--color-slate-200)'}`
        }}>
          <div style={{
            fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
            color: si === block.steps.length - 1 ? 'var(--color-success-600)' : 'var(--color-slate-500)', marginBottom: 6
          }}>
            {step.label || `Step ${si + 1}`}
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-slate-700)' }}>
            {renderRichText(step.content)}
          </div>
        </div>
      ))}
    </div>
  ),

  trapCard: (block, idx) => (
    <div key={idx} style={{
      background: 'var(--color-error-100)', borderRadius: 'var(--radius-md)', padding: '18px 22px', margin: '16px 0',
      border: '1px solid var(--color-error-100)', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--color-error-600)'
      }} />
      <div style={{
        fontSize: 11, fontWeight: 700, color: 'var(--color-error-600)',
        textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8
      }}>
        {block.title || 'Common Trap'}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-error-600)', marginBottom: block.correction ? 10 : 0 }}>
        {renderRichText(block.wrong)}
      </div>
      {block.correction && (
        <div style={{
          background: 'var(--color-success-100)', borderRadius: 'var(--radius-sm)', padding: '10px 14px',
          border: '1px solid var(--color-success-100)', marginTop: 10
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--color-success-600)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
            Correct Approach
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--color-success-600)' }}>
            {renderRichText(block.correction)}
          </div>
        </div>
      )}
    </div>
  ),

  tip: (block, idx) => (
    <div key={idx} style={{
      background: orangeLight, borderRadius: 'var(--radius-md)', padding: '12px 16px', margin: '14px 0',
      border: `1px solid ${orangeMuted}`, display: 'flex', gap: 10, alignItems: 'flex-start'
    }}>
      <span style={{ fontSize: 16, flexShrink: 0, lineHeight: 1 }}>&#9889;</span>
      <div style={{ fontSize: 13, lineHeight: 1.6, color: '#9a3412' }}>
        {renderRichText(block.content)}
      </div>
    </div>
  ),

  keyInsight: (block, idx) => (
    <div key={idx} style={{
      background: 'linear-gradient(135deg, var(--color-slate-900), var(--color-slate-800))', borderRadius: 'var(--radius-lg)',
      padding: '22px 26px', margin: '16px 0', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: -40, right: -40, width: 150, height: 150,
        background: 'radial-gradient(circle, rgba(234,88,12,0.2), transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-block', background: 'rgba(234,88,12,0.15)', color: orange,
          padding: '4px 10px', borderRadius: 100, fontSize: 10, fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10
        }}>Key Insight</div>
        <div style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--color-slate-200)', fontWeight: 500 }}>
          {renderRichText(block.content)}
        </div>
      </div>
    </div>
  ),

  strategyCard: (block, idx) => (
    <div key={idx} style={{
      background: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '18px 22px', margin: '16px 0',
      border: '1px solid var(--color-slate-200)', boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: 'var(--radius-sm)',
          background: `linear-gradient(135deg, ${orange}, var(--color-brand-orange-600))`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--color-white)', fontSize: 14, fontWeight: 700
        }}>{block.icon || '\u26A1'}</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-slate-900)' }}>
          {block.title}
        </div>
        {block.timing && (
          <span style={{
            marginLeft: 'auto', fontSize: 11, fontWeight: 600,
            color: 'var(--color-slate-500)', background: 'var(--color-slate-100)', padding: '3px 8px', borderRadius: 100
          }}>{block.timing}</span>
        )}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--color-slate-600)' }}>
        {renderRichText(block.content)}
      </div>
    </div>
  ),

  formulaGrid: (block, idx) => (
    <div key={idx} style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: 10, margin: '16px 0'
    }}>
      {block.items.map((item, fi) => (
        <div key={fi} style={{
          background: 'var(--color-slate-50)', borderRadius: 'var(--radius-md)', padding: '16px', textAlign: 'center',
          border: '1px solid var(--color-slate-200)'
        }}>
          <div style={{
            fontSize: 10, fontWeight: 700, color: 'var(--color-slate-500)', textTransform: 'uppercase',
            letterSpacing: '0.08em', marginBottom: 8
          }}>{item.label}</div>
          <div style={{ fontSize: 18, color: 'var(--color-slate-900)', fontWeight: 500 }}>
            <MathText>{item.formula}</MathText>
          </div>
          {item.note && (
            <div style={{ fontSize: 11, color: 'var(--color-slate-500)', marginTop: 6 }}>{item.note}</div>
          )}
        </div>
      ))}
    </div>
  ),

  checkpointQuestion: (block, idx) => {
    const [revealed, setRevealed] = useState(false);
    return (
      <div key={idx} style={{
        background: 'var(--color-slate-50)', borderRadius: 'var(--radius-lg)', padding: '20px 22px', margin: '14px 0',
        border: '1px solid var(--color-slate-200)'
      }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: orange, textTransform: 'uppercase',
          letterSpacing: '0.08em', marginBottom: 10
        }}>Quick Check #{block.number || idx + 1}</div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-slate-800)', marginBottom: 12 }}>
          {renderRichText(block.question)}
        </div>
        <button
          onClick={() => setRevealed(r => !r)}
          style={{
            background: revealed ? 'var(--color-slate-100)' : orange, color: revealed ? 'var(--color-slate-600)' : 'var(--color-white)',
            border: 'none', padding: '6px 14px', borderRadius: 7, fontSize: 12,
            fontWeight: 600, cursor: 'pointer', fontFamily: font,
            transition: 'all 0.15s ease'
          }}
        >
          {revealed ? 'Hide' : 'Reveal Answer'}
        </button>
        {revealed && (
          <div style={{
            marginTop: 10, padding: '10px 14px', background: 'var(--color-success-100)',
            borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-success-100)',
            fontSize: 13, lineHeight: 1.55, color: 'var(--color-success-600)'
          }}>
            {renderRichText(block.answer)}
          </div>
        )}
      </div>
    );
  },

  diagramRef: (block, idx) => {
    if (block.visualType && visualRegistry[block.visualType]) {
      return <div key={idx}><LessonVisualRenderer type={block.visualType} /></div>;
    }
    return (
      <div key={idx} style={{
        background: 'var(--color-slate-50)', borderRadius: 'var(--radius-md)', padding: '14px 18px', margin: '14px 0',
        border: '1px dashed var(--color-slate-300)', textAlign: 'center'
      }}>
        <div style={{ fontSize: 12, color: 'var(--color-slate-500)', fontWeight: 500 }}>
          {block.description || 'Refer to the visual model in the lesson content.'}
        </div>
      </div>
    );
  },

  iconRow: (block, idx) => (
    <div key={idx} style={{
      display: 'flex', gap: 12, margin: '16px 0', flexWrap: 'wrap'
    }}>
      {block.items.map((item, ii) => (
        <div key={ii} style={{
          flex: '1 1 120px', background: 'var(--color-slate-50)', borderRadius: 'var(--radius-md)',
          padding: '14px', textAlign: 'center', border: '1px solid var(--color-slate-200)',
          minWidth: 120
        }}>
          <div style={{ fontSize: 22, marginBottom: 6 }}>{item.icon}</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-slate-900)', marginBottom: 2 }}>
            {item.label}
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-slate-500)', lineHeight: 1.4 }}>
            {item.description}
          </div>
        </div>
      ))}
    </div>
  ),

  parallelLinesDiagram: (_block, idx) => (
    <div key={idx}><LessonVisualRenderer type="parallelLinesDiagram" /></div>
  ),
  perpendicularLinesDiagram: (_block, idx) => (
    <div key={idx}><LessonVisualRenderer type="perpendicularLinesDiagram" /></div>
  ),
  slopeFromGraphDiagram: (_block, idx) => (
    <div key={idx}><LessonVisualRenderer type="slopeFromGraphDiagram" /></div>
  ),
  yInterceptDiagram: (_block, idx) => (
    <div key={idx}><LessonVisualRenderer type="yInterceptDiagram" /></div>
  ),
};

const PRIORITY_ORDER = { high: 0, medium: 1, low: 2 };

const SectionContent = ({ section, sectionId }) => {
  const [expanded, setExpanded] = useState(false);

  if (!section || !section.blocks) return null;

  const maxInitially = section.maxBlocksInitially ?? DEFAULT_MAX_BLOCKS_INITIALLY;
  const cap = Math.min(maxInitially, BLOCK_BUDGET[sectionId] ?? section.blocks.length, section.blocks.length);
  const sortedBlocks = useMemo(() => {
    return [...section.blocks].sort((a, b) => {
      const p = (PRIORITY_ORDER[a.priority] ?? 3) - (PRIORITY_ORDER[b.priority] ?? 3);
      return p;
    });
  }, [section.blocks]);
  const needsExpansion = section.blocks.length > cap;
  const visibleBlocks = expanded ? section.blocks : sortedBlocks.slice(0, cap);

  return (
    <div>
      {section.summary && (
        <div style={{
          fontFamily: font, fontSize: 14, lineHeight: 1.65, color: 'var(--color-slate-600)',
          marginBottom: 20, padding: '12px 16px', background: 'var(--color-slate-50)',
          borderRadius: 'var(--radius-md)', border: '1px solid var(--color-slate-200)', fontStyle: 'italic'
        }}>
          {renderRichText(section.summary)}
        </div>
      )}

      {visibleBlocks.map((block, idx) => {
        const renderer = BlockRenderers[block.type];
        if (!renderer) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`ContentTabRenderer: unknown block type "${block.type}" at index ${idx}`);
          }
          return null;
        }
        if (process.env.NODE_ENV === 'development') {
          const REQ = {
            table: ['headers', 'rows'], steps: ['items'], example: ['problem', 'steps'],
            trapCard: ['wrong'], checkpointQuestion: ['question', 'answer'],
            formulaGrid: ['items'], iconRow: ['items'], formula: ['content'],
            callout: ['content'], comparison: ['items'],
          };
          const fields = REQ[block.type];
          if (fields) {
            for (const f of fields) {
              if (block[f] === undefined || block[f] === null) {
                console.warn(`ContentTabRenderer: block[${idx}] type="${block.type}" missing required field "${f}"`);
              }
            }
          }
          if (block.type === 'diagramRef' && block.visualType && !visualRegistry[block.visualType]) {
            console.warn(`ContentTabRenderer: diagramRef visualType "${block.visualType}" not found in visualRegistry`);
          }
        }
        return renderer(block, idx);
      })}

      {needsExpansion && (
        <button
          onClick={() => setExpanded(e => !e)}
          style={{
            marginTop: 12, padding: '8px 16px', background: 'transparent',
            border: `1px solid ${orange}`, borderRadius: 'var(--radius-sm)', color: orange,
            fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: font,
            transition: 'all 0.15s ease'
          }}
        >
          {expanded ? 'Show less' : `Show ${section.blocks.length - cap} more`}
        </button>
      )}
    </div>
  );
};

const ContentTabRenderer = ({ contentTab }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!contentTab || !contentTab.sections) return null;

  const tabs = SECTION_ORDER
    .filter(id => contentTab.sections[id])
    .map(id => ({
      id,
      label: SECTION_LABELS[id],
      section: contentTab.sections[id],
    }));

  if (tabs.length === 0) return null;

  return (
    <div style={{ width: '100%' }}>
      <div style={{
        display: 'flex', gap: 0, borderBottom: '1px solid var(--color-slate-200)',
        marginBottom: 20, overflowX: 'auto', WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
      }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(i)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: font, fontSize: 12, fontWeight: activeTab === i ? 600 : 400,
              color: activeTab === i ? orange : 'var(--color-slate-500)',
              padding: '8px 14px', whiteSpace: 'nowrap', position: 'relative',
              transition: 'color 0.15s ease',
              borderBottom: activeTab === i ? `2px solid ${orange}` : '2px solid transparent',
              marginBottom: -1,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <SectionContent section={tabs[activeTab]?.section} sectionId={tabs[activeTab]?.id} />
    </div>
  );
};

export default ContentTabRenderer;
