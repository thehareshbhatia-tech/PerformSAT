import {
  makeQuestionKey,
  noteTutorExchange,
  peekTutorExchange,
  consumeTutorExchange,
  _resetTutorExchange,
} from '../tutorExchangeTracker';

beforeEach(() => _resetTutorExchange());

describe('makeQuestionKey', () => {
  it('prefers a real id', () => {
    expect(makeQuestionKey({ id: 'q123' })).toBe('id:q123');
    expect(makeQuestionKey({ id: 42 })).toBe('id:42');
  });
  it('falls back to a stable text hash', () => {
    const a = makeQuestionKey({ text: 'What is the slope?' });
    const b = makeQuestionKey({ text: 'What is the slope?' });
    expect(a).toBe(b);
    expect(a).toMatch(/^text:/);
    expect(makeQuestionKey({ text: 'different' })).not.toBe(a);
  });
  it('returns null when nothing identifies the item', () => {
    expect(makeQuestionKey({})).toBeNull();
    expect(makeQuestionKey({ text: '  ' })).toBeNull();
    expect(makeQuestionKey()).toBeNull();
  });
});

describe('tutor-exchange single slot', () => {
  it('notes and peeks without consuming', () => {
    noteTutorExchange('id:q1');
    expect(peekTutorExchange()).toMatchObject({ questionKey: 'id:q1' });
    expect(peekTutorExchange()).toMatchObject({ questionKey: 'id:q1' }); // still there
  });

  it('ignores a falsy key', () => {
    noteTutorExchange('');
    expect(peekTutorExchange()).toBeNull();
    noteTutorExchange(null);
    expect(peekTutorExchange()).toBeNull();
  });

  it('keeps the exchange pending when the same question is answered', () => {
    noteTutorExchange('id:q1');
    expect(consumeTutorExchange('id:q1')).toBeNull(); // next item has not happened yet
    expect(peekTutorExchange()).toMatchObject({ questionKey: 'id:q1' }); // still pending
  });

  it('consumes the exchange on a DIFFERENT (next) question', () => {
    noteTutorExchange('id:q1');
    const ex = consumeTutorExchange('id:q2');
    expect(ex).toMatchObject({ questionKey: 'id:q1' });
    expect(peekTutorExchange()).toBeNull(); // consumed
  });

  it('consumes unconditionally when called with no key', () => {
    noteTutorExchange('id:q1');
    expect(consumeTutorExchange()).toMatchObject({ questionKey: 'id:q1' });
    expect(peekTutorExchange()).toBeNull();
  });

  it('returns null when nothing is pending', () => {
    expect(consumeTutorExchange('id:q9')).toBeNull();
    expect(consumeTutorExchange()).toBeNull();
  });

  it('overwrites with the most recent exchange', () => {
    noteTutorExchange('id:q1');
    noteTutorExchange('id:q2');
    expect(peekTutorExchange()).toMatchObject({ questionKey: 'id:q2' });
  });
});
