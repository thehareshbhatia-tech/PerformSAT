/**
 * Admin tool: create / inspect / toggle a creator referral slug
 * (creatorRefs/{slug}) — the server-write-only allowlist behind
 * sevaprep.com/r/<slug> landing links. createCheckoutSession only honors a
 * ?ref= (metadata attribution + auto audience discount) when the slug doc
 * exists with active:true, so a guessed ref can never self-discount.
 *
 * SAFE: creates only if missing; existing docs print state and are only
 * changed with --set.
 *
 * Usage:
 *   node scripts/seedCreatorRef.mjs --slug bella --note "Ambassador — Bella"
 *   node scripts/seedCreatorRef.mjs --slug bella --set --active false
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const key = JSON.parse(readFileSync(path.join(__dirname, 'serviceAccountKey.json'), 'utf8'));
initializeApp({ credential: cert(key) });
const db = getFirestore();

const args = process.argv.slice(2);
const arg = (n) => { const i = args.indexOf(`--${n}`); return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : null; };
const raw = arg('slug');
const slug = raw ? raw.trim().toLowerCase() : null;
const note = arg('note');
const activeArg = arg('active');
const doSet = args.includes('--set');

if (!slug || !/^[a-z0-9][a-z0-9-]{0,31}$/.test(slug)) {
  console.error('Pass --slug <lowercase-kebab, 1-32 chars, starts alphanumeric>.');
  process.exit(1);
}

const ref = db.doc(`creatorRefs/${slug}`);
const show = (d) => `active=${d.active} | note=${d.note ?? ''}`;

(async () => {
  const snap = await ref.get();

  if (snap.exists && !doSet) {
    console.log(`\ncreatorRefs/${slug} already exists:\n  ${show(snap.data())}`);
    console.log('(no change. Pass --set to update active/note.)\n');
    process.exit(0);
  }

  if (snap.exists && doSet) {
    const patch = { updatedAt: FieldValue.serverTimestamp() };
    if (note != null) patch.note = note;
    if (activeArg != null) patch.active = activeArg === 'true';
    await ref.set(patch, { merge: true });
    console.log(`\nUpdated creatorRefs/${slug}:\n  ${show((await ref.get()).data())}\n`);
    process.exit(0);
  }

  await ref.set({
    slug,
    active: activeArg != null ? activeArg === 'true' : true,
    note: note ?? '',
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });
  console.log(`\nCreated creatorRefs/${slug} — link: https://sevaprep.com/r/${slug}\n`);
  process.exit(0);
})().catch((e) => { console.error('FAILED:', e.message); process.exit(1); });
