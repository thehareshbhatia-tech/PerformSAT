# Creator tracker + payout ledger

Operational home for influencer partnerships: who we've contacted, where each
thread stands, and — once a creator's promo code is live — exactly what we owe
them, computed from Stripe itself.

**`creators.json` is gitignored** (this repo is public; the roster holds
personal emails and private deal terms). Copy `creators.example.json` to
`creators.json` on a new machine and fill it in.

## The deal shape

- **Base pay** — $/video posted (+ per-video view bonus). Manual counts: bump
  `videosPosted` / `videosOverThreshold` in `creators.json` as videos go up.
- **Commission** — $70 per annual signup; $15 per **paid** monthly invoice for
  the first 3 invoices of each referred customer (the "up to $45" framing).
  Trial cancels pay $0 and owe $0 by construction: only `amount_paid > 0`
  invoices count.
- **Attribution** — the customer used the creator's Stripe promotion code at
  checkout (`allow_promotion_codes` is already on in `createCheckoutSession`).
  Attribution reads **invoices** (permanent record) plus live subscriptions
  (catches signups still in trial), first-touch per customer.
- **Comped accounts never count** — the creator's own comped access email goes
  in `excludeCustomerEmails`.

## Commands

```bash
node track.mjs                 # outreach status table
node track.mjs --active        # hide passed threads

export STRIPE_SECRET_KEY=$(firebase functions:secrets:access STRIPE_SECRET_KEY)
node payouts.mjs report        # read-only: signups + $$ owed per creator
node payouts.mjs report --json # also writes payout-report.json (gitignored)
node payouts.mjs create-code iksha   # LIVE Stripe mutation: 20% coupon + code
```

## Before a code goes live (checklist)

1. Functions deployed with the $85/$349 price IDs (`firebase deploy --only functions`).
2. `node payouts.mjs create-code <slug>` — creates the coupon (default: 20% off,
   repeating 3 months, which survives the $0 card-up-front trial invoice and
   matches the 3-invoice commission window) + promotion code, saves ids back
   into `creators.json`.
3. **Test-mode E2E once**: run a checkout with a same-shaped code in Stripe test
   mode and confirm the discount lands on the first *charged* invoice after the
   3-day trial, not the $0 trial invoice.
4. Provision the creator's comped access and add their email to
   `excludeCustomerEmails` BEFORE they can sign themselves up.
