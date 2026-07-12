---
id: linearity-constant-rate-model
section: math
domain: algebra
skill: linear-cost-equation-setup, linear-cost-model
difficulty_span: [easy, hard]
prereqs: [linear-equation-balance-peeling]
unlocks: [linear-model-four-slots, slope-as-rate-of-change, interpret-linear-parameters, variable-definition-discipline]
related: [exponential-model-anatomy]
---

# Linearity is constant rate: start + (change per unit) × units

## What it is
Two quantities are linearly related when one changes by a FIXED amount for each unit change in the other. Every linear situation, no matter the costume, has the same anatomy: a starting amount plus a repeated per-unit change — total = start + rate × count. Students already understand this from lived experience (double the hours, double the pay); the skill is recognizing that intuition and giving it notation.

## Why it exists / why the SAT tests it
Linear modeling is the single most-tested idea in the Algebra domain: build the model from a story, evaluate it, invert it, interpret it. The College Board is probing modeling literacy — can the student see the constant-rate structure inside prose — rather than equation mechanics. Write-the-model items appear from easy through hard; what escalates is how deeply the linearity is buried in the story, not the algebra.

## Mental model
**Three costumes, one body.** Every linear scenario is one of three structural cases:
1. **Flat only** — a fixed amount, usage irrelevant (total = b).
2. **Rate only** — pure per-unit accumulation from zero (total = m·n).
3. **Rate on top of a floor** — per-unit accumulation atop an entry amount (total = b + m·n).

Hold the model as a words-formula before any symbols: "what you start with, plus what each unit adds, times how many units." Decreasing situations subtract: start − rate × count. The words-formula is the thing to retrieve under pressure; y = mx + b is just its uniform.

A supporting visual: an uncomputed pattern table. Rows for count 0, 1, 2, … n with the computation left unevaluated (b, b + m·1, b + m·2, …) — the nth row generalizes itself, and the variable row is just "the pattern with n where the count goes."

## Expert reasoning process
1. Identify the two coupled quantities and which drives which (the count vs. the total).
2. Extract three answers from the story before any algebra: What's there at zero? What does each unit add or remove? Does the total grow or shrink? Those three answers ARE the model.
3. Direction sanity-check against the story's physics, not its verbs: "loses," "drains," "depreciates" ⇒ the total must shrink as the count grows, so the rate term subtracts.
4. If two rates act simultaneously (inflow and outflow) or the rate's time unit differs from the question's window (per week vs. months), net and reconcile into ONE rate on ONE unit before writing anything.
5. Write the words-formula, then transliterate to symbols with letters that echo the quantities (w for weeks, C for cost) — reserving x/y for stories invites losing track of meanings.
6. Verify with a two-row table: plug count = 0 (should give the start) and count = 1 (should give start ± one rate).
7. Expect decoys: stories sometimes include a number the model never uses. Using every given is NOT a validity check. (unverified-claim on official frequency of decoy givens.)

**Desmos vs. algebra:** the modeling itself is untouchable by any calculator — a student who can't write the model gets nothing from Desmos. Once the model exists, Desmos becomes the arithmetic executor (define the function, read values) and the verifier (a table of plotted points confirms the constant step). Teach: brain builds the model, Desmos runs it. The step-2 extraction is always pencil-and-eyes work.

## Piecewise accumulation and pursuit
When the rate CHANGES at a known breakpoint (walks for 2 hours, then jogs; fills at one rate until the pump is added), the model doesn't break — it segments. Accumulate one linear chunk per rate-regime and glue them at the breakpoint: total = rate₁ · t₁ + rate₂ · (remaining time). The one modeling decision that items are built around is the second segment's count: it is what's LEFT of the time after the breakpoint, never the whole time — a total of T hours with a break at t₁ gives the second regime T − t₁ hours, and writing rate₂ · T instead is the planted corruption in which-expression choice sets.

Catch-up and pursuit stories are two accumulation expressions EQUATED: write each actor's total independently — own start, own rate, shared clock — and set them equal ("same total when" / "catches up when" is the equation sentence). The meeting moment is literally where the two lines cross, so this is a system solved as intersection ([[linear-system-solution-as-intersection]]): plot both accumulation expressions in Desmos and read the crossing when the algebra is uninviting. A head start enters as a bigger start value or an earlier clock, never as a rate edit.

## Misconceptions
- **rate-constant-slot-swap** — putting the per-unit number where the start belongs or vice versa, especially when both arrive as letters. Forms because y = mx + b is memorized as positions rather than meanings (per-unit change vs. amount-at-zero); answer sets enumerate all slot arrangements to harvest it.
- **sign-of-change-flip** — adding the change for a decreasing quantity. Forms because story verbs get skimmed; the word "loses" appears once while the numbers appear prominently.
- **term-order-anxiety** — believing b + mx and mx + b are different models, so the "right" answer looks wrong. Forms from pattern-matching to the memorized shape; cured by commutativity plus meaning.
- **must-use-every-number** — force-fitting a decoy given into the model, or treating an unused number as proof of error. Forms because school problems are minimally specified and real items sometimes aren't.
- **unit-mismatch-blindness** — applying a per-week rate to a count of months, or modeling only one of two simultaneous rates. Forms from skipping the reconciliation step; this is the designed trap of hard-band net-change items.

## Diagnostic indicators
- rate-constant-slot-swap: picks the structurally-correct choice with m and b exchanged; explain-back reveals positional language ("the first number goes with x").
- sign-of-change-flip: picks the +rate variant on decreasing stories; error clusters on depreciation/drainage contexts specifically.
- term-order-anxiety: hesitation or answer-changing when the correct choice lists the constant first; may pick a wrong choice whose term order matches the memorized shape.
- must-use-every-number: wrong answers that incorporate the decoy; long time-on-question hunting for where the extra number "goes."
- unit-mismatch-blindness: answers off by exactly the unit ratio (×4, ×12, ×60); wrong only on two-rate or mixed-unit stems.

## Remediation pathways
- rate-constant-slot-swap: semantic relabeling — cover the equation, ask "which number is there before anything happens? which number repeats?" Then attach those roles to the slots. If it persists, rebuild with uncomputed pattern tables where the roles are visibly different columns.
- sign-of-change-flip: direction ritual — before writing, say which way the total moves as the count grows; check the finished model at count = 1 against the story.
- term-order-anxiety: one demonstration that b + mn and mn + b evaluate identically at two counts; name commutativity.
- must-use-every-number: show a worked item with a decoy, solved correctly while ignoring it; state the principle explicitly.
- unit-mismatch-blindness: pre-write checklist item — "one rate, one unit" — netting and converting BEFORE the words-formula. Prereq to revisit if broken: [[proportion-setup-template]].

## Mastery criteria
Given fresh stories across all three structural cases (including decreasing, two-rate, and decoy-laden), the student writes correct models on first attempt and can point to which phrase supplied the start and which supplied the rate. Evidence: consistent accuracy on write-the-model items at medium+, with no slot-swap or sign distractor picks; can also generate a story FROM a given model (the inverse task is the real proof).

## Difficulty ladder
- **Easy:** pure-rate evaluate; rate + constant, choices enumerate structures.
- **Medium:** write and evaluate; negative rates; given the total, solve backward.
- **Hard:** two simultaneous rates needing netting; rate given per one unit, question in another; linearity implied by data ("increases by the same amount each year" plus two data points) rather than stated; off-by-one boundaries ("each additional unit after the first" — composes with [[variable-definition-discipline]]); piecewise accumulation across a breakpoint and pursuit/catch-up stories where two actors' accumulations are equated. Module 2 Hard = more inference before the model exists, never uglier numbers.

## Teaching notes
- **Struggling:** start from their lived proportional intuition (pay per hour) and the three-costume story; build models only from uncomputed pattern tables until the words-formula is automatic. No symbols until the words version is reliable.
- **Average:** drill the three-question extraction (at zero? per unit? direction?) as a ritual; introduce decoys early so "use everything" never calcifies.
- **Advanced:** two-rate netting and unit reconciliation; data-implied linearity (two points → rate by difference — bridges to [[slope-as-rate-of-change]]).
- **1500+:** speed comes from classifying the costume in one read; coach the inverse skill (story from model) and hard-band boundary/off-by-one designs where the count expression itself needs thought.
