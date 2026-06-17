import { restoreAnswerStateForQuestion, buildResumableDrill } from '../practiceNavigation';

describe('restoreAnswerStateForQuestion', () => {
  const answers = {
    q1: { selected: 'B', correct: true },
    q2: { selected: 'D', correct: false },
  };

  it('restores the selected choice + feedback for an already-answered question', () => {
    expect(restoreAnswerStateForQuestion(answers, { id: 'q1' }))
      .toEqual({ selectedAnswer: 'B', showFeedback: true });
    // Even a wrong recorded answer must come back (with feedback shown).
    expect(restoreAnswerStateForQuestion(answers, { id: 'q2' }))
      .toEqual({ selectedAnswer: 'D', showFeedback: true });
  });

  it('returns a blank state for an unanswered question (like a fresh one)', () => {
    expect(restoreAnswerStateForQuestion(answers, { id: 'q3' }))
      .toEqual({ selectedAnswer: null, showFeedback: false });
  });

  it('is null-safe for missing answers map or question', () => {
    expect(restoreAnswerStateForQuestion(null, { id: 'q1' }))
      .toEqual({ selectedAnswer: null, showFeedback: false });
    expect(restoreAnswerStateForQuestion(answers, null))
      .toEqual({ selectedAnswer: null, showFeedback: false });
    expect(restoreAnswerStateForQuestion(undefined, undefined))
      .toEqual({ selectedAnswer: null, showFeedback: false });
  });

  it('handles numeric question ids (raw bundle shape)', () => {
    expect(restoreAnswerStateForQuestion({ 420: { selected: 'A', correct: true } }, { id: 420 }))
      .toEqual({ selectedAnswer: 'A', showFeedback: true });
  });
});

describe('buildResumableDrill', () => {
  const ps = {
    shuffledQuestions: [{ id: 'q1' }, { id: 'q2' }, { id: 'q3' }],
    currentQuestionIndex: 1,
    answers: { q1: { selected: 'A', correct: true } },
    rounds: [{ index: 0, questionIds: ['q1', 'q2', 'q3'] }],
    currentRoundIndex: 0,
    assignmentMeta: { label: 'Comma boundaries', source: 'practice-bank-pattern' },
  };

  it('extracts the lean resumable slice (ids, not full questions) + section', () => {
    expect(buildResumableDrill(ps, '__assigned__')).toEqual({
      questionIds: ['q1', 'q2', 'q3'],
      currentQuestionIndex: 1,
      answers: { q1: { selected: 'A', correct: true } },
      rounds: [{ index: 0, questionIds: ['q1', 'q2', 'q3'] }],
      currentRoundIndex: 0,
      assignmentMeta: { label: 'Comma boundaries', source: 'practice-bank-pattern' },
      section: '__assigned__',
    });
  });

  it('returns null when there is nothing to resume', () => {
    expect(buildResumableDrill(null)).toBeNull();
    expect(buildResumableDrill({ shuffledQuestions: [] })).toBeNull();
    expect(buildResumableDrill({})).toBeNull();
  });

  it('defaults missing fields safely', () => {
    const out = buildResumableDrill({ shuffledQuestions: [{ id: 'q1' }] });
    expect(out).toEqual({
      questionIds: ['q1'],
      currentQuestionIndex: 0,
      answers: {},
      rounds: null,
      currentRoundIndex: 0,
      assignmentMeta: null,
      section: null,
    });
  });
});
