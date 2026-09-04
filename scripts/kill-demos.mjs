#!/usr/bin/env node

/**
 * Stop the demo servers this repo starts, and nothing else.
 *
 * These used to be `ps aux | grep -E '<pattern>' | xargs kill -9`, which is
 * unsound in two ways that both fired here:
 *
 * - The command line of whatever *invokes* the script contains the pattern
 *   verbatim, so the caller matches itself. `grep -v grep` does not help — the
 *   caller is a shell, not a grep.
 * - A bare substring matches any process that merely mentions it. `grep
 *   '[w]ireit'` selected the editor's TypeScript servers and the Claude Code
 *   binary, because an unrelated checkout at ~/Desktop/projects/wireit was
 *   open and its path appears in their arguments. `kill -9` on the parent of
 *   the shell you are typing in is not recoverable.
 *
 * Two rules replace the guesswork, and the first is the load-bearing one:
 *
 * 1. **Never signal an ancestor.** The PID chain from here to init is computed
 *    first and excluded, so the process tree that launched this script cannot
 *    be killed by it whatever else matches.
 * 2. Match a process only when its cwd is inside this repo *and* its command
 *    line looks like one of the servers. Both, because the Playwright run and
 *    its browsers also live in this repo.
 */

import { readFileSync, readlinkSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** How each server actually appears in its own argv, not a loose `next`. */
const SERVERS = {
  next: /next-server|next[/\\]dist[/\\]bin[/\\]next/,
  vite: /vite[/\\]bin[/\\]vite/,
  remix: /remix-serve|remix-run[/\\]serve/,
  astro: /astro[/\\]bin[/\\]astro\.mjs|dist[/\\]server[/\\]entry\.mjs/,
  wireit: /node_modules[/\\](\.bin[/\\]wireit|wireit[/\\])/,
};

const read = (file) => {
  try {
    return readFileSync(file, 'utf8');
  } catch {
    return null;
  }
};

/** Every PID between this process and init. None of them may be signalled. */
function ancestors() {
  const chain = new Set();
  let pid = process.pid;
  while (pid > 1 && !chain.has(pid)) {
    chain.add(pid);
    const stat = read(`/proc/${pid}/stat`);
    if (!stat) break;
    // The comm field can contain spaces and parentheses; PPID is the second
    // field after the closing one.
    pid = Number(stat.slice(stat.lastIndexOf(')') + 2).split(' ')[1]);
  }
  return chain;
}

function candidates(patterns) {
  const skip = ancestors();
  const found = [];

  for (const entry of readdirSync('/proc')) {
    const pid = Number(entry);
    if (!pid || skip.has(pid)) continue;

    let cwd;
    try {
      cwd = readlinkSync(`/proc/${pid}/cwd`);
    } catch {
      continue; // gone, or not ours to look at
    }
    if (cwd !== ROOT && !cwd.startsWith(`${ROOT}${path.sep}`)) continue;

    const cmdline = read(`/proc/${pid}/cmdline`)?.replace(/\0/g, ' ');
    if (!cmdline) continue;
    if (!patterns.some((pattern) => pattern.test(cmdline))) continue;

    found.push({ pid, cmdline: cmdline.trim() });
  }

  return found;
}

const alive = (pid) => {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
};

const signal = (pid, sig) => {
  try {
    process.kill(pid, sig);
  } catch {
    // Already gone, or not ours — either way there is nothing to do.
  }
};

const names = process.argv.slice(2).filter((name) => name in SERVERS);
const patterns = (names.length ? names : Object.keys(SERVERS)).map(
  (name) => SERVERS[name],
);

const targets = candidates(patterns);
if (!targets.length) {
  console.log('kill-demos: nothing running');
  process.exit(0);
}

for (const { pid, cmdline } of targets) {
  console.log(`kill-demos: ${pid}  ${cmdline.slice(0, 90)}`);
  signal(pid, 'SIGTERM');
}

// A dev server that ignores SIGTERM still has to go, but give it the chance to
// shut its sockets first — a SIGKILLed Next leaves its port held for a while.
setTimeout(() => {
  for (const { pid } of targets) if (alive(pid)) signal(pid, 'SIGKILL');
}, 1500);
