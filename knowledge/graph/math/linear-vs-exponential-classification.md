---
id: linear-vs-exponential-classification
section: math
domain: problem-solving-data-analysis
skill: exponential-model-anatomy, linear-function-word-problems
difficulty_span: [easy, hard]
prereqs: [percent-as-multiplier, exponential-model-anatomy]
unlocks: [data-display-decoding]
related: [growth-factor-vs-rate, successive-percent-rebasing]
---

# Same amount or same multiple? Classifying change over time

## What it is
Every change-over-time story is one of two species: linear, where a fixed AMOUNT is
added or removed per step (straight line, constant differences), or exponential,
where the value is multiplied by a fixed FACTOR per step (curve, constant ratios).
Classification is a single question — "each period, does the same amount change, or
the same multiple?" — asked before any computation. It settles model family,
eliminates half the answer choices on model-matching items, and is itself directly
tested from verbal descriptions, tables, and graph shapes.

## Why it exists / why the SAT tests it
The exam tests whether students read the STRUCTURE of change rather than pattern-
matching on surface words. Classification items appear as low-computation multiple
choice (increasing/decreasing × linear/exponential four-ways), as pick-the-equation
stems whose choice sets pair two linear twins with two exponential twins, and as
table items (constant differences vs constant ratios). The deep trap: wording cues
correlate with, but do not determine, the family — "rate" often means slope but
"constant percent rate" is exponential, and a percent change computed off the
INITIAL value each period is linear. Students leaning on keywords get farmed.

## Mental model
**Locate the change clause and interrogate it twice: (1) amount or factor? (2) of
what — the current value or a fixed anchor?** Add/subtract the same number each
step → linear. Multiply by the same factor (any "N% of the current value,"
"doubles," "halves") → exponential. Percent-of-the-INITIAL each period → a constant
amount in disguise → linear. Two follow-up signatures: tables — subtract
consecutive outputs (constant? linear) then divide them (constant? exponential);
graphs — straight line vs a curve that accelerates (growth) or decelerates toward a
floor (decay).

## Expert reasoning process
1. Find the sentence that describes one period's change; ignore everything else
   first.
2. Amount or multiple? "increases by 200 each year" vs "increases by 4% each year"
   / "doubles every decade."
3. Percent of WHAT? Current value → exponential. Initial/fixed value → linear
   (constant amount). Fixed-amount withdrawals → linear regardless of percent
   vocabulary elsewhere.
4. Direction: growing or shrinking? Combined with step 2–3 this fully classifies
   increasing/decreasing × linear/exponential and usually kills 2–3 choices.
5. For tables: run differences, then ratios, on consecutive equal-step rows.
6. For graphs: straight vs curved; for curves, which tail flattens — decay flattens
   forward (fast drop, long tail), growth flattens backward. Narrate the first
   three steps of the process to pick a shape; never appraise curves holistically.
7. Only after classification, build the model ([[exponential-model-anatomy]] or the
   linear slope-intercept machinery) and check f(0) against the story.

## Misconceptions
- **percent-implies-exponential** — any percent-per-period story gets modeled
  exponentially, including percent-of-initial (linear) plans. Forms because
  "percent + repeated" pattern-matches to the newly learned exponential schema; the
  discriminating question (percent of what?) is never asked. Classic stems:
  withdrawal/savings plans distinguishing percent-of-current-balance from
  percent-of-initial-deposit from fixed-amount — three "feels like repeated
  decrease" stories, only the first exponential.
- **rate-means-slope** — any phrase containing "rate" triggers a linear model,
  because rate was taught as slope. "Constant percent rate" is exponential; the
  wording contrast must be made explicit.
- **percent-as-addition** — "grows 2.4% per year" rendered as +2.4 (or +0.024t):
  a linear model wearing percent-derived coefficients. Forms because school percent
  work is percent-of-a-fixed-number; the moving base was never internalized.
  Upstream fix lives in [[percent-as-multiplier]].
- **exponential-symmetry** — expecting exponential graphs to mirror like parabolas
  or both ends to blow up; produces wrong graph picks with the flat tail on the
  wrong side. Forms from parabola over-exposure.
- **keyword-classification** — the general disease: classifying from vocabulary
  ("doubles" heard as "+2"; "linear growth" assumed whenever numbers look small)
  instead of interrogating the change clause. The others are special cases; this is
  the habit to replace.

## Diagnostic indicators
- Picks the exponential model for a percent-of-initial plan (percent-implies-
  exponential): the distractor pair a(1−r)ᵗ vs a − (ra)t isolates it exactly.
- Picks linear for "constant percent rate" stems (rate-means-slope).
- Picks a + 0.024at or similar (percent-as-addition): linear twins with
  percent-derived coefficients are the designed catch.
- Graph items: picks the mirror-image curve (symmetry) — flat tail on the wrong
  side.
- Verbal probe: ask "what happens between year 3 and year 4?" — a masterful answer
  computes from year 3's value; a broken one recomputes from year 0's value or adds
  a fixed number, revealing the held model regardless of their multiple-choice pick.
- Table items answered by vibes ("the numbers grow fast, so exponential") without
  differences/ratios run: keyword-classification generalized to magnitudes.

## Remediation pathways
- **percent-implies-exponential**: the three-plan contrast set (percent-of-current /
  percent-of-initial / fixed amount), each unrolled three periods in a table. The
  middle one producing equal increments is the revelation. Revisit
  [[successive-percent-rebasing]] if the moving base itself is fuzzy.
- **rate-means-slope / percent-as-addition**: minimal pair — "grows by 200 per
  year" vs "grows by 2% per year," both unrolled from 10,000. The second's
  increments visibly grow. Then the wording table: by-N → linear; by-N% /
  doubles/halves → exponential.
- **symmetry**: narrate decay stepwise (halving removes a lot early, ever less
  later) and sketch; the asymmetry becomes physical, not memorized.
- **keyword-classification**: classification-only drills — 10 stems, label family
  and direction, zero computation, including deliberately cue-conflicting stems.

## Mastery criteria
Student classifies from verbal description, table, and graph; correctly sorts the
three withdrawal-plan variants; and can state the discriminating question in their
own words. Proof: a clean classification-only set including at least one
percent-of-initial trap and one constant-percent-rate stem, plus one table item
where they demonstrably ran differences AND ratios.

## Difficulty ladder
- **easy**: classify from a clean verbal cue ("increases by 5 each week" vs
  "doubles each week"); straight-vs-curved graph identification.
- **medium**: classify from tables (equal input steps; run differences then
  ratios); increasing/decreasing × family four-way items; percent-as-addition
  distractor pairs.
- **hard**: percent-of-initial linear traps; mixed stems where one quantity in the
  story is linear and another exponential; choose-the-graph with vertical shifts;
  classification feeding directly into model construction with slot traps
  ([[exponential-model-anatomy]]).
- **hardest (composed)**: linear and exponential models compared over an interval
  (which exceeds which, intersection bounds); scatterplot fit-family selection from
  cloud shape ([[data-display-decoding]]) — data that "bends" wanting b^t
  rather than mt + b.

## Teaching notes
- **Struggling**: two jars, same story, one gets +$2 each day and one gets doubled
  each day. Unroll a week by hand. The families are experienced before they're
  named. Keep percent out of it until add-vs-multiply is solid.
- **Average**: install the two-question interrogation (amount or factor? of what?)
  as a pre-computation ritual; drill the wording contrasts explicitly ("by 5" /
  "by 5%" / "by 5% of the original").
- **Advanced**: the withdrawal-plan trio, table forensics with unequal steps
  (normalize step first), and mixed linear-exponential comparison stems.
- **1500+**: Desmos family test — type both candidate models against the described
  values or table; the wrong family visibly misses points. Classification should
  take under ten seconds from a verbal stem; the payoff is harvested on the
  model-construction items downstream.
