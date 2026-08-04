import React from 'react';
import { MathText } from '../MathText';
import AnswerChoiceList from '../shared/AnswerChoiceList';
import QuestionDiagram from '../QuestionDiagrams';
import { InlineRich } from '../SolutionExplanation';
import { parsePassageMarkup, buildSegments } from '../rw/HighlightablePassage';
import {
  ERROR_TYPE_LABELS,
  ERROR_TYPE_ICONS,
  ERROR_TYPE_DESCRIPTIONS,
  ERROR_TYPE_COLORS,
} from '../../services/diagnosticEngine';
import { sectionModuleShort } from '../../services/selectors/moduleLabel';
import './ReviewItemCard.css';

/**
 * ReadOnlyPassage — markup-aware R&W passage render (italics, underlines,
 * conventions blanks) without the highlighting interactivity. Snapshot items
 * carry the passage since the stimulus-field backfill; without this block a
 * reviewed R&W item was just a stem ("Which choice completes the text...?")
 * with nothing to read.
 */
function ReadOnlyPassage({ text }) {
  if (!text) return null;
  const { plain, formats } = parsePassageMarkup(String(text));
  const segments = buildSegments(plain, [], formats, true);
  return (
    <div className="ric-passage" data-testid="ric-passage">
      {segments.map(seg => {
        if (seg.blank) return <span key={seg.key} className="ric-passage-blank" aria-label="blank" />;
        let node = seg.text;
        if (seg.u) node = <u>{node}</u>;
        if (seg.em) node = <em>{node}</em>;
        return <React.Fragment key={seg.key}>{node}</React.Fragment>;
      })}
    </div>
  );
}

/**
 * ReviewItemCard — single-item review surface for Past-Test-Review
 * (Phase 4 of PAST_TEST_REVIEW_PLAN.md).
 *
 * Renders the original question (from the per-attempt snapshot), the
 * student's answer (highlighted), the correct answer, the full
 * explanation, an error-class chip with brief explainer, and a
 * "Try a similar question" CTA that piggybacks on the existing
 * services/trySimilarService.js.
 *
 * Reuses the canonical `<AnswerChoiceList>` in showResult=true mode so
 * the visual matches the test + drill answer chrome 1:1 (correct chip,
 * wrong chip, letter bubbles, math rendering).
 *
 * Pure presentation. The parent fetches the snapshot via
 * services/diagnosticReportLoader.js and the per-item review entry via
 * selectors/completedTests.js, then passes both down.
 *
 * @param {object} props
 * @param {object} props.snapshotItem   { id, stem, choices, correctAnswer, explanation,
 *                                         difficulty, skills, moduleIndex, questionIndex }
 * @param {string|null} props.studentAnswer
 * @param {boolean} props.isCorrect
 * @param {string|null} [props.errorClass]      from groupItemsByErrorClass
 * @param {number|null} [props.timeSpent]
 * @param {string|null} [props.testTitle]
 * @param {boolean} [props.snapshotMissing=false]  legacy attempt — banner
 *                                                 appears, "Your answer"
 *                                                 falls back to "(not recorded)".
 * @param {() => void} [props.onPrev]            navigate to prior item
 * @param {() => void} [props.onNext]            navigate to next item
 * @param {() => void} [props.onBack]
 * @param {() => void} [props.onTrySimilar]      launch a 1-question drill on
 *                                                this item's skill (Plan D4
 *                                                of PAST_TEST_REVIEW_PLAN.md;
 *                                                opt-in — no button rendered
 *                                                when handler is not provided).
 */
function ReviewItemCard({
  snapshotItem,
  studentAnswer = null,
  isCorrect = false,
  errorClass = null,
  timeSpent = null,
  testTitle = null,
  snapshotMissing = false,
  onPrev,
  onNext,
  onBack,
  onTrySimilar,
}) {
  if (!snapshotItem) {
    return (
      <section className="ric" aria-label="Review item — missing">
        <header className="ric-header">
          {onBack && <button type="button" className="ric-back" onClick={onBack}>← Back</button>}
        </header>
        <div className="ric-error">
          <p>This item's snapshot couldn't be loaded.</p>
        </div>
      </section>
    );
  }

  const errorMeta = buildErrorMeta(errorClass);
  const moduleQ = `${sectionModuleShort(snapshotItem.section, snapshotItem.moduleIndex)}·Q${(snapshotItem.questionIndex ?? 0) + 1}`;
  const stemText = snapshotItem.stem || snapshotItem.question || '';
  const explanationText = snapshotItem.explanation || '';

  return (
    <section className="ric" aria-label={`Review item ${moduleQ}`}>
      <header className="ric-header">
        {onBack && (
          <button type="button" className="ric-back" onClick={onBack} aria-label="Back to test review">
            ← {testTitle || 'Test review'}
          </button>
        )}
        <div className="ric-meta">
          <span className="ric-meta-id">{moduleQ}</span>
          {snapshotItem.difficulty && (
            <span className={`ric-meta-diff ric-meta-diff-${snapshotItem.difficulty}`}>
              {snapshotItem.difficulty}
            </span>
          )}
          {typeof timeSpent === 'number' && (
            <span className="ric-meta-time">{formatTime(timeSpent)}</span>
          )}
          <span className={`ric-meta-result ric-meta-result-${isCorrect ? 'correct' : 'wrong'}`}>
            {isCorrect ? '✓ Correct' : '✗ Wrong'}
          </span>
        </div>
      </header>

      {/* Snapshot-missing notice — surface that this is reconstructed
          content (legacy attempt without per-attempt subcollection). */}
      {snapshotMissing && (
        <div className="ric-snapshot-warning" role="status" data-testid="ric-snapshot-missing">
          <span className="ric-snapshot-warning-icon" aria-hidden="true">{'⚠︎'}</span>
          <span>
            Original question text isn't archived for this attempt — content shown is from the current test (may differ from what you saw).
          </span>
        </div>
      )}

      {/* R&W passage (before the stem, matching the test/drill layout) */}
      <ReadOnlyPassage text={snapshotItem.passage} />

      {/* Stem */}
      <div className="ric-stem">
        <MathText text={stemText} />
      </div>

      {/* Math figure */}
      {snapshotItem.diagram?.type && (
        <div className="ric-diagram">
          <QuestionDiagram type={snapshotItem.diagram.type} params={snapshotItem.diagram.params} />
        </div>
      )}

      {/* Data table */}
      {snapshotItem.questionTable?.headers && (
        <div className="ric-table-wrap">
          <table className="ric-table">
            <thead>
              <tr>
                {snapshotItem.questionTable.headers.map((header, i) => (
                  <th key={i}><MathText text={String(header)} /></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(snapshotItem.questionTable.rows || []).map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}><MathText text={String(cell)} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Choices (review mode = showResult=true) */}
      {Array.isArray(snapshotItem.choices) && snapshotItem.choices.length > 0 && (
        <div className="ric-choices">
          <AnswerChoiceList
            choices={snapshotItem.choices}
            selectedId={studentAnswer}
            correctId={snapshotItem.correctAnswer}
            showResult={true}
            onSelect={() => {}}
          />
        </div>
      )}

      {/* Fill-in answer (no choices) */}
      {(!Array.isArray(snapshotItem.choices) || snapshotItem.choices.length === 0) && (
        <div className="ric-fill-in">
          <div className="ric-fill-row">
            <span className="ric-fill-label">Your answer:</span>
            <span className={`ric-fill-value ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
              {studentAnswer || (snapshotMissing ? '(not recorded)' : '(blank)')}
            </span>
          </div>
          <div className="ric-fill-row">
            <span className="ric-fill-label">Correct:</span>
            <span className="ric-fill-value is-correct">{snapshotItem.correctAnswer}</span>
          </div>
        </div>
      )}

      {/* Error class chip + explainer */}
      {!isCorrect && errorMeta && (
        <div
          className="ric-error-class"
          style={{ '--ric-err-color': errorMeta.color }}
          data-testid="ric-error-class"
        >
          <div className="ric-error-class-head">
            <span className="ric-error-class-icon" aria-hidden="true">{errorMeta.icon}</span>
            <span className="ric-error-class-label">{errorMeta.label}</span>
          </div>
          <p className="ric-error-class-desc">{errorMeta.description}</p>
        </div>
      )}

      {/* Explanation */}
      {explanationText && (
        <div className="ric-explanation">
          <h3 className="ric-section-title">Explanation</h3>
          <div className="ric-explanation-body">
            <InlineRich text={explanationText} />
          </div>
        </div>
      )}

      {/* Try-Similar CTA — Plan D4 of PAST_TEST_REVIEW_PLAN.md. Lets a
          student browsing wrong items launch a single-question drill on
          this item's skill without entering retry-drill mode. Opt-in via
          the onTrySimilar prop (App.jsx wires it; tests can render without).
          Only meaningful on a WRONG item with a real snapshot — a correct item
          has nothing to re-practice, and a reconstructed (snapshotMissing) item
          can't reliably route the drill. */}
      {onTrySimilar && !isCorrect && !snapshotMissing && (
        <div className="ric-cta-row" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '14px', marginTop: '6px' }}>
          <button
            type="button"
            className="ric-try-similar"
            onClick={onTrySimilar}
            aria-label="Try a similar question on this skill"
            style={{
              padding: '10px 16px',
              background: 'rgba(234,88,12,0.08)',
              border: '1px solid rgba(234,88,12,0.2)',
              borderRadius: '8px',
              color: '#ea580c',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
              <path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </svg>
            Try a similar question
          </button>
        </div>
      )}

      {/* CTA row — Prev/Next navigate within the wrong-items list. */}
      {(onPrev || onNext) && (
        <div className="ric-cta-row">
          {onPrev ? (
            <button type="button" className="ric-nav ric-nav-prev" onClick={onPrev} aria-label="Previous item">
              ← Previous
            </button>
          ) : <span className="ric-nav-spacer" aria-hidden="true" />}
          {onNext && (
            <button type="button" className="ric-nav ric-nav-next" onClick={onNext} aria-label="Next item">
              Next →
            </button>
          )}
        </div>
      )}
    </section>
  );
}

// ── Pure helpers (exported for unit testing) ─────────────────────────────

/**
 * buildErrorMeta(errorClass) — assemble the chip's display data from the
 * canonical taxonomy. Returns null when no class (e.g., correct items).
 *
 * 'mixed' is a special bucket for items whose primary skill isn't in
 * weakSkills (i.e., this miss isn't part of a recurring weakness). It
 * gets its own description rather than the generic fallback so the user
 * understands what the bucket means.
 *
 * @param {string|null|undefined} errorClass
 * @returns {{label, icon, description, color}|null}
 */
export function buildErrorMeta(errorClass) {
  if (!errorClass) return null;
  if (errorClass === 'mixed') {
    return {
      label: 'Outside a pattern',
      icon: '•',
      description: 'This miss isn\'t part of a recurring weakness — likely a one-off.',
      color: '#64748b',
    };
  }
  return {
    label: ERROR_TYPE_LABELS?.[errorClass] || prettifyClass(errorClass),
    icon: ERROR_TYPE_ICONS?.[errorClass] || '•',
    description: ERROR_TYPE_DESCRIPTIONS?.[errorClass] || `${prettifyClass(errorClass)} pattern detected.`,
    color: ERROR_TYPE_COLORS?.[errorClass] || '#64748b',
  };
}

function prettifyClass(cls) {
  return cls.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * formatTime(seconds) — same shape as TestReviewDetail.formatTime, kept
 * local to avoid cross-component import for one helper.
 */
export function formatTime(seconds) {
  if (typeof seconds !== 'number' || seconds < 0) return '—';
  // Round to whole seconds FIRST, then split — otherwise 119.6s rounds the
  // remainder to 60 and renders "1m 60s" instead of "2m".
  const t = Math.round(seconds);
  if (t < 60) return `${t}s`;
  const m = Math.floor(t / 60);
  const s = t % 60;
  return s === 0 ? `${m}m` : `${m}m ${s}s`;
}

export default ReviewItemCard;
