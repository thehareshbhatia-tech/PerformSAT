# Solution-Writing Craft — observations from math study source B (answer-key corpus)

Provenance: distilled from a representative sample (~21 spreads) of the fully-worked
answer key covering algebra, linear relationships, percent, exponential models, word
problems, quadratics, systems, function transformations, triangles/trig, circles,
radians, geometry word problems, probability, and statistics/sampling. All
observations are generalized craft principles in our own words. No solution text,
numbers, or examples are reproduced.

## 1. Macro-structure: answer → move → algebra → interpretation

Every solution in this source follows the same four-beat rhythm:

1. **Answer first.** The correct choice letter (MC) or the numeric result (grid-in)
   is displayed in a box at the head of the solution, before any prose. A student
   checking work gets the verdict in zero seconds; only students who missed it read on.
2. **The opening sentence names the MOVE, not the goal.** Solutions open with a short
   imperative: cross-multiply / square both sides / draw the figure / test the answer
   choices / set the discriminant to zero / use point-slope form. This is the "expert's
   first thought" compressed to one line. There is almost never a restatement of the
   problem or the goal.
3. **A centered algebra chain, one transformation per line.** Displayed math carries
   the middle of the solution with essentially no interleaved prose. Each line is one
   legal move from the previous line. Routine arithmetic (distribution, combining like
   terms, simplifying fractions) is silently compressed — often two or three
   school-level steps collapse into one printed line.
4. **Prose returns only for interpretation.** A closing sentence converts the algebra
   result into the answer to the question actually asked (e.g., re-expressing the
   solved variable as the quantity requested, choosing which of two roots survives a
   constraint, converting units). This closing beat is where the author is most
   careful, because it's where the test hides its wrong-target traps.

## 2. Calibration of shown vs skipped algebra

- **Structural steps are always shown; clerical steps are always skipped.** The
  author prints every line where the *shape* of the expression changes (isolating,
  factoring, squaring, substituting) and omits lines where only arithmetic happens.
- The effect: an average of 4–7 displayed lines per medium problem. Hard problems get
  longer chains, not denser prose.
- Skipping is uniform regardless of difficulty band, which means easy solutions read
  fast but hard solutions silently assume fluency (e.g., factoring a non-monic
  quadratic in one step). This is the single biggest gap for weaker students.

## 3. How alternate methods are presented

- Multi-method solutions are explicitly labeled ("Solution 1 / Solution 2") or
  appended with a connective ("Alternatively…", "A faster way…", "Yet another
  approach…"). Up to three methods for one problem.
- Ordering is pragmatic, not ideological: sometimes insight-first with mechanical
  backup, sometimes mechanical-first with a speed postscript. The speed postscript
  pattern ("a quicker way would have been…") doubles as pacing coaching.
- **Graphing-calculator solutions are first-class citizens.** For digital-SAT items
  the author routinely offers "just graph it" as a legitimate method (find
  intersections, read the vertex, check ranges), sometimes even calling it the
  easiest route. This reflects the built-in calculator reality of the digital exam
  and is worth adopting: our explanations should say when the calculator route wins.
- Alternate methods are also used to *verify*: plug-the-answer-back-in and
  test-each-choice appear both as primary strategies and as confidence checks.

## 4. When and how diagrams are redrawn

- A diagram appears in a solution only when the key move IS a construction:
  dropping an altitude, connecting points to an axis to manufacture right triangles,
  enclosing an odd polygon in a bounding rectangle, drawing internal dashed segments
  through a solid. The redrawn figure carries the added construction (dashed lines,
  tick marks, right-angle marks, labeled lengths) — the insight is drawn, not merely
  described.
- Redraws sit mid-solution at exactly the step where the construction happens, not at
  the top. Text before the figure says what to draw; text after reads facts off it.
- Coordinate-plane problems get quick sketch-style redraws when the solution's logic
  is "see the special triangle hiding here."
- Implication for us: attach a diagram to an explanation precisely when the
  remediation move is "add something to the picture," and render the added element
  visually distinct (dashes/color) from the given figure.

## 5. Grid-in vs multiple-choice craft differences

- **Grid-in:** the boxed header lists every accepted encoding (fraction, and both
  truncated and rounded decimal forms). Solutions run straight to the value; the
  closing beat verifies the value answers the asked quantity. No choice-elimination
  reasoning at all.
- **Multiple-choice:** three MC-only devices appear —
  1. *Choice-testing as a method*: plug each choice in, or plug a convenient value in,
     when direct solving is slower.
  2. *Choice-space pruning*: "only two choices have the required slope/growth
     factor/sign, so decide between them" — teaching students to read the answer
     grid as information.
  3. *Targeted distractor refutation*: a "note that the answer is not X because…"
     sentence naming the specific misreading that produces the most tempting wrong
     choice. Used sparingly — mostly on interpretation, must-be-true, and
     similarity/congruence items where every choice gets a verdict.
- Reasoning-heavy items (statistics inference, data interpretation) flip the format:
  they become all-prose verdict-per-choice walkthroughs with almost no algebra.

## 6. Voice and embedded coaching

- First-person-plural coaching voice ("we can…", "let's…") — collegial, not lecturing.
- Trap warnings are embedded inline at the exact step where the trap fires: remember
  the ± when square-rooting; dividing both sides by an expression can delete a
  solution; check whether the timeline starts at zero or one; don't stop at the
  solved variable; being "thorough" means testing every choice on
  which-satisfies-all-conditions items. These read as an expert muttering their
  checklist, and they are the most valuable sentences in the book.
- Occasional meta-strategy sentences generalize beyond the item ("this type of
  question requires you to check every choice, not the first that works").

## 7. Why the terse style works — and where it fails

Works because:
- Answer-first means the reader self-selects the depth they need.
- Move-first openings train pattern → first-action mapping, which is the actual
  skill the exam rewards under time pressure.
- One-transformation-per-line algebra is skimmable and reconstructable.
- Multi-method endings convert a review session into strategy comparison.

Fails weaker students because:
- **The move is announced, never motivated.** Nothing explains *how you'd know* to
  square both sides or set the discriminant to zero. The recognition step — the thing
  a struggling student lacks — is assumed.
- Silent arithmetic compression skips exactly the lines where weak students err
  (sign distribution, fraction arithmetic).
- Misconceptions are not diagnosed; only occasional traps are flagged. A student who
  picked a specific wrong choice usually cannot find out why that choice was built.
- Dense chains have no waypoint labels; a lost student cannot tell which line lost them.

## 8. Template for OUR original explanation authoring

We keep our GOAL → WHY-RIGHT → EVERY-CHOICE → TAKEAWAY skeleton; this source's craft
refines the interior of each beat:

```
[GOAL]        One line. What quantity/form the question wants — stated as the
              TARGET, because wrong-target distractors are the #1 archetype.
              (Source's weakness: it omits this; we keep it, but keep it to one line.)

[FIRST MOVE]  One imperative line naming the expert's opening action, PLUS a
              half-line recognition cue: "<move> — because <surface feature of the
              stem that signals it>". This is the source's best beat, upgraded with
              the WHY the source omits.

[WHY-RIGHT]   Centered math chain, one structural transformation per line.
              Show sign-sensitive and fraction steps that the source would skip.
              Interleave at most one short prose line per 3-4 math lines.
              Embed the trap warning AT the step where it fires, not at the end.
              If a construction is needed, insert the redrawn diagram here with the
              added element visually distinct.
              End with the conversion step: solved value → asked quantity.
              Offer "Faster path:" one-liner when a calculator/graphing or
              choice-testing route is genuinely quicker.

[EVERY-CHOICE] For each wrong choice: name the specific one-step error that
              manufactures it (see distractor forensics file). Never "this is
              simply incorrect."

[TAKEAWAY]    One transferable sentence in checklist form ("When you divide both
              sides by an expression, ask what values you just outlawed") — the
              muttered-expert-checklist register, not a formula restatement.
```

### Do
- Put the first move in the first sentence, imperative voice.
- Add the recognition cue the source omits (signal in the stem → move).
- One structural transformation per displayed line; show sign/fraction steps.
- Put trap warnings inline at the firing step.
- Close the math with an explicit "answer the question asked" conversion.
- Offer a second method when it teaches speed (graphing tool, back-solving,
  choice-pruning), labeled clearly and kept short.
- Draw the construction when the move is "add to the picture"; make additions
  visually distinct.
- For grid-ins, state acceptable answer forms; for MC, use the answer grid as
  information when it genuinely prunes.

### Don't
- Don't restate the problem beyond the one-line GOAL.
- Don't narrate arithmetic in prose — display it.
- Don't stack more than ~7 math lines without a prose waypoint.
- Don't present the clever method only; pair insight methods with a mechanical
  fallback so weaker students always have a route.
- Don't defer all warnings to the takeaway — a warning after the chain is a
  post-mortem, not a guardrail.
- Don't refute distractors generically; name the generating error.
- Don't treat calculator routes as cheating — on the digital exam they are strategy.
