/**
 * Firestore security-rules tests (autoplan eng review, 2026-05-29).
 *
 * Pins the fix for the privilege-escalation hole: a self-serve student must
 * not be able to set role:'principal' (which isPrincipal() trusts) and read
 * every same-school student's PII. Also a regression guard that ordinary
 * profile updates (which omit role/schoolId) still succeed under the
 * null-safe `.get()` immutability check.
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

// Seed two student docs + one principal via the admin (rules-bypassing) context.
await env.withSecurityRulesDisabled(async (ctx) => {
  const db = ctx.firestore();
  await setDoc(doc(db, 'users', 'studentA'), { role: 'student', email: 'a@x.com' });
  await setDoc(doc(db, 'users', 'studentB'), { role: 'student', email: 'b@x.com', schoolId: 'school1' });
  await setDoc(doc(db, 'users', 'principal1'), { role: 'principal', schoolId: 'school1' });
  await setDoc(doc(db, 'progress', 'studentB'), { userId: 'studentB' });
});

const studentA = env.authenticatedContext('studentA').firestore();
const principal = env.authenticatedContext('principal1').firestore();

await it('student CANNOT create self as principal', () =>
  assertFails(setDoc(doc(studentA, 'users', 'studentA'), { role: 'principal', schoolId: 'school1' })));

await it('student CAN create self as student', async () => {
  // fresh uid so create (not update) path is exercised
  const fresh = env.authenticatedContext('studentNew').firestore();
  await assertSucceeds(setDoc(doc(fresh, 'users', 'studentNew'), { role: 'student', email: 'n@x.com' }));
});

await it('student CANNOT escalate own role to principal', () =>
  assertFails(setDoc(doc(studentA, 'users', 'studentA'), { role: 'principal' }, { merge: true })));

await it('student CANNOT change own schoolId', () =>
  assertFails(setDoc(doc(studentA, 'users', 'studentA'), { schoolId: 'school1' }, { merge: true })));

await it('student CAN update own targetScore (regression: null-safe immutability)', () =>
  assertSucceeds(setDoc(doc(studentA, 'users', 'studentA'), { targetScore: 700 }, { merge: true })));

await it('student CANNOT read another student doc', () =>
  assertFails(getDoc(doc(studentA, 'users', 'studentB'))));

await it('principal CAN read same-school student doc', () =>
  assertSucceeds(getDoc(doc(principal, 'users', 'studentB'))));

await it('principal CAN read same-school student progress', () =>
  assertSucceeds(getDoc(doc(principal, 'progress', 'studentB'))));

await env.cleanup();
console.log(`\n${passed} passed, ${failed} failed`);
assert.strictEqual(failed, 0, `${failed} rules test(s) failed`);
