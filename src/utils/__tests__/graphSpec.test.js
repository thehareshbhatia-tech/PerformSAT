/**
 * Unit tests for the tutor inline-graph spec parser/extractor (pure logic).
 *
 * Covers the robustness contract the chat renderer relies on:
 *   - a valid ```seva-graph``` block parses to { type, params }
 *   - malformed JSON, unsupported types, and bad params all return null
 *   - a partial/unclosed block (mid-stream) returns no spec and hides its tail
 *   - the graph block is stripped cleanly from the surrounding prose
 */
import { parseGraphSpec, extractGraphSpec, GRAPH_TYPE_VALIDATORS } from '../graphSpec';

const wrap = (json) => '```seva-graph\n' + json + '\n```';

describe('parseGraphSpec', () => {
  test('parses a valid twoLineGraph spec', () => {
    const json = JSON.stringify({
      type: 'twoLineGraph',
      params: { intersection: { x: 2, y: 3 }, slope1: 1, slope2: -1, xRange: [-6, 6], yRange: [-6, 6] },
    });
    const spec = parseGraphSpec(json);
    expect(spec).not.toBeNull();
    expect(spec.type).toBe('twoLineGraph');
    expect(spec.params.intersection).toEqual({ x: 2, y: 3 });
  });

  test('parses a valid linearGraph spec', () => {
    const spec = parseGraphSpec(JSON.stringify({ type: 'linearGraph', params: { slope: 2, yIntercept: -4 } }));
    expect(spec).toEqual({ type: 'linearGraph', params: { slope: 2, yIntercept: -4 } });
  });

  test('parses a valid parabola spec', () => {
    const spec = parseGraphSpec(JSON.stringify({ type: 'parabola', params: { vertex: { h: 1, k: -2 }, a: 0.5 } }));
    expect(spec).not.toBeNull();
    expect(spec.type).toBe('parabola');
  });

  test('parses a valid scatterplot spec', () => {
    const spec = parseGraphSpec(JSON.stringify({ type: 'scatterplot', params: { points: [[1, 2], [3, 4]] } }));
    expect(spec).not.toBeNull();
    expect(spec.params.points).toHaveLength(2);
  });

  test('returns null on malformed JSON', () => {
    expect(parseGraphSpec('{ not json }')).toBeNull();
    expect(parseGraphSpec('{ "type": "linearGraph", }')).toBeNull();
    expect(parseGraphSpec('')).toBeNull();
    expect(parseGraphSpec('   ')).toBeNull();
    expect(parseGraphSpec(null)).toBeNull();
  });

  test('returns null for an unsupported graph type', () => {
    expect(parseGraphSpec(JSON.stringify({ type: 'pieChart', params: { slices: [1, 2] } }))).toBeNull();
    expect(parseGraphSpec(JSON.stringify({ type: 'numberLine', params: { points: [1] } }))).toBeNull();
  });

  test('returns null when required params are missing or invalid', () => {
    // linearGraph missing yIntercept
    expect(parseGraphSpec(JSON.stringify({ type: 'linearGraph', params: { slope: 2 } }))).toBeNull();
    // parabola missing vertex
    expect(parseGraphSpec(JSON.stringify({ type: 'parabola', params: { a: 1 } }))).toBeNull();
    // parabola a === 0 (degenerate)
    expect(parseGraphSpec(JSON.stringify({ type: 'parabola', params: { vertex: { h: 0, k: 0 }, a: 0 } }))).toBeNull();
    // twoLineGraph parallel lines (equal slopes) can't intersect
    expect(parseGraphSpec(JSON.stringify({
      type: 'twoLineGraph', params: { intersection: { x: 0, y: 0 }, slope1: 2, slope2: 2 },
    }))).toBeNull();
    // scatterplot empty / malformed points
    expect(parseGraphSpec(JSON.stringify({ type: 'scatterplot', params: { points: [] } }))).toBeNull();
    expect(parseGraphSpec(JSON.stringify({ type: 'scatterplot', params: { points: [[1]] } }))).toBeNull();
    // non-finite numbers
    expect(parseGraphSpec('{ "type": "linearGraph", "params": { "slope": 1, "yIntercept": null } }')).toBeNull();
  });

  test('returns null when params is missing or not an object', () => {
    expect(parseGraphSpec(JSON.stringify({ type: 'linearGraph' }))).toBeNull();
    expect(parseGraphSpec(JSON.stringify({ type: 'linearGraph', params: [1, 2] }))).toBeNull();
    expect(parseGraphSpec(JSON.stringify(['linearGraph']))).toBeNull();
  });

  test('every advertised type has a validator', () => {
    ['linearGraph', 'twoLineGraph', 'parabola', 'scatterplot'].forEach((t) => {
      expect(typeof GRAPH_TYPE_VALIDATORS[t]).toBe('function');
    });
  });
});

describe('extractGraphSpec', () => {
  test('extracts a valid block and strips it from the surrounding prose', () => {
    const before = 'Here is where the two lines cross:';
    const after = 'As you can see, they meet at (2, 3).';
    const text = `${before}\n\n${wrap(JSON.stringify({
      type: 'twoLineGraph',
      params: { intersection: { x: 2, y: 3 }, slope1: 1, slope2: -1 },
    }))}\n\n${after}`;

    const res = extractGraphSpec(text);
    expect(res.spec).not.toBeNull();
    expect(res.spec.type).toBe('twoLineGraph');
    // Prose survives; the raw block does not.
    expect(res.before).toContain(before);
    expect(res.after).toContain(after);
    expect(res.before).not.toContain('seva-graph');
    expect(res.after).not.toContain('seva-graph');
    expect(res.before + res.after).not.toContain('intersection');
  });

  test('a partial/unclosed block (still streaming) returns no spec and hides the tail', () => {
    const text = 'Let me draw that for you:\n\n```seva-graph\n{ "type": "parabola", "para';
    const res = extractGraphSpec(text);
    expect(res.spec).toBeNull();
    // The prose before the fence is kept...
    expect(res.before).toContain('Let me draw that for you');
    // ...but the partial JSON is NOT exposed.
    expect(res.before).not.toContain('seva-graph');
    expect(res.before).not.toContain('parabola');
    expect(res.after).toBe('');
  });

  test('a malformed closed block yields no spec but is stripped from prose', () => {
    const text = `Intro line.\n\n\`\`\`seva-graph\n{ this is not valid json }\n\`\`\`\n\nOutro line.`;
    const res = extractGraphSpec(text);
    expect(res.spec).toBeNull();
    expect(res.before).toContain('Intro line');
    expect(res.after).toContain('Outro line');
    expect(res.before + res.after).not.toContain('seva-graph');
    expect(res.before + res.after).not.toContain('not valid json');
  });

  test('an unsupported-type closed block is stripped and yields no spec', () => {
    const text = `A.\n\n${wrap(JSON.stringify({ type: 'pieChart', params: {} }))}\n\nB.`;
    const res = extractGraphSpec(text);
    expect(res.spec).toBeNull();
    expect(res.before).toContain('A.');
    expect(res.after).toContain('B.');
    expect(res.after).not.toContain('pieChart');
  });

  test('plain text with no block is returned unchanged as before', () => {
    const text = 'Just a normal explanation with no graph. The answer is C.';
    const res = extractGraphSpec(text);
    expect(res.spec).toBeNull();
    expect(res.before).toBe(text);
    expect(res.after).toBe('');
  });

  test('only the first valid graph is returned; extras are stripped from after', () => {
    const first = wrap(JSON.stringify({ type: 'linearGraph', params: { slope: 1, yIntercept: 0 } }));
    const second = wrap(JSON.stringify({ type: 'parabola', params: { vertex: { h: 0, k: 0 }, a: 1 } }));
    const text = `One:\n${first}\nTwo:\n${second}\nEnd.`;
    const res = extractGraphSpec(text);
    expect(res.spec).not.toBeNull();
    expect(res.spec.type).toBe('linearGraph');
    // The second block must not leak raw JSON into the prose.
    expect(res.after).not.toContain('seva-graph');
    expect(res.after).not.toContain('parabola');
    expect(res.after).toContain('End.');
  });

  test('a block with no surrounding prose returns empty before/after', () => {
    const text = wrap(JSON.stringify({ type: 'linearGraph', params: { slope: 2, yIntercept: 1 } }));
    const res = extractGraphSpec(text);
    expect(res.spec).not.toBeNull();
    expect(res.before).toBe('');
    expect(res.after.trim()).toBe('');
  });

  test('handles empty/nullish input safely', () => {
    expect(extractGraphSpec('')).toEqual({ spec: null, before: '', after: '' });
    expect(extractGraphSpec(null)).toEqual({ spec: null, before: '', after: '' });
    expect(extractGraphSpec(undefined)).toEqual({ spec: null, before: '', after: '' });
  });
});
