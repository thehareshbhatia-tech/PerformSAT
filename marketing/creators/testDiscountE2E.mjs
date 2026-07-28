/**
 * Test-mode E2E for creator audience discounts (README checklist step 3).
 *
 * Proves — against a Stripe SANDBOX, with a test clock, no real money — that a
 * same-shaped code (20% off, repeating 3 months) applied at subscription
 * creation with a 3-day trial:
 *   1. leaves the $0 trial invoice at $0, and
 *   2. lands on the first *charged* invoice (expects $85 → $68, $17 discount).
 *
 * Usage:
 *   STRIPE_TEST_SECRET_KEY=sk_test_... node testDiscountE2E.mjs
 *
 * Everything it creates is tagged "SEVA-E2E" and torn down at the end (the
 * test-clock delete cascades to the customer + subscription; coupon, promo
 * code, and product are cleaned up explicitly). Safe to re-run.
 */
const API = 'https://api.stripe.com/v1';

const key = process.env.STRIPE_TEST_SECRET_KEY;
if (!key || !key.startsWith('sk_test_')) {
  console.error('Set STRIPE_TEST_SECRET_KEY to a sandbox secret key (sk_test_...).');
  console.error('Dashboard → your sandbox → Developers → API keys.');
  process.exit(1);
}

const flatten = (params, prefix = '', out = new URLSearchParams()) => {
  for (const [k, v] of Object.entries(params)) {
    const name = prefix ? `${prefix}[${k}]` : k;
    if (v == null) continue;
    if (typeof v === 'object') flatten(v, name, out);
    else out.append(name, v);
  }
  return out;
};

const stripe = async (method, path, params = {}, { allowError = false } = {}) => {
  const body = flatten(params);
  const url = method === 'GET' ? `${API}${path}?${body}` : `${API}${path}`;
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${key}`,
      ...(method !== 'GET' && { 'Content-Type': 'application/x-www-form-urlencoded' }),
    },
    ...(method !== 'GET' && { body }),
  });
  const json = await res.json();
  if (json.error && !allowError) {
    console.error(`Stripe ${method} ${path} failed: ${json.error.message}`);
    process.exit(1);
  }
  return json;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const waitForClock = async (clockId) => {
  for (let i = 0; i < 60; i++) {
    const clock = await stripe('GET', `/test_helpers/test_clocks/${clockId}`);
    if (clock.status === 'ready') return clock;
    await sleep(2000);
  }
  console.error('Test clock never became ready.');
  process.exit(1);
};

const usd = (cents) => `$${(cents / 100).toFixed(2)}`;
let failed = false;
const check = (label, ok, detail) => {
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? ` — ${detail}` : ''}`);
  if (!ok) failed = true;
};

const run = async () => {
  const stamp = Date.now();
  const now = Math.floor(stamp / 1000);
  console.log('\n=== SEVA creator-discount E2E (sandbox) ===\n');

  // --- Fixture: clock, product/price mirroring the live $85/mo, coupon+code ---
  const clock = await stripe('POST', '/test_helpers/test_clocks', {
    frozen_time: now, name: `SEVA-E2E ${stamp}`,
  });
  const price = await stripe('POST', '/prices', {
    unit_amount: 8500, currency: 'usd', recurring: { interval: 'month' },
    product_data: { name: `SEVA-E2E Monthly ${stamp}` },
  });
  const coupon = await stripe('POST', '/coupons', {
    percent_off: 20, duration: 'repeating', duration_in_months: 3,
    name: `SEVA-E2E 20% ${stamp}`,
  });
  const promo = await stripe('POST', '/promotion_codes', {
    promotion: { type: 'coupon', coupon: coupon.id }, code: `SEVAE2E${stamp}`,
  });

  const customer = await stripe('POST', '/customers', {
    test_clock: clock.id, name: 'SEVA-E2E Student', email: `seva-e2e-${stamp}@example.com`,
  });
  const pm = await stripe('POST', '/payment_methods', { type: 'card', card: { token: 'tok_visa' } });
  await stripe('POST', `/payment_methods/${pm.id}/attach`, { customer: customer.id });
  await stripe('POST', `/customers/${customer.id}`, {
    invoice_settings: { default_payment_method: pm.id },
  });

  // --- Subscribe with 3-day trial + the promo code (mirrors createCheckoutSession) ---
  let sub = await stripe('POST', '/subscriptions', {
    customer: customer.id,
    items: { 0: { price: price.id } },
    trial_period_days: 3,
    discounts: { 0: { promotion_code: promo.id } },
    expand: { 0: 'latest_invoice' },
  }, { allowError: true });
  if (sub.error) {
    // Older API shape fallback.
    sub = await stripe('POST', '/subscriptions', {
      customer: customer.id,
      items: { 0: { price: price.id } },
      trial_period_days: 3,
      promotion_code: promo.id,
      expand: { 0: 'latest_invoice' },
    });
  }

  console.log('Trial invoice:');
  const trialInv = sub.latest_invoice;
  check('subscription is trialing', sub.status === 'trialing', `status=${sub.status}`);
  check('trial invoice is $0', trialInv.total === 0, `total=${usd(trialInv.total)}`);

  // --- Advance past the trial; the first REAL invoice should carry the discount ---
  await stripe('POST', `/test_helpers/test_clocks/${clock.id}/advance`, {
    frozen_time: now + 4 * 24 * 3600,
  });
  await waitForClock(clock.id);

  // Invoice creation + payment settle shortly after the clock is ready.
  let inv = null;
  for (let i = 0; i < 30; i++) {
    const list = await stripe('GET', '/invoices', { customer: customer.id, limit: 10 });
    inv = list.data.find((x) => x.total > 0);
    if (inv && (inv.status === 'paid' || inv.status === 'open')) break;
    await sleep(2000);
  }

  console.log('First charged invoice (after 3-day trial):');
  if (!inv) {
    check('a charged invoice exists', false, 'no non-$0 invoice appeared');
  } else {
    const discount = (inv.total_discount_amounts || []).reduce((s, d) => s + d.amount, 0);
    check('invoice is paid', inv.status === 'paid', `status=${inv.status}`);
    check('subtotal is $85.00', inv.subtotal === 8500, `subtotal=${usd(inv.subtotal)}`);
    check('20% discount applied ($17.00)', discount === 1700, `discount=${usd(discount)}`);
    check('amount paid is $68.00', inv.amount_paid === 6800, `paid=${usd(inv.amount_paid)}`);
  }

  // --- Teardown (clock delete cascades to customer + subscription) ---
  await stripe('DELETE', `/test_helpers/test_clocks/${clock.id}`, {}, { allowError: true });
  await stripe('POST', `/promotion_codes/${promo.id}`, { active: false }, { allowError: true });
  await stripe('DELETE', `/coupons/${coupon.id}`, {}, { allowError: true });
  await stripe('POST', `/prices/${price.id}`, { active: false }, { allowError: true });
  await stripe('POST', `/products/${price.product}`, { active: false }, { allowError: true });

  console.log(failed ?
    '\nRESULT: FAIL — do NOT hand the audience code to a creator until this passes.\n' :
    '\nRESULT: PASS — discount lands on the first charged invoice, trial stays $0.\n');
  process.exit(failed ? 1 : 0);
};

run().catch((e) => { console.error('FAILED:', e.message); process.exit(1); });
