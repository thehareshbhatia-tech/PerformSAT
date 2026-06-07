<!-- /autoplan restore point: /Users/hareshbhatia/.gstack/projects/thehareshbhatia-tech-PerformSAT/main-autoplan-restore-20260606-192632.md -->
# Made-For-Me Personalization Plan

**STATUS: IMPLEMENTED — 2026-06-06.** 7 commits on main (1109d92, 2e84245, 27518e5, f7ac124, 760d104, d76edc7, 9a123c3 — the last a live-dogfood catch: pickMostRecentTest returned the oldest attempt on trimmed rows). 1252 tests green, prod build clean, dogfooded live: hero/strip/misses-card/retry-flow/results-h1/school-anchor/mobile all verified on the real account. Implementation deviations (documented in commits): hero renders above the tab bar on BOTH tabs with subtitle suppressed on the plan tab, so item 10's avatar mounts in the STANDALONE plan view only (H-3 anti-repetition); the hero's fixed new-user string moved to the AI Practice Banner (register-rule dedupe); item 15's name echo lands in score-only/weakness-only dailyIntro frames (richest frame stays nameless). Gate decisions: item 16 ACCEPTED into batch; item 18 demotion stays required; growth/analytics challenge queued to TODOS.

**Goal:** The home page and study plan should feel hand-made for each student — their face and name present at every key moment, and copy/data that could only describe THIS student. Builds on the profile photo / firstName / SAT-date work shipped 2026-06-06 (Avatar.jsx, useAuth updateProfilePhoto/updateFirstName, CalendarMonth testDate).

**Background (from codebase map, verified):** The app already has a reusable `Avatar` component (photo or initial-circle fallback), `firstName` + `photoDataUrl` + `testDate` + `targetScore` + `targetSchools` on the user doc, and a deeply personalized StudyPlanDashboard hero. But identity is thin on the home page (avatar only in sidebar), absent at high-emotion moments (TestResults, DiagnosticReport), and the greeting is **silently broken** — it reads a field that is never written.

---

## Phase 0 — Fix the broken identity layer (bugs, do first)

1. **`StudentDashboard.jsx:354`** — greeting reads `user?.displayName`, but `useAuth` only ever persists `firstName` (signup line 65, updateFirstName line 212). The conditional is always falsy → **every user sees a nameless "Good morning."** Fix: read `user?.firstName`.
2. **`PracticeTest.jsx:3703`** — test-runner bottom bar `user?.displayName || 'Student'` → always renders "Student". Fix: `user?.firstName || 'Student'`.
3. **Contract note:** standardize on `firstName`. `displayName` is never written to the user doc; no new code should read it. (TestResults.jsx `displayName` is a math-domain label — unrelated, leave alone.)

**Sequencing (CEO review):** Phase 0 ships as its own standalone commit FIRST — a verified correctness fix must not be held hostage to the rest of the initiative.

## Phase 1 — Identity hero on the home page (the "profile picture section")

4. **Personalized hero strip** at the top of the dashboard tab, replacing the bare-text greeting row. **Pinned design spec (design review 2026-06-06 — values, not ranges):**
   - **Layout:** LEFT-ALIGNED lockup — Avatar left, text stacked beside it, 16px gap. Stacks vertically only <640px. NOT centered (centered avatar-over-name is the AI-slop default).
   - **Avatar:** `lg` preset = 56px (on the preset scale, item 5). Photo or initial circle.
   - **Type mapping (per-span, explicit):** greeting eyebrow = Inter 12px uppercase tracked slate-500 ("GOOD MORNING"); name = Inter 26px/700 slate-900 (the page's single `<h1>`); subtitle = Merriweather italic 15–16px slate-700 — the ONE editorial serif line. Numbers always Inter tabular. (Fraunces is the wordmark only — never body.)
   - **Card chrome:** DataCard canon — white bg, 1px slate-200 border, radius-xl, shadow-sm. NO gradients (guardrails reserve them for CTAs); one deliberate brand moment: 2px brand-orange top rule on the card (the hero must not be brand-silent, especially with a photo where the orange initial-circle disappears).
   - **Subtitle = ONE fact, not three** (reconciles the D-IH-2 decision and the right rail). **Priority order (eng review fix — prefer facts NOT already in the rail):** today's focus ("Two drills on deck today.") → score-to-goal ("Fifty points from your goal.") → days-until-test ONLY when neither exists (the rail's goal/exam tiles + calendar already show the countdown above the fold — duplicating it as the subtitle's top fact contradicted the register rule). Editorial voice. Composed by a new pure selector with a HARD CHAR CAP at a word boundary (prior pitfall: sentence-detection clamps don't fire on semicolon-chained copy). Day-to-day freshness is dailyIntro's job (item 15).
   - **Subtitle permutation matrix (spec + unit-test each):** name-only · name+testDate · name+score · name+testDate+score · name+plan(today's tasks) · zero-data · **firstName-missing variants of each** (legacy docs predate the firstName field — the composer must drop the name clause cleanly, never render "Hi ,").
   - **States (corrected by eng review):** NO hydration skeleton — `useAuth` resolves the full user doc before App mounts the dashboard (App.jsx gates on `loading` + `user`), so identity fields cannot arrive late; a skeleton would be dead code. Give the hero a fixed min-height so photo decode can't shift layout. On Firestore getDoc failure, useAuth leaves `user` null → the dashboard never mounts → no hero error state needed. On doc-missing, `user = {uid, email}` → name renders only if firstName exists, else the greeting drops the name clause cleanly (no email-localpart in an h1 — usernames read as usernames; legacy users have the Profile edit path, and signup has defaulted firstName since the profile feature shipped); no-photo → see item 8 (the MAJORITY state — design it first).
   - **Motion:** none added. The existing projected-score `useCountUp` stays but that card is demoted (item 18) so motion no longer outranks the anchor.
   - Any new grid uses `minmax(0,1fr)` (prior pitfall: bare `1fr` overflows mobile).

   **Top-of-page hierarchy (explicit, in order):** (1) identity hero — the page's sole anchor; (2) Today's Tasks — the primary action; (3) right rail metrics (calendar, score, goal); (4) demoted quiet stat strip (item 18). The hero WITHOUT the demotion is net-negative — it would be a 5th competing anchor; item 18 is therefore a Phase 1 dependency, not optional polish.
5. **Avatar size presets** — export named sizes from `Avatar.jsx` (sm 24 / md 36 / lg 56 / xl 88) so future "avatar in X" work is a 3-minute diff.
6. **Avatar `onError` fallback** — corrupt/truncated `photoDataUrl` currently renders a broken-image glyph (verified: no onError handler in Avatar.jsx). On img error, fall back to the initial circle. Refactor care: the initial derivation relies on the `||` chain (`firstName || email || 'Student'`) treating `''` as falsy — preserve `||` (not `??`) and add a `(name || 'S')[0]` guard so an empty-string name can never reach `[0].toUpperCase()`. Security note: `photoDataUrl` renders ONLY inside `<img src>` — never innerHTML/SVG href; optionally validate the `data:image/(png|jpe?g|webp)` prefix on render (the 200KB/mime guard exists on the write path only).
7. **Extract `selectors/daysUntilTest.js` — this is behavior normalization, NOT mechanical DRY (eng review).** The three sites disagree: CalendarMonth.jsx:50 uses `Math.round` on day-keys, StudentDashboard and StudyPlanDashboard use `Math.ceil` on a live timestamp — a real off-by-one at the <24h boundary (test tomorrow at 6pm today: "in 1 day" vs potentially "TODAY"). Fix: the selector normalizes BOTH dates to local midnight and returns a signed integer day count — rounding ambiguity disappears entirely (the difference is an exact multiple of 24h). Each call site keeps its OWN display mapping ("Test day is TODAY" / countdown / "Was N days ago — update in settings"). Unit tests pin the boundary: testDate=today → 0, tomorrow → 1, yesterday → −1, at any time of day.
8. **"Add a photo" affordance — design the no-photo state FIRST; it is the majority state.** When `photoDataUrl` is null: initial circle at lg 56px (orange brand bg, existing Avatar fallback), camera-glyph badge (16px, bottom-right of the circle, slate-100 bg — **NOTE: no CameraIcon exists in icons.js; author one**, Lucide-style 24×24 stroke, matching the library; `VideoCameraIcon` is the wrong glyph) signaling the affordance without hover, and "Add a photo" as an Inter 13px slate-500 underlined link directly below the avatar, ≥44px touch target, `aria-label="Add a profile photo"`, navigating to Profile. **Analytics — exact call (the naive call silently no-ops):** `trackEvent` requires `userId` first and early-returns if falsy (analyticsService.js:58-59). Add a convenience wrapper per the file's existing pattern: `trackAddPhotoClicked(userId)` → `trackEvent(userId, 'profile', 'add_photo_clicked')`, called with `user.uid` — otherwise photo-adoption reads as a permanent 0%.
9. **Heading discipline + a11y** — the greeting `<h1>` (StudentDashboard.jsx:353) is the page's single h1; the hero replaces it and must keep exactly one h1 (FINDING-006 regression guard). Avatar img gets `alt="Your profile photo"`; 40-char names ellipsis-truncate, never wrap the lockup; focus rings inherit global.css.

## Phase 2 — Identity at high-emotion moments

10. **StudyPlanDashboard hero** — mount `Avatar` (`md` preset = 36px, on the preset scale) beside the "Name, here's your path to X Math" headline (line ~615). **One hero lockup pattern across both tabs** — same type mapping and avatar-left structure as the home hero, parameterized by tab; only the copy differs. Heading-level asymmetry is intentional: home hero is the page `<h1>`, plan hero stays `<h2>` (it's a tab section).
11. **TestResults header** — the identity stamp **REPLACES the existing `<h1>` at TestResults.jsx:2181** (merges test title + identity into one heading: "Haresh's results — Practice Test 4 · June 6"); it must NOT add a second h1 beside it (that would regress the FINDING-006 single-h1 guard on this screen). `user` is already threaded to TestResults (App.jsx mounts pass it) — no prop threading needed. Double-orange caution: TestResults body already uses 28px orange section-number circles (TestResults.jsx:411-416); with a no-photo user the header avatar is also an orange circle — accepted and documented; verify it reads fine in the post-implementation /design-review pass. Emotion-NEUTRAL by design (score-valence treatment is a known deferred gap). **Must pair with a forward action**: the identity stamp ships together with the existing "View full diagnosis" / retry affordances given visible placement beside it — never the student's face on a bad score with no path out (reuses existing flows; no new card).
12. **DiagnosticReport header** — identity stamp (avatar `md` 36px, name, test, date) on the diagnostic snapshot. `user` already threads to DiagnosticReport (App.jsx) — no new wiring. Audit its existing heading structure the same way as item 11 (merge, don't duplicate). Identity fields read from the live user doc (not the snapshot). Diagnostic body copy stays pure narrative per product rule (no tips — tips live in the study plan).

## Phase 3 — Copy that knows the student

13. **Empty/new-user states greet by name** — exact strings (copy IS the design here; no improvising at implementation):
    - AI Practice Banner (no plan yet): "Hi {Name} — take your first practice test to unlock your plan."
    - TodaysTasksCard no-plan branch: "{Name}, your study plan starts with one diagnostic test."
    - StudyPlanDashboard empty state: "{Name}, here's where your plan will live. One practice test builds it."
    - Name leads or appears in the first clause; one name per surface, never two; if firstName missing, drop the name clause cleanly (no "Hi ,").
14. **Dashboard goal tile gains the target-school anchor** — **REWRITTEN (eng review): a mid-50% RANGE does not exist in the data.** `collegeData.js` stores `satMath` as a single median integer (50th percentile, per its own header comment) — there is no 25th/75th data anywhere. Exact format: school name on line 1 (Inter 13px slate-600, ellipsis), "Median Math: {satMath}" on line 2 (Inter 12px slate-500, number tabular). Data from user.targetSchools[0]; tile unchanged when no school set. **Also fix the existing mislabel** at StudyPlanDashboard.jsx:646, which renders "mid-50% Math: {satMath}" for the same single median — relabel to "Median Math" so the two surfaces agree and neither fabricates a range.
15. **Daily intro name echo** — `selectors/dailyIntro.js` accepts optional `firstName`, used at most ONCE per paragraph and only in designated frames (e.g. "{Name}, today is about {skill}." as a frame variant — not appended to every branch). Today's Tasks reads like a note to the student, not a mail-merge.
    - **Copy register rule (all name-aware surfaces):** the name appears at most once per screen region; warm but not saccharine; never exclamation-marked greetings; never repeat the name the rail/hero already shows in the same viewport.

## Phase 4 — Only-this-student content (CEO review: decisions logged 2026-06-06)

16. **"Questions you struggled with" card** — top 3 wrong answers from the most recent test (data already preserved in per-attempt snapshots), each with a "Retry similar" CTA into the existing trySimilar flow. **ACCEPTED at final gate (2026-06-06).** Placement per the page hierarchy: in the main column below Today's Tasks, above the demoted stat strip. New pure selector (`recentMisses.js`: pick top 3 wrongs from most recent attempt snapshot, unit-tested); card follows DataCard canon; question stems clamped (hard char cap at word boundary); hidden entirely when no completed test or no wrongs (no empty shell).
17. **Compact "How you test" line on home** — surface one significance-gated identity insight (answer-change behavior / stamina fade / calculator dependency) from the already-built `identityInsights` selector, which currently renders only on the study plan tab. **ACCEPTED into scope** (1-2 files, reuses existing selector, in blast radius). Design: a single Merriweather italic 14px slate-600 line under the Review & Pacing section heading — same editorial register as the diagnostic sentences; hidden entirely when no insight passes the significance gate (no empty shell).
18. **Demote the saturated stat tiles so the hero anchors the page** (FINDING-003 remediation). **CONVERTED: taste → REQUIRED Phase 1 dependency (design review 2026-06-06)** — the hero is net-negative as a 5th competing anchor without this; broken hierarchy is structural, not aesthetic. Concrete definition of "quiet": collapse the 3-card `acely-performance-grid` into a single horizontal metric strip — label–value pairs, Inter 12px slate-500 labels / 16px slate-900 tabular values, no card chrome, hairline top border — placed BELOW Today's Tasks. The projected-score card keeps its `useCountUp` but moves with the strip's section. Implementation note (eng review): this moves JSX from above `dashboard-grid` (StudentDashboard.jsx:495) into the main column — the `strongest`/`weakest`/`practicePercent` derivations (lines ~182-187) and `animatedScore` (line ~319) are plain render-scope consts, so the move is mechanical, but it touches the component's primary layout container, not just CSS; both conditional gates (`practiceEntries.length > 0`, `scoreHistory.length >= 2`) move intact. (User may still override at the final gate; the conversion and its reasoning are surfaced there.)

### Deferred to TODOS.md (CEO review)
- Score-journey timeline ("Your Score Journey" full trajectory chart with prediction bands)
- Testing-personality card from the 6D studentFingerprint
- Prediction-history surface ("How we've predicted your score")
- Streak milestone moments (7/14/21-day)
- Full right-rail hydration skeletons (pre-existing TODO; hero gets its own skeleton in Phase 1)

---

## Design constraints (non-negotiable)

- **NO EMOJIS** anywhere — SVG icons from `src/design/icons.js` only.
- Use `design-tokens.css` custom properties; follow card canon (`DataCard.css`, `TodaysTasksCard.css`): white bg, 1px slate-200 border, radius-md/xl, shadow-sm with hover lift.
- Diagnostic copy = pure narrative (why the score happened); prescriptive tips belong in the study plan only.
- Touch targets ≥44px; mobile stacking at 640px breakpoint.

## Verification

- Jest suite green (baseline ~1193; 2 pre-existing StudyPlanDashboard bank:test failures are known).
- Dogfood live with test login via /browse: home (new + returning user states), study plan, test results, diagnostic report.
- /design-review pass on home + study plan after implementation.
- Note: @testing-library/react is NOT installed — component render tests are not possible. Mitigation: every new branch lives in pure selectors with unit tests (heroSubtitle, daysUntilTest, dailyIntro name echo); components stay thin mounts. RTL install goes to TODOS.
- Dogfood checklist additions (eng review): verify CalendarMonth + hero + goal tile agree with testDate set to TODAY and to TOMORROW (the <24h boundary that round/ceil used to split on); verify TestResults heading is a single merged h1; verify "Add a photo" event lands in analyticsEvents with a real uid.

---

## CEO Review Outputs (2026-06-06, via /autoplan — [subagent-only], Codex unavailable: account rejects all models)

### What already exists (leverage map)
| Sub-problem | Existing code | Plan reuses? |
|---|---|---|
| Avatar render (photo/initials) | `components/ui/Avatar.jsx` + `utils/avatarImage.js` | YES (adds presets + onError) |
| Identity fields | `useAuth` user doc: firstName, photoDataUrl, testDate, targetScore, currentScore, targetSchools | YES (no new fields) |
| Personal hero pattern | `StudyPlanDashboard.jsx:615-650` | YES (home hero mirrors it) |
| Days-until-test | 3 inline copies (CalendarMonth:70, StudyPlanDashboard:221, StudentDashboard:~625) | CONSOLIDATES into selector |
| Per-day editorial copy | `selectors/dailyIntro.js` | YES (adds optional firstName) |
| Identity insights | `selectors/identityInsights.js` (renders on plan tab only) | YES (compact line on home) |
| Wrong-answer snapshots + retry | attempts subcollection + `trySimilarService` | ONLY IF taste-pick #16 approved |
| Empty/onboarding states | TodaysTasksCard branches, AI Practice Banner | YES (name-aware copy) |

### NOT in scope (deferred with rationale)
- Score-journey timeline — own design pass; visualization decisions deserve /design-shotgun
- Testing-personality card (6D fingerprint) — diagnostic-content rules apply; own batch
- Prediction-history surface — outside stated surfaces (home + study plan identity)
- Streak milestone moments — new behavior pattern, not identity work
- Full right-rail hydration skeletons — pre-existing TODO; hero gets its own skeleton
- analyticsEvents arrayUnion unbounded-array fix — pre-existing latent bug (analyticsService.js:96), needs its own fix; goes to TODOS
- Acquisition/analytics instrumentation (PostHog-class) — flagged by outside voice as the strategic gap; surfaced to user at final gate, not silently added
- RTL (@testing-library/react) install — enables component render tests later

### Dream state delta
CURRENT: identity lives only in the sidebar + Profile page; home greeting silently nameless; results/diagnostic screens anonymous.
THIS PLAN: identity + student-specific copy at every key surface (home hero, plan hero, results, diagnostic, empty states); photo-adoption affordance + measurement.
12-MONTH IDEAL: every surface narrates this student's journey — score timeline with prediction bands, testing-personality, school-fit ladder, shareable diagnostic artifact. This plan builds the identity rails those ride on; the deferred TODOS are the next rungs.

### Error & Rescue Registry
| Codepath | What can go wrong | Handling | User sees |
|---|---|---|---|
| heroSubtitle selector | testDate malformed / NaN days | YYYY-MM-DD guard (CalendarMonth:45 pattern), null branch | Subtitle omits countdown |
| heroSubtitle selector | all inputs null (brand-new user) | dedicated pre-first-test branch | Onboarding-flavored hero |
| heroSubtitle output | semicolon-chained runaway copy | HARD char cap at word boundary | One clean line |
| Avatar img | corrupt/truncated photoDataUrl | onError → initial circle (NEW, plan item 6) | Initials, never broken-image |
| Hero mount | photo decode shifts layout | fixed min-height on hero (skeleton removed — user doc is fully loaded pre-mount, see item 4 States) | No layout jump |
| TestResults/DiagnosticReport header | user prop undefined | user is guaranteed by the route gate (App.jsx mounts inside `user ?`); conditional render kept as a cheap guard | Header absent, screen intact |
| dailyIntro + firstName | name missing | existing copy unchanged | Same as today |

### Failure Modes Registry
| Codepath | Failure mode | Rescued? | Test? | User sees | Logged? |
|---|---|---|---|---|---|
| heroSubtitle | NaN/invalid date | Y (guard) | Y (unit) | countdown omitted | n/a (pure) |
| Avatar | corrupt dataUrl | Y (onError) | manual+dogfood (no RTL) | initials | n/a |
| daysUntilTest boundary | round/ceil drift at <24h | Y (day-key normalization, item 7) | Y (unit: today=0, tomorrow=1, yesterday=−1) | consistent countdown on all surfaces | n/a |
| Name overflow | 40-char names | Y (ellipsis/clamp) | unit (cap) + dogfood | clean truncation | n/a |
| Heading structure | second h1 introduced | Y (review guard) | design-review pass | n/a | n/a |
No CRITICAL GAPS: no row is silent-unrescued-untested.

## Design Review Outputs (2026-06-06, via /autoplan — [subagent-only])

### Litmus scorecard (home dashboard as APP UI; pre-fix → post-fix)
| Check | Claude | Post-fix |
|---|---|---|
| Brand unmistakable in first screen? | NO | YES — 2px brand top rule on hero |
| One strong visual anchor? | NO (4 anchors) | YES — explicit hierarchy + tile demotion required |
| Scannable by headlines only? | PARTIAL | YES — stat numerals demoted to strip |
| Each section has one job? | NO (subtitle did 3 jobs) | YES — one-fact subtitle, freshness ceded to dailyIntro |
| Cards actually necessary? | RISK (card-soup) | YES — net card count unchanged (hero in, grid out) |
| Motion improves hierarchy? | UNADDRESSED | DECIDED — no new motion; countUp demoted with its card |
| Premium without decorative shadows? | YES | YES — DataCard canon, gradients banned in hero |
Hard rejections triggered: none post-fix (stacked-card mosaic resolved by demotion).

### Pass ratings (before → after plan fixes)
| Pass | Before | After |
|---|---|---|
| 1 Information architecture | 3/10 | 9/10 |
| 2 Interaction state coverage | 5/10 | 9/10 |
| 3 User journey / emotional arc | 4/10 | 8/10 |
| 4 AI slop risk | 4/10 | 8/10 |
| 5 Design system alignment | 6/10 | 9/10 |
| 6 Responsive & accessibility | 6/10 | 9/10 |
| 7 Unresolved decisions | — | 2 to final gate (#16 card; #18 override option), mockups deferred to implementation |

### Design NOT in scope
- Score-valence emotional treatment on TestResults (stamp is emotion-neutral BY DESIGN; valence treatment is a named deferred gap)
- Visual mockup board (/design-shotgun) — deferred to implementation phase per autoplan; the pinned spec above is the build contract
- DESIGN.md authoring — design/gemini/design-system-spec.md + style-guardrails.md serve as the system source; consolidating into a root DESIGN.md goes to TODOS

## Eng Review Outputs (2026-06-06, via /autoplan — [subagent-only])

### Architecture (new components and their relationships)
```
                            useAuth (user doc: firstName, photoDataUrl,
                                     testDate, targetScore, targetSchools)
                                │ props (already threaded — NO new wiring)
        ┌───────────────┬──────┴────────┬───────────────┬──────────────┐
        ▼               ▼               ▼               ▼              ▼
  StudentDashboard  StudyPlanDash   TestResults    DiagnosticReport  PracticeTest
        │               │           (h1 MERGE,        (header,       (bottom bar
        │               │            :2181)            audit h1)      :3703 fix)
        ▼               ▼
  ┌─ DashboardHero ─┐  hero gets <Avatar md>
  │ <Avatar lg=56>  │
  │ eyebrow/h1/sub  │──── selectors/heroSubtitle.js (NEW, pure: 12-combo matrix)
  │ AddPhoto link ──┼──── analyticsService.trackAddPhotoClicked(uid) (NEW wrapper)
  └─────────────────┘
        │
        └──── selectors/daysUntilTest.js (NEW, pure: day-key normalized signed int)
                ▲              ▲                ▲
        CalendarMonth   StudentDashboard   StudyPlanDashboard   (display mapping
        ("TODAY")       ("Was N days ago") ("test in N days")    stays per-site)

  Avatar.jsx: + SIZES presets {sm:24, md:36, lg:56, xl:88} + onError→initials
  icons.js:   + CameraIcon (net-new authoring)
  Stat grid:  acely-performance-grid → quiet metric strip BELOW TodaysTasksCard
```
No new services, no new Firestore reads/writes, no new routes. All data flows are props-down from already-mounted state. Rollback: git revert per commit.

### Test coverage diagram
```
CODE PATHS                                          USER FLOWS
[+] selectors/heroSubtitle.js                       [+] Home, returning user
  ├── [PLAN ★★★] 6 data combos × name-missing        ├── [PLAN] hero anchor + demoted strip (dogfood)
  ├── [PLAN ★★★] hard char cap at word boundary      ├── [PLAN] photo vs initials vs add-photo link
  └── [PLAN ★★★] zero-data fixed string              └── [PLAN] subtitle = one non-rail fact
[+] selectors/daysUntilTest.js                      [+] Home, new user (no tests)
  ├── [PLAN ★★★] today=0 / tomorrow=1 / yest=−1      └── [PLAN] fixed-string hero, name-aware empties
  ├── [PLAN ★★★] invalid format → null              [+] Test-day boundary
  └── [PLAN ★★★] time-of-day invariance              └── [PLAN→DOGFOOD] calendar/hero/tile agree @ today+tomorrow
[+] selectors/dailyIntro.js (name echo)             [+] Post-test (TestResults)
  ├── [PLAN ★★ ] frame with/without firstName        ├── [PLAN→DOGFOOD] merged single h1 w/ identity
  └── [EXISTING] current branches stay pinned        └── [PLAN→DOGFOOD] forward action beside stamp
[+] Avatar.jsx presets + onError                    [+] Study plan tab
  └── [GAP→manual] no RTL: onError needs dogfood     └── [PLAN→DOGFOOD] md avatar in hero, same lockup
[+] Phase 0 greeting/bottom-bar fix                 [+] Add-photo loop
  └── [PLAN ★★ ] (selector-level if extracted;       └── [PLAN→DOGFOOD] click → Profile → upload →
       else dogfood)                                      avatar everywhere + event with real uid

COVERAGE: all NEW selector branches unit-tested; component mounts verified by
live dogfood + /design-review (RTL absent — render tests impossible; logged to TODOS)
REGRESSION RULE: daysUntilTest boundary tests are CRITICAL (existing CalendarMonth
behavior must not shift); dailyIntro existing-branch snapshots pinned before adding frames.
```

### Eng NOT in scope
- RTL/component render-test infrastructure (TODOS; precedent: 15 pure selector test suites)
- analyticsEvents arrayUnion bounded-array fix (TODOS — pre-existing, latent 1MB doc risk)
- 25th/75th percentile college data sourcing (would unlock a real mid-50% range — TODOS if ever wanted)

<!-- AUTONOMOUS DECISION LOG -->
## Decision Audit Trail

| # | Phase | Decision | Classification | Principle | Rationale | Rejected |
|---|-------|----------|----------------|-----------|-----------|----------|
| 1 | CEO | Mode = SELECTIVE EXPANSION | Mechanical | autoplan override | Feature enhancement default | other modes |
| 2 | CEO | Approach B (identity layer) over A (minimal) / C (full data push) | Mechanical | P1 completeness | Highest completeness within stated surfaces; C extras deferred | A, C |
| 3 | CEO | ACCEPT "How you test" compact line on home | Mechanical | P2 blast radius | 1-2 files, reuses identityInsights | skip |
| 4 | CEO | Hero hydration skeleton = Phase 1 requirement | Mechanical | P1 | Known rail pop-in trap applies to hero | ignore |
| 5 | CEO | "Questions you struggled with" card → TASTE (final gate) | Taste | P2 borderline | 3-5 files, borderline radius | — |
| 6 | CEO | Demote stat tiles (FINDING-003) → TASTE (final gate) | Taste | P5/P1 | Aesthetic call, design-audit-backed | — |
| 7 | CEO | Defer timeline/fingerprint/prediction-history/streaks → TODOS | Mechanical | P2/P3 | Outside blast radius; own design passes | build now |
| 8 | CEO | ADD Avatar onError → initials fallback | Mechanical | P1 | Verified: no onError in Avatar.jsx | leave broken-img |
| 9 | CEO | ADD selectors/daysUntilTest.js consolidation | Mechanical | P4 DRY | Verified 3 dupes; hero would be 4th | duplicate again |
| 10 | CEO | ADD "Add a photo" hero affordance + adoption event | Mechanical | P1/P2 | Most users have no photo; makes vision real + measurable | skip |
| 11 | CEO | Phase 0 ships standalone first | Mechanical | P6 | Bug fix decoupled from initiative | bundle |
| 12 | CEO | No feature flag for hero; rollback = git revert | Mechanical | P3/P5 | Pure UI, bisectable commits, solo direct-to-main | flag it |
| 13 | CEO | analyticsEvents arrayUnion bloat → TODOS | Mechanical | P2 | Pre-existing latent bug, own fix | fix in this batch |
| 14 | CEO | RTL absent: selector-tests + dogfood mitigation; RTL → TODOS | Mechanical | P3 | No RTL in package.json | block on install |
| 15 | CEO | Outside-voice strategy challenge (analytics/acquisition first; promote shareable diagnostic) → flag at FINAL GATE, not auto-adopted | Flagged | user sovereignty | Single-voice critical finding; premise gate already passed | auto-adopt |
| 16 | CEO | Spec-review loop on CEO plan doc covered by dual-voice review | Mechanical | P3 | Avoids duplicate adversarial pass on side artifact | extra loop |
| 17 | Design | CONVERT #18 tile demotion: taste → REQUIRED Phase 1 dependency | Mechanical (structural) | P5/P1 | Broken hierarchy is structural per autoplan override; hero net-negative without it; user can override at gate | keep as taste |
| 18 | Design | Hero subtitle = ONE fact (D-IH-2 + rail dedupe); freshness ceded to dailyIntro | Mechanical (structural) | P5 | Subtitle did 3 jobs, duplicated rail; D-IH-2 regression risk | 3-fact subtitle |
| 19 | Design | Pin hero spec: left-aligned, lg 56 avatar, per-span type mapping, DataCard canon + 2px brand rule | Mechanical | P5 | Range-soup spec = deferred decisions; brand-silent hero failed litmus | ranges |
| 20 | Design | No-photo state designed FIRST (camera badge + 44px link + aria-label) | Mechanical (missing state) | P1 | Majority state was least specified | fallback treatment |
| 21 | Design | Subtitle permutation matrix (6 combos) + FIXED string for zero-data | Mechanical (missing states) | P1 | "Degrades gracefully" was a promise, not a spec; new users never ride dynamic path | composer-only |
| 22 | Design | One hero lockup pattern across tabs; avatar sizes locked to presets (home lg 56, plan/results/diagnostic md 36) | Mechanical | P5 | Preset scale and consumers were misaligned (32-40 fit no preset) | per-surface ad hoc |
| 23 | Design | TestResults identity stamp must pair with forward action (reuse existing flows) | Mechanical (journey) | P1/P3 | Face on a bad score with no path out is a liability; lighter than promoting #16 | promote #16 / nothing |
| 24 | Design | Exact copy strings written for all name-aware surfaces + copy register rule | Mechanical | P5 | "Greet by name" x7 surfaces would yield 7 voices | improvise at build |
| 25 | Design | No new motion; skeleton only; countUp demoted with its card | Mechanical | P5 | Motion emphasized a secondary element over the anchor | hero entrance anim |
| 26 | Design | Mockup board deferred to implementation (/design-shotgun available) | Mechanical | P3 | Autoplan replaces interactive loops; pinned spec is the contract | inline board now |
\n| 27 | Eng | Item 14 REWRITTEN: median single number, not a fabricated mid-50% range; relabel StudyPlanDashboard:646 too | Mechanical (factual) | P5 | collegeData.satMath is a single median int (conf 10) | range as written |
| 28 | Eng | TestResults stamp MERGES into existing h1 (:2181), never a second h1 | Mechanical (factual) | P5/P1 | Would regress single-h1 guard (conf 9) | add beside |
| 29 | Eng | daysUntilTest = day-key-normalized signed int; display mapping stays per-site; boundary tests CRITICAL | Mechanical (corrected) | P5 | round-vs-ceil off-by-one at <24h was hidden in "mechanical DRY" (conf 9) | pick one rounding on live timestamps |
| 30 | Eng | Hero hydration skeleton REMOVED (dead code) → fixed min-height only | Mechanical (corrected) | P3/P5 | useAuth fully resolves before dashboard mounts; reverses design decision on evidence (conf 8) | keep skeleton |
| 31 | Eng | "Auth cache" fallback replaced with real chain; no email-localpart in h1 (drop name clause cleanly) | Mechanical | P5 | The stated fallback didn't exist; usernames read as usernames | email localpart in greeting |
| 32 | Eng | trackEvent exact signature + trackAddPhotoClicked(uid) wrapper | Mechanical (factual) | P5 | Naive call silently no-ops → permanent 0% metric (conf 9) | unspecified call |
| 33 | Eng | CameraIcon = net-new authoring task in icons.js | Mechanical (factual) | P5 | No CameraIcon exists; only VideoCameraIcon (conf 10) | assume reuse |
| 34 | Eng | Subtitle priority reordered: today's-focus → score-to-goal → countdown last | Mechanical | P5 | Countdown-first duplicated two rail elements in-viewport, contradicting the register rule (conf 8) | countdown first |
| 35 | Eng | Avatar refactor guards: preserve || chain + (name||'S')[0]; photoDataUrl only ever in <img src> | Mechanical | P1 | Empty-string name crash vector + render-surface note (conf 6) | unguarded refactor |
| 36 | Eng | firstName-missing rows added to subtitle matrix | Mechanical | P1 | Legacy docs predate firstName; likelier than zero-data (conf 7) | matrix as was |
| 37 | Eng | TestResults double-orange accepted + documented; verify at /design-review | Mechanical | P3 | 28px section badges vs 36px header avatar; acceptable, watch it (conf 7) | redesign badges now |
| 38 | Eng | Complexity check triggered (~14 files) — logged, NOT reduced | Mechanical | autoplan P2 override | Files are shallow mounts of existing data; scope held | reduce scope |
| 39 | Gate | Item 16 struggled-with card ACCEPTED into batch | User decision | — | "Add to batch" at final gate | defer |
| 40 | Gate | Item 18 demotion conversion CONFIRMED (required) | User decision | — | "Keep required" at final gate | override |
| 41 | Gate | Growth/analytics strategy challenge → TODOS with context | User decision | — | "Queue to TODOS" at final gate | dismiss / next-batch |
| 42 | Gate | PLAN APPROVED as reviewed | User decision | — | Final gate option A | interrogate / revise |

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 1 | CLEAR (via /autoplan) | 8 proposals, 3 accepted, 4 deferred; 0 critical gaps |
| Codex Review | `/codex review` | Independent 2nd opinion | 0 | UNAVAILABLE | account rejects all models — fix codex auth/config |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 1 | CLEAR (via /autoplan) | 15 issues found, all fixed into plan; 0 critical gaps |
| Design Review | `/plan-design-review` | UI/UX gaps | 1 | CLEAR (via /autoplan) | score 5/10 → 9/10, 10 decisions |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | SKIPPED | no developer-facing scope |

- **CROSS-MODEL:** Codex unavailable all phases — all voices [subagent-only]; CEO strategy challenge surfaced and resolved at gate (queued to TODOS).
- **UNRESOLVED:** 0
- **VERDICT:** CEO + ENG + DESIGN CLEARED — ready to implement.
