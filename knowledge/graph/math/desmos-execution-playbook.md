---
id: desmos-execution-playbook
section: math
domain: cross-cutting
skill: cross.calculator_strategy (meta-skill; the HOW that pairs with desmos-decision-framework's WHEN)
difficulty_span: [easy, hard]
prereqs: [desmos-decision-framework]
unlocks: []
related: [desmos-decision-framework, engineered-shortcut-recognition, magnitude-sanity-checks]
sources: [distilled from public technique catalogs of high-scoring Desmos-first tutors (James Lu SAT), 2026-07]
---

# The Desmos execution playbook (regression, sliders, lists)

## What it is
Concrete keystroke-level Desmos moves that turn whole question classes into 30-second solves. Where the decision framework says WHEN to graph, this playbook is the HOW: the tilde, subscripted variables, lists, and the stats/geometry helpers. By published frequency estimates these techniques together cover roughly a third of SAT Math items.

## Mental model
**Regression is the master key: replace = with ~ and Desmos solves for whatever letters remain.** Turn x into a data variable (x₁), turn the equals sign into a tilde, and any "find the constant" question becomes a fill-in-the-blank Desmos answers itself.

## Expert reasoning process
1. **Find-the-constant via ~**: given an equation that must hold with an unknown letter (a, b, k), subscript the variable (x → x₁), set x₁ = [1...10] so Desmos knows it must hold for MANY x-values, and swap = for ~. Desmos reports the constant directly. Never test with 0 or 1 — degenerate values satisfy too many equations.
2. **Table regression whenever points are given**: put the points in a table (+ → Table), type the target equation family under it with x₁/y₁, change = to ~ — slope, intercept, or any parameter pops out. Works for lines, quadratics, exponentials alike.
3. **Systems in one line (bracket regression)**: stack the left sides in one list and the right sides in another: [2x₁+3y₁, x₁−y₁] ~ [12, 4]. Desmos returns the intersection without any elimination algebra.
4. **Solution counts**: graph the left side and right side as two separate curves; the number of intersections IS the number of solutions. Faster and safer than discriminant work when coefficients are hostile.
5. **Equivalent expressions / factors**: type y = original and y = each choice; the graph that lies exactly on the original is the equivalent form. Shared x-intercepts test factorship.
6. **Circle equations**: graph the circle as given (no completing the square); midpoint() of the extreme points gives the center, distance() gives the radius.
7. **Function notation**: define f(x)=… once, then evaluate f(2) or transform f(x+2) directly instead of re-deriving.
8. **Stats one-liners**: mean(), median(), stdev() on a typed list beat hand arithmetic every time; sliders (type a=1) let you SEE a parameter's effect when stuck.
9. **Unit circle without memorization**: the only fact needed is x = cos θ, y = sin θ — plot (cos(angle), sin(angle)) and read the point; check answer choices by plugging each angle in, mind the degree/radian toggle, and let ~ regression recover an unknown angle on the hard ones.

## Misconceptions
- **tilde-is-exotic** — students who know Desmos graphs but never learned ~ treat regression items as pure algebra and burn minutes; the tilde is a routine tool, not an advanced feature.
- **single-point regression** — running ~ against one equation with plain x, so Desmos fits one point and returns garbage; the x₁=[1...10] list is what forces "true for all x."
- **test-value 0/1 trap** — checking a claimed identity at x=0 or x=1, where wrong forms coincide with right ones.

## Diagnostic indicators
- Correct but slow on find-the-constant and table items → knows algebra, hasn't internalized the ~ workflow; teach moves 1-3.
- Wrong on "how many solutions" with messy quadratics → never saw the two-curve intersection count; teach move 4.
