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
 *   strings: STRIPE_PRICE_MONTHLY, STRIPE_PRICE_ANNUAL, BILLING_APP_BASE_URL
 *   (BILLING_LAUNCH_EPOCH is retained in .env for history but no longer read —
 *    the trial clock is now Stripe's, not the app's.)
 */

import Stripe from "stripe";
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {defineSecret, defineString} from "firebase-functions/params";
import {
  getFirestore,
  FieldValue,
  Timestamp,
  DocumentSnapshot,
} from "firebase-admin/firestore";
import {ALLOWED_ORIGINS, verifyAuth, checkRateLimit} from "./shared";
import {
  TRIAL_DAYS,
  subscriptionToEntitlementPatch,
  shouldApplyEvent,
  hasAccessMs,
  EntitlementPatch,
} from "./stripePolicy";

const stripeSecretKey = defineSecret("STRIPE_SECRET_KEY");
const stripeWebhookSecret = defineSecret("STRIPE_WEBHOOK_SECRET");
const stripePriceMonthly = defineString("STRIPE_PRICE_MONTHLY", {default: ""});
const stripePriceAnnual = defineString("STRIPE_PRICE_ANNUAL", {default: ""});
const appBaseUrl = defineString("BILLING_APP_BASE_URL", {
  default: "https://www.sevaprep.com",
});

const getStripe = () => new Stripe(stripeSecretKey.value());

const entitlementRef = (uid: string) =>
  getFirestore().collection("entitlements").doc(uid);

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
      const ref = entitlementRef(user.uid);
      await getFirestore().runTransaction(async (tx) => {
        const snap = await tx.get(ref);
        if (snap.exists) return; // idempotent — never touch an existing doc
        // Card-up-front model: signup grants NO access. Seed the doc in a
        // no-access "none" state so the aiTutor gate (hasEntitlementAccess)
        // and the client both read "locked" until the student starts a trial
        // via Checkout (the webhook then flips this doc to "trialing").
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
      const existingCustomer = entSnap.exists ?
        entSnap.data()?.stripeCustomerId :
        null;

      const base = appBaseUrl.value().replace(/\/$/, "");
      const session = await getStripe().checkout.sessions.create({
        mode: "subscription",
        client_reference_id: user.uid,
        ...(existingCustomer ?
          {customer: existingCustomer} :
          {customer_email: user.email || undefined}),
        line_items: [{price, quantity: 1}],
        allow_promotion_codes: true,
        // payment_method_collection stays at its default ("always") so the
        // card IS collected during Checkout even though the first charge is
        // deferred to trial end — that is the whole point of card-up-front.
        subscription_data: {
          // uid on BOTH the session and the subscription: the webhook resolves
          // checkout.session.completed via client_reference_id and later
          // customer.subscription.* events via subscription.metadata.uid.
          metadata: {uid: user.uid},
          // Card-up-front 7-day free trial: the saved card is charged only
          // when the trial ends (unless canceled first).
          trial_period_days: TRIAL_DAYS,
          // Safety net: if the trial somehow ends with no usable payment
          // method on file, cancel the subscription instead of charging.
          trial_settings: {
            end_behavior: {missing_payment_method: "cancel"},
          },
        },
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
