# Raw notes — College Panda ch. 11: Word Problems
Source: math-panda (Digital SAT ed.), pages p0064–p0069 scans (chapter ends on left half of
p0069). Domain: Algebra — English→equation translation. Understanding-only extraction.

## Concepts taught

- `variable-definition-discipline` — The pivotal act in any word problem is choosing WHAT the
  variable stands for, stating it precisely (including units and time reference), and never
  letting its meaning drift mid-solution.
- `target-first-variable-choice` — Default heuristic: let the variable be the quantity the
  question asks for; any consistent choice works, but this one ends the algebra at the answer
  instead of one transformation short of it.
- `one-variable-preference` — When a second unknown is expressible in terms of the first
  ("7 more than", "3 times"), express it rather than introducing a new letter; extra variables
  buy nothing but extra steps on single-answer problems.
- `clean-multiple-variable-choice` — When one quantity is a multiple/fraction of another, set
  the variable to the base quantity so the other is an integer multiple (x and 3x), avoiding
  fraction arithmetic (x and x/3).
- `translation-grammar` — A small phrase→structure dictionary covers most stems (see below).
- `timeline-shifting` — In age/future/past problems, every actor's quantity gets the same time
  shift, and the stated relation holds AT the shifted time, not now.
- `sequential-integer-encoding` — Runs of consecutive integers encode as x, x+1, x+2, …
  anchored at either end.
- `percent-split-encoding` — "p% are A, the rest are B" over unknown total x → pAx and (1−p)x;
  relations between the parts become one-variable equations.
- `piecewise-accumulation` — When a rate changes at a known breakpoint, total = (rate1 ×
  duration1) + (rate2 × remaining time); equating two actors' accumulations solves pursuit
  problems.
- `mixture-concentration-invariant` — Concentration = pure substance / total solution. When
  anything is added, BOTH numerator and denominator move; the equation is
  (old pure + added pure)/(old total + added total) = target fraction.
- `work-rate-addition` — Independent workers' rates (jobs per unit time = 1/solo-time) add;
  output = combined rate × time. Joint time is found from rate addition, never by averaging
  solo times.
- `joint-work-sanity-bound` — Structural check: working together must beat the faster worker's
  solo time; any answer violating this is wrong before verification.

## The translation grammar (phrase shapes → equation shapes)

Collected across examples and exercise designs; this is the chapter's real payload.

| English shape | Algebra shape | Note |
|---|---|---|
| "is", "was", "will be", "result is" | = | equation spine |
| "k more than B" / "exceeds B by k" | B + k | order-of-subtraction traps in distractors |
| "k less than B" | B − k | reversal (k − B) is the planted error |
| "k times as many/much as B" | kB | which side gets k is the trap |
| "A is p% more/less than B" | A = (1±p)B | never A = pB |
| "fixed fee plus rate per unit" | base + (rate)(count) | linear model construction |
| "first unit costs c₁, each additional costs c₂" | c₁ + c₂(n−1) | off-by-one on the count is the trap |
| "per", "for every", "each" | multiplication by a rate / ratio fraction | |
| "split evenly among n" | ÷ n | with "k fail to pay" → denominator becomes n−k |
| "consecutive integers (sum …)" | x + (x+1) + … | anchor choice free |
| "in t years" (ages) | every age + t | relation asserted at future time |
| "sum of A and B is S" while "A is f(B)" | substitute, one variable | |
| "how many must be added/removed so that %…" | new-part / new-total = target | both parts of fraction change |
| "together they complete in t" | t(1/a + 1/b) = 1, or 1/a + 1/b = 1/t | rates add, times don't |
| "catch up / same total when" | expr_A(t) = expr_B(t) | build each accumulation separately |
| "what does the number N mean in this equation" | map N back to a quantity in the story | interpretation, no solving |

Distractor design principle observed throughout the exercises: for construct-the-equation
items, the four choices are the correct translation plus systematic corruptions — swapped
sides of a "times" relation, inverted rate, off-by-one count, base fee attached to the wrong
term, or numerator/denominator flipped. The wrong answers are grammar errors, not arithmetic
errors.

## Teaching philosophy observed

- The chapter frames word problems as a LANGUAGE skill: build an instinct for words→math, with
  algebra itself assumed from earlier chapters.
- Variable-choice is treated as a decision with cost consequences, demonstrated by solving the
  same problem twice from different anchors and comparing effort — not as an arbitrary
  convention. Explicit meta-lesson: think before assigning x.
- Deliberate wrong-solution pedagogy: the mixture example presents a fully-worked WRONG solution
  first, names the exact false assumption (total volume frozen), then rebuilds correctly. The
  misconception is confronted, not just avoided.
- Answer-the-question-asked drilled repeatedly: solving for x is not the same as answering
  (larger number = 3x; the asked age; the asked count).
- Formula load kept minimal: one formula (work = rate × time); everything else is translation.

## Expert reasoning patterns (generalized)

1. Read for the QUESTION first; name the target quantity.
2. Choose the variable (usually the target; otherwise the base of the cleanest relations);
   write down what it denotes, with units/time.
3. Express every other quantity in the story AS an expression in that variable, walking the
   story chronologically.
4. Find the sentence asserting equality/total/comparison — that sentence IS the equation.
5. Solve mechanically.
6. Re-read the question; transform x into what was asked (largest of the run, the multiple,
   the future age).
7. Sanity-check against structural bounds (joint work faster than solo; totals conserved;
   percentages between 0 and 1).

## Misconceptions targeted (and why students hold them)

- **frozen-denominator (mixture)** — Students track only the pure substance when solution is
  added, keeping the old total. Formed because the added liquid is mentally filed as "the thing
  that fixes the numerator" — its simultaneous effect on the denominator is invisible in the
  story's narrative frame. Produces a specific under/over-shoot answer the test can plant.
- **averaging-times-for-joint-work** — Students average or add solo TIMES because time is the
  quantity named in the stem; rates (the additive quantity) are never mentioned in English.
  The fix is representational: convert to jobs-per-time first.
- **premature-answer (x ≠ asked quantity)** — Students stop at x. Formed by years of homework
  where "solve for x" WAS the task. The test exploits it by asking for the companion quantity
  and planting x's value as a choice.
- **relation-direction-reversal** — "A is 3 times B" encoded as 3A = B; "k less than B" as
  k − B. Formed by transcribing words in reading order instead of parsing the relation.
- **off-by-one on 'first unit priced differently'** — Charging the special rate on all n units
  or the regular rate on n instead of n−1. Formed because the two-tier structure must be
  noticed, and the single-rate schema is the default.
- **time-shift applied to one actor only** — In age problems, shifting only the actor named in
  the future clause. The relation "will be twice as old" grammatically attaches to one person,
  hiding that both age.
- **new-variable reflex** — Introducing a letter for every unknown noun, yielding one equation
  in two unknowns and a dead end. Formed in school units on systems where two variables were
  always wanted.

## SAT patterns claimed (mark unverified until checked vs bank/official)

- unverified-claim: A large share of word items are "which equation/expression represents…"
  (translation-only, no solving) with grammar-corruption distractors.
- unverified-claim: Interpretation items ("what does the 9 represent in this equation?") pair
  with work-rate and linear-model stems.
- unverified-claim: Mixture/percent-concentration items are recurring and standard on the
  digital SAT (author flags them as a classic chemistry-flavored family).
- unverified-claim: Pursuit/catch-up with piecewise rates appears at the hard end.
- unverified-claim: "Remove items to hit a target percentage" (both numerator and denominator
  shrink) is a tested variant of the mixture invariant.
- unverified-claim: Two-part fee structures (first-mile pricing, base + per-bedroom) are a
  staple translation shape.

## Prerequisite edges implied

- linear-equation solving (mechanics assumed, ch. earlier) → all of this chapter
- percent-as-decimal-multiplier → `percent-split-encoding`, mixture items
- rates/ratio chapter (ch. 10) → work-rate and per-unit translation here
- fraction arithmetic → `clean-multiple-variable-choice` motivation, work-rate sums
- this chapter → systems-of-equations word problems, quadratic word problems (later chapters)

## Difficulty escalation observed

Direct one-relation translation → two relations chained through one variable → time-shifted
relations → percent splits → two-tier pricing (off-by-one) → piecewise accumulation/pursuit →
mixture with changing totals → joint work-rate → interpretation-of-parameter items and
symbolic-answer forms (answers as expressions in m, r, k — no numbers anywhere).

## What this source does well / poorly

- Well: variable-choice as an explicit taught decision (rare); wrong-solution-first on the
  mixture trap; exercise distractors are pure translation-grammar corruptions, ideal evidence
  for a misconception-keyed distractor taxonomy; strong coverage of symbolic-answer items.
- Poorly: the phrase→structure dictionary stays implicit (learned by osmosis across examples,
  never tabulated — our product should make it explicit and diagnosable); no bar-model/visual
  scaffold for weaker students; work-rate gets one formula and one example before hard
  exercises; no Desmos/graphing leverage mentioned anywhere in the chapter even where
  equation-vs-equation intersection (pursuit) would be a natural fit — our built-in Desmos can
  cover that gap.
