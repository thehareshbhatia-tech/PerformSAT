/**
 * Firebase Cloud Functions for PerformSAT
 * Secure AI Tutor endpoint that proxies Anthropic API
 * YouTube Transcript fetching for video context
 */

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

// Define the Anthropic API key as a secret
const anthropicApiKey = defineSecret("ANTHROPIC_API_KEY");

/**
 * Fetch YouTube transcript for a video
 * First checks Firestore cache, then tries YouTube API
 */
exports.getTranscript = onRequest(
  {
    cors: true,
  },
  async (request, response) => {
    const videoId = request.query.videoId || request.body?.videoId;

    if (!videoId) {
      response.status(400).json({ error: "videoId is required" });
      return;
    }

    try {
      logger.info(`Fetching transcript for video: ${videoId}`);

      // First, check Firestore for cached transcript
      const docRef = db.collection("transcripts").doc(videoId);
      const docSnap = await docRef.get();

      if (docSnap.exists) {
        const transcript = docSnap.data();
        logger.info(`Found cached transcript for ${videoId} with ${transcript.segments?.length || 0} segments`);
        response.json(transcript);
        return;
      }

      // If not in Firestore, try fetching from YouTube directly
      // This may fail due to bot detection, but worth trying
      logger.info(`No cached transcript for ${videoId}, trying YouTube API...`);

      const transcript = await fetchFromYouTube(videoId);

      if (transcript && transcript.segments && transcript.segments.length > 0) {
        // Cache in Firestore for future requests
        await docRef.set(transcript);
        logger.info(`Cached new transcript for ${videoId}`);
        response.json(transcript);
        return;
      }

      // If all fails
      response.status(404).json({
        error: "Transcript not available for this video",
        videoId,
        hint: "Run the fetchTranscripts.js script locally to populate transcripts"
      });

    } catch (error) {
      logger.error(`Transcript fetch error for ${videoId}:`, error.message);
      response.status(500).json({
        error: error.message || "Failed to fetch transcript",
        videoId,
      });
    }
  }
);

/**
 * Try to fetch transcript directly from YouTube
 * May fail due to bot detection from Google Cloud IPs
 */
async function fetchFromYouTube(videoId) {
  try {
    // Use YouTube's InnerTube API
    const innertubeResponse = await fetch(
      "https://www.youtube.com/youtubei/v1/player",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        body: JSON.stringify({
          videoId: videoId,
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

    if (!innertubeResponse.ok) {
      return null;
    }

    const data = await innertubeResponse.json();
    const captionTracks = data?.captions?.playerCaptionsTracklistRenderer?.captionTracks;

    if (!captionTracks || captionTracks.length === 0) {
      return null;
    }

    const englishTrack = captionTracks.find(t => t.languageCode === "en") || captionTracks[0];
    let captionUrl = englishTrack.baseUrl;

    if (!captionUrl.includes("fmt=json3")) {
      captionUrl += "&fmt=json3";
    }

    const captionResponse = await fetch(captionUrl);
    if (!captionResponse.ok) {
      return null;
    }

    const captionData = await captionResponse.json();
    const segments = [];

    if (captionData.events) {
      for (const event of captionData.events) {
        if (event.segs) {
          const text = event.segs.map(s => s.utf8 || "").join("");
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

    if (segments.length === 0) {
      return null;
    }

    return {
      videoId,
      segments,
      fullText: segments.map(s => s.text).join(" "),
      fetchedAt: Date.now(),
    };
  } catch (error) {
    logger.warn(`YouTube fetch failed for ${videoId}:`, error.message);
    return null;
  }
}

/**
 * AI Tutor endpoint - proxies requests to Anthropic Claude API
 * This keeps the API key secure on the server
 */
exports.aiTutor = onRequest(
  {
    cors: true,
    secrets: [anthropicApiKey],
  },
  async (request, response) => {
    // Only allow POST requests
    if (request.method !== "POST") {
      response.status(405).json({ error: "Method not allowed" });
      return;
    }

    try {
      const { messages, system } = request.body;

      if (!messages || !Array.isArray(messages)) {
        response.status(400).json({ error: "Messages array is required" });
        return;
      }

      // Get the API key from secrets
      const apiKey = anthropicApiKey.value();

      if (!apiKey) {
        logger.error("ANTHROPIC_API_KEY secret is not configured");
        response.status(500).json({ error: "AI service not configured" });
        return;
      }

      // Call Anthropic API
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
            max_tokens: 1024,
            system: system || "",
            messages: messages,
          }),
        }
      );

      if (!anthropicResponse.ok) {
        const errorData = await anthropicResponse.json();
        logger.error("Anthropic API error:", errorData);
        response.status(anthropicResponse.status).json({
          error: errorData.error?.message || "Failed to get AI response",
        });
        return;
      }

      const data = await anthropicResponse.json();
      response.json({
        content: data.content[0].text,
      });
    } catch (error) {
      logger.error("AI Tutor error:", error);
      response.status(500).json({ error: "Internal server error" });
    }
  }
);
