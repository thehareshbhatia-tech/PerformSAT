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
  await setDoc(doc(db, 'progress', 'studentB'), { userId: 'studentB' });
  await setDoc(doc(db, 'entitlements', 'studentA'), { uid: 'studentA', status: 'trialing' });
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

await env.cleanup();
console.log(`\n${passed} passed, ${failed} failed`);
assert.strictEqual(failed, 0, `${failed} rules test(s) failed`);
