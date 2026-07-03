/**
 * Tutor inline-graph spec: parse + extract.
 *
 * The AI tutor can draw a real SAT-style graph inside a chat reply by emitting a
 * fenced ```seva-graph``` block whose body is JSON of the exact shape the existing
 * `QuestionDiagram` dispatcher already accepts: `{ type, params }`. That means the
 * model's JSON maps 1:1 onto the production graph library (src/components/graphs/)
 * with no adaptation layer — parse it, hand it to `<QuestionDiagram />`.
 *
 * This module is PURE (no React, no DOM) so it can be unit-tested in isolation and
 * reused by the streaming render path. The renderer (renderChatMarkdown) calls
 * `extractGraphSpec` to pull the (first, valid) graph out of a message and strip
 * every graph block from the surrounding prose, so raw JSON is never shown — not
 * while streaming (unclosed block), not on malformed JSON, not on extras.
 */

// The fenced-block language tag. The model cannot accidentally collide with this
// because it is instructed to use exactly ```seva-graph.
export const GRAPH_FENCE_LANG = 'seva-graph';

const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
const isRange = (r) => Array.isArray(r) ? (r.length === 2 && isNum(r[0]) && isNum(r[1])) : r === undefined; // optional
const isPointArr = (pts) =>
  Array.isArray(pts) && pts.length > 0 &&
  pts.every((p) => Array.isArray(p) && p.length >= 2 && isNum(p[0]) && isNum(p[1]));

/**
 * Per-type param validators. A `type` is only supported if it appears here, so an
 * unknown or unsupported graph type parses to null and degrades to prose. Each
 * validator checks only the fields the underlying component needs to render safely
 * (the QuestionDiagram dispatcher + component defaults handle the rest); the
 * TutorGraph error boundary is the final backstop for anything that still throws.
 */
export const GRAPH_TYPE_VALIDATORS = {
  // SATLinearGraph — a single line y = mx + b.
  linearGraph: (p) => isNum(p.slope) && isNum(p.yIntercept) && isRange(p.xRange) && isRange(p.yRange),
  // SATTwoLineGraph — two lines and their intersection (systems of equations).
  twoLineGraph: (p) =>
    p.intersection && isNum(p.intersection.x) && isNum(p.intersection.y) &&
    isNum(p.slope1) && isNum(p.slope2) && p.slope1 !== p.slope2 &&
    isRange(p.xRange) && isRange(p.yRange),
  // SATParabola — a quadratic in vertex form y = a(x - h)^2 + k.
  parabola: (p) =>
    p.vertex && isNum(p.vertex.h) && isNum(p.vertex.k) && isNum(p.a) && p.a !== 0 &&
    isRange(p.xRange) && isRange(p.yRange),
  // ScatterplotDiagram — data points, optional best-fit line.
  scatterplot: (p) => isPointArr(p.points),
};

/**
 * Parse the JSON body of a seva-graph block into a validated `{ type, params }`.
 *
 * @param {string} jsonStr - the raw text between the fences
 * @returns {{type: string, params: object} | null} a validated spec, or null if the
 *   JSON is malformed, the type is unsupported, or the params are invalid. Null
 *   ALWAYS means "render no graph, fall back to prose" — it never throws.
 */
export function parseGraphSpec(jsonStr) {
  if (typeof jsonStr !== 'string' || !jsonStr.trim()) return null;
  let obj;
  try {
    obj = JSON.parse(jsonStr.trim());
  } catch {
    return null;
  }
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return null;
  const { type, params } = obj;
  if (typeof type !== 'string') return null;
  const validate = GRAPH_TYPE_VALIDATORS[type];
  if (!validate) return null;
  if (!params || typeof params !== 'object' || Array.isArray(params)) return null;
  try {
    if (!validate(params)) return null;
  } catch {
    return null;
  }
  return { type, params };
}

// A complete, CLOSED seva-graph block: opening fence line, body, closing fence.
// Non-greedy body stops at the first closing ``` (JSON never contains a ``` run).
const CLOSED_BLOCK_RE = /```[ \t]*seva-graph\b[^\n]*\n([\s\S]*?)```/;
// An opening seva-graph fence anywhere (used to detect a still-streaming, not yet
// closed block so its partial JSON tail can be hidden instead of dumped raw).
const OPEN_FENCE_RE = /```[ \t]*seva-graph\b/;
// Global variants for stripping every block from a prose region.
const CLOSED_BLOCK_RE_G = /```[ \t]*seva-graph\b[^\n]*\n[\s\S]*?```/g;

/**
 * Remove every seva-graph block from a prose region so no raw JSON survives:
 * strips all CLOSED blocks, then truncates a trailing UNCLOSED (streaming) block.
 */
function stripGraphBlocks(s) {
  let out = s.replace(CLOSED_BLOCK_RE_G, '');
  const open = OPEN_FENCE_RE.exec(out);
  if (open) out = out.slice(0, open.index);
  return out;
}

/**
 * Split a chat message into the prose around its (first) graph and the graph spec.
 *
 * Robustness contract (this is what makes streaming + bad output safe):
 *   - STREAMING: while the closing fence has not arrived, there is no closed block;
 *     the partial block is stripped from `before` so its raw JSON is never shown.
 *     Once the fence closes on a later render, the graph appears.
 *   - MALFORMED / UNSUPPORTED: a closed block whose JSON fails to parse (or is an
 *     unsupported type) yields spec=null but is still stripped from the prose.
 *   - EXTRAS: only the FIRST valid block is returned; any additional graph blocks
 *     are stripped from `after` so they don't dump JSON either.
 *
 * @param {string} text - the full assistant message
 * @returns {{spec: ({type,params}|null), before: string, after: string}}
 */
export function extractGraphSpec(text) {
  if (typeof text !== 'string' || !text) {
    return { spec: null, before: text || '', after: '' };
  }

  const m = CLOSED_BLOCK_RE.exec(text);
  if (!m) {
    // No closed block. If a block is mid-stream (opened, not yet closed), hide its
    // partial tail so raw JSON never flashes; otherwise the whole text is prose.
    const open = OPEN_FENCE_RE.exec(text);
    if (open) return { spec: null, before: text.slice(0, open.index), after: '' };
    return { spec: null, before: text, after: '' };
  }

  const before = text.slice(0, m.index);
  const after = stripGraphBlocks(text.slice(m.index + m[0].length));
  const spec = parseGraphSpec(m[1]);
  return { spec, before, after };
}
