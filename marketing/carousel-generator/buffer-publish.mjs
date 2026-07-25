#!/usr/bin/env node
// Publish rendered carousels to Buffer (Instagram) via Buffer's GraphQL API.
//
// One-time setup:
//   1. Buffer account with the Instagram channel connected (publish.buffer.com).
//   2. API key from https://publish.buffer.com/settings/api
//      -> echo 'BUFFER_API_KEY=xxx' > marketing/carousel-generator/.env   (gitignored)
//   3. node buffer-publish.mjs channels        # list channel ids, pick Instagram
//   4. node buffer-publish.mjs use <channelId> # saved to buffer.config.json
//
// Publishing a post (Buffer fetches images by URL, so slides must be pushed first):
//   node buffer-publish.mjs stage aug-sat-quadratic-traps   # copy out/ -> published/ + commit
//   ! git push                                              # make raw URLs live
//   node buffer-publish.mjs post aug-sat-quadratic-traps            # add to queue
//   node buffer-publish.mjs post aug-sat-quadratic-traps --at 2026-07-22T15:00:00Z
import {
  readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, copyFileSync,
} from 'node:fs';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const API = 'https://api.buffer.com';
const CONFIG_PATH = join(HERE, 'buffer.config.json');

// ---- env / config ----
const loadEnv = () => {
  const envPath = join(HERE, '.env');
  if (existsSync(envPath)) {
    for (const line of readFileSync(envPath, 'utf8').split('\n')) {
      const m = line.match(/^([A-Z_]+)=(.*)$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
    }
  }
};
const config = () =>
  existsSync(CONFIG_PATH) ? JSON.parse(readFileSync(CONFIG_PATH, 'utf8')) : {};
const saveConfig = (c) => writeFileSync(CONFIG_PATH, JSON.stringify(c, null, 2) + '\n');

const gql = async (query, variables = {}) => {
  const key = process.env.BUFFER_API_KEY;
  if (!key) {
    console.error('BUFFER_API_KEY not set. Get one at https://publish.buffer.com/settings/api');
    process.exit(1);
  }
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) {
    console.error('GraphQL errors:', JSON.stringify(json.errors, null, 2));
    process.exit(1);
  }
  return json.data;
};

// Raw-GitHub base for the published/ dir, derived from the repo remote.
const rawBase = () => {
  const c = config();
  if (c.rawBase) return c.rawBase;
  const remote = execSync('git remote get-url origin', { cwd: HERE, encoding: 'utf8' }).trim();
  const m = remote.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
  if (!m) {
    console.error(`Cannot derive a raw.githubusercontent.com base from remote "${remote}".`);
    console.error('Set {"rawBase": "https://..."} in buffer.config.json manually.');
    process.exit(1);
  }
  const rel = 'marketing/carousel-generator/published';
  return `https://raw.githubusercontent.com/${m[1]}/${m[2]}/main/${rel}`;
};

const slidesOf = (dir) =>
  readdirSync(dir).filter((f) => f.startsWith('slide-') && f.endsWith('.png')).sort();

// ---- commands ----
const [cmd, ...args] = process.argv.slice(2);
loadEnv();

if (cmd === 'channels') {
  const data = await gql(`query {
    account { organizations { id name channels { id name service } } }
  }`);
  for (const org of data.account.organizations) {
    console.log(`org: ${org.name} (${org.id})`);
    for (const ch of org.channels || []) {
      console.log(`  ${ch.service.padEnd(12)} ${ch.name.padEnd(24)} ${ch.id}`);
    }
  }
  console.log('\nPick the instagram channel id, then: node buffer-publish.mjs use <channelId>');
} else if (cmd === 'use') {
  const c = config();
  c.channelId = args[0];
  saveConfig(c);
  console.log(`Saved channelId ${args[0]} to buffer.config.json`);
} else if (cmd === 'stage') {
  if (!args.length) { console.error('Usage: stage <slug> [<slug>...]'); process.exit(1); }
  for (const slug of args) {
    const src = join(HERE, 'out', slug);
    const dst = join(HERE, 'published', slug);
    if (!existsSync(src)) { console.error(`No such rendered post: out/${slug}`); process.exit(1); }
    mkdirSync(dst, { recursive: true });
    // Speedrun posts stage an mp4 + its cover instead of numbered slides.
    const assets = [...slidesOf(src), 'caption.txt', 'cover.png', `${slug}.mp4`];
    for (const f of assets.filter((f) => existsSync(join(src, f)))) {
      copyFileSync(join(src, f), join(dst, f));
    }
    console.log(`staged published/${slug}`);
  }
  execSync(`git add published && git commit -m "marketing: stage carousel(s) ${args.join(', ')}" -- published`, {
    cwd: HERE, stdio: 'inherit',
  });
  console.log('\nCommitted. Now push (e.g. `! git push`) so the image URLs go live, then run `post`.');
} else if (cmd === 'post') {
  const slug = args[0];
  if (!slug) { console.error('Usage: post <slug> [--at <ISO-utc>]'); process.exit(1); }
  const atIdx = args.indexOf('--at');
  const dueAt = atIdx > -1 ? args[atIdx + 1] : null;
  const { channelId } = config();
  if (!channelId) { console.error('No channelId configured — run `channels` then `use <id>`.'); process.exit(1); }

  const dir = join(HERE, 'published', slug);
  if (!existsSync(dir)) { console.error(`Not staged: run \`stage ${slug}\` first.`); process.exit(1); }
  const slides = slidesOf(dir);
  const caption = existsSync(join(dir, 'caption.txt')) ? readFileSync(join(dir, 'caption.txt'), 'utf8').trim() : '';
  const base = rawBase();
  const urls = slides.map((f) => `${base}/${slug}/${f}`);

  // Buffer fetches by URL — verify each is live (i.e., the commit was pushed).
  for (const url of urls) {
    const res = await fetch(url, { method: 'HEAD' });
    if (!res.ok) {
      console.error(`NOT LIVE (${res.status}): ${url}\nDid you push after staging?`);
      process.exit(1);
    }
  }
  console.log(`${urls.length} slides live; creating Buffer post...`);

  const input = {
    channelId,
    text: caption,
    assets: urls.map((url) => ({ image: { url } })),
    ...(dueAt
      ? { mode: 'customScheduled', dueAt, schedulingType: 'automatic' }
      : { mode: 'addToQueue', schedulingType: 'automatic' }),
  };
  const data = await gql(
    `mutation CreatePost($input: CreatePostInput!) {
      createPost(input: $input) {
        ... on PostActionSuccess { post { id dueAt } }
        ... on MutationError { message }
      }
    }`,
    { input }
  );
  const result = data.createPost;
  if (result.post) {
    console.log(`Buffer post created: id=${result.post.id} dueAt=${result.post.dueAt ?? '(queue)'}`);
  } else {
    console.error(`Buffer rejected the post: ${result.message}`);
    process.exit(1);
  }
} else {
  console.log(`Commands:
  channels                 list Buffer channels (find your Instagram channel id)
  use <channelId>          save the Instagram channel id
  stage <slug> [...]       copy out/<slug> -> published/ and commit (then push)
  post <slug> [--at ISO]   verify URLs live, create the carousel post in Buffer`);
}
