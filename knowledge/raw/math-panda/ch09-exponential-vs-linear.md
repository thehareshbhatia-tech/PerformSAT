# Raw notes — Math source B, Ch. 9: Exponential vs. Linear Growth

Source scope: chapter opener (right half of p0053) + 7 worked examples + growth/decay graph discussion + linear contrast + 2 exercise sets (~16 + ~17 items), pages p0053–p0058 scans.
Section/domain: straddles Advanced Math (nonlinear functions, equivalent forms) and PSDA (percent-based growth); classification questions also feed linear-vs-exponential PSDA items.

## Concepts taught (candidate nodes)

- `compound-change-as-repeated-multiplication` — Growing by p% repeatedly means multiplying by the same factor each period; deriving period 1, 2, 3 values exposes the exponent pattern and yields initial × factor^t without memorization.
- `exponential-form-anatomy` — In value = a·b^t: a is the value at t = 0 (the coefficient), b is the per-period multiplication factor (the base). Growth when b > 1, decay when 0 < b < 1. Same equation family for both.
- `decay-factor-as-remainder` — A decay base like 0.6 means 60% REMAINS each period (a 40% loss), not "loses 60%." The base is always the kept fraction — direct reuse of the percent chapter's remainder idea.
- `scaled-exponent-form` — The generalized model value = a·b^(t/k), where k is the time required for one full factor-of-b change. The book flags this as the one form worth memorizing. When the change interval isn't 1 time-unit, k encodes it.
- `exponent-unit-consistency` — t and k must be in the SAME time unit. If the change interval is given in months but t is in years, k must be converted (8 months = 2/3 year) before building the equation. This is the chapter's most-drilled gotcha.
- `exponent-rewriting-to-reinterpret` — Algebraically re-shaping the exponent changes the described interval without changing the function: b^(3t) = (b^3)^t (per-unit factor becomes b³), b^(3t) = b^(t/(1/3)) (factor-b change every 1/3 unit). Equivalent-form questions live entirely on this move.
- `exponential-vs-linear-classification` — Linear = constant amount added/removed per period (straight line); exponential = constant factor per period (curve that accelerates in growth, decelerates in decay). Classify by asking "same amount each time, or same multiple each time?"
- `growth-decay-graph-shapes` — Exponential growth: slow creep then steep climb; exponential decay: fast drop then long flattening; linear: constant slope either way. Book claims shapes are directly tested (unverified-claim; plausible).
- `anchored-vs-current-base-trap` (boundary node) — A change described as a percent OF THE INITIAL value each period is LINEAR (constant amount), not exponential; only percent-of-current compounds. This subtlety appears in exercises as a classification trap.

## Teaching philosophy observed

- Explicitly builds on the percent chapter (opening sentence declares the dependency): factor = (1 ± p/100) is assumed vocabulary. Clean prereq edge, deliberately architected.
- Derivation-before-formula: the compounding pattern is unrolled year by year until the exponent pattern is visible, and only then generalized. Same for why k works: the exponent t/k is walked from 0 to 1 to show k is the time per factor-change — the formula is proven, not just issued.
- Exactly one memorization demand in the whole chapter (the a·b^(t/k) form), framed as non-negotiable. Everything else is reconstructible.
- Contrast pedagogy: growth vs decay presented as the same equation with a base on either side of 1; exponential vs linear presented as multiply-vs-add on the same story (money added to vs removed from a savings jar). Minimal-pair teaching.
- Paired examples that differ in ONE detail (same story with t in months vs t in years) to isolate the unit-consistency lesson.

## Expert reasoning patterns (generalized)

1. **Build models by identifying (initial, factor, interval) as three separate slots.** Initial → coefficient; percent change → factor via the percent-multiplier rule; interval → k in the exponent denominator (in t's units). Never pattern-match on surface numbers.
2. **Read decay bases as "fraction kept."** 0.92 → keeps 92%, loses 8% per period. Translate before touching answer choices.
3. **Check exponent units before anything else on interpretation items.** If the exponent is t/k, ask: what unit is t in? Then k is in that unit, and the sentence "factor b every k [units]" writes itself. When answer choices differ only in exponent structure (t·k vs t/k vs t/k-with-conversion), the units decide alone.
4. **Rewrite exponents to match the asked interval.** If asked for the per-year description of b^(3t), compute b³; if asked per-third-of-a-year, rewrite as t/(1/3). Multiplying/dividing the exponent is trading factor size against interval length.
5. **Classify before computing** on linear-vs-exponential items: locate the change clause and test "amount or factor? based on current or initial?" — four-way decision that settles increasing/decreasing × linear/exponential immediately.
6. **For find-the-original items in growth contexts, divide by the factor** — the percent chapter's asymmetry rule recurs: never apply the opposite percent to reverse a change.
7. **On table-driven items, compute the ratio between consecutive outputs** to extract the factor and the step to extract k.

Desmos: not referenced in this chapter. (For our product: plotting a·b^(t/k) candidates against 2–3 known data points, or checking f(4)≈19 style claims numerically, is a legitimate Desmos-native shortcut we can teach even though this source doesn't.)

## Misconceptions targeted (and why students hold them)

- **raw-k transplant** — Using the stated interval number directly as k (writing t/8 because "every 8 months") when t is defined in different units. Forms because the number is visually available and unit definitions live in a sentence students skim. Trap design: the un-converted k is always a choice; conversions both directions (months→years, minutes→seconds) appear.
- **base-as-amount** — Reading b = 0.92 as "loses 0.92 thousand per year" or "0.92 percent" instead of "×0.92 per year." Forms because linear schemas (number = amount) are older and stronger than multiplicative ones. Distractor sets systematically offer amount, percent, and factor readings of the same number.
- **coefficient-base swap** — Building 2(500)^t instead of 500(2)^t for a doubling population. Forms because "500 and doubling" gives two numbers and no schema for which slot each fills; students who memorized y=ab^t positionally without meaning swap them under pressure.
- **percent-vs-factor blur** — Confusing "increases 5% per period" with "×5" or "+5"; also "grew by 160%" → ×1.6 (should be ×2.6). The percent chapter's excess-vs-multiple confusion recurring inside exponents.
- **reverse-percent recurrence** — Given this-period value and "p% more than last period," multiplying by (1−p/100) to go back. Same asymmetry misconception as ch. 8, now wrapped in growth language.
- **initial-base linearity blindness** — Assuming any percent-per-period story is exponential. If each period adds a percent OF THE ORIGINAL value, growth is by a constant amount → linear. Forms because "percent + repeated" pattern-matches to exponential once students learn it; the discriminating question (percent of WHAT?) is never asked.
- **exponent-arithmetic errors on equivalent forms** — Believing b^(3t) means factor b every 3 years (it's factor b³ each year / factor b every 1/3 year). Forms because the exponent's multiplier reads like an interval when it's actually a frequency.

## SAT patterns claimed (unverified-claim; verify against bank/official)

- Graph-shape recognition of exponential growth vs decay is directly tested.
- Model-construction items keep (initial, factor, interval) sets constant across choices and permute only slot placement and exponent structure — the discrimination is purely structural understanding.
- Interpretation items for a·b^(t/k) constants parallel the linear-interpretation family (ch. 7) but add the unit-consistency axis.
- Equivalent-forms items ("which rewriting displays [the value at t=0 / the per-n-period factor] as a constant or coefficient") are a recurring Advanced-Math family.
- Classification items (increasing/decreasing × linear/exponential) appear in low-computation multiple choice, sometimes from verbal description alone, sometimes from tables.

## Prerequisite edges implied

- `compound-change-as-repeated-multiplication` ← percent-change-multiplier + multiplier-chaining (ch. 8, explicitly declared).
- `scaled-exponent-form` ← exponent rules (power of a power, fractional exponents).
- `exponent-rewriting-to-reinterpret` ← exponent laws fluency; unlocks equivalent-forms question family.
- `exponential-vs-linear-classification` ← slope-as-unit-rate (ch. 7 linear rate concept) + exponential-form-anatomy.
- Unlocks: compound interest contexts, half-life/doubling-time items, exponential regression interpretation.

## Difficulty escalation observed

easy: recognize/construct a·b^t with unit-consistent everything; interpret a and b directly → medium: decay-remainder readings; k ≠ 1 intervals with consistent units; find-original by dividing; classification from clean descriptions → hard: unit conversion inside the exponent (months↔years, minutes↔seconds with k=60 style); equivalent-form rewrites (b^(3t), t/k with k fractional, n−4 vs n+4 exponent shifts); constant-vs-coefficient display questions; initial-base linear traps; extracting (r, n) pairs from tables where multiple consistent parameterizations exist; composed forms like a(b)^3(b)^n. Boundary items mix percent asymmetry + exponential structure + unit conversion in one stem.

## What this source does well / poorly

- Well: the derive-then-generalize arc for both the basic and the t/k form builds durable understanding; the unit-consistency gotcha gets a dedicated minimal-pair example sequence; percent→exponential dependency is architecturally explicit; the growth/decay and linear/exponential contrasts are taught as minimal pairs, which is exactly how a tutor should diagnose confusion.
- Well: exercises cover the full structural-permutation trap space (slot swaps, exponent forms, percent/factor/amount readings) — a ready-made distractor taxonomy for our item authoring.
- Poorly: no compound-interest financial framing (a common official skin); the initial-base-linearity trap appears only in exercises, never taught explicitly in prose; no numeric/graphical verification strategy (plug in t=0, t=k to sanity-check a model — a cheap habit worth teaching, Desmos-friendly); half-life vocabulary absent; no discussion of WHERE these appear in a module or their typical difficulty band.
