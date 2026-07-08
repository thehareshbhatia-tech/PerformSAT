/**
 * SEVA Premium billing endpoints (Stripe) — CARD-UP-FRONT 7-day trial.
 *
 * Four endpoints + one gate helper:
 *   ensureEntitlement     — idempotently creates the entitlement doc in a
 *                           NO-ACCESS state ("none") until Checkout completes
 *   createCheckoutSession — hosted Stripe Checkout (subscription mode) that
 *                           collects a card up front and starts a 7-day trial
 *   createPortalSession   — Stripe Customer Portal (manage/cancel/card)
 *   stripeWebhook         — signature-verified event sink -> entitlements/{uid}
 *   hasEntitlementAccess  — server-side gate used by aiTutor (402)
 *
 * The entitlement doc (entitlements/{uid}) is SERVER-WRITE-ONLY — firestore
 * rules deny all client writes; the Admin SDK bypasses rules. The client only
 * ever reads it (useEntitlement onSnapshot). Access comes ONLY from a real
 * Stripe subscription (trialing/active) — there is no no-card grant.
 *
 * Deploy-time params (functions/.env or `firebase functions:secrets:set`):
 *   secrets: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET
 *   strings: STRIPE_PRICE_MONTHLY, STRIPE_PRICE_ANNUAL, BILLING_APP_BASE_URL,
 *            BILLING_LAUNCH_EPOCH (grandfather cutoff — accounts created before
 *            it get permanent comped access; accounts created at/after it must
 *            start a paid trial. Set this to the moment you flip the flag.)
 */

import Stripe from "stripe";
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {defineSecret, defineString} from "firebase-functions/params";
import {getAuth} from "firebase-admin/auth";
import {
  getFirestore,
  FieldValue,
  Timestamp,
  DocumentSnapshot,
} from "firebase-admin/firestore";
import {ALLOWED_ORIGINS, verifyAuth, checkRateLimit} from "./shared";
import {
  subscriptionToEntitlementPatch,
  shouldApplyEvent,
  hasAccessMs,
  isGrandfathered,
  shouldGrandfatherExisting,
  normalizePromoCode,
  evaluatePromoRedemption,
  subscriptionPatchUsedTrial,
  trialDaysForCheckout,
  EntitlementPatch,
} from "./stripePolicy";

const stripeSecretKey = defineSecret("STRIPE_SECRET_KEY");
const stripeWebhookSecret = defineSecret("STRIPE_WEBHOOK_SECRET");
const stripePriceMonthly = defineString("STRIPE_PRICE_MONTHLY", {default: ""});
const stripePriceAnnual = defineString("STRIPE_PRICE_ANNUAL", {default: ""});
const appBaseUrl = defineString("BILLING_APP_BASE_URL", {
  default: "https://www.sevaprep.com",
});
// Grandfather cutoff: accounts created before this instant are the free
// early-access cohort and get permanent comped access; accounts created at/
// after it must start a paid trial. Set to the moment billing goes live.
const billingLaunchEpoch = defineString("BILLING_LAUNCH_EPOCH", {default: ""});

const getStripe = () => new Stripe(stripeSecretKey.value());

const entitlementRef = (uid: string) =>
  getFirestore().collection("entitlements").doc(uid);

const promoCodeRef = (code: string) =>
  getFirestore().collection("promoCodes").doc(code);

const tsToMs = (v: unknown): number | null => {
  if (v instanceof Timestamp) return v.toMillis();
  if (typeof v === "number") return v;
  return null;
};

/**
 * Server-side access gate. Missing doc => ALLOW: entitlement docs only start
 * existing once the billing client (ensureEntitlement caller) has shipped, so
 * fail-open here is what keeps pre-launch accounts working while the feature
 * flag is off. After launch every session creates its doc at boot, so a
 * missing doc is only ever a brand-new/pre-launch account. Errors also allow —
 * availability over enforcement for a tutoring session.
 * @param {string} uid the authenticated caller's uid
 * @return {Promise<boolean>} whether the account has premium/trial access
 */
export async function hasEntitlementAccess(uid: string): Promise<boolean> {
  try {
    const snap = await entitlementRef(uid).get();
    if (!snap.exists) return true;
    const doc = snap.data() || {};
    return hasAccessMs(
      {
        status: doc.status,
        trialEndsAtMs: tsToMs(doc.trialEndsAt),
        currentPeriodEndMs: tsToMs(doc.currentPeriodEnd),
      },
      Date.now(),
    );
  } catch (err) {
    logger.error("hasEntitlementAccess failed — allowing", err);
    return true;
  }
}

/**
 * Serialize an entitlement snapshot for a JSON response (Timestamps -> ms).
 * @param {DocumentSnapshot} snap the entitlement doc snapshot
 * @return {object} JSON-safe entitlement view
 */
function serializeEntitlement(snap: DocumentSnapshot) {
  const d = snap.data() || {};
  return {
    status: d.status || null,
    trialEndsAt: tsToMs(d.trialEndsAt),
    currentPeriodEnd: tsToMs(d.currentPeriodEnd),
    plan: d.plan || null,
    cancelAtPeriodEnd: !!d.cancelAtPeriodEnd,
    hasBillingAccount: !!d.stripeCustomerId,
  };
}

export const ensureEntitlement = onRequest(
  {cors: ALLOWED_ORIGINS, invoker: "public"},
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).json({error: "Method not allowed"});
      return;
    }
    const user = await verifyAuth(request);
    if (!user) {
      response.status(401).json({error: "Authentication required"});
      return;
    }
    if (!(await checkRateLimit(user.uid, "ensureEntitlement", 30))) {
      response.status(429).json({error: "Too many requests."});
      return;
    }

    try {
      // Grandfather the free early-access cohort: an account created BEFORE
      // billing launched keeps permanent free access ("comped"), never a
      // paywall and never a charge. Only accounts created AT/AFTER the launch
      // epoch enter the card-up-front trial. Reads the authoritative account
      // creation time from Firebase Auth (unspoofable). Any failure falls
      // through to the no-access seed (billing only ever charges a card via an
      // explicit Checkout the user initiates, so failing this way never bills
      // anyone silently — it only means an existing user could see the wall,
      // which the grandfather rule exists to prevent; hence we log loudly).
      let comped = false;
      try {
        const epochMs = Date.parse(billingLaunchEpoch.value());
        const authUser = await getAuth().getUser(user.uid);
        const createdMs = Date.parse(authUser.metadata.creationTime);
        comped = isGrandfathered(
          Number.isNaN(createdMs) ? null : createdMs,
          Number.isNaN(epochMs) ? null : epochMs,
        );
      } catch (ghErr) {
        logger.error(
          `grandfather check failed for ${user.uid} — seeding no-access`,
          ghErr,
        );
      }

      const ref = entitlementRef(user.uid);
      await getFirestore().runTransaction(async (tx) => {
        const snap = await tx.get(ref);
        if (snap.exists) {
          // Self-heal grandfathered accounts seeded BEFORE the grandfather rule
          // existed: an old no-card "trialing" doc (or a "none" seed) on a
          // pre-launch account is upgraded to comped so a current free
          // early-access user is never shown a trial or paywall. Conservative —
          // never touches a comped doc or one backed by a real Stripe
          // customer/subscription (that path is owned by the webhook).
          if (shouldGrandfatherExisting(snap.data() ?? null, comped)) {
            tx.update(ref, {
              status: "comped",
              grandfathered: true,
              trialEndsAt: null,
              plan: null,
              updatedAt: FieldValue.serverTimestamp(),
            });
            logger.info(`self-healed ${user.uid} to comped (grandfathered)`);
          }
          return; // otherwise idempotent — never touch an existing doc
        }
        if (comped) {
          // Pre-launch account: permanent free access. No Stripe customer, no
          // subscription, no trial clock — hasAccessMs("comped") is always
          // true, so the client never walls them and aiTutor never 402s them.
          tx.set(ref, {
            uid: user.uid,
            status: "comped",
            grandfathered: true,
            trialEndsAt: null,
            stripeCustomerId: null,
            subscriptionId: null,
            plan: null,
            currentPeriodEnd: null,
            cancelAtPeriodEnd: false,
            lastEventCreated: null,
            createdAt: FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp(),
          });
          return;
        }
        // Card-up-front model: post-launch signup grants NO access. Seed the
        // doc in a no-access "none" state so the aiTutor gate
        // (hasEntitlementAccess) and the client both read "locked" until the
        // student starts a trial via Checkout (the webhook then flips this doc
        // to "trialing").
        tx.set(ref, {
          uid: user.uid,
          status: "none",
          trialEndsAt: null,
          stripeCustomerId: null,
          subscriptionId: null,
          plan: null,
          currentPeriodEnd: null,
          cancelAtPeriodEnd: false,
          lastEventCreated: null,
          createdAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        });
      });
      const snap = await ref.get();
      response.json({entitlement: serializeEntitlement(snap)});
    } catch (err) {
      logger.error("ensureEntitlement failed", err);
      response.status(500).json({error: "Could not initialize entitlement"});
    }
  },
);

/**
 * Redeem a promo code for permanent free ("comped") access — the promo path
 * into the same grandfathered state ensureEntitlement grants pre-launch users.
 *
 * SERVER-SIDE ONLY grant: entitlements/{uid} is server-write-only, so this is
 * the only way a client can reach comped without paying — the code is validated
 * here against promoCodes/{CODE} (server-write-only too), never trusted from
 * the client. One transaction enforces the cap (maxRedemptions) + entitlement
 * grant together, and a redeemers/{uid} sub-doc makes a repeat redemption a
 * no-op that never double-counts a slot. Callers who already have access get a
 * clean no-op success so a trialing/comped user never burns a slot.
 */
export const redeemPromoCode = onRequest(
  {cors: ALLOWED_ORIGINS, invoker: "public"},
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).json({error: "Method not allowed"});
      return;
    }
    const user = await verifyAuth(request);
    if (!user) {
      response.status(401).json({error: "Authentication required"});
      return;
    }
    if (!(await checkRateLimit(user.uid, "redeemPromoCode", 20))) {
      response
        .status(429)
        .json({error: "Too many attempts. Please wait a moment."});
      return;
    }

    const code = normalizePromoCode(String(request.body?.code ?? ""));
    if (!code) {
      response.status(400).json({error: "Enter a promo code."});
      return;
    }

    try {
      const codeRef = promoCodeRef(code);
      const entRef = entitlementRef(user.uid);
      const redeemerRef = codeRef.collection("redeemers").doc(user.uid);

      const decision = await getFirestore().runTransaction(async (tx) => {
        // All reads BEFORE any writes (Firestore transaction rule).
        const [codeSnap, entSnap, redeemerSnap] = await Promise.all([
          tx.get(codeRef),
          tx.get(entRef),
          tx.get(redeemerRef),
        ]);
        const codeData = codeSnap.exists ? codeSnap.data() || {} : null;
        const entData = entSnap.exists ? entSnap.data() || {} : {};
        const alreadyHasAccess = hasAccessMs(
          {
            status: entData.status,
            trialEndsAtMs: tsToMs(entData.trialEndsAt),
            currentPeriodEndMs: tsToMs(entData.currentPeriodEnd),
          },
          Date.now(),
        );

        const d = evaluatePromoRedemption(
          codeData && {
            active: codeData.active,
            maxRedemptions: codeData.maxRedemptions ?? null,
            redemptions: codeData.redemptions ?? 0,
          },
          {alreadyHasAccess, alreadyRedeemed: redeemerSnap.exists},
        );

        if (d.consumeSlot) {
          tx.update(codeRef, {
            redemptions: FieldValue.increment(1),
            lastRedeemedAt: FieldValue.serverTimestamp(),
          });
          tx.set(redeemerRef, {
            uid: user.uid,
            redeemedAt: FieldValue.serverTimestamp(),
          });
        }

        if (d.grantComped) {
          const patch: Record<string, unknown> = {
            uid: user.uid,
            status: "comped",
            grandfathered: false,
            comped: true,
            compedVia: "promo",
            promoCode: code,
            trialEndsAt: null,
            stripeCustomerId: null,
            subscriptionId: null,
            plan: null,
            currentPeriodEnd: null,
            cancelAtPeriodEnd: false,
            lastEventCreated: null,
            updatedAt: FieldValue.serverTimestamp(),
          };
          if (!entSnap.exists) patch.createdAt = FieldValue.serverTimestamp();
          tx.set(entRef, patch, {merge: true});
        }

        return d;
      });

      if (!decision.ok) {
        const msg = decision.outcome === "exhausted" ?
          "This code has reached its redemption limit." :
          "That promo code isn't valid.";
        response.status(422).json({error: msg, outcome: decision.outcome});
        return;
      }

      const snap = await entRef.get();
      response.json({
        entitlement: serializeEntitlement(snap),
        outcome: decision.outcome,
      });
    } catch (err) {
      logger.error("redeemPromoCode failed", err);
      response
        .status(500)
        .json({error: "Could not redeem the code. Please try again."});
    }
  },
);

export const createCheckoutSession = onRequest(
  {cors: ALLOWED_ORIGINS, secrets: [stripeSecretKey], invoker: "public"},
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).json({error: "Method not allowed"});
      return;
    }
    const user = await verifyAuth(request);
    if (!user) {
      response.status(401).json({error: "Authentication required"});
      return;
    }
    if (!(await checkRateLimit(user.uid, "createCheckoutSession", 20))) {
      response.status(429).json({error: "Too many requests."});
      return;
    }

    try {
      const plan = request.body?.plan === "annual" ? "annual" : "monthly";
      const price = plan === "annual" ?
        stripePriceAnnual.value() :
        stripePriceMonthly.value();
      if (!price) {
        logger.error(`Stripe price id for plan '${plan}' is not configured`);
        response.status(500).json({error: "Billing is not configured"});
        return;
      }

      const entSnap = await entitlementRef(user.uid).get();
      const existing = entSnap.exists ? entSnap.data() : null;

      // Don't sell a subscription to someone who already has access. trialing/
      // active means a live Stripe subscription; comped is a grandfathered/promo
      // free grant. Any of these should manage billing via the Customer Portal,
      // not start a second Checkout (which would create a duplicate subscription).
      // (still-in-period canceled is intentionally NOT blocked — those users
      // legitimately need to re-subscribe.)
      const existingStatus = existing?.status;
      if (existingStatus === "trialing" ||
          existingStatus === "active" ||
          existingStatus === "comped") {
        response.status(409).json({error: "already_subscribed"});
        return;
      }
      // A past_due subscription is STILL LIVE — Stripe is retrying the card in
      // its dunning window. Opening a fresh Checkout would create a SECOND
      // subscription alongside the one being retried (double billing). Send the
      // client to the Customer Portal to fix the card on the existing sub. The
      // distinct code lets billingService route to createPortalSession.
      if (existingStatus === "past_due") {
        response.status(409).json({error: "past_due"});
        return;
      }

      // Create (or reuse) the Stripe customer OURSELVES and persist its id to the
      // entitlement doc BEFORE opening Checkout. Letting Checkout mint the
      // customer via customer_email means every abandoned checkout can leave an
      // orphan customer; pre-creating + persisting makes the next attempt reuse
      // this one. The entitlement doc is server-write-only, so this Admin write
      // is the only way the id gets there.
      let customerId: string | null = existing?.stripeCustomerId || null;
      if (!customerId) {
        const customer = await getStripe().customers.create({
          email: user.email || undefined,
          metadata: {uid: user.uid},
        });
        customerId = customer.id;
        await entitlementRef(user.uid).set(
          {
            stripeCustomerId: customerId,
            updatedAt: FieldValue.serverTimestamp(),
          },
          {merge: true},
        );
      }

      // Exactly ONE trial per customer: once the entitlement carries the
      // durable trialUsed marker (stamped by the webhook the first time this
      // customer trialed), a re-subscribe after a cancel gets NO fresh trial —
      // billing starts immediately. Otherwise the standard 7-day trial.
      const trialDays = trialDaysForCheckout(existing);
      const subscriptionData: Stripe.Checkout.SessionCreateParams
        .SubscriptionData = {
          // uid on BOTH the session and the subscription: the webhook resolves
          // checkout.session.completed via client_reference_id and later
          // customer.subscription.* events via subscription.metadata.uid.
          metadata: {uid: user.uid},
        };
      if (trialDays != null) {
        // Card-up-front 7-day free trial: the saved card is charged only
        // when the trial ends (unless canceled first).
        subscriptionData.trial_period_days = trialDays;
        // Safety net: if the trial somehow ends with no usable payment
        // method on file, cancel the subscription instead of charging.
        subscriptionData.trial_settings = {
          end_behavior: {missing_payment_method: "cancel"},
        };
      }

      const base = appBaseUrl.value().replace(/\/$/, "");
      const session = await getStripe().checkout.sessions.create({
        mode: "subscription",
        client_reference_id: user.uid,
        customer: customerId,
        line_items: [{price, quantity: 1}],
        allow_promotion_codes: true,
        // payment_method_collection stays at its default ("always") so the
        // card IS collected during Checkout even though the first charge is
        // deferred to trial end — that is the whole point of card-up-front.
        subscription_data: subscriptionData,
        metadata: {uid: user.uid},
        success_url: `${base}/course?checkout=success`,
        cancel_url: `${base}/course?checkout=canceled`,
      });

      response.json({url: session.url});
    } catch (err) {
      logger.error("createCheckoutSession failed", err);
      response.status(500).json({error: "Could not start checkout"});
    }
  },
);

export const createPortalSession = onRequest(
  {cors: ALLOWED_ORIGINS, secrets: [stripeSecretKey], invoker: "public"},
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).json({error: "Method not allowed"});
      return;
    }
    const user = await verifyAuth(request);
    if (!user) {
      response.status(401).json({error: "Authentication required"});
      return;
    }
    if (!(await checkRateLimit(user.uid, "createPortalSession", 20))) {
      response.status(429).json({error: "Too many requests."});
      return;
    }

    try {
      const entSnap = await entitlementRef(user.uid).get();
      const customer = entSnap.exists ? entSnap.data()?.stripeCustomerId : null;
      if (!customer) {
        response.status(400).json({error: "no_billing_account"});
        return;
      }
      const base = appBaseUrl.value().replace(/\/$/, "");
      const portal = await getStripe().billingPortal.sessions.create({
        customer,
        return_url: `${base}/course`,
      });
      response.json({url: portal.url});
    } catch (err) {
      logger.error("createPortalSession failed", err);
      response.status(500).json({error: "Could not open billing portal"});
    }
  },
);

/**
 * Apply an absolute entitlement state derived from a Stripe event, guarded
 * against out-of-order delivery by event.created (see shouldApplyEvent).
 * @param {string} uid target account
 * @param {EntitlementPatch} patch absolute state from the event
 * @param {string|null} stripeCustomerId customer to record, when known
 * @param {number} eventCreatedSec event.created watermark (unix seconds)
 */
async function applyEntitlementPatch(
  uid: string,
  patch: EntitlementPatch,
  stripeCustomerId: string | null,
  eventCreatedSec: number,
): Promise<void> {
  const ref = entitlementRef(uid);
  await getFirestore().runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const existing = snap.exists ? snap.data() : null;
    if (!shouldApplyEvent(eventCreatedSec, existing?.lastEventCreated)) {
      logger.info(`Skipping stale Stripe event for ${uid}`);
      return;
    }
    tx.set(ref, {
      uid,
      status: patch.status,
      plan: patch.plan,
      subscriptionId: patch.subscriptionId,
      currentPeriodEnd: patch.currentPeriodEndMs != null ?
        Timestamp.fromMillis(patch.currentPeriodEndMs) :
        null,
      // Stripe's trial_end drives the client's "N days left / won't be
      // charged until <date>" copy — never app-side math.
      trialEndsAt: patch.trialEndsAtMs != null ?
        Timestamp.fromMillis(patch.trialEndsAtMs) :
        null,
      cancelAtPeriodEnd: patch.cancelAtPeriodEnd,
      ...(stripeCustomerId ? {stripeCustomerId} : {}),
      // Durable one-trial-per-customer marker: once an observed subscription
      // carries a trial we stamp trialUsed permanently (merge-set, never unset)
      // so a re-subscribe after cancel can't mint a fresh trial. Read back by
      // createCheckoutSession via trialDaysForCheckout.
      ...(subscriptionPatchUsedTrial(patch) ? {trialUsed: true} : {}),
      lastEventCreated: eventCreatedSec,
      updatedAt: FieldValue.serverTimestamp(),
    }, {merge: true});
  });
}

/**
 * Resolve the uid for a subscription event: metadata first, then a
 * customer-id lookup against existing entitlement docs.
 * @param {object} sub the Stripe subscription (metadata + customer)
 * @return {Promise<string|null>} the owning uid, or null if unresolvable
 */
async function uidForSubscription(sub: {
  metadata?: {uid?: string};
  customer?: string | {id?: string} | null;
}): Promise<string | null> {
  if (sub.metadata?.uid) return sub.metadata.uid;
  const customerId = typeof sub.customer === "string" ?
    sub.customer :
    sub.customer?.id;
  if (!customerId) return null;
  const q = await getFirestore()
    .collection("entitlements")
    .where("stripeCustomerId", "==", customerId)
    .limit(1)
    .get();
  return q.empty ? null : q.docs[0].id;
}

export const stripeWebhook = onRequest(
  {secrets: [stripeSecretKey, stripeWebhookSecret], invoker: "public"},
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).send("Method not allowed");
      return;
    }

    let event: Stripe.Event;
    try {
      const signature = request.headers["stripe-signature"] as string;
      event = getStripe().webhooks.constructEvent(
        request.rawBody,
        signature,
        stripeWebhookSecret.value(),
      );
    } catch (err) {
      logger.warn("stripeWebhook signature verification failed", err);
      response.status(400).send("Invalid signature");
      return;
    }

    try {
      const monthly = stripePriceMonthly.value();
      const annual = stripePriceAnnual.value();

      switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const uid = session.client_reference_id || session.metadata?.uid;
        const customerId = typeof session.customer === "string" ?
          session.customer :
          session.customer?.id || null;
        const subId = typeof session.subscription === "string" ?
          session.subscription :
          session.subscription?.id;
        if (!uid || !subId) {
          logger.warn("checkout.session.completed without uid/subscription", {
            uid, subId, sessionId: session.id,
          });
          break;
        }
        // Fetch the subscription for authoritative status + period end.
        const sub = await getStripe().subscriptions.retrieve(subId);
        const patch = subscriptionToEntitlementPatch(sub, monthly, annual);
        await applyEntitlementPatch(uid, patch, customerId, event.created);
        logger.info(`Entitlement activated for ${uid} (${patch.plan})`);
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const uid = await uidForSubscription(sub);
        if (!uid) {
          logger.warn(`No uid resolvable for subscription ${sub.id}`);
          break;
        }
        const patch = subscriptionToEntitlementPatch(sub, monthly, annual);
        const customerId = typeof sub.customer === "string" ?
          sub.customer :
          sub.customer?.id || null;
        await applyEntitlementPatch(uid, patch, customerId, event.created);
        break;
      }
      default:
        // Unhandled event types are acknowledged and ignored.
        break;
      }
      response.json({received: true});
    } catch (err) {
      // Non-2xx makes Stripe retry with backoff — correct for transient
      // Firestore failures.
      logger.error(`stripeWebhook handler failed for ${event.type}`, err);
      response.status(500).send("Handler error");
    }
  },
);
