/**
 * Pins chatWithTutor's transport contract with the aiTutor streaming proxy:
 *  - the history window is capped (server 400s at >100 messages),
 *  - mid-stream `error` frames abort the stream and fall back to buffered,
 *  - `done`/buffered `stop_reason === 'max_tokens'` appends the honest
 *    length-limit note instead of presenting a half-answer as complete,
 *  - quickAnswer explicitly opts out of streaming (the server default),
 *  - a deliberate AbortError is rethrown without a buffered retry.
 */
jest.mock('../authFetch', () => ({ authFetch: jest.fn() }));
// The knowledge base pulls in the full lesson corpus — irrelevant here.
jest.mock('../../data/knowledgeBase', () => ({
  getLessonContext: jest.fn(),
  searchKnowledge: jest.fn(),
  getRelevantStrategyContext: jest.fn(),
}));

import { chatWithTutor, quickAnswer, checkTutorMath } from '../aiTutorService';
import { authFetch } from '../authFetch';
import { getLessonContext, searchKnowledge, getRelevantStrategyContext } from '../../data/knowledgeBase';

// CRA's jest config sets resetMocks: true, so implementations are reinstalled per test.
beforeEach(() => {
  getLessonContext.mockReturnValue(null);
  searchKnowledge.mockReturnValue([]);
  getRelevantStrategyContext.mockReturnValue(null);
});

const encoder = new TextEncoder();
const sseFrame = (obj) => `data: ${JSON.stringify(obj)}\n\n`;
const sseResponse = (frames) => {
  let i = 0;
  return {
    ok: true,
    body: {
      getReader: () => ({
        read: async () =>
          i < frames.length
            ? { done: false, value: encoder.encode(frames[i++]) }
            : { done: true, value: undefined },
      }),
    },
  };
};
const jsonResponse = (data) => ({ ok: true, json: async () => data });

const userTurns = (n) =>
  Array.from({ length: n }, (_, i) => ({ role: 'user', content: `m${i}` }));

const bodyOfCall = (n) => JSON.parse(authFetch.mock.calls[n][1].body);

describe('chatWithTutor transport contract', () => {
  beforeEach(() => {
    authFetch.mockReset();
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterEach(() => {
    console.warn.mockRestore();
    console.error.mockRestore();
  });

  it('caps the history sent to the proxy at the last 30 messages', async () => {
    authFetch.mockResolvedValueOnce(jsonResponse({ content: 'hi' }));
    const result = await chatWithTutor(userTurns(45), null, null, null);
    expect(result).toBe('hi');
    const body = bodyOfCall(0);
    expect(body.messages).toHaveLength(30);
    expect(body.messages[0].content).toBe('m15'); // last 30 of 45
    expect(body.messages[29].content).toBe('m44');
  });

  it('appends the length-limit note when the buffered reply hit max_tokens', async () => {
    authFetch.mockResolvedValueOnce(
      jsonResponse({ content: 'half an answer', stop_reason: 'max_tokens' })
    );
    const result = await chatWithTutor(userTurns(1), null, null, null);
    expect(result).toMatch(/^half an answer\n\n\*The explanation hit the length limit/);
  });

  it('appends the length-limit note when the stream ends with stop_reason max_tokens', async () => {
    authFetch.mockResolvedValueOnce(
      sseResponse([
        sseFrame({ type: 'chunk', text: 'Hello ' }),
        sseFrame({ type: 'chunk', text: 'world' }),
        sseFrame({ type: 'done', stop_reason: 'max_tokens', sawText: true }),
      ])
    );
    const chunks = [];
    const result = await chatWithTutor(
      userTurns(1), null, null, null,
      null, '', '', null, null, null, '', 'math',
      (t) => chunks.push(t)
    );
    expect(authFetch).toHaveBeenCalledTimes(1);
    expect(result).toMatch(/^Hello world\n\n\*The explanation hit the length limit/);
    expect(chunks[chunks.length - 1]).toBe(result); // marker streamed too
  });

  it('falls back to the buffered request when the stream emits an error frame', async () => {
    authFetch
      .mockResolvedValueOnce(
        sseResponse([
          sseFrame({ type: 'chunk', text: 'partial ' }),
          sseFrame({ type: 'error', message: 'upstream exploded' }),
        ])
      )
      .mockResolvedValueOnce(jsonResponse({ content: 'recovered full answer' }));
    const result = await chatWithTutor(
      userTurns(1), null, null, null,
      null, '', '', null, null, null, '', 'math',
      () => {}
    );
    expect(result).toBe('recovered full answer');
    expect(authFetch).toHaveBeenCalledTimes(2);
    expect(bodyOfCall(0).stream).toBe(true);
    expect(bodyOfCall(1).stream).toBe(false);
  });

  it('rethrows a deliberate AbortError without attempting the buffered fallback', async () => {
    authFetch.mockRejectedValueOnce(
      Object.assign(new Error('The user aborted a request.'), { name: 'AbortError' })
    );
    await expect(
      chatWithTutor(
        userTurns(1), null, null, null,
        null, '', '', null, null, null, '', 'math',
        () => {}
      )
    ).rejects.toMatchObject({ name: 'AbortError' });
    expect(authFetch).toHaveBeenCalledTimes(1); // no buffered retry
  });

  it('forwards the caller AbortSignal to the fetch options', async () => {
    authFetch.mockResolvedValueOnce(jsonResponse({ content: 'ok' }));
    const controller = new AbortController();
    await chatWithTutor(
      userTurns(1), null, null, null,
      null, '', '', null, null, null, '', 'math',
      null, controller.signal
    );
    expect(authFetch.mock.calls[0][1].signal).toBe(controller.signal);
  });
});

describe('chatWithTutor systemBlocks (prompt-cache v2)', () => {
  beforeEach(() => authFetch.mockReset());

  it('sends systemBlocks whose text concatenates to the legacy system string', async () => {
    authFetch.mockResolvedValueOnce(jsonResponse({ content: 'ok' }));
    await chatWithTutor(
      userTurns(1), null, null, null,
      null, 'PRACTICE-CTX', 'PROFILE-CTX', null, null, null, 'INTEL-CTX', 'math'
    );
    const body = bodyOfCall(0);
    expect(Array.isArray(body.systemBlocks)).toBe(true);
    // Contract: 1-4 blocks, at most 2 cached, no empty-text blocks.
    expect(body.systemBlocks.length).toBeGreaterThanOrEqual(1);
    expect(body.systemBlocks.length).toBeLessThanOrEqual(4);
    expect(body.systemBlocks.filter(b => b.cache).length).toBeLessThanOrEqual(2);
    body.systemBlocks.forEach(b => expect(b.text.length).toBeGreaterThan(0));
    // Round-trip equality: whichever path the server takes, content is identical.
    expect(body.systemBlocks.map(b => b.text).join('')).toBe(body.system);
  });

  it('splits stable context into a cached block and volatile context into a second block', async () => {
    authFetch.mockResolvedValueOnce(jsonResponse({ content: 'ok' }));
    await chatWithTutor(
      userTurns(1), null, null, null,
      null, 'PRACTICE-CTX', 'PROFILE-CTX', null, null, null, 'INTEL-CTX', 'math'
    );
    const body = bodyOfCall(0);
    expect(body.systemBlocks).toHaveLength(2);
    const [stable, volatile] = body.systemBlocks;
    expect(stable.cache).toBe(true);
    // Stable holds persona + profile + intelligence; volatile holds practice ctx.
    expect(stable.text).toContain('PROFILE-CTX');
    expect(stable.text).toContain('INTEL-CTX');
    expect(stable.text).not.toContain('PRACTICE-CTX');
    expect(volatile.cache).toBeFalsy();
    expect(volatile.text).toContain('PRACTICE-CTX');
  });

  it('omits the volatile block entirely when there is no turn-specific context', async () => {
    authFetch.mockResolvedValueOnce(jsonResponse({ content: 'ok' }));
    await chatWithTutor(userTurns(1), null, null, null);
    const body = bodyOfCall(0);
    expect(body.systemBlocks).toHaveLength(1);
    expect(body.systemBlocks[0].cache).toBe(true);
    expect(body.systemBlocks[0].text).toBe(body.system);
  });
});

describe('checkTutorMath (server math guardrail)', () => {
  const args = {
    reply: 'The answer is 12.',
    question: 'What is 3 times 4?',
    correctAnswer: '12',
    selectedAnswer: 'B',
    choices: [{ id: 'A', text: '7' }, { id: 'B', text: '12' }],
  };

  beforeEach(() => {
    authFetch.mockReset();
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });
  afterEach(() => {
    console.error.mockRestore();
    console.warn.mockRestore();
  });

  it('returns { ok: true } (fail-open) when the request rejects', async () => {
    authFetch.mockRejectedValueOnce(new Error('network down'));
    await expect(checkTutorMath(args)).resolves.toEqual({ ok: true });
  });

  it('returns { ok: true } on a non-200 response', async () => {
    authFetch.mockResolvedValueOnce({ ok: false, status: 429, json: async () => ({}) });
    await expect(checkTutorMath(args)).resolves.toEqual({ ok: true });
  });

  it('returns { ok: true } when the response body is malformed JSON', async () => {
    authFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => { throw new SyntaxError('Unexpected token'); },
    });
    await expect(checkTutorMath(args)).resolves.toEqual({ ok: true });
  });

  it('returns the correction on a proper { ok: false, correction } response', async () => {
    authFetch.mockResolvedValueOnce(
      jsonResponse({ ok: false, correction: 'You wrote x = 5, but the key is x = 6.' })
    );
    await expect(checkTutorMath(args)).resolves.toEqual({
      ok: false,
      correction: 'You wrote x = 5, but the key is x = 6.',
    });
  });

  it('treats { ok: false } without a non-empty correction as no correction', async () => {
    authFetch.mockResolvedValueOnce(jsonResponse({ ok: false, correction: '   ' }));
    await expect(checkTutorMath(args)).resolves.toEqual({ ok: true });
  });

  it('POSTs the reply and question context to the tutorMathCheck function URL', async () => {
    authFetch.mockResolvedValueOnce(jsonResponse({ ok: true }));
    await checkTutorMath(args);
    expect(authFetch).toHaveBeenCalledTimes(1);
    const [url, opts] = authFetch.mock.calls[0];
    // v2 functions get their own Cloud Run subdomain (lowercased fn name).
    expect(url).toMatch(/^https:\/\/tutormathcheck-/);
    expect(opts.method).toBe('POST');
    expect(JSON.parse(opts.body)).toMatchObject({
      reply: args.reply,
      question: args.question,
      correctAnswer: args.correctAnswer,
    });
  });
});

describe('quickAnswer', () => {
  beforeEach(() => authFetch.mockReset());

  it('requests a buffered response (stream: false) — the server streams by default', async () => {
    authFetch.mockResolvedValueOnce(jsonResponse({ content: 'quick' }));
    const result = await quickAnswer('What is slope?');
    expect(result).toBe('quick');
    expect(bodyOfCall(0).stream).toBe(false);
  });
});
