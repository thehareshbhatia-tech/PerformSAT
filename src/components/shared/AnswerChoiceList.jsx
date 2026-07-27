// src/components/shared/AnswerChoiceList.jsx
//
// Shared multiple-choice answer list. The CANONICAL choice-card UI for
// the whole app — both the full mock test (PracticeTest.jsx) and the
// study-plan-driven drill (AssignedPracticeShell.jsx) render their
// choices through this component so the visuals stay in lockstep.
//
// Visual model: matches the official Bluebook digital-SAT — soft
// rounded card, large letter bubble, serif body. The drill used to have
// a sharper sans-serif look that diverged from the test; this shared
// component closes that gap.
//
// Owns: card chrome, letter bubble, eliminate cross-out button,
// pristine/selected/eliminated/correct/wrong states, and the choice-
// content branching (text → MathText, segmented → QuestionRenderer,
// table → inline HTML table, fraction → stacked Fraction).
//
// Does NOT own: passage display, question stem, hint blocks, feedback
// pane, action button — those stay in each shell since the surrounding
// chrome differs (the test has a clock + navigator; the drill has the
// AI tutor + try-similar etc).

import React from 'react';
import { MathText } from '../MathText';
import QuestionRenderer from '../QuestionRenderer';
import './AnswerChoiceList.css';

// ── Helpers ────────────────────────────────────────────────────────────

/**
 * Stacked numerator/denominator. Used for choices like "5/12" rendered
 * as a vertical fraction. Mirrors the inline Fraction in PracticeTest.jsx
 * but lives here so both shells can share it.
 */
function Fraction({ numerator, denominator }) {
  return (
    <span className="ac-fraction">
      <span className="ac-fraction-num"><MathText text={numerator} /></span>
      <span className="ac-fraction-den"><MathText text={denominator} /></span>
    </span>
  );
}

/**
 * Render a single choice's body content. Branches by shape:
 *   - choice.fraction → <Fraction>
 *   - choice.table    → inline HTML table
 *   - choice.text is array/object → <QuestionRenderer> (segmented content)
 *   - choice.text is string → <MathText> (handles inline $...$ patterns)
 *
 * Caller passes the choice object as-is from the question bank — the
 * branching here owns interpreting the shape.
 */
function ChoiceBody({ choice }) {
  if (choice.fraction) {
    return (
      <span className="ac-fraction-wrap">
        {choice.text && <MathText>{choice.text}</MathText>}
        <Fraction numerator={choice.fraction.numerator} denominator={choice.fraction.denominator} />
        {choice.textAfter && <span className="ac-fraction-after">{choice.textAfter}</span>}
      </span>
    );
  }

  if (choice.table) {
    return (
      <table className="ac-choice-table">
        <thead>
          <tr>
            {choice.table.headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {choice.table.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <td key={j}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (Array.isArray(choice.text) || (choice.text && typeof choice.text === 'object')) {
    return <QuestionRenderer content={choice.text} />;
  }

  return <MathText>{choice.text || ''}</MathText>;
}

// ── Single choice ─────────────────────────────────────────────────────

/**
 * One answer-choice card. Driven by CSS classes (not inline styles) so
 * site-wide overrides like `.test-session-shell[data-section="reading-writing"]`
 * keep working when this component renders inside the R&W test.
 *
 * State precedence (most specific first):
 *   1. is-correct (post-submit + this is the right answer)
 *   2. is-wrong (post-submit + user picked this and it's wrong)
 *   3. is-eliminated (user crossed out — only relevant before submit)
 *   4. is-selected (user picked — only relevant before submit)
 *   5. pristine
 */
function AnswerChoice({
  choice,
  isSelected,
  isEliminated,
  showResult,
  isCorrectAnswer,
  onSelect,
  onToggleEliminate,
  crossOut,
  crossOutControls = true,
}) {
  // After submit, "selected by user" + "is the correct answer" together
  // determine the result chip / styling.
  let stateClass = '';
  if (showResult) {
    if (isCorrectAnswer) stateClass = 'is-correct';
    else if (isSelected) stateClass = 'is-wrong';
  } else {
    if (isEliminated) stateClass = 'is-eliminated';
    else if (isSelected) stateClass = 'is-selected';
  }

  const cardClass = ['answer-choice-card', stateClass].filter(Boolean).join(' ');

  // Disable interaction post-submit and when crossed out.
  const interactive = !showResult && !isEliminated;

  // "bluebook" cross-out mode (the timed test): the eliminate control is a
  // separate, always-visible button to the RIGHT of the card, and the
  // selected card shows an inline check — matching the digital-SAT. The drill
  // leaves crossOut undefined and keeps the hover cross-out inside the card.
  const bluebook = crossOut === 'bluebook';

  const card = (
    <div
      className={cardClass}
      onClick={() => interactive && onSelect && onSelect(choice.id)}
      role="button"
      tabIndex={interactive ? 0 : -1}
      aria-pressed={isSelected}
      onKeyDown={(e) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect && onSelect(choice.id);
        }
      }}
    >
      {/* Eliminate cross-out button (top-right corner) — non-bluebook only */}
      {!bluebook && !showResult && onToggleEliminate && (
        <button
          type="button"
          className="answer-eliminate-btn"
          onClick={(e) => { e.stopPropagation(); onToggleEliminate(choice.id); }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') e.stopPropagation();
          }}
          title={isEliminated ? 'Undo cross-out' : 'Cross out choice'}
          aria-label={isEliminated ? `Undo elimination of choice ${choice.id}` : `Eliminate choice ${choice.id}`}
        >
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="2" y1="2" x2="10" y2="10" />
            <line x1="10" y1="2" x2="2" y2="10" />
          </svg>
        </button>
      )}

      {/* Letter bubble + body. After submit the bubble shows ✓/✗ for
          the correct answer / the user's wrong pick. */}
      <div className="answer-letter-bubble" aria-hidden="true">
        {showResult && isCorrectAnswer ? '✓'
          : showResult && isSelected && !isCorrectAnswer ? '✗'
          : choice.id}
      </div>

      <div className="answer-text-content">
        <ChoiceBody choice={choice} />
      </div>

      {/* Selected check — bluebook taking mode only */}
      {bluebook && isSelected && !showResult && (
        <span className="answer-selected-check" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pt-orange, #EA580C)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" fill="var(--pt-orange-tint, rgba(234,88,12,.1))" stroke="none" />
            <path d="M8 12.5l2.5 2.5 5-5.5" />
          </svg>
        </span>
      )}
    </div>
  );

  // Bluebook: wrap the card and a separate cross-out button in a flex row
  // (state-aware glyph: X-strike letter → solid letter when out). The button
  // column only renders while the ABC eliminator tool is ON (crossOutControls);
  // existing strikethroughs stay visible either way — matching Bluebook, where
  // turning the tool off hides the controls but keeps the cross-outs.
  if (bluebook && !showResult && onToggleEliminate && crossOutControls) {
    return (
      <div className="answer-choice-row">
        {card}
        <button
          type="button"
          className={`answer-crossout ${isEliminated ? 'is-eliminated' : ''}`}
          onClick={(e) => { e.stopPropagation(); onToggleEliminate(choice.id); }}
          title={isEliminated ? 'Undo cross-out' : 'Cross out choice'}
          aria-label={isEliminated ? `Undo elimination of choice ${choice.id}` : `Eliminate choice ${choice.id}`}
        >
          {isEliminated
            ? <span className="answer-crossout-glyph">{choice.id}</span>
            : <span className="answer-crossout-glyph answer-crossout-strike">{choice.id}</span>}
        </button>
      </div>
    );
  }

  return card;
}

// ── List ──────────────────────────────────────────────────────────────

/**
 * @typedef Choice
 * @property {string} id            'A' | 'B' | 'C' | 'D' (also fill-in IDs)
 * @property {string|Array|object} [text]  Choice body — string, segments, or object.
 * @property {object} [fraction]    { numerator, denominator } for stacked fractions
 * @property {string} [textAfter]   Optional trailing text after a fraction
 * @property {object} [table]       { headers: string[], rows: string[][] }
 *
 * @param {object} props
 * @param {Choice[]} props.choices            The answer choices for the question.
 * @param {string|null} props.selectedId      ID of the currently selected choice.
 * @param {string[]} [props.eliminatedIds]    IDs the user has crossed out.
 * @param {boolean} [props.showResult]        If true, the question has been
 *                                            submitted; render the post-answer
 *                                            correct/wrong styling.
 * @param {string|null} [props.correctId]     The correct choice id — only used
 *                                            when showResult is true.
 * @param {(id: string) => void} props.onSelect
 * @param {(id: string) => void} [props.onToggleEliminate] Optional — drill flow
 *                                            and the test both expose this.
 */
function AnswerChoiceList({
  choices,
  selectedId,
  eliminatedIds = [],
  showResult = false,
  correctId = null,
  onSelect,
  onToggleEliminate,
  crossOut,
  crossOutControls = true,
}) {
  if (!Array.isArray(choices) || choices.length === 0) return null;

  return (
    <div className="answers-container">
      {choices.map((choice) => (
        <AnswerChoice
          key={choice.id}
          choice={choice}
          isSelected={selectedId === choice.id}
          isEliminated={eliminatedIds.includes(choice.id)}
          showResult={showResult}
          isCorrectAnswer={showResult && correctId === choice.id}
          onSelect={onSelect}
          onToggleEliminate={onToggleEliminate}
          crossOut={crossOut}
          crossOutControls={crossOutControls}
        />
      ))}
    </div>
  );
}

export default AnswerChoiceList;
export { AnswerChoice, ChoiceBody, Fraction };
