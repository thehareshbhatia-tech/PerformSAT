/**
 * Transaction-safety tests for interventionTracker.
 *
 * startIntervention / resolveIntervention were converted from whole-array
 * read-modify-write to runTransaction (2026-06-26, multi-device data-sync fix)
 * so a concurrent write from a second device can't clobber the interventionLog
 * (last-write-wins lost-update). These tests pin that the writes happen INSIDE
 * a transaction and commit the correct log.
 *
 * Firestore is mocked; only the transaction + log contracts are under test.
 */

jest.mock('../../firebase/config', () => ({ db: {} }));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(() => ({ __ref: true })),
  getDoc: jest.fn(),
  runTransaction: jest.fn(),
}));

import { runTransaction } from 'firebase/firestore';
import { startIntervention, resolveIntervention } from '../interventionTracker';

// Build a runTransaction implementation backed by a single in-memory doc, and
// return the captured writes so a test can assert what was committed.
// (CRA jest sets resetMocks:true, so this is installed per-test, not in factory.)
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

describe('startIntervention (transactional append)', () => {
  it('appends a new intervention inside a transaction (set + merge)', async () => {
    const writes = installTransaction({ exists: true, data: { interventionLog: [] } });
    const id = await startIntervention('u1', {
      type: 'tutoring_session',
      skillIds: ['slope-intercept-form'],
      preMetrics: {},
    });
    expect(runTransaction).toHaveBeenCalledTimes(1);
    expect(writes).toHaveLength(1);
    expect(writes[0].op).toBe('set');
    expect(writes[0].opts).toEqual({ merge: true });
    const log = writes[0].payload.interventionLog;
    expect(log).toHaveLength(1);
    expect(log[0].id).toBe(id);
    expect(log[0].skillIds).toEqual(['slope-intercept-form']);
    expect(log[0].resolved).toBe(false);
  });

  it('preserves prior entries when appending (no clobber of existing log)', async () => {
    const prior = { id: 'int_prior', resolved: true };
    const writes = installTransaction({ exists: true, data: { interventionLog: [prior] } });
    await startIntervention('u1', { type: 'reteach', skillIds: [], preMetrics: {} });
    const log = writes[0].payload.interventionLog;
    expect(log).toHaveLength(2);
    expect(log[0]).toEqual(prior);
  });

  it('creates the doc via set + merge when the progress doc is absent', async () => {
    const writes = installTransaction({ exists: false, data: undefined });
    const id = await startIntervention('u1', { type: 'trap_warning', skillIds: ['x'], preMetrics: {} });
    expect(writes).toHaveLength(1);
    expect(writes[0].op).toBe('set');
    expect(writes[0].payload.interventionLog).toHaveLength(1);
    expect(typeof id).toBe('string');
  });
});

describe('resolveIntervention (transactional update)', () => {
  it('marks the matching intervention resolved with a computed delta', async () => {
    const open = {
      id: 'int_open',
      skillIds: ['slope'],
      resolved: false,
      preMetrics: { skillMastery: { slope: 40 } },
    };
    const writes = installTransaction({ exists: true, data: { interventionLog: [open] } });
    await resolveIntervention('u1', 'int_open', { skillMastery: { slope: 70 }, errorTypes: {} });
    expect(writes).toHaveLength(1);
    expect(writes[0].op).toBe('update');
    const entry = writes[0].payload.interventionLog[0];
    expect(entry.resolved).toBe(true);
    expect(entry.postMetrics.delta.slope).toBe(30);
    expect(entry.postMetrics.improved).toBe(true);
  });

  it('writes nothing when the intervention id is not found', async () => {
    const writes = installTransaction({
      exists: true,
      data: { interventionLog: [{ id: 'other', resolved: false }] },
    });
    await resolveIntervention('u1', 'missing', { skillMastery: {} });
    expect(writes).toHaveLength(0);
  });

  it('writes nothing when the progress doc is absent', async () => {
    const writes = installTransaction({ exists: false, data: undefined });
    await resolveIntervention('u1', 'whatever', { skillMastery: {} });
    expect(writes).toHaveLength(0);
  });
});
