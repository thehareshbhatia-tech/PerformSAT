#!/usr/bin/env node
/**
 * Backwards-compat shim — delegates to scripts/calibrateModule.mjs --module=1.
 *
 * The original Module 1-only calibrator was merged into a unified
 * scripts/calibrateModule.mjs that handles both Module 1 and Module 2 (with
 * --track=easy|hard for M2). This shim preserves the legacy invocation:
 *
 *   node scripts/calibrateModule1.mjs --test=1
 *   node scripts/calibrateModule1.mjs --all
 *
 * Any flags passed here are forwarded; --module is forced to 1.
 */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Strip any pre-existing --module flag (we force --module=1) and append it.
const forwarded = process.argv.slice(2).filter(a => !a.startsWith('--module='));
forwarded.push('--module=1');

// Reset argv so the unified calibrator's parser sees our forwarded flags.
process.argv = [process.argv[0], path.join(__dirname, 'calibrateModule.mjs'), ...forwarded];

await import('./calibrateModule.mjs');
