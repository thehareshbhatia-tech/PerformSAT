# Raw notes — Source B (math-panda), Ch. 26: Statistics II
Section: math · Domain: Problem-Solving & Data Analysis · Pages studied: p0151 (right half = chapter opening) – p0158 (chapter ends before the answer-key chapter begins on p0158's right page)

## Concepts taught

- **sampling-as-stand-in** — you can't measure a whole population, so you measure a randomly chosen subset and let its statistics stand in for the population's. Randomness matters for two stated reasons: every member gets an equal chance of inclusion, and it suppresses systematic bias that would tilt the estimate.
- **sample-to-population-scaling** — best estimate of a population count = (sample proportion) × (population size). The workhorse computation of the chapter.
- **generalizability-boundary** — conclusions extend exactly to the population that was randomly sampled — no further and no narrower. Sample of Thai elephants → Thai elephants; sample of pilots over 45 → pilots over 45. A non-random sample generalizes to nothing.
- **margin-of-error-as-plausible-band** — an estimate ± its margin of error gives the interval where the true population parameter *plausibly* lies. "Plausible" ≈ likely/reasonable — outside the band isn't impossible, inside isn't guaranteed. Never computed on the SAT; always supplied.
- **moe-attaches-to-the-parameter** — the band is a statement about the population *mean/proportion only*, never about individual members. "Mean weight 145 ± 5" says nothing about any single member's weight, nor about what most members weigh.
- **moe-drivers** — margin of error shrinks with (1) larger sample size and (2) lower underlying variability/spread in the population; sample size is the controllable lever. (Why not always max the sample: cost/time.)
- **bivariate-data & line-of-best-fit** — scatterplots show paired variables; the fitted line is a linear model summarizing the trend. You'll never fit it yourself; you read it. Predicted value = the line's y at a given x; actual = the plotted point; the two differ, and questions live in that gap (over/under-prediction, count points above/below the line, prediction-minus-actual differences).
- **fit-line-equation-recovery** — building/selecting the line's equation from the picture via intercept sign and slope estimate from two points on the line (not data points); slope sign ties to association direction.
- **association-vs-causation** — positive/negative association = the variables move together/oppositely (line slope sign mirrors this). Observational data licenses only association claims; causal claims need a different study design.
- **random-assignment-for-causation** — to prove causation, subjects must be randomly *assigned* to treatment groups so that hidden traits (confounding variables) spread evenly across groups. Random *selection* controls whom results generalize to; random *assignment* controls whether "causes" is speakable. The two randomizations are independent dials.
- **confounding-variable** — a background trait correlated with both the grouping and the outcome that offers a rival explanation; the reason self-selected comparisons prove nothing.

## Teaching philosophy observed

- Motivates sampling with an impossibility argument (you physically cannot census a wild population) before any definition — need precedes machinery.
- Vocabulary is introduced in stem-language form: the chapter repeatedly teaches how the SAT *words* things ("plausible," "most appropriate conclusion," "largest population to which results can be generalized") rather than statistics-course terminology. This is test-pragmatics-first teaching.
- Wrong-answer anatomy is taught explicitly: worked examples walk all four options, classifying each rejection (asserts exactness; asserts impossibility; claims about individuals; over-generalizes). The instruction is really a taxonomy of illegal conclusion types.
- A deliberately homely anchor for the subtlest point (family mean weight ± band ⇒ nothing about grandma's weight) — abstract inference error made concrete through absurdity.
- Escalation within the chapter: sampling/estimates → margin of error → generalizability → scatterplot models → experimental design; each section's example is the exam's canonical use of that idea.

## Expert reasoning patterns (generalized)

- **Conclusion-legality scan.** For any "most appropriate conclusion" item, the expert doesn't evaluate options for truth — they scan for the *one* option phrased in legal inferential language: hedged ("plausible/likely"), about the parameter (mean/proportion, not individuals), and bounded to the sampled population. Options claiming exactness, impossibility, individual-level facts, universal member behavior, or causation are eliminated on form alone, often without reading the numbers.
- **Population tracing.** For generalizability items: identify precisely who was randomly sampled (the sampling frame), and pick the answer that names exactly that group. Both the wider group (all professors) and the narrower group (the 14 who said yes / the sample itself) are wrong; the answer is the frame.
- **Two-randomization audit.** For study-design items, check independently: was selection random (→ may generalize)? was assignment random (→ may speak of cause)? A study can pass either, both, or neither; each combination licenses a different conclusion strength. Self-selected group membership (students who chose to exercise; proximity-based library assignment) = confound = association-only.
- **Band arithmetic then interpretation.** MoE items are mechanically trivial (estimate ± MoE), and the entire difficulty is choosing the sentence that describes the band correctly. Experts compute the interval first, then apply the legality scan.
- **Predicted vs actual separation on scatterplots.** Same discipline as ch23's model-vs-data: the line answers "predicted," the dots answer "actual," vertical gaps answer "error/difference" questions (count dots strictly above/below the line; measure vertical distance at a given x).
- **MoE-driver reasoning without formulas.** Comparing two studies' margins of error: bigger sample ⇒ smaller MoE; more spread in the underlying quantity ⇒ bigger MoE. Direction-only reasoning; no computation exists to fall back on, so the causal levers must be memorized as directional facts.
- **Design-fix selection.** "How should the experiment be changed?" items reduce to: introduce the missing randomization (usually random assignment), never harder tests/bigger claims/same-conditions tweaks.

## Misconceptions targeted (and why students hold them)

- **estimate-is-exact** — reading a sample estimate as the true population value ("the proportion IS 0.35"; "the mean age IS 31"). Formed because arithmetic schooling trains single-answer certainty; statistics' hedged claims feel evasive. Distractors state the estimate as fact or claim a repeat sample "would" reproduce it.
- **band-covers-individuals** — converting "mean is plausibly 13.1–16.1" into "most/all members are between 13.1 and 16.1." The chapter's centerpiece misconception. It forms because the interval *looks like* a range of data values, and everyday language ("dolphins measure about 14.6 ± 1.5 inches") genuinely does refer to individuals. Trap options quantify over members ("the majority of…," "no member is outside…").
- **outside-band-impossible** — upgrading "not plausible" to "impossible." Forms from binary true/false habits; probability-flavored hedging has no school precedent. A dedicated distractor type ("it is not possible that the proportion exceeds 0.41").
- **overgeneralization** — extending results beyond the sampling frame (Malden houses → Massachusetts houses; sampled district's math teachers → all state teachers), or under-generalizing to just the respondents. Forms because students match answer options by topic rather than by frame; the frame is stated once, mid-stem, and easy to skim past.
- **bigger-sounding-sample-beats-frame** — preferring a larger sample from the *wrong* population over a smaller one from the right population. The book's repeat-study item is engineered so the tempting option is a big sample from the enclosing region. Root cause: "more data is better" absorbed without the "…from the target population" clause.
- **association-implies-causation** — concluding "X improves Y" from observational correlation. Formed because causal narrative is the mind's default compression of co-movement, and headlines model it daily. Distractors are causal or prescriptive phrasings; the correct option merely asserts association direction.
- **causal-direction-assumption** — even granting a causal reading, assuming which way it points (price↔density item: both causal directions offered as separate traps around the one association-only answer).
- **universal-member-claims from trends** — "any student who exercises more will improve" — quantifying a statistical tendency over every individual. Related to band-covers-individuals but appears in causal/association dress.
- **non-response / volunteer blindness** — treating a mail-back survey with 10% completion as representative. Forms because the respondent count can still be large; students weigh n over selection mechanism. (Taught via one exercise: the flaw is that responses weren't a random sample.)
- **moe-misattribution** — explaining a larger margin of error by sample composition percentages or by "a mistake was made," instead of by sample size/variability. Also: believing MoE from the *second* test must behave a certain way when only sample size changed (larger n ⇒ smaller MoE is the only licensed inference; means themselves are not ordered).

## SAT patterns claimed (mark: unverified-claim)

- Statistical-conclusion items are answered by phrasing legality more than by computation; exactly one option is inferentially legal. (unverified-claim)
- MoE is always given, never computed; SD is the stated measure of the variability driver but is itself never calculated. (unverified-claim)
- Recurring design templates from the exercise set: scale-up estimates (sample % × population, incl. "expected votes" differences and two-step at-least aggregations); pick-the-conclusion for proportion ± MoE and mean ± MoE; repeat-study design choice (which sample yields smaller MoE / stays generalizable); largest-population-generalizable (four nested-population options); best-fit line equation selection (slope sign × intercept pairs, 2×2 option grid); predicted-value readoff at an x (incl. between gridlines); predicted-vs-actual counts and differences; slope-of-fit-line closest-value; shift-the-data-set (add constant to every y ⇒ intercept moves, slope fixed) equation selection; which-group-to-survey-for-smallest-MoE (homogeneity reasoning: the group with least spread in the measured quantity); survey-method-flaw identification (non-random response); experiment-fix via random assignment; margin-of-error comparison between two samples explained by sample size only; cluster/floor sampling judged acceptable as random (building floors item: plausible-band conclusion still correct). (unverified-claim)
- Wrong-option taxonomy on conclusion items is stable across contexts: (a) exact-value claim, (b) impossibility claim, (c) individual-member claim, (d) out-of-frame generalization, (e) causal upgrade. (unverified-claim)

## Prerequisite edges implied

- sample-to-population-scaling ← percent-of computation, proportional reasoning
- margin-of-error-as-plausible-band ← sampling-as-stand-in; interval arithmetic (estimate ± band)
- moe-drivers ← standard-deviation-as-spread (ch25) for the variability driver
- generalizability-boundary ← sampling-as-stand-in
- bivariate fit-line work ← slope-intercept fluency (Heart of Algebra) + ch23 scatterplot literacy + slope-from-two-points
- association-vs-causation ← generalizability-boundary (both are conclusion-scope disciplines); random-assignment-for-causation ← association-vs-causation + confounding-variable
- fit-line-equation-recovery ← linear-equation-from-graph skills

## Difficulty escalation observed

1. Scale a sample proportion to a population count (pure arithmetic).
2. Read/select the legal MoE or estimate conclusion (single hedge discipline).
3. Generalizability frames and repeat-study/sample-choice design decisions (two competing considerations: frame + size).
4. Scatterplot model work: equation selection, predicted-vs-actual gaps, data-set transformations of the fit line.
5. Full study-design judgment: confound spotting, random-selection vs random-assignment distinction, method-flaw diagnosis, MoE-driver explanation — items where every option is a full sentence and the skill is inferential jurisprudence.

## What this source does well / poorly

- **Well:** cleanest treatment in the book of *conclusion legality* — it effectively hands students a rejection taxonomy for wrong answers, which is exactly how these items are engineered; the individual-vs-parameter confusion gets a memorable concrete anchor; the two-randomizations distinction (selection→generalize, assignment→causation) is drawn explicitly, which many prep sources blur; consistent stem-language coaching ("plausible," "most appropriate").
- **Poorly:** margin of error's probabilistic meaning is (rightly for SAT scope) black-boxed, but the book never warns that the band itself has a confidence level — a student asking "why this width?" gets nothing; residuals are used conceptually (predicted vs actual) but never named or formalized, and nonlinear-model scatterplots are absent; the variability driver of MoE is asserted without a visual; cluster sampling's acceptability (floors item) is asserted via the answer rather than discussed. Our node should keep the rejection taxonomy, name the vertical-gap concept once (prediction error), and add an explicit two-dial diagram: WHO you randomized (selection) vs HOW you grouped (assignment) → what you may conclude.
