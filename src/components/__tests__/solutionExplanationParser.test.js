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

// ── seva-figure blocks (2026-07-28) ─────────────────────────────────────────
const FIG = (type, params, caption) =>
  '```seva-figure\n' + JSON.stringify({ type, params, ...(caption ? { caption } : {}) }) + '\n```';

describe('parseExplanation — inline seva-figure blocks', () => {
  it('attaches a figure inside a step to that step', () => {
    const src = `**Choice A is correct.**

**The Full Solution:**
**Step 1:** Set up the triangle.
The legs are $9$ and $b$; the hypotenuse is $15$.
${FIG('rightTriangle', { sideLabels: ['9', '12', '15'] }, 'The completed triangle')}
**Step 2:** Apply the theorem.
$b = \\sqrt{15^2 - 9^2} = 12$.`;
    const parsed = parseExplanation(src);
    const steps = parsed.sections.filter((s) => s.type === 'step');
    expect(steps).toHaveLength(2);
    expect(steps[0].figures).toHaveLength(1);
    expect(steps[0].figures[0]).toMatchObject({ type: 'rightTriangle', caption: 'The completed triangle' });
    expect(steps[1].figures).toBeUndefined();
  });

  it('attaches figures to fastWay / takeaway sections', () => {
    const src = `**Choice A is correct.**

**The Fast Way (~5s):** See it at a glance.
${FIG('dotPlot', { values: [1, 2, 2, 5] })}

**Test Day Takeaway:** Draw it.
${FIG('linearGraph', { slope: 2, yIntercept: 1 })}`;
    const parsed = parseExplanation(src);
    expect(parsed.fastWay.figures).toHaveLength(1);
    expect(parsed.fastWay.figures[0].type).toBe('dotPlot');
    expect(parsed.takeaway.figures).toHaveLength(1);
    expect(parsed.takeaway.figures[0].type).toBe('linearGraph');
  });

  it('keeps a step whose entire body is a figure', () => {
    const src = `**The Full Solution:**
**Step 1:**
${FIG('parabola', { vertex: { h: 1, k: -4 }, a: 1 })}`;
    const parsed = parseExplanation(src);
    const steps = parsed.sections.filter((s) => s.type === 'step');
    expect(steps).toHaveLength(1);
    expect(steps[0].figures).toHaveLength(1);
  });

  it('a figure before any section becomes a standalone figure section', () => {
    const src = `${FIG('dotPlot', { values: [3, 5, 5, 9] })}
**Test Day Takeaway:** Done.`;
    const parsed = parseExplanation(src);
    const standalone = parsed.sections.filter((s) => s.type === 'figure');
    expect(standalone).toHaveLength(1);
    expect(standalone[0].figures[0].type).toBe('dotPlot');
  });

  it('never leaks raw JSON, fences, or placeholder chars into parsed fields', () => {
    const src = `**Choice A is correct.** Intro.
${FIG('rightTriangle', { sideLabels: ['3', '4', '5'] })}
**Test Day Takeaway:** Done.`;
    const parsed = parseExplanation(src);
    const everything = JSON.stringify([
      parsed.answerDetail, parsed.satPattern,
      parsed.sections.map((s) => s.content + s.bullets.join(' ')),
      parsed.takeaway?.content,
    ]);
    expect(everything).not.toContain('```');
    expect(everything).not.toContain('sideLabels');
    expect(everything).not.toContain(String.fromCharCode(1));
  });

  it('an invalid block degrades to prose-only with no residue', () => {
    const src = `**Choice A is correct.**

**The Full Solution:**
**Step 1:** Compute.
$2 + 2 = 4$.
\`\`\`seva-figure
{broken
\`\`\`
**Step 2:** Conclude.
The answer is $4$.`;
    const parsed = parseExplanation(src);
    const steps = parsed.sections.filter((s) => s.type === 'step');
    expect(steps).toHaveLength(2);
    expect(steps[0].figures).toBeUndefined();
    expect(JSON.stringify(parsed)).not.toContain('broken');
    expect(JSON.stringify(parsed)).not.toContain(String.fromCharCode(1));
  });
});
