# Security Launch Runbook

Status as of 2026-07-08. Items marked DONE were applied via the Google APIs and
are live now. Everything else is a copy-paste command or a short console task,
in priority order. Check items off as you go.

## Already applied (verify, don't redo)

- [x] **Firestore point-in-time recovery** — enabled (7-day PITR window).
- [x] **Firestore delete protection** — enabled (the database can't be deleted
      without first flipping this off).
- [x] **Password policy** — minimum 8 characters, enforced for new
      signups/changes only (existing users unaffected).
- [x] **Auth authorized domains** — added `sevaprep.com` + `www.sevaprep.com`,
      dropped a stale preview-channel domain.
- [x] **Email enumeration protection** — was already enabled.
- [x] **App Check client wiring** — `src/firebase/config.js` initializes
      App Check when `REACT_APP_APPCHECK_SITE_KEY` is set (inert until then;
      see step 4).
- [x] Code-side hardening from sweep rounds 3-5 (committed, NOT yet deployed —
      that's step 1).

## 1. Deploy the security work (blocks everything else)

```bash
git push origin main          # ships client fixes + headers via Vercel
firebase deploy --only functions,firestore:rules,storage
```

Vercel auto-deploys main → sevaprep.com. The functions deploy carries the
error-leak fixes, billing hardening, and the transactional merges; the rules
deploy carries the field-pinning and the new default-deny storage.rules.

## 2. Restrict the Firebase web API key (5 min)

Today the key has API-target restrictions but NO referrer restriction — any
website can use it. Console path: [GCP Credentials](https://console.cloud.google.com/apis/credentials?project=performsat-production)
→ "Browser key (auto created by Firebase)" → Application restrictions →
Websites → add:

```
https://sevaprep.com/*
https://www.sevaprep.com/*
https://perform-sat.vercel.app/*
http://localhost:3000/*
```

Keep the existing API restrictions untouched. Deliberately do NOT add
`*.vercel.app` — that readmits every free Vercel site. If you later need a
Vercel preview to talk to Firebase, add that preview's exact URL temporarily.
After saving, load sevaprep.com and log in to confirm nothing broke (a bad
referrer list breaks auth site-wide, which is why this one is manual).

## 3. Budget + spend alerts (10 min)

- **GCP budget**: [Billing → Budgets & alerts](https://console.cloud.google.com/billing/01D739-B0659B-45C8DE/budgets)
  → Create budget → scope to project `performsat-production`, amount = a
  monthly ceiling you'd want to know about (e.g. $100), thresholds 50/90/100%.
- **Anthropic spend cap**: [console.anthropic.com](https://console.anthropic.com)
  → Settings → Limits → set a monthly usage limit on the workspace holding the
  `ANTHROPIC_API_KEY` used by the functions. This is the denial-of-wallet
  backstop until App Check is enforced.

## 4. App Check — monitoring first, enforce later (15 min + a week of soak)

1. [Firebase Console → App Check](https://console.firebase.google.com/project/performsat-production/appcheck)
   → Apps → register the web app with **reCAPTCHA v3** → copy the site key.
2. Set `REACT_APP_APPCHECK_SITE_KEY=<key>` in Vercel env (production) and
   `.env.local`; redeploy. The client wiring is already in
   `src/firebase/config.js` and activates automatically.
3. Watch the App Check **metrics** page for ~a week: verified-request share
   should approach 100% as caches roll over.
4. Only then flip **Enforce** for Firestore and Authentication in the console.
   Do NOT enforce early — users on cached old bundles get locked out.
5. (Later, optional) Enforce on the Cloud Functions by verifying the
   `X-Firebase-AppCheck` header in `verifyAuth` — code change, ask Claude.

## 5. Promote the CSP from Report-Only to enforcing (after step 1)

With the console open on the deployed site, click through: login → practice
test (Desmos must load) → AI tutor exchange → a lesson video → checkout return
path. If zero `Content-Security-Policy-Report-Only` violations appear, rename
the header key in `vercel.json` from `Content-Security-Policy-Report-Only` to
`Content-Security-Policy` and redeploy. If Desmos complains about eval, that's
expected — `'unsafe-eval'` is already in the drafted policy.

## 6. Uptime + error alerting (10 min)

Console path (APIs blocked for the agent): [Cloud Monitoring](https://console.cloud.google.com/monitoring/uptime?project=performsat-production)
- Create uptime check: HTTPS, host `www.sevaprep.com`, path `/`, 5-min period,
  alert on failure → notification channel = your email.
- Create alert policy: metric `cloudfunctions.googleapis.com/function/execution_count`
  filtered to `status != "ok"`, threshold e.g. >5/min for 5 min → same channel.
- Stripe (when live): Dashboard → Developers → Webhooks → enable failure
  email notifications (entitlements depend on this webhook).

## 7. Operator account security (only you can do these)

- Hardware key or passkey MFA on: the Google account owning this project,
  Stripe, Vercel, GitHub, GoDaddy, Anthropic, Sentry.
- GoDaddy: enable domain transfer lock on sevaprep.com.
- Stripe live mode (at billing launch): 2FA, use a **restricted** live key
  (checkout/portal/webhook permissions only), separate live webhook secret,
  Radar left on.

## 8. Confirm third-party key scoping (5 min)

- Desmos partner console: confirm the embed key in `DesmosCalculator.jsx` is
  domain-locked to sevaprep.com.
- Sentry: DSN is public-by-design; nothing to do.
