#!/usr/bin/env node
// Turns a rendered carousel (out/<slug>/slide-*.png) into a TikTok/Reels-ready
// vertical video: 1080x1920, slides centered on brand navy, 30fps H.264, silent
// (the trending sound gets added in the TikTok app at post time, same as photo mode).
//
//   node make-video.mjs <slug> [coverSec] [slideSec] [lastSec]
//
// Output: out/<slug>/<slug>.mp4
import { readdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const HERE = dirname(fileURLToPath(import.meta.url));

let FFMPEG;
try {
  FFMPEG = require('ffmpeg-static');
} catch {
  FFMPEG = 'ffmpeg'; // fall back to system ffmpeg
}

const [slug, coverSec = '2.0', slideSec = '2.8', lastSec = '2.4'] = process.argv.slice(2);
if (!slug) {
  console.error('usage: node make-video.mjs <slug> [coverSec] [slideSec] [lastSec]');
  process.exit(1);
}
const dir = join(HERE, 'out', slug);
if (!existsSync(dir)) {
  console.error(`no rendered slides at out/${slug} — run generate.mjs first.`);
  process.exit(1);
}
const slides = readdirSync(dir).filter((f) => /^slide-\d+\.png$/.test(f)).sort();
if (!slides.length) {
  console.error(`no slide PNGs in out/${slug}.`);
  process.exit(1);
}

const NAVY = '0x1E2A3A';
const durFor = (i) => (i === 0 ? coverSec : i === slides.length - 1 ? lastSec : slideSec);

const args = [];
slides.forEach((f, i) => args.push('-loop', '1', '-t', String(durFor(i)), '-i', join(dir, f)));
const chains = slides
  .map((_, i) => `[${i}:v]scale=1080:1350,pad=1080:1920:0:285:color=${NAVY},setsar=1,fps=30[v${i}]`)
  .join(';');
const concatIn = slides.map((_, i) => `[v${i}]`).join('');
const out = join(dir, `${slug}.mp4`);
args.push(
  '-filter_complex', `${chains};${concatIn}concat=n=${slides.length}:v=1:a=0[v]`,
  '-map', '[v]',
  '-c:v', 'libx264', '-crf', '18', '-preset', 'medium', '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart', '-y', out
);
execFileSync(FFMPEG, args, { stdio: 'inherit' });
console.log(`video -> ${out}`);
