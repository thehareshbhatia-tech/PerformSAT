import {
  getStudentMisconception,
  buildFollowUpPrompts,
  buildTrapWelcome,
} from '../tutorEngagement';

// An explanation in the bank's authored format with per-choice trap lines.
const EXPLANATION = `**SAT Pattern: Linear Extrapolation**

**Choice B is correct.**

**Why the wrong answers are tempting:**
* Choice A ($120$): steps back $5$ months instead of $4$.
* Choice C ($180$): arithmetic slip on the rate.
* Choice D ($200$): miscount of the periods.

**Test Day Takeaway:** Count the periods carefully.`;

const wrongOnA = {
  answerRevealed: true,
  isCorrect: false,
  userAnswer: 'A',
  selectedAnswer: 'A',
  explanation: EXPLANATION,
  choices: [{ id: 'A' }, { id: 'B' }, { id: 'C' }, { id: 'D' }],
  section: 'math',
};

describe('getStudentMisconception', () => {
  it('returns the parsed reason for the chosen wrong choice', () => {
    const m = getStudentMisconception(wrongOnA);
    expect(m).not.toBeNull();
    expect(m.choiceId).toBe('A');
    expect(m.reason).toContain('steps back');
  });

  it('returns null before the answer is revealed', () => {
    expect(getStudentMisconception({ ...wrongOnA, answerRevealed: false })).toBeNull();
  });

  it('returns null on a correct answer', () => {
    expect(getStudentMisconception({ ...wrongOnA, isCorrect: true })).toBeNull();
  });

  it('returns null when the chosen choice has no parsed line', () => {
    expect(getStudentMisconception({ ...wrongOnA, userAnswer: 'B' })).toBeNull();
  });

  it('falls back to _common for fill-ins', () => {
    const fillin = {
      answerRevealed: true,
      isCorrect: false,
      userAnswer: '40',
      choices: [],
      explanation: '**Common Mistakes:** Reporting $40$ by forgetting the intercept.',
    };
    const m = getStudentMisconception(fillin);
    expect(m).not.toBeNull();
    expect(m.choiceId).toBeNull();
    expect(m.reason).toContain('forgetting the intercept');
  });

  it('is null-safe on missing context', () => {
    expect(getStudentMisconception(null)).toBeNull();
    expect(getStudentMisconception({})).toBeNull();
  });
});

describe('buildFollowUpPrompts', () => {
  it('leads with the trap prompt on a wrong answer with a parsed misconception', () => {
    const prompts = buildFollowUpPrompts(wrongOnA, true);
    expect(prompts[0]).toBe('How do I avoid that trap next time?');
    expect(prompts).toContain('Why was A wrong?');
    expect(prompts).toHaveLength(3);
  });

  it('omits the trap prompt when no misconception parses', () => {
    const noTrap = { ...wrongOnA, explanation: 'plain text' };
    const prompts = buildFollowUpPrompts(noTrap, true);
    expect(prompts[0]).toBe('Why was A wrong?');
    expect(prompts).toContain('Give me a similar problem');
  });

  it('upgrades toward speed and pattern on a correct answer', () => {
    const prompts = buildFollowUpPrompts({ ...wrongOnA, isCorrect: true }, true);
    expect(prompts).toEqual([
      'Was there a faster way?',
      "What's the pattern to remember?",
      'Give me a similar problem',
    ]);
  });

  it('stays in hint territory before the answer is revealed', () => {
    const prompts = buildFollowUpPrompts({ ...wrongOnA, answerRevealed: false, isCorrect: undefined }, true);
    expect(prompts).toEqual([
      'Explain that a different way',
      'Give me a similar problem',
      'Can you give me a hint?',
    ]);
  });

  it('uses R&W phrasing for the similar prompt', () => {
    const prompts = buildFollowUpPrompts({ ...wrongOnA, section: 'rw', explanation: '' }, true);
    expect(prompts).toContain('Show me a similar question');
  });

  it('falls back to generic prompts outside practice', () => {
    expect(buildFollowUpPrompts(null, false)).toEqual([
      'Explain that a different way',
      'Can you give an example?',
    ]);
  });
});

describe('buildTrapWelcome', () => {
  it('personalizes the welcome with the chosen letter', () => {
    const w = buildTrapWelcome(wrongOnA);
    expect(w.title).toBe("Let's fix that one");
    expect(w.body).toContain('You picked A');
  });

  it('never leaks raw LaTeX into the welcome body', () => {
    const w = buildTrapWelcome(wrongOnA);
    expect(w.body).not.toContain('$');
  });

  it('returns null when there is no parsed misconception', () => {
    expect(buildTrapWelcome({ ...wrongOnA, isCorrect: true })).toBeNull();
    expect(buildTrapWelcome(null)).toBeNull();
  });

  it('handles fill-ins without a choice letter', () => {
    const fillin = {
      answerRevealed: true,
      isCorrect: false,
      userAnswer: '40',
      choices: [],
      explanation: '**Common Mistakes:** Forgetting the intercept.',
    };
    const w = buildTrapWelcome(fillin);
    expect(w.body).toContain('known trap');
    expect(w.body).not.toContain('You picked');
  });
});
