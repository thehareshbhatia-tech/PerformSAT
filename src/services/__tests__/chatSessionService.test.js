/**
 * Pins flushPendingWrites: it must PERFORM the pending debounced session write
 * (unmount / tab close inside the 30s debounce window), not just cancel the
 * timer — cancelling silently dropped the last exchanges of a conversation.
 */
jest.mock('../../firebase/config', () => ({ db: {} }));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn(),
  getDoc: jest.fn(),
  getDocs: jest.fn(),
  updateDoc: jest.fn(),
  setDoc: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
  orderBy: jest.fn(),
  limit: jest.fn(),
  serverTimestamp: jest.fn(),
  Timestamp: {},
}));

import { updateSessionMessages, flushPendingWrites } from '../chatSessionService';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';

const messages = [
  { role: 'user', content: 'What is slope?', timestamp: 't1' },
  { role: 'assistant', content: 'Rise over run.', timestamp: 't2' },
];

describe('flushPendingWrites', () => {
  // CRA's jest config sets resetMocks: true, so implementations are reinstalled per test.
  beforeEach(() => {
    jest.useFakeTimers();
    doc.mockReturnValue('session-doc-ref');
    updateDoc.mockResolvedValue(undefined);
    serverTimestamp.mockReturnValue('server-ts');
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('performs the pending debounced write instead of dropping it', async () => {
    // First non-forced call has no pending entry -> takes the debounce branch.
    await updateSessionMessages('u1', 'flush-a', messages);
    expect(updateDoc).not.toHaveBeenCalled();

    await flushPendingWrites('u1', 'flush-a');

    expect(doc).toHaveBeenCalledWith({}, 'progress', 'u1', 'aiChatSessions', 'flush-a');
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith('session-doc-ref', {
      messages: [
        { role: 'user', content: 'What is slope?', timestamp: 't1' },
        { role: 'assistant', content: 'Rise over run.', timestamp: 't2' },
      ],
      messageCount: 2,
      lastMessageAt: 'server-ts',
    });

    // The debounce timer was cancelled — advancing time must not double-write.
    jest.runOnlyPendingTimers();
    expect(updateDoc).toHaveBeenCalledTimes(1);
  });

  it('is a no-op when nothing is pending', async () => {
    await flushPendingWrites('u1', 'flush-never-seen');
    expect(updateDoc).not.toHaveBeenCalled();
  });

  it('is a no-op after a forced write already cleared the pending entry', async () => {
    await updateSessionMessages('u1', 'flush-b', messages, true); // immediate write
    expect(updateDoc).toHaveBeenCalledTimes(1);

    await flushPendingWrites('u1', 'flush-b');
    expect(updateDoc).toHaveBeenCalledTimes(1); // no second write
  });
});
