import React, { useState, useEffect, useMemo } from 'react';
import { SECTION_ORDER, SECTION_LABELS } from '../../data/contentTabs/schema';
import { MathText } from '../MathText';
import { renderRichText } from '../RichMathText';
import LessonVisualRenderer, { visualRegistry } from './LessonVisualRenderer';
import './ContentTabRenderer.css';

const CheckpointBlock = ({ block, idx }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="tb-exercise">
      <h4 className="tb-subhead">Check Your Understanding</h4>
      <div className="tb-body">
        {renderRichText(block.question)}
      </div>
      <button
        className="tb-reveal-btn"
        onClick={() => setRevealed(r => !r)}
      >
        {revealed ? 'Hide Answer' : 'Reveal Answer'}
        <span className={`tb-reveal-chevron ${revealed ? 'tb-reveal-chevron--open' : ''}`}>&#9662;</span>
      </button>
      {revealed && (
        <div className="tb-reveal-content tb-body">
          {renderRichText(block.answer)}
        </div>
      )}
    </div>
  );
};

const BlockRenderers = {
  heading: (block, idx) => {
    // Generate a simple ID from the content, fallback to heading-idx if it's math/complex
    const simpleText = block.content.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const id = simpleText ? `tb-heading-${simpleText}` : `tb-heading-${idx}`;
    return (
      <h3 key={idx} id={id} className={`tb-heading ${idx > 0 ? 'tb-heading--spaced' : ''}`}>
        <MathText>{block.content}</MathText>
      </h3>
    );
  },

  text: (block, idx) => (
    <p key={idx} className="tb-body">
      {renderRichText(block.content)}
    </p>
  ),

  formula: (block, idx) => (
    <figure key={idx} className="tb-formula">
      {block.label && <figcaption className="tb-formula-label">{block.label}</figcaption>}
      <div className="tb-formula-math">
        <MathText>{block.content}</MathText>
      </div>
      {block.note && (
        <p className="tb-formula-note">
          {renderRichText(block.note)}
        </p>
      )}
    </figure>
  ),

  table: (block, idx) => (
    <div key={idx} className="tb-table-wrap">
      {block.title && <div className="tb-caption">{renderRichText(block.title)}</div>}
      <table className="tb-table">
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
    <div key={idx} className="tb-formula-grid">
      {block.items.map((item, fi) => (
        <figure key={fi} className="tb-formula tb-formula--compact">
          <figcaption className="tb-formula-label">{renderRichText(item.label)}</figcaption>
          <div className="tb-formula-math" style={{ fontSize: '1.25rem' }}>
            <MathText>{item.formula}</MathText>
          </div>
          {item.note && <p className="tb-formula-note">{renderRichText(item.note)}</p>}
        </figure>
      ))}
    </div>
  ),

  callout: (block, idx) => (
    <aside key={idx} className={`tb-aside ${block.variant === 'success' ? 'tb-aside--example' : block.variant === 'warning' ? 'tb-aside--warning' : ''}`}>
      {block.title && <strong className="tb-aside-title">{renderRichText(block.title)}</strong>}
      <div className="tb-body">{renderRichText(block.content)}</div>
    </aside>
  ),

  tip: (block, idx) => (
    <aside key={idx} className="tb-aside tb-aside--warning">
      <div className="tb-body">{renderRichText(block.content)}</div>
    </aside>
  ),

  keyInsight: (block, idx) => (
    <div key={idx} className="tb-prose-section">
      <p className="tb-body">{renderRichText(block.content)}</p>
    </div>
  ),

  trapCard: (block, idx) => (
    <div key={idx} className="tb-prose-section tb-trap-section">
      <div className="tb-badge tb-badge--error">
        <span>❌</span> Incorrect
      </div>
      <p className="tb-body tb-trap-wrong">{renderRichText(block.wrong)}</p>
      {block.correction && (
        <>
          <div className="tb-badge tb-badge--success" style={{ marginTop: '0.5rem' }}>
            <span>✅</span> Correct
          </div>
          <p className="tb-body">{renderRichText(block.correction)}</p>
        </>
      )}
    </div>
  ),

  strategyCard: (block, idx) => (
    <div key={idx} className="tb-prose-section tb-strategy-section">
      <div className="tb-badge tb-badge--strategy">
        <span>💡</span> {renderRichText(block.title)}
      </div>
      <p className="tb-body">{renderRichText(block.content)}</p>
    </div>
  ),

  example: (block, idx) => (
    <div key={idx} className="tb-worked-example">
      <h4 className="tb-subhead">Worked Example</h4>
      {block.problem && (
        <div className="tb-problem">
          {renderRichText(block.problem)}
        </div>
      )}
      {block.steps && (
        <div className="tb-solution-steps">
          {block.steps.map((step, si) => (
            <div key={si} className={`tb-step ${si === block.steps.length - 1 ? 'tb-step--final' : ''}`}>
              <span className="tb-step-num">{si === block.steps.length - 1 ? '\u2713' : si + 1}</span>
              <div className="tb-step-body">
                {step.label && <strong className="tb-step-label">{renderRichText(step.label)}</strong>}
                <span>{renderRichText(step.content)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  ),

  steps: (block, idx) => (
    <div key={idx} className="tb-worked-example">
      {block.title && <h4 className="tb-subhead">{renderRichText(block.title)}</h4>}
      <div className="tb-solution-steps">
        {block.items.map((step, si) => (
          <div key={si} className="tb-step">
            <span className="tb-step-num">{si + 1}</span>
            <div className="tb-step-body">{renderRichText(step)}</div>
          </div>
        ))}
      </div>
    </div>
  ),

  checkpointQuestion: (block, idx) => (
    <CheckpointBlock key={idx} block={block} idx={idx} />
  ),

  comparison: (block, idx) => (
    <div key={idx} className="tb-comparison">
      {block.items.map((item, ci) => (
        <div key={ci} className={`tb-compare-col ${item.variant === 'wrong' ? 'tb-compare-col--wrong' : 'tb-compare-col--right'}`}>
          <div className="tb-caption">{renderRichText(item.label)}</div>
          <div className="tb-body">{renderRichText(item.content)}</div>
        </div>
      ))}
    </div>
  ),

  iconRow: (block, idx) => (
    <div key={idx} className="tb-formula-grid">
      {block.items.map((item, ii) => (
        <div key={ii} className="tb-icon-item">
          <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
          <strong>{renderRichText(item.label)}</strong>
          <span className="tb-body" style={{ fontSize: '0.8125rem', color: 'var(--color-slate-500)' }}>{renderRichText(item.description)}</span>
        </div>
      ))}
    </div>
  ),

  diagramRef: (block, idx) => {
    if (block.visualType && visualRegistry[block.visualType]) {
      return (
        <figure key={idx} className="tb-figure">
          <LessonVisualRenderer type={block.visualType} />
          {block.description && <figcaption className="tb-figcaption">{renderRichText(block.description)}</figcaption>}
        </figure>
      );
    }
    return (
      <figure key={idx} className="tb-figure">
        <figcaption className="tb-figcaption">
          {renderRichText(block.description || 'Refer to the visual model in the lesson content.')}
        </figcaption>
      </figure>
    );
  },

  parallelLinesDiagram: (_block, idx) => (
    <figure key={idx} className="tb-figure">
      <LessonVisualRenderer type="parallelLinesDiagram" />
      <figcaption className="tb-figcaption">Parallel lines share the same slope but have different y-intercepts.</figcaption>
    </figure>
  ),
  perpendicularLinesDiagram: (_block, idx) => (
    <figure key={idx} className="tb-figure">
      <LessonVisualRenderer type="perpendicularLinesDiagram" />
      <figcaption className="tb-figcaption">Perpendicular lines have slopes that are negative reciprocals.</figcaption>
    </figure>
  ),
  slopeFromGraphDiagram: (_block, idx) => (
    <figure key={idx} className="tb-figure">
      <LessonVisualRenderer type="slopeFromGraphDiagram" />
      <figcaption className="tb-figcaption">Slope = rise / run. Pick two grid-intersection points and count.</figcaption>
    </figure>
  ),
  slopeFromTableDiagram: (_block, idx) => (
    <figure key={idx} className="tb-figure">
      <LessonVisualRenderer type="slopeFromTableDiagram" />
      <figcaption className="tb-figcaption">Find slope from a table by computing the change in y divided by the change in x between any two rows.</figcaption>
    </figure>
  ),
  yInterceptDiagram: (_block, idx) => (
    <figure key={idx} className="tb-figure">
      <LessonVisualRenderer type="yInterceptDiagram" />
      <figcaption className="tb-figcaption">The y-intercept is where the line crosses the y-axis (x = 0).</figcaption>
    </figure>
  ),
};

const SectionContent = ({ section }) => {
  if (!section || !section.blocks) return null;

  return (
    <article className="tb-article">
      {section.summary && (
        <p className="tb-lead">
          {renderRichText(section.summary)}
        </p>
      )}

      {section.blocks.map((block, idx) => {
        const renderer = BlockRenderers[block.type];
        if (!renderer) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`ContentTabRenderer: unknown block type "${block.type}" at index ${idx}`);
          }
          return null;
        }
        return renderer(block, idx);
      })}
    </article>
  );
};

const TAB_ICONS = { learn: '\u{1F4D6}', practice: '\u{270F}\uFE0F' };

const ContentTabRenderer = ({ contentTab }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeHeadingId, setActiveHeadingId] = useState('');

  const tabs = useMemo(() => {
    if (!contentTab || !contentTab.sections) return [];
    return SECTION_ORDER
      .filter(id => contentTab.sections[id])
      .map(id => ({
        id,
        label: SECTION_LABELS[id],
        section: contentTab.sections[id],
      }));
  }, [contentTab]);

  const currentHeadings = useMemo(() => {
    const currentSection = tabs[activeTab]?.section;
    if (!currentSection || !currentSection.blocks) return [];
    return currentSection.blocks
      .filter(b => b.type === 'heading')
      .map((b, idx) => {
        const simpleText = b.content.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return {
          id: simpleText ? `tb-heading-${simpleText}` : `tb-heading-${idx}`,
          title: b.content.replace(/\\.?/g, '').replace(/[{}]/g, '') // Rough strip for math text in nav
        };
      });
  }, [tabs, activeTab]);

  useEffect(() => {
    if (currentHeadings.length === 0) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the last intersecting heading
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveHeadingId(visible[visible.length - 1].target.id);
        }
      },
      { rootMargin: '-10% 0px -80% 0px' }
    );

    currentHeadings.forEach(h => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentHeadings, activeTab]);

  if (tabs.length === 0) return null;

  return (
    <div className="tb-stage">
      <div className="tb-hero">
        <nav className="tb-tab-bar" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              role="tab"
              aria-selected={activeTab === i}
              className={`tb-tab ${activeTab === i ? 'tb-tab--active' : ''}`}
            >
              <span className="tb-tab-icon">{TAB_ICONS[tab.id] || ''}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="tb-stage-content">
        <div className="tb-canvas">
          <div role="tabpanel" className="tb-panel" key={activeTab}>
            <SectionContent section={tabs[activeTab]?.section} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTabRenderer;
