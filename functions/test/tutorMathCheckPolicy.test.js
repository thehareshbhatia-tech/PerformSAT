/**
 * Tests for the tutorMathCheck response parser. Runs against the compiled
 * output with Node's built-in test runner — zero extra deps. Run with:
 * npm test (which builds first).
 */
const test = require("node:test");
const assert = require("node:assert");
const {parseMathCheckResult} = require("../lib/tutorMathCheckPolicy");

// ── valid ok ────────────────────────────────────────────────────────────

test("parses a clean {ok:true}", () => {
  assert.deepStrictEqual(parseMathCheckResult("{\"ok\": true}"), {ok: true});
});

// ── valid not-ok ──────────────────────────────────────────────────────────

test("parses {ok:false, correction} into a flagged result", () => {
  const raw = "{\"ok\": false, \"correction\": \"The slope is 2, not 3.\"}";
  assert.deepStrictEqual(parseMathCheckResult(raw), {
    ok: false,
    correction: "The slope is 2, not 3.",
  });
});

test("trims surrounding whitespace in the correction", () => {
  const raw = "{\"ok\": false, \"correction\": \"  x = 5.  \"}";
  assert.deepStrictEqual(parseMathCheckResult(raw), {ok: false, correction: "x = 5."});
});

// ── fenced JSON ───────────────────────────────────────────────────────────

test("strips ```json fences", () => {
  const raw = "```json\n{\"ok\": true}\n```";
  assert.deepStrictEqual(parseMathCheckResult(raw), {ok: true});
});

test("strips bare ``` fences and parses not-ok", () => {
  const raw = "```\n{\"ok\": false, \"correction\": \"Choice B is correct, not C.\"}\n```";
  assert.deepStrictEqual(parseMathCheckResult(raw), {
    ok: false,
    correction: "Choice B is correct, not C.",
  });
});

test("tolerates surrounding prose around the JSON", () => {
  const raw = "Here is my verdict: {\"ok\": true} — done.";
  assert.deepStrictEqual(parseMathCheckResult(raw), {ok: true});
});

// ── garbage → ok:true (fail-open) ─────────────────────────────────────────

test("garbage text fails open to ok:true", () => {
  assert.deepStrictEqual(parseMathCheckResult("lol what"), {ok: true});
});

test("empty string fails open", () => {
  assert.deepStrictEqual(parseMathCheckResult(""), {ok: true});
});

test("malformed JSON fails open", () => {
  assert.deepStrictEqual(parseMathCheckResult("{\"ok\": false, \"corr"), {ok: true});
});

test("non-string input fails open", () => {
  assert.deepStrictEqual(parseMathCheckResult(null), {ok: true});
  assert.deepStrictEqual(parseMathCheckResult(undefined), {ok: true});
  assert.deepStrictEqual(parseMathCheckResult(42), {ok: true});
  assert.deepStrictEqual(parseMathCheckResult({ok: false}), {ok: true});
});

test("JSON array (not object) fails open", () => {
  assert.deepStrictEqual(parseMathCheckResult("[1,2,3]"), {ok: true});
});

// ── ok:false without a usable correction → ok:true ────────────────────────

test("ok:false with no correction field fails open", () => {
  assert.deepStrictEqual(parseMathCheckResult("{\"ok\": false}"), {ok: true});
});

test("ok:false with empty correction fails open", () => {
  assert.deepStrictEqual(parseMathCheckResult("{\"ok\": false, \"correction\": \"\"}"), {ok: true});
});

test("ok:false with whitespace-only correction fails open", () => {
  assert.deepStrictEqual(parseMathCheckResult("{\"ok\": false, \"correction\": \"   \"}"), {ok: true});
});

test("ok:false with non-string correction fails open", () => {
  assert.deepStrictEqual(parseMathCheckResult("{\"ok\": false, \"correction\": 123}"), {ok: true});
});

// ── ok non-boolean → ok:true ──────────────────────────────────────────────

test("ok as a non-boolean fails open", () => {
  assert.deepStrictEqual(parseMathCheckResult("{\"ok\": \"true\"}"), {ok: true});
  assert.deepStrictEqual(parseMathCheckResult("{\"ok\": 1}"), {ok: true});
  assert.deepStrictEqual(parseMathCheckResult("{}"), {ok: true});
});
