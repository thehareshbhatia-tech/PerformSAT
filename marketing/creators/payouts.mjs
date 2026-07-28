#!/usr/bin/env node
// Creator attribution + payout ledger against live Stripe.
//
// The deal shape (per creator, overridable in creators.json):
//   base pay      — $/video posted + view bonus (manual counts in creators.json)
//   commission    — $70 per annual signup, $15 per paid monthly invoice for the
//                   FIRST 3 invoices of each referred customer ("up to $45")
//   attribution   — customer used the creator's Stripe promotion code at checkout
//
// Setup (key is read from env or a gitignored .env next to this script):
//   STRIPE_SECRET_KEY=$(firebase functions:secrets:access STRIPE_SECRET_KEY)
//
// Commands:
//   node payouts.mjs report [--json]     # attribution + payout report (read-only)
//   node payouts.mjs create-code <slug>  # create 20% coupon + promo code in LIVE
//                                        # Stripe, save ids into creators.json
//
// Signups that never pay (trial cancels) owe nothing: only invoices with
// amount_paid > 0 count. Comped accounts (excludeCustomerEmails) never count.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROSTER_PATH = join(HERE, 'creators.json');
const API = 'https://api.stripe.com/v1';

const loadEnv = () => {
  const envPath = join(HERE, '.env');
  if (existsSync(envPath)) {
    for (const line of readFileSync(envPath, 'utf8').split('\n')) {
      const m = line.match(/^([A-Z_]+)=(.*)$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
    }
  }
};

const key = () => {
  loadEnv();
  const k = process.env.STRIPE_SECRET_KEY;
  if (!k) {
    console.error('STRIPE_SECRET_KEY not set. Fetch it with:');
    console.error('  firebase functions:secrets:access STRIPE_SECRET_KEY');
    process.exit(1);
  }
  return k;
};

const stripe = async (method, path, params = {}) => {
  const body = new URLSearchParams();
  for (const [k2, v] of Object.entries(params)) {
    if (Array.isArray(v)) v.forEach((item) => body.append(`${k2}[]`, item));
    else if (v != null) body.append(k2, v);
  }
  const url = method === 'GET' ? `${API}${path}?${body}` : `${API}${path}`;
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${key()}`,
      ...(method !== 'GET' && { 'Content-Type': 'application/x-www-form-urlencoded' }),
    },
    ...(method !== 'GET' && { body }),
  });
  const json = await res.json();
  if (json.error) {
    console.error(`Stripe ${method} ${path} failed: ${json.error.message}`);
    process.exit(1);
  }
  return json;
};

// Paginate a Stripe list endpoint to exhaustion. Fine at current volume;
// revisit with created-date filters if the account ever has thousands of rows.
const listAll = async (path, params = {}) => {
  const out = [];
  let startingAfter;
  for (;;) {
    const page = await stripe('GET', path, {
      ...params,
      limit: 100,
      ...(startingAfter && { starting_after: startingAfter }),
    });
    out.push(...page.data);
    if (!page.has_more) return out;
    startingAfter = page.data[page.data.length - 1].id;
  }
};

const roster = () => JSON.parse(readFileSync(ROSTER_PATH, 'utf8'));
const saveRoster = (r) => writeFileSync(ROSTER_PATH, JSON.stringify(r, null, 2) + '\n');
const usd = (n) => `$${n.toFixed(2).replace(/\.00$/, '')}`;

// discount.promotion_code is an id string (or an expanded object) — normalize.
const promoIdOf = (discount) =>
  typeof discount?.promotion_code === 'string'
    ? discount.promotion_code
    : discount?.promotion_code?.id ?? null;

const discountsOf = (obj) => {
  const list = Array.isArray(obj?.discounts) ? obj.discounts : [];
  const single = obj?.discount ? [obj.discount] : [];
  return [...list, ...single].filter((d) => d && typeof d === 'object');
};

// A subscription invoice line's billing interval, across Stripe API shapes.
const lineInterval = (line) => {
  const viaPrice = line?.price?.recurring?.interval || line?.plan?.interval;
  if (viaPrice) return viaPrice;
  const days = (line?.period?.end - line?.period?.start) / 86400;
  return days > 200 ? 'year' : 'month';
};

const buildReport = async () => {
  const { defaults, creators } = roster();
  const tracked = creators.filter((c) => c.promoCode);
  if (!tracked.length) {
    console.log('No creator has a live promoCode yet — nothing to attribute.');
    console.log('Create one with: node payouts.mjs create-code <slug>');
  }

  // promo code string -> creator slug, via live promotion_code object ids
  const promoIdToSlug = new Map();
  for (const c of tracked) {
    const found = await listAll('/promotion_codes', { code: c.promoCode });
    if (!found.length) {
      console.warn(`WARN: promo code "${c.promoCode}" (${c.slug}) not found in Stripe`);
      continue;
    }
    for (const p of found) promoIdToSlug.set(p.id, c.slug);
  }

  // Attribution is read from invoices (a permanent record — subscription
  // discounts detach once consumed) plus live subscriptions (catches trialing
  // signups that have no paid invoice yet).
  const invoices = await listAll('/invoices', { expand: ['data.discounts'] });
  const subs = await listAll('/subscriptions', {
    status: 'all',
    expand: ['data.discounts', 'data.customer'],
  });

  const attribution = new Map(); // customerId -> { slug, email }
  const attribute = (customerId, email, slug) => {
    if (customerId && slug && !attribution.has(customerId)) {
      attribution.set(customerId, { slug, email: email || '' });
    }
  };
  for (const inv of [...invoices].sort((a, b) => a.created - b.created)) {
    for (const d of discountsOf(inv)) {
      attribute(inv.customer, inv.customer_email, promoIdToSlug.get(promoIdOf(d)));
    }
  }
  for (const sub of subs) {
    for (const d of discountsOf(sub)) {
      attribute(sub.customer?.id ?? sub.customer, sub.customer?.email, promoIdToSlug.get(promoIdOf(d)));
    }
  }

  const bySlug = Object.fromEntries(
    creators.map((c) => [c.slug, { creator: c, customers: [] }]),
  );
  for (const [customerId, { slug, email }] of attribution) {
    const excluded = (bySlug[slug].creator.excludeCustomerEmails || [])
      .some((x) => x.toLowerCase() === email.toLowerCase());
    if (excluded) continue;

    const paid = invoices
      .filter((i) => i.customer === customerId && i.status === 'paid' && i.amount_paid > 0 && i.subscription)
      .sort((a, b) => a.created - b.created);
    const trialing = subs.some(
      (s) => (s.customer?.id ?? s.customer) === customerId && s.status === 'trialing',
    );
    bySlug[slug].customers.push({ customerId, email, paid, trialing });
  }

  const report = [];
  for (const { creator: c, customers } of Object.values(bySlug)) {
    const commission = { annualBounty: 70, monthlyPerInvoice: 15, monthlyInvoiceCap: 3, ...defaults.commission, ...c.commission };
    let commissionOwed = 0;
    let annualSignups = 0;
    let monthlyInvoicesCounted = 0;
    const detail = [];
    for (const cust of customers) {
      const annual = cust.paid.filter((i) => lineInterval(i.lines?.data?.[0]) === 'year');
      const monthly = cust.paid.filter((i) => lineInterval(i.lines?.data?.[0]) === 'month');
      let earned = 0;
      if (annual.length) {
        earned += commission.annualBounty; // first year only; renewals don't re-pay
        annualSignups += 1;
      }
      const counted = Math.min(monthly.length, commission.monthlyInvoiceCap);
      earned += counted * commission.monthlyPerInvoice;
      monthlyInvoicesCounted += counted;
      commissionOwed += earned;
      detail.push(
        `      ${cust.email || cust.customerId} — ${annual.length ? 'annual' : `${monthly.length} paid monthly invoice(s), ${counted} counted`}` +
        `${cust.trialing ? ' [in trial]' : ''} → ${usd(earned)}`,
      );
    }
    const pipeline = customers.filter((x) => !x.paid.length && x.trialing).length;

    const bp = c.basePay || {};
    const baseOwed = (bp.perVideoUsd || 0) * (bp.videosPosted || 0) +
      (bp.viewBonusUsd || 0) * (bp.videosOverThreshold || 0);
    const totalOwed = baseOwed + commissionOwed - (c.paidToDateUsd || 0);

    report.push({
      slug: c.slug, name: c.name, status: c.status, promoCode: c.promoCode,
      annualSignups, monthlyInvoicesCounted, pipeline,
      baseOwedUsd: baseOwed, commissionOwedUsd: commissionOwed,
      paidToDateUsd: c.paidToDateUsd || 0, totalOwedUsd: totalOwed, detail,
    });
  }
  return report;
};

const printReport = (report) => {
  console.log('Creator payout report\n');
  for (const r of report) {
    const code = r.promoCode ? ` [${r.promoCode}]` : ' [no code yet]';
    console.log(`  ${r.name} (${r.slug}, ${r.status})${code}`);
    console.log(
      `      signups: ${r.annualSignups} annual, ${r.monthlyInvoicesCounted} monthly invoices counted, ${r.pipeline} in trial`,
    );
    console.log(
      `      owed: base ${usd(r.baseOwedUsd)} + commission ${usd(r.commissionOwedUsd)} − paid ${usd(r.paidToDateUsd)} = ${usd(r.totalOwedUsd)}`,
    );
    for (const line of r.detail) console.log(line);
    console.log('');
  }
};

const createCode = async (slug) => {
  const r = roster();
  const c = r.creators.find((x) => x.slug === slug);
  if (!c) {
    console.error(`No creator "${slug}" in creators.json`);
    process.exit(1);
  }
  if (c.promoCode) {
    console.error(`${c.name} already has live code ${c.promoCode} — refusing to duplicate.`);
    process.exit(1);
  }
  const d = { ...r.defaults.audienceDiscount, ...c.audienceDiscount };
  const code = c.plannedCode || `${slug.toUpperCase()}20`;
  // Adopt a valid same-name coupon if one exists — a prior run that died between
  // the coupon POST and the promotion-code POST leaves an orphan behind.
  const couponName = `SEVA ${d.percentOff}% — ${c.name}`;
  const existing = (await listAll('/coupons')).find(
    (x) => x.name === couponName && x.valid,
  );
  const coupon = existing || (await stripe('POST', '/coupons', {
    percent_off: d.percentOff,
    duration: d.duration,
    ...(d.duration === 'repeating' && { duration_in_months: d.durationInMonths }),
    name: couponName,
  }));
  const promo = await stripe('POST', '/promotion_codes', {
    'promotion[type]': 'coupon',
    'promotion[coupon]': coupon.id,
    code,
  });
  c.promoCode = promo.code;
  c.promoCodeId = promo.id;
  c.couponId = coupon.id;
  saveRoster(r);
  console.log(`Created ${promo.code} (${d.percentOff}% off, ${d.duration}` +
    `${d.duration === 'repeating' ? ` ${d.durationInMonths}mo` : ''}) for ${c.name}.`);
  console.log('Saved promoCode/promoCodeId/couponId into creators.json.');
};

const [cmd = 'report', arg] = process.argv.slice(2);
if (cmd === 'report') {
  const report = await buildReport();
  printReport(report);
  if (process.argv.includes('--json')) {
    const out = join(HERE, 'payout-report.json');
    writeFileSync(out, JSON.stringify(report, null, 2) + '\n');
    console.log(`Wrote ${out}`);
  }
} else if (cmd === 'create-code') {
  await createCode(arg);
} else {
  console.error(`Unknown command "${cmd}". Use: report [--json] | create-code <slug>`);
  process.exit(1);
}
