import { getDesmosTip } from '../desmosTip';
import { desmosTechniques, DESMOS_SKILL_MAP, getRelevantStrategies } from '../../../data/satStrategies';

describe('getDesmosTip', () => {
  it('routes a system of equations to the systems play', () => {
    const tip = getDesmosTip({
      question: 'What is the solution $(x, y)$ to the given system of equations?',
      skills: ['systems-of-equations'],
    });
    expect(tip?.key).toBe('systems');
    expect(tip.technique).toMatch(/intersection/i);
  });

  it('prefers solution-count over systems when the ask is a count', () => {
    const tip = getDesmosTip({
      question: 'At how many points do the graphs of the equations in the given system of equations intersect?',
      skills: ['systems-of-equations'],
    });
    expect(tip?.key).toBe('solution-count');
  });

  it('routes find-the-constant tangency stems to the slider play', () => {
    const tip = getDesmosTip({
      question: 'In the given equation, $a$ is a constant. The system has exactly one real solution. What is the value of $a$?',
      skills: ['quadratic-equations'],
    });
    expect(tip?.key).toBe('parameter-slider');
  });

  it('routes mean/median stems to statistics commands', () => {
    const tip = getDesmosTip({
      question: 'Which of the following correctly compares the means of the two data sets?',
      skills: ['statistics'],
    });
    expect(tip?.key).toBe('statistics');
  });

  it('routes vertex/parabola stems to quadratic analysis', () => {
    const tip = getDesmosTip({
      question: 'The graph of the equation is a parabola with vertex $(h, k)$. What is the maximum value of the function?',
      skills: ['quadratic-equations'],
    });
    expect(tip?.key).toBe('quadratic');
  });

  it('returns null for R&W items carrying a passage', () => {
    const tip = getDesmosTip({
      question: 'Which choice completes the text with the most logical transition?',
      passage: 'Some passage text...',
      skills: ['transitions'],
    });
    expect(tip).toBeNull();
  });

  it('returns null when no play clearly applies', () => {
    const tip = getDesmosTip({
      question: 'A right triangle has legs of lengths 5 and 8. A figure is shown.',
      skills: ['right-triangles'],
    });
    expect(tip).toBeNull();
  });

  it('returns null on malformed input', () => {
    expect(getDesmosTip(null)).toBeNull();
    expect(getDesmosTip({})).toBeNull();
  });
});

describe('desmos corpus integrity', () => {
  it('every DESMOS_SKILL_MAP value points at a real technique', () => {
    Object.values(DESMOS_SKILL_MAP).forEach(key => {
      expect(desmosTechniques[key]).toBeDefined();
    });
  });

  it('every technique entry carries the full shape', () => {
    Object.entries(desmosTechniques).forEach(([key, entry]) => {
      expect(typeof entry.name).toBe('string');
      expect(entry.technique.length).toBeGreaterThan(20);
      expect(typeof entry.when).toBe('string');
      expect(typeof entry.timeEstimate).toBe('string');
    });
  });

  it('getRelevantStrategies surfaces a DESMOS PLAY for a mapped weak skill', () => {
    const out = getRelevantStrategies(null, ['systems-of-equations']);
    expect(out).toContain('DESMOS PLAY: Systems of Equations');
  });

  it('getRelevantStrategies emits at most one desmos play', () => {
    const out = getRelevantStrategies(null, ['systems-of-equations', 'quadratic-equations', 'statistics']);
    const count = (out.match(/DESMOS PLAY:/g) || []).length;
    expect(count).toBe(1);
  });
});
