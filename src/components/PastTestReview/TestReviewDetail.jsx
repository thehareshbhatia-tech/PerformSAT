import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  extractItemsFromAttempt,
  getWrongItems,
  groupItemsByErrorClass,
  computeReviewStats,
} from '../../services/selectors/completedTests';
import {
  ERROR_TYPE_LABELS,
  ERROR_TYPE_ICONS,
  ERROR_TYPE_COLORS,
} from '../../services/diagnosticEngine';
import { sectionModuleLabel, sectionModuleShort } from '../../services/selectors/moduleLabel';
import './TestReviewDetail.css';

/**
 * TestReviewDetail — per-test breakdown for the Past-Test-Review surface
 * (Phase 3 of PAST_TEST_REVIEW_PLAN.md).
 *
 * Renders top-of-page stats, module score row, 6-class error breakdown
 * chips, a filter bar (All / Wrong / by error class), and a compact item
 * list. Click on any item routes to ReviewItemCard (Phase 4).
 *
 * Receives loaded data via props (does not fetch). The parent (a future
 * PastTestReviewView in App.jsx) is responsible for using the existing
 * services/diagnosticReportLoader.js to fetch the per-attempt snapshot,
 * regenerate the diagnostic report via runDiagnostic, and pass it down.
 *
 * @param {object} props
 * @param {string} props.testTitle
 * @param {object|null} props.attempt              the latest attempt
 * @param {object|null} [props.diagnosticReport]   for skill→errorClass mapping
 * @param {boolean} [props.loading=false]
 * @param {string|null} [props.error=null]
 * @param {boolean} [props.snapshotMissing=false]  legacy attempt with no
 *                  per-attempt subcollection snapshot — content shown is
 *                  reconstructed from the live test (may differ from what
 *                  the student originally saw); retry CTA is disabled.
 * @param {(item: object) => void} [props.onSelectItem]
 * @param {(wrongItems: Array) => void} [props.onRetryWrong]
 * @param {() => void} [props.onBack]
 */
function TestReviewDetail({
  testTitle,
  attempt,
  diagnosticReport = null,
  loading = false,
  error = null,
  snapshotMissing = false,
  onSelectItem,
  onRetryWrong,
  onBack,
}) {
  const [filter, setFilter] = useState('wrong');

  const stats = useMemo(() => computeReviewStats(attempt), [attempt]);
  const allItems = useMemo(() => extractItemsFromAttempt(attempt), [attempt]);
  const wrongItems = useMemo(() => getWrongItems(attempt), [attempt]);
  const errorClassGroups = useMemo(
    () => groupItemsByErrorClass(wrongItems, diagnosticReport),
    [wrongItems, diagnosticReport]
  );

  // Default to the 'wrong' filter, but on a perfect attempt (no wrong items)
  // fall back to 'all' so the list isn't an empty "No items match this filter".
  // Runs once the attempt has actually loaded (the parent fetches async), and
  // never after the student has interacted with the filter.
  const didInitFilter = useRef(false);
  useEffect(() => {
    if (didInitFilter.current || !attempt) return;
    didInitFilter.current = true;
    if (wrongItems.length === 0) setFilter('all');
  }, [attempt, wrongItems]);

  const errorClassChips = useMemo(() => buildErrorClassChips(errorClassGroups), [errorClassGroups]);
  const visibleItems = useMemo(
    () => selectVisibleItems(filter, allItems, wrongItems, errorClassGroups),
    [filter, allItems, wrongItems, errorClassGroups]
  );

  if (loading) {
    return (
      <section className="trd" aria-label={`Reviewing ${testTitle}`}>
        <header className="trd-header">
          {onBack && (
            <button type="button" className="trd-back" onClick={onBack} aria-label="Back">
              ← Back
            </button>
          )}
          <h1 className="trd-title">{testTitle}</h1>
        </header>
        <div className="trd-loading" role="status" aria-live="polite">
          <div className="trd-spinner" aria-hidden="true" />
          <p className="trd-loading-msg">Loading your review…</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="trd" aria-label="Review error">
        <header className="trd-header">
          {onBack && (
            <button type="button" className="trd-back" onClick={onBack} aria-label="Back">
              ← Back
            </button>
          )}
          <h1 className="trd-title">{testTitle}</h1>
        </header>
        <div className="trd-error" role="alert">
          <p>Couldn't load your review: {error}</p>
        </div>
      </section>
    );
  }

  if (!attempt || allItems.length === 0) {
    return (
      <section className="trd" aria-label="Review empty">
        <header className="trd-header">
          {onBack && (
            <button type="button" className="trd-back" onClick={onBack} aria-label="Back">
              ← Back
            </button>
          )}
          <h1 className="trd-title">{testTitle}</h1>
        </header>
        <div className="trd-empty">
          <p>No item-level review data is available for this attempt.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="trd" aria-label={`Reviewing ${testTitle}`}>
      <header className="trd-header">
        {onBack && (
          <button type="button" className="trd-back" onClick={onBack} aria-label="Back to list">
            ← All Tests
          </button>
        )}
        <h1 className="trd-title">{testTitle}</h1>
      </header>

      {/* Stats row */}
      <div className="trd-stats">
        <Stat value={`${stats.accuracy}%`} label="Accuracy" />
        <Stat value={`${stats.correct}`} label="Correct" tone="positive" />
        <Stat value={`${stats.wrong}`} label="Wrong" tone="negative" />
        <Stat value={`${stats.total}`} label="Total" />
      </div>

      {/* Snapshot-missing notice — legacy attempts that don't have a
          per-attempt snapshot show questions reconstructed from the live
          test. Content may have been edited since the attempt. */}
      {snapshotMissing && (
        <div className="trd-snapshot-warning" role="status" data-testid="trd-snapshot-missing">
          <span className="trd-snapshot-warning-icon" aria-hidden="true">⚠</span>
          <span>
            <strong>Original question text isn't archived for this attempt.</strong>{' '}
            Content shown is from the current test (may differ from what you saw).
            Retry isn't available.
          </span>
        </div>
      )}

      {/* Module score row (only if multi-module) */}
      {Array.isArray(attempt.moduleScores) && attempt.moduleScores.length > 1 && (
        <div className="trd-modules">
          {attempt.moduleScores.map((m, i) => (
            <div key={i} className="trd-module">
              <div className="trd-module-name">{sectionModuleLabel(m.moduleSection, i)}</div>
              <div className="trd-module-score">
                {m.score ?? '—'}
                {typeof m.total === 'number' && (
                  <span className="trd-module-total">/{m.total}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error class breakdown */}
      {errorClassChips.length > 0 && (
        <div className="trd-error-classes" data-testid="trd-error-classes">
          <h2 className="trd-section-title">Why you missed them</h2>
          <div className="trd-chips">
            {errorClassChips.map((chip) => (
              <button
                key={chip.cls}
                type="button"
                className={`trd-chip ${filter === chip.cls ? 'trd-chip-active' : ''}`}
                style={{ '--chip-color': chip.color }}
                onClick={() => setFilter(chip.cls)}
                aria-pressed={filter === chip.cls}
              >
                <span className="trd-chip-icon" aria-hidden="true">{chip.icon}</span>
                <span className="trd-chip-label">{chip.label}</span>
                <span className="trd-chip-count">{chip.count}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filter bar + retry CTA */}
      <div className="trd-filter-row">
        <div className="trd-filter" role="tablist" aria-label="Item filter">
          <FilterTab active={filter === 'all'}    onClick={() => setFilter('all')}    label={`All (${allItems.length})`} />
          <FilterTab active={filter === 'wrong'}  onClick={() => setFilter('wrong')}  label={`Wrong (${wrongItems.length})`} />
        </div>
        {wrongItems.length > 0 && onRetryWrong && !snapshotMissing && (
          <button
            type="button"
            className="trd-retry-cta"
            onClick={() => onRetryWrong(wrongItems)}
            aria-label={`Retry the ${wrongItems.length} wrong items as a drill`}
          >
            Retry the {wrongItems.length} wrong →
          </button>
        )}
      </div>

      {/* Item list */}
      {visibleItems.length === 0 ? (
        <div className="trd-no-items">
          <p>No items match this filter.</p>
        </div>
      ) : (
        <ul className="trd-items" data-testid="trd-items">
          {visibleItems.map((item) => (
            <ItemRow
              key={item.key}
              item={item}
              onClick={() => onSelectItem && onSelectItem(item)}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

function Stat({ value, label, tone }) {
  return (
    <div className={`trd-stat trd-stat-${tone || 'neutral'}`}>
      <div className="trd-stat-value">{value}</div>
      <div className="trd-stat-label">{label}</div>
    </div>
  );
}

function FilterTab({ active, onClick, label }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={`trd-filter-tab ${active ? 'trd-filter-tab-active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function ItemRow({ item, onClick }) {
  const tone = item.isCorrect ? 'correct' : 'wrong';
  const time = formatTime(item.timeSpent);
  return (
    <li className={`trd-item trd-item-${tone}`}>
      <button type="button" className="trd-item-button" onClick={onClick}
        aria-label={`${item.isCorrect ? 'Correct' : 'Wrong'}, ${sectionModuleLabel(item.section, item.moduleIndex)} Q${item.questionIndex + 1}, time ${time}`}>
        <span className="trd-item-icon" aria-hidden="true">{item.isCorrect ? '✓' : '✗'}</span>
        <span className="trd-item-id">{sectionModuleShort(item.section, item.moduleIndex)}·Q{item.questionIndex + 1}</span>
        {item.difficulty && <span className={`trd-item-diff trd-item-diff-${item.difficulty}`}>{item.difficulty}</span>}
        <span className="trd-item-time">{time}</span>
        <span className="trd-item-chevron" aria-hidden="true">›</span>
      </button>
    </li>
  );
}

// ── Pure helpers (exported for unit testing) ────────────────────────────────

/**
 * selectVisibleItems(filter, allItems, wrongItems, errorClassGroups)
 *
 * Returns the item list to render given the active filter.
 *  - 'all'     → allItems
 *  - 'wrong'   → wrongItems
 *  - <errorClass> → errorClassGroups[errorClass] || []
 */
export function selectVisibleItems(filter, allItems, wrongItems, errorClassGroups) {
  if (filter === 'all') return allItems || [];
  if (filter === 'wrong') return wrongItems || [];
  return (errorClassGroups && errorClassGroups[filter]) || [];
}

/**
 * buildErrorClassChips(errorClassGroups)
 *
 * Build an ordered chip list with label/icon/color/count from grouped items.
 * Drops empty groups. Sorts by count desc so the biggest issue is first.
 *
 * @param {Object<string, Array>} errorClassGroups
 * @returns {Array<{cls, label, icon, color, count}>}
 */
export function buildErrorClassChips(errorClassGroups) {
  if (!errorClassGroups) return [];
  const entries = Object.entries(errorClassGroups)
    .filter(([, items]) => Array.isArray(items) && items.length > 0)
    .map(([cls, items]) => ({
      cls,
      // 'mixed' is the catch-all bucket for items whose skill isn't in
      // weakSkills — relabel as "Outside a pattern" so users understand
      // the bucket's meaning (not part of a recurring weakness) rather
      // than the literal class key.
      label: cls === 'mixed'
        ? 'Outside a pattern'
        : (ERROR_TYPE_LABELS?.[cls] || prettifyClass(cls)),
      icon: ERROR_TYPE_ICONS?.[cls] || '•',
      color: ERROR_TYPE_COLORS?.[cls] || '#64748b',
      count: items.length,
    }));
  entries.sort((a, b) => b.count - a.count);
  return entries;
}

function prettifyClass(cls) {
  if (!cls) return 'Mixed';
  return cls.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * formatTime(seconds) — compact "Xm YYs" or "YYs" for items.
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

export default TestReviewDetail;
