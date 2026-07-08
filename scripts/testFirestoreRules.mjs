/**
 * Firestore security-rules tests.
 *
 * The app is owner-only (the school/principal B2B2C model was removed
 * 2026-05-29). These pin the core invariant: an authenticated user can read
 * and write ONLY their own users/{uid} and progress/{uid} docs, and there is
 * no cross-account read path (which is also what structurally closes the old
 * self-elevation-to-principal hole).
 *
 * Run against the emulator:
 *   firebase emulators:exec --only firestore "node scripts/testFirestoreRules.mjs"
 * (or `npm run rules:test`)
 */
import { readFileSync } from 'node:fs';
import assert from 'node:assert';
import {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
} from '@firebase/rules-unit-testing';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const PROJECT_ID = 'performsat-rules-test';
let passed = 0;
let failed = 0;

async function it(name, fn) {
  try {
    await fn();
    passed += 1;
    console.log(`  ok  ${name}`);
  } catch (err) {
    failed += 1;
    console.error(`FAIL  ${name}\n      ${err.message}`);
  }
}

const env = await initializeTestEnvironment({
  projectId: PROJECT_ID,
  firestore: { rules: readFileSync('firestore.rules', 'utf8') },
});

// Seed two users + their progress via the admin (rules-bypassing) context.
await env.withSecurityRulesDisabled(async (ctx) => {
  const db = ctx.firestore();
  await setDoc(doc(db, 'users', 'studentA'), { email: 'a@x.com' });
  await setDoc(doc(db, 'users', 'studentB'), { email: 'b@x.com' });
  await setDoc(doc(db, 'progress', 'studentA'), { userId: 'studentA' });
  await setDoc(doc(db, 'progress', 'studentB'), { userId: 'studentB' });
  await setDoc(doc(db, 'entitlements', 'studentA'), { uid: 'studentA', status: 'trialing' });
  // A summarized session: summary set, watermarks stamped by the server.
  await setDoc(doc(db, 'progress', 'studentA', 'aiChatSessions', 'sessSummarized'), {
    moduleId: 'm1', lessonId: 'l1', messages: [{ role: 'user', content: 'hi' }],
    messageCount: 4, summary: 'A prior summary', summaryCount: 2,
    lastSummarizedAt: 1000,
  });
  // A fresh, not-yet-summarized session.
  await setDoc(doc(db, 'progress', 'studentA', 'aiChatSessions', 'sessFresh'), {
    moduleId: 'm1', lessonId: 'l1', messages: [{ role: 'user', content: 'hi' }],
    messageCount: 1, summary: null,
  });
});

const studentA = env.authenticatedContext('studentA').firestore();
const anon = env.unauthenticatedContext().firestore();

await it('user CAN create own doc', async () => {
  const fresh = env.authenticatedContext('studentNew').firestore();
  await assertSucceeds(setDoc(doc(fresh, 'users', 'studentNew'), { email: 'n@x.com' }));
});

await it('user CAN update own profile', () =>
  assertSucceeds(setDoc(doc(studentA, 'users', 'studentA'), { targetScore: 700 }, { merge: true })));

await it('user CAN read own doc', () =>
  assertSucceeds(getDoc(doc(studentA, 'users', 'studentA'))));

await it('user CANNOT read another user doc (no cross-account path)', () =>
  assertFails(getDoc(doc(studentA, 'users', 'studentB'))));

await it('user CANNOT read another user progress', () =>
  assertFails(getDoc(doc(studentA, 'progress', 'studentB'))));

await it('user CANNOT write another user doc', () =>
  assertFails(setDoc(doc(studentA, 'users', 'studentB'), { targetScore: 800 }, { merge: true })));

await it('anonymous CANNOT read any user doc', () =>
  assertFails(getDoc(doc(anon, 'users', 'studentA'))));

// ── Entitlements (SEVA Premium) — server-write-only ──────────────────────
// The billing model depends on the client NEVER being able to write this
// doc: a self-granted status:'active' or a pushed-out trialEndsAt would be
// free premium. Only the Admin SDK (Cloud Functions) may write.

await it('user CAN read own entitlement', () =>
  assertSucceeds(getDoc(doc(studentA, 'entitlements', 'studentA'))));

await it('user CANNOT write own entitlement (self-granted premium)', () =>
  assertFails(setDoc(doc(studentA, 'entitlements', 'studentA'), { status: 'active' }, { merge: true })));

await it('user CANNOT create own entitlement doc', async () => {
  const fresh = env.authenticatedContext('studentNew2').firestore();
  await assertFails(setDoc(doc(fresh, 'entitlements', 'studentNew2'), { status: 'active' }));
});

await it('user CANNOT read another user entitlement', () => {
  const studentB = env.authenticatedContext('studentB').firestore();
  return assertFails(getDoc(doc(studentB, 'entitlements', 'studentA')));
});

// ── AI chat sessions — client may freshen messages, never the server-owned
// summarization watermarks (cost-abuse guard for summarizeChatSession) ──────

await it('user CAN create own chat session with summary:null', () => {
  const ref = doc(studentA, 'progress', 'studentA', 'aiChatSessions', 'sessNew');
  return assertSucceeds(setDoc(ref, {
    moduleId: 'm1', lessonId: 'l1', messages: [], messageCount: 0, summary: null,
  }));
});

await it('user CAN update own chat session message fields', () => {
  const ref = doc(studentA, 'progress', 'studentA', 'aiChatSessions', 'sessFresh');
  return assertSucceeds(setDoc(ref, {
    messages: [{ role: 'user', content: 'hi' }, { role: 'assistant', content: 'yo' }],
    messageCount: 2, lastMessageAt: 123,
  }, { merge: true }));
});

await it('user CANNOT reset summaryCount (re-arm summary trigger)', () => {
  const ref = doc(studentA, 'progress', 'studentA', 'aiChatSessions', 'sessSummarized');
  return assertFails(setDoc(ref, { summaryCount: 0 }, { merge: true }));
});

await it('user CANNOT modify lastSummarizedAt (defeat cooldown)', () => {
  const ref = doc(studentA, 'progress', 'studentA', 'aiChatSessions', 'sessSummarized');
  return assertFails(setDoc(ref, { lastSummarizedAt: 0 }, { merge: true }));
});

await it('user CANNOT null out an existing summary (re-arm trigger)', () => {
  const ref = doc(studentA, 'progress', 'studentA', 'aiChatSessions', 'sessSummarized');
  return assertFails(setDoc(ref, { summary: null, messageCount: 8 }, { merge: true }));
});

await it('user CAN still update messages on a summarized session', () => {
  const ref = doc(studentA, 'progress', 'studentA', 'aiChatSessions', 'sessSummarized');
  return assertSucceeds(setDoc(ref, { messageCount: 6, lastMessageAt: 999 }, { merge: true }));
});

await env.cleanup();
console.log(`\n${passed} passed, ${failed} failed`);
assert.strictEqual(failed, 0, `${failed} rules test(s) failed`);
