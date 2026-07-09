/**
 * Tutor-exchange tracker — minimal module-level bridge between the tutor chat
 * (which knows when a student asked for help on a question) and the drill
 * answer-submission path in App.jsx (which knows whether the NEXT question was
 * answered correctly). Lets us measure next-item correctness after a tutor
 * exchange — the A/B metric behind the +6pp skill-history lever — without
 * threading state through the component tree.
 *
 * Single-slot on purpose: only the most recent tutored question matters for the
 * "did the next item land?" measurement. Fail-silent, zero-latency, no I/O.
 */

let pending = null;

/**
 * Derive a stable key for a question. Prefers the real question id; falls back
 * to a short hash of the stem text so items without an id still compare stably.
 *
 * @param {{id?: (string|number), text?: string}} q
 * @returns {string|null} a stable key, or null when nothing identifies the item
 */
export const makeQuestionKey = ({ id, text } = {}) => {
  if (id !== undefined && id !== null && `${id}`.length > 0) return `id:${id}`;
  if (typeof text === 'string' && text.trim().length > 0) {
    // djb2 — tiny, stable, collision-tolerant enough for a telemetry key.
    let h = 5381;
    for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
    return `text:${(h >>> 0).toString(36)}`;
  }
  return null;
};

/**
 * Record that the student opened a tutor exchange on `questionKey`. Overwrites
 * any earlier pending exchange (only the most recent one matters). No-ops on a
 * falsy key.
 *
 * @param {string} questionKey - from makeQuestionKey
 */
export const noteTutorExchange = (questionKey) => {
  if (!questionKey) return;
  pending = { questionKey, at: Date.now() };
};

/**
 * Peek at the pending exchange without consuming it.
 * @returns {{questionKey: string, at: number}|null}
 */
export const peekTutorExchange = () => pending;

/**
 * Consume the pending exchange, conditionally. When `currentQuestionKey` matches
 * the tutored question, the "next item" has not happened yet, so the exchange is
 * KEPT and null is returned. Otherwise (a different question, or no key given)
 * the exchange is consumed and returned. Returns null when nothing is pending.
 *
 * @param {string} [currentQuestionKey] - key of the question just answered
 * @returns {{questionKey: string, at: number}|null}
 */
export const consumeTutorExchange = (currentQuestionKey) => {
  if (!pending) return null;
  if (currentQuestionKey && currentQuestionKey === pending.questionKey) return null;
  const ex = pending;
  pending = null;
  return ex;
};

/** Test-only reset of the single slot. */
export const _resetTutorExchange = () => { pending = null; };
