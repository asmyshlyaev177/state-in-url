#!/usr/bin/env node
// The third surface: TypeScript copy modules.
//
// READMEs put the locale in a filename, and the demo site has neither a
// filename nor a directory to hang a locale on, because its text is not a
// document. Its words live in one typed object, and each language is that same
// object with translated values.
//
// Keeping it typed is the point. A translator working in Markdown can drop a
// section and only a reader notices; here a dropped key fails `tsc`, and the
// site does not build. That is a much shorter feedback loop than a bug report
// in a language you cannot read.
//
//   node scripts/i18n/copy.mjs init     create missing locale modules
//   node scripts/i18n/copy.mjs status   what is translated, what drifted
//   node scripts/i18n/copy.mjs check    validate; non-zero exit on problems
//   node scripts/i18n/copy.mjs diff <locale>
//   node scripts/i18n/copy.mjs stamp <locale>

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { blobHash } from './documents.mjs';
import { findLocale, LOCALES } from './locales.mjs';

const repoRoot = path.resolve(new URL('../..', import.meta.url).pathname);

/** Each entry: an English module and the directory its translations sit in. */
const MODULES = [
  { source: 'packages/example-nextjs16/src/app/i18n/copy/en.ts', name: 'demo site copy' },
];

const args = process.argv.slice(2);
const command = args[0] ?? 'status';
const positional = args.slice(1).filter((a) => !a.startsWith('--'));
const flags = new Set(args.filter((a) => a.startsWith('--')));

const c = process.stdout.isTTY
  ? { dim: '\x1b[2m', red: '\x1b[31m', green: '\x1b[32m', yellow: '\x1b[33m', bold: '\x1b[1m', off: '\x1b[0m' }
  : { dim: '', red: '', green: '', yellow: '', bold: '', off: '' };

const targetOf = (source, locale) =>
  path.join(path.dirname(source), `${locale.dir}.ts`);

const STAMP = /^\/\/ i18n:meta (.*)$/m;

function parseStamp(text) {
  const m = text.match(STAMP);
  if (!m) return null;
  const out = {};
  for (const pair of m[1].matchAll(/([\w-]+)=(\S+)/g)) out[pair[1]] = pair[2];
  return out;
}

function header(locale, blob, status) {
  return [
    `// ${locale.english} (${locale.code}) copy for the demo site.`,
    '//',
    '// Values only: every key, its order and its type come from en.ts, and a',
    '// missing or renamed one is a type error rather than a silently English',
    '// page. Do not add keys here that en.ts does not have.',
    `// i18n:meta locale=${locale.code} source=en.ts source-blob=${blob} status=${status}`,
    '',
  ].join('\n');
}

/** The English module minus its own leading comment block. */
function bodyOf(text) {
  const lines = text.split('\n');
  let i = 0;
  while (i < lines.length && (lines[i].startsWith('//') || lines[i].trim() === '')) i += 1;
  return lines.slice(i).join('\n');
}

function init() {
  let created = 0;
  for (const mod of MODULES) {
    const sourceAbs = path.join(repoRoot, mod.source);
    if (!existsSync(sourceAbs)) {
      console.error(`${c.red}missing ${mod.source}${c.off}`);
      process.exitCode = 1;
      continue;
    }
    const blob = blobHash(repoRoot, mod.source);
    const body = bodyOf(readFileSync(sourceAbs, 'utf8'));

    for (const locale of LOCALES) {
      const rel = targetOf(mod.source, locale);
      const abs = path.join(repoRoot, rel);
      if (existsSync(abs)) {
        // Refresh only the header, never the values.
        const text = readFileSync(abs, 'utf8');
        const stamp = parseStamp(text);
        const kept = header(locale, stamp?.['source-blob'] ?? blob, stamp?.status ?? 'pending');
        writeFileSync(abs, kept + bodyOf(text), 'utf8');
        continue;
      }
      writeFileSync(abs, header(locale, blob, 'pending') + body, 'utf8');
      created += 1;
      console.log(`${c.green}+${c.off} ${rel}`);
    }
  }
  console.log(created ? `\n${created} module(s) created.` : '\nNothing to create.');
}

function report({ failOnPending }) {
  let problems = 0;
  let pending = 0;
  for (const mod of MODULES) {
    const sourceAbs = path.join(repoRoot, mod.source);
    const blob = blobHash(repoRoot, mod.source);
    const englishBody = bodyOf(readFileSync(sourceAbs, 'utf8'));
    console.log(`\n${c.bold}${mod.source}${c.off} ${c.dim}@${blob.slice(0, 8)}${c.off}`);

    for (const locale of LOCALES) {
      const rel = targetOf(mod.source, locale);
      const abs = path.join(repoRoot, rel);
      const label = `  ${locale.code.padEnd(6)} ${locale.english.padEnd(22)}`;
      if (!existsSync(abs)) {
        console.log(`${label} ${c.red}missing${c.off}`);
        problems += 1;
        continue;
      }
      const text = readFileSync(abs, 'utf8');
      const stamp = parseStamp(text);
      const issues = [];
      if (!stamp) issues.push('no i18n:meta stamp');
      else if (stamp['source-blob'] !== blob) {
        issues.push(`stale: from ${stamp['source-blob'].slice(0, 8)}, now ${blob.slice(0, 8)}`);
      }
      // Still byte-identical to English below the header = untranslated.
      const untranslated = bodyOf(text) === englishBody;

      if (issues.length) {
        problems += issues.length;
        console.log(`${label} ${c.red}${issues.length} problem(s)${c.off}${untranslated ? ` ${c.yellow}(untranslated)${c.off}` : ''}`);
        for (const i of issues) console.log(`         ${c.red}·${c.off} ${i}`);
      } else if (untranslated) {
        pending += 1;
        console.log(`${label} ${c.yellow}not translated yet${c.off}`);
      } else {
        console.log(`${label} ${c.green}ok${c.off}`);
      }
    }
  }
  console.log(
    `\n${problems ? c.red : c.green}${problems} problem(s)${c.off}, ${c.yellow}${pending} awaiting translation${c.off}.`,
  );
  console.log(
    `${c.dim}Key coverage is not checked here — \`tsc\` does it, and the build fails on a missing key.${c.off}`,
  );
  return problems + (failOnPending ? pending : 0);
}

function resolveLocale(input) {
  const locale = findLocale(input);
  if (!locale || locale.code === 'en') {
    console.error(`${c.red}Unknown locale "${input}". One of: ${LOCALES.map((l) => l.code).join(', ')}${c.off}`);
    process.exit(2);
  }
  return locale;
}

function diff() {
  const locale = resolveLocale(positional[0]);
  for (const mod of MODULES) {
    const abs = path.join(repoRoot, targetOf(mod.source, locale));
    if (!existsSync(abs)) continue;
    const stamp = parseStamp(readFileSync(abs, 'utf8'));
    const current = blobHash(repoRoot, mod.source);
    if (!stamp || stamp['source-blob'] === current) {
      console.log(`${c.green}${mod.source} is up to date for ${locale.code}.${c.off}`);
      continue;
    }
    console.log(`${c.bold}${mod.source}: ${stamp['source-blob'].slice(0, 8)} → ${current.slice(0, 8)}${c.off}\n`);
    let previous;
    try {
      previous = execFileSync('git', ['cat-file', 'blob', stamp['source-blob']], {
        cwd: repoRoot,
        encoding: 'utf8',
      });
    } catch {
      console.log(`${c.yellow}blob not in this repo${c.off}`);
      continue;
    }
    const scratch = path.join(repoRoot, `.i18n-copy-diff.tmp`);
    writeFileSync(scratch, previous, 'utf8');
    try {
      execFileSync('git', ['diff', '--no-color', '--no-index', scratch, path.join(repoRoot, mod.source)], {
        cwd: repoRoot,
        stdio: ['ignore', 'inherit', 'inherit'],
      });
    } catch (err) {
      if (err.status !== 1) throw err;
    } finally {
      rmSync(scratch, { force: true });
    }
  }
}

function stamp() {
  const locale = resolveLocale(positional[0]);
  for (const mod of MODULES) {
    const abs = path.join(repoRoot, targetOf(mod.source, locale));
    if (!existsSync(abs)) continue;
    const text = readFileSync(abs, 'utf8');
    writeFileSync(
      abs,
      header(locale, blobHash(repoRoot, mod.source), 'translated') + bodyOf(text),
      'utf8',
    );
    console.log(`${c.green}✓${c.off} ${targetOf(mod.source, locale)} marked translated`);
  }
}

switch (command) {
  case 'init':
    init();
    break;
  case 'status':
    report({ failOnPending: false });
    break;
  case 'check':
    process.exitCode = report({ failOnPending: flags.has('--strict') }) > 0 ? 1 : 0;
    break;
  case 'diff':
    diff();
    break;
  case 'stamp':
    stamp();
    break;
  default:
    console.error(`Unknown command "${command}".`);
    process.exit(2);
}
