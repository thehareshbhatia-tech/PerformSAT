/**
 * One-off admin tool: remove a single practice-test attempt from a student's
 * progress doc (e.g. a junk retake). Mirrors the client removeTestAttempt logic
 * (recompute best/total from survivors, drop the row if empty, re-point the
 * study plan if it was built from the removed attempt) but runs with admin
 * rights so it can edit another user's doc (Firestore rules block that client-
 * side).
 *
 * SAFE BY DEFAULT: with no --apply it only READS and prints. It never deletes
 * unless you pass BOTH --apply AND the exact --attempt <attemptId> to remove.
 *
 * Usage:
 *   # 1) Dry-run: see the student's attempts for a test
 *   node scripts/removeStudentAttempt.mjs --email student@example.com
 *   node scripts/removeStudentAttempt.mjs --uid <uid> --test practice-test-4
 *
 *   # 2) Apply: remove ONE attempt by its attemptId (from the dry-run output)
 *   node scripts/removeStudentAttempt.mjs --email student@example.com \
 *     --test practice-test-4 --attempt <attemptId> --apply
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const KEY_PATH = path.join(__dirname, 'serviceAccountKey.json');

// ---- args ----
const args = process.argv.slice(2);
const getArg = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : null;
};
const email = getArg('email');
const uidArg = getArg('uid');
const testId = getArg('test') || 'practice-test-4';
const attemptId = getArg('attempt');
const apply = args.includes('--apply');

if (!email && !uidArg) {
  console.error('ERROR: pass --email <email> or --uid <uid>');
  process.exit(1);
}

const serviceAccount = JSON.parse(readFileSync(KEY_PATH, 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();
const auth = getAuth();

const fmt = (a, i) => `  [${i}] attemptId=${a?.attemptId ?? '(none)'} | scaled=${a?.scaledScore ?? '—'} | raw=${a?.rawScore ?? '—'} | multi=${!!a?.isMultiSection} | completedAt=${a?.completedAt ?? '—'}`;

(async () => {
  const uid = uidArg || (await auth.getUserByEmail(email)).uid;
  console.log(`\nStudent uid: ${uid}${email ? ` (${email})` : ''}`);

  const ref = db.doc(`progress/${uid}`);
  const snap = await ref.get();
  if (!snap.exists) { console.error('No progress doc for this user.'); process.exit(1); }
  const data = snap.data();
  const row = data.practiceTestResults?.[testId];

  if (!row || !Array.isArray(row.attempts)) {
    console.error(`No attempts found for ${testId}.`);
    process.exit(1);
  }

  console.log(`\n=== ${testId} — current state ===`);
  console.log(`bestScaledScore=${row.bestScaledScore} | bestRawScore=${row.bestRawScore} | totalAttempts=${row.totalAttempts} | isMultiSection=${row.isMultiSection}`);
  console.log(`currentStudyPlanArtifactId=${data.currentStudyPlanArtifactId ?? '(none)'}`);
  console.log('attempts:');
  row.attempts.forEach((a, i) => console.log(fmt(a, i)));

  if (!apply) {
    console.log('\nDRY RUN — nothing changed. To remove one, re-run with:');
    console.log(`  --attempt <attemptId> --apply\n`);
    process.exit(0);
  }

  if (!attemptId) {
    console.error('\nREFUSING to apply without --attempt <attemptId>. Pick the exact attempt from the list above.');
    process.exit(1);
  }

  const target = row.attempts.find((a) => a?.attemptId === attemptId);
  if (!target) {
    console.error(`\nattemptId ${attemptId} not found in ${testId}. Aborting.`);
    process.exit(1);
  }

  const remaining = row.attempts.filter((a) => a?.attemptId !== attemptId);
  const updates = { lastUpdated: FieldValue.serverTimestamp() };

  if (remaining.length === 0) {
    updates[`practiceTestResults.${testId}`] = FieldValue.delete();
  } else {
    const finiteScaled = remaining.map((a) => a.scaledScore).filter((v) => typeof v === 'number' && Number.isFinite(v));
    const finiteRaw = remaining.map((a) => a.rawScore).filter((v) => typeof v === 'number' && Number.isFinite(v));
    const newest = [...remaining].sort((a, b) => new Date(b.completedAt || 0) - new Date(a.completedAt || 0))[0];
    updates[`practiceTestResults.${testId}.attempts`] = remaining;
    updates[`practiceTestResults.${testId}.bestScaledScore`] = finiteScaled.length ? Math.max(...finiteScaled) : 0;
    updates[`practiceTestResults.${testId}.bestRawScore`] = finiteRaw.length ? Math.max(...finiteRaw) : 0;
    updates[`practiceTestResults.${testId}.totalAttempts`] = remaining.length;
    updates[`practiceTestResults.${testId}.isMultiSection`] = !!newest?.isMultiSection;
  }

  // Re-point the study plan if the current artifact was built from this attempt.
  if (data.currentStudyPlanArtifactId) {
    const curRef = db.doc(`progress/${uid}/studyPlanArtifacts/${data.currentStudyPlanArtifactId}`);
    const curSnap = await curRef.get();
    if (curSnap.exists && (curSnap.data()?.linkage?.attemptId ?? null) === attemptId) {
      const arts = await db.collection(`progress/${uid}/studyPlanArtifacts`).orderBy('createdAt', 'desc').limit(50).get();
      const survivor = arts.docs.find((d) => (d.data()?.linkage?.attemptId ?? null) !== attemptId);
      updates.currentStudyPlanArtifactId = survivor ? survivor.id : null;
      updates.studyPlan = null;
      console.log(`\nStudy plan re-pointed: ${data.currentStudyPlanArtifactId} -> ${survivor ? survivor.id : 'null'}`);
    }
  }

  console.log(`\nRemoving attempt ${attemptId} (scaled=${target.scaledScore}) from ${testId}...`);
  await ref.update(updates);

  const after = (await ref.get()).data().practiceTestResults?.[testId];
  console.log('\n=== after ===');
  if (!after) {
    console.log(`${testId} row fully removed (was the last attempt).`);
  } else {
    console.log(`bestScaledScore=${after.bestScaledScore} | totalAttempts=${after.totalAttempts}`);
    (after.attempts || []).forEach((a, i) => console.log(fmt(a, i)));
  }
  console.log('\nDone.\n');
  process.exit(0);
})().catch((e) => { console.error('FAILED:', e.message); process.exit(1); });
