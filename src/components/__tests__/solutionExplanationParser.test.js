import { parseExplanation, parseChoiceBullet } from '../SolutionExplanation';

// The canonical house format every math bank/test item uses.
const HOUSE_FORMAT = `**SAT Pattern: Right Triangle — Pythagorean**

**Choice B is correct.**

**The Fast Way (~15s):** Hypotenuse $= \\sqrt{5^2 + 8^2} = \\sqrt{89}$. It does not simplify.

**The Full Solution:**
For a right triangle, $c^2 = a^2 + b^2$.
$c^2 = 25 + 64 = 89$.
$c = \\sqrt{89}$.

Verification: $89$ is prime, so the radical is already simplest form.

**Why the wrong answers are tempting:**
* Choice A: adds the legs directly ($5 + 8 = 13$).
* Choice C: subtracts the squares ($64 - 25 = 39$).
* Choice D: forgets the square root ($89$).

**Test Day Takeaway:** The hypotenuse is the root of the SUM of squared legs.`;

describe('parseExplanation — house format', () => {
  const parsed = parseExplanation(HOUSE_FORMAT);

  it('extracts the pattern, verdict, fast way, and takeaway', () => {
    expect(parsed.satPattern).toBe('Right Triangle — Pythagorean');
    expect(parsed.answer).toBe('Choice B is correct');
    expect(parsed.fastWay.content).toMatch(/Hypotenuse/);
    expect(parsed.takeaway.content).toMatch(/SUM of squared legs/);
  });

  it('collects the Full Solution body into a solution section, NOT answerDetail', () => {
    const solution = parsed.sections.find(s => s.type === 'solution');
    expect(solution).toBeDefined();
    expect(solution.content).toMatch(/c\^2 = a\^2 \+ b\^2/);
    expect(solution.content).toMatch(/Verification/);
    // The dense-wall regression: the walkthrough must never leak into the
    // always-visible verdict detail.
    expect(parsed.answerDetail).toBe('');
  });

  it('captures the why-wrong bullets', () => {
    expect(parsed.whyWrong.bullets).toHaveLength(3);
    expect(parsed.whyWrong.bullets[0]).toMatch(/adds the legs/);
  });
});

describe('parseExplanation — fill-in variant with Common Mistakes', () => {
  const FILL_IN = `**SAT Pattern: Equilateral Triangle — Circumradius**

**The correct answer is $88$.**

**The Fast Way (~40s):** Side $= 264$; $R = \\dfrac{264\\sqrt{3}}{3} = 88\\sqrt{3}$.

**The Full Solution:**
Side $s = 792 / 3 = 264$.
$$R = \\frac{s\\sqrt{3}}{3}$$

**Common Mistakes to Avoid:**
* Using the side directly as $R$.
* Dividing the perimeter by $2$ instead of $3$.

**Test Day Takeaway:** Circumradius of an equilateral triangle is $s\\sqrt{3}/3$.`;

  const parsed = parseExplanation(FILL_IN);

  it('parses the fill-in verdict and routes Common Mistakes to whyWrong', () => {
    expect(parsed.answer).toMatch(/correct answer is/);
    expect(parsed.whyWrong.bullets).toHaveLength(2);
  });

  it('keeps the solution body out of answerDetail', () => {
    expect(parsed.answerDetail).toBe('');
    const solution = parsed.sections.find(s => s.type === 'solution');
    expect(solution.content).toMatch(/792/);
  });
});

describe('parseExplanation — legacy and prose fallbacks', () => {
  it('still parses explicit **Step N:** structure into step sections', () => {
    const legacy = `**SAT Pattern: Linear Equations**\n\n**Choice A is correct.**\n\n**Step 1:** Distribute.\nMultiply out the left side.\n**Step 2:** Solve.\nIsolate $x$.`;
    const parsed = parseExplanation(legacy);
    const steps = parsed.sections.filter(s => s.type === 'step');
    expect(steps).toHaveLength(2);
  });

  it('leaves unstructured prose for the raw fallback (no answer, no sections)', () => {
    const prose = 'The passage establishes the researcher doubted the early results, so the contrast transition works best here.';
    const parsed = parseExplanation(prose);
    expect(parsed.answer).toBe('');
    expect(parsed.sections).toHaveLength(0);
    expect(parsed.fastWay).toBeNull();
  });
});

describe('parseChoiceBullet — why-wrong bullet letter + body', () => {
  // June-2026 house format: "Choice A ($75$): explanation." The old regex's
  // `[\s:(]+` consumed the OPEN paren while `\)?$` only stripped a close paren
  // at end-of-string, so the body rendered as a dangling "75): ...".
  it('keeps the parenthetical body balanced (June-2026 format)', () => {
    const m = parseChoiceBullet('Choice A ($75$): divides the rise by the run instead of run by rise.');
    expect(m[1]).toBe('A');
    expect(m[2]).toBe('($75$): divides the rise by the run instead of run by rise.');
    expect((m[2].match(/\(/g) || []).length).toBe((m[2].match(/\)/g) || []).length);
  });

  it('keeps the parenthetical body balanced (legacy prose-paren format)', () => {
    const m = parseChoiceBullet('Choice B (uses the radius): text.');
    expect(m[1]).toBe('B');
    expect(m[2]).toBe('(uses the radius): text.');
  });

  it('parses the bare-colon format', () => {
    const m = parseChoiceBullet('Choice C: subtracts the squares.');
    expect(m[1]).toBe('C');
    expect(m[2]).toBe('subtracts the squares.');
  });

  it('parses a bullet without the "Choice" prefix', () => {
    const m = parseChoiceBullet('D: forgets the square root.');
    expect(m[1]).toBe('D');
    expect(m[2]).toBe('forgets the square root.');
  });

  it('returns null for a non-choice bullet', () => {
    expect(parseChoiceBullet('Watch for reversed operations.')).toBeNull();
  });
});
