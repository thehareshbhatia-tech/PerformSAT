#!/usr/bin/env node
/**
 * Fetch YouTube Transcripts Script
 *
 * Uses yt-dlp to reliably fetch transcripts and uploads them to Firestore.
 *
 * Prerequisites:
 * 1. Download your Firebase service account key from:
 *    Firebase Console -> Project Settings -> Service Accounts -> Generate New Private Key
 * 2. Save it as: scripts/serviceAccountKey.json
 *
 * Usage:
 *   node scripts/fetchTranscripts.js
 */

const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');
const { execSync, exec } = require('child_process');

// All video IDs from the PerformSAT lessons
const VIDEO_IDS = [
  '-JUF3R5ZHmU', '06R53pBYjs0', '0dGx4haTSfk', '0ijCFEhltcg', '1B0scCTKYcc',
  '1pN3OcxOVk4', '1yAG9QEoLDs', '2QLT2GBx4J8', '2if86_b5ljE', '3NGFvYlxWsE',
  '3T7p7HIovK0', '3TF-HvTO3yY', '3cPc_xtceig', '46FIIVQweZA', '4E54Yd1aSPo',
  '4HC-rL8KPAc', '4qZLRcR2nDc', '4u5Z8BzlibM', '50Hjbc3rZ0U', '5McgHKQg0M4',
  '62BK8zl8FjA', '6e9Gx_EC8uw', '75d4HDTqVqg', '7Jvib5zG3DY', '8Pt_Ie0ibQw',
  '8ix6fP1eQlU', '8qCUhJYM3Tg', '9Y71mE9It_4', 'AypfTD5JHuk', 'BCj2GzLu84I',
  'By4TzkHujmc', 'CLPwCiT26Yw', 'CYnV3su1S5A', 'CygUy93GH6o', 'DmKXof2wtJM',
  'F7YlV88yC1M', 'F9GUje7wxVo', 'FogWIBHFRVM', 'FyCLcqWY2H0', 'FykKYINTDbE',
  'G34X0J7M7qM', 'G6dJDa4sFCU', 'Ggb2uBweoDg', 'H_VAwlhG17w', 'HaJettXIUlU',
  'Hf8geKrPg00', 'HjtgJosvHus', 'Hu_1bndFGFY', 'HvJnE1eP6Xs', 'HvmcHvs4aJw',
  'Ilf751ezqtM', 'Ivt8GlJNN54', 'Ja8KCtWP6JY', 'K66XHuhQy-U', 'KSvSDNTvwOQ',
  'K_wAeM8oKSo', 'MsEOg94CW2A', 'MuB5Q2nMEZ4', 'MuVouk8s0R4', 'NVHHjqpKrxA',
  'Nqke1YTLr3k', 'OPDUQ7xR3DY', 'PEW__E6DNOU', 'PaGkN42IbFk', 'Pr0sgY6eHaA',
  'QH6bXCWlYaU', 'Qdjm9OwykZY', 'QgZQtaqOH0Q', 'QpUMRFoMUMo', 'QyDRT97bYg0',
  'R-f4HyaOsZY', 'RV6vzQq3fro', 'SZ49_TM1cRk', 'SdOgadn-vRk', 'SllN4xzTNm0',
  'ToUn8E5a7Ho', 'U-XS0YLJDBU', 'U7bhoyuhCwA', 'V4hSoSCACUA', 'VU1ydOSDfTI',
  'VYNQZLCTnx8', 'VrM1qUVevf8', 'WIKiYCOZnSw', 'WVhrFVpiqik', 'XO4V-6Nv2VA',
  'XQ2Tw8hzjPk', 'XqQj-8GeyEM', 'Xw5bLjiPKOU', 'Xw5tnurT1Ss', 'YK1O3QN_puE',
  'Ymvs5c9ZGoU', 'ZkBP4vwYxQ0', 'Zw2WJEwEowU', '_6bZxuQym8g', '_wCBskbQnxM',
  'a6Wph54Ks6c', 'adDR0DIhsiU', 'ajbuDVZK_w0', 'aySy8jrjpRU', 'bO3UP6O7U4M',
  'bVOOj1uhCLM', 'bY6HSCB0hHE', 'butfjZEcHcg', 'byD4ls13d64', 'cMmuvbxZUco',
  'cQ8KEHofTyA', 'caGJrq00byY', 'dINd03hAQc0', 'dTcLpzbW3Rg', 'dUWjb0racis',
  'e37RY2cRYMI', 'e3E58fCpu4E', 'fCleu3BSqEw', 'fMeL-KVlrgA', 'fV_idRMO6k8',
  'fuxm-h0xAOQ', 'gCuT1uatMx0', 'h2q3pRkWHc4', 'hEcp1GCByyk', 'iD5FSvzmEqY',
  'iKRlQJg463E', 'jAR4wJ_Btuw', 'jit5NLKJdGY', 'k4eFz5IlTOo', 'kInBtmMmsn8',
  'kWAW26BUVak', 'kpc7cVNdPLc', 'l6yMmy60gFA', 'l7O1iak-Zh8', 'lTF4dy953gw',
  'lt3QfNmDDPI', 'm3GVIhKeeZY', 'maCBR4AUK8g', 'nwqjqznGy1w', 'ogabppfe6XQ',
  'olTnIv_PANA', 'ou7EbU-Gj0w', 'p7Z2beYwpaI', 'p9m2tKpTKzM', 'pcdZAZ8lQiI',
  'pj7ULfiKJGw', 'pvOrqZvCn-4', 'q19izkGElyI', 'qC4zH3TPEPs', 'qEtS0mW7dH8',
  'qpYkCKjZzrA', 'rGbR2Sje0yg', 'rJvyuTF9_Uw', 'rmV0RBBmFPk', 'rylb6ba8CXY',
  'rz74TuYvxKs', 's0OT5hRgkv8', 'sUwnF6j8ES4', 'skD4XM2RIgw', 'uGGb383xfu4',
  'vOfds1-LBx4', 'vQ2i2EqGtT4', 'vgp4iFY6vdU', 'wt4jURbliN8', 'wtzpclGJjwA',
  'xKBeYQAxV4g', 'yv6gAJqTezs', 'z8eu9oFwk2I', 'zo3W571N1ag'
];

// Path to yt-dlp binary
const YT_DLP_PATH = '/tmp/yt-dlp';

// Initialize Firebase Admin
const serviceAccountPath = path.join(__dirname, 'serviceAccountKey.json');

if (!fs.existsSync(serviceAccountPath)) {
  console.error('\nError: Service account key not found!');
  console.error('\nPlease download your Firebase service account key:');
  console.error('1. Go to Firebase Console -> Project Settings -> Service Accounts');
  console.error('2. Click "Generate New Private Key"');
  console.error('3. Save the file as: scripts/serviceAccountKey.json');
  console.error('\nMake sure to add serviceAccountKey.json to .gitignore!\n');
  process.exit(1);
}

// Check if yt-dlp exists, download if not
if (!fs.existsSync(YT_DLP_PATH)) {
  console.log('Downloading yt-dlp...');
  try {
    execSync(`curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o ${YT_DLP_PATH} && chmod +x ${YT_DLP_PATH}`, {
      stdio: 'inherit'
    });
    console.log('yt-dlp downloaded successfully.\n');
  } catch (e) {
    console.error('Failed to download yt-dlp:', e.message);
    process.exit(1);
  }
}

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

/**
 * Parse JSON3 subtitle format
 */
function parseJson3(data) {
  const segments = [];

  if (!data.events) return segments;

  for (const event of data.events) {
    if (event.segs) {
      const text = event.segs.map(s => s.utf8 || '').join('').trim();
      if (text && text !== '\n') {
        segments.push({
          start: (event.tStartMs || 0) / 1000,
          duration: (event.dDurationMs || 3000) / 1000,
          text: text.replace(/\n/g, ' ').trim(),
        });
      }
    }
  }

  return segments;
}

/**
 * Fetch transcript using yt-dlp
 */
async function fetchTranscript(videoId) {
  const tempFile = `/tmp/transcript_${videoId}`;

  try {
    // Use yt-dlp to download subtitles
    execSync(
      `${YT_DLP_PATH} --write-auto-sub --skip-download --sub-format json3 --sub-lang en -o "${tempFile}" "https://www.youtube.com/watch?v=${videoId}" 2>/dev/null`,
      { timeout: 30000, encoding: 'utf8' }
    );

    // Check if subtitle file was created
    const subFile = `${tempFile}.en.json3`;
    if (!fs.existsSync(subFile)) {
      return { error: 'No subtitles available' };
    }

    // Read and parse the subtitle file
    const content = fs.readFileSync(subFile, 'utf8');
    const data = JSON.parse(content);
    const segments = parseJson3(data);

    // Clean up temp file
    fs.unlinkSync(subFile);

    if (segments.length === 0) {
      return { error: 'No segments extracted' };
    }

    return {
      videoId,
      segments,
      fullText: segments.map(s => s.text).join(' '),
      language: 'en',
      fetchedAt: Date.now(),
    };
  } catch (error) {
    // Clean up any temp files
    try {
      const files = fs.readdirSync('/tmp').filter(f => f.startsWith(`transcript_${videoId}`));
      files.forEach(f => fs.unlinkSync(`/tmp/${f}`));
    } catch (e) {}

    if (error.message.includes('timeout')) {
      return { error: 'Timeout' };
    }
    return { error: error.message.split('\n')[0] };
  }
}

/**
 * Upload transcript to Firestore
 */
async function uploadTranscript(transcript) {
  try {
    await db.collection('transcripts').doc(transcript.videoId).set(transcript);
    return true;
  } catch (error) {
    console.error(`  Upload failed: ${error.message}`);
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  console.log('\nYouTube Transcript Fetcher for PerformSAT');
  console.log('==========================================\n');
  console.log(`Found ${VIDEO_IDS.length} videos to process\n`);

  const results = {
    success: 0,
    failed: 0,
    skipped: 0,
    errors: [],
  };

  for (let i = 0; i < VIDEO_IDS.length; i++) {
    const videoId = VIDEO_IDS[i];
    const progress = `[${i + 1}/${VIDEO_IDS.length}]`;

    process.stdout.write(`${progress} ${videoId}: `);

    // Check if already in Firestore
    const existingDoc = await db.collection('transcripts').doc(videoId).get();
    if (existingDoc.exists) {
      console.log('Already exists, skipping');
      results.skipped++;
      continue;
    }

    // Fetch transcript
    const transcript = await fetchTranscript(videoId);

    if (transcript.error) {
      console.log(`FAILED: ${transcript.error}`);
      results.failed++;
      results.errors.push({ videoId, error: transcript.error });
      continue;
    }

    // Upload to Firestore
    const uploaded = await uploadTranscript(transcript);
    if (uploaded) {
      console.log(`SUCCESS: ${transcript.segments.length} segments`);
      results.success++;
    } else {
      results.failed++;
    }
  }

  console.log('\n==========================================');
  console.log('Results:');
  console.log(`   Success:  ${results.success}`);
  console.log(`   Skipped:  ${results.skipped}`);
  console.log(`   Failed:   ${results.failed}`);

  if (results.errors.length > 0) {
    console.log('\nErrors:');
    results.errors.slice(0, 10).forEach(e => {
      console.log(`   ${e.videoId}: ${e.error}`);
    });
    if (results.errors.length > 10) {
      console.log(`   ... and ${results.errors.length - 10} more`);
    }
  }

  console.log('\n');
  process.exit(0);
}

main().catch(error => {
  console.error('\nFatal error:', error.message);
  process.exit(1);
});
