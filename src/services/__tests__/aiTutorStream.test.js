import { parseSSEEvents } from '../sseParse';

/**
 * Pins the streaming-proxy SSE parser used by chatWithTutor. The parser must
 * extract complete `data: {...}` events from an incrementally-growing buffer
 * and hold any trailing partial event in `rest` until the next chunk arrives —
 * otherwise tokens are dropped or JSON.parse throws mid-stream.
 */
describe('parseSSEEvents', () => {
  it('parses multiple complete chunk events', () => {
    const buf = 'data: {"type":"chunk","text":"Hello"}\n\ndata: {"type":"chunk","text":" world"}\n\n';
    const { events, rest } = parseSSEEvents(buf);
    expect(events).toEqual([
      { type: 'chunk', text: 'Hello' },
      { type: 'chunk', text: ' world' },
    ]);
    expect(rest).toBe('');
  });

  it('holds a trailing partial event in rest', () => {
    const buf = 'data: {"type":"chunk","text":"Hi"}\n\ndata: {"type":"ch';
    const { events, rest } = parseSSEEvents(buf);
    expect(events).toEqual([{ type: 'chunk', text: 'Hi' }]);
    expect(rest).toBe('data: {"type":"ch');
  });

  it('reassembles a split event across two buffer reads', () => {
    let buf = 'data: {"type":"chunk","te';
    let r1 = parseSSEEvents(buf);
    expect(r1.events).toEqual([]);
    buf = r1.rest + 'xt":"done"}\n\n';
    let r2 = parseSSEEvents(buf);
    expect(r2.events).toEqual([{ type: 'chunk', text: 'done' }]);
    expect(r2.rest).toBe('');
  });

  it('skips [DONE] sentinels and non-data lines, parses done/error events', () => {
    const buf = 'event: ping\ndata: [DONE]\n\ndata: {"type":"done","stop_reason":"end_turn"}\n\ndata: {"type":"error","message":"boom"}\n\n';
    const { events } = parseSSEEvents(buf);
    expect(events).toEqual([
      { type: 'done', stop_reason: 'end_turn' },
      { type: 'error', message: 'boom' },
    ]);
  });

  it('skips garbled JSON without throwing', () => {
    const buf = 'data: {not valid json}\n\ndata: {"type":"chunk","text":"ok"}\n\n';
    const { events } = parseSSEEvents(buf);
    expect(events).toEqual([{ type: 'chunk', text: 'ok' }]);
  });
});
