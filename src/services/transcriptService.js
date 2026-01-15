/**
 * YouTube Transcript Service
 * Fetches and caches video transcripts for AI context
 * Uses our Cloud Function to fetch transcripts from YouTube
 */

// Cloud Function URL for transcript fetching
const TRANSCRIPT_URL = 'https://gettranscript-ki77ua6x2a-uc.a.run.app';

// Cache transcripts in memory and localStorage
const transcriptCache = new Map();

/**
 * Fetches transcript for a video using our Cloud Function
 */
export const fetchTranscript = async (videoId) => {
  // Check memory cache first
  if (transcriptCache.has(videoId)) {
    return transcriptCache.get(videoId);
  }

  // Check localStorage cache (with 24 hour expiry)
  const cachedData = localStorage.getItem(`transcript_${videoId}`);
  if (cachedData) {
    try {
      const parsed = JSON.parse(cachedData);
      if (parsed.fetchedAt && Date.now() - parsed.fetchedAt < 24 * 60 * 60 * 1000) {
        transcriptCache.set(videoId, parsed);
        return parsed;
      }
    } catch (e) {
      // Invalid cache, continue to fetch
    }
  }

  try {
    // Use our Cloud Function to fetch the transcript
    const response = await fetch(`${TRANSCRIPT_URL}?videoId=${videoId}`);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.warn(`Transcript not available for ${videoId}:`, error.error || 'Unknown error');
      return null;
    }

    const transcript = await response.json();

    // Cache the transcript
    transcriptCache.set(videoId, transcript);
    try {
      localStorage.setItem(`transcript_${videoId}`, JSON.stringify(transcript));
    } catch (e) {
      // localStorage might be full
    }

    console.log(`Loaded transcript for ${videoId}: ${transcript.segments?.length || 0} segments`);
    return transcript;
  } catch (error) {
    console.warn(`Could not fetch transcript for ${videoId}:`, error.message);
    return null;
  }
};

/**
 * Get transcript text around a specific timestamp
 * @param {Object} transcript - The transcript object
 * @param {number} currentTime - Current video time in seconds
 * @param {number} windowSeconds - Seconds before and after to include (default 45)
 * @returns {Object} - Context with before, current, and after text
 */
export const getTranscriptContext = (transcript, currentTime, windowSeconds = 45) => {
  if (!transcript || !transcript.segments) {
    return null;
  }

  const segments = transcript.segments;
  const startTime = Math.max(0, currentTime - windowSeconds);
  const endTime = currentTime + windowSeconds;

  // Find segments in the time window
  const beforeSegments = [];
  const currentSegments = [];
  const afterSegments = [];

  segments.forEach(segment => {
    const segmentEnd = segment.start + segment.duration;

    if (segmentEnd < currentTime - 5) {
      // Before current time (with 5 second buffer)
      if (segment.start >= startTime) {
        beforeSegments.push(segment);
      }
    } else if (segment.start > currentTime + 5) {
      // After current time
      if (segment.start <= endTime) {
        afterSegments.push(segment);
      }
    } else {
      // Current (within 5 seconds)
      currentSegments.push(segment);
    }
  });

  return {
    timestamp: currentTime,
    formattedTime: formatTime(currentTime),
    before: beforeSegments.map(s => s.text).join(' '),
    current: currentSegments.map(s => s.text).join(' '),
    after: afterSegments.map(s => s.text).join(' '),
    fullContext: [...beforeSegments, ...currentSegments, ...afterSegments]
      .map(s => s.text)
      .join(' ')
  };
};

/**
 * Format seconds to MM:SS
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Search transcript for specific content
 */
export const searchTranscript = (transcript, query) => {
  if (!transcript || !transcript.segments) return [];

  const queryLower = query.toLowerCase();
  const results = [];

  transcript.segments.forEach(segment => {
    if (segment.text.toLowerCase().includes(queryLower)) {
      results.push({
        ...segment,
        formattedTime: formatTime(segment.start)
      });
    }
  });

  return results;
};

/**
 * Preload transcripts for a list of video IDs
 */
export const preloadTranscripts = async (videoIds) => {
  const results = await Promise.allSettled(
    videoIds.map(id => fetchTranscript(id))
  );

  const loaded = results.filter(r => r.status === 'fulfilled' && r.value).length;
  console.log(`Preloaded ${loaded}/${videoIds.length} transcripts`);

  return loaded;
};

/**
 * Clear transcript cache
 */
export const clearTranscriptCache = () => {
  transcriptCache.clear();
  // Clear localStorage entries
  Object.keys(localStorage)
    .filter(key => key.startsWith('transcript_'))
    .forEach(key => localStorage.removeItem(key));
};
