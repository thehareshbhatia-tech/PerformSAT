/**
 * setupTests.js — Jest setup, picked up automatically by react-scripts.
 *
 * Polyfills the WHATWG globals that Firebase's `auth` package needs at
 * import time (transitively via `undici`): TextEncoder, TextDecoder,
 * ReadableStream, WritableStream, TransformStream. Without these, ANY
 * test that touches a module which imports `firebase/auth` throws at
 * import — which is what the `diagnosticNarrativeContract` test hit
 * (`ReferenceError: TextEncoder/ReadableStream is not defined`).
 *
 * jsdom doesn't ship these; Node 18+ does, in `util` and `stream/web`.
 *
 * Lives at `src/setupTests.js` — CRA's auto-discovered path. No
 * `jest.config.*` wiring needed.
 *
 * Note: polyfills are NOT a substitute for mocking `src/firebase/config.js`.
 * That module calls `getAuth(app)` at module load with whatever API key is
 * in `process.env.REACT_APP_FIREBASE_API_KEY` — under Jest there's no
 * .env.local so initialization throws (`auth/invalid-api-key`). If your
 * test transitively imports `firebase/config`, add a per-file mock at the
 * TOP of the file (BEFORE the import that pulls firebase/config in):
 *
 *     jest.mock('../../../firebase/config', () => ({
 *       auth: {}, db: {}, default: {},
 *     }));
 *
 * Adjust the relative path to match your test file's depth. Adopting a
 * global `jest.mock(...)` here would silently break tests that DO need
 * Firebase, so we keep the mock per-file by convention.
 */
const { TextEncoder, TextDecoder } = require('util');
const { ReadableStream, WritableStream, TransformStream } = require('stream/web');

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}
if (typeof global.ReadableStream === 'undefined') {
  global.ReadableStream = ReadableStream;
}
if (typeof global.WritableStream === 'undefined') {
  global.WritableStream = WritableStream;
}
if (typeof global.TransformStream === 'undefined') {
  global.TransformStream = TransformStream;
}
