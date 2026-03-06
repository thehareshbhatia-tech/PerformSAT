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

      response.json({
        narrative,
        generatedAt: new Date().toISOString(),
        model: "claude-haiku-4-5-20251001",
      });
    } catch (error) {
      logger.error("Diagnostic narrative generation error:", error);
      response.status(500).json({error: "Internal server error"});
    }
  }
);

function buildDiagnosticNarrativeSystemPrompt(): string {
  return `You are a senior SAT diagnostician. Given rich evidence from a student's Digital SAT Math practice test, produce a structured diagnostic narrative organized as a guided story: what's happening, why, proof, and what it means for the score.

Your output MUST be valid JSON (no markdown fences) matching this schema:

{
  "diagnosis": "string — 2-3 sentence plain-English summary of the student's overall performance and primary pattern. Written as if speaking directly to the student.",
  "weaknesses": [
    {
      "title": "string — concise weakness name (e.g. 'Algebraic Word Problems')",
      "why": "string — 2-3 sentences explaining WHY this weakness exists, citing specific evidence",
      "proof": ["string — 2-3 short bullet-point data citations that prove this claim (e.g. '3/4 algebra word problems wrong', '45s avg vs 70s on correct')"],
      "impact": "string — 1 sentence on how this weakness affects the score (e.g. 'Costing roughly 30 points')",
      "severity": "critical | significant | moderate"
    }
  ],
  "behaviorInsights": "string | null — 2-3 sentences on how test-taking behaviors (pacing, answer changes, calculator use, flagging) affected the score, citing specific data. Null if no meaningful behavioral signal.",
  "scoreImpact": "string — 1-2 sentences connecting the weaknesses to the student's score gap and potential for improvement",
  "topNextFocus": "string — 1-2 sentences: the single highest-leverage thing to work on next and why",
  "changesSinceLast": "string | null — what improved or worsened compared to prior test(s), or null if first test",
  "uncertainties": "string | null — 1-2 sentences on where the evidence is ambiguous, or null if classifications are confident"
}

RULES:
- weaknesses: 2-3 items, ordered by severity/impact. Each must have proof citations.
- proof items must be specific data points, not opinions (e.g. "Geometry: 4/7 correct (57%)")
- impact must quantify the effect on score where possible
- Do NOT include prescriptive advice or study recommendations — a separate study plan handles that
- Always cite specific numbers: accuracy %, question counts, time data, skill names
- Be direct — avoid vague phrases like "review your mistakes" or "practice more"
- If trend data shows persistent weaknesses, emphasize them in the weakness why field
- The tone should be analytical but encouraging — a coach who respects the student's effort`;
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
