---
id: quadratic-method-selection
section: math
domain: advanced-math
skill: quadratic-via-factoring
difficulty_span: [medium, hard]
prereqs: [sum-product-factoring, completing-square-quadratic-formula, vieta-root-aggregates]
unlocks: []
related: [chunking-repeated-structure, solve-for-the-asked-quantity, extraneous-solutions-non-reversible-moves]
---

# Choosing the solving method — the answer choices tell you

## What it is
The meta-skill above all quadratic solving: any method can solve any quadratic, at wildly different time and error cost, and the question itself — its tail and its answer choices — telegraphs the cheap route before you write anything. Whole-number choices → integer factoring exists. Radicals in the choices → factoring is futile; complete the square or run the formula. An aggregate ask (sum/product of solutions) → Vieta, never solve. Hostile coefficients, degree ≥ 3, or a coordinate ask → graph it in Desmos. This routing decision, made in about five seconds, is worth more points per hour than any single method's mechanics.

## Why it exists / why the SAT tests it
The SAT doesn't test methods; it tests problems, and it prices the routes differently on purpose. A student with perfect mechanics but no routing habit burns double time and takes the widest-error-surface path (usually the formula) everywhere. Answer-choice form reliably telegraphs method (whole numbers → factorable; d ± √e → not) (unverified-claim — verify against bank), and "the answer choices are part of the problem statement" is the single most transplantable expert behavior in this cluster.

## Mental model
**Read the exits before entering the maze.** The choices and the question tail are a map of where you're supposed to come out; work backward from the exit to pick the corridor. Every method is a corridor with a posted price: factored-form read-off (cheapest, when available) → a = 1 factoring → divide-through / scaled factoring → completing the square → quadratic formula (always open, most expensive, most error-prone). Vieta and Desmos are side doors that skip the maze entirely for specific asks.

## Expert reasoning process
1. **Question tail first**: what is actually wanted? Sum/product of solutions → [[vieta-root-aggregates]], stop. A factor → factoring or graph-intercept route. A parameter in a template → formula + surd matching. A coordinate → graph. The root itself → continue.
2. **Choices scan**: whole numbers or simple fractions → integer factoring will land ([[sum-product-factoring]]). Radicals (d ± √e shapes) → skip the factor search entirely ([[completing-square-quadratic-formula]]). Set-notation fractions with a ≠ 1 → factored-form read-off or scaled sum-product. "One possible value" → two roots exist and a filter is coming.
3. **Shape scan**: already factored → read off. c = 0 → pull x. Difference of squares / perfect-square trinomial → template. Repeated chunk → [[chunking-repeated-structure]]. Four terms, degree ≥ 3 → grouping (rare, and built so a shared binomial appears) or Desmos.
4. **Desmos triage** (our product embeds it): coefficients hostile (decimals, large numbers), equation degree ≥ 3, ask is a coordinate or an intersection, or radicals-vs-decimal comparison needed → graph, read intercepts/intersections. Linear-quadratic systems: graph both, tap the point — also immunizes against the wrong-coordinate trap. NOT for aggregate asks (Vieta is faster) or symbolic/parameterized answers (the graph can't show k).
5. Default when nothing cheap fires: completing the square or formula, chosen by which YOU execute more reliably. A method you can run confidently beats a faster one requiring a leap of faith.
6. Rule of thumb worth memorizing: **algebra when the structure is visible in five seconds; Vieta when only aggregates are asked; Desmos when coefficients are hostile, degree ≥ 3, or the ask is a coordinate.**

## Misconceptions
- **formula-always** — one tool for everything because it always works. Forms because the formula is the universally memorized artifact. Pays 3–5× time on factorable items and maximizes slip exposure. (Band note below: at mid-band this default is partially defensible.)
- **radical-blindness** — grinding integer factor pairs while the choices visibly contain √. The cue was printed on the page; the student never looked. Forms because "read the choices first" was never taught as a step of solving.
- **choices-are-cheating** — believing that reading answer choices or graphing before working is illegitimate. Forms from classroom norms where showing full algebra IS the deliverable. On the SAT the choices are part of the problem statement and Desmos is a provided instrument.
- **plug-in-everything** — backsolving all four choices as the default strategy. Works, teaches nothing, and is slow on this family (unlike radical/rational solution-set items, where it genuinely wins — see [[extraneous-solutions-non-reversible-moves]]). The error is applying one meta-strategy indiscriminately.
- **desmos-blindness / desmos-overuse** — the pair: never touching the calculator on a hostile-coefficient item, or graphing a clean factorable quadratic and an aggregate ask. Both are routing failures; the calculator has a price list too.

## Diagnostic indicators
- **formula-always**: formula work on factorable items; overall slow pacing with decent accuracy; sign-slip errors clustered on the formula's dense spots.
- **radical-blindness**: long timing then a wrong or blank answer on radical-choice items; scratch work shows factor-pair searching.
- **choices-are-cheating**: explains solutions with full algebra even where they guessed; asks whether graphing is "allowed."
- **plug-in-everything**: timing flat across difficulty (backsolving costs the same everywhere); struggles on grid-ins where there are no choices to plug.
- **desmos routing failures**: wrong-coordinate picks on systems items (never graphed); or calculator open on a "sum of solutions" item (graphed unnecessarily).

## Remediation pathways
- **formula-always** → the routing table taught explicitly, then timed same-item-two-ways contrasts. If mechanics elsewhere are shaky, fix [[sum-product-factoring]] first — routing to a method they can't execute helps nothing.
- **radical-blindness** → make step 1 physical: annotate the choice format (integers? radicals? fractions?) before touching the stem, ten items in a row until automatic.
- **choices-are-cheating** → reframe: the SAT is answer-selection under time; choices and Desmos are instruments, not cheats. One session of explicitly sanctioned choice-reading usually dissolves the norm.
- **plug-in-everything** → cost ladder: show where backsolving wins (solution-set radical items) and where it loses (parameterized, grid-in); the meta-strategy needs its own routing rule.
- **desmos calibration** → drills tagged by intended route; the student must NAME the route (factor / CtS / formula / Vieta / Desmos) before solving, then compare against the intended one.

## Mastery criteria
Names the intended route within ~5 seconds for a mixed set and is right most of the time; execution follows the named route; no formula work on factorable items; Desmos used on hostile/degree-3/coordinate items and NOT on aggregate asks. Proof: section pacing improves with unchanged accuracy — routing mastery shows up in the clock more than in the score.

## Difficulty ladder
This node's difficulty tracks the disguise level of the routing cue. Medium: explicit cues (radicals in choices, "sum of solutions" verbatim). Medium-hard: cues requiring one inference ("one possible value" implying a filter; set-notation fractions implying a ≠ 1 factoring). Hard: composed items where the route changes mid-problem (chunk first, then Vieta; normalize, then read choices), and items where the printed form baits the expensive route (an expanded mess that re-factors trivially).

## Teaching notes
- **Struggling**: don't teach routing as a menu — it overwhelms. Give ONE default (formula, executed with the parenthesize protocol) plus ONE exception (whole-number choices → try factoring for 20 seconds first). Expand the table only as mechanics stabilize.
- **Average**: the full price list with the two highest-value cues (radicals in choices; aggregate asks). The formula-default is acceptable robustness here — upgrade routing before upgrading methods.
- **Advanced**: the complete decision procedure including Desmos triage and the shape scan; name-the-route drills; introduce completing the square as the lighter non-factorable tool.
- **1500+**: routing as reflex, plus the completing-the-square-primary policy as a deliberate optimization (mental CtS, vertex-form dividends). They should also read distractor architecture: identifying which choice punishes which wrong route is both a self-check and an elimination weapon.
