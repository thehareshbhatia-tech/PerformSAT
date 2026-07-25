#!/usr/bin/env node
// Renders Instagram/TikTok carousel PNGs from post JSON files via the gstack browse daemon.
//
//   node generate.mjs                      # render every post in posts/
//   node generate.mjs posts/my-post.json   # render specific post(s)
//
// Output: out/<slug>/slide-01.png ... + caption.txt if the post has a caption.
import {
  readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync,
  copyFileSync, mkdtempSync,
} from 'node:fs';
import { execFileSync } from 'node:child_process';
import { homedir } from 'node:os';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildHtml } from './template.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const BROWSE = join(homedir(), '.claude/skills/gstack/browse/dist/browse');
if (!existsSync(BROWSE)) {
  console.error(`browse binary not found at ${BROWSE} — run the gstack browse setup first.`);
  process.exit(1);
}

const argPaths = process.argv.slice(2);
const postFiles = argPaths.length
  ? argPaths
  : readdirSync(join(HERE, 'posts'))
      .filter((f) => f.endsWith('.json'))
      .sort()
      .map((f) => join(HERE, 'posts', f));

if (!postFiles.length) {
  console.error('No post JSON files found in posts/.');
  process.exit(1);
}

const browse = (...args) => execFileSync(BROWSE, args, { encoding: 'utf8' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const file of postFiles) {
  const post = JSON.parse(readFileSync(file, 'utf8'));
  const slug = post.slug || basename(file, '.json');
  // Inline Desmos screenshots (shots/<name>.png) as data URIs for 'shot' slides.
  for (const s of post.slides) {
    if (s.type === 'shot') {
      const shotPath = join(HERE, 'shots', s.shot);
      if (!existsSync(shotPath)) {
        console.error(`${slug}: missing shot ${s.shot} — run desmos-shot.mjs first.`);
        process.exit(1);
      }
      s._shotData = `data:image/png;base64,${readFileSync(shotPath).toString('base64')}`;
      // Boxed coordinate readouts drawn over the shot (see desmos-shot.mjs).
      const readoutPath = shotPath.replace(/\.png$/, '.readouts.json');
      if (existsSync(readoutPath)) s._readouts = JSON.parse(readFileSync(readoutPath, 'utf8'));
    }
  }
  const outDir = join(HERE, 'out', slug);
  mkdirSync(outDir, { recursive: true });

  // Render from /private/tmp — inside the browse daemon's safe-dir allowlist
  // (macOS os.tmpdir() resolves to /var/folders/..., which the daemon rejects).
  const work = mkdtempSync('/private/tmp/seva-carousel-');
  const htmlPath = join(work, 'render.html');
  writeFileSync(htmlPath, buildHtml(post));

  browse('goto', `file://${htmlPath}`);
  try {
    browse('wait', '--networkidle');
  } catch {
    // Fonts CDN slow to settle — the extra delay below covers it.
  }
  await sleep(600); // let webfonts finish painting

  for (let i = 1; i <= post.slides.length; i++) {
    const name = `slide-${String(i).padStart(2, '0')}.png`;
    const tmpPng = join(work, name);
    browse('screenshot', '--selector', `#s${i}`, tmpPng);
    copyFileSync(tmpPng, join(outDir, name));
  }
  if (post.caption) writeFileSync(join(outDir, 'caption.txt'), post.caption + '\n');

  console.log(`${slug}: ${post.slides.length} slides -> ${outDir}`);
}

// Rebuild the review contact sheet: every post, every slide, plus captions.
// Open out/review.html in a browser for the approval pass.
const outRoot = join(HERE, 'out');
const postDirs = readdirSync(outRoot, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();
const sections = postDirs
  .map((dir) => {
    const slides = readdirSync(join(outRoot, dir))
      .filter((f) => f.startsWith('slide-') && f.endsWith('.png'))
      .sort();
    const capPath = join(outRoot, dir, 'caption.txt');
    const caption = existsSync(capPath) ? readFileSync(capPath, 'utf8') : '';
    return `<section>
      <h2>${dir} <span class="count">${slides.length} slides</span></h2>
      <div class="row">${slides
        .map((f) => `<a href="${dir}/${f}" target="_blank"><img loading="lazy" src="${dir}/${f}"></a>`)
        .join('')}</div>
      ${caption ? `<details><summary>caption</summary><pre>${caption
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')}</pre></details>` : ''}
    </section>`;
  })
  .join('\n');
writeFileSync(
  join(outRoot, 'review.html'),
  `<!doctype html><meta charset="utf-8"><title>Seva carousel review</title>
<style>
  body { font-family: -apple-system, sans-serif; background:#f4f1ec; margin:0; padding:32px; }
  h1 { margin:0 0 8px; } .hint { color:#777; margin-bottom:28px; }
  section { margin-bottom:40px; }
  h2 { font-size:18px; margin:0 0 10px; } .count { color:#999; font-weight:400; font-size:14px; }
  .row { display:flex; gap:10px; overflow-x:auto; padding-bottom:6px; }
  .row img { height:340px; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,.15); }
  details { margin-top:8px; } summary { cursor:pointer; color:#555; font-size:14px; }
  pre { white-space:pre-wrap; background:#fff; padding:14px; border-radius:8px; font-size:13px; }
</style>
<h1>Seva carousel review</h1>
<p class="hint">${postDirs.length} posts. Scroll each row like the real carousel; click a slide for full size; expand captions below each post.</p>
${sections}`
);
console.log(`review page -> ${join(outRoot, 'review.html')}`);
