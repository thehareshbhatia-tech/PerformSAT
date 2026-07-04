/**
 * Admin tool: create / inspect a promo code (promoCodes/{CODE}) that
 * redeemPromoCode grants permanent free ("comped") access for.
 *
 * SAFE: creates the code only if it doesn't already exist. If it exists, it
 * PRINTS the current state and does nothing (never resets the redemptions
 * counter) unless you pass --set to update active/maxRedemptions/note (still
 * never touches redemptions). Codes are stored uppercased.
 *
 * Usage:
 *   # inspect (or create with 50-use cap)
 *   node scripts/seedPromoCode.mjs --code HARESHRAJBHATIA1 --max 50 --note "Founder comp"
 *   # disable a code
 *   node scripts/seedPromoCode.mjs --code HARESHRAJBHATIA1 --set --active false
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
const rawCode = arg('code');
const code = rawCode ? rawCode.trim().toUpperCase() : null;
const maxArg = arg('max');
const note = arg('note');
const activeArg = arg('active');
const doSet = args.includes('--set');

if (!code || !/^[A-Z0-9]{1,64}$/.test(code)) {
  console.error('Pass --code <ALPHANUMERIC> (letters/digits only).');
  process.exit(1);
}

const ref = db.doc(`promoCodes/${code}`);
const show = (d) => `active=${d.active} | kind=${d.kind} | maxRedemptions=${d.maxRedemptions ?? 'unlimited'} | redemptions=${d.redemptions ?? 0} | note=${d.note ?? ''}`;

(async () => {
  const snap = await ref.get();

  if (snap.exists && !doSet) {
    console.log(`\npromoCodes/${code} already exists:`);
    console.log('  ' + show(snap.data()));
    console.log('\n(no change. Pass --set to update active/max/note — the redemptions counter is never reset.)\n');
    process.exit(0);
  }

  if (snap.exists && doSet) {
    const patch = { updatedAt: FieldValue.serverTimestamp() };
    if (maxArg != null) patch.maxRedemptions = maxArg === 'null' ? null : Number(maxArg);
    if (note != null) patch.note = note;
    if (activeArg != null) patch.active = activeArg === 'true';
    await ref.set(patch, { merge: true });
    console.log(`\nUpdated promoCodes/${code}:`);
    console.log('  ' + show((await ref.get()).data()));
    console.log('');
    process.exit(0);
  }

  // Create fresh.
  const doc = {
    code,
    kind: 'comped',
    active: activeArg != null ? activeArg === 'true' : true,
    maxRedemptions: maxArg != null ? (maxArg === 'null' ? null : Number(maxArg)) : null,
    redemptions: 0,
    note: note ?? '',
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  };
  await ref.set(doc);
  console.log(`\nCreated promoCodes/${code}:`);
  console.log('  ' + show(doc));
  console.log('');
  process.exit(0);
})().catch((e) => { console.error('FAILED:', e.message); process.exit(1); });
