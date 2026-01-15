/**
 * Firebase Cloud Functions for PerformSAT
 * Includes secure AI Tutor endpoint that proxies Anthropic API
 */

import {setGlobalOptions, defineSecret} from "firebase-functions/v2/options";
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Define the Anthropic API key as a secret
const anthropicApiKey = defineSecret("ANTHROPIC_API_KEY");

// Set global options for all functions
setGlobalOptions({maxInstances: 10});

/**
 * AI Tutor endpoint - proxies requests to Anthropic Claude API
 * This keeps the API key secure on the server
 */
export const aiTutor = onRequest(
  {
    cors: true,
    secrets: [anthropicApiKey],
  },
  async (request, response) => {
    // Only allow POST requests
    if (request.method !== "POST") {
      response.status(405).json({error: "Method not allowed"});
      return;
    }

    try {
      const {messages, system} = request.body;

      if (!messages || !Array.isArray(messages)) {
        response.status(400).json({error: "Messages array is required"});
        return;
      }

      // Get the API key from secrets
      const apiKey = anthropicApiKey.value();

      if (!apiKey) {
        logger.error("ANTHROPIC_API_KEY secret is not configured");
        response.status(500).json({error: "AI service not configured"});
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
      response.status(500).json({error: "Internal server error"});
    }
  }
);
