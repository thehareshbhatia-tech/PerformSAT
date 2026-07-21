# Seva carousel generator

Turns post JSON files into post-ready Instagram/TikTok carousel PNGs (1080×1350) in Seva branding. Renders through the gstack browse daemon (headless Chromium) — no design tools, no dependencies beyond Node.

## Usage

```bash
cd marketing/carousel-generator
node generate.mjs                          # render every post in posts/
node generate.mjs posts/my-post.json       # render one post
```

Output lands in `out/<slug>/slide-01.png …` plus `caption.txt` if the post has a caption. Upload the folder to Buffer/Later/Postiz and schedule.

## Writing a post

One JSON file per post in `posts/`. Fields support `*italic*` / `**bold**`; unicode math (`² − ÷ ·`, `&nbsp;`) passes through.

Slide types:

| type | fields | use for |
|---|---|---|
| `cover` | eyebrow, title, badge? | searchable hook + save-bait |
| `formula` | eyebrow, title, formula, cases? `[["D > 0","two real solutions"]]`, tip? | formula slides (saves) |
| `rule` | eyebrow, title, words?, body, tip? | R&W rules / word lists |
| `trap` | eyebrow, title, formula?, body, tip? | the Seva angle — why students miss it |
| `question` | eyebrow, stem, choices `["a","b","c","d"]`, prompt? | engagement bait (comments) |
| `reveal` | eyebrow, title, body, tip? | answer slide after a question |
| `cta` | eyebrow, title, keyword?, sub? | closer; keyword renders the comment-gate line, omit for link-in-bio |

Covers/CTAs render on cream, teaching slides on navy; override with `"theme": "cream"` or `"navy"` per slide.

Brand tokens (colors, fonts, wordmark, canvas size) live in `brand.mjs`.

## Editorial rules

- Every post: cover → 2–4 teaching slides → CTA. Lead every topic toward the *trap* — that's Seva's differentiator vs. generic formula dumps.
- No emojis (brand rule). No manual heading numbers.
- Date-key covers to the next test ("August SAT") — makes posts searchable and save-worthy.
- Only use the `keyword` comment-gate once ManyChat (or manual DM replies) is set up; until then omit it so the CTA falls back to link-in-bio.

## Publishing

Both channels are connected in Buffer (org "My Organization", haresh@sevaprep.com):
Instagram business **seva.prep** + TikTok **seva.prep**. Channel ids live in
`buffer.config.json` (`channelId` = IG, `tiktokChannelId` = TikTok).

Buffer fetches images by URL, so slides must be world-readable before posting:
`node buffer-publish.mjs stage <slug>` (copies `out/<slug>` → `published/` + commits)
→ push → then create the post. Two ways to create it:

- **Claude Buffer MCP (no API key needed):** ask Claude Code to queue/draft the post —
  it can `create_post` with the raw.githubusercontent.com slide URLs against either
  channel, and `saveToDraft: true` keeps the human-approval gate (approve in Buffer).
- **Script (headless, needs API key):** get a key at publish.buffer.com/settings/api,
  put it in `.env` here (`BUFFER_API_KEY=...`, gitignored), then
  `node buffer-publish.mjs post <slug> [--at ISO]` (verifies each URL is live first).

TikTok photo carousels accept PNG ≤20MB at ≤1080×1920; add a trending sound when TikTok
publishes it. If API carousels ever fail on TikTok, fall back to Buffer web: drag PNGs
from `out/<slug>/` in order + paste `caption.txt`.

## v2 ideas

- Pull trap content straight from the question bank shards (explanations already tag the trap answer) so post JSONs are generated, not hand-written.
- Caption/hashtag variants per platform.
- Video export: slide PNGs → ffmpeg slideshow with audio bed for TikTok photo-mode alternative.
