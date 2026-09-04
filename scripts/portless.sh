#!/bin/sh
# Run a demo app behind a stable http://<name>.localhost:1355 URL instead of a
# fixed port, so a server left over from another project cannot hold the port
# hostage.
#
# Unprivileged proxy port and plain HTTP on purpose: 443 needs sudo and HTTPS
# needs a CA in the system trust store. Neither is worth it for demo apps.
# The port lives here and in the URLs the tests use — nowhere else. Both are
# set, not defaulted: those URLs are literals, so an inherited PORTLESS_PORT
# or PORTLESS_HTTPS would move every app out from under every test.
#
# PORTLESS=0 makes portless exec the command untouched, falling back to the
# ${PORT:-<default>} each example's own scripts carry.
set -e
# Callers cd into package directories, and this may run outside a pnpm script,
# so put the repo's own bin dir on PATH rather than trusting the inherited one.
root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
PATH="$root/node_modules/.bin:$PATH"

export PORTLESS_PORT=1355
export PORTLESS_HTTPS=0
exec portless run --force "$@"
