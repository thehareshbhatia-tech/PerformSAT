import React, { useState, useMemo } from 'react';
import { SECTION_ORDER, SECTION_LABELS } from '../../data/contentTabs/schema';
import { MathText } from '../MathText';
import { renderRichText } from '../RichMathText';
import LessonVisualRenderer, { visualRegistry } from './LessonVisualRenderer';
import { CrossIcon, CheckCircleIcon, LightBulbIcon } from '../../design/icons';
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
    // Composed mode (see SectionContent): the section carries an auto number so
    // the chapter reads like a numbered textbook section rather than a bare bold
    // line. Non-composed chapters pass no _sectionNum and render exactly as before.
    return (
      <h3 key={idx} id={id}
        className={`tb-heading ${idx > 0 ? 'tb-heading--spaced' : ''} ${block._sectionNum ? 'tb-heading--numbered' : ''}`}>
        {block._sectionNum && <span className="tb-section-num">{block._sectionNum}</span>}
        <MathText>{block.content}</MathText>
      </h3>
    );
  },

  text: (block, idx) => (
    <p key={idx} className="tb-body">
      {renderRichText(block.content)}
    </p>
  ),

  list: (block, idx) => (
    <div key={idx} className="tb-list-wrap">
      {block.title && <p className="tb-body tb-list-title">{renderRichText(block.title)}</p>}
      <ul className="tb-list">
        {block.items.map((item, li) => (
          <li key={li}>{renderRichText(item)}</li>
        ))}
      </ul>
    </div>
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
        <CrossIcon size={14} /> Incorrect
      </div>
      <p className="tb-body tb-trap-wrong">{renderRichText(block.wrong)}</p>
      {block.correction && (
        <>
          <div className="tb-badge tb-badge--success" style={{ marginTop: '0.5rem' }}>
            <CheckCircleIcon size={14} /> Correct
          </div>
          <p className="tb-body">{renderRichText(block.correction)}</p>
        </>
      )}
    </div>
  ),

  strategyCard: (block, idx) => (
    <div key={idx} className="tb-prose-section tb-strategy-section">
      <div className="tb-badge tb-badge--strategy">
        <LightBulbIcon size={14} /> {renderRichText(block.title)}
      </div>
      <p className="tb-body">{renderRichText(block.content)}</p>
    </div>
  ),

  example: (block, idx) => (
    <div key={idx} className={`tb-worked-example ${block._exampleNum ? 'tb-worked-example--numbered' : ''}`}>
      <h4 className="tb-subhead">
        {block._exampleNum ? `Example ${block._exampleNum}` : 'Worked Example'}
        {block._exampleNum && block.difficulty && (
          <span className={`tb-ex-diff tb-ex-diff--${block.difficulty.toLowerCase()}`}>{block.difficulty}</span>
        )}
      </h4>
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
    // Composed mode: figures are numbered ("Figure N.") so prose can reference
    // them ("see Figure 1"), the way an authored textbook does.
    const figLabel = block._figNum ? (
      <span className="tb-fig-num">Figure {block._figNum}.</span>
    ) : null;
    if (block.visualType && visualRegistry[block.visualType]) {
      return (
        <figure key={idx} className={`tb-figure ${block._figNum ? 'tb-figure--numbered' : ''}`}>
          <LessonVisualRenderer type={block.visualType} />
          {block.description && (
            <figcaption className="tb-figcaption">{figLabel}{renderRichText(block.description)}</figcaption>
          )}
        </figure>
      );
    }
    return (
      <figure key={idx} className="tb-figure">
        <figcaption className="tb-figcaption">
          {figLabel}{renderRichText(block.description || 'Refer to the visual model in the lesson content.')}
        </figcaption>
      </figure>
    );
  },

  // Composed-mode chapter opener: an orienting lede set apart from body, the
  // way a textbook chapter opens under its title. The reader already renders
  // the chapter title + unit label + read time, so the opener does NOT repeat
  // them — it contributes the lede and, by its presence, turns on composed
  // numbering for the whole article.
  chapterOpener: (block, idx) => (
    <header key={idx} className="tb-chapter-opener">
      {block.lede && <p className="tb-opener-lede">{renderRichText(block.lede)}</p>}
    </header>
  ),

  // Margin-note aside: a short "teacher in the margin" note. kind sets the label.
  aside: (block, idx) => {
    const label = block.label || (
      block.kind === 'watch' ? 'Watch out' :
      block.kind === 'remember' ? 'Remember' : 'Note'
    );
    return (
      <aside key={idx} className={`tb-marginnote tb-marginnote--${block.kind || 'note'}`}>
        <span className="tb-marginnote-label">{label}</span>
        <div className="tb-body">{renderRichText(block.content)}</div>
      </aside>
    );
  },

  // Composed chapter recap: a titled list of the load-bearing takeaways.
  summary: (block, idx) => (
    <section key={idx} className="tb-summary">
      <h3 className="tb-summary-title">{renderRichText(block.title || 'The chapter in short')}</h3>
      <ol className="tb-summary-list">
        {block.points.map((p, pi) => (
          <li key={pi}>{renderRichText(p)}</li>
        ))}
      </ol>
    </section>
  ),

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

const SectionContentImpl = ({ section }) => {
  if (!section || !section.blocks) return null;

  // Composed ("authored textbook") mode is opt-in: a chapter whose first block
  // is a chapterOpener gets auto-numbered sections, worked examples, and
  // figures. Every other chapter passes through unchanged, so this is a safe
  // additive layer while the composed structure rolls out chapter by chapter.
  const composed = section.blocks[0]?.type === 'chapterOpener';
  let sectionN = 0;
  let exampleN = 0;
  let figureN = 0;
  const numberFor = (block) => {
    if (!composed) return block;
    if (block.type === 'heading') return { ...block, _sectionNum: ++sectionN };
    if (block.type === 'example') return { ...block, _exampleNum: ++exampleN };
    if (block.type === 'diagramRef') return { ...block, _figNum: ++figureN };
    return block;
  };

  return (
    <article className={`tb-article ${composed ? 'tb-article--composed' : ''}`}>
      {section.summary && !composed && (
        <p className="tb-lead">
          {renderRichText(section.summary)}
        </p>
      )}

      {section.blocks.map((rawBlock, idx) => {
        const block = numberFor(rawBlock);
        const renderer = BlockRenderers[block.type];
        if (!renderer) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`ContentTabRenderer: unknown block type "${block.type}" at index ${idx}`);
          }
          return null;
        }
        // One bad block must cost ONE block, not the article (and previously
        // the whole app shell — renderers assume well-typed fields, and the
        // content gate can't catch every malformed shape).
        let element;
        try {
          element = renderer(block, idx);
        } catch (err) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`ContentTabRenderer: block "${block.type}" at index ${idx} failed to render`, err);
          }
          return null;
        }
        if (React.isValidElement(element)) {
          // Stagger is capped: with 40+ blocks an uncapped idx*0.05s delay left
          // below-the-fold content invisible for seconds ('both' fill mode).
          return React.cloneElement(element, {
            style: { ...element.props.style, animation: `fadeInUp 0.5s ease ${Math.min(idx * 0.05, 0.35)}s both` }
          });
        }
        return element;
      })}
    </article>
  );
};

// Memoized: the reader's scroll-progress state lives at the reader root, so
// every rAF scroll tick re-rendered 40-120 blocks (renderRichText regex work
// per block per frame). `section` is referentially stable, so memo makes the
// article skip those re-renders entirely.
export const SectionContent = React.memo(SectionContentImpl);

const TAB_ICONS = { learn: '\u{1F4D6}', practice: '\u{270F}\uFE0F' };

const ContentTabRenderer = ({ contentTab }) => {
  const [activeTab, setActiveTab] = useState(0);

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
