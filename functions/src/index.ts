/**
 * Firebase Cloud Functions for PerformSAT
 * Includes secure AI Tutor endpoint and Study Plan generator
 */

import {setGlobalOptions} from "firebase-functions/v2/options";
import {defineSecret} from "firebase-functions/params";
import {onRequest} from "firebase-functions/v2/https";
import {onSchedule} from "firebase-functions/v2/scheduler";
import {onDocumentUpdated} from "firebase-functions/v2/firestore";
import * as logger from "firebase-functions/logger";
import {initializeApp} from "firebase-admin/app";
import {getAuth, DecodedIdToken} from "firebase-admin/auth";
import {
  getFirestore,
  FieldValue,
  FieldPath,
  QueryDocumentSnapshot,
} from "firebase-admin/firestore";
import {getMessaging, Messaging} from "firebase-admin/messaging";
import {
  classifyNudge,
  buildNudgeContent,
  countDueReviews,
  daysUntilTest,
  toMillis,
} from "./reengagementPolicy";

initializeApp();
const db = getFirestore();

const anthropicApiKey = defineSecret("ANTHROPIC_API_KEY");

setGlobalOptions({maxInstances: 10});

// Allowed CORS origins — restrict to your production domains. EVERY origin the
// app is served from MUST be listed here, or authenticated function calls (the
// AI tutor, AI study-plan generation, etc.) are CORS-blocked by the browser and
// surface to the user as a generic connection error. The live custom domain is
// sevaprep.com (apex 308-redirects to www); keep both. Add any new domain here
// AND redeploy functions when the app's served origin changes.
const ALLOWED_ORIGINS = [
  "https://sevaprep.com",
  "https://www.sevaprep.com",
  "https://perform-sat.vercel.app",
  "https://performsat-production.web.app",
  "https://performsat-production.firebaseapp.com",
  "https://performsat.com",
  "https://www.performsat.com",
  "http://localhost:3000",
  "http://localhost:3001",
];

// Auth helper — verifies Firebase ID token from Authorization header
async function verifyAuth(request: {headers: {authorization?: string}}): Promise<DecodedIdToken | null> {
  const authHeader = request.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return null;
  try {
    return await getAuth().verifyIdToken(authHeader.substring(7));
  } catch {
    return null;
  }
}

// Simple per-user rate limiter using Firestore
const RATE_LIMIT_COLLECTION = "_rateLimits";
async function checkRateLimit(userId: string, endpoint: string, maxPerHour = 60): Promise<boolean> {
  const key = `${userId}_${endpoint}`;
  const ref = db.collection(RATE_LIMIT_COLLECTION).doc(key);
  const now = Date.now();
  const hourAgo = now - 3600000;

  try {
    const snap = await ref.get();
    const data = snap.data();
    const timestamps: number[] = (data?.timestamps || []).filter((t: number) => t > hourAgo);

    if (timestamps.length >= maxPerHour) return false;

    timestamps.push(now);
    await ref.set({timestamps, updatedAt: FieldValue.serverTimestamp()});
    return true;
  } catch {
    return true; // Allow on rate limit check failure
  }
}

interface TranscriptSegment {
  start: number;
  duration: number;
  text: string;
}

interface TranscriptResult {
  videoId: string;
  segments: TranscriptSegment[];
  fullText: string;
  fetchedAt: number;
}

async function fetchFromYouTube(videoId: string): Promise<TranscriptResult | null> {
  try {
    const innertubeResponse = await fetch(
      "https://www.youtube.com/youtubei/v1/player",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        body: JSON.stringify({
          videoId,
          context: {
            client: {
              clientName: "WEB",
              clientVersion: "2.20240101.00.00",
              hl: "en",
              gl: "US",
            },
          },
        }),
      }
    );

    if (!innertubeResponse.ok) return null;

    const data = await innertubeResponse.json() as Record<string, unknown>;
    const captions = data?.captions as Record<string, unknown> | undefined;
    const renderer = captions?.playerCaptionsTracklistRenderer as Record<string, unknown> | undefined;
    const captionTracks = renderer?.captionTracks as Array<{languageCode: string; baseUrl: string}> | undefined;

    if (!captionTracks || captionTracks.length === 0) return null;

    const englishTrack = captionTracks.find((t) => t.languageCode === "en") || captionTracks[0];
    let captionUrl = englishTrack.baseUrl;
    if (!captionUrl.includes("fmt=json3")) captionUrl += "&fmt=json3";

    const captionResponse = await fetch(captionUrl);
    if (!captionResponse.ok) return null;

    const captionData = await captionResponse.json() as {events?: Array<{tStartMs?: number; dDurationMs?: number; segs?: Array<{utf8?: string}>}>};
    const segments: TranscriptSegment[] = [];

    if (captionData.events) {
      for (const event of captionData.events) {
        if (event.segs) {
          const text = event.segs.map((s) => s.utf8 || "").join("");
          if (text.trim()) {
            segments.push({
              start: (event.tStartMs || 0) / 1000,
              duration: (event.dDurationMs || 3000) / 1000,
              text: text.trim(),
            });
          }
        }
      }
    }

    if (segments.length === 0) return null;

    return {
      videoId,
      segments,
      fullText: segments.map((s) => s.text).join(" "),
      fetchedAt: Date.now(),
    };
  } catch (error) {
    logger.warn(`YouTube fetch failed for ${videoId}:`, (error as Error).message);
    return null;
  }
}

/**
 * Fetch YouTube transcript for a video.
 * Checks Firestore cache first, then falls back to YouTube API.
 */
export const getTranscript = onRequest(
  {cors: ALLOWED_ORIGINS},
  async (request, response) => {
    const videoId = (request.query.videoId as string) || request.body?.videoId;

    if (!videoId) {
      response.status(400).json({error: "videoId is required"});
      return;
    }

    try {
      logger.info(`Fetching transcript for video: ${videoId}`);

      const docRef = db.collection("transcripts").doc(videoId);
      const docSnap = await docRef.get();

      if (docSnap.exists) {
        const transcript = docSnap.data();
        logger.info(`Found cached transcript for ${videoId}`);
        response.json(transcript);
        return;
      }

      logger.info(`No cached transcript for ${videoId}, trying YouTube API...`);
      const transcript = await fetchFromYouTube(videoId);

      if (transcript && transcript.segments && transcript.segments.length > 0) {
        await docRef.set(transcript);
        logger.info(`Cached new transcript for ${videoId}`);
        response.json(transcript);
        return;
      }

      response.status(404).json({
        error: "Transcript not available for this video",
        videoId,
        hint: "Run the fetchTranscripts.js script locally to populate transcripts",
      });
    } catch (error) {
      logger.error(`Transcript fetch error for ${videoId}:`, (error as Error).message);
      response.status(500).json({
        error: (error as Error).message || "Failed to fetch transcript",
        videoId,
      });
    }
  }
);

/**
 * AI Tutor endpoint — proxies requests to Anthropic Claude API
 *
 * v2.0: Extended thinking enabled.
 * The model reasons through each math problem internally before responding —
 * like a tutor working the problem on scratch paper before explaining it.
 */
export const aiTutor = onRequest(
  {
    cors: ALLOWED_ORIGINS,
    secrets: [anthropicApiKey],
    timeoutSeconds: 120,
    memory: "512MiB",
  },
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).json({error: "Method not allowed"});
      return;
    }

    // Auth check
    const user = await verifyAuth(request);
    if (!user) {
      response.status(401).json({error: "Authentication required"});
      return;
    }

    // Rate limit: AI tutor calls per hour per user. 60/hr was too low for an
    // active tutoring session (a student working through problems + the occasional
    // retry trips it fast, and the client then shows a misleading error).
    if (!(await checkRateLimit(user.uid, "aiTutor", 200))) {
      response.status(429).json({error: "Too many requests. Please wait a minute and try again."});
      return;
    }

    try {
      const {messages, system} = request.body;

      if (!messages || !Array.isArray(messages) || messages.length > 100) {
        response.status(400).json({error: "Messages array is required (max 100)"});
        return;
      }

      const apiKey = anthropicApiKey.value();
      if (!apiKey) {
        logger.error("ANTHROPIC_API_KEY secret is not configured");
        response.status(500).json({error: "AI service not configured"});
        return;
      }

      // Default to streaming so the student sees the answer type in live instead
      // of staring at a spinner through a long thinking pass. The client sends
      // stream:false to use the buffered fallback path (and retries that way if
      // the stream yields nothing), so a streaming hiccup can never break chat.
      const useStream = request.body.stream !== false;

      const anthropicResponse = await fetch(
        "https://api.anthropic.com/v1/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-6",
            // Tutor answers are short coaching replies, not essays, so a tight
            // cap is fine and guards against a runaway response. (Thinking is
            // off — see below — so no thinking tokens count toward this.)
            max_tokens: 2000,
            // Thinking DISABLED for the interactive tutor. Adaptive thinking ran
            // a reasoning pass before every reply, so the student stared at a
            // spinner before the first streamed token — the single biggest
            // source of perceived latency in chat. The tutor is explaining a
            // known answer with a rich persona prompt; it does not need
            // chain-of-thought. Thinking-off is what makes the first token stream
            // almost immediately (no pre-reply reasoning pass = no spinner). Effort
            // stays at "medium" (not "low") so the model still reliably follows the
            // formatting rules — notably wrapping ALL math in LaTeX dollar signs;
            // at "low" it got terse enough to emit raw "b^2 - 4ac" plain text.
            // Medium effort does NOT re-add the pre-token wait (that was thinking).
            thinking: {type: "disabled"},
            output_config: {effort: "medium"},
            // Prompt caching: send the system prompt as a cacheable content
            // block so the stable persona prefix is reused across turns. (Pays
            // off fully once the client stops interleaving per-turn volatile
            // content into the system prefix — tracked separately.)
            system: system ?
              [{
                type: "text",
                text: typeof system === "string" ? system : String(system),
                cache_control: {type: "ephemeral"},
              }] :
              "",
            messages: messages,
            stream: useStream,
          }),
        }
      );

      if (!anthropicResponse.ok) {
        const errorData = await anthropicResponse.json() as Record<string, unknown>;
        logger.error("Anthropic API error:", errorData);
        response.status(anthropicResponse.status).json({
          error: (errorData.error as Record<string, string>)?.message || "Failed to get AI response",
        });
        return;
      }

      // ── Buffered (non-streaming) path — unchanged behavior, the safety net ──
      if (!useStream) {
        const data = await anthropicResponse.json() as {
          content: Array<{type: string; text?: string}>;
          usage: unknown;
          stop_reason?: string;
        };
        const textBlocks = data.content.filter((block) => block.type === "text");
        const responseText = textBlocks.map((block) => block.text).join("\n");
        response.json({
          content: responseText,
          usage: data.usage,
          stop_reason: data.stop_reason,
        });
        return;
      }

      // ── Streaming path — parse Anthropic SSE, re-emit a minimal event stream ──
      // Protocol to the client: data:{type:"chunk",text} per text delta,
      // data:{type:"done",stop_reason,sawText} at the end, data:{type:"error",message}.
      response.setHeader("Content-Type", "text/event-stream; charset=utf-8");
      response.setHeader("Cache-Control", "no-cache, no-transform");
      response.setHeader("Connection", "keep-alive");
      response.setHeader("X-Accel-Buffering", "no");

      const send = (obj: Record<string, unknown>) => {
        response.write(`data: ${JSON.stringify(obj)}\n\n`);
      };

      const reader = anthropicResponse.body?.getReader();
      if (!reader) {
        send({type: "error", message: "No response stream"});
        response.end();
        return;
      }
      const decoder = new TextDecoder();
      let buffer = "";
      let stopReason: string | null = null;
      let sawText = false;

      try {
        for (;;) {
          const {done, value} = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, {stream: true});
          let sep: number;
          while ((sep = buffer.indexOf("\n\n")) !== -1) {
            const rawEvent = buffer.slice(0, sep);
            buffer = buffer.slice(sep + 2);
            const dataLine = rawEvent.split("\n").find((l) => l.startsWith("data:"));
            if (!dataLine) continue;
            const json = dataLine.slice(5).trim();
            if (!json || json === "[DONE]") continue;
            let evt: {
              type?: string;
              delta?: {type?: string; text?: string; stop_reason?: string};
              error?: {message?: string};
            };
            try {
              evt = JSON.parse(json);
            } catch {
              continue;
            }
            if (evt.type === "content_block_delta" && evt.delta?.type === "text_delta" && typeof evt.delta.text === "string") {
              sawText = true;
              send({type: "chunk", text: evt.delta.text});
            } else if (evt.type === "message_delta" && evt.delta?.stop_reason) {
              stopReason = evt.delta.stop_reason;
            } else if (evt.type === "error") {
              send({type: "error", message: evt.error?.message || "stream error"});
            }
          }
        }
        send({type: "done", stop_reason: stopReason, sawText});
      } catch (streamErr) {
        logger.error("AI Tutor stream error:", streamErr);
        send({type: "error", message: "stream interrupted"});
      } finally {
        response.end();
      }
    } catch (error) {
      logger.error("AI Tutor error:", error);
      response.status(500).json({error: "Internal server error"});
    }
  }
);

/**
 * Study Plan Generator — turns diagnostic data into a structured study plan
 * via an LLM call. Called client-side after each completed practice test.
 */
export const generateStudyPlan = onRequest(
  {
    cors: ALLOWED_ORIGINS,
    secrets: [anthropicApiKey],
    timeoutSeconds: 120,
  },
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

    if (!(await checkRateLimit(user.uid, "studyPlan", 10))) {
      response.status(429).json({error: "Too many requests. Please try again later."});
      return;
    }

    try {
      const {diagnosticReport, userProfile, previousPlans, longitudinalContext} = request.body;

      if (!diagnosticReport) {
        response.status(400).json({error: "diagnosticReport is required"});
        return;
      }

      const apiKey = anthropicApiKey.value();
      if (!apiKey) {
        logger.error("ANTHROPIC_API_KEY not configured");
        response.status(500).json({error: "AI service not configured"});
        return;
      }

      const lc = longitudinalContext || null;
      const isFirstTest = !lc || ((lc as Record<string, unknown>).totalTests as number || 0) <= 1;
      const persistentWeaknessCount = ((lc as Record<string, unknown>)?.persistentWeaknesses as unknown[] || []).length;
      const systemPrompt = buildStudyPlanSystemPrompt(isFirstTest, persistentWeaknessCount);
      const userPrompt = buildStudyPlanUserPrompt(
        diagnosticReport,
        userProfile || {},
        previousPlans || [],
        lc
      );

      const anthropicResponse = await fetch(
        "https://api.anthropic.com/v1/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-6",
            max_tokens: 6000,
            thinking: {
              type: "enabled",
              budget_tokens: 3000,
            },
            system: systemPrompt,
            messages: [{role: "user", content: userPrompt}],
          }),
        }
      );

      if (!anthropicResponse.ok) {
        const errorData = await anthropicResponse.json();
        logger.error("Anthropic API error:", errorData);
        response.status(anthropicResponse.status).json({
          error: errorData.error?.message || "Failed to generate study plan",
        });
        return;
      }

      const data = await anthropicResponse.json();
      // With thinking enabled, content has both thinking and text blocks — find the text block
      const textBlock = data.content.find((b: Record<string, unknown>) => b.type === "text");
      const rawContent = (textBlock?.text as string) || (data.content[0]?.text as string) || "";

      let plan;
      try {
        const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
        plan = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
      } catch {
        logger.warn("Failed to parse plan JSON, returning raw");
        plan = null;
      }

      if (!plan) {
        response.status(500).json({error: "Failed to parse structured plan"});
        return;
      }

      response.json({
        plan,
        generatedAt: new Date().toISOString(),
        model: "claude-sonnet-4-6",
      });
    } catch (error) {
      logger.error("Study plan generation error:", error);
      response.status(500).json({error: "Internal server error"});
    }
  }
);

/**
 * Diagnostic Narrative Generator — produces a structured AI diagnostic
 * explanation from rich evidence. Separate from study plan generation.
 */
export const generateDiagnosticNarrative = onRequest(
  {
    cors: ALLOWED_ORIGINS,
    secrets: [anthropicApiKey],
    timeoutSeconds: 120,
  },
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

    if (!(await checkRateLimit(user.uid, "diagnosticNarrative", 10))) {
      response.status(429).json({error: "Too many requests. Please try again later."});
      return;
    }

    try {
      const {evidence, userProfile} = request.body;

      if (!evidence) {
        response.status(400).json({error: "evidence payload is required"});
        return;
      }

      const apiKey = anthropicApiKey.value();
      if (!apiKey) {
        logger.error("ANTHROPIC_API_KEY not configured");
        response.status(500).json({error: "AI service not configured"});
        return;
      }

      const systemPrompt = buildDiagnosticNarrativeSystemPrompt();
      const userPrompt = buildDiagnosticNarrativeUserPrompt(evidence, userProfile || {});

      // ─── PASS 1: Generate diagnosis with Sonnet for maximum quality ───
      const generateModel = "claude-opus-4-8";
      const anthropicResponse = await fetch(
        "https://api.anthropic.com/v1/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: generateModel,
            max_tokens: 6500,
            system: systemPrompt,
            messages: [{role: "user", content: userPrompt}],
          }),
        }
      );

      if (!anthropicResponse.ok) {
        const errorData = await anthropicResponse.json();
        logger.error("Anthropic API error:", errorData);
        response.status(anthropicResponse.status).json({
          error: errorData.error?.message || "Failed to generate narrative",
        });
        return;
      }

      const data = await anthropicResponse.json();
      const rawContent = data.content[0].text;

      let narrative;
      try {
        const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
        narrative = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
      } catch {
        logger.warn("Failed to parse narrative JSON, returning raw");
        narrative = null;
      }

      if (!narrative) {
        response.status(500).json({error: "Failed to parse structured narrative"});
        return;
      }

      // ─── PASS 2: Quality scoring ───
      const hasHistory = !!(evidence.trendAnalysis as Record<string, unknown>)?.hasHistory;
      const quality = scoreNarrativeQuality(narrative, hasHistory);
      logger.info("Narrative quality scores", {quality, promptVersion: DIAGNOSTIC_PROMPT_VERSION});

      // ─── PASS 3: Verify + targeted repair if below threshold ───
      if (quality.total < QUALITY_THRESHOLD) {
        logger.warn("Narrative below quality threshold, attempting verification + repair", {total: quality.total});
        const repaired = await attemptNarrativeRepair(
          narrative, quality, apiKey, evidence, userProfile || {}, hasHistory
        );
        if (repaired) {
          const repairedQuality = scoreNarrativeQuality(repaired, hasHistory);
          logger.info("Repaired narrative quality", {quality: repairedQuality});
          if (repairedQuality.total >= QUALITY_THRESHOLD) {
            narrative = repaired;
            narrative._quality = {...repairedQuality, repaired: true};
          } else {
            narrative._quality = {...quality, repairFailed: true};
          }
        } else {
          narrative._quality = {...quality, repairFailed: true};
        }
      } else {
        narrative._quality = {...quality, repaired: false};
      }

      narrative._promptVersion = DIAGNOSTIC_PROMPT_VERSION;

      const qualityOutcome = narrative._quality?.repairFailed ? "fallback" :
        narrative._quality?.repaired ? "repaired" : "accepted";
      logger.info("diagnostic_narrative_outcome", {
        promptVersion: DIAGNOSTIC_PROMPT_VERSION,
        outcome: qualityOutcome,
        qualityTotal: quality.total,
        evidenceCoverage: quality.evidenceCoverage,
        numericSpecificity: quality.numericSpecificity,
        schemaCompleteness: quality.schemaCompleteness,
        causalDepth: quality.causalDepth,
        crossTestUtilization: quality.crossTestUtilization,
        contradictionPenalty: quality.contradictionPenalty,
        redundancyPenalty: quality.redundancyPenalty,
        genericPenalty: quality.genericPenalty,
      });

      response.json({
        narrative,
        generatedAt: new Date().toISOString(),
        model: generateModel,
        promptVersion: DIAGNOSTIC_PROMPT_VERSION,
        quality,
      });
    } catch (error) {
      logger.error("Diagnostic narrative generation error:", error);
      response.status(500).json({error: "Internal server error"});
    }
  }
);

const DIAGNOSTIC_PROMPT_VERSION = "3.0";
const QUALITY_THRESHOLD = 0.65;

interface QualityScores {
  evidenceCoverage: number;
  numericSpecificity: number;
  schemaCompleteness: number;
  causalDepth: number;
  crossTestUtilization: number;
  contradictionPenalty: number;
  redundancyPenalty: number;
  genericPenalty: number;
  surfacePenalty: number;
  behaviorDepthPenalty: number;
  total: number;
  repaired?: boolean;
  repairFailed?: boolean;
}

function scoreNarrativeQuality(narrative: Record<string, unknown>, hasHistory = false): QualityScores {
  let evidenceHits = 0;
  let evidenceTotal = 0;
  let numericHits = 0;
  let numericTotal = 0;

  const numericPattern = /\d+/;

  const diagPts = narrative.diagnosisPoints as Array<Record<string, unknown>> || [];
  diagPts.forEach((pt) => {
    evidenceTotal++;
    numericTotal++;
    const claim = typeof pt === "string" ? pt : (pt.claim as string || "");
    const ev = typeof pt === "string" ? "" : (pt.evidence as string || "");
    if (ev.length > 5) evidenceHits++;
    if (numericPattern.test(claim)) numericHits++;
  });

  const scorePts = narrative.scoreImpactPoints as Array<Record<string, unknown>> || [];
  scorePts.forEach((pt) => {
    evidenceTotal++;
    numericTotal++;
    const claim = typeof pt === "string" ? pt : (pt.claim as string || "");
    const ev = typeof pt === "string" ? "" : (pt.evidence as string || "");
    if (ev.length > 5) evidenceHits++;
    if (numericPattern.test(claim)) numericHits++;
  });

  const behaviorPts = narrative.behaviorInsightPoints as Array<Record<string, unknown>> || [];
  behaviorPts.forEach((pt) => {
    evidenceTotal++;
    numericTotal++;
    const claim = typeof pt === "string" ? pt : (pt.claim as string || "");
    const ev = typeof pt === "string" ? "" : (pt.evidence as string || "");
    if (ev.length > 5) evidenceHits++;
    if (numericPattern.test(claim)) numericHits++;
  });

  const weaknesses = narrative.weaknesses as Array<Record<string, unknown>> || [];
  weaknesses.forEach((w) => {
    evidenceTotal++;
    numericTotal++;
    const proof = w.proof as string[] || [];
    if (proof.length > 0 && proof.some((p: string) => numericPattern.test(p))) evidenceHits++;
    const impact = w.impact as string || "";
    if (numericPattern.test(impact)) numericHits++;
  });

  const evidenceCoverage = evidenceTotal > 0 ? evidenceHits / evidenceTotal : 0;
  const numericSpecificity = numericTotal > 0 ? numericHits / numericTotal : 0;

  let schemaPoints = 0;
  let schemaTotal = 6;
  if (narrative.diagnosis) schemaPoints++;
  if (diagPts.length >= 1) schemaPoints++;
  if (weaknesses.length >= 1) schemaPoints++;
  if (scorePts.length >= 1) schemaPoints++;
  if (narrative.topNextFocus) schemaPoints++;
  if (narrative.consistencyFlags) schemaPoints++;
  const schemaCompleteness = schemaPoints / schemaTotal;

  // ─── Causal depth: check diagnosisPoints for causalMechanism and estimatedImpact ───
  let causalHits = 0;
  let causalTotal = 0;
  diagPts.forEach((pt) => {
    if (typeof pt === "object") {
      causalTotal++;
      const mechanism = pt.causalMechanism as string || "";
      const impact = pt.estimatedImpact as string || "";
      if (mechanism.length > 15 && impact.length > 2) causalHits++;
      else if (mechanism.length > 15 || impact.length > 2) causalHits += 0.5;
    }
  });
  weaknesses.forEach((w) => {
    causalTotal++;
    const why = w.why as string || "";
    const causalPatterns = /\b(because|leads to|causes|results in|due to|compounded by|suggesting|indicates|driven by|stems from|rooted in)\b/i;
    if (causalPatterns.test(why) && why.length > 40) causalHits++;
    else if (why.length > 30) causalHits += 0.5;
  });
  const causalDepth = causalTotal > 0 ? causalHits / causalTotal : 0;

  // ─── Cross-test utilization: did the narrative reference trend/history data? ───
  let crossTestUtilization = 0;
  if (hasHistory) {
    const allText = JSON.stringify(narrative).toLowerCase();
    let crossTestSignals = 0;
    if (/persist|recurring|consecutive|across.*tests?|prior test|previous test|last test/i.test(allText)) crossTestSignals++;
    if (narrative.changesSinceLast && (narrative.changesSinceLast as string).length > 10) crossTestSignals++;
    const flags = narrative.consistencyFlags as Record<string, unknown>;
    if (flags?.crossTestPatterns && (flags.crossTestPatterns as string).length > 5) crossTestSignals++;
    const weakPersist = weaknesses.filter((w) => w.persistenceFlag && (w.persistenceFlag as string).length > 5);
    if (weakPersist.length > 0) crossTestSignals++;
    crossTestUtilization = Math.min(1, crossTestSignals / 3);
  } else {
    crossTestUtilization = 1;
  }

  // ─── Contradiction detection ───
  let contradictionPenalty = 0;
  const consistencyFlags = narrative.consistencyFlags as Record<string, unknown>;
  if (consistencyFlags?.trendDirection) {
    const trend = consistencyFlags.trendDirection as string;
    const allClaims = [
      ...diagPts.map((p) => typeof p === "string" ? p : (p.claim as string || "")),
      ...scorePts.map((p) => typeof p === "string" ? p : (p.claim as string || "")),
    ].join(" ").toLowerCase();

    if (trend === "improving" && /declin|worsen|dropp|regress/i.test(allClaims)) {
      contradictionPenalty = 0.3;
    } else if (trend === "declining" && /improv|better|gain|progress/i.test(allClaims)) {
      contradictionPenalty = 0.3;
    }
  }

  // ─── Redundancy detection (tighter: shorter key for near-duplicate catch) ───
  let redundancyPenalty = 0;
  const allClaimTexts = [
    ...diagPts.map((p) => typeof p === "string" ? p : (p.claim as string || "")),
    ...scorePts.map((p) => typeof p === "string" ? p : (p.claim as string || "")),
    ...behaviorPts.map((p) => typeof p === "string" ? p : (p.claim as string || "")),
  ].map((c) => c.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 40));
  const uniqueClaims = new Set(allClaimTexts);
  if (allClaimTexts.length > 0 && uniqueClaims.size < allClaimTexts.length) {
    redundancyPenalty = (allClaimTexts.length - uniqueClaims.size) * 0.12;
  }

  // ─── Generic language detection ───
  let genericPenalty = 0;
  const genericBanned = /\b(review your mistakes|practice more|focus on weak areas|needs improvement|room for growth|work on|struggling with)\b/i;
  const allClaimsJoined = [
    ...diagPts.map((p) => typeof p === "string" ? p : (p.claim as string || "")),
    ...scorePts.map((p) => typeof p === "string" ? p : (p.claim as string || "")),
    ...behaviorPts.map((p) => typeof p === "string" ? p : (p.claim as string || "")),
    ...weaknesses.map((w) => w.why as string || ""),
  ].join(" ");
  const genericMatches = (allClaimsJoined.match(genericBanned) || []).length;
  genericPenalty = genericMatches * 0.08;

  // ─── Surface-level detection: diagnosis points that describe but don't explain ───
  let surfacePenalty = 0;
  if (diagPts.length > 0) {
    let surfaceCount = 0;
    diagPts.forEach((pt) => {
      if (typeof pt !== "object") { surfaceCount++; return; }
      const claim = pt.claim as string || "";
      const mechanism = pt.causalMechanism as string || "";
      const impact = pt.estimatedImpact as string || "";
      const isSurface =
        mechanism.length < 20 ||
        impact.length < 3 ||
        !numericPattern.test(claim) ||
        !/\b(because|leads to|causes|results in|due to|driven by|stems from|suggesting|indicates|compounded|rooted in|rather than|confirms|accounts for)\b/i.test(claim + " " + mechanism);
      if (isSurface) surfaceCount++;
    });
    surfacePenalty = (surfaceCount / diagPts.length) * 0.15;
  }

  // ─── Behavior depth: check behaviorInsightPoints for causalMechanism and estimatedImpact ───
  let behaviorDepthPenalty = 0;
  if (behaviorPts.length > 0) {
    let shallowBehavior = 0;
    behaviorPts.forEach((pt) => {
      if (typeof pt !== "object") { shallowBehavior++; return; }
      const claim = pt.claim as string || "";
      const mechanism = pt.causalMechanism as string || "";
      const impact = pt.estimatedImpact as string || "";
      const ev = pt.evidence as string || "";
      const isShallow =
        mechanism.length < 20 ||
        impact.length < 3 ||
        !numericPattern.test(claim) ||
        ev.split(";").length < 2;
      if (isShallow) shallowBehavior++;
    });
    behaviorDepthPenalty = (shallowBehavior / behaviorPts.length) * 0.08;
  }

  // ─── Question insights bonus (not mandatory — rewards but doesn't penalize) ───
  const questionInsights = narrative.questionInsights as Array<Record<string, unknown>> || [];
  const questionInsightsBonus = questionInsights.length >= 1 ? 0.01 : 0;

  // ─── Weighted total ───
  const total = Math.max(0, Math.min(1,
    (evidenceCoverage * 0.16) +
    (numericSpecificity * 0.12) +
    (schemaCompleteness * 0.12) +
    (causalDepth * 0.23) +
    (crossTestUtilization * 0.10) +
    (0.27 - contradictionPenalty - redundancyPenalty - genericPenalty - surfacePenalty - behaviorDepthPenalty) +
    questionInsightsBonus
  ));

  return {
    evidenceCoverage: Math.round(evidenceCoverage * 100) / 100,
    numericSpecificity: Math.round(numericSpecificity * 100) / 100,
    schemaCompleteness: Math.round(schemaCompleteness * 100) / 100,
    causalDepth: Math.round(causalDepth * 100) / 100,
    crossTestUtilization: Math.round(crossTestUtilization * 100) / 100,
    contradictionPenalty: Math.round(contradictionPenalty * 100) / 100,
    redundancyPenalty: Math.round(redundancyPenalty * 100) / 100,
    genericPenalty: Math.round(genericPenalty * 100) / 100,
    surfacePenalty: Math.round(surfacePenalty * 100) / 100,
    behaviorDepthPenalty: Math.round(behaviorDepthPenalty * 100) / 100,
    total: Math.round(total * 100) / 100,
  };
}

async function attemptNarrativeRepair(
  original: Record<string, unknown>,
  quality: QualityScores,
  apiKey: string,
  evidence: Record<string, unknown>,
  userProfile: Record<string, unknown>,
  hasHistory = false
): Promise<Record<string, unknown> | null> {
  const issues: string[] = [];
  if (quality.evidenceCoverage < 0.5) issues.push("Many claims lack evidence citations. Add an 'evidence' field with a specific data point for each claim.");
  if (quality.numericSpecificity < 0.5) issues.push("Many claims lack specific numbers. Each claim must cite a count, percentage, or point value from the data.");
  if (quality.causalDepth < 0.5) issues.push("Diagnosis points lack causal depth. Each diagnosisPoint MUST have a 'causalMechanism' field (>15 chars) explaining WHY the pattern exists, and an 'estimatedImpact' field quantifying the score impact. Weakness 'why' fields must explain the root cause, not just describe the symptom.");
  if (quality.crossTestUtilization < 0.5 && hasHistory) issues.push("Cross-test history is available but underutilized. Reference persistent weaknesses, trend shifts, and use 'persistenceFlag' on weaknesses. Populate 'crossTestPatterns' in consistencyFlags and provide specific numbers in 'changesSinceLast'.");
  if (quality.contradictionPenalty > 0) issues.push("The narrative contains contradictory claims about trends. Remove or reconcile conflicting statements. If signals are mixed, note ambiguity in 'uncertainties'.");
  if (quality.redundancyPenalty > 0) issues.push("Some claims are redundant/duplicated across sections. Remove duplicates — each insight should appear only once, with a distinct angle in each section.");
  if (quality.genericPenalty > 0) issues.push("The narrative contains generic language (e.g. 'review your mistakes', 'practice more', 'needs improvement'). Replace every generic phrase with a specific, data-backed observation.");
  if (quality.surfacePenalty > 0.05) issues.push("Some diagnosis points are surface-level — they describe WHAT happened but not WHY. Each diagnosisPoints claim must follow a 3-part structure: observation (with number) -> mechanism (cognitive/strategic root cause) -> impact (point cost). The causalMechanism must go at least 2 levels deep and use causal language (because, leads to, driven by, stems from). Synthesize at least 2 data signals per claim.");
  if (quality.behaviorDepthPenalty > 0.03) issues.push("behaviorInsightPoints are shallow. Each must follow: BEHAVIOR (specific numbers) -> MECHANISM (cognitive/strategic root cause in causalMechanism, >20 chars) -> CONSEQUENCE (quantified in estimatedImpact). Evidence must cite 2+ semicolon-separated data signals. Bad: 'You rushed.' Good: 'Wrong-answer avg 25s vs correct avg 55s (ratio 0.45x) — premature commitment to trap answers from surface-level reading, costing ~25 pts.'");
  if (quality.schemaCompleteness < 0.8) issues.push("Some required schema fields are missing. Ensure all fields from the schema are populated.");
  const repairQuestionInsights = Array.isArray(original.questionInsights) ? original.questionInsights : [];
  if (repairQuestionInsights.length === 0) issues.push("questionInsights is missing or empty. Generate 3-5 question-level insights for the most instructive wrong questions. Each needs questionKey, trapType, trapExplanation, correctApproach, and relatedSkillId. Prioritize trap_susceptibility and conceptual_gap errors.");

  if (issues.length === 0) return null;

  const repairPrompt = `The following diagnostic narrative JSON has quality issues. Fix them and return the corrected JSON only (no markdown fences).

ISSUES TO FIX:
${issues.map((i, idx) => `${idx + 1}. ${i}`).join("\n")}

ORIGINAL (fix this):
${JSON.stringify(original, null, 2)}

DATA CONTEXT (use for evidence citations):
${buildDiagnosticNarrativeUserPrompt(evidence, userProfile)}

CRITICAL REQUIREMENTS FOR REPAIR:
- Every diagnosisPoint must have: claim, evidence, causalMechanism (>30 chars with causal language), estimatedImpact (with point number), confidence
- Each claim must follow: OBSERVATION (specific number) -> MECHANISM (cognitive/strategic root cause) -> IMPACT (point cost)
- causalMechanism must go 2 levels deep: not just "you missed geometry" but "missing coordinate geometry foundations leads to errors on both easy and hard questions, and time data confirms uncertainty"
- Each claim must synthesize at least 2 data signals (e.g. error type + domain, or time + difficulty)
- Every behaviorInsightPoint must have: claim, evidence (2+ semicolon-separated citations), causalMechanism (>20 chars, explaining WHY the behavior happens), estimatedImpact (quantified points or time), confidence
- Each behavior claim must follow: BEHAVIOR (with numbers) -> MECHANISM (cognitive root cause) -> CONSEQUENCE (score/time cost)
- Weakness 'why' must explain causal mechanism, not just restate the observation
- Remove any generic language: "review", "practice more", "focus on", "struggling with"
- Each claim must be unique across sections — no redundancy
- If trend data exists, use it: persistenceFlag on weaknesses, changesSinceLast, crossTestPatterns
- Order diagnosisPoints by impact (highest first)
- Prefer 3 deeply analyzed points over 5 shallow ones

Return ONLY the corrected JSON.`;

  try {
    const repairResponse = await fetch(
      "https://api.anthropic.com/v1/messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 6000,
          system: "You are a quality assurance editor for diagnostic narratives. You enforce clinical precision, causal depth, evidence rigor, and cross-test awareness. Fix the issues and return valid JSON only.",
          messages: [{role: "user", content: repairPrompt}],
        }),
      }
    );

    if (!repairResponse.ok) return null;

    const repairData = await repairResponse.json();
    const repairContent = repairData.content[0].text;
    const jsonMatch = repairContent.match(/\{[\s\S]*\}/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : null;
  } catch (err) {
    logger.warn("Narrative repair attempt failed", {error: err});
    return null;
  }
}

function buildDiagnosticNarrativeSystemPrompt(): string {
  return `You are a senior SAT psychometrician and test diagnostician performing a deep-dive analysis. Given rich evidence from a student's Digital SAT Math practice test, produce a clinically precise structured diagnostic that explains the CAUSAL MECHANISMS behind performance, not just what happened. Every claim MUST be anchored to numeric evidence from the data provided. Do NOT fabricate numbers — use only the data given.

Your output MUST be valid JSON (no markdown fences) matching this schema:

{
  "promptVersion": "${DIAGNOSTIC_PROMPT_VERSION}",
  "diagnosis": "string — 1 concise sentence title summarizing the student's primary performance pattern (e.g. 'Conceptual gaps in geometry and rushed easy-question errors are your biggest score drags'). Do NOT restate the score, percentile, or target gap — those are displayed separately. Focus on the WHY.",
  "diagnosisPoints": [
    {
      "claim": "string — one sharp diagnostic INSIGHT following the 3-part causal chain: OBSERVATION (what the data shows, with a specific number) -> MECHANISM (why it happens) -> IMPACT (how many points it costs). Must answer WHY the score is what it is, not WHAT it is. Bad: 'You missed 4 geometry questions.' Good: '62% of your errors stem from conceptual gaps concentrated in geometry and advanced algebra, where you average 45s per question vs 70s on topics you understand — this single pattern accounts for roughly 40 of your 50-point gap.' Do NOT restate the score, percentile, or target gap. Each claim must synthesize at least 2 data signals (e.g. error type + domain accuracy, or time data + difficulty level).",
      "evidence": "string — 2-4 semicolon-separated specific data citations that anchor this claim (e.g. 'Conceptual Gap errors: 8/13 wrong; Geometry: 4/7 correct; Avg time on geometry wrong answers: 45s; 3/4 hard geometry missed'). Cite from multiple data dimensions when possible.",
      "causalMechanism": "string — the underlying reason this pattern exists, going at least one level deeper than the observation. Do NOT just restate the claim. Explain the cognitive or strategic root cause. Bad: 'You got geometry wrong because you lack geometry skills.' Good: 'Missing foundational understanding of coordinate geometry leads to systematic errors on both easy and hard questions in that domain, suggesting the gap is conceptual rather than procedural — you know the steps but misapply them when spatial reasoning is required.'",
      "estimatedImpact": "string — quantified score impact with a specific number (e.g. '~30 points' or '3 easy questions worth ~20 points'). Use conservative estimates. Must include a point estimate.",
      "confidence": "high | medium | low"
    }
  ],
  "weaknesses": [
    {
      "title": "string — concise weakness name (e.g. 'Algebraic Word Problems')",
      "why": "string — 2-3 sentences explaining the CAUSAL MECHANISM behind this weakness. Don't just say 'you got these wrong' — explain WHY (e.g. 'You consistently misidentify the variable relationships in word problems, suggesting a translation gap between verbal descriptions and algebraic expressions. This is compounded by rushing — your avg time on these questions is 40% below your correct-answer average.')",
      "proof": ["string — 2-3 short data citations that prove this claim (e.g. '3/4 algebra word problems wrong', '45s avg vs 70s on correct')"],
      "impact": "string — 1 sentence quantifying how this affects the score (e.g. 'Costing roughly 30 points')",
      "severity": "critical | significant | moderate",
      "confidence": "high | medium | low",
      "persistenceFlag": "string | null — if this weakness appeared in prior tests, note it here (e.g. 'Weak across 3 consecutive tests'). null if first test or no history."
    }
  ],
  "scoreImpactPoints": [
    {
      "claim": "string — one concise bullet connecting a specific causal pattern to the score gap (e.g. 'Careless errors on 3 easy questions cost roughly 30 recoverable points — you answered these in under 30s each, well below the 55s average for questions you got right')",
      "evidence": "string — the supporting data citation",
      "confidence": "high | medium | low"
    }
  ],
  "behaviorInsightPoints": [
    {
      "claim": "string — one concise diagnostic bullet about a specific test-taking behavior that causally affected the score, following the pattern: BEHAVIOR (what happened, with numbers) -> MECHANISM (the cognitive/strategic root cause) -> CONSEQUENCE (quantified score impact). Bad: 'You changed some answers.' Good: 'You changed 3 answers from correct to incorrect, spending only 20s on each revision vs 55s on stable correct answers — this suggests second-guessing under time pressure rather than genuine reconsideration, costing ~30 points.'",
      "evidence": "string — 2-3 semicolon-separated data citations that anchor the behavior claim (e.g. 'Answer changes: 3 correct→incorrect; avg time on changed: 20s vs 55s on stable correct; all 3 changes occurred in final 15 minutes')",
      "causalMechanism": "string — the cognitive or strategic root cause of the behavior, going deeper than the surface description. Bad: 'You rushed.' Good: 'The speed differential on wrong answers (ratio 0.55x) combined with the late-test clustering suggests depleted working memory from sustained effort, leading to premature commitment to familiar-looking trap answers rather than systematic elimination.'",
      "estimatedImpact": "string — quantified score consequence (e.g. '~30 points lost from answer reversals' or '~45s wasted per test from calculator over-reliance')",
      "confidence": "high | medium | low"
    }
  ],
  "questionInsights": [
    {
      "questionKey": "string — question key from wrongQuestions (e.g. '0-4')",
      "trapType": "partial_calculation | sign_error | misread_stem | wrong_formula | unit_confusion | distractor | conceptual_misunderstanding",
      "trapExplanation": "string — 1-2 sentences: what trap this specific question set and why the student fell for it. Reference the student's actual answer choice if possible.",
      "correctApproach": "string — 1-2 sentences: the specific technique or method to solve this correctly. Name the mathematical concept.",
      "relatedSkillId": "string — the most relevant skill ID from the wrongQuestions data"
    }
  ],
  "topNextFocus": {
    "headline": "string — 1 sentence: the single highest-leverage area to focus on next, with quantified upside",
    "reasons": [
      {
        "claim": "string — why this is the top priority, with causal reasoning",
        "evidence": "string — supporting data"
      }
    ]
  },
  "changesSinceLast": "string | null — what improved or worsened compared to prior test(s), with specific numbers and whether the change is statistically meaningful. null if first test.",
  "uncertainties": "string | null — 1-2 sentences on where the evidence is thin, classifications are ambiguous, or sample sizes are too small to draw firm conclusions. null only if all claims are high-confidence.",
  "consistencyFlags": {
    "trendDirection": "improving | declining | stable | insufficient_data",
    "dominantErrorCategory": "string — the single error type with the highest count",
    "crossTestPatterns": "string | null — note any patterns that persist or shift across tests. null if first test."
  }
}

CLINICAL ACCURACY RULES:

=== EVIDENCE RIGOR ===
1. EVIDENCE BINDING: Every claim in diagnosisPoints, scoreImpactPoints, behaviorInsightPoints, and weaknesses MUST include an evidence field citing a SPECIFIC number from the provided data. If you cannot cite a specific number, set confidence to "low".
2. NO FABRICATION: Only use numbers that appear in the evidence provided. Do not infer or estimate numbers not in the data. If the data says "3/4 wrong", say "3/4 wrong" — do not say "75% wrong" unless the data explicitly says 75%.
3. EVIDENCE TIGHTNESS: The evidence field must directly support the claim — not just be tangentially related. Bad: claim about geometry errors, evidence about overall time. Good: claim about geometry errors, evidence citing geometry-specific accuracy and error types.
4. QUANTITATIVE IMPACT: Every weakness.impact and scoreImpactPoints.claim MUST include a numeric estimate (points, percentage, or count). Use conservative estimates when exact numbers are unavailable, and set confidence to "medium".

=== CAUSAL DEPTH ===
5. CAUSAL MECHANISM REQUIRED: Every diagnosisPoints entry MUST include a causalMechanism field explaining WHY the pattern exists, not just describing it. Go at least TWO levels deeper than the surface observation. Level 1 (surface, BANNED alone): "You missed geometry questions." Level 2 (mechanism): "Missing foundational understanding of coordinate geometry." Level 3 (deep, REQUIRED): "Missing foundational understanding of coordinate geometry leads to systematic errors on both easy and hard questions in that domain, and the time data confirms this — you spent 45s on geometry wrongs vs 70s on topics you got right, suggesting you recognize your uncertainty but can't resolve it."
6. CROSS-SIGNAL SYNTHESIS: EVERY diagnosisPoint claim MUST synthesize at least 2 distinct data signals (e.g. error type + domain accuracy, or time data + difficulty level, or trend data + current performance). Single-signal claims are surface-level. Combine domain accuracy with time patterns, error classifications with difficulty breakdowns, or behavior data with score outcomes.
7. BEHAVIORAL CAUSATION: Every behaviorInsightPoint MUST follow the 3-part causal chain: BEHAVIOR (specific observation with numbers) -> MECHANISM (cognitive/strategic root cause explaining WHY) -> CONSEQUENCE (quantified score or time impact). Each must include causalMechanism (>20 chars) and estimatedImpact (with a number). Bad: "You changed 3 answers." Good: "You changed 3 answers from correct to incorrect, suggesting second-guessing under time pressure — your avg time on changed answers was 20s vs 55s on stable correct answers, costing ~30 points."
7b. BEHAVIOR EVIDENCE RIGOR: behaviorInsightPoints evidence must cite at least 2 distinct data signals (e.g. time data + accuracy, or answer-change count + timing pattern, or stamina score + accuracy drop). Single-signal behavior claims are surface-level and will be penalized.
7c. DEPTH OVER BREADTH: Prefer 3 deeply analyzed diagnosis points over 5 shallow ones. Each diagnosis point should feel like a mini-investigation that reveals something the student could not have figured out by looking at their score alone.

=== CROSS-TEST INTELLIGENCE ===
8. TREND EXPLOITATION: When trend data is available, EVERY diagnosis must incorporate it. Note persistent weaknesses explicitly. If a skill has been weak across 3+ tests, call it out as a structural gap, not a one-time miss. Use the persistenceFlag field on weaknesses.
9. REGRESSION DETECTION: If performance declined in an area that was previously strong, flag it prominently in changesSinceLast with specific numbers. This is more important than stable weaknesses.
10. IMPROVEMENT VALIDATION: If scores improved, analyze WHETHER the improvement is in the right areas. Improving on easy questions while still missing conceptual items is a different story than genuine skill growth.

=== CONSISTENCY GUARDRAILS ===
11. CONTRADICTION BAN: Do NOT produce claims that contradict each other. If trendDirection is "improving", no claim may say performance is declining in the same scope. If you detect conflicting signals, flag the ambiguity in uncertainties.
12. REDUNDANCY BAN: Each insight must be UNIQUE across all sections. Do not repeat the same observation in diagnosisPoints AND scoreImpactPoints. If a pattern appears in multiple sections, each mention must add a distinct angle (e.g. diagnosis names the pattern, scoreImpact quantifies the cost, weakness explains the root cause).
13. CONFIDENCE TAGGING: Set confidence to "high" when the claim is directly derivable from the data, "medium" when it requires reasonable inference, "low" when evidence is thin or ambiguous.

=== RANKING & OUTPUT QUALITY ===
14. IMPACT-ORDERED: diagnosisPoints MUST be ordered by estimated score impact (highest first), then by confidence (highest first). The most impactful insight comes first.
15. diagnosisPoints: 2-5 items. Provide 2-3 by default; include 4-5 only when the data supports distinct, non-redundant insights. Each must have claim + evidence + causalMechanism + estimatedImpact + confidence.
16. weaknesses: 2-3 items ordered by severity (critical first). Each must have proof citations with specific data points.
17. scoreImpactPoints: 2-4 items. Each must cite a specific number.
18. behaviorInsightPoints: 1-3 items or empty array if no behavioral signal in the data. Each MUST have claim + evidence (2+ data citations) + causalMechanism (>20 chars, explaining WHY) + estimatedImpact (quantified) + confidence.
19. topNextFocus.reasons: 1-3 items with claim + evidence.
20. SEVERITY ORDERING: weaknesses MUST be ordered by severity (critical first), then by point impact (highest first).
20b. questionInsights: 3-5 items. Select the most instructive wrong questions — maximize coverage across distinct error types and difficulty levels. Prioritize trap_susceptibility and conceptual_gap errors. Skip unanswered and pure time_pressure errors. Each must reference a specific questionKey from the wrongQuestions data.

=== BANNED PATTERNS ===
21. SCORE RESTATEMENT BAN: The student's score, percentile, and target gap are already displayed separately. Do NOT waste diagnosis or diagnosisPoints on restating these obvious numbers.
22. GENERIC LANGUAGE BAN: The following phrases are BANNED — they add no diagnostic value: "review your mistakes", "practice more", "focus on weak areas", "needs improvement", "room for growth", "work on", "struggling with". Every sentence must contain a specific, data-backed observation.
23. PRESCRIPTIVE BAN: Do NOT include study advice or recommendations — a separate study plan handles that.
24. OBVIOUS OBSERVATION BAN: Do not state things the student can see from their raw score (e.g. "You got 30/44 correct"). Diagnosis points must reveal HIDDEN patterns the data exposes.
25. proof items must be specific data points, not opinions (e.g. "Geometry: 4/7 correct (57%)").
25b. SURFACE-LEVEL BAN: Diagnosis points that only describe WHAT happened without explaining WHY are banned. Each claim must contain both a pattern AND its mechanism. Bad: "You missed 4 out of 7 geometry questions." Good: "Geometry accuracy of 43% is driven by a coordinate geometry blind spot — you missed all 3 coordinate problems but got 3/4 non-coordinate geometry correct, suggesting the gap is topic-specific rather than domain-wide."

=== TONE ===
26. Tone: clinical, precise, and incisive. State facts, quantify impact, explain mechanisms, acknowledge uncertainty. No motivational filler. Write as if producing a medical-style diagnostic report for a specialist audience.

=== FORMAT ===
27. SCANNABLE SUPPORT FIELDS: In evidence, causalMechanism, and proof fields, prefer semicolon-separated concise clauses over dense paragraphs (e.g. "Geometry: 4/7 correct; Avg time 45s vs 70s on correct; 3/4 coordinate geometry wrong"). This lets the UI render them as scannable bullet lists. Keep each clause short and self-contained.
28. SCANNABLE CLAIMS: When a diagnosisPoint claim has multiple linked ideas, separate them into concise clauses with semicolons or em-dashes instead of one long paragraph sentence. Keep each clause information-dense and causally connected.`;
}

function buildDiagnosticNarrativeUserPrompt(
  evidence: Record<string, unknown>,
  userProfile: Record<string, unknown>
): string {
  const sections: string[] = [];

  const score = evidence.score as Record<string, unknown> || {};
  sections.push(`## Score: ${score.scaled || "N/A"}/800 (${score.raw || 0}/${score.total || 44} raw, ${score.percentCorrect || 0}%)
Target: ${score.target || 700} | Gap: ${score.gap || 0} points`);

  if (userProfile.testDate) {
    sections.push(`Test Date: ${userProfile.testDate}`);
  }

  const fp = evidence.mistakeFingerprint as Record<string, unknown>;
  if (fp?.archetypeLabel) {
    sections.push(`\n## Archetype: ${fp.archetypeLabel}\n${fp.archetypeDescription || ""}`);
    const traits = fp.traits as Array<Record<string, unknown>>;
    if (traits && traits.length > 0) {
      sections.push("Traits: " + traits.map(t => `${t.trait} (${t.severity})`).join(", "));
    }
  }

  const ep = evidence.errorPatterns as Record<string, unknown>;
  if (ep?.summary) {
    const errStr = (ep.summary as Array<Record<string, unknown>>)
      .map(e => `- ${e.label}: ${e.count} (${e.percentage}%) — ${e.description || ""}`)
      .join("\n");
    sections.push(`\n## Error Patterns (${ep.totalWrong} wrong)\n${errStr}`);
  }

  const da = evidence.domainAnalysis as Array<Record<string, unknown>>;
  if (da && da.length > 0) {
    sections.push(`\n## Domain Performance\n${da.map(d =>
      `- ${d.displayName}: ${d.accuracy}% (${d.correct}/${d.total}), error types: ${JSON.stringify(d.errorTypes || {})}`
    ).join("\n")}`);
  }

  const sa = evidence.skillAnalysis as Record<string, unknown>;
  const weak = (sa?.weakSkills as Array<Record<string, unknown>>) || [];
  if (weak.length > 0) {
    sections.push(`\n## Weak Skills\n${weak.map(s =>
      `- ${s.name} (${s.domain}): ${s.testAccuracy}%, ${s.correct}/${s.total}, error: ${s.primaryErrorType || "mixed"}, ` +
      `mastery: ${s.historicalMastery !== null && s.historicalMastery !== undefined ? s.historicalMastery + "%" : "first time"}, trend: ${s.trend || "unknown"}`
    ).join("\n")}`);
  }

  const wq = evidence.wrongQuestions as Array<Record<string, unknown>>;
  if (wq && wq.length > 0) {
    sections.push(`\n## Wrong Questions (${wq.length} total)\n${wq.slice(0, 15).map(q =>
      `- ${q.key} [${q.difficulty}/${q.domain}]: ${q.errorType} (conf ${q.confidence}), ` +
      `${q.timeSpent}s (${q.timeVsDifficulty}), skills: ${(q.skillNames as string[] || []).join(", ")}` +
      `${(q.answerChangeCount as number) > 0 ? `, ${q.answerChangeCount} answer change(s)` : ""}` +
      `${q.usedCalculator ? ", used calc" : ""}` +
      `${q.markedForReview ? ", flagged" : ""}` +
      ` — ${q.reasoning || "no reasoning"}`
    ).join("\n")}`);
  }

  const rcc = evidence.rootCauseClusters as Array<Record<string, unknown>>;
  if (rcc && rcc.length > 0) {
    sections.push(`\n## Root-Cause Clusters\n${rcc.map(c =>
      `- ${c.label} (${c.severity}): ${c.description}`
    ).join("\n")}`);
  }

  const sc = evidence.skillClusters as Array<Record<string, unknown>>;
  if (sc && sc.length > 0) {
    sections.push(`\n## Skill Clusters (related skills failing together)\n${sc.map(c =>
      `- ${c.name}: ${(c.failedSkills as string[]).join(", ")} (${c.severity})`
    ).join("\n")}`);
  }

  const diff = evidence.difficultyAnalysis as Record<string, unknown>;
  if (diff?.levels) {
    const lvl = diff.levels as Record<string, Record<string, unknown>>;
    sections.push(`\n## Difficulty: Easy ${lvl.easy?.accuracy || 0}% | Medium ${lvl.medium?.accuracy || 0}% | Hard ${lvl.hard?.accuracy || 0}%`);
  }

  const ta = evidence.timeAnalysis as Record<string, unknown>;
  if (ta) {
    sections.push(`\n## Time: avg ${ta.avgTimePerQuestion}s/q, correct avg ${ta.avgCorrectTime}s, wrong avg ${ta.avgIncorrectTime}s, fade ${ta.fadeEffect}% (${ta.firstHalfAccuracy}% → ${ta.secondHalfAccuracy}%), time-related errors: ${ta.timeRelatedErrors}`);
  }

  const stam = evidence.stamina as Record<string, unknown>;
  if (stam) {
    sections.push(`Stamina: ${stam.staminaScore}/100 (${stam.rating}), ${stam.dropoff}% dropoff`);
  }

  const ap = evidence.answerPatterns as Record<string, unknown>;
  if (ap) {
    if (ap.biasWarning) sections.push(`Position bias: ${ap.biasWarning}`);
    const ac = ap.answerChanges as Record<string, unknown>;
    if (ac) sections.push(`Answer changes: ${ac.total} total, ${ac.changedToCorrect} helped, ${ac.changedToWrong} hurt`);
    const elim = ap.elimination as Record<string, unknown>;
    if (elim) sections.push(`Elimination: ${elim.used} used, ${elim.accuracy}% accurate`);
  }

  const trend = evidence.trendAnalysis as Record<string, unknown>;
  if (trend?.hasHistory) {
    const sc2 = Number(trend.scoreChange) || 0;
    sections.push(`\n## Trend: ${trend.trend} (${sc2 > 0 ? "+" : ""}${sc2} pts)`);
    const pw = trend.persistentWeaknesses as Array<Record<string, unknown>>;
    if (pw && pw.length > 0) {
      sections.push(`Persistent weaknesses: ${pw.map(p => `${p.name} (${p.testCount} tests)`).join(", ")}`);
    }
    const dec = trend.decliningSkills as string[];
    if (dec && dec.length > 0) sections.push(`Declining: ${dec.join(", ")}`);
    const imp = trend.improvingSkills as string[];
    if (imp && imp.length > 0) sections.push(`Improving: ${imp.join(", ")}`);
  }

  const ci = evidence.confidenceInterval as Record<string, unknown>;
  if (ci) {
    const s80 = ci.scaled80 as Record<string, unknown>;
    sections.push(`\n## Score confidence: ${s80?.low}–${s80?.high} (80% CI), reliability: ${ci.reliability}`);
  }

  const lv = evidence.learningVelocity as Record<string, unknown>;
  if (lv) {
    sections.push(`Learning velocity: ${lv.velocity} pts/week (${lv.trend}), ${lv.testsCompleted} tests, ${lv.totalGain} total gain`);
  }

  sections.push("\nGenerate the diagnostic narrative JSON now.");
  return sections.join("\n");
}

function buildStudyPlanSystemPrompt(isFirstTest: boolean, persistentWeaknessCount: number): string {
  const contextBlock = isFirstTest ? `
## CONTEXT: FIRST TEST
This is the student's first diagnostic. Build a comprehensive plan from scratch.
Prioritize: (1) highest-frequency SAT domains by weight, (2) biggest error-type
clusters, (3) easiest quick wins on careless/trap errors before conceptual gaps.
Do NOT assume any prior PerformSAT lesson work.
` : `
## CONTEXT: RETURNING STUDENT (test 2+)
The student has prior test history. The plan MUST differ from the previous one.
Rules:
1. Skills that IMPROVED since last test get ≤1 activity (reinforcement only).
   Do not assign 3 lessons to a skill the student now gets 80%+ correct.
2. Skills that REGRESSED or newly appeared get top priority.
3. Skills that have been weak across EVERY test (persistent weaknesses) need
   a different pedagogical approach — not "more practice" but "reteach from
   concept level." Call this out explicitly in persistentWeaknessStrategy.
4. deltaFromPrevious MUST be a specific 1-sentence summary of what changed
   (e.g. "Quadratics improved 30→65% so removed 4 lessons; statistics added
   as new priority at 40% accuracy").
`;

  const persistentBlock = persistentWeaknessCount > 0 ? `
## PERSISTENT WEAKNESSES ALERT
${persistentWeaknessCount} skill(s) have been weak across multiple tests.
These students are stuck — not just untaught. The plan must include a
"reteach from first principles" activity for each, not just practice questions.
` : "";

  return `You are the PerformSAT AI Study Strategist. Produce a focused, actionable weekly study plan from Digital SAT Math diagnostics.
${contextBlock}${persistentBlock}
IMPORTANT: Strengths and weaknesses are computed deterministically. Do NOT generate them. Focus entirely on the weekly plan and a brief diagnosis.

Output MUST be valid JSON (no markdown fences) matching this schema:

{
  "summary": {
    "headline": "string — max 12 words. State the core strategy, not the score. Must reference this student's specific dominant error pattern or weakest skill by name. Write it as a coach speaking to the student, not a strategy memo: 'Fix pacing first — the clock cost you 12 questions' is right; '12 time-pressure errors demand pacing overhaul' is wrong.",
    "diagnosis": "string — 2-3 sentences. Synthesize the root cause of the score gap using the exact data provided. Reference at least: (1) the dominant error type with count, (2) the weakest skill by name with accuracy %. No motivational filler. Example: 'You missed 6/8 algebra questions, mostly from conceptual gaps in slope-intercept form (25% accuracy). Careless errors on easy questions cost 3 more — fixing those alone adds ~30 points.'",
    "stats": { "weeksInPlan": number, "totalLessons": number, "totalPractice": number, "minutesPerDay": number }
  },
  "nextAction": {
    "title": "string — max 10 words. The single most important thing to do first.",
    "reason": "string — max 25 words. Why this action pays the most points, citing the specific evidence (e.g. '3/4 wrong in linear equations — the concept needs rebuilding before practice').",
    "type": "lesson|practice|strategy|review|test",
    "duration": number,
    "moduleId": "string|null",
    "lessonId": "string|null"
  },
  "weeks": [
    {
      "weekNumber": number,
      "title": "string — max 6 words",
      "goalDescription": "string — max 20 words. One clear measurable outcome that references the specific skill or error type this week targets.",
      "rationale": "string — max 25 words. Why this week's focus was chosen given the diagnosis (e.g. 'Slope-intercept is your biggest gap at 25% — fixing it unlocks 5+ questions per test').",
      "focusSkills": ["string"],
      "activities": [
        {
          "title": "string — max 10 words. Be specific: name the skill or topic.",
          "subtitle": "string — max 20 words. State WHY this activity matters for the score using evidence.",
          "type": "lesson|practice|strategy|review|test",
          "duration": number,
          "moduleId": "string|null",
          "lessonId": "string|null",
          "sectionName": "string|null",
          "completed": false
        }
      ]
    }
  ],
  "deltaFromPrevious": "string|null — 2-3 SHORT sentences (max 20 words each): what changed since the last plan and why, citing score or skill accuracy changes. Never one long run-on sentence.",
  "persistentWeaknessStrategy": "string|null — 1-2 short sentences: the new approach for multi-test weaknesses, naming the specific skills and why more practice alone won't fix them"
}

PERSONALIZATION RULES (these differentiate plans between students):
P1. summary.diagnosis MUST cite this student's actual data: dominant error type + count, weakest skill + accuracy %, and if available, stamina/timing evidence.
P2. Each week's rationale MUST explain why that week targets what it does, referencing the student's specific gap data.
P3. nextAction.reason MUST cite the specific evidence that makes this the highest-ROI activity for THIS student.
P4. When persistent weaknesses exist (weak across multiple tests), the plan must change approach: reteach from scratch rather than just more practice. Name the specific skills.
P5. When stamina/timing data shows accuracy drop-off, week 1 must include a pacing strategy activity.

GENERAL RULES:
1. NO EMOJIS anywhere in the output. This is strictly enforced.
2. NO motivational filler — no "You can do it!", "Great job!", "Keep going!", "Don't worry!". State facts only.
3. NO vague advice — never say "review your mistakes", "practice more", "focus on weak areas". Name the specific topic/skill.
4. Plan 2-4 weeks depending on score gap. Week 1 = quick wins (careless errors, easy-question misses).
5. Address conceptual gaps before procedural polish. Include 1 practice test per cycle.
6. Each week: 4-8 activities, each 10-30 minutes.
7. Use moduleIds: algebra, advanced-math, problem-solving, geometry.
8. Every activity subtitle must answer "why this helps your score" in concrete terms (e.g. "You missed 3/4 of these — fixing them adds ~20 points").
9. nextAction must be the single highest-ROI activity from week 1.
10. When longitudinal context is provided, persistent weaknesses that span multiple tests get top priority — they need reteaching, not just more practice.
11. Keep all text concise. Prefer short declarative sentences. No padding.
12. VOICE: You are a coach talking to a 16-year-old who just took this test. Second person. Max ~20 words per sentence — split long thoughts into two sentences. Plain words only: never "remediation", "execution collapse", "pivot", "escalate", "overhaul", "demand", "leverage", or any consulting/engineering jargon. Every sentence should sound like a person who watched the test, not a report about it.`;
}

function buildStudyPlanUserPrompt(
  diagnosticReport: Record<string, unknown>,
  userProfile: Record<string, unknown>,
  previousPlans: unknown[],
  longitudinalContext: Record<string, unknown> | null = null
): string {
  const score = diagnosticReport.score as Record<string, unknown> || {};
  const errorPatterns = diagnosticReport.errorPatterns as Record<string, unknown> || {};
  const domainAnalysis = diagnosticReport.domainAnalysis || [];
  const skillAnalysis = diagnosticReport.skillAnalysis as Record<string, unknown> || {};
  const difficultyAnalysis = diagnosticReport.difficultyAnalysis as Record<string, unknown> || {};
  const timeAnalysis = diagnosticReport.timeAnalysis as Record<string, unknown> || {};
  const mistakeFingerprint = diagnosticReport.mistakeFingerprint as Record<string, unknown> || {};
  const trendAnalysis = diagnosticReport.trendAnalysis as Record<string, unknown> || {};
  const prioritizedActions = diagnosticReport.prioritizedActions || [];

  const sections: string[] = [];

  sections.push(`## Score Overview
Current: ${score.scaled || "N/A"} / 800 (${score.raw || 0}/${score.total || 44} raw)
Target: ${score.target || 700}
Gap: ${score.gap || 0} points`);

  if (userProfile.testDate) {
    sections.push(`Test Date: ${userProfile.testDate}`);
  }

  if (mistakeFingerprint.archetypeLabel) {
    sections.push(`\n## Student Archetype: ${mistakeFingerprint.archetypeLabel}
${mistakeFingerprint.archetypeDescription || ""}`);
  }

  if (errorPatterns.summary) {
    const errSummary = (errorPatterns.summary as Array<Record<string, unknown>>)
      .map((e) => `- ${e.label}: ${e.count} (${e.percentage}%)`)
      .join("\n");
    sections.push(`\n## Error Pattern Breakdown\n${errSummary}`);
  }

  if (Array.isArray(domainAnalysis) && domainAnalysis.length > 0) {
    const domStr = (domainAnalysis as Array<Record<string, unknown>>)
      .map((d) => `- ${d.displayName}: ${d.accuracy}% (${d.correct}/${d.total})`)
      .join("\n");
    sections.push(`\n## Domain Performance\n${domStr}`);
  }

  const weak = (skillAnalysis.weakSkills as Array<Record<string, unknown>>) || [];
  const strong = (skillAnalysis.strongSkills as Array<Record<string, unknown>>) || [];
  if (weak.length > 0) {
    sections.push(`\n## Weak Skills\n${weak.slice(0, 8).map((s) => `- ${s.name}: ${s.testAccuracy}% (error: ${s.primaryErrorType || "mixed"})`).join("\n")}`);
  }
  if (strong.length > 0) {
    sections.push(`\n## Strong Skills\n${strong.slice(0, 5).map((s) => `- ${s.name}: ${s.testAccuracy}%`).join("\n")}`);
  }

  if (difficultyAnalysis.levels) {
    const lvl = difficultyAnalysis.levels as Record<string, Record<string, unknown>>;
    sections.push(`\n## Difficulty Breakdown
Easy: ${lvl.easy?.accuracy || 0}% | Medium: ${lvl.medium?.accuracy || 0}% | Hard: ${lvl.hard?.accuracy || 0}%`);
  }

  if (timeAnalysis.fadeEffect) {
    sections.push(`\n## Time & Stamina
Avg time/question: ${timeAnalysis.avgTimePerQuestion || 0}s
Fade effect: ${timeAnalysis.fadeEffect}% accuracy drop in second half`);
  }

  const stamina = diagnosticReport.stamina as Record<string, unknown> || {};
  if (stamina.hasData) {
    sections.push(`\n## Stamina
Rating: ${stamina.rating} (score: ${stamina.staminaScore}/100)
Accuracy drop-off: ${stamina.dropoff}% from first half to second half
${stamina.message || ""}`);
  }

  if (trendAnalysis.hasHistory) {
    const sc = Number(trendAnalysis.scoreChange) || 0;
    sections.push(`\n## Trend: ${trendAnalysis.trend} (${sc > 0 ? "+" : ""}${sc} pts from last test)`);
  }

  if (Array.isArray(prioritizedActions) && prioritizedActions.length > 0) {
    const actStr = (prioritizedActions as Array<Record<string, unknown>>)
      .slice(0, 6)
      .map((a) => `- [${a.category}] ${a.title} (+~${a.estimatedGain} pts)`)
      .join("\n");
    sections.push(`\n## Prioritized Actions\n${actStr}`);
  }

  if (previousPlans.length > 0) {
    const prev = previousPlans[previousPlans.length - 1] as Record<string, unknown>;
    const prevSummary = prev?.summary as Record<string, unknown>;
    sections.push(`\n## Previous Plan Summary: "${prevSummary?.headline || "N/A"}"
Note what changed and why in your deltaFromPrevious field.`);
  }

  if (longitudinalContext) {
    const lc = longitudinalContext;
    const totalTests = lc.totalTests as number || 0;
    const scoreTrajectory = lc.scoreTrajectory as Array<Record<string, unknown>> || [];
    const persistentWeaknesses = lc.persistentWeaknesses as Array<Record<string, unknown>> || [];
    const skillHistory = lc.skillHistory as Record<string, unknown> || {};

    sections.push(`\n## Longitudinal Evidence (${totalTests} tests)`);

    if (scoreTrajectory.length >= 2) {
      const trend = scoreTrajectory.map(s => s.scaledScore).join(" → ");
      const delta = Number(scoreTrajectory[scoreTrajectory.length - 1]?.scaledScore || 0) -
                    Number(scoreTrajectory[0]?.scaledScore || 0);
      sections.push(`Score trajectory: ${trend} (net change: ${delta >= 0 ? "+" : ""}${delta})`);
    }

    if (persistentWeaknesses.length > 0) {
      sections.push(`\nPERSISTENT WEAKNESSES — weak across ${totalTests} tests. These need reteaching, not practice:`);
      persistentWeaknesses.forEach(pw => {
        const trend = pw.trend === "declining" ? "↓ declining" : pw.trend === "flat" ? "→ flat" : "↑ improving";
        sections.push(`  - ${pw.skillId}: ${pw.accuracy}% avg accuracy across ${pw.testCount} tests (${trend})`);
      });
      sections.push(`For each persistent weakness: Week 1 activity MUST be "Reteach from concept level" not "More practice questions". These students have practiced incorrectly — practice reinforces the wrong approach.`);
    }

    // Identify skills that improved since last plan — de-emphasize these
    const improvedSkills: string[] = [];
    const newWeaknesses: string[] = [];
    Object.entries(skillHistory).forEach(([skillId, hist]) => {
      const h = hist as Record<string, unknown>;
      const appearances = (h.appearances as Array<Record<string, unknown>>) || [];
      if (appearances.length >= 2) {
        const first = Number(appearances[0]?.accuracy || 0);
        const last = Number(appearances[appearances.length - 1]?.accuracy || 0);
        if (last - first >= 20) improvedSkills.push(`${skillId} (${first}%→${last}%)`);
        if (first >= 70 && last < 50) newWeaknesses.push(`${skillId} (was ${first}%, now ${last}%)`);
      }
    });

    if (improvedSkills.length > 0) {
      sections.push(`\nImproved since last test — reduce plan weight on these: ${improvedSkills.join(", ")}`);
    }
    if (newWeaknesses.length > 0) {
      sections.push(`\nNew regressions — add to plan immediately: ${newWeaknesses.join(", ")}`);
    }

    sections.push(`\nCRITICAL: The plan deltaFromPrevious field must explicitly name what changed and why. Example: "Quadratics improved 30% to 65%, so those lessons are gone. Statistics is the new week-1 priority (40% this test). Slope-intercept gets retaught from scratch — it's been weak across all 3 tests."`);
  }

  sections.push(`\nGenerate the JSON study plan now.`);
  return sections.join("\n");
}

/**
 * Summarize Chat Session — triggered when an AI chat session is updated.
 * Generates summary, keyInsights, and teachingApproachNotes using Haiku 4.5.
 * Also updates the parent learningMemory.recentSessionSummaries.
 */
export const summarizeChatSession = onDocumentUpdated(
  {
    document: "progress/{userId}/aiChatSessions/{sessionId}",
    secrets: [anthropicApiKey],
  },
  async (event) => {
    const before = event.data?.before?.data();
    const after = event.data?.after?.data();

    if (!after) return;

    // Only summarize if: messageCount >= 4, summary is null, and messages actually changed
    if (after.summary !== null) return;
    if ((after.messageCount || 0) < 4) return;
    if (before?.messageCount === after.messageCount) return;

    const userId = event.params.userId;
    const sessionId = event.params.sessionId;

    logger.info(`Summarizing chat session ${sessionId} for user ${userId}`);

    const apiKey = anthropicApiKey.value();
    if (!apiKey) {
      logger.error("ANTHROPIC_API_KEY not configured for session summarization");
      return;
    }

    const messages = after.messages || [];
    const conversationText = messages
      .map((m: {role: string; content: string}) => `${m.role}: ${m.content}`)
      .join("\n")
      .slice(0, 4000); // Limit to ~4000 chars

    const summarizePrompt = `Analyze this SAT tutoring conversation and return JSON (no markdown fences):

{
  "summary": "1-2 sentence summary of what was discussed and learned",
  "keyInsights": ["insight1", "insight2"],
  "teachingApproachNotes": "What teaching approach worked or didn't work for this student",
  "effectiveApproaches": ["approach that worked well"],
  "confusionPoints": ["concept or step the student was confused about"],
  "pendingInterventions": [{"targetSkillIds": ["skillId"], "message": "brief intervention note", "suggestedPrompt": "prompt to offer", "shown": false}]
}

Rules:
- keyInsights: What the student learned or is still confused about (max 3)
- teachingApproachNotes: How the student responds (concrete examples, Socratic, direct, etc.)
- effectiveApproaches: Specific techniques that helped this student understand
- confusionPoints: What they still don't get (be specific — not "math" but "sign errors when distributing negatives")
- pendingInterventions: If the student left confused about something, create an intervention to address it next time (max 1)
- Keep everything concise — this will be compressed into a system prompt

Conversation:
${conversationText}`;

    try {
      const response = await fetch(
        "https://api.anthropic.com/v1/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: "claude-haiku-4-5-20251001",
            max_tokens: 1000,
            messages: [{role: "user", content: summarizePrompt}],
          }),
        }
      );

      if (!response.ok) {
        logger.error("Summarization API error:", await response.text());
        return;
      }

      const data = await response.json();
      const rawContent = data.content[0].text;

      let parsed;
      try {
        const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
        parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
      } catch {
        logger.warn("Failed to parse session summary JSON");
        return;
      }

      if (!parsed) return;

      // Update the session document with summary
      const sessionRef = db.collection("progress").doc(userId)
        .collection("aiChatSessions").doc(sessionId);

      await sessionRef.update({
        summary: parsed.summary || null,
        keyInsights: parsed.keyInsights || null,
        teachingApproachNotes: parsed.teachingApproachNotes || null,
      });

      // Update parent learningMemory
      const progressRef = db.collection("progress").doc(userId);
      const progressDoc = await progressRef.get();
      const currentMemory = progressDoc.exists ? (progressDoc.data()?.learningMemory || {}) : {};

      const recentSummaries = currentMemory.recentSessionSummaries || [];
      recentSummaries.unshift({
        sessionId,
        moduleId: after.moduleId,
        summary: parsed.summary,
        keyInsights: parsed.keyInsights,
        lastMessageAt: after.lastMessageAt,
      });

      // Merge effective approaches and confusions
      const effectiveApproaches = [
        ...(currentMemory.effectiveApproaches || []),
        ...(parsed.effectiveApproaches || []),
      ].slice(0, 10);

      const persistentConfusions = [
        ...(parsed.confusionPoints || []),
        ...(currentMemory.persistentConfusions || []),
      ].slice(0, 10);

      // Merge pending interventions
      const existingInterventions = (currentMemory.pendingInterventions || []).filter(
        (i: {shown: boolean}) => !i.shown
      );
      const newInterventions = parsed.pendingInterventions || [];
      const allInterventions = [...newInterventions, ...existingInterventions].slice(0, 5);

      // Update topic frequency
      const topicFrequency = currentMemory.topicFrequency || {};
      (after.topicsDiscussed || []).forEach((skillId: string) => {
        topicFrequency[skillId] = (topicFrequency[skillId] || 0) + 1;
      });

      await progressRef.set({
        learningMemory: {
          totalSessions: (currentMemory.totalSessions || 0) + 1,
          lastSessionAt: FieldValue.serverTimestamp(),
          recentSessionSummaries: recentSummaries.slice(0, 5),
          effectiveApproaches,
          persistentConfusions,
          pendingInterventions: allInterventions,
          topicFrequency,
        },
      }, {merge: true});

      logger.info(`Successfully summarized session ${sessionId}`);
    } catch (error) {
      logger.error("Session summarization error:", error);
    }
  }
);

/**
 * Scheduled cleanup: purge stale rate limit documents daily.
 * Runs every day at 3:00 AM UTC.
 */
export const cleanupRateLimits = onSchedule("every day 03:00", async () => {
  const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 hours ago
  const snapshot = await db.collection("_rateLimits")
    .where("updatedAt", "<", cutoff)
    .limit(500)
    .get();

  if (snapshot.empty) {
    logger.info("[cleanupRateLimits] No stale docs to clean up");
    return;
  }

  const batch = db.batch();
  snapshot.docs.forEach((doc) => batch.delete(doc.ref));
  await batch.commit();
  logger.info(`[cleanupRateLimits] Deleted ${snapshot.size} stale rate limit docs`);
});

// ─── Re-engagement nudges (Phase 3) ──────────────────────────────────────────
//
// A daily scheduled job that pulls lapsed / at-risk students back via web push.
// It only contacts students who opted in (the browser permission prompt is the
// consent), so the candidate set is bounded by opt-in count and we can read each
// one's progress doc directly instead of scanning the whole collection. Sends
// DATA-ONLY messages (the service worker renders them) deep-linked to the daily-
// review loop, dedupes on lastReengagementAt, prunes dead FCM tokens, and logs
// every send to reEngagementLog for client-side open-rate attribution.

const REENGAGE_DEDUP_HOURS = 20;
const REENGAGE_LINK = "https://perform-sat.vercel.app/course?next=review";

/**
 * Process one opted-in user: dedup, read engagement signals, classify, send,
 * prune dead tokens, log. Returns true if at least one push was delivered.
 */
async function processReengagementUser(
  userDoc: QueryDocumentSnapshot,
  now: number,
  messaging: Messaging,
): Promise<boolean> {
  const user = userDoc.data() || {};
  const uid = userDoc.id;

  const tokens: string[] = Array.isArray(user.fcmTokens) ?
    user.fcmTokens.filter((t: unknown): t is string => typeof t === "string") : [];
  if (!tokens.length) return false;

  // Dedup: don't nudge again within the window (guards retries / double-runs).
  const lastReengage = toMillis(user.lastReengagementAt);
  if (lastReengage != null && (now - lastReengage) < REENGAGE_DEDUP_HOURS * 60 * 60 * 1000) {
    return false;
  }

  const progSnap = await db.collection("progress").doc(uid).get();
  const prog = progSnap.exists ? (progSnap.data() || {}) : {};
  const dueReviewCount = countDueReviews(prog.reviewQueue, now);
  const reviewStreak = prog.reviewStreak || null;
  const lastEventMs = toMillis(prog.lastEventAt);
  const lastLoginMs = toMillis(user.lastLoginAt);
  const lastActiveMs = Math.max(lastEventMs || 0, lastLoginMs || 0) || null;

  const reason = classifyNudge({now, reviewStreak, dueReviewCount, lastActiveMs});
  if (!reason) return false;

  const content = buildNudgeContent(reason, {
    firstName: typeof user.firstName === "string" ? user.firstName : undefined,
    streakCurrent: (reviewStreak && reviewStreak.current) || 0,
    dueReviewCount,
    daysToTest: daysUntilTest(user.testDate, now),
  });

  const resp = await messaging.sendEachForMulticast({
    tokens,
    data: {
      title: content.title,
      body: content.body,
      url: REENGAGE_LINK,
      reason,
      tag: "seva-reengagement",
    },
    webpush: {fcmOptions: {link: REENGAGE_LINK}},
  });

  // Prune tokens FCM reports as permanently invalid.
  const dead: string[] = [];
  resp.responses.forEach((r, i) => {
    if (!r.success) {
      const code = (r.error && r.error.code) || "";
      if (
        code === "messaging/registration-token-not-registered" ||
        code === "messaging/invalid-registration-token" ||
        code === "messaging/invalid-argument"
      ) {
        dead.push(tokens[i]);
      }
    }
  });

  const update: Record<string, unknown> = {
    lastReengagementAt: FieldValue.serverTimestamp(),
  };
  if (dead.length) {
    update.fcmTokens = FieldValue.arrayRemove(...dead);
  }
  await userDoc.ref.set(update, {merge: true});

  await db.collection("reEngagementLog").add({
    userId: uid,
    reason,
    dueReviewCount,
    tokenCount: tokens.length,
    successCount: resp.successCount,
    deadCount: dead.length,
    sentAt: FieldValue.serverTimestamp(),
  });

  return resp.successCount > 0;
}

/**
 * Scheduled re-engagement nudges. Runs daily at 23:00 UTC (revisit per-timezone
 * delivery later). Only contacts students who opted in to push.
 */
export const sendReEngagementNudges = onSchedule("every day 23:00", async () => {
  const now = Date.now();
  const messaging = getMessaging();

  const snap = await db.collection("users")
    .where("notificationPrefs.reengagementOptIn", "==", true)
    .limit(500)
    .get();

  if (snap.empty) {
    logger.info("[sendReEngagementNudges] no opted-in users");
    return;
  }
  if (snap.size === 500) {
    logger.warn("[sendReEngagementNudges] hit 500-user cap — add pagination as opt-in grows");
  }

  let sent = 0;
  for (const userDoc of snap.docs) {
    try {
      if (await processReengagementUser(userDoc, now, messaging)) sent += 1;
    } catch (err) {
      logger.error(`[sendReEngagementNudges] user ${userDoc.id} failed:`, err);
    }
  }
  logger.info(`[sendReEngagementNudges] opted-in=${snap.size} nudged=${sent}`);
});

/**
 * Account deletion — permanently removes all Firestore data tied to the
 * caller's uid, then deletes the Auth user record. Order matters: Firestore
 * first so a failed Auth delete can be retried while still authenticated.
 */
export const deleteAccount = onRequest(
  {cors: ALLOWED_ORIGINS, timeoutSeconds: 300, memory: "512MiB"},
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
    // Explicit confirmation guard — client must send {confirm: "DELETE"}
    if (request.body?.confirm !== "DELETE") {
      response.status(400).json({error: "Missing confirmation"});
      return;
    }
    const uid = user.uid;
    try {
      // 1. progress/{uid} + ALL subcollections (studyPlanArtifacts, attempts,
      //    aiDiagnostics, aiChatSessions, and any added later)
      await db.recursiveDelete(db.collection("progress").doc(uid));
      // 2. users/{uid} (flat today; recursiveDelete is future-proof)
      await db.recursiveDelete(db.collection("users").doc(uid));
      // 3. _rateLimits docs keyed `${uid}_${endpoint}` — prefix range on doc ID
      const rlSnap = await db.collection(RATE_LIMIT_COLLECTION)
        .where(FieldPath.documentId(), ">=", `${uid}_`)
        .where(FieldPath.documentId(), "<=", `${uid}_\uf8ff`)
        .get();
      if (!rlSnap.empty) {
        const batch = db.batch();
        rlSnap.docs.forEach((d) => batch.delete(d.ref));
        await batch.commit();
      }
      // 4. reEngagementLog rows for this user (paged; collection is small)
      let logSnap = await db.collection("reEngagementLog")
        .where("userId", "==", uid).limit(450).get();
      while (!logSnap.empty) {
        const batch = db.batch();
        logSnap.docs.forEach((d) => batch.delete(d.ref));
        await batch.commit();
        logSnap = await db.collection("reEngagementLog")
          .where("userId", "==", uid).limit(450).get();
      }
      // 5. Auth record LAST
      await getAuth().deleteUser(uid);
      logger.info(`[deleteAccount] deleted all data for ${uid}`);
      response.json({ok: true});
    } catch (error) {
      logger.error(`[deleteAccount] failed for ${uid}:`, error);
      response.status(500).json({error: "Account deletion failed. Try again."});
    }
  }
);
