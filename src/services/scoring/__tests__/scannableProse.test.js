import { splitSentences, buildScannable, emphasizeNumbers } from '../scannableProse';

describe('splitSentences', () => {
  it('splits flowing tutor prose at sentence boundaries', () => {
    const t = 'You gave those questions 45 seconds each. Your correct answers got 70. That gap is the story.';
    expect(splitSentences(t)).toEqual([
      'You gave those questions 45 seconds each.',
      'Your correct answers got 70.',
      'That gap is the story.',
    ]);
  });

  it('does not split on decimals or abbreviations', () => {
    const t = 'You averaged 0.75 points per question on geometry vs. 1.2 elsewhere. That is the gap.';
    expect(splitSentences(t)).toEqual([
      'You averaged 0.75 points per question on geometry vs. 1.2 elsewhere.',
      'That is the gap.',
    ]);
  });

  it('never splits inside a $...$ math span', () => {
    const t = 'The line $y = 2x + 1.$ tripped you twice. Both were sign slips.';
    const out = splitSentences(t);
    expect(out[0]).toContain('$y = 2x + 1.$');
    expect(out).toHaveLength(2);
  });

  it('returns empty array for empty input', () => {
    expect(splitSentences('')).toEqual([]);
    expect(splitSentences(null)).toEqual([]);
  });
});

describe('buildScannable', () => {
  it('bold lead + max-2-sentence paragraphs, no words lost', () => {
    const t = 'A. B. C. D. E. F.';
    const s = buildScannable('First one. Second here. Third now. Fourth too. Fifth yes.');
    expect(s.lead).toBe('First one.');
    expect(s.rest).toEqual(['Second here. Third now.', 'Fourth too. Fifth yes.']);
    expect(t).toBeTruthy();
  });

  it('single sentence becomes lead with empty rest', () => {
    expect(buildScannable('Just one sentence here.')).toEqual({
      lead: 'Just one sentence here.',
      rest: [],
    });
  });

  it('returns null for empty input', () => {
    expect(buildScannable('  ')).toBeNull();
  });

  it('splits an over-long enumeration lead at its early colon', () => {
    const long = 'Your test-taking behaviors reveal three compounding patterns that kept surfacing: ' +
      'eight answer changes hurt you, you rushed the hard questions, and you never used elimination anywhere.';
    const s = buildScannable(long + ' A second sentence follows.');
    expect(s.lead).toBe('Your test-taking behaviors reveal three compounding patterns that kept surfacing:');
    expect(s.rest.join(' ')).toContain('eight answer changes hurt you');
    expect(s.rest.join(' ')).toContain('A second sentence follows.');
  });

  it('drops the bold anchor for a long single sentence with no colon', () => {
    const long = 'Your position bias when choosing the first option only six percent of the time against ' +
      'an expected quarter suggests you are not randomly guessing but overthinking and freezing on unfamiliar types.';
    const s = buildScannable(long);
    expect(s.lead).toBeNull();
    expect(s.rest.join(' ')).toBe(long);
  });
});

describe('emphasizeNumbers', () => {
  const joined = (segs) => segs.map((s) => s.text).join('');
  const bolds = (segs) => segs.filter((s) => s.bold).map((s) => s.text);

  it('bolds counts, times, fractions, and point costs with unit words', () => {
    const t = 'You missed 3/4 there, spent 45 seconds each, and it cost ~30 points.';
    const segs = emphasizeNumbers(t);
    expect(joined(segs)).toBe(t);
    expect(bolds(segs)).toEqual(['3/4', '45 seconds', '~30 points']);
  });

  it('bolds "N of M" and percentage phrases', () => {
    const segs = emphasizeNumbers('Geometry came out 4 of 7, which is 57% on the day.');
    expect(bolds(segs)).toEqual(['4 of 7', '57%']);
  });

  it('bolds bare-seconds pairs separately (45s vs 70s)', () => {
    const segs = emphasizeNumbers('You spent 45s on misses vs 70s on the ones you got right.');
    expect(bolds(segs)).toEqual(['45s', '70s']);
  });

  it('leaves $...$ math spans intact and unbolded', () => {
    const t = 'The equation $y = 3x - 4$ showed up twice and cost 20 points.';
    const segs = emphasizeNumbers(t);
    expect(joined(segs)).toBe(t);
    expect(bolds(segs)).toEqual(['20 points']);
    const mathSeg = segs.find((s) => s.text.includes('$y = 3x - 4$'));
    expect(mathSeg.bold).toBe(false);
  });

  it('reassembles to the exact original text (nothing lost, nothing added)', () => {
    const t = 'All 3 changes came in the last 15 minutes, a 50-point gap in the making.';
    expect(joined(emphasizeNumbers(t))).toBe(t);
  });
});
