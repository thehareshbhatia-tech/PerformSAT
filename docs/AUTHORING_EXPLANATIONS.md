# Authoring Explanations — the SEVA standard

This is the contract for every math explanation in the bank, the topic files, and
the practice tests. Voice: **crisp, clear, confident.** The "fun" is the
satisfaction of a clean, fast, correct solution — never gimmicks, never emojis.

> A great explanation makes a student think *"oh, that's all it was"* — fast to
> read, obvious in hindsight, and it leaves behind one rule they'll reuse.

---

## HARD CONSTRAINTS (never violate — these break the product)

1. **Never change the answer.** The explanation must correctly justify the
   item's existing `correctAnswer`. Re-derive it yourself; if your work doesn't
   land on `correctAnswer`, the *explanation* is wrong, not the answer — fix the
   explanation, never assert a different answer.
2. **Preserve the `**SAT Pattern: <Name>**` header verbatim.** It is kebab-cased
   into a drill-routing key. Copy it byte-for-byte from the original — same
   words, same capitalization, no added parenthetical qualifiers, no rewording.
   If the original has no SAT Pattern header, do not add one.
3. **Reference the real choices.** Use the actual letters (A–D) and the actual
   answer value. For grid-in items (no `choices`), state the numeric answer.
4. **Only the explanation text changes.** You are rewriting one string.

---

## MATH NOTATION (this is how we avoid the render bugs)

All math goes inside `$...$` (inline) or `$$...$$` (display). **Every `$` must be
paired** — count them. A stray `$` corrupts everything after it.

| Thing | ✅ Write | ❌ Never |
|---|---|---|
| Fraction | `$\frac{a}{b}$`, `$\dfrac{a}{b}$` | bare `a/b` inside math (the auto-converter mangles it) |
| Exponent (multi-char) | `$x^{12}$`, `$2^{n+1}$` | `$x^12$` (renders as x¹2), `$2^10$` |
| Exponent (single char) | `$x^2$`, `$3^t$` | — |
| Subscript (multi-char) | `$x_{12}$`, `$V_{\text{new}}$` | `$x_12$`, `$V_new$` (renders V then "ew") |
| Root | `$\sqrt{x}$`, `$\sqrt[3]{x}$` | `sqrt(x)`, `√x` |
| Implication / arrows | `$\Rightarrow$`, `$\to$` | `⇒`, `→` (unicode) |
| Comparators | `$\le$ $\ge$ $\neq$ $\approx$ $\pm$` | `≤ ≥ ≠ ≈ ±` (unicode) |
| Multiply / divide | `$\times$ $\cdot$ $\div$` | `×` `÷` (unicode) |
| Degrees | `$90^\circ$` | `90°` |
| Pi, Greek | `$\pi$ $\theta$ $\Delta$` | `π θ Δ` |
| Check mark | `$\checkmark$` or write "✓" only in plain prose | unicode ✓/✗ **inside** `$...$` |
| Percent | `$45\%$` (escaped) | raw `%` inside math — `%` starts a LaTeX comment and eats the rest |
| Currency | `\$45`, `\$1{,}200` (escaped dollar) | bare `$45` (pairs with a later math `$`) |
| Units in math | put units in prose, or `$\frac{\text{km}}{\text{hr}}$` | `\text{km/hr}` (a `/` or `\frac` inside `\text{}` is illegal) |

Other rules:
- **No HTML tags**, no `[TRAP: ...]` tokens, no internal/debug metadata. Ever.
- Multiplication: prefer implicit (`$3x$`) or `\cdot`; avoid `*`.
- Keep display math `$$...$$` for a single centered key equation only; most math
  is inline.

---

## STRUCTURE

Use the house sections, in this order. Omit a section if it doesn't apply (e.g.
no "Why the wrong answers" for grid-ins). Headers are `**bold**` exactly as shown.

```
**SAT Pattern: <copied verbatim from original>**

**Choice C is correct.**            ← or: **The correct answer is $\frac{3}{4}$.**

**The Fast Way (~20s):** <the elegant shortcut a strong student uses — 1–2 sentences.>

**The Full Solution:**
Step 1: <one idea per step.>
Step 2: <…>

**Why the wrong answers are tempting:**
* Choice A: <the specific misconception that produces A — one line.>
* Choice B: <…>
* Choice D: <…>

**Test Day Takeaway:** <one transferable rule, stated as a rule.>
```

- Keep the `(~Ns)` time hint on The Fast Way when it's meaningful.
- For grid-ins, replace "Why the wrong answers" with a one-line **Common
  Mistakes:** note (the trap values a careless student lands on).
- Scale length to difficulty: easy items are short; hard items are thorough but
  never padded. Cut anything that restates the question.

---

## VOICE

- **Direct and active.** "Subtract the equations to eliminate $x$." Not "We can
  see that it would be possible to subtract…".
- **Confident.** No "should", "probably", "I think", no hedging.
- **Clean.** No emojis, no exclamation spam, no cutesy filler. One light, plain
  signpost is fine ("Here's the shortcut:"); personality comes from clarity.
- **Teach the why, then the rule.** A student should finish knowing not just the
  answer but the move that got there.

---

## EXEMPLARS

### Exemplar 1 — MC, algebra (system by elimination), answer C

```
**SAT Pattern: Solving a System by Elimination**

**Choice C is correct.**

**The Fast Way (~15s):** The two equations have the same $x$ coefficient, so subtract them: $(x+y)-(x-y)=13-5$ gives $2y=8$, so $y=4$.

**The Full Solution:**
Step 1: Line up the equations. Both start with $x$, so subtraction cancels it.
Step 2: $(x+y)-(x-y)=13-5 \Rightarrow 2y=8 \Rightarrow y=4$.
Step 3: Back-substitute: $x+4=13$, so $x=9$. Check in the second equation: $9-4=5$. $\checkmark$

**Why the wrong answers are tempting:**
* Choice A ($9$): solved for $x$ instead of $y$ — read the question's target carefully.
* Choice B ($8$): stopped at $2y=8$ and forgot to divide by $2$.
* Choice D ($-4$): subtracted in the wrong direction, flipping the sign.

**Test Day Takeaway:** When two equations share a coefficient, add or subtract to eliminate that variable in one step. Subtract to cancel matching signs; add to cancel opposite signs.
```

### Exemplar 2 — grid-in, advanced math (vertex of a parabola)

```
**SAT Pattern: Vertex Form Maximum**

**The correct answer is $3$.**

**The Fast Way (~20s):** The max of $g(x)=-x^2+4x-1$ sits at $x=-\frac{b}{2a}=\frac{-4}{-2}=2$. Then $g(2)=-4+8-1=3$.

**The Full Solution:**
Step 1: A downward parabola ($a<0$) peaks at its vertex, at $x=-\frac{b}{2a}$.
Step 2: Here $a=-1$, $b=4$, so $x=-\frac{4}{2(-1)}=2$.
Step 3: Evaluate: $g(2)=-(2)^2+4(2)-1=-4+8-1=3$.

**Common Mistakes:** Reporting $x=2$ (the location of the max, not its value); sign-slipping on $-\frac{b}{2a}$ and getting $x=-2$.

**Test Day Takeaway:** The maximum or minimum *value* of a quadratic is the $y$-coordinate of its vertex — find $x=-\frac{b}{2a}$ first, then substitute back.
```
