import React from 'react';
import katex from 'katex';
import normalizeFractions from './normalizeFractions';
import { colors as designColors } from '../design/tokens';
import { extractGraphSpec } from './graphSpec';
import TutorGraph from '../components/TutorGraph';

/**
 * Escapes the HTML-significant characters (& < >) so raw model output can
 * never inject markup into the dangerouslySetInnerHTML sinks below.
 * Ampersand must be replaced first so existing entities are not double-broken.
 */
const escapeHtml = (s) => s
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

// Private-use-area codepoints bracket stashed KaTeX HTML. The model cannot
// emit these characters, so a token (\uE000 + index + \uE001) can never be forged
// from chat text (same idea as the U+FFFD escaped-dollar trick below).
const KATEX_TOKEN_OPEN = '\uE000';
const KATEX_TOKEN_CLOSE = '\uE001';
const KATEX_TOKEN_RE = /\uE000(\d+)\uE001/g;

// Comprehensive markdown renderer for chat messages with full math/LaTeX support.
// Security model (escape-first + placeholder stash):
//   1. KaTeX delimiters are extracted FIRST; the trusted KaTeX HTML is stashed
//      in katexChunks and replaced by inert private-use-codepoint tokens.
//   2. The whole remaining string is HTML-escaped (so `$x < 5$` math survives
//      while a raw `<img onerror=...>` from the model becomes text).
//   3. Markdown regexes run on the escaped text.
//   4. Tokens are restored at the END of processInlineMarkdown, after the
//      markdown regexes, so they can never chew on KaTeX's own HTML.
const renderProse = (text) => {
  if (!text) return null;

  const katexChunks = [];
  const stash = (html) => {
    katexChunks.push(html);
    return `${KATEX_TOKEN_OPEN}${katexChunks.length - 1}${KATEX_TOKEN_CLOSE}`;
  };

  // Render math via KaTeX before markdown processing; output is stashed as
  // tokens so the escape pass below leaves it untouched.
  const renderKatexInline = (str) => {
    let result = str;
    // Protect escaped dollars
    const ESC = '\uFFFD';
    result = result.replace(/\\\$/g, ESC);
    // Display math: $$...$$ and \[...\]
    result = result.replace(/\$\$([\s\S]*?)\$\$/g, (_, latex) => {
      try { return stash(katex.renderToString(latex.trim(), { displayMode: true, throwOnError: false, output: 'htmlAndMathml' })); }
      catch { return _; }
    });
    result = result.replace(/\\\[([\s\S]*?)\\\]/g, (_, latex) => {
      try { return stash(katex.renderToString(latex.trim(), { displayMode: true, throwOnError: false, output: 'htmlAndMathml' })); }
      catch { return _; }
    });
    // Inline math: $...$ via a strict left-to-right scanner (replaced the old
    // currency-lookahead + naive non-greedy regex on 2026-07-15). The old pair
    // had two failure modes that could garble a whole tutor reply:
    //   1. The currency guard escaped the OPENING $ of math that starts with a
    //      bare number ("$3 + 4 = 7$" — digit then space read as "money"),
    //      orphaning its closer; every later span then paired off-by-one and
    //      whole sentences of prose rendered as spaced-out math symbols.
    //   2. Any unbalanced $ let the pairing swallow prose across sentences
    //      (and lines) into math mode.
    // Pairing rules (KaTeX auto-render / pandoc conventions): the opener must
    // be followed by a non-space; the closer is the FIRST later $ on the same
    // line, must be preceded by a non-space, and must NOT be followed by a
    // digit (protects "$5-$10" money ranges); spans are capped at 200 chars.
    // Anything that fails every rule stays a literal dollar sign — so money
    // ("$10 and $1,200") needs no special-casing, and one model typo can no
    // longer cascade past its own line.
    {
      let out = '';
      let i = 0;
      while (i < result.length) {
        const ch = result[i];
        if (ch !== '$') { out += ch; i += 1; continue; }
        const next = result[i + 1];
        if (next === undefined || next === '$' || /\s/.test(next)) { out += ch; i += 1; continue; }
        const close = result.indexOf('$', i + 1);
        const span = close === -1 ? null : result.slice(i + 1, close);
        const afterClose = close === -1 ? undefined : result[close + 1];
        const valid = span !== null
          && span.length <= 200
          && !span.includes('\n')
          && !/\s/.test(result[close - 1])
          && !(afterClose !== undefined && /\d/.test(afterClose));
        if (valid) {
          try {
            out += stash(katex.renderToString(span.trim(), { displayMode: false, throwOnError: false, output: 'htmlAndMathml' }));
          } catch {
            out += result.slice(i, close + 1);
          }
          i = close + 1;
        } else {
          out += ch;
          i += 1;
        }
      }
      result = out;
    }
    // Inline math: \(...\)
    result = result.replace(/\\\(([^)]+)\\\)/g, (_, latex) => {
      try { return stash(katex.renderToString(latex.trim(), { displayMode: false, throwOnError: false, output: 'htmlAndMathml' })); }
      catch { return _; }
    });
    // Restore escaped dollars
    result = result.replace(new RegExp(ESC, 'g'), '$');
    return result;
  };

  // Escape AFTER math extraction (math with < > & already lives in the stash)
  // but BEFORE block parsing, so every dangerouslySetInnerHTML payload is built
  // from escaped text plus trusted KaTeX chunks only.
  let cleanedText = escapeHtml(renderKatexInline(normalizeFractions(text)));

  const lines = cleanedText.split('\n');
  const elements = [];
  let currentList = [];
  let listType = null;

  const processInlineMarkdown = (line) => {
    let processed = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/__(.+?)__/g, '<strong>$1</strong>');
    // Italic: require the emphasized text to start AND end with a non-space, per
    // standard markdown. This stops a stray "2 * 3" (multiplication with spaces
    // around the asterisks) from being read as italic "* 3 ... *".
    processed = processed.replace(/(?<!\*)\*(\S(?:[^*\n]*?\S)?)\*(?!\*)/g, '<em>$1</em>');
    processed = processed.replace(/`([^`]+?)`/g, '<code style="background:rgba(0,0,0,0.04);padding:2px 6px;border-radius:4px;font-size:0.9em;font-family:\'SF Mono\',Menlo,monospace;">$1</code>');
    // Restore stashed KaTeX HTML last so the markdown regexes above never
    // operate on it. All three dangerouslySetInnerHTML sites funnel through
    // here, so the restore covers paragraphs, headers, and list items.
    processed = processed.replace(KATEX_TOKEN_RE, (_, i) => katexChunks[Number(i)] || '');
    return processed;
  };

  const flushList = () => {
    if (currentList.length > 0) {
      const Tag = listType === 'ol' ? 'ol' : 'ul';
      elements.push(
        <Tag key={`list-${elements.length}`} style={{ margin: '12px 0 16px 0', paddingLeft: '24px', lineHeight: '1.55' }}>
          {currentList.map((item, i) => (
            <li key={i} style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(item) }} />
          ))}
        </Tag>
      );
      currentList = [];
      listType = null;
    }
  };

  const splitTableRow = (r) => r.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());

  // Indexed loop (not forEach) so multi-line constructs — fenced code blocks and
  // tables — can consume several lines at once.
  let idx = 0;
  while (idx < lines.length) {
    const line = lines[idx];

    // Fenced code block: ```...``` — render verbatim (already HTML-escaped).
    if (/^```/.test(line)) {
      flushList();
      const codeLines = [];
      idx++;
      while (idx < lines.length && !/^```/.test(lines[idx])) { codeLines.push(lines[idx]); idx++; }
      idx++; // skip the closing fence
      elements.push(
        <pre key={`code-${idx}`} style={{ background: 'rgba(0,0,0,0.04)', borderRadius: '8px', padding: '12px 14px', overflowX: 'auto', margin: '12px 0', fontSize: '0.85em', lineHeight: '1.5', fontFamily: "'SF Mono',Menlo,monospace" }}>
          <code dangerouslySetInnerHTML={{ __html: codeLines.join('\n') }} />
        </pre>
      );
      continue;
    }

    // Pipe table: a `| ... |` header row followed by a `|---|---|` separator.
    if (/^\|.*\|$/.test(line.trim()) && idx + 1 < lines.length
        && /^\|?[\s:|-]+\|?$/.test(lines[idx + 1].trim()) && lines[idx + 1].includes('-')) {
      flushList();
      const headers = splitTableRow(line);
      idx += 2; // skip header + separator
      const rows = [];
      while (idx < lines.length && /^\|.*\|$/.test(lines[idx].trim())) { rows.push(splitTableRow(lines[idx])); idx++; }
      elements.push(
        <div key={`tbl-${idx}`} style={{ overflowX: 'auto', margin: '12px 0' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.9em' }}>
            <thead><tr>{headers.map((h, hi) => (
              <th key={hi} style={{ border: '1px solid rgba(0,0,0,0.12)', padding: '6px 10px', textAlign: 'left', background: 'rgba(0,0,0,0.03)', fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(h) }} />
            ))}</tr></thead>
            <tbody>{rows.map((r, ri) => (
              <tr key={ri}>{r.map((c, ci) => (
                <td key={ci} style={{ border: '1px solid rgba(0,0,0,0.12)', padding: '6px 10px' }} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(c) }} />
              ))}</tr>
            ))}</tbody>
          </table>
        </div>
      );
      continue;
    }

    const numberedMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (numberedMatch) {
      if (listType !== 'ol') flushList();
      listType = 'ol';
      currentList.push(numberedMatch[2]);
      idx++;
      continue;
    }

    const bulletMatch = line.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      if (listType !== 'ul') flushList();
      listType = 'ul';
      currentList.push(bulletMatch[1]);
      idx++;
      continue;
    }

    flushList();

    if (line.trim() === '') {
      elements.push(<div key={`br-${idx}`} style={{ height: '12px' }} />);
      idx++;
      continue;
    }

    const headerMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const headerText = headerMatch[2];
      const sizes = { 1: '1.25em', 2: '1.15em', 3: '1.05em', 4: '1em' };
      const weights = { 1: '600', 2: '600', 3: '600', 4: '600' };
      elements.push(
        <div
          key={idx}
          style={{
            fontSize: sizes[level],
            fontWeight: weights[level],
            margin: '24px 0 12px 0',
            color: designColors.text.primary,
            letterSpacing: '-0.02em'
          }}
          dangerouslySetInnerHTML={{ __html: processInlineMarkdown(headerText) }}
        />
      );
      idx++;
      continue;
    }

    if (line.match(/^-{3,}$/)) {
      elements.push(
        <hr key={idx} style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', margin: '16px 0' }} />
      );
      idx++;
      continue;
    }

    elements.push(
      <p key={idx} style={{ margin: '0 0 12px 0', lineHeight: '1.55' }} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(line) }} />
    );
    idx++;
  }

  flushList();

  return <>{elements}</>;
};

/**
 * Chat message renderer. Wraps the prose renderer with inline-graph support: if the
 * message contains a ```seva-graph``` block, the (first, valid) graph is mounted in
 * place via <TutorGraph>, with the surrounding prose rendered normally before and
 * after it. Everything degrades gracefully (see extractGraphSpec): a still-streaming
 * unclosed block, malformed JSON, or an unsupported type all fall back to prose and
 * never dump raw JSON.
 *
 * The before/after prose are each rendered through the original renderProse pipeline
 * and wrapped in their own keyed fragments, so their internal element keys live in
 * separate parents and cannot collide. When there is no graph (the common case),
 * this is byte-identical to the old single-pass behavior.
 */
const computeMarkdown = (text) => {
  const { spec, before, after } = extractGraphSpec(text);

  // Fast path: no graph and nothing was stripped → original single-pass output.
  if (!spec && !after) return renderProse(before);

  return (
    <>
      {before ? <React.Fragment key="seva-pre">{renderProse(before)}</React.Fragment> : null}
      {spec ? <TutorGraph key="seva-graph" spec={spec} /> : null}
      {after ? <React.Fragment key="seva-post">{renderProse(after)}</React.Fragment> : null}
    </>
  );
};

// Module-level LRU cache. AiTutorChat re-runs renderMarkdown over the WHOLE
// transcript on every keystroke and every streamed chunk; each katex.renderToString
// runs twice (output:'htmlAndMathml' — kept deliberately: the visually-hidden
// MathML annotation is what screen readers announce, so dropping it to 'html'
// would silently break math accessibility). Caching the produced element tree
// by source string means only genuinely-new text (the growing streaming message)
// pays the render cost; every stable earlier message is a Map hit. Element trees
// are immutable descriptors, so returning the same one is safe.
const markdownCache = new Map();
const MARKDOWN_CACHE_CAP = 200;

const renderMarkdown = (text) => {
  if (!text) return null;

  const cached = markdownCache.get(text);
  if (cached !== undefined) {
    // Refresh recency: re-insert so this key is now the newest.
    markdownCache.delete(text);
    markdownCache.set(text, cached);
    return cached;
  }

  const result = computeMarkdown(text);
  markdownCache.set(text, result);
  if (markdownCache.size > MARKDOWN_CACHE_CAP) {
    // Evict the oldest (first-inserted) entry.
    markdownCache.delete(markdownCache.keys().next().value);
  }
  return result;
};

export default renderMarkdown;
