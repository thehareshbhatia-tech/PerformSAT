#!/usr/bin/env bash
# One-time SEVA live-billing setup.
# Reads your sk_live key from the CLIPBOARD (you just copied it from Stripe),
# so the key is never typed, never shown, never saved. Only the non-secret
# price IDs are printed at the end.
set -uo pipefail

SK=$(pbpaste)

case "$SK" in
  sk_live_*) : ;;
  sk_test_*) echo "That's a TEST key (sk_test) on your clipboard, not a live key. Copy your sk_live key from Stripe and run this again."; exit 1 ;;
  *) echo "Your clipboard doesn't contain a Stripe secret key. In Stripe, reveal your Secret key, click copy, then run this again."; exit 1 ;;
esac

jqid(){ python3 -c "import sys,json;print(json.load(sys.stdin).get('$1',''))"; }

echo "-> Creating product 'SEVA Premium'..."
PROD=$(curl -s https://api.stripe.com/v1/products -u "$SK:" \
  -d name="SEVA Premium" \
  -d "description=Full access to SEVA: hand-authored SAT question bank, full-length adaptive practice tests, six-class error diagnosis, targeted drills, AI tutor, and a personalized study plan." | jqid id)

echo "-> Creating monthly price (\$50/month)..."
MONTHLY=$(curl -s https://api.stripe.com/v1/prices -u "$SK:" \
  -d product="$PROD" -d unit_amount=5000 -d currency=usd \
  -d "recurring[interval]=month" -d nickname="SEVA Premium Monthly" | jqid id)

echo "-> Creating annual price (\$250/year)..."
ANNUAL=$(curl -s https://api.stripe.com/v1/prices -u "$SK:" \
  -d product="$PROD" -d unit_amount=25000 -d currency=usd \
  -d "recurring[interval]=year" -d nickname="SEVA Premium Annual" | jqid id)

echo "-> Creating live webhook..."
WHSEC=$(curl -s https://api.stripe.com/v1/webhook_endpoints -u "$SK:" \
  -d url="https://stripewebhook-ki77ua6x2a-uc.a.run.app" \
  -d "enabled_events[]=checkout.session.completed" \
  -d "enabled_events[]=customer.subscription.updated" \
  -d "enabled_events[]=customer.subscription.deleted" | jqid secret)

if [ -n "$PROD" ] && [ -n "$MONTHLY" ] && [ -n "$ANNUAL" ] && [ -n "$WHSEC" ]; then
  echo "-> Storing your two secrets in Firebase (values not shown)..."
  printf '%s' "$SK"    | firebase functions:secrets:set STRIPE_SECRET_KEY    --data-file - --project performsat-production
  printf '%s' "$WHSEC" | firebase functions:secrets:set STRIPE_WEBHOOK_SECRET --data-file - --project performsat-production
  pbcopy </dev/null   # clear the key off your clipboard for safety
  echo ""
  echo "==================================================================="
  echo "  DONE. These two price IDs are safe to share -- Claude will read"
  echo "  them from here automatically:"
  echo ""
  echo "  MONTHLY=$MONTHLY"
  echo "  ANNUAL=$ANNUAL"
  echo "==================================================================="
else
  echo ""
  echo "Something didn't work and nothing was stored in Firebase:"
  echo "  PROD=$PROD"
  echo "  MONTHLY=$MONTHLY   ANNUAL=$ANNUAL   WEBHOOK=$([ -n "$WHSEC" ] && echo ok || echo MISSING)"
fi
unset SK WHSEC
