import { extractChoiceMisconceptions } from '../choiceMisconceptions';

describe('extractChoiceMisconceptions', () => {
  it('parses the bulleted "Why the wrong answers are tempting" list', () => {
    const md = [
      '**Choice B is correct.**',
      '',
      '**Why the wrong answers are tempting:**',
      '* Choice A ($75$): divides the rise $600$ by $8$ instead of the run $6$.',
      '* Choice C ($200$): divides $600$ by $3$ (a mile marker) instead of by the run of $6$ miles.',
      '* Choice D ($600$): reports the total rise without dividing by the run.',
      '',
      '**Test Day Takeaway:** Rate of change is change in $y$ over change in $x$.',
    ].join('\n');
    const out = extractChoiceMisconceptions(md);
    expect(out.A).toBe('divides the rise $600$ by $8$ instead of the run $6$.');
    expect(out.C).toBe('divides $600$ by $3$ (a mile marker) instead of by the run of $6$ miles.');
    expect(out.D).toBe('reports the total rise without dividing by the run.');
    // Keeps LaTeX intact.
    expect(out.A).toContain('$600$');
    // The "correct" line is not a misconception.
    expect(out.B).toBeUndefined();
    // No takeaway text leaked into the last choice.
    expect(out.D).not.toContain('Takeaway');
  });

  it('parses inline "Choice A (...): reason" variants on one line', () => {
    const md = 'Choice A ($120$): steps back $5$ months instead of $4$. Choice C ($90$): halves the rate.';
    const out = extractChoiceMisconceptions(md);
    expect(out.A).toBe('steps back $5$ months instead of $4$.');
    expect(out.C).toBe('halves the rate.');
  });

  it('captures the fill-in Common Mistakes paragraph under _common', () => {
    const md = '**Common Mistakes:** Reporting $-3$ when the question asks for a positive number; using the initial $30$ cm.\n\n**Test Day Takeaway:** For shrink problems...';
    const out = extractChoiceMisconceptions(md);
    expect(out._common).toBe('Reporting $-3$ when the question asks for a positive number; using the initial $30$ cm.');
    expect(out._common).not.toContain('Takeaway');
  });

  it('returns {} for garbage / non-string input', () => {
    expect(extractChoiceMisconceptions('the quick brown fox')).toEqual({});
    expect(extractChoiceMisconceptions('')).toEqual({});
    expect(extractChoiceMisconceptions(null)).toEqual({});
    expect(extractChoiceMisconceptions(undefined)).toEqual({});
    expect(extractChoiceMisconceptions(42)).toEqual({});
    expect(extractChoiceMisconceptions({})).toEqual({});
  });

  it('does not treat "Choices" or a colon-less Choice line as an anchor', () => {
    const md = 'Choices are shown below. **Choice B is correct.** No colon here.';
    expect(extractChoiceMisconceptions(md)).toEqual({});
  });
});
