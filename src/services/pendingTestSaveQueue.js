/**
 * pendingTestSaveQueue — localStorage-backed queue for practice-test results
 * whose Firestore save failed (network loss, hung commit timeout, quota).
 *
 * When recordPracticeTestResult fails, useProgress enqueues the payload here
 * so the score survives a reload. A boot-time flush in useProgress (plus a
 * manual Retry button on TestResults) replays each entry through
 * recordPracticeTestResult; the attemptId idempotency guard in
 * practiceTestService makes replays safe even when the original hung write
 * later commits on its own.
 *
 * Pure module — no React, no Firebase. Every localStorage access is
 * try/catch-guarded because Safari private mode throws on any access
 * (same pattern as useFeatureFlag.js).
 */

/** Maximum queued saves per user; oldest entries are dropped past this. */
const MAX_PENDING = 3;

/** Per-user storage key (convention: notificationService.js seva:* keys). */
const queueKey = (userId) => `seva:pendingTestSaves:${userId}`;

/**
 * Drop the regenerable diagnosticReport before storage. Lossless:
 * trimAttempts in practiceTestService strips it from every persisted
 * attempt anyway, and it is rebuilt on demand via runDiagnostic.
 */
const stripReport = (results) => {
  const { diagnosticReport, ...rest } = results || {};
  return rest;
};

/**
 * Quota-fallback shape: also drop questionsSnapshot (~90KB) and
 * diagnosticData. The score row + attemptId is the critical payload;
 * legacy attempts already fall back to live test content for review.
 */
const stripHeavy = (results) => {
  const { diagnosticReport, questionsSnapshot, diagnosticData, ...rest } = results || {};
  return rest;
};

/** Guarded write. Returns false instead of throwing (private mode, quota). */
const writeQueue = (userId, entries) => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return false;
    window.localStorage.setItem(queueKey(userId), JSON.stringify(entries));
    return true;
  } catch {
    return false;
  }
};

/**
 * Reads the pending-save queue for a user.
 * Returns [] for missing/corrupted/non-array payloads — a parse error must
 * never crash boot.
 *
 * @param {string} userId - Firebase auth uid
 * @returns {Array<{testId: string, testTitle: string, results: Object, queuedAt: string}>}
 */
export const readPendingSaves = (userId) => {
  if (!userId) return [];
  try {
    if (typeof window === 'undefined' || !window.localStorage) return [];
    const raw = window.localStorage.getItem(queueKey(userId));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

/**
 * Queues a failed test save for later replay. Dedupes by results.attemptId
 * (a retry of the same attempt replaces the stale entry), caps the queue at
 * MAX_PENDING (oldest dropped), and always strips diagnosticReport. On
 * quota errors it retries once with questionsSnapshot/diagnosticData also
 * stripped from every entry.
 *
 * @param {string} userId - Firebase auth uid
 * @param {{testId: string, testTitle: string, results: Object}} entry - Failed save payload
 * @returns {boolean} True when the entry was persisted (full or slim shape)
 */
export const enqueuePendingSave = (userId, entry) => {
  if (!userId || !entry || !entry.results) return false;

  const attemptId = entry.results.attemptId || null;
  const existing = readPendingSaves(userId).filter(
    (e) => !attemptId || e?.results?.attemptId !== attemptId
  );

  const next = [
    ...existing,
    {
      testId: entry.testId,
      testTitle: entry.testTitle,
      results: stripReport(entry.results),
      queuedAt: new Date().toISOString(),
    },
  ].slice(-MAX_PENDING);

  if (writeQueue(userId, next)) return true;

  // Quota fallback: keep only the critical score-row payload on every entry.
  const slim = next.map((e) => ({ ...e, results: stripHeavy(e.results) }));
  return writeQueue(userId, slim);
};

/**
 * Removes a single queued entry by attemptId (no-op when absent).
 * Called after a successful save/replay of that attempt.
 *
 * @param {string} userId - Firebase auth uid
 * @param {string} attemptId - results.attemptId of the entry to drop
 */
export const removePendingSave = (userId, attemptId) => {
  if (!userId || !attemptId) return;
  const remaining = readPendingSaves(userId).filter(
    (e) => e?.results?.attemptId !== attemptId
  );
  if (remaining.length === 0) {
    clearPendingSaves(userId);
    return;
  }
  writeQueue(userId, remaining);
};

/**
 * Drops the entire pending-save queue for a user.
 * Used when the queue empties and for test cleanup.
 *
 * @param {string} userId - Firebase auth uid
 */
export const clearPendingSaves = (userId) => {
  if (!userId) return;
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;
    window.localStorage.removeItem(queueKey(userId));
  } catch {
    // Safari private mode — nothing to clear anyway.
  }
};

/**
 * Sequentially replays every queued entry through saveFn. Successful entries
 * are removed; failures stay queued for the next boot. Never throws on a
 * per-entry failure — it keeps going so one bad entry can't block the rest.
 *
 * @param {string} userId - Firebase auth uid
 * @param {function(Object): Promise<void>} saveFn - Called with each queue entry
 * @returns {Promise<{flushed: number, failed: number}>} Replay tally
 */
export const flushPendingSaves = async (userId, saveFn) => {
  const entries = readPendingSaves(userId);
  let flushed = 0;
  let failed = 0;

  for (const entry of entries) {
    try {
      await saveFn(entry);
      removePendingSave(userId, entry?.results?.attemptId);
      flushed += 1;
    } catch (err) {
      console.error(
        '[pendingTestSaveQueue] Flush failed for attempt',
        entry?.results?.attemptId,
        err
      );
      failed += 1;
    }
  }

  return { flushed, failed };
};
