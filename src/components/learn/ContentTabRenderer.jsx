import React, { useState, useMemo } from 'react';
import { SECTION_ORDER, SECTION_LABELS, BLOCK_BUDGET, DEFAULT_MAX_BLOCKS_INITIALLY } from '../../data/contentTabs/schema';
import { MathText } from '../MathText';
import LessonVisualRenderer, { visualRegistry } from './LessonVisualRenderer';
import { DataCard } from '../ui/DataCard';
import './ContentTabRenderer.css';

/**
 * Renders text with markdown emphasis (**bold**, *accent*) AND KaTeX math ($...$).
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
      return <em key={i} style={{ color: 'var(--color-brand-orange-600)', fontStyle: 'normal', fontWeight: 500 }}>
        <MathText>{part.slice(1, -1)}</MathText>
      </em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} style={{
        fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic',
        background: 'var(--color-slate-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)',
        fontSize: '0.9em', color: 'var(--color-slate-900)'
      }}>{part.slice(1, -1)}</code>;
    }
    return <MathText key={i}>{part}</MathText>;
  });
};

const BlockRenderers = {
  // --- BODY FAMILY ---
  heading: (block, idx) => (
    <h3 key={idx} className={`block-heading ${idx > 0 ? 'block-heading--spaced' : ''}`}>
      <MathText>{block.content}</MathText>
    </h3>
  ),

  text: (block, idx) => (
    <p key={idx} className="block-text">
      {renderRichText(block.content)}
    </p>
  ),

  // --- MATH FAMILY ---
  formula: (block, idx) => (
    <div key={idx} className="block-math">
      {block.label && <div className="block-label">{block.label}</div>}
      <div className="block-math-formula">
        <MathText>{block.content}</MathText>
      </div>
      {block.note && (
        <div className="block-math-note">
          {renderRichText(block.note)}
        </div>
      )}
    </div>
  ),

  table: (block, idx) => (
    <div key={idx} className="block-table-container">
      {block.title && <div className="block-label">{block.title}</div>}
      <table className="block-table">
        <thead>
          <tr>
            {block.headers.map((h, i) => (
              <th key={i}><MathText>{h}</MathText></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}><MathText>{cell}</MathText></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),

  formulaGrid: (block, idx) => (
    <div key={idx} className="block-grid-auto">
      {block.items.map((item, fi) => (
        <div key={fi} className="block-math" style={{ margin: 0, padding: '1.25rem' }}>
          <div className="block-label">{item.label}</div>
          <div className="block-math-formula" style={{ fontSize: '1.25rem' }}>
            <MathText>{item.formula}</MathText>
          </div>
          {item.note && <div className="block-math-note">{item.note}</div>}
        </div>
      ))}
    </div>
  ),

  // --- EMPHASIS FAMILY ---
  callout: (block, idx) => {
    // Map variants to our 4 simplified states
    const variantClass = block.variant === 'warning' ? 'block-emphasis--warning'
      : block.variant === 'success' ? 'block-emphasis--success'
      : block.variant === 'memorize' ? 'block-emphasis--error'
      : 'block-emphasis--info';
    
    const icon = block.variant === 'warning' ? '!'
      : block.variant === 'success' ? '✓'
      : block.variant === 'memorize' ? '★'
      : 'i';

    return (
      <div key={idx} className={`block-emphasis ${variantClass}`}>
        <div className="block-emphasis-icon">{icon}</div>
        <div className="block-emphasis-content">
          {block.title && <div className="block-emphasis-title">{block.title}</div>}
          <div>{renderRichText(block.content)}</div>
        </div>
      </div>
    );
  },

  tip: (block, idx) => (
    <div key={idx} className="block-emphasis block-emphasis--warning">
      <div className="block-emphasis-icon">⚡</div>
      <div className="block-emphasis-content">
        <div>{renderRichText(block.content)}</div>
      </div>
    </div>
  ),

  keyInsight: (block, idx) => (
    <div key={idx} className="block-emphasis block-emphasis--info">
      <div className="block-emphasis-icon">💡</div>
      <div className="block-emphasis-content">
        <div className="block-emphasis-title">Key Insight</div>
        <div>{renderRichText(block.content)}</div>
      </div>
    </div>
  ),

  trapCard: (block, idx) => (
    <div key={idx} className="block-emphasis block-emphasis--error">
      <div className="block-emphasis-icon">⚠️</div>
      <div className="block-emphasis-content">
        <div className="block-emphasis-title">{block.title || 'Common Trap'}</div>
        <div style={{ marginBottom: block.correction ? '0.75rem' : 0 }}>
          {renderRichText(block.wrong)}
        </div>
        {block.correction && (
          <div className="block-worked-step block-worked-step--final" style={{ margin: 0 }}>
            <div className="block-worked-step-content">
              <div className="block-label block-label--success">Correct Approach</div>
              <div>{renderRichText(block.correction)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  ),

  strategyCard: (block, idx) => (
    <DataCard key={idx} style={{ padding: '1.5rem', margin: '1.5rem 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <div style={{ fontSize: '1.25rem' }}>{block.icon || '⚡'}</div>
        <div style={{ fontWeight: 600, color: 'var(--color-slate-900)' }}>{block.title}</div>
        {block.timing && (
          <span className="block-label" style={{ margin: '0 0 0 auto' }}>{block.timing}</span>
        )}
      </div>
      <div className="block-text" style={{ marginBottom: 0 }}>
        {renderRichText(block.content)}
      </div>
    </DataCard>
  ),

  // --- WORKED FAMILY ---
  example: (block, idx) => (
    <DataCard key={idx} style={{ padding: '2rem', margin: '2rem 0' }}>
      <div className="block-label block-label--accent">
        {block.difficulty ? `${block.difficulty} Example` : 'Worked Example'}
      </div>
      {block.problem && (
        <div className="block-worked-problem">
          {renderRichText(block.problem)}
        </div>
      )}
      {block.steps && (
        <div>
          {block.steps.map((step, si) => (
            <div key={si} className={`block-worked-step ${si === block.steps.length - 1 ? 'block-worked-step--final' : ''}`}>
              <div className="block-worked-step-number">{si + 1}.</div>
              <div className="block-worked-step-content">
                {step.label && <div className="block-label">{step.label}</div>}
                <div>{renderRichText(step.content)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </DataCard>
  ),

  steps: (block, idx) => (
    <div key={idx} style={{ margin: '1.5rem 0' }}>
      {block.title && <div className="block-heading">{block.title}</div>}
      <div>
        {block.items.map((step, si) => (
          <div key={si} className="block-worked-step">
            <div className="block-worked-step-number">{si + 1}.</div>
            <div className="block-worked-step-content">
              {renderRichText(step)}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  checkpointQuestion: (block, idx) => {
    const [revealed, setRevealed] = useState(false);
    return (
      <DataCard key={idx} style={{ padding: '1.5rem', margin: '1.5rem 0' }}>
        <div className="block-label block-label--accent">Quick Check #{block.number || idx + 1}</div>
        <div className="block-text">
          {renderRichText(block.question)}
        </div>
        <button
          className="block-reveal-btn"
          onClick={() => setRevealed(r => !r)}
        >
          {revealed ? 'Hide Answer' : 'Reveal Answer'}
        </button>
        {revealed && (
          <div className="block-reveal-content block-text" style={{ marginBottom: 0 }}>
            {renderRichText(block.answer)}
          </div>
        )}
      </DataCard>
    );
  },

  comparison: (block, idx) => (
    <div key={idx} className="block-grid-2">
      {block.items.map((item, ci) => (
        <div key={ci} className={`block-worked-step ${item.variant === 'wrong' ? '' : 'block-worked-step--final'}`} style={{ flexDirection: 'column' }}>
          <div className={`block-label ${item.variant === 'wrong' ? 'block-label--error' : 'block-label--success'}`}>
            {item.label}
          </div>
          <div className="block-worked-step-content" style={{ width: '100%' }}>
            {renderRichText(item.content)}
          </div>
        </div>
      ))}
    </div>
  ),

  iconRow: (block, idx) => (
    <div key={idx} className="block-grid-auto">
      {block.items.map((item, ii) => (
        <div key={ii} className="block-worked-step" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{item.icon}</div>
          <div style={{ fontWeight: 600, color: 'var(--color-slate-900)', fontSize: '0.9375rem' }}>{item.label}</div>
          <div style={{ color: 'var(--color-slate-500)', fontSize: '0.8125rem' }}>{item.description}</div>
        </div>
      ))}
    </div>
  ),

  // --- VISUALS ---
  diagramRef: (block, idx) => {
    if (block.visualType && visualRegistry[block.visualType]) {
      return <div key={idx} className="block-math"><LessonVisualRenderer type={block.visualType} /></div>;
    }
    return (
      <div key={idx} className="block-math">
        <div style={{ color: 'var(--color-slate-500)' }}>
          {block.description || 'Refer to the visual model in the lesson content.'}
        </div>
      </div>
    );
  },

  parallelLinesDiagram: (_block, idx) => (
    <div key={idx} className="block-math"><LessonVisualRenderer type="parallelLinesDiagram" /></div>
  ),
  perpendicularLinesDiagram: (_block, idx) => (
    <div key={idx} className="block-math"><LessonVisualRenderer type="perpendicularLinesDiagram" /></div>
  ),
  slopeFromGraphDiagram: (_block, idx) => (
    <div key={idx} className="block-math"><LessonVisualRenderer type="slopeFromGraphDiagram" /></div>
  ),
  yInterceptDiagram: (_block, idx) => (
    <div key={idx} className="block-math"><LessonVisualRenderer type="yInterceptDiagram" /></div>
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
        <div className="section-summary">
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
        return renderer(block, idx);
      })}

      {needsExpansion && (
        <button
          onClick={() => setExpanded(e => !e)}
          className="block-reveal-btn"
          style={{ marginTop: '1rem' }}
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
      <div className="content-tab-nav">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(i)}
            className={`content-tab-btn ${activeTab === i ? 'content-tab-btn--active' : ''}`}
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
