/**
 * parseSSEEvents — pure parser for the aiTutor streaming proxy's minimal
 * Server-Sent-Events protocol (`data: {type:"chunk"|"done"|"error", ...}\n\n`).
 *
 * Lives in its own module (no Firebase/network imports) so chatWithTutor can use
 * it AND it can be unit-tested without booting the rest of aiTutorService.
 *
 * Splits an accumulated buffer into complete events plus any trailing partial
 * event (returned as `rest`) to feed back in on the next stream read.
 *
 * @param {string} buffer - accumulated stream text so far
 * @returns {{events: object[], rest: string}}
 */
export const parseSSEEvents = (buffer) => {
  const events = [];
  let rest = buffer;
  let sep;
  while ((sep = rest.indexOf('\n\n')) !== -1) {
    const rawEvent = rest.slice(0, sep);
    rest = rest.slice(sep + 2);
    const dataLine = rawEvent.split('\n').find((l) => l.startsWith('data:'));
    if (!dataLine) continue;
    const json = dataLine.slice(5).trim();
    if (!json || json === '[DONE]') continue;
    try { events.push(JSON.parse(json)); } catch { /* partial/garbled event — skip */ }
  }
  return { events, rest };
};
