/**
 * Firebase Cloud Functions for PerformSAT
 * Includes secure AI Tutor endpoint and Study Plan generator
 */

import {setGlobalOptions} from "firebase-functions/v2/options";
import {defineSecret} from "firebase-functions/params";
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

const anthropicApiKey = defineSecret("ANTHROPIC_API_KEY");

setGlobalOptions({maxInstances: 10});

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
  {cors: true},
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
    cors: true,
    secrets: [anthropicApiKey],
    timeoutSeconds: 120,
    memory: "512MiB",
  },
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).json({error: "Method not allowed"});
      return;
    }

    try {
      const {messages, system, thinking_budget} = request.body;

      if (!messages || !Array.isArray(messages)) {
        response.status(400).json({error: "Messages array is required"});
        return;
      }

      const apiKey = anthropicApiKey.value();
      if (!apiKey) {
        logger.error("ANTHROPIC_API_KEY secret is not configured");
        response.status(500).json({error: "AI service not configured"});
        return;
      }

      const budget = thinking_budget || 10000;

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
            model: "claude-sonnet-4-5-20250929",
            max_tokens: 16000,
            thinking: {
              type: "enabled",
              budget_tokens: budget,
            },
            system: system || "",
            messages: messages,
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

      const data = await anthropicResponse.json() as {
        content: Array<{type: string; text?: string}>;
        usage: unknown;
      };

      const textBlocks = data.content.filter((block) => block.type === "text");
      const responseText = textBlocks.map((block) => block.text).join("\n");

      response.json({
        content: responseText,
        usage: data.usage,
      });
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
    cors: true,
    secrets: [anthropicApiKey],
    timeoutSeconds: 120,
  },
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).json({error: "Method not allowed"});
      return;
    }

    try {
      const {diagnosticReport, userProfile, previousPlans} = request.body;

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

      const systemPrompt = buildStudyPlanSystemPrompt();
      const userPrompt = buildStudyPlanUserPrompt(
        diagnosticReport,
        userProfile || {},
        previousPlans || []
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
            model: "claude-haiku-4-5-20251001",
            max_tokens: 4096,
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
      const rawContent = data.content[0].text;

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
        model: "claude-haiku-4-5-20251001",
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
    cors: true,
    secrets: [anthropicApiKey],
    timeoutSeconds: 120,
  },
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).json({error: "Method not allowed"});
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
      const generateModel = "claude-sonnet-4-5-20250929";
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
            max_tokens: 6000,
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
    const ev = typeof pt === "string" ? "" : (pt.evidence as string || "");
    if (ev.length > 5) evidenceHits++;
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

  // ─── Weighted total ───
  const total = Math.max(0, Math.min(1,
    (evidenceCoverage * 0.18) +
    (numericSpecificity * 0.12) +
    (schemaCompleteness * 0.12) +
    (causalDepth * 0.25) +
    (crossTestUtilization * 0.10) +
    (0.23 - contradictionPenalty - redundancyPenalty - genericPenalty - surfacePenalty)
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
  if (quality.schemaCompleteness < 0.8) issues.push("Some required schema fields are missing. Ensure all fields from the schema are populated.");

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
          model: "claude-sonnet-4-5-20250929",
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
      "claim": "string — one concise bullet about a test-taking behavior that causally affected the score, with the mechanism explained",
      "evidence": "string — the data citation supporting this (e.g. 'Answer changes: 3 changed from correct to incorrect; avg time on changed answers: 20s')",
      "confidence": "high | medium | low"
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
7. BEHAVIORAL CAUSATION: For behaviorInsightPoints, explain the causal link between the behavior and its score impact. Bad: "You changed 3 answers." Good: "You changed 3 answers from correct to incorrect, suggesting second-guessing under time pressure — your avg time on changed answers was 20s vs 55s on stable correct answers."
7b. DEPTH OVER BREADTH: Prefer 3 deeply analyzed diagnosis points over 5 shallow ones. Each diagnosis point should feel like a mini-investigation that reveals something the student could not have figured out by looking at their score alone.

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
18. behaviorInsightPoints: 1-3 items or empty array if no behavioral signal in the data.
19. topNextFocus.reasons: 1-3 items with claim + evidence.
20. SEVERITY ORDERING: weaknesses MUST be ordered by severity (critical first), then by point impact (highest first).

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

function buildStudyPlanSystemPrompt(): string {
  return `You are the PerformSAT AI Study Strategist. You analyze Digital SAT Math practice test diagnostics and produce highly targeted, week-by-week study plans.

IMPORTANT: Strengths and weaknesses are computed deterministically by the diagnostic engine. Do NOT generate them — they will be injected after your response. Focus your output entirely on the weekly study plan and diagnosis narrative.

Your output MUST be valid JSON (no markdown fences) matching this schema:

{
  "summary": {
    "headline": "string — one-sentence plan title",
    "diagnosis": "string — 2-3 sentence learner profile that synthesizes the diagnostic data into an insightful narrative",
    "stats": { "weeksInPlan": number, "totalLessons": number, "totalPractice": number, "minutesPerDay": number }
  },
  "weeks": [
    {
      "weekNumber": number,
      "title": "string",
      "goalDescription": "string",
      "focusSkills": ["string"],
      "activities": [
        {
          "title": "string",
          "subtitle": "string — why this activity matters",
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
  "deltaFromPrevious": "string|null — what changed vs the last plan"
}

RULES:
- Plan should be 2-4 weeks depending on score gap
- Prioritize quick wins (careless errors, easy-question misses) in week 1
- Address conceptual gaps before procedural polish
- Include 1 timed practice test per plan cycle
- Each week should have 4-8 activities, each 10-30 minutes
- Use moduleIds from the SAT Math domains: algebra, advanced-math, problem-solving, geometry
- Always explain WHY each activity is assigned in the subtitle
- If previous plans exist, note what changed and why`;
}

function buildStudyPlanUserPrompt(
  diagnosticReport: Record<string, unknown>,
  userProfile: Record<string, unknown>,
  previousPlans: unknown[]
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

  sections.push(`\nGenerate the JSON study plan now.`);
  return sections.join("\n");
}
