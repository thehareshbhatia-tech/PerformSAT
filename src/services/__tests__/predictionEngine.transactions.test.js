/**
 * Transaction-safety tests for predictionEngine's writers.
 *
 * savePrediction / validateAndUpdatePredictions were converted from whole-array
 * read-modify-write to runTransaction (2026-06-26, multi-device data-sync fix)
 * so a concurrent write from a second device can't clobber the predictionLog.
 * These tests pin the transaction wrapper + append/cap/no-op contracts.
 *
 * (validatePrediction's scoring math is covered separately in
 * predictionEngine.scale.test.js — here we only exercise the write paths.)
 *
 * Firestore is mocked; only the transaction + log contracts are under test.
 */

jest.mock('../../firebase/config', () => ({ db: {} }));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(() => ({ __ref: true })),
  runTransaction: jest.fn(),
}));

import { runTransaction } from 'firebase/firestore';
import { savePrediction, validateAndUpdatePredictions } from '../predictionEngine';

function installTransaction({ exists, data }) {
  const writes = [];
  runTransaction.mockImplementation(async (_db, cb) => {
    const tx = {
      get: async () => ({ exists: () => exists, data: () => data }),
      set: (_ref, payload, opts) => writes.push({ op: 'set', payload, opts }),
      update: (_ref, payload) => writes.push({ op: 'update', payload }),
    };
    return cb(tx);
  });
  return writes;
}

describe('savePrediction (transactional append)', () => {
  it('appends a prediction inside a transaction (set + merge)', async () => {
    const writes = installTransaction({ exists: true, data: { predictionLog: [] } });
    await savePrediction('u1', { id: 'p1', resolved: false });
    expect(runTransaction).toHaveBeenCalledTimes(1);
    expect(writes).toHaveLength(1);
    expect(writes[0].op).toBe('set');
    expect(writes[0].opts).toEqual({ merge: true });
    expect(writes[0].payload.predictionLog).toEqual([{ id: 'p1', resolved: false }]);
  });

  it('caps the log at 10 entries, dropping the oldest', async () => {
    const existing = Array.from({ length: 10 }, (_, i) => ({ id: `p${i}` }));
    const writes = installTransaction({ exists: true, data: { predictionLog: existing } });
    await savePrediction('u1', { id: 'p_new' });
    const log = writes[0].payload.predictionLog;
    expect(log).toHaveLength(10);
    expect(log[log.length - 1].id).toBe('p_new');
    expect(log[0].id).toBe('p1'); // p0 (oldest) dropped
  });

  it('creates the doc via set + merge when the progress doc is absent', async () => {
    const writes = installTransaction({ exists: false, data: undefined });
    await savePrediction('u1', { id: 'p1' });
    expect(writes[0].op).toBe('set');
    expect(writes[0].payload.predictionLog).toEqual([{ id: 'p1' }]);
  });
});

describe('validateAndUpdatePredictions (transactional resolve)', () => {
  it('writes nothing when the progress doc is absent', async () => {
    const writes = installTransaction({ exists: false, data: undefined });
    await validateAndUpdatePredictions('u1', {}, 'sat-3', {});
    expect(writes).toHaveLength(0);
  });

  it('writes nothing when there are no unresolved predictions', async () => {
    const writes = installTransaction({
      exists: true,
      data: { predictionLog: [{ id: 'p1', resolved: true }] },
    });
    await validateAndUpdatePredictions('u1', {}, 'sat-3', {});
    expect(writes).toHaveLength(0);
  });
});
