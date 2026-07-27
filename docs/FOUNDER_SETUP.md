# Founder setup checklist

The short list of things only you (account owner) can do. Everything below is
already wired in code and **safely inert until its key exists** — nothing
breaks while an item is still unchecked. Written 2026-07-27; ask Claude to do
the surrounding work (deploys, verification) whenever you complete a step.

---

## 1. Helicone — see what the AI tutor costs, per student (~5 min)

Why: today we can't see token spend, latency, or failures per student. With
this, one dashboard shows exactly where the Anthropic bill goes.

1. Go to https://helicone.ai → Sign up (free tier is plenty to start).
2. In their dashboard: **Settings → API Keys → Generate new key** (starts
   with `sk-helicone-`).
3. Open the file `functions/.env` in the project and add one line:
   `HELICONE_API_KEY=sk-helicone-...`
4. Tell Claude "deploy functions" (or run `! firebase deploy --only functions`).

Done when: requests appear at https://us.helicone.ai/requests after a student
uses the tutor.

## 2. App Check — stop scripts from burning the AI budget (~10 min)

Why: our AI endpoints check *who* is calling but not *what* — a script with a
stolen login token could hammer the tutor. App Check proves calls come from
the real SEVA web app.

1. Go to https://console.firebase.google.com → project **performsat-production**
   → Build sidebar → **App Check**.
2. Under Apps, pick the web app → **Register** → choose **reCAPTCHA v3** →
   it gives you a **site key** (starts with `6L`). Accept/create the reCAPTCHA
   secret when prompted (Firebase stores it for you).
3. In Vercel (vercel.com → the SEVA project → Settings → Environment
   Variables) add `REACT_APP_APPCHECK_SITE_KEY` = the site key, for
   Production. Redeploy (any push does it).
4. **Stop here for ~1 week.** The app now sends attestation and the servers
   log it without rejecting anything. Ask Claude to "check App Check logs" —
   when attested traffic is ~100%, Claude will flip `APP_CHECK_ENFORCED=true`
   on the functions and redeploy. (Enforcing early would lock out students on
   cached old bundles — that's why the wait.)

## 3. Sentry — already live, nothing to do

Crash reporting has been live in production for a while (the DSN ships in the
app). This batch added **Session Replay on errors**: when a student hits a
crash, Sentry now attaches a fully-masked recording of the minute before it —
you see their clicks, never their content. It activates on the next deploy.

To look around: https://sentry.io → log in with the account that created the
`o4511616418578432` org (check your email for the Sentry invite/signup from
when it was set up).

## 4. Already handled — for your awareness only

- **Rate limits**: every AI endpoint already has per-student hourly caps
  (done in the July 19 hardening pass).
- **E2E tests**: every push to GitHub now boots a throwaway copy of the app
  (fake database, fake student) and a robot walks the entire test-taking
  flow — directions, eliminator, review page, break screen, answer typing,
  save/resume. If a change breaks the student experience, CI goes red before
  it reaches students.
- **Dependabot**: GitHub now opens one grouped PR per week updating
  dependencies, plus immediate PRs for security fixes. Merging them keeps the
  public repo patched — ask Claude to review and land them.

## Deliberately postponed

- **CRA → Vite migration** (faster builds, smaller bundle): a real migration
  with real risk; scheduled after the August SAT push, not during it.
