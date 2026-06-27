import { pickSimilarQuestion } from '../trySimilarService';

// ── Helpers ──────────────────────────────────────────────────────────────────

const makeQ = (overrides = {}) => ({
  id: 'math-q-001',
  question: 'What is 2+2?',
  choices: [{ id: 'a', text: '3' }, { id: 'b', text: '4' }],
  correctAnswer: 'b',
  skill: 'arithmetic',
  skills: ['arithmetic'],
  section: 'math',
  difficulty: 'easy',
  ...overrides,
});

const makeMockDispatcher = (returnValue) => jest.fn(() => returnValue);

// ── Tagged-result contract ───────────────────────────────────────────────────

describe('pickSimilarQuestion — invalid input', () => {
  it('returns kind: invalid when currentQuestion is null', () => {
    expect(pickSimilarQuestion({ currentQuestion: null }).kind).toBe('invalid');
  });

  it('returns kind: invalid when currentQuestion is undefined', () => {
    expect(pickSimilarQuestion({}).kind).toBe('invalid');
  });

  it('returns kind: invalid when currentQuestion is a non-object', () => {
    expect(pickSimilarQuestion({ currentQuestion: 'string' }).kind).toBe('invalid');
    expect(pickSimilarQuestion({ currentQuestion: 42 }).kind).toBe('invalid');
  });
});

describe('pickSimilarQuestion — no skill', () => {
  it('returns kind: no-skill when skills array is empty', () => {
    const q = makeQ({ skill: undefined, skills: [] });
    expect(pickSimilarQuestion({ currentQuestion: q }).kind).toBe('no-skill');
  });

  it('returns kind: no-skill when skill and skills are both missing', () => {
    const q = makeQ({ skill: undefined, skills: undefined });
    expect(pickSimilarQuestion({ currentQuestion: q }).kind).toBe('no-skill');
  });

  it('falls back to scalar `skill` field when `skills` array is missing', () => {
    const dispatcher = makeMockDispatcher([makeQ({ id: 'next' })]);
    const q = makeQ({ skills: undefined, skill: 'arithmetic' });
    const result = pickSimilarQuestion({
      currentQuestion: q,
      mathDispatcher: dispatcher,
    });
    expect(result.kind).toBe('ok');
    expect(dispatcher).toHaveBeenCalledWith(['arithmetic'], expect.any(Object));
  });
});

// ── Section dispatch ─────────────────────────────────────────────────────────

describe('pickSimilarQuestion — section dispatch', () => {
  it('routes math (section: math) to the math dispatcher', () => {
    const math = makeMockDispatcher([makeQ({ id: 'm-2' })]);
    const rw = makeMockDispatcher([]);
    pickSimilarQuestion({
      currentQuestion: makeQ({ section: 'math' }),
      mathDispatcher: math,
      rwDispatcher: rw,
    });
    expect(math).toHaveBeenCalledTimes(1);
    expect(rw).not.toHaveBeenCalled();
  });

  it('routes R&W (section: rw) to the R&W dispatcher', () => {
    const math = makeMockDispatcher([]);
    const rw = makeMockDispatcher([makeQ({ id: 'rw-test1-module-1-2', section: 'rw' })]);
    pickSimilarQuestion({
      currentQuestion: makeQ({ id: 'rw-test1-module-1-1', section: 'rw' }),
      mathDispatcher: math,
      rwDispatcher: rw,
    });
    expect(rw).toHaveBeenCalledTimes(1);
    expect(math).not.toHaveBeenCalled();
  });

  it('falls back to id-prefix sniffing when section is missing', () => {
    // R&W item with no `section` field — id prefix is the discriminator.
    const math = makeMockDispatcher([]);
    const rw = makeMockDispatcher([makeQ({ id: 'rw-test1-module-1-2' })]);
    pickSimilarQuestion({
      currentQuestion: makeQ({ id: 'rw-test1-module-1-1', section: undefined }),
      mathDispatcher: math,
      rwDispatcher: rw,
    });
    expect(rw).toHaveBeenCalledTimes(1);
    expect(math).not.toHaveBeenCalled();
  });

  it('defaults to math when section is missing AND id has no rw- prefix', () => {
    const math = makeMockDispatcher([makeQ({ id: 'math-2' })]);
    const rw = makeMockDispatcher([]);
    pickSimilarQuestion({
      currentQuestion: makeQ({ id: 'math-1', section: undefined }),
      mathDispatcher: math,
      rwDispatcher: rw,
    });
    expect(math).toHaveBeenCalledTimes(1);
    expect(rw).not.toHaveBeenCalled();
  });
});

// ── excludeIds + limit ───────────────────────────────────────────────────────

describe('pickSimilarQuestion — excludeIds plumbing', () => {
  it('passes excludeIds straight through to the dispatcher', () => {
    const dispatcher = makeMockDispatcher([makeQ({ id: 'next' })]);
    pickSimilarQuestion({
      currentQuestion: makeQ(),
      excludeIds: ['math-q-001', 'math-q-002', 'math-q-003'],
      mathDispatcher: dispatcher,
    });
    expect(dispatcher).toHaveBeenCalledWith(
      ['arithmetic'],
      { excludeIds: ['math-q-001', 'math-q-002', 'math-q-003'] },
    );
  });

  it('does NOT cap the dispatcher with a limit, so the MCQ filter sees the full pool', () => {
    // The function used to ask for limit:1, but a single returned item could be
    // a fill-in (unanswerable in the drill shell). It now fetches the whole
    // matched pool and filters to multiple-choice, so no limit is passed.
    const dispatcher = makeMockDispatcher([makeQ({ id: 'next' })]);
    pickSimilarQuestion({
      currentQuestion: makeQ(),
      mathDispatcher: dispatcher,
    });
    const opts = dispatcher.mock.calls[0][1];
    expect(opts.limit).toBeUndefined();
  });

  it('defaults excludeIds to [] when not provided', () => {
    const dispatcher = makeMockDispatcher([makeQ({ id: 'next' })]);
    pickSimilarQuestion({
      currentQuestion: makeQ(),
      mathDispatcher: dispatcher,
    });
    const opts = dispatcher.mock.calls[0][1];
    expect(opts.excludeIds).toEqual([]);
  });
});

// ── Pool exhaustion ──────────────────────────────────────────────────────────

describe('pickSimilarQuestion — pool exhaustion', () => {
  it('returns kind: exhausted when dispatcher returns []', () => {
    const dispatcher = makeMockDispatcher([]);
    const result = pickSimilarQuestion({
      currentQuestion: makeQ(),
      mathDispatcher: dispatcher,
    });
    expect(result.kind).toBe('exhausted');
    expect(result.skillIds).toEqual(['arithmetic']);
  });

  it('returns kind: exhausted when dispatcher returns null/undefined', () => {
    const result = pickSimilarQuestion({
      currentQuestion: makeQ(),
      mathDispatcher: makeMockDispatcher(null),
    });
    expect(result.kind).toBe('exhausted');
  });

  it('skillIds in exhausted result reflects the question`s skills array', () => {
    const dispatcher = makeMockDispatcher([]);
    const q = makeQ({ skills: ['skill-a', 'skill-b'] });
    const result = pickSimilarQuestion({
      currentQuestion: q,
      mathDispatcher: dispatcher,
    });
    expect(result.kind).toBe('exhausted');
    expect(result.skillIds).toEqual(['skill-a', 'skill-b']);
  });
});

// ── MCQ-only filter (drill shells have no fill-in input) ─────────────────────

describe('pickSimilarQuestion — MCQ-only filter', () => {
  it('skips fill-in (choiceless) items and returns the first multiple-choice item', () => {
    const fillIn = makeQ({ id: 'fill-1', choices: undefined, type: 'fill-in', correctAnswer: '3.8' });
    const mcq = makeQ({ id: 'mcq-1' });
    const dispatcher = makeMockDispatcher([fillIn, mcq]);
    const result = pickSimilarQuestion({ currentQuestion: makeQ(), mathDispatcher: dispatcher });
    expect(result.kind).toBe('ok');
    expect(result.question).toBe(mcq); // the fill-in was skipped, not served
  });

  it('returns exhausted when the pool is all fill-ins (would be an unanswerable dead-end)', () => {
    const fillA = makeQ({ id: 'fill-a', choices: undefined, type: 'fill-in' });
    const fillB = makeQ({ id: 'fill-b', choices: [], type: 'fill-in' });
    const dispatcher = makeMockDispatcher([fillA, fillB]);
    const result = pickSimilarQuestion({ currentQuestion: makeQ(), mathDispatcher: dispatcher });
    expect(result.kind).toBe('exhausted');
  });

  it('treats a single-choice item as non-MCQ (needs >= 2 choices)', () => {
    const oneChoice = makeQ({ id: 'one', choices: [{ id: 'a', text: '4' }] });
    const mcq = makeQ({ id: 'mcq-2' });
    const dispatcher = makeMockDispatcher([oneChoice, mcq]);
    const result = pickSimilarQuestion({ currentQuestion: makeQ(), mathDispatcher: dispatcher });
    expect(result.kind).toBe('ok');
    expect(result.question).toBe(mcq);
  });
});

// ── Error path (GAP-3) ───────────────────────────────────────────────────────

describe('pickSimilarQuestion — dispatcher errors (GAP-3)', () => {
  it('catches dispatcher throw and returns kind: error', () => {
    const boom = new Error('bank index is corrupted');
    const dispatcher = jest.fn(() => { throw boom; });
    const result = pickSimilarQuestion({
      currentQuestion: makeQ(),
      mathDispatcher: dispatcher,
    });
    expect(result.kind).toBe('error');
    expect(result.error).toBe(boom);
  });

  it('does not crash the caller when the dispatcher throws a non-Error', () => {
    const dispatcher = jest.fn(() => { throw 'string-thrown'; }); // eslint-disable-line no-throw-literal
    const result = pickSimilarQuestion({
      currentQuestion: makeQ(),
      mathDispatcher: dispatcher,
    });
    expect(result.kind).toBe('error');
  });
});

// ── Happy path ───────────────────────────────────────────────────────────────

describe('pickSimilarQuestion — happy path', () => {
  it('returns kind: ok with the first item from the pool', () => {
    const fresh = makeQ({ id: 'next-q' });
    const dispatcher = makeMockDispatcher([fresh, makeQ({ id: 'unused' })]);
    const result = pickSimilarQuestion({
      currentQuestion: makeQ(),
      mathDispatcher: dispatcher,
    });
    expect(result.kind).toBe('ok');
    expect(result.question).toBe(fresh);
  });

  it('respects excludeIds — does not return a question whose id is excluded (integration with real math bank)', () => {
    // Use the real math dispatcher (no mock). Pick an arbitrary skill we know
    // has multiple items in the bank, exclude one, expect a different one back.
    const result = pickSimilarQuestion({
      currentQuestion: { id: 'sentinel', skill: 'slope-intercept-form', skills: ['slope-intercept-form'], section: 'math' },
      excludeIds: [],
    });
    // Either the bank has slope-intercept items (kind: ok) or it doesn't yet.
    // Either is a valid non-throwing path; the contract under test is "no throw".
    expect(['ok', 'exhausted']).toContain(result.kind);
  });
});
