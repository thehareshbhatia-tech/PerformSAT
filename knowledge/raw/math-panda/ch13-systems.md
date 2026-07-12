# Raw notes — College Panda SAT Math, Ch. 13 (Systems of Equations)

Source: math-panda scans p0074–p0081 (left half of p0081). Extraction is understanding-only; all wording, names, and examples below are ours.

## Concepts taught

- **linear-system-basics** — a system is two or more equations constraining the same variables; a solution is any variable assignment satisfying all equations at once.
- **substitution-method** — isolate whichever variable is cheapest to isolate (ideally one with coefficient 1), then replace it in the other equation to collapse the system to one variable.
- **elimination-method** — scale one or both equations so a variable's coefficients match in magnitude, then add or subtract the equations to cancel that variable.
- **method-selection-heuristic** — a decision rule, not a preference: a bare variable (coefficient 1 or −1) anywhere → substitution is fastest; coefficients that already match or match after one easy multiplication → elimination. When both are easy, either works.
- **linear-systems-solution-count** — solution count is a statement about the relationship between the two equations: one equation a scalar multiple of the other (coefficients AND constants proportional) → infinitely many; coefficients proportional but constants breaking the proportion → none; coefficients not proportional → exactly one.
- **system-parameter-tuning** — the SAT's favorite disguise: one or two unknown constants sit in the coefficients, and the stated solution count is the constraint. Infinitely-many → force full proportionality; no-solution → force coefficient proportionality while constants must disagree; exactly-one → forbid coefficient proportionality (asked as "which value is impossible").
- **target-expression-shortcut** — when the question asks for a combination (x+y, a−b, 3y−c) rather than individual variables, adding or subtracting the raw equations often yields the combination directly; solving for each variable separately is wasted work.
- **chunk-substitution** — when an identical multi-term block appears in both equations, treat the whole block as a single unknown and substitute its known value; never expand it.
- **linear-nonlinear-systems** — one linear + one quadratic (or circle/absolute-value) equation: isolate a variable from the linear one, substitute into the nonlinear one, expect zero, one, or two solutions from the resulting quadratic.
- **solutions-as-intersections** — graphing a system makes solution count visible: each solution is an intersection point. Same line drawn twice → infinite; parallel lines → none. Conversely, "where do these two graphs intersect?" IS a system-solving question — set the expressions equal.
- **system-word-translation** — two-quantity purchase/count scenarios translate into a count equation (quantities sum to a total) plus a value equation (unit values times quantities sum to a total).

## Teaching philosophy observed

- Methods first, meaning second: both algebraic methods are shown on the same tiny system before any theory, so the student owns the mechanics before solution-count edge cases appear.
- Solution-count rules are derived from single-equation intuition (a chapter earlier had covered when ONE equation has infinite/no solutions), then lifted to systems — an explicit prerequisite bridge rather than a new memorized fact.
- "Equivalent" is defined operationally (one equation can be turned into the other by legal moves), and the book stresses that equivalence can be hidden by scaling — the student must normalize before comparing.
- The graphical view arrives AFTER the algebra, as a consolidating picture, then immediately pays rent: intersection questions are reframed as systems.
- Efficiency is treated as a teachable skill: the target-expression shortcut and chunk-substitution are framed as "answer the question asked, not the question you expected."

## Expert reasoning patterns (generalized)

1. **Scan for the cheap isolate.** Before choosing a method, an expert looks for a coefficient-1 variable. Found → substitution; not found → look for a one-multiplication coefficient match → elimination.
2. **Read the ask before solving.** If the target is a combination of variables, try adding/subtracting the equations as-is first. This converts hard-looking systems into one-step problems.
3. **Normalize before judging solution count.** Divide out common factors so both equations are in lowest comparable form; only then compare coefficient ratios vs constant ratios.
4. **Parameter problems are proportion problems.** Set coefficient ratios equal (and constant ratio equal or unequal depending on the stated count) rather than attempting to "solve" the system.
5. **For graph-intersection questions, set the y-expressions equal** and solve the resulting single equation; back-substitute for the other coordinate only if asked.
6. **Nonlinear systems: substitute the linear into the nonlinear**, and expect a ± moment — carry both roots until the question's constraint (e.g., a sign condition on y) kills one.
7. **Desmos leverage (our note, consistent with this chapter's graph framing):** any "how many solutions / where do they intersect" system can be answered by plotting both equations and counting/reading intersection points — especially valuable for nonlinear systems and three-equation graph questions. Our product has Desmos built in; this should be a first-class taught strategy even though this chapter teaches the graphical idea only conceptually.

## Misconceptions targeted (and why students hold them)

- **equivalence-blindness** — students believe two equations must look identical to be "the same," so a scaled copy (or a decimal-scaled copy like dividing by 0.01) reads as a genuinely different equation. Formed because school practice rarely disguises equivalence. Produces "exactly one solution" answers on infinite-solution systems.
- **constants-included-in-proportionality** — for no-solution setups, students match ALL numbers including constants, accidentally creating the infinite case. They hold this because "make them match" is remembered as one undifferentiated rule; the coefficient/constant split is the actual content.
- **solve-everything reflex** — students grind out x and y individually even when asked for x+y, burning time and inviting arithmetic errors. Formed by years of "find x" homework; the SAT exploits it with combination targets that fall out of one addition.
- **ordered-pair-order confusion** — reporting (y, x) instead of (x, y). Exercise answer choices deliberately include the transposed pair.
- **single-root fixation on nonlinear systems** — students take only the positive square root, missing that "a possible value" questions have two candidates and the listed answer may be the negative one.

## SAT patterns claimed (unverified-claim — check vs official material + our bank)

- Parameter-tuning items ("system has infinitely many / no solutions; find the constant(s)") are a staple, including a two-constant variant asking for a sum or ratio of the constants (m+n, m/n).
- "Which equation could be the second equation" items test solution-count conditions in reverse (given one line and a target count, pick a compatible/incompatible partner).
- Combination-target items (value of x+y, a−b, or an expression like a scaled block) appear specifically to reward the add/subtract shortcut.
- Graph-based items show two (occasionally three) plotted lines/curves and ask for the solution or the solution count.
- Word problems are dominated by the count-equation + value-equation template (two products, two prices, one total each), sometimes with a comparative twist (one revenue exceeds the other by a fixed amount — a subtraction relation students mis-sign).
- Rate/time split-journey word problems (two speeds, total time, total distance) also get modeled as two-variable systems.
- Difficulty escalation observed in the exercises: plain solve → solution-count with one parameter → combination targets → nonlinear (quadratic/absolute-value/root partners) → disguised equivalence via fractions/decimals → fully symbolic systems where the "numbers" are expressions in another constant.

## Prerequisite edges implied

- one-equation solution-count logic (identity vs contradiction) → linear-systems-solution-count
- linear-equation manipulation / isolating variables → substitution-method, elimination-method
- slope-intercept graphing + parallel-lines-have-equal-slopes → solutions-as-intersections, system-parameter-tuning
- quadratic solving & factoring → linear-nonlinear-systems
- verbal-to-equation translation → system-word-translation

## What this source does well / poorly

- **Well:** the method-selection heuristic is explicit and testable rather than "use whichever you like"; solution-count is taught as equation-relationship, which unifies the parameter items; the target-expression shortcut is promoted from trick to principle; exercises escalate cleanly and include reverse-engineered ("which could be the other equation") items.
- **Poorly:** graphical treatment is thin — no slope-ratio shortcut stated (compare a1/b1 vs a2/b2 directly), and no calculator/Desmos strategy despite the exam providing one; nonlinear systems get a single worked case; no timing guidance on when back-substitution is skippable; the three-equation graph item in exercises has no taught support.
