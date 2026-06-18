import React from 'react';
import katex from 'katex';
import normalizeFractions from './normalizeFractions';
import { colors as designColors } from '../design/tokens';

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
const renderMarkdown = (text) => {
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
    // Protect currency: a lone `$` directly before a money amount (digits, with
    // optional thousands commas and cents) that is NOT the start of a math token.
    // So "$10", "$1,200", "$5.50", "$5/hr" keep a literal dollar sign, while a
    // math span like "$2x = 4$" is left intact. Runs AFTER $$/\[ display
    // extraction (so a display delimiter is never mistaken for currency) and
    // BEFORE the inline $...$ pairing — otherwise that pairing swallows the text
    // between a money `$` and a real math `$` and renders it as garbled math.
    // The money amount must be "terminal": not followed by a word char, another
    // `$`, or a math continuation (`\` command, `^`, `_`, `{`). That keeps
    // "$5/hour" / "$10." as currency while "$50\%$", "$30^\circ$", "$2x$" render
    // as math.
    result = result.replace(/\$(?=\d[\d,]*(?:\.\d{1,2})?(?![\w$\\^_{}]))/g, ESC);
    // Inline math: $...$ and \(...\)
    result = result.replace(/\$([^\$]+?)\$/g, (_, latex) => {
      try { return stash(katex.renderToString(latex.trim(), { displayMode: false, throwOnError: false, output: 'htmlAndMathml' })); }
      catch { return _; }
    });
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

export default renderMarkdown;
