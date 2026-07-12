# Misconception Index — tutor diagnostic backbone

664 named misconceptions across 163 nodes, each with its formation cause. Primary artifact for tutor prompt injection: when a student misses an item mapped to a node, the tutor loads that node's misconceptions + diagnostic indicators to name the ROOT CAUSE, not just mark wrong. Extends the skill-history/misconception injection shipped 2026-07-09.

Format: `node-id` → **misconception-id** — belief & why it forms (first sentence).

## Reading & Writing

**`charge-composition-under-modifiers`**
- **holistic-polarity-reading** — The student computes one overall feeling for the sentence and picks a word matching it, missing that a downgrader flipped the required word's charge.
- **double-negative-miscount** — The student notices negation but loses count when two or more stack ("it is hardly less ___ than"), landing on the wrong sign.
- **downgrader-blindness** — Overt "not" is processed but soft downgraders (less, smaller, diminished, fails to) are read as content words, not sign-flippers.
- **connector-double-count** — A reversal connector already used to set the idea-level direction gets counted again as a modifier, flipping the sign one time too many.

**`cross-text-relationship-taxonomy`**
- **disagreement-means-total-opposition** — Students assume disagreeing authors reject everything the other says, then eliminate concession-shaped correct answers ("accepts X but cautions Y") for not being negative enough.
- **agree-disagree-binary** — The student's relationship vocabulary has two values, so scope adjustments, reinterpretations, and complementary pairs get forced into one of them.
- **topic-level-relationship** — Naming the relationship at the topic's altitude ("both discuss coral bleaching") instead of the claims'.
- **hinge-skipping** — Naming a correct type but no hinge ("they partially agree") and stopping.
- **relationship-from-tone-alone** — Inferring "disagreement" purely because T2 sounds critical, when the criticism targets a method or scope, not the claim.

**`cross-text-response-prediction`**
- **plausible-real-world-response** — The student picks what a reasonable person would say (a common-sense critique, an obvious next question) rather than what THIS author's stated position licenses.
- **choices-as-starting-point** — Overloaded students dive into the choices hoping recognition will substitute for comprehension; each choice triggers a full re-read, multiplying load and time.
- **premature-elimination-under-uncertainty** — Discarding choices the student merely feels unsure about.
- **prediction-as-own-opinion** — A subtler variant of position simulation failure: the student predicts before choices (good ritual) but the prediction contains their own judgment of who's right, not the author's licensed response.
- **detail-trust-without-source-check** — Accepting a detail-bearing choice because the detail is familiar from the reading, skipping the which-text verification.

**`evidence-forced-word-meaning`**
- **single-meaning-belief** — Each word has the one meaning I learned.
- **sounds-right-heuristic** — Accepting or rejecting words by acoustic familiarity ("I'd never say it that way").
- **forced-prediction-habit** — Misapplying "predict first" by planting a low-confidence guess that then biases matching.
- **topic-association-trust** — Believing a word is supported because it belongs to the passage's subject matter or matches another word physically present nearby.
- **unknown-word-panic** — Freezing or guessing randomly because some *choices* are unknown, when identifying the right answer never requires defining the wrong ones.

**`point-vs-purpose-abstraction`**
- **purpose-equals-restated-point** — The student hunts for their main-point sentence verbatim among the choices and panics when nothing matches, because purpose choices are cast as rhetorical verbs plus generalized objects.
- **wrong-altitude** — Describing a real but subordinate detail's job as the passage's purpose, or inflating the whole purpose onto a local question.
- **extreme-verb-attraction** — Picking "proves/demolishes/mocks" choices because the passage argues *for* something, so strong verbs feel loyal to it.
- **verb-lexicon-gap** — The student cannot parse the choices at all: "qualify" read as "be eligible," "concede" unknown, "undermine" vaguely negative.

**`rhetorical-role-identification`**
- **function-equals-content** — The student answers "what the lines say," because every prior reading assessment rewarded restatement.
- **answer-lives-inside-the-lines** — Belief that the referenced range is self-sufficient (shared with [[context-window-discipline]], where its full treatment lives).
- **vivid-vehicle-literalism** — Treating an analogy or comparison as the topic itself ("compares offices to theaters") rather than as a device serving an explanation.
- **proximity-association** — Assuming two things mentioned near each other stand in the asserted relationship (items located IN a place read as belonging TO the institution).
- **stuck-ritual-guessing** — When WHY-analysis is missing, students substitute superstition (picking a "statistically lucky" letter).

**`second-sense-vocabulary`**
- **pos-reflex-elimination** — The student instantly kills the choice that "isn't even the right kind of word." Forms from fast grammatical pattern-matching, usually a *good* instinct.
- **prestige-bias** — On hard items the student picks the most sophisticated-looking word, believing hard questions have exotic answers.
- **prefix-literalism** — Trusting that a negative-looking prefix implies negative meaning.
- **familiar-sense-anchoring** — The word-probe variant of single-meaning-belief: the student *can* recite the presumption rule but under time pressure still verifies the familiar sense first and accepts it if it merely "fits okay." 

**`two-voice-separation`**
- **blended-voices** — The student merges both texts into one "what the passage says" summary, because all prior schooling treats a reading as a single source of truth; two texts on one topic feel like two paragraphs of one
- **memory-overconfidence** — The student answers detail-hinging questions from first-read recall.
- **spokesperson-collapse** — Subtler than blending: the student keeps two slots but fills the second with "disagrees with Text 1" instead of an independent position.
- **detail-first-reading** — Reading both texts at detail grain on the first pass, overflowing working memory before the main points are secured.

**`connector-logic-families`**
- **connector-blindness** — The student reads only content words and treats connectors as filler.
- **punctuation-is-decoration** — The student knows "however" flips direction but doesn't register that a colon or dash imposes an explanation relationship.
- **connector-equals-one-word** — The student memorized a short list (but, however, therefore) and misses functional equivalents: "although," "granted," "admittedly," a question that challenges the previous claim, scare quotes signali
- **reversal-scope-error** — The student correctly detects a reversal but reverses the wrong thing (flips the whole sentence's topic instead of the specific claim under contrast).
- **ambiguous-connector-freeze** — Words like "while," "as," and "since" belong to two families depending on use.

**`context-window-discipline`**
- **answer-lives-inside-the-lines** — The student believes the referenced range contains everything needed, because the question "told me where to look." Formed by line-reference mechanics on every prior test they've taken.
- **blank-line-tunnel-vision** — In words-in-context, reading only the sentence containing the blank.
- **unbounded-widening** — The overcorrection: rereading the entire passage for every question.
- **forward-only-reading** — Widening the window only downward, because reading backwards feels unnatural.

**`distractor-species-taxonomy`**
- **wrong-answers-are-random** — "Reading misses are just how I read; the wrong ones were tricky." Formed because Reading feedback feels less rule-governed than math or grammar.
- **plausibility-is-support** — Judging choices by whether they COULD be true rather than whether the text establishes them.
- **elimination-by-comparison** — Adjudicating choices against each other ("B sounds better than C") instead of against the passage.
- **one-strike-heuristics-as-laws** — Treating "extreme = wrong" or "verbatim = wrong" as automatic kills.

**`emphasis-signal-map`**
- **uniform-effort-reading** — Giving every sentence equal attention because "careful means thorough." Formed by close-reading schooling and fear of missing something.
- **punctuation-blindness** — Treating colons, dashes, and italics as typographic noise rather than semantic signals.
- **signal-word-literalism** — Knowing "however" matters but only scanning for that exact word, missing the synonym family (yet, still, in fact, recent work suggests) and non-lexical pivots.
- **decorative-flag-assumption** — At the other extreme: treating EVERY flag as pointing to the answer.

**`polarity-first-elimination`**
- **precision-first-grinding** — The student compares full meanings of all four choices immediately, overloading working memory and running out of time.
- **polarity-as-verdict** — The student picks the first right-charge choice without the precision pass.
- **neutral-slot-forcing** — The student assigns a charge to a slot that is genuinely neutral (descriptive, technical), then eliminates the correct neutral choice.
- **charge-of-topic-not-slot** — The student tags the passage's *subject* as negative (disease, extinction) and demands a negative answer, when the author's stance — the thing that matters — is neutral or admiring.
- **uncertain-kill** — Eliminating a choice merely because it *feels* unsure rather than because it failed a test.

**`predict-then-verify`**
- **choices-first-shopping** — Reading the choices as a menu of possibilities and picking the most attractive.
- **confusion-elimination** — Cutting choices they don't understand.
- **stare-down-tiebreak** — Resolving final-two by re-reading the two choices repeatedly, waiting for a feeling.
- **fifty-fifty-is-bad-luck** — Believing chronic final-two losses are tie-breaking bad luck.
- **prediction-perfectionism** — Refusing to look at choices until the prediction is polished.

**`question-first-reading-protocol`**
- **passage-first-habit** — "You have to read the passage before you can answer anything about it." Formed by every school reading assignment ever (text arrives first, questions after).
- **half-sentence-reading** — Scanning to a keyword and reading only from that word forward.
- **screen-skim-drift** — Device habits (scroll, skim, bounce) imported into the test.
- **decode-everything-completionism** — "I can't answer until I understand every phrase." Formed by close-reading instruction.

**`shorthand-note-discipline`**
- **notes-are-for-weak-readers** — Status belief: "I can hold it in my head; notes are training wheels." Held most strongly by fluent readers — the exact population that suffers polarity flips, because their fluency lets them finish pa
- **notes-cost-too-much-time** — Time-pressure logic: "I have 71 seconds; writing is a luxury." Formed by never having measured it.
- **write-only-noting** — Taking notes dutifully and never consulting them: writing felt like the task, so the loop never closes.
- **transcription-noting** — Copying passage phrases instead of compressing to the claim.

**`stem-family-recognition`**
- **topic-indexing** — Student organizes difficulty by subject matter ("I'm bad at science passages") rather than by question family.
- **drills-equal-readiness** — "If I can do each type in isolation, I'm ready." Formed because chapter exercises are self-labeled; the recognition burden is invisible until the mixed test.
- **stem-skimming** — Reading half the stem and answering the question they expected rather than the one asked (e.g., stem asks how A differs from B; student picks a true statement about a shared quality — the unasked-comp
- **volume-equals-progress** — "More practice tests will raise my score by themselves." Formed because volume feels like work and scores drift slightly.

**`test-writer-mental-model`**
- **arguing-with-the-key** — Treating disagreements with the answer key as the key's errors.
- **world-truth-verification** — Checking choices against memory of reality instead of the passage.
- **heuristics-as-laws** — Auto-killing every extreme or verbatim-flavored choice.
- **opinion-leakage** — Letting personal reaction to the passage's subject color choice evaluation (favoring choices that make the passage say something they agree with).

**`tone-attitude-reading`**
- **topic-tone-conflation** — The student reads a passage about extinction or disease as "negative" because the subject is sad.
- **binary-tone** — The student's tone vocabulary has two values, positive and negative, so qualified and mixed stances get rounded to a pole.
- **quoting-is-endorsing** — The student attributes any stated view to the author, missing that authors routinely present a view in order to complicate or reject it.
- **intensity-blindness** — Direction read correctly, degree ignored: "critical" and "contemptuous" treated as interchangeable.

**`writing-choice-set-classification`**
- **ear-reliance** — the belief that a fluent reader can *hear* correctness.
- **holistic-processing** — the student engages the full passage as a comprehension task before (or instead of) identifying the tested rule, burning time on content the rule never touches.
- **more-text-means-harder** — the student weights difficulty by passage length and jargon rather than by rule identity, over-investing in easy items wrapped in dense text and panicking on formats that look busy.
- **axis-confusion** — when choices vary on two features simultaneously, the student solves the salient axis rather than the discriminating one (e.g., agonizing over tense when the choices actually split on number).

**`writing-module-economics`**
- **time-abundance-complacency** — the student reads "over a minute per question" as license to work slowly everywhere.
- **document-order-lock** — the student processes items strictly in presented order and treats the sequence as mandatory.
- **uniform-pacing** — the student targets equal time per question as "discipline." Forms from generic test-prep advice.
- **module-one-coasting** — the student treats module one as a warm-up and saves intensity for module two.

**`goal-answer-signatures`**
- **mention-equals-relation** — the student credits a comparison goal to any choice naming both subjects, because school "compare and contrast" work accepts discussing two things side by side.
- **results-are-the-point** — on study-aim goals, the student gravitates to findings because results feel like the newsworthy content; school science writing rewards leading with conclusions.
- **background-is-filler** — the student trims mentally toward the "cleanest" choice, treating identity/background clauses as padding, so on unfamiliar-audience goals they pick the focused-but-unintroduced distractor.
- **audience-blindness** — the student ignores the audience qualifier entirely, treating familiar- and unfamiliar-audience goals as identical.

**`goal-decomposition-checklist`**
- **topic-match-equals-goal-match** — the student accepts a choice because it discusses the right subject, never checking that it performs the right rhetorical job.
- **adjacent-category-substitution** — the student lets a semantically related category satisfy the focus (sound for movement, a work's awards for its materials).
- **partial-checklist-commit** — on multi-component goals, the student stops verifying after the first satisfied component (usually the focus) and commits.
- **superset-acceptance** — the student treats a broader statement as covering the specific ask ("it mentions signals, and body-part signalling is a signal").

**`notes-question-goal-first`**
- **bullets-first-processing** — the student reads the note list top-to-bottom before the question, because layout order and the school rule "read everything, then answer" dictate it.
- **truth-equals-correctness** — the student believes a factually accurate, notes-supported statement must be right.
- **complexity-freeze** — the student reads the dense bulleted format as "hard question" and either over-invests time or skips it.
- **support-verification-compulsion** — the student cross-checks the chosen answer against the bullets "to be safe," re-reading the notes after already finding the match.

**`transition-backward-anchoring`**
- **proximity-scope-error** — the student believes a mid- or end-of-sentence transition connects the words physically adjacent to it: the host sentence's own halves, or whatever clause it touches.
- **forward-anchoring** — the student links the transition to the *next* sentence ("it's setting up what comes after").
- **single-comma-blindness** — the student has learned "always look at the previous sentence" as an absolute and misses the intra-sentence case, comparing the wrong pair when the transition genuinely joins the sentence's own clause
- **placement-changes-meaning** — the student believes moving a transition from the front to the middle of a sentence changes what it means or what it connects, and so re-derives (or second-guesses) the relationship per placement.

**`transition-predict-then-match`**
- **plug-and-listen** — the student tries each choice in the blank and judges by feel.
- **jargon-freeze** — the student loses the logical thread when the passage concerns unfamiliar science or history, believing content comprehension is being tested.
- **no-fallback-paralysis** — the student's prediction doesn't match any choice and they have no recovery move, so they revert to plug-and-listen under time pressure.
- **verification-skipping** — the student commits on the scan match without re-inserting the choice, occasionally missing that the matched word is wrong in grammatical packaging or direction.

**`transition-relationship-families`**
- **within-family-deafness** — the student treats all continuers as interchangeable (adding ≈ exemplifying ≈ emphasizing).
- **cause-direction-blindness** — the student believes detecting causality is the whole task, so any causal word fits.
- **temporal-word-literalism** — the student reads time-flavored phrases (of the "at the same time" type) as pure sequence markers.
- **synonym-flattening** — the student assumes words in the same family are graded only by formality, not function, so they choose by register ("this one sounds more academic").

**`abstraction-ladder-paraphrase`**
- **word-match-equals-meaning-match** — Treating shared vocabulary as evidence of shared meaning.
- **higher-is-truer** — Believing the most general choice is safest ("it covers more, so it's harder to be wrong").
- **near-synonym-blindness** — Vague vocabulary knowledge causes crooked climbs: the student accepts a neighbor-word ("skeptical" for "cautious," "reject" for "revise") as equivalent.
- **abstraction-panic** — Freezing when a choice is phrased in academic register ("posits a heretofore unexamined mechanism").

**`argument-spine-decomposition`**
- **first-sentence-is-thesis** — Students expect the claim up front because school essays put the thesis first.
- **everything-is-evidence** — Students treat all passage content as equally load-bearing, so any choice touching any sentence feels "supported." Formed by comprehension-quiz habits where any detail could be asked about.
- **claim-holder-blindness** — Passages often contain two positions (a phenomenon and a hypothesis about it, or two competing explanations); students judge choices against the wrong one.
- **qualifier-dropping** — Students compress the claim but shear off its qualifiers ("*much* greater," "*only* in winter," "*this* species"), turning a specific claim into a generic one that many distractors satisfy.

**`belief-revision-template`**
- **first-claim-is-the-point** — Treating the opening belief as the thesis because school essays put the thesis first.
- **hedge-deafness** — Not registering distance-markers ("long thought," "widely assumed") as authorial disavowal; reading them as endorsement.
- **polarity-flip-from-memory** — Holding the two ideas mentally without externalizing, then swapping which was old and which was new at answer time.
- **demolition-assumption** — Assuming the new idea always DESTROYS the old, when the passage may only qualify or extend it ("bleaching is driven by warming — but recovery depends on local currents too").
- **template-everywhere** — Over-applying the skeleton to passages that are pure description or that genuinely defend the established view.

**`chart-decoding-fundamentals`**
- **trend-level-conflation** — Students read "the amount decreased" from a graph where the *rate of increase* decreased (or vice versa).
- **series-slippage** — Students lock onto the wrong line/bar after a correct legend read, or the legend read never happens; all values extracted thereafter are internally consistent and entirely wrong.
- **unitless-reading** — Students extract "40" without registering percent vs.
- **visual-magnitude-trust** — Students judge "much larger" from bar heights or gap widths without checking the axis scale; truncated axes make small differences look dramatic.
- **row-column-swap** — In tables, students read the intersection with row and column roles reversed, or take a row percentage as a percentage of the grand total.

**`claim-anchored-data-reading`**
- **graph-match-equals-correct** — the quantitative mask of the root error; treated fully in [[topical-vs-logical-relevance]].
- **must-understand-everything-first** — Students believe the display must be fully digested before answering; they decode every series and term, wasting minutes and — worse — unmooring attention from the claim so that all accurate-looking c
- **any-gap-counts** — When the claim needs a *dramatic* difference, students accept any nonzero gap in the right direction.
- **entity-count-blindness** — Students skim the claim's grammatical subject and accept choices comparing two different subjects when the claim describes one subject's internal contrast (same drug at two doses, same month in two co
- **residual-second-guessing** — After a clean elimination, students reopen the item because the graphic "has more in it," distrusting a verbal solution to a visual-looking question.

**`detail-lookup-protocol`**
- **keyword-scan-forward** — Scanning for the stem's keyword and reading only from that word onward.
- **echo-wording-bias** — Expecting the answer in the passage's words (see [[supported-not-stated]]); on this type it's especially costly because a verbatim-flavored trap almost always sits beside the paraphrased credited answ
- **must-decode-everything** — Believing an unknown word blocks the question.
- **relation-blindness** — Matching the choice to the passage on topic alone when the stem asked for a specific relation (a difference, a cause, a significance).

**`directional-evidence-prediction`**
- **direction-blindness** — Students verify a choice is relevant but never check polarity, picking a strengthener on a weaken stem or vice versa — especially when the claim or choice contains negation.
- **weaken-means-disprove** — Students believe undermining requires proof of falsity, so they reject counterexamples ("the protective trait was present, yet the harm occurred anyway") and null results as "not strong enough," hunti
- **null-is-neutral** — The specific belief that a no-effect finding is irrelevant rather than damaging.
- **stem-polarity-drift** — Midway through the choices, students forget whether the stem asked for support or weaken (especially after several same-direction distractors) and answer the opposite task.

**`entailment-moves-and-boundaries`**
- **inference-means-leap** — Students believe a good inference adds something the author didn't say, because English classes reward reading between the lines.
- **usage-proves-merit** — From "researchers used method M," students conclude M is the best or only way.
- **descriptive-to-normative-slide** — Students accept a *should*-flavored conclusion after a purely descriptive passage, importing an implied recommendation.
- **negation-fumbling** — Under time pressure, students process "not un-X," "fails to reject," or a negated comparative as its opposite, or drop one negation in a stack of two.
- **scope-drift** — Students let a claim about one population/period silently generalize ("teens in the 1990s study" becomes "people"), then accept choices at the wider scope.

**`fiction-poetry-literal-reading`**
- **symbolism-hunting** — Assuming literary passages demand deep interpretation, so speculating past the text.
- **difficulty-panic** — "I can't read old fiction/poetry" → shutdown or wholesale guessing.
- **modern-schema-import** — Reading period-specific social dynamics through modern assumptions (what a visit, an inheritance, or a formal address implies), producing confident misreadings of motive and attitude.
- **tone-inflation** — Upgrading quiet literary attitudes to dramatic ones (wistfulness → despair; fondness → passion).
- **poem-paraphrase-refusal** — Treating poems as unparaphrasable art rather than sentences with line breaks.

**`illustrate-with-quotation`**
- **poetry-vibe-matching** — Students select the most emotionally resonant or thematically colored lines rather than translating literally.
- **right-act-wrong-subject** — Students verify the speech act (yes, it praises) but not its object (it praises the *other* figure).
- **pivot-word-suffices** — For contrast claims, students accept any quotation containing *but/yet/however* without checking what is contrasted.
- **translation-avoidance** — Students judge quotations from a skim of recognizable words, never producing a literal rendering, because translation feels slow.

**`logical-text-completion`**
- **inference-means-leap** — (shared with [[entailment-moves-and-boundaries]], where it is treated fully) students add ideas instead of closing the given argument, rejecting the "boring" correct completion.
- **echo-seeking** — Students match surface vocabulary instead of meaning: they favor choices that recycle passage words and reject the correct paraphrase.
- **topical-relevance-substitution** — Choices that mention passage entities feel supported regardless of logical function; the full treatment lives in [[topical-vs-logical-relevance]].
- **prediction-skipping** — Students read choices first "to save time," letting distractors frame their reading; each choice then gets separately rationalized against the passage.
- **transition-blindness** — Students treat the blank as free-standing, ignoring that a *however* or *for instance* just before it constrains the completion's direction; they pick a logically fine continuation of the wrong kind (

**`premise-completion-vs-new-evidence`**
- **one-task-illusion** — Students treat everything with the word "support" or an academic passage as the same "evidence question," applying one habit everywhere.
- **passage-verification-error** — On if-true items, students reject the correct answer because "the passage never says that." They've imported the closed-room rule into the open-door task.
- **outside-knowledge-import** — On completion items, students accept a choice because it is true in the real world or "makes sense," importing the open-door generosity into the closed room.
- **hypothetical-discount** — Students on if-true items *evaluate the plausibility* of each choice ("would that really happen?") instead of granting it and judging its bearing.

**`reference-compression-tracking`**
- **noun-means-object** — The elementary-school "person, place, or thing" schema makes students parse compression-nouns as naming physical things nearby in the text.
- **reread-in-place-loop** — When confused, rereading the confusing phrase itself (or reading forward from it) because backing up feels like wasted time.
- **referent-inertia** — Assuming one pronoun keeps one referent for the whole passage.
- **nearest-noun-grab** — Resolving to the closest preceding noun without number or sense checks.
- **follow-up-order-confusion** — Reading "the latter" as "whichever was mentioned most recently," which breaks when the writer discusses the latter first.

**`support-and-weaken-textual`**
- **topic-match-equals-support** — the family's mask of the root error; treated fully in [[topical-vs-logical-relevance]].
- **mechanism-agnosticism** — Students treat conditions the passage explicitly distinguishes as interchangeable (any stage of a process, any variety of a substance, any subgroup).
- **charitable-overreading** — Diligent students construct scenarios that make weak choices sensible, burning time and talking themselves into traps.
- **partial-read-commitment** — Students commit on a choice's opening clause and skim its tail; the self-disqualifying-tail trap is built for exactly this.
- **baseline-neglect** — Students accept single-group or no-comparison findings for comparative claims because the headline number is impressive; they read the choice's claim but not its quantitative structure.

**`supported-not-stated`**
- **echo-wording-bias** — "The right answer will use the passage's words." Formed by years of school quizzes where literal word-match earns credit, and by teachers' half-true advice that "the answer is in the passage." Produce
- **gist-level-verification** — Believing a choice is "supported" because its overall vibe matches, without auditing individual words.
- **interpretation-earns-credit** — "Deeper reading = better answer." Trained by English-class norms that reward going beyond the text.
- **confusion-means-wrong** — "If I don't understand a choice, eliminate it." A comfort heuristic (confusion feels like wrongness).

**`topic-point-attitude-reading`**
- **topic-as-answer** — Asked for the main idea, the student supplies a subject label.
- **every-detail-matters** — Years of close-reading instruction make careful students audit every odd phrase, losing the argument while inspecting the wallpaper.
- **vague-topic-drift** — Holding the topic a notch too broad (the category instead of the member).
- **summary-equals-retelling** — Believing summarizing means recounting everything in order, because that's what "summarize" meant in school.
- **strong-reader-overconfidence** — Fluent readers hold it all in their heads because they "remember most things"; on belief-revision passages a half-remembered map flips polarity and they confidently pick the OPPOSITE of the point (con

**`topical-vs-logical-relevance`**
- **richness-bias** — the meta-error: the more detailed/specific/vivid a statement, the more probative it feels.

**`apostrophe-possession-grid`**
- **apostrophe-marks-plural** — an apostrophe gets inserted when pluralizing, especially on long, unfamiliar, or s-ending words.
- **possessive-pronouns-need-apostrophes** — school drilled "apostrophe-s shows ownership" on nouns, and students generalize it to pronouns, where the rule inverts.
- **homophone-collapse** — their/there/they're (and your/you're) are stored as one fuzzy sound with spellings chosen by habit.
- **possessive-zone-spreads** — in two-noun stacks the student apostrophizes both nouns or the second one, believing possession "covers" the phrase.
- **apostrophe-position-is-style** — s' is read as a fancy variant of 's rather than as encoding plural ownership.

**`boundaries-word-roles`**
- **verb-s-means-plural** — Students generalize noun morphology (-s = plural) to verbs, where it is inverted.
- **abstract-nouns-arent-nouns** — School examples of nouns are concrete (dog, city), so *formation* or *scarcity* doesn't register as a noun; the student then can't locate subjects in academic prose and concludes the sentence "has no 
- **transition-equals-conjunction** — Because *however* means *but*, students assume it behaves like *but*.
- **verby-look-equals-verb** — -ing forms and to-forms look maximally verb-like, so students count them as working verbs.

**`boundary-equivalence-cancellation`**
- **evaluate-choices-one-by-one** — Not a false belief so much as a missing move: students process choices serially and never notice two are identical, doing four full parses where one partition would do.
- **similar-look-means-equivalent** — The overcorrected version after learning the trick: students strike choices that share a mark but differ structurally (e.g., two colon choices where one colon follows a complete launch and the other d
- **cancellation-replaces-counting** — Students treat the shortcut as the whole method and stop verifying survivors; item writers can and do include near-twins that differ by one earned comma elsewhere in the choice.
- **twin-panic** — Students who half-know the equivalences see period and semicolon both offered and conclude the item is broken or "both could work," then guess.

**`choice-set-diagnosis`**
- **solve-by-sound** — the student reads each choice into the sentence and picks what sounds smoothest.
- **prompt-tells-me-the-topic** — the student expects the question stem to say what's tested (as school quizzes do) and, finding it generic, starts solving with no hypothesis at all.
- **one-axis-blindness** — having spotted one difference among choices (say, apostrophes), the student stops scanning and misses that number also varies.
- **style-preference-solving** — the student treats grammatically-clean choices as a style menu and picks the most sophisticated one.

**`clause-counting`**
- **cant-count-clauses** — The upstream failure class: the student's parse is broken (misses a verb, counts an -ing form as a verb, doesn't demote a subordinated clause, loses the subject in a preposition chunk).
- **counts-but-illegal-mark** — The downstream failure class: the parse is right, but the student's mark-to-count table is corrupt (semicolon before a fragment, comma between two sentences, colon after an incomplete launch).
- **punctuate-by-sound** — The root misconception beneath both classes when the student doesn't run the procedure at all: mark placement by pause-feel.
- **local-window-judgment** — Judging the blank from the few words around it, because reading the whole sentence feels slow.

**`comma-splice`**
- **comma-as-soft-period** — Commas are "small pauses," so a long breath between clauses feels comma-worthy; the test writes long first clauses to make the splice feel natural.
- **however-behaves-like-but** — Meaning-equivalence masks the word-class difference (adverb vs conjunction); produces confident ", however," splices.
- **related-clauses-may-share-a-comma** — Students believe closely-related sentences are exempt ("they're about the same thing, so a comma keeps them together").
- **splice-fixable-only-by-period** — A repair-side gap: the student knows the splice is wrong but believes the period is the only cure, rejecting legal comma+coordinator or colon repairs.
- **comma-before-subordinate-is-a-splice** — The overcorrection: after learning splices, students start flagging every comma+clause as one, including legal *", which..."* and *", although..."* attachments.

**`comparisons-and-word-pairs`**
- **mix-and-match-pairs** — students treat correlative templates as compositional grammar ("not only…and," "neither…or") because each half feels independently fine.
- **name-presence-balance** — a comparison feels balanced because the right person/thing is MENTIONED on both sides, regardless of grammatical kind ("her sculptures … than Rodin").
- **that-of-is-fancier-so-safer** — students sprinkle "that of/those of" as a formality upgrade without checking necessity or number.
- **less-fewer-style-choice** — both quantity words are believed acceptable everywhere.
- **attribute-object-flatten** — both sides are "things," so the comparison passes, even when one side is an object and the other a MEASUREMENT of an object (a bridge vs the length of a bridge).

**`delete-and-reread`**
- **two-commas-equals-removable** — Over-generalizing the bracket schema to ANY comma pair.
- **deletion-verdict-is-final** — Believing a clean leftover certifies the original.
- **garbled-means-essential** — Concluding "essential, no commas" the first time a deletion reads badly, when the real problem was a mis-drawn span.
- **delete-only-what-is-underlined** — Anchoring the span to the underline instead of to the sentence's structure; the tested edge may be only one end of a span that opened twenty words back.

**`essential-vs-nonessential`**
- **which-and-who-always-take-a-comma** — A half-remembered that/which school rule hardened into "relative clause → comma." Reality: *which* asides do bracket, but *who* clauses bracket only when non-restrictive, and the meaning flips with th
- **appositives-always-take-commas** — Learned as a punctuation rule with the uniqueness condition stripped.
- **comma-before-that-feels-polite** — After a long noun phrase, a comma before *that* relieves the "sentence feels long" pressure.
- **commas-are-meaning-neutral** — The deepest version: students believe commas here are stylistic, so they pick by feel and can't use context at all.
- **single-comma-before-a-name** — Students open a bracket before a name and never close it, or treat *"X, Name"* as a politeness convention — conflating direct-address and list commas with appositive brackets.

**`grammatical-number-assignment`**
- **feels-plural-is-plural** — number is assigned semantically: a group of people acting is "they," an activity involving many samples is "many." Forms because spoken English (and British English exposure via media) licenses notion
- **of-phrase-sets-the-number** — the student lets "of the [plural]" pluralize every quantifier head, including each/every/neither.
- **head-noun-blindness-in-gerunds** — the student never identifies the -ing word as the subject at all, so the phrase's internal plural noun wins by default.
- **accompaniment-pluralizes** — "along with / as well as / together with" phrases are treated like "and," pluralizing a singular subject.
- **number-the-number** — "the number of X" and "a number of X" are treated as interchangeable.

**`modifier-adjacency`**
- **meaning-rescues-syntax** — the student accepts a dangling opener because the intended meaning is obvious.
- **possessive-counts-as-the-person** — "the scientist's breakthrough" after a phrase describing the scientist feels right because the name is visually present.
- **ing-word-required** — the student only checks for dangling when the opener is a participle, missing prepositional and appositive openers.
- **choices-first-solving** — the student compares the four choices to each other (style, length, tense) instead of re-attaching each to the fixed stem.
- **which-floats-free** — a which-clause is allowed to attach to any earlier noun that makes sense.

**`pair-completeness`**
- **half-bracket-by-feel** — The student places one comma where the voice dips and never thinks "where does this span END?" Root: commas learned as point-events (pauses) rather than as paired fences — [[punctuating-by-ear]]'s che
- **marks-are-freely-swappable** — Having learned the pair equivalence, students accept comma-open/dash-close hybrids: the equivalence was learned at pair level, applied at mark level.
- **more-brackets-more-careful** — Redundant double bracketing (commas around parentheses) reads as extra-diligent.
- **paren-close-needs-a-comma** — Reflexively re-closing a parenthesis with a comma "to be safe," instead of asking whether anything independent earns one.

**`parallel-structure`**
- **meaning-over-form** — any item conveying the right idea is accepted, since all four choices paraphrase the same fact.
- **parallel-means-identical-words** — the inverse error: eliminating a correct choice because it doesn't repeat a function word the anchor used.
- **blank-local-solving** — evaluating choices without locating the anchor, assuming everything needed is underlined.
- **separator-blindness** — comma vs semicolon inside a series is treated as a style choice, so mixed-separator options look fine.
- **longest-fanciest-wins** — under uncertainty, the most elaborate choice gets picked; parallel answers are typically the plainest, shortest form-match.

**`pronoun-antecedent-agreement`**
- **implied-antecedent-ok** — the student accepts a plural pronoun because the plural concept is obviously intended, though only a singular noun appears (or only a possessive form of it).
- **proximity-referent** — the pronoun is matched to the NEAREST noun rather than the logical referent.
- **semantic-number** — number is judged by feel ("the team… they") instead of by the noun's form.
- **register-blindness** — on generic-person items the student judges the sentence locally ("your results" sounds fine) without checking which generic pronoun the passage already uses.
- **they-cant-be-singular** — the over-corrected inverse of dated instruction: the student reflexively eliminates "they/their" whenever the antecedent is one person, even when the antecedent is generic and "they" is the credited o

**`pronoun-clarity-and-specificity`**
- **reader-can-figure-it-out** — the student accepts an ambiguous pronoun because context makes the intended referent guessable.
- **repetition-phobia** — the student avoids the specific-noun choice because school writing instruction demonized repeating nouns ("use pronouns for variety").
- **demonstrative-feels-precise** — bare "this" feels pointed and specific (it points!), so students don't register its vagueness about WHAT it points at.
- **one-axis-clarity** — the student checks only ambiguity and picks a specific choice with the wrong number, or checks only number and picks a clear-number pronoun with two candidates.

**`punctuating-by-ear`**
- **comma-as-soft-period** — a long breath between clauses feels comma-worthy → splice acceptance ([[comma-splice]]).
- **pause-comma-after-long-subject** — a 15-word subject invites a breath before the verb → the subject/verb comma ([[essential-vs-nonessential]]).
- **half-open-bracket-by-feel** — one comma placed where the voice dips, its partner never placed ([[pair-completeness]]).
- **comma-optional-after-lead-in** — speech doesn't always pause after a leading dependent clause, so the required comma gets dropped ([[sentence-fragment-connectors]]).
- **abrupt-equals-wrong** — correct full stops rejected because the second sentence "starts weird" (pronoun subject, fronted modifier) — the ear's false-negative direction ([[sentence-vs-fragment]], [[three-legal-joins]]).
- **more-marks-look-more-careful** — a cousin bias: the most-punctuated choice reads as most "grammatical." The exam makes the least-punctuated choice correct often enough to farm this.

**`relative-pronoun-and-case`**
- **whom-by-formality** — the object form is chosen because it sounds smarter, not by structure.
- **where-for-abstractions** — using "where" for books, studies, situations, or eras.
- **which-for-people** — the person/thing line blurs because colloquial "that" freely covers people, and students generalize the blur to which.
- **whose-is-people-only** — students eliminate "whose" with a thing antecedent ("a theory whose implications…") because it looks like who's cousin.
- **stilted-must-be-wrong** — whereby, "in which," "of whom" get eliminated for sounding awkward.

**`sentence-fragment-connectors`**
- **semicolon-as-strong-comma** — Students deploy semicolons before any afterthought because school feedback rewarded semicolons without teaching the two-sentence requirement.
- **contrast-content-means-but** — Contrasting ideas near the blank trigger a reflexive *but/however*, even when the sentence already opened with *although*.
- **comma-optional-after-lead-in** — Speech doesn't always pause after a leading dependent clause, so the required comma gets dropped.
- **dash-is-informal-error** — Dashes were discouraged in school essays, so students eliminate correct dash choices for register reasons.

**`sentence-vs-fragment`**
- **sentence-equals-complete-thought** — Elementary school defines a sentence as "a complete thought," so students judge by semantic self-sufficiency.
- **length-implies-completeness** — Long, detail-rich strings feel sentence-like.
- **ing-form-counts-as-verb** — -ing words look maximally verby; students accept *the committee having approved the plan* as complete.
- **never-start-with-because** — An over-taught childhood rule; students reject correct subordinator-first sentences and, worse, can't say when the pattern IS legal (comma + independent clause must follow).
- **relative-clause-can-finish-a-sentence** — The student hears a verb near the end (*...which spans nine time zones*) and counts it as the main verb, missing that the relative word owns it.

**`subject-verb-agreement-disguises`**
- **nearest-noun-is-subject** — the student matches the verb to the adjacent noun.
- **fix-by-ear-with-tense** — hearing that something is off, the student reaches for a tense change because tense differences are audible and number slips are not.
- **odd-syntax-feels-wrong** — on inverted sentences the student "repairs" the strange word order by matching the verb to the fronted phrase's noun.
- **appositive-steals-the-number** — a comma-wrapped rename after the subject ("X, a series of…," ) baits the verb into agreeing with the rename's noun.
- **agreement-plus-comma-bundle** — the student accepts a choice that fixes the verb but inserts a comma between subject and verb, because the verb was the only thing they were checking.

**`three-legal-joins`**
- **comma-can-join-sentences** — The splice belief; canonical treatment in [[comma-splice]], root in [[punctuating-by-ear]].
- **semicolon-as-fancy-comma** — Semicolons taught late and vaguely, so students deploy them as upscale commas before fragments and dependent clauses (*...; all of which failed*).
- **colon-only-for-lists** — Students never learned colons can join clauses, so they eliminate correct colon answers; then, once told colons can join, they over-accept colons with no unpacking relation.
- **full-stop-plus-conjunction-feels-thorough** — Students accept *...ended.
- **stronger-break-for-longer-clauses** — The belief that long clauses "need" a semicolon and short ones a comma.

**`verb-tense-timeline`**
- **blank-local-tense** — the student judges the blank's sentence alone, where several choices sound fine, and picks by feel.
- **complex-tense-attraction** — on hard questions the student assumes the elaborate form (had been / would have) is more likely right.
- **would-have-symmetry** — "if X would have…, Y would have…" feels balanced and correct.
- **average-the-passage** — in mixed-timeframe passages the student picks the tense most common overall rather than the one governing the blank's own frame (e.g., a habitual "every year" clause inside past narration).
- **participle-swap** — irregular verbs: using the simple past where a participle belongs after have/had, or a bare participle as a main verb.

**`window-widening`**
- **local-sufficiency** — Believing the words immediately around the blank contain enough to decide.
- **stop-at-the-blank** — Reading up to the option and choosing, never continuing past it.
- **first-noun-is-the-subject** — Grabbing the nearest noun before the verb as its subject.

## Math

**`binomial-product-templates`**
- **dropped-middle-term** — expanding (a+b)² as a² + b².
- **foil-partial** — multiplying firsts and lasts only, skipping the cross products, on generic binomial products.
- **conjugate-sign-confusion** — writing the conjugate product with a + (sum of squares) or believing the order of factors changes the sign.
- **template-blindness-under-disguise** — knowing the identities but failing to fire them when the "letters" are 3x², √5, or 0.4x.
- **stop-early-on-layered-factoring** — factoring x⁴ − 16 to (x² + 4)(x² − 4) and stopping.

**`cancellation-legality`**
- **cancel-across-sum** — crossing off an x that is "visible" in one term upstairs and downstairs, e.g.
- **split-denominator** — turning c/(a+b) into c/a + c/b, mirroring the legal numerator split.
- **partial-sign-flip** — negating only the first term when subtracting a parenthesized polynomial.
- **merge-unlike-terms** — adding x to x² and writing 2x² (or merging a constant into a variable term) to force a shorter answer.
- **constant-into-both-binomials** — distributing a leading constant into BOTH binomials of a product, doubling it: 3(x+1)(x+2) treated as (3x+3)(3x+6).

**`chunking-repeated-structure`**
- **u-forgetting** — reporting the u-value as the answer.
- **expand-everything** — reflexively multiplying out the repeated binomial into standard form.
- **solution-count-confusion** — reporting two solutions for a quadratic-in-x² because u had two values, without expanding each into its x-roots (or without rejecting a negative u).
- **chunk-boundary-error** — renaming inconsistently (u = x+5 in one term, but treating the −4(x+5) as −4x+5 or leaving an x loose).

**`coefficient-matching-identities`**
- **solve-for-x-reflex** — reading "true for all x" and isolating x anyway.
- **full-expansion-reflex** — always expanding everything before matching.
- **degree-mismatch-matching** — matching coefficients across different degrees (setting the x² coefficient of one side equal to the x coefficient of the other), usually after a disordered expansion.
- **middle-term-drop-inside** — the [[dropped-middle-term]] error corrupting the expansion, making all downstream matching wrong.

**`common-base-exponent-equations`**
- **base-blindness** — treating 4^x and 2^(x+3) as incomparable and attempting logarithm-free brute force or guessing.
- **equate-exponents-unconditionally** — equating exponents when bases differ, or when the base could be 0/1/−1.
- **exponent-arithmetic-slip** — after unification, mishandling the multiplier: 8^(x+1) → 2^(3x+1) instead of 2^(3x+3).

**`completing-square-quadratic-formula`**
- **forgot-plus-minus** — keeping only the positive branch when un-squaring, halving the solution set.
- **compensation-sign-agonizing** — believing the added (b/2)² should be negative when b is negative.
- **formula-sign-slips** — dropping a double negative in −b, or mangling −4ac when c is negative.
- **formula-always** — defaulting to the quadratic formula on everything because "it always works." It does — at several times the cost on factorable items and with the widest error surface.
- **half-simplified-surd** — leaving √72 in the answer and failing to match the template printed with 6√2 (or matching n wrongly).

**`discriminant-trichotomy`**
- **discriminant-magnitude-matters** — Computing the discriminant and then using or comparing its VALUE (bigger discriminant = more solutions, or feeding it onward).
- **zero-radical-two-answers** — At discriminant = 0 still counting two solutions because "±" reads as "two things." Forms from symbol-level reading: ±0 is one value.
- **discriminant-positive-means-factorable** — Believing two real zeros implies nice/integer zeros (and its contrapositive: "it doesn't factor, so no real solutions").

**`dropped-middle-term`**
- **squared-binomial-no-middle** — (a+b)² = a² + b².
- **root-over-sum** — √(a+b) = √a + √b.
- **power-over-sum-general** — (a+b)ⁿ term-wise for any n, including fractional n on binomials (a hard-band costume: a binomial under a fractional exponent, expanded term-wise).
- **middle-term-half** — a residual form after partial remediation: the student includes a middle term but writes ab instead of 2ab (they remember "there's a cross term" but not that there are TWO of them).

**`exponent-rules-factor-counting`**
- **wrong-rule-slogan** — multiplying exponents on a same-base product (or adding on a power of a power).
- **exponent-over-addition** — believing (a+b)ⁿ = aⁿ + bⁿ.
- **merging-added-powers** — collapsing x³ + x⁵ into x⁸ or x¹⁵.
- **bare-negative-base** — reading −3² as 9.

**`exponent-time-unit-conversion`**
- **inverted-exponent-conversion** — multiplying by 12 when dividing is needed (12t vs t/12), because "12 months per year" suggests ×12 regardless of direction.
- **raw-k-transplant** — using the stated interval number directly as k ("every 8 months" → t/8) when t is defined in different units (years).
- **cadence-rate-conflation** — believing (1.07)^(12t) grows FASTER than 7% per year in rate rather than applying 7% more often; or reading b^(3t) as "every 3 years." The exponent coefficient reads like an interval when it's a frequ
- **check-worship** — treating the evaluates-to-one check as proof.

**`exponential-model-anatomy`**
- **coefficient-base-swap** — writing 2(500)ᵗ for a doubling population of 500.
- **initial-value-misplacement** — the starting amount wandering into the base or the exponent (500^t, or b^(500t)).
- **interval-as-frequency-inversion** — reading b^(3t) as "factor b every 3 units" when it means factor b three times per unit (equivalently b every 1/3 unit).
- **logs-required-panic** — belief that any unknown-exponent equation needs logarithms, producing skips and guesses on items that only need reciprocal powers or a backwards table.
- **anchored-base-blindness** — modeling ANY percent-per-period story as exponential, including changes computed as a percent OF THE INITIAL value each period (which add a constant amount — linear).

**`extraneous-solutions-non-reversible-moves`**
- **algebra-always-faithful** — the parent belief: legal moves preserve the solution set, so whatever falls out is correct.
- **accept-the-twin-root** — keeping a candidate that forces √(something) = negative.
- **invisible-domain-after-clearing** — believing that once denominators are multiplied away, they're gone.
- **square-before-isolating** — squaring immediately while a term still sits beside the radical, spawning a cross term that keeps the radical alive.
- **check-as-optional-ritual** — knowing about checking but skipping it under time pressure.

**`function-as-io-machine`**
- **naked-substitution** — Substituting 2x into a squaring rule as 2x².
- **partial-substitution** — Replacing only the first or most visible occurrence of the variable.

**`function-composition-chains`**
- **composition-as-multiplication** — f(g(2)) treated as f · g · 2.
- **iteration-shortcut** — Plugging the number of rounds into the rule once to get the after-n-rounds value.

**`graph-as-io-pairs`**
- **fx-is-about-x** — Reading f(x) > 0 as a constraint on x-values.
- **same-output-means-same-input** — From f(a) = f(3) concluding a = 3.
- **intercept-axis-swap** — Interchanging the x- and y-intercept procedures.

**`growth-factor-vs-rate`**
- **factor-decimal-slip** — 2.4% → 1.24 (or 24% → 1.024).
- **raw-rate-as-base** — writing b = 2.4 or b = 0.024 because the stated number is visually available and the slot needs a number.
- **decay-keeps-the-loss** — "decreases 5% per period" → base 0.05 instead of 0.95.
- **base-as-amount** — reading b = 0.92 as "loses 0.92 thousand per year" — a linear (amount) schema imposed on a multiplicative object, because number-equals-amount schemas are older and stronger than factor schemas.
- **percent-vs-times-blur-in-bases** — "grew by 160%" → ×1.6; "tripled" → base 2.

**`inside-zero-anchor`**
- **anchor-as-translation-overreach** — Believing f(bx − c) is f translated by c/b.
- **inside-zero-on-the-outside** — Applying the anchor question to the output edit too (asking what makes f(x) + k zero).
- **anchor-magnitude-only** — Computing the anchor but dropping its sign/direction (reporting "shifted 3" without direction, then guessing).

**`line-parabola-intersections`**
- **solve-when-you-should-count** — Grinding out the intersection coordinates when the item only asks how many there are.
- **tangency-not-recognized** — Failing to translate "touches at exactly one point" / "exactly one solution" into discriminant = 0.
- **back-substitute-into-the-hard-equation** — Plugging a found x back into the parabola rather than the line, doubling the arithmetic and the error surface.
- **discriminant-sign-slip** — Miscomputing b²−4ac (sign of a c-term, a negative b squared) and inverting the count.

**`negative-fractional-exponents`**
- **inverted-slot** — reading x^(m/n) as "root m, power n." Forms because the notation carries no visual cue for which slot is which; both readings feel equally plausible.
- **coefficient-flip** — moving an entire term, coefficient included, into the denominator when clearing a negative exponent (5x⁻² → 1/(5x²)).
- **coefficient-root-skip** — applying a fractional power to the variable part but leaving the numeric coefficient untouched, or mis-rooting it: (16a^k)^(1/2) as 16a^(k/2) or 8a^(k/2) instead of 4a^(k/2).
- **negative-exponent-means-negative** — believing x⁻² produces a negative value.

**`parabola-fast-feature-read`**
- **a-magnitude-ignored** — Believing a only controls direction.
- **b-is-invisible** — No model at all for what b does, so vertex-side questions feel unanswerable without computing the vertex.

**`quadratic-form-conversion-triangle`**
- **vertex-form-sign-flip** — Reading y = (x + 1)² − 2 as vertex x = +1.
- **k-as-y-intercept** — Treating vertex form's trailing k like standard form's c.
- **equivalence-blindness** — On which-form-reveals-X items, picking a choice that displays the feature beautifully but isn't the same function.

**`quadratic-method-selection`**
- **formula-always** — one tool for everything because it always works.
- **radical-blindness** — grinding integer factor pairs while the choices visibly contain √.
- **choices-are-cheating** — believing that reading answer choices or graphing before working is illegitimate.
- **plug-in-everything** — backsolving all four choices as the default strategy.

**`radical-simplification-principal-root`**
- **plus-minus-root** — believing √16 is ±4.
- **radical-over-addition** — splitting √(a+b) into √a + √b.
- **forgot-plus-minus-when-solving** — the inverse error: un-squaring an equation and keeping only the positive branch, halving the solution set.
- **incomplete-extraction** — stopping at √72 = 3√8 (a smaller square factor was left inside).

**`shifts-input-vs-output-edits`**
- **operate-on-output-instead-of-input** — Reading f(x + 2) as f(x) + 2.
- **partial-substitution** — Editing only the first x in multi-occurrence formulas (factored, rational).
- **forward-reapplication** — On reverse-reading items, shifting the shown graph the same direction again (or stopping at the shown graph's formula) instead of undoing.
- **slope-mutation** — Believing translating a line changes its slope.

**`sum-product-factoring`**
- **sign-flip-roots** — reading roots off (x + p)(x + q) = 0 as p and q instead of −p, −q; mixed versions on mixed signs.
- **nonzero-rhs-factoring** — factoring the left side while the right side is 12, then setting factors equal to 12 (or to anything).
- **three-terms-expected** — freezing on two-term quadratics (c = 0), or inventing a constant.
- **fraction-factor-blindness** — rejecting (2x − 1) as a factor because the student expects (x − root) shape with integer roots.
- **invisible-one** — in GCF pulls like x + 7xy → x(1 + 7y), dropping the 1 (writing x(7y)) or refusing to factor.

**`vertex-by-symmetry`**
- **must-find-roots-first** — Believing root sum/product/other-root questions require solving the quadratic.
- **symmetry-only-works-on-roots** — Knowing average-the-roots but failing to transfer to table pairs or f(p) = f(q).

**`vieta-root-aggregates`**
- **solve-then-aggregate** — computing both roots, then adding/multiplying.
- **vieta-on-unarranged-form** — applying −b/a and c/a to an equation not in standard form, or misreading the signs of b and c.
- **sign-drop-on-sum** — reporting b/a for the sum (dropping the leading minus).
- **a-equals-one-assumption** — using −b and c directly when a ≠ 1.

**`zeros-roots-factors-identity`**
- **factor-zero-sign-slip** — (x + 3) read as "zero at +3." Forms because the opposite-sign rule feels arbitrary when never derived by actually setting the factor to 0; students memorize a label instead of a mini-equation.
- **all-table-rows-matter** — On which-must-be-a-factor table items, trying to use every row (fitting a full polynomial) instead of scanning for output-0 rows.
- **roots-pin-everything** — Believing matching roots guarantees matching functions, forgetting the leading constant (and multiplicity — see [[parabola-fast-feature-read]]).

**`absolute-value-as-distance`**
- **dropped-negative-case** — Solving |x − c| = r for only x = c + r.
- **band-ray-confusion** — Treating |x − c| > r as an interval or |x − c| < r as two rays.
- **negative-r-not-flagged** — Grinding two cases on |x − c| = −4 instead of declaring "no solution." Forms from mechanical case-splitting divorced from meaning; distance is never negative, so no point qualifies.
- **center-sign-error** — Reading the center of |x + 3| as +3.

**`compound-inequality-operations`**
- **misc-single-flip-in-chain** — Scaling all three parts by a negative but flipping only one of the two signs, producing an impossible chain (e.g., 5 < x < −2).
- **misc-chain-read-as-written** — Reading 7 ≥ x ≥ 2 and reporting "x is between 7 and 2" or matching it to a 7-to-2 answer choice as if orientation carried meaning; or rejecting the correct ascending-order choice as "different." Forms
- **misc-operate-on-two-parts** — Adding or dividing only the middle and one bound (usually the one visually adjacent to the operation's motivation), skewing one endpoint.
- **misc-split-and-lose-a-condition** — Splitting the chain into two inequalities, solving one, and forgetting the second — reporting a ray instead of a segment.

**`formula-rearrangement`**
- **letters-freeze-panic** — the student who solves numeric equations fine stalls when coefficients are letters.
- **factor-left-behind** — moving target terms together but dividing by only part of the cofactor, or forgetting a term entirely when factoring.
- **sum-denominator-split** — splitting c/(a+b) into c/a + c/b during rearrangement.
- **sign-flip-on-transfer** — losing a negative when herding terms across, especially when the target's terms carry minus signs.

**`fraction-operations`**
- **add-across-denominators** — Computing a/b + c/d as (a+c)/(b+d).
- **partial-term-clearing** — When clearing fractions, multiplying only the fraction terms and forgetting the whole-number or other-side terms.
- **reciprocal-only-one-part** — Dividing by a fraction by flipping the wrong fraction, or flipping and then also dividing.
- **cancel-terms-not-factors** — Cancelling across a sum, e.g.

**`inequality-direction-logic`**
- **misc-forgotten-flip** — Dividing by a negative without reversing the sign.
- **misc-reflexive-overflip** — Flipping whenever negatives appear anywhere: subtracting a negative, a negative constant on one side, a negative answer.
- **misc-cleanup-blindness** — Treating the final −x → x conversion as notation rather than an operation, dropping the flip exactly at the last step.
- **misc-inequality-subtraction** — Subtracting one inequality from another like equations in elimination.

**`inequality-regions-and-point-testing`**
- **misc-one-region-suffices** — Accepting a point that satisfies a single inequality as solving the system, holding an "any condition" model instead of "all conditions." Forms because single-inequality practice precedes systems and 
- **misc-shade-side-by-guess** — Choosing above/below by visual instinct or by the sign as written in STANDARD form (≥ "means above"), without isolating y or testing a point.
- **misc-strict-boundary-accepted** — Counting a point on a dashed line as a solution because "it's on the line." Forms because touching feels like belonging; membership vs adjacency is never explicitly taught.
- **misc-solid-dashed-blur** — Matching a graph while ignoring line style, or translating "at least" to a dashed boundary.
- **misc-transposed-test-point** — Substituting the candidate's coordinates into the wrong slots (y for x).

**`inequality-translation-and-integer-bounds`**
- **misc-boundary-inclusion-blur** — Translating "more than" as ≥ or "at least" as >.
- **misc-fractional-count-answer** — Reporting the algebraic boundary (3.75 buses) as the answer, or gridding it.
- **misc-nearest-integer-rounding** — Rounding 16.7 to 17 on a MAXIMUM question because school rounding is nearest-integer.
- **misc-cap-floor-direction-swap** — Writing the budget as ≥ or the quota as ≤ — attaching the wrong direction to a constraint because the sentence's verb ("earn," "spend") rather than its logic ("at most," "at least") drove the choice.
- **misc-rate-to-wrong-quantity** — The coefficient-attachment error in inequality clothing: hourly wage times number of items.

**`intercepts-as-anchors`**
- **name-anchored-zeroing** — setting x = 0 to find the x-intercept ("the name says x, so touch x").
- **intercept-must-be-visible** — believing a table without an x = 0 row, or a graph cropped before the axis, makes b unknowable.

**`interpret-linear-parameters`**
- **role-slot-swap** — attaching the intercept's meaning (starting/total amount) to the slope or vice versa.
- **plausible-rate-lure** — choosing an interpretation that "sounds like a rate" without checking it against the variable definitions.
- **binding-reversal** — in f(8) = 20 or (5, 387) interpretations, swapping which number is the input.

**`line-from-known-facts`**
- **frozen-at-b** — the student finds m, writes y = mx + b, and stalls, never realizing the given point substitutes for x and y.
- **any-point-anxiety** — believing only one of the two given points is "the right one" to substitute, or that different points give different lines.
- **first-y-as-b** — reading the first convenient y-value (first table row, leftmost plotted point) as the y-intercept.
- **estimated-anchor-trust** — reading fractional coordinates off a graph between gridlines and building on them.

**`linear-equation-balance-peeling`**
- **partial-distribution** — student multiplies (or divides) only the first term of a grouped sum by the constant.
- **dropped-negative-in-distribution** — distributing −k as if it were k past the first term.
- **unlike-term-merging** — mashing x-terms with y-terms or constants ("3x + 2 = 5x").
- **term-wise-operation-overgeneralization** — believing every operation applies per-term because +, −, ×, ÷ appear to.
- **premature-impossibility** — declaring a many-variable equation unsolvable before simplifying, because school taught "n unknowns need n equations." The exam deliberately writes equations where most letters cancel; students holdin

**`linear-model-four-slots`**
- **forward-only-fluency** — the student can evaluate but freezes when the output is given, not seeing that the total substitutes into the other side.
- **function-notation-as-multiplication** — reading f(3) as f × 3.
- **one-datum-blindness** — given f(a) = v, substituting a but not knowing what to do with v (or worse, using v as the input).
- **parameter-find-as-special-topic** — treating find-the-rate items as an unfamiliar question type requiring a new method, rather than the same four-slot solve.

**`linear-system-method-selection`**
- **misc-one-true-method** — Believing one memorized method (usually substitution) must handle every system.
- **misc-setting-equations-equal** — Saying substitution means "set the two equations equal to each other." True only when both are solved for the same variable; applied blindly it equates non-comparable expressions.
- **misc-sign-loss-in-subtraction** — Subtracting equations but negating only the first term of the subtracted row.
- **misc-solved-wrong-variable** — Reporting x when y was asked.
- **misc-fraction-scaling** — Multiplying one equation by a fraction like 3/2 to force a match, then drowning in fraction arithmetic.

**`linear-system-solution-as-intersection`**
- **misc-solution-is-procedure-output** — Believing a solution is "whatever number the steps produce" rather than a point making both equations true.
- **misc-swapped-coordinate-pair** — Reporting (y, x) instead of (x, y), or picking the choice with the right two numbers in the wrong slots.
- **misc-graph-read-imprecision** — Trusting a hand sketch or a rough visual estimate for exact coordinates.
- **misc-one-equation-suffices** — Checking a candidate point against only one equation.

**`linear-system-solution-count`**
- **misc-equivalence-blindness** — Believing two equations must look identical to be "the same line," so a scaled copy (2x + 3y = 5 vs 4x + 6y = 10) reads as genuinely different.
- **misc-parallel-vs-coincident** — Matching slopes and stopping, answering "no solution" for what is actually the same line (or vice versa).
- **misc-zero-equals-zero-means-none** — Reading a simplification ending in 0 = 0 as "no solution" because "nothing is left." Forms from conflating "no x remains" with "no x works" — the inversion of the truth (always true ⇒ infinitely many)
- **misc-constant-digits-not-ratios** — On infinite-solution checks, comparing constants by digits (4 vs 60 "can't be the same line") instead of by ratio.
- **misc-sign-slip-changes-case** — A single distribution error (especially across a negative, as in −2(3 − x)) silently moves the system from one case to another.

**`linearity-constant-rate-model`**
- **rate-constant-slot-swap** — putting the per-unit number where the start belongs or vice versa, especially when both arrive as letters.
- **sign-of-change-flip** — adding the change for a decreasing quantity.
- **term-order-anxiety** — believing b + mx and mx + b are different models, so the "right" answer looks wrong.
- **must-use-every-number** — force-fitting a decoy given into the model, or treating an unused number as proof of error.
- **unit-mismatch-blindness** — applying a per-week rate to a count of months, or modeling only one of two simultaneous rates.

**`order-of-operations`**
- **negation-scope-error** — Reading −x² as (−x)².
- **left-to-right-literalism** — Evaluating strictly left to right regardless of operation, e.g.
- **hidden-grouping-missed** — Not treating a fraction bar or radical as grouping, so the numerator or radicand isn't fully resolved before combining.
- **exponent-over-sum** — Simplifying (a+b)² as a²+b².

**`parallel-perpendicular-slopes`**
- **half-transformed-reciprocal** — flipping without negating, or negating without flipping.
- **parallel-extends-to-intercept** — expecting parallel lines to share an intercept, or coefficient-matching all three constants so the same-line candidate looks parallel.
- **integer-slope-stall** — freezing on the perpendicular of an integer slope because there's "no fraction to flip." Forms from practicing the transformation only on visibly fractional slopes; 3 = 3/1 was never made explicit.

**`slope-as-rate-of-change`**
- **run-over-rise-inversion** — computing Δx/Δy.
- **mismatched-subtraction-order** — (y₂ − y₁)/(x₁ − x₂): treating the two subtractions as independent instead of one consistent traversal.
- **fraction-sign-scatter** — treating (−p)/q, p/(−q), and −(p/q) as different numbers.
- **steepness-equals-value** — ranking negative slopes by visual steepness, so a steep downhill is called "greater." Forms because steepness is the salient percept; signed value is the mathematical order.

**`solve-for-the-asked-quantity`**
- **solve-for-x-reflex** — grinding out individual values when the target is one transformation away.
- **answer-the-variable-autopilot** — solving correctly for x, then bubbling x's value although 2x + 1 was asked.
- **chunk-dismantling** — expanding/distributing the asked-for group because "simplify everything" feels like progress.
- **underdetermined-panic** — seeing two unknowns and one equation and concluding "not enough information." Forms from the school rule "n unknowns need n equations"; the exam subverts it by making only the combination recoverable.

**`standard-form-combined-total`**
- **forced-slope-intercept-modeling** — trying to cram a two-rate-plus-total story into y = mx + b, mangling which quantity is "y." Forms because slope-intercept is the only modeling template school installs; the student never learned that 
- **intercept-role-confusion** — reading an axis intercept as a rate or as "the total." Forms because the axes are counts while the total lives invisibly in C; the intercept is a COUNT (the pure case), not a price and not the budget.
- **single-quantity-blindness** — writing only one term (one rate × count = total) because the story emphasizes one quantity and mentions the other in passing.

**`system-combination-target`**
- **misc-solve-everything-reflex** — Grinding out x and y individually even when asked for x + y.
- **misc-report-the-intermediate** — Doing the shortcut or the full solve correctly, then reporting x (or y) instead of the combination.
- **misc-expand-the-chunk** — When a shared block like 2a + 3b appears in both equations, expanding and re-solving instead of substituting the block's known value whole.
- **misc-blind-subtraction-signs** — Subtracting the stacked equations and negating only the leading term.

**`system-from-two-constraints`**
- **misc-count-value-swap** — Attaching the money/weight total to the count equation and the item total to the value equation (x + y = 260, 5x + 8y = 40).
- **misc-coefficient-attachment** — Multiplying A's price by B's count (5y + 8x instead of 5x + 8y).
- **misc-order-of-mention-multiplier** — Writing "3 times as many f as w" as 3f = w because the 3 sits next to f in the sentence.
- **misc-comparison-sign-direction** — In "A exceeds B by 90," subtracting in the wrong direction (B − A = 90).
- **misc-answer-first-solved-variable** — Solving cleanly but reporting the other quantity ("how many student tickets" answered with the adult count).

**`system-parameter-tuning`**
- **misc-try-to-solve-the-system** — Attempting substitution/elimination on a parameterized system, producing expressions in x, y, and the constant with no exit.
- **misc-constants-in-the-no-solution-proportion** — For "no solution," matching ALL numbers including the constants, accidentally constructing the infinite case.
- **misc-intermediate-answer** — Solving correctly for one constant but the ask was a combination (m + n, b/a) or a different constant entirely.
- **misc-no-normalize-first** — Running ratios on un-aligned equations (different forms, common factors left in, x and y terms in different orders), pairing non-corresponding numbers.
- **misc-impossible-means-weird** — On "which value is impossible" items, hunting for a strange-looking number instead of computing the unique proportionality value.

**`unit-anchored-interpretation`**
- **interval-contaminated-rate** — folding the asked interval into the rate itself (reporting the per-5-minute change as "the slope") or applying a per-hour rate to a count of minutes.
- **unit-inversion** — reading slope p/q as "q output per p input." Forms because the fraction bar carries no unit labels; nothing in the symbols corrects a flipped reading.

**`variable-definition-discipline`**
- **meaning-drift** — the variable starts as "weeks since January" and silently becomes "weeks since the second event" mid-solution, or x is "the smaller number" in one line and "a number" in the next.
- **fraction-inviting-anchor** — anchoring the variable at the derived quantity so the base becomes x/3.

**`answer-the-asked-question`**
- **match-equals-confirm** — the belief that finding your computed number among the choices validates the work.
- **salience-answering** — on interpretation/modeling items, answering about the noun most emphasized in the story rather than the quantity the variable actually measures.

**`desmos-decision-framework`**
- **calculator-as-cheating** — the belief that graphing is an illegitimate route that "real" solutions avoid.

**`distractor-forensics-study-skill`**
- **wrong-equals-random** — the belief that distractors are arbitrary, so a miss means "I'm bad at this topic" rather than "I made fault X." Formed because school tests often DO use casual distractors.
- **review-as-verdict-checking** — reviewing by reading the correct solution and nodding.

**`engineered-shortcut-recognition`**
- **always-solve-for-x-reflex** — the belief that "solving" means isolating individual variables.

**`expression-as-unit`**
- **crates-must-be-unpacked** — the belief that compound expressions must be reduced to individual variables before anything can be concluded.
- **coefficient-survives-the-square** — substituting bundle = kv into bundle² and writing kv² instead of k²v².
- **both-sides-expansion** — the same factored product appears on both sides of an equation and the student expands both copies instead of subtracting/cancelling the intact term.
- **radical-is-not-a-power** — failing to read √x as x^(1/2), which hides the hidden-quadratic structure of x − k√x + c shapes.

**`magnitude-sanity-checks`**
- **answers-come-from-algebra-only** — the belief that the only way to evaluate an answer is to re-derive it.

**`method-selection-by-answer-form`**
- **one-true-method** — the belief that each problem type has a single correct procedure (usually the one their school emphasized).
- **choices-are-for-the-end** — treating the answer grid as a checklist to consult only after solving.
- **back-solving-is-cheating** — the belief that plugging in choices or convenient numbers is illegitimate and will be "punished." Formed by classroom norms; on this exam back-solving is a designed-for strategy, and on some items the
- **first-hit-stop** — on test-every-choice items (which value satisfies all conditions / must-be-true), stopping at the first choice that works for ONE condition.

**`angle-chasing-ritual`**
- **plan-first-paralysis** — the student believes they must see the full solution path before writing anything, so they freeze on chains longer than two steps.
- **scale-trust** — reading relative sizes or apparent equalities off a figure labeled "not drawn to scale." Forms because most printed figures ARE to scale; the habit of eyeballing gets rewarded for years.
- **mental-only-chasing** — refusing to annotate, holding 3+ intermediate angles in the head.
- **generator-tunnel-vision** — hunting only near the target angle, missing that a deduction on the far side of the figure is the unlocking move.

**`congruence-criteria-and-correspondence`**
- **ssa-counts** — assuming two sides + a non-included angle lock a triangle, because SSA "feels like" SAS (same letters, different order).
- **name-order-blindness** — matching sides by size, position, or visual salience instead of by letter order.
- **marks-imply-inequality** — believing differently-marked or unmarked parts must be unequal.
- **congruence-similarity-blur** — offering a similarity criterion (AA) as proof of congruence, or demanding side equality for similarity.

**`parallel-lines-two-angle-families`**
- **assumed-parallelism** — student applies the two-family equalities to any lines that *look* parallel.
- **equal-vs-supplementary-swap** — student remembers "transversal angles are related" but picks the wrong relation, setting an acute equal to an obtuse.
- **vocabulary-as-crutch** — student stalls trying to recall whether the pair is "alternate interior" or "co-interior" instead of just classifying small/big.
- **marks-imply-inequality** — believing that angles or segments *without* matching marks must be unequal.

**`pythagorean-theorem-and-triples`**
- **triple-autopilot** — seeing 3 and 4 (or 6 and 10) and asserting the 3:4:5 completion without checking which side is the hypotenuse.
- **hypotenuse-misplacement** — putting a leg in the c-slot when the right angle's position is given only verbally (no figure).
- **add-always** — computing a leg via a² + b² instead of c² − a².
- **radical-arithmetic-slips** — treating √(a² + b²) as a + b, or failing to simplify √50.
- **triple-as-magic-numbers** — believing triples only work at exactly 3-4-5 (missing scaled versions), or inversely that ANY integer sides form a triple.

**`radians-and-arc-length`**
- **radians-are-alien** — treating π-containing values as a different species of number: freezing on conversions, refusing to compare π/4 against decimal choices.
- **conversion-direction-flip** — memorizing "multiply by π/180" as a ritual with no units attached; under pressure the ritual reverses.
- **radians-must-contain-pi** — believing a radian measure is only valid written with π, so "3.4 radians" reads as an error.
- **mixed-unit-arithmetic** — adding a degree quantity to a radian quantity without converting one.
- **arc-length-vs-angle-conflation** — treating an arc's radian *measure* and its *length* as interchangeable.
- **calculator-mode-blindness** — evaluating trig with the wrong angle mode and trusting the plausible-looking decimal.

**`scaling-laws-k-k2-k3`**
- **linear-scaling-transfer** — "sides ×5 ⇒ area ×5," or "radius +30% ⇒ area +30%." The deepest misconception in the domain: proportional reasoning is drilled for years on linear relationships and gets over-applied to squared/cubed 
- **dropped-parentheses-substitution** — substituting a scaled dimension without parentheses (π·1.30r² instead of π(1.30r)²), so the factor never gets squared.
- **factor-percent-conflation** — reporting a 1.69× result as "169% greater," or "69% greater" as "69 times." Forms because everyday speech blurs "times more" and "percent more." Distractors include 169 alongside 69.
- **perimeter-area-ratio-mixing** — assuming perimeter ratios behave like area ratios (or vice versa).

**`similarity-as-scaling`**
- **similar-by-eyeball** — certifying similarity from visual resemblance, and *denying* it for rotated or flipped pairs.
- **concrete-numbers-for-ratios** — instantiating "AB = 2·DE" as AB = 2, DE = 1.
- **angles-scale-too** — believing a k = 4 dilation multiplies angles by 4.
- **perimeter-scales-like-area** — expecting perimeter to pick up k² (or area to stay at k — the deeper version lives in [[scaling-laws-k-k2-k3]]).
- **within-across-blur** — equating a within-triangle ratio to an across-triangle ratio (a/b set equal to a/a′).

**`similarity-configurations`**
- **piece-equals-side** — in a parallel-cut figure, using a segment (a piece of a crossed side) as if it were a full side of a similar triangle.
- **bowtie-same-side-pairing** — matching the two "top" sides of a bowtie because spatial position feels like correspondence; correct matching crosses the vertex.
- **part-part-vs-part-whole** — even after noticing pieces, mixing the two legal schemes: setting a piece-to-piece ratio equal to a piece-to-whole ratio.
- **altitude-role-scramble** — in the three-triangle figure, pairing a short leg with a long leg because the triangles are rotated at three different orientations.

**`soh-cah-toa-and-cofunction`**
- **sides-absolute-not-relative** — believing opposite/adjacent are properties of the drawing rather than of the chosen angle.
- **oblique-trig** — computing a trig ratio from a non-right triangle's sides because an angle and two sides are visible.
- **trig-notation-splitting** — treating sin 2x as sin × 2x, so "dividing by x" seems to leave sin 2.
- **ratio-requires-real-lengths** — refusing to reason from a bare ratio ("but we don't know the sides!").
- **similar-triangles-need-scaling** — computing a scale factor to move a trig value between similar triangles (slow but harmless), or multiplying the trig value BY the scale factor (fatal).

**`special-right-triangles`**
- **radical-flags-the-role** — assuming the side carrying √3 must be the long leg (or √2 the hypotenuse).
- **angle-ratio-projection** — expecting the side opposite 60° to be twice the side opposite 30°.
- **template-as-trivia** — memorizing 1:√3:2 as a chant with no picture, so under any disguise (equilateral half, hexagon) the template never activates.
- **which-template-blur** — mixing the two templates (using √2 in a 30-60-90).
- **rationalization-stumble** — given the long leg, dividing by √3 incorrectly (or not at all).

**`triangle-angle-sum-and-exterior-shortcut`**
- **exterior-equals-adjacent** — student treats the exterior angle as equal to the *adjacent* interior angle rather than the sum of the two remote ones.
- **polygon-formula-off-by-one** — using 180n or 180(n − 1).
- **budget-per-figure-confusion** — applying 180° to a quadrilateral or 360° to a triangle when figures overlap.
- **center-vs-vertex-triangulation** — for regular polygons, mixing up fanning from one vertex (n − 2 triangles, interior sum) with fanning from the center (n triangles, uses 360° at the center).

**`triangle-properties-toolkit`**
- **unique-isosceles** — assuming the given angle must be the repeated one, producing exactly one of the two candidate answers.
- **one-way-isosceles** — using sides-equal ⇒ angles-equal but not the converse; the student sees two equal angles and doesn't harvest the equal sides.
- **angle-ratio-projection** — believing the side opposite 60° is twice the side opposite 30° "because 60 is twice 30." Forms by over-generalizing similar-triangle proportionality from *between* triangles to *within* a triangle.
- **degenerate-triangle-acceptance** — allowing the third side to equal the sum of the other two (or ignoring the lower bound |a − b|).

**`box-plot-reading`**
- **box-width-equals-count** — reading a wide quarter as containing more data.
- **box-plot-shows-mean** — assuming the middle line is the mean, or that the mean is somehow inferable.
- **whisker-gap-means-no-data** — believing an empty-looking whisker stretch contains no observations.
- **quartiles-as-values-not-cuts** — treating Q1/Q3 as data members rather than cut points, e.g., "Q3 is the third-largest value." Forms because the notation reads like a ranking.

**`data-display-decoding`**
- **wrong-coordinate-readoff** — reporting the y-value when the x is asked (or vice versa).
- **axis-multiplier-blindness** — answering 250 when the axis says "thousands." Forms because axis labels get treated as decoration; answer sets deliberately include the unscaled number.
- **greatest-change-equals-greatest-rate** — picking the biggest visual jump while ignoring that intervals span different x-widths.
- **chart-answers-everything** — hunting the figure for a value that only exists in the prose (or ignoring the prose entirely).

**`distribution-shape-and-outlier-effects`**
- **measures-move-together** — assuming whatever raises the mean raises the median and range too.
- **mean-median-conflation** — treating the two as interchangeable "averages," so shape questions get answered by computing either one.
- **median-fragility-assumption** — believing an extreme value drags the median the way it drags the mean.
- **shape-blindness** — needing to compute mean and median numerically to compare them even when the display makes the order visible.

**`linear-vs-exponential-classification`**
- **percent-implies-exponential** — any percent-per-period story gets modeled exponentially, including percent-of-initial (linear) plans.
- **rate-means-slope** — any phrase containing "rate" triggers a linear model, because rate was taught as slope.
- **percent-as-addition** — "grows 2.4% per year" rendered as +2.4 (or +0.024t): a linear model wearing percent-derived coefficients.
- **exponential-symmetry** — expecting exponential graphs to mirror like parabolas or both ends to blow up; produces wrong graph picks with the flat tail on the wrong side.
- **keyword-classification** — the general disease: classifying from vocabulary ("doubles" heard as "+2"; "linear growth" assumed whenever numbers look small) instead of interrogating the change clause.

**`margin-of-error-interpretation`**
- **moe-covers-individuals** — reading estimate ± MoE as "all/most members lie in this window." The centerpiece misconception of the topic.
- **outside-band-impossible** — upgrading "not plausible" to "impossible." Forms from binary true/false schooling; hedged probabilistic claims have no school precedent.
- **estimate-is-exact** — stating the sample estimate as the true population value, or claiming a repeat sample "would" reproduce it.
- **moe-is-about-the-sample** — reading MoE as doubt about the sample measurement.
- **moe-misattribution** — explaining a larger MoE by sample composition percentages, by "a mistake was made," or by anything other than the two real drivers (sample size, underlying variability).

**`mean-as-total`**
- **combined-mean-is-midpoint** — averaging two group means while ignoring group sizes.
- **mean-median-conflation** — treating mean and median as interchangeable "averages." Forms because school data is mostly symmetric, where they coincide.
- **mean-must-be-a-data-value** — discomfort when the mean isn't in the list, causing answer-snapping to the nearest listed value.
- **direct-mean-manipulation** — trying to adjust a mean arithmetically without going through the total ("the mean goes up by 5 because the new value is 5 bigger"), which fails whenever the count changes.

**`median-as-position`**
- **median-needs-full-list** — believing the median requires writing every value in order.
- **even-count-median-confusion** — for 100 values: the 50th?
- **middle-of-values-not-positions** — taking (max + min)/2, or the middle of the *unsorted* list.
- **median-recomputation-reflex** — recomputing a statistic the table already gives (finding the median *of* a column of medians when the question asks for their range).
- **histogram-values-are-knowable** — computing "the" median from binned data as if exact values were recoverable.

**`percent-as-multiplier`**
- **multiplier-off-by-one** — writing ×0.2 for "decrease by 20%" (computing the removed part when the remaining part is wanted) or ×1.2 for "+120%." Forms because "percent OF" and "percent CHANGE" use identical words with differen
- **big-percent-literalism** — "80% less" → ×0.80; "250% greater" → ×2.5.
- **percent-more-less-symmetry** — "x is 20% less than y, so y is 20% more than x." Forms because additive more/less by an AMOUNT genuinely is symmetric; students port that symmetry to relative change, where the base swaps.
- **decimal-point-slips-in-factors** — 0.4% → ×1.04 instead of ×1.004.
- **missing-hundredth-on-variables** — writing 240(1 − p) for "p% less than 240." With numeric percents the /100 is silently absorbed into the decimal, so it was never internalized as a required step; it resurfaces the moment p is a letter

**`percent-three-slots`**
- **find-the-base-inversion** — on "12 is 30% of what?" the student computes 0.30 × 12 because the only drilled move is "multiply the two numbers you see." Forms because school percent work overwhelmingly presents the forward shape;
- **decimal-point-slips** — 0.6% → 0.06, or 210% → 0.21.
- **base-misidentification** — the percent is applied to the wrong quantity because the student never locates the "of"-anchor; especially in tables where the base is a subset ("of the students who said yes...") rather than the gran
- **percent-of-percent-flattening** — for nested shares (40% of the class, 20% of those), adding or averaging the percents instead of multiplying the shares.

**`probability-as-pool-share`**
- **union-vs-condition-conflation** — treating "or" as if it narrowed the pool (or, the mirror error, adding overlapping counts).
- **memory-in-randomness** — believing a second roll is less likely to repeat the first ("it has to balance out").
- **complement-slippage** — for "not X," complementing the wrong thing (building the complement of the pool instead of the target), or leaving an algebraic complement half-formed when counts are symbolic (n items, g qualifiers →
- **probability-over-one-blindness** — accepting a fraction whose numerator exceeds its denominator without flinching.
- **percent-format-transfer** — writing 40 instead of 0.4 or 2/5 on a student-produced response.

**`proportion-setup-template`**
- **cross-correspondence-swap** — student mismatches roles across the two sides (model on top left, real on top right).
- **unknown-buried-in-denominator** — student sets up with x on the bottom, then fumbles the two-step algebra (cross-multiply, divide) and loses a factor.
- **direct-template-on-inverse** — for inversely related quantities (gear teeth vs.
- **unit-conversion-panic-inside-scales** — student converts inches to miles before setting up a map-scale proportion, mangling the scale.

**`ratio-part-whole-discipline`**
- **ratio-read-as-fraction** — student uses a/b where a/(a+b) is needed (or vice versa) because colon notation LOOKS like a fraction, so the two visible numbers get slotted into numerator/denominator by reflex.
- **grand-total-denominator** — student always divides by the largest/most visible total because school probability drilled "favorable over TOTAL." When the selection clause restricts to a row, column, or category, this yields right
- **parts-dont-exhaust-blindness** — student computes a/(a+b) shares when a third unmentioned category exists, or treats a 3-term ratio a:b:c as if only two parts mattered.
- **probability-over-one-acceptance** — student reports a fraction >1 without flinching; the numerator/denominator roles were never semantically anchored, so impossibility raises no alarm.

**`reverse-percent-recovery`**
- **opposite-percent-reversal** — to undo +8%, the student takes 8% off the final (final × 0.92) instead of final ÷ 1.08.
- **percent-of-final-base-swap** — deeper version: the student genuinely believes the stated percent is a percent of the final value, because the final is the only concrete number on the page.
- **forward-reverse-misclassification** — the student solves a forward problem with division (or vice versa) because they pattern-match on "discount ⇒ divide" rules instead of locating which quantity is unknown.
- **rounded-intermediate-division** — dividing by a rounded composite factor; division amplifies rounding error more than multiplication, so reverse items punish intermediate rounding harder than forward ones.

**`sample-to-population-estimation`**
- **percent-of-wrong-base** — applying the sample percentage to the sample when the population is asked, to the whole population when a subgroup is asked, or ignoring a needed complement.
- **exactness-expectation** — distrusting a correct projection because no answer choice matches it exactly, then "fixing" the work into a wrong choice.
- **proportion-count-confusion** — reporting the proportion when a count is asked, or vice versa (0.35 vs 35,000).
- **unlicensed-scaling** — scaling a *non-random* or wrong-frame sample up to a population without noticing the projection is invalid.

**`sampling-validity-two-dials`**
- **sample-size-suspicion** — flagging "only 249 people" as the design flaw.
- **overreach-generalization** — extending results to a broader group than the frame (mall shoppers → the whole town).
- **survey-proves-cause** — reading association in observational data as causal.
- **bigger-sample-beats-right-frame** — preferring a large sample from the *wrong* population over a smaller random sample from the right one.
- **volunteer-blindness** — treating a mail-back/opt-in survey with a large respondent count as representative.

**`spread-range-and-sd`**
- **sd-requires-formula** — refusing SD comparisons because the computation was never taught, and taking the "cannot be determined" bait.
- **sd-tracks-magnitude** — believing sets with bigger numbers have bigger SD.
- **range-includes-middle** — thinking interior values influence the range, or recomputing the whole set when one middle value changes.
- **spread-moves-with-center** — assuming that whatever raises the mean also raises the spread.

**`statistical-claim-legality`**
- **truth-evaluation-reflex** — evaluating options for plausibility ("that sounds right about exercise") instead of legality.
- **absolutism-comfort** — gravitating to confident phrasings because hedged claims feel weak or evasive.
- **universal-quantification-slip** — converting a statistical tendency into a per-member rule ("any student who exercises more will improve").
- **causal-leap** — accepting "X improves Y" from observational co-movement (archetype e).
- **frame-drift** — accepting conclusions about a wider (or narrower) population than was sampled (archetype d).

**`successive-percent-rebasing`**
- **additive-successive-changes** — student adds sequential percents (+5% then −10% = "net −5%").
- **stepwise-base-drift** — student computes step by step (correctly in principle) but takes some percent of the wrong intermediate, or rounds intermediates and drifts.
- **expression-blindness** — on expression-form items, student evaluates everything and hunts for a matching decimal instead of recognizing (0.87)(1.11)(5400) as the direct transcript of the story.
- **same-base-blanket-ban** — after learning "never add percents," student refuses legal addition on same-base items (shares of one fixed total).

**`two-way-table-probability`**
- **grand-total-denominator** — always dividing by the table's grand total, even under a condition.
- **condition-target-swap** — computing P(B given A) when P(A given B) is asked: dividing by the target's margin instead of the condition's.
- **union-as-condition** — narrowing the denominator for "either A or B" as if "or" conditioned the draw, or double-counting overlapping cells.
- **unmarked-condition-blindness** — only recognizing conditioning when the literal phrase "given that" appears, missing that a selection sentence naming a subset carries the same restriction.

**`unit-cancellation-chain`**
- **multiply-divide-coinflip** — given "1 big = k small," the student guesses the operation.
- **every-number-must-be-used** — student forces decoy givens into the computation because homework historically used all data.
- **unit-blind-formula-plugging** — in rate × time, multiplying a per-hour rate by minutes because "the formula says multiply." Formulas were learned as number slots, not quantity relations; the skipped cancellation audit is exactly the
- **compound-rate-half-conversion** — converting km→mi in a speed but forgetting hr→min, because the rate is stored mentally as one number rather than a fraction of two units.
- **stepwise-rounding-drift** — rounding each intermediate because school rewarded tidy rounding; accumulated error lands on a near-miss distractor or misses a grid-in tolerance.

**`unit-magnitude-sanity-check`**
- **feel-check-absent** — student has no magnitude expectation at all; any output is accepted because conversions were learned as symbol-pushing with no quantity meaning.
- **inverted-feel** — student expects "converting to a bigger unit makes the number bigger" because bigger units sound like more.
- **direction-only-checking** — student checks direction but not rough scale, so an error of ×3600 vs ×60 (double-converted time) survives.
- **check-as-afterthought** — student computes first, and by then is anchored on their own output, so the check silently confirms whatever they got.
