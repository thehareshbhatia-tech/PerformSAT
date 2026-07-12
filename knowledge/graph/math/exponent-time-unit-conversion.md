---
id: exponent-time-unit-conversion
section: math
domain: advanced-math
skill: build-exponential-model, interpret-exponential-parameters
difficulty_span: [medium, hard]
prereqs: [exponential-model-anatomy, proportion-setup-template, unit-cancellation-chain]
unlocks: []
related: [unit-magnitude-sanity-check, growth-factor-vs-rate]
---

# Time units inside the exponent

## What it is
The exponent of a·b^(...) must count CHANGE INTERVALS, so when the rate is stated
per one time unit but the function's input variable is measured in another, the
exponent needs a conversion: a 7%-per-year rate with input m in months gives
(1.07)^(m/12); a monthly process expressed as a function of years t gives exponent
12t. The same machinery handles non-calendar intervals ("every 4 years" → t/4;
"every 18 minutes" as a function of hours h → 60h/18). t and k in b^(t/k) must be
in the SAME unit — that consistency requirement is the entire skill.

## Why it exists / why the SAT tests it
This is the standard hard-end escalation of exponential model items, appearing in
both directions (coarser and finer units) and with non-standard periods. Choice sets
differ ONLY in exponent structure — t·k vs t/k vs converted variants — so the units
decide alone. It is also the cluster's nastiest trap zone because the natural
verification move has a blind spot: substituting one full rate period into the
exponent should yield 1, but the INVERTED conversion also passes related checks
depending on setup, so unit mismatches get caught while upside-down proportions
survive. Directional reasoning is the only reliable backstop.

## Mental model
**The exponent is a count of completed multiplications, and you must feed it the
counting unit the rate was quoted in.** Ask: "after the input variable advances by
one full rate period, has the exponent advanced by exactly 1?" Build the conversion
as a proportion between the two time expressions ([[proportion-setup-template]]),
or as a one-hop unit chain ([[unit-cancellation-chain]]) applied inside the
exponent. Then read the result as a sentence: (1.07)^(m/12) says "grows 7% every 12
months"; (1.07)^(12t) says "grows 7% twelve times per year." A coefficient inside
the exponent changes the CADENCE of the growth statement, never the rate.

## Expert reasoning process
1. Pin the input variable's unit from its definition sentence (not from the rate
   sentence) — students skim exactly this line.
2. Pin the rate period ("per year," "every 8 months," "every 18 minutes").
3. Write the exponent so that one full rate period of input advances it by exactly
   1. Convert with a proportion or a one-hop chain; for b^(t/k) forms, convert k
   into t's units (8 months = 2/3 year when t is in years).
4. Run the evaluates-to-one check: substitute one full rate period; the exponent
   must equal 1. KNOW ITS BLIND SPOT: the reciprocal setup can also pass — so
   additionally reason direction: finer input unit (months instead of years) means
   MORE input steps per factor application, so the exponent per input unit shrinks
   (m/12, not 12m). This is [[unit-magnitude-sanity-check]] running on an abstract
   coefficient.
5. Read the final expression back as a growth sentence; if the sentence contradicts
   the story's cadence, the conversion is inverted.
6. Desmos verification: define both candidate functions and evaluate each at one
   full rate period — the correct one reproduces exactly one growth step (f(rate
   period) = a·b). One line, no rounding.

## Misconceptions
- **inverted-exponent-conversion** — multiplying by 12 when dividing is needed (12t
  vs t/12), because "12 months per year" suggests ×12 regardless of direction.
  Dangerous specifically because the standard substitution check cannot expose it;
  the student verifies and STILL ships the wrong answer, with confidence. This is
  the inverted-conversion-passing-the-feel-check archetype: only magnitude/direction
  reasoning catches it.
- **raw-k-transplant** — using the stated interval number directly as k ("every 8
  months" → t/8) when t is defined in different units (years). The number is
  visually available; the unit definition lives in a sentence students skim. The
  unconverted-k form is always a choice.
- **cadence-rate-conflation** — believing (1.07)^(12t) grows FASTER than 7% per
  year in rate rather than applying 7% more often; or reading b^(3t) as "every 3
  years." The exponent coefficient reads like an interval when it's a frequency.
  Shared with [[exponential-model-anatomy]]'s equivalent-forms trap.
- **check-worship** — treating the evaluates-to-one check as proof. The student
  learned the ritual without its blind spot; inverted setups sail through. Meta-
  misconception about verification itself.

## Diagnostic indicators
- Picks the reciprocal exponent (12t where m/12 is keyed): inverted-conversion —
  flag any choice pair differing only by exponent reciprocity; which one they pick
  is the whole diagnosis.
- Picks t/8 with t in years for an 8-month interval (raw-k-transplant): the
  unconverted number is the signature.
- Explains (1.07)^(12t) as "7% every 12 years" or "faster than 7%" (cadence
  conflation) — verbal probe: "say this equation as a sentence."
- Claims to have checked, and the work shows the substitution check on an inverted
  answer (check-worship): remediate the verification model, not the algebra.
- Slow correct answers with a written proportion = healthy; fast answers matching
  surface numbers = transplant risk even when correct.

## Remediation pathways
- **inverted-conversion**: install the direction question as mandatory: "input in
  months — do I need MORE input steps or fewer per factor application?" Anchor with
  one concrete row-count: after 12 months, the exponent must have advanced once, so
  m = 12 ⇒ exponent 1 ⇒ m/12. If the student can't hold direction abstractly,
  revisit [[unit-magnitude-sanity-check]] with concrete conversions first.
- **raw-k-transplant**: highlight-the-definition drill — before anything, underline
  the sentence that defines the input variable's unit; five reps make the skim
  impossible.
- **cadence-conflation**: the read-aloud fluency drill — translate exponent forms
  to sentences and back ((1.07)^(m/12) ↔ "7% every 12 months") until the cadence/
  rate distinction is vocabulary, not inference.
- **check-worship**: show the check passing on a wrong answer once. Disillusionment
  is the lesson; then supply the directional backstop as the second factor of a
  two-factor verification.

## Mastery criteria
Student converts in BOTH directions (coarser and finer input units) and for
non-standard periods; states the direction rationale before writing; runs BOTH
verification layers (substitute one period + direction reasoning); and reads any
exponent form as a growth sentence. Proof: one m/12-style item, one 12t-style item,
and one exotic-period item (t/4, 60h/18) all correct with articulated direction.

## Difficulty ladder
- **medium**: single conversion, standard calendar units, rate period = 1 unit
  (years-rate, months-input).
- **hard**: non-standard periods ("every 4 years," "every 18 minutes" vs hours);
  conversion stacked on a decay-remainder base (0.976^(t/3) style); interpretation
  items where the exponent structure must be read back into a sentence with the
  correct cadence.
- **hardest (composed)**: conversion + equivalent-form rewrite in one item
  (re-express a monthly model as an annual-factor model via b¹² =
  ([[exponential-model-anatomy]] rewrite machinery)); conversion inside
  compound-interest comparison graphs (unverified-claim: these appear as
  graph-reading rather than formula computation — verify against bank).

## Teaching notes
- **Struggling**: postpone this node until [[exponential-model-anatomy]] slots are
  automatic. Then teach ONLY via the concrete table: input column in months, tick
  off 12 rows, watch the factor apply once. The formula is a caption for the table.
- **Average**: the two-question ritual (what unit is the input? what's the rate
  period?) plus the evaluates-to-one check WITH its blind spot disclosed up front —
  teaching the check honestly builds trust and the directional habit together.
- **Advanced**: both directions, exotic periods, and the rewrite bridge
  (b^(12t) = (b¹²)ᵗ) connecting conversion to equivalent-forms items.
- **1500+**: Desmos two-candidate protocol — define both plausible functions,
  evaluate each at one full rate period, keep the one that reproduces a single
  factor step. Reason first, one-line check second, never round the base or the
  exponent coefficient mid-stream.
