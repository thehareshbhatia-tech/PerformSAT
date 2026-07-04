/**
 * GUARD TEST — the Firestore instance must keep ignoreUndefinedProperties on.
 *
 * Without it, ANY undefined field value makes the whole write throw, which on a
 * critical path is silent data loss (a completed test that never saves). This
 * is a source-level assertion (no Firebase init) so it can't be flaky and can't
 * be quietly reverted. Pairs with the nested-array guard in
 * src/data/__tests__/firestoreSnapshotSafety.test.js.
 */

const fs = require('fs');
const path = require('path');

const configSource = fs.readFileSync(
  path.join(__dirname, '..', 'config.js'),
  'utf8'
);

describe('firebase/config.js hardening', () => {
  test('uses initializeFirestore with ignoreUndefinedProperties: true', () => {
    expect(configSource).toMatch(/initializeFirestore\s*\(\s*app\s*,\s*\{[^}]*ignoreUndefinedProperties:\s*true/s);
  });

  test('does NOT fall back to a bare getFirestore(app) (which would drop the setting)', () => {
    expect(configSource).not.toMatch(/=\s*getFirestore\s*\(\s*app\s*\)/);
  });
});
